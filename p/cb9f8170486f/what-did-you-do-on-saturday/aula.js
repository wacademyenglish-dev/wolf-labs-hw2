/* ============================================================
   WHAT DID YOU DO ON SATURDAY? · THE MONDAY MIC · LIVE CLASS  05/10/2026
   Main series A1 · past questions: Did you …? · Where / What / Who did you
   …? · short answers: Yes, I did / No, she didn't · did + base verb
   O MUNDO (da aula velha): o aluno é o repórter de rua do jornal de
   segunda. Vídeo real (kTf0V4HyFtM) selado, em quatro capítulos (0:06 a
   2:18). Depois a praça com oito pessoas (antes da regra) e o convidado
   misterioso na primeira página (depois da regra): oito pistas, Did you…?,
   e o resumo para a editora com a resposta curta. A cara: a PRIMEIRA
   PÁGINA de um jornal em papel ESCURO (tinta clara), com carimbos YES/NO.
   Sem áudio (a aula velha não tinha). Fila: FILA-LIVE-386.md · 037.
   ============================================================ */
var YT = 'kTf0V4HyFtM';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'rua', rot: 'I · You and the Weekend', t: 'Before the interviews: you and your weekends.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'palavras', est: 'l', img: 'estudio', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'estudio', rot: 'III · Four Weekends', t: 'Four friends, four weekends.', p: 'Listen to the answers, and to the questions. The video plays in four short chapters.' },
  { k: 'falas', est: 'l', extra: 1, img: 'estudio', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'praca', est: 'o', min: 7, img: 'praca', rot: 'V · Maple Street Plaza', t: 'Eight people. You have their answers. Ask the questions.', p: 'Tap a person, read what they said, and ask the question for it.' },
  { k: 'regra', est: 'f', min: 6, img: 'estudio', rot: 'VI · The Rule', t: 'In a past question, did carries the past.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'guest', est: 'o', min: 7, img: 'grafica', rot: 'VII · The Mystery Guest', t: 'Page one: a mystery guest. Who is she?', p: 'Ask Did you …? about each clue. Your teacher is the guest, then Nora, the editor: give her the short answer.' },
  { k: 'nora', est: 'o', min: 7, extra: 1, img: 'estudio', rot: 'VIII · Monday, 8 AM', t: 'Nora calls. She asks about YOUR Saturday.', p: 'Short answer first, then one more sentence. Then ask her back.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'praca', rot: 'IX · Quick Check', t: 'Five lines from your notebook.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'parque', rot: 'X · Your Weekend', t: 'The microphone turns around.', p: 'Pick a card. Answer, then ask your teacher the same question.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XI · The Monday Page', t: 'Write your own interview.', p: 'Three questions about last Saturday, and your answers. The red line watches did. It goes to your My notes.' }
];

var ABRE = [
  { k: 'YOUR SATURDAY', q: 'What do you usually do on Saturdays?', fup: 'And what did you do LAST Saturday?', st: ['I usually …', 'Last Saturday I …'], ex: 'I usually sleep late and see my friends.' },
  { k: 'YOUR DAY', q: 'What’s your favorite day of the week?', fup: 'And Monday mornings?', st: ['My favorite day is …'], ex: 'Saturday! No alarm clock.' },
  { k: 'PEOPLE', q: 'Who do you usually see on the weekend?', fup: 'What do you do together?', st: ['I usually see …'], ex: 'My family. We have lunch together on Sundays.' }
];
var FORMAS = [{ k: 'past', t: 'A PAST VERB (I WENT)' }, { k: 'did', t: 'DID YOU …?' }, { k: 'dobro', t: 'DID YOU WENT', erro: 1 }, { k: 'voz', t: 'YOU WENT? (ONLY THE VOICE)', erro: 1 }];

var NOTA = {
  ordem: 'Question word, then did, then you, then the verb.', dobro: 'did is already the past. After it, the base verb: go, eat, see.', presente: 'Saturday is over: did, not do.',
  sem: 'A real question starts with Did.', were: 'With a verb like go: Did you go?', curta: 'The short answer is did. No second verb.', does: 'Saturday is over: did.',
  dont: 'In the past: didn’t.', naosem: 'The short answer: No, she didn’t.', was: 'With watch: did.'
};

var CAPS = [
  { k: 'TIM', ini: 6, fim: 55, q: 'What did Tim do on the weekend? Say three things.', h: 'He went hiking, he ate pasta with his friends, and he watched a horror movie at home.' },
  { k: 'BULI', ini: 55, fim: 83, q: 'Where did Buli go? What did he have there?', h: 'He went to the beach. He had a strawberry ice cream.' },
  { k: 'SIAN', ini: 83, fim: 115, q: 'What did Sian make? Who ate it?', h: 'She made a chocolate cake. Her family ate it all! Then she played frisbee in the park.' },
  { k: 'GEORGIE', ini: 115, fim: 138, q: 'Where did Georgie go swimming? What did she read?', h: 'At the swimming pool. She read a detective story.' }
];

var PRACA = [
  { k: 'DOG WALKER', ic: '🐕', diz: 'I went to the lake with my dog.', mais: 'It was cold, but my dog loved it!', ops: [['Where did you go?', 'ok'], ['Where you went?', 'ordem'], ['Where did you went?', 'dobro']] },
  { k: 'BAKER', ic: '🍞', diz: 'I made bread for my neighbors.', mais: 'Ten loaves! The street smelled great.', ops: [['What did you make?', 'ok'], ['What did you made?', 'dobro'], ['What you made?', 'ordem']] },
  { k: 'CYCLIST', ic: '🚲', diz: 'I rode my bike for three hours.', mais: 'My legs are still tired today.', ops: [['What did you do on Saturday?', 'ok'], ['What you did on Saturday?', 'ordem'], ['What do you do on Saturday?', 'presente']] },
  { k: 'STUDENT', ic: '⏰', diz: 'I got up at 11 AM!', mais: 'Then I had breakfast at 12 PM.', ops: [['What time did you get up?', 'ok'], ['What time did you got up?', 'dobro'], ['What time you got up?', 'ordem']] },
  { k: 'GRANDMA', ic: '🃏', diz: 'I saw my three grandchildren.', mais: 'We played cards all afternoon.', ops: [['Who did you see?', 'ok'], ['Who you saw?', 'ordem'], ['Who did you saw?', 'dobro']] },
  { k: 'MUSICIAN', ic: '🎸', diz: 'I played the guitar at a birthday party.', mais: 'At my friend’s house. Forty people came!', ops: [['Where did you play?', 'ok'], ['Where did you played?', 'dobro'], ['Where you played?', 'ordem']] },
  { k: 'FOOD FAN', ic: '🌮', diz: 'I ate tacos at a food truck.', mais: 'Four tacos. Maybe five.', ops: [['What did you eat?', 'ok'], ['What did you ate?', 'dobro'], ['What do you eat?', 'presente']] },
  { k: 'MOVIE FAN', ic: '🎬', diz: 'I watched two movies at home.', mais: 'A comedy and a horror movie.', ops: [['How many movies did you watch?', 'ok'], ['How many movies you watched?', 'ordem'], ['How many movies did you watched?', 'dobro']] }
];

var FITAS = [['YES / NO', 'Did you + verb …?'], ['QUESTION WORD', 'Where / What / Who + did you + verb?'], ['SHORT ANSWER', 'Yes, I did. · No, I didn’t.']];
var ARMAS = [
  ['ONE PAST ONLY', 'Did you went to the lake?', 'Did you go to the lake?', 'did is already the past. After it: go, eat, see.'],
  ['THE ORDER', 'Where you went on Saturday?', 'Where did you go on Saturday?', 'Question word, did, you, verb.'],
  ['NOT JUST YOUR VOICE', 'You watched the game?', 'Did you watch the game?', 'A real question starts with Did.'],
  ['SHORT ANSWERS', 'Yes, I went. / No, I didn’t slept.', 'Yes, I did. / No, I didn’t.', 'Answer with did or didn’t. No second verb.']
];

var PISTAS = [
  { base: 'go to the market', sim: 1, diz: 'Yes, I did. I bought tomatoes and fish.', ed: 'Did she go to the market?', ops: [['Did you go to the market?', 'ok'], ['Did you went to the market?', 'dobro'], ['You went to the market?', 'sem']], cops: [['Yes, she did.', 'ok'], ['Yes, she went.', 'curta'], ['Yes, she does.', 'does']] },
  { base: 'sleep late', sim: 0, diz: 'No, I didn’t. I got up at 5 AM.', ed: 'Did she sleep late?', ops: [['Did you sleep late?', 'ok'], ['Did you slept late?', 'dobro'], ['Do you sleep late?', 'presente']], cops: [['No, she didn’t.', 'ok'], ['No, she didn’t slept.', 'dobro'], ['No, she don’t.', 'dont']] },
  { base: 'cook dinner for twenty people', sim: 1, diz: 'Yes, I did. Every Saturday!', ed: 'Did she cook dinner for twenty people?', ops: [['Did you cook dinner for twenty people?', 'ok'], ['Did you cooked dinner for twenty people?', 'dobro'], ['You cooked dinner for twenty people?', 'sem']], cops: [['Yes, she did.', 'ok'], ['Yes, she cooked.', 'curta'], ['Yes, she do.', 'does']] },
  { base: 'go to the beach', sim: 0, diz: 'No, I didn’t. No time!', ed: 'Did she go to the beach?', ops: [['Did you go to the beach?', 'ok'], ['Were you go to the beach?', 'were'], ['You went to the beach?', 'sem']], cops: [['No, she didn’t.', 'ok'], ['No, she didn’t went.', 'dobro'], ['No, she not.', 'naosem']] },
  { base: 'buy a new knife', sim: 1, diz: 'Yes, I did. A very big one.', ed: 'Did she buy a new knife?', ops: [['Did you buy a new knife?', 'ok'], ['Did you bought a new knife?', 'dobro'], ['Do you buy a new knife?', 'presente']], cops: [['Yes, she did.', 'ok'], ['Yes, she bought.', 'curta'], ['Yes, she does.', 'does']] },
  { base: 'go dancing', sim: 0, diz: 'No, I didn’t. I was in the kitchen all night.', ed: 'Did she go dancing?', ops: [['Did you go dancing?', 'ok'], ['You went dancing?', 'sem'], ['Were you go dancing?', 'were']], cops: [['No, she didn’t.', 'ok'], ['No, she don’t.', 'dont'], ['No, she didn’t went.', 'dobro']] },
  { base: 'watch a soccer game', sim: 1, diz: 'Yes, I did. On the kitchen TV!', ed: 'Did she watch a soccer game?', ops: [['Did you watch a soccer game?', 'ok'], ['Did you watched a soccer game?', 'dobro'], ['You watched a soccer game?', 'sem']], cops: [['Yes, she did.', 'ok'], ['Yes, she watched.', 'curta'], ['Yes, she was.', 'was']] },
  { base: 'play video games', sim: 0, diz: 'No, I didn’t. I don’t like them.', ed: 'Did she play video games?', ops: [['Did you play video games?', 'ok'], ['Do you play video games?', 'presente'], ['Did you played video games?', 'dobro']], cops: [['No, she didn’t.', 'ok'], ['No, she not.', 'naosem'], ['No, she didn’t played.', 'dobro']] }
];

var NORA = [
  { ela: 'Good morning! So, did you work on Saturday?', pede: 'And you? Did you work on Saturday?', resp: 'Yes, I did. All day at the office!' },
  { ela: 'Did you go out on Saturday night?', pede: 'Did you go out too? Where did you go?', resp: 'No, I didn’t. I stayed home with a pizza.' },
  { ela: 'What did you eat on Sunday?', pede: 'And you? What did you eat?', resp: 'I ate my mom’s lasagna. Now I’m hungry, and it’s only 8 AM.' },
  { ela: 'Who did you see on the weekend?', pede: 'And you? Who did you see?', resp: 'I saw my sister. Good questions: you’re a real reporter now.' }
];

var QUIZ = [
  { a: '', b: ' you go to the park on Saturday?', op: ['Did', 'Do', 'Were'], nao: 'A past question: Did you go …?' },
  { a: 'Where did you ', b: ' on Sunday?', op: ['go', 'went', 'goes'], nao: 'After did, the base verb: go.' },
  { a: 'What ', b: ' you eat at the party?', op: ['did', 'do', 'was'], nao: 'The party is over: did.' },
  { a: 'Did you see the game? Yes, I ', b: '.', op: ['did', 'saw', 'do'], nao: 'Short answer with did.' },
  { a: 'Did she sleep late? No, she ', b: '.', op: ['didn’t', 'don’t', 'wasn’t'], nao: 'Short answer in the past: didn’t.' }
];

var RODA = [
  { k: 'MORNING', q: 'What time did you get up on Saturday?', ex: 'I got up at 9 AM. And you? What time did you get up?' },
  { k: 'FOOD', q: 'What did you eat on Saturday?', ex: 'I ate pizza with my family. What did you eat?' },
  { k: 'PEOPLE', q: 'Who did you see last weekend?', ex: 'I saw my best friend. Who did you see?' },
  { k: 'PLACES', q: 'Where did you go last weekend?', ex: 'I went to the mall. Where did you go?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0, cap: 0, viu: {} }, praca: { sel: -1, esc: {} }, guest: { n: 0, q: '', c: '' }, nora: { n: 0, viu: {} }, quiz: { esc: {} }, roda: { sel: -1, foi: {} } };

function pagina(titulo, corpo, cls) {
  return '<div class="jornal' + (cls ? ' ' + cls : '') + '"><div class="cabeca-j"><small>MONDAY · STREET INTERVIEWS · 1 PAGE</small><b>The Monday Morning</b><small class="col">WHAT DID YOU DO ON SATURDAY?</small></div>' + (titulo ? '<h3 class="manchete">' + titulo + '</h3>' : '') + corpo + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · THE MONDAY MIC</span><h1>What Did You Do <b>on Saturday?</b></h1>'
    + '<p class="sub">Monday morning, one microphone, one question. <b>Where did you go? Did you have fun?</b> Yes, I did!</p>'
    + '<div class="chipsx"><span class="pilula">Did you …?</span><span class="pilula">Where did you go?</span><span class="pilula">Yes, I did</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Take the mic</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-j">' + pagina('Who Is the Mystery Guest?', '<div class="foto-j" style="background-image:url(' + img('capa') + ')"></div><p class="lead-j">Eight clues. One microphone. Your questions decide the headline.</p>') + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>What do people do on the weekend? Does somebody go to the beach?</h2></div>' + fala('va', ['They …', 'I think …'], ['sleep late', 'see friends', 'watch movies', 'go to the beach']) + mostra('va', 'They sleep late, they see friends, and they watch movies. Maybe one person goes to the beach.', 1) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Four weekends', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Video: chapter ' + (e.cap + 1) + ' of 4 · ' + k.k + '</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + (i + 1) + ' · ' + x.k.charAt(0) + x.k.slice(1).toLowerCase() + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>CHAPTER ' + (e.cap + 1) + ' · ' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h)
      + '<div class="acoes">' + (e.cap < 3 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div>'
      + '<p class="nota-br">They are British: they say <b>at the weekend</b>. In American English: <b>on the weekend</b>.</p></div></div>';
  } else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>They ask “What did you eat? What did you watch?” Which little word is in every question? Now you: ask your teacher two questions about their weekend.</h2></div>' + fala('vb', ['What did you …?', 'Where did you …?'], []) + mostra('vb', 'did. What did you do on the weekend? What did you eat?') + '<p class="aprova" style="text-align:center">The question has did; the answer has the past.</p></div>';
  return cab(c) + passos + corpo;
};

R.praca = function (c) {
  var e = S.praca, x = e.sel >= 0 ? PRACA[e.sel] : null, nota = 0;
  PRACA.forEach(function (_, i) { if (e.esc[i] === 'ok') nota++; });
  var grade = '<div class="gente">' + PRACA.map(function (p, i) { return '<button type="button" class="pessoa vd' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feito' : '') + '" data-a="pc" data-n="' + i + '"><span>' + p.ic + '</span><b>' + p.k + '</b></button>'; }).join('') + '</div>';
  var lado = '<p class="dica-aluno">Tap a person.</p>';
  if (x) {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="balao vd"><small>' + x.k + ' SAID</small><p>“' + x.diz + '”</p></div><p class="ini">Your question:</p><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) {
      return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="pc-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
      + (esc && !ok ? '<p class="recusa">' + NOTA[esc] + ' Ask again.</p>' : '') + (ok ? '<div class="balao vd resp"><small>' + x.k + '</small><p>“' + x.mais + '”</p></div>' : '');
  }
  return cab(c) + '<div class="mesa-p"><div class="lado-l">' + grade + '<div class="caderno vd"><small>YOUR NOTEBOOK</small><b>' + nota + ' / 8 interviews</b></div></div><div class="lado-l">' + lado + (nota === 8 ? '<p class="aprova">Eight questions, and the same little word in every one. Let’s open it.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.guest = function (c) {
  var e = S.guest, n = e.n, fim = n >= PISTAS.length;
  var lista = '<ol class="pistas">' + PISTAS.map(function (p, i) { return '<li class="' + (i < n ? 'feita' : i === n ? 'agora' : '') + '"><span>' + (i + 1) + '</span><b>' + p.base + '</b>' + (i < n ? '<i class="carimbo-' + (p.sim ? 'sim' : 'nao') + '">' + (p.sim ? 'YES' : 'NO') + '</i>' : '') + '</li>'; }).join('') + '</ol>';
  var pag = pagina(fim ? 'She’s a Chef!' : 'Who Is the Mystery Guest?', lista, 'pag-guest');
  var lado;
  if (fim) lado = '<div class="pergunta vd"><small>THE HEADLINE</small><h2>“Our mystery guest is the chef from Maple Street. On Saturday, she went to the market and cooked for twenty people.”</h2></div>' + follow('THE EDITOR ASKS', 'Who is she? Why do you think so?', ['She’s a …, because she …'], [], 'gst', mostra('gst', 'She’s a chef, because she went to the market, bought a knife and cooked for twenty people.'));
  else {
    var x = PISTAS[n], qok = e.q === 'ok', cok = e.c === 'ok';
    lado = '<div class="pede vd"><small>CLUE ' + (n + 1) + ' · ASK THE GUEST</small><b>' + (qok ? x.ops[0][0] : x.base + ' → Did you …?') + '</b></div>' + (qok ? '' : '<div class="versoes">' + ordem(x.ops, n + 1).map(function (o) {
      return '<button type="button" class="versao' + (e.q === o[1] ? ' errado' : '') + '" data-a="gq" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>') + (e.q && !qok ? '<p class="recusa">' + NOTA[e.q] + '</p>' : '');
    if (qok) lado += '<div class="balao vd"><small>THE GUEST</small><p>“' + x.diz + '”</p></div><div class="balao vd resp"><small>NORA · THE EDITOR</small><p>“' + x.ed + '”</p></div><div class="tres-b">' + ordem(x.cops, n + 2).map(function (o) {
      return '<button type="button" class="pilula' + (e.c === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="gc" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.c && !cok ? '<p class="recusa">' + NOTA[e.c] + '</p>' : '') + (cok ? '<div><button type="button" class="btn" data-a="g-prox">' + (n === PISTAS.length - 1 ? 'Print the page' : 'Next clue') + '</button></div>' : '');
  }
  return cab(c) + '<div class="mesa-g"><div class="vd g-box">' + pag + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.nora = function (c) {
  var e = S.nora, n = e.n, fim = n >= NORA.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('estudio') + ')"><span>NORA · THE EDITOR · 8 AM</span></div>';
  if (fim) return cab(c) + '<div class="mesa-g">' + foto + '<div class="lado-l">' + follow('THE BIG QUESTION', 'Is Saturday the best day of the week? Why, or why not?', ['Yes, because on Saturday I …', 'No, I think … is better, because …'], [], 'nora', mostra('nora', 'Yes, because on Saturday I don’t work and I see my friends.', 1)) + '</div></div>';
  var x = NORA[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-g">' + foto + '<div class="lado-l">' + trilha(NORA, n) + '<div class="balao vd"><small>NORA</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>NOW ASK HER</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>NORA</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="nr-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="nr-viu">Asked · show her answer</button><p class="dica-aluno">Yes, I did / No, I didn’t, then one more sentence.</p></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Five out of five. Now the last interview is about you.</p>' : '');
};

R.roda = function (c) {
  var e = S.roda, x = e.sel >= 0 ? RODA[e.sel] : null;
  return cab(c) + '<div class="mesa-g"><div class="cartoes-c">' + RODA.map(function (k, i) { return '<button type="button" class="cartao-c' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feito' : '') + '" data-a="rd" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + k.k + '</b></button>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('rd' + e.sel, ['Yes, I did. / No, I didn’t.', 'I …ed / went / ate …', 'And you? … did you …?'], []) + mostra('rd' + e.sel, x.ex, 1) : '<p class="dica-aluno">Pick a card. Answer, then ask: And you?</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Where did you go on Saturday? I went to …\nDid you …? Yes, I did.', 'Your interview',
    ['Did you ', 'Where did you ', 'What did you ', 'Who did you ', 'Yes, I did. ', 'No, I didn’t. '], ['THE MONDAY PAGE', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write the interview with did.' : 'Three questions about last Saturday, and your answers.'])
    + '<div class="lado-fim"><div class="grande vd"><span><u>Did</u> you <u>go</u>? one past only</span><span>Where <u>did you go</u>? word, did, you, verb</span><span>Yes, I <u>did</u>. No, I <u>didn’t</u>.</span></div>'
    + mostra('fim', 'Where did you go on Saturday? I went to the beach.<br>Did you swim? Yes, I did.<br>Who did you see? I saw my cousins.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.pc = function (b, n) { S.praca.sel = n; };
TOQUES['pc-v'] = function (b, n, v) { S.praca.esc[S.praca.sel] = v; };
TOQUES.gq = function (b, n, v) { S.guest.q = v; };
TOQUES.gc = function (b, n, v) { S.guest.c = v; };
TOQUES['g-prox'] = function () { S.guest = { n: S.guest.n + 1, q: '', c: '' }; };
TOQUES['nr-viu'] = function () { S.nora.viu[S.nora.n] = 1; };
TOQUES['nr-prox'] = function () { S.nora.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
TOQUES.rd = function (b, n) { S.roda.sel = n; S.roda.foi[n] = 1; };
