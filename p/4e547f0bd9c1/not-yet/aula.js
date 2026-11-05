/* ============================================================
   NOT YET · THE GOAL BOARD · LIVE CLASS  05/10/2026
   Main series A1 · am / is / are going to (planos e previsão com evidência)
   O MUNDO: um quadro de metas em três faixas (THIS WEEK · THIS MONTH ·
   THIS YEAR) com post-its ESCUROS que o aluno prega falando; depois o
   professor vira o coach e pergunta sobre o quadro. Na sala vazia, seis
   coisas que ainda não aconteceram (marcadores sobre a foto).
   A armadilha: “Tomorrow I travel” (hábito, não plano) e “I going to”.
   Sem áudio e sem vídeo (a aula velha não tinha). Fila: 017.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'quadro' },
  { k: 'abre', est: 'o', min: 7, img: 'sala', rot: 'I · This Weekend', t: 'What are you going to do this weekend?', p: 'Pick a card. One full sentence, any way you can. Your teacher taps what you used. Don’t worry about it yet.' },
  { k: 'peca', est: 'f', min: 6, img: 'quadro', rot: 'II · The Missing Piece', t: 'Going to never walks alone. It needs am, is or are.', p: 'Choose the piece. Then say the whole sentence.' },
  { k: 'duas', est: 'f', min: 6, img: 'quadro', rot: 'III · Every Week, or One Day?', t: 'A habit, or one plan?', p: 'Read the sentence out loud. Then put it in the right calendar.' },
  { k: 'sala', est: 'o', min: 7, img: 'sala', rot: 'IV · Look Again', t: 'Nothing has happened in this room. Yet.', p: 'Tap a thing. Read the evidence. Choose the verb. Say the whole sentence.' },
  { k: 'armadilha', est: 'f', min: 6, img: 'quadro', rot: 'V · Tomorrow I Travel', t: 'Both look correct. Only one is a plan.', p: 'Read the situation. Choose the sentence that says it. Say it out loud.' },
  { k: 'gonna', est: 'o', min: 7, img: 'quadro', rot: 'VI · Gonna', t: 'Nobody says all four words out loud.', p: 'Your teacher says it both ways. You say it fast, four times.' },
  { k: 'nao', est: 'f', min: 6, extra: 1, img: 'quadro', rot: 'VII · Not, and Are You?', t: 'Only the first word moves. Going to sits still.', p: 'Say the negative before you open it. Then the question. Then all three.' },
  { k: 'quadro', est: 'o', min: 7, extra: 1, img: 'quadro', rot: 'VIII · The Goal Board', t: 'Three lanes. Two goals in each.', p: 'Pick a lane and a goal, or say your own. Say the whole sentence, and it goes on the board.' },
  { k: 'coach', est: 'o', min: 7, extra: 1, img: 'quadro', rot: 'IX · The Coach', t: 'Your teacher is your coach now.', p: 'The coach asks about three goals on your board. Defend each one.' },
  { k: 'aposta', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'X · Certain, or Maybe?', t: 'Three situations. What happens next?', p: 'Say the sentence out loud. Then say how sure you are.' },
  { k: 'fim', est: 'w', min: 6, img: 'quadro', rot: 'XI · Not Yet', t: 'Write your goal board.', p: 'Five goals with I’m going to, one with I’m not going to, and when you are going to start. The red line watches the little words. It goes to your My notes.' }
];

var ABRE = [
  { k: 'THIS WEEKEND', q: 'What are you going to do this weekend?', fup: 'Who are you going to see?', st: ['I’m going to …', 'On Saturday I’m going to …'], ex: 'I’m going to sleep a lot and visit my parents.' },
  { k: 'NOT', q: 'One thing you are NOT going to do this weekend?', fup: 'And on Sunday?', st: ['I’m not going to …'], ex: 'I’m not going to work. Not this weekend!' },
  { k: 'TONIGHT', q: 'What are you going to eat tonight?', fup: 'Who is going to cook?', st: ['I’m going to eat …', 'My … is going to cook.'], ex: 'I’m going to eat pizza. Nobody is going to cook!' },
  { k: 'THIS YEAR', q: 'One big plan for this year?', fup: 'When are you going to start?', st: ['This year I’m going to …'], ex: 'This year I’m going to learn to drive.' }
];
var FORMAS = [{ k: 'going', t: 'AM / IS / ARE GOING TO' }, { k: 'gonna', t: 'GONNA' }, { k: 'pres', t: 'TOMORROW I TRAVEL', erro: 1 }, { k: 'sembe', t: 'I GOING TO', erro: 1 }];

var PECA = [
  { c: 'I’m', s: 'I', k: 'am', r: 'travel tomorrow' }, { c: 'She’s', s: 'She', k: 'is', r: 'start a new job' }, { c: 'They’re', s: 'They', k: 'are', r: 'move next week' },
  { c: 'We’re', s: 'We', k: 'are', r: 'eat out tonight' }, { c: 'My brother’s', s: 'My brother', k: 'is', r: 'buy a car' }, { c: 'You’re', s: 'You', k: 'are', r: 'love this' },
  { c: 'It’s', s: 'It', k: 'is', r: 'rain' }, { c: 'My parents are', s: 'My parents', k: 'are', r: 'visit us on Sunday' }
];

var DUAS = [
  { f: 'She works on Saturdays.', k: 'habito' }, { f: 'She is going to work this Saturday.', k: 'plano' },
  { f: 'I get up at 6:00 AM.', k: 'habito' }, { f: 'I am going to get up at 5:00 AM tomorrow.', k: 'plano' },
  { f: 'We eat out on Fridays.', k: 'habito' }, { f: 'We are going to eat out tonight.', k: 'plano' },
  { f: 'He plays soccer on Sundays.', k: 'habito' }, { f: 'He is going to play with us next Sunday.', k: 'plano' }
];

var SALA = [
  { o: 'the sky', x: 52, y: 30, ev: 'dark clouds over the window', s: 'It', be: 'is', op: ['rain', 'sleep', 'cook'], k: 'rain' },
  { o: 'the lamp', x: 70, y: 40, ev: 'the lamp is on · nobody is here', s: 'Somebody', be: 'is', op: ['come back', 'leave', 'fall'], k: 'come back' },
  { o: 'the plant', x: 66, y: 57, ev: 'the leaves are down · the soil is dry', s: 'It', be: 'is', op: ['die', 'grow', 'sing'], k: 'die' },
  { o: 'the cup', x: 54, y: 69, ev: 'hot coffee · nobody is drinking it', s: 'It', be: 'is', op: ['get cold', 'break', 'ring'], k: 'get cold' },
  { o: 'the books', x: 78, y: 63, ev: 'a tall pile · it is leaning', s: 'They', be: 'are', op: ['fall', 'read', 'open'], k: 'fall' },
  { o: 'the door', x: 12, y: 50, ev: 'the door is open · the hall light is on', s: 'Somebody', be: 'is', op: ['walk in', 'close', 'wait'], k: 'walk in' }
];

var ARMA = [
  { sit: 'Your plan for tomorrow: a trip.', ok: 'I’m going to travel tomorrow.', mau: 'Tomorrow I travel.', w: 'I travel sounds like a habit or a timetable.' },
  { sit: 'Her plan for this Saturday: work.', ok: 'She’s going to work on Saturday.', mau: 'Saturday she works.', w: 'This Saturday is one day, so: going to.' },
  { sit: 'Their plan: a new home next week.', ok: 'They’re going to move next week.', mau: 'Next week they move.', w: 'One move. A plan.' },
  { sit: 'Your plan in five minutes: the bakery.', ok: 'I’m going to buy bread.', mau: 'I go to buy bread.', w: 'I go is every day. This is now.' },
  { sit: 'Your plan: dinner out tonight.', ok: 'We’re going to eat out tonight.', mau: 'We going to eat out tonight.', w: 'Don’t drop the piece: we’re.' }
];

var GONNA = [
  { e: 'I am going to call her.', f: 'I’m gonna call her.' }, { e: 'We are going to be late.', f: 'We’re gonna be late.' },
  { e: 'It is going to rain.', f: 'It’s gonna rain.' }, { e: 'They are going to love it.', f: 'They’re gonna love it.' }
];

var NAO = [
  { b: 'It is going to rain.', n: 'It <b>isn’t</b> going to rain.', q: '<b>Is</b> it going to rain?', r: 'Yes, it is. / No, it isn’t.' },
  { b: 'They are going to come.', n: 'They <b>aren’t</b> going to come.', q: '<b>Are</b> they going to come?', r: 'Yes, they are. / No, they aren’t.' },
  { b: 'She is going to say yes.', n: 'She <b>isn’t</b> going to say yes.', q: '<b>Is</b> she going to say yes?', r: 'Yes, she is. / No, she isn’t.' },
  { b: 'I am going to call.', n: 'I<b>’m not</b> going to call.', q: '<b>Am</b> I going to call?', r: 'Yes, you are. / No, you aren’t.' }
];

var FAIXAS = [
  { k: 'w', t: 'THIS WEEK', ini: 'This week I’m going to', cor: '#c98a1e', cartas: ['call my grandmother', 'clean my room', 'go to the gym', 'read a chapter', 'cook something new'] },
  { k: 'm', t: 'THIS MONTH', ini: 'This month I’m going to', cor: '#b0476a', cartas: ['save some money', 'learn fifty new words', 'visit a friend', 'fix my bike', 'start a course'] },
  { k: 'y', t: 'THIS YEAR', ini: 'This year I’m going to', cor: '#3d7fb0', cartas: ['travel abroad', 'change jobs', 'run ten kilometers', 'learn to drive', 'move'] }
];
var PARTES_Q = [{ k: 'going', t: 'AM / IS / ARE GOING TO' }, { k: 'tempo', t: 'A TIME WORD' }];
var COACH_Q = ['Why are you going to do it?', 'When are you going to start?', 'What are you not going to do this week?', 'Is it going to be hard?'];
var PARTES_C = [{ k: 'going', t: 'GOING TO + VERB' }, { k: 'neg', t: 'ISN’T / I’M NOT GOING TO' }, { k: 'porque', t: 'BECAUSE …' }];
var RESERVA = ['go to the gym', 'save some money', 'travel abroad'];

var APOSTA = [
  { sit: 'Your phone is at 4% and you are not home.', q: 'What is going to happen in ten minutes?', ex: 'My phone is going to die.' },
  { sit: 'It’s Friday and you have no plans yet.', q: 'What are you going to do on Saturday?', ex: 'I think I’m going to stay home. Maybe I’m going to call a friend.' },
  { sit: 'You start something new next month.', q: 'What is going to be different in your week?', ex: 'I’m going to wake up earlier. I’m not going to sleep late.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, peca: { n: 0, esc: '' }, duas: { sel: -1, feitos: {}, err: '' },
  sala: { sel: -1, esc: {}, ok: {} }, arma: { n: 0, esc: -1 }, gonna: { n: 0, vezes: 0, viu: 0 }, nao: { n: 0, neg: 0, q: 0 },
  quadro: { lane: 'w', sel: -1, partes: {}, posts: [] }, coach: { n: 0, partes: {}, erro: 0 }, aposta: { n: 0, esc: '' } };

function postit(txt, cor, extra) { return '<span class="postit' + (extra || '') + '" style="--pc:' + cor + '">' + txt + '</span>'; }
function metasCoach() { var p = S.quadro.posts.map(function (x) { return x.t; }); return p.length >= 3 ? p.slice(0, 3) : p.concat(RESERVA.filter(function (r) { return p.indexOf(r) < 0; })).slice(0, 3); }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>Not <b>Yet</b></h1>'
    + '<p class="sub">Nothing on this board has happened. All of it is going to.</p>'
    + '<div class="chipsx"><span class="pilula">I’m going to</span><span class="pilula">Is it going to…?</span><span class="pilula">gonna</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the board</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('quadro') + '" alt="A wall covered with sticky notes">' + '<div class="capa-posts">' + postit('This week I’m going to call Grandma.', '#c98a1e') + postit('This year I’m going to learn to drive.', '#3d7fb0') + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.peca = function (c) {
  var e = S.peca, n = e.n, fim = n >= PECA.length, x = PECA[Math.min(n, PECA.length - 1)];
  if (fim) return cab(c) + trilha(PECA, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT SENTENCES</small><h2>I am · he, she, it is · you, we, they are. Going to always had its partner.</h2></div>'
    + follow('THE SHORT WAY', 'Say three of them short: I’m, she’s, they’re.', ['I’m going to …', 'She’s going to …', 'They’re going to …'], [], 'pcf') + '</div>';
  var ok = e.esc === x.k;
  return cab(c) + trilha(PECA, n) + '<div class="trem"><span class="vagao suj">' + x.s + '</span><span class="vagao buraco' + (ok ? ' cheio' : e.esc ? ' errado' : '') + '">' + (ok ? x.k : '?') + '</span><span class="vagao going">going to</span><span class="vagao verbo">' + x.r + '</span></div>'
    + '<div class="tres-b centro">' + ['am', 'is', 'are'].map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="pc" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa" style="text-align:center">Who is it? I → am. He, she, it, one person → is. You, we, they → are.</p>' : '')
    + (ok ? '<p class="aprova" style="text-align:center">Say it: ' + x.s + ' ' + x.k + ' going to ' + x.r + '. Short: ' + x.c + ' going to ' + x.r + '.</p><div style="text-align:center"><button type="button" class="btn" data-a="pc-prox">Next</button></div>' : '');
};

function calendario(tipo) {
  var dias = []; for (var i = 1; i <= 28; i++) dias.push('<i class="' + (tipo === 'habito' ? (i % 7 === 6 ? 'marca' : '') : (i === 13 ? 'marca' : '')) + '"></i>');
  return '<div class="mini-cal">' + dias.join('') + '</div>';
}
R.duas = function (c) {
  var e = S.duas, x = e.sel >= 0 ? DUAS[e.sel] : null, tudo = Object.keys(e.feitos).length === DUAS.length;
  var fichas = '<div class="fichas-d">' + DUAS.map(function (d, i) { return e.feitos[i] ? '' : '<button type="button" class="ficha-d' + (e.sel === i ? ' on' : '') + '" data-a="dd-sel" data-n="' + i + '">' + d.f + '</button>'; }).join('') + '</div>';
  var cols = '<div class="cols-d">' + [['habito', 'EVERY WEEK', 'a habit'], ['plano', 'ONE DAY', 'a plan']].map(function (k) {
    return '<button type="button" class="col-d' + (x && e.err === k[0] ? ' errado' : '') + '" data-a="dd" data-v="' + k[0] + '"><div class="topo-d">' + calendario(k[0]) + '<div><b>' + k[1] + '</b><small>' + k[2] + '</small></div></div>' + DUAS.filter(function (d, i) { return e.feitos[i] && d.k === k[0]; }).map(function (d) { return '<span>' + d.f + '</span>'; }).join('') + '</button>';
  }).join('') + '</div>';
  return cab(c) + fichas + (x && e.err ? '<p class="recusa" style="text-align:center">Every week, or one moment? Look for going to.</p>' : (x ? '<p class="dica-aluno" style="text-align:center">Read it out loud first.</p>' : '')) + cols
    + (tudo ? '<p class="aprova" style="text-align:center">The simple present is your life. Going to is one moment ahead.</p>' : '');
};

R.sala = function (c) {
  var e = S.sala, x = e.sel >= 0 ? SALA[e.sel] : null, feitos = Object.keys(e.ok).length;
  var foto = '<div class="sala-foto vd" style="background-image:url(' + img('sala') + ')">' + SALA.map(function (s, i) { return '<button type="button" class="marcador' + (e.ok[i] ? ' feito' : '') + (e.sel === i ? ' on' : '') + '" style="left:' + s.x + '%;top:' + s.y + '%" data-a="sa-sel" data-n="' + i + '"><span>' + (i + 1) + '</span><small>' + s.o + '</small></button>'; }).join('') + '</div>';
  var lado;
  if (!x) lado = '<div class="pergunta vd"><small>' + feitos + ' OF 6</small><h2>' + (feitos === 6 ? 'Six things you can see coming. Same form as a plan.' : 'Tap a number on the photo.') + '</h2></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === x.k;
    lado = '<div class="pergunta vd"><small>' + x.o.toUpperCase() + ' · THE EVIDENCE</small><h2>' + x.ev + '</h2></div><p class="frase-s">' + x.s + ' ' + x.be + ' going to ' + (ok ? '<b>' + x.k + '</b>' : '<span class="vaga">____</span>') + '.</p>'
      + '<div class="tres-b">' + x.op.map(function (o) { return '<button type="button" class="pilula grande' + (esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="sa" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
      + (esc && !ok ? '<p class="recusa">Read the evidence again. What happens next?</p>' : '') + (ok ? '<p class="aprova">Now say it, and a second prediction for ' + x.o + '.</p>' : '');
  }
  return cab(c) + '<div class="mesa-sala">' + foto + '<div class="lado-sala">' + lado + '</div></div>';
};

R.armadilha = function (c) {
  var a = S.arma, n = a.n, fim = n >= ARMA.length, x = ARMA[Math.min(n, ARMA.length - 1)];
  if (fim) return cab(c) + trilha(ARMA, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE PLANS</small><h2>Every one needed going to, with its partner.</h2></div></div>';
  var ops = n % 2 ? [x.mau, x.ok] : [x.ok, x.mau], ok = a.esc >= 0 && ops[a.esc] === x.ok;
  return cab(c) + trilha(ARMA, n) + '<div class="foco"><div class="pergunta vd"><small>THE SITUATION</small><h2>' + x.sit + '</h2></div><div class="duas-f">'
    + ops.map(function (o, i) { return '<button type="button" class="frase-a vd' + (a.esc === i ? (o === x.ok ? ' certo' : ' errado') : '') + '" data-a="ar" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (a.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">' + x.w + '</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.w + ' Say it out loud.</p><div style="text-align:center"><button type="button" class="btn" data-a="ar-prox">Next</button></div>' : '') + '</div>';
};

R.gonna = function (c) {
  var g = S.gonna, n = g.n, fim = n >= GONNA.length, x = GONNA[Math.min(n, GONNA.length - 1)];
  if (fim) return cab(c) + trilha(GONNA, n) + '<div class="foco">' + follow('YOUR WEEKEND, FAST', 'Your weekend, with gonna. Then write it with going to.', ['I’m gonna …', 'We’re gonna …'], [], 'gnf') + '<p class="aprova" style="text-align:center">You write going to. You say gonna.</p></div>';
  return cab(c) + trilha(GONNA, n) + '<div class="foco"><div class="boca vd"><p class="lenta">' + x.e + '</p>' + (g.viu ? '<p class="rapida">' + x.f + '</p>' : '<button type="button" class="pilula" data-a="gn-viu">Show the fast way</button>') + '</div>'
    + '<div class="vezes">' + [1, 2, 3, 4].map(function (k) { return '<button type="button" class="vez' + (g.vezes >= k ? ' on' : '') + '" data-a="gn-vez" data-n="' + k + '">' + k + '</button>'; }).join('') + '</div>'
    + (g.vezes >= 4 ? '<div style="text-align:center"><button type="button" class="btn" data-a="gn-prox">Next</button></div>' : '<p class="dica-aluno" style="text-align:center">Fast, four times. Only for the mouth: you still write going to.</p>') + '</div>';
};

R.nao = function (c) {
  var e = S.nao, n = e.n, fim = n >= NAO.length, x = NAO[Math.min(n, NAO.length - 1)];
  if (fim) return cab(c) + trilha(NAO, n) + '<div class="foco"><div class="pergunta vd"><small>THREE SHAPES</small><h2>Four sentences, three shapes each. Going to never moved.</h2></div></div>';
  var linha = function (rot, html, aberto, a) { return '<div class="forma-n vd' + (aberto ? ' aberta' : '') + '"><small>' + rot + '</small>' + (aberto ? '<p>' + html + '</p>' : '<button type="button" class="pilula" data-a="' + a + '">Say it, then open</button>') + '</div>'; };
  return cab(c) + trilha(NAO, n) + '<div class="formas-n">' + linha('YES', x.b, 1) + linha('NOT', x.n, e.neg, 'nn-neg') + linha('QUESTION', x.q, e.q, 'nn-q') + '</div>'
    + (e.neg && e.q ? '<p class="aprova" style="text-align:center">Short answer: ' + x.r + '</p><div style="text-align:center"><button type="button" class="btn" data-a="nn-prox">Next</button></div>' : '');
};

R.quadro = function (c) {
  var q = S.quadro, f = FAIXAS.filter(function (x) { return x.k === q.lane; })[0], pt = q.partes, tudo = PARTES_Q.every(function (p) { return pt[p.k]; });
  var board = '<div class="board">' + FAIXAS.map(function (fx) {
    var ps = q.posts.filter(function (p) { return p.l === fx.k; });
    return '<button type="button" class="lane' + (q.lane === fx.k ? ' on' : '') + '" data-a="qd-lane" data-v="' + fx.k + '" style="--pc:' + fx.cor + '"><b>' + fx.t + '</b><small>' + ps.length + ' / 2</small><div class="posts">' + ps.map(function (p) { return postit(p.t, fx.cor, ' preso'); }).join('') + '</div></button>';
  }).join('') + '</div>';
  var cartas = '<div class="cartas-q">' + f.cartas.map(function (t, i) { var usado = q.posts.some(function (p) { return p.t === t; }); return usado ? '' : '<button type="button" class="carta-q' + (q.sel === i ? ' on' : '') + '" data-a="qd-sel" data-n="' + i + '">' + t + '</button>'; }).join('')
    + '<button type="button" class="carta-q propria' + (q.sel === 9 ? ' on' : '') + '" data-a="qd-sel" data-n="9">my own goal</button></div>';
  var acao = q.sel >= 0 ? '<div class="diz-q vd"><p>' + f.ini + ' <b>' + (q.sel === 9 ? '…' : f.cartas[q.sel]) + '</b>.</p><div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES_Q.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="qd-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (pt.erro ? ' on' : '') + '" data-a="qd-p" data-v="erro">MISTAKE: I GOING TO / THIS YEAR I TRAVEL</button></div>'
    + (pt.erro ? '<p class="recusa">Keep the piece, and use going to for a plan: I’m going to travel this year.</p>' : '')
    + (tudo ? '<button type="button" class="btn cheio" data-a="qd-prega">Pin it on the board</button>' : '<p class="dica-aluno">Say the whole sentence out loud.</p>') + '</div>' : '<p class="dica-aluno" style="text-align:center">Pick a goal in ' + f.t.toLowerCase() + ', or your own.</p>';
  return cab(c) + '<div class="mesa-quadro"><div>' + board + '</div><div class="lado-quadro">' + cartas + acao + '</div></div>';
};

R.coach = function (c) {
  var e = S.coach, n = e.n, metas = metasCoach(), fim = n >= 3, pt = e.partes[n] || {};
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>THREE GOALS, DEFENDED</small><h2>The coach is going to ask again next week.</h2></div></div>';
  return cab(c) + trilha(metas, n) + '<div class="mesa-coach"><div class="meta-c">' + postit('I’m going to ' + metas[n] + '.', ['#c98a1e', '#b0476a', '#3d7fb0'][n], ' grande') + '</div><div class="lado-coach"><div class="perguntas-c">' + COACH_Q.map(function (q) { return '<p>' + q + '</p>'; }).join('') + '</div>'
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES_C.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="co-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (e.erro ? ' on' : '') + '" data-a="co-e">MISTAKE: TOMORROW I START / I GOING TO</button></div>'
    + (e.erro ? '<p class="recusa">A plan: I’m going to start tomorrow.</p>' : '') + '<div><button type="button" class="btn" data-a="co-prox">Next goal</button></div></div></div>';
};

R.aposta = function (c) {
  var a = S.aposta, n = a.n, fim = n >= APOSTA.length, x = APOSTA[Math.min(n, APOSTA.length - 1)];
  if (fim) return cab(c) + trilha(APOSTA, n) + '<div class="foco"><div class="pergunta vd"><small>CERTAIN OR MAYBE</small><h2>The form was the same: going to. I think and maybe did the rest.</h2></div></div>';
  return cab(c) + trilha(APOSTA, n) + '<div class="foco"><div class="pergunta vd"><small>' + x.sit.toUpperCase() + '</small><h2>' + x.q + '</h2></div>' + fala('ap' + n, ['… is going to …', 'I think I’m going to …', 'Maybe …'], []) + mostra('ap' + n, x.ex)
    + '<div class="tres-b centro">' + [['certo', 'CERTAIN'], ['talvez', 'MAYBE']].map(function (o) { return '<button type="button" class="pilula grande' + (a.esc === o[0] ? ' certo' : '') + '" data-a="ap" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (a.esc ? '<p class="aprova" style="text-align:center">' + (a.esc === 'certo' ? 'Why are you so sure?' : 'Maybe is fine: Maybe I’m going to …') + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ap-prox">Next</button></div>' : '') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  var posts = S.quadro.posts.map(function (p) { return postit(p.t, FAIXAS.filter(function (fx) { return fx.k === p.l; })[0].cor, ' mini'); }).join('');
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'This week I’m going to …\nThis year I’m not going to …', 'Your goal board',
    ['This week I’m going to ', 'This month I’m going to ', 'This year I’m going to ', 'I’m not going to ', 'I’m going to start '], ['YOUR WEEKEND, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now your board, with the piece in place.' : 'Five goals, one thing you are not going to do, and when you start.'])
    + '<div class="lado-fim">' + (posts ? '<div class="posts-fim">' + posts + '</div>' : '') + '<div class="grande vd"><span>I<u>’m going to</u> travel tomorrow.</span><span>She <u>isn’t going to</u> come.</span><span><u>Are</u> you <u>going to</u> start?</span><small>Not Tomorrow I travel. Not I going to.</small></div>'
    + mostra('fim', 'This week I’m going to call my grandmother.<br>This month I’m going to save some money.<br>This year I’m going to learn to drive.<br>I’m not going to watch TV on weeknights.<br>I’m going to start on Monday.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.pc = function (b, n, v) { S.peca.esc = v; };
TOQUES['pc-prox'] = function () { S.peca = { n: S.peca.n + 1, esc: '' }; };
TOQUES['dd-sel'] = function (b, n) { S.duas.sel = n; S.duas.err = ''; };
TOQUES.dd = function (b, n, v) { var e = S.duas, x = DUAS[e.sel]; if (!x) return false; if (v === x.k) { e.feitos[e.sel] = 1; e.sel = -1; e.err = ''; } else e.err = v; };
TOQUES['sa-sel'] = function (b, n) { S.sala.sel = n; };
TOQUES.sa = function (b, n, v) { var e = S.sala, x = SALA[e.sel]; if (!x) return false; e.esc[e.sel] = v; if (v === x.k) e.ok[e.sel] = 1; };
TOQUES.ar = function (b, n) { S.arma.esc = n; };
TOQUES['ar-prox'] = function () { S.arma = { n: S.arma.n + 1, esc: -1 }; };
TOQUES['gn-viu'] = function () { S.gonna.viu = 1; };
TOQUES['gn-vez'] = function (b, n) { S.gonna.vezes = n; S.gonna.viu = 1; };
TOQUES['gn-prox'] = function () { S.gonna = { n: S.gonna.n + 1, vezes: 0, viu: 0 }; };
TOQUES['nn-neg'] = function () { S.nao.neg = 1; };
TOQUES['nn-q'] = function () { S.nao.q = 1; };
TOQUES['nn-prox'] = function () { S.nao = { n: S.nao.n + 1, neg: 0, q: 0 }; };
TOQUES['qd-lane'] = function (b, n, v) { if (S.quadro.lane === v) return false; S.quadro.lane = v; S.quadro.sel = -1; S.quadro.partes = {}; };
TOQUES['qd-sel'] = function (b, n) { S.quadro.sel = n; S.quadro.partes = {}; };
TOQUES['qd-p'] = function (b, n, v) { S.quadro.partes[v] = !S.quadro.partes[v]; };
TOQUES['qd-prega'] = function () {
  var q = S.quadro, f = FAIXAS.filter(function (x) { return x.k === q.lane; })[0]; if (q.sel < 0) return false;
  var t = q.sel === 9 ? 'my own goal' : f.cartas[q.sel];
  q.posts.push({ l: q.lane, t: t }); q.sel = -1; q.partes = {};
  if (q.posts.filter(function (p) { return p.l === q.lane; }).length >= 2) { var prox = FAIXAS.filter(function (fx) { return q.posts.filter(function (p) { return p.l === fx.k; }).length < 2; })[0]; if (prox) q.lane = prox.k; }
};
TOQUES['co-p'] = function (b, n, v) { var e = S.coach; e.partes[e.n] = e.partes[e.n] || {}; e.partes[e.n][v] = !e.partes[e.n][v]; };
TOQUES['co-e'] = function () { S.coach.erro = !S.coach.erro; };
TOQUES['co-prox'] = function () { S.coach.n++; S.coach.erro = 0; };
TOQUES.ap = function (b, n, v) { S.aposta.esc = v; };
TOQUES['ap-prox'] = function () { S.aposta = { n: S.aposta.n + 1, esc: '' }; };
