/* ============================================================
   IT CAN'T BE THE BUTLER · THE LANTERNS · LIVE CLASS  06/10/2026
   Main series B1 · dedução no presente: must be (certeza: sim) ·
   might / may / could be (talvez) · can't be (certeza: não) · must be
   + -ing (uma ação agora). Armadilhas do português: "pode ser o
   mordomo" → *It can be the butler*; "deve ser" → *should be*; *it
   doesn't can be*, *must to be*, *might is*, *Maybe is*.
   O MUNDO (da aula velha): a noite dos enigmas — o vídeo do enigma da
   ponte (7yDmGnA8Hw0, 3:50), SELADO, em capítulos; ele PARA antes da
   resposta e o aluno resolve na ponte desenhada; depois o quadro de
   seis mistérios, a regra, o caso da Ashford House (o diamante sumiu,
   todo mundo diz que foi o mordomo), o Riley trancado do lado de fora.
   Falas reais do vídeo (legenda, 25/09): 1:58 "Pause the video now if
   you want to figure it out for yourself!", 2:12 "The key is to
   minimize the time wasted by the two slowest people", 2:56 "he
   probably shouldn't have given the zombies night vision".
   A CARA: as LANTERNAS — a lanterna da ponte vira a régua da certeza:
   chama cheia = must be, meia chama = might / may / could be, apagada
   = can't be. No caso, cada suspeito tem a sua lanterna. Sem nome de
   canal na tela. Fila: FILA-LIVE-386.md · 091.
   ============================================================ */
var YT = '7yDmGnA8Hw0';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'estudo', rot: 'I · You and Mysteries', t: 'Before the riddle: you and puzzles.', p: 'Pick a card. Answer out loud. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'ponte', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'ponte', rot: 'III · The Bridge Riddle', t: 'Four people, one old bridge, one lantern, 17 minutes.', p: 'The video is locked. Answer first, then it plays in three short chapters. It stops before the answer.' },
  { k: 'falas', est: 'l', extra: 1, img: 'ponte', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'ponte', est: 'o', min: 7, img: 'ponte', rot: 'V · The Pause', t: 'The video stopped. Now YOU solve it, trip by trip.', p: 'Think out loud with must be, might be, can’t be. Then tap your decision.' },
  { k: 'resposta', est: 'l', min: 7, extra: 1, img: 'ponte', rot: 'VI · The Answer', t: 'Was your plan right? The last chapter.', p: 'Watch the answer. Then True or Lie.' },
  { k: 'quadro', est: 'o', min: 7, extra: 1, img: 'quadro', rot: 'VII · Four Small Mysteries', t: 'Four notes, four small mysteries. Read the clues and guess.', p: 'Pick a note. Read the clues out loud and answer with a guess. Your teacher taps what you said.' },
  { k: 'regra', est: 'f', min: 6, img: 'mesa', rot: 'VIII · How Sure Are You?', t: 'The lantern says how sure you are.', p: 'Read the three lanterns out loud. Then fix the four traps.' },
  { k: 'caso', est: 'o', min: 7, img: 'mansao', rot: 'IX · The Ashford House Case', t: 'The Blue Star diamond is missing. Eight clues, four suspects.', p: 'Your teacher reads the clue. Deduce at once, with the modal on the card. Each suspect’s lantern shows the answer.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'estudo', rot: 'X · Your Own Mysteries', t: 'Small mysteries from your own life.', p: 'Pick a card. Guess out loud, and say how sure you are. Your teacher gives a different guess.' },
  { k: 'riley', est: 'o', min: 7, extra: 1, img: 'porta', rot: 'XI · Locked Out', t: 'Riley, your roommate, is calling from your front door.', p: 'Your teacher is Riley. Help solve the mystery with a guess each time.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'XII · Quick Check', t: 'Five quick guesses.', p: 'Say the whole sentence out loud. Then tap the words.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XIII · Case Closed', t: 'Is it better to guess fast, or to wait for all the facts?', p: 'Write three small mysteries from your week, and solve them. It goes to your My notes.' }
];

var VOCE = [
  { k: 'Puzzles', q: 'Do you like riddles, puzzles or escape rooms? Which ones?', fup: 'Who gives up first?', st: ['I love … / I don’t like …'], ex: 'I love escape rooms. My friends always give up first!' },
  { k: 'The answer', q: 'When you watch a riddle video, do you stop and think, or do you go straight to the answer?', fup: 'Why?', st: ['Honestly? I …'], ex: 'Honestly? I go straight to the answer. I’m not patient.' },
  { k: 'The detective', q: 'Who is the detective in your family? The person who always knows where things are?', fup: 'How do they do it?', st: ['My … She / He always knows …'], ex: 'My mom. She always knows where my keys are.' },
  { k: 'Lost things', q: 'What did you lose recently? Where did you find it?', fup: 'Where did you look first?', st: ['My … They were …'], ex: 'My glasses. They were on my head!' },
  { k: 'Stories', q: 'Do you like mystery books, series or movies? Tell me about one, without the ending!', fup: 'Did you guess who did it?', st: ['I like … / There’s one about …'], ex: 'There’s one about a rich family and a dead writer. You never know who did it.' }
];

var ANTES = [
  { q: 'Riddle videos: do you pause and think, or do you wait for the answer?', h: 'I usually wait. But today I’ll try!' },
  { q: 'A bridge, four people, one lantern, very little time. What might the problem be?', h: 'The bridge might be old. It could be dark.' }
];
var CAPS = [
  { k: 'THE LAB', ini: 0, fim: 40, q: 'Where are you? Why do you need to run?', h: 'In a mountain lab. I pulled a strange lever, and now zombies are coming.' },
  { k: 'THE TEAM', ini: 40, fim: 68, q: 'How fast is each person? How much time do you have?', h: 'Me: one minute. The assistant: two. The janitor: five. The professor: ten. We have 17 minutes.' },
  { k: 'THE RULES', ini: 68, fim: 121, q: 'What are the rules on the bridge?', h: 'Only two people at a time, and they need the lantern. No tricks.' }
];
var GENTE = { Y: ['YOU', 1], A: ['ASSISTANT', 2], J: ['JANITOR', 5], P: ['PROFESSOR', 10] };
var PASSOS = [
  { k: 'TRIP 1', q: 'Who crosses first, with the lantern?', h: 'It can’t be the professor. It must be the two fast ones.', ops: [['YOU + THE PROFESSOR', 'lento'], ['YOU + THE ASSISTANT', 'ok'], ['THE JANITOR + THE PROFESSOR', 'lanterna']], feito: 'You and the assistant cross together: 2 minutes.' },
  { k: 'BACK', q: 'Someone has to bring the lantern back. Who?', h: 'It must be me. I’m the fastest.', ops: [['YOU', 'ok'], ['BOTH OF YOU', 'dois']], feito: 'You run back with the lantern: 1 minute. Total: 3.' },
  { k: 'TRIP 2', q: 'Now the hard part. Who crosses next?', h: 'It might be the janitor and the professor, together.', ops: [['YOU + THE JANITOR', 'lento2'], ['YOU + THE PROFESSOR', 'lento'], ['THE JANITOR + THE PROFESSOR', 'ok']], feito: 'The janitor and the professor cross together: 10 minutes. Total: 13.' },
  { k: 'BACK', q: 'You are on the wrong side, with no lantern. Who brings it back?', h: 'It can’t be the professor. It must be the assistant!', ops: [['THE PROFESSOR', 'prof'], ['THE JANITOR', 'zelador'], ['THE ASSISTANT', 'ok']], feito: 'The assistant runs back: 2 minutes. Total: 15.' },
  { k: 'LAST TRIP', q: 'Two minutes left. The last crossing?', h: 'It must be you and the assistant, together.', ops: [['YOU + THE ASSISTANT', 'ok'], ['THE ASSISTANT ALONE', 'sozinho']], feito: 'You and the assistant cross: 2 minutes. Total: 17. Cut the ropes!' }
];
var TRAVESSIA = [{ e: 'YAJP', d: '', l: 'e', t: 0 }, { e: 'JP', d: 'YA', l: 'd', t: 2 }, { e: 'YJP', d: 'A', l: 'e', t: 3 }, { e: 'Y', d: 'AJP', l: 'd', t: 13 }, { e: 'YA', d: 'JP', l: 'e', t: 15 }, { e: '', d: 'YAJP', l: 'd', t: 17 }];
var PNAO = {
  lento: 'The professor crosses, and then who brings the lantern back? Too many slow trips. It can’t be him now.',
  lanterna: 'Then the professor or the janitor must bring the lantern back. Too slow!',
  dois: 'Only the lantern needs to come back. One person is enough, and it must be the fastest.',
  lento2: 'Then the professor crosses alone later: 10 more minutes. The two slow ones must cross together.',
  prof: 'The professor? Ten minutes back! It can’t be him.',
  zelador: 'The janitor? Five minutes back. Too slow.',
  sozinho: 'You’re still on the wrong side! Everybody must cross.'
};
var FIM_CAP = { k: 'THE ANSWER', ini: 121, fim: 230, q: 'Was your plan the same? Who carries the lantern back?', h: 'Yes! First I go back, and then the lab assistant.' };
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "To save time, the two slowest people cross together.", "t": true, "tm": "2:12"},
  {"f": "The professor crosses first, with the lantern.", "t": false, "tm": "2:26", "c": "No. You and the lab assistant cross first: two minutes."},
  {"f": "You are the fastest, so you run back with the lantern.", "t": true, "tm": "2:39"},
  {"f": "The professor and the janitor cross in five minutes.", "t": false, "tm": "2:46", "c": "No. It takes ten minutes, because the professor is so slow."},
  {"f": "The professor says he shouldn’t have given the zombies night vision.", "t": true, "tm": "2:56"},
  {"f": "The professor runs back with the lantern.", "t": false, "tm": "3:13", "c": "No. The lab assistant runs back: she is the second fastest."}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · Who is the real villain?",
  "quem": "The narrator",
  "fala": "The narrator: “The professor made the zombies see in the dark. Who is the real villain?”",
  "reacoes": [
    [
      "I’m sure.",
      "It must be the professor. He gave the zombies night vision!",
      "“Case closed. He must be very sorry.”"
    ],
    [
      "Maybe…",
      "It might be the zombies. They can see in the dark now.",
      "“They might be. Run!”"
    ],
    [
      "No way.",
      "It can’t be the lab assistant. She is the one who saved us.",
      "“It can’t be her. She ran back for everybody.”"
    ]
  ]
};

var NOTAS = [
  { k: 'THE DOOR', cor: 'am', pista: 'A wet umbrella by the door. Wet shoes on the mat.', q: 'What’s the weather like outside?', nv: 2, ops: [['It must be raining outside.', 'ok'], ['It must to be raining outside.', 'to'], ['It must be rain outside.', 'ing']] },
  { k: 'THE PHONE', cor: 'vd', pista: 'Your friend’s phone goes straight to voicemail. Three times.', q: 'Why doesn’t she answer?', nv: 1, ops: [['Her battery might be dead.', 'ok'], ['Her battery can be dead.', 'can'], ['Her battery might is dead.', 'is']] },
  { k: 'THE BOX', cor: 'rs', pista: 'A big box at your door. Your birthday is tomorrow. Nobody says anything.', q: 'What is it?', nv: 1, ops: [['It could be a present.', 'ok'], ['It should be a present.', 'should'], ['Maybe is a present.', 'maybe']] },
  { k: 'THE PRICE', cor: 'vd', pista: 'A plain white T-shirt in a store window. The price: $300.', q: 'Is that right?', nv: 0, ops: [['That can’t be right. It must be a mistake.', 'ok'], ['That doesn’t can be right.', 'doesnt'], ['That should be a mistake.', 'should']] }
];
var NAO = {
  to: 'No to: modal + be. must be, can’t be.', ing: 'An action now: must be + -ing. must be raining.', can: 'A guess about now: might or could. (can be = sometimes true: Winter can be cold.)',
  is: 'Modal + be, never is: might be, must be.', doesnt: '100% no: can’t be. The modal makes the negative.', should: 'A deduction from evidence: must or could. should is for advice.',
  maybe: 'Maybe it’s… or It might be… Never Maybe is.'
};

var LANT = [['MUST BE', '100% yes', 2], ['MIGHT · MAY · COULD BE', 'maybe, 50%', 1], ['CAN’T BE', '100% no', 0]];
var ARMAS = [
  ['A GUESS? NOT CAN', 'Who’s at the door? It can be the mailman.', 'It might be the mailman. / It could be the mailman.', 'A guess about now: might or could.'],
  ['EVIDENCE? NOT SHOULD', 'He isn’t here. He should be sick.', 'He isn’t here. He must be sick.', 'A deduction from the evidence: must.'],
  ['NO TO, NO IS', 'She must to be tired. It might is the cat.', 'She must be tired. It might be the cat.', 'Modal + be. Always.'],
  ['100% NO', 'It doesn’t can be the butler.', 'It can’t be the butler.', 'The modal makes the negative by itself.']
];

var SUSP = [['THE BUTLER', '82 · has every key'], ['THE GARDENER', 'strong · muddy boots'], ['THE COOK', 'new · works late'], ['THE DRIVER', 'quiet · lives over the garage']];
var CASO = [
  { k: 'CLUE 1', fato: 'The library window is open, and there’s mud on the carpet.', ini: 'might be', marca: [1, 'MIGHT BE'], ops: [['The thief might be the gardener.', 'ok'], ['The thief can be the gardener.', 'can'], ['The thief might is the gardener.', 'is']] },
  { k: 'CLUE 2', fato: 'The gardener is in the hospital tonight with a broken leg.', ini: 'can’t be', marca: [1, 'CAN’T BE'], ops: [['It doesn’t can be the gardener.', 'doesnt'], ['It can’t be the gardener.', 'ok'], ['It can’t to be the gardener.', 'to']] },
  { k: 'CLUE 3', fato: 'The butler has a key to every room in the house.', ini: 'could be', marca: [0, 'COULD BE'], ops: [['It should be the butler.', 'should'], ['Maybe is the butler.', 'maybe'], ['It could be the butler.', 'ok']] },
  { k: 'CLUE 4', fato: 'The butler is at his sister’s wedding in Boston tonight. The photos are online.', ini: 'can’t be', marca: [0, 'CAN’T BE'], ops: [['It can’t be the butler.', 'ok'], ['It doesn’t can be the butler.', 'doesnt'], ['It can be not the butler.', 'doesnt']] },
  { k: 'CLUE 5', fato: 'There’s white flour on the window, like in a kitchen.', ini: 'must be', marca: [2, 'MIGHT BE'], ops: [['The thief must to be someone from the kitchen.', 'to'], ['The thief must be someone from the kitchen.', 'ok'], ['The thief should be someone from the kitchen.', 'should']] },
  { k: 'CLUE 6', fato: 'The driver’s light is off. You can hear him snoring over the garage.', ini: 'must be · can’t be', marca: [3, 'CAN’T BE'], ops: [['He must be asleep. It can’t be the driver.', 'ok'], ['He must is asleep.', 'is'], ['He can be asleep.', 'can']] },
  { k: 'CLUE 7', fato: 'You hear quiet footsteps upstairs, near the cook’s room.', ini: 'must be + -ing', marca: null, ops: [['Someone must be walk upstairs.', 'ing'], ['Someone must walking upstairs.', 'is'], ['Someone must be walking upstairs.', 'ok']] },
  { k: 'CLUE 8', fato: 'The cook’s door is locked, and there’s a blue light under it.', ini: 'must be', marca: [2, 'MUST BE'], ops: [['The diamond must be in the cook’s room!', 'ok'], ['The diamond should be in the cook’s room!', 'should'], ['Maybe is in the cook’s room!', 'maybe']] }
];

var RODA = [
  { k: 'Missed calls', q: 'You have three missed calls from your mom. What might it be?', fup: 'And if it’s four calls?', st: ['It might be … / It must be …'], ex: 'It might be nothing. She could be bored!' },
  { k: 'The noise', q: 'A noise in your kitchen at 3 AM. What could it be?', fup: 'How sure are you?', st: ['It must be … It can’t be …'], ex: 'It must be the cat. It can’t be a thief: the door is locked.' },
  { k: 'The message', q: 'Your boss writes: “We need to talk.” What might it be?', fup: 'Good news or bad news?', st: ['It might be … It could be …'], ex: 'It might be good news. It could be a new project.' },
  { k: 'The teacher', q: 'Look at your teacher’s room on the screen. Say two deductions about them.', fup: 'Right or wrong? Ask!', st: ['You must be … You can’t be …'], ex: 'You must be a reader: there are books everywhere.' },
  { k: 'The package', q: 'A package arrives with your name, but you didn’t order anything. What is it?', fup: 'Would you open it?', st: ['It could be … It can’t be …'], ex: 'It could be a gift. It can’t be a mistake: my name is on it.' },
  { k: 'The neighbor', q: 'Think of a neighbor you don’t know well. What must their job be? Why?', fup: 'What’s the evidence?', st: ['He / She must be a … because …'], ex: 'He must be a nurse. He leaves at 6 PM in white clothes.' }
];

var RILEY = [
  { ela: 'I’m at the door, and my keys aren’t in my bag!', voce: 'They must be … / They might be …', resp: 'In the car? Maybe. Hold on… No, not in the car.' },
  { ela: 'And there’s a light on in our apartment. Somebody is inside!', voce: 'It might be … / It can’t be …', resp: 'Your brother? He has a key! But wait…' },
  { ela: 'Your brother is in Chicago this week.', voce: 'Then it can’t be … It could be …', resp: 'The neighbor? She waters our plants. Maybe.' },
  { ela: 'I can hear music and voices inside, and it smells like pizza.', voce: 'Someone must be …-ing', resp: 'Ha! Mystery solved: we left the TV on, and the pizza is next door. And my keys? In my jacket pocket.' }
];

var QUIZ = [
  { f: 'Her eyes are closed and she isn’t moving. She ___ asleep.', op: ['must be', 'must to be', 'must is'], nao: 'Modal + base verb: must be.' },
  { f: 'Somebody is at the door. It ___ the pizza guy. I’m not sure.', op: ['might be', 'can be', 'should be'], nao: 'A guess about now, not sure: might be.' },
  { f: 'He’s in Tokyo today. That ___ him at the door.', op: ['can’t be', 'doesn’t can be', 'can be not'], nao: '100% no: can’t be.' },
  { f: 'The lights are on and I hear music. They ___ a party.', op: ['must be having', 'must have', 'must be have'], nao: 'An action now: must be + -ing.' },
  { f: 'She speaks four languages. She ___ a translator. Or a teacher.', op: ['could be', 'can be', 'should be'], nao: 'One possible guess: could be.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, pt: { n: 0, esc: '' }, rs: { p: 0 }, qd: { sel: 0, esc: {} }, cs: { n: 0, esc: '' }, roda: { sel: -1, foi: {} }, ri: { n: 0 }, qz: { n: 0, esc: -1 } };

/* a lanterna: 2 = chama cheia (must be), 1 = meia chama (might / could), 0 = apagada (can't be), -1 = ainda não se sabe */
function lanterna(nv, mini) {
  var chama = nv === 2 ? '<ellipse class="halo" cx="50" cy="78" rx="46" ry="46"/><path class="chama" d="M50 52 C62 66 64 80 58 92 C54 100 46 100 42 92 C36 80 38 66 50 52Z"/><path class="miolo" d="M50 70 C56 78 56 88 52 94 C50 97 48 97 46 94 C44 88 44 78 50 70Z"/>'
    : nv === 1 ? '<ellipse class="halo meia" cx="50" cy="86" rx="30" ry="30"/><path class="chama" d="M50 72 C57 80 58 88 55 94 C53 98 47 98 45 94 C42 88 43 80 50 72Z"/>'
    : nv === 0 ? '<path class="fumaca" d="M50 92 C44 82 56 76 50 66 C45 58 54 52 50 44"/>' : '<text class="interroga" x="50" y="94">?</text>';
  return '<svg class="lanterna n' + nv + (mini ? ' mini' : '') + '" viewBox="0 0 100 130" aria-hidden="true"><path class="alca" d="M34 26 C34 6 66 6 66 26"/><rect class="topo" x="28" y="24" width="44" height="12" rx="4"/>' + chama
    + '<rect class="vidro" x="30" y="36" width="40" height="70" rx="6"/><line class="grade" x1="50" y1="36" x2="50" y2="106"/><rect class="base" x="26" y="106" width="48" height="12" rx="4"/></svg>';
}
function ponteSvg(est) {
  function lado(s, x0) { return s.split('').map(function (p, i) { var g = GENTE[p]; return '<g class="pessoa"><circle cx="' + (x0 + i * 34) + '" cy="58" r="15"/><text x="' + (x0 + i * 34) + '" y="63">' + p + '</text><text class="min" x="' + (x0 + i * 34) + '" y="88">' + g[1] + '′</text></g>'; }).join(''); }
  var lx = est.l === 'e' ? 70 : 530;
  return '<svg class="ponte-svg" viewBox="0 0 600 160" role="img" aria-label="The bridge"><path class="penhasco" d="M0 74 L150 74 L150 160 L0 160Z"/><path class="penhasco" d="M450 74 L600 74 L600 160 L450 160Z"/>'
    + '<path class="corda" d="M150 74 Q300 112 450 74"/><path class="corda" d="M150 58 Q300 96 450 58"/>' + Array.apply(null, Array(13)).map(function (_, i) { var x = 162 + i * 23, y = 74 + 38 * (1 - Math.pow((x - 300) / 150, 2)); return '<line class="tabua" x1="' + x + '" y1="' + (y - 2) + '" x2="' + x + '" y2="' + (y + 8) + '"/>'; }).join('')
    + lado(est.e, 18) + lado(est.d, 462) + '<g class="lampiao" transform="translate(' + lx + ' 104)"><circle r="12"/><text y="5">◆</text></g><text class="zumbis" x="20" y="146">ZOMBIES ←</text><text class="safe" x="580" y="146">SAFE</text></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · RIDDLE NIGHT</span><h1>It Can’t Be <b>the Butler</b></h1>'
    + '<p class="sub">Everybody says it’s the butler. But he’s in Boston tonight, so it <b>can’t be</b> him. It <b>must be</b> someone else.</p>'
    + '<div class="chipsx"><span class="pilula">must be</span><span class="pilula">might · may · could be</span><span class="pilula">can’t be</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Light the lanterns</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + LANT.map(function (l) { return '<div class="lant-c">' + lanterna(l[2]) + '<b>' + l[0].split(' · ')[0] + '</b></div>'; }).join('') + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Three short chapters. It stops before the answer.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The bridge riddle', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 3 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<p class="aprova">1:58 “Pause the video now if you want to figure it out for yourself!” Go to the bridge.</p>') + '</div></div></div>';
  }
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p ? 1 : 0, 'vd-aba') + '</div>' + corpo;
};

R.ponte = function (c) {
  var e = S.pt, n = e.n, fim = n >= PASSOS.length, est = TRAVESSIA[n];
  var topo = '<div class="ponte-c vd">' + ponteSvg(est) + '<div class="relogio-p"><b>' + est.t + '</b><small>OF 17 MIN</small></div></div>';
  if (fim) return cab(c) + topo + '<div class="foco"><div class="pergunta vd"><small>17 MINUTES</small><h2>Everybody is across. Cut the ropes! Now: was the video’s answer the same?</h2></div></div>';
  var x = PASSOS[n], ok = e.esc === 'ok', ant = n > 0 ? '<p class="feito-p">✓ ' + PASSOS[n - 1].feito + '</p>' : '';
  return cab(c) + topo + '<div class="mesa-c"><div class="lado-l">' + ant + '<div class="pergunta vd ja"><small>' + x.k + ' · ' + (n + 1) + ' OF 5</small><h2>' + x.q + '</h2></div>' + mostra('pt' + n, x.h, 1) + '</div>'
    + '<div class="lado-l"><div class="dica-mod"><span class="m2">must be</span><span class="m1">might be</span><span class="m0">can’t be</span></div><h5 class="so-prof rot-ouve">TAP THE DECISION</h5><div class="versoes">' + x.ops.map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="pt" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div><button type="button" class="btn" data-a="pt-prox">Make the trip</button></div>' : e.esc ? '<p class="recusa">' + PNAO[e.esc] + '</p>' : '') + '</div></div>';
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + a ponte da aula que a equipe atravessa a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'The bridge riddle: the answer', '&start=' + FIM_CAP.ini + '&end=' + FIM_CAP.fim); }
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
  var est = TRAVESSIA[Math.min(TRAVESSIA.length - 1, Math.round(d.ok * (TRAVESSIA.length - 1) / n))];
  return debTopo(d, 'THE BRIDGE', 'Lines right') + '<div class="ponte-c vd deb-ponte">' + ponteSvg(est) + '<div class="relogio-p"><b>' + est.t + '</b><small>OF 17 MIN</small></div></div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.resposta = function (c) {
  var e = S.rs, corpo;
  if (e.p === 0) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The bridge riddle: the answer', '&start=' + FIM_CAP.ini + '&end=' + FIM_CAP.fim) + '<small class="cred">The last chapter · it stops by itself</small></div><div class="lado-video"><div class="pergunta vd ja"><small>' + FIM_CAP.k + '</small><h2>' + FIM_CAP.q + '</h2></div>' + mostra('rs0', FIM_CAP.h, 1) + '<div><button type="button" class="btn" data-a="rs-p" data-n="1">After the video</button></div></div></div>';
  else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p ? 2 : 1, 'rs-aba') + '</div>' + corpo;
};

R.quadro = function (c) {
  var e = S.qd, x = NOTAS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="notas">' + NOTAS.map(function (t, i) { var f = e.esc[i] === 'ok'; return '<button type="button" class="nota ' + t.cor + (e.sel === i ? ' on' : '') + '" data-a="qd" data-n="' + i + '"><b>' + t.k + '</b>' + (f ? lanterna(t.nv, 1) : '<i>?</i>') + '</button>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>' + x.k + ' · THE CLUES</small><b>' + x.pista + '</b></div><div class="pergunta vd ja"><h2>' + x.q + '</h2></div>'
    + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div><p class="aprova">Sure, or maybe? The lantern on the note says it.</p>'
      : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 2).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="qd-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '')) + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="tres-l">' + LANT.map(function (l) { return '<div class="lant-r n' + l[2] + '">' + lanterna(l[2], 1) + '<div><small>' + l[1] + '</small><b>' + l[0] + '</b></div></div>'; }).join('') + '</div>'
    + '<p class="exemplo-r">An action now: <b>Someone must be walking upstairs.</b></p>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.caso = function (c) {
  var e = S.cs, n = e.n, fim = n >= CASO.length, rot = {};
  CASO.slice(0, fim ? n : n + (e.esc === 'ok' ? 1 : 0)).forEach(function (k) { if (k.marca) rot[k.marca[0]] = k.marca[1]; });
  function nv(r) { return !r ? -1 : /MUST/.test(r) ? 2 : /CAN/.test(r) ? 0 : 1; }
  var fichas = '<div class="fichas">' + SUSP.map(function (s, i) { return '<div class="ficha n' + nv(rot[i]) + '">' + lanterna(nv(rot[i]), 1) + '<div><b>' + s[0] + '</b><small>' + s[1] + '</small>' + (rot[i] ? '<span class="selo-f">' + rot[i] + '</span>' : '') + '</div></div>'; }).join('') + '</div>';
  if (fim) return cab(c) + trilha(CASO, n) + fichas + '<div class="foco"><div class="pergunta vd"><small>CASE CLOSED</small><h2>Everybody said it was the butler. But it can’t be the butler. It must be the cook.</h2></div></div>';
  var x = CASO[n], ok = e.esc === 'ok';
  return cab(c) + trilha(CASO, n) + fichas + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>' + x.k + '</small><b>' + x.fato + '</b></div><p class="modal-k">THE MODAL ON THE CARD: <b>' + x.ini + '</b></p>' + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div>' : '') + '</div>'
    + '<div class="lado-l">' + (ok ? '<div><button type="button" class="btn" data-a="cs-prox">Next clue</button></div>' : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + x.ops.map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="cs" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NAO[e.esc] + '</p>' : '')) + '</div></div>';
};

R.roda = function (c) { return cartasPessoais(c, RODA, S.roda, 'roda'); };

R.riley = function (c) {
  var e = S.ri, n = Math.min(e.n, RILEY.length - 1), x = RILEY[n];
  return cab(c) + trilha(RILEY, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('porta') + ')"><span>RILEY · YOUR ROOMMATE</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>RILEY</small><b>“' + x.ela + '”</b></div>' + fala('ri' + n, [x.voce], ['must be', 'might be', 'could be', 'can’t be']) + '<p class="so-prof dica-aluno">Riley answers: “' + x.resp + '”</p>'
    + (n < RILEY.length - 1 ? '<div><button type="button" class="btn" data-a="ri-prox">Next</button></div>' : '<p class="aprova">Mystery solved. A very silly one.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>Sure yes: must be. Maybe: might, may, could be. Sure no: can’t be.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 4).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'This week … It must be …\n… It might be …\n… It can’t be …', 'Your mysteries',
    ['It must be ', 'It might be ', 'It could be ', 'It can’t be ', 'must be …-ing'], ['GUESS FAST, OR WAIT FOR ALL THE FACTS?', 'Three small mysteries from your week, and your deductions.'])
    + '<div class="lado-fim"><div class="tres-l mini">' + LANT.map(function (l) { return '<div class="lant-c">' + lanterna(l[2], 1) + '<b>' + l[0].split(' · ')[0] + '</b></div>'; }).join('') + '</div><div class="grande vd"><span><u>must be</u> · 100% yes</span><span><u>might · may · could be</u> · maybe</span><span><u>can’t be</u> · 100% no</span></div>'
    + mostra('fim', 'My sister didn’t answer my messages all day. She must be busy at work.<br>There’s a new car outside. It might be the neighbor’s son.<br>My keys aren’t in my bag. They can’t be at the office: I drove home!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.pt = function (b, n, v) { S.pt.esc = v; };
TOQUES['pt-prox'] = function () { S.pt = { n: S.pt.n + 1, esc: '' }; };
/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['rs-p'] = function (b, n) { S.rs.p = n; };
/* abas livres (23/10): BEFORE/WATCH ficam na cena do vídeo; o AFTER mora na cena da resposta */
TOQUES['vd-aba'] = function (b, n) { if (n < 2) { S.video.p = n; return; } S.rs.p = 1; vai(L.map(function (x) { return x.k; }).indexOf('resposta')); };
TOQUES['rs-aba'] = function (b, n) { if (n === 0) { S.video.p = 0; vai(L.map(function (x) { return x.k; }).indexOf('video')); return; } S.rs.p = n - 1; };
TOQUES.qd = function (b, n) { S.qd.sel = n; };
TOQUES['qd-v'] = function (b, n, v) { S.qd.esc[S.qd.sel] = v; };
TOQUES.cs = function (b, n, v) { S.cs.esc = v; };
TOQUES['cs-prox'] = function () { S.cs = { n: S.cs.n + 1, esc: '' }; };
TOQUES['ri-prox'] = function () { S.ri.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };
