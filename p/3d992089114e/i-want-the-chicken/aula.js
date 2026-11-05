/* ============================================================
   I WANT THE CHICKEN · THE ORDER PAD · LIVE CLASS  05/10/2026
   Main series A1 · pedir com educação: I'd like · I'll have · Could I
   have…? · Can you bring…? · pedir pelos outros · reclamar sem briga
   O MUNDO: mesa 4, 8:15 PM. "I want the chicken" não tem erro de
   gramática, e é por isso que sobrevive. Ao lado de toda cena há um
   TERMÔMETRO: o humor do garçom (sobe com pedido educado, desce com
   ordem). A comanda só se enche com pedido educado. No fim, a primeira
   frase do aluno volta.
   Mantidos da aula antiga: os 6 áudios do garçom (w1–w6, conferidos no
   faster-whisper; ouvir primeiro, ler depois), as três fotos, os pares,
   o cardápio, a conta com o vinho que ninguém pediu.
   Fila: FILA-LIVE-386.md · 011.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'mesa' },
  { k: 'abre', est: 'o', min: 7, img: 'frango', rot: 'I · Order It Now', t: 'No warm-up. The first English of the hour is an order.', p: 'Play the waiter. Read the menu. Order out loud. Your teacher writes it down.' },
  { k: 'pares', est: 'f', min: 6, img: 'mesa', rot: 'II · Both Are Correct', t: 'Two sentences. Both are correct English. One is rude.', p: 'Read both out loud. Tap the one the waiter likes. Watch the thermometer.' },
  { k: 'pergunta', est: 'f', min: 6, img: 'mesa', rot: 'III · Asking Is Softer', t: 'Turn the order into a request.', p: 'Read the situation. Tap the request. Then say it out loud.' },
  { k: 'menu', est: 'o', min: 7, img: 'frango', rot: 'IV · The Order Pad', t: 'Order the whole meal. The pad stays empty until you ask properly.', p: 'Pick an opening. Tap a dish. Say it all out loud. Five lines on the pad.' },
  { k: 'voz', est: 'o', min: 7, img: 'mesa', rot: 'V · Say It Softer', t: 'The voice does half the work.', p: 'Your teacher says it two ways: flat, then warm. You say both.' },
  { k: 'please', est: 'f', min: 6, img: 'mesa', rot: 'VI · Please Is Not Enough', t: 'Two versions, both with please. Only one is a request.', p: 'Read both. Tap the request. Say it out loud.' },
  { k: 'mesa', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'VII · The Whole Table', t: 'Order for other people.', p: 'Read who wants what. Order for them out loud. Then check.' },
  { k: 'problema', est: 'l', min: 7, extra: 1, img: 'conta', rot: 'VIII · When It Goes Wrong', t: 'Dinner goes wrong. The waiter keeps coming back.', p: 'Play the waiter first. Then choose what you say, and say it softly.' },
  { k: 'fora', est: 'o', min: 7, extra: 1, img: 'conta', rot: 'IX · Not Only Restaurants', t: 'Take it off the table and it still works.', p: 'Read the situation. Ask for it out loud. Then check.' },
  { k: 'ficha', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'X · Your Own Table', t: 'Real answers now.', p: 'Answer out loud. Then the follow-up comes.' },
  { k: 'fim', est: 'w', min: 6, img: 'conta', rot: 'XI · One Hour Ago', t: 'Your first order comes back. Now write it your new way.', p: 'Five polite requests: in a restaurant, at work, in a store. The red line watches the commands. It goes to your My notes.' }
];

var PRATOS0 = [['Grilled chicken', '$14'], ['Fish of the day', '$16'], ['Vegetable soup', '$9'], ['Pasta with tomato', '$12'], ['Orange juice', '$5'], ['Sparkling water', '$4']];
var FORMAS = [{ k: 'like', t: 'I’D LIKE / I’LL HAVE' }, { k: 'could', t: 'COULD I HAVE…?' }, { k: 'want', t: 'I WANT…', erro: 1 }, { k: 'give', t: 'GIVE ME… / JUST THE FOOD', erro: 1 }];

var PARES = [
  { ok: 'I’d like the chicken, please.', mau: 'I want the chicken.', nota: 'I WANT is what a child says at home. It isn’t a request.' },
  { ok: 'Could I have the bill, please?', mau: 'Give me the bill.', nota: 'GIVE ME is an order. Friendly in Portuguese, not here.' },
  { ok: 'Can you bring some water?', mau: 'Bring water.', nota: 'A request in English is a QUESTION.' },
  { ok: 'Could we pay now, please?', mau: 'I want to pay now.', nota: 'Same meaning. One makes the waiter smile.' },
  { ok: 'Could we change tables, please?', mau: 'Change my table.', nota: 'Longer is softer. Strange, but true.' },
  { ok: 'No ice, please. Thank you.', mau: 'No ice.', nota: 'Two words are fine, with please.' }
];
var PERG = [
  { sit: 'You want the bill.', ok: 'Could I have the bill?', mau: 'Give me the bill.' },
  { sit: 'You want more water.', ok: 'Can you bring some more water?', mau: 'Bring more water.' },
  { sit: 'You want the menu again.', ok: 'Could I see the menu again?', mau: 'I want the menu again.' },
  { sit: 'You want the window table.', ok: 'Could we sit by the window?', mau: 'We sit by the window.' },
  { sit: 'You want the chicken.', ok: 'I’ll have the chicken, please.', mau: 'The chicken.' },
  { sit: 'You need a fork.', ok: 'Could I get a fork, please?', mau: 'I need a fork.' }
];
var ABERT = ['I’d like', 'I’ll have', 'Could I have', 'Can I get'];
var SECOES = [{ s: 'STARTERS', p: [['Tomato soup', 8], ['Green salad', 7]] }, { s: 'MAIN', p: [['Grilled chicken', 14], ['Fish of the day', 16], ['Pasta with tomato', 12]] }, { s: 'DRINKS', p: [['Sparkling water', 4], ['Orange juice', 5]] }];
var VOZ = [
  { f: 'I’d like the chicken.', baixo: 'sounds like a decision', alto: 'sounds like a request' },
  { f: 'Could I have the bill?', baixo: 'sounds impatient', alto: 'sounds normal' },
  { f: 'Can you bring some water?', baixo: 'sounds like an instruction', alto: 'sounds friendly' },
  { f: 'Excuse me?', baixo: 'sounds annoyed', alto: 'just calling the waiter' }
];
var PLEASE = [
  { ok: 'Could I have the bill, please?', mau: 'Give me the bill, please.' },
  { ok: 'Could I get a fork, please?', mau: 'Bring me a fork, please.' },
  { ok: 'Could I change my order, please?', mau: 'Change my order, please.' },
  { ok: 'Could I speak to the manager, please?', mau: 'Call the manager, please.' },
  { ok: 'Could you take this away, please?', mau: 'Take this away, please.' }
];
var MESA = [
  { q: 'your sister', c: 'S', quer: 'the fish', ex: 'She’d like the fish.' },
  { q: 'your two friends', c: '2', quer: 'the soup', ex: 'They’d like the soup.' },
  { q: 'you and your brother', c: 'US', quer: 'the pasta', ex: 'We’ll have the pasta.' },
  { q: 'your father', c: 'F', quer: 'a coffee', ex: 'He’d like a coffee, please.' },
  { q: 'the child', c: 'K', quer: 'an orange juice', ex: 'Could he have an orange juice?' },
  { q: 'everybody', c: 'ALL', quer: 'the check', ex: 'Could we get the check, please?' }
];
var PROB = [
  { au: 'w3.mp3', g: 'Is everything all right here?', sit: 'Your food is cold.', ok: 'Sorry, I think this is cold.', mau: 'No. This food is cold.' },
  { g: 'Here’s your fish.', sit: 'You want the chicken. This is the fish.', ok: 'Sorry, I’d like the chicken, please.', mau: 'This is not my order.' },
  { au: 'w4.mp3', g: 'I’m sorry, we’re out of the fish tonight.', sit: 'Your friend wants the fish. Choose something else.', ok: 'That’s OK. Could she have the pasta, then?', mau: 'Then give her the pasta.' },
  { au: 'w5.mp3', g: 'Would you like to see the dessert menu?', sit: 'You want dessert.', ok: 'Yes, please. Could we see it?', mau: 'Yes. Bring it.' },
  { au: 'w6.mp3', g: 'Are you paying together or separately?', sit: 'Each person pays.', ok: 'Separately, please.', mau: 'We pay separate.' },
  { g: 'Here’s your bill.', sit: 'There is a wine on the bill. Nobody wants wine.', ok: 'Excuse me, I think there’s a mistake. We have no wine.', mau: 'This bill is wrong.', conta: 1 }
];
var CONTA = [['Grilled chicken', 14], ['Pasta with tomato', 12], ['Red wine', 9, 1], ['Sparkling water', 4]];
var FORA = [
  { sit: 'In a store. You want to try the shoes on.', r: 'Could I try these on?' },
  { sit: 'At work. You need one more day.', r: 'Could I have one more day?' },
  { sit: 'A friend has a pen and you need one.', r: 'Can I borrow your pen?' },
  { sit: 'On the phone. You want to speak to Ana.', r: 'Could I speak to Ana, please?' },
  { sit: 'In a hotel. You want to leave later.', r: 'Could I check out later, please?' },
  { sit: 'A neighbor’s music is loud at midnight.', r: 'Could you turn it down a little?' }
];
var FICHA = [
  { q: 'What do you always order in a restaurant?', fup: 'And to drink?', st: ['I usually have …', 'I always order …'], ex: 'I usually have the fish. And sparkling water, please.' },
  { q: 'You need a day off next week. What do you say to your boss?', fup: 'And if your boss says no?', st: ['Could I have … off?'], ex: 'Could I have Friday off, please? I have a family party.' },
  { q: 'Your food comes wrong. What do you say?', fup: 'And if it happens again?', st: ['Sorry, I think …'], ex: 'Sorry, I think this is cold.' },
  { q: 'Is it hard for you to ask for things?', fup: 'In English or in Portuguese?', st: ['It’s easy for me.', 'It’s hard for me.'], ex: 'It’s hard for me. I don’t like to bother people.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {}, temp: 50,
  abre: { formas: {} }, pares: { n: 0, esc: -1 }, perg: { n: 0, esc: -1 }, menu: { ab: -1, linhas: [], aviso: 0 },
  voz: { n: 0, jeito: {} }, please: { n: 0, esc: -1 }, mesa: { n: 0, foi: {} }, prob: { n: 0, esc: -1 }, fora: { n: 0 }, ficha: { n: 0, foi: {} } };

function termometro() {
  var t = Math.max(5, Math.min(100, S.temp)), cor = t >= 70 ? 'var(--ok)' : t >= 40 ? 'var(--ac)' : 'var(--erro)';
  var rosto = t >= 70 ? '😊' : t >= 40 ? '😐' : '😠';
  return '<div class="termo vd"><small>THE WAITER’S MOOD</small><div class="tubo-t"><i style="height:' + t + '%;--w:' + t + '%;background:' + cor + '"></i></div><b>' + rosto + '</b></div>';
}
function par(lista, e, acao, n, chave) {
  var x = lista[n], certo = e.esc === 0, ops = ordem([[x.ok, 0], [x.mau, 1]], n);
  return '<div class="dois-pratos">' + ops.map(function (o) {
    return '<button type="button" class="prato-b' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '"' + (certo ? ' disabled' : '') + '>' + o[0] + '</button>';
  }).join('') + '</div>';
}
function aplicaTemp(certo) { S.temp = Math.max(5, Math.min(100, S.temp + (certo ? 8 : -12))); }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE ORDER PAD · A1</span><h1>I Want <b>the Chicken</b></h1>'
    + '<p class="sub">Correct English. And the waiter still goes quiet.</p>'
    + '<div class="chipsx"><span class="pilula">I’d like · I’ll have</span><span class="pilula">Could I have…?</span><span class="pilula">Can you bring…?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Sit down</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('mesa') + '" alt="A restaurant table for two with a candle"><div class="placa-capa"><small>TABLE 4</small><b>8:15 PM</b><span>THE WAITER IS COMING</span></div></div></div>';
};

R.abre = function (c) {
  var e = S.abre;
  var garcom = '<div class="garcom vd"><small>THE WAITER</small>' + [['w1.mp3', 'Good evening. Are you ready to order?'], ['w2.mp3', 'Can I get you anything to drink?']].map(function (g) { return '<div class="toca-linha">' + tocar(g[0]) + transcricao(g[0], '“' + g[1] + '”') + '</div>'; }).join('') + '</div>';
  var menu = '<div class="cardapio vd"><small>TONIGHT</small>' + PRATOS0.map(function (p) { return '<p><span>' + p[0] + '</span><i></i><b>' + p[1] + '</b></p>'; }).join('') + '</div>';
  var marca = '<div class="partes"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (e.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
  return cab(c) + '<div class="mesa-abre"><div class="col-abre">' + garcom + marca + '</div>' + menu + '</div>';
};

R.pares = function (c) {
  var e = S.pares, n = e.n, fim = n >= PARES.length, x = PARES[Math.min(n, PARES.length - 1)];
  var lado = termometro();
  if (fim) return cab(c) + '<div class="com-termo"><div class="foco"><div class="pergunta vd"><small>SIX PAIRS</small><h2>Grammar is not the problem.</h2></div></div>' + lado + '</div>';
  return cab(c) + trilha(PARES, n) + '<div class="com-termo"><div class="foco">' + par(PARES, e, 'pr', n)
    + (e.esc === 0 ? '<p class="aprova">GOT IT. ' + x.nota + ' Say the good one out loud.</p><div style="text-align:center"><button type="button" class="btn" data-a="pr-prox">Next pair</button></div>' : (e.esc === 1 ? '<p class="recusa">The waiter goes quiet. ' + x.nota + '</p>' : '<p class="dica-aluno" style="text-align:center">Read both out loud first.</p>')) + '</div>' + lado + '</div>';
};

R.pergunta = function (c) {
  var e = S.perg, n = e.n, fim = n >= PERG.length, x = PERG[Math.min(n, PERG.length - 1)];
  if (fim) return cab(c) + '<div class="com-termo"><div class="foco"><div class="pergunta vd"><small>SIX REQUESTS</small><h2>Every one is a question or has please.</h2></div></div>' + termometro() + '</div>';
  return cab(c) + trilha(PERG, n) + '<div class="com-termo"><div class="foco"><div class="pergunta vd"><small>THE SITUATION</small><h2>' + x.sit + '</h2></div>' + par(PERG, e, 'pg', n)
    + (e.esc === 0 ? '<p class="aprova">GOT IT. Say it out loud.</p><div style="text-align:center"><button type="button" class="btn" data-a="pg-prox">Next</button></div>' : (e.esc === 1 ? '<p class="recusa">That’s an order, not a request. Try the question.</p>' : '')) + '</div>' + termometro() + '</div>';
};

R.menu = function (c) {
  var e = S.menu, total = e.linhas.reduce(function (s, l) { return s + l[2]; }, 0), cheio = e.linhas.length >= 5;
  var abert = '<div class="aberturas">' + ABERT.map(function (a, i) { return '<button type="button" class="abertura' + (e.ab === i ? ' on' : '') + '" data-a="mn-ab" data-n="' + i + '">' + a + '</button>'; }).join('') + '</div>';
  var menu = '<div class="cardapio vd grande">' + SECOES.map(function (s, si) { return '<small>' + s.s + '</small>' + s.p.map(function (p, pi) { return '<button type="button" class="linha-menu" data-a="mn-p" data-n="' + si + '" data-v="' + pi + '"' + (cheio ? ' disabled' : '') + '><span>' + p[0] + '</span><i></i><b>$' + p[1] + '</b></button>'; }).join(''); }).join('') + '</div>';
  var comanda = '<div class="comanda"><small>ORDER PAD · TABLE 4</small><ol>' + (e.linhas.length ? e.linhas.map(function (l) { return '<li>' + l[0] + ' ' + l[1].toLowerCase() + (/\?|Could|Can/.test(l[0]) ? '?' : ', please.') + '</li>'; }).join('') : '<li class="vazio">Empty. Ask properly.</li>') + '</ol><p class="total">TOTAL <b>$' + total + '</b></p></div>';
  return cab(c) + '<div class="mesa-menu"><div class="col-menu">' + abert + (e.aviso ? '<p class="recusa">First pick an opening: I’d like, I’ll have, Could I have, Can I get.</p>' : '') + menu + '</div><div class="col-comanda">' + comanda + (cheio ? '<p class="aprova">Five lines on the pad, and not one started with I want.</p>' : '<p class="dica-aluno">Say each line out loud before you tap.</p>') + '<div class="toca-linha vd">' + tocar('w2.mp3') + transcricao('w2.mp3', '“Can I get you anything to drink?”', 'mnw') + '</div></div></div>';
};

R.voz = function (c) {
  var v = S.voz, n = v.n, fim = n >= VOZ.length, x = VOZ[Math.min(n, VOZ.length - 1)], j = v.jeito[n] || {};
  if (fim) return cab(c) + trilha(VOZ, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR SENTENCES, EIGHT VERSIONS</small><h2>The words are the same. The voice changes.</h2></div></div>';
  return cab(c) + trilha(VOZ, n) + '<div class="foco"><div class="pergunta vd"><small>SAY IT TWO WAYS</small><h2>' + x.f + '</h2></div><div class="duas-vozes">'
    + '<button type="button" class="voz-b plana' + (j.b ? ' on' : '') + '" data-a="vz" data-v="b"><small>FLAT · SHORT</small><b>' + x.f + '</b><span>' + x.baixo + '</span></button>'
    + '<button type="button" class="voz-b quente' + (j.a ? ' on' : '') + '" data-a="vz" data-v="a"><small>WARM · A SMILE · THE VOICE GOES UP</small><b>' + x.f + '</b><span>' + x.alto + '</span></button></div>'
    + '<p class="so-prof" style="text-align:center;color:var(--t3)">You say it first, both ways. The student repeats; tap each version they said.</p>'
    + (j.a && j.b ? '<div style="text-align:center"><button type="button" class="btn" data-a="vz-prox">Next sentence</button></div>' : '') + '</div>';
};

R.please = function (c) {
  var e = S.please, n = e.n, fim = n >= PLEASE.length;
  if (fim) return cab(c) + '<div class="com-termo"><div class="foco"><div class="pergunta vd"><small>TEN PLEASES, FIVE REQUESTS</small><h2>The word isn’t the thing.</h2></div></div>' + termometro() + '</div>';
  return cab(c) + trilha(PLEASE, n) + '<div class="com-termo"><div class="foco">' + par(PLEASE, e, 'pl', n)
    + (e.esc === 0 ? '<p class="aprova">GOT IT. A question with please. Say it out loud.</p><div style="text-align:center"><button type="button" class="btn" data-a="pl-prox">Next</button></div>' : (e.esc === 1 ? '<p class="recusa">PLEASE helps. It doesn’t turn an order into a request.</p>' : '')) + '</div>' + termometro() + '</div>';
};

R.mesa = function (c) {
  var m = S.mesa, n = m.n, fim = n >= MESA.length, x = MESA[Math.min(n, MESA.length - 1)];
  var cadeiras = '<div class="mesa-redonda vd">' + MESA.map(function (p, i) { return '<span class="pessoa-m' + (i === n ? ' on' : '') + (i < n ? ' feita' : '') + '"><i>' + p.c + '</i>' + p.q + '</span>'; }).join('') + '<div class="tampo"></div></div>';
  if (fim) return cab(c) + cadeiras + '<div class="foco"><div class="pergunta vd"><small>THE WHOLE TABLE</small><h2>Six orders for other people, and the shape never changed.</h2></div></div>';
  return cab(c) + trilha(MESA, n) + '<div class="mesa-outros">' + cadeiras + '<div class="foco"><div class="pergunta vd"><small>ORDER FOR ' + x.q.toUpperCase() + '</small><h2>' + x.q.charAt(0).toUpperCase() + x.q.slice(1) + ' wants ' + x.quer + '.</h2></div>'
    + fala('ms' + n, ['She’d like …', 'They’d like …', 'We’ll have …', 'Could he have …?'], []) + mostra('ms' + n, x.ex) + '<div style="text-align:center"><button type="button" class="btn" data-a="ms-prox">Next person</button></div></div></div>';
};

R.problema = function (c) {
  var e = S.prob, n = e.n, fim = n >= PROB.length, x = PROB[Math.min(n, PROB.length - 1)];
  if (fim) return cab(c) + '<div class="com-termo"><div class="foco"><div class="pergunta vd"><small>SIX PROBLEMS</small><h2>And nobody hears: you are wrong.</h2></div></div>' + termometro() + '</div>';
  var ouviu = !x.au || (S.ouviu || {})[x.au];
  var garcom = '<div class="garcom vd"><small>THE WAITER COMES BACK</small>' + (x.au ? '<div class="toca-linha">' + tocar(x.au) + transcricao(x.au, '“' + x.g + '”', 'pb' + n) + '</div>' : '<p class="fala-g">“' + x.g + '”</p><p class="so-prof" style="margin:0;color:var(--t3);font-size:14px">Say it in the waiter’s voice.</p>') + '</div>';
  var conta = x.conta ? '<div class="conta-papel vd"><small>THE BILL · TABLE 4</small>' + CONTA.map(function (l) { return '<p class="' + (l[2] ? 'erro-conta' : '') + '"><span>' + l[0] + '</span><b>$' + l[1] + '</b></p>'; }).join('') + '<p class="tot"><span>TOTAL</span><b>$39</b></p></div>' : '';
  var lado = '<div class="pergunta vd"><small>THE SITUATION</small><h2>' + x.sit + '</h2></div>' + (ouviu ? par(PROB, e, 'pb', n) : '<p class="dica-aluno">Play the waiter first.</p>')
    + (e.esc === 0 ? '<p class="aprova">GOT IT. Soft and clear. Say it out loud.</p><div><button type="button" class="btn" data-a="pb-prox">Next</button></div>' : (e.esc === 1 ? '<p class="recusa">That’s true, and it puts the waiter on trial. Try the softer one.</p>' : ''));
  return cab(c) + trilha(PROB, n) + '<div class="com-termo"><div class="mesa-prob"><div class="col-prob">' + garcom + conta + '</div><div class="col-prob">' + lado + '</div></div>' + termometro() + '</div>';
};

R.fora = function (c) {
  var f = S.fora, n = f.n, fim = n >= FORA.length, x = FORA[Math.min(n, FORA.length - 1)];
  if (fim) return cab(c) + trilha(FORA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX PLACES, ONE SHAPE</small><h2>It is not about food.</h2></div></div>';
  return cab(c) + trilha(FORA, n) + '<div class="foco"><div class="pergunta vd"><small>THE SITUATION</small><h2>' + x.sit + '</h2></div>' + fala('fr' + n, ['Could I …?', 'Can I …?', 'Could you …?', 'Could I …, please?'], []) + mostra('fr' + n, x.r) + '<div style="text-align:center"><button type="button" class="btn" data-a="fr-prox">Next</button></div></div>';
};

R.ficha = function (c) { return sequencia(c, FICHA, S.ficha, 'ficha', 'Four real answers, and four polite shapes.'); };

R.fim = function (c) {
  var f = S.abre.formas, antes = (f.want || f.give) ? 'In scene I your teacher heard: ' + (f.want ? '<b>I want…</b> ' : '') + (f.give ? '<b>Give me… / just the food</b>' : '') : (f.like || f.could ? 'In scene I you already asked politely. Now more of it.' : 'Scene I: say your first order again, the same way.');
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’d like the grilled chicken, please.\nCould I have …', 'Your requests',
    ['I’d like ', 'I’ll have ', 'Could I have ', 'Can you bring ', 'Could I ', ', please.', 'Sorry, I think '], ['FIVE POLITE REQUESTS', antes])
    + '<div class="lado-fim"><div class="grande vd"><span><s>I want the chicken.</s></span><span><u>I’d like</u> the chicken, <u>please</u>.</span><span><u>Could I have</u> the bill?</span><small>No grammar mistake in I want. But a request in English is a question, or I’d like, with please.</small></div>'
    + mostra('fim', 'I’d like the grilled chicken, please.<br>Could I have some more water?<br>Sorry, I think I ordered the fish.<br>Could I have Friday off, please?<br>Could you turn the music down a little?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.pr = function (b, n) { if (S.pares.esc === 0) return false; S.pares.esc = n; aplicaTemp(n === 0); };
TOQUES['pr-prox'] = function () { S.pares = { n: S.pares.n + 1, esc: -1 }; };
TOQUES.pg = function (b, n) { if (S.perg.esc === 0) return false; S.perg.esc = n; aplicaTemp(n === 0); };
TOQUES['pg-prox'] = function () { S.perg = { n: S.perg.n + 1, esc: -1 }; };
TOQUES['mn-ab'] = function (b, n) { S.menu.ab = n; S.menu.aviso = 0; };
TOQUES['mn-p'] = function (b, n, v) { var e = S.menu; if (e.linhas.length >= 5) return false; if (e.ab < 0) { e.aviso = 1; aplicaTemp(false); return; } var p = SECOES[n].p[+v]; e.linhas.push([ABERT[e.ab], p[0], p[1]]); e.aviso = 0; aplicaTemp(true); };
TOQUES.vz = function (b, n, v) { var x = S.voz; x.jeito[x.n] = x.jeito[x.n] || {}; x.jeito[x.n][v] = 1; };
TOQUES['vz-prox'] = function () { S.voz.n++; };
TOQUES.pl = function (b, n) { if (S.please.esc === 0) return false; S.please.esc = n; aplicaTemp(n === 0); };
TOQUES['pl-prox'] = function () { S.please = { n: S.please.n + 1, esc: -1 }; };
TOQUES['ms-prox'] = function () { S.mesa.n++; };
TOQUES.pb = function (b, n) { if (S.prob.esc === 0) return false; S.prob.esc = n; aplicaTemp(n === 0); };
TOQUES['pb-prox'] = function () { S.prob = { n: S.prob.n + 1, esc: -1 }; };
TOQUES['fr-prox'] = function () { S.fora.n++; };
