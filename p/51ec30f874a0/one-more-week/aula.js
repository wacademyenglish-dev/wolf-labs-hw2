/* ============================================================
   ONE MORE WEEK · THE HOURGLASS · LIVE CLASS  06/10/2026
   Main series B1 · I'd rather + verbo puro (eu) · I'd rather you +
   passado (outra pessoa, e é sobre agora/amanhã) · It's time + pessoa
   + passado · já aconteceu: I'd rather you hadn't + particípio.
   Erros universais: "I'd rather you go", "It's time we go", "I'd
   rather to stay", "I'd rather you didn't said".
   O MUNDO (da aula velha): Anna e Mark dividem o apartamento (nove
   gravações mantidas, conferidas no faster-whisper em 06/10: todas
   batem; uma diz "invite people round", fica porque é a gravação); o
   relatório vence na sexta, dia 10, e o aluno negocia mais uma semana.
   A CARA: a AMPULHETA — o prazo é areia; cada frase de negociação com
   a forma certa vira a ampulheta e ganha dias (10 → 12 → 14 → 15 →
   17). "It's time" é a areia que já devia ter caído. O calendário
   claro da aula velha saiu. Fila: FILA-LIVE-386.md · 094.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. II = o bilhete da
   Anna na geladeira (FM.carta): tocar os verbos e completar a regra;
   IV = ligar a situação à frase com It's time (FM.liga); VI = 90 s no
   relógio, o aluno toca cada ferramenta quando usa e a ampulheta gira
   (FM.cronometro + FM.usa); VII = certo ou errado, e a correção falada
   (FM.verdadeOuMentira). I, III, V, VIII, IX e X ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'mesa' },
  { k: 'abre', est: 'o', min: 7, img: 'corredor', rot: 'I · Somebody Near You', t: 'Think of someone near you who does something you would change.', p: 'Tap who it is. Answer the three questions out loud. Keep your last sentence: it comes back.' },
  { k: 'dois', est: 'f', min: 7, img: 'mesa', rot: 'II · Who Is Doing It?', t: 'You: I’d rather + plain verb. Someone else: I’d rather you + past form.', p: 'Read Anna’s note out loud. Tap the verbs after “rather” and “time”. Then finish the rule.' },
  { k: 'escada', est: 'l', min: 7, img: 'mesa', rot: 'III · Three Steps Back', t: 'Three recordings. The same idea, three distances.', p: 'Play it. Say it back. Then tap: is it about tonight, or already done?' },
  { k: 'hora', est: 'f', min: 6, img: 'corredor', rot: 'IV · It’s Time', t: 'It’s time + person + past form: it should already be happening.', p: 'Match each situation to its sentence. Then say each pair out loud.' },
  { k: 'ouve', est: 'l', min: 7, img: 'vazio', rot: 'V · Room to Say No', t: 'Anna and Mark share a flat. Six lines.', p: 'Play it. Is it POLITE (they can say no) or FIRM (no real choice)? Say why.' },
  { k: 'prazo', est: 'o', min: 7, img: 'mesa', rot: 'VI · One More Week', t: 'Your report is due Friday the 10th. You need one more week.', p: 'Your teacher is the boss. Start the clock and negotiate. Tap each tool when you use it: the hourglass turns.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'VII · I’d Rather You Go', t: 'Six sentences. Four of them have a problem.', p: 'Tap Right or Wrong. If it is wrong, say the fix.' },
  { k: 'vida', est: 'o', min: 7, extra: 1, img: 'corredor', rot: 'VIII · About You', t: 'Five quick cards about your life.', p: 'Pick a card. Answer with the frame, and add one reason.' },
  { k: 'sua', est: 'o', min: 7, extra: 1, img: 'vazio', rot: 'IX · Your Sentence, Again', t: 'The person from scene I. Say it again, with the form, and leave room.', p: 'Choose the version that leaves room. Then say your own.' },
  { k: 'fim', est: 'w', min: 6, img: 'mesa', rot: 'X · The Door You Leave Open', t: 'One more week, and a few wishes about other people.', p: 'Write three wishes: about you, about someone else, and about time. It goes to your My notes.' }
];

var TR = {
  'r-eu.mp3': 'I’d rather stay in tonight.', 'r-voce.mp3': 'I’d rather you stayed in tonight.', 'r-hadnt.mp3': 'I’d rather you hadn’t said that.',
  'r1.mp3': 'I’d rather you didn’t invite people round on weeknights.', 'r2.mp3': 'It’s time you found your own place.', 'r3.mp3': 'I’d rather we talked about this properly.',
  'r4.mp3': 'It’s about time somebody said it.', 'r5.mp3': 'I’d rather you’d told me before you signed anything.', 'r6.mp3': 'It’s time you decided, one way or the other.'
};

var QUEM = ['a flatmate', 'my boss', 'a partner', 'a neighbor', 'a friend', 'someone in my family'];
var PERG = ['What do they do that you would change?', 'Have you ever told them?', 'If you told them tomorrow, what would you say, to their face?'];

/* II · o bilhete da Anna (texto nosso, no mundo da aula) → a regra (FM.carta) */
var CARTA_R = { de: 'FRIDGE NOTE · ANNA TO MARK',
  txt: 'Mark, I’d rather [[stay]] in tonight, and I’d rather you [[stayed]] in too. I’d rather you [[didn’t play]] music after ten. It’s late, so it’s time we [[went]] to bed. And about the dishes: I’d rather you [[hadn’t left]] them in the sink all week. It’s about time you [[washed]] them.',
  assina: 'Anna' };
var REGRA_R = [
  { a: 'About ME, tonight: I’d rather ', par: ['stay', 'stayed'], c: 0, b: ' in.' },
  { a: 'About SOMEONE ELSE, tonight: I’d rather you ', par: ['stayed', 'stay'], c: 0, b: ' in. (a past form, but it is still tonight)' },
  { a: 'Negative: I’d rather you ', par: ['didn’t play', 'don’t play'], c: 0, b: ' music.' },
  { a: 'It should already be happening: It’s time we ', par: ['went', 'go'], c: 0, b: ' to bed.' },
  { a: 'Already happened: I’d rather you ', par: ['hadn’t left', 'didn’t leave'], c: 0, b: ' them there.' }
];
var PRESA_R = 'Me: I’d rather <b>stay</b><br>Someone else: I’d rather you <b>stayed</b> (still tonight)<br>No: I’d rather you <b>didn’t</b> play<br>It’s time we <b>left</b><br>Already done: I’d rather you <b>hadn’t</b> said';

var DEGRAUS = [
  { au: 'r-eu.mp3', q: 0, nota: 'Me, tonight: plain verb. stay' },
  { au: 'r-voce.mp3', q: 0, nota: 'Another person, tonight: past form. stayed' },
  { au: 'r-hadnt.mp3', q: 1, nota: 'Already said: one more step back. hadn’t said' }
];

/* IV · ligar a situação à frase (FM.liga) */
var LIGA_HORA = { formato: 'liga', titulo: 'Match the situation to the sentence.', ordemDireita: [3, 0, 5, 2, 4, 1], pares: [
  ['It’s late. You should go home.', 'It’s time we left.'],
  ['She is 35 and still lives with her parents.', 'It’s time she moved out.'],
  ['Taxes go up every year and nothing changes.', 'It’s time the government did something.'],
  ['Everybody knows it, and nobody says it.', 'It’s about time somebody said it.'],
  ['I haven’t seen a dentist for three years.', 'It’s time I went to the dentist.'],
  ['A rule for everybody: ten o’clock, the kids sleep.', 'It’s time to go to bed.']
] };

var OUVE = [
  { qm: 'ANNA', au: 'r1.mp3', d: 'sim', amb: 1 }, { qm: 'MARK', au: 'r2.mp3', d: 'nao' }, { qm: 'MARK', au: 'r3.mp3', d: 'sim' },
  { qm: 'ANNA', au: 'r4.mp3', d: 'nao' }, { qm: 'MARK', au: 'r5.mp3', d: 'nao' }, { qm: 'ANNA', au: 'r6.mp3', d: 'nao' }
];

var DIAS = [10, 12, 14, 15, 17];
var PRAZO = [
  { chefe: 'So, the report. Friday the 10th, right?', ops: [['I’d rather we talked about the date first.', 'ok'], ['I’d rather we talk about the date first.', 'pres'], ['I’d rather to talk about the date.', 'to']], resp: 'OK. Talk.' },
  { chefe: 'What’s the problem?', ops: [['I’d rather you gave me until the 17th. The data isn’t ready.', 'ok'], ['I’d rather you give me until the 17th.', 'pres'], ['I rather you gave me until the 17th.', 'd']], resp: 'The 17th? That’s a whole week.' },
  { chefe: 'The client wants it soon.', ops: [['I know. It’s time we told them the truth about the data.', 'ok'], ['It’s time we tell them the truth.', 'time'], ['It’s time for we told them.', 'for']], resp: 'Hmm. Maybe.' },
  { chefe: 'And what if I say no?', ops: [['Then I’d rather you didn’t expect the full report.', 'ok'], ['Then I’d rather you don’t expect it.', 'pres'], ['Then I’d rather you not expected it.', 'not']], resp: 'Fine. The 17th. One more week.' }
];
var CRONO_R = { formato: 'cronometro', segundos: 90, titulo: 'The meeting · 90 seconds', texto: 'Your boss wants the report on Friday the 10th. You need until the 17th. Negotiate.' };
var USA_R = { formato: 'usa', titulo: 'Tap each tool when you use it. The hourglass turns.', palavras: ['I’d rather we talked …', 'I’d rather you gave me …', 'It’s time we told …', 'I’d rather you didn’t …'], fim: 'Four tools, one more week: Friday the 17th.' };
var NAO = {
  pres: 'Another person after rather: a PAST form. we talked, you gave, you didn’t.', to: 'No to: I’d rather + verb.', d: 'I’D rather: the ’d is would.',
  time: 'It’s time + person + PAST form: we told.', for: 'It’s time we told. No for.', not: 'Negative: you didn’t expect.'
};

/* VII · certo ou errado, e a correção falada (FM.verdadeOuMentira) */
var ERROS_TF = { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Right or wrong? If it is wrong, say the fix.', itens: [
  { f: 'I’d rather you go now.', t: false, c: 'I’d rather you went now.' },
  { f: 'I’d rather you didn’t call after 10.', t: true },
  { f: 'I’d rather to stay in tonight.', t: false, c: 'I’d rather stay in tonight.' },
  { f: 'I’d rather you didn’t said that yesterday.', t: false, c: 'I’d rather you hadn’t said that yesterday.' },
  { f: 'It’s time we left.', t: true },
  { f: 'It’s time for we left.', t: false, c: 'It’s time we left.' }
] };

var VIDA = [
  { k: 'On the bus', q: 'Something you’d rather people didn’t do on the bus.', fup: 'Have you ever said it?', st: ['I’d rather people didn’t …'], ex: 'I’d rather people didn’t play videos without headphones.' },
  { k: 'Time to start', q: 'Something it’s time you started.', fup: 'What’s stopping you?', st: ['It’s time I started …'], ex: 'It’s time I started running again.' },
  { k: 'Your family', q: 'Something you’d rather your family did more often.', fup: 'Have you asked them?', st: ['I’d rather my family …'], ex: 'I’d rather my family called more often.' },
  { k: 'Your city', q: 'Something it’s time your city changed.', fup: 'Who should do it?', st: ['It’s time the city …'], ex: 'It’s time the city built more bike lanes.' },
  { k: 'Too late', q: 'Something you’d rather someone hadn’t told you.', fup: 'Why?', st: ['I’d rather they hadn’t …'], ex: 'I’d rather my friend hadn’t told me the end of the series.' }
];

var SUA = [['I’d rather you …. Could we talk about it?', 1], ['It’s about time you …', 0], ['It’s time you decided, one way or the other.', 0]];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { q: -1 }, eg: { esc: {} }, ov: { n: 0, esc: '' }, vida: { sel: -1, foi: {} }, sa: { esc: -1 } };

/* a ampulheta: areia em cima = o que falta, embaixo = o que já caiu; dia na base */
function ampulheta(dia, cima, gira, mini) {
  var c = Math.max(0, Math.min(1, cima)), yTop = 140 - c * 100, yBot = 268 - (1 - c) * 100;
  return '<svg class="ampulheta' + (gira ? ' gira' : '') + (mini ? ' mini' : '') + '" viewBox="0 0 200 316" role="img" aria-label="Hourglass">'
    + '<rect class="moldura" x="22" y="14" width="156" height="16" rx="6"/><rect class="moldura" x="22" y="270" width="156" height="16" rx="6"/><rect class="poste" x="28" y="30" width="8" height="240"/><rect class="poste" x="164" y="30" width="8" height="240"/>'
    + '<clipPath id="vc"><path d="M50 32 H150 C150 92 112 128 104 150 C112 172 150 208 150 268 H50 C50 208 88 172 96 150 C88 128 50 92 50 32Z"/></clipPath>'
    + '<g clip-path="url(#vc)"><rect class="areia" x="40" y="' + yTop.toFixed(0) + '" width="120" height="' + (140 - yTop).toFixed(0) + '"/><rect class="areia" x="40" y="' + yBot.toFixed(0) + '" width="120" height="' + (270 - yBot).toFixed(0) + '"/>' + (c > 0 && c < 1 ? '<rect class="fio-areia" x="99" y="140" width="2" height="' + (yBot - 140).toFixed(0) + '"/>' : '') + '</g>'
    + '<path class="vidro-a" d="M50 32 H150 C150 92 112 128 104 150 C112 172 150 208 150 268 H50 C50 208 88 172 96 150 C88 128 50 92 50 32Z"/>'
    + '<text class="dia" x="100" y="310">' + (dia ? 'DUE · FRI ' + dia : '') + '</text></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE DEADLINE</span><h1>One More <b>Week</b></h1>'
    + '<p class="sub"><b>I’d rather you gave</b> me one more week. <b>It’s time we talked</b> about the deadline. Past forms, about tomorrow.</p>'
    + '<div class="chipsx"><span class="pilula">I’d rather you + past</span><span class="pilula">It’s time we + past</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn the hourglass</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + ampulheta(10, .35) + '</div></div>';
};

R.abre = function (c) {
  var e = S.ab;
  return cab(c) + '<div class="quem">' + QUEM.map(function (q, i) { return '<button type="button" class="pilula grande-p' + (e.q === i ? ' on' : '') + '" data-a="ab" data-n="' + i + '">' + q + '</button>'; }).join('') + '</div>'
    + (e.q >= 0 ? '<div class="mesa-c"><div class="lado-l">' + PERG.map(function (p, i) { return '<div class="pede vd"><small>' + (i + 1) + ' · ' + QUEM[e.q].toUpperCase() + '</small><b>' + p + '</b></div>'; }).join('') + '</div><div class="lado-l">' + fala('ab', ['They always …', 'No, I’ve never … / Yes, once …', 'I would say: …'], ['always', 'never', 'I’d like']) + '<p class="so-prof dica-aluno">Write down the third answer exactly. Watch for “I want that you…” or “I’d rather you go”. Don’t correct yet.</p></div></div>' : '<p class="dica-aluno" style="text-align:center">Tap who it is.</p>');
};

R.dois = function (c) {
  return cab(c) + FM.carta('ds', CARTA_R, REGRA_R, { toque: 'Tap the verbs after “rather” and “time”', pronta: 'The rule is ready. It stays on the screen.' });
};

R.escada = function (c) {
  var e = S.eg;
  return cab(c) + '<div class="degraus">' + DEGRAUS.map(function (d, i) {
    var esc = e.esc[i], ok = esc === d.q, ouviu = (S.ouviu || {})[d.au];
    return '<div class="degrau d' + i + ' vd"><small>STEP ' + (i + 1) + '</small><div class="toca-linha">' + tocar(d.au) + '</div>' + transcricao(d.au, TR[d.au]) + '<div class="tres-b">' + ['TONIGHT', 'ALREADY DONE'].map(function (f, k) { return '<button type="button" class="pilula' + (esc === k ? (ok ? ' certo' : ' errado') : '') + '" data-a="eg" data-n="' + i + '" data-v="' + k + '"' + (ouviu ? '' : ' disabled') + '>' + f + '</button>'; }).join('') + '</div>'
      + (ok ? '<p class="aprova">' + d.nota + '</p>' : esc !== undefined ? '<p class="recusa">Is it about tonight, or has it already happened?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.hora = function (c) {
  var e = ((S.fq || {}).hr || {}).par || {}, n = LIGA_HORA.pares.filter(function (p, i) { return e[i] === i; }).length, todos = n === LIGA_HORA.pares.length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + ampulheta(0, todos ? 0 : Math.max(0, .5 - n * .08)) + '</div><div class="lado-l">' + FM.ex('hr', LIGA_HORA)
    + (todos ? '<div class="pergunta vd ja"><small>SIX OF SIX</small><h2>With a person after TIME, a past form: it should already be happening. The sand is already down. Now say each pair out loud.</h2></div>' : '<p class="dica-aluno">A person after TIME? Then a past form. No person? Then TO + verb.</p>') + '</div></div>';
};

R.ouve = function (c) {
  var e = S.ov, n = e.n, fim = n >= OUVE.length;
  var feitos = OUVE.slice(0, n).map(function (t) { return '<div class="turno ' + t.qm.toLowerCase() + '"><b>' + t.qm + '</b><span>' + TR[t.au] + '</span><i>' + (t.d === 'sim' ? 'POLITE' : 'FIRM') + '</i></div>'; }).join('');
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="turnos">' + feitos + '</div></div><div class="lado-l"><div class="pergunta vd"><small>SIX LINES</small><h2>Two lines left room to answer. Four closed the door. Which one would you rewrite?</h2></div>' + fala('ov', ['I’d rewrite … as: I’d rather …'], ['I’d rather', 'could we', 'polite']) + '</div></div>';
  var x = OUVE[n], ok = e.esc === x.d || (x.amb && e.esc), ouviu = (S.ouviu || {})[x.au];
  return cab(c) + trilha(OUVE, n) + '<div class="mesa-c"><div class="lado-l"><div class="turnos">' + feitos + '</div><div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.qm + ' · LINE ' + (n + 1) + '</b></div></div></div>'
    + '<div class="lado-l"><div class="tres-b centro">' + [['POLITE', 'sim'], ['FIRM', 'nao']].map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ov" data-v="' + o[1] + '"' + (ouviu ? '' : ' disabled') + '>' + o[0] + '</button>'; }).join('') + '</div>'
    + (!ouviu ? '<p class="dica-aluno" style="text-align:center">Play it first.</p>' : ok ? '<div class="balao vd ok-b"><small>' + x.qm + '</small><p>' + TR[x.au] + '</p></div>' + (x.amb ? '<p class="aprova" style="text-align:center">The tone decides this one: both readings work. Why did you hear it that way?</p>' : '') + '<div style="text-align:center"><button type="button" class="btn" data-a="ov-prox">Next line</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">What could the other person answer? If only “fine” fits, it was FIRM.</p>' : '') + '</div></div>';
};

R.prazo = function (c) {
  var u = ((S.fq || {}).pu || {}).u || {}, n = Object.keys(u).length, dia = DIAS[Math.min(n, DIAS.length - 1)];
  var amp = '<div class="lado-l centro">' + ampulheta(dia, (dia - 10) / 7 * .8 + .15, n > 0) + '<div class="placar-d"><s>FRI 10</s> → <b>FRI ' + dia + '</b></div></div>';
  var chefe = '<details class="so-prof pd-chefe"><summary>Boss lines (teacher)</summary>' + PRAZO.map(function (x) { return '<p><b>“' + x.chefe + '”</b> · if the student pushes: “' + x.resp + '”</p>'; }).join('') + '</details>';
  return cab(c) + '<div class="mesa-c">' + amp + '<div class="lado-l">' + FM.ex('pc', CRONO_R) + FM.ex('pu', USA_R) + chefe + '</div></div>';
};

R.erros = function (c) {
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('er', ERROS_TF) + '</div>' + FM.regra(PRESA_R) + '</div>';
};

R.vida = function (c) { return cartasPessoais(c, VIDA, S.vida, 'vida'); };

R.sua = function (c) {
  var e = S.sa, ok = e.esc >= 0 && SUA[e.esc][1];
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><h5 class="rot-ouve">WHICH ONE LEAVES ROOM?</h5><div class="versoes">' + SUA.map(function (o, i) { return '<button type="button" class="versao' + (e.esc === i ? (o[1] ? ' certo' : ' errado') : '') + '" data-a="sa" data-n="' + i + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (e.esc >= 0 && !ok ? '<p class="recusa">That one closes the door. Which one lets them answer?</p>' : '') + '</div>'
    + '<div class="lado-l">' + (ok ? '<p class="aprova">Same wish, and the door is still open.</p>' + fala('sa', ['I’d rather you …. Could we talk about it?', 'It’s time we …'], ['I’d rather you', 'didn’t', 'it’s time we']) : '<div class="aberta vd" style="background-image:url(' + img('vazio') + ')"><span>THE PERSON FROM SCENE I</span></div>') + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’d rather …\nI’d rather you …\nIt’s time I …', 'Your wishes',
    ['I’d rather ', 'I’d rather you ', 'It’s time we ', 'I’d rather you hadn’t '], ['WHAT WOULD YOU RATHER?', 'One wish about you, one about someone else, and one thing it’s time you did.'])
    + '<div class="lado-fim">' + ampulheta(17, .9, 0, 1) + '<div class="grande vd"><span>me: <u>I’d rather stay</u></span><span>someone else: <u>I’d rather you stayed</u></span><span><u>It’s time we left</u> · <u>I’d rather you hadn’t said</u></span></div>'
    + mostra('fim', 'I’d rather work from home on Fridays.<br>I’d rather my neighbor didn’t practice the drums at 11 PM.<br>It’s time I booked a doctor’s appointment.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.ab = function (b, n) { S.ab.q = n; };
TOQUES.eg = function (b, n, v) { S.eg.esc[n] = +v; };
TOQUES.ov = function (b, n, v) { S.ov.esc = v; };
TOQUES['ov-prox'] = function () { S.ov = { n: S.ov.n + 1, esc: '' }; };
TOQUES.sa = function (b, n) { S.sa.esc = n; };
