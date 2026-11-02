/* ============================================================
   COULD YOU TELL ME WHY…? · THE NOTEPAD · LIVE CLASS  06/10/2026
   Main series B1 · perguntas indiretas: começo educado (Could you tell
   me… · Do you know… · Can I ask… · I was wondering… · Would you mind
   telling me…) + ordem de FRASE (where the office is) · sem do/does/did
   · sim/não com if / whether · I was wondering… termina em ponto.
   Erros universais: "Could you tell me where is the office?", "…what
   time does it start?", "Can you tell me is it remote?", "Would you mind
   to tell me…".
   O MUNDO (da aula velha): a entrevista ao contrário — no fim da
   entrevista, o candidato pergunta. O VÍDEO (ExJZAegsOis, 2:14, entrevista
   simulada num banco) fica, SELADO em cinco capítulos; canal e créditos
   NÃO aparecem na tela. Falas citadas vêm da legenda oficial conferida
   em 25/09 na aula velha (1:12, 1:31, 1:39). Sem áudio próprio.
   A CARA: o BLOCO DE NOTAS do candidato — capa de couro escura, folhas
   grafite com pauta; a pergunta crua aparece a lápis, é riscada, e a
   versão educada nasce a tinta azul por cima. Na cena da pressão, o
   relógio de parede conta os cinco minutos (só teatro).
   Fila: FILA-LIVE-386.md · 084.
   ============================================================ */
var YT = 'ExJZAegsOis';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'corredor', rot: 'I · Asking Strangers', t: 'Are you good at asking questions?', p: 'Pick a card. Answer out loud. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'banco', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'banco', rot: 'III · The Interview', t: 'A job interview at a bank. Mr. Wang wants to be a bank teller.', p: 'The video is locked. Answer first, then it plays in five short chapters. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'banco', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'bloco', est: 'o', min: 7, img: 'cracha', rot: 'V · The Blunt Notes', t: 'Your notepad has eight questions for the interviewer. They are too blunt.', p: 'Pick a note. Say it with the polite starter. Your teacher taps the version you said: a right one rewrites the note.' },
  { k: 'regra', est: 'f', min: 6, img: 'relogio', rot: 'VI · The Machine', t: 'A polite start, then a normal sentence.', p: 'Read the machine out loud. Then fix the four traps.' },
  { k: 'mesa', est: 'o', min: 7, img: 'capa', rot: 'VII · Five Minutes Left', t: '“We have five minutes. Any questions?” Eight topics. Ask fast.', p: 'Your teacher points to a topic. Ask at once, with a different starter each time.' },
  { k: 'rude', est: 'o', min: 7, extra: 1, img: 'cafe', rot: 'VIII · Is It Rude?', t: 'Is it rude to ask this in an interview?', p: 'Pick five cards. Rude, OK, or smart? Defend it. Your teacher takes the other side.' },
  { k: 'clark', est: 'o', min: 7, extra: 1, img: 'banco', rot: 'IX · Your Questions', t: 'Mrs. Clark has five more minutes. She answers your questions.', p: 'Your teacher is Mrs. Clark. Ask polite questions about a job you really want.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'relogio', rot: 'X · Quick Check', t: 'Six quick questions from the interview.', p: 'Say the whole sentence out loud. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'elevador', rot: 'XI · After the Interview', t: 'In the elevator: was it rude to ask about money?', p: 'Write your five questions for your dream job. It goes to your My notes.' }
];

var VOCE = [
  { k: 'Strangers', q: 'Do you ask strangers for help, or do you use your phone?', fup: 'When did you last ask a stranger?', st: ['I usually …'], ex: 'I use my phone. I’m too shy to ask.' },
  { k: 'Interviews', q: 'Have you ever had a job interview? What did they ask you?', fup: 'What did you answer?', st: ['They asked me …'], ex: 'They asked me about my weaknesses. I hate that question!' },
  { k: 'Money', q: 'Is it easy for you to ask about money: prices, salaries, rent?', fup: 'Why?', st: ['It’s … for me.'], ex: 'Not really. I feel it’s a little rude.' },
  { k: 'Shy', q: 'What is a question you always want to ask, but never do?', fup: 'Who would you ask?', st: ['I always want to ask …'], ex: 'I always want to ask my doctor how long I really have to wait.' },
  { k: 'Polite', q: 'In your language, how do you make a question more polite?', fup: 'And in English?', st: ['We …'], ex: 'We add “please” and use a softer voice.' }
];
var ANTES = [
  { q: 'What does a bank teller do? Would you like that job?', h: 'A teller helps customers with money. I’d be bored.' },
  { q: 'What questions do you think the manager will ask?', h: 'About his experience, his strengths and his weaknesses.' }
];
var CAPS = [
  { k: 'HELLO', ini: 2, fim: 26, q: 'Where did Mr. Wang grow up? What did he study?', h: 'In China. He studied accounting and worked for two years.' },
  { k: 'STRENGTHS', ini: 26, fim: 55, q: 'What is his biggest strength? And his weakness?', h: 'Attention to detail. His weakness: asking for help.' },
  { k: 'GOALS', ini: 55, fim: 84, q: 'What does the manager ask about money? How does she ask it?', h: '“I also wanted to ask you what salary range you’d be most comfortable with.” Very polite!' },
  { k: 'HIS QUESTIONS', ini: 84, fim: 108, q: 'What does Mr. Wang ask? Say his two questions.', h: '“Can you tell me about the working hours?” and “When do you expect to be making your decision?”' },
  { k: 'GOODBYE', ini: 107, fim: 122, q: 'How does the interview end? Would you hire him?', h: 'She says they will call within a week. I would hire him.' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "Mrs. Clark asks Mr. Wang to tell her a little about himself.", "t": true, "tm": "0:12"},
  {"f": "Mr. Wang says his biggest strength is speaking three languages.", "t": false, "tm": "0:36", "c": "No. His biggest strength is his attention to detail."},
  {"f": "Mr. Wang says his biggest weakness is asking for help.", "t": true, "tm": "0:49"},
  {"f": "Mrs. Clark asks what salary range he would be most comfortable with.", "t": true, "tm": "1:13"},
  {"f": "Mr. Wang’s first question is about the salary.", "t": false, "tm": "1:31", "c": "No. He asks about the working hours."},
  {"f": "Mrs. Clark says they will call him tomorrow.", "t": false, "tm": "1:42", "c": "No. They will call within a week."}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · Do you have any questions?",
  "quem": "Mrs. Clark",
  "fala": "Mrs. Clark: “Mr. Wang is gone. Now it’s your turn: do you have any questions for me?”",
  "reacoes": [
    [
      "The hours",
      "Could you tell me what the working hours are?",
      "“Nine to five, Monday to Friday.”"
    ],
    [
      "The team",
      "Can I ask how big the team is?",
      "“Six people. They’re friendly.”"
    ],
    [
      "The decision",
      "I was wondering when you expect to make a decision.",
      "“We’ll call you within a week.”"
    ]
  ]
};

var NOTAS = [
  { cru: 'How much is the salary?', ini: 'Could you tell me', ops: [['Could you tell me how much the salary is?', 'ok'], ['Could you tell me how much is the salary?', 'inv'], ['Could you tell me how much the salary is.', 'ponto']] },
  { cru: 'When does the job start?', ini: 'Do you know', ops: [['Do you know when the job starts?', 'ok'], ['Do you know when does the job start?', 'do'], ['Do you know when the job start?', 's']] },
  { cru: 'Is the job remote?', ini: 'I was wondering', ops: [['I was wondering if the job is remote.', 'ok'], ['I was wondering is the job remote.', 'if'], ['I was wondering if is the job remote.', 'inv']] },
  { cru: 'Who is my boss?', ini: 'Can I ask', ops: [['Can I ask who my boss would be?', 'ok'], ['Can I ask who would be my boss?', 'inv'], ['Can I ask who is my boss would be?', 'inv']] },
  { cru: 'Why did the last person leave?', ini: 'Could you tell me', ops: [['Could you tell me why the last person left?', 'ok'], ['Could you tell me why did the last person leave?', 'do'], ['Could you tell me why the last person leave?', 'past']] },
  { cru: 'How many people are in the team?', ini: 'Do you know', ops: [['Do you know how many people are in the team?', 'ok'], ['Do you know how many people in the team?', 'falta'], ['Do you know how many are people in the team?', 'inv']] },
  { cru: 'Do you give training?', ini: 'Could you tell me', ops: [['Could you tell me if you offer training?', 'ok'], ['Could you tell me do you offer training?', 'if'], ['Could you tell me if do you offer training?', 'do']] },
  { cru: 'When will you decide?', ini: 'Would you mind telling me', ops: [['Would you mind telling me when you will decide?', 'ok'], ['Would you mind telling me when will you decide?', 'inv'], ['Would you mind to tell me when you will decide?', 'mind']] }
];
var NAO = {
  inv: 'After the starter, sentence order: subject + verb (the salary is).', ponto: 'Could you tell me… is still a question: keep the ?.', do: 'Do / does / did disappear after the starter.',
  s: 'Without does, the verb takes its -s back: the job starts.', if: 'A yes/no question needs if: I was wondering if…', past: 'Without did, the verb goes back to the past: left.',
  falta: 'The verb is missing: how many people are…', mind: 'Would you mind + -ing: mind telling me.', lugar: 'Keep how big together: how big the team is.'
};

var MAQUINA = [['A POLITE STARTER', 'Could you tell me · Do you know · Can I ask · I was wondering · Would you mind telling me'], ['THE QUESTION WORD', 'where · when · why · how much · who · or IF for yes/no'], ['A NORMAL SENTENCE', 'the office is · it starts · he left']];
var ARMAS = [
  ['WORD ORDER', 'Could you tell me where is the office?', 'Could you tell me where the office is?', 'After the starter: subject + verb, like a normal sentence.'],
  ['NO DO / DOES / DID', 'Do you know what time does it start?', 'Do you know what time it starts?', 'Do / does / did disappear; the verb takes its -s or its past back.'],
  ['YES / NO', 'Can you tell me is the job remote?', 'Can you tell me if the job is remote?', 'No question word? Use if (or whether).'],
  ['THE MARK', 'I was wondering if the job is remote?', 'I was wondering if the job is remote.', 'I was wondering… is a statement: a period. Could you tell me…? keeps the ?.']
];

var MESA = [
  { k: 'HOURS', ops: [['Could you tell me what the working hours are?', 'ok'], ['Could you tell me what are the working hours?', 'inv'], ['Could you tell me what the hours are.', 'ponto']] },
  { k: 'START DATE', ops: [['Do you know when I would start?', 'ok'], ['Do you know when would I start?', 'inv'], ['Do you know when do I start?', 'do']] },
  { k: 'REMOTE', ops: [['I was wondering if I could work from home on Fridays.', 'ok'], ['I was wondering could I work from home.', 'if'], ['I was wondering if could I work from home.', 'inv']] },
  { k: 'THE TEAM', ops: [['Can I ask how big the team is?', 'ok'], ['Can I ask how big is the team?', 'inv'], ['Can I ask how the team is big?', 'lugar']] },
  { k: 'DRESS CODE', ops: [['Do you know if there is a dress code?', 'ok'], ['Do you know is there a dress code?', 'if'], ['Do you know if is there a dress code?', 'inv']] },
  { k: 'PARKING', ops: [['Could you tell me where people usually park?', 'ok'], ['Could you tell me where do people usually park?', 'do'], ['Could you tell me where people usually parks?', 's']] },
  { k: 'THE OPEN JOB', ops: [['Would you mind telling me why the position is open?', 'ok'], ['Would you mind telling me why is the position open?', 'inv'], ['Would you mind to tell me why it is open?', 'mind']] },
  { k: 'THE DECISION', ops: [['I was wondering when you expect to make a decision.', 'ok'], ['I was wondering when do you expect to decide.', 'do'], ['I was wondering when you expect to decide?', 'ponto']] }
];

var RUDE = [
  { k: 'Salary', q: 'Asking about the salary in the first interview.', fup: 'How would you ask it?', st: ['It’s … if you ask …'], ex: 'It’s OK if you ask politely: I was wondering what the salary range is.' },
  { k: 'Holidays', q: 'Asking how many vacation days you get.', fup: 'When would you ask?', st: ['It’s …, but …'], ex: 'It’s OK, but not as your first question.' },
  { k: 'The last person', q: 'Asking why the last person left.', fup: 'What could the answer tell you?', st: ['It’s a little …'], ex: 'It’s a little risky, but it’s smart.' },
  { k: 'Remote', q: 'Asking if you can work from home.', fup: 'Would you ask it?', st: ['Today it’s …'], ex: 'Today it’s normal. Everybody asks.' },
  { k: 'Age', q: 'An interviewer asking how old you are.', fup: 'What would you say?', st: ['That’s …'], ex: 'That’s rude. And in many countries it’s illegal.' },
  { k: 'Family', q: 'An interviewer asking if you have children.', fup: 'Why is it a problem?', st: ['It’s not OK because …'], ex: 'Not OK. It’s private.' },
  { k: 'No questions', q: 'Saying “No, I don’t have any questions.”', fup: 'What does it show?', st: ['It’s a bad idea because …'], ex: 'Bad idea. It looks like you don’t care.' },
  { k: 'The result', q: 'Asking “So… did I get the job?” at the end.', fup: 'What should you ask instead?', st: ['It’s too …'], ex: 'Too direct! Ask when they expect to decide.' }
];

var CLARK = [
  { ela: 'So, do you have any questions for me?', voce: 'Could you tell me what a normal day … ?', resp: 'A normal day starts at nine. Lots of customers until lunch, then paperwork.' },
  { ela: 'Anything about the team?', voce: 'I was wondering how many people …', resp: 'Six people. They’re friendly, and they drink too much coffee.' },
  { ela: 'What else would you like to know?', voce: 'Do you know if there is … ? (training? promotion?)', resp: 'Yes, we have training every month. Good people grow fast here.' },
  { ela: 'Last question?', voce: 'Would you mind telling me when … ?', resp: 'We’ll call you within a week. Thanks for coming in!' }
];

var QUIZ = [
  { f: 'Could you tell me where the office ___?', op: ['is', 'is it', 'does'], nao: 'Sentence order: the office is.' },
  { f: 'Do you know what time the meeting ___?', op: ['starts', 'does start', 'start'], nao: 'No does: the meeting starts.' },
  { f: 'I was wondering ___ the job is remote.', op: ['if', 'is', 'that'], nao: 'Yes/no: if.' },
  { f: 'Could you tell me why he ___?', op: ['left', 'did leave', 'leave'], nao: 'No did: he left.' },
  { f: 'Would you mind ___ me the salary range?', op: ['telling', 'to tell', 'tell'], nao: 'mind + -ing.' },
  { f: 'Can I ask how big ___?', op: ['the team is', 'is the team', 'the team'], nao: 'Sentence order: the team is.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, bl: { sel: 0, esc: {} }, ms: { sel: 0, esc: {}, t: 300, rodando: 0 }, rude: { sel: -1, foi: {} }, cl: { n: 0 }, qz: { n: 0, esc: -1 } };

var TIMER = null;
function paraTimer() { if (TIMER) { clearInterval(TIMER); TIMER = null; } }

function relogio(seg) {
  var m = Math.floor(seg / 60), s = seg % 60, frac = seg / 300, ang = (1 - frac) * 360, r = 70, x = 90 + r * Math.sin(ang * Math.PI / 180), y = 90 - r * Math.cos(ang * Math.PI / 180);
  var arco = frac >= 1 ? '' : '<path d="M90 90 L90 20 A70 70 0 ' + (ang > 180 ? 1 : 0) + ' 1 ' + x.toFixed(1) + ' ' + y.toFixed(1) + ' Z" class="gasto"/>';
  return '<svg class="relogio-s" viewBox="0 0 180 180" role="img" aria-label="' + m + ' minutes left"><circle cx="90" cy="90" r="80" class="aro"/>' + arco + '<circle cx="90" cy="90" r="5" class="eixo"/><text x="90" y="140" text-anchor="middle" class="rel-t">' + m + ':' + (s < 10 ? '0' : '') + s + '</text></svg>';
}
function folha(cru, polida, risca) {
  return '<div class="folha"><div class="lapis' + (risca ? ' riscada' : '') + '">' + cru + '</div>' + (polida ? '<div class="tinta">' + polida + '</div>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · B1 · THE REVERSE INTERVIEW</span><h1>Could You Tell Me <b>Why…?</b></h1>'
    + '<p class="sub">“Do you have any questions for us?” Now <b>you</b> ask. Politely.</p>'
    + '<div class="chipsx"><span class="pilula">Could you tell me where the office is?</span><span class="pilula">I was wondering if…</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the notepad</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="bloco-c">' + folha('How much is the salary?', 'Could you tell me how much the salary is?', 1) + folha('Is the job remote?', 'I was wondering if the job is remote.', 1) + '</div></div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + as seis folhas do bloco de notas (a aula já tem) que ganham tinta a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'A job interview at a bank', '&start=2&end=125'); }
var debAcesa = {};
function debEstado() {
  var e = (S.fq && S.fq.deb_vm && S.fq.deb_vm.r) || {}, ok = 0, feitas = 0, st = [];
  DEB_VM.itens.forEach(function (x, i) {
    var r = e[i]; if (r == null) { st.push(0); return; }
    feitas++; if ((r === 't') === !!x.t) { ok++; st.push(1); } else st.push(-1);
  });
  return { ok: ok, feitas: feitas, st: st };
}
function debTopo(d, rot, titulo) {
  var n = DEB_VM.itens.length;
  return '<div class="deb-topo"><div><small>' + rot + ' · ' + d.feitas + ' OF ' + n + ' ANSWERED</small><h3>' + titulo + ' <b>' + d.ok + '</b> / ' + n + '</h3></div></div>';
}
function debNave() {
  var d = debEstado(), n = DEB_VM.itens.length;
  var notas = NOTAS.slice(0, n).map(function (x, i) {
    var s = d.st[i];
    return '<div class="deb-nota' + (s === 1 ? ' feita' : s === -1 ? ' perdida' : '') + '">' + folha(x.cru, s === 1 ? x.ops[0][0] : '', s === 1) + '</div>';
  }).join('');
  return debTopo(d, 'THE NOTEPAD', 'Notes in ink') + '<div class="bloco-c lista deb-bloco" aria-hidden="true">' + notas + '</div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem.replace(/^The /, 'the ') + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Five short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'A job interview at a bank', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 5 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + passos + corpo;
};

R.bloco = function (c) {
  var e = S.bl, x = NOTAS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitas = NOTAS.filter(function (n, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="bloco-c lista">' + NOTAS.map(function (n, i) { var f = e.esc[i] === 'ok'; return '<button type="button" class="nota-b' + (e.sel === i ? ' on' : '') + (f ? ' feita' : '') + '" data-a="bl" data-n="' + i + '"><span class="lapis' + (f ? ' riscada' : '') + '">' + n.cru + '</span>' + (f ? '<span class="tinta">' + n.ops[0][0] + '</span>' : '') + '</button>'; }).join('') + '</div><p class="dica-aluno">' + feitas + ' of 8 rewritten.</p></div>'
    + '<div class="lado-l"><div class="pede vd"><small>THE STARTER</small><b>' + x.ini + ' …</b></div>' + folha(x.cru, ok ? x.ops[0][0] : '', ok)
    + (ok ? '<p class="aprova">Rewritten. Say it once more, softly.</p>' : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 2).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="bl-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : ''))
    + (feitas >= 8 ? '<p class="aprova">Eight blunt notes, eight polite questions.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="maquina">' + MAQUINA.map(function (m, i) { return '<div class="peca-m p' + i + '"><small>' + (i + 1) + ' · ' + m[0] + '</small><b>' + m[1] + '</b></div>' + (i < 2 ? '<span class="mais">+</span>' : ''); }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.mesa = function (c) {
  var e = S.ms, x = MESA[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitas = MESA.filter(function (m, i) { return e.esc[i] === 'ok'; }).length;
  if (e.rodando && !TIMER) TIMER = setInterval(function () { if (L[S.i].k !== 'mesa' || !S.ms.rodando) { paraTimer(); return; } S.ms.t = Math.max(0, S.ms.t - 1); if (S.ms.t <= 0) { S.ms.rodando = 0; paraTimer(); } pinta(); }, 1000);
  if (!e.rodando) paraTimer();
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="relogio-b">' + relogio(e.t) + '<div class="tres-b">' + (e.rodando ? '<button type="button" class="btn" data-a="ms-pausa">Pause the clock</button>' : '<button type="button" class="btn cheio" data-a="ms-go">' + (e.t < 300 ? 'Go on' : 'Start the clock') + '</button>') + '</div></div>'
    + '<div class="topicos">' + MESA.map(function (m, i) { return '<button type="button" class="topico' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feito' : '') + '" data-a="ms" data-n="' + i + '">' + m.k + '</button>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="balao vd"><small>THE TOPIC</small><p>' + x.k + '</p></div>' + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div>' : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 4).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="ms-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : ''))
    + (feitas >= 8 ? '<p class="aprova">Eight topics, eight polite questions. The interviewer smiles: “Great questions.”</p>' : '') + '</div></div>';
};

R.rude = function (c) { return cartasPessoais(c, RUDE, S.rude, 'rude'); };

R.clark = function (c) {
  var e = S.cl, n = Math.min(e.n, CLARK.length - 1), x = CLARK[n];
  return cab(c) + trilha(CLARK, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('banco') + ')"><span>MRS. CLARK · BANK MANAGER</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>MRS. CLARK</small><b>“' + x.ela + '”</b></div>' + fala('cl' + n, [x.voce], ['Could you tell me…', 'I was wondering if…', 'Do you know…', 'Would you mind telling me…']) + '<p class="so-prof dica-aluno">Mrs. Clark answers: “' + x.resp + '”</p>'
    + (n < CLARK.length - 1 ? '<div><button type="button" class="btn" data-a="cl-prox">Next question</button></div>' : '<p class="aprova">Four polite questions. You look like a professional.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>Starter, question word, normal sentence.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 6).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Could you tell me …?\nI was wondering if …\nDo you know …?', 'Your five questions',
    ['Could you tell me ', 'Do you know ', 'I was wondering if ', 'Can I ask ', 'Would you mind telling me '], ['YOUR DREAM JOB', 'Five polite questions for the interviewer. And the big one: is it rude to ask about money?'])
    + '<div class="lado-fim"><div class="bloco-c">' + folha('Where is the office?', 'Could you tell me where the office is?', 1) + '</div><div class="grande vd"><span>starter + <u>where the office is</u></span><span>no <s>do / does / did</s></span><span>yes/no: <u>if</u> · I was wondering… <u>.</u></span></div>'
    + mostra('fim', 'Could you tell me what a normal day looks like?<br>Do you know how big the team is?<br>I was wondering if I could work from home on Fridays.<br>Can I ask why the position is open?<br>Would you mind telling me when you expect to decide?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.bl = function (b, n) { S.bl.sel = n; };
TOQUES['bl-v'] = function (b, n, v) { S.bl.esc[S.bl.sel] = v; };
TOQUES.ms = function (b, n) { S.ms.sel = n; };
TOQUES['ms-v'] = function (b, n, v) { S.ms.esc[S.ms.sel] = v; };
TOQUES['ms-go'] = function () { if (S.ms.t <= 0) S.ms.t = 300; S.ms.rodando = 1; };
TOQUES['ms-pausa'] = function () { S.ms.rodando = 0; paraTimer(); };
TOQUES['cl-prox'] = function () { S.cl.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };
