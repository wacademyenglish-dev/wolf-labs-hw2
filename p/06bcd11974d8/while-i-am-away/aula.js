/* ============================================================
   WHILE I AM AWAY · THE LIVE CAMERAS · LIVE CLASS      05/10/2026
   Main series A1 · I feed (todo dia) × I am feeding (agora) · os dois
   pedaços (be + -ing) · o que a câmera não filma (want, need, know, see)
   · What do you do? × What are you doing?
   O MUNDO: o aluno toma conta da fazenda da Marta. Quatro câmeras AO
   VIVO (o selo pisca, o relógio anda, a chuva cai) e a página na
   geladeira com a rotina. No terceiro dia, as respostas do outro
   caseiro denunciam: ele copiou a página e nunca esteve lá.
   O relatório final é escrito, com o corretor ("He feeding").
   Motor comum: kit/motor.js.
   Mantido da aula antiga: os quinze áudios (Marta, os relatos e o
   terceiro dia), as sete fotos da fazenda e o mistério.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'portao' },
  { k: 'voce', est: 'o', min: 7, img: 'cozinha', rot: 'I · You, Live', t: 'Before the farm: you, every day and right now.', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'cameras', est: 'f', min: 6, img: 'cavalos', rot: 'II · Four Cameras, One Page', t: 'The page on the fridge says what happens every day. The cameras show what is happening now.', p: 'Play Marta’s message. Open a camera. Send each line to NOW or EVERY DAY. Then say it.' },
  { k: 'gx', est: 'f', min: 4, img: 'galinhas', rot: 'III · Two Pieces', t: 'The live caption, in blocks.', p: 'Read the blocks out loud. Notice the two pieces. Then build a caption and say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'estabulo', rot: 'IV · Two Presents', t: 'Every day is one piece. Now is two pieces.', p: 'Read the cards out loud. Then fix the four traps.' },
  { k: 'monta', est: 'f', min: 6, img: 'galinhas', rot: 'V · The Live Caption', t: 'Every live caption needs two pieces: BE and -ing.', p: 'Pick BE. Then the verb. Then read the caption out loud.' },
  { k: 'relatos', est: 'l', min: 7, img: 'cozinha', rot: 'VI · The First Reports', t: 'Marta is on the train. The voice messages arrive.', p: 'Play a message. Is he talking about NOW, or EVERY DAY? Then say it back.' },
  { k: 'dia3', est: 'l', min: 7, img: 'chuva', rot: 'VII · Day Three', t: 'Day three. Marta asks the same question six times.', p: 'Play his answer. Is he really there, looking at the farm?' },
  { k: 'chamada', est: 'o', min: 7, extra: 1, img: 'cozinha', rot: 'VIII · The Video Call', t: 'A video call with the owner. Then swap.', p: 'First you are the house-sitter. Then you are the owner. Answer and ask out loud.' },
  { k: 'fim', est: 'w', min: 6, img: 'portao', rot: 'IX · Your Report', t: 'Your report to Marta, live from the farm.', p: 'Write five lines: what is happening now, and what you do every day. The red line watches the two pieces. It goes to your My notes.' }
];

/* I · você, ao vivo */
var VOCE = [
  { k: 'EVERY DAY', q: 'What do you do at six in the evening?', fup: 'Do you do the same on Sundays?', st: ['At six I usually …', 'Every day I …'], ex: 'At six I usually cook dinner. On Sundays I don’t: we eat out.' },
  { k: 'RIGHT NOW', q: 'What are you doing right now, besides this class?', fup: 'What can you see from your chair?', st: ['I’m …ing.', 'I’m drinking …'], ex: 'I’m drinking coffee and sitting on my bed. I can see the window.' },
  { k: 'AT HOME', q: 'Is anybody at home with you? What are they doing?', fup: 'What do they usually do at this time?', st: ['My … is …ing.', 'Nobody. I’m alone.'], ex: 'My wife is watching TV. She usually reads at this time.' },
  { k: 'ANIMALS', q: 'Do you have an animal? What is it doing now?', fup: 'Where does it sleep every night?', st: ['My dog is …ing.', 'No, I don’t.'], ex: 'Yes, a cat. She’s sleeping on the sofa. She sleeps in the kitchen every night.' }
];

/* II · as quatro câmeras: o que acontece AGORA e a linha da página */
var CAMS = [
  { k: 'STABLE', img: 'cavalos', agora: 'The horses are eating.', dia: 'The horses eat at six.', pg: '6:00 AM' },
  { k: 'YARD', img: 'galinhas', agora: 'The chickens are walking in the yard.', dia: 'The chickens walk in the yard every morning.', pg: 'EVERY MORNING' },
  { k: 'BARN', img: 'chuva', agora: 'It is raining now.', dia: 'It rains a lot here in April.', pg: 'APRIL', chuva: 1 },
  { k: 'GATE', img: 'portao', agora: 'I am walking to the gate.', dia: 'The gate closes at nine every night.', pg: '9:00 PM' }
];

/* IV · a legenda ao vivo */
var MONTA = [
  { su: 'He', be: 'is', v: 'feed', fim: 'the horses', img: 'cavalos' },
  { su: 'I', be: 'am', v: 'close', ing: 'closing', fim: 'the gate', img: 'portao', d: 'close → closing: the E goes.' },
  { su: 'The chickens', be: 'are', v: 'walk', fim: 'in the yard', img: 'galinhas' },
  { su: 'It', be: 'is', v: 'rain', fim: 'again', img: 'chuva' },
  { su: 'The dog', be: 'is', v: 'sleep', fim: 'in the kitchen', img: 'cozinha' },
  { su: 'We', be: 'are', v: 'wait', fim: 'for the rain', img: 'chuva' },
  { su: 'She', be: 'is', v: 'drive', ing: 'driving', fim: 'to town', img: 'portao', d: 'drive → driving: the E goes.' },
  { su: 'They', be: 'are', v: 'run', ing: 'running', fim: 'to the stable', img: 'estabulo', d: 'run → running: double N.' }
];
function ingDe(x) { return x.ing || x.v + 'ing'; }
function sDe(x) { return x.v + 's'; }

/* V · os primeiros relatos */
var RELATOS = [
  { au: 'r1.mp3', t: 'I am feeding the horses now.', k: 'agora' },
  { au: 'r2.mp3', t: 'I feed the chickens at seven.', k: 'dia' },
  { au: 'r3.mp3', t: 'It is raining here.', k: 'agora' },
  { au: 'r4.mp3', t: 'The dog sleeps in the kitchen.', k: 'dia' },
  { au: 'r5.mp3', t: 'I am closing the gate now.', k: 'agora' },
  { au: 'r6.mp3', t: 'The horses drink water twice a day.', k: 'dia' }
];

/* VI · o terceiro dia */
var DIA3 = [
  { au: 'd1.mp3', t: 'I am cleaning the stable.', la: 1, pq: 'BE + -ing. He can see it happening.' },
  { au: 'd2.mp3', t: 'I feed the horses at six.', la: 0, pq: 'She asks about NOW. He answers with the page: a routine.' },
  { au: 'd3.mp3', t: 'I see a fox near the gate.', la: 1, pq: 'No -ing, and still live: a camera can’t film “see”, so it never takes -ing.' },
  { au: 'd4.mp3', t: 'I close the gate every night.', la: 0, pq: '“Every night”: that’s the page, not the farm.' },
  { au: 'd5.mp3', t: 'I need more hay.', la: 1, pq: 'No -ing, and live: “need” never takes -ing.' },
  { au: 'd6.mp3', t: 'I clean the stable in the morning.', la: 0, pq: 'Same verb as message one, but now it’s a routine.' }
];
var PARES = [['I feed the horses at six.', 'The horses eat at six.'], ['I clean the stable in the morning.', 'Clean the stable in the morning.'], ['I close the gate every night.', 'The gate closes at nine every night.']];

/* VII · a chamada */
var CHAMADA = [
  { q: '<span class="papel-r">THE OWNER ASKS</span> Hi! What are you doing right now?', fup: 'And the animals? What are they doing?', st: ['I’m …ing.', 'The horses are …ing.'], ex: 'I’m drinking coffee in the kitchen. The horses are eating hay.' },
  { q: '<span class="papel-r">THE OWNER ASKS</span> What time do you feed the chickens?', fup: 'And what do you do after that?', st: ['I feed them at …', 'Every morning I …'], ex: 'I feed them at seven, every morning. After that, I clean the stable.' },
  { q: '<span class="papel-r">THE OWNER ASKS</span> Is it raining there now?', fup: 'What do you need from town?', st: ['Yes, it’s raining.', 'No, it isn’t.', 'I need …'], ex: 'No, it isn’t raining. The sun is shining. I need more hay.' },
  { q: '<span class="papel-r">NOW YOU ARE THE OWNER</span> Ask me what I’m doing right now.', fup: 'Now ask me what I do every evening.', st: ['What are you doing right now?', 'What do you do every evening?'], ex: 'What are you doing right now? And what do you do every evening?' },
  { q: '<span class="papel-r">YOU ARE THE OWNER</span> Ask me about the dog: now, and every night.', fup: 'Catch me: ask “Are you really there?”', st: ['What is the dog doing?', 'Where does the dog sleep?'], ex: 'What is the dog doing now? Where does it sleep every night? Are you really there?' }
];

/* ---------- o corretor (nível 1: a regra desta aula) ---------- */
var NAO_ING = /^(thing|something|nothing|anything|everything|king|ring|sing|bring|spring|string|swing|wing|sting|morning|evening|building|ceiling|during|ping)$/;
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:i|you|he|she|it|we|they) (\w{3,}ing)\b/g, m, 1, 'Two pieces: he IS feeding, I AM closing.', function (x) { return !NAO_ING.test(x[1]); }));
  out = out.concat(A(/\bthe (?:horses?|chickens?|dog|dogs|cat|cats|cows?|animals?|farmer|kids?) (\w{3,}ing)\b/g, m, 1, 'Two pieces: the horses ARE eating.', function (x) { return !NAO_ING.test(x[1]); }));
  out = out.concat(A(/\b(?:am|is|are|i'm|you're|we're|they're|he's|she's|it's) (feed|work|clean|walk|eat|drink|cook|sleep|wait|carry|run|drive|play|watch|read|write|go|come|help|look|wash|feeds|works|cleans|walks|eats|drinks|sleeps|rains)\b/g, m, 1, 'BE + -ing (I am feeding), or no BE (I feed).'));
  out = out.concat(A(/\b(?:am|is|are|'m|'re|he's|she's|it's) (wanting|needing|knowing|understanding|seeing|liking|hating|preferring|believing)\b/g, m, 1, 'A camera can’t film it: I want, I need, I see. No -ing.'));
  out = out.concat(A(/\b(?:am|is|are|'m|'re) \w+ing\b[^.!?]*?\b(every (?:day|night|morning|evening|week)|usually|always|twice a day)\b/g, m, 1, 'Every day = the page: I feed the horses every day.'));
  out = out.concat(A(/(?<!\b(?:does|doesn't|did|didn't|can|can't|will|won't|to|should|must) )\b(?:he|she|it) (feed|eat|drink|sleep|walk|clean|work|need|want|know|like|rain|close|open|live|have)\b/g, m, 1, 'He, she, it: add S. He feeds, it rains.'));
  return out;
};

/* ---------- o estado (o mesmo dos dois lados) ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, cam: { sel: -1, poe: {}, err: {} }, mt: { n: 0, be: '', vf: '', err: '' },
  re: { n: 0, esc: '' }, d3: { n: 0, esc: -1, foi: {} }, chamada: { n: 0, foi: {} } };

/* ---------- pedaços de desenho ---------- */
function camera(c, i, grande) {
  return '<div class="cam' + (grande ? ' grande' : '') + (c.chuva ? ' chove' : '') + '"><i style="background-image:url(' + img(c.img) + ')"></i>'
    + '<span class="vivo"><b></b>LIVE</span><span class="tc">CAM ' + (i + 1) + ' · ' + c.k + ' · <em class="hora-cam">--:--:--</em></span></div>';
}
var RE_PASSO = null;
function relogioCam() { var d = new Date(), t = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2); [].forEach.call(document.querySelectorAll('.hora-cam'), function (e) { e.textContent = t; }); }
if (document.querySelectorAll) setInterval(relogioCam, 1000);
window.depoisDePintar = function () { relogioCam(); };

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE LIVE CAMERAS · A1</span><h1>While I Am <b>Away</b></h1>'
    + '<p class="sub">Marta leaves her farm for a week. You look after it. The page on the fridge says what happens every day. The cameras show what is happening now.</p>'
    + '<div class="chipsx"><span class="pilula">I feed · I am feeding</span><span class="pilula">am · is · are + -ing</span><span class="pilula">want · need · see</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Go live</button>' + faixaLive() + '</div>'
    + '<div class="mosaico">' + CAMS.map(function (c, i) { return camera(c, i); }).join('') + '</div></div>';
};
R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };
R.cameras = function (c) {
  var s = S.cam, voz = '<div class="toca-linha vd marta">' + tocar('m-sai.mp3') + '<span><small>MARTA, LEAVING</small>' + transcricao('m-sai.mp3', '“Right. The page is on the fridge. I know, I know. It is a long list. Just send me a message every day. Tell me what is happening.”') + '</span></div>';
  var feitas = CAMS.filter(function (_, i) { return s.poe[i + 'a'] && s.poe[i + 'd']; }).length;
  if (s.sel < 0) return cab(c) + voz + '<div class="grade-cam">' + CAMS.map(function (x, i) { return '<button type="button" class="abre-cam' + (s.poe[i + 'a'] && s.poe[i + 'd'] ? ' feita' : '') + '" data-a="cam" data-n="' + i + '">' + camera(x, i) + '</button>'; }).join('') + '</div><p class="dica-aluno" style="text-align:center">' + (feitas ? feitas + ' of 4 cameras done. ' : '') + 'Tap a camera.</p>';
  var x = CAMS[s.sel], linhas = ordem([['a', x.agora], ['d', x.dia]], s.sel);
  var cartas = linhas.map(function (l) {
    var k = s.sel + l[0], foi = s.poe[k], err = s.err[k];
    return '<div class="linha-rel vd' + (foi ? ' ok' : '') + (err ? ' errou' : '') + '"><p>' + l[1] + '</p>'
      + (foi ? '<span class="selo-col ' + (l[0] === 'a' ? 'now' : 'day') + '">' + (l[0] === 'a' ? 'NOW · THE CAMERA' : 'EVERY DAY · THE PAGE') + '</span>'
        : '<div class="cols"><button type="button" class="pilula col-now" data-a="poe-col" data-v="' + k + ':a">NOW · camera</button><button type="button" class="pilula col-day" data-a="poe-col" data-v="' + k + ':d">EVERY DAY · page</button></div>'
          + (err ? '<p class="recusa mini">' + (l[0] === 'a' ? 'BE + -ing: it’s happening on the camera, right now.' : 'A plain verb and a time: it’s on the page. Every day.') + '</p>' : ''))
      + '</div>';
  }).join('');
  var ambas = s.poe[s.sel + 'a'] && s.poe[s.sel + 'd'];
  return cab(c) + '<div class="mesa-cam">' + camera(x, s.sel, 1) + '<div class="lado-cam"><div class="pagina-mini"><small>THE PAGE ON THE FRIDGE</small><b>' + x.pg + '</b></div>' + cartas
    + (ambas ? '<p class="aprova">GOT IT. Now say both out loud: the camera, then the page.</p>' : '')
    + '<div class="mini-cams">' + CAMS.map(function (y, i) { return '<button type="button" class="pilula' + (i === s.sel ? ' on' : '') + (s.poe[i + 'a'] && s.poe[i + 'd'] ? ' feita' : '') + '" data-a="cam" data-n="' + i + '">CAM ' + (i + 1) + '</button>'; }).join('') + '</div></div></div>';
};
R.regra = function (c) {
  var cartoes = '<div class="cartoes">'
    + '<div class="cr vd"><small>1 · THE PAGE · EVERY DAY</small><h3>one piece: <em>I feed · he feeds</em></h3><div class="ex"><span>The horses <u>eat</u> at six.</span><span>It <u>rains</u> in April.</span></div></div>'
    + '<div class="cr vd"><small>2 · THE CAMERA · NOW</small><h3>two pieces: <em>am / is / are + -ing</em></h3><div class="ex"><span>The horses <u>are eating</u>.</span><span>It <u>is raining</u> now.</span></div></div>'
    + '<div class="cr vd"><small>3 · THE CAMERA CAN’T FILM IT</small><h3><em>want · need · know · see</em>: no -ing</h3><div class="ex"><span>I <u>need</u> more hay.</span><span>I <u>see</u> a fox.</span></div></div>'
    + '<div class="cr vd"><small>4 · TWO QUESTIONS</small><h3>job: <em>What do you do?</em> now: <em>What are you doing?</em></h3><div class="ex"><span>I’m a nurse. / I’m washing the dishes.</span></div></div></div>';
  return cab(c) + cartoes + armas([
    ['ONE PIECE MISSING', 'He feeding the horses.', 'He is feeding the horses.', 'Now = two pieces: BE + -ing.'],
    ['THE OTHER PIECE', 'I am work every day.', 'I work every day.', 'Every day = one piece, no BE.'],
    ['THE CAMERA CAN’T', 'I am wanting a coffee.', 'I want a coffee.', 'You can’t film “want”. No -ing.'],
    ['HE, SHE, IT', 'He feed the horses at six.', 'He feeds the horses at six.', 'Every day + he/she/it: add S.']], 'THE FOUR TRAPS · TAP TO FIX');
};
R.monta = function (c) {
  var m = S.mt, n = m.n, fim = n >= MONTA.length, x = MONTA[Math.min(n, MONTA.length - 1)];
  if (fim) return cab(c) + trilha(MONTA, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT LIVE CAPTIONS</small><h2>Not one piece missing: BE, and the verb with -ing.</h2></div></div>';
  var beOk = m.be === x.be, tudo = beOk && m.vf === ingDe(x);
  var legenda = '<b>' + x.su + '</b> <span class="slot' + (m.be ? (beOk ? ' cheio' : ' errado') : '') + '">' + (m.be || 'BE') + '</span> <span class="slot' + (m.vf ? (tudo ? ' cheio' : ' errado') : '') + '">' + (m.vf || 'VERB') + '</span> ' + x.fim + '.';
  var tela = '<div class="cam grande legenda-cam' + (x.img === 'chuva' ? ' chove' : '') + '"><i style="background-image:url(' + img(x.img) + ')"></i><span class="vivo"><b></b>LIVE</span><span class="tc">CAPTION ' + (n + 1) + ' OF ' + MONTA.length + ' · <em class="hora-cam">--:--:--</em></span><div class="cap">' + legenda + '</div></div>';
  var lado;
  if (tudo) lado = '<p class="aprova">GOT IT. “' + x.su + ' ' + x.be + ' ' + ingDe(x) + ' ' + x.fim + '.”' + (x.d ? ' ' + x.d : '') + ' Read it out loud.</p><div><button type="button" class="btn" data-a="mt-prox">Next caption</button></div>';
  else {
    var vs = ordem([x.v, sDe(x), ingDe(x)], n);
    lado = '<div class="diz"><h5>1 · BE</h5></div><div class="pecas-be">' + ['am', 'is', 'are'].map(function (b) { return '<button type="button" class="peca' + (m.be === b ? (beOk ? ' ok' : ' errado') : '') + '" data-a="mt-be" data-v="' + b + '">' + b + '</button>'; }).join('') + '</div>'
      + '<div class="diz"><h5>2 · THE VERB</h5></div><div class="pecas-be">' + vs.map(function (v) { return '<button type="button" class="peca' + (m.vf === v ? ' errado' : '') + '" data-a="mt-v" data-v="' + v + '"' + (beOk ? '' : ' disabled') + '>' + v + '</button>'; }).join('') + '</div>'
      + (m.err ? '<p class="recusa">' + m.err + '</p>' + mostra('mt' + n, x.su + ' ' + x.be + ' ' + ingDe(x) + ' ' + x.fim + '.') : '<p class="dica-aluno">Who is it? One person, you, or more?</p>');
  }
  return cab(c) + trilha(MONTA, n) + '<div class="mesa-cam">' + tela + '<div class="lado-cam">' + lado + '</div></div>';
};
R.relatos = function (c) {
  var r = S.re, n = r.n, fim = n >= RELATOS.length, x = RELATOS[Math.min(n, RELATOS.length - 1)];
  var chat = '<div class="fone vd"><div class="fone-top"><b>Farm · house-sitter</b><small>voice messages</small></div><div class="fone-msgs">' + RELATOS.slice(0, Math.min(n + 1, RELATOS.length)).map(function (y, i) {
    var aberta = i < n || (i === n && r.esc === y.k);
    return '<div class="nota-voz' + (i === n && !fim ? ' agora' : '') + '">' + tocar(y.au) + '<span>' + (aberta ? y.t : 'Voice message · 0:0' + (3 + i % 3)) + '</span>' + (aberta ? '<em class="' + (y.k === 'agora' ? 'now' : 'day') + '">' + (y.k === 'agora' ? 'NOW' : 'EVERY DAY') + '</em>' : '') + '</div>';
  }).join('') + '</div></div>';
  var lado;
  if (fim) lado = '<div class="pergunta vd"><small>SIX MESSAGES</small><h2>Every message tells you where he is: on the farm, or on the page.</h2></div>';
  else {
    var certo = r.esc === x.k;
    lado = '<div class="pergunta vd ja"><small>MESSAGE ' + (n + 1) + ' OF ' + RELATOS.length + '</small><h2>Play it. Now, or every day?</h2></div>'
      + (certo ? '<p class="aprova">GOT IT. “' + x.t + '” ' + (x.k === 'agora' ? 'BE + -ing: happening now.' : 'A plain verb and a time: a routine.') + ' Say it back.</p><div><button type="button" class="btn" data-a="re-prox">Next message</button></div>'
        : '<div class="veredito">' + [['agora', 'NOW'], ['dia', 'EVERY DAY']].map(function (o) { return '<button type="button" class="btn' + (r.esc === o[0] ? ' errado' : '') + '" data-a="re" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
          + (r.esc ? '<p class="recusa">Listen again: am / is + -ing, or a plain verb?</p>' + mostra('re' + n, '“' + x.t + '” → ' + (x.k === 'agora' ? 'NOW' : 'EVERY DAY')) : ''));
  }
  return cab(c) + trilha(RELATOS, n) + '<div class="mesa-cam">' + chat + '<div class="lado-cam">' + lado + '</div></div>';
};
R.dia3 = function (c) {
  var d = S.d3, n = d.n, fim = n >= DIA3.length, x = DIA3[Math.min(n, DIA3.length - 1)];
  var pergunta = '<div class="toca-linha vd marta">' + tocar('m-ask.mp3') + '<span><small>MARTA, DAY THREE · SIX TIMES</small>' + transcricao('m-ask.mp3', '“What are you doing right now?”') + '</span></div>';
  if (fim) {
    return cab(c) + '<div class="revela"><div class="pares vd"><small>HIS REPORTS · HER PAGE</small>' + PARES.map(function (p) { return '<div class="par"><span>' + p[0] + '</span><b>' + p[1] + '</b></div>'; }).join('') + '</div>'
      + '<div class="prova vd"><i style="background-image:url(' + img('estabulo') + ')"></i><p>Six in the morning on day three. The buckets are still full.</p></div></div>'
      + '<div class="revela"><div class="toca-linha vd">' + tocar('m-fim.mp3') + '<span><small>MARTA, BACK HOME</small>Play it. What does she say?</span></div>'
      + follow('FOLLOW-UP', 'So, is he there? How do you know?', ['He isn’t there.', 'He copied the page.', 'He answered with routines.'], [], 'd3f', mostra('d3f', 'He is never there. He just copies her page: three answers are routines, not live. And the buckets are still full.')) + '</div>';
  }
  var certo = d.esc === x.la;
  var lista = '<div class="fone vd"><div class="fone-top"><b>Day three</b><small>his answers</small></div><div class="fone-msgs">' + DIA3.slice(0, n + 1).map(function (y, i) {
    var aberta = i < n || (i === n && certo);
    return '<div class="nota-voz' + (i === n ? ' agora' : '') + '">' + tocar(y.au) + '<span>' + (aberta ? y.t : 'Voice message') + '</span>' + (aberta ? '<em class="' + (y.la ? 'now' : 'nao') + '">' + (y.la ? 'THERE' : 'NOT THERE') + '</em>' : '') + '</div>';
  }).join('') + '</div></div>';
  var lado = (certo ? '<p class="aprova">GOT IT. “' + x.t + '” ' + x.pq + '</p><div><button type="button" class="btn" data-a="d3-prox">Next answer</button></div>'
    : '<div class="veredito">' + [[1, 'HE IS THERE · live'], [0, 'NOT THERE · the page']].map(function (o) { return '<button type="button" class="btn' + (d.esc === o[0] ? ' errado' : '') + '" data-a="d3" data-n="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
      + (d.esc >= 0 ? '<p class="recusa">Read it again: is it the camera, or the page?</p>' + mostra('d3' + n, '“' + x.t + '” → ' + (x.la ? 'THERE. ' : 'NOT THERE. ') + x.pq) : '<p class="dica-aluno">Play his answer first.</p>'));
  return cab(c) + pergunta + trilha(DIA3, n) + '<div class="mesa-cam">' + lista + '<div class="lado-cam">' + lado + '</div></div>';
};
R.chamada = function (c) { return '<div class="chamada-moldura">' + sequencia(c, CHAMADA, S.chamada, 'chamada', 'Two calls, two presents, and the camera never lied.') + '</div>'; };
R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Hi Marta! It is raining now.\nThe horses are eating hay.\nI feed the chickens at seven every day.', 'Your report',
    ['Hi Marta! ', 'Right now ', 'is raining', 'are eating', 'I am ', 'every day', 'I need '], ['YOUR LIVE REPORT', 'Five lines to Marta: three things happening now, two things you do every day.'])
    + '<div class="lado-fim"><div class="grande vd"><span><b>I feed</b> · every day</span><span><b>I am feeding</b> · now</span><span><b>I need</b> · no -ing</span><small>Every day: one piece (he feeds). Now: two pieces (he is feeding). And the camera can’t film want, need, know, see.</small></div>'
    + mostra('fim', 'Hi Marta! It is raining now.<br>The horses are eating hay in the stable.<br>I am closing the gate.<br>I feed the chickens at seven every day.<br>The dog sleeps in the kitchen. I need more hay!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- os toques desta aula ---------- */
TOQUES.cam = function (b, n) { S.cam.sel = n; };
TOQUES['poe-col'] = function (b, n, v) {
  var p = v.split(':'), k = p[0], certo = k.slice(-1) === p[1];
  if (certo) { S.cam.poe[k] = 1; S.cam.err[k] = 0; } else S.cam.err[k] = 1;
};
TOQUES['mt-be'] = function (b, n, v) { var m = S.mt, x = MONTA[m.n]; if (!x) return false; m.be = v; m.vf = ''; m.err = v === x.be ? '' : 'Count the people: I → am, one → is, more → are.'; };
TOQUES['mt-v'] = function (b, n, v) { var m = S.mt, x = MONTA[m.n]; if (!x || m.be !== x.be) return false; m.vf = v; m.err = v === ingDe(x) ? '' : 'After BE, the verb takes -ing.'; };
TOQUES['mt-prox'] = function () { S.mt = { n: S.mt.n + 1, be: '', vf: '', err: '' }; };
TOQUES.re = function (b, n, v) { var x = RELATOS[S.re.n]; if (!x || S.re.esc === x.k) return false; S.re.esc = v; };
TOQUES['re-prox'] = function () { S.re = { n: S.re.n + 1, esc: '' }; };
TOQUES.d3 = function (b, n) { var x = DIA3[S.d3.n]; if (!x || S.d3.esc === x.la) return false; S.d3.esc = n; };
TOQUES['d3-prox'] = function () { S.d3.n++; S.d3.esc = -1; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'The farm, in blocks. Each block has a job.',
  frases: [
    { b: [['I', 'WHO'], ['feed', 'ACTION'], ['the horses', 'WHAT'], ['at six', 'WHEN']], d: 'Every day: one piece.' },
    { b: [['I', 'WHO'], ['am', 'BE', 'aux'], ['feeding', 'ACTION + ING', 'acao'], ['the horses', 'WHAT'], ['now', 'WHEN']], d: 'Right now: two pieces, BE and -ing.' },
    { b: [['The chickens', 'WHO'], ['are', 'BE', 'aux'], ['eating', 'ACTION + ING', 'acao'], ['by the barn', 'WHERE']], d: 'More than one: are.' }
  ],
  nota: 'Right now needs <b>two pieces</b>: <b>am / is / are</b> + the verb with <b>-ing</b>. Every day needs one: I feed. Never “I feeding” and never “I am feed”.',
  monta: { p: 'Build the live caption for the camera. Then say it.', pecas: [['is', 'BE', 'aux'], ['eating', 'ACTION + ING', 'acao'], ['The horse', 'WHO'], ['hay', 'WHAT']], ordem: [2, 0, 1, 3], outras: [] },
  uso: { p: 'Your turn. Look around you. What is happening right now? Say two sentences with am, is or are.', molde: ['I am …-ing', 'My … is …-ing'], ex: 'I am talking to my teacher. My dog is sleeping on the sofa.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
