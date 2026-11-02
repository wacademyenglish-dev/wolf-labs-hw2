/* ============================================================
   WHOSE SUITCASE? · GATE 7 LOST AND FOUND · LIVE CLASS  05/10/2026
   Main series A1 · whose · mine / yours / his / hers / ours / theirs ·
   's (the twins' · Mia and Sam's) · Whose are these? They're theirs.
   O MUNDO (da aula velha, formato easy reader): 11 PM no achados e
   perdidos do Portão 7; cinco malas giram na esteira, cinco fichas de
   reclamação. Cada mala abre com pistas; o aluno lê o capítulo e acha o
   dono. A CARA: a ESTEIRA em CSS (malas coloridas sobre a lona escura) e
   as ETIQUETAS do balcão. AULA IRMÃ da The Same Name (029): esta cobre
   plural, dois donos, ours/theirs e his/hers pelo DONO. Sem áudio nem
   vídeo. Fila: FILA-LIVE-386.md · 041.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'terminal', rot: 'I · You and Your Bags', t: 'Before the airport: you, your trips, your things.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'esteira', est: 'o', min: 7, img: 'esteira', rot: 'II · The Carousel', t: 'Five suitcases, five claim forms. Find the owners.', p: 'Tap a suitcase. Read the chapter out loud, answer the question, then say whose it is.' },
  { k: 'regra', est: 'f', min: 6, img: 'balcao', rot: 'III · The Rule', t: 'Look at the owner. Only the owner.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'balcao', est: 'o', min: 7, img: 'portao', rot: 'IV · The Claim Desk', t: 'Eight tags, eight people at the desk.', p: 'Your teacher is the person at the desk. Answer at once.' },
  { k: 'roda', est: 'o', min: 7, img: 'mala', rot: 'V · Mine or Ours?', t: 'Your real things. Whose are they?', p: 'Pick a card. Answer with mine, ours, his, hers, theirs, or a name with ’s.' },
  { k: 'grant', est: 'o', min: 7, extra: 1, img: 'balcao', rot: 'VI · The Night Manager Calls', t: 'Ms. Grant wants the story of tonight.', p: 'Your teacher is Ms. Grant. Tell her, suitcase by suitcase, from memory. Then ask her back.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'terminal', rot: 'VII · Quick Check', t: 'Six quick lines from the desk.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'mala', rot: 'VIII · Your Suitcase', t: 'Pack your suitcase.', p: 'Four things in it, and whose they are. The red line watches ’s and the short words. It goes to your My notes.' }
];

var ABRE = [
  { k: 'YOUR LAST TRIP', q: 'A trip you love: where is it? Who is with you?', fup: 'Whose car is it? Whose suitcase?', st: ['My trip is to …', 'My … is with me.'], ex: 'The beach, with my family. It’s my mom’s car!' },
  { k: 'PACKING', q: 'Who packs your bag: you, or someone in your family?', fup: 'And whose bag is bigger?', st: ['I pack mine.', 'My … packs …'], ex: 'I pack my bag. My sister packs hers. Hers is bigger!' },
  { k: 'AT HOME', q: 'What things do you share at home? The TV? The car?', fup: 'And what is only yours?', st: ['We share …', 'It’s ours.'], ex: 'We share the car. It’s ours. My phone is only mine.' }
];
var FORMAS = [{ k: 'mine', t: 'MINE / OURS' }, { k: 's', t: 'NAME + ’S' }, { k: 'our', t: 'IT’S OUR (ALONE)', erro: 1 }, { k: 'coisa', t: 'HIS / HER BY THE THING', erro: 1 }];

var NOTA = {
  of: 'English puts the owner first: the twins’ suitcase.', sapos: 'twins already ends in s: only the apostrophe. And alone: theirs.', dono: 'Look at the owner, not the thing or the color.',
  her: 'No thing after it: hers.', obj: 'Whose: the owner word. his, ours (not him, us).', dois: 'Two owners, one thing: one ’s, at the end.', their: 'No thing after it: theirs.',
  our: 'No thing after it: ours.', plural: 'Many things: they’re …', your: 'No thing after it: yours, mine, hers.', pov: 'You talk TO them: their tickets are yours.'
};

var DONOS = [{ k: 'ADA & BEN OKAFOR', d: 'twins · 9 years old' }, { k: 'ROSA LIMA', d: 'grandmother · 74' }, { k: 'TOM HALE', d: 'chef · 35' }, { k: 'MIA & SAM PARK', d: 'just married' }, { k: 'NO FORM', d: 'there is no name' }];
var MALAS = [
  { k: 'RED', cor: '#b8423a', tam: .82, dono: 0, cap: 'A small red suitcase. It is very light. Inside there are two little toothbrushes, two pairs of small sneakers and a lot of comic books. There is a drawing of two kids and a dog.', pistas: ['2 toothbrushes', '2 pairs of sneakers', 'comic books', 'a drawing'], q: 'Why are there two toothbrushes?', ex: 'Because there are two kids: the twins.', ops: [['It’s the twins’ suitcase. It’s theirs.', 'ok'], ['It’s the suitcase of the twins.', 'of'], ['It’s the twins’s suitcase. It’s their.', 'sapos']] },
  { k: 'BLUE', cor: '#3a63a3', tam: 1.1, dono: 1, cap: 'A big, old blue suitcase. Inside there is a lot of blue wool and two long knitting needles. There are reading glasses in a box, and a photo of six small children.', pistas: ['blue wool', 'knitting needles', 'reading glasses', 'a photo: 6 kids'], q: 'Who are the six children in the photo?', ex: 'Maybe her grandchildren!', ops: [['It’s Rosa’s suitcase. It’s hers.', 'ok'], ['It’s Rosa’s suitcase. It’s his.', 'dono'], ['It’s Rosa’s suitcase. It’s her.', 'her']] },
  { k: 'PINK', cor: '#c46e98', tam: .95, dono: 2, cap: 'A pink suitcase with little white flowers. Inside there is a white jacket for the kitchen, three big knives in a box and a lot of spices. There is a cookbook, too.', pistas: ['a kitchen jacket', '3 knives', 'spices', 'a cookbook'], q: 'What is this person’s job? How do you know?', ex: 'A chef, because there are knives, spices and a cookbook.', ops: [['It’s Tom’s suitcase. It’s his.', 'ok'], ['It’s Tom’s suitcase. It’s hers.', 'dono'], ['It’s Tom’s suitcase. It’s him.', 'obj']] },
  { k: 'SILVER', cor: '#8a96a3', tam: 1, dono: 3, cap: 'A new silver suitcase. Inside there are two swimsuits, two big sun hats and two plane tickets to Hawaii. There is a small box with two rings.', pistas: ['2 swimsuits', '2 sun hats', '2 tickets to Hawaii', '2 rings'], q: 'Is this a work trip or a vacation? Why?', ex: 'A vacation! A honeymoon: they’re just married.', ops: [['It’s Mia and Sam’s suitcase. It’s theirs.', 'ok'], ['It’s Mia’s and Sam’s suitcase.', 'dois'], ['It’s Mia and Sam’s suitcase. It’s their.', 'their']] },
  { k: 'GREEN', cor: '#3a8264', tam: .9, dono: 4, cap: 'A green bag with no name on it. Inside there are balloons, a big box of chocolates and a card. The card says: “For the lost and found team at Gate 7. Thank you! From the pilots.”', pistas: ['balloons', 'chocolates', 'a card for Gate 7', 'no name'], q: 'Who works at Gate 7 tonight?', ex: 'We do! You and me.', ops: [['It’s our bag! It’s ours!', 'ok'], ['It’s our bag! It’s our!', 'our'], ['It’s our bag! It’s us!', 'obj']] }
];

var FITAS = [['ONE OWNER', 'Rosa’s bag · Tom’s bag'], ['OWNER WITH S', 'the twins’ bag · my parents’ car'], ['TWO NAMES, ONE THING', 'Mia and Sam’s bag'], ['NO THING AFTER IT', 'mine · yours · his · hers · ours · theirs']];
var ARMAS = [
  ['THE OWNER', 'The pink suitcase is Tom’s. It’s hers.', 'The pink suitcase is Tom’s. It’s his.', 'Tom is a man: his. The color doesn’t matter.'],
  ['TWO OWNERS', 'It’s Mia’s and Sam’s suitcase.', 'It’s Mia and Sam’s suitcase.', 'One thing, two owners: one ’s, at the end.'],
  ['MANY THINGS', 'Whose is these sneakers? It’s the twins’s.', 'Whose sneakers are these? They’re the twins’.', 'Many things: are these, they’re. twins’: only the apostrophe.'],
  ['NO THING AFTER IT', 'It’s our. They’re theirs sneakers.', 'It’s ours. They’re their sneakers.', 'our + a thing · ours alone']
];

var DESK = [
  { k: 'ROSA', coisa: 'GLASSES', diz: 'Excuse me. Are these glasses mine?', ini: 'Yes, they’re …', ops: [['Yes, they’re yours.', 'ok'], ['Yes, it’s yours.', 'plural'], ['Yes, they’re your.', 'your']] },
  { k: 'THE TWINS’ DAD', coisa: 'SNEAKERS', diz: 'Whose are these sneakers? The kids’?', ini: 'Yes, they’re …', ops: [['Yes, they’re the kids’. They’re theirs.', 'ok'], ['Yes, they’re the kids’s.', 'sapos'], ['Yes, they’re their.', 'their']] },
  { k: 'TOM', coisa: 'KNIVES', diz: 'Is this knife box mine or Rosa’s?', ini: 'It’s … It isn’t …', ops: [['It’s yours. It isn’t hers.', 'ok'], ['It’s yours. It isn’t his.', 'dono'], ['It’s your. It isn’t her.', 'your']] },
  { k: 'MIA AND SAM', coisa: 'TICKETS', diz: 'Are these tickets ours?', ini: 'Yes, they’re …', ops: [['Yes, they’re yours. Have a good trip!', 'ok'], ['Yes, they’re ours.', 'pov'], ['Yes, it’s yours.', 'plural']] },
  { k: 'A PILOT', coisa: 'GREEN BAG', diz: 'Whose bag is this? The green one.', ini: 'It’s …', ops: [['It’s ours! Thank you!', 'ok'], ['It’s our! Thank you!', 'our'], ['It’s us! Thank you!', 'obj']] },
  { k: 'TOM', coisa: 'PHONE', diz: 'Whose phone is this on the desk? Is it Rosa’s?', ini: 'No, it isn’t …', ops: [['No, it isn’t hers. It’s mine!', 'ok'], ['No, it isn’t her. It’s my!', 'your'], ['No, it isn’t his. It’s mine!', 'dono']] },
  { k: 'ROSA', coisa: 'COATS', diz: 'Whose coats are those, on the chair?', ini: 'They’re Tom’s …', ops: [['They’re Tom’s. They’re his.', 'ok'], ['They’re Tom’s. They’re hers.', 'dono'], ['It’s Tom’s. It’s his.', 'plural']] },
  { k: 'THE TWINS', coisa: 'COMIC BOOK', diz: 'Is this comic book Ada’s or Ben’s?', ini: 'It’s Ada and …', ops: [['It’s Ada and Ben’s. It’s yours!', 'ok'], ['It’s Ada’s and Ben’s.', 'dois'], ['It’s Ada and Ben’s. It’s your!', 'your']] }
];

var RODA = [
  { k: 'THE REMOTE', q: 'At home, whose is the TV remote, really?', ex: 'It’s my dad’s. It’s his!' },
  { k: 'YOUR PHONE', q: 'Is your phone only yours, or does your family use it?', ex: 'It’s only mine.' },
  { k: 'THE KITCHEN', q: 'Whose kitchen is it: yours, or your parents’?', ex: 'It’s my parents’. It’s theirs.' },
  { k: 'THE CAR', q: 'Whose car do you drive?', ex: 'My wife’s. Well, it’s ours.' },
  { k: 'THE BOOKS', q: 'Whose books are on your shelf?', ex: 'They’re mine and my sister’s. They’re ours.' },
  { k: 'THE MUSIC', q: 'In the car, whose music do you listen to?', ex: 'My husband’s. It’s his music, always!' }
];

var GRANT = [
  { ela: 'Hi! What is in the red suitcase? And whose is it?', pede: 'Whose bags are in your office?', resp: 'Oh, those are mine. My bags for tomorrow!' },
  { ela: 'And the pink one with the flowers? Is it a woman’s?', pede: 'Is the blue umbrella yours?', resp: 'No, it isn’t mine. It’s my son’s.' },
  { ela: 'What about the silver suitcase? Whose is it?', pede: 'Whose idea is the chocolate?', resp: 'The pilots’! It’s theirs.' },
  { ela: 'And the green bag? Whose is it now?', pede: 'Do you want some? They’re ours!', resp: 'Yes, please! Save a few for me.' }
];

var QUIZ = [
  { a: '', b: ' are these tickets?', op: ['Whose', 'Who’s', 'Who'], nao: 'Whose asks for the owner.' },
  { a: 'This is the ', b: ' suitcase.', op: ['twins’', 'twins’s', 'twin’s of'], nao: 'twins ends in s: only the apostrophe.' },
  { a: 'Tom has a pink bag. It’s ', b: '.', op: ['his', 'hers', 'him'], nao: 'Tom is a man: his. The color doesn’t matter.' },
  { a: 'The chocolates are for us. They’re ', b: '.', op: ['ours', 'our', 'us'], nao: 'No thing after it: ours.' },
  { a: 'It’s ', b: ' suitcase.', op: ['Mia and Sam’s', 'Mia’s and Sam’s', 'Mia and Sam'], nao: 'Two owners, one thing: one ’s at the end.' },
  { a: 'Those sneakers are the kids’. They’re ', b: '.', op: ['theirs', 'their', 'them'], nao: 'No thing after it: theirs.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, est: { sel: -1, esc: {} }, desk: { n: 0, esc: '' }, roda: { sel: -1, foi: {} }, grant: { n: 0, viu: {} }, quiz: { esc: {} } };

function mala(m, i, on, ok, toque) {
  return '<button type="button" class="mala' + (on ? ' on' : '') + (ok ? ' feita' : '') + '" style="--c:' + m.cor + ';--t:' + m.tam + '"' + (toque ? ' data-a="' + toque + '" data-n="' + i + '"' : ' tabindex="-1"') + '><i></i><span>' + (ok ? '✓' : m.k) + '</span></button>';
}
function esteira(sel, feitas, toque) {
  return '<div class="esteira"><div class="lona">' + MALAS.map(function (m, i) { return mala(m, i, sel === i, feitas[i], toque); }).join('') + '</div><div class="placa-e">CAROUSEL 3 · GATE 7 · 11 PM</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · GATE 7 LOST AND FOUND</span><h1>Whose <b>Suitcase?</b></h1>'
    + '<p class="sub">Five suitcases. Five owners. <b>Whose</b> is this one? It’s <b>theirs</b>.</p>'
    + '<div class="chipsx"><span class="pilula">whose</span><span class="pilula">the twins’</span><span class="pilula">ours · theirs</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the carousel</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-e">' + esteira(-1, {}) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.esteira = function (c) {
  var e = S.est, feitas = {}; MALAS.forEach(function (_, i) { if (e.esc[i] === 'ok') feitas[i] = 1; });
  var x = e.sel >= 0 ? MALAS[e.sel] : null;
  var fichas = '<div class="claims">' + DONOS.map(function (d, i) { return '<div class="claim' + (x && feitas[e.sel] && x.dono === i ? ' achou' : '') + '"><b>' + d.k + '</b><small>' + d.d + '</small></div>'; }).join('') + '</div>';
  var corpo = '<p class="dica-aluno">Tap a suitcase on the carousel.</p>' + fichas;
  if (x) {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    corpo = '<div class="mesa-e"><div class="lado-l"><div class="capitulo vd"><small>CHAPTER ' + (e.sel + 1) + ' · THE ' + x.k + ' SUITCASE</small><p>' + x.cap + '</p><div class="pistas">' + x.pistas.map(function (p) { return '<span>' + p + '</span>'; }).join('') + '</div></div>'
      + '<div class="pergunta vd ja"><small>THE QUESTION</small><h2>' + x.q + '</h2></div>' + mostra('es' + e.sel, x.ex) + '</div><div class="lado-l">' + fichas
      + (ok ? '<div class="balao vd resp"><small>WHOSE IS IT?</small><p>' + x.ops[0][0] + '</p></div>' : '<h5 class="so-prof rot-ouve">WHOSE IS IT? TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) {
        return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="es-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>')
      + (esc && !ok ? '<p class="recusa">' + NOTA[esc] + '</p>' : '') + (ok ? '<p class="aprova">GOT IT. The suitcase goes home.</p>' : '') + '</div></div>';
  }
  return cab(c) + esteira(e.sel, feitas, 'es') + corpo + (Object.keys(feitas).length === 5 ? '<p class="aprova" style="text-align:center">Five owners. And the last bag is ours! The rule is next.</p>' : '');
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.balcao = function (c) {
  var e = S.desk, n = e.n, fim = n >= DESK.length;
  var etiquetas = '<div class="etiquetas">' + DESK.map(function (d, i) { return '<div class="etiqueta' + (i < n ? ' entregue' : i === n ? ' agora' : '') + '"><b>' + d.coisa + '</b><small>' + (i < n ? '✓ GONE HOME' : 'TAG ' + (i + 1)) + '</small></div>'; }).join('') + '</div>';
  var lado;
  if (fim) lado = '<div class="pergunta vd"><small>THE DESK IS EMPTY</small><h2>Eight tags, eight happy people. And the chocolates are ours.</h2></div>';
  else {
    var x = DESK[n], ok = e.esc === 'ok';
    lado = '<div class="balao vd"><small>' + x.k + ' · AT THE DESK</small><p>“' + x.diz + '”</p></div>' + (ok ? '<div class="balao vd resp"><small>YOU</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="dk-prox">Next person</button></div>'
      : '<p class="ini">' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 1).map(function (o) {
        return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="dk" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : ''));
  }
  return cab(c) + trilha(DESK, n) + '<div class="mesa-e">' + etiquetas + '<div class="lado-l">' + lado + '</div></div>';
};

R.roda = function (c) {
  var e = S.roda, x = e.sel >= 0 ? RODA[e.sel] : null;
  return cab(c) + '<div class="mesa-e"><div class="cartoes-c">' + RODA.map(function (k, i) { return '<button type="button" class="cartao-c' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feito' : '') + '" data-a="rd" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + k.k + '</b></button>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('rd' + e.sel, ['It’s my …’s. It’s his / hers.', 'It’s ours.', 'They’re theirs.'], []) + mostra('rd' + e.sel, x.ex, 1) : '<p class="dica-aluno">Pick a card. Your teacher answers too.</p>') + '</div></div>';
};

R.grant = function (c) {
  var e = S.grant, n = e.n, fim = n >= GRANT.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('balcao') + ')"><span>MS. GRANT · NIGHT MANAGER</span></div>';
  if (fim) return cab(c) + '<div class="mesa-e">' + foto + '<div class="lado-l">' + follow('THE BIG QUESTION', 'What is only yours, and what is ours?', ['My … is only mine.', 'The … is ours.'], ['mine', 'ours', 'theirs'], 'big', mostra('big', 'My phone is only mine. The car and the TV are ours.', 1)) + '</div></div>';
  var x = GRANT[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-e">' + foto + '<div class="lado-l">' + trilha(GRANT, n) + '<div class="balao vd"><small>MS. GRANT</small><p>“' + x.ela + '”</p></div>' + mostra('gr' + n, ['There are two toothbrushes and comic books. It’s the twins’. It’s theirs.', 'No! It’s Tom’s. There are knives and spices. It’s his.', 'It’s Mia and Sam’s. There are two tickets to Hawaii. It’s theirs.', 'It’s ours now! It’s a gift from the pilots.'][n]) + '<div class="pede vd"><small>THEN ASK HER</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>MS. GRANT</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="gr-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="gr-viu">Asked · she answers</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. Now your own suitcase.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'In my suitcase there are my sister’s sunglasses.\nThey’re hers.', 'Your suitcase',
    ['’s ', 'my parents’ ', 'It’s mine. ', 'It’s ours. ', 'They’re theirs. ', 'It’s his. ', 'It’s hers. '], ['WHOSE THINGS ARE IN YOUR BAG?', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write it with the owner first.' : 'Four things, and whose they are.'])
    + '<div class="lado-fim"><div class="grande vd"><span>the <u>twins’</u> · my <u>parents’</u></span><span><u>Mia and Sam’s</u> (one ’s)</span><span>his / hers: <u>the owner</u></span><span>alone: <u>ours</u> · <u>theirs</u></span></div>'
    + mostra('fim', 'My sister’s sunglasses: they’re hers.<br>My parents’ old camera: it’s theirs.<br>My phone: it’s mine. The map: it’s ours.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.es = function (b, n) { S.est.sel = n; };
TOQUES['es-v'] = function (b, n, v) { S.est.esc[S.est.sel] = v; };
TOQUES.dk = function (b, n, v) { S.desk.esc = v; };
TOQUES['dk-prox'] = function () { S.desk = { n: S.desk.n + 1, esc: '' }; };
TOQUES.rd = function (b, n) { S.roda.sel = n; S.roda.foi[n] = 1; };
TOQUES['gr-viu'] = function () { S.grant.viu[S.grant.n] = 1; };
TOQUES['gr-prox'] = function () { S.grant.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
