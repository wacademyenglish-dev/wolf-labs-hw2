/* ============================================================
   DARK MATTER · THE OTHER LIVES · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · o futuro visto do passado: was going to (o plano), was
   about to (quase, no momento), would (o que ia acontecer, contado), was
   supposed to (o combinado); e o plano que não aconteceu: was going to
   … but.
   Erros: was going + verbo sem to, were go to, was going to + passado,
   about sem to, was about to + passado, will no relato (he knew he will),
   would + passado, they was, supposed sem be, pergunta sem inversão.
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo TELA DUPLA. A
   Dead Memories da WOLFFY usou portas; aqui são janelas de vidas.
   A tela forte: as vidas paralelas do Jason. Um corredor de janelas,
   oito vidas lado a lado; a primeira é a cozinha de casa, acesa. Cada
   frase certa acende uma janela com a vida que ele ia ter (o cientista
   premiado, o artista, o que nunca casou…), e a legenda diz o plano e
   o que foi. A última janela é a de casa de novo: I want my life back.
   O AQUECIMENTO (aquece.js): o duelo. O FECHAMENTO (final.js): as
   perguntas.
   O VÍDEO: j6ucGt_Xp14 (trailer oficial Apple TV, 2:51, idade 0, embed
   sim). Suspense, sem sangue. Tempos lidos da legenda (yt-dlp, 07/10).
   A CARA: azul frio do corredor infinito, âmbar da cozinha;
   Space Grotesk no título, Source Serif 4 no texto,
   Martian Mono nas legendas das janelas. A antiga era escolha a cena.
   Fila: FILA-LIVE-386.md · 313.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a roleta da outra vida antes; a palavra que você ouviu e a
   palavra errada, com ▶ nas falas do trailer (legenda-dados.js); depois,
   três escolhas de sentido. V: separar o plano, o momento antes e o que ele
   sabia. VI: o corredor com SEIS janelas; ligar cada plano ao que aconteceu
   (cada par certo acende uma janela). VII (era EXTRA): três pessoas
   perguntam, a reação muda a conversa.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'caixa', rot: 'I · Warm-up and Two Truths and a Lie', t: 'Before the trailer: the lives you almost had, then one walk home.', p: 'Answer three questions about your life. Then find the lie about Jason’s night.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Dark Matter. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'caixa', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 5, img: 'cozinha', rot: 'V · Three Ways to Look Back', t: 'One past, three kinds of future.', p: 'Look at the three moments. Tap the kind of each sentence. Then say three about your own other life.' },
  { k: 'regra', est: 'f', min: 6, img: 'cozinha', rot: 'VI · Was Going To', t: 'The plan, the moment just before, and what he knew.', p: 'Tap a sentence, then the box it belongs to. Then read each box out loud.' },
  { k: 'vidas', est: 'o', min: 7, img: 'capa', rot: 'VII · The Other Lives', t: 'Six windows, six lives. Every right match lights one.', p: 'Match each plan to what really happened. Then say it: “He was going to …, but …”.' },
  { k: 'planos', est: 'o', min: 7, img: 'cozinha', rot: 'VIII · Your Other Lives', t: 'Three people ask about your plans. How do you answer?', p: 'Pick how you answer. Then read the talk out loud.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · Questions', t: 'Questions.', p: 'Questions.' }
];

var FILME = 'Dark Matter', ANO = '2024';
var YT = 'j6ucGt_Xp14', DUR = 171;

var ENCARTE = [
  ['The show', '<i>Dark Matter</i> (2024) is an Apple TV series from Blake Crouch’s novel, with Joel Edgerton as Jason Dessen.'],
  ['The life', 'Jason is a science teacher in Chicago, married to Daniela, with a son, Charlie. One night he walks home from a bar. He doesn’t make it home.'],
  ['The box', 'He wakes up in a world where he never married Daniela and where he is a famous scientist. He built a box: behind every door is a life he could have lived.']
];

var ANTES = [
  { q: 'What were you going to be when you were ten?', h: 'I was going to be …' },
  { q: 'If you could see one other version of your life, which would you choose?', h: 'The one where I …' }
];
var DEPOIS = [
  { q: 'What was Jason going to do that night?', h: 'He was going to …' },
  { q: 'Who took Jason’s life, and why?', h: 'Another Jason, because …' }
];

var TRECHOS = [
  { k: 'You wouldn’t believe me', ini: 0, fim: 17, ouvir: 'What does Jason say at the start?', sentido: 'Something happened to him, but she wouldn’t believe him if he told her. Then a toast to his extraordinary wife, Daniela.', gram: 'He <b>was going to</b> tell her everything.' },
  { k: 'A good life', ini: 17, fim: 36, ouvir: 'What kind of life does Jason have?', sentido: 'A man of science, married to the woman of his dreams, with a good life. Until one night, he doesn’t make it home.', gram: 'He <b>was about to</b> get home.' },
  { k: 'Who are you?', ini: 52, fim: 74, ouvir: 'Who knows Jason in the new world?', sentido: 'He calls for his family, and nobody knows him. A woman says she has never seen him before in her life.', gram: 'They <b>were supposed to</b> be there.' },
  { k: 'The box', ini: 74, fim: 96, ouvir: 'What is behind every door?', sentido: 'He built the box. Behind every door is a version of his life that he could have lived.', gram: 'He <b>was going to</b> be a famous scientist.' },
  { k: 'My life back', ini: 96, fim: 145, ouvir: 'What does Jason want?', sentido: 'Another Jason stole his life. The world he wants is a grain of sand on an endless beach. He wants his life back.', gram: 'He knew he <b>would</b> find them.' }
];

var TRAPS = [
  ['Going TO', 'He was going go home.', 'He was going <b>to go</b> home.', 'was / were going to + base verb'],
  ['About TO', 'He was about open the door.', 'He was about <b>to open</b> the door.', 'was about to + base verb'],
  ['Would, not will', 'He knew he will find them.', 'He knew he <b>would</b> find them.', 'the future seen from the past'],
  ['The question', 'What you were going to do?', 'What <b>were you going</b> to do?', 'What were you going to do?']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'was / were <b>going to</b> + verb: the plan<br>was <b>about to</b> + verb: just before<br>was <b>supposed to</b> + verb: the arrangement<br><b>would</b> + verb: seen from the past<br>… but he <b>didn’t</b>';
/* III · antes: a roleta da outra vida */
var VD_SORT = { formato: 'sorteio', titulo: 'Before you watch: spin your other life. Then say: I was going to be …, but …', botao: 'Spin', opcoes: ['a famous painter', 'a pilot', 'a chef', 'an astronaut', 'a singer', 'a farmer'] };
/* III · durante: a palavra que você ouviu e a palavra errada, cada uma no minuto do trailer (legenda-dados.js) */
var VD_SOM = { formato: 'som', itens: [
  { a: 'To my extraordinary ', par: ['life', 'wife'], c: 1, b: ' Daniela.', t: '0:11' },
  { a: 'I’m not ', par: ['crazy', 'lazy'], c: 0, b: '.', t: '0:48' },
  { a: 'He’s a grain of sand on an infinite ', par: ['bench', 'beach'], c: 1, b: '.', t: '2:06' }
] };
var VD_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: 'A man of <u>art</u>.', r: 'science', t: '0:18' },
  { f: 'Behind every <u>window</u> in there is a version of your life.', r: 'door', t: '1:21' },
  { f: 'He wants to get home to my <u>dog</u>.', r: 'family', t: '2:09' }
] };
/* III · depois: três escolhas de sentido */
var VD_ESC = { formato: 'escolhe', titulo: 'After the trailer: pick the answer. Then say it with was going to.', itens: [
  { p: 'What was Jason going to do that night?', o: ['Go to work', 'Go home to his family', 'Go to the beach'], c: 1, tm: '0:33', d: 'Say it: He was going to go home, but he never got there.' },
  { p: 'Who took Jason’s life?', o: ['His boss', 'His son', 'Another Jason'], c: 2, tm: '1:28', d: 'Say it: Another Jason stole his life. He was going to be a famous scientist.' },
  { p: 'What does Jason want?', o: ['A bigger house', 'His life back', 'A new job'], c: 1, tm: '2:09', d: 'Say it: He knew he would find his family again.' }
] };
/* V · separar o plano, o momento antes e o que ele sabia */
var VD_SEP = { formato: 'separa', titulo: 'Plan, moment or knowing? Sort the sentences. Then read each box out loud.', caixas: ['The plan · was going to', 'Just before · was about to', 'Seen from then · would'], itens: [
  { t: 'He was going to tell her everything.', c: 0 }, { t: 'They were supposed to be there.', c: 0 },
  { t: 'He was about to get home.', c: 1 }, { t: 'He was about to open the door.', c: 1 },
  { t: 'He knew he would find them.', c: 2 }, { t: 'He said he would come back.', c: 2 }
] };
/* VI · ligar cada plano ao que aconteceu: cada par certo acende uma janela */
var PARES = [
  ['That night, he was going to go home.', 'He never got there.'],
  ['He was going to become a famous scientist.', 'In one world, he did.'],
  ['Daniela was going to be a painter.', 'In one world, she is famous.'],
  ['He was about to open the door.', 'He woke up in another world.'],
  ['They were supposed to be at home.', 'The house was empty.'],
  ['He was going to give up.', 'He didn’t. He wants his life back.']
];
/* VII · três pessoas perguntam: a reação muda a conversa */
var CS = [
  { k: 'cs1', titulo: 'Person 1 · A friend', quem: 'Friend', fala: '“What were you going to be when you were ten?”', reacoes: [
    ['A pilot', 'I was going to be a pilot, but I get sick on planes.', 'Ha! I was going to be a vet.'],
    ['A singer', 'I was going to be a singer, but nobody wanted to listen.', 'I would listen!'],
    ['An astronaut', 'I was going to be an astronaut, but I got bored of math.', 'Math is the hard part!']] },
  { k: 'cs2', titulo: 'Person 2 · A coworker', quem: 'Coworker', fala: '“Why aren’t you at the meeting?”', reacoes: [
    ['Late', 'I was supposed to be there, but my train was late.', 'OK. They are just starting.'],
    ['Almost', 'I was about to leave my desk when you called.', 'Come now. We’ll wait.'],
    ['Wrong day', 'I thought the meeting was tomorrow. I was going to prepare tonight.', 'Oh no. Well, come now.']] },
  { k: 'cs3', titulo: 'Person 3 · You, ten years ago', quem: 'Past you', fala: '“You said you would learn English. Did you?”', reacoes: [
    ['Yes', 'Yes! I said I would learn English, and now I am in class.', 'Great. What did you say you would do next?'],
    ['Almost', 'I was going to start last year, but I had no time.', 'And now you have time?'],
    ['Not yet', 'I said I would, but I haven’t. I’m about to start!', 'Then start today.']] }
];

/* as janelas: o gesto forte */
var VIDAS = [
  { vida: 'The teacher', cena: 'home', ops: ['That night, he was going to go home.'], real: 'He never got there.' },
  { vida: 'The scientist', cena: 'lab', ops: ['He was going to become a famous scientist.'], real: 'In one world, he did.' },
  { vida: 'The painter', cena: 'arte', ops: ['Daniela was going to be a painter.'], real: 'In one world, she is famous.' },
  { vida: 'The door', cena: 'porta', ops: ['He was about to open the door.'], real: 'He woke up in another world.' },
  { vida: 'The family', cena: 'casa', ops: ['They were supposed to be at home.'], real: 'The house was empty.' },
  { vida: 'Home again', cena: 'home', ops: ['He was going to give up, but he didn’t.'], real: 'I want my life back.' }
];
var CENAS = {
  home: '<rect x="18" y="56" width="64" height="30" class="j-mesa"/><circle cx="68" cy="34" r="9" class="j-luz"/><path d="M62 44 L74 44 L70 34 L66 34 Z" class="j-aba"/>',
  lab: '<rect x="24" y="30" width="16" height="44" rx="6" class="j-vid"/><rect x="48" y="44" width="12" height="30" rx="4" class="j-vid"/><circle cx="72" cy="40" r="10" class="j-luz"/>',
  arte: '<rect x="28" y="22" width="44" height="40" class="j-tela"/><path d="M34 54 L46 36 L56 48 L66 30" class="j-traco"/><path d="M44 62 L40 84 M56 62 L60 84" class="j-traco"/>',
  porta: '<rect x="34" y="18" width="32" height="66" class="j-porta"/><circle cx="60" cy="54" r="3" class="j-luz"/>',
  casa: '<path d="M22 50 L50 24 L78 50 V84 H22 Z" class="j-porta"/><rect x="44" y="62" width="12" height="22" class="j-mesa"/>',
  mar: '<path d="M10 64 C26 56 40 70 56 62 S80 56 90 62 V90 H10 Z" class="j-vid"/><circle cx="68" cy="30" r="7" class="j-luz"/>',
  espelho: '<rect x="30" y="16" width="40" height="64" rx="18" class="j-tela"/><circle cx="50" cy="40" r="8" class="j-traco"/><path d="M38 70 C40 56 60 56 62 70" class="j-traco"/>'
};

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, dm: { n: 0, esc: -1 } };

/* a linha do vídeo: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
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
  return '<div class="dm-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o corredor de janelas: as acesas mostram a cena da vida; a da vez é contorno frio; embaixo, o plano e o que foi */
function janelas(luz, ultima) {
  var n = luz.filter(Boolean).length, fim = n >= VIDAS.length;
  var js = VIDAS.map(function (v, i) {
    var cls = luz[i] ? (ultima === i ? ' acesa nova' : ' acesa') : '';
    return '<div class="dm-j' + cls + '"><svg viewBox="0 0 100 100" aria-hidden="true">' + (luz[i] ? CENAS[v.cena] : '') + '</svg><small>' + v.vida + '</small></div>';
  }).join('');
  var u = ultima >= 0 && luz[ultima] ? VIDAS[ultima] : null;
  return '<div class="dm-corredor vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The other lives: ' + n + ' of ' + VIDAS.length + ' windows lit"><div class="dm-grade">' + js + '</div>'
    + '<div class="dm-leg">' + (fim ? '<span>Every window is lit.</span><b>I want my life back.</b>' : u ? '<span>' + u.ops[0] + '</span><b>' + u.real + '</b>' : '<span>Every door is a life he could have lived.</span><b>Light the first window.</b>') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · was going to, was about to, would, was supposed to</span><h1>The Life I Was Going to Have</h1>'
    + '<p class="banda">' + FILME + ' · Apple TV</p>'
    + '<p class="sub">He was going to walk home to his family. He was about to open the door. Then he woke up in a life he never chose. Tonight you light the windows of his other lives, one by one, and say what was going to happen.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the corridor</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r dm-foto"><img src="' + img('capa') + '" alt="An endless dark corridor of identical metal doors in cold blue light"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="dm-encarte vd"><div class="dm-capinha"><img src="' + img('caixa') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The box</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="dm-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Jason was going to have a quiet night. What was supposed to happen?</h2></div>' + mostra('enc', 'He was supposed to go home, have dinner with his family and sleep. He was about to get there.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_SORT) + '</div>'
    + '<div class="lado-l"><div class="dm-selo vd"><b>' + FILME + '</b><small>the official trailer · suspense, no blood · almost three minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="dm-video"><div class="dm-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="dm-cred">' + FILME + ' · official trailer (Apple TV) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('som', VD_SOM) + FM.ex('erro', VD_ERRO) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="dm-centro">' + FM.ex('esc', VD_ESC) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="dm-video"><div class="dm-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="dm-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="dm-sentido">' + x.sentido + '</span><span class="dm-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="dm-centro"><p class="dm-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="dm-centro">' + FM.ex('sep', VD_SEP) + '</div>';
};

R.vidas = function (c) {
  var e = (S.fq || {}).liga, luz = PARES.map(function (p, i) { return !!(e && e.par && e.par[i] === i); });
  var antes = S.dmluz || [], nova = -1;
  luz.forEach(function (x, i) { if (x && !antes[i]) nova = i; });
  if (nova >= 0) S.dmult = nova;
  S.dmluz = luz;
  return cab(c) + comPlaca('<div class="fm-obj">' + janelas(luz, S.dmult == null ? -1 : S.dmult) + '</div>'
    + FM.ex('liga', { formato: 'liga', titulo: 'Match each plan to what happened. Then say it: He was going to …, but …', pares: PARES, ordemDireita: [3, 5, 1, 0, 4, 2] }), PRESA);
};

R.planos = function (c) {
  return cab(c) + comPlaca(CS.map(function (x) { return FM.ex(x.k, { formato: 'reacao', titulo: x.titulo, quem: x.quem, fala: x.fala, reacoes: x.reacoes }); }).join(''), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="dm-centro"><p class="dm-dica">Questions.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'duelo', rot: 'I · This or That', t: 'Before the trailer: which life?', p: 'Pick one side. Then say why. The teacher picks too.',
  itens: [
    { a: 'A famous career', b: 'A happy family', q: 'Which life would you choose?', ex: 'A happy family. Fame is lonely.' },
    { a: 'The life you have', b: 'A life you could have had', q: 'If you could swap, would you?', ex: 'The life I have. I was going to be a lawyer, and I’m glad I’m not!' },
    { a: 'Know the future', b: 'Change the past', q: 'Which power do you want?', ex: 'Change the past. I was about to say something stupid once…' },
    { a: 'A big city', b: 'A quiet town', q: 'Where would your other self live?', ex: 'A quiet town, with a garden.' },
    { a: 'Open the door', b: 'Stay home', q: 'A strange door appears. What do you do?', ex: 'Stay home. I’m too curious, but too scared.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'perguntas', rot: 'VIII · Questions', t: 'Questions about the lives you almost had.', p: 'Answer each one. Then ask the teacher two.',
  itens: [
    { q: 'What were you going to study, and what did you study?', ex: 'I was going to study law, but I studied design.' },
    { q: 'Where were you supposed to be last Saturday?', ex: 'I was supposed to be at a wedding, but I was sick.' },
    { q: 'What were you about to do when your phone last rang?', ex: 'I was about to fall asleep!' },
    { q: 'When you were a child, did you think you would live here?', ex: 'No. I thought I would live in New York.' },
    { q: 'What were you going to do this weekend?', ex: 'I was going to clean the house. I’ll probably watch series instead.' }
  ],
  depois: 'Now ask the teacher two questions with “What were you going to…?”' };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'The future, told from the past. Three moments.',
  usos: [
    { t: 'THE PLAN', f: 'Jason <b>was going to</b> cook dinner.', d: 'He had a plan. Maybe it didn’t happen.' },
    { t: 'JUST BEFORE', f: 'He <b>was about to</b> open the door.', d: 'One second more, and it happens.' },
    { t: 'THE DEAL', f: 'He <b>was supposed to</b> be home at six.', d: 'Other people expected it. That was the agreement.' }
  ],
  pergunta: 'Which moment is it?',
  itens: [
    { f: 'Daniela said: “I’m going to write a book.” Years later: she was going to write a book.', c: 0 },
    { f: 'Jason had the glass in his hand, and then the lights went out. He was about to drink.', c: 1 },
    { f: 'The lab asked him to arrive at nine. He was supposed to arrive at nine.', c: 2 },
    { f: 'Ryan had a plan to buy the lab. He was going to buy the lab.', c: 0 },
    { f: 'The door was open, and Jason’s foot was in the air. He was about to step in.', c: 1 },
    { f: 'His son expected him at the concert. He was supposed to be there.', c: 2 }
  ],
  nota: 'Always a form of <b>be</b> + the phrase + a clean verb: was going <b>to</b> go, was about <b>to</b> go, was supposed <b>to</b> go. The <b>to</b> never disappears.',
  uso: { p: 'Your turn. Three sentences about last week: one plan, one almost, one agreement.', molde: ['I was going to …', 'I was about to …', 'I was supposed to …'], ex: 'I was going to go to the gym. I was about to leave when my boss called. I was supposed to send a report.' },
  prof: 'Read the three moments out loud with the student. Then the student taps a moment for each sentence. The moments are the rule.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
