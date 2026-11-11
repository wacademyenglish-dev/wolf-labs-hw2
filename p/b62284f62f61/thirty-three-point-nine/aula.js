/* ============================================================
   THIRTY-THREE POINT NINE · THE TRACKER · LIVE CLASS  06/10/2026
   Main series B1 · present perfect continuous: have / has been + -ing
   para algo que começou e continua; since + um ponto, for + um pedaço
   de tempo; How long have you been …? Erros: "I'm doing it since
   March", "I have been work", "since three weeks", "How long are you
   living here?". Com live / work / study, as duas formas valem.
   O MUNDO (da aula velha): um estudo de 1994 — os alunos disseram 33,9
   dias para o próprio trabalho; levou 55,5; menos de 3 em 10 dentro do
   prazo deles; o pior caso (48,6) ainda foi otimista. Um homem conta o
   alívio de adiar (a conta chega na quinta). E o achado prático:
   quando e onde. Não é diagnóstico. Três gravações mantidas (d1–d3),
   conferidas no faster-whisper em 06/10: batem.
   A CARA: o RASTREADOR — uma grade de 60 quadradinhos, um por dia, com
   duas marcas: a estimativa (33,9, tracejada) e a realidade (55,5, em
   brasa). Na cena II, a sequência acende quadradinhos; um erro apaga.
   Fila: FILA-LIVE-386.md · 109.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'envelope' },
  { k: 'envelope', est: 'o', min: 7, img: 'envelope', rot: 'I · The Envelope', t: 'Five things. How many days would each one take you?', p: 'Say your number out loud first. Then tap the closest one. Nobody checks.' },
  { k: 'gx', est: 'f', min: 4, img: 'envelope', rot: 'II · Since, For, Done', t: 'Where does each sentence live in time?', p: 'Tap a sentence, then its place on the line. Notice the verbs. Then say two lines about you.' },
  { k: 'streak', est: 'f', min: 6, img: 'poeira', rot: 'III · The Streak', t: 'Every sentence with have been + -ing keeps the streak alive. One mistake, and it goes back to zero.', p: 'Choose the right form. Then say the whole sentence.' },
  { k: 'forsince', est: 'f', min: 6, img: 'poeira', rot: 'IV · For or Since', t: 'SINCE marks the point where it started. FOR measures the piece of time.', p: 'Tap FOR or SINCE for each one. Then say a sentence with it.' },
  { k: 'estudo', est: 'l', min: 7, img: 'envelope', rot: 'V · Their Own Number', t: '1994. A room of students, and one question about their own paper.', p: 'Play the researcher once. Then guess each number.' },
  { k: 'caixa', est: 'o', min: 7, img: 'caixa', rot: 'VI · The Worst Case', t: 'One more question: imagine everything going wrong. How long then?', p: 'Match each line to its number. They get bigger: realistic, worst case, what really happened.' },
  { k: 'quinta', est: 'l', min: 7, img: 'mesa', rot: 'VII · Thursday’s Bill', t: 'A man describes putting something off.', p: 'Listen once. Sort what he got tonight from what he paid on Thursday.' },
  { k: 'quanto', est: 'o', min: 7, extra: 1, img: 'poeira', rot: 'VIII · Who’s Been Doing It Longest', t: 'Four habit trackers. Ask how long, then find out who has been going the longest.', p: 'Choose the right question and ask it. Read the answer. At the end, add yourself and your teacher.' },
  { k: 'quando', est: 'l', min: 7, extra: 1, img: 'casaco', rot: 'IX · When and Where', t: 'The one practical finding in this hour.', p: 'Listen once. Three questions. Then make your own plan out loud.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'X · Still Going', t: 'Five sentences have a problem. One is right.', p: 'Choose the fix. Then say the whole sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'envelope', rot: 'XI · Your Number', t: 'Your five numbers from scene I, next to theirs.', p: 'Write what you’ve been putting off, how long, and when and where you’ll start. It goes to your My notes.' }
];

var TR = {
  'd1.mp3': 'In 1994, Roger Buehler and two colleagues asked a room of students one question about their own final paper: how many days until it is finished? Not a deadline, their own honest estimate. The average came back at thirty-three point nine days. Then the researchers waited. The papers came in at fifty-five point five days, and fewer than three students in ten finished inside the time they had given themselves. Nobody lied and nobody was lazy. They were describing a future that did not arrive.',
  'd2.mp3': 'I did not decide not to do it. That is the part people get wrong about this. I sat down, I opened the folder, and something in me said: not now, later tonight. And the relief was immediate. That is the honest bit, and it is the bit nobody admits. The moment I closed it, I felt fine. Then Thursday morning arrived, and the same folder was there with less time around it and the same feeling waiting inside it. I had not saved anything. I had only moved it.',
  'd3.mp3': 'There is one thing in this research that changes the numbers, and it is much smaller than people expect. It is not motivation, and it is not discipline. It is writing down when and where. A person who says, I will work on this at some point this week, does roughly what you would guess. A person who says, Thursday, nine in the morning, at the kitchen table, does substantially more of it. Same person, same task, same week. The only difference is that the plan named a moment and a place, so the moment can arrive.'
};

var ENV = ['Read a 200-page book you already own.', 'Answer the message you’ve been leaving until later.', 'Fill in a form that takes about twenty minutes.', 'Tidy the worst drawer, folder or cupboard.', 'The one thing you’d rather not put on this list.'];
var DIAS = [1, 3, 7, 14, 30, 60];

var STREAK = [
  { a: 'I ', b: ' Spanish for three months.', ops: ['’ve been learning', '’m learning', '’ve been learn'] },
  { a: 'She ', b: ' every morning since January.', ops: ['has been running', 'is running', 'has been run'] },
  { a: 'We ', b: ' about it for weeks.', ops: ['’ve been talking', 'are talking', 'talk'] },
  { a: 'How long ', b: ' for the exam?', ops: ['have you been studying', 'are you studying', 'do you study'] },
  { a: 'He ', b: ' to call his mom since Sunday.', ops: ['has been meaning', 'is meaning', 'means'] },
  { a: 'They ', b: ' the guitar for two years.', ops: ['have been playing', 'have been play', 'are playing'] },
  { a: 'I ', b: ' this report since Monday.', ops: ['’ve been writing', 'write', '’m writing'] },
  { a: 'It ', b: ' all day.', ops: ['has been raining', 'is raining since', 'has been rain'] },
  { a: 'You ', b: ' that box for five months.', ops: ['’ve been ignoring', '’re ignoring', '’ve been ignore'] },
  { a: 'How long ', b: ' here?', ops: ['have you been living', 'are you living', 'you have been living'] }
];

var CHIPS = [['March', 'since'], ['five months', 'for'], ['2019', 'since'], ['three weeks', 'for'], ['Monday', 'since'], ['a long time', 'for'], ['I was a kid', 'since'], ['two hours', 'for']];

var PLACAR = [
  { rot: 'THEY SAID', q: 'What was the students’ own average estimate?', op: ['33.9 days', '12.5 days', '55.5 days', '70 days'], val: '33.9' },
  { rot: 'IT TOOK', q: 'How long did the papers actually take?', op: ['55.5 days', '33.9 days', '41 days', '80 days'], val: '55.5' },
  { rot: 'ON TIME', q: 'How many finished inside their own estimate?', op: ['fewer than 3 in 10', 'about 5 in 10', 'about 7 in 10', 'about 9 in 10'], val: '< 3 in 10' },
  { rot: 'THE GAP', q: 'The distance between 33.9 and 55.5 is about …', op: ['three weeks', 'three days', 'three months', 'three hours'], val: '3 weeks' }
];

var FENDAS = [
  { rot: 'a realistic estimate', ops: ['33.9 days', '48.6 days', '55.5 days'] },
  { rot: 'imagine everything going wrong', ops: ['48.6 days', '33.9 days', '55.5 days'] },
  { rot: 'what actually happened', ops: ['55.5 days', '48.6 days', '33.9 days'] },
  { rot: 'finished inside the worst case', ops: ['fewer than half', 'almost everybody', 'nobody'] }
];

var FICHAS = [['the evening back', 0], ['the same folder, still closed', 1], ['the bad feeling gone, immediately', 0], ['less time for the same work', 1], ['the same feeling, still waiting', 1]];

var PESSOAS = [
  { nome: 'NOA', hab: 'RUNNING', dias: 240, ops: ['How long has Noa been running?', 'How long is Noa running?', 'How long Noa has been running?'], r: 'Noa has been running <b>since January</b>.' },
  { nome: 'ELI', hab: 'GUITAR', dias: 42, ops: ['How long has Eli been playing the guitar?', 'How long has Eli been play the guitar?', 'How long does Eli play the guitar?'], r: 'Eli has been playing the guitar <b>for six weeks</b>.' },
  { nome: 'SAM', hab: 'NO SUGAR', dias: 90, ops: ['How long has Sam been avoiding sugar?', 'Since when Sam avoids sugar?', 'How long is Sam avoiding sugar?'], r: 'Sam has been avoiding sugar <b>for three months</b>.' },
  { nome: 'KAI', hab: 'JAPANESE', dias: 730, ops: ['How long has Kai been learning Japanese?', 'How long has Kai learning Japanese?', 'How long Kai is learning Japanese?'], r: 'Kai has been learning Japanese <b>for two years</b>.' }
];

var QUANDO = [
  { q: 'Which plan works better, according to the research?', op: ['Thursday at nine, at the kitchen table', 'I’ll do it this week', 'I’ll really try this time'] },
  { q: 'Why would naming a time and a place help?', op: ['The moment has somewhere to arrive.', 'The task gets shorter.', 'You feel guilty.'] },
  { q: 'In the photo, the coat and the bag are by the door. What has been decided?', op: ['when and where', 'nothing yet', 'how long it will take'] }
];

var ERROS = [
  { f: '<s>I’m doing it</s> since March.', ops: ['I’ve been doing it', 'I do it', 'I was doing it'], w: 'Still going since March: <b>have been + -ing</b>.' },
  { f: 'I have been <s>work</s> here for a year.', ops: ['working', 'worked', 'works'], w: '<b>been + -ing</b>.' },
  { f: 'She’s been waiting <s>since</s> three weeks.', ops: ['for', 'during', 'from'], w: 'A piece of time: <b>for</b>.' },
  { f: '<s>How long are you</s> living here?', ops: ['How long have you been', 'How long you are', 'Since when you are'], w: '<b>How long have you been</b> living here?' },
  { f: 'He’s been meaning to call <s>for</s> Sunday.', ops: ['since', 'from', 'during'], w: 'A point: <b>since</b>.' },
  { f: 'I’ve lived here since 2019.', ops: ['Nothing. It’s right.', 'I live here since', 'I’m living here since'], w: 'Right. With live, work and study, both forms work.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {}, q: {},
  env: {}, st: { n: 0, esc: -1, seq: 0, melhor: 0 }, fs: {}, cx: { n: 0, esc: -1 }, qi: {}, qu: { n: 0, esc: -1, feitos: {} }, er: { n: 0, esc: -1 } };

/* o rastreador: 60 dias; marcas de 33,9 e 55,5; `acesos` dias acesos */
function rastreador(acesos, marcas, rotulo, mini) {
  var html = '<div class="dt-rastro' + (mini ? ' mini' : '') + '"><div class="dt-grade">';
  for (var i = 1; i <= 60; i++) html += '<i class="' + (i <= acesos ? 'aceso' : '') + (marcas && i === 34 ? ' est' : '') + (marcas && i === 56 ? ' real' : '') + '"></i>';
  html += '</div>' + (marcas ? '<div class="dt-legenda"><span class="est">THEY SAID · 33.9</span><span class="real">IT TOOK · 55.5</span></div>' : '') + (rotulo ? '<small class="dt-rot">' + rotulo + '</small>' : '') + '</div>';
  return html;
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="dt-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* pergunta de múltipla escolha que se encadeia; a certa é a posição 0 */
function quiz(k, lista) {
  var e = S.q[k] || (S.q[k] = { n: 0, esc: -1 }), n = e.n;
  if (n >= lista.length) return '';
  var x = lista[n], ok = e.esc === 0;
  return '<div class="dt-quiz vd"><small>QUESTION ' + (n + 1) + ' OF ' + lista.length + '</small><h3>' + x.q + '</h3>' + tres('qz" data-c="' + k, x.op, e.esc, n + 1)
    + (ok ? '<button type="button" class="btn" data-a="qz-prox" data-c="' + k + '">' + (n < lista.length - 1 ? 'Next question' : 'Done') + '</button>' : e.esc > 0 ? '<p class="recusa">Play it again and listen for that part.</p>' : '<p class="dica-aluno">Answer out loud first. Then tap.</p>') + '</div>';
}
function quizN(k) { return (S.q[k] || { n: 0 }).n; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE TRACKER</span><h1>Thirty-Three <b>Point Nine</b></h1>'
    + '<p class="sub">They said 33.9 days. It took 55.5. And the envelope <b>has been sitting</b> there <b>since</b> March.</p>'
    + '<div class="chipsx"><span class="pilula">have been + -ing</span><span class="pilula">since + a point</span><span class="pilula">for + a piece of time</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the envelope</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + rastreador(56, 1, 'ONE SQUARE = ONE DAY') + '</div></div>';
};

R.envelope = function (c) {
  var e = S.env, feitos = ENV.filter(function (_, i) { return e[i]; }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + ENV.map(function (t, i) { return '<div class="dt-item vd' + (e[i] ? ' feito' : '') + '"><b>' + (i + 1) + '</b><span>' + t + '</span><div class="dt-dias">' + DIAS.map(function (d) { return '<button type="button" class="pilula' + (e[i] === d ? ' on' : '') + '" data-a="env" data-n="' + i + '" data-v="' + d + '">' + d + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (feitos >= 5 ? '<div class="pergunta vd ja"><small>FIVE NUMBERS</small><h2>Which one was hardest to put a number on? Say which, and why.</h2></div>' + fala('env', ['The hardest one was …, because …', 'I’ve been meaning to … for …'], ['meaning to', 'putting off', 'for', 'since']) + '<p class="so-prof dica-aluno">Nothing here is corrected. The five numbers come back in scene X.</p>'
      : '<div class="dt-total vd"><small>YOUR NUMBERS</small>' + ENV.map(function (_, i) { return '<span>' + (e[i] ? e[i] + ' d' : '·') + '</span>'; }).join('') + '</div><p class="dica-aluno">Say the number before you tap.</p>') + '</div></div>';
};

R.streak = function (c) {
  var e = S.st, n = e.n, fim = n >= STREAK.length;
  var cont = '<div class="dt-seq"><div class="dt-cubos">' + STREAK.map(function (_, i) { return '<i class="' + (i < e.seq ? 'aceso' : '') + '"></i>'; }).join('') + '</div><span>STREAK <b>' + e.seq + '</b> · BEST <b>' + e.melhor + '</b></span></div>';
  if (fim) return cab(c) + cont + '<div class="foco"><div class="pergunta vd"><small>TEN SENTENCES</small><h2>Every one of them started in the past and is still going. Now one about something you’ve been doing since this year started.</h2></div></div>';
  var x = STREAK[n], ok = e.esc === 0;
  return cab(c) + cont + '<div class="foco"><div class="balao vd"><small>SENTENCE ' + (n + 1) + ' OF 10</small><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div>' + tres('st', x.ops, e.esc, n + 1, 'linha')
    + (ok ? '<p class="aprova" style="text-align:center">Say the whole sentence. Then a real follow-up: why did you start?</p><div style="text-align:center"><button type="button" class="btn" data-a="st-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Streak reset. have / has been + -ing. Say it right, then go on.</p><div style="text-align:center"><button type="button" class="btn" data-a="st-prox">Next</button></div>' : '') + '</div>';
};

R.forsince = function (c) {
  var e = S.fs, feitos = CHIPS.filter(function (_, i) { return e[i] === CHIPS[i][1]; }).length;
  return cab(c) + '<div class="dt-chips">' + CHIPS.map(function (x, i) { var ok = e[i] === x[1]; return '<div class="dt-chip vd' + (ok ? ' feito ' + x[1] : '') + '"><b>' + (ok ? x[1].toUpperCase() + ' ' : '') + x[0] + '</b><div class="dt-fs">' + ['for', 'since'].map(function (w) { return '<button type="button" class="pilula' + (e[i] === w ? (w === x[1] ? ' certo' : ' errado') : '') + '" data-a="fs" data-n="' + i + '" data-v="' + w + '">' + w.toUpperCase() + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + '<div class="foco"><div class="balao vd"><small>THE MODEL · SAY IT WITH EACH ONE</small><p>The envelope has been sitting there <u>for / since</u> …</p></div>' + (feitos >= CHIPS.length ? '<p class="aprova" style="text-align:center">SINCE a point. FOR a piece. Eight times. Now say each one with the other word, changing the time.</p>' : '<p class="so-prof dica-aluno" style="text-align:center">Stuck? Can you put it on a calendar? Then SINCE.</p>') + '</div>';
};

R.estudo = function (c) {
  var ouviu = (S.ouviu || {})['d1.mp3'], n = quizN('es'), feito = n >= PLACAR.length;
  var placar = '<div class="dt-placar">' + PLACAR.map(function (p, i) { return '<div class="dt-casa vd' + (i < n ? ' feita' : '') + '"><small>' + p.rot + '</small><b>' + (i < n ? p.val : '?') + '</b></div>'; }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('d1.mp3') + '<b>THE RESEARCHER · 1994</b></div>' + transcricao('d1.mp3', TR['d1.mp3']) + '</div>' + placar + (n >= 2 ? rastreador(0, 1, '', 1) : '') + '</div>'
    + '<div class="lado-l">' + (!ouviu ? '<div class="pergunta vd ja"><h2>A student guesses how many days their own paper will take. Do you think they get it right? Guess first.</h2></div><p class="dica-aluno">Play the researcher.</p>'
      : !feito ? quiz('es', PLACAR) : follow('THE QUESTION', 'Would they have answered differently if somebody had shown them this first? Yes or no, and why?', ['Yes, because …', 'No, because …', 'I think people …'], ['estimate', 'optimistic'], 'es')) + '</div></div>';
};

R.caixa = function (c) {
  var e = S.cx, n = Math.min(e.n, FENDAS.length - 1), fim = e.n >= FENDAS.length, x = FENDAS[n], ok = e.esc === 0;
  var barras = '<div class="dt-barras">' + [['REALISTIC', 33.9, 0], ['WORST CASE', 48.6, 1], ['REALITY', 55.5, 2]].map(function (b) { var vis = e.n > b[2]; return '<div class="dt-barra' + (vis ? ' on' : '') + '"><small>' + b[0] + '</small><i style="width:' + (vis ? b[1] / 60 * 100 : 0) + '%"></i><b>' + (vis ? b[1] : '') + '</b></div>'; }).join('') + '</div>';
  if (fim) return cab(c) + barras + '<div class="foco">' + follow('THE QUESTION', 'They imagined the worst, and the worst was still too optimistic. Why, do you think?', ['Maybe because …', 'People have been …-ing'], ['optimistic', 'underestimating'], 'cx') + '</div>';
  return cab(c) + barras + '<div class="foco"><div class="pede vd centro"><small>LINE ' + (n + 1) + ' OF 4</small><b>' + x.rot + '</b></div>' + tres('cx', x.ops, e.esc, n + 1, 'linha')
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="cx-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Realistic, worst case, reality: in that order, and they get bigger.</p>' : '') + '</div>';
};

R.quinta = function (c) {
  var ouviu = (S.ouviu || {})['d2.mp3'], e = S.qi, todos = FICHAS.every(function (f, i) { return e[i] === f[1]; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('d2.mp3') + '<b>THE MAN WITH THE FOLDER</b></div>' + transcricao('d2.mp3', TR['d2.mp3']) + '</div>'
    + (ouviu ? '<div class="dt-fichas">' + FICHAS.map(function (f, i) { var foi = e[i] !== undefined, ok = e[i] === f[1]; return '<div class="dt-ficha vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + f[0] + '</span><div class="dt-fs">' + [[0, 'TONIGHT'], [1, 'THURSDAY']].map(function (o) { return '<button type="button" class="pilula' + (e[i] === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qi" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>' : '') + '</div>'
    + '<div class="lado-l">' + (!ouviu ? '<div class="pergunta vd ja"><h2>When you put something off, what do you get right away? And what do you pay later?</h2></div><p class="dica-aluno">Play the recording.</p>'
      : '<div class="dt-cols"><div class="dt-col"><small>TONIGHT · WHAT HE GOT</small>' + FICHAS.filter(function (f, i) { return e[i] === 0 && f[1] === 0; }).map(function (f) { return '<span>' + f[0] + '</span>'; }).join('') + '</div><div class="dt-col pago"><small>THURSDAY · WHAT HE PAID</small>' + FICHAS.filter(function (f, i) { return e[i] === 1 && f[1] === 1; }).map(function (f) { return '<span>' + f[0] + '</span>'; }).join('') + '</div></div>'
        + (todos ? follow('THE QUESTION', 'He says the relief was immediate. Is that fair, or is he being too easy on himself?', ['I think it’s fair, because …', 'He’s being too easy on himself, because …'], ['relief', 'moved'], 'qi') : '<p class="dica-aluno">Tonight he felt better. On Thursday, nothing had changed.</p>')) + '</div></div>';
};

R.quanto = function (c) {
  var e = S.qu, n = Math.min(e.n, PESSOAS.length - 1), fim = e.n >= PESSOAS.length, x = PESSOAS[n], ok = e.esc === 0;
  var maior = 730, barras = '<div class="dt-pessoas">' + PESSOAS.map(function (p, i) { var vis = e.feitos[i]; return '<div class="dt-pessoa' + (vis ? ' on' : '') + (i === e.n && !fim ? ' agora' : '') + '"><b>' + p.nome + '</b><small>' + p.hab + '</small><div class="dt-trilho"><i style="width:' + (vis ? Math.max(4, p.dias / maior * 100) : 0) + '%"></i></div><span>' + (vis ? p.dias + ' days' : '') + '</span></div>'; }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + barras + '</div><div class="lado-l"><div class="pergunta vd ja"><small>THE RANKING</small><h2>Who has been doing it the longest? Say the ranking. Then ask your teacher: “What have you been doing for a long time?” And answer it yourself.</h2></div>' + fala('qu', ['Kai has been … the longest.', 'I’ve been … since …', 'What have you been doing for a long time?'], []) + '</div></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + barras + '</div><div class="lado-l"><div class="pede vd"><small>' + x.nome + ' · ' + x.hab + ' · ASK THE QUESTION</small><b>How long …?</b></div>' + tres('qu', x.ops, e.esc, n + 1)
    + (ok ? '<div class="balao vd ok-b"><small>THE ANSWER · READ IT</small><p>' + x.r + '</p></div><div><button type="button" class="btn" data-a="qu-prox">Next person</button></div>' : e.esc > 0 ? '<p class="recusa">How long + has + person + been + -ing?</p>' : '') + '</div></div>';
};

R.quando = function (c) {
  var ouviu = (S.ouviu || {})['d3.mp3'], feito = quizN('qd') >= QUANDO.length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('d3.mp3') + '<b>THE FINDING</b></div>' + transcricao('d3.mp3', TR['d3.mp3']) + '</div>' + (feito ? '<div class="dt-plano vd"><small>A PLAN WITH A MOMENT</small><span><b>WHAT</b> …</span><span><b>WHEN</b> Thursday, 9 AM</span><span><b>WHERE</b> the kitchen table</span></div>' : '') + '</div>'
    + '<div class="lado-l">' + (!ouviu ? '<div class="pergunta vd ja"><h2>What helps more: more willpower, or something smaller? Guess first.</h2></div><p class="dica-aluno">Play the recording.</p>'
      : !feito ? quiz('qd', QUANDO) : follow('YOUR PLAN', 'Take one thing you’ve been putting off. Say it out loud.', ['I’ve been meaning to … since …', 'On … at …, at …, I’m going to start.'], ['meaning to', 'since', 'for'], 'qd') + '<p class="so-prof dica-aluno">This is a finding about other people, not advice.</p>') + '</div></div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>All still running. Now a true sentence about your own week for each one.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div>' + tres('er', x.ops, e.esc, n + 2, 'linha')
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + ' Say the whole sentence.</p><div style="text-align:center"><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Still going? have been + -ing. A point? since. A piece? for.</p>' : '') + '</div>';
};

R.fim = function (c) {
  var e = S.env, nums = ENV.map(function (_, i) { return e[i] ? e[i] : '·'; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’ve been meaning to … since …\nI’ve been putting it off for …\nOn … at …, at …, I’m going to start.', 'Your tracker',
    ['I’ve been meaning to', 'I’ve been putting off', 'since', 'for', 'How long have you been'], ['WHAT YOU’VE BEEN PUTTING OFF', 'How long it’s been waiting, and a moment and a place to start.'])
    + '<div class="lado-fim"><div class="dt-total vd"><small>YOUR FIVE NUMBERS · THEIRS: 33.9 → 55.5</small>' + nums.map(function (d) { return '<span>' + d + (d !== '·' ? ' d' : '') + '</span>'; }).join('') + '</div>'
    + '<div class="grande vd"><span><u>have / has been + -ing</u> · still going</span><span><u>since</u> + a point · <u>for</u> + a piece</span><span>How long have you been …?</span><span>not <s>I’m doing it since March</s></span></div>'
    + mostra('fim', 'I’ve been meaning to tidy my desk since March.<br>I’ve been putting it off for six months.<br>On Saturday at ten, at home, I’m going to start.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.env = function (b, n, v) { S.env[n] = +v; };
TOQUES.st = function (b, n) { var e = S.st; if (e.esc === 0) return false; e.esc = n; if (n === 0) { e.seq++; e.melhor = Math.max(e.melhor, e.seq); } else e.seq = 0; };
TOQUES['st-prox'] = function () { var e = S.st; e.n++; e.esc = -1; };
TOQUES.fs = function (b, n, v) { S.fs[n] = v; };
TOQUES.qz = function (b, n, v, c) { S.q[c].esc = n; };
TOQUES['qz-prox'] = function (b, n, v, c) { S.q[c] = { n: S.q[c].n + 1, esc: -1 }; };
TOQUES.cx = function (b, n) { S.cx.esc = n; };
TOQUES['cx-prox'] = function () { S.cx = { n: S.cx.n + 1, esc: -1 }; };
TOQUES.qi = function (b, n, v) { S.qi[n] = +v; };
TOQUES.qu = function (b, n) { S.qu.esc = n; if (n === 0) S.qu.feitos[S.qu.n] = 1; };
TOQUES['qu-prox'] = function () { S.qu.n++; S.qu.esc = -1; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de streak.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'The streak on one line. Where does each sentence go?',
  marcos: [{ t: 'SINCE', s: 'it started at a point' }, { t: 'FOR', s: 'a piece of time' }, { t: 'DONE', s: 'it is over' }],
  frases: [
    { f: 'I’ve been writing since nine o’clock.', c: 0, d: 'have been + -ing · since + a point' },
    { f: 'She’s been studying English since 2020.', c: 0, d: 'has been + -ing · since + a point' },
    { f: 'We’ve been waiting for two hours.', c: 1, d: 'have been + -ing · for + a piece of time' },
    { f: 'He’s been working here for five years.', c: 1, d: 'has been + -ing · for + a piece of time' },
    { f: 'I worked all morning, and now I’m done.', c: 2, d: 'worked · finished, so the past' },
    { f: 'They waited for an hour, then they left.', c: 2, d: 'waited · finished, so the past' }
  ],
  nota: 'Started in the past and still going? <b>have / has been + -ing</b>. <b>Since</b> + the point it started (since March). <b>For</b> + the piece of time (for three weeks). Finished? Use the past: I waited.',
  uso: { p: 'Your turn. Something you’ve been doing for a while: once with since, once with for.', molde: ['I’ve been … since …', 'I’ve been … for …'], ex: 'I’ve been learning English since January. I’ve been working here for two years.' },
  prof: 'Let the student place the sentences alone. A wrong place comes back with one tap.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
