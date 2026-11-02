/* ============================================================
   KIT LIVE CLASS · A CAPA                              08/10/2026
   Catálogo de variedade (08/10, aprovado): as 393 capas tinham o mesmo
   desenho (texto à esquerda, foto à direita). Esta peça lê o que a capa
   da aula já tem (kick, título, banda, sub, botão, faixa Live, imagem e
   as cenas do roteiro L) e redesenha no estilo da linha:
     poster (C1) · start (C2) · vinil (C3) · vitral (C4)
     jornal (C5) · convite (C6) · mapa (C7) · arquivo (C8)
   Cada linha tem a sua lista; a capa da aula sai do rodízio pelo título
   (igual nos dois lados da sala). <script src="capa.js" data-capa="vinil">
   força um estilo. Liga-se ao motor por window.WL_PECAS. As cenas viram
   botões data-a="ir" (o motor já sabe ir para elas, e o fio repete).
   Fotofobia: nada de campo claro grande (o jornal e o convite são escuros).
   ============================================================ */
(function () {
  var eu = document.currentScript, pedido = eu && eu.getAttribute('data-capa');
  var POR_LINHA = { 'WOLFLIX': ['poster', 'arquivo', 'mapa'], 'WOLFSTATION': ['start', 'mapa', 'arquivo'], 'WOLFFY': ['vinil', 'poster', 'vinil'],
    'WOLFAITH': ['vitral', 'mapa', 'vitral'], 'MAIN SERIES': ['jornal', 'mapa', 'poster'], 'BUSINESS': ['convite', 'jornal', 'convite'] };
  function hash(s) { var x = 11; for (var i = 0; i < s.length; i++) x = (x * 37 + s.charCodeAt(i)) % 100019; return x; }
  function linha() { var b = document.querySelector('.marca b'); return b ? b.textContent.trim().toUpperCase() : ''; }
  var estilo = pedido || (function () { var l = POR_LINHA[linha()] || ['poster', 'mapa']; return l[hash(document.title) % l.length]; })();
  function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function limpaRot(r) { return String(r || '').replace(/^[IVXLC]+\s*·\s*/, ''); }

  function cenas() { var out = []; L.forEach(function (x, i) { if (i > 0 && x.rot) out.push({ i: i, t: limpaRot(x.rot), est: x.est }); }); return out; }
  function lista(cls, fmt) { return '<ol class="' + cls + '">' + cenas().map(function (c, k) { return '<li><button type="button" data-a="ir" data-n="' + c.i + '">' + fmt(c, k) + '</button></li>'; }).join('') + '</ol>'; }

  var E = {};
  E.poster = function (d) {
    return '<div class="wlc wlc-poster"><div class="wlc-arte" style="background-image:url(\'' + d.img + '\')"></div><div class="wlc-p-tx">'
      + '<span class="wlc-apresenta">' + h(d.linha) + ' PRESENTS</span><h1>' + h(d.titulo) + '</h1>' + (d.banda ? '<p class="wlc-tag">' + d.banda + '</p>' : '')
      + '<p class="sub">' + d.sub + '</p>' + d.bt + '<p class="wlc-creditos">' + h(d.kick) + '</p>' + d.faixa + '</div></div>';
  };
  E.start = function (d) {
    return '<div class="wlc wlc-start"><div class="wlc-arte" style="background-image:url(\'' + d.img + '\')"></div><div class="wlc-s-tx">'
      + '<span class="wlc-apresenta">' + h(d.kick) + '</span><h1>' + h(d.titulo) + '</h1>' + (d.banda ? '<p class="wlc-tag">' + d.banda + '</p>' : '')
      + '<div class="wlc-press">' + d.bt + '</div>' + lista('wlc-menu', function (c) { return '<span>▸</span>' + h(c.t); })
      + '<p class="sub">' + d.sub + '</p>' + d.faixa + '</div></div>';
  };
  E.vinil = function (d) {
    return '<div class="wlc wlc-vinil"><div class="wlc-disco"><div class="wlc-sulcos"></div><div class="wlc-selo" style="background-image:url(\'' + d.img + '\')"></div></div><div class="wlc-v-tx">'
      + '<span class="kick">' + h(d.kick) + '</span><h1>' + h(d.titulo) + '</h1>' + (d.banda ? '<p class="wlc-tag">' + d.banda + '</p>' : '')
      + '<p class="wlc-lado">SIDE A</p>' + lista('wlc-faixas', function (c, k) { return '<b>' + (k + 1) + '</b>' + h(c.t); })
      + '<p class="sub">' + d.sub + '</p>' + d.bt + d.faixa + '</div></div>';
  };
  E.vitral = function (d) {
    return '<div class="wlc wlc-vitral"><div class="wlc-arco"><div class="wlc-arco-img" style="background-image:url(\'' + d.img + '\')"></div><i class="wlc-chumbo"></i></div><div class="wlc-vt-tx">'
      + '<span class="kick">' + h(d.kick) + '</span><h1>' + h(d.titulo) + '</h1>' + (d.banda ? '<p class="wlc-tag">' + d.banda + '</p>' : '')
      + '<p class="sub">' + d.sub + '</p>' + d.bt + d.faixa + '</div></div>';
  };
  E.jornal = function (d) {
    var hoje = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    return '<div class="wlc wlc-jornal"><div class="wlc-cabeca"><span>' + h(d.linha) + ' · NIGHT EDITION</span><b>The Wolf Times</b><span>' + hoje + '</span></div>'
      + '<div class="wlc-j-grade"><div><span class="kick">' + h(d.kick) + '</span><h1>' + h(d.titulo) + '</h1><p class="sub">' + d.sub + '</p>' + d.bt + d.faixa + '</div>'
      + '<figure><div class="wlc-foto" style="background-image:url(\'' + d.img + '\')"></div>' + (d.banda ? '<figcaption>' + d.banda + '</figcaption>' : '') + '</figure>'
      + '<aside><b>INSIDE TONIGHT</b>' + lista('wlc-secoes', function (c, k) { return '<i>p. ' + (k + 2) + '</i>' + h(c.t); }) + '</aside></div></div>';
  };
  E.convite = function (d) {
    return '<div class="wlc wlc-convite"><div class="wlc-cv-cartao"><div class="wlc-cv-topo"><span class="wlc-cv-dia"><b>' + new Date().getDate() + '</b>' + new Date().toLocaleDateString('en-US', { month: 'short' }) + '</span>'
      + '<div><span class="kick">MEETING INVITE · ' + h(d.kick) + '</span><h1>' + h(d.titulo) + '</h1>' + (d.banda ? '<p class="wlc-tag">' + d.banda + '</p>' : '') + '</div></div>'
      + '<p class="sub">' + d.sub + '</p><p class="wlc-pauta-t">AGENDA</p>' + lista('wlc-pauta', function (c, k) { return '<span class="wlc-cx"></span><i>' + (k + 1) + '</i>' + h(c.t); })
      + '<div class="wlc-cv-pe">' + d.bt + '<span class="wlc-cv-quem">Accepted: you and your teacher</span></div>' + d.faixa + '</div>'
      + '<div class="wlc-cv-foto" style="background-image:url(\'' + d.img + '\')"></div></div>';
  };
  E.mapa = function (d) {
    var cs = cenas(), n = cs.length, pts = cs.map(function (c, k) { var x = 52 + 40 * (k / Math.max(1, n - 1)); var y = 20 + 58 * (k / Math.max(1, n - 1)) + 6 * Math.sin(k * 1.9); return [x, y]; });
    var cam = pts.map(function (p, k) { return (k ? 'L' : 'M') + p[0] + ' ' + p[1]; }).join(' ');
    return '<div class="wlc wlc-mapa"><div class="wlc-arte" style="background-image:url(\'' + d.img + '\')"></div>'
      + '<svg class="wlc-trilha" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="' + cam + '"/></svg>'
      + cs.map(function (c, k) { return '<button type="button" class="wlc-parada' + (k % 2 ? ' cima' : '') + '" style="left:' + pts[k][0] + '%;top:' + pts[k][1] + '%" data-a="ir" data-n="' + c.i + '"><i>' + (k + 1) + '</i><span>' + h(c.t) + '</span></button>'; }).join('')
      + '<div class="wlc-m-tx"><span class="kick">' + h(d.kick) + '</span><h1>' + h(d.titulo) + '</h1>' + (d.banda ? '<p class="wlc-tag">' + d.banda + '</p>' : '') + '<p class="sub">' + d.sub + '</p>' + d.bt + d.faixa + '</div></div>';
  };
  E.arquivo = function (d) {
    return '<div class="wlc wlc-arquivo"><div class="wlc-pasta"><span class="wlc-carimbo">CONFIDENTIAL</span><p class="wlc-ficha">CASE FILE · ' + h(d.kick) + '</p>'
      + '<div class="wlc-a-grade"><div class="wlc-clip" style="background-image:url(\'' + d.img + '\')"></div><div><p class="wlc-rot">SUBJECT</p><h1>' + h(d.titulo) + '</h1>' + (d.banda ? '<p class="wlc-tag">' + d.banda + '</p>' : '')
      + '<p class="wlc-rot">THE CASE</p><p class="sub">' + d.sub + '</p>' + d.bt + d.faixa + '</div></div></div></div>';
  };

  function pinta(palco, c) {
    if (!c || c.k !== 'capa') return;
    var cap = palco.querySelector('.cena .capa'); if (!cap || cap.getAttribute('data-wlc')) return;
    var q = function (s) { return cap.querySelector(s); };
    var fig = q('figure img') || q('.capa-r img');
    var d = { kick: (q('.kick') || {}).textContent || '', titulo: (q('h1') || {}).textContent || '', banda: q('.banda') ? q('.banda').innerHTML : '',
      sub: q('.sub') ? q('.sub').innerHTML : '', bt: q('[data-a="ir"]') ? q('[data-a="ir"]').outerHTML : '', faixa: q('.faixa') ? q('.faixa').outerHTML : '',
      img: fig ? fig.getAttribute('src') : (typeof img === 'function' ? img(L[0].img) : ''), linha: linha() || 'WOLF LABS' };
    var f = E[estilo] || E.poster;
    var novo = document.createElement('div'); novo.innerHTML = f(d);
    var el = novo.firstElementChild; el.classList.add('capa'); el.setAttribute('data-wlc', estilo);
    if (d.titulo.length > 22) el.classList.add('wlc-longo'); if (d.titulo.length > 36) el.classList.add('wlc-muito');
    cap.parentNode.replaceChild(el, cap);
  }
  (window.WL_PECAS = window.WL_PECAS || []).push(pinta);
  window.WolfCapa = { estilo: estilo };

  var css = document.createElement('style');
  css.textContent = ''
    + '.wlc.capa{display:block;position:relative;width:min(1500px,100%);margin:0 auto;grid-template-columns:none;gap:0}'
    + '.wlc-poster.capa,.wlc-start.capa{display:grid;grid-template-columns:1fr}.wlc-vinil.capa,.wlc-vitral.capa,.wlc-convite.capa{display:grid}'
    + '.wlc h1{margin:6px 0;color:var(--t1)}.wlc .sub{color:var(--t2);font:400 clamp(16px,1.15vw,20px)/1.55 var(--ui);max-width:36em}.wlc-tag{margin:0 0 12px;color:var(--ac);font:600 clamp(16px,1.2vw,20px) var(--ui)}'
    + '.wlc .faixa{margin-top:18px}.wlc button[data-a="ir"]{cursor:pointer}'
    + '.wlc-arte{position:absolute;inset:0;border-radius:28px;background:center/cover no-repeat;overflow:hidden}'
    /* C1 poster */
    + '.wlc-poster{min-height:calc(100vh - 220px);border-radius:28px;overflow:hidden;display:grid;align-items:end}'
    + '.wlc-poster .wlc-arte::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05) 25%,rgba(var(--noite-rgb),.94) 78%)}'
    + '.wlc-p-tx{position:relative;padding:40px 48px 36px;display:grid;justify-items:start;gap:6px}.wlc-apresenta{font:800 12px var(--ui);letter-spacing:.3em;color:var(--t3)}'
    + '.wlc-poster h1{font:400 clamp(60px,7.4vw,140px)/.9 var(--disp);text-transform:uppercase;letter-spacing:.01em}'
    + '.wlc-creditos{margin:10px 0 0;font:700 11px/1.6 var(--ui);letter-spacing:.24em;text-transform:uppercase;color:var(--t3);border-top:1px solid var(--fio2);padding-top:10px}'
    /* C2 start */
    + '.wlc-start{min-height:calc(100vh - 220px);border-radius:28px;overflow:hidden;display:grid;place-items:center;text-align:center}'
    + '.wlc-start .wlc-arte{filter:brightness(.45) saturate(1.1)}.wlc-s-tx{position:relative;display:grid;justify-items:center;gap:10px;padding:40px 24px}'
    + '.wlc-start h1{font:400 clamp(54px,6.6vw,124px)/.95 var(--disp);text-shadow:0 6px 30px rgba(0,0,0,.8)}'
    + '.wlc-press .btn{font:800 18px var(--ui);letter-spacing:.24em;text-transform:uppercase;animation:wlcPisca 1.6s infinite}'
    + '@keyframes wlcPisca{50%{opacity:.55}}@media (prefers-reduced-motion:reduce){.wlc-press .btn{animation:none}}'
    + '.wlc-menu{list-style:none;margin:6px auto;padding:0;display:flex;flex-wrap:wrap;justify-content:center;gap:2px 6px;max-width:860px}.wlc-menu button{border:0;background:none;color:var(--t2);font:700 15px var(--ui);letter-spacing:.06em;padding:4px 10px;border-radius:8px}'
    + '.wlc-menu button span{color:var(--ac);margin-right:8px;opacity:0}.wlc-menu button:hover{color:var(--t1);background:rgba(0,0,0,.35)}.wlc-menu button:hover span{opacity:1}'
    + '.wlc-start .sub{text-align:center;max-width:42em;color:var(--t2)}'
    /* C3 vinil */
    + '.wlc-vinil.capa{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:56px;align-items:center}'
    + '.wlc-disco{position:relative;aspect-ratio:1;width:min(520px,100%);justify-self:center;border-radius:50%;background:#0b0b0d;box-shadow:0 30px 70px rgba(0,0,0,.6),inset 0 0 0 2px rgba(255,255,255,.04);animation:wlcGira 9s linear infinite}'
    + '.wlc-sulcos{position:absolute;inset:4%;border-radius:50%;background:repeating-radial-gradient(circle,#101013 0 2px,#17171b 2px 4px)}'
    + '.wlc-selo{position:absolute;inset:32%;border-radius:50%;background:center/cover;box-shadow:0 0 0 6px color-mix(in srgb,var(--ac) 70%,#000)}'
    + '.wlc-selo::after{content:"";position:absolute;left:50%;top:50%;width:14px;height:14px;margin:-7px;border-radius:50%;background:#0b0b0d}'
    + '@keyframes wlcGira{to{transform:rotate(360deg)}}@media (prefers-reduced-motion:reduce){.wlc-disco{animation:none}}'
    + '.wlc-vinil h1{font:400 clamp(52px,5.4vw,100px)/.95 var(--disp)}.wlc-lado{margin:10px 0 4px;font:800 12px var(--ui);letter-spacing:.24em;color:var(--t3)}'
    + '.wlc-faixas{list-style:none;margin:0 0 16px;padding:0;display:grid;gap:2px;max-width:30em}.wlc-faixas button{display:flex;gap:14px;width:100%;text-align:left;border:0;border-bottom:1px solid var(--fio);background:none;padding:8px 2px;color:var(--t1);font:600 16px var(--ui)}'
    + '.wlc-faixas b{width:22px;color:var(--ac);font-variant-numeric:tabular-nums}.wlc-faixas button:hover{color:var(--ac)}'
    /* C4 vitral */
    + '.wlc-vitral.capa{grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:56px;align-items:center}'
    + '.wlc-arco{position:relative;justify-self:center;width:min(380px,100%);aspect-ratio:3/4.4;border-radius:50% 50% 10px 10px / 34% 34% 10px 10px;overflow:hidden;box-shadow:0 0 0 10px #15100c,0 0 0 12px color-mix(in srgb,var(--ac) 50%,#000),0 0 80px color-mix(in srgb,var(--ac) 35%,transparent)}'
    + '.wlc-arco-img{position:absolute;inset:0;background:center/cover;filter:saturate(1.35) contrast(1.05)}'
    + '.wlc-chumbo{position:absolute;inset:0;background:linear-gradient(90deg,transparent calc(50% - 2px),#120d09 calc(50% - 2px),#120d09 calc(50% + 2px),transparent calc(50% + 2px)),linear-gradient(0deg,transparent calc(38% - 2px),#120d09 calc(38% - 2px),#120d09 calc(38% + 2px),transparent calc(38% + 2px)),linear-gradient(0deg,transparent calc(72% - 2px),#120d09 calc(72% - 2px),#120d09 calc(72% + 2px),transparent calc(72% + 2px));mix-blend-mode:multiply}'
    + '.wlc-vitral h1{font:400 clamp(54px,5.6vw,104px)/.95 var(--disp)}'
    /* C5 jornal (escuro) */
    + '.wlc-jornal{border-radius:20px;background:color-mix(in srgb,var(--noite) 70%,#1a1916);border:1px solid var(--fio2);padding:20px 28px 28px;box-shadow:var(--sombra)}'
    + '.wlc-cabeca{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;border-bottom:3px double var(--fio2);padding-bottom:10px;margin-bottom:18px}'
    + '.wlc-cabeca span{font:700 11px var(--ui);letter-spacing:.18em;color:var(--t3)}.wlc-cabeca span:last-child{text-align:right}'
    + '.wlc-cabeca b{font:400 clamp(30px,3.2vw,52px)/1 var(--disp);color:var(--t1)}'
    + '.wlc-j-grade{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr) minmax(0,.55fr);gap:28px}'
    + '.wlc-jornal h1{font:400 clamp(40px,3.8vw,72px)/1 var(--disp)}.wlc-jornal figure{margin:0}.wlc-foto{aspect-ratio:4/3;border-radius:8px;background:center/cover;filter:grayscale(.35) contrast(1.05)}'
    + '.wlc-jornal figcaption{margin-top:6px;font:italic 500 13px var(--ui);color:var(--t3)}.wlc-jornal aside{border-left:1px solid var(--fio2);padding-left:18px}'
    + '.wlc-jornal aside>b{font:800 11px var(--ui);letter-spacing:.2em;color:var(--ac)}.wlc-secoes{list-style:none;margin:8px 0 0;padding:0;display:grid;gap:4px}'
    + '.wlc-secoes button{display:grid;width:100%;text-align:left;border:0;border-bottom:1px solid var(--fio);background:none;padding:7px 0;color:var(--t1);font:600 14.5px/1.3 var(--ui)}.wlc-secoes i{font-style:normal;font:700 11px var(--ui);color:var(--t3)}'
    /* C6 convite */
    + '.wlc-convite.capa{grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:32px;align-items:stretch}'
    + '.wlc-cv-cartao{border-radius:22px;background:var(--vidro2);border:1px solid var(--fio2);padding:26px 28px;box-shadow:var(--sombra)}'
    + '.wlc-cv-topo{display:flex;gap:18px;align-items:flex-start}.wlc-cv-dia{flex:none;width:74px;border-radius:14px;overflow:hidden;text-align:center;font:800 12px var(--ui);letter-spacing:.14em;color:var(--t2);background:var(--vidro);border:1px solid var(--fio2);text-transform:uppercase;padding-bottom:6px}'
    + '.wlc-cv-dia b{display:block;font:800 30px/1.4 var(--ui);color:var(--t1);background:color-mix(in srgb,var(--ac) 30%,transparent);margin-bottom:4px}'
    + '.wlc-convite h1{font:400 clamp(38px,3.6vw,68px)/1 var(--disp)}.wlc-pauta-t{margin:16px 0 4px;font:800 11px var(--ui);letter-spacing:.2em;color:var(--t3)}'
    + '.wlc-pauta{list-style:none;margin:0 0 18px;padding:0;display:grid;gap:2px}.wlc-pauta button{display:flex;align-items:center;gap:12px;width:100%;text-align:left;border:0;border-bottom:1px solid var(--fio);background:none;padding:8px 2px;color:var(--t1);font:600 15.5px var(--ui)}'
    + '.wlc-cx{width:16px;height:16px;border-radius:4px;border:2px solid var(--fio2)}.wlc-pauta i{font-style:normal;color:var(--t3);width:18px}.wlc-pauta button:hover .wlc-cx{border-color:var(--ac)}'
    + '.wlc-cv-pe{display:flex;align-items:center;gap:14px;flex-wrap:wrap}.wlc-cv-quem{font:600 13px var(--ui);color:var(--t3)}'
    + '.wlc-cv-foto{border-radius:22px;background:center/cover;min-height:320px;filter:brightness(.8)}'
    /* C7 mapa */
    + '.wlc-mapa{min-height:calc(100vh - 220px);border-radius:28px;overflow:hidden}'
    + '.wlc-mapa .wlc-arte{filter:brightness(.42) saturate(.9)}.wlc-trilha{position:absolute;inset:0;width:100%;height:100%}.wlc-trilha path{fill:none;stroke:var(--ac2,var(--ac));stroke-width:.5;stroke-dasharray:1.4 1.4;vector-effect:non-scaling-stroke;stroke-width:3}'
    + '.wlc-parada{position:absolute;transform:translate(-50%,-50%);display:grid;justify-items:center;gap:4px;border:0;background:none;color:var(--t1);font:700 13px var(--ui);max-width:140px}'
    + '.wlc-parada i{font-style:normal;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:var(--ac);color:#140d0a;font:900 15px var(--ui);box-shadow:0 0 0 5px rgba(0,0,0,.35)}.wlc-parada span{text-shadow:0 2px 8px #000;text-align:center}'
    + '.wlc-m-tx{position:relative;max-width:520px;padding:34px 40px;display:grid;justify-items:start;gap:4px}.wlc-mapa h1{font:400 clamp(50px,5vw,96px)/.95 var(--disp)}'
    /* C8 arquivo */
    + '.wlc-pasta{position:relative;border-radius:8px 22px 22px 22px;background:linear-gradient(160deg,#2a2419,#17140f);border:1px solid rgba(232,200,140,.25);padding:30px 34px;box-shadow:var(--sombra)}'
    + '.wlc-pasta::before{content:"";position:absolute;left:-1px;top:-26px;width:180px;height:28px;border-radius:10px 10px 0 0;background:#2a2419;border:1px solid rgba(232,200,140,.25);border-bottom:0}'
    + '.wlc-carimbo{position:absolute;right:30px;top:22px;font:900 22px var(--ui);letter-spacing:.14em;color:#d9534f;border:3px solid #d9534f;padding:4px 12px;border-radius:6px;transform:rotate(-8deg);opacity:.85}'
    + '.wlc-ficha{margin:0 0 18px;font:700 12px "Courier Prime",ui-monospace,monospace;letter-spacing:.12em;color:#c9b48a}'
    + '.wlc-a-grade{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:34px;align-items:start}'
    + '.wlc-clip{aspect-ratio:4/5;border-radius:4px;background:center/cover;border:10px solid #e8dcc0;box-shadow:0 14px 30px rgba(0,0,0,.5);transform:rotate(-2deg);filter:grayscale(.3)}'
    + '.wlc-rot{margin:10px 0 0;font:700 11px "Courier Prime",ui-monospace,monospace;letter-spacing:.2em;color:#c9b48a}.wlc-arquivo h1{font:400 clamp(44px,4.4vw,84px)/1 var(--disp)}'
    + '.wlc-poster,.wlc-start,.wlc-mapa{min-height:min(calc(100vh / var(--zv,1) - 230px),760px)!important}'
    + '.wlc-longo.wlc-poster h1,.wlc-longo.wlc-start h1,.wlc-longo.wlc-mapa h1,.wlc-longo.wlc-vinil h1,.wlc-longo.wlc-vitral h1{font-size:clamp(40px,3.6vw,70px)}'
    + '.wlc-muito h1{font-size:clamp(34px,3vw,56px)!important}'
    + '.wlc-parada{max-width:120px;font-size:12px}.wlc-parada.cima{flex-direction:column}.wlc-parada.cima span{order:-1}'
    + '.wlc-m-tx{max-width:46%}'
    + '@media (max-width:900px){.wlc-m-tx{max-width:none}.wlc-vinil.capa,.wlc-vitral.capa,.wlc-convite.capa,.wlc-a-grade,.wlc-j-grade{grid-template-columns:1fr;gap:22px}.wlc-trilha,.wlc-parada{display:none}.wlc-disco{width:min(300px,80vw)}.wlc-arco{width:min(260px,70vw)}'
    + '.wlc-p-tx,.wlc-m-tx{padding:24px 20px}.wlc-jornal{padding:16px}.wlc-cabeca{grid-template-columns:1fr}.wlc-cabeca span:last-child{text-align:left}.wlc-jornal aside{border-left:0;padding-left:0}'
    + '.wlc-parada span{display:none}.wlc-pasta{padding:24px 18px}.wlc-carimbo{font-size:15px;right:14px}.wlc-cv-foto{min-height:180px}}';
  document.head.appendChild(css);
})();
