/* ============================================================
   THREE HUNDRED YEARS · THE TWO DOORS · LIVE CLASS  06/10/2026
   Main series B2 · concessão: although / even though + frase; despite /
   in spite of + coisa (substantivo ou -ing, ou the fact that + frase);
   um conector por frase; even though (fato) × even if (imaginado).
   Erros: despite of, in spite (sem of), although … but, despite + frase,
   even though para o imaginado.
   O MUNDO (da aula velha): Paris, 2014: 21 solistas de óculos escuros,
   seis violinos; 13 escolheram um novo; os velhos ainda custam milhões.
   Os 20 áudios mantidos (a1–a2 solistas, b1–b8 Enrico, p1a–p5b leitora),
   conferidos no faster-whisper em 06/10: batem. Sem vídeo. O nome do
   luthier famoso saiu da tela (fica "an old Italian violin").
   A CARA (nova; a velha era o arco de pedra): as DUAS PORTAS — uma
   porta larga para UMA FRASE (sujeito + verbo: ALTHOUGH / EVEN THOUGH)
   e uma porta estreita para UMA COISA (DESPITE / IN SPITE OF); o
   pedaço de frase passa pela porta certa. E o TESTE ÀS CEGAS: seis
   estojos no escuro, três velhos e três novos, que se abrem no fim.
   Fila: FILA-LIVE-386.md · 136. Pasta piloto-concede (conferida: não existia).
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. II = verdadeiro ou
   mentira sobre o que cada solista disse, e os estojos abrem (FM.verdadeOuMentira);
   III = separar seis pedaços entre as duas portas (FM.separa); IV = dizer
   uma frase inteira com cada pedaço e tocar quando usou (FM.usa); V = o
   Enrico: a reação do aluno muda a resposta dele (FM.reacao, cinco
   passos); VI = ligar cada ideia ao seu outro lado e ouvir os dois
   (FM.liga); VII = achar a parte quebrada de cinco frases (FM.erro).
   I, VIII, IX e X ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'sala' },
  { k: 'abre', est: 'o', min: 7, img: 'estojo', rot: 'I · Nobody Was Watching', t: 'Think of something you did well even though nobody saw it.', p: 'Tap what it was. Then answer out loud.' },
  { k: 'teste', est: 'l', min: 7, img: 'sala', rot: 'II · The Blind Test', t: 'Paris, 2014. Twenty-one soloists in the dark, in goggles. Six violins: three old, three new.', p: 'Play both players. Tap True or Lie for each line. Then say two true things in one sentence.' },
  { k: 'portas', est: 'f', min: 6, img: 'salao', rot: 'III · Two Doors', t: 'A sentence goes through the wide door. A thing goes through the narrow one.', p: 'Tap a piece, then its door: a sentence, or a thing? Then say the whole sentence.' },
  { k: 'coisa', est: 'f', min: 6, img: 'salao', rot: 'IV · A Thing or a Sentence?', t: 'Before the door, look at what comes after it.', p: 'Say a full sentence with each piece, through the right door. Tap each piece when you have used it.' },
  { k: 'enrico', est: 'o', min: 7, img: 'loja', rot: 'V · The Dealer', t: 'Enrico has sold violins for forty years. He pushes back, and he isn’t being difficult.', p: 'Play his line. Tap how you answer. Then say it out loud and hear what he does.' },
  { k: 'outra', est: 'l', min: 7, img: 'sala', rot: 'VI · The Other Door', t: 'Same idea, other door. One reader, same speed: only the connector changes.', p: 'Say each ALTHOUGH idea the other way, out loud. Match it to its DESPITE or IN SPITE OF version. Then play both and compare.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'estojo', rot: 'VII · Despite Of', t: 'Five sentences are broken.', p: 'Find the broken part in each line. Say the fix. Then tap Check.' },
  { k: 'mesmo', est: 'f', min: 6, extra: 1, img: 'loja', rot: 'VIII · It Happened, or It Might', t: 'EVEN THOUGH is a fact. EVEN IF is imagined.', p: 'Read it. Tap EVEN THOUGH or EVEN IF. Say the whole sentence.' },
  { k: 'debate', est: 'o', min: 7, extra: 1, img: 'salao', rot: 'IX · Concede, Then Disagree', t: 'Four claims from your teacher. Every answer concedes first, then disagrees.', p: 'Tap a card. Answer with the frame. Your teacher pushes back once.' },
  { k: 'fim', est: 'w', min: 6, img: 'sala', rot: 'X · Both Are Right', t: 'It came last. It still costs millions. Both are true.', p: 'Your story from scene I, in one sentence, with one door. It goes to your My notes.' }
];

var TR = {
  'a1.mp3': 'It opens up under the ear in a way I have not felt before. There is something in the lower strings that takes a moment to arrive and then fills the whole room. I would say it asks more of you than the other one did. You have to work for it, and when it answers, it answers.',
  'a2.mp3': 'It does exactly what I ask, immediately, and it carries. I played the same passage on both and this is the one I could hear coming back to me from the far wall. It is not the more interesting instrument to sit with. It is the one I would take on stage tomorrow.',
  'b1.mp3': 'Everyone sends me that study. What does it prove?', 'b2.mp3': 'If nobody can hear it, in what sense is it remarkable?', 'b3.mp3': 'That I accept. The work is real. Hearing it is another question.',
  'b4.mp3': 'And the price? You think the price is nonsense.', 'b5.mp3': 'History, yes. Four hundred years of somebody keeping it alive.', 'b6.mp3': 'Let me ask you something. Would you buy a new one?',
  'b7.mp3': 'A new one? After what I told you about the work?', 'b8.mp3': 'Playing it, not keeping it. Almost nobody says that out loud.',
  'p1a.mp3': 'Although it cost several million, it came last.', 'p1b.mp3': 'Despite its price, it came last.', 'p2a.mp3': 'Although nobody could hear the difference, the work is real.', 'p2b.mp3': 'Despite nobody hearing the difference, the work is real.',
  'p3a.mp3': 'Although they were wearing goggles, some still guessed right.', 'p3b.mp3': 'In spite of the goggles, some still guessed right.', 'p4a.mp3': 'Although the study is small, it has held up.', 'p4b.mp3': 'Despite the fact that the study is small, it has held up.',
  'p5a.mp3': 'Although it is old, it is not better.', 'p5b.mp3': 'Despite being old, it is not better.'
};

var TEMAS = ['a job nobody noticed', 'a kindness to a stranger', 'practicing alone', 'cleaning up after others', 'keeping a promise', 'studying late'];
var ABRE = [
  { q: 'What exactly did you do?', fup: 'How long did it take?', st: ['I …'], ex: 'I fixed a mistake in a report before anyone saw it.' },
  { q: 'Why did you do it, if nobody was watching?', fup: 'Would you do it again?', st: ['Because …'], ex: 'Because I would know. That was enough.' },
  { q: 'Was it worth it? One good thing and one bad thing.', fup: 'Say both in one sentence.', st: ['It was … but …'], ex: 'It took my whole evening, but the report was right.' }
];

/* II · verdadeiro ou mentira sobre o que cada solista disse (FM.verdadeOuMentira) */
var VM_TESTE = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it is a lie, say the truth.', itens: [
  { f: 'Player A says the old violin asks more of you than the other one did.', t: true },
  { f: 'Player A says the lower strings arrive at once.', t: false, c: 'They take a moment to arrive, and then fill the whole room.' },
  { f: 'Player B says the violin does exactly what she asks, immediately.', t: true },
  { f: 'Player B says it is the more interesting instrument to sit with.', t: false, c: 'It is not the more interesting one to sit with, but it is the one she would take on stage. Two true things.' },
  { f: 'Player B would take it on stage tomorrow.', t: true }
] };

/* III · as duas portas (FM.separa) */
var SEPARA_PORTAS = { formato: 'separa', titulo: 'Tap a piece, then its door.', caixas: ['A SENTENCE · although · even though', 'A THING · despite · in spite of'], itens: [
  { t: 'its price', c: 1 }, { t: 'it cost several million', c: 0 }, { t: 'the goggles', c: 1 },
  { t: 'they were wearing goggles', c: 0 }, { t: 'being old', c: 1 }, { t: 'the study is small', c: 0 }
] };

/* IV · uma frase inteira com cada pedaço (FM.usa) */
var USA_COISA = { formato: 'usa', titulo: 'Say a full sentence with each piece, through the right door. Tap it when you have used it.', palavras: ['its price', 'it cost millions', 'the dark room', 'nobody could see', 'being so famous', 'the players were experts'], fim: 'Three things for DESPITE, three sentences for ALTHOUGH. Both doors, both true.' };

/* V · o Enrico: a reação do aluno muda a resposta dele (FM.reacao). bom = a reação que concede e discorda */
var EN = [
  { au: 'b1.mp3', bom: 1, rea: [
    ['Dismiss the test', 'The test is wrong, so it proves nothing.', 'He raises an eyebrow. “Wrong? Twenty-one soloists, and you say wrong?”'],
    ['Concede, then hold your ground', 'Although nobody could tell them apart, the old ones are remarkable.', 'He narrows his eyes. He is about to push back.'],
    ['Give up', 'You are right. They are just old violins.', 'He smiles. “Then why am I still selling them?”']] },
  { au: 'b2.mp3', bom: 0, reply: 'b3.mp3', rea: [
    ['Concede the point, keep the work', 'Despite nobody hearing it, the work is real.', 'He nods slowly.'],
    ['Say it is not remarkable', 'It is not remarkable. You are right.', 'He shrugs. “Then we agree. Why is the room full of people?”'],
    ['Say the test was unfair', 'The test was unfair to old violins.', '“Unfair? A dark room, goggles, soloists. It was fair.”']] },
  { au: 'b4.mp3', bom: 2, reply: 'b5.mp3', rea: [
    ['Say the price is fair', 'The price is fair because they sound better.', 'He frowns. “Better? Your own test says otherwise.”'],
    ['Say the price is nonsense', 'The price is nonsense. Nobody should pay it.', 'He shrugs. “Nobody has to. Many do.”'],
    ['Concede the history, question the sound', 'In spite of the sound, you pay for history.', 'He smiles.']] },
  { au: 'b6.mp3', bom: 1, rea: [
    ['Say you never would', 'I would never buy a violin.', '“Never? Then why are we talking?”'],
    ['Imagine the money', 'Even if I had the money, I would buy a new one.', 'He leans back. He did not expect that.'],
    ['Say the old one', 'I would buy the old one: it is famous.', '“Famous. That is not the same as better.”']] },
  { au: 'b7.mp3', bom: 0, reply: 'b8.mp3', rea: [
    ['Concede, then say what you would play', 'Although the old ones are extraordinary, a new one is what I would play.', 'He laughs.'],
    ['Take it back', 'You are right, I would buy the old one.', 'He smiles. “Everybody does, at first.”'],
    ['Attack him', 'You just want to sell me a violin.', 'He laughs. “That too.”']] }
];

var OUTRA = [
  { a: 'p1a.mp3', b: 'p1b.mp3' }, { a: 'p2a.mp3', b: 'p2b.mp3' }, { a: 'p3a.mp3', b: 'p3b.mp3' }, { a: 'p4a.mp3', b: 'p4b.mp3' }, { a: 'p5a.mp3', b: 'p5b.mp3' }
];
/* VI · ligar cada ideia ao seu outro lado (FM.liga) */
var LIGA_OUTRA = { formato: 'liga', titulo: 'Say each idea the other way. Then match it.', ordemDireita: [3, 0, 4, 1, 2], pares: OUTRA.map(function (x) { return [TR[x.a], TR[x.b]]; }) };

/* VII · achar a parte quebrada (FM.erro) */
var ERRO_CV = [
  { f: '<u>Despite of</u> the rain, we went out.', r: 'Despite' },
  { f: 'Although it was late, <u>but</u> we kept talking.', r: 'delete “but”' },
  { f: '<u>Despite</u> it was expensive, I bought it.', r: 'Although' },
  { f: '<u>In spite</u> the noise, she slept.', r: 'In spite of' },
  { f: '<u>Even though</u> I won the lottery, I would keep working.', r: 'Even if' }
];
var PRESA_CV = '<b>although · even though</b> + a sentence<br><b>despite · in spite of</b> + a thing (or -ing)<br>DESPITE has no OF · IN SPITE has OF<br>One connector per sentence<br><b>even if</b> · imagined';

var MESMO = [['___ it rained all day, the concert went ahead.', 'though'], ['___ it rains tomorrow, the concert will go ahead.', 'if'], ['___ I had a million dollars, I wouldn’t buy an old Italian violin.', 'if'], ['___ she practices every day, she still gets nervous.', 'though'], ['___ nobody notices, I’ll do it properly.', 'if']];

var DEBATE = [
  { k: 'OLD THINGS', q: '“Old things are always better made.”', fup: 'Name one exception.', st: ['Although some old things …, …'], ex: 'Although some old things last forever, my grandmother’s fridge doesn’t.' },
  { k: 'PRICE', q: '“Expensive means good.”', fup: 'When is it true?', st: ['Despite the price, …'], ex: 'Despite the price, my expensive headphones broke in a year.' },
  { k: 'EXPERTS', q: '“Experts can always tell the difference.”', fup: 'What about the violin test?', st: ['Even though they are experts, …'], ex: 'Even though they are experts, most of them chose a new violin.' },
  { k: 'NOBODY WATCHING', q: '“Nobody works hard if nobody is watching.”', fup: 'Is that true for you?', st: ['In spite of that, …'], ex: 'In spite of that, I practice alone every morning.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { tema: '', n: 0, foi: {} }, en: { n: 0 }, ms: {}, db: { sel: -1, foi: {} } };

/* as duas portas: o pedaço passa pela porta certa */
function portas(peca, tipo, passou) {
  return '<div class="cv-portas"><div class="cv-porta larga' + (passou && tipo === 'frase' ? ' on' : '') + '"><div class="cv-vao">' + (passou && tipo === 'frase' ? '<span class="cv-peca">' + peca + '</span>' : '') + '</div><b>A SENTENCE</b><small>although · even though</small></div>'
    + '<div class="cv-porta estreita' + (passou && tipo === 'coisa' ? ' on' : '') + '"><div class="cv-vao">' + (passou && tipo === 'coisa' ? '<span class="cv-peca">' + peca + '</span>' : '') + '</div><b>A THING</b><small>despite · in spite of</small></div></div>';
}
/* os seis estojos do teste às cegas */
function estojos(abertos) {
  var tipos = ['NEW', 'OLD', 'NEW', 'OLD', 'NEW', 'OLD'];
  return '<div class="cv-estojos">' + tipos.map(function (t, i) { return '<div class="cv-estojo' + (abertos ? ' aberto ' + t.toLowerCase() : '') + '"><i></i><b>' + (i + 1) + '</b>' + (abertos ? '<small>' + t + '</small>' : '<small>?</small>') + '</div>'; }).join('') + '</div>';
}
function ouvir(au, rot) { return '<div class="cv-ouve vd"><div class="toca-linha">' + tocar(au) + '<b>' + rot + '</b></div>' + transcricao(au, TR[au]) + '</div>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · ALTHOUGH · DESPITE · IN SPITE OF</span><h1>Three Hundred <b>Years</b></h1>'
    + '<p class="sub">It came last in the blind test. It still costs millions. <b>Although</b> both are true, only one door holds them together, and the door depends on what comes after it.</p>'
    + '<div class="chipsx"><span class="pilula">although + a sentence</span><span class="pilula">despite + a thing</span><span class="pilula">even if · even though</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the cases</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + estojos(0) + portas('', '', 0) + '</div></div>';
};

R.abre = function (c) {
  var e = S.ab;
  var chips = '<div class="cv-temas">' + TEMAS.map(function (t) { return '<button type="button" class="pilula' + (e.tema === t ? ' on' : '') + '" data-a="ab-t" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tema) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Tap what it was.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ABRE, e, 'ab', 'Keep your answer. It comes back at the end, in one sentence.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write the last answer exactly. “although … but”: don’t correct yet.</p>';
};

R.teste = function (c) {
  var r = ((S.fq || {}).ts || {}).r || {}, ouviu = (S.ouviu || {})['a1.mp3'] && (S.ouviu || {})['a2.mp3'];
  var todos = VM_TESTE.itens.every(function (x, i) { return r[i] != null && (r[i] === 't') === !!x.t; });
  var esq = '<div class="lado-l">' + estojos(todos) + ouvir('a1.mp3', 'PLAYER A') + ouvir('a2.mp3', 'PLAYER B') + '</div>';
  var dir = !ouviu ? '<p class="dica-aluno">Play both players. They describe the same old violin.</p>' : FM.ex('ts', VM_TESTE)
    + (todos ? '<div class="pergunta vd"><small>THE CASES OPEN</small><h2>Thirteen of twenty-one chose a new violin. Nobody was wrong. Now say two true things in one sentence, with ALTHOUGH.</h2></div>' : '');
  return cab(c) + '<div class="mesa-c">' + esq + '<div class="lado-l">' + dir + '</div></div>';
};

R.portas = function (c) {
  var em = ((S.fq || {}).pt || {}).em || {}, todos = SEPARA_PORTAS.itens.every(function (x, i) { return em[i] === x.c; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + portas('', '', 0) + '</div><div class="lado-l">' + FM.ex('pt', SEPARA_PORTAS)
    + (todos ? '<p class="aprova">Three pieces for the narrow door, three for the wide one. Say each one inside a whole sentence.</p>' : '<p class="dica-aluno">Look at the piece: is there a subject and a verb?</p>') + '</div></div>';
};

R.coisa = function (c) {
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + portas('', '', 0) + '</div><div class="lado-l">' + FM.ex('cs', USA_COISA) + '<p class="dica-aluno">Is there a subject and a verb? Then it’s a sentence. The -ING form is a thing.</p></div></div>';
};

R.enrico = function (c) {
  var n = S.en.n, fim = n >= EN.length;
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>THE DEALER</small><h2>He gave you the work and kept the price. You gave him the history and kept the sound. Both of you were right.</h2></div></div>';
  var x = EN[n], fq = (S.fq || {})['en' + n], r = fq && fq.r != null ? fq.r : -1, bom = r === x.bom;
  var dir = !(S.ouviu || {})[x.au] ? '<p class="dica-aluno">Play his line.</p>'
    : FM.ex('en' + n, { formato: 'reacao', titulo: 'How do you answer Enrico? Tap one.', fala: 'He is waiting. Say your answer first, then tap.', quem: 'Enrico', reacoes: x.rea })
      + (r >= 0 ? (bom && x.reply ? ouvir(x.reply, 'ENRICO ANSWERS') : (bom ? '' : '<p class="recusa">Enrico frowns. Concede first, then disagree. Try the other one, out loud.</p>')) + '<div><button type="button" class="btn" data-a="en-prox">' + (n < EN.length - 1 ? 'Next' : 'Finish') + '</button></div>' : '');
  return cab(c) + trilha(EN, n) + '<div class="mesa-c"><div class="lado-l"><div class="cv-loja vd"><small>ENRICO · VIOLIN DEALER · 40 YEARS</small>' + ouvir(x.au, 'ENRICO') + '</div></div><div class="lado-l">' + dir + '</div></div>';
};

R.outra = function (c) {
  var e = ((S.fq || {}).ou || {}).par || {}, todos = OUTRA.every(function (x, i) { return e[i] === i; });
  var pares = todos ? OUTRA.map(function (x, i) { return '<div class="cv-ouve vd"><small>PAIR ' + (i + 1) + '</small><div class="toca-linha">' + tocar(x.a) + '<b>A · ALTHOUGH</b></div><div class="toca-linha">' + tocar(x.b) + '<b>B · THE OTHER DOOR</b></div></div>'; }).join('')
    + '<p class="aprova">Pair 4 is longer: THE FACT THAT costs almost a second. Which version sounds heavier?</p>' : '<p class="dica-aluno">Say the other door first, then match. The recordings open after the last pair.</p>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + FM.ex('ou', LIGA_OUTRA) + '</div><div class="lado-l">' + pares + '</div></div>';
};

R.erros = function (c) {
  return cab(c) + FM.ex('er', { formato: 'erro', titulo: 'Five sentences are broken. Find the broken part. Say the fix.', itens: ERRO_CV, regra: PRESA_CV });
};

R.mesmo = function (c) {
  var e = S.ms, todos = MESMO.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="cv-lista">' + MESMO.map(function (x, i) {
    var foi = e[i], ok = foi === x[1];
    return '<div class="cv-tf vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + (ok ? x[0].replace('___', '<b>' + (x[1] === 'if' ? 'Even if' : 'Even though') + '</b>') : x[0]) + '</span><div class="cv-fs">' + [['though', 'EVEN THOUGH'], ['if', 'EVEN IF']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ms" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Facts took THOUGH. Guesses took IF. Now flip each one.</p>' : '<p class="dica-aluno" style="text-align:center">Did it really happen, or are we imagining it?</p>');
};

R.debate = function (c) { return cartasPessoais(c, DEBATE, S.db, 'db', ['Although …, I still think …', 'Despite that, …', 'Even if …, …']); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Even though nobody saw it, I … , and it was worth it.\nDespite …, …\nEven if …, I would …', 'Your story',
    ['Although', 'Even though', 'Despite', 'In spite of', 'Even if'], ['YOUR STORY, ONE DOOR', 'Your story from scene I in one sentence, the same idea through the other door, and something you’d do even if nobody paid you.'])
    + '<div class="lado-fim">' + portas('nobody saw it', 'frase', 1)
    + '<div class="grande vd"><span><u>although / even though</u> + a sentence</span><span><u>despite / in spite of</u> + a thing (or -ing)</span><span><u>even if</u> · imagined</span><span>not <s>despite of</s>, not <s>although … but</s></span></div>'
    + mostra('fim', 'Even though nobody saw it, I fixed the report, and it was worth it.<br>Despite the long evening, the report was right.<br>Even if nobody paid me, I would keep practicing.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-t'] = function (b, n, v) { S.ab.tema = v; };
TOQUES.ms = function (b, n, v) { S.ms[n] = v; };
TOQUES['en-prox'] = function () { S.en.n++; };
