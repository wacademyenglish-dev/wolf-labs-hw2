/* ============================================================
   PLURIBUS · THE HAPPY MAP · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · phrasal verbs separáveis: com pronome, o pronome vai no
   MEIO (cheer her up, figure it out, turn it off, pick me up, give it
   back, put it on, look it up, turn it down); com substantivo, tanto
   faz (turn off the TV / turn the TV off).
   Erros: cheer up her (pronome no fim), cheer her (partícula some),
   turns it of, give it to back me, looks it on up.
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo DUBLAGEM.
   A tela forte: o mapa da cidade feliz demais. Oito bairros em volta da
   casa da Carol; cada frase certa espalha o sorriso por um bairro (do
   cinza para o rosa e ouro). A casa da Carol fica cinza até o fim.
   O AQUECIMENTO (aquece.js): o dado. O FECHAMENTO: escrita, um bilhete
   para alguém num dia ruim.
   O VÍDEO: a6lzvWby9UE (trailer oficial Apple TV, 2:03, idade 0, embed
   sim). Tempos da legenda oficial (23/09): 0:08, 0:28, 0:36, 0:54, 1:29;
   cada momento contado com palavras nossas.
   A CARA: noite, rosa feliz, ouro de sol e menta; Syne + Manrope. A
   antiga era o kit cinema "episódio".
   Fila: FILA-LIVE-386.md · 278.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a régua (feliz demais: bom ou assustador?) antes; a palavra
   que você ouviu e a palavra errada, com ▶ nas falas do trailer
   (legenda-dados.js); depois, três escolhas de sentido. V: o bilhete das
   vozes sob a porta da Carol (carta): tocar os seis phrasal verbs e
   completar a regra. VI: o mapa com SEIS bairros e a rua de Carol no meio;
   falar primeiro, cada frase certa espalha o sorriso. VII (era EXTRA): três
   pessoas falam com você, a reação muda a conversa.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'cidade', rot: 'I · Warm-up and Carol’s Phone', t: 'Before the trailer: your mornings, then a very strange morning.', p: 'Answer three questions about your life. Then read Carol’s messages out loud and say what is happening.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Pluribus. The official trailer.', p: 'Pick a spot first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'casa', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 7, img: 'cidade', rot: 'V · The Little Word', t: 'A note under Carol’s door. Find the six verbs.', p: 'Read the note out loud. Tap the six verbs. Then finish the rule.' },
  { k: 'mapa', est: 'o', min: 7, img: 'capa', rot: 'VI · The Happy Map', t: 'Each sentence spreads the smile to a neighborhood.', p: 'Read the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'dias', est: 'o', min: 7, img: 'casa', rot: 'VII · Your Bad Days', t: 'Three people need you. How do you answer?', p: 'Pick how you answer. Then read the talk out loud.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · A Note for a Bad Day', t: 'Write a note for a friend on a bad day.', p: 'Use three of the verbs. It goes to your My notes.' }
];

var SERIE = 'Pluribus', ANO = '2025';
var YT = 'a6lzvWby9UE', DUR = 123;

var ENCARTE = [
  ['The show', '<i>Pluribus</i> is an Apple TV series (2025) by Vince Gilligan, the creator of <i>Breaking Bad</i>. It happens in Albuquerque, New Mexico.'],
  ['The morning', 'One morning, everybody on Earth wakes up happy. They are calm, kind, and they all speak with one friendly voice.'],
  ['Carol', 'Everybody except Carol, a writer. She is still herself, and still unhappy. The whole planet wants to cheer her up. Carol wants to figure it out.']
];

var ANTES = [
  { q: 'What cheers you up on a bad day?', h: 'Music cheers me up. / My dog cheers me up.' },
  { q: 'Everybody in your city is happy all the time. Is that good or scary?', h: 'I think it is … because …' }
];
var DEPOIS = [
  { q: 'Is the voice kind or scary? Why?', h: 'It is … because …' },
  { q: 'What does Carol want to figure out?', h: 'She wants to figure out …' }
];

var TRECHOS = [
  { k: 'Good morning', ini: 6, fim: 14, ouvir: 'What does the voice ask Carol?', sentido: 'A friendly voice says good morning and asks if there is anything they can do to make Carol happy.', gram: 'They want to <b>cheer her up</b>.' },
  { k: 'Be happy', ini: 26, fim: 35, ouvir: 'What do they want for Carol?', sentido: 'Many people say her name again and again. They only want her to be happy.', gram: 'Everybody wants to <b>cheer Carol up</b>.' },
  { k: 'The question', ini: 35, fim: 44, ouvir: 'What does Carol ask?', sentido: 'Carol asks one question: how can she make everything go back to normal?', gram: 'She wants to <b>turn it off</b>.' },
  { k: 'Different', ini: 52, fim: 63, ouvir: 'What will they figure out?', sentido: 'The voice promises to find out why Carol is different, so she can join them.', gram: 'They will <b>figure it out</b>.' },
  { k: 'Anything', ini: 88, fim: 100, ouvir: 'Will they give Carol anything she asks for?', sentido: 'Carol tests them. She asks for very dangerous things, and they always say yes.', gram: 'Ask for it, and they <b>give it</b> to you.' }
];

var TRAPS = [
  ['The pronoun in the middle', 'They want to cheer up her.', 'They want to <b>cheer her up</b>.', 'verb + her / it / me / them + up'],
  ['Don’t lose the little word', 'We will figure it.', 'We will <b>figure it out</b>.', 'figure it OUT · turn it OFF'],
  ['A noun can move', 'Turn off it.', '<b>Turn it off</b>. / <b>Turn off</b> the TV.', 'a noun: both · a pronoun: middle'],
  ['Give it back', 'Give back it to me.', '<b>Give it back</b> to me.', 'give + it + back']
];

/* o mapa: o gesto forte */
var BAIRROS = [
  { nome: 'Old Town' }, { nome: 'Nob Hill' }, { nome: 'Downtown' },
  { nome: 'Los Ranchos' }, { nome: 'Uptown' }, { nome: 'Barelas' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, mp: { n: 0, esc: -1 } };

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
  return '<div class="pb-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'cheer <b>her</b> up · figure <b>it</b> out<br>a pronoun goes in the <b>middle</b><br><b>turn off</b> the TV · <b>turn</b> the TV <b>off</b><br>don’t lose the little word';
/* III · antes: a régua */
var PB_REG = { formato: 'regua', titulo: 'Before you watch: everybody in your city is happy all the time.', frase: 'Is that good, or scary?', esquerda: 'Scary', direita: 'Good', depois: 'Pick a spot. Say why: It cheers me up … / It is scary because …' };
/* III · durante: a palavra que você ouviu e a palavra errada, cada uma no minuto do trailer (legenda-dados.js) */
var PB_SOM = { formato: 'som', itens: [
  { a: 'Good ', par: ['morning', 'mourning'], c: 0, b: ', Carol.', t: '0:08' },
  { a: 'What would you like to ', par: ['no', 'know'], c: 1, b: '?', t: '0:38' },
  { a: 'We will ', par: ['finger', 'figure'], c: 1, b: ' out what makes you different.', t: '0:55' }
] };
var PB_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: 'Is there anything we could do to cheer you <u>down</u>?', r: 'up', t: '0:09' },
  { f: 'We will figure <u>in</u> what makes you different.', r: 'out', t: '0:54' },
  { f: 'Feel free to move about the <u>house</u>, Carol.', r: 'cabin', t: '1:47' }
] };
/* III · depois: três escolhas de sentido */
var PB_ESC = { formato: 'escolhe', titulo: 'After the trailer: pick the answer. Then say it.', itens: [
  { p: 'What do the voices want for Carol?', o: ['To be happy', 'To go to work', 'To be alone'], c: 0, tm: '0:31', d: 'Say it: They want to cheer her up.' },
  { p: 'What does Carol ask?', o: ['How to reverse all this', 'How to join them', 'Where the cabin is'], c: 0, tm: '0:40', d: 'Say it: She wants to turn it off.' },
  { p: 'What will the voices find out?', o: ['What makes Carol different', 'Where Carol lives', 'Who is on the phone'], c: 0, tm: '0:54', d: 'Say it: They will figure it out.' }
] };
/* V · o bilhete sob a porta → a regra */
var PB_CARTA = { de: 'A note under Carol’s door · 7 a.m.',
  txt: 'Dear Carol, good morning! We want to [[cheer you up]]. Is the TV too loud? We can [[turn it off]]. Do you need a ride? We can [[pick you up]]. Is a word hard? We can [[look it up]]. Do you want your book? We can [[give it back]]. Is something wrong? We will [[figure it out]].', assina: 'The voices' };
var PB_REGRA = [
  { a: 'With a pronoun (you, it, her), the little word goes', par: ['in the middle', 'at the end'], c: 0 },
  { a: 'With a noun: turn off the TV / turn the TV off.', par: ['Both are OK', 'Only one is OK'], c: 0 },
  { a: 'The little word (up, out, off) is', par: ['part of the verb', 'extra: you can drop it'], c: 0 }
];
/* VI · o mapa: falar primeiro, Check, o bairro fica feliz */
var PB_FALA = [
  { pista: 'they · want to · cheer · her · up', resp: 'They want to <b>cheer her up</b>.', depois: 'Who cheers you up when you are sad?' },
  { pista: 'we · will · figure · it · out', resp: 'We will <b>figure it out</b>.', depois: 'What is hard to figure out in your life?' },
  { pista: 'Carol · turns · it (the TV) · off', resp: 'Carol <b>turns it off</b>.', depois: 'What do you turn off at night?' },
  { pista: 'can you · pick · me · up · at nine?', resp: 'Can you <b>pick me up</b> at nine?', depois: 'Who picks you up when you need a ride?' },
  { pista: 'give · it · back · to me!', resp: '<b>Give it back</b> to me!', depois: 'Did you ever lend something and never get it back?' },
  { pista: 'Carol · looks · it · up · on the internet', resp: 'Carol <b>looks it up</b> on the internet.', depois: 'The whole city is happy. Only Carol’s house is grey. What did you look up today?' }
];
/* VII · três pessoas, a reação muda a conversa */
var PB_REA = [
  { k: 'r1', titulo: 'Person 1 · A sad friend', quem: 'Friend', fala: '“I had a terrible day.”', reacoes: [
    ['Cheer her up', 'I want to cheer you up! Let’s eat pizza.', 'Yes! Pizza cheers me up.'],
    ['Give a ride', 'Let’s go out. I will pick you up at seven.', 'OK! See you at seven.'],
    ['Listen', 'Tell me. I am here.', 'Thank you. I needed that.']] },
  { k: 'r2', titulo: 'Person 2 · A classmate', quem: 'Classmate', fala: '“I forgot your book at home. Sorry!”', reacoes: [
    ['Tomorrow', 'No problem. Give it back tomorrow.', 'OK, I will give it back tomorrow.'],
    ['Friday', 'Give it back on Friday, please.', 'Sure, Friday.'],
    ['A new word', 'It is OK. What is the word? Look it up!', 'Thanks, I will look it up.']] },
  { k: 'r3', titulo: 'Person 3 · A neighbor', quem: 'Neighbor', fala: '“Your music is very loud!”', reacoes: [
    ['Sorry', 'Sorry! I will turn it off.', 'Thank you.'],
    ['Later', 'I will turn it off at ten.', 'OK, thanks.'],
    ['My phone', 'It is my phone. Look, I turned it off.', 'Oh, sorry!']] }
];

/* o mapa visto de cima: uma grade 3 x 3 de quarteirões; no meio a casa da Carol (sempre cinza); em volta os oito bairros, que passam do cinza para o rosa e ouro, com um sorriso */
function mapa(feitos, atual, nova) {
  var ordemPos = [0, 2, 3, 5, 6, 8];
  var cel = [];
  for (var p = 0; p < 9; p++) {
    if (p === 4) { cel.push('<div class="pb-q carol"><i class="pb-casa"></i><small>Carol</small></div>'); continue; }
    if (p === 1 || p === 7) { cel.push('<div class="pb-q rua" aria-hidden="true"></div>'); continue; }
    var i = ordemPos.indexOf(p), b = BAIRROS[i];
    var cls = i < feitos ? (nova && i === feitos - 1 ? ' feliz novo' : ' feliz') : (i === atual ? ' vez' : '');
    cel.push('<div class="pb-q' + cls + '">' + (i < feitos ? '<b class="pb-sorriso" aria-hidden="true"></b>' : '') + '<small>' + b.nome + '</small></div>');
  }
  return '<div class="pb-mapa vd" role="img" aria-label="The happy map: ' + feitos + ' of ' + BAIRROS.length + ' neighborhoods happy">' + '<div class="pb-grade">' + cel.join('') + '</div>'
    + '<p class="pb-legenda">' + (feitos >= BAIRROS.length ? 'The whole city is happy. Except one house.' : 'Albuquerque · ' + feitos + ' of ' + BAIRROS.length + ' happy') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · phrasal verbs · cheer her up · figure it out</span><h1>Cheer You Up</h1>'
    + '<p class="banda">' + SERIE + ' · ' + ANO + '</p>'
    + '<p class="sub">One morning, everybody on Earth wakes up happy. Everybody except Carol. Tonight every right sentence spreads the smile to one more neighborhood, and you learn where the little word goes.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Good morning, Carol</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r pb-foto"><img src="' + img('capa') + '" alt="An empty, perfect suburban street at dusk under a pink and gold sky"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="pb-encarte vd"><div class="pb-capinha"><img src="' + img('cidade') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>Albuquerque</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="pb-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Everybody is happy, but you aren’t. Do you want to join them?</h2></div>' + mostra('enc', 'No! I want to be happy, but I want to be me.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', PB_REG) + '</div>'
    + '<div class="lado-l"><div class="pb-selo vd"><b>' + SERIE + '</b><small>the official trailer · about two minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="pb-video"><div class="pb-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="pb-cred">' + SERIE + ' · official trailer (Apple TV) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('som', PB_SOM) + FM.ex('erro', PB_ERRO) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="pb-centro">' + FM.ex('esc', PB_ESC) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="pb-video"><div class="pb-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="pb-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="pb-sentido">' + x.sentido + '</span><span class="pb-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="pb-centro"><p class="pb-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('carta', { formato: 'carta', carta: PB_CARTA, regra: PB_REGRA, toque: 'Tap the 6 phrasal verbs', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.mapa = function (c) {
  return cab(c) + FM.fala('mapa', PB_FALA, {
    rotulo: 'Street', prox: 'Next neighborhood', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + mapa(feitas, atual, nova) + '</div>'; },
    fim: 'The whole city is happy. Only Carol’s house is grey. Now you are the voice: talk to Carol and try to cheer her up, with three of the verbs.'
  });
};

R.dias = function (c) {
  return cab(c) + comPlaca(PB_REA.map(function (x) { return FM.ex(x.k, { formato: 'reacao', titulo: x.titulo, quem: x.quem, fala: x.fala, reacoes: x.reacoes }); }).join(''), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Dear …,\nI know today is a bad day. I want to cheer you up …', 'A note for a bad day',
    ['cheer you up', 'figure it out', 'turn it off', 'pick you up', 'give it back', 'look it up'], ['A note for a bad day', 'Write to a friend who is sad. Use three of the verbs, with the little word in the right place.'])
    + '<div class="lado-fim"><div class="grande vd"><span>cheer <u>her</u> up</span><span>figure <u>it</u> out</span><span>pick <u>me</u> up</span><span>not <s>cheer up her</s>, not <s>figure it</s></span></div>'
    + mostra('fim', 'Dear Ana, I know today is a bad day. I want to cheer you up! I can pick you up at seven and we can have pizza. Turn your phone off and relax. We will figure it out together.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'dado', rot: 'I · The Bad Day Die', t: 'Before the trailer: your bad days.', p: 'Tap the die and answer. Then the teacher answers.', rotulo: 'Bad days', semente: 11,
  itens: [
    { q: 'What cheers you up on a bad day?', ex: 'A long walk and loud music.' },
    { q: 'Who calls you when you are sad?', ex: 'My best friend. She always knows.' },
    { q: 'What do you turn off when you want to relax?', ex: 'My phone. I turn it off and read.' },
    { q: 'Is it OK to be sad sometimes? Why?', ex: 'Yes. Sad days help us understand happy days.' },
    { q: 'What was the worst day of your year?', ex: 'The day my car broke in the rain.' },
    { q: 'What do you do to cheer a friend up?', ex: 'I cook for them.' }
  ] };
/*AQ@@*/
