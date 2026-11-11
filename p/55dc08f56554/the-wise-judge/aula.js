/* ============================================================
   THE WISE JUDGE · SOLOMON'S COURT · LIVE CLASS  11/10/2026
   Main series B1 · depois do verbo, -ING ou TO: want / need / decide /
   try + TO; keep / stop / avoid / enjoy + -ING; preposição (afraid of,
   good at, instead of) + -ING; e os dois STOP (stop smoking ≠ stop to
   smoke).
   Armadilha do português (só no guia): "parar de fumar" vira "stop to
   smoke" (= parar PARA fumar); "eu quero sair" vira "I want quit";
   "medo de falhar" vira "afraid of fail"; "continua dizendo" vira
   "keeps to say".
   O VÍDEO: "I FIXED My Whole Life In 1 Night" (Henry Grey Earls,
   iKknJnHwQt8, 0–134): o Paradoxo de Salomão — a gente julga bem a vida
   dos outros e trava na própria; a saída é escrever sobre si mesmo em
   terceira pessoa e perguntar "se essa pessoa fosse meu amigo, o que eu
   diria?".
   O MUNDO: a corte do rei Salomão. O aluno é o juiz sábio: cinco
   pergaminhos com os casos dos outros chegam antes do vídeo, e ele dá a
   sentença em segundos. Depois do vídeo e da regra, chega o último
   pergaminho, o dele, escrito por ele em terceira pessoa. O juiz julga o
   próprio caso como se fosse de um amigo, e fecha com um decreto para si.
   A CARA: roxo-real e ouro, Cinzel nos títulos; pergaminhos com fita
   vermelha e lacre dourado; a sentença carimbada (VERDICT).
   Catálogo: _previa/catalogo-solomon (direção D, escolhida 11/10).
   ============================================================ */
var YT = 'iKknJnHwQt8';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'capa', rot: 'I · The Two Pans', t: 'Advice for a friend, advice for you.', p: 'Three steps: give advice to a friend, talk about your life, then answer: do you follow your own advice?' },
  { k: 'palavras', est: 'l', min: 5, img: 'corte', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'corte', est: 'o', min: 7, img: 'corte', rot: 'III · The Court Is Open', t: 'Five cases on the table. You are the judge.', p: 'Pick a scroll. Read the case out loud and answer the question. Then give your verdict in ONE sentence. Your teacher taps what you said.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'IV · Solomon’s Paradox', t: 'Why was that so easy? The video has the answer.', p: 'Answer first. Then the video in four chapters. Then True or Lie.' },
  { k: 'falas', est: 'l', min: 5, extra: 1, img: 'capa', rot: 'V · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'balanca', rot: 'VI · Find the Rule', t: 'Four sentences from the court. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'balanca', rot: 'VII · The Scale', t: 'After the verb: TO or -ING?', p: 'Read the four cards out loud. Then fix the four traps.' },
  { k: 'pergaminho', est: 'w', min: 6, img: 'camara', rot: 'VIII · The Last Scroll', t: 'One more case arrives. It has your name on it.', p: 'Write your own case like the other scrolls: your name, not “I”. What do you want? What do you keep doing? What are you afraid of?' },
  { k: 'veredito', est: 'o', min: 7, extra: 1, img: 'capa', rot: 'IX · The Judge’s Chair', t: 'Read your scroll like it’s someone else’s case. Then judge it.', p: 'Your teacher is the court. Answer out loud, one question at a time.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'balanca', rot: 'X · Quick Check', t: 'Five quick lines from the court.', p: 'Say the whole sentence out loud. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'camara', rot: 'XI · The Royal Decree', t: 'The judge signs one last paper: a decree for yourself.', p: 'Write three lines to yourself: stop…, start…, don’t be afraid of… It goes to your My notes.' }
];

/* o aquecimento (11/10, pedido do Carlos: nada de cartas): A BALANÇA. Em cada situação o aluno
   aconselha um amigo (prato da esquerda) e depois conta o que ELE faz (prato da direita).
   O professor toca "same advice" ou "different": cada "different" pesa o prato do amigo.
   No fim a balança pende para os amigos, e o vídeo explica por quê. Só conversa. */
var PRATOS = [
  { k: 'Work', a: 'Your friend hates their job. What should they do?', ea: 'They should start looking for a new job.',
    b: 'And you? What do you want to change in your work or studies? Are you doing it?', eb: 'I want to change my schedule, but I keep waiting.' },
  { k: 'Sleep', a: 'Your friend is always tired and uses the phone in bed. Your advice?', ea: 'Stop using your phone in bed!',
    b: 'And you? What do you do before you sleep?', eb: 'Honestly, I keep scrolling until 1 AM.' },
  { k: 'A dream', a: 'Your friend has a dream, but is afraid. What do you tell them?', ea: 'Don’t be afraid of trying. Start small.',
    b: 'And you? Is there a dream you are afraid of starting?', eb: 'I want to learn the piano, but I’m afraid of looking silly.' },
  { k: 'Health', a: 'Your friend never exercises. What should they try?', ea: 'They should try to walk thirty minutes a day.',
    b: 'And you? How much do you move in a week?', eb: 'Not much. I avoid going to the gym.' },
  { k: 'Saying no', a: 'Your friend says yes to everybody and has no time. Your advice?', ea: 'Stop saying yes to everything.',
    b: 'And you? Is it easy for you to say no?', eb: 'No. I keep saying yes to my boss.' }
];

/* os casos da corte: o aluno lê, responde e dá a sentença; o professor toca a versão que ouviu */
var CASOS = [
  { k: 'MARK, 34', nota: 'Hates his job. Works until 9 PM every day. Has wanted a new job for two years.', q: 'Why do you think Mark stays?', ops: [['Mark should stop working late and look for a new job.', 'ok'], ['Mark should stop to work late and look for a new job.', 'stopto'], ['Mark should stop work late and look for a new job.', 'base']] },
  { k: 'JULIA, 27', nota: 'Her boyfriend lied to her again. She keeps forgiving him. Her friends are worried.', q: 'What would you say to Julia?', ops: [['Julia needs to stop forgiving him.', 'ok'], ['Julia needs stop forgiving him.', 'need'], ['Julia needs to stop to forgive him.', 'stopto']] },
  { k: 'LEO, 41', nota: 'Dreams of opening a small bakery. Every year he says “next year”. He is afraid of failing.', q: 'What is Leo really afraid of?', ops: [['Leo is afraid of failing, but he should try to start small.', 'ok'], ['Leo is afraid of fail, but he should try to start small.', 'prep'], ['Leo is afraid of failing, but he should try start small.', 'need']] },
  { k: 'NINA, 19', nota: 'Wants to learn the guitar. Keeps putting it off. Watches guitar videos instead of practicing.', q: 'Why is watching easier than practicing?', ops: [['Nina keeps putting it off. She needs to start practicing.', 'ok'], ['Nina keeps to put it off. She needs to start practicing.', 'keepto'], ['Nina keeps putting it off. She needs to start practice.', 'start']] },
  { k: 'TOM, 52', nota: 'Smokes ten cigarettes a day. Has tried to quit three times. His doctor is worried.', q: 'What could help Tom this time?', ops: [['Tom should stop smoking and try again with help.', 'ok'], ['Tom should stop to smoke and try again with help.', 'stopto'], ['Tom should stop smoke and try again with help.', 'base']] }
];
var NAO = {
  stopto: 'STOP TO + verb = stop IN ORDER TO do it! No more: stop + -ING. stop working, stop smoking.',
  base: 'After stop / keep / avoid: the -ING form. stop working.',
  need: 'need, want, decide, try: + TO + verb. needs to stop, try to start.',
  prep: 'After a preposition (of, about, at, instead of): -ING. afraid of failing.',
  keepto: 'keep = continue: + -ING. keeps putting it off.',
  start: 'start + -ING (or + to). Here: start practicing.'
};

var ANTES = [
  { q: 'Is it easier to solve a friend’s problem or your own? Why?', h: 'A friend’s. I can see it clearly, and I’m not afraid.' },
  { q: 'Five verdicts in seconds. Would you follow your own advice?', h: 'Maybe not. It’s easy to say “stop” to other people.' }
];
var CAPS = [
  { k: 'PART ONE', ini: 0, fim: 35, q: 'What is easy to see in your friends’ lives? What happens with your own problems?', h: 'It’s easy to see what’s wrong in their lives. With our own problems, we “draw a blank”.' },
  { k: 'PART TWO', ini: 35, fim: 66, q: 'What is Solomon’s Paradox? Why does it happen?', h: 'We are wiser about other people’s problems. Our fear, our past and our ego get mixed up.' },
  { k: 'PART THREE', ini: 66, fim: 112, q: 'What is the writing exercise? What three things do you describe?', h: 'Write about yourself as “he” or “she”: what this person wants, what they’re doing, and what’s stopping them.' },
  { k: 'THE END', ini: 112, fim: 134, q: 'What question do you ask at the end?', h: '“If this person were my friend, what would I tell them to do?”' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "The video says your whole life can change in one night.", "t": true, "tm": "0:00"},
  {"f": "For a friend with a dream, the advice is: “Wait.”", "t": false, "tm": "0:23", "c": "No. The advice is: “Start.”"},
  {"f": "The idea has a name: Solomon’s Dream.", "t": false, "tm": "0:45", "c": "No. It’s called Solomon’s Paradox."},
  {"f": "We reason more wisely about other people’s problems than our own.", "t": true, "tm": "0:48"},
  {"f": "The reason: you are tired and you have no time.", "t": false, "tm": "0:55", "c": "No. Your fear, your history and your ego get tangled up."},
  {"f": "The first advice: stop looking at your life from the inside.", "t": true, "tm": "1:13"}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · The court asks you",
  "quem": "The court",
  "fala": "The court: “A friend asks for your advice. What do you tell them?”",
  "reacoes": [
    [
      "Stop",
      "You need to stop worrying and start talking.",
      "“Good advice. Now follow it.”"
    ],
    [
      "Try",
      "Try to write about it as “he” or “she”.",
      "“Now that is wise.”"
    ],
    [
      "Don’t fear",
      "Don’t be afraid of asking for help.",
      "“The court agrees.”"
    ]
  ]
};
var SEG0 = [0, 134];
var DEB_FOTOS = [];   /* seis fotos da própria aula: cada linha certa acende uma */
var DEB_SEG = [[0, 35], [35, 66], [66, 112], [112, 134]];   /* os trechos limpos do vídeo: o ▶ toca só dentro de um deles e para no fim dele */
/* o ▶ recarrega o vídeo no trecho limpo da linha; sem vídeo na tela, o Play carrega no mesmo ponto */
window.addEventListener('load', function () {
  TOQUES['fq-pula'] = function (b, n, v, c) {
    var t = +v, g = null; DEB_SEG.forEach(function (x) { if (t >= x[0] && t < x[1]) g = x; });
    if (!g) return false;
    S.depSeg = [t, g[1]];
    var fr = document.querySelector('#palco .video iframe');
    if (!fr) return true;
    fr.src = fr.src.replace(/([?&])start=\d+/, '$1start=' + t).replace(/([?&])end=\d+/, '$1end=' + g[1]).replace(/&autoplay=\d/, '') + '&autoplay=1';
    return false;
  };
});

var FITAS = [['+ TO', 'want to · need to · decide to · try to'], ['+ -ING', 'keep · stop · avoid · enjoy · finish'], ['PREPOSITION + -ING', 'afraid of · good at · think about · instead of'], ['STOP: TWO MEANINGS', 'stop smoking: no more · stop to smoke: in order to smoke']];
var ARMAS = [
  ['WANT + TO', 'I want quit my job.', 'I want <b>to quit</b> my job.', 'want, need, decide, try: + to.'],
  ['STOP + -ING', 'I stopped to smoke last year.', 'I stopped <b>smoking</b> last year.', 'stopped TO smoke = stopped in order to smoke!'],
  ['AFTER OF: -ING', 'I’m afraid of fail.', 'I’m afraid of <b>failing</b>.', 'After a preposition: always -ing.'],
  ['KEEP + -ING', 'She keeps to say “next year”.', 'She keeps <b>saying</b> “next year”.', 'keep = continue: + -ing.']
];

var VEREDITO = [
  { pede: 'Read your scroll out loud, like a judge. Start with: “This is the case of…”', voce: ['This is the case of …', '… wants to …', '… keeps …ing', '… is afraid of …ing'], resp: 'Thank you. The court has heard the case.' },
  { pede: 'The verdict, part one: what should this person STOP doing?', voce: ['He / She should stop …ing.', 'He / She needs to stop …ing.'], resp: 'Noted. Now the second part.' },
  { pede: 'The verdict, part two: what should this person START doing, this week?', voce: ['He / She needs to start …ing.', 'He / She should try to …'], resp: 'A good verdict. Clear and kind.' },
  { pede: 'Last question: if this person were your friend, what would you tell them?', voce: ['I would tell them to …', 'Don’t be afraid of …ing.'], resp: 'And this person is… you. Will you follow your own verdict?' }
];

var QUIZ = [
  { f: 'Nina keeps ___ it off.', op: ['putting', 'to put', 'put'], nao: 'keep + -ing: keeps putting.' },
  { f: 'I want ___ a new job this year.', op: ['to find', 'finding', 'find'], nao: 'want + to: want to find.' },
  { f: 'Leo is afraid of ___.', op: ['failing', 'fail', 'to fail'], nao: 'After a preposition (of): -ing.' },
  { f: 'Stop ___ about it and start!', op: ['thinking', 'to think', 'think'], nao: 'No more thinking: stop + -ing.' },
  { f: 'They decided ___ to Canada.', op: ['to move', 'moving', 'move'], nao: 'decide + to: decided to move.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: 0, p: 0, r: {} }, video: { p: 0, cap: 0, viu: {} }, ct: { sel: 0, esc: {} }, vr: { n: 0 }, qz: { n: 0, esc: -1 } };

/* o pergaminho: fita vermelha e lacre dourado; o veredito entra carimbado */
function pergaminho(x, carimbo) {
  return '<div class="perg vd"><span class="perg-fita" aria-hidden="true"></span><small>THE CASE OF</small><b class="perg-nome">' + x.k + '</b><p>' + x.nota + '</p>' + (carimbo ? '<span class="carimbo">VERDICT</span>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · SOLOMON’S COURT</span><h1>The <b>Wise</b> Judge</h1>'
    + '<p class="sub"><b>Everybody knows what their friends should do.</b> Five cases arrive at the court, and you judge them in seconds. Then one more case arrives, with your name on it.</p>'
    + '<div class="chipsx"><span class="pilula">wants to quit</span><span class="pilula">keeps putting it off</span><span class="pilula">afraid of failing</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the court</button>' + faixaLive() + '</div>'
    + '<div class="capa-r"><div class="selo-rei" aria-hidden="true"><span>S</span></div>' + pergaminho({ k: 'YOUR NAME', nota: 'Wants to… Keeps… Is afraid of…' }) + '</div></div>';
};

R.voce = function (c) {
  var e = S.voce, n = e.sel, x = PRATOS[n], dif = 0, feitos = 0;
  PRATOS.forEach(function (p, i) { if (e.r[i]) feitos++; if (e.r[i] === 'dif') dif++; });
  var ang = -5 * dif, fim = n >= PRATOS.length;
  var balanca = '<div class="bal" aria-hidden="true"><i class="bal-pe"></i><i class="bal-topo"></i>'
    + '<div class="bal-trave" style="transform:rotate(' + ang + 'deg)"><div class="bal-prato pa" style="transform:rotate(' + (-ang) + 'deg)"><i></i><span>FOR A FRIEND</span>' + '<em>' + PRATOS.map(function (p, i) { return e.r[i] === 'dif' ? '<b class="peso' + (i === n ? ' novo' : '') + '"></b>' : ''; }).join('') + '</em></div>'
    + '<div class="bal-prato pb" style="transform:rotate(' + (-ang) + 'deg)"><i></i><span>FOR ME</span></div></div></div>';
  var lado;
  if (fim) lado = '<div class="pratos-card"><small>THE SCALE</small><h2>' + (dif >= 3 ? 'It leans to your friends. You give great advice… to other people.' : dif ? 'Almost balanced, but not quite. Some advice is only for your friends.' : 'Perfectly balanced. Do you really take your own advice? The court will test that.') + '</h2>'
    + '<p>Why is advice so easy for other people? The video has a name for it.</p></div>';
  else {
    /* três passos, um de cada vez: 1 o conselho para o amigo · 2 a vida do aluno · 3 você segue o seu conselho? */
    var passo = e.r[n] ? 3 : (e.p ? 2 : 1);
    var passos = '<ol class="passos">' + ['Advice for a friend', 'Your life', 'Do you follow it?'].map(function (t, i) { return '<li class="' + (i + 1 < passo ? 'ja' : i + 1 === passo ? 'on' : '') + '"><b>' + (i + 1) + '</b>' + t + '</li>'; }).join('') + '</ol>';
    lado = '<div class="pratos-card"><small>SITUATION ' + (n + 1) + ' OF ' + PRATOS.length + ' · ' + x.k.toUpperCase() + '</small>' + passos;
    if (passo === 1) lado += '<p class="pq pq-a"><b>1 · For a friend</b>' + x.a + '</p>'
      + '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="pr-p">Now you</button></div>';
    else lado += '<p class="pq-feito">Your advice for a friend: done.</p><p class="pq pq-b"><b>2 · For you</b>' + x.b + '</p>'
      + '<p class="pq pq-c"><b>3 · The question</b>Do you follow your own advice?</p>'
      + '<div class="pratos-bt">' + (e.r[n]
        ? '<span class="pratos-ok">' + (e.r[n] === 'dif' ? 'No. One weight goes to your friend’s side.' : 'Yes. The scale doesn’t move.') + '</span><button type="button" class="btn cheio" data-a="pr-prox">' + (n < PRATOS.length - 1 ? 'Next situation' : 'See the scale') + '</button>'
        : '<button type="button" class="btn" data-a="pr" data-v="igual">Yes, I do</button><button type="button" class="btn" data-a="pr" data-v="dif">No, I don’t</button>') + '</div>';
    lado += '</div><p class="so-prof dica-aluno">Example answers: “' + x.ea + '” / “' + x.eb + '”</p>';
  }
  return cab(c) + '<div class="pratos-mesa"><div>' + balanca + '<p class="bal-legenda">Every <b>“No, I don’t”</b> puts a weight on your friend’s side.</p></div><div class="lado-l">' + lado + '</div></div>';
};

R.corte = function (c) {
  var e = S.ct, x = CASOS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitos = CASOS.filter(function (t, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="rolos">' + CASOS.map(function (t, i) { return '<button type="button" class="rolo' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feito' : '') + '" data-a="ct" data-n="' + i + '"><i aria-hidden="true"></i><b>' + t.k.split(',')[0] + '</b></button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l">' + pergaminho(x, ok) + '<div class="pergunta vd ja"><h2>' + x.q + '</h2></div></div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><small>THE VERDICT</small><p>' + x.ops[0][0] + '</p></div><p class="aprova">' + (feitos >= CASOS.length ? 'Five cases, five verdicts, and it took you seconds. Easy, right? Now the video asks a hard question: why is it so easy with other people?' : 'Next scroll. Judge fast: you’re the wise one here.') + '</p>'
      : '<h5 class="so-prof rot-ouve">TAP THE VERDICT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 2).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="ct-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '')
      + fala('ct' + e.sel, ['… should stop …ing', '… needs to …', '… is afraid of …ing', '… keeps …ing'], []) + '<p class="so-prof dica-aluno">Any good verdict counts. Tap the version you heard: listen to stop + -ing and need + to.</p>') + '</div></div>';
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + os seis pergaminhos da corte (rolos) que se selam a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Solomon’s Paradox', '&start=' + (S.depSeg || SEG0)[0] + '&end=' + (S.depSeg || SEG0)[1]); }
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
  var nomes = ['CHANGE', 'DREAM', 'PARADOX', 'WISER', 'TANGLED', 'STOP'];
  var rolos = nomes.slice(0, n).map(function (k, i) {
    var s = d.st[i], nova = s === 1 && !debAcesa[i]; if (s === 1) debAcesa[i] = 1;
    return '<span class="rolo deb-rolo' + (s === 1 ? ' feito' : s === -1 ? ' perdido' : '') + (nova ? ' nova' : '') + '"><i></i><b>' + k + '</b></span>';
  }).join('');
  return debTopo(d, 'THE COURT', 'Scrolls sealed') + '<div class="rolos deb-rolos" aria-hidden="true">' + rolos + '</div>';
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
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Four short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Solomon’s Paradox', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again (each one stops by itself).</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas4">' + FITAS.map(function (f, i) { return '<div class="fita4 f' + i + '"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.pergaminho = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('caso', (S.txt || {}).caso || '', (S.salvo || {}).caso, 'Ana wants to change jobs.\nShe keeps waiting for the right time.\nShe is afraid of …', 'The case of …',
    ['wants to ', 'needs to ', 'keeps ', 'is afraid of ', 'has tried to ', 'avoids ', ' instead of '], ['THE LAST SCROLL', 'Your name, not “I”. What does this person want? What do they keep doing? What are they afraid of?'])
    + '<div class="lado-fim">' + pergaminho({ k: 'YOUR NAME', nota: 'Write it like the other cases: short lines, and he / she, never I.' })
    + mostra('perg', 'Lucas wants to change jobs.<br>He keeps waiting for the right time.<br>He is afraid of starting again.<br>He avoids talking about it.', 1)
    + '<p class="so-prof dica-aluno">Don’t help yet. Let the student write it alone, in the third person. If they write “I”, point to the scrolls.</p></div></div>';
};

R.veredito = function (c) {
  var e = S.vr, n = Math.min(e.n, VEREDITO.length - 1), x = VEREDITO[n];
  return cab(c) + trilha(VEREDITO, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('capa') + ')"><span>THE JUDGE’S CHAIR</span></div>'
    + ((S.txt || {}).caso ? '<div class="perg vd mini"><small>YOUR SCROLL</small><p>' + h(S.txt.caso).replace(/\n/g, '<br>') + '</p></div>' : '') + '</div>'
    + '<div class="lado-l"><div class="pede vd"><small>THE COURT</small><b>“' + x.pede + '”</b></div>' + fala('vr' + n, x.voce, ['stop', 'start', 'keep', 'want to', 'afraid of', 'instead of']) + '<p class="so-prof dica-aluno">The court answers: “' + x.resp + '”</p>'
    + (n < VEREDITO.length - 1 ? '<div><button type="button" class="btn" data-a="vr-prox">Next</button></div>' : '<p class="aprova">The court is closed. One more paper to sign.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>want / need / decide + TO. keep / stop / avoid + -ING. After of, about, at: -ING.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 2).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Stop waiting for the right time.\nStart looking for a new job this week.\nDon’t be afraid of failing.', 'The royal decree',
    ['Stop ', 'Start ', 'Keep ', 'Try to ', 'Don’t be afraid of ', ' this week'], ['THE ROYAL DECREE', 'Three lines to yourself, like a friend would say them. Stop…, start…, don’t be afraid of…'])
    + '<div class="lado-fim"><div class="decreto vd"><small>BY ORDER OF THE WISE JUDGE</small><span>Stop <u>putting it off</u>.</span><span>Start <u>doing</u> it this week.</span><span>Don’t be afraid of <u>failing</u>.</span><i class="lacre" aria-hidden="true">S</i></div>'
    + mostra('fim', 'Stop working until 9 PM.<br>Start looking for a new job this week.<br>Don’t be afraid of asking for help.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.pr = function (b, n, v) { S.voce.r[S.voce.sel] = v; };   /* só marca: o Next é do professor */
TOQUES['pr-prox'] = function () { S.voce.sel++; S.voce.p = 0; };
TOQUES['pr-p'] = function () { S.voce.p = 1; };
TOQUES.ct = function (b, n) { S.ct.sel = n; };
TOQUES['ct-v'] = function (b, n, v) { S.ct.esc[S.ct.sel] = v; };
/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES['vr-prox'] = function () { S.vr.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four sentences from the court. Find the rule yourself.',
  exemplos: [
    'The king <b>wants</b> <u>to know</u> the truth.',
    'The woman <b>keeps</b> <u>asking</u> for her baby.',
    'The judge <b>decided</b> <u>to wait</u>.',
    'The other woman was <b>afraid of</b> <u>losing</u> the case.'
  ],
  pergunta: 'The verb after want and decide has … The verb after keep and afraid of has …',
  opcoes: ['to after want and decide, -ing after keep and afraid of', '-ing after want and decide, to after keep and afraid of', 'to after all of them'], c: 0,
  nao: 'Not that one. Read the four lit pairs again: which ones have to? which ones have -ing?',
  regra: '<b>want / need / decide / try + to</b> + verb. <b>keep / stop / avoid / enjoy</b> and a preposition like <b>afraid of</b> + <b>-ing</b>. Two meanings: stop <b>smoking</b> = quit. stop <b>to smoke</b> = stop in order to smoke.',
  uso: { p: 'Your turn. One thing you want to do, one thing you keep doing, one thing you are afraid of.', molde: ['I want to …', 'I keep …ing', 'I’m afraid of …ing'], ex: 'I want to learn the guitar. I keep forgetting my keys. I’m afraid of speaking in public.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
