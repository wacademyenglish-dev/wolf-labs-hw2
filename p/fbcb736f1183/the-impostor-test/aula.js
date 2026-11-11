/* ============================================================
   THE IMPOSTOR TEST · THE VOICE LINE · LIVE CLASS  06/10/2026
   Main series B1 · question tags: o auxiliar + a pessoa + o sinal
   trocado · a tag que DESCE confirma (I'm telling), a que SOBE
   pergunta (I'm asking). Erros: "isn't it?" para tudo, "don't you?"
   depois de BE, "amn't I", "Nobody called, didn't they?", "Let's
   start, isn't it?".
   O MUNDO (da aula velha): o sentimento de impostor no trabalho — as
   tags que penduramos nas nossas conquistas; o crachá de conferência;
   uma revisão de 2019 (62 estudos, 14 mil pessoas, de 9 a 82 em 100,
   porque cada estudo usava uma régua); o evento de networking. Três
   gravações mantidas (est1–est3), conferidas no faster-whisper em
   06/10: batem.
   A CARA: a LINHA DA VOZ — cada frase com tag ganha uma linha de
   entonação em neon (SVG) que desce ou sobe no fim; o crachá preso no
   cordão. No fim, a tag sai e a linha fica reta.
   Fila: FILA-LIVE-386.md · 104.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'cracha' },
  { k: 'cracha', est: 'o', min: 7, img: 'cracha', rot: 'I · Write Your Badge', t: 'An empty conference badge. Two ways to say the same true thing.', p: 'Pick a side for each line. Then finish the last line out loud, and confirm three things about your teacher with a tag.' },
  { k: 'gx', est: 'f', min: 4, img: 'cracha', rot: 'II · The Tag Flip', t: 'A statement grows a tag.', p: 'Watch the words. Notice what the tag copies and what it flips. Then add tags to four sentences.' },
  { k: 'maquina', est: 'f', min: 6, img: 'corredor', rot: 'III · The Tag Machine', t: 'Three things travel into the tag: the auxiliary, the person, and the sign.', p: 'Read the sentence. Choose the tag. Say the whole thing.' },
  { k: 'curva', est: 'o', min: 7, img: 'corredor', rot: 'IV · Up or Down?', t: 'Same words, two meanings. Only the last note changes.', p: 'Read the situation. Choose the line. Then say it with that melody, and then the other way.' },
  { k: 'erros', est: 'f', min: 6, img: 'corredor', rot: 'V · Not Isn’t It for Everything', t: '“Isn’t it?” only fits sentences with IS and IT.', p: 'Every sentence has a wrong tag. Choose the right one, and say the whole sentence.' },
  { k: 'situacoes', est: 'o', min: 7, img: 'cadeiras', rot: 'VI · Four Situations', t: 'Four work situations. Neither answer is wrong.', p: 'Pick the side closer to you. Say the inner voice with a falling tag. Then answer the question.' },
  { k: 'elogio', est: 'o', min: 7, img: 'cadeiras', rot: 'VII · Somebody Said You Were Good', t: 'Your teacher pays you a compliment. Answer without thinking.', p: 'Answer out loud. Then your teacher taps the shape your answer had.' },
  { k: 'estudo', est: 'l', min: 7, extra: 1, img: 'arquivo', rot: 'VIII · Nine to Eighty-Two', t: 'Sixty-two studies about feeling like a fraud at work, and none of them agreed.', p: 'Play all three parts. Then take a side.' },
  { k: 'evento', est: 'o', min: 7, extra: 1, img: 'corredor', rot: 'IX · The Networking Event', t: 'Three people at a conference. You read their badges, but you’re not sure about everything.', p: 'Confirm each fact with a tag. Sure? Falling. Not sure? Rising. Your teacher answers as that person.' },
  { k: 'semtag', est: 'o', min: 7, extra: 1, img: 'saida', rot: 'X · Take the Tag Off', t: 'Same idea, one thing missing: the doubt at the end.', p: 'Say it with the tag. Then remove the tag and say it flat.' },
  { k: 'fim', est: 'w', min: 6, img: 'cracha', rot: 'XI · Your Badge Again', t: 'Your badge from scene I comes back.', p: 'Write your badge with no tag at the end, and three sentences with tags about people you know. It goes to your My notes.' }
];

var TR = {
  'est1.mp3': 'In 2019, a team went looking for a number. They read sixty-two studies. Fourteen thousand people. One question: how many of us feel like a fraud at work?',
  'est2.mp3': 'The studies did not agree. The lowest one said nine people in a hundred. The highest said eighty-two. Nine, and eighty-two. Same question, same years.',
  'est3.mp3': 'The team’s answer was not about people. It was about the tests. Every study used a different test, and every test drew the line in a different place. The number moved because the ruler moved.'
};

var CRACHA = [
  { q: 'WHAT YOU DO', a: 'I help out with the design.', b: 'I’m a designer.' },
  { q: 'HOW LONG', a: 'I’ve done it for a while.', b: 'I’ve done it for years.' },
  { q: 'HOW YOU GOT IN', a: 'They gave me a chance.', b: 'I applied and they took me.' },
  { q: 'IN AN EMAIL', a: 'I had a small part in it.', b: 'I ran it.' }
];

var MAQ = [
  { f: 'You’re ready,', aux: 'are · you', ops: ['aren’t you?', 'isn’t it?', 'don’t you?'] },
  { f: 'You did the work,', aux: 'did · you', ops: ['didn’t you?', 'don’t you?', 'weren’t you?'] },
  { f: 'It wasn’t luck,', aux: 'was · it', ops: ['was it?', 'wasn’t it?', 'isn’t it?'] },
  { f: 'I can do this,', aux: 'can · I', ops: ['can’t I?', 'don’t I?', 'can I?'] },
  { f: 'They chose you,', aux: 'did · they', ops: ['didn’t they?', 'don’t they?', 'chose they?'] },
  { f: 'It hasn’t been easy,', aux: 'has · it', ops: ['has it?', 'hasn’t it?', 'is it?'] }
];

var CURVA = [
  { sit: 'You KNOW she finished the report. You want her to agree.', f: 'You finished the report, didn’t you?', k: 'desce' },
  { sit: 'You’re NOT SURE he’s from Chicago. You really want to know.', f: 'You’re from Chicago, aren’t you?', k: 'sobe' },
  { sit: 'It’s obviously freezing outside. Small talk.', f: 'It’s cold today, isn’t it?', k: 'desce' },
  { sit: 'You think the meeting is at three, but you might be wrong.', f: 'The meeting’s at three, isn’t it?', k: 'sobe' },
  { sit: 'You both saw the great presentation. You’re sure it was great.', f: 'That was amazing, wasn’t it?', k: 'desce' },
  { sit: 'You’re not sure your colleague has met the new manager.', f: 'You haven’t met Sam yet, have you?', k: 'sobe' }
];

var ERROS = [
  { f: 'You like coffee, <s>isn’t it</s>?', ops: ['don’t you?', 'aren’t you?', 'isn’t you?'], w: 'Present simple with YOU: don’t you?' },
  { f: 'She’s your boss, <s>doesn’t she</s>?', ops: ['isn’t she?', 'hasn’t she?', 'doesn’t it?'], w: 'BE: isn’t she?' },
  { f: 'I’m late, <s>amn’t I</s>?', ops: ['aren’t I?', 'am not I?', 'isn’t I?'], w: 'The special one: aren’t I?' },
  { f: 'Nobody called, <s>didn’t they</s>?', ops: ['did they?', 'didn’t he?', 'did nobody?'], w: 'NOBODY is already negative: did they?' },
  { f: 'Let’s start, <s>isn’t it</s>?', ops: ['shall we?', 'don’t we?', 'let we?'], w: 'LET’S: shall we?' },
  { f: 'There’s a problem, <s>isn’t it</s>?', ops: ['isn’t there?', 'is there?', 'doesn’t it?'], w: 'THERE IS: isn’t there?' }
];

var SITU = [
  { sit: 'You finish something good. There’s one small mistake, and nobody has noticed.', a: 'I’d fix it before anybody sees it.', b: 'I’d leave it. It’s finished.', voz: 'It’s not really ready, is it?', q: 'How long would that mistake stay in your head?' },
  { sit: 'In a meeting you know the answer, but you’re not 100% sure.', a: 'I wait to see if somebody else says it.', b: 'I say it, and say I’m not certain.', voz: 'I’m probably wrong, aren’t I?', q: 'What would make you say it first?' },
  { sit: 'A job you want asks for eight things. You have six.', a: 'I apply anyway.', b: 'I wait until I have all eight.', voz: 'I’m not really qualified, am I?', q: 'What do you do with the two you don’t have?' },
  { sit: 'A team finishes something well. Your part was the biggest.', a: 'I say we did it together.', b: 'I say which part was mine.', voz: 'It was a team thing, wasn’t it?', q: 'What happened the last time you named your own part?' }
];

var ELOGIOS = ['That was the best presentation of the day.', 'I don’t know how you finished that on time.', 'You’re the only person here who understands this.', 'You’re really good at this.'];
var FORMAS = [['take', 'TAKE IT', 'you kept it'], ['back', 'GIVE IT BACK', 'you handed it to somebody else'], ['small', 'MAKE IT SMALL', 'you made it smaller'], ['away', 'GIVE IT AWAY', 'you gave it to luck or the team']];

var CLIPES = [['est1.mp3', 'PART 1 · THE QUESTION'], ['est2.mp3', 'PART 2 · NINE AND EIGHTY-TWO'], ['est3.mp3', 'PART 3 · THE RULER']];

var PESSOAS = [
  { nome: 'MAYA CHEN', cargo: 'PRODUCT DESIGNER', fatos: [['You work at the design studio downtown,', 'don’t you?', 'desce', 'It’s on her badge.'], ['You gave the talk this morning,', 'didn’t you?', 'sobe', 'You think so, but you missed the start.'], ['You haven’t been to this conference before,', 'have you?', 'sobe', 'You have no idea.']] },
  { nome: 'OMAR HASSAN', cargo: 'DATA ANALYST', fatos: [['You’re a data analyst,', 'aren’t you?', 'desce', 'It’s on his badge.'], ['You’re from Toronto,', 'aren’t you?', 'sobe', 'Somebody said so, maybe.'], ['You can’t stay for dinner,', 'can you?', 'sobe', 'He looked at his watch twice.']] },
  { nome: 'LUCIA MORENO', cargo: 'TEAM LEAD', fatos: [['You lead the new team,', 'don’t you?', 'desce', 'It’s on her badge.'], ['It’s been a long day,', 'hasn’t it?', 'desce', 'Obviously. Small talk.'], ['You’re hiring right now,', 'aren’t you?', 'sobe', 'You heard a rumor.']] }
];

var SEMTAG = [['I got lucky with it, didn’t I?', 'I put the hours in.'], ['I’m not really qualified for it, am I?', 'I have six of the eight.'], ['It was a team thing, wasn’t it?', 'That part was mine.'], ['I should be able to do this myself, shouldn’t I?', 'I’m going to ask.'], ['They took a chance on me, didn’t they?', 'I earned it.']];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  cr: {}, mq: { n: 0, esc: -1 }, cv: { n: 0, esc: '' }, er: { n: 0, esc: -1 }, st: { n: 0, lado: '' }, el: { n: 0, f: {} }, ev: { p: 0, f: 0, esc: '' }, sm: { n: 0, sem: 0 } };

/* a linha da voz: 'desce', 'sobe' ou 'reta' */
function linhaVoz(k, mini) {
  var fim = k === 'sobe' ? 'L250 30 L290 8' : k === 'desce' ? 'L250 50 L290 78' : 'L290 46';
  return '<svg class="voz' + (mini ? ' mini' : '') + ' ' + (k || '') + '" viewBox="0 0 300 90" aria-hidden="true"><path class="base-v" d="M10 46 H290"/><path class="linha-v" d="M10 46 C40 30 60 58 90 44 C120 30 150 56 180 46 C200 40 220 48 236 46 ' + fim + '"/>' + (k && k !== 'reta' ? '<circle class="ponta-v" cx="290" cy="' + (k === 'sobe' ? 8 : 78) + '" r="5"/>' : '') + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE CONFERENCE</span><h1>The Impostor <b>Test</b></h1>'
    + '<p class="sub">You did the work, <b>didn’t you?</b> Said down, it’s a fact. Said up, it’s a doubt.</p>'
    + '<div class="chipsx"><span class="pilula">auxiliary + person + flipped sign</span><span class="pilula">↘ telling · ↗ asking</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Write your badge</button>' + faixaLive() + '</div>'
    + '<div class="capa-r"><div class="cracha-c"><span class="cordao"></span><div class="cracha-in"><small>HELLO, I’M</small><b>THE ONE WHO DID THE WORK</b></div></div><div class="frase-v"><p>You did the work, <u>didn’t you?</u></p>' + linhaVoz('desce') + '<p>You did the work, <u>didn’t you?</u></p>' + linhaVoz('sobe') + '</div></div></div>';
};

R.cracha = function (c) {
  var e = S.cr, tudo = CRACHA.every(function (x, i) { return e[i]; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="cracha-c grande"><span class="cordao"></span><div class="cracha-in"><small>HELLO, I’M</small>' + CRACHA.map(function (x, i) { return '<span class="linha-c">' + (e[i] ? x[e[i]] : '…') + '</span>'; }).join('') + '</div></div></div>'
    + '<div class="lado-l">' + CRACHA.map(function (x, i) { return '<div class="par-c"><small>' + x.q + '</small><div class="dois-c">' + ['a', 'b'].map(function (k) { return '<button type="button" class="versao' + (e[i] === k ? ' on' : '') + '" data-a="cr" data-n="' + i + '" data-v="' + k + '">' + x[k] + '</button>'; }).join('') + '</div></div>'; }).join('')
    + (tudo ? fala('cr', ['I’m good at this because …', 'You’re from …, aren’t you?', 'You like …, don’t you?'], ['aren’t you?', 'don’t you?', 'didn’t you?']) + '<p class="so-prof dica-aluno">Write down the last sentence and the three tags, word for word. They come back.</p>' : '') + '</div></div>';
};

R.maquina = function (c) {
  var e = S.mq, n = e.n, fim = n >= MAQ.length;
  if (fim) return cab(c) + trilha(MAQ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>The tag was built from the sentence every time: the auxiliary, the person, the sign flipped.</h2></div></div>';
  var x = MAQ[n], ok = e.esc === 0;
  return cab(c) + trilha(MAQ, n) + '<div class="foco"><div class="maquina-t vd"><span class="frase-m">' + x.f + '</span><span class="engrenagem">' + (ok ? '<b>' + x.aux + '</b> · sign flipped' : '⚙ auxiliary · person · sign') + '</span><span class="tag-m">' + (ok ? x.ops[0] : '___?') + '</span></div><div class="tres-b centro">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 3).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="mq" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="mq-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Find the auxiliary and the person. Then flip the sign.</p>' : '') + '</div>';
};

R.curva = function (c) {
  var e = S.cv, n = e.n, fim = n >= CURVA.length;
  if (fim) return cab(c) + trilha(CURVA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>The words stayed. The melody decided. Now one of your own, both ways.</h2></div></div>';
  var x = CURVA[n], ok = e.esc === x.k;
  return cab(c) + trilha(CURVA, n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>THE SITUATION</small><b>' + x.sit + '</b></div><div class="balao vd"><p>' + x.f + '</p></div>' + (ok ? linhaVoz(x.k) : linhaVoz('')) + '</div>'
    + '<div class="lado-l"><div class="versoes">' + [['↘ FALLING · I’M TELLING', 'desce'], ['↗ RISING · I’M ASKING', 'sobe']].map(function (o) { return '<button type="button" class="versao grande-v' + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="cv" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">Say it with that melody. Then say it the other way: what changes?</p><div><button type="button" class="btn" data-a="cv-prox">Next</button></div>' : e.esc ? '<p class="recusa">Are you sure, or are you asking?</p>' : '') + '</div></div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>Six sentences, six different tags. None of them was “isn’t it”.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div><div class="tres-b centro">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 2).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="er" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Find the auxiliary and the person. Then flip the sign.</p>' : '') + '</div>';
};

R.situacoes = function (c) {
  var e = S.st, n = Math.min(e.n, SITU.length - 1), x = SITU[n];
  return cab(c) + trilha(SITU, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>SITUATION ' + (n + 1) + ' OF 4</small><b>' + x.sit + '</b></div><div class="versoes">' + ['a', 'b'].map(function (k) { return '<button type="button" class="versao' + (e.lado === k ? ' on' : '') + '" data-a="st" data-v="' + k + '">' + x[k] + '</button>'; }).join('') + '</div></div>'
    + '<div class="lado-l">' + (e.lado ? '<div class="balao vd"><small>THE INNER VOICE · SAY IT FALLING</small><p>“' + x.voz + '”</p></div>' + linhaVoz('desce') + '<div class="pergunta vd ja"><h2>' + x.q + '</h2></div>' + (e.n < SITU.length - 1 ? '<div><button type="button" class="btn" data-a="st-prox">Next situation</button></div>' : '<p class="aprova">Four inner voices, and each one had a tag at the end.</p>') : '<p class="dica-aluno">Neither answer is wrong. Pick the side closer to you.</p>') + '</div></div>';
};

R.elogio = function (c) {
  var e = S.el, n = Math.min(e.n, ELOGIOS.length - 1), f = e.f[n];
  var feitos = ELOGIOS.slice(0, e.n + (f ? 1 : 0)).map(function (x, i) { var k = e.f[i]; return k ? '<span><b>' + FORMAS.filter(function (o) { return o[0] === k; })[0][1] + '</b>' + x + '</span>' : ''; }).join('');
  return cab(c) + trilha(ELOGIOS, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="balao vd elogio-b"><small>YOUR TEACHER SAYS</small><p>“' + ELOGIOS[n] + '”</p></div><div class="lista-el">' + feitos + '</div></div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">TAP THE SHAPE OF THEIR ANSWER</h5><div class="formas-el">' + FORMAS.map(function (o) { return '<button type="button" class="forma-el' + (f === o[0] ? ' on' : '') + '" data-a="el" data-v="' + o[0] + '"><b>' + o[1] + '</b><small>' + o[2] + '</small></button>'; }).join('') + '</div>'
    + (f ? (e.n < ELOGIOS.length - 1 ? '<div><button type="button" class="btn" data-a="el-prox">Next compliment</button></div>' : '<p class="aprova">Four answers, and none was wrong English. Now a TAKE IT answer for every one: “Thanks, I’m glad it worked.”</p>') : '<p class="dica-aluno">Answer out loud, without thinking.</p>') + '</div></div>';
};

R.estudo = function (c) {
  var todos = CLIPES.every(function (x) { return (S.ouviu || {})[x[0]]; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + CLIPES.map(function (x) { return '<div class="ouve-c vd"><div class="toca-linha">' + tocar(x[0]) + '<b>' + x[1] + '</b></div>' + transcricao(x[0], TR[x[0]]) + '</div>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (todos ? '<div class="regua vd"><span>9</span><i></i><span>82</span><small>SAME QUESTION · SAME YEARS · DIFFERENT RULERS</small></div><div class="pergunta vd ja"><h2>If a hundred tests give a hundred different numbers, what is any one number worth?</h2></div>' + fala('es', ['It’s worth something because …', 'It’s worth nothing because …', 'Nine and eighty-two can both be right if …'], ['ruler', 'test', 'line', 'number']) + '<p class="so-prof dica-aluno">Push for a side. Strong students: summarize it with a tag. “It was about the tests, wasn’t it?”</p>' : '<div class="pergunta vd ja"><h2>How many of us feel like a fraud at work? Guess a number first.</h2></div><p class="dica-aluno">Play all three parts.</p>') + '</div></div>';
};

R.evento = function (c) {
  var e = S.ev, p = PESSOAS[Math.min(e.p, 2)], fim = e.p >= PESSOAS.length;
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>NINE FACTS, THREE PEOPLE</small><h2>Your voice told them how sure you were. Now add a follow-up question for each person.</h2></div></div>';
  var x = p.fatos[e.f], ok = e.esc === x[2];
  return cab(c) + '<div class="tres-crachas">' + PESSOAS.map(function (q, i) { return '<div class="cracha-p' + (i === e.p ? ' on' : i < e.p ? ' feito' : '') + '"><span class="cordao"></span><b>' + q.nome + '</b><small>' + q.cargo + '</small></div>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l"><div class="balao vd"><small>' + p.nome + ' · FACT ' + (e.f + 1) + ' OF 3</small><p>' + x[0] + ' <u>' + x[1] + '</u></p></div><p class="pista">Hint: ' + x[3] + '</p>' + (ok ? linhaVoz(x[2]) : '') + '</div>'
    + '<div class="lado-l"><div class="versoes">' + [['↘ SURE', 'desce'], ['↗ NOT SURE', 'sobe']].map(function (o) { return '<button type="button" class="versao grande-v' + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ev" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="so-prof dica-aluno">' + (x[2] === 'desce' ? 'Falling: just agree. “Yes, that’s right.”' : 'Rising: give real, new information.') + '</p><div><button type="button" class="btn" data-a="ev-prox">Next fact</button></div>' : e.esc ? '<p class="recusa">Look at the hint: is it on the badge, or just a guess?</p>' : '') + '</div></div>';
};

R.semtag = function (c) {
  var e = S.sm, n = e.n, fim = n >= SEMTAG.length;
  if (fim) return cab(c) + trilha(SEMTAG, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE SENTENCES, FLAT</small><h2>Nobody corrected you. You took the tag off yourself. Now your badge sentence from scene I, flat.</h2></div>' + linhaVoz('reta') + '</div>';
  var x = SEMTAG[n];
  return cab(c) + trilha(SEMTAG, n) + '<div class="mesa-c"><div class="lado-l"><div class="balao vd"><small>WITH THE TAG</small><p>' + x[0] + '</p></div>' + linhaVoz('sobe') + '</div>'
    + '<div class="lado-l">' + (e.sem ? '<div class="balao vd ok-b"><small>TAG OFF · SAY IT FLAT</small><p>' + x[1] + '</p></div>' + linhaVoz('reta') + '<div><button type="button" class="btn" data-a="sm-prox">Next</button></div>' : '<div style="text-align:left"><button type="button" class="btn cheio" data-a="sm">Take the tag off</button></div>') + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’m good at this because …\nYou’re …, aren’t you?\nYou didn’t …, did you?', 'Your badge',
    ['aren’t you?', 'don’t you?', 'didn’t you?', 'isn’t it?', 'haven’t you?'], ['YOUR BADGE, WITH NO TAG AT THE END', 'Then three tags about people you know. Choose the melody on purpose.'])
    + '<div class="lado-fim"><div class="cracha-c"><span class="cordao"></span><div class="cracha-in"><small>HELLO, I’M</small>' + CRACHA.map(function (x, i) { return S.cr[i] ? '<span class="linha-c">' + x[S.cr[i]] + '</span>' : ''; }).join('') + '</div></div>' + linhaVoz('reta', 1)
    + '<div class="grande vd"><span><u>auxiliary + person + flipped sign</u></span><span>↘ <u>falling</u> tells · ↗ <u>rising</u> asks</span><span>not <s>isn’t it?</s> for everything</span></div>'
    + mostra('fim', 'I’m good at this because I put the hours in.<br>You’re from Recife, aren’t you? ↗<br>You didn’t like the movie, did you? ↘', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.cr = function (b, n, v) { S.cr[n] = v; };
TOQUES.mq = function (b, n) { S.mq.esc = n; };
TOQUES['mq-prox'] = function () { S.mq = { n: S.mq.n + 1, esc: -1 }; };
TOQUES.cv = function (b, n, v) { S.cv.esc = v; };
TOQUES['cv-prox'] = function () { S.cv = { n: S.cv.n + 1, esc: '' }; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };
TOQUES.st = function (b, n, v) { S.st.lado = v; };
TOQUES['st-prox'] = function () { S.st = { n: S.st.n + 1, lado: '' }; };
TOQUES.el = function (b, n, v) { S.el.f[Math.min(S.el.n, ELOGIOS.length - 1)] = v; };
TOQUES['el-prox'] = function () { S.el.n++; };
TOQUES.ev = function (b, n, v) { S.ev.esc = v; };
TOQUES['ev-prox'] = function () { var e = S.ev; e.esc = ''; e.f++; if (e.f > 2) { e.f = 0; e.p++; } };
TOQUES.sm = function () { S.sm.sem = 1; };
TOQUES['sm-prox'] = function () { S.sm = { n: S.sm.n + 1, sem: 0 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G7 · uma cena curta nova (k: gx) antes de maquina.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'vira', titulo: 'A statement, then the same one with a tag. Watch the words.',
  frases: [
    { de: ['She', '*is', 'a lawyer', '.'], para: ['She', '*is', 'a lawyer,', '+isn’t she', '?'], d: 'The helper flips its sign and comes back: is, isn’t she.' },
    { de: ['You', '*like', 'the job', '.'], para: ['You', '*like', 'the job,', '+don’t you', '?'], d: 'No be in the sentence: the helper is do.' },
    { de: ['They', '*didn’t', 'call', '.'], para: ['They', '*didn’t', 'call,', '+did they', '?'], d: 'A no sentence gets a yes tag.' }
  ],
  notaBotao: 'What changes?',
  nota: 'The tag copies the <b>helper</b> and the <b>person</b>, and it flips the <b>sign</b>: yes + no, or no + yes. Voice down = I am telling you. Voice up = I am asking.',
  pergunta: 'Your turn. Add the tag out loud, then check.',
  treino: [
    { de: 'He works here.', r: 'He works here, <b>doesn’t he</b>?' },
    { de: 'We aren’t late.', r: 'We aren’t late, <b>are we</b>?' },
    { de: 'You can swim.', r: 'You can swim, <b>can’t you</b>?' },
    { de: 'It was a good talk.', r: 'It was a good talk, <b>wasn’t it</b>?' }
  ],
  uso: { p: 'Your turn. Three things you know about your teacher. Say each one with a tag.', molde: ['You live in …, don’t you?', 'You aren’t …, are you?'], ex: 'You work in the morning, don’t you? You aren’t tired, are you?' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_vira', GX_EXPLICA); };
