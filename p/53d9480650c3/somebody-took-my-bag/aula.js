/* ============================================================
   SOMEBODY TOOK MY BAG · THE HALLOWEEN PARTY · LIVE 09/10/2026
   Main series A2 · Halloween · os indefinidos: some- (frase positiva),
   any- (pergunta e negativa com not), no- (a negativa já está na
   palavra: uma negativa só) + -body / -thing / -where; everybody,
   somebody, nobody pedem o verbo no SINGULAR.
   Erros universais: "There isn't nothing" (negativa dupla do
   português), "Nobody didn't see", "There's anybody here" (any na
   positiva), "Everybody are", "Somebodies".
   O MUNDO: a festa de Halloween no prédio da Mia. No fim da noite a
   bolsa dela (com as chaves) sumiu. Todo mundo estava fantasiado e
   ninguém viu nada. A busca é pela planta do apartamento, e os seis
   convidados fantasiados respondem às perguntas do aluno. A virada:
   "Nobody took it." A bolsa estava no caldeirão de doces o tempo
   todo: a Mia a pôs lá quando distribuía doce.
   O VÍDEO: Hotel Transylvania (2012), trailer oficial (2Ioqovct5Vs,
   1:42, conferido 09/10: incorporável, sem limite de idade). Falas:
   0:42 "Sir, we have an urgent plumbing issue." · 1:13 "It's just a
   normal hotel, nothing going on here." · 1:28 "So much for Do Not
   Disturb."
   VI conta a origem do "trick or treat" (pedido do Carlos, 08/10).
   A CARA: o grupo do prédio no celular (escuro) + a planta do
   apartamento em neon laranja sobre roxo-noite.
   ============================================================ */
var YT = '2Ioqovct5Vs';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'festa', rot: 'I · Party Talk', t: 'Before we look for the bag: you and parties.', p: 'Pick a card. Real life. Nobody is corrected here.' },
  { k: 'video', est: 'l', min: 10, img: 'hotel', rot: 'II · Do Not Disturb', t: 'A hotel only for monsters. Then somebody arrives.', p: 'Before, during and after the trailer. Then True or Lie.' },
  { k: 'regra', est: 'f', min: 6, img: 'festa', rot: 'III · The Rule', t: 'Somebody, anybody, nobody, everybody.', p: 'Positive: some-. Question and not: any-. no- is already negative. Say each trap the right way, then tap it.' },
  { k: 'busca', est: 'o', min: 7, img: 'corredor', rot: 'IV · The Search', t: 'Six rooms. Where is the bag?', p: 'Tap a room. Look at what’s there. Say what you see, then tap what you said.' },
  { k: 'convidados', est: 'o', min: 7, img: 'fantasias', rot: 'V · Six Guests', t: 'Ask the guests. Everybody was wearing a costume.', p: 'Ask each guest the question. Your teacher answers as the guest.' },
  { k: 'historia', est: 'l', min: 7, extra: 1, img: 'rua', rot: 'VI · Trick or Treat?', t: 'Where does trick-or-treating come from?', p: 'Your teacher reads the story. Then answer the questions.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'festa', rot: 'VII · Quick Check', t: 'Six quick ones before the party ends.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'corredor', rot: 'VIII · The Group Chat', t: 'Tell the building what happened.', p: 'Four or five sentences for the group chat. It goes to your My notes.' }
];

var ABRE = [
  { k: 'PARTIES', q: 'Do you like big parties or small ones?', fup: 'What was the last party you went to?', st: ['I like …', 'I prefer …'], ex: 'I prefer small parties with my friends.' },
  { k: 'COSTUMES', q: 'Did you ever wear a costume? What was it?', fup: 'Who made it?', st: ['Yes, I was a …', 'No, never …'], ex: 'Yes! I was a pirate at a school party.' },
  { k: 'LOST THINGS', q: 'What do you always lose?', fup: 'Where do you usually find it?', st: ['I always lose my …'], ex: 'I always lose my keys. They’re usually in my jacket.' },
  { k: 'NEIGHBORS', q: 'Do you know your neighbors?', fup: 'Is there a group chat in your building?', st: ['Yes, I know …', 'Not really …'], ex: 'I know two of them. Our group chat is always about the elevator!' },
  { k: 'HALLOWEEN', q: 'Is Halloween a big thing where you live?', fup: 'What do people do?', st: ['Not really …', 'Yes, people …'], ex: 'Not really, but some schools have a costume party.' }
];
var FORMAS = [{ k: 'some', t: 'SOMEBODY / SOMETHING' }, { k: 'any', t: 'ANYBODY? / NOT ANYTHING' }, { k: 'dupla', t: 'ISN’T NOTHING', erro: 1 }, { k: 'are', t: 'EVERYBODY ARE', erro: 1 }];

var ANTES = [
  { q: 'This hotel is only for monsters. Who can’t stay there?', h: 'Humans. Nobody human can stay there.' },
  { q: 'What could go wrong in a hotel full of monsters?', h: 'Somebody could break something, or a human could find the hotel!' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "The hotel is only for monsters.", "t": true},
  {"f": "Somebody says: “We have an urgent plumbing issue.”", "t": true, "tm": "0:42"},
  {"f": "Everybody in the hotel is human.", "t": false, "c": "No. Everybody is a monster, except the human."},
  {"f": "A human arrives at the hotel.", "t": true},
  {"f": "Dracula says: “It’s a hotel full of humans.”", "t": false, "tm": "1:13", "c": "No. “It’s just a normal hotel, nothing going on here.”"},
  {"f": "A voice says: “So much for Free Wi-Fi.”", "t": false, "tm": "1:28", "c": "No. “So much for Do Not Disturb.”"}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · Did you see anybody?",
  "quem": "Dracula",
  "fala": "Dracula: “A human is somewhere in my hotel! Did you see anybody?”",
  "reacoes": [
    [
      "Nobody",
      "I didn’t see anybody. There’s nobody here.",
      "“Good. Nothing to see here.”"
    ],
    [
      "Somebody",
      "I saw somebody in the hall. He has a map.",
      "“A human! Everybody, hide!”"
    ],
    [
      "Something",
      "I heard something in room 348. Is it the toilet?",
      "“Not again! Somebody call the plumber.”"
    ]
  ]
};
var DEB_FOTOS = [{"k": "THE HOTEL", "img": "hotel"}, {"k": "THE HALL", "img": "corredor"}, {"k": "THE COSTUMES", "img": "fantasias"}, {"k": "THE PARTY", "img": "festa"}, {"k": "THE STREET", "img": "rua"}, {"k": "THE GROUP CHAT", "img": "capa"}];   /* seis fotos da própria aula: cada linha certa abre um quarto */

var FITAS = [['POSITIVE', 'Somebody took it. · There’s something on the sofa.'], ['QUESTION', 'Did anybody see it? · Is there anything in the kitchen?'], ['NEGATIVE: ONE IS ENOUGH', 'There’s nothing. = There isn’t anything.'], ['ONE PERSON', 'Everybody is here. · Nobody knows. (singular)']];
var ARMAS = [
  ['ONE NEGATIVE', 'Nobody didn’t see the bag.', 'Nobody <b>saw</b> the bag.', 'nobody is already negative. No didn’t.'],
  ['NOT NOTHING', 'There isn’t nothing in the kitchen.', 'There isn’t <b>anything</b> in the kitchen.', 'With not: anything. Or just: There’s nothing.'],
  ['POSITIVE: SOME', 'There’s anybody in the bathroom.', 'There’s <b>somebody</b> in the bathroom.', 'In a positive sentence: somebody, something.'],
  ['SINGULAR', 'Everybody are looking for the bag.', 'Everybody <b>is</b> looking for the bag.', 'everybody is one word: is, has, wants.'],
  ['ONE WORD', 'Somebodies took my keys.', '<b>Somebody</b> took my keys.', 'somebody has no plural.'],
  ['QUESTION: ANY', 'Did you see somebody near the door?', 'Did you see <b>anybody</b> near the door?', 'In a question: anybody, anything (most of the time).']
];
var NOTA = {
  dupla: 'One negative is enough: nothing / nobody, or isn’t + anything.', any: 'In a positive sentence: some- (somebody, something).',
  plural: 'somebody and everybody are singular: is, has. No -s.', some: 'In a question or with not: any- (anybody, anything).'
};

/* IV: a planta. Cada cômodo: o que se vê (o aluno descreve), as três versões e o que acontece depois */
var COMODOS = [
  { k: 'KITCHEN', ve: 'Empty bowls. Candy wrappers. No bag.', ops: [['There isn’t anything in the kitchen. Just wrappers.', 'ok'], ['There isn’t nothing in the kitchen.', 'dupla'], ['There’s anything in the kitchen.', 'any']], depois: 'Nothing here. Next room!' },
  { k: 'LIVING ROOM', ve: 'A vampire mask on the sofa. Whose is it?', ops: [['Somebody left a mask on the sofa.', 'ok'], ['Anybody left a mask on the sofa.', 'any'], ['Somebodies left a mask on the sofa.', 'plural']], depois: 'It’s the Vampire’s mask. Ask him in scene V.' },
  { k: 'BALCONY', ve: 'Cold wind. Two chairs. Nobody there.', ops: [['There’s nobody on the balcony.', 'ok'], ['There isn’t nobody on the balcony.', 'dupla'], ['There’s anybody on the balcony.', 'any']], depois: 'Nobody, nothing. Just the moon.' },
  { k: 'BATHROOM', ve: 'The door is locked. You can hear singing inside.', ops: [['Somebody is in the bathroom!', 'ok'], ['Somebody are in the bathroom!', 'plural'], ['Anybody is in the bathroom!', 'any']], depois: 'It’s the Skeleton. He’s singing “Thriller”. No bag.' },
  { k: 'STAIRS', ve: 'All the guests are on the stairs, looking under the coats.', ops: [['Everybody is looking for the bag.', 'ok'], ['Everybody are looking for the bag.', 'plural'], ['Every people is looking for the bag.', 'plural']], depois: 'Everybody is helping. Still no bag.' },
  { k: 'THE HALL', ve: 'The big cauldron of candy, by the front door. It’s very heavy.', ops: [['There’s something heavy in the cauldron!', 'ok'], ['There’s anything heavy in the cauldron!', 'any'], ['There’s somethings heavy in the cauldron!', 'plural']], depois: 'Under the candy… Mia’s bag! Nobody took it. Mia put it there when she was giving out candy.' }
];

var CONVIDADOS = [
  { quem: 'THE VAMPIRE', pede: 'Ask him if he saw anybody near the bag.', modelo: 'Did you see anybody near the bag?', resp: 'No, I didn’t see anybody. I was in the kitchen all night, looking for something without garlic.' },
  { quem: 'THE WITCH', pede: 'Ask her if she took anything from the living room.', modelo: 'Did you take anything from the living room?', resp: 'Nothing! Well… just some cookies. Everybody takes cookies.' },
  { quem: 'THE MUMMY', pede: 'Ask him where he was at midnight.', modelo: 'Where were you at midnight?', resp: 'Somewhere on the balcony. I needed some air. These bandages are hot!' },
  { quem: 'THE PIRATE', pede: 'Ask her if anybody gave her a bag.', modelo: 'Did anybody give you a bag?', resp: 'Nobody gave me anything. But I saw Mia near the cauldron with something black.' },
  { quem: 'THE GHOST', pede: 'Ask him if there’s anything strange in the hall.', modelo: 'Is there anything strange in the hall?', resp: 'Yes, the cauldron! It’s heavier than before. Something is in there.' }
];

/* VI: a origem do "trick or treat" (fatos: o "guising" na Escócia e na Irlanda; famílias levaram a tradição aos EUA;
   a frase "trick or treat" se espalha nos EUA nos anos 1930 e 1940) */
var HIST = {
  txt: 'Long ago, in Scotland and Ireland, children went from house to house on Halloween night. They wore costumes, so nobody knew who they were. People called it “guising”. At every door, the children did something for the family: they sang a song, told a joke or read a poem. Then the family gave them something to eat: fruit, nuts or a little cake. Later, Scottish and Irish families took this tradition to America. In the 1930s and 1940s, American kids started to say “Trick or treat!”: give us something sweet, or we play a trick on you. Today, everybody knows the words, and almost nobody plays the trick.',
  qs: [
    { q: 'Why did nobody know who the children were?', h: 'Because they wore costumes.' },
    { q: 'What did the children do at every door?', h: 'They did something for the family: a song, a joke or a poem.' },
    { q: 'Did the families give them anything?', h: 'Yes, they gave them something to eat: fruit, nuts or a little cake.' },
    { q: 'What does “trick or treat” mean?', h: 'Give us something sweet, or we play a trick on you.' }
  ]
};

var QUIZ = [
  { a: 'Did you see ', b: ' near the door?', op: ['anybody', 'nobody', 'somebodies'], nao: 'In a question: anybody.' },
  { a: 'There’s ', b: ' in the bathroom. I can hear singing.', op: ['somebody', 'anybody', 'nobody not'], nao: 'Positive sentence: somebody.' },
  { a: 'Nobody ', b: ' the bag.', op: ['saw', 'didn’t see', 'not saw'], nao: 'nobody is already negative: Nobody saw.' },
  { a: 'Everybody ', b: ' looking for it.', op: ['is', 'are', 'be'], nao: 'everybody is singular: is.' },
  { a: 'There isn’t ', b: ' in the fridge.', op: ['anything', 'nothing', 'something'], nao: 'With not: anything.' },
  { a: 'My keys must be ', b: ' in this apartment!', op: ['somewhere', 'anywhere', 'nowhere'], nao: 'Positive and sure: somewhere.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0 }, bs: { sel: -1, esc: {} }, cv: { n: 0, viu: {} }, hist: { ouviu: 0 }, quiz: { esc: {} } };

/* o grupo do prédio (capa e fim): mensagens fixas, iguais nos dois lados */
var CHAT = [['MIA · 4B', 'Has anybody seen my bag?? My keys are in it 😭', 0], ['LEO · 2A', 'Nobody took it, relax. It’s somewhere in your apartment', 0], ['MIA · 4B', 'I looked everywhere!!', 0], ['YOU', 'I’m coming up. Let’s look for it 🎃', 1]];
function chat(n) {
  return '<div class="celular"><div class="cel-top"><b>Building 7 · Halloween 🎃</b><small>12 people</small></div><div class="cel-msgs">' + CHAT.slice(0, n || CHAT.length).map(function (m) {
    return '<div class="msg' + (m[2] ? ' eu' : '') + '"><small>' + m[0] + '</small><p>' + m[1] + '</p></div>'; }).join('') + '</div></div>';
}
function planta(e) {
  return '<div class="planta">' + COMODOS.map(function (c, i) {
    var feito = e.esc[i] === 'ok';
    return '<button type="button" class="comodo c' + i + (e.sel === i ? ' on' : '') + (feito ? ' feito' : '') + (feito && i === 5 ? ' achou' : '') + '" data-a="bs" data-n="' + i + '"><b>' + c.k + '</b>' + (feito ? '<small>' + (i === 5 ? 'THE BAG!' : 'checked') + '</small>' : '') + '</button>';
  }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · A2 · THE HALLOWEEN PARTY</span><h1><b>Somebody</b> Took My Bag</h1>'
    + '<p class="sub">The party is over. Mia’s bag is gone. Everybody was in a costume, and <b>nobody</b> saw <b>anything</b>.</p>'
    + '<div class="chipsx"><span class="pilula">somebody · something</span><span class="pilula">anybody? · not anything</span><span class="pilula">nobody · nothing</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the group chat</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + chat() + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + seis fotos da aula (os quartos do hotel) que abrem a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Hotel Transylvania · official trailer'); }
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
  var tiles = DEB_FOTOS.map(function (x, i) {
    var s = d.st[i], nova = s === 1 && !debAcesa[i]; if (s === 1) debAcesa[i] = 1;
    return '<span class="deb-ph' + (s === 1 ? ' feita' : s === -1 ? ' perdida' : '') + (nova ? ' nova' : '') + '" style="--bg:url(\'' + img(x.img) + '\')"><b>' + (s === 1 ? 'OPEN' : s === -1 ? 'LOCKED' : 'CLOSED') + '</b><span>' + x.k + '</span></span>';
  }).join('');
  return debTopo(d, 'THE HOTEL ROOMS', 'Rooms open') + '<div class="deb-phs" aria-hidden="true">' + tiles + '</div>';
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
    + '<div class="lado-l"><div class="selo-v vd"><b>DO NOT DISTURB</b><small>The hotel opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Hotel Transylvania · official trailer') + '<small class="cred">Hotel Transylvania (2012) · official trailer · Sony Pictures Animation</small></div>'
    + '<div class="lado-video"><div class="pergunta vd ja"><small>WHILE YOU WATCH</small><h2>Listen for one sentence with “nothing” in it. Who says it?</h2></div>' + fala('vdw', ['Somebody says …', 'Nobody …', 'There’s something …'], ['nothing', 'somebody', 'a human', 'the hotel']) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again (the lines with no time are from the story of the trailer).</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.busca = function (c) {
  var e = S.bs, x = e.sel >= 0 ? COMODOS[e.sel] : null, n = 0, lado;
  COMODOS.forEach(function (_, i) { if (e.esc[i] === 'ok') n++; });
  if (!x) lado = '<div class="pergunta vd"><small>' + n + ' OF 6 ROOMS</small><h2>' + (n === 6 ? 'Six rooms, one bag. Nobody took it!' : 'Tap a room. Is there anything there? Is there anybody?') + '</h2></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="ve vd"><small>' + x.k + ' · WHAT YOU SEE</small><b>' + x.ve + '</b></div>'
      + (ok ? '<div class="balao vd"><small>YOU SAID</small><p>' + x.ops[0][0] + '</p></div><div class="balao vd revela' + (e.sel === 5 ? ' achou' : '') + '"><small>' + (e.sel === 5 ? 'FOUND IT' : 'AND NOW') + '</small><p>' + x.depois + '</p></div>'
        : '<p class="ini">There’s… / There isn’t… / Somebody…</p><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="bs-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + ' Say it again.</p>' : ''));
  }
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + planta(e) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.convidados = function (c) {
  var e = S.cv, n = e.n, fim = n >= CONVIDADOS.length;
  var fila = '<div class="fila">' + CONVIDADOS.map(function (g, i) { return '<span class="' + (i === n ? 'on' : i < n ? 'foi' : '') + '">' + g.quem.replace('THE ', '') + '</span>'; }).join('') + '</div>';
  if (fim) return cab(c) + fila + '<div class="foco"><div class="pergunta vd"><small>FIVE GUESTS</small><h2>Nobody saw anybody take it. But the Ghost and the Pirate gave you the clue: the cauldron. Did you check it in scene IV?</h2></div></div>';
  var x = CONVIDADOS[n], viu = e.viu[n];
  return cab(c) + fila + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('fantasias') + ')"><span>' + x.quem + '</span></div></div><div class="lado-l">'
    + '<div class="pede vd"><small>YOUR QUESTION</small><b>' + x.pede + '</b></div>' + fala('cv' + n, ['Did you see anybody …?', 'Is there anything …?', 'Did anybody …?'], [])
    + (viu ? '<div class="balao vd"><small>' + x.quem + '</small><p>“' + x.resp + '”</p></div>' + mostra('cv' + n, x.modelo) + '<div><button type="button" class="btn" data-a="cv-prox">Next guest</button></div>'
      : '<div><button type="button" class="btn so-prof" data-a="cv-viu">Asked · the guest answers</button><p class="dica-aluno">Ask the question out loud.</p></div>') + '</div></div>';
};

R.historia = function (c) {
  var e = S.hist, texto = e.ouviu ? '<p class="conto">' + HIST.txt + '</p>'
    : '<p class="so-prof conto">' + HIST.txt + '</p><p class="dica-aluno conto-vazio">Listen. Your teacher reads the story.</p><div class="so-prof"><button type="button" class="btn" data-a="hs-ouviu">Read it · show the story to the student</button></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="pergaminho vd"><small>A LITTLE HISTORY</small><h3>Guising, then trick or treat</h3>' + texto + '</div></div>'
    + '<div class="lado-l hist-q">' + HIST.qs.map(function (x, i) { return '<div class="pergunta vd ja"><small>' + (i + 1) + ' OF 4</small><h2>' + x.q + '</h2></div>' + mostra('hs' + i, x.h); }).join('') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. Everybody can go home now.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Good news, everybody! …\nNobody …\nIt was …', 'Your message to the building',
    ['Good news, everybody! ', 'Nobody took ', 'There was something ', 'Somebody ', 'We looked everywhere. ', 'Thanks, everybody! '], ['THE GROUP CHAT', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now tell the building what happened: four or five sentences.' : 'Tell the building what happened: four or five sentences.'])
    + '<div class="lado-fim">' + chat(3) + '<div class="grande vd"><span>positive: <u>somebody, something</u></span><span>question / not: <u>anybody, anything</u></span><span>one negative: <s>isn’t nothing</s> · <u>nothing</u></span></div>'
    + mostra('fim', 'Good news, everybody! Nobody took Mia’s bag. We looked everywhere, and there wasn’t anything in the kitchen. Then somebody found it in the cauldron, under the candy! Thanks, everybody!', 1)
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
TOQUES.bs = function (b, n) { S.bs.sel = n; };
TOQUES['bs-v'] = function (b, n, v) { S.bs.esc[S.bs.sel] = v; };
TOQUES['cv-viu'] = function () { S.cv.viu[S.cv.n] = 1; };
TOQUES['cv-prox'] = function () { S.cv.n++; };
TOQUES['hs-ouviu'] = function () { S.hist.ouviu = 1; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
