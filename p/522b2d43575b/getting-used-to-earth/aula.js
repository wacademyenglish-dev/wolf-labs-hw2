/* ============================================================
   SUPERGIRL · THE EARTH MANUAL · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · used to + verbo (um hábito do passado que acabou: she
   used to live under a red sun) × be used to + -ing / substantivo (já é
   normal: Krypto is used to flying) × get used to + -ing (ficando
   normal: she is getting used to eating Earth food); didn’t use to;
   Are you used to…?
   Erros: was used to + verbo para hábito antigo, use sem -d, sem be
   (Krypto used to flying = outra coisa), be / get used to + verbo base
   (used to eat), get used with, Do you used to…?, didn’t used to.
   Catálogo WOLFLIX Live (07/10): família HERÓI, modo CORREIO.
   A tela forte: o manual de sobrevivência na Terra, escrito por ela. Um
   caderno aberto: à esquerda o índice, à direita a página da vez, com um
   desenho simples e um selo do estado: USED TO (era assim em Krypton),
   USED TO IT (já é normal), GETTING USED TO (ainda ficando). Cada frase
   certa escreve uma página e põe a entrada no índice.
   O AQUECIMENTO (aquece.js): o ranking do que é mais difícil acostumar.
   O FECHAMENTO (final.js): a cadeira quente, o aluno é a Kara.
   O VÍDEO: s1-pfiVMKAs (trailer oficial DC, 2:56, idade 0, embed sim).
   Ação de herói, sem sangue. Falas conferidas na legenda (23/09),
   contadas com palavras nossas; a canção do trailer nunca é escrita.
   A CARA: noite azul-marinho, vermelho da capa, azul do uniforme; Syne
   no título, Instrument Sans no texto, Kalam nas páginas do caderno. A
   antiga era o episódio do passaporte das estrelas.
   Fila: FILA-LIVE-386.md · 311.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: antes, o cartão da reviravolta; durante, a palavra que você
   ouviu e o que ela diz, com ▶ nas falas do trailer (legenda-dados.js);
   depois, quatro cartas. V: ligar cada forma ao seu sentido (a regra aparece
   quando as cinco estão certas); VI: o caderno com seis páginas (cada página
   pede o carimbo certo pelo sentido, e o aluno diz a frase); VII (era
   EXTRA): o professor escolhe a conversa A ou B + tocar cada forma que usou.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'janela', rot: 'I · Warm-up and Kara’s Bag', t: 'Before the trailer: what you got used to, then a girl from a red sun.', p: 'Answer three questions about your life. Then open Kara’s bag one thing at a time and say what she used to do, and what she is getting used to.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Supergirl. The official trailer.', p: 'Read the card. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'cidade', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 5, img: 'krypto', rot: 'V · Three Shapes', t: 'One small phrase, three meanings.', p: 'Look at the three meanings. Tap the one in each sentence. Then say three of your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'janela', rot: 'VI · Used To, Used To It', t: 'Used to, used to it, getting used to it. What does each one mean?', p: 'Match each form to its meaning. When all five are right, the rule appears.' },
  { k: 'manual', est: 'o', min: 7, img: 'capa', rot: 'VII · The Earth Manual', t: 'Six pages of her notebook. Every right stamp writes one.', p: 'Read the clue and pick the stamp. Then say the line for her manual out loud.' },
  { k: 'novos', est: 'o', min: 7, img: 'cidade', rot: 'VIII · New for You', t: 'Something that was new for you once.', p: 'The teacher picks A or B. Talk about it, and tap each form when you use it.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var FILME = 'Supergirl', ANO = '2026';
var YT = 's1-pfiVMKAs', DUR = 176;

var ENCARTE = [
  ['The film', '<i>Supergirl</i> (2026), DC Studios, with Milly Alcock as Kara Zor-El, Superman’s cousin.'],
  ['Before', 'Kara grew up on a piece of Krypton that survived, under a red sun, with almost nobody. Her dog Krypto was her only friend.'],
  ['Now', 'She lives on Earth, under a yellow sun that makes her strong. Her cousin Clark keeps calling: he is worried she will never find her people here. She says she has no people.']
];

var ANTES = [
  { q: 'Have you ever moved to a new city or a new country? What was strange?', h: 'Yes, I moved to … The strange thing was …' },
  { q: 'Do you have a pet? How did it change your life?', h: 'Yes, I have … / No, but …' }
];
var DEPOIS = [
  { q: 'What is Kara not used to yet on Earth?', h: 'She isn’t used to … yet.' },
  { q: 'What did she use to have on Krypton that she doesn’t have now?', h: 'She used to have …' }
];

var TRECHOS = [
  { k: 'Touching base', ini: 1, fim: 13, ouvir: 'Why is Clark calling?', sentido: 'Clark calls to check on her. He is worried she won’t find her way here on Earth.', gram: 'She <b>isn’t used to</b> Clark’s calls yet.' },
  { k: 'No people', ini: 12, fim: 22, ouvir: 'What does Kara say about “her people”?', sentido: 'Clark is worried she won’t find her people. She answers: that’s the thing, she has no people.', gram: 'She <b>used to have</b> a family.' },
  { k: 'Lucky', ini: 38, fim: 52, ouvir: 'What did Kara think about her and Krypto?', sentido: 'She and Krypto at least had each other. She thought they were lucky. But luck, by definition, runs out.', gram: 'Krypto <b>is used to being</b> her only friend.' },
  { k: 'My head', ini: 94, fim: 102, ouvir: 'What is too much for her?', sentido: 'Somebody talks too much, and she asks them to stop: they are hurting her head.', gram: 'She <b>isn’t used to</b> noise.' },
  { k: 'No home', ini: 140, fim: 150, ouvir: 'What does she say to Krypto?', sentido: 'She tells her dog that there is no home without him.', gram: 'She <b>is getting used to</b> calling Earth home.' }
];

var TRAPS = [
  ['A past habit', 'She was used to live under a red sun.', 'She <b>used to live</b> under a red sun.', 'used to + verb: it was like that, not anymore'],
  ['Normal now: -ing', 'Krypto is used to fly with her.', 'Krypto is used to <b>flying</b> with her.', 'be used to + -ing / a noun'],
  ['Becoming normal', 'She is getting use to eat Earth food.', 'She is getting <b>used to eating</b> Earth food.', 'get used to + -ing'],
  ['The question', 'Do you used to living alone?', '<b>Are you used to</b> living alone?', 'Are you used to…? · Did you use to…?']
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>She used to live</b> under a red sun · a past habit, over<br><b>Krypto is used to flying</b> · normal now: be used to + -ing<br><b>She is getting used to eating</b> · becoming normal<br><b>She didn’t use to</b> have friends · <b>Are you used to</b> living alone?';
/* III · antes: o cartão da reviravolta */
var VD_TWIST = { formato: 'twist', titulo: 'Before you watch · a new planet', cartoes: [
  ['Where', 'You moved to a new country, alone.'], ['Who', 'Your only friend is your dog.']
], twist: 'The twist: your cousin keeps calling. He is worried you will never find your people. Say what is strange for you now.', botao: 'Reveal the twist' };
/* III · durante: a palavra que você ouviu e o que ela diz, cada um no minuto do trailer (legenda-dados.js) */
var VD_SOM = { formato: 'som', titulo: 'Which word did you hear?', itens: [
  { a: 'Worried you’re not gonna find your ', par: ['people', 'pebble'], c: 0, b: '.', t: '0:12' },
  { a: 'Krypto and I at least had each ', par: ['other', 'bother'], c: 0, b: '.', t: '0:39' },
  { a: 'There is no ', par: ['home', 'hum'], c: 0, b: ' without you, buddy.', t: '2:24' }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'What happens? Tap one.', itens: [
  { p: 'Why is Clark calling?', o: ['He is worried about her', 'He wants her pizza', 'He wants to visit'], c: 0, tm: '0:01', d: 'Yes: he is worried she won’t find her stride, or her people.' },
  { p: 'What does Kara say she has?', o: ['No people', 'Many friends', 'A big family'], c: 0, tm: '0:18', d: 'Yes: “No people.”' },
  { p: 'What did she think about her and Krypto?', o: ['They were lucky', 'They were late', 'They were hungry'], c: 0, tm: '0:43', d: 'Yes: “I thought we were lucky.”' }
] };
/* III · depois: quatro cartas */
var VD_CARTAS = { formato: 'cartas', titulo: 'After the trailer · open a card', fechada: 'Tap to open', cartas: [
  ['Now', 'What is Kara not used to yet on Earth?'], ['Before', 'What did she use to have on Krypton that she doesn’t have now?'],
  ['Krypto', 'What is Krypto used to doing with her?'], ['You', 'What was strange for you once, and is normal now?']
] };
/* V · ligar cada forma ao seu sentido; a regra aparece no fim */
var LIGA = { formato: 'liga', titulo: 'What does it mean? Match them.', ordemDireita: [3, 0, 4, 2, 1], pares: [
  ['she used to live', 'a habit in the past, not now'], ['Krypto is used to flying', 'it is normal for him now'], ['she is getting used to eating', 'it is slowly becoming normal'],
  ['she didn’t use to have friends', 'it was not a habit before'], ['Are you used to living alone?', 'is it normal for you?']
] };
/* VI · o caderno: seis páginas; cada página pede o carimbo certo pelo sentido */
var PAGINAS = [
  { tema: 'The red sun', doodle: 'sol', selo: 'used', ops: ['She used to live under a red sun.'] },
  { tema: 'The yellow sun', doodle: 'sol2', selo: 'not', ops: ['She isn’t used to the yellow sun yet.'] },
  { tema: 'Earth food', doodle: 'pizza', selo: 'getting', ops: ['She is getting used to eating Earth food.'] },
  { tema: 'Flying', doodle: 'osso', selo: 'normal', ops: ['Krypto is used to flying with her.'] },
  { tema: 'Friends', doodle: 'estrela', selo: 'used', ops: ['She didn’t use to have friends.'] },
  { tema: 'Alone', doodle: 'casa', selo: 'normal', ops: ['Are you used to living alone?'] }
];
var MN_OPS = ['It was like that, not anymore', 'It is normal now', 'It is becoming normal', 'It is still strange'];
var MN = { formato: 'escolhe', titulo: 'Which stamp goes on the page? Then say the line.', itens: [
  { p: 'Page 1 · the red sun · on Krypton · she · live under a red sun', o: MN_OPS, c: 0, d: 'Say it: She <b>used to live</b> under a red sun.' },
  { p: 'Page 2 · the yellow sun · she · strange for her', o: MN_OPS, c: 3, d: 'Say it: She <b>isn’t used to</b> the yellow sun yet.' },
  { p: 'Page 3 · Earth food · she · eat it now · every day is easier', o: MN_OPS, c: 2, d: 'Say it: She <b>is getting used to eating</b> Earth food.' },
  { p: 'Page 4 · Krypto · fly with her · normal for him', o: MN_OPS, c: 1, d: 'Say it: Krypto <b>is used to flying</b> with her.' },
  { p: 'Page 5 · on Krypton · she · have friends · no', o: MN_OPS, c: 0, d: 'Say it: She <b>didn’t use to</b> have friends.' },
  { p: 'Page 6 · you · live alone? · is it normal for you? · a question', o: MN_OPS, c: 1, d: 'Ask: <b>Are you used to</b> living alone?' }
] };
/* VII (era EXTRA) · o professor escolhe a conversa + tocar cada forma que usou */
var VG_AB = { formato: 'ab',
  a: { t: 'A new place', d: 'Talk about a time you moved or started something new. What did you have to get used to?', st: ['I had to get used to …', 'I’m still not used to …'] },
  b: { t: 'Your childhood', d: 'Talk about what you used to do every Sunday as a child, and what you don’t do now.', st: ['I used to …', 'I didn’t use to …'] } };
var VG_USA = { formato: 'usa', titulo: 'Tap each form when you use it.', palavras: ['used to + verb', 'be used to + -ing', 'get used to + -ing', 'didn’t use to …', 'Are you used to …?'], fim: 'All five. Now your own manual has a page!' };

/* o manual: o gesto forte */
var SELOS = { used: 'used to · on Krypton', normal: 'used to it', getting: 'getting used to it', not: 'not used to it yet' };
var DOODLES = {
  sol: '<circle cx="50" cy="50" r="22" class="dd-r"/>',
  sol2: '<circle cx="50" cy="50" r="18" class="dd-y"/><path d="M50 18v8M50 74v8M18 50h8M74 50h8M27 27l6 6M67 67l6 6M27 73l6-6M67 33l6-6" class="dd-l"/>',
  pizza: '<path d="M22 30 L78 30 L50 82 Z" class="dd-y"/><circle cx="42" cy="42" r="4" class="dd-r"/><circle cx="58" cy="46" r="4" class="dd-r"/><circle cx="50" cy="60" r="4" class="dd-r"/>',
  osso: '<path d="M30 44 a8 8 0 1 1 6-10 L64 34 a8 8 0 1 1 6 10 a8 8 0 1 1 -6 10 L36 54 a8 8 0 1 1 -6 -10 Z" class="dd-w"/>',
  gente: '<circle cx="36" cy="38" r="9" class="dd-w"/><circle cx="64" cy="38" r="9" class="dd-w"/><path d="M20 76 C22 56 50 56 50 76 M50 76 C50 56 78 56 80 76" class="dd-l"/>',
  onda: '<path d="M14 50 C22 30 30 70 38 50 S54 30 62 50 S78 70 86 50" class="dd-l"/><path d="M14 64 C22 48 30 80 38 64 S54 48 62 64 S78 80 86 64" class="dd-l"/>',
  casa: '<path d="M24 50 L50 26 L76 50 V78 H24 Z" class="dd-w"/><rect x="44" y="58" width="12" height="20" class="dd-r"/>',
  estrela: '<path d="M50 18 L58 42 L84 42 L63 57 L71 82 L50 66 L29 82 L37 57 L16 42 L42 42 Z" class="dd-y"/>'
};

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, sg: { n: 0, esc: -1 } };

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
  return '<div class="sg-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o caderno aberto: à esquerda o índice das páginas escritas, à direita a última página com o desenho e o selo */
function caderno(feitas, atual, nova) {
  var fim = feitas >= PAGINAS.length;
  var idx = PAGINAS.map(function (p, i) {
    var cls = i < feitas ? ' ok' : (i === atual ? ' vez' : '');
    return '<li class="sg-ix' + cls + '"><span>' + (i + 1) + '</span><b>' + (i < feitas || i === atual ? p.tema : '· · ·') + '</b><i class="s-' + p.selo + '"></i></li>';
  }).join('');
  var p = feitas ? PAGINAS[feitas - 1] : null;
  var direita = p ? '<div class="sg-pag' + (nova ? ' nova' : '') + '"><small>Page ' + feitas + ' · ' + p.tema + '</small><svg viewBox="0 0 100 100" aria-hidden="true">' + DOODLES[p.doodle] + '</svg><p>' + p.ops[0] + '</p><b class="sg-carimbo s-' + p.selo + '">' + SELOS[p.selo] + '</b></div>'
    : '<div class="sg-pag vazia"><small>How to live on Earth</small><p>by Kara Zor-El. Page one is still empty.</p></div>';
  return '<div class="sg-caderno vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The Earth manual: ' + feitas + ' of ' + PAGINAS.length + ' pages written">'
    + '<div class="sg-esq"><p class="sg-tit">How to live on Earth</p><ol>' + idx + '</ol></div><div class="sg-espiral" aria-hidden="true"></div><div class="sg-dir">' + direita + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · used to, be used to, get used to</span><h1>Getting Used to Earth</h1>'
    + '<p class="banda">' + FILME + ' · DC Studios</p>'
    + '<p class="sub">She used to live under a red sun. Now there is a yellow one, a dog called Krypto, a cousin who keeps calling, and a planet full of noise. Tonight you write her survival manual, one page at a time: what she used to do, what she is used to, what she is still getting used to.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the manual</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r sg-foto"><img src="' + img('capa') + '" alt="A lonely farmhouse in dark fields under a huge starry sky with one red star"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="sg-encarte vd"><div class="sg-capinha"><img src="' + img('janela') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>Krypto’s bed, at dawn</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="sg-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Kara says she has no people. What is the hardest thing to get used to in a new place?</h2></div>' + mostra('enc', 'Being alone. You used to have friends, and now you have to get used to eating alone.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vt', VD_TWIST) + '</div>'
    + '<div class="lado-l"><div class="sg-selo vd"><b>' + FILME + '</b><small>the official trailer · superhero action, no blood · almost three minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="sg-video"><div class="sg-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="sg-cred">' + FILME + ' · official trailer (DC Studios) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vs', VD_SOM) + FM.ex('ve', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vc', VD_CARTAS) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="sg-video"><div class="sg-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="sg-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="sg-sentido">' + x.sentido + '</span><span class="sg-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="sg-centro"><p class="sg-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).lig, ok = !!e && !!e.par;
  LIGA.pares.forEach(function (p, i) { if (!e || !e.par || e.par[i] !== i) ok = false; });
  return cab(c) + '<div class="sg-centro">' + FM.ex('lig', LIGA)
    + (ok ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Match all five. Then the rule appears.</p>') + '</div>';
};

R.manual = function (c) {
  var e = (S.fq || {}).mn, r = (e && e.r) || {}, feitas = 0;
  MN.itens.forEach(function (x, i) { if (r[i] === x.c) feitas++; });
  return cab(c) + comPlaca('<div class="fm-obj">' + caderno(feitas, -1, 0) + '</div>' + FM.ex('mn', MN)
    + '<p class="fm-nota" style="text-align:center">' + (feitas >= PAGINAS.length ? 'The manual is full. Now read Clark the last page in your own words: one used to, one used to it, one getting used to.' : 'Each right stamp writes a page of the manual.') + '</p>', PRESA);
};

R.novos = function (c) {
  return cab(c) + comPlaca(FM.ex('nab', VG_AB) + FM.ex('nus', VG_USA), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="sg-centro"><p class="sg-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'ranking', rot: 'I · Hard to Get Used To', t: 'Before the trailer: what is hardest to get used to?', p: 'Tap the things from the hardest to the easiest. Then explain the top and the bottom.',
  rotulo: 'Hard to get used to', q: 'What is the hardest to get used to? Put them in order.',
  itens: ['A new language', 'Living alone', 'A new job', 'A different time zone', 'Waking up early'],
  depois: 'What are you still getting used to?', ex: 'Number 1 is a new language. I’m still getting used to phrasal verbs!' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: Kara Zor-El, one month on Earth.', p: 'Sit in the hot seat as Kara. The teacher asks about Krypton and Earth. Answer with used to, be used to, get used to. Then swap.',
  quem: 'Kara Zor-El, one month on Earth',
  itens: [
    { q: 'What did you use to do on Krypton?', ex: 'I used to watch the red sun from my window.' },
    { q: 'Are you used to the yellow sun?', ex: 'Not yet. It still feels too strong.' },
    { q: 'What are you getting used to?', ex: 'I’m getting used to eating pizza. I love it.' },
    { q: 'Will you ever get used to people?', ex: 'Maybe. Krypto is used to them already.' },
    { q: 'What do you miss?', ex: 'The quiet. I used to hear nothing at night.' }
  ] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'Used to, used to it, getting used to it. Three meanings.',
  usos: [
    { t: 'USED TO + VERB', f: 'She used to live under a red sun.', d: 'A habit in the past. It is over now.', img: 'argo' },
    { t: 'BE USED TO + -ING', f: 'Krypto is used to flying.', d: 'It is normal for him now.', img: 'krypto' },
    { t: 'GET USED TO + -ING', f: 'She is getting used to eating Earth food.', d: 'It is becoming normal, little by little.', img: 'cidade' }
  ],
  pergunta: 'Which meaning is it?',
  itens: [
    { f: 'Back home, Kara used to fly over the city every night.', c: 0 },
    { f: 'Now she is used to the noise of the street.', c: 1 },
    { f: 'Every day it gets easier. She is getting used to wearing glasses.', c: 2 },
    { f: 'Krypto isn’t used to the cold yet. He still shivers.', c: 1 },
    { f: 'Kara didn’t use to hide her powers. Now she does.', c: 0 },
    { f: 'It was strange at first, but she is getting used to sleeping at night.', c: 2 }
  ],
  nota: 'Three shapes, three meanings. <b>used to</b> + verb: it was true, but not now. <b>be used to</b> + -ing or a noun: it is normal for you now. <b>get used to</b> + -ing: it is becoming normal. Only the first one takes a clean verb.',
  uso: { p: 'Your turn. One thing you used to do as a kid, one thing you are used to now, and one thing you are getting used to.', molde: ['I used to …', 'I’m used to …-ing', 'I’m getting used to …-ing'], ex: 'I used to hate coffee. I’m used to waking up early. I’m getting used to working from home.' },
  prof: 'Read the three meanings with the student, one by one. Then the student taps a meaning for each sentence. The meanings are the rule.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
