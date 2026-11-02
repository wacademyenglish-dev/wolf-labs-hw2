/* 23/10/2026: aula sem --ac (chassi antigo da WOLFLIX) deixava os botões cheios invisíveis; empresta o --am */
;(function(){try{var r=document.documentElement,c=getComputedStyle(r);if(!c.getPropertyValue('--ac').trim()){r.style.setProperty('--ac',c.getPropertyValue('--am').trim()||'#f0b866');}}catch(e){}})();
/* ============================================================
   KIT LIVE CLASS · A LEGENDA                          08/10/2026
   Pedido do Carlos (08/10): a legenda mora na aula, não no vídeo; anda
   com o vídeo no mesmo segundo; o alvo gramatical fica em amarelo e,
   tocado, pausa o vídeo e abre a explicação; o professor liga e desliga
   (CC), para ele só ou para os dois.
   Os dados vêm de legenda-dados.js (gerado por kit/legenda_monta.py):
     window.WL_LEGENDA = { yt, cues: [[ini, fim, [[palavra, t], …]], …],
                        alvo: { chave: { titulo, formula, texto, erros, certo } },
                        marca: [[i, j, chave], …]   (palavra j da fala i, e quantas seguem),
                        paradas: [{ t, k, q, h }] }  (só nos modos que param o vídeo)
   O tempo vem do próprio YouTube (infoDelivery, o mesmo canal que o fio da
   sala usa) e é interpolado entre um aviso e outro: cada palavra acende
   no tempo dela, dos dois lados da sala.
   A sala: o toque no CC viaja ao aluno (o fio repete o clique). Em "só eu"
   o botão leva data-wl-local e não viaja. O aluno tem os mesmos controles, escondidos
   (o fio acha o botão pelo endereço na página: a página tem de ser igual nos dois lados).
   09/10/2026 · A LEGENDA DENTRO DO VÍDEO (desenho aprovado pelo Carlos: "ficou bom").
   Na tela de aula dele (2000x767) a faixa embaixo do vídeo saía cortada. Agora as
   falas e a explicação da palavra amarela ficam POR CIMA da imagem, como na TV
   (.leg-sobre, dentro do .video); embaixo do vídeo sobram só os botões. O aviso
   "Tap a yellow word" aparece para o professor até o primeiro toque numa amarela.
   Modos (catálogo de 08/10): a faixa comum embaixo de todo vídeo, e o
   modo dentro da cena: <div data-leg-modo="vela"></div> (G · A Vela).
   ============================================================ */
(function () {
  var D = window.WL_LEGENDA; if (!D || !D.cues) return;
  var SEM_LETRA = !!window.WL_SEM_LETRA;   /* 11/10/2026: aula de música, nenhuma linha da letra na tela */
  function aluno() { return /(^|[?&])papel=aluno/.test(location.search) || document.documentElement.classList.contains('wl-sala-aluno'); }
  var E = { cc: false, todos: true, aberta: null, feitas: {}, resp: {}, t: 0, base: 0, toc: false, rate: 1, lento: !!D.vel, velPosta: false, velPlay: false };
  var quadro = null, fios = null, sobre = null, ultimo = '';
  /* 09/10/2026 (noite) · pedido do Carlos: "a análise pode ser só feita na página seguinte ao trailer".
     Durante o vídeo a palavra amarela só acende (não é botão, não pausa, sem dica); a explicação mora
     na cena seguinte, Line by Line. O modo vela (dentro de uma cena) continua com o toque. */
  var soVer = false;
  var CHAVE_DICA = 'wl-leg-dica-' + D.yt;
  function dicaVista() { try { return !!localStorage.getItem(CHAVE_DICA); } catch (e) { return false; } }
  function marcaDica() { try { localStorage.setItem(CHAVE_DICA, '1'); } catch (e) { /* segue */ } }

  /* marca[i][j] = chave do alvo, e '+' para as palavras que vêm junto (can + verbo) */
  var MARCA = {};
  (D.marca || []).forEach(function (m) { MARCA[m[0] + ':' + m[1]] = m[2]; for (var k = 1; k <= (m[3] || 0); k++) MARCA[m[0] + ':' + (m[1] + k)] = '+' + m[2]; });

  function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function agora() { return E.toc ? E.t + (performance.now() - E.base) / 1000 * E.rate : E.t; }
  function qual(t) { var c = D.cues; for (var i = 0; i < c.length; i++) if (t < c[i][1] + .15) return t >= c[i][0] - .1 ? i : -1 - i; return -1 - c.length; }   /* -1-i: entre falas, antes da i */
  function cmd(f, func, args) { try { f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: func, args: args || [] }), '*'); } catch (e) { /* segue */ } }
  function ouvir(f) { try { f.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: 'wl-leg', channel: 'widget' }), '*'); } catch (e) { /* segue */ } }

  /* ---------- o tempo do vídeo ---------- */
  window.addEventListener('message', function (ev) {
    if (!quadro || ev.source !== quadro.contentWindow) return;
    var d; try { d = typeof ev.data === 'string' ? JSON.parse(ev.data) : ev.data; } catch (e) { return; }
    var i = d && d.info; if (!i) return;
    if (typeof i.playbackRate === 'number') E.rate = i.playbackRate || 1;
    /* 20/10/2026 · pedido do Carlos (A1 nao pode assustar): D.vel = 0.75 nos videos rapidos do A1. O video ja abre devagar;
       o botao 'Slow 0.75x' volta ao normal (o fio repete o toque no aluno). Posto uma vez quando o player responde e outra no 1o play. */
    if (D.vel && !E.velPosta) { E.velPosta = true; cmd(quadro, 'setPlaybackRate', [E.lento ? D.vel : 1]); }
    if (D.vel && !E.velPlay && i.playerState === 1) { E.velPlay = true; cmd(quadro, 'setPlaybackRate', [E.lento ? D.vel : 1]); }
    if (typeof i.currentTime === 'number') { E.t = i.currentTime; E.base = performance.now(); }
    /* 13/10/2026 · o corte: window.WL_PULA = [[ini, fim], …] salta o trecho (só quem conduz o vídeo) */
    if (typeof i.currentTime === 'number' && window.WL_PULA && !(naSala() && souAluno())) {
      for (var pk = 0; pk < window.WL_PULA.length; pk++) { var pz = window.WL_PULA[pk];
        if (E.t >= pz[0] && E.t < pz[1] - .5) { cmd(quadro, 'seekTo', [pz[1], true]); E.t = pz[1]; E.base = performance.now(); break; } }
    }
    if (typeof i.playerState === 'number') { E.toc = i.playerState === 1; E.base = performance.now(); }
  });

  /* ---------- desenhar ---------- */
  function linha(i, viva) {
    var c = D.cues[i]; if (!c) return '';
    var t = agora();
    return c[2].map(function (w, j) {
      var m = MARCA[i + ':' + j], cls = (viva ? (t >= w[1] - .05 ? 'dita' : 'vem') : '');
      var txt = h(w[0]);
      if (m && m.charAt(0) !== '+' && soVer) return '<span class="leg-alvo ' + cls + '">' + txt + juntas(i, j, viva, t) + '</span>';
      if (m && m.charAt(0) !== '+') return '<button type="button" class="leg-alvo ' + cls + '" data-leg-a="alvo" data-leg-k="' + m + '" data-leg-i="' + i + '">' + txt + juntas(i, j, viva, t) + '</button>';
      if (m) return '';
      return '<span class="' + cls + '">' + txt + '</span>';
    }).join(' ');
  }
  function juntas(i, j, viva, t) {   /* as palavras que vão dentro do amarelo (can + heal) */
    var s = '', c = D.cues[i][2];
    for (var k = j + 1; k < c.length && MARCA[i + ':' + k] && MARCA[i + ':' + k].charAt(0) === '+'; k++) s += ' <span class="' + (viva ? (t >= c[k][1] - .05 ? 'dita' : 'vem') : '') + '">' + h(c[k][0]) + '</span>';
    return s;
  }
  function controles() {   /* o aluno tem os MESMOS botões, escondidos: o fio repete o toque pelo endereço do botão, e ele precisa existir dos dois lados */
    var loc = E.todos ? '' : ' data-wl-local="1"';
    return '<div class="leg-ctrl"><button type="button" class="leg-cc' + (E.cc ? ' on' : '') + '" data-leg-a="cc"' + loc + ' aria-pressed="' + E.cc + '"><b>CC</b>' + (E.cc ? 'Subtitles on' : 'Subtitles off') + '</button>'
      + '<button type="button" class="leg-quem" data-leg-a="quem">' + (E.todos ? 'For you and the student' : 'Only for you') + '</button>'
      + (D.vel ? '<button type="button" class="leg-vel' + (E.lento ? ' on' : '') + '" data-leg-a="vel" aria-pressed="' + E.lento + '">' + (E.lento ? 'Slow · ' + D.vel + '×' : 'Normal speed') + '</button>' : '')
      + '<button type="button" class="leg-tela-bt" data-leg-a="tela" data-wl-local="1" aria-label="' + (cheia() ? 'Exit full screen' : 'Full screen with subtitles') + '">' + (cheia() ? '✕ Exit full screen' : '⛶ Full screen') + '</button></div>';
  }
  /* ---------- TELA CHEIA COM A LEGENDA (09/10/2026, pedido do Carlos) ----------
     O botão do YouTube põe em tela cheia só o vídeo, e a legenda fica de fora. Aqui a tela cheia é da CAIXA
     que tem o vídeo e a faixa (o pai dos dois): a legenda desce por cima do vídeo, como na TV. No iPhone a
     Apple não deixa nada além de um <video> ir para tela cheia: a caixa ocupa a janela inteira (a "falsa"). */
  function caixa() { return quadro && fios && quadro.closest('.video') && quadro.closest('.video').parentNode; }
  function cheia() { var c = caixa(); return !!(c && c.classList.contains('leg-tela')); }
  function telaCheia() {
    var c = caixa(); if (!c) return;
    if (cheia()) {
      if (document.fullscreenElement || document.webkitFullscreenElement) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      c.classList.remove('leg-tela', 'leg-falsa'); document.documentElement.classList.remove('leg-trava');
      telaNoAluno(false);
      return;
    }
    c.classList.add('leg-tela');
    var pede = c.requestFullscreen || c.webkitRequestFullscreen;
    var falsa = function () { c.classList.add('leg-falsa'); document.documentElement.classList.add('leg-trava'); };
    /* 16/10/2026 · NA SALA AO VIVO a sala já tem a tela cheia dela (aula + lousa + barra). Pedir uma segunda
       tela cheia lá dentro confunde alguns navegadores (o Opera do Carlos: a sala cheia e o vídeo pequeno).
       Aqui a caixa ocupa a aula inteira (a "falsa") e a sala é que vai para a tela cheia, se ainda não estiver. */
    if (naSala()) { falsa(); try { window.parent.postMessage({ wl: 'sala', tipo: 'tela-cheia-entra' }, '*'); } catch (e) { /* segue */ } telaNoAluno(true); ultimo = ''; pintaFaixa(); return; }
    if (pede) { try { var r = pede.call(c); if (r && r.catch) r.catch(falsa); } catch (e) { falsa(); } } else falsa();
  }
  ['fullscreenchange', 'webkitfullscreenchange'].forEach(function (n) {
    document.addEventListener(n, function () {
      var fe = document.fullscreenElement || document.webkitFullscreenElement;
      /* 15/10/2026 · se ainda assim o VÍDEO sozinho foi para a tela cheia (dois cliques no player), troca
         pela nossa: sai da do YouTube e abre a caixa com a legenda (a "falsa", ocupando a janela, porque o
         navegador só deixa pedir tela cheia de novo com um clique). */
      if (fe && fe === quadro) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        var c = caixa(); if (c) { c.classList.add('leg-tela', 'leg-falsa'); document.documentElement.classList.add('leg-trava'); ultimo = ''; pintaFaixa(); }
        return;
      }
      if (fe) return;
      [].forEach.call(document.querySelectorAll('.leg-tela:not(.leg-falsa)'), function (c) { c.classList.remove('leg-tela'); });
      ultimo = ''; pintaFaixa();
    });
  });
  function explicacao() {
    var a = E.aberta, x = a && D.alvo[a.k]; if (!x) return '';
    var fala = D.cues[a.i] ? D.cues[a.i][2].map(function (w) { return w[0]; }).join(' ') : '';
    return '<div class="leg-expl" role="dialog" aria-label="' + h(x.titulo) + '"><small>THE GRAMMAR OF THE LESSON</small><h3>' + x.titulo + '</h3>'
      + (x.formula ? '<div class="leg-form">' + x.formula.map(function (f) { return '<span' + (f.charAt(0) === '*' ? ' class="y">' + f.slice(1) : '>' + f) + '</span>'; }).join('') + '</div>' : '')
      + '<p class="leg-fala">“' + h(fala) + '”</p><p>' + x.texto + '</p>'
      + (x.erros ? '<div class="leg-err"><span class="x">✗ ' + x.erros.join(' · ✗ ') + '</span><span class="v">✓ ' + x.certo.join(' · ✓ ') + '</span></div>' : '')
      + '<div class="leg-bts"><button type="button" class="btn" data-leg-a="de-novo">Hear it again</button><button type="button" class="btn cheio" data-leg-a="segue">Keep watching</button></div></div>';
  }
  function parada() {
    var p = E.aberta && E.aberta.p != null ? D.paradas[E.aberta.p] : null; if (!p) return '';
    return '<div class="leg-selah"><small>SELAH · THE SCENE RESTS</small><p class="q">' + p.q + '</p>'
      + (E.resp[E.aberta.p] ? '<p class="r">' + p.h + '</p>' : '<button type="button" class="pilula" data-leg-a="resp">Show answer</button>')
      + '<div class="leg-bts"><button type="button" class="btn cheio" data-leg-a="segue">Keep watching</button></div></div>';
  }
  function pintaFaixa() {
    var alvo = fios; if (!alvo) return;
    if (SEM_LETRA) {   /* 16/10/2026 · música sem letra: nenhum botão de legenda, mas a TELA CHEIA continua (o Carlos: "tela cheia não funcionava") */
      var so = '<div class="leg-ctrl"><button type="button" class="leg-tela-bt" data-leg-a="tela" data-wl-local="1" aria-label="' + (cheia() ? 'Exit full screen' : 'Full screen') + '">' + (cheia() ? '✕ Exit full screen' : '⛶ Full screen') + '</button></div>';
      if (alvo.innerHTML !== so) alvo.innerHTML = so; alvo.classList.add('desligada', 'so-ctrl'); alvo.classList.add('so-tela'); return;
    }
    var vela = alvo.getAttribute('data-leg-modo') === 'vela';
    var t = agora(), i = qual(t), ativa = E.cc || vela;
    soVer = !vela;
    var cur = i >= 0 ? i : -1, antes = i >= 0 ? i - 1 : -i - 2;
    var chave = [E.cc, E.todos, vela, cur, antes, JSON.stringify(E.aberta), JSON.stringify(E.resp), ativa && cur >= 0 ? D.cues[cur][2].filter(function (w) { return t >= w[1] - .05; }).length : 0].join('|');
    if (chave === ultimo) return; ultimo = chave;
    var corpo = '';
    if (vela) {
      if (ativa) corpo = '<div class="leg-linhas" aria-live="off">'
        + '<p class="leg-ant">' + (antes >= 0 ? linha(antes, false) : '&nbsp;') + '</p>'
        + '<p class="leg-agora">' + (cur >= 0 ? linha(cur, true) : '<span class="leg-pausa">…</span>') + '</p></div>';
      alvo.innerHTML = controles() + corpo + explicacao() + parada();
    } else {
      /* a TV: as falas e a explicação por cima da imagem; embaixo, só os botões */
      alvo.innerHTML = controles();
      var v = quadro && quadro.closest('.video');
      if (v) {
        if (!sobre || sobre.parentNode !== v) { sobre = v.querySelector('.leg-sobre') || document.createElement('div'); sobre.className = 'leg-sobre'; v.appendChild(sobre); v.classList.add('leg-tem'); }
        var temAlvo = ativa && cur >= 0 && /leg-alvo/.test(linha(cur, false));
        var dica = '';   /* 09/10 noite: sem "Tap a yellow word": a explicação é na cena seguinte */
        var falas = ativa && (cur >= 0 || E.aberta) ? '<div class="leg-linhas" aria-live="off">'
          + (antes >= 0 && cur >= 0 ? '<p class="leg-ant">' + linha(antes, false) + '</p>' : '')
          + (cur >= 0 ? '<p class="leg-agora">' + linha(cur, true) + '</p>' : '') + '</div>' : '';
        var aberta = explicacao() + parada();
        sobre.innerHTML = dica + (aberta ? aberta : falas);
        sobre.classList.toggle('aberta', !!aberta);
      }
    }
    alvo.classList.toggle('desligada', !ativa);
    alvo.classList.toggle('so-ctrl', !vela);
    var pal = alvo.closest('#palco'); if (pal) pal.classList.toggle('com-leg', false);   /* 09/10: a legenda mora dentro do vídeo; ele não encolhe mais */
  }

  /* ---------- as paradas (modos que param o vídeo) ----------
     Na sala, quem decide a parada é o professor: o aluno vem uns décimos atrás e, se decidisse sozinho,
     pararia de novo depois que o professor já seguiu (um pausa o outro). O professor manda a parada pelo
     canal do fio (__wlSalaEstado) e o aluno abre a mesma, no mesmo segundo. */
  function naSala() { return typeof window.__wlSalaEstado === 'function'; }
  function souAluno() { return window.__wlSalaPapel === 'aluno' || aluno(); }
  var tAntes = 0;
  function abreParada(n, t) { E.feitas[n] = 1; if (quadro) cmd(quadro, 'pauseVideo'); E.toc = false; E.t = t; E.aberta = { p: n }; ultimo = ''; }
  function confereParadas() {
    var t = agora();
    if (!fios || !fios.hasAttribute('data-leg-modo')) { tAntes = t; return; }   /* parada só no modo da cena, nunca na faixa comum */
    if (!(naSala() && souAluno())) (D.paradas || []).forEach(function (p, n) {
      if (E.feitas[n] || !E.toc) return;
      if (tAntes < p.t && t >= p.t) { abreParada(n, p.t); if (naSala()) window.__wlSalaEstado({ leg: 'parada', n: n, yt: D.yt }); }
    });
    tAntes = t;
  }
  /* 20/10/2026 · A TELA CHEIA VAI PARA O ALUNO (o Carlos: "quando eu coloco o vídeo em tela cheia, o aluno
     não vê"). O professor manda pelo fio { leg: 'tela', on }; do lado do aluno a caixa do vídeo ocupa a aula
     inteira (a "falsa": o navegador só deixa a tela cheia de verdade com um clique do próprio aluno). */
  function telaNoAluno(on) {
    if (!naSala() || souAluno() || !D || !D.yt) return;
    try { window.__wlSalaEstado({ leg: 'tela', on: !!on, yt: D.yt }); } catch (e) { /* segue */ }
  }
  window.addEventListener('wl-sala-estado', function (ev) {
    var d = ev.detail; if (!d || d.leg !== 'tela' || !souAluno() || (D && d.yt !== D.yt)) return;
    var c = caixa(); if (!c) return;
    if (d.on && !cheia()) { c.classList.add('leg-tela', 'leg-falsa'); document.documentElement.classList.add('leg-trava'); }
    else if (!d.on && cheia()) { c.classList.remove('leg-tela', 'leg-falsa'); document.documentElement.classList.remove('leg-trava'); }
    ultimo = ''; pintaFaixa();
  });
  window.addEventListener('wl-sala-estado', function (ev) {
    var d = ev.detail; if (!d || d.leg !== 'parada' || d.yt !== D.yt || !D.paradas[d.n] || !fios || !fios.hasAttribute('data-leg-modo')) return;
    abreParada(d.n, D.paradas[d.n].t);   /* sem seekTo: o fio já acerta o segundo, e pular faz o vídeo tocar de novo */
  });

  var tic = 0;
  function laco() {
    if (quadro && !quadro.isConnected) { quadro = null; fios = null; }
    /* 16/10/2026 · aula com motor antigo (sem motor.js) não chama WolfLegenda.pinta ao trocar de cena:
       sem vídeo achado, procura sozinho a cada meio segundo (a faixa e a tela cheia aparecem mesmo assim) */
    if (!quadro && ++tic % 30 === 0) { var pl = document.getElementById('palco'); if (pl) monta(pl); }
    if (quadro) { confereParadas(); pintaFaixa(); kmLuz(); lnLaco(); }
    requestAnimationFrame(laco);
  }

  /* depois de cada pintura da aula: acha o vídeo desta legenda e põe a faixa embaixo (ou no lugar do modo) */
  function monta(palco) {
    var f = [].filter.call(palco.querySelectorAll('.video iframe'), function (x) { return (x.getAttribute('src') || '').indexOf('/embed/' + D.yt) > 0; })[0];
    if (!f) { quadro = null; fios = null; return; }
    /* 15/10/2026 · o Carlos pôs a aula do Space Marine em tela cheia e a legenda sumiu: era a tela cheia
       DO YOUTUBE (o botão do canto do vídeo), que leva só o vídeo. Sem esse botão (fs=0), a tela cheia
       que sobra é a nossa, "⛶ Full screen", com a legenda por cima. */
    var src0 = f.getAttribute('src') || '';
    if (!/[?&]fs=0/.test(src0)) { f.removeAttribute('allowfullscreen'); f.setAttribute('src', src0 + (src0.indexOf('?') < 0 ? '?' : '&') + 'fs=0'); }
    var lugar = palco.querySelector('[data-leg-modo]');
    if (!lugar) {
      var v = f.closest('.video');
      lugar = v.nextElementSibling && v.nextElementSibling.classList.contains('leg') ? v.nextElementSibling : null;
      if (!lugar) { lugar = document.createElement('div'); v.parentNode.insertBefore(lugar, v.nextSibling); }
    }
    lugar.classList.add('leg');
    if (quadro !== f) {
      quadro = f; sobre = null; E.t = 0; E.toc = false; tAntes = 0; E.feitas = {}; E.aberta = null; E.resp = {}; E.velPosta = false; E.velPlay = false;   /* vídeo novo, paradas novas */
      ouvir(f); f.addEventListener('load', function () { setTimeout(function () { ouvir(f); }, 400); setTimeout(function () { ouvir(f); }, 1500); });
      setTimeout(function () { ouvir(f); }, 1200);
    }
    fios = lugar; ultimo = '';
    pintaFaixa();
  }
  /* ---------- C · AS FALAS, UMA POR UMA (09/10/2026, desenho aprovado pelo Carlos) ----------
     Uma cena { k: 'falas' } no L da aula, depois do vídeo: as falas que têm a palavra amarela,
     em lista. Tocar numa fala escolhe; "Hear it" toca só aquele trecho (os dois lados da sala,
     porque o fio repete o toque). A explicação da gramática fica embaixo do vídeo pequeno. */
  var trechoTimer = null;
  function trecho(i) {
    var c = D.cues[i]; if (!c || !quadro) return;
    cmd(quadro, 'seekTo', [Math.max(0, c[0] - .35), true]); cmd(quadro, 'playVideo');
    clearTimeout(trechoTimer);
    trechoTimer = setTimeout(function () { if (quadro) cmd(quadro, 'pauseVideo'); }, ((c[1] - c[0]) + .9) / (E.rate || 1) * 1000);
  }
  function chaveDa(i) { for (var j = 0; j < D.cues[i][2].length; j++) { var m = MARCA[i + ':' + j]; if (m && m.charAt(0) !== '+') return m; } return null; }
  /* 09/10/2026 (noite) · TODAS as falas do vídeo (pedido do Carlos: "ele fala o nome da Skyler... não consigo
     mais voltar"): qualquer fala toca de novo; as que têm a palavra amarela trazem a explicação. Até 24,
     sem as de uma palavra só (gritos, "Oh"), e as amarelas nunca ficam de fora. */
  function cortada(c) { return (window.WL_PULA || []).some(function (p) { return c[0] >= p[0] - .2 && c[1] <= p[1] + .2; }); }
  function falasDaCena() {
    var l = [];
    var ENCHE = /^(oh|ah|uh|um|hmm|mm|hey|shh|ha|yeah|no|yes|okay|ok|come|on|god|my|gosh|whoa|wow|la|na|ooh|go)$/i, vistas = {};
    D.cues.forEach(function (c, i) {
      if (cortada(c)) return;   /* 13/10: fala dentro do corte (WL_PULA) não entra na lista */
      var ws = c[2].map(function (w) { return String(w[0]).toLowerCase().replace(/[^a-z']/g, ''); }).filter(Boolean);
      var uni = {}; ws.forEach(function (w) { uni[w] = 1; });
      var cheias = Object.keys(uni).filter(function (w) { return !ENCHE.test(w); }).length;
      var txt = ws.join(' ');
      var nome = ws.length < 3 && cheias >= 1 && /^[A-Z][a-z]{2,}/.test(String(c[2][0][0]));   /* "Skyler," sozinho conta */
      if (chaveDa(i) || ((ws.length >= 3 && cheias >= 2 || nome) && !vistas[txt])) { l.push(i); vistas[txt] = 1; }
    });
    if (l.length > 24) { var am = l.filter(function (i) { return chaveDa(i); }); l = l.filter(function (i) { return !chaveDa(i); }).slice(0, 24 - am.length).concat(am).sort(function (a, b) { return a - b; }); }
    return l;
  }
  function textoMarcado(i) {
    return D.cues[i][2].map(function (w, j) { var m = MARCA[i + ':' + j]; return m ? '<span class="y">' + h(w[0]) + '</span>' : h(w[0]); }).join(' ').replace(/<\/span> <span class="y">/g, ' ');
  }
  function mmss(t) { t = Math.floor(t); return Math.floor(t / 60) + ':' + ('0' + t % 60).slice(-2); }
  /* o chassi antigo (astronaut, joao, talking) não tem o iframe() do motor do kit: este faz o mesmo (09/10) */
  function quadroVideo(yt, titulo, extra) {
    /* 21/10/2026 · o fs=0 já nasce no endereço: o monta() o acrescentava depois, o endereço novo nunca batia
       com o velho e o motor recriava o vídeo a cada toque (no bingo, o toque recarregava o vídeo tocando) */
    extra = (extra || '') + '&fs=0';
    if (typeof iframe === 'function') return iframe(yt, titulo, extra);
    var api = '&enablejsapi=1' + (/^https?:$/.test(location.protocol) ? '&origin=' + encodeURIComponent(location.origin) : '');
    return '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + yt + '?rel=0&modestbranding=1&playsinline=1' + api + (extra || '') + '" title="' + h(titulo) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>';
  }

  /* ---------- D · OS MOMENTOS-CHAVE (10/10/2026) ----------
     window.WL_MOMENTOS = [{ i: [falas], k: 'nome curto', quem: 'quem fala', contexto: 'o que acontece',
       frase: 'a fala com <b>o alvo</b>', explica: 'por que importa', formula: 'o padrão', tente: 'agora você', ex: 'exemplo' }] */
  function momentos() { return (window.WL_MOMENTOS && window.WL_MOMENTOS.length) ? window.WL_MOMENTOS : null; }
  function trechoDe(ini, fim) {
    if (!quadro) return;
    clearInterval(kmParaT); cmd(quadro, 'unMute');   /* 21/10: o dublador deixa o vídeo mudo; ouvir de novo devolve o som */
    cmd(quadro, 'seekTo', [Math.max(0, ini - .35), true]); cmd(quadro, 'playVideo');
    clearTimeout(trechoTimer);
    trechoTimer = setTimeout(function () { if (quadro) cmd(quadro, 'pauseVideo'); }, ((fim - ini) + .9) / (E.rate || 1) * 1000);
  }
  /* as formas novas (10/10/2026): cada aula escolhe em WL_MOMENTOS_ESTILO.forma */
  function kmTxt(t) { var d = document.createElement('div'); d.innerHTML = t; return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  function kmAlvo(m) { var x = /<b>([\s\S]*?)<\/b>/.exec(m.frase); return x ? kmTxt(x[1]).replace(/[.,!?]+$/, '') : ''; }
  function kmQuem(m) { return String(m.quem || '').split(',')[0].trim(); }
  var KM_GIRO = [[0, 1, 2], [1, 2, 0], [2, 0, 1], [1, 0, 2], [2, 1, 0], [0, 2, 1]];
  var KM_EMBARALHA = [2, 0, 4, 1, 3, 6, 5, 7];
  function kmF() { if (!S.__lm) S.__lm = { sel: 0, ex: {} }; if (!S.__lm.f) S.__lm.f = {}; return S.__lm.f; }
  function kmCartaToda(m, sel, M, notas, ouve, rotTopo) {
    return '<article class="km-carta vd"><div class="km-topo"><small>' + (rotTopo || ('KEY MOMENT ' + (sel + 1) + ' OF ' + M.length)) + ' · ' + mmss(D.cues[m.i[0]][0]) + '</small>' + ouve + '</div>'
      + '<blockquote class="km-frase">' + m.frase + '</blockquote><p class="km-quem"><b>' + m.quem + '</b> · ' + m.contexto + '</p>' + notas + '</article>';
  }
  function kmAbas(M, sel) {
    return '<div class="km-abas" role="tablist" aria-label="Key moments">' + M.map(function (x, k) {
      return '<button type="button" role="tab" aria-selected="' + (k === sel) + '" class="km-aba' + (k === sel ? ' on' : '') + '" data-a="km-sel" data-n="' + k + '"><em>' + (k + 1) + '</em><span><b>' + x.k + '</b><small>' + mmss(D.cues[x.i[0]][0]) + '</small></span></button>';
    }).join('') + '</div>';
  }
  function cenaForma(forma, c2, M, sel, m, notas, ouve, todas, cor, video, ES) {
    var F = kmF(), tela = '', esq = video + kmAbas(M, sel) + todas;
    if (forma === 'lacuna') {
      var certa = kmAlvo(m), outras = (m.distr && m.distr.length ? m.distr : M.filter(function (x) { return x !== m; }).map(kmAlvo)).filter(function (x) { return x && x !== certa; }).slice(0, 2);
      var ops = [certa].concat(outras), giro = KM_GIRO[sel % KM_GIRO.length].filter(function (g) { return g < ops.length; });
      var esc = F['lac' + sel], ok = esc === certa;
      var frase = m.frase.replace(/<b>[\s\S]*?<\/b>/, '<span class="km-gap' + (ok ? ' ok' : esc ? ' nao' : '') + '">' + (ok ? h(certa) : esc ? h(esc) : '&nbsp;') + '</span>');
      tela = ok ? kmCartaToda(m, sel, M, notas, ouve) : '<article class="km-carta vd"><div class="km-topo"><small>FILL THE LINE · ' + mmss(D.cues[m.i[0]][0]) + '</small>' + ouve + '</div>'
        + '<p class="km-pede">Hear it again. Which words are missing?</p><blockquote class="km-frase">' + frase + '</blockquote>'
        + '<div class="km-ops">' + giro.map(function (g) { return '<button type="button" class="km-op' + (esc === ops[g] && !ok ? ' nao' : '') + '" data-a="km-lac" data-n="' + sel + '" data-v="' + h(ops[g]) + '">' + h(ops[g]) + '</button>'; }).join('') + '</div>'
        + (esc && !ok ? '<p class="km-dica">Not this one. Listen again and try another.</p>' : '') + '</article>';
    } else if (forma === 'quem') {
      var nomes = []; M.forEach(function (x) { var q = kmQuem(x); if (nomes.indexOf(q) < 0) nomes.push(q); });
      if (m.quemOps) nomes = m.quemOps.slice();
      nomes = nomes.slice(0, 4);
      var resp = F['quem' + sel], acertou = resp === kmQuem(m);
      tela = acertou ? kmCartaToda(m, sel, M, notas, ouve, 'WHO SAID IT · ' + kmQuem(m).toUpperCase()) : '<article class="km-carta vd"><div class="km-topo"><small>WHO SAID IT?</small>' + ouve + '</div>'
        + '<blockquote class="km-frase">' + m.frase + '</blockquote><p class="km-pede">Who says this line? Why do you think so?</p>'
        + '<div class="km-ops">' + nomes.map(function (q) { return '<button type="button" class="km-op' + (resp === q ? ' nao' : '') + '" data-a="km-quem" data-n="' + sel + '" data-v="' + h(q) + '">' + h(q) + '</button>'; }).join('') + '</div>'
        + (resp && !acertou ? '<p class="km-dica">Not ' + h(resp) + '. Hear it again: whose voice is it?</p>' : '') + '</article>';
    } else if (forma === 'quadro') {
      var foto = ES.foto ? (/[\/.]/.test(ES.foto) ? ES.foto : (typeof img === 'function' ? img(ES.foto) : ES.foto)) : '';
      var pontos = M.map(function (x, k) {
        var p = x.ponto || [12 + k * (76 / Math.max(1, M.length - 1)), 70];
        return '<button type="button" class="km-ponto' + (k === sel ? ' on' : '') + '" style="left:' + p[0] + '%;top:' + p[1] + '%" data-a="km-sel" data-n="' + k + '" aria-label="' + h(x.objeto || x.k) + '"><b>' + (k + 1) + '</b><span>' + h(x.objeto || x.k) + '</span></button>';
      }).join('');
      esq = '<div class="km-foto" style="background-image:url(' + foto + ')">' + pontos + '</div><p class="km-pede">Tap a point in the picture. Each one opens a line from the clip.</p>' + todas;
      tela = kmCartaToda(m, sel, M, notas, ouve, (m.objeto ? m.objeto.toUpperCase() : 'IN THE PICTURE'));
    } else if (forma === 'legendas') {
      var tr = m.trad || [], esc2 = F['leg' + sel], ordem = sel % 2 ? [1, 0] : [0, 1];
      if (tr.length < 2) { tela = kmCartaToda(m, sel, M, notas, ouve); }
      else {
        tela = '<article class="km-carta vd"><div class="km-topo"><small>SUBTITLE BATTLE · ' + mmss(D.cues[m.i[0]][0]) + '</small>' + ouve + '</div>'
          + '<blockquote class="km-frase">' + m.frase + '</blockquote><p class="km-pede">Two subtitles in Portuguese. Which one sounds natural? Why?</p>'
          + '<div class="km-legs">' + ordem.map(function (o) { var on = esc2 != null, certo = o === 1; return '<button type="button" class="km-leg' + (on ? (certo ? ' ok' : ' nao') : '') + (esc2 === o ? ' esc' : '') + '" data-a="km-leg" data-n="' + sel + '" data-v="' + o + '"><small>' + (o === ordem[0] ? 'SUBTITLE A' : 'SUBTITLE B') + '</small>' + tr[o] + '</button>'; }).join('') + '</div>'
          + (esc2 != null ? '<p class="km-quem"><b>' + (esc2 === 1 ? 'Yes!' : 'The natural one is the other.') + '</b> ' + (m.tradPor || 'Word by word sounds strange. The natural subtitle says the same idea the way people really speak.') + '</p>' + notas : '') + '</article>';
      }
    } else if (forma === 'termometro') {
      var sn = m.sente || {}, val = F['ter' + sel], esc3 = ['', '', '', '', ''];
      var de = sn.de || 'calm', a = sn.a || 'very upset', perg = sn.q || ('How does ' + kmQuem(m) + ' feel here?');
      tela = '<article class="km-carta vd"><div class="km-topo"><small>THE THERMOMETER · ' + mmss(D.cues[m.i[0]][0]) + '</small>' + ouve + '</div>'
        + '<blockquote class="km-frase">' + m.frase + '</blockquote><p class="km-pede">' + perg + '</p>'
        + '<div class="km-term" role="radiogroup" aria-label="' + h(perg) + '"><span>' + h(de) + '</span>' + esc3.map(function (_, k) { return '<button type="button" role="radio" aria-checked="' + (val === k) + '" class="km-grau g' + k + (val === k ? ' on' : '') + '" data-a="km-ter" data-n="' + sel + '" data-v="' + k + '" aria-label="' + (k + 1) + ' of 5"></button>'; }).join('') + '<span>' + h(a) + '</span></div>'
        + (val != null ? '<p class="km-quem"><b>Now say why.</b> ' + (sn.st || 'He’s … because …') + '</p><p class="km-quem">' + m.contexto + '</p>' + notas : '') + '</article>';
    } else if (forma === 'ordem') {
      var fila = F.ord || [], perm = KM_EMBARALHA.filter(function (x) { return x < M.length; }), erro = F.ordErr;
      var feito = fila.length === M.length;
      var pecas = '<div class="km-pecas">' + perm.map(function (k) { var ja = fila.indexOf(k); return '<button type="button" class="km-peca' + (ja > -1 ? ' ja' : '') + (erro === k ? ' nao' : '') + '" data-a="km-ord" data-n="' + k + '"' + (ja > -1 ? ' disabled' : '') + '>' + (ja > -1 ? '<em>' + (ja + 1) + '</em>' : '') + M[k].k + '</button>'; }).join('') + '</div>';
      if (!feito) {
        esq = video + todas;
        tela = '<article class="km-carta vd"><div class="km-topo"><small>PUT IT IN ORDER</small></div><p class="km-pede">Tap the moments in the order they happen in the clip.</p>' + pecas
          + (erro != null ? '<p class="km-dica">Not yet. What happens before that?</p>' : '') + '</article>';
      } else {
        tela = '<div class="km-feita"><p class="km-pede"><b>Right order!</b> Now tell the story: first…, then…, after that…, finally…</p>' + kmCartaToda(m, sel, M, notas, ouve) + '</div>';
      }
    } else if (forma === 'diretor') {
      var viu = F['dir' + sel];
      tela = '<article class="km-carta vd"><div class="km-topo"><small>DIRECTOR’S CUT · ' + (m.cena || mmss(D.cues[m.i[0]][0])) + '</small>' + (viu ? ouve : '') + '</div>'
        + '<p class="km-quem"><b>' + m.quem + '</b> · ' + m.contexto + '</p>'
        + '<div class="km-tente"><small>YOU ARE THE DIRECTOR</small><p>' + (m.diretor || ('What should ' + kmQuem(m) + ' say here? Say the line your way.')) + '</p></div>'
        + (viu ? '<div class="km-bloco"><small>THE ORIGINAL LINE</small></div><blockquote class="km-frase">' + m.frase + '</blockquote><p class="km-pede">Is yours better? Why?</p>' + notas
          : '<button type="button" class="btn km-revela" data-a="km-dir" data-n="' + sel + '">Show the original line</button>') + '</article>';
    }
    return cab(c2) + '<div class="km-mesa"' + cor + '><div class="km-esq">' + esq + '</div>' + tela + '</div>';
  }
  /* ---------- E · O JOGO DOS MOMENTOS (21/10/2026) ----------
     Pedido do Carlos: "esse exercício é muito maçante" (o Fill the line, cinco vezes igual). Desenho aprovado:
     https://claude.ai/artifact/95ghtwQRZc953srZs2BuWv. Com forma: 'jogo', cada momento vira um jogo diferente:
       aposta    o vídeo para antes do alvo; o aluno diz o que vem; o Wolf julga o sentido (ou a régua local)
       mentira   a fala com palavras trocadas (m.mentira = [[original, troca], …], escritas pela IA no preparo)
       dublador  o vídeo mudo, a fala acende no tempo; o aluno lê junto; o Wolf diz onde tropeçou
       bingo     a cartela com as palavras do trecho e as iscas (m.iscas, do preparo); vale o que já foi dito
       conversa  o Wolf faz a pergunta do "Your turn" (m.tente) e conversa até 3 turnos; a melhor frase vai ao My notes
     A IA mora na sala do professor (window.__wlSalaIA, do fio): fora da sala, ou sem crédito, a régua local responde.
     Na sala, quem chama a IA é o lado do professor; o aluno recebe pelo fio (__wlSalaEstado). O que se diz ou digita
     fica num campo (data-campo), que o fio leva ao outro lado; por isso os toques leem o campo 400 ms depois
     (o campo viaja em até 120 ms; o toque, em 60). O microfone é de cada lado (data-wl-local). */
  var JOGO_NOME = { aposta: 'Bet', mentira: 'Spot the lie', dublador: 'Dub it', bingo: 'Bingo', conversa: 'Talk' };
  var KM_NOTA = { ok: ['ok', '★ Right on'], quase: ['quase', '½ So close'], nao: ['nao', 'Listen again'] };
  var KM_PARA = /^(the|a|an|and|or|but|of|to|in|on|at|for|with|is|are|was|were|be|been|it|its|it's|that|this|these|those|you|your|i|we|they|he|she|his|her|their|our|my|me|so|as|if|by|from|not|do|does|did|have|has|had|can|could|will|would|should|more|most|very|just|than|then|there|which|what|when|who|how|about|into|also|may|might|one|two|some|been|being|while|where|because)$/;
  function kmNorm(w) { return String(w).toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9'-]/g, '').replace(/^'+|'+$/g, ''); }
  function kmPalavras(m) { var l = []; m.i.forEach(function (i) { (D.cues[i] ? D.cues[i][2] : []).forEach(function (w) { l.push({ w: w[0], n: kmNorm(w[0]), t: w[1] }); }); }); return l; }
  function kmAcha(ps, frase) {
    var alvo = String(frase).split(/\s+/).map(kmNorm).filter(Boolean); if (!alvo.length) return -1;
    for (var k = 0; k + alvo.length <= ps.length; k++) { var ok = true; for (var j = 0; j < alvo.length; j++) if (ps[k + j].n !== alvo[j]) { ok = false; break; } if (ok) return k; }
    return -1;
  }
  function kmLimites(m) {
    var ps = kmPalavras(m), alvo = kmAlvo(m), k = kmAcha(ps, alvo), n = alvo.split(/\s+/).filter(Boolean).length;
    var c0 = D.cues[m.i[0]], c1 = D.cues[m.i[m.i.length - 1]];
    return { ini: c0[0], fim: c1[1], alvo: k > -1 ? ps[k].t : null, ps: ps };
  }
  /* o preparo da IA (jogo_preparo.mjs): window.WL_MOMENTOS_JOGO[k] = { mentira, iscas }, no fim do momentos-dados.js */
  function kmPrep(m) { var P = window.WL_MOMENTOS_JOGO || [], M = momentos() || []; return P[M.indexOf(m)] || {}; }
  function kmMentira(m) {
    var txt = kmTxt(m.frase), marca = [];
    var P = kmPrep(m), trocas = (m.mentira && m.mentira.length ? m.mentira : P.mentira && P.mentira.length ? P.mentira : (m.distr && m.distr[0] ? [[kmAlvo(m), m.distr[0]]] : [])).slice(0, 3);
    trocas.forEach(function (tr) {
      var o = String(tr[0] || ''); if (!o) return;
      var x = new RegExp('(^|[^A-Za-z’\'])(' + o.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![A-Za-z’\'])', 'i').exec(txt); if (!x) return;
      var ini = x.index + x[1].length, fim = ini + x[2].length, t = String(tr[1] || '');
      if (!t || marca.some(function (q) { return ini < q[1] && fim > q[0]; })) return;
      if (/^[A-Z]/.test(x[2])) t = t.charAt(0).toUpperCase() + t.slice(1);
      marca.push([ini, fim, t, x[2]]);
    });
    marca.sort(function (a, b) { return a[0] - b[0]; });
    var segs = [], pos = 0, n = 0;
    function palavras(t) { t.split(/(\s+)/).forEach(function (p) { if (!p) return; if (/^\s+$/.test(p)) segs.push({ sep: 1, t: p }); else segs.push({ t: p, n: n++ }); }); }
    marca.forEach(function (q) { palavras(txt.slice(pos, q[0])); segs.push({ t: q[2], orig: q[3], troca: 1, n: n++ }); pos = q[1]; });
    palavras(txt.slice(pos));
    return segs;
  }
  function kmBingo(m, M) {
    var ps = kmPalavras(m), reais = [], visto = {};
    ps.forEach(function (p) { if (p.n.length >= 4 && !KM_PARA.test(p.n) && !visto[p.n]) { visto[p.n] = 1; reais.push({ w: p.n, t: p.t }); } });
    var esc = reais.length > 5 ? [0, 1, 2, 3, 4].map(function (k) { return reais[Math.floor(k * reais.length / 5)]; }) : reais.slice();
    var iscas = (m.iscas || kmPrep(m).iscas || []).map(kmNorm).filter(function (w) { return w && !visto[w]; });
    M.forEach(function (x) { if (x === m) return; kmPalavras(x).forEach(function (p) { if (iscas.length < 4 && p.n.length >= 5 && !KM_PARA.test(p.n) && !visto[p.n] && iscas.indexOf(p.n) < 0) iscas.push(p.n); }); });
    var cel = esc.concat(iscas.slice(0, Math.max(0, 9 - esc.length)).map(function (w) { return { w: w, isca: 1 }; }));
    return [4, 0, 7, 2, 8, 5, 1, 6, 3].map(function (o) { return cel[o]; }).filter(Boolean);   /* ordem fixa: igual nos dois lados */
  }
  function jogosDa(M, ES) {
    var n = M.length, l;
    if (ES.jogos && ES.jogos.length) l = M.map(function (_, k) { return ES.jogos[k % ES.jogos.length]; });
    else if (n <= 1) l = ['aposta'];
    else if (n === 2) l = ['aposta', 'conversa'];
    else if (n === 3) l = ['aposta', 'mentira', 'conversa'];
    else if (n === 4) l = ['aposta', 'mentira', 'dublador', 'conversa'];
    else { l = ['aposta', 'mentira', 'dublador', 'bingo']; for (var k = 4; k < n - 1; k++) l.push(['aposta', 'mentira', 'bingo', 'dublador'][(k - 4) % 4]); l.push('conversa'); }
    /* o jogo que não tem com o que jogar vira o dublador (que sempre tem a fala) */
    return l.map(function (j, k) {
      var m = M[k];
      if (j === 'aposta' && kmLimites(m).alvo == null) return 'dublador';
      if (j === 'mentira' && !kmMentira(m).some(function (s) { return s.troca; })) return 'dublador';
      if (j === 'bingo' && kmBingo(m, M).filter(function (x) { return !x.isca; }).length < 3) return 'dublador';
      return j;
    });
  }
  var kmParaT = null;
  function tocaAte(ini, ate, mudo) {
    if (!quadro) return;
    clearTimeout(trechoTimer); clearInterval(kmParaT);
    cmd(quadro, mudo ? 'mute' : 'unMute');
    cmd(quadro, 'seekTo', [Math.max(0, ini - .35), true]); cmd(quadro, 'playVideo');
    E.t = Math.max(0, ini - .35); E.base = performance.now(); E.toc = true;
    var desde = performance.now(), limite = desde + ((ate - ini) + 5) / (E.rate || 1) * 1000;
    kmParaT = setInterval(function () {
      var t = agora(), ag = performance.now();
      /* os primeiros 700 ms não contam: o player ainda pode avisar o segundo de antes do salto */
      if (!quadro || ag > limite || (ag - desde > 700 && t >= ate - .08 && t < ate + 8)) {
        clearInterval(kmParaT);
        if (quadro) { cmd(quadro, 'pauseVideo'); if (mudo) cmd(quadro, 'unMute'); }
      }
    }, 40);
  }
  function kmLuz() {
    var k = document.querySelector('.km-kar'); if (!k) return;
    var t = agora();
    [].forEach.call(k.children, function (s) { s.classList.toggle('dita', t > 0 && +s.getAttribute('data-t') <= t + .05); });
  }
  /* ---- o microfone (de cada lado; o texto vai para o campo, e o campo para o outro lado) ---- */
  var kmRec = null, kmRecCampo = '';
  function kmTemMic() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); }
  function kmMicPinta() { [].forEach.call(document.querySelectorAll('[data-km-mic]'), function (b) { b.classList.toggle('on', b.getAttribute('data-km-mic') === kmRecCampo); }); }
  function kmMicPara() { try { if (kmRec) kmRec.stop(); } catch (e) { /* segue */ } }
  function kmMic(campo, continuo) {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition; if (!SR) return;
    if (kmRec) { var era = kmRecCampo; kmMicPara(); kmRec = null; kmRecCampo = ''; kmMicPinta(); if (era === campo) return; }
    var r = new SR(); r.lang = 'en-US'; r.interimResults = true; r.continuous = !!continuo; r.maxAlternatives = 1;
    r.onresult = function (ev) {
      var t = ''; for (var i = 0; i < ev.results.length; i++) t += ev.results[i][0].transcript + ' ';
      var ta = document.querySelector('[data-campo="' + campo + '"]');
      if (ta) { ta.value = t.replace(/\s+/g, ' ').trim(); ta.dispatchEvent(new Event('input', { bubbles: true })); }
    };
    r.onend = r.onerror = function () { if (kmRec === r) { kmRec = null; kmRecCampo = ''; } kmMicPinta(); };
    kmRec = r; kmRecCampo = campo;
    try { r.start(); } catch (e) { kmRec = null; kmRecCampo = ''; }
    kmMicPinta();
  }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-km-mic]'); if (!b) return;
    var c = b.getAttribute('data-km-mic'); kmMic(c, /^db/.test(c));
  });
  /* ---- a IA: só o lado do professor chama; o aluno espera a resposta pelo fio ---- */
  function kmMd(t) { return h(t).replace(/\*([^*]+)\*/g, '<b>$1</b>'); }
  function kmLocal(modo, d) {
    function ws(t) { return String(t || '').split(/\s+/).map(kmNorm).filter(Boolean); }
    if (modo === 'aposta') {
      var a = ws(d.alvo), p = ws(d.palpite);
      if (!p.length) return { nota: 'nao', fala: 'In the video: *' + d.alvo + '*. Hear it again.' };
      if (a.join(' ') === p.join(' ')) return { nota: 'ok', fala: 'Exactly! The video says *' + d.alvo + '*.' };
      return a.some(function (w) { return w.length > 2 && p.indexOf(w) > -1; }) ? { nota: 'quase', fala: 'Close! The video says *' + d.alvo + '*.' } : { nota: 'nao', fala: 'Good try. The video says *' + d.alvo + '*. Hear it again.' };
    }
    if (modo === 'dublador') {
      var l = ws(d.linha), lido = ws(d.lido);
      if (!lido.length) return { nota: 'quase', fala: 'The mic did not catch your voice. Did you keep up with the video? Try once more, or go on.' };
      var falta = l.filter(function (w) { return lido.indexOf(w) < 0; }), certas = l.length - falta.length;
      return { nota: certas >= l.length * .85 ? 'ok' : certas >= l.length * .5 ? 'quase' : 'nao', fala: certas + ' of ' + l.length + ' words came through.' + (falta.length ? ' Listen again for *' + falta.slice(0, 3).join('*, *') + '*.' : ' Great rhythm!') };
    }
    return { fala: 'Nice! Now tell your teacher a bit more: why?', melhor: '' };
  }
  function kmPedeIA(modo, dados, chave, n) {
    var F = kmF(); F.ia = F.ia || {}; F.ia[chave] = { espera: 1 };
    if (naSala() && souAluno()) return;
    function pronto(res) {
      var G = kmF(); G.ia = G.ia || {}; G.ia[chave] = res; G.ok = G.ok || {}; G.ok[n] = 1;
      if (typeof pinta === 'function') pinta();
      if (naSala()) try { window.__wlSalaEstado({ km: 'ia', yt: D.yt, k: chave, n: n, v: res }); } catch (e) { /* segue */ }
    }
    function local() { pronto(kmLocal(modo, dados)); }
    if (naSala() && typeof window.__wlSalaIA === 'function') window.__wlSalaIA('linha', { modo: modo, dados: dados }).then(function (r) { if (r && r.fala) pronto(r); else local(); }, local);
    else setTimeout(local, 300);
  }
  window.addEventListener('wl-sala-estado', function (ev) {
    var d = ev.detail; if (!d || d.km !== 'ia' || d.yt !== D.yt || !souAluno()) return;
    var G = kmF(); G.ia = G.ia || {}; G.ia[d.k] = d.v; G.ok = G.ok || {}; G.ok[d.n] = 1;
    if (typeof pinta === 'function') pinta();
  });
  function kmDepois(f) { setTimeout(function () { f(); if (typeof pinta === 'function') pinta(); }, 400); }
  function kmWolf(html, nota) { return '<div class="km-wolf"><span class="km-orbe" aria-hidden="true"></span><div><p>' + html + '</p>' + (nota ? '<span class="km-nota ' + nota[0] + '">' + nota[1] + '</span>' : '') + '</div></div>'; }
  function kmPensa() { return '<div class="km-wolf pensa"><span class="km-orbe" aria-hidden="true"></span><div><p>Wolf is listening…</p></div></div>'; }
  function kmFala(campo, ph) {
    return '<div class="km-diz"><button type="button" class="km-mic' + (kmTemMic() ? '' : ' sem') + (kmRecCampo === campo ? ' on' : '') + '" data-wl-local data-km-mic="' + campo + '" aria-label="Speak" title="Speak"><span></span></button>'
      + '<textarea class="km-campo" rows="2" data-campo="' + campo + '" placeholder="' + h(ph) + '">' + h((S.txt || {})[campo] || '') + '</textarea></div>';
  }
  function cenaJogo(c2, M, sel, m, notas, ouve, todas, cor, video, ES) {
    var F = kmF(), J = jogosDa(M, ES), j = J[sel], ok = F.ok || {}, ia = F.ia || {}, quando = mmss(D.cues[m.i[0]][0]), tela = '', aberto = true;
    var abas = '<div class="km-abas" role="tablist" aria-label="Key moments">' + M.map(function (x, k) {
      return '<button type="button" role="tab" aria-selected="' + (k === sel) + '" class="km-aba' + (k === sel ? ' on' : '') + (ok[k] ? ' feito' : '') + '" data-a="km-sel" data-n="' + k + '"><em>' + (ok[k] ? '★' : k + 1) + '</em><span><b>' + JOGO_NOME[J[k]] + '</b><small>' + mmss(D.cues[x.i[0]][0]) + '</small></span></button>';
    }).join('') + '</div>';
    function topo(rot, bt) { return '<div class="km-topo"><small>' + rot + ' · ' + quando + '</small>' + (bt == null ? ouve : bt) + '</div>'; }
    function feito(rot, antes) { aberto = false; return '<div class="km-feita">' + (antes || '') + kmCartaToda(m, sel, M, notas, ouve, rot) + '</div>'; }
    var lacuna = m.frase.replace(/<b>[\s\S]*?<\/b>/, '<span class="km-gap">&nbsp;</span>');
    if (j === 'aposta') {
      var A = F['ap' + sel] || {}, r = ia['ap' + sel];
      if (!A.foi) tela = '<article class="km-carta vd">' + topo('BET BEFORE YOU HEAR', '<button type="button" class="btn lf-ouve" data-a="km-ate" data-n="' + sel + '">▶ Play to the gap</button>')
        + '<p class="km-pede">The video stops just before the missing words. What comes next? Say it or type it, then check.</p>'
        + '<blockquote class="km-frase">' + lacuna + '</blockquote>' + kmFala('ap' + sel, 'I think the next words are…')
        + '<div class="km-bts"><button type="button" class="btn" data-a="km-ap" data-n="' + sel + '">Check my bet</button></div></article>';
      else if (!r || r.espera) tela = '<article class="km-carta vd">' + topo('BET BEFORE YOU HEAR', '') + '<blockquote class="km-frase">' + lacuna + '</blockquote>'
        + (A.palpite ? '<p class="km-voce">“' + h(A.palpite) + '”</p>' : '') + kmPensa() + '</article>';
      else tela = feito('YOUR BET', '<article class="km-carta vd km-res">' + (A.palpite ? '<p class="km-voce">You said: “' + h(A.palpite) + '”</p>' : '') + kmWolf(kmMd(r.fala), KM_NOTA[r.nota]) + '</article>');
    } else if (j === 'mentira') {
      var MT = F['mt' + sel] || { achou: {} }, segs = kmMentira(m), tot = segs.filter(function (s) { return s.troca; }).length;
      var achou = segs.filter(function (s) { return s.troca && MT.achou[s.n]; }).length;
      if (achou >= tot) tela = feito('SPOT THE LIE', '<p class="km-pede"><b>You caught ' + (tot > 1 ? 'all ' + tot : 'it') + '!</b></p>');
      else tela = '<article class="km-carta vd">' + topo('SPOT THE LIE')
        + '<p class="km-pede">Hear it again. ' + (tot > 1 ? tot + ' words are' : 'One word is') + ' not what the video says. Tap ' + (tot > 1 ? 'them' : 'it') + '.</p>'
        + '<p class="km-mentira">' + segs.map(function (s) {
          if (s.sep) return ' ';
          var foi = s.troca && MT.achou[s.n];
          return '<button type="button" class="km-pal' + (foi ? ' ok' : MT.erro === s.n ? ' nao' : '') + '" data-a="km-mt" data-n="' + sel + '" data-v="' + s.n + '"' + (foi ? ' disabled' : '') + '>' + (foi ? '<s>' + h(s.t) + '</s> ' + h(s.orig) : h(s.t)) + '</button>';
        }).join('') + '</p>'
        + (MT.erro != null ? '<p class="km-dica">That one is right. Listen again.</p>' : '') + '<p class="km-conta">' + achou + ' of ' + tot + '</p></article>';
    } else if (j === 'dublador') {
      var DB = F['db' + sel] || {}, r2 = ia['db' + sel], lim = kmLimites(m);
      if (!DB.foi) tela = '<article class="km-carta vd">' + topo('DUB IT', '<button type="button" class="btn lf-ouve" data-a="km-ouve" data-n="' + sel + '">▶ Hear the voice</button>')
        + '<p class="km-pede">Now the video plays with no sound. Read the line out loud with it, word by word as it lights up.</p>'
        + '<p class="km-kar">' + lim.ps.map(function (p) { return '<span data-t="' + p.t + '">' + h(p.w) + '</span>'; }).join(' ') + '</p>'
        + kmFala('db' + sel, 'Your reading shows up here…')
        + '<div class="km-bts"><button type="button" class="btn" data-a="km-db-vai" data-n="' + sel + '">● Start dubbing</button><button type="button" class="btn" data-a="km-db" data-n="' + sel + '">Check my reading</button></div></article>';
      else if (!r2 || r2.espera) tela = '<article class="km-carta vd">' + topo('DUB IT', '') + kmPensa() + '</article>';
      else tela = feito('DUB IT', '<article class="km-carta vd km-res">' + (DB.lido ? '<p class="km-voce">You read: “' + h(DB.lido) + '”</p>' : '') + kmWolf(kmMd(r2.fala), KM_NOTA[r2.nota]) + '</article>');
    } else if (j === 'bingo') {
      var BG = F['bg' + sel] || { ok: {} }, cel = kmBingo(m, M), reais = cel.filter(function (x) { return !x.isca; }).length;
      var ach = cel.filter(function (x) { return !x.isca && BG.ok[x.w]; }).length;
      if (ach >= reais) tela = feito('BINGO', '<p class="km-pede"><b>Bingo!</b> You heard all ' + reais + ' words.</p>');
      else tela = '<article class="km-carta vd">' + topo('EAR BINGO', '<button type="button" class="btn lf-ouve" data-a="km-bg-vai" data-n="' + sel + '">▶ Play</button>')
        + '<p class="km-pede">Play the clip. Tap a word as soon as you hear it. Careful: some words are traps.</p>'
        + '<div class="km-bingo">' + cel.map(function (x) {
          return '<button type="button" class="km-bg' + (BG.ok[x.w] ? ' ok' : BG.erro === x.w ? ' nao' : BG.cedo === x.w ? ' cedo' : '') + '" data-a="km-bg" data-n="' + sel + '" data-v="' + h(x.w) + '"' + (BG.ok[x.w] ? ' disabled' : '') + '>' + h(x.w) + '</button>';
        }).join('') + '</div>'
        + (BG.erro ? '<p class="km-dica">“' + h(BG.erro) + '” is a trap. It’s not in the clip.</p>' : BG.cedo ? '<p class="km-dica">Not yet! Wait for “' + h(BG.cedo) + '”.</p>' : '')
        + '<p class="km-conta">' + ach + ' of ' + reais + '</p></article>';
    } else {
      /* a conversa: fora da sala não tem com quem conversar; fica o "Your turn" de sempre */
      if (!naSala()) tela = feito('TALK');
      else {
        var CV = F['cv' + sel] || { t: [] }, perg = kmPrep(m).pergunta || kmTxt(m.tente || 'What do you think about this part of the video?');
        var ult = CV.t.length ? ia['cv' + sel + '_' + (CV.t.length - 1)] : null, pensa = ult && ult.espera, fim = CV.fim || (CV.t.length >= 3 && ult && !pensa);
        var chat = kmWolf(h(perg));
        CV.t.forEach(function (a, k) {
          var rr = ia['cv' + sel + '_' + k];
          chat += '<p class="km-eu">' + h(a) + '</p>' + (!rr || rr.espera ? kmPensa() : kmWolf(kmMd(rr.fala) + (rr.melhor ? '<span class="km-melhor"><small>SAY IT LIKE THIS</small>' + h(rr.melhor) + '</span>' : '')));
        });
        if (!fim && !pensa) chat += kmFala('cv' + sel + '_' + CV.t.length, 'Answer out loud or type…')
          + '<div class="km-bts"><button type="button" class="btn" data-a="km-cv" data-n="' + sel + '">Send</button>' + (CV.t.length ? '<button type="button" class="pilula" data-a="km-cv-fim" data-n="' + sel + '">Finish</button>' : '') + '</div>';
        if (fim) {
          var boas = CV.t.map(function (a, k) { return (ia['cv' + sel + '_' + k] || {}).melhor || a; });
          chat += '<div class="km-tente"><small>YOUR BEST SENTENCE</small><p>' + h(boas[boas.length - 1] || '') + '</p>'
            + (CV.salvo ? '<p class="km-pede"><b>Saved to My notes.</b></p>' : '<button type="button" class="pilula" data-a="km-cv-salva" data-n="' + sel + '">Save to my notes</button>') + '</div>';
          aberto = false;
        }
        tela = '<article class="km-carta vd">' + topo('TALK WITH THE VIDEO') + '<blockquote class="km-frase">' + m.frase + '</blockquote>'
          + '<div class="km-chat">' + chat + '</div>'
          + (fim ? '<div class="km-bloco"><small>' + ((ES.rot || {}).por || 'WHY THIS LINE') + '</small><p>' + m.explica + '</p></div><div class="km-formula"><small>' + ((ES.rot || {}).padrao || 'THE PATTERN') + '</small><p>' + m.formula + '</p></div>' : '') + '</article>';
      }
    }
    return cab(c2) + '<div class="km-mesa km-jogo' + (aberto ? ' km-esconde' : '') + '"' + cor + '><div class="km-esq">' + video + abas + todas + '</div>' + tela + '</div>';
  }
  function cenaMomentos(c, M) {
    if (!S.__lm) S.__lm = { sel: 0, ex: {} };
    var ES = window.WL_MOMENTOS_ESTILO || {}, forma = ES.forma || 'abas', RT = ES.rot || {};
    var rPor = RT.por || 'WHY THIS LINE', rPad = RT.padrao || 'THE PATTERN', rVoce = RT.voce || 'NOW YOU', rEx = RT.ex || 'EXAMPLE';
    var sel = Math.min(S.__lm.sel, M.length - 1), m = M[sel];
    var ini = D.cues[m.i[0]][0], fimVideo = D.cues[D.cues.length - 1][1] || 1;
    var cor = ES.cor ? ' style="--km:' + ES.cor + '"' : '';
    var ouve = '<button type="button" class="btn lf-ouve" data-a="km-ouve" data-n="' + sel + '">▶ Hear it again</button>';
    var exemplo = m.ex ? (S.__lm.ex[sel] ? '<p class="km-ex"><b>' + rEx + '</b>' + m.ex + '</p>' : '<button type="button" class="pilula" data-a="km-ex" data-n="' + sel + '">Show an example</button>') : '';
    var notas = '<div class="km-bloco"><small>' + rPor + '</small><p>' + m.explica + '</p></div>'
      + '<div class="km-formula"><small>' + rPad + '</small><p>' + m.formula + '</p></div>'
      + (m.tente ? '<div class="km-tente"><small>' + rVoce + '</small><p>' + m.tente + '</p>' + exemplo + '</div>' : '');
    var c2 = {}; for (var kk in c) c2[kk] = c[kk];
    c2.t = ES.titulo || (M.length + ' key moments from the video.');
    c2.p = ES.sub || 'Tap a moment. Hear the line again, see why it matters, then answer in your own words.';
    var video = quadroVideo(D.yt, 'The scene', '&start=' + Math.floor(ini));
    var todas = SEM_LETRA ? '' : '<button type="button" class="km-todas" data-a="km-todas">See every line of the video</button>';
    if (forma === 'jogo') { c2.p = ES.subJogo || 'Five moments, five games: bet, spot the lie, dub, bingo, then talk with the video.'; return cenaJogo(c2, M, sel, m, notas, ouve, todas, cor, video, ES); }
    if (['lacuna', 'quem', 'quadro', 'legendas', 'termometro', 'ordem', 'diretor'].indexOf(forma) > -1) return cenaForma(forma, c2, M, sel, m, notas, ouve, todas, cor, video, ES);
    if (forma === 'roteiro') {
      var cenas = '<div class="km-cenas" role="tablist" aria-label="Key moments">' + M.map(function (x, k) {
        return '<button type="button" role="tab" aria-selected="' + (k === sel) + '" class="km-cn' + (k === sel ? ' on' : '') + '" data-a="km-sel" data-n="' + k + '">SCENE ' + (k + 1) + '<small>' + x.k + '</small></button>';
      }).join('') + '</div>';
      var pagina = '<article class="km-roteiro"><div class="km-topo"><small>' + (m.cena || ('SCENE ' + (sel + 1))) + ' · ' + mmss(ini) + '</small>' + ouve + '</div>'
        + '<p class="km-rt-quem">' + String(m.quem).split(',')[0].toUpperCase() + '</p>'
        + (m.contexto ? '<p class="km-rt-par">(' + m.contexto + ')</p>' : '')
        + '<p class="km-rt-fala">' + m.frase + '</p></article>';
      return cab(c2) + '<div class="km-mesa km-f-roteiro"' + cor + '><div class="km-esq">' + video + cenas + todas + '</div><div class="km-dir">' + pagina + '<div class="km-carta km-margem vd">' + notas + '</div></div></div>';
    }
    if (forma === 'linha') {
      var marcas = '<div class="km-linha" role="tablist" aria-label="Key moments"><i class="km-trilho"></i>' + M.map(function (x, k) {
        var pct = Math.max(2, Math.min(98, D.cues[x.i[0]][0] / fimVideo * 100));
        return '<button type="button" role="tab" aria-selected="' + (k === sel) + '" class="km-marca' + (k === sel ? ' on' : '') + '" style="left:' + pct + '%" data-a="km-sel" data-n="' + k + '" aria-label="' + x.k + '"><b>' + (k + 1) + '</b><span>' + x.k + '</span></button>';
      }).join('') + '</div>';
      return cab(c2) + '<div class="km-f-linha"' + cor + '><div class="km-video-largo">' + video + '</div>' + marcas
        + '<article class="km-carta km-deitada vd"><div class="km-dl-esq"><div class="km-topo"><small>' + m.k + ' · ' + mmss(ini) + '</small>' + ouve + '</div>'
        + '<blockquote class="km-frase">' + m.frase + '</blockquote><p class="km-quem"><b>' + m.quem + '</b> · ' + m.contexto + '</p></div>'
        + '<div class="km-dl-dir">' + notas + '</div></article>' + todas + '</div>';
    }
    var abas = '<div class="km-abas" role="tablist" aria-label="Key moments">' + M.map(function (x, k) {
      return '<button type="button" role="tab" aria-selected="' + (k === sel) + '" class="km-aba' + (k === sel ? ' on' : '') + '" data-a="km-sel" data-n="' + k + '">'
        + '<em>' + (k + 1) + '</em><span><b>' + x.k + '</b><small>' + mmss(D.cues[x.i[0]][0]) + '</small></span></button>';
    }).join('') + '</div>';
    var carta = '<article class="km-carta vd"><div class="km-topo"><small>KEY MOMENT ' + (sel + 1) + ' OF ' + M.length + ' · ' + mmss(ini) + '</small>' + ouve + '</div>'
      + '<blockquote class="km-frase">' + m.frase + '</blockquote><p class="km-quem"><b>' + m.quem + '</b> · ' + m.contexto + '</p>' + notas + '</article>';
    return cab(c2) + '<div class="km-mesa"' + cor + '><div class="km-esq">' + video + abas + todas + '</div>' + carta + '</div>';
  }
  /* ---------- F · A LINHA NOVA (24/10/2026) ----------
     O Carlos: a Line by Line com TODAS as falas ficou comprida; ele quer "muito mais objetiva e simples".
     Quatro formas aprovadas, UMA por aula (variar de aula para aula). A aula escolhe em linha-dados.js:
       window.WL_LINHA = { forma: 'tres' | 'pausa' | 'vf' | 'ouviu', titulo?, sub?, ini?, fim?, itens: [...] }
     Os tempos SEMPRE saem das falas (D.cues): cada item aponta a fala pelo índice, nunca por segundos.
       tres  · Três frases que importam: o vídeo inteiro, depois só 3 falas.
               { de: i, ate?: j, palavra: 'a palavra amarela (pode ser mais de uma)', explica: 'curta (PT só no A1/A2)' }
       pausa · Pausa e completa: o vídeo para sozinho no fim da fala i; falta uma palavra; 3 opções.
               { i: i, palavra: 'a que falta', opcoes: ['x', 'y', 'z'], certa: 0..2 }
               certa → o vídeo segue; errada → toca de novo os ~5 s antes do fim da fala.
       vf    · Verdade ou não?: 4 frases sobre as ideias do vídeo; "Show me" toca a prova (falas de..ate).
               { frase: 'texto original', certo: true|false, de: i, ate?: j, porque?: 'curto' }
       ouviu · Qual você ouviu?: toca as falas de..ate (uns 4 s) SEM legenda (botão 0.75×); 3 frases parecidas.
               { de: i, ate?: j, opcoes: ['a', 'b', 'c'], certa: 0..2 }
     ini/fim (opcional): o trecho do vídeo; sem eles vale o VIDEO da aula (mesmo yt) ou a 1ª e a última fala.
     Sem WL_LINHA a cena continua como era (momentos ou a lista). Na sala: tudo mora em S.__ln e cada toque é um
     botão data-a (o fio repete o toque e manda o S do professor); a parada da forma 'pausa' é decidida só pelo
     professor e vai ao aluno por __wlSalaEstado({ ln: 'pausa', n, yt }), como as paradas da Selah. */
  function lnDados() { var X = window.WL_LINHA; return (X && X.forma && X.itens && X.itens.length && !SEM_LETRA && typeof S !== 'undefined') ? X : null; }
  function lnS() { if (!S.__ln) S.__ln = { p: 0, n: 0, ab: null, ult: null, ok: {}, err: {}, r: {}, y: {}, mostra: {}, lento: 0 }; return S.__ln; }
  function lnTrecho(X) {
    var V = window.VIDEO, mesmo = V && V.yt === D.yt, ult = D.cues[D.cues.length - 1];
    return { ini: X.ini != null ? X.ini : mesmo && V.ini != null ? V.ini : Math.floor(D.cues[0][0]), fim: X.fim != null ? X.fim : mesmo && V.fim ? V.fim : Math.ceil(ult[1] + 1) };
  }
  function lnDe(it) { var de = it.de != null ? it.de : it.i, ate = it.ate != null ? it.ate : de; return { de: de, ate: ate, ini: D.cues[de][0], fim: D.cues[ate][1] }; }
  function lnPal(it) { var r = lnDe(it), l = []; for (var i = r.de; i <= r.ate; i++) D.cues[i][2].forEach(function (w) { l.push(String(w[0])); }); return l; }
  function lnAcha(ws, alvo) {
    var a = String(alvo || '').split(/\s+/).map(kmNorm).filter(Boolean), n = ws.map(kmNorm); if (!a.length) return null;
    for (var i = 0; i + a.length <= n.length; i++) { var ok = true; for (var j = 0; j < a.length; j++) if (n[i + j] !== a[j]) { ok = false; break; } if (ok) return [i, i + a.length]; }
    return null;
  }
  /* a fala escrita: modo 'y' (a amarela é botão), 'buraco' (a que falta vira ____), 'cheio' (a amarela pintada), '' (texto) */
  /* a legenda automática quebra "trade -off", "English -based", "$12 .50": na tela sai junto */
  function hl(t) { return h(String(t).replace(/(\S)\s+-(?=\w)/g, '$1-').replace(/(\d)\s+\.(?=\d)/g, '$1.')); }
  function lnFala(it, modo, n) {
    var h = hl, ws = lnPal(it), r = modo ? lnAcha(ws, it.palavra) : null;
    if (!r) return h(ws.join(' '));
    var antes = ws.slice(0, r[0]).join(' '), meio = ws.slice(r[0], r[1]).join(' '), depois = ws.slice(r[1]).join(' ');
    var pont = (/[.,!?;:]+$/.exec(meio) || [''])[0], nucleo = pont ? meio.slice(0, -pont.length) : meio;
    var m = modo === 'buraco' ? '<span class="ln-buraco" aria-label="missing word">' + h(nucleo) + '</span>' + h(pont)
      : modo === 'y' ? '<button type="button" class="ln-y' + (lnS().ab === n ? ' on' : '') + '" data-a="ln-y" data-n="' + n + '">' + h(nucleo) + '</button>' + h(pont)
      : '<span class="ln-amarela">' + h(nucleo) + '</span>' + h(pont);
    return (antes ? h(antes) + ' ' : '') + '<span class="ln-nw">' + m + '</span>' + (depois ? ' ' + h(depois) : '');
  }
  function lnPontos(N, f) { var s = '<div class="ln-pontos" aria-hidden="true">'; for (var k = 0; k < N; k++) s += '<i class="' + f(k) + '"></i>'; return s + '</div>'; }
  function lnFimTxt(certas, N) { return '<p class="ln-grande">' + certas + ' of ' + N + (certas === N ? '. Great listening!' : '. Good work!') + '</p>'; }
  function lnRecomeca() { return '<button type="button" class="ln-link" data-a="ln-zera">Start again</button>'; }
  function cenaLinha(c, X) {
    var s = lnS(), T = lnTrecho(X), forma = X.forma, I = X.itens, N = I.length, lado = '';
    var c2 = {}; for (var kk in c) c2[kk] = c[kk];
    var TIT = { tres: ['Three lines that matter.', s.p ? 'Play a line. Tap the yellow word. Then say the line.' : 'Watch the whole video. Then only three lines come back.'],
      pausa: ['Pause and complete.', 'The video stops ' + N + ' times. Choose the missing word, and it goes on.'],
      vf: ['True or not?', N + ' ideas from the video. True or false? “Show me” plays the proof.'],
      ouviu: ['Which one did you hear?', N + ' short clips, no subtitles. Choose the sentence you heard.'] }[forma] || ['', ''];
    c2.t = X.titulo || TIT[0]; c2.p = X.sub || TIT[1];
    if (forma === 'tres') {
      if (!s.p) lado = '<div class="ln-carta"><small class="ln-k">FIRST</small><p class="ln-grande">Watch the whole video.</p><p class="ln-sub">Then three lines come back. Only three.</p>'
        + '<button type="button" class="btn cheio ln-bt" data-a="ln-passo" data-n="1">Show the 3 lines →</button></div>';
      else lado = I.map(function (it, k) {
        var aberta = s.ab === k;
        return '<div class="ln-linha' + (aberta ? ' on' : '') + '"><button type="button" class="ln-play" data-a="ln-toca" data-n="' + k + '" aria-label="Play line ' + (k + 1) + '">▶</button>'
          + '<p class="ln-frase">' + lnFala(it, 'y', k) + '</p>'
          + (aberta ? '<div class="ln-expl"><p>' + it.explica + '</p><p class="ln-voce"><b>NOW YOU</b>Play it again, then say the line out loud.</p></div>' : '') + '</div>';
      }).join('') + '<button type="button" class="ln-link" data-a="ln-passo" data-n="0">← Watch the video again</button>';
    } else if (forma === 'pausa') {
      var feitas = I.filter(function (x, k) { return s.ok[k]; }).length;
      var pts = lnPontos(N, function (k) { return s.ok[k] ? 'ok' : s.ab === k ? 'agora' : ''; });
      if (s.ab != null && I[s.ab]) {
        var it = I[s.ab], er = s.err[s.ab] || {};
        lado = '<div class="ln-carta"><div class="ln-topo"><small class="ln-k">STOP ' + (s.ab + 1) + ' OF ' + N + '</small>' + pts + '</div><p class="ln-sub">What’s the missing word?</p>'
          + '<p class="ln-frase">' + lnFala(it, 'buraco') + '</p><div class="ln-ops tres-col">' + it.opcoes.map(function (o, v) {
            return '<button type="button" class="ln-op' + (er[v] ? ' nao' : '') + '" data-a="ln-pz" data-n="' + s.ab + '" data-v="' + v + '"' + (er[v] ? ' aria-disabled="true"' : '') + '>' + hl(o) + '</button>';
          }).join('') + '</div>' + (Object.keys(er).length ? '<p class="ln-msg nao">Not this one. Listen again…</p>' : '') + '</div>';
      } else if (feitas === N) {
        lado = '<div class="ln-carta"><div class="ln-topo"><small class="ln-k">DONE</small>' + pts + '</div>' + lnFimTxt(N, N)
          + I.map(function (it, k) { return '<div class="ln-linha mini"><button type="button" class="ln-play" data-a="ln-toca" data-n="' + k + '" aria-label="Play line ' + (k + 1) + '">▶</button><p class="ln-frase">' + lnFala(it, 'cheio') + '</p></div>'; }).join('') + lnRecomeca() + '</div>';
      } else {
        lado = '<div class="ln-carta"><div class="ln-topo"><small class="ln-k">' + (feitas ? feitas + ' OF ' + N : 'READY?') + '</small>' + pts + '</div>'
          + (s.ult != null && I[s.ult] ? '<p class="ln-msg ok">✓ ' + hl(I[s.ult].opcoes[I[s.ult].certa]) + '</p><p class="ln-frase">' + lnFala(I[s.ult], 'cheio') + '</p>'
            : '<p class="ln-grande">Press play and listen.</p><p class="ln-sub">The video stops by itself. No subtitles.</p>')
          + '<button type="button" class="btn cheio ln-bt" data-a="ln-segue">' + (feitas || s.ult != null ? '▶ Keep watching' : '▶ Play the video') + '</button></div>';
      }
    } else if (forma === 'vf' || forma === 'ouviu') {
      var n = Math.min(s.n, N), certas = I.filter(function (x, k) { return forma === 'vf' ? s.r[k] != null && (s.r[k] === 1) === !!x.certo : s.r[k] != null && !Object.keys(s.err[k] || {}).length; }).length;
      var pts2 = lnPontos(N, function (k) {
        if (k === n) return 'agora'; if (s.r[k] == null) return '';
        return (forma === 'vf' ? (s.r[k] === 1) === !!I[k].certo : !Object.keys(s.err[k] || {}).length) ? 'ok' : 'nao';
      });
      if (n >= N) lado = '<div class="ln-carta"><div class="ln-topo"><small class="ln-k">DONE</small>' + pts2 + '</div>' + lnFimTxt(certas, N) + lnRecomeca() + '</div>';
      else if (forma === 'vf') {
        var x = I[n], resp = s.r[n], acertou = resp != null && (resp === 1) === !!x.certo;
        lado = '<div class="ln-carta"><div class="ln-topo"><small class="ln-k">' + (n + 1) + ' OF ' + N + '</small>' + pts2 + '</div><p class="' + (resp == null ? 'ln-grande' : 'ln-frase') + '">' + h(x.frase) + '</p>'
          + (resp == null ? '<div class="ln-ops dois"><button type="button" class="ln-op vf" data-a="ln-vf" data-n="' + n + '" data-v="1">TRUE</button><button type="button" class="ln-op vf" data-a="ln-vf" data-n="' + n + '" data-v="0">FALSE</button></div>'
            : '<p class="ln-msg ' + (acertou ? 'ok">✓ Right! ' : 'nao">✗ Not this time. ') + (x.certo ? 'It’s true.' : 'It’s false.') + '</p>'
              + '<div class="ln-acoes"><button type="button" class="btn ln-bt" data-a="ln-mostra" data-n="' + n + '">▶ Show me</button><button type="button" class="btn cheio ln-bt" data-a="ln-adiante">' + (n + 1 < N ? 'Next →' : 'Finish') + '</button></div>'
              + (s.mostra[n] ? '<p class="ln-prova">“' + lnFala(x, '') + '”</p>' : '') + (x.porque && s.mostra[n] ? '<p class="ln-sub">' + x.porque + '</p>' : ''))
          + '</div>';
      } else {
        var y = I[n], er2 = s.err[n] || {}, feito = s.r[n] != null;
        lado = '<div class="ln-carta"><div class="ln-topo"><small class="ln-k">CLIP ' + (n + 1) + ' OF ' + N + '</small>' + pts2 + '</div>'
          + '<div class="ln-acoes"><button type="button" class="btn cheio ln-bt" data-a="ln-ouve" data-n="' + n + '">▶ Play the clip</button><button type="button" class="btn ln-bt ln-lento' + (s.lento ? ' on' : '') + '" data-a="ln-lento" aria-pressed="' + !!s.lento + '">0.75×</button>'
            + (feito ? '<button type="button" class="btn cheio ln-bt" data-a="ln-adiante">' + (n + 1 < N ? 'Next clip →' : 'Finish') + '</button>' : '') + '</div>'
          + '<div class="ln-ops">' + y.opcoes.map(function (o, v) {
            var cl = feito && v === y.certa ? ' ok' : er2[v] ? ' nao' : '';
            return '<button type="button" class="ln-op frase' + cl + '" data-a="ln-ov" data-n="' + n + '" data-v="' + v + '"' + (er2[v] || feito ? ' aria-disabled="true"' : '') + '>' + hl(o) + '</button>';
          }).join('') + '</div>'
          + (feito ? '<p class="ln-msg ok">✓ That’s the one.</p>'
            : Object.keys(er2).length ? '<p class="ln-msg nao">Not this one. Play it again.</p>' : '')
          + '</div>';
      }
    }
    var semcc = forma === 'pausa' || forma === 'ouviu' ? ' ln-semcc' : '';
    return cab(c2) + '<div class="ln-mesa ln-f-' + forma + ' ln-p' + (s.p || 0) + semcc + '"><div class="ln-vid">' + quadroVideo(D.yt, 'The video', '&start=' + Math.floor(T.ini) + '&end=' + Math.ceil(T.fim)) + '</div><div class="ln-lado">' + lado + '</div></div>';
  }
  /* a parada da forma 'pausa': só quem conduz decide (o professor, ou a aula aberta sozinha) */
  var lnAntes = 0;
  function lnLaco() {
    var X = lnDados(); if (!X || X.forma !== 'pausa') return;
    var m = document.querySelector('.ln-f-pausa'); if (!m || !quadro || !m.contains(quadro)) { lnAntes = 0; return; }
    var t = agora(), s = lnS();
    if (s.ab == null && E.toc && !(naSala() && souAluno())) {
      for (var n = 0; n < X.itens.length; n++) {
        if (s.ok[n]) continue;
        var fim = lnDe(X.itens[n]).fim + .05;
        if (lnAntes < fim && t >= fim && t - lnAntes < 1.5) {
          s.ab = n; s.ult = null; cmd(quadro, 'pauseVideo'); E.toc = false; E.t = t;
          if (naSala()) try { window.__wlSalaEstado({ ln: 'pausa', n: n, yt: D.yt }); } catch (e) { /* segue */ }
          if (typeof pinta === 'function') pinta();
          break;
        }
      }
    }
    lnAntes = t;
  }
  window.addEventListener('wl-sala-estado', function (ev) {
    var d = ev.detail; if (!d || d.ln !== 'pausa' || d.yt !== D.yt || !souAluno() || !lnDados()) return;
    var s = lnS(); s.ab = d.n; s.ult = null; if (quadro) cmd(quadro, 'pauseVideo'); E.toc = false;
    if (typeof pinta === 'function') pinta();
  });
  function lnTocaItem(it, folga) { var r = lnDe(it); tocaAte(r.ini, r.fim + (folga == null ? .25 : folga)); }
  function lnToques() {
    TOQUES['ln-passo'] = function (b, n) { var s = lnS(); s.p = n; s.ab = null; };
    TOQUES['ln-toca'] = function (b, n) { var X = lnDados(); if (X && X.itens[n]) lnTocaItem(X.itens[n]); return false; };
    TOQUES['ln-y'] = function (b, n) { var s = lnS(); s.ab = s.ab === n ? null : n; s.y[n] = 1; setTimeout(function () { var o = document.querySelector('.ln-linha.on'); if (o && o.scrollIntoView) o.scrollIntoView({ block: 'nearest' }); }, 30); };
    TOQUES['ln-segue'] = function () { var s = lnS(); s.ult = null; if (quadro) { cmd(quadro, 'unMute'); cmd(quadro, 'playVideo'); } };
    TOQUES['ln-pz'] = function (b, n, v) {
      var X = lnDados(), s = lnS(), it = X && X.itens[n]; if (!it || s.ab !== n) return false;
      v = +v;
      if (v === +it.certa) { s.ok[n] = 1; s.ab = null; s.ult = n; if (quadro) { cmd(quadro, 'unMute'); cmd(quadro, 'playVideo'); } }
      else { (s.err[n] = s.err[n] || {})[v] = 1; var r = lnDe(it), T = lnTrecho(X); tocaAte(Math.max(T.ini, r.fim - 5), r.fim + .05); }
    };
    TOQUES['ln-vf'] = function (b, n, v) { var s = lnS(); if (s.r[n] == null) s.r[n] = +v; };
    TOQUES['ln-mostra'] = function (b, n) { var X = lnDados(); lnS().mostra[n] = 1; if (X && X.itens[n]) lnTocaItem(X.itens[n], .4); };
    /* 'ln-adiante' e não '-prox': o motor guarda passo e põe o '‹ Previous' em toda ação -prox (o Carlos não quer na linha nova) */
    TOQUES['ln-adiante'] = function () { var s = lnS(); s.n++; if (quadro) cmd(quadro, 'pauseVideo'); };
    TOQUES['ln-ouve'] = function (b, n) {
      var X = lnDados(), s = lnS(); if (!X || !X.itens[n] || !quadro) return false;
      var rt = s.lento ? .75 : 1; cmd(quadro, 'setPlaybackRate', [rt]); E.rate = rt; lnTocaItem(X.itens[n], .3); return false;
    };
    TOQUES['ln-lento'] = function () { var s = lnS(); s.lento = s.lento ? 0 : 1; if (quadro) cmd(quadro, 'setPlaybackRate', [s.lento ? .75 : 1]); };
    TOQUES['ln-ov'] = function (b, n, v) {
      var X = lnDados(), s = lnS(), it = X && X.itens[n]; if (!it || s.r[n] != null) return false;
      v = +v; if (v === +it.certa) s.r[n] = v; else (s.err[n] = s.err[n] || {})[v] = 1;
    };
    TOQUES['ln-zera'] = function () { var s = lnS(), p = s.p; delete S.__ln; lnS().p = p; if (quadro) cmd(quadro, 'pauseVideo'); };
  }
  function instalaFalas() {
    if (typeof R === 'undefined' || typeof TOQUES === 'undefined' || R.falas) return;
    lnToques();
    R.falas = function (c) {
      var LN = lnDados(); if (LN) return cenaLinha(c, LN);
      var M = momentos(); if (M && (SEM_LETRA || !(S.__lm && S.__lm.todas))) return cenaMomentos(c, M);
      var lista = falasDaCena(); if (!S.__lf) S.__lf = { sel: -1 };
      var prim = lista.filter(function (i) { return chaveDa(i); })[0];
      if (S.__lf.sel === -1 && prim != null) S.__lf.sel = prim;
      var sel = S.__lf.sel, x = sel >= 0 ? D.alvo[chaveDa(sel)] : null;
      var esq = '<div class="lf-lista">' + lista.map(function (i) {
        return '<button type="button" class="lf-fala' + (i === sel ? ' on' : '') + '" data-a="lf-sel" data-n="' + i + '"><em>' + mmss(D.cues[i][0]) + '</em><span>' + textoMarcado(i) + '</span></button>';
      }).join('') + '</div>';
      var dir = '<div class="lf-lado">' + quadroVideo(D.yt, 'The scene', '&start=' + Math.floor(sel >= 0 ? D.cues[sel][0] : 0))
        + (x ? '<div class="lf-expl vd"><div class="lf-topo"><small>LINE ' + (lista.indexOf(sel) + 1) + ' · ' + mmss(D.cues[sel][0]) + '</small><button type="button" class="btn lf-ouve" data-a="lf-ouve" data-n="' + sel + '">▶ Hear it again</button></div><p class="lf-frase">“' + textoMarcado(sel) + '”</p><h3>' + x.titulo + '</h3>'
          + (x.erros ? '<div class="leg-err"><span class="x">✗ ' + x.erros.join(' · ✗ ') + '</span><span class="v">✓ ' + x.certo.join(' · ✓ ') + '</span></div>' : '<p>' + x.texto + '</p>')
          + '</div>' : sel >= 0 ? '<div class="lf-expl vd"><div class="lf-topo"><small>' + mmss(D.cues[sel][0]) + '</small><button type="button" class="btn lf-ouve" data-a="lf-ouve" data-n="' + sel + '">▶ Hear it again</button></div><p class="lf-frase">“' + textoMarcado(sel) + '”</p></div>' : '')
        + '</div>';
      setTimeout(function () { var on = document.querySelector('.lf-fala.on'); if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest' }); }, 0);
      return cab(c) + (M ? '<p class="km-volta-p"><button type="button" class="km-todas" data-a="km-volta">← Back to the key moments</button></p>' : '') + '<div class="lf-mesa">' + esq + dir + '</div>';
    };
    TOQUES['lf-sel'] = function (b, n) { S.__lf.sel = n; };
    TOQUES['lf-ouve'] = function (b, n) { trecho(n); return false; };
    TOQUES['km-sel'] = function (b, n) { if (!S.__lm) S.__lm = { sel: 0, ex: {} }; S.__lm.sel = n; kmMicPara(); };
    /* E · o jogo dos momentos (21/10/2026) */
    TOQUES['km-ate'] = function (b, n) { var l = kmLimites(momentos()[n]); tocaAte(l.ini, l.alvo != null ? l.alvo - .1 : l.fim); return false; };
    TOQUES['km-ap'] = function (b, n) {
      kmMicPara(); kmF()['ap' + n] = { foi: 1, palpite: ((S.txt || {})['ap' + n] || '').trim() };
      kmDepois(function () {
        var m = momentos()[n], p = ((S.txt || {})['ap' + n] || '').trim(); (kmF()['ap' + n] = kmF()['ap' + n] || { foi: 1 }).palpite = p;
        kmPedeIA('aposta', { frase: kmTxt(m.frase), alvo: kmAlvo(m), palpite: p }, 'ap' + n, n);
      });
    };
    TOQUES['km-mt'] = function (b, n, v) {
      var F = kmF(), MT = F['mt' + n] || (F['mt' + n] = { achou: {} }), segs = kmMentira(momentos()[n]), s = segs.filter(function (x) { return x.n === +v; })[0];
      if (!s) return false;
      if (s.troca) { MT.achou[s.n] = 1; MT.erro = null; if (!segs.some(function (x) { return x.troca && !MT.achou[x.n]; })) { F.ok = F.ok || {}; F.ok[n] = 1; } }
      else MT.erro = s.n;
    };
    TOQUES['km-db-vai'] = function (b, n) {
      var l = kmLimites(momentos()[n]); S.txt = S.txt || {}; S.txt['db' + n] = '';
      tocaAte(l.ini, l.fim + .3, true);
      if (!naSala() || souAluno()) { kmMic('db' + n, true); setTimeout(kmMicPara, ((l.fim - l.ini) + 2.5) / (E.rate || 1) * 1000); }
    };
    TOQUES['km-db'] = function (b, n) {
      kmMicPara(); kmF()['db' + n] = { foi: 1 };
      kmDepois(function () {
        var m = momentos()[n], lido = ((S.txt || {})['db' + n] || '').trim(); (kmF()['db' + n] = kmF()['db' + n] || { foi: 1 }).lido = lido;
        kmPedeIA('dublador', { linha: kmTxt(m.frase), lido: lido }, 'db' + n, n);
      });
    };
    TOQUES['km-bg-vai'] = function (b, n) { var l = kmLimites(momentos()[n]); tocaAte(l.ini, l.fim + .4); return false; };
    TOQUES['km-bg'] = function (b, n, v) {
      var F = kmF(), BG = F['bg' + n] || (F['bg' + n] = { ok: {} }), M = momentos(), cel = kmBingo(M[n], M), x = cel.filter(function (q) { return q.w === v; })[0];
      if (!x) return false;
      BG.erro = null; BG.cedo = null;
      if (x.isca) BG.erro = x.w;
      else if (x.t <= agora() + .4) { BG.ok[x.w] = 1; if (cel.every(function (q) { return q.isca || BG.ok[q.w]; })) { F.ok = F.ok || {}; F.ok[n] = 1; } }
      else BG.cedo = x.w;
    };
    TOQUES['km-cv'] = function (b, n) {
      kmMicPara();
      kmDepois(function () {
        var F = kmF(), CV = F['cv' + n] || (F['cv' + n] = { t: [] }), k = CV.t.length, a = ((S.txt || {})['cv' + n + '_' + k] || '').trim(), m = momentos()[n];
        if (!a) return;
        var hist = CV.t.map(function (x, q) { return { aluno: x, wolf: ((F.ia || {})['cv' + n + '_' + q] || {}).fala || '' }; });
        CV.t.push(a);
        kmPedeIA('conversa', { frase: kmTxt(m.frase), contexto: kmTxt(m.contexto || ''), pergunta: kmPrep(m).pergunta || kmTxt(m.tente || ''), historico: hist, resposta: a }, 'cv' + n + '_' + k, n);
      });
    };
    TOQUES['km-cv-fim'] = function (b, n) { var F = kmF(); (F['cv' + n] = F['cv' + n] || { t: [] }).fim = 1; F.ok = F.ok || {}; F.ok[n] = 1; };
    TOQUES['km-cv-salva'] = function (b, n) {
      var F = kmF(), CV = F['cv' + n] || { t: [] }, ia = F.ia || {};
      var boas = CV.t.map(function (a, k) { return (ia['cv' + n + '_' + k] || {}).melhor || a; });
      try { if (window.__wlSalaNota) window.__wlSalaNota(boas[boas.length - 1] || ''); } catch (e) { /* segue */ }
      CV.salvo = 1;
    };
    TOQUES['km-ouve'] = function (b, n) { var m = momentos()[n]; trechoDe(D.cues[m.i[0]][0], D.cues[m.i[m.i.length - 1]][1]); return false; };
    TOQUES['km-ex'] = function (b, n) { S.__lm.ex[n] = 1; };
    TOQUES['km-todas'] = function () { if (!S.__lm) S.__lm = { sel: 0, ex: {} }; S.__lm.todas = 1; };
    TOQUES['km-volta'] = function () { if (S.__lm) S.__lm.todas = 0; };
    TOQUES['km-lac'] = function (b, n) { kmF()['lac' + n] = b.getAttribute('data-v'); };
    TOQUES['km-quem'] = function (b, n) { kmF()['quem' + n] = b.getAttribute('data-v'); };
    TOQUES['km-leg'] = function (b, n) { kmF()['leg' + n] = +b.getAttribute('data-v'); };
    TOQUES['km-ter'] = function (b, n) { kmF()['ter' + n] = +b.getAttribute('data-v'); };
    TOQUES['km-dir'] = function (b, n) { kmF()['dir' + n] = 1; };
    TOQUES['km-ord'] = function (b, n) {
      var F = kmF(); F.ord = F.ord || [];
      if (n === F.ord.length) { F.ord.push(n); F.ordErr = null; if (F.ord.length === momentos().length) S.__lm.sel = 0; }
      else F.ordErr = n;
    };
  }
  instalaFalas(); document.addEventListener('DOMContentLoaded', instalaFalas);
  window.WolfLegenda = { pinta: monta, trecho: trecho, estado: function () { return JSON.parse(JSON.stringify(E)); } };

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-leg-a]'); if (!b) return;
    var a = b.getAttribute('data-leg-a');
    if (a === 'cc') E.cc = !E.cc;
    else if (a === 'quem') { E.todos = !E.todos; if (E.todos || aluno()) E.cc = false; }   /* "só eu": some do aluno; de volta a "os dois": desliga nos dois, e o professor liga de novo */
    else if (a === 'alvo') { marcaDica(); E.aberta = { k: b.getAttribute('data-leg-k'), i: +b.getAttribute('data-leg-i') }; if (quadro) cmd(quadro, 'pauseVideo'); E.t = agora(); E.toc = false; }
    else if (a === 'resp' && E.aberta) E.resp[E.aberta.p] = 1;
    else if (a === 'de-novo' && E.aberta) { var c = D.cues[E.aberta.i]; E.aberta = null; if (quadro && c) { cmd(quadro, 'seekTo', [Math.max(0, c[0] - .4), true]); cmd(quadro, 'playVideo'); } }
    else if (a === 'segue') { E.aberta = null; if (quadro) cmd(quadro, 'playVideo'); }
    else if (a === 'tela') telaCheia();
    else if (a === 'vel') { E.lento = !E.lento; if (quadro) cmd(quadro, 'setPlaybackRate', [E.lento ? D.vel : 1]); }
    ultimo = ''; pintaFaixa();
  });

  var css = document.createElement('style');
  css.textContent = ''
    + '.km-mesa{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:22px;align-items:start;width:min(1240px,100%);margin:0 auto}'
    + '.km-esq{display:grid;gap:10px;min-width:0;justify-items:center}.km-esq>*{width:100%}.km-esq .video{width:min(100%,max(300px,calc((100vh / var(--zv,1) - 500px) * 1.778)))!important;margin:0 auto!important}.km-mesa>.km-carta,.km-mesa>.km-feita,.km-mesa>.km-dir{max-height:calc(100vh / var(--zv,1) - 250px);overflow-y:auto;scrollbar-width:thin}'
    + '.km-abas{display:grid;grid-template-columns:repeat(auto-fit,minmax(104px,1fr));gap:6px}.km-abas .km-aba{padding:6px 9px;gap:7px}.km-abas .km-aba b{font-size:13.5px;line-height:1.2}.km-abas .km-aba small{font-size:11px}'
    + '.km-aba{display:flex;align-items:center;gap:10px;width:100%;text-align:left;padding:7px 12px;border-radius:16px;border:1px solid var(--fio);background:var(--vidro);color:var(--t2);font:inherit;cursor:pointer;transition:border-color .2s,background .2s}'
    + '.km-aba em{flex:none;display:grid;place-items:center;width:26px;height:26px;border-radius:50%;font:900 13px var(--ui);font-style:normal;background:rgba(246,211,74,.14);color:#f6d34a}'
    + '.km-aba span{display:grid;min-width:0}.km-aba b{font:800 15px var(--ui);color:var(--t1)}.km-aba small{font:700 12px var(--ui);color:var(--t3)}'
    + '.km-aba.on{border-color:#f6d34a;background:rgba(246,211,74,.08)}.km-aba.on em{background:#f6d34a;color:#1b1530}'
    + '.km-aba:focus-visible,.km-todas:focus-visible{outline:2px solid #f6d34a;outline-offset:2px}'
    + '.km-todas{justify-self:start;padding:6px 2px;border:0;background:none;color:var(--t3);font:700 13px var(--ui);text-decoration:underline;text-underline-offset:4px;cursor:pointer}'
    + '.km-volta-p{margin:0 0 10px}'
    + '.km-carta{position:relative;display:grid;gap:14px;padding:22px 24px;border-radius:24px;background:linear-gradient(165deg,color-mix(in srgb,var(--noite) 88%,#2a2148),color-mix(in srgb,var(--noite) 96%,#000));border:1px solid rgba(246,211,74,.35);box-shadow:0 24px 60px -24px rgba(0,0,0,.7)}'
    + '.km-topo{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}.km-topo small{font:800 11.5px var(--ui);letter-spacing:.14em;color:#f6d34a}'
    + '.km-frase{margin:0;padding:0 0 0 18px;border-left:3px solid #f6d34a;font:italic 500 clamp(22px,1.9vw,30px)/1.32 Georgia,"Times New Roman",serif;color:var(--t1)}'
    + '.km-frase b{font-style:normal;font-weight:700;color:#1b1530;background:#f6d34a;border-radius:6px;padding:0 6px;box-decoration-break:clone;-webkit-box-decoration-break:clone}'
    + '.km-quem{margin:0;font:600 15px/1.5 var(--ui);color:var(--t2)}.km-quem b{color:var(--t1)}'
    + '.km-bloco,.km-formula,.km-tente{display:grid;gap:4px}'
    + '.km-bloco small,.km-formula small,.km-tente small{font:800 11px var(--ui);letter-spacing:.14em;color:var(--t3)}'
    + '.km-bloco p{margin:0;font:500 16px/1.55 var(--ui);color:var(--t1)}'
    + '.km-formula{padding:12px 14px;border-radius:14px;background:rgba(246,211,74,.07);border:1px dashed rgba(246,211,74,.45)}'
    + '.km-formula p{margin:0;font:700 17px/1.45 var(--ui);color:var(--t1)}.km-formula p b{color:#f6d34a}'
    + '.km-tente{padding:12px 14px;border-radius:14px;background:color-mix(in srgb,var(--tinta) 5%,transparent);border:1px solid var(--fio)}'
    + '.km-tente p{margin:0;font:600 16px/1.5 var(--ui);color:var(--t1)}.km-tente .pilula{justify-self:start;margin-top:4px}'
    + '.km-ex{font-weight:500!important;color:var(--t2)!important}.km-ex b{display:inline-block;margin-right:8px;font:800 11px var(--ui);letter-spacing:.12em;color:#86d9a6}'
    + '@media (max-width:900px){.km-mesa{grid-template-columns:1fr}}'
    + '@media (prefers-reduced-motion:reduce){.km-aba{transition:none}}'
    + '.km-pede{margin:0;font:600 15.5px/1.5 var(--ui);color:var(--t2)}.km-pede b{color:var(--t1)}'
    + '.km-dica{margin:0;font:700 14px var(--ui);color:#ff9aa8}'
    + '.km-gap{display:inline-block;min-width:110px;padding:0 8px;border-bottom:3px dashed var(--km,#f6d34a);font-style:normal;color:var(--t1)}'
    + '.km-gap.ok{border-bottom:0;background:var(--km,#f6d34a);color:#1b1530;border-radius:6px}.km-gap.nao{border-bottom-color:#ff9aa8;color:#ff9aa8;text-decoration:line-through}'
    + '.km-ops{display:flex;flex-wrap:wrap;gap:8px}'
    + '.km-op{min-height:44px;padding:0 18px;border-radius:999px;border:1.5px solid var(--fio2);background:var(--vidro);color:var(--t1);font:800 15px var(--ui);cursor:pointer}'
    + '.km-op:hover{border-color:var(--km,#f6d34a)}.km-op.nao{border-color:#ff9aa8;color:#ff9aa8}'
    + '.km-foto{position:relative;aspect-ratio:16/10;border-radius:18px;background:#16112a center/cover;border:1px solid var(--fio);overflow:hidden}'
    + '.km-ponto{position:absolute;transform:translate(-50%,-50%);display:grid;justify-items:center;gap:4px;border:0;background:none;padding:0;cursor:pointer}'
    + '.km-ponto b{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:rgba(13,10,26,.75);border:2px solid var(--km,#f6d34a);color:#fff;font:900 14px var(--ui);box-shadow:0 0 0 6px color-mix(in srgb,var(--km,#f6d34a) 22%,transparent)}'
    + '.km-ponto span{padding:2px 8px;border-radius:99px;background:rgba(13,10,26,.8);color:#fff;font:700 12px var(--ui);white-space:nowrap}'
    + '.km-ponto.on b{background:var(--km,#f6d34a);color:#1b1530}'
    + '.km-legs{display:grid;gap:8px}'
    + '.km-leg{display:grid;gap:4px;text-align:left;padding:12px 14px;border-radius:14px;border:1.5px solid var(--fio2);background:var(--vidro);color:var(--t1);font:600 16px/1.45 var(--ui);cursor:pointer}'
    + '.km-leg small{font:800 11px var(--ui);letter-spacing:.12em;color:var(--t3)}'
    + '.km-leg.ok{border-color:#86d9a6;background:rgba(134,217,166,.08)}.km-leg.nao{opacity:.6}.km-leg.esc{box-shadow:0 0 0 3px color-mix(in srgb,var(--km,#f6d34a) 30%,transparent)}'
    + '.km-term{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.km-term span{font:700 13px var(--ui);color:var(--t3)}'
    + '.km-grau{width:44px;height:44px;border-radius:12px;border:1.5px solid var(--fio2);cursor:pointer}'
    + '.km-grau.g0{background:rgba(134,201,240,.25)}.km-grau.g1{background:rgba(134,201,240,.45)}.km-grau.g2{background:rgba(246,211,74,.4)}.km-grau.g3{background:rgba(236,106,82,.45)}.km-grau.g4{background:rgba(236,106,82,.75)}'
    + '.km-grau.on{border-color:#fff;box-shadow:0 0 0 3px rgba(255,255,255,.35)}'
    + '.km-pecas{display:flex;flex-wrap:wrap;gap:8px}'
    + '.km-peca{display:inline-flex;align-items:center;gap:8px;min-height:46px;padding:0 16px;border-radius:14px;border:1.5px solid var(--fio2);background:var(--vidro);color:var(--t1);font:800 15px var(--ui);cursor:pointer}'
    + '.km-peca em{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:var(--km,#f6d34a);color:#1b1530;font:900 12px var(--ui);font-style:normal}'
    + '.km-peca.ja{opacity:.75;cursor:default}.km-peca.nao{border-color:#ff9aa8;animation:km-treme .3s}'
    + '@keyframes km-treme{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}'
    + '.km-feita{display:grid;gap:12px;min-width:0}.km-revela{justify-self:start}'
    + '@media (prefers-reduced-motion:reduce){.km-peca.nao{animation:none}}'
    + '.km-mesa,.km-f-linha{--km:#f6d34a}'
    + '.km-mesa .km-formula,.km-f-linha .km-formula{background:color-mix(in srgb,var(--km) 8%,transparent);border-color:color-mix(in srgb,var(--km) 45%,transparent)}.km-mesa .km-formula p b,.km-f-linha .km-formula p b{color:var(--km)}.km-mesa .km-carta,.km-f-linha .km-carta{border-color:color-mix(in srgb,var(--km) 35%,transparent)}'
    + '.km-mesa .km-aba.on,.km-f-linha .km-marca.on b{border-color:var(--km)}'
    + '.km-f-roteiro .km-dir{display:grid;gap:14px;min-width:0}'
    + '.km-cenas{display:flex;flex-wrap:wrap;gap:8px}'
    + '.km-cn{display:grid;gap:2px;padding:8px 14px;border-radius:10px;border:1px solid var(--fio);background:var(--vidro);color:var(--t3);font:800 12px/1.2 \"Courier New\",Courier,monospace;letter-spacing:.08em;cursor:pointer;text-align:left}'
    + '.km-cn small{font:600 12.5px var(--ui);letter-spacing:0;color:var(--t2)}.km-cn.on{border-color:var(--km);color:var(--km)}'
    + '.km-roteiro{position:relative;padding:22px 30px 26px;border-radius:6px;background:#f3ecdc;color:#221a12;box-shadow:0 24px 50px -20px rgba(0,0,0,.7),inset 0 0 0 1px rgba(0,0,0,.06);font-family:\"Courier New\",Courier,monospace}'
    + '.km-roteiro .km-topo small{color:#6b5a3e;letter-spacing:.06em}.km-roteiro .lf-ouve{background:#221a12;color:#f3ecdc;border-color:transparent}'
    + '.km-rt-quem{margin:18px 0 0;text-align:center;font:700 17px \"Courier New\",Courier,monospace;letter-spacing:.06em}'
    + '.km-rt-par{margin:2px auto 0;max-width:34ch;text-align:center;font:italic 14.5px/1.45 \"Courier New\",Courier,monospace;color:#5c4d36}'
    + '.km-rt-fala{margin:10px auto 0;max-width:36ch;text-align:center;font:600 clamp(18px,1.6vw,23px)/1.5 \"Courier New\",Courier,monospace}'
    + '.km-rt-fala b{background:color-mix(in srgb,var(--km) 70%,#fff);border-radius:3px;padding:0 4px}'
    + '.km-margem{border-color:color-mix(in srgb,var(--km) 35%,transparent)}'
    + '.km-f-linha{display:grid;gap:14px;width:min(1180px,100%);margin:0 auto}'
    + '#palco .km-video-largo .video{width:min(640px,100%,calc((100vh - 470px) * 1.778));margin:0 auto}'
    + '.km-linha{position:relative;height:64px;margin:4px 18px 0}'
    + '.km-trilho{position:absolute;left:0;right:0;top:14px;height:4px;border-radius:2px;background:color-mix(in srgb,var(--km) 30%,transparent)}'
    + '.km-marca{position:absolute;top:0;transform:translateX(-50%);display:grid;justify-items:center;gap:4px;border:0;background:none;padding:0;cursor:pointer;color:var(--t3)}'
    + '.km-marca b{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--noite);border:2px solid color-mix(in srgb,var(--km) 55%,transparent);font:900 13px var(--ui);color:var(--t1)}'
    + '.km-marca span{display:none;font:700 12px var(--ui);white-space:nowrap}.km-marca.on span{display:block}'
    + '.km-marca.on b{background:var(--km);color:#1b1530}.km-marca.on span{color:var(--t1)}'
    + '.km-deitada{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:22px;border-color:color-mix(in srgb,var(--km) 40%,transparent)}'
    + '.km-dl-esq,.km-dl-dir{display:grid;gap:12px;align-content:start;min-width:0}'
    + '.km-mesa .km-frase,.km-f-linha .km-frase{border-left-color:var(--km)}.km-mesa .km-frase b,.km-f-linha .km-frase b{background:var(--km)}'
    + '.km-mesa .km-topo small,.km-f-linha .km-topo small{color:var(--km)}.km-mesa .km-aba.on em{background:var(--km)}'
    + '@media (max-width:900px){.km-deitada{grid-template-columns:1fr}.km-marca.on span{display:none}.km-roteiro{padding:18px 18px 22px}}'
    /* E · o jogo dos momentos (21/10/2026): o Wolf é a orbe; enquanto o jogo está aberto, a legenda do vídeo some (entregaria a resposta) */
    + '.km-jogo .km-aba.feito em{background:#c6f36b;color:#1b2405}'
    + '.km-esconde .leg-sobre .leg-linhas{visibility:hidden}'
    + '.km-diz{display:flex;gap:10px;align-items:stretch}'
    + '.km-mic{flex:none;width:52px;min-height:52px;border-radius:14px;border:1.5px solid var(--fio2);background:var(--vidro);display:grid;place-items:center;cursor:pointer}'
    + '.km-mic span{width:12px;height:20px;border-radius:7px;background:var(--t1)}.km-mic.on{background:#ec6a52;border-color:#ec6a52;animation:km-pulsa 1.2s infinite}.km-mic.on span{background:#fff}.km-mic.sem{display:none}'
    + '@keyframes km-pulsa{50%{box-shadow:0 0 0 8px rgba(236,106,82,.2)}}'
    + '.km-campo{flex:1;min-width:0;resize:vertical;min-height:56px;padding:10px 14px;border-radius:14px;border:1.5px solid var(--fio2);background:color-mix(in srgb,var(--noite) 80%,#000);color:var(--t1);font:600 17px/1.45 var(--ui)}'
    + '.km-campo:focus{outline:2px solid var(--km);outline-offset:1px}'
    + '.km-bts{display:flex;flex-wrap:wrap;gap:8px}'
    + '.km-voce{margin:0;font:italic 500 18px/1.4 Georgia,"Times New Roman",serif;color:var(--t2)}'
    + '.km-wolf{display:grid;grid-template-columns:auto minmax(0,1fr);gap:12px;align-items:start;padding:12px 14px;border-radius:16px;background:linear-gradient(135deg,rgba(139,108,255,.2),rgba(52,45,79,.45));border:1px solid rgba(201,184,255,.32)}'
    + '.km-wolf p{margin:0;font:600 16px/1.5 var(--ui);color:var(--t1)}.km-wolf p b{color:#c9b8ff}.km-wolf.pensa p{color:var(--t3)}'
    + '.km-orbe{width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff 0 8%,#d9ccff 18%,#8b6cff 55%,#3b2a7a 100%);box-shadow:0 0 14px rgba(139,108,255,.7)}'
    + '.km-wolf.pensa .km-orbe{animation:km-respira 1.1s ease-in-out infinite}@keyframes km-respira{50%{transform:scale(.82);opacity:.7}}'
    + '.km-nota{display:inline-block;margin-top:6px;padding:2px 10px;border-radius:999px;font:800 12px var(--ui)}'
    + '.km-nota.ok{background:rgba(198,243,107,.18);color:#c6f36b}.km-nota.quase{background:rgba(240,184,102,.18);color:#f0b866}.km-nota.nao{background:rgba(255,154,168,.16);color:#ff9aa8}'
    + '.km-res{gap:10px;padding:16px 18px}'
    + '.km-mentira{margin:0;font:italic 500 clamp(20px,1.7vw,27px)/1.7 Georgia,"Times New Roman",serif;color:var(--t1)}'
    + '.km-pal{font:inherit;color:inherit;background:none;border:0;border-radius:6px;padding:0 2px;cursor:pointer}.km-pal:hover{background:color-mix(in srgb,var(--km) 18%,transparent)}'
    + '.km-pal.nao{background:rgba(255,154,168,.18);color:#ff9aa8}.km-pal.ok{background:rgba(198,243,107,.16);color:#c6f36b;cursor:default}.km-pal.ok s{color:#ff9aa8;text-decoration-thickness:2px}'
    + '.km-conta{margin:0;font:800 13px var(--ui);color:var(--t3);letter-spacing:.06em}'
    + '.km-kar{margin:0;font:700 clamp(20px,1.7vw,27px)/1.55 var(--ui);color:var(--t3)}.km-kar span{transition:color .12s}.km-kar span.dita{color:var(--t1)}'
    + '.km-bingo{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}'
    + '.km-bg{min-height:54px;padding:6px;border-radius:14px;border:1.5px solid var(--fio2);background:var(--vidro);color:var(--t1);font:800 16px var(--ui);cursor:pointer}.km-bg:hover{border-color:var(--km)}'
    + '.km-bg.ok{background:rgba(198,243,107,.16);border-color:#c6f36b;color:#c6f36b;cursor:default}.km-bg.nao{border-color:#ff9aa8;color:#ff9aa8;animation:km-treme .3s}.km-bg.cedo{border-color:#f0b866;color:#f0b866}'
    + '.km-chat{display:grid;gap:10px}'
    + '.km-eu{justify-self:end;max-width:88%;margin:0;padding:10px 14px;border-radius:16px 16px 4px 16px;background:rgba(236,106,82,.14);border:1px solid rgba(236,106,82,.32);font:italic 500 16px/1.45 var(--ui);color:var(--t1)}'
    + '.km-melhor{display:grid;gap:2px;margin-top:8px;padding:8px 10px;border-radius:10px;background:rgba(198,243,107,.08);border:1px dashed rgba(198,243,107,.4);font-weight:700;color:#c6f36b}.km-melhor small{font:800 10.5px var(--ui);letter-spacing:.12em;color:var(--t3)}'
    + '@media (prefers-reduced-motion:reduce){.km-mic.on,.km-wolf.pensa .km-orbe,.km-bg.nao{animation:none}.km-kar span{transition:none}}'
    + '.leg{width:min(1120px,100%);margin:10px auto 0;display:grid;gap:8px;position:relative}'
    + '.leg.desligada .leg-ctrl{justify-content:flex-start}'
    + '.leg-ctrl{display:flex;gap:8px;flex-wrap:wrap;align-items:center}'
    + '.leg-cc,.leg-quem{display:inline-flex;align-items:center;gap:8px;min-height:36px;padding:0 14px;border-radius:999px;border:1px solid var(--fio2);background:var(--vidro);font:800 13px var(--ui);color:var(--t2)}'
    + '.leg-cc b{font:900 10.5px var(--ui);padding:1px 5px;border:2px solid currentColor;border-radius:4px;letter-spacing:.04em}'
    + '.leg-cc.on{background:var(--ac2,var(--ac));border-color:transparent;color:#140f22}'
    + '.leg-quem{color:var(--t3)}'
    + '.leg-vel{display:inline-flex;align-items:center;gap:8px;min-height:36px;padding:0 14px;border-radius:999px;border:1px solid var(--fio2);background:var(--vidro);font:800 13px var(--ui);color:var(--t2)}.leg-vel.on{border-color:var(--ac2,var(--ac));color:var(--ac2,var(--ac))}html.wl-sala-aluno .leg-ctrl .leg-vel{display:none}'   /* 20/10/2026 · velocidade do A1: só o professor vê */
    + '.leg-linhas{border-radius:18px;background:color-mix(in srgb,var(--noite) 78%,transparent);border:1px solid var(--fio);padding:8px 18px 10px;text-align:center}'
    + '#palco .video{width:min(1120px,100%,max(560px,calc((100vh / var(--zv,1) - 440px) * 1.778)))}'   /* 09/10: nunca menor que 560 px (a sala do aluno no tablet deixava o vídeo do tamanho de um selo) */
    + '#palco.com-leg .video{width:min(1120px,100%,max(640px,calc((100vh / var(--zv,1) - 300px) * 1.778)))}'
    + '.leg-ant{margin:0;font:600 clamp(14px,1.05vw,17px)/1.4 var(--ui);color:var(--t3);min-height:1.4em}'
    + '.leg-agora{margin:4px 0;font:700 clamp(20px,1.7vw,30px)/1.35 var(--ui);color:var(--t1);min-height:1.35em}'
    + '.leg-agora .vem{opacity:.42}.leg-agora .dita{opacity:1;transition:opacity .12s}'
    + '.leg-alvo{font:inherit;color:#1b1530;background:#f6d34a;border:0;border-radius:8px;padding:0 7px;box-shadow:0 0 0 3px rgba(246,211,74,.22);cursor:pointer}'
    + '.leg-alvo .vem,.leg-alvo.vem{opacity:1}.leg-ant .leg-alvo{background:rgba(246,211,74,.25);color:inherit;box-shadow:none}'
    + '.leg-alvo:focus-visible{outline:3px solid #fff;outline-offset:2px}'
    + '.leg-pausa{color:var(--t3)}'
    + '.leg-expl,.leg-selah{position:relative;margin:4px auto 0;width:min(560px,100%);text-align:left;border-radius:18px;background:color-mix(in srgb,var(--noite) 92%,#000);border:1.5px solid #f6d34a;box-shadow:0 24px 50px rgba(0,0,0,.55);padding:16px 18px}'
    + '.leg-expl small,.leg-selah small{font:800 11.5px var(--ui);letter-spacing:.12em;color:#f6d34a}'
    + '.leg-expl h3{margin:4px 0 10px;font:800 22px var(--ui);color:var(--t1)}'
    + '.leg-form{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}.leg-form span{padding:6px 11px;border-radius:10px;font:800 15px var(--ui);background:color-mix(in srgb,var(--tinta) 8%,transparent)}.leg-form .y{background:#f6d34a;color:#1b1530}'
    + '.leg-expl p,.leg-selah p{margin:6px 0;font:500 15.5px/1.5 var(--ui);color:var(--t2)}.leg-fala{font-style:italic;color:var(--t1)!important}'
    + '.leg-err{display:grid;gap:3px;margin-top:8px;font:600 14.5px var(--ui)}.leg-err .x{color:#ff8fa3}.leg-err .v{color:#7ee0a1}'
    + '.leg-bts{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}'
    + '.leg-selah .q{font:700 19px/1.4 var(--ui);color:var(--t1)}.leg-selah .r{color:var(--t2)}'
    /* G · A VELA (WOLFAITH): o vídeo de um lado, a fala do outro, uma por vez, devagar, como quem lê um versículo */
    + '.vela-palco{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:28px;align-items:center;width:min(1500px,100%);margin:0 auto}'
    + '.vela-palco .video{width:100%}'
    + '.leg[data-leg-modo=vela]{width:100%;margin:0;align-content:center}'
    + '.leg[data-leg-modo=vela] .leg-linhas{position:relative;overflow:hidden;padding:34px 30px 30px;border-radius:22px;background:radial-gradient(70% 80% at 50% 70%,color-mix(in srgb,var(--ac) 16%,transparent),transparent 70%),color-mix(in srgb,var(--noite) 85%,transparent)}'
    + '.leg[data-leg-modo=vela] .leg-linhas::before{content:"";position:absolute;left:50%;top:12px;width:8px;height:14px;margin-left:-4px;border-radius:50% 50% 45% 45%;background:radial-gradient(circle at 50% 70%,#fff3cf,var(--ac) 70%);box-shadow:0 0 18px 6px color-mix(in srgb,var(--ac) 45%,transparent)}'
    + '.leg[data-leg-modo=vela] .leg-ant{font:400 italic clamp(16px,1.2vw,20px)/1.4 var(--disp,Georgia,serif);color:var(--t3);margin-top:10px}'
    + '.leg[data-leg-modo=vela] .leg-agora{font:400 clamp(28px,2.5vw,46px)/1.25 var(--disp,Georgia,serif);color:var(--t1);margin:10px 0 0;text-shadow:0 0 28px color-mix(in srgb,var(--ac) 30%,transparent)}'
    + '.leg[data-leg-modo=vela] .leg-agora .vem{opacity:.28}'
    + '.leg[data-leg-modo=vela] .leg-alvo{font-family:var(--ui);font-weight:800;font-size:.82em;vertical-align:.06em}'
    + '.leg[data-leg-modo=vela] .leg-selah{border-color:color-mix(in srgb,var(--ac) 70%,transparent);width:100%}'
    + '.leg[data-leg-modo=vela] .leg-selah small{color:var(--ac)}'
    + '@media (max-width:1100px){.vela-palco{grid-template-columns:1fr;gap:14px}.leg[data-leg-modo=vela] .leg-linhas{padding:26px 16px 18px}}'
    + '.leg-tela-bt{display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:0 14px;border-radius:999px;border:1px solid var(--fio2);background:var(--vidro);font:800 13px var(--ui);color:var(--t1);margin-left:auto}'
    /* a caixa em tela cheia: fundo preto, o vídeo o maior possível, a legenda por cima, embaixo */
    + '.leg-tela{position:relative;background:#000!important;display:flex!important;align-items:center;justify-content:center;padding:0!important;margin:0!important;max-width:none!important;width:100%;height:100%;border-radius:0!important}'
    + '.leg-tela.leg-falsa{position:fixed;inset:0;z-index:2147483000;width:100vw;height:100dvh}'
    + 'html.leg-trava,html.leg-trava body{overflow:hidden}'
    + '.leg-tela>*:not(.video):not(.leg){display:none!important}'
    + '.leg-tela .video{width:min(100vw,calc(100dvh * 1.778))!important;max-width:none!important;max-height:100dvh;aspect-ratio:16/9;margin:0!important;border:0!important;border-radius:0!important;box-shadow:none!important}'
    + '.leg-tela .leg{position:absolute;left:0;right:0;bottom:3.5vh;width:min(1500px,94vw);margin:0 auto;gap:6px;pointer-events:none}'
    + '.leg-tela .leg>*{pointer-events:auto}'
    + '.leg-tela .leg-ctrl{position:fixed;top:14px;right:14px;left:auto;justify-content:flex-end;opacity:.55;transition:opacity .2s}.leg-tela .leg-ctrl:hover{opacity:1}'
    + '.leg-tela .leg-linhas{background:rgba(0,0,0,.62);border:0;padding:10px 26px 12px}'
    + '.leg-tela .leg-ant{font-size:clamp(16px,1.4vw,24px);color:rgba(255,255,255,.55)}'
    + '.leg-tela .leg-agora{font-size:clamp(26px,2.9vw,52px);color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.8)}'
    + '.leg-tela .leg-expl,.leg-tela .leg-selah{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(620px,92vw);z-index:3}'
    + '.video.leg-tem{position:relative}'
    + '.leg-sobre{position:absolute;left:0;right:0;bottom:5%;z-index:3;display:grid;justify-items:center;align-content:end;gap:8px;padding:0 4%;pointer-events:none;text-align:center}'
    + '.leg-sobre.aberta{top:0;bottom:0;align-content:center;background:rgba(0,0,0,.5)}'
    + '.leg-sobre .leg-linhas{background:rgba(0,0,0,.66);border:0;border-radius:12px;padding:6px 18px 8px;max-width:94%}'
    + '.leg-sobre .leg-ant{font-size:clamp(12px,.95vw,16px);color:rgba(255,255,255,.62);min-height:0}'
    + '.leg-sobre .leg-agora{margin:2px 0 0;font-size:clamp(17px,1.55vw,28px);color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.85);min-height:0}'
    + '.leg-sobre .leg-alvo,.leg-sobre button,.leg-sobre .leg-expl,.leg-sobre .leg-selah{pointer-events:auto}'
    + '.leg-sobre .leg-expl,.leg-sobre .leg-selah{margin:0;width:min(560px,92%);max-height:92%;overflow:auto}'
    + '.leg-sobre .leg-expl,.leg-sobre .leg-selah{padding:12px 16px}.leg-sobre .leg-expl h3{margin:2px 0 6px;font-size:17px}.leg-sobre .leg-form{margin-bottom:6px}.leg-sobre .leg-form span{padding:3px 8px;font-size:13px}.leg-sobre .leg-expl p,.leg-sobre .leg-selah p{margin:3px 0;font-size:13.5px;line-height:1.4}.leg-sobre .leg-err{margin-top:4px;font-size:13px;gap:1px}.leg-sobre .leg-bts{margin-top:8px}.leg-sobre .leg-bts .btn{min-height:34px;padding:0 14px;font-size:13.5px}'
    + '.leg-dica{position:absolute;right:3%;top:-14%;padding:6px 14px;border-radius:999px;background:#f6d34a;color:#1b1530;font:800 13px var(--ui);box-shadow:0 8px 20px rgba(0,0,0,.45);animation:leg-dica 1.6s ease-in-out infinite}'
    + '@keyframes leg-dica{50%{transform:translateY(-3px)}}'
    + '.leg.so-ctrl{margin-top:8px}.leg.so-ctrl .leg-ctrl{justify-content:flex-start}'
    + '.leg-tela .leg.so-ctrl{top:2.5vh;bottom:auto;left:auto;right:2.5vw;width:auto;margin:0;pointer-events:auto}'
    + '.leg-tela .leg.so-ctrl .leg-cc,.leg-tela .leg.so-ctrl .leg-quem{display:none}'
    + '.leg-tela .leg-sobre .leg-agora{font-size:clamp(26px,2.9vw,52px)}.leg-tela .leg-sobre .leg-ant{font-size:clamp(16px,1.4vw,24px)}'
    + '@media (max-width:560px){.leg-sobre{bottom:3%}.leg-sobre .leg-linhas{padding:4px 10px 6px}.leg-sobre .leg-agora{font-size:15px}.leg-sobre .leg-ant{display:none}.leg-dica{top:-22%;font-size:11px}.leg-sobre.aberta{position:fixed;top:auto;left:0;right:0;bottom:0;z-index:80;padding:0;background:none}.leg-sobre.aberta .leg-expl,.leg-sobre.aberta .leg-selah{width:100%;max-height:70vh;border-radius:18px 18px 0 0;box-shadow:0 -12px 40px rgba(0,0,0,.6)}}'
    + '.lf-mesa{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:24px;align-items:start}'
    + '.lf-lista{display:grid;gap:10px;align-content:start;max-height:min(64vh,620px);overflow-y:auto;padding-right:4px}'
    + '.lf-fala{display:flex;gap:14px;align-items:center;text-align:left;padding:12px 16px;border-radius:16px;border:1.5px solid var(--fio2);background:var(--vidro);color:var(--t1);font:700 clamp(16px,1.2vw,20px)/1.35 var(--ui);cursor:pointer}'
    + '.lf-fala em{flex:none;font:800 12px var(--ui);font-style:normal;letter-spacing:.06em;color:var(--t3)}'
    + '.lf-fala .y,.lf-frase .y{background:#f6d34a;color:#1b1530;border-radius:6px;padding:0 5px}'
    + '.lf-fala.on{border-color:#f6d34a;background:color-mix(in srgb,#f6d34a 9%,transparent)}'
    + '.lf-lado{display:grid;gap:14px}.lf-lado .video{width:min(100%,max(320px,calc((100vh / var(--zv,1) - 540px) * 1.778)))!important;margin:0!important}'
    + '.lf-expl{padding:16px 18px;border-radius:var(--r2);display:grid;gap:6px;border:1.5px solid #f6d34a}'
    + '.lf-expl small{font:800 11.5px var(--ui);letter-spacing:.12em;color:#f6d34a}'
    + '.lf-expl h3{margin:0;font:800 20px var(--ui)}.lf-frase{margin:0;font:700 18px/1.4 var(--ui);color:var(--t1)}'
    + '.lf-topo{display:flex;align-items:center;justify-content:space-between;gap:10px}.lf-ouve{min-height:36px;padding:0 16px;font-size:14px}.c-falas .leg.so-ctrl .leg-quem{display:none}.c-falas .leg.so-ctrl .leg-ctrl{justify-content:flex-end}'   /* 16/10/2026 · a Line by Line também tem a tela cheia com a legenda (o Carlos: não funcionava na The Second Mile) */
    + '@media (max-width:900px){.lf-mesa{grid-template-columns:1fr}.lf-lado{order:-1}}'
    + 'html.wl-sala-aluno .leg-ctrl .leg-cc,html.wl-sala-aluno .leg-ctrl .leg-quem{display:none}html.wl-sala-aluno .leg-ctrl{justify-content:flex-end}html.wl-sala-aluno .leg-tela-bt{position:fixed;right:18px;bottom:18px;z-index:60;min-height:52px;padding:0 22px;font-size:17px;background:var(--ac,#7fc8f8);border-color:transparent;color:#06121c;box-shadow:0 12px 30px rgba(0,0,0,.55)}'   /* 09/10: o aluno vê só o botão de tela cheia (pedido do Carlos) */
    + '@media (max-width:560px){.leg-linhas{padding:10px 12px}.leg-agora{font-size:19px}.leg-expl,.leg-selah{padding:14px}}'
    /* F · a linha nova (24/10/2026): escuro, letra grande para a tela larga, poucas coisas por vez */
    + '.ln-mesa{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:26px;align-items:start;width:min(1560px,100%);margin:0 auto}'
    + '.ln-vid{display:grid;gap:8px;min-width:0;justify-items:center}.ln-vid>*{width:100%}'
    + '.ln-vid .video{width:min(100%,max(300px,calc((100vh / var(--zv,1) - 400px) * 1.778)))!important;margin:0 auto!important}'
    + '.ln-vid .leg.so-ctrl .leg-quem{display:none}.ln-vid .leg.so-ctrl .leg-ctrl{justify-content:flex-end}'
    + '.ln-lado{display:grid;gap:12px;min-width:0;align-content:start;max-height:calc(100vh / var(--zv,1) - 240px);overflow-y:auto;scrollbar-width:thin;padding:2px 4px 18px 2px;scroll-padding-bottom:18px}'
    + '.ln-carta{display:grid;gap:16px;padding:24px 26px;border-radius:24px;background:linear-gradient(165deg,color-mix(in srgb,var(--noite,#120f22) 88%,#2a2148),color-mix(in srgb,var(--noite,#120f22) 96%,#000));border:1px solid rgba(246,211,74,.35);box-shadow:0 24px 60px -24px rgba(0,0,0,.7)}'
    + '.ln-topo{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}'
    + '.ln-k{font:800 12.5px var(--ui);letter-spacing:.14em;color:#f6d34a}'
    + '.ln-grande{margin:0;font:800 clamp(24px,2vw,36px)/1.25 var(--ui);color:var(--t1)}'
    + '.ln-sub{margin:0;font:600 clamp(16px,1.2vw,20px)/1.5 var(--ui);color:var(--t2)}'
    + '.ln-frase{margin:0;font:700 clamp(21px,1.7vw,30px)/1.4 var(--ui);color:var(--t1)}'
    + '.ln-y{font:inherit;line-height:1.2;color:#1b1530;background:#f6d34a;border:0;border-radius:7px;padding:0 7px;cursor:pointer;box-decoration-break:clone;-webkit-box-decoration-break:clone}'
    + '.ln-y:hover,.ln-y.on{box-shadow:0 0 0 3px rgba(246,211,74,.35)}.ln-y:focus-visible,.ln-op:focus-visible,.ln-play:focus-visible{outline:2px solid #f6d34a;outline-offset:3px}'
    + '.ln-nw{white-space:nowrap}.ln-amarela{color:#1b1530;background:#f6d34a;border-radius:7px;padding:0 7px}'
    + '.ln-buraco{display:inline-block;min-width:3.4em;border-bottom:3px solid #f6d34a;color:transparent;line-height:1.05;user-select:none}'
    + '.ln-ops{display:grid;gap:10px}.ln-ops.dois{grid-template-columns:1fr 1fr}.ln-ops.tres-col{grid-template-columns:repeat(3,minmax(0,1fr))}'
    + '.ln-op{min-height:60px;padding:12px 18px;border-radius:16px;border:1.5px solid var(--fio2,rgba(255,255,255,.2));background:var(--vidro,rgba(255,255,255,.04));color:var(--t1);font:800 clamp(18px,1.4vw,24px)/1.3 var(--ui);cursor:pointer;text-align:center;transition:border-color .2s,background .2s}'
    + '.ln-op.frase{text-align:left;font-weight:700;font-size:clamp(17px,1.3vw,22px);min-height:54px;padding:10px 16px}.ln-op.vf{letter-spacing:.08em;min-height:68px}'
    + '.ln-op:hover{border-color:#f6d34a}.ln-op.ok{border-color:#5fd39a;background:rgba(95,211,154,.13)}'
    + '.ln-op.nao{border-color:rgba(255,120,120,.55);background:rgba(255,120,120,.07);color:var(--t3);text-decoration:line-through;cursor:default}'
    + '.ln-msg{margin:0;font:800 clamp(18px,1.4vw,24px)/1.4 var(--ui)}.ln-msg.ok{color:#6fe0a8}.ln-msg.nao{color:#ff9a9a}'
    + '.ln-pontos{display:flex;gap:7px}.ln-pontos i{width:30px;height:8px;border-radius:99px;background:rgba(255,255,255,.14)}.ln-pontos i.agora{background:#f6d34a}.ln-pontos i.ok{background:#5fd39a}.ln-pontos i.nao{background:#ff8a8a}'
    + '.ln-linha{display:grid;grid-template-columns:auto minmax(0,1fr);gap:12px 16px;align-items:center;padding:16px 20px;border-radius:20px;border:1.5px solid var(--fio2,rgba(255,255,255,.2));background:var(--vidro,rgba(255,255,255,.04))}'
    + '.ln-linha.on{border-color:#f6d34a;background:color-mix(in srgb,#f6d34a 7%,transparent)}.ln-linha.mini{padding:10px 14px;border-radius:16px}.ln-linha.mini .ln-frase{font-size:clamp(17px,1.25vw,21px)}.ln-linha.mini .ln-play{width:40px;height:40px;font-size:14px}'
    + '.ln-play{flex:none;width:52px;height:52px;border-radius:50%;border:0;background:#f6d34a;color:#1b1530;font:900 18px var(--ui);cursor:pointer;display:grid;place-items:center;padding:0 0 0 3px}'
    + '.ln-expl{grid-column:2;display:grid;gap:8px}.ln-expl p{margin:0;font:600 clamp(16px,1.2vw,20px)/1.5 var(--ui);color:var(--t2)}.ln-expl p b{color:var(--t1)}'
    + '.ln-voce b{font:800 11.5px var(--ui);letter-spacing:.14em;color:#f6d34a;margin-right:10px}'
    + '.ln-acoes{display:flex;gap:10px;flex-wrap:wrap;align-items:center}.ln-bt{min-height:50px;padding:0 22px;font-size:17px}.ln-lento.on{border-color:#f6d34a;color:#f6d34a}'
    + '.ln-prova{margin:0;padding-left:16px;border-left:3px solid #f6d34a;font:italic 600 clamp(17px,1.3vw,22px)/1.45 var(--ui);color:var(--t2)}'
    + '.ln-link{justify-self:start;padding:4px 2px;border:0;background:none;color:var(--t3);font:700 14px var(--ui);text-decoration:underline;text-underline-offset:4px;cursor:pointer}'
    + '.ln-semcc .leg-sobre,.ln-semcc .leg-cc,.ln-semcc .leg-quem{display:none!important}.ln-semcc .leg-ctrl{justify-content:flex-end}'
    + '.ln-f-tres.ln-p0{grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);align-items:center}'
    + '.ln-f-tres.ln-p1{grid-template-columns:minmax(0,1fr) minmax(0,1.2fr)}.ln-f-tres.ln-p1 .ln-frase{font-size:clamp(19px,1.35vw,26px)}.ln-f-tres.ln-p1 .ln-linha{padding:12px 18px}'
    + '@media (max-width:900px){.ln-mesa,.ln-f-tres.ln-p0,.ln-f-tres.ln-p1{grid-template-columns:1fr}.ln-lado{max-height:none;overflow:visible}.ln-ops.tres-col{grid-template-columns:1fr}}'
    + '@media (max-width:560px){.ln-carta{padding:18px 16px;gap:12px}.ln-linha{padding:12px 14px;gap:10px 12px}.ln-play{width:44px;height:44px}.ln-expl{grid-column:1/-1}.ln-ops.dois{gap:8px}}'
    + '@media (prefers-reduced-motion:reduce){.ln-op{transition:none}}';
  document.head.appendChild(css);
  requestAnimationFrame(laco);
})();
