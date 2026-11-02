/* 23/10/2026: aula sem --ac (chassi antigo da WOLFLIX) deixava os botões cheios invisíveis; empresta o --am */
;(function(){try{var r=document.documentElement,c=getComputedStyle(r);if(!c.getPropertyValue('--ac').trim()){r.style.setProperty('--ac',c.getPropertyValue('--am').trim()||'#f0b866');}}catch(e){}})();
/* ============================================================
   KIT LIVE CLASS · AS PALAVRAS ANTES DO VÍDEO (PRE-TEACHING)   09/10/2026
   Ideia do Carlos (09/10): ensinar as palavras importantes ANTES do vídeo,
   com formatos que variam entre as aulas. Decisão dele: todos os formatos
   do catálogo, menos desenhar/mímica, e mais o clássico "ligue as colunas".
   Uma cena { k: 'palavras' } no L da aula. Os dados vêm de
   window.WL_PALAVRAS (palavras-dados.js da aula):
     { fmt: ['colunas', 'vida'],            // 1 a 3 formatos, nessa ordem
       p: [ { w: 'survivors', m: 'people who are still alive after…',
              fala: 'The Empire is hunting Jedi survivors.', s: 11,
              vida: 'Do you know a story about survivors?',
              sil: ['sur','VI','vors'], forte: 1, foto: 'img-da-aula' }, … ],   // 4 a 6 palavras
       intruso: { ops: [...], certo: 3, por: '…' },
       grupos: { caixas: [['bom','THE JEDI SIDE'], …], lugar: { 'survivors': 'bom', … } },
       vf: [['frase', true|false, 'correção'], …],
       escada: [['fight','struggle','grapple with'], …],
       junto: { f: 'I struggled ___ the exam.', ops: ['with','at','for'], certo: 0, por: '…' },
       fim: 'Now watch: listen for the five words.' }
   Estado em S.__pp (o fio leva ao aluno); toques "wpp-…". Sem setTimeout:
   o erro fica marcado até o próximo toque, igual nos dois lados da sala.
   ============================================================ */
(function () {
  var D = window.WL_PALAVRAS;
  if (!D || typeof R === 'undefined') return;
  var P = D.p || [];
  if (window.WL_SEM_LETRA) P.forEach(function (p) { p.fala = '… ' + p.w + ' …'; });   /* 11/10/2026: aula de música, nenhuma linha da letra na tela */
  var NOME = {
    foto: 'Word and picture', ouca: 'Hear it in the video', nuvem: 'Predict the story', colunas: 'Match the columns',
    viram: 'Turn the cards', intruso: 'The odd one out', grupos: 'Two groups', vida: 'The word in your life',
    buracos: 'The missing word', silaba: 'The strong part', escada: 'The word ladder', memoria: 'Memory',
    misteriosa: 'Mystery meaning', vf: 'True or false', embaralha: 'Mixed letters', cadeira: 'Hot seat', junto: 'What goes with it?'
  };
  function st() { if (!S.__pp) S.__pp = { f: 0, x: {} }; return S.__pp; }
  function ef() { var e = st(), k = D.fmt[e.f]; if (!e.x[k]) e.x[k] = { i: 0, sel: -1, ok: {}, err: '', esc: {}, ab: [] }; return e.x[k]; }
  function hh(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function buraco(p, mostra) {
    var re = new RegExp('\\b' + p.w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    /* 14/10/2026: aula sem letra (WL_SEM_LETRA) deixava só "… ? …" (o Carlos: "ficou sem sentido"); a lacuna vai para a pergunta da vida do aluno */
    var fr = window.WL_SEM_LETRA && p.vida && re.test(p.vida) ? p.vida : p.fala;
    var m = fr.match(re), pal = m ? m[0] : p.w;
    return hh(fr).replace(re, '<span class="wpp-lac' + (mostra ? ' ok' : '') + '">' + (mostra ? hh(pal) : '?') + '</span>');
  }
  function bt(txt, n, v, cls, off) { return '<button type="button" class="wpp-b' + (cls ? ' ' + cls : '') + '" data-a="wpp" data-n="' + n + '"' + (v != null ? ' data-v="' + hh(v) + '"' : '') + (off ? ' disabled' : '') + '>' + txt + '</button>'; }
  function aviso(txt, cls) { return '<p class="wpp-av' + (cls ? ' ' + cls : '') + '">' + txt + '</p>'; }
  function prox(e, total, rot) { return e.i < total - 1 ? '<div class="wpp-pe">' + bt(rot || 'Next word ›', 0, 'prox', 'cheio') + '</div>' : ''; }
  /* opções fixas por palavra (iguais nos dois lados: nada de Math.random) */
  function ops3(i, campo) { var n = P.length, a = [i, (i + 1) % n, (i + 3) % n]; return a.sort(function (x, y) { return P[x][campo] < P[y][campo] ? -1 : 1; }); }
  function quantos(o) { return Object.keys(o).length; }

  var J = {};
  J.foto = function (e) {
    var com = P.filter(function (p) { return p.foto; }).slice(0, 4), ord = com.slice().reverse();
    if (!com.length) return J.colunas(e);
    return '<div class="wpp-chips">' + com.map(function (p, i) { return bt(p.w, i, 'w', (e.ok[i] ? 'ok' : '') + (e.sel === i ? ' on' : ''), e.ok[i]); }).join('') + '</div>'
      + '<div class="wpp-fotos">' + ord.map(function (p) { var i = com.indexOf(p); return '<button type="button" class="wpp-foto' + (e.ok[i] ? ' ok' : '') + (e.err === 'f' + i ? ' erro' : '') + '" data-a="wpp" data-n="' + i + '" data-v="f" style="background-image:url(' + img(p.foto) + ')">' + (e.ok[i] ? '<b>' + p.w + '</b>' : '') + '</button>'; }).join('') + '</div>'
      + aviso(quantos(e.ok) === com.length ? 'All of them! Now say one sentence with each word.' : e.sel >= 0 ? 'Now tap the picture for “' + com[e.sel].w + '”.' : 'Tap a word, then its picture.', quantos(e.ok) === com.length ? 'ok' : '');
  };
  J.ouca = function (e) {
    var i = e.i, p = P[i], yt = window.WL_LEGENDA && window.WL_LEGENDA.yt, certo = e.esc[i] === p.w;
    var tocar = yt && p.s != null ? (e.ouve === i ? iframe(yt, 'The moment with “' + p.w + '”', '&autoplay=1&start=' + Math.max(0, Math.floor(p.s) - 1) + '&end=' + (Math.floor(p.s) + 4)) : '<div class="wpp-pe">' + bt('▶ Hear the moment', i, 'ouve', 'cheio') + '</div>') : '';
    return '<small class="wpp-cont">WORD ' + (i + 1) + ' OF ' + P.length + '</small>' + tocar + '<p class="wpp-fala">“' + buraco(p, certo) + '”</p>'
      + '<div class="wpp-chips">' + ops3(i, 'w').map(function (k) { var w = P[k].w; return bt(w, i, 'e' + k, e.esc[i] === w ? (w === p.w ? 'ok' : 'erro') : ''); }).join('') + '</div>'
      + (certo ? aviso('Yes: <b>' + p.w + '</b> means ' + p.m + '.', 'ok') + prox(e, P.length) : aviso('Listen, then tap the missing word.'));
  };
  J.nuvem = function (e) {
    var POS = [[6, 12, 30], [54, 6, 22], [30, 40, 36], [4, 70, 22], [60, 64, 28], [76, 30, 20]];
    return '<div class="wpp-nuvem">' + P.map(function (p, i) { var q = POS[i % POS.length]; return '<button type="button" class="wpp-nw' + (e.ok[i] ? ' on' : '') + '" style="left:' + q[0] + '%;top:' + q[1] + '%;font-size:' + q[2] + 'px" data-a="wpp" data-n="' + i + '" data-v="u">' + p.w + '</button>'; }).join('') + '</div>'
      + aviso(quantos(e.ok) >= 3 ? 'Three words! After the video, check: were you right?' : 'What happens in the video? Tell your teacher, out loud, with three of these words. Tap each word you use (' + quantos(e.ok) + ' of 3).', quantos(e.ok) >= 3 ? 'ok' : '');
  };
  J.colunas = function (e) {
    var ws = P.slice(0, Math.min(5, P.length)), ord = [2, 0, 4, 1, 3].filter(function (k) { return k < ws.length; }), tudo = quantos(e.ok) === ws.length;
    var dica = e.sel >= 0 && !e.ok[e.sel] ? '<div class="wpp-pe">' + bt('Hint for “' + ws[e.sel].w + '”', e.sel, 'dica', '') + '</div>' + (e.esc['d' + e.sel] ? aviso(e.esc['d' + e.sel] === 1 ? 'In the video: “' + hh(ws[e.sel].fala) + '”' : 'It starts with: “' + ws[e.sel].m.split(' ').slice(0, 3).join(' ') + '…”') : '') : '';
    return '<div class="wpp-cols"><svg class="wpp-fios" aria-hidden="true"></svg><div class="wpp-col">' + ws.map(function (p, i) { return bt(p.w, i, 'w', (e.ok[i] ? 'ok' : '') + (e.sel === i ? ' on' : ''), e.ok[i]); }).join('') + '</div>'
      + '<div class="wpp-col">' + ord.map(function (k) { return '<button type="button" class="wpp-def' + (e.ok[k] ? ' ok' : '') + (e.err === 'd' + k ? ' erro' : '') + '" data-a="wpp" data-n="' + k + '" data-v="d">' + (e.ok[k] ? '<b>' + ws[k].w + '</b> ' : '') + ws[k].m + '</button>'; }).join('') + '</div></div>'
      + dica + aviso(tudo ? 'All connected! Now say one sentence with each word.' : e.sel < 0 ? 'Tap a word, then its meaning: a line connects them. Guess first: use a hint only if you need it.' : 'Now tap the meaning for “' + hh(ws[e.sel].w) + '”.', tudo ? 'ok' : '');
  };
  J.viram = function (e) {
    return '<div class="wpp-viram">' + P.map(function (p, i) { var l = e.esc[i] || 0, f = [['WORD', p.w, 'Tap: what does it mean?'], ['MEANS', p.m, 'Tap: hear it in the video'], ['IN THE VIDEO', '“' + p.fala + '”', 'Tap: back to the word']][l];
      return '<button type="button" class="wpp-vira l' + l + '" data-a="wpp" data-n="' + i + '" data-v="vira"><small>' + f[0] + '</small><b>' + hh(f[1]) + '</b><span>' + f[2] + '</span></button>'; }).join('') + '</div>'
      + aviso('Guess the meaning before you turn the card.');
  };
  J.intruso = function (e) {
    var I = D.intruso; if (!I) return J.vida(e);
    var esc = e.esc.o, ok = esc === I.certo;
    return '<p class="wpp-fala">Which word doesn’t belong?</p><div class="wpp-chips">' + I.ops.map(function (o, i) { return bt(o, i, 'o', esc === i ? (i === I.certo ? 'ok' : 'erro') : ''); }).join('') + '</div>'
      + (esc == null ? aviso('Choose one, and say why out loud.') : aviso(ok ? I.por : 'Look again. Say why that one could belong.', ok ? 'ok' : 'erro'));
  };
  J.grupos = function (e) {
    var G = D.grupos; if (!G) return J.colunas(e);
    var ws = Object.keys(G.lugar), soltas = ws.filter(function (w) { return !e.ok[w]; });
    return '<div class="wpp-chips">' + (soltas.length ? soltas.map(function (w) { return bt(w, ws.indexOf(w), 'w', e.sel === ws.indexOf(w) ? 'on' : ''); }).join('') : '') + '</div>'
      + '<div class="wpp-caixas">' + G.caixas.map(function (c, k) { return '<button type="button" class="wpp-caixa' + (e.err === 'c' + k ? ' erro' : '') + '" data-a="wpp" data-n="' + k + '" data-v="c"><small>' + c[1] + '</small><span>' + ws.filter(function (w) { return e.ok[w] && G.lugar[w] === c[0]; }).map(function (w) { return '<i>' + w + '</i>'; }).join('') + '</span></button>'; }).join('') + '</div>'
      + aviso(soltas.length ? (e.sel >= 0 ? 'Now tap the group for “' + ws[e.sel] + '”.' : 'Tap a word, then its group.') : 'Done! Say why each word is there.', soltas.length ? '' : 'ok');
  };
  J.vida = function (e) {
    var i = e.i, p = P[i];
    return '<small class="wpp-cont">WORD ' + (i + 1) + ' OF ' + P.length + '</small><div class="wpp-cartao"><b class="wpp-w">' + p.w + '</b><span>' + p.m + '</span><em>“' + hh(p.fala) + '”</em></div>'
      + follow('YOUR LIFE', p.vida, ['Yes, …', 'Not really, …', 'I think …'], [], 'wppv' + i) + prox(e, P.length, 'Next word ›');
  };
  J.buracos = function (e) {
    var ws = P.slice(0, 3), n = 0; while (n < ws.length && e.ok[n]) n++;
    return ws.map(function (p, k) { return '<p class="wpp-fala">“' + buraco(p, e.ok[k]) + '”</p>'; }).join('')
      + '<div class="wpp-chips">' + P.map(function (p, k) { return bt(p.w, k, 'b', e.err === 'b' + k ? 'erro' : ''); }).join('') + '</div>'
      + aviso(n >= ws.length ? 'All the gaps! Listen for them in the video.' : 'Tap a word: it goes into the first empty gap.', n >= ws.length ? 'ok' : '');
  };
  J.silaba = function (e) {
    var com = P.filter(function (p) { return p.sil; }); if (!com.length) return J.vida(e);
    var i = Math.min(e.i, com.length - 1), p = com[i], esc = e.esc[i], ok = esc === p.forte;
    return '<small class="wpp-cont">WORD ' + (i + 1) + ' OF ' + com.length + '</small><p class="wpp-fala">Where is the strong part of <b>' + p.w + '</b>?</p><div class="wpp-sil">' + p.sil.map(function (s, k) { return bt(s.toLowerCase(), i, 's' + k, esc === k ? (k === p.forte ? 'ok' : 'erro') : ''); }).join('') + '</div>'
      + (ok ? aviso('Yes: ' + p.sil.join('·') + '. Say it like the character.', 'ok') + prox(e, com.length) : aviso('Say it out loud first. Then tap.'));
  };
  J.escada = function (e) {
    var E = D.escada; if (!E) return J.vida(e);
    var i = Math.min(e.i, E.length - 1), x = E[i];
    return '<div class="wpp-escada"><div><small>EASIER</small><b>' + x[0] + '</b></div><div class="meio"><small>IN THE VIDEO</small><b>' + x[1] + '</b></div><div><small>STRONGER</small><b>' + x[2] + '</b></div></div>'
      + aviso('Say one sentence with each, about your own life.') + prox(e, E.length, 'Next ladder ›');
  };
  J.memoria = function (e) {
    var ws = P.slice(0, 4), ord = [0, 5, 2, 7, 4, 1, 6, 3], cartas = [];
    ws.forEach(function (p, k) { cartas.push({ k: k, t: p.w }); cartas.push({ k: k, t: p.m.split(' ').slice(0, 6).join(' ') + (p.m.split(' ').length > 6 ? '…' : '') }); });
    cartas = ord.map(function (i) { return cartas[i]; });
    return '<div class="wpp-mem">' + cartas.map(function (c, i) { var vis = e.ok[c.k] || e.ab.indexOf(i) >= 0; return '<button type="button" class="' + (e.ok[c.k] ? 'par' : vis ? 'aberta' : '') + '" data-a="wpp" data-n="' + i + '" data-v="m">' + (vis ? hh(c.t) : '?') + '</button>'; }).join('') + '</div>'
      + aviso(quantos(e.ok) === ws.length ? 'All four pairs!' : 'Find a word and its meaning. Say the word out loud when you open it.', quantos(e.ok) === ws.length ? 'ok' : '');
  };
  J.misteriosa = function (e) {
    var i = e.i, p = P[i], esc = e.esc[i], ok = esc === p.w;
    return '<small class="wpp-cont">MEANING ' + (i + 1) + ' OF ' + P.length + '</small><div class="wpp-cartao"><span>' + p.m + '</span></div><p class="wpp-fala">Which word is it? Say it before you tap.</p>'
      + '<div class="wpp-chips">' + ops3(i, 'w').map(function (k) { var w = P[k].w; return bt(w, i, 'e' + k, esc === w ? (w === p.w ? 'ok' : 'erro') : ''); }).join('') + '</div>'
      + (ok ? aviso('Yes! “' + hh(p.fala) + '”', 'ok') + prox(e, P.length) : '');
  };
  J.vf = function (e) {
    var V = D.vf; if (!V) return J.misteriosa(e);
    var i = Math.min(e.i, V.length - 1), x = V[i], r = e.esc[i];
    return '<small class="wpp-cont">' + (i + 1) + ' OF ' + V.length + '</small><p class="wpp-fala">' + x[0] + '</p><div class="wpp-chips">' + bt('True', i, 't', r === 't' ? (x[1] ? 'ok' : 'erro') : '') + bt('False', i, 'f', r === 'f' ? (!x[1] ? 'ok' : 'erro') : '') + '</div>'
      + (r ? aviso(((r === 't') === x[1] ? 'Right. ' : 'Not quite. ') + (x[2] ? 'Say it correctly: ' + x[2] : ''), (r === 't') === x[1] ? 'ok' : 'erro') + prox(e, V.length, 'Next ›') : aviso('Decide. If it’s false, correct it out loud.'));
  };
  J.embaralha = function (e) {
    var i = e.i, p = P[i], alvo = p.w.replace(/[^a-z]/gi, '').toLowerCase(), L = alvo.split(''), ord = [];
    for (var k = 0; k < L.length; k++) ord.push((k * 5 + 3) % L.length);
    var vistos = {}, ok = []; ord.forEach(function (k) { if (!vistos[k]) { vistos[k] = 1; ok.push(k); } }); for (k = 0; k < L.length; k++) if (!vistos[k]) ok.push(k);
    var usadas = e.ab, feita = usadas.map(function (k) { return L[k]; }).join(''), certo = feita === alvo;
    return '<small class="wpp-cont">WORD ' + (i + 1) + ' OF ' + P.length + ' · ' + L.length + ' LETTERS</small><p class="wpp-fala wpp-letras">' + (feita || '…') + '</p>'
      + '<div class="wpp-chips">' + ok.map(function (k) { return bt(L[k], k, 'l', '', usadas.indexOf(k) >= 0 || certo); }).join('') + bt('Start again', 0, 'zera', '') + '</div>'
      + (certo ? aviso('“' + hh(p.fala) + '”', 'ok') + prox(e, P.length) : aviso(e.err === 'l' ? 'Not that letter. Try another one.' : 'Clue: ' + p.m + '.', e.err === 'l' ? 'erro' : ''));
  };
  J.cadeira = function (e) {
    var i = e.i, p = P[i];
    return '<small class="wpp-cont">WORD ' + (i + 1) + ' OF ' + P.length + '</small><div class="wpp-cartao wpp-quente"><small>THE STUDENT SEES · DON’T SAY IT</small><b class="wpp-w">' + p.w + '</b></div>'
      + aviso('Explain it in English without saying the word. Your teacher guesses.') + '<div class="wpp-chips">' + ['It’s when you …', 'It’s a person who …', 'It’s the opposite of …'].map(function (f) { return '<span class="wpp-tag">' + f + '</span>'; }).join('') + '</div>'
      + (e.esc[i] ? aviso('It means: ' + p.m + '.', 'ok') + prox(e, P.length) : '<div class="wpp-pe">' + bt('Guessed · show the meaning', i, 'acertou', 'so-prof') + '</div>');
  };
  J.junto = function (e) {
    var X = D.junto; if (!X) return J.vf(e);
    var esc = e.esc.o, ok = esc === X.certo;
    return '<p class="wpp-fala">' + hh(X.f).replace('___', '<span class="wpp-lac' + (ok ? ' ok' : '') + '">' + (ok ? X.ops[X.certo] : '?') + '</span>') + '</p>'
      + '<div class="wpp-chips">' + X.ops.map(function (o, i) { return bt(o, i, 'o', esc === i ? (i === X.certo ? 'ok' : 'erro') : ''); }).join('') + '</div>'
      + (esc == null ? aviso('Which word goes with it?') : aviso(ok ? X.por : 'Try another one.', ok ? 'ok' : 'erro'));
  };

  /* 09/10/2026 (noite) · aula que já tem a SUA cena 'palavras' (Fast Wolf, Today You Will Be With Me) fica com a dela */
  if (R.palavras) return;
  R.palavras = function (c) {
    var e = st(), F = D.fmt, k = F[e.f], x = ef();
    var passos = F.length > 1 ? '<div class="wpp-passos">' + F.map(function (f, i) { return '<button type="button" class="' + (i === e.f ? 'on' : i < e.f ? 'feito' : '') + '" data-a="wpp-f" data-n="' + i + '">' + (i + 1) + ' · ' + NOME[f] + '</button>'; }).join('') + '</div>' : '';
    var fim = e.f < F.length - 1 ? '<div class="wpp-pe">' + bt('Next: ' + NOME[F[e.f + 1]] + ' ›', 0, 'fmt', 'cheio') + '</div>'
      : '<p class="wpp-fim">' + (D.fim || 'Now watch: listen for these words.') + '</p>';
    var lista = '<div class="wpp-lista">' + P.map(function (p) { return '<span>' + p.w + '</span>'; }).join('') + '</div>';
    return cab(c) + '<div class="wpp-mesa"><div class="wpp-jogo vd"><small class="wpp-tit">' + (F.length > 1 ? 'PART ' + (e.f + 1) + ' OF ' + F.length + ' · ' : '') + NOME[k].toUpperCase() + '</small>' + J[k](x) + '</div>' + passos + lista + fim + '</div>';
  };

  TOQUES['wpp-f'] = function (b, n) { st().f = n; };
  TOQUES.wpp = function (b, n, v) {
    var e = st(), k = D.fmt[e.f], x = ef(); x.err = '';
    if (v === 'prox') { x.i++; x.ab = []; return; }
    if (v === 'fmt') { e.f = Math.min(e.f + 1, D.fmt.length - 1); return; }
    if (v === 'ouve') { x.ouve = n; return; }
    if (v === 'dica') { x.esc['d' + n] = (x.esc['d' + n] || 0) % 2 + 1; return; }
    if (v === 'acertou') { x.esc[n] = 1; return; }
    if (v === 'w') { x.sel = n; return; }
    if (v === 'u') { if (x.ok[n]) delete x.ok[n]; else x.ok[n] = 1; return; }
    if (v === 'vira') { x.esc[n] = ((x.esc[n] || 0) + 1) % 3; return; }
    if (v === 'f' || v === 'd') { if (x.sel < 0) return false; if (n === x.sel) { x.ok[n] = 1; x.sel = -1; } else x.err = v + n; return; }
    if (v === 'c') { var ws = Object.keys(D.grupos.lugar); if (x.sel < 0) return false; if (D.grupos.lugar[ws[x.sel]] === D.grupos.caixas[n][0]) { x.ok[ws[x.sel]] = 1; x.sel = -1; } else x.err = 'c' + n; return; }
    if (v === 'o') { x.esc.o = n; return; }
    if (v === 't' || v === 'f2') { x.esc[n] = 't'; return; }
    if (v && v.charAt(0) === 'e') { x.esc[n] = P[+v.slice(1)].w; return; }
    if (v && v.charAt(0) === 's') { x.esc[n] = +v.slice(1); return; }
    if (v === 'b') { var g = 0; while (g < 3 && x.ok[g]) g++; if (g < 3 && P[g] && P[n].w === P[g].w) x.ok[g] = 1; else x.err = 'b' + n; return; }
    if (v === 'm') {
      var ws2 = P.slice(0, 4), ord = [0, 5, 2, 7, 4, 1, 6, 3], k2 = function (i) { return Math.floor(ord[i] / 2); };
      if (x.ab.length === 2) x.ab = [];
      if (x.ok[k2(n)] || x.ab.indexOf(n) >= 0) return;
      x.ab.push(n);
      if (x.ab.length === 2 && k2(x.ab[0]) === k2(x.ab[1])) { x.ok[k2(n)] = 1; x.ab = []; }
      return ws2;
    }
    if (v === 'l') { var alvo = P[x.i].w.replace(/[^a-z]/gi, '').toLowerCase(); if (alvo.charAt(x.ab.length) === alvo.charAt(n)) x.ab.push(n); else x.err = 'l'; return; }
    if (v === 'zera') { x.ab = []; return; }
    return false;
  };
  /* True/False: o data-v "f" já é da foto; aqui o False usa "f" só no formato vf */
  var toque = TOQUES.wpp;
  TOQUES.wpp = function (b, n, v, c) {
    var e = st(); if (D.fmt[e.f] === 'vf' && (v === 't' || v === 'f')) { var x = ef(); x.err = ''; x.esc[n] = v; return; }
    return toque(b, n, v, c);
  };


  /* 20/10/2026 · LIGAR AS COLUNAS (o Carlos: "vamos fazer de ligar as colunas"): cada par certo ganha uma linha
     da palavra até o sentido; a palavra escolhida solta uma linha tracejada até o cursor do lado direito.
     As linhas são desenhadas depois que a cena pinta (o motor troca o HTML a cada toque) e quando a tela muda. */
  function desenhaFios() {
    [].forEach.call(document.querySelectorAll('.wpp-cols'), function (box) {
      var svg = box.querySelector('.wpp-fios'); if (!svg) return;
      var cols = box.querySelectorAll('.wpp-col'); if (cols.length < 2) return;
      var r0 = box.getBoundingClientRect();
      if (cols[1].getBoundingClientRect().left - cols[0].getBoundingClientRect().right < 20) { svg.innerHTML = ''; return; }   /* uma coluna só (celular): sem linhas */
      svg.setAttribute('width', r0.width); svg.setAttribute('height', r0.height);
      var out = '';
      [].forEach.call(cols[0].querySelectorAll('[data-v="w"]'), function (bw) {
        var n = bw.getAttribute('data-n'), def = cols[1].querySelector('[data-v="d"][data-n="' + n + '"]');
        var a = bw.getBoundingClientRect(), x1 = a.right - r0.left, y1 = a.top + a.height / 2 - r0.top;
        if (bw.classList.contains('ok') && def) {
          var b = def.getBoundingClientRect(), x2 = b.left - r0.left, y2 = b.top + b.height / 2 - r0.top, mx = (x1 + x2) / 2;
          out += '<path class="ok" d="M' + x1 + ' ' + y1 + ' C' + mx + ' ' + y1 + ' ' + mx + ' ' + y2 + ' ' + x2 + ' ' + y2 + '"/><circle class="ok" cx="' + x1 + '" cy="' + y1 + '" r="5"/><circle class="ok" cx="' + x2 + '" cy="' + y2 + '" r="5"/>';
        } else if (bw.classList.contains('on')) {
          out += '<circle class="vai" cx="' + x1 + '" cy="' + y1 + '" r="6"/><path class="vai" d="M' + x1 + ' ' + y1 + ' h' + Math.max(16, (cols[1].getBoundingClientRect().left - a.right) * 0.55) + '"/>';
        }
      });
      svg.innerHTML = out;
    });
  }
  var agenda = 0;
  function pedeFios() { cancelAnimationFrame(agenda); agenda = requestAnimationFrame(desenhaFios); }
  try { new MutationObserver(function () { if (document.querySelector('.wpp-cols')) pedeFios(); }).observe(document.body || document.documentElement, { childList: true, subtree: true }); } catch (err) { /* navegador antigo: sem linhas */ }
  window.addEventListener('resize', pedeFios);

  var css = document.createElement('style');
  css.textContent = ''
    + '.wpp-mesa{display:grid;gap:14px;max-width:1080px;margin:0 auto;width:100%}'
    + '.wpp-jogo{padding:20px 22px 22px;border-radius:var(--r2);display:grid;gap:14px}'
    + '.wpp-tit,.wpp-cont{font:800 11.5px var(--ui);letter-spacing:.14em;color:var(--ac)}'
    + '.wpp-cont{color:var(--t3)}'
    + '.wpp-chips{display:flex;flex-wrap:wrap;gap:10px}'
    + '.wpp-b{min-height:48px;padding:10px 18px;border-radius:14px;border:1.5px solid var(--fio2);background:rgba(255,255,255,.04);color:var(--t1,#fff);font:700 clamp(16px,1.15vw,19px) var(--ui);cursor:pointer}'
    + '.wpp-b.on{border-color:var(--ac);background:color-mix(in srgb,var(--ac) 18%,transparent)}'
    + '.wpp-b.ok{border-color:var(--ok,#7fd6a8);background:color-mix(in srgb,var(--ok,#7fd6a8) 20%,transparent)}'
    + '.wpp-b.erro{border-color:var(--erro,#ec6a52);background:color-mix(in srgb,var(--erro,#ec6a52) 16%,transparent)}'
    + '.wpp-b.cheio{background:var(--ac);border-color:var(--ac);color:var(--noite)}'
    + '.wpp-b[disabled]{cursor:default;opacity:.75}'
    + '.wpp-pe{display:flex;justify-content:center}'
    + '.wpp-av{margin:0;color:var(--t2);font-size:clamp(15px,1.05vw,17.5px);line-height:1.5}'
    + '.wpp-av.ok{color:var(--ok,#7fd6a8)}.wpp-av.erro{color:var(--erro,#ec6a52)}'
    + '.wpp-fala{margin:0;font:700 clamp(20px,1.6vw,28px)/1.35 var(--disp);text-wrap:balance}'
    + '.wpp-lac{display:inline-block;min-width:2.2em;padding:0 .3em;border-bottom:3px solid var(--ac);color:var(--ac);text-align:center}'
    + '.wpp-lac.ok{color:var(--ok,#7fd6a8);border-color:var(--ok,#7fd6a8)}'
    + '.wpp-cols{position:relative;display:grid;grid-template-columns:minmax(0,.62fr) minmax(0,1.38fr);gap:14px clamp(56px,7vw,110px)}'
    + '.wpp-fios{position:absolute;left:0;top:0;pointer-events:none;overflow:visible;z-index:1}'
    + '.wpp-fios path{fill:none;stroke-width:3;stroke-linecap:round}.wpp-fios path.ok{stroke:var(--ok,#7fd6a8)}.wpp-fios circle.ok{fill:var(--ok,#7fd6a8)}'
    + '.wpp-fios path.vai{stroke:var(--ac);stroke-dasharray:6 6}.wpp-fios circle.vai{fill:var(--ac)}'
    + '.wpp-cols .wpp-col:first-of-type .wpp-b{text-align:center;font-size:clamp(17px,1.25vw,21px)}'
    + '.wpp-col{display:grid;gap:10px;align-content:start}'
    + '.wpp-def{min-height:52px;padding:10px 14px;border-radius:14px;border:1.5px solid var(--fio2);background:rgba(255,255,255,.03);color:var(--t2);font:600 clamp(15px,1.05vw,17px)/1.35 var(--ui);text-align:left;cursor:pointer}'
    + '.wpp-def.ok{border-color:var(--ok,#7fd6a8);color:var(--t1,#fff)}.wpp-def.ok b{color:var(--ok,#7fd6a8)}'
    + '.wpp-def.erro,.wpp-foto.erro,.wpp-caixa.erro{border-color:var(--erro,#ec6a52)!important}'
    + '.wpp-fotos{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}'
    + '.wpp-foto{aspect-ratio:16/9;max-height:24vh;border-radius:16px;border:2px solid var(--fio2);background:center/cover no-repeat;cursor:pointer;display:flex;align-items:flex-end;padding:8px}'
    + '.wpp-foto.ok{border-color:var(--ok,#7fd6a8)}.wpp-foto b{padding:4px 10px;border-radius:10px;background:rgba(var(--noite-rgb,8,8,12),.85);font:800 15px var(--ui)}'
    + '.wpp-nuvem{position:relative;height:clamp(180px,26vh,260px)}'
    + '.wpp-nw{position:absolute;padding:4px 10px;border:0;border-radius:12px;background:none;color:var(--t1,#fff);font-family:var(--disp);font-weight:800;cursor:pointer}'
    + '.wpp-nw.on{background:color-mix(in srgb,var(--ac) 24%,transparent);color:var(--ac)}'
    + '.wpp-viram{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}'
    + '.wpp-vira{min-height:150px;padding:16px;border-radius:18px;border:1.5px solid var(--fio2);background:rgba(255,255,255,.04);color:var(--t1,#fff);display:grid;gap:6px;align-content:center;text-align:center;cursor:pointer}'
    + '.wpp-vira small{font:800 11px var(--ui);letter-spacing:.14em;color:var(--ac)}.wpp-vira b{font:800 clamp(18px,1.4vw,24px)/1.25 var(--disp)}.wpp-vira span{font-size:13px;color:var(--t3)}'
    + '.wpp-vira.l1{border-color:var(--ac)}.wpp-vira.l1 b{font:600 16px/1.4 var(--ui)}.wpp-vira.l2{border-color:var(--ok,#7fd6a8)}.wpp-vira.l2 b{font:700 italic 17px/1.4 var(--ui)}'
    + '.wpp-caixas{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px}'
    + '.wpp-caixa{min-height:120px;padding:14px;border-radius:18px;border:1.5px dashed var(--fio2);background:rgba(255,255,255,.03);display:grid;gap:8px;align-content:start;text-align:left;color:var(--t1,#fff);cursor:pointer}'
    + '.wpp-caixa small{font:800 11.5px var(--ui);letter-spacing:.14em;color:var(--ac)}.wpp-caixa span{display:flex;flex-wrap:wrap;gap:8px}.wpp-caixa i{font-style:normal;padding:6px 12px;border-radius:10px;background:color-mix(in srgb,var(--ok,#7fd6a8) 20%,transparent);font:700 15px var(--ui)}'
    + '.wpp-cartao{padding:16px 18px;border-radius:18px;border:1.5px solid var(--fio2);background:rgba(255,255,255,.03);display:grid;gap:6px}'
    + '.wpp-cartao span{color:var(--t2);font-size:clamp(16px,1.15vw,19px);line-height:1.45}.wpp-cartao em{color:var(--t3);font-size:15px}'
    + '.wpp-w{font:900 clamp(28px,2.4vw,40px)/1.1 var(--disp);color:var(--ac)}'
    + '.wpp-quente{text-align:center;justify-items:center}.wpp-quente small{font:800 11px var(--ui);letter-spacing:.14em;color:var(--t3)}'
    + '.wpp-tag{padding:8px 14px;border-radius:12px;border:1px dashed var(--fio2);color:var(--t2);font:600 15px var(--ui)}'
    + '.wpp-sil{display:flex;gap:6px;flex-wrap:wrap}.wpp-sil .wpp-b{font-size:clamp(22px,1.8vw,30px);min-width:70px}'
    + '.wpp-escada{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.wpp-escada div{padding:16px;border-radius:16px;border:1.5px solid var(--fio2);display:grid;gap:4px;text-align:center}'
    + '.wpp-escada small{font:800 11px var(--ui);letter-spacing:.14em;color:var(--t3)}.wpp-escada b{font:800 clamp(18px,1.4vw,24px) var(--disp)}.wpp-escada .meio{border-color:var(--ac)}.wpp-escada .meio b{color:var(--ac)}'
    + '.wpp-mem{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}'
    + '.wpp-mem button{min-height:86px;padding:8px;border-radius:14px;border:1.5px solid var(--fio2);background:rgba(255,255,255,.05);color:var(--t1,#fff);font:700 clamp(13px,1vw,16px)/1.3 var(--ui);cursor:pointer}'
    + '.wpp-mem .aberta{border-color:var(--ac)}.wpp-mem .par{border-color:var(--ok,#7fd6a8);background:color-mix(in srgb,var(--ok,#7fd6a8) 14%,transparent)}'
    + '.wpp-letras{letter-spacing:.24em;min-height:1.4em}'
    + '.wpp-passos{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}'
    + '.wpp-passos button{padding:6px 14px;border-radius:999px;border:1px solid var(--fio2);background:none;color:var(--t3);font:700 13px var(--ui);cursor:pointer}'
    + '.wpp-passos .on{border-color:var(--ac);color:var(--ac)}.wpp-passos .feito{color:var(--ok,#7fd6a8)}'
    + '.wpp-lista{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}.wpp-lista span{padding:4px 12px;border-radius:999px;background:rgba(255,255,255,.05);color:var(--t2);font:700 13px var(--ui)}'
    + '.wpp-fim{margin:0;text-align:center;font:800 clamp(17px,1.25vw,21px) var(--disp);color:var(--ac)}'
    + '.wpp-jogo .video{max-width:640px;margin:0 auto;width:100%}'
    + '.wpp-jogo .follow{width:100%}'
    + '@media (max-height:940px) and (min-width:1101px){.wpp-lista{display:none}.wpp-mesa{gap:8px}.wpp-jogo{padding:12px 18px 14px;gap:8px}.wpp-b{min-height:38px;padding:6px 14px;font-size:16px}.wpp-def{min-height:36px;padding:6px 12px;font-size:15px}.wpp-col{gap:6px}.wpp-cartao{padding:10px 14px;gap:2px;grid-template-columns:auto 1fr;column-gap:14px;align-items:baseline}.wpp-cartao em{grid-column:1/-1}.wpp-w{font-size:26px}.wpp-passos button{padding:3px 10px;font-size:12px}.wpp-jogo .follow{padding:10px 16px}.wpp-jogo .follow .q{font-size:clamp(18px,1.4vw,22px)}.wpp-jogo .video{max-width:420px}.wpp-fala{font-size:clamp(18px,1.4vw,24px)}.wpp-fim{font-size:16px}.wpp-av{font-size:15px}.wpp-viram .wpp-vira{min-height:110px}.wpp-mem button{min-height:62px}.wpp-nuvem{height:170px}.wpp-caixa{min-height:90px}}'
    + '@media (max-width:700px){.wpp-nuvem{height:auto;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:6px 12px;padding:6px 0}.wpp-nw{position:static;font-size:clamp(18px,5.6vw,26px)!important;max-width:100%;overflow-wrap:anywhere}.wpp-cols{grid-template-columns:1fr}.wpp-mem{grid-template-columns:repeat(2,minmax(0,1fr))}.wpp-escada{grid-template-columns:1fr}.wpp-jogo{padding:16px}}';
  document.head.appendChild(css);
})();
