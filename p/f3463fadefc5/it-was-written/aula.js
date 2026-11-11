/* ============================================================
   DUNE: PART THREE · THE VISIONS · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · o futuro visto do passado: was to / was never to (o
   destino), was supposed to (o plano que falhou), would (a promessa
   contada), was going to, was about to, e a passiva da profecia (it was
   written that…).
   Erros: was to + passado (was to led), sem to (was lead), will no
   relato (promised he will), would + passado, sem be (Chani supposed
   to), suppose sem -d, were go to, they was, about sem to, It wrote /
   It was writing (a profecia é passiva), never fora do lugar (never was
   to), pergunta sem inversão.
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo SALA DE ROTEIRO.
   A tela forte: as visões na areia. Em cima, a crista da duna sob as
   duas luas, com oito sinais que a areia esconde; cada frase certa
   desenha um sinal (um círculo traçado na areia, azul dos olhos Fremen).
   Embaixo, o livro em duas colunas: o que era para ser (a frase) e o
   que foi (a linha da história). No fim, as oito visões estão abertas.
   O AQUECIMENTO (aquece.js): a escala, destino. O FECHAMENTO
   (final.js): a cadeira quente, o aluno é o Paul, imperador.
   O VÍDEO: NdvqHc56lE0 (trailer oficial Warner Bros., 2:50, idade 0,
   embed sim), CORTADO em 0:46 (depois vem uma luta de faca). Falas
   conferidas na legenda (25/09), contadas com palavras nossas. Nada do
   fim da Parte Três.
   A CARA: noite violeta do deserto, laranja da especiaria, azul Fremen;
   Unbounded no título, Alegreya no texto. A antiga era o livro do sietch
   no mapa.
   Fila: FILA-LIVE-386.md · 308.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: três cartas de conversa; verdadeiro ou mentira e a palavra
   errada, com ▶ nas falas do trailer (legenda-dados.js); duas opiniões de
   toque + uma régua; V: a carta da Chani -> a regra; VI: as visões na areia
   (ligar o que era para ser ao que foi; seis pares, um sinal abre a cada par
   certo); VII (era EXTRA): três amigos, a reação muda a conversa.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'lore', est: 'o', min: 8, img: 'palacio', rot: 'I · The Story', t: 'Before the trailer: a prophecy in the desert.', p: 'Tap the next stop on the map. Read the page out loud. Then answer the question.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Dune: Part Three. The official trailer.', p: 'Open a card. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'palacio', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 5, img: 'dunas', rot: 'V · Three Futures in the Past', t: 'One story, three kinds of future.', p: 'Look at the three kinds. Tap the kind of each sentence. Then say three of your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'sietch', rot: 'VI · It Was Written', t: 'A letter from Chani. Find the pattern.', p: 'Read the letter out loud. Tap the verbs of destiny, plans and promises. Then finish the rule.' },
  { k: 'visoes', est: 'o', min: 7, img: 'capa', rot: 'VII · The Visions', t: 'Six visions in the sand. What was to be, and what was.', p: 'Tap a plan on the left, then what happened on the right. Then say each pair out loud.' },
  { k: 'planos', est: 'o', min: 7, img: 'sietch', rot: 'VIII · Your Plans', t: 'Three friends talk about plans and promises. What do you say?', p: 'Read what your friend says. Pick how you answer. Then read the talk out loud.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var FILME = 'Dune: Part Three', ANO = '2026';
var YT = 'NdvqHc56lE0', DUR = 170;

var ENCARTE = [
  ['The film', '<i>Dune: Part Three</i> (2026), by Denis Villeneuve, with Timothée Chalamet as Paul and Zendaya as Chani, from the books by Frank Herbert.'],
  ['Before', 'Paul came to the desert planet Arrakis as a young duke. The Fremen, the desert people, believed he was the one their prophecy talked about. He joined them, and he loved Chani.'],
  ['Now', 'Years later, Paul is emperor of the galaxy, and his war has destroyed thousands of worlds. Chani says he promised he would never take power in his name. (We don’t tell how this film ends.)']
];

var ANTES = [
  { q: 'Have you seen Dune or Dune: Part Two? What do you remember?', h: 'Yes, I remember … / No, but …' },
  { q: 'When you were a child, what were you going to be?', h: 'I was going to be …' }
];
var DEPOIS = [
  { q: 'What did Paul promise Chani? Did he keep it?', h: 'He promised he would … but …' },
  { q: 'Was Paul’s story written, or did he choose it?', h: 'I think it was … because …' }
];

var TRECHOS = [
  { k: 'I trusted you', ini: 0, fim: 12, ouvir: 'How does Chani feel?', sentido: 'Chani is angry and hurt. She trusted him.', gram: 'She <b>was supposed to</b> trust him forever.' },
  { k: 'A promise', ini: 10, fim: 22, ouvir: 'What did Paul promise?', sentido: 'She reminds him: he promised he would never take power in his own name.', gram: 'He promised he <b>would</b> never take power.' },
  { k: 'Your home', ini: 15, fim: 28, ouvir: 'What did he make her believe?', sentido: 'He made her believe that the desert was his home, and that she was his home.', gram: 'The desert <b>was to be</b> his home.' },
  { k: 'What do you know?', ini: 26, fim: 38, ouvir: 'Who does Paul talk to?', sentido: 'Paul asks a strange man what he knows about him.', gram: 'Nobody <b>was ever to</b> know him.' },
  { k: 'Thousands of worlds', ini: 34, fim: 46, ouvir: 'What has Paul done?', sentido: 'The man says Paul has conquered the galaxy and destroyed thousands of worlds. What does Paul think about that? (We stop here.)', gram: 'It <b>was written that</b> he would win.' }
];

var TRAPS = [
  ['Destiny: was to', 'Paul was to led the Fremen.', 'Paul <b>was to lead</b> the Fremen.', 'was to / was never to + base verb'],
  ['The failed plan', 'Chani supposed to be his home.', 'Chani <b>was supposed to</b> be his home.', 'was / were supposed to + verb'],
  ['The promise, told', 'He promised he will never take power.', 'He promised he <b>would</b> never take power.', 'would, not will'],
  ['The prophecy', 'It wrote that he would come.', '<b>It was written</b> that he would come.', 'passive: it was written / foretold']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'He <b>was to lead</b> them · <b>was never to</b> see home<br>She <b>was supposed to</b> be his home · they <b>were going to</b><br>The war <b>was about to</b> begin<br>He promised he <b>would</b> never… · <b>It was written</b> that…';
/* III · antes: três cartas para conversar */
var VD_CARTAS = { formato: 'cartas', titulo: 'Before you watch · open a card', fechada: 'Tap to open', cartas: [
  ['Destiny', 'Are some things written before we are born? Which ones?'], ['A promise', 'What did you promise yourself you would do this year?'], ['The plan', 'When you were a child, what were you supposed to be?']
] };
/* III · durante: verdadeiro ou mentira e a palavra errada, cada um no minuto do trailer (legenda-dados.js) */
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'A woman says: “I trusted you!”', t: true, tm: '0:05' },
  { f: 'She says he promised he would always take power in his name.', t: false, tm: '0:12', c: 'It says: “you would never take power in your name.”' },
  { f: 'A voice says: “I’ve destroyed thousands of cities.”', t: false, tm: '0:42', c: 'It says: “thousands of worlds.”' }
] };
var VD_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: 'You promised me that you <u>will</u> never take power in your name.', r: 'would', t: '0:12' },
  { f: 'You convinced me that this was your <u>city</u>.', r: 'home', t: '0:17' },
  { f: 'I think you’re way beyond <u>reason</u>.', r: 'redemption', t: '0:45' }
] };
/* III · depois: duas opiniões de toque + uma régua */
var VD_ESC = { formato: 'escolhe', titulo: 'What do you think? Tap one, then say why.', itens: [
  { p: 'Was Paul’s story written, or did he choose it?', o: ['It was written', 'He chose it', 'Both'], c: -1, d: 'Say: I think it was … because …' },
  { p: 'Did Paul keep his promise to Chani?', o: ['Yes', 'No', 'Not really'], c: -1, d: 'Say: He promised he would … but …' }
] };
var VD_REG = { formato: 'regua', titulo: 'After the trailer', frase: 'Some things are written before we are born.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why: I think … was supposed to … / It was written that …' };
/* V · a carta da Chani → a regra */
var CARTA = { de: 'A letter to Paul · from Chani · Arrakis',
  txt: 'Paul, it [[was written]] that you [[were to lead]] us. You [[were supposed to]] stay in the desert. You promised you [[would]] never take power. The war [[was about to]] end, and we [[were going to]] be free.',
  assina: 'Chani' };
var REGRA = [
  { a: 'Paul ', par: ['was to lead', 'was to led', 'was lead'], c: 0, b: ' the Fremen. (destiny: was to + the verb)' },
  { a: 'Chani ', par: ['was supposed to', 'supposed to', 'was suppose to'], c: 0, b: ' be his home. (the plan that failed)' },
  { a: 'He promised he ', par: ['would', 'will'], c: 0, b: ' never take power. (a promise, told later)' },
  { a: 'The war ', par: ['was about to', 'was about'], c: 0, b: ' begin. (almost: was about to + verb)' },
  { a: '', par: ['It was written', 'It wrote'], c: 0, b: ' that he would come. (the prophecy is passive)' }
];
/* VI · as visões na areia: ligar o que era para ser ao que foi (seis pares) */
var PARES = [
  ['Paul was to lead the Fremen.', 'He led them, and then much more.'],
  ['He promised he would never take power.', 'He took it all.'],
  ['Chani was supposed to be his home.', 'She feels like a stranger.'],
  ['They were going to live in the desert.', 'They moved to the palace.'],
  ['The war was about to begin.', 'It began, and it did not stop.'],
  ['He was never to see his home again.', 'His ocean planet stayed far away.']
];
var LIGA = { formato: 'liga', titulo: 'Match what was to be with what was. Then say each pair out loud.', ordemDireita: [3, 0, 5, 1, 4, 2], pares: PARES };
/* VII · três amigos: a reação muda o que o amigo responde */
var CS = [
  { k: 'cs1', titulo: 'Friend 1 · The old plan', quem: 'Friend', fala: '“I was supposed to travel this year, but I stayed home.”', reacoes: [
    ['Comfort', 'You were supposed to go, but life happens. You were going to go next year.', 'Yes. I was about to buy the tickets!'],
    ['Ask', 'What were you going to do there?', 'I was going to see the mountains.'],
    ['Joke', 'Maybe it was written that you stay at home!', 'Ha! Then the sofa is my destiny.']] },
  { k: 'cs2', titulo: 'Friend 2 · A promise', quem: 'Friend', fala: '“You promised you would call me, and you didn’t.”', reacoes: [
    ['Say sorry', 'I’m sorry. I promised I would call, and I forgot.', 'OK. But next time, call!'],
    ['Explain', 'I was about to call, but my phone died.', 'Really? A dead phone again?'],
    ['Fix it', 'You’re right. I was supposed to call. I’ll call you tonight.', 'Thank you. Tonight at eight?']] },
  { k: 'cs3', titulo: 'Friend 3 · Destiny', quem: 'Friend', fala: '“Do you think some things are written?”', reacoes: [
    ['Yes', 'Yes. I think I was always to be a teacher.', 'Really? I was supposed to be a doctor!'],
    ['No', 'No. Nothing was written. We choose.', 'Maybe. But some things were to happen anyway.'],
    ['Maybe', 'Some things, yes. Meeting my best friend was written.', 'It was written, or it was luck?']] }
];

/* as visões: o gesto forte */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, du: { n: 0, esc: -1 } };

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
  return '<div class="du-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a duna e o livro: oito sinais na crista; cada visão aberta é um círculo traçado na areia; embaixo, as duas colunas */
function visoes(certos) {
  var N = PARES.length, feitas = certos.length, fim = feitas >= N;
  var pts = [[50, 98], [110, 82], [170, 72], [230, 72], [290, 82], [350, 98]];
  var sinais = pts.map(function (p, i) {
    return '<g class="du-sinal' + (certos.indexOf(i) >= 0 ? ' aberto' : '') + '"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="13" pathLength="100"/><circle class="du-olho" cx="' + p[0] + '" cy="' + p[1] + '" r="4"/></g>';
  }).join('');
  var linhas = certos.map(function (i) { return '<li><span>' + PARES[i][0] + '</span><span>' + PARES[i][1] + '</span></li>'; }).reverse().slice(0, 3).join('');
  return '<div class="du-livro vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The visions: ' + feitas + ' of ' + N + ' open">'
    + '<svg class="du-svg" viewBox="0 0 400 130" aria-hidden="true"><circle class="du-lua" cx="330" cy="26" r="14"/><circle class="du-lua2" cx="292" cy="18" r="6"/>'
    + '<path class="du-duna" d="M0 130 V104 C60 86 120 66 200 66 S340 86 400 104 V130 Z"/><path class="du-crista" d="M0 104 C60 86 120 66 200 66 S340 86 400 104"/>' + sinais + '</svg>'
    + '<div class="du-colunas"><div class="du-cab"><b>What was to be</b><b>What was</b></div><ol>' + (linhas || '<li class="vazio"><span>The sand is still. Match the first pair.</span><span></span></li>') + '</ol></div>'
    + '<p class="du-legenda">' + (fim ? 'Six visions open. The rest is not written yet.' : feitas + ' of ' + N + ' visions open') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · the future in the past · was to, was supposed to, it was written</span><h1>It Was Written</h1>'
    + '<p class="banda">' + FILME + ' · Warner Bros.</p>'
    + '<p class="sub">He was to save the desert people. He was supposed to stay. He promised he would never take power. Tonight you read the visions in the sand, one by one, and set what was to be against what was.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Read the sand</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r du-foto"><img src="' + img('capa') + '" alt="Desert dunes at night under a big moon"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="du-encarte vd"><div class="du-capinha"><img src="' + img('palacio') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The emperor’s hall</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="du-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Paul was supposed to free the desert. What happened to him?</h2></div>' + mostra('enc', 'He was supposed to free them, but he became an emperor, and his war destroyed thousands of worlds.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vc', VD_CARTAS) + '</div>'
    + '<div class="lado-l"><div class="du-selo vd"><b>Dune: Part Three</b><small>the official trailer · about three minutes · no spoilers</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="du-video"><div class="du-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="du-cred">' + FILME + ' · official trailer (Warner Bros.) · 2:50 · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vm', VD_VM) + FM.ex('ve', VD_ERRO) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vs', VD_ESC) + '</div><div class="lado-l">' + FM.ex('vg', VD_REG) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="du-video"><div class="du-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="du-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="du-sentido">' + x.sentido + '</span><span class="du-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="du-centro"><p class="du-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the verbs of destiny, plans and promises', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.visoes = function (c) {
  var e = (S.fq || {}).vis, certos = [];
  if (e && e.par) Object.keys(e.par).forEach(function (i) { if (e.par[i] === +i) certos.push(+i); });
  return cab(c) + comPlaca('<div class="fm-obj">' + visoes(certos) + '</div>' + FM.ex('vis', LIGA), PRESA);
};

R.planos = function (c) {
  return cab(c) + comPlaca(CS.map(function (x) { return FM.ex(x.k, { formato: 'reacao', titulo: x.titulo, quem: x.quem, fala: x.fala, reacoes: x.reacoes }); }).join(''), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="du-centro"><p class="du-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'escala', rot: 'I · Is It Written?', t: 'Before the trailer: do you believe in destiny?', p: 'Mark a number for each sentence and say why. The teacher marks theirs too.', rotulos: ['Not at all', 'Completely'],
  itens: [
    { q: 'Some people are born to be leaders.', ex: '6. Some are, but most people learn it.' },
    { q: 'My life went the way it was supposed to.', ex: '4. Not really! I was going to be a doctor.' },
    { q: 'I was meant to meet my best friend.', ex: '9. We met by accident, twice.' },
    { q: 'A promise must never be broken.', ex: '7. Almost never.' },
    { q: 'The future is already written.', ex: '2. I write my own future.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: Paul Atreides, emperor.', p: 'Sit in the hot seat as Paul. The teacher asks about the past, the plans and the promises. Answer with was to, was supposed to, would. Then swap.',
  quem: 'Paul Atreides, emperor of the galaxy',
  itens: [
    { q: 'What were you supposed to be?', ex: 'I was supposed to be a duke, not an emperor.' },
    { q: 'What did you promise Chani?', ex: 'I promised I would never take power in my name.' },
    { q: 'Was it written that you would win?', ex: 'It was written, but I chose it too.' },
    { q: 'What were you about to do when the war began?', ex: 'I was about to leave Arrakis.' },
    { q: 'Were you ever to go home again?', ex: 'No. I was never to see my home again.' }
  ] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'Looking back at the future. Three kinds.',
  usos: [
    { t: 'DESTINY', f: 'He was to rule the desert.', d: 'It was written: it had to happen. was to + verb.', img: 'dunas' },
    { t: 'A PLAN THAT FAILED', f: 'The peace was supposed to last.', d: 'The plan was one thing. Then life was another.', img: 'palacio' },
    { t: 'A PROMISE, TOLD LATER', f: 'Chani said she would wait for him.', d: 'We tell an old promise with would, not will.', img: 'chani' }
  ],
  pergunta: 'Which kind is it?',
  itens: [
    { f: 'The prophecy said a boy was to lead the people.', c: 0 },
    { f: 'The guards were supposed to watch the gate, but they fell asleep.', c: 1 },
    { f: 'Paul told her he would come back before the storm.', c: 2 },
    { f: 'He was never to see his home again.', c: 0 },
    { f: 'The meeting was supposed to end at noon. It lasted all day.', c: 1 },
    { f: 'Chani promised she would never leave the desert.', c: 2 }
  ],
  nota: 'Looking back from later: <b>was to</b> = it had to happen (destiny). <b>was supposed to</b> = the plan, and it did not work. <b>would</b> = the promise we tell later. Never “was to led”, never “promised he will”.',
  uso: { p: 'Your turn. Three sentences about the past: one destiny, one plan that failed, one promise.', molde: ['I was never to …', 'I was supposed to …, but …', 'He said he would …'], ex: 'I was supposed to call my mom, but I forgot. My friend said he would come at 8 PM. She was never to leave her town, but she did.' },
  prof: 'Read the three kinds out loud with the student. Then the student taps a kind for each sentence. No rule to read: the kinds are the rule.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
