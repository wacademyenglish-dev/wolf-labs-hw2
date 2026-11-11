/* ============================================================
   THE GOOD PLACE · THE POINT BOARD · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · have to / has to (necessário), don't / doesn't have to
   (não é necessário), Do I have to…? / Does she have to…?, had to (o
   passado), There have to be…
   Erros: he have to, has that (tenho que), don't must, haven't to,
   Have I to…?, Do I must…?, he don't have to, doesn't has to, have to
   planned / had to planned, Do Tahani…?, they has to, have tell.
   Catálogo WOLFLIX Live (07/10): família SITCOM, modo ESCOLHA O FINAL.
   A tela forte: o placar de pontos da vida após a morte. Cada frase
   certa soma os pontos da ação, o bonde anda nos dormentes da linha, e
   no fim o aluno escolhe: puxa a alavanca ou não.
   O AQUECIMENTO (aquece.js): a pilha. O FECHAMENTO (final.js): o debate
   do bonde.
   O VÍDEO: AgFDYLwa2Ik (cena oficial, The Good Place, 2:40, idade 0,
   embed sim). Sem legenda no YouTube hoje: os cinco tempos são
   ESTIMADOS, e cada momento é contado com palavras nossas.
   A CARA: tinta verde-escura, menta, ouro e rosa do bairro; Young Serif
   + Figtree. A antiga era o kit cinema "escolha a cena".
   Fila: FILA-LIVE-386.md · 273.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: um cronômetro de 30 s antes ("No time, dude!"); a palavra que
   você ouviu com ▶; depois, escolher a resposta certa com ▶. V: as anotações
   do Chidi, achar a palavra errada, e só depois a placa da regra. VI: o placar
   com SEIS ações, separar "necessário" de "não é necessário"; no fim, a
   alavanca. VII (era EXTRA, agora essencial): três dilemas, escolher como
   você reage.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'bairro', rot: 'I · Warm-up and Two Truths and a Lie', t: 'Before the clip: what you have to do, then a woman in the wrong place.', p: 'Answer three questions about your life. Then find the lie about the Good Place.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Clip', t: 'The Good Place. The trolley problem comes to life.', p: 'Race the clock first. Watch the clip. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'sala', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'V · Three Ways to Say It', t: 'Have to, don’t have to, had to. Three moments.', p: 'Look at the three ways. Tap the right one for each sentence. Then say three of your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'sala', rot: 'VI · Have To', t: 'Chidi’s notes: one word is wrong in every line.', p: 'Say the right word for each line. Then tap Check.' },
  { k: 'placar', est: 'o', min: 7, img: 'capa', rot: 'VII · The Point Board', t: 'Six deeds. Is it necessary? The trolley is coming.', p: 'Tap a deed, then its box. Every right one adds points. Then you choose.' },
  { k: 'etica', est: 'o', min: 7, img: 'sala', rot: 'VIII · Ethics Class', t: 'Michael’s class: real life, no trains.', p: 'Read the situation. Tap how you answer. Then say it in your words.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Debate', t: 'The debate.', p: 'Debate.' }
];

var SERIE = 'The Good Place', ANO = '2016';
var YT = 'AgFDYLwa2Ik', DUR = 160;

var ENCARTE = [
  ['The show', '<i>The Good Place</i> is an American comedy by Michael Schur (NBC, 2016–2020). Kristen Bell and Ted Danson are the stars.'],
  ['The woman', 'Eleanor dies and goes to “the Good Place”, a town for very good people. But she is there by mistake.'],
  ['The teacher', 'Chidi teaches ethics: right and wrong. He has to teach Eleanor to be good.']
];

var ANTES = [
  { q: 'Is it easy to be a good person? Why?', h: 'Yes, it is … / No, because you have to …' },
  { q: 'You are a teacher. Your student has to learn one thing. What is it?', h: 'My student has to …' }
];
var DEPOIS = [
  { q: 'What does Chidi have to do in the clip?', h: 'He has to …' },
  { q: 'Do you think the clip is funny or scary? Why?', h: 'It is … because …' }
];

var TRECHOS = [
  { k: 'The class', ini: 0, fim: 28, ouvir: 'Where are Chidi and Michael?', sentido: 'Chidi is teaching his ethics class, and Michael has a surprise for him.', gram: 'Chidi <b>has to</b> teach every day.' },
  { k: 'The tracks', ini: 28, fim: 60, ouvir: 'How many people are on each track?', sentido: 'Suddenly they are on a trolley. Five workers on one track, one worker on the other.', gram: 'He <b>has to</b> choose a track.' },
  { k: 'No time', ini: 60, fim: 95, ouvir: 'Does Chidi have time to think?', sentido: 'Michael tells him to decide fast. For Chidi, every decision is very hard.', gram: '<b>Do</b> I <b>have to</b> decide now?' },
  { k: 'A simulation', ini: 95, fim: 128, ouvir: 'Are the people real?', sentido: 'Michael explains that it is only a simulation. The people are not real.', gram: 'He <b>doesn’t have to</b> hurt real people.' },
  { k: 'Again', ini: 128, fim: 160, ouvir: 'Is the test over?', sentido: 'They never left the classroom. Michael says a test needs a real risk, so they try again.', gram: 'There <b>have to</b> be stakes.' }
];

var TRAPS = [
  ['Not have that', 'I have that choose a track.', 'I <b>have to</b> choose a track.', 'have to + verb (never have that)'],
  ['He / she: has to', 'Chidi have to decide.', 'Chidi <b>has to</b> decide.', 'I / you / we / they have to · he / she has to'],
  ['The negative', 'You don’t must pay here.', 'You <b>don’t have to</b> pay here.', 'don’t / doesn’t have to = not necessary'],
  ['The question', 'Have I to pull the lever?', '<b>Do</b> I <b>have to</b> pull the lever?', 'Do I have to…? · Does he have to…?']
];

/* o placar: o gesto forte */
var ACOES = [
  { pts: 40, acao: 'free frozen yogurt' },
  { pts: 120, acao: 'Eleanor learns to be good' },
  { pts: 60, acao: 'Chidi takes his time' },
  { pts: 200, acao: 'the trolley problem' },
  { pts: 90, acao: 'a simulation, not real' },
  { pts: 110, acao: 'Chidi teaches at nine' }
];
var RECUSA = {
  has: 'He / she: has to.',
  que: 'In English: have to + verb (not have that).',
  dont: 'Not necessary: don’t have to.',
  havent: 'The negative is don’t have to (not haven’t to).',
  pergunta: 'Questions: Do I have to…?',
  domust: 'Do I have to…? (Do and must don’t go together.)',
  doesnt: 'He / she: doesn’t have to.',
  doesnthas: 'After doesn’t / does: have (not has).',
  passado: 'In the past: had to + verb.',
  base: 'After had to: the base verb. had to plan.',
  does: 'He / she: Does … have to…?',
  they: 'Two people (they): have to.',
  tofalta: 'Have to: don’t forget the to.',
  plural: 'Stakes are many: there have to be.',
  to: 'Here: have to (and after must, no to).'
};

var DILEMAS = [
  { k: 'The wallet', h: 'You find a wallet with 200 dollars and an ID card.', ex: 'I have to return it. I don’t have to keep the money.' },
  { k: 'The test', h: 'Your friend cheats on a test. Do you have to tell the teacher?', ex: 'I don’t have to tell the teacher, but my friend has to stop.' },
  { k: 'The glass', h: 'You break a glass at a restaurant. Who has to pay?', ex: 'I have to pay. The restaurant doesn’t have to pay.' },
  { k: 'The party', h: 'Your friend’s birthday party. You are very tired. Do you have to go?', ex: 'I have to go, but only for one hour.' },
  { k: 'The 11 p.m. message', h: 'Your boss sends a message at 11 p.m. Do you have to answer tonight?', ex: 'No, I don’t have to answer. I can answer at 9 a.m.' },
  { k: 'The last cookie', h: 'There is one cookie and two people. Who has to eat it?', ex: 'Nobody has to eat it. We have to share it!' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>have to</b> + verb · he / she <b>has to</b><br><b>don’t / doesn’t have to</b> = not necessary<br><b>Do</b> I <b>have to</b>…? · <b>Does</b> he <b>have to</b>…?<br><b>had to</b> + verb = the past';
/* III · antes: o relógio */
var VD_CRO = { formato: 'cronometro', titulo: 'Before you watch: no time, dude! Make a decision!', texto: 'You have 30 seconds. Say what you have to do this week. I have to … / I don’t have to …', segundos: 30 };
/* III · durante: a palavra que você ouviu, cada uma no tempo do clipe (legenda-dados.js) */
var VD_SOM = { formato: 'som', titulo: 'Which word did you hear?', itens: [
  { a: 'There are ', par: ['five', 'fine'], c: 0, b: ' workers on this track.', t: '0:10' },
  { a: 'Here are the ', par: ['levers', 'lovers'], c: 0, b: ' to switch the tracks.', t: '0:13' },
  { a: 'No ', par: ['time', 'dime'], c: 0, b: ', dude!', t: '0:18' },
  { a: 'We never ', par: ['left', 'lift'], c: 0, b: '.', t: '0:56' },
  { a: 'None of this was ', par: ['real', 'reel'], c: 0, b: '.', t: '1:06' }
] };
/* III · depois: a resposta certa, com ▶ no tempo da fala */
var VD_ESC = { formato: 'escolhe', titulo: 'After the clip: choose the right answer. Tap ▶ to hear it again.', itens: [
  { p: 'How many workers are on the first track?', o: ['One', 'Five'], c: 1, tm: '0:10', d: '“There are five workers on this track and one over there.”' },
  { p: 'What does Michael say about the people?', o: ['They are real.', 'It’s just a simulation.'], c: 1, tm: '0:44', d: '“It’s just a simulation.”' },
  { p: 'Where are Chidi and Michael at the end?', o: ['On a real train', 'In the classroom'], c: 1, tm: '0:56', d: '“We never left.”' },
  { p: 'What does Michael say a test needs?', o: ['Stakes', 'Snacks'], c: 0, tm: '1:12', d: '“There have to be stakes.”' }
] };
/* V · as anotações do Chidi: uma palavra errada em cada linha */
var VD_ERR = { formato: 'erro', titulo: 'Chidi’s notes: one word is wrong. Say the right one.', itens: [
  { f: 'Chidi <u>have</u> to decide.', r: 'has' },
  { f: 'You <u>don’t must</u> pay here.', r: 'don’t have to' },
  { f: '<u>Have I to</u> pull the lever?', r: 'Do I have to' },
  { f: 'Michael had to <u>planned</u> the whole town.', r: 'plan' },
  { f: 'I <u>have that</u> choose a track.', r: 'have to' },
  { f: 'Chidi doesn’t <u>has</u> to decide now.', r: 'have' }
] };
/* VI · "é necessário?": separar as ações (cada uma vale pontos) */
var SEP = { formato: 'separa', titulo: 'Is it necessary? Tap a deed, then tap its box.', caixas: ['Necessary: have to / has to', 'Not necessary: don’t / doesn’t have to'], itens: [
  { t: 'pay for frozen yogurt (it is free)', c: 1 },
  { t: 'learn to be good (Eleanor wants to stay)', c: 0 },
  { t: 'decide right now (Chidi has time)', c: 1 },
  { t: 'choose a track (the trolley is coming)', c: 0 },
  { t: 'hurt real people (it is a simulation)', c: 1 },
  { t: 'be in class at nine (Chidi is the teacher)', c: 0 }
] };
/* VII · três dilemas: como você reage */
var VD_DIL = [
  { formato: 'reacao', titulo: 'The wallet', fala: 'You find a wallet with 200 dollars and an ID card.', quem: 'Your friend', reacoes: [
    ['Return it', 'I have to return it. I don’t have to keep the money.', 'Good. The owner has to be very happy.'],
    ['Keep the money', 'I don’t have to tell anyone.', 'But the owner has to pay his rent today.'],
    ['Ask a friend', 'Do I have to take it to the police?', 'You don’t have to. But you have to find the owner.'] ] },
  { formato: 'reacao', titulo: 'The test', fala: 'Your friend cheats on a test. Do you have to tell the teacher?', quem: 'Your friend', reacoes: [
    ['Tell the teacher', 'I have to tell the teacher. It is not fair.', 'Maybe. But does he have to fail?'],
    ['Talk to your friend', 'I don’t have to tell the teacher. My friend has to stop.', 'Do you have to talk to him today?'],
    ['Do nothing', 'I don’t have to do anything. It is not my test.', 'Right. But do you have to be silent?'] ] },
  { formato: 'reacao', titulo: 'The 11 p.m. message', fala: 'Your boss sends a message at 11 p.m. Do you have to answer tonight?', quem: 'A colleague', reacoes: [
    ['Answer now', 'I have to answer tonight. The boss is waiting.', 'You don’t have to. It is 11 p.m.!'],
    ['Answer tomorrow', 'I don’t have to answer tonight. I can answer at 9 a.m.', 'Good. Nobody has to work at night.'],
    ['Ask a colleague', 'Do we have to answer tonight?', 'Nobody has to. Let’s sleep.'] ] }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, pl: { n: 0, esc: -1, fim: 0 } };

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
  return '<div class="gp-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o placar da vida após a morte: o total grande, as ações já somadas, e embaixo o bonde andando nos oito dormentes até a bifurcação */
function placar() {
  /* 23/10/2026 · soma os pontos das ações que estão na caixa certa (em qualquer ordem) */
  var e = (S.fq && S.fq.pl && S.fq.pl.em) || {}, ok = [], tot = 0;
  ACOES.forEach(function (a, i) { if (e[i] === SEP.itens[i].c) { ok.push(i); tot += a.pts; } });
  var lista = ok.map(function (i) { return '<li><span>' + ACOES[i].acao + '</span><b>+' + ACOES[i].pts + '</b></li>'; }).reverse().slice(0, 4).join('');
  var trilho = ACOES.map(function (a, i) { return '<i class="gp-dorm' + (i < ok.length ? ' ok' : '') + '"></i>'; }).join('');
  var pos = ok.length / ACOES.length * 100;
  return '<div class="gp-placar vd" role="img" aria-label="The point board: ' + tot + ' points, ' + ok.length + ' of ' + ACOES.length + ' deeds"><div class="gp-total"><small>Your points</small><b>' + tot + '</b></div>'
    + '<ul class="gp-lista">' + (lista || '<li class="vazio"><span>No points yet. Sort the first deed.</span></li>') + '</ul>'
    + '<div class="gp-linha"><div class="gp-trilho">' + trilho + '</div><span class="gp-bonde" style="left:calc(' + pos + '% - ' + (pos / 100 * 34) + 'px)"></span><span class="gp-garfo"></span></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · have to · has to · don’t have to · Do I have to…?</span><h1>Do I Have to Pull the Lever?</h1>'
    + '<p class="banda">' + SERIE + ' · ' + ANO + '</p>'
    + '<p class="sub">In the afterlife, every action has points. Chidi teaches right and wrong, and Michael puts him on a trolley with five people on one track and one on the other. Tonight you earn points with every right sentence, and at the end, you choose.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the test</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r gp-foto"><img src="' + img('capa') + '" alt="An old railway track that splits in two at dusk, with an iron lever at the fork"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="gp-encarte vd"><div class="gp-capinha"><img src="' + img('bairro') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>The neighborhood</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="gp-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Eleanor has to learn to be good. What is one good thing you do every day?</h2></div>' + mostra('enc', 'I help my mother. I have to call her every day, and I like it.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_CRO) + '</div>'
    + '<div class="lado-l"><div class="gp-selo vd"><b>' + SERIE + '</b><small>the trolley problem · a scene from the show · about three minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the clip now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="gp-video"><div class="gp-vcol">' + iframe(YT, SERIE + ' · the trolley problem') + '<small class="gp-cred">' + SERIE + ' · official clip (NBC) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the clip</button></div></div></div>';
  else corpo = '<div class="gp-centro">' + FM.ex('v2', VD_ESC) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="gp-video"><div class="gp-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="gp-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="gp-sentido">' + x.sentido + '</span><span class="gp-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="gp-centro"><p class="gp-dica">Tap a frame to open that moment of the clip.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  /* a regra só entra depois do Check: primeiro o aluno acha o erro */
  var er = FM.ex('er', VD_ERR);
  return cab(c) + ((S.fq && S.fq.er && S.fq.er.ver) ? comPlaca(er, PRESA) : er);
};

R.placar = function (c) {
  var e = S.pl, em = (S.fq && S.fq.pl && S.fq.pl.em) || {}, ok = 0;
  SEP.itens.forEach(function (x, i) { if (em[i] === x.c) ok++; });
  var fins = ['', 'You pulled the lever. One person is hurt, five are safe. Why did you have to do it?', 'You didn’t pull. Five people are hurt, but you didn’t touch anything. Chidi is surprised: “You don’t have to act?” Why not?'];
  var fork = ok === SEP.itens.length ? '<div class="gp-centro" style="margin-top:16px"><div class="gp-pista vd"><small>The fork · your choice</small><p>The trolley is at the fork. Five on one track, one on the other. Do you have to pull the lever?</p></div>'
    + '<div class="gp-escolha"><button type="button" class="versao' + (e.fim === 1 ? ' on' : '') + '" data-a="pl-f" data-n="1">Pull the lever</button><button type="button" class="versao' + (e.fim === 2 ? ' on' : '') + '" data-a="pl-f" data-n="2">Don’t pull it</button></div>'
    + (e.fim ? '<p class="aprova">' + fins[e.fim] + '</p>' : '') + '</div>' : '';
  return cab(c) + '<div class="fm-lado2">' + placar() + comPlaca(FM.ex('pl', SEP), PRESA) + '</div>' + fork;
};

R.etica = function (c) {
  return cab(c) + comPlaca(VD_DIL.map(function (d, i) { return FM.ex('dl' + i, d); }).join(''), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="gp-centro"><p class="gp-dica">The debate.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };
TOQUES['pl-f'] = function (b, n) { S.pl.fim = n; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'pilha', rot: 'I · Your Week', t: 'Before the clip: what do you have to do this week?', p: 'Turn one card at a time and finish it out loud. Then the teacher finishes it too.', rotulo: 'Finish it',
  depois: 'Which card is true for you? Say it again.',
  itens: [
    { q: 'This week, I have to …', ex: '… finish a big project at work.' },
    { q: 'On Saturday, I don’t have to …', ex: '… wake up early. I can sleep!' },
    { q: 'At home, my … has to …', ex: '… my brother has to wash the dishes.' },
    { q: 'As a child, I had to …', ex: '… go to bed at nine o’clock.' },
    { q: 'Ask the teacher: Do you have to … tomorrow?', ex: 'Do you have to work tomorrow?' },
    { q: 'Nobody has to … but everybody does it.', ex: '… check the phone in the morning.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'debate', rot: 'VIII · The Debate', t: 'Do you have to pull the lever?', p: 'Choose a side. The teacher takes the other one. Use have to and don’t have to.',
  frase: 'You have to pull the lever.',
  a: { rot: 'Pull it', motivos: ['Five people are more than one.', 'You have to do something.', 'If you do nothing, five people get hurt.'] },
  b: { rot: 'Don’t pull it', motivos: ['You don’t have to hurt anyone.', 'It isn’t your decision.', 'The one person has a family too.'] },
  frases: ['You have to… / You don’t have to…', 'Do we really have to…?', 'I see your point, but…'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'Have to, don’t have to, had to. Three ways.',
  usos: [
    { t: 'HAVE TO', f: 'You have to pull the lever.', d: 'It is necessary now. You have no choice.', img: 'capa' },
    { t: 'DON’T HAVE TO', f: 'You don’t have to pull it.', d: 'It is not necessary. You can choose.', img: 'sala' },
    { t: 'HAD TO', f: 'Chidi had to choose fast.', d: 'It was necessary yesterday.', img: 'bairro' }
  ],
  pergunta: 'Which way is it?',
  itens: [
    { f: 'Chidi, hurry! The trolley is coming. You have to pull the lever!', c: 0 },
    { f: 'Relax, Eleanor. We don’t have to decide today. The class is tomorrow.', c: 1 },
    { f: 'Yesterday Eleanor had to run to the lever.', c: 2 },
    { f: 'Tahani doesn’t have to come to the class. It is optional.', c: 1 },
    { f: 'Last night Michael had to explain the points again.', c: 2 },
    { f: 'Eleanor has to answer. Nobody else can.', c: 0 }
  ],
  nota: 'Same two words, three moments. <b>have to</b> / <b>has to</b> = it is necessary. <b>don’t have to</b> / <b>doesn’t have to</b> = it is not necessary: you can choose. <b>had to</b> = it was necessary, in the past. Never “he have to”.',
  uso: { p: 'Your turn. One thing you have to do this week, one thing you don’t have to do, and one thing you had to do yesterday.', molde: ['I have to …', 'I don’t have to …', 'Yesterday I had to …'], ex: 'I have to finish a report. I don’t have to work on Saturday. Yesterday I had to wake up at five.' },
  prof: 'Read the three ways out loud with the student. Then the student taps one for each sentence. No rule to read: the three ways are the rule.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
