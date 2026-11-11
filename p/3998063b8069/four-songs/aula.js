/* ============================================================
   FOUR SONGS · THE RECORD PLAYER · LIVE CLASS  06/10/2026
   Main series A2 · it reminds me of + noun · remember × remind · sounds
   like + noun × sounds + adjective · I feel like + -ing / a noun
   O MUNDO (da aula velha): quatro vozes, quatro canções; um laboratório
   (a segunda onda de músicas dos pais); a trilha sonora do aluno. A CARA:
   um TOCA-DISCOS em CSS (disco preto, agulha que desce a cada frase certa,
   o disco gira na terceira).
   ÁUDIOS (faster-whisper): batem com a transcrição velha (números por
   extenso). Os áudios dizem "makes me" às vezes; a aula não cobra isso.
   Fila: FILA-LIVE-386.md · 050.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 10
   páginas. A auditoria: 26 rodadas de escolher entre frases quase iguais
   (II, IV, V, VI) e respostas abertas com "check" (VIII). Agora: II depois de
   cada voz, perguntas de SENTIDO e a frase modelo (FM.escolhe); III o bilhete
   dentro do disco → a regra (FM.carta); IV seis faixas faladas + Check, a
   agulha desce (FM.fala); V certo ou errado + dizer certo (sounds / sounds
   like); VI montar a pergunta e entrevistar o professor (FM.pergunta); VIII
   verdadeiro ou falso depois de ouvir. IX deixa de ser EXTRA. Nenhuma letra
   de música na tela (são vozes falando de canções).
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'fundo' },
  { k: 'abre', est: 'o', min: 7, img: 'carro', rot: 'I · The First Song', t: 'One song you know by heart.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'vozes', est: 'l', min: 7, img: 'cozinha', rot: 'II · Four Voices', t: 'Four people, four songs.', p: 'Tap a voice. Listen first. Then tap the answers and say the sentence out loud.' },
  { k: 'gx', est: 'f', min: 4, img: 'cozinha', rot: 'III · Sounds Like or Sounds?', t: 'Two ways to say what a song is like.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new songs.' },
  { k: 'regra', est: 'f', min: 7, img: 'fundo', rot: 'IV · The Note', t: 'A note inside an old record.', p: 'Read the note out loud. Tap the words about songs and feelings. Then finish the rule.' },
  { k: 'discos', est: 'f', min: 6, img: 'fundo', rot: 'V · Six Tracks', t: 'Every right sentence brings the needle down.', p: 'Read the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'som', est: 'f', min: 6, img: 'carro', rot: 'VI · Sounds, or Sounds Like?', t: 'One question decides it: adjective, or noun?', p: 'Read each line out loud. Right or wrong? If it’s wrong, say it right.' },
  { k: 'lembra', est: 'f', min: 6, img: 'cozinha', rot: 'VII · Remember or Remind', t: 'The song does it, not you. Now ask your teacher.', p: 'Build each question out loud. Tap Check. Then ask it, and listen to the answer.' },
  { k: 'lab', est: 'l', min: 7, extra: 1, img: 'fundo', rot: 'VIII · The Lab', t: 'Some of your songs are not yours.', p: 'Listen first. Then say which result surprised the scientists.' },
  { k: 'ela', est: 'l', min: 7, extra: 1, img: 'carro', rot: 'IX · Two More Stories', t: 'Two more people. Two different reasons.', p: 'Listen first. Then tap True or False. If it’s false, say the truth.' },
  { k: 'trilha', est: 'o', min: 7, img: 'fundo', rot: 'X · Your Soundtrack', t: 'The soundtrack of your life, in four tracks.', p: 'For each track: name a song, answer, then the follow-up.' },
  { k: 'fim', est: 'w', min: 6, img: 'fundo', rot: 'XI · Side B', t: 'Write your four tracks.', p: 'Reminds me of, sounds like, sounds, feel like. The red line watches the small words. It goes to your My notes.' }
];

var TR = {
  'voz1.mp3': 'There is one song from my first job. The bass starts and my shoulders move before I decide. It makes me walk faster. I put it on when the kitchen is a mess. Twenty minutes later, the kitchen is clean. It does not make me happy exactly. It makes me move.',
  'voz2.mp3': 'My song is very slow. Piano and a woman singing in a language I do not speak. I do not know what the words mean. It makes me feel calm and a little sad at the same time. My wife says it makes me quiet. She is right. I play it in the car, alone.',
  'voz3.mp3': 'This one is not my music. My father played it every Sunday morning. He sang it badly, in the kitchen, with the window open. Now I am twenty-four and I live far away. When it starts, it reminds me of that kitchen. Not of him, of the kitchen. That is strange, right?',
  'voz4.mp3': 'There is a song I cannot listen to anymore. It was on in the car on a very bad day, ten years ago. Nothing is wrong with the song. It is a good song. But it makes me feel that day again. So I skip it. Ten seconds is enough.',
  'ela.mp3': 'I am sixty-three. There is a song from a wedding in 1982. It was not my wedding. I danced with a man I never saw again. Every time it plays, I am twenty again for three minutes. Then it stops, and I am sixty-three, and that is fine.',
  'ele.mp3': 'I train with the same song every morning. Not because I love it. I do not love it. It has 140 beats, and my legs like that number. It makes me run four minutes longer. My girlfriend hates it. I do not care.',
  'lab.mp3': 'Sixty-two students listened to hits from 1955 to 2009. They knew the songs from their own twenties. That was expected. Then a second peak appeared, and nobody expected it. The music their parents were young with. Years these students never lived. Some of your songs are not yours. You got them from somebody.'
};

var ABRE = [
  { k: 'A PERSON', q: 'Name a song that reminds you of someone. Who?', fup: 'Why that person?', st: ['It reminds me of …'], ex: 'An old samba. It reminds me of my grandfather.' },
  { k: 'THE SOUND', q: 'What does that song sound like? Describe it.', fup: 'Fast or slow?', st: ['It sounds …', 'It sounds like …'], ex: 'It sounds happy. It sounds like a Sunday lunch.' },
  { k: 'WHEN?', q: 'When do you feel like listening to it?', fup: 'And what do you feel like doing?', st: ['When I feel like …'], ex: 'When I feel like cooking, I play it loud.' }
];
var FORMAS = [{ k: 'rem', t: 'REMINDS ME OF' }, { k: 'fl', t: 'FEEL LIKE + -ING' }, { k: 'semof', t: 'REMINDS ME (NO OF) / REMEMBERS ME', erro: 1 }, { k: 'likeadj', t: 'SOUNDS LIKE + ADJECTIVE', erro: 1 }];

var VOZES = [
  { au: 'voz1.mp3', quem: 'THE FIRST VOICE', ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'When does she play it?', o: ['in the car, alone', 'when the kitchen is a mess', 'on Sunday morning'], c: 1 },
    { p: 'What does the song do to her?', o: ['It makes her sad.', 'It makes her sleep.', 'It makes her move.'], c: 2, d: 'Say it: <b>She feels like cleaning the kitchen.</b>' }
  ] } },
  { au: 'voz2.mp3', quem: 'THE SECOND VOICE', ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'What is his song like?', o: ['fast, with drums', 'loud, with a guitar', 'slow, with piano'], c: 2 },
    { p: 'How does it make him feel?', o: ['calm and a little sad', 'happy and loud', 'angry'], c: 0, d: 'Say it: <b>It sounds calm and a little sad.</b>' }
  ] } },
  { au: 'voz3.mp3', quem: 'THE THIRD VOICE', ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'Who played the song?', o: ['her mother', 'her father', 'her brother'], c: 1 },
    { p: 'What does it remind her of?', o: ['her father', 'the kitchen', 'her school'], c: 1, d: 'Not of him: of the kitchen. Say it: <b>It reminds her of the kitchen.</b>' }
  ] } },
  { au: 'voz4.mp3', quem: 'THE FOURTH VOICE', ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'Is it a bad song?', o: ['Yes, it is.', 'No, it’s a good song.'], c: 1 },
    { p: 'Why does he skip it?', o: ['It is too long.', 'A very bad day.', 'His wife hates it.'], c: 1, d: 'Say it: <b>It reminds him of a very bad day.</b>' }
  ] } }
];

/* 22/10/2026 · III o bilhete dentro do disco do pai (da terceira voz) → a regra */
var CARTA = { de: 'A note inside an old record',
  txt: 'Dad, I found your old record today! It [[reminds me of]] your kitchen on Sunday mornings. I [[remember]] the open window and your terrible singing. The first song [[sounds like]] a summer party. The second one [[sounds]] slow and a little sad. Now I [[feel like calling]] you. Do you [[feel like]] a visit next Sunday?',
  assina: 'Your daughter' };
var REGRA = [
  { a: 'The song does it: it ', par: ['reminds', 'remembers'], c: 0, b: ' me of your kitchen.' },
  { a: 'I do it: I ', par: ['remind', 'remember'], c: 1, b: ' the window.' },
  { a: 'It reminds me ', par: ['of', 'to'], c: 0, b: ' a person, a place, a time.' },
  { a: 'sounds like + ', par: ['an adjective', 'a noun'], c: 1, b: ' (a summer party)' },
  { a: 'sounds + ', par: ['an adjective', 'a noun'], c: 0, b: ' (slow, sad): no like' },
  { a: 'I feel like ', par: ['call', 'calling'], c: 1, b: ' you · I feel like a visit' }
];
var PRESA = 'it <b>reminds me of</b> + a person, a place<br>I <b>remember</b> (no of)<br>sounds <b>like</b> + a noun<br>sounds + an adjective<br>I feel like + <b>-ing</b> · a noun';

var DISCOS = [
  { pista: 'An old song from your school years. · <b>remind</b>', resp: 'It <b>reminds me of</b> school.', depois: 'What song reminds you of school?' },
  { pista: 'Loud drums, lots of voices. · <b>sound like</b>', resp: 'It <b>sounds like</b> a party.', depois: 'What does your favorite song sound like?' },
  { pista: 'Slow piano, a soft voice. · <b>sound</b>', resp: 'It <b>sounds</b> sad.', depois: 'Do you like sad songs?' },
  { pista: 'The music starts and you want to move. · <b>feel like</b>', resp: 'I <b>feel like dancing</b>.', depois: 'What song makes you feel like dancing?' },
  { pista: 'You hear it and you see a beach. · <b>remind</b>', resp: 'That song <b>reminds me of</b> the beach.', depois: 'What song reminds you of a holiday?' },
  { pista: 'Your friend’s plan for Saturday: karaoke! · <b>sound</b>', resp: 'That <b>sounds</b> great!', depois: 'Do you sing karaoke?' }
];

var SOM = { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Right or wrong? If it’s wrong, say it right.', itens: [
  { f: 'That song sounds amazing.', t: true },
  { f: 'That guitar sounds a train.', t: false, c: 'sounds like a train (a noun)' },
  { f: 'Your idea sounds like perfect.', t: false, c: 'sounds perfect (an adjective)' },
  { f: 'His voice sounds like an old radio.', t: true },
  { f: 'This band sounds like a band from the sixties.', t: true },
  { f: 'The new album sounds like really different.', t: false, c: 'sounds really different (an adjective)' }
] };
var LEMBRA = [
  { p: '(what song · remind you · your childhood)?', r: 'What song <b>reminds you of</b> your childhood?' },
  { p: '(you · remember · your first concert)?', r: 'Do you <b>remember</b> your first concert?' },
  { p: '(what smell · remind you · your grandmother)?', r: 'What smell <b>reminds you of</b> your grandmother?' },
  { p: '(you · remember · the words of your favorite song)?', r: 'Do you <b>remember</b> the words of your favorite song?' },
  { p: '(what place · remind you · your holidays)?', r: 'What place <b>reminds you of</b> your holidays?' }
];
var CASOS = [
  { au: 'ela.mp3', quem: 'SHE IS SIXTY-THREE', ex: { formato: 'verdadeOuMentira', rotulos: ['True', 'False'], titulo: 'True or false?', itens: [
    { f: 'The song is from her own wedding.', t: false, c: 'It was not her wedding.' },
    { f: 'When it plays, she feels twenty again.', t: true },
    { f: 'When it stops, she is sad.', t: false, c: 'She is sixty-three, and that is fine.' }
  ] } },
  { au: 'ele.mp3', quem: 'HE TRAINS EVERY MORNING', ex: { formato: 'verdadeOuMentira', rotulos: ['True', 'False'], titulo: 'True or false?', itens: [
    { f: 'He loves the song.', t: false, c: 'He does not love it. His legs like the 140 beats.' },
    { f: 'It makes him run four minutes longer.', t: true },
    { f: 'His girlfriend likes it too.', t: false, c: 'She hates it.' }
  ] } }
];
var FAIXAS = [
  { n: 'TRACK 1 · CHILDHOOD', q: 'A song from when you were small. What does it remind you of?', st: ['It reminds me of …'], fup: 'Who played it?', ex: 'A cartoon song. It reminds me of Saturday mornings.' },
  { n: 'TRACK 2 · YOUR CITY', q: 'A song that sounds like your city. Why?', st: ['It sounds like …'], fup: 'What does your city sound like at night?', ex: 'A loud funk song. It sounds like my street on Friday.' },
  { n: 'TRACK 3 · GOOD DAYS', q: 'A song for when you feel like dancing.', st: ['When I feel like dancing, I play …'], fup: 'Where do you dance?', ex: 'When I feel like dancing, I play an old disco hit.' },
  { n: 'TRACK 4 · HARD DAYS', q: 'A song for a hard day. What does it sound like?', st: ['It sounds … and it reminds me of …'], fup: 'Do you play it, or skip it?', ex: 'It sounds slow and soft. It reminds me that things change.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, voz: { sel: -1 }, lab: -1, trilha: { n: 0, foi: {} } };

function toca(agulha, gira, rotulo) {
  return '<div class="toca' + (gira ? ' gira' : '') + '"><div class="prato-t"><div class="disco"><span class="rotulo">' + (rotulo || 'SIDE A') + '</span></div></div><div class="braco" style="--a:' + (-28 + agulha * 9) + 'deg"><i></i></div><div class="leds">' + [0, 1, 2].map(function (i) { return '<span class="' + (i < agulha ? 'on' : '') + '"></span>'; }).join('') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE RECORD PLAYER</span><h1>Four <b>Songs</b></h1>'
    + '<p class="sub">Every right sentence brings the needle down. Every record has a memory in it.</p>'
    + '<div class="chipsx"><span class="pilula">reminds me of</span><span class="pilula">sounds like</span><span class="pilula">feel like dancing</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Drop the needle</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-t">' + toca(3, 1) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.vozes = function (c) {
  var e = S.voz, x = e.sel >= 0 ? VOZES[e.sel] : null, fq = S.fq || {};
  var feita = function (i) { var r = fq['voz' + i] && fq['voz' + i].r; return r && VOZES[i].ex.itens.every(function (q, j) { return r[j] === q.c; }); };
  var lista = '<div class="vozes">' + VOZES.map(function (v, i) { return '<button type="button" class="voz vd' + (e.sel === i ? ' on' : '') + (feita(i) ? ' feito' : '') + '" data-a="vz" data-n="' + i + '"><span class="mini-disco"></span><b>' + v.quem + '</b></button>'; }).join('') + '</div>';
  var lado = '<p class="dica-aluno">Tap a voice.</p>';
  if (x) {
    var ouviu = (S.ouviu || {})[x.au];
    lado = '<div class="toca-linha vd">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>' + (ouviu ? FM.ex('voz' + e.sel, x.ex) : '<p class="dica-aluno">Listen first. The questions come after.</p>');
  }
  return cab(c) + '<div class="mesa-m">' + lista + '<div class="lado-l">' + lado + '</div></div>';
};

/* III · o bilhete → a regra */
R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the words about songs and feelings', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

/* IV · seis faixas: a agulha desce a cada duas, o disco gira na sexta */
R.discos = function (c) {
  return cab(c) + FM.fala('discos', DISCOS, {
    rotulo: 'Track', prox: 'Next track', regra: PRESA,
    lado: function (feitas) { return '<div class="vd capa-t" style="width:min(270px,100%);margin:0 auto">' + toca(Math.min(3, Math.floor(feitas / 2)), feitas >= DISCOS.length, feitas >= DISCOS.length ? 'ALL SIX' : 'TRACK ' + Math.min(feitas + 1, DISCOS.length)) + '</div>'; },
    fim: 'Six tracks. The record spins! Now say three of them again, about YOUR songs.'
  });
};

/* V · sounds ou sounds like: achar o erro e dizer certo */
R.som = function (c) {
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('som', SOM) + '</div>' + FM.regra('sounds + an adjective<br><i>It sounds great.</i><br>sounds <b>like</b> + a noun<br><i>It sounds like a train.</i>') + '</div>';
};

/* VI · montar a pergunta e entrevistar o professor */
R.lembra = function (c) {
  return cab(c) + FM.pergunta('lembra', LEMBRA, { regra: PRESA, titulo: 'Build the question. Ask your teacher.', depoisRot: 'Then answer', depois: ['It reminds me of …', 'Yes, I remember …', 'No, I don’t remember.', 'Me too!'] });
};

R.lab = function (c) {
  var ouviu = (S.ouviu || {})['lab.mp3'], esc = S.lab, ops = ordem([['the second one: their parents’ music', 0], ['the first one: their own music', 1], ['both were expected', 2]], 2);
  return cab(c) + '<div class="mesa-m"><div class="lado-l"><div class="toca-linha vd">' + tocar('lab.mp3') + '<div>' + transcricao('lab.mp3', TR['lab.mp3']) + '</div></div>'
    + '<div class="picos vd"><div class="pico"><i style="height:96px"></i><small>PEAK ONE<br>their own twenties</small></div><div class="pico"><i style="height:' + (esc === 0 ? 70 : 8) + 'px"></i><small>PEAK TWO<br>' + (esc === 0 ? 'their parents’ music' : '?') + '</small></div></div></div>'
    + '<div class="lado-l">' + (ouviu ? '<div class="pergunta vd ja"><small>THE QUESTION</small><h2>Which peak did nobody expect?</h2></div><div class="versoes">' + ops.map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="lb" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
      + (esc > 0 ? '<p class="recusa">That one was normal. Listen again.</p>' : '') + (esc === 0 ? '<p class="aprova">They never lived those years. The songs came through somebody else.</p><div class="pede vd"><small>AND YOU?</small><b>Which song reminds you of your parents, even if it isn’t from your time?</b></div>' : '') : '<p class="dica-aluno">Listen first.</p>') + '</div></div>';
};

R.ela = function (c) {
  var fq = S.fq || {}, certas = 0;
  CASOS.forEach(function (x, i) { var r = fq['ela' + i] && fq['ela' + i].r; if (r) x.ex.itens.forEach(function (q, j) { if (r[j] != null && (r[j] === 't') === !!q.t) certas++; }); });
  return cab(c) + '<div class="casos">' + CASOS.map(function (x, i) {
    return '<div class="caso vd"><small>' + x.quem + '</small><div class="toca-linha">' + tocar(x.au) + '</div>' + ((S.ouviu || {})[x.au] ? FM.ex('ela' + i, x.ex) : '<p class="transcricao vazia">Listen first.</p>') + '</div>';
  }).join('') + '</div>' + (certas === 6 ? '<p class="aprova" style="text-align:center">One song for a memory, one for a body. Both are real reasons.</p>' : '');
};

R.trilha = function (c) {
  var e = S.trilha, n = e.n;
  var lista = '<div class="faixas">' + FAIXAS.map(function (f, i) { return '<span class="faixa-t' + (i < n ? ' feito' : i === n ? ' on' : '') + '"><i>' + (i + 1) + '</i>' + f.n.split(' · ')[1] + '</span>'; }).join('') + '</div>';
  if (n >= FAIXAS.length) return cab(c) + lista + '<div class="foco"><div class="pergunta vd"><small>SIDE A</small><h2>Four tracks. That is the soundtrack of your life.</h2></div></div>';
  var x = FAIXAS[n], foi = e.foi[n];
  return cab(c) + lista + '<div class="foco"><div class="pergunta vd' + (foi ? ' ja' : '') + '"><small>' + x.n + '</small><h2>' + x.q + '</h2></div>'
    + (foi ? follow('FOLLOW-UP', x.fup, [], [], 'tr' + n) + '<div style="text-align:center"><button type="button" class="btn" data-a="tl-prox">Next track</button></div>' : fala('tr' + n + 'a', x.st, []) + mostra('tr' + n, x.ex, 1) + '<div style="text-align:center"><button type="button" class="btn so-prof" data-a="tl-foi">Answered · follow-up</button></div>') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Track 1: … It reminds me of …\nTrack 2: … It sounds like …', 'Your soundtrack',
    ['It reminds me of ', 'It sounds like ', 'It sounds ', 'I feel like ', 'When I feel like '], ['YOUR FOUR TRACKS', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write your four tracks.' : 'Four songs, four sentences.'])
    + '<div class="lado-fim">' + toca(3, 1, 'SIDE B') + '<div class="grande vd"><span>it <u>reminds me of</u> (of never leaves)</span><span>I <u>remember</u> · it <u>reminds</u> me</span><span>sounds <u>like</u> + noun · sounds + adjective</span><span>I feel like <u>dancing</u></span></div>'
    + mostra('fim', 'An old cartoon song reminds me of Saturday mornings.<br>A funk song sounds like my street on Friday.<br>When I feel like dancing, I play disco. It sounds great.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.vz = function (b, n) { S.voz.sel = n; };
TOQUES.lb = function (b, n, v) { S.lab = +v; };
TOQUES['tl-foi'] = function () { S.trilha.foi[S.trilha.n] = 1; };
TOQUES['tl-prox'] = function () { S.trilha.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'Sounds like or sounds? Two ways to talk about a song.',
  a: { t: 'Compare it to something', falas: [['Friend', 'What does this song sound like?'], ['You', 'It sounds <mark>like</mark> a rainy night.']], d: 'You compare it to a thing. A noun needs <b>like</b>.' },
  b: { t: 'Describe it', falas: [['Friend', 'How does this song sound?'], ['You', 'It sounds <mark>sad</mark>.']], d: 'You describe it with a word. An adjective comes right after <b>sounds</b>: no like.' },
  pergunta: 'Same verb, two shapes. What is different after sounds?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'Describe the song with one feeling word: sad.', o: ['It sounds sad.', 'It sounds like sad.'], c: 0, d: 'A feeling word comes right after sounds.' },
    { p: 'Compare the song to a place: the beach.', o: ['It sounds like the beach.', 'It sounds the beach.'], c: 0, d: 'A noun needs like.' },
    { p: 'Describe the song with one word: happy.', o: ['It sounds like happy.', 'It sounds happy.'], c: 1, d: 'A describing word: no like.' },
    { p: 'Compare the song to a place: my grandma’s kitchen.', o: ['It sounds like my grandma’s kitchen.', 'It sounds my grandma’s kitchen.'], c: 0, d: 'A noun needs like.' }
  ],
  nota: 'A noun needs <b>like</b>: sounds <b>like</b> a rainy night. A describing word doesn’t: sounds <b>sad</b>. And when a song makes you think of someone: it <b>reminds me of</b> my father.',
  uso: { p: 'Your turn. Pick a song you know. What does it sound like, and who does it remind you of?', molde: ['It sounds …', 'It sounds like …', 'It reminds me of …'], ex: 'It sounds happy. It sounds like a summer party. It reminds me of my cousin.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_isso', GX_EXPLICA); };
