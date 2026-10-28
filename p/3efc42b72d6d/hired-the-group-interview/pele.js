/* ============================================================
   KIT LIVE CLASS · AS PELES (núcleo)                    22/10/2026
   Pedido do Carlos: "lições lindas e com identidade própria".
   Cada pele é um arquivo kit/peles/<nome>.js que se registra em
   WL_PELES[nome] = { linha, nome, fontes, tokens, css, capa(d) }.
   kit/monta_pele.py junta este núcleo + as peles em kit/pele.js.

   Como a aula escolhe:  window.WL_PELE = { pele: 'streaming' } (pele-dados.js)
   ou <script src="pele.js" data-pele="streaming">; sem escolha, a pele sai
   do rodízio da linha pelo título (igual nos dois lados da sala).

   A capa: a pele LÊ a capa que a aula já desenha (kick, h1, banda, sub,
   botão, imagem, faixa Live) e redesenha no estilo dela. Aula com capa
   própria de pele (sem .capa) fica como está. As páginas: a foto da cena
   viva no fundo, vidro por cima, títulos na letra da pele, o acento da
   própria aula (--ac). Fotofobia: tudo escuro, nada de campo claro grande.
   ============================================================ */
(function () {
  var P = window.WL_PELES = window.WL_PELES || {};
  var eu = document.currentScript;
  function h(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function hash(s) { var x = 7; for (var i = 0; i < s.length; i++) x = (x * 31 + s.charCodeAt(i)) % 100003; return x; }
  function linhaDaAula() { var b = document.querySelector('.marca b'); return b ? b.textContent.trim().toUpperCase() : ''; }
  var POR_LINHA = {};   /* preenchido pelas peles: POR_LINHA['WOLFLIX'] = ['streaming', …] */

  function escolhe() {
    var naUrl = (location.search.match(/[?&]pele=([\w-]+)/) || [])[1];   /* prévia: ?pele=nome */
    var pedido = naUrl || (window.WL_PELE && window.WL_PELE.pele) || (eu && eu.getAttribute('data-pele'));
    if (pedido && P[pedido]) return pedido;
    Object.keys(P).forEach(function (k) { (P[k].linhas || []).forEach(function (l) { (POR_LINHA[l] = POR_LINHA[l] || []).push(k); }); });
    var l = POR_LINHA[linhaDaAula()] || POR_LINHA['MAIN SERIES'] || Object.keys(P);
    return l.slice().sort()[hash(document.title) % l.length];
  }

  /* o que a capa velha tinha */
  function leCapa(html) {
    var t = document.createElement('div'); t.innerHTML = html;
    var cap = t.querySelector('.capa'); if (!cap) return null;
    var q = function (s) { return cap.querySelector(s); };
    var bt = q('[data-a="ir"]'), im = q('img'), fx = q('.faixa');
    var kick = (q('.kick') || {}).textContent || '';
    var partes = kick.split('·').map(function (s) { return s.trim(); }).filter(Boolean);
    return {
      kick: kick, chips: partes.slice(0, 4), titulo: (q('h1') || {}).textContent || document.title,
      banda: (q('.banda') || {}).innerHTML || '', sub: (q('.sub') || {}).innerHTML || '',
      botao: bt ? bt.textContent.trim() : 'Start the lesson', ir: bt ? +bt.getAttribute('data-n') || 1 : 1,
      img: im ? im.getAttribute('src') : img((L[0] && L[0].img) || 'capa'), alt: im ? im.getAttribute('alt') || '' : '',
      faixa: fx ? fx.outerHTML : '', linha: linhaDaAula()
    };
  }
  /* as cenas da aula (para episódios, faixas, sumário…) */
  var EST = { o: 'Out loud', l: 'Listen', f: 'Focus', w: 'Write' };
  function cenas() {
    return L.map(function (x, i) { return i && x.rot ? { i: i, t: String(x.rot).replace(/^[IVXLC]+\s*·\s*/, ''), est: x.est, estNome: EST[x.est] || '', min: x.min || 0, extra: !!x.extra, img: img(x.img || (L[0] && L[0].img) || 'capa'), frase: x.t || '' } : null; }).filter(Boolean);
  }
  var util = { h: h, cenas: cenas, totalMin: function () { return cenas().reduce(function (a, c) { return a + (c.extra ? 0 : c.min); }, 0); } };

  /* o CSS comum a todas as peles: a página vira um episódio tocando */
  var BASE = [
    '#fundo{inset:0;filter:saturate(var(--pl-sat,.85)) brightness(var(--pl-luz,.5));background-size:cover;background-position:center 40%}',
    '#fundo::after{background:linear-gradient(90deg,rgba(var(--pl-escuro),.93) 0%,rgba(var(--pl-escuro),.74) 46%,rgba(var(--pl-escuro),.5) 100%),linear-gradient(0deg,rgba(var(--pl-escuro),.95) 0%,transparent 45%),linear-gradient(180deg,rgba(var(--pl-escuro),.8) 0%,transparent 22%)}',
    'body .cab{gap:4px;margin-bottom:4px}',
    'body .cab .rot{font:700 12px var(--ui);letter-spacing:.16em;color:var(--t2)}',
    'body .cab .rot b{border-radius:var(--pl-raio-p,50%);background:var(--ac);color:var(--pl-sobre-ac,#140f1c)}',
    'body .cab h1{font:var(--pl-tit-peso,800) clamp(28px,2.5vw,50px)/1.04 var(--pl-tit);letter-spacing:var(--pl-tit-esp,-.02em);text-transform:var(--pl-tit-caixa,none);font-style:var(--pl-tit-estilo,normal);color:#fff;text-shadow:0 4px 30px rgba(0,0,0,.6)}',
    'body .cab p{font:500 clamp(14px,1vw,17px)/1.5 var(--ui);color:var(--t2);max-width:62ch}',
    'body .fm-cena,body .fm-folha,body .vd,body .fm-poster,body .fm-canhoto{background:var(--pl-vidro)!important;-webkit-backdrop-filter:blur(22px) saturate(1.15);backdrop-filter:blur(22px) saturate(1.15);border:1px solid var(--pl-borda)!important;border-radius:var(--pl-raio,22px)!important;box-shadow:0 30px 70px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.05)!important}',
    'body .fm-cena::before{display:none}',
    'body .fm-cena-n,body .fm-folha-t b,body .fm-placa-t,body .fm-depois span,body .fm-canhoto b{font-family:var(--pl-tit);font-style:var(--pl-tit-estilo,normal);text-transform:var(--pl-tit-caixa,none);color:var(--ac2)}',
    'body .fm-pista b{border-bottom-color:var(--ac)}',
    'body .fm-fita i.f{background:var(--ac)}',
    'body .fm-certa b,body .fm-certa-l b,body .fm-placa b{color:var(--pl-acerto,var(--am))}',
    'body .fm-placa{background:var(--pl-vidro);border:1px solid var(--pl-borda);box-shadow:0 24px 50px rgba(0,0,0,.45);border-radius:var(--pl-raio,16px);overflow:hidden;position:sticky;top:6px}',
    'body .fm-placa::before{content:"";position:absolute;inset:0 0 auto;height:3px;background:var(--ac)}',
    'body .fm-placa.grande{position:relative;top:0}',
    'body .fm-check{background:var(--ac);color:var(--pl-sobre-ac,#140f1c)}',
    'body .fm-check i::after{border-color:var(--pl-sobre-ac,#140f1c)}',
    'body .fm-n,body .fm-letra{color:var(--ac)}body .fm-n{background:var(--ac);color:var(--pl-sobre-ac,#140f1c)}',
    'body .fm-poster.on{border-color:var(--ac)!important;box-shadow:0 0 0 2px var(--ac),0 30px 60px rgba(0,0,0,.5)!important}',
    'body .pl-x-capa{width:min(1320px,100%);margin:0 auto}',
    '@media (prefers-reduced-motion:reduce){body .pl-x-capa *{transition:none!important;animation:none!important}}'
  ].join('');

  function aplica() {
    var nome = escolhe(), pele = P[nome]; if (!pele) return;
    /* 23/10: aula de chassi antigo sem --ac deixava botões cheios invisíveis; empresta o --am */
    try { var rz = document.documentElement, cz = getComputedStyle(rz); if (!cz.getPropertyValue('--ac').trim()) rz.style.setProperty('--ac', cz.getPropertyValue('--am').trim() || '#f0b866'); } catch (e) {}
    document.documentElement.setAttribute('data-pele', nome);
    if (pele.fontes && !document.querySelector('link[data-pele-fontes]')) {
      var lk = document.createElement('link'); lk.rel = 'stylesheet'; lk.setAttribute('data-pele-fontes', '');
      lk.href = 'https://fonts.googleapis.com/css2?' + pele.fontes + '&display=swap'; document.head.appendChild(lk);
    }
    var st = document.createElement('style'); st.setAttribute('data-pele', nome);
    st.textContent = ':root{' + (pele.tokens || '') + '}' + BASE + (pele.css || '');
    document.head.appendChild(st);
    /* algumas aulas criam R num arquivo carregado DEPOIS deste (revisao.js…): se R ainda não existe,
       troca a capa quando o documento termina de ler os scripts (readystatechange vem antes do DOMContentLoaded do motor) */
    function trocaCapa() {
      if (!pele.capa || typeof R === 'undefined' || !R.capa || R.capa.__pele) return;
      var orig = R.capa;
      R.capa = function (c) { var html = orig(c); var d = leCapa(html); if (!d) return html; try { return '<div class="pl-x-capa">' + pele.capa(d, util) + '</div>'; } catch (e) { return html; } };
      R.capa.__pele = 1;
    }
    trocaCapa();
    if (document.readyState === 'loading') document.addEventListener('readystatechange', function () { if (document.readyState === 'interactive') trocaCapa(); });
  }
  window.WL_PELE_UTIL = util;
  window.__wlAplicaPele = aplica;
})();

/* WOLFSTATION · ARCADE: um fliperama à noite. Marquise de néon, tela CRT (scanlines suaves, sem piscar), PRESS START e as cenas como tabela de recordes. */
WL_PELES.arcade = { linhas: ['WOLFSTATION'], nome: 'Arcade',
  fontes: 'family=Tilt+Neon&family=VT323',
  tokens: '--pl-tit:"Tilt Neon","Urbanist",sans-serif;--pl-tit-peso:400;--pl-tit-esp:.01em;--pl-escuro:8,6,16;--pl-vidro:rgba(13,10,26,.78);--pl-borda:color-mix(in srgb,var(--ac) 30%,transparent);--pl-raio:10px;--pl-raio-p:2px;--pl-sobre-ac:#0a0714',
  css: 'body .cab h1{text-shadow:0 0 18px color-mix(in srgb,var(--ac) 55%,transparent)}'
    + 'body .ar-gab{position:relative;border-radius:26px 26px 14px 14px;padding:clamp(14px,1.8vw,24px);background:linear-gradient(180deg,#151026,#0b0816 60%,#08060f);border:1px solid rgba(255,255,255,.07);box-shadow:0 40px 90px rgba(0,0,0,.6),inset 0 0 0 6px #0a0714,inset 0 0 0 7px color-mix(in srgb,var(--ac) 22%,transparent)}'
    + 'body .ar-marq{margin:0 0 16px;padding:clamp(14px,1.6vw,22px) 18px;border-radius:14px;text-align:center;background:radial-gradient(ellipse at 50% 120%,color-mix(in srgb,var(--ac) 22%,transparent),transparent 70%),#0c0919;border:1px solid color-mix(in srgb,var(--ac) 35%,transparent)}'
    + 'body .ar-marq small{display:block;font:22px/1 "VT323",monospace;letter-spacing:.3em;color:var(--ac2);opacity:.8}'
    + 'body .ar-marq h1{margin:6px 0 0;font:400 clamp(40px,4.6vw,88px)/1 var(--pl-tit);color:color-mix(in srgb,var(--ac2) 30%,#fff);text-shadow:0 0 6px color-mix(in srgb,var(--ac) 70%,transparent),0 0 26px color-mix(in srgb,var(--ac) 45%,transparent);text-wrap:balance}'
    + 'body .ar-corpo{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:clamp(14px,1.6vw,22px)}'
    + 'body .ar-tela{position:relative;min-height:clamp(340px,52vh,560px);border-radius:22px/18px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;gap:12px;padding:clamp(18px,2.2vw,30px);background:linear-gradient(0deg,rgba(8,6,16,.95),rgba(8,6,16,.25) 60%),var(--arte) center 35%/cover;box-shadow:inset 0 0 90px rgba(0,0,0,.85),0 0 0 10px #05040a}'
    + 'body .ar-tela::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(0,0,0,.22) 0 1px,transparent 1px 3px),radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,.55))}'
    + 'body .ar-tela>*{position:relative;z-index:1}body .ar-sub{margin:0;font:500 clamp(15px,1.1vw,18px)/1.55 var(--ui);color:#cfc9e0;max-width:46ch}'
    + 'body .ar-start{align-self:flex-start;display:flex;flex-direction:column;align-items:flex-start;gap:2px;padding:12px 22px;border-radius:8px;border:2px solid var(--ac);background:rgba(8,6,16,.7);color:var(--ac2);font:30px/1 "VT323",monospace;letter-spacing:.14em;box-shadow:0 0 18px color-mix(in srgb,var(--ac) 35%,transparent);transition:background .2s,box-shadow .2s}'
    + 'body .ar-start small{font-size:16px;letter-spacing:.24em;color:#a49dbb}body .ar-start:hover{background:color-mix(in srgb,var(--ac) 18%,#08060f);box-shadow:0 0 30px color-mix(in srgb,var(--ac) 50%,transparent)}'
    + 'body .ar-placar{display:flex;flex-direction:column;border-radius:14px;padding:14px;background:#0a0814;border:1px solid rgba(255,255,255,.07);font-family:"VT323",monospace}'
    + 'body .ar-placar h2{margin:0 0 8px;text-align:center;font:400 26px/1 "VT323",monospace;letter-spacing:.3em;color:var(--ac)}'
    + 'body .ar-cab,body .ar-lin{display:grid;grid-template-columns:44px minmax(0,1fr) 74px 56px;gap:10px;align-items:baseline}'
    + 'body .ar-cab{padding:0 10px 6px;font-size:16px;letter-spacing:.18em;color:#6f6889;border-bottom:1px dashed rgba(255,255,255,.12)}'
    + 'body .ar-lin{width:100%;padding:7px 10px;border:0;border-radius:6px;background:none;color:#ddd8ee;text-align:left;font:21px/1.15 "VT323",monospace;transition:background .15s,color .15s}'
    + 'body .ar-lin:nth-child(odd){background:rgba(255,255,255,.025)}body .ar-lin b{font-weight:400;color:var(--ac2)}body .ar-lin span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase}body .ar-lin i{font-style:normal;color:#8e87a8}body .ar-lin em{font-style:normal;text-align:right;color:var(--ac)}'
    + 'body .ar-lin:hover,body .ar-lin:first-of-type{background:color-mix(in srgb,var(--ac) 16%,transparent);color:#fff}'
    + 'body .ar-pe{margin-top:auto;padding-top:10px;text-align:center;font-size:17px;letter-spacing:.2em;color:#6f6889}'
    + 'body .ar-gab button:focus-visible{outline:3px solid var(--ac2);outline-offset:3px}'
    + '@media (max-width:900px){body .ar-corpo{grid-template-columns:1fr}body .ar-cab,body .ar-lin{grid-template-columns:36px minmax(0,1fr) 60px 48px}}',
  capa: function (d, u) {
    var C = u.cenas(), ORD = ['1ST', '2ND', '3RD'];
    var t = C.map(function (c, k) { return '<button type="button" class="ar-lin" data-a="ir" data-n="' + c.i + '"><b>' + (ORD[k] || (k + 1) + 'TH') + '</b><span>' + u.h(c.t) + '</span><i>' + (c.extra ? 'BONUS' : u.h(c.estNome).toUpperCase()) + '</i><em>' + (c.min ? c.min + 'M' : '--') + '</em></button>'; }).join('');
    return '<div class="ar-gab"><header class="ar-marq"><small>' + u.h(d.chips.join(' · ') || 'WOLFSTATION') + '</small><h1>' + u.h(d.titulo) + '</h1></header>'
      + '<div class="ar-corpo"><section class="ar-tela" style="--arte:url(\'' + d.img + '\')">' + (d.banda ? '<p class="ar-sub" style="color:var(--ac2);font-weight:700">' + d.banda + '</p>' : '') + '<p class="ar-sub">' + d.sub + '</p>'
      + '<button type="button" class="ar-start" data-a="ir" data-n="' + d.ir + '" aria-label="' + u.h(d.botao) + '"><small>INSERT COIN</small>PRESS START</button></section>'
      + '<section class="ar-placar"><h2>SELECT LEVEL</h2><div class="ar-cab" aria-hidden="true"><span>RNK</span><span>STAGE</span><span>MODE</span><span style="text-align:right">TIME</span></div>' + t
      + '<p class="ar-pe">' + C.length + ' STAGES · ' + u.totalMin() + ' MIN</p></section></div></div>' + d.faixa;
  } };

/* WOLFLIX · CINEMA (ref. palácio de cinema Art Déco à noite): letreiro de lâmpadas, ingresso, programa de rolos. */
WL_PELES.cinema = { linhas: ['WOLFLIX'], nome: 'Cinema',
  fontes: 'family=Limelight&family=Josefin+Sans:wght@600;700',
  tokens: '--pl-tit:"Limelight","Urbanist",serif;--pl-tit-peso:400;--pl-tit-esp:.01em;--pl-escuro:16,10,9;--pl-vidro:rgba(22,13,11,.66);--pl-borda:rgba(214,170,96,.22);--pl-raio:14px;--pl-raio-p:4px;--pl-sobre-ac:#140a06',
  css: 'body .cn-capa{--ouro:#c9a35a;position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,400px);gap:clamp(18px,2.4vw,34px);padding:clamp(20px,3vw,40px);border-radius:20px;overflow:hidden;background:repeating-conic-gradient(from 0deg at 50% 118%,rgba(201,163,90,.07) 0 3deg,transparent 3deg 9deg),radial-gradient(ellipse at 50% 120%,rgba(120,30,24,.5),transparent 60%),#120b0a;border:1px solid rgba(201,163,90,.28);box-shadow:0 40px 90px rgba(0,0,0,.6),inset 0 0 0 6px #120b0a,inset 0 0 0 7px rgba(201,163,90,.3)}'
    + 'body .cn-esq{display:grid;gap:16px;align-content:center}'
    + 'body .cn-agora{margin:0;font:700 13px "Josefin Sans",var(--ui);letter-spacing:.42em;text-transform:uppercase;color:var(--ouro)}'
    + 'body .cn-marq{position:relative;padding:15px;border-radius:14px;background:#2a1408 radial-gradient(circle,#ffcf7a 0 2.4px,rgba(255,180,80,.22) 3.5px,transparent 6px) 0 0/22px 22px}'
    + 'body .cn-marq::after{content:"";position:absolute;inset:0;border-radius:inherit;background:radial-gradient(circle,#fff0c8 0 2.4px,transparent 4px) 11px 11px/22px 22px;animation:cn-luz 1.4s steps(2) infinite}'
    + 'body .cn-placa{position:relative;z-index:1;padding:clamp(14px,2vw,24px);border-radius:6px;background:linear-gradient(180deg,#1b0f0c,#0e0807);box-shadow:inset 0 0 0 1px rgba(201,163,90,.4)}'
    + 'body .cn-placa h1{margin:0;display:flex;flex-wrap:wrap;gap:.18em .5em;font:400 clamp(30px,3.9vw,66px)/1.05 var(--pl-tit)}'
    + 'body .cn-pal{display:inline-flex;gap:.06em}body .cn-pal i{font-style:normal;display:inline-grid;place-items:center;min-width:.82em;padding:.04em .06em;border-radius:3px;background:#0a0605;border:1px solid rgba(255,255,255,.08);color:var(--ac2);text-shadow:0 0 14px color-mix(in srgb,var(--ac2) 60%,transparent)}'
    + 'body .cn-banda{margin:0;font:700 14px "Josefin Sans",var(--ui);letter-spacing:.24em;text-transform:uppercase;color:#e9d6b0}'
    + 'body .cn-sub{margin:0;font:500 clamp(16px,1.15vw,19px)/1.55 var(--ui);color:#d7c8b8;max-width:52ch}'
    + 'body .cn-ing{justify-self:start;border:0;padding:0;background:none;border-radius:10px;filter:drop-shadow(0 16px 26px rgba(0,0,0,.55));transition:transform .2s}body .cn-ing:hover{transform:translateY(-3px) rotate(-1deg)}'
    + 'body .cn-ing>span{display:grid;grid-template-columns:auto auto;align-items:center;background:var(--ac);color:var(--pl-sobre-ac);border-radius:8px;-webkit-mask:radial-gradient(circle at 0 50%,transparent 11px,#000 11.5px) left/51% 100% no-repeat,radial-gradient(circle at 100% 50%,transparent 11px,#000 11.5px) right/51% 100% no-repeat;mask:radial-gradient(circle at 0 50%,transparent 11px,#000 11.5px) left/51% 100% no-repeat,radial-gradient(circle at 100% 50%,transparent 11px,#000 11.5px) right/51% 100% no-repeat}'
    + 'body .cn-ing b{padding:14px 22px 14px 26px;display:grid;font:400 22px var(--pl-tit);text-align:left}body .cn-ing small{font:700 11px "Josefin Sans",var(--ui);letter-spacing:.3em;opacity:.75}'
    + 'body .cn-ing em{padding:14px 22px 14px 18px;border-left:2px dashed color-mix(in srgb,var(--pl-sobre-ac) 45%,transparent);font:700 12px/1.4 "Josefin Sans",var(--ui);font-style:normal;letter-spacing:.18em;text-align:center}'
    + 'body .cn-cartaz{position:relative;margin:0;align-self:center;aspect-ratio:3/4;padding:10px;background:linear-gradient(135deg,#6b5228,#c9a35a 30%,#5a431f 60%,#b48d48);clip-path:polygon(14px 0,calc(100% - 14px) 0,100% 14px,100% calc(100% - 14px),calc(100% - 14px) 100%,14px 100%,0 calc(100% - 14px),0 14px)}'
    + 'body .cn-cartaz img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(.66) saturate(.85) sepia(.15);clip-path:inherit}'
    + 'body .cn-cartaz figcaption{position:absolute;left:10px;right:10px;bottom:10px;padding:28px 12px 12px;background:linear-gradient(0deg,rgba(10,6,5,.95),transparent);font:700 12px "Josefin Sans",var(--ui);letter-spacing:.34em;text-align:center;text-transform:uppercase;color:var(--ouro)}'
    + 'body .cn-prog{margin-top:18px;padding:clamp(16px,2vw,24px);border-radius:16px;background:rgba(18,11,10,.78);border:1px solid rgba(201,163,90,.22)}'
    + 'body .cn-prog>p{margin:0 0 12px;display:flex;align-items:center;gap:14px;font:400 22px var(--pl-tit);color:#f3e6cc}body .cn-prog>p::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,var(--ouro),transparent)}'
    + 'body .cn-rolos{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px}'
    + 'body .cn-rolo{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:14px;padding:10px 14px 10px 26px;border:1px solid rgba(201,163,90,.18);border-radius:8px;text-align:left;color:var(--t1);background:repeating-linear-gradient(180deg,#0a0605 0 5px,rgba(201,163,90,.35) 5px 9px,#0a0605 9px 14px) 7px 0/9px 100% no-repeat,#170e0c;transition:border-color .2s,background-color .2s}'
    + 'body .cn-rolo:hover{border-color:var(--ac);background-color:#221410}body .cn-rolo b{font:400 15px var(--pl-tit);color:var(--ac2);letter-spacing:.06em}'
    + 'body .cn-rolo span{display:grid;font:700 15px/1.3 var(--ui)}body .cn-rolo small,body .cn-rolo em{font:600 12px "Josefin Sans",var(--ui);font-style:normal;letter-spacing:.12em;text-transform:uppercase;color:var(--t3)}'
    + 'body .cn-capa button:focus-visible,body .cn-prog button:focus-visible{outline:3px solid var(--ac2);outline-offset:4px}'
    + '@keyframes cn-luz{50%{opacity:0}}'
    + '@media (max-width:900px){body .cn-capa{grid-template-columns:1fr}body .cn-cartaz{max-width:340px;justify-self:center}}'
    + '@media (prefers-reduced-motion:reduce){body .cn-marq::after{animation:none}}',
  capa: function (d, u) {
    var cs = u.cenas();
    var tit = u.h(d.titulo).split(/\s+/).filter(Boolean).map(function (w) { return '<span class="cn-pal">' + w.replace(/(&[a-z]+;|.)/g, '<i>$1</i>') + '</span>'; }).join('');
    var rolos = cs.map(function (c) { return '<button type="button" class="cn-rolo" data-a="ir" data-n="' + c.i + '"><b>Reel ' + ('0' + c.i).slice(-2) + '</b><span>' + u.h(c.t) + '<small>' + c.estNome + '</small></span><em>' + (c.extra ? 'bonus' : c.min + ' min') + '</em></button>'; }).join('');
    return '<section class="cn-capa"><div class="cn-esq"><p class="cn-agora">' + u.h(d.chips.join(' · ') || 'Now showing') + '</p>'
      + '<div class="cn-marq"><div class="cn-placa"><h1 aria-label="' + u.h(d.titulo) + '"><span aria-hidden="true" style="display:contents">' + tit + '</span></h1></div></div>'
      + (d.banda ? '<p class="cn-banda">' + d.banda + '</p>' : '') + '<p class="cn-sub">' + d.sub + '</p>'
      + '<button type="button" class="cn-ing" data-a="ir" data-n="' + d.ir + '"><span><b><small>Admit one</small>' + u.h(d.botao) + '</b><em>' + cs.length + ' reels<br>' + u.totalMin() + ' min</em></span></button></div>'
      + '<figure class="cn-cartaz"><img src="' + d.img + '" alt="' + u.h(d.alt) + '"><figcaption>Now showing</figcaption></figure></section>'
      + '<section class="cn-prog"><p>Tonight’s program</p><div class="cn-rolos">' + rolos + '</div></section>' + d.faixa;
  } };

/* WOLFSTATION · CONSOLE (ref. PS5 UI Concept, Netguru): arte em tela cheia, Play redondo, fileira de fases. HUD de canto cortado. */
WL_PELES.console = { linhas: ['WOLFSTATION'], nome: 'Console',
  fontes: 'family=Chakra+Petch:wght@600;700',
  tokens: '--pl-tit:"Chakra Petch","Urbanist",sans-serif;--pl-tit-peso:700;--pl-tit-esp:0;--pl-escuro:7,10,8;--pl-vidro:rgba(12,16,13,.74);--pl-borda:rgba(255,255,255,.1);--pl-raio:4px;--pl-raio-p:3px;--pl-sobre-ac:#0b1206',
  css: 'body .fm-cena,body .fm-folha,body .vd,body .fm-poster,body .fm-placa{clip-path:polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px))}body .fm-check{border-radius:4px;box-shadow:0 4px 0 rgba(0,0,0,.45)}body .fm-check:active{transform:translateY(3px);box-shadow:none}'
    + 'body .cx-capa{position:relative;min-height:clamp(480px,74vh,780px);border-radius:24px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;gap:22px;padding:clamp(20px,2.6vw,36px);background:linear-gradient(90deg,rgba(7,10,8,.88) 0%,rgba(7,10,8,.45) 42%,rgba(7,10,8,0) 70%),linear-gradient(0deg,rgba(7,10,8,.92) 0%,rgba(7,10,8,.2) 42%,transparent 60%),var(--arte) center 30%/cover;border:1px solid rgba(255,255,255,.08);box-shadow:0 40px 90px rgba(0,0,0,.55)}'
    + 'body .cx-abas{display:flex;gap:22px;flex-wrap:wrap;font:600 14px var(--ui);color:rgba(255,255,255,.55)}body .cx-abas span:first-child{color:#fff;border-bottom:2px solid #fff;padding-bottom:4px}'
    + 'body .cx-tx{max-width:660px;display:grid;gap:12px}body .cx-jogo{margin:0;font:700 clamp(18px,1.4vw,24px) var(--pl-tit);color:var(--ac2);letter-spacing:.04em;text-transform:uppercase}body .cx-tx h1{margin:0;font:700 clamp(40px,4.4vw,84px)/.98 var(--pl-tit);color:#fff;text-shadow:0 5px 0 rgba(0,0,0,.45);text-wrap:balance}body .cx-sub{margin:0;font:500 clamp(16px,1.15vw,19px)/1.55 var(--ui);color:#d5ddd6;max-width:46ch}'
    + 'body .cx-acoes{display:flex;align-items:center;gap:14px}body .cx-acoes b{display:block;font:700 22px var(--pl-tit);color:#fff}body .cx-acoes small{font:600 13px var(--ui);color:var(--t2)}body .cx-play{width:74px;height:74px;border-radius:50%;border:0;background:#fff;display:grid;place-items:center;box-shadow:0 0 0 8px rgba(255,255,255,.14)}body .cx-play i{width:0;height:0;margin-left:6px;border-left:22px solid #0b1206;border-top:13px solid transparent;border-bottom:13px solid transparent}'
    + 'body .cx-fila{display:flex;gap:12px;align-items:flex-end;overflow-x:auto;padding:14px 4px 4px;scrollbar-width:none}body .cx-fase{position:relative;flex:0 0 150px;height:96px;border-radius:12px;border:2px solid rgba(255,255,255,.12);background:var(--bg) center/cover;color:#fff;text-align:left;padding:0;overflow:hidden;transition:flex-basis .25s,height .25s,border-color .25s}body .cx-fase::after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.85),rgba(0,0,0,.15) 70%)}body .cx-n{position:absolute;top:6px;left:8px;z-index:1;font:700 18px var(--pl-tit)}body .cx-ft{position:absolute;left:8px;right:8px;bottom:6px;z-index:1;display:grid}body .cx-ft b{font:700 13px/1.2 var(--ui)}body .cx-ft small{font:600 11px var(--ui);color:rgba(255,255,255,.7)}body .cx-fase.vez,body .cx-fase:hover{flex-basis:230px;height:136px;border-color:#fff}',
  capa: function (d, u) {
    var f = u.cenas().map(function (c, i) { return '<button type="button" class="cx-fase' + (i === 0 ? ' vez' : '') + '" data-a="ir" data-n="' + c.i + '" style="--bg:url(\'' + c.img + '\')"><span class="cx-n">' + c.i + '</span><span class="cx-ft"><b>' + u.h(c.t) + '</b><small>' + c.estNome + (c.min ? ' · ' + c.min + ' min' : '') + '</small></span></button>'; }).join('');
    return '<div class="cx-capa" style="--arte:url(\'' + d.img + '\')"><div class="cx-abas" aria-hidden="true"><span>Lesson</span>' + d.chips.map(function (c) { return '<span>' + u.h(c) + '</span>'; }).join('') + '</div>'
      + '<div class="cx-tx">' + (d.banda ? '<p class="cx-jogo">' + d.banda + '</p>' : '') + '<h1>' + u.h(d.titulo) + '</h1><p class="cx-sub">' + d.sub + '</p><div class="cx-acoes"><button type="button" class="cx-play" data-a="ir" data-n="' + d.ir + '" aria-label="' + u.h(d.botao) + '"><i aria-hidden="true"></i></button><span><b>Play</b><small>' + u.cenas().length + ' levels · about ' + u.totalMin() + ' min</small></span></div></div>'
      + '<div class="cx-fila">' + f + '</div></div>' + d.faixa;
  } };

/* BUSINESS · DECK: a aula como uma apresentação de keynote — o slide de título na tela grande, as cenas no organizador de slides. */
WL_PELES.deck = { linhas: ['BUSINESS', 'WOLF BUSINESS', 'WOLF HIRED'], nome: 'Deck',
  fontes: 'family=Archivo:wdth,wght@100..125,600..900&family=JetBrains+Mono:wght@400;500',
  tokens: '--pl-tit:"Archivo","Urbanist",sans-serif;--pl-tit-peso:800;--pl-tit-esp:-.03em;--pl-escuro:10,11,14;--pl-vidro:rgba(18,20,25,.74);--pl-borda:rgba(255,255,255,.09);--pl-raio:16px;--pl-raio-p:6px;--pl-sobre-ac:#0d0f12',
  css: 'body .dk-app{padding:clamp(12px,1.6vw,20px);border-radius:24px;background:#0e1014;border:1px solid rgba(255,255,255,.07);box-shadow:0 40px 90px rgba(0,0,0,.6)}'
    + 'body .dk-barra{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:2px 4px 14px}'
    + 'body .dk-luzes{display:flex;gap:7px}body .dk-luzes i{width:11px;height:11px;border-radius:50%;background:#2a2e36}body .dk-luzes i:first-child{background:var(--ac)}'
    + 'body .dk-arq{flex:1;min-width:0;font:500 13px "JetBrains Mono",monospace;color:#8b93a0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
    + 'body .dk-play{display:inline-flex;align-items:center;gap:10px;min-height:46px;padding:0 20px;border:0;border-radius:12px;background:var(--ac);color:var(--pl-sobre-ac);font:700 15px var(--ui);box-shadow:0 10px 26px rgba(0,0,0,.4)}'
    + 'body .dk-play i{width:0;height:0;border-left:11px solid currentColor;border-top:7px solid transparent;border-bottom:7px solid transparent}'
    + 'body .dk-tela{position:relative;aspect-ratio:16/9;max-height:68vh;width:100%;border-radius:12px;overflow:hidden;display:grid;grid-template-rows:auto 1fr auto;padding:clamp(20px,3.4vw,56px);background:linear-gradient(100deg,rgba(10,11,14,.94) 0%,rgba(10,11,14,.6) 48%,rgba(10,11,14,.2) 100%),linear-gradient(0deg,rgba(10,11,14,.7),transparent 50%),var(--arte) center 40%/cover;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 30px 70px rgba(0,0,0,.6)}'
    + 'body .dk-tela::after{content:"";position:absolute;left:clamp(20px,3.4vw,56px);top:0;width:72px;height:6px;background:var(--ac);border-radius:0 0 4px 4px}'
    + 'body .dk-chips{display:flex;gap:16px;flex-wrap:wrap;font:500 12px "JetBrains Mono",monospace;letter-spacing:.08em;text-transform:uppercase;color:#a6aebb}body .dk-chips span:first-child{color:var(--ac2)}'
    + 'body .dk-tx{align-self:center;max-width:760px;display:grid;gap:clamp(10px,1.4vw,18px)}'
    + 'body .dk-tx h1{margin:0;font:800 clamp(40px,5.4vw,104px)/.92 var(--pl-tit);letter-spacing:-.035em;font-stretch:125%;color:#fff;text-wrap:balance}'
    + 'body .dk-sub{margin:0;font:500 clamp(15px,1.15vw,20px)/1.5 var(--ui);color:#c8ced8;max-width:48ch}'
    + 'body .dk-pe{display:flex;justify-content:space-between;gap:12px;font:500 12px "JetBrains Mono",monospace;color:#7d8592}'
    + 'body .dk-ord-t{display:flex;align-items:baseline;gap:12px;margin:20px 4px 12px}body .dk-ord-t b{font:800 18px var(--pl-tit);color:#fff}body .dk-ord-t span{font:500 12px "JetBrains Mono",monospace;color:var(--t3)}'
    + 'body .dk-ord{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:16px}'
    + 'body .dk-sl{display:grid;grid-template-columns:auto 1fr;gap:6px 10px;padding:0;border:0;background:none;text-align:left;color:var(--t1)}'
    + 'body .dk-sl>i{grid-row:span 2;font:500 13px "JetBrains Mono",monospace;font-style:normal;color:#7d8592;padding-top:4px;min-width:1.4em;text-align:right}'
    + 'body .dk-mini{position:relative;display:block;aspect-ratio:16/9;border-radius:8px;overflow:hidden;background:linear-gradient(90deg,rgba(10,11,14,.88),rgba(10,11,14,.35)),var(--im) center/cover;box-shadow:0 0 0 1px rgba(255,255,255,.1),0 10px 24px rgba(0,0,0,.45);transition:box-shadow .2s,transform .2s}'
    + 'body .dk-mini b{position:absolute;left:9%;right:9%;top:50%;transform:translateY(-50%);font:800 clamp(11px,.85vw,14px)/1.1 var(--pl-tit);color:#fff;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}'
    + 'body .dk-mini::before{content:"";position:absolute;left:9%;top:0;width:22%;height:3px;background:var(--ac)}'
    + 'body .dk-sl small{grid-column:2;font:500 11.5px "JetBrains Mono",monospace;color:var(--t3)}body .dk-sl small em{font-style:normal;color:var(--ac2)}'
    + 'body .dk-sl:hover .dk-mini{transform:translateY(-3px);box-shadow:0 0 0 2px var(--ac),0 14px 30px rgba(0,0,0,.5)}'
    + 'body .dk-play:focus-visible{outline:3px solid #fff;outline-offset:3px}body .dk-sl:focus-visible{outline:none}body .dk-sl:focus-visible .dk-mini{box-shadow:0 0 0 3px var(--ac2)}'
    + '@media (max-width:900px){body .dk-tela{aspect-ratio:auto;min-height:420px;max-height:none}body .dk-ord{grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}}',
  capa: function (d, u) {
    var cs = u.cenas(), arq = String(d.titulo).trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '').slice(0, 40) + '.key';
    var sl = cs.map(function (c) { return '<button type="button" class="dk-sl" data-a="ir" data-n="' + c.i + '"><i>' + c.i + '</i><span class="dk-mini" style="--im:url(\'' + c.img + '\')"><b>' + u.h(c.t) + '</b></span><small>' + (c.estNome ? '<em>' + c.estNome + '</em> · ' : '') + (c.extra ? 'extra' : c.min + ' min') + '</small></button>'; }).join('');
    return '<div class="dk-app"><div class="dk-barra"><span class="dk-luzes" aria-hidden="true"><i></i><i></i><i></i></span><span class="dk-arq">' + u.h(arq) + '</span>'
      + '<button type="button" class="dk-play" data-a="ir" data-n="' + d.ir + '"><i aria-hidden="true"></i>Present</button></div>'
      + '<section class="dk-tela" style="--arte:url(\'' + d.img + '\')" aria-label="' + u.h(d.alt) + '"><div class="dk-chips">' + d.chips.map(function (c) { return '<span>' + u.h(c) + '</span>'; }).join('') + '</div>'
      + '<div class="dk-tx"><h1>' + u.h(d.titulo) + '</h1><p class="dk-sub">' + d.sub + '</p></div><div class="dk-pe"><span>' + u.h(d.banda ? d.banda.replace(/<[^>]+>/g, '') : 'Wolf Labs') + '</span><span>01 / ' + ('0' + (cs.length + 1)).slice(-2) + '</span></div></section>'
      + '<div class="dk-ord-t"><b>Slides</b><span>' + cs.length + ' scenes · about ' + u.totalMin() + ' min · tap to jump</span></div><nav class="dk-ord" aria-label="Scenes">' + sl + '</nav></div>' + d.faixa;
  } };

/* WOLFAITH · DEVOCIONAL (ref. Dribbble app "Selah"): luz de vela, Fraunces itálica, história em destaque, a jornada de hoje. Cartões escuros (fotofobia). */
WL_PELES.devocional = { linhas: ['WOLFAITH'], nome: 'Devocional',
  fontes: 'family=Fraunces:ital,opsz,wght@1,9..144,500;1,9..144,600',
  tokens: '--pl-tit:"Fraunces",Georgia,serif;--pl-tit-peso:500;--pl-tit-estilo:italic;--pl-tit-esp:-.01em;--pl-escuro:17,11,7;--pl-vidro:rgba(36,24,16,.7);--pl-borda:rgba(243,213,160,.13);--pl-raio:24px;--pl-sobre-ac:#22150a',
  css: 'body .fm-pista,body .fm-certa{font-family:var(--pl-tit);font-weight:500}'
    + 'body .dx-ola{display:flex;justify-content:space-between;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:14px}body .dx-ola p{margin:0;font:italic 500 clamp(26px,2.2vw,38px) var(--pl-tit);color:#fbf1e2}body .dx-ola span{font:600 12px var(--ui);letter-spacing:.16em;text-transform:uppercase;color:var(--ac)}'
    + 'body .dx-destaque{position:relative;min-height:clamp(300px,46vh,500px);border-radius:28px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;gap:10px;padding:clamp(22px,3vw,40px);background:linear-gradient(90deg,rgba(17,11,7,.9) 0%,rgba(17,11,7,.5) 42%,rgba(17,11,7,.05) 72%),linear-gradient(0deg,rgba(17,11,7,.85),transparent 50%),var(--arte) center 45%/cover;border:1px solid rgba(243,213,160,.12);box-shadow:0 40px 90px rgba(0,0,0,.55)}'
    + 'body .dx-destaque small{font:600 12px var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--ac2)}body .dx-destaque h1{margin:0;font:italic 500 clamp(50px,5.4vw,104px)/.95 var(--pl-tit);letter-spacing:-.02em;color:#fbf1e2;text-wrap:balance}body .dx-destaque p{margin:0;font:500 clamp(16px,1.15vw,19px)/1.55 var(--ui);color:#dccbb2;max-width:46ch}'
    + 'body .dx-ir{align-self:flex-start;margin-top:6px;min-height:52px;padding:0 26px;border-radius:999px;border:0;background:#fbf1e2;color:#22150a;font:700 15px var(--ui)}'
    + 'body .dx-jt{margin:18px 0 10px;font:italic 500 24px var(--pl-tit);color:#fbf1e2}body .dx-jornada{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}'
    + 'body .dx-card{display:flex;flex-direction:column;gap:6px;min-height:190px;padding:14px;border-radius:22px;border:1px solid rgba(243,213,160,.14);background:linear-gradient(180deg,rgba(58,38,24,.9),rgba(36,24,16,.92));color:#fbf1e2;text-align:left;transition:transform .2s,border-color .2s}body .dx-card:hover{transform:translateY(-3px);border-color:var(--ac)}'
    + 'body .dx-num{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:color-mix(in srgb,var(--ac) 20%,transparent);color:var(--ac);font:italic 600 15px var(--pl-tit)}body .dx-card b{font:italic 600 18px/1.15 var(--pl-tit)}body .dx-t{flex:1;font:500 13px/1.45 var(--ui);color:#cdbda6;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}body .dx-card small{font:700 11px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--ac)}',
  capa: function (d, u) {
    var NOME = { o: 'Talk', l: 'Watch', f: 'The words', w: 'Write' };
    var j = u.cenas().map(function (c) { return '<button type="button" class="dx-card" data-a="ir" data-n="' + c.i + '"><span class="dx-num">' + c.i + '</span><b>' + u.h(c.t) + '</b><span class="dx-t">' + c.frase + '</span><small>' + (c.min ? c.min + ' min · ' : '') + (NOME[c.est] || '') + '</small></button>'; }).join('');
    return '<header class="dx-ola"><p>Tonight’s lesson</p><span>' + u.h(d.chips.join(' · ')) + '</span></header>'
      + '<section class="dx-destaque" style="--arte:url(\'' + d.img + '\')"><small>' + (d.banda || 'Featured story') + '</small><h1>' + u.h(d.titulo) + '</h1><p>' + d.sub + '</p><button type="button" class="dx-ir" data-a="ir" data-n="' + d.ir + '">' + u.h(d.botao) + '</button></section>'
      + '<p class="dx-jt">Tonight’s journey</p><div class="dx-jornada">' + j + '</div>' + d.faixa;
  } };

/* BUSINESS · INBOX: a aula como um e-mail aberto num cliente de e-mail escuro — as cenas são as conversas da caixa de entrada, começar é "Reply". */
WL_PELES.inbox = { linhas: ['BUSINESS', 'WOLF BUSINESS', 'WOLF HIRED'], nome: 'Inbox',
  fontes: 'family=Bricolage+Grotesque:opsz,wght@12..96,500..800',
  tokens: '--pl-tit:"Bricolage Grotesque","Urbanist",sans-serif;--pl-tit-peso:700;--pl-tit-esp:-.025em;--pl-escuro:11,13,17;--pl-vidro:rgba(19,22,28,.76);--pl-borda:rgba(255,255,255,.08);--pl-raio:18px;--pl-raio-p:8px;--pl-sobre-ac:#0d1014',
  css: 'body .ib-app{display:grid;grid-template-columns:minmax(280px,380px) minmax(0,1fr);border-radius:22px;overflow:hidden;background:#12151b;border:1px solid rgba(255,255,255,.07);box-shadow:0 40px 90px rgba(0,0,0,.6)}'
    + 'body .ib-lista{display:flex;flex-direction:column;background:#0f1216;border-right:1px solid rgba(255,255,255,.06);min-width:0}'
    + 'body .ib-busca{margin:14px;padding:10px 14px;border-radius:12px;background:#1a1e25;font:500 13.5px var(--ui);color:#6f7785}'
    + 'body .ib-pasta{display:flex;justify-content:space-between;padding:4px 18px 10px;font:700 15px var(--pl-tit);color:#fff}body .ib-pasta small{font:600 12px var(--ui);color:var(--ac2)}'
    + 'body .ib-th{position:relative;display:grid;grid-template-columns:10px 1fr auto;gap:2px 10px;width:100%;padding:13px 18px 13px 14px;border:0;border-top:1px solid rgba(255,255,255,.05);background:none;text-align:left;color:var(--t1)}'
    + 'body .ib-th>i{grid-row:span 3;width:8px;height:8px;margin-top:6px;border-radius:50%;background:var(--ac);box-shadow:0 0 0 3px color-mix(in srgb,var(--ac) 22%,transparent)}body .ib-th.lido>i{background:transparent;box-shadow:none}'
    + 'body .ib-th b{font:700 14px var(--ui);color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}body .ib-th time{font:600 12px var(--ui);color:var(--t3);text-align:right}'
    + 'body .ib-th strong{grid-column:2/4;font:600 14px/1.3 var(--ui);color:#dfe4ec}body .ib-th span{grid-column:2/4;font:500 13px/1.35 var(--ui);color:#7e8794;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}'
    + 'body .ib-th:hover{background:rgba(255,255,255,.035)}body .ib-th.on{background:color-mix(in srgb,var(--ac) 12%,#0f1216)}body .ib-th.on::before{content:"";position:absolute;left:0;top:10px;bottom:10px;width:3px;border-radius:0 3px 3px 0;background:var(--ac)}'
    + 'body .ib-mail{display:flex;flex-direction:column;gap:18px;padding:clamp(20px,2.8vw,40px);min-width:0}'
    + 'body .ib-tags{display:flex;gap:8px;flex-wrap:wrap}body .ib-tags span{padding:4px 10px;border-radius:7px;background:rgba(255,255,255,.06);font:700 12px var(--ui);color:#c3cad5}body .ib-tags span:first-child{background:color-mix(in srgb,var(--ac) 22%,transparent);color:var(--ac2)}'
    + 'body .ib-mail h1{margin:0;font:700 clamp(36px,3.8vw,72px)/1 var(--pl-tit);letter-spacing:-.035em;color:#fff;text-wrap:balance}'
    + 'body .ib-de{display:flex;align-items:center;gap:12px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.07)}'
    + 'body .ib-av{width:44px;height:44px;flex:none;border-radius:50%;display:grid;place-items:center;background:var(--ac);color:var(--pl-sobre-ac);font:800 18px var(--pl-tit)}'
    + 'body .ib-de b{display:block;font:700 15px var(--ui);color:#fff}body .ib-de small{font:500 13px var(--ui);color:var(--t3)}body .ib-de time{margin-left:auto;font:600 12.5px var(--ui);color:var(--t3)}'
    + 'body .ib-img{display:block;width:100%;aspect-ratio:21/9;border-radius:14px;background:linear-gradient(0deg,rgba(18,21,27,.55),transparent 60%),var(--arte) center 40%/cover;filter:brightness(.72) saturate(.9);box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}'
    + 'body .ib-corpo{margin:0;font:500 clamp(16px,1.15vw,19px)/1.65 var(--ui);color:#cfd5de;max-width:60ch}'
    + 'body .ib-acoes{display:flex;align-items:center;gap:14px;flex-wrap:wrap}'
    + 'body .ib-reply{display:inline-flex;align-items:center;gap:10px;min-height:50px;padding:0 24px;border:0;border-radius:12px;background:var(--ac);color:var(--pl-sobre-ac);font:800 15px var(--ui);box-shadow:0 12px 28px rgba(0,0,0,.4)}'
    + 'body .ib-acoes small{font:600 13px var(--ui);color:var(--t3)}'
    + 'body .ib-reply:focus-visible,body .ib-th:focus-visible{outline:3px solid var(--ac2);outline-offset:-3px}body .ib-reply:focus-visible{outline-offset:3px}'
    + '@media (max-width:900px){body .ib-app{grid-template-columns:1fr}body .ib-mail{order:-1}body .ib-lista{border-right:0;border-top:1px solid rgba(255,255,255,.06)}body .ib-img{aspect-ratio:16/9}}',
  capa: function (d, u) {
    function tx(s, n) { s = String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; }
    var de = tx(d.banda, 40) || 'Wolf Labs', cs = u.cenas(), ME = { o: 'Talk', l: 'Listen', f: 'Grammar', w: 'Write' };
    var th = cs.map(function (c, k) { return '<button type="button" class="ib-th' + (k ? '' : ' on') + (c.extra ? ' lido' : '') + '" data-a="ir" data-n="' + c.i + '"><i aria-hidden="true"></i><b>' + (ME[c.est] || 'Wolf Labs') + '</b><time>' + (c.extra ? 'extra' : c.min + ' min') + '</time><strong>' + u.h(c.t) + '</strong><span>' + u.h(tx(c.frase, 90) || ('Scene ' + c.i)) + '</span></button>'; }).join('');
    var nao = cs.filter(function (c) { return !c.extra; }).length;
    return '<div class="ib-app"><nav class="ib-lista" aria-label="Scenes"><div class="ib-busca" aria-hidden="true">Search mail</div><p class="ib-pasta" style="margin:0">Inbox<small>' + nao + ' unread</small></p>' + th + '</nav>'
      + '<article class="ib-mail"><div class="ib-tags">' + d.chips.map(function (c) { return '<span>' + u.h(c) + '</span>'; }).join('') + '</div><h1>' + u.h(d.titulo) + '</h1>'
      + '<div class="ib-de"><span class="ib-av" aria-hidden="true">' + u.h(de.charAt(0).toUpperCase()) + '</span><span><b>' + u.h(de) + '</b><small>to me · about ' + u.totalMin() + ' min</small></span><time>now</time></div>'
      + '<span class="ib-img" role="img" aria-label="' + u.h(d.alt) + '" style="--arte:url(\'' + d.img + '\')"></span><p class="ib-corpo">' + d.sub + '</p>'
      + '<div class="ib-acoes"><button type="button" class="ib-reply" data-a="ir" data-n="' + d.ir + '"><span aria-hidden="true">↩</span> Reply</button><small>' + u.h(d.botao) + '</small></div></article></div>' + d.faixa;
  } };

/* MAIN SERIES · JORNAL "The Night Edition": a primeira página de um jornal grande impresso em papel escuro — manchete, foto com legenda, índice. */
WL_PELES.jornal = { linhas: ['MAIN SERIES'], nome: 'Jornal',
  fontes: 'family=Pirata+One&family=Playfair+Display:ital,wght@0,700;0,900;1,500;1,700&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400',
  tokens: '--pl-tit:"Playfair Display",Georgia,serif;--pl-tit-peso:900;--pl-tit-esp:-.015em;--pl-escuro:14,14,13;--pl-vidro:rgba(20,20,19,.74);--pl-borda:rgba(232,226,214,.12);--pl-raio:4px;--pl-raio-p:2px;--pl-sobre-ac:#111',
  css: 'body .jn-folha{--tx:#e4ded2;--fi:rgba(228,222,210,.28);padding:clamp(18px,2.6vw,40px);border-radius:4px;color:var(--tx);background:repeating-linear-gradient(0deg,rgba(255,255,255,.012) 0 1px,transparent 1px 3px),radial-gradient(140% 100% at 50% 0%,#1d1c1a,#121211 70%);border:1px solid rgba(255,255,255,.06);box-shadow:0 40px 90px rgba(0,0,0,.6)}'
    + 'body .jn-linha{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:6px 0;border-top:1px solid var(--fi);border-bottom:1px solid var(--fi);font:400 12px "Old Standard TT",serif;letter-spacing:.14em;text-transform:uppercase;color:#a9a294}'
    + 'body .jn-linha b{color:var(--ac);font-weight:700}'
    + 'body .jn-cab{margin:10px 0 8px;text-align:center;font:400 clamp(44px,6vw,104px)/1 "Pirata One",serif;color:#efe9dd;text-shadow:0 2px 0 #000}'
    + 'body .jn-duplo{height:5px;border-top:3px solid #d9d2c4;border-bottom:1px solid #d9d2c4;opacity:.55;margin-bottom:clamp(16px,2vw,26px)}'
    + 'body .jn-manch{margin:0 0 10px;font:900 clamp(46px,6.2vw,118px)/.9 var(--pl-tit);letter-spacing:-.025em;text-wrap:balance;color:#f3eee4}'
    + 'body .jn-linhafina{margin:0 0 clamp(16px,2vw,24px);padding-bottom:14px;border-bottom:1px solid var(--fi);font:italic 500 clamp(18px,1.5vw,24px)/1.35 var(--pl-tit);color:#cfc7b8;max-width:60ch}body .jn-linhafina b{color:var(--ac2);font-style:normal}'
    + 'body .jn-grade{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(260px,1fr);gap:0}'
    + 'body .jn-foto{margin:0;padding-right:clamp(16px,2vw,28px);border-right:1px solid var(--fi)}'
    + 'body .jn-img{display:block;aspect-ratio:16/10;background:var(--arte) center 40%/cover;filter:grayscale(.55) contrast(1.08) brightness(.66);box-shadow:inset 0 0 70px rgba(0,0,0,.7)}'
    + 'body .jn-foto figcaption{margin-top:8px;font:italic 400 14px/1.45 "Old Standard TT",serif;color:#a9a294}body .jn-foto figcaption b{font-style:normal;color:var(--tx)}'
    + 'body .jn-texto{margin-top:16px;columns:2 220px;column-gap:26px;column-rule:1px solid var(--fi);font:400 16px/1.6 "Old Standard TT",serif;color:#d6cfc2}'
    + 'body .jn-texto p{margin:0}body .jn-texto p::first-letter{float:left;font:900 3.3em/.82 var(--pl-tit);margin:4px 8px 0 0;color:var(--ac)}'
    + 'body .jn-ler{margin-top:16px;min-height:50px;padding:0 24px;border:0;border-radius:2px;background:var(--ac);color:var(--pl-sobre-ac);font:700 15px var(--ui);letter-spacing:.06em;text-transform:uppercase}'
    + 'body .jn-ind{padding-left:clamp(16px,2vw,28px)}body .jn-ind-t{margin:0;padding-bottom:6px;border-bottom:3px double var(--fi);font:700 13px "Old Standard TT",serif;letter-spacing:.24em;text-transform:uppercase;color:#a9a294}'
    + 'body .jn-it{display:grid;grid-template-columns:auto 1fr;gap:2px 12px;width:100%;padding:11px 0;border:0;border-bottom:1px solid var(--fi);background:none;text-align:left;color:var(--tx)}'
    + 'body .jn-it i{grid-row:span 3;font:900 30px/1 var(--pl-tit);font-style:normal;color:var(--ac)}body .jn-it small{font:700 11px var(--ui);letter-spacing:.14em;text-transform:uppercase;color:#958e81}'
    + 'body .jn-it b{font:700 clamp(17px,1.2vw,20px)/1.2 var(--pl-tit)}body .jn-it span{font:italic 400 14px/1.4 "Old Standard TT",serif;color:#a9a294}body .jn-it:hover b{color:var(--ac2)}'
    + 'body .jn-ler:focus-visible,body .jn-it:focus-visible{outline:3px solid var(--ac2);outline-offset:3px}'
    + '@media (max-width:900px){body .jn-grade{grid-template-columns:1fr}body .jn-foto{padding-right:0;border-right:0}body .jn-ind{padding-left:0;margin-top:22px}}',
  capa: function (d, u) {
    function tx(s, n) { s = String(s || '').replace(/<[^>]+>/g, '').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; }
    var dia = ''; try { dia = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) {}
    var it = u.cenas().map(function (c) { var f = tx(c.frase, 70); return '<button type="button" class="jn-it" data-a="ir" data-n="' + c.i + '"><i>' + c.i + '</i><small>' + u.h(c.estNome || 'Scene') + ' · ' + (c.extra ? 'extra' : 'p. ' + c.i + ' · ' + c.min + ' min') + '</small><b>' + u.h(c.t) + '</b>' + (f ? '<span>' + u.h(f) + '</span>' : '') + '</button>'; }).join('');
    return '<article class="jn-folha" style="--arte:url(\'' + d.img + '\')"><div class="jn-linha"><span><b>Night Edition</b></span><span>' + u.h(d.chips.join(' · ')) + '</span><span>' + u.h(dia) + '</span></div>'
      + '<p class="jn-cab" aria-hidden="true">The Wolf Labs Times</p><div class="jn-duplo"></div>'
      + '<h1 class="jn-manch">' + u.h(d.titulo) + '</h1>' + (d.banda ? '<p class="jn-linhafina">' + d.banda + '</p>' : '')
      + '<div class="jn-grade"><div class="jn-foto"><figure style="margin:0"><span class="jn-img" role="img" aria-label="' + u.h(d.alt) + '"></span><figcaption><b>Tonight.</b> ' + u.h(d.alt || d.titulo) + '</figcaption></figure>'
      + '<div class="jn-texto"><p>' + d.sub + '</p></div><button type="button" class="jn-ler" data-a="ir" data-n="' + d.ir + '">' + u.h(d.botao) + ' →</button></div>'
      + '<nav class="jn-ind" aria-label="Scenes"><p class="jn-ind-t">Inside this edition · ' + u.totalMin() + ' min</p>' + it + '</nav></div></article>' + d.faixa;
  } };

/* MAIN SERIES · LIVRO: um livro de capa de tecido à noite — título em relevo, a arte como frontispício, as cenas como sumário. */
WL_PELES.livro = { linhas: ['MAIN SERIES'], nome: 'Livro',
  fontes: 'family=EB+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Spectral+SC:wght@500',
  tokens: '--pl-tit:"EB Garamond",Georgia,serif;--pl-tit-peso:600;--pl-tit-esp:-.005em;--pl-escuro:13,11,14;--pl-vidro:rgba(20,17,22,.7);--pl-borda:rgba(255,236,214,.1);--pl-raio:10px;--pl-raio-p:4px;--pl-sobre-ac:#140f12',
  css: 'body .lv-capa{display:grid;grid-template-columns:minmax(280px,420px) minmax(0,1fr);gap:clamp(18px,2.4vw,36px);align-items:stretch}'
    + 'body .lv-livro{position:relative;aspect-ratio:3/4.1;border-radius:6px 14px 14px 6px;padding:clamp(22px,2.6vw,40px) clamp(22px,2.6vw,40px) clamp(22px,2.6vw,40px) clamp(40px,4vw,58px);display:flex;flex-direction:column;align-items:center;justify-content:space-between;text-align:center;'
    + 'background:repeating-linear-gradient(45deg,rgba(255,255,255,.018) 0 1px,transparent 1px 3px),repeating-linear-gradient(-45deg,rgba(0,0,0,.18) 0 1px,transparent 1px 3px),radial-gradient(120% 90% at 30% 20%,color-mix(in srgb,var(--ac) 30%,#1b161d),#0f0c11 80%);'
    + 'box-shadow:inset 0 0 0 1px rgba(255,255,255,.05),inset 0 0 60px rgba(0,0,0,.6),18px 30px 60px rgba(0,0,0,.6),4px 4px 0 #0a080b,7px 7px 0 #1d1a1c}'
    + 'body .lv-livro::before{content:"";position:absolute;left:0;top:0;bottom:0;width:clamp(22px,2.4vw,32px);border-radius:6px 0 0 6px;background:linear-gradient(90deg,rgba(0,0,0,.55),rgba(255,255,255,.05) 60%,rgba(0,0,0,.5)),repeating-linear-gradient(180deg,transparent 0 18%,rgba(0,0,0,.35) 18% 19%,rgba(255,255,255,.04) 19% 20%)}'
    + 'body .lv-livro::after{content:"";position:absolute;inset:14px 14px 14px calc(clamp(22px,2.4vw,32px) + 12px);border:1px solid color-mix(in srgb,var(--ac2) 35%,transparent);outline:1px solid color-mix(in srgb,var(--ac2) 18%,transparent);outline-offset:-6px;pointer-events:none}'
    + 'body .lv-sc{font:500 12px "Spectral SC",serif;letter-spacing:.32em;color:color-mix(in srgb,var(--ac2) 70%,#c9b9a6)}'
    + 'body .lv-livro h1{margin:0;font:700 clamp(40px,4vw,74px)/.95 var(--pl-tit);letter-spacing:-.01em;text-wrap:balance;color:color-mix(in srgb,var(--ac2) 55%,#d8c3a0);text-shadow:0 -1px 0 rgba(0,0,0,.75),0 1px 0 rgba(255,236,200,.22),0 0 18px rgba(0,0,0,.4)}'
    + 'body .lv-orn{display:block;width:60%;height:10px;margin:6px auto;background:radial-gradient(circle,var(--ac2) 0 3px,transparent 4px) center/14px 10px no-repeat,linear-gradient(var(--ac2),var(--ac2)) center/100% 1px no-repeat;opacity:.55}'
    + 'body .lv-placa{width:58%;aspect-ratio:1;border-radius:50%;background:var(--arte) center/cover;filter:brightness(.62) saturate(.8) sepia(.18);box-shadow:inset 0 0 30px rgba(0,0,0,.8),0 0 0 3px #0f0c11,0 0 0 4px color-mix(in srgb,var(--ac2) 45%,transparent)}'
    + 'body .lv-front{position:relative;border-radius:14px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;gap:16px;min-height:clamp(380px,60vh,640px);padding:clamp(22px,3vw,44px);background:linear-gradient(0deg,rgba(13,11,14,.96) 6%,rgba(13,11,14,.55) 50%,rgba(13,11,14,.25)),var(--arte) center 40%/cover;border:1px solid rgba(255,236,214,.08);box-shadow:0 40px 90px rgba(0,0,0,.55)}'
    + 'body .lv-front em{font:italic 500 clamp(18px,1.4vw,24px)/1.3 var(--pl-tit);color:var(--ac2)}body .lv-sub{margin:0;font:500 clamp(16px,1.15vw,19px)/1.6 var(--ui);color:#d6ccc4;max-width:52ch}'
    + 'body .lv-ler{align-self:flex-start;min-height:52px;padding:0 26px;border:1px solid var(--ac);border-radius:4px;background:var(--ac);color:var(--pl-sobre-ac);font:700 15px var(--ui);letter-spacing:.04em;box-shadow:0 12px 30px rgba(0,0,0,.4)}'
    + 'body .lv-sum{margin-top:22px;padding:clamp(20px,2.6vw,38px);border-radius:14px;background:#141116;border:1px solid rgba(255,236,214,.07);box-shadow:inset 0 0 80px rgba(0,0,0,.45)}'
    + 'body .lv-sum-t{margin:0 0 14px;text-align:center;font:italic 600 clamp(28px,2.4vw,40px) var(--pl-tit);color:#efe3d3}'
    + 'body .lv-cols{columns:2 340px;column-gap:48px}'
    + 'body .lv-cap{display:flex;align-items:baseline;gap:10px;width:100%;break-inside:avoid;padding:9px 2px;border:0;background:none;text-align:left;color:#e6dbcf}'
    + 'body .lv-cap i{font:500 13px "Spectral SC",serif;letter-spacing:.12em;color:var(--ac2);min-width:3.2em;font-style:normal}'
    + 'body .lv-cap span{font:600 clamp(18px,1.3vw,22px)/1.25 var(--pl-tit)}body .lv-cap u{flex:1;min-width:20px;border-bottom:2px dotted rgba(255,236,214,.22);text-decoration:none;transform:translateY(-4px)}'
    + 'body .lv-cap b{font:italic 600 18px var(--pl-tit);color:#bdb0a3}body .lv-cap:hover span,body .lv-cap:hover b{color:var(--ac2)}'
    + 'body .lv-ler:focus-visible,body .lv-cap:focus-visible{outline:3px solid var(--ac2);outline-offset:3px}'
    + '@media (max-width:900px){body .lv-capa{grid-template-columns:1fr}body .lv-livro{max-width:420px;width:100%;margin:0 auto}body .lv-front{min-height:320px}}',
  capa: function (d, u) {
    function rom(n) { var r = '', v = [[10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i']]; v.forEach(function (p) { while (n >= p[0]) { r += p[1]; n -= p[0]; } }); return r; }
    var pg = 1, caps = u.cenas().map(function (c) { var p = pg; pg += c.min || 1; return '<button type="button" class="lv-cap" data-a="ir" data-n="' + c.i + '"><i>' + rom(c.i) + '.</i><span>' + u.h(c.t) + '</span><u aria-hidden="true"></u><b>' + (c.extra ? 'extra' : p) + '</b></button>'; }).join('');
    var ed = d.chips.length ? u.h(d.chips.join(' · ')) : 'Main Series';
    return '<div class="lv-capa"><section class="lv-livro" style="--arte:url(\'' + d.img + '\')"><span class="lv-sc">' + ed + '</span><div><span class="lv-orn" aria-hidden="true"></span><h1>' + u.h(d.titulo) + '</h1><span class="lv-orn" aria-hidden="true"></span></div><span class="lv-placa" role="img" aria-label="' + u.h(d.alt) + '"></span><span class="lv-sc">Wolf Labs</span></section>'
      + '<section class="lv-front" style="--arte:url(\'' + d.img + '\')">' + (d.banda ? '<em>' + d.banda + '</em>' : '') + '<p class="lv-sub">' + d.sub + '</p><button type="button" class="lv-ler" data-a="ir" data-n="' + d.ir + '">' + u.h(d.botao) + '</button></section></div>'
      + '<nav class="lv-sum" aria-label="Scenes"><p class="lv-sum-t">Contents</p><div class="lv-cols">' + caps + '</div></nav>' + d.faixa;
  } };

/* WOLFAITH · PERGAMINHO: manuscrito iluminado à luz de vela. Velino escuro, capitular em fraktur dourada, a arte como iluminura com filete de ouro; as cenas como capítulos e versículos. */
WL_PELES.pergaminho = { linhas: ['WOLFAITH'], nome: 'Pergaminho',
  fontes: 'family=UnifrakturMaguntia&family=IM+Fell+English:ital@0;1&family=IM+Fell+English+SC',
  tokens: '--pl-tit:"IM Fell English",Georgia,serif;--pl-tit-peso:400;--pl-tit-esp:0;--pl-escuro:16,11,7;--pl-vidro:rgba(30,21,13,.8);--pl-borda:rgba(201,162,74,.2);--pl-raio:6px;--pl-raio-p:50%;--pl-sobre-ac:#1a1009',
  css: 'body .fm-pista,body .fm-certa{font-family:"IM Fell English",Georgia,serif}'
    + 'body .pg-folio{position:relative;display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(20px,3vw,52px);padding:clamp(22px,3vw,48px);border-radius:6px;background:radial-gradient(ellipse at 70% 0%,rgba(214,150,70,.12),transparent 55%),radial-gradient(ellipse at 0% 100%,rgba(0,0,0,.5),transparent 60%),linear-gradient(160deg,#241910,#17100a 60%,#110b07);border:1px solid rgba(201,162,74,.22);box-shadow:inset 0 0 120px rgba(0,0,0,.6),inset 0 0 0 10px rgba(16,11,7,.6),inset 0 0 0 11px rgba(201,162,74,.18),0 40px 90px rgba(0,0,0,.6)}'
    + 'body .pg-ilum{position:relative;align-self:start;aspect-ratio:4/5;padding:10px;border-radius:999px 999px 4px 4px;background:linear-gradient(135deg,#c9a24a,#6e5320 40%,#b8913f 60%,#5a4318);box-shadow:0 20px 50px rgba(0,0,0,.55)}'
    + 'body .pg-ilum span{display:block;height:100%;border-radius:999px 999px 2px 2px;background:linear-gradient(0deg,rgba(16,11,7,.75),transparent 50%),var(--arte) center 35%/cover;filter:sepia(.3) brightness(.62) contrast(1.05);box-shadow:inset 0 0 0 3px #17100a}'
    + 'body .pg-tx{display:flex;flex-direction:column;gap:14px}body .pg-rub{margin:0;font:400 15px "IM Fell English SC",serif;letter-spacing:.14em;color:#b5523e}'
    + 'body .pg-tx h1{margin:0;font:400 clamp(38px,4vw,76px)/1.02 var(--pl-tit);color:#eadcbf;text-wrap:balance}'
    + 'body .pg-cap{float:left;margin:.02em .1em 0 0;font:400 2.3em/.82 "UnifrakturMaguntia",serif;background:linear-gradient(180deg,#f0d58a,#c9a24a 50%,#8a6a28);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 2px 0 rgba(0,0,0,.6))}'
    + 'body .pg-orn{display:flex;align-items:center;gap:10px;color:#c9a24a;font:16px serif}body .pg-orn::before,body .pg-orn::after{content:"";flex:1;max-width:120px;height:1px;background:linear-gradient(90deg,transparent,rgba(201,162,74,.6),transparent)}'
    + 'body .pg-banda{margin:0;font:italic 400 21px var(--pl-tit);color:var(--ac2)}body .pg-sub{margin:0;font:400 clamp(17px,1.2vw,20px)/1.55 var(--pl-tit);color:#cfbf9f;max-width:48ch}'
    + 'body .pg-ir{align-self:flex-start;min-height:50px;padding:0 26px;border-radius:3px;border:1px solid #c9a24a;background:linear-gradient(180deg,#3a2814,#24180c);color:#f0d58a;font:400 17px "IM Fell English SC",serif;letter-spacing:.1em;box-shadow:inset 0 0 0 3px #1a1009,inset 0 0 0 4px rgba(201,162,74,.35);transition:background .2s}body .pg-ir:hover{background:linear-gradient(180deg,#4a3318,#2c1d0e)}'
    + 'body .pg-livro{margin-top:18px;padding:clamp(18px,2.4vw,34px);border-radius:6px;background:linear-gradient(180deg,#1d140c,#140d08);border:1px solid rgba(201,162,74,.16);columns:2 320px;column-gap:clamp(24px,3vw,48px);column-rule:1px solid rgba(201,162,74,.14)}'
    + 'body .pg-livro h2{column-span:all;margin:0 0 14px;text-align:center;font:400 22px "IM Fell English SC",serif;letter-spacing:.16em;color:#c9a24a}'
    + 'body .pg-cp{break-inside:avoid;display:grid;grid-template-columns:52px minmax(0,1fr);gap:4px 12px;width:100%;margin-bottom:10px;padding:10px 8px;border:0;border-radius:4px;background:none;color:#e6d6b6;text-align:left;transition:background .2s}body .pg-cp:hover{background:rgba(201,162,74,.07)}'
    + 'body .pg-cp>i{grid-row:span 3;font:normal 400 30px/1 "IM Fell English SC",serif;color:#c9a24a;text-align:right}body .pg-cp b{font:400 20px/1.2 var(--pl-tit)}'
    + 'body .pg-cp span{font:italic 400 15px/1.45 var(--pl-tit);color:#b6a584;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}body .pg-cp small{font:400 14px "IM Fell English SC",serif;letter-spacing:.08em;color:#b5523e}body .pg-cp small em{font-style:normal;color:var(--ac)}'
    + 'body .pg-folio button:focus-visible,body .pg-livro button:focus-visible{outline:2px solid #f0d58a;outline-offset:3px}'
    + '@media (max-width:900px){body .pg-folio{grid-template-columns:1fr}body .pg-ilum{max-width:340px;width:100%;justify-self:center}}',
  capa: function (d, u) {
    function rom(n) { var r = '', v = [10, 9, 5, 4, 1], s = ['x', 'ix', 'v', 'iv', 'i']; for (var k = 0; k < v.length; k++) while (n >= v[k]) { r += s[k]; n -= v[k]; } return r.toUpperCase(); }
    var NM = { o: 'Speak', l: 'Hear', f: 'The words', w: 'Write' };
    var t = String(d.titulo).trim(), c0 = t.charAt(0), rest = t.slice(1);
    var cps = u.cenas().map(function (c) { return '<button type="button" class="pg-cp" data-a="ir" data-n="' + c.i + '"><i>' + rom(c.i) + '</i><b>' + u.h(c.t) + '</b>' + (c.frase ? '<span>' + c.frase + '</span>' : '') + '<small>Chapter ' + rom(c.i) + ' · <em>' + (NM[c.est] || 'Read') + '</em>' + (c.min ? ' · ' + c.min + ' min' : '') + '</small></button>'; }).join('');
    return '<section class="pg-folio"><div class="pg-ilum" role="img" aria-label="' + u.h(d.alt || d.titulo) + '"><span style="--arte:url(\'' + d.img + '\')"></span></div>'
      + '<div class="pg-tx"><p class="pg-rub">' + u.h(d.chips.join(' · ')) + '</p><h1 aria-label="' + u.h(t) + '"><span class="pg-cap" aria-hidden="true">' + u.h(c0) + '</span><span aria-hidden="true">' + u.h(rest) + '</span></h1><p class="pg-orn" aria-hidden="true">❦</p>'
      + (d.banda ? '<p class="pg-banda">' + d.banda + '</p>' : '') + '<p class="pg-sub">' + d.sub + '</p><button type="button" class="pg-ir" data-a="ir" data-n="' + d.ir + '">' + u.h(d.botao) + '</button></div></section>'
      + '<div class="pg-livro"><h2>The chapters of tonight</h2>' + cps + '</div>' + d.faixa;
  } };

/* WOLFFY · PLAYER (ref. Dribbble "Groovy" music web app): hero da música, cartão Now playing, tracklist. */
WL_PELES.player = { linhas: ['WOLFFY'], nome: 'Player',
  fontes: 'family=Unbounded:wght@500;700;800',
  tokens: '--pl-tit:"Unbounded","Urbanist",sans-serif;--pl-tit-peso:700;--pl-escuro:12,10,18;--pl-vidro:rgba(18,14,26,.62);--pl-borda:rgba(255,255,255,.1);--pl-raio:22px;--pl-sobre-ac:#160c24',
  css: 'body .cab h1{font-size:clamp(24px,2.1vw,42px)}body .fm-cena-n,body .fm-folha-t b,body .fm-placa-t{font-size:15px}'
    + 'body .px-capa{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:18px}'
    + 'body .px-hero{position:relative;min-height:clamp(360px,52vh,560px);border-radius:28px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;gap:16px;padding:clamp(22px,3vw,40px);background:linear-gradient(90deg,rgba(12,10,18,.92) 0%,rgba(12,10,18,.5) 42%,rgba(12,10,18,.05) 72%),linear-gradient(0deg,rgba(12,10,18,.8),transparent 40%),var(--arte) center 35%/cover;border:1px solid rgba(255,255,255,.1);box-shadow:0 40px 90px rgba(0,0,0,.55)}'
    + 'body .px-chips{display:flex;flex-wrap:wrap;gap:8px}body .px-chips span{padding:6px 13px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.14);font:700 13px var(--ui);color:#fff}body .px-chips span:first-child{background:var(--ac);border-color:var(--ac);color:var(--pl-sobre-ac)}'
    + 'body .px-tx{max-width:620px;display:grid;gap:12px}body .px-art{margin:0;font:700 14px var(--ui);letter-spacing:.2em;text-transform:uppercase;color:var(--ac2)}body .px-tx h1{margin:0;font:800 clamp(46px,5.4vw,100px)/.92 var(--pl-tit);letter-spacing:-.04em;color:#fff;text-wrap:balance}body .px-sub{margin:0;font:500 clamp(16px,1.15vw,19px)/1.55 var(--ui);color:#d6cfe4;max-width:46ch}'
    + 'body .px-acoes{display:flex;align-items:center;gap:14px}body .px-acoes b{display:block;font:800 17px var(--ui);color:#fff}body .px-acoes small{font:600 13px var(--ui);color:var(--t2)}'
    + 'body .px-play{width:64px;height:64px;border-radius:50%;border:0;background:var(--ac);display:grid;place-items:center;box-shadow:0 0 0 8px color-mix(in srgb,var(--ac) 18%,transparent)}body .px-play i,body .px-pp::after{width:0;height:0;margin-left:5px;border-left:19px solid var(--pl-sobre-ac);border-top:11px solid transparent;border-bottom:11px solid transparent;content:""}'
    + 'body .px-now{display:flex;flex-direction:column;gap:6px;padding:18px;border-radius:28px;background:rgba(18,14,26,.72);border:1px solid rgba(255,255,255,.1);box-shadow:0 30px 70px rgba(0,0,0,.5)}body .px-now p{margin:0 0 6px;font:700 13px var(--ui);color:var(--t2)}body .px-disco{display:block;aspect-ratio:1;border-radius:20px;background:#1a1426 center/cover}body .px-now b{margin-top:10px;font:700 19px var(--pl-tit);color:#fff}body .px-now small{font:600 13px var(--ui);color:var(--t2)}'
    + 'body .px-barra{display:block;height:4px;border-radius:2px;background:rgba(255,255,255,.12);margin-top:12px;overflow:hidden}body .px-barra i{display:block;width:18%;height:100%;background:var(--ac)}body .px-ctrl{display:flex;justify-content:center;margin-top:8px}body .px-pp{width:54px;height:54px;border-radius:50%;background:var(--ac);display:grid;place-items:center}'
    + 'body .px-lista{grid-column:1/-1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 22px;padding:18px 20px;border-radius:24px;background:rgba(18,14,26,.6);border:1px solid rgba(255,255,255,.08)}body .px-lista p{grid-column:1/-1;margin:0 0 6px;font:700 18px var(--pl-tit);color:#fff}'
    + 'body .px-fx{display:grid;grid-template-columns:28px 44px 1fr auto;align-items:center;gap:12px;padding:8px 6px;border:0;border-radius:12px;background:none;text-align:left;color:var(--t1)}body .px-fx:hover{background:color-mix(in srgb,var(--ac) 12%,transparent)}body .px-fx b{font:700 13px var(--pl-tit);color:var(--t3)}body .px-mini{width:44px;height:44px;border-radius:10px;background:#1a1426 center/cover}body .px-fx-t{font:700 15px/1.25 var(--ui);display:grid}body .px-fx-t small{font:600 12px var(--ui);color:var(--t3)}body .px-fx em{font:600 13px var(--ui);font-style:normal;color:var(--t2)}'
    + '@media (max-width:1000px){body .px-capa{grid-template-columns:1fr}body .px-now{display:none}body .px-lista{grid-template-columns:1fr}}',
  capa: function (d, u) {
    var fx = u.cenas().map(function (c) { return '<button type="button" class="px-fx" data-a="ir" data-n="' + c.i + '"><b>' + ('0' + c.i).slice(-2) + '</b><span class="px-mini" style="background-image:url(\'' + c.img + '\')"></span><span class="px-fx-t">' + u.h(c.t) + '<small>' + c.estNome + '</small></span><em>' + (c.extra ? '—' : c.min + ':00') + '</em></button>'; }).join('');
    return '<div class="px-capa"><section class="px-hero" style="--arte:url(\'' + d.img + '\')"><div class="px-chips">' + d.chips.map(function (c) { return '<span>' + u.h(c) + '</span>'; }).join('') + '</div>'
      + '<div class="px-tx">' + (d.banda ? '<p class="px-art">' + d.banda + '</p>' : '') + '<h1>' + u.h(d.titulo) + '</h1><p class="px-sub">' + d.sub + '</p><div class="px-acoes"><button type="button" class="px-play" data-a="ir" data-n="' + d.ir + '" aria-label="' + u.h(d.botao) + '"><i aria-hidden="true"></i></button><span><b>' + u.h(d.botao) + '</b><small>' + u.cenas().length + ' scenes · about ' + u.totalMin() + ' min</small></span></div></div></section>'
      + '<aside class="px-now" aria-hidden="true"><p>Now playing</p><span class="px-disco" style="background-image:url(\'' + d.img + '\')"></span><b>' + u.h(d.titulo) + '</b><small>' + (d.banda || d.linha) + '</small><span class="px-barra"><i></i></span><span class="px-ctrl"><span class="px-pp"></span></span></aside>'
      + '<section class="px-lista"><p>Tracklist</p>' + fx + '</section></div>' + d.faixa;
  } };

/* MAIN SERIES · REVISTA "The Weekend": a capa de uma revista de fim de semana à noite, as cenas como matérias. */
WL_PELES.revista = { linhas: ['MAIN SERIES'], nome: 'Revista',
  fontes: 'family=Instrument+Serif:ital@0;1',
  tokens: '--pl-tit:"Instrument Serif",Georgia,serif;--pl-tit-peso:400;--pl-tit-esp:-.01em;--pl-escuro:8,11,10;--pl-vidro:rgba(12,16,14,.62);--pl-borda:rgba(255,255,255,.1);--pl-raio:22px;--pl-sobre-ac:#0b1a10',
  css: 'body .fm-pista,body .fm-certa{font-family:var(--pl-tit);font-weight:400}body .fm-cena-n,body .fm-folha-t b,body .fm-placa-t{font-style:italic;font-weight:400;font-size:1.25em}'
    + 'body .mx-hero{position:relative;min-height:clamp(400px,64vh,680px);border-radius:28px;overflow:hidden;display:grid;grid-template-rows:auto 1fr;gap:18px;padding:clamp(22px,3vw,44px);background:linear-gradient(90deg,rgba(8,11,10,.9) 0%,rgba(8,11,10,.5) 40%,rgba(8,11,10,.05) 70%),linear-gradient(0deg,rgba(8,11,10,.8),transparent 40%),var(--arte) center 45%/cover;border:1px solid rgba(255,255,255,.1);box-shadow:0 40px 90px rgba(0,0,0,.55)}'
    + 'body .mx-topo{display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap;border-bottom:1px solid rgba(255,255,255,.18);padding-bottom:12px}body .mx-marca{font:italic 400 clamp(26px,2.2vw,40px)/1 var(--pl-tit);color:#fff}body .mx-ed{font:700 12px var(--ui);letter-spacing:.16em;text-transform:uppercase;color:var(--ac)}'
    + 'body .mx-tx{align-self:end;max-width:680px;display:grid;gap:14px}body .mx-tx h1{margin:0;font:400 clamp(60px,7.4vw,140px)/.86 var(--pl-tit);letter-spacing:-.03em;color:#fff;text-wrap:balance}body .mx-sub{margin:0;font:500 clamp(16px,1.2vw,20px)/1.55 var(--ui);color:#d3ddd7;max-width:46ch}'
    + 'body .mx-ler{justify-self:start;min-height:54px;padding:0 28px;border-radius:999px;border:0;background:var(--ac);color:var(--pl-sobre-ac);font:800 16px var(--ui);box-shadow:0 14px 34px rgba(0,0,0,.35)}'
    + 'body .mx-indice{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:4px 18px;margin-top:18px}body .mx-indice-t{grid-column:1/-1;margin:0 0 6px;font:italic 400 24px var(--pl-tit);color:#fff}'
    + 'body .mx-mat{display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:10px;padding:10px 2px;border:0;border-top:1px solid rgba(255,255,255,.12);background:none;text-align:left;color:var(--t1)}body .mx-mat b{font:italic 400 26px/1 var(--pl-tit);color:var(--ac)}body .mx-mat span{font:700 14.5px/1.3 var(--ui)}body .mx-mat small{font:600 12px var(--ui);color:var(--t3)}body .mx-mat:hover span{color:var(--ac)}',
  capa: function (d, u) {
    var mat = u.cenas().map(function (c) { return '<button type="button" class="mx-mat" data-a="ir" data-n="' + c.i + '"><b>' + ('0' + c.i).slice(-2) + '</b><span>' + u.h(c.t) + '</span><small>' + (c.extra ? 'extra' : c.min + ' min') + '</small></button>'; }).join('');
    return '<section class="mx-hero" style="--arte:url(\'' + d.img + '\')"><header class="mx-topo"><span class="mx-marca">The Weekend</span><span class="mx-ed">' + u.h(d.chips.join(' · ')) + '</span></header>'
      + '<div class="mx-tx"><h1>' + u.h(d.titulo) + '</h1><p class="mx-sub">' + d.sub + '</p><button type="button" class="mx-ler" data-a="ir" data-n="' + d.ir + '">' + u.h(d.botao) + '</button></div></section>'
      + '<nav class="mx-indice" aria-label="Scenes"><p class="mx-indice-t">In this issue</p>' + mat + '</nav>' + d.faixa;
  } };

/* WOLFLIX · ROTEIRO (ref. roteiro de cinema numa mesa escura): folha de rosto, foto presa no clipe, índice de cenas. */
WL_PELES.roteiro = { linhas: ['WOLFLIX'], nome: 'Roteiro',
  fontes: 'family=Courier+Prime:ital,wght@0,400;0,700;1,400',
  tokens: '--pl-tit:"Courier Prime","Courier New",monospace;--pl-tit-peso:700;--pl-tit-caixa:uppercase;--pl-tit-esp:0;--pl-escuro:13,12,11;--pl-vidro:rgba(24,22,20,.7);--pl-borda:rgba(255,255,255,.09);--pl-raio:6px;--pl-raio-p:2px;--pl-sobre-ac:#121010',
  css: 'body .rt-mesa{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:clamp(16px,2.4vw,34px);align-items:start;padding:clamp(18px,3vw,40px);border-radius:18px;background:radial-gradient(ellipse at 30% 0,rgba(var(--pl-escuro),0) 0,rgba(0,0,0,.6) 80%),repeating-linear-gradient(92deg,#17120e 0 18px,#1b150f 18px 22px,#15100c 22px 47px),#16110d;box-shadow:inset 0 0 120px rgba(0,0,0,.7),0 40px 90px rgba(0,0,0,.55)}'
    + 'body .rt-fl{position:relative;padding:clamp(26px,3.4vw,52px) clamp(22px,3vw,48px) clamp(22px,3vw,40px) clamp(44px,4.6vw,70px);border-radius:3px;background:linear-gradient(180deg,#22201d,#1c1a18);border:1px solid rgba(255,255,255,.06);box-shadow:0 22px 50px rgba(0,0,0,.6),6px 6px 0 -1px #191715,6px 6px 0 0 rgba(255,255,255,.05);font-family:var(--pl-tit);color:#e4ddd2}'
    + 'body .rt-fl::before{content:"";position:absolute;left:16px;top:12%;bottom:12%;width:12px;background:radial-gradient(circle,#b08d4f 0 4px,#5b4524 5px,transparent 6px) center top/12px 33.3% repeat-y}'
    + 'body .rt-rosto{display:grid;gap:14px;text-align:center;justify-items:center}'
    + 'body .rt-kick{margin:0;font:400 13px var(--pl-tit);letter-spacing:.14em;text-transform:uppercase;color:#9d958a}'
    + 'body .rt-rosto h1{margin:6px 0 0;font:700 clamp(32px,3.8vw,64px)/1.05 var(--pl-tit);text-transform:uppercase;letter-spacing:-.01em;color:#f4efe6;text-decoration:underline;text-decoration-thickness:3px;text-underline-offset:.18em;text-decoration-color:var(--ac);text-wrap:balance}'
    + 'body .rt-por{margin:0;font:italic 400 16px var(--pl-tit);color:#a9a196}body .rt-por b{display:block;margin-top:4px;font:700 17px var(--pl-tit);font-style:normal;color:var(--ac2)}'
    + 'body .rt-foto{position:relative;margin:8px 0 4px;width:min(100%,460px);padding:8px 8px 26px;background:#0f0e0d;border:1px solid rgba(255,255,255,.08);transform:rotate(-1.6deg);box-shadow:0 18px 34px rgba(0,0,0,.6)}'
    + 'body .rt-foto img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;filter:brightness(.64) saturate(.7) contrast(1.08)}'
    + 'body .rt-foto::before{content:"";position:absolute;z-index:1;top:-16px;left:28px;width:16px;height:44px;border:3px solid #8f8a82;border-radius:9px;border-bottom-color:transparent}'
    + 'body .rt-foto figcaption{position:absolute;left:10px;bottom:5px;font:400 12px var(--pl-tit);color:#8c857b}'
    + 'body .rt-sub{margin:0;max-width:46ch;font:400 16px/1.6 var(--pl-tit);color:#cfc7bb}body .rt-sub *{font-family:inherit}'
    + 'body .rt-fade{margin-top:8px;justify-self:end;display:flex;align-items:center;gap:14px;padding:12px 18px;border:1px solid var(--ac);border-radius:3px;background:color-mix(in srgb,var(--ac) 14%,transparent);font:700 17px var(--pl-tit);text-transform:uppercase;color:#f4efe6;transition:background .2s}'
    + 'body .rt-fade:hover{background:color-mix(in srgb,var(--ac) 28%,transparent)}body .rt-fade i{font-style:normal;color:var(--ac2)}'
    + 'body .rt-ix{padding-top:clamp(22px,3vw,40px)}body .rt-ix>p{margin:0 0 6px;font:700 15px var(--pl-tit);letter-spacing:.06em;text-transform:uppercase;color:#f4efe6}body .rt-ix>p+p{margin-bottom:18px;font-weight:400;font-size:13px;color:#8c857b}'
    + 'body .rt-cn{width:100%;display:grid;grid-template-columns:3ch 1fr 3ch;gap:12px;align-items:baseline;padding:9px 6px;border:0;border-bottom:1px dashed rgba(255,255,255,.08);background:none;text-align:left;font-family:var(--pl-tit);color:#ddd5c9;transition:background .15s}'
    + 'body .rt-cn:hover{background:color-mix(in srgb,var(--ac) 12%,transparent)}body .rt-cn>b{font:700 15px var(--pl-tit);color:var(--ac2)}body .rt-cn>b:last-child{text-align:right}'
    + 'body .rt-cn span{display:grid;gap:2px;font:700 15px/1.35 var(--pl-tit);text-transform:uppercase}body .rt-cn small{font:400 13px var(--pl-tit);text-transform:none;color:#8c857b}'
    + 'body .rt-fim{margin:16px 0 0;text-align:right;font:700 14px var(--pl-tit);color:#8c857b}'
    + 'body .rt-mesa button:focus-visible{outline:3px solid var(--ac2);outline-offset:3px}'
    + '@media (max-width:900px){body .rt-mesa{grid-template-columns:1fr}body .rt-fade{justify-self:center}}',
  capa: function (d, u) {
    var cs = u.cenas(), n = function (i) { return ('0' + i).slice(-2); };
    var ix = cs.map(function (c) { return '<button type="button" class="rt-cn" data-a="ir" data-n="' + c.i + '"><b>' + n(c.i) + '</b><span>' + (c.extra ? 'EXT. ' : 'INT. ') + u.h(c.t) + ' — ' + (c.estNome || 'scene') + '<small>(' + (c.extra ? 'bonus scene' : c.min + ' min') + ')</small></span><b>' + n(c.i) + '</b></button>'; }).join('');
    return '<div class="rt-mesa"><article class="rt-fl rt-rosto"><p class="rt-kick">' + u.h(d.chips.join(' · ') || d.linha) + '</p><h1>' + u.h(d.titulo) + '</h1>'
      + '<p class="rt-por">a lesson in ' + cs.length + ' scenes' + (d.banda ? '<b>' + d.banda + '</b>' : '') + '</p>'
      + '<figure class="rt-foto"><img src="' + d.img + '" alt="' + u.h(d.alt) + '"><figcaption>ref. still · ' + u.totalMin() + ' min</figcaption></figure>'
      + '<p class="rt-sub">' + d.sub + '</p><button type="button" class="rt-fade" data-a="ir" data-n="' + d.ir + '">Fade in: <i>' + u.h(d.botao) + ' →</i></button></article>'
      + '<nav class="rt-fl rt-ix" aria-label="Scenes"><p>Scene index</p><p>Tap a heading to cut to that scene.</p>' + ix + '<p class="rt-fim">FADE OUT.</p></nav></div>' + d.faixa;
  } };

/* WOLFSTATION · RPG: uma busca de fantasia sombria. O diário de missões sobre um mapa escuro; cada cena é uma missão com ícone e XP. Pergaminho só em tons escuros. */
WL_PELES.rpg = { linhas: ['WOLFSTATION'], nome: 'RPG',
  fontes: 'family=Cinzel+Decorative:wght@700;900&family=Alegreya:ital,wght@0,500;0,700;1,500',
  tokens: '--pl-tit:"Cinzel Decorative","Cinzel",Georgia,serif;--pl-tit-peso:700;--pl-tit-esp:.01em;--pl-escuro:14,11,8;--pl-vidro:rgba(31,24,17,.8);--pl-borda:rgba(201,162,92,.22);--pl-raio:6px;--pl-raio-p:2px;--pl-sobre-ac:#140e08',
  css: 'body .fm-pista,body .fm-certa{font-family:"Alegreya",Georgia,serif}'
    + 'body .rq-mapa{position:relative;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);min-height:clamp(480px,74vh,780px);border-radius:8px;overflow:hidden;border:1px solid rgba(201,162,92,.25);box-shadow:0 40px 90px rgba(0,0,0,.6);background:#100c08}'
    + 'body .rq-mapa::before{content:"";position:absolute;inset:0;background:var(--arte) center 40%/cover;filter:sepia(.55) saturate(.8) brightness(.42) contrast(1.05)}'
    + 'body .rq-mapa::after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 30% 50%,transparent 30%,rgba(10,7,4,.85) 100%),repeating-linear-gradient(0deg,transparent 0 59px,rgba(201,162,92,.05) 59px 60px),repeating-linear-gradient(90deg,transparent 0 59px,rgba(201,162,92,.05) 59px 60px)}'
    + 'body .rq-mapa>*{position:relative;z-index:1}'
    + 'body .rq-rosa{position:absolute;left:clamp(16px,2vw,28px);top:clamp(16px,2vw,28px);width:64px;height:64px;border-radius:50%;border:1px solid rgba(201,162,92,.4);display:grid;place-items:center;font:700 13px "Cinzel Decorative",serif;color:#c9a25c;background:conic-gradient(from 45deg,rgba(201,162,92,.18) 0 25%,transparent 0 50%,rgba(201,162,92,.18) 0 75%,transparent 0)}'
    + 'body .rq-marca{position:absolute;left:44%;top:46%;width:16px;height:16px;transform:rotate(45deg);background:var(--ac);box-shadow:0 0 0 6px color-mix(in srgb,var(--ac) 25%,transparent),0 0 24px var(--ac)}'
    + 'body .rq-log{margin:clamp(14px,1.8vw,26px);padding:clamp(20px,2.4vw,34px);display:flex;flex-direction:column;gap:12px;border-radius:4px;background:linear-gradient(180deg,rgba(44,33,22,.92),rgba(28,21,14,.95));border:1px solid rgba(201,162,92,.28);box-shadow:inset 0 0 0 5px rgba(14,11,8,.6),inset 0 0 0 6px rgba(201,162,92,.16),0 24px 60px rgba(0,0,0,.5)}'
    + 'body .rq-kick{margin:0;font:700 12px var(--ui);letter-spacing:.24em;text-transform:uppercase;color:#a88a5a}'
    + 'body .rq-log h1{margin:0;font:900 clamp(34px,3.4vw,64px)/1.02 var(--pl-tit);color:#ead9b8;text-shadow:0 3px 0 rgba(0,0,0,.5);text-wrap:balance}'
    + 'body .rq-banda{margin:0;font:italic 500 19px "Alegreya",serif;color:var(--ac2)}body .rq-sub{margin:0;font:500 clamp(16px,1.15vw,19px)/1.5 "Alegreya",Georgia,serif;color:#cdbb99;max-width:48ch}'
    + 'body .rq-ir{align-self:flex-start;min-height:52px;padding:0 26px;border-radius:3px;border:1px solid color-mix(in srgb,var(--ac) 70%,#c9a25c);background:linear-gradient(180deg,color-mix(in srgb,var(--ac) 40%,#2a1d10),color-mix(in srgb,var(--ac) 22%,#1a120a));color:#f1e3c6;font:700 15px "Cinzel Decorative",serif;letter-spacing:.06em;box-shadow:0 6px 18px rgba(0,0,0,.45);transition:filter .2s}body .rq-ir:hover{filter:brightness(1.15)}'
    + 'body .rq-lt{margin:10px 0 0;display:flex;justify-content:space-between;font:700 13px "Cinzel Decorative",serif;letter-spacing:.08em;color:#c9a25c;border-bottom:1px solid rgba(201,162,92,.22);padding-bottom:6px}body .rq-lt span{font:600 13px var(--ui);color:#a88a5a}'
    + 'body .rq-q{display:grid;grid-template-columns:38px minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;padding:9px 8px;border:0;border-bottom:1px dashed rgba(201,162,92,.14);background:none;color:#ead9b8;text-align:left;transition:background .2s}body .rq-q:hover{background:rgba(201,162,92,.08)}'
    + 'body .rq-ic{width:30px;height:30px;margin-left:4px;transform:rotate(45deg);display:grid;place-items:center;border:1px solid var(--ac);background:rgba(14,11,8,.7)}body .rq-ic i{transform:rotate(-45deg);font:normal 16px/1 serif;color:var(--ac2)}'
    + 'body .rq-q b{display:block;font:700 17px/1.2 "Alegreya",serif}body .rq-q small{font:italic 500 14px "Alegreya",serif;color:#a88a5a}body .rq-xp{font:700 13px var(--ui);color:#c9a25c;white-space:nowrap}'
    + 'body .rq-mapa button:focus-visible{outline:2px solid #e6c37a;outline-offset:3px}'
    + '@media (max-width:900px){body .rq-mapa{grid-template-columns:1fr}body .rq-vazio{min-height:180px}}',
  capa: function (d, u) {
    var IC = { o: '⚔', l: '☾', f: '◈', w: '✒' }, NM = { o: 'Speak', l: 'Listen', f: 'Study', w: 'Scribe' };
    var q = u.cenas().map(function (c) { return '<button type="button" class="rq-q" data-a="ir" data-n="' + c.i + '"><span class="rq-ic" aria-hidden="true"><i>' + (IC[c.est] || '✦') + '</i></span><span><b>' + u.h(c.t) + '</b><small>' + (c.extra ? 'Side quest' : 'Quest ' + c.i) + (NM[c.est] ? ' · ' + NM[c.est] : '') + '</small></span><span class="rq-xp">' + (c.extra ? 'bonus' : '+' + (c.min || 1) * 10 + ' XP') + '</span></button>'; }).join('');
    return '<div class="rq-mapa" style="--arte:url(\'' + d.img + '\')"><div class="rq-vazio"><span class="rq-rosa" aria-hidden="true">N</span><span class="rq-marca" aria-hidden="true"></span></div>'
      + '<section class="rq-log"><p class="rq-kick">Quest log' + (d.chips.length ? ' · ' + u.h(d.chips.join(' · ')) : '') + '</p><h1>' + u.h(d.titulo) + '</h1>' + (d.banda ? '<p class="rq-banda">' + d.banda + '</p>' : '') + '<p class="rq-sub">' + d.sub + '</p>'
      + '<button type="button" class="rq-ir" data-a="ir" data-n="' + d.ir + '">Begin the quest</button>'
      + '<p class="rq-lt">Quests<span>' + u.totalMin() * 10 + ' XP to earn</span></p><div>' + q + '</div></section></div>' + d.faixa;
  } };

/* WOLFFY · SHOW (ref. noite de show ao vivo): luz de palco, telão, setlist colado no chão, crachá de backstage. */
WL_PELES.show = { linhas: ['WOLFFY'], nome: 'Show',
  fontes: 'family=Dela+Gothic+One&family=Permanent+Marker',
  tokens: '--pl-tit:"Dela Gothic One","Urbanist",sans-serif;--pl-tit-peso:400;--pl-tit-esp:-.01em;--pl-escuro:8,7,12;--pl-vidro:rgba(14,12,20,.66);--pl-borda:rgba(255,255,255,.1);--pl-raio:18px;--pl-sobre-ac:#0c0a12',
  css: 'body .sw-palco{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(250px,300px);gap:clamp(16px,2.4vw,30px);padding:clamp(18px,2.6vw,34px);border-radius:26px;overflow:hidden;background:conic-gradient(from 168deg at 22% -8%,transparent 0 6deg,color-mix(in srgb,var(--ac) 22%,transparent) 9deg 15deg,transparent 19deg),conic-gradient(from 172deg at 78% -8%,transparent 0 8deg,color-mix(in srgb,var(--ac2) 18%,transparent) 11deg 16deg,transparent 20deg),radial-gradient(ellipse at 50% -20%,color-mix(in srgb,var(--ac) 30%,transparent),transparent 60%),linear-gradient(180deg,#0b0a12 0 62%,#120f17 62%);border:1px solid rgba(255,255,255,.08);box-shadow:0 40px 90px rgba(0,0,0,.6)}'
    + 'body .sw-palco::after{content:"";position:absolute;inset:auto 0 0;height:38%;background:repeating-linear-gradient(90deg,rgba(255,255,255,.025) 0 2px,transparent 2px 64px),linear-gradient(180deg,rgba(0,0,0,.4),transparent);pointer-events:none}'
    + 'body .sw-telao{grid-column:1/-1;position:relative;min-height:clamp(300px,46vh,500px);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;gap:12px;padding:clamp(20px,3vw,40px);background:linear-gradient(0deg,rgba(8,7,12,.95),rgba(8,7,12,.3) 55%,rgba(8,7,12,.6)),var(--arte) center 35%/cover;box-shadow:0 0 80px color-mix(in srgb,var(--ac) 22%,transparent),inset 0 0 0 1px rgba(255,255,255,.08)}'
    + 'body .sw-telao::before{content:"";position:absolute;inset:0;background:radial-gradient(circle,rgba(0,0,0,.3) 1px,transparent 1.5px) 0 0/4px 4px;filter:saturate(.8);pointer-events:none}'
    + 'body .sw-ao{position:relative;margin:0;display:flex;align-items:center;gap:10px;font:400 13px var(--pl-tit);letter-spacing:.2em;text-transform:uppercase;color:#fff}body .sw-ao i{width:10px;height:10px;border-radius:50%;background:var(--ac);box-shadow:0 0 12px var(--ac);animation:sw-pulsa 1.6s ease-in-out infinite}'
    + 'body .sw-telao h1{position:relative;margin:0;font:400 clamp(40px,5.6vw,108px)/.95 var(--pl-tit);letter-spacing:-.02em;color:#fff;text-shadow:0 0 40px color-mix(in srgb,var(--ac) 45%,transparent);text-wrap:balance}'
    + 'body .sw-com{position:relative;margin:0;font:400 22px "Permanent Marker",cursive;color:var(--ac2)}body .sw-sub{position:relative;margin:0;font:500 clamp(16px,1.15vw,19px)/1.55 var(--ui);color:#d9d4e2;max-width:52ch}'
    + 'body .sw-set{position:relative;z-index:1;align-self:start;padding:30px clamp(18px,2.4vw,30px) 22px;background:linear-gradient(175deg,#1b1922,#15131b);border-radius:2px;transform:rotate(-1.2deg);box-shadow:0 18px 40px rgba(0,0,0,.6)}'
    + 'body .sw-set::before,body .sw-set::after{content:"";position:absolute;top:-10px;width:92px;height:26px;background:rgba(120,118,128,.42);box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}body .sw-set::before{left:-14px;transform:rotate(-12deg)}body .sw-set::after{right:-14px;transform:rotate(10deg)}'
    + 'body .sw-set>p{margin:0 0 10px;font:400 26px "Permanent Marker",cursive;color:#fff}body .sw-set>p small{margin-left:10px;font:400 15px "Permanent Marker",cursive;color:var(--t3)}'
    + 'body .sw-lista{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:2px 26px}'
    + 'body .sw-mus{width:100%;display:grid;grid-template-columns:2.2em 1fr auto;align-items:baseline;gap:10px;padding:7px 6px;border:0;border-radius:6px;background:none;text-align:left;color:#ece8f2;transition:background .15s}'
    + 'body .sw-mus:hover{background:color-mix(in srgb,var(--ac) 14%,transparent)}body .sw-mus b{font:400 20px "Permanent Marker",cursive;color:var(--ac)}body .sw-mus span{font:400 19px/1.25 "Permanent Marker",cursive}body .sw-mus em{font:600 12px var(--ui);font-style:normal;letter-spacing:.08em;text-transform:uppercase;color:var(--t3)}'
    + 'body .sw-passe{position:relative;z-index:1;align-self:start;justify-self:center;width:100%;max-width:280px;display:grid;padding:0;border:0;background:none;text-align:center;color:#fff;transform:rotate(2.5deg);transition:transform .25s}body .sw-passe:hover{transform:rotate(0) translateY(-4px)}'
    + 'body .sw-fita{justify-self:center;width:36px;height:56px;margin-bottom:-14px;background:linear-gradient(90deg,var(--ac),color-mix(in srgb,var(--ac) 60%,#000))}'
    + 'body .sw-cracha{display:grid;gap:10px;padding:22px 20px 20px;border-radius:18px;background:linear-gradient(160deg,#1d1a26,#0f0d15);border:1px solid rgba(255,255,255,.12);box-shadow:0 24px 50px rgba(0,0,0,.6)}'
    + 'body .sw-cracha::before{content:"";justify-self:center;width:54px;height:9px;border-radius:5px;background:#07060a;box-shadow:inset 0 1px 2px rgba(0,0,0,.8)}'
    + 'body .sw-aa{margin:0 -20px;padding:10px;background:var(--ac);color:var(--pl-sobre-ac);font:400 22px var(--pl-tit);letter-spacing:.04em}'
    + 'body .sw-cracha small{font:700 11px var(--ui);letter-spacing:.24em;text-transform:uppercase;color:var(--t2)}body .sw-cracha strong{font:400 19px/1.2 var(--pl-tit)}'
    + 'body .sw-holo{height:8px;border-radius:4px;background:linear-gradient(90deg,var(--ac),var(--ac2),var(--ac));opacity:.7}'
    + 'body .sw-palco button:focus-visible{outline:3px solid var(--ac2);outline-offset:4px}'
    + '@keyframes sw-pulsa{50%{opacity:.35}}'
    + '@media (max-width:900px){body .sw-palco{grid-template-columns:1fr}body .sw-passe{order:-1;grid-row:2}}'
    + '@media (prefers-reduced-motion:reduce){body .sw-ao i{animation:none}body .sw-passe{transition:none}}',
  capa: function (d, u) {
    var cs = u.cenas();
    var set = cs.map(function (c) { return '<button type="button" class="sw-mus" data-a="ir" data-n="' + c.i + '"><b>' + c.i + '.</b><span>' + u.h(c.t) + '</span><em>' + (c.extra ? 'encore' : c.min + ' min') + '</em></button>'; }).join('');
    return '<section class="sw-palco"><div class="sw-telao" style="--arte:url(\'' + d.img + '\')" role="img" aria-label="' + u.h(d.alt || d.titulo) + '"><p class="sw-ao"><i aria-hidden="true"></i>' + u.h(d.chips.join(' · ') || 'Live tonight') + '</p><h1>' + u.h(d.titulo) + '</h1>'
      + (d.banda ? '<p class="sw-com">' + d.banda + '</p>' : '') + '<p class="sw-sub">' + d.sub + '</p></div>'
      + '<div class="sw-set"><p>Setlist<small>' + cs.length + ' songs · ' + u.totalMin() + ' min</small></p><div class="sw-lista">' + set + '</div></div>'
      + '<button type="button" class="sw-passe" data-a="ir" data-n="' + d.ir + '"><span class="sw-fita" aria-hidden="true"></span><span class="sw-cracha"><small>Backstage pass</small><span class="sw-aa">ALL ACCESS</span><strong>' + u.h(d.botao) + '</strong><small>' + u.h(d.linha || 'Live') + ' · tonight</small><span class="sw-holo" aria-hidden="true"></span></span></button></section>' + d.faixa;
  } };

/* WOLFLIX · STREAMING (ref. Dribbble "Movie Streaming Platform", Ronas IT): a série num app de streaming. */
WL_PELES.streaming = { linhas: ['WOLFLIX'], nome: 'Streaming',
  fontes: 'family=Big+Shoulders+Display:wght@700;800;900',
  tokens: '--pl-tit:"Big Shoulders Display","Urbanist",sans-serif;--pl-tit-caixa:uppercase;--pl-tit-esp:.005em;--pl-escuro:12,14,17;--pl-vidro:rgba(14,16,20,.62);--pl-borda:rgba(255,255,255,.1);--pl-raio:22px;--pl-sobre-ac:#fff',
  css: 'body .sx-hero{position:relative;min-height:clamp(380px,62vh,660px);border-radius:28px;overflow:hidden;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:end;gap:20px;padding:clamp(22px,3vw,40px);background:linear-gradient(90deg,rgba(12,14,17,.9) 0%,rgba(12,14,17,.45) 40%,rgba(12,14,17,0) 68%),linear-gradient(0deg,rgba(12,14,17,.75),transparent 40%),var(--arte) center 40%/cover;border:1px solid rgba(255,255,255,.1);box-shadow:0 40px 90px rgba(0,0,0,.55)}'
    + 'body .sx-tx{max-width:640px;display:grid;gap:12px}'
    + 'body .sx-chips{display:flex;flex-wrap:wrap;gap:8px}body .sx-chips span{padding:6px 13px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.14);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);font:700 13px var(--ui);color:#fff}body .sx-chips span:first-child{background:var(--ac);border-color:var(--ac)}'
    + 'body .sx-serie{margin:0;font:700 14px var(--ui);letter-spacing:.2em;text-transform:uppercase;color:#fff;opacity:.75}'
    + 'body .sx-tx h1{margin:0;font:900 clamp(52px,6.2vw,120px)/.86 var(--pl-tit);text-transform:uppercase;color:#fff;text-wrap:balance}'
    + 'body .sx-sub{margin:0;font:500 clamp(16px,1.15vw,19px)/1.55 var(--ui);color:#c9d0d6;max-width:48ch}'
    + 'body .sx-acoes{display:flex;align-items:center;gap:14px}body .sx-acoes b{display:block;font:800 17px var(--ui);color:#fff}body .sx-acoes small{font:600 13px var(--ui);color:var(--t2)}'
    + 'body .sx-play{width:66px;height:66px;border-radius:50%;border:0;background:var(--ac);display:grid;place-items:center;box-shadow:0 0 0 8px color-mix(in srgb,var(--ac) 20%,transparent),0 14px 30px rgba(0,0,0,.4)}body .sx-play i{width:0;height:0;margin-left:5px;border-left:20px solid #fff;border-top:12px solid transparent;border-bottom:12px solid transparent}'
    + 'body .sx-t{display:flex;align-items:baseline;gap:12px;margin:18px 4px 10px}body .sx-t b{font:800 22px var(--pl-tit);text-transform:uppercase;color:#fff}body .sx-t span{font:500 13px var(--ui);color:var(--t3)}'
    + 'body .sx-eps{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}'
    + 'body .sx-ep{display:grid;gap:6px;text-align:left;border:0;background:none;padding:0;color:var(--t1)}body .sx-ep-img{position:relative;display:block;aspect-ratio:16/10;border-radius:14px;background:#22272c center/cover;box-shadow:0 12px 26px rgba(0,0,0,.45);border:1px solid var(--fio);transition:transform .2s,border-color .2s}body .sx-ep-img b{position:absolute;left:8px;bottom:4px;font:900 32px var(--pl-tit);color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.8)}body .sx-ep:hover .sx-ep-img{transform:translateY(-3px);border-color:var(--ac)}body .sx-ep-t{font:800 14px/1.25 var(--ui)}body .sx-ep small{font:600 12px var(--ui);color:var(--t3)}'
    + '@media (max-width:900px){body .sx-hero{grid-template-columns:1fr}}',
  capa: function (d, u) {
    var eps = u.cenas().map(function (c) { return '<button type="button" class="sx-ep" data-a="ir" data-n="' + c.i + '"><span class="sx-ep-img" style="background-image:url(\'' + c.img + '\')"><b>' + c.i + '</b></span><span class="sx-ep-t">' + u.h(c.t) + '</span><small>' + (c.extra ? 'extra' : c.min + ' min') + '</small></button>'; }).join('');
    return '<section class="sx-hero" style="--arte:url(\'' + d.img + '\')"><div class="sx-tx"><div class="sx-chips">' + d.chips.map(function (c) { return '<span>' + u.h(c) + '</span>'; }).join('') + '</div>'
      + (d.banda ? '<p class="sx-serie">' + d.banda + '</p>' : '') + '<h1>' + u.h(d.titulo) + '</h1><p class="sx-sub">' + d.sub + '</p>'
      + '<div class="sx-acoes"><button type="button" class="sx-play" data-a="ir" data-n="' + d.ir + '" aria-label="' + u.h(d.botao) + '"><i aria-hidden="true"></i></button><span><b>' + u.h(d.botao) + '</b><small>' + u.cenas().length + ' scenes · about ' + u.totalMin() + ' min</small></span></div></div></section>'
      + '<div class="sx-t"><b>Scenes</b><span>Tap one to jump there</span></div><div class="sx-eps">' + eps + '</div>' + d.faixa;
  } };

/* WOLFFY · VINIL (ref. capa de LP + toca-discos): a capa quadrada, o disco saindo dela, lado A / lado B. */
WL_PELES.vinil = { linhas: ['WOLFFY'], nome: 'Vinil',
  fontes: 'family=Syne:wght@600;700;800&family=DM+Mono:wght@500',
  tokens: '--pl-tit:"Syne","Urbanist",sans-serif;--pl-tit-peso:800;--pl-tit-esp:-.03em;--pl-escuro:11,10,12;--pl-vidro:rgba(18,16,20,.66);--pl-borda:rgba(255,255,255,.1);--pl-raio:8px;--pl-raio-p:50%;--pl-sobre-ac:#111',
  css: 'body .vn-capa{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:clamp(20px,3vw,46px);align-items:center;padding:clamp(20px,3vw,42px);border-radius:24px;background:radial-gradient(ellipse at 15% 20%,color-mix(in srgb,var(--ac) 16%,transparent),transparent 55%),linear-gradient(160deg,#141216,#0b0a0c);border:1px solid rgba(255,255,255,.07);box-shadow:0 40px 90px rgba(0,0,0,.55)}'
    + 'body .vn-toca{position:relative;aspect-ratio:1.32/1}'
    + 'body .vn-disco{position:absolute;top:3%;right:0;height:94%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,#050505 0 1.4%,transparent 1.8%),radial-gradient(circle,var(--ac) 0 15.5%,#0a0a0a 16% 17%,transparent 17.5%),conic-gradient(from 20deg,transparent,rgba(255,255,255,.09) 8%,transparent 18% 50%,rgba(255,255,255,.07) 58%,transparent 68%),repeating-radial-gradient(circle,#101012 0 1.2px,#1a1a1d 1.8px 3px),#0e0e10;box-shadow:0 20px 50px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.12),inset 0 0 0 6px #09090b,inset 0 0 0 7px rgba(255,255,255,.06);transform:translateX(-8%);transition:transform .8s cubic-bezier(.2,.8,.2,1);animation:vn-gira 9s linear infinite}'
    + 'body .vn-capa:hover .vn-disco,body .vn-capa:focus-within .vn-disco{transform:translateX(0)}'
    + 'body .vn-manga{position:absolute;z-index:1;left:0;top:0;height:100%;aspect-ratio:1;margin:0;overflow:hidden;border-radius:4px;background:#121114;box-shadow:14px 0 40px rgba(0,0,0,.65),inset 0 0 0 1px rgba(255,255,255,.08)}'
    + 'body .vn-manga img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(.6) saturate(.9) contrast(1.06)}'
    + 'body .vn-manga::after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,7,9,.92),transparent 48%),linear-gradient(100deg,rgba(255,255,255,.06),transparent 30%)}'
    + 'body .vn-manga figcaption{position:absolute;z-index:1;left:7%;right:7%;bottom:6%;display:grid;gap:4px}body .vn-manga figcaption b{font:800 clamp(18px,2vw,30px)/1 var(--pl-tit);letter-spacing:-.03em;color:#fff}body .vn-manga figcaption small{font:500 11px "DM Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:var(--ac2)}'
    + 'body .vn-selo{position:absolute;z-index:2;top:5%;right:calc(24% + 2%);padding:5px 9px;border-radius:999px;background:var(--ac);font:500 11px "DM Mono",monospace;letter-spacing:.08em;color:var(--pl-sobre-ac)}'
    + 'body .vn-tx{display:grid;gap:14px}body .vn-lp{margin:0;font:500 12px "DM Mono",monospace;letter-spacing:.2em;text-transform:uppercase;color:var(--t2)}'
    + 'body .vn-tx h1{margin:0;font:800 clamp(42px,4.8vw,92px)/.9 var(--pl-tit);letter-spacing:-.045em;color:#fff;text-wrap:balance}'
    + 'body .vn-art{margin:0;font:700 18px var(--pl-tit);color:var(--ac2)}body .vn-sub{margin:0;font:500 clamp(16px,1.12vw,19px)/1.55 var(--ui);color:#d4d0da;max-width:46ch}'
    + 'body .vn-agulha{justify-self:start;display:flex;align-items:center;gap:14px;padding:8px 22px 8px 8px;border:0;border-radius:999px;background:var(--ac);color:var(--pl-sobre-ac);font:800 17px var(--pl-tit);box-shadow:0 16px 30px rgba(0,0,0,.45);transition:transform .2s}body .vn-agulha:hover{transform:translateY(-2px)}'
    + 'body .vn-agulha i{width:42px;height:42px;border-radius:50%;background:radial-gradient(circle,var(--ac) 0 18%,#111 20%),repeating-radial-gradient(circle,#111 0 1px,#222 1.5px 2.5px);animation:vn-gira 3s linear infinite}'
    + 'body .vn-lados{grid-column:1/-1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 34px;padding-top:20px;border-top:1px solid rgba(255,255,255,.08)}'
    + 'body .vn-lado>p{margin:0 0 8px;display:flex;align-items:center;gap:10px;font:800 15px var(--pl-tit);letter-spacing:.08em;text-transform:uppercase;color:#fff}body .vn-lado>p::before{content:attr(data-l);display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--ac);color:var(--pl-sobre-ac)}'
    + 'body .vn-fx{width:100%;display:grid;grid-template-columns:2.6em 1fr auto;align-items:baseline;gap:10px;padding:9px 8px;border:0;border-radius:8px;background:none;text-align:left;color:var(--t1);transition:background .15s}'
    + 'body .vn-fx:hover{background:color-mix(in srgb,var(--ac) 12%,transparent)}body .vn-fx b{font:500 13px "DM Mono",monospace;color:var(--ac2)}body .vn-fx span{display:grid;font:700 15px/1.3 var(--ui)}body .vn-fx small{font:600 12px var(--ui);color:var(--t3)}body .vn-fx em{font:500 13px "DM Mono",monospace;font-style:normal;color:var(--t2)}'
    + 'body .vn-capa button:focus-visible{outline:3px solid var(--ac2);outline-offset:3px}'
    + '@keyframes vn-gira{to{rotate:360deg}}'
    + '@media (max-width:900px){body .vn-capa{grid-template-columns:1fr}body .vn-lados{grid-template-columns:1fr}}'
    + '@media (prefers-reduced-motion:reduce){body .vn-disco,body .vn-agulha i{animation:none}}',
  capa: function (d, u) {
    var cs = u.cenas(), meio = Math.ceil(cs.length / 2);
    var lado = function (l, lista) { return '<div class="vn-lado"><p data-l="' + l + '">Side ' + l + '</p>' + lista.map(function (c, k) { return '<button type="button" class="vn-fx" data-a="ir" data-n="' + c.i + '"><b>' + l + (k + 1) + '</b><span>' + u.h(c.t) + '<small>' + c.estNome + '</small></span><em>' + (c.extra ? 'bonus' : c.min + ':00') + '</em></button>'; }).join('') + '</div>'; };
    return '<section class="vn-capa"><div class="vn-toca"><span class="vn-disco" aria-hidden="true"></span><figure class="vn-manga"><img src="' + d.img + '" alt="' + u.h(d.alt) + '"><figcaption><small>' + u.h(d.linha || 'LP') + '</small><b>' + u.h(d.titulo) + '</b></figcaption></figure><span class="vn-selo" aria-hidden="true">33⅓ rpm</span></div>'
      + '<div class="vn-tx"><p class="vn-lp">' + u.h(d.chips.join(' · ') || 'LP') + '</p><h1>' + u.h(d.titulo) + '</h1>' + (d.banda ? '<p class="vn-art">' + d.banda + '</p>' : '') + '<p class="vn-sub">' + d.sub + '</p>'
      + '<button type="button" class="vn-agulha" data-a="ir" data-n="' + d.ir + '"><i aria-hidden="true"></i>' + u.h(d.botao) + '</button><p class="vn-lp">' + cs.length + ' tracks · ' + u.totalMin() + ' min</p></div>'
      + '<div class="vn-lados">' + lado('A', cs.slice(0, meio)) + lado('B', cs.slice(meio)) + '</div></section>' + d.faixa;
  } };

/* WOLFAITH · VITRAL: vitral à noite. A arte numa janela em arco com chumbo e vidro de cor profunda; as cenas são uma fileira de janelas em arco, cada uma de uma pedra (rubi, safira, esmeralda, ametista, âmbar). */
WL_PELES.vitral = { linhas: ['WOLFAITH'], nome: 'Vitral',
  fontes: 'family=Marcellus+SC&family=Cormorant+Garamond:ital,wght@0,600;1,500;1,600',
  tokens: '--pl-tit:"Marcellus SC","Marcellus",Georgia,serif;--pl-tit-peso:400;--pl-tit-esp:.03em;--pl-escuro:9,8,14;--pl-vidro:rgba(16,14,26,.76);--pl-borda:rgba(214,190,140,.16);--pl-raio:18px;--pl-sobre-ac:#0d0b14',
  css: 'body .fm-pista,body .fm-certa{font-family:"Cormorant Garamond",Georgia,serif;font-weight:600}'
    + 'body .vt-nave{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(18px,3vw,48px);align-items:center;padding:clamp(18px,2.4vw,34px);border-radius:28px;background:radial-gradient(ellipse at 25% 40%,color-mix(in srgb,var(--ac) 14%,transparent),transparent 60%),#0b0a12;border:1px solid rgba(255,255,255,.06);box-shadow:0 40px 90px rgba(0,0,0,.6)}'
    + 'body .vt-arco{position:relative;aspect-ratio:3/4;max-height:72vh;width:100%;justify-self:center;border-radius:999px 999px 10px 10px;overflow:hidden;background:#07060b;border:10px solid #07060b;box-shadow:0 0 0 2px rgba(214,190,140,.35),0 0 0 12px #0d0b14,0 0 0 13px rgba(214,190,140,.18),0 30px 80px rgba(0,0,0,.6)}'
    + 'body .vt-arco::before{content:"";position:absolute;inset:0;background:var(--arte) center 35%/cover;filter:saturate(1.1) brightness(.5) contrast(1.1)}'
    + 'body .vt-arco::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(90deg,transparent 0 calc(25% - 3px),#07060b calc(25% - 3px) 25%),repeating-linear-gradient(0deg,transparent 0 calc(20% - 3px),#07060b calc(20% - 3px) 20%),linear-gradient(135deg,rgba(120,20,40,.35),rgba(20,40,110,.3) 40%,rgba(14,70,50,.3) 70%,rgba(80,30,110,.35))}'
    + 'body .vt-tx{display:grid;gap:14px}body .vt-kick{margin:0;font:600 12px var(--ui);letter-spacing:.26em;text-transform:uppercase;color:#bfa978}'
    + 'body .vt-tx h1{margin:0;font:400 clamp(40px,4.4vw,84px)/1 var(--pl-tit);letter-spacing:.02em;color:#efe6d4;text-shadow:0 0 30px color-mix(in srgb,var(--ac) 40%,transparent);text-wrap:balance}'
    + 'body .vt-fio{width:120px;height:2px;background:linear-gradient(90deg,var(--ac),transparent)}body .vt-banda{margin:0;font:italic 600 21px "Cormorant Garamond",serif;color:var(--ac2)}'
    + 'body .vt-sub{margin:0;font:500 clamp(16px,1.15vw,19px)/1.55 var(--ui);color:#c9c1d4;max-width:48ch}'
    + 'body .vt-ir{justify-self:start;min-height:52px;padding:0 28px;border-radius:999px 999px 6px 6px;border:2px solid #07060b;background:linear-gradient(180deg,color-mix(in srgb,var(--ac) 55%,#1a1424),color-mix(in srgb,var(--ac) 30%,#0d0b14));color:#f3ead8;font:400 17px var(--pl-tit);letter-spacing:.06em;box-shadow:0 0 0 1px rgba(214,190,140,.35),0 10px 26px rgba(0,0,0,.5);transition:filter .2s}body .vt-ir:hover{filter:brightness(1.18)}'
    + 'body .vt-t{margin:22px 4px 12px;font:italic 600 24px "Cormorant Garamond",serif;color:#e6dcc6}'
    + 'body .vt-fila{display:grid;grid-template-columns:repeat(auto-fill,minmax(132px,1fr));gap:14px}'
    + 'body .vt-jan{position:relative;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:6px;min-height:210px;padding:56px 10px 14px;border-radius:999px 999px 8px 8px;border:5px solid #07060b;background:radial-gradient(circle at 50% 28%,rgba(255,255,255,.1),transparent 34%),linear-gradient(180deg,var(--g),color-mix(in srgb,var(--g) 55%,#05040a));color:#f1e8d6;text-align:center;box-shadow:0 0 0 1px rgba(214,190,140,.28),0 16px 34px rgba(0,0,0,.5);transition:transform .2s,box-shadow .2s}'
    + 'body .vt-jan::before{content:"";position:absolute;left:50%;top:0;bottom:48%;width:3px;margin-left:-1.5px;background:#07060b}body .vt-jan::after{content:"";position:absolute;left:0;right:0;top:44%;height:3px;background:#07060b}'
    + 'body .vt-jan:hover{transform:translateY(-4px);box-shadow:0 0 0 1px var(--ac),0 0 26px color-mix(in srgb,var(--ac) 30%,transparent),0 16px 34px rgba(0,0,0,.5)}'
    + 'body .vt-n{position:absolute;top:22%;left:50%;transform:translate(-50%,-50%);z-index:1;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#07060b;border:1px solid rgba(214,190,140,.45);font:400 15px var(--pl-tit);color:#e8d9b4}'
    + 'body .vt-jan b{position:relative;font:italic 600 17px/1.15 "Cormorant Garamond",serif}body .vt-jan small{position:relative;font:600 11px var(--ui);letter-spacing:.1em;text-transform:uppercase;color:rgba(241,232,214,.7)}'
    + 'body .vt-nave button:focus-visible,body .vt-fila button:focus-visible{outline:3px solid #e8d9b4;outline-offset:4px}'
    + '@media (max-width:900px){body .vt-nave{grid-template-columns:1fr}body .vt-arco{max-width:360px}}',
  capa: function (d, u) {
    var G = ['#4a0d1c', '#0e2150', '#0b3a2a', '#2e1450', '#4a2d08', '#123a48'];
    var NM = { o: 'Share', l: 'Listen', f: 'The words', w: 'Write' };
    var j = u.cenas().map(function (c, k) { return '<button type="button" class="vt-jan" data-a="ir" data-n="' + c.i + '" style="--g:' + G[k % G.length] + '"><span class="vt-n">' + c.i + '</span><b>' + u.h(c.t) + '</b><small>' + (NM[c.est] || '') + (c.min ? ' · ' + c.min + ' min' : '') + '</small></button>'; }).join('');
    return '<section class="vt-nave"><div class="vt-arco" style="--arte:url(\'' + d.img + '\')" role="img" aria-label="' + u.h(d.alt || d.titulo) + '"></div>'
      + '<div class="vt-tx"><p class="vt-kick">' + u.h(d.chips.join(' · ')) + '</p><h1>' + u.h(d.titulo) + '</h1><span class="vt-fio" aria-hidden="true"></span>' + (d.banda ? '<p class="vt-banda">' + d.banda + '</p>' : '')
      + '<p class="vt-sub">' + d.sub + '</p><button type="button" class="vt-ir" data-a="ir" data-n="' + d.ir + '">' + u.h(d.botao) + '</button></div></section>'
      + '<p class="vt-t">The windows of tonight</p><div class="vt-fila">' + j + '</div>' + d.faixa;
  } };

/* BUSINESS · WORKSPACE (ref. Dribbble "User Details" workspace panel): o escritório + as cenas como tarefas de hoje. */
WL_PELES.workspace = { linhas: ['BUSINESS', 'WOLF BUSINESS', 'WOLF HIRED'], nome: 'Workspace',
  fontes: 'family=Red+Hat+Display:wght@700;800;900',
  tokens: '--pl-tit:"Red Hat Display","Urbanist",sans-serif;--pl-tit-esp:-.03em;--pl-escuro:9,13,15;--pl-vidro:rgba(22,26,29,.72);--pl-borda:rgba(255,255,255,.09);--pl-raio:20px;--pl-raio-p:7px;--pl-sobre-ac:#1c1405',
  css: 'body .wx2-capa{display:grid;grid-template-columns:minmax(0,1fr) 400px;gap:18px;align-items:stretch}'
    + 'body .wx2-hero{position:relative;min-height:clamp(380px,62vh,640px);border-radius:28px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;padding:clamp(22px,3vw,40px);background:linear-gradient(90deg,rgba(9,13,15,.9) 0%,rgba(9,13,15,.5) 45%,rgba(9,13,15,.1) 75%),linear-gradient(0deg,rgba(9,13,15,.8),transparent 40%),var(--arte) center/cover;border:1px solid rgba(255,255,255,.09);box-shadow:0 40px 90px rgba(0,0,0,.55)}'
    + 'body .wx2-chips{display:flex;flex-wrap:wrap;gap:8px}body .wx2-chips span{padding:6px 12px;border-radius:9px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);font:700 13px var(--ui);color:#fff}body .wx2-chips span:first-child{background:var(--ac);border-color:var(--ac);color:var(--pl-sobre-ac)}'
    + 'body .wx2-tx{max-width:600px;display:grid;gap:14px}body .wx2-tx h1{margin:0;font:800 clamp(48px,5.4vw,100px)/.92 var(--pl-tit);letter-spacing:-.045em;color:#fff;text-wrap:balance}body .wx2-sub{margin:0;font:500 clamp(16px,1.15vw,19px)/1.55 var(--ui);color:#cfd9dc;max-width:46ch}'
    + 'body .wx2-ir{justify-self:start;min-height:54px;padding:0 26px;border-radius:14px;border:0;background:var(--ac);color:var(--pl-sobre-ac);font:800 16px var(--ui)}'
    + 'body .wx2-painel{display:flex;flex-direction:column;gap:8px;padding:18px;border-radius:28px;background:rgba(22,26,29,.82);border:1px solid rgba(255,255,255,.09);box-shadow:0 40px 90px rgba(0,0,0,.55)}'
    + 'body .wx2-pt{margin:0 0 4px;display:flex;justify-content:space-between;align-items:baseline;font:800 16px var(--pl-tit);color:#fff}body .wx2-pt small{font:600 12px var(--ui);color:var(--t3)}'
    + 'body .wx2-tarefa{display:grid;grid-template-columns:22px 1fr auto;align-items:center;gap:12px;padding:11px 12px;border-radius:14px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.035);color:var(--t1);text-align:left}body .wx2-tarefa:hover{border-color:var(--ac)}body .wx2-check{width:20px;height:20px;border-radius:6px;border:1.5px solid rgba(255,255,255,.3)}body .wx2-tarefa b{display:block;font:700 14.5px var(--ui)}body .wx2-tarefa small{display:flex;gap:8px;font:600 12px var(--ui);color:var(--t3);margin-top:3px}'
    + 'body .wx2-tag{font-style:normal;padding:2px 8px;border-radius:6px;font:700 11px var(--ui)}body .wx2-tag.t-o{background:rgba(236,106,82,.18);color:#ffb3a3}body .wx2-tag.t-l{background:rgba(134,201,240,.16);color:#bfe3f7}body .wx2-tag.t-f{background:rgba(185,226,122,.16);color:#d9f2b1}body .wx2-tag.t-w{background:rgba(240,184,102,.18);color:#f7d9a8}'
    + '@media (max-width:1000px){body .wx2-capa{grid-template-columns:1fr}}',
  capa: function (d, u) {
    var NOME = { o: 'Talk', l: 'Listen', f: 'Grammar', w: 'Write' };
    var t = u.cenas().map(function (c) { return '<button type="button" class="wx2-tarefa" data-a="ir" data-n="' + c.i + '"><i class="wx2-check" aria-hidden="true"></i><span><b>' + u.h(c.t) + '</b><small><em class="wx2-tag t-' + c.est + '">' + (NOME[c.est] || '') + '</em>' + (c.extra ? 'extra' : c.min + ' min') + '</small></span><span aria-hidden="true" style="color:var(--t3)">›</span></button>'; }).join('');
    return '<div class="wx2-capa"><section class="wx2-hero" style="--arte:url(\'' + d.img + '\')"><div class="wx2-chips">' + d.chips.map(function (c) { return '<span>' + u.h(c) + '</span>'; }).join('') + '</div>'
      + '<div class="wx2-tx"><h1>' + u.h(d.titulo) + '</h1><p class="wx2-sub">' + d.sub + '</p><button type="button" class="wx2-ir" data-a="ir" data-n="' + d.ir + '">' + u.h(d.botao) + '</button></div></section>'
      + '<aside class="wx2-painel"><p class="wx2-pt">Today’s tasks<small>about ' + u.totalMin() + ' min</small></p>' + t + '</aside></div>' + d.faixa;
  } };

/* aplica já: o motor pinta no DOMContentLoaded, depois deste arquivo */
window.__wlAplicaPele && window.__wlAplicaPele();
