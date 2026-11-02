/* ============================================================
   SIXTY SECONDS · THE ELEVATOR · LIVE CLASS  06/10/2026
   Main series A2 · "Tell me about yourself" em 60 segundos: três blocos
   (now · before · next) colados com and · but · so · because · after that.
   so × because: causa, SO, resultado / resultado, BECAUSE, causa. Erro
   universal: frases soltas sem conector; "and then, and then".
   O MUNDO (da aula velha): a entrevista no 12º andar; o elevador sobe um
   andar a cada conector. Método 4-3-2: a mesma resposta em 90, 60 e 45
   segundos. Sem áudio, sem vídeo.
   A CARA: o PAINEL DE ELEVADOR de aço escovado escuro — mostrador de
   andar em LED âmbar, setas, botões redondos; as portas abrem no topo.
   Fila: FILA-LIVE-386.md · 064.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'elevador' },
  { k: 'abre', est: 'o', min: 7, img: 'elevador', rot: 'I · Four Words', t: '“So… tell me about yourself.”', p: 'Pick a card. Answer it now, out loud. Don’t stop early. We don’t correct you here.' },
  { k: 'julga', est: 'f', min: 6, img: 'elevador', rot: 'II · Three Answers', t: 'Three real answers. All correct English. All wrong.', p: 'Read it out loud. Say the problem. Then tap it.' },
  { k: 'cola', est: 'o', min: 7, img: 'elevador', rot: 'III · The Glue', t: 'Five words that glue. Your answer will use all five.', p: 'Say the example. Then your own sentence with that word.' },
  { k: 'emenda', est: 'f', min: 6, img: 'elevador', rot: 'IV · The Seam', t: 'Same two halves. The word changes the meaning.', p: 'Read the whole sentence out loud with a word. Then tap it.' },
  { k: 'blocos', est: 'o', min: 7, img: 'elevador', rot: 'V · Three Blocks', t: 'Now, before, next. Two or three sentences each.', p: 'Say each line out loud. Your teacher taps it when you glue it with a connector.' },
  { k: 'tesoura', est: 'f', min: 6, img: 'elevador', rot: 'VI · The Scissors', t: 'Cut it down. It still has to work.', p: 'Tap the words that carry nothing. Then read what’s left.' },
  { k: 'subida', est: 'o', min: 7, extra: 1, img: 'elevador', rot: 'VII · The Elevator, Three Times', t: 'Your whole answer. Three rides: 90, 60, 45 seconds.', p: 'Press START and talk. Every connector your teacher hears takes the elevator up one floor.' },
  { k: 'recruta', est: 'o', min: 7, extra: 1, img: 'elevador', rot: 'VIII · The Recruiter', t: 'Floor 12. Your teacher is the recruiter.', p: 'Answer each question with at least one connector.' },
  { k: 'espelho', est: 'o', min: 7, extra: 1, img: 'elevador', rot: 'IX · Say It Back', t: 'Your teacher repeats your answer, wrong.', p: 'Correct it out loud, in a whole sentence, with a connector.' },
  { k: 'fim', est: 'w', min: 6, img: 'elevador', rot: 'X · Doors Open', t: 'Your sixty seconds, on paper.', p: 'Write your answer: now, before, next, with the five glue words. It goes to your My notes.' }
];

var ABRE = [
  { k: 'TELL ME', q: 'So… tell me about yourself.', fup: 'Your teacher keeps this answer for the end.', st: ['I …', 'I work …', 'I live …'], ex: 'I’m Ana. I work in a bank. I like music.' },
  { k: 'LAST TIME', q: 'When did somebody last ask you that? What did you say?', fup: 'Was it a good answer?', st: ['In …, at …', 'I said …'], ex: 'At a job interview, last year. I talked too much!' }
];
var FORMAS = [{ k: 'con', t: 'AND / BUT / SO / BECAUSE' }, { k: 'seq', t: 'AFTER THAT / THEN' }, { k: 'solto', t: 'SHORT LOOSE SENTENCES', erro: 1 }, { k: 'andthen', t: 'AND THEN, AND THEN…', erro: 1 }];

var JULGA = [
  { who: 'ANSWER 1', txt: 'I was born in 1994 in a small town. My father was a driver and my mother worked in a school. I have two brothers. When I was seven we moved…', op: [['Too long. It starts too early.', 'ok'], ['Too short.', 'a'], ['Too formal.', 'b']], why: 'Nobody asked about 1994. A good answer starts today.' },
  { who: 'ANSWER 2', txt: 'My name is Bruno. I am an accountant. Thank you.', op: [['Too short. Nothing to ask about.', 'ok'], ['Too long.', 'a'], ['Wrong tense.', 'b']], why: 'Correct, and a dead end.' },
  { who: 'ANSWER 3', txt: 'I work in logistics. I live with my family. I like soccer. I have a cat. I study English.', op: [['No glue. Five loose sentences.', 'ok'], ['Too personal.', 'a'], ['Bad grammar.', 'b']], why: 'Five facts and no connectors. It sounds like a list.' }
];

var COLA = [
  { w: 'and', m: 'one more thing', s: 'I work in sales and I study at night.', ask: 'Two true things about your week, with and.' },
  { w: 'but', m: 'the surprise', s: 'I’m an engineer, but I work with people.', ask: 'Finish it: I am …, but …' },
  { w: 'so', m: 'the result', s: 'I liked numbers, so I studied economics.', ask: 'Why did you start your job? Use so.' },
  { w: 'because', m: 'the reason', s: 'I moved because my company opened an office here.', ask: 'One thing you do, and why, with because.' },
  { w: 'after that', m: 'the next step', s: 'I finished school. After that, I moved to the city.', ask: 'Two steps of your life, with after that.' }
];
var CONS = ['and', 'but', 'so', 'because', 'after that'];

var EMENDA = [
  { a: 'I studied law,', b: 'I never worked as a lawyer.', k: 'but', why: 'The second half surprises you: but.' },
  { a: 'I liked the team,', b: 'I stayed for six years.', k: 'so', why: 'The first caused the second: so.' },
  { a: 'I left that job', b: 'I wanted something closer to home.', k: 'because', why: 'The reason comes after: because.' },
  { a: 'I finished the course.', b: 'I applied for this job.', k: 'after that', why: 'Two steps in time: after that.' },
  { a: 'I work in sales', b: 'I study design at night.', k: 'and', why: 'Side by side: and.' },
  { a: 'I speak Spanish,', b: 'I have never been to Spain.', k: 'but', why: 'The twist: but.' }
];

var BLOCOS = [
  { k: 'NOW', linhas: [['Your job, in one line', 'I work in … / I am a …'], ['One detail nobody expects', '…, but …'], ['What you like about it', 'I like it because …']] },
  { k: 'BEFORE', linhas: [['What you did before', 'I studied … / I worked …'], ['What changed', 'After that, …'], ['Why you moved on', '… because …']] },
  { k: 'NEXT', linhas: [['Something you want this year', 'I want to …'], ['What you already do about it', '…, so I’m …']] }
];

var TESOURA = [
  { pal: ['I', 'work', 'in', 'the', 'area', 'of', 'marketing.'], corta: [3, 4, 5], diz: 'I work in marketing.', why: 'the area of carried nothing.' },
  { pal: ['Basically,', 'I', 'have', 'worked', 'there', 'for', 'about', 'five', 'years,', 'more', 'or', 'less.'], corta: [0, 6, 9, 10, 11], diz: 'I have worked there for five years.', why: 'basically, about, more or less make you sound unsure.' },
  { pal: ['Honestly,', 'I', 'just', 'really', 'like', 'the', 'people', 'in', 'my', 'job.'], corta: [0, 2], diz: 'I really like the people in my job.', why: 'Shorter and stronger at the same time.' }
];

var RODADAS = [90, 60, 45];
var RECRUTA = ['So… tell me about yourself.', 'How did you get into that?', 'What is the hardest part of your job?', 'What do you do outside work?', 'Where do you want to be in a year?', 'Why should we choose you?'];
var PARTES = [['con', 'A CONNECTOR'], ['dois', 'TWO CONNECTORS'], ['ordem', 'SO / BECAUSE IN ORDER']];
var ESPELHO = [
  { wrong: 'So you work in marketing and you hate it.', fix: 'No, I like it, because the team is great.' },
  { wrong: 'So you studied law and you are a lawyer now.', fix: 'No. I studied law, but I never worked as a lawyer.' },
  { wrong: 'So you want to leave your job this year.', fix: 'No, I want to lead a team, so I’m taking a course.' },
  { wrong: 'So you moved here because of your family.', fix: 'No, I moved because my company opened an office here.' },
  { wrong: 'So after school you started this job.', fix: 'No. I worked in a shop. After that, I started this job.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, jg: {}, em: { n: 0, esc: '' }, bl: {}, ts: { n: 0, cut: {}, err: -1 }, sb: { r: 0, t: 90, rodando: 0, andar: 0, feitas: {} }, rc: { n: 0, partes: {} }, esp: { n: 0 } };

var TIMER = null;
function paraTimer() { if (TIMER) { clearInterval(TIMER); TIMER = null; } }
function painel(andar, cls, aberta) {
  var a = Math.max(0, Math.min(12, andar));
  return '<div class="painel' + (cls ? ' ' + cls : '') + '"><div class="visor-e"><i class="seta">▲</i><b>' + (a < 10 ? '0' + a : a) + '</b></div><div class="portas' + (aberta ? ' abertas' : '') + '"><span></span><span></span>' + (aberta ? '<em>FLOOR 12 · THE INTERVIEW ROOM</em>' : '') + '</div>'
    + '<div class="botoes-e">' + [12, 10, 8, 6, 4, 2].map(function (n) { return '<i class="' + (n <= a ? 'on' : '') + '">' + n + '</i>'; }).join('') + '</div></div>';
}

var R = {};
R.capa = function () {
  paraTimer();
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · FLOOR 12 · THE INTERVIEW ROOM</span><h1>Sixty <b>Seconds</b></h1>'
    + '<p class="sub">“Tell me about yourself.” Every connector takes you up one floor: <b>and · but · so · because · after that</b>.</p>'
    + '<div class="chipsx"><span class="pilula">now · before · next</span><span class="pilula">so × because</span><span class="pilula">90 · 60 · 45</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Call the elevator</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + painel(4, 'grande') + '</div></div>';
};

R.abre = function (c) {
  paraTimer();
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.julga = function (c) {
  return cab(c) + '<div class="julga">' + JULGA.map(function (x, i) {
    var esc = S.jg[i], ok = esc === 'ok';
    return '<div class="resposta-j vd' + (ok ? ' feito' : '') + '"><small>' + x.who + '</small><p>“' + x.txt + '”</p><div class="versoes">' + ordem(x.op, i + 1).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="jg" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (ok ? '<p class="aprova">' + x.why + '</p>' : esc ? '<p class="recusa">The English is fine. What’s the real problem?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.cola = function (c) {
  return cab(c) + '<div class="cola">' + COLA.map(function (x, i) { return '<div class="cola-c vd"><b>' + x.w + '</b><small>' + x.m + '</small><p>“' + x.s + '”</p><em>' + x.ask + '</em></div>'; }).join('') + '</div>';
};

R.emenda = function (c) {
  var e = S.em, n = e.n, fim = n >= EMENDA.length;
  if (fim) return cab(c) + trilha(EMENDA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SEAMS</small><h2>The word changed the meaning every time.</h2></div></div>';
  var x = EMENDA[n], ok = e.esc === x.k;
  return cab(c) + trilha(EMENDA, n) + '<div class="foco"><div class="emenda vd"><span>' + x.a + '</span><span class="gap">' + (ok ? x.k : '___') + '</span><span>' + x.b + '</span></div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.why + '</p><div style="text-align:center"><button type="button" class="btn" data-a="em-prox">Next</button></div>'
      : '<div class="tres-b centro">' + CONS.map(function (k) { return '<button type="button" class="pilula grande-p' + (e.esc === k ? ' errado' : '') + '" data-a="em" data-v="' + k + '">' + k + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">Read the second half again. Does it surprise, follow, explain, or just add?</p>' : '')) + '</div>';
};

R.blocos = function (c) {
  var n = Object.keys(S.bl).length;
  return cab(c) + '<div class="blocos">' + BLOCOS.map(function (b, i) {
    return '<div class="bloco vd b' + i + '"><small>' + b.k + '</small>' + b.linhas.map(function (l, j) { var k = i + '-' + j, on = S.bl[k]; return '<button type="button" class="linha-b' + (on ? ' on' : '') + '" data-a="bl" data-c="' + k + '"><b>' + l[0] + '</b><em>' + l[1] + '</em></button>'; }).join('') + '</div>';
  }).join('') + '</div><p class="dica-aluno" style="text-align:center">' + n + ' of 8 lines glued. That’s your answer. Now it has to fit in the elevator.</p>';
};

R.tesoura = function (c) {
  var e = S.ts, n = e.n, fim = n >= TESOURA.length;
  if (fim) return cab(c) + trilha(TESOURA, n) + '<div class="foco"><div class="pergunta vd"><small>THREE CUTS</small><h2>Every sentence got shorter, and better.</h2></div></div>';
  var x = TESOURA[n], cortou = Object.keys(e.cut).length, pronto = cortou === x.corta.length;
  return cab(c) + trilha(TESOURA, n) + '<div class="foco"><div class="frase-t vd">' + x.pal.map(function (p, i) { return '<button type="button" class="pal' + (e.cut[i] ? ' cortada' : '') + (e.err === i ? ' errado' : '') + '" data-a="ts" data-n="' + i + '"' + (pronto ? ' disabled' : '') + '>' + p + '</button>'; }).join('') + '</div>'
    + (pronto ? '<div class="balao vd"><small>WHAT’S LEFT</small><p>' + x.diz + '</p></div><p class="aprova" style="text-align:center">' + x.why + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ts-prox">Next</button></div>'
      : (e.err >= 0 ? '<p class="recusa" style="text-align:center">That word is holding the sentence up. Try another.</p>' : '<p class="dica-aluno" style="text-align:center">' + (x.corta.length - cortou) + ' words to cut.</p>')) + '</div>';
};

R.subida = function (c) {
  var e = S.sb, seg = RODADAS[e.r], acabou = e.t <= 0, topo = e.andar >= 8;
  if (e.rodando && !TIMER) TIMER = setInterval(function () { if (L[S.i].k !== 'subida' || !S.sb.rodando) { paraTimer(); return; } S.sb.t--; if (S.sb.t <= 0) { S.sb.t = 0; S.sb.rodando = 0; S.sb.feitas[S.sb.r] = S.sb.andar; paraTimer(); } pinta(); }, 1000);
  if (!e.rodando) paraTimer();
  return cab(c) + '<div class="mesa-e">' + painel(4 + e.andar, '', topo) + '<div class="lado-l"><div class="rodadas">' + RODADAS.map(function (s, i) { return '<button type="button" class="chip' + (e.r === i ? ' on' : '') + (e.feitas[i] !== undefined ? ' feito' : '') + '" data-a="sb-r" data-n="' + i + '">RIDE ' + (i + 1) + ' · ' + s + 's' + (e.feitas[i] !== undefined ? ' · ' + e.feitas[i] + ' floors' : '') + '</button>'; }).join('') + '</div>'
    + '<div class="relogio-e' + (e.t <= 10 && e.rodando ? ' fim' : '') + '"><b>' + Math.floor(e.t / 60) + ':' + ('0' + e.t % 60).slice(-2) + '</b><small>' + (acabou ? 'TIME' : e.rodando ? 'TALKING' : 'READY') + '</small></div>'
    + '<div class="tres-b"><button type="button" class="btn cheio" data-a="sb-go">' + (e.rodando ? 'PAUSE' : acabou ? 'AGAIN' : 'START') + '</button><button type="button" class="btn so-prof" data-a="sb-up"' + (topo ? ' disabled' : '') + '>+ CONNECTOR · UP ONE FLOOR</button></div>'
    + '<p class="dica-aluno">' + (topo ? 'Floor 12. The doors open.' : 'Now · before · next. Glue it: and · but · so · because · after that.') + '</p>'
    + (e.r === 2 && acabou ? '<p class="aprova">Three rides, less time each. The last one is always the best.</p>' : '') + '</div></div>';
};

R.recruta = function (c) {
  paraTimer();
  var e = S.rc, n = e.n, fim = n >= RECRUTA.length, p = e.partes[n] || {};
  if (fim) return cab(c) + trilha(RECRUTA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX QUESTIONS</small><h2>The recruiter wants to call you back.</h2></div></div>';
  return cab(c) + trilha(RECRUTA, n) + '<div class="mesa-e">' + painel(12, 'mini', 1) + '<div class="lado-l"><div class="pergunta vd ja"><small>THE RECRUITER · QUESTION ' + (n + 1) + ' OF 6</small><h2>“' + RECRUTA[n] + '”</h2></div>'
    + fala('rc' + n, ['…, but …', '…, so …', '… because …', 'After that, …'], []) + '<h5 class="so-prof rot-ouve">WHAT YOU HEARD</h5><div class="tres-b">' + PARTES.map(function (k) { return '<button type="button" class="chip so-prof' + (p[k[0]] ? ' on' : '') + '" data-a="rc" data-v="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</div>'
    + '<p class="recusa">Not this: loose sentences · and then, and then…</p><div><button type="button" class="btn" data-a="rc-prox">Next question</button></div></div></div>';
};

R.espelho = function (c) {
  var e = S.esp, n = Math.min(e.n, ESPELHO.length - 1), x = ESPELHO[n];
  return cab(c) + trilha(ESPELHO, e.n) + '<div class="foco"><div class="errado-e vd"><small>YOUR TEACHER SAYS · WRONG</small><b>“' + x.wrong + '”</b></div><p class="dica-aluno" style="text-align:center">Correct it, in a whole sentence, with a connector.</p>' + mostra('es' + n, x.fix, 1)
    + (n < ESPELHO.length - 1 ? '<div style="text-align:center"><button type="button" class="btn" data-a="es-prox">Next</button></div>' : '<p class="aprova" style="text-align:center">Five corrections, all of them glued.</p>') + '</div>';
};

R.fim = function (c) {
  paraTimer();
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'NOW: I work in …, but …\nBEFORE: I studied … After that, …\nNEXT: I want to …, so …', 'Sixty seconds',
    ['and ', 'but ', 'so ', 'because ', 'After that, '], ['TELL ME ABOUT YOURSELF, ONE MORE TIME', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write it in three blocks, glued.' : 'Three blocks (now, before, next), glued with the five words.'])
    + '<div class="lado-fim">' + painel(12, 'mini', 1) + '<div class="grande vd"><span>now, <u>and</u> · before, <u>but</u></span><span>cause, <u>so</u>, result</span><span>result, <u>because</u>, cause</span><span>steps: <u>after that</u></span></div>'
    + mostra('fim', 'I work in logistics, and I lead a small team.<br>I studied engineering, but I love working with people. After that, I moved to this city because my company opened an office here.<br>This year I want to speak English at work, so I’m taking classes.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.jg = function (b, n, v) { S.jg[n] = v; };
TOQUES.em = function (b, n, v) { S.em.esc = v; };
TOQUES['em-prox'] = function () { S.em = { n: S.em.n + 1, esc: '' }; };
TOQUES.bl = function (b, n, v, c) { if (S.bl[c]) delete S.bl[c]; else S.bl[c] = 1; };
TOQUES.ts = function (b, n) { var x = TESOURA[S.ts.n]; if (x.corta.indexOf(n) >= 0) { S.ts.cut[n] = 1; S.ts.err = -1; } else S.ts.err = n; };
TOQUES['ts-prox'] = function () { S.ts = { n: S.ts.n + 1, cut: {}, err: -1 }; };
TOQUES['sb-r'] = function (b, n) { paraTimer(); S.sb = { r: n, t: RODADAS[n], rodando: 0, andar: 0, feitas: S.sb.feitas }; };
TOQUES['sb-go'] = function () { var e = S.sb; if (e.t <= 0) { e.t = RODADAS[e.r]; e.andar = 0; } e.rodando = !e.rodando; };
TOQUES['sb-up'] = function () { if (S.sb.andar < 8) S.sb.andar++; };
TOQUES.rc = function (b, n, v) { var p = S.rc.partes[S.rc.n] = S.rc.partes[S.rc.n] || {}; p[v] = !p[v]; };
TOQUES['rc-prox'] = function () { S.rc.n++; };
TOQUES['es-prox'] = function () { S.esp.n++; };
