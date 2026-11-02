/* ============================================================
   AND YOU? · KEEP THE BALL IN PLAY · LIVE CLASS         05/10/2026
   Main series A1 · devolver a pergunta: And you? / What about you? ·
   o eco que copia o verbo (Do you? Are you? Have you? Can you? Did you?)
   · a voz que sobe.
   O MUNDO: uma mesa de pingue-pongue. Cada resposta tem de devolver a
   bola; se não volta, a bola cai e o rali recomeça. A bola cruza a
   mesa a cada devolução (animação só na tela, o estado é o mesmo dos
   dois lados). Quase só fala.
   Motor comum: kit/motor.js.
   Mantido da aula antiga: os catorze áudios (as respostas que morrem e
   as que voltam, os oito estranhos), as fotos e as conversas.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'pingpong' },
  { k: 'silencio', est: 'o', min: 7, img: 'fria', rot: 'I · Four Seconds', t: 'Three questions. Answer, and then do nothing.', p: 'Answer out loud. Then watch the ball.' },
  { k: 'buracos', est: 'f', min: 6, img: 'mesa', rot: 'II · Four Holes', t: 'Four short conversations. The English is right, and all four died.', p: 'Read both lines out loud. Then pick what sends the ball back.' },
  { k: 'regra', est: 'f', min: 6, img: 'mesa', rot: 'III · Two Ways to Send It Back', t: 'A question, or a sentence? That decides the return.', p: 'Read the cards out loud. Then fix the four traps.' },
  { k: 'eco', est: 'o', min: 7, img: 'mesa', rot: 'IV · The Echo', t: 'The best return: their verb, back as a question.', p: 'Pick the echo. Then pick how the voice goes. Then say it.' },
  { k: 'voltou', est: 'l', min: 7, img: 'fila', rot: 'V · Is It Back?', t: 'Six recordings. The same answer twice: once dead, once alive.', p: 'Listen to the end. Is there a question back?' },
  { k: 'rally', est: 'o', min: 7, img: 'sala', rot: 'VI · Rally with Strangers', t: 'Eight strangers start a conversation. Keep the ball in play.', p: 'Play the stranger. Answer, and send it back. Every return is one more hit.' },
  { k: 'fila', est: 'o', min: 7, extra: 1, img: 'fila', rot: 'VII · The Café Queue', t: 'A long queue, four topics, you and your teacher.', p: 'Your teacher opens a topic. Keep it going for four hits.' },
  { k: 'fim', est: 'w', min: 6, img: 'mesa', rot: 'VIII · Your Small Talk', t: 'Write a small talk where the ball never falls.', p: 'Six lines, you and a stranger. Every answer sends the ball back. The red line watches the returns. It goes to your My notes.' }
];

/* I · quatro segundos */
var SILENCIO = [
  { q: 'Where are you from?', morto: 'The ball is on the floor. The conversation stops.', ex: 'I’m from Curitiba. And you?' },
  { q: 'Do you live near here?', morto: 'Again, the ball is on the floor.', ex: 'Yes, ten minutes away. Do you?' },
  { q: 'What do you do?', morto: 'Three times. Always right after your answer.', ex: 'I’m a designer. What about you?' }
];

/* II · os buracos: a primeira opção é a certa */
var BURACOS = [
  { a: 'Where are you from?', b: 'I’m from Lima.', o: ['And you?', 'Are you?', 'Can you?'], w: 'They asked you: answer, then send it back: And you? or What about you?' },
  { a: 'Do you live near here?', b: 'Yes, two streets away.', o: ['Do you?', 'Are you?', 'Can you?'], w: 'The echo copies the verb of the question: DO you?' },
  { a: 'I work at the hospital.', b: 'Oh, nice.', o: ['What about you?', 'Can you?', 'Am you?'], w: 'Send it back: What about you? (Can you? has the wrong verb.)' },
  { a: 'I’ve got two kids.', b: 'That’s a lot!', o: ['Have you?', 'Are you?', 'Got you?'], w: 'I’ve got → HAVE you? The echo keeps have.' }
];

/* IV · o eco */
var ECOS = [
  { f: 'I’m from Rio.', ok: 'Are you?', o: ['Are you?', 'Do you?', 'Am you?'], n: 'am becomes ARE: now you ask about the other person.' },
  { f: 'I work at night.', ok: 'Do you?', o: ['Do you?', 'Work you?', 'Are you?'], n: 'A normal present verb takes DO.' },
  { f: 'I’m a nurse.', ok: 'Are you?', o: ['Are you?', 'Do you?', 'Am you?'], n: 'am becomes ARE: now you ask about the other person.' },
  { f: 'I like pizza.', ok: 'Do you?', o: ['Do you?', 'Like you?', 'Are you?'], n: 'A normal present verb takes DO.' },
  { f: 'I’m tired today.', ok: 'Are you?', o: ['Are you?', 'Do you?', 'Tired you?'], n: 'am becomes ARE.' },
  { f: 'I live near here.', ok: 'Do you?', o: ['Do you?', 'Live you?', 'Are you?'], n: 'A normal present verb takes DO.' }
];

/* V · voltou? */
var VOLTOU = [
  { au: 'a1.mp3', perg: 'Where are you from?', t: 'I’m from Recife.', volta: 0 },
  { au: 'a2.mp3', perg: 'Where are you from?', t: 'I’m from Recife. And you?', volta: 1 },
  { au: 'a3.mp3', perg: 'Do you live near here?', t: 'Yeah, two streets away.', volta: 0 },
  { au: 'a4.mp3', perg: 'Do you live near here?', t: 'Yeah, two streets away. Do you?', volta: 1 },
  { au: 'a5.mp3', perg: 'I work at the hospital.', t: 'Oh, nice.', volta: 0 },
  { au: 'a6.mp3', perg: 'I work at the hospital.', t: 'Oh, nice. What about you?', volta: 1 }
];

/* VI · os estranhos */
var ESTRANHOS = [
  { au: 's1.mp3', k: 'THE WAITING ROOM', t: 'Terrible weather today, isn’t it?', ex: 'Yes, it is! I hate the rain. Do you?' },
  { au: 's2.mp3', k: 'THE BUS STOP', t: 'Have you been waiting long?', ex: 'No, only ten minutes. And you?' },
  { au: 's3.mp3', k: 'THE NEW CAFÉ', t: 'Is this your first time here?', ex: 'Yes, it is. What about you?' },
  { au: 's4.mp3', k: 'THE MARKET', t: 'That’s a nice bag. Where’s it from?', ex: 'Thanks! It’s from a market in Recife. Do you like markets?' },
  { au: 's5.mp3', k: 'THE PARK', t: 'Are you from around here?', ex: 'No, I’m from Rio. And you?' },
  { au: 's6.mp3', k: 'THE BANK QUEUE', t: 'Long queue this morning.', ex: 'Yes, very long! Do you come here every week?' },
  { au: 's7.mp3', k: 'THE GYM', t: 'Is it always this busy?', ex: 'I don’t know, it’s my first week. Do you come here a lot?' },
  { au: 's8.mp3', k: 'THE OFFICE KITCHEN', t: 'I hate Mondays. You?', ex: 'Me too! What about Fridays? Do you like Fridays?' }
];
var DEVOLVE = ['And you?', 'What about you?', 'Do you?', 'Are you?', 'Have you?', 'Can you?', 'Did you?'];

/* VII · a fila do café */
var TEMAS = [
  { k: 'THE WEATHER', abre: 'Cold today, isn’t it?', ex: 'Yes, it is! I love cold days. Do you?' },
  { k: 'WORK OR STUDY', abre: 'Are you a student?', ex: 'No, I’m not. I work at a bank. What about you?' },
  { k: 'THE WEEKEND', abre: 'I love the beach on Saturdays.', ex: 'Do you? Me too! Which beach?' },
  { k: 'FOOD', abre: 'I always get the chocolate cake here.', ex: 'Do you? I always get the cheese bread. And you, do you like coffee?' }
];

/* ---------- o corretor (nível 1: a regra desta aula) ---------- */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(am you)\b/g, m, 1, 'The echo of “I am” is ARE you?'));
  out = out.concat(A(/(?:^\s*|[.!?]\s*|\b(?:oh|really|wow|yes|no),?\s+)\b((?:work|live|like|love|go|play|speak|study|eat|drink|want|need|know|cook|swim|drive|lived|worked|went|liked|got|going) you)\s*\?/g, m, 1, 'Echo with a helper: Are you? Do you?'));
  out = out.concat(A(/\b(and you|what about you|how about you)\s*(?:[.!]|$)/g, m, 1, 'Send it back as a question: And you?'));
  out = out.concat(A(/\b(you also\?|you too\?)/g, m, 1, 'Send it back: And you? / What about you?'));
  return out;
};

/* ---------- o estado (o mesmo dos dois lados) ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  si: { n: 0, foi: 0 }, bu: { n: 0, esc: -1 }, ec: { n: 0, esc: '', tom: '' }, vo: { n: 0, esc: -1 },
  ra: { n: 0, hits: 0, caiu: 0, melhor: 0, foi: {} }, fi: { n: 0, hits: 0, caiu: 0 } };

/* ---------- a mesa: a bola cruza quando o rali muda ---------- */
var ULT = {};
function mesa(chave, hits, caiu, rotulos) {
  var sig = hits + ':' + caiu, anim = (chave in ULT && ULT[chave] !== sig) ? (caiu ? ' cai' : ' voa') : '';
  ULT[chave] = sig;
  var lado = caiu ? ' chao' : (hits % 2 ? ' dir' : ' esq');
  return '<div class="mesa-pp' + anim + '"><div class="tampo"><span class="rede"></span><span class="meio"></span>'
    + '<i class="bola' + lado + '"></i></div><div class="placar"><span>' + (rotulos ? rotulos[0] : 'YOU') + '</span><b>' + (caiu ? 'BALL DROPPED' : 'RALLY · ' + hits) + '</b><span>' + (rotulos ? rotulos[1] : 'THEM') + '</span></div></div>';
}

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · TABLE TENNIS · A1</span><h1>And <b>You?</b></h1>'
    + '<p class="sub">You can answer any question. The game is sending the ball back.</p>'
    + '<div class="chipsx"><span class="pilula">And you? · What about you?</span><span class="pilula">Do you? · Are you? · Have you?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Serve</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('pingpong') + '" alt="A table tennis table at night, the ball in the air"></div></div>';
};
R.silencio = function (c) {
  var s = S.si, n = s.n, fim = n >= SILENCIO.length, x = SILENCIO[Math.min(n, SILENCIO.length - 1)];
  if (fim) return cab(c) + trilha(SILENCIO, n) + mesa('si', 0, 1) + '<div class="foco"><div class="pergunta vd"><small>THREE ANSWERS, THREE SILENCES</small><h2>The ball only stays in play if you send it back.</h2></div>'
    + follow('FOLLOW-UP', 'What is wrong? Say it in any words.', ['No question back.', 'I stopped.', 'No “And you?”'], [], 'sif', mostra('sif', 'I answer, and then I stop. No question back.')) + '</div>';
  return cab(c) + trilha(SILENCIO, n) + mesa('si', s.foi ? 1 : 0, s.foi ? 1 : 0, ['YOU', 'YOUR TEACHER']) + '<div class="foco"><div class="pergunta vd' + (s.foi ? ' ja' : '') + '"><small>QUESTION ' + (n + 1) + ' OF 3</small><h2>' + x.q + '</h2></div>'
    + (s.foi ? '<p class="recusa">' + x.morto + '</p>' + mostra('si' + n, x.ex + ' (the answer, and the ball goes back)', 1) + '<div style="text-align:center"><button type="button" class="btn" data-a="si-prox">Next question</button></div>'
      : '<p class="dica-aluno" style="text-align:center">Answer out loud. Then stop.</p><div style="text-align:center"><button type="button" class="btn so-prof" data-a="si-foi">Answered · now say nothing</button></div>') + '</div>';
};
R.buracos = function (c) {
  var b = S.bu, n = b.n, fim = n >= BURACOS.length, x = BURACOS[Math.min(n, BURACOS.length - 1)];
  if (fim) return cab(c) + trilha(BURACOS, n) + mesa('bu', 4, 0) + '<div class="foco"><div class="pergunta vd"><small>FOUR CONVERSATIONS SAVED</small><h2>Two words each, and the ball came back every time.</h2></div></div>';
  var certo = b.esc === 0, ops = ordem(x.o.map(function (t, i) { return [t, i]; }), n + 1);
  return cab(c) + trilha(BURACOS, n) + mesa('bu', n * 2 + (certo ? 2 : 1), b.esc > 0 ? 1 : 0) + '<div class="foco"><div class="conversa vd"><div class="bolha a">' + x.a + '</div><div class="bolha b">' + x.b + ' <span class="gap' + (certo ? ' cheio' : '') + '">' + (certo ? x.o[0] : '___') + '</span></div></div>'
    + (certo ? '<p class="aprova">GOT IT. ' + x.w + ' Read both lines out loud.</p><div style="text-align:center"><button type="button" class="btn" data-a="bu-prox">Next conversation</button></div>'
      : '<div class="versoes linha3">' + ops.map(function (o) { return '<button type="button" class="versao' + (b.esc === o[1] ? ' errado' : '') + '" data-a="bu" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
        + (b.esc > 0 ? '<p class="recusa">The ball is down. Look at the first line: a question, or a sentence? Which verb?</p>' + mostra('bu' + n, x.b + ' ' + x.o[0] + ' ' + x.w) : '')) + '</div>';
};
R.regra = function (c) {
  var cartoes = '<div class="cartoes">'
    + '<div class="cr vd"><small>1 · THEY ASKED YOU</small><h3>answer + <em>And you?</em> / <em>What about you?</em></h3><div class="ex"><span>I’m from Lima. <u>And you?</u></span></div></div>'
    + '<div class="cr vd"><small>2 · A SENTENCE</small><h3>the echo: <em>copy their verb</em></h3><div class="ex"><span>I’m tired. → <u>Are you?</u></span><span>I work at night. → <u>Do you?</u></span></div></div>'
    + '<div class="cr vd"><small>3 · THE HELPER</small><h3><em>am → are</em> · <em>work → do</em> · <em>can → can</em></h3><div class="ex"><span>I can swim. → <u>Can you?</u></span><span>I’ve got a dog. → <u>Have you?</u></span></div></div>'
    + '<div class="cr vd"><small>4 · THE VOICE</small><h3>the echo goes <em>up</em> ↗</h3><div class="ex"><span>Are you? ↗ = tell me more!</span></div></div></div>';
  return cab(c) + cartoes + armas([
    ['AM YOU', 'I’m from Rio. — Am you?', 'I’m from Rio. — Are you?', 'Now it’s about the other person: ARE you?'],
    ['THE WRONG VERB', 'I work at night. — Are you?', 'I work at night. — Do you?', 'A normal verb takes DO.'],
    ['THE NAME', 'I’m Ana. — Are you?', 'I’m Ana. — Nice to meet you, Ana. I’m …', 'A name: say yours back.'],
    ['NO RETURN', 'Where are you from? — I’m from Recife.', 'I’m from Recife. And you?', 'An answer alone drops the ball.']], 'THE FOUR TRAPS · TAP TO FIX');
};
R.eco = function (c) {
  var e = S.ec, n = e.n, fim = n >= ECOS.length, x = ECOS[Math.min(n, ECOS.length - 1)];
  if (fim) return cab(c) + trilha(ECOS, n) + mesa('ec', 6, 0) + '<div class="foco"><div class="pergunta vd"><small>SIX ECHOES</small><h2>The echo means: tell me more. And the voice goes up.</h2></div></div>';
  var okV = e.esc === x.ok, okT = e.tom === 'sobe', tudo = okV && okT, ops = ordem(x.o, n + 2);
  return cab(c) + trilha(ECOS, n) + mesa('ec', n + (tudo ? 1 : 0), 0) + '<div class="foco"><div class="conversa vd"><div class="bolha a">' + x.f + '</div><div class="bolha b">' + (okV ? x.ok : '___') + (okT ? ' <span class="seta-tom">↗</span>' : '') + '</div></div>'
    + (tudo ? '<p class="aprova">GOT IT. ' + x.n + ' Now say it with the voice going up: “' + x.ok + '” ↗ Then ask one more thing.</p><div style="text-align:center"><button type="button" class="btn" data-a="ec-prox">Next echo</button></div>'
      : !okV ? '<div class="diz"><h5>1 · THE ECHO</h5></div><div class="versoes linha3">' + ops.map(function (o) { return '<button type="button" class="versao' + (e.esc === o ? ' errado' : '') + '" data-a="ec" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>'
        + (e.esc ? '<p class="recusa">Find the verb in their sentence. Then copy it, or its helper.</p>' + mostra('ec' + n, x.f + ' → ' + x.ok + ' ' + x.n) : '')
      : '<div class="diz"><h5>2 · THE VOICE</h5></div><div class="tons"><button type="button" class="tom' + (e.tom === 'desce' ? ' errado' : '') + '" data-a="tom" data-v="desce"><b>↘</b><span>' + x.ok + '</span><small>flat, going down: “OK, whatever.”</small></button><button type="button" class="tom" data-a="tom" data-v="sobe"><b>↗</b><span>' + x.ok + '</span><small>going up: “Really? Tell me more!”</small></button></div>'
        + (e.tom === 'desce' ? '<p class="recusa">Going down sounds like the end. The echo opens the door: the voice goes up.</p>' : '')) + '</div>';
};
R.voltou = function (c) {
  var v = S.vo, n = v.n, fim = n >= VOLTOU.length, x = VOLTOU[Math.min(n, VOLTOU.length - 1)];
  if (fim) return cab(c) + trilha(VOLTOU, n) + mesa('vo', 3, 0) + '<div class="foco"><div class="pergunta vd"><small>SIX RECORDINGS</small><h2>Same voice, same answer. Two words decide if the ball comes back.</h2></div></div>';
  var certo = v.esc === x.volta;
  return cab(c) + trilha(VOLTOU, n) + mesa('vo', certo && x.volta ? 1 : 0, certo && !x.volta ? 1 : 0) + '<div class="foco"><div class="conversa vd"><div class="bolha a">' + x.perg + '</div><div class="bolha b toca">' + tocar(x.au) + '<span>' + (certo ? x.t : 'Play the answer.') + '</span></div></div>'
    + (certo ? '<p class="aprova">GOT IT. ' + (x.volta ? 'The last words send it back.' : 'No question at the end: the ball is down. Now say it alive: “' + x.t + ' And you?”') + '</p><div style="text-align:center"><button type="button" class="btn" data-a="vo-prox">Next recording</button></div>'
      : '<div class="veredito">' + [[1, 'IT’S BACK'], [0, 'THE BALL IS DOWN']].map(function (o) { return '<button type="button" class="btn' + (v.esc === o[0] ? ' errado' : '') + '" data-a="vo" data-n="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
        + (v.esc >= 0 ? '<p class="recusa">Listen to the last two words again.</p>' + mostra('vo' + n, '“' + x.t + '” → ' + (x.volta ? 'it came back.' : 'the ball is down.')) : '<p class="dica-aluno" style="text-align:center">Play it to the very end.</p>')) + '</div>';
};
R.rally = function (c) {
  var r = S.ra, n = r.n, fim = n >= ESTRANHOS.length, x = ESTRANHOS[Math.min(n, ESTRANHOS.length - 1)];
  if (fim) return cab(c) + trilha(ESTRANHOS, n) + mesa('ra', r.hits, 0, ['YOU', 'THE STRANGERS']) + '<div class="foco"><div class="pergunta vd"><small>EIGHT STRANGERS</small><h2>Longest rally today: ' + r.melhor + ' hits. Every hit is an answer plus a return.</h2></div></div>';
  var foi = r.foi[n];
  return cab(c) + trilha(ESTRANHOS, n) + '<div class="mesa-rally">' + mesa('ra', r.hits, r.caiu, ['YOU', x.k]) + '<div class="lado-rally"><div class="toca-linha vd">' + tocar(x.au) + '<span><small>' + x.k + '</small>' + (foi || r.caiu ? '“' + x.t + '”' : 'Play the stranger.') + '</span></div>'
    + '<div class="diz"><h5>SEND IT BACK WITH</h5><div class="chips">' + DEVOLVE.map(function (d) { return '<span class="chip palavra">' + d + '</span>'; }).join('') + '</div></div>'
    + (foi ? '<p class="aprova">HIT! The ball is back on their side.</p>' + mostra('ra' + n, x.ex, 1) + '<div><button type="button" class="btn" data-a="ra-prox">Next stranger</button></div>'
      : (r.caiu ? '<p class="recusa">The ball is down: an answer with no return. Play it again, and send it back.</p>' + mostra('rax' + n, x.ex, 1) : '<p class="dica-aluno">Answer out loud, and send the ball back.</p>')
        + '<div class="prof-botoes so-prof"><button type="button" class="btn cheio" data-a="ra-hit">Answered + sent it back · hit</button><button type="button" class="btn" data-a="ra-cai">No return · ball dropped</button></div>')
    + '</div></div>';
};
R.fila = function (c) {
  var f = S.fi, n = f.n, fim = n >= TEMAS.length, x = TEMAS[Math.min(n, TEMAS.length - 1)];
  if (fim) return cab(c) + trilha(TEMAS, n) + mesa('fi', 16, 0, ['YOU', 'YOUR TEACHER']) + '<div class="foco"><div class="pergunta vd"><small>FOUR TOPICS</small><h2>Sixteen hits. That’s a real conversation.</h2></div></div>';
  var feito = f.hits >= 4;
  return cab(c) + trilha(TEMAS, n) + '<div class="mesa-rally">' + mesa('fi', f.hits, f.caiu, ['YOU', 'YOUR TEACHER']) + '<div class="lado-rally"><div class="pergunta vd ja"><small>TOPIC ' + (n + 1) + ' · ' + x.k + '</small><h2>“' + x.abre + '”</h2></div>'
    + '<div class="contas">' + [0, 1, 2, 3].map(function (k) { return '<span class="' + (k < f.hits ? 'on' : '') + '"></span>'; }).join('') + '<small>' + Math.min(f.hits, 4) + ' of 4 hits</small></div>'
    + mostra('fi' + n, x.ex, 1)
    + (feito ? '<p class="aprova">Four hits. Topic closed.</p><div><button type="button" class="btn" data-a="fi-prox">Next topic</button></div>'
      : '<p class="dica-aluno">Answer, and send the ball back. Your teacher answers, and asks again.</p><div class="prof-botoes so-prof"><button type="button" class="btn cheio" data-a="fi-hit">+1 hit</button><button type="button" class="btn" data-a="fi-cai">Ball dropped</button></div>')
    + '</div></div>';
};
R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'A: Long queue today, isn’t it?\nB: Yes, it is! Do you come here a lot?\nA: Every morning. What about you?', 'Your small talk',
    ['And you? ', 'What about you? ', 'Do you? ', 'Are you? ', 'Have you? ', 'Did you? '], ['YOUR SMALL TALK', 'Six lines, you and a stranger. The ball never falls: every answer sends it back.'])
    + '<div class="lado-fim"><div class="grande vd"><span><b>And you?</b> · a question</span><span><b>Do you?</b> · a sentence</span><span><b>Are you?</b> ↗ · tell me more</span><small>A question? Answer and send it back. A sentence? Echo their verb (am → are, work → do), and the voice goes up.</small></div>'
    + mostra('fim', 'A: Long queue today, isn’t it?<br>B: Yes, it is! Do you come here a lot?<br>A: Every morning. What about you?<br>B: It’s my first time. I’m new in the city.<br>A: Are you? Where are you from?<br>B: I’m from Recife. And you?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- os toques desta aula ---------- */
TOQUES['si-foi'] = function () { S.si.foi = 1; };
TOQUES['si-prox'] = function () { S.si = { n: S.si.n + 1, foi: 0 }; };
TOQUES.bu = function (b, n) { if (S.bu.esc === 0) return false; S.bu.esc = n; };
TOQUES['bu-prox'] = function () { S.bu = { n: S.bu.n + 1, esc: -1 }; };
TOQUES.ec = function (b, n, v) { var x = ECOS[S.ec.n]; if (!x || S.ec.esc === x.ok) return false; S.ec.esc = v; };
TOQUES.tom = function (b, n, v) { S.ec.tom = v; };
TOQUES['ec-prox'] = function () { S.ec = { n: S.ec.n + 1, esc: '', tom: '' }; };
TOQUES.vo = function (b, n) { var x = VOLTOU[S.vo.n]; if (!x || S.vo.esc === x.volta) return false; S.vo.esc = n; };
TOQUES['vo-prox'] = function () { S.vo = { n: S.vo.n + 1, esc: -1 }; };
TOQUES['ra-hit'] = function () { var r = S.ra; r.foi[r.n] = 1; r.hits++; r.caiu = 0; if (r.hits > r.melhor) r.melhor = r.hits; };
TOQUES['ra-cai'] = function () { S.ra.caiu = 1; S.ra.hits = 0; };
TOQUES['ra-prox'] = function () { S.ra.n++; S.ra.caiu = 0; };
TOQUES['fi-hit'] = function () { S.fi.hits++; S.fi.caiu = 0; };
TOQUES['fi-cai'] = function () { S.fi.hits = 0; S.fi.caiu = 1; };
TOQUES['fi-prox'] = function () { S.fi = { n: S.fi.n + 1, hits: 0, caiu: 0 }; };
