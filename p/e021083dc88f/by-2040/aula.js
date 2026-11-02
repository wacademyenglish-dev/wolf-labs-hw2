/* ============================================================
   BY 2040 WE WILL HAVE… · THE BLUEPRINT · LIVE CLASS  06/10/2026
   Main series B2 · future perfect (will have + particípio: acabado
   ANTES de um momento futuro — olhar para trás) × future continuous
   (will be + -ing: em andamento NAQUELE momento — olhar em volta); by
   (até, prazo) × until; by the time + presente simples. Erros: "By
   2040 we will build", "In 2040 I will work" para uma cena, "will have
   finish", "will has", "until 2040" para prazo, "by the time you will
   read".
   O MUNDO (da aula velha): a cidade enterra uma cápsula do tempo que
   abre em 2040; o vídeo sobre o futuro das cidades (fKnAJCSGSdk, 4:08,
   selado em cinco capítulos: 5–27–82–112–163–248); a planta de 2040
   com oito lotes; os seis bilhetes da cápsula; a repórter Noa, de 2040.
   Sem áudio além do vídeo. Nenhum nome de canal e nenhuma fala do
   vídeo na tela: as perguntas são abertas.
   A CARA: a PLANTA DE 2040 em azul-projeto — oito lotes, e o prédio
   sobe em linhas de desenho quando a previsão sai na forma certa; a
   RÉGUA "olhar para trás × olhar em volta" com 2040 no meio; e a
   CÁPSULA DO TEMPO que enche com os bilhetes.
   Fila: FILA-LIVE-386.md · 118.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'ponte', rot: 'I · Your Future', t: 'Where will you be in 2040?', p: 'Tap a card. Answer out loud. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'muralha', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'muralha', rot: 'III · The Future of Cities', t: 'Ten thousand years of cities in four minutes.', p: 'The video is sealed. Answer first, then it plays in five chapters. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'muralha', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'trem', rot: 'V · The Rule', t: 'Stand in 2040. Look back, and look around.', p: 'Say each wrong line the right way out loud. Then tap SHOW ME.' },
  { k: 'planta', est: 'o', min: 7, img: 'capa', rot: 'VI · The 2040 Blueprint', t: 'Eight empty plots on the 2040 blueprint. Predict each one, fast.', p: 'Your teacher reads the plot. Predict with BY 2040 … WILL HAVE or IN 2040 … WILL BE. The right form raises the building.' },
  { k: 'capsula', est: 'o', min: 7, img: 'capsula', rot: 'VII · The Capsule', t: 'Six slips for the capsule. A message to the person who opens it, maybe you.', p: 'Two sentences per slip: what you will have done, and what you will be doing. Your teacher taps each form they heard.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'fazenda', rot: 'VIII · The 2040 Wheel', t: 'Will the future be better, or just different?', p: 'Tap any five. Predict, and defend it. Your teacher takes the other side.' },
  { k: 'noa', est: 'o', min: 7, extra: 1, img: 'estudio', rot: 'IX · A Call from 2040', t: 'Noa is a radio reporter in 2040. She found your message in the capsule.', p: 'Your teacher is Noa. Answer about your real plans, then ask back.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'telhado', rot: 'X · Quick Check', t: 'Six quick sentences about 2040.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XI · Open in 2040', t: 'Will the future be better, or just different?', p: 'Write your own letter to 2040. It goes to your My notes.' }
];

var YT = 'fKnAJCSGSdk';

var VOCE = [
  { k: 'YOUR AGE', q: 'How old will you be in 2040? How do you imagine yourself?', fup: 'Where will you be living?', st: ['In 2040 I’ll be …', 'I hope I’ll be …'], ex: 'In 2040 I’ll be fifty-two. I hope I’ll be living near the sea.' },
  { k: 'YOUR CITY', q: 'How has your city changed in the last ten years?', fup: 'For better or worse?', st: ['It has …'], ex: 'It has grown a lot. There are new buildings everywhere.' },
  { k: 'YOUR WORK', q: 'Do you think your job will still exist in 2040?', fup: 'What will it look like?', st: ['I think it will …', 'Machines will be …'], ex: 'I think it will exist, but machines will be doing half of it.' },
  { k: 'A GOAL', q: 'What is one big thing you want to do before 2040?', fup: 'What’s stopping you now?', st: ['I want to …'], ex: 'I want to learn to play the piano and travel to Japan.' },
  { k: 'THE WORLD', q: 'Are you optimistic or pessimistic about the future? Why?', fup: 'About what, exactly?', st: ['I’m optimistic about …', 'I’m worried about …'], ex: 'I’m optimistic about technology but worried about the climate.' }
];

var ANTES = [
  { q: 'Today, more than half of the world lives in cities. What percentage do you think will live in cities by 2050?', h: 'I think by 2050 about seventy percent will be living in cities.' },
  { q: 'Why do you think people first moved from farms to cities?', h: 'Maybe because there were more jobs and more food.' }
];
var CAPS = [
  { k: 'MORE THAN HALF', ini: 5, fim: 27, q: 'What will the number be by the middle of the century?', h: 'About seventy percent.' },
  { k: 'THE FIRST VILLAGES', ini: 27, fim: 82, q: 'Why did the first villages have to move every few years? What changed that?', h: 'The soil got tired. Watering and working the soil let people stay.' },
  { k: 'TRADE', ini: 82, fim: 112, q: 'How did trade change cities?', h: 'Cities made goods, so they needed roads and ports, and more workers.' },
  { k: 'CROWDED', ini: 112, fim: 163, q: 'Why were some old cities so crowded?', h: 'There was no transport and there were walls, so everything had to be close.' },
  { k: 'THE FUTURE', ini: 163, fim: 248, q: 'What will cities need to change? Name two ideas.', h: 'Farms inside buildings, homes built up, and clean energy.' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "By the middle of the century, about 70 percent of people will live in cities.", "t": true, "tm": "0:11"},
  {"f": "A hundred years ago, half of all people lived in cities.", "t": false, "tm": "0:14", "c": "No. Only two in ten people lived in a city."},
  {"f": "The first villages never had to move.", "t": false, "tm": "0:52", "c": "No. They had to move every few years, because the soil got tired."},
  {"f": "Roads and ports needed workers, so people moved to the cities.", "t": true, "tm": "1:43"},
  {"f": "In the future, food could be grown in vertical farms and on rooftops.", "t": true, "tm": "3:17"},
  {"f": "Most future homes will be big houses for one family.", "t": false, "tm": "3:29", "c": "No. More homes will be built up, not out."}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · Which idea will your city have by 2040?",
  "quem": "Noa",
  "fala": "Noa: “Which idea from the video has happened in your city?”",
  "reacoes": [
    [
      "Rooftop gardens",
      "By 2040 my city will have built rooftop gardens on every school.",
      "“I can see them from here. And what are the kids doing up there?”"
    ],
    [
      "Vertical farms",
      "By 2040 we will have turned the old parking lots into vertical farms.",
      "“True! People are eating lunch from them right now.”"
    ],
    [
      "Taller homes",
      "In 2040 most families will be living in tall green towers.",
      "“Close! Some are. Others still live on the ground.”"
    ]
  ]
};
var DEB_LOTE = [4, 7, 0, 1, 2, 3];   /* cada linha certa ergue um lote da planta: CARS, CAPSULE, FARM, TRAIN, ROOFS, TOWER */

var CAMINHOS = [
  { k: 'LOOK BACK', antes: 'By 2040, the city will build a new train line.', depois: 'By 2040, the city <b>will have built</b> a new train line.', nota: 'BY = at that moment or before. Finished: will HAVE + participle.' },
  { k: 'LOOK AROUND', antes: 'This time in 2040, I will sit in a self-driving car.', depois: 'This time in 2040, I <b>will be sitting</b> in a self-driving car.', nota: 'A scene in progress at that moment: will BE + -ing.' },
  { k: 'BY THE TIME', antes: 'By the time I will retire, I will have paid for my house.', depois: 'By the time I <b>retire</b>, I <b>will have paid</b> for my house.', nota: 'After by the time / when / before: the present simple, never will.' },
  { k: 'BY, NOT UNTIL', antes: 'I will have finished the course until June.', depois: 'I will have finished the course <b>by</b> June.', nota: 'A deadline: BY. Until = the whole time up to then.' }
];

var NOTA = {
  perf: 'BY 2040 = finished before then: WILL HAVE + participle.', part: 'After WILL HAVE: the participle (finished, turned).', cont: 'A scene in progress at that moment: WILL BE + -ING.', ing: 'WILL BE + verb-ING.',
  ate: 'A deadline: BY. Until = the whole time.', have: 'WILL HAVE, never will has.', time: 'After BY THE TIME: the present simple.'
};

var LOTES = [
  { k: 'FARM', rot: 'VERTICAL FARM', q: 'Plot 1: the old parking lot. By 2040?', h: 6, ops: [['By 2040 the city will have turned it into a vertical farm.', 'ok'], ['By 2040 the city will turn it into a vertical farm.', 'perf'], ['By 2040 the city will have turn it into a vertical farm.', 'part']] },
  { k: 'TRAIN', rot: 'THE NEW LINE', q: 'Plot 2: the train line to the airport. By 2040?', h: 2, ops: [['By 2040 they will have finished the new train line.', 'ok'], ['By 2040 they will finish the new train line.', 'perf'], ['By 2040 they will have finish the new train line.', 'part']] },
  { k: 'ROOFS', rot: 'ROOFTOP GARDENS', q: 'Plot 3: the school roofs, a normal Monday in 2040. What will be happening?', h: 3, ops: [['In 2040 kids will be growing vegetables on the roofs.', 'ok'], ['In 2040 kids will grow vegetables on the roofs.', 'cont'], ['In 2040 kids will be grow vegetables on the roofs.', 'ing']] },
  { k: 'TOWER', rot: 'HOUSING TOWER', q: 'Plot 4: the housing tower. By 2040, how many people?', h: 9, ops: [['By 2040 five thousand people will have moved in.', 'ok'], ['By 2040 five thousand people will move in.', 'perf'], ['Until 2040 five thousand people will have moved in.', 'ate']] },
  { k: 'CARS', rot: 'THE HIGHWAY', q: 'Plot 5: the highway, rush hour in 2040. What will be happening?', h: 1, ops: [['In 2040 self-driving buses will be carrying most people.', 'ok'], ['In 2040 self-driving buses carry most people.', 'cont'], ['In 2040 self-driving buses will carrying most people.', 'ing']] },
  { k: 'SUN', rot: 'SOLAR PARK', q: 'Plot 6: the old power plant. By 2040?', h: 2, ops: [['By 2040 the city will have replaced it with a solar park.', 'ok'], ['By 2040 the city will replace it with a solar park.', 'perf'], ['By 2040 the city will has replaced it with a solar park.', 'have']] },
  { k: 'PARK', rot: 'THE RIVER PARK', q: 'Plot 7: the river park, a Sunday afternoon in 2040. What will people be doing?', h: 2, ops: [['In 2040 people will be swimming in the clean river.', 'ok'], ['In 2040 people will swim in the clean river.', 'cont'], ['In 2040 people will be swim in the river.', 'ing']] },
  { k: 'CAPSULE', rot: 'THE CAPSULE', q: 'Plot 8: the square with the capsule. By the time they open it?', h: 4, ops: [['By the time they open it, the city will have changed completely.', 'ok'], ['By the time they will open it, the city will have changed.', 'time'], ['By the time they open it, the city will change completely.', 'perf']] }
];

var TIRAS = [
  { k: 'WORK', q: 'Your work or studies in 2040.', h: 'By 2040 I will have changed jobs twice. I will be running my own business.' },
  { k: 'HOME', q: 'Your home in 2040.', h: 'By then I will have bought a small house. I will be living outside the city.' },
  { k: 'SKILLS', q: 'Something you will have learned, and something you will be learning.', h: 'By 2040 I will have learned Spanish. I will be learning Japanese.' },
  { k: 'A DAY', q: 'This exact time of day, in 2040.', h: 'At this time in 2040, I will be drinking coffee on my balcony.' },
  { k: 'THE PLANET', q: 'One thing the world will have fixed, and one it won’t.', h: 'By 2040 we will have stopped using coal, but we will still be fighting about plastic.' },
  { k: 'A PROMISE', q: 'A promise to your 2040 self.', h: 'By the time you read this, I will have kept my promise: I will be traveling more.' }
];

var RODA = [
  { k: 'CARS', q: 'By 2040, will people have stopped owning cars?', fup: 'And in small towns?', st: ['By 2040, …', 'People will be …'], ex: 'In big cities, yes. People will be sharing everything.' },
  { k: 'WORK', q: 'In 2040, will most people be working from home?', fup: 'Which jobs can’t?', st: ['In 2040, …'], ex: 'Not most. Nurses and cooks will still be going to work.' },
  { k: 'SCHOOL', q: 'By 2040, will AI have replaced teachers?', fup: 'What will teachers be doing?', st: ['By 2040, AI will have …'], ex: 'No way. It will have changed their job, not replaced it.' },
  { k: 'FOOD', q: 'In 2040, will we be eating meat grown in labs?', fup: 'Would you?', st: ['In 2040, people will be …'], ex: 'I think many people will be eating it, but not me.' },
  { k: 'MONEY', q: 'By 2040, will cash have disappeared?', fup: 'Is that good?', st: ['By 2040, cash will have …'], ex: 'In my country it will have almost disappeared.' },
  { k: 'CITIES', q: 'By 2040, will your city have become better or worse to live in?', fup: 'Why?', st: ['By 2040, my city will have …'], ex: 'Better, if they finish the metro.' },
  { k: 'HEALTH', q: 'In 2040, will people be living to 100 more often?', fup: 'Would you want to?', st: ['In 2040, people will be …'], ex: 'Yes, and they will be working until 80!' },
  { k: 'YOU', q: 'By 2040, what will you have stopped doing?', fup: 'And what will you be doing instead?', st: ['By 2040, I will have stopped …'], ex: 'I will have stopped eating fast food. I hope.' }
];

var NOA = [
  { ela: 'Hello from 2040! Your message says you had plans. What will you have done by the time you’re forty?', voce: ['By the time I’m forty, I will have …', 'And you? What had you done by forty?'], resp: 'I had moved to three countries. The capsule said you would travel. Did you?' },
  { ela: 'In your time, what were people worrying about? And what will they be worrying about in 2040?', voce: ['In 2040, people will be worrying about …', 'Am I right?'], resp: 'Close! Everybody is worrying about water now.' },
  { ela: 'What will you be doing on a normal Saturday in 2040?', voce: ['On a Saturday in 2040, I will be …', 'What are people doing on Saturdays there?'], resp: 'Most people are gardening on their roofs. It’s the new football.' },
  { ela: 'Last question for the show: by 2040, will the world have become a better place?', voce: ['I think by 2040 the world will have …', 'Has it?'], resp: 'Some things, yes. The rivers are clean. We still can’t fix traffic!' }
];

var QUIZ = [
  { a: 'By 2040, the city ', b: ' ten vertical farms.', op: ['will have built', 'will build', 'builds'], w: 'BY 2040 = finished before: <b>will have built</b>.' },
  { a: 'This time next year, I ', b: ' in a new job.', op: ['will be working', 'will have worked', 'work'], w: 'A scene at a future moment: <b>will be working</b>.' },
  { a: 'By the time you ', b: ' this, I will have moved.', op: ['read', 'will read', 'will have read'], w: 'After BY THE TIME: the present simple.' },
  { a: 'I will have ', b: ' my degree by June.', op: ['finished', 'finish', 'finishing'], w: 'After WILL HAVE: the participle.' },
  { a: 'I will have paid for my car ', b: ' December.', op: ['by', 'until', 'in the'], w: 'A deadline: <b>by</b>.' },
  { a: 'In 2040, people ', b: ' food on their roofs.', op: ['will be growing', 'will have grow', 'are grown'], w: 'A scene in progress in 2040: <b>will be growing</b>.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, rg: { abre: {} }, pl: { sel: 0, esc: {} }, cp: { sel: -1, f: {} }, roda: { sel: -1, foi: {} }, noa: { n: 0, resp: 0 }, qz: { n: 0, esc: -1 } };

/* a planta de 2040: oito lotes; o prédio sobe quando a previsão sai certa */
function planta(esc, sel, mini) {
  var w = 800, base = 300;
  var lotes = LOTES.map(function (l, i) {
    var x = 30 + i * 95, ok = esc[i] === 'ok', alt = ok ? 30 + l.h * 22 : 0;
    var andares = '';
    for (var a = 1; ok && a < Math.max(1, l.h); a++) andares += '<path d="M' + (x + 6) + ' ' + (base - a * 22) + ' H' + (x + 74) + '"/>';
    return '<g class="b4-lote' + (ok ? ' ergueu' : '') + (sel === i ? ' on' : '') + '" data-a="pl" data-n="' + i + '">'
      + '<rect class="b4-terreno" x="' + x + '" y="' + (base + 4) + '" width="80" height="20" rx="3"/>'
      + (ok ? '<rect class="b4-predio" x="' + x + '" y="' + (base - alt) + '" width="80" height="' + alt + '"/><g class="b4-andares">' + andares + '</g>' : '<rect class="b4-vazio" x="' + x + '" y="' + (base - 60) + '" width="80" height="60" rx="2"/>')
      + '<text x="' + (x + 40) + '" y="' + (base + 18) + '" text-anchor="middle">' + l.k + '</text></g>';
  }).join('');
  return '<div class="b4-planta' + (mini ? ' mini' : '') + '"><svg viewBox="0 0 ' + w + ' 340" aria-hidden="true"><defs><pattern id="b4g" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0 H0 V20" fill="none" stroke="rgba(110,170,240,.10)"/></pattern></defs><rect width="' + w + '" height="340" fill="url(#b4g)"/><text x="16" y="26" class="b4-tit">CITY PLAN · 2040</text>' + lotes + '</svg></div>';
}
/* a régua: olhar para trás × olhar em volta */
function regua(foco) {
  return '<div class="b4-regua' + (foco ? ' ' + foco : '') + '"><span class="b4-hoje">NOW</span><div class="b4-eixo"><i class="b4-tras"></i><i class="b4-volta"></i><b class="b4-ponto">2040</b></div>'
    + '<div class="b4-leg"><span class="t"><b>will have + participle</b> · finished before · look back</span><span class="v"><b>will be + -ing</b> · in progress then · look around</span></div></div>';
}
/* a cápsula: enche com os bilhetes */
function capsula(n) {
  return '<div class="b4-capsula"><div class="b4-tampa"></div><div class="b4-corpo">' + TIRAS.map(function (t, i) { return '<i class="' + (i < n ? 'dentro' : '') + '">' + t.k + '</i>'; }).join('') + '</div><small>OPEN IN 2040</small></div>';
}
function frases(acao, ops, esc, semente) {
  return '<div class="b4-ops">' + ordem(ops, semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · THE 2040 CAPSULE</span><h1>By 2040 <b>We Will Have …</b></h1>'
    + '<p class="sub">The city buries a capsule tonight. It opens in 2040. What <b>will have changed</b>, and what <b>will we be doing</b>?</p>'
    + '<div class="chipsx"><span class="pilula">will have built · look back</span><span class="pilula">will be living · look around</span><span class="pilula">by · by the time</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the blueprint</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + planta({ 0: 'ok', 3: 'ok', 5: 'ok', 7: 'ok' }, -1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + a planta de 2040 que ganha um prédio por acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Cities and the future', '&start=0&end=248'); }
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
  var esc = {}; d.st.forEach(function (s, i) { if (s === 1) esc[DEB_LOTE[i]] = 'ok'; });
  return debTopo(d, 'CITY PLAN', 'Plots built') + planta(esc, -1, 1).replace(/ data-a="pl" data-n="\d+"/g, '');
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
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Five short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Cities and the future', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 5 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.regra = function (c) {
  var e = S.rg;
  return cab(c) + regua('') + '<div class="b4-caminhos">' + CAMINHOS.map(function (x, i) { var ab = e.abre[i]; return '<div class="b4-caminho vd' + (ab ? ' aberto' : '') + '"><small>' + x.k + '</small><p class="antes"><s>' + x.antes + '</s></p>' + (ab ? '<p class="depois">' + x.depois + '</p><p class="nota">' + x.nota + '</p>' : '<button type="button" class="btn" data-a="rg" data-n="' + i + '">Show me</button>') + '</div>'; }).join('') + '</div>';
};

R.planta = function (c) {
  var e = S.pl, x = LOTES[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitos = LOTES.filter(function (_, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + planta(e.esc, e.sel, 1) + '<p class="pista">' + feitos + ' of 8 built · tap a plot</p></div>'
    + '<div class="lado-l"><div class="b4-lote-c vd"><small>' + x.rot + ' · YOUR TEACHER READS IT</small><p>' + x.q + '</p></div><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5>' + frases('pl-v', x.ops, esc, e.sel + 1)
    + (ok ? '<p class="aprova">' + (feitos >= 8 ? 'Eight plots, eight buildings. The 2040 skyline is on the table. Now the capsule.' : 'The building goes up. Next plot.') + '</p>' : esc ? '<p class="recusa">' + NOTA[esc] + ' Say it again.</p>' : '<p class="so-prof dica-aluno">A present-simple or simple-future answer doesn’t build anything.</p>') + '</div></div>';
};

R.capsula = function (c) {
  var e = S.cp, feitos = TIRAS.filter(function (_, i) { var f = e.f[i] || {}; return f.t && f.v; }).length;
  var grade = '<div class="b4-tiras">' + TIRAS.map(function (t, i) { var f = e.f[i] || {}; return '<button type="button" class="b4-tira' + (e.sel === i ? ' on' : '') + (f.t && f.v ? ' feita' : '') + '" data-a="cp" data-n="' + i + '"><b>' + t.k + '</b><small>' + (f.t ? '✓ HAVE' : '· HAVE') + ' ' + (f.v ? '✓ BE' : '· BE') + '</small></button>'; }).join('') + '</div>';
  var lado = '<p class="dica-aluno">Tap a slip.</p>';
  if (e.sel >= 0) { var x = TIRAS[e.sel], f = e.f[e.sel] || {};
    lado = '<div class="pergunta vd ja"><small>SLIP · ' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('cp' + e.sel, ['By 2040 I will have …', 'In 2040 I will be …'], ['will have', 'will be', 'by then', 'by the time'])
      + '<h5 class="so-prof rot-ouve">TAP EACH FORM YOU HEARD</h5><div class="b4-formas">' + [['t', 'WILL HAVE + PARTICIPLE'], ['v', 'WILL BE + -ING']].map(function (o) { return '<button type="button" class="versao grande-v' + (f[o[0]] ? ' certo' : '') + '" data-a="cp-f" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' + mostra('cpm' + e.sel, x.h, 1); }
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + capsula(feitos) + grade + '</div><div class="lado-l">' + lado + (feitos >= 6 ? '<p class="aprova">Six slips in the capsule. The lid closes.</p>' : '') + '</div></div>';
};

R.roda = function (c) { return cartasPessoais(c, RODA, S.roda, 'roda', ['I disagree, because …', 'Maybe, but …', 'By 2040, …']); };

R.noa = function (c) {
  var e = S.noa, n = Math.min(e.n, NOA.length - 1), fim = e.n >= NOA.length, x = NOA[n];
  if (fim) return cab(c) + '<div class="foco"><div class="b4-radio vd"><small>CALL ENDED · 2040</small><b>The line goes quiet.</b></div><div class="pergunta vd"><h2>What did Noa tell you about 2040? Two sentences: one with will have, one with will be.</h2></div></div>';
  return cab(c) + trilha(NOA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="b4-radio vd on"><small>● LIVE FROM 2040 · NOA</small><p>“' + x.ela + '”</p></div>' + (e.resp ? '<div class="balao vd ok-b"><small>NOA</small><p>“' + x.resp + '”</p></div>' : '') + '</div>'
    + '<div class="lado-l">' + fala('noa' + n, x.voce, []) + (e.resp ? '<div><button type="button" class="btn" data-a="noa-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="noa-r">Answered and asked · Noa replies</button></div><p class="dica-aluno">Answer about your real plans. Then ask back.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>What will you have done by this time next year? What will you be doing at this exact time next Saturday?</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.op[0] : '_____') + '</u>' + x.b + '</p></div><div class="b4-ops linha">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Look back (will have) or look around (will be)?</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Dear me in 2040,\nBy the time you read this, I will have …\nRight now in 2040, you will be …\nI think the world will have …', 'A letter to 2040',
    ['will have', 'will be', 'by 2040', 'by the time', 'finished', 'living', 'working'], ['A LETTER TO 2040', 'Better, or just different? Then what you will have done, and what you will be doing.'])
    + '<div class="lado-fim">' + capsula(6)
    + '<div class="grande vd"><span>look back: <u>will have + participle</u></span><span>look around: <u>will be + -ing</u></span><span><u>by</u> 2040 · <u>by the time</u> + present</span><span>not <s>by 2040 we will build</s>, not <s>until June</s></span></div>'
    + mostra('fim', 'Dear me in 2040,<br>By the time you read this, I will have learned to play the piano.<br>Right now, you will be living near the sea.<br>I think the world will have become different, not worse.', 1)
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
TOQUES.rg = function (b, n) { S.rg.abre[n] = 1; };
TOQUES.pl = function (b, n) { S.pl.sel = n; };
TOQUES['pl-v'] = function (b, n, v) { S.pl.esc[S.pl.sel] = v; };
TOQUES.cp = function (b, n) { S.cp.sel = n; };
TOQUES['cp-f'] = function (b, n, v) { var f = S.cp.f[S.cp.sel] = S.cp.f[S.cp.sel] || {}; f[v] = !f[v]; };
TOQUES['noa-r'] = function () { S.noa.resp = 1; };
TOQUES['noa-prox'] = function () { S.noa = { n: S.noa.n + 1, resp: 0 }; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };
