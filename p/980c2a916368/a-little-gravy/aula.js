/* ============================================================
   A LITTLE GRAVY, A FEW BEANS · THANKSGIVING FOR TWELVE · LIVE CLASS  05/10/2026
   Main series A2 · contável × incontável: a few / many / not many ·
   a little / much / not much · a lot of (os dois) · How much / How many
   O MUNDO (da aula velha): véspera de Thanksgiving, doze convidados, a
   lista de compras é um desastre; depois a mesa, com cada convidado
   pedindo algo. A CARA: a LISTA num bloco de papel ESCURO (linhas riscadas
   e reescritas) e a MESA redonda de doze pratos em CSS, que se enchem.
   Sem áudio nem vídeo. Fila: FILA-LIVE-386.md · 045.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'torta', rot: 'I · Your Holidays', t: 'Before the dinner: you and big family meals.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'lista', est: 'o', min: 7, img: 'sacola', rot: 'II · The Shopping List', t: 'The shopping list is wrong. Fix every line.', p: 'Tap a line. Read the clue. Say what you really need: how much, or how many?' },
  { k: 'regra', est: 'f', min: 6, img: 'despensa', rot: 'III · The Rule', t: 'Can you count it? That’s the whole question.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'mesa', est: 'o', min: 7, img: 'capa', rot: 'IV · Twelve Plates', t: 'Twelve guests, and everybody wants something.', p: 'Your teacher is the guest. Answer at once.' },
  { k: 'roda', est: 'o', min: 7, img: 'molho', rot: 'V · A Lot, a Little', t: 'Your life in quantities.', p: 'Pick a card. Answer with a lot of, a few, a little, not much or not many.' },
  { k: 'josie', est: 'o', min: 7, extra: 1, img: 'sacola', rot: 'VI · The Phone Call', t: 'Cousin Josie calls from the supermarket.', p: 'Your teacher is Josie. Tell her what you need.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'torta', rot: 'VII · Quick Check', t: 'Six quick lines from the kitchen.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · After Dinner', t: 'Write the list for your own party.', p: 'A lot of, a few, a little, not much, not many. The red line watches count / can’t count. It goes to your My notes.' }
];

var ABRE = [
  { k: 'THE BIG MEAL', q: 'What is the biggest family meal of the year for you?', fup: 'How many people come?', st: ['… dinner.', 'We are …'], ex: 'Christmas dinner. We are twenty people!' },
  { k: 'THE FOOD', q: 'What food is always on the table?', fup: 'And what is there a little of?', st: ['There is always a lot of …'], ex: 'There is always a lot of rice and a few kinds of salad.' },
  { k: 'LEFTOVERS', q: 'Do you like leftovers? What do you do with them?', fup: 'How much is left, usually?', st: ['Yes, … / No, …'], ex: 'Yes! There is always a lot of food left.' }
];
var FORMAS = [{ k: 'alot', t: 'A LOT OF' }, { k: 'few', t: 'A FEW / A LITTLE' }, { k: 'troca', t: 'A FEW GRAVY / MUCH BEANS', erro: 1 }, { k: 'pos', t: 'I HAVE MUCH …', erro: 1 }];

var NOTA = {
  incont: 'You can’t count it: a little, much, not much.', cont: 'You can count it: a few, many, not many.', of: 'No of after a few / a little. Only a lot of.',
  of2: 'a lot OF: three words.', plural: 'Count it: the plural, with s.'
};
var LISTA = [
  { k: 'GRAVY', ic: '🥣', errado: '100 bottles of gravy', pista: 'Twelve people. Gravy is a sauce: you can’t count it.', ops: [['We only need a little gravy.', 'ok'], ['We only need a few gravy.', 'incont'], ['We only need a few of gravy.', 'of']] },
  { k: 'GREEN BEANS', ic: '🫛', errado: '3 green beans', pista: 'Three beans for twelve people? You can count beans.', ops: [['We need a lot of green beans.', 'ok'], ['We need much green beans.', 'cont'], ['We need a lot green beans.', 'of2']] },
  { k: 'POTATOES', ic: '🥔', errado: 'no potatoes', pista: 'Mashed potatoes! You can count potatoes.', ops: [['We need a few more potatoes.', 'ok'], ['We need a little more potatoes.', 'cont'], ['We need a few more potato.', 'plural']] },
  { k: 'BUTTER', ic: '🧈', errado: '20 kilos of butter', pista: 'Butter: you can’t count it. Twenty kilos is too much!', ops: [['We don’t need much butter.', 'ok'], ['We don’t need many butter.', 'incont'], ['We don’t need a few butter.', 'incont']] },
  { k: 'CHAIRS', ic: '🪑', errado: '4 chairs', pista: 'Twelve guests. You can count chairs.', ops: [['We don’t have many chairs.', 'ok'], ['We don’t have much chairs.', 'cont'], ['We don’t have a little chairs.', 'cont']] },
  { k: 'RICE', ic: '🍚', errado: '2 grains of rice', pista: 'Rice: you can’t count it (only the grains!).', ops: [['We need a little rice.', 'ok'], ['We need a few rice.', 'incont'], ['We need a little rices.', 'plural']] },
  { k: 'NAPKINS', ic: '🧻', errado: '1 napkin', pista: 'One napkin for twelve? You can count napkins.', ops: [['There aren’t many napkins.', 'ok'], ['There isn’t much napkins.', 'cont'], ['There aren’t much napkins.', 'cont']] },
  { k: 'TIME', ic: '⏰', errado: '3 days to cook', pista: 'Thanksgiving is tomorrow! Time: you can’t count it.', ops: [['We don’t have much time!', 'ok'], ['We don’t have many time!', 'incont'], ['We don’t have many times!', 'incont']] }
];

var FITAS = [['YOU CAN COUNT IT', 'a few beans · not many chairs · How many?'], ['YOU CAN’T', 'a little gravy · not much time · How much?'], ['BOTH', 'a lot of beans · a lot of gravy']];
var ARMAS = [
  ['COUNT IT?', 'Can I have a few gravy?', 'Can I have a little gravy?', 'Gravy: you can’t count it. a little.'],
  ['NO OF', 'I need a few of potatoes.', 'I need a few potatoes.', 'No of after a few / a little. Only a lot of.'],
  ['POSITIVE', 'I have much time today.', 'I have a lot of time today.', 'Positive: a lot of. much / many: questions and negatives.'],
  ['HOW MUCH?', 'How many rice do you want?', 'How much rice do you want?', 'Can’t count it: How much.']
];

var MESA = [
  { k: 'AUNT MAY', diz: 'Is there much gravy left?', ini: 'No, there isn’t …', ops: [['No, there isn’t much. Just a little.', 'ok'], ['No, there aren’t many. Just a few.', 'incont'], ['No, there isn’t much. Just a few.', 'incont']] },
  { k: 'UNCLE BEN', diz: 'Can I have some beans?', ini: 'Sure! Here are …', ops: [['Sure! Here are a few beans.', 'ok'], ['Sure! Here is a little beans.', 'cont'], ['Sure! Here are a few of beans.', 'of']] },
  { k: 'LUCY', diz: 'How many potatoes did you cook?', ini: 'A lot! …', ops: [['A lot of potatoes! Twenty, I think.', 'ok'], ['Much potatoes! Twenty, I think.', 'cont'], ['A lot potatoes! Twenty, I think.', 'of2']] },
  { k: 'GRANDPA', diz: 'Is there any salt?', ini: 'Yes, there’s …', ops: [['Yes, there’s a little salt here.', 'ok'], ['Yes, there are a few salt here.', 'incont'], ['Yes, there’s a few salt here.', 'incont']] },
  { k: 'THE TWINS', diz: 'Do we have many cookies for dessert?', ini: 'No, we don’t have …', ops: [['No, we don’t have many. Only a few.', 'ok'], ['No, we don’t have much. Only a little.', 'cont'], ['No, we don’t have many. Only a little.', 'cont']] },
  { k: 'MARIA', diz: 'How much time do we have before the game?', ini: 'Not …', ops: [['Not much. About ten minutes.', 'ok'], ['Not many. About ten minutes.', 'incont'], ['Not a few. About ten minutes.', 'incont']] },
  { k: 'DAD', diz: 'Do you want a lot of pie, or a little?', ini: 'Just …', ops: [['Just a little pie, please. I’m full!', 'ok'], ['Just a few pie, please.', 'incont'], ['Just a little of pie, please.', 'of']] },
  { k: 'EVERYBODY', diz: 'Who helped you cook all this?', ini: 'A few … / Not many …', ops: [['A few friends helped me. Not many!', 'ok'], ['A little friends helped me.', 'cont'], ['A few friend helped me.', 'plural']] }
];

var RODA = [
  { k: 'FREE TIME', q: 'How much free time do you have this week?', ex: 'Not much. I have a lot of work.' },
  { k: 'FRIENDS', q: 'How many close friends do you have?', ex: 'Not many. A few very good ones.' },
  { k: 'COFFEE', q: 'How much coffee do you drink every day?', ex: 'A lot of coffee! Four cups.' },
  { k: 'SHOES', q: 'How many pairs of shoes do you have?', ex: 'A few. Maybe five.' },
  { k: 'APPS', q: 'How many apps are on your phone?', ex: 'A lot of apps. Too many!' },
  { k: 'MONEY', q: 'How much money do you spend on food every week?', ex: 'Not much. I cook at home.' }
];
var JOSIE = [
  { ela: 'Hi! I’m at the supermarket. Do you need any bread?', pede: 'Yes, please. We need a few … / We don’t have much …', resp: 'OK, two loaves. What else?' },
  { ela: 'What about drinks? Is there much juice?', pede: 'No, there isn’t much … / Just a little …', resp: 'I’ll get a lot of juice, then.' },
  { ela: 'And ice cream? How many boxes?', pede: 'Just a few … / Not many …', resp: 'Two boxes. Vanilla and chocolate.' },
  { ela: 'I only have a little money left. Is that OK?', pede: 'Of course! Don’t buy much …', resp: 'Perfect. See you in twenty minutes!' }
];
var QUIZ = [
  { a: 'Can I have ', b: ' gravy, please?', op: ['a little', 'a few', 'many'], nao: 'Gravy: can’t count it. a little.' },
  { a: 'We need ', b: ' potatoes.', op: ['a few', 'a little', 'much'], nao: 'Potatoes: count them. a few.' },
  { a: 'How ', b: ' guests are coming?', op: ['many', 'much', 'a lot'], nao: 'Guests: count them. How many.' },
  { a: 'We don’t have ', b: ' time.', op: ['much', 'many', 'a few'], nao: 'Time: can’t count it. much.' },
  { a: 'There are ', b: ' chairs in the garage.', op: ['a lot of', 'much', 'a little'], nao: 'Positive + chairs: a lot of.' },
  { a: 'I need a few ', b: '.', op: ['napkins', 'napkin', 'of napkins'], nao: 'a few + plural, no of.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, lista: { sel: -1, esc: {} }, mesa: { n: 0, esc: '' }, roda: { sel: -1, foi: {} }, josie: { n: 0, viu: {} }, quiz: { esc: {} } };

function mesa(cheios, agora) {
  var s = '<div class="mesa-r"><div class="toalha"><span>🦃</span></div>';
  for (var i = 0; i < 12; i++) { var a = (i * 30 - 90) * Math.PI / 180, x = 50 + 41 * Math.cos(a), y = 50 + 41 * Math.sin(a); s += '<span class="prato' + (i < cheios ? ' cheio' : '') + (i === agora ? ' agora' : '') + '" style="left:' + x + '%;top:' + y + '%">' + (i < cheios ? '🍽️' : '') + '</span>'; }
  return s + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THANKSGIVING FOR TWELVE</span><h1>A Little Gravy, <b>a Few Beans</b></h1>'
    + '<p class="sub">Twelve guests. <b>A lot of</b> turkey, <b>a few</b> beans, <b>a little</b> gravy … and <b>not much</b> time.</p>'
    + '<div class="chipsx"><span class="pilula">a few · many</span><span class="pilula">a little · much</span><span class="pilula">a lot of</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the kitchen</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-m">' + mesa(7, -1) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.lista = function (c) {
  var e = S.lista, x = e.sel >= 0 ? LISTA[e.sel] : null, n = 0;
  LISTA.forEach(function (_, i) { if (e.esc[i] === 'ok') n++; });
  var bloco = '<div class="bloco vd"><div class="bl-topo"><b>SHOPPING LIST</b><small>THANKSGIVING · 12 GUESTS</small></div>' + LISTA.map(function (l, i) {
    var ok = e.esc[i] === 'ok';
    return '<button type="button" class="linha-l' + (e.sel === i ? ' on' : '') + (ok ? ' feita' : '') + '" data-a="ls" data-n="' + i + '"><span class="ic">' + l.ic + '</span><s>' + l.errado + '</s>' + (ok ? '<em>' + l.ops[0][0] + '</em>' : '') + '</button>';
  }).join('') + '</div>';
  var lado = '<p class="dica-aluno">Tap a line on the list.</p>';
  if (x) {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="pede vd"><small>' + x.k + ' ' + x.ic + '</small><b>' + x.pista + '</b></div>' + (ok ? '<div class="balao vd"><small>THE NEW LINE</small><p>' + x.ops[0][0] + '</p></div>'
      : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="ls-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : ''));
  }
  return cab(c) + '<div class="mesa-g">' + bloco + '<div class="lado-l">' + lado + (n === 8 ? '<p class="aprova">Eight lines fixed. How do we know: a few or a little? The rule is next.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.mesa = function (c) {
  var e = S.mesa, n = e.n, fim = n >= MESA.length, lado;
  if (fim) lado = '<div class="pergunta vd"><small>DINNER IS SERVED</small><h2>Twelve happy plates. And a lot of leftovers for Friday!</h2></div>';
  else {
    var x = MESA[n], ok = e.esc === 'ok';
    lado = '<div class="balao vd"><small>' + x.k + '</small><p>“' + x.diz + '”</p></div>' + (ok ? '<div class="balao vd resp"><small>YOU</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="ms-prox">Next guest</button></div>'
      : '<p class="ini">' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="ms" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : ''));
  }
  return cab(c) + trilha(MESA, n) + '<div class="mesa-g"><div class="vd capa-m">' + mesa(Math.round(n * 1.5), fim ? -1 : Math.round(n * 1.5)) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.roda = function (c) {
  var e = S.roda, x = e.sel >= 0 ? RODA[e.sel] : null;
  return cab(c) + '<div class="mesa-g"><div class="cartoes-c">' + RODA.map(function (k, i) { return '<button type="button" class="cartao-c' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feito' : '') + '" data-a="rd" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + k.k + '</b></button>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('rd' + e.sel, ['A lot of …', 'A few. / A little.', 'Not much. / Not many.'], []) + mostra('rd' + e.sel, x.ex, 1) : '<p class="dica-aluno">Pick a card. Your teacher answers too.</p>') + '</div></div>';
};

R.josie = function (c) {
  var e = S.josie, n = e.n, fim = n >= JOSIE.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('sacola') + ')"><span>COUSIN JOSIE · AT THE SUPERMARKET</span></div>';
  if (fim) return cab(c) + '<div class="mesa-g">' + foto + '<div class="lado-l">' + follow('THE BIG QUESTION', 'What do you need a lot of on a holiday? And a little of?', ['You need a lot of …', '… and just a little …'], ['time', 'food', 'patience', 'chairs'], 'big', mostra('big', 'You need a lot of food and a lot of patience, and just a little sleep!', 1)) + '</div></div>';
  var x = JOSIE[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-g">' + foto + '<div class="lado-l">' + trilha(JOSIE, n) + '<div class="balao vd"><small>JOSIE</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>YOUR ANSWER</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>JOSIE</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="jo-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="jo-viu">Answered · Josie replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. One last list: yours.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'For my party we need a lot of …\nWe don’t need much …', 'Your party list',
    ['a lot of ', 'a few ', 'a little ', 'not much ', 'not many ', 'How much ', 'How many '], ['YOUR OWN PARTY', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write the list: count it, or not?' : 'The shopping list for your own party.'])
    + '<div class="lado-fim"><div class="grande vd"><span>count it: <u>a few</u> · <u>many</u> · <u>not many</u></span><span>can’t: <u>a little</u> · <u>much</u> · <u>not much</u></span><span>both: <u>a lot of</u></span><span>positive: a lot of (not much)</span></div>'
    + mostra('fim', 'For my party we need a lot of pizza and a few bottles of soda.<br>We need a little ice. We don’t need much cake.<br>Not many people are coming: twelve.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.ls = function (b, n) { S.lista.sel = n; };
TOQUES['ls-v'] = function (b, n, v) { S.lista.esc[S.lista.sel] = v; };
TOQUES.ms = function (b, n, v) { S.mesa.esc = v; };
TOQUES['ms-prox'] = function () { S.mesa = { n: S.mesa.n + 1, esc: '' }; };
TOQUES.rd = function (b, n) { S.roda.sel = n; S.roda.foi[n] = 1; };
TOQUES['jo-viu'] = function () { S.josie.viu[S.josie.n] = 1; };
TOQUES['jo-prox'] = function () { S.josie.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
/* duas opções erradas com o mesmo erro acendiam juntas: cada uma ganha um código próprio */
[LISTA, MESA].forEach(function (lista) { lista.forEach(function (x) { var visto = {}; x.ops.forEach(function (o) { if (visto[o[1]]) { var novo = o[1] + '2'; NOTA[novo] = NOTA[o[1]]; o[1] = novo; } visto[o[1]] = 1; }); }); });
