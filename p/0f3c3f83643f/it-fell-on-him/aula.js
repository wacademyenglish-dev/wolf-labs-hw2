/* ============================================================
   COYOTE VS. ACME · THE ACME CATALOG · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A1 · object pronouns: me, you, him, her, it, us, them —
   depois do verbo e depois de on / to / at.
   Erros: o pronome sujeito depois do verbo (falls on he, help I,
   loves they), o possessivo no lugar (on his, their), it para plural,
   him / it trocados (pessoa × coisa), listen we, believe to you.
   Catálogo WOLFLIX Live (07/10): família ANIMAÇÃO, modo SALA DE ROTEIRO.
   A tela forte: a página do catálogo ACME; cada pronome certo entrega
   um produto (carimbo DELIVERED) e a piada aparece embaixo.
   ⚠ Trailer: só minutagem e paráfrase.
   O AQUECIMENTO (aquece.js): a imagem, a caixa no deserto. O
   FECHAMENTO (final.js): um minuto.
   O VÍDEO: H-43VeYGiPM (trailer oficial, 1:47, idade 0, embed sim).
   SEM LEGENDA AGORA: minutagem estimada.
   A CARA: cânion em pôr do sol, laranja ACME, letra redonda (Fredoka).
   A antiga era o estúdio de legenda (formato leg de setembro).
   Fila: FILA-LIVE-386.md · 263.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a régua "quem ganha no tribunal?" antes; qual palavra você
   ouviu, com ▶ nas falas do trailer; depois, True or Lie. V: achar o pronome
   errado em seis frases. VI: o catálogo com SEIS produtos, cada um com a fala
   primeiro e o Check (a placa da regra no canto). VII (era EXTRA, agora
   essencial): contar a piada tocando cada pronome (Keyword Retell).
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'tribunal', rot: 'I · Warm-up and The ACME Box', t: 'Before the trailer: you and your things, then a box from ACME.', p: 'Answer three questions about your life. Then open the ACME box one thing at a time and say what happens.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Coyote vs. ACME, 2026. The official trailer.', p: 'Guess first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'caixa', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'tribunal', rot: 'V · Me, Him, Them', t: 'After the verb: me, you, him, her, it, us, them.', p: 'One word is wrong in each sentence. Say the right one. Then tap Check.' },
  { k: 'catalogo', est: 'o', min: 7, img: 'caixa', rot: 'VI · The ACME Catalog', t: 'Six products. Say the right word, and ACME delivers.', p: 'Read the gag. Say the sentence with the right word. Then tap Check.' },
  { k: 'gags', est: 'o', min: 5, img: 'capa', rot: 'VII · Make the Gag', t: 'Make your own gag. Use me, him, her, it, us and them.', p: 'Tell a gag. Tap each word when you use it.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · One Minute', t: 'One minute.', p: 'Talk.' }
];

var FILME = 'Coyote vs. ACME', ANO = '2026';
var YT = 'H-43VeYGiPM', DUR = 107;

var ENCARTE = [
  ['The film', '<i>Coyote vs. ACME</i> is a comedy with real actors and cartoons together. It is from 2026.'],
  ['The story', 'Wile E. Coyote buys products from ACME to catch the Road Runner. Every product goes wrong, and it hurts him. So he takes ACME to court.'],
  ['The people', 'Will Forte plays the coyote’s lawyer. John Cena plays the lawyer for ACME.']
];

var ANTES = [
  { q: 'Do you know the Road Runner cartoons? What happens in them?', h: 'Yes. The coyote … / No, I don’t.' },
  { q: 'A coyote and a big company in court. Who wins? Guess.', h: 'I think the … wins.' }
];
var DEPOIS = [
  { q: 'What falls on the coyote? Say it.', h: 'An anvil falls on him.' },
  { q: 'Who is the coyote’s lawyer? Do you like him?', h: 'His lawyer is … I like him / I don’t like him.' }
];

var TRECHOS = [
  { k: 'The chase', ini: 0, fim: 22, ouvir: 'Who runs? Who chases?', sentido: 'The coyote runs after the Road Runner in the desert, and he never catches him.', gram: 'The coyote chases <b>him</b>. He never catches <b>him</b>.' },
  { k: 'The products', ini: 22, fim: 45, ouvir: 'What does the coyote buy?', sentido: 'He uses ACME products, and every product goes wrong: things fall on him and hit him.', gram: 'The products hurt <b>him</b>. He hates <b>them</b>.' },
  { k: 'The lawyer', ini: 45, fim: 70, ouvir: 'Who helps the coyote?', sentido: 'A lawyer meets the coyote and decides to help him.', gram: 'The lawyer helps <b>him</b>. The coyote likes <b>him</b>.' },
  { k: 'The court', ini: 70, fim: 95, ouvir: 'Where are they now?', sentido: 'They are in court, against the big company and its lawyer.', gram: 'The judge looks at <b>them</b>. ACME doesn’t like <b>us</b>!' },
  { k: 'The last gag', ini: 95, fim: 107, ouvir: 'What happens at the end?', sentido: 'One more product goes wrong, and the coyote is in trouble again.', gram: 'It falls on <b>him</b> again!' }
];

var TRAPS = [
  ['After the verb', 'The anvil falls on he.', 'The anvil falls on <b>him</b>.', 'he → him · she → her · they → them'],
  ['Me, not I', 'Help I!', 'Help <b>me</b>!', 'I → me · we → us'],
  ['Things: it / them', 'He loves the skates. He loves it.', 'He loves <b>them</b>.', 'one thing: it · two or more: them'],
  ['Not his, not their', 'The judge asks their a question.', 'The judge asks <b>them</b> a question.', 'his car (his + thing) · ask him']
];

/* o catálogo: o gesto forte */
var PRODUTOS = [
  { nome: 'Anvil', ico: '⚓', gag: 'The anvil falls on ___ (the coyote).', r: 'The anvil falls on <b>him</b>.', piada: 'It falls on him. Ouch!', depois: 'Does your cat jump on you?' },
  { nome: 'Rocket skates', ico: '🛼', gag: 'The coyote buys rocket skates. He loves ___.', r: 'He loves <b>them</b>.', piada: 'He loves them… for three seconds.', depois: 'What do you love in your house?' },
  { nome: 'Bird seed', ico: '🌾', gag: 'The coyote puts bird seed on the road. The Road Runner eats ___.', r: 'The Road Runner eats <b>it</b>.', piada: 'He eats it, and he runs. Meep meep!', depois: 'What do you eat every morning?' },
  { nome: 'Spring shoes', ico: '👟', gag: 'The coyote jumps too high. He shouts: “Help ___!”', r: 'Help <b>me</b>!', piada: 'Nobody helps him.', depois: 'Who helps you when you have a problem?' },
  { nome: 'Portable hole', ico: '🕳️', gag: 'The lawyer and the coyote: “ACME doesn’t listen to ___.”', r: 'ACME doesn’t listen to <b>us</b>.', piada: 'So they go to court.', depois: 'Who doesn’t listen to you?' },
  { nome: 'Lawyer’s badge', ico: '⚖️', gag: 'The lawyer says to the coyote: “I believe ___.”', r: 'I believe <b>you</b>.', piada: 'ACME is in trouble now!', depois: 'The catalog is full. Who do you always believe?' }
];
var RECUSA = {
  sujeito: 'After the verb or after on / to / at: me, you, him, her, it, us, them.',
  posse: 'His, my, their go before a thing (his car). After the verb: him, me, them.',
  plural: 'Two or more things: them.',
  pessoa: 'The Road Runner is a he: him.',
  coisa: 'A thing: it.',
  eu: 'After the verb: me (not I), us (not we).',
  to: 'Believe someone: no to. I believe you.'
};

var GAGS = [
  { k: 'The rock', h: 'the rock · miss · the coyote', ex: 'The rock misses him.' },
  { k: 'The dynamite', h: 'the coyote · light · the dynamite', ex: 'He lights it… and BOOM.' },
  { k: 'The cliff', h: 'the coyote · look at · the Road Runner and his friend', ex: 'He looks at them.' },
  { k: 'The rocket', h: 'the rocket · take · the coyote and me', ex: 'The rocket takes us to the moon!' },
  { k: 'The judge', h: 'the judge · call · the coyote’s lawyer (a woman)', ex: 'The judge calls her.' },
  { k: 'You', h: 'Your cartoon: who · do · what · to whom?', ex: 'Jerry hits Tom with a pan. Tom chases him.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>Before the verb</b>: I · you · he · she · it · we · they<br><b>After the verb</b>: me · you · him · her · it · us · them<br><b>After on / to / at / with</b>: the same words. It falls <b>on him</b>. Listen <b>to me</b>.<br>one thing = <b>it</b> · two or more = <b>them</b>';
/* III · antes: quem ganha no tribunal? */
var VD_REG = { formato: 'regua', titulo: 'Before you watch: a coyote and a big company go to court. Who wins?', frase: 'Tap the ruler. Then tell the teacher.', esquerda: 'ACME wins', direita: 'The coyote wins', depois: 'Say it: I think … wins. I like him. / I like them.' };
/* III · durante: qual palavra você ouviu? ▶ nas falas do trailer (legenda-dados.js; nada entre 0:33 e 0:49) */
var VD_SOM = { formato: 'som', titulo: 'While you watch: which word did you hear? Tap ▶ to hear it again.', itens: [
  { a: 'Made by the Acme ', par: ['Corporation', 'Company'], c: 0, b: '.', t: '0:29' },
  { a: 'It’s not your ', par: ['fault', 'fall'], c: 0, b: '.', t: '0:31' },
  { a: 'You’ve been settling Acme ', par: ['cases', 'cakes'], c: 0, b: ' for years.', t: '0:52' },
  { a: 'I could probably get you 250 ', par: ['bucks', 'books'], c: 0, b: ' for that.', t: '0:55' },
  { a: 'We really have ', par: ['nothing', 'something'], c: 0, b: '.', t: '1:08' }
] };
/* III · depois: True or Lie, sem ▶ (o vídeo já passou) */
var VD_VL = { formato: 'verdadeOuMentira', titulo: 'After the trailer: true or lie? If it’s a lie, say the truth.', itens: [
  { f: 'A voice says it is not your fault.', t: 1 },
  { f: 'The case is Coyote versus the Road Runner.', t: 0, c: 'It is Coyote versus Acme.' },
  { f: 'A voice says the coyote is careful.', t: 0, c: 'It says: “He is reckless.”' },
  { f: 'A voice says: “We really have nothing.”', t: 1 },
  { f: 'At the end, ACME says it condones the storylines.', t: 0, c: 'It says: “We do not condone any of the storylines.”' }
] };
/* V · achar o pronome errado */
var VD_ERRO = { formato: 'erro', titulo: 'One word is wrong in each sentence. Say the right one.', itens: [
  { f: 'The anvil falls on <u>he</u>.', r: 'him' },
  { f: 'The coyote jumps too high. Help <u>I</u>!', r: 'me' },
  { f: 'The coyote buys skates. He loves <u>it</u>.', r: 'them' },
  { f: 'The lawyer is nice. The coyote likes <u>she</u>.', r: 'her' },
  { f: 'ACME doesn’t listen to <u>we</u>.', r: 'us' },
  { f: 'The bird seed is on the road. The Road Runner eats <u>him</u>.', r: 'it' }
] };
/* VII · contar a piada, tocando cada pronome quando usar */
var VD_USA = { formato: 'usa', titulo: 'Tell a gag about the coyote and a new ACME product. Tap each word when you use it.', palavras: ['me', 'him', 'her', 'it', 'us', 'them'], fim: 'All six words. ACME is in trouble!' };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, ct: { n: 0, esc: -1 } };

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
  return '<div class="co-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a página do catálogo ACME: oito produtos; o pedido da vez pisca de leve; o entregue ganha o carimbo e a piada */
function catalogo(feitos, atual, nova) {
  return '<div class="co-cat vd" role="img" aria-label="The ACME catalog: ' + feitos + ' of 6 products delivered"><div class="co-cat-topo"><b>ACME</b><span>Catalog · page 1</span></div><div class="co-itens">' + PRODUTOS.map(function (p, i) {
    var cls = i < feitos ? (nova && i === feitos - 1 ? ' ok novo' : ' ok') : (i === atual ? ' vez' : '');
    return '<div class="co-item' + cls + '"><i>' + p.ico + '</i><b>' + p.nome + '</b>' + (i < feitos ? '<small>' + p.piada + '</small><span class="co-entregue">Delivered</span>' : '<small>No. ' + (i + 1) + '</small>') + '</div>';
  }).join('') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A1 · object pronouns: me, him, her, it, us, them</span><h1>It Fell On Him</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">Every ACME product goes wrong, and it always hurts the coyote. Now he takes ACME to court. Open the catalog: say the right little word, and ACME delivers.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the catalog</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r co-foto"><img src="' + img('capa') + '" alt="A cartoon desert canyon at dusk with an anvil on a cliff"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="co-encarte vd"><div class="co-capinha"><img src="' + img('tribunal') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>In court</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="co-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Is there a bad product in your house? What do you do with it?</h2></div>' + mostra('enc', 'My phone is bad. I take it back to the shop.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REG) + '</div>'
    + '<div class="lado-l"><div class="co-selo vd"><b>' + FILME + '</b><small>the official trailer, 2026 · about two minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="co-video"><div class="co-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="co-cred">' + FILME + ' · official trailer · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="co-centro">' + FM.ex('v2', VD_VL) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="co-video"><div class="co-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="co-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="co-sentido">' + x.sentido + '</span><span class="co-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="co-centro"><p class="co-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('er', VD_ERRO);
};

R.catalogo = function (c) {
  return cab(c) + '<div class="fm-lado2">' + FM.ex('ct', { formato: 'fala', rotulo: 'Product', regra: PRESA, diga: 'Say the sentence out loud first',
    lado: function (f, a, v) { return catalogo(f, a, v ? 1 : 0); },
    fim: 'Six products delivered, six gags. Tell the teacher your favorite one, with him, it or them.',
    itens: PRODUTOS.map(function (x) { return { pista: '<span class="ano">' + x.nome + '</span>' + x.gag, resp: x.r, depois: x.depois }; }) }) + '</div>';
};

R.gags = function (c) {
  return cab(c) + comPlaca(FM.ex('us', VD_USA) + '<p class="fm-nota">Start like this: The coyote buys a new product. It falls on him… He hates it… The Road Runner looks at him…</p>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="co-centro"><p class="co-dica">One minute.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'imagem', img: 'caixa', alt: 'A big wooden crate in the cartoon desert, rocket skates and a magnet on the sand', rotulo: 'The box', rot: 'I · The Box', t: 'Before the trailer: a box in the desert.', p: 'One question at a time. The student answers; then the teacher answers too.',
  itens: [
    { q: 'Look at the box. What is in it? Who is it for?', ex: 'Rocket skates. It is for the coyote.' },
    { q: 'You get a big box today. Who sends it to you?', ex: 'My mother sends it to me.' },
    { q: 'What do you buy online? Do you like it?', ex: 'I buy books online. I love them.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'minuto', rot: 'VIII · One Minute', t: 'One minute: talk about it.', p: 'Pick a topic. Talk for one minute with me, him, her, it, us, them. Then the teacher.',
  temas: [
    { t: 'A cartoon you love', ajuda: 'I love… The cat chases him… I watch it…' },
    { t: 'Your favorite thing at home', ajuda: 'My favorite thing is… I use it every day… It is from my mom…' },
    { t: 'A person you call every day', ajuda: 'I call her… She helps me… I love her…' }
  ],
  palavras: ['me', 'him', 'her', 'it', 'us', 'them'] };
/*FIM@@*/
