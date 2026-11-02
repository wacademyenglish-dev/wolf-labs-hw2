/* ============================================================
   IT IS THOUGHT TO HAVE BEEN… · THE DIG AT KESTREL HILL · LIVE CLASS 06/10/2026
   Main series B2 · passiva avançada: is thought / said / believed /
   known + to have been + particípio (antes, feito a ele); to have +
   particípio (antes, ele fez); is being + particípio (em andamento);
   have + a coisa + particípio (outro fez por você). Erros: is thought to
   be destroyed (infinitivo simples p/ passado) · is thought to have
   destroyed (ativa) · the site is excavating · we had dated the
   charcoal · is said that it was.
   O MUNDO (da aula velha): Kestrel Hill, o monte acima do rio Mera
   (inventado); o relatório de 1931 com o Rei Queimado; as camadas
   mostram terremoto, depois fogo. Vídeo mantido (gQbZX9JEQsQ, 4:38),
   selado em quatro capítulos: 0–60 · 60–125 · 125–205 · 205–278.
   Nenhum nome de canal na tela, nenhuma fala do vídeo na tela.
   A CARA (nova; a velha era o corte da trincheira + o mapa do monte):
   a AMOSTRA DE SOLO — um tubo vertical com seis faixas coloridas e a
   régua de profundidade, cada faixa ganha uma etiqueta de museu quando
   vira frase de relatório; e o RÁDIO DA ESCAVAÇÃO — um visor de
   walkie-talkie com a etiqueta da nota (REPORT IT · RIGHT NOW · THE
   LAB) e a página do relatório se escrevendo ao lado.
   Fila: FILA-LIVE-386.md · 124.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: antes do play uma régua (existiu?) + uma escolha por sentido;
   por capítulo, verdadeiro ou mentira com ▶ no minuto; depois, três relatos
   falados + Check. V: a amostra de solo em fala primeiro (6 camadas).
   VI: achar a parte errada de cinco linhas (FM.erro) com a placa dos cinco
   tipos. VII: o rádio escolhe a etiqueta por SENTIDO (reportar, agora, o
   laboratório) e mostra a linha. VIII: cartas que viram (a sua vida em
   camadas). IX: três perguntas da rádio em cartas + cronômetro de 60 s.
   X: certo ou errado, dizer a frase certa. VIII, IX e X deixam de ser EXTRAS.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'barraca', rot: 'I · You and the Past', t: 'Before the dig: you, old places, and old things.', p: 'Tap a card. Answer out loud. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'biblioteca', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'biblioteca', rot: 'III · A Famous Hill', t: 'Did an ancient city from an old story really exist?', p: 'Answer first. Then the video plays in four short chapters. Read the two lines before you press play.' },
  { k: 'falas', est: 'l', extra: 1, img: 'biblioteca', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'amostra', est: 'o', min: 7, img: 'trincheira', rot: 'V · Report, Section 1: The Core', t: 'One soil core from Trench A. Six layers, from today down to the first houses.', p: 'Read the field note. Say the report line out loud, without signing it. Then tap Check.' },
  { k: 'regra', est: 'f', min: 7, img: 'barraca', rot: 'VI · The Rule', t: 'The belief is now. The event is before now.', p: 'One part of each line is wrong. Find it and say it right out loud. The five kinds are in the corner. Then tap Check.' },
  { k: 'radio', est: 'f', min: 7, img: 'monte', rot: 'VII · Report, Section 2: The Radio', t: 'Five trenches call in. The tag decides the form.', p: 'Your teacher reads the radio note. Tap the tag. Then say the report line.' },
  { k: 'achados', est: 'o', min: 7, extra: 1, img: 'achados', rot: 'VIII · Your Own Layers', t: 'Your life, like a dig site.', p: 'Tap a card. A find comes up. Answer about your real life, in report language.' },
  { k: 'radialista', est: 'o', min: 7, extra: 1, img: 'monte', rot: 'IX · Report, Section 3: The Interview', t: 'The local radio calls the dig. You are the trench supervisor.', p: 'Your teacher is the radio host. Tap a card, start the clock, and answer on air. Then ask her back.' },
  { k: 'quiz', est: 'f', min: 6, img: 'trincheira', rot: 'X · Quick Check', t: 'Five quick lines from the season report.', p: 'Right or wrong? If it is wrong, say the whole sentence right.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XI · End of the Season', t: 'In 3,000 years, someone digs up your phone. What will they think it was?', p: 'Write their museum label, and one of your own. It goes to your My notes.' }
];

var YT = 'gQbZX9JEQsQ';

var VOCE = [
  { k: 'OLD PLACES', q: 'What is the oldest building you have ever been inside? How old was it?', fup: 'How do you know how old it is?', st: ['The oldest building I’ve been inside is …'], ex: 'A church in my city. People say it’s about 300 years old.' },
  { k: 'MUSEUMS', q: 'Do you like museums? Which one do you remember best, and why?', fup: 'What did you see there?', st: ['I remember …'], ex: 'I loved a science museum as a kid. I went every holiday.' },
  { k: 'AT HOME', q: 'What is the oldest thing in your home? Where did it come from?', fup: 'Is that a fact, or a story?', st: ['The oldest thing in my home is …'], ex: 'A clock from my grandfather. Nobody knows who made it.' },
  { k: 'LEGENDS', q: 'Is there a legend or a strange story about your city or your family?', fup: 'Do you believe it?', st: ['They say …'], ex: 'Yes. They say a treasure is hidden under the old bridge.' },
  { k: 'THE DIG', q: 'Would you like to work on a dig for a summer: sun, dust, and long days with a brush?', fup: 'For how long?', st: ['For a week, yes …', 'No way, because …'], ex: 'For a week, yes. For a whole summer, no way.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* III · antes do play */
var ANTES_REGUA = { formato: 'regua', titulo: 'Before you watch', frase: 'An ancient city from an old story really existed.', esquerda: 'No way', direita: 'Yes, for sure', depois: 'Say why. Start with: I doubt … / It is thought …' };
var ANTES_ESCOLHE = { formato: 'escolhe', titulo: 'How can we find out if an old city was real?', itens: [
  { p: 'What can show us the truth about an old city?', o: ['Digging up the ground', 'Reading the story again', 'Asking a poet'], c: 0, d: 'The layers of earth keep the evidence.' },
  { p: 'What is a good sign that people lived on a hill?', o: ['A beautiful view', 'Walls and broken pots', 'A long story'], c: 1, d: 'Walls and pots stay in the ground for thousands of years.' }
] };
/* por capítulo: duas linhas, certo ou mentira, ▶ no minuto (legenda-dados.js) */
var CAPS = [
  { k: 'THE STORY', ini: 0, fim: 60, tarefa: { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'The story · right or wrong?', itens: [
    { f: 'In the 1800s, many people thought the epic was pure fiction.', t: true, tm: '0:39' },
    { f: 'When Homer wrote it down, the story of the Trojan War was brand new.', t: false, tm: '0:11', c: 'It was already an old story: the war is said to have been told for generations.' }
  ] } },
  { k: 'THE HILL', ini: 60, fim: 125, tarefa: { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'The hill · right or wrong?', itens: [
    { f: 'Frank Calvert traveled with his brother on a diplomatic mission.', t: true, tm: '1:05' },
    { f: 'The name of the hill, Hisarlik, comes from the Greek word for “king”.', t: false, tm: '1:40', c: 'It comes from the Turkish word for “fortress”.' }
  ] } },
  { k: 'NINE CITIES', ini: 125, fim: 205, tarefa: { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Nine cities · right or wrong?', itens: [
    { f: 'Inside the hill, they found only one city.', t: false, tm: '2:43', c: 'Nine cities, each built on the ruins of the last: each one is thought to have been built on the ruins of the last.' },
    { f: 'The treasure Schliemann found was more than a thousand years too early for Homer.', t: true, tm: '2:50' }
  ] } },
  { k: 'THE ANSWER', ini: 205, fim: 278, tarefa: { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'The answer · right or wrong?', itens: [
    { f: 'Scholars today are all sure that this is the real Troy.', t: false, tm: '3:44', c: 'They still dispute it: it is difficult to be certain.' },
    { f: 'UNESCO has labeled the site as the archaeological site of Troy.', t: true, tm: '3:55' }
  ] } }
];
/* III · depois do vídeo: três relatos falados + Check */
var DEPOIS_FALA = [
  { pista: '<span class="ano">1</span>the first cities · <b>build</b> · thousands of years ago<br><small>Start: The first cities are thought …</small>', resp: 'The first cities are thought <b>to have been built</b> thousands of years ago.', depois: 'Which city in your country is thought to be the oldest?' },
  { pista: '<span class="ano">2</span>the war · <b>last</b> · ten years<br><small>Start: The war is said …</small>', resp: 'The war is said <b>to have lasted</b> ten years.', depois: 'Is that a fact, or only a story?' },
  { pista: '<span class="ano">3</span>the hill · now · <b>believe</b> · the real city<br><small>Start: The hill is now …</small>', resp: 'The hill is now <b>believed to be</b> the real city.', depois: 'Is everybody sure today?' }
];

var CAMADAS = [
  { k: 'TOPSOIL', prof: '0.0 m', cor: '#4a3a2a', achado: 'a modern coin, plow marks', nota: 'Deep, straight lines in the soil. A coin from the 1950s. Farmers plowed this field for a hundred years. Everybody in the village knows it.', q: 'How do we know this? Is it a fact or a guess?', ops: ['This field is known to have been plowed for a hundred years.', 'This field is known to be plowed for a hundred years.', 'This field is known to have plowed for a hundred years.'], por: ['', 'It happened before now: to HAVE BEEN plowed.', 'The field didn’t plow anything. It was plowed: BEEN.'] },
  { k: 'ASH', prof: '0.8 m', cor: '#1e1a1a', achado: 'a black layer, burned beams', nota: 'A thick black layer of ash, with burned wooden beams. Something burned here, a long time ago. We think a big fire destroyed the town.', q: 'Is that the fire from the legend? Can we be sure?', ops: ['The town is thought to have been destroyed by a big fire.', 'The town is thought to be destroyed by a big fire.', 'The town is thought that was destroyed by a big fire.'], por: ['', 'Before now: to HAVE BEEN destroyed.', 'No THAT here: is thought TO HAVE BEEN.'] },
  { k: 'FALLEN STONES', prof: '1.4 m', cor: '#5b5650', achado: 'wall stones, all fallen one way', nota: 'Under the ash: big wall stones, all fallen to the east, in one line. Fire doesn’t do that. We believe an earthquake knocked the walls down first.', q: 'Why do the stones make the team think of an earthquake?', ops: ['The walls are believed to have been knocked down by an earthquake.', 'The walls are believed to have knocked down by an earthquake.', 'The walls are believed to have been knock down by an earthquake.'], por: ['', 'The walls didn’t knock anything down: BEEN knocked.', 'After BEEN: the participle, knocked.'] },
  { k: 'THREE FLOORS', prof: '2.1 m', cor: '#6e5a3e', achado: 'three stone floors, one on another', nota: 'The tower has three floors, one on top of the other. Experts say people rebuilt the tower three times.', q: 'Why do you think people rebuilt it, again and again, in the same place?', ops: ['The tower is said to have been rebuilt three times.', 'The tower is said that it was rebuilt three times.', 'The tower is said to have being rebuilt three times.'], por: ['', 'Choose one: “It is said that …” or “The tower is said to …”.', 'Before now: BEEN, not being.'] },
  { k: 'STORAGE ROOM', prof: '2.7 m', cor: '#7a4a32', achado: 'twelve tall clay jars', nota: 'A small room with twelve tall clay jars. Inside, a dark stain that smells a little of olives. We think the jars held olive oil.', q: 'Who did something here: the jars, or somebody to the jars?', ops: ['The jars are thought to have held olive oil.', 'The jars are thought to have been held olive oil.', 'The jars are thought to hold olive oil.'], por: ['', 'The jars DID the holding: no BEEN.', 'Before now: to HAVE held.'] },
  { k: 'POSTHOLES', prof: '3.5 m', cor: '#3a3226', achado: 'dark circles in the rock', nota: 'Down at the rock: small dark circles, in rings. Holes for wooden posts. We think the first people built wooden houses here 4,000 years ago.', q: 'Wood disappears. So how do we know there were houses?', ops: ['Wooden houses are thought to have been built here 4,000 years ago.', 'Wooden houses are thought to be built here 4,000 years ago.', 'It is thought wooden houses to have been built here.'], por: ['', 'Before now: to HAVE BEEN built.', 'Start with the houses: Wooden houses are thought to …'] }
];

var TIPOS = [['BEFORE NOW · DONE TO IT', 'The tower is thought to have been built around 900 BC.'], ['BEFORE NOW · IT DID IT', 'The jars are thought to have held oil.'], ['NOW · REVIEW', 'The hill is said to be the oldest town in the valley.'], ['IN PROGRESS', 'Trench C is being excavated.'], ['SOMEBODY ELSE DID IT', 'We had the charcoal dated.']];
/* VI · achar a parte errada (FM.erro) · a placa com os cinco tipos */
var ERRO = [
  { f: 'The town is thought <u>to be destroyed</u> by fire a thousand years ago.', r: 'to have been destroyed' },
  { f: 'The walls are believed <u>to have knocked down</u> by an earthquake.', r: 'to have been knocked down' },
  { f: 'The jars are thought <u>to have been held</u> olive oil.', r: 'to have held' },
  { f: 'Right now, the site <u>is excavating</u> by two teams.', r: 'is being excavated' },
  { f: 'The lab did it for us. We <u>had dated the charcoal</u> last month.', r: 'had the charcoal dated' }
];
var PRESA = '<b>Before now · done to it</b><br>is thought to have been built<br><b>Before now · it did it</b><br>are thought to have held<br><b>Now</b><br>is said to be<br><b>In progress</b><br>is being excavated<br><b>Somebody else did it</b><br>had it dated';

var TAGS = { rel: ['REPORT IT', 'is thought to have been …'], ago: ['RIGHT NOW', 'is being …'], lab: ['THE LAB', 'have the thing done'] };
var RADIO = [
  { k: 'TRENCH A', tag: 'ago', diz: 'Right now, two diggers are cleaning the tower steps with soft brushes.', ops: ['The tower steps are being cleaned right now.', 'The tower steps are cleaning right now.', 'The tower steps are being clean right now.'] },
  { k: 'TRENCH B', tag: 'lab', diz: 'A lab in Chicago dated our charcoal for us last month.', ops: ['We had the charcoal dated in Chicago last month.', 'We dated the charcoal in Chicago last month.', 'We had dated the charcoal in Chicago last month.'] },
  { k: 'TRENCH C', tag: 'rel', diz: 'The team thinks somebody buried this bronze helmet on purpose.', ops: ['The helmet is thought to have been buried on purpose.', 'The helmet is thought to be buried on purpose.', 'The helmet is thought to have buried on purpose.'] },
  { k: 'TRENCH D', tag: 'lab', diz: 'The big broken jar is at a restorer’s in town. She’s fixing it for us this week.', ops: ['We’re having the jar restored this week.', 'We’re restoring the jar this week.', 'We’re having restored the jar this week.'] },
  { k: 'TRENCH E', tag: 'rel', diz: 'Some experts believe people closed the main gate with one huge stone.', ops: ['The gate is believed to have been closed with one huge stone.', 'It is believed the gate to have been closed with a stone.', 'The gate is believed that it was closed with a stone.'] }
];

var ACHADOS = ordem([
  { k: 'YOUR BUILDING', q: 'When was your home or building built? Do you know, or is it only what people think?', h: 'My building is thought to have been built in the 1970s.' },
  { k: 'YOUR CITY', q: 'How did your city start? Who is it said to have been founded by?', h: 'My city is said to have been founded by fishermen.' },
  { k: 'RIGHT NOW', q: 'What is being built, fixed or changed in your city right now?', h: 'A new metro line is being built near my house.' },
  { k: 'HAD IT DONE', q: 'What did you have done recently: a haircut, your car washed, your phone fixed?', h: 'I had my phone screen fixed last week.' },
  { k: 'A FAMILY STORY', q: 'Is there a family story that nobody can prove?', h: 'My great-grandfather is said to have crossed the ocean alone.' },
  { k: 'THIS MONTH', q: 'What are you having done at home, or what would you like to have done?', h: 'I’m having my kitchen painted this month.' },
  { k: 'A MYSTERY', q: 'Think of a famous old place. What is it thought to have been used for?', h: 'That stone circle is thought to have been used as a calendar.' },
  { k: 'AN OLD THING', q: 'Do you have an old object with a story? Where is it thought to have come from?', h: 'Our old table is believed to have come from a ship.' }
], 13);

var TROCAS = [
  { ela: 'So, is it true? Did the Burning King really set the town on fire?', st: ['The town is thought to have been …'], voce: 'Is anything else said to have been hidden on the hill?', resp: 'Oh yes. A golden bell is said to have been buried under the gate. Good luck.' },
  { ela: 'What are you doing on the hill today? My listeners can hear the drone!', st: ['The tower is being …', 'The hill is being …'], voce: 'Do your listeners know how old the hill is thought to be?', resp: 'Most of them think it’s about a hundred years old. They’ll be surprised.' },
  { ela: 'How do you know how old everything is? Do you have a machine up there?', st: ['We had the charcoal …'], voce: 'Has your station ever had a story checked by an expert?', resp: 'Never. We just had the mayor interviewed, and he said it was all true.' }
];

var TAGN = { rel: 0, ago: 1, lab: 2 };
var TAGOPS = ['REPORT IT', 'RIGHT NOW', 'THE LAB'];
var RADIO_ESC = { formato: 'escolhe', titulo: 'Which tag is it? Tap. Then say the report line.', itens: RADIO.map(function (x) {
  return { p: '<b>' + x.k + '</b> · “' + x.diz + '”', o: TAGOPS, c: TAGN[x.tag], d: 'Tag: <b>' + TAGS[x.tag][0] + '</b>. Say: <b>' + x.ops[0] + '</b>' };
}) };
/* VIII · a sua vida em camadas (cartas que viram), com o começo da frase */
function comeco(h) { return h.split(' ').slice(0, 5).join(' ') + ' …'; }
var ACH = ACHADOS.slice(0, 6);
var ACHADOS_CARTAS = { formato: 'cartas', titulo: 'Your own layers · tap a card', fechada: 'Brush the soil', cartas: ACH.map(function (x, i) {
  return ['Find ' + (i + 1) + ' · ' + x.k, x.q + '<br><em style="color:var(--am)">Start: ' + comeco(x.h) + '</em>'];
}) };
/* IX · a rádio local: três perguntas em cartas + 60 segundos no ar */
var RADIO_CARTAS = { formato: 'cartas', titulo: 'The radio host · tap a card', fechada: 'Tap to open', cartas: TROCAS.map(function (x, i) {
  return ['Question ' + (i + 1), '“' + x.ela + '”<br><em style="color:var(--am)">Start: ' + x.st[0] + '</em><br><small>Then ask back: ' + x.voce + '</small>'];
}) };
var NO_AR = { formato: 'cronometro', segundos: 60, titulo: 'On the air · 60 seconds', texto: 'Answer in report language: is thought to have been … · is being … · we had it …' };
/* X · certo ou errado, dizer a frase certa */
var QUIZ_VM = { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Right or wrong? If it is wrong, say the whole sentence right.', itens: [
  { f: 'The tower is thought <b>to be built</b> around 900 BC.', t: false, c: 'The tower is thought <b>to have been built</b> around 900 BC.' },
  { f: 'The jars are believed <b>to have held</b> olive oil.', t: true },
  { f: 'Trench C <b>is being excavated</b> this week.', t: true },
  { f: 'The lab did it for us: we <b>had dated the charcoal</b>.', t: false, c: 'We <b>had the charcoal dated</b>.' },
  { f: 'The hill <b>is said that it is</b> the oldest town in the valley.', t: false, c: 'The hill <b>is said to be</b> the oldest town in the valley.' }
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} } };

/* a amostra de solo: um tubo vertical com seis faixas e a régua */
function amostra(sel, feitas, clicavel) {
  return '<div class="kh-core"><div class="kh-regua">' + CAMADAS.map(function (c) { return '<span>' + c.prof + '</span>'; }).join('') + '</div><div class="kh-tubo">' + CAMADAS.map(function (c, i) {
    var at = clicavel ? ' data-a="am" data-n="' + i + '"' : '';
    return '<' + (clicavel ? 'button type="button"' : 'div') + ' class="kh-faixa' + (sel === i ? ' sel' : '') + (feitas[i] ? ' feita' : '') + '" style="--c:' + c.cor + '"' + at + '><b>' + c.k + '</b>' + (feitas[i] ? '<i>REPORTED</i>' : '') + '</' + (clicavel ? 'button' : 'div') + '>';
  }).join('') + '</div></div>';
}
/* a etiqueta de museu */
function etiqueta(n, txt, sub) {
  return '<div class="kh-etiq"><small>KESTREL HILL · FIND ' + n + '</small><p>' + txt + '</p>' + (sub ? '<span>' + sub + '</span>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · ADVANCED PASSIVE · FIELD REPORT</span><h1>It Is Thought <b>to Have Been…</b></h1>'
    + '<p class="sub">The town <b>is thought to have been destroyed</b> by fire. Trench C <b>is being excavated</b>. The charcoal? <b>We had it dated.</b> A good report never says more than the soil.</p>'
    + '<div class="chipsx"><span class="pilula">to have been done</span><span class="pilula">is being done</span><span class="pilula">had it done</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the report</button>' + faixaLive() + '</div>'
    + '<div class="capa-r kh-capa-r">' + amostra(1, { 0: 1 }, 0) + etiqueta('017', 'Burned beam. <b>Thought to have been</b> part of the tower roof.', 'Layer 2 · 0.8 m · charcoal dated') + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['Yes, because …', 'People say …', 'I’m not sure, but …']); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('ant1', ANTES_REGUA) + FM.ex('ant2', ANTES_ESCOLHE) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>About five minutes, in four short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'A famous hill', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself · tap a time to hear a line again</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + FM.ex('vc' + e.cap, k.tarefa)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = FM.ex('dep', { formato: 'fala', itens: DEPOIS_FALA, rotulo: 'Report', prox: 'Next report', diga: 'Say the report out loud first', fim: 'Nine cities, one on top of the other, and nobody fully sure. Now, our own hill.' });
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

/* V · a amostra de solo em fala primeiro */
var AMOSTRA_ITENS = [
  { pista: '<span class="ano">TOPSOIL</span>this field · <b>know</b> · <b>plow</b> · a hundred years', resp: 'This field is known <b>to have been plowed</b> for a hundred years.' },
  { pista: '<span class="ano">ASH</span>the town · <b>think</b> · <b>destroy</b> · a big fire', resp: 'The town is thought <b>to have been destroyed</b> by a big fire.' },
  { pista: '<span class="ano">STONES</span>the walls · <b>believe</b> · <b>knock down</b> · an earthquake', resp: 'The walls are believed <b>to have been knocked down</b> by an earthquake.' },
  { pista: '<span class="ano">FLOORS</span>the tower · <b>say</b> · <b>rebuild</b> · three times', resp: 'The tower is said <b>to have been rebuilt</b> three times.' },
  { pista: '<span class="ano">JARS</span>the jars · <b>think</b> · <b>hold</b> · olive oil <small>(the jars did it)</small>', resp: 'The jars are thought <b>to have held</b> olive oil.' },
  { pista: '<span class="ano">HOLES</span>wooden houses · <b>think</b> · <b>build</b> · here, 4,000 years ago', resp: 'Wooden houses are thought <b>to have been built</b> here 4,000 years ago.' }
].map(function (x, i) { x.depois = CAMADAS[i].q; return x; });
R.amostra = function (c) {
  return cab(c) + FM.fala('am', AMOSTRA_ITENS, {
    rotulo: 'Layer', prox: 'Next layer', diga: 'Say the report line out loud first',
    lado: function (feitas, atual) {
      var f = {}, i; for (i = 0; i < feitas; i++) f[i] = 1;
      if (atual < 0) return '<div class="kh-mesa kh-baixo"><div>' + amostra(-1, f, 0) + '</div><div class="lado-l">' + etiqueta('018', 'Six layers, six report lines. No layer shows a king: only an earthquake, then a fire.', 'is thought to have been · is known to have been') + '</div></div>';
      var x = CAMADAS[atual];
      return '<div class="kh-mesa kh-baixo"><div>' + amostra(atual, f, 0) + '</div><div class="lado-l"><div class="kh-nota vd"><small>FIELD NOTE · ' + x.k + ' · ' + x.prof + ' · ' + x.achado + '</small><p>' + x.nota + '</p></div></div></div>';
    },
    fim: 'Six layers, six report lines. Why <i>to have been</i>? The rule is next.'
  });
};

/* VI · achar a parte errada, com a placa dos cinco tipos */
R.regra = function (c) {
  return cab(c) + FM.erro('rg', ERRO, { regra: PRESA, titulo: 'One part of each report line is wrong. Say the right one.' });
};

/* VII · o rádio: a etiqueta decide a forma, a página do relatório se escreve */
R.radio = function (c) {
  var e = (S.fq || {}).rd || { r: {} }, r = e.r || {}, feitas = 0;
  var pag = '<div class="kh-pagina"><div class="kh-pag-cab"><b>SEASON REPORT · SECTION 2</b><small>KESTREL HILL · THE SITE</small></div>' + RADIO.map(function (x, i) {
    var f = r[i] === TAGN[x.tag]; if (f) feitas++;
    return '<p class="' + (f ? 'feito' : '') + '"><span>' + x.k + '</span>' + (f ? x.ops[0] : '…') + '</p>';
  }).join('') + '</div>';
  var fim = feitas === RADIO.length ? '<div class="balao vd ok-b"><small>FIVE TRENCHES REPORTED</small><p>The town <u>is thought to have been destroyed</u> by an earthquake and a fire. The king <u>is said to have</u> done it, but no layer shows him.</p></div>' : '';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + pag + '<div class="kh-chaves">' + ['rel','ago','lab'].map(function (k) { return '<div class="kh-tag ' + k + '"><b>' + TAGS[k][0] + '</b><span>' + TAGS[k][1] + '</span></div>'; }).join('') + '</div>' + fim + '</div><div class="lado-l">' + FM.ex('rd', RADIO_ESC) + '</div></div>';
};

/* VIII · a sua vida em camadas */
R.achados = function (c) {
  return cab(c) + '<div class="kh-um">' + FM.ex('ac', ACHADOS_CARTAS) + '</div>';
};

/* IX · a rádio local */
R.radialista = function (c) {
  var resp = '<details class="so-prof kh-host-resp"><summary>Host’s answers to the questions you get back (teacher)</summary>' + TROCAS.map(function (x, i) { return '<p><b>' + (i + 1) + '.</b> ' + x.resp + '</p>'; }).join('') + '</details>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + FM.ex('rr', RADIO_CARTAS) + resp + '</div><div class="lado-l">' + FM.ex('ar', NO_AR) + '</div></div>';
};

/* X · certo ou errado */
R.quiz = function (c) {
  return cab(c) + '<div class="kh-um">' + FM.ex('qz', QUIZ_VM) + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'This object is thought to have been used for …\nIt is believed to have …\nMy … is said to have been …', 'Your museum label',
    ['is thought to have been', 'is believed to have', 'is being', 'had it'], ['THE LABEL, 3,000 YEARS FROM NOW', 'What will they think your phone was? Then one old thing you know, in report language.'])
    + '<div class="lado-fim">' + etiqueta('3026', 'Small black glass object. <b>Thought to have been used</b> for talking to the gods.', 'Layer 1 · topsoil · still being studied')
    + '<div class="grande vd"><span><u>is thought to have been done</u> · before now, done to it</span><span><u>is thought to have done</u> · before now, it did it</span><span><u>is being done</u> · right now</span><span><u>had the thing done</u> · somebody else did it</span><span>not <s>is thought to be destroyed</s> for the past</span></div>'
    + mostra('fim', 'This object is thought to have been used for talking and taking pictures.<br>It is believed to have been carried everywhere, all day.<br>My grandfather’s house is said to have been built by his father.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
