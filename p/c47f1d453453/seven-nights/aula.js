/* ============================================================
   SEVEN NIGHTS · THE SLEEP CURVE · LIVE CLASS  06/10/2026
   Main series A2 · ZERO CONDITIONAL: if + presente, presente (hábito e
   fato, não previsão) · sem will · o -s de he/she/it · if × when (when =
   sempre acontece; if = talvez). Erros universais: "If I drink coffee, I
   will wake up" para hábito; "if he drink"; when para o que nem sempre
   acontece.
   O MUNDO (da aula velha): um laboratório do sono; vozes reais que
   descobriram regras do próprio corpo, e o aluno descobre as dele. Seis
   áudios, conferidos com faster-whisper em 06/10: batem.
   A CARA: o HIPNOGRAMA (a curva do sono em SVG, roxo-noite) que muda ao
   vivo com cada regra que o aluno diz sobre si; o dominó da noite ruim.
   As duas fotos claras demais (laboratório, xícara) foram escurecidas com
   vinheta. Fila: FILA-LIVE-386.md · 062.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'quarto' },
  { k: 'numeros', est: 'o', min: 7, img: 'xicara', rot: 'I · Last Night in Numbers', t: 'Before the study: your last night, in three numbers.', p: 'Answer out loud. Your teacher taps your numbers. Then pick a card.' },
  { k: 'vozes', est: 'l', min: 7, img: 'lab', rot: 'II · Three Sleepers', t: 'Three people from the sleep lab. Each one found a rule about their own body.', p: 'Play the voice. Then say the rule you heard.' },
  { k: 'regra', est: 'f', min: 6, img: 'lab', rot: 'III · The Rule of the Body', t: 'Two halves, both in the present.', p: 'Say the whole sentence. Then tap the second half you used.' },
  { k: 'curva', est: 'o', min: 7, img: 'quarto', rot: 'IV · Your Curve', t: 'Six evening habits. What do they do to YOUR sleep?', p: 'Say your rule with if. Your teacher taps what it does, and the curve changes.' },
  { k: 'domino', est: 'o', min: 7, img: 'telefone', rot: 'V · The Domino', t: 'A bad night is a chain. The end of every rule is the start of the next one.', p: 'Say each rule. The domino falls. Then break the chain.' },
  { k: 'ifwhen', est: 'f', min: 6, extra: 1, img: 'telefone', rot: 'VI · If or When?', t: 'WHEN = it always happens. IF = it may happen, or not.', p: 'Say the sentence with the right word. Then tap it.' },
  { k: 'irmaos', est: 'l', min: 7, extra: 1, img: 'telefone', rot: 'VII · Same House, Two Bodies', t: 'A sister and a brother, and two different bodies.', p: 'Play each one. Then tell the rule about her and about him. Don’t forget the -s.' },
  { k: 'lab', est: 'l', min: 7, extra: 1, img: 'lab', rot: 'VIII · The Study', t: 'A real sleep study. Listen for the rule.', p: 'Play it. Then answer, and argue.' },
  { k: 'coach', est: 'o', min: 7, extra: 1, img: 'quarto', rot: 'IX · The Sleep Coach', t: 'You are the sleep coach. Your teacher is a patient who can’t sleep.', p: 'The patient tells a problem. Give a rule with if. The patient argues back.' },
  { k: 'fim', est: 'w', min: 6, img: 'xicara', rot: 'X · Your Seven Rules', t: 'The study is over. Your numbers are back.', p: 'Write your rules for a good night: if + present, present. It goes to your My notes.' }
];

var TR = {
  'voz1.mp3': 'I work nights, so I sleep in the morning. If the room is bright, I wake up after three hours. If I close the curtains, I get five. Five is not enough, but it is what I have.',
  'voz2.mp3': 'I drink my last coffee at six. If I drink one later, I lie awake until two. My wife drinks coffee at ten and sleeps like a child. So it is not the coffee. It is me.',
  'voz3.mp3': 'I sleep seven hours. If I sleep eight, I feel worse in the morning, not better. Everybody tells me that is impossible. It happens every time.',
  'lab.mp3': 'In Pittsburgh, a team took 164 people. They put a cold virus in everybody’s nose. The same virus, the same amount, every single person. Then they waited five days. If you sleep less than six hours, you catch the cold four times more often. Nobody chose who got sick. Sleep chose.',
  'ela.mp3': 'My sister takes her phone to bed. If she looks at it, she stays awake for an hour. If she leaves it in the kitchen, she is asleep by eleven. She knows this. She takes it anyway.',
  'ele.mp3': 'My brother runs at nine at night. If he runs late, he sleeps like a stone. If I run at nine, I am awake until three. Same house, two different bodies.'
};

var MOSTRADORES = [
  { k: 'horas', q: 'How many hours did you sleep last night?', ops: [4, 5, 6, 7, 8, 9], un: 'HOURS' },
  { k: 'cafe', q: 'How many cups of coffee or tea did you drink yesterday?', ops: [0, 1, 2, 3, 4], un: 'CUPS' },
  { k: 'tela', q: 'How many minutes were you on a screen in bed?', ops: [0, 15, 30, 60, 90], un: 'MIN ON A SCREEN' }
];
var ABRE = [
  { k: 'GOOD OR BAD', q: 'Was it a good night or a bad night? Why?', fup: 'Is it always like that?', st: ['It was a … night, because …'], ex: 'A bad night. My neighbor’s dog barked at two.' },
  { k: 'CAN’T SLEEP', q: 'What do you do when you can’t sleep?', fup: 'Does it help?', st: ['When I can’t sleep, I …'], ex: 'I get up and drink some water. It doesn’t help!' },
  { k: 'MORNING OR NIGHT', q: 'Are you a morning person or a night person?', fup: 'What time do you feel best?', st: ['I’m a … person.'], ex: 'A night person. I feel best at ten at night.' }
];

var VOZES = [
  { au: 'voz1.mp3', quem: 'SLEEPER 1 · THE NIGHT WORKER', q: 'What happens if the room is bright?', regra: 'If the room is bright, he wakes up after three hours.' },
  { au: 'voz2.mp3', quem: 'SLEEPER 2 · THE COFFEE MAN', q: 'What happens if he drinks coffee after six?', regra: 'If he drinks coffee after six, he lies awake until two.' },
  { au: 'voz3.mp3', quem: 'SLEEPER 3 · THE SEVEN-HOUR MAN', q: 'What happens if he sleeps eight hours?', regra: 'If he sleeps eight hours, he feels worse in the morning.' }
];

var REGRA = [
  { se: 'If I drink coffee at night,', ops: [['I wake up at three.', 'ok'], ['I will wake up at three.', 'will'], ['I woke up at three.', 'passado']] },
  { se: 'If she reads in bed,', ops: [['she falls asleep fast.', 'ok'], ['she fall asleep fast.', 's'], ['she will fall asleep fast.', 'will']] },
  { se: 'If it’s hot,', ops: [['I don’t sleep well.', 'ok'], ['I won’t sleep well.', 'will'], ['I doesn’t sleep well.', 's2']] },
  { se: 'If my brother runs at night,', ops: [['he sleeps like a stone.', 'ok'], ['he sleep like a stone.', 's'], ['he will sleep like a stone.', 'will']] },
  { se: 'If you look at a screen in bed,', ops: [['your brain stays awake.', 'ok'], ['your brain will stay awake.', 'will'], ['your brain stay awake.', 's']] },
  { se: 'If the baby cries,', ops: [['we get up.', 'ok'], ['we gets up.', 's2'], ['we will get up.', 'will']] }
];
var NOTA = { will: 'A habit, not a prediction: no will. Both halves in the present.', passado: 'It happens every time: present, not past.', s: 'he, she, it: the -s. She falls, he sleeps.', s2: 'The -s is only for he, she, it: we get, I don’t.' };

var HABITOS = [
  { k: 'COFFEE AFTER 6 PM', frase: 'If I drink coffee after six, …' },
  { k: 'A PHONE IN BED', frase: 'If I take my phone to bed, …' },
  { k: 'EXERCISE AT NIGHT', frase: 'If I exercise at night, …' },
  { k: 'A HOT SHOWER', frase: 'If I take a hot shower before bed, …' },
  { k: 'A BIG DINNER', frase: 'If I eat a big dinner, …' },
  { k: 'A BOOK', frase: 'If I read a book in bed, …' }
];
var EFEITOS = [['melhor', 'I SLEEP BETTER'], ['pior', 'I SLEEP WORSE'], ['igual', 'NOTHING CHANGES'], ['will', 'HEARD “WILL”']];

var DOMINO = [['drink coffee at night', 'can’t sleep'], ['can’t sleep', 'look at my phone'], ['look at my phone', 'see work messages'], ['see work messages', 'feel stressed'], ['feel stressed', 'wake up tired']];

var IFWHEN = [
  { a: '', b: ' the alarm rings, I get up.', ok: 'when', por: 'The alarm rings every morning.' },
  { a: '', b: ' I wake up at 3, I read a little.', ok: 'if', por: 'It doesn’t happen every night.' },
  { a: '', b: ' it gets dark, the street lights come on.', ok: 'when', por: 'It gets dark every day.' },
  { a: '', b: ' my neighbor has a party, I can’t sleep.', ok: 'if', por: 'Maybe there is a party, maybe not.' },
  { a: '', b: ' I go to bed, I brush my teeth first.', ok: 'when', por: 'Every night.' },
  { a: '', b: ' I have a bad dream, I turn on the light.', ok: 'if', por: 'Only sometimes.' },
  { a: '', b: ' winter comes, the nights get longer.', ok: 'when', por: 'Winter always comes.' },
  { a: '', b: ' I drink too much water at night, I get up at 4.', ok: 'if', por: 'Only on those nights.' }
];

var IRMAOS = [
  { au: 'ela.mp3', quem: 'THE SISTER', pista: 'she / look at her phone in bed · she / stay awake', ok: 'If she looks at her phone in bed, she stays awake for an hour.' },
  { au: 'ele.mp3', quem: 'THE BROTHER', pista: 'he / run late · he / sleep like a stone', ok: 'If he runs late, he sleeps like a stone.' }
];
var LABQ = [
  { q: 'What happens if you sleep less than six hours?', ex: 'If you sleep less than six hours, you catch a cold four times more often.' },
  { q: 'What happens to you if you sleep badly for a week?', ex: 'If I sleep badly for a week, I get angry at work.' },
  { q: 'Do you believe the study? What is your rule for next week?', ex: 'Yes. If I go to bed at eleven, I sleep seven hours.' }
];
var COACH = [
  { p: '“I go to bed at eleven, but I lie awake until two.”', ideia: 'If you look at your phone in bed, your brain stays awake.', volta: '“But I read the news on my phone. It relaxes me!”' },
  { p: '“I wake up at four every night.”', ideia: 'If you drink water late, you wake up at night.', volta: '“But I’m always thirsty at night!”' },
  { p: '“I’m tired all day, but I sleep nine hours.”', ideia: 'If you sleep too much, you feel tired.', volta: '“That’s impossible!”' },
  { p: '“I can’t sleep on Sunday nights.”', ideia: 'If you sleep late on Sunday morning, you aren’t tired at night.', volta: '“But Sunday is my only day to sleep late!”' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, num: {}, voz: {}, rg: { n: 0, esc: '' }, cv: { sel: 0, ef: {} }, dom: 0, iw: {}, coach: { n: 0, viu: {} } };

/* o hipnograma: q de 0 (noite ruim) a 1 (noite boa) */
function hipnograma(q, cls) {
  var base = [0, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 0];
  var acorda = q < .35 ? [4, 8, 11] : q < .5 ? [8] : [];
  var pts = base.map(function (v, i) { var y = acorda.indexOf(i) >= 0 ? 0 : v === 2 ? 1 + q : v; return y; });
  var w = 600, h = 200, dx = w / pts.length, d = '';
  pts.forEach(function (y, i) { var yy = 30 + y * 60; d += (i ? 'L' : 'M') + (i * dx).toFixed(1) + ' ' + yy.toFixed(1) + ' L' + ((i + 1) * dx).toFixed(1) + ' ' + yy.toFixed(1) + ' '; });
  var area = d + 'L' + w + ' ' + h + ' L0 ' + h + ' Z';
  return '<svg class="hipno' + (cls ? ' ' + cls : '') + '" viewBox="0 0 600 220" role="img" aria-label="Sleep curve">'
    + '<g class="niveis"><line x1="0" y1="30" x2="600" y2="30"/><line x1="0" y1="90" x2="600" y2="90"/><line x1="0" y1="150" x2="600" y2="150"/></g>'
    + '<text x="6" y="24">AWAKE</text><text x="6" y="84">LIGHT</text><text x="6" y="144">DEEP</text>'
    + '<path d="' + area + '" class="area"/><path d="' + d + '" class="linha"/>'
    + '<text x="6" y="214">11 PM</text><text x="300" y="214" text-anchor="middle">3 AM</text><text x="594" y="214" text-anchor="end">7 AM</text></svg>';
}
function qualidade() {
  var q = .55; Object.keys(S.cv.ef).forEach(function (k) { var e = S.cv.ef[k]; if (e === 'melhor') q += .08; if (e === 'pior') q -= .1; });
  if (S.num.cafe >= 3) q -= .05; if (S.num.tela >= 60) q -= .05; if (S.num.horas >= 7) q += .05;
  return Math.max(0, Math.min(1, q));
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE SLEEP LAB · 7 NIGHTS</span><h1>Seven <b>Nights</b></h1>'
    + '<p class="sub">Your body has rules. Tonight you find them, and you say them. <b>If I drink coffee late, I wake up at three.</b></p>'
    + '<div class="chipsx"><span class="pilula">if + present, present</span><span class="pilula">no will</span><span class="pilula">if or when</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the study</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="monitor">' + hipnograma(.7) + '<small>NIGHT 1 · SUBJECT: YOU</small></div></div></div>';
};

R.numeros = function (c) {
  var topo = cab(c), corpo = cartasPessoais(c, ABRE, S.abre, 'abre').slice(topo.length);
  return topo + '<div class="mostradores">' + MOSTRADORES.map(function (m) {
    return '<div class="mostra-n vd"><small>' + m.q + '</small><div class="tres-b">' + m.ops.map(function (o) { return '<button type="button" class="num' + (S.num[m.k] === o ? ' on' : '') + '" data-a="nm" data-c="' + m.k + '" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div><b>' + (S.num[m.k] !== undefined ? S.num[m.k] + ' ' + m.un : '— ' + m.un) + '</b></div>';
  }).join('') + '</div>' + corpo;
};

R.vozes = function (c) {
  var todas = VOZES.every(function (v, i) { return S.voz[i]; });
  return cab(c) + '<div class="vozes">' + VOZES.map(function (v, i) {
    var ouviu = (S.ouviu || {})[v.au];
    return '<div class="voz vd"><small>' + v.quem + '</small><div class="toca-linha">' + tocar(v.au) + '</div>' + (S.voz[i] ? '' : transcricao(v.au, TR[v.au]))
      + (ouviu ? '<p class="q">' + v.q + '</p>' + (S.voz[i] ? '<div class="balao"><small>THE RULE</small><p>' + v.regra + '</p></div>' : '<button type="button" class="btn so-prof" data-a="vz" data-n="' + i + '">Said it · show the rule</button>') : '') + '</div>';
  }).join('') + '</div>'
    + (todas ? '<div class="pergunta vd ja"><small>LOOK AT THE THREE RULES</small><h2>What is the same in all of them?</h2></div>' + mostra('padrao', 'If + present, present. No will. And he takes -s: wakes, drinks, feels.') : '');
};

R.regra = function (c) {
  var e = S.rg, n = e.n, fim = n >= REGRA.length;
  if (fim) return cab(c) + trilha(REGRA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX RULES</small><h2>Two halves, present and present, and the -s for he, she, it.</h2></div></div>';
  var x = REGRA[n], ok = e.esc === 'ok';
  return cab(c) + trilha(REGRA, n) + '<div class="foco"><div class="regra-r vd"><small>IF + PRESENT, PRESENT · A HABIT, NOT A PREDICTION</small><p>' + x.se + ' <span class="gap">' + (ok ? x.ops[0][0] : '…') + '</span></p></div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="rg-prox">Next rule</button></div>' : '<h5 class="so-prof rot-ouve" style="text-align:center">TAP THE SECOND HALF YOU HEARD</h5><div class="versoes centro">' + ordem(x.ops, n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="rg" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">' + NOTA[e.esc] + '</p>' : '')) + '</div>';
};

R.curva = function (c) {
  var e = S.cv, x = HABITOS[e.sel], ef = e.ef[e.sel], q = qualidade();
  return cab(c) + '<div class="mesa-s"><div class="monitor">' + hipnograma(q) + '<small>YOUR CURVE · DEEP SLEEP ' + Math.round(q * 100) + '%</small></div><div class="lado-l">'
    + '<div class="habitos">' + HABITOS.map(function (h, i) { var f = e.ef[i]; return '<button type="button" class="chip' + (e.sel === i ? ' on' : '') + (f && f !== 'will' ? ' feito' : '') + '" data-a="cv" data-n="' + i + '">' + h.k + '</button>'; }).join('') + '</div>'
    + '<div class="pergunta vd ja"><small>' + x.k + '</small><h2>' + x.frase + '</h2></div><p class="dica-aluno">Finish it about YOUR body. Both halves in the present.</p>'
    + '<h5 class="so-prof rot-ouve">WHAT DOES IT DO?</h5><div class="tres-b">' + EFEITOS.map(function (f) { return '<button type="button" class="pilula so-prof' + (ef === f[0] ? (f[0] === 'will' ? ' errado' : ' certo') : '') + '" data-a="cv-e" data-v="' + f[0] + '">' + f[1] + '</button>'; }).join('') + '</div>'
    + (ef === 'will' ? '<p class="recusa">The curve didn’t move: a habit is not a prediction. Say it again, no will.</p>' : '') + '</div></div>';
};

R.domino = function (c) {
  var n = S.dom, todas = n >= DOMINO.length;
  return cab(c) + '<div class="dominos' + (todas ? ' todos' : '') + '">' + DOMINO.map(function (p, i) {
    var caiu = i < n;
    return '<button type="button" class="peca' + (caiu ? ' caiu' : '') + (i === n ? ' agora' : '') + '" data-a="dm" data-n="' + i + '"' + (i !== n ? ' disabled' : '') + '><small>' + (i + 1) + '</small><span>If I ' + p[0] + ',</span><b>I ' + p[1] + '.</b></button>';
  }).join('') + '</div>'
    + (todas ? '<div class="pergunta vd ja"><small>BREAK THE CHAIN</small><h2>Choose one link and change it: If I don’t …, I …</h2></div>' + fala('dm', ['If I don’t …, I …', 'If I leave my phone in the kitchen, I …'], []) + mostra('dm', 'If I don’t look at my phone, I don’t see work messages, and I don’t feel stressed.', 1)
      : '<p class="dica-aluno" style="text-align:center">Say domino ' + (n + 1) + ' out loud, then tap it.</p>');
};

R.ifwhen = function (c) {
  var n = 0; IFWHEN.forEach(function (x, i) { if (S.iw[i] === x.ok) n++; });
  return cab(c) + '<div class="iw">' + IFWHEN.map(function (x, i) {
    var esc = S.iw[i], ok = esc === x.ok;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p><span class="gap">' + (ok ? (x.ok === 'if' ? 'If' : 'When') : '___') + '</span>' + x.b + '</p><div class="tres-b">' + [['if', 'IF · MAYBE'], ['when', 'WHEN · ALWAYS']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="iw" data-n="' + i + '" data-v="' + o[0] + '"' + (ok ? ' disabled' : '') + '>' + o[1] + '</button>'; }).join('') + '</div>' + (ok ? '<p class="aprova">' + x.por + '</p>' : esc ? '<p class="recusa">' + (esc === 'if' ? 'This one always happens: when.' : 'This one may happen or not: if.') + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (n === 8 ? '<p class="aprova" style="text-align:center">When is sure. If is maybe.</p>' : '');
};

R.irmaos = function (c) {
  return cab(c) + '<div class="vozes dois">' + IRMAOS.map(function (p, i) {
    var ouviu = (S.ouviu || {})[p.au];
    return '<div class="voz vd"><small>' + p.quem + '</small><div class="toca-linha">' + tocar(p.au) + '</div>' + transcricao(p.au, TR[p.au]) + (ouviu ? '<p class="pecas-p">' + p.pista + '</p>' + mostra('ir' + i, p.ok) : '') + '</div>';
  }).join('') + '</div>' + follow('AND THE SPEAKER?', 'What happens if he runs at nine? And do you know somebody with a very different sleep rule?', ['If he runs at nine, he …', 'My … If she …, she …'], [], 'irf', '');
};

R.lab = function (c) {
  var ouviu = (S.ouviu || {})['lab.mp3'];
  return cab(c) + '<div class="mesa-s"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('lab') + ')"><span>THE STUDY · 164 PEOPLE · 5 DAYS</span></div><div class="toca-linha">' + tocar('lab.mp3') + '<div>' + transcricao('lab.mp3', TR['lab.mp3']) + '</div></div></div>'
    + '<div class="lado-l">' + (ouviu ? LABQ.map(function (x, i) { return '<div class="q-linha vd"><p>' + x.q + '</p>' + mostra('lb' + i, x.ex, i > 0) + '</div>'; }).join('') : '<p class="transcricao vazia">Play the study first. Listen for the rule.</p>') + '</div></div>';
};

R.coach = function (c) {
  var e = S.coach, n = e.n, fim = n >= COACH.length;
  if (fim) return cab(c) + trilha(COACH, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR PATIENTS</small><h2>Four patients, four rules. You are a good coach.</h2></div></div>';
  var x = COACH[n], viu = e.viu[n];
  return cab(c) + trilha(COACH, n) + '<div class="mesa-s"><div class="lado-l"><div class="balao vd paciente"><small>THE PATIENT · YOUR TEACHER</small><p>' + x.p + '</p></div><div class="pede vd"><small>YOU, THE COACH</small><b>Give a rule: If you …, you …</b></div>' + mostra('co' + n, x.ideia, 1) + '</div>'
    + '<div class="lado-l">' + (viu ? '<div class="balao vd paciente"><small>THE PATIENT ARGUES</small><p>' + x.volta + '</p></div><p class="dica-aluno">Answer back with another if.</p><div><button type="button" class="btn" data-a="co-prox">Next patient</button></div>' : '<div><button type="button" class="btn so-prof" data-a="co-viu">Rule given · the patient argues</button></div>') + '</div></div>';
};

R.fim = function (c) {
  var h = S.num.horas, cf = S.num.cafe;
  var lembra = (h !== undefined ? 'Last night you slept ' + h + ' hours. ' : '') + (cf !== undefined ? 'You drank ' + cf + ' cups. ' : '');
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'If I sleep … hours, I …\nIf I drink coffee after …, I …\nWhen I go to bed, I …', 'Your rules',
    ['If I sleep ', 'If I drink coffee ', 'If I look at my phone ', 'When I go to bed, '], ['YOUR NUMBERS ARE BACK', lembra + 'Write your rules for a good night. And what is wrong here: “If he drink coffee, he will wake up”?'])
    + '<div class="lado-fim"><div class="monitor mini">' + hipnograma(qualidade()) + '</div><div class="grande vd"><span><u>if</u> + present, <u>present</u></span><span>a habit: no <u>will</u></span><span>he, she, it: the <u>-s</u></span><span><u>when</u> = always · <u>if</u> = maybe</span></div>'
    + mostra('fim', 'If I sleep six hours, I am angry all day.<br>If I drink coffee after four, I lie awake.<br>When I go to bed, I leave my phone in the kitchen.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.nm = function (b, n, v, c) { S.num[c] = +v; };
TOQUES.vz = function (b, n) { S.voz[n] = 1; };
TOQUES.rg = function (b, n, v) { S.rg.esc = v; };
TOQUES['rg-prox'] = function () { S.rg = { n: S.rg.n + 1, esc: '' }; };
TOQUES.cv = function (b, n) { S.cv.sel = n; };
TOQUES['cv-e'] = function (b, n, v) { S.cv.ef[S.cv.sel] = v; };
TOQUES.dm = function () { S.dom++; };
TOQUES.iw = function (b, n, v) { S.iw[n] = v; };
TOQUES['co-viu'] = function () { S.coach.viu[S.coach.n] = 1; };
TOQUES['co-prox'] = function () { S.coach.n++; };
