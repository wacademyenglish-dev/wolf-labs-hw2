/* ============================================================
   kit/padrao.js · O PADRÃO NOVO DAS AULAS (E1–E5 + fast finishers)
   01/11/2026 · aprovado nos pilotos Enough (Main A1) e Brand New Day
   (WOLFLIX B1), em _plano-50/live-class/piloto-padrao-*.

   Igual para todas as aulas do motor Live Class (motor.js + pele.js).
   O que é de cada aula vem em window.WL_PADRAO, num <script
   data-wl="padrao-dados.js"> DENTRO do index.html (sem arquivo novo:
   o site das aulas está perto do limite de 20.000 arquivos).
   A cara continua a da aula: esta camada não troca fonte nem cor.

   E1 · a capa ganha a imagem da aula em tela cheia por trás (#filme);
        na WOLFLIX, dentro de uma sala de cinema com cortina.
   E2 · cortes: título e instrução curtos (WL_PADRAO.cortes[k].t / .p).
   E3 · passagem: View Transition curta; na WOLFLIX, corte com tarjas
        pretas e o nome do rolo. Aba escondida troca direto.
   E5 · "Preparar em 1 minuto" ao lado, muda com a cena; só o professor.
   FF · fast finishers no fim (WL_PADRAO.ff), marcados em tudo: selo,
        trilho, contador e o NEXT da última cena. Formatos: cartas,
        lados (escolher um lado: A1/A2), passos, cadeira.
   Fundos: a imagem de cada cena aparece (véu leve no lugar do de 93%).
   Instalado por kit/monta_padrao.py; conferido por kit/confere_padrao.mjs.
   ============================================================ */
(function () {
  var D = window.WL_PADRAO;
  if (!D || window.__wlPadrao) return;
  var raiz = document.documentElement, reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* 01/11/2026 · MODO EP: os motores de episódio (serie.js · The Challenge; radio.js · Better Speaking)
     guardam as cenas em EP.cenas, com titulo/tx no lugar de t/p, e só ouvem cliques com data-ac. Aqui
     eles ganham o mesmo vocabulário do motor Live Class (L, TOQUES, fala, follow, mostra, trilha), para o
     resto deste arquivo funcionar igual. Sem imagem por trás da capa (a capa deles já é a foto). */
  var EPM = typeof L === 'undefined' && window.EP && Array.isArray(EP.cenas);
  /* MODO DOM (01/11/2026): aula de motor único, com as cenas escritas no HTML (<section class="cena">,
     o array global `cenas` e vai(i)) — hoje só a Funny (Open Mic Night). As páginas do fim viram
     <section> novas no fim do array; o desenho delas é refeito a cada toque. */
  var DOMM = typeof L === 'undefined' && !EPM && Array.isArray(window.cenas) && window.cenas[0] && window.cenas[0].nodeType === 1;
  if (typeof L === 'undefined' && !EPM && !DOMM) return;
  if (!DOMM && typeof R === 'undefined') return;
  window.__wlPadrao = 1;
  var RR = DOMM ? {} : R;
  if (DOMM) {
    window.L = cenas.map(function (sec, i) { return { k: i ? 'c' + i : 'capa', pk: i ? 'c' + i : 'capa', est: sec.dataset.k || null, rot: sec.dataset.nome || '', t: '', el: sec }; });
    raiz.setAttribute('data-modo', 'ep');
    if (typeof window.cab !== 'function') window.cab = function (c) { return '<div class="pd-cab"><span class="rot">' + (c.rot || '') + '</span><h2 class="tt">' + (c.t || '') + '</h2>' + (c.p ? '<p class="tx">' + c.p + '</p>' : '') + '</div>'; };
    window.pinta = function () { var c = L[S.i]; if (c && c.ff && c.el && RR[c.k]) c.el.innerHTML = RR[c.k](c); };
  }
  if (EPM || DOMM) {
    if (EPM) {
      window.L = EP.cenas;
      raiz.setAttribute('data-modo', 'ep');
      /* nos episódios o k é o tipo da cena e se repete (duas 'cartas'): a chave dos dados é a posição */
      L.forEach(function (c, i) { c.pk = i ? 'c' + i : 'capa'; });
      L.forEach(function (c) { if (c.t == null) c.t = c.titulo; if (c.p == null) c.p = c.tx; });
    }
    var EPS = (S.pd = S.pd || { resp: {}, fala: {} });
    window.TOQUES = {};
    window.fala = function (chave, frases, palavras) {
      var on = EPS.fala[chave] || {};
      return '<div class="diz"><h5>SAY IT WITH</h5><div class="chips">' + (frases || []).map(function (f, i) { return '<button type="button" class="chip frase' + (on['f' + i] ? ' on' : '') + '" data-a="fala" data-c="' + chave + '" data-x="f' + i + '">' + f + '</button>'; }).join('') + '</div>'
        + (palavras && palavras.length ? '<h5>WORDS YOU CAN USE</h5><div class="chips">' + palavras.map(function (w) { return '<span class="chip palavra">' + w + '</span>'; }).join('') + '</div>' : '') + '</div>';
    };
    window.follow = function (rot, q, frases, palavras, chave) { return '<div class="follow"><small>' + rot + '</small><p class="q">' + q + '</p>' + fala(chave, frases, palavras) + '</div>'; };
    window.mostra = function (chave, texto, modelo) {
      if (EPS.resp[chave]) return '<div class="resposta"><b>' + (modelo ? 'EXAMPLE ANSWER' : 'ANSWER') + '</b><span>' + texto + '</span></div>';
      return '<div class="resp-btn"><button type="button" class="pilula" data-a="resp" data-c="' + chave + '">Show answer</button></div>';
    };
    window.trilha = function (lista, n) { return '<div class="tempos">' + lista.map(function (_, i) { return '<span class="' + (i === n ? 'on' : i < n ? 'foi' : '') + '">' + (i + 1) + '</span>'; }).join('') + '</div>'; };
    document.addEventListener('click', function (ev) {
      var b = ev.target.closest && ev.target.closest('#palco [data-a], .pd-ff [data-a]'); if (!b || b.disabled) return;
      var a = b.getAttribute('data-a'), ch = b.getAttribute('data-c');
      if (a === 'resp') EPS.resp[ch] = 1;
      else if (a === 'fala') { var x = b.getAttribute('data-x'); EPS.fala[ch] = EPS.fala[ch] || {}; EPS.fala[ch][x] = !EPS.fala[ch][x]; }
      else if (TOQUES[a]) TOQUES[a](b, +b.getAttribute('data-n'), b.getAttribute('data-v'), ch);
      else return;
      pinta();
    });
  }
  /* motor próprio mais antigo (ex.: Stressed Out) sem TOQUES nem trilha: o kit traz os dele e ouve os próprios toques */
  if (!EPM && !DOMM && typeof window.TOQUES === 'undefined') {
    window.TOQUES = {};
    document.addEventListener('click', function (ev) {
      var b = ev.target.closest && ev.target.closest('[data-a^="pd-"]'); if (!b || b.disabled) return;
      var f = TOQUES[b.getAttribute('data-a')]; if (!f) return;
      f(b, +b.getAttribute('data-n'), b.getAttribute('data-v'), b.getAttribute('data-c')); pinta();
    });
  }
  if (typeof window.trilha !== 'function') window.trilha = function (lista, n) { return '<div class="tempos">' + lista.map(function (_, i) { return '<span class="' + (i === n ? 'on' : i < n ? 'foi' : '') + '">' + (i + 1) + '</span>'; }).join('') + '</div>'; };
  var LIB = D.lib || 'main';
  raiz.setAttribute('data-lib', LIB);
  var FFN = D.ffNome || 'Fast finishers';

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  /* ---------- E2 e os fundos, aplicados ao roteiro que a aula já tem ---------- */
  L.forEach(function (c) {
    var k = (D.cortes || {})[c.pk || c.k]; if (k) { if (k.t) c.t = k.t; if (k.p) c.p = k.p; if (EPM) { c.titulo = c.t; c.tx = c.p; } }
    if (!EPM && (D.fundos || {})[c.k]) c.img = D.fundos[c.k];
  });

  /* ---------- FF · as páginas do fim ---------- */
  var NUCLEO = L.length - 1;
  var imgsDaAula = L.map(function (x) { return x.img; }).filter(function (x, i, a) { return x && a.indexOf(x) === i; });
  (D.ff || []).forEach(function (x, n) {
    var fundo = (D.fundos || {})[x.k] || x.img || imgsDaAula[(n + 1) % (imgsDaAula.length || 1)] || L[0].img;
    L.push({ k: x.k, est: x.est || 'o', min: x.min || 5, extra: 1, ff: 1, img: fundo, rot: 'FF' + (n + 1) + ' · ' + x.rot, t: x.t, p: x.p, titulo: x.t, tx: x.p, dados: x });
  });
  S.ff = S.ff || {};   /* (no modo EP o S também é o do motor de episódio: S.c guarda as cenas dele) */
  function est(k) { return S.ff[k] = S.ff[k] || { sel: -1, foi: {}, n: 0, lado: {} }; }
  var FORMATOS = {
    /* cartas de conversa: carta → pergunta → follow-up (o jeito do warm-up) */
    cartas: function (c) {
      var x = c.dados, e = est(c.k);
      var grade = '<div class="cartas pd-cartas' + (e.sel >= 0 ? ' mini' : '') + '">' + x.cartas.map(function (y, i) {
        return '<button type="button" class="carta' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feita' : '') + '" data-a="pd-carta" data-c="' + c.k + '" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + esc(y.k.charAt(0) + y.k.slice(1).toLowerCase()) + '</b></button>';
      }).join('') + '</div>';
      if (e.sel < 0) return cab(c) + grade;
      var y = x.cartas[e.sel], ch = c.k + e.sel;
      var corpo = '<div class="foco"><div class="pergunta vd' + (e.foi[e.sel] ? ' ja' : '') + '"><small>' + esc(y.k) + '</small><h2>' + y.q + '</h2></div>';
      if (e.foi[e.sel]) corpo += follow('FOLLOW-UP', y.fup, x.fupSt || ['Yes, …', 'No, …', 'I think …'], [], ch + 'f');
      else corpo += '<div class="pd-acoes">' + mostra(ch, y.ex, 1) + '<button type="button" class="btn so-prof" data-a="pd-foi" data-c="' + c.k + '">Answered · show the follow-up</button></div>' + fala(ch, y.st, x.palavras || []);
      return cab(c) + grade + corpo + '</div>';
    },
    /* escolher um lado (o debate leve do A1/A2): duas saídas + frase quase pronta; o professor fica com o outro lado */
    lados: function (c) {
      var x = c.dados, e = est(c.k), n = Math.min(e.n, x.rodadas.length - 1), y = x.rodadas[n], lado = e.lado[n];
      var corpo = trilha(x.rodadas, n) + '<div class="foco"><div class="pergunta vd"><small>ROUND ' + (n + 1) + ' OF ' + x.rodadas.length + '</small><h2>' + y.q + '</h2></div>'
        + '<div class="pd-lados">' + ['a', 'b'].map(function (k) {
          return '<button type="button" class="pd-lado' + (lado === k ? ' on' : lado ? ' outro' : '') + '" data-a="pd-lado" data-c="' + c.k + '" data-v="' + k + '"><small>' + (lado === k ? 'YOU' : lado ? 'YOUR TEACHER' : 'PICK') + '</small><b>' + y[k] + '</b></button>';
        }).join('') + '</div>';
      if (lado) corpo += fala(c.k + n, y['f' + lado] || [], x.palavras || [])
        + '<p class="so-prof pd-prof">Take the other side: “' + y[lado === 'a' ? 'b' : 'a'] + '.” Give one reason. Then ask: “Why?”</p>'
        + (n < x.rodadas.length - 1 ? '<div class="pd-acoes"><button type="button" class="btn" data-a="pd-prox" data-c="' + c.k + '">Next round</button></div>' : '<p class="aprova">' + esc(x.fim || 'Every round done. Nobody won, and everybody talked.') + '</p>');
      return cab(c) + corpo + '</div>';
    },
    /* passos: uma pergunta de cada vez, com frases prontas e um exemplo */
    passos: function (c) {
      var x = c.dados, e = est(c.k), n = Math.min(e.n, x.passos.length - 1), y = x.passos[n], ch = c.k + n;
      return cab(c) + trilha(x.passos, n) + '<div class="foco"><div class="pergunta vd"><small>STEP ' + (n + 1) + ' OF ' + x.passos.length + '</small><h2>' + y.q + '</h2></div>'
        + fala(ch, y.st || [], []) + '<div class="pd-acoes">' + mostra(ch, y.ex, 1) + '</div>'
        + (x.prof ? '<p class="so-prof pd-prof">' + x.prof + '</p>' : '')
        + (n < x.passos.length - 1 ? '<div class="pd-acoes"><button type="button" class="btn" data-a="pd-prox" data-c="' + c.k + '">Next step</button></div>' : '<p class="aprova">' + esc(x.fim || 'Done. Great work.') + '</p>') + '</div>';
    },
    /* cadeira quente: o professor pergunta (só ele vê a lista), o aluno responde no papel do personagem */
    cadeira: function (c) {
      var x = c.dados, e = est(c.k), n = e.n % x.perguntas.length;
      return cab(c) + '<div class="foco"><div class="pergunta vd"><small>THE HOT SEAT · QUESTION ' + (n + 1) + '</small><h2 class="dica-aluno">' + esc(x.aluno || 'Listen to your teacher’s question. Answer in character.') + '</h2>'
        + '<h2 class="so-prof">“' + x.perguntas[n] + '”</h2></div>'
        + fala(c.k + n, x.st || [], []) + '<div class="pd-acoes">' + mostra(c.k + n, x.ex, 1)
        + '<button type="button" class="btn so-prof" data-a="pd-prox" data-c="' + c.k + '">Next question</button></div></div>';
    }
  };
  (D.ff || []).forEach(function (x) { if (FORMATOS[x.formato]) RR[x.k] = function (c) { return FORMATOS[x.formato](c); }; });
  if (DOMM) {   /* as <section> das páginas do fim, depois da última cena */
    var ultima = cenas[cenas.length - 1], pts = document.getElementById('pts');
    L.forEach(function (c) {
      if (!c.ff) return;
      var sec = document.createElement('section');
      sec.className = 'cena pd-ff'; if (c.est) sec.dataset.k = c.est; sec.dataset.nome = c.rot;
      ultima.parentNode.insertBefore(sec, ultima.nextSibling); ultima = sec;
      cenas.push(sec); c.el = sec;
      if (pts) pts.insertAdjacentHTML('beforeend', '<i></i>');
    });
  }
  TOQUES['pd-carta'] = function (b, n, v, ch) { est(ch).sel = n; };
  TOQUES['pd-foi'] = function (b, n, v, ch) { var e = est(ch); e.foi[e.sel] = 1; };
  TOQUES['pd-prox'] = function (b, n, v, ch) { est(ch).n++; };
  TOQUES['pd-lado'] = function (b, n, v, ch) { var e = est(ch); var L2 = (L.filter(function (x) { return x.k === ch; })[0] || {}).dados; e.lado[Math.min(e.n, ((L2 || {}).rodadas || [1]).length - 1)] = v; };

  /* o selo do fast finisher em cima do título */
  var cabVelho = cab;
  cab = function (c) {
    var html = cabVelho(c);
    return c.ff ? '<p class="ff-selo"><b>' + esc(FFN) + '</b><span>' + (FFN === 'Fast finishers' ? 'Extra time? Keep going.' : 'Fast finishers · extra time? Keep going.') + '</span></p>' + html : html;
  };
  /* o programa da capa (peles com lista de cenas): os extras viram "Bonus" e o total não conta com eles */
  (window.WL_PECAS = window.WL_PECAS || []).push(function (palco, c) {
    if (c.k !== 'capa') return;
    var nff = (D.ff || []).length; if (!nff) return;
    var primeiro = true;
    [].forEach.call(palco.querySelectorAll('[data-a="ir"][data-n]'), function (r) {
      var i = +r.getAttribute('data-n'); if (!L[i] || !L[i].ff) return;
      r.classList.add('pd-ff-rolo');
      if (primeiro && r.parentNode && r.parentNode.children.length > 2) { r.insertAdjacentHTML('beforebegin', '<p class="pd-depois">' + esc(FFN) + ' · for fast finishers</p>'); primeiro = false; }
    });
    [].forEach.call(palco.querySelectorAll('.cn-ing em'), function (ing) { ing.innerHTML = ing.innerHTML.replace(/(\d+) reels/, function (m, a) { return (a - nff) + ' reels'; }); });
  });
  var pintaVelho = pinta;
  pinta = function () {
    pintaVelho();
    var ff = L[S.i].ff, nff = L.length - 1 - NUCLEO;
    [].forEach.call(document.querySelectorAll('#trilho i'), function (t, i) { if (L[i] && L[i].ff) t.classList.add('ff'); });
    var conta = document.getElementById('conta'); if (conta) conta.textContent = ff ? 'FF ' + (S.i - NUCLEO) + ' / ' + nff : S.i + ' / ' + NUCLEO;
    var prox = document.getElementById('prox'); if (prox) prox.textContent = S.i === NUCLEO && nff ? FFN.toUpperCase() : 'NEXT';
    raiz.classList.toggle('em-ff', !!ff);
    raiz.classList.toggle('na-capa', L[S.i].k === 'capa');
  };

  /* ---------- E1 · a imagem da aula por trás da capa ---------- */
  if (!EPM && typeof img === 'function') {
    var filme = document.createElement('div'); filme.id = 'filme'; filme.setAttribute('aria-hidden', 'true');
    if (LIB === 'wolflix') filme.innerHTML = '<i class="cortina e"></i><i class="cortina d"></i>';
    document.body.insertBefore(filme, document.body.firstChild);
    filme.style.backgroundImage = 'url(' + img(D.capaFundo || L[0].img || 'capa') + ')';
  }
  /* a passagem com a cara de cada linha (01/11/2026): WOLFLIX rolo de cinema · WOLFFY o disco ·
     WOLFSTATION a tela do console · WOLFAITH a luz âmbar. A Main não tem: só o deslize do E3. */
  var CORTES = {
    wolflix: { palavra: 'Reel', html: '<i class="tarja c"></i><i class="tarja b"><span></span></i>', ms: 900 },
    wolffy: { palavra: 'Track', html: '<div class="pd-disco"><i class="vinil"></i><span></span></div>', ms: 900 },
    wolfstation: { palavra: 'Stage', html: '<div class="pd-tela"><b></b><span></span><em>READY?</em></div>', ms: 800 },
    wolfaith: { palavra: 'Chapter', html: '<div class="pd-luz"><span></span></div>', ms: 1000 },
    business: { palavra: 'Item', html: '<div class="pd-pauta"><small>AGENDA</small><span></span></div>', ms: 800 },
    wolfroad: { palavra: 'Stop', html: '<div class="pd-bilhete"><small>NEXT STOP</small><span></span></div>', ms: 900 },
    wolfdev: { palavra: 'step', html: '<div class="pd-term"><span></span><i></i></div>', ms: 800 }
  };
  var CORTE = CORTES[LIB] || null, corte = null;
  if (CORTE && !(EPM || DOMM)) {
    corte = document.createElement('div'); corte.id = 'corte'; corte.className = 'pd-corte-' + LIB; corte.setAttribute('aria-hidden', 'true');
    corte.innerHTML = CORTE.html;
    document.body.appendChild(corte);
  }

  /* ---------- E3 · a passagem ---------- */
  var vaiVelho = window.vai;
  window.vai = function (n) {
    if (n < 0 || n >= L.length || n === S.i) return vaiVelho(n);
    var feito = false;
    var anda = function () { if (feito) return; feito = true; vaiVelho(n); if (DOMM) pinta(); notas(); };
    raiz.classList.toggle('volta', n < S.i);
    if (reduz || document.hidden || !document.startViewTransition) return anda();
    if (corte) {   /* o nome da cena aparece na passagem da linha, e a cena troca por baixo */
      var r = L[n].rot ? String(L[n].rot).replace(/^([IVXLC]+|FF\d)\s*·\s*/, '') : '';
      var num = ('0' + n).slice(-2);
      corte.querySelector('span').textContent = L[n].ff ? FFN + ' · ' + r : (n ? (LIB === 'wolfstation' ? r : LIB === 'wolfdev' ? '$ git checkout ' + CORTE.palavra + '-' + num + '  # ' + r : CORTE.palavra + ' ' + (LIB === 'wolfaith' ? n : num) + ' · ' + r) : '');
      var bb = corte.querySelector('b'); if (bb) bb.textContent = L[n].ff ? 'BONUS' : (n ? 'STAGE ' + num : 'TITLE');
      raiz.classList.remove('cortando'); void corte.offsetWidth; raiz.classList.add('cortando');
      setTimeout(function () { raiz.classList.remove('cortando'); }, CORTE.ms);
    }
    var vt = document.startViewTransition(anda);
    [vt.ready, vt.finished, vt.updateCallbackDone].forEach(function (p) { if (p && p.catch) p.catch(function () {}); });
    setTimeout(function () { if (!feito) { try { vt.skipTransition(); } catch (e) { /* segue */ } anda(); } }, 250);
  };
  vai = window.vai;

  /* ---------- E5 · Preparar em 1 minuto ---------- */
  var painel = null, NOTAS = D.notas || {}, PREP = D.prep || {};
  function minutos() {
    var t = 0, t2 = 0;
    L.forEach(function (x) { if (x.ff || !x.min) return; t2 += x.min; if (!x.extra) t += x.min; });
    return { t: t, t2: t2 };
  }
  function notas() {
    if (!painel) return;
    var c = L[S.i], n = NOTAS[c.pk || c.k] || {};
    painel.querySelector('.pn-cena').innerHTML =
      '<p class="pn-onde"><b>Esta cena</b><span>' + esc(c.rot || 'Capa') + (c.min ? ' · ' + c.min + ' min' : '') + '</span>' + (c.ff ? '<i>fast finisher</i>' : c.extra ? '<i>extra</i>' : '') + '</p>'
      + '<dl><dt>Objetivo</dt><dd>' + esc(n.obj) + '</dd>'
      + '<dt>A pergunta-chave</dt><dd lang="en" class="pn-perg">' + esc(n.perg) + '</dd>'
      + '<dt>Se faltar tempo</dt><dd>' + esc(n.pula) + '</dd></dl>';
    [].forEach.call(painel.querySelectorAll('.pn-rot li:not(.pn-ff-tit)'), function (li, i) { li.classList.toggle('on', i === S.i); li.classList.toggle('foi', i < S.i); });
  }
  function aberto() { return raiz.classList.contains('notas-on'); }
  function abre(on) {
    if (!painel) return;
    raiz.classList.toggle('notas-on', on);
    var b = document.getElementById('bguia'); if (b) b.setAttribute('aria-expanded', on);
    try { localStorage.setItem('wl-notas', on ? '1' : '0'); } catch (e) { /* segue */ }
  }
  function montaPainel() {
    if (typeof ALUNO !== 'undefined' && ALUNO) return;
    painel = document.createElement('aside');
    painel.className = 'notas so-prof'; painel.id = 'notas'; painel.lang = 'pt-BR';
    painel.setAttribute('aria-label', 'Preparar em 1 minuto');
    var m = minutos();
    painel.innerHTML = '<div class="pn-top"><h2>Preparar em 1 minuto</h2><span class="pn-so">Só você vê</span><button type="button" class="pn-x" aria-label="Fechar">×</button></div>'
      + '<div class="pn-cena"></div>'
      + '<div class="pn-aula"><h3>A aula</h3><p>' + esc(PREP.obj) + '</p>'
      + (PREP.armadilha ? '<h3>A armadilha</h3><p>' + esc(PREP.armadilha) + '</p>' : '')
      + '<h3>Roteiro · ' + m.t + (m.t2 > m.t ? '–' + m.t2 : '') + ' min</h3><ol class="pn-rot">' + L.map(function (x, i) {
        var r = (x.rot || '').split('·');
        return (i === NUCLEO + 1 ? '<li class="pn-ff-tit">' + esc(FFN) + ' · só se sobrar tempo</li>' : '')
          + '<li' + (x.ff ? ' class="ff"' : '') + '><b>' + (x.rot ? esc(r[0].trim()) : '·') + '</b><span>' + esc(x.rot ? r.slice(1).join('·').trim() : 'Capa') + '</span>' + (x.min ? '<em>' + (x.ff ? '' : x.extra ? 'extra · ' : '') + x.min + ' min</em>' : '') + '</li>';
      }).join('') + '</ol>'
      + (PREP.pal && PREP.pal.length ? '<h3>Palavras da aula</h3><p class="pn-pal" lang="en">' + PREP.pal.map(function (p) { return '<span>' + esc(p) + '</span>'; }).join('') + '</p>' : '')
      + '<button type="button" class="pn-completo">Guia completo (em inglês)</button></div>';
    document.body.appendChild(painel);
    painel.querySelector('.pn-x').onclick = function () { abre(false); };
    painel.querySelector('.pn-completo').onclick = function () { if (typeof guia === 'function') guia(true); };
    var b = document.getElementById('bguia'); if (b) b.onclick = function () { abre(!aberto()); };
    var guardado = null; try { guardado = localStorage.getItem('wl-notas'); } catch (e) { /* segue */ }
    /* 01/11/2026: abre só quando o professor pede (Guide ou G). Na sala as câmeras flutuam no alto, à direita,
       e o painel aberto sozinho ficava embaixo delas. Depois, fica como ele deixou neste aparelho. */
    abre(guardado === '1');
    notas();
  }
  document.addEventListener('keydown', function (ev) {
    if ((typeof ALUNO !== 'undefined' && ALUNO) || /^(TEXTAREA|INPUT)$/.test(ev.target.tagName || '')) return;
    if ((ev.key === 'g' || ev.key === 'G') && painel) { ev.stopImmediatePropagation(); abre(!aberto()); }
  }, true);

  function liga() {
    montaPainel(); pinta();
    requestAnimationFrame(function () { setTimeout(function () { raiz.classList.add('abriu'); }, 150); });   /* a cortina abre uma vez */
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', liga); else liga();
})();
