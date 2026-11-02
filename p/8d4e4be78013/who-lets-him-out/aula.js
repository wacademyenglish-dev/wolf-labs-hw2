/* ============================================================
   JUJUTSU KAISEN · THE DOMAIN · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · make + pessoa + verbo base (made me go), let + pessoa +
   verbo base (let me go), be made to + verbo (was made to go: o TO
   volta na passiva), be allowed to (let não tem passiva).
   Erros: made me to go, let me to go, was made go, was let to go,
   leave me go (deixar = let), makes me to feel, let me going, made me
   went, didn’t let me to, Do they let you…? sem verbo base.
   Catálogo WOLFLIX Live (07/10): família ANIME, modo SUBIR DE NÍVEL
   (ideia do Carlos de 25/09: a Expansão de Domínio).
   A tela forte: a Expansão de Domínio. A barreira do domínio é um anel
   de oito placas em volta do aluno; cada frase certa racha uma placa
   (linhas de fissura em luz), e com oito a barreira se quebra e o céu
   aparece no meio.
   (Reforço cruzado com a WOLFSTATION B1 Onimusha, mesmo alvo em outra
   linha; nenhuma cena repetida.)
   O AQUECIMENTO (aquece.js): a escala. O FECHAMENTO (final.js): a
   cadeira quente, o aluno é o Yuji.
   O VÍDEO: pkKu9hLT-t8 (trailer oficial Crunchyroll, 1:40, idade 0,
   embed sim), áudio japonês com legenda inglesa gravada no quadro. As
   falas foram lidas quadro a quadro em 26/09: 0:12, 0:24, 0:38, 0:45,
   0:48, 1:05. Cada momento contado com palavras nossas.
   A CARA: roxo de energia amaldiçoada, vermelho de talismã, preto;
   Rampart One + Zen Maru Gothic. A antiga era o estúdio de legenda.
   Fila: FILA-LIVE-386.md · 290.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. II: um cronômetro antes (30 s sobre quem fazia as regras); a
   palavra que completa, com ▶ nas falas do quadro; depois, ligar quem faz e
   quem deixa. IV: achar a palavra errada e a regra aparece. V: a barreira
   com SEIS placas (era oito): forçado ou permitido, uma placa por resposta.
   VI (era EXTRA, agora essencial, 6 min): seis cartas de pessoas da sua
   vida e as palavras para contar o que cada uma faz e deixa.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'rua', rot: 'I · Warm-up and The Sorcerer Rules', t: 'Before the trailer: who made you do things, then the rules of curses.', p: 'Answer three questions about your life. Then read the rules of the sorcerers and say if you could live with them.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'II · The Trailer', t: 'Jujutsu Kaisen. The official trailer.', p: 'Start the clock first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'letra', est: 'l', min: 7, img: 'rua', rot: 'III · Scene by Scene', t: 'Five moments of the trailer. Tap one, watch, then talk.', p: 'Each frame is a moment in the video.' },
  { k: 'regra', est: 'f', min: 6, img: 'escola', rot: 'IV · Make, Let, Be Made To', t: 'They made him eat it. They let him live. He was made to fight.', p: 'Find the wrong word in each sentence. Say the right one. Then read the rule.' },
  { k: 'dominio', est: 'o', min: 7, img: 'capa', rot: 'V · Domain Expansion', t: 'Trapped in the domain. Crack the barrier.', p: 'Read the clue and tap the answer. Then say the sentence. Six seals, six cracks.' },
  { k: 'regras', est: 'o', min: 6, img: 'escola', rot: 'VI · Your Rules', t: 'Six people in your life. What do they make you do? What do they let you do?', p: 'Open a card. Tell the teacher. Tap each word when you use it.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VII · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var SERIE = 'Jujutsu Kaisen', ANO = '2020';
var YT = 'pkKu9hLT-t8', DUR = 100;

var ENCARTE = [
  ['The show', '<i>Jujutsu Kaisen</i> is a Japanese anime (2020) from the manga by Gege Akutami. In this world, curses are born from people’s fears and anger.'],
  ['The boy', 'Yuji Itadori is a strong high school student. To save his friends, he swallows a cursed finger of Sukuna, the King of Curses. Now Sukuna lives inside him.'],
  ['The school', 'The sorcerers want to execute him, but his teacher Gojo lets him live and makes him a student at Jujutsu High, a school for sorcerers.']
];

var ANTES = [
  { q: 'Who made the rules in your house when you were a kid?', h: 'My … made the rules. They made me …' },
  { q: 'Would you let a dangerous friend live in your house?', h: 'Yes, I would let … / No, I wouldn’t let …' }
];
var DEPOIS = [
  { q: 'What does Gojo say about himself?', h: 'He says he is the strongest.' },
  { q: 'What do the students want? Do they let anybody change them?', h: 'They want to … They don’t let …' }
];

var TRECHOS = [
  { k: 'Curses', ini: 8, fim: 28, ouvir: 'Where are curses born?', sentido: 'A voice explains this world: curses are born inside people’s hearts, and only other curses can destroy them.', gram: 'Fear <b>makes</b> curses <b>grow</b>.' },
  { k: 'The strongest', ini: 34, fim: 42, ouvir: 'What does Gojo say?', sentido: 'Gojo, the teacher, smiles and says it will be fine, because he is the strongest of all.', gram: 'He <b>lets</b> Yuji <b>stay</b> at the school.' },
  { k: 'Megumi and Nobara', ini: 40, fim: 48, ouvir: 'What do Megumi and Nobara want?', sentido: 'Megumi says he will help people in his own way. Nobara fights so she can stay who she is.', gram: 'Nobody <b>makes</b> her <b>change</b>.' },
  { k: 'Yuji', ini: 47, fim: 60, ouvir: 'What doesn’t Yuji want?', sentido: 'Yuji shouts that he doesn’t want to regret the way he lived.', gram: 'He <b>was made to</b> fight, but he chose it.' },
  { k: 'Choose', ini: 60, fim: 100, ouvir: 'What choice does Yuji have?', sentido: 'A voice tells Yuji to choose the hell he prefers, while he holds the cursed finger.', gram: 'They don’t <b>let</b> him <b>choose</b> an easy way.' }
];

var TRAPS = [
  ['Make / let: no to', 'Gojo made him to study.', 'Gojo <b>made him study</b>.', 'make / let + person + base verb'],
  ['The passive: to comes back', 'Yuji was made fight.', 'Yuji <b>was made to fight</b>.', 'be made to + verb'],
  ['Let has no passive', 'He was let to live.', 'He <b>was allowed to</b> live.', 'be allowed to (not was let)'],
  ['Deixar = let', 'Leave me go!', '<b>Let me go</b>!', 'let = permitir · leave = sair, deixar algo num lugar']
];

/* o domínio: o gesto forte */
var SELOS = [
  { selo: 'the finger', p: 'Sukuna says: “Eat the finger.” Yuji has no choice. Yuji was …', o: ['forced', 'allowed'], c: 0, d: 'make = force. Say it: Sukuna made Yuji eat the finger.' },
  { selo: 'the teacher', p: 'The sorcerers want to execute Yuji. Gojo says: “He can live.” Gojo …', o: ['forced Yuji', 'allowed Yuji'], c: 1, d: 'let = allow. Say it: Gojo let Yuji live.' },
  { selo: 'the training', p: '“Train, Yuji, train!” Every night, he has no choice. Yuji …', o: ['was allowed to train', 'was made to train'], c: 1, d: 'The passive: the to comes back. Say it: Yuji was made to train every night.' },
  { selo: 'the rule', p: 'The school rule: “No student can leave the school at night.” The students …', o: ['were forced to leave', 'weren’t allowed to leave'], c: 1, d: 'Let has no passive: be allowed to. Say it: The students weren’t allowed to leave at night.' },
  { selo: 'the fear', p: 'People are afraid, and the curses grow. The fear … the curses …', o: ['makes … grow', 'lets … sleep'], c: 0, d: 'make + thing + base verb. Say it: Fear makes curses grow.' },
  { selo: 'the door', p: 'Nobara is held in a dark room. She shouts to be free. She says …', o: ['“Let me go!”', '“Leave me go!”'], c: 0, d: 'Deixar = let. Say it: “Let me go!” Nobara shouted.' }
];
var RECUSA = {
  to: 'After make / let + person: the base verb, no to.',
  base: 'After make / let: the base verb. made him eat.',
  leave: 'Deixar (permitir) = let. Leave is to go away.',
  passto: 'In the passive, to comes back: was made to train.',
  letpass: 'Let has no passive: be allowed to.',
  allowto: 'Be allowed + to: allowed to leave.',
  ing: 'After make / let + person: the base verb (no -ing).',
  s: 'After make + person: the base verb, no -s. make him change.'
};

var REGRAS = [
  { k: 'Your parents', h: 'What did your parents make you do as a kid?', ex: 'They made me go to bed at nine.' },
  { k: 'Your school', h: 'What weren’t you allowed to do at school?', ex: 'We weren’t allowed to use phones in class.' },
  { k: 'Your boss', h: 'What does your boss let you do?', ex: 'She lets me work from home on Fridays.' },
  { k: 'Your friends', h: 'What do your friends make you do that you don’t like?', ex: 'They make me sing at karaoke!' },
  { k: 'Your city', h: 'What does your city make you feel?', ex: 'The traffic makes me feel tired.' },
  { k: 'You', h: 'What will you never let anyone make you do?', ex: 'I will never let anyone make me lie.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>make / let</b> + person + base verb<br>made him <b>eat</b> · let him <b>live</b> (no to)<br>The passive: was made <b>to</b> train<br>Let has no passive: was <b>allowed to</b><br><b>Deixar</b> = let (not leave)';
/* II · antes: um cronômetro de 30 segundos */
var VD_CRO = { formato: 'cronometro', titulo: 'Before you watch: one half minute', segundos: 30, texto: 'Who made the rules in your house when you were a kid? Talk for 30 seconds. Use: made me … / let me …' };
/* II · durante: a palavra que completa, ▶ na fala do quadro */
var VD_ESC = { formato: 'escolhe', titulo: 'Read the subtitles. Tap the word that fits.', itens: [
  { p: 'Curses are born in people’s …', o: ['hearts', 'schools', 'books'], c: 0, tm: '0:12' },
  { p: 'Who says “I’m the strongest”?', o: ['Gojo', 'Yuji', 'Sukuna'], c: 0, tm: '0:38' },
  { p: 'Nobara fights so she can stay …', o: ['who she is', 'at home', 'in bed'], c: 0, tm: '0:45' },
  { p: 'Yuji doesn’t want to … the way he lived.', o: ['regret', 'change', 'forget'], c: 0, tm: '0:48' },
  { p: 'A voice tells Yuji to choose. He holds a cursed …', o: ['finger', 'sword', 'book'], c: 0, tm: '1:05' }
] };
/* II · depois: ligar quem faz e quem deixa */
var VD_LIGA = { formato: 'liga', titulo: 'After the trailer: who makes, who lets? Match, then say the sentence.', pares: [
  ['Fear', 'makes curses grow.'],
  ['Gojo', 'lets Yuji stay at the school.'],
  ['The old sorcerers', 'make the rules.'],
  ['Nobody', 'makes Nobara change.']
] };
/* IV · achar a palavra errada; a regra aparece depois do Check */
var VD_ERR = { formato: 'erro', titulo: 'One part is wrong. Say the right one.', itens: [
  { f: 'Gojo <u>made him to study</u>.', r: 'made him study' },
  { f: 'Yuji <u>was made fight</u> every night.', r: 'was made to fight' },
  { f: 'He <u>was let to</u> leave the school.', r: 'was allowed to' },
  { f: '“<u>Leave me go</u>!” Nobara shouted.', r: 'Let me go' },
  { f: 'Curses make people <u>feeling</u> afraid.', r: 'feel' }
] };
/* V · a barreira: uma placa rachada por resposta certa */
var VD_SEL = { formato: 'escolhe', titulo: 'Crack the seal. Tap the answer, then say the sentence.', itens: SELOS.map(function (s) { return { p: s.p, o: s.o, c: s.c, d: s.d }; }) };
/* VI · seis cartas e as palavras para contar */
var VD_PESS = { formato: 'cartas', titulo: 'Open a card. Tell the teacher.', fechada: 'Tap to open', cartas: [
  ['Your parents', 'What did your parents make you do as a kid? What did they let you do?'],
  ['Your school', 'What weren’t you allowed to do at school?'],
  ['Your boss', 'What does your boss let you do? What does your boss make you do?'],
  ['Your friends', 'What do your friends make you do that you don’t like?'],
  ['Your city', 'What does your city make you feel?'],
  ['You', 'What will you never let anyone make you do?']
] };
var VD_USA = { formato: 'usa', titulo: 'Tell the teacher about your life. Tap each word when you use it.', palavras: ['made me', 'let me', 'was made to', 'wasn’t allowed to', 'makes me feel'], fim: 'All five. Now the teacher tells you theirs.' };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, dm: { n: 0, esc: -1 } };

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
  return '<div class="jk-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o anel da barreira: oito placas (arcos) em volta do centro; a placa da vez brilha; a rachada ganha fissuras de luz; com oito, o anel se abre e o centro vira céu */
function arco(i, r1, r2) {
  var a0 = (i * 60 - 90 + 2) * Math.PI / 180, a1 = ((i + 1) * 60 - 90 - 2) * Math.PI / 180, c = 160;
  var p = function (r, a) { return (c + Math.cos(a) * r).toFixed(1) + ' ' + (c + Math.sin(a) * r).toFixed(1); };
  return 'M' + p(r2, a0) + ' A' + r2 + ' ' + r2 + ' 0 0 1 ' + p(r2, a1) + ' L' + p(r1, a1) + ' A' + r1 + ' ' + r1 + ' 0 0 0 ' + p(r1, a0) + ' Z';
}
function fissura(i) {
  var am = (i * 60 - 90 + 30) * Math.PI / 180, c = 160, p = function (r, d) { var a = am + d; return (c + Math.cos(a) * r).toFixed(1) + ',' + (c + Math.sin(a) * r).toFixed(1); };
  return 'M' + p(150, -0.08) + ' L' + p(132, 0.05) + ' L' + p(118, -0.06) + ' L' + p(104, 0.03) + ' M' + p(132, 0.05) + ' L' + p(126, 0.16) + ' M' + p(118, -0.06) + ' L' + p(112, -0.18);
}
function dominio(luz, ultima) {
  var n = luz.filter(Boolean).length, fim = n >= SELOS.length;
  var placas = SELOS.map(function (s, i) {
    var cls = luz[i] ? (i === ultima ? 'ok novo' : 'ok') : '';
    return '<g class="jk-placa ' + cls + '"><path d="' + arco(i, 100, 152) + '"/>' + (luz[i] ? '<path class="jk-fissura" d="' + fissura(i) + '"/>' : '') + '</g>';
  }).join('');
  return '<div class="jk-dom vd' + (fim ? ' quebrado' : '') + '" role="img" aria-label="The domain barrier: ' + n + ' of ' + SELOS.length + ' seals cracked"><svg viewBox="0 0 320 320" class="jk-svg">'
    + '<circle cx="160" cy="160" r="98" class="jk-dentro"/>' + placas
    + '<text x="160" y="152" text-anchor="middle" class="jk-txt1">' + (fim ? 'Broken' : 'Domain') + '</text><text x="160" y="176" text-anchor="middle" class="jk-txt2">' + (fim ? 'you are free' : n + ' / ' + SELOS.length + ' cracked') + '</text></svg>'
    + '<p class="jk-legenda">' + (fim ? 'The barrier falls. Sky again.' : 'Right answer: one seal cracks.') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · make · let · be made to · be allowed to</span><h1>Who Lets Him Out?</h1>'
    + '<p class="banda">' + SERIE + '</p>'
    + '<p class="sub">Yuji has the King of Curses inside him. The sorcerers made him a student; nobody lets him be free. Tonight you are trapped inside a Domain Expansion, and every right sentence cracks the barrier.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the domain</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r jk-foto"><img src="' + img('capa') + '" alt="An old shrine gate at night under a dark purple sky with talismans on a fence"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="jk-encarte vd"><div class="jk-capinha"><img src="' + img('rua') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>Tokyo, after dark</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="jk-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Gojo let Yuji live. Was it a good decision? Why?</h2></div>' + mostra('enc', 'I think yes. He made Yuji a student, and Yuji helps people now.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_CRO) + '</div>'
    + '<div class="lado-l"><div class="jk-selo vd"><b>' + SERIE + '</b><small>the official trailer · Japanese with English subtitles · 1:40</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="jk-video"><div class="jk-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="jk-cred">' + SERIE + ' · official trailer (Crunchyroll) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('esc', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="jk-centro">' + FM.ex('lg', VD_LIGA) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="jk-video"><div class="jk-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="jk-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="jk-sentido">' + x.sentido + '</span><span class="jk-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="jk-centro"><p class="jk-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).err, ver = !!(e && e.ver);
  return cab(c) + '<div class="jk-centro">' + FM.ex('err', VD_ERR)
    + (ver ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Say the five fixes, tap Check, and the rule appears.</p>') + '</div>';
};

R.dominio = function (c) {
  var e = (S.fq || {}).sel, r = (e && e.r) || {};
  var luz = SELOS.map(function (s, i) { return r[i] === s.c; });
  var antes = S.dmluz || [], nova = -1;
  luz.forEach(function (x, i) { if (x && !antes[i]) nova = i; });
  if (nova >= 0) S.dmult = nova;
  S.dmluz = luz;
  var pronta = luz.every(Boolean);
  return cab(c) + comPlaca('<div class="jk-mesa"><div class="lado-l">' + dominio(luz, S.dmult == null ? -1 : S.dmult) + '</div><div class="lado-l">' + FM.ex('sel', VD_SEL)
    + (pronta ? '<p class="aprova">The barrier is broken. Now tell the teacher Yuji’s story with make, let and was made to.</p>' : '') + '</div></div>', PRESA);
};

R.regras = function (c) {
  return cab(c) + comPlaca(FM.ex('pe', VD_PESS) + FM.ex('us', VD_USA), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="jk-centro"><p class="jk-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'escala', rot: 'I · Who Makes the Rules?', t: 'Before the trailer: rules and freedom in your life.', p: 'Mark a number for each sentence and say why. The teacher marks theirs too.', rotulos: ['Not true', 'Very true'],
  itens: [
    { q: 'My parents made me study a lot.', ex: '9. They made me study every afternoon.' },
    { q: 'My parents let me go out alone at fifteen.', ex: '2. No, they didn’t let me go out alone.' },
    { q: 'My job makes me feel tired.', ex: '7. Mondays make me feel very tired.' },
    { q: 'I let my friends choose the restaurant.', ex: '10! I never know what to choose.' },
    { q: 'Nobody can make me change my mind.', ex: '6. Only my grandmother can.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: Yuji Itadori, at Jujutsu High.', p: 'Sit in the hot seat as Yuji. The teacher asks with make, let and was made to. Then swap.',
  quem: 'Yuji Itadori, at Jujutsu High',
  itens: [
    { q: 'Why did you eat the finger? Did someone make you do it?', ex: 'Nobody made me eat it. I did it to save my friends.' },
    { q: 'Does Gojo let you do what you want?', ex: 'Sometimes. He lets me eat sweets, but he makes me train!' },
    { q: 'What were you made to do on your first day?', ex: 'I was made to fight a curse alone.' },
    { q: 'Are you allowed to leave the school?', ex: 'Only with a teacher. I’m not allowed to go alone.' },
    { q: 'What does Sukuna make you feel?', ex: 'He makes me feel angry, and a little afraid.' }
  ] };
/*FIM@@*/
