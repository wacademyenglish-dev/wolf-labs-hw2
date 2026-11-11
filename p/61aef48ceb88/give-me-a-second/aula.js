/* ============================================================
   GIVE ME A SECOND · THE HOURGLASS · LIVE CLASS  06/10/2026
   Main series A2 · ganhar tempo em voz alta: Hold on, let me think · That's
   a good question · How do I put it… · It's a kind of… (descrever a
   palavra que não vem) · o único erro é o silêncio
   O MUNDO (da aula velha): uma AMPULHETA em CSS que escorre em dez
   segundos de silêncio; cada movimento dito vira a ampulheta. Placar:
   movimentos × silêncios.
   ÁUDIOS (faster-whisper, 06/10): h1 e h4 NÃO dizem a frase — a voz leu a
   rubrica ("caught off guard, buying a moment", "blunt, to someone she
   knows well") e o corte antigo guardou isso. Ficaram fora; h2 e h3 estão
   certos. As outras duas frases ficam na voz do professor.
   Fila: FILA-LIVE-386.md · 051.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'ampulheta' },
  { k: 'abre', est: 'o', min: 7, img: 'cafe', rot: 'I · Where You Stop', t: 'Four questions. One of them will stop you.', p: 'Pick a card. Answer out loud, even badly. Your teacher counts the silences.' },
  { k: 'gx', est: 'f', min: 3, img: 'cafe', rot: 'II · Pocket Moves', t: 'Four moves to buy a second. Keep them in the corner.', p: 'Read one line at a time. Then keep the moves in the corner for the hard questions.' },
  { k: 'regra', est: 'f', min: 6, img: 'ampulheta', rot: 'III · Four Moves', t: 'The hole is the problem, not what you put in it.', p: 'Read each move out loud. Then open when to use it.' },
  { k: 'pratel', est: 'f', min: 6, img: 'cafe', rot: 'IV · Keep the Floor', t: 'Three moves keep the conversation. Three hand it away.', p: 'Read it out loud. After this, is the other person waiting, or talking?' },
  { k: 'amp', est: 'o', min: 7, img: 'ampulheta', rot: 'V · The Hourglass', t: 'Six hard questions. The sand runs while you’re silent.', p: 'Say a move out loud and tap it: the hourglass flips. Then answer.' },
  { k: 'ouve', est: 'l', min: 7, img: 'ampulheta', rot: 'VI · What She Does While She Thinks', t: 'Four moves, none longer than a breath.', p: 'Listen, or hear your teacher. A little time, or a lot?' },
  { k: 'desvio', est: 'o', min: 7, img: 'porta', rot: 'VII · Say It Without the Word', t: 'Six things. You don’t get to use the word.', p: 'Peek at the card (teacher, look away). Describe it until your teacher guesses.' },
  { k: 'vida', est: 'o', min: 7, extra: 1, img: 'porta', rot: 'VIII · Six About You', t: 'The moves are yours now.', p: 'Answer out loud. Then the follow-up.' },
  { k: 'cartas', est: 'o', min: 7, extra: 1, img: 'cafe', rot: 'IX · Eight Cold Questions', t: 'Eight questions, no warning.', p: 'Turn a card. Say the move out loud. Then answer.' },
  { k: 'fim', est: 'w', min: 6, img: 'porta', rot: 'X · Your Own Line', t: 'Write it the way you’d say it.', p: 'Answer a hard question in writing, with one move and one “it’s a kind of”. It goes to your My notes.' }
];

var TR = { 'h2.mp3': 'That’s a good question, actually.', 'h3.mp3': 'How do I put it…' };

var ABRE = [
  { k: 'YOUR KITCHEN', q: 'Describe your kitchen to somebody who has never seen it.', fup: 'What’s the first thing you see?', st: ['Hold on … my kitchen is …'], ex: 'Hold on, let me think. It’s small, with a window over the sink.' },
  { k: 'A BAD BUY', q: 'You bought something you didn’t need. What was it?', fup: 'Do you use it now?', st: ['Good question … it was …'], ex: 'Good question! It was a kind of machine for making ice cream.' },
  { k: 'YOUR JOB', q: 'Explain your job to a ten-year-old.', fup: 'And what’s the hardest part?', st: ['How do I put it … I …'], ex: 'How do I put it… I help people find the right house.' }
];
var FORMAS = [{ k: 'hold', t: 'HOLD ON / LET ME THINK' }, { k: 'kind', t: 'IT’S A KIND OF' }, { k: 'sil', t: 'SILENCE', erro: 1 }, { k: 'lingua', t: 'SWITCHED LANGUAGE', erro: 1 }];

var MOVES = [
  { k: 'TO MAKE THEM WAIT', f: 'Hold on. · Hang on a second. · Give me a second.', w: 'Buys two seconds. Use it when the answer is coming.' },
  { k: 'TO SOUND INTERESTED', f: 'That’s a good question. · Good question, actually.', w: 'Buys three seconds, and it’s often true.' },
  { k: 'TO SAY YOU’RE SEARCHING', f: 'How do I put it… · Let me think.', w: 'Buys the most, because it says what you’re doing.' },
  { k: 'TO GIVE UP THE WORD, NOT THE TURN', f: 'It’s a kind of… · It’s the thing you use for…', w: 'It’s a kind of small bag for coins.' }
];
var PRATEL = [
  { t: 'Hold on, let me think.', k: 'fica' }, { t: '… (you say nothing)', k: 'perde' }, { t: 'That’s a good question.', k: 'fica' },
  { t: 'Sorry, I’ll say it in my language.', k: 'perde' }, { t: 'It’s a kind of small bag.', k: 'fica' }, { t: 'How do you say that in English?', k: 'perde' }
];
var COMPRAS = [{ id: 'hold', rot: 'Hold on, let me think.' }, { id: 'boa', rot: 'That’s a good question.' }, { id: 'como', rot: 'How do I put it…' }, { id: 'kind', rot: 'It’s a kind of…' }];
var AMP = [
  { q: 'What’s the difference between a chair and a stool?', pq: 'Nobody has this answer ready. That’s why it’s here.' },
  { q: 'Why do people keep photos they never look at?', pq: 'There’s no right answer, only whether you kept talking.' },
  { q: 'Explain what a stapler is to somebody who has never seen one.', pq: 'If the word didn’t come, It’s a kind of… was the move.' },
  { q: 'What do you miss when you’re away from home?', pq: 'Easy to feel, hard to say fast. Buy the second.' },
  { q: 'Describe your best friend in three words.', pq: 'Counting takes time, and the time has to be bought.' },
  { q: 'You changed your mind about something. What was it?', pq: 'The hardest one. No silence here means the hour worked.' }
];
var TURNOS = [
  { au: '', t: 'Hold on, let me think.', k: 'pouco', pq: 'A little, and fast. Nobody interrupts you.' },
  { au: 'h2.mp3', t: 'That’s a good question, actually.', k: 'muito', pq: 'A lot. They enjoy it while you think.' },
  { au: 'h3.mp3', t: 'How do I put it…', k: 'muito', pq: 'A lot: it says you’re searching. Nobody rushes that.' },
  { au: '', t: 'Give me a second.', k: 'pouco', pq: 'A little, and it’s direct. Use it with people you know.' }
];
var COISAS = [
  { t: 'a corkscrew', d: 'You use it for one job only.' }, { t: 'a doormat', d: 'It lives outside a door, and nobody looks at it.' },
  { t: 'a strainer', d: 'It’s full of holes, and that’s why it works.' }, { t: 'a receipt', d: 'They give it to you, and you throw it away twenty seconds later.' },
  { t: 'a clothespin', d: 'Small, and it holds things together outside.' }, { t: 'a doorbell', d: 'You press it, and somebody else does the work.' }
];
var VIDA = [
  { q: 'What’s something you’re good at that’s hard to explain?', fup: 'How did you learn it?', st: ['Hold on … I’m good at …'], ex: 'Hold on… I’m good at fixing bikes. It’s a kind of puzzle.' },
  { q: 'Describe a room in your house that nobody else likes.', fup: 'What would you change first?', st: ['How do I put it … it’s …'], ex: 'How do I put it… it’s a kind of small office, full of boxes.' },
  { q: 'What’s a word in your language that English doesn’t have?', fup: 'Explain it to me, in English.', st: ['It’s a kind of …'], ex: 'Saudade. It’s a kind of sad love for something you miss.' },
  { q: 'What do you do when somebody speaks English too fast?', fup: 'Does it work?', st: ['Good question …'], ex: 'Good question. I say: sorry, can you say that again, slowly?' },
  { q: 'Your turn: ask me three hard questions.', fup: 'Now one you think I can’t answer.', st: ['Why do …?', 'What’s the difference between …?'], ex: 'Why do cats sleep so much? What’s the difference between a hill and a mountain?' }
];
var CARTAS = [
  { q: 'What’s the point of birthdays?', f: 'Hold on, let me think.' }, { q: 'Describe rain to somebody who has never felt it.', f: 'It’s a kind of…' },
  { q: 'What’s the worst advice anybody gave you?', f: 'How do I put it…' }, { q: 'Why do people take photos of food?', f: 'That’s a good question.' },
  { q: 'What’s a job you can’t imagine doing?', f: 'Well…' }, { q: 'Explain a traffic jam without the word traffic.', f: 'It’s a kind of…' },
  { q: 'What do you do with one free day?', f: 'How do I put it…' }, { q: 'What does everybody like that you don’t?', f: 'Give me a second.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, mv: {}, pr: {}, amp: { n: 0, t: 10, rodando: 0, moves: 0, sil: 0 }, ouv: {}, desvio: { sel: -1, foi: {} }, vida: { n: 0, foi: {} }, cartas: {} };

var AM_TIMER = null;
function paraTimer() { if (AM_TIMER) { clearInterval(AM_TIMER); AM_TIMER = null; } }
function ampulheta(t, grande) {
  var p = Math.max(0, t) / 10;
  return '<div class="ampulheta' + (grande ? ' grande' : '') + '"><div class="vidro-a cima"><i style="height:' + (p * 100) + '%"></i></div><div class="gargalo">' + (t > 0 && t < 10 ? '<b></b>' : '') + '</div><div class="vidro-a baixo"><i style="height:' + ((1 - p) * 100) + '%"></i></div><span class="seg">' + Math.max(0, t) + 's</span></div>';
}

var R = {};
R.capa = function () {
  paraTimer();
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE HOURGLASS</span><h1>Give Me <b>a Second</b></h1>'
    + '<p class="sub">Nobody minds a slow answer. Everybody notices an empty second.</p>'
    + '<div class="chipsx"><span class="pilula">Hold on</span><span class="pilula">Good question</span><span class="pilula">It’s a kind of…</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn the hourglass</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-a">' + ampulheta(6, 1) + '</div></div>';
};

R.abre = function (c) {
  paraTimer();
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.regra = function (c) {
  paraTimer();
  return cab(c) + '<div class="moves">' + MOVES.map(function (m, i) { return '<button type="button" class="move vd' + (S.mv[i] ? ' aberto' : '') + '" data-a="mv" data-n="' + i + '"><small>' + m.k + '</small><b>' + m.f + '</b>' + (S.mv[i] ? '<em>' + m.w + '</em>' : '<em class="toque">Said it · open</em>') + '</button>'; }).join('') + '</div>'
    + (Object.keys(S.mv).length === 4 ? '<p class="aprova" style="text-align:center">Say anything in English. Never say nothing.</p>' : '');
};

R.pratel = function (c) {
  paraTimer();
  var e = S.pr;
  return cab(c) + '<div class="pratel">' + PRATEL.map(function (x, i) {
    var esc = e[i], ok = esc === x.k;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>“' + x.t + '”</p><div class="tres-b">' + [['fica', 'Keeps the floor'], ['perde', 'Loses it']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="pr" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
      + (esc && !ok ? '<p class="recusa">After this, is the other person waiting for you, or talking?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.amp = function (c) {
  var e = S.amp, n = e.n, fim = n >= AMP.length;
  var placar = '<div class="placar"><span class="ok">MOVES <b>' + e.moves + '</b></span><span class="sil">SILENCES <b>' + e.sil + '</b></span></div>';
  if (fim) { paraTimer(); return cab(c) + trilha(AMP, n) + '<div class="mesa-a"><div class="vd capa-a">' + ampulheta(10, 1) + placar + '</div><div class="lado-l"><div class="pergunta vd"><small>DONE</small><h2>Six hard answers. Look at the score: moves against silences.</h2></div></div></div>'; }
  var x = AMP[n];
  return cab(c) + trilha(AMP, n) + '<div class="mesa-a"><div class="vd capa-a">' + ampulheta(e.t, 1) + placar + '<div class="tres-b centro so-prof"><button type="button" class="pilula" data-a="am-go">' + (e.rodando ? 'Pause the sand' : 'Start the sand') + '</button></div></div><div class="lado-l">'
    + '<div class="pergunta vd"><small>QUESTION ' + (n + 1) + ' OF 6</small><h2>' + x.q + '</h2></div><h5 class="rot-ouve">SAY A MOVE OUT LOUD, THEN TAP IT</h5><div class="compras">' + COMPRAS.map(function (m) { return '<button type="button" class="compra" data-a="am-mv">' + m.rot + '</button>'; }).join('') + '</div>'
    + (e.t <= 0 ? '<p class="recusa">The sand ran out: that was a silence. Say a move and flip it.</p>' : '<p class="dica-aluno">' + x.pq + '</p>')
    + '<div><button type="button" class="btn" data-a="am-prox">Answered · next question</button></div></div></div>';
};

R.ouve = function (c) {
  paraTimer();
  return cab(c) + '<div class="turnos">' + TURNOS.map(function (x, i) {
    var esc = S.ouv[i], ok = esc === x.k, ouviu = !x.au || (S.ouviu || {})[x.au];
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><div class="toca-linha">' + (x.au ? tocar(x.au, 1) + '<div>' + transcricao(x.au, TR[x.au]) + '</div>' : '<span class="voz-prof">🎙 Your teacher says it: <b>“' + x.t + '”</b></span>') + '</div>'
      + (ouviu ? '<div class="tres-b">' + [['pouco', 'Buys a little'], ['muito', 'Buys a lot']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ov" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' : '')
      + (ok ? '<p class="aprova">' + x.pq + '</p>' : esc ? '<p class="recusa">Again. Does it ask them to wait, or make them want to?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.desvio = function (c) {
  paraTimer();
  var e = S.desvio, x = e.sel >= 0 ? COISAS[e.sel] : null;
  return cab(c) + '<div class="mesa-a"><div class="cartas-d">' + COISAS.map(function (k, i) { return '<button type="button" class="carta-d' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feito' : '') + '" data-a="dv" data-n="' + i + '">' + (e.sel === i || e.foi[i] ? '<b>' + k.t + '</b>' : '<b>?</b>') + '<small>CARD ' + (i + 1) + '</small></button>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (x ? '<div class="pede vd"><small>DON’T SAY THE WORD</small><b>' + x.t + '</b><em>A clue: ' + x.d + '</em></div>' + fala('dv' + e.sel, ['It’s a kind of …', 'It’s the thing you use for …', 'It’s like a …'], []) + '<div><button type="button" class="btn so-prof" data-a="dv-ok">Guessed it</button></div>' : '<p class="dica-aluno">Pick a card. Your teacher looks away.</p>')
    + (Object.keys(e.foi).length === 6 ? '<p class="aprova">Six things, six detours, and not one needed the word.</p>' : '') + '</div></div>';
};

R.vida = function (c) { paraTimer(); return sequencia(c, VIDA, S.vida, 'vida', 'Five answers, and the moves came without the screen.'); };

R.cartas = function (c) {
  paraTimer();
  return cab(c) + '<div class="cartas-f">' + CARTAS.map(function (x, i) { var v = S.cartas[i]; return '<button type="button" class="carta-f vd' + (v ? ' virada' : '') + '" data-a="cf" data-n="' + i + '">' + (v ? '<small>MOVE: ' + x.f + '</small><b>' + x.q + '</b>' : '<b class="verso">' + (i + 1) + '</b>') + '</button>'; }).join('') + '</div>'
    + (Object.keys(S.cartas).length === 8 ? '<p class="aprova" style="text-align:center">Eight cold questions, and you never once said nothing.</p>' : '');
};

R.fim = function (c) {
  paraTimer();
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'That’s a good question. How do I put it… my job is a kind of …', 'Your own line',
    ['Hold on, let me think. ', 'That’s a good question. ', 'How do I put it… ', 'It’s a kind of ', 'It’s the thing you use for '], ['A HARD QUESTION', 'Explain your job to a ten-year-old. Start with a move, and use “it’s a kind of”.'])
    + '<div class="lado-fim">' + ampulheta(10) + '<div class="grande vd"><span>the only mistake: <u>silence</u></span><span><u>Hold on</u>, let me think</span><span>That’s a <u>good question</u></span><span>It’s <u>a kind of</u> …</span></div>'
    + mostra('fim', 'That’s a good question. How do I put it… I help people buy houses.<br>It’s a kind of detective job: I look for the right house for each family.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.mv = function (b, n) { S.mv[n] = 1; };
TOQUES.pr = function (b, n, v) { S.pr[n] = v; };
TOQUES['am-go'] = function () {
  var e = S.amp; e.rodando = !e.rodando; paraTimer();
  if (e.rodando) AM_TIMER = setInterval(function () {
    if (!L[S.i] || L[S.i].k !== 'amp') { paraTimer(); return; }
    if (S.amp.t > 0) { S.amp.t--; if (S.amp.t === 0) S.amp.sil++; pinta(); }
  }, 1000);
};
TOQUES['am-mv'] = function () { S.amp.t = 10; S.amp.moves++; };
TOQUES['am-prox'] = function () { S.amp.n++; S.amp.t = 10; };
TOQUES.ov = function (b, n, v) { S.ouv[n] = v; };
TOQUES.dv = function (b, n) { S.desvio.sel = n; };
TOQUES['dv-ok'] = function () { S.desvio.foi[S.desvio.sel] = 1; };
TOQUES.cf = function (b, n) { S.cartas[n] = 1; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four moves to keep in your pocket.', rotulo: 'When you need a second',
  linhas: [
    '<b>Hold on</b>, let me think.',
    '<b>That’s a good question.</b>',
    '<b>How do I put it…</b>',
    '<b>It’s a kind of…</b> · the word will not come'
  ],
  uso: { p: 'Your turn. Someone asks you a hard question: Where will you be in five years? Use one move first, then answer.', molde: ['Hold on, …', 'How do I put it …'], ex: 'That’s a good question. Hold on… I think I will be in a bigger city, with a better job.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
