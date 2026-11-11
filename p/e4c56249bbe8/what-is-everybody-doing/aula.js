/* ============================================================
   SPIRITED AWAY · THE BATHHOUSE WINDOWS · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A1 · present continuous: am / is / are + -ing, agora; a
   pergunta (Is she crying?) e a negativa (isn't / aren't + -ing).
   Erros: sem be (Chihiro walking), sem -ing (is walk), is / are
   trocados, grafia (takeing, cleanning), pergunta na ordem da frase
   (Chihiro is crying?), does + -ing, not sem be.
   Catálogo WOLFLIX Live (07/10): família ANIME, modo LANTERNA.
   A tela forte: a casa de banho vista de fora à noite; as janelas
   acendem andar por andar e mostram o que cada um está fazendo agora.
   ⚠ Trailer: só minutagem e paráfrase.
   O AQUECIMENTO (aquece.js): o ranking. O FECHAMENTO (final.js): a
   entrevista com Chihiro na primeira noite.
   O VÍDEO: fDUFP7EeXLE (trailer oficial em inglês, GKIDS, 0:59, idade
   0, embed sim). Tempos das falas da legenda automática de 25/09.
   A CARA: laca vermelha, lanterna âmbar, noite verde-azulada,
   Shippori Mincho + Zen Maru Gothic. A antiga era o estúdio de legenda.
   Fila: FILA-LIVE-386.md · 265.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: pistas "quem é ela?" antes; a palavra que você ouviu com ▶;
   depois, True or Lie com ▶. V: a carta da Chihiro (tocar am / is / are + -ing)
   e completar a regra. VI: a casa de banho com SEIS janelas, cada uma com a
   fala primeiro. VII (era EXTRA, agora essencial): contar o que cada pessoa
   está fazendo, tocando cada uma quando falou.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'tunel', rot: 'I · Warm-up and The Spirit Town', t: 'Before the trailer: you, right now, then a town for spirits.', p: 'Answer three questions about your life. Then open one picture at a time and say what is happening.' },
  { k: 'palavras', est: 'l', img: 'tunel', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'tunel', rot: 'III · The Trailer', t: 'Spirited Away, 2001. The official trailer.', p: 'Guess who first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'ponte', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'ponte', rot: 'V · The Flip', t: 'Watch the words move.', p: 'Flip each sentence into a question. Notice where the helper goes. Then flip four on your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'capa', rot: 'VI · Right Now', t: 'A letter from Chihiro: what is happening right now?', p: 'Tap the words with am, is or are + -ing. Then finish the rule.' },
  { k: 'janelas', est: 'o', min: 7, img: 'capa', rot: 'VII · The Bathhouse Windows', t: 'Six windows. Say what they are doing, and the window lights up.', p: 'Read who and what. Say the sentence out loud. Then tap Check.' },
  { k: 'agora', est: 'o', min: 7, img: 'ponte', rot: 'VIII · Right Now, Out There', t: 'Six people in your life. What are they doing right now?', p: 'Say a sentence for each one. Then tap the name.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · The Interview', t: 'The interview.', p: 'Interview.' }
];

var FILME = 'Spirited Away', ANO = '2001';
var YT = 'fDUFP7EeXLE', DUR = 59;

var ENCARTE = [
  ['The film', '<i>Spirited Away</i> is a Japanese animated film by Hayao Miyazaki and Studio Ghibli. It has an Oscar for the best animated film.'],
  ['The girl', 'Chihiro is ten years old. She is moving to a new town with her parents, and she is not happy about it.'],
  ['The story', 'The family walks through a tunnel and finds a town for spirits. Her parents eat the spirits’ food and turn into pigs. To save them, Chihiro works in a huge bathhouse for spirits.']
];

var ANTES = [
  { q: 'Do you like animated films? What is your favorite?', h: 'Yes, I like … My favorite is …' },
  { q: 'Look at the bathhouse. What are the spirits doing there? Guess.', h: 'I think they are …' }
];
var DEPOIS = [
  { q: 'What are Chihiro’s parents doing in the town?', h: 'They are …' },
  { q: 'Is Chihiro happy or scared? What is she doing?', h: 'She is … She is …-ing.' }
];

var TRECHOS = [
  { k: 'The tunnel', ini: 0, fim: 9, ouvir: 'Where is the family going?', sentido: 'A family is driving to a new house. They stop and walk through an old red tunnel.', gram: 'They <b>are walking</b> through a tunnel.' },
  { k: 'The town', ini: 9, fim: 23, ouvir: 'What are the parents doing?', sentido: 'On the other side, there is an empty town with a lot of food. The parents eat, and something strange happens to them.', gram: 'Her parents <b>are eating</b>. Chihiro <b>isn’t eating</b>.' },
  { k: 'The bathhouse', ini: 23, fim: 38, ouvir: 'Who is taking a bath?', sentido: 'At night, a huge bathhouse opens. Strange spirits come to take a bath.', gram: 'The spirits <b>are taking</b> a bath.' },
  { k: 'The dragon', ini: 38, fim: 49, ouvir: 'What is in the sky?', sentido: 'A white dragon flies in the sky, and a quiet spirit with a mask follows Chihiro.', gram: 'A dragon <b>is flying</b>. A spirit <b>is watching</b> her.' },
  { k: 'The work', ini: 49, fim: 59, ouvir: 'What is Chihiro doing now?', sentido: 'Chihiro works hard in the bathhouse. She is brave now, and she wants to save her parents.', gram: 'She <b>is working</b>. She <b>is helping</b> her parents.' }
];

var TRAPS = [
  ['Am, is, are', 'Chihiro walking.', 'Chihiro <b>is</b> walking.', 'she is · they are · I am'],
  ['Then -ing', 'The spirits are take a bath.', 'The spirits are <b>taking</b> a bath.', 'take → taking · run → running'],
  ['Questions: is first', 'Chihiro is crying?', '<b>Is</b> Chihiro crying?', 'Is she…? Are they…?'],
  ['No: isn’t, aren’t', 'Yubaba doesn’t sleeping.', 'Yubaba <b>isn’t</b> sleeping.', 'not do / does: isn’t, aren’t']
];

/* as janelas: o gesto forte */
var JANELAS = [
  { quem: 'Chihiro', faz: 'walk through the tunnel', ops: ['Chihiro is walking through the tunnel.'], resp: 'Chihiro <b>is walking</b> through the tunnel.', depois: 'Where are you walking tomorrow?' },
  { quem: 'Her parents', faz: 'eat (a lot!)', ops: ['Her parents are eating.'], resp: 'Her parents <b>are eating</b>.', depois: 'What is your favorite food?' },
  { quem: 'The spirits', faz: 'take a bath', ops: ['The spirits are taking a bath.'], resp: 'The spirits <b>are taking</b> a bath.', depois: 'Do you like hot baths?' },
  { quem: 'Haku, the dragon', faz: 'fly in the sky', ops: ['Haku is flying in the sky.'], resp: 'Haku <b>is flying</b> in the sky.', depois: 'Which animal do you want to be?' },
  { quem: 'You ask', faz: 'Chihiro · cry?', ops: ['Is Chihiro crying?'], resp: '<b>Is</b> Chihiro <b>crying</b>?', depois: 'Ask the teacher: “Are you … right now?”' },
  { quem: 'Yubaba, the witch', faz: 'not sleep (she is watching everything)', ops: ['Yubaba isn’t sleeping.'], resp: 'Yubaba <b>isn’t sleeping</b>.', depois: 'The bathhouse is full of light. What are you doing right now?' }
];
var RECUSA = {
  be: 'Right now: am / is / are + -ing. She is walking.',
  ing: 'After am / is / are: the verb + -ing. is walking, is flying.',
  are: 'Two or more: are. They are eating.',
  is: 'One person or thing: is. Haku is flying.',
  spell: 'Spelling: take → taking (no e), clean → cleaning (one n).',
  pergunta: 'Questions: is / are first. Is she crying?',
  does: 'No do / does here: Is she…? She isn’t…',
  nao: 'The negative: isn’t / aren’t + -ing.'
};

var AGORA = [
  { k: 'Your mother', h: 'What is she doing right now?', ex: 'She is cooking lunch, I think.' },
  { k: 'Your best friend', h: 'What is he or she doing now?', ex: 'He is working at the office.' },
  { k: 'Your city', h: 'What are people doing in the street?', ex: 'They are walking to work.' },
  { k: 'Your pet', h: 'What is your pet doing?', ex: 'My cat is sleeping on the sofa.' },
  { k: 'The weather', h: 'What is the weather doing?', ex: 'It is raining a little.' },
  { k: 'You and the teacher', h: 'What are you doing right now?', ex: 'We are speaking English!' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>I am</b> · <b>she is</b> · <b>they are</b> + verb-<b>ing</b><br><b>Is</b> she crying? · She <b>isn’t</b> sleeping.<br>take → taking · clean → cleaning';
/* III · antes: quem é ela? */
var VD_REV = { formato: 'revela', titulo: 'Before you watch: who is she? Open the clues one by one.', pistas: ['She is ten years old.', 'She is walking through a tunnel.', 'She is working in a huge bathhouse for spirits.', 'Her parents are turning into pigs!'], mais: 'Next clue', botao: 'I know it! Show', resposta: 'It is Chihiro, from Spirited Away.' };
/* III · durante: a palavra que você ouviu, cada uma no tempo do trailer (legenda-dados.js) */
var VD_SOM = { formato: 'som', titulo: 'Which word did you hear?', itens: [
  { a: 'We’re almost ', par: ['there', 'here'], c: 0, b: '.', t: '0:05' },
  { a: 'What’s this ', par: ['old', 'cold'], c: 0, b: ' building?', t: '0:07' },
  { a: 'It’s a ', par: ['bathhouse', 'bathroom'], c: 0, b: ' for the spirits.', t: '0:23' },
  { a: 'I just want to ', par: ['help', 'hope'], c: 0, b: ' you.', t: '0:43' },
  { a: 'You never really ', par: ['forget', 'forgive'], c: 0, b: ' them.', t: '0:50' }
] };
/* III · depois: True or Lie, com ▶ */
var VD_VL = { formato: 'verdadeOuMentira', titulo: 'After the trailer: true or lie? If it’s a lie, say the truth.', itens: [
  { f: 'A girl asks: “What’s this old building?”', t: 1, tm: '0:07' },
  { f: 'A voice says it is fine to stay here.', t: 0, tm: '0:16', c: 'It says: “Get out of here, now!”' },
  { f: 'A voice says it is a school for children.', t: 0, tm: '0:23', c: 'It says: “It’s a bathhouse for the spirits.”' },
  { f: 'Someone says: “Don’t be afraid. I just want to help you.”', t: 1, tm: '0:42' },
  { f: 'A voice says: “Once you’ve met someone, you never really forget them.”', t: 1, tm: '0:50' }
] };
/* V · a carta da Chihiro */
var CARTA_R = { formato: 'carta', carta: { de: 'Dear Mom and Dad,', txt: 'Right now I [[am working]] in a huge bathhouse. Haku [[is helping]] me. The spirits [[are taking]] a bath. Lin and I [[are cleaning]] the big floor. Yubaba [[isn’t sleeping]], so I must be careful. And you? [[Are you eating]] again?', assina: 'Chihiro' },
  toque: 'Tap the words with am, is or are + -ing', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner.',
  regra: [
    { a: 'I', par: ['am', 'is'], c: 0, b: 'working.' },
    { a: 'He / she / it', par: ['is', 'are'], c: 0, b: 'working.' },
    { a: 'We / you / they', par: ['are', 'is'], c: 0, b: 'working.' },
    { a: 'The verb ends in', par: ['-ing', '-s'], c: 0, b: '(take → taking).' },
    { a: 'Question:', par: ['Is', 'Does'], c: 0, b: 'she crying?' },
    { a: 'No: she', par: ['isn’t', 'doesn’t'], c: 0, b: 'sleeping.' }
  ] };
/* VII · quem está fazendo o quê agora: toque no nome depois de falar */
var VD_AGORA = { formato: 'usa', titulo: 'What is everybody doing right now? Say a sentence for each one. Then tap the name.', palavras: ['Your mother', 'Your best friend', 'Your city', 'Your pet', 'The weather', 'You and the teacher'], fim: 'All six! Now say one more: what are you doing right now?' };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, jn: { n: 0, esc: -1 } };

/* a tira de filme: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
function onda(marcas, sel, acao) {
  var ims = []; L.forEach(function (x) { if (x.img && ims.indexOf(x.img) < 0) ims.push(x.img); });
  var fr = (marcas || []).map(function (x, i) {
    var t = Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2);
    var bg = ' style="--bg:url(\'' + img(ims[(i + 1) % ims.length]) + '\')"';
    var dentro = '<i class="tq-img"></i><b>' + t + '</b><span>' + x.k + '</span>';
    return acao ? '<button type="button" class="tq' + (sel === i ? ' on' : '') + '"' + bg + ' data-a="' + acao + '" data-n="' + i + '">' + dentro + '</button>' : '<span class="tq"' + bg + '>' + dentro + '</span>';
  }).join('');
  return '<div class="tira' + (acao ? ' grande' : '') + '" aria-hidden="' + (acao ? 'false' : 'true') + '"><div class="tira-furos"></div><div class="tira-q">' + fr + '</div><div class="tira-furos"></div></div>';
}
function tres(acao, ops, esc, semente) {
  return '<div class="ch-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a fachada da casa de banho: quatro andares de baixo para cima, duas janelas por andar; a frase certa acende a janela e escreve dentro o que acontece */
function fachada(acesas, atual, nova) {
  var andares = '';
  for (var a = 2; a >= 0; a--) {
    var jan = [a * 2, a * 2 + 1].map(function (i) {
      var x = JANELAS[i], cls = i < acesas ? (nova && i === acesas - 1 ? ' acesa nova' : ' acesa') : (i === atual ? ' vez' : '');
      return '<div class="ch-jan' + cls + '"><b>' + x.quem + '</b><small>' + (i < acesas ? x.ops[0] : (i === atual ? x.faz : '')) + '</small></div>';
    }).join('');
    andares += '<div class="ch-andar">' + jan + '</div><div class="ch-telhado"></div>';
  }
  return '<div class="ch-casa vd" role="img" aria-label="The bathhouse: ' + acesas + ' of 6 windows lit"><div class="ch-cume"></div>' + andares + '<div class="ch-base"></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A1 · present continuous: am, is, are + -ing</span><h1>What Is Everybody Doing?</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">At night a huge bathhouse for spirits opens its doors, and Chihiro is working there. Look at the windows: say what everybody is doing right now, and the windows light up.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Cross the bridge</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r ch-foto"><img src="' + img('capa') + '" alt="A huge red bathhouse with glowing windows at night, lanterns and steam"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="ch-encarte vd"><div class="ch-capinha"><img src="' + img('tunel') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>Studio Ghibli</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="ch-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Chihiro is moving to a new town. Is moving a happy or a sad thing for you?</h2></div>' + mostra('enc', 'It is a sad thing. I miss my old friends.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REV) + '<p class="fm-nota">Say: I think it is … She is …-ing.</p></div>'
    + '<div class="lado-l"><div class="ch-selo vd"><b>' + FILME + '</b><small>the official trailer in English · one minute</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="ch-video"><div class="ch-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="ch-cred">' + FILME + ' · official trailer (GKIDS) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('som', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="ch-centro">' + FM.ex('vl', VD_VL) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="ch-video"><div class="ch-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="ch-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="ch-sentido">' + x.sentido + '</span><span class="ch-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="ch-centro"><p class="ch-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('car', CARTA_R);
};

R.janelas = function (c) {
  return cab(c) + '<div class="fm-lado2">' + FM.ex('jn', { formato: 'fala', rotulo: 'Window', regra: PRESA,
    lado: function (f, a, v) { return fachada(f, a, v && a >= 0 ? 1 : 0); },
    fim: 'Every window is lit. Now look out of your own window. What are people doing right now?',
    itens: JANELAS.map(function (x) { return { pista: '<span class="ano">' + x.quem + '</span>' + x.faz, resp: x.resp, depois: x.depois }; }) }) + '</div>';
};

R.agora = function (c) {
  return cab(c) + comPlaca(FM.ex('ag', VD_AGORA), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="ch-centro"><p class="ch-dica">The interview.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'ranking', rot: 'I · A Walk at Night', t: 'Before the trailer: where do you want to walk tonight?', p: 'Tap the places in order. Then say your number 1.',
  rotulo: 'A walk at night', q: 'Where do you want to walk tonight? Put them in order.',
  itens: ['A night market', 'A beach', 'A big park', 'A train station', 'An old bathhouse'],
  depois: 'Number 1: what are people doing there right now?', ex: 'Number 1 is the night market. People are eating and talking there right now.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'entrevista', rot: 'VIII · The Interview', t: 'Interview Chihiro on her first night at the bathhouse.', p: 'The teacher is Chihiro. Ask what is happening right now. Then swap: you are you, on a first day.',
  papel: 'Chihiro, on her first night at the bathhouse', papel2: 'you, on your first day at a new school or job',
  itens: [
    { q: 'What are you doing right now?', ex: 'I am cleaning a big bath.' },
    { q: 'What are the spirits doing?', ex: 'They are taking baths and eating.' },
    { q: 'Where are your parents? What are they doing?', ex: 'They are sleeping with the other pigs!' },
    { q: 'Who is helping you?', ex: 'Lin is helping me. And Haku.' },
    { q: 'Are you smiling or crying now?', ex: 'I am smiling a little.' }
  ] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G7 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'vira', titulo: 'The sentence, then the question. Watch the words move.',
  frases: [
    { de: ['Chihiro', '*is', 'cleaning', 'the bath', '.'], para: ['*Is', 'Chihiro', 'cleaning', 'the bath', '?'], d: 'The word is jumps to the front.' },
    { de: ['The spirits', '*are', 'eating', 'dinner', '.'], para: ['*Are', 'the spirits', 'eating', 'dinner', '?'], d: 'Same trick with are.' },
    { de: ['Haku', '*is', 'flying', '.'], para: ['*Is', 'Haku', 'flying', '?'], d: 'Helper first, then the name, then the -ing word.' }
  ],
  notaBotao: 'What moves?',
  nota: 'To ask, flip the helper: <b>is</b> or <b>are</b> goes first. The -ing word stays where it is. Is she crying? Are they eating?',
  pergunta: 'Your turn. Flip it out loud, then check.',
  treino: [
    { de: 'Yubaba is talking.', r: '<b>Is</b> Yubaba talking?' },
    { de: 'The workers are sleeping.', r: '<b>Are</b> the workers sleeping?' },
    { de: 'No-Face is waiting.', r: '<b>Is</b> No-Face waiting?' },
    { de: 'Chihiro and Haku are running.', r: '<b>Are</b> Chihiro and Haku running?' }
  ],
  uso: { p: 'Your turn. Ask your teacher two questions about right now.', molde: ['Are you …?', 'Is it …?'], ex: 'Are you sitting? Is it raining?' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_vira', GX_EXPLICA); };
