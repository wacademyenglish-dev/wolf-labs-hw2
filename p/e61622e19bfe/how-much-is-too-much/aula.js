/* ============================================================
   HOW MUCH IS TOO MUCH · THE GAUGE · LIVE CLASS  06/10/2026
   Main series B1 · too much (não contável) × too many (contável) ·
   enough antes do substantivo e depois do adjetivo · not enough como
   queixa (+ to…) · too + adjetivo · I don't have enough.
   Erros universais: "too much people", "enough big", "I have not
   enough", "too much tired", "too many coffee".
   O MUNDO (da aula velha): telas e a semana; cinco números (205 vezes
   por dia, quatro horas e meia, a vibração fantasma, 80% contra um
   terço, casais que se conheceram online), cinco áudios conferidos no
   whisper em 06/10 (d4 começa com "But": a transcrição também).
   A CARA: o MEDIDOR — um mostrador de painel em semicírculo: NOT ENOUGH
   à esquerda, ENOUGH (verde) no meio, TOO MUCH à direita; tocar o seu
   número move o ponteiro. Fila: FILA-LIVE-386.md · 087.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. II = o palpite do
   número (FM.escolhe: opções de número diferentes) e a gravação responde
   depois do toque; V = achar a parte quebrada de cinco frases com a regra
   no canto (FM.erro); VIII = ligar cada amigo ao problema (FM.liga) e dar
   o conselho falado; IX = separar palavras: ENOUGH vem antes ou depois?
   (FM.separa). I, III, IV, VI, VII e X ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'quarto' },
  { k: 'chute', est: 'o', min: 7, img: 'quarto', rot: 'I · Your Week, Guessed', t: 'Five numbers about your own week. Nobody is going to check them.', p: 'Say the number out loud first. Then tap the closest one. Guess, don’t calculate.' },
  { k: 'numero', est: 'l', min: 7, img: 'quarto', rot: 'II · Guess the Number', t: 'Five numbers about phones and people. You guess first; the recording answers.', p: 'Guess out loud. Tap your guess. Play the answer. Then do the Your turn line.' },
  { k: 'gauge', est: 'o', min: 7, img: 'mesa2', rot: 'III · The Gauge', t: 'Six gauges of your day. Somewhere on each one, a good amount stops being good.', p: 'Tap your real number. The needle moves. Read the sentence out loud, all of it.' },
  { k: 'dois', est: 'o', min: 7, extra: 1, img: 'mesa2', rot: 'IV · Same Number, Two People', t: 'One number, two different people. The number doesn’t change; the words do.', p: 'Read each person. Pick a label for them: it’s your opinion. Then say why.' },
  { k: 'erros', est: 'f', min: 6, img: 'quarto', rot: 'V · Count It First', t: 'Before you pick much or many, ask one question: can I count it?', p: 'Find the broken part in each line. Say the fix. The rule is in the corner. Then tap Check.' },
  { k: 'post', est: 'o', min: 7, img: 'mesa2', rot: 'VI · Eighty Against a Third', t: 'Online, about 80% of what we say is about ourselves. Face to face, about a third.', p: 'Tell each story twice: first as a post, then as if your teacher were across the table.' },
  { k: 'escuro', est: 'o', min: 7, extra: 1, img: 'janela', rot: 'VII · The Screen Goes Dark', t: 'The gauge goes dark. Look away and talk.', p: 'Nothing to read here.' },
  { k: 'amigo', est: 'o', min: 7, extra: 1, img: 'bolso', rot: 'VIII · A Tired Friend', t: 'Four friends tell you about their week.', p: 'Match each friend to the problem. Then give each one a piece of advice out loud. Your teacher plays the friend.' },
  { k: 'falta', est: 'f', min: 6, extra: 1, img: 'janela', rot: 'IX · What Isn’t Enough', t: 'Not enough is a complaint, and a complaint needs a reason.', p: 'Tap a word, then its box: does ENOUGH go before it or after it? Then say a complaint with each one.' },
  { k: 'fim', est: 'w', min: 6, img: 'manha', rot: 'X · Your Gauge Again', t: 'Your five guesses from scene I come back.', p: 'Write your own gauge: one too much, one too many, one not enough, one just enough. It goes to your My notes.' }
];

var TR = {
  'd1.mp3': 'How many times a day does a person pick up their phone? A report from December 2024 put the number at two hundred and five. Two hundred and five times, every day.',
  'd2.mp3': 'And how long is all of that? About four and a half hours on the phone, and more than five hours on screens in total. That is a working day, every day, on top of the working day.',
  'd3.mp3': 'Do people feel their phone vibrate when it did not? Studies of students find it almost everywhere. Some put it at two thirds. Some put it at nine in ten. Almost nobody says never.',
  'd4.mp3': 'But face to face, how much of what we say is about ourselves? Around a third. Online, it is closer to eighty percent. Same person, same day, twice as much about them.',
  'd5.mp3': 'And one more, and it does not fit the story. Couples who meet online tend to like each other more than couples who meet face to face. The same screen that takes your evening is also the one that introduced them.'
};

var CHUTES = [
  { q: 'Hours a day on a screen, not counting work.', ops: ['0–1', '2–3', '4–5', '6 or more'] },
  { q: 'Times you pick up your phone before lunch.', ops: ['under 10', '10–25', '25–50', 'I don’t know: a lot'] },
  { q: 'Minutes between waking up and your first screen.', ops: ['under 1', '1–10', '10–30', 'more than 30'] },
  { q: 'Cups of coffee or tea a day.', ops: ['0', '1–2', '3–4', '5 or more'] },
  { q: 'Hours of sleep on a normal night.', ops: ['under 6', '6–7', '7–8', 'more than 8'] }
];
var NUMERO = [
  { q: 'How many times a day does a person pick up their phone?', op: ['about 40', 'about 90', 'about 205', 'about 400'], a: 2, au: 'd1.mp3', w: 'About two hundred and five: roughly once every five waking minutes.', fala: 'Is 205 too many, or is it just what a phone is for?' },
  { q: 'And how many hours a day is all of that?', op: ['about 2', 'about 4 and a half', 'about 7', 'about 9'], a: 1, au: 'd2.mp3', w: 'About four and a half hours on the phone, and more than five on screens in total.', fala: 'Is that too much time, or not enough for what you use it for?' },
  { q: 'How many people feel their phone buzz when it didn’t?', op: ['about 1 in 10', 'about half', 'two thirds to nine in ten', 'almost nobody'], a: 2, au: 'd3.mp3', w: 'Two thirds to nine in ten, depending on the study. Almost nobody says never.', fala: 'When did that last happen to you? Tell it in three sentences.' },
  { q: 'Face to face, how much of what we say is about ourselves?', op: ['about a tenth', 'about a third', 'about two thirds', 'almost all of it'], a: 1, au: 'd4.mp3', w: 'About a third face to face, and closer to eighty percent online.', fala: 'Your last five messages: too much about you, or not enough?' },
  { q: 'And the finding that doesn’t fit the story?', op: ['people argue more online', 'couples who meet online like each other more', 'nobody reads anything', 'screens make you faster'], a: 1, au: 'd5.mp3', w: 'Couples who meet online tend to like each other more. The same screen that takes your evening introduced them.', fala: 'Who is in your life today because of a screen?' }
];
var GAUGES = [
  { q: 'COFFEE', u: 'cups', u1: 'cup', max: 8, lo: 1, hi: 3, alto: '{n} {u}? That’s too much coffee: too many cups.', baixo: '{n} {u}? That’s not enough coffee for my mornings.', ok: '{n} {u} is enough coffee.' },
  { q: 'SLEEP', u: 'hours', u1: 'hour', max: 12, lo: 7, hi: 9, alto: '{n} {u} is too much sleep: I wake up tired.', baixo: '{n} {u}? I don’t get enough sleep.', ok: '{n} {u} is enough sleep for me.' },
  { q: 'PHONE', u: 'hours', u1: 'hour', max: 12, lo: 1, hi: 2, alto: '{n} {u} is too much time on my phone.', baixo: '{n} {u} isn’t enough to answer all my messages.', ok: '{n} {u} is enough phone time.' },
  { q: 'WORK', u: 'hours', u1: 'hour', max: 12, lo: 6, hi: 8, alto: '{n} {u} is too many hours of work.', baixo: '{n} {u} isn’t enough work to pay the bills.', ok: '{n} {u} of work is enough.' },
  { q: 'PEOPLE AT DINNER', u: 'people', u1: 'person', max: 12, lo: 2, hi: 6, alto: '{n} {u}? That’s too many people: I can’t hear anybody.', baixo: '{n} {u}? There aren’t enough people to talk to.', ok: '{n} {u} is enough for a good dinner.' },
  { q: 'WATER', u: 'glasses', u1: 'glass', max: 12, lo: 6, hi: 9, alto: '{n} {u} is too much water for me.', baixo: '{n} {u}? I don’t drink enough water.', ok: '{n} {u} of water is enough.' }
];
var DOIS = [
  { n: '3 hours of screen time a day', a: 'somebody who gets up at five to train', b: 'somebody whose job is on that screen' },
  { n: '2 cups of coffee', a: 'somebody who works the night shift', b: 'somebody who can’t sleep after an afternoon coffee' },
  { n: '20 messages an hour', a: 'somebody trying to finish a report', b: 'somebody selling things online' },
  { n: 'one whole day with no internet', a: 'somebody on vacation', b: 'somebody waiting for important news' },
  { n: '8 hours of work', a: 'somebody who is paid for six', b: 'somebody who owns the company' }
];
var ROTULOS = [['muito', 'TOO MUCH / TOO MANY'], ['ok', 'ENOUGH'], ['pouco', 'NOT ENOUGH']];
/* V · achar a parte quebrada (FM.erro) */
var ERRO_DOSE = [
  { f: 'There were <u>too much people</u> at the party.', r: 'too many people' },
  { f: 'The room isn’t <u>enough big</u>.', r: 'big enough' },
  { f: '<u>I have not enough</u> time.', r: 'I don’t have enough' },
  { f: 'I drink <u>too many coffee</u>.', r: 'too much coffee' },
  { f: 'He’s <u>too much tired</u> to drive.', r: 'too tired' }
];
var PRESA_DOSE = 'Can you count it? <b>too many</b> people, cups, hours<br>Can’t count it? <b>too much</b> time, coffee, noise<br>Before an adjective: <b>too</b> tired<br><b>enough</b> time · big <b>enough</b><br>I <b>don’t have enough</b> + noun';
var POSTS = ['Something good that happened to you last week.', 'A place you went to that was worth it.', 'Something you finished that took a long time.', 'A day that didn’t go the way you planned.'];
var ESCURO = ['Describe the room you’re in, without looking at it.', 'Say what you’ll do in the two hours after this lesson.', 'Say one thing you’d do this week if your phone were off all day.'];
var AMIGOS = [
  { nome: 'ALEX', diz: 'I sleep four hours a night and drink six cups of coffee to stay awake.' },
  { nome: 'SAM', diz: 'I have eleven apps open, forty tabs and no time to finish anything.' },
  { nome: 'RILEY', diz: 'I haven’t seen a friend in three weeks. I just work and go home.' },
  { nome: 'CASEY', diz: 'My desk is tiny, my chair hurts and I work at it all day.' }
];
/* VIII · ligar cada amigo ao problema (FM.liga) */
var DIAG = ['You don’t sleep enough, and you drink too much coffee.', 'You have too many things open and not enough time.', 'You work too much, and you don’t see enough people.', 'Your desk isn’t big enough, and you sit too much.'];
var LIGA_AMIGO = { formato: 'liga', titulo: 'Match each friend to the problem.', ordemDireita: [2, 0, 3, 1], pares: AMIGOS.map(function (x, i) { return [x.nome + ' · “' + x.diz + '”', DIAG[i]]; }) };
/* IX · ENOUGH antes ou depois? (FM.separa) */
var SEPARA_FALTA = { formato: 'separa', titulo: 'Tap a word, then its box. Where does ENOUGH go?', caixas: ['enough + NOUN · I don’t have enough …', 'ADJECTIVE + enough · It isn’t … enough'], itens: [
  { t: 'time', c: 0 }, { t: 'quiet', c: 1 }, { t: 'sleep', c: 0 }, { t: 'warm', c: 1 }, { t: 'money', c: 0 }, { t: 'big', c: 1 }
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ch: { esc: {} }, gg: { sel: 0, val: {} }, dd: { n: 0, a: '', b: '' }, ps: { n: 0 } };

function mostrador(frac, rot) {
  var ang = -90 + Math.max(0, Math.min(1, frac)) * 180, r = 120, cx = 150, cy = 150;
  function arco(a0, a1, cls) { var p0 = [cx + r * Math.cos((a0 - 90) * Math.PI / 180), cy + r * Math.sin((a0 - 90) * Math.PI / 180)], p1 = [cx + r * Math.cos((a1 - 90) * Math.PI / 180), cy + r * Math.sin((a1 - 90) * Math.PI / 180)]; return '<path d="M' + p0[0].toFixed(1) + ' ' + p0[1].toFixed(1) + ' A' + r + ' ' + r + ' 0 0 1 ' + p1[0].toFixed(1) + ' ' + p1[1].toFixed(1) + '" class="arco ' + cls + '"/>'; }
  var px = cx + 100 * Math.cos((ang - 90) * Math.PI / 180), py = cy + 100 * Math.sin((ang - 90) * Math.PI / 180);
  return '<svg class="mostrador" viewBox="0 0 300 190" role="img" aria-label="Gauge"><rect width="300" height="190" rx="16" class="painel"/>' + arco(-90, -30, 'pouco') + arco(-30, 30, 'ok') + arco(30, 90, 'muito')
    + '<text x="34" y="176" class="lbl pouco">NOT ENOUGH</text><text x="150" y="20" text-anchor="middle" class="lbl ok">ENOUGH</text><text x="266" y="176" text-anchor="end" class="lbl muito">TOO MUCH</text>'
    + '<line x1="150" y1="150" x2="' + px.toFixed(1) + '" y2="' + py.toFixed(1) + '" class="ponteiro"/><circle cx="150" cy="150" r="9" class="eixo-m"/>' + (rot ? '<text x="150" y="182" text-anchor="middle" class="rot-m">' + rot + '</text>' : '') + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · B1 · SCREENS AND THE WEEK</span><h1>How Much Is <b>Too Much</b></h1>'
    + '<p class="sub">Same number, two people: for one it’s <b>too much</b>, for the other it’s <b>not enough</b>.</p>'
    + '<div class="chipsx"><span class="pilula">too much time</span><span class="pilula">too many hours</span><span class="pilula">big enough · enough time</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Read your own gauge</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="tres-m">' + mostrador(.12, 'SLEEP') + mostrador(.5, 'WATER') + mostrador(.9, 'PHONE') + '</div></div></div>';
};

R.chute = function (c) {
  var e = S.ch, feitos = Object.keys(e.esc).length;
  return cab(c) + '<div class="chutes">' + CHUTES.map(function (x, i) { return '<div class="chute vd"><b>' + x.q + '</b><div class="tres-b">' + x.ops.map(function (o, j) { return '<button type="button" class="pilula' + (e.esc[i] === j ? ' certo' : '') + '" data-a="ch" data-n="' + i + '" data-v="' + j + '">' + o + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + (feitos >= 5 ? '<div class="foco">' + fala('ch', ['I think … is too much / too many / not enough.'], ['too much', 'too many', 'not enough', 'enough']) + '<p class="aprova" style="text-align:center">Five guesses. The last scene gives all five back.</p></div>' : '<p class="dica-aluno" style="text-align:center">' + feitos + ' of 5. Nobody checks these.</p>');
};

R.numero = function (c) {
  var r = ((S.fq || {}).nu || {}).r || {};
  var esc = { formato: 'escolhe', titulo: 'Guess out loud first. Then tap.', itens: NUMERO.map(function (x) { return { p: x.q, o: x.op, c: x.a, d: x.w + ' <b>Your turn:</b> ' + x.fala }; }) };
  var players = NUMERO.map(function (x, i) { return r[i] == null ? '' : '<div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>THE ANSWER · ' + (i + 1) + ' OF 5</b></div>' + transcricao(x.au, TR[x.au]) + '</div>'; }).join('');
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + FM.ex('nu', esc) + '</div><div class="lado-l">' + (players || '<p class="dica-aluno">Guess out loud first, then tap. Every answer comes with a recording.</p>') + '</div></div>';
};

R.gauge = function (c) {
  var e = S.gg, x = GAUGES[e.sel], v = e.val[e.sel], frase = '', frac = .5, rot = '';
  if (v !== undefined) {
    var u = v === 1 ? x.u1 : x.u, modelo = v > x.hi ? x.alto : v < x.lo ? x.baixo : x.ok;
    frase = modelo.replace('{n}', v).replace('{u}', u); frase = frase.charAt(0).toUpperCase() + frase.slice(1);
    frac = v < x.lo ? (v / x.lo) / 3 : v > x.hi ? 2 / 3 + Math.min(1, (v - x.hi) / Math.max(1, x.max - x.hi)) / 3 : 1 / 3 + ((v - x.lo) / Math.max(1, x.hi - x.lo)) / 3;
    rot = v + ' ' + u.toUpperCase();
  }
  var nums = []; for (var k = 0; k <= x.max; k++) nums.push(k);
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="abas-g">' + GAUGES.map(function (g, i) { return '<button type="button" class="chip' + (e.sel === i ? ' on' : '') + (e.val[i] !== undefined ? ' feito' : '') + '" data-a="gg" data-n="' + i + '">' + g.q + '</button>'; }).join('') + '</div>' + mostrador(v === undefined ? .5 : frac, rot || x.q) + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">YOUR REAL NUMBER · ' + x.q + ' (' + x.u.toUpperCase() + ' A DAY)</h5><div class="numeros-g">' + nums.map(function (k) { return '<button type="button" class="num-g' + (v === k ? ' on' : '') + '" data-a="gg-v" data-n="' + k + '">' + k + '</button>'; }).join('') + '</div>'
    + (frase ? '<div class="balao vd"><small>READ IT OUT LOUD</small><p>' + frase + '</p></div><p class="dica-aluno">Disagree with the green zone? Say why.</p>' : '<p class="dica-aluno">Tap your number.</p>') + '</div></div>';
};

R.dois = function (c) {
  var e = S.dd, n = Math.min(e.n, DOIS.length - 1), x = DOIS[n];
  function bot(lado) { return '<div class="tres-b">' + ROTULOS.map(function (r) { return '<button type="button" class="pilula' + (e[lado] === r[0] ? ' certo' : '') + '" data-a="dd" data-v="' + lado + ':' + r[0] + '">' + r[1] + '</button>'; }).join('') + '</div>'; }
  return cab(c) + trilha(DOIS, e.n) + '<div class="foco"><div class="balao vd"><small>THE SAME NUMBER</small><p>' + x.n + '</p></div><div class="dois-p">'
    + '<div class="pessoa vd"><small>PERSON A</small><b>' + x.a + '</b>' + bot('a') + '</div><div class="pessoa vd"><small>PERSON B</small><b>' + x.b + '</b>' + bot('b') + '</div></div>'
    + (e.a && e.b ? '<p class="aprova" style="text-align:center">Now say why, for each person, in a full sentence.</p>' + (n < DOIS.length - 1 ? '<div style="text-align:center"><button type="button" class="btn" data-a="dd-prox">Next number</button></div>' : '<div class="regra-d"><span><b>TOO MANY</b> counts: hours, cups, messages, people.</span><span><b>TOO MUCH</b> doesn’t count: time, coffee, sleep, work, noise.</span><span><b>NOT ENOUGH</b> is the same idea from the other side.</span></div>') : '') + '</div>';
};

R.erros = function (c) {
  return cab(c) + FM.ex('er', { formato: 'erro', titulo: 'Five sentences are broken. Find the broken part. Say the fix.', itens: ERRO_DOSE, regra: PRESA_DOSE });
};

R.post = function (c) {
  var e = S.ps, n = Math.min(e.n, POSTS.length - 1);
  return cab(c) + trilha(POSTS, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="barra-80"><div><small>ONLINE · ABOUT YOU</small><span style="width:80%"></span><b>80%</b></div><div><small>FACE TO FACE · ABOUT YOU</small><span style="width:33%"></span><b>⅓</b></div></div><div class="pergunta vd ja"><small>STORY ' + (n + 1) + ' OF 4</small><h2>' + POSTS[n] + '</h2></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>1 · AS A POST</small><b>Guess what happened…</b></div><div class="pede vd"><small>2 · ACROSS THE TABLE</small><b>So, last week… What about you?</b></div><p class="dica-aluno">Which version had too much “I”?</p>'
    + (n < POSTS.length - 1 ? '<div><button type="button" class="btn" data-a="ps-prox">Next story</button></div>' : '<p class="aprova">Two versions every time, and they weren’t about the same person.</p>') + '</div></div>';
};

R.escuro = function (c) {
  return cab(c) + '<div class="escuro"><div class="unica">' + ESCURO.map(function (b, i) { return '<p><i>' + (i + 1) + '</i>' + b + '</p>'; }).join('') + '</div><p class="so-prof dica-aluno">Turn your camera off too, if you can. Wait fifteen seconds before you speak.</p></div>';
};

R.amigo = function (c) {
  var e = ((S.fq || {}).am || {}).par || {}, todos = AMIGOS.every(function (x, i) { return e[i] === i; });
  var gauges = '<div class="tres-m">' + AMIGOS.map(function (x, i) { return mostrador(i % 2 ? .9 : .1, x.nome); }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + FM.ex('am', LIGA_AMIGO) + '</div><div class="lado-l">' + gauges
    + (todos ? '<p class="aprova">Four problems named. Now advice, out loud, for each friend: You should… · Why don’t you…? · Try…</p>' + fala('amc', ['You should …', 'Why don’t you …?'], ['You should', 'Why don’t you', 'Try', 'enough', 'less']) : '<p class="dica-aluno">Count it first. Can you count it: many. Can’t you: much.</p>') + '</div></div>';
};

R.falta = function (c) {
  var em = ((S.fq || {}).fa || {}).em || {}, todos = SEPARA_FALTA.itens.every(function (x, i) { return em[i] === x.c; });
  return cab(c) + '<div class="foco">' + FM.ex('fa', SEPARA_FALTA)
    + (todos ? '<p class="aprova" style="text-align:center">I don’t have enough time. It isn’t quiet enough. Now say a complaint for each of the six, and finish it: … to what?</p>' : '<p class="dica-aluno" style="text-align:center">Is it a noun (a thing) or an adjective (how it is)?</p>') + '</div>';
};

R.fim = function (c) {
  var e = S.ch, lista = CHUTES.map(function (x, i) { return e.esc[i] !== undefined ? '<span><small>' + x.q + '</small><b>' + x.ops[e.esc[i]] + '</b></span>' : ''; }).join('');
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I spend too much time …\nI drink too many …\nI don’t have enough …\n… is enough for me.', 'Your gauge',
    ['too much ', 'too many ', 'I don’t have enough ', ' enough', 'big enough'], ['YOUR GAUGE AGAIN', 'One too much, one too many, one not enough, and one just enough.'])
    + '<div class="lado-fim">' + (lista ? '<div class="chutes-v">' + lista + '</div>' : '') + '<div class="grande vd"><span><u>too many</u> + things you count</span><span><u>too much</u> + things you don’t</span><span><u>enough</u> time · big <u>enough</u> · I <u>don’t have enough</u></span></div>'
    + mostra('fim', 'I spend too much time on my phone at night.<br>I drink too many cups of coffee.<br>I don’t get enough sleep to feel good.<br>Two hours of TV is enough for me.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.ch = function (b, n, v) { S.ch.esc[n] = +v; };
TOQUES.gg = function (b, n) { S.gg.sel = n; };
TOQUES['gg-v'] = function (b, n) { S.gg.val[S.gg.sel] = n; };
TOQUES.dd = function (b, n, v) { var p = v.split(':'); S.dd[p[0]] = p[1]; };
TOQUES['dd-prox'] = function () { S.dd = { n: S.dd.n + 1, a: '', b: '' }; };
TOQUES['ps-prox'] = function () { S.ps.n++; };
