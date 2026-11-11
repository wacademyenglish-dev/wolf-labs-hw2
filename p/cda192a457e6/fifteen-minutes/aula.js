/* ============================================================
   THE GATE HAD CLOSED · THE DEPARTURE BOARD · LIVE CLASS  06/10/2026
   Main series B1 · past perfect: had + particípio, o passado do
   passado, só com DOIS momentos no passado. "When I arrived, the
   train left" (= você viu sair) × "had left" (= já tinha ido). Erros:
   "had went", "had gave", "had ran", "never had flew", "Yesterday I
   had missed my bus" (um momento só: passado simples).
   O MUNDO (da aula velha): viagens que deram errado; e um estudo de
   2014: pessoas sozinhas numa sala vazia por quinze minutos, com um
   botão que dava choque; o copo de plástico e a lista telefônica; o
   cérebro que não para. Três gravações mantidas (a1, a2, a3),
   conferidas no faster-whisper em 06/10: batem (só a pontuação muda).
   A CARA: o PAINEL DE EMBARQUE — letras âmbar sobre preto, duas
   faixas: a da frente é o momento que você conta; a de trás, apagada,
   é o que JÁ TINHA acontecido (had); o evento desliza para trás.
   Fila: FILA-LIVE-386.md · 103.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'portao' },
  { k: 'atrasado', est: 'o', min: 7, img: 'plataforma', rot: 'I · Too Late', t: 'Think of a time you arrived late, and something was already over.', p: 'Tap the one closest to your story. Then tell it. Keep your sentence: it comes back.' },
  { k: 'faixas', est: 'f', min: 6, img: 'portao', rot: 'II · Two Lanes', t: 'The front lane is the moment you’re telling. The back lane was already over.', p: 'Read both events. Tap the one that happened FIRST: it slides to the back lane. Then say the sentence.' },
  { k: 'sentido', est: 'f', min: 6, img: 'plataforma', rot: 'III · Did You See It?', t: 'One word changes the story.', p: 'Read the sentence. Did you see it happen, or was it already over?' },
  { k: 'sala', est: 'l', min: 7, img: 'sala', rot: 'IV · The Empty Room', t: '2014. People sat alone in an empty room for fifteen minutes. One box, one button.', p: 'Listen once. Then tap the four things in the order they happened, before the door closed.' },
  { k: 'gx', est: 'f', min: 4, img: 'portao', rot: 'V · Before the Past', t: 'Which past comes first?', p: 'Tap a sentence, then its place on the line. Notice had. Then say three lines about a trip.' },
  { k: 'regra', est: 'f', min: 6, img: 'portao', rot: 'VI · The Past of the Past', t: 'HAD + the third form, and only when there are two past moments.', p: 'Say the whole sentence out loud before you tap.' },
  { k: 'botao', est: 'o', min: 7, img: 'botao', rot: 'VII · One Hundred and Ninety', t: 'Forty-two people, one button. Where does each card belong?', p: 'Read the card out loud, say the column, then tap.' },
  { k: 'copo', est: 'l', min: 7, extra: 1, img: 'copo', rot: 'VIII · The Plastic Cup', t: 'Another study: can boredom help you think?', p: 'Listen once. Then answer three questions.' },
  { k: 'viagem', est: 'o', min: 7, extra: 1, img: 'mala', rot: 'IX · Your Worst Trip', t: 'The board shows four disasters. Choose one, real or imagined, and tell the story.', p: 'Say the first sentence; your teacher taps what you said. Then tell the story. Your teacher asks: “What had happened before that?”' },
  { k: 'cerebro', est: 'l', min: 7, extra: 1, img: 'portao', rot: 'X · A Brain That Doesn’t Stop', t: 'What does the brain do when you stop working?', p: 'Listen once. Then answer three questions.' },
  { k: 'fim', est: 'w', min: 6, img: 'plataforma', rot: 'XI · Too Late, Again', t: 'Your story from scene I comes back.', p: 'Fix the three sentences out loud. Then write your own too-late story with had. It goes to your My notes.' }
];

var TR = {
  'a1.mp3': 'The room had almost nothing in it. One chair, one table, and a small box with a button on it. We took their phone, their watch, their bag, anything with writing on it. The instruction was one sentence long: entertain yourself with your own thoughts for fifteen minutes. And before any of them went in, every single one had tried the button once, so they knew exactly what it felt like. And most of them had told us, in writing, that they would pay money never to feel it again. Then we closed the door.',
  'a2.mp3': 'We needed people to be properly, honestly bored, so we gave them a telephone directory and asked them to copy numbers out of it by hand for fifteen minutes. Nothing else. No phone. No talking. Then we handed them a plastic cup and asked how many different uses they could think of for it. They beat the group that had gone straight to the cup, and it was not close. So we ran it again, and this time one group copied the numbers out, and another group only read them aloud. The readers won. The more passive the boring task had been, the better the ideas were afterwards.',
  'a3.mp3': 'When you stop working on something, your brain does not go quiet. A set of regions that had been turned down while you were concentrating comes straight back up, and it stays busy. We call it the default mode network, and calling it a rest state is the first mistake. It is a different job, not the absence of one. It goes back over what happened, and it rehearses conversations you have not had yet. But I want to be careful, because this gets oversold. Nobody can promise you that staring at a wall will fix your memory.'
};

var EVENTOS = ['the train had left', 'the movie had started', 'the store had closed', 'the meeting had finished', 'everybody had eaten', 'the gate had closed'];

var PARES = [
  { a: 'I got to the gate', b: 'the gate closed', pri: 'b', frase: 'When I got to the gate, the gate <b>had closed</b>.' },
  { a: 'we reached the platform', b: 'the last train left', pri: 'b', frase: 'When we reached the platform, the last train <b>had left</b>.' },
  { a: 'she opened her suitcase', b: 'somebody took her laptop', pri: 'b', frase: 'When she opened her suitcase, somebody <b>had taken</b> her laptop.' },
  { a: 'they tried the button once', b: 'the door closed', pri: 'a', frase: 'Before the door closed, they <b>had tried</b> the button once.' },
  { a: 'I checked in', b: 'the hotel gave my room away', pri: 'b', frase: 'When I checked in, the hotel <b>had given</b> my room away.' },
  { a: 'he woke up', b: 'the plane landed', pri: 'b', frase: 'When he woke up, the plane <b>had landed</b>.' }
];

var SENTIDO = [
  { f: 'When I arrived, the train <b>left</b>.', ops: ['I saw the train leave.', 'The train was already gone.'] },
  { f: 'When I arrived, the train <b>had left</b>.', ops: ['The train was already gone.', 'I saw the train leave.'] },
  { f: 'When we got home, the party <b>had started</b>.', ops: ['We missed the beginning.', 'It started when we walked in.'] },
  { f: 'When we got home, the party <b>started</b>.', ops: ['It started when we walked in.', 'We missed the beginning.'] }
];

var FATOS = [['they handed over the phone, the watch and the bag', 'had handed everything over'], ['they were given one instruction', 'had been given one instruction'], ['they tried the button once', 'had tried the button'], ['they wrote that they would pay never to feel it again', 'had written that they would pay to avoid it']];

var REGRA = [
  { esq: 'Before they went in, every one of them…', ops: ['had tried the button', 'has tried the button', 'had try the button'], nota: 'HAD + third form, for everybody.' },
  { esq: 'When I got to the gate, the plane…', ops: ['had gone', 'had went', 'has gone'], nota: 'go · went · GONE. Never had went.' },
  { esq: 'Yesterday I missed my train. This sentence needs…', ops: ['the simple past', 'the past perfect', 'the present perfect'], nota: 'One moment only: simple past. HAD needs two.' },
  { esq: 'She was nervous because she…', ops: ['had never flown before', 'never had flew before', 'has never flown before'], nota: 'never, already, just go between HAD and the verb.' },
  { esq: '(a) I had eaten before she arrived. (b) I ate before she arrived.', ops: ['both are correct', '(a) is wrong', '(b) is wrong'], nota: 'BEFORE already shows the order, so the simple past is fine too.' },
  { esq: 'When they came back, the room…', ops: ['hadn’t changed', 'hadn’t change', 'didn’t changed'], nota: 'HADN’T + third form.' },
  { esq: 'By the time the police came, the thief…', ops: ['had run away', 'had ran away', 'has run away'], nota: 'run · ran · RUN.' },
  { esq: 'They … felt it before.', ops: ['had already', 'already had', 'have already'], nota: 'had already + verb.' }
];

var COLS = ['WHAT THEY DID IN THE ROOM', 'WHAT THEY HAD SAID BEFORE', 'NOBODY MEASURED THIS'];
var FICHAS = [{ t: '12 of 18 men gave themselves at least one shock', c: 0 }, { t: 'one man pressed the button 190 times', c: 0 }, { t: '6 of 24 women did the same', c: 0 }, { t: 'that they would pay money never to feel it again', c: 1 }, { t: 'whether the shock hurt more than the boredom', c: 2 }];

var COPO = [
  { q: 'What had the bored group done before the creativity task?', ops: ['They had copied phone numbers by hand.', 'They had watched a movie.', 'They had used their phones.'] },
  { q: 'How did they do on the cup task?', ops: ['Better than the group that had gone straight to the cup.', 'Worse.', 'The same.'] },
  { q: 'Which group had the best ideas?', ops: ['The group that had only read the numbers aloud.', 'The group that had copied them.', 'Nobody.'] }
];

var DESASTRES = [
  { rot: 'GATE CLOSED', ops: [['When I got to the gate, it had closed.', 'ok'], ['When I got to the gate, it closed.', 'viu'], ['When I got to the gate, it had close.', 'part']], perg: 'Why were you late? What had you been doing?' },
  { rot: 'BAG LOST', ops: [['When I landed, my bag had gone to another city.', 'ok'], ['When I landed, my bag had went to another city.', 'went'], ['When I landed, my bag has gone to another city.', 'has']], perg: 'What had you packed in it?' },
  { rot: 'TRAIN CANCELED', ops: [['By the time I read the message, they had canceled the train.', 'ok'], ['By the time I read the message, they canceled already the train.', 'ordem'], ['By the time I read the message, they have canceled the train.', 'has']], perg: 'How did you get home in the end?' },
  { rot: 'ROOM GIVEN AWAY', ops: [['When I checked in, they had given my room to someone else.', 'ok'], ['When I checked in, they had gave my room to someone else.', 'went'], ['When I checked in, they gave my room already.', 'ordem']], perg: 'Where did you sleep that night?' }
];
var NAO = { viu: 'That means you SAW it close. Was it already over? Then HAD closed.', part: 'HAD + the third form: had closed.', went: 'The third form: gone, given. Never had went, had gave.', has: 'A story in the past: HAD, not has / have.', ordem: 'had + already + verb: they had already canceled.' };

var CEREBRO = [
  { q: 'When you stop concentrating, the brain…', ops: ['gets busy with a different job', 'goes quiet', 'switches off'] },
  { q: 'The regions that come back up had been…', ops: ['turned down while you were concentrating', 'damaged', 'asleep all day'] },
  { q: 'What does she refuse to promise?', ops: ['that staring at a wall will fix your memory', 'that the brain rehearses conversations', 'that the network exists'] }
];

var CONSERTA = [['When I arrived, the train left. (it was already gone)', 'When I arrived, the train had left.'], ['The plane had went.', 'The plane had gone.'], ['Yesterday I had missed my bus.', 'Yesterday I missed my bus.']];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  at: -1, fx: { n: 0, esc: '' }, sn: { n: 0, esc: -1 }, sl: { ord: [], erro: 0 }, rg: { n: 0, esc: -1 }, bt: { n: 0, esc: -1 }, cp: { n: 0, esc: -1 }, vg: { n: 0, esc: '' }, cb: { n: 0, esc: -1 }, cf: {} };

/* o painel: frente = o que você conta; trás = o que já tinha acontecido */
function painel(frente, tras, hora, estado) {
  return '<div class="painel-e' + (estado ? ' ' + estado : '') + '"><div class="topo-e"><b>DEPARTURES</b><span>' + (hora || '22:47') + '</span></div>'
    + '<div class="lane frente"><small>THEN</small><p>' + (frente || '—') + '</p></div>'
    + '<div class="lane tras"><small>ALREADY OVER · HAD</small><p>' + (tras || '—') + '</p></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE DEPARTURE BOARD</span><h1>The Gate <b>Had Closed</b></h1>'
    + '<p class="sub">When I got to the gate, it <b>had closed</b>. I didn’t see it close: it was already over.</p>'
    + '<div class="chipsx"><span class="pilula">had + third form</span><span class="pilula">two past moments</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Go to the gate</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + painel('GATE 14 · I GOT THERE', 'GATE 14 · CLOSED', '22:47', 'ok') + '</div></div>';
};

R.atrasado = function (c) {
  var a = S.at;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="tres-b">' + EVENTOS.map(function (e, i) { return '<button type="button" class="pilula grande-p' + (a === i ? ' on' : '') + '" data-a="at" data-n="' + i + '">' + e + '</button>'; }).join('') + '</div>'
    + (a >= 0 ? '<div class="balao vd"><p>When I got there, <u>' + EVENTOS[a] + '</u>.</p></div>' : '<div class="aberta vd" style="background-image:url(' + img('plataforma') + ')"><span>TOO LATE</span></div>') + '</div>'
    + '<div class="lado-l">' + (a >= 0 ? '<div class="pede vd"><small>1</small><b>Where were you going, and why were you late?</b></div><div class="pede vd"><small>2</small><b>What did you do next?</b></div>' + fala('at', ['I was going to …', 'When I got there, …'], ['had', 'already', 'late']) + '<p class="so-prof dica-aluno">Write down their “when I got there” sentence exactly. Don’t correct “When I arrived, the train left” yet.</p>' : '<p class="dica-aluno">Tap the one closest to your story.</p>') + '</div></div>';
};

R.faixas = function (c) {
  var e = S.fx, n = e.n, fim = n >= PARES.length;
  if (fim) return cab(c) + trilha(PARES, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>The back lane always had HAD.</h2></div></div>';
  var x = PARES[n], ok = e.esc === x.pri;
  var primeiro = ok ? (x.pri === 'a' ? x.a : x.b) : '', depois = ok ? (x.pri === 'a' ? x.b : x.a) : '';
  return cab(c) + trilha(PARES, n) + '<div class="mesa-c"><div class="lado-l">' + painel(ok ? depois.toUpperCase() : '', ok ? primeiro.toUpperCase() : '', '22:4' + n, ok ? 'ok' : '') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">WHICH HAPPENED FIRST?</h5><div class="versoes">' + [['a', x.a], ['b', x.b]].map(function (o) { return '<button type="button" class="versao' + (e.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="fx" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div class="balao vd ok-b"><p>' + x.frase + '</p></div><div><button type="button" class="btn" data-a="fx-prox">Next</button></div>' : e.esc ? '<p class="recusa">Not that one. Which one was already over?</p>' : '') + '</div></div>';
};

R.sentido = function (c) {
  var e = S.sn, n = e.n, fim = n >= SENTIDO.length;
  if (fim) return cab(c) + trilha(SENTIDO, n) + '<div class="foco"><div class="pergunta vd"><small>SAME WORDS, DIFFERENT STORY</small><h2>HAD means you missed it.</h2></div></div>';
  var x = SENTIDO[n], ok = e.esc === 0;
  return cab(c) + trilha(SENTIDO, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div><div class="tres-b centro">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="sn" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">Now act it out: point at the train leaving, or at the empty track.</p><div style="text-align:center"><button type="button" class="btn" data-a="sn-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Read it again. Already over, or right then?</p>' : '') + '</div>';
};

R.sala = function (c) {
  var e = S.sl, feitos = e.ord.length, ouviu = (S.ouviu || {})['a1.mp3'], fim = feitos >= FATOS.length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + (fim ? '' : '<div class="aberta vd" style="background-image:url(' + img('sala') + ')"><span>THE EMPTY ROOM · 2014</span></div>') + '<div class="ouve-c vd"><div class="toca-linha">' + tocar('a1.mp3') + '<b>THE RESEARCHER</b></div>' + transcricao('a1.mp3', TR['a1.mp3']) + '</div>' + (fim ? '<div class="pergunta vd ja"><h2>How many of them do you think pressed the button again? Say a number.</h2></div>' : '') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">IN THE ORDER THEY HAPPENED</h5><div class="versoes">' + ordem(FATOS.map(function (f, i) { return [f, i]; }), 6).map(function (o) { var p = e.ord.indexOf(o[1]); return '<button type="button" class="versao fato' + (p >= 0 ? ' certo' : '') + '" data-a="sl" data-n="' + o[1] + '"' + (ouviu ? '' : ' disabled') + '>' + (p >= 0 ? '<i>' + (p + 1) + '</i>' : '') + o[0][0] + '</button>'; }).join('') + '</div>'
    + (!ouviu ? '<p class="dica-aluno">Listen first. The order is only in the recording.</p>' : e.erro ? '<p class="recusa">Not yet. Play it again: what happened ' + ['first', 'second', 'third', 'last'][feitos] + '?</p>' : '')
    + (fim ? '<div class="balao vd ok-b"><small>BY THE TIME THE DOOR CLOSED, THEY…</small><p>' + FATOS.map(function (f) { return f[1]; }).join(' · ') + '</p></div>' : '') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg, n = e.n, fim = n >= REGRA.length;
  if (fim) return cab(c) + trilha(REGRA, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT BUILT</small><h2>HAD only when something was already over, and two past moments.</h2></div></div>';
  var x = REGRA[n], ok = e.esc === 0;
  return cab(c) + trilha(REGRA, n) + '<div class="foco"><div class="balao vd"><p>' + x.esq + '</p></div><div class="versoes duas-v">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 9).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="rg" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.nota + '</p><div style="text-align:center"><button type="button" class="btn" data-a="rg-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">HAD + third form. And are there two moments?</p>' : '') + '</div>';
};

R.botao = function (c) {
  var e = S.bt, n = e.n, fim = n >= FICHAS.length, x = FICHAS[Math.min(n, FICHAS.length - 1)];
  var cols = '<div class="cols">' + COLS.map(function (k, ci) { return '<button type="button" class="col c' + ci + (!fim && e.esc === ci && ci !== x.c ? ' errado' : '') + '" data-a="bt" data-n="' + ci + '"' + (fim ? ' disabled' : '') + '><small>' + k + '</small>' + FICHAS.slice(0, n).filter(function (f) { return f.c === ci; }).map(function (f) { return '<span>' + f.t + '</span>'; }).join('') + '</button>'; }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>THE GAP</small><h2>Say it in one sentence. Start with: “They had said…”</h2></div>' + fala('bt', ['They had said …, but then …'], ['had said', 'pressed', 'pay']) + '</div>' + cols;
  return cab(c) + '<div class="foco"><div class="balao vd"><small>CARD ' + (n + 1) + ' OF 5 · TAP ITS COLUMN</small><p>' + x.t + '</p></div>' + (e.esc >= 0 && e.esc !== x.c ? '<p class="recusa" style="text-align:center">In the room, before it, or never measured?</p>' : '') + '</div>' + cols;
};

R.copo = function (c) {
  var e = S.cp, n = e.n, fim = n >= COPO.length, ouviu = (S.ouviu || {})['a2.mp3'];
  var ouve = '<div class="ouve-c vd"><div class="toca-linha">' + tocar('a2.mp3') + '<b>THE RESEARCHER</b></div>' + transcricao('a2.mp3', TR['a2.mp3']) + '</div>';
  var dir;
  if (!ouviu) dir = '<div class="pergunta vd ja"><h2>Can boredom help you think?</h2></div><p class="dica-aluno">Listen first. The questions open after.</p>';
  else if (fim) dir = '<div class="pergunta vd"><small>RIGHT NOW</small><h2>Name three uses for a plastic cup. Then: is the study big enough to believe?</h2></div>';
  else { var x = COPO[n], ok = e.esc === 0; dir = trilha(COPO, n) + '<div class="pergunta vd ja"><h2>' + x.q + '</h2></div><div class="versoes">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 2).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="cp" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (ok ? '<div><button type="button" class="btn" data-a="cp-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa">Play it again.</p>' : ''); }
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('copo') + ')"><span>ONE PLASTIC CUP</span></div>' + ouve + '</div><div class="lado-l">' + dir + '</div></div>';
};

R.viagem = function (c) {
  var e = S.vg, n = e.n, fim = n >= DESASTRES.length;
  var quadro = '<div class="quadro-d">' + DESASTRES.map(function (d, i) { return '<span class="' + (i < n ? 'feito' : i === n ? 'on' : '') + '"><i>' + (i < n ? 'DONE' : i === n ? 'NOW' : 'DELAYED') + '</i>' + d.rot + '</span>'; }).join('') + '</div>';
  if (fim) return cab(c) + quadro + '<div class="foco"><div class="pergunta vd"><small>FOUR DISASTERS</small><h2>Four stories, and every one had something already over. Now retell one backwards.</h2></div></div>';
  var x = DESASTRES[n], ok = e.esc === 'ok';
  return cab(c) + quadro + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('mala') + ')"><span>' + x.rot + '</span></div></div><div class="lado-l">'
    + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div><div class="pede vd"><small>THEN</small><b>' + x.perg + '</b></div><p class="so-prof dica-aluno">Ask at least twice: “What had happened before that?”</p><div><button type="button" class="btn" data-a="vg-prox">Next disaster</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP THE FIRST SENTENCE YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 3).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="vg" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NAO[e.esc] + '</p>' : '')) + '</div></div>';
};

R.cerebro = function (c) {
  var e = S.cb, n = e.n, fim = n >= CEREBRO.length, ouviu = (S.ouviu || {})['a3.mp3'];
  var ouve = '<div class="ouve-c vd"><div class="toca-linha">' + tocar('a3.mp3') + '<b>THE NEUROSCIENTIST</b></div>' + transcricao('a3.mp3', TR['a3.mp3']) + '</div>';
  var dir;
  if (!ouviu) dir = '<div class="pergunta vd ja"><h2>When you stop working, does your brain stop too?</h2></div><p class="dica-aluno">Listen first. The questions open after.</p>';
  else if (fim) dir = '<div class="pergunta vd"><small>ABOUT YOU</small><h2>Where were you the last time you had a good idea? What had you been doing just before?</h2></div>' + fala('cb', ['I had been … when …', 'Just before, I had …'], ['had', 'had been', 'just']);
  else { var x = CEREBRO[n], ok = e.esc === 0; dir = trilha(CEREBRO, n) + '<div class="pergunta vd ja"><h2>' + x.q + '</h2></div><div class="versoes">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 4).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="cb" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (ok ? '<div><button type="button" class="btn" data-a="cb-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa">Play it again.</p>' : ''); }
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + ouve + '</div><div class="lado-l">' + dir + '</div></div>';
};

R.fim = function (c) {
  var cf = S.cf;
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'When I got to …, … had …\nI had …\nBefore that, I had …', 'Your too-late story',
    ['When I got there, ', ' had ', 'had already ', 'had never ', 'By the time '], ['YOUR TOO-LATE STORY', S.at >= 0 ? 'You said: when I got there, ' + EVENTOS[S.at] + '. Tell it again, with what had happened before.' : 'Two past moments, and one was already over.'])
    + '<div class="lado-fim"><h5 class="rot-ouve">FIX THEM OUT LOUD, THEN TAP</h5><div class="versoes">' + CONSERTA.map(function (k, i) { return '<button type="button" class="versao conserta' + (cf[i] ? ' certo' : '') + '" data-a="cf" data-n="' + i + '">' + (cf[i] ? k[1] : '<s>' + k[0] + '</s>') + '</button>'; }).join('') + '</div>'
    + '<div class="grande vd"><span><u>had + third form</u> · it was already over</span><span><i>the train left</i> = you saw it · <u>had left</u> = you missed it</span><span>one moment? simple past · never <s>had went</s></span></div>'
    + mostra('fim', 'When I got to the station, the last train had left.<br>I had stayed too long at my friend’s party.<br>By the time the taxi came, I had waited for an hour.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.at = function (b, n) { S.at = n; };
TOQUES.fx = function (b, n, v) { S.fx.esc = v; };
TOQUES['fx-prox'] = function () { S.fx = { n: S.fx.n + 1, esc: '' }; };
TOQUES.sn = function (b, n) { S.sn.esc = n; };
TOQUES['sn-prox'] = function () { S.sn = { n: S.sn.n + 1, esc: -1 }; };
TOQUES.sl = function (b, n) { var e = S.sl; if (e.ord.indexOf(n) >= 0) return; if (n === e.ord.length) { e.ord.push(n); e.erro = 0; } else e.erro = 1; };
TOQUES.rg = function (b, n) { S.rg.esc = n; };
TOQUES['rg-prox'] = function () { S.rg = { n: S.rg.n + 1, esc: -1 }; };
TOQUES.bt = function (b, n) { var e = S.bt; e.esc = n; if (n === FICHAS[e.n].c) { e.n++; e.esc = -1; } };
TOQUES.cp = function (b, n) { S.cp.esc = n; };
TOQUES['cp-prox'] = function () { S.cp = { n: S.cp.n + 1, esc: -1 }; };
TOQUES.vg = function (b, n, v) { S.vg.esc = v; };
TOQUES['vg-prox'] = function () { S.vg = { n: S.vg.n + 1, esc: '' }; };
TOQUES.cb = function (b, n) { S.cb.esc = n; };
TOQUES['cb-prox'] = function () { S.cb = { n: S.cb.n + 1, esc: -1 }; };
TOQUES.cf = function (b, n) { S.cf[n] = 1; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'The departure board, on one line. Where does each sentence go?',
  marcos: [{ t: 'FIRST', s: 'before the other past' }, { t: 'THEN', s: 'the past moment' }, { t: 'NOW', s: 'today' }],
  frases: [
    { f: 'The train had left.', c: 0, d: 'had left · it happened first' },
    { f: 'I had lost my passport.', c: 0, d: 'had lost · it happened first' },
    { f: 'I arrived at the station.', c: 1, d: 'arrived · the past moment we talk about' },
    { f: 'The board said CANCELLED.', c: 1, d: 'said · the past moment we talk about' },
    { f: 'I always check the board now.', c: 2, d: 'check · true today' },
    { f: 'I’m at the gate today.', c: 2, d: 'am · true today' }
  ],
  nota: 'Two moments in the past: the one that happened <b>first</b> takes <b>had + third form</b> (had left, had lost). The later one is the normal past: I arrived. And the verb is the third form: had <b>gone</b>, not had went.',
  uso: { p: 'Your turn. A trip or a day that went wrong. What had happened before you arrived?', molde: ['When I got there, the … had …', 'I had already …'], ex: 'When I got to the airport, the plane had already left. I had forgotten my passport at home.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
