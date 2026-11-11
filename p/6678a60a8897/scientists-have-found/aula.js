/* ============================================================
   SCIENTISTS HAVE FOUND… · THE FLAP BOARD · LIVE CLASS  06/10/2026
   Main series B1 · notícia nova: have / has + particípio · a coisa
   primeiro: has / have been + particípio · com um tempo terminado:
   passado simples · o negativo que conserta: Life hasn't been found.
   Armadilha do português (só no guia): o sujeito depois do verbo na
   passiva ("Was found a rock") e o "it" inventado ("It has been found
   a rock"); passiva sem BEEN; passado simples para notícia nova com
   just / so far / yet. Erros: Scientists has found · have find · has
   being found · has been discover · has been just found.
   O MUNDO (da aula velha): o aluno é o editor da noite na redação de
   ciência; o vídeo sobre a rocha de Marte (Hbh0tRaZUmw, 3:47), SELADO
   em quatro capítulos (0–55–115–170–227), sem nenhuma fala do vídeo na
   tela e sem nome de canal; seis histórias na bancada; às 8:52 o
   letreiro; o site rival escreve LIFE FOUND ON MARS e só a passiva
   negativa conserta; a âncora Dana às 9.
   A CARA: o PAINEL DE LETRAS QUE VIRAM (split-flap) da redação, âmbar
   sobre preto: cada manchete entra virando letra por letra; a certa
   fica acesa, a do site rival pisca em vermelho até ser consertada.
   Fila: FILA-LIVE-386.md · 097.
   ============================================================ */
var YT = 'Hbh0tRaZUmw';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'redacao', rot: 'I · You and the News', t: 'Before the newsroom: you and the news.', p: 'Pick a card. Answer out loud. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'marte', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'marte', rot: 'III · The Mars Story', t: 'A rock on Mars, and a question everybody is asking.', p: 'The video is locked. Answer first, then it plays in four short parts. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'marte', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'bancada', est: 'o', min: 7, img: 'laboratorio', rot: 'V · The Sample Rack', t: 'Six stories tonight, one on each sample tube.', p: 'Pick a tube. Read the lab note out loud and answer the question. Then say the news in ONE sentence. Your teacher taps what you said.' },
  { k: 'gx', est: 'f', min: 4, img: 'laboratorio', rot: 'VI · Find the Rule', t: 'Four headlines. You find the rule.', p: 'Read the four headlines out loud. Look at the lit verbs. Choose the rule. Then say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'laboratorio', rot: 'VII · The Thing First', t: 'New news: have / has + participle. The thing first: has been + participle.', p: 'Read the four lines out loud. Then fix the four traps.' },
  { k: 'letreiro', est: 'o', min: 7, img: 'estudio', rot: 'VIII · The Flap Board', t: '8:52 PM. Five headlines for the 9 PM bulletin.', p: 'Read each headline on the air as a full sentence, the thing first. Your teacher taps what you said. The last two are from a rival website.' },
  { k: 'dana', est: 'o', min: 7, extra: 1, img: 'estudio', rot: 'IX · On the Air at 9', t: '9:01 PM. You are live. Dana, the anchor, asks about Mars.', p: 'Your teacher is Dana. You are the science reporter. Answer on the air.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'redacao', rot: 'X · Quick Check', t: 'Five quick lines from tonight’s news.', p: 'Say the whole sentence out loud. Then tap the word.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'redacao', rot: 'XI · Your Own News', t: 'The news about your life, your street and your city.', p: 'Pick a card. Answer like a news reporter.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XII · After the Bulletin', t: 'Should we believe a science headline before the scientists are sure?', p: 'Write three headlines about your own city, then each one as a full sentence. It goes to your My notes.' }
];

var VOCE = [
  { k: 'Your news', q: 'How do you get your news: TV, a website, social media, a friend?', fup: 'Do you trust it?', st: ['Mostly on … / I read …'], ex: 'Mostly on my phone. I read the headlines on the bus.' },
  { k: 'Science', q: 'Do you like science news? What kind: space, animals, health, technology?', fup: 'Why that one?', st: ['I love … news.'], ex: 'I love space news. I watch every rocket launch.' },
  { k: 'This week', q: 'What is the biggest news you’ve heard this week?', fup: 'Where did you hear it?', st: ['… has …'], ex: 'A new metro station has opened near my house.' },
  { k: 'Space', q: 'Do you think there was ever life on Mars? Why, or why not?', fup: 'And somewhere else?', st: ['Maybe … / I don’t think …'], ex: 'Maybe small things, like bacteria, a long time ago.' },
  { k: 'Fake news', q: 'Have you ever believed a headline that wasn’t true?', fup: 'How did you find out?', st: ['Yes! I read that … / No, I always …'], ex: 'Yes! I read that a famous singer had died. It wasn’t true.' }
];

var ANTES = [
  { q: 'A robot has been driving on Mars since 2021. What do you think it does all day?', h: 'It takes photos, it drives slowly, and it studies rocks.' },
  { q: 'What could a sign of life on Mars look like: a fossil, a plant, a small spot?', h: 'Probably something very small, like a spot on a rock.' }
];
var CAPS = [
  { k: 'PART ONE', ini: 0, fim: 55, q: 'What is the big question at the start? Where is the rover?', h: 'Was there ever life on Mars? The rover is in an old crater.' },
  { k: 'PART TWO', ini: 55, fim: 115, q: 'What has the rover found? Describe it: its color, its spots.', h: 'It has found a reddish rock with small spots, like a leopard.' },
  { k: 'PART THREE', ini: 115, fim: 170, q: 'Why are the scientists excited? Why are they also careful?', h: 'The spots could come from tiny living things, but rocks can make them too.' },
  { k: 'THE END', ini: 170, fim: 227, q: 'What happens next? Where is the rock now?', h: 'A piece of it is in a tube on Mars. They need to study it on Earth.' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "The video says a speckled rock could be evidence of ancient life on Mars.", "t": true, "tm": "0:00"},
  {"f": "The Perseverance rover is a robot with no tools.", "t": false, "tm": "0:19", "c": "No. Scientists used its tools to analyze the chemical makeup of the rock."},
  {"f": "The rover has collected more than 20 rock samples so far.", "t": true, "tm": "1:09"},
  {"f": "Mars was always a cold desert.", "t": false, "tm": "1:21", "c": "No. Billions of years ago there were rivers, lakes and an atmosphere."},
  {"f": "The rover landed in Jezero Crater in 2021.", "t": true, "tm": "2:02"},
  {"f": "NASA says: “Life has been found on Mars.”", "t": false, "tm": "3:13", "c": "No. “No, not yet.”"}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · What is tonight’s headline?",
  "quem": "Dana",
  "fala": "Dana: “We’re live in ten seconds. What is the headline tonight?”",
  "reacoes": [
    [
      "The rock",
      "A strange rock has been found on Mars.",
      "“Great headline. Tell me more.”"
    ],
    [
      "Not proof",
      "Life hasn’t been found on Mars yet.",
      "“Correct. No fake news on my show.”"
    ],
    [
      "The samples",
      "More than twenty samples have been collected so far.",
      "“Now that is good science.”"
    ]
  ]
};

var TUBOS = [
  { k: 'MARS', de: 'THE ROVER TEAM', nota: 'An old river valley on Mars. A reddish rock, nickname “Cheyava Falls”. Small dark spots with light rings: “leopard spots”. Possible sign of ancient life. Not proof.', q: 'Where is the rock? Why is it special?', ops: [['The rover has found a rock with strange spots.', 'ok'], ['The rover have found a rock with strange spots.', 'concorda'], ['The rover has find a rock with strange spots.', 'part']] },
  { k: 'MUSHROOM', de: 'HARLOW UNIVERSITY · BIOLOGY', nota: 'Old forest, north of the city. A small mushroom. Glows green at night. Not in any book. A new species.', q: 'Why do you think it glows?', ops: [['Scientists at Harlow have discovered a new glowing mushroom.', 'ok'], ['Scientists at Harlow has discovered a new glowing mushroom.', 'concorda'], ['Scientists at Harlow have discover a new glowing mushroom.', 'part']] },
  { k: 'COMET', de: 'MOUNT ELDER OBSERVATORY', nota: 'An amateur astronomer. A small telescope in her backyard. A new comet near Jupiter. You can see it in May.', q: 'Would you like to find a comet? What would you call it?', ops: [['An amateur astronomer has spotted a new comet.', 'ok'], ['An amateur astronomer has spotted a new comet last night.', 'quando'], ['A new comet has spotted an amateur astronomer.', 'ativa']] },
  { k: 'FOOTPRINTS', de: 'RED FORK RIVER · PARK RANGERS', nota: 'A big flood last spring. The water went down. In the dry river bed: 60 dinosaur footprints, about 110 million years old.', q: 'How did the footprints stay there for so long?', ops: [['A flood has uncovered sixty dinosaur footprints.', 'ok'], ['A flood have uncovered sixty dinosaur footprints.', 'concorda'], ['A flood has uncover sixty dinosaur footprints.', 'part']] },
  { k: 'SHIPWRECK', de: 'LAKE MARLOW · DIVE TEAM', nota: 'Deep, cold water. A wooden ship, 200 years old. Still in one piece. Found this afternoon.', q: 'Why do old ships stay in one piece in cold water?', ops: [['Divers have just found a 200-year-old ship.', 'ok'], ['Divers has just found a 200-year-old ship.', 'concorda'], ['Divers have just find a 200-year-old ship.', 'part']] },
  { k: 'BATTERIES', de: 'CITY TECH LAB', nota: 'Old phone batteries. A new machine takes out the metals. 90% can be used again. Cheap and clean.', q: 'What do you do with your old phones and batteries?', ops: [['Engineers have built a machine that recycles old batteries.', 'ok'], ['Engineers have builded a machine that recycles batteries.', 'part'], ['Engineers has built a machine that recycles batteries.', 'concorda']] }
];
var NAO = {
  concorda: 'One thing: HAS. Many people or things: HAVE.', part: 'After have / has / been: the past participle. found, discovered, built.',
  quando: 'A finished time (last night): past simple. It spotted… No time, new news: has spotted.', ativa: 'Who did what? The comet didn’t spot anyone. Or use the passive: has BEEN spotted.',
  ordem: 'The thing goes FIRST: A rock has been found…', it: 'No invented it. Start with the thing: A new mushroom has been…', being: 'has BEEN, not being.',
  just: 'just goes between has and been: has just been found.', vida: 'That’s the rival site’s mistake! It isn’t true.', nega: 'The negative passive: hasn’t BEEN found.'
};

var FITAS = [['WHO DID IT', 'Scientists have found a rock.'], ['THE THING FIRST', 'A rock has been found on Mars.'], ['NOT YET', 'Life hasn’t been found yet.'], ['WITH A TIME', 'It was collected in July 2024.']];
var ARMAS = [
  ['THE THING GOES FIRST', 'Has been found a rock on Mars.', 'A rock has been found on Mars.', 'The thing that was found is the subject.'],
  ['NO EXTRA IT', 'It has been discovered a new mushroom.', 'A new mushroom has been discovered.', 'Start with the mushroom.'],
  ['DON’T FORGET BEEN', 'A new comet has spotted.', 'A new comet has been spotted.', 'Without been, the comet did the spotting!'],
  ['A TIME? PAST SIMPLE', 'The sample has been collected in July 2024.', 'The sample was collected in July 2024.', 'A finished time: past simple.']
];

var MANCHETES = [
  { m: 'ROCK WITH LEOPARD SPOTS FOUND ON MARS', ini: 'A rock…', ops: [['A rock with leopard spots has been found on Mars.', 'ok'], ['Has been found a rock with leopard spots on Mars.', 'ordem'], ['A rock with leopard spots has found on Mars.', 'ativa']] },
  { m: 'NEW GLOWING MUSHROOM DISCOVERED', ini: 'A new…', ops: [['A new glowing mushroom has been discovered.', 'ok'], ['It has been discovered a new glowing mushroom.', 'it'], ['A new glowing mushroom has been discover.', 'part']] },
  { m: 'NEW COMET SPOTTED BY AMATEUR ASTRONOMER', ini: 'A new comet…', ops: [['A new comet has been spotted by an amateur astronomer.', 'ok'], ['A new comet has being spotted by an amateur astronomer.', 'being'], ['A new comet have been spotted by an amateur astronomer.', 'concorda']] },
  { m: '60 DINOSAUR FOOTPRINTS UNCOVERED BY FLOOD', ini: 'Sixty dinosaur footprints…', ops: [['Sixty dinosaur footprints have been uncovered by a flood.', 'ok'], ['Sixty dinosaur footprints has been uncovered by a flood.', 'concorda'], ['Have been uncovered sixty dinosaur footprints.', 'ordem']] },
  { m: '200-YEAR-OLD SHIP JUST FOUND IN LAKE', ini: 'A 200-year-old ship…', ops: [['A 200-year-old ship has just been found in Lake Marlow.', 'ok'], ['A 200-year-old ship has been just found in Lake Marlow.', 'just'], ['A 200-year-old ship has just found in Lake Marlow.', 'ativa']] }
];

var DANA = [
  { ela: 'Good evening. Big news from Mars tonight. What has been found?', voce: 'A rock … has been found …', resp: 'Leopard spots on Mars! Incredible.' },
  { ela: 'So, has life been found on Mars?', voce: 'No, life hasn’t been … / A possible sign …', resp: 'Thank you. Some websites said something very different tonight.' },
  { ela: 'Where is the rock now? Has it been brought to Earth?', voce: 'Not yet. A sample has been … / It hasn’t been …', resp: 'So we have to wait. Maybe for years.' },
  { ela: 'Any other science news tonight?', voce: 'Yes! A new comet has been … / Sixty footprints have been …', resp: 'What a night. Thank you, and good night.' }
];

var QUIZ = [
  { f: 'A new mushroom ___ discovered in the forest.', op: ['has been', 'has', 'have been'], nao: 'The mushroom was discovered by someone: has been + participle.' },
  { f: 'Scientists ___ found a strange rock on Mars.', op: ['have', 'has', 'have been'], nao: 'The scientists did it, and they are many: have found.' },
  { f: 'Sixty footprints ___ been uncovered by a flood.', op: ['have', 'has', 'is'], nao: 'Many footprints: have been.' },
  { f: 'The sample ___ in July 2024.', op: ['was collected', 'has been collected', 'has collected'], nao: 'A finished time (July 2024): past simple, was collected.' },
  { f: 'A ship has ___ been found in the lake.', op: ['just', 'yet', 'ever'], nao: 'Brand-new news: has just been found.' }
];

var RODA = [
  { k: 'Your street', q: 'What has been built, opened or closed near your home this year?', fup: 'Is it good news?', st: ['A new … has been …'], ex: 'A new gym has been opened on my street.' },
  { k: 'Discovered', q: 'What have you discovered recently: a series, a place, a food, a song?', fup: 'How did you find it?', st: ['I’ve discovered …'], ex: 'I’ve discovered a small Japanese restaurant near my work.' },
  { k: 'Changed', q: 'What has changed in your city in the last five years?', fup: 'For better or worse?', st: ['… have been … / … has …'], ex: 'Lots of bike lanes have been built.' },
  { k: 'Not yet', q: 'What hasn’t been fixed in your city yet?', fup: 'How long has it been like that?', st: ['The … hasn’t been … yet.'], ex: 'The hole in my street hasn’t been fixed yet.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, bc: { sel: 0, esc: {} }, lt: { n: 0, esc: '' }, dn: { n: 0 }, qz: { n: 0, esc: -1 }, roda: { sel: -1, foi: {} } };

/* o painel de letras que viram: cada caractere numa célula */
function painel(txt, estado, mini) {
  var linhas = [], atual = '';
  txt.split(' ').forEach(function (w) { if ((atual + ' ' + w).trim().length > (mini ? 16 : 18)) { linhas.push(atual.trim()); atual = w; } else atual += ' ' + w; });
  linhas.push(atual.trim());
  return '<div class="flap ' + (estado || '') + (mini ? ' mini' : '') + '">' + linhas.map(function (l, li) {
    return '<div class="flap-l">' + l.split('').map(function (ch, i) { return '<span style="animation-delay:' + ((li * 12 + i) * 12) + 'ms">' + (ch === ' ' ? '&nbsp;' : ch) + '</span>'; }).join('') + '</div>';
  }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE SCIENCE DESK</span><h1>Scientists <b>Have Found…</b></h1>'
    + '<p class="sub"><b>A rock with strange spots has been found on Mars.</b> But has life been found? Not yet.</p>'
    + '<div class="chipsx"><span class="pilula">have found</span><span class="pilula">has been found</span><span class="pilula">hasn’t been found yet</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the newsroom</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + painel('ROCK FOUND ON MARS', 'ok') + painel('LIFE FOUND ON MARS!', 'rival') + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + os seis tubos da bancada (a aula já tem) que enchem a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'A rock on Mars', '&start=0&end=227'); }
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
  var tubos = TUBOS.slice(0, n).map(function (t, i) {
    var s = d.st[i], nova = s === 1 && !debAcesa[i]; if (s === 1) debAcesa[i] = 1;
    return '<span class="tubo deb-tubo' + (s === 1 ? ' feito' : s === -1 ? ' perdido' : '') + (nova ? ' nova' : '') + '"><i></i><b>' + t.k + '</b></span>';
  }).join('');
  return debTopo(d, 'THE SAMPLE RACK', 'Tubes filled') + '<div class="tubos deb-tubos" aria-hidden="true">' + tubos + '</div>';
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
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'A rock on Mars', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.bancada = function (c) {
  var e = S.bc, x = TUBOS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitos = TUBOS.filter(function (t, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="tubos">' + TUBOS.map(function (t, i) { return '<button type="button" class="tubo' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feito' : '') + '" data-a="bc" data-n="' + i + '"><i></i><b>' + t.k + '</b></button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l"><div class="nota-lab vd"><small>LAB NOTE · ' + x.de + '</small><p>' + x.nota + '</p></div><div class="pergunta vd ja"><h2>' + x.q + '</h2></div></div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><small>THE NEWS</small><p>' + x.ops[0][0] + '</p></div><p class="aprova">' + (feitos >= 6 ? 'Six tubes, six stories, and every sentence starts with WHO did it. But in the news the thing is often more important. How do we put it first?' : 'Now try it with the thing first. You’ll need the rule.') + '</p>'
      : '<h5 class="so-prof rot-ouve">TAP THE NEWS YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 3).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="bc-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '') + '<p class="so-prof dica-aluno">“Scientists found…” is fine English: let it go. Tap has / have and find / found exactly.</p>') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas4">' + FITAS.map(function (f, i) { return '<div class="fita4 f' + i + '"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.letreiro = function (c) {
  var e = S.lt, n = e.n, fim = n >= MANCHETES.length, min = 52 + Math.min(n, 8);
  if (fim) return cab(c) + '<div class="relogio-n">9:00 PM · ON AIR</div><div class="mesa-c"><div class="lado-l">' + painel('LIFE HASN’T BEEN FOUND', 'ok') + painel('SAMPLE STILL ON MARS', 'ok') + '</div><div class="lado-l"><div class="pergunta vd"><small>9:00 PM</small><h2>Five headlines on the board, and two mistakes from the rival site fixed on the air. Life hasn’t been found. A possible sign of it has.</h2></div></div></div>';
  var x = MANCHETES[n], ok = e.esc === 'ok';
  return cab(c) + '<div class="relogio-n">8:' + min + ' PM · ' + (8 - n) + ' TO GO</div>' + trilha(MANCHETES, n) + '<div class="mesa-c"><div class="lado-l">' + (x.rival ? '<p class="rival-t">THE RIVAL WEBSITE SAYS:</p>' : '') + painel(x.m, ok ? 'ok' : x.rival ? 'rival' : '') + '<p class="modal-k">START: <b>' + x.ini + '</b></p></div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><small>ON THE AIR</small><p>' + x.ops[0][0] + '</p></div><p class="so-prof dica-aluno">Ask for one detail with a time, in the past simple: “It was found this afternoon.”</p><div><button type="button" class="btn" data-a="lt-prox">Next headline</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD ON THE AIR</h5><div class="versoes">' + ordem(x.ops, n + 7).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="lt" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NAO[e.esc] + '</p>' : '')) + '</div></div>';
};

R.dana = function (c) {
  var e = S.dn, n = Math.min(e.n, DANA.length - 1), x = DANA[n];
  return cab(c) + trilha(DANA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('estudio') + ')"><span>LIVE · DANA REYES, THE 9 PM ANCHOR</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>DANA</small><b>“' + x.ela + '”</b></div>' + fala('dn' + n, [x.voce], ['has been', 'have been', 'hasn’t been', 'yet', 'possible']) + '<p class="so-prof dica-aluno">Dana answers: “' + x.resp + '”</p>'
    + (n < DANA.length - 1 ? '<div><button type="button" class="btn" data-a="dn-prox">Next</button></div>' : '<p class="aprova">Off the air.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>Who did it? have found. The thing first? has been found. A time? was found.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 4).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.roda = function (c) { return cartasPessoais(c, RODA, S.roda, 'roda'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'NEW PARK OPENED DOWNTOWN\nA new park has been opened downtown.\n…', 'Your city’s news',
    ['has been ', 'have been ', 'hasn’t been ', ' yet', ' was '], ['THREE HEADLINES ABOUT YOUR CITY', 'Each one as a headline, then as a full sentence with has been / have been.'])
    + '<div class="lado-fim">' + painel('A ROCK HAS BEEN FOUND', 'ok', 1) + '<div class="grande vd"><span>Scientists <u>have found</u> a rock</span><span>A rock <u>has been found</u> on Mars</span><span>Life <u>hasn’t been found</u> yet</span></div>'
    + mostra('fim', 'NEW METRO LINE OPENED: A new metro line has been opened in my city.<br>OLD MARKET REPAIRED: The old market has been repaired.<br>BIG HOLE STILL THERE: The hole on my street hasn’t been fixed yet.', 1)
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
TOQUES.bc = function (b, n) { S.bc.sel = n; };
TOQUES['bc-v'] = function (b, n, v) { S.bc.esc[S.bc.sel] = v; };
TOQUES.lt = function (b, n, v) { S.lt.esc = v; };
TOQUES['lt-prox'] = function () { S.lt = { n: S.lt.n + 1, esc: '' }; };
TOQUES['dn-prox'] = function () { S.dn.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four headlines. Find the rule yourself.',
  exemplos: [
    'A strange rock <b>has been found</b> on Mars.',
    'Three samples <b>have been sent</b> to the lab.',
    'The results <b>haven’t been published</b> yet.',
    'Life <b>hasn’t been found</b> yet.'
  ],
  pergunta: 'When the news is about the thing, and not about who did it, the verb is …',
  opcoes: ['has / have + been + participle: has been found', 'has / have + participle only: has found by scientists', 'was / were + -ing: was finding'], c: 0,
  nao: 'Not that one. Read the four lit verbs again: what comes after has or have?',
  regra: '<b>has / have + been + participle</b> when the thing is the news and the doer is not important: A rock <b>has been found</b>. Never “has found a rock” without a person, and never “has being found”.',
  uso: { p: 'Your turn. One piece of news about your city or your life, with the thing first.', molde: ['A new … has been …', 'The … have been …'], ex: 'A new bridge has been built. The old school has been closed.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
