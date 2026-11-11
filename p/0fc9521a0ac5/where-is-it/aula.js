/* ============================================================
   WHERE IS IT? · THE DOLLHOUSE · LIVE CLASS  05/10/2026
   Main series A1 · posição: next to · in front of · behind · under · above ·
   between … and … · on · Where is the …? It's …
   O MUNDO (da aula velha): um boneco de madeira, uma cadeira e uma caixa
   (sete fotos + sete áudios), o vídeo real (pCoefMybtYc, 0:16–1:14) e uma
   CASA DE BONECAS em corte, escura, desenhada aqui em CSS: mesa, sofá,
   prateleira; cada coisa desliza para o lugar dito. Fecha com duas salas
   quase iguais: só a conversa acha as cinco diferenças.
   ÁUDIOS (faster-whisper): os s-* e o v-clear batem. Os a- e k- (in × at)
   ficam fora, como no remaster de 16/09. Fila: FILA-LIVE-386.md · 040.
   ============================================================ */
var YT = 'pCoefMybtYc';
var L = [
  { k: 'capa', est: null, img: 'casa' },
  { k: 'abre', est: 'o', min: 7, img: 'quarto', rot: 'I · Look Around', t: 'Look around your room. No help yet.', p: 'Pick a card. Nobody is corrected here. Your teacher taps the position words you use.' },
  { k: 'boneco', est: 'l', min: 7, img: 'pos-start', rot: 'II · The Wooden Figure', t: 'A wooden figure, a chair and a box. Seven places.', p: 'Listen first. Say it three times. Then the figure moves.' },
  { k: 'palavras', est: 'l', img: 'pos-start', rot: 'III · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'pos-start', rot: 'IV · Watch', t: 'A person, a box and a chair.', p: 'Ears only. Tap each word when you hear it.' },
  { k: 'falas', est: 'l', extra: 1, img: 'pos-start', rot: 'V · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'o', min: 4, img: 'pos-between', rot: 'VI · Look First', t: 'Four pictures. Four places.', p: 'Look at the picture. Guess where the figure is. Then tap to see the sentence, and say it.' },
  { k: 'casa', est: 'f', min: 6, img: 'casa', rot: 'VII · Move It', t: 'The ghost shows where each thing goes.', p: 'Say the whole sentence. Then pick the position, and the thing slides there.' },
  { k: 'placas', est: 'f', min: 6, img: 'casa', rot: 'VIII · Fix the Labels', t: 'Six little labels in the house. Some are wrong.', p: 'Read it out loud. Right or wrong? If it’s wrong, say the fix.' },
  { k: 'descreve', est: 'o', min: 7, extra: 1, img: 'casa', rot: 'IX · Describe My Room', t: 'Your teacher can’t see this room. Describe it.', p: 'Five things. Your teacher repeats each sentence and taps the thing when it’s right.' },
  { k: 'difere', est: 'o', min: 7, extra: 1, img: 'casa', rot: 'X · Five Differences', t: 'Two rooms, almost the same.', p: 'You see room A. Your teacher sees room B. Ask: Where is the …? in your room?' },
  { k: 'quarto', est: 'o', min: 7, extra: 1, img: 'quarto', rot: 'XI · Your Room', t: 'Your real room, now with the words.', p: 'Four questions. The last one, you ask.' },
  { k: 'fim', est: 'w', min: 6, img: 'casa', rot: 'XII · Close the House', t: 'Write your room.', p: 'Five things and where they are. One between, with both halves. The red line watches of and to. It goes to your My notes.' }
];

var TR = {
  's-nextto.mp3': 'I am next to the box.', 's-infront.mp3': 'I am in front of the box.', 's-behind.mp3': 'I am behind the box.', 's-under.mp3': 'I am under the box.',
  's-above.mp3': 'The box is above my head.', 's-between.mp3': 'I am between the chair and the box.', 's-on.mp3': 'I am on the chair.',
  'v-clear.mp3': 'Today we are looking at prepositions of place. First up, I am sitting next to the box, in front of the box, and I am behind the box. Now I am under the box. The box is above my head. Now I am dancing between the chair and the box.'
};

var ABRE = [
  { k: 'IN FRONT', q: 'What is in front of you right now?', fup: 'And behind you?', st: ['… is in front of me.'], ex: 'My laptop is in front of me. A window is behind me.' },
  { k: 'NEXT TO', q: 'What is next to you?', fup: 'And under your chair?', st: ['… is next to me.'], ex: 'A cup of coffee is next to me.' },
  { k: 'YOUR PHONE', q: 'Where is your phone?', fup: 'And your keys?', st: ['It’s on / next to …'], ex: 'It’s on the table, next to my cup.' }
];
var FORMAS = [{ k: 'on', t: 'ON' }, { k: 'next', t: 'NEXT TO / BEHIND' }, { k: 'inthe', t: 'IN THE TABLE', erro: 1 }, { k: 'of', t: 'BETWEEN OF / IN FRONT THE', erro: 1 }];

var BONECO = [
  { au: 's-nextto.mp3', p: 'next to', img: 'pos-nextto' }, { au: 's-infront.mp3', p: 'in front of', img: 'pos-infront' }, { au: 's-behind.mp3', p: 'behind', img: 'pos-behind' },
  { au: 's-under.mp3', p: 'under', img: 'pos-under' }, { au: 's-above.mp3', p: 'above', img: 'pos-above' }, { au: 's-between.mp3', p: 'between', img: 'pos-between' }, { au: 's-on.mp3', p: 'on', img: 'pos-on' }
];
var PALAVRAS = ['next to', 'in front of', 'behind', 'under', 'above', 'between'];

/* a casa: lugares em % (x do centro, y da base) */
var LUGAR = {
  'on-table': [31, 61], 'under-table': [31, 83], 'nextto-table': [11, 83], 'infront-table': [31, 95], 'above-table': [31, 26],
  'behind-sofa': [72, 52], 'on-sofa': [70, 63], 'nextto-sofa': [93, 83], 'on-shelf': [76, 31], 'under-shelf': [76, 50], 'between': [50, 83]
};
var COISA = { cat: '🐈', ball: '⚽', book: '📕', lamp: '💡', bag: '👜', plant: '🪴' };
var NOMES = { cat: 'the cat', ball: 'the ball', book: 'the book', lamp: 'the lamp', bag: 'the bag', plant: 'the plant' };
var MOVE = [
  { o: 'cat', l: 'under-table', p: 'under', m: 'the table' }, { o: 'ball', l: 'on-sofa', p: 'on', m: 'the sofa' }, { o: 'book', l: 'on-shelf', p: 'on', m: 'the shelf' },
  { o: 'lamp', l: 'above-table', p: 'above', m: 'the table' }, { o: 'bag', l: 'nextto-sofa', p: 'next to', m: 'the sofa' }, { o: 'plant', l: 'between', p: 'between', m: 'the table and the sofa' },
  { o: 'ball', l: 'behind-sofa', p: 'behind', m: 'the sofa' }, { o: 'cat', l: 'infront-table', p: 'in front of', m: 'the table' }
];
var OPS = ['next to', 'in front of', 'behind', 'under', 'above', 'between', 'on'];
var ONDE = { 'next to': 'nextto', 'in front of': 'infront', 'behind': 'behind', 'under': 'under', 'above': 'above', 'on': 'on' };

var PLACAS = [
  { f: 'The book is in the table.', ok: 0, fix: 'The book is on the table.', w: 'A table is a surface: on.' },
  { f: 'The plant is between of the table and the sofa.', ok: 0, fix: 'The plant is between the table and the sofa.', w: 'No of after between. And both halves.' },
  { f: 'The cat is in front the table.', ok: 0, fix: 'The cat is in front of the table.', w: 'in front of: three words.' },
  { f: 'The bag is next to the sofa.', ok: 1, w: 'This one is right.' },
  { f: 'The lamp is above of the table.', ok: 0, fix: 'The lamp is above the table.', w: 'No of after above.' },
  { f: 'The ball is next the sofa.', ok: 0, fix: 'The ball is next to the sofa.', w: 'next to: two words.' }
];

var SALA_D = { cat: 'on-sofa', ball: 'under-table', book: 'on-table', lamp: 'above-table', plant: 'nextto-sofa' };
var SALA_A = { cat: 'under-table', ball: 'on-sofa', book: 'on-shelf', lamp: 'above-table', plant: 'nextto-sofa', bag: 'infront-table' };
var SALA_B = { cat: 'on-sofa', ball: 'behind-sofa', book: 'on-table', lamp: 'above-table', plant: 'between', bag: 'nextto-table' };

var QUARTO = [
  { q: 'What is next to your bed?', fup: 'And what is under it?', st: ['… is next to my bed.'], ex: 'A small table is next to my bed. My shoes are under it.' },
  { q: 'Where is your phone at night?', fup: 'Is that a good place?', st: ['It’s on … / next to …'], ex: 'It’s on the table, next to my bed.' },
  { q: 'What is on your wall? And above your door?', fup: 'What color is it?', st: ['… is on my wall.'], ex: 'A big poster is on my wall. A clock is above my door.' },
  { q: 'Your turn. Ask me two questions about my room.', fup: 'Now ask me about my kitchen.', st: ['Where is your …?', 'What is next to …?'], ex: 'Where is your TV? What is next to your sofa?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, bon: { sel: -1, viu: {} }, video: { p: 0, ouviu: {} }, mv: { n: 0, esc: '' }, pl: { esc: {} }, desc: {}, dif: { peek: 0, achou: {} }, quarto: { n: 0, foi: {} } };

function casa(mapa, opt) {
  opt = opt || {};
  var s = '<div class="casa' + (opt.cls ? ' ' + opt.cls : '') + '"><div class="parede"></div><div class="chao"></div>'
    + '<div class="mesa"><i></i><b></b><b class="d"></b></div><div class="sofa"><i></i><b></b></div><div class="estante"></div>'
    + (opt.rot ? '<span class="rot-casa">' + opt.rot + '</span>' : '');
  if (opt.fantasma) { var g = LUGAR[opt.fantasma]; s += '<span class="coisa fantasma" style="left:' + g[0] + '%;top:' + g[1] + '%">' + COISA[opt.fobj] + '</span>'; }
  for (var o in mapa) {
    var p = LUGAR[mapa[o]]; if (!p) continue;
    s += '<span class="coisa' + (mapa[o] === 'behind-sofa' ? ' atras' : '') + (opt.acesas && opt.acesas[o] ? ' acesa' : '') + (opt.marca && opt.marca[o] ? ' marcada' : '') + '" style="left:' + p[0] + '%;top:' + p[1] + '%"' + (opt.toque ? ' data-a="' + opt.toque + '" data-v="' + o + '" role="button"' : '') + '>' + COISA[o] + '</span>';
  }
  return s + '</div>';
}

var R = {};
R.capa = function () {
  var m = { cat: 'under-table', lamp: 'above-table', plant: 'between', book: 'on-shelf' };
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · THE DOLLHOUSE</span><h1>Where Is <b>It?</b></h1>'
    + '<p class="sub">Say where it is, and it moves there. The cat is <b>under</b> the table. The plant is <b>between</b> the table and the sofa.</p>'
    + '<div class="chipsx"><span class="pilula">next to</span><span class="pilula">behind</span><span class="pilula">between … and …</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the house</button>' + faixaLive() + '</div>'
    + '<div class="vd casa-box">' + casa(m) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.boneco = function (c) {
  var e = S.bon, x = e.sel >= 0 ? BONECO[e.sel] : null, foto = x && e.viu[e.sel] ? x.img : 'pos-start';
  return cab(c) + '<div class="mesa-b"><div class="foto-b vd" style="background-image:url(' + img(foto) + ')"><span>' + (x && e.viu[e.sel] ? x.p.toUpperCase() : 'THE FIGURE, THE CHAIR, THE BOX') + '</span></div><div class="escutas">'
    + BONECO.map(function (b, i) {
      var ouviu = (S.ouviu || {})[b.au];
      return '<div class="toca-linha vd' + (e.sel === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '"><span class="num">' + (i + 1) + '</span>' + tocar(b.au) + '<div class="lin">' + (e.viu[i] ? '<span class="frase-b">' + TR[b.au].replace(b.p, '<u>' + b.p + '</u>') + '</span>' : ouviu ? '<button type="button" class="pilula" data-a="bn" data-n="' + i + '">Said it three times · move it</button>' : '<span class="transcricao vazia">Listen first.</span>') + '</div></div>';
    }).join('') + '</div></div>';
};

R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>Look at the wooden figure. What does the person in the video do? Guess!</h2></div>' + fala('va', ['I think she …'], PALAVRAS) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch</button></div></div>';
  else if (e.p === 1) {
    var tudo = PALAVRAS.every(function (w) { return e.ouviu[w]; });
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Prepositions of place', '&start=16&end=74') + '<small class="cred">Video: from 0:16 to 1:14</small></div><div class="lado-video"><h5>TAP WHEN YOU HEAR IT</h5><div class="ouvidos">'
      + PALAVRAS.map(function (w) { return '<button type="button" class="ouvido' + (e.ouviu[w] ? ' on' : '') + '" data-a="vd-w" data-v="' + w + '">' + w + '</button>'; }).join('') + '</div>'
      + (tudo ? '<p class="aprova">GOT IT. All six.</p>' : '<p class="dica-aluno">Nobody has to understand the rest.</p>') + '<div class="toca-linha vd">' + tocar('v-clear.mp3') + '<span>The sound only, again</span></div><div><button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button></div></div></div>';
  } else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>Where is she at the end? And what is above her head?</h2></div>' + fala('vb', ['She is between …', 'The box is …'], []) + mostra('vb', 'She is between the chair and the box. The box is above her head.') + transcricao('v-clear.mp3', TR['v-clear.mp3']) + '</div>';
  return cab(c) + passos + corpo;
};

R.casa = function (c) {
  var e = S.mv, n = e.n, mapa = {};
  for (var k = 0; k < Math.min(n, MOVE.length); k++) mapa[MOVE[k].o] = MOVE[k].l;
  if (n >= MOVE.length) return cab(c) + trilha(MOVE, n) + '<div class="mesa-c"><div class="vd casa-box">' + casa(mapa) + '</div><div class="lado-l"><div class="pergunta vd"><small>DONE</small><h2>Eight moves, seven positions.</h2></div>' + follow('NOW SWAP', 'Your teacher points at a thing. You say where it is.', ['It’s …', 'The … is …'], [], 'mvs') + '</div></div>';
  var x = MOVE[n], ok = e.esc === x.p;
  if (ok) mapa[x.o] = x.l;
  else if (e.esc && e.esc !== 'between') { var errado = ONDE[e.esc] + '-' + x.m.replace('the ', '').split(' ')[0]; if (LUGAR[errado]) mapa[x.o] = errado; }
  return cab(c) + trilha(MOVE, n) + '<div class="mesa-c"><div class="vd casa-box">' + casa(mapa, { fantasma: ok ? null : x.l, fobj: x.o }) + '</div><div class="lado-l"><div class="pede vd"><small>WHERE IS ' + NOMES[x.o].toUpperCase() + '? LOOK AT THE GHOST</small><b>' + COISA[x.o] + ' ' + NOMES[x.o].charAt(0).toUpperCase() + NOMES[x.o].slice(1) + ' is … ' + x.m + '.</b></div>'
    + '<div class="tres-b">' + OPS.map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="mv" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa">That word sends it somewhere else. Look at the ghost again.</p>' : '') + (ok ? '<p class="aprova">GOT IT. ' + NOMES[x.o].charAt(0).toUpperCase() + NOMES[x.o].slice(1) + ' is ' + x.p + ' ' + x.m + '.</p><div><button type="button" class="btn" data-a="mv-prox">Next</button></div>' : '') + '</div></div>';
};

R.placas = function (c) {
  var e = S.pl;
  return cab(c) + '<div class="placas">' + PLACAS.map(function (x, i) {
    var esc = e.esc[i], certo = esc != null && (esc === 1) === !!x.ok;
    return '<div class="placa-l vd' + (certo ? ' feita' : '') + '"><p class="etiq">“' + x.f + '”</p><div class="tres-b"><button type="button" class="pilula' + (esc === 1 ? (x.ok ? ' certo' : ' errado') : '') + '" data-a="pl" data-n="' + i + '" data-v="1">Right</button><button type="button" class="pilula' + (esc === 0 ? (!x.ok ? ' certo' : ' errado') : '') + '" data-a="pl" data-n="' + i + '" data-v="0">Wrong</button></div>'
      + (esc != null ? '<p class="' + (certo ? 'aprova' : 'recusa') + '">' + (certo ? (x.ok ? x.w : x.w + ' Say it: <b>' + x.fix + '</b>') : 'Look again at the little words: of and to.') + '</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.descreve = function (c) {
  var e = S.desc, n = Object.keys(e).filter(function (k) { return e[k]; }).length;
  return cab(c) + '<div class="mesa-c"><div class="vd casa-box">' + casa(SALA_D, { acesas: e, toque: 'ds', rot: 'THE STUDENT’S ROOM' }) + '</div><div class="lado-l">'
    + '<div class="pergunta vd"><small>' + n + ' / 5</small><h2>Your teacher looks away. Describe the room: five things.</h2></div>' + fala('ds', ['The … is on / under / next to …'], ['the cat', 'the ball', 'the book', 'the lamp', 'the plant'])
    + '<p class="so-prof dica-aluno" style="color:var(--t3)">Repeat each sentence, then tap the thing when it’s right.</p>' + (n === 5 ? '<p class="aprova">Five things, five sentences, one room your teacher never saw.</p>' : '') + '</div></div>';
};

R.difere = function (c) {
  var e = S.dif, n = Object.keys(e.achou).filter(function (k) { return e.achou[k]; }).length, fim = n >= 5;
  return cab(c) + '<div class="mesa-c"><div class="lado-l' + (e.peek || fim ? ' duas' : '') + '"><div class="vd casa-box">' + casa(SALA_A, { marca: e.achou, rot: 'ROOM A · YOU' }) + '</div>'
    + (e.peek || fim ? '<div class="vd casa-box' + (fim ? '' : ' so-prof') + '">' + casa(SALA_B, { marca: e.achou, rot: 'ROOM B · ' + (fim ? 'NOW YOU SEE IT' : 'ONLY YOUR TEACHER'), toque: 'df' }) + '</div>' : '') + '</div><div class="lado-l">'
    + '<div class="pergunta vd"><small>' + n + ' / 5 DIFFERENCES</small><h2>Ask: Where is the cat in your room?</h2></div>' + fala('df', ['Where is the … in your room?', 'In my room, it’s …'], [])
    + '<div class="so-prof acoes"><button type="button" class="pilula' + (e.peek ? ' certo' : '') + '" data-a="df-peek">' + (e.peek ? 'Hide room B' : 'Peek at room B') + '</button><span class="dica-aluno" style="color:var(--t3)">Tap a thing in room B when they find it.</span></div>'
    + (fim ? '<p class="aprova">Five differences, found only by talking.</p>' : '') + '</div></div>';
};

R.quarto = function (c) { return sequencia(c, QUARTO, S.quarto, 'quarto', 'Your room, with all seven words.'); };

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My bed is between the window and the door.\nMy phone is on …', 'Your room',
    ['is next to ', 'is in front of ', 'is behind ', 'is under ', 'is above ', 'is between ', ' and ', 'is on '], ['YOUR ROOM, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write it, every little word right.' : 'Five things and where they are.'])
    + '<div class="lado-fim"><div class="grande vd"><span>on the table (not in)</span><span>in front <u>of</u> · next <u>to</u></span><span>between A <u>and</u> B (no of)</span><span>above · behind · under (alone)</span></div>'
    + mostra('fim', 'My bed is between the window and the door.<br>My phone is on the table, next to my bed.<br>A big lamp is above my desk.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.bn = function (b, n) { S.bon.sel = n; S.bon.viu[n] = 1; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-w'] = function (b, n, v) { S.video.ouviu[v] = !S.video.ouviu[v]; };
TOQUES.mv = function (b, n, v) { S.mv.esc = v; };
TOQUES['mv-prox'] = function () { S.mv = { n: S.mv.n + 1, esc: '' }; };
TOQUES.pl = function (b, n, v) { S.pl.esc[n] = +v; };
TOQUES.ds = function (b, n, v) { S.desc[v] = !S.desc[v]; };
TOQUES['df-peek'] = function () { S.dif.peek = !S.dif.peek; };
TOQUES.df = function (b, n, v) { if (SALA_A[v] !== SALA_B[v]) S.dif.achou[v] = !S.dif.achou[v]; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G12 · uma cena curta nova (k: gx) antes de casa.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'fotoPrimeiro', titulo: 'Look first. Where is the wooden figure?',
  cenas: [
    { img: 'pos-infront', antes: 'The chair is on the left. The box is big. The figure is close to you.', frase: 'The figure is <mark>in front of</mark> the box.' },
    { img: 'pos-behind', antes: 'You can only see the head and the shoulders of the figure.', frase: 'The figure is <mark>behind</mark> the box.' },
    { img: 'pos-between', antes: 'The chair is on the left. The box is on the right.', frase: 'The figure is <mark>between</mark> the chair <mark>and</mark> the box.' },
    { img: 'pos-nextto', antes: 'Three things in a row: the chair, the box, the figure.', frase: 'The box is <mark>next to</mark> the figure.' }
  ],
  nota: 'A place word has its own friends: <b>in front of</b> the box, <b>next to</b> the figure, <b>between</b> the chair <b>and</b> the box. No <b>of</b> after behind or between, and no <b>the</b> right after in front.',
  uso: { p: 'Your turn. Look at your desk. Say where three things are.', molde: ['My phone is next to …', 'The lamp is behind …', 'My bag is between … and …'], ex: 'My phone is next to the keyboard. The lamp is behind the screen. My bag is between the chair and the wall.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_foto', GX_EXPLICA); };
