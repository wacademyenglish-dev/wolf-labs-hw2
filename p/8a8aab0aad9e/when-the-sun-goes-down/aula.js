/* ============================================================
   FROM · THE TOWN RULES · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · zero conditional: if / when + presente, presente (a regra
   que é sempre verdade): when the sun goes down, the creatures come out.
   Erros: sem o -s da terceira pessoa (the sun go down), will depois de
   when / if (when the sun will go down), passado numa regra (if you
   opened… they come), -s no lugar errado (they comes), don’t can,
   contínuo numa regra (is staying), doesn’t com you, not sem don’t,
   What does happen…? (pergunta com o sujeito what).
   Catálogo WOLFLIX Live (07/10): família TERROR, modo SOBREVIVÊNCIA.
   A tela forte: a placa da cidade e o sol. Em cima, o horizonte da
   floresta, e o sol que desce um degrau a cada regra; o céu esfria do
   laranja ao azul da noite. Embaixo, a placa de madeira das regras:
   cada frase certa pinta uma regra nela. Na oitava, o sol some, a placa
   inteira está escrita e só o talismã brilha.
   O AQUECIMENTO (aquece.js): a pilha, termine a frase. O FECHAMENTO
   (final.js): um minuto falando das regras.
   O VÍDEO: pDHqAj4eJcM (trailer da 1ª temporada, Rotten Tomatoes TV,
   3:26, idade 0, embed sim). Terror: criaturas sorrindo, uma janela,
   gritos, um “God damn it” rápido. Tempos lidos da legenda automática
   (07/10), contados com palavras nossas.
   A CARA: crepúsculo de cidade pequena, laranja do último sol, azul da
   noite; Alfa Slab One no título e na placa, Bitter no texto. A antiga
   era a lanterna de porta em porta.
   Fila: FILA-LIVE-386.md · 301.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: uma régua antes; verdadeiro ou mentira e a palavra que você
   ouviu, com ▶ nas falas do trailer (legenda-dados.js); depois, duas escolhas
   de sentido. V: o aviso do xerife (a carta) → completar a regra. VI: a placa
   e o sol, agora com SEIS regras (fala + Check, a placa de regra no canto).
   VII (era EXTRA): três pessoas perguntam, a reação muda a conversa.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'estrada', rot: 'I · Warm-up and The Town Rules', t: 'Before the trailer: your rules, then the town’s rules.', p: 'Answer three questions about your life. Then read the rules of the town and say if you could live with them.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'From. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'estrada', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'talisma', rot: 'V · The Sheriff’s Radio', t: 'The sheriff and you, before dark. Some words are lit.', p: 'Read it together. Tap the lit words: why this form? Then say a rule of your own.' },
  { k: 'regra', est: 'f', min: 7, img: 'casa', rot: 'VI · The Sheriff’s Notice', t: 'The sheriff nailed a notice on the door. Finish the rule.', p: 'Read the notice out loud. Tap the verbs in the present. Then finish the rule.' },
  { k: 'placa', est: 'o', min: 7, img: 'capa', rot: 'VII · The Town Rules', t: 'Six rules on the board. Every rule brings the night closer.', p: 'Read the clue. Say the rule out loud. Then tap Check.' },
  { k: 'suas', est: 'o', min: 7, img: 'casa', rot: 'VIII · Your Rules', t: 'Three people ask you. How do you answer?', p: 'Pick how you answer. Then read the talk out loud.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · One Minute', t: 'One minute.', p: 'One minute.' }
];

var FILME = 'From', ANO = '2022';
var YT = 'pDHqAj4eJcM', DUR = 206;

var ENCARTE = [
  ['The show', '<i>From</i> is an MGM+ horror series (2022), with Harold Perrineau as Boyd, the sheriff of a very strange town.'],
  ['The town', 'A family drives off the highway, finds a tree on the road, and ends up in a small town. They try to leave, but every road brings them back. Everyone in town arrived the same way.'],
  ['The rules', 'In the day, the town is quiet. When the sun goes down, creatures with human faces come out of the forest and smile at the windows. If you let them in, you die. So the town lives by rules.']
];

var ANTES = [
  { q: 'Do you like horror series? Which ones have you watched?', h: 'Yes, I like … / No, I never watch …' },
  { q: 'Have you ever been lost on a road? What happened?', h: 'Yes, once I …' }
];
var DEPOIS = [
  { q: 'What happens in this town when the sun goes down?', h: 'When the sun goes down, …' },
  { q: 'Would you stay in the house or try to leave? Why?', h: 'I would … because …' }
];

var TRECHOS = [
  { k: 'The detour', ini: 0, fim: 50, ouvir: 'Why do they leave the highway?', sentido: 'A family finds trees on the road after a “storm”, takes a detour and asks a man for directions. He says: stay on the road.', gram: '<b>If</b> you <b>leave</b> the highway, you <b>get</b> lost.' },
  { k: 'In circles', ini: 50, fim: 72, ouvir: 'Where does the road take them?', sentido: 'They drive and drive, and the road takes them back to the same place. They are going in circles.', gram: '<b>When</b> they <b>drive</b> out, the road <b>brings</b> them back.' },
  { k: 'Everyone sees the tree', ini: 72, fim: 100, ouvir: 'What does the woman say about the town?', sentido: 'She says everyone in the town has been exactly where they are now. Everyone sees the tree. They didn’t come here: they were brought.', gram: '<b>If</b> you <b>arrive</b> here, you <b>stay</b> here.' },
  { k: 'After dark', ini: 100, fim: 120, ouvir: 'What must they do at night?', sentido: 'The sheriff explains what happens after dark: lock the door, nail the windows shut, and the family is safe. Safe from what?', gram: '<b>When</b> it <b>gets</b> dark, everybody <b>stays</b> inside.' },
  { k: 'Break the rules', ini: 120, fim: 145, ouvir: 'What happens when someone breaks the rules?', sentido: 'A familiar voice at the window asks to come in. This is what happens when you break the rules. (Horror, quick and dark.)', gram: '<b>If</b> you <b>open</b> the door, they <b>come</b> in.' }
];

var TRAPS = [
  ['The -s', 'When the sun go down, the creatures come out.', 'When the sun <b>goes</b> down, the creatures come out.', 'he / she / it / the sun: verb + s'],
  ['No will in a rule', 'When the sun will go down, they come out.', '<b>When</b> the sun <b>goes</b> down, they come out.', 'if / when + present'],
  ['Present, both sides', 'If you opened the door, they come in.', 'If you <b>open</b> the door, they <b>come</b> in.', 'always true: present, present'],
  ['The question', 'What does happen if you break the rules?', '<b>What happens</b> if you break the rules?', 'what = the subject: no does']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'if / when + <b>present</b>, <b>present</b><br>the sun <b>goes</b> · it <b>gets</b> (+ s)<br>no <b>will</b> after if / when<br><b>What happens</b> if…?';
/* III · antes: uma régua */
var VD_REG = { formato: 'regua', titulo: 'Before you watch', frase: 'If a town has strict rules, the people in it are safer.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why: When people follow rules, … / If nobody follows the rules, …' };
/* III · durante: verdadeiro ou mentira e a palavra que você ouviu (tempos do trailer inteiro) */
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'The family says: “We didn’t miss the sign.”', t: true, tm: '0:24' },
  { f: 'A woman says: “Everyone sees the bird.”', t: false, tm: '1:31', c: 'It says: “Everyone sees the tree.”' },
  { f: 'A man says: “We were brought.”', t: true, tm: '1:41' },
  { f: 'The sheriff says: “Open your door, nail your window shut.”', t: false, tm: '1:54', c: 'It says: “Lock your door, nail your window shut.”' }
] };
var VD_SOM = { formato: 'som', itens: [
  { a: 'Maybe we’ll use the sign for the ', par: ['hallway', 'highway'], c: 1, b: '.', t: '0:24' },
  { a: 'Everyone sees the ', par: ['tree', 'three'], c: 0, b: '.', t: '1:31' },
  { a: 'Kevin, we are ', par: ['struck', 'stuck'], c: 1, b: '.', t: '1:37' }
] };
/* III · depois: duas escolhas de sentido */
var VD_ESC = { formato: 'escolhe', titulo: 'After the trailer: pick the answer, then say the rule.', itens: [
  { p: 'Why does the sheriff say: lock the door and nail the window?', o: ['To stay safe at night', 'To keep the rain out', 'To get a better view'], c: 0, tm: '1:54', d: 'Say it: When the sun goes down, the creatures come out. If you open the door, they come in.' },
  { p: 'What happens when the family tries to drive away?', o: ['They find a hotel', 'The road brings them back', 'They arrive home'], c: 1, tm: '0:59', d: 'Say it: If someone leaves town, the road brings them back.' }
] };
/* V · o aviso do xerife (texto nosso) → a regra */
var CARTA = { de: 'NOTICE · Town of From · Sheriff Boyd',
  txt: 'Welcome. Please read the rules. When the sun [[goes]] down, the creatures [[come]] out. When it [[gets]] dark, everybody [[stays]] inside. If you [[open]] the door, they [[come]] in.' };
var REGRA = [
  { a: 'A rule that is always true: when the sun ', par: ['goes', 'will go'], c: 0, b: ' down, the creatures come out.' },
  { a: 'It, he, she, the sun: verb + s. When it ', par: ['get', 'gets'], c: 1, b: ' dark, everybody stays inside.' },
  { a: 'Present on both sides: if you ', par: ['open', 'opened'], c: 0, b: ' the door, they come in.' },
  { a: 'The negative: if you ', par: ['doesn’t nail', 'don’t nail'], c: 1, b: ' your window, they get in.' },
  { a: 'The question: What ', par: ['happens', 'does happen'], c: 0, b: ' if you break the rules?' }
];
/* VII · três pessoas perguntam: a reação muda a conversa */
var CS = [
  { k: 'cs1', titulo: 'Person 1 · A new family', quem: 'Family', fala: '“It’s getting dark. What do we do?”', reacoes: [
    ['Stay in', 'When the sun goes down, lock the door and stay inside.', 'OK. We stay inside. Thank you!'],
    ['Warn', 'If you open the door, they come in. So don’t open it!', 'We don’t open it. Never.'],
    ['Calm', 'When it gets dark, the town is quiet. If you sleep, nothing happens.', 'Really? OK. We sleep.']] },
  { k: 'cs2', titulo: 'Person 2 · A friend', quem: 'Friend', fala: '“What do you do when you can’t sleep?”', reacoes: [
    ['Milk', 'If I can’t sleep, I drink warm milk.', 'Warm milk? Does it work?'],
    ['Phone', 'When I can’t sleep, I check my phone.', 'Me too. It never helps!'],
    ['Sheep', 'If I can’t sleep, I count sheep.', 'Sheep? I count the hours!']] },
  { k: 'cs3', titulo: 'Person 3 · The sheriff', quem: 'Sheriff', fala: '“What happens if someone breaks a rule?”', reacoes: [
    ['Honest', 'If you break a rule, they come in. It always happens.', 'Yes. Everybody knows.'],
    ['Ask', 'What happens if I break just one rule?', 'One rule is enough.'],
    ['Brave', 'If I break a rule, I leave town in the morning!', 'The road brings you back.']] }
];

/* a placa e o sol: o gesto forte */
var REGRAS = [
  { pista: 'when · the sun · <b>go</b> down · the creatures · <b>come</b> out', curta: 'Sun down: they come out.', resp: 'When the sun <b>goes</b> down, the creatures come out.', depois: 'What happens in your city when the sun goes down?' },
  { pista: 'if · you · <b>open</b> the door · they · <b>come</b> in', curta: 'Open the door: they come in.', resp: 'If you open the door, they <b>come</b> in.', depois: 'What happens if you open the door of your house at night?' },
  { pista: 'if · someone · <b>leave</b> town · the road · <b>bring</b> them back', curta: 'Leave town: the road brings you back.', resp: 'If someone <b>leaves</b> town, the road <b>brings</b> them back.', depois: 'When you leave your city, what do you miss first?' },
  { pista: 'if · you · <b>not nail</b> your window shut · they · get in', curta: 'No nails: they get in.', resp: 'If you <b>don’t nail</b> your window shut, they get in.', depois: 'What happens if you don’t close your window in your city?' },
  { pista: '<b>what · happen</b> · if · you · break the rules? · a question', curta: 'Break a rule: ask what happens.', resp: '<b>What happens</b> if you break the rules?', depois: 'Ask the teacher: “What happens if you break the rules in your house?”' },
  { pista: 'when · I · <b>get</b> home · I · lock the door', curta: 'Home: lock the door.', resp: 'When I <b>get</b> home, I lock the door.', depois: 'What do you always do when you get home?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, pl: { n: 0, esc: -1 } };

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
  return '<div class="fr-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o horizonte e a placa: o sol desce um degrau por regra e o céu esfria; a placa ganha uma linha pintada por regra; no fim, só o talismã brilha */
function placa(feitas, atual, nova) {
  var fim = feitas >= REGRAS.length, f = feitas / REGRAS.length;
  var sy = 36 + f * 52, ceu = 'rgb(' + Math.round(74 - 64 * f) + ',' + Math.round(40 - 24 * f) + ',' + Math.round(26 + 8 * f) + ')';
  var linhas = REGRAS.map(function (r, i) {
    var cls = i < feitas ? (nova && i === feitas - 1 ? ' ok novo' : ' ok') : (i === atual ? ' vez' : '');
    return '<li class="fr-linha' + cls + '"><b>' + (i + 1) + '</b><span>' + (i < feitas ? r.curta : i === atual ? '· · ·' : '') + '</span></li>';
  }).join('');
  return '<div class="fr-quadro vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The town rules: ' + feitas + ' of ' + REGRAS.length + ' rules, the sun is going down">'
    + '<svg class="fr-ceu" viewBox="0 18 400 78" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="400" height="96" style="fill:' + ceu + '"/>'
    + '<circle class="fr-sol' + (nova ? ' desce' : '') + '" cx="200" cy="' + sy.toFixed(1) + '" r="15" style="opacity:' + (1 - f * .85).toFixed(2) + '"/>'
    + '<path class="fr-mata" d="M0 96V70l14-14 10 10 12-20 12 18 10-8 14 16 12-22 14 20 8-6 14 12 12-18 12 16 10-10 14 14 12-24 14 22 10-8 12 12 14-18 12 16 12-10 10 12 14-20 12 18 10-6 14 14 10-12 12 10 14-16 10 14 14-22 12 20 10-6 V96z"/>'
    + (fim ? '<circle class="fr-talisma" cx="200" cy="58" r="5"/>' : '') + '</svg>'
    + '<div class="fr-tabua"><p class="fr-titulo">The Rules</p><ol class="fr-lista">' + linhas + '</ol></div>'
    + '<p class="fr-legenda">' + (fim ? 'The sun is down. Lock the door.' : feitas + ' of ' + REGRAS.length + ' rules · the sun is going down') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · zero conditional · if, when + present</span><h1>When the Sun Goes Down</h1>'
    + '<p class="banda">' + FILME + ' · MGM+</p>'
    + '<p class="sub">There is a town you can’t drive out of, and it has rules that are always true. When the sun goes down, they come out. If you open the door, they come in. Tonight you paint the rules on the board before the last light is gone.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Read the rules</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r fr-foto"><img src="' + img('capa') + '" alt="A small town main street at dusk, the last orange sun behind a dark forest"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="fr-encarte vd"><div class="fr-capinha"><img src="' + img('estrada') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The tree on the road</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="fr-centro"><div class="pergunta vd ja"><small>Talk</small><h2>The town has rules. What happens when people don’t follow rules in your city?</h2></div>' + mostra('enc', 'When people don’t follow the traffic rules, there are accidents.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REG) + '</div>'
    + '<div class="lado-l"><div class="fr-selo vd"><b>' + FILME + '</b><small>the season 1 trailer · horror, scary faces, one bad word · three and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="fr-video"><div class="fr-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="fr-cred">' + FILME + ' · season 1 trailer (MGM+) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vm', VD_VM) + FM.ex('som', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="fr-centro">' + FM.ex('esc', VD_ESC) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="fr-video"><div class="fr-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="fr-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="fr-sentido">' + x.sentido + '</span><span class="fr-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="fr-centro"><p class="fr-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the verbs in the present.', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.placa = function (c) {
  return cab(c) + FM.fala('placa', REGRAS.map(function (r) { return { pista: r.pista, resp: r.resp, depois: r.depois }; }), {
    rotulo: 'Rule', prox: 'Next rule', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + placa(feitas, atual, atual >= 0 ? nova : 0) + '</div>'; },
    fim: 'The board is full and the sun is down. Now be the sheriff: tell a new family the rules, one by one.'
  });
};

R.suas = function (c) {
  return cab(c) + comPlaca(CS.map(function (x) { return FM.ex(x.k, { formato: 'reacao', titulo: x.titulo, quem: x.quem, fala: x.fala, reacoes: x.reacoes }); }).join(''), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="fr-centro"><p class="fr-dica">One minute.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'pilha', rot: 'I · Finish It', t: 'Before the trailer: the rules of your own life.', p: 'Turn one card at a time and finish it out loud. Then the teacher finishes it too.', rotulo: 'Finish it',
  depois: 'Which card is the most true for you? Say it again.',
  itens: [
    { q: 'If I drink coffee at night, …', ex: '… I can’t sleep.' },
    { q: 'When I am hungry, …', ex: '… I get angry. Everybody knows.' },
    { q: 'If it rains in my city, …', ex: '… the traffic is terrible.' },
    { q: 'When I get home after work, …', ex: '… I take off my shoes and lie on the sofa.' },
    { q: 'If I don’t sleep eight hours, …', ex: '… I feel terrible all day.' },
    { q: 'When the sun goes down where I live, …', ex: '… the streets get quiet.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'minuto', rot: 'VIII · One Minute', t: 'One minute of rules.', p: 'Pick a topic. Talk for one minute with if / when + present. Then the teacher.',
  temas: [
    { t: 'The rules of your house', ajuda: 'When you come in, you… If you…, my mother… When it is late, we…' },
    { t: 'What always happens when you are stressed', ajuda: 'When I am stressed, I… If I don’t…, I… When it gets bad, I…' },
    { t: 'How to survive one night in From', ajuda: 'When the sun goes down, you… If you hear…, you… If you open…, they…' }
  ],
  palavras: ['If …, …', 'When …', 'as soon as', 'always', 'never', 'don’t'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'The sheriff, at sunset. Tap the lit words.',
  falas: [
    { q: 'Sheriff', f: 'When the sun [[goes]] down, the creatures [[come]] out.' },
    { q: 'You', f: 'What [[happens]] if somebody [[stays]] outside?' },
    { q: 'Sheriff', f: 'If you [[don’t go]] home, they [[find]] you.' },
    { q: 'You', f: 'And if I [[hold]] the talisman?' },
    { q: 'Sheriff', f: 'Then you [[are]] safe. Always.' }
  ],
  porques: [
    'when + the present: the sun goes. No will. One thing (the sun): -s.',
    'The other half is the present too: they come. It is always true.',
    'What is the subject: what happens. No does.',
    'somebody is one person: stays, with -s.',
    'The no: don’t + a clean verb. Not “if you not go”.',
    'they: no -s. find.',
    'After I, the clean verb: hold. No will.',
    'A fact that is always true: you are safe.'
  ],
  nota: 'A rule that is always true: <b>if</b> or <b>when</b> + the present, and the present again. No <b>will</b>: <b>when the sun goes down</b>. Watch the <b>-s</b> with the sun, somebody and it.',
  uso: { p: 'Your turn. A rule in your house or your town that is always true. Use when or if.', molde: ['When …, …', 'If you …, …'], ex: 'When it rains, the streets flood. If you leave the door open, the dog runs out.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
