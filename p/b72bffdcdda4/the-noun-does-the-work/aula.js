/* ============================================================
   THE NOUN DOES THE WORK · THE VERB MAP · LIVE CLASS  06/10/2026
   Main series B2 · make / do / take / have + substantivo: o substantivo
   escolhe o verbo. make (produz: a decision, a mistake, a call), do
   (tarefa: the dishes, homework, a favor, exercise), take (a photo, a
   risk, notes), have (lunch, a meeting, a good time); take E have: a
   break, a look, a shower, a rest. Erros: make a photo, do a mistake,
   make exercise, make a favor, do a decision, did a good time.
   O MUNDO (da aula velha): o dia de alguém, do café ao jantar. Os quatro
   áudios (v1–v4) mantidos e conferidos no faster-whisper em 06/10: batem.
   Sem vídeo.
   A CARA (nova; a velha eram quatro gavetas claras, e a 132 acabou de
   usar gavetas): o MAPA DOS VERBOS — quatro territórios, MAKE, DO, TAKE
   e HAVE; TAKE e HAVE se sobrepõem numa faixa do meio (a break, a look,
   a shower, a rest). Cada substantivo é um alfinete que cai no
   território certo; o mapa vai se povoando.
   Fila: FILA-LIVE-386.md · 133. Pasta piloto-noun (conferida: não existia).
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'gavetas' },
  { k: 'ontem', est: 'o', min: 7, img: 'pia', rot: 'I · Yesterday', t: 'Think about yesterday. Which of these did you do?', p: 'Tap one. Then answer out loud.' },
  { k: 'gx', est: 'f', min: 4, img: 'mesa', rot: 'II · Three Jobs', t: 'The noun chooses the verb.', p: 'Look at the three jobs. Tap the job of each sentence. Then say three of your own.' },
  { k: 'mapa', est: 'f', min: 6, img: 'gavetas', rot: 'III · The Verb Map', t: 'Every noun lives somewhere on the map. A few live on the border.', p: 'Read the noun. Say it with a verb. Tap the territory. The pin drops.' },
  { k: 'seis', est: 'f', min: 6, img: 'mesa', rot: 'IV · Six Lines, Three Wrong', t: 'Six things people said at work. Three used the wrong verb.', p: 'Read it out loud. Tap RIGHT or WRONG.' },
  { k: 'so', est: 'f', min: 6, img: 'mesa', rot: 'V · Only One Works', t: 'For each gap, only one verb works.', p: 'Choose the verb. Say the whole sentence.' },
  { k: 'ouve', est: 'l', min: 7, img: 'mesa', rot: 'VI · Which One Went In', t: 'These verbs are fast and quiet. Four lines at normal speed.', p: 'Play each line. Tap the verb you heard. The line appears after.' },
  { k: 'alem', est: 'f', min: 6, img: 'gavetas', rot: 'VII · Beyond the Kitchen', t: 'The same four verbs at work, in the news, in life.', p: 'Choose the verb. Say the whole sentence.' },
  { k: 'dia', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'VIII · A Whole Day', t: 'Tell the story of one real day, with eight collocations.', p: 'For each part of the day, choose the model line. Say it. Then say your own. The counter keeps score.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'pia', rot: 'IX · Wrong Territory', t: 'Five phrases are in the wrong place. One is fine.', p: 'Choose the fix. Then say the whole sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'pia', rot: 'X · Your Yesterday, Again', t: 'Your yesterday from scene I, every noun in its place.', p: 'Write it with at least four verbs. It goes to your My notes.' }
];

var TR = { 'v1.mp3': 'I need to make a decision before Friday.', 'v2.mp3': 'I need to do the shopping before Friday.', 'v3.mp3': 'Can I take a look at that?', 'v4.mp3': 'Can I have a look at that?' };

var ZONAS = { make: ['MAKE', 'you produce it'], 'do': ['DO', 'a task'], take: ['TAKE', 'you take it'], have: ['HAVE', 'you experience it'], ambos: ['TAKE / HAVE', 'both work'] };

var COISAS = ['take a break', 'make a call', 'do the dishes', 'have a shower', 'make dinner', 'do some exercise'];
var ONTEM = [
  { q: 'When did you do it, and for how long?', fup: 'Was it a good part of the day?', st: ['I … at … for …'], ex: 'I had a shower at seven, for ten minutes.' },
  { q: 'What else did you do yesterday? Name three things.', fup: 'Which one took the longest?', st: ['I also …'], ex: 'I made two calls, did the shopping and had lunch with a friend.' },
  { q: 'What didn’t you do that you wanted to?', fup: 'Why not?', st: ['I wanted to … but …'], ex: 'I wanted to do some exercise, but it rained.' }
];

/* z: 'make' | 'do' | 'take' | 'have' | 'ambos' */
var CARTAS = [['a decision', 'make'], ['the dishes', 'do'], ['a photo', 'take'], ['lunch', 'have'], ['a mistake', 'make'], ['homework', 'do'], ['a risk', 'take'], ['a meeting', 'have'], ['a phone call', 'make'], ['a favor', 'do'], ['a break', 'ambos'], ['a look', 'ambos']];

var SEIS = [['I made a mistake in the report.', 'certo', ''], ['Can you make me a favor?', 'errado', 'DO a favor.'], ['We had a long meeting this morning.', 'certo', ''], ['She made a photo of the whiteboard.', 'errado', 'TAKE a photo.'], ['I need to do the shopping after work.', 'certo', ''], ['He did a big decision yesterday.', 'errado', 'MAKE a decision.']];

var SO = [
  { a: 'I always ', b: ' a mistake with this word.', ops: ['make', 'do', 'take'] },
  { a: 'Can you ', b: ' me a favor?', ops: ['do', 'make', 'have'] },
  { a: 'Let’s ', b: ' a photo in front of the lake.', ops: ['take', 'make', 'do'] },
  { a: 'We ', b: ' dinner at a new place last night.', ops: ['had', 'did', 'took'] },
  { a: 'You need to ', b: ' some exercise.', ops: ['do', 'make', 'have'] },
  { a: 'Don’t ', b: ' any risks with the budget.', ops: ['take', 'make', 'do'] }
];

var OUVE = [['v1.mp3', 'I need to <b>make</b> a decision before Friday.', 'make'], ['v2.mp3', 'I need to <b>do</b> the shopping before Friday.', 'do'], ['v3.mp3', 'Can I <b>take</b> a look at that?', 'take'], ['v4.mp3', 'Can I <b>have</b> a look at that?', 'have']];

var ALEM = [
  { a: 'The team has ', b: ' a lot of progress this month.', ops: ['made', 'done', 'had'] },
  { a: 'We ', b: ' business with three countries.', ops: ['do', 'make', 'take'] },
  { a: 'Please ', b: ' notes during the talk.', ops: ['take', 'make', 'do'] },
  { a: 'Did you ', b: ' a good time at the party?', ops: ['have', 'make', 'take'] },
  { a: 'I’d like to ', b: ' a complaint about the service.', ops: ['make', 'do', 'have'] },
  { a: 'Can we ', b: ' a quick look at the numbers?', ops: ['take', 'make', 'do'] }
];

/* n: quantas colocações a linha certa tem */
var DIA = [
  { h: 'MORNING', n: 3, ops: ['I had a shower, made coffee and took the bus at 8.', 'I made a shower, did coffee and took the bus at 8.', 'I took a shower, did a coffee and made the bus at 8.'], meu: 'Your morning: three collocations.' },
  { h: 'AT WORK', n: 3, ops: ['I had a meeting, made two calls and took some notes.', 'I did a meeting, made two calls and made some notes.', 'I had a meeting, did two calls and did some notes.'], meu: 'Your work or study: two or three collocations.' },
  { h: 'AFTERNOON', n: 2, ops: ['I took a short break and made a big decision.', 'I did a short break and took a big decision.', 'I made a short break and did a big decision.'], meu: 'Your afternoon: a break and a decision.' },
  { h: 'EVENING', n: 3, ops: ['I did the dishes, did some exercise and had a good time with friends.', 'I made the dishes, made some exercise and had a good time.', 'I did the dishes, took some exercise and made a good time.'], meu: 'Your evening: count your collocations out loud.' }
];

var ERROS = [
  { f: 'I <s>made</s> a photo of the sunset.', ops: ['took', 'did', 'had'], w: '<b>take</b> a photo.' },
  { f: 'Everybody <s>does</s> mistakes.', ops: ['makes', 'takes', 'has'], w: '<b>make</b> a mistake.' },
  { f: 'I <s>make</s> exercise three times a week.', ops: ['do', 'take', 'have'], w: '<b>do</b> exercise.' },
  { f: 'Can you <s>make</s> me a favor?', ops: ['do', 'take', 'have'], w: '<b>do</b> a favor.' },
  { f: 'We <s>did</s> a great time in Rio.', ops: ['had', 'made', 'took'], w: '<b>have</b> a good time.' },
  { f: 'Let’s take a break.', ops: ['Nothing. It’s right.', 'make a break', 'do a break'], w: 'Five in the wrong place and one right (have a break works too).' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  on: { tema: '', n: 0, foi: {} }, mp: { n: 0, esc: '', pinos: {} }, sx: {}, so: { n: 0, esc: -1 }, ov: {}, al: { n: 0, esc: -1 }, di: { n: 0, esc: -1, conta: 0 }, er: { n: 0, esc: -1 } };

/* o mapa: quatro territórios; TAKE e HAVE dividem a faixa do meio */
function mapa(pinos, clicavel, n) {
  function zona(k, cls) {
    var at = clicavel ? ' data-a="mp" data-v="' + k + '"' : '';
    var lista = Object.keys(pinos).filter(function (i) { return pinos[i] === k; }).map(function (i) { return '<span class="nw-pino">' + CARTAS[i][0] + '</span>'; }).join('');
    return '<' + (clicavel ? 'button type="button"' : 'div') + ' class="nw-zona ' + cls + '"' + at + '><b>' + ZONAS[k][0] + '</b><small>' + ZONAS[k][1] + '</small><div class="nw-pinos">' + lista + '</div></' + (clicavel ? 'button' : 'div') + '>';
  }
  return '<div class="nw-mapa">' + zona('make', 'make') + zona('do', 'do') + zona('take', 'take') + zona('ambos', 'ambos') + zona('have', 'have') + '</div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="nw-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · MAKE · DO · TAKE · HAVE</span><h1>The Noun Does <b>the Work</b></h1>'
    + '<p class="sub"><i>I made a photo and did a mistake.</i> Two nouns in the wrong place. <b>I took a photo and made a mistake.</b> The noun decides the verb, not the other way around.</p>'
    + '<div class="chipsx"><span class="pilula">make a decision</span><span class="pilula">do the dishes</span><span class="pilula">take a photo</span><span class="pilula">have lunch</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the map</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + mapa({ 0: 'make', 1: 'do', 2: 'take', 3: 'have', 10: 'ambos' }, 0) + '</div></div>';
};

R.ontem = function (c) {
  var e = S.on;
  var chips = '<div class="nw-temas">' + COISAS.map(function (t) { return '<button type="button" class="pilula' + (e.tema === t ? ' on' : '') + '" data-a="on-t" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tema) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Tap something you really did.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ONTEM, e, 'on', 'Keep your list. It comes back at the end, every noun in its place.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write down every verb + noun. “make a photo”, “do a mistake”, “make exercise”: don’t correct yet.</p>';
};

R.mapa = function (c) {
  var e = S.mp, n = e.n, fim = n >= CARTAS.length;
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + mapa(e.pinos, 0) + '</div><div class="lado-l"><div class="pergunta vd"><small>TWELVE PINS</small><h2>Four territories, and two nouns on the border. Say a true sentence with three of them.</h2></div></div></div>';
  var x = CARTAS[n], ok = e.esc && (e.esc === x[1] || (x[1] === 'ambos' && (e.esc === 'take' || e.esc === 'have')));
  return cab(c) + trilha(CARTAS, n) + '<div class="mesa-c"><div class="lado-l">' + mapa(e.pinos, !ok) + '</div>'
    + '<div class="lado-l"><div class="nw-carta vd"><small>THE NOUN · ' + (n + 1) + ' OF 12</small><b>' + x[0] + '</b></div>'
    + (ok ? '<p class="aprova">' + (x[1] === 'ambos' ? 'Border noun: TAKE ' + x[0] + ' and HAVE ' + x[0] + ' both work.' : ZONAS[x[1]][0].toLowerCase() + ' ' + x[0] + '. Say it in a sentence.') + '</p><div><button type="button" class="btn" data-a="mp-prox">Next noun</button></div>'
      : e.esc ? '<p class="recusa">Wrong territory. Say the whole phrase out loud: does it sound like something you’ve heard?</p>' : '<p class="dica-aluno">Say it with a verb first. Then tap where it lives.</p>') + '</div></div>';
};

R.seis = function (c) {
  var e = S.sx, todos = SEIS.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="nw-lista">' + SEIS.map(function (x, i) {
    var foi = e[i], ok = foi === x[1];
    return '<div class="nw-tf vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + x[0] + (ok && x[2] ? '<b> → ' + x[2] + '</b>' : '') + '</span><div class="nw-fs">' + [['certo', 'RIGHT'], ['errado', 'WRONG']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="sx" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Three wrong: DO a favor, TAKE a photo, MAKE a decision. They sound natural to Portuguese ears.</p>' : '<p class="dica-aluno" style="text-align:center">Say it again. Where does the noun live?</p>');
};

R.so = function (c) {
  var e = S.so, n = e.n, fim = n >= SO.length;
  if (fim) return cab(c) + trilha(SO, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Six verbs, all in place. Now a question with each one.</h2></div></div>';
  var x = SO[n], ok = e.esc === 0;
  return cab(c) + trilha(SO, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div>' + tres('so', x.ops, e.esc, n + 1, 'linha')
    + (ok ? '<div class="nw-linha-ok centro"><p class="aprova">Say the whole sentence.</p><button type="button" class="btn" data-a="so-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Where does the noun live? Say the noun alone first.</p>' : '') + '</div>';
};

R.ouve = function (c) {
  var e = S.ov, todos = OUVE.every(function (x, i) { return e[i] === x[2]; });
  return cab(c) + '<div class="nw-ouves">' + OUVE.map(function (x, i) {
    var foi = e[i], ok = foi === x[2];
    return '<div class="nw-ouve vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><div class="toca-linha">' + tocar(x[0]) + '<b>LINE ' + (i + 1) + '</b></div>'
      + (ok ? '<p>' + x[1] + '</p>' : '<div class="nw-fs">' + ['make', 'do', 'take', 'have'].map(function (v) { return '<button type="button" class="pilula' + (foi === v ? ' errado' : '') + '" data-a="ov" data-n="' + i + '" data-v="' + v + '">' + v.toUpperCase() + '</button>'; }).join('') + '</div>') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Lines 1 and 2: the same sentence, and the noun changed the verb. Lines 3 and 4: the same question, and both are right.</p>' : '<p class="dica-aluno" style="text-align:center">The verb comes right after “to” or “I”, and it’s fast.</p>');
};

R.alem = function (c) {
  var e = S.al, n = e.n, fim = n >= ALEM.length;
  if (fim) return cab(c) + trilha(ALEM, n) + '<div class="foco"><div class="pergunta vd"><small>SIX MORE PAIRS</small><h2>Far from the kitchen, same four territories. One sentence about your job with each verb.</h2></div></div>';
  var x = ALEM[n], ok = e.esc === 0;
  return cab(c) + trilha(ALEM, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div>' + tres('al', x.ops, e.esc, n + 4, 'linha')
    + (ok ? '<div class="nw-linha-ok centro"><p class="aprova">Say the whole sentence.</p><button type="button" class="btn" data-a="al-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">The noun decides. Say it with each verb and listen.</p>' : '') + '</div>';
};

R.dia = function (c) {
  var e = S.di, n = e.n, fim = n >= DIA.length;
  var placar = '<div class="nw-placar vd"><small>COLLOCATIONS TODAY</small><b>' + e.conta + '</b><div>' + new Array(12).join('.').split('.').map(function (_, i) { return '<i class="' + (i < e.conta ? 'on' : '') + '"></i>'; }).join('') + '</div></div>';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + placar + '</div><div class="lado-l"><div class="pergunta vd"><small>ONE WHOLE DAY</small><h2>Every noun in its place. Now the same day: “By 10 PM I had …”</h2></div></div></div>';
  var x = DIA[n], ok = e.esc === 0;
  return cab(c) + trilha(DIA, n) + '<div class="mesa-c"><div class="lado-l">' + placar + (ok ? '<div class="pergunta vd ja"><small>YOUR ' + x.h + '</small><h2>' + x.meu + '</h2></div>' : '') + '</div>'
    + '<div class="lado-l"><p class="nw-rot">' + x.h + '</p>' + tres('di', x.ops, e.esc, n + 6)
    + (ok ? '<p class="so-prof dica-aluno">Count the student’s collocations out loud. One follow-up.</p><div><button type="button" class="btn" data-a="di-prox">Next part of the day</button></div>' : e.esc > 0 ? '<p class="recusa">One noun is in the wrong place. Which one?</p>' : '') + '</div></div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX PHRASES</small><h2>The map is tidy. A true sentence for each one.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div>' + tres('er', x.ops, e.esc, n + 2, 'linha')
    + (ok ? '<div class="nw-linha-ok centro"><p class="aprova">' + x.w + ' Say the whole sentence.</p><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Where does the noun live?</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Yesterday I took …, made …, did … and had …\nTomorrow I’ll make a decision about …\nThe last real break I took was …', 'Your yesterday',
    ['made', 'did', 'took', 'had', 'a break', 'a decision'], ['YOUR YESTERDAY, EVERY NOUN IN PLACE', 'Yesterday with at least four verbs, one decision you’ll make this week, and your last real break.'])
    + '<div class="lado-fim">' + mapa({ 0: 'make', 1: 'do', 2: 'take', 3: 'have', 10: 'ambos', 11: 'ambos' }, 0)
    + '<div class="grande vd"><span><u>make</u> · a decision, a mistake, a call</span><span><u>do</u> · the dishes, homework, a favor, exercise</span><span><u>take</u> · a photo, a risk, notes · <u>have</u> · lunch, a meeting, a good time</span><span>not <s>make a photo</s>, not <s>do a mistake</s></span></div>'
    + mostra('fim', 'Yesterday I took the bus, made two calls, did the shopping and had lunch with Ana.<br>This week I’ll make a decision about my course.<br>The last real break I took was in July.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['on-t'] = function (b, n, v) { S.on.tema = v; };
TOQUES.mp = function (b, n, v) { S.mp.esc = v; var x = CARTAS[S.mp.n]; if (v === x[1] || (x[1] === 'ambos' && (v === 'take' || v === 'have'))) S.mp.pinos[S.mp.n] = x[1]; };
TOQUES['mp-prox'] = function () { S.mp.n++; S.mp.esc = ''; };
TOQUES.sx = function (b, n, v) { S.sx[n] = v; };
TOQUES.so = function (b, n) { S.so.esc = n; };
TOQUES['so-prox'] = function () { S.so = { n: S.so.n + 1, esc: -1 }; };
TOQUES.ov = function (b, n, v) { S.ov[n] = v; };
TOQUES.al = function (b, n) { S.al.esc = n; };
TOQUES['al-prox'] = function () { S.al = { n: S.al.n + 1, esc: -1 }; };
TOQUES.di = function (b, n) { S.di.esc = n; };
TOQUES['di-prox'] = function () { S.di.conta += DIA[S.di.n].n; S.di.n++; S.di.esc = -1; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de mapa.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'The noun chooses the verb. Three jobs.',
  usos: [
    { t: 'MAKE', f: 'make a decision', d: 'You create or produce something: a call, a mistake, a plan.', img: 'mesa' },
    { t: 'DO', f: 'do the dishes', d: 'A task, a job, a duty: homework, a favor, exercise.', img: 'pia' },
    { t: 'TAKE OR HAVE', f: 'take a break · have lunch', d: 'A moment or an experience: a photo, a shower, a meeting.', img: 'gavetas' }
  ],
  pergunta: 'Which verb does the noun want?',
  itens: [
    { f: 'Yesterday I ___ the laundry.', c: 1 },
    { f: 'Please ___ a quick call to the client.', c: 0 },
    { f: 'I need to ___ a break.', c: 2 },
    { f: 'She ___ a big decision on Monday.', c: 0 },
    { f: 'We ___ homework at the library.', c: 1 },
    { f: 'Let’s ___ a look at the map.', c: 2 }
  ],
  nota: 'The noun picks the verb: <b>make</b> a decision, a call, a mistake · <b>do</b> the dishes, homework, a favor · <b>take</b> or <b>have</b> a break, a shower, a look, lunch.',
  uso: { p: 'Your turn. Yesterday: one thing you made, one thing you did, and one thing you took or had.', molde: ['I made …', 'I did …', 'I took / had …'], ex: 'I made a quick call. I did the laundry. I had lunch with a friend.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
