/* ============================================================
   THE OFFICE · THE TIME CARD · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · at (horas, at night), on (dias, datas), in (meses, anos,
   partes do dia, "in ten minutes"); em português é tudo "em / às / de".
   Erros: in 9 a.m., on 9 a.m., in Friday, at Friday, on March, at
   March, on the afternoon, at the afternoon, in December 24th, at
   December 24th, in the night, on night, after ten minutes (= in ten
   minutes).
   Catálogo WOLFLIX Live (07/10): família SITCOM, modo SALA DE ROTEIRO.
   A tela forte: o cartão de ponto da Dunder Mifflin e o relógio da
   parede. Cada frase certa bate o ponto numa linha do cartão (a hora
   carimbada em tinta roxa) e os ponteiros do relógio andam até as
   cinco. (A 269 é a outra aula da série: o mural de memorandos; a 073
   da Main series é um mural de agenda; esta é o cartão de ponto e o
   relógio, outra cara.)
   O AQUECIMENTO (aquece.js): a escala. O FECHAMENTO (final.js): a
   entrevista, o professor é a Erin na recepção.
   O VÍDEO: OHZIHsXD5q8 (Peacock oficial, "Most Watched Cold Opens",
   embed sim), trecho 13:32 a 15:22, a abertura do trote do horário.
   O canal da série não toca em embed. Tempos da legenda (24/09); cada
   momento contado com palavras nossas.
   A CARA: escritório ao entardecer, manila escuro, azul Dunder, tinta
   roxa de carimbo; Zilla Slab + IBM Plex Sans Condensed + Share Tech
   Mono. A antiga era o estúdio de legenda.
   Fila: FILA-LIVE-386.md · 283.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: uma régua; verdadeiro ou mentira e a palavra que você ouviu,
   com ▶ nas falas do clipe (legenda-dados.js); separar at / on / in + um
   toque de opinião; V: o quadro do escritório com cinco erros (achar e dizer
   a certa), a regra aparece depois do Check; VI: o cartão de ponto falado
   (fala + placa; 6 linhas, o relógio anda a cada Check); VII (era EXTRA):
   três pessoas perguntam, a reação muda a conversa.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'rua', rot: 'I · Warm-up and Jim’s Phone', t: 'Before the clip: your times and days, then one long afternoon.', p: 'Answer three questions about your life. Then read Jim’s messages out loud and say what is happening, and when.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Clip', t: 'The Office. The time prank.', p: 'Answer first. Watch the clip. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'relogio', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 5, img: 'relogio', rot: 'V · At, On or In?', t: 'Three small words. Three kinds of time.', p: 'Look at the three kinds of time. Tap the word for each sentence. Then say three of your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'rua', rot: 'VI · At, On, In', t: 'The office board has five mistakes. Find the fix.', p: 'Say the right word for each mistake out loud. Then tap Check and read the rule.' },
  { k: 'ponto', est: 'o', min: 7, img: 'capa', rot: 'VII · The Time Card', t: 'Punch the card. Every right sentence moves the clock to five.', p: 'Read the line and the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'semana', est: 'o', min: 7, img: 'relogio', rot: 'VIII · Your Week', t: 'Three people ask you about time. How do you answer?', p: 'Read what they say. Pick how you answer. Then read the talk out loud.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Interview', t: 'The interview.', p: 'Interview.' }
];

var SERIE = 'The Office', ANO = '2010';
var YT = 'OHZIHsXD5q8', DUR = 922;

var ENCARTE = [
  ['The show', '<i>The Office</i> is an American comedy (NBC, 2005–2013). It is filmed like a documentary about a small paper company in Scranton, Pennsylvania.'],
  ['The boss', 'Michael Scott is the boss. One day he eats a whole chicken pot pie for lunch and falls asleep at his desk in the afternoon.'],
  ['The prank', 'Nobody wants to wake him up. So Jim changes the clock on his computer, Dwight changes his watch, and Michael wakes up and thinks it is five o’clock.']
];

var ANTES = [
  { q: 'What time do you usually finish work or school?', h: 'I finish at …' },
  { q: 'Do you ever sleep in the afternoon? When?', h: 'Yes, on Sundays. / No, never.' }
];
var DEPOIS = [
  { q: 'What time does Michael think it is?', h: 'He thinks it is five o’clock.' },
  { q: 'Is the prank funny or mean? Why?', h: 'It is … because …' }
];

var TRECHOS = [
  { k: 'The phone', ini: 812, fim: 829, ouvir: 'Who answers the phone?', sentido: 'Erin, at the front desk, answers the phone with the name of the company.', gram: 'She works <b>at</b> the front desk.' },
  { k: 'The pot pie', ini: 829, fim: 845, ouvir: 'What did Michael have for lunch?', sentido: 'Erin explains that Michael ate a whole chicken pot pie for lunch, and now he is asleep. Nobody can wake him before five.', gram: 'He fell asleep <b>in</b> the afternoon.' },
  { k: 'The clocks', ini: 845, fim: 870, ouvir: 'What do Jim and Dwight change?', sentido: 'Jim goes in to change the clock on the computer, and Dwight changes Michael’s watch. Five o’clock is in about ten minutes.', gram: 'Five o’clock is <b>in</b> about ten minutes.' },
  { k: 'Like clockwork', ini: 870, fim: 900, ouvir: 'Does the plan work?', sentido: 'Michael wakes up, looks at the clock, and believes it is the end of the day. The plan works perfectly.', gram: 'He wakes up <b>at</b> “five”.' },
  { k: 'Home', ini: 900, fim: 922, ouvir: 'What does Michael say to everybody?', sentido: 'Michael tells everybody to go home, and says goodbye with a silly joke.', gram: 'They go home <b>at</b> five, <b>on</b> a normal Tuesday.' }
];

var TRAPS = [
  ['Hours: at', 'The meeting is in 9 a.m.', 'The meeting is <b>at</b> 9 a.m.', 'at 9 a.m. · at five o’clock · at night · at lunch'],
  ['Days and dates: on', 'His birthday is in Friday.', 'His birthday is <b>on</b> Friday.', 'on Friday · on March 3rd · on the weekend (US)'],
  ['Months, years, parts of the day: in', 'He sleeps on the afternoon.', 'He sleeps <b>in</b> the afternoon.', 'in March · in 2010 · in the morning'],
  ['From now: in', 'Five o’clock is after ten minutes.', 'Five o’clock is <b>in</b> ten minutes.', 'in ten minutes = ten minutes from now']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>at</b> 9 a.m. · <b>at</b> five · <b>at</b> night<br><b>on</b> Friday · <b>on</b> December 24th<br><b>in</b> March · <b>in</b> the afternoon<br><b>in</b> ten minutes (from now)';
/* III · antes: uma régua */
var VD_REG_A = { formato: 'regua', titulo: 'Before you watch', frase: 'It’s normal to sleep at your desk in the afternoon.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why: I sleep at … / On weekends I … / In the afternoon I …' };
/* III · durante: verdadeiro ou mentira e a palavra que você ouviu, cada um no minuto do clipe (legenda-dados.js, tempos do vídeo inteiro) */
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Michael ate an entire chicken pot pie for lunch.', t: true, tm: '13:52' },
  { f: 'Everybody is trying to be very loud, so Michael wakes up.', t: false, tm: '14:03', c: 'It says: “we’re all trying to be very quiet so as to not wake him up before 5 PM.”' },
  { f: 'Somebody has an appointment with the horse doctor.', t: true, tm: '14:23' },
  { f: 'At the end, somebody says: “See you all on Friday.”', t: false, tm: '15:12', c: 'It says: “See you all tomorrow.”' }
] };
var VD_SOM = { formato: 'som', itens: [
  { a: 'Michael ate an entire family-sized chicken pot pie for ', par: ['lunch', 'launch'], c: 0, b: '.', t: '13:57' },
  { a: 'We’re all trying to be very ', par: ['quiet', 'quite'], c: 0, b: '.', t: '14:03' },
  { a: 'I have an ', par: ['appointment', 'apartment'], c: 0, b: ' with the horse doctor.', t: '14:23' }
] };
/* III · depois: separar at / on / in + um toque de opinião */
var VD_SEP = { formato: 'separa', titulo: 'At, on or in? Sort them.', caixas: ['at', 'on', 'in'], itens: [
  { t: 'five o’clock', c: 0 }, { t: 'Friday', c: 1 }, { t: 'the afternoon', c: 2 }, { t: 'night', c: 0 }, { t: 'December 24th', c: 1 }, { t: 'March', c: 2 }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'Is the prank funny or mean? Tap one.', itens: [
  { p: 'Jim changes the clock, and Michael thinks it is five o’clock.', o: ['Funny', 'Mean', 'Both'], c: -1, d: 'Say why: It is … because … Try: in the afternoon, at five, in ten minutes.' }
] };
/* V · o quadro do escritório com cinco erros */
var ERROS = { formato: 'erro', titulo: 'The office board has five mistakes. Say the right word.', itens: [
  { f: 'The meeting is <u>in</u> 9 a.m.', r: 'at' },
  { f: 'His birthday is <u>at</u> Friday.', r: 'on' },
  { f: 'Michael sleeps <u>on</u> the afternoon.', r: 'in' },
  { f: 'The office is quiet <u>in</u> the night.', r: 'at' },
  { f: 'Five o’clock is <u>after</u> ten minutes.', r: 'in' }
] };
/* VI · o cartão de ponto falado: seis linhas, o relógio anda a cada Check */
var PONTOS = [
  { hora: '9:00', prep: 'at', linha: 'the morning meeting', pista: 'the meeting · 9 a.m.', resp: 'The meeting is <b>at</b> 9 a.m.', depois: 'What time do you start work or school?' },
  { hora: '10:30', prep: 'on', linha: 'Dwight’s birthday', pista: 'Dwight’s birthday · Friday', resp: 'Dwight’s birthday is <b>on</b> Friday.', depois: 'When is your birthday? On what day this year?' },
  { hora: '11:15', prep: 'in', linha: 'the big paper sale', pista: 'the paper sale · March', resp: 'The paper sale is <b>in</b> March.', depois: 'What is your favorite month? What happens in it?' },
  { hora: '2:30', prep: 'on', linha: 'the Christmas party', pista: 'the party · December 24th', resp: 'The party is <b>on</b> December 24th.', depois: 'What do you do on December 24th?' },
  { hora: '4:50', prep: 'at', linha: 'the empty office', pista: 'the office · quiet · night', resp: 'The office is quiet <b>at</b> night.', depois: 'What do you do at night when everybody is asleep?' },
  { hora: '5:00', prep: 'in', linha: 'five o’clock, almost', pista: 'five o’clock · about ten minutes from now', resp: 'Five o’clock is <b>in</b> about ten minutes.', depois: 'The card is full and it’s five! What will you do in ten minutes?' }
];
/* VII · três pessoas perguntam: a reação muda a conversa */
var CS = [
  { k: 'cs1', titulo: 'Person 1 · A coworker', quem: 'Coworker', fala: '“We need a meeting. When is good for you?”', reacoes: [
    ['Early', 'How about at 8 a.m.?', 'At 8? OK, but I need coffee first.'],
    ['Later', 'Let’s do it in the afternoon, at three.', 'At three works. See you in the conference room.'],
    ['Another day', 'Not today. Let’s do it on Monday.', 'On Monday? Sure. I’ll send the invite.']] },
  { k: 'cs2', titulo: 'Person 2 · A friend', quem: 'Friend', fala: '“Your birthday is coming! When is the party?”', reacoes: [
    ['This week', 'It’s on Saturday, at 8 p.m.', 'Perfect! On Saturday I’m free.'],
    ['This season', 'It’s in July, on my birthday.', 'In July? It’s so hot then. A pool party!'],
    ['Soon', 'It’s in two weeks, on the weekend.', 'In two weeks! I need to buy a present.']] },
  { k: 'cs3', titulo: 'Person 3 · The boss', quem: 'Michael', fala: '“What time is it? Is it five o’clock yet?”', reacoes: [
    ['Honest', 'No, it’s only three. Five o’clock is in two hours.', 'Two hours? That’s a long time.'],
    ['Prank', 'Yes! It’s five. Everybody goes home at five.', 'Great! See you all tomorrow!'],
    ['Kind', 'Take a nap. I’ll wake you up in ten minutes.', 'In ten minutes? Thanks, you’re a good friend.']] }
];

/* o cartão de ponto: o gesto forte */
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
  return '<div class="of-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
function minutos(h) { var p = h.split(':'); return (+p[0] % 12) * 60 + (+p[1]); }
/* o relógio da parede (sem números, só marcas) e o cartão de ponto ao lado: cada linha batida ganha a palavra e a hora carimbada; o relógio mostra a hora da última batida */
function cartao(feitas, atual, nova) {
  var t = feitas ? minutos(PONTOS[feitas - 1].hora) : minutos('8:45');
  var aH = t / 720 * 360, aM = (t % 60) / 60 * 360, marcas = '';
  for (var i = 0; i < 12; i++) { var a = i * 30 * Math.PI / 180; marcas += '<line x1="' + (60 + 46 * Math.sin(a)).toFixed(1) + '" y1="' + (60 - 46 * Math.cos(a)).toFixed(1) + '" x2="' + (60 + 52 * Math.sin(a)).toFixed(1) + '" y2="' + (60 - 52 * Math.cos(a)).toFixed(1) + '"/>'; }
  var relogio = '<svg class="of-relogio" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="57" class="aro"/><circle cx="60" cy="60" r="54" class="mostrador"/>' + marcas
    + '<line class="hora" x1="60" y1="60" x2="60" y2="32" style="transform:rotate(' + aH + 'deg)"/><line class="min" x1="60" y1="60" x2="60" y2="16" style="transform:rotate(' + aM + 'deg)"/><circle cx="60" cy="60" r="3.5" class="eixo"/></svg>';
  var linhas = PONTOS.map(function (p, i) {
    var cls = i < feitas ? (nova && i === feitas - 1 ? ' ok novo' : ' ok') : (i === atual ? ' vez' : '');
    return '<li class="of-linha' + cls + '"><span class="of-oque">' + p.linha + '</span><b class="of-prep">' + (i < feitas ? p.prep : '—') + '</b><span class="of-carimbo">' + (i < feitas ? p.hora : '') + '</span></li>';
  }).join('');
  return '<div class="of-ponto vd" role="img" aria-label="The time card: ' + feitas + ' of ' + PONTOS.length + ' punched">' + relogio
    + '<div class="of-cartao"><div class="of-topo"><b>Time card</b><small>Dunder Mifflin · Scranton branch</small></div><ol>' + linhas + '</ol></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · at · on · in · time</span><h1>In About Ten Minutes</h1>'
    + '<p class="banda">' + SERIE + ' · season 7</p>'
    + '<p class="sub">The boss ate a whole chicken pot pie and fell asleep at his desk. Nobody wants to wake him up before five o’clock. Tonight you punch the office time card: at, on, in, one line at a time, until the clock says five.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Clock in</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r of-foto"><img src="' + img('capa') + '" alt="An empty paper company office at dusk with old desks and orange light through the blinds"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="of-encarte vd"><div class="of-capinha"><img src="' + img('rua') + '" alt=""><div><small>' + SERIE + ' · Scranton</small><b>Five o’clock, almost</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="of-centro"><div class="pergunta vd ja"><small>Talk</small><h2>What time is the hardest part of your day? Why?</h2></div>' + mostra('enc', 'At three in the afternoon. After lunch I am always sleepy!', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REG_A) + '</div>'
    + '<div class="lado-l"><div class="of-selo vd"><b>' + SERIE + '</b><small>the time prank · a cold open · about two minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the clip now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="of-video"><div class="of-vcol">' + iframe(YT, SERIE + ' · the time prank', '&start=812&end=922') + '<small class="of-cred">' + SERIE + ' · official clip (Peacock) · 13:32 to 15:22 · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vm', VD_VM) + FM.ex('som', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the clip</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('sep', VD_SEP) + '</div><div class="lado-l">' + FM.ex('esc', VD_ESC) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="of-video"><div class="of-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="of-cred">' + Math.floor((x.ini - 812) / 60) + ':' + ('0' + (x.ini - 812) % 60).slice(-2) + ' to ' + Math.floor((x.fim - 812) / 60) + ':' + ('0' + (x.fim - 812) % 60).slice(-2) + ' of the cold open · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="of-sentido">' + x.sentido + '</span><span class="of-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="of-centro"><p class="of-dica">Tap a frame to open that moment of the clip.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).err, ver = !!(e && e.ver);
  return cab(c) + '<div class="of-centro">' + FM.ex('err', ERROS)
    + (ver ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Say the five fixes, tap Check, and the rule appears.</p>') + '</div>';
};

R.ponto = function (c) {
  return cab(c) + FM.fala('ponto', PONTOS.map(function (p) { return { pista: p.pista, resp: p.resp, depois: p.depois }; }), {
    rotulo: 'Line', prox: 'Punch the next line', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + cartao(feitas, atual, atual >= 0 ? nova : 0) + '</div>'; },
    fim: 'Five o’clock! The card is full. Now read the day back to the teacher, line by line, with at, on and in.'
  });
};

R.semana = function (c) {
  return cab(c) + comPlaca(CS.map(function (x) { return FM.ex(x.k, { formato: 'reacao', titulo: x.titulo, quem: x.quem, fala: x.fala, reacoes: x.reacoes }); }).join(''), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="of-centro"><p class="of-dica">The interview.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'escala', rot: 'I · Your Clock', t: 'Before the clip: how true is it for you?', p: 'Mark a number for each sentence and say why. The teacher marks theirs too.', rotulos: ['Not true', 'Very true'],
  itens: [
    { q: 'I am always on time.', ex: '8. I hate being late.' },
    { q: 'I feel sleepy after lunch.', ex: '10! Every day at two o’clock.' },
    { q: 'I look at the clock a lot at work or school.', ex: '6. On Fridays, a lot!' },
    { q: 'I like pranks at work.', ex: '3. Only small ones.' },
    { q: 'I go to bed early on weeknights.', ex: '2. No, I go to bed at midnight.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'entrevista', rot: 'VIII · The Interview', t: 'Interview Erin at the front desk.', p: 'The teacher is Erin, the receptionist. Ask about times and days with at, on and in. Then swap: you talk about your own week.',
  papel: 'Erin, the receptionist at Dunder Mifflin', papel2: 'you, about your own week',
  itens: [
    { q: 'What time do you start work?', ex: 'I start at nine, but I arrive at 8:45.' },
    { q: 'What do you do on Fridays?', ex: 'On Fridays I order pizza for the office.' },
    { q: 'When is the next office party?', ex: 'It’s in December. On the 23rd, I think.' },
    { q: 'What happens in the afternoon?', ex: 'In the afternoon Michael sleeps. Shh!' },
    { q: 'When does everybody go home today?', ex: 'At five. In about ten minutes, really.' }
  ] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'At, on or in? Three kinds of time.',
  usos: [
    { t: 'AT · A POINT', f: 'Jim starts the prank <b>at</b> 4:15 PM.', d: 'A clock time. Also at night, at noon.' },
    { t: 'ON · A DAY', f: 'The office party is <b>on</b> Friday.', d: 'A day or a date: on Friday, on March 3rd.' },
    { t: 'IN · A LONG TIME', f: 'Dwight comes back <b>in</b> ten minutes.', d: 'A month, a year, a part of the day, or time from now.' }
  ],
  pergunta: 'Which word is it?',
  itens: [
    { f: 'The meeting is ___ 9 AM.', c: 0 },
    { f: 'Pam’s birthday is ___ October.', c: 2 },
    { f: 'The clock hits five ___ Monday.', c: 1 },
    { f: 'Michael calls ___ the afternoon.', c: 2 },
    { f: 'Everyone goes home ___ 5 PM.', c: 0 },
    { f: 'The party is ___ December 24th.', c: 1 }
  ],
  nota: 'A clock time: <b>at</b>. A day or a date: <b>on</b>. A month, a year, a part of the day or “from now”: <b>in</b>. Careful: <b>at</b> night, but <b>in</b> the morning.',
  uso: { p: 'Your turn. Three sentences about your week: a clock time, a day, and a month.', molde: ['I wake up at …', 'On … I …', 'In … I …'], ex: 'I wake up at 7 AM. On Fridays I go to the gym. In July I travel.' },
  prof: 'Read the three kinds of time out loud. The student taps at, on or in. The kinds are the rule.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
