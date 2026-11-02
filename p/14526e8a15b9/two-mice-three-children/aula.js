/* ============================================================
   TWO MICE, THREE CHILDREN · THE MEADOW NOTEBOOK · LIVE CLASS  15/10/2026
   Main series A1 · os plurais: + S / + ES (cats, boxes), Y → IES (babies),
   as palavras que mudam (man → men, woman → women, child → children,
   person → people, mouse → mice), OO → EE (tooth → teeth, foot → feet,
   goose → geese) e as que não mudam (fish, sheep).
   Armadilha do português (só no guia): o português sempre põe -s, então sai
   "two childrens", "five peoples", "my foots", "three mouses"; e "one people"
   (gente = people, mas uma pessoa = one person).
   O VÍDEO: "I Raised a Family of Tiny Mice (In 80 Days)" (Worcester
   Terrariums, 70VK9pOqsKs): no dia 1, um ratinho-do-trigo, Bernard; chegam
   Bianca e Gus (três mice); nascem os filhotes; no dia 80, dezessete mice.
   Quatro trechos curtos, cada um com uma pergunta de contar.
   O MUNDO: o caderno de campo de um naturalista, à noite. Etiquetas de
   espécime (1 MOUSE → 3 MICE → 17 MICE), trigo dourado, verde quase preto.
   A1 de verdade: perguntas de até oito palavras, só be / have / can / do you;
   resposta de uma palavra vale; toda pergunta tem a versão fácil (Say it easier).
   ============================================================ */
var YT = '70VK9pOqsKs';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'loja', rot: 'I · My Home in Numbers', t: 'How many? Count your life.', p: 'Answer with a number. Your teacher taps + and −. Look at the word: does it change?' },
  { k: 'palavras', est: 'l', min: 5, img: 'ninho', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'conta', est: 'o', min: 7, img: 'caixa', rot: 'III · Count Them', t: 'Five photos. Count the animals.', p: 'Pick a photo. Count out loud. Say: “There are … mice.” Your teacher taps what you said.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'IV · Day 1 to Day 80', t: 'One mouse on day one. And on day eighty?', p: 'Answer first. Then the video plays in four short parts. Then True or Lie.' },
  { k: 'regra', est: 'f', min: 6, img: 'ninho', rot: 'VI · The Labels', t: 'One mouse, two mice.', p: 'Read the four labels out loud. Then fix the four traps.' },
  { k: 'escreve', est: 'w', min: 6, img: 'loja', rot: 'VII · My Notebook', t: 'Your home, in numbers.', p: 'Three short lines. How many people? Children? Pets? Rooms?' },
  { k: 'quiz', est: 'f', min: 5, extra: 1, img: 'caixa', rot: 'VIII · Quick Check', t: 'Five quick lines.', p: 'Say the whole sentence out loud. Then tap the word.' },
  { k: 'fim', est: 'o', min: 6, img: 'loja', rot: 'IX · Your Pet Shop', t: 'Open your own little pet shop.', p: 'Choose your animals. Then tell your teacher: “I have three mice and …”' }
];

/* I · o aquecimento: o contador da casa. O aluno diz um número; o professor toca + e −;
   a palavra embaixo muda sozinha (1 person / 3 people). No fim, a etiqueta da casa inteira. */
var CONTA = [
  { um: 'person', v: 'people', q: 'How many people live in your house?', f: 'Your house: how many people?', ex: 'Three people. Me, my wife and my son.', ini: 3 },
  { um: 'child', v: 'children', q: 'Do you have children? How many?', f: 'Children: yes or no?', ex: 'Yes, two children. / No children.', ini: 0 },
  { um: 'pet', v: 'pets', q: 'Do you have a pet?', f: 'A dog? A cat? A fish?', ex: 'Yes, one dog. / No pets.', ini: 0 },
  { um: 'bedroom', v: 'bedrooms', q: 'How many bedrooms are in your house?', f: 'Bedrooms: how many?', ex: 'Two bedrooms.', ini: 2 },
  { um: 'coffee', v: 'coffees', q: 'How many coffees do you drink a day?', f: 'Coffee: how many a day?', ex: 'Four coffees! / No coffee.', ini: 1 }
];
function forma(x, n) { return n === 1 ? x.um : x.v; }
function muda(x) { return x.um + 's' !== x.v; }   /* people, children: a palavra que não é só + s */

/* III · as fotos para contar: o aluno conta e diz; o professor toca a versão que ouviu */
var FOTOS = [
  { k: 'THE BOX', img: 'caixa', q: 'How many mice are in the box?', ops: [['There are three mice.', 'ok'], ['There are three mouses.', 'mouses'], ['There are three mouse.', 'um']] },
  { k: 'THE TANK', img: 'peixes', q: 'How many fish can you see?', ops: [['I can see six fish.', 'ok'], ['I can see six fishs.', 'fishs']] },
  { k: 'THE FIELD', img: 'ovelhas', q: 'How many sheep are in the field?', ops: [['There are five sheep.', 'ok'], ['There are five sheeps.', 'sheeps'], ['There are five ship.', 'ship']] },
  { k: 'THE ROAD', img: 'gansos', q: 'How many geese are on the road?', ops: [['There are six geese.', 'ok'], ['There are six gooses.', 'gooses'], ['There are six goose.', 'um']] },
  { k: 'THE NEST', img: 'ninho', q: 'How many babies are in the nest?', ops: [['There are three babies.', 'ok'], ['There are three babys.', 'babys'], ['There are three baby.', 'um']] }
];
var NAO = {
  mouses: 'mouse → MICE. A new word! one mouse, three mice.',
  um: 'Two, three, four… the word changes to plural.',
  fishs: 'fish → fish. No change! one fish, six fish.',
  sheeps: 'sheep → sheep. No change! one sheep, five sheep.',
  gooses: 'goose → GEESE. oo → ee. one goose, six geese.',
  babys: 'baby → BABIES. y → ies. one baby, three babies.',
  ship: 'ship = a boat! sheep (a long ee) = the animal. one sheep, five sheep.'
};

var ANTES = [
  { q: 'Do you like mice? Yes or no?', h: 'No! / Yes, small mice are cute.' },
  { q: 'Is a mouse a good pet?', h: 'Maybe. It is small and cute.' }
];
/* 16/10/2026 · A1 friendly (o Carlos: "12 minutos para um A1, ele vai ficar assustado"): as partes tocam SEM SOM
   (a narração nativa tem 196 palavras por minuto) e a história de cada parte vem escrita em inglês A1 ao lado. */
window.WL_SEM_LETRA = true;
var CAPS = [
  { k: 'DAY 1', ini: 0, fim: 30, diz: 'This is Bernard. He is a mouse. He is very small. This is a big plant.', q: 'Is Bernard big or small?', h: 'Small. He is a tiny mouse.' },
  { k: 'DAY 5', ini: 66, fim: 108, diz: 'Two new mice! This is Bianca. This is Gus. Now: three mice.', q: 'Who comes? How many mice now?', h: 'Bianca and Gus. Three mice.' },
  { k: 'DAY 50', ini: 519, fim: 570, diz: 'Look! This is a nest. Small baby mice. They are very cute.', q: 'What is in the nest?', h: 'Babies! Little mice. Very cute.' },
  { k: 'DAY 80', ini: 641, fim: 660, diz: 'Seventeen mice! One big family.', q: 'How many mice on day 80?', h: 'Seventeen mice!' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "Bernard is a tiny mouse.", "t": true, "tm": "0:00"},
  {"f": "On day 1, there are three mice.", "t": false, "tm": "0:16", "c": "No. Day 1: one mouse. Bernard."},
  {"f": "On day 5, Bianca and Gus come.", "t": true, "tm": "1:10"},
  {"f": "On day 5, there are two mice.", "t": false, "tm": "1:30", "c": "No. Three mice: Bernard, Bianca and Gus."},
  {"f": "On day 50, there are baby mice in the nest.", "t": true, "tm": "8:39"},
  {"f": "On day 80, there are three mice.", "t": false, "tm": "10:41", "c": "No. Seventeen mice! One big family."}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · Is a mouse a good pet now?",
  "quem": "The naturalist",
  "fala": "The naturalist: “Day 80: seventeen mice! Is a mouse a good pet now?”",
  "reacoes": [
    [
      "Yes",
      "Yes. Mice are small and cute.",
      "“True. But they have a lot of babies!”"
    ],
    [
      "No",
      "No. They have a lot of babies.",
      "“Right. One mouse, then seventeen!”"
    ],
    [
      "Maybe",
      "Maybe. I have a big house.",
      "“Then you can have two mice. Not seventeen!”"
    ]
  ]
};
var SEG0 = [0, 30];   /* o trecho de abertura do vídeo (antes de qualquer ▶) */
var DEB_SEG = [[0, 30], [66, 108], [519, 570], [641, 660]];   /* os trechos limpos: o ▶ toca só dentro de um deles */
/* o ▶ recarrega o vídeo no trecho limpo da linha (o vídeo toca em quatro partes curtas, mudo; cada ▶ fica dentro de uma delas) */
window.addEventListener('load', function () {
  TOQUES['fq-pula'] = function (b, n, v, c) {
    var t = +v, g = null; DEB_SEG.forEach(function (x) { if (t >= x[0] && t < x[1]) g = x; });
    if (!g) return false;
    S.depSeg = [t, g[1]];
    var fr = document.querySelector('#palco .video iframe');
    if (!fr) return false;
    fr.src = fr.src.replace(/([?&])start=\d+/, '$1start=' + t).replace(/([?&])end=\d+/, '$1end=' + g[1]).replace(/&autoplay=\d/, '') + '&autoplay=1';
    return false;
  };
});

var FITAS = [['+ S · + ES', 'cat → cats · box → boxes · bus → buses'], ['Y → IES', 'baby → babies · city → cities'], ['A NEW WORD', 'mouse → mice · child → children · man → men · woman → women · person → people'], ['OO → EE · NO CHANGE', 'tooth → teeth · foot → feet · goose → geese · fish → fish · sheep → sheep']];
var ARMAS = [
  ['CHILD', 'I have two childrens.', 'I have two <b>children</b>.', 'children is already plural. No -s.'],
  ['PERSON', 'Five peoples live in my house.', 'Five <b>people</b> live in my house.', 'people is already plural. No -s.'],
  ['FOOT', 'My foots are cold.', 'My <b>feet</b> are cold.', 'one foot, two feet.'],
  ['ONE', 'One people is at the door.', 'One <b>person</b> is at the door.', 'one person, two people.']
];

var QUIZ = [
  { f: 'I have two ___.', op: ['children', 'childrens', 'child'], nao: 'child → children. No -s.' },
  { f: 'There are three ___ in the box.', op: ['mice', 'mouses', 'mouse'], nao: 'mouse → mice.' },
  { f: 'My ___ are cold.', op: ['feet', 'foots', 'foot'], nao: 'foot → feet.' },
  { f: 'Five ___ live in my house.', op: ['people', 'peoples', 'person'], nao: 'person → people. No -s.' },
  { f: 'The mouse has four ___.', op: ['babies', 'babys', 'baby'], nao: 'baby → babies: y → ies.' }
];

/* IX · a loja do aluno: ele escolhe quantos de cada; a placa mostra a forma certa */
var LOJA = [
  { um: 'mouse', v: 'mice', ic: 'M' }, { um: 'fish', v: 'fish', ic: 'F' }, { um: 'puppy', v: 'puppies', ic: 'P' },
  { um: 'rabbit', v: 'rabbits', ic: 'R' }, { um: 'goose', v: 'geese', ic: 'G' }
];
var PERG_LOJA = [
  { q: 'What animals do you have?', f: 'Mice? Fish? Puppies?', voce: ['I have … mice.', 'I have … fish and … puppies.', 'I have one …'] },
  { q: 'Which animal is your favorite?', f: 'Your favorite: what animal?', voce: ['My favorite is the …', 'I love the …'] },
  { q: 'Day 80! Your mice have babies. How many mice now?', f: 'Mice have babies. How many now?', voce: ['Now I have … mice!', 'Oh no! … mice!'] }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { n: 0, v: CONTA.map(function (x) { return x.ini; }), fac: {} }, video: { p: 0, cap: 0, viu: {} }, ct: { sel: 0, esc: {} },
  qz: { n: 0, esc: -1 }, loja: { v: [0, 0, 0, 0, 0], n: 0, fac: {} } };

/* a etiqueta de espécime do caderno */
function etiqueta(n, palavra, novo, sub) {
  return '<div class="etq vd' + (novo ? ' novo' : '') + '"><small>' + (sub || 'SPECIMEN') + '</small><b><span class="etq-n">' + n + '</span> ' + palavra + '</b></div>';
}
function passo(n, dir) { return '<button type="button" class="pas" data-a="' + dir + '" data-n="' + n + '" aria-label="' + (dir.slice(-1) === '+' ? 'plus one' : 'minus one') + '">' + (dir.slice(-1) === '+' ? '+' : '−') + '</button>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · A1 · THE MEADOW NOTEBOOK</span><h1>Two Mice, <b>Three Children</b></h1>'
    + '<p class="sub"><b>Day 1: one tiny mouse.</b> Day 80: seventeen mice. Count with a real naturalist, and learn the words that change: one mouse, two mice. One child, three children.</p>'
    + '<div class="chipsx"><span class="pilula">one mouse, two mice</span><span class="pilula">one child, three children</span><span class="pilula">one fish, six fish</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the notebook</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + etiqueta(1, 'mouse', 0, 'DAY 1') + etiqueta(3, 'mice', 0, 'DAY 5') + etiqueta(17, 'mice', 1, 'DAY 80') + '</div></div>';
};

R.voce = function (c) {
  var e = S.voce, fim = e.n >= CONTA.length;
  var lista = '<div class="casa-lista">' + CONTA.map(function (x, i) {
    var n = e.v[i], ja = i < e.n;
    return '<div class="casa-item' + (i === e.n ? ' on' : '') + (ja ? ' ja' : '') + '"><span class="etq-n">' + (ja || i === e.n ? n : '?') + '</span><b class="' + (ja && n !== 1 && muda(x) ? 'muda' : '') + '">' + (ja || i === e.n ? forma(x, n) : x.v) + '</b></div>';
  }).join('') + '</div>';
  var lado;
  if (fim) lado = '<div class="casa-card"><small>MY HOME IN NUMBERS</small><h2>Look at your list. Two words are not “+ s”.</h2>'
    + '<p>person → <b>people</b>. child → <b>children</b>. Today: the words that change. The video has more: one mouse, seventeen…?</p></div>';
  else {
    var x = CONTA[e.n], n = e.v[e.n];
    lado = '<div class="casa-card"><small>QUESTION ' + (e.n + 1) + ' OF ' + CONTA.length + '</small><p class="pq">' + x.q + '</p>'
      + (e.fac[e.n] ? '<p class="pq-f">' + x.f + '</p>' : '')
      + '<div class="contador">' + passo(e.n, 'cv-') + '<div class="cont-n"><b>' + n + '</b><span class="' + (n !== 1 && muda(x) ? 'muda' : '') + '">' + forma(x, n) + '</span></div>' + passo(e.n, 'cv+') + '</div>'
      + '<div class="pratos-bt"><button type="button" class="btn" data-a="cv-f">Say it easier</button><button type="button" class="btn cheio" data-a="cv-prox">' + (e.n < CONTA.length - 1 ? 'Next question' : 'See my list') + '</button></div></div>'
      + '<p class="so-prof dica-aluno">Example: “' + x.ex + '” A number alone is a good answer.</p>';
  }
  return cab(c) + '<div class="casa-mesa"><div class="caderno vd"><small class="cad-t">MY HOME</small>' + lista + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.conta = function (c) {
  var e = S.ct, x = FOTOS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitos = FOTOS.filter(function (t, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="rolos">' + FOTOS.map(function (t, i) { return '<button type="button" class="foto-b' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feito' : '') + '" data-a="ct" data-n="' + i + '" style="background-image:url(' + img(t.img) + ')"><b>' + t.k + '</b></button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l"><div class="aberta grande" style="background-image:url(' + img(x.img) + ')"><span>' + x.k + '</span></div><div class="pergunta vd ja"><h2>' + x.q + '</h2></div></div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><small>IN THE NOTEBOOK</small><p>' + x.ops[0][0] + '</p></div><p class="aprova">' + (feitos >= FOTOS.length ? 'Five photos, five plurals. Mice, fish, sheep, geese, babies: not one “+ s”! Now a real mouse family.' : 'Good! Next photo.') + '</p>'
      : '<h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o, j) { return '<button type="button" class="versao' + (esc === o[1] && o[1] !== 'ok' ? ' errado' : '') + '" data-a="ct-v" data-v="' + o[1] + '" data-n="' + j + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '')
      + fala('ct' + e.sel, ['There are … ', 'I can see … ', 'One, two, three…'], []) + '<p class="so-prof dica-aluno">Any number is fine: count with the student. Listen to the word after the number.</p>') + '</div></div>';
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + a etiqueta de espécime que ganha um rato a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'A Family of Tiny Mice', '&start=' + (S.depSeg || SEG0)[0] + '&end=' + (S.depSeg || SEG0)[1] + '&controls=0&mute=1'); }
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
  var pal = d.ok === 1 ? 'mouse' : 'mice', nova = d.ok > (debAcesa.n || 0); debAcesa.n = d.ok;
  return debTopo(d, 'THE MEADOW NOTEBOOK', 'Right answers') + '<div class="etqs-linha deb-etq">' + etiqueta(d.ok, pal, nova, d.ok === n ? 'THE WHOLE FAMILY' : 'MICE COUNTED') + '</div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem.replace(/^The /, 'the ') + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>DAY 1 → DAY 80</b><small>Four short parts. Count the mice.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, part by part</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'A Family of Tiny Mice', '&start=' + k.ini + '&end=' + k.fim + '&controls=0&mute=1') + '<small class="cred">Worcester Terrariums · part ' + (e.cap + 1) + ' of 4 · only ' + (k.fim - k.ini) + ' seconds · no sound: read the story · tap the video to play or pause</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + ' · THE STORY</small><h2 style="font-weight:500">' + k.diz + '</h2></div>'
      + '<div class="pergunta vd ja"><small>' + k.k + ' · QUESTION</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next part</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to see that part again (no sound, like before).</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas4">' + FITAS.map(function (f, i) { return '<div class="fita4 f' + i + '"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.escreve = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('casa', (S.txt || {}).casa || '', (S.salvo || {}).casa, 'In my house there are 3 people.\nI have 2 children.\nI have 1 dog.', 'My home in numbers',
    ['In my house there are ', ' people', ' children', 'I have ', ' a ', ' pets', ' bedrooms', 'I don’t have '], ['MY NOTEBOOK', 'Three short lines. People? Children? Pets? Rooms?'])
    + '<div class="lado-fim"><div class="caderno vd"><small class="cad-t">A NATURALIST’S PAGE</small><p class="cad-p">In my house there are <u>4 people</u>.</p><p class="cad-p">I have <u>2 children</u>.</p><p class="cad-p">I have <u>1 cat</u> and <u>3 fish</u>.</p></div>'
    + mostra('casa', 'In my house there are three people.<br>I don’t have children.<br>I have two cats.', 1)
    + '<p class="so-prof dica-aluno">Short lines are perfect. A1: one correction per line is enough.</p></div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>one child, two children · one person, two people · one mouse, two mice · one foot, two feet.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.fim = function (c) {
  var e = S.loja, n = Math.min(e.n, PERG_LOJA.length - 1), p = PERG_LOJA[n];
  var placa = '<div class="placa vd"><small>MY PET SHOP</small>' + LOJA.map(function (x, i) {
    var v = e.v[i];
    return '<div class="placa-l"><i aria-hidden="true">' + x.ic + '</i><span class="placa-w' + (v > 1 && x.um + 's' !== x.v ? ' muda' : '') + '">' + v + ' ' + (v === 1 ? x.um : x.v) + '</span>' + passo(i, 'lj-') + passo(i, 'lj+') + '</div>';
  }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + placa + '</div>'
    + '<div class="lado-l"><div class="pede vd"><small>YOUR TEACHER ASKS · ' + (n + 1) + ' OF ' + PERG_LOJA.length + '</small><b>“' + p.q + '”</b>' + (e.fac[n] ? '<span class="pq-f">' + p.f + '</span>' : '') + '</div>'
    + fala('lj' + n, p.voce, ['mice', 'fish', 'puppies', 'geese', 'rabbits'])
    + '<div class="pratos-bt"><button type="button" class="btn" data-a="lj-f">Say it easier</button>' + (n < PERG_LOJA.length - 1 ? '<button type="button" class="btn" data-a="lj-prox">Next question</button>' : '') + '</div>'
    + (e.n >= PERG_LOJA.length - 1 ? '<p class="aprova">From one mouse to a whole shop. Today you counted like a naturalist: mice, fish, sheep, geese, children, people.</p>' : '')
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['cv+'] = function (b, n) { if (S.voce.v[n] < 20) S.voce.v[n]++; };
TOQUES['cv-'] = function (b, n) { if (S.voce.v[n] > 0) S.voce.v[n]--; };
TOQUES['cv-f'] = function () { S.voce.fac[S.voce.n] = 1; };
TOQUES['cv-prox'] = function () { S.voce.n++; };
TOQUES.ct = function (b, n) { S.ct.sel = n; };
TOQUES['ct-v'] = function (b, n, v) { S.ct.esc[S.ct.sel] = v; };
/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };
TOQUES['lj+'] = function (b, n) { if (S.loja.v[n] < 20) S.loja.v[n]++; };
TOQUES['lj-'] = function (b, n) { if (S.loja.v[n] > 0) S.loja.v[n]--; };
TOQUES['lj-f'] = function () { S.loja.fac[Math.min(S.loja.n, PERG_LOJA.length - 1)] = 1; };
TOQUES['lj-prox'] = function () { S.loja.n++; };
