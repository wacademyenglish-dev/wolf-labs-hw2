/* ============================================================
   NARUTO SHIPPUDEN · THE TRAINING SCROLL · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A1 · can / can't (habilidade) + yet: I can't do it... yet.
   Pergunta Can you...? Yes, I can / No, I can't.
   Erros: can to, cans, can + -s (can makes), don't can / not can,
   Do you can...?, is can.
   Catálogo WOLFLIX Live (07/10): família ANIME, modo SUBIR DE NÍVEL.
   A tela forte: o pergaminho de treino; cada frase certa acende um
   selo, a barra de chakra enche e o rank sobe (Genin → Hokage).
   ⚠ Trailer: só minutagem e paráfrase. Tem luta, sem sangue.
   O AQUECIMENTO (aquece.js): o dado. O FECHAMENTO (final.js): perguntas.
   O VÍDEO: 22R0j8UKRzY (trailer oficial em inglês, VIZ, 1:43, idade 0,
   embed sim). Sem legenda; os tempos das falas vieram da transcrição
   local de 25/09 (0–5, 32–40, 52–57, 64–67, 84–88 s).
   A CARA: laranja do Naruto, azul-noite, papel de pergaminho escuro,
   Dela Gothic One. A antiga era o estúdio de legenda.
   Fila: FILA-LIVE-386.md · 264.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: adivinhar quem volta para casa (pistas); achar a palavra
   errada e ouvir a palavra certa, com ▶ nas falas do trailer
   (legenda-dados.js); depois, a reação a um amigo antigo + uma régua;
   V: o caderno de Naruto tem erros (achar e falar a palavra certa; a regra
   aparece depois do Check); VI: o pergaminho com seis selos (verdadeiro ou
   mentira, e a frase certa falada); VII (era EXTRA): montar a pergunta
   Can you…? e entrevistar o professor.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'vila', rot: 'I · Warm-up and Put It in Order', t: 'Before the trailer: what you can do, then Naruto’s story.', p: 'Answer three questions about you. Then put four moments of Naruto’s story in order and tell it.' },
  { k: 'palavras', est: 'l', min: 5, img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Naruto Shippuden. Back home after two years.', p: 'Guess first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', min: 5, extra: 1, img: 'rolo', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'rolo', rot: 'V · Can, Can’t, Yet', t: 'Naruto’s notebook has mistakes. Can you find them?', p: 'Find the wrong words. Say the right ones out loud. Then tap Check.' },
  { k: 'rolo', est: 'o', min: 7, img: 'capa', rot: 'VI · The Training Scroll', t: 'Six seals. Every right answer lights one, and your rank goes up.', p: 'Is the sentence true or a lie? If it is a lie, say the true one out loud.' },
  { k: 'ficha', est: 'o', min: 7, img: 'vila', rot: 'VII · Your Ninja File', t: 'Interview the teacher: what can they do, and what can’t they do... yet?', p: 'Build each question out loud. Then tap Check and ask the teacher.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · Questions', t: 'Questions.', p: 'Answer.' }
];

var SERIE = 'Naruto Shippuden', ANO = '2007';
var YT = '22R0j8UKRzY', DUR = 103;

var ENCARTE = [
  ['The show', '<i>Naruto Shippuden</i> is a Japanese anime (2007–2017), from the manga by Masashi Kishimoto. This trailer is in English.'],
  ['The boy', 'Naruto Uzumaki grows up alone. At ninja school he is the worst student: he can’t do a simple trick, and nobody believes in him. His dream: to be Hokage, the leader of the village.'],
  ['This story', 'In <i>Shippuden</i>, Naruto comes home after two and a half years of training. Now he can do amazing things. But not everything... yet.']
];

var ANTES = [
  { q: 'Do you watch anime? Which one?', h: 'Yes, I watch ... / No, I don’t.' },
  { q: 'Naruto trains for two years. What can you do after two years of practice?', h: 'After two years, I can ...' }
];
var DEPOIS = [
  { q: 'What can Naruto do now? Say one thing.', h: 'He can ...' },
  { q: 'Can he do everything? What can’t he do... yet?', h: 'He can’t ... yet.' }
];

var TRECHOS = [
  { k: 'Back home', ini: 0, fim: 25, ouvir: 'Where is Naruto? Is he happy?', sentido: 'Naruto comes back to his village after two and a half years of training. He is older and stronger.', gram: 'Now he <b>can</b> do new things.' },
  { k: 'Old friends', ini: 25, fim: 48, ouvir: 'Who does he meet?', sentido: 'He meets his old friends and his teacher. They want to see what he can do now.', gram: '<b>Can</b> you show us? Yes, I <b>can</b>!' },
  { k: 'The mission', ini: 48, fim: 62, ouvir: 'What is the problem?', sentido: 'A friend from another village is in danger, and Naruto’s team must go and help him.', gram: 'We <b>can</b> help him. We <b>can’t</b> wait.' },
  { k: 'The fight', ini: 62, fim: 84, ouvir: 'What does Naruto say before he fights?', sentido: 'Big fights, new powers, and Naruto says that now it is his turn.', gram: 'I <b>can</b> do it now!' },
  { k: 'The promise', ini: 84, fim: 103, ouvir: 'Does Naruto give up?', sentido: 'He promises he will never give up. Some things are still too hard, but not forever.', gram: 'I <b>can’t</b> do it... <b>yet</b>.' }
];

var TRAPS = [
  ['No to after can', 'He can to fly.', 'He can <b>fly</b>.', 'can + verb'],
  ['Can never changes', 'She cans punch very hard.', 'She <b>can</b> punch very hard.', 'I can · he can · she can'],
  ['The verb after can', 'He can makes clones.', 'He can <b>make</b> clones.', 'no -s after can'],
  ['Can’t, not don’t can', 'I don’t can swim.', 'I <b>can’t</b> swim.', 'can’t = cannot · Can you...? (no do)']
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>He can fly.</b> can + verb · no -s, no to<br><b>She can’t swim.</b> can’t = cannot<br><b>Can you cook?</b> no do · Yes, I can<br><b>I can’t do it… yet.</b> yet = not now, but one day';
/* III · antes: adivinhar quem volta para casa */
var VD_REV = { formato: 'revela', titulo: 'Before you watch · who is coming home?', pistas: [
  'He grew up alone.', 'At ninja school he is the worst student.', 'He can’t do a simple trick.', 'His dream: to be Hokage, the leader of the village.'
], resposta: 'Naruto Uzumaki. After two years of training, he is back in his village.', mais: 'Next clue', botao: 'I know it! Show' };
/* III · durante: a palavra errada e a palavra que você ouviu, cada uma no minuto do trailer (legenda-dados.js) */
var VD_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: 'The same quick <u>smile</u> and monster strength.', r: 'temper', t: '0:20' },
  { f: 'Let’s go to <u>sleep</u>.', r: 'work', t: '0:26' },
  { f: 'This time, it’s my <u>day</u> to save them!', r: 'turn', t: '1:09' }
] };
var VD_SOM = { formato: 'som', titulo: 'Which word did you hear?', itens: [
  { a: 'Now this takes me ', par: ['back', 'black'], c: 0, b: '!', t: '0:00' },
  { a: 'I’m ', par: ['home', 'hole'], c: 0, b: ', everyone!', t: '0:05' },
  { a: 'Get him ', par: ['back', 'bag'], c: 0, b: '!', t: '1:24' }
] };
/* III · depois: a reação a um amigo antigo + uma régua */
var VD_REA = { formato: 'reacao', titulo: 'After the trailer · an old friend says…', quem: 'Your friend', fala: '“So, Naruto, you went and got all grown up. Impressive.” How does Naruto answer?', reacoes: [
  ['Show your skills', 'I can make a hundred clones now!', 'Wow! Show me!'],
  ['Be honest', 'I can’t do everything. I can’t be Hokage… yet.', 'Yet. I like that word.'],
  ['Say thanks', 'Thanks! I can run faster and fight better now.', 'Good. We need you.']
] };
var VD_REG = { formato: 'regua', titulo: 'After the trailer', frase: 'After two years, Naruto can do everything.', esquerda: 'No', direita: 'Yes', depois: 'Say it: He can … but he can’t … yet.' };
/* V · o caderno do Naruto: achar o erro e falar a palavra certa */
var ERR = { formato: 'erro', titulo: 'Naruto’s notebook has five mistakes. Say the right words.', itens: [
  { f: 'Naruto can <u>to fly</u> very high.', r: 'fly' },
  { f: 'Sakura <u>cans</u> punch very hard.', r: 'can' },
  { f: 'Kakashi can <u>copies</u> any jutsu.', r: 'copy' },
  { f: 'I <u>don’t can</u> swim.', r: 'can’t' },
  { f: '<u>Do you can</u> cook?', r: 'Can you' }
] };
/* VI · o pergaminho: verdadeiro ou mentira, e a frase certa falada (seis selos) */
var SELOS = [
  { quem: 'Naruto, as a kid' }, { quem: 'Naruto, now' }, { quem: 'Sakura' }, { quem: 'Gaara' }, { quem: 'You ask Naruto' }, { quem: 'Naruto’s dream' }
];
var RANKS = ['Academy', 'Genin', 'Genin', 'Chunin', 'Jonin', 'Kage', 'Hokage'];
var ROLO = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the true sentence out loud.', itens: [
  { f: 'Naruto, as a kid · He can make a good clone.', t: false, c: 'He <b>can’t</b> make a good clone <b>yet</b>.' },
  { f: 'Naruto, now · He can make a hundred clones.', t: true },
  { f: 'Sakura · Sakura can punch very hard.', t: true },
  { f: 'Gaara · Gaara can to move sand with his mind.', t: false, c: 'Gaara can <b>move</b> sand with his mind.' },
  { f: 'Naruto answers “Can you fly?” · No, I don’t can.', t: false, c: 'No, I <b>can’t</b>.' },
  { f: 'Naruto’s dream · I can be Hokage now!', t: false, c: 'I <b>can’t</b> be Hokage… <b>yet</b>!' }
] };
/* VII (era EXTRA) · monte a pergunta e entreviste o professor */
var FICHA_Q = { formato: 'pergunta', titulo: 'Build the question. Ask your teacher.', depoisRot: 'The teacher answers', depois: ['Yes, I can.', 'No, I can’t.', 'I can’t… yet!'], itens: [
  { p: 'Ask if the teacher can swim.', r: '<b>Can</b> you swim?' },
  { p: 'Ask what the teacher can cook.', r: 'What <b>can</b> you cook?' },
  { p: 'Ask if the teacher can drive.', r: '<b>Can</b> you drive?' },
  { p: 'Ask if the teacher can play an instrument.', r: '<b>Can</b> you play an instrument?' },
  { p: 'Ask how many languages the teacher can speak.', r: 'How many languages <b>can</b> you speak?' },
  { p: 'Ask for one thing the teacher can’t do… yet.', r: 'What <b>can’t</b> you do <b>yet</b>?' }
] };

/* o pergaminho: o gesto forte */

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, rl: { n: 0, esc: -1 } };

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
  return '<div class="nr-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o pergaminho de treino: oito selos em círculo de tinta; cada frase certa acende um; a barra de chakra enche e o rank muda */
function rolo(acesos, atual, nova) {
  var selos = SELOS.map(function (s, i) {
    var cls = i < acesos ? (nova && i === acesos - 1 ? ' aceso novo' : ' aceso') : (i === atual ? ' vez' : '');
    return '<div class="nr-selo-t' + cls + '"><span>' + (i + 1) + '</span><small>' + s.quem + '</small></div>';
  }).join('');
  return '<div class="nr-rolo vd" role="img" aria-label="The training scroll: ' + acesos + ' of ' + SELOS.length + ' seals lit, rank ' + RANKS[acesos] + '"><div class="nr-rolo-topo"><b>Training scroll</b><span>Rank · <em>' + RANKS[acesos] + '</em></span></div>'
    + '<div class="nr-selos">' + selos + '</div><div class="nr-chakra"><i style="width:' + (acesos / SELOS.length * 100).toFixed(0) + '%"></i></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A1 · can / can’t · I can’t do it... yet</span><h1>I Can’t Do It... Yet</h1>'
    + '<p class="banda">' + SERIE + ' · ' + ANO + '</p>'
    + '<p class="sub">Naruto was the worst student at ninja school. Now he is back after two years of training, and he can do amazing things. Open the training scroll: every right sentence lights a seal.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the scroll</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r nr-foto"><img src="' + img('capa') + '" alt="An anime forest training ground at dusk with wooden posts"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="nr-encarte vd"><div class="nr-capinha"><img src="' + img('vila') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>The Hidden Leaf</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="nr-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Nobody believes in Naruto. Who believes in you?</h2></div>' + mostra('enc', 'My mother believes in me. She says I can do it.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vr', VD_REV) + '</div>'
    + '<div class="lado-l"><div class="nr-selo vd"><b>' + SERIE + '</b><small>the official trailer in English · about two minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="nr-video"><div class="nr-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="nr-cred">' + SERIE + ' · official trailer (VIZ Media) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('ve', VD_ERRO) + FM.ex('vs', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vf', VD_REA) + '</div><div class="lado-l">' + FM.ex('vg', VD_REG) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="nr-video"><div class="nr-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="nr-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="nr-sentido">' + x.sentido + '</span><span class="nr-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="nr-centro"><p class="nr-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var ver = !!((S.fq || {}).er && S.fq.er.ver);
  return cab(c) + '<div class="nr-centro">' + FM.ex('er', ERR)
    + (ver ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Say the five fixes out loud, then tap Check. The rule appears.</p>') + '</div>';
};

R.rolo = function (c) {
  var e = (S.fq || {}).rl, r = (e && e.r) || {}, feitas = 0;
  ROLO.itens.forEach(function (x, i) { if (r[i] != null && (r[i] === 't') === !!x.t) feitas++; });
  return cab(c) + comPlaca('<div class="fm-obj">' + rolo(feitas, -1, 0) + '</div>' + FM.ex('rl', ROLO)
    + '<p class="fm-nota" style="text-align:center">' + (feitas >= SELOS.length ? 'Six seals. Rank: Hokage! Now tell the teacher: one thing you can do, one you can’t, and one you can’t do… yet.' : 'Each right answer lights a seal and fills the chakra bar.') + '</p>', PRESA);
};

R.ficha = function (c) {
  return cab(c) + comPlaca(FM.ex('fc', FICHA_Q), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="nr-centro"><p class="nr-dica">Questions.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'dado', rot: 'I · The Ninja Die', t: 'Before the trailer: what can you do?', p: 'Tap the die and answer. Then the teacher answers.', rotulo: 'What can you do?', semente: 5,
  itens: [
    { q: 'Can you run fast?', ex: 'Yes, I can. I run every morning.' },
    { q: 'Can you cook? What can you cook?', ex: 'I can cook pasta. I can’t cook fish.' },
    { q: 'Can you sing? Do you sing in the shower?', ex: 'No, I can’t sing. But I sing in the shower!' },
    { q: 'What can you do very well?', ex: 'I can draw very well.' },
    { q: 'Can you speak a third language?', ex: 'No, I can’t... yet. I want to learn Japanese.' },
    { q: 'What can your best friend do?', ex: 'She can play the piano.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'perguntas', rot: 'VIII · Questions', t: 'Questions about you, the ninja.', p: 'Answer each question with can or can’t. Then ask the teacher.',
  itens: [
    { q: 'What can you do very well?', ex: 'I can play football very well.' },
    { q: 'What can’t you do... yet?', ex: 'I can’t drive yet.' },
    { q: 'Can you speak two languages?', ex: 'Yes, I can. Portuguese and a little English.' },
    { q: 'What can your best friend do?', ex: 'He can fix computers.' },
    { q: 'What can a ninja do that you can’t?', ex: 'A ninja can jump very high. I can’t!' }
  ],
  depois: 'Now you ask the teacher two of these questions.' };
/*FIM@@*/
