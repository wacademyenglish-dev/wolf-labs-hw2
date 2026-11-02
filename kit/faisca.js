/* ============================================================
   KIT LIVE CLASS · A PERGUNTA-SURPRESA (FAÍSCA)          26/10/2026
   Pedido do Carlos: conversa "de praxe" em toda aula, inclusive com
   "um botão que faz surgir uma pergunta". Aprovado com a regra 3×3
   (Conversa de Praxe, 26/10) e um cuidado: "o A1, no começo, tem que
   ser bem leve".
   O professor aperta "Surprise question" em qualquer cena; a pergunta
   abre por cima da cena nos dois lados da sala: tempo para pensar,
   escolher uma opção, falar com as frases de apoio, Show answer, e o
   PUSH (só o professor vê). Fecha e a aula segue de onde estava.
   Os dados vêm de window.WL_FAISCA (faisca-dados.js da aula):
     { nivel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1',
       qs: [ { cena: 'video' (opcional: k da cena onde ela cai melhor),
               tipo: 'Would you rather' | 'And you?' | 'Opinion' | 'What if' …,
               q: '…', opc: ['…','…'], st: ['…','…'], ex: '…', push: '…' }, … ] }
   Escolha da pergunta SEM sorteio (os dois lados calculam igual): a
   primeira ainda não usada da cena atual; se não houver, a primeira
   ainda não usada da lista. A1: o professor responde primeiro (aviso
   só para ele), 30 s em vez de 20, botões maiores.
   O botão fica DENTRO do palco (o fio da sala não repete toques do
   cabeçalho e do rodapé) e é .so-prof: o aluno não o vê, mas recebe o
   toque. Estado em S.__fx; toques "fx-…" (nenhuma aula usa esses nomes).
   ============================================================ */
(function () {
  var D = window.WL_FAISCA;
  if (!D || !D.qs || !D.qs.length || typeof S === 'undefined') return;
  var A1 = /^A1/i.test(D.nivel || '');
  var PENSA = A1 ? 30 : 20;

  var T = (typeof TOQUES !== 'undefined') ? TOQUES : null;
  if (!T) {   /* chassi antigo: registro próprio, como no lore.js */
    T = {};
    document.addEventListener('click', function (ev) {
      var b = ev.target.closest && ev.target.closest('[data-a^="fx-"]'); if (!b) return;
      var f = T[b.getAttribute('data-a')]; if (!f) return;
      if (f(b, +b.getAttribute('data-n')) !== false && typeof pinta === 'function') pinta();
    });
  }
  function st() { if (!S.__fx) S.__fx = { ab: 0, i: -1, cena: -1, usou: {}, esc: {}, viu: {}, t0: 0 }; return S.__fx; }
  function e(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function kAtual() { try { return L[S.i].k; } catch (x) { return ''; } }
  function escolhe() {
    var m = st(), k = kAtual(), i;
    for (i = 0; i < D.qs.length; i++) if (!m.usou[i] && D.qs[i].cena === k) return i;
    for (i = 0; i < D.qs.length; i++) if (!m.usou[i]) return i;
    return (m.i + 1) % D.qs.length;   /* todas usadas: volta ao começo, em ordem */
  }
  function usadas() { var m = st(), n = 0; for (var k in m.usou) if (m.usou[k]) n++; return Math.min(n, D.qs.length); }

  T['fx-abre'] = function () { var m = st(), i = escolhe(); m.i = i; m.usou[i] = 1; m.ab = 1; m.cena = S.i; m.t0 = Date.now(); };
  T['fx-fecha'] = function () { st().ab = 0; };
  T['fx-esc'] = function (b, n) { st().esc[st().i] = n; };
  T['fx-ver'] = function () { st().viu[st().i] = 1; };

  var css = ''
    + '.fx-bt{position:fixed;z-index:30;right:max(14px,env(safe-area-inset-right,0px));bottom:calc(var(--fx-pe,78px) + env(safe-area-inset-bottom,0px));display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:999px;border:1px solid var(--ac,#b4a3ff);background:rgba(12,13,26,.94);color:var(--t1,#eee);font:700 14px var(--ui,system-ui);cursor:pointer;box-shadow:0 8px 28px rgba(0,0,0,.45)}'
    + '.fx-bt svg{width:16px;height:16px;color:var(--ac2,var(--ac,#b4a3ff))}'
    + '.fx-bt i{font:600 12px var(--ui,system-ui);font-style:normal;color:var(--t2,#bbb);border-left:1px solid var(--fio2,rgba(255,255,255,.2));padding-left:8px}'
    + '.fx-bt:hover{border-color:var(--ac2,#fff)}'
    + '.fx-bt:focus-visible{outline:2px solid var(--ac2,#fff);outline-offset:3px}'
    + '.fx-veu{position:fixed;inset:0;z-index:40;display:grid;place-items:center;padding:clamp(12px,3vw,40px);background:rgba(6,7,16,.8);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}'
    + '.fx-caixa{width:min(1280px,100%);max-height:100%;overflow:auto;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:clamp(16px,2.4vw,36px);padding:clamp(18px,2.4vw,36px);border-radius:22px;border:1px solid var(--fio2,rgba(255,255,255,.2));background-color:#0d0e1c;background-image:linear-gradient(160deg,rgba(255,255,255,.05),rgba(255,255,255,0) 55%);box-shadow:0 30px 80px rgba(0,0,0,.6);animation:fx-sobe .3s ease-out}'
    + '@keyframes fx-sobe{from{opacity:.3;transform:translateY(14px)}to{opacity:1;transform:none}}'
    + '.fx-esq,.fx-dir{display:grid;align-content:start;gap:14px;min-width:0}'
    + '.fx-tag{display:inline-flex;align-items:center;gap:8px;font:800 12px var(--ui,system-ui);letter-spacing:.14em;text-transform:uppercase;color:var(--ac2,var(--ac,#b4a3ff))}'
    + '.fx-tag svg{width:15px;height:15px}'
    + '.fx-q{margin:0;font:400 clamp(26px,2.5vw,46px)/1.12 var(--disp,Georgia,serif);color:var(--t1,#eee);text-wrap:balance}'
    + '.fx-opc{display:flex;flex-wrap:wrap;gap:10px}'
    + '.fx-opc button{min-height:48px;padding:10px 20px;border-radius:14px;border:1px solid var(--fio2,rgba(255,255,255,.2));background:rgba(255,255,255,.06);color:var(--t1,#eee);font:700 clamp(15px,1.15vw,19px) var(--ui,system-ui);cursor:pointer}'
    + '.fx-opc button.on{border-color:var(--ac,#b4a3ff);background:rgba(255,255,255,.11);box-shadow:inset 0 0 0 1px var(--ac,#b4a3ff)}'
    + '.fx-opc button:focus-visible{outline:2px solid var(--ac2,#fff);outline-offset:3px}'
    + '.fx-a1 .fx-opc button{min-height:64px;padding:14px 28px;font-size:clamp(18px,1.4vw,24px)}'
    + '.fx-pensa{display:flex;align-items:center;gap:14px;font:600 15px/1.35 var(--ui,system-ui);color:var(--t2,#bbb)}'
    + '@property --fx-p{syntax:"<percentage>";inherits:false;initial-value:0%}'
    + '.fx-anel{width:54px;height:54px;flex:none;border-radius:50%;background:conic-gradient(var(--ac,#b4a3ff) var(--fx-p),rgba(255,255,255,.1) 0);-webkit-mask:radial-gradient(circle,transparent 19px,#000 20px);mask:radial-gradient(circle,transparent 19px,#000 20px);animation:fx-gira linear forwards}'
    + '@keyframes fx-gira{from{--fx-p:0%}to{--fx-p:100%}}'
    + '@media (prefers-reduced-motion:reduce){.fx-caixa{animation:none}.fx-anel{animation:none;--fx-p:100%}}'
    + '.fx-prof{margin:0;font:600 14px/1.45 var(--ui,system-ui);color:var(--t2,#bbb);border:1px dashed var(--fio2,rgba(255,255,255,.2));border-radius:12px;padding:10px 12px}'
    + '.fx-push{display:grid;gap:4px;border:1px solid rgba(239,180,94,.45);background:rgba(239,180,94,.08);border-radius:14px;padding:12px 14px;font:500 15px/1.45 var(--ui,system-ui);color:var(--t1,#eee)}'
    + '.fx-push b{font:800 11px var(--ui,system-ui);letter-spacing:.12em;color:#efb45e}'
    + '.fx-pe{display:flex;flex-wrap:wrap;gap:10px;align-items:center}'
    + '.fx-veu .diz{margin:0}'
    + '@media (max-width:760px){.fx-caixa{grid-template-columns:1fr}.fx-bt b{display:none}.fx-bt{padding:12px}}'
    /* 31/10 · tela larga: o botão aparece no cabeçalho, ao lado do Guide (ver cola()) */
    + '.fx-topo .fx-bt{top:var(--fx-top);bottom:auto;right:var(--fx-dir);height:var(--fx-alt);padding:0 14px;box-sizing:border-box;box-shadow:none;background:rgba(12,13,26,.7)}'
    + '.fx-topo-c .fx-bt b{display:none}'
    + '.fx-topo-i .fx-bt i{display:none}'
    + '.fx-topo-i .fx-bt{width:var(--fx-alt);padding:0;justify-content:center}';
  try { var s = document.createElement('style'); s.id = 'wl-fx-css'; s.textContent = css; (document.head || document.documentElement).appendChild(s); } catch (x) { /* sem estilo, ainda funciona */ }

  var RAIO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>';

  function caixa() {
    var m = st(), q = D.qs[m.i], esc = m.esc[m.i], viu = m.viu[m.i];
    var passou = Math.min((Date.now() - (m.t0 || Date.now())) / 1000, PENSA);
    var ex = q.ex ? (viu ? '<div class="resposta"><b>EXAMPLE ANSWER</b><span>' + q.ex + '</span></div>' : '<div class="resp-btn"><button type="button" class="pilula" data-a="fx-ver">Show answer</button></div>') : '';
    return '<div class="fx-veu" role="dialog" aria-modal="true" aria-label="Surprise question"><div class="fx-caixa' + (A1 ? ' fx-a1' : '') + '">'
      + '<div class="fx-esq"><span class="fx-tag">' + RAIO + 'Surprise question' + (q.tipo ? ' · ' + e(q.tipo) : '') + '</span>'
      + '<p class="fx-q">' + q.q + '</p>'
      + (q.opc && q.opc.length ? '<div class="fx-opc" role="group" aria-label="Choose one">' + q.opc.map(function (o, i) { return '<button type="button" class="' + (esc === i ? 'on' : '') + '" data-a="fx-esc" data-n="' + i + '" aria-pressed="' + (esc === i) + '">' + o + '</button>'; }).join('') + '</div>' : '')
      + (q.st && q.st.length && typeof fala === 'function' ? fala('fx' + m.i, q.st) : '')
      + '</div>'
      + '<div class="fx-dir"><div class="fx-pensa"><span class="fx-anel" style="animation-duration:' + PENSA + 's;animation-delay:-' + passou.toFixed(1) + 's"></span><span>' + (A1 ? 'Take your time. Choose one. Then say it.' : 'Think first. Choose. Then say why.') + '</span></div>'
      + (A1 ? '<p class="fx-prof so-prof">A1: answer first yourself, as a model. Then ask: “And you?”</p>' : '')
      + ex
      + (q.push ? '<div class="fx-push so-prof"><b>PUSH · FOR THE TEACHER</b><span>' + q.push + '</span></div>' : '')
      + '<div class="fx-pe"><button type="button" class="btn cheio" data-a="fx-fecha">Back to the lesson</button></div>'
      + '</div></div></div>';
  }

  /* 31/10 · Tela larga (> 1100 px): o botão continua no DOM dentro do palco
     (o fio da sala precisa disso), mas APARECE no cabeçalho, à esquerda do
     Guide, para nunca cobrir a aula. Mede o espaço livre entre o Guide e o
     vizinho da esquerda (W·O·L·F ou título) e escolhe a maior forma que
     cabe: completo → raio + "0 of 3" → só o raio. Se nem o raio couber, se
     não houver Guide visível ou se a tela for estreita, fica onde sempre
     ficou (canto de baixo). O palco usa zoom na tela larga: divide pelo
     zoom efetivo do botão para o fixed cair no pixel certo. */
  var NIVEIS = [['fx-topo'], ['fx-topo', 'fx-topo-c'], ['fx-topo', 'fx-topo-c', 'fx-topo-i']];
  function cola(jaEsperou) {
    var d = document.documentElement, cl = d.classList;
    cl.remove('fx-topo', 'fx-topo-c', 'fx-topo-i');
    var b = document.querySelector('.fx-bt'), g = document.getElementById('bguia');
    if (!b || !g || d.clientWidth <= 1100) return;
    var h = g.closest('header'); if (!h) return;
    var r = g.getBoundingClientRect(); if (!r.width || !r.height) return;
    var z = b.currentCSSZoom || parseFloat(getComputedStyle(d).getPropertyValue('--zv')) || 1;
    var esq = h.getBoundingClientRect().left, filhos = h.children;
    for (var i = 0; i < filhos.length; i++) {
      if (filhos[i].contains(g)) continue;
      var q = filhos[i].getBoundingClientRect();
      if (q.width && q.right <= r.left + 1 && q.right > esq) esq = q.right;
    }
    var livre = r.left - 10 - (esq + 14);   /* 10 px até o Guide, 14 px de folga do vizinho */
    d.style.setProperty('--fx-top', (r.top / z) + 'px');
    d.style.setProperty('--fx-dir', ((d.clientWidth - r.left + 10) / z) + 'px');
    d.style.setProperty('--fx-alt', (r.height / z) + 'px');
    for (var n = 0; n < NIVEIS.length; n++) {
      cl.add.apply(cl, NIVEIS[n]);
      if (b.getBoundingClientRect().width <= livre) { confere(b, r, jaEsperou); return; }
      cl.remove('fx-topo', 'fx-topo-c', 'fx-topo-i');
    }
  }
  /* A cena entra com animação (transform): enquanto ela roda, o fixed fica
     preso à cena e o botão apareceria no meio da aula. Esconde até acabar
     e mede de novo. Sem animação, confere se caiu mesmo ao lado do Guide;
     se algum chassi prender o fixed de outro jeito, volta ao lugar antigo. */
  function confere(b, r, jaEsperou) {
    var an = [];
    for (var e = b.parentElement; e && e !== document.documentElement; e = e.parentElement) {
      if (!e.getAnimations) break;
      e.getAnimations().forEach(function (a) {
        try { var t = a.effect && a.effect.getComputedTiming(); if (a.playState === 'running' && t && isFinite(t.endTime)) an.push(a); } catch (x) {}
      });
    }
    if (an.length && !jaEsperou) {
      b.style.visibility = 'hidden';
      var feito = 0, segue = function () { if (feito) return; feito = 1; b.style.visibility = ''; cola(true); };
      Promise.all(an.map(function (a) { return a.finished.catch(function () {}); })).then(segue);
      setTimeout(segue, 1500);   /* rede de segurança: nunca deixa o botão sumido */
      return;
    }
    b.style.visibility = '';
    var q = b.getBoundingClientRect();
    if (Math.abs(q.top - r.top) > 4 || Math.abs(q.right - (r.left - 10)) > 4)
      document.documentElement.classList.remove('fx-topo', 'fx-topo-c', 'fx-topo-i');
  }
  var colaPedida = 0;
  function pedeCola() { if (colaPedida) return; colaPedida = 1; setTimeout(function () { colaPedida = 0; cola(); }, 30); }
  window.addEventListener('resize', pedeCola);
  document.addEventListener('fullscreenchange', pedeCola);
  document.addEventListener('click', function (ev) { if (ev.target.closest && ev.target.closest('#bzoom,#btela')) setTimeout(pedeCola, 60); });
  try { if (document.fonts && document.fonts.ready) document.fonts.ready.then(pedeCola); } catch (x) {}
  var olhando = null;
  function olhaCabecalho() {
    if (olhando || typeof ResizeObserver === 'undefined') return;
    var g = document.getElementById('bguia'), h = g && g.closest('header'); if (!h) return;
    olhando = new ResizeObserver(pedeCola); olhando.observe(h);
    for (var i = 0; i < h.children.length; i++) olhando.observe(h.children[i]);
  }

  (window.WL_PECAS = window.WL_PECAS || []).push(function (palco) {
    var m = st();
    if (m.ab && m.cena !== S.i) m.ab = 0;   /* trocou de cena: a pergunta fecha sozinha */
    var sec = palco.querySelector('section.cena') || palco;
    olhaCabecalho(); pedeCola();
    if (sec.querySelector('.fx-bt')) return;
    var pe = document.querySelector('footer.foot');
    if (pe) document.documentElement.style.setProperty('--fx-pe', (pe.offsetHeight + 14) + 'px');
    sec.insertAdjacentHTML('beforeend', '<button type="button" class="fx-bt so-prof" data-a="fx-abre" aria-label="Surprise question" title="Surprise question">' + RAIO + '<b>Surprise question</b><i>' + usadas() + ' of ' + D.qs.length + '</i></button>'
      + (m.ab && D.qs[m.i] ? caixa() : ''));
  });
})();
