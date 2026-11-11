/* ============================================================
   JUMANJI: OPEN WORLD · THE BOARD · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · orações relativas: who (pessoa), which / that (coisa,
   animal), where (lugar); o verbo depois de who concorda (who plays).
   Erros: which para pessoa, who para coisa, where sem lugar / which
   para lugar, what no lugar de which / that, who never give up (sem
   -s), where escape the animals (ordem).
   Catálogo WOLFLIX Live (07/10): família JOGO, modo PLACAR AO VIVO.
   A tela forte: o tabuleiro de Jumanji. Nove casas em serpente; cada
   casa é um enigma (a person, a thing, a place). A frase certa leva a
   pedra verde para a casa seguinte e grava na casa a palavra (who,
   which, where). Na nona, JUMANJI.
   O AQUECIMENTO (aquece.js): o duelo. O FECHAMENTO (final.js): um
   minuto (descreva sem dizer o nome).
   O VÍDEO: zhApeaHMvfs (trailer oficial Sony, 2026, 3:06, idade 0,
   embed sim). CORTADO em 2:00 (depois vem uma piada que não serve).
   Tempos da legenda (25/09): 0:40, 0:52, 1:22, 1:46, 1:50; cada momento
   contado com palavras nossas.
   A CARA: selva à noite, verde de jade, ouro e laranja do tambor;
   Metamorphous + Lexend. A antiga era o set.
   Fila: FILA-LIVE-386.md · 281.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'tabuleiro', rot: 'I · Warm-up and The Game Rules', t: 'Before the trailer: your games, then a game that plays you.', p: 'Answer three questions about your life. Then read the rules of Jumanji and say if you could play.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Jumanji: Open World. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'selva', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'tabuleiro', rot: 'V · Three Squares', t: 'A person, a thing, a place.', p: 'Look at the three squares. Tap the square of each sentence. Then say three of your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'tabuleiro', rot: 'VI · Who, Which, Where', t: 'A person who, a thing which, a place where.', p: 'Match each one to its clue. Then read the rule.' },
  { k: 'jogo', est: 'o', min: 7, img: 'tabuleiro', rot: 'VII · The Board', t: 'Every square has a wrong word. Find it, and the gem moves on.', p: 'Read the sentences. Say the fixes out loud. Then tap Check.' },
  { k: 'enigma', est: 'o', min: 7, extra: 1, img: 'selva', rot: 'VIII · Your Riddles', t: 'Riddles from your life. Who, which or where?', p: 'Spin for a topic. Describe it without the name. The teacher guesses.' },
  { k: 'saida', est: 'o', min: 8, img: 'capa', rot: 'IX · The Last Square', t: 'Last square. The teacher picks A or B.', p: 'Talk for three minutes. Then one minute to write what you take home.' }
];

var FILME = 'Jumanji: Open World', ANO = '2026';
var YT = 'zhApeaHMvfs', DUR = 186;

var ENCARTE = [
  ['The films', '<i>Jumanji</i> began as a book (1981) and a film with Robin Williams (1995). In the new films the game is a video game, and the players become its heroes.'],
  ['The heroes', 'Spencer and his friends play as Dr. Bravestone (Dwayne Johnson), a scientist, a pilot and a map expert. Each one has strengths and weaknesses.'],
  ['The open world', 'In 2026 the game breaks. The animals come out into a real town.']
];

var ANTES = [
  { q: 'Did you play board games or video games as a kid? Which ones?', h: 'I played … It was the game where …' },
  { q: 'A game comes out of the screen into your street. What do you do?', h: 'I run to … / I call …' }
];
var DEPOIS = [
  { q: 'What is the problem in the trailer?', h: 'The problem is that the game …' },
  { q: 'Which character do you want to be? Why?', h: 'I want to be the one who …' }
];

var TRECHOS = [
  { k: 'The real town', ini: 0, fim: 40, ouvir: 'Where are the game animals now?', sentido: 'Strange things happen in a real town: the animals and the jungle of the game are in the streets.', gram: 'This is the town <b>where</b> the game breaks.' },
  { k: 'Demo mode', ini: 40, fim: 52, ouvir: 'What is the problem with the characters?', sentido: 'Spencer says there is a problem: the video game characters are real now, but they repeat the same lines, like in a demo.', gram: 'They are characters <b>who</b> say only one line.' },
  { k: 'Not in Jumanji', ini: 52, fim: 75, ouvir: 'Are they inside the game?', sentido: 'One of the heroes starts to understand: they are not inside Jumanji. Jumanji is outside, with them.', gram: 'It is a world <b>which</b> has no rules.' },
  { k: 'No one stops us', ini: 75, fim: 100, ouvir: 'Who wants to stop the heroes?', sentido: 'A villain says that nobody is going to stop them. The chase starts in the city.', gram: 'He is the man <b>who</b> wants the gem.' },
  { k: 'Back in the game', ini: 100, fim: 120, ouvir: 'How can they stop it?', sentido: 'Someone asks if they broke the world. Spencer says the only way is to put the characters back in the game.', gram: 'The game is the place <b>where</b> they belong.' }
];

var TRAPS = [
  ['A person: who', 'Spencer is the boy which plays.', 'Spencer is the boy <b>who</b> plays.', 'person → who (or that)'],
  ['A thing: which / that', 'The drum is the thing who calls you.', 'The drum is the thing <b>which</b> calls you.', 'thing, animal → which / that (not what)'],
  ['A place: where', 'The mall is the level which you lose a life.', 'The mall is the level <b>where</b> you lose a life.', 'place + a full sentence → where'],
  ['Not what', 'It is the gem what saves the world.', 'It is the gem <b>that</b> saves the world.', 'what is not a relative here']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'a person → <b>who</b> (or that)<br>a thing, an animal → <b>which</b> / <b>that</b><br>a place → <b>where</b> + a full sentence<br>never <s>what</s> · who <b>plays</b>, who <b>never gives</b>';
/* III · antes: quatro cartas, abra uma e responda */
var ANT = { formato: 'cartas', titulo: 'Before you watch · open a card and answer out loud', cartas: [
  ['A game', 'Did you play board games or video games as a kid? Which ones?'],
  ['A problem', 'A game comes out of the screen into your street. What do you do?'],
  ['A hero', 'Which game hero do you want to be? Why?'],
  ['A place', 'Where do you want an adventure: the jungle or the city?']
] };
/* III · durante: o que acontece (escolha por sentido) e verdadeiro ou mentira, cada um no minuto do trailer (legenda-dados.js) */
var VD_ESC = { formato: 'escolhe', titulo: 'What happens? Tap the answer.', itens: [
  { p: 'What is the problem?', tm: '0:39', o: ['The characters are stuck in demo mode.', 'The game has no heroes.', 'The car is broken.'], c: 0, d: 'They are video game characters, but they repeat the same lines.' },
  { p: 'What does one hero begin to think?', tm: '0:52', o: ['They are not inside Jumanji.', 'They are lost in the jungle.', 'They need a new game.'], c: 0, d: 'Jumanji is outside, with them.' },
  { p: 'How can they stop it?', tm: '1:50', o: ['Put the characters back in the game.', 'Close the shop.', 'Call the police.'], c: 0, d: '“The only way to stop this is to get you guys back in the game.”' }
] };
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Someone says: “Dr. Bravestone, I’m so glad I found you.”', t: true, tm: '0:25' },
  { f: 'They think they are inside Jumanji.', t: false, tm: '0:52', c: 'They suspect they are not in Jumanji.' },
  { f: 'The only way to stop this is to take them out of the game.', t: false, tm: '1:50', c: 'They must go back in the game.' },
  { f: 'Someone says: “Violence is never the answer.”', t: true, tm: '2:35' }
] };
/* III · depois: adivinhe com as pistas (who, which, where) */
var VD_REV = { formato: 'revela', titulo: 'Guess it. Read the clues out loud.', pistas: [
  'It is a game which started as a board game.',
  'It is a place where the players become heroes.',
  'It has characters who say only one line.',
  'It has a drum which calls the players.'
], resposta: 'Jumanji! A game which breaks, and a place where the heroes get stuck.', mais: 'Next clue', botao: 'I know it! Show' };
/* V · ligue cada um à sua pista → a regra */
var LIG = { formato: 'liga', titulo: 'Match each one to its clue.', pares: [
  ['the boy', 'who plays the game'], ['the drum', 'which calls the players'], ['the town', 'where the animals run'],
  ['an NPC', 'who says only one line'], ['the gem', 'that saves Jumanji'], ['the mall', 'where you lose a life']
], ordemDireita: [4, 2, 0, 5, 1, 3] };
/* VI · o tabuleiro: duas rodadas de três casas, uma palavra errada em cada frase */
var TB_A = { formato: 'erro', titulo: 'Squares 1 to 3 · one word is wrong', itens: [
  { f: 'The jungle is the place <u>which</u> the game starts.', r: 'where' },
  { f: 'Spencer is the boy <u>which</u> plays the game.', r: 'who' },
  { f: 'The drum is the thing <u>who</u> calls the players.', r: 'which' }
] };
var TB_B = { formato: 'erro', titulo: 'Squares 4 to 6 · one word is wrong', itens: [
  { f: 'An NPC is a character <u>what</u> only says one line.', r: 'who' },
  { f: 'The mall is the level <u>who</u> you lose a life.', r: 'where' },
  { f: 'Bravestone is the hero who <u>never give</u> up.', r: 'never gives' }
] };
/* VII · riddles */
var ROLETA = { formato: 'sorteio', titulo: 'Spin for a riddle', opcoes: ['A person who is important to you', 'A thing which you use every day', 'A place where you were very happy', 'A game which you loved as a kid', 'A person who makes you laugh', 'A place where you go to relax'], botao: 'Spin' };
var CRONO = { formato: 'cronometro', titulo: 'Describe it. No name!', texto: 'It is the person who … / the thing which … / the place where …', segundos: 45 };
var PLACAR = { formato: 'contador', titulo: 'Riddles the teacher guessed', botao: 'Guessed!', revelar: 'Show the goal', resposta: 'The goal: three out of four.' };
/* VIII · A ou B */
var OPA = { t: 'You are the host of Jumanji.', d: 'The teacher is a new player. Explain the game: who the characters are, which things are dangerous, where you must go.', st: ['It’s a game where …', 'There is a man who …', 'The drum is the thing which …'] };
var OPB = { t: 'Your own game.', d: 'Invent a game, or pick your favorite. Describe the hero, the place and the thing you need. The teacher guesses.', st: ['It’s the game where …', 'The hero is a person who …', 'You need a thing which …'] };

/* o tabuleiro: o gesto forte */
var CASAS = [
  { tipo: 'a place', resp: 'where' }, { tipo: 'a person', resp: 'who' }, { tipo: 'a thing', resp: 'which' },
  { tipo: 'a person', resp: 'who' }, { tipo: 'a place', resp: 'where' }, { tipo: 'a person', resp: 'gives' }
];
var RECUSA = {
  where: 'A place + a full sentence: where. the place where the game starts.',
  who: 'Who is for people. A place: where.',
  which: 'Spencer is a person: who.',
  who2: 'A drum, a stone: things. which / that.',
  what: 'What is not a relative pronoun here: who (person), which / that (thing).',
  s: 'The hero = he: who never gives up.',
  ordem: 'After where: person or thing + verb. where the animals escape.',
  s2: 'The animals = they: escape (no -s).'
};

var ENIGMAS = [
  { k: 'A person', h: 'Describe a person who is important to you. Don’t say the name!', ex: 'She is the woman who taught me to read.' },
  { k: 'A thing', h: 'Describe a thing which you use every day.', ex: 'It is the thing which tells me the time and calls my friends.' },
  { k: 'A place', h: 'Describe a place where you were very happy.', ex: 'It is the beach where I learned to swim.' },
  { k: 'A game', h: 'Describe a game which you loved as a kid.', ex: 'It was the game where you jump on squares with numbers.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, tb: { n: 0, esc: -1 } };

/* a tira de filme: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
function onda(marcas, sel, acao) {
  var ims = []; L.forEach(function (x) { if (x.img && ims.indexOf(x.img) < 0) ims.push(x.img); });
  var fr = (marcas || []).map(function (x, i) {
    var t = Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2);
    var bg = ' style="--bg:url(\'' + img(ims[(i + 1) % ims.length]) + '\')"';
    var dentro = '<i class="tq-img"></i><b>' + t + '</b><span>' + x.k + '</span>';
    return acao ? '<button type="button" class="tq' + (sel === i ? ' on' : '') + '"' + bg + ' data-a="' + acao + '" data-n="' + i + '">' + dentro + '</button>' : '<span class="tq"' + bg + '>' + dentro + '</span>';
  }).join('');
  return '<div class="tira' + (acao ? ' grande' : '') + '" aria-hidden="' + (acao ? 'false' : 'true') + '"><div class="tira-furos"></div><div class="tira-q">' + fr + '</div><div class="tira-furos"></div></div>';
}
function tres(acao, ops, esc, semente) {
  return '<div class="jm-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o tabuleiro de madeira: nove casas em serpente (3 + 3 de volta + 3); a pedra verde fica na última casa resolvida; cada casa resolvida grava a palavra; a nona é JUMANJI */
function tabuleiro(feitas, atual, nova) {
  var N = CASAS.length, seq = ['S', 0, 1, 2, 'F', 5, 4, 3];
  var cel = seq.map(function (k) {
    if (k === 'S') return '<div class="jm-casa ini"><b>Start</b></div>';
    if (k === 'F') return '<div class="jm-casa fim' + (feitas >= N ? ' ok' : '') + '"><b>' + (feitas >= N ? 'Jumanji!' : '★') + '</b>' + (feitas >= N ? '<i class="jm-pedra"></i>' : '') + '</div>';
    var c = CASAS[k], cls = k < feitas ? ' ok' : (k === atual ? ' vez' : '');
    var pedra = (feitas > 0 && feitas < N && k === feitas - 1) ? '<i class="jm-pedra' + (nova ? ' novo' : '') + '"></i>' : '';
    return '<div class="jm-casa' + cls + '"><small>' + (k + 1) + ' · ' + c.tipo + '</small><b>' + (k < feitas ? c.resp : '?') + '</b>' + pedra + '</div>';
  });
  return '<div class="jm-tab vd" role="img" aria-label="The Jumanji board: ' + feitas + ' of ' + N + ' squares"><div class="jm-grade">' + cel.join('') + '</div>'
    + '<p class="jm-legenda">' + (feitas >= N ? 'The game is over. Everybody is back.' : (feitas ? 'The gem moves on. ' : 'Start at the left. ') + feitas + ' of ' + N) + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · who · which · that · where</span><h1>The Level Where You Lose a Life</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">The game broke, and Jumanji is out in a real town. The only way back is the old board. Every square is a riddle: a person who, a thing which, a place where. Answer it, and the gem moves on.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Roll the dice</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r jm-foto"><img src="' + img('capa') + '" alt="A small town street at night with giant jungle vines growing over the shops"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="jm-encarte vd"><div class="jm-capinha"><img src="' + img('tabuleiro') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The old board</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="jm-centro"><div class="pergunta vd ja"><small>Talk</small><h2>You go into a game for one day. Which game is it? Who are you?</h2></div>' + mostra('enc', 'Mario Kart! I am the player who always wins.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('ant', ANT) + '</div>'
    + '<div class="lado-l"><div class="jm-selo vd"><b>' + FILME + '</b><small>the official trailer · we stop it at 2:00</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="jm-video"><div class="jm-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="jm-cred">' + FILME + ' · official trailer (Sony Pictures) · 3:06 · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('esc', VD_ESC) + FM.ex('vm', VD_VM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="jm-centro">' + FM.ex('rev', VD_REV) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="jm-video"><div class="jm-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="jm-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="jm-sentido">' + x.sentido + '</span><span class="jm-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="jm-centro"><p class="jm-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).lig, tudo = !!e && LIG.pares.every(function (x, i) { return e.par && e.par[i] === i; });
  return cab(c) + '<div class="jm-centro">' + FM.ex('lig', LIG)
    + (tudo ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra('A person → <b>who</b> (or that): the boy <b>who</b> plays.<br>A thing, an animal → <b>which</b> / <b>that</b>: the drum <b>which</b> calls you.<br>A place → <b>where</b> + a full sentence: the mall <b>where</b> you lose a life.<br>Never <s>what</s>.', 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Match all six and the rule appears.</p>') + '</div>';
};

R.jogo = function (c) {
  var q = S.fq || {}, a = (q.tbA || {}).ver ? 3 : 0, b = (q.tbB || {}).ver ? 3 : 0, feitas = a + b;
  var fim = feitas >= CASAS.length ? '<div class="fm-cena fm-fim"><p>Jumanji! You finished the board. Now make a riddle for the teacher: a person who, a thing which or a place where. The teacher guesses.</p></div>' : '';
  return cab(c) + comPlaca('<div class="fm-obj">' + tabuleiro(feitas, feitas < CASAS.length ? feitas : -1, 0) + '</div><div class="mesa-c">' + FM.ex('tbA', TB_A) + FM.ex('tbB', TB_B) + '</div>' + fim, PRESA);
};

R.enigma = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('rol', ROLETA) + FM.ex('adv', PLACAR) + '</div><div class="lado-l">' + FM.ex('cro', CRONO) + '</div></div>', PRESA);
};

R.saida = function (c) {
  return cab(c) + FM.ab('ab6', OPA, OPB) + FM.reflexao('saida', [['One new word', 'I can use now…'], ['One sentence', 'with who, which or where…'], ['One thing', 'that was hard today…']], ['Today I learned …', 'It is a place where …', 'It was hard to …']);
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'duelo', rot: 'I · Game or Real Life?', t: 'Before the trailer: choose your side.', p: 'Pick one side. Then say why. The teacher picks too.',
  itens: [
    { a: 'Board games', b: 'Video games', q: 'Which ones do you prefer?', ex: 'Board games. I like games where you see your friends’ faces.' },
    { a: 'The jungle', b: 'The city', q: 'Where do you want an adventure?', ex: 'The jungle. It is a place where everything is new.' },
    { a: 'The hero', b: 'The funny one', q: 'Who do you want to be in a game?', ex: 'The funny one. He is the one who survives!' },
    { a: 'Play to win', b: 'Play for fun', q: 'What kind of player are you?', ex: 'To win. I am a person who hates losing.' },
    { a: 'Three lives', b: 'One life', q: 'Which game is better?', ex: 'One life. It is more exciting.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'minuto', rot: 'VIII · One Minute', t: 'One minute of riddles.', p: 'Pick a topic. Talk for one minute with who, which and where. The teacher guesses.',
  temas: [
    { t: 'A person in your family', ajuda: 'It is the person who… / She is the one who…' },
    { t: 'A place in your city', ajuda: 'It is the place where… / There is a … which…' },
    { t: 'Your favorite game or film', ajuda: 'It is the game where… / The hero is a man who…' }
  ],
  palavras: ['who', 'which', 'that', 'where', 'the one who', 'the place where'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'The board has three kinds of squares.',
  usos: [
    { t: 'A PERSON', f: 'a player who never gives up', d: 'A person: who. After who, the verb has -s: who plays.', img: 'capa' },
    { t: 'A THING', f: 'a game that starts on its own', d: 'A thing or an animal: which or that.', img: 'cartucho' },
    { t: 'A PLACE', f: 'a jungle where the animals run', d: 'A place: where.', img: 'selva' }
  ],
  pergunta: 'Which square is it?',
  itens: [
    { f: 'She is the girl who finds the key.', c: 0 },
    { f: 'It is the game that starts on its own.', c: 1 },
    { f: 'This is the jungle where the rhinos live.', c: 2 },
    { f: 'He is the guy who plays the strong hero.', c: 0 },
    { f: 'Here is the board which shows the map.', c: 1 },
    { f: 'That is the place where we lose a life.', c: 2 }
  ],
  nota: 'Pick the word by the noun. A <b>person</b>: <b>who</b>. A <b>thing</b>: <b>which</b> or <b>that</b>. A <b>place</b>: <b>where</b>. After who, the verb agrees: the player who <b>plays</b>.',
  uso: { p: 'Your turn. Describe a person, a thing and a place from your life with who, which and where.', molde: ['I have a friend who …', 'I have a … which …', 'I know a place where …'], ex: 'I have a friend who plays guitar. I have a phone which is very old. I know a café where they make great pizza.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
