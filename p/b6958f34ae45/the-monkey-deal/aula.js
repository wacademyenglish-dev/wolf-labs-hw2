/* ============================================================
   I ENDED UP · THE SATURDAY CLOCK · LIVE CLASS  06/10/2026
   Main series B1 · was going to + verbo (o plano) · kept + -ing (o
   laço) · ended up + -ing (o que aconteceu de fato). Erros universais:
   "I kept to check", "I ended up to do", "I ended up ordered",
   "I kept look". Sem áudio, sem vídeo.
   O MUNDO (da aula velha): o sábado passado — cinco tarefas na lista,
   nenhuma feita do jeito planejado; o teste "How bad is it?"; as
   expressões de quem adia (put it off, get it over with…); e a última
   palavra é o único WILL da hora.
   A CARA: o RELÓGIO DE SÁBADO, no escuro — cada tarefa tem um
   mostrador: o ponteiro-fantasma tracejado é o plano (was going to),
   o arco âmbar que corre e dá a volta é o laço (kept + -ing) e o
   ponteiro coral é onde o dia acabou (ended up). A lista velha (papel
   claro) saiu. Fila: FILA-LIVE-386.md · 089.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'sofa' },
  { k: 'teste', est: 'o', min: 7, img: 'sofa', rot: 'I · How Bad Is It?', t: 'Ten sentences about you. Often, sometimes or never?', p: 'Read each one out loud before you tap. At the end, pick the ONE that is most true.' },
  { k: 'gx', est: 'f', min: 4, img: 'mesa', rot: 'II · Mistake Hunter', t: 'Six sentences about last Saturday. Each one has a wrong word.', p: 'Tap the wrong word. Say the sentence right. Then check.' },
  { k: 'verbos', est: 'f', min: 6, img: 'mesa', rot: 'III · Three Hands, One Day', t: 'The plan, the loop and what really happened.', p: 'Read the three out loud. Then say the same three about your morning. Then fix the traps.' },
  { k: 'relogio', est: 'o', min: 7, img: 'mesa', rot: 'IV · The Saturday Clock', t: 'Last Saturday: five plans. Not one happened the way it was planned.', p: 'Pick a task. Say the KEPT line, then the ENDED UP line. Your teacher taps what you said. Then read all three as one story.' },
  { k: 'palavras', est: 'o', min: 5, img: 'sofa', rot: 'V · The Words for It', t: 'Eight things people say about the thing they aren’t doing.', p: 'Read the expression. Guess what it means out loud, then tap. Then use it about you.' },
  { k: 'metades', est: 'f', min: 6, img: 'bolsa', rot: 'VI · Six Plans, Six Excuses', t: 'Every plan died for a reason. A short one.', p: 'Read the plan. Choose the reason. Say the whole sentence out loud.' },
  { k: 'lacuna', est: 'f', min: 6, img: 'mesa', rot: 'VII · Only One Fits', t: 'The plan, the loop, or the result?', p: 'Say the whole sentence out loud first. Then tap.' },
  { k: 'voce', est: 'o', min: 7, extra: 1, img: 'bolsa', rot: 'VIII · Finish It, About You', t: 'Six beginnings. The end is yours, and it has to be true.', p: 'Pick a card. Finish it out loud about yourself. Then your teacher does it too.' },
  { k: 'ultima', est: 'o', min: 7, extra: 1, img: 'sofa', rot: 'IX · The Last Word', t: 'No more cards. Just questions, and one WILL at the end.', p: 'Your teacher asks. You answer. The last answer starts with I’ll.' },
  { k: 'fim', est: 'w', min: 6, img: 'mesa', rot: 'X · Your Own Clock', t: 'Your week, on the clock.', p: 'Write the plan, the loop and what really happened. Then one thing you WILL do today. It goes to your My notes.' }
];

var TESTE = [
  'I start things the night before they’re due.',
  'I check my phone before I finish the first task of the day.',
  'I make a list and then do the easiest thing on it.',
  'I say “I’ll do it tomorrow” out loud.',
  'I clean or tidy something instead of starting.',
  'I wait until I feel ready.',
  'I open the document and then close it again.',
  'I do other people’s tasks before my own.',
  'I decide to start on Monday.',
  'I finish things fast when somebody is waiting for me.'
];
var FAIXAS = [[6, 'You’re not a procrastinator. You’re just tired.'], [13, 'You’re normal, which is worse than it sounds.'], [20, 'You start late, and you know it.']];

var MAOS = [
  { v: 'I WAS GOING TO', o: 'the plan · + verb', ex: 'I was going to start at nine.', c: 'pl' },
  { v: 'I KEPT + -ING', o: 'the loop · again and again', ex: 'I kept checking my phone.', c: 'lp' },
  { v: 'I ENDED UP + -ING', o: 'what really happened', ex: 'I ended up starting at four.', c: 'fi' }
];
var ARMAS = [
  ['KEPT + -ING', 'I kept to check my phone.', 'I kept checking my phone.', 'kept + -ing. Never kept to.'],
  ['ENDED UP + -ING', 'I ended up to order a pizza.', 'I ended up ordering a pizza.', 'ended up + -ing. Never ended up to.'],
  ['NOT THE PAST', 'I ended up slept at 2 AM.', 'I ended up sleeping at 2 AM.', 'ended up already says the past. Then -ing.'],
  ['THE PLAN', 'I was going to starting at nine.', 'I was going to start at nine.', 'was going to + the plain verb.']
];

var TAREFAS = [
  { t: 'Go to the gym', pl: 9, fi: 12, plano: 'I was going to go to the gym at nine.',
    kept: [['I kept looking for my other shoe.', 'ok'], ['I kept to look for my other shoe.', 'to'], ['I kept look for my other shoe.', 'base']],
    end: [['I ended up walking around the block at noon.', 'ok'], ['I ended up to walk around the block.', 'to'], ['I ended up walked around the block.', 'past']] },
  { t: 'Answer Maria’s email', pl: 10, fi: 13, plano: 'I was going to answer Maria’s email at ten.',
    kept: [['I kept rewriting the first line.', 'ok'], ['I kept rewrite the first line.', 'base'], ['I kept to rewrite the first line.', 'to']],
    end: [['I ended up sending her a voice message at one.', 'ok'], ['I ended up send her a voice message.', 'base'], ['I ended up to send her a voice message.', 'to']] },
  { t: 'Clean the kitchen', pl: 14, fi: 19, plano: 'I was going to clean the kitchen at two.',
    kept: [['I kept watching cooking videos.', 'ok'], ['I kept to watch cooking videos.', 'to'], ['I kept watched cooking videos.', 'past']],
    end: [['I ended up ordering a pizza at seven.', 'ok'], ['I ended up to order a pizza.', 'to'], ['I ended up ordered a pizza.', 'past']] },
  { t: 'Start the report', pl: 15, fi: 23, plano: 'I was going to start the report at three.',
    kept: [['I kept opening and closing the file.', 'ok'], ['I kept open and close the file.', 'base'], ['I kept to open the file.', 'to']],
    end: [['I ended up writing one sentence at 11 PM.', 'ok'], ['I ended up to write one sentence.', 'to'], ['I ended up wrote one sentence.', 'past']] },
  { t: 'Go to bed early', pl: 22, fi: 26, plano: 'I was going to go to bed at ten.',
    kept: [['I kept saying “one more episode.”', 'ok'], ['I kept to say “one more episode.”', 'to'], ['I kept said “one more episode.”', 'past']],
    end: [['I ended up sleeping at 2 AM.', 'ok'], ['I ended up to sleep at 2 AM.', 'to'], ['I ended up slept at 2 AM.', 'past']] }
];
var NAO = { to: 'No to here. kept / ended up + -ing.', base: 'Not the plain verb: kept checking, ended up sending.', past: 'Not the past: the -ing form. (kept / ended up already say “past”.)' };

var PALAVRAS = [
  { w: 'put it off', ops: ['decide to do it later, again', 'finish it quickly', 'give it to somebody else'], st: 'I always put off …' },
  { w: 'get around to it', ops: ['finally do the thing you’ve been avoiding', 'go around the problem', 'forget about it'], st: 'I never get around to …' },
  { w: 'leave it to the last minute', ops: ['start at the very end of the time you had', 'leave the room', 'do it early'], st: 'I always leave … to the last minute.' },
  { w: 'it’s overdue', ops: ['it’s later than the day it was due', 'it’s finished', 'it’s too expensive'], st: '… is overdue.' },
  { w: 'it’s on my plate', ops: ['it’s waiting for me and nobody else', 'it’s my dinner', 'it’s easy'], st: 'Right now, … is on my plate.' },
  { w: 'it drags on', ops: ['it takes much longer than it should', 'it ends suddenly', 'it’s very exciting'], st: '… always drags on.' },
  { w: 'talk myself out of it', ops: ['find a good reason not to do it', 'talk to myself in the mirror', 'convince myself to do it'], st: 'I talked myself out of …' },
  { w: 'get it over with', ops: ['do it now so it stops waiting', 'cancel it', 'do it again'], st: 'I just want to get … over with.' }
];

var METADES = [
  { a: 'I was going to book the flight,', ops: ['but I wanted to check one more site first.', 'but the next episode started on its own.', 'but the file was on the other computer.'] },
  { a: 'I was going to call the clinic,', ops: ['but they close at four and I remembered at five.', 'but I wanted to check one more site first.', 'but the button was three menus deep.'] },
  { a: 'I was going to start the report,', ops: ['but the file was on the other computer.', 'but they close at four.', 'but the next episode started on its own.'] },
  { a: 'I was going to go to bed early,', ops: ['but the next episode started on its own.', 'but the button was three menus deep.', 'but I left my bag at the office.'] },
  { a: 'I was going to cancel the subscription,', ops: ['but the button was three menus deep.', 'but I left my bag at the office.', 'but they close at four.'] },
  { a: 'I was going to go to the gym,', ops: ['but I left my bag at the office.', 'but the file was on the other computer.', 'but I wanted to check one more site first.'] }
];

var OPC = ['was going to', 'kept', 'ended up'];
var LACUNA = [
  { f: 'I ___ opening the same three websites all morning.', k: 1 },
  { f: 'I ___ watching two hours of videos.', k: 2 },
  { f: 'She ___ send the report on Friday, but the file was too big.', k: 0 },
  { f: 'He ___ apologizing, and nobody had asked him to.', k: 1 },
  { f: 'We ___ taking a taxi, because the bus never came.', k: 2 },
  { f: 'She ___ meet him at seven, and then it rained.', k: 0 },
  { f: 'I ___ telling myself it was only five more minutes.', k: 1 },
  { f: 'I ___ start on Monday. It’s Thursday today.', k: 0 }
];
var LNAO = ['A plain verb after the gap: the plan, was going to.', 'Again and again: kept + -ing.', 'The result, at the end: ended up + -ing.'];

var VOCE = [
  { k: 'I usually put off…', q: 'I usually put off…', fup: 'Since when?', st: ['I usually put off …-ing / … because …'], ex: 'I usually put off calling the bank, because it takes forever.' },
  { k: 'I keep telling myself…', q: 'I keep telling myself that…', fup: 'Do you believe it?', st: ['I keep telling myself that …'], ex: 'I keep telling myself that I’ll start running next week.' },
  { k: 'This week…', q: 'This week I was going to…', fup: 'What happened?', st: ['This week I was going to …, but …'], ex: 'This week I was going to read a book, but I kept watching series.' },
  { k: 'Last Sunday…', q: 'Last Sunday I ended up…', fup: 'Was it a good Sunday?', st: ['Last Sunday I ended up …-ing'], ex: 'Last Sunday I ended up cleaning the whole house.' },
  { k: 'The longest…', q: 'The thing that has been on my list the longest is…', fup: 'How long?', st: ['The thing … is …'], ex: 'The thing that has been on my list the longest is fixing my bike.' },
  { k: 'I start fast when…', q: 'I always start fast when…', fup: 'Why then?', st: ['I always start fast when …'], ex: 'I always start fast when my boss is waiting.' }
];

var ULTIMA = [
  { q: 'What’s the thing you’ve put off the longest?', push: 'How long: weeks, or months?' },
  { q: 'What did you do instead of it, the last time?', push: 'Say it with KEPT.' },
  { q: 'Who else knows you haven’t done it?', push: 'If nobody, why haven’t you told anyone?' },
  { q: 'What actually happens if you never do it?', push: 'Is that as bad as it feels?' },
  { q: 'What’s the five-minute version of it?', push: 'Still too big? Make it smaller.' },
  { q: 'What time today could you do those five minutes?', push: 'The only WILL of the hour: I’ll …' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  te: { n: 0, r: {}, fav: -1 }, rl: { sel: 0, k: {}, e: {} }, pa: { n: 0, esc: -1 }, me: { n: 0, esc: -1 }, la: { n: 0, esc: -1 }, voce: { sel: -1, foi: {} }, ul: { n: 0 } };

function ang(h) { return ((h % 12) * 30 - 90) * Math.PI / 180; }
function pt(r, h) { var a = ang(h); return [(150 + r * Math.cos(a)).toFixed(1), (150 + r * Math.sin(a)).toFixed(1)]; }
function hora(h) { var x = h % 24, s = x >= 12 ? 'PM' : 'AM', y = x % 12 || 12; return y + ' ' + s; }
function relogio(pl, fi, laco, fim, mini) {
  var marcas = '', i;
  for (i = 0; i < 12; i++) { var a = pt(i % 3 ? 118 : 112, i), b = pt(128, i); marcas += '<line class="marca' + (i % 3 ? '' : ' forte') + '" x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '"/>'; }
  var p = pt(84, pl), s = '<svg class="relogio' + (mini ? ' mini' : '') + '" viewBox="0 0 300 300" role="img" aria-label="Clock"><circle class="caixa" cx="150" cy="150" r="140"/><circle class="face" cx="150" cy="150" r="130"/>' + marcas;
  ['12', '3', '6', '9'].forEach(function (n, j) { var q = pt(96, j * 3); s += '<text class="num" x="' + q[0] + '" y="' + (+q[1] + 7) + '">' + n + '</text>'; });
  if (laco) {
    var sw = (fi - pl) * 30, a1 = pt(108, pl), a2 = pt(108, fi);
    s += '<path class="arco" d="M' + a1[0] + ' ' + a1[1] + ' A108 108 0 ' + (sw > 180 ? 1 : 0) + ' 1 ' + a2[0] + ' ' + a2[1] + '"/>';
    var m = pt(108, pl + (fi - pl) / 2); s += '<circle class="curl" cx="' + m[0] + '" cy="' + m[1] + '" r="11"/>';
  }
  s += '<line class="fantasma" x1="150" y1="150" x2="' + p[0] + '" y2="' + p[1] + '"/>';
  if (fim) { var f = pt(98, fi); s += '<line class="real" x1="150" y1="150" x2="' + f[0] + '" y2="' + f[1] + '"/><circle class="ponta" cx="' + f[0] + '" cy="' + f[1] + '" r="6"/>'; }
  return s + '<circle class="eixo" cx="150" cy="150" r="7"/></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE SATURDAY CLOCK</span><h1><b>I Ended Up</b></h1>'
    + '<p class="sub">I <b>was going to</b> start at nine. I <b>kept</b> checking my phone. I <b>ended up</b> starting at four.</p>'
    + '<div class="chipsx"><span class="pilula">was going to</span><span class="pilula">kept + -ing</span><span class="pilula">ended up + -ing</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open Saturday</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + relogio(9, 16, 1, 1) + '<div class="legenda"><span class="pl">9 AM · the plan</span><span class="lp">the loop</span><span class="fi">4 PM · what happened</span></div></div></div>';
};

R.teste = function (c) {
  var e = S.te, n = e.n;
  if (n >= TESTE.length) {
    var tot = 0; for (var k in e.r) tot += e.r[k];
    var fx = FAIXAS.filter(function (f) { return tot <= f[0]; })[0] || FAIXAS[2];
    return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd"><small>YOUR SCORE · ' + tot + ' / 20</small><h2>' + fx[1] + '</h2></div><p class="dica-aluno">A conversation starter, not a diagnosis. Which one is MOST true? Tap it. It comes back at the end.</p></div>'
      + '<div class="lado-l"><div class="lista-t">' + TESTE.map(function (t, i) { return '<button type="button" class="item-t' + (e.fav === i ? ' on' : '') + '" data-a="te-fav" data-n="' + i + '"><i>' + ['NEVER', 'SOMETIMES', 'OFTEN'][e.r[i] || 0] + '</i>' + t + '</button>'; }).join('') + '</div></div></div>';
  }
  return cab(c) + trilha(TESTE, n) + '<div class="foco"><div class="balao vd"><small>' + (n + 1) + ' OF 10</small><p>' + TESTE[n] + '</p></div><div class="tres-b centro">'
    + [['OFTEN', 2], ['SOMETIMES', 1], ['NEVER', 0]].map(function (o) { return '<button type="button" class="pilula grande-p" data-a="te" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div><p class="dica-aluno" style="text-align:center">Read it out loud first. Then tell your teacher one real example.</p></div>';
};

R.verbos = function (c) {
  return cab(c) + '<div class="maos">' + MAOS.map(function (m) { return '<div class="mao ' + m.c + '"><small>' + m.o + '</small><b>' + m.v + '</b><p>' + m.ex + '</p></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.relogio = function (c) {
  var e = S.rl, x = TAREFAS[e.sel], ko = e.k[e.sel] === 'ok', eo = e.e[e.sel] === 'ok', feitas = TAREFAS.filter(function (t, i) { return e.e[i] === 'ok'; }).length;
  var passo = !ko ? ['kept', x.kept, e.k[e.sel], 'rl-k', 'THE LOOP · TAP THE KEPT LINE YOU HEARD'] : !eo ? ['end', x.end, e.e[e.sel], 'rl-e', 'WHAT HAPPENED · TAP THE ENDED UP LINE YOU HEARD'] : null;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="abas-t">' + TAREFAS.map(function (t, i) { return '<button type="button" class="aba-t' + (e.sel === i ? ' on' : '') + (e.e[i] === 'ok' ? ' feita' : '') + '" data-a="rl" data-n="' + i + '">' + t.t + '</button>'; }).join('') + '</div>'
    + '<div class="mostra-r">' + relogio(x.pl, x.fi, ko, eo) + '<div class="legenda"><span class="pl">' + hora(x.pl) + ' · the plan</span>' + (ko ? '<span class="lp">the loop</span>' : '') + (eo ? '<span class="fi">' + hora(x.fi) + ' · what happened</span>' : '') + '</div></div></div>'
    + '<div class="lado-l"><div class="linha-h pl"><small>THE PLAN</small><p>' + x.plano + '</p></div>'
    + (ko ? '<div class="linha-h lp"><small>THE LOOP</small><p>' + x.kept[0][0] + '</p></div>' : '')
    + (eo ? '<div class="linha-h fi"><small>WHAT HAPPENED</small><p>' + x.end[0][0] + '</p></div><p class="aprova">Now read all three as one story.' + (feitas >= 5 ? ' Five tasks, fifteen lines: that’s a Saturday.' : '') + '</p>' : '')
    + (passo ? '<h5 class="so-prof rot-ouve">' + passo[4] + '</h5><div class="versoes">' + ordem(passo[1], e.sel * 3 + (ko ? 2 : 1)).map(function (o) { return '<button type="button" class="versao' + (passo[2] === o[1] ? ' errado' : '') + '" data-a="' + passo[3] + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (passo[2] ? '<p class="recusa">' + NAO[passo[2]] + '</p>' : '') : '')
    + '</div></div>';
};

R.palavras = function (c) {
  var e = S.pa, n = e.n;
  if (n >= PALAVRAS.length) return cab(c) + trilha(PALAVRAS, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT OF EIGHT</small><h2>Pick two of them. Make one true sentence with each.</h2></div><div class="tres-b centro">' + PALAVRAS.map(function (p) { return '<span class="pilula">' + p.w + '</span>'; }).join('') + '</div></div>';
  var x = PALAVRAS[n], ok = e.esc === 0;
  return cab(c) + trilha(PALAVRAS, n) + '<div class="foco"><div class="expr"><b>' + x.w + '</b></div><div class="versoes duas-v">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 3).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="pa" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div class="balao vd"><small>NOW ABOUT YOU</small><p>' + x.st + '</p></div><div style="text-align:center"><button type="button" class="btn" data-a="pa-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Read it again. Is it about waiting, or doing?</p>' : '') + '</div>';
};

R.metades = function (c) {
  var e = S.me, n = e.n;
  if (n >= METADES.length) return cab(c) + trilha(METADES, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>A plan, a BUT, and one short fact. That’s an excuse in English. Now give your teacher a real one.</h2></div></div>';
  var x = METADES[n], ok = e.esc === 0;
  return cab(c) + trilha(METADES, n) + '<div class="foco"><div class="balao vd"><small>THE PLAN</small><p>' + x.a + (ok ? ' <u>' + x.ops[0] + '</u>' : '') + '</p></div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="me-prox">Next</button></div>' : '<div class="versoes duas-v">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 7).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="me" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc > 0 ? '<p class="recusa" style="text-align:center">Which reason would kill THAT plan?</p>' : '')) + '</div>';
};

R.lacuna = function (c) {
  var e = S.la, n = e.n;
  if (n >= LACUNA.length) return cab(c) + trilha(LACUNA, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT OF EIGHT</small><h2>The word after the gap told you every time: a plain verb, the plan. -ing: the loop or the result.</h2></div></div>';
  var x = LACUNA[n], ok = e.esc === x.k;
  return cab(c) + trilha(LACUNA, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + OPC[x.k] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + OPC.map(function (o, i) { return '<button type="button" class="pilula grande-p mao-b ' + ['pl', 'lp', 'fi'][i] + (e.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="la" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="la-prox">Next</button></div>' : e.esc >= 0 ? '<p class="recusa" style="text-align:center">' + LNAO[x.k] + '</p>' : '') + '</div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

R.ultima = function (c) {
  var e = S.ul, n = Math.min(e.n, ULTIMA.length - 1), x = ULTIMA[n], fav = S.te.fav;
  return cab(c) + trilha(ULTIMA, e.n) + '<div class="mesa-c"><div class="lado-l">' + (fav >= 0 ? '<div class="pede vd"><small>THE ONE YOU MARKED IN SCENE I</small><b>“' + TESTE[fav] + '”</b></div>' : '') + '<div class="pergunta vd"><small>QUESTION ' + (n + 1) + ' OF 6</small><h2>' + x.q + '</h2></div><p class="so-prof dica-aluno">Push back: “' + x.push + '”</p></div>'
    + '<div class="lado-l">' + (n === ULTIMA.length - 1 ? fala('ul', ['I’ll … today at …'], ['I’ll', 'today', 'at', 'for five minutes']) + '<p class="aprova">The only WILL of the hour.</p>' : fala('ul' + n, [['I’ve been putting off …', 'I kept …-ing.', 'Nobody / My … knows.', 'Nothing! / …', 'I could just …'][n]], ['was going to', 'kept', 'ended up', 'put it off', 'get it over with']) + '<div><button type="button" class="btn" data-a="ul-prox">Next question</button></div>') + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'This week I was going to …\nI kept …-ing.\nI ended up …-ing.\nToday I’ll …', 'Your clock',
    ['I was going to ', 'I kept ', 'I ended up ', 'Today I’ll '], ['YOUR WEEK, ON THE CLOCK', 'The plan, the loop, what really happened, and one thing you will do today.'])
    + '<div class="lado-fim">' + relogio(9, 16, 1, 1, 1) + '<div class="grande vd"><span><u>I was going to</u> + verb · the plan</span><span><u>I kept</u> + -ing · the loop</span><span><u>I ended up</u> + -ing · what happened</span></div>'
    + mostra('fim', 'This week I was going to fix my bike.<br>I kept saying “tomorrow.”<br>I ended up taking the bus every day.<br>Today I’ll take it to the shop at six.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.te = function (b, n) { S.te.r[S.te.n] = n; S.te.n++; };
TOQUES['te-fav'] = function (b, n) { S.te.fav = n; };
TOQUES.rl = function (b, n) { S.rl.sel = n; };
TOQUES['rl-k'] = function (b, n, v) { S.rl.k[S.rl.sel] = v; };
TOQUES['rl-e'] = function (b, n, v) { S.rl.e[S.rl.sel] = v; };
TOQUES.pa = function (b, n) { S.pa.esc = n; };
TOQUES['pa-prox'] = function () { S.pa = { n: S.pa.n + 1, esc: -1 }; };
TOQUES.me = function (b, n) { S.me.esc = n; };
TOQUES['me-prox'] = function () { S.me = { n: S.me.n + 1, esc: -1 }; };
TOQUES.la = function (b, n) { S.la.esc = n; };
TOQUES['la-prox'] = function () { S.la = { n: S.la.n + 1, esc: -1 }; };
TOQUES['ul-prox'] = function () { S.ul.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G14 · uma cena curta nova (k: gx) antes de verbos.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'cacaErro', titulo: 'Mistake hunter. Six sentences about last Saturday.',
  toque: 'People who speak Portuguese often say these. Tap the wrong word before you see the answer.',
  itens: [
    { f: 'I was [[go]] to clean the garage.', r: 'I <b>was going</b> to clean the garage.', d: 'The plan: was going to + verb.' },
    { f: 'I kept [[to check]] my phone.', r: 'I kept <b>checking</b> my phone.', d: 'kept + -ing. No to.' },
    { f: 'I ended up [[to order]] a pizza.', r: 'I ended up <b>ordering</b> a pizza.', d: 'ended up + -ing. No to.' },
    { f: 'I ended up [[watch]] TV all day.', r: 'I ended up <b>watching</b> TV all day.', d: 'ended up + -ing.' },
    { f: 'I kept [[look]] at the clock.', r: 'I kept <b>looking</b> at the clock.', d: 'kept + -ing.' },
    { f: 'I [[am going]] to call my mom, but I forgot.', r: 'I <b>was going</b> to call my mom, but I forgot.', d: 'The plan was in the past: was going to.' }
  ],
  nota: 'Three hands: <b>was going to</b> + verb (the plan), <b>kept + -ing</b> (the loop), <b>ended up + -ing</b> (what really happened). Never “kept to check” or “ended up to do”.',
  uso: { p: 'Your turn. Last Saturday: one plan, one loop, one result.', molde: ['I was going to …', 'I kept …-ing', 'I ended up …-ing'], ex: 'I was going to clean my room. I kept checking my phone. I ended up watching videos all afternoon.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_caca', GX_EXPLICA); };
