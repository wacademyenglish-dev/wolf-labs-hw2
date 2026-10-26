/* ============================================================
   O PORTEIRO DA LIÇÃO DE CASA 2.0 — wolf-labs-hw2.pages.dev   (24/10/2026)
   Versão pequena do porteiro das aulas (_WOLF/porteiro): só a página
   da HW2 passa pela porta; áudio, script e CSS ficam livres.

   O crachá é o MESMO da plataforma (src/lib/cracha.mjs): ?wl_t=<validade>.<assinatura>,
   HMAC-SHA256 de "<validade>|/p/<hash>/" com WL_CRACHA_SEGREDO (ou ...2).
   Valeu: abre e ganha cookie de 12 h para aquela aula.

   TRAVA DE LIGAR: sem a chave no projeto do Cloudflare, deixa tudo passar.
   Sem crachá válido não há para onde mandar (a HW2 só abre dentro da
   tarefa da plataforma): mostra uma página escura pedindo para abrir pelo app.
   ============================================================ */

const DOZE_HORAS = 12 * 60 * 60;
const PAGINA = /^\/p\/([a-z0-9]+)\/[^/]+\/HW2\/(index\.html)?$/i;

const deB64url = (s) => {
  const b = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4));
  return Uint8Array.from(b, (c) => c.charCodeAt(0));
};
const b64url = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)))
  .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

async function chave(segredo) {
  return crypto.subtle.importKey('raw', new TextEncoder().encode(segredo),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}
async function confere(valor, escopo, sufixo, k) {
  if (!valor) return false;
  const [exp, sig] = String(valor).split('.');
  if (!/^\d+$/.test(exp || '') || !sig) return false;
  if (Number(exp) < Math.floor(Date.now() / 1000)) return false;
  try {
    return await crypto.subtle.verify('HMAC', k, deB64url(sig), new TextEncoder().encode(`${exp}|${escopo}${sufixo}`));
  } catch { return false; }
}
async function assina(escopo, sufixo, segundos, k) {
  const exp = Math.floor(Date.now() / 1000) + segundos;
  const sig = await crypto.subtle.sign('HMAC', k, new TextEncoder().encode(`${exp}|${escopo}${sufixo}`));
  return `${exp}.${b64url(sig)}`;
}
function lerCookie(request, nome) {
  const m = (request.headers.get('Cookie') || '').match(new RegExp(`(?:^|;\\s*)${nome}=([^;]+)`));
  return m ? m[1] : null;
}

const FORA = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Wolf Labs</title>
<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#14111f;color:#ece8f6;font-family:Manrope,system-ui,sans-serif;text-align:center;padding:24px">
<div><p style="font-size:20px;margin:0 0 8px">Abra esta lição pelo app Wolf Labs.</p>
<p style="color:#b9b0d6;margin:0">Open this homework from your Wolf Labs app.</p>
<p style="margin-top:20px"><a href="https://wolflabs.app.br/aluno" style="color:#c9b8ff">wolflabs.app.br</a></p></div></body>`;

export async function onRequest({ request, env, next }) {
  const segredo = env.WL_CRACHA_SEGREDO2 || env.WL_CRACHA_SEGREDO;
  if (!segredo) return next();                       // trava de ligar

  const url = new URL(request.url);
  let caminho;
  try { caminho = decodeURIComponent(url.pathname).replace(/\/{2,}/g, '/'); } catch { caminho = url.pathname; }
  const achado = caminho.match(PAGINA);
  if (!achado) return next();                        // só a página passa pela porta

  const escopo = `/p/${achado[1].toLowerCase()}/`;
  /* 26/10: a aluna-teste via "Abra pelo app" mesmo entrando pelo app — a chave colada aqui pode
     ter vindo com espaço/quebra de linha. Tenta as duas chaves, cruas e aparadas; a que bater assina o cookie. */
  const cands = [...new Set([env.WL_CRACHA_SEGREDO2, env.WL_CRACHA_SEGREDO]
    .filter(Boolean).flatMap((s) => [String(s), String(s).trim()]).filter(Boolean))];
  let k = await chave(segredo);
  for (const s of cands) {
    const kk = await chave(s);
    if (await confere(url.searchParams.get('wl_t'), escopo, '', kk)) { k = kk; break; }
  }

  if (await confere(url.searchParams.get('wl_t'), escopo, '', k)) {
    const cookie = await assina(escopo, '|c', DOZE_HORAS, k);
    const resp = await next();
    const saida = new Response(resp.body, resp);
    saida.headers.append('Set-Cookie', `wl_c=${cookie}; Path=${escopo}; Max-Age=${DOZE_HORAS}; HttpOnly; Secure; SameSite=None; Partitioned`);
    saida.headers.set('Cache-Control', 'private, no-store');
    return saida;
  }
  if (await confere(lerCookie(request, 'wl_c'), escopo, '|c', k)) {
    const resp = await next();
    const saida = new Response(resp.body, resp);
    saida.headers.set('Cache-Control', 'private, no-store');
    return saida;
  }
  return new Response(FORA, { status: 403, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}
