/* ============================================================
   THE HUNGER GAMES · THE SPONSORS · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · conselho e aviso: should / ought to + verbo (conselho),
   had better / ’d better + verbo (aviso com consequência: se não…),
   ’d better not, Should I…?
   Erros: should to / had better to, verbo flexionado depois do modal
   (should finding, should sleeps), had better don’t, ought sem to,
   had better + passado (’d better smiled), had not better, Do I
   should…?, pergunta sem inversão, better had.
   Catálogo WOLFLIX Live (07/10): família FANTASIA, modo SOBREVIVÊNCIA.
   A tela forte: a arena vista de cima, como um mapa de relevo, com o
   rio, a Cornucópia no meio e o campo de força em volta. Cada conselho
   certo faz cair um paraquedas prateado de patrocinador num ponto do
   mapa, com o presente (água, corda, pão…). No fim, oito patrocinadores.
   O AQUECIMENTO (aquece.js): o duelo, isto ou aquilo. O FECHAMENTO
   (final.js): as perguntas de conselho.
   O VÍDEO: fS35YSjopjE (trailer oficial Lionsgate, 2:25, idade 0, embed
   sim), CORTADO em 1:30 (depois vem a ameaça do banho de sangue).
   Falas conferidas na legenda oficial (25/09), contadas com palavras
   nossas. A aula fica no conselho e na sobrevivência, nunca em como
   alguém morre.
   A CARA: arena de madrugada, prata dos paraquedas, brasa do tordo;
   Marcellus SC no título, Source Sans 3 no texto. A antiga era o set do
   mentor.
   Fila: FILA-LIVE-386.md · 302.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a roleta "quem é você nos Jogos?" antes; True or Lie com ▶ nas
   falas do trailer; depois, escolher a resposta certa com ▶. V: a carta do
   mentor (tocar o conselho e o aviso) e completar a regra. VI: o mapa da arena
   com SEIS paraquedas, montar o conselho com as palavras e tocar Check. VII
   (era EXTRA, agora essencial): duas conversas, o professor escolhe A ou B.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'capitolio', rot: 'I · Warm-up and The Rules of Panem', t: 'Before the trailer: your advice, then the rules of the Games.', p: 'Answer three questions about your life. Then read the rules of Panem and say if you could live with them.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Sunrise on the Reaping. The official trailer.', p: 'Spin the wheel first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'capitolio', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'distrito', rot: 'V · The Ladder', t: 'One piece of advice, five steps.', p: 'Read each step out loud, then go one step up. Notice what changes. Then climb with your own advice.' },
  { k: 'regra', est: 'f', min: 6, img: 'distrito', rot: 'VI · Should or Had Better', t: 'A letter from your mentor: what should you do?', p: 'Tap the advice and the warnings. Then finish the rule.' },
  { k: 'arena', est: 'o', min: 7, img: 'capa', rot: 'VII · The Sponsors', t: 'Six pieces of advice. Every one you build brings a parachute.', p: 'Read the words. Say the advice. Then tap Check.' },
  { k: 'conselhos', est: 'o', min: 7, img: 'distrito', rot: 'VIII · Your Advice', t: 'Two people need your advice. Which one first?', p: 'The teacher picks A or B. Give the advice.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · Questions', t: 'Questions.', p: 'Questions.' }
];

var FILME = 'The Hunger Games: Sunrise on the Reaping', ANO = '2026';
var YT = 'fS35YSjopjE', DUR = 144;

var ENCARTE = [
  ['The film', '<i>The Hunger Games: Sunrise on the Reaping</i> (2026) is a prequel. It happens 24 years before Katniss, at the 50th Hunger Games.'],
  ['The Games', 'Every year, the Capitol takes young people from the twelve districts and sends them into an arena, where only one can come back. This year is special: twice the number of tributes.'],
  ['The boy', 'Haymitch Abernathy, from poor District 12, is one of them. Before the Games, mentors tell him what he should do, and what he had better not do. In the arena, sponsors can send gifts by parachute.']
];

var ANTES = [
  { q: 'Have you seen or read The Hunger Games? What do you remember?', h: 'Yes, I remember … / No, but …' },
  { q: 'What is the best advice anybody has given you?', h: 'Someone told me I should …' }
];
var DEPOIS = [
  { q: 'What advice do the mentors give Haymitch?', h: 'They say he should … / he’d better …' },
  { q: 'Is it better to be loved or to be remembered? Why?', h: 'I think it is better to …' }
];

var TRECHOS = [
  { k: 'On your own', ini: 0, fim: 28, ouvir: 'What does the voice say to the boy?', sentido: 'Someone says they know a thing or two about him. But now, he is on his own.', gram: 'You <b>should</b> trust nobody.' },
  { k: 'The Quell', ini: 28, fim: 40, ouvir: 'What is special about this year?', sentido: 'Welcome to the Second Quarter Quell: twice the number of tributes, twice the glory. They have no idea what is coming.', gram: 'You<b>’d better</b> be ready.' },
  { k: 'Presentation', ini: 40, fim: 62, ouvir: 'Why does the way you look matter?', sentido: 'Presentation could save your life, they say. Shoulders back, big smiles, for the cameras and the sponsors.', gram: 'You <b>should</b> smile for the cameras.' },
  { k: 'All the power', ini: 62, fim: 76, ouvir: 'Who has the power?', sentido: 'President Snow has all the power. Someone asks: why do you accept it all?', gram: 'We <b>ought to</b> ask questions.' },
  { k: 'Remember you', ini: 76, fim: 90, ouvir: 'What can be broken?', sentido: 'The arena is a machine, but all machines can be broken. Go out there, and make them remember you.', gram: 'You<b>’d better</b> make them remember you.' }
];

var TRAPS = [
  ['No TO', 'You should to find water first.', 'You <b>should find</b> water first.', 'should / had better + verb (only ought TO)'],
  ['Had better NOT', 'You’d better don’t run to the Cornucopia.', 'You’d better <b>not</b> run to the Cornucopia.', 'had better not + verb'],
  ['Had better is now', 'You’d better smiled for the cameras.', 'You’d better <b>smile</b> for the cameras.', 'it looks past, it means now: base verb'],
  ['The question', 'Do I should trust her?', '<b>Should I</b> trust her?', 'Should I…? (no do)']
];

/* os paraquedas: o gesto forte */
var PRESENTES = [
  { dom: 'Water', x: 92, y: 74 },
  { dom: 'A warning', x: 252, y: 92 },
  { dom: 'Rope', x: 318, y: 62 },
  { dom: 'Bread', x: 62, y: 196 },
  { dom: 'Medicine', x: 270, y: 236 },
  { dom: 'A pin', x: 172, y: 40 }
];
var RECUSA = {
  to: 'No to after should / had better: should find, ’d better smile. (Only ought takes to.)',
  base: 'After the modal: the base verb (find, sleep).',
  dont: 'The negative: had better not + verb (’d better not run).',
  ought: 'Ought takes to: ought to find.',
  passado: 'Had better looks past, but it is about now: the base verb (smile, touch).',
  s: 'No -s after should: you should sleep.',
  ordemnot: 'Not goes after better: you’d better not touch.',
  q: 'Questions: Should I…? (should first, no do)',
  q2: 'Questions: should first. Should I trust…?',
  ordem: 'The order: you had better / you’d better + verb.'
};

var PEDIDOS = [
  { k: 'A new job', h: 'Your friend starts a new job on Monday. What should she do?', ex: 'She should arrive early, and she’d better not be on her phone.' },
  { k: 'A tourist', h: 'A tourist is coming to your city. What had they better not do?', ex: 'They’d better not walk alone at night downtown.' },
  { k: 'A test', h: 'Your cousin has a big test tomorrow. What should he do tonight?', ex: 'He should sleep early. He ought to eat well too.' },
  { k: 'Your boss', h: 'Your boss looks very stressed. What should he do?', ex: 'He should take a vacation!' },
  { k: 'A first date', h: 'Someone has a first date tonight. What advice do you give?', ex: 'You should listen more than you talk.' },
  { k: 'English', h: 'A friend wants to learn English fast. What should they do?', ex: 'They should watch series in English, and they’d better practice every day.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>should / ought to</b> + verb · advice<br><b>’d better (not)</b> + verb · a warning, or else…<br>only <b>ought TO</b> has to<br><b>Should I</b> trust her? · no “do”';
/* III · antes: quem é você nos Jogos? */
var VD_ROD = { formato: 'sorteio', titulo: 'Before you watch: spin the wheel. Who are you in the Games?', botao: 'Spin', opcoes: ['A tribute', 'A mentor', 'A sponsor', 'A Gamemaker', 'A friend at home', 'A reporter'] };
/* III · durante: True or Lie, com ▶ nos tempos do trailer (legenda-dados.js, só antes de 1:30) */
var VD_VL = { formato: 'verdadeOuMentira', titulo: 'While you watch: true or lie? If it’s a lie, say the truth.', itens: [
  { f: 'A voice says the boy is on his own now.', t: 1, tm: '0:16' },
  { f: 'A voice says there are half as many tributes this year.', t: 0, tm: '0:37', c: 'It says: twice the number of tributes, twice the glory.' },
  { f: 'A voice says presentation could save your life.', t: 1, tm: '0:42' },
  { f: 'Someone says President Snow has no power.', t: 0, tm: '1:06', c: 'It says: President Snow has all the power.' },
  { f: 'A voice says all machines can be broken.', t: 1, tm: '1:23' }
] };
/* III · depois: a resposta certa, com ▶ no tempo da fala */
var VD_ESC = { formato: 'escolhe', titulo: 'After the trailer: choose the right answer. Tap ▶ to hear it again.', itens: [
  { p: 'What does the voice tell the boy?', o: ['You are on your own.', 'You are with friends.'], c: 0, tm: '0:16', d: '“You are on your own.”' },
  { p: 'What could save your life?', o: ['Presentation', 'A long sleep'], c: 0, tm: '0:42', d: '“Presentation could save your life.”' },
  { p: 'What is the advice for the cameras?', o: ['Shoulders back, big smiles', 'Head down, no smile'], c: 0, tm: '0:46', d: '“Shoulders back, big smiles.”' },
  { p: 'What can be broken?', o: ['The cameras', 'All machines'], c: 1, tm: '1:23', d: '“All machines can be broken.”' },
  { p: 'What is the last advice?', o: ['Make them remember you.', 'Go home early.'], c: 0, tm: '1:26', d: '“Go out there and make them remember you.”' }
] };
/* V · a carta do mentor */
var CARTA_R = { formato: 'carta', carta: { de: 'To the new tribute,', txt: 'You [[should find]] water first. You [[ought to find]] allies you can trust. You [[should sleep]] in the trees. And listen: you[[’d better not run]] to the Cornucopia. You[[’d better smile]] for the cameras, or the sponsors will forget you.', assina: 'Your mentor' },
  toque: 'Tap the advice and the warnings', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner.',
  regra: [
    { a: 'Advice: you should', par: ['find', 'to find'], c: 0, b: 'water.' },
    { a: 'Only', par: ['ought', 'should'], c: 0, b: 'takes TO: you ought to find allies.' },
    { a: 'A warning: you’d better', par: ['not run', 'don’t run'], c: 0, b: 'to the Cornucopia.' },
    { a: 'You’d better', par: ['smile', 'smiled'], c: 0, b: '(it means now, not the past).' },
    { a: 'Question:', par: ['Should I', 'Do I should'], c: 0, b: 'trust her?' }
  ] };
/* VI · montar o conselho com as palavras: cada Check manda um paraquedas */
var PERG = { formato: 'pergunta', titulo: 'Build the advice from the words. Say it. Then tap Check.', depoisRot: 'Then ask each other', depois: ['Where had a tourist better not go in your city?', 'Ask the teacher: “Should I …?” about your English.'], itens: [
  { p: 'Water · you · find water · first', r: 'You <b>should find</b> water first.' },
  { p: 'A warning · you · not run to the Cornucopia · it is dangerous', r: 'You<b>’d better not run</b> to the Cornucopia.' },
  { p: 'Rope · you · ought to · find allies', r: 'You <b>ought to find</b> allies.' },
  { p: 'Bread · you · had better · smile for the cameras', r: 'You<b>’d better smile</b> for the cameras.' },
  { p: 'Medicine · I · trust Maysilee? · a question', r: '<b>Should I trust</b> Maysilee?' },
  { p: 'A pin · you · had better · make them remember you', r: 'You<b>’d better make</b> them remember you.' }
] };
/* VII · duas conversas: o professor escolhe */
var VD_A = { t: 'A new job on Monday', d: 'Your friend starts a new job on Monday. You are the mentor: what should she do, and what had she better not do?', st: ['She should …', 'She ought to …', 'She’d better not …'] };
var VD_B = { t: 'A tourist in your city', d: 'A tourist is coming to your city. You are the guide: what should they see, and what had they better not do?', st: ['They should …', 'They’d better not …', 'They ought to …'] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, ar: { n: 0, esc: -1 } };

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
  return '<div class="hg-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a arena vista de cima: curvas de nível, o rio, a Cornucópia no meio e o campo de força em volta; os paraquedas prateados pousam onde o conselho caiu */
function arena() {
  /* 23/10/2026 · o paraquedas cai onde o conselho já foi checado (em qualquer ordem); o próximo pisca */
  var e = (S.fq && S.fq.ar && S.fq.ar.ver) || {}, ps = '', feitas = 0, prox = -1;
  PRESENTES.forEach(function (p, i) { if (e[i]) feitas++; else if (prox < 0) prox = i; });
  var fim = feitas >= PRESENTES.length, N = PRESENTES.length;
  PRESENTES.forEach(function (p, i) {
    if (e[i]) ps += '<g class="hg-para" transform="translate(' + p.x + ' ' + p.y + ')"><g class="hg-voo"><path class="hg-copa" d="M-13 -6 Q0 -24 13 -6 Z"/><path class="hg-fio" d="M-13 -6 L0 6 M13 -6 L0 6 M0 -6 L0 6"/><rect class="hg-caixa" x="-4" y="5" width="8" height="7" rx="1"/></g><text y="26" text-anchor="middle">' + p.dom + '</text></g>';
    else if (i === prox) ps += '<g class="hg-alvo" transform="translate(' + p.x + ' ' + p.y + ')"><circle r="11"/><circle r="3"/></g>';
  });
  return '<div class="hg-mapa vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The arena from above: ' + feitas + ' of ' + N + ' sponsor parachutes"><div class="hg-topo"><b>The Arena</b><small>sponsors: ' + feitas + ' / ' + N + '</small></div>'
    + '<svg class="hg-svg" viewBox="0 0 400 280" aria-hidden="true"><rect class="hg-chao" width="400" height="280"/>'
    + '<g class="hg-niveis"><path d="M40 60 C90 20 170 30 190 70 S150 140 90 130 S10 100 40 60Z"/><path d="M60 70 C100 44 160 50 170 78 S140 120 96 116 S40 96 60 70Z"/><path d="M260 170 C320 140 390 170 380 220 S300 270 260 240 S220 190 260 170Z"/><path d="M278 186 C318 168 360 186 356 216 S306 250 280 232 S256 200 278 186Z"/><path d="M290 30 C340 20 380 50 370 90 S320 120 290 100 S250 40 290 30Z"/></g>'
    + '<path class="hg-rio" d="M0 150 C60 140 90 170 140 168 S220 190 250 160 S330 120 400 128"/>'
    + '<g class="hg-corn" transform="translate(200 140)"><path d="M-16 6 C-14 -8 4 -14 16 -6 L10 2 C2 -4 -8 -2 -10 8 Z"/></g>'
    + '<rect class="hg-campo" x="6" y="6" width="388" height="268" rx="10"/>' + ps + '</svg>'
    + '<p class="hg-legenda">' + (fim ? 'Six sponsors. They will remember you.' : feitas + ' of ' + N + ' parachutes · the Cornucopia in the middle') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · advice and warnings · should, ought to, had better</span><h1>You’d Better Not Volunteer</h1>'
    + '<p class="banda">The Hunger Games · Sunrise on the Reaping</p>'
    + '<p class="sub">Twice the tributes, one arena, and a boy from District 12 with no chance. Sponsors only help the ones who listen. Tonight you are the mentor: every right piece of advice sends a silver parachute into the arena.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Mentor the tribute</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r hg-foto"><img src="' + img('capa') + '" alt="A misty forest clearing at dawn with a golden horn-shaped structure in the middle"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="hg-encarte vd"><div class="hg-capinha"><img src="' + img('capitolio') + '" alt=""><div><small>Sunrise on the Reaping · ' + ANO + '</small><b>The Capitol</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="hg-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Haymitch has one week before the Games. What should he do?</h2></div>' + mostra('enc', 'He should find allies, and he’d better not trust the Capitol.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_ROD) + '<p class="fm-nota">Say: I should … / You’d better …</p></div>'
    + '<div class="lado-l"><div class="hg-selo vd"><b>Sunrise on the Reaping</b><small>the official trailer · tense, not graphic</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="hg-video"><div class="hg-vcol">' + iframe(YT, 'Sunrise on the Reaping · trailer') + '<small class="hg-cred">The Hunger Games: Sunrise on the Reaping · official trailer (Lionsgate) · 2:24 · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_VL) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="hg-centro">' + FM.ex('v2', VD_ESC) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="hg-video"><div class="hg-vcol">' + iframe(YT, x.k + ' · Sunrise on the Reaping', '&start=' + x.ini + '&end=' + x.fim) + '<small class="hg-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="hg-sentido">' + x.sentido + '</span><span class="hg-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="hg-centro"><p class="hg-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('car', CARTA_R);
};

R.arena = function (c) {
  var e = (S.fq && S.fq.ar && S.fq.ar.ver) || {}, n = 0;
  PRESENTES.forEach(function (p, i) { if (e[i]) n++; });
  return cab(c) + '<div class="fm-lado2">' + arena() + comPlaca(FM.ex('ar', PERG), PRESA) + '</div>'
    + (n === PRESENTES.length ? '<p class="fm-certa" style="width:min(1100px,100%);margin:16px auto 0">Six parachutes in the arena. Now give the tribute your last three pieces of advice before the gong.</p>' : '');
};

R.conselhos = function (c) {
  return cab(c) + comPlaca(FM.ab('ab', VD_A, VD_B), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="hg-centro"><p class="hg-dica">Questions.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'duelo', rot: 'I · This or That', t: 'Before the trailer: how would you survive?', p: 'Pick one side. Then say why. The teacher picks too.',
  itens: [
    { a: 'Hide', b: 'Fight', q: 'In a dangerous game, what is your plan?', ex: 'Hide. You should never fight first.' },
    { a: 'Go alone', b: 'Make allies', q: 'How do you survive?', ex: 'Make allies. You ought to have friends.' },
    { a: 'Smile for the cameras', b: 'Show who you are', q: 'Everybody is watching. What do you do?', ex: 'Show who I am. I can’t pretend.' },
    { a: 'The forest', b: 'The mountains', q: 'Where would you go first?', ex: 'The forest. There is water and food.' },
    { a: 'Be loved', b: 'Be feared', q: 'Which one helps you more?', ex: 'Be loved. People help you when they like you.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'perguntas', rot: 'VIII · Questions', t: 'Questions about advice.', p: 'Answer each one with should, ought to or had better. Then give the teacher two pieces of advice.',
  itens: [
    { q: 'What should someone do on their first day at a new job?', ex: 'They should listen more than they talk.' },
    { q: 'What had you better not do in your city at night?', ex: 'You’d better not walk alone in some areas.' },
    { q: 'What should I visit if I go to your city?', ex: 'You should visit the old market. You ought to try the food there.' },
    { q: 'What advice would you give your younger self?', ex: 'You should study English earlier!' },
    { q: 'What had a tourist better not do in your country?', ex: 'They’d better not wear expensive things on the beach.' }
  ],
  depois: 'Now give the teacher two pieces of advice: one with should, one with had better.' };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One piece of advice. Climb it one step at a time.',
  degraus: [
    { r: 'advice', f: 'You <b>should</b> stay close to the water.', d: 'should + the clean verb: advice.' },
    { r: 'advice', f: 'You <b>ought to</b> stay close to the water.', d: 'ought to: the same advice. Don’t forget to.' },
    { r: 'warning', f: 'You<b>’d better</b> stay close to the water.', d: '’d better: a warning. If you don’t, there is a problem.' },
    { r: 'no', f: 'You<b>’d better not</b> go near the fence.', d: 'The not goes after better: ’d better not.' },
    { r: '?', f: '<b>Should</b> I stay close to the water?', d: 'A question: should goes first. ’d better has no question.' }
  ],
  nota: 'After <b>should</b>, <b>ought to</b> and <b>’d better</b>: the clean verb. No -s, no -ing. <b>Should</b> = advice. <b>’d better</b> = a warning, with a problem if you don’t. The no is <b>’d better not</b>, never “had better don’t”.',
  uso: { p: 'Your turn. A friend has a big exam. Give advice (should) and one warning (’d better).', molde: ['You should …', 'You’d better …', 'You’d better not …'], ex: 'You should study tonight. You’d better sleep early. You’d better not use your phone.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
