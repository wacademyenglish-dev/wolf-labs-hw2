/* ============================================================
   WHERE ARE YOU FROM? · STREET VOICES · LIVE CLASS  05/10/2026
   Main series A1 · wh-questions: wh + do/does + pessoa + verbo · wh + be
   (sem do) · from / with no FIM · where / what / who / when
   O MUNDO (da aula velha): Nadia Brooks faz entrevistas de rua numa feira
   de Londres; o vento estragou o microfone e o gravador guardou SÓ AS
   RESPOSTAS. O aluno devolve as perguntas. Vídeo real (31y2Bq1RYQA, BBC Learning English; até 20/10 era DDjWTWHHkpk, rápido demais para o A1) em
   quatro partes, sem citar o canal na tela. A CARA: seis FICHAS de
   identidade escuras com a linha da pergunta vazia (preenche quando o
   aluno acerta) e um PASSAPORTE com oito carimbos (a pressão, com does).
   Sem áudio. Fila: FILA-LIVE-386.md · 039.
   ============================================================ */
var YT = '31y2Bq1RYQA';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'rua', rot: 'I · You and Your City', t: 'Before the street: you, your city, your people.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'palavras', est: 'l', img: 'feira', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'feira', rot: 'III · Real Voices', t: 'Four friends, four cities.', p: 'Four short parts. Tap a question word every time you hear it.' },
  { k: 'falas', est: 'l', extra: 1, img: 'feira', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'fichas', est: 'o', min: 7, img: 'microfone', rot: 'V · The Lost Questions', t: 'The wind broke the microphone. Six answers, zero questions.', p: 'Tap a card. Read the answer. Give the question for it.' },
  { k: 'regra', est: 'f', min: 6, img: 'passaporte', rot: 'VI · The Rule', t: 'Question word, helper, person, verb. The little word goes at the end.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'carimbo', est: 'o', min: 7, img: 'estudio', rot: 'VII · Live at 7 PM', t: 'The show is live. Ask, and stamp the passport.', p: 'The producer shows a card. Ask about that person at once, with does or is.' },
  { k: 'nadia', est: 'o', min: 7, extra: 1, img: 'rua', rot: 'VIII · Your Turn at the Mic', t: 'Next day, Nadia is on YOUR street.', p: 'Your teacher is Nadia. Answer, then ask her the same question back.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'passaporte', rot: 'IX · Quick Check', t: 'Six quick questions from the show.', p: 'Say the whole question. Then tap the word.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'estudio', rot: 'X · Interview Me', t: 'You are the reporter now.', p: 'Pick a card. Ask your teacher the question. Then your teacher asks it back.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XI · After the Show', t: 'Write three ID cards.', p: 'Three people in your life: a question and an answer for each. The red line watches do and from. It goes to your My notes.' }
];

var ABRE = [
  { k: 'YOUR CITY', q: 'Where do you live? Is it a big city or a small town?', fup: 'Do you like it?', st: ['I live in …', 'It’s a …'], ex: 'I live in a big city by the sea. It’s hot!' },
  { k: 'YOUR FAMILY', q: 'Where is your family from?', fup: 'And your best friend?', st: ['My mom is from …'], ex: 'My mom is from the north, and my dad is from the south.' },
  { k: 'FIRST QUESTION', q: 'You meet a new person. What is your first question?', fup: 'Now ask me.', st: ['My first question is …'], ex: 'My first question is always: What’s your name?' }
];
var FORMAS = [{ k: 'from', t: 'WHERE ARE YOU FROM?' }, { k: 'do', t: 'WHERE DO YOU …?' }, { k: 'prep', t: 'FROM WHERE ARE YOU?', erro: 1 }, { k: 'semdo', t: 'WHERE YOU LIVE?', erro: 1 }];

var NOTA = {
  prep: 'The question word goes first. from and with go at the end.', dobe: 'from goes with be: Where are you from? No do.', semdo: 'An action verb needs do / does in the question.',
  belive: 'live is an action verb: do, not are.', make: 'For a job: What do you do?', ordem: 'With be: When is your birthday? is comes before the person.', s: 'With you: get. No s.',
  s2: 'Only one s: does takes it. The verb is simple.', dodoes: 'He / she / a name: does.', quem: 'A singer is a person: who.'
};

var PARTES = [
  { k: 'PART 1', ini: 0, fim: 60, q: 'Four friends. Where are they from? Say one.', h: 'Tim is from Oxford.' },
  { k: 'PART 2', ini: 60, fim: 134, q: 'A quiz: who is from Swansea? Answer before they do!', h: 'Sian is from Swansea.' },
  { k: 'PART 3', ini: 134, fim: 187, q: 'Where do they live? Who do they live with? Say one.', h: 'Buli lives in a flat in Cambridge. He lives on his own.' },
  { k: 'PART 4', ini: 187, fim: 278, q: 'Who lives in a house? Who lives in a flat?', h: 'Sian and Tim live in a house. Buli and Georgie live in a flat.' }
];
var PALAVRAS = ['WHERE', 'WHAT', 'WHO', 'WHEN'];

var FICHAS = [
  { k: 'ROSA', campo: 'FROM', val: 'Mexico City', diz: 'I’m from Mexico City. I love it there.', ini: 'Where … from?', ops: [['Where are you from?', 'ok'], ['From where are you?', 'prep'], ['Where do you from?', 'dobe']] },
  { k: 'KOFI', campo: 'LIVES IN', val: 'Camden', diz: 'I live in Camden, near the market.', ini: 'Where do …', ops: [['Where do you live?', 'ok'], ['Where you live?', 'semdo'], ['Where are you live?', 'belive']] },
  { k: 'LENA', campo: 'JOB', val: 'a nurse', diz: 'I’m a nurse. I work at a big hospital.', ini: 'What do …', ops: [['What do you do?', 'ok'], ['What do you make?', 'make'], ['What you do?', 'semdo']] },
  { k: 'SAM', campo: 'BIRTHDAY', val: 'May 9th', diz: 'My birthday? It’s on May 9th.', ini: 'When is …', ops: [['When is your birthday?', 'ok'], ['When your birthday is?', 'ordem'], ['When does your birthday?', 'dobe']] },
  { k: 'MEI', campo: 'LIVES WITH', val: 'her sister, two cats', diz: 'I live with my sister. And two cats!', ini: 'Who do … with?', ops: [['Who do you live with?', 'ok'], ['With who you live?', 'prep'], ['Who are you live with?', 'belive']] },
  { k: 'OMAR', campo: 'GETS UP', val: 'at 4 AM', diz: 'I get up at 4 AM. I work at a bakery.', ini: 'When do …', ops: [['When do you get up?', 'ok'], ['When you get up?', 'semdo'], ['When do you gets up?', 's']] }
];

var FITAS = [['WHERE · A PLACE', 'Where do you live?'], ['WHAT · A THING, A JOB', 'What do you do?'], ['WHO · A PERSON', 'Who do you live with?'], ['WHEN · A TIME', 'When is your birthday?']];
var ARMAS = [
  ['FROM AT THE END', 'From where are you? With who you live?', 'Where are you from? Who do you live with?', 'Question word first. from / with at the end.'],
  ['THE HELPER: DO', 'Where you live? Where are you live?', 'Where do you live?', 'An action verb needs do. be doesn’t.'],
  ['HE / SHE: DOES', 'Where does she lives? Where do she work?', 'Where does she live? Where does she work?', 'Only one s: does takes it.'],
  ['WHO, NOT WHAT', 'What is your favorite singer?', 'Who is your favorite singer?', 'A person: who. A job: What do you do?']
];

var CARIMBOS = [
  { k: 'ROSA', campo: 'FROM', ini: 'Where is …', resp: 'Mexico City!', ops: [['Where is Rosa from?', 'ok'], ['From where is Rosa?', 'prep'], ['Where does Rosa from?', 'dobe']] },
  { k: 'KOFI', campo: 'JOB', ini: 'What does …', resp: 'He’s a bus driver.', ops: [['What does Kofi do?', 'ok'], ['What Kofi does?', 'semdo'], ['What does Kofi does?', 's2']] },
  { k: 'LENA', campo: 'WORKS', ini: 'When does …', resp: 'At night, from 8 PM to 6 AM.', ops: [['When does Lena work?', 'ok'], ['When do Lena work?', 'dodoes'], ['When Lena works?', 'semdo']] },
  { k: 'MEI', campo: 'LIVES WITH', ini: 'Who does … with?', resp: 'Her sister. And two cats.', ops: [['Who does Mei live with?', 'ok'], ['With who Mei lives?', 'prep'], ['Who does Mei lives with?', 's2']] },
  { k: 'SAM', campo: 'FAVORITE SINGER', ini: 'Who is …', resp: 'He loves old soul music. He sings in the shower.', ops: [['Who is Sam’s favorite singer?', 'ok'], ['What is Sam’s favorite singer?', 'quem'], ['Who Sam’s favorite singer is?', 'ordem']] },
  { k: 'OMAR', campo: 'GETS UP', ini: 'When does …', resp: 'At 4 AM. Every day!', ops: [['When does Omar get up?', 'ok'], ['When is Omar get up?', 'belive'], ['When does Omar gets up?', 's2']] },
  { k: 'ROSA', campo: 'LIVES IN', ini: 'Where does …', resp: 'In London now, near the river.', ops: [['Where does Rosa live?', 'ok'], ['Where do Rosa live?', 'dodoes'], ['Where Rosa lives?', 'semdo']] },
  { k: 'LENA', campo: 'SUNDAYS', ini: 'What does …', resp: 'She sleeps. All day!', ops: [['What does Lena do on Sundays?', 'ok'], ['What does Lena make on Sundays?', 'make'], ['What Lena does on Sundays?', 'semdo']] }
];

var NADIA = [
  { ela: 'Hi! Street Voices. A few questions, please. Where are you from?', pede: 'I’m from … And where are you from?', resp: 'I’m from Leeds, in the north of England.' },
  { ela: 'And where do you live now?', pede: 'I live in … Where do you live?', resp: 'In a small apartment in London. Very small!' },
  { ela: 'What do you do?', pede: 'I’m a … / I work at … What do you do?', resp: 'Me? I ask people questions all day!' },
  { ela: 'Last one. Who do you live with?', pede: 'I live with … Who do you live with?', resp: 'My cat, Pepper. She never answers my questions.' }
];

var QUIZ = [
  { a: 'Where ', b: ' you from?', op: ['are', 'do', 'is'], nao: 'from with be: Where are you from?' },
  { a: 'Where ', b: ' you live?', op: ['do', 'are', 'does'], nao: 'An action verb with you: do.' },
  { a: 'What ', b: ' she do?', op: ['does', 'do', 'is'], nao: 'He / she: does.' },
  { a: 'When does Omar ', b: ' up?', op: ['get', 'gets', 'getting'], nao: 'does has the s. The verb is simple: get.' },
  { a: '', b: ' is your favorite singer?', op: ['Who', 'What', 'Where'], nao: 'A singer is a person: who.' },
  { a: 'Who do you live ', b: '?', op: ['with', 'from', 'in'], nao: 'The little word goes at the end: with.' }
];

var RODA = [
  { k: 'FROM', q: 'Ask me where I am from.', ex: 'Where are you from?' },
  { k: 'LIVE', q: 'Ask me where I live.', ex: 'Where do you live?' },
  { k: 'JOB', q: 'Ask me about my job.', ex: 'What do you do?' },
  { k: 'BIRTHDAY', q: 'Ask me about my birthday.', ex: 'When is your birthday?' },
  { k: 'LIVE WITH', q: 'Ask me who is at home with me.', ex: 'Who do you live with?' },
  { k: 'FAVORITE', q: 'Ask me about my favorite singer or actor.', ex: 'Who is your favorite singer?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0, cap: 0, viu: {}, ouviu: {} }, fic: { sel: -1, esc: {} }, carimbo: { n: 0, esc: '' }, nadia: { n: 0, viu: {} }, quiz: { esc: {} }, roda: { sel: -1, foi: {} } };

function ficha(x, i, on, ok) {
  return '<button type="button" class="ficha vd' + (on ? ' on' : '') + (ok ? ' feita' : '') + '" data-a="fc" data-n="' + i + '"><div class="f-topo"><b>' + x.k + '</b><small>STREET VOICES · ID</small></div><div class="f-linha"><small>' + x.campo + '</small><span>' + x.val + '</span></div><div class="f-perg"><small>QUESTION</small><span>' + (ok ? x.ops[0][0] : '____________') + '</span></div></button>';
}
function passaporte(n) {
  return '<div class="passaporte vd"><div class="p-topo"><b>PASSPORT</b><small>STREET VOICES · LIVE AT 7 PM</small></div><div class="selos">' + CARIMBOS.map(function (c, i) {
    return '<div class="selo' + (i < n ? ' batido' : i === n ? ' agora' : '') + '" style="--r:' + ((i * 37) % 24 - 12) + 'deg"><b>' + c.k + '</b><small>' + c.campo + '</small></div>';
  }).join('') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · STREET VOICES</span><h1>Where Are You <b>From?</b></h1>'
    + '<p class="sub">Six people, six answers, and no questions. <b>Where are you from? What do you do?</b> Find the questions.</p>'
    + '<div class="chipsx"><span class="pilula">Where do you live?</span><span class="pilula">What does she do?</span><span class="pilula">from at the end</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn on the mic</button>' + faixaLive() + '</div>'
    + '<div class="capa-f">' + ficha(FICHAS[0], 0, 0, 0) + ficha(FICHAS[4], 4, 0, 1) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>Four friends answer two questions. What questions do you think they hear?</h2></div>' + fala('va', ['Where …?', 'What …?'], ['name', 'from', 'live', 'job']) + mostra('va', 'Where are you from? What’s your name? Do you like London?', 1) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, part by part</button></div></div>';
  else if (e.p === 1) {
    var k = PARTES[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Where are you from?', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Video: part ' + (e.cap + 1) + ' of 4</small></div><div class="lado-video"><div class="caps">'
      + PARTES.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + (i + 1) + '</button>'; }).join('') + '</div>'
      + '<h5 class="rot-ouve">TAP WHEN YOU HEAR IT</h5><div class="tres-b">' + PALAVRAS.map(function (w) { return '<button type="button" class="pilula' + (e.ouviu[w] ? ' certo' : '') + '" data-a="vd-w" data-v="' + w + '">' + w + (e.ouviu[w] ? ' · ' + e.ouviu[w] : '') + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div class="acoes">' + (e.cap < 3 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next part</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>Say one question from the video, or ask your own. Now it’s your street: ask me one question.</h2></div>' + fala('vb', ['Where are you from?', 'Where do you live?'], []) + '<p class="aprova" style="text-align:center">Real people, short answers. But what happens with answers and no questions? Meet Nadia.</p></div>';
  return cab(c) + passos + corpo;
};

R.fichas = function (c) {
  var e = S.fic, x = e.sel >= 0 ? FICHAS[e.sel] : null, n = 0;
  FICHAS.forEach(function (_, i) { if (e.esc[i] === 'ok') n++; });
  var grade = '<div class="fichas">' + FICHAS.map(function (f, i) { return ficha(f, i, e.sel === i, e.esc[i] === 'ok'); }).join('') + '</div>';
  var lado = '<p class="dica-aluno">Tap a card.</p>';
  if (x) {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="balao vd"><small>' + x.k + ' · THE RECORDER</small><p>“' + x.diz + '”</p></div><p class="ini">Nadia’s question: ' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) {
      return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="fc-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
      + (esc && !ok ? '<p class="recusa">' + NOTA[esc] + '</p>' : '') + (ok ? '<p class="aprova">GOT IT. The card is full.</p>' : '');
  }
  return cab(c) + '<div class="mesa-f">' + grade + '<div class="lado-l">' + lado + (n === 6 ? '<p class="aprova">Six cards, six questions. Why from at the end, and why do? The rule is next.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.carimbo = function (c) {
  var e = S.carimbo, n = e.n, fim = n >= CARIMBOS.length, lado;
  if (fim) lado = '<div class="pergunta vd"><small>THE PASSPORT IS FULL</small><h2>Eight stamps, and the show is a hit.</h2></div>' + follow('NADIA ASKS', 'Which person do you want to meet? Why?', ['I want to meet …, because …'], [], 'cb', mostra('cb', 'I want to meet Omar, because I love bread!', 1));
  else {
    var x = CARIMBOS[n], ok = e.esc === 'ok';
    lado = '<div class="pede vd"><small>THE PRODUCER · GO!</small><b>' + x.k + ' · ' + x.campo + '</b></div>' + (ok ? '<div class="balao vd"><small>YOUR QUESTION</small><p>' + x.ops[0][0] + '</p></div>' : '<p class="ini">' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 1).map(function (o) {
      return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="cb" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>')
      + (e.esc && !ok ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : '') + (ok ? '<div class="balao vd resp"><small>THE HOST</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="cb-prox">Stamp it</button></div>' : '');
  }
  return cab(c) + trilha(CARIMBOS, n) + '<div class="mesa-f">' + passaporte(fim ? n : (e.esc === 'ok' ? n + 1 : n)) + '<div class="lado-l">' + lado + '</div></div>';
};

R.nadia = function (c) {
  var e = S.nadia, n = e.n, fim = n >= NADIA.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('microfone') + ')"><span>NADIA BROOKS · STREET VOICES</span></div>';
  if (fim) return cab(c) + '<div class="mesa-f">' + foto + '<div class="lado-l">' + follow('THE BIG QUESTION', 'What is the best question to ask a new person? Why?', ['The best question is …, because …'], [], 'big', mostra('big', 'The best question is “What do you do on weekends?”, because people love to talk about it.', 1)) + '</div></div>';
  var x = NADIA[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-f">' + foto + '<div class="lado-l">' + trilha(NADIA, n) + '<div class="balao vd"><small>NADIA</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>ANSWER, THEN ASK BACK</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>NADIA</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="nd-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="nd-viu">Asked back · Nadia answers</button><p class="dica-aluno">The whole question back, not only “And you?”</p></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. Now you ask the questions.</p>' : '');
};

R.roda = function (c) {
  var e = S.roda, x = e.sel >= 0 ? RODA[e.sel] : null;
  return cab(c) + '<div class="mesa-f"><div class="cartoes-c">' + RODA.map(function (k, i) { return '<button type="button" class="cartao-c' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feito' : '') + '" data-a="rd" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + k.k + '</b></button>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('rd' + e.sel, ['Where …?', 'What do you …?', 'Who …?', 'When …?'], []) + mostra('rd' + e.sel, x.ex) : '<p class="dica-aluno">Pick a card. Ask, then answer it too.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Where is my sister from? She’s from …\nWhat does she do? She’s a …', 'Three ID cards',
    ['Where is ', 'Where does ', 'What does ', 'Who does ', 'When does ', ' from?', ' with?'], ['THREE PEOPLE IN YOUR LIFE', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now the questions, every word in its place.' : 'A question and an answer for each person.'])
    + '<div class="lado-fim"><div class="grande vd"><span>Where are you <u>from</u>? · Who do you live <u>with</u>?</span><span>Where <u>do</u> you live? What <u>does</u> she do?</span><span><u>does</u> + live (one s)</span><span>a person: <u>who</u></span></div>'
    + mostra('fim', 'Where is my sister from? She’s from Porto.<br>What does she do? She’s a teacher.<br>Who does she live with? She lives with her husband.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES['vd-w'] = function (b, n, v) { S.video.ouviu[v] = (S.video.ouviu[v] || 0) + 1; };
TOQUES.fc = function (b, n) { S.fic.sel = n; };
TOQUES['fc-v'] = function (b, n, v) { S.fic.esc[S.fic.sel] = v; };
TOQUES.cb = function (b, n, v) { S.carimbo.esc = v; };
TOQUES['cb-prox'] = function () { S.carimbo = { n: S.carimbo.n + 1, esc: '' }; };
TOQUES['nd-viu'] = function () { S.nadia.viu[S.nadia.n] = 1; };
TOQUES['nd-prox'] = function () { S.nadia.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
TOQUES.rd = function (b, n) { S.roda.sel = n; S.roda.foi[n] = 1; };
