/* ============================================================
   WHAT ARE THEY DOING? · AFTERNOON CLASS · LIVE CLASS  05/10/2026
   Main series A1 · present continuous: am / is / are + verb-ing · a
   ortografia do -ing (writing, running) · isn't / aren't / I'm not ·
   Is it raining? — Yes, it is.
   O MUNDO: duas da tarde, uma escola, todo mundo com sono. O coração é o
   curta SEM FALA "Afternoon Class" (CAYDRIbXFAc), em sete capítulos: o
   aluno é a voz do filme. A cara: a FACHADA da escola ao entardecer, em
   CSS, com oito janelas acesas; cada janela abre uma cena (as imagens da
   aula velha, que eram pastel claro, escurecidas para ~68 de média).
   Sem áudio (a aula velha não tinha). Fila: FILA-LIVE-386.md · 036.
   ============================================================ */
var YT = 'CAYDRIbXFAc';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'capa', rot: 'I · Two O’Clock', t: 'Your afternoon, right now.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'janelas', est: 'o', min: 7, img: 'predio', rot: 'II · The School Windows', t: 'Eight windows. Something is happening in every one.', p: 'Open a window. Say what is happening right now.' },
  { k: 'regra', est: 'f', min: 6, img: 'travesseiro', rot: 'III · The Rule', t: 'Right now: two pieces, always.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'ing', est: 'f', min: 6, img: 'travesseiro', rot: 'IV · Spell the -ing', t: 'Add -ing. Sometimes the verb changes a little.', p: 'Say it, then tap the right spelling.' },
  { k: 'filme', est: 'l', min: 10, img: 'capa', rot: 'V · The Film', t: 'Afternoon Class: a short film with no words.', p: 'It plays in chapters. After each one, you are the voice of the film.' },
  { k: 'zoom', est: 'o', min: 7, extra: 1, img: 'capa', rot: 'VI · Zoom In', t: 'Very close, very blurry. What is happening?', p: 'Ask: Is it …ing? Are they …ing? Every no opens the photo a little.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'capa', rot: 'VII · Quick Check', t: 'Six sentences from the afternoon.', p: 'Say the whole sentence. Then tap the words.' },
  { k: 'maya', est: 'o', min: 7, extra: 1, img: 'celular', rot: 'VIII · The Phone Call', t: 'Your friend Maya is calling, from her afternoon class!', p: 'Your teacher is Maya. Answer about your real life, then ask her.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · The Last Bell', t: 'Right now, in your home.', p: 'Five things happening right now, and one that isn’t. The red line watches the two pieces. It goes to your My notes.' }
];

var ABRE = [
  { k: 'RIGHT NOW', q: 'Where are you right now? What are you doing?', fup: 'And what is your family doing?', st: ['I’m at …', 'I’m …ing.'], ex: 'I’m at home, in my bedroom. I’m studying English!' },
  { k: 'AFTER LUNCH', q: 'What do you usually do after lunch? Work, study, or sleep?', fup: 'Do you feel sleepy?', st: ['I usually …', 'Sometimes I …'], ex: 'I usually work. Sometimes I sleep for twenty minutes!' },
  { k: 'HELP!', q: 'Coffee, a walk, or a nap? What helps you in the afternoon?', fup: 'How many cups?', st: ['… helps me.'], ex: 'Coffee! Two cups.' }
];
var FORMAS = [{ k: 'ing', t: 'AM / IS / ARE + -ING' }, { k: 'simples', t: 'SIMPLE PRESENT (I WORK)' }, { k: 'semis', t: 'NO IS (I STUDYING)', erro: 1 }, { k: 'seming', t: 'NO -ING (I AM STUDY)', erro: 1 }];

var NOTA = {
  semis: 'Two pieces: is + …ing. The is is missing.', semING: 'Two pieces: is + …ing. The -ing is missing.', are: 'One thing: is. More than one: are.',
  semit: 'English needs a front: It’s raining.', dobra: 'Short verb, consonant + vowel + consonant: double it. swim → swimming.'
};
var JANELAS = [
  { img: 'gato', ops: [['The cat is sleeping.', 'ok'], ['The cat sleeping.', 'semis'], ['The cat is sleep.', 'semING']] },
  { img: 'cachorro', ops: [['The dog is playing with a ball.', 'ok'], ['The dog playing with a ball.', 'semis'], ['The dog are playing with a ball.', 'are']] },
  { img: 'passaro', ops: [['The bird is eating.', 'ok'], ['The bird is eat.', 'semING'], ['The bird eating.', 'semis']] },
  { img: 'chuva', ops: [['It’s raining.', 'ok'], ['Is raining.', 'semit'], ['It raining.', 'semis']] },
  { img: 'chaleira', ops: [['The water is boiling.', 'ok'], ['The water boiling.', 'semis'], ['The water is boil.', 'semING']] },
  { img: 'peixe', ops: [['The fish is swimming.', 'ok'], ['The fish is swiming.', 'dobra'], ['The fish swimming.', 'semis']] },
  { img: 'telefone', ops: [['The phone is ringing!', 'ok'], ['The phone ringing!', 'semis'], ['The phone is ring!', 'semING']] },
  { img: 'pipa', ops: [['The kite is flying.', 'ok'], ['The kite are flying.', 'are'], ['The kite flying.', 'semis']] }
];

var FITAS = [['I', 'am sleeping · I’m sleeping'], ['he / she / it', 'is sleeping · she’s sleeping'], ['you / we / they', 'are sleeping · they’re sleeping']];
var ARMAS = [
  ['TWO PIECES', 'The cat sleeping.', 'The cat is sleeping.', 'is + sleeping. Never one piece.'],
  ['THE -ING', 'I am sleep.', 'I am sleeping.', 'am + sleeping. The -ing says right now.'],
  ['NO', 'I amn’t working. He no is sleeping.', 'I’m not working. He isn’t sleeping.', 'I’m not · isn’t · aren’t'],
  ['QUESTION', 'You are studying? Are you study?', 'Are you studying? Yes, I am.', 'am / is / are first. Short answer: no -ing.']
];

var ING = [
  { v: 'eat', ok: 'eating', o: ['eating', 'eatting'], r: 'Most verbs: just add -ing.' },
  { v: 'write', ok: 'writing', o: ['writing', 'writeing'], r: 'Ends in -e? Drop the e.' },
  { v: 'run', ok: 'running', o: ['running', 'runing'], r: 'Short verb, consonant + vowel + consonant: double it.' },
  { v: 'dance', ok: 'dancing', o: ['dancing', 'danceing'], r: 'Drop the e.' },
  { v: 'sit', ok: 'sitting', o: ['sitting', 'siting'], r: 'Double the t.' },
  { v: 'play', ok: 'playing', o: ['playing', 'plaing'], r: 'Ends in -y? Keep it: playing.' },
  { v: 'make', ok: 'making', o: ['making', 'makking'], r: 'Drop the e. No double.' },
  { v: 'swim', ok: 'swimming', o: ['swimming', 'swiming'], r: 'Double the m.' }
];

var FILME = {
  antes: 'The film is called Afternoon Class. It’s two o’clock. What do you think is happening in the class?',
  caps: [
    { k: 'THE CLOCK', ini: 0, fim: 14, q: 'What is the teacher doing? And the boy?', h: 'The teacher is writing on the board. The boy is sitting at his desk. He’s looking at the clock.' },
    { k: 'THE CLASS', ini: 14, fim: 32, q: 'Look at the other students. What are they doing?', h: 'They’re sleeping! A girl is looking at the ceiling.' },
    { k: 'THE HEAD', ini: 32, fim: 53, q: 'What is happening to the boy’s head?', h: 'It’s getting heavy. It’s falling! He’s fighting the sleep.' },
    { k: 'THE TEACHER', ini: 53, fim: 94, q: 'What is the teacher doing now? Is the boy sleeping?', h: 'The teacher is looking at the boy. No, he isn’t sleeping. He’s trying to stay awake!' },
    { k: 'THE PILLOW', ini: 94, fim: 117, q: 'What is the boy doing? And what is happening to his desk?', h: 'He’s yawning. His desk is turning into a big yellow pillow!' },
    { k: 'THE DREAM', ini: 117, fim: 179, q: 'Everything is dark and full of colors. What is he doing now?', h: 'He’s sleeping. He’s dreaming about his family and his home.' },
    { k: 'THE END', ini: 179, fim: 212, q: 'The end! What is the teacher doing now?', h: 'He’s sitting at his desk… and he’s falling asleep too!' }
  ],
  depois: 'Imagine your school or office at two o’clock. What are the people doing?'
};

var ZOOM = [
  { img: 'zoom-sorvete', foco: '25% 78%', ok: 'The ice cream is melting.', q: 'Is it melting?', dica: 'It’s cold, and it’s sweet. The sun is very hot…' },
  { img: 'zoom-ventilador', foco: '48% 45%', ok: 'The fan is turning.', q: 'Is it turning?', dica: 'It’s hot in the classroom. This helps.' },
  { img: 'zoom-folhas', foco: '30% 28%', ok: 'The leaves are falling.', q: 'Are they falling?', dica: 'It’s fall. Look at the colors.' },
  { img: 'zoom-vela', foco: '50% 52%', ok: 'The candle is burning.', q: 'Is it burning?', dica: 'There is no electricity. A little light.' },
  { img: 'zoom-roupa', foco: '66% 40%', ok: 'The clothes are drying.', q: 'Are they drying?', dica: 'It’s sunny. They are wet from the washing machine.' }
];

var QUIZ = [
  { a: 'Shh! The baby ', b: '.', op: ['is sleeping', 'sleeping', 'is sleep'], nao: 'Two pieces: is + sleeping.' },
  { a: 'Look! The children ', b: ' in the rain.', op: ['are running', 'are runing', 'is running'], nao: 'They → are, and run → running.' },
  { a: 'The teacher ', b: ' on the board.', op: ['is writing', 'is writeing', 'are writing'], nao: 'write → writing: drop the e.' },
  { a: 'I ', b: ' TV right now. I’m studying!', op: ['’m not watching', 'not watching', 'isn’t watching'], nao: 'With I: I’m not + verb-ing.' },
  { a: '', b: ' you listening to me?', op: ['Are', 'Is', 'Do'], nao: 'You → are, and it goes first.' },
  { a: '“Is the boy sleeping?” “No, he ', b: '.”', op: ['isn’t', 'doesn’t', 'not'], nao: 'Short answer with is: No, he isn’t.' }
];

var MAYA = [
  { ela: 'Hi, it’s me, Maya! What are you doing right now?', pede: 'And you? What are you doing?', resp: 'I’m sitting in my afternoon class. It’s sooo boring!' },
  { ela: 'Where are you now? Are you at home?', pede: 'Is your teacher talking?', resp: 'Yes, he is. He’s writing on the board… again.' },
  { ela: 'What’s the weather like there? Is it raining?', pede: 'Is it raining there?', resp: 'No, it isn’t. The sun is shining, and everybody is sleeping!' },
  { ela: 'What are your family or friends doing now? Guess!', pede: 'What are your friends doing?', resp: 'Ha! Leo is sleeping on his desk. Oh no, the teacher is looking at me. Bye!' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, jan: { sel: -1, esc: {} }, ing: { n: 0, esc: '' }, filme: { p: 0, cap: 0, viu: {} }, zoom: { n: 0, nao: 0, achou: 0 }, quiz: { esc: {} }, maya: { n: 0, viu: {} } };

function fachada(sel, feitos, cls) {
  return '<div class="fachada' + (cls ? ' ' + cls : '') + '"><div class="telhado"><span>SCHOOL</span><b class="relogio">2:00</b></div><div class="janelas">' + JANELAS.map(function (j, i) {
    return '<button type="button" class="janela' + (sel === i ? ' on' : '') + (feitos[i] ? ' feito' : '') + '" data-a="jn" data-n="' + i + '" style="background-image:url(' + img(j.img) + ')" aria-label="Window ' + (i + 1) + '"><span>' + (i + 1) + '</span></button>';
  }).join('') + '</div><div class="porta"></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · AFTERNOON CLASS</span><h1>What Are They <b>Doing?</b></h1>'
    + '<p class="sub">It’s two o’clock. The clock is ticking. And everybody is falling asleep…</p>'
    + '<div class="chipsx"><span class="pilula">am / is / are + -ing</span><span class="pilula">isn’t · aren’t</span><span class="pilula">Is it raining?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the class</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-f">' + fachada(-1, {}, 'capa-fach') + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.janelas = function (c) {
  var e = S.jan, feitos = {}; JANELAS.forEach(function (_, i) { if (e.esc[i] === 'ok') feitos[i] = 1; });
  var x = e.sel >= 0 ? JANELAS[e.sel] : null, lado;
  if (!x) lado = '<p class="dica-aluno">Tap a window.</p>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="aberta vd" style="background-image:url(' + img(x.img) + ')"><span>WINDOW ' + (e.sel + 1) + '</span></div><p class="ini">What is happening?</p><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) {
      return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="jn-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
      + (esc && !ok ? '<p class="recusa">' + NOTA[esc] + ' Say it again.</p>' : '') + (ok ? '<p class="aprova">GOT IT. Right now, in window ' + (e.sel + 1) + '.</p>' : '');
  }
  var todos = Object.keys(feitos).length === 8;
  return cab(c) + '<div class="mesa-jan"><div class="vd fach-box">' + fachada(e.sel, feitos) + '</div><div class="lado-l">' + lado + (todos ? '<p class="aprova">Eight windows, eight things happening right now.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.ing = function (c) {
  var e = S.ing, n = e.n;
  var feitos = '<div class="quadro-ing">' + ING.map(function (x, i) { return '<span class="' + (i < n ? 'feito' : i === n ? 'agora' : '') + '"><b>' + x.v + '</b><i>' + (i < n ? x.ok : '…') + '</i></span>'; }).join('') + '</div>';
  if (n >= ING.length) return cab(c) + feitos + '<div class="foco"><div class="pergunta vd"><small>THREE WAYS</small><h2>eat → eating · write → writing · run → running</h2></div></div>';
  var x = ING[n], ok = e.esc === x.ok;
  return cab(c) + feitos + '<div class="foco"><div class="pergunta vd"><small>THE VERB</small><h2>' + x.v + ' → ?</h2></div><div class="tres-b centro">' + ordem(x.o, n).map(function (o) {
    return '<button type="button" class="pilula grande' + (e.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="ig" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
    + (e.esc ? '<p class="' + (ok ? 'aprova' : 'recusa') + '" style="text-align:center">' + (ok ? 'GOT IT. ' : 'Not that one. ') + x.r + '</p>' : '') + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="ig-prox">Next</button></div>' : '') + '</div>';
};

R.filme = function (c) {
  var e = S.filme, passos = '<div class="tres-tempos">' + tempos3(e.p, 'fm-p') + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="mesa-jan"><div class="aberta vd grande" style="background-image:url(' + img('capa') + ')"><span>2:00 · THE CLASSROOM</span></div><div class="lado-l"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>' + FILME.antes + '</h2></div>' + fala('fa', ['I think the students are …', 'The teacher is …'], ['sleeping', 'writing', 'looking', 'yawning']) + mostra('fa', 'I think the students are sleeping!', 1) + '<div><button type="button" class="btn cheio" data-a="fm-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = FILME.caps[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Afternoon Class', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Afternoon Class · chapter ' + (e.cap + 1) + ' of 7 · ' + k.ini + 's to ' + k.fim + 's</small></div><div class="lado-video"><div class="caps">'
      + FILME.caps.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="fm-c" data-n="' + i + '">' + (i + 1) + ' · ' + x.k.replace('THE ', '').toLowerCase() + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>CHAPTER ' + (e.cap + 1) + ' · ' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('fm' + e.cap, k.h, 1)
      + '<div class="acoes">' + (e.cap < 6 ? '<button type="button" class="btn" data-a="fm-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="fm-p" data-n="2">After the film</button>') + '</div></div></div>';
  } else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>Do you like the ending? ' + FILME.depois + '</h2></div>' + fala('fd', ['My boss is …', 'Everybody is …', 'I’m …'], []) + mostra('fd', 'Yes! The teacher is sleepy too. At two o’clock my boss is drinking coffee and my friend is looking at his phone.', 1) + '<p class="aprova" style="text-align:center">You are the voice of the film.</p></div>';
  return cab(c) + passos + corpo;
};

R.zoom = function (c) {
  var e = S.zoom, n = e.n;
  if (n >= ZOOM.length) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>Five photos, five things happening right now.</h2></div></div>';
  var x = ZOOM[n], esc = Math.max(1, 4 - e.nao * 0.8), blur = e.achou ? 0 : Math.max(0, 14 - e.nao * 4);
  return cab(c) + trilha(ZOOM, n) + '<div class="mesa-jan"><div class="zoom-box vd"><div class="zoom-img" style="background-image:url(' + img(x.img) + ');background-position:' + x.foco + ';transform:scale(' + (e.achou ? 1 : esc) + ');filter:blur(' + blur + 'px);transform-origin:' + x.foco + '"></div></div><div class="lado-l">'
    + '<div class="pergunta vd"><small>ASK</small><h2>Is it …ing? Are they …ing?</h2></div>' + fala('zm' + n, ['Is it …ing?', 'Are they …ing?'], [])
    + (e.achou ? '<p class="aprova">GOT IT. ' + x.ok + '</p><div><button type="button" class="btn" data-a="zm-prox">Next photo</button></div>'
      : '<div class="so-prof acoes"><button type="button" class="pilula" data-a="zm-nao">No, it isn’t · open a little</button><button type="button" class="btn" data-a="zm-sim">Yes, it is!</button></div>' + (e.nao >= 2 ? '<p class="dica-aluno">A clue: ' + x.dica + '</p>' : '')) + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. Oh! The phone is ringing.</p>' : '');
};

R.maya = function (c) {
  var e = S.maya, n = e.n, fim = n >= MAYA.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('celular') + ')"><span>MAYA IS CALLING</span></div>';
  if (fim) return cab(c) + '<div class="mesa-jan">' + foto + '<div class="lado-l"><div class="balao vd achou"><small>MAYA</small><p>“Bye!” Click.</p></div>' + follow('THE BIG QUESTION', 'Is it OK to take a nap in the afternoon? Why?', ['I think it’s OK, because …', 'I don’t think so, because …'], ['sleepy', 'tired', 'work', 'twenty minutes'], 'nap', mostra('nap', 'I think it’s OK. Twenty minutes, after lunch. But not in class!', 1)) + '</div></div>';
  var x = MAYA[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-jan">' + foto + '<div class="lado-l">' + trilha(MAYA, n) + '<div class="balao vd"><small>MAYA</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>NOW ASK HER</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>MAYA</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="my-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="my-viu">Asked · show her answer</button><p class="dica-aluno">Answer her. Then ask your question.</p></div>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’m sitting at my desk.\nMy cat is sleeping.\nIt isn’t raining.', 'Right now',
    ['I’m ', 'is ', 'are ', 'isn’t ', 'aren’t ', 'I’m not '], ['RIGHT NOW', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write, two pieces every time.' : 'Five things happening in your home right now, and one that isn’t.'])
    + '<div class="lado-fim"><div class="grande vd"><span>two pieces: <u>is</u> + <u>sleeping</u></span><span>write → <u>writing</u> · run → <u>running</u></span><span>no: <u>isn’t</u> · <u>aren’t</u> · <u>I’m not</u></span><span>question: <u>Is it</u> raining? Yes, it is.</span></div>'
    + mostra('fim', 'I’m sitting on my bed. My brother is playing video games.<br>My mom is cooking. The dog is sleeping. It’s raining.<br>I’m not watching TV!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.jn = function (b, n) { S.jan.sel = n; };
TOQUES['jn-v'] = function (b, n, v) { S.jan.esc[S.jan.sel] = v; };
TOQUES.ig = function (b, n, v) { S.ing.esc = v; };
TOQUES['ig-prox'] = function () { S.ing = { n: S.ing.n + 1, esc: '' }; };
TOQUES['fm-p'] = function (b, n) { S.filme.p = n; };
TOQUES['fm-c'] = function (b, n) { S.filme.viu[S.filme.cap] = 1; S.filme.cap = n; };
TOQUES['zm-nao'] = function () { S.zoom.nao = Math.min(5, S.zoom.nao + 1); };
TOQUES['zm-sim'] = function () { S.zoom.achou = 1; };
TOQUES['zm-prox'] = function () { S.zoom = { n: S.zoom.n + 1, nao: 0, achou: 0 }; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
TOQUES['my-viu'] = function () { S.maya.viu[S.maya.n] = 1; };
TOQUES['my-prox'] = function () { S.maya.n++; };
