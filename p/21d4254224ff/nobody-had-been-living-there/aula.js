/* ============================================================
   NOBODY HAD BEEN LIVING THERE · THE CROW HILL ARCHIVE · LIVE 09/10/2026
   Main series B2 · Halloween · past perfect continuous: had been +
   -ING para o que vinha acontecendo ATÉ um momento do passado (com
   for / since / how long); × past perfect simples (had + particípio)
   para o que estava acabado, para contagem (had written three) e com
   verbos de estado (had known, nunca had been knowing).
   Erros universais: "The house was empty since 1980" (o português
   resolve com "estava"/"fazia"), "They were waiting for two hours
   when…", "have been" no lugar de "had been", "had been live",
   "had been knowing", "since two hours".
   O MUNDO: uma lenda urbana de cidade pequena. A casa de Crow Hill,
   em Millbrook. O aluno abre o arquivo do jornal local (1989–1998) e
   reconstrói, com o barbante vermelho, o que vinha acontecendo antes
   da noite em que a polícia abriu a porta. A virada: a casa não
   estava vazia. Rosa Lane, a filha caçula da família, vinha morando
   lá em segredo havia nove anos, cuidando da casa e das rosas. A
   lenda nasceu de um "had been living" que ninguém quis ler.
   O VÍDEO: Stranger Things, trailer final oficial da 1ª temporada
   (Netflix, b9EkMc79ZSU, 2:12, conferido 09/10: incorporável, sem
   limite de idade). Começa no segundo 12 (antes há um palavrão).
   1:56 "What if this whole time I've been looking for Will… I've been
   chasing after something else."
   VII conta a lenda de Stingy Jack e a origem da jack-o'-lantern
   (pedido do Carlos, 08/10: a origem do feriado).
   A CARA: a mesa do arquivo, de noite. Recortes de jornal em sépia
   escura (texto claro sobre fundo escuro: nada de papel branco), a
   linha do tempo com alfinetes e o barbante vermelho.
   ============================================================ */
var YT = 'b9EkMc79ZSU';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'cidade', rot: 'I · Town Legends', t: 'Every town has a story. What’s yours?', p: 'Pick a card. Real life. Nobody is corrected here.' },
  { k: 'video', est: 'l', min: 10, img: 'cidade', rot: 'II · Hawkins, 1983', t: 'A small town, a missing boy, a secret.', p: 'Answer out loud. Watch the trailer. Then True or Lie.' },
  { k: 'gx', est: 'f', min: 4, img: 'arquivo', rot: 'III · Mistake Hunter', t: 'Six clippings from the Millbrook Herald. Each one has a wrong word.', p: 'Tap the wrong word. Say the line right. Then check.' },
  { k: 'regra', est: 'f', min: 6, img: 'arquivo', rot: 'IV · The Rule', t: 'The house had been empty for years.', p: 'Up to a moment in the past: had been + -ing. Finished, counted or a state: had + past participle. Say each trap right, then tap it.' },
  { k: 'arquivo', est: 'o', min: 7, img: 'arquivo', rot: 'V · The Archive', t: 'Six clippings from the Millbrook Herald.', p: 'Tap a clipping. Read it. Answer the question, then tap what you said.' },
  { k: 'barbante', est: 'o', min: 7, img: 'mapa', rot: 'VI · The Red String', t: 'Two pins, one sentence.', p: 'Join the two moments with had been + -ing. Say it, then check.' },
  { k: 'vizinho', est: 'o', min: 7, extra: 1, img: 'casa', rot: 'VII · The Neighbor, 1998', t: 'Interview the man who lived next door.', p: 'Ask him the question. Your teacher answers as Mr. Okafor.' },
  { k: 'jack', est: 'l', min: 7, extra: 1, img: 'lanterna', rot: 'VIII · Stingy Jack', t: 'Why do we carve pumpkins?', p: 'Your teacher reads the old Irish story. Then answer.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'arquivo', rot: 'IX · Quick Check', t: 'Six quick ones before the archive closes.', p: 'Say the whole sentence. Then tap the words.' },
  { k: 'fim', est: 'w', min: 6, img: 'casa', rot: 'X · The Front Page', t: 'Write the story the town never read.', p: 'About 120 words: what had been happening at Crow Hill. It goes to your My notes.' }
];

var ABRE = [
  { k: 'A LEGEND', q: 'Is there a legend or a “haunted” place in your town?', fup: 'Do people still believe it?', st: ['People say that …', 'There’s a house …'], ex: 'People say an old hotel downtown is haunted. Nobody believes it, but nobody goes in at night.' },
  { k: 'AN OLD HOUSE', q: 'Is there a house near you where nobody lives?', fup: 'How long has it been empty?', st: ['There’s a house …', 'It’s been empty …'], ex: 'Yes, on my street. It’s been empty since the owner moved to Portugal.' },
  { k: 'SMALL TOWNS', q: 'Would you like to live in a small town?', fup: 'What would you miss?', st: ['I’d love to, because …', 'Never! …'], ex: 'Maybe when I retire. I’d miss the restaurants, though.' },
  { k: 'NEWS', q: 'How do you get local news? Newspaper, app, a neighbor?', fup: 'What was the last local story you heard?', st: ['Mostly from …'], ex: 'Mostly from my building’s group chat!' },
  { k: 'SERIES', q: 'Do you like mystery series? Which one?', fup: 'Did you guess the ending?', st: ['I loved …', 'I don’t really …'], ex: 'I loved Dark. I didn’t guess anything!' }
];
var FORMAS = [{ k: 'hb', t: 'HAD BEEN + -ING' }, { k: 'hp', t: 'HAD + PARTICIPLE' }, { k: 'was', t: 'WAS EMPTY SINCE…', erro: 1 }, { k: 'have', t: 'HAVE BEEN (PAST STORY)', erro: 1 }];

var ANTES = [
  { q: 'The series happens in a small American town in 1983. What do you think happens?', h: 'A boy goes missing, and strange things start to happen.' },
  { q: 'What makes a small town scary in a story?', h: 'Everybody knows everybody, but nobody tells the whole truth.' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "The story happens in a small American town, in 1983.", "t": true},
  {"f": "The boys say goodbye in the morning.", "t": false, "c": "No. They say goodbye late at night."},
  {"f": "The boys had been playing a fantasy game with monsters.", "t": true},
  {"f": "Will’s mother calls a friend, not the police.", "t": false, "c": "No. She calls the police."},
  {"f": "A boy, Will, is missing, and his mother is looking for him.", "t": true},
  {"f": "At the end, she says she has found Will.", "t": false, "c": "No. “What if this whole time I’ve been looking for Will… I’ve been chasing after something else.”"}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · How long had she been looking?",
  "quem": "The reporter",
  "fala": "Reporter: “She called the police at midnight. How long had she been looking for him?”",
  "reacoes": [
    [
      "All night",
      "She had been looking for him all night.",
      "“All night… and nobody had been listening.”"
    ],
    [
      "For hours",
      "She had been looking for him for hours.",
      "“Hours. Then she knew it was serious.”"
    ],
    [
      "Since school",
      "She had been looking for him since school ended.",
      "“Since the afternoon. A mother always knows.”"
    ]
  ]
};

var FITAS = [['UP TO A MOMENT', 'When they opened the door, nobody had been living there… or had they?'], ['HOW LONG?', 'They had been waiting for two hours. · since 8 PM'], ['FINISHED OR COUNTED', 'She had written three letters. (not had been writing)'], ['STATES', 'She had known him for years. (not had been knowing)']];
var ARMAS = [
  ['NOT WAS', 'The house was empty since 1989.', 'The house <b>had been</b> empty since 1989.', 'Up to a moment in the past: had been. Not was.'],
  ['HAD BEEN + -ING', 'The police were waiting for two hours when they opened the door.', 'The police <b>had been waiting</b> for two hours when they opened the door.', 'A duration up to a past moment: had been + -ing.'],
  ['HAD, NOT HAVE', 'In 1998, Rosa has been living there for nine years.', 'In 1998, Rosa <b>had been living</b> there for nine years.', 'A story about the past: had been, not have been.'],
  ['THE -ING', 'The roses had been grow all summer.', 'The roses had been <b>growing</b> all summer.', 'had been + verb-ING.'],
  ['STATE VERBS', 'She had been knowing the house for years.', 'She <b>had known</b> the house for years.', 'know, believe, own: had + past participle.'],
  ['FOR, NOT SINCE', 'They had been talking since two hours.', 'They had been talking <b>for</b> two hours.', 'for + a period (two hours). since + a point (since 8 PM).']
];
var NOTA = {
  tempo: 'A story about the past: had been, not have been.', forma: 'had been + verb-ING: had been living, had been waiting.',
  since: 'for + a period, since + a point. And had been, not was.', tempo2: 'Up to that past moment: had been + -ing.', estado: 'With a state verb: had + past participle (had known).'
};

/* IV: o arquivo do Millbrook Herald */
var RECORTES = [
  { data: 'OCT 3, 1989', man: 'LAST FAMILY LEAVES CROW HILL HOUSE', txt: 'The Lanes moved in in 1952. This week, the old house is empty.', q: 'How long had the Lanes been living there when they left?', ops: [['They had been living there for 37 years.', 'ok'], ['They have been living there for 37 years.', 'tempo'], ['They had been live there for 37 years.', 'forma']] },
  { data: 'OCT 21, 1991', man: 'STRANGE LIGHT ON CROW HILL', txt: 'Every night since September, a small light in the attic window.', q: 'What had neighbors been seeing since September?', ops: [['A light had been burning in the attic every night.', 'ok'], ['A light was burning in the attic since September.', 'since'], ['A light had been burned in the attic every night.', 'forma']] },
  { data: 'OCT 30, 1994', man: 'KIDS DARE EACH OTHER', txt: 'Two boys ran from the porch. They say someone was watching them from the window the whole time.', q: 'What do the boys say?', ops: [['Someone had been watching them from the window.', 'ok'], ['Someone has been watching them from the window.', 'tempo'], ['Someone had watching them from the window.', 'forma']] },
  { data: 'OCT 2, 1996', man: 'A GREEN GARDEN, BUT NO GARDENER', txt: 'The roses grew all summer. Who waters them?', q: 'What had been happening in the garden all summer?', ops: [['The roses had been growing all summer.', 'ok'], ['The roses were growing since the summer.', 'since'], ['The roses had been grow all summer.', 'forma']] },
  { data: 'OCT 31, 1998', man: 'HALLOWEEN: POLICE OPEN THE DOOR', txt: 'Officers waited outside from 8 to 10 PM. Then they went in.', q: 'How long had they been waiting when they went in?', ops: [['They had been waiting for two hours when they went in.', 'ok'], ['They were waiting for two hours when they went in.', 'tempo2'], ['They had been waiting since two hours when they went in.', 'since']] },
  { data: 'NOV 1, 1998', man: 'THE TRUTH ABOUT CROW HILL', txt: 'Rosa Lane, 81, the youngest Lane daughter, moved back in 1989. Quietly. Alone.', q: 'Who had been living in the house, and for how long?', ops: [['Rosa Lane had been living there for nine years.', 'ok'], ['Rosa Lane has been living there for nine years.', 'tempo'], ['Rosa Lane lived there since nine years.', 'since']] }
];

/* V: o barbante, dois alfinetes por vez */
var PINOS = [
  { a: ['1952', 'The Lanes move in'], b: ['1989', 'The family leaves'], dica: 'When they left, …', modelo: 'When they left in 1989, the Lanes had been living there for 37 years.' },
  { a: ['1989', 'Rosa moves back, secretly'], b: ['1991', 'The first light in the attic'], dica: 'By 1991, Rosa …', modelo: 'By 1991, Rosa had been living there secretly for two years.' },
  { a: ['JUNE 1996', 'Rosa waters the roses every night'], b: ['OCT 1996', 'The newspaper story'], dica: 'When the story came out, …', modelo: 'When the story came out, Rosa had been watering the roses all summer.' },
  { a: ['8 PM', 'The police wait outside'], b: ['10 PM', 'They open the door'], dica: 'When they opened the door, …', modelo: 'When they opened the door, the police had been waiting for two hours.' },
  { a: ['1989', 'The town starts the legend'], b: ['1998', 'The truth comes out'], dica: 'Before the truth came out, …', modelo: 'Before the truth came out, people had been telling the legend for nine years.' }
];

var VIZINHO = [
  { pede: 'Ask him how long he had been living next door.', modelo: 'How long had you been living next door?', resp: 'Since 1975. So, twenty-three years, when all this happened.' },
  { pede: 'Ask him what people had been saying about the house.', modelo: 'What had people been saying about the house?', resp: 'That a ghost had been walking in the garden at night. Nonsense!' },
  { pede: 'Ask him if he had noticed the light too.', modelo: 'Had you noticed the light too?', resp: 'Every night. I always thought someone was living there.' },
  { pede: 'Ask him why nobody had been asking questions.', modelo: 'Why hadn’t anybody been asking questions?', resp: 'Because everybody had been enjoying the story more than the truth.' }
];

/* VII: a lenda de Stingy Jack e a jack-o'-lantern (conto popular irlandês) */
var JACK = {
  txt: 'In Ireland, people tell the story of Stingy Jack. Jack had been tricking people all his life, and one night he tricked the Devil too. When Jack died, Heaven didn’t want him, and the Devil didn’t want him either. So the Devil gave him a burning coal, and Jack put it inside a carved turnip to light his way. People say he has been walking in the dark with his lantern ever since. In Ireland and Scotland, families carved scary faces in turnips and put them by the door to keep Jack and other spirits away. In America, they found the pumpkin: bigger, and much easier to carve. That’s why we call it a jack-o’-lantern.',
  qs: [
    { q: 'What had Jack been doing all his life?', h: 'He had been tricking people.' },
    { q: 'Why did Jack need a lantern?', h: 'Nobody wanted him, so he had to walk in the dark forever.' },
    { q: 'What had Irish families been carving before they found pumpkins?', h: 'Turnips.' },
    { q: 'Where does the name jack-o’-lantern come from?', h: 'From Stingy Jack and his lantern: Jack of the lantern.' }
  ]
};

var QUIZ = [
  { a: 'The house ', b: ' empty since 1989.', op: ['had been', 'was', 'has been'], nao: 'Up to a past moment: had been.' },
  { a: 'They ', b: ' for two hours when the door opened.', op: ['had been waiting', 'were waiting', 'had waited since'], nao: 'Duration up to a past moment: had been waiting.' },
  { a: 'She ', b: ' the town all her life.', op: ['had known', 'had been knowing', 'has been knowing'], nao: 'know is a state: had known.' },
  { a: 'By 1998, she had been living there ', b: ' nine years.', op: ['for', 'since', 'during'], nao: 'A period: for.' },
  { a: 'He was tired because he ', b: ' all night.', op: ['had been driving', 'has been driving', 'had been drive'], nao: 'had been + -ing.' },
  { a: 'By Halloween, the reporter ', b: ' three stories about the house.', op: ['had written', 'had been writing', 'has been writing'], nao: 'A number (three stories): had written.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0 }, ar: { sel: -1, esc: {} }, bb: { n: 0, viu: {} }, vz: { n: 0, viu: {} }, jack: { ouviu: 0 }, quiz: { esc: {} } };

function recorte(r, i, e) {
  var feito = e.esc[i] === 'ok';
  return '<button type="button" class="recorte r' + i + (e.sel === i ? ' on' : '') + (feito ? ' feito' : '') + '" data-a="ar" data-n="' + i + '"><small>' + r.data + '</small><b>' + r.man + '</b></button>';
}
function linhaTempo(n, mostra) {
  var anos = ['1952', '1989', '1991', '1994', '1996', '1998'];
  return '<div class="fio-tempo"><span class="barb"></span>' + anos.map(function (a, i) { var on = mostra && i <= n + 1; return '<span class="pino' + (on ? ' on' : '') + '" style="left:' + (4 + i * 18.4) + '%"><i></i><b>' + a + '</b></span>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · THE CROW HILL ARCHIVE</span><h1>Nobody <b>Had Been Living</b> There</h1>'
    + '<p class="sub">Millbrook, 1998. For nine years the town told a ghost story about the house on Crow Hill. The archive tells another one.</p>'
    + '<div class="chipsx"><span class="pilula">had been living</span><span class="pilula">for nine years · since 1989</span><span class="pilula">had known · had written</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the archive</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="pilha">' + RECORTES.slice(0, 3).map(function (r, i) { return '<div class="recorte solto s' + i + '"><small>' + r.data + '</small><b>' + r.man + '</b></div>'; }).join('') + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + os 6 recortes do arquivo que são presos a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Stranger Things · official final trailer', '&start=12'); }
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
  var cl = RECORTES.map(function (r, i) {
    var s = d.st[i], nova = s === 1 && !debAcesa[i]; if (s === 1) debAcesa[i] = 1;
    return '<div class="recorte deb-rec' + (s === 1 ? ' feito' : s === -1 ? ' perdido' : '') + (nova ? ' nova' : '') + '"><small>' + (s === 1 ? 'PINNED · ' : s === -1 ? 'LOST · ' : 'MISSING · ') + r.data + '</small><b>' + (s === 1 ? r.man : '· · · · · ·') + '</b></div>';
  }).join('');
  return debTopo(d, 'THE ARCHIVE', 'Clippings found') + '<div class="mural deb-mural" aria-hidden="true">' + cl + '</div>';
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
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>HAWKINS, 1983</b><small>The trailer opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Stranger Things · official final trailer', '&start=12') + '<small class="cred">Stranger Things (2016) · season 1 · official trailer · Netflix</small></div>'
    + '<div class="lado-video"><div class="pergunta vd ja"><small>WHILE YOU WATCH</small><h2>Who had been doing what? Look for the boys, the mother and the police chief.</h2></div>' + fala('vdw', ['They had been …-ing', 'She had been looking for …', 'Nobody had …'], ['a game', 'the woods', 'the lab', 'a missing boy']) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Want to check a line? Watch the trailer again, here on the left.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.arquivo = function (c) {
  var e = S.ar, x = e.sel >= 0 ? RECORTES[e.sel] : null, n = 0, lado;
  RECORTES.forEach(function (_, i) { if (e.esc[i] === 'ok') n++; });
  if (!x) lado = '<div class="pergunta vd"><small>' + n + ' OF 6 CLIPPINGS</small><h2>' + (n === 6 ? 'Nine years of “ghost” stories. The last clipping tells the truth.' : 'Tap a clipping. Read it, then answer with had been + -ing.') + '</h2></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="jornal vd"><small>THE MILLBROOK HERALD · ' + x.data + '</small><b>' + x.man + '</b><p>' + x.txt + '</p></div><div class="pergunta vd ja"><small>THE QUESTION</small><h2>' + x.q + '</h2></div>'
      + (ok ? '<div class="balao vd"><small>YOUR ANSWER</small><p>' + x.ops[0][0] + '</p></div>'
        : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="ar-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + ' Say it again.</p>' : ''));
  }
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="mural">' + RECORTES.map(function (r, i) { return recorte(r, i, e); }).join('') + '</div></div><div class="lado-l">' + lado + '</div></div>';
};

R.barbante = function (c) {
  var e = S.bb, n = e.n, fim = n >= PINOS.length;
  if (fim) return cab(c) + linhaTempo(5, 1) + '<div class="foco"><div class="pergunta vd"><small>THE RED STRING</small><h2>Every pin says the same thing: something had been happening for years, and nobody had been asking why.</h2></div></div>';
  var x = PINOS[n], viu = e.viu[n];
  return cab(c) + trilha(PINOS, n) + linhaTempo(n, 1) + '<div class="dois-pinos"><div class="pin-card vd"><small>' + x.a[0] + '</small><b>' + x.a[1] + '</b></div><span class="barb-curta"></span><div class="pin-card vd"><small>' + x.b[0] + '</small><b>' + x.b[1] + '</b></div></div>'
    + '<div class="foco"><p class="ini" style="text-align:center">' + x.dica + '</p>' + fala('bb' + n, ['… had been …-ing for …', '… had been …-ing since …'], [])
    + (viu ? '<div class="balao vd"><small>ONE WAY TO SAY IT</small><p>' + x.modelo + '</p></div><div style="text-align:center"><button type="button" class="btn" data-a="bb-prox">Next pins</button></div>'
      : '<div style="text-align:center"><button type="button" class="btn so-prof" data-a="bb-viu">Said it · show a model</button><p class="dica-aluno">Say one sentence that joins the two pins.</p></div>') + '</div>';
};

R.vizinho = function (c) {
  var e = S.vz, n = e.n, fim = n >= VIZINHO.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('casa') + ')"><span>MR. OKAFOR · NEXT DOOR · 1998</span></div>';
  if (fim) return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l"><div class="pergunta vd"><small>THE INTERVIEW</small><h2>Twenty-three years next door, and he had known all along. He just never asked.</h2></div></div></div>';
  var x = VIZINHO[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l">' + trilha(VIZINHO, n) + '<div class="pede vd"><small>YOUR QUESTION</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd"><small>MR. OKAFOR</small><p>“' + x.resp + '”</p></div>' + mostra('vz' + n, x.modelo) + '<div><button type="button" class="btn" data-a="vz-prox">Next question</button></div>'
      : fala('vz' + n, ['How long had you been …?', 'What had people been …?', 'Had you …?'], []) + '<div><button type="button" class="btn so-prof" data-a="vz-viu">Asked · Mr. Okafor answers</button><p class="dica-aluno">Ask the question out loud.</p></div>') + '</div></div>';
};

R.jack = function (c) {
  var e = S.jack, texto = e.ouviu ? '<p class="conto">' + JACK.txt + '</p>'
    : '<p class="so-prof conto">' + JACK.txt + '</p><p class="dica-aluno conto-vazio">Listen. Your teacher reads the old story.</p><div class="so-prof"><button type="button" class="btn" data-a="jk-ouviu">Read it · show the story to the student</button></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="pergaminho vd"><small>AN OLD IRISH STORY</small><h3>Stingy Jack and his lantern</h3>' + texto + '</div></div>'
    + '<div class="lado-l hist-q">' + JACK.qs.map(function (x, i) { return '<div class="pergunta vd ja"><small>' + (i + 1) + ' OF 4</small><h2>' + x.q + '</h2></div>' + mostra('jk' + i, x.h); }).join('') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. The archive is closed.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'For nine years, the people of Millbrook had been …\nBut nobody knew that …\nWhen the police opened the door, …', 'The front page',
    ['For nine years, ', 'had been living ', 'had been telling ', 'When the police opened the door, ', 'nobody had been ', 'had known '], ['THE MILLBROOK HERALD · NOV 2, 1998', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write the story the town never read: about 120 words.' : 'Write the story the town never read: what had been happening at Crow Hill. About 120 words.'])
    + '<div class="lado-fim">' + linhaTempo(5, 1) + '<div class="grande vd"><span>up to a past moment: <u>had been living</u></span><span>finished, counted, a state: <u>had written · had known</u></span><span>never <s>was empty since</s> · <s>have been</s> in a past story</span></div>'
    + mostra('fim', 'For nine years, the people of Millbrook had been telling a ghost story about the house on Crow Hill. Kids had been running past the porch, and neighbors had been watching the light in the attic. But there was no ghost. Rosa Lane, 81, had been living there quietly since 1989. She had been watering the roses every night and looking after the house where she had grown up. When the police opened the door on Halloween night, they found an old woman with a cup of tea, and a cat. She had known all along what the town was saying. “Nobody ever knocked,” she said.', 1)
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
TOQUES.ar = function (b, n) { S.ar.sel = n; };
TOQUES['ar-v'] = function (b, n, v) { S.ar.esc[S.ar.sel] = v; };
TOQUES['bb-viu'] = function () { S.bb.viu[S.bb.n] = 1; };
TOQUES['bb-prox'] = function () { S.bb.n++; };
TOQUES['vz-viu'] = function () { S.vz.viu[S.vz.n] = 1; };
TOQUES['vz-prox'] = function () { S.vz.n++; };
TOQUES['jk-ouviu'] = function () { S.jack.ouviu = 1; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G14 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'cacaErro', titulo: 'Mistake hunter. Six clippings from the archive.',
  toque: 'People who speak Portuguese often say these. Tap the wrong word before you see the answer.',
  itens: [
    { f: 'The house [[was]] empty since 1980.', r: 'The house <b>had been</b> empty since 1980.', d: 'Up to a moment in the past: had been.' },
    { f: 'The neighbors [[were waiting]] for two hours when the door opened.', r: 'The neighbors <b>had been waiting</b> for two hours when the door opened.', d: 'What was going on up to that moment: had been + -ing.' },
    { f: 'The lights [[have been]] flickering for weeks before the fire.', r: 'The lights <b>had been</b> flickering for weeks before the fire.', d: 'have been is for now. Before a past moment: had been.' },
    { f: 'Mr. Okafor had [[been knowing]] the family for years.', r: 'Mr. Okafor had <b>known</b> the family for years.', d: 'A state verb takes no -ing: had known.' },
    { f: 'Someone had been living there [[since]] two years.', r: 'Someone had been living there <b>for</b> two years.', d: 'A length of time: for. A starting point: since.' },
    { f: 'The reporter had [[been writing]] three articles.', r: 'The reporter had <b>written</b> three articles.', d: 'A counted, finished result: had + participle.' }
  ],
  nota: 'For what was going on up to a moment in the past: <b>had been</b> + -ing, with <b>for</b> or <b>since</b>. For what was finished or counted, or a state: <b>had</b> + participle.',
  uso: { p: 'Your turn. A place you know that nobody uses now. Say what had been happening there before it closed.', molde: ['People had been …', 'It had been … for …'], ex: 'People had been dancing there for years. The old cinema had been empty since 2015.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_caca', GX_EXPLICA); };
