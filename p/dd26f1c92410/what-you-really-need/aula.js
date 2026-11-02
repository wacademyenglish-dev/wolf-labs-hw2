/* ============================================================
   WHAT YOU REALLY NEED · THE ADVICE HOUR · LIVE CLASS  11/10/2026
   Main series B2 · frases clivadas para dar conselho (aula irmã da
   It Wasn't the Time, que cobre it-cleft e what-cleft de fato/foco;
   esta é a clivada do CONSELHO): What you need is + nome · What you
   need to do is + verbo puro · All you have to do is + verbo puro ·
   The thing (that) you should… is · The problem is (that)… ·
   What you want is + TO + verbo.
   Armadilha do português (só no guia): "tudo o que você precisa" vira
   "all what you need"; "o que você precisa fazer é ligar" vira "is
   calling"; "a coisa que" vira "the thing what"; "o problema é que"
   ganha um it ("the problem it's"); e o what vira pergunta ("What do
   you need is…").
   O VÍDEO: "I FIXED My Whole Life In 1 Night" (Henry Grey Earls,
   iKknJnHwQt8, 0–134), o mesmo da B1 The Wise Judge, aqui com
   perguntas de B2. A última fala é uma all-cleft: "all you need to do
   is step outside of yourself".
   O MUNDO: The Advice Hour, um programa de rádio de madrugada. O aluno
   é o apresentador: sintoniza o dial (abertura própria, sem cartas),
   atende cinco ouvintes antes do vídeo, e no fim escreve a carta dele
   mesmo para o programa, em terceira pessoa, e responde no ar.
   A CARA: azul-noite, âmbar de lâmpada e o vermelho do ON AIR;
   títulos em Big Shoulders Display (letreiro de estúdio).
   ============================================================ */
var YT = 'iKknJnHwQt8';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'capa', rot: 'I · The Dial', t: 'Before the show: turn the dial.', p: 'Tap a station. Each show asks you one question. Answer it out loud, then the teacher answers too.' },
  { k: 'palavras', est: 'l', min: 5, img: 'mesa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch.' },
  { k: 'linhas', est: 'o', min: 7, img: 'linhas', rot: 'III · The Lines Are Open', t: 'Five callers, five problems. You’re the host.', p: 'Pick a line. Read the call out loud. Then give your advice on air. Your teacher taps what you said.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'IV · Solomon’s Paradox', t: 'Why was that so easy? The video has an answer.', p: 'Answer before you watch. Then watch it in four short chapters. Then True or Lie.' },
  { k: 'falas', est: 'l', min: 5, extra: 1, img: 'mesa', rot: 'V · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line, listen, and say it.' },
  { k: 'regra', est: 'f', min: 6, img: 'mesa', rot: 'VI · The Mixing Desk', t: 'How a host gives advice: put the important part last.', p: 'Read the four faders out loud. Then fix the four traps.' },
  { k: 'carta', est: 'w', min: 6, img: 'cartas', rot: 'VII · Tonight’s Letter', t: 'One more letter arrives. It’s from you.', p: 'Write your own letter to the show, in the third person: who you are, what you want, what is stopping you.' },
  { k: 'noar', est: 'o', min: 7, extra: 1, img: 'capa', rot: 'VIII · On Air', t: 'Read your letter on air. Then answer it.', p: 'You are the host. Answer the letter like it’s from a stranger.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'IX · Quick Check', t: 'Five quick lines from the show.', p: 'Say the whole sentence out loud. Then tap the right words.' },
  { k: 'fim', est: 'w', min: 6, img: 'cartas', rot: 'X · Sign-off', t: 'The host signs off with advice for one person: you.', p: 'Write three lines you need to hear. What I really need is…, All I have to do is…, The thing I keep avoiding is…' }
];

/* I · o dial: quatro estações, cada programa uma pergunta (só conversa) */
var DIAL = [
  { f: '88.1', show: 'The Morning Call', q: 'Who do you call when you have a problem? Why that person?', ex: 'My sister. What I like about her is that she never judges me.' },
  { f: '94.5', show: 'Money Talk', q: 'What’s the best piece of advice you’ve ever ignored?', ex: 'My dad told me to save ten percent of my salary. What I did was the opposite!' },
  { f: '101.3', show: 'Late Night Hearts', q: 'Do you give better advice than you take? Give an example.', ex: 'Definitely. I tell everybody to rest, but what I actually do is work until midnight.' },
  { f: '106.7', show: 'Life After Five', q: 'Is there a decision you keep postponing? What’s holding you back?', ex: 'Changing careers. The problem is that I’m afraid of starting from zero.' }
];

/* III · os ouvintes: o aluno aconselha no ar; o professor toca a versão que ouviu */
var LIGACOES = [
  { k: 'DANIEL', d: '29 · Denver', nota: 'I got a job offer in another city, but my girlfriend doesn’t want to move. I keep changing my mind every day.', q: 'What do you think Daniel is really afraid of?',
    ops: [['What you need to do is talk to her honestly before you decide.', 'ok'], ['What you need to do is talking to her honestly before you decide.', 'doing'], ['What do you need to do is talk to her honestly before you decide.', 'ordem']] },
  { k: 'PRIYA', d: '35 · Chicago', nota: 'My best friend borrowed two thousand dollars a year ago. She never mentions it, and I don’t know how to ask.', q: 'Would you ask for the money? Why or why not?',
    ops: [['All you have to do is ask her, kindly and directly.', 'ok'], ['All what you have to do is ask her, kindly and directly.', 'what'], ['All you have to do is asking her, kindly and directly.', 'doing']] },
  { k: 'MARCUS', d: '47 · Atlanta', nota: 'I work sixty hours a week. Last night my son said, “You’re never home, Dad.” I didn’t know what to say.', q: 'What should Marcus change first?',
    ops: [['The thing you should change first is your schedule.', 'ok'], ['The thing what you should change first is your schedule.', 'thatwhat'], ['The thing you should change first it’s your schedule.', 'its']] },
  { k: 'SOFIA', d: '22 · Miami', nota: 'My whole family says I should study law. But what I love is painting. I paint every night in secret.', q: 'Whose life is it? What would you tell Sofia?',
    ops: [['What you really want is to paint, so start there.', 'ok'], ['What you really want is paint, so start there.', 'want'], ['What really you want is to paint, so start there.', 'ordem']] },
  { k: 'RAY', d: '60 · Seattle', nota: 'I retired last month. Now I sit at home all day and I feel useless. My wife is worried about me.', q: 'What do people need after they retire?',
    ops: [['What you need is a reason to get up in the morning.', 'ok'], ['What do you need is a reason to get up in the morning.', 'ordem'], ['All what you need is a reason to get up in the morning.', 'what']] }
];
var NAO = {
  doing: 'After “What you need to DO is…” or “All you have to DO is…”: the base verb. … is talk, … is ask.',
  ordem: 'This is not a question. What + subject + verb: What you need…, What you really want…',
  what: 'All + you…, never “all what”. All you have to do is ask.',
  thatwhat: 'The thing (that) you…, never “the thing what”.',
  its: 'The sentence already has a subject. The thing you should change IS your schedule. No extra it.',
  want: 'What you want / need IS + TO + verb: What you want is to paint. You can drop “to” only after DO: What you need to do is paint.'
};

var ANTES = [
  { q: 'Five callers, five pieces of advice in a few minutes. Why was it so easy?', h: 'Because it wasn’t my problem. What made it easy was the distance.' },
  { q: 'When was the last time you actually took your own advice?', h: 'Honestly? I can’t remember. What I usually do is give advice and ignore it.' }
];
var CAPS = [
  { k: 'PART ONE', ini: 0, fim: 35, q: 'Why do our own problems feel “impossibly complicated”? What does it mean to “draw a blank”?', h: 'Because we’re inside them. You draw a blank when your mind goes empty and you can’t think of an answer.' },
  { k: 'PART TWO', ini: 35, fim: 66, q: 'What is Solomon’s Paradox? What gets “tangled up” in our problems?', h: 'We reason more wisely about other people’s problems than our own. Our fear, our history and our ego get tangled up.' },
  { k: 'PART THREE', ini: 66, fim: 112, q: 'What did the research find? What exactly is the exercise?', h: 'People who took a distanced perspective reasoned more wisely. You write about yourself in the third person: what this person wants, what they’re doing and what’s stopping them.' },
  { k: 'THE END', ini: 112, fim: 134, q: 'Listen to the last line and finish it: “Sometimes all you need to do is…”', h: '“…step outside of yourself long enough to see clearly what to do when you step back in.”' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "What’s easy is spotting what’s wrong in a friend’s life.", "t": true, "tm": "0:11"},
  {"f": "What comes quickly, when the problem is ours, is the answer.", "t": false, "tm": "0:33", "c": "No. “You draw a blank.” Our own life feels impossibly complicated."},
  {"f": "Solomon’s Paradox: we reason more wisely about other people’s problems than our own.", "t": true, "tm": "0:45"},
  {"f": "In the writing exercise, all you have to do is write about yourself as “I”.", "t": false, "tm": "1:37", "c": "No. What you do is stop saying “I” and write in the third person."},
  {"f": "What you ask is: if this person were my friend, what would I tell them?", "t": true, "tm": "1:52"}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · What do you tell the caller?",
  "quem": "Caller",
  "fala": "Caller: “I keep avoiding a hard talk. What do I do?”",
  "reacoes": [
    [
      "Be kind to yourself",
      "What you need is to be kind to yourself first.",
      "“Thank you. I needed to hear that.”"
    ],
    [
      "Take one step",
      "All you have to do is take the first step.",
      "“Okay. I’ll call him tomorrow.”"
    ],
    [
      "Look from outside",
      "What you need to do is look at your life like a friend’s.",
      "“Like a friend’s. I like that.”"
    ]
  ]
};
var DEB_LIGA = ['DANIEL', 'PRIYA', 'MARCUS', 'SOFIA', 'RAY'];   /* as cinco linhas do rádio (as mesmas luzes da página III) */

var FITAS = [['WHAT … IS', 'What you need is time. · What you want is to rest.'], ['DO … IS + VERB', 'What you need to do is call her. · All you have to do is ask.'], ['THE THING · THE PROBLEM', 'The thing (that) you should change is… · The problem is (that)…'], ['ALL', 'All you need is… · All I did was say no.']];
var ARMAS = [
  ['ALL, NOT “ALL WHAT”', 'All what you need is a break.', 'All <b>you need</b> is a break.', 'All + clause. No what.'],
  ['DO … IS + BASE VERB', 'What you need to do is calling her.', 'What you need to do is <b>call</b> her.', 'After “do … is”: the base verb.'],
  ['NO EXTRA IT', 'The problem it’s that he never listens.', 'The problem <b>is</b> that he never listens.', 'The sentence already has a subject. Just is.'],
  ['NOT A QUESTION', 'What do you need is a holiday.', 'What <b>you need</b> is a holiday.', 'What + subject + verb. No do.']
];

var NOAR = [
  { pede: 'Read tonight’s letter on air. Start with: “Tonight’s letter comes from…”', voce: ['Tonight’s letter comes from …', '… wants to …', 'What’s stopping … is …'], resp: 'Thank you. Now, host, what is really going on?' },
  { pede: 'Name the real problem, the one under the problem.', voce: ['The real problem here is that …', 'What … is really afraid of is …'], resp: 'Good. The listeners are nodding.' },
  { pede: 'Your advice. Put the important part at the end.', voce: ['What this listener needs to do is …', 'All they have to do is …', 'The thing they should stop doing is …'], resp: 'Clear advice. Kind, too.' },
  { pede: 'The question from the video: if this listener were your friend, what would you tell them?', voce: ['If they were my friend, I’d tell them …', 'What I’d really say is …'], resp: 'And this listener is… you. Will you take the advice?' }
];

var QUIZ = [
  { f: '___ you have to do is ask.', op: ['All', 'All what', 'What all'], nao: 'All + clause: All you have to do is ask.' },
  { f: 'What you need to do is ___ her tonight.', op: ['call', 'calling', 'called'], nao: 'After “do … is”: the base verb.' },
  { f: 'The problem ___ that nobody listens.', op: ['is', 'it’s', 'it is'], nao: 'The sentence already has a subject: The problem is…' },
  { f: 'What ___ is a long holiday.', op: ['you need', 'do you need', 'need you'], nao: 'Not a question: What + subject + verb.' },
  { f: 'What she really wants is ___ abroad.', op: ['to study', 'study', 'studying'], nao: 'What you want is + TO + verb.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, ln: { sel: 0, esc: {} }, na: { n: 0 }, qz: { n: 0, esc: -1 } };

/* a ficha do ouvinte: a linha acesa e o recado */
function ficha(x, ok) {
  return '<div class="ficha vd"><span class="ficha-luz' + (ok ? ' ok' : '') + '" aria-hidden="true"></span><small>LINE ' + (LIGACOES.indexOf(x) + 1) + ' · ' + x.d + '</small><b class="ficha-nome">' + x.k + '</b><p>“' + x.nota + '”</p>' + (ok ? '<span class="carimbo-r">ON AIR · ANSWERED</span>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · THE ADVICE HOUR</span><h1>What You <b>Really</b> Need</h1>'
    + '<p class="sub"><b>The advice you never take.</b> It’s 11 PM, the lines are open, and you’re the host. Five callers need your help. Then one more letter arrives, and it’s yours.</p>'
    + '<div class="chipsx"><span class="pilula">What you need is…</span><span class="pilula">All you have to do is…</span><span class="pilula">The problem is that…</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Go on air</button>' + faixaLive() + '</div>'
    + '<div class="capa-r"><div class="lampada" aria-hidden="true"><span>ON AIR</span></div><div class="freq" aria-hidden="true"><b>101.3</b><small>FM · 11 PM</small></div></div></div>';
};

/* I · o dial: toca uma estação, o ponteiro anda, o programa faz a pergunta */
R.voce = function (c) {
  var e = S.voce, n = e.sel, x = DIAL[n], pos = n < 0 ? 4 : 12 + n * 25;
  var dial = '<div class="dial"><div class="dial-escala" aria-hidden="true">' + [88, 92, 96, 100, 104, 108].map(function (f) { return '<i><span>' + f + '</span></i>'; }).join('') + '<b class="dial-agulha" style="left:' + pos + '%"></b></div>'
    + '<div class="dial-bt">' + DIAL.map(function (d, i) { return '<button type="button" class="estacao' + (n === i ? ' on' : '') + (e.foi[i] ? ' feito' : '') + '" data-a="dial" data-n="' + i + '"><b>' + d.f + '</b><small>' + d.show + '</small></button>'; }).join('') + '</div></div>';
  var lado = n < 0
    ? '<div class="dial-card"><small>NO SIGNAL</small><h2>Tap a station to start.</h2><p>Four shows, four questions about you.</p></div>'
    : '<div class="dial-card"><small>' + x.f + ' FM · ' + x.show.toUpperCase() + '</small><h2>' + x.q + '</h2></div>' + mostra('dial' + n, x.ex, 1)
      + '<p class="so-prof dica-aluno">Only talk. Answer, then ask the teacher the same question. ' + (Object.keys(e.foi).length >= DIAL.length ? 'Four stations done: time to open the lines.' : 'Then tap another station.') + '</p>';
  return cab(c) + '<div class="mesa-c dial-mesa"><div class="lado-l">' + dial + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.linhas = function (c) {
  var e = S.ln, x = LIGACOES[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitos = LIGACOES.filter(function (t, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="botoes-l">' + LIGACOES.map(function (t, i) { return '<button type="button" class="linha-b' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feito' : '') + '" data-a="ln" data-n="' + i + '"><i aria-hidden="true"></i><b>LINE ' + (i + 1) + '</b><small>' + t.k + '</small></button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l">' + ficha(x, ok) + '<div class="pergunta vd ja"><h2>' + x.q + '</h2></div></div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><small>ON AIR</small><p>' + x.ops[0][0] + '</p></div><p class="aprova">' + (feitos >= LIGACOES.length ? 'Five calls, five answers, and none of them was hard. Strange, right? The video explains why.' : 'Next line. The listeners are waiting.') + '</p>'
      : '<h5 class="so-prof rot-ouve">TAP THE ADVICE YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 3).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="ln-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '')
      + fala('ln' + e.sel, ['What you need to do is …', 'All you have to do is …', 'The thing you should … is …', 'The problem is that …'], []) + '<p class="so-prof dica-aluno">Any good advice counts. Tap the version you heard: listen to “do … is + base verb”, “all you”, and no extra it.</p>') + '</div></div>';
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + as cinco linhas do rádio que acendem uma luz por acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Solomon’s Paradox', '&start=0&end=134'); }
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
  var luzes = DEB_VM.itens.map(function (x, i) { var s = d.st[i]; return '<span class="linha-b deb-linha' + (s === 1 ? ' feito' : s === -1 ? ' perdida' : '') + '"><i aria-hidden="true"></i><b>LINE ' + (i + 1) + '</b><small>' + DEB_LIGA[i] + '</small></span>'; }).join('');
  return debTopo(d, 'THE LINES ARE OPEN', 'Callers helped') + '<div class="botoes-l deb-linhas">' + luzes + '</div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all five lines. Then ' + DEB_GO.quem + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>OFF AIR</b><small>Four short chapters. They go on air after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Solomon’s Paradox', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas4">' + FITAS.map(function (f, i) { return '<div class="fita4 f' + i + '"><i class="fader" aria-hidden="true"></i><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.carta = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('carta', (S.txt || {}).carta || '', (S.salvo || {}).carta, 'A listener, 38, from Curitiba, writes:\nShe wants to change careers, but she keeps waiting.\nWhat stops her is the fear of starting again.', 'Dear Advice Hour…',
    ['A listener, ', ' writes: ', 'wants to ', 'keeps ', 'What stops ', 'The problem is that '], ['TONIGHT’S LETTER', 'Your letter, but in the third person: he / she, never I. Who is this listener? What do they want? What is stopping them?'])
    + '<div class="lado-fim"><div class="envelope vd"><small>TO: THE ADVICE HOUR · 101.3 FM</small><b>From: a listener</b><p>Write it like the five callers: short, true, and about someone else.</p></div>'
    + mostra('carta', 'A listener, 41, from Recife, writes:<br>He wants to start running again.<br>He keeps saying “next Monday”.<br>What stops him is that he feels too old.', 1)
    + '<p class="so-prof dica-aluno">Don’t help yet. Let the student write it alone, in the third person. If they write “I”, point to the five callers.</p></div></div>';
};

R.noar = function (c) {
  var e = S.na, n = Math.min(e.n, NOAR.length - 1), x = NOAR[n];
  return cab(c) + trilha(NOAR, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('capa') + ')"><span class="onair-tag">ON AIR</span></div>'
    + ((S.txt || {}).carta ? '<div class="envelope vd mini"><small>TONIGHT’S LETTER</small><p>' + h(S.txt.carta).replace(/\n/g, '<br>') + '</p></div>' : '') + '</div>'
    + '<div class="lado-l"><div class="pede vd"><small>THE PRODUCER SAYS</small><b>“' + x.pede + '”</b></div>' + fala('na' + n, x.voce, ['What … is', 'All … is', 'The problem is that', 'The thing … is']) + '<p class="so-prof dica-aluno">The producer answers: “' + x.resp + '”</p>'
    + (n < NOAR.length - 1 ? '<div><button type="button" class="btn" data-a="na-prox">Next</button></div>' : '<p class="aprova">That’s the show. One last thing before you sign off.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>All you… (never all what). Do … is + base verb. Want / need is + to. No extra it, and no question order.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 3).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'What I really need is a plan, not more time.\nAll I have to do is start on Monday.\nThe thing I keep avoiding is talking to my boss.', 'Sign-off',
    ['What I really need is ', 'All I have to do is ', 'The thing I keep avoiding is ', 'The problem is that ', 'What I’ll do this week is '], ['SIGN-OFF', 'Three lines for one listener: you. What I really need is…, All I have to do is…, The thing I keep avoiding is…'])
    + '<div class="lado-fim"><div class="cue vd"><small>CUE CARD · LAST LINES OF THE NIGHT</small><span>What you really need is <u>a first step</u>.</span><span>All you have to do is <u>take it</u>.</span><span>Good night, and take your own advice.</span><i class="lampada mini" aria-hidden="true"><span>OFF</span></i></div>'
    + mostra('fim', 'What I really need is more sleep, not more coffee.<br>All I have to do is turn off my phone at eleven.<br>The thing I keep avoiding is a hard conversation with my brother.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.dial = function (b, n) { if (S.voce.sel >= 0) S.voce.foi[S.voce.sel] = 1; S.voce.sel = n; S.voce.foi[n] = 1; };
TOQUES.ln = function (b, n) { S.ln.sel = n; };
TOQUES['ln-v'] = function (b, n, v) { S.ln.esc[S.ln.sel] = v; };
/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES['na-prox'] = function () { S.na.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };
