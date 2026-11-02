/* ============================================================
   HAVE YOU EVER? · FAR FROM HOME · LIVE CLASS  06/10/2026
   Main series A2 · present perfect de EXPERIÊNCIA (Have you ever +
   particípio? · Yes, I have / No, I haven't · never, once, twice) e a
   TROCA: o detalhe (quando, onde, o quê) vai para o passado (I went in 2018).
   O MUNDO (da aula velha): entrevista de rua em Toronto (vídeo real
   6xl8PD9gbF8, cinco capítulos selados), o bingo de experiências, o
   passaporte do professor com seis carimbos e a roleta Never Have I Ever.
   A CARA: o PASSAPORTE azul-noite com carimbos de tinta (CSS) e a cartela
   do bingo que ganha carimbo a cada resposta. Sem áudio.
   Fila: FILA-LIVE-386.md · 052.
   ============================================================ */
var YT = '6xl8PD9gbF8';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'mala', rot: 'I · Your Travels', t: 'Where has your life taken you?', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'bingo', est: 'o', min: 7, img: 'mapa', rot: 'II · Experience Bingo', t: 'You ask. Your teacher tells the truth.', p: 'Tap a square and ask: Have you ever…? Your teacher answers about real life and stamps it. Four in a line is BINGO.' },
  { k: 'palavras', est: 'l', img: 'janela', rot: 'III · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'janela', rot: 'IV · The Street Interview', t: 'Toronto. Strangers answer one question: have you ever lived abroad?', p: 'Answer first. Then the video plays in five short chapters.' },
  { k: 'falas', est: 'l', extra: 1, img: 'janela', rot: 'V · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'passaporte', rot: 'VI · The Rule', t: 'The experience has no date. The detail goes to the past.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'pass', est: 'o', min: 7, img: 'passaporte', rot: 'VII · The Passport', t: 'Your teacher’s passport. Six stamps.', p: 'Tap a stamp. Ask Have you ever…? Then ask for the detail, in the past.' },
  { k: 'nunca', est: 'o', min: 7, extra: 1, img: 'cartas', rot: 'VIII · Never Have I Ever', t: 'Spin. Say one true thing you have never done.', p: 'Your teacher says one too. Then ask why!' },
  { k: 'rua', est: 'o', min: 7, extra: 1, img: 'cidade', rot: 'IX · On the Street', t: 'A street interview. The camera is on you.', p: 'Your teacher is the interviewer. Answer about your real life, then ask back.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'mala', rot: 'X · Quick Check', t: 'Six quick sentences.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'casa', rot: 'XI · Home', t: 'The question from the street.', p: 'What does home mean to you? Write it, with one experience. It goes to your My notes.' }
];

var ABRE = [
  { k: 'HOME', q: 'Where were you born? Do you still live there?', fup: 'What do you miss about it?', st: ['I was born in …', 'Now I live in …'], ex: 'I was born in a small town, but now I live in the capital.' },
  { k: 'FARTHEST', q: 'What is the farthest place you know? How did you get there?', fup: 'Would you go back?', st: ['The farthest place I know is …', 'I went by …'], ex: 'The north of the country. I went by bus, for two days!' },
  { k: 'SUITCASE', q: 'What do you always take in your suitcase?', fup: 'And what do you always forget?', st: ['I always take …', 'I always forget …'], ex: 'I always take a book and too many clothes.' },
  { k: 'ONE YEAR', q: 'You can live in another country for one year. Where do you go?', fup: 'Why there?', st: ['I’d go to …, because …'], ex: 'I’d go to Canada, because I love the snow.' }
];
var FORMAS = [{ k: 'have', t: 'I HAVE + PARTICIPLE' }, { k: 'never', t: 'I HAVE NEVER …' }, { k: 'did', t: 'DID YOU EVER / ALREADY …', erro: 1 }, { k: 'data', t: 'I HAVE GONE … IN 2019', erro: 1 }];

var NOTA = {
  did: 'Your whole life, no date: Have you ever + participle.', part: 'After have: the participle (eaten, seen, been).', ja: 'Not already: Have you EVER …?',
  data: 'A date or a detail goes to the past: When did you go?', ordemq: 'A question needs did before the person: did you …?', didv: 'After did: the base verb (see, live, climb).'
};

var CASAS = [
  ['lived', 'abroad', 'live'], ['felt', 'homesick', 'feel', 'feeled'], ['eaten', 'sushi', 'eat', 'eated'], ['seen', 'snow', 'see', 'saw'],
  ['flown', 'in a plane', 'fly', 'flied'], ['lost', 'your passport', 'lose'], ['missed', 'a flight', 'miss'], ['slept', 'at an airport', 'sleep', 'sleeped'],
  ['met', 'a famous person', 'meet', 'meeted'], ['ridden', 'a horse', 'ride', 'rode'], ['cooked', 'for ten people', 'cook'], ['sung', 'karaoke', 'sing', 'sang'],
  ['broken', 'a bone', 'break', 'broke'], ['won', 'a prize', 'win', 'winned'], ['been', 'on TV', 'be', 'was'], ['swum', 'in the ocean', 'swim', 'swam']
];
CASAS.forEach(function (x) {
  x.ops = [['Have you ever ' + x[0] + ' ' + x[1] + '?', 'ok'], ['Did you ever ' + x[2] + ' ' + x[1] + '?', 'did'],
    x[3] ? ['Have you ever ' + x[3] + ' ' + x[1] + '?', 'part'] : ['Did you already ' + x[0] + ' ' + x[1] + '?', 'ja']];
});
var LINHAS = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], [0, 5, 10, 15], [3, 6, 9, 12]];

var CAPS = [
  { k: 'ABROAD?', ini: 18, fim: 47, q: 'Who has lived in another country? Who has never lived abroad?', h: 'One woman has lived in El Salvador, Hong Kong and the U.S. One man has never lived abroad. He has only traveled.' },
  { k: 'WHERE NEXT?', ini: 46, fim: 88, q: 'Where would they like to live? Why?', h: 'France (she is learning French), Sweden, the UK (family) and New York.' },
  { k: 'HOMESICK?', ini: 98, fim: 141, q: 'Have they ever felt homesick? What did they miss?', h: 'Yes. One missed the fields and the trees. One missed family and friends.' },
  { k: 'WHAT HELPS?', ini: 160, fim: 185, q: 'What do they do when they feel homesick?', h: 'They listen to music from home, call family, and go out to know the city.' },
  { k: 'HOME IS…', ini: 184, fim: 242, q: 'What does home mean to them?', h: 'People: family and friends. Home is a feeling, not a place.' }
];

var FITAS = [['HAVE / HAS', 'I have · she has'], ['+ PARTICIPLE', 'lived · eaten · seen · been'], ['EVER / NEVER', 'Have you ever…? · I’ve never…'], ['HOW MANY TIMES', 'never · once · twice · three times']];
var ARMAS = [
  ['THE QUESTION', 'Did you already live abroad?', 'Have you ever lived abroad?', 'Your whole life, no date: Have you ever + participle.'],
  ['THE ANSWER', 'Yes, I lived. / No, I didn’t.', 'Yes, I have. · No, I haven’t.', 'Answer with the same verb: have.'],
  ['THE PARTICIPLE', 'Have you ever eated sushi?', 'Have you ever eaten sushi?', 'eat · ate · eaten. After have: the third one.'],
  ['NEVER', 'I never have seen snow.', 'I have never seen snow.', 'never goes between have and the participle.'],
  ['THE DETAIL', 'I have gone to Japan in 2018.', 'I have been to Japan. I went in 2018.', 'A date or a detail (when, what, how) goes to the past.'],
  ['WHEN?', 'When have you gone there?', 'When did you go there?', 'When asks for a date: the past.']
];

var SELOS = [
  { k: 'JAPAN', ano: '2018', cor: '#e0685a', exp: 'been to Japan', det: 'When did you go?', resp: 'Yes, I have! I went in 2018, in the spring. The cherry trees were beautiful.',
    ops: [['When did you go?', 'ok'], ['When have you gone?', 'data'], ['When you went?', 'ordemq']] },
  { k: 'ICELAND', ano: '2021', cor: '#6fb6e0', exp: 'seen the Northern Lights', det: 'Where did you see them?', resp: 'Yes, I have, once. I saw them in Iceland, at two in the morning.',
    ops: [['Where did you see them?', 'ok'], ['Where have you seen them?', 'data'], ['Where did you saw them?', 'didv']] },
  { k: 'MEXICO', ano: '2016', cor: '#f0b64a', exp: 'eaten real tacos', det: 'What did you eat?', resp: 'Yes, I have. I ate tacos al pastor every day for a week!',
    ops: [['What did you eat?', 'ok'], ['What have you eaten there in 2016?', 'data'], ['What you ate?', 'ordemq']] },
  { k: 'CANADA', ano: '2012', cor: '#e36f8e', exp: 'lived abroad', det: 'How long did you live there?', resp: 'Yes, I have. I lived in Toronto for a year. It was very cold!',
    ops: [['How long did you live there?', 'ok'], ['How long have you lived there in 2012?', 'data'], ['How long did you lived there?', 'didv']] },
  { k: 'EGYPT', ano: '2019', cor: '#c9a46a', exp: 'ridden a camel', det: 'Was it fun?', resp: 'Yes, I have, twice. The first time was fun. The second time, the camel was angry!',
    ops: [['Was it fun?', 'ok'], ['Has it been fun in 2019?', 'data'], ['It was fun?', 'ordemq']] },
  { k: 'PERU', ano: '2023', cor: '#8fd19e', exp: 'climbed a mountain', det: 'Which mountain did you climb?', resp: 'Yes, I have. I climbed to Machu Picchu. My legs hurt for three days.',
    ops: [['Which mountain did you climb?', 'ok'], ['Which mountain have you climbed in 2023?', 'data'], ['Which mountain did you climbed?', 'didv']] }
];

var FATIAS = [
  { k: 'FOOD', q: 'What have you never eaten?', h: 'I have never eaten snails. And I never will!' },
  { k: 'TRAVEL', q: 'Where have you never been?', h: 'I have never been to the beach in winter.' },
  { k: 'SPORTS', q: 'What sport have you never played or tried?', h: 'I have never played golf.' },
  { k: 'MUSIC', q: 'What have you never done with music?', h: 'I have never been to a big concert.' },
  { k: 'SCHOOL', q: 'What have you never done at school or work?', h: 'I have never been late for a class. Well… almost never.' },
  { k: 'NATURE', q: 'What have you never seen in nature?', h: 'I have never seen a whale.' },
  { k: 'HOME', q: 'What have you never done at home?', h: 'I have never cooked for more than four people.' },
  { k: 'BRAVE', q: 'What have you never done, but you want to?', h: 'I have never flown in a small plane, but I want to.' }
];
var CORES_R = ['#3a1e22', '#1c2a3a', '#2c2616', '#1f3024', '#2e1c30', '#16282c', '#33241a', '#22223a'];
var GIROS = ordem(FATIAS.map(function (_, i) { return i; }), 7);

var RUA = [
  { ela: 'Hi! Quick question for our show. Have you ever lived in another country?', pede: 'Yes, I have… / No, I haven’t, but… Then ask back: And you?', resp: 'I have! I lived in Portugal for a year. I loved the bread.' },
  { ela: 'Have you ever felt homesick? Even on a trip?', pede: 'Yes, once, when I… Then ask: What did you miss in Portugal?', resp: 'My dog! I called my mom every day just to see him.' },
  { ela: 'What is the most interesting place you have ever been to?', pede: 'The most interesting place I’ve ever been to is… What about you?', resp: 'Iceland. I saw the Northern Lights. I cried a little.' },
  { ela: 'Last question! What does home mean to you?', pede: 'Home is… And for you?', resp: 'Home is where my people are. Thanks for talking to us!' }
];

var QUIZ = [
  { a: '', b: ' you ever lived abroad?', op: ['Have', 'Did', 'Are'], nao: 'Your life, no date: Have you ever lived…?' },
  { a: 'Have you ever ', b: ' sushi?', op: ['eaten', 'ate', 'eat'], nao: 'After have: the participle. eat · ate · eaten.' },
  { a: 'No, I ', b: '. Never.', op: ['haven’t', 'didn’t', 'don’t'], nao: 'Answer with have: No, I haven’t.' },
  { a: 'I have been to Chile ', b: '.', op: ['twice', 'two times ago', 'in 2020'], nao: 'No date with have been: twice.' },
  { a: 'I have been to Japan. I ', b: ' in 2018.', op: ['went', 'have gone', 'go'], nao: 'A date: the past, went.' },
  { a: 'She has ', b: ' seen snow.', op: ['never', 'ever', 'already never'], nao: 'The negative experience: has never seen.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, bg: { sel: -1, esc: {}, st: {} }, video: { p: 0, cap: 0, viu: {} },
  ps: { sel: -1, pediu: {}, esc: {} }, nv: { g: 0, anim: 0 }, rua: { n: 0, viu: {} }, quiz: { esc: {} } };

function selo(x, tinta, cls) {
  return '<div class="selo' + (tinta ? ' tinta' : '') + (cls ? ' ' + cls : '') + '" style="--cor:' + x.cor + '"><small>' + x.ano + '</small><b>' + x.k + '</b><i>ARRIVED</i></div>';
}
function passaporte(cls) {
  return '<div class="passaporte' + (cls ? ' ' + cls : '') + '"><span class="brasao">✦</span><b>PASSPORT</b><small>FAR FROM HOME</small></div>';
}
function bingoFeito() {
  var st = S.bg.st;
  return LINHAS.some(function (l) { return l.every(function (i) { return st[i]; }); });
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · FAR FROM HOME</span><h1>Have You <b>Ever?</b></h1>'
    + '<p class="sub">Toronto. One question for strangers on the street: <b>have you ever lived in another country?</b></p>'
    + '<div class="chipsx"><span class="pilula">Have you ever + participle</span><span class="pilula">never · once · twice</span><span class="pilula">I went in 2018</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the passport</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + passaporte('grande') + '<div class="selos-capa">' + selo(SELOS[0], 1) + selo(SELOS[1], 1) + selo(SELOS[5], 1) + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.bingo = function (c) {
  var e = S.bg, n = Object.keys(e.st).length, x = e.sel >= 0 ? CASAS[e.sel] : null, lado;
  var cartela = '<div class="cartela">' + CASAS.map(function (k, i) {
    var st = e.st[i];
    return '<button type="button" class="casa' + (e.sel === i ? ' on' : '') + (st ? ' st-' + st : '') + '" data-a="bg" data-n="' + i + '"><small>' + k[2].toUpperCase() + '</small><b>' + k[0] + ' ' + k[1] + '</b>' + (st ? '<i>' + (st === 'y' ? 'YES' : 'NO') + '</i>' : '') + '</button>';
  }).join('') + '</div>';
  if (!x) lado = '<div class="pergunta vd"><small>' + n + ' OF 8 STAMPS' + (bingoFeito() ? ' · BINGO!' : '') + '</small><h2>' + (bingoFeito() ? 'BINGO! Four in a line. Keep going: eight stamps.' : 'Tap a square. Ask your teacher: Have you ever …?') + '</h2></div>'
    + '<div class="fitas mini"><div class="fita vd"><small>YES</small><b>Yes, I have. · Yes, once. · Yes, twice.</b></div><div class="fita vd"><small>NO</small><b>No, I haven’t. · No, never.</b></div></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="pede vd"><small>THE SQUARE</small><b>' + x[0] + ' ' + x[1] + '</b><em>' + x[2] + ' · ' + x[0] + '</em></div>'
      + (ok ? '<div class="balao vd"><small>YOU ASKED</small><p>' + x.ops[0][0] + '</p></div><p class="ini">Your teacher answers. Then ask one more: When? Where? Why?</p><h5 class="so-prof rot-ouve">STAMP THE ANSWER</h5><div class="tres-b"><button type="button" class="btn so-prof" data-a="bg-st" data-v="y">YES, I HAVE</button><button type="button" class="btn so-prof" data-a="bg-st" data-v="n">NO, I HAVEN’T</button></div>'
        : '<h5 class="so-prof rot-ouve">TAP THE QUESTION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 2).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="bg-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : ''));
  }
  return cab(c) + '<div class="mesa-b">' + cartela + '<div class="lado-l">' + lado + '</div></div>';
};

R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>Have you ever lived far from your family? Where, and for how long?</h2></div>' + fala('va', ['Yes, I have. I lived in …', 'No, I haven’t, but …'], ['for two years', 'for my job', 'never']) + mostra('va', 'Yes, I have. I lived in another city for two years, for my job.', 1) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Have you ever lived abroad?', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 5 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div class="acoes">' + (e.cap < 4 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>Have you ever felt homesick? What did you miss? Which answer from the street was the most like you?</h2></div>' + fala('vb', ['Yes, I have. I missed …', 'The man who has never …'], []) + mostra('vb', 'Yes, I have. I missed my mom’s food. The man who has never lived abroad is like me.', 1) + '</div>';
  return cab(c) + passos + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.pass = function (c) {
  var e = S.ps, x = e.sel >= 0 ? SELOS[e.sel] : null, n = 0, lado;
  SELOS.forEach(function (_, i) { if (e.esc[i] === 'ok') n++; });
  var pagina = '<div class="pagina-p">' + SELOS.map(function (s, i) {
    return '<button type="button" class="selo-b' + (e.sel === i ? ' on' : '') + '" data-a="ps" data-n="' + i + '">' + selo(s, e.esc[i] === 'ok') + '</button>';
  }).join('') + '</div>';
  if (!x) lado = '<div class="pergunta vd"><small>' + n + ' OF 6 STAMPS</small><h2>' + (n === 6 ? 'Six stamps, six stories. Experience first, then the detail.' : 'Tap a stamp. You don’t know the story yet. Ask!') + '</h2></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="pede vd"><small>1 · THE EXPERIENCE</small><b>Have you ever ' + x.exp + '?</b><em>Say it out loud.</em></div>'
      + (!e.pediu[e.sel] ? '<div><button type="button" class="btn so-prof" data-a="ps-pediu">Asked · “Yes, I have!”</button></div>'
        : (ok ? '<div class="balao vd"><small>2 · THE DETAIL</small><p>' + x.det + '</p></div><div class="balao vd resp"><small>YOUR TEACHER</small><p>“' + x.resp + '”</p></div>'
          : '<p class="ini">2 · Now ask for the detail. It’s in the past.</p><h5 class="so-prof rot-ouve">TAP THE QUESTION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 3).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="ps-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : '')));
  }
  return cab(c) + '<div class="mesa-c"><div class="livro">' + pagina + '</div><div class="lado-l">' + lado + '</div></div>';
};

function roda(sel, anim) {
  var fat = FATIAS.map(function (f, i) {
    var a0 = (i * 45 - 90) * Math.PI / 180, a1 = ((i + 1) * 45 - 90) * Math.PI / 180, am = ((i + 0.5) * 45 - 90) * Math.PI / 180;
    var x0 = 100 + 96 * Math.cos(a0), y0 = 100 + 96 * Math.sin(a0), x1 = 100 + 96 * Math.cos(a1), y1 = 100 + 96 * Math.sin(a1);
    var tx = 100 + 62 * Math.cos(am), ty = 100 + 62 * Math.sin(am);
    return '<path d="M100 100 L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A96 96 0 0 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' Z" fill="' + CORES_R[i] + '" stroke="#0a0d14" stroke-width="2"/>'
      + '<text x="' + tx.toFixed(1) + '" y="' + ty.toFixed(1) + '" transform="rotate(' + ((i + 0.5) * 45) + ' ' + tx.toFixed(1) + ' ' + ty.toFixed(1) + ')" text-anchor="middle" dominant-baseline="middle">' + f.k + '</text>';
  }).join('');
  var fim = sel < 0 ? 0 : -((sel + 0.5) * 45);
  return '<div class="roda-box"><span class="ponteiro"></span><svg class="roda' + (anim ? ' gira' : '') + '" viewBox="0 0 200 200" style="--ate:' + fim + 'deg;transform:rotate(' + fim + 'deg)" role="img" aria-label="Never Have I Ever wheel">' + fat + '<circle cx="100" cy="100" r="16" fill="#0a0d14" stroke="#e0685a" stroke-width="2"/></svg></div>';
}
R.nunca = function (c) {
  var e = S.nv, sel = e.g > 0 ? GIROS[(e.g - 1) % 8] : -1, x = sel >= 0 ? FATIAS[sel] : null;
  var lado = x ? '<div class="pergunta vd ja"><small>' + x.k + ' · NEVER HAVE I EVER</small><h2>' + x.q + '</h2></div>' + fala('nv' + sel, ['I have never …', 'Never have I ever …'], ['but I want to', 'and I never will']) + mostra('nv' + sel, x.h, 1) + '<p class="dica-aluno">Your teacher says one too. Ask why!</p>'
    : '<div class="pergunta vd"><small>NEVER HAVE I EVER</small><h2>Spin the wheel. Say one thing you have NEVER done. A true one.</h2></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + roda(sel, e.anim) + '<button type="button" class="btn cheio" data-a="nv">' + (e.g ? 'Spin again' : 'Spin') + '</button></div><div class="lado-l">' + lado + '</div></div>';
};

R.rua = function (c) {
  var e = S.rua, n = e.n, fim = n >= RUA.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('cidade') + ')"><span class="rec">● REC</span><span>STREET SHOW · TORONTO</span></div>';
  if (fim) return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l">' + follow('THE BIG QUESTION', 'Who is the most interesting person you have ever met?', ['The most interesting person I’ve ever met is …', 'I met them in …'], [], 'big', mostra('big', 'My grandfather’s friend. He has been to forty countries. I met him in 2015.', 1)) + '</div></div>';
  var x = RUA[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l">' + trilha(RUA, n) + '<div class="balao vd"><small>THE INTERVIEWER</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>YOUR TURN</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>THE INTERVIEWER</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="ru-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="ru-viu">Answered · the interviewer replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. One last question, the one from the street.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Home is …\nI have never …, but …\nI have been to … I went in …', 'Home',
    ['Home is ', 'I have never ', 'I have been to ', 'I went in ', 'once', 'twice'], ['WHAT DOES HOME MEAN TO YOU?', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now: a place, or people? Add one experience and its detail.' : 'A place, or people? Add one experience, and the detail in the past.'])
    + '<div class="lado-fim">' + passaporte() + '<div class="grande vd"><span>experience: <u>Have you ever been</u>…?</span><span><u>Yes, I have</u> · <u>No, I haven’t</u></span><span><u>never</u> · <u>once</u> · <u>twice</u></span><span>the detail: <u>I went in 2018</u></span></div>'
    + mostra('fim', 'Home is people, not a place. My family is my home.<br>I have never lived abroad, but I want to.<br>I have been to Chile once. I went in 2019, with my sister.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.bg = function (b, n) { S.bg.sel = S.bg.sel === n ? -1 : n; };
TOQUES['bg-v'] = function (b, n, v) { S.bg.esc[S.bg.sel] = v; };
TOQUES['bg-st'] = function (b, n, v) { S.bg.st[S.bg.sel] = v; S.bg.sel = -1; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.ps = function (b, n) { S.ps.sel = n; };
TOQUES['ps-pediu'] = function () { S.ps.pediu[S.ps.sel] = 1; };
TOQUES['ps-v'] = function (b, n, v) { S.ps.esc[S.ps.sel] = v; };
TOQUES.nv = function () { S.nv.g++; S.nv.anim = 1; setTimeout(function () { S.nv.anim = 0; }, 1300); };
TOQUES['ru-viu'] = function () { S.rua.viu[S.rua.n] = 1; };
TOQUES['ru-prox'] = function () { S.rua.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
