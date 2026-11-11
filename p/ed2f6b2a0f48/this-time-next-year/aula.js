/* ============================================================
   THIS TIME NEXT YEAR · THE MOMENT LINE · LIVE CLASS  06/10/2026
   Main series B1 · future continuous: will be + -ing para algo que vai
   estar EM ANDAMENTO num momento do futuro; won't be + -ing; Will you
   be using …? (a pergunta educada). Onde para: decisão na hora é will
   simples; verbo de estado (know, have, be) sem -ing; idade com BE.
   Erros: "will working" (sem BE), "will be work" (sem -ING), "in this
   time next year", "I will have 55 years", "I'll be helping you" na
   decisão, "will be not", "Will be you …?", "I'll be probably".
   O MUNDO (da aula velha): o vídeo sobre a Terra em 2050 (2njn71TqkjA,
   4:59, idade 0, embed sim), selado em quatro capítulos (0–72–150–
   228–299, as viradas reais de assunto); a cidade neon de 2050, segunda
   às 8 da manhã; a órbita de oito momentos do futuro do aluno; a
   ligação do eu de 2050. Sem áudio, como a velha.
   A CARA: a LINHA DO MOMENTO — um eixo NOW → NEXT YEAR → 2050 com um
   alfinete no momento futuro e uma faixa listrada em movimento que
   atravessa o alfinete: a ação já está acontecendo ali. E o horizonte
   de oito torres em neon, que acendem uma a uma.
   Fila: FILA-LIVE-386.md · 110.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'janela', rot: 'I · You and Next Year', t: 'Before the future: you, this year, and next year.', p: 'Tap a card. Answer out loud. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'sala', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'sala', rot: 'III · Earth in 2050', t: 'What could the Earth look like in 2050?', p: 'The video is locked. Answer first, then it plays in four short chapters. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'sala', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'torres', est: 'o', min: 7, img: 'cidade', rot: 'V · The Neon Skyline', t: '2050. A Monday, 8 AM. Eight towers. What will people be doing in each one?', p: 'Tap a tower. Make a forecast in one sentence. Your teacher taps the version they heard.' },
  { k: 'gx', est: 'f', min: 4, img: 'cidade', rot: 'VI · The Moment Line', t: 'Where does each sentence live in time?', p: 'Tap a sentence, then its place on the line. Notice the verbs. Then say three lines about you.' },
  { k: 'regra', est: 'f', min: 6, img: 'cidade', rot: 'VII · The Rule', t: 'A moment in the future, and something already in progress.', p: 'Say each wrong line the right way out loud. Then tap SHOW ME.' },
  { k: 'orbita', est: 'o', min: 7, img: 'orbita', rot: 'VIII · The Forecast Orbit', t: 'Five moments of your future. Finish each one fast.', p: 'Your teacher reads the moment and the first words. You finish at once, about your real life.' },
  { k: 'ligacao', est: 'o', min: 7, extra: 1, img: 'janela', rot: 'IX · A Call from 2050', t: 'Your phone rings. The number is strange. It’s you, calling from 2050.', p: 'Your teacher is your future self. Answer with will be + -ing, then ask back.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'cidade', rot: 'X · Quick Check', t: 'Five quick lines from 2050.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'orbita', rot: 'XI · Your 2050', t: 'Your own future: next year, and 2050.', p: 'Tap any five. Answer with will be + -ing, won’t be + -ing, or a question.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XII · See You in 2050', t: 'Will life in 2050 be better or worse than today?', p: 'Write a short letter to 2050. It goes to your My notes.' }
];

var YT = '2njn71TqkjA';

var VOCE = [
  { k: 'NEW YEAR', q: 'Did you make any plans for this year? Tell me one.', fup: 'Have you started?', st: ['Yes. I want to …', 'Not really, but …'], ex: 'Yes. I want to travel more and learn to cook.' },
  { k: 'MONDAY, 8 AM', q: 'What are you usually doing at 8 AM on a Monday?', fup: 'Do you like Monday mornings?', st: ['I’m usually …', 'At 8 AM I’m …'], ex: 'I’m usually on the bus, half asleep, with a coffee.' },
  { k: 'LAST YEAR', q: 'Where were you and what were you doing this time last year?', fup: 'Was it a good year?', st: ['This time last year, I was …'], ex: 'I was at my parents’ house. We were eating leftovers.' },
  { k: 'THE FUTURE', q: 'Are you excited about the future, or a little worried? Why?', fup: 'What worries you most?', st: ['A bit of both, because …', 'I’m excited because …'], ex: 'A bit of both. Technology is exciting, but the climate worries me.' },
  { k: '2050', q: 'How old will you be in 2050? Can you imagine it?', fup: 'What will you look like?', st: ['I’ll be …', 'I can’t imagine …'], ex: 'I’ll be 55. I can’t imagine it at all!' }
];

var ANTES = [
  { q: 'Close your eyes: it’s 2050. What do you see outside your window?', h: 'Lots of trees, quiet electric cars, and solar panels on every roof.' },
  { q: 'Do you think 2050 will be better or worse than today? One reason.', h: 'Better, I hope. We’ll have cleaner energy.' }
];
var CAPS = [
  { k: 'THE START', ini: 0, fim: 72, q: 'What question does the video ask? So far, is its 2050 good news or bad news?', h: 'It asks what the Earth will be like. So far it’s a bit of both.' },
  { k: 'PART TWO', ini: 72, fim: 150, q: 'Say two things from this part. In that 2050, what will people be using, eating or doing?', h: 'People will be dealing with more heat, and they’ll be using water more carefully.' },
  { k: 'PART THREE', ini: 150, fim: 228, q: 'What changes in this part? Where will people be living, and how?', h: 'Some people will be moving away from the coast.' },
  { k: 'THE END', ini: 228, fim: 299, q: 'How does the video end? Is 2050 already decided, or can we still change it?', h: 'It isn’t decided. What we do now will change it.' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "In the video, 2050 will be better than today.", "t": false, "tm": "0:33", "c": "No. “This future is bleak.” But there’s still time to change it."},
  {"f": "In 2050, people will be hearing about heat waves and wildfires on the evening news.", "t": true, "tm": "0:52"},
  {"f": "At night, ambulances will be carrying patients with heat stroke.", "t": true, "tm": "1:13"},
  {"f": "Many people will be moving from the cities to the countryside.", "t": false, "tm": "1:44", "c": "No. They will be moving to cities, where homes and jobs are hard to find."},
  {"f": "Kids will be learning about the fish that still live in the reefs.", "t": false, "tm": "3:10", "c": "No. The reefs have vanished, so kids will learn about extinct sea life."},
  {"f": "Many experts are still optimistic about the future.", "t": true, "tm": "3:48"}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · What will you be doing in 2050?",
  "quem": "Future you",
  "fala": "Future you: “Hello! What will you be doing right now?”",
  "reacoes": [
    [
      "Working from home",
      "In 2050, I’ll be working from home, with a robot making my coffee.",
      "“Nice. I remember that coffee.”"
    ],
    [
      "Growing food",
      "In 2050, I’ll be growing vegetables on my roof.",
      "“Good plan. Food is expensive here.”"
    ],
    [
      "Helping my city",
      "In 2050, I’ll be helping my city, because there’s still time.",
      "“That’s the best answer.”"
    ]
  ]
};
var DEB_TORRE = [7, 2, 5, 1, 3, 6];   /* cada linha certa acende uma torre do skyline: YOU, OFFICE, CLINIC, HOME, SCHOOL, ROOFTOPS */

var NOTA = {
  nobe: 'A piece is missing: will BE + -ing.', noing: 'A piece is missing: will be + verb-ING.', presente: 'It’s 2050, not now: will be + -ing.',
  to: 'No TO after will.', going: 'going to + base verb. Or: will be + -ing.', in: 'No IN before “this time next year”.', idade: 'Age takes BE: I’ll be 55.',
  neg: 'Negative: won’t be + -ing.', estado: 'KNOW is a state verb: I’ll know. No -ing.', pergunta: 'Question: Will you be …?', decisao: 'A decision right now: plain will. I’ll help you.', provavel: 'probably goes after will: I’ll probably be …'
};

var TORRES = [
  { k: 'TRANSIT', q: 'It’s 8 AM. How will people be getting to work?', ini: 'Most people will …', ops: [['Most people will be riding in self-driving cars.', 'ok'], ['Most people will riding in self-driving cars.', 'nobe'], ['Most people will be ride in self-driving cars.', 'noing']] },
  { k: 'HOME', q: 'Who will be making breakfast in a normal home?', ini: 'Robots will …', ops: [['Robots will be cooking breakfast.', 'ok'], ['Robots will cooking breakfast.', 'nobe'], ['Robots are cooking breakfast.', 'presente']] },
  { k: 'OFFICE', q: 'Will the office tower be full or empty at 8 AM?', ini: 'Lots of people will …', ops: [['Lots of people will be working from home.', 'ok'], ['Lots of people will be work from home.', 'noing'], ['Lots of people will to be working from home.', 'to']] },
  { k: 'SCHOOL', q: 'What will the kids be doing in the classroom?', ini: 'Kids will …', ops: [['Kids will be learning with AI tutors.', 'ok'], ['Kids are going to learning with AI tutors.', 'going'], ['Kids will be learn with AI tutors.', 'noing']] },
  { k: 'FARM', q: 'Where will our vegetables be growing? Think of a farm inside a tall building.', ini: 'Farmers will …', ops: [['Farmers will be growing vegetables inside tall buildings.', 'ok'], ['Farmers will growing vegetables inside buildings.', 'nobe'], ['Farmers will be grow vegetables inside buildings.', 'noing']] },
  { k: 'CLINIC', q: 'How will doctors be checking our health?', ini: 'Doctors will …', ops: [['Doctors will be checking our health from far away.', 'ok'], ['Doctors will checking our health from far away.', 'nobe'], ['Doctors will be check our health from far away.', 'noing']] },
  { k: 'ROOFTOPS', q: 'What will the city be running on?', ini: 'The city will …', ops: [['The city will be running on solar power.', 'ok'], ['The city is running on solar power.', 'presente'], ['The city will running on solar power.', 'nobe']] },
  { k: 'YOU', q: 'And you? 2050, Monday, 8 AM. Where will you be, and what will you be doing?', ini: 'In 2050, I’ll be …', ops: [['In 2050, I’ll be living by the sea.', 'ok'], ['In 2050, I will living by the sea.', 'nobe'], ['In 2050, I’ll be live by the sea.', 'noing']] }
];

var CAMINHOS = [
  { k: 'THREE PIECES', antes: 'This time next year, I will working in Chile.', depois: 'This time next year, I <b>will be working</b> in Chile.', nota: '<b>will</b> + <b>be</b> + <b>-ing</b>. Without be or without -ing, it is wrong.' },
  { k: 'NO IN', antes: 'In this time next year, I’ll be studying.', depois: '<b>This time next year</b>, I’ll be studying.', nota: '<b>this time next year</b>: no preposition. But <b>in 2050</b>, <b>in five years</b>.' },
  { k: 'YOUR AGE', antes: 'In 2050, I will have 55 years.', depois: 'In 2050, I <b>will be</b> 55.', nota: 'Age in English is <b>be</b>: I’ll be 55.' },
  { k: 'WHERE IT STOPS', antes: 'Wait, I’ll be helping you with that box! · I’ll be knowing English.', depois: 'Wait, <b>I’ll help</b> you with that box! · <b>I’ll know</b> English.', nota: 'A decision right now: plain <b>will</b>. State verbs (know, have, be): no -ing.' }
];

var ORBITA = [
  { k: 'NEXT YEAR', diz: 'This day next year. The same hour as right now.', ini: 'This time next year, I’ll be …', ops: [['This time next year, I’ll be studying at a new school.', 'ok'], ['In this time next year, I’ll be studying.', 'in'], ['This time next year, I’ll be study at a new school.', 'noing']] },
  { k: 'YOUR BIRTHDAY', diz: 'Your birthday in 2050. How old? Where? Doing what?', ini: 'On my birthday in 2050, I’ll be …', ops: [['I’ll be 55, and I’ll be dancing with my family.', 'ok'], ['I’ll have 55 years, and I’ll be dancing.', 'idade'], ['I’ll be 55, and I’ll dancing with my family.', 'nobe']] },
  { k: 'THE PHONE', diz: 'Will people still carry a phone in their pocket?', ini: 'In 2050, we won’t …', ops: [['In 2050, we won’t be carrying phones in our pockets.', 'ok'], ['In 2050, we will be not carrying phones.', 'neg'], ['In 2050, we won’t carrying phones.', 'nobe']] },
  { k: 'YOUR ENGLISH', diz: 'Will you remember this lesson? Will you still speak English?', ini: 'In 2050, I’ll still …', ops: [['I’ll still know English, and I’ll be using it every day.', 'ok'], ['I’ll still be knowing English.', 'estado'], ['I’ll still know English, and I’ll using it.', 'nobe']] },
  { k: 'THE FLYING CAR', diz: 'Your neighbor has a flying car. You need it on Saturday. Ask politely.', ini: 'Will you be …?', ops: [['Will you be using your flying car on Saturday?', 'ok'], ['Will be you using your flying car on Saturday?', 'pergunta'], ['Will you using your flying car on Saturday?', 'nobe']] }
];

var LIGACAO = [
  { ela: 'Hello! Don’t be scared. It’s you, from 2050. First question: this time next year, what will you be doing?', voce: ['This time next year, I’ll be … (your real plan)'], resp: 'Good. I remember that year. It was a busy one!' },
  { ela: 'And in five years? Where will you be living?', voce: ['In five years, I’ll be living in …'], resp: 'Nice choice. The view is great, trust me.' },
  { ela: 'Will you be using English at work?', voce: ['Yes, I’ll be …', 'No, I won’t be …'], resp: 'Keep going. It’s worth it.' },
  { ela: 'Now ask me something about 2050. Just one question.', voce: ['Will you be …?', 'What will you be doing …?'], resp: 'Hmm. I can’t tell you everything. No spoilers!' }
];

var QUIZ = [
  { a: 'This time next year, I ', b: ' in Canada.', op: ['will be studying', 'will studying', 'will be study'], w: 'Three pieces: <b>will be + -ing</b>.' },
  { a: '', b: ' this time next year, we’ll be living in a new house.', op: ['(nothing)', 'In', 'On'], w: '<b>this time next year</b>: no preposition.' },
  { a: 'In 2050, I ', b: ' 60.', op: ['will be', 'will have', 'will be having'], w: 'Age: <b>be</b>. I’ll be 60.' },
  { a: 'We ', b: ' phones in our pockets.', op: ['won’t be carrying', 'will be not carrying', 'won’t carrying'], w: 'Negative: <b>won’t be + -ing</b>.' },
  { a: '', b: ' using the car on Saturday?', op: ['Will you be', 'Will be you', 'You will be'], w: 'Question: <b>Will you be + -ing</b>?' }
];

var RODA = [
  { k: 'NEXT JANUARY', q: 'This time next year, what will you be doing?', fup: 'Why that?', st: ['This time next year, I’ll be …'], ex: 'This time next year, I’ll be working at a bigger company.' },
  { k: 'YOUR HOME', q: 'Where will you be living in 2050? A city, the beach, the mountains?', fup: 'Alone, or with somebody?', st: ['I’ll be living …'], ex: 'I’ll be living in a small house near the mountains.' },
  { k: 'YOUR JOB', q: 'Will you be working in 2050, or will you be retired?', fup: 'Doing what?', st: ['I’ll probably be …', 'I won’t be …'], ex: 'I’ll probably be working, but only three days a week.' },
  { k: 'SATURDAY NIGHT', q: 'This Saturday at 9 PM, what will you be doing?', fup: 'With who?', st: ['At 9 PM, I’ll be …'], ex: 'I’ll be watching a movie with my sister.' },
  { k: 'NO MORE', q: 'What won’t people be doing in 2050?', fup: 'Will you miss it?', st: ['People won’t be …'], ex: 'People won’t be driving gas cars.' },
  { k: 'YOUR FAMILY', q: 'In 2050, what will your family be doing on a Sunday?', fup: 'Same as today?', st: ['We’ll be …'], ex: 'We’ll be having lunch together, like today.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, tr: { sel: 0, esc: {} }, rg: { abre: {} }, ob: { n: 0, esc: '' }, lg: { n: 0, resp: 0 }, qz: { n: 0, esc: -1 }, roda: { sel: -1, foi: {} } };

/* a linha do momento: NOW · o momento futuro com alfinete · uma faixa em andamento atravessando o alfinete */
function linhaMomento(rot, pos, mini, parado) {
  var p = pos === undefined ? 82 : pos;
  return '<div class="ft-linha' + (mini ? ' mini' : '') + '"><div class="ft-eixo"><span class="ft-agora">NOW</span><span class="ft-marca" style="left:' + p + '%"><i></i><b>' + (rot || '2050 · MONDAY · 8 AM') + '</b></span>'
    + '<span class="ft-faixa' + (parado ? ' parado' : '') + '" style="left:' + (p - 14) + '%"></span></div><small class="ft-leg">will be + -ing · already in progress at that moment</small></div>';
}
function skyline(esc, sel, baixo) {
  var alturas = [62, 88, 74, 54, 96, 68, 80, 58];
  return '<div class="ft-sky' + (baixo ? ' baixo' : '') + '">' + TORRES.map(function (t, i) { var ok = esc[i] === 'ok'; return '<button type="button" class="ft-torre' + (ok ? ' acesa' : '') + (sel === i ? ' on' : '') + '" style="height:' + alturas[i] + '%" data-a="tr" data-n="' + i + '"><span class="ft-janelas"></span><b>' + t.k + '</b></button>'; }).join('') + '</div>';
}
function tresFrases(acao, ops, esc, semente) {
  return '<div class="ft-ops">' + ordem(ops.map(function (o, i) { return [o[0], o[1], i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE FUTURE</span><h1>This Time <b>Next Year</b></h1>'
    + '<p class="sub"><b>This time next year</b>, I’ll be living somewhere new. <b>In 2050</b>, robots <b>will be cooking</b> my breakfast.</p>'
    + '<div class="chipsx"><span class="pilula">will be + -ing</span><span class="pilula">won’t be + -ing</span><span class="pilula">Will you be …?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open 2050</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + skyline({ 0: 'ok', 1: 'ok', 4: 'ok' }, -1) + linhaMomento() + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + o skyline de 2050 que acende uma torre por acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'The Earth in 2050', '&start=0&end=299'); }
var debAcesa = {};
function debEstado() {
  var e = (S.fq && S.fq.deb_vm && S.fq.deb_vm.r) || {}, ok = 0, feitas = 0, st = [];
  DEB_VM.itens.forEach(function (x, i) {
    var r = e[i]; if (r == null) { st.push(0); return; }
    feitas++; if ((r === 't') === !!x.t) { ok++; st.push(1); } else st.push(-1);
  });
  return { ok: ok, feitas: feitas, st: st };
}
function debTopo(d, rot, titulo) {
  var n = DEB_VM.itens.length;
  return '<div class="deb-topo"><div><small>' + rot + ' · ' + d.feitas + ' OF ' + n + ' ANSWERED</small><h3>' + titulo + ' <b>' + d.ok + '</b> / ' + n + '</h3></div></div>';
}
function debNave() {
  var d = debEstado(), n = DEB_VM.itens.length;
  var esc = {}; d.st.forEach(function (s, i) { if (s === 1) esc[DEB_TORRE[i]] = 'ok'; });
  return debTopo(d, 'THE NEON SKYLINE', 'Towers lit') + skyline(esc, -1, 1).replace(/ data-a="tr" data-n="\d+"/g, ' disabled');
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Four short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The Earth in 2050', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.torres = function (c) {
  var e = S.tr, x = TORRES[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitas = TORRES.filter(function (_, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + skyline(e.esc, e.sel, 1) + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · ' + feitas + ' OF 8 LIT</small><h2>' + x.q + '</h2></div><p class="pista">Start: ' + x.ini + '</p></div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5>' + tresFrases('tr-v', x.ops, esc, e.sel + 1)
    + (ok ? '<p class="aprova">' + (feitas >= 8 ? 'Eight towers, eight lights. will + be + -ing, every time. Why all three pieces? The rule is next.' : 'The tower lights up. Now one with won’t be: what won’t people be doing there?') + '</p>' : esc ? '<p class="recusa">' + NOTA[esc] + ' Say it again.</p>' : '<p class="dica-aluno">Make your forecast out loud.</p>') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg;
  return cab(c) + '<div class="ft-fato vd"><b>will be + -ing</b>: at that moment in the future, the action is <b>in progress</b>. Three pieces: will + be + verb-ing. Negative: won’t be + -ing. Question: Will you be + -ing? A decision right now is plain will. State verbs (know, have, be, love) stay simple.</div>'
    + '<div class="ft-caminhos">' + CAMINHOS.map(function (x, i) { var ab = e.abre[i]; return '<div class="ft-caminho vd' + (ab ? ' aberto' : '') + '"><small>' + x.k + '</small><p class="antes"><s>' + x.antes + '</s></p>' + (ab ? '<p class="depois">' + x.depois + '</p><p class="nota">' + x.nota + '</p>' : '<button type="button" class="btn" data-a="rg" data-n="' + i + '">Show me</button>') + '</div>'; }).join('') + '</div>'
    + armas([['NOT', 'I will be not working.', 'I won’t be working.', 'won’t be + -ing'], ['QUESTION', 'Will be you using the car?', 'Will you be using the car?', 'Will you be …?'], ['PROBABLY', 'I’ll be probably living abroad.', 'I’ll probably be living abroad.', 'probably after will'], ['NOW?', 'In 2050, I am working from home.', 'In 2050, I’ll be working from home.', 'the future: will be']], 'FOUR MORE TRAPS · TAP TO FIX');
};

R.orbita = function (c) {
  var e = S.ob, n = e.n, fim = n >= ORBITA.length;
  var luas = '<div class="ft-luas">' + ORBITA.map(function (o, i) { return '<span class="' + (i < n ? 'acesa' : i === n ? 'on' : '') + '">' + o.k + '</span>'; }).join('') + '</div>';
  if (fim) return cab(c) + luas + '<div class="foco">' + linhaMomento('YOUR FUTURE', 70) + '<div class="pergunta vd"><small>FIVE MOMENTS</small><h2>The orbit is complete, and the forecast is yours. Now ask your teacher one with “Will you be …?”</h2></div></div>';
  var x = ORBITA[n], ok = e.esc === 'ok';
  return cab(c) + luas + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>' + x.k + ' · YOUR TEACHER READS IT</small><b>' + x.diz + '</b></div><div class="balao vd"><small>FINISH IT · FAST</small><p>' + x.ini + '</p></div></div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5>' + tresFrases('ob', x.ops, e.esc, n + 2)
    + (ok ? '<p class="aprova">The moon lights up. Now with the student’s own details.</p><div><button type="button" class="btn" data-a="ob-prox">Next moment</button></div>' : e.esc ? '<p class="recusa">' + NOTA[e.esc] + ' Say it again.</p>' : '') + '</div></div>';
};

R.ligacao = function (c) {
  var e = S.lg, n = Math.min(e.n, LIGACAO.length - 1), fim = e.n >= LIGACAO.length, x = LIGACAO[n];
  if (fim) return cab(c) + '<div class="foco"><div class="ft-tel vd desligado"><small>CALL ENDED · 2050</small><b>The line goes quiet.</b></div><div class="pergunta vd"><h2>What did your future self say? Tell it back in two sentences, with will be + -ing.</h2></div></div>';
  return cab(c) + trilha(LIGACAO, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="ft-tel vd"><small>INCOMING · +2050 · YOUR FUTURE SELF</small><p>“' + x.ela + '”</p></div>' + (e.resp ? '<div class="balao vd ok-b"><small>YOUR FUTURE SELF</small><p>“' + x.resp + '”</p></div>' : '') + '</div>'
    + '<div class="lado-l">' + fala('lg' + n, x.voce, []) + (e.resp ? '<div><button type="button" class="btn" data-a="lg-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="lg-r">Answered · reply</button></div><p class="dica-aluno">Answer your future self.</p>') + (n === 3 ? '<p class="so-prof dica-aluno">Here the student forms the question: Will you be living …?, not Will be you …</p>' : '') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>Now change item 1 into a negative and a question.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? (x.op[0] === '(nothing)' ? '—' : x.op[0]) : '_____') + '</u>' + x.b + '</p></div><div class="ft-ops linha">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Count the pieces: will … be … -ing? Or is it a decision right now?</p>' : '') + '</div>';
};

R.roda = function (c) { return cartasPessoais(c, RODA, S.roda, 'roda'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Dear me in 2050,\nThis time next year, I’ll be …\nIn 2050, I’ll be … and I won’t be …\nWill you be …?', 'A letter to 2050',
    ['will be', 'won’t be', 'Will you be', 'This time next year,', 'In 2050,', 'I’ll be 55'], ['A LETTER TO 2050', 'Better or worse than today? Then: next year, 2050, and one question for your future self.'])
    + '<div class="lado-fim">' + linhaMomento('2050', 80, 1)
    + '<div class="grande vd"><span><u>will be + -ing</u> · in progress then</span><span><u>won’t be + -ing</u> · Will you be …?</span><span>a decision now: plain will · I’ll be 55</span><span>not <s>will working</s>, not <s>in this time</s></span></div>'
    + mostra('fim', 'Dear me in 2050,<br>This time next year, I’ll be studying in Canada.<br>In 2050, I’ll be 55, and I’ll be living by the sea. I won’t be driving.<br>Will you be happy?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.tr = function (b, n) { S.tr.sel = n; };
TOQUES['tr-v'] = function (b, n, v) { S.tr.esc[S.tr.sel] = v; };
TOQUES.rg = function (b, n) { S.rg.abre[n] = 1; };
TOQUES.ob = function (b, n, v) { S.ob.esc = v; };
TOQUES['ob-prox'] = function () { S.ob = { n: S.ob.n + 1, esc: '' }; };
TOQUES['lg-r'] = function () { S.lg.resp = 1; };
TOQUES['lg-prox'] = function () { S.lg = { n: S.lg.n + 1, resp: 0 }; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'Three moments on one line. Where does each sentence go?',
  marcos: [{ t: 'NOW', s: 'this week' }, { t: 'NEXT YEAR', s: 'this time, 8 AM' }, { t: '2050', s: 'a Monday, 8 AM' }],
  frases: [
    { f: 'I’m studying English right now.', c: 0, d: 'am studying · happening now' },
    { f: 'This time next year, I’ll be working in a new job.', c: 1, d: 'will be working · in progress then' },
    { f: 'Next June, we’ll be living in a bigger apartment.', c: 1, d: 'will be living · in progress then' },
    { f: 'In 2050, people will be driving flying cars.', c: 2, d: 'will be driving · in progress then' },
    { f: 'At 8 AM in 2050, the city will be waking up in neon light.', c: 2, d: 'will be waking up · in progress then' },
    { f: 'My friends are waiting for me now.', c: 0, d: 'are waiting · happening now' }
  ],
  nota: 'Pick a moment on the right of NOW, and the action is in the middle of happening: <b>will be + -ing</b>. I’ll be working. They won’t be sleeping.',
  uso: { p: 'Your turn. This time next year: where will you be, and what will you be doing?', molde: ['This time next year, I’ll be …ing', 'In 2050, I’ll be …ing'], ex: 'This time next year, I’ll be studying in London. In 2050, I’ll be living near the sea.' },
  prof: 'Let the student place the sentences alone. A wrong place comes back with one tap.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
