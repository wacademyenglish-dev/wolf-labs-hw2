/* ============================================================
   DISCLOSURE DAY · THE WORLD CLOCKS · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · future continuous: will be + -ing (a cena que vai estar
   acontecendo num momento do futuro: this time tomorrow, at nine);
   won’t be + -ing; a pergunta educada (Will you be using…?); onde ele
   para: verbo de estado (will know, nunca will be knowing).
   Erros: will + -ing sem be (will reading), will be + verbo base (will
   be read), presente no lugar do futuro (are talking this time
   tomorrow), pergunta sem inversão (You will be using…?), verbo de
   estado no contínuo (will be knowing).
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo SESSÃO.
   A tela forte: o relógio mundial. Oito relógios de ponteiro, oito
   cidades, cada um na hora local de amanhã; cada frase certa gira os
   ponteiros uma volta inteira (vinte e quatro horas) e acende o
   mostrador com a cena. No fim, todos piscam juntos: é o mesmo
   instante no mundo inteiro, o dia da revelação.
   O AQUECIMENTO (aquece.js): a imagem, o quarto do motel às duas da
   manhã. O FECHAMENTO: escrita, This Time Tomorrow, vai para My notes.
   O VÍDEO: SCYT8vb2siQ (trailer oficial Universal, 2:38, idade 0, embed
   sim). Tenso, não gráfico: uma perseguição, um salto do trem. Falas
   conferidas na legenda oficial (24/09); o trecho do trem tem tempo
   ESTIMADO, e cada momento é contado com palavras nossas.
   A CARA: estrada de madrugada, mel das lâmpadas de sódio, azul frio da
   tevê; Michroma nos títulos, Newsreader no texto. A antiga era o
   quarto 12 do motel.
   Fila: FILA-LIVE-386.md · 298.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js), mesmas 9 páginas:
   III som parecido + palavra errada no minuto do trailer (FM.som, FM.erro);
   V a mensagem das 2h04 (FM.carta, cara de tela) → a regra; VI seis
   relógios em que o FUSO decide: a pista dá a cidade, a hora local e a
   agenda da pessoa, e o aluno descobre o que ela vai estar fazendo
   (FM.fala); VII Ask Me (FM.pergunta, não é mais EXTRA); VIII A ou B +
   um minuto de escrita para o My notes.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'motel', rot: 'I · Warm-up and Tomorrow’s Paper', t: 'Before the trailer: your tomorrow, then the day the world finds out.', p: 'Answer three questions about your life. Then pick a story in tomorrow’s paper and say what people will be doing.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Disclosure Day. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'trem', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 7, img: 'motel', rot: 'V · The 2 a.m. Message', t: 'At 2:04 a.m., a message goes out to the whole world.', p: 'Read the message out loud. Tap the verbs about tomorrow. Then finish the rule.' },
  { k: 'relogios', est: 'o', min: 8, img: 'capa', rot: 'VI · The World Clocks', t: 'The truth comes out at 9 a.m. in Kansas City. Six cities, one moment.', p: 'Read the local time and the person’s day. Say what they will be doing at that moment. Then tap Check.' },
  { k: 'amanha', est: 'o', min: 7, img: 'trem', rot: 'VII · Ask Me', t: 'Now you ask. What will your teacher be doing tomorrow?', p: 'Say each question out loud. Tap Check. Then ask it, and compare your tomorrows.' },
  { k: 'saida', est: 'w', min: 8, img: 'capa', rot: 'VIII · This Time Tomorrow', t: 'Last scene. The teacher picks A or B.', p: 'Talk for three minutes. Then one minute to write about your tomorrow. It goes to your My notes.' }
];

var FILME = 'Disclosure Day', ANO = '2026';
var YT = 'SCYT8vb2siQ', DUR = 158;

var ENCARTE = [
  ['The film', '<i>Disclosure Day</i> (2026) is a Steven Spielberg film, with Emily Blunt and Josh O’Connor. Spielberg made <i>Close Encounters</i> and <i>E.T.</i>, and here he goes back to the sky.'],
  ['The secret', 'A man has stolen secret data: proof that we are not alone, and that the truth has been hidden for a very long time.'],
  ['The day', 'He has a plan: full disclosure, to the whole world, at the same moment. If he does it, there is no going back. Some people want to stop him.']
];

var ANTES = [
  { q: 'If the truth about aliens came out tomorrow, would you believe it?', h: 'Yes, I would … / No, I wouldn’t …' },
  { q: 'Where do you get your news? TV, phone, friends?', h: 'I usually …' }
];
var DEPOIS = [
  { q: 'What will people be doing the day after the disclosure?', h: 'They will be … / Nobody will be …' },
  { q: 'Is the man a hero or a criminal? Why?', h: 'He is a … because …' }
];

var TRECHOS = [
  { k: 'Secrets', ini: 0, fim: 24, ouvir: 'What did the man steal?', sentido: 'A man says he stole secrets: the data he was paid to protect. Someone asks if “they” are people. The answer is no.', gram: 'Soon, everybody <b>will be talking</b> about it.' },
  { k: 'Good morning', ini: 26, fim: 48, ouvir: 'Who is the woman, and where is she?', sentido: 'A TV reporter starts the morning news in Kansas City, and something goes very wrong while she is on air.', gram: 'Tomorrow at nine, she <b>will be reading</b> the news again.' },
  { k: 'Gibberish', ini: 48, fim: 66, ouvir: 'Who can understand her?', sentido: 'Her words turn into strange sounds. Nobody in the studio understands them, but one person can.', gram: 'Scientists <b>will be studying</b> her words for years.' },
  { k: 'Full disclosure', ini: 90, fim: 112, ouvir: 'What is his plan?', sentido: 'He says the lies have to end. The plan: full disclosure, to the whole world. If he does it, there is no undoing it.', gram: 'This time tomorrow, the whole world <b>will be watching</b>.' },
  { k: 'Don’t let go', ini: 112, fim: 145, ouvir: 'What happens on the train?', sentido: 'A jump from a train, a chase, and a promise: whatever happens, don’t let go. (Times estimated.)', gram: 'They <b>will be running</b> all night.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* III · depois do trailer: sons parecidos e a palavra errada, cada um no minuto do trailer (legenda-dados.js) */
var SOM = [
  { a: 'What did you ', par: ['still', 'steal'], c: 1, b: '?', t: '0:01' },
  { a: 'I ', par: ['can', 'can’t'], c: 1, b: ' understand it.', t: '0:53' },
  { a: 'I’m just sorry they made you a ', par: ['part', 'path'], c: 0, b: ' of it too.', t: '1:07' },
  { a: 'When the time is right, everything ', par: ['would', 'will'], c: 1, b: ' become clear.', t: '2:11' }
];
var ERRO = [
  { f: 'Secrets. The data they paid me to <u>sell</u>.', r: 'protect', t: '0:04' },
  { f: 'Good <u>evening</u>, Kansas City.', r: 'morning', t: '0:29' },
  { f: 'Hello, Jane. Please, have a <u>coffee</u>.', r: 'seat', t: '1:12' },
  { f: 'Full disclosure to the whole <u>country</u>.', r: 'world', t: '1:39' }
];
/* V · a mensagem das 2h04 (texto nosso, no mundo do filme) → a regra */
var CARTA = { de: 'MESSAGE · SENT 2:04 A.M. · TO: EVERYONE',
  txt: 'This time tomorrow, the whole world [[will be watching]]. At nine, the TV stations [[will be showing]] the files, and the scientists [[will be reading]] them on air. I [[won’t be hiding]] anymore. Some of you [[will be asking]]: is it true? By tomorrow night, you [[will know]]. And to the people who are looking for me now: [[will you be watching]] too?' };
var REGRA = [
  { a: 'Form: will + ', par: ['verb-ing', 'be + verb-ing'], c: 1, b: ' (will be watching)' },
  { a: 'Use: an action ', par: ['in progress', 'finished'], c: 0, b: ' at a moment in the future (this time tomorrow, at nine)' },
  { a: 'Negative: I ', par: ['won’t be hiding', 'won’t hiding'], c: 0, b: ' anymore' },
  { a: 'The polite question: ', par: ['You will be', 'Will you be'], c: 1, b: ' watching too?' },
  { a: 'Know, believe, want: no -ing. Tomorrow you ', par: ['will know', 'will be knowing'], c: 0 }
];
var PRESA = 'will <b>be</b> + verb<b>-ing</b><br>this time tomorrow · at nine<br><b>won’t be</b> + verb-ing<br><b>Will you be</b> …ing? (polite)<br>will <b>know</b> (no -ing)';
/* VII · Ask me */
var PERGUNTAS = [
  { p: '(what · do · at 7 a.m. tomorrow)?', r: 'What <b>will you be doing</b> at 7 a.m. tomorrow?' },
  { p: '(where · have lunch · tomorrow)?', r: 'Where <b>will you be having</b> lunch tomorrow?' },
  { p: '(use · your car · tomorrow night) · polite', r: '<b>Will you be using</b> your car tomorrow night?' },
  { p: '(work · next Saturday)?', r: '<b>Will you be working</b> next Saturday?' },
  { p: '(where · live · this time next year)?', r: 'Where <b>will you be living</b> this time next year?' }
];
/* VIII · A ou B */
var OPA = { t: 'Live on TV, tomorrow at nine.', d: 'You are the reporter. The teacher is the man with the files, in the studio. Ask him: what will people be doing when the truth comes out?', st: ['Will you be …?', 'This time tomorrow, people will be …', 'Everybody will know …'] };
var OPB = { t: 'Your tomorrow, hour by hour.', d: 'Walk the teacher through your tomorrow: 7 a.m., lunch, 3 p.m., 9 p.m. At each stop, the teacher asks one polite question.', st: ['At seven, I’ll be …', 'I won’t be …', 'Will you be … at nine?'] };

/* o relógio mundial: o gesto forte */
var CIDADES = [
  { cid: 'Kansas City', h: 9, m: 0, hora: '9:00 a.m.', cena: 'reading the news', quem: 'the TV reporter', plano: ['7:00 coffee with the team', '8:00 to 10:00 the morning news, live', '10:30 a meeting'], resp: 'At nine, the reporter <b>will be reading</b> the news, live on TV.', depois: 'What will you be doing at nine tomorrow morning?' },
  { cid: 'London', h: 15, m: 0, hora: '3:00 p.m.', cena: 'at the museum', quem: 'Tom, a teacher', plano: ['9:00 to 12:00 classes', '12:00 lunch', '1:00 to 4:00 a school trip to the museum'], resp: 'Tom <b>will be visiting</b> the museum with his students.', depois: 'Where will you be at three tomorrow afternoon?' },
  { cid: 'Tokyo', h: 23, m: 0, hora: '11:00 p.m.', cena: 'sleeping', quem: 'Yuki', plano: ['7:00 p.m. dinner', '9:00 p.m. her TV show', '10:30 p.m. bed'], resp: 'Yuki <b>will be sleeping</b>. She <b>won’t be watching</b> the news.', depois: 'What won’t you be doing tomorrow night?' },
  { cid: 'Rio', h: 11, m: 0, hora: '11:00 a.m.', cena: 'at the hospital', quem: 'Ana, a doctor', plano: ['7:00 the gym', '9:00 to 1:00 the hospital', '6:00 p.m. the beach'], resp: 'Ana <b>will be working</b> at the hospital.', depois: 'Who in your family will be working at that moment?' },
  { cid: 'Paris', h: 16, m: 0, hora: '4:00 p.m.', cena: 'in the park', quem: 'Léa, a chef', plano: ['11:00 to 2:00 lunch at the restaurant', '2:00 to 5:00 free: a walk in the park', '6:00 dinner at the restaurant'], resp: 'Léa <b>will be walking</b> in the park.', depois: 'Ask the teacher, politely: “Will you be using your phone tonight?”' },
  { cid: 'New York', h: 10, m: 0, hora: '10:00 a.m.', cena: 'on the subway', quem: 'Mike', plano: ['9:30 he leaves home', '9:40 to 10:20 the subway', '10:30 the office'], resp: 'Mike <b>will be taking</b> the subway to work.', depois: 'How will you be getting to work or school tomorrow?' }
];
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} } };

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
/* um relógio de ponteiro: doze marcas, o ponteiro das horas na hora local de amanhã */
function mostrador(h, m) {
  var marcas = '';
  for (var i = 0; i < 12; i++) { var a = i * 30 * Math.PI / 180; marcas += '<line x1="' + (50 + 38 * Math.sin(a)).toFixed(1) + '" y1="' + (50 - 38 * Math.cos(a)).toFixed(1) + '" x2="' + (50 + (i % 3 ? 42 : 44) * Math.sin(a)).toFixed(1) + '" y2="' + (50 - (i % 3 ? 42 : 44) * Math.cos(a)).toFixed(1) + '"/>'; }
  var ah = (h % 12) * 30 + m / 2, am = m * 6;
  return '<svg viewBox="0 0 100 100" aria-hidden="true"><circle class="dd-aro" cx="50" cy="50" r="47"/><g class="dd-marcas">' + marcas + '</g>'
    + '<g class="dd-ph" style="--a:' + ah + 'deg"><line x1="50" y1="54" x2="50" y2="28"/></g><g class="dd-pm" style="--a:' + am + 'deg"><line x1="50" y1="56" x2="50" y2="14"/></g><circle class="dd-eixo" cx="50" cy="50" r="2.6"/></svg>';
}
/* o relógio mundial: oito cidades; cada frase certa gira o ponteiro uma volta e acende o mostrador com a cena */
function relogios(feitas, atual, nova) {
  var fim = feitas >= CIDADES.length;
  var rs = CIDADES.map(function (c, i) {
    var cls = i < feitas ? (nova && i === feitas - 1 ? ' aceso novo' : ' aceso') : (i === atual ? ' vez' : '');
    return '<div class="dd-rel' + cls + '">' + mostrador(c.h, c.m) + '<b>' + c.cid + '</b><small>' + (i < feitas ? c.cena : c.hora) + '</small></div>';
  }).join('');
  return '<div class="dd-parede vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The world clocks: ' + feitas + ' of ' + CIDADES.length + ' cities"><div class="dd-topo"><b>Tomorrow · same moment</b><small>local time in each city</small></div><div class="dd-grade" style="grid-template-columns:repeat(3,1fr)">' + rs + '</div>'
    + '<p class="dd-legenda">' + (fim ? 'Six cities, one moment. Disclosure day.' : feitas + ' of ' + CIDADES.length + ' cities set') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · future continuous · will be + -ing</span><h1>This Time Tomorrow</h1>'
    + '<p class="banda">' + FILME + ' · Steven Spielberg</p>'
    + '<p class="sub">Tomorrow the whole world will hear the truth, at the same moment. Tonight you set six clocks in six cities and say what people will be doing when it happens: a reporter in Kansas City, a teacher in London, a doctor in Rio.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Set the clocks</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r dd-foto"><img src="' + img('capa') + '" alt="An empty highway across farmland at night under a strange white light inside the clouds"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="dd-encarte vd"><div class="dd-capinha"><img src="' + img('motel') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>Room 12, 2 a.m.</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="dd-centro"><div class="pergunta vd ja"><small>Talk</small><h2>The truth comes out tomorrow at nine. What will you be doing at that moment?</h2></div>' + mostra('enc', 'I will be working, so I will be watching it on my phone!', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>Before you watch · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.r || a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="dd-selo vd"><b>' + FILME + '</b><small>the official trailer · tense, not graphic · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="dd-video"><div class="dd-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="dd-cred">' + FILME + ' · official trailer (Universal)</small></div><div class="lado-l">' + FM.som('som', SOM) + FM.erro('erro', ERRO) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer: talk</button></div></div></div>';
  else corpo = '<div class="mesa-c">' + DEPOIS.map(function (a, i) { return '<div class="lado-l"><div class="pergunta vd ja"><small>After · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('vb' + i, a.r || a.h, 1) + '</div>'; }).join('') + '</div>';
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
  return cab(c) + FM.carta('carta', CARTA, REGRA, { papel: 'tela', toque: 'Tap the verbs about tomorrow', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

/* a pista: a cidade e a hora local; embaixo, o dia da pessoa. A hora decide a frase. */
var PLANO = 'display:block;margin-top:10px;font:500 .6em/1.5 var(--ui);letter-spacing:0;color:var(--t2)';
R.relogios = function (c) {
  return cab(c) + FM.fala('relogios', CIDADES.map(function (x) {
    return { pista: '<span class="ano">' + x.cid + ' · ' + x.hora + '</span>' + x.quem + '<span style="' + PLANO + '">' + x.plano.join(' · ') + '</span>', resp: x.resp, depois: x.depois };
  }), {
    rotulo: 'City', prox: 'Next city', regra: PRESA,
    lado: function (feitas, atual, nova) { return relogios(feitas, atual, nova); },
    fim: 'All six clocks are set: one moment, everywhere. Now your city: what time will it be there, and what will you be doing?'
  });
};

R.amanha = function (c) {
  return cab(c) + FM.pergunta('ask', PERGUNTAS, { regra: PRESA, depoisRot: 'Then compare', depois: ['Me too! I’ll be …', 'You’ll be …, but I’ll be …', 'I won’t be …'] });
};

R.saida = function (c) {
  return cab(c) + FM.ab('ab8', OPA, OPB) + FM.reflexao('saida', [['This time tomorrow', 'I will be …'], ['One polite question', 'Will you be …?'], ['One thing', 'that was hard today…']], ['This time tomorrow, I will be …', 'At nine, my family will be …', 'Will you be … tomorrow?'])
    + '<p class="hw" style="text-align:center;margin-top:14px"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'imagem', img: 'motel', alt: 'A small motel room at 2 a.m. with an old TV glowing with static', rotulo: 'Room 12, 2 a.m.', rot: 'I · Room 12', t: 'Before the trailer: a motel room at 2 a.m.', p: 'One question at a time. The student answers; then the teacher answers too.',
  itens: [
    { q: 'It is 2 a.m. and this TV turns on by itself. What do you do?', ex: 'I turn it off and call my brother. Or I run!' },
    { q: 'This time tomorrow, what will you be doing?', ex: 'I will be working at the office.' },
    { q: 'Do you think the truth about aliens is hidden somewhere?', ex: 'Maybe. Some people must know something.' }
  ] };
/*AQ@@*/
