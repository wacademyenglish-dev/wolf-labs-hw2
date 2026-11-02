/* ============================================================
   BREAKING BAD · THE FIELD FILE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A1 · question words: who, what, where, how old, how many,
   why; do na pergunta (Where do you live?), be para idade (How old are
   you?), a ordem da pergunta (What is your name?), does para he / she.
   Erros: What your name is?, How many years do you have?, Where you
   live?, Where does you live?, What are you do?, Who are your wife?,
   How much children, What is the young man? (pessoa = who).
   Catálogo WOLFLIX Live (07/10): família CRIME, modo INTERROGATÓRIO.
   A tela forte: a ficha policial de Walter White se preenche campo a
   campo; cada pergunta certa arranca uma resposta e a máquina escreve.
   ⚠ Trailer: só minutagem e paráfrase. Aviso na capa (crime): uma
   arma no fim e dois homens caídos no fundo do trailer.
   O AQUECIMENTO (aquece.js): a escala. O FECHAMENTO (final.js): a
   cadeira quente, Walter na estrada, o professor é o policial.
   O VÍDEO: Nu2A6NoCeT8 (a primeira cena da série, 3:40, idade 0, embed
   sim; vídeo não oficial, ver memória). SEM LEGENDA: minutagem estimada.
   A CARA: verde de tabela periódica (fosco), ocre do deserto, papel de
   arquivo escuro, máquina de escrever. A antiga era o quadro de caso
   com fio vermelho (formato cas de setembro).
   Fila: FILA-LIVE-386.md · 262.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: adivinhar quem é o homem (pistas uma a uma) antes; a palavra
   que você ouviu com ▶ nas falas da fita; depois, escolher a resposta com ▶.
   V: ligar a pergunta à resposta (a placa da regra aparece quando tudo está
   ligado). VI: a ficha policial com SEIS linhas, cada uma com a fala primeiro.
   VII (era EXTRA, agora essencial): você → he, achar a palavra errada.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'ficha', rot: 'I · Warm-up and The Interview', t: 'Before the first scene: you, then a man from the show.', p: 'Answer three questions about you. Then ask your teacher questions and find out who he is.' },
  { k: 'palavras', est: 'l', img: 'cena2-estrada', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'cena2-estrada', rot: 'III · The Tape', t: 'Breaking Bad, 2008. The very first scene.', p: 'Guess first. Watch the scene. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'cena1-camera', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'ficha', rot: 'V · How to Ask', t: 'What goes with what? Match the question with the answer.', p: 'Tap one on the left, then its pair on the right. Then read the rule.' },
  { k: 'ficha', est: 'o', min: 7, img: 'cena5-sirene', rot: 'VI · The Field File', t: 'You are the first police officer on the road. Ask, and the file fills.', p: 'Read the answer on the file. Ask the question out loud. Then tap Check.' },
  { k: 'ele', est: 'o', min: 6, img: 'cena2-estrada', rot: 'VII · You or He?', t: 'Now ask about Walter: you → he.', p: 'One word is wrong in each question. Say the right one. Then tap Check.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · The Hot Seat', t: 'Walter on the road.', p: 'The hot seat.' }
];

var SERIE = 'Breaking Bad', ANO = '2008', CENA = 'The first scene';
var YT = 'Nu2A6NoCeT8', DUR = 220;

var ENCARTE = [
  ['The show', '<i>Breaking Bad</i> is an American TV series (2008–2013), created by Vince Gilligan. It has five seasons and many people say it is one of the best shows ever.'],
  ['The man', 'Walter White is a chemistry teacher in Albuquerque, New Mexico. He is fifty years old, he has a wife, Skyler, and a son, and a baby is on the way. Bryan Cranston plays him.'],
  ['This scene', 'It is the first scene of the first episode. An old RV, a desert road, a man with a video camera, and sirens. It is the end of the story first: the show then goes back in time.']
];

var ANTES = [
  { q: 'Look at the desert. Where is it? Is it a city?', h: 'I think it is …' },
  { q: 'A man talks to a video camera. What does he say first? Guess.', h: 'He says: “My name is …”' }
];
var DEPOIS = [
  { q: 'What is his name? Where does he live?', h: 'His name is … He lives in …' },
  { q: 'He is in the desert, with no trousers. Ask him one question.', h: 'Why …? / Where …? / What …?' }
];

var TRECHOS = [
  { k: 'The trousers', ini: 0, fim: 25, ouvir: 'What is in the sky?', sentido: 'A pair of trousers flies in the blue sky. Then an old RV goes very fast down a desert road.', gram: '<b>What</b> is in the sky? <b>Where</b> is the RV?' },
  { k: 'The RV', ini: 25, fim: 75, ouvir: 'Who is the driver? What is on his face?', sentido: 'The driver wears a gas mask and only his underwear. The RV goes off the road and stops.', gram: '<b>Who</b> is the driver? <b>What</b> is on his face?' },
  { k: 'The camera', ini: 75, fim: 140, ouvir: 'What does he do now?', sentido: 'He gets out, puts on a green shirt, and puts a video camera on the road.', gram: '<b>What</b> does he do? <b>Where</b> is the camera?' },
  { k: 'The tape', ini: 140, fim: 195, ouvir: 'What does he say to the camera?', sentido: 'He says his name and his address, and he talks to his wife and his son.', gram: '<b>What</b> is his name? <b>Who</b> does he talk to?' },
  { k: 'The sirens', ini: 195, fim: 220, ouvir: 'What do you hear at the end?', sentido: 'He hears sirens. He stands on the road and waits.', gram: '<b>Why</b> is he on the road? <b>Who</b> is coming?' }
];

var TRAPS = [
  ['The verb before the person', 'What your name is?', 'What <b>is your</b> name?', 'question word + be + person'],
  ['Age is be', 'How many years do you have?', 'How old <b>are</b> you?', 'I am 50. (not I have 50)'],
  ['Most verbs need do', 'Where you live?', 'Where <b>do</b> you live?', 'Where do you…? What do you…?'],
  ['People: who', 'What is the young man?', '<b>Who</b> is the young man?', 'who = people · what = things']
];

/* a ficha: o gesto forte. Os campos da ficha e as respostas são do Walter da primeira cena. */
var CAMPOS = [
  { campo: 'Name', resp: 'Walter Hartwell White', r: 'What <b>is</b> your name?', depois: 'Is your name long or short?' },
  { campo: 'Age', resp: '50 years old', r: 'How old <b>are</b> you?', depois: 'How old are you? Is your birthday soon?' },
  { campo: 'City', resp: 'Albuquerque, New Mexico', r: 'Where <b>do</b> you live?', depois: 'Where do you live? Is it hot or cold there?' },
  { campo: 'Job', resp: 'A chemistry teacher', r: 'What <b>do</b> you do?', depois: 'What do you do? Do you like it?' },
  { campo: 'Wife', resp: 'Skyler', r: 'Who <b>is</b> your wife?', depois: 'Who is the most important person in your family?' },
  { campo: 'Why here?', resp: 'Because the police are coming', r: 'Why <b>are</b> you on the road?', depois: 'The file is full. What is one more question for Walter?' }
];

var ELE = [
  { voce: 'What is your name?', ex: 'What is his name?' },
  { voce: 'Where do you live?', ex: 'Where does he live?' },
  { voce: 'What do you do?', ex: 'What does he do?' },
  { voce: 'How old are you?', ex: 'How old is he?' },
  { voce: 'Who is your wife?', ex: 'Who is his wife?' },
  { voce: 'How many children do you have?', ex: 'How many children does he have?' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>question word</b> + <b>is / are</b> + person<br>What <b>is</b> your name? · How old <b>are</b> you?<br>other verbs: question word + <b>do / does</b> + person + verb<br>Where <b>do</b> you live? · Where <b>does</b> he live?<br>people = <b>who</b> · things = <b>what</b>';
/* III · antes: adivinhar quem é o homem */
var VD_REV = { formato: 'revela', titulo: 'Before you watch: who is the man? Tap Next clue.', mais: 'Next clue', botao: 'I know it! Show', pistas: ['It is a desert.', 'There is an old RV on the road.', 'A man talks to a video camera.', 'He is fifty years old.', 'He is a teacher.'], resposta: 'His name is Walter White. He is a chemistry teacher from Albuquerque.' };
/* III · durante: qual palavra você ouviu? ▶ nos tempos da fita (legenda-dados.js) */
var VD_SOM = { formato: 'som', titulo: 'While you watch: which word did you hear?', itens: [
  { a: 'My ', par: ['name', 'game'], c: 0, b: ' is Walter White.', t: '2:06' },
  { a: 'I live at 308 Negra Arroyo ', par: ['Line', 'Lane'], c: 1, b: '.', t: '2:09' },
  { a: 'Skyler, you are the ', par: ['live', 'love'], c: 1, b: ' of my life.', t: '2:29' },
  { a: 'Walter Jr., you’re my big ', par: ['man', 'men'], c: 0, b: '.', t: '2:35' },
  { a: 'I only had you in my ', par: ['hurt', 'heart'], c: 1, b: '.', t: '2:54' }
] };
/* III · depois: escolher a resposta, com ▶ */
var VD_ESC = { formato: 'escolhe', titulo: 'After the scene: choose the right answer. Tap ▶ to hear it again.', itens: [
  { p: 'Where does he live?', o: ['In Alaska', 'In Albuquerque'], c: 1, tm: '2:12', d: '“Albuquerque, New Mexico.”' },
  { p: 'What is the number of his house?', o: ['308', '380'], c: 0, tm: '2:09', d: '“I live at 308 Negra Arroyo Lane.”' },
  { p: 'Who is he speaking to now?', o: ['His students', 'His family'], c: 1, tm: '2:18', d: '“I am speaking to my family now.”' },
  { p: 'Who is “the love of my life”?', o: ['Skyler', 'Walter Jr.'], c: 0, tm: '2:28', d: '“Skyler, you are the love of my life.”' },
  { p: 'Who is his “big man”?', o: ['Skyler', 'Walter Jr.'], c: 1, tm: '2:35', d: '“Walter Jr., you’re my big man.”' }
] };
/* V · ligar a pergunta à resposta */
var VD_LIGA = { formato: 'liga', titulo: 'What goes with what? Match the question with the answer.', pares: [
  ['What is your name?', 'My name is Walter White.'],
  ['How old are you?', 'I am fifty.'],
  ['Where do you live?', 'In Albuquerque.'],
  ['Who is your wife?', 'Skyler.'],
  ['How many children do you have?', 'A son, and a baby.'],
  ['Why are you on the road?', 'Because the police are coming.']
] };
/* VII · você → he: achar a palavra errada */
var VD_ELE = { formato: 'erro', titulo: 'You → he. One word is wrong in each question about Walter. Say the right one.', regra: PRESA, itens: [
  { f: 'Where <u>do</u> Walter live?', r: 'does' },
  { f: 'What <u>is</u> he do?', r: 'does' },
  { f: 'How old <u>are</u> he?', r: 'is' },
  { f: 'Who <u>are</u> his wife?', r: 'is' },
  { f: 'How many children <u>do</u> he have?', r: 'does' },
  { f: 'What <u>are</u> his name?', r: 'is' }
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, fc: { n: 0, esc: -1 } };

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
  return '<div class="bb-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a ficha policial: papel de arquivo escuro, campos em máquina de escrever; cada pergunta certa datilografa a resposta; com todos, o carimbo do caso */
function ficha(feitos, atual, nova) {
  var linhas = CAMPOS.map(function (c, i) {
    var cls = i < feitos ? (nova && i === feitos - 1 ? ' feito novo' : ' feito') : (i === atual ? ' vez' : '');
    return '<div class="bb-campo' + cls + '"><small>' + c.campo + '</small><span>' + (i < feitos ? c.resp : (i === atual ? c.resp : '')) + '</span></div>';
  }).join('');
  return '<div class="bb-ficha vd" role="img" aria-label="The field file: ' + feitos + ' of 6 lines filled"><div class="bb-ficha-topo"><b>Albuquerque Police</b>' + (feitos >= CAMPOS.length ? '<span class="bb-carimbo">Identified</span>' : '<span>Field file · Case 308</span>') + '</div><div class="bb-campos">' + linhas + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A1 · question words: who, what, where, how old</span><h1>My Name Is Walter</h1>'
    + '<p class="banda">' + SERIE + ' · ' + ANO + '</p>'
    + '<p class="sub">An old RV stops on a desert road. A man in a green shirt talks to a video camera, and sirens are coming. You are the first police officer there. You have one job: ask.</p>'
    + '<p class="bb-aviso">Content note: a gun at the end of the scene, and two men lying in the back of the RV. Watch it once before class.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the file</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r bb-foto"><img src="' + img('capa') + '" alt="An old RV alone on a desert road at dawn, a video camera on a tripod"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="bb-encarte vd"><div class="bb-capinha"><img src="' + img('ficha') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>Case 308</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="bb-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Do you like shows that start with the end of the story? Why?</h2></div>' + mostra('enc', 'Yes, I do. I want to know why he is there!', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REV) + '<p class="fm-nota">Ask your teacher: Where is he? How old is he? Why is he there?</p></div>'
    + '<div class="lado-l"><div class="bb-selo vd"><b>' + SERIE + '</b><small>' + CENA + ' · about four minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the scene now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="bb-video"><div class="bb-vcol">' + iframe(YT, SERIE + ' · ' + CENA) + '<small class="bb-cred">' + SERIE + ' · ' + CENA + ' · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the scene</button></div></div></div>';
  else corpo = '<div class="bb-centro">' + FM.ex('v2', VD_ESC) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="bb-video"><div class="bb-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="bb-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="bb-sentido">' + x.sentido + '</span><span class="bb-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="bb-centro"><p class="bb-dica">Tap a frame to open that moment of the scene.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  /* a regra aparece quando as seis perguntas estão ligadas */
  var e = (S.fq && S.fq.rg) || { par: {} }, feitos = 0;
  VD_LIGA.pares.forEach(function (p, i) { if (e.par[i] === i) feitos++; });
  var liga = FM.ex('rg', VD_LIGA);
  return cab(c) + (feitos === VD_LIGA.pares.length ? comPlaca(liga, PRESA) : liga);
};

R.ficha = function (c) {
  return cab(c) + '<div class="fm-lado2">' + FM.ex('fc', { formato: 'fala', rotulo: 'Line', regra: PRESA, diga: 'Ask Walter the question out loud first',
    lado: function (f, a, v) { return ficha(f, a, v ? 1 : 0); },
    fim: 'The file is full. Read it to the teacher like a police report: “His name is Walter White. He is fifty. He lives in Albuquerque…”',
    itens: CAMPOS.map(function (x) { return { pista: x.campo + ': <b>' + x.resp + '</b>', resp: x.r, depois: x.depois }; }) }) + '</div>';
};

R.ele = function (c) {
  return cab(c) + FM.ex('el', VD_ELE);
};

R.fim = function (c) {
  return cab(c) + '<div class="bb-centro"><p class="bb-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'escala', rot: 'I · About You', t: 'Before the desert: how true is it for you?', p: 'Mark a number for each sentence and say why. The teacher marks theirs too.', rotulos: ['Not true', 'Very true'],
  itens: [
    { q: 'I like my name.', ex: '9. My name is Ana. It is short and easy.' },
    { q: 'I live in a big city.', ex: '3. I live in a small town.' },
    { q: 'I like science and chemistry.', ex: '2. No! I like music.' },
    { q: 'I have a big family.', ex: '8. There are six people in my family.' },
    { q: 'I like TV shows about police and crime.', ex: '10. I love them!' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: Walter on the road.', p: 'Sit in the hot seat as Walter. The teacher is the police officer and asks. Answer in full sentences. Then swap: you ask.',
  quem: 'Walter White, on the road',
  itens: [
    { q: 'What is your name?', ex: 'My name is Walter White.' },
    { q: 'Where do you live?', ex: 'I live in Albuquerque, New Mexico.' },
    { q: 'What do you do?', ex: 'I am a chemistry teacher.' },
    { q: 'Who is in the RV?', ex: 'Jesse, my old student, is in the RV.' },
    { q: 'Why are you here?', ex: 'Because… I can’t say!' }
  ] };
/*FIM@@*/
