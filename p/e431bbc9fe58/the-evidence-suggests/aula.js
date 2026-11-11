/* ============================================================
   THE EVIDENCE SUGGESTS · THE RED PEN · LIVE CLASS  06/10/2026
   Main series C1 · distância acadêmica: the evidence suggests /
   indicates that (incontável, verbo no singular); it has been claimed
   that · it is widely assumed that · the study claims / purports to;
   there is reason to believe · would seem to · apparently / reportedly
   / supposedly. O sujeito vazio IT / THERE sempre na frente.
   Erros: Is widely assumed that · Has been claimed that · Has reason to
   believe · the evidences suggest · the study pretends to show ·
   purports that · suggests to sleep · would seems.
   O MUNDO (da aula velha): uma palestra de um cientista do sono sobre um
   som que aprofunda o sono (1U2qMRGihGg, 6:37) SELADA em cinco
   capítulos; o aluno é o REVISOR (peer review). Sem nome do palestrante,
   de pesquisador ou do evento na tela.
   A CARA (nova; a velha era manuscrito + mostrador em cartões): a CANETA
   VERMELHA — o manuscrito com controle de alterações: a afirmação forte
   riscada em vermelho, a versão com distância inserida em verde, e o
   comentário na margem ("Reviewer 2"); a RÉGUA DE CERTEZA de cinco
   marcas (PROVEN … A JUMP) antes da reescrita; e o carimbo do parecer.
   Reforço conferido: as B2 de hedging (tend to, is said to) estão no ar;
   aqui é a distância acadêmica, um degrau acima.
   Fila: FILA-LIVE-386.md · 146. Pasta piloto-evidence (conferida: não existia).
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre três frases quase iguais. III = antes do
   play uma régua (você acredita?) e uma escolha por motivo; por capítulo,
   três verdadeiro-ou-mentira com ▶ no minuto; depois a régua de novo + duas
   escolhas por sentido (FM.regua, FM.escolhe, FM.verdadeOuMentira).
   V = pôr as seis linhas na régua de força (FM.separa) e, pronta, ler as
   versões verdes; VI = ligar cada fórmula ao que ela diz ao leitor (FM.liga,
   as armadilhas passam para a VII); VII = a estagiária reescreveu SEIS linhas
   (eram oito) e cada uma tem um erro: achar e dizer o conserto (FM.erro);
   IX = a editora ao telefone, escolher a reação e dizer a resposta
   (FM.reacao; deixa de ser EXTRA, é fala). I, II, IV, VIII e X ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'quarto', rot: 'I · You and Your Sleep', t: 'Before the science: you, your nights, and the things you believe.', p: 'Tap a card. The student answers; then the teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'palco', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'palco', rot: 'III · The Talk', t: 'A sleep scientist says a sound can make your sleep deeper.', p: 'Tap your guess first. Then the talk plays in five short chapters: tap true or lie, and tap the time to listen again.' },
  { k: 'falas', est: 'l', extra: 1, img: 'palco', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'manu', est: 'f', min: 6, img: 'mesa', rot: 'V · The Manuscript', t: 'Six lines from the talk, on your desk. How strong is each claim?', p: 'Place each line on the ruler: tap a line, then its box. Then read the green lines like a reviewer.' },
  { k: 'gx', est: 'f', min: 4, img: 'arquivo', rot: 'VI · Find the Rule', t: 'Four sentences from the manuscript. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'arquivo', rot: 'VII · The Rule', t: 'A reviewer never says “it proves”. They keep a distance.', p: 'Match each frame to what it tells the reader. Then say each frame out loud.' },
  { k: 'parecer', est: 'o', min: 7, img: 'mesa', rot: 'VIII · The Referee Report', t: 'A press release about the study goes too far. The intern rewrote six lines, and each one has a mistake.', p: 'Find the mistake in each line. Say the fix. Then tap Check.' },
  { k: 'veredito', est: 'o', min: 7, extra: 1, img: 'quarto', rot: 'IX · Your Verdict', t: 'Things people “know” about sleep and health.', p: 'Tap a card. Answer with one distancing frame. The teacher takes the other side.' },
  { k: 'editor', est: 'o', min: 7, img: 'arquivo', rot: 'X · The Editor Calls', t: 'The journal editor has read your report. Defend it, and keep your distance.', p: 'The teacher is the editor. Tap how you answer. Then say your own answer.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XI · The Decision', t: 'Would you trust a device that promises deeper sleep?', p: 'Three claims from your own life, each with a distance. They go to your My notes.' }
];

var YT = '1U2qMRGihGg';

var VOCE = [
  { k: 'LAST NIGHT', q: 'How did you sleep last night? What time did you go to bed?', fup: 'Is that normal for you?', st: ['Badly …', 'Well …'], ex: 'Badly. I went to bed at 1 AM, and I woke up twice.' },
  { k: 'YOUR RULE', q: 'Do you have a sleep rule? No phone in bed, no coffee after 4 PM?', fup: 'Does it work?', st: ['No coffee after …'], ex: 'No coffee after 3 PM. I’m not sure it works, but I believe it.' },
  { k: 'THE HEADLINE', q: 'Think of a health headline you believed. Was it true?', fup: 'How did you find out?', st: ['I read that …'], ex: 'I read that eggs were bad for you. Now people say the opposite.' },
  { k: 'WHO YOU TRUST', q: 'About health, who do you trust most: doctors, friends, or the internet? Why?', fup: 'And when they disagree?', st: ['Doctors, mostly …'], ex: 'Doctors, mostly. But I check the internet first, which is a bad habit.' },
  { k: 'YOUR WORK', q: 'In your job, do you ever have to check whether something is really true?', fup: 'How do you check?', st: ['All the time …'], ex: 'All the time. People send me numbers, and half of them are guesses.' }
];

var ANTES_REGUA = { formato: 'regua', titulo: 'Before you watch', frase: 'A sleep scientist says a sound can make your sleep deeper. Do you believe it?', esquerda: 'No way', direita: 'Fully', depois: 'Say why. Start with: I doubt … / I would like to know …' };
var ANTES_ESC = { formato: 'escolhe', titulo: 'What would you ask first? Tap. There is no wrong answer.', itens: [
  { p: 'A reviewer asks first …', o: ['Who paid for the study?', 'How many people were in it?', 'Did other labs repeat it?'], c: -1, d: 'A reviewer asks all three.' } ] };
var VM = function (itens) { return { formato: 'verdadeOuMentira', rotulos: ['True', 'Lie'], titulo: 'True or lie? Tap the time, listen, then tap. If it is a lie, say the truth.', itens: itens }; };
var CAPS = [
  { k: 'THE CRISIS', ini: 0, fim: 75, tarefa: VM([
    { f: 'The average American sleeps a whole hour less than in the 1940s.', t: 1, tm: '0:58' },
    { f: 'People are ashamed of sleeping little.', t: 0, tm: '1:05', c: 'They wear it as a badge of honor.' },
    { f: 'Technology has helped our circadian rhythm.', t: 0, tm: '0:24', c: 'It has come at the cost of our circadian rhythm.' }]) },
  { k: 'THE COST', ini: 75, fim: 131, tarefa: VM([
    { f: 'Poor sleep is linked to Alzheimer’s, heart disease, stroke and diabetes.', t: 1, tm: '1:16' },
    { f: 'Sleep apnea makes you less likely to get these illnesses.', t: 0, tm: '1:25', c: 'You are more likely to get many of them.' },
    { f: 'When we are sleep-deprived, it is easy to relate to other people.', t: 0, tm: '1:51', c: 'We have a hard time relating to others.' }]) },
  { k: 'DEEP SLEEP', ini: 131, fim: 205, tarefa: VM([
    { f: 'There are three stages of sleep.', t: 1, tm: '2:20' },
    { f: 'In deep sleep, the brain waves are like the brain waves in waking life.', t: 0, tm: '2:43', c: 'They are long-burst waves, very different. They are called delta waves.' },
    { f: 'As we get older, we are more likely to lose delta waves.', t: 1, tm: '3:12' }]) },
  { k: 'THE FINDING', ini: 205, fim: 304, tarefa: VM([
    { f: 'The speaker says he needs only six hours of sleep.', t: 0, tm: '3:38', c: 'Like most people, he needs eight hours.' },
    { f: 'A lab out of Germany showed that certain sounds can make sleep deeper.', t: 1, tm: '4:00' },
    { f: 'The same lab showed that the sound can improve next-day memory.', t: 1, tm: '4:15' }]) },
  { k: 'THE SOUND', ini: 304, fim: 392, tarefa: VM([
    { f: 'The sound is at the same burst frequency as brain waves in deep sleep.', t: 1, tm: '5:19' },
    { f: 'The next day, the participants could hear the sound clearly.', t: 0, tm: '5:34', c: 'They were completely unaware of it.' },
    { f: 'The sound produced more delta waves.', t: 1, tm: '5:56' }]) }
];
var DEPOIS_REGUA = { formato: 'regua', titulo: 'After the video', frase: 'A sound can make your sleep deeper. Do you believe it now?', esquerda: 'No way', direita: 'Fully', depois: 'Say why. Use: the evidence suggests … / it has been claimed … / there is reason to believe …' };
var DEPOIS_ESC = { formato: 'escolhe', titulo: 'Think like a reviewer. Tap.', itens: [
  { p: 'At 2:12 he says “what many scientists BELIEVE”. At 5:27 he says the sound “ACTUALLY primes your mind”. Which line keeps a distance?', o: ['“What many scientists believe …”', '“That sound pattern actually primes your mind …”'], c: 0, d: 'The first one puts the claim on other scientists. The second sounds like a fact.' },
  { p: 'He is building this technology himself. For a reviewer, that …', o: ['changes nothing.', 'is a reason to read him more carefully.', 'proves the technology works.'], c: 1, d: 'There is reason to believe he wants it to work. Ask for studies from other labs.' } ] };

var NIVEIS = ['PROVEN', 'STRONG', 'LIKELY', 'POSSIBLE', 'A JUMP'];
/* nv = posição certa na régua (0 PROVEN … 4 A JUMP) */
var MANU = [
  { t: '1:16', orig: 'Most of us know that poor sleep is linked to diseases like Alzheimer’s, heart disease, stroke and diabetes.', nv: 1, por: 'Many large studies agree. Strong, but “linked to” is not “causes”.', ops: ['The evidence suggests that poor sleep is linked to several serious diseases.', 'The evidences suggest that poor sleep is linked to several serious diseases.', 'The evidence proves that poor sleep causes several serious diseases.'] },
  { t: '1:38', orig: 'Poor sleep makes us make risky, rash decisions.', nv: 2, por: 'Studies point this way, but he says it like a law for everybody.', ops: ['There is reason to believe that poor sleep leads to riskier decisions.', 'Has reason to believe that poor sleep leads to riskier decisions.', 'There are reason to believe that poor sleep leads to riskier decisions.'] },
  { t: '2:14', orig: '…what many scientists believe is the most regenerative stage of sleep: deep sleep.', nv: 2, por: 'Here he is careful already: many scientists BELIEVE. The distance is built in.', ops: ['It is widely assumed that deep sleep is the most regenerative stage.', 'Is widely assumed that deep sleep is the most regenerative stage.', 'It is widely assume that deep sleep is the most regenerative stage.'] },
  { t: '3:18', orig: 'Deep sleep and delta waves are actually a marker for biological youth.', nv: 4, por: 'Older people lose delta waves: that is a link. “A marker for youth” is a big jump.', ops: ['Delta waves would seem to be a marker of biological youth.', 'Delta waves would seems to be a marker of biological youth.', 'Delta waves are clearly a marker of biological youth.'] },
  { t: '4:03', orig: 'A lab out of Germany showed that if you could play certain sounds at the right time… you could actually make sleep deeper.', nv: 3, por: 'One lab, and we haven’t read the paper. Possible, not proven.', ops: ['A lab in Germany reportedly made sleep deeper with sound.', 'A lab in Germany made reportedly sleep deeper with sound.', 'A lab in Germany proved that sound makes sleep deeper.'] },
  { t: '5:27', orig: 'That sound pattern actually primes your mind to have more of these regenerative delta waves.', nv: 3, por: 'His own lab, his own technology. There is data, but other labs need to repeat it.', ops: ['The study purports to show that the sound primes the brain for deep sleep.', 'The study pretends to show that the sound primes the brain for deep sleep.', 'The study purports that the sound primes the brain for deep sleep.'] }
];

var TRAPS = [
  ['THE EMPTY IT', 'Is widely assumed that we need eight hours.', '<b>It</b> is widely assumed that we need eight hours.', 'No subject, no sentence. The empty IT opens.'],
  ['ONE EVIDENCE', 'The evidences suggest that sleep helps memory.', 'The <b>evidence suggests</b> that sleep helps memory.', 'EVIDENCE is uncountable: no -s, singular verb.'],
  ['PURPORT, NOT PRETEND', 'The study pretends to show that the sound works.', 'The study <b>purports to show</b> that the sound works.', 'PRETEND = act as if something false is true.'],
  ['SUGGEST + THAT', 'The evidence suggests to sleep more.', 'The evidence suggests <b>that we should</b> sleep more.', 'SUGGEST never takes TO + verb.']
];

var ERROS_PA = [
  { f: 'The <u>evidences suggest</u> that sound can help some people sleep deeper.', r: 'evidence suggests' },
  { f: '<u>Has been claimed</u> that the device also works at home.', r: 'It has been claimed' },
  { f: 'There <u>are</u> reason to believe that deep sleep slows brain aging.', r: 'is' },
  { f: 'The German study <u>pretends</u> to show that the method works.', r: 'purports' },
  { f: 'The headband would <u>seems</u> to help some people with insomnia.', r: 'seem' },
  { f: 'The evidence suggests <u>to sleep</u> more than seven hours.', r: 'that we should sleep' }
];
var PLACA_PA = 'The empty <b>IT</b> / <b>THERE</b> comes first.<br><b>Evidence</b>: no -s, singular verb.<br>A study <b>purports to</b> show. It never pretends.<br><b>Suggests that</b>, never suggests to.<br><b>Would seem</b>, not would seems.';
var SEPARA_MANU = { formato: 'separa', titulo: 'How strong is each claim? Tap a line, then its box.', caixas: ['STRONG · many studies agree', 'LIKELY · studies point this way', 'POSSIBLE · one lab, not repeated', 'A JUMP · a link is not a cause'], itens: MANU.map(function (x) { return { t: x.orig, c: x.nv - 1 }; }) };
var LIGA_REGRA = { formato: 'liga', titulo: 'Match each frame to what it tells the reader.', pares: [
  ['The evidence suggests that …', 'The data point this way.'],
  ['It has been claimed that …', 'Other people say it. I am not sure.'],
  ['It is widely assumed that …', 'Everybody believes it. Maybe it is not true.'],
  ['There is reason to believe …', 'My own careful opinion.'],
  ['The study purports to show …', 'The study says it. I am not convinced.'],
  ['… would seem to …', 'A soft, polite doubt.']
], ordemDireita: [3, 0, 5, 2, 4, 1] };

var VEREDITO = [
  { k: 'EIGHT HOURS', q: 'Does everybody need eight hours of sleep?', fup: 'And you?', st: ['It is widely assumed that …, but …'], ex: 'It is widely assumed that we do, but there is reason to believe it depends on the person.' },
  { k: 'COFFEE', q: 'Is coffee bad for your sleep?', fup: 'What time is your last coffee?', st: ['The evidence suggests that …'], ex: 'The evidence suggests that coffee after lunch can keep you awake.' },
  { k: 'PHONES', q: 'Do phones in bed ruin your sleep?', fup: 'Where is your phone at night?', st: ['It has been claimed that …, but …'], ex: 'It has been claimed that the light keeps us awake, but the evidence is mixed.' },
  { k: 'NAPS', q: 'Are naps a good idea?', fup: 'How long is a good nap?', st: ['There is reason to believe that …'], ex: 'There is reason to believe that a short nap helps, but a long one doesn’t.' },
  { k: 'SLEEP APPS', q: 'Would you trust an app that tracks your sleep?', fup: 'What would it need to measure?', st: ['It reportedly …'], ex: 'Not completely. It reportedly measures movement, not brain waves.' },
  { k: 'HEADLINES', q: 'A headline says: “Science proves chocolate makes you smarter.” Your reaction?', fup: 'Who would you ask?', st: ['The study supposedly …, but …'], ex: 'The study supposedly shows that, but I’d like to know who paid for it.' }
];

var EDITOR_R = [
  { fala: '“You were hard on the speaker. Why?”', reacoes: [
    ['Defend the report', 'The evidence suggests a link, but he says it like a proven fact.', 'Fair. Talks are for the public, but a journal is not a stage.'],
    ['Be softer', 'It is widely assumed that talks simplify, but there is reason to believe he went too far.', 'Fair enough. Keep that distance in the final report.'] ] },
  { fala: '“He says the sound works for everybody. Is that fair?”', reacoes: [
    ['Say no', 'It has been claimed that it works for everybody, but there is reason to believe the effect is small.', 'I agree. One small study is a beginning, not an end.'],
    ['Say maybe', 'It would seem to work for some people, but the study never tested everybody.', 'Good. “Some people” is the careful claim.'] ] },
  { fala: '“A blog says the headband ‘cures insomnia’.”', reacoes: [
    ['Object', 'The headband supposedly cures insomnia, but the study only measured delta waves.', 'Exactly. The study never used that word.'],
    ['Ask for the source', 'Apparently the blog says so, but who wrote it, and where is the data?', 'Good question. There is no data in the blog.'] ] },
  { fala: '“So: accept or reject?”', reacoes: [
    ['Accept with revisions', 'I’d accept it with revisions. The results would seem to support the idea, but other labs must repeat them.', 'Then that’s the decision. Thank you, reviewer.'],
    ['Reject', 'I’d reject it. The evidence suggests a small effect, and the paper claims far more.', 'Understood. I will tell the authors why.'] ] }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, ve: { sel: -1, foi: {} }, ed: { n: 0, foi: {} } };

/* o manuscrito com controle de alterações */
function revisao(orig, rev, foi, linha, nota) {
  return '<div class="ev-papel vd"><div class="ev-margem"><span>' + linha + '</span></div><div class="ev-corpo">'
    + '<p class="ev-orig' + (foi ? ' riscado' : '') + '">' + orig + '</p>'
    + (foi ? '<p class="ev-novo">' + rev + '</p>' : '<p class="ev-vazio">reviewer’s version …</p>') + '</div>'
    + (foi && nota ? '<aside class="ev-nota"><small>REVIEWER 2</small>' + nota + '</aside>' : '') + '</div>';
}
function regua(nv, certo) {
  return '<div class="ev-regua vd"><small>HOW STRONG IS THE EVIDENCE?</small><div>' + NIVEIS.map(function (k, i) {
    return '<button type="button" class="ev-marca' + (nv === i ? (i === certo ? ' certo' : ' errado') : '') + (nv >= 0 && i === certo ? ' alvo' : '') + '" data-a="ma-nv" data-n="' + i + '"><i></i>' + k + '</button>';
  }).join('') + '</div></div>';
}
function carimbo(n) {
  return '<div class="ev-carimbo' + (n >= 6 ? ' batido' : '') + '"><small>REFEREE REPORT</small><b>' + (n >= 6 ? 'ACCEPT WITH MAJOR REVISIONS' : n + ' / 6 LINES REVISED') + '</b></div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="ev-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · ACADEMIC DISTANCE</span><h1>The Evidence <b>Suggests</b></h1>'
    + '<p class="sub">A reviewer never writes “it proves”. <b>There is reason to believe</b> that deep sleep keeps the brain young. Keep your distance, and keep the empty IT.</p>'
    + '<div class="chipsx"><span class="pilula">the evidence suggests</span><span class="pilula">it has been claimed</span><span class="pilula">would seem to</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the manuscript</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + revisao('Deep sleep keeps you young.', 'There is reason to believe that deep sleep slows brain aging.', 1, 'L.14', 'A link is not a cause. Keep a distance.') + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['I read that …', 'I’m not sure, but …', 'Apparently …']); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('va', ANTES_REGUA) + FM.ex('vb', ANTES_ESC) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>About six and a half minutes, in five short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The brain benefits of deep sleep', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 5 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + FM.ex('vc' + e.cap, k.tarefa)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vd', DEPOIS_REGUA) + '</div><div class="lado-l">' + FM.ex('ve', DEPOIS_ESC) + '</div></div><p class="aprova" style="text-align:center">“Many scientists <b>believe</b>” keeps a distance. “It <b>actually</b> primes your mind” doesn’t. A reviewer hears the difference.</p>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.manu = function (c) {
  var em = (S.fq && S.fq.mn && S.fq.mn.em) || {}, pronta = SEPARA_MANU.itens.every(function (x, i) { return em[i] === x.c; });
  return cab(c) + FM.ex('mn', SEPARA_MANU)
    + (pronta ? '<div class="foco"><p class="ev-rot" style="text-align:center">THE RED PEN · READ THE GREEN LINES OUT LOUD</p>' + MANU.map(function (x) { return revisao(x.orig, x.ops[0], 1, x.t, x.por); }).join('') + '<p class="aprova" style="text-align:center">Six lines, four strengths. Some claims were strong, some were a jump.</p></div>' : '');
};

R.regra = function (c) {
  var em = (S.fq && S.fq.lg && S.fq.lg.par) || {}, pronta = LIGA_REGRA.pares.every(function (_, i) { return em[i] === i; });
  return cab(c) + '<div class="ev-tres">' + [['FROM THE EVIDENCE', 'The evidence suggests / indicates that …'], ['FROM OTHER PEOPLE', 'It has been claimed that … · It is widely assumed that … · The study purports to …'], ['YOUR OWN CAUTION', 'There is reason to believe … · would seem to · apparently, reportedly, supposedly']].map(function (f, i) { return '<div class="ev-tipo vd"><small>' + ['1', '2', '3'][i] + ' · ' + f[0] + '</small><p>' + f[1] + '</p></div>'; }).join('') + '</div>'
    + FM.ex('lg', LIGA_REGRA)
    + (pronta ? '<p class="ev-lei">English needs a subject: the empty <b>IT</b> or <b>THERE</b> comes first. <b>Evidence</b> is uncountable. A study <b>purports to</b> show; it never <s>pretends</s>. Now say each frame out loud, about sleep.</p>' : '');
};

R.parecer = function (c) {
  var ver = S.fq && S.fq.pr && S.fq.pr.ver;
  return cab(c) + carimbo(ver ? 6 : 0) + FM.ex('pr', { formato: 'erro', titulo: 'The intern’s six lines. Find the mistake in each. Say the fix.', itens: ERROS_PA, regra: PLACA_PA })
    + (ver ? '<p class="aprova" style="text-align:center">Six lines, six distances. Which one was the hardest to soften?</p>' : '');
};

R.veredito = function (c) { return cartasPessoais(c, VEREDITO, S.ve, 've', ['The evidence suggests …', 'It is widely assumed …', 'Apparently …']); };

R.editor = function (c) {
  var n = S.ed.n, fim = n >= EDITOR_R.length, x = EDITOR_R[Math.min(n, EDITOR_R.length - 1)];
  var fone = '<div class="ev-fone vd"><span class="ev-pulso"></span><b>THE JOURNAL EDITOR · ON THE LINE</b><small>ABOUT YOUR REPORT</small></div>';
  if (fim) return cab(c) + fone + trilha(EDITOR_R, n) + '<div class="foco"><div class="pergunta vd"><h2>Four answers, four distances. The decision is made.</h2></div></div>';
  return cab(c) + fone + trilha(EDITOR_R, n)
    + FM.ex('ed' + n, { formato: 'reacao', titulo: 'Question ' + (n + 1) + ' of ' + EDITOR_R.length + ' · tap how you answer, then say it', fala: x.fala, reacoes: x.reacoes, quem: 'Editor' })
    + '<div style="text-align:center;margin-top:14px"><button type="button" class="btn" data-a="seq-prox" data-c="ed">Next question</button></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'The evidence suggests that …\nIt is widely assumed that …, but there is reason to believe …', 'Your claims',
    ['The evidence suggests', 'It is widely assumed', 'There is reason to believe', 'would seem to', 'apparently'], ['THE DECISION', 'Three claims from your own life about health or work, each with a distance.'])
    + '<div class="lado-fim">' + revisao('A device can fix your sleep.', 'There is reason to believe that a device could help some people sleep deeper.', 1, 'L.1', 'One study is a beginning, not an end.')
    + '<div class="grande vd"><span><u>the evidence suggests that</u> · uncountable, singular</span><span><u>it has been claimed / it is widely assumed</u> · the empty IT first</span><span><u>there is reason to believe · would seem to</u> · your caution</span><span>not <s>the evidences</s>, not <s>Is widely assumed</s>, not <s>pretends to show</s></span></div>'
    + mostra('fim', 'The evidence suggests that walking after dinner helps me sleep.<br>It is widely assumed that screens keep us awake, but there is reason to believe the effect is small.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four sentences from the sleep study. Find the rule yourself.',
  exemplos: [
    'The <b>evidence suggests</b> a small effect.',
    'The <b>evidence</b> on sound and sleep <b>is</b> mixed.',
    'There <b>is</b> some <b>evidence</b> that the sound helps.',
    'The <b>evidence has</b> been questioned.'
  ],
  pergunta: 'The word evidence is …',
  opcoes: ['uncountable: no -s, and the verb is singular', 'countable: evidences, and the verb is plural', 'always plural: the evidence suggest'], c: 0,
  nao: 'Not that one. Read the four lit words again: is there an -s on evidence? Is the verb plural?',
  regra: '<b>evidence</b> is uncountable: <b>the evidence suggests</b>, never <b>the evidences suggest</b>. A reviewer keeps a distance: <b>suggests</b>, <b>indicates</b>, <b>would seem to</b>.',
  uso: { p: 'Your turn. Something you read about sleep, health or food. Use the evidence + a careful verb.', molde: ['The evidence suggests …', 'There is some evidence that …'], ex: 'The evidence suggests that coffee after 3 PM hurts sleep.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
