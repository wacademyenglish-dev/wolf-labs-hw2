/* ============================================================
   THE BRAIN LAB · THE SCAN · LIVE CLASS  06/10/2026
   Main series B1 · o grau do comparativo: much / a lot / far +
   comparativo (diferença grande) · a bit / slightly + comparativo
   (pequena) · not nearly as … as · a armadilha: "muito mais" → *very
   faster*, *more easier*.
   O MUNDO (da aula velha): o aluno é o voluntário de um laboratório
   de neurolinguística, o professor é o pesquisador; o passaporte das
   línguas; o teste de Stroop (a cor da tinta, não a palavra) em
   português e em inglês, com o tempo medido; o vídeo sobre o cérebro
   bilíngue (MMmOLN5zBLY), agora SELADO em quatro capítulos com
   perguntas abertas, sem citar falas e sem nome de canal; o mostrador
   do grau; os três tipos de bilíngue; o teste da troca de língua;
   mito ou fato; o laudo.
   A CARA: a VARREDURA — o cérebro desenhado como uma constelação de
   oito regiões em traço violeta; cada cena acende a sua; no laudo,
   tudo aceso. O mostrador de grau é um arco com quatro marcas.
   Fila: FILA-LIVE-386.md · 100.
   ============================================================ */
var YT = 'MMmOLN5zBLY';
var L = [
  { k: 'capa', est: null, img: 'capa', reg: -1 },
  { k: 'passa', est: 'o', min: 7, img: 'lab', reg: 0, rot: 'I · The Language Passport', t: 'Before the tests: your languages.', p: 'Answer out loud. Your teacher stamps the passport. The last question is a trap.' },
  { k: 'stroop', est: 'o', min: 7, img: 'lab', reg: 1, rot: 'II · The Stroop Test', t: 'Say the COLOR of the ink. Not the word.', p: 'Two rounds: Portuguese words, then English words. Your teacher taps after each one. The clock is real.' },
  { k: 'palavras', est: 'l', img: 'lab', rot: 'III · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'lab', reg: 2, rot: 'IV · The Video', t: 'What does a second language do to your brain?', p: 'The video is locked. Answer first, then it plays in four short chapters. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'lab', rot: 'V · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'dial', est: 'f', min: 6, img: 'lab', reg: 3, rot: 'VI · The Dial', t: 'Not just “faster”. How MUCH faster?', p: 'Read the numbers. Say the sentence. Your teacher taps the degree you used.' },
  { k: 'tipos', est: 'o', min: 7, img: 'lab', reg: 4, rot: 'VII · Which Bilingual Are You?', t: 'Three bilinguals in one family. Three different brains.', p: 'Read about each person. Guess the type. Then: which one are you?' },
  { k: 'troca', est: 'o', min: 7, extra: 1, img: 'lab', reg: 5, rot: 'VIII · The Switch Test', t: 'Violet border: English. Green border: Portuguese.', p: 'Say each number in the language of its border. Round one: one language. Round two: switching. Your teacher taps after each card.' },
  { k: 'mito', est: 'o', min: 7, extra: 1, img: 'lab', reg: 6, rot: 'IX · Myth or Fact?', t: 'Six things people say about bilinguals.', p: 'Vote out loud. Then say it with a degree: much, far, a bit, slightly.' },
  { k: 'laudo', est: 'w', min: 6, img: 'capa', reg: 7, rot: 'X · Your Brain Report', t: 'Is it ever too late to learn a language?', p: 'Read your numbers out loud with the grammar. Then write your report. It goes to your My notes.' }
];

var PASSA = [
  { k: 'DREAM', q: 'Which language do you dream in? Always the same one?', ops: ['PORTUGUESE', 'ENGLISH', 'BOTH'] },
  { k: 'COUNT', q: 'When you count money, or do quick math, which language is in your head?', ops: ['PORTUGUESE', 'ENGLISH', 'BOTH'] },
  { k: 'OUCH!', q: 'You hit your toe on the table. Which language comes out first?', ops: ['PORTUGUESE', 'ENGLISH', 'BOTH'] },
  { k: 'BORROWED', q: 'Is there an English word you use even when you speak Portuguese? Which one?', ops: ['YES', 'NO'] },
  { k: 'SWITCH', q: 'Do you ever switch languages in the middle of a sentence? When?', ops: ['OFTEN', 'SOMETIMES', 'NEVER'] }
];
var TRAP = { k: 'HARDER?', q: 'Is English harder than Portuguese for you? How much harder? Say a full sentence: “English is … harder for me.”', ops: [['VERY HARDER', 'very'], ['MUCH / A LOT / FAR HARDER', 'much'], ['A BIT / SLIGHTLY HARDER', 'bit'], ['MORE HARDER', 'more']] };

var CORES = { pt: [['VERMELHO', '#ff6b57'], ['AZUL', '#5ab4ff'], ['VERDE', '#46d39a'], ['AMARELO', '#ffd166'], ['ROXO', '#b79cff']], en: [['RED', '#ff6b57'], ['BLUE', '#5ab4ff'], ['GREEN', '#46d39a'], ['YELLOW', '#ffd166'], ['PURPLE', '#b79cff']] };
var NOMES_COR = ['red', 'blue', 'green', 'yellow', 'purple'];
function sequenciaStroop(r) {
  var base = ordem([0, 1, 2, 3, 4, 0, 1, 2, 3, 4], r === 'pt' ? 3 : 8).slice(0, 8);
  return base.map(function (w, i) { var ink = (w + 1 + (i % 3)) % 5; return [w, ink]; });
}

var ANTES = [
  { q: 'Most people in the world: do they speak one language, or two or more? Guess.', h: 'I think most people speak only one. Am I wrong?' },
  { q: 'Is a child’s brain better at languages than an adult’s? Why do you think so?', h: 'Maybe a bit better, but adults study harder.' }
];
var CAPS = [
  { k: 'PART ONE', ini: 0, fim: 100, q: 'What did you learn in this part? Were you surprised by anything?', h: 'More people are bilingual than I thought.' },
  { k: 'PART TWO', ini: 100, fim: 175, q: 'What does the video say about children and languages?', h: 'Children may learn languages more easily. It’s a theory.' },
  { k: 'PART THREE', ini: 175, fim: 235, q: 'What good things can a second language do for adults, and for an old brain?', h: 'Adults are more rational in a second language, and it can delay dementia.' },
  { k: 'THE END', ini: 235, fim: 300, q: 'What did people think about two languages in the past? And today?', h: 'They thought it was bad for kids. Today we know it’s good for the brain.' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "Most people in the world speak two or more languages.", "t": true, "tm": "0:18"},
  {"f": "There are two types of bilingual people.", "t": false, "tm": "1:02", "c": "No. There are three: compound, coordinate and subordinate."},
  {"f": "The theory says adults learn languages more easily than children.", "t": false, "tm": "2:30", "c": "No. Children learn a lot more easily: their brains use both sides."},
  {"f": "Two languages can delay dementia by up to five years.", "t": true, "tm": "3:27"},
  {"f": "Before the 1960s, experts thought two languages were bad for children.", "t": true, "tm": "3:40"},
  {"f": "A bilingual brain is much smarter, says the video.", "t": false, "tm": "4:22", "c": "No. It may not make you smarter, but it is far healthier."}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · How big is the difference?",
  "quem": "The researcher",
  "fala": "The researcher: “Last question, volunteer. Is a bilingual brain very different?”",
  "reacoes": [
    [
      "A big difference",
      "A bilingual brain is far healthier and much more active.",
      "“Good. Far and much: a big difference.”"
    ],
    [
      "A small difference",
      "Kids learn a bit more easily than adults, but it’s only a theory.",
      "“Right. A bit: a small difference.”"
    ],
    [
      "Not smarter",
      "Bilinguals aren’t much smarter, but their brains work a lot harder.",
      "“Careful: not much smarter. That is the video’s point.”"
    ]
  ]
};

var GRAUS = [['A BIT · SLIGHTLY', 'pouco'], ['MUCH · A LOT · FAR', 'muito'], ['NOT NEARLY AS … AS', 'nearly'], ['VERY + -ER', 'very'], ['MORE + -ER', 'more']];
var DIAL = [
  { t: 'Ana: 20 seconds in Portuguese, 21 seconds in English.', q: 'Compare her two times.', ok: 'pouco', frase: 'Ana was slightly slower in English.', por: 'One second of twenty: a small difference. slightly / a bit.' },
  { t: 'Leo: 18 seconds in Portuguese, 36 seconds in English.', q: 'Compare his two times.', ok: 'muito', frase: 'Leo was much slower in English. Twice as slow!', por: 'Double the time: a big difference. much / a lot / far.' },
  { t: 'No switching: 2 mistakes. Switching languages: 14 mistakes.', q: 'How difficult was switching?', ok: 'muito', frase: 'Switching was far more difficult.', por: 'Seven times more mistakes: far / much / a lot + more difficult.' },
  { t: 'Course A: $300 a month. Course B: $310 a month.', q: 'Compare the two prices.', ok: 'pouco', frase: 'Course B is a bit more expensive.', por: 'Ten dollars of three hundred: a bit / slightly.' },
  { t: 'Bea’s English: 6 out of 10. Her Portuguese: 10 out of 10.', q: 'Compare her two languages. Start with: “Her English isn’t…”', ok: 'nearly', frase: 'Her English isn’t nearly as good as her Portuguese.', por: 'A big difference, said with not nearly as … as.' },
  { t: 'Before the course: 40 new words a month. After the course: 90.', q: 'Compare before and after.', ok: 'muito', frase: 'She learns a lot faster now.', por: 'More than double: a lot / much / far.' }
];
var DNAO = { very: 'VERY goes with fast, never with faster. Use much / a lot / far + faster.', more: 'Never more + -er. faster OR more difficult, not both.' };

var TIPOS = [['COMPOUND', 'two languages from the start, one set of ideas'], ['COORDINATE', 'two sets of ideas: one for home, one for school'], ['SUBORDINATE', 'the new language goes through the first one']];
var PESSOAS = [
  { k: 'THE DAUGHTER', t: 'Her family moved from Peru to the US when she was two. She learned English and Spanish at the same time, as she discovered the world.', ok: 0, nao: 'She learned both at the same time, from the start: compound.' },
  { k: 'HER BROTHER', t: 'He was a teenager. He learned English at school, and kept speaking Spanish at home and with friends.', ok: 1, nao: 'School in one language, home in the other: two sets of ideas, coordinate.' },
  { k: 'THEIR PARENTS', t: 'They learned English as adults. They think in Spanish first, and translate in their heads.', ok: 2, nao: 'The new language goes through the first one: subordinate.' }
];

var NUMEROS = [7, 12, 3, 18, 9, 15, 4, 11, 20, 6];
var BORDAS = ordem([0, 1, 0, 1, 0, 1, 1, 0, 1, 0], 5);

var MITOS = [
  { t: 'Bilinguals are smarter.', ok: 'mito', por: 'The video says it may not make you smarter, but it makes your brain healthier and more active.', grau: 'A bilingual brain isn’t much smarter, but it’s far healthier.' },
  { t: 'Most people in the world speak two or more languages.', ok: 'fato', por: 'The bilingual and multilingual majority.', grau: 'Bilinguals are much more common than most people think.' },
  { t: 'Before the 1960s, people thought two languages were bad for children.', ok: 'fato', por: 'It was seen as a problem, because of bad studies.', grau: 'Today people are much more positive about it.' },
  { t: 'After 30, it’s too late to learn a new language.', ok: 'mito', por: 'It’s never too late.', grau: 'It’s a bit harder, not much harder.' },
  { t: 'Two languages can delay dementia by up to five years.', ok: 'fato', por: 'Up to five years.', grau: 'A bilingual brain stays healthy a lot longer.' },
  { t: 'Children learn languages more easily than adults.', ok: 'depende', por: 'It’s a theory. Kids use both sides of the brain; adults are more rational in a second language.', grau: 'Kids learn a bit more easily, but adults are far more rational.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ps: { n: 0, sel: {}, trap: '' }, st: { r: 'pt', i: -1, t0: 0, tempos: {} }, video: { p: 0, cap: 0, viu: {} }, dl: { n: 0, esc: '' }, tp: { n: 0, esc: -1 }, tr: { r: 1, i: -1, t0: 0, tempos: {}, erros: { 1: 0, 2: 0 } }, mt: { n: 0, esc: '' } };

/* o cérebro: oito regiões; acesas = as cenas já visitadas (até reg) */
var REG = [[150, 70, 34], [95, 95, 30], [205, 95, 30], [70, 150, 28], [150, 140, 32], [230, 150, 28], [110, 200, 30], [190, 200, 30]];
function cerebro(ate, mini) {
  var s = '<svg class="cerebro' + (mini ? ' mini' : '') + '" viewBox="20 20 260 230" role="img" aria-label="The brain scan"><path class="contorno" d="M150 36 C95 30 52 62 48 112 C44 150 58 196 98 222 C122 238 178 238 202 222 C242 196 256 150 252 112 C248 62 205 30 150 36Z"/><path class="sulco" d="M150 40 C140 90 160 140 150 230"/>';
  REG.forEach(function (r, i) { var on = i <= ate; s += '<circle class="reg' + (on ? ' on' : '') + (i === ate ? ' agora' : '') + '" cx="' + r[0] + '" cy="' + r[1] + '" r="' + r[2] + '"/>'; });
  REG.forEach(function (r, i) { if (i) { var p = REG[i - 1]; s += '<line class="liga' + (i <= ate ? ' on' : '') + '" x1="' + p[0] + '" y1="' + p[1] + '" x2="' + r[0] + '" y2="' + r[1] + '"/>'; } });
  return s + '</svg>';
}
function mostrador(sel) {
  var pos = { pouco: -55, muito: 0, nearly: 55 }, a = pos[sel];
  var s = '<svg class="mostrador" viewBox="0 0 300 170" aria-hidden="true"><path class="arco-m" d="M30 150 A120 120 0 0 1 270 150"/>';
  [['A BIT', -55], ['MUCH', 0], ['NOT NEARLY', 55]].forEach(function (m) { var r = (m[1] - 90) * Math.PI / 180, x = 150 + 135 * Math.cos(r), y = 150 + 135 * Math.sin(r); s += '<text class="marca-m" x="' + x.toFixed(0) + '" y="' + (y + 4).toFixed(0) + '">' + m[0] + '</text>'; });
  if (a !== undefined) { var r2 = (a - 90) * Math.PI / 180; s += '<line class="ponteiro-m" x1="150" y1="150" x2="' + (150 + 100 * Math.cos(r2)).toFixed(0) + '" y2="' + (150 + 100 * Math.sin(r2)).toFixed(0) + '"/>'; }
  return s + '<circle cx="150" cy="150" r="8" class="eixo-m"/></svg>';
}
function seg(ms) { return (ms / 1000).toFixed(1) + ' s'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE LAB</span><h1>The Brain <b>Lab</b></h1>'
    + '<p class="sub">You are the volunteer. Two languages, one brain, and one question: <b>how much</b> harder? <b>A bit</b>, or <b>far</b>?</p>'
    + '<div class="chipsx"><span class="pilula">much / a lot / far + -er</span><span class="pilula">a bit / slightly + -er</span><span class="pilula">not nearly as … as</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the lab</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + cerebro(3) + '</div></div>';
};

R.passa = function (c) {
  var e = S.ps, n = e.n, fim = n >= PASSA.length;
  var carimbos = '<div class="passaporte vd"><small>LANGUAGE PASSPORT · VOLUNTEER</small><div class="carimbos">' + PASSA.map(function (p, i) { return '<span class="carimbo-p' + (e.sel[i] ? ' on' : '') + '"><b>' + p.k + '</b>' + (e.sel[i] || '…') + '</span>'; }).join('') + '<span class="carimbo-p trap' + (e.trap ? ' on' : '') + '"><b>' + TRAP.k + '</b>' + (e.trap ? TRAP.ops.filter(function (o) { return o[1] === e.trap; })[0][0] : '…') + '</span></div></div>';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + carimbos + '</div><div class="lado-l"><div class="pergunta vd"><small>' + TRAP.k + '</small><h2>' + TRAP.q + '</h2></div><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD · DON’T CORRECT YET</h5><div class="tres-b">'
    + TRAP.ops.map(function (o) { return '<button type="button" class="pilula' + (e.trap === o[1] ? ' on' : '') + '" data-a="ps-trap" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (e.trap ? '<p class="aprova">Stamped. ' + (e.trap === 'very' || e.trap === 'more' ? 'The lab keeps this sentence. It comes back in the report.' : 'Good. Now the first test: your brain against a color.') + '</p>' : '') + '</div></div>';
  var x = PASSA[n];
  return cab(c) + trilha(PASSA.concat([TRAP]), n) + '<div class="mesa-c"><div class="lado-l">' + carimbos + '</div><div class="lado-l"><div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div><div class="tres-b">'
    + x.ops.map(function (o) { return '<button type="button" class="pilula grande-p" data-a="ps" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div><p class="dica-aluno">Answer in a full sentence. Then your teacher stamps it.</p></div></div>';
};

R.stroop = function (c) {
  var e = S.st, seq = e.r === 'fim' ? [] : sequenciaStroop(e.r), lista = e.r === 'fim' ? null : CORES[e.r];
  var tempos = '<div class="tempos-st">' + ['pt', 'en'].map(function (r) { return '<span class="' + (e.tempos[r] ? 'feito' : '') + '"><small>' + (r === 'pt' ? 'PORTUGUESE' : 'ENGLISH') + '</small><b>' + (e.tempos[r] ? seg(e.tempos[r]) : '—') + '</b></span>'; }).join('') + '</div>';
  if (e.r === 'fim') {
    var dif = e.tempos.en - e.tempos.pt, rel = e.tempos.en / e.tempos.pt;
    return cab(c) + '<div class="mesa-c"><div class="lado-l">' + tempos + '<div class="pede vd"><small>THE DIFFERENCE</small><b>' + seg(Math.abs(dif)) + ' · ' + (rel >= 1.4 ? 'a big difference: much / a lot / far' : 'a small difference: a bit / slightly') + '</b></div></div><div class="lado-l"><div class="pergunta vd"><small>THE RESULT</small><h2>Which round was harder? How MUCH harder?</h2></div>' + fala('st', ['The English round was … harder.', 'I was … slower in …'], ['much', 'a lot', 'far', 'a bit', 'slightly']) + '</div></div>';
  }
  if (e.i < 0) return cab(c) + tempos + '<div class="foco"><div class="pergunta vd"><small>ROUND ' + (e.r === 'pt' ? '1 · PORTUGUESE WORDS' : '2 · ENGLISH WORDS') + '</small><h2>Eight words. Say the COLOR of the ink, in English, as fast as you can.</h2></div><div style="text-align:center"><button type="button" class="btn cheio" data-a="st-go">Start the clock</button></div></div>';
  var w = seq[e.i];
  return cab(c) + tempos + '<div class="foco"><div class="palavra-st" style="color:' + lista[w[1]][1] + '">' + lista[w[0]][0] + '</div><p class="dica-aluno" style="text-align:center">' + (e.i + 1) + ' of 8 · say the color of the ink</p><p class="so-prof dica-aluno" style="text-align:center">The ink is <b>' + NOMES_COR[w[1]] + '</b>.</p>'
    + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="st-ok">Answered</button></div></div>';
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + o cérebro da aula que acende uma região por acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'A bilingual brain', '&start=0&end=300'); }
var debAcesa = {};
function debEstado() {
  var e = (S.fq && S.fq.deb_vm && S.fq.deb_vm.r) || {}, ok = 0, feitas = 0, st = [];
  DEB_VM.itens.forEach(function (x, i) {
    var r = e[i]; if (r == null) { st.push(0); return; }
    feitas++; if ((r === 't') === !!x.t) { ok++; st.push(1); } else st.push(-1);
  });
  return { ok: ok, feitas: feitas, st: st };
}
function debTopo(d, rot, titulo) {
  var n = DEB_VM.itens.length;
  return '<div class="deb-topo"><div><small>' + rot + ' · ' + d.feitas + ' OF ' + n + ' ANSWERED</small><h3>' + titulo + ' <b>' + d.ok + '</b> / ' + n + '</h3></div></div>';
}
function debNave() {
  var d = debEstado(), n = DEB_VM.itens.length;
  return debTopo(d, 'THE SCAN', 'Regions lit') + '<div class="deb-cerebro">' + cerebro(d.ok - 1, true) + '</div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Four short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'A bilingual brain', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.dial = function (c) {
  var e = S.dl, n = e.n, fim = n >= DIAL.length;
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + mostrador('') + '</div><div class="lado-l"><div class="pergunta vd"><small>SIX OF SIX</small><h2>Big: much / a lot / far. Small: a bit / slightly. Not the same at all: not nearly as … as.</h2></div></div></div>';
  var x = DIAL[n], ok = e.esc === x.ok;
  return cab(c) + trilha(DIAL, n) + '<div class="mesa-c"><div class="lado-l centro">' + mostrador(ok ? x.ok : '') + '<div class="pede vd dados"><small>THE NUMBERS</small><b>' + x.t + '</b></div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><h2>' + x.q + '</h2></div>' + (ok ? '<div class="balao vd ok-b"><p>' + x.frase + '</p></div><p class="aprova">' + x.por + '</p><div><button type="button" class="btn" data-a="dl-prox">Next</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP THE DEGREE YOU HEARD</h5><div class="tres-b">' + GRAUS.map(function (g) { return '<button type="button" class="pilula grande-p' + (e.esc === g[1] ? ' errado' : '') + '" data-a="dl" data-v="' + g[1] + '">' + g[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + (DNAO[e.esc] || 'Look at the numbers again: is the difference big or small?') + '</p>' : '')) + '</div></div>';
};

R.tipos = function (c) {
  var e = S.tp, n = e.n, fim = n >= PESSOAS.length;
  var leg = '<div class="tipos-l">' + TIPOS.map(function (t) { return '<span><b>' + t[0] + '</b>' + t[1] + '</span>'; }).join('') + '</div>';
  if (fim) return cab(c) + leg + '<div class="foco"><div class="pergunta vd"><small>AND YOU?</small><h2>Which type are you? Compare yourself with someone in your family: “My cousin is far more fluent than me.”</h2></div>' + fala('tp', ['I think I’m …', 'My … is far / a bit more … than me.'], ['far', 'much', 'a bit', 'slightly', 'fluent']) + '</div>';
  var x = PESSOAS[n], ok = e.esc === x.ok;
  return cab(c) + leg + trilha(PESSOAS, n) + '<div class="foco"><div class="balao vd"><small>' + x.k + '</small><p>' + x.t + '</p></div><div class="tres-b centro">'
    + TIPOS.map(function (t, i) { return '<button type="button" class="pilula grande-p' + (e.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="tp" data-n="' + i + '">' + t[0] + '</button>'; }).join('') + '</div>'
    + (e.esc >= 0 ? '<p class="' + (ok ? 'aprova' : 'recusa') + '" style="text-align:center">' + x.nao + '</p>' + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="tp-prox">Next</button></div>' : '') : '') + '</div>';
};

R.troca = function (c) {
  var e = S.tr;
  var placar = '<div class="tempos-st">' + [1, 2].map(function (r) { return '<span class="' + (e.tempos[r] ? 'feito' : '') + '"><small>' + (r === 1 ? 'ROUND 1 · ONE LANGUAGE' : 'ROUND 2 · SWITCHING') + '</small><b>' + (e.tempos[r] ? seg(e.tempos[r]) + ' · ' + e.erros[r] + ' mistakes' : '—') + '</b></span>'; }).join('') + '</div>';
  if (e.r === 3) return cab(c) + placar + '<div class="foco"><div class="pergunta vd"><small>TIME AND MISTAKES</small><h2>How much harder was switching? Say it with much, far, a bit or slightly.</h2></div>' + fala('tr', ['Switching was … harder.', 'I was … slower when I switched.', 'I made … more mistakes.'], ['much', 'far', 'a lot', 'a bit', 'slightly']) + '</div>';
  if (e.i < 0) return cab(c) + placar + '<div class="foco"><div class="pergunta vd"><small>ROUND ' + e.r + '</small><h2>' + (e.r === 1 ? 'Ten numbers, all with a green border: say them all in Portuguese.' : 'Ten numbers. Violet: English. Green: Portuguese. Switch every time it changes.') + '</h2></div><div style="text-align:center"><button type="button" class="btn cheio" data-a="tr-go">Start the clock</button></div></div>';
  var borda = e.r === 1 ? 1 : BORDAS[e.i];
  return cab(c) + placar + '<div class="foco"><div class="cartao-n ' + (borda ? 'pt' : 'en') + '"><b>' + NUMEROS[e.i] + '</b></div><p class="dica-aluno" style="text-align:center">' + (e.i + 1) + ' of 10 · ' + (borda ? 'green: Portuguese' : 'violet: English') + '</p>'
    + '<div class="tres-b centro"><button type="button" class="btn cheio" data-a="tr-ok">Answered</button><button type="button" class="btn so-prof" data-a="tr-erro">Mistake</button></div></div>';
};

R.mito = function (c) {
  var e = S.mt, n = e.n, fim = n >= MITOS.length;
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + cerebro(7) + '</div><div class="lado-l"><div class="pergunta vd"><small>THE WHOLE BRAIN IS LIT</small><h2>Let’s read your results.</h2></div></div></div>';
  var x = MITOS[n], vot = e.esc;
  return cab(c) + trilha(MITOS, n) + '<div class="foco"><div class="balao vd"><small>PEOPLE SAY</small><p>“' + x.t + '”</p></div><div class="tres-b centro">'
    + [['MYTH', 'mito'], ['FACT', 'fato'], ['IT DEPENDS', 'depende']].map(function (o) { return '<button type="button" class="pilula grande-p' + (vot === o[1] ? (vot === x.ok ? ' certo' : ' errado') : '') + '" data-a="mt" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (vot ? '<p class="' + (vot === x.ok ? 'aprova' : 'recusa') + '" style="text-align:center">' + (vot === x.ok ? '' : 'Not quite. ') + x.por + '</p><div class="pede vd centro-t"><small>NOW SAY IT WITH A DEGREE</small><b>' + x.grau + '</b></div><div style="text-align:center"><button type="button" class="btn" data-a="mt-prox">Next</button></div>' : '') + '</div>';
};

R.laudo = function (c) {
  var st = S.st.tempos, tr = S.tr, trap = S.ps.trap;
  var dados = '<div class="laudo vd"><small>BRAIN REPORT · VOLUNTEER</small>' + (st.pt ? '<span>Stroop · Portuguese <b>' + seg(st.pt) + '</b></span><span>Stroop · English <b>' + seg(st.en) + '</b></span>' : '<span>Stroop · not done</span>')
    + (tr.tempos[1] ? '<span>One language <b>' + seg(tr.tempos[1]) + ' · ' + tr.erros[1] + ' mistakes</b></span><span>Switching <b>' + seg(tr.tempos[2]) + ' · ' + tr.erros[2] + ' mistakes</b></span>' : '<span>Switch test · not done</span>')
    + (trap === 'very' || trap === 'more' ? '<span class="volta">Your passport said: <s>' + (trap === 'very' ? 'very harder' : 'more harder') + '</s>. Say it again: much / a bit harder.</span>' : '') + '</div>';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I was … slower in …\nSwitching was … harder.\nMy English isn’t nearly as … as my …', 'Your brain report',
    ['much ', 'a lot ', 'far ', 'a bit ', 'slightly ', 'not nearly as '], ['YOUR BRAIN REPORT', 'Your numbers with the grammar, and you today compared with you one year ago.'])
    + '<div class="lado-fim">' + cerebro(7, 1) + dados + '<div class="grande vd"><span>big: <u>much / a lot / far</u> + -er</span><span>small: <u>a bit / slightly</u> + -er</span><span><u>not nearly as</u> good <u>as</u> · never <s>very faster</s></span></div>'
    + mostra('fim', 'I was a lot slower in the English round.<br>Switching was far harder than I thought.<br>My English is much better than a year ago, but it isn’t nearly as good as my Portuguese.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.ps = function (b, n, v) { S.ps.sel[S.ps.n] = v; S.ps.n++; };
TOQUES['ps-trap'] = function (b, n, v) { S.ps.trap = v; };
TOQUES['st-go'] = function () { S.st.i = 0; S.st.t0 = Date.now(); };
TOQUES['st-ok'] = function () { var e = S.st; e.i++; if (e.i >= 8) { e.tempos[e.r] = Date.now() - e.t0; e.r = e.r === 'pt' ? 'en' : 'fim'; e.i = -1; } };
/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.dl = function (b, n, v) { S.dl.esc = v; };
TOQUES['dl-prox'] = function () { S.dl = { n: S.dl.n + 1, esc: '' }; };
TOQUES.tp = function (b, n) { S.tp.esc = n; };
TOQUES['tp-prox'] = function () { S.tp = { n: S.tp.n + 1, esc: -1 }; };
TOQUES['tr-go'] = function () { S.tr.i = 0; S.tr.t0 = Date.now(); };
TOQUES['tr-erro'] = function () { S.tr.erros[S.tr.r]++; };
TOQUES['tr-ok'] = function () { var e = S.tr; e.i++; if (e.i >= 10) { e.tempos[e.r] = Date.now() - e.t0; e.r++; e.i = -1; } };
TOQUES.mt = function (b, n, v) { S.mt.esc = v; };
TOQUES['mt-prox'] = function () { S.mt = { n: S.mt.n + 1, esc: '' }; };
