/* ============================================================
   THE WORST DAY · DOMINO OF DISASTERS · LIVE CLASS  05/10/2026
   Main series A1 · past simple: didn't + verbo puro · Did…? ·
   wasn't · because / so
   O MUNDO: a pior manhã do Marcos. Cada desastre derrubou o seguinte. A
   tela é uma FILEIRA DE DOMINÓS (CSS, peças escuras com pontos claros):
   um dominó só cai com a negativa ou a pergunta certa — o passado sai do
   verbo e vai para o DID.
   ÁUDIOS (faster-whisper): v-story é o Marcos em 1ª pessoa e diz “So I
   took a taxi, and my wallet was at home” (ele pegou o táxi sem a
   carteira); o v-punch diz “And then I remembered”. Textos acertados.
   Fila: FILA-LIVE-386.md · 031.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'dominos' },
  { k: 'abre', est: 'o', min: 7, img: 'celular', rot: 'I · Your Turn First', t: 'One bad thing that happened to you this month.', p: 'Pick a card. Before you hear anybody else’s story, tell yours. Your teacher taps what you used.' },
  { k: 'ouvir', est: 'l', min: 7, img: 'celular', rot: 'II · Marcos', t: 'One man, one morning.', p: 'Listen first, twice. Then tap only what he really said: each one stands up as a domino.' },
  { k: 'cadeia', est: 'f', min: 6, img: 'dominos', rot: 'III · One Thing After Another', t: 'A bad day is never one thing.', p: 'Six dominoes, mixed up. Say each card out loud, then put them in order.' },
  { k: 'gx', est: 'f', min: 4, img: 'dominos', rot: 'IV · The Ladder', t: 'One verb, five steps.', p: 'Read each step out loud, then go one step up. Notice where the past goes. Then climb with your own morning.' },
  { k: 'onde', est: 'o', min: 7, img: 'dominos', rot: 'V · Where the Past Lives', t: 'In a no or a question, the past moves into DID.', p: 'Read the sentence. Say the no, then the question. Then open them.' },
  { k: 'fila', est: 'f', min: 6, img: 'dominos', rot: 'VI · The Domino Row', t: 'Eight dominoes. Each one falls only with the right words.', p: 'Say the full sentence out loud, then pick. A wrong pick and the domino just wobbles.' },
  { k: 'marcos', est: 'o', min: 7, img: 'chuva', rot: 'VII · Ask Marcos', t: 'Now you ask. Your teacher is Marcos.', p: 'Build the question from the note. Say it. Then Marcos answers.' },
  { k: 'pior', est: 'o', min: 7, extra: 1, img: 'chuva', rot: 'VIII · My Day Was Worse', t: 'A contest. Your teacher had a bad day. Yours was worse.', p: 'Your teacher says a line. Top it with didn’t, a question back, because or so.' },
  { k: 'cola', est: 'f', min: 6, extra: 1, img: 'dominos', rot: 'IX · The Glue', t: 'Two dominoes need glue: because, or so?', p: 'Pick the word. Then say the whole sentence out loud.' },
  { k: 'conta', est: 'o', min: 7, extra: 1, img: 'porta', rot: 'X · All of It', t: 'Every piece is on the table. Tell the whole morning.', p: 'Answer each question out loud. Then the whole story, with no screen.' },
  { k: 'seu', est: 'o', min: 7, extra: 1, img: 'chuva', rot: 'XI · Your Worst Day', t: 'Enough about Marcos. Now a real day.', p: 'Tell it as a chain: each thing caused the next. Your teacher adds a domino for every link.' },
  { k: 'fim', est: 'w', min: 6, img: 'porta', rot: 'XII · The Last Domino', t: 'Write your worst day as a chain.', p: 'Five links: didn’t, wasn’t, so, because, and one question in the past. The red line watches did. It goes to your My notes.' }
];

var TR = {
  'v-story.mp3': 'Okay, so. My phone died in the night. The alarm didn’t ring, and I woke up at ten o’clock. I ran to the bus stop, but the bus left without me. So I took a taxi, and my wallet was at home. I walked to the office in the rain. I arrived at eleven, and the office was closed.',
  'v-punch.mp3': 'And then I remembered. It was Sunday.'
};

var ABRE = [
  { k: 'THIS MONTH', q: 'What bad thing happened to you this month?', fup: 'What happened next?', st: ['I lost …', 'I missed …'], ex: 'I lost my keys, so I waited outside for an hour.' },
  { k: 'LAST WEEK', q: 'What didn’t go well last week?', fup: 'Were you tired?', st: ['I didn’t …', '… didn’t work.'], ex: 'I didn’t sleep well, and I was late for work.' },
  { k: 'A QUESTION', q: 'Ask me about my weekend.', fup: 'And one more question?', st: ['Did you …?', 'What did you …?'], ex: 'Did you go out on Saturday?' }
];
var FORMAS = [{ k: 'past', t: 'A PAST VERB (LOST, MISSED…)' }, { k: 'neg', t: 'DIDN’T + PLAIN VERB' }, { k: 'dwent', t: 'DIDN’T WENT', erro: 1 }, { k: 'dsaw', t: 'DID YOU SAW?', erro: 1 }];

var CLAIMS = [
  { t: 'His phone died.', ok: 1 }, { t: 'He lost his job.', neg: 'No, he didn’t lose his job.' }, { t: 'He woke up at ten.', ok: 1 },
  { t: 'His car broke down.', neg: 'No, he didn’t have a car problem.' }, { t: 'The bus left without him.', ok: 1 },
  { t: 'He forgot a meeting.', neg: 'No, he didn’t forget a meeting.' }, { t: 'The office was closed.', ok: 1 }
];

var ELOS = [
  { t: 'His phone died in the night.', l: '📱' }, { t: 'The alarm didn’t ring.', l: '⏰' }, { t: 'He woke up at ten o’clock.', l: '🛏️' },
  { t: 'The bus left without him.', l: '🚌' }, { t: 'His wallet was at home, so he walked in the rain.', l: '🌧️' }, { t: 'He arrived at eleven. The office was closed.', l: '🚪' }
];
var EMBARALHA = [3, 0, 5, 2, 4, 1];

var ONDE = [
  { a: 'He took the bus.', n: 'He didn’t take the bus.', q: 'Did he take the bus?' },
  { a: 'He went to work.', n: 'He didn’t go to work.', q: 'Did he go to work?' },
  { a: 'She saw the email.', n: 'She didn’t see the email.', q: 'Did she see the email?' },
  { a: 'They called a taxi.', n: 'They didn’t call a taxi.', q: 'Did they call a taxi?' }
];

var FILA = [
  { l: '⏰', q: 'The alarm ___ .', o: ['didn’t ring', 'didn’t rang', 'not rang'], w: 'The past is already in didn’t. Ring stays plain.' },
  { l: '🌅', q: 'He ___ up at seven.', o: ['didn’t wake', 'didn’t woke', 'not woke'], w: 'One past per sentence: didn’t wake.' },
  { l: '🚌', q: '___ he catch the bus?', o: ['Did', 'Does', 'Was'], w: 'A past question starts with Did.' },
  { l: '🚕', q: 'He ___ his wallet for the taxi.', o: ['didn’t have', 'didn’t had', 'don’t had'], w: 'didn’t + plain verb: have.' },
  { l: '👛', q: 'His wallet ___ in his pocket.', o: ['wasn’t', 'didn’t was', 'not was'], w: 'The verb be never uses didn’t: wasn’t.' },
  { l: '🌧️', q: '___ he walk in the rain?', o: ['Did', 'Was', 'Is'], w: 'Walk is an action in the past: Did.' },
  { l: '🏢', q: 'Where ___ he go?', o: ['did', 'was', 'does'], w: 'Question word + did + plain verb.' },
  { l: '📅', q: 'Why ___ he check the day?', o: ['didn’t', 'wasn’t', 'doesn’t'], w: 'An action, in the past, in a no: didn’t.' }
];

var NOTAS = [
  { c: 'what time · wake up', q: 'What time did you wake up?', r: 'At ten o’clock!' },
  { c: 'why · the alarm · not ring', q: 'Why didn’t the alarm ring?', r: 'My phone died in the night.' },
  { c: 'pay the taxi · ?', q: 'Did you pay the taxi?', r: 'No, I didn’t. My wallet was at home!' },
  { c: 'how · get to work', q: 'How did you get to work?', r: 'I walked. In the rain.' },
  { c: 'what · see · at eleven', q: 'What did you see at eleven?', r: 'A closed door.' },
  { c: 'check the day · ?', q: 'Did you check the day?', r: 'No… I didn’t.' }
];
var PARTES_M = [{ k: 'did', t: 'DID + PLAIN VERB' }, { k: 'ordem', t: 'WORD ORDER: WHAT / DID / YOU' }];

var PIOR = [
  { p: 'I didn’t sleep last night.', s: 'Well, I didn’t sleep for two nights!' },
  { p: 'My bus didn’t come this morning.', s: 'My bus didn’t come, so I walked for an hour!' },
  { p: 'I lost my keys yesterday.', s: 'Did you? I lost my keys AND my phone!' },
  { p: 'I didn’t have breakfast.', s: 'I didn’t have breakfast, lunch or dinner!' },
  { p: 'I missed a meeting because I was late.', s: 'I missed my own birthday party!' }
];
var PARTES_P = [{ k: 'neg', t: 'DIDN’T + PLAIN VERB' }, { k: 'q', t: 'A QUESTION BACK (DID YOU…?)' }, { k: 'cola', t: 'BECAUSE / SO' }];

var COLA = [
  { a: 'The alarm didn’t ring', b: 'he woke up at ten.', k: 'so' }, { a: 'He woke up at ten', b: 'the bus left without him.', k: 'so' },
  { a: 'He walked in the rain', b: 'his wallet was at home.', k: 'because' }, { a: 'He was very wet', b: 'he walked for thirty minutes.', k: 'because' },
  { a: 'The office was closed', b: 'he went home again.', k: 'so' }
];

var CONTA = [
  { l: '📱', q: 'What happened to his phone in the night?', a: 'It died.' }, { l: '⏰', q: 'Why didn’t he wake up at seven?', a: 'Because the alarm didn’t ring.' },
  { l: '🛏️', q: 'What time did he wake up?', a: 'At ten o’clock.' }, { l: '🚌', q: 'Why did he miss the bus?', a: 'Because he woke up late.' },
  { l: '🌧️', q: 'Why did he walk in the rain?', a: 'Because his wallet was at home.' }, { l: '🚪', q: 'What did he find at eleven?', a: 'A closed office. It was Sunday!' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, ouvir: { tap: {} }, cadeia: { n: 0, err: -1 }, onde: { abre: {} }, fila: { n: 0, esc: -1 }, marcos: { n: 0, viu: 0, partes: {}, erro: 0 },
  pior: { n: 0, viu: 0, partes: {}, erro: 0 }, cola: { n: 0, esc: '' }, conta: { n: 0 }, seu: { elos: 0 } };

function domino(txt, caido, extra, idx) { return '<span class="dom' + (caido ? ' caiu' : '') + (extra || '') + '" style="--d:' + ((idx || 0) * 0.08) + 's"><i>' + txt + '</i><b class="pts"></b></span>'; }
function fileira(lista, caidos, errado) { return '<div class="fileira">' + lista.map(function (l, i) { return domino(l, i < caidos, errado === i ? ' balanca' : '', i); }).join('') + '</div>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>The Worst <b>Day</b></h1>'
    + '<p class="sub">One thing went wrong, and it knocked over the next one.</p>'
    + '<div class="chipsx"><span class="pilula">didn’t take</span><span class="pilula">Did you…?</span><span class="pilula">because · so</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the chain</button>' + faixaLive() + '</div>'
    + '<div class="capa-dom">' + fileira(['📱', '⏰', '🛏️', '🚌', '🌧️', '🚪'], 3) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.ouvir = function (c) {
  var o = S.ouvir, ouviu = (S.ouviu || {})['v-story.mp3'], de_pe = CLAIMS.filter(function (x, i) { return x.ok && o.tap[i]; }).length;
  return cab(c) + '<div class="mesa-ouv"><div class="lado-o"><div class="toca-linha vd"><span class="ic">🎧</span>' + tocar('v-story.mp3') + '<span>Marcos</span></div>' + transcricao('v-story.mp3', TR['v-story.mp3'])
    + '<div class="fileira pe">' + CLAIMS.filter(function (x) { return x.ok; }).map(function (x, i) { return '<span class="dom' + (i < de_pe ? ' pe' : ' sumido') + '"><i>' + ['📱', '🛏️', '🚌', '🚪'][i] + '</i><b class="pts"></b></span>'; }).join('') + '</div></div>'
    + '<div class="claims">' + CLAIMS.map(function (x, i) { var t = o.tap[i]; return '<button type="button" class="claim' + (t ? (x.ok ? ' certo' : ' falso') : '') + '" data-a="ov" data-n="' + i + '"' + (ouviu ? '' : ' disabled') + '><span>' + x.t + '</span>' + (t && !x.ok ? '<small>' + x.neg + '</small>' : '') + '</button>'; }).join('') + '</div></div>';
};

R.cadeia = function (c) {
  var e = S.cadeia, n = e.n, fim = n >= ELOS.length;
  var ordem_ = '<div class="ordem-c">' + ELOS.map(function (x, i) { return '<div class="elo' + (i < n ? ' feito' : '') + '"><span>' + (i + 1) + '</span>' + (i < n ? x.l + ' ' + x.t : '…') + '</div>'; }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-ouv">' + ordem_ + '<div class="lado-o">' + fileira(ELOS.map(function (x) { return x.l; }), 6) + '<div class="toca-linha vd">' + tocar('v-punch.mp3') + '<div>' + transcricao('v-punch.mp3', TR['v-punch.mp3']) + '</div></div></div></div>';
  return cab(c) + '<div class="mesa-ouv">' + ordem_ + '<div class="lado-o"><h5 class="h5">WHAT HAPPENED NEXT?</h5>' + EMBARALHA.map(function (i) { return i < n ? '' : '<button type="button" class="cartao-e' + (e.err === i ? ' errado' : '') + '" data-a="cd" data-n="' + i + '">' + ELOS[i].l + ' ' + ELOS[i].t + '</button>'; }).join('')
    + (e.err >= 0 ? '<p class="recusa">Not yet. What happened BEFORE that?</p>' : '') + '</div></div>';
};

R.onde = function (c) {
  var a = S.onde.abre;
  return cab(c) + '<div class="ondes">' + ONDE.map(function (x, i) {
    var o = a[i] || 0;
    return '<div class="onde vd"><p class="sim">' + x.a + '</p>' + (o >= 1 ? '<p class="nao-o">' + x.n.replace(/didn’t (\w+)/, '<b>didn’t</b> <u>$1</u>') + '</p>' : '') + (o >= 2 ? '<p class="q-o">' + x.q.replace(/^Did/, '<b>Did</b>') + '</p>' : '')
      + (o < 2 ? '<button type="button" class="pilula" data-a="on" data-n="' + i + '">' + (o ? 'Open the question' : 'Open the no') + '</button>' : '') + '</div>';
  }).join('') + '</div><p class="dica-aluno" style="text-align:center">Say it before you open it. The verb after did goes back to plain.</p>';
};

R.fila = function (c) {
  var f = S.fila, n = f.n, fim = n >= FILA.length, x = FILA[Math.min(n, FILA.length - 1)];
  var row = fileira(FILA.map(function (y) { return y.l; }), n, f.esc >= 0 && !(FILA[n] && ordem(FILA[n].o, n + 1)[f.esc] === FILA[n].o[0]) ? n : -1);
  if (fim) return cab(c) + row + '<p class="aprova" style="text-align:center">Eight dominoes down. didn’t + plain verb; Did…?; and be uses wasn’t.</p>';
  var ops = ordem(x.o, n + 1), ok = f.esc >= 0 && ops[f.esc] === x.o[0];
  return cab(c) + row + '<div class="foco"><div class="pergunta vd"><small>DOMINO ' + (n + 1) + ' OF 8</small><h2>' + x.q.replace('___', ok ? '<b>' + x.o[0] + '</b>' : '<span class="vaga">______</span>') + '</h2></div>'
    + '<div class="tres-b centro">' + ops.map(function (o, i) { return '<button type="button" class="pilula grande' + (f.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="fl" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="fl-prox">Knock it over</button></div>' : (f.esc >= 0 ? '<p class="recusa" style="text-align:center">The domino wobbles. ' + x.w + '</p>' : '')) + '</div>';
};

function rodadaPapel(c, lista, est, partes, erroT, erroR, toque, rotulo, lado, frente) {
  var n = est.n, fim = n >= lista.length;
  if (fim) return cab(c) + trilha(lista, n) + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>' + rotulo + '</h2></div></div>';
  var x = lista[n], pt = est.partes[n] || {};
  return cab(c) + trilha(lista, n) + '<div class="mesa-ouv"><div class="lado-o">' + frente(x) + (est.viu ? lado(x) : '<button type="button" class="btn cheio so-prof" data-a="' + toque + '-viu">Answered · show it</button>') + '</div>'
    + '<div class="lado-o"><div class="partes"><h5>WHAT YOU HEAR</h5>' + partes.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="' + toque + '-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (est.erro ? ' on' : '') + '" data-a="' + toque + '-e">MISTAKE: ' + erroT + '</button></div>'
    + (est.erro ? '<p class="recusa">' + erroR + '</p>' : '') + '<div><button type="button" class="btn" data-a="' + toque + '-prox">Next</button></div></div></div>';
}
R.marcos = function (c) {
  return rodadaPapel(c, NOTAS, S.marcos, PARTES_M, 'DID YOU SAW? / WHERE YOU WENT?', 'One past only: Did you see? And the order: Where did you go?', 'mc', 'You asked Marcos everything. He didn’t check the day.',
    function (x) { return '<div class="balao voce"><small>YOU ASK</small><p>' + x.q + '</p></div><div class="balao"><small>MARCOS</small><p>“' + x.r + '”</p></div>'; },
    function (x) { return '<div class="nota-m vd"><small>YOUR NOTE</small><b>' + x.c + '</b></div><p class="dica-aluno">Build the question. Say it out loud.</p>'; });
};
R.pior = function (c) {
  return rodadaPapel(c, PIOR, S.pior, PARTES_P, 'DIDN’T WENT', 'didn’t go: the past is already in didn’t.', 'pr', 'Who won? Your teacher decides.',
    function (x) { return '<div class="balao voce"><small>ONE WAY TO TOP IT</small><p>' + x.s + '</p></div>'; },
    function (x) { return '<div class="balao"><small>YOUR TEACHER</small><p>“' + x.p + '”</p></div><p class="dica-aluno">Top it. Your day was worse.</p>'; });
};

R.cola = function (c) {
  var e = S.cola, n = e.n, fim = n >= COLA.length, x = COLA[Math.min(n, COLA.length - 1)];
  if (fim) return cab(c) + trilha(COLA, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE PAIRS</small><h2>So: the result comes next. Because: the reason comes next.</h2></div></div>';
  var ok = e.esc === x.k;
  return cab(c) + trilha(COLA, n) + '<div class="foco"><div class="par-dom"><span class="dom grande"><i>' + x.a + '</i></span><span class="cola-c' + (ok ? ' cheia' : '') + '">' + (ok ? x.k : '+') + '</span><span class="dom grande"><i>' + x.b + '</i></span></div>'
    + '<div class="tres-b centro">' + ['because', 'so'].map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="cl" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa" style="text-align:center">' + (x.k === 'so' ? 'Is the second part the RESULT? Then it’s so.' : 'Is the second part the REASON? Then it’s because.') + '</p>' : '')
    + (ok ? '<p class="aprova" style="text-align:center">Say it: ' + x.a + (x.k === 'so' ? ', so ' : ' because ') + x.b + '</p><div style="text-align:center"><button type="button" class="btn" data-a="cl-prox">Next</button></div>' : '') + '</div>';
};

R.conta = function (c) {
  var e = S.conta, n = e.n, fim = n >= CONTA.length;
  return cab(c) + '<div class="foco">' + fileira(CONTA.map(function (x) { return x.l; }), n) + (fim ? '<div class="pergunta vd"><small>NO SCREEN NOW</small><h2>Tell the whole morning, from the phone to the closed door.</h2></div>'
    : '<div class="pergunta vd"><small>DOMINO ' + (n + 1) + '</small><h2>' + CONTA[n].q + '</h2></div>' + mostra('ct' + n, CONTA[n].a) + '<div style="text-align:center"><button type="button" class="btn" data-a="ct-prox">Knock it over</button></div>') + '</div>';
};

R.seu = function (c) {
  var s = S.seu, lista = []; for (var i = 0; i < s.elos; i++) lista.push('✔');
  return cab(c) + '<div class="foco">' + (s.elos ? fileira(lista, s.elos) : '<p class="dica-aluno" style="text-align:center">No dominoes yet. Start the story.</p>')
    + fala('seu', ['First, …', '…, so …', '… because …', 'And then …'], []) + '<div class="tres-b centro so-prof"><button type="button" class="btn cheio" data-a="su-mais"' + (s.elos >= 6 ? ' disabled' : '') + '>+ a link I heard</button><button type="button" class="pilula" data-a="su-menos">− remove one</button></div>'
    + (s.elos >= 3 ? '<p class="aprova" style="text-align:center">' + s.elos + ' links. That’s a chain.</p>' : '') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My alarm didn’t ring, so I woke up late.\n…', 'Your worst day',
    ['didn’t ', 'wasn’t ', ', so ', ' because ', 'Did you ', '?'], ['YOUR BAD THING, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write it as a chain.' : 'Your worst day as a chain of five links.'])
    + '<div class="lado-fim"><div class="grande vd"><span>He <u>didn’t take</u> · not didn’t took</span><span><u>Did</u> he <u>see</u>? · not did he saw</span><span>be: <u>wasn’t</u> · never didn’t was</span></div>'
    + mostra('fim', 'My alarm didn’t ring, so I woke up late.<br>I didn’t have breakfast because I was in a hurry.<br>The bus wasn’t there, so I ran to work.<br>My boss asked: “Did you sleep at all?”', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.ov = function (b, n) { if (!(S.ouviu || {})['v-story.mp3']) return false; S.ouvir.tap[n] = 1; };
TOQUES.cd = function (b, n) { var e = S.cadeia; if (n === e.n) { e.n++; e.err = -1; } else e.err = n; };
TOQUES.on = function (b, n) { var a = S.onde.abre; a[n] = (a[n] || 0) + 1; };
TOQUES.fl = function (b, n) { S.fila.esc = n; };
TOQUES['fl-prox'] = function () { S.fila = { n: S.fila.n + 1, esc: -1 }; };
['mc', 'pr'].forEach(function (k) {
  var ch = k === 'mc' ? 'marcos' : 'pior';
  TOQUES[k + '-viu'] = function () { S[ch].viu = 1; };
  TOQUES[k + '-p'] = function (b, n, v) { var e = S[ch]; e.partes[e.n] = e.partes[e.n] || {}; e.partes[e.n][v] = !e.partes[e.n][v]; };
  TOQUES[k + '-e'] = function () { S[ch].erro = !S[ch].erro; };
  TOQUES[k + '-prox'] = function () { var e = S[ch]; e.n++; e.viu = 0; e.erro = 0; };
});
TOQUES.cl = function (b, n, v) { S.cola.esc = v; };
TOQUES['cl-prox'] = function () { S.cola = { n: S.cola.n + 1, esc: '' }; };
TOQUES['ct-prox'] = function () { S.conta.n++; };
TOQUES['su-mais'] = function () { if (S.seu.elos < 6) S.seu.elos++; };
TOQUES['su-menos'] = function () { if (S.seu.elos > 0) S.seu.elos--; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de onde.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One verb. Climb it one step at a time.',
  degraus: [
    { r: 'verb', f: 'wake', d: 'The verb, clean.' },
    { r: 'past', f: 'Marcos <b>woke</b> up at ten.', d: 'The past is inside the verb: woke.' },
    { r: 'not', f: 'Marcos <b>didn’t wake</b> up at seven.', d: 'The past moves into didn’t. wake is clean again.' },
    { r: '?', f: '<b>Did</b> Marcos <b>wake</b> up at seven?', d: 'Did goes first. wake stays clean.' },
    { r: 'short', f: 'No, he <b>didn’t</b>.', d: 'The short answer keeps did.' }
  ],
  nota: 'Only one past in each sentence: in the verb (he woke), or in <b>did</b> / <b>didn’t</b>. Never two: not “didn’t woke”. The verb be is the exception: his wallet <b>wasn’t</b> in his pocket.',
  uso: { p: 'Your turn. Climb with your own morning: one thing you did, one thing you didn’t do, and one question for your teacher.', molde: ['This morning I …', 'I didn’t …', 'Did you …?'], ex: 'This morning I woke up at six. I didn’t have breakfast. Did you sleep well?' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
