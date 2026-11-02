/* ============================================================
   KIT LIVE CLASS · O LORE (O MUNDO ANTES DO TRAILER)      09/10/2026
   Pedido do Carlos, depois de dar a Zeffo Vault: "ao invés das perguntas
   pré-trailer, a gente pode misturar com o lore… ambientar o aluno nesse
   mundo" — e vale para toda a WOLFSTATION e a WOLFLIX.
   Uma cena { k: 'lore' } no L da aula: um mapa com cinco paradas. Cada
   parada abre uma página da história (foto, data, texto curto no nível
   da aula) e UMA pergunta da vida do aluno, com frases de apoio e uma
   resposta-exemplo. É o desenho da Frieren e da Zeffo, agora no kit.
   Os dados vêm de window.WL_LORE (lore-dados.js da aula):
     { mapa: 'mapa', alt: 'A dark map…', rotulo: 'BD-1’S STAR MAP',
       fim: 'Now you know the galaxy. Now the trailer.', anda: 'Fly to the next stop',
       paradas: [ { k: 'BRACCA', nome: 'Bracca', dur: 'FIVE YEARS LATER', x: 36, y: 30,
                    img: 'sucata', h: '…', t: '…', q: '…', st: ['…','…'], ex: '…' }, … ] }
   Estado em S.__ll; toques "wll-…" (nenhuma aula usa esses nomes). O
   aluno não toca no mapa sozinho: o fio repete o toque do professor.
   ============================================================ */
(function () {
  var D = window.WL_LORE;
  if (!D || typeof R === 'undefined') return;
  /* 09/10 · chassi antigo (Stressed Out, Talking, Hail Mary): sem o registro TOQUES do motor novo.
     Aqui a peça tem o seu, com um ouvinte de clique próprio que repinta (o do chassi ignora 'wll-…'). */
  var T = (typeof TOQUES !== 'undefined') ? TOQUES : null;
  if (!T) {
    T = {};
    document.addEventListener('click', function (ev) {
      var b = ev.target.closest && ev.target.closest('[data-a^="wll-"]'); if (!b) return;
      var f = T[b.getAttribute('data-a')]; if (!f) return;
      if (f(b, +b.getAttribute('data-n')) !== false && typeof pinta === 'function') pinta();
    });
  }
  /* o follow do chassi antigo não aceita o 6º argumento (o "Show answer"): vai logo depois */
  function siga(rot, q, st, chave, extra) { return follow.length >= 6 ? follow(rot, q, st, [], chave, extra) : follow(rot, q, st, [], chave) + (extra || ''); }
  /* as perguntas de antes do vídeo saem do lore: D.antes substitui o ANTES da aula (no lugar, a mesma lista) */
  if (D.antes && typeof ANTES !== 'undefined' && ANTES.splice) { ANTES.splice(0, ANTES.length); D.antes.forEach(function (x) { ANTES.push(x); }); }
  function st() { if (!S.__ll) S.__ll = { n: 0, aberta: -1 }; return S.__ll; }
  function nomeDe(p) { return p.nome || (p.k.charAt(0) + p.k.slice(1).toLowerCase()); }

  R.lore = function (c) {
    var m = st(), n = m.n, P = D.paradas;
    var pontos = P.map(function (p) { return p.x + ',' + p.y; }).join(' ');
    var feitos = P.slice(0, Math.max(1, Math.min(n + 1, P.length))).map(function (p) { return p.x + ',' + p.y; }).join(' ');
    var pinos = P.map(function (p, i) {
      var cls = i < n ? ' feito' : i === n ? ' vez' : '';
      return '<button type="button" class="wll-pino' + cls + (p.x > 72 ? ' esq' : '') + (m.aberta === i ? ' aberto' : '') + '" style="left:' + p.x + '%;top:' + p.y + '%" data-a="wll-par" data-n="' + i + '"' + (i > n ? ' disabled' : '') + '><i>' + (i + 1) + '</i><span>' + nomeDe(p) + (i <= n ? '<em>' + p.dur + '</em>' : '') + '</span></button>';
    }).join('');
    var mapa = '<div class="wll-mapa vd"><img src="' + img(D.mapa || 'mapa') + '" alt="' + (D.alt || 'A dark map of this world') + '"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline class="wll-rota" points="' + pontos + '"/><polyline class="wll-rota feita" points="' + feitos + '"/></svg>' + pinos + '</div>';
    var lado;
    if (m.aberta < 0) {
      var acabou = n >= P.length;
      lado = '<div class="wll-pag vd vazia"><small>' + (D.rotulo || 'THE MAP') + '</small><h3>' + (acabou ? (D.fimTit || 'The whole story, stop by stop.') : 'Tap stop ' + (n + 1) + ' on the map.') + '</h3><p>' + (acabou ? (D.fim || 'Now you know this world. Now the trailer.') : 'Every stop opens one page of the story.') + '</p></div>';
    } else {
      var p = P[m.aberta];
      var anda = m.aberta === n && n < P.length ? '<button type="button" class="btn wll-anda" data-a="wll-segue">' + (n === P.length - 1 ? 'Close the map' : (D.anda || 'Go to the next stop')) + '</button>' : '';
      lado = '<div class="wll-pag vd"><div class="wll-foto" style="background-image:url(' + img(p.img) + ')"><span class="wll-dur">' + p.dur + '</span>' + anda + '</div><small>STOP ' + (m.aberta + 1) + ' · ' + p.k + '</small><h3>' + p.h + '</h3><p>' + p.t + '</p></div>'
        + siga('YOUR TURN', p.q, p.st || [], 'wll' + m.aberta, p.ex ? mostra('wll' + m.aberta, p.ex, 1) : '');
    }
    return cab(c) + '<div class="wll-mesa">' + mapa + '<div class="wll-lado">' + lado + '</div></div>';
  };
  T['wll-par'] = function (b, n) { if (n <= st().n) st().aberta = n; };
  T['wll-segue'] = function () { var m = st(); m.n++; m.aberta = -1; };

  var css = document.createElement('style');
  css.textContent = ''
    + '.wll-mesa{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:22px;align-items:center}'
    + '.wll-mapa{position:relative;aspect-ratio:16/10;border-radius:26px;overflow:hidden;padding:0;box-shadow:0 30px 70px rgba(0,0,0,.55),inset 0 0 0 1px var(--fio2)}'
    + '.wll-mapa img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.85) saturate(.95)}'
    + '.wll-mapa svg{position:absolute;inset:0;width:100%;height:100%}'
    + '.wll-rota{fill:none;stroke:rgba(255,255,255,.32);stroke-width:2.5px;stroke-dasharray:6 6;vector-effect:non-scaling-stroke}'
    + '.wll-rota.feita{stroke:var(--ac,var(--am,#f0b866));stroke-dasharray:none;filter:drop-shadow(0 0 4px var(--ac,var(--am,#f0b866)))}'
    + '.wll-pino{position:absolute;transform:translate(-50%,-50%);display:flex;align-items:center;gap:8px;padding:0;border:0;background:none;text-align:left;cursor:pointer}'
    + '.wll-pino i{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:50%;font:800 15px var(--disp);font-style:normal;background:rgba(var(--noite-rgb,8,8,12),.8);border:2px solid var(--fio2);color:var(--t3)}'
    + '.wll-pino span{display:grid;padding:4px 10px;border-radius:10px;background:rgba(var(--noite-rgb,8,8,12),.78);font:700 13px var(--ui);color:var(--t2);white-space:nowrap}'
    + '.wll-pino span em{font:800 10.5px var(--ui);font-style:normal;letter-spacing:.14em;color:var(--bt,var(--ac2,var(--ac,var(--am,#f0b866))))}'
    + '.wll-pino.vez i{background:var(--ac,var(--am,#f0b866));border-color:var(--ac,var(--am,#f0b866));color:var(--noite);box-shadow:0 0 0 8px color-mix(in srgb,var(--ac,var(--am,#f0b866)) 22%,transparent);animation:wll-pulsa 1.8s infinite}'
    + '.wll-pino.feito i{background:var(--bt,var(--ac2,var(--ac,var(--am,#f0b866))));border-color:var(--bt,var(--ac2,var(--ac,var(--am,#f0b866))));color:var(--noite)}'
    + '.wll-pino.aberto span{background:var(--ac,var(--am,#f0b866));color:var(--noite)}.wll-pino.aberto span em{color:var(--noite)}'
    + '.wll-pino[disabled]{cursor:default;opacity:.55}'
    + '@keyframes wll-pulsa{50%{box-shadow:0 0 0 14px color-mix(in srgb,var(--ac,var(--am,#f0b866)) 5%,transparent)}}'
    + '.wll-lado{display:grid;gap:14px}'
    + '.wll-pag{padding:18px 20px 20px;border-radius:var(--r2);display:grid;gap:8px}'
    + '.wll-pag small{font:800 11.5px var(--ui);letter-spacing:.14em;color:var(--ac,var(--am,#f0b866))}'
    + '.wll-pag h3{margin:0;font:800 clamp(22px,1.8vw,32px)/1.15 var(--disp);letter-spacing:-.01em;text-wrap:balance}'
    + '.wll-pag p{margin:0;color:var(--t2);font-size:clamp(16px,1.1vw,18.5px);line-height:1.55}'
    + '.wll-pag.vazia{min-height:200px;align-content:center}'
    + '.wll-foto{position:relative;height:clamp(120px,19vh,190px);margin:-6px -8px 6px;border-radius:14px;background:center/cover no-repeat;box-shadow:inset 0 -60px 50px -20px rgba(var(--noite-rgb,8,8,12),.85)}'
    + '.wll-dur{position:absolute;left:12px;bottom:12px;padding:5px 12px;border-radius:999px;background:rgba(var(--noite-rgb,8,8,12),.8);border:1px solid var(--fio2);font:800 12px var(--ui);letter-spacing:.14em;color:var(--bt,var(--ac2,var(--ac,var(--am,#f0b866))))}'
    + '.wll-foto .wll-anda{position:absolute;right:10px;bottom:10px;min-height:40px;background:var(--ac,var(--am,#f0b866));border-color:var(--ac,var(--am,#f0b866));color:var(--noite);font-size:14px}'
    + '.wll-lado .follow{width:100%;padding:18px 20px 16px}'
    + '.wll-pino.esq{flex-direction:row-reverse;text-align:right}'
    + '@media (max-height:940px) and (min-width:1101px){.wll-foto{height:86px}.wll-pag{gap:4px;padding:14px 18px 16px}.wll-pag h3{font-size:clamp(20px,1.5vw,26px)}.wll-pag p{font-size:clamp(15px,1vw,17px);line-height:1.45}.wll-lado{gap:10px}.wll-lado .follow{padding:12px 18px}.wll-lado .follow .q{font-size:clamp(18px,1.45vw,24px);line-height:1.2}.wll-mapa{aspect-ratio:16/11;max-height:calc(100vh - 330px)}.wll-lado .follow{display:grid;grid-template-columns:1fr auto;column-gap:12px;align-items:end}.wll-lado .follow>small,.wll-lado .follow .q{grid-column:1/-1}.wll-lado .follow .diz h5{display:none}.wll-lado .follow .resp-btn{margin:0}.wll-lado .follow .resposta{grid-column:1/-1}}'
    + '@media (max-width:1100px){.wll-mesa{grid-template-columns:1fr}}'
    + '@media (max-width:620px){.wll-pino span{display:none}.wll-pino i{width:32px;height:32px}}';
  document.head.appendChild(css);
})();
