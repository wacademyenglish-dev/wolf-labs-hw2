/* ============================================================
   ICE AGE: BOILING POINT · THE ICE BRIDGE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A1 · it's hot / it's cold; I am cold / hungry (não "have");
   too + adjetivo (um problema); too + adjetivo + to + verbo; very para
   o que é bom.
   Erros: too much hot, Is hot today, I have cold / I'm with cold, too
   thin for walk, very big to go (é too), cold too (ordem), too good
   (é very), sem be (The lava too hot).
   Catálogo WOLFLIX Live (07/10): família ANIMAÇÃO, modo SOBREVIVÊNCIA.
   A tela forte: o termômetro e a ponte de gelo sobre a lava; cada
   frase certa esfria um grau e congela um bloco da ponte.
   ⚠ Teaser: só imagens e gritos (conferido em 26/09); só minutagem e
   paráfrase. Sem retrato: o rebanho são nomes.
   O AQUECIMENTO (aquece.js): a mentira. O FECHAMENTO (final.js): a
   cadeira quente, o Sid no Mundo Perdido.
   O VÍDEO: 3fjmjX0QOIg (teaser oficial, Disney, 1:08, idade 0, embed
   sim). MINUTAGEM ESTIMADA pelas imagens descritas.
   A CARA: azul de geleira, laranja de lava como alerta; Lilita One. A
   antiga era o set de filmagem.
   Fila: FILA-LIVE-386.md · 268.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. II: adivinhar quem é (pistas uma a uma) antes; escolher a resposta
   com ▶ nos momentos do teaser; depois, a régua "bom para o Manny?". IV: separar
   as frases em very (coisa boa) e too (problema); a placa da regra aparece
   quando tudo está certo. V: a ponte com SEIS blocos, True or Lie: cada
   resposta certa congela um bloco. VI (era EXTRA, agora essencial): a
   resposta do Sid e quatro cartas para virar.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'gelo', rot: 'I · Warm-up and Two Truths and a Lie', t: 'Before the teaser: hot and cold, then a world of ice.', p: 'Answer three questions about your life. Then find the lie about the animals.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'II · The Teaser', t: 'Ice Age: Boiling Point, 2027. The official teaser.', p: 'Guess first. Watch the teaser. Then a short task: tap ▶ to see a part again.' },
  { k: 'letra', est: 'l', min: 7, img: 'lava', rot: 'III · Scene by Scene', t: 'Five moments of the teaser. Tap one, watch, then talk.', p: 'Each frame is a moment in the video.' },
  { k: 'regra', est: 'f', min: 6, img: 'gelo', rot: 'IV · Too Hot', t: 'Too means a problem. I am cold, not I have cold.', p: 'Tap the sentence, then the box: a good thing, or a problem. Then read the rule.' },
  { k: 'ponte', est: 'o', min: 7, img: 'lava', rot: 'V · The Ice Bridge', t: 'The bridge is melting over the lava. Every right answer freezes one block.', p: 'True or lie? If it is a lie, say the right sentence out loud.' },
  { k: 'demais', est: 'o', min: 5, img: 'gelo', rot: 'VI · Too Hot, Too Cold', t: 'Sid is melting. Then four things in your life.', p: 'Choose your answer. Then flip a card and say a sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VII · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var FILME = 'Ice Age: Boiling Point', ANO = '2027';
var YT = '3fjmjX0QOIg', DUR = 68;

var ENCARTE = [
  ['The film', '<i>Ice Age: Boiling Point</i> is the sixth <i>Ice Age</i> film. It comes out in February 2027.'],
  ['The herd', 'The old friends are back: Manny the mammoth, Sid the sloth, and Diego the saber-toothed cat. Manny is big and slow, Sid is funny, and Diego is fast.'],
  ['The problem', 'Their world is ice and snow. But a volcano explodes, the ice breaks, and they fall into a lost world of lava and dinosaurs. It is too hot for a mammoth!']
];

var ANTES = [
  { q: 'Do you know the Ice Age films? Who is your favorite?', h: 'Yes. My favorite is … / No, I don’t.' },
  { q: 'A mammoth in a world of lava. Is it a good place for him?', h: 'No, it is too …' }
];
var DEPOIS = [
  { q: 'What explodes in the teaser? What happens to the ice?', h: 'A volcano explodes. The ice …' },
  { q: 'Is the new world hot or cold? Is it good for Manny?', h: 'It is too … for him.' }
];

var TRECHOS = [
  { k: 'The ice', ini: 0, fim: 15, ouvir: 'Is it hot or cold here?', sentido: 'The herd is in their world of ice and snow. Everything is quiet and white.', gram: '<b>It’s cold</b>. The snow is very deep.' },
  { k: 'The volcano', ini: 15, fim: 30, ouvir: 'What explodes?', sentido: 'A volcano explodes, and the ice starts to crack under their feet.', gram: 'The volcano is <b>too</b> close!' },
  { k: 'The fall', ini: 30, fim: 45, ouvir: 'Where do they fall?', sentido: 'They fall into a lost world of lava, under the ice.', gram: '<b>It’s</b> very <b>hot</b>. The lava is <b>too hot to</b> touch.' },
  { k: 'The jokes', ini: 45, fim: 58, ouvir: 'What happens to Sid?', sentido: 'Funny accidents: a bee, Sid and Diego, and big dinosaurs everywhere.', gram: 'The dinosaurs are <b>too big</b> to fight.' },
  { k: 'The title', ini: 58, fim: 68, ouvir: 'When is the film in theaters?', sentido: 'The title of the film and the date: February 2027.', gram: 'I <b>am</b> excited. I <b>am</b> not cold!' }
];

var TRAPS = [
  ['No much', 'The lava is too much hot.', 'The lava is <b>too hot</b>.', 'too + adjective'],
  ['I am cold', 'I have cold.', 'I <b>am</b> cold.', 'I am cold · I am hungry · I am hot'],
  ['Too … to + verb', 'The ice is too thin for walk on.', 'The ice is too thin <b>to walk</b> on.', 'too + adjective + to + verb'],
  ['Too is a problem', 'The cake is too good!', 'The cake is <b>very</b> good!', 'good thing: very · problem: too']
];

/* a ponte: o gesto forte */
var BLOCOS = [
  { quem: 'The lava', f: 'The lava is too much hot.', t: 0, c: 'The lava is <b>too hot</b>.' },
  { quem: 'The weather', f: 'It’s hot today.', t: 1 },
  { quem: 'Sid', f: 'Sid says: “I have cold.”', t: 0, c: 'He says: “I <b>am</b> cold.”' },
  { quem: 'The ice', f: 'The ice is too thin to walk on.', t: 1 },
  { quem: 'Manny', f: 'Manny is very big to go in the cave.', t: 0, c: 'Manny is <b>too</b> big to go in the cave.' },
  { quem: 'Diego', f: 'Diego says: “I am hungry.”', t: 1 }
];
var RECUSA = {
  much: 'Too + adjective, no much: too hot, too thin.',
  be: 'Use be: The lava is too hot.',
  it: 'Weather starts with it: It’s hot today.',
  tenho: 'In English you ARE cold / hungry: I am cold.',
  com: 'No with: I am cold. I am hungry.',
  for: 'Too + adjective + to + verb: too thin to walk.',
  very: 'Very = a lot. Too = more than OK, so there is a problem.',
  ordem: 'Too comes before the adjective: too cold.',
  bom: 'Too means a problem. For a good thing: very good.'
};

var DEMAIS = [
  { k: 'Your city', h: 'Your city in summer.', ex: 'It’s too hot in January. I can’t sleep.' },
  { k: 'Your coffee', h: 'Your coffee in the morning.', ex: 'It is too hot to drink at first.' },
  { k: 'Your shoes', h: 'Your old shoes.', ex: 'They are too small for me now.' },
  { k: 'Your bedroom', h: 'Your bedroom at night.', ex: 'It’s too cold in winter.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>It’s</b> hot · <b>I am</b> cold · <b>I am</b> hungry (not “have”)<br><b>too</b> + adjective = a problem<br><b>too</b> + adjective + <b>to</b> + verb: too thin <b>to walk</b><br><b>very</b> = a good thing';
/* II · antes: quem é? (pistas uma a uma) */
var VD_REV = { formato: 'revela', titulo: 'Before you watch: who is it? Tap Next clue.', mais: 'Next clue', botao: 'I know it! Show', pistas: ['It is very big.', 'It has two long tusks.', 'It lives in a world of ice and snow.', 'Now it is hot. Too hot!'], resposta: 'It is Manny the mammoth. His world is ice, and now the lava is too hot for him.' };
/* II · durante: escolher a resposta, com ▶ nos momentos do teaser (0:38 é o grito "Look out!") */
var VD_ESC = { formato: 'escolhe', titulo: 'While you watch: choose the answer. Tap ▶ to see that part again.', itens: [
  { p: 'The first world. How is it?', o: ['It’s cold.', 'It’s hot.'], c: 0, tm: '0:00', d: 'It’s cold. Everything is ice and snow.' },
  { p: 'A volcano explodes. What happens to the ice?', o: ['It cracks.', 'It grows.'], c: 0, tm: '0:15', d: 'The ice cracks.' },
  { p: 'They fall into a lost world. How is it there?', o: ['It’s hot.', 'It’s cold.'], c: 0, tm: '0:30', d: 'It’s very hot. The lava is too hot to touch.' },
  { p: 'Someone shouts: “Look ___!”', o: ['out', 'up'], c: 0, tm: '0:38', d: '“Look out!”' }
] };
/* II · depois: duas réguas */
var VD_R1 = { formato: 'regua', titulo: 'After the teaser: is the lost world good for Manny?', frase: 'The lost world is hot, with lava and dinosaurs.', esquerda: 'Too hot for him', direita: 'Good for him', depois: 'Say it: It is too … for Manny. / It is very … for Manny.' };
var VD_R2 = { formato: 'regua', titulo: 'And you? Right now, you are…', frase: 'Cold or hot? Tap the ruler and say it.', esquerda: 'I am cold', direita: 'I am hot', depois: 'Say it: I am … (not “I have”).' };
/* IV · very ou too: separar as frases */
var VD_SEP = { formato: 'separa', titulo: 'Very or too? Tap the sentence, then the box.', caixas: ['very · a good thing', 'too · a problem'], itens: [
  { t: 'The cake is ___ good!', c: 0 },
  { t: 'The lava is ___ hot.', c: 1 },
  { t: 'Sid is ___ funny.', c: 0 },
  { t: 'The ice is ___ thin to walk on.', c: 1 },
  { t: 'Manny is ___ big for the cave.', c: 1 },
  { t: 'Diego is ___ fast!', c: 0 }
] };
/* V · a ponte: True or Lie, uma frase por bloco */
var VD_PT = { formato: 'verdadeOuMentira', titulo: 'Freeze the bridge: true or lie? If it’s a lie, say the right sentence.', itens: BLOCOS };
/* VI · a resposta do Sid + quatro cartas */
var VD_SID = { formato: 'reacao', titulo: 'Sid is melting. Choose your answer, then say it to the teacher.', quem: 'Sid', fala: 'Sid: “It is too hot! Are you hot too?”', reacoes: [
  ['Yes, I am hot.', 'Yes! I am hot. It is too hot here.', 'Let’s find some ice!'],
  ['No, I am cold.', 'No, I am cold. My feet are cold.', 'Cold? In the lava world? You are funny!'],
  ['I am hungry!', 'I am not hot. I am hungry!', 'Me too! Is the cake very good?']
] };
var VD_CARTAS = { formato: 'cartas', titulo: 'Flip a card. Say a sentence with too or very.', fechada: 'Tap to flip', cartas: [
  ['Your city in summer', 'Too hot? Very hot? Say it. Example: It’s too hot in January.'],
  ['Your coffee', 'Say it. Example: It is too hot to drink at first.'],
  ['Your old shoes', 'Say it. Example: They are too small for me now.'],
  ['Your bedroom at night', 'Say it. Example: It’s too cold in winter.']
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, pt: { n: 0, esc: -1 } };

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
  return '<div class="ia-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a ponte de gelo sobre a lava, com o termômetro ao lado: cada frase certa congela um bloco e baixa a temperatura */
function ponte(ok, atual) {
  /* 23/10/2026 · o bloco congela quando a resposta do True or Lie está certa (em qualquer ordem); o próximo pisca */
  var feitos = 0; ok.forEach(function (x) { if (x) feitos++; });
  var N = BLOCOS.length, temp = 60 - feitos * 8;
  var blocos = BLOCOS.map(function (b, i) {
    return '<div class="ia-bloco' + (ok[i] ? ' gelo' : (i === atual ? ' vez' : '')) + '"><small>' + b.quem + '</small></div>';
  }).join('');
  return '<div class="ia-cena vd" role="img" aria-label="The ice bridge: ' + feitos + ' of ' + N + ' blocks frozen, ' + temp + ' degrees"><div class="ia-termo"><b>' + temp + '°</b><div class="ia-tubo"><i style="height:' + Math.max(6, temp / 60 * 100).toFixed(0) + '%"></i></div><small>' + (feitos >= N ? 'safe' : temp > 30 ? 'too hot' : 'cooler') + '</small></div>'
    + '<div class="ia-vao"><div class="ia-ponte">' + blocos + '</div><div class="ia-lava' + (feitos >= N ? ' calma' : '') + '"></div></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A1 · too + adjective · it’s hot, I’m cold</span><h1>Too Hot for a Mammoth</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">A volcano explodes under the ice, and the herd falls into a world of lava. The ice bridge is melting. Say what is too hot, too cold and too big, and keep the bridge frozen.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Cross the ice</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r ia-foto"><img src="' + img('capa') + '" alt="An animated ice valley at dusk with a volcano erupting far away"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="ia-encarte vd"><div class="ia-capinha"><img src="' + img('lava') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The Lost World</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="ia-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Do you like hot weather or cold weather? Why?</h2></div>' + mostra('enc', 'I like cold weather. Summer here is too hot for me!', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REV) + '<p class="fm-nota">Say: It is a … It is very …</p></div>'
    + '<div class="lado-l"><div class="ia-selo vd"><b>' + FILME + '</b><small>the official teaser · about one minute</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the teaser now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="ia-video"><div class="ia-vcol">' + iframe(YT, FILME + ' · teaser') + '<small class="ia-cred">' + FILME + ' · official teaser (Disney) · tap a time to see that part again</small></div><div class="lado-l">' + FM.ex('v1', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the teaser</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v2', VD_R1) + '</div><div class="lado-l">' + FM.ex('v3', VD_R2) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="ia-video"><div class="ia-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="ia-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="ia-sentido">' + x.sentido + '</span><span class="ia-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="ia-centro"><p class="ia-dica">Tap a frame to open that moment of the teaser.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  /* a placa da regra aparece quando as seis frases estão na caixa certa */
  var e = (S.fq && S.fq.rg) || { em: {} }, feitos = 0;
  VD_SEP.itens.forEach(function (x, i) { if (e.em && e.em[i] === x.c) feitos++; });
  var sep = FM.ex('rg', VD_SEP);
  return cab(c) + (feitos === VD_SEP.itens.length ? comPlaca(sep, PRESA) : sep);
};

R.ponte = function (c) {
  var e = (S.fq && S.fq.pt && S.fq.pt.r) || {}, N = BLOCOS.length, feitos = 0, atual = -1;
  var ok = BLOCOS.map(function (b, i) { var o = e[i] != null && (e[i] === 't') === !!b.t; if (o) feitos++; else if (atual < 0) atual = i; return o; });
  return cab(c) + ponte(ok, atual) + '<div class="ia-centro">' + FM.ex('pt', VD_PT)
    + (feitos === N ? '<p class="aprova">The bridge is ice again, and the herd can cross. Now you: one thing that is too hot for you, and one that is too cold.</p>' : '') + '</div>';
};

R.demais = function (c) {
  return cab(c) + '<div class="ia-centro">' + FM.ex('sd', VD_SID) + FM.ex('dm', VD_CARTAS) + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="ia-centro"><p class="ia-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'mentira', rot: 'I · Two Truths and a Lie', t: 'Before the teaser: hot, cold, and a lie.', p: 'The teacher reads three sentences. Two are true. Which one is the lie?',
  q: 'The teacher’s three sentences about hot and cold. One is a lie. Which one?',
  frases: ['I am never cold. I love winter.', 'My coffee is always too hot to drink.', 'I swim in the sea in July.'], mentira: 0,
  depois: 'Now you: say two true sentences and one lie about hot and cold. The teacher finds the lie.',
  ex: 'I am always hungry at night. My room is too small. I love very cold water.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: Sid in the lost world.', p: 'Sit in the hot seat as Sid in the world of lava. The teacher asks. Then swap.',
  quem: 'Sid the sloth, in the lost world',
  itens: [
    { q: 'Are you hot or cold here?', ex: 'I am hot! It’s too hot here!' },
    { q: 'Is the lava too hot to touch?', ex: 'Yes! It is too hot to touch.' },
    { q: 'What is too big here?', ex: 'The dinosaurs are too big!' },
    { q: 'Are you hungry? What do you want?', ex: 'I am very hungry. I want ice cream!' },
    { q: 'What is too dangerous for you here?', ex: 'Everything! The volcano is too close.' }
  ] };
/*FIM@@*/
