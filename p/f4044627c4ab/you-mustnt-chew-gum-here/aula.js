/* ============================================================
   YOU MUSTN'T CHEW GUM HERE · THE SIGN WALL · LIVE CLASS  06/10/2026
   Main series A2 (aula irmã da nobody-wolf) · must + verbo (regra) ·
   mustn't (não pode: um muro) × don't have to (não precisa: porta aberta)
   · had to no passado.
   Erros universais: "you mustn't pay, it's free" (quer dizer: não
   precisa), "you don't have to smoke here" (quer dizer: não pode),
   "don't must", "must to", "haven't to", "he don't have to", must no
   passado.
   O MUNDO (da aula velha): o diário de viagem da Lia (Tokyo, Kyoto,
   Osaka, Singapore), o controle de passaporte com oito placas, a amiga
   Yuki que vem se hospedar. O VÍDEO (kIJ8edlPfMs, 2:26, guia de etiqueta
   no Japão) fica, SELADO em quatro capítulos; nome do canal e créditos
   NÃO aparecem na tela. As falas citadas vêm da legenda conferida em
   25/09 na aula velha (0:20, 0:44, 1:25, 1:32, 1:57).
   A CARA: a PAREDE DE PLACAS de aeroporto — pictogramas: azul cheio =
   MUST, anel vermelho com barra = MUSTN'T, verde tracejado = DON'T HAVE
   TO; o livro de regras ganha placa-adesivo; o passaporte ganha
   carimbo. Fila: FILA-LIVE-386.md · 080.
   ============================================================ */
var YT = 'kIJ8edlPfMs';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'mesa', rot: 'I · You and Rules', t: 'Before the trip: you and rules.', p: 'Pick a card. Answer out loud, however it comes out. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'genkan', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'genkan', rot: 'III · An Insider’s Guide', t: 'A short guide to good manners in Japan.', p: 'The video is locked. Answer first, then it plays in four short chapters. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'genkan', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'diario', est: 'o', min: 7, img: 'diario', rot: 'V · Lia’s Diary', t: 'Four pages, four cities, four rules.', p: 'Pick a page. Read it out loud, answer, then say the rule for the book.' },
  { k: 'gx', est: 'f', min: 4, img: 'carimbo', rot: 'VI · At the Border', t: 'Lia and the officer. Some words are lit.', p: 'Read it together. Tap the lit words: why this form? Then tell a visitor your rules.' },
  { k: 'regra', est: 'f', min: 6, img: 'genkan', rot: 'VII · Three Signs', t: 'MUST is a rule. MUSTN’T is a wall. DON’T HAVE TO is an open door.', p: 'Read the three signs out loud. Then fix the four mistakes.' },
  { k: 'passaporte', est: 'o', min: 7, img: 'carimbo', rot: 'VIII · Passport Control', t: 'Five signs on the way. Say the rule fast, and get a stamp.', p: 'Your teacher reads the sign. Say the rule at once: must, mustn’t or don’t have to.' },
  { k: 'casa', est: 'o', min: 7, extra: 1, img: 'casa', rot: 'IX · Your House Rules', t: 'Your home has a rule book too.', p: 'Pick five cards. Answer with must, mustn’t or don’t have to. Your teacher tells a rule from their home too.' },
  { k: 'yuki', est: 'o', min: 7, extra: 1, img: 'quarto', rot: 'X · The Houseguest', t: 'Yuki is coming to stay with you for a week. She has questions.', p: 'Your teacher is Yuki. Answer with the real rules of your home and city.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'diario', rot: 'XI · Quick Check', t: 'Five quick lines from the trip.', p: 'Say the whole sentence out loud. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'aviao', rot: 'XII · The Flight Home', t: 'The trip is over. The rule book is full.', p: 'Write the rules of your home for a guest: two musts, two mustn’ts, two don’t-have-tos.' }
];

var ABRE = [
  { k: 'As a kid', q: 'When you were a kid, what were the rules in your house?', fup: 'Which one did you break?', st: ['I had to … / I couldn’t …'], ex: 'I had to be home at nine, and I couldn’t eat in my bedroom.' },
  { k: 'Shoes', q: 'Do you take your shoes off when you get home? Do your guests?', fup: 'Why?', st: ['Yes, I do. My guests …'], ex: 'Yes, I do. My guests don’t have to, but most of them do.' },
  { k: 'A silly rule', q: 'Think of a rule at your work or school. Is it silly?', fup: 'Who made it?', st: ['We have to …'], ex: 'We have to wear a badge all day, even at lunch.' },
  { k: 'A trip', q: 'What country do you want to visit? Do you know any rules there?', fup: 'How do you know?', st: ['I think you …'], ex: 'Japan. I think you don’t have to tip in restaurants.' },
  { k: 'This weekend', q: 'This weekend, what don’t you have to do?', fup: 'What will you do instead?', st: ['I don’t have to …'], ex: 'I don’t have to wake up early on Saturday!' }
];
var FORMAS = [{ k: 'must', t: 'MUST + VERB' }, { k: 'dont', t: 'DON’T HAVE TO' }, { k: 'mustto', t: 'MUST TO', erro: 1 }, { k: 'dontmust', t: 'DON’T MUST', erro: 1 }, { k: 'troca', t: 'MUSTN’T FOR “NOT NECESSARY”', erro: 1 }];

var ANTES = [
  { q: 'What do you know about Japan? Say three things.', h: 'It’s very clean, the trains are always on time, and people bow.' },
  { q: 'Guess: in Japan, can you talk on the phone on the train? Do you tip?', h: 'I think phone calls are not OK. Tips… maybe not?' }
];
var CAPS = [
  { k: 'ESCALATORS', ini: 0, fim: 38, q: 'Where do you stand on an escalator in Tokyo? And in Osaka? And in Kyoto?', h: 'In Tokyo, on the left. In Osaka, on the right. In Kyoto, people stand on both sides!' },
  { k: 'TRASH', ini: 38, fim: 55, q: 'Why are there almost no trash cans? Where can you find one?', h: 'You’re supposed to take your trash home. You can find a trash can at a train station.' },
  { k: 'SHOES AND TRAINS', ini: 55, fim: 99, q: 'What does the step at the door mean? And what about talking on trains?', h: 'It means: shoes off. And on trains, don’t talk, or talk quietly.' },
  { k: 'CHOPSTICKS', ini: 99, fim: 146, q: 'Say two chopstick rules from the video. Which one is the biggest?', h: 'Don’t rub them together. The biggest: don’t stand them up in your rice.' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "On almost all escalators in Japan, you stand on the left.", "t": true, "tm": "0:20"},
  {"f": "In Osaka, people stand on the left too.", "t": false, "tm": "0:24", "c": "No. In Osaka they stand on the right."},
  {"f": "A step in an entryway means: take off your shoes.", "t": true, "tm": "0:56"},
  {"f": "On trains, the guide says talking is fine, even in the morning.", "t": false, "tm": "1:26", "c": "No. “Just don’t do it.” Especially in the morning commute."},
  {"f": "Outside rush hour, you can have a chat if you keep it down.", "t": true, "tm": "1:31"},
  {"f": "It is polite to leave your chopsticks standing in the rice.", "t": false, "tm": "1:55", "c": "No. Do not stick them in rice and leave them standing."}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · Yuki lands tomorrow",
  "quem": "Yuki",
  "fala": "Yuki: “I land tomorrow! Tell me one rule for my first day.”",
  "reacoes": [
    [
      "Shoes",
      "You must take off your shoes at the door.",
      "“Got it. I’ll bring my slippers anyway.”"
    ],
    [
      "A gift",
      "You don’t have to bring a gift, but snacks are welcome.",
      "“I’ll bring snacks. Everybody likes snacks.”"
    ],
    [
      "The phone",
      "You mustn’t talk loudly on the phone on the train.",
      "“Right. Quiet on the train. Thank you!”"
    ]
  ]
};
var DEB_REGRAS = [{"k": "ESCALATOR", "tipo": "must", "sinal": "STAND LEFT"}, {"k": "OSAKA", "tipo": "must", "sinal": "STAND RIGHT"}, {"k": "ENTRYWAY", "tipo": "must", "sinal": "SHOES OFF"}, {"k": "TRAINS", "tipo": "no", "sinal": "TALKING"}, {"k": "CHAT", "tipo": "free", "sinal": "KEEP IT DOWN"}, {"k": "CHOPSTICKS", "tipo": "no", "sinal": "IN RICE"}];   /* seis adesivos do livro de regras da Lia: cada linha certa cola um */

var PAGINAS = [
  { k: 'TOKYO', dia: 'DAY 1', tit: 'The Wrong Side', tipo: 'must', sinal: 'STAND LEFT',
    txt: ['My first morning in Tokyo. The station is huge, and it is very quiet.', 'On the escalator, everybody stands on the left. I stood on the right with my big suitcase. A man waited behind me. I felt terrible!'],
    q: 'Why did Lia feel terrible?', h: 'She stood on the right, and the man had to wait behind her.',
    ops: [['You must stand on the left.', 'ok'], ['You must to stand on the left.', 'to'], ['You must standing on the left.', 'ing']] },
  { k: 'KYOTO', dia: 'DAY 4', tit: 'The Low Step', tipo: 'free', sinal: 'SLIPPERS',
    txt: ['Tonight I’m in a small guesthouse in Kyoto. At the door, there is a low wooden step. That step means one thing: shoes off!', 'Mrs. Mori gave me slippers. “You don’t have to wear them. But the floor is cold.” I wore them all night.'],
    q: 'What does the low step mean? What did Mrs. Mori give Lia?', h: 'Shoes off. She gave Lia a pair of slippers.',
    ops: [['She doesn’t have to wear the slippers.', 'ok'], ['She mustn’t wear the slippers.', 'proib'], ['She don’t have to wear the slippers.', 'does']] },
  { k: 'OSAKA', dia: 'DAY 6', tit: 'Dinner with Kenta', tipo: 'no', sinal: 'CHOPSTICKS',
    txt: ['Dinner in Osaka with my new friend Kenta. He taught me chopstick rules.', 'One: never rub your chopsticks together. Two: never stand them up in your rice. People do that at funerals.'],
    q: 'Which chopstick rule is the big one? Why?', h: 'Never stand them up in your rice, because people do that at funerals.',
    ops: [['You mustn’t rub your chopsticks together.', 'ok'], ['You don’t have to rub your chopsticks together.', 'dont'], ['You don’t must rub your chopsticks together.', 'dontmust']] },
  { k: 'SINGAPORE', dia: 'DAY 8', tit: 'The Stopover', tipo: 'no', sinal: 'GUM',
    txt: ['On the way home, I stopped in Singapore. You can’t bring chewing gum into the country. It’s the law! I had three packs. I threw them in a bin.', 'The officer looked at my passport and smiled. “You don’t have to be nervous,” he said. “Welcome to Singapore.”'],
    q: 'What did Lia do with her gum?', h: 'She threw it in a bin before customs.',
    ops: [['You mustn’t bring gum into Singapore.', 'ok'], ['You don’t have to bring gum into Singapore.', 'dont'], ['You mustn’t to bring gum into Singapore.', 'to']] }
];
var NAO = {
  to: 'must + verb, no TO.', ing: 'must + the plain verb: must stand.', proib: 'Nobody forbids it. It’s just not necessary: doesn’t have to.',
  does: 'She: DOESN’T have to.', dont: 'It’s a wall, NOT ALLOWED: mustn’t.', dontmust: 'The negative of must is mustn’t. Never don’t must.',
  inverte: 'Read the sign again: is it a rule to DO?', havent: 'have to is a normal verb: don’t have to.', semto: 'have TO: you have to stand.'
};

var SINAIS = [['must', 'MUST', 'A RULE · DO IT', 'You must stand on the left.'], ['no', 'MUSTN’T', 'NOT ALLOWED · A WALL', 'You mustn’t bring gum.'], ['free', 'DON’T HAVE TO', 'NOT NECESSARY · A FREE DOOR', 'You don’t have to tip.']];
var ARMAS = [
  ['FREE, NOT FORBIDDEN', 'The museum is free on Sundays. You mustn’t pay.', 'The museum is free on Sundays. You don’t have to pay.', 'Nobody forbids it: it’s just not necessary.'],
  ['FORBIDDEN, NOT FREE', 'It’s a hospital. You don’t have to smoke here.', 'It’s a hospital. You mustn’t smoke here.', 'It’s a wall: NOT ALLOWED.'],
  ['NO DON’T MUST', 'You don’t must touch the paintings.', 'You mustn’t touch the paintings.', 'must + not = mustn’t.'],
  ['NO TO, NO PAST', 'Yesterday I must to wait an hour.', 'Yesterday I had to wait an hour.', 'must + verb, no TO. In the past: had to.']
];

var PLACAS = [
  { k: 'TOKYO TRAIN', tipo: 'no', sinal: 'PHONE CALLS', fato: 'On the morning train, a sign shows a phone with a line across it.', ops: [['You mustn’t talk on the phone on the train.', 'ok'], ['You don’t have to talk on the phone on the train.', 'dont'], ['You mustn’t to talk on the phone.', 'to']] },
  { k: 'THE TEMPLE', tipo: 'must', sinal: 'SHOES OFF', fato: 'At the temple door, there is a low step and a row of shoes.', ops: [['You must take off your shoes.', 'ok'], ['You must to take off your shoes.', 'to'], ['You mustn’t take off your shoes.', 'inverte']] },
  { k: 'THE RAIL PASS', tipo: 'free', sinal: 'TICKETS', fato: 'Tom has a rail pass. It works on most trains.', ops: [['He doesn’t have to buy tickets.', 'ok'], ['He mustn’t buy tickets.', 'proib'], ['He don’t have to buy tickets.', 'does']] },
  { k: 'THE STREET', tipo: 'must', sinal: 'YOUR TRASH', fato: 'There are no trash cans on the street. You have an empty bottle.', ops: [['You must take your trash with you.', 'ok'], ['You must taking your trash with you.', 'ing'], ['You mustn’t take your trash with you.', 'inverte']] },
  { k: 'THE HOT SPRING', tipo: 'no', sinal: 'SWIMSUITS', fato: 'At a traditional hot spring, a sign shows a swimsuit with a line across it.', ops: [['You mustn’t wear a swimsuit.', 'ok'], ['You don’t must wear a swimsuit.', 'dontmust'], ['You don’t have to wear a swimsuit.', 'dont']] }
];

var CASA = [
  { k: 'Shoes', q: 'In your home, do guests have to take their shoes off?', fup: 'And on the sofa?', st: ['They don’t have to … / They must …'], ex: 'No, they don’t have to. But they mustn’t put their feet on the sofa!' },
  { k: 'The kitchen', q: 'What mustn’t people do in your kitchen?', fup: 'Why?', st: ['They mustn’t …'], ex: 'They mustn’t touch my knives.' },
  { k: 'Night', q: 'What must somebody do before bed in your home?', fup: 'Who usually does it?', st: ['Somebody must …'], ex: 'Somebody must lock the door and turn off the lights.' },
  { k: 'Pets', q: 'Do you have a pet? What mustn’t it do?', fup: 'Does it listen?', st: ['It mustn’t …'], ex: 'My cat mustn’t sleep on the table. It does anyway.' },
  { k: 'Sunday', q: 'What don’t you have to do on Sundays?', fup: 'What do you do instead?', st: ['I don’t have to …'], ex: 'I don’t have to cook. We order pizza.' },
  { k: 'The bathroom', q: 'Is there a bathroom rule in your home?', fup: 'Who made it?', st: ['You mustn’t …'], ex: 'You mustn’t use my towel!' }
];

var YUKI = [
  { ela: 'I’m so excited! Do I have to take my shoes off in your home?', voce: 'You must… / You don’t have to… (your home)', resp: 'OK! I’ll bring my slippers anyway. Old habit.' },
  { ela: 'Is there anything I mustn’t do? I don’t want to be rude.', voce: 'You mustn’t… (one real rule)', resp: 'Got it. I’ll be very careful.' },
  { ela: 'Do I have to bring a gift for your family? In Japan, we always do.', voce: 'You don’t have to…, but… (your answer)', resp: 'I’ll bring some snacks. Everybody likes snacks.' },
  { ela: 'And in your city? What must a visitor do? What mustn’t they do?', voce: 'A visitor must… and mustn’t… (your city)', resp: 'Great tips. I’m writing them in my own rule book!' }
];

var QUIZ = [
  { f: 'In Singapore, you ___ bring chewing gum into the country.', op: ['mustn’t', 'don’t have to', 'don’t must'], nao: 'It’s the law, NOT ALLOWED: mustn’t.' },
  { f: 'The museum is free on Sundays. You ___ pay.', op: ['don’t have to', 'mustn’t', 'haven’t to'], nao: 'Not necessary, not forbidden: don’t have to.' },
  { f: 'On a Tokyo escalator, you must ___ on the left.', op: ['stand', 'to stand', 'standing'], nao: 'must + verb, no TO.' },
  { f: 'Tom has a rail pass. He ___ buy tickets.', op: ['doesn’t have to', 'don’t have to', 'mustn’t'], nao: 'He: doesn’t have to. And it’s not forbidden.' },
  { f: 'Last night I ___ carry my trash for an hour.', op: ['had to', 'must', 'musted'], nao: 'must has no past: had to.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0, cap: 0, viu: {} }, di: { sel: 0, esc: {} }, pp: { n: 0, esc: '' }, casa: { sel: -1, foi: {} }, yk: { n: 0 }, qz: { n: 0, esc: -1 } };

function placa(tipo, rot, mini) {
  var r = mini ? 46 : 70, w = r * 2 + 12;
  var corpo = tipo === 'must' ? '<circle cx="' + (w / 2) + '" cy="' + (w / 2) + '" r="' + r + '" class="pl-must"/>'
    : tipo === 'no' ? '<circle cx="' + (w / 2) + '" cy="' + (w / 2) + '" r="' + r + '" class="pl-no"/><line x1="' + (w / 2 - r * .7) + '" y1="' + (w / 2 - r * .7) + '" x2="' + (w / 2 + r * .7) + '" y2="' + (w / 2 + r * .7) + '" class="pl-barra"/>'
    : '<rect x="6" y="6" width="' + (w - 12) + '" height="' + (w - 12) + '" rx="18" class="pl-free"/>';
  return '<svg class="placa' + (mini ? ' mini' : '') + '" viewBox="0 0 ' + w + ' ' + w + '" aria-label="' + rot + '">' + corpo + '<text x="' + (w / 2) + '" y="' + (w / 2 + 5) + '" text-anchor="middle" class="pl-t ' + tipo + '" style="font-size:' + Math.min(mini ? 13 : 18, (r * 1.45) / (rot.length * 0.62)).toFixed(1) + 'px">' + rot + '</text></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · EASY READER · THE TRAVEL RULE BOOK</span><h1>You Mustn’t <b>Chew Gum Here</b></h1>'
    + '<p class="sub">In Tokyo you <b>must</b> stand on the left. In Singapore you <b>mustn’t</b> bring gum. And you <b>don’t have to</b> tip.</p>'
    + '<div class="chipsx"><span class="pilula">must + verb</span><span class="pilula">mustn’t = a wall</span><span class="pilula">don’t have to = a free door</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the rule book</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="parede-p">' + placa('must', 'STAND LEFT') + placa('no', 'GUM') + placa('free', 'TIPS') + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + o livro de regras da Lia (seis adesivos que colam a cada acerto) + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'A guide to good manners in Japan', '&start=0&end=134'); }
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
  var tiles = DEB_REGRAS.map(function (x, i) {
    var s = d.st[i], nova = s === 1 && !debAcesa[i]; if (s === 1) debAcesa[i] = 1;
    if (s === 1) return '<div class="adesivo deb-ad' + (nova ? ' nova' : '') + '">' + placa(x.tipo, x.sinal, 1) + '<span>' + x.k + '</span></div>';
    return '<div class="adesivo vazio deb-ad' + (s === -1 ? ' perdida' : '') + '"><span>' + x.k + '</span></div>';
  }).join('');
  return debTopo(d, 'LIA’S RULE BOOK', 'Stickers') + '<div class="livro deb-livro"><small>LIA’S RULE BOOK</small><div class="adesivos deb-adesivos">' + tiles + '</div></div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem.replace(/^The /, 'the ') + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Four short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'A guide to good manners in Japan', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < 3 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again. The video stops by itself before the last tip.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + passos + corpo;
};

R.diario = function (c) {
  var e = S.di, x = PAGINAS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok';
  var livro = '<div class="livro"><small>LIA’S RULE BOOK</small><div class="adesivos">' + PAGINAS.map(function (p, i) { return e.esc[i] === 'ok' ? '<div class="adesivo">' + placa(p.tipo, p.sinal, 1) + '<span>' + p.k + '</span></div>' : '<div class="adesivo vazio"><span>' + p.k + '</span></div>'; }).join('') + '</div></div>';
  return cab(c) + '<div class="abas-d">' + PAGINAS.map(function (p, i) { return '<button type="button" class="aba' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feita' : '') + '" data-a="di" data-n="' + i + '"><small>' + p.dia + '</small>' + p.k + '</button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l"><div class="pagina-d"><small>' + x.dia + ' · ' + x.k + '</small><h3>' + x.tit + '</h3>' + x.txt.map(function (t) { return '<p>' + t + '</p>'; }).join('') + '</div>' + livro + '</div>'
    + '<div class="lado-l"><div class="pede vd"><small>QUESTION</small><b>' + x.q + '</b></div>' + mostra('dq' + e.sel, x.h, 1)
    + '<h5 class="rot-ouve">THE RULE FOR THE BOOK</h5>' + (ok ? '<div class="balao vd"><p>' + x.ops[0][0] + '</p></div><p class="aprova">A new sticker in the book.</p>'
      : '<div class="versoes">' + ordem(x.ops, e.sel + 3).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="di-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '')) + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="sinais">' + SINAIS.map(function (s) { return '<div class="sinal-c ' + s[0] + '">' + placa(s[0], s[1], 1) + '<div><small>' + s[2] + '</small><b>' + s[3] + '</b></div></div>'; }).join('') + '</div>'
    + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP') + '<p class="dica-aluno" style="text-align:center">And never must to, don’t must, haven’t to. In the past: had to.</p>';
};

R.passaporte = function (c) {
  var e = S.pp, n = e.n, fim = n >= PLACAS.length;
  var pass = '<div class="passaporte"><small>PASSPORT · ENTRY STAMPS</small><div class="carimbos">' + PLACAS.map(function (p, i) { return '<span class="carimbo' + (i < n ? ' feito ' + p.tipo : '') + '">' + (i < n ? p.k.split(' ').slice(-1)[0] : '') + '</span>'; }).join('') + '</div></div>';
  if (fim) return cab(c) + trilha(PLACAS, n) + '<div class="mesa-c"><div class="lado-l">' + pass + '</div><div class="lado-l"><div class="pergunta vd"><small>FIVE STAMPS</small><h2>Your passport is full. Welcome home.</h2></div></div></div>';
  var x = PLACAS[n], esc = e.esc, ok = esc === 'ok';
  return cab(c) + trilha(PLACAS, n) + '<div class="mesa-c"><div class="lado-l"><div class="sinal-g">' + placa(x.tipo, x.sinal) + '<div><small>' + x.k + '</small><p>' + x.fato + '</p></div></div>' + pass + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">SAY THE RULE, FAST</h5><div class="versoes">' + ordem(x.ops, n + 1).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="pp" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">Stamped.</p><div><button type="button" class="btn" data-a="pp-prox">Next sign</button></div>' : esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '') + '</div></div>';
};

R.casa = function (c) { return cartasPessoais(c, CASA, S.casa, 'casa'); };

R.yuki = function (c) {
  var e = S.yk, n = Math.min(e.n, YUKI.length - 1), x = YUKI[n];
  return cab(c) + trilha(YUKI, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('quarto') + ')"><span>YUKI · A FRIEND FROM OSAKA</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>YUKI ASKS</small><b>“' + x.ela + '”</b></div>' + fala('yk' + n, [x.voce], ['You must', 'You mustn’t', 'You don’t have to', 'but']) + '<p class="so-prof dica-aluno">Yuki answers: “' + x.resp + '”</p>'
    + (n < YUKI.length - 1 ? '<div><button type="button" class="btn" data-a="yk-prox">Next question</button></div>' : '<p class="aprova">Four answers, four real rules.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>must: do it. mustn’t: a wall. don’t have to: a free door.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 4).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Welcome to my home!\nYou must …\nYou mustn’t …\nYou don’t have to …', 'Your house rules',
    ['Welcome to my home! ', 'You must ', 'You mustn’t ', 'You don’t have to ', 'Guests don’t have to '], ['THE RULES OF YOUR HOME, FOR A GUEST', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now: a wall, or a free door?' : 'Two musts, two mustn’ts, two don’t-have-tos.'])
    + '<div class="lado-fim"><div class="parede-p mini">' + placa('must', 'MUST', 1) + placa('no', 'MUSTN’T', 1) + placa('free', 'DON’T HAVE TO', 1) + '</div><div class="grande vd"><span>you <u>must</u> stand (no to)</span><span>you <u>mustn’t</u> bring gum: a wall</span><span>you <u>don’t have to</u> tip: a free door</span></div>'
    + mostra('fim', 'Welcome to my home!<br>You must take off your shoes.<br>You mustn’t feed the cat.<br>You don’t have to wash the dishes.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.di = function (b, n) { S.di.sel = n; };
TOQUES['di-v'] = function (b, n, v) { S.di.esc[S.di.sel] = v; };
TOQUES.pp = function (b, n, v) { S.pp.esc = v; };
TOQUES['pp-prox'] = function () { S.pp = { n: S.pp.n + 1, esc: '' }; };
TOQUES['yk-prox'] = function () { S.yk.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'Passport control, Tokyo. Tap the lit words.',
  falas: [
    { q: 'Officer', f: 'Welcome to Japan. [[You must]] show your passport.' },
    { q: 'Lia', f: 'Here it is. Can I take a photo of the sign?' },
    { q: 'Officer', f: 'Sure. But [[you mustn’t]] take photos of the officers.' },
    { q: 'Lia', f: 'OK. [[Do I have to]] pay for the stamp?' },
    { q: 'Officer', f: 'No, [[you don’t have to]] pay. It’s free.' },
    { q: 'Lia', f: 'Great. Yesterday, at the other airport, [[I had to]] wait two hours.' },
    { q: 'Officer', f: 'Today is quick. [[You don’t have to]] wait.' }
  ],
  porques: [
    'A rule from the officer: must + the clean verb. No to: you must show.',
    'A wall: mustn’t means it is not allowed.',
    'A question about a rule: Do I have to …? Not Must I …?',
    'An open door: don’t have to means it is not necessary. The stamp is free.',
    'The past of must is had to: I had to wait. Never I must wait yesterday.',
    'Not necessary again: today there is no line.'
  ],
  nota: 'Three signs: <b>must</b> is a rule, <b>mustn’t</b> is a wall (not allowed), <b>don’t have to</b> is an open door (not necessary). For a question and for the past: <b>Do I have to …?</b> and <b>had to</b>.',
  uso: { p: 'Your turn. You are at passport control in your own country. Tell a visitor one thing they must do, one thing they mustn’t do, and one thing they don’t have to do.', molde: ['You must …', 'You mustn’t …', 'You don’t have to …'], ex: 'You must show your ID. You mustn’t take photos here. You don’t have to pay for the bus.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
