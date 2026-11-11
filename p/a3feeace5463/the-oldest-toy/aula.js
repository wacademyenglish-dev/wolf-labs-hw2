/* ============================================================
   TOY STORY 5 · THE THRIFT SHELF · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · superlativos: the + -est (the oldest), y → -iest (the
   funniest, the shiniest), the most + adjetivo longo (the most useful),
   irregulares (the best, the worst), in + lugar (in the box), of +
   período (of my life).
   Erros: the most old, the older (comparativo), the shinyest, the
   nervousest, is most nervous (sem the), the more modern, the most
   modernest, the funnyest, of the house (é in), the usefulest, the
   goodest, the most good, the baddest, the most bad.
   Catálogo WOLFLIX Live (07/10): família ANIMAÇÃO, modo CASTING.
   A tela forte: a prateleira do brechó. Oito brinquedos esquecidos em
   duas tábuas; cada frase certa pendura no brinquedo uma etiqueta
   escrita à mão: the oldest, the shiniest, the most useful…
   O AQUECIMENTO (aquece.js): a imagem. O FECHAMENTO: escrita, os
   prêmios da sua caixa de brinquedos.
   O VÍDEO: c51ND9Hdbw0 (trailer oficial Pixar, 2:24, idade 0, embed
   sim). Tempos da legenda (24/09): 0:20, 0:31, 0:58, 1:32, 1:57; cada
   momento contado com palavras nossas.
   A CARA: quarto à noite, amarelo do Woody, azul do papel de parede de
   nuvens; Fredoka + Atkinson Hyperlegible + Gochi Hand nas etiquetas.
   A antiga era a première.
   Fila: FILA-LIVE-386.md · 284.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a régua "brinquedo velho ou tablet?" antes; achar a palavra
   errada com ▶ nas falas do trailer; depois, ligar a fala ao que ela quer
   dizer. V: separar as palavras nas três caixas (the -est / the most /
   especial). VI: a prateleira com SEIS brinquedos, cada um com a etiqueta
   escolhida pelo sentido. VII (era EXTRA, agora essencial): a roleta das
   perguntas, responder com um superlativo.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'brecho', rot: 'I · Warm-up and The Toy Box', t: 'Before the trailer: your oldest things, then thirty years of toys.', p: 'Answer three questions about your life. Then open the toy box one thing at a time and compare them.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Toy Story 5. The official trailer.', p: 'Say where you stand first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'quarto', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'brecho', rot: 'V · Find the Rule', t: 'Four toys on the shelf. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'brecho', rot: 'VI · The Oldest, the Best', t: 'Which tag does the word take? Sort the words.', p: 'Tap a word, then tap its box. Then read the rule.' },
  { k: 'prateleira', est: 'o', min: 7, img: 'brecho', rot: 'VII · The Thrift Shelf', t: 'Six forgotten toys. Pick the right tag for each one.', p: 'Read the clue. Tap the tag. Then say the whole sentence.' },
  { k: 'premio', est: 'o', min: 7, img: 'quarto', rot: 'VIII · The Best and the Worst', t: 'Spin the wheel: the best and the worst of your life.', p: 'Answer with a superlative. Then spin again.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · Your Toy Box Awards', t: 'Give three awards to the things and people in your life.', p: 'Three superlatives. It goes to your My notes.' }
];

var FILME = 'Toy Story 5', ANO = '2026';
var YT = 'c51ND9Hdbw0', DUR = 144;

var ENCARTE = [
  ['The films', '<i>Toy Story</i> (Pixar, 1995) was the first film made all with computers. The toys are alive, but only when people don’t look.'],
  ['The toys', 'Woody, the cowboy, and Buzz, the space ranger, now live with Bonnie, a little girl.'],
  ['The new toy', 'In 2026 a tablet arrives. She talks and does everything. The old toys feel forgotten.']
];

var ANTES = [
  { q: 'What was your favorite toy as a kid?', h: 'My favorite toy was …' },
  { q: 'Do kids today play more with toys or with tablets?', h: 'I think they play more with …' }
];
var DEPOIS = [
  { q: 'Who is the new “toy” in Bonnie’s room?', h: 'It is a tablet called …' },
  { q: 'Why are the old toys worried?', h: 'Because Bonnie …' }
];

var TRECHOS = [
  { k: 'Hello, Lilypad', ini: 18, fim: 30, ouvir: 'Who says hello?', sentido: 'A happy tablet introduces herself to the room. The toys are shocked, and Rex thinks it’s the end of the world.', gram: 'Lilypad is <b>the newest</b> thing in the room.' },
  { k: 'Screen time', ini: 28, fim: 45, ouvir: 'What do the toys say to the tablet?', sentido: 'Screen time is over, and the toys try to talk to the device. She is always listening.', gram: 'She is <b>the most modern</b> toy in the house.' },
  { k: 'Lost toys', ini: 56, fim: 75, ouvir: 'What is the problem in many houses?', sentido: 'Every day there are more forgotten toys. Technology is everywhere, and Jessie is losing Bonnie.', gram: 'It is <b>the biggest</b> problem for toys.' },
  { k: 'Old man toy', ini: 88, fim: 100, ouvir: 'What does the new toy think about Woody?', sentido: 'Someone thinks Woody is an old man toy, because he has no hair under his hat.', gram: 'Woody is <b>the oldest</b> toy in the box.' },
  { k: 'The mission', ini: 115, fim: 128, ouvir: 'What is the toys’ mission?', sentido: 'Woody remembers the most important thing: their job is to make a child happy, and Bonnie still needs them.', gram: 'It is <b>the most important</b> job in the world.' }
];

var TRAPS = [
  ['Short: the + -est', 'Woody is the most old toy.', 'Woody is <b>the oldest</b> toy.', 'old → the oldest · big → the biggest'],
  ['Long: the most', 'Forky is the usefulest thing.', 'Forky is <b>the most useful</b> thing.', 'useful, modern, nervous → the most'],
  ['Irregular', 'Bonnie is the goodest kid.', 'Bonnie is <b>the best</b> kid.', 'good → the best · bad → the worst'],
  ['Place: in', 'the funniest toy of the house', 'the funniest toy <b>in</b> the house', 'in the box, in the world · of my life']
];

/* a prateleira: o gesto forte */
var BRINQUEDOS = [
  { nome: 'the cowboy hat', ico: 'hat', etiqueta: 'the oldest' },
  { nome: 'the space helmet', ico: 'helmet', etiqueta: 'the shiniest' },
  { nome: 'the dinosaur', ico: 'dino', etiqueta: 'the most nervous' },
  { nome: 'the tablet', ico: 'tablet', etiqueta: 'the most modern' },
  { nome: 'the spork', ico: 'spork', etiqueta: 'the most useful' },
  { nome: 'the toy box', ico: 'box', etiqueta: 'the best' }
];
var RECUSA = {
  most: 'Short adjectives: the + -est. the oldest (not the most old).',
  comp: 'One of many, the top: the + -est / the most. Not the comparative.',
  y: 'Adjective ending in y: y → -iest. the shiniest, the funniest.',
  the: 'Superlatives need the: the most nervous.',
  longa: 'Long adjectives: the most. the most nervous, the most useful.',
  dupla: 'Only one: the most modern (not the most modernest).',
  of: 'A place: in. in the house, in the kitchen.',
  irreg: 'Good is irregular: the best.',
  irreg2: 'Bad is irregular: the worst.'
};

var PREMIOS = [
  { k: 'The best', h: 'What is the best restaurant in your city?', ex: 'The best restaurant is a small pizza place near my house.' },
  { k: 'The worst', h: 'What was the worst trip of your life?', ex: 'The worst trip was to the beach. It rained every day.' },
  { k: 'The oldest', h: 'What is the oldest thing you have?', ex: 'The oldest thing I have is my grandfather’s watch.' },
  { k: 'The funniest', h: 'Who is the funniest person in your family?', ex: 'My uncle. He is the funniest man in the world.' },
  { k: 'The most useful', h: 'What is the most useful app on your phone?', ex: 'The most useful app is the map.' },
  { k: 'The happiest', h: 'What was the happiest day of your life?', ex: 'The happiest day was my graduation.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>the oldest</b> · <b>the funniest</b> (y → -iest)<br><b>the most</b> useful · <b>the most</b> modern<br><b>the best</b> · <b>the worst</b><br><b>in</b> the box · <b>of</b> my life';
/* III · antes: a régua */
var VD_REG = { formato: 'regua', titulo: 'Before you watch: where do you stand?', frase: 'Old toys are the best toys. Tablets are boring.', esquerda: 'Disagree', direita: 'Agree', depois: 'Move the pin. Then say why: I think old toys are … because …' };
/* III · durante: uma palavra está errada, cada uma no tempo do trailer (legenda-dados.js) */
var VD_ERR = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: 'Is it as <u>good</u> out there for toys as they say?', r: 'bad', t: '0:54' },
  { f: 'We’re finding more <u>new</u> toys each day.', r: 'abandoned', t: '0:57' },
  { f: 'I’m <u>finding</u> Bonnie to this device.', r: 'losing', t: '1:11' },
  { f: 'Some sort of <u>young</u> man toy?', r: 'old', t: '1:33' },
  { f: 'The mission on this planet is to make a child <u>sad</u>.', r: 'happy', t: '1:57' }
] };
/* III · depois: ligar a fala ao que ela quer dizer */
var VD_LIGA = { formato: 'liga', titulo: 'After the trailer: match the line with what it means.', pares: [
  ['“We’re finding more abandoned toys each day.”', 'More and more toys are forgotten.'],
  ['“Toys are for play, but tech is for everything.”', 'A tablet can do many more things.'],
  ['“Some sort of old man toy?”', 'Someone thinks Woody is very old.'],
  ['“Bonnie still needs us.”', 'The toys still have a job to do.'],
  ['“Screen time’s over now.”', 'Time to stop using the tablet.']
] };
/* V · separar as palavras nas três caixas */
var SEP = { formato: 'separa', titulo: 'Which tag does the word take? Tap a word, then tap its box.', caixas: ['the … -est', 'the most …', 'special'], itens: [
  { t: 'old', c: 0 }, { t: 'funny', c: 0 }, { t: 'useful', c: 1 }, { t: 'modern', c: 1 }, { t: 'good', c: 2 }, { t: 'bad', c: 2 }
] };
/* VI · a etiqueta pelo sentido; depois a frase inteira em voz alta */
var ESC_TAG = { formato: 'escolhe', titulo: 'Which tag fits the toy? Tap it. Then say the whole sentence.', itens: [
  { p: 'The cowboy hat is from 1995.', o: ['the oldest', 'the newest', 'the best'], c: 0, d: 'The cowboy hat is <b>the oldest</b> toy in the box.' },
  { p: 'The space helmet shines like a mirror.', o: ['the shiniest', 'the heaviest', 'the worst'], c: 0, d: 'The space helmet is <b>the shiniest</b> thing on the shelf.' },
  { p: 'The dinosaur is afraid of everything.', o: ['the funniest', 'the most nervous', 'the oldest'], c: 1, d: 'The dinosaur is <b>the most nervous</b> toy in the house.' },
  { p: 'The tablet is from 2026. It does everything.', o: ['the oldest', 'the most modern', 'the worst'], c: 1, d: 'The tablet is <b>the most modern</b> thing in Bonnie’s room.' },
  { p: 'The spork is a spoon and a fork in one.', o: ['the most useful', 'the funniest', 'the oldest'], c: 0, d: 'The spork is <b>the most useful</b> thing in the kitchen.' },
  { p: 'Bonnie loves every toy. She never forgets one.', o: ['the worst', 'the best', 'the oldest'], c: 1, d: 'Bonnie is <b>the best</b> kid in the world.' }
] };
/* VII · a roleta */
var VD_RODA = { formato: 'sorteio', titulo: 'Spin the wheel. Answer with a superlative.', botao: 'Spin', opcoes: ['The best restaurant in your city', 'The worst trip of your life', 'The oldest thing you have', 'The funniest person in your family', 'The most useful app on your phone', 'The happiest day of your life'] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, pr: { n: 0, esc: -1 } };

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
  return '<div class="ty-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* os desenhos simples de cada brinquedo, em SVG, com as cores da casa */
var ICOS = {
  hat: '<path d="M8 30 Q30 22 52 30 Q44 34 30 34 Q16 34 8 30Z" class="a"/><path d="M18 29 Q20 12 30 12 Q40 12 42 29Z" class="a"/><path d="M19 25 L41 25" class="b"/>',
  helmet: '<circle cx="30" cy="24" r="16" class="c"/><path d="M18 24 A12 12 0 0 1 42 24 L42 28 L18 28Z" class="d"/><rect x="14" y="36" width="32" height="6" rx="3" class="c"/>',
  dino: '<path d="M10 40 Q12 22 26 22 L34 14 Q44 10 48 18 Q46 24 38 24 L38 40Z" class="e"/><circle cx="42" cy="17" r="1.8" class="f"/><path d="M14 40 L14 46 M30 40 L30 46" class="g"/>',
  tablet: '<rect x="14" y="8" width="32" height="38" rx="5" class="f"/><rect x="18" y="12" width="24" height="28" rx="2" class="h"/><circle cx="30" cy="43" r="1.6" class="c"/>',
  pig: '<ellipse cx="30" cy="30" rx="18" ry="13" class="i"/><circle cx="46" cy="28" r="5" class="i"/><circle cx="25" cy="26" r="1.8" class="f"/><rect x="26" y="17" width="8" height="2" rx="1" class="f"/><path d="M18 42 L18 47 M40 42 L40 47" class="g"/>',
  spork: '<path d="M30 46 L30 26" class="j"/><path d="M22 10 Q22 26 30 26 Q38 26 38 10" class="j2"/><path d="M26 10 L26 18 M30 10 L30 18 M34 10 L34 18" class="j"/>',
  box: '<rect x="10" y="22" width="40" height="22" rx="2" class="k"/><path d="M8 22 L30 14 L52 22Z" class="k2"/><path d="M10 30 L50 30" class="b"/>',
  radio: '<rect x="10" y="18" width="40" height="26" rx="5" class="l"/><circle cx="22" cy="31" r="7" class="f"/><rect x="33" y="25" width="12" height="4" rx="2" class="c"/><rect x="33" y="33" width="12" height="4" rx="2" class="c"/><path d="M18 18 L30 8" class="g"/>'
};
/* a prateleira do brechó: duas tábuas, quatro brinquedos em cada; cada etiqueta certa pende de um barbante com a palavra escrita à mão; o da vez fica sob a lâmpada */
function prateleira() {
  /* 23/10/2026 · a etiqueta aparece no brinquedo cuja resposta está certa (em qualquer ordem) */
  var e = (S.fq && S.fq.pr && S.fq.pr.r) || {}, feitas = 0;
  var tabua = function (de, ate) {
    return '<div class="ty-tabua">' + BRINQUEDOS.slice(de, ate).map(function (b, j) {
      var i = de + j, ok = e[i] === ESC_TAG.itens[i].c; if (ok) feitas++;
      return '<div class="ty-item' + (ok ? ' ok' : '') + '"><svg viewBox="0 0 60 50" aria-hidden="true">' + ICOS[b.ico] + '</svg><small>' + b.nome + '</small>' + (ok ? '<span class="ty-tag">' + b.etiqueta + '</span>' : '') + '</div>';
    }).join('') + '</div>';
  };
  var a = tabua(0, 3), b2 = tabua(3, 6);
  return '<div class="ty-estante vd" role="img" aria-label="The thrift shelf: ' + feitas + ' of ' + BRINQUEDOS.length + ' tags">' + a + b2
    + '<p class="ty-legenda">' + (feitas >= BRINQUEDOS.length ? 'Every toy has a tag. Nobody is forgotten.' : 'The thrift shelf · ' + feitas + ' of ' + BRINQUEDOS.length + ' tags') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · the oldest · the most useful · the best</span><h1>The Oldest Toy in the Box</h1>'
    + '<p class="banda">' + FILME + ' · Pixar</p>'
    + '<p class="sub">A new tablet arrives in Bonnie’s room, and the old toys feel forgotten. Tonight you go to the thrift shop and give every forgotten toy a tag: the oldest, the shiniest, the most useful, the best.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the toy box</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r ty-foto"><img src="' + img('capa') + '" alt="A child’s bedroom at night with an open toy box and a glowing tablet on the bed"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="ty-encarte vd"><div class="ty-capinha"><img src="' + img('brecho') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The thrift shop</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="ty-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Do you still have a toy from when you were a kid? What is it?</h2></div>' + mostra('enc', 'Yes! A small teddy bear. It is the oldest thing in my room.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REG) + '</div>'
    + '<div class="lado-l"><div class="ty-selo vd"><b>' + FILME + '</b><small>the official trailer · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="ty-video"><div class="ty-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="ty-cred">' + FILME + ' · official trailer (Pixar) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_ERR) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="ty-centro">' + FM.ex('v2', VD_LIGA) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="ty-video"><div class="ty-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="ty-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="ty-sentido">' + x.sentido + '</span><span class="ty-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="ty-centro"><p class="ty-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq && S.fq.sp) || { em: {} }, ok = 0;
  SEP.itens.forEach(function (x, i) { if (e.em[i] === x.c) ok++; });
  return cab(c) + FM.ex('sp', SEP) + (ok === SEP.itens.length ? '<p class="fm-certa" style="width:min(980px,100%);margin:16px auto 0">Short words: <b>the oldest</b>, <b>the funniest</b> (y → -iest). Long words: <b>the most useful</b>, <b>the most modern</b>. Special: <b>the best</b>, <b>the worst</b>.</p>' : '');
};

R.prateleira = function (c) {
  var e = (S.fq && S.fq.pr && S.fq.pr.r) || {}, ok = 0;
  ESC_TAG.itens.forEach(function (x, i) { if (e[i] === x.c) ok++; });
  return cab(c) + '<div class="fm-lado2">' + prateleira() + comPlaca(FM.ex('pr', ESC_TAG), PRESA) + '</div>'
    + (ok === ESC_TAG.itens.length ? '<p class="fm-certa" style="width:min(1100px,100%);margin:16px auto 0">Every toy has a tag. Now you are the shop owner: sell three toys to the teacher with superlatives.</p>' : '');
};

R.premio = function (c) {
  return cab(c) + comPlaca(FM.ex('rd', VD_RODA), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'The best … in my life is …\nThe oldest thing I have is …\nThe funniest person I know is …', 'Your toy box awards',
    ['the best', 'the worst', 'the oldest', 'the funniest', 'the most useful', 'in my house'], ['Your toy box awards', 'Three awards for the things and people in your life. One with -est, one with the most, one with best or worst.'])
    + '<div class="lado-fim"><div class="grande vd"><span><u>the oldest</u> · <u>the funniest</u></span><span><u>the most</u> useful</span><span><u>the best</u> · <u>the worst</u></span><span>not <s>the most old</s>, not <s>the goodest</s></span></div>'
    + mostra('fim', 'The best thing in my house is my sofa. The oldest thing I have is my grandmother’s ring.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'imagem', img: 'quarto', alt: 'A child’s bedroom floor at night seen from a toy’s eyes, a big rug, a bed and a starry window', rotulo: 'The bedroom', rot: 'I · The Toy Box', t: 'Before the trailer: your toys.', p: 'One question at a time. The student answers; then the teacher answers too.',
  itens: [
    { q: 'You are a toy on this floor. What do you see?', ex: 'A big bed, a rug and the stars in the window.' },
    { q: 'What was the best toy you ever had?', ex: 'A red bike. It was the best present of my life.' },
    { q: 'Where are your old toys now?', ex: 'In a box at my mother’s house, I think.' }
  ] };
/*AQ@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four toys. Find the rule yourself.',
  exemplos: [
    'Woody is <b>the oldest</b> toy in the box.',
    'This robot is <b>the funniest</b> toy of my life.',
    'The yo-yo is <b>the most useful</b> toy on the shelf.',
    'Buzz is <b>the best</b> toy in the store.'
  ],
  pergunta: 'To say number one, we use …',
  opcoes: ['the + -est (short words), the most (long words), the best / the worst', 'more + word + than', 'the + -er (short words), the most + -est (long words)'], c: 0,
  nao: 'Not that one. Read the four lit parts again: is there a than? two endings together?',
  regra: '<b>the + -est</b> for short words (the oldest; y becomes -iest: the funniest). <b>the most</b> + a long word (the most useful). Odd ones: <b>the best</b>, <b>the worst</b>. Then <b>in</b> a place (in the box) or <b>of</b> a time (of my life).',
  uso: { p: 'Your turn. Choose three things from your home: the oldest, the most useful, the best.', molde: ['The oldest … in my house is …', 'The most useful … is …'], ex: 'The oldest thing in my house is a clock. The most useful thing is my phone. The best thing is my bed.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
