/* ============================================================
   FIRST, THEN, FINALLY · THE WISHGRANTER · LIVE CLASS  05/10/2026
   Main series A2 · contar uma história no past simple, em ordem: First →
   Then / After that / Next → Finally / In the end · irregulares (came,
   went, threw, fell, met) · didn't + base
   O MUNDO (da aula velha): o curta sem fala "The Wishgranter" (zON0wDD7VJY,
   quatro capítulos); o aluno é a voz do filme. A CARA: o STORYBOARD com
   oito quadros escuros em volta da fonte (anel de água em CSS) e o PAINEL
   DE CONTROLE do Wishgranter (latão, oito moedas) para mudar o final.
   Sem áudio. O guia não cita canal nem escola. Fila: FILA-LIVE-386.md · 049.
   ============================================================ */
var YT = 'zON0wDD7VJY';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'parque', rot: 'I · You and Your Stories', t: 'Before the film: your day, and the stories you like.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'video', est: 'l', min: 10, img: 'fonte', rot: 'II · The Short Film', t: 'A short film with no words and a busy little hero.', p: 'Four short chapters. There are no words: you are the voice of the film.' },
  { k: 'quadros', est: 'o', min: 7, img: 'fonte', rot: 'III · The Storyboard', t: 'Eight panels around the fountain, all mixed up.', p: 'Say what happened first, then next. Tap the panel. Then say it in one sentence.' },
  { k: 'regra', est: 'f', min: 6, img: 'maquina', rot: 'IV · The Rule', t: 'A story: in the past, and in order.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'final', est: 'o', min: 7, img: 'maquina', rot: 'V · Change the Ending', t: 'The Wishgranter’s control panel. Eight “what if” cards.', p: 'Your teacher reads the card. Tell a new ending at once, in two sentences, with the notes.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'banco', rot: 'VI · Your Story', t: 'Your real life, told in order.', p: 'Pick a card. Tell it in three or four steps.' },
  { k: 'sam', est: 'o', min: 7, extra: 1, img: 'parque', rot: 'VII · Tell a Friend', t: 'Sam missed class and wants the whole story.', p: 'Your teacher is Sam. Tell the film in order, then your new ending.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'moedas', rot: 'VIII · Quick Check', t: 'Six quick lines from the story.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · The End', t: 'Write a real story from your life.', p: 'Four steps, in the past, in order. The red line watches after, at the end and the verbs. It goes to your My notes.' }
];

var ABRE = [
  { k: 'THIS MORNING', q: 'What did you do this morning? Three things, in order.', fup: 'And then?', st: ['First, I … Then I …'], ex: 'First, I woke up at seven. Then I had coffee. After that, I took the bus.' },
  { k: 'A WISH', q: 'Did you ever throw a coin into a fountain? What did you wish for?', fup: 'Did it come true?', st: ['Yes, in … I wished for …'], ex: 'Yes, in Rome. I wished for a trip back there.' },
  { k: 'ENDINGS', q: 'Do you like happy endings or sad endings? Why?', fup: 'A movie with a great ending?', st: ['I like … endings, because …'], ex: 'Happy endings. I watch movies to relax.' }
];
var FORMAS = [{ k: 'seq', t: 'FIRST / THEN / FINALLY' }, { k: 'past', t: 'PAST VERBS' }, { k: 'pres', t: 'STORY IN THE PRESENT', erro: 1 }, { k: 'after', t: 'AFTER, … / COMED / THROWED', erro: 1 }];

var NOTA = {
  passado: 'The story happened: every verb in the past.', irreg: 'An irregular verb: no -ed (came, went, threw, fell, met).', after: 'after needs something after it. Alone: Then, or After that.',
  did: 'did + the base verb, or just the past verb.', inicio: 'The start of the story: First.', fim: 'The end of the story: Finally.', atend: 'In the end (or Finally). At the end needs “of the …”.',
  dobra: 'stop → stopped: double the p.'
};

var CAPS = [
  { k: 'UNDER THE FOUNTAIN', ini: 0, fim: 60, q: 'Where did the little man work? What did he do with the coins?', h: 'He worked under the fountain. He read the wishes and pushed buttons.' },
  { k: 'TWO COINS', ini: 60, fim: 120, q: 'Who came to the fountain? What did they do?', h: 'A young man came, and then a young woman came. They threw their coins at the same time.' },
  { k: 'UP TO THE PARK', ini: 120, fim: 200, q: 'What happened to the machine? Where did the little man go?', h: 'The machine stopped. He went up into the park.' },
  { k: 'THE LAST TRY', ini: 200, fim: 288, q: 'What did he do up there? How did it end?', h: 'He tried again and again. Finally, the man and the woman met.' }
];

var QUADROS = [
  { k: 'UNDER THE FOUNTAIN', ic: '⚙️', notas: 'the Wishgranter · work · under the fountain', ops: [['First, the Wishgranter worked under the fountain.', 'ok'], ['First, the Wishgranter works under the fountain.', 'passado'], ['Finally, the Wishgranter worked under the fountain.', 'inicio']] },
  { k: 'THE COINS', ic: '🪙', notas: 'coins · fall · into his machine', ops: [['Then coins fell into his machine.', 'ok'], ['Then coins falled into his machine.', 'irreg'], ['After, coins fell into his machine.', 'after']] },
  { k: 'A YOUNG MAN', ic: '🚶', notas: 'a young man · come · to the fountain', ops: [['After that, a young man came to the fountain.', 'ok'], ['After that, a young man comed to the fountain.', 'irreg'], ['After that, a young man did came to the fountain.', 'did']] },
  { k: 'A YOUNG WOMAN', ic: '🚶‍♀️', notas: 'a young woman · arrive · too', ops: [['Then a young woman arrived too.', 'ok'], ['Then a young woman arrives too.', 'passado'], ['After, a young woman arrived too.', 'after']] },
  { k: 'TWO COINS', ic: '✨', notas: 'they · throw · their coins at the same time', ops: [['Next, they threw their coins at the same time.', 'ok'], ['Next, they throwed their coins at the same time.', 'irreg'], ['Next, they throw their coins at the same time.', 'passado']] },
  { k: 'THE MACHINE', ic: '🛑', notas: 'the machine · stop', ops: [['After that, the machine stopped.', 'ok'], ['After that, the machine stoped.', 'dobra'], ['After that, the machine stops.', 'passado']] },
  { k: 'UP TO THE PARK', ic: '🌳', notas: 'the Wishgranter · go · up into the park', ops: [['Then the Wishgranter went up into the park.', 'ok'], ['Then the Wishgranter goed up into the park.', 'irreg'], ['After, the Wishgranter went up into the park.', 'after']] },
  { k: 'THE END', ic: '💛', notas: 'the man and the woman · meet', ops: [['Finally, the man and the woman met.', 'ok'], ['Finally, the man and the woman meeted.', 'irreg'], ['First, the man and the woman met.', 'fim']] }
];

var FITAS = [['THE START', 'First, …'], ['THE MIDDLE', 'Then … · After that, … · Next, …'], ['THE END', 'Finally, … · In the end, …']];
var ARMAS = [
  ['NOT AFTER ALONE', 'After, he went up into the park.', 'After that, he went up. / Then he went up.', 'after needs something after it.'],
  ['STAY IN THE PAST', 'Then he climbs up and he looks around.', 'Then he climbed up and he looked around.', 'The story happened: every verb in the past.'],
  ['IRREGULAR VERBS', 'They throwed their coins and the coins falled.', 'They threw their coins and the coins fell.', 'No -ed on irregular verbs.'],
  ['DIDN’T + BASE', 'He didn’t wanted to go up. At the end, they met.', 'He didn’t want to go up. In the end, they met.', 'didn’t is already past. And: in the end.']
];

var CARTAS = [
  { se: 'What if the Wishgranter said no?', notas: 'he · push · the red button / the coins · go · back up', ops: [['First, he pushed the red button. Then the coins went back up.', 'ok'], ['First, he pushed the red button. Then the coins goed back up.', 'irreg'], ['First, he pushes the red button. Then the coins go back up.', 'passado']] },
  { se: 'What if it started to rain?', notas: 'the man · open · his umbrella / the woman · stand · under it', ops: [['First, the man opened his umbrella. Then the woman stood under it.', 'ok'], ['First, the man opened his umbrella. Then the woman standed under it.', 'irreg'], ['First, the man opened his umbrella. After, the woman stood under it.', 'after']] },
  { se: 'What if a dog took the coins?', notas: 'a dog · run · to the fountain / it · take · the two coins', ops: [['First, a dog ran to the fountain. After that, it took the two coins.', 'ok'], ['First, a dog runned to the fountain. After that, it took the coins.', 'irreg'], ['First, a dog ran to the fountain. After that, it did took the coins.', 'did']] },
  { se: 'What if the Wishgranter fell in love?', notas: 'he · see · the woman / he · forget · the man', ops: [['First, he saw the woman. Then he forgot the man.', 'ok'], ['First, he seed the woman. Then he forgot the man.', 'irreg'], ['First, he saw the woman. Then he forgets the man.', 'passado']] },
  { se: 'What if the woman wished for money?', notas: 'she · wish · for money / she · leave · with a bag of coins', ops: [['First, she wished for money. Finally, she left with a bag of coins.', 'ok'], ['First, she wished for money. Finally, she leaved with a bag of coins.', 'irreg'], ['Finally, she wished for money. First, she left with a bag of coins.', 'inicio']] },
  { se: 'What if the man came back the next day?', notas: 'he · bring · flowers / he · find · the woman', ops: [['First, he brought flowers. In the end, he found the woman.', 'ok'], ['First, he bringed flowers. In the end, he found the woman.', 'irreg'], ['First, he brought flowers. At the end, he found the woman.', 'atend']] },
  { se: 'What if the machine broke forever?', notas: 'the Wishgranter · lose · his job / he · open · a café in the park', ops: [['First, the Wishgranter lost his job. Then he opened a café.', 'ok'], ['First, the Wishgranter losed his job. Then he opened a café.', 'irreg'], ['First, the Wishgranter lost his job. After, he opened a café.', 'after']] },
  { se: 'What if they got married?', notas: 'they · get · married / the Wishgranter · go · to the wedding', ops: [['First, they got married. Finally, the Wishgranter went to the wedding.', 'ok'], ['First, they got married. Finally, the Wishgranter goes to the wedding.', 'passado'], ['First, they got married. Finally, the Wishgranter goed to the wedding.', 'irreg']] }
];

var RODA = [
  { k: 'LAST WEEKEND', q: 'What did you do last weekend? Tell it in order.', ex: 'First, I slept late. Then I met my friends. Finally, we watched a movie.' },
  { k: 'YESTERDAY', q: 'Yesterday evening, from work or school to bed.', ex: 'First, I got home at six. After that, I cooked dinner. Finally, I went to bed at eleven.' },
  { k: 'A TRIP', q: 'A trip: how did it start, and how did it end?', ex: 'First, we took a plane. In the end, we didn’t want to come back.' },
  { k: 'A FIRST DAY', q: 'Your first day at a new school or job.', ex: 'First, I got lost. Then a nice woman helped me.' },
  { k: 'A BAD DAY', q: 'A really bad day, step by step.', ex: 'First, my alarm didn’t ring. Then I missed the bus. Finally, it rained!' },
  { k: 'A WISH', q: 'Did a wish of yours ever come true? What happened?', ex: 'First, I saved money for a year. Finally, I bought a guitar.' }
];
var SAM = [
  { ela: 'Hey! I missed class today. What did you watch?', pede: 'A short film about a fountain … First, …', resp: 'A little man under a fountain? That’s so cute!' },
  { ela: 'OK, and what happened then?', pede: 'Then two people … After that, the machine …', resp: 'Oh no! So what did he do?' },
  { ela: 'And how did it end?', pede: 'Finally, …', resp: 'Aww. I love a happy ending.' },
  { ela: 'Did you change the ending in class? Tell me your best one!', pede: 'First, … Then … (your ending)', resp: 'Ha! I like yours better.' }
];
var QUIZ = [
  { a: 'First, the Wishgranter ', b: ' under the fountain.', op: ['worked', 'works', 'working'], nao: 'The story happened: worked.' },
  { a: 'Then two coins ', b: ' into the machine.', op: ['fell', 'falled', 'fall'], nao: 'fall is irregular: fell.' },
  { a: '', b: ', the machine stopped.', op: ['After that', 'After', 'At the end'], nao: 'after needs something after it: After that.' },
  { a: 'A young man ', b: ' to the fountain.', op: ['came', 'comed', 'come'], nao: 'come is irregular: came.' },
  { a: 'The Wishgranter didn’t ', b: ' to go up.', op: ['want', 'wanted', 'wants'], nao: 'didn’t + base verb: want.' },
  { a: '', b: ', the man and the woman met.', op: ['Finally', 'First', 'At first'], nao: 'The end of the story: Finally.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0, cap: 0, viu: {} }, qd: { n: 0, sel: -1, esc: '', erro: -1 }, fin: { n: 0, esc: '' }, roda: { sel: -1, foi: {} }, sam: { n: 0, viu: {} }, quiz: { esc: {} } };

function fonte(cheios, sel, erro, toque) {
  var ordemQ = ordem(QUADROS.map(function (_, i) { return i; }), 3);
  var s = '<div class="fonte-a"><div class="agua"><span>⛲</span></div>';
  ordemQ.forEach(function (qi, pos) {
    var a = (pos * 45 - 90) * Math.PI / 180, x = 50 + 40 * Math.cos(a), y = 50 + 38 * Math.sin(a), q = QUADROS[qi], feito = qi < cheios;
    s += '<button type="button" class="painel-q' + (feito ? ' feito' : '') + (sel === qi ? ' on' : '') + (erro === qi ? ' errado' : '') + '" style="left:' + x + '%;top:' + y + '%"' + (toque && !feito ? ' data-a="' + toque + '" data-n="' + qi + '"' : '') + '><span class="ic">' + q.ic + '</span><b>' + (feito ? (qi + 1) : '?') + '</b><small>' + q.k + '</small></button>';
  });
  return s + '</div>';
}
function painel(n) {
  var s = '<div class="painel-c"><div class="moedas-c">';
  for (var i = 0; i < 8; i++) s += '<span class="moeda' + (i < n ? ' caiu' : '') + '"></span>';
  return s + '</div><div class="botoes-c"><i class="vermelho"></i><i></i><i></i><i class="verde"></i></div><small>WISH CONTROL · ' + n + ' / 8</small></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE WISHGRANTER</span><h1>First, Then, <b>Finally</b></h1>'
    + '<p class="sub"><b>First,</b> two coins fell into the fountain. <b>Then</b> the machine stopped. <b>Finally,</b> a tiny hero went up.</p>'
    + '<div class="chipsx"><span class="pilula">first · then · finally</span><span class="pilula">came · went · threw</span><span class="pilula">in the end</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Throw a coin</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-f">' + fonte(3, -1, -1) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>People throw coins into fountains. Why? And who do you think reads all those wishes?</h2></div>' + fala('va', ['To make a wish …', 'Maybe a little man …'], ['wish', 'luck', 'coin']) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The Wishgranter', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Short film, no words · chapter ' + (e.cap + 1) + ' of 4</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + (i + 1) + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>CHAPTER ' + (e.cap + 1) + ' · ' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div class="acoes">' + (e.cap < 3 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the film</button>') + '</div></div></div>';
  } else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>Tell the whole film in three sentences: First… Then… Finally… Did you like the ending?</h2></div>' + fala('vb', ['First, …', 'Then …', 'Finally, …'], []) + mostra('vb', 'First, two people threw coins. Then the machine stopped. Finally, the little man brought them together.', 1) + '</div>';
  return cab(c) + passos + corpo;
};

R.quadros = function (c) {
  var e = S.qd, n = e.n, lado;
  if (n >= QUADROS.length) lado = '<div class="pergunta vd"><small>THE STORYBOARD</small><h2>Eight panels, one story, all in order. Why came and not comed? Why after that and not after? The rule is next.</h2></div>';
  else if (e.sel !== n) lado = '<p class="ini">What happened ' + (n ? 'next' : 'first') + '? Say it, then tap that panel.</p>' + (e.erro >= 0 ? '<p class="recusa">Not yet: that panel comes later in the story.</p>' : '');
  else {
    var x = QUADROS[n], ok = e.esc === 'ok';
    lado = '<div class="pede vd"><small>PANEL ' + (n + 1) + ' · ' + x.k + ' ' + x.ic + '</small><b>' + x.notas + '</b></div>' + (ok ? '<div class="balao vd"><small>THE STORY</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="qd-prox">Next panel</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="qd-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : ''));
  }
  return cab(c) + '<div class="mesa-q"><div class="vd fonte-box">' + fonte(n, e.sel, e.erro, 'qd') + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.final = function (c) {
  var e = S.fin, n = e.n, fim = n >= CARTAS.length, lado;
  if (fim) lado = '<div class="pergunta vd"><small>THE MACHINE WORKS AGAIN</small><h2>Eight coins on the panel, eight new endings.</h2></div>';
  else {
    var x = CARTAS[n], ok = e.esc === 'ok';
    lado = '<div class="pede vd"><small>WHAT IF ' + (n + 1) + '</small><b>' + x.se + '</b></div><p class="notas-f">' + x.notas + '</p>' + (ok ? '<div class="balao vd"><small>THE NEW ENDING</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="fn-prox">Drop the coin</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 2).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="fn" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : ''));
  }
  return cab(c) + trilha(CARTAS, n) + '<div class="mesa-q"><div class="vd fonte-box">' + painel(n) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.roda = function (c) {
  var e = S.roda, x = e.sel >= 0 ? RODA[e.sel] : null;
  return cab(c) + '<div class="mesa-q"><div class="cartoes-c">' + RODA.map(function (k, i) { return '<button type="button" class="cartao-c' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feito' : '') + '" data-a="rd" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + k.k + '</b></button>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('rd' + e.sel, ['First, …', 'Then … / After that, …', 'Finally, … / In the end, …'], []) + mostra('rd' + e.sel, x.ex, 1) : '<p class="dica-aluno">Pick a card. Your teacher tells one too.</p>') + '</div></div>';
};

R.sam = function (c) {
  var e = S.sam, n = e.n, fim = n >= SAM.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('parque') + ')"><span>SAM · A FRIEND FROM CLASS</span></div>';
  if (fim) return cab(c) + '<div class="mesa-q">' + foto + '<div class="lado-l">' + follow('THE BIG QUESTION', 'Is a happy ending always the best ending? Why, or why not?', ['I think …, because …', 'Not always. Sometimes …'], [], 'big', mostra('big', 'Not always. Sometimes a sad ending is more real, and I remember it longer.', 1)) + '</div></div>';
  var x = SAM[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-q">' + foto + '<div class="lado-l">' + trilha(SAM, n) + '<div class="balao vd"><small>SAM</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>YOUR TURN</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>SAM</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="sm-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="sm-viu">Told · Sam replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. One last story: yours.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'First, I …\nThen …\nAfter that, …\nFinally, …', 'Your story',
    ['First, ', 'Then ', 'After that, ', 'Next, ', 'Finally, ', 'In the end, '], ['A REAL STORY FROM YOUR LIFE', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now tell it in the past, in order.' : 'Four steps, in the past, in order.'])
    + '<div class="lado-fim">' + painel(8) + '<div class="grande vd"><span><u>First</u> → <u>Then</u> / <u>After that</u> → <u>Finally</u></span><span>not “After, …” · not “At the end”</span><span>came · went · threw · fell · met</span><span>didn’t + <u>base</u></span></div>'
    + mostra('fim', 'First, I woke up late. Then I ran to the bus stop.<br>After that, I lost my phone on the bus.<br>Finally, a kind woman found it and gave it back.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.qd = function (b, n) { if (n === S.qd.n) { S.qd.sel = n; S.qd.erro = -1; } else S.qd.erro = n; };
TOQUES['qd-v'] = function (b, n, v) { S.qd.esc = v; };
TOQUES['qd-prox'] = function () { S.qd = { n: S.qd.n + 1, sel: -1, esc: '', erro: -1 }; };
TOQUES.fn = function (b, n, v) { S.fin.esc = v; };
TOQUES['fn-prox'] = function () { S.fin = { n: S.fin.n + 1, esc: '' }; };
TOQUES.rd = function (b, n) { S.roda.sel = n; S.roda.foi[n] = 1; };
TOQUES['sm-viu'] = function () { S.sam.viu[S.sam.n] = 1; };
TOQUES['sm-prox'] = function () { S.sam.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
/* dois erros com o mesmo código acendiam juntos: código único */
[QUADROS, CARTAS].forEach(function (lista) { lista.forEach(function (x) { var visto = {}; x.ops.forEach(function (o) { if (visto[o[1]]) { var novo = o[1] + '2'; NOTA[novo] = NOTA[o[1]]; o[1] = novo; } visto[o[1]] = 1; }); }); });
