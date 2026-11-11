/* ============================================================
   SO THAT THEY DON'T FLOAT AWAY · THE TETHERS · LIVE CLASS  06/10/2026
   Main series B1 · propósito: to / in order to (mesma pessoa) · so
   that + sujeito + can / will / won't (no passado could / would /
   wouldn't) · o negativo: so as not to / in order not to · nunca FOR
   + verbo. Armadilha do português (só no guia): "for keep", "for to
   keep", "for it don't float", "to don't", "for not", "so that the
   glass not break", "can" numa história no passado.
   O MUNDO (da aula velha): um dia na estação espacial com Mia e Ken
   (tripulação inventada, fatos reais); o vídeo ouDKD9G9jOE (5:26),
   SELADO em quatro capítulos (0–80–160–245–326), nenhuma fala do vídeo
   na tela e sem nome de canal ou agência; o Easy Reader em seis
   capítulos; a doca com oito cápsulas; a chamada de rádio com a escola.
   A CARA: as AMARRAS — cada coisa da estação flutua numa vigia escura,
   girando devagar; a explicação certa prende a amarra (a linha aparece
   e a coisa para). Na doca, cada cápsula encaixa no anel.
   Fila: FILA-LIVE-386.md · 098.
   ============================================================ */
var YT = 'ouDKD9G9jOE';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'cupula', rot: 'I · You and Your Day', t: 'Before the station: your own day, and the little things you do for a reason.', p: 'Pick a card. Answer out loud, and give the reason. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'modulo', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'modulo', rot: 'III · Life in Space', t: 'How people sleep, eat and stay healthy on the space station.', p: 'The video is sealed. Answer first, then it plays in four short chapters. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'modulo', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'leitor', est: 'o', min: 7, img: 'cozinha', rot: 'V · A Day on the Station', t: 'An easy reader in six short chapters. From the alarm to the eye mask.', p: 'Read the chapter out loud. Pick the true sentence. Then explain WHY. Your teacher taps what you said, and the tether clips on.' },
  { k: 'gx', est: 'f', min: 4, img: 'doca', rot: 'VI · Find the Rule', t: 'Four sentences from the station. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'treino', rot: 'VII · Who Does the Second Part?', t: 'Same person: to. Its own subject: so that. What you avoid: so as not to.', p: 'Read the four lines out loud. Then fix the four traps.' },
  { k: 'doca', est: 'o', min: 7, img: 'doca', rot: 'VIII · The Docking Ring', t: 'Five moments on the station. Finish each one fast, and a capsule docks.', p: 'Your teacher reads the moment and the first words. Finish at once. Your teacher taps what you said.' },
  { k: 'radio', est: 'o', min: 7, extra: 1, img: 'cupula', rot: 'IX · The School Radio Call', t: 'A school on Earth calls the station by radio. You are Mia.', p: 'Your teacher is Alex, 11. Tell them about your day with to, so that and so as not to.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'modulo', rot: 'X · Quick Check', t: 'Five quick lines from the station log.', p: 'Say the whole sentence out loud. Then tap the word.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'cupula', rot: 'XI · What For?', t: 'Your real day: what you do, and what you do it for.', p: 'Pick a card. Answer with to, in order to, so that or so as not to.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XII · Good Night, Station', t: 'Would you live on the station for six months?', p: 'Write your own day with a reason for everything. It goes to your My notes.' }
];

var VOCE = [
  { k: 'The alarm', q: 'What time does your alarm ring? Do you get up at once, or do you stay in bed?', fup: 'Why?', st: ['At … I get up / I stay in bed to …'], ex: 'At 6:30 AM. I stay in bed for ten more minutes, every day.' },
  { k: 'Sleep', q: 'What do you need to sleep well: a fan, a dark room, silence, music?', fup: 'Why that?', st: ['I need … so that …'], ex: 'A fan. I need the noise so that I can fall asleep.' },
  { k: 'Breakfast', q: 'What do you have for breakfast? Is it always the same?', fup: 'Why always the same?', st: ['I have … to …'], ex: 'Coffee and bread with butter. Always the same, to save time.' },
  { k: 'Exercise', q: 'Do you exercise? When, and why?', fup: 'What for?', st: ['I … to … / so that …'], ex: 'I walk in the evening to sleep better.' }
];

var ANTES = [
  { q: 'Guess: how do people sleep in space? Lying down, standing up, or tied to something?', h: 'I think they sleep in a bag, and the bag is tied to the wall.' },
  { q: 'What do you think is the hardest part of a normal day in space?', h: 'Eating, probably. The food can fly away!' }
];
var CAPS = [
  { k: 'PART ONE', ini: 0, fim: 80, q: 'What did you see in this part? Name two things the crew uses.', h: 'I saw a sleeping bag and some straps on the wall.' },
  { k: 'PART TWO', ini: 80, fim: 160, q: 'Pick one thing they do in this part. Why do they do it that way?', h: 'They hold the food bags so that the food doesn’t float away.' },
  { k: 'PART THREE', ini: 160, fim: 245, q: 'What was the strangest thing in this part? What do they need it for?', h: 'The machine with the straps. They need it to stay in one place.' },
  { k: 'THE END', ini: 245, fim: 326, q: 'How does the video end? Would you like to live there for six months?', h: 'Yes, but only to see Earth from the window!' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "The astronaut trained for about five years before the station.", "t": true, "tm": "0:40"},
  {"f": "Only very young people can become astronauts.", "t": false, "tm": "1:03", "c": "No. Now it is open to almost everybody."},
  {"f": "There are no beds on the station.", "t": true, "tm": "1:47"},
  {"f": "He says breakfast in space is nothing like breakfast on Earth.", "t": false, "tm": "2:20", "c": "No. It was very much like breakfast on Earth: eggs, oatmeal, maybe a waffle."},
  {"f": "On the treadmill, he wears bungee cords so that he doesn’t float away.", "t": true, "tm": "2:58"},
  {"f": "His favorite planet is still Saturn.", "t": false, "tm": "4:01", "c": "No. It used to be Saturn, until he saw Earth from space."}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · What do you take to the station?",
  "quem": "Alex",
  "fala": "Alex: “Mia, what do you take to the station, and why?”",
  "reacoes": [
    [
      "A photo",
      "I take a photo of my family so as not to feel alone.",
      "“Aww. I would take a photo of my dog.”"
    ],
    [
      "A book",
      "I take a book to read before I sleep, so that I can relax.",
      "“Good idea. Up there, a book floats!”"
    ],
    [
      "A long cable",
      "I take a long cable so that nothing floats away.",
      "“Smart! Tether everything.”"
    ]
  ]
};
var DEB_COISAS = ["SLEEPING BAG", "TORTILLA", "WRENCH", "TREADMILL STRAPS", "WATER DROP", "EYE MASK"];   /* as seis vigias da aula (os objetos do leitor): cada linha certa prende a amarra */

var CAPITULOS = [
  { k: 'CHAPTER 1', hora: '6:00 AM', lugar: 'CREW QUARTERS', tit: 'Waking Up on the Wall', obj: 'SLEEPING BAG',
    txt: 'Mia’s alarm rings at 6:00 AM. Her crew quarters are as small as a phone booth. There is no bed. Her sleeping bag is tied to the wall, and she sleeps standing up, but in space, up and down don’t matter. A small fan blows air on her face all night. Without it, the air she breathes out stays around her head.',
    v: 'Mia’s sleeping bag is tied to the wall.', f: 'Mia sleeps in a small bed.', q: 'Why is the sleeping bag tied to the wall?',
    ops: [['It’s tied to the wall so that she doesn’t float around at night.', 'ok'], ['It’s tied to the wall for she doesn’t float around at night.', 'forsuj'], ['It’s tied to the wall for not float around at night.', 'fornot']] },
  { k: 'CHAPTER 2', hora: '7:00 AM', lugar: 'THE GALLEY', tit: 'Breakfast Without Bread', obj: 'TORTILLA',
    txt: 'Breakfast is eggs from a bag and coffee from a pouch. Mia drinks with a straw. Ken makes a sandwich, but not with bread: with a tortilla. Bread makes crumbs, and in space crumbs fly into eyes and machines. The salt comes in water and the pepper comes in oil, so that no little grains float away. Every food bag has Velcro to stay on the table.',
    v: 'The pepper comes in oil.', f: 'Ken makes his sandwich with bread.', q: 'Why does Ken use a tortilla, and not bread?',
    ops: [['He uses a tortilla to avoid crumbs in the air.', 'ok'], ['He uses a tortilla for avoid crumbs in the air.', 'forverb'], ['He uses a tortilla for to avoid crumbs in the air.', 'forto']] },
  { k: 'CHAPTER 3', hora: '9:00 AM', lugar: 'THE LAB', tit: 'A Place for Everything', obj: 'WRENCH',
    txt: 'Work starts at 9:00. Today Mia fixes a water pump. The walls of the lab are covered in Velcro and handrails. She puts her feet under a metal bar in order to stay in one place. Every screw goes into a small bag, and every tool has a short cable. On Earth, you drop a tool and it falls. Here, it flies away, and maybe nobody sees it again.',
    v: 'Mia puts her feet under a bar.', f: 'On the station, a dropped tool falls to the floor.', q: 'Why does every tool have a short cable?',
    ops: [['Every tool has a cable so that it won’t fly away.', 'ok'], ['Every tool has a cable for it don’t fly away.', 'forsuj'], ['Every tool has a cable to it not fly away.', 'tosuj']] },
  { k: 'CHAPTER 4', hora: '1:00 PM', lugar: 'THE GYM', tit: 'Two Hours on the Treadmill', obj: 'TREADMILL STRAPS',
    txt: 'After lunch, Ken runs on the treadmill for an hour. Then he lifts on a special machine for another hour. Why so much? In space, bones and muscles get weak very fast, because they don’t carry any weight. Ken wears straps on his shoulders so as not to fly off the treadmill. He sweats a lot, and the sweat doesn’t fall. It sticks to his skin.',
    v: 'Ken exercises for about two hours.', f: 'In space, muscles get stronger.', q: 'Why does Ken exercise for two hours every day?',
    ops: [['He exercises to keep his bones and muscles strong.', 'ok'], ['He exercises for keep his bones and muscles strong.', 'forverb'], ['He exercises for his bones stay strong.', 'forsuj']] },
  { k: 'CHAPTER 5', hora: '5:00 PM', lugar: 'THE WASHROOM', tit: 'Every Drop Counts', obj: 'WATER DROP',
    txt: 'Mia washes her hair with a special shampoo. She doesn’t rinse it. She just uses a towel. Water is very expensive to send from Earth, so the station cleans almost all of its water and uses it again: water from the air, from sweat, even from the bathroom. It sounds strange, but that water is cleaner than a lot of tap water on Earth.',
    v: 'The station cleans its water and uses it again.', f: 'Mia rinses her hair with lots of water.', q: 'Why does the station clean and use its water again?',
    ops: [['It does that in order to need less water from Earth.', 'ok'], ['It does that in order to needing less water from Earth.', 'ing'], ['It does that for to need less water from Earth.', 'forto']] },
  { k: 'CHAPTER 6', hora: '9:30 PM', lugar: 'THE CUPOLA', tit: 'Sixteen Sunrises', obj: 'EYE MASK',
    txt: 'Before bed, Mia floats to the cupola, the room with seven windows, and looks at Earth for ten minutes. The station goes around the planet every ninety minutes, so she sees sixteen sunrises a day. She closes the window covers to protect the glass. In her room, small lights blink on the machines all night, so she puts on an eye mask. Tomorrow, the alarm rings at 6:00 AM again.',
    v: 'The station goes around Earth every ninety minutes.', f: 'Mia sees one sunrise a day.', q: 'Why does Mia put on an eye mask?',
    ops: [['She puts on an eye mask so that the lights don’t wake her up.', 'ok'], ['She puts on an eye mask for the lights don’t wake her up.', 'forsuj'], ['She puts on an eye mask to don’t wake up with the lights.', 'dont']] }
];
var NAO = {
  forsuj: 'A new subject: SO THAT + subject + verb. Never for + subject.', fornot: 'The negative: so as not to / so that … doesn’t. Never for not.',
  forverb: 'Before a verb, purpose is TO. for goes with a noun (for breakfast).', forto: 'Just TO. Never for to.', tosuj: 'A new subject: so that it won’t…',
  ing: 'in order to + the plain verb: in order to need.', dont: 'not goes BEFORE to: so as not to / in order not to. Never to don’t.',
  sonot: 'not goes before to: so as NOT TO.', semmodal: 'After so that + subject: a real verb (wouldn’t break).', passado: 'A story in the past: can → could.',
  tocan: 'so that + subject + could. No to.', cante: 'can + the plain verb, no to: can ask.'
};

var FITAS = [['SAME PERSON', 'to eat · in order to stay'], ['ITS OWN SUBJECT', 'so that the crumbs won’t fly'], ['WHAT YOU AVOID', 'so as not to fall · in order not to wake up'], ['IN THE PAST', 'so that we could see · so that it wouldn’t move']];
var ARMAS = [
  ['NOT FOR', 'Ken exercises for keep his bones strong.', 'Ken exercises to keep his bones strong.', 'Before a verb: to. for goes with a noun.'],
  ['A NEW SUBJECT', 'Every tool has a cable for it don’t fly away.', 'Every tool has a cable so that it won’t fly away.', 'The tool does the second part: so that + subject + won’t.'],
  ['NOT BEFORE TO', 'He wears straps to don’t fly off.', 'He wears straps so as not to fly off.', 'so as not to / in order not to. Never to don’t.'],
  ['IN THE PAST', 'Yesterday they moved the camera so that we can see the arm.', 'Yesterday they moved the camera so that we could see the arm.', 'A story in the past: could, wouldn’t.']
];

var MOMENTOS = [
  { k: 'THE SPACEWALK', diz: 'Before a spacewalk, the crew breathes pure oxygen for about two hours.', ini: 'They do it so as not…', ops: [['They do it so as not to get sick outside.', 'ok'], ['They do it so as to not get sick outside.', 'sonot'], ['They do it for not get sick outside.', 'fornot']] },
  { k: 'THE WINDOWS', diz: 'Last night, a tiny rock flew past the station. The crew closed the window covers.', ini: 'They closed them so that the glass…', ops: [['They closed them so that the glass wouldn’t break.', 'ok'], ['They closed them so that the glass not break.', 'semmodal'], ['They closed them for the glass don’t break.', 'forsuj']] },
  { k: 'THE CAMERA', diz: 'Yesterday, the control team moved a camera to the robot arm.', ini: 'They moved it so that the team on Earth…', ops: [['They moved it so that the team on Earth could see the arm.', 'ok'], ['They moved it so that the team on Earth can see the arm.', 'passado'], ['They moved it so that the team on Earth to can see the arm.', 'tocan']] },
  { k: 'THE WATER', diz: 'The station cleans and uses again almost all of its water, even sweat.', ini: 'It does that in order…', ops: [['It does that in order to need fewer deliveries from Earth.', 'ok'], ['It does that in order to needing fewer deliveries.', 'ing'], ['It does that in order for need fewer deliveries.', 'forverb']] },
  { k: 'YOU', diz: 'Your first morning on the station. You hold a handrail with one hand.', ini: 'I hold it to…', ops: [['I hold it to stay in one place.', 'ok'], ['I hold it for stay in one place.', 'forverb'], ['I hold it for to stay in one place.', 'forto']] }
];

var ALEX = [
  { ela: 'Hi, Mia! How do you sleep up there? Do you have a bed?', voce: 'No bed! My sleeping bag is tied to the wall so that …', resp: 'Cool! So you sleep standing up!' },
  { ela: 'What do you have for breakfast? Toast?', voce: 'No toast. We eat tortillas so as not to … / so that the crumbs …', resp: 'Tortillas in space! I love that.' },
  { ela: 'Do you go to the gym?', voce: 'Every day, for two hours, in order to …', resp: 'Two hours? My dad goes once a week.' },
  { ela: 'What do you do before you go to sleep?', voce: 'I close the window covers to …, and I wear an eye mask so that …', resp: 'Thank you, Mia! Good night up there!' }
];

var QUIZ = [
  { f: 'Mia speaks slowly on the radio ___ the kids can understand.', op: ['so that', 'for', 'to'], nao: 'The kids do the second part: so that + subject + can.' },
  { f: 'Ken wears straps ___ fly off the treadmill.', op: ['so as not to', 'so as to don’t', 'for not'], nao: 'What you avoid: so as not to + verb.' },
  { f: 'They eat tortillas ___ avoid crumbs.', op: ['to', 'for', 'for to'], nao: 'Before a verb: to.' },
  { f: 'Yesterday they moved the camera so that we ___ see the arm.', op: ['could', 'can to', 'to'], nao: 'A story in the past: so that + could.' },
  { f: 'Mia wrote the code on her hand in order ___ forget it.', op: ['not to', 'to don’t', 'for not'], nao: 'not goes before to: in order not to.' }
];

var RODA = [
  { k: 'The alarm', q: 'Do you set more than one alarm? Why?', fup: 'Does it work?', st: ['I set … so that I won’t …'], ex: 'I set three alarms so that I won’t sleep late.' },
  { k: 'The phone', q: 'Where do you leave your phone at night? Why there?', fup: 'Always?', st: ['In the …, so as not to …'], ex: 'In the kitchen, so as not to look at it in bed.' },
  { k: 'English', q: 'Why are you learning English? Give two reasons.', fup: 'Which is the most important?', st: ['To …, and so that I can …'], ex: 'To travel, and so that I can get a better job.' },
  { k: 'The station', q: 'You are going to the station for six months. What do you take, and why?', fup: 'Only one thing!', st: ['A …, so as not to … / so that …'], ex: 'A photo of my family, so as not to feel alone.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, lr: { n: 0, vf: -1, esc: '' }, dc: { n: 0, esc: '' }, ax: { n: 0 }, qz: { n: 0, esc: -1 }, roda: { sel: -1, foi: {} } };

/* a vigia: a coisa flutua; presa = a amarra aparece e ela para */
function vigia(nome, presa, mini) {
  return '<div class="vigia' + (presa ? ' presa' : '') + (mini ? ' mini' : '') + '"><svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="94" class="aro-v"/><circle cx="100" cy="100" r="82" class="vidro-v"/>'
    + (presa ? '<path class="amarra" d="M100 18 C 90 50, 112 70, 100 96"/><circle cx="100" cy="18" r="5" class="gancho"/>' : '')
    + [30, 70, 130, 160].map(function (x, i) { return '<circle cx="' + x + '" cy="' + [60, 150, 40, 120][i] + '" r="1.4" class="estrela"/>'; }).join('')
    + '</svg><span class="coisa">' + nome + '</span></div>';
}
function anel(n, mini) {
  var s = '<svg class="anel' + (mini ? ' mini' : '') + '" viewBox="-120 -120 240 240" role="img" aria-label="Docking ring"><circle r="70" class="anel-c"/><circle r="36" class="centro-a"/><text class="txt-a" y="5">' + n + '/8</text>';
  for (var i = 0; i < 8; i++) { var a = (i * 45 - 90) * Math.PI / 180, x = Math.cos(a) * 92, y = Math.sin(a) * 92, ok = i < n; s += '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + (i * 45) + ')"><rect x="-11" y="-16" width="22" height="32" rx="6" class="porto' + (ok ? ' ok' : '') + '"/></g>'; }
  return s + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · A DAY ON THE STATION</span><h1>So That They <b>Don’t Float Away</b></h1>'
    + '<p class="sub">The sleeping bag is tied to the wall <b>so that she doesn’t float away</b>. The pepper comes in oil <b>so as not to</b> fly into the machines.</p>'
    + '<div class="chipsx"><span class="pilula">to · in order to</span><span class="pilula">so that · so as not to</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the hatch</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + vigia('WRENCH', 1) + vigia('TORTILLA', 0) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + as seis vigias da aula, que prendem uma amarra a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Living in space', '&start=0&end=326'); }
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
  var vs = DEB_COISAS.map(function (nm, i) { var s = d.st[i]; if (s === 1) debAcesa[i] = 1; return vigia(nm, s === 1, 1); }).join('');
  return debTopo(d, 'THE TETHERS', 'Tethered') + '<div class="vigias-deb" aria-hidden="true">' + vs + '</div>';
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
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Living in space', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.leitor = function (c) {
  var e = S.lr, n = e.n, fim = n >= CAPITULOS.length;
  var presas = '<div class="presas">' + CAPITULOS.map(function (x, i) { return '<span class="' + (i < n ? 'ok' : i === n ? 'on' : '') + '">' + x.obj + '</span>'; }).join('') + '</div>';
  if (fim) return cab(c) + presas + '<div class="foco"><div class="pergunta vd"><small>SIX THINGS TIED DOWN</small><h2>But why “so that it won’t”, and not “for it don’t”? And how do you say what you want to AVOID? The rule.</h2></div></div>';
  var x = CAPITULOS[n], ok = e.esc === 'ok', vfOk = e.vf === 0;
  var vf = ordem([[x.v, 0], [x.f, 1]], n + 2);
  return cab(c) + presas + '<div class="mesa-c"><div class="lado-l"><div class="capitulo vd"><small>' + x.k + ' · ' + x.hora + ' · ' + x.lugar + '</small><h3>' + x.tit + '</h3><p>' + x.txt + '</p></div>' + (vfOk ? '<div class="pede vd"><small>WHY?</small><b>' + x.q + '</b></div>' : '') + '</div>'
    + '<div class="lado-l"><div class="vigia-linha">' + vigia(x.obj, ok, 1) + '<div class="lado-l"><h5 class="rot-ouve">WHICH ONE IS TRUE?</h5><div class="versoes">' + vf.map(function (o) { return '<button type="button" class="versao' + (e.vf === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="lr-vf" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div></div></div>'
    + (vfOk ? (ok ? '<div class="balao vd ok-b"><small>TETHERED</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="lr-prox">Next chapter</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 5).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="lr" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NAO[e.esc] + '</p>' : '')) : e.vf === 1 ? '<p class="recusa">Read the chapter again. Find the sentence.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas4">' + FITAS.map(function (f, i) { return '<div class="fita4 f' + i + '"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.doca = function (c) {
  var e = S.dc, n = e.n, fim = n >= MOMENTOS.length, ok = e.esc === 'ok';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + anel(8) + '</div><div class="lado-l"><div class="pergunta vd"><small>8 OF 8</small><h2>Five capsules docked. The ring is full, and the station is quiet.</h2></div></div></div>';
  var x = MOMENTOS[n];
  return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + anel(n + (ok ? 1 : 0)) + '</div><div class="lado-l"><div class="pede vd"><small>' + x.k + '</small><b>' + x.diz + '</b></div><p class="modal-k">START: <b>' + x.ini + '</b></p>'
    + (ok ? '<div class="balao vd ok-b"><small>DOCKED</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="dc-prox">Next capsule</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 9).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="dc" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NAO[e.esc] + '</p>' : '')) + '</div></div>';
};

R.radio = function (c) {
  var e = S.ax, n = Math.min(e.n, ALEX.length - 1), x = ALEX[n];
  return cab(c) + trilha(ALEX, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('cupula') + ')"><span>RADIO · A SCHOOL IN OHIO · ALEX, 11</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>ALEX</small><b>“' + x.ela + '”</b></div>' + fala('ax' + n, [x.voce], ['to', 'in order to', 'so that', 'so as not to']) + '<p class="so-prof dica-aluno">Alex answers: “' + x.resp + '”</p>'
    + (n < ALEX.length - 1 ? '<div><button type="button" class="btn" data-a="ax-prox">Next</button></div>' : '<p class="aprova">The radio goes quiet.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>Who does the second part? Same person: to. Its own subject: so that. Avoid it: so as not to.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 4).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.roda = function (c) { return cartasPessoais(c, RODA, S.roda, 'roda'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I get up at … to …\nI … so that …\nI … so as not to …', 'Your day, with reasons',
    ['to ', 'in order to ', 'so that ', 'so as not to ', 'in order not to '], ['YOUR OWN DAY, WITH A REASON FOR EVERYTHING', 'Same person: to. Its own subject: so that. What you avoid: so as not to.'])
    + '<div class="lado-fim"><div class="vigias-fim">' + vigia('EYE MASK', 1, 1) + vigia('WRENCH', 1, 1) + '</div><div class="grande vd"><span>Ken runs <u>to keep</u> his bones strong</span><span>a cable <u>so that it won’t</u> fly away</span><span>a mask <u>so as not to</u> wake up</span></div>'
    + mostra('fim', 'I get up at 6 to go to the gym before work.<br>I leave my keys by the door so that I can find them fast.<br>I put my phone in the kitchen so as not to look at it in bed.', 1)
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
TOQUES['lr-vf'] = function (b, n) { S.lr.vf = n; };
TOQUES.lr = function (b, n, v) { S.lr.esc = v; };
TOQUES['lr-prox'] = function () { S.lr = { n: S.lr.n + 1, vf: -1, esc: '' }; };
TOQUES.dc = function (b, n, v) { S.dc.esc = v; };
TOQUES['dc-prox'] = function () { S.dc = { n: S.dc.n + 1, esc: '' }; };
TOQUES['ax-prox'] = function () { S.ax.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four sentences. Find the rule yourself.',
  exemplos: [
    'Mia uses a tether <b>to</b> <u>keep</u> her tools close.',
    'Ken ties the bag <b>so that</b> <u>it won’t</u> float away.',
    'Mia checks the straps <b>so that</b> <u>Ken can</u> work safely.',
    'Ken wears an eye mask <b>to</b> <u>sleep</u> better.'
  ],
  pergunta: 'When do we use so that, and not to?',
  opcoes: ['When the second part has its own subject: so that it won’t float', 'When the same person does both parts: so that I keep', 'Always. It is the same as to, but longer'], c: 0,
  nao: 'Not that one. Look at the two to sentences: who does the second part? Then look at the so that ones.',
  regra: '<b>to</b> + verb when the same person does both parts: Mia uses a tether <b>to keep</b> her tools. <b>so that</b> + its own subject + <b>can / will / won’t</b> when someone or something else does the second part: so that <b>it won’t</b> float away. Never <b>for</b> + verb.',
  uso: { p: 'Your turn. One thing you do for yourself, and one thing you do so that someone else can do something.', molde: ['I … to …', 'I … so that … can …'], ex: 'I set an alarm to wake up early. I clean the table so that my kids can do homework.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
