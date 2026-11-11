/* ============================================================
   ACTUALLY, ANYWAY, MIND YOU · THE MIXING DESK · LIVE CLASS  06/10/2026
   Main series B2 · discourse markers, cada um com UM trabalho: actually
   (corrige um fato / surpreende; nunca "agora"), by the way (assunto
   paralelo), anyway (volta ao assunto / encerra), mind you (o outro
   lado, um "mas"), as I was saying (volta depois da interrupção), to be
   honest (a verdade). Erros: actually = currently, by the way × anyway
   trocados, "in the way", "to be honestly", "to be sincere", "mind"
   sem you, mind you repetindo a ideia, "as I said you", "as I was said".
   O MUNDO (da aula velha): o podcast OFF SCRIPT; a conversa real sobre
   erros (eK5Tsornvng, 5:46, selada em quatro capítulos: 0–85–175–265–
   346, as viradas reais); a mesa de som do episódio "a pior viagem"
   (Jo, Boston, a neve); o ao vivo com a chef Rosa Lind; o sofá com o
   Sam. Sem áudio além do vídeo. Nenhum nome de canal na tela.
   A CARA: a MESA DE SOM — seis canais com fader vertical, um por
   marcador; a fala certa empurra o fader para cima e acende o LED do
   canal. No ao vivo, a PLATEIA: oito poltronas que acendem com cada
   deixa certa, e a placa ON AIR.
   Fila: FILA-LIVE-386.md · 117.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'fones', rot: 'I · You and Conversation', t: 'Before the show: you, podcasts, and the way you talk.', p: 'Tap a card. Answer out loud. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'cabine', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'cabine', rot: 'III · A Real Conversation', t: 'Two people, one topic: mistakes. No script.', p: 'The video is sealed. Answer first, then it plays in four short chapters. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'cabine', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'mesa', est: 'o', min: 7, img: 'mesa', rot: 'V · The Mixing Desk', t: 'Off Script, episode 41: “The Worst Trip Ever”. Six channels, six moments. You steer.', p: 'Tap a channel. Your teacher reads Jo’s line. Read the card, then say the line it asks for.' },
  { k: 'gx', est: 'f', min: 4, img: 'estudio', rot: 'VI · On Air', t: 'Off Script, in the middle of a story. Six words are lit.', p: 'Read it together. Tap the lit words: what is their job? Then tell your own story.' },
  { k: 'regra', est: 'f', min: 6, img: 'estudio', rot: 'VII · The Rule', t: 'Six little words, six jobs.', p: 'Say each wrong line the right way out loud. Then tap SHOW ME.' },
  { k: 'aovivo', est: 'o', min: 7, img: 'plateia', rot: 'VIII · On Air', t: 'Off Script, live. Tonight’s guest: Chef Rosa Lind. Five cue cards.', p: 'Your teacher is Rosa. The card says the job. React at once.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'sofa', rot: 'IX · Hot Topics', t: 'Tonight’s hot topics are about you.', p: 'Tap any five. Answer with at least one marker. Your teacher may interrupt on purpose.' },
  { k: 'sofa', est: 'o', min: 7, extra: 1, img: 'sofa', rot: 'X · Your Talk Show', t: 'You are the host now. Sam Park, a travel vlogger, is on the couch.', p: 'Your teacher is Sam. Answer, then steer the show with a marker.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'XI · Quick Check', t: 'Five quick lines from the show.', p: 'Say the whole sentence. Then tap the words.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XII · Off Air', t: 'Is it rude to change the subject in a conversation?', p: 'Write your own mini talk show, with you as the host. It goes to your My notes.' }
];

var YT = 'eK5Tsornvng';

var VOCE = [
  { k: 'PODCASTS', q: 'Do you listen to podcasts or watch talk shows? Which kind, and when?', fup: 'What do you like about them?', st: ['Yes, on the …', 'Not really, but …'], ex: 'Yes, on the bus. Mostly comedy, and one about true crime.' },
  { k: 'TALKER', q: 'Are you a talker or a listener? What do your friends say?', fup: 'And at work?', st: ['I’m a talker.', 'My friends say …'], ex: 'A talker. My friends say I never stop.' },
  { k: 'NEW TOPIC', q: 'A conversation gets boring. How do you change the subject?', fup: 'Does it work?', st: ['I usually …'], ex: 'I ask a question about something else, like food.' },
  { k: 'INTERRUPTED', q: 'Does anybody interrupt you a lot? What do you do then?', fup: 'Does it bother you?', st: ['My … does.', 'I wait, and then …'], ex: 'My brother. I wait, and then I start again.' },
  { k: 'YOUR SHOW', q: 'You have your own talk show. Who is your first guest, and why?', fup: 'What’s your first question?', st: ['My first guest is …'], ex: 'My grandmother. She has the best stories.' }
];

var ANTES = [
  { q: 'The topic is MISTAKES. Tell me about a mistake you made in English. How did you feel?', h: 'I said “I’m boring” when I wanted to say “I’m bored”. Everybody laughed.' },
  { q: 'In a real conversation, people use little words to start, to change direction and to finish. Guess three.', h: 'So … well … anyway?', r: 'So, well, anyway: “so” to start, “well” to change direction, “anyway” to finish.' }
];
var CAPS = [
  { k: 'WHO AND WHAT', ini: 0, fim: 85, q: 'Who are the two speakers? How do they start the conversation?', h: 'Two presenters. They say hello and introduce the topic: mistakes.' },
  { k: 'LISTEN FOR IT', ini: 85, fim: 175, q: 'Count the little words. When a speaker changes direction, which word do you hear?', h: 'I heard “so” a lot, and “actually” once or twice.' },
  { k: 'THE OTHER SIDE', ini: 175, fim: 265, q: 'Do they always agree? What does one of them add?', h: 'Mostly yes. But one of them adds another side.' },
  { k: 'THE END', ini: 265, fim: 346, q: 'How do they close the conversation? What words tell you it’s the end?', h: 'They sum up, say thank you and goodbye.' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "The two speakers are Neil and Beth.", "t": true, "tm": "0:08"},
  {"f": "Today they are going to talk about holidays.", "t": false, "tm": "0:35", "c": "No. “Today we’re going to talk about mistakes.”"},
  {"f": "Beth left her suitcase in a taxi.", "t": false, "tm": "1:08", "c": "No. She left it on a train."},
  {"f": "Beth got her suitcase back.", "t": true, "tm": "1:45"},
  {"f": "Neil’s boss says: “Come back, the job is still yours.”", "t": false, "tm": "3:04", "c": "No. “It’s too late because I’ve given your job to somebody else.”"},
  {"f": "When he was a kid, Neil quit his piano lessons.", "t": true, "tm": "3:50"}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · Do you make many mistakes?",
  "quem": "Jo",
  "fala": "Jo: “Last question, host! Do you make many mistakes?”",
  "reacoes": [
    [
      "A lot",
      "To be honest, I make a lot. Mind you, I learn from them.",
      "“Ha! That is the best way to learn.”"
    ],
    [
      "Not many",
      "Actually, I don’t make many. Anyway, nobody is perfect!",
      "“Nobody. Not even on air.”"
    ],
    [
      "Small ones",
      "Only small ones. By the way, I left my keys in the door last week!",
      "“Oh no! Did you get them back?”"
    ]
  ]
};

var NOTA = {
  atual: 'CURRENTLY means now. To fix a fact: ACTUALLY.', anycorr: 'ANYWAY goes back to the topic. To fix a fact: ACTUALLY.', inway: 'The phrase is BY THE WAY.', anyside: 'ANYWAY goes back. A quick side note: BY THE WAY.',
  volta: 'BY THE WAY opens a side door. Back to the topic: ANYWAY.', mind: 'MIND YOU adds the other side. Back to the topic: ANYWAY.', mindyou: 'Two words: MIND YOU.', mindsim: 'MIND YOU adds the OTHER side, not the same idea.',
  saidyou: 'Back to your own sentence: AS I WAS SAYING.', said: 'AS I WAS SAYING, with -ING.', honesto: 'The fixed phrase: TO BE HONEST.', sincero: 'In English: TO BE HONEST.', fecha: 'To close the show: ANYWAY.'
};

var CANAIS = [
  { k: 'CH 1', job: 'FIX A FACT', jo: 'So you went to Chicago last spring, and it snowed the whole week?', card: 'It was Boston, not Chicago. Correct Jo, nicely.', ops: [['Actually, it was Boston, not Chicago.', 'ok'], ['Currently, it was Boston, not Chicago.', 'atual'], ['Anyway, it was Boston, not Chicago.', 'anycorr']] },
  { k: 'CH 2', job: 'A QUICK SIDE NOTE', jo: 'Boston, sorry! And the hotel was right next to the river, you said?', card: 'You suddenly remember: it’s Jo’s birthday tomorrow. Say it now, quickly.', ops: [['By the way, happy early birthday!', 'ok'], ['In the way, happy early birthday!', 'inway'], ['Anyway, happy early birthday!', 'anyside']] },
  { k: 'CH 3', job: 'BACK TO THE STORY', jo: 'Ha! Thank you. Thirty-five. Don’t tell anybody.', card: 'Take the conversation back to Boston and the snow.', ops: [['Anyway, back to Boston: the snow was crazy.', 'ok'], ['By the way, back to Boston: the snow was crazy.', 'volta'], ['Mind you, back to Boston: the snow was crazy.', 'mind']] },
  { k: 'CH 4', job: 'YES, BUT …', jo: 'Snow for a whole week? That sounds terrible.', card: 'It was terrible … but the city looked beautiful. Add the other side.', ops: [['It was terrible. Mind you, the city looked beautiful.', 'ok'], ['It was terrible. Mind, the city looked beautiful.', 'mindyou'], ['It was terrible. Mind you, it was really awful.', 'mindsim']] },
  { k: 'CH 5', job: 'AFTER THE CALL', jo: '(Jo’s phone rings, on air.) Sorry, sorry! My mom. Go on, go on.', card: 'Go back to what you were saying: the hotel had no heating.', ops: [['As I was saying, the hotel had no heating.', 'ok'], ['As I said you, the hotel had no heating.', 'saidyou'], ['As I was said, the hotel had no heating.', 'said']] },
  { k: 'CH 6', job: 'THE HONEST ANSWER', jo: 'So … would you go back to Boston?', card: 'Probably not. Not in the winter. Be honest.', ops: [['To be honest, not in the winter.', 'ok'], ['To be honestly, not in the winter.', 'honesto'], ['To be sincere, not in the winter.', 'sincero']] }
];

var FITAS = [['FIX A FACT · SURPRISE', 'Actually, it was Boston.'], ['A QUICK SIDE NOTE', 'By the way, I love your jacket.'], ['BACK TO THE TOPIC · CLOSE IT', 'Anyway, back to the pasta.'], ['YES, BUT …', 'It was cold. Mind you, it was beautiful.'], ['AFTER AN INTERRUPTION', 'As I was saying, the hotel was tiny.'], ['THE HONEST TRUTH', 'To be honest, it’s too sweet.']];
var CAMINHOS = [
  { k: 'NOT “NOW”', antes: 'Actually, I’m living in Boston. Before, I lived in Chicago.', depois: '<b>Currently</b>, I’m living in Boston. / <b>These days</b>, I live in Boston.', nota: 'ACTUALLY means in fact: a correction or a surprise. For now: currently, these days.' },
  { k: 'SIDE OR BACK?', antes: 'By the way, back to the pasta.', depois: '<b>Anyway</b>, back to the pasta.', nota: 'BY THE WAY opens a side topic. ANYWAY goes back to the main one, or closes it.' },
  { k: 'THE OTHER SIDE', antes: 'It was cold. Mind you, it was freezing.', depois: 'It was cold. <b>Mind you</b>, it was beautiful.', nota: 'MIND YOU adds a point on the other side, like a small but. American English also says “then again”.' },
  { k: 'AFTER THE CALL', antes: 'As I said you, the hotel was tiny.', depois: '<b>As I was saying</b>, the hotel was tiny.', nota: 'Back to your own interrupted sentence: As I was saying, …' }
];

var CUES = [
  { k: 'CUE 1', job: 'FIX A FACT', rosa: 'My first restaurant opened in 2010, right here in Chicago.', card: 'Your notes say 2012.', ini: 'Actually …', ops: [['Actually, I think it opened in 2012.', 'ok'], ['Currently, I think it opened in 2012.', 'atual'], ['Anyway, I think it opened in 2012.', 'anycorr']] },
  { k: 'CUE 2', job: 'A QUICK SIDE NOTE', rosa: 'The secret is fresh pasta, every single morning.', card: 'You notice her jacket. It’s amazing.', ini: 'By the way …', ops: [['By the way, I love your jacket.', 'ok'], ['In the way, I love your jacket.', 'inway'], ['Anyway, I love your jacket.', 'anyside']] },
  { k: 'CUE 3', job: 'BACK ON TOPIC', rosa: 'Oh, thank you! It was my grandmother’s.', card: 'Back to the pasta.', ini: 'Anyway …', ops: [['Anyway, tell us more about the pasta.', 'ok'], ['By the way, tell us more about the pasta.', 'volta'], ['Mind you, tell us more about the pasta.', 'mind']] },
  { k: 'CUE 4', job: 'YES, BUT …', rosa: 'Cooking at home is so much cheaper than eating out.', card: 'True … but it takes a lot of time.', ini: 'True. Mind you …', ops: [['True. Mind you, it takes a lot of time.', 'ok'], ['True. Mind, it takes a lot of time.', 'mindyou'], ['True. Mind you, it’s really cheap.', 'mindsim']] },
  { k: 'CUE 5', job: 'THE HONEST ANSWER', rosa: 'Here, try my new chocolate cake. Do you like it?', card: 'It’s too sweet for you.', ini: 'To be honest …', ops: [['To be honest, it’s a little too sweet for me.', 'ok'], ['To be honestly, it’s a little too sweet.', 'honesto'], ['To be sincere, it’s a little too sweet.', 'sincero']] }
];

var RODA = [
  { k: 'MONDAYS', q: 'Do you like Mondays? Why, or why not?', fup: 'And Monday nights?', st: ['To be honest, …', 'Mind you, …'], ex: 'To be honest, no. Mind you, Monday nights are OK.' },
  { k: 'YOUR CITY', q: 'What’s the best thing about your city? And the worst?', fup: 'Would you move?', st: ['The …', 'Mind you, …'], ex: 'The food. Mind you, the traffic is terrible.' },
  { k: 'A MYTH', q: 'What do people believe about your country that isn’t true?', fup: 'Where does it come from?', st: ['People think …', 'Actually, …'], ex: 'People think it’s always hot. Actually, the south gets really cold.' },
  { k: 'YOUR PHONE', q: 'How much time do you spend on your phone every day?', fup: 'Too much?', st: ['To be honest, …', 'Anyway, …'], ex: 'To be honest, too much. Anyway, I’m trying.' },
  { k: 'THE FOOD', q: 'What food does everybody love, but you don’t?', fup: 'Have you tried it again?', st: ['…', 'Actually, …'], ex: 'Sushi. Actually, I’ve never even tried it!' },
  { k: 'THE WEEKEND', q: 'Tell me about your weekend, then change the subject.', fup: 'And back to the weekend?', st: ['…', 'By the way, …'], ex: 'I stayed home. By the way, have you seen the new space movie?' }
];

var SOFA = [
  { ela: 'Thanks for having me! So, you live in a really big city, right?', voce: ['Actually, …', 'By the way, where did you grow up?'], resp: 'In a tiny town by the sea. Four hundred people and one bakery.' },
  { ela: 'Do you like traveling alone?', voce: ['To be honest, …', 'Anyway, tell us about your worst trip.'], resp: 'Oh, that’s easy: a night bus in Peru, with a goat next to me.' },
  { ela: 'Sorry, is that my phone? I’m so sorry, I’ll turn it off.', voce: ['No problem! As I was saying, …'], resp: 'Right, the goat! It slept on my shoulder for six hours.' },
  { ela: 'Traveling is expensive, though. Most people can’t do it.', voce: ['True. Mind you, …', 'Anyway, that’s all we have time for!'], resp: 'Thank you! Goodbye, everybody!' }
];

var QUIZ = [
  { a: 'Chicago? No, ', b: ', it was Boston.', op: ['actually', 'currently', 'anyway'], w: 'A correction: <b>actually</b>. Currently means now.' },
  { a: 'Sorry about the phone call. ', b: ', the hotel was tiny.', op: ['As I was saying', 'As I said you', 'By the way'], w: 'Back to your own sentence: <b>As I was saying</b>.' },
  { a: '', b: ', did you see the game last night?', op: ['By the way', 'In the way', 'Anyway'], w: 'A quick side topic: <b>By the way</b>.' },
  { a: 'The food was expensive. ', b: ', it was delicious.', op: ['Mind you', 'Mind', 'As I was saying'], w: 'The other side: <b>Mind you</b>, two words.' },
  { a: '', b: ', I didn’t like the movie very much.', op: ['To be honest', 'To be honestly', 'To be sincere'], w: 'The fixed phrase: <b>To be honest</b>.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, ms: { sel: 0, esc: {} }, rg: { abre: {} }, av: { n: 0, esc: '' }, roda: { sel: -1, foi: {} }, sf: { n: 0, resp: 0 }, qz: { n: 0, esc: -1 } };

/* a mesa de som: 6 canais; o fader sobe quando o canal acerta */
function mesa(esc, sel, mini) {
  return '<div class="mk-mesa' + (mini ? ' mini' : '') + '">' + CANAIS.map(function (c, i) {
    var ok = esc[i] === 'ok';
    return '<button type="button" class="mk-canal' + (ok ? ' up' : '') + (sel === i ? ' on' : '') + '" data-a="ms" data-n="' + i + '"><i class="mk-led"></i><span class="mk-trilho"><i class="mk-fader"></i></span><b>' + c.k + '</b><small>' + c.job + '</small></button>';
  }).join('') + '</div>';
}
/* a plateia: 8 poltronas */
function plateia(acesas) {
  return '<div class="mk-plateia"><span class="mk-onair">ON AIR</span><div class="mk-poltronas">' + CUES.map(function (_, i) { return '<i class="' + (i < acesas ? 'acesa' : '') + '"></i>'; }).join('') + '</div></div>';
}
function frases(acao, ops, esc, semente) {
  return '<div class="mk-ops">' + ordem(ops, semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · OFF SCRIPT</span><h1>Actually, Anyway, <b>Mind You</b></h1>'
    + '<p class="sub"><b>Actually</b>, it was Boston. <b>By the way</b>, happy birthday! <b>Anyway</b>, back to the snow. <b>Mind you</b>, it was beautiful.</p>'
    + '<div class="chipsx"><span class="pilula">fix · side · back</span><span class="pilula">but · after the call · honest</span><span class="pilula">one word, one job</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Go on air</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + mesa({ 0: 'ok', 2: 'ok', 3: 'ok' }, -1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce') + '<p class="so-prof dica-aluno" style="text-align:center">Listen for “actually” used for “now”. Don’t correct yet.</p>'; };

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + os seis faders da mesa de som da aula, que sobem a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Talking about mistakes', '&start=0&end=346'); }
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
  var up = {}; d.st.forEach(function (s, i) { if (s === 1) up[i] = 'ok'; if (s === 1 && !debAcesa[i]) debAcesa[i] = 1; });
  return debTopo(d, 'THE MIXING DESK', 'Faders up') + mesa(up, -1, 1).replace(/ data-a="ms" data-n="\d+"/g, ' tabindex="-1" aria-hidden="true"');
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
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.r || a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Four short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Talking about mistakes', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.mesa = function (c) {
  var e = S.ms, x = CANAIS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitos = CANAIS.filter(function (_, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + mesa(e.esc, e.sel, 1) + '<div class="mk-jo vd"><small>JO · YOUR CO-HOST · YOUR TEACHER READS IT</small><p>“' + x.jo + '”</p></div></div>'
    + '<div class="lado-l"><div class="mk-card vd"><small>PRODUCER’S CARD · ' + x.job + '</small><b>' + x.card + '</b></div><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5>' + frases('ms-v', x.ops, esc, e.sel + 1)
    + (ok ? '<p class="aprova">' + (feitos >= 6 ? 'Six faders up. Six little words did it. Let’s look at their jobs.' : 'The fader goes up. Same job, a sentence from your own life?') + '</p>' : esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : '<p class="so-prof dica-aluno">No marker but a good sentence? Accept it, then ask: which little word does that job?</p>') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg;
  return cab(c) + '<div class="mk-fitas">' + FITAS.map(function (f) { return '<div class="mk-fita vd"><small>' + f[0] + '</small><p>' + f[1] + '</p></div>'; }).join('') + '</div>'
    + '<div class="mk-caminhos">' + CAMINHOS.map(function (x, i) { var ab = e.abre[i]; return '<div class="mk-caminho vd' + (ab ? ' aberto' : '') + '"><small>' + x.k + '</small><p class="antes"><s>' + x.antes + '</s></p>' + (ab ? '<p class="depois">' + x.depois + '</p><p class="nota">' + x.nota + '</p>' : '<button type="button" class="btn" data-a="rg" data-n="' + i + '">Show me</button>') + '</div>'; }).join('') + '</div>';
};

R.aovivo = function (c) {
  var e = S.av, n = Math.min(e.n, CUES.length - 1), fim = e.n >= CUES.length, x = CUES[n], ok = e.esc === 'ok';
  var acesas = e.n + (ok ? 1 : 0);
  if (fim) return cab(c) + plateia(8) + '<div class="foco"><div class="pergunta vd"><small>FIVE CUES</small><h2>Five seats lit, and the audience is on its feet. You just hosted a live show.</h2></div></div>';
  return cab(c) + plateia(acesas) + '<div class="mesa-c"><div class="lado-l"><div class="mk-jo vd rosa"><small>ROSA · YOUR TEACHER READS IT</small><p>“' + x.rosa + '”</p></div><div class="mk-card vd"><small>' + x.k + ' · ' + x.job + '</small><b>' + x.card + '</b></div></div>'
    + '<div class="lado-l"><p class="pista">Start: ' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5>' + frases('av', x.ops, e.esc, n + 2)
    + (ok ? '<div><button type="button" class="btn" data-a="av-prox">Next cue</button></div>' : e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : '') + '</div></div>';
};

R.roda = function (c) { return cartasPessoais(c, RODA, S.roda, 'roda', ['Actually, …', 'Anyway, …', 'To be honest, …']) + '<p class="so-prof dica-aluno" style="text-align:center">On A MISTAKE, really interrupt them mid-sentence, so they need “As I was saying”.</p>'; };

R.sofa = function (c) {
  var e = S.sf, n = Math.min(e.n, SOFA.length - 1), fim = e.n >= SOFA.length, x = SOFA[n];
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>THE SHOW IS OVER</small><h2>Four questions, four turns of the wheel. Now invent one more question for Sam, with a marker.</h2></div></div>';
  return cab(c) + trilha(SOFA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="mk-jo vd"><small>SAM PARK · TONIGHT’S GUEST</small><p>“' + x.ela + '”</p></div>' + (e.resp ? '<div class="balao vd ok-b"><small>SAM</small><p>“' + x.resp + '”</p></div>' : '') + '</div>'
    + '<div class="lado-l">' + fala('sf' + n, x.voce, []) + (e.resp ? '<div><button type="button" class="btn" data-a="sf-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="sf-r">Answered · Sam replies</button></div><p class="dica-aluno">Answer about your real life. Then steer.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>Now change item 6 so that “By the way” becomes right.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.op[0] : '_____') + '</u>' + x.b + '</p></div><div class="mk-ops linha">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">What is the job here? Fix, side, back, but, honest?</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Welcome to my show! Today, …\nActually, …\nBy the way, …\nAnyway, …', 'Your talk show',
    ['Actually,', 'By the way,', 'Anyway,', 'Mind you,', 'As I was saying,', 'To be honest,'], ['IS IT RUDE TO CHANGE THE SUBJECT?', 'Your answer, then your day in four sentences, with four different markers.'])
    + '<div class="lado-fim">' + mesa({ 0: 'ok', 1: 'ok', 2: 'ok', 3: 'ok', 4: 'ok', 5: 'ok' }, -1, 1)
    + '<div class="grande vd"><span><u>actually</u> fixes · <u>by the way</u> goes aside</span><span><u>anyway</u> goes back · <u>mind you</u> adds a but</span><span><u>as I was saying</u> · <u>to be honest</u></span><span>not <s>actually = now</s>, not <s>in the way</s></span></div>'
    + mostra('fim', 'To be honest, it’s rude sometimes. Mind you, some conversations need it.<br>Today I worked from home. Actually, I worked from bed!<br>By the way, my cat sat on the keyboard all day.<br>Anyway, that’s all for today.', 1)
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
TOQUES.ms = function (b, n) { S.ms.sel = n; };
TOQUES['ms-v'] = function (b, n, v) { S.ms.esc[S.ms.sel] = v; };
TOQUES.rg = function (b, n) { S.rg.abre[n] = 1; };
TOQUES.av = function (b, n, v) { S.av.esc = v; };
TOQUES['av-prox'] = function () { S.av = { n: S.av.n + 1, esc: '' }; };
TOQUES['sf-r'] = function () { S.sf.resp = 1; };
TOQUES['sf-prox'] = function () { S.sf = { n: S.sf.n + 1, resp: 0 }; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'Off Script, on air. Tap the lit words.',
  falas: [
    { q: 'Host', f: 'Jo, you went to Boston in January because it was cheap, right?' },
    { q: 'Jo', f: '[[Actually]], it wasn’t cheap at all. The snow made everything worse.' },
    { q: 'Host', f: 'Wow. [[By the way]], did you ever find your lost bag?' },
    { q: 'Jo', f: 'Not yet. [[Anyway]], back to the snow: the train stopped for six hours.' },
    { q: 'Host', f: 'Six hours! [[Mind you]], the trip was free, so who is complaining?' },
    { q: 'Jo', f: '[[To be honest]], I was not brave. I cried on the platform.' },
    { q: 'Host', f: 'Sorry, my producer is waving at me. [[As I was saying]], it takes courage to tell that story on air.' }
  ],
  porques: [
    'Actually fixes a fact. It does not mean “now”: it was NOT cheap.',
    'By the way opens a side topic. The bag is not the main story.',
    'Anyway brings you back to the main topic: the snow.',
    'Mind you gives the other side, like a small “but”: the trip was free.',
    'To be honest says the true thing, and it is not easy to say.',
    'As I was saying picks the sentence up again after an interruption.'
  ],
  nota: 'Each little word has <b>one job</b>: <b>actually</b> fixes a fact, <b>by the way</b> opens a side topic, <b>anyway</b> goes back, <b>mind you</b> gives the other side, <b>to be honest</b> says the truth, <b>as I was saying</b> starts again after a break.',
  uso: { p: 'Your turn. Tell your teacher about a trip or a day that went wrong. Use actually, by the way, and anyway, one time each.', molde: ['Actually, …', 'By the way, …', 'Anyway, …'], ex: 'Actually, my flight was not late: I was late. By the way, did you hear about the storm? Anyway, I missed the first meeting.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
