/* ============================================================
   INVASION · THE NIGHT FEEDS · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · past continuous × past simple: was / were + -ing (a
   ação longa) cortado por when + passado (o momento); while + -ing;
   What were you doing when…?
   Erros: was + verbo base (was watch), sujeito sem be (I sleeping),
   were com he / was com they, as duas ações invertidas (when the lights
   were going out), while + passado simples (while she cooked),
   didn’t sleeping, What you were doing…?, What did you doing…?,
   presente no lugar do passado (is patrolling).
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo INTERROGATÓRIO.
   A tela forte: as faixas da noite da invasão. Oito lugares do mundo
   ao mesmo tempo, um embaixo do outro; cada frase certa enche a faixa
   do lugar com a barra longa (o que estava acontecendo) e a corta com
   a marca vermelha do momento. No fim, todas as marcas vermelhas se
   alinham: foi tudo no mesmo instante.
   O AQUECIMENTO (aquece.js): duas verdades e uma mentira. O FECHAMENTO
   (final.js): a entrevista, o professor é o xerife.
   O VÍDEO: DlaHxL3mHAU (trailer oficial Apple TV, 2:42, idade 0, embed
   sim). Tenso, não gráfico: tiros num deserto, uma família correndo,
   alguém pedindo socorro. Sem legenda com tempo hoje: os tempos são
   ESTIMADOS, e cada momento é contado com palavras nossas.
   A CARA: noite, verde-água de monitor, vermelho do corte; Familjen
   Grotesk + Red Hat Text + Red Hat Mono. A antiga era o quadro do caso.
   Fila: FILA-LIVE-386.md · 289.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: o relógio de 30 segundos antes (a última vez que a luz
   acabou); durante, três escolhas de sentido com ▶; depois, a palavra
   errada com ▶ nas falas do discurso (legenda-dados.js). V: separar a ação
   longa e o momento que a corta. VI: o mural com SEIS faixas; ligar o
   momento ao que as pessoas faziam, cada par certo enche uma faixa até a
   linha vermelha. VII (era EXTRA): Ask Me, montar a pergunta (What were you
   doing…?) e entrevistar o professor.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'campo', rot: 'I · Warm-up and In the Dark', t: 'Before the trailer: where you were, then a voice to the whole world.', p: 'Answer three questions about your life. Then close your eyes and listen to the trailer.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Invasion. The official trailer.', p: 'Talk for 30 seconds first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'campo', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 3, img: 'relogios', rot: 'V · The Long Part, the Moment', t: 'Where does each sentence live on the night?', p: 'Tap a sentence, then its place on the line. Notice the verbs. Then say three lines about you.' },
  { k: 'regra', est: 'f', min: 7, img: 'relogios', rot: 'VI · Was Doing, When It Happened', t: 'The long action, or the moment that cut it? Sort the clues.', p: 'Tap a clue, then its box. Then say the long action and the moment together.' },
  { k: 'feeds', est: 'o', min: 7, img: 'capa', rot: 'VII · The Night Feeds', t: 'Six places, one moment. Rebuild the night, feed by feed.', p: 'Match each moment to what people were doing. Then say the whole sentence out loud.' },
  { k: 'alibi', est: 'o', min: 7, img: 'relogios', rot: 'VIII · Your Alibi', t: 'The detective asks you. Now you ask your teacher.', p: 'Build each question out loud. Tap Check. Then ask it, and listen to the alibi.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Interview', t: 'The interview.', p: 'Interview.' }
];

var SERIE = 'Invasion', ANO = '2021';
var YT = 'DlaHxL3mHAU', DUR = 162;

var ENCARTE = [
  ['The show', '<i>Invasion</i> is an Apple TV series (2021). It follows ordinary people in different countries on the night something arrives on Earth.'],
  ['The night', 'One night, strange things happen all over the world at the same moment. The lights go out, the signals stop, and nobody understands why.'],
  ['The people', 'A sheriff in Oklahoma, a mother in New York, a young woman in Tokyo, a soldier in the desert. Every one of them remembers what they were doing when it happened.']
];

var ANTES = [
  { q: 'Do you remember a night when the power went out? What were you doing?', h: 'I was … when the power went out.' },
  { q: 'Something strange happens in the sky tonight. What is the first thing you do?', h: 'I call … / I go …' }
];
var DEPOIS = [
  { q: 'What were the people in the trailer doing when it started?', h: 'One man was … when …' },
  { q: 'Which place in the trailer was the scariest? Why?', h: 'The … because …' }
];

var TRECHOS = [
  { k: 'A normal night', ini: 0, fim: 25, ouvir: 'What are people doing at the start?', sentido: 'Normal life in different places: people working, studying, driving home. Nothing seems wrong.', gram: 'People <b>were living</b> normal lives.' },
  { k: 'The broadcast', ini: 25, fim: 50, ouvir: 'What does the president say?', sentido: 'The president goes on TV: the strange events in many countries are not separate, they are all connected.', gram: 'Everybody <b>was watching</b> TV <b>when</b> the president spoke.' },
  { k: 'The desert', ini: 50, fim: 80, ouvir: 'What happens to the soldiers?', sentido: 'A patrol in the desert is attacked by something they can’t see. (Tense: gunfire, nothing graphic.)', gram: 'They <b>were patrolling</b> <b>when</b> it attacked.' },
  { k: 'Running', ini: 80, fim: 110, ouvir: 'Where is the family going?', sentido: 'A mother takes her kids and runs from home, while sirens play in the streets.', gram: '<b>While</b> they <b>were running</b>, the sirens started.' },
  { k: 'The sky', ini: 110, fim: 140, ouvir: 'What do people see in the sky?', sentido: 'All over the world, people look up. Something is there, and it is everywhere at once.', gram: 'People <b>were looking</b> up <b>as</b> the lights came.' }
];

var TRAPS = [
  ['Be + -ing', 'She was cook when it happened.', 'She <b>was cooking</b> when it happened.', 'was / were + verb-ing'],
  ['The long action, then the cut', 'She was cooking when the lights were going out.', 'She was cooking when the lights <b>went out</b>.', 'long action: was …ing · the moment: past simple'],
  ['While + -ing', 'While she cooked, the house went dark.', '<b>While</b> she <b>was cooking</b>, the house went dark.', 'while + was / were + -ing'],
  ['The question', 'What you were doing?', 'What <b>were you</b> doing?', 'What were you doing when…?']
];

/* as faixas: o gesto forte */
var LUGARES = [
  { lugar: 'Tokyo', hora: '6:14 a.m.', acao: 'watching a launch' },
  { lugar: 'Oklahoma', hora: '4:14 p.m.', acao: 'finishing his last day' },
  { lugar: 'Long Island', hora: '5:14 p.m.', acao: 'cooking dinner' },
  { lugar: 'A school bus', hora: '5:20 p.m.', acao: 'sleeping' },
  { lugar: 'Paris', hora: '11:14 p.m.', acao: 'looking at the sky' },
  { lugar: 'You', hora: 'now', acao: 'sleeping' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, fd: { n: 0, esc: -1 } };

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
  return '<div class="iv-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'She <b>was cooking</b> · they <b>were looking</b><br>…<b>when</b> the lights <b>went out</b> (the moment)<br><b>While</b> she <b>was cooking</b>, …<br><b>What were you doing</b> when…?';
/* III · antes: 30 segundos */
var IV_CRONO = { formato: 'cronometro', titulo: 'Before you watch: 30 seconds. Tell your teacher.', texto: 'The last time the power went out: what were you doing? Say: I was … when the power went out.', segundos: 30 };
/* III · durante: três escolhas de sentido, cada uma no minuto do discurso (legenda-dados.js) */
var IV_ESC = { formato: 'escolhe', titulo: 'Tap ▶ and listen. Pick the answer.', itens: [
  { p: 'Who is speaking to the world?', o: ['The president', 'A sheriff', 'A pilot'], c: 0, tm: '0:19', d: 'He says: “My fellow citizens of the world…”' },
  { p: 'What are the strange incidents?', o: ['Power outages and destroyed homes', 'Football games', 'Good news'], c: 0, tm: '0:39' },
  { p: 'What does he say about the incidents?', o: ['They are connected', 'They are funny', 'They are over'], c: 0, tm: '0:49', d: 'Say it: People were living normal lives when it all started.' }
] };
/* III · depois: a palavra errada, com ▶ */
var IV_ERRO = { formato: 'erro', titulo: 'After the trailer: one word is wrong. Say the right one.', itens: [
  { f: 'My fellow <u>friends</u> of the world,', r: 'citizens', t: '0:19' },
  { f: 'We’re <u>staying</u> now.', r: 'leaving', t: '1:11' },
  { f: 'Was that your <u>last</u> encounter?', r: 'only', t: '1:22' }
] };
/* V · a ação longa ou o momento que a corta */
var IV_SEP = { formato: 'separa', titulo: 'The long action, or the moment? Tap a clue, then its box. Then say them together: … was … when …', caixas: ['The long action · was / were + -ing', 'The moment · past simple'], itens: [
  { t: 'the sheriff · finish his last day', c: 0 }, { t: 'the lights · go out', c: 1 },
  { t: 'the kids · sleep on the bus', c: 0 }, { t: 'the signal · stop', c: 1 },
  { t: 'Aneesha · cook dinner', c: 0 }, { t: 'the house · go dark', c: 1 }
] };
/* VI · ligar o momento ao que as pessoas faziam: cada par certo enche uma faixa */
var PARES = [
  ['Tokyo · the signal stopped', 'Mitsuki was watching a launch.'],
  ['Oklahoma · the lights went out', 'The sheriff was finishing his last day.'],
  ['Long Island · the house went dark', 'Aneesha was cooking dinner.'],
  ['A school bus · the bus stopped', 'The kids were sleeping.'],
  ['Paris · the stars disappeared', 'People were looking at the sky.'],
  ['You · it all began', 'I was sleeping.']
];
/* VII · Ask Me: o detetive */
var IV_PERG = [
  { p: '(what · you · do · last night at 9 p.m.)?', r: 'What <b>were you doing</b> last night at 9 p.m.?' },
  { p: '(what · you · do · when you heard some big news)?', r: 'What <b>were you doing</b> when you heard some big news?' },
  { p: '(what · you · do · the last time the power went out)?', r: 'What <b>were you doing</b> the last time the power went out?' },
  { p: '(where · you · go · when it started to rain)?', r: 'Where <b>were you going</b> when it started to rain?' },
  { p: '(who · you · talk to · at 7 a.m. today)?', r: 'Who <b>were you talking</b> to at 7 a.m. today?' }
];

/* as seis faixas, uma por lugar: rótulo e hora local à esquerda; a barra longa da ação (was …ing) cresce até a linha vermelha do momento, que é a mesma para todos */
function faixas(luz, ultima) {
  var n = luz.filter(Boolean).length, fim = n >= LUGARES.length;
  var linhas = LUGARES.map(function (l, i) {
    var cls = luz[i] ? (ultima === i ? ' ok novo' : ' ok') : '';
    var ini = [8, 22, 14, 18, 26, 10][i];
    return '<div class="iv-faixa' + cls + '"><span class="iv-lugar"><b>' + l.lugar + '</b><small>' + l.hora + '</small></span>'
      + '<span class="iv-trilho">' + (luz[i] ? '<i class="iv-barra" style="left:' + ini + '%;width:' + (62 - ini) + '%"><em>' + l.acao + '</em></i>' : '') + '</span></div>';
  }).join('');
  return '<div class="iv-mural vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The night feeds: ' + n + ' of ' + LUGARES.length + ' places"><div class="iv-topo"><b>Incident 0314 · all feeds</b><small>the red line: the moment it happened</small></div>'
    + '<div class="iv-linhas">' + linhas + '<span class="iv-corte" aria-hidden="true"></span></div>'
    + '<p class="iv-legenda">' + (fim ? 'Six places, one moment. It happened everywhere at once.' : n + ' of ' + LUGARES.length + ' feeds rebuilt') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · past continuous × past simple · while · when</span><h1>While We Were Sleeping</h1>'
    + '<p class="banda">' + SERIE + ' · Apple TV</p>'
    + '<p class="sub">One night, the same moment everywhere. A sheriff was finishing his last day, a mother was cooking, a soldier was on patrol, when it happened. Tonight you rebuild the night, feed by feed, until every red line meets.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the feeds</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r iv-foto"><img src="' + img('capa') + '" alt="A dark suburban street at night with all the lights off and a pale light in the clouds"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="iv-encarte vd"><div class="iv-capinha"><img src="' + img('campo') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>Oklahoma, 4:14 p.m.</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="iv-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Think of a big moment in the news. What were you doing when you heard about it?</h2></div>' + mostra('enc', 'I was having lunch at work when we saw it on TV.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', IV_CRONO) + '</div>'
    + '<div class="lado-l"><div class="iv-selo vd"><b>' + SERIE + '</b><small>the official trailer · tense, not graphic · almost three minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="iv-video"><div class="iv-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="iv-cred">' + SERIE + ' · official trailer (Apple TV) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('esc', IV_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="iv-video"><div class="iv-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="iv-cred">' + SERIE + ' · official trailer (Apple TV) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('erro', IV_ERRO) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="iv-video"><div class="iv-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="iv-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="iv-sentido">' + x.sentido + '</span><span class="iv-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="iv-centro"><p class="iv-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="iv-centro">' + FM.ex('sep', IV_SEP) + '</div>';
};

R.feeds = function (c) {
  var e = (S.fq || {}).liga, luz = PARES.map(function (p, i) { return !!(e && e.par && e.par[i] === i); });
  var antes = S.ivluz || [], nova = -1;
  luz.forEach(function (x, i) { if (x && !antes[i]) nova = i; });
  if (nova >= 0) S.ivult = nova;
  S.ivluz = luz;
  return cab(c) + comPlaca('<div class="fm-obj">' + faixas(luz, S.ivult == null ? -1 : S.ivult) + '</div>'
    + FM.ex('liga', { formato: 'liga', titulo: 'Match each moment to what people were doing. Then say it: … was … when …', pares: PARES, ordemDireita: [3, 5, 0, 4, 2, 1] }), PRESA);
};

R.alibi = function (c) {
  return cab(c) + FM.pergunta('ask', IV_PERG, { regra: PRESA, depois: ['Me too!', 'I was …, but you were …', 'My alibi is …'], depoisRot: 'Then answer' });
};

R.fim = function (c) {
  return cab(c) + '<div class="iv-centro"><p class="iv-dica">The interview.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'mentira', rot: 'I · Two Truths and a Lie', t: 'Before the trailer: a strange night, and a lie.', p: 'The teacher reads three sentences. Two are true. Which one is the lie?',
  q: 'The teacher’s three sentences about strange nights. One is a lie. Which one?',
  frases: ['I was sleeping when an earthquake started.', 'I was walking home when I saw a shooting star.', 'I was driving when my car stopped in the middle of a bridge.'], mentira: 0,
  depois: 'Now you: say two true sentences and one lie with “I was …ing when …”. The teacher finds the lie.',
  ex: 'I was cooking when my cat jumped on the stove. I was swimming when it started to rain. I was singing when the power went out.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'entrevista', rot: 'VIII · The Interview', t: 'Interview the sheriff of the small town.', p: 'The teacher is the sheriff, on his last day at work. Ask what he and the town were doing when it happened. Then swap: you are you, on that night.',
  papel: 'the sheriff, on his last day at work', papel2: 'you, on the night of the invasion',
  itens: [
    { q: 'What were you doing when it happened?', ex: 'I was cleaning my desk. It was my last day.' },
    { q: 'Where were your family when the lights went out?', ex: 'My wife was cooking, and my son was playing outside.' },
    { q: 'What did you see while you were driving home?', ex: 'While I was driving, I saw a light in the field.' },
    { q: 'Were people sleeping when the sirens started?', ex: 'No, they weren’t. Everybody was watching the sky.' },
    { q: 'What were you thinking at that moment?', ex: 'I was thinking: this is not my problem anymore.' }
  ] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'One night. What was going on, and what cut it?',
  marcos: [{ t: 'WAS DOING', s: 'the long part, in progress' }, { t: 'THEN, SUDDENLY', s: 'the moment, short' }],
  frases: [
    { f: 'We were sleeping.', c: 0, d: 'were + -ing · long' },
    { f: 'The lights went out.', c: 1, d: 'went · short, finished' },
    { f: 'My brother was watching TV.', c: 0, d: 'was + -ing · long' },
    { f: 'The phone rang.', c: 1, d: 'rang · short, finished' },
    { f: 'People were walking in the street.', c: 0, d: 'were + -ing · long' },
    { f: 'A loud noise woke us up.', c: 1, d: 'woke · short, finished' }
  ],
  nota: 'The long part is <b>was / were + -ing</b>. The moment that cuts it is the past simple. You join them with <b>when</b>: We were sleeping <b>when</b> the lights went out.',
  uso: { p: 'Your turn. A night when something happened. What were you doing? What happened?', molde: ['I was …ing when …', 'While I was …ing, …'], ex: 'I was cooking dinner when the lights went out. While I was looking for a candle, my phone rang.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
