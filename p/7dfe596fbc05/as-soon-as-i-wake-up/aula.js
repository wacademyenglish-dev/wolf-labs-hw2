/* ============================================================
   AS SOON AS I WAKE UP · THE 5:30 ALARM · LIVE CLASS  05/10/2026
   Main series A2 · as soon as · until · by the time · when / before /
   after (revisão) · o PRESENTE na metade do tempo para falar do futuro
   (I'll call you when I arrive, nunca when I will arrive)
   O MUNDO (da aula velha): laboratório de escuta (vídeo real bq6GBbh3uhU,
   quatro partes) + leitura em seis capítulos da manhã da Lena, enfermeira
   em Chicago; amanhã é o primeiro dia num hospital novo e o despertador
   quebrou. A CARA: o DESPERTADOR digital em CSS (dígitos âmbar) e o
   NASCER DO SOL sobre o horizonte (SVG), que sobe a cada plano certo — o
   céu continua escuro, só a borda clareia. Sem áudio. AULA IRMÃ da Before
   You (A2/before-wolf). Fila: FILA-LIVE-386.md · 046.
   ============================================================ */
var YT = 'bq6GBbh3uhU';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'quarto', rot: 'I · You and Your Mornings', t: 'Before the alarm: you and your mornings.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'palavras', est: 'l', img: 'cozinha', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'cozinha', rot: 'III · The Listening Lab', t: 'Two people talk about their daily routines.', p: 'Four short parts. Tap when, after, before or then every time you hear it.' },
  { k: 'falas', est: 'l', extra: 1, img: 'cozinha', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'relogio', est: 'o', min: 7, img: 'relogio', rot: 'V · Lena’s Morning', t: 'An easy story in six short chapters.', p: 'Tap a time. Read the chapter, answer, then join two actions in one sentence.' },
  { k: 'gx', est: 'f', min: 4, img: 'janela', rot: 'VI · Find the Rule', t: 'Four sentences about tomorrow. You find the rule.', p: 'Read the four sentences out loud. Look at the lit verbs. Choose the rule. Then say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'janela', rot: 'VII · The Rule', t: 'Talking about tomorrow? The time half stays in the present.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'sol', est: 'o', min: 7, img: 'cidade', rot: 'VIII · Before the Sun Comes Up', t: 'Tonight Lena plans her first day.', p: 'Your teacher reads the situation and the first words. You are Lena: finish at once. Each plan lifts the sun.' },
  { k: 'lena', est: 'o', min: 7, extra: 1, img: 'onibus', rot: 'IX · A Call from the Bus', t: 'The next morning, Lena calls you from the bus.', p: 'Your teacher is Lena. You are her friend: answer about your own day.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'relogio', rot: 'X · Quick Check', t: 'Five quick lines about tomorrow morning.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XI · Your Tomorrow', t: 'Plan your real tomorrow morning.', p: 'From the alarm to the door. Use the present for time and will for the plan. It goes to your My notes.' }
];

var ABRE = [
  { k: 'THE ALARM', q: 'What time does your alarm ring? Do you get up right away?', fup: 'How many times do you press snooze?', st: ['At …', 'I press snooze …'], ex: 'At 6:30. I press snooze two times.' },
  { k: 'FIRST THING', q: 'You wake up. What do you do first?', fup: 'And before you leave home?', st: ['As soon as I wake up, I …'], ex: 'As soon as I wake up, I check my phone. I know, it’s bad.' },
  { k: 'A GOOD MORNING', q: 'What makes a morning good for you?', fup: 'And a bad one?', st: ['A good morning is …'], ex: 'Sun, quiet, and no hurry.' }
];
var FORMAS = [{ k: 'when', t: 'WHEN / AFTER / BEFORE + SENTENCE' }, { k: 'assoon', t: 'AS SOON AS / UNTIL' }, { k: 'will', t: 'WHEN I WILL …', erro: 1 }, { k: 'to', t: 'BEFORE TO / AFTER TO', erro: 1 }];

var NOTA = {
  will: 'The time half stays in the present: when I get, as soon as you get up.', going: 'No going to in the time half: present.', sentido: 'Wrong meaning. as soon as = right after; until = all the time up to.',
  to: 'before / after + a full sentence: before she leaves.', ordem: 'Read again: first the water, then the phone.', nao: 'until already has the stop in it. No extra not.',
  by: 'At that moment, or earlier: by the time.', main: 'A plan for tomorrow: the other half needs will.'
};

var PARTES = [
  { k: 'PART 1', ini: 0, fim: 75, q: 'Who is talking? What do they do in the morning?', h: 'Two people. One of them gets up early and has breakfast.' },
  { k: 'PART 2', ini: 75, fim: 150, q: 'What time do they do things? Say one time you heard.', h: 'I heard seven o’clock.' },
  { k: 'PART 3', ini: 150, fim: 225, q: 'Did you hear when, after, before or then? Say a sentence you remember.', h: 'After breakfast, he goes to work.' },
  { k: 'PART 4', ini: 225, fim: 297, q: 'What happens at the end of the day? Is it like your day?', h: 'She goes to bed late, like me.' }
];
var PALAVRAS = ['when', 'after', 'before', 'then'];

var CAPS = [
  { hora: '5:30', tit: 'The Alarm', texto: 'The alarm rings at 5:30. Lena presses snooze. Two times. Then her cat sits on her face.', q: 'Why does Lena finally get up?', ex: 'Because Pickle sits on her face!', ops: [['As soon as Pickle sits on her face, Lena gets up.', 'ok'], ['As soon as Pickle will sit on her face, Lena gets up.', 'will'], ['Until Pickle sits on her face, Lena gets up.', 'sentido']] },
  { hora: '5:40', tit: 'The Water', texto: 'Lena goes to the kitchen. First, a big glass of water. Then she looks at her phone. Never first. That is her one rule.', q: 'What is Lena’s one rule in the morning?', ex: 'Water first, the phone after. Never the phone first.', ops: [['Lena looks at her phone after she drinks a glass of water.', 'ok'], ['Lena looks at her phone after to drink a glass of water.', 'to'], ['Lena looks at her phone before she drinks water.', 'ordem']] },
  { hora: '5:50', tit: 'The Shower', texto: 'The shower is very old. The water is cold at first. At 5:53 it is finally hot.', q: 'What is the problem with the shower?', ex: 'The water is cold at first. She waits three minutes.', ops: [['Lena waits until the water gets hot.', 'ok'], ['Lena waits until the water doesn’t get hot.', 'nao'], ['Lena waits as soon as the water gets hot.', 'sentido']] },
  { hora: '6:10', tit: 'The Note', texto: 'Toast and coffee, standing up. Lena writes a note on the fridge: Buy milk!', q: 'What does Lena write on the note?', ex: 'Buy milk!', ops: [['Before she leaves, Lena writes a note for Gus.', 'ok'], ['Before to leave, Lena writes a note for Gus.', 'to'], ['Before she will leave, Lena writes a note for Gus.', 'will']] },
  { hora: '6:30', tit: 'The Bus', texto: 'The bus is late every morning. Lena reads a book at the stop.', q: 'Where does Lena sit on the bus?', ex: 'In the last seat, at the back.', ops: [['When the bus comes, Lena gets the last seat.', 'ok'], ['When the bus will come, Lena gets the last seat.', 'will'], ['Until the bus comes, Lena gets the last seat.', 'sentido']] },
  { hora: '6:55', tit: 'The Hospital', texto: 'Lena runs into the hospital at 6:55. Her shift starts at 7:00. Always one minute early.', q: 'Is Lena late for work? How early is she?', ex: 'No. She is one minute early, every day.', ops: [['By the time Lena puts on her uniform, it’s 6:59.', 'ok'], ['Until Lena puts on her uniform, it’s 6:59.', 'by'], ['By the time Lena will put on her uniform, it’s 6:59.', 'will']] }
];

var FITAS = [['RIGHT AFTER, NO WAITING', 'as soon as I wake up'], ['ALL THE TIME UP TO', 'until the bus comes'], ['AT THAT MOMENT, OR EARLIER', 'by the time you get up'], ['REVIEW', 'when · before · after + a full sentence']];
var ARMAS = [
  ['NO WILL HERE', 'I’ll call you when I will arrive.', 'I’ll call you when I arrive.', 'The time half is present. The will goes in the other half.'],
  ['THE FUTURE HALF', 'As soon as I get there, I text you.', 'As soon as I get there, I’ll text you.', 'A plan for tomorrow: the other half needs will.'],
  ['UNTIL, NO NOT', 'Don’t leave until I don’t come back.', 'Don’t leave until I come back.', 'until already has the stop in it.'],
  ['BY THE TIME', 'Until you wake up, I’ll be on the bus.', 'By the time you wake up, I’ll be on the bus.', 'until = all the time up to · by the time = at that moment, or before.']
];

var PLANOS = [
  { hora: '5:00', diz: 'Lena’s alarm clock is broken. Gus gets up at 5 AM for the gym.', ini: 'Gus, as soon as you get up, …', ops: [['Gus, as soon as you get up, please wake me up.', 'ok'], ['Gus, as soon as you will get up, please wake me up.', 'will'], ['Gus, until you get up, please wake me up.', 'sentido']] },
  { hora: '5:10', diz: 'Pickle eats at 5:30. Gus usually leaves at 5:20.', ini: 'Don’t leave until …', ops: [['Don’t leave until you feed Pickle.', 'ok'], ['Don’t leave until you don’t feed Pickle.', 'nao'], ['Don’t leave until you will feed Pickle.', 'will']] },
  { hora: '5:20', diz: 'Last week, Lena left the stove on all day.', ini: 'Before I leave, …', ops: [['Before I leave, I’ll check the stove.', 'ok'], ['Before to leave, I’ll check the stove.', 'to'], ['Before I will leave, I’ll check the stove.', 'will']] },
  { hora: '5:30', diz: 'Lena’s mom is nervous about the new job.', ini: 'Mom, I’ll text you when …', ops: [['Mom, I’ll text you when I get to the hospital.', 'ok'], ['Mom, I’ll text you when I’ll get to the hospital.', 'will'], ['Mom, I text you when I get to the hospital.', 'main']] },
  { hora: '5:40', diz: 'The new hospital is on the number 22 bus. It comes at 6:15.', ini: 'I’ll wait at the stop until …', ops: [['I’ll wait at the stop until the 22 comes.', 'ok'], ['I’ll wait at the stop as soon as the 22 comes.', 'sentido'], ['I’ll wait at the stop until the 22 is going to come.', 'going']] }
];

var LENA = [
  { ela: 'Good morning! I’m on the bus. Gus woke me up! What are you doing today?', pede: 'Tell her one plan: As soon as I …, I’ll …', resp: 'Nice! I’ll need a big coffee as soon as I get there.' },
  { ela: 'Can you call me later? I want to tell you about my new boss.', pede: 'Say when: I’ll call you when … / after …', resp: 'Perfect. I have a break at 12.' },
  { ela: 'I’m so tired. I think I’ll sleep for a week.', pede: 'Ask her: What will you do when you get home tonight?', resp: 'When I get home, I’ll eat pizza and sleep until tomorrow!' },
  { ela: 'Oh! This is my stop! I have to go!', pede: 'Say goodbye: Text me as soon as … / Good luck!', resp: 'I will! Talk to you later!' }
];

var QUIZ = [
  { a: 'I’ll call you when I ', b: ' home.', op: ['get', 'will get', 'am going to get'], nao: 'The time half stays in the present: when I get.' },
  { a: 'Please wait here ', b: ' I come back.', op: ['until', 'as soon as', 'by the time'], nao: 'All the time up to that moment: until.' },
  { a: 'Tomorrow, as soon as the alarm rings, I ', b: ' up.', op: ['’ll get', 'get will', 'will getting'], nao: 'The other half has the future: I’ll get.' },
  { a: '', b: ' you wake up, I’ll be at work.', op: ['By the time', 'Until', 'Before to'], nao: 'At that moment, or earlier: By the time.' },
  { a: 'Don’t eat ', b: ' everybody sits down.', op: ['until', 'until not', 'as soon as'], nao: 'until, and no extra not.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0, cap: 0, viu: {}, ouviu: {} }, rel: { sel: -1, esc: {} }, sol: { n: 0, esc: '' }, lena: { n: 0, viu: {} }, quiz: { esc: {} } };

function despertador(hora, cls) { return '<div class="despertador' + (cls ? ' ' + cls : '') + '"><div class="visor"><b>' + hora + '</b><small>AM</small></div><div class="pes"><i></i><i></i></div></div>'; }
function nascer(n, total) {
  var p = n / total, y = 150 - p * 110;
  return '<svg class="nascer" viewBox="0 0 400 180" role="img" aria-label="Sunrise"><defs><radialGradient id="brilho" cx="50%" cy="100%" r="70%"><stop offset="0" stop-color="#f0a14a" stop-opacity="' + (0.15 + p * 0.45) + '"/><stop offset="1" stop-color="#0a0e18" stop-opacity="0"/></radialGradient></defs>'
    + '<rect width="400" height="180" fill="#0a0e18"/><rect width="400" height="180" fill="url(#brilho)"/>'
    + '<circle cx="200" cy="' + y + '" r="26" fill="#f3b45a" opacity="' + (0.35 + p * 0.65) + '"/>'
    + '<path d="M0 150 L0 120 L30 120 L30 100 L52 100 L52 128 L80 128 L80 86 L100 86 L100 76 L112 76 L112 128 L140 128 L140 104 L168 104 L168 132 L230 132 L230 92 L246 92 L246 70 L254 70 L254 92 L270 92 L270 118 L300 118 L300 98 L330 98 L330 126 L360 126 L360 108 L400 108 L400 150 Z" fill="#05070c"/>'
    + '<rect y="150" width="400" height="30" fill="#05070c"/></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE 5:30 ALARM</span><h1>As Soon As <b>I Wake Up</b></h1>'
    + '<p class="sub"><b>As soon as I wake up</b>, I’ll call you. <b>Until</b> then, good night.</p>'
    + '<div class="chipsx"><span class="pilula">as soon as</span><span class="pilula">until · by the time</span><span class="pilula">when I arrive</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn off the alarm</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-d">' + despertador('5:30', 'grande') + nascer(2, 8) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>A video about daily routines. What will the people talk about? Which small word will you hear most: when, after, before or then?</h2></div>' + fala('va', ['They’ll talk about …', 'Maybe …'], ['getting up', 'breakfast', 'work']) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, part by part</button></div></div>';
  else if (e.p === 1) {
    var k = PARTES[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Daily routines', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Video: part ' + (e.cap + 1) + ' of 4</small></div><div class="lado-video"><div class="caps">'
      + PARTES.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + (i + 1) + '</button>'; }).join('') + '</div>'
      + '<h5 class="rot-ouve">TAP WHEN YOU HEAR IT</h5><div class="tres-b">' + PALAVRAS.map(function (w) { return '<button type="button" class="pilula' + (e.ouviu[w] ? ' certo' : '') + '" data-a="vd-w" data-v="' + w + '">' + w + (e.ouviu[w] ? ' · ' + e.ouviu[w] : '') + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div class="acoes">' + (e.cap < 3 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next part</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>Which routine is more like yours? Say one thing from the video with when or after.</h2></div>' + fala('vb', ['When he gets home, he …', 'After breakfast, …'], []) + mostra('vb', 'The first one. When he gets home, he cooks dinner, like me.', 1) + '</div>';
  return cab(c) + passos + corpo;
};

R.relogio = function (c) {
  var e = S.rel, x = e.sel >= 0 ? CAPS[e.sel] : null, n = 0;
  CAPS.forEach(function (_, i) { if (e.esc[i] === 'ok') n++; });
  var horas = '<div class="horas">' + CAPS.map(function (k, i) { return '<button type="button" class="hora-b' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feito' : '') + '" data-a="rl" data-n="' + i + '"><b>' + k.hora + '</b><small>' + k.tit + '</small></button>'; }).join('') + '</div>';
  var corpo = '<p class="dica-aluno" style="text-align:center">Tap a time.</p>';
  if (x) {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    corpo = '<div class="mesa-c"><div class="lado-l">' + despertador(x.hora) + '<div class="capitulo vd"><small>CHAPTER ' + (e.sel + 1) + ' · ' + x.tit.toUpperCase() + '</small><p>' + x.texto + '</p></div><div class="pergunta vd ja"><small>THE QUESTION</small><h2>' + x.q + '</h2></div>' + mostra('rl' + e.sel, x.ex) + '</div><div class="lado-l">'
      + (ok ? '<div class="balao vd"><small>ONE SENTENCE</small><p>' + x.ops[0][0] + '</p></div>' : '<p class="ini">Now join two actions in one sentence.</p><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="rl-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : ''))
      + '</div></div>';
  }
  return cab(c) + horas + corpo + (n === 6 ? '<p class="aprova" style="text-align:center">Every morning is the same. But tomorrow is her first day at a new hospital, and tonight her alarm clock is broken.</p>' : '');
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.sol = function (c) {
  var e = S.sol, n = e.n, fim = n >= PLANOS.length, lado;
  if (fim) lado = '<div class="pergunta vd"><small>THE SUN IS UP</small><h2>The note goes on the fridge: “Gus, as soon as you get up, wake me up!”</h2></div>';
  else {
    var x = PLANOS[n], ok = e.esc === 'ok';
    lado = '<div class="pede vd"><small>' + x.hora + ' AM · THE SITUATION</small><b>' + x.diz + '</b></div>' + (ok ? '<div class="balao vd"><small>LENA</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="sl-prox">Next plan</button></div>'
      : '<p class="ini">' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="sl" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : ''));
  }
  return cab(c) + trilha(PLANOS, n) + '<div class="mesa-c"><div class="vd sol-box">' + nascer(fim ? 8 : n + (e.esc === 'ok' ? 1 : 0), 8) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.lena = function (c) {
  var e = S.lena, n = e.n, fim = n >= LENA.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('onibus') + ')"><span>LENA · ON THE 22 BUS, 6:20 AM</span></div>';
  if (fim) return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l">' + follow('THE BIG QUESTION', 'Are you a morning person, or do you need three alarms?', ['I’m a morning person. As soon as …', 'I need three alarms! Until …'], [], 'big', mostra('big', 'I need three alarms! I don’t get up until the third one rings.', 1)) + '</div></div>';
  var x = LENA[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l">' + trilha(LENA, n) + '<div class="balao vd"><small>LENA</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>YOUR TURN</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>LENA</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="le-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="le-viu">Answered · Lena replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Five out of five. Now your own tomorrow.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'As soon as I wake up, I’ll …\nBefore I leave, I’ll …\nBy the time I get to work, …', 'Your tomorrow',
    ['As soon as I wake up, ', 'Before I leave, ', 'When I get to ', 'until ', 'By the time ', 'I’ll '], ['YOUR REAL TOMORROW', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now plan tomorrow: present in the time half.' : 'From the alarm to the door, in four or five sentences.'])
    + '<div class="lado-fim">' + despertador('6:00') + '<div class="grande vd"><span>time half: <u>when I arrive</u> (no will)</span><span>other half: <u>I’ll call</u> you</span><span><u>until</u> = all the time up to</span><span><u>by the time</u> = at that moment, or before</span></div>'
    + mostra('fim', 'As soon as I wake up, I’ll drink some water.<br>Before I leave, I’ll feed my dog.<br>I’ll wait at the stop until the bus comes.<br>By the time I get to work, it’ll be 8:00.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES['vd-w'] = function (b, n, v) { S.video.ouviu[v] = (S.video.ouviu[v] || 0) + 1; };
TOQUES.rl = function (b, n) { S.rel.sel = n; };
TOQUES['rl-v'] = function (b, n, v) { S.rel.esc[S.rel.sel] = v; };
TOQUES.sl = function (b, n, v) { S.sol.esc = v; };
TOQUES['sl-prox'] = function () { S.sol = { n: S.sol.n + 1, esc: '' }; };
TOQUES['le-viu'] = function () { S.lena.viu[S.lena.n] = 1; };
TOQUES['le-prox'] = function () { S.lena.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four sentences about tomorrow. Find the rule yourself.',
  exemplos: [
    'I’ll call you <b>as soon as</b> I <u>get</u> to the hospital.',
    'Lena will wait <b>until</b> the nurse <u>comes</u>.',
    '<b>When</b> the alarm <u>rings</u>, she’ll get up.',
    'We’ll leave <b>before</b> the sun <u>comes</u> up.'
  ],
  pergunta: 'After as soon as, until, when and before, talking about tomorrow, the verb …',
  opcoes: ['stays in the present: I get, she comes', 'takes will: as soon as I will get', 'takes would: until she would come'], c: 0,
  nao: 'Not that one. Read the four lit verbs again: is there a will in the time half?',
  regra: '<b>Time word + present</b>, even for tomorrow: I’ll call you as soon as I <b>get</b> there. The <b>will</b> goes in the OTHER half: I <b>will</b> call you …',
  uso: { p: 'Your turn. Tomorrow morning. Say two plans: one with as soon as, one with until.', molde: ['As soon as I wake up, I’ll …', 'I’ll … until …'], ex: 'As soon as I wake up, I’ll make coffee. I’ll stay in bed until the alarm rings.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
