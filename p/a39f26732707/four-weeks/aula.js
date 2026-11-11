/* ============================================================
   FOUR WEEKS · THE TWO COMMAS · LIVE CLASS  06/10/2026
   Main series B2 · relativas restritivas (sem vírgula: escolhem QUAIS)
   × explicativas (duas vírgulas: informação extra sobre TODOS; who /
   which, nunca that); what = a coisa que (sem substantivo antes);
   that/who caem quando o próximo é um sujeito novo. Erros: vírgula
   como respiro, "which" sem vírgula em explicativa, "my mother that
   is a doctor", "That I need is …", "the people which".
   O MUNDO (da aula velha): o estudo de 2006 — residentes de cirurgia,
   mesmo material, mesmas horas; um grupo num dia, o outro em quatro
   semanas; o de quatro semanas foi melhor. Duas gravações mantidas
   (p1 sem pausas, p2 com as pausas das vírgulas), conferidas no
   faster-whisper em 06/10: batem. O vídeo das três técnicas de estudo
   (TjPFZaMe2yw, 0:20–4:33), selado. Nenhum nome de canal na tela.
   A CARA: a FRASE DO ESTUDO com dois encaixes de vírgula e o GRÁFICO
   que muda: sem vírgulas, duas barras (alguns, comparados); com
   vírgulas, uma barra só (todo mundo). E a ONDA DA PAUSA: a vírgula é
   um silêncio que se vê.
   Fila: FILA-LIVE-386.md · 121.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'sutura' },
  { k: 'metodo', est: 'o', min: 7, img: 'biblio', rot: 'I · How You Study', t: 'How do you actually learn something new?', p: 'Tap your method. Then answer three questions out loud.' },
  { k: 'grupos', est: 'o', min: 7, img: 'sutura', rot: 'II · Two Groups', t: '2006. Surgical residents learning to stitch. Same materials, same total hours.', p: 'Read the facts. Predict out loud, with a reason. Then read the finding.' },
  { k: 'gx', est: 'f', min: 4, img: 'sutura', rot: 'III · The Study, Told', t: 'You tell a friend about the study. Some words are lit.', p: 'Read it together. Tap the lit words: why this form? Then say your own.' },
  { k: 'virgulas', est: 'f', min: 6, img: 'lampada', rot: 'IV · Some, or All', t: 'Same words. Two commas decide if the chart shows two groups or everybody.', p: 'Read what you need to say. Add or remove the commas. Watch the chart. Then say it.' },
  { k: 'portas', est: 'f', min: 6, img: 'lampada', rot: 'V · Four Doors', t: 'THAT picks out a thing. WHICH adds something extra. WHO is a person. WHAT has no noun in front.', p: 'Choose the door. Say the whole sentence.' },
  { k: 'pausa', est: 'l', min: 7, extra: 1, img: 'ampulheta', rot: 'VI · The Pause You Can Hear', t: 'A comma is a silence. Two readings, identical words.', p: 'Play each reading. Tap SOME or ALL. Then read the next ones yourself.' },
  { k: 'derruba', est: 'f', min: 6, extra: 1, img: 'biblio', rot: 'VII · Drop It?', t: 'English drops THAT or WHO when a new subject comes next. It stays when it does the verb.', p: 'Say both versions. Tap DROP IT or IT STAYS.' },
  { k: 'palavras', est: 'l', img: 'lampada', rot: 'VIII · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'lampada', rot: 'IX · The Source', t: 'Four minutes: the study, the brain, three techniques.', p: 'Guess first. Then watch. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'lampada', rot: 'X · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'explica', est: 'o', min: 7, extra: 1, img: 'ampulheta', rot: 'XI · Outside the Field', t: 'A friend with no science background asks about the study. Every question is “which ones?”', p: 'Your teacher is the friend. Choose the clear answer, say it, then answer in your own words.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'sutura', rot: 'XII · Fix the Report', t: 'Five sentences from a report have a problem. One is right.', p: 'Choose the fix. Then say the whole sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'biblio', rot: 'XIII · Your Method, Again', t: 'Your method from scene I, with a clause that says exactly which one.', p: 'Write it, and the finding one last time. It goes to your My notes.' }
];

var TR = {
  'p1.mp3': 'The residents who spread their training over four weeks did better.',
  'p2.mp3': 'The residents, who spread their training over four weeks, did better.'
};

var YT = 'TjPFZaMe2yw';

var METODOS = ['reading it many times', 'cramming the night before', 'short sessions every day', 'teaching it to someone', 'testing myself', 'watching videos'];
var ABRE = [
  { q: 'Describe the last thing you learned this way.', fup: 'How long did it take?', st: ['The last thing I learned was …'], ex: 'The last thing I learned was a guitar song.' },
  { q: 'Did it stick? How do you know?', fup: 'Could you do it now?', st: ['Yes, because …', 'Not really, …'], ex: 'Not really. I forgot half of it in a week.' },
  { q: 'Who do you know that learns faster than you, and what do they do differently?', fup: 'Could you copy it?', st: ['My … learns faster. She …'], ex: 'My sister learns faster. She tests herself every night.' }
];

var FATOS = ['Same materials.', 'Same total hours.', 'Group 1: everything in one day.', 'Group 2: spread over four weeks.', 'A month later: the real surgery.'];
var PREV = ['The group that spread it over four weeks.', 'The group that crammed it into one day.', 'No difference.'];

var VIRG = [
  { a: 'The residents', c: 'who spread their training over four weeks', d: 'did better.', alvo: 'some', g: ['four weeks', 'one day'], quer: 'Only some residents spread it out. They did better than the others.' },
  { a: 'My colleagues', c: 'who work from home', d: 'start earlier.', alvo: 'all', g: ['the whole team'], quer: 'Everybody on your team works from home. You’re just mentioning it.' },
  { a: 'The students', c: 'who slept before the test', d: 'remembered more.', alvo: 'some', g: ['slept', 'didn’t sleep'], quer: 'This is a finding: two groups, compared.' },
  { a: 'My brother', c: 'who lives in Lisbon', d: 'is a nurse.', alvo: 'all', g: ['my only brother'], quer: 'You have only one brother.' },
  { a: 'The patients', c: 'who walked every day', d: 'recovered faster.', alvo: 'some', g: ['walked', 'didn’t walk'], quer: 'Some patients walked. They recovered faster than the rest.' },
  { a: 'The 2006 study', c: 'which used surgical residents', d: 'is often quoted.', alvo: 'all', g: ['the one study'], quer: 'There is only one study. The clause is extra information.' }
];

var PORTAS = [
  { a: '', b: ' I need is one more week.', ops: ['What', 'That', 'Which'] },
  { a: 'The technique ', b: ' worked was the boring one.', ops: ['that', 'what', 'who'] },
  { a: 'She reviewed it the next day, ', b: ' made the memory stronger.', ops: ['which', 'that', 'what'] },
  { a: 'The residents ', b: ' crammed did worse.', ops: ['who', 'which', 'what'] },
  { a: 'Nobody remembers ', b: ' they read the night before.', ops: ['what', 'that', 'which'] },
  { a: 'My phone, ', b: ' is five years old, still works.', ops: ['which', 'that', 'what'] }
];

var PAUSA = [
  { au: 'p1.mp3', t: 'The residents who spread their training over four weeks did better.', d: 'some' },
  { au: 'p2.mp3', t: 'The residents, who spread their training over four weeks, did better.', d: 'all' },
  { t: 'My colleagues who work remotely start earlier.', d: 'some' },
  { t: 'My colleagues, who work remotely, start earlier.', d: 'all' },
  { t: 'The students who slept before the test remembered more.', d: 'some' },
  { t: 'The students, who slept before the test, remembered more.', d: 'all' }
];

var DERRUBA = [['the method <b>that</b> I use every morning', 'cai', 'the method I use every morning'], ['the method <b>that</b> works for me', 'fica', 'the method that works for me'], ['the person <b>who</b> trained me', 'fica', 'the person who trained me'], ['the book <b>that</b> she recommended', 'cai', 'the book she recommended'], ['the study <b>that</b> everyone quotes', 'cai', 'the study everyone quotes'], ['the students <b>who</b> slept more', 'fica', 'the students who slept more']];

var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "The 2006 study used a class of surgical residents.", "t": true, "tm": "0:20"},
  {"f": "The two groups got different study materials.", "t": false, "tm": "0:30", "c": "No. Each group received the same study materials."},
  {"f": "The first technique is testing yourself, with flashcards and quizzes.", "t": true, "tm": "2:21"},
  {"f": "Interleaving means studying one topic at a time.", "t": false, "tm": "3:17", "c": "No. It means mixing different subjects in one session."},
  {"f": "Spacing your review across days gives your brain time to rest and sleep.", "t": true, "tm": "3:53"},
  {"f": "Cramming the night before is the best way to remember for the long term.", "t": false, "tm": "4:06", "c": "No. The information won’t stick around for the long term."}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · A friend has an exam",
  "quem": "The friend",
  "fala": "The friend: “I have an exam on Friday. What should I do?”",
  "reacoes": [
    [
      "Test yourself",
      "The students who test themselves remember more.",
      "“Flashcards tonight, then.”"
    ],
    [
      "Space it out",
      "The people who study a little every day do better than the ones who cram.",
      "“A little every day. I can do that.”"
    ],
    [
      "Mix subjects",
      "The technique that works for me is mixing subjects in one session.",
      "“Mixing subjects? I’ll try it.”"
    ]
  ]
};

var EXPLICA = [
  { amigo: 'So people who study longer learn more? Obviously.', ops: ['No. The residents who spread the same hours over four weeks learned more.', 'No. The residents, who spread the same hours over four weeks, learned more.', 'No. The residents which spread the hours learned more.'], meu: 'Now explain it again, as if to your grandmother.' },
  { amigo: 'And the ones who crammed?', ops: ['The group that crammed everything into one day did worse.', 'The group, that crammed everything into one day, did worse.', 'The group what crammed everything did worse.'], meu: 'Your turn: a time you crammed. What happened?' },
  { amigo: 'So what should I do for my exam?', ops: ['What works is short sessions with gaps between them.', 'That works is short sessions with gaps between them.', 'Which works is short sessions with gaps.'], meu: 'Your turn: give your friend a real plan for next week.' }
];

var ERROS = [
  { f: 'My mother <s>that is a doctor</s> lives in Recife.', ops: [', who is a doctor,', 'which is a doctor', 'what is a doctor'], w: 'One mother: <b>, who is a doctor,</b>' },
  { f: '<s>That</s> I need is more time.', ops: ['What', 'Which', 'Who'], w: 'No noun in front: <b>What</b>.' },
  { f: 'The study, <s>that</s> was published in 2006, is famous.', ops: ['which', 'what', 'who'], w: 'Commas: <b>which</b>, never THAT.' },
  { f: 'The people <s>which</s> slept more did better.', ops: ['who', 'what', 'whose'], w: 'People: <b>who</b>.' },
  { f: 'The residents<s>,</s> who crammed<s>,</s> did worse. (only some crammed)', ops: ['remove both commas', 'keep both commas', 'remove only one comma'], w: 'Some of them: <b>no commas</b>.' },
  { f: 'The book I read last week was great.', ops: ['Nothing. It’s right.', 'the book what I read', 'the book, I read,'], w: 'Five problems and one good sentence.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  mt: { tema: '', n: 0, foi: {} }, gr: { esc: -1 }, vg: { n: 0, c: '' }, pt: { n: 0, esc: -1 }, pa: {}, dr: {}, video: { p: 0 }, ex: { n: 0, esc: -1 }, er: { n: 0, esc: -1 } };

/* a frase com os dois encaixes de vírgula */
function frase(x, com) {
  return '<div class="sw-frase' + (com ? ' com' : '') + '">' + x.a + '<i class="sw-v">' + (com ? ',' : '') + '</i> <span class="sw-cl">' + x.c + '</span><i class="sw-v">' + (com ? ',' : '') + '</i> ' + x.d + '</div>';
}
/* o gráfico: duas barras (alguns, comparados) ou uma (todos) */
function grafico(modo, rot) {
  var dois = modo === 'some';
  return '<div class="sw-graf"><svg viewBox="0 0 360 200" aria-hidden="true"><path class="sw-eixo" d="M40 170 H340 M40 20 V170"/>'
    + (dois ? '<rect class="sw-barra a" x="80" y="40" width="80" height="130"/><rect class="sw-barra b" x="210" y="100" width="80" height="70"/><text x="120" y="190" text-anchor="middle">' + ((rot || [])[0] || 'GROUP A').toUpperCase() + '</text><text x="250" y="190" text-anchor="middle">' + ((rot || [])[1] || 'GROUP B').toUpperCase() + '</text>'
      : modo === 'all' ? '<rect class="sw-barra c" x="120" y="60" width="120" height="110"/><text x="180" y="190" text-anchor="middle">' + ((rot || [])[0] || 'EVERYBODY').toUpperCase() + '</text>' : '<text x="190" y="100" text-anchor="middle" class="sw-vazio">ADD OR REMOVE THE COMMAS</text>')
    + '</svg><small>' + (dois ? 'TWO GROUPS, COMPARED · SOME OF THEM' : modo === 'all' ? 'ONE GROUP · ALL OF THEM' : '') + '</small></div>';
}
/* a onda da pausa: a vírgula é um silêncio */
function onda(com) {
  var barras = '', n = 54;
  for (var i = 0; i < n; i++) { var silencio = com && ((i > 8 && i < 13) || (i > 38 && i < 43)); var alt = silencio ? 2 : 6 + ((i * 37) % 23); barras += '<i style="height:' + alt + 'px"' + (silencio ? ' class="sil"' : '') + '></i>'; }
  return '<div class="sw-onda">' + barras + '</div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="sw-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · THE TWO COMMAS</span><h1>Four <b>Weeks</b></h1>'
    + '<p class="sub"><b>The residents who spread their training over four weeks did better.</b> Add two commas and the study disappears, and nobody will ever correct you.</p>'
    + '<div class="chipsx"><span class="pilula">no commas · which ones</span><span class="pilula">two commas · all of them</span><span class="pilula">who · which · that · what</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Read the study</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + frase(VIRG[0], 0) + grafico('some', VIRG[0].g) + '</div></div>';
};

R.metodo = function (c) {
  var e = S.mt;
  var chips = '<div class="sw-temas">' + METODOS.map(function (t) { return '<button type="button" class="pilula' + (e.tema === t ? ' on' : '') + '" data-a="mt-t" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tema) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Tap the one you really use.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ABRE, e, 'mt', 'Keep your method. It comes back at the end, with a clause that says exactly which one.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write the third answer exactly. Expect “the person that learns faster, he …”. Don’t correct yet.</p>';
};

R.grupos = function (c) {
  var e = S.gr, ok = e.esc === 0;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="sw-fatos vd">' + FATOS.map(function (f, i) { return '<span class="' + (i === 2 ? 'g1' : i === 3 ? 'g2' : '') + '">' + f + '</span>'; }).join('') + '</div>' + (ok ? grafico('some', ['four weeks', 'one day']).replace('sw-graf', 'sw-graf mini') : '') + '</div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>PREDICT</small><h2>A month later, who did better?</h2></div>' + tres('gr', PREV, e.esc, 1)
    + (ok ? '<div class="balao vd ok-b"><small>THE FINDING · READ IT, NO PAUSES</small><p>The residents <u>who spread their training over four weeks</u> did better.</p><small>SAME HOURS · DIFFERENT GAPS · NO COMMAS</small></div>' : e.esc > 0 ? '<p class="recusa">Think about the gaps between the sessions. What happens in them?</p>' : '<p class="dica-aluno">Say why first.</p>') + '</div></div>';
};

R.virgulas = function (c) {
  var e = S.vg, n = e.n, fim = n >= VIRG.length;
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>No commas picked out a group. Two commas talked about everyone. Now one of your own, both ways.</h2></div></div>';
  var x = VIRG[n], ok = e.c === x.alvo;
  return cab(c) + trilha(VIRG, n) + '<div class="vd sw-quer"><small>WHAT YOU NEED TO SAY</small><b>' + x.quer + '</b></div>'
    + '<div class="mesa-c"><div class="lado-l">' + frase(x, e.c === 'all') + '<div class="sw-dois">' + [['some', 'NO COMMAS · SOME'], ['all', 'TWO COMMAS · ALL']].map(function (o) { return '<button type="button" class="versao grande-v' + (e.c === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="vg" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div class="sw-linha-ok"><p class="aprova">Say it, with the right pauses.</p><button type="button" class="btn" data-a="vg-prox">Next</button></div>' : e.c ? '<p class="recusa">Delete the clause. Do you still know who they are? If not: no commas.</p>' : '') + '</div>'
    + '<div class="lado-l">' + grafico(e.c, e.c === x.alvo ? x.g : null) + '</div></div>';
};

R.portas = function (c) {
  var e = S.pt, n = e.n, fim = n >= PORTAS.length;
  if (fim) return cab(c) + trilha(PORTAS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX DOORS</small><h2>The one that costs most is WHAT, at the front of the sentence. Now two true WHAT sentences about your week.</h2></div></div>';
  var x = PORTAS[n], ok = e.esc === 0;
  return cab(c) + trilha(PORTAS, n) + '<div class="sw-portas">' + [['THAT', 'picks out a thing'], ['WHICH', ', extra ,'], ['WHO', 'a person'], ['WHAT', 'no noun in front']].map(function (p) { return '<div class="sw-porta"><b>' + p[0] + '</b><small>' + p[1] + '</small></div>'; }).join('') + '</div>'
    + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div>' + tres('pt', x.ops, e.esc, n + 1, 'linha')
    + (ok ? '<div class="sw-linha-ok centro"><p class="aprova">Say the whole sentence.</p><button type="button" class="btn" data-a="pt-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Is there a noun before the gap? A person? Commas around it?</p>' : '') + '</div>';
};

R.pausa = function (c) {
  var e = S.pa, todos = PAUSA.every(function (x, i) { return e[i] === x.d; });
  return cab(c) + '<div class="sw-pausas">' + PAUSA.map(function (x, i) { var foi = e[i], ok = foi === x.d, ouviu = !x.au || (S.ouviu || {})[x.au]; return '<div class="sw-pausa vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '">' + (x.au ? '<div class="toca-linha">' + tocar(x.au) + '<b>READING ' + (i + 1) + '</b></div>' + (ouviu ? onda(x.d === 'all') : '') : '<p class="sw-ler">' + (i + 1) + ' · YOU READ IT</p><p>' + x.t + '</p>')
    + '<div class="sw-fs">' + [['some', 'SOME'], ['all', 'ALL']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="pa" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + (todos ? '<p class="aprova" style="text-align:center">One sentence, two silences, two different groups of people.</p>' : '<p class="dica-aluno" style="text-align:center">No gap: SOME of them. Two gaps: ALL of them.</p>');
};

R.derruba = function (c) {
  var e = S.dr, todos = DERRUBA.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="sw-derruba">' + DERRUBA.map(function (x, i) { var foi = e[i], ok = foi === x[1]; return '<div class="sw-dr vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><p>' + x[0] + '</p>' + (ok && x[1] === 'cai' ? '<p class="sw-curta">' + x[2] + '</p>' : '') + '<div class="sw-fs">' + [['cai', 'DROP IT'], ['fica', 'IT STAYS']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="dr" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + (todos ? '<p class="aprova" style="text-align:center">Three drops, three stays. Both versions are correct; the short one sounds native.</p>' : '<p class="dica-aluno" style="text-align:center">Who does the verb? If THAT does it, it stays.</p>');
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + o gráfico dos dois grupos (grafico('some'), já da aula) que sobe a cada acerto, e seis marcas + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Study techniques', '&start=20&end=273'); }
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
  var pips = '';
  for (var k = 0; k < n; k++) { var s = d.st[k], nova = s === 1 && !debAcesa[k]; if (s === 1) debAcesa[k] = 1; pips += '<i class="' + (s === 1 ? 'q' + (nova ? ' nova' : '') : s === -1 ? 'perdida' : 'vazio') + '"></i>'; }
  return debTopo(d, 'THE STUDY', 'Evidence found') + grafico('some', ['four weeks', 'one day']).replace('class="sw-graf"', 'class="sw-graf deb-graf" style="--p:' + (d.ok / n) + '"') + '<div class="deb-pips" aria-hidden="true">' + pips + '</div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd ja"><small>BEFORE YOU WATCH</small><h2>The video gives three study techniques. Guess one.</h2></div>' + fala('vda', ['I think one is …', 'Maybe …'], []) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>About four minutes. It opens after your guess.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Study techniques', '&start=20&end=273') + '<small class="cred">0:20 to 4:33 · it stops by itself</small></div><div class="lado-video"><div class="pergunta vd ja"><small>WHILE YOU WATCH</small><h2>Same materials, same hours. What was the only difference?</h2></div><div><button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again (0:20 to 4:33).</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.explica = function (c) {
  var e = S.ex, n = Math.min(e.n, EXPLICA.length - 1), fim = e.n >= EXPLICA.length, x = EXPLICA[n], ok = e.esc === 0;
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>THREE QUESTIONS</small><h2>Three clear answers. Your friend knows exactly which ones. Now explain a different study you know.</h2></div></div>';
  return cab(c) + trilha(EXPLICA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="sw-amigo vd"><small>YOUR FRIEND · YOUR TEACHER READS IT</small><p>“' + x.amigo + '”</p></div>' + (ok ? '<div class="pergunta vd ja"><small>YOUR OWN WORDS</small><h2>' + x.meu + '</h2></div>' : '') + '</div>'
    + '<div class="lado-l">' + tres('ex', x.ops, e.esc, n + 1) + (ok ? '<p class="so-prof dica-aluno">Ask once more: “Which ones? All of them?”</p><div><button type="button" class="btn" data-a="ex-prox">Next question</button></div>' : e.esc > 0 ? '<p class="recusa">Commas would make it ALL of them. Is that what the study found?</p>' : '') + '</div></div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>The report now says exactly what the study found. Say the rule behind each fix.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div>' + tres('er', x.ops, e.esc, n + 2, 'linha')
    + (ok ? '<div class="sw-linha-ok centro"><p class="aprova">' + x.w + ' Say the whole sentence.</p><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Person or thing? Commas or not? A noun before the gap?</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'The method that works for me is …\nThe one I’ll try next is …\nThe residents who …', 'Your method',
    ['that', 'who', 'which', 'what', 'the one I', ', which'], ['YOUR METHOD, EXACTLY WHICH ONE', 'The method that works for you, the one you’ll try next, and the finding with no commas.'])
    + '<div class="lado-fim">' + grafico('some', ['four weeks', 'one day']).replace('sw-graf', 'sw-graf mini')
    + '<div class="grande vd"><span><u>no commas</u> · which ones (some)</span><span><u>two commas</u> · all of them · who / which, never that</span><span><u>what</u> = the thing that</span><span>not <s>That I need is …</s>, not <s>my mother that is a doctor</s></span></div>'
    + mostra('fim', 'The method that works for me is testing myself.<br>The one I’ll try next is short sessions every day.<br>The residents who spread their training over four weeks did better.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['mt-t'] = function (b, n, v) { S.mt.tema = v; };
TOQUES.gr = function (b, n) { S.gr.esc = n; };
TOQUES.vg = function (b, n, v) { S.vg.c = v; };
TOQUES['vg-prox'] = function () { S.vg = { n: S.vg.n + 1, c: '' }; };
TOQUES.pt = function (b, n) { S.pt.esc = n; };
TOQUES['pt-prox'] = function () { S.pt = { n: S.pt.n + 1, esc: -1 }; };
TOQUES.pa = function (b, n, v) { S.pa[n] = v; };
TOQUES.dr = function (b, n, v) { S.dr[n] = v; };
/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.ex = function (b, n) { S.ex.esc = n; };
TOQUES['ex-prox'] = function () { S.ex = { n: S.ex.n + 1, esc: -1 }; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de virgulas.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'The study, told to a friend. Tap the lit words.',
  falas: [
    { q: 'Friend', f: 'Which residents did better?' },
    { q: 'You', f: 'The residents [[who studied over four weeks]] did better.' },
    { q: 'Friend', f: 'And who were they?' },
    { q: 'You', f: 'The residents[[, who were all surgeons,]] studied the same hours.' },
    { q: 'Friend', f: 'Which technique worked best?' },
    { q: 'You', f: 'The technique [[that spreads the lessons out]] worked best.' },
    { q: 'Friend', f: 'And why does it work?' },
    { q: 'You', f: 'The brain[[, which needs sleep,]] stores the lesson at night. [[What]] helped most was time.' }
  ],
  porques: [
    'No commas: it picks out WHICH ones. Only that group did better.',
    'Two commas: extra information about ALL of them. They were all surgeons.',
    'No commas: it picks out WHICH technique.',
    'Two commas: extra information, so which, never that. The brain always needs sleep.',
    'What = the thing that. No noun in front of it.'
  ],
  nota: 'No commas: <b>the residents who studied</b> picks out which ones. Two commas: <b>the residents, who were surgeons, studied</b> adds extra news about all of them. <b>That</b> never goes between commas: use <b>which</b> or <b>who</b>.',
  uso: { p: 'Your turn. Two sentences about how you study: one with no commas, and one with two commas.', molde: ['The apps that …', 'My phone, which …, …'], ex: 'The apps that send me daily reminders help me most. My phone, which is always with me, is my best teacher.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
