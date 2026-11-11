/* ============================================================
   THE BATMAN · THE RIDDLER’S CARDS · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · modais de dedução: must be (tenho certeza que sim),
   might / may / could be (talvez), can’t be (tenho certeza que não).
   Erros: must to be / can’t to be, modal + verbo flexionado (must is,
   might is), mustn’t be no lugar de can’t be (é proibição, não
   dedução), can be no lugar de might / could (o talvez de hoje),
   don’t can, o grau errado para a pista (must quando é só talvez),
   pergunta sem inversão (Who he could be?).
   Catálogo WOLFLIX Live (07/10): família CRIME, modo ARQUIVO.
   A tela forte: a mesa dos cartões do Charada. Oito cartões virados
   para baixo, com o ponto de interrogação verde nas costas; cada
   dedução certa vira um cartão e carimba nele o grau de certeza
   (MUST · MIGHT · CAN’T). No fim, a mesa inteira aberta.
   O AQUECIMENTO (aquece.js): a escala, How sure are you? O FECHAMENTO
   (final.js): a cadeira quente, o aluno é o Batman.
   O VÍDEO: mqqft2x_Aa4 (trailer principal Warner Bros., 2:38, idade 0,
   embed sim). Tenso, não gráfico: armas apontadas, briga, fogo, uma
   perseguição. Falas conferidas na legenda oficial; o trecho da
   perseguição tem tempo ESTIMADO, e cada momento é contado com
   palavras nossas.
   A CARA: noite de chuva, vermelho do Batman, verde do Charada; Big
   Shoulders Display nos títulos, Source Serif 4 no texto. A antiga era
   o quadro do caso com barbante.
   Fila: FILA-LIVE-386.md · 297.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: uma roleta de suspeitos antes; a palavra que você ouviu com
   ▶ nas falas do trailer; depois, True or Lie com ▶. V: a carta do Charada
   (tocar o grau de certeza) e completar a regra. VI: a mesa com SEIS cartões,
   cada um com a fala primeiro. VII (era EXTRA, agora essencial): ligar a
   coisa estranha à dedução.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'salao', rot: 'I · Warm-up and The Evidence', t: 'Before the trailer: you, then five pieces of evidence.', p: 'Answer three questions about your life. Then open the evidence one piece at a time and say what it must, might or can’t be.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'The Batman. The official trailer.', p: 'Spin the wheel first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'salao', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'cartao', rot: 'V · Mistake Hunter', t: 'Six clues from the Riddler. Each one has a wrong word.', p: 'Tap the wrong word. Say it right. Then check.' },
  { k: 'regra', est: 'f', min: 6, img: 'mesa', rot: 'VI · Must, Might, Can’t', t: 'A note from the Riddler: how sure is he?', p: 'Tap the words that show how sure he is. Then finish the rule.' },
  { k: 'cartas', est: 'o', min: 7, img: 'capa', rot: 'VII · The Riddler’s Cards', t: 'Six cards. Every deduction you say turns one over.', p: 'Read the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'deduz', est: 'o', min: 7, img: 'mesa', rot: 'VIII · Your Deductions', t: 'Five strange things. What is going on?', p: 'Tap a thing, then its deduction. Then say why.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var SERIE = 'The Batman', ANO = '2022';
var YT = 'mqqft2x_Aa4', DUR = 158;

var ENCARTE = [
  ['The film', '<i>The Batman</i> (2022), with Robert Pattinson. It is a detective story more than a superhero film: dark, rainy, slow and full of clues.'],
  ['The case', 'Somebody is killing the people who run Gotham City. At every crime scene there is a card for the Batman, with a riddle on it.'],
  ['The detective', 'The police do not trust the man in the mask, but Lieutenant Gordon brings him in anyway: he is the only one who can read the riddles. Nobody knows who the Riddler is.']
];

var ANTES = [
  { q: 'Do you like detective stories? Are you good at guessing the end?', h: 'Yes, I usually … / No, I never …' },
  { q: 'Why does a hero wear a mask? Give two reasons.', h: 'He might … / He must …' }
];
var DEPOIS = [
  { q: 'Who might the Riddler be? Guess, and say how sure you are.', h: 'He might be … / He can’t be …' },
  { q: 'Is the Batman a hero in this trailer, or something darker?', h: 'He must be … because …' }
];

var TRECHOS = [
  { k: 'Fear is a tool', ini: 28, fim: 45, ouvir: 'What is the light in the sky?', sentido: 'A voice says fear is a tool. When the light hits the sky, it is not just a call: it is a warning.', gram: 'The light <b>must be</b> a warning to criminals.' },
  { k: 'The match', ini: 55, fim: 67, ouvir: 'Who is on the phone, and what is the city like?', sentido: 'Someone has been trying to reach him. Then someone says the city is a powder keg, and the Riddler is the match.', gram: 'The city <b>might</b> explode at any moment.' },
  { k: 'Worse for you', ini: 76, fim: 91, ouvir: 'Is the voice a friend or an enemy?', sentido: 'A voice, very close, says things are only going to get worse for him.', gram: 'That <b>can’t be</b> a friend.' },
  { k: 'Under the mask', ini: 91, fim: 106, ouvir: 'What does she ask him?', sentido: 'On a roof, she says maybe they are not so different, and asks who he is under the mask. He answers with one word: vengeance.', gram: 'She <b>might be</b> right.' },
  { k: 'The chase', ini: 106, fim: 135, ouvir: 'What happens on the road?', sentido: 'Fire, rain and a wild car chase on the highway. (Times estimated.)', gram: 'The driver <b>must be</b> crazy.' }
];

var TRAPS = [
  ['No TO', 'It must to be him.', 'It <b>must be</b> him.', 'must / might / can’t + verb, no to'],
  ['No -s after the modal', 'He might is the killer.', 'He <b>might be</b> the killer.', 'modal + be'],
  ['Sure it is NOT', 'It mustn’t be Gordon.', 'It <b>can’t be</b> Gordon.', 'sure no: can’t be · mustn’t = it is not allowed'],
  ['Maybe, now', 'The killer can be a cop.', 'The killer <b>might / could be</b> a cop.', 'maybe: might, may, could']
];

/* os cartões do Charada: o gesto forte */
var CARTAS = [
  { pista: 'The card says “To the Batman”.', grau: 'must', resp: 'It <b>must be</b> for the Batman.', depois: 'Who must the next card be for?' },
  { pista: 'The killer wears a mask. Nobody has seen his face.', grau: 'might', resp: 'The killer <b>might be</b> a cop.', depois: 'Who else might the killer be?' },
  { pista: 'Gordon was with the Batman all night.', grau: 'cant', resp: 'It <b>can’t be</b> Gordon.', depois: 'Why can’t it be Gordon? Say it in your words.' },
  { pista: 'Every riddle is perfect, clever and hard.', grau: 'must', resp: 'He <b>must be</b> very smart.', depois: 'What else must he be, to write riddles like this?' },
  { pista: 'Selina knew one of the victims. That is all we know.', grau: 'could', resp: 'She <b>could be</b> involved.', depois: 'Is she a friend or an enemy? How sure are you?' },
  { pista: 'The car is tiny, and there were five men.', grau: 'cant', resp: 'They <b>can’t be</b> in that car.', depois: 'Where might they be, then?' }
];
var RECUSA = {
  to: 'No TO after the modal: must be, might be, can’t be.',
  base: 'After the modal: be (must be, might be), never is or being.',
  can: 'Maybe, right now: might or could. Can is for what is possible in general.',
  mustnt: 'Sure it is not: can’t be. Mustn’t means “it is not allowed”.',
  dont: 'The negative of can: can’t (no don’t).',
  fraco: 'The clue is very strong. You are sure: must be.',
  forte: 'We only know one thing. It is a maybe: might / could be.',
  q: 'Questions: Who could he be? (the modal before the subject)'
};
var GRAUS = { must: ['MUST', '90%'], might: ['MIGHT', '50%'], could: ['COULD', '50%'], cant: ['CAN’T', '0%'] };

var DEDUCOES = [
  { k: '4 a.m.', h: 'Your neighbor’s lights are on at 4 a.m. every night.', ex: 'He must work at night. Or he might be a writer!' },
  { k: 'The phone', h: 'Your phone rings three times from a number you don’t know.', ex: 'It might be the bank. It can’t be a friend, they text.' },
  { k: 'The box', h: 'There is a big box at your door with no name on it.', ex: 'It must be for my wife. She loves online shopping.' },
  { k: 'The smile', h: 'Your boss is smiling a lot today.', ex: 'He might have good news. Or it could be his birthday.' },
  { k: 'The quiet', h: 'Your house is very quiet, and the dog is not at the door.', ex: 'He must be asleep. He can’t be outside, the door is closed.' },
  { k: 'This class', h: 'The teacher is drinking a lot of coffee today.', ex: 'You must be tired. You might have a lot of classes.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>must be</b> · sure yes (90%)<br><b>might / could be</b> · maybe (50%)<br><b>can’t be</b> · sure no (0%)<br>modal + <b>be</b> · never “to be”';
/* III · antes: a roleta dos suspeitos */
var VD_ROD = { formato: 'sorteio', titulo: 'Before you watch: spin the wheel. Who might the Riddler be?', botao: 'Spin', opcoes: ['Gordon', 'Selina', 'The mayor', 'A police officer', 'A friend of the Batman', 'Someone we haven’t met'] };
/* III · durante: a palavra que você ouviu, cada uma no minuto do trailer (legenda-dados.js) */
var VD_SOM = { formato: 'som', titulo: 'Which word did you hear?', itens: [
  { a: 'It won’t be ', par: ['long', 'wrong'], c: 0, b: ' before…', t: '1:12' },
  { a: 'I don’t ', par: ['chair', 'care'], c: 1, b: ' what happens to me.', t: '1:16' },
  { a: 'It’s only gonna get ', par: ['worse', 'worth'], c: 0, b: ' for you.', t: '1:18' },
  { a: 'Maybe we’re not so ', par: ['different', 'difficult'], c: 0, b: '.', t: '1:32' },
  { a: 'Who are you ', par: ['under', 'other'], c: 0, b: ' there?', t: '1:35' }
] };
/* III · depois: True or Lie, com ▶ no minuto */
var VD_VL = { formato: 'verdadeOuMentira', titulo: 'After the trailer: true or lie? If it’s a lie, say the truth.', itens: [
  { f: 'A voice says: “I don’t care what happens to me.”', t: 1, tm: '1:16' },
  { f: 'A voice says things will get better for him.', t: 0, tm: '1:18', c: 'It says: it’s only gonna get worse for you.' },
  { f: 'A voice says he hears nothing they say.', t: 0, tm: '1:27', c: 'It says: you hear everything they say.' },
  { f: 'She says: “Maybe we’re not so different.”', t: 1, tm: '1:32' },
  { f: 'She asks: “Who are you under there?”', t: 1, tm: '1:35' }
] };
/* V · a carta do Charada */
var CARTA_R = { formato: 'carta', carta: { de: 'To the Batman', txt: 'You think I am a ghost. I am not. Somebody [[must be]] very close to you. It [[might be]] a friend of yours. It [[can’t be]] Gordon, he is too slow. And me? I [[could be]] anyone. Maybe I am the man next to you.', assina: 'The Riddler' },
  toque: 'Tap the words that show how sure he is', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner.',
  regra: [
    { a: 'Sure it is true: it', par: ['must', 'can’t'], c: 0, b: 'be him.' },
    { a: 'Maybe: it', par: ['might', 'must'], c: 0, b: 'be him. (or could)' },
    { a: 'Sure it is NOT true: it', par: ['mustn’t', 'can’t'], c: 1, b: 'be him.' },
    { a: 'After the modal, say', par: ['be', 'to be'], c: 0, b: 'and never is.' }
  ] };
/* VII · ligar a coisa estranha à dedução */
var VD_LIGA = { formato: 'liga', titulo: 'Match each strange thing with a deduction. Then say why.', pares: [
  ['Your neighbor’s lights are on at 4 a.m. every night.', 'He must work at night.'],
  ['Your phone rings three times from a number you don’t know.', 'It might be the bank.'],
  ['There is a big box at your door. You did not buy anything.', 'It can’t be mine.'],
  ['Your boss is smiling a lot today.', 'He might have good news.'],
  ['Your house is very quiet, and the dog is not at the door.', 'He must be asleep.']
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, cr: { n: 0, esc: -1 } };

/* a linha do vídeo: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
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
  return '<div class="rd-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a mesa: oito cartões; os fechados mostram o ponto de interrogação verde, os abertos a pista e o carimbo do grau de certeza */
function mesa(feitas, atual, nova) {
  var fim = feitas >= CARTAS.length;
  var cs = CARTAS.map(function (c, i) {
    var aberta = i < feitas, cls = aberta ? (nova && i === feitas - 1 ? ' aberta nova' : ' aberta') : (i === atual ? ' vez' : '');
    var g = GRAUS[c.grau];
    return '<div class="rd-carta' + cls + '"><div class="rd-gira">'
      + '<div class="rd-costas"><svg viewBox="0 0 40 60" aria-hidden="true"><path d="M12 20c0-6 4-10 9-10s9 4 9 9c0 6-8 7-8 14v3"/><circle cx="22" cy="44" r="2.6"/></svg><small>To the Batman</small></div>'
      + '<div class="rd-frente"><p>' + c.pista + '</p><b class="rd-carimbo g-' + c.grau + '">' + g[0] + '<small>' + g[1] + '</small></b></div>'
      + '</div></div>';
  }).join('');
  return '<div class="rd-tampo vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The Riddler’s cards: ' + feitas + ' of ' + CARTAS.length + ' turned over"><div class="rd-grade">' + cs + '</div>'
    + '<p class="rd-legenda">' + (fim ? 'The whole table is open. Six clues, six deductions.' : feitas + ' of ' + CARTAS.length + ' cards turned over') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · modals of deduction · must be, might be, can’t be</span><h1>It Can’t Be Him</h1>'
    + '<p class="banda">' + SERIE + ' · Warner Bros.</p>'
    + '<p class="sub">A killer in Gotham leaves a card for the Batman at every crime scene. Tonight you are the detective at the table: read each card, decide how sure you are, and turn it over. Must, might, or can’t.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the case</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r rd-foto"><img src="' + img('capa') + '" alt="A rainy gothic city street at night with red lights on the wet road"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="rd-encarte vd"><div class="rd-capinha"><img src="' + img('salao') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>Gotham City Hall, midnight</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="rd-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Why does the killer write to the Batman, and not to the police?</h2></div>' + mostra('enc', 'He might want a game. Or he must know who the Batman is.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_ROD) + '<p class="fm-nota">Say: It might be … / It can’t be … because …</p></div>'
    + '<div class="lado-l"><div class="rd-selo vd"><b>' + SERIE + '</b><small>the main trailer · tense, not graphic · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="rd-video"><div class="rd-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="rd-cred">' + SERIE + ' · main trailer (Warner Bros.) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('som', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="rd-centro">' + FM.ex('vl', VD_VL) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="rd-video"><div class="rd-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="rd-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="rd-sentido">' + x.sentido + '</span><span class="rd-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="rd-centro"><p class="rd-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('car', CARTA_R);
};

R.cartas = function (c) {
  return cab(c) + FM.ex('cr', { formato: 'fala', rotulo: 'Card', regra: PRESA,
    lado: function (f, a, v) { return mesa(f, a, v && a >= 0 ? 1 : 0); },
    fim: 'Every card is open. Now give the teacher your report: one must, one might and one can’t.',
    itens: CARTAS.map(function (x) { var g = GRAUS[x.grau]; return { pista: '<span class="ano">' + g[0] + ' · ' + g[1] + '</span>' + x.pista, resp: x.resp, depois: x.depois }; }) });
};

R.deduz = function (c) {
  return cab(c) + comPlaca(FM.ex('ded', VD_LIGA), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="rd-centro"><p class="rd-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'escala', rot: 'I · How Sure Are You?', t: 'Before the trailer: how sure are you?', p: 'Mark a number for each sentence and say why. The teacher marks theirs too.', rotulos: ['It can’t be true', 'It must be true'],
  itens: [
    { q: 'There is life on other planets.', ex: '7. There might be life out there.' },
    { q: 'My phone is listening to me.', ex: '9. It must be listening! I see ads for everything I say.' },
    { q: 'The best pizza in the world is in Brazil.', ex: '10. It must be São Paulo.' },
    { q: 'Someone in my family is a secret genius.', ex: '5. My cousin could be. Nobody knows.' },
    { q: 'Batman is a real person somewhere.', ex: '0. He can’t be real… or can he?' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: the Batman, after the third card.', p: 'Sit in the hot seat as the Batman. The teacher is Gordon and asks about the case: answer with must, might and can’t. Then swap.',
  quem: 'the Batman, after the third card',
  itens: [
    { q: 'Who do you think the Riddler is?', ex: 'He must be someone close to the victims.' },
    { q: 'Could it be a cop?', ex: 'It could be. Some cops in this city can’t be trusted.' },
    { q: 'What about Selina? Can we trust her?', ex: 'She might be useful, but she can’t be on our side.' },
    { q: 'Why does he write to you, and not to me?', ex: 'He must know who I am. Or he might want a game.' },
    { q: 'Where might he go next?', ex: 'He might go after the mayor’s friends. We have to be fast.' }
  ] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G14 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'cacaErro', titulo: 'Mistake hunter. Six lines from the case.',
  toque: 'People who speak Portuguese often say these. Tap the wrong word before you see the answer.',
  itens: [
    { f: 'It must [[to]] be the Riddler.', r: 'It must <b>be</b> the Riddler.', d: 'must + the clean verb: no to.' },
    { f: 'It [[mustn’t]] be Gordon: he was with me.', r: 'It <b>can’t</b> be Gordon: he was with me.', d: 'mustn’t means don’t do it. For “sure it isn’t”: can’t be.' },
    { f: 'It might [[is]] a trap.', r: 'It might <b>be</b> a trap.', d: 'After might: the clean verb be.' },
    { f: 'Who [[he]] could be?', r: 'Who <b>could he</b> be?', d: 'A question: the modal goes first.' },
    { f: 'It [[can]] be the mayor, but I’m not sure.', r: 'It <b>might</b> be the mayor, but I’m not sure.', d: 'For a maybe: might or could, not can.' },
    { f: 'We [[don’t can]] be sure.', r: 'We <b>can’t</b> be sure.', d: 'No do with a modal: can’t.' }
  ],
  nota: 'Pick the level by the clue: <b>must be</b> (sure it is), <b>might / could be</b> (maybe), <b>can’t be</b> (sure it isn’t). Always the clean verb after: no to, no -s. <b>mustn’t</b> is for rules, not clues.',
  uso: { p: 'Your turn. A mystery: someone knocks on your door at night. Say who it must be, who it might be, and who it can’t be.', molde: ['It must be …', 'It might be …', 'It can’t be …'], ex: 'It must be my neighbor. It might be a delivery. It can’t be my mother: she’s in Spain.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_caca', GX_EXPLICA); };
