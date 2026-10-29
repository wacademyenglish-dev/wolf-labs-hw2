/* O CLIENTE · Arena do Cliente (catálogo IA-xx) · curso Selling Services · 28/10/2026
   Carregado DEPOIS do revisao.js. Dois modos, os mesmos dados:
   · MODO PROFESSOR (sempre): o professor é o cliente, lê a ficha (só ele vê as respostas) e
     marca cada fato que o aluno descobriu perguntando.
   · MODO IA (só na sala ao vivo, botão do professor): o aluno escreve, o lado do PROFESSOR chama
     a IA (window.__wlSalaIA('cliente') → sala → função cliente-ia, com o crédito do professor),
     a IA responde no papel do cliente e marca os fatos revelados. O estado vai ao aluno por
     window.__wlSalaEstado. No fim, "Coach": 2 acertos e até 2 correções das falas do aluno.
   CLIENTE = { rot, codigo:'IA-01', persona:{ nome, cargo, empresa, humor, ini }, missao, abre,
               fatos:[{ k, q, r }], chips:[…], modelo, fim } */
S.cl = S.cl || { ach: {}, modo: 'prof', hist: [], esp: 0, coach: null, aviso: '' };
var CL_ALUNO = function () { return document.documentElement.classList.contains('wl-sala-aluno'); };
var CL_SALA = function () { return typeof window.__wlSalaIA === 'function'; };
function clManda() { try { if (window.__wlSalaEstado && !CL_ALUNO()) window.__wlSalaEstado({ cl: S.cl }); } catch (e) { /* segue */ } }
function clDados(extra) {
  var C = window.CLIENTE;
  var d = { persona: C.persona, missao: C.missao, fatos: C.fatos.map(function (f) { return { k: f.k, r: f.r }; }),
    hist: S.cl.hist.slice(), nivel: (window.REV && REV.nivel) || 'A1' };
  for (var k in extra) d[k] = extra[k];
  return d;
}
if (!R.cliente) R.cliente = function (c) {
  var C = window.CLIENTE, e = S.cl, P = C.persona, F = C.fatos, n = F.filter(function (f, i) { return e.ach[i]; }).length, ia = e.modo === 'ia';
  var primeiro = P.nome.split(' ')[0];
  var conversa = ia ? '<div class="cl-chat">' + '<div class="cl-msg cl-c"><small>' + primeiro.toUpperCase() + '</small>' + C.abre + '</div>'
      + e.hist.map(function (m) { return '<div class="cl-msg ' + (m.de === 'aluno' ? 'cl-a' : 'cl-c') + '"><small>' + (m.de === 'aluno' ? 'YOU' : primeiro.toUpperCase()) + '</small>' + h(m.txt) + '</div>'; }).join('')
      + (e.esp ? '<div class="cl-msg cl-c cl-esp"><small>' + primeiro.toUpperCase() + '</small>…</div>' : '') + '</div>'
    : '<div class="cl-fala"><small>' + primeiro.toUpperCase() + ' SAYS</small>“' + C.abre + '”</div>';
  var ficha = '<div class="pv-tarefa vd cl-ficha"><small>' + C.rot + (C.codigo ? ' · ' + C.codigo : '') + (ia ? ' · AI CLIENT' : '') + '</small>'
    + '<div class="cl-quem"><span class="cl-av" aria-hidden="true">' + (P.ini || P.nome.charAt(0)) + '</span><div><b>' + P.nome + '</b><span>' + P.cargo + ' · ' + P.empresa + '</span></div></div>'
    + '<p class="cl-humor">' + P.humor + '</p>' + conversa
    + (ia ? '' : '<p class="so-prof dica-aluno">You are ' + primeiro + '. Answer ONLY what the student asks, in short sentences. Your answers are on the right. Tap a fact when the student finds it.</p>')
    + (!ia && CL_SALA() ? '<div class="pratos-bt so-prof"><button type="button" class="btn" data-a="cl-ia">Let the AI play ' + primeiro + '</button></div>' : '')
    + (ia ? '<div class="pratos-bt so-prof"><button type="button" class="btn" data-a="cl-prof">I’ll play ' + primeiro + ' myself</button></div>' : '')
    + '</div>';
  var fatos = F.map(function (f, i) {
    return '<button type="button" class="cl-fato' + (e.ach[i] ? ' on' : '') + '" data-a="cl-f" data-n="' + i + '"><i aria-hidden="true"></i><span><b>' + f.k + '</b>'
      + (e.ach[i] ? '<em>' + f.r + '</em>' : '<em class="so-prof">' + f.q + ' → ' + f.r + '</em>') + '</span></button>';
  }).join('');
  var escrever = ia ? '<div class="cl-escreve"><textarea data-campo="cl-msg" rows="2" spellcheck="false" lang="en" placeholder="Ask ' + primeiro + '…" aria-label="Your message">' + h((S.txt || {})['cl-msg'] || '') + '</textarea>'
      + '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="cl-env"' + (e.esp ? ' disabled' : '') + '>Send</button>'
      + (e.hist.filter(function (m) { return m.de === 'aluno'; }).length >= 3 ? '<button type="button" class="btn" data-a="cl-coach"' + (e.esp ? ' disabled' : '') + '>Coach</button>' : '') + '</div></div>'
    : '';
  var coach = e.coach ? '<div class="cl-coach"><small>COACH</small>' + (e.coach.bom || []).map(function (b) { return '<p class="aprova">✓ ' + h(b) + '</p>'; }).join('')
      + (e.coach.fixes || []).map(function (f) { return '<p class="cl-fix"><s>' + h(f.errado) + '</s> → <b>' + h(f.certo) + '</b>' + (f.porque ? '<em>' + h(f.porque) + '</em>' : '') + '</p>'; }).join('') + '</div>' : '';
  var lado = '<div class="mesa-card"><small>YOUR MISSION · ' + n + ' OF ' + F.length + '</small><p class="pq">' + C.missao + '</p>'
    + '<div class="cl-fatos">' + fatos + '</div>'
    + escrever + (e.aviso ? '<p class="recusa">' + e.aviso + '</p>' : '') + coach
    + fala('cl', C.chips || [], [])
    + (n >= F.length ? '<p class="aprova">' + C.fim + '</p>' : '')
    + mostra('cl-m', C.modelo, 1) + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + ficha + '</div><div class="lado-l">' + lado + '</div></div>';
};
TOQUES['cl-f'] = function (b, n) { S.cl.ach[n] = S.cl.ach[n] ? 0 : 1; clManda(); };
TOQUES['cl-ia'] = function () { S.cl.modo = 'ia'; S.cl.aviso = ''; };
TOQUES['cl-prof'] = function () { S.cl.modo = 'prof'; S.cl.esp = 0; };
TOQUES['cl-env'] = function () {
  var txt = String((S.txt || {})['cl-msg'] || '').trim();
  if (!txt || S.cl.esp) return false;
  S.cl.esp = 1; S.cl.aviso = '';
  if (CL_ALUNO()) return;                          // o lado do aluno só espera: quem chama é o professor
  var antes = S.cl.hist.slice();
  S.cl.hist.push({ de: 'aluno', txt: txt.slice(0, 300) });
  S.txt['cl-msg'] = '';
  clManda();
  window.__wlSalaIA('cliente', clDados({ hist: antes, fala: txt.slice(0, 300) })).then(function (r) {
    S.cl.esp = 0;
    if (r && r.fala) { S.cl.hist.push({ de: 'cliente', txt: r.fala }); (r.achou || []).forEach(function (i) { S.cl.ach[i] = 1; }); }
    else S.cl.aviso = 'The AI is off right now. Teacher: answer as the client.';
    pinta(); clManda();
  });
};
TOQUES['cl-coach'] = function () {
  if (S.cl.esp) return false;
  S.cl.esp = 1;
  if (CL_ALUNO()) return;
  clManda();
  window.__wlSalaIA('cliente', clDados({ coach: true })).then(function (r) {
    S.cl.esp = 0;
    if (r && (r.bom || r.fixes)) S.cl.coach = r; else S.cl.aviso = 'The coach is off right now.';
    pinta(); clManda();
  });
};
/* o lado do aluno recebe o estado do cliente que o professor mandou */
window.addEventListener('wl-sala-estado', function (ev) {
  var d = ev.detail || {};
  if (!d.cl || !CL_ALUNO()) return;
  S.cl = d.cl; S.txt = S.txt || {}; if (!S.cl.esp) S.txt['cl-msg'] = '';
  pinta();
});
