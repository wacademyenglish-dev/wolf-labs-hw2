/* ============================================================
   FRIENDS · THE LAUGH METER · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · should / shouldn't + verbo (conselho), Should I…? /
   Should we…?
   Erros: should to, shoulds, should + -s, should + passado, should +
   -ing, don't should / doesn't should, Do I should…?, pergunta sem
   inversão (I should share…?).
   Catálogo WOLFLIX Live (07/10): família SITCOM, modo PLATEIA.
   A tela forte: o sofá laranja do café. Cada amigo senta e pede um
   conselho; a frase certa acende a almofada dele e o medidor de risada
   da plateia sobe. Oito almofadas, o ponteiro no máximo no fim.
   O AQUECIMENTO (aquece.js): duas verdades e uma mentira. O
   FECHAMENTO (final.js): um minuto de conselhos.
   O VÍDEO: KCFYf4TJdN0 (HBO Max, "The Best Food Moments on Friends",
   7:20, idade 0, embed sim). Tempos conferidos com a legenda em 23/09
   (0:43, 1:57, 2:44, 4:49, 5:55), e cada momento é contado com palavras
   nossas.
   A CARA: noite de café, almofada laranja, roxo da porta da Monica;
   Caprasimo + Outfit. A antiga era o kit cinema "episódio".
   Fila: FILA-LIVE-386.md · 275.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: uma régua; verdadeiro ou mentira e a palavra que você ouviu,
   com ▶ nas falas do clipe (legenda-dados.js); ligar o amigo ao problema;
   V: o bilhete da Monica na geladeira -> a regra; VI: o sofá falado (fala +
   placa; 6 almofadas); VII (era EXTRA): três amigos, a reação muda a conversa.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'cozinha', rot: 'I · Warm-up and Two Truths and a Lie', t: 'Before the clip: you and your friends, then six friends in New York.', p: 'Answer three questions about your life. Then find the lie about the friends.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Clip', t: 'Friends. The best food moments.', p: 'Answer first. Watch the clip. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'cozinha', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'mesa', rot: 'V · Should', t: 'A note on the fridge. Find the pattern.', p: 'Read the note out loud. Tap the words after should, shouldn’t and Should. Then finish the rule.' },
  { k: 'sofa', est: 'o', min: 7, img: 'capa', rot: 'VI · The Laugh Meter', t: 'Every friend on the couch needs advice. Make the audience laugh.', p: 'Read the problem. Say the advice out loud. Then tap Check.' },
  { k: 'conselho', est: 'o', min: 7, img: 'mesa', rot: 'VII · Ask the Couch', t: 'Three friends with a problem. How do you answer?', p: 'Read what your friend says. Pick how you answer. Then read the talk out loud.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · One Minute', t: 'One minute.', p: 'Minute.' }
];

var SERIE = 'Friends', ANO = '1994';
var YT = 'KCFYf4TJdN0', DUR = 440;

var ENCARTE = [
  ['The show', '<i>Friends</i> is an American sitcom (NBC, 1994–2004). Ten seasons, six friends in New York, and one orange couch in a coffee house.'],
  ['The friends', 'Rachel, Monica, Phoebe, Joey, Chandler and Ross. Monica is a chef. Joey is an actor who loves food more than anything.'],
  ['The food', 'In ten years they make terrible decisions about food: a dessert with beef in it, a turkey on a head, a cheesecake that isn’t theirs. And Joey never shares his food.']
];

var ANTES = [
  { q: 'Do you share your food? With who?', h: 'Yes, I share with … / No, never!' },
  { q: 'Your friend eats your fries. What should you say?', h: 'I should say …' }
];
var DEPOIS = [
  { q: 'Which food moment is the funniest? Why?', h: 'The … because …' },
  { q: 'Give Joey one piece of advice.', h: 'Joey, you should … / you shouldn’t …' }
];

var TRECHOS = [
  { k: 'The dessert', ini: 43, fim: 59, ouvir: 'What is wrong with Rachel’s dessert?', sentido: 'Rachel makes a big dessert for Thanksgiving, but two pages of the cookbook are stuck together, and there is beef in it.', gram: 'She <b>shouldn’t</b> put beef in a dessert.' },
  { k: 'The turkey', ini: 117, fim: 131, ouvir: 'Where is the turkey?', sentido: 'Monica comes in, and Joey has a whole turkey on his head. He wants to scare her, but now it’s stuck.', gram: 'He <b>should</b> take it off!' },
  { k: 'The cheesecake', ini: 164, fim: 181, ouvir: 'Whose cheesecake is it?', sentido: 'The cheesecake is for a neighbor downstairs, but Rachel and Chandler eat it, because it’s too good.', gram: 'They <b>should</b> give it back.' },
  { k: 'The chicken', ini: 289, fim: 301, ouvir: 'What does Joey ask again and again?', sentido: 'Joey goes to get chicken and asks his friend if he wants some, again and again. The answer is always no.', gram: '<b>Should</b> he stop asking?' },
  { k: 'The sandwich', ini: 355, fim: 371, ouvir: 'Why is Ross angry?', sentido: 'Somebody at work eats Ross’s sandwich. For his friends it is just a sandwich. For Ross, it was the best part of his life.', gram: 'Ross <b>shouldn’t</b> shout at work.' }
];

var TRAPS = [
  ['No to after should', 'You should to share your fries.', 'You <b>should share</b> your fries.', 'should + verb, nothing else'],
  ['Should never changes', 'Joey shoulds take it off.', 'Joey <b>should take</b> it off.', 'I, you, he, they: should'],
  ['The negative', 'You don’t should eat it.', 'You <b>shouldn’t</b> eat it.', 'should not = shouldn’t'],
  ['The question', 'Do I should share?', '<b>Should I</b> share?', 'Should I…? Should we…?']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'You <b>should share</b> your fries.<br>I, you, he, they: <b>should</b> · no to, no -s<br>You <b>shouldn’t eat</b> it · should + not = shouldn’t<br><b>Should I</b> share? <b>Should we</b> order?';
/* III · antes: uma régua */
var REGUA_A = { formato: 'regua', titulo: 'Before you watch', frase: 'If a friend eats your fries, you should say something.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why: You should … because … / You shouldn’t … because …' };
/* III · durante: verdadeiro ou mentira e a palavra que você ouviu, cada um no minuto do clipe (legenda-dados.js) */
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'The dessert is called a trifle.', t: true, tm: '0:19' },
  { f: 'There is chicken in the trifle.', t: false, tm: '0:31', c: 'It says: “beef sauteed with peas and onions.”' },
  { f: 'Joey says he put the turkey on his head to scare Chandler.', t: true, tm: '1:24' },
  { f: 'Somebody says the turkey is supposed to be funny.', t: false, tm: '2:01', c: 'It says: “It’s not supposed to be funny. It’s supposed to be scary.”' }
] };
var VD_SOM = { formato: 'som', itens: [
  { a: 'Will you serve the ', par: ['dessert', 'desert'], c: 0, b: ' already?', t: '0:11' },
  { a: 'I can’t! It’s ', par: ['stuck', 'stock'], c: 0, b: '!', t: '2:07' },
  { a: 'Because it’s too ', par: ['delicious', 'delicate'], c: 0, b: '.', t: '3:00' }
] };
/* III · depois: ligar o amigo ao problema; dois toques de opinião */
var VD_LIGA = { formato: 'liga', titulo: 'Who has the problem? Match them.', pares: [
  ['Rachel', 'makes a trifle with beef'], ['Joey', 'has a turkey on his head'], ['Chandler', 'eats the neighbor’s cheesecake'], ['Monica', 'needs the turkey for her parents’ house']
] };
var VD_ESC = { formato: 'escolhe', titulo: 'What should they do? Tap one, then say the whole sentence.', itens: [
  { p: 'Chandler ate the cheesecake. What should he do?', o: ['Give it back', 'Say sorry to Mrs. Braverman', 'Buy a new one'], c: -1, d: 'Say it: He should … / He shouldn’t …' },
  { p: 'Joey has a turkey on his head. What should he do first?', o: ['Ask for help', 'Stay calm', 'Call Monica'], c: -1, d: 'Say it: He should … / He shouldn’t …' }
] };
/* V · o bilhete da Monica na geladeira → a regra */
var CARTA = { de: 'On the fridge · from Monica to the gang',
  txt: 'Joey, you should [[share]] your fries. You shouldn’t [[take]] food from my plate. Rachel should [[read]] the cookbook before she cooks! Chandler should [[give]] the cheesecake back. Should [[we]] call Mrs. Braverman? Should [[I]] cook the turkey again?',
  assina: 'Monica' };
var REGRA = [
  { a: 'You should ', par: ['share', 'to share', 'shares'], c: 0, b: ' your fries. (no to, no -s)' },
  { a: 'He ', par: ['should', 'shoulds'], c: 0, b: ' take it off. (should never changes)' },
  { a: 'You ', par: ['shouldn’t', 'don’t should'], c: 0, b: ' eat it.' },
  { a: '', par: ['Should I', 'Do I should'], c: 0, b: ' share my fries? (a question)' },
  { a: 'Should we ', par: ['order', 'to order'], c: 0, b: ' more fries?' }
];
/* VII · três amigos: a reação muda o que o amigo responde */
var CS = [
  { k: 'cs1', titulo: 'Friend 1 · The neighbor', quem: 'Friend', fala: '“My neighbor plays loud music at night. I can’t sleep.”', reacoes: [
    ['Be direct', 'You should knock on his door and talk to him.', 'Good idea. I should do it tomorrow.'],
    ['Be gentle', 'Maybe you should leave him a nice note.', 'A note? He shouldn’t be angry with a note.'],
    ['Be funny', 'You shouldn’t buy earplugs. You should buy a drum!', 'Ha! My head hurts just thinking about it.']] },
  { k: 'cs2', titulo: 'Friend 2 · English', quem: 'Friend', fala: '“I want to speak English fast. What should I do?”', reacoes: [
    ['Watch series', 'You should watch series in English every day.', 'Every day? OK. Which series should I start with?'],
    ['Talk more', 'You should talk to your teacher every week. You shouldn’t be shy!', 'Good. I should speak even when I make mistakes.'],
    ['Read aloud', 'You should read short stories out loud.', 'That sounds easy. Should I read in the morning?']] },
  { k: 'cs3', titulo: 'Friend 3 · The tourist', quem: 'Tourist', fala: '“I am in your city for one day. What should I see?”', reacoes: [
    ['The old center', 'You should see the old center. You shouldn’t take a taxi at six p.m.', 'Thanks! Should I walk, then?'],
    ['The food', 'You should try the street food. You shouldn’t eat too much!', 'Impossible! I always eat too much.'],
    ['The museum', 'You should visit the museum in the morning. It is quiet.', 'Perfect. Should I buy a ticket online?']] }
];

/* o sofá: o gesto forte */
var AMIGOS = [
  { quem: 'Rachel', pista: '“There’s beef in my dessert.” · put beef in a dessert · NO', resp: 'You <b>shouldn’t put</b> beef in a dessert.', riso: 'Big laugh!', depois: 'What should you never put in a dessert?' },
  { quem: 'Joey', pista: '“The turkey is stuck on my head!” · take it off · YES', resp: 'You <b>should take</b> the turkey off your head.', riso: 'The audience screams!', depois: 'What is the funniest thing a friend did at a party?' },
  { quem: 'Chandler', pista: '“We ate the neighbor’s cheesecake…” · give it back · YES', resp: 'You <b>should give</b> the cheesecake back.', riso: 'A long laugh.', depois: 'Did you ever eat food that wasn’t yours?' },
  { quem: 'Joey', pista: '“My date wants my fries.” · I · share my food? · a question', resp: '<b>Should I share</b> my food?', riso: '“Joey doesn’t share food!”', depois: 'Do you share your food on a date?' },
  { quem: 'Ross', pista: '“Somebody ate my sandwich at work!” · Ross · shout at his boss · NO', resp: 'Ross <b>shouldn’t shout</b> at his boss.', riso: 'Laughs and applause.', depois: 'What should you do when you are angry at work?' },
  { quem: 'Monica', pista: '“Thanksgiving dinner has to be perfect!” · Monica · relax · YES', resp: 'Monica <b>should relax</b>. It’s only a dinner.', riso: 'Everybody laughs.', depois: 'Who in your family should relax more?' }
];
var RECUSA = {
  to: 'After should / shouldn’t: no to. should take.',
  s: 'Should never changes, and the verb has no -s: he should take.',
  dont: 'The negative of should is shouldn’t.',
  passado: 'After should: the base verb. should give.',
  ing: 'After should: the base verb (no -ing). should relax.',
  do: 'Questions: Should I…? (no do).',
  pergunta: 'Questions: Should comes first. Should we…?'
};

var CONSELHOS = [
  { k: 'Your friend', h: 'My friend is always late. What should I do?', ex: 'You should talk to him. You shouldn’t wait for an hour!' },
  { k: 'Your sister', h: 'My sister wants to quit her job. Should she?', ex: 'She should find a new job first.' },
  { k: 'A student', h: 'I want to speak English fast. What should I do?', ex: 'You should watch series in English every day.' },
  { k: 'Your neighbor', h: 'My neighbor plays loud music at night.', ex: 'You should knock on his door and talk to him.' },
  { k: 'A tourist', h: 'I am in your city for one day. What should I see?', ex: 'You should see the old center. You shouldn’t take a taxi at 6 p.m.' },
  { k: 'You', h: 'Your problem this week. Ask the teacher: Should I…?', ex: 'Should I buy a new phone or fix my old one?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, sf: { n: 0, esc: -1 } };

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
  return '<div class="fr-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o medidor de risada da plateia em cima (meio círculo com ponteiro) e o sofá laranja embaixo, com oito almofadas, uma por amigo */
function sofa(feitas, atual, nova) {
  var N = AMIGOS.length, ang = -90 + 180 * feitas / N;
  var marcas = '';
  for (var i = 0; i <= N; i++) { var a = (-90 + i * 180 / N) * Math.PI / 180; marcas += '<line x1="' + (120 + 84 * Math.sin(a)).toFixed(1) + '" y1="' + (120 - 84 * Math.cos(a)).toFixed(1) + '" x2="' + (120 + 96 * Math.sin(a)).toFixed(1) + '" y2="' + (120 - 96 * Math.cos(a)).toFixed(1) + '" class="' + (i <= feitas && i ? 'on' : '') + '"/>'; }
  var medidor = '<svg class="fr-medidor" viewBox="0 0 240 132" aria-hidden="true"><path d="M20 120 A100 100 0 0 1 220 120" class="fr-arco"/>' + marcas
    + '<g class="fr-ponteiro' + (nova ? ' novo' : '') + '" style="transform:rotate(' + ang + 'deg)"><line x1="120" y1="120" x2="120" y2="36"/></g><circle cx="120" cy="120" r="9" class="fr-eixo"/><text x="20" y="132">quiet</text><text x="220" y="132" text-anchor="end">roaring</text></svg>';
  var alm = AMIGOS.map(function (a, i) {
    var cls = i < feitas ? (nova && i === feitas - 1 ? ' ok novo' : ' ok') : (i === atual ? ' vez' : '');
    return '<span class="fr-alm' + cls + '"><small>' + a.quem + '</small></span>';
  }).join('');
  return '<div class="fr-palco vd" role="img" aria-label="The laugh meter: ' + feitas + ' of ' + N + ' friends helped">' + medidor
    + (nova && feitas ? '<p class="fr-riso">' + AMIGOS[feitas - 1].riso + '</p>' : '<p class="fr-riso calmo">' + (feitas >= N ? 'The audience is on its feet!' : 'The audience is waiting…') + '</p>')
    + '<div class="fr-sofa"><i class="fr-braco"></i><div class="fr-assentos">' + alm + '</div><i class="fr-braco"></i></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · should · shouldn’t · Should I…?</span><h1>Joey Doesn’t Share Food</h1>'
    + '<p class="banda">' + SERIE + ' · ' + ANO + '</p>'
    + '<p class="sub">Six friends, one orange couch, and ten years of terrible decisions about food. Somebody has to give these people advice. Tonight, it’s you, and the audience is listening.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Sit on the couch</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r fr-foto"><img src="' + img('capa') + '" alt="A cozy coffee house at night with a big orange couch and coffee mugs"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="fr-encarte vd"><div class="fr-capinha"><img src="' + img('cozinha') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>Monica’s kitchen</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="fr-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Who is the Joey in your group of friends? What do they always do?</h2></div>' + mostra('enc', 'My friend Paulo. He always eats my food and never pays!', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', REGUA_A) + '</div>'
    + '<div class="lado-l"><div class="fr-selo vd"><b>' + SERIE + '</b><small>the best food moments · we watch the first part</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the clip now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="fr-video"><div class="fr-vcol">' + iframe(YT, SERIE + ' · food moments', '&end=205') + '<small class="fr-cred">' + SERIE + ' · official clip (HBO Max) · it stops at 3:25 · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vm', VD_VM) + FM.ex('som', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the clip</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('liga', VD_LIGA) + '</div><div class="lado-l">' + FM.ex('esc', VD_ESC) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="fr-video"><div class="fr-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="fr-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="fr-sentido">' + x.sentido + '</span><span class="fr-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="fr-centro"><p class="fr-dica">Tap a frame to open that moment of the clip.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the words after should, shouldn’t and Should', pronta: 'The rule is ready. It stays in the corner on the next page.' });
};

R.sofa = function (c) {
  return cab(c) + FM.fala('amigo', AMIGOS.map(function (a) { return { pista: '<span class="ano">' + a.quem + '</span>' + a.pista, resp: a.resp, depois: a.depois }; }), {
    rotulo: 'Friend', prox: 'Next friend', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + sofa(feitas, atual, atual >= 0 ? nova : 0) + '</div>'; },
    fim: 'The couch is full and the audience loves you. Now tell the teacher your three best pieces of advice of the night.'
  });
};

R.conselho = function (c) {
  return cab(c) + comPlaca(CS.map(function (x) { return FM.ex(x.k, { formato: 'reacao', titulo: x.titulo, quem: x.quem, fala: x.fala, reacoes: x.reacoes }); }).join(''), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="fr-centro"><p class="fr-dica">One minute.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'mentira', rot: 'I · Two Truths and a Lie', t: 'Before the clip: food, and a lie.', p: 'The teacher reads three sentences. Two are true. Which one is the lie?',
  q: 'The teacher’s three sentences about food. One is a lie. Which one?',
  frases: ['I never share my dessert.', 'I can cook a whole turkey.', 'I ate pizza for breakfast last week.'], mentira: 1,
  depois: 'Now you: say two true sentences and one lie about food. The teacher finds the lie.',
  ex: 'I hate chocolate. I eat rice every day. I can make bread.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'minuto', rot: 'VIII · One Minute', t: 'One minute of advice.', p: 'Pick a topic. Talk for one minute with should and shouldn’t. Then the teacher.',
  temas: [
    { t: 'Advice for a first date', ajuda: 'You should… You shouldn’t… Should you share…?' },
    { t: 'Advice for a tourist in your city', ajuda: 'You should visit… You shouldn’t eat…' },
    { t: 'Advice for Joey', ajuda: 'Joey, you should… You shouldn’t…' }
  ],
  palavras: ['should', 'shouldn’t', 'Should I…?', 'I think', 'maybe', 'never'] };
/*FIM@@*/
