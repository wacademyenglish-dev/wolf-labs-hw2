/* ============================================================
   THE OFFICE · THE MEMO WALL · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A1 · imperativos: verbo no começo (Give me…), Don't + verbo,
   Let's + verbo, please, Be quiet / Don't be late.
   Erros: you no começo (You give me), -s (Gives / Calms), to (Please
   to wash, To calm down), -ing (Don't touching), not / no + verbo (Not
   touch, No move), Let's to / Let's we, Are quiet.
   Catálogo WOLFLIX Live (07/10): família SITCOM, modo CORREIO (avisos
   do escritório).
   A tela forte: a parede do escritório da Dunder Mifflin; cada ordem
   certa sai da impressora como memorando e é pregada com fita.
   ⚠ Clipe: só minutagem e paráfrase (falas lidas em 23/09: 0:04,
   0:10, 0:14, 0:18, 0:20, 0:32, 1:07, 1:34).
   O AQUECIMENTO (aquece.js): a escala. O FECHAMENTO (final.js): um minuto.
   O VÍDEO: V4GJby5y6sM (clipe oficial do canal The Office, 1:57, idade
   0, embed sim).
   A CARA: escritório de noite, azul de persiana, papel pardo escuro com
   máquina de escrever; Archivo Narrow + Courier Prime + Work Sans. A
   antiga era o set de filmagem.
   Fila: FILA-LIVE-386.md · 269.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: cartas que viram antes; qual palavra você ouviu + achar a
   palavra errada, com ▶ (o "After the clip" de 22/10 FICA). V: separar os
   cartões (faça / não faça / vamos) e a placa da regra. VI: a parede com SEIS
   memorandos, fala primeiro + Check. VII (era EXTRA, agora essencial): seis
   lugares, toque numa regra e diga mais duas.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'escritorio', rot: 'I · Warm-up and Dwight’s Phone', t: 'Before the clip: your rules, then a very strange morning at the office.', p: 'Answer three questions about your life. Then read Dwight’s messages out loud and say what is happening.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Clip', t: 'The Office. Where is Dwight’s desk?', p: 'Open the cards first. Watch the clip. Then three short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'impressora', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'escritorio', rot: 'V · Dwight on the Phone', t: 'Dwight and you, at the office. Some words are lit.', p: 'Read it together. Tap the lit words: why this form? Then give your own orders.' },
  { k: 'regra', est: 'f', min: 6, img: 'impressora', rot: 'VI · Do This, Don’t Do That', t: 'Which kind of order is it? Do, don’t, or let’s.', p: 'Tap a card, then a box. Read the order out loud.' },
  { k: 'parede', est: 'o', min: 7, img: 'escritorio', rot: 'VII · The Memo Wall', t: 'Six memos for the office wall. Say the order, and it prints.', p: 'Read who says it and the idea. Say the order out loud. Then tap Check.' },
  { k: 'casa', est: 'o', min: 6, img: 'capa', rot: 'VIII · The Rules of Your House', t: 'Six places. What are the rules there?', p: 'Tap a rule. Then say two more: do, don’t, please.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · One Minute', t: 'One minute.', p: 'Talk.' }
];

var SERIE = 'The Office', ANO = '2005';
var YT = 'V4GJby5y6sM', DUR = 117;

var ENCARTE = [
  ['The show', '<i>The Office</i> is an American comedy series (2005–2013). It looks like a documentary: the people talk to the camera.'],
  ['The office', 'It is a small office of a paper company, Dunder Mifflin, in Scranton, Pennsylvania. Michael Scott is the boss, and he thinks he is very funny.'],
  ['The prank', 'Jim loves pranks, and his favorite person to prank is Dwight, the man at the next desk. In this clip, Dwight’s desk is not in its place…']
];

var ANTES = [
  { q: 'Do you know the show? Who is your favorite person in it?', h: 'Yes, my favorite is … / No, I don’t.' },
  { q: 'Your desk is not in its place. Where is it? Guess.', h: 'I think it is in …' }
];

/* 22/10/2026 · depois do clipe: tarefas de toque com o minuto da legenda */
var DEPOIS_QUEM = { formato: 'escolhe', titulo: 'Who said it?', itens: [
  { p: '“Where is my desk?”', tm: '0:04', o: ['Dwight', 'Jim', 'Kevin'], c: 0 },
  { p: '“Okay, calm down.”', tm: '0:16', o: ['Dwight', 'Jim', 'Michael'], c: 1 },
  { p: '“Warmer… warmer… cold, cold, cold.”', tm: '0:33', o: ['Dwight', 'The office', 'Kevin'], c: 1, d: 'Everybody plays the game: warmer means closer to the desk.' }
] };
var DEPOIS_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Dwight thinks the joke is funny.', t: false, tm: '0:09', c: 'He says: “This is not funny.”' },
  { f: 'Dwight wants to tell Michael.', t: true, tm: '0:22' },
  { f: 'The paper discount is 17%.', t: false, tm: '1:25', c: 'It’s 7%.' },
  { f: 'At the end, Dwight tells Kevin to wash his hands.', t: true, tm: '1:34' }
] };
var DEPOIS = [
  { q: 'Where is Dwight’s desk? Who moved it?', h: 'It is in … Jim moved it.' },
  { q: 'What does Dwight say to Kevin at the end?', h: 'He says: “… your hands, Kevin.”' }
];

var TRECHOS = [
  { k: 'No desk', ini: 0, fim: 14, ouvir: 'What is the problem?', sentido: 'Dwight arrives at work, and his desk is not there. He is very angry.', gram: '“<b>Give</b> me my desk!”' },
  { k: 'Calm down', ini: 14, fim: 30, ouvir: 'What does Jim say to Dwight?', sentido: 'Jim tells Dwight to relax and to think: where is it?', gram: '“<b>Calm</b> down. <b>Think</b>.”' },
  { k: 'Hot and cold', ini: 30, fim: 60, ouvir: 'What game do they play?', sentido: 'They play a hot and cold game: Dwight walks, and they say warmer or colder.', gram: '“<b>Go</b> left. <b>Don’t stop</b>. <b>Come</b> back.”' },
  { k: 'The bathroom', ini: 60, fim: 90, ouvir: 'Where is the desk?', sentido: 'The desk is in the men’s bathroom, and Dwight answers the phone there, very seriously.', gram: '“<b>Don’t laugh</b>. <b>Be</b> professional.”' },
  { k: 'Kevin', ini: 90, fim: 117, ouvir: 'What does Dwight say to Kevin?', sentido: 'Kevin comes in, and Dwight, at his desk, tells him to wash his hands.', gram: '“<b>Wash</b> your hands, Kevin.”' }
];

var TRAPS = [
  ['The verb first', 'You give me my desk!', '<b>Give</b> me my desk!', 'an order: no you, the verb first'],
  ['No to, no -ing', 'Please to wash your hands.', 'Please <b>wash</b> your hands.', 'please + verb'],
  ['Don’t + verb', 'Not touch my things.', '<b>Don’t touch</b> my things.', 'not → don’t'],
  ['Let’s + verb', 'Let’s to have a meeting!', '<b>Let’s have</b> a meeting!', 'let’s = you and me, now']
];

/* a parede: o gesto forte (23/10: seis memorandos, fala primeiro) */
var MEMOS = [
  { quem: 'Dwight to Jim', pista: '<b>Dwight to Jim</b> · give me my desk', ops: ['Give me my desk!'], depois: 'What do you say when somebody takes your things?' },
  { quem: 'Jim to Dwight', pista: '<b>Jim to Dwight</b> · calm down', ops: ['Calm down, Dwight.'], depois: 'What do you do to calm down?' },
  { quem: 'A sign on the sink', pista: '<b>A sign on the sink</b> · please · wash your hands', ops: ['Please wash your hands.'], depois: 'What signs are there in your office or school?' },
  { quem: 'A sign on Dwight’s desk', pista: '<b>A sign on Dwight’s desk</b> · not touch my things', ops: ['Don’t touch my things.'], depois: 'What is a thing nobody can touch in your house?' },
  { quem: 'Michael to everybody', pista: '<b>Michael to everybody</b> · you and me · have a meeting', ops: ['Let’s have a meeting!'], depois: 'Let’s… what? What do you want to do after class?' },
  { quem: 'Pam to everybody', pista: '<b>Pam to everybody</b> · quiet, please', ops: ['Be quiet, please.'], depois: 'Where do you need to be quiet?' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'the <b>verb</b> first: <b>Wash</b> your hands. (no you, no -s)<br><b>Please</b> + verb (no to)<br><b>Don’t</b> + verb (not “not touch”)<br><b>Let’s</b> + verb (you and me)<br><b>Be</b> quiet · Don’t <b>be</b> late';
/* III · antes: cartas que viram */
var VD_CARTAS = { formato: 'cartas', titulo: 'Before the clip: tap each card. Read the order out loud. Who says it?', fechada: 'Tap to open', cartas: [
  ['Dwight says…', 'Give me my desk!'], ['Jim says…', 'Calm down.'], ['Pam says…', 'Be quiet, please.'], ['Michael says…', 'Let’s have a meeting!']] };
/* III · durante: qual palavra + palavra errada, com ▶ nos tempos do clipe (legenda-dados.js) */
var VD_SOM = [
  { a: 'Where is my ', par: ['desk', 'disk'], c: 0, b: '?', t: '0:04' },
  { a: 'That is ', par: ['weird', 'word'], c: 0, b: '.', t: '0:07' },
  { a: 'Okay, ', par: ['calm', 'come'], c: 0, b: ' down.', t: '0:15' },
  { a: 'Wash your ', par: ['hands', 'hens'], c: 0, b: ', Kevin.', t: '1:34' }
];
var VD_ERR = [
  { f: 'Where is <u>your</u> desk?', r: 'my', t: '0:04' },
  { f: 'This is <u>very</u> funny.', r: 'not', t: '0:09' },
  { f: 'Wash <u>my</u> hands, Kevin.', r: 'your', t: '1:34' }
];
/* V · separar os cartões */
var VD_SEP = { formato: 'separa', titulo: 'Which kind of order is it? Tap a card, then a box.', caixas: ['Do it', 'Don’t do it', 'You and me'], itens: [
  { t: 'Wash your hands.', c: 0 },
  { t: 'Don’t touch my desk.', c: 1 },
  { t: 'Let’s have a meeting!', c: 2 },
  { t: 'Be quiet, please.', c: 0 },
  { t: 'Don’t be late.', c: 1 },
  { t: 'Let’s watch the clip.', c: 2 }
] };
/* VII · seis lugares: toque numa regra e diga mais duas */
var VD_CASA = { formato: 'escolhe', titulo: 'The rules of your house. Tap a rule, then say two more.', itens: [
  { p: 'Your kitchen:', o: ['Wash the dishes.', 'Don’t leave food on the table.'], c: -1, d: 'Now say two rules for your kitchen.' },
  { p: 'Your bedroom door:', o: ['Knock first.', 'Don’t come in at night!'], c: -1, d: 'Now say two rules for your bedroom door.' },
  { p: 'Your car:', o: ['Put on your seatbelt.', 'Don’t eat in my car.'], c: -1, d: 'Now say two rules for your car.' },
  { p: 'A classroom:', o: ['Turn off your phone.', 'Don’t be late.'], c: -1, d: 'Now say two rules for a classroom.' },
  { p: 'The cinema:', o: ['Be quiet.', 'Don’t kick the chair.'], c: -1, d: 'Now say two rules for the cinema.' },
  { p: 'This class:', o: ['Speak English!', 'Let’s watch the clip again.'], c: -1, d: 'Now say one rule and one “let’s”.' }
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} } };

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
/* a parede do escritório: seis lugares com fita; o memorando certo sai impresso, com o cabeçalho da empresa e a ordem em máquina de escrever */
function parede(feitos, atual, nova) {
  return '<div class="du-parede vd" role="img" aria-label="The memo wall: ' + feitos + ' of ' + MEMOS.length + ' memos"><div class="du-memos">' + MEMOS.map(function (m, i) {
    var cls = i < feitos ? (nova && i === feitos - 1 ? ' preso novo' : ' preso') : (i === atual ? ' vez' : '');
    return '<div class="du-memo' + cls + '" style="--r:' + ((i * 41 % 7) - 3) + 'deg"><i class="du-fita"></i><small>Memo ' + ('0' + (i + 1)).slice(-2) + ' · ' + m.quem + '</small><span>' + (i < feitos ? m.ops[0] : (i === atual ? '…' : '')) + '</span></div>';
  }).join('') + '</div><p class="du-rodape">Dunder Mifflin · Scranton branch · office notices</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A1 · imperatives: do, don’t, let’s, please</span><h1>Wash Your Hands, Kevin</h1>'
    + '<p class="banda">' + SERIE + ' · Dunder Mifflin</p>'
    + '<p class="sub">Dwight arrives at work and his desk is in the bathroom. Everybody gives orders: calm down, don’t move, wash your hands. Tonight you print the office memos.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Clock in</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r du-foto"><img src="' + img('capa') + '" alt="An office desk with a computer inside a small bathroom at night"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="du-encarte vd"><div class="du-capinha"><img src="' + img('escritorio') + '" alt=""><div><small>' + SERIE + ' · 2005–2013</small><b>Scranton</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="du-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Is there a funny person at your work or school? What do they do?</h2></div>' + mostra('enc', 'Yes, my friend Leo. He hides my pen every day!', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_CARTAS) + '</div>'
    + '<div class="lado-l"><div class="du-selo vd"><b>' + SERIE + '</b><small>a clip from the show · about two minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the clip now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="du-video"><div class="du-vcol">' + iframe(YT, SERIE + ' · clip') + '<small class="du-cred">' + SERIE + ' · official clip · tap a time to hear it again</small></div><div class="lado-l">' + FM.som('som', VD_SOM) + FM.erro('erro', VD_ERR) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the clip</button></div></div></div>';
  /* 22/10/2026 · no lugar das perguntas abertas (não funcionaram ao vivo): duas tarefas de toque, com ▶ no minuto */
  else corpo = '<div class="du-video"><div class="du-vcol">' + iframe(YT, SERIE + ' · clip') + '<small class="du-cred">Tap a time to hear that moment again.</small></div><div class="lado-l">'
    + FM.ex('quem', DEPOIS_QUEM) + FM.ex('vm', DEPOIS_VM) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="du-video"><div class="du-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="du-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="du-sentido">' + x.sentido + '</span><span class="du-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="du-centro"><p class="du-dica">Tap a frame to open that moment of the clip.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  /* a placa da regra aparece quando o aluno separou os seis cartões */
  var e = (S.fq && S.fq.rg) || { em: {} }, ok = VD_SEP.itens.every(function (x, i) { return e.em && e.em[i] === x.c; });
  var corpo = FM.ex('rg', VD_SEP);
  return cab(c) + (ok ? comPlaca(corpo, PRESA) : corpo);
};

R.parede = function (c) {
  return cab(c) + FM.fala('mm', MEMOS.map(function (m) { return { pista: m.pista, resp: m.ops[0], depois: m.depois }; }), {
    rotulo: 'Memo', prox: 'Next memo', regra: PRESA,
    lado: function (feitas, atual, nova) { return parede(feitas, atual, nova); },
    fim: 'The wall is full of memos. Now say one for the teacher’s office: one do, one don’t, and one let’s.'
  });
};

R.casa = function (c) {
  return cab(c) + comPlaca(FM.ex('cs', VD_CASA), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="du-centro"><p class="du-dica">One minute.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'escala', rot: 'I · At Work', t: 'Before the clip: how true is it for you?', p: 'Mark a number for each sentence and say why. The teacher marks theirs too.', rotulos: ['Not true', 'Very true'],
  itens: [
    { q: 'My desk is always clean.', ex: '2. No! There are papers everywhere.' },
    { q: 'I like pranks.', ex: '8. I love pranks, but only funny ones.' },
    { q: 'I follow all the rules at work or school.', ex: '6. Most of them.' },
    { q: 'I like telling people what to do.', ex: '3. No, I don’t like that.' },
    { q: 'I am always on time.', ex: '9. I hate being late.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'minuto', rot: 'VIII · One Minute', t: 'One minute of orders.', p: 'Pick a topic. Talk for one minute with do, don’t, let’s and please. Then the teacher.',
  temas: [
    { t: 'The rules of your house', ajuda: 'Take off your shoes… Don’t… Please…' },
    { t: 'How to make your favorite food', ajuda: 'First, take… Put… Don’t…' },
    { t: 'Advice for a new person at your work or school', ajuda: 'Be on time… Don’t… Let’s…' }
  ],
  palavras: ['do', 'don’t', 'let’s', 'please', 'be', 'never'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'The office, at nine. Tap the lit words.',
  falas: [
    { q: 'Dwight', f: '[[Give]] me the keys, now. [[Don’t touch]] my desk!' },
    { q: 'You', f: '[[Let’s]] calm down, Dwight. [[Be]] quiet, please.' },
    { q: 'Dwight', f: '[[Don’t be]] late for the meeting. [[Open]] the door!' },
    { q: 'You', f: '[[Please]] wash your hands first.' },
    { q: 'Dwight', f: 'Fine. [[Let’s go]] to the kitchen.' }
  ],
  porques: [
    'An order: the verb first. No you, no to: Give me.',
    'The no order: Don’t + verb. Don’t touch.',
    'Let’s + verb: you and me, together.',
    'With an adjective, the order starts with Be: Be quiet.',
    'Don’t be + adjective: Don’t be late.',
    'Another order: the verb alone, first. Open.',
    'Please makes an order polite. It can go first or last.',
    'Let’s go: Let’s + the clean verb. No to, no -ing.'
  ],
  nota: 'An order starts with the clean verb: <b>Give</b>, <b>Open</b>. For no: <b>Don’t</b> + verb. Together: <b>Let’s</b> + verb. With an adjective: <b>Be quiet</b>, <b>Don’t be late</b>. Add <b>please</b> to be polite.',
  uso: { p: 'Your turn. You are the boss at the office. Give two orders: one with don’t, one with let’s.', molde: ['Open the …', 'Don’t …', 'Let’s …'], ex: 'Close the window. Don’t be late. Let’s start the meeting.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
