/* ============================================================
   STAR WARS: A NEW HOPE · THE TRAINING REMOTE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · -ing como substantivo: sujeito (Learning the Force takes
   years) e depois de preposição (good at flying, afraid of failing,
   before leaving, instead of fighting, by closing your eyes); o
   sujeito em -ing pede verbo no singular.
   Erros: verbo base como sujeito (Use the Force is hard), preposição
   + verbo base (afraid of fail), preposição + to (good at to fly),
   -ing sujeito com verbo no plural (Trusting your feelings are hard),
   to + verbo depois de interested in / before / without, it sem sujeito.
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo SUBIR DE NÍVEL.
   A tela forte: o treino com o droide remoto, visto pela viseira do
   capacete. O remoto flutua no centro e dispara oito tiros; cada frase
   certa desvia um tiro com o sabre (o tiro volta em azul), e a cada
   desvio a viseira fica mais escura: no fim o aluno treina de olhos
   fechados, como o Luke.
   O AQUECIMENTO (aquece.js): a imagem. O FECHAMENTO: escrita, o
   conselho de um mestre.
   O VÍDEO: DNwotUOzA4U (clipe oficial do canal Star Wars, 2:33, idade
   0, embed sim). Tempos da legenda (23/09): 0:14, 0:22, 1:02, 1:33,
   2:03; cada momento contado com palavras nossas.
   A CARA: noite de Tatooine, areia queimada, azul do sabre; Michroma não
   (já usado), então Syncopate + Instrument Sans. A antiga era o set.
   Fila: FILA-LIVE-386.md · 291.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: adivinhar o que Obi-Wan dá ao Luke (pistas); achar a palavra
   errada e escolher o que ele disse, com ▶ nas falas do clipe
   (legenda-dados.js); ligar quem é quem + uma régua; V: a mensagem do
   Obi-Wan -> a regra; VI: o treino falado (fala + placa; 6 tiros, a viseira
   escurece a cada Check); VII (era EXTRA): um minuto de fala com
   cronômetro + tocar cada forma -ing que usou.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'nave', rot: 'I · Warm-up and Pick a Side', t: 'Before the clip: what you are good at, then a farm boy’s choice.', p: 'Answer three questions about your life. Then choose for Luke and explain why.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Clip', t: 'Star Wars: A New Hope. Obi-Wan and Luke.', p: 'Guess first. Watch the clip. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'nave', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'cave', rot: 'V · -ing as a Noun', t: 'A message from Obi-Wan. Find the pattern.', p: 'Read the message out loud. Tap the -ing words. Then finish the rule.' },
  { k: 'remoto', est: 'o', min: 7, img: 'nave', rot: 'VI · The Training Remote', t: 'The remote fires. Say it right, and the saber blocks the shot.', p: 'Read the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'mestre', est: 'o', min: 7, img: 'cave', rot: 'VII · Your Training', t: 'One minute about learning. Use your -ing words.', p: 'Start the clock and talk for 45 seconds. Tap each -ing phrase when you use it.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · A Master’s Advice', t: 'Write advice for someone who is learning English.', p: 'Use -ing as a subject and after a preposition. It goes to your My notes.' }
];

var FILME = 'Star Wars: A New Hope', ANO = '1977';
var YT = 'DNwotUOzA4U', DUR = 153;

var ENCARTE = [
  ['The film', '<i>Star Wars</i> (George Lucas, 1977), later called <i>A New Hope</i>, is one of the most famous films ever made.'],
  ['The boy', 'Luke Skywalker lives on a desert farm on Tatooine, a planet with two suns. He dreams about flying, but he is stuck at home.'],
  ['The master', 'An old man, Obi-Wan Kenobi, tells Luke the truth: his father was a Jedi Knight. He gives Luke his father’s lightsaber and starts teaching him the Force.']
];

var ANTES = [
  { q: 'What is something you learned without a teacher?', h: 'Learning … was easy / hard because …' },
  { q: 'Who taught you something important? What was it?', h: 'My … taught me … Learning it was …' }
];
var DEPOIS = [
  { q: 'What does Obi-Wan give Luke?', h: 'He gives him …' },
  { q: 'What is Luke interested in? What is he afraid of?', h: 'He is interested in … He is afraid of …' }
];

var TRECHOS = [
  { k: 'A Jedi Knight', ini: 10, fim: 22, ouvir: 'What was Obi-Wan once?', sentido: 'The old man tells Luke that he was once a Jedi Knight, like Luke’s father. Luke wishes he had known his father.', gram: '<b>Knowing</b> the truth changes everything.' },
  { k: 'The best pilot', ini: 22, fim: 35, ouvir: 'What was Luke’s father good at?', sentido: 'Luke’s father was the best pilot in the galaxy, and Luke is a good pilot too.', gram: 'Luke is good at <b>flying</b>.' },
  { k: 'The saber', ini: 58, fim: 80, ouvir: 'What does Obi-Wan give Luke?', sentido: 'Obi-Wan gives Luke his father’s lightsaber: an elegant weapon from a more civilized time.', gram: '<b>Holding</b> it feels strange.' },
  { k: 'The question', ini: 90, fim: 110, ouvir: 'What does Luke ask?', sentido: 'Luke asks the hard question: how did his father die?', gram: 'He is afraid of <b>hearing</b> the answer.' },
  { k: 'The Force', ini: 118, fim: 150, ouvir: 'What is the Force?', sentido: 'Obi-Wan explains the Force: an energy that comes from all living things and keeps the galaxy together.', gram: '<b>Learning</b> the Force takes years.' }
];

var TRAPS = [
  ['-ing as the subject', 'Use the Force is hard.', '<b>Using</b> the Force is hard.', 'an action as the subject: -ing'],
  ['After a preposition: -ing', 'Luke is afraid of fail.', 'Luke is afraid of <b>failing</b>.', 'of, at, in, about, before, without + -ing'],
  ['No to after a preposition', 'He is good at to fly.', 'He is good at <b>flying</b>.', 'good at flying (not at to fly)'],
  ['One action: singular verb', 'Trusting your feelings are hard.', 'Trusting your feelings <b>is</b> hard.', '-ing subject = it: is, takes, makes']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>Learning</b> the Force <b>takes</b> years<br>-ing subject = it: is, takes<br>good <b>at flying</b> · afraid <b>of failing</b> · never <s>at to fly</s><br><b>Before fighting</b> · <b>by using</b> · <b>without seeing</b>';
/* III · antes: adivinhar o que o velho dá ao Luke */
var VD_REV = { formato: 'revela', titulo: 'Before you watch · what does the old man give Luke?', pistas: [
  'It belonged to Luke’s father.', 'It is not a blaster.', 'It is “an elegant weapon for a more civilized age.”', 'It is the weapon of a Jedi Knight.'
], resposta: 'His father’s lightsaber.', mais: 'Next clue', botao: 'I know it! Show' };
/* III · durante: a palavra errada e o que ele disse, cada um no minuto do clipe (legenda-dados.js) */
var VD_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: 'He was a <u>pilot</u> on a spice freighter.', r: 'navigator', t: '0:02' },
  { f: 'I was <u>never</u> a Jedi Knight, the same as your father.', r: 'once', t: '0:14' },
  { f: 'An <u>ugly</u> weapon for a more civilized age.', r: 'elegant', t: '1:11' },
  { f: 'It’s an energy field created by all <u>old</u> things.', r: 'living', t: '2:06' }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'What does he say? Tap one.', itens: [
  { p: 'Luke’s father was the best … in the galaxy.', o: ['pilot', 'cook', 'doctor'], c: 0, tm: '0:20', d: 'Yes: the best star pilot in the galaxy.' },
  { p: 'The lightsaber is not as clumsy as a …', o: ['blaster', 'broom', 'boat'], c: 0, tm: '1:08', d: 'Yes: “Not as clumsy or random as a blaster.”' },
  { p: 'The Jedi Knights were the guardians of …', o: ['peace and justice', 'gold and ships', 'music and food'], c: 0, tm: '1:19', d: 'Yes: peace and justice, in the Old Republic.' }
] };
/* III · depois: quem é quem + uma régua */
var VD_LIGA = { formato: 'liga', titulo: 'Who is who? Match them.', pares: [
  ['Obi-Wan', 'gives Luke his father’s lightsaber'], ['Luke', 'a farm boy who is a good pilot'], ['Darth Vader', 'a pupil who turned to evil'], ['Luke’s uncle', 'did not want Luke to have it']
] };
var VD_REG = { formato: 'regua', titulo: 'After the clip', frase: 'Learning something new is easier with a teacher.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why: Learning … is … because … / Learning … takes …' };
/* V · a mensagem do Obi-Wan → a regra */
var CARTA = { de: 'A message for Luke · from Obi-Wan',
  txt: 'Luke, [[learning]] the Force takes years. Don’t be afraid of [[failing]]. You are good at [[flying]], but [[trusting]] your feelings is harder. Before [[fighting]], close your eyes. You can win by [[using]] the Force.',
  assina: 'Obi-Wan' };
var REGRA = [
  { a: '', par: ['Learning', 'Learn'], c: 0, b: ' the Force takes years. (an action as the subject: -ing)' },
  { a: 'Learning the Force ', par: ['takes', 'take'], c: 0, b: ' years. (one action = it)' },
  { a: 'Luke is good at ', par: ['flying', 'to fly', 'fly'], c: 0, b: '. (after at, of, in: -ing)' },
  { a: 'Don’t be afraid of ', par: ['failing', 'fail'], c: 0, b: '.' },
  { a: 'Before ', par: ['fighting', 'to fight'], c: 0, b: ', close your eyes. (also by, without)' }
];
/* VI · o treino falado: seis tiros */
var TIROS = [
  { pista: 'learn · the Force · takes years (subject)', resp: '<b>Learning</b> the Force <b>takes</b> years.', depois: 'What takes years to learn? Say it with -ing.' },
  { pista: 'Luke · good at · fly', resp: 'Luke is good at <b>flying</b>.', depois: 'What are you good at?' },
  { pista: 'he · afraid of · fail', resp: 'He is afraid of <b>failing</b>.', depois: 'What are you afraid of doing?' },
  { pista: 'trust your feelings · is hard (subject)', resp: '<b>Trusting</b> your feelings <b>is</b> hard.', depois: 'Is trusting your feelings easy for you?' },
  { pista: 'before · fight · close your eyes', resp: '<b>Before fighting</b>, close your eyes.', depois: 'What do you do before starting an exam?' },
  { pista: 'you · block it · by · use the Force', resp: 'You can block it <b>by using</b> the Force.', depois: 'How do you relax? By doing what?' }
];
/* VII · um minuto de fala + tocar cada forma que usou */
var VG_CRONO = { formato: 'cronometro', titulo: 'Just a minute · learning', segundos: 45, texto: 'Talk for 45 seconds. What are you learning now? What are you good at? What are you afraid of? Don’t stop!' };
var VG_USA = { formato: 'usa', titulo: 'Tap each phrase when you use it.', palavras: ['Learning … is / takes', 'good at …ing', 'afraid of …ing', 'Before …ing', 'by …ing', 'without …ing'], fim: 'All six. The visor is dark and you are still fighting!' };

/* o remoto: o gesto forte */

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, rm: { n: 0, esc: -1 } };

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
  return '<div class="sw-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a viseira do capacete: o remoto no meio; oito tiros em volta; o tiro da vez vem em vermelho para o centro de baixo, os desviados voltam em azul; a viseira escurece a cada desvio */
function remoto(feitas, atual, nova) {
  var tiros = TIROS.map(function (t, i) {
    var a = (i * 315 / (TIROS.length - 1) - 157.5) * Math.PI / 180, x1 = 200 + Math.cos(a) * 46, y1 = 120 + Math.sin(a) * 46, x2 = 200 + Math.cos(a) * 150, y2 = 120 + Math.sin(a) * 96;
    if (i < feitas) return '<line class="sw-tiro desviado' + (nova && i === feitas - 1 ? ' novo' : '') + '" x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '"/>';
    if (i === atual) return '<line class="sw-tiro vindo" x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="200" y2="236"/>';
    return '';
  }).join('');
  var escuro = Math.min(feitas, TIROS.length) / TIROS.length * .55;
  return '<div class="sw-visor vd" role="img" aria-label="The training remote: ' + feitas + ' of ' + TIROS.length + ' shots blocked"><svg viewBox="0 0 400 240" class="sw-svg"><rect width="400" height="240" class="sw-fundo"/>' + tiros
    + '<g class="sw-remoto' + (nova ? ' gira' : '') + '"><circle cx="200" cy="120" r="30"/><circle cx="200" cy="120" r="30" class="sw-faixa"/><circle cx="188" cy="112" r="4" class="sw-olho"/><circle cx="212" cy="112" r="4" class="sw-olho"/><circle cx="200" cy="130" r="4" class="sw-olho"/></g>'
    + '<line class="sw-sabre" x1="200" y1="240" x2="' + (feitas ? 236 : 200) + '" y2="' + (feitas ? 176 : 196) + '"/>'
    + '<rect width="400" height="240" class="sw-escuro" style="opacity:' + escuro.toFixed(2) + '"/>'
    + '<path d="M0 0 H400 V40 Q200 -10 0 40 Z M0 240 H400 V200 Q200 250 0 200 Z" class="sw-borda"/></svg>'
    + '<p class="sw-legenda">' + (feitas >= TIROS.length ? 'Six shots, eyes closed. You felt them.' : 'Blocked ' + feitas + ' of ' + TIROS.length + ' · the visor gets darker') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · -ing as a noun · learning, good at flying</span><h1>Learning the Ways of the Force</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">A farm boy on a desert planet dreams about flying. An old man gives him his father’s sword and starts training him. Tonight the training remote fires six shots: say it right, and the saber blocks it, until you can do it with your eyes closed.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start training</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r sw-foto"><img src="' + img('capa') + '" alt="Two suns setting over the dunes of a desert planet, with a small domed home"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="sw-encarte vd"><div class="sw-capinha"><img src="' + img('nave') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>On the old ship</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="sw-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Luke dreams about flying. What did you dream about doing as a teenager?</h2></div>' + mostra('enc', 'I dreamed about traveling. Seeing the world was my big dream.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vr', VD_REV) + '</div>'
    + '<div class="lado-l"><div class="sw-selo vd"><b>Star Wars</b><small>A New Hope · the official clip · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the clip now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="sw-video"><div class="sw-vcol">' + iframe(YT, FILME + ' · Obi-Wan and Luke') + '<small class="sw-cred">' + FILME + ' · official clip (Star Wars) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('ve', VD_ERRO) + FM.ex('vs', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the clip</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vl', VD_LIGA) + '</div><div class="lado-l">' + FM.ex('vg', VD_REG) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="sw-video"><div class="sw-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="sw-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="sw-sentido">' + x.sentido + '</span><span class="sw-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="sw-centro"><p class="sw-dica">Tap a frame to open that moment of the clip.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { papel: 'tela', toque: 'Tap the -ing words', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.remoto = function (c) {
  return cab(c) + FM.fala('tiro', TIROS, {
    rotulo: 'Shot', prox: 'Next shot', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + remoto(feitas, atual, atual >= 0 ? nova : 0) + '</div>'; },
    fim: 'Six shots blocked with your eyes closed. Now be Obi-Wan: give Luke three pieces of advice with -ing.'
  });
};

R.mestre = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('cr', VG_CRONO) + '</div><div class="lado-l">' + FM.ex('us', VG_USA) + '</div></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Learning English takes …\nBefore speaking, …\nDon’t be afraid of …', 'A master’s advice',
    ['learning', 'speaking', 'afraid of making', 'good at', 'before', 'by practicing'], ['A master’s advice', 'Advice for someone who is learning English: -ing as a subject, and -ing after a preposition.'])
    + '<div class="lado-fim"><div class="grande vd"><span><u>Learning</u> takes time</span><span>good at <u>flying</u></span><span>afraid of <u>failing</u></span><span>not <s>afraid of fail</s>, not <s>good at to fly</s></span></div>'
    + mostra('fim', 'Learning English takes time, so be patient. Watching series helps a lot. Before speaking, breathe. And don’t be afraid of making mistakes: making mistakes is part of learning.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'imagem', img: 'cave', alt: 'A quiet desert cave at night lit by one blue crystal, with stars at the entrance', rotulo: 'The cave', rot: 'I · The Cave', t: 'Before the clip: a quiet place to learn.', p: 'One question at a time. The student answers; then the teacher answers too.',
  itens: [
    { q: 'You are alone in this cave for a week. What do you learn?', ex: 'Meditating. Being alone and quiet is hard for me.' },
    { q: 'Where is your favorite place for studying?', ex: 'My kitchen table. Studying there is easy.' },
    { q: 'Is learning alone better than learning with a teacher?', ex: 'No. Learning with a teacher is faster.' }
  ] };
/*AQ@@*/
