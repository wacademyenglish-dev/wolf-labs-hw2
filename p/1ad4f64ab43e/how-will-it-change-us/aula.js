/* ============================================================
   DISCLOSURE DAY · THE CRISIS ROOM RADAR · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · will / won't + verbo (previsão), Will they…?, I think …
   will / I don't think … will, there will be
   Erros: will + -s, will to, will + passado, will + -ing, wills, don't
   will / no will, Do they will…?, pergunta sem inversão (They will
   come?), there will have (vai ter), there will are.
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo APOSTA DE SPOILER.
   A tela forte: o radar da sala de crise. Oito setores do mundo
   (internet, escolas, céu, dinheiro, igrejas, aeroportos, família,
   ciência); cada previsão certa acende o ponto do setor no radar com
   o selo WILL ou WON'T. O ponteiro do radar gira; o da vez pisca.
   O AQUECIMENTO (aquece.js): a imagem. O FECHAMENTO (final.js): a
   entrevista, o professor é a repórter do canal de Kansas City.
   O VÍDEO: icDuEHSxE-w (Final Trailer oficial, Universal, 2:43, idade
   0, embed sim). Tempos da legenda oficial (24/09): 0:24, 0:37, 1:14,
   1:25, 2:16; cada momento contado com palavras nossas.
   A CARA: verde de radar sobre noite, âmbar de alerta; Michroma +
   IBM Plex Sans + IBM Plex Mono. A antiga era a sessão do drive-in.
   Fila: FILA-LIVE-386.md · 277.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a roleta "o que vai acontecer lá?" antes; True or Lie com ▶ nas
   falas do trailer; depois, achar a palavra errada com ▶. V: as mensagens da
   repórter (tocar will e won't) e completar a regra. VI: o radar com SEIS
   setores; o aluno diz uma frase para cada um e toca a ficha (acende o setor).
   VII (era EXTRA, agora essencial): seis perguntas sobre o seu futuro, toque
   em sim ou não e diga por quê.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'sala', rot: 'I · Warm-up and Her Phone', t: 'Before the trailer: your future, then a very strange day at work.', p: 'Answer three questions about your life. Then read the weather woman’s messages out loud and say what will happen.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Disclosure Day, 2026. The final trailer.', p: 'Spin first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'ceu', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'sala', rot: 'V · Mistake Hunter', t: 'Six predictions after Disclosure Day. Each one has a wrong word.', p: 'Tap the wrong word. Say the prediction right. Then check.' },
  { k: 'regra', est: 'f', min: 6, img: 'sala', rot: 'VI · Will', t: 'The weather woman’s messages: what will happen?', p: 'Tap the will and won’t in the messages. Then finish the rule.' },
  { k: 'radar', est: 'o', min: 7, img: 'capa', rot: 'VII · The Crisis Room', t: 'The truth is out. Predict the world, sector by sector.', p: 'Say a sentence for each card. Tap the card when you say it.' },
  { k: 'futuro', est: 'o', min: 6, extra: 1, img: 'ceu', rot: 'VIII · Your Future', t: 'Six questions about your future. Will it happen?', p: 'Tap yes or no. Then say why.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Interview', t: 'The interview.', p: 'Interview.' }
];

var FILME = 'Disclosure Day', ANO = '2026';
var YT = 'icDuEHSxE-w', DUR = 163;

var ENCARTE = [
  ['The film', '<i>Disclosure Day</i> is a 2026 film by Steven Spielberg (Universal), the director of <i>E.T.</i> and <i>Close Encounters</i>.'],
  ['The secret', 'For seventy-nine years, governments have a secret: we are not alone in the universe. Somebody steals the secret, and says people have the right to know.'],
  ['The day', 'A TV weather woman in Kansas City is in the middle of it. Soon the whole world will know. How will it change us?']
];

var ANTES = [
  { q: 'Do you think there is life on other planets?', h: 'Yes, I think … / No, I don’t think …' },
  { q: 'The news says aliens are real. What is the first thing you do?', h: 'I call my … / I go to …' }
];
var DEPOIS = [
  { q: 'What is the big secret in the film?', h: 'The secret is that …' },
  { q: 'Will you watch this film? Why?', h: 'Yes, I will, because … / No, I won’t, because …' }
];

var TRECHOS = [
  { k: 'The secret', ini: 22, fim: 37, ouvir: 'What did somebody steal?', sentido: 'Somebody steals secrets, and says that people have the right to know the truth. It is a story about all of us.', gram: 'People <b>will</b> know the truth.' },
  { k: 'Kansas City', ini: 37, fim: 58, ouvir: 'Who is in danger?', sentido: 'A TV weather woman says good morning to Kansas City. Then a stranger tells her not to go home: some people found her.', gram: 'She <b>won’t</b> go back to her house.' },
  { k: 'The cover-up', ini: 66, fim: 82, ouvir: 'How long is the secret?', sentido: 'A man shouts that seventy-nine years of hiding the truth have to end, now.', gram: 'The secret <b>won’t</b> stay secret.' },
  { k: 'Change', ini: 84, fim: 100, ouvir: 'Will disclosure change us for better or for worse?', sentido: 'Somebody asks how the truth will change us. The answer: for the better. We will remember that there is something bigger than us.', gram: '<b>How will</b> it change us? <b>I think</b> it <b>will</b> make us better.' },
  { k: 'They’re coming', ini: 130, fim: 150, ouvir: 'Is it all true?', sentido: 'A voice says that they are coming, and that all of this is true.', gram: '<b>Will</b> they come? Yes, they <b>will</b>.' }
];

var TRAPS = [
  ['The base verb', 'It will changes everything.', 'It <b>will change</b> everything.', 'will + verb · no -s, no to'],
  ['The negative', 'They don’t will come.', 'They <b>won’t</b> come.', 'will not = won’t'],
  ['The question', 'They will come?', '<b>Will they</b> come?', 'Will + person + verb'],
  ['There will be', 'There will have many questions.', 'There <b>will be</b> many questions.', 'there will be (not will have)']
];

/* o radar: o gesto forte */
var SETORES = [
  { setor: 'The internet', a: 0, r: .68, selo: 'WILL', chip: 'will' },
  { setor: 'Schools', a: 60, r: .5, selo: 'WON’T', chip: 'won’t' },
  { setor: 'The sky', a: 120, r: .78, selo: '?', chip: 'Will they …?' },
  { setor: 'Money', a: 180, r: .55, selo: 'WILL', chip: 'I think … will' },
  { setor: 'Airports', a: 240, r: .45, selo: 'WILL', chip: 'there will be' },
  { setor: 'Family', a: 300, r: .65, selo: 'WON’T', chip: 'I don’t think … will' }
];

var FUTURO = [
  { k: 'Next year', h: 'Will you live in the same house next year?', ex: 'Yes, I will. I love my house.' },
  { k: 'Your English', h: 'Will you speak English well in two years?', ex: 'I think I will. I study every week.' },
  { k: 'Your city', h: 'Will your city be better in ten years?', ex: 'I don’t think it will. There will be more cars.' },
  { k: 'Your job', h: 'Will robots do your job one day?', ex: 'No, they won’t. Robots can’t teach!' },
  { k: 'Your weekend', h: 'What will you do this weekend?', ex: 'I will visit my parents.' },
  { k: 'The world', h: 'Will people go to Mars before 2050?', ex: 'I think they will.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>will</b> + verb · no -s, no to<br><b>won’t</b> = will not<br><b>Will</b> they come? · How <b>will</b> it change us?<br>I think … <b>will</b> · I don’t think … <b>will</b><br>there <b>will be</b> (not will have)';
/* III · antes: a roleta */
var VD_ROD = { formato: 'sorteio', titulo: 'Before you watch: spin the wheel. What will happen there on Disclosure Day?', botao: 'Spin', opcoes: ['The internet', 'Schools', 'The sky', 'Money', 'Airports', 'Your family'] };
/* III · durante: True or Lie, com ▶ nos tempos do trailer (legenda-dados.js) */
var VD_VL = { formato: 'verdadeOuMentira', titulo: 'While you watch: true or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Somebody steals money.', t: 0, tm: '0:25', c: 'The answer is: secrets.' },
  { f: 'Somebody says: “I have a right to know the truth.”', t: 1, tm: '0:30' },
  { f: 'Someone says: “Good morning, Kansas City.”', t: 1, tm: '0:38' },
  { f: 'A voice says: “I’m happy.”', t: 0, tm: '0:48', c: 'It says: I’m frightened.' },
  { f: 'Someone asks: “How will disclosure change us?”', t: 1, tm: '1:26' },
  { f: 'A voice says there is nothing out there.', t: 0, tm: '1:34', c: 'It says: there is something bigger out there.' }
] };
/* III · depois: uma palavra está errada, com ▶ */
var VD_ERR = { formato: 'erro', titulo: 'After the trailer: one word is wrong. Say the right one.', itens: [
  { f: 'I have a <u>left</u> to know the truth.', r: 'right', t: '0:30' },
  { f: 'This is a <u>song</u> about us.', r: 'story', t: '0:34' },
  { f: 'Good <u>evening</u>, Kansas City.', r: 'morning', t: '0:38' },
  { f: 'How will disclosure <u>stop</u> us?', r: 'change', t: '1:26' },
  { f: 'There is something <u>smaller</u> out there than just ourselves.', r: 'bigger', t: '1:34' }
] };
/* V · as mensagens da repórter */
var CARTA_R = { formato: 'carta', papel: 'tela', carta: { de: 'Messages · the Kansas City newsroom', txt: 'It [[will change]] everything. Schools [[won’t]] close. [[Will]] they come? Yes, they [[will]]. There [[will be]] a lot of questions. [[I don’t think it will]] be fast.' },
  toque: 'Tap the will and won’t in the messages', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner.',
  regra: [
    { a: 'A prediction: it will', par: ['changes', 'change'], c: 1, b: 'everything.' },
    { a: 'No:', par: ['won’t', 'don’t will'], c: 0, b: 'close.' },
    { a: 'Question:', par: ['Do they will', 'Will they'], c: 1, b: 'come?' },
    { a: 'I don’t think it', par: ['won’t', 'will'], c: 1, b: 'be fast.' },
    { a: 'There', par: ['will have', 'will be'], c: 1, b: 'a lot of questions.' }
  ] };
/* VI · o radar: uma frase para cada ficha, tocar a ficha acende o setor */
var USA = { formato: 'usa', titulo: 'Predict the world. Say a sentence for each card. Tap the card when you say it.', palavras: SETORES.map(function (s) { return s.setor + ' · ' + s.chip; }), fim: 'All sectors reported. Now give the president your report: three things that will change, and two that won’t.' };
/* VII · seis perguntas sobre o seu futuro: toque e diga por quê */
var VD_FUT = { formato: 'escolhe', titulo: 'Six questions about your future. Tap your answer, then say why.', itens: [
  { p: 'Will you live in the same house next year?', o: ['Yes, I will.', 'No, I won’t.'], c: -1, d: 'Now say why: “I will, because …” / “I won’t, because …”' },
  { p: 'Will you speak English well in two years?', o: ['Yes, I will.', 'No, I won’t.'], c: -1, d: 'Now say why. You can start with: “I think …”' },
  { p: 'Will your city be better in ten years?', o: ['Yes, it will.', 'No, it won’t.'], c: -1, d: 'Now say why. You can start with: “I don’t think …”' },
  { p: 'Will robots do your job one day?', o: ['Yes, they will.', 'No, they won’t.'], c: -1, d: 'Now say why. What will robots do? What won’t they do?' },
  { p: 'What will you do this weekend?', o: ['Stay at home', 'Go out'], c: -1, d: 'Now say it: “I will …”' },
  { p: 'Will people go to Mars before 2050?', o: ['Yes, they will.', 'No, they won’t.'], c: -1, d: 'Now say why. You can start with: “I think …”' }
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, rr: { n: 0, esc: -1 } };

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
  return '<div class="dd-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o radar da sala de crise: anéis, cruz, o ponteiro que gira e oito pontos; o da vez pisca âmbar, os acesos ficam verdes com o selo */
function radar(u) {
  /* 23/10/2026 · cada ficha tocada acende o setor dela (em qualquer ordem); o próximo pisca */
  u = u || {}; var feitas = 0, vez = -1;
  SETORES.forEach(function (s, i) { if (u[i]) feitas++; else if (vez < 0) vez = i; });
  var pontos = SETORES.map(function (s, i) {
    var ang = s.a * Math.PI / 180, x = 150 + Math.sin(ang) * s.r * 130, y = 150 - Math.cos(ang) * s.r * 130;
    var cls = u[i] ? 'ok' : (i === vez ? 'vez' : '');
    var ladoEsq = x < 150;
    return '<g class="dd-ponto ' + cls + '"><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (cls ? 6 : 3.5) + '"/>'
      + (cls ? '<text x="' + (x + (ladoEsq ? -10 : 10)).toFixed(1) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="' + (ladoEsq ? 'end' : 'start') + '">' + s.setor + (u[i] ? ' · ' + s.selo : '') + '</text>' : '') + '</g>';
  }).join('');
  return '<div class="dd-tela vd" role="img" aria-label="The crisis room radar: ' + feitas + ' of 6 sectors"><svg class="dd-radar" viewBox="0 0 300 300">'
    + '<circle cx="150" cy="150" r="130" class="dd-anel f"/><circle cx="150" cy="150" r="87" class="dd-anel"/><circle cx="150" cy="150" r="44" class="dd-anel"/>'
    + '<line x1="20" y1="150" x2="280" y2="150" class="dd-anel"/><line x1="150" y1="20" x2="150" y2="280" class="dd-anel"/>'
    + '<g class="dd-varre"><path d="M150 150 L150 20 A130 130 0 0 1 242 58 Z"/></g>' + pontos + '</svg>'
    + '<p class="dd-status">' + (feitas >= SETORES.length ? 'ALL SECTORS REPORTED' : 'SECTORS ' + feitas + ' / 6') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · will · won’t · Will they…? · I think … will</span><h1>How Will It Change Us?</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">For seventy-nine years the truth was a secret. Today the world will know: we are not alone. You are in the crisis room. Predict what will change, sector by sector, and the radar lights up.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the crisis room</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r dd-foto"><img src="' + img('capa') + '" alt="A wheat field at night with a column of light coming down from the clouds far away"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="dd-encarte vd"><div class="dd-capinha"><img src="' + img('sala') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The crisis room</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="dd-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Do people have the right to know every secret? Why?</h2></div>' + mostra('enc', 'I think yes. But some secrets are dangerous.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_ROD) + '<p class="fm-nota">Say: … will … / … won’t …</p></div>'
    + '<div class="lado-l"><div class="dd-selo vd"><b>' + FILME + '</b><small>the final trailer · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="dd-video"><div class="dd-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="dd-cred">' + FILME + ' · final trailer (Universal) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_VL) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="dd-centro">' + FM.ex('v2', VD_ERR) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="dd-video"><div class="dd-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="dd-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="dd-sentido">' + x.sentido + '</span><span class="dd-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="dd-centro"><p class="dd-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('car', CARTA_R);
};

R.radar = function (c) {
  var u = (S.fq && S.fq.rd && S.fq.rd.u) || {};
  return cab(c) + '<div class="fm-lado2">' + radar(u) + comPlaca(FM.ex('rd', USA), PRESA) + '</div>';
};

R.futuro = function (c) {
  return cab(c) + comPlaca(FM.ex('ft', VD_FUT), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="dd-centro"><p class="dd-dica">The interview.</p></div>';
};

/* 23/10/2026 · todo ▶ toca só um trecho limpo e para sozinho (depois de 0:58 o trailer tem uma ameaça) */
var RAD_SEG = [[22, 37], [37, 58], [66, 82], [84, 100], [130, 150]];
window.addEventListener('load', function () {
  TOQUES['fq-pula'] = function (b, n, v) {
    var t = +v, g = null; RAD_SEG.forEach(function (x) { if (t >= x[0] && t < x[1]) g = x; });
    var fr = document.querySelector('#palco .video iframe'); if (!g || !fr) return false;
    fr.src = fr.src.replace(/&(start|end|autoplay)=\d+/g, '') + '&start=' + t + '&end=' + g[1] + '&autoplay=1';
    return false;
  };
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'imagem', img: 'ceu', alt: 'Giant radio telescope dishes under a sky full of stars, with one bright moving light', rotulo: 'The sky', rot: 'I · The Sky', t: 'Before the trailer: look up.', p: 'One question at a time. The student answers; then the teacher answers too.',
  itens: [
    { q: 'Look at the bright light. What is it? Guess.', ex: 'Maybe a plane… or maybe not!' },
    { q: 'Do you look at the stars? Where can you see them?', ex: 'Yes, at my grandmother’s farm. There are millions.' },
    { q: 'Will people find life on other planets one day?', ex: 'I think they will. The universe is very big.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'entrevista', rot: 'VIII · The Interview', t: 'Interview the weather woman from Kansas City.', p: 'The teacher is the TV weather woman on Disclosure Day. Ask with will and won’t. Then swap: you talk about your own future.',
  papel: 'the TV weather woman from Kansas City', papel2: 'you, about your future',
  itens: [
    { q: 'What will you say on TV tomorrow morning?', ex: 'I will say: good morning, Kansas City. We are not alone.' },
    { q: 'Will you go back to your house?', ex: 'No, I won’t. It isn’t safe.' },
    { q: 'Will the aliens come to Kansas?', ex: 'I think they will. Maybe tonight.' },
    { q: 'How will the truth change people?', ex: 'I think people will be kinder.' },
    { q: 'What won’t change?', ex: 'People won’t stop watching the weather!' }
  ] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G14 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'cacaErro', titulo: 'Mistake hunter. Six predictions.',
  toque: 'People who speak Portuguese often say these. Tap the wrong word before you see the answer.',
  itens: [
    { f: 'The internet [[wills]] stop for a day.', r: 'The internet <b>will</b> stop for a day.', d: 'Will never takes an -s.' },
    { f: 'People will [[to]] call their families.', r: 'People will <b>call</b> their families.', d: 'will + the clean verb. No to.' },
    { f: 'Schools [[don’t]] will open on Monday.', r: 'Schools <b>won’t</b> open on Monday.', d: 'The no is won’t. Never don’t will.' },
    { f: '[[Do]] they will tell the truth?', r: '<b>Will</b> they tell the truth?', d: 'In a question, will goes first. No do.' },
    { f: 'I think the sky will [[changed]].', r: 'I think the sky will <b>change</b>.', d: 'will + the clean verb. No past.' },
    { f: 'There will [[have]] a big speech tonight.', r: 'There will <b>be</b> a big speech tonight.', d: 'There will be. Not there will have.' }
  ],
  nota: 'A prediction: <b>will / won’t + the clean verb</b>. A question starts with will: <b>Will</b> they …? Something exists: there <b>will be</b>.',
  uso: { p: 'Your turn. The truth is out. Make three predictions about your city next week.', molde: ['… will …', 'I think … will …', '… won’t …'], ex: 'The streets will be empty. I think people will stay home. The shops won’t open.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_caca', GX_EXPLICA); };
