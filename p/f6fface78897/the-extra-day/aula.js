/* ============================================================
   THE EXTRA DAY · THE FAMILY CALENDAR · LIVE CLASS     05/10/2026
   Main series A1 · os ordinais (first, second, third, fifth, twelfth,
   twentieth) · a data de dois jeitos (the third of May / May the third)
   · on + dia, in + mês/ano.
   O MUNDO: o calendário da parede da família. O aluno organiza os
   aniversários: o professor dita, o aluno arrasta o adesivo para o dia
   (ou toca no adesivo e depois no dia). Depois as datas dele, e o dia
   extra de fevereiro.
   Motor comum: kit/motor.js. Arrastar vira os mesmos dois toques, então
   o fio da sala repete igual dos dois lados.
   Mantido da aula antiga: os dez áudios (os pares difíceis e a moça do
   dia 29), as fotos e as pistas "ten days later".
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'calendario' },
  { k: 'datas', est: 'o', min: 7, img: 'calendario', rot: 'I · Three Birthdays', t: 'Before the calendar: your dates.', p: 'Pick a card. Say the date out loud, any way you can. Then the follow-up comes.' },
  { k: 'numero', est: 'f', min: 6, img: 'quadro', rot: 'II · The Number Changes', t: 'A number can’t be a date until it becomes another word.', p: 'Say the number. Pick how it changes. Then watch it become a date.' },
  { k: 'regra', est: 'f', min: 6, img: 'quadro', rot: 'III · The Last Number', t: 'Big numbers: look only at the last one.', p: 'Read the cards out loud. Then fix the four traps.' },
  { k: 'adesivos', est: 'l', min: 7, img: 'calendario', rot: 'IV · The Family Calendar', t: 'Your teacher says the birthdays. You put them on the wall.', p: 'Listen. Drag the sticker to the day, or tap the sticker and then the day.' },
  { k: 'ouve', est: 'l', min: 7, img: 'quadro', rot: 'V · Fourteenth or Fortieth?', t: 'Six messages. Some numbers sound almost the same.', p: 'Play it once. Say the date back. Then pick it.' },
  { k: 'onin', est: 'f', min: 6, img: 'calendario', rot: 'VI · On, In', t: 'A day is small: ON. A month or a year is big: IN.', p: 'Read the line with the right word. One takes nothing.' },
  { k: 'volta', est: 'o', min: 7, extra: 1, img: 'calendario', rot: 'VII · Ten Days Later', t: 'The same month. These cards don’t give numbers.', p: 'Read the clue. Find the day. Say the date out loud. Then tap it.' },
  { k: 'extra', est: 'o', min: 7, extra: 1, img: 'quadro', rot: 'VIII · The Extra Day', t: 'One year in four, February gets one more day.', p: 'Play her two messages. Answer. Then plan YOUR extra day.' },
  { k: 'fim', est: 'w', min: 6, img: 'calendario', rot: 'IX · Your Calendar', t: 'Five dates that matter to you.', p: 'Write five lines with a date and ON or IN. The red line watches the dates. It goes to your My notes.' }
];

/* o mês da parede: março de 2027 começa na segunda */
var MES = 'MARCH 2027', INICIO = 0, DIAS = 31, SEMANA = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
var ORD = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth',
  'twenty-first', 'twenty-second', 'twenty-third', 'twenty-fourth', 'twenty-fifth', 'twenty-sixth', 'twenty-seventh', 'twenty-eighth', 'twenty-ninth', 'thirtieth', 'thirty-first'];

/* I · datas */
var DATAS = [
  { k: 'YOUR BIRTHDAY', q: 'When is your birthday?', fup: 'What do you do on your birthday?', st: ['My birthday is on the … of …', 'It’s on … the …'], ex: 'My birthday is on the ninth of July. I have dinner with friends.' },
  { k: 'SOMEONE CLOSE', q: 'When is the birthday of someone close to you?', fup: 'What do you usually give them?', st: ['My mom’s birthday is on the …'], ex: 'My mom’s birthday is on the twelfth of May. I usually give her flowers.' },
  { k: 'THIS YEAR', q: 'Tell me an important date for you.', fup: 'Why is it important?', st: ['It’s on the … of …'], ex: 'The third of February. It’s my mother’s birthday.' },
  { k: 'NEXT HOLIDAY', q: 'When is your next holiday or day off?', fup: 'What do you do on that day?', st: ['It’s on the …', 'It’s in …'], ex: 'It’s on the twentieth of November. I have a party.' }
];

/* II · o número muda */
var NUMS = [
  { a: 'one', b: 'first', k: 'nova' }, { a: 'five', b: 'fifth', k: 'muda' }, { a: 'four', b: 'fourth', k: 'th' },
  { a: 'two', b: 'second', k: 'nova' }, { a: 'twelve', b: 'twelfth', k: 'muda' }, { a: 'six', b: 'sixth', k: 'th' },
  { a: 'three', b: 'third', k: 'nova' }, { a: 'eight', b: 'eighth', k: 'muda' }, { a: 'ten', b: 'tenth', k: 'th' },
  { a: 'nine', b: 'ninth', k: 'muda' }, { a: 'twenty', b: 'twentieth', k: 'muda' }, { a: 'eleven', b: 'eleventh', k: 'th' }
];
var PILHAS = [['nova', 'A NEW WORD', 'one → first'], ['muda', 'THE SPELLING BENDS', 'five → fifth'], ['th', 'JUST ADD -TH', 'four → fourth']];

/* IV · os adesivos da família (o professor dita) */
var ADES = [
  { k: 'mom', nome: 'MOM', fala: 'Mom', cor: '#ff8fa3', d: 9 },
  { k: 'dad', nome: 'DAD', fala: 'Dad', cor: '#7fb8ff', d: 14 },
  { k: 'sara', nome: 'SARA', fala: 'Sara', cor: '#c49bff', d: 21 },
  { k: 'grandpa', nome: 'GRANDPA', fala: 'Grandpa', cor: '#ffc163', d: 23 },
  { k: 'leo', nome: 'BABY LEO', fala: 'Baby Leo', cor: '#7fe0b0', d: 30 },
  { k: 'rita', nome: 'AUNT RITA', fala: 'Aunt Rita', cor: '#ff9e6b', d: 3 }
];
function adesivoDe(d) { return ADES.filter(function (a) { return S.ad.pos[a.k] === d; })[0]; }

/* V · os pares difíceis */
var OUVE = [
  { au: 'd1.mp3', t: 'Hi, it’s me. Can you do the fourteenth of March?', op: ['the fourteenth', 'the fortieth', 'the fourth'], pq: 'four-TEENTH: the stress is at the end.' },
  { au: 'd2.mp3', t: 'The class starts on the first of April. Not the second.', op: ['the first', 'the second', 'the third'], pq: 'She says the wrong one too, so you hear the right one.' },
  { au: 'd3.mp3', t: 'Sorry, I moved it to the twenty-third.', op: ['the twenty-third', 'the twenty-first', 'the thirty-third'], pq: 'Ends in 3: third comes back.' },
  { au: 'd4.mp3', t: 'We land on the thirtieth of June, very late.', op: ['the thirtieth', 'the thirteenth', 'the third'], pq: 'THIR-tieth: the stress is at the front.' },
  { au: 'd5.mp3', t: 'Your appointment is on Tuesday the fifth.', op: ['the fifth', 'the fourth', 'the fifteenth'], pq: 'A weekday and a date together. The date still takes THE.' },
  { au: 'd6.mp3', t: 'It’s the twelfth, not the twentieth. The twelfth.', op: ['the twelfth', 'the twentieth', 'the second'], pq: 'On the phone these two sound close. She says it twice.' }
];

/* VI · on, in: a primeira é a certa */
var ONIN = [
  { f: 'Dad’s birthday is ___ the fourteenth.', op: ['on', 'in'], pq: 'One day: ON.' },
  { f: 'My birthday is ___ June.', op: ['in', 'on'], pq: 'A month: IN.' },
  { f: 'Baby Leo’s birthday is ___ May.', op: ['in', 'on'], pq: 'A month: IN.' },
  { f: 'The class is ___ Monday.', op: ['(nothing)', 'on'], pq: 'NEXT and LAST push the little word out.' },
  { f: 'The party is ___ Saturday the twentieth.', op: ['on', 'in'], pq: 'The day decides: ON.' },
  { f: 'We always travel ___ December.', op: ['in', 'on'], pq: 'A month: IN.' }
];

/* VII · dez dias depois */
var VOLTA = [
  { q: 'BUY A CAKE', d: 8, dica: 'the day before Mom’s birthday' },
  { q: 'CALL DAD', d: 15, dica: 'the day after Dad’s birthday' },
  { q: 'VISIT GRANDPA', d: 25, dica: 'two days after Grandpa’s birthday' },
  { q: 'WRAP THE PRESENT', d: 20, dica: 'the day before Sara’s birthday' },
  { q: 'BABY LEO’S PARTY', d: 31, dica: 'the last day of the month' }
];

/* VIII · o dia extra */
var EXTRA = [
  { q: 'Say her date both ways.', ex: 'The twenty-ninth of February. February the twenty-ninth.' },
  { q: 'She is forty. How many real birthdays is that?', ex: 'Ten. Forty divided by four is ten.' },
  { q: 'Her birthday is on the twenty-ninth of February. In other years: the twenty-eighth, or the first of March?', ex: 'On the first of March. The twenty-ninth comes after the twenty-eighth.' }
];

/* ---------- o corretor (nível 1: a regra desta aula) ---------- */
var CARD = '(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|twenty-one|twenty-two|twenty-three|twenty-four|twenty-five|twenty-six|twenty-seven|twenty-eight|twenty-nine|thirty-one)';
var MESES = '(?:january|february|march|april|may|june|july|august|september|october|november|december)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp('\\bthe (' + CARD + '|\\d{1,2}) of ' + MESES + '\\b', 'g'), m, 1, 'A date needs the ordinal: the twelfth of May.'));
  out = out.concat(A(new RegExp('\\b(?:on|is|it\'s) the (' + CARD + ')\\b(?!-)', 'g'), m, 1, 'A date needs the ordinal: on the twelfth.'));
  out = out.concat(A(new RegExp('\\b' + MESES + ' (' + CARD + ')\\b(?!-)', 'g'), m, 1, 'May the second, or May second: the ordinal.'));
  out = out.concat(A(/\b((?:twenty|thirty)-(?:oneth|twoth|threeth)|oneth|twoth|threeth|fiveth|twelveth|nineth|eightth|twentyth|thirtyth)\b/g, m, 1, 'Look at the last number: twenty-first, twenty-second, twenty-third · fifth, twelfth, ninth, twentieth.'));
  out = out.concat(A(/\b(in) the (?:\w+-)?(?:first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth|\w+teenth|twentieth|thirtieth|\d{1,2}(?:st|nd|rd|th))\b/g, m, 1, 'One day is small: ON the twenty-first.'));
  out = out.concat(A(new RegExp('\\b(on) (?:' + MESES + '|\\d{4})\\b(?! (?:the )?(?:\\d|first|second|third|\\w+th\\b))', 'g'), m, 1, 'A month or a year is big: IN June, IN 2019.'));
  out = out.concat(A(/\b(on|in) (?:next|last) (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|week|month|year)\b/g, m, 1, 'Next and last push the little word out: next Monday.'));
  return out;
};

/* ---------- o estado (o mesmo dos dois lados) ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  datas: { sel: -1, foi: {} }, nu: { n: 0, esc: '' }, ad: { sel: '', pos: {}, err: '', meus: {} },
  ou: { n: 0, esc: '' }, oi: { n: 0, esc: '' }, vo: { n: 0, esc: 0 }, ex: { vis: {} } };

/* ---------- o calendário da parede ---------- */
function calendario(modo) {
  var cel = '';
  for (var b = 0; b < INICIO; b++) cel += '<span class="vazio"></span>';
  for (var d = 1; d <= DIAS; d++) {
    var a = adesivoDe(d), extra = '', cls = '';
    if (modo === 'volta') {
      var achou = VOLTA.filter(function (v, i) { return i < S.vo.n && v.d === d; })[0];
      if (achou) extra = '<em class="nota">' + achou.q + '</em>';
      if (S.vo.esc === d) cls = VOLTA[S.vo.n] && VOLTA[S.vo.n].d === d ? ' certo' : ' errado';
    }
    if (S.ad.meus[d]) extra += '<em class="meu">YOURS</em>';
    cel += '<button type="button" class="dia' + cls + (a ? ' tem' : '') + '" data-a="' + (modo === 'volta' ? 'vo' : 'dia') + '" data-n="' + d + '"><b>' + d + '</b>'
      + (a ? '<span class="adesivo" style="--c:' + a.cor + '">' + a.nome + '</span>' : '') + extra + '</button>';
  }
  return '<div class="parede vd"><div class="mes"><b>' + MES + '</b><small>THE KITCHEN WALL</small></div><div class="semana">' + SEMANA.map(function (s) { return '<span>' + s + '</span>'; }).join('') + '</div><div class="grade-dias">' + cel + '</div></div>';
}

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE FAMILY CALENDAR · A1</span><h1>The Extra <b>Day</b></h1>'
    + '<p class="sub">Twelve is a number. The twelfth is a date. And one day in four years has to go somewhere.</p>'
    + '<div class="chipsx"><span class="pilula">twelve → the twelfth</span><span class="pilula">the third of May · May the third</span><span class="pilula">on · in</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn the page</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('calendario') + '" alt="A wall calendar in a kitchen"><div class="selo-29"><small>FEBRUARY</small><b>29</b><span>the twenty-ninth</span></div></div></div>';
};
R.datas = function (c) { return cartasPessoais(c, DATAS, S.datas, 'datas'); };
R.numero = function (c) {
  var u = S.nu, n = u.n, fim = n >= NUMS.length, x = NUMS[Math.min(n, NUMS.length - 1)];
  var feitos = NUMS.slice(0, n);
  var pilhas = '<div class="pilhas">' + PILHAS.map(function (p) { var dentro = feitos.filter(function (z) { return z.k === p[0]; }); return '<div class="pilha vd"><small>' + p[1] + '</small><span class="ex-p">' + p[2] + '</span><div class="cartinhas">' + dentro.map(function (z) { return '<i>' + z.b + '</i>'; }).join('') + '</div></div>'; }).join('') + '</div>';
  if (fim) return cab(c) + pilhas + '<div class="foco"><div class="pergunta vd"><small>TWELVE NUMBERS</small><h2>Only three had to be learned as new words: first, second, third.</h2></div></div>';
  var certo = u.esc === x.k;
  var morfo = '<div class="morfo vd' + (certo ? ' virou' : '') + '"><span class="de">' + x.a + '</span><span class="seta">→</span><span class="para">' + (certo ? 'the ' + x.b.split('').map(function (ch, i) { return '<i style="animation-delay:' + i * 60 + 'ms">' + ch + '</i>'; }).join('') : '?') + '</span></div>';
  return cab(c) + trilha(NUMS, n) + morfo
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.a + ' → the ' + x.b + '. Say both words out loud.</p><div style="text-align:center"><button type="button" class="btn" data-a="nu-prox">Next number</button></div>'
      : '<div class="veredito">' + PILHAS.map(function (p) { return '<button type="button" class="btn' + (u.esc === p[0] ? ' errado' : '') + '" data-a="nu" data-v="' + p[0] + '">' + p[1] + '</button>'; }).join('') + '</div>'
        + (u.esc ? '<p class="recusa" style="text-align:center">Say both words out loud. A new word, a bent spelling, or just -TH?</p>' + mostra('nu' + n, x.a + ' → ' + x.b) : ''))
    + pilhas;
};
R.regra = function (c) {
  var cartoes = '<div class="cartoes">'
    + '<div class="cr vd"><small>1 · THREE NEW WORDS</small><h3><em>first · second · third</em></h3><div class="ex"><span>the <u>twenty-first</u>, the <u>thirty-first</u></span></div></div>'
    + '<div class="cr vd"><small>2 · EVERYTHING ELSE: -TH</small><h3>look at the <em>last number</em></h3><div class="ex"><span>the <u>fourteenth</u> · the <u>twenty-fifth</u></span><span>fifth · twelfth · ninth · <u>twentieth</u></span></div></div>'
    + '<div class="cr vd"><small>3 · TWO WAYS</small><h3><em>the third of May</em> · <em>May the third</em></h3><div class="ex"><span>Written: May 3 · 3 May</span></div></div>'
    + '<div class="cr vd"><small>4 · SMALL OR BIG</small><h3><em>on</em> a day · <em>in</em> a month, a year</h3><div class="ex"><span><u>on</u> the ninth · <u>in</u> March · <u>in</u> 2027</span></div></div></div>';
  return cab(c) + cartoes + armas([
    ['THE NUMBER', 'My birthday is on the twelve of May.', 'My birthday is on the twelfth of May.', 'A date needs the ordinal.'],
    ['THE LAST NUMBER', 'the twenty-oneth', 'the twenty-first', 'Ends in 1: first comes back.'],
    ['IN A DAY', 'The exam is in the twenty-first.', 'The exam is on the twenty-first.', 'One day is small: ON.'],
    ['ON A MONTH', 'My birthday is on June.', 'My birthday is in June.', 'A month is big: IN.']], 'THE FOUR TRAPS · TAP TO FIX');
};
R.adesivos = function (c) {
  var a = S.ad, postos = ADES.filter(function (x) { return a.pos[x.k]; }).length, todos = postos === ADES.length;
  var ditado = '<div class="so-prof ditado"><small>TEACHER · READ ONE AT A TIME</small>' + ADES.map(function (x) { return '<span class="' + (a.pos[x.k] ? 'feito' : '') + '">' + x.fala + '’s birthday is on the <b>' + ORD[x.d] + '</b> of March.</span>'; }).join('') + '</div>';
  var cartela = '<div class="cartela">' + ADES.map(function (x) {
    if (a.pos[x.k]) return '<span class="adesivo usado" style="--c:' + x.cor + '">' + x.nome + ' · ' + ORD[x.d] + '</span>';
    return '<button type="button" class="adesivo' + (a.sel === x.k ? ' on' : '') + '" style="--c:' + x.cor + '" draggable="true" data-a="ad" data-v="' + x.k + '">' + x.nome + '</button>';
  }).join('') + '</div>';
  var lado = '<div class="lado-cal">' + (todos ? '' : ditado + '<div class="diz"><h5>THE STICKERS · ' + postos + ' OF 6</h5></div>' + cartela)
    + (a.err ? '<p class="recusa">' + a.err + '</p>' + mostra('ad' + a.sel, (function () { var x = ADES.filter(function (z) { return z.k === a.sel; })[0]; return x ? x.nome + ': the ' + ORD[x.d] + ' of March.' : ''; })()) : '')
    + (todos ? follow('NOW YOU', 'Tap two days that matter to you this month. Say them out loud.', ['The … is my …', 'On the … I …'], [], 'admeu', mostra('admeu', 'The seventeenth is my friend’s birthday. On the twenty-sixth I have a concert.', 1))
      : '<p class="dica-aluno">Listen to your teacher. Drag the sticker to the day, or tap it and then tap the day.</p>') + '</div>';
  return cab(c) + '<div class="mesa-cal">' + calendario('ad') + lado + '</div>';
};
R.ouve = function (c) {
  var o = S.ou, n = o.n, fim = n >= OUVE.length, x = OUVE[Math.min(n, OUVE.length - 1)];
  if (fim) return cab(c) + trilha(OUVE, n) + '<div class="foco"><div class="pergunta vd"><small>SIX DATES, HEARD ONCE</small><h2>four-TEENTH, FOR-tieth · THIR-teenth, THIR-tieth: listen to the end of the word.</h2></div></div>';
  var certo = o.esc === x.op[0], ops = ordem(x.op, n + 1);
  return cab(c) + trilha(OUVE, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (certo ? '“' + x.t + '”' : 'Play it. Say the date back before you pick.') + '</span></div>'
    + '<div class="versoes linha3">' + ops.map(function (op) { return '<button type="button" class="versao' + (o.esc === op ? (op === x.op[0] ? ' certo' : ' errado') : '') + '" data-a="ou" data-v="' + op + '">' + op + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.pq + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ou-prox">Next message</button></div>'
      : (o.esc ? '<p class="recusa" style="text-align:center">Play it again and listen only to the end of the word.</p>' + mostra('ou' + n, '“' + x.t + '” → ' + x.op[0]) : '')) + '</div>';
};
R.onin = function (c) {
  var o = S.oi, n = o.n, fim = n >= ONIN.length, x = ONIN[Math.min(n, ONIN.length - 1)];
  if (fim) return cab(c) + trilha(ONIN, n) + '<div class="foco"><div class="pergunta vd"><small>SIX LINES</small><h2>The size of the box decided every one: on a day, in a month or a year.</h2></div></div>';
  var certo = o.esc === x.op[0], ops = ordem(x.op, n);
  return cab(c) + trilha(ONIN, n) + '<div class="foco"><div class="linha-data vd">' + x.f.replace('___', '<span class="gap' + (certo ? ' cheio' : '') + '">' + (certo ? (x.op[0] === '(nothing)' ? '·' : x.op[0]) : '___') + '</span>') + '</div>'
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.pq + ' Read the whole line out loud.</p><div style="text-align:center"><button type="button" class="btn" data-a="oi-prox">Next line</button></div>'
      : '<div class="veredito">' + ops.map(function (op) { return '<button type="button" class="btn' + (o.esc === op ? ' errado' : '') + '" data-a="oi" data-v="' + op + '">' + op + '</button>'; }).join('') + '</div>'
        + (o.esc ? '<p class="recusa" style="text-align:center">One day, or many days? That’s the whole question.</p>' + mostra('oi' + n, x.f.replace('___', x.op[0] === '(nothing)' ? '' : x.op[0]).replace('  ', ' ') + ' ' + x.pq) : '')) + '</div>';
};
R.volta = function (c) {
  var v = S.vo, n = v.n, fim = n >= VOLTA.length, x = VOLTA[Math.min(n, VOLTA.length - 1)];
  var lado;
  if (fim) lado = '<div class="pergunta vd"><small>FIVE NEW DATES</small><h2>They only existed because of the old ones.</h2></div>';
  else {
    var certo = v.esc === x.d;
    lado = '<div class="pergunta vd ja"><small>CARD ' + (n + 1) + ' OF ' + VOLTA.length + ' · ' + x.q + '</small><h2>' + x.dica + '</h2></div>'
      + (certo ? '<p class="aprova">GOT IT. The ' + ORD[x.d] + ' of March. Say it both ways: the ' + ORD[x.d] + ' of March, March the ' + ORD[x.d] + '.</p><div><button type="button" class="btn" data-a="vo-prox">Next card</button></div>'
        : (v.esc ? '<p class="recusa">That’s the ' + ORD[v.esc] + '. Find the day the card names first. Then move.</p>' + mostra('vo' + n, x.q + ': the ' + ORD[x.d] + ' of March.') : '<p class="dica-aluno">Say the date out loud. Then tap the day.</p>'));
  }
  return cab(c) + trilha(VOLTA, n) + '<div class="mesa-cal">' + calendario('volta') + '<div class="lado-cal">' + lado + '</div></div>';
};
R.extra = function (c) {
  var e = S.ex;
  var fev = ''; for (var d = 1; d <= 29; d++) fev += '<span class="' + (d === 29 ? 'd29' : '') + '">' + d + '</span>';
  return cab(c) + '<div class="mesa-cal"><div class="lado-cal"><div class="fev vd"><div class="mes"><b>FEBRUARY 2028</b><small>ONE YEAR IN FOUR</small></div><div class="grade-fev">' + fev + '</div></div>'
    + '<div class="toca-linha vd">' + tocar('d-feb1.mp3') + '<span>' + (e.vis.a ? '“My birthday is on the twenty-ninth of February.”' : 'Message 1') + '</span></div>'
    + '<div class="toca-linha vd">' + tocar('d-feb2.mp3') + '<span>' + (e.vis.b ? '“So I have a real birthday every four years.”' : 'Message 2') + '</span></div>'
    + (e.vis.a ? '' : '<button type="button" class="pilula" data-a="ex-vis">Show the words</button>')
    + '</div>'
    + '<div class="lado-cal">' + (e.plano ? '' : EXTRA.map(function (q, i) { return '<div class="q-extra vd"><small>QUESTION ' + (i + 1) + '</small><p>' + q.q + '</p>' + mostra('ex' + i, q.ex) + '</div>'; }).join('') + '<div><button type="button" class="btn cheio" data-a="ex-plano">Now plan YOUR extra day</button></div>') + (!e.plano ? '' : follow('YOUR EXTRA DAY', 'An extra day, just for you. What do you do in the morning, the afternoon and the evening?', ['In the morning I …', 'In the afternoon …', 'In the evening …'], [], 'exf', mostra('exf', 'In the morning I sleep late. In the afternoon I go to the beach with my sister. In the evening I cook a big dinner.', 1)) + '<div><button type="button" class="pilula" data-a="ex-plano">Back to her questions</button></div>') + '</div></div>';
};
R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My birthday is on the ninth of July.\nMy mom’s birthday is in May, on the twelfth.\nI started my job in 2023.', 'Your calendar',
    ['My birthday is on the ', ' of ', 'first', 'second', 'third', 'twelfth', 'twentieth', 'in '], ['YOUR CALENDAR', 'Five dates that matter to you: birthdays, a holiday, a special day.'])
    + '<div class="lado-fim"><div class="grande vd"><span><b>the twelfth</b> of May</span><span>May <b>the third</b></span><span><b>on</b> a day · <b>in</b> a month</span><small>A date needs the ordinal. Look at the last number: first, second, third; everything else -th. On the ninth, in June, in 2027.</small></div>'
    + mostra('fim', 'My birthday is on the ninth of July.<br>My mom’s birthday is on the twelfth of May.<br>My holiday starts on the twentieth of December.<br>My best friend’s birthday is on the third of February.<br>Christmas is on the twenty-fifth of December.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- os toques desta aula ---------- */
TOQUES.nu = function (b, n, v) { var x = NUMS[S.nu.n]; if (!x || S.nu.esc === x.k) return false; S.nu.esc = v; };
TOQUES['nu-prox'] = function () { S.nu = { n: S.nu.n + 1, esc: '' }; };
TOQUES.ad = function (b, n, v) { S.ad.sel = v; S.ad.err = ''; };
TOQUES.dia = function (b, n) {
  var a = S.ad;
  if (!a.sel) { if (ADES.every(function (x) { return a.pos[x.k]; })) { a.meus[n] = !a.meus[n]; return; } return false; }
  var x = ADES.filter(function (z) { return z.k === a.sel; })[0];
  if (adesivoDe(n)) { a.err = 'That day already has a sticker.'; return; }
  if (x.d === n) { a.pos[x.k] = n; a.sel = ''; a.err = ''; }
  else a.err = 'That’s the ' + ORD[n] + '. Ask again: “Sorry, which day?”';
};
TOQUES.ou = function (b, n, v) { var x = OUVE[S.ou.n]; if (!x || S.ou.esc === x.op[0]) return false; S.ou.esc = v; };
TOQUES['ou-prox'] = function () { S.ou = { n: S.ou.n + 1, esc: '' }; };
TOQUES.oi = function (b, n, v) { var x = ONIN[S.oi.n]; if (!x || S.oi.esc === x.op[0]) return false; S.oi.esc = v; };
TOQUES['oi-prox'] = function () { S.oi = { n: S.oi.n + 1, esc: '' }; };
TOQUES.vo = function (b, n) { var x = VOLTA[S.vo.n]; if (!x || S.vo.esc === x.d) return false; S.vo.esc = n; };
TOQUES['vo-prox'] = function () { S.vo = { n: S.vo.n + 1, esc: 0 }; };
TOQUES['ex-vis'] = function () { S.ex.vis = { a: 1, b: 1 }; };
TOQUES['ex-plano'] = function () { S.ex.plano = !S.ex.plano; };

/* arrastar o adesivo até o dia: vira os mesmos dois toques (o fio repete igual) */
var ARRASTA = '';
document.addEventListener('dragstart', function (ev) { var b = ev.target.closest && ev.target.closest('[data-a="ad"]'); if (!b) return; ARRASTA = b.getAttribute('data-v'); try { ev.dataTransfer.setData('text/plain', 'x'); } catch (e) { /* segue */ } });
document.addEventListener('dragover', function (ev) { if (ev.target.closest && ev.target.closest('[data-a="dia"]')) ev.preventDefault(); });
document.addEventListener('drop', function (ev) {
  var d = ev.target.closest && ev.target.closest('[data-a="dia"]'); if (!d || !ARRASTA) return; ev.preventDefault();
  var n = d.getAttribute('data-n'), v = ARRASTA; ARRASTA = '';
  if (S.ad.sel !== v) { var s = document.querySelector('[data-a="ad"][data-v="' + v + '"]'); if (s) s.click(); }
  var alvo = document.querySelector('[data-a="dia"][data-n="' + n + '"]'); if (alvo) alvo.click();
});
