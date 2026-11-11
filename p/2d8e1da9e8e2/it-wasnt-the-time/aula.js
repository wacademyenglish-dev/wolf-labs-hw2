/* ============================================================
   IT WASN'T THE TIME · RACK FOCUS · LIVE CLASS  06/10/2026
   Main series B2 · cleft sentences: It is/was X that/who … · What … is/
   was X · The thing that … · where/when. Erros: esquecer o IT (Was the
   conversation that…), WHAT no lugar de THAT (It was the phone what…),
   ordem de pergunta depois de WHAT (What are you is…), Who no começo de
   afirmação.
   O MUNDO (da aula velha): checagem de fatos sobre foco e multitarefa —
   os 23 minutos (entrevistas, não artigo), 5 de 200 motoristas, os 277
   e a nota 63 (a3), a voz confiante (a2), o estudo de 2009 que não se
   repetiu, a conversa (não a mão) que atrasa quem dirige. Os dois áudios
   mantidos e conferidos no faster-whisper em 06/10 (batem; números por
   extenso como a voz diz). O nome da empresa do "peixinho dourado" saiu
   da tela: fica "a big tech company".
   A CARA (nova; a velha era o marca-texto no papel de jornal claro): o
   VISOR DE CÂMERA — a frase aparece num visor com os cantos de foco; o
   aluno "puxa o foco" para uma parte, essa fica nítida e o resto
   desfoca, e a frase se reconstrói como cleft. E os CARIMBOS do tribunal.
   Fila: FILA-LIVE-386.md · 125.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. II = a nota da
   checadora (FM.carta): tocar o que move o foco e completar a regra;
   IV = separar o que a pesquisadora DISSE do que NÃO disse (FM.separa);
   V = ligar a pergunta ao número (FM.liga); VI = achar a parte quebrada
   de seis manchetes (FM.erro); VII = o carimbo por SENTIDO (FM.escolhe);
   VIII = manter ou riscar (FM.verdadeOuMentira); IX = 45 s no relógio.
   I, III e X ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'mesa' },
  { k: 'corte', est: 'o', min: 7, img: 'caderno', rot: 'I · Interrupted', t: 'Talk about your day. The screen will stop you. Then go back to your sentence.', p: 'Three rounds. Nothing here is corrected.' },
  { k: 'gx', est: 'f', min: 4, img: 'mesa', rot: 'II · The Flip', t: 'One plain sentence. Pull the focus to one part.', p: 'Flip each sentence. Notice what comes after was. Then flip four on your own.' },
  { k: 'moldes', est: 'f', min: 7, img: 'mesa', rot: 'III · Two Shapes', t: 'A fact-checker’s note. English has two ways to put the focus on one part of a sentence.', p: 'Read the note out loud. Tap the words that move the focus. Then finish the rule.' },
  { k: 'foco', est: 'o', min: 7, img: 'mesa', rot: 'IV · Rack Focus', t: 'One plain sentence. Pull the focus to one part, and the sentence rebuilds itself around it.', p: 'Tap each part in turn. Say the new sentence, and what it was NOT.' },
  { k: 'ouvir', est: 'l', min: 7, img: 'plateia', rot: 'V · Sixty-Three', t: 'A researcher describes a study about how good people think they are at multitasking.', p: 'Listen once. Tap a line, then its box: did she say it? Then say the finding as a cleft.' },
  { k: 'placar', est: 'f', min: 6, img: 'pista', rot: 'VI · Five out of Two Hundred', t: 'Two hundred people drove a simulator while talking on a phone.', p: 'Guess each number out loud. Tap a question, then its number. The scoreboard fills in.' },
  { k: 'falta', est: 'f', min: 6, img: 'mesa', rot: 'VII · The Missing It', t: 'Six headlines are broken at the front or in the middle.', p: 'Find the broken part in each line. Say the fix. Then tap Check.' },
  { k: 'tribunal', est: 'o', min: 7, extra: 1, img: 'fundo', rot: 'VIII · The Claims Court', t: 'Six famous claims about focus. Stamp each one, then correct it in one sentence.', p: 'Tap the stamp: BACKED (the evidence supports it), NOT SHOWN (nobody has proved it) or MISQUOTED (the source says something else). Then say the correction.' },
  { k: 'voz', est: 'l', min: 7, extra: 1, img: 'plateia', rot: 'IX · The Confident Voice', t: 'A speaker on stage. Everything is said with total confidence.', p: 'Listen once. Tap KEEP or STRIKE on every line.' },
  { k: 'debate', est: 'o', min: 7, extra: 1, img: 'fundo', rot: 'X · The Debate', t: 'Motion: multitasking is a myth. One side each, and in the middle, you swap.', p: 'Every answer needs a cleft. Start the clock. Your teacher taps the shapes heard.' },
  { k: 'fim', est: 'w', min: 6, img: 'caderno', rot: 'XI · What You Lost', t: 'Back to the first scene.', p: 'Write what you lost, with what it was NOT. It goes to your My notes.' }
];

var TR = {
  'a2.mp3': 'Here is the number that changed how I work. Twenty-three minutes and fifteen seconds. That is how long it takes your brain to come back after a single interruption. Now think about how many times a day somebody taps you on the shoulder. Six times, eight times, ten. Do the arithmetic and you have lost your morning before you have started it. The research on this is very clear, and once you have seen it you cannot unsee it. Multitasking is a myth. Your brain does not do two things. It switches, and every switch costs you twenty-three minutes and fifteen seconds.',
  'a3.mp3': 'We asked two hundred and seventy-seven people to rate their own ability to do two things at once, on a scale where fifty is average. The average answer we got back was sixty-three. A hundred and ninety-three of them put themselves above average, which is not a thing that can be true of a hundred and ninety-three people out of two hundred and seventy-seven. Then we measured what they could actually do, and the two numbers did not line up at all. Knowing how good somebody thinks they are tells you almost nothing about how good they are. It does tell you something else, though. The people who rated themselves highest were the ones using the phone most while driving.'
};

var RODADAS = [
  { fala: 'Describe your morning today, from the moment you woke up. Keep going until the screen stops you.', corte: 'Say the days of the week backwards, from Sunday.' },
  { fala: 'Tell me about the last thing that went wrong this week. Start at the beginning.', corte: 'Count backwards out loud: 30, 27, 24, 21 …' },
  { fala: 'Explain how you decide what to do first on a Monday.', corte: 'Name five things in your room that are blue.' }
];
var PERDAS = ['my idea', 'the thread', 'my concentration', 'about ten seconds'];

/* II · a nota da checadora (texto nosso, no mundo da aula) → a regra */
var CARTA = { de: 'FACT-CHECK DESK · NOTE TO MARA',
  txt: 'The claim: “every interruption costs you 23 minutes.” [[It was]] a researcher [[who]] said the number, and [[it was]] in three interviews [[that]] it first appeared. [[What]] the paper measured [[was]] a lab task with letters. [[It wasn’t]] the phone in their hands [[that]] slowed the drivers down. [[It was]] the conversation. The number is not false. [[What]] it lacks [[is]] a source.',
  assina: 'Jo' };
var REGRA = [
  { a: 'A person after “It was”: a researcher ', par: ['who', 'what'], c: 0, b: ' said it (or that).' },
  { a: 'A thing after “It was”: the phone ', par: ['that', 'what'], c: 0, b: ' slowed them. Never WHAT.' },
  { a: 'The empty ', par: ['IT', 'NOTHING'], c: 0, b: ' holds the place of the subject.' },
  { a: 'Second shape: ', par: ['What', 'Who'], c: 0, b: ' the paper measured was a lab task.' },
  { a: 'What it was NOT: It ', par: ['wasn’t', 'didn’t'], c: 0, b: ' the phone that slowed them. It was the talk.' }
];
var PRESA = 'It was <b>X</b> that / who …<br>What … was <b>X</b><br>The thing that … is <b>X</b><br>It <b>wasn’t</b> X. It was Y.';

var FOCOS = [
  { partes: [['The conversation', 'a'], [' slowed the drivers down', 'b'], ['.']], fendas: { a: ['It was <mark>the conversation</mark> that slowed the drivers down.', 'not the phone in their hands'], b: ['What the conversation did was <mark>slow the drivers down</mark>.', 'not make them crash'] } },
  { partes: [['A researcher', 'a'], [' said the number '], ['in three interviews', 'b'], ['.']], fendas: { a: ['It was <mark>a researcher</mark> who said the number.', 'not a published study'], b: ['It was <mark>in three interviews</mark> that the number appeared.', 'not in the paper'] } },
  { partes: [['My phone', 'a'], [' breaks '], ['my concentration', 'b'], [' '], ['every morning', 'c'], ['.']], fendas: { a: ['It’s <mark>my phone</mark> that breaks my concentration every morning.', 'not my colleagues'], b: ['What my phone breaks every morning is <mark>my concentration</mark>.', 'not my plans'], c: ['It’s <mark>every morning</mark> that my phone breaks my concentration.', 'not only on Mondays'] } },
  { partes: [['Most people', 'a'], [' rate '], ['themselves', 'b'], [' '], ['above average', 'c'], ['.']], fendas: { a: ['It’s <mark>most people</mark> who rate themselves above average.', 'not just a few'], b: ['What most people rate too high is <mark>themselves</mark>.', 'not other people'], c: ['Where most people put themselves is <mark>above average</mark>.', 'not at the average'] } }
];

/* IV · o que a pesquisadora DISSE e o que NÃO disse (FM.separa) */
var SEPARA_OUV = { formato: 'separa', titulo: 'Tap a line, then its box. Did she say it?', caixas: ['She SAID it', 'She did NOT say it'], itens: [
  { t: '277 people rated themselves.', c: 0 },
  { t: 'Most people rated themselves below average.', c: 1 },
  { t: 'The average rating was 63.', c: 0 },
  { t: 'The two numbers matched closely.', c: 1 },
  { t: '193 of them put themselves above average.', c: 0 },
  { t: 'The heaviest phone users rated themselves highest.', c: 0 }
] };
var ABERTAS3 = [
  { q: 'Say the finding as a cleft: “What they got wrong was …”', h: 'What they got wrong wasn’t the task. It was themselves.' },
  { q: 'Would you have rated yourself above fifty? What would change your mind?', h: 'Probably. What would change my mind is a real test.' }
];

var PLACAR = [
  { rot: 'LOST NOTHING AT ALL', q: 'How many of the 200 drove just as well while talking?', val: '5 of 200', bar: 3 },
  { rot: 'AS A SHARE', q: 'Five out of two hundred is …', val: '2.5%', bar: 3 },
  { rot: 'BRAKING · EVERYONE ELSE', q: 'For the others, hitting the brake took …', val: '+20%', bar: 20 },
  { rot: 'MEMORY · EVERYONE ELSE', q: 'Their memory scores …', val: '−11%', bar: 11 }
];
/* V · ligar a pergunta ao número (FM.liga); a coluna da direita fica embaralhada */
var LIGA_PL = { formato: 'liga', titulo: 'Guess out loud. Then match each question to its number.', pares: PLACAR.map(function (l) { return [l.q, l.val]; }), ordemDireita: [2, 0, 3, 1] };

/* VI · achar a parte quebrada (FM.erro) */
var ERRO_FALTA = [
  { f: '<u>Is</u> the switch that costs you, not the two tasks.', r: 'It is' },
  { f: 'It was an interview <u>what</u> the number came from.', r: 'that' },
  { f: '<u>It</u> what you lose is the thread.', r: 'delete “It”' },
  { f: 'It was the phone <u>who</u> slowed the drivers.', r: 'that' },
  { f: '<u>Wasn’t</u> the phone that slowed the drivers.', r: 'It wasn’t' },
  { f: 'What nobody measured <u>it was</u> the getting back.', r: 'was' }
];
var PRESA_FALTA = 'Empty front → <b>It</b> is / was …<br>Something already there → no IT: <b>What</b> you lose is …<br>A person: <b>who</b> · a thing: <b>that</b><br>Never <s>what</s> after the focus.';

var CARIMBOS = { backed: 'BACKED', notshown: 'NOT SHOWN', misquoted: 'MISQUOTED' };
var CLAIMS = [
  { t: 'Every interruption costs you 23 minutes and 15 seconds.', c: 'notshown', fonte: 'Said by a researcher in interviews. The paper it is credited to measured something else.', m: 'It wasn’t a study that the number came from. It was three interviews.' },
  { t: 'It isn’t holding the phone that slows drivers down. It’s the conversation.', c: 'backed', fonte: 'Simulator studies found hands-free calls slowed drivers too.', m: 'What slows drivers down is the conversation, not the hand.' },
  { t: 'A big tech company’s research proved our attention span is shorter than a goldfish’s.', c: 'misquoted', fonte: 'The 8-second number came from a statistics website quoted in a marketing report.', m: 'It wasn’t brain research that the number came from. It was a website.' },
  { t: 'About one driver in forty can talk on the phone with no loss.', c: 'backed', fonte: '5 of 200 drivers in a simulator study.', m: 'It’s only one in forty who can do it.' },
  { t: 'Multitasking makes you lose 40% of your productive time.', c: 'notshown', fonte: 'Stretched from short lab tasks with letters and shapes to a whole working day.', m: 'What the lab measured wasn’t a working day. It was a task with letters.' },
  { t: 'Heavy multitaskers are worse at ignoring distractions. It’s a solid, repeated finding.', c: 'notshown', fonte: 'A 2009 study said so. Later teams tried again and could not find the effect.', m: 'What didn’t hold up was the 2009 finding.' }
];
/* VII · o carimbo por SENTIDO (FM.escolhe): a fonte e a correção aparecem depois do toque */
var ESC_CLAIMS = { formato: 'escolhe', titulo: 'Stamp each claim. Then say the correction.', itens: CLAIMS.map(function (x) {
  return { p: '“' + x.t + '”', o: ['BACKED', 'NOT SHOWN', 'MISQUOTED'], c: ['backed', 'notshown', 'misquoted'].indexOf(x.c), d: x.fonte + ' <b>Say it:</b> ' + x.m };
}) };

var VOZ = [
  ['Twenty-three minutes and fifteen seconds.', 'risca', 'Struck: interviews, not a paper.'],
  ['That is how long your brain takes to come back.', 'risca', 'Struck: nobody measured “coming back”.'],
  ['Do the arithmetic and you have lost your morning.', 'risca', 'Struck: an unchecked number times eight is still unchecked.'],
  ['The research on this is very clear.', 'risca', 'Struck: the most famous part didn’t replicate.'],
  ['Your brain does not really do two things at once.', 'fica', 'Kept, nearly: about one person in forty seems to.'],
  ['It switches, and every switch has a cost.', 'fica', 'Kept: the cost of switching is old, solid research.']
];
/* VIII · manter ou riscar (FM.verdadeOuMentira com rótulos Keep / Strike) */
var VM_VOZ = { formato: 'verdadeOuMentira', rotulos: ['Keep', 'Strike'], titulo: 'Keep what is backed. Strike what has nothing behind it.', itens: VOZ.map(function (x) { return { f: x[0], t: x[1] === 'fica', c: x[2] }; }) };
var ABERTAS2 = [
  { q: 'Correct the speaker in one sentence, as a cleft.', h: 'What’s wrong isn’t the switching. It’s the number.' },
  { q: 'What is something you have repeated with confidence, without checking?', h: 'What I never checked was the “eight glasses of water a day”.' }
];

var DEB = [
  { q: 'Open your side in two sentences.', apoio: 'What I want to say is …' },
  { q: 'Answer the teacher’s strongest point.', apoio: 'It isn’t … that … It’s …' },
  { q: 'SWAP SIDES. Now defend the other side.', apoio: 'What the other side forgets is …', troca: 1 },
  { q: 'Closing: what do you really think now?', apoio: 'What changed my mind was … / What didn’t change was …' }
];
var FORMAS = [['it', 'IT IS / WAS … THAT'], ['what', 'WHAT … IS / WAS'], ['nao', 'IT WASN’T …, IT WAS …']];
var DEBERR = [['semit', 'IS THE … THAT (NO IT)', 'The empty IT is missing: “It is the switch that …” Say it again.'], ['what2', 'IT WAS … WHAT', 'After the focus: THAT (or WHO), not WHAT. Say it again.']];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ct: { n: 0, fase: 0, achou: {}, perda: '' }, fc: { n: 0, parte: '', vistos: {} }, db: { lado: '', n: 0, conta: {}, erro: '' } };

/* o visor: cantos de foco, a parte focada nítida, o resto desfocado */
function visor(conteudo, rot) {
  return '<div class="cf-visor"><i class="cf-c a"></i><i class="cf-c b"></i><i class="cf-c c"></i><i class="cf-c d"></i><span class="cf-rec">● ' + (rot || 'FOCUS') + '</span>' + conteudo + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · CLEFT SENTENCES</span><h1>It Wasn’t <b>the Time</b></h1>'
    + '<p class="sub">“Every interruption costs you 23 minutes.” <b>It wasn’t a study that the number came from. It was three interviews.</b> Famous claims about focus, checked one by one, and corrected in the shape English uses to move the focus.</p>'
    + '<div class="chipsx"><span class="pilula">it was X that …</span><span class="pilula">what … was X</span><span class="pilula">backed · not shown · misquoted</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start checking</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + visor('<p class="cf-frase"><span class="fora">It wasn’t a study that the number came from.</span> <span class="dentro">It was three interviews.</span></p>', 'REC · FOCUS') + '</div></div>';
};

R.corte = function (c) {
  var e = S.ct, n = e.n;
  if (n >= RODADAS.length) {
    return cab(c) + '<div class="foco"><div class="cf-placar-r">' + RODADAS.map(function (r, i) { return '<span class="pilula ' + (e.achou[i] === 'sim' ? 'certo' : 'errado') + '">ROUND ' + (i + 1) + ' · ' + (e.achou[i] === 'sim' ? 'FOUND IT' : 'LOST IT') + '</span>'; }).join('') + '</div>'
      + '<div class="pergunta vd"><small>WHAT DID YOU LOSE?</small><h2>What I lost was <u>' + (e.perda || '…') + '</u>.</h2></div><div class="cf-temas">' + PERDAS.map(function (p) { return '<button type="button" class="pilula' + (e.perda === p ? ' on' : '') + '" data-a="ct-p" data-v="' + h(p) + '">' + p + '</button>'; }).join('') + '</div>'
      + (e.perda ? '<p class="aprova" style="text-align:center">You did every interruption perfectly, and still lost something. Keep your sentence: it comes back at the end.</p>' : '') + '</div>';
  }
  var r = RODADAS[n], corpo;
  if (e.fase === 0) corpo = '<div class="pergunta vd"><small>ROUND ' + (n + 1) + ' OF 3 · TALK</small><h2>' + r.fala + '</h2></div><div style="text-align:center"><button type="button" class="btn so-prof cf-stop" data-a="ct-f" data-n="1">STOP</button><p class="dica-aluno">Your teacher stops you in the middle of a sentence.</p></div>';
  else if (e.fase === 1) corpo = '<div class="cf-corte vd"><b>STOP.</b><p>' + r.corte + '</p></div><div style="text-align:center"><button type="button" class="btn" data-a="ct-f" data-n="2">Done. Go back</button></div>';
  else corpo = '<div class="pergunta vd ja"><small>GO BACK</small><h2>Finish the sentence you were in. Where were you?</h2></div><div class="cf-dois">' + [['sim', 'FOUND IT'], ['nao', 'LOST IT']].map(function (o) { return '<button type="button" class="versao grande-v" data-a="ct-a" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>';
  return cab(c) + trilha(RODADAS, n) + '<div class="foco">' + corpo + '</div>';
};

R.moldes = function (c) {
  return cab(c) + FM.carta('md', CARTA, REGRA, { papel: 'tela', toque: 'Tap the words that move the focus', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays on the screen.' });
};

R.foco = function (c) {
  var e = S.fc, n = e.n, fim = n >= FOCOS.length;
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>FOUR SENTENCES</small><h2>Same words, different focus. Where you pulled the focus decided what you were correcting.</h2></div></div>';
  var x = FOCOS[n], f = e.parte ? x.fendas[e.parte] : null, chaves = Object.keys(x.fendas), todas = chaves.every(function (k) { return e.vistos[k]; });
  var plano = '<p class="cf-frase plana' + (e.parte ? ' focou' : '') + '">' + x.partes.map(function (p) { return p[1] ? '<button type="button" class="cf-parte' + (e.parte === p[1] ? ' dentro' : (e.parte ? ' fora' : '')) + (e.vistos[p[1]] ? ' visto' : '') + '" data-a="fc" data-v="' + p[1] + '">' + p[0] + '</button>' : '<span class="' + (e.parte ? 'fora' : '') + '">' + p[0] + '</span>'; }).join('') + '</p>';
  return cab(c) + trilha(FOCOS, n) + '<div class="foco">' + visor(plano + (f ? '<p class="cf-frase nova">' + f[0] + '</p>' : '<p class="cf-dica">Tap a part to pull the focus there.</p>'), 'FOCUS ' + (n + 1) + ' / 4')
    + (f ? '<div class="cf-nao vd"><small>SO WHAT WAS IT NOT?</small><b>… ' + f[1] + '.</b></div>' : '')
    + (todas ? '<div class="cf-linha-ok centro"><p class="aprova">Every part, every shape. Now the other shape for one of them.</p><button type="button" class="btn" data-a="fc-prox">Next sentence</button></div>' : '') + '</div>';
};

R.ouvir = function (c) {
  var ouviu = (S.ouviu || {})['a3.mp3'], em = ((S.fq || {}).ou || {}).em || {};
  var todos = SEPARA_OUV.itens.every(function (x, i) { return em[i] === x.c; });
  var esq = '<div class="lado-l"><div class="cf-ouve vd"><div class="toca-linha">' + tocar('a3.mp3') + '<b>THE RESEARCHER</b></div>' + transcricao('a3.mp3', TR['a3.mp3']) + '</div>'
    + '<div class="cf-medidor vd"><small>SELF-RATING · 50 = AVERAGE</small><div class="cf-barra"><i class="media"></i>' + (em[2] === 0 ? '<i class="valor" style="width:63%"></i><b style="left:63%">63</b>' : '') + '<em style="left:50%">50</em></div></div></div>';
  var dir = !ouviu ? '<p class="dica-aluno">Play it first.</p>' : FM.ex('ou', SEPARA_OUV)
    + (todos ? ABERTAS3.map(function (a, i) { return '<div class="pergunta vd ja"><small>SAY IT · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('o3a' + i, a.h, 1); }).join('') : '');
  return cab(c) + '<div class="mesa-c">' + esq + '<div class="lado-l">' + dir + '</div></div>';
};

R.placar = function (c) {
  var e = ((S.fq || {}).pl || {}).par || {}, todos = PLACAR.every(function (l, i) { return e[i] === i; });
  var quadro = '<div class="cf-quadro vd"><small>THE SIMULATOR · 200 DRIVERS</small>' + PLACAR.map(function (l, i) { var v = e[i] === i; return '<div class="cf-ql"><span>' + l.rot + '</span><div class="cf-qb"><i style="width:' + (v ? l.bar * 4 : 0) + '%"></i></div><b>' + (v ? l.val : '?') + '</b></div>'; }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + quadro + '</div><div class="lado-l">' + FM.ex('pl', LIGA_PL)
    + (todos ? '<div class="pergunta vd ja"><small>SAY IT AS A CLEFT</small><h2>Hands-free phones slowed drivers too. Why?</h2></div>' + mostra('plc', 'It wasn’t the phone in their hands that slowed them. It was the conversation.', 1) : '') + '</div></div>';
};

R.falta = function (c) {
  return cab(c) + FM.ex('ft', { formato: 'erro', titulo: 'Six headlines are broken. Find the broken part. Say the fix.', itens: ERRO_FALTA, regra: PRESA_FALTA });
};

R.tribunal = function (c) {
  return cab(c) + FM.ex('tb', ESC_CLAIMS);
};

R.voz = function (c) {
  var ouviu = (S.ouviu || {})['a2.mp3'], r = ((S.fq || {}).vz || {}).r || {};
  var todos = VOZ.every(function (x, i) { return r[i] != null && (r[i] === 't') === (x[1] === 'fica'); });
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="cf-ouve vd"><div class="toca-linha">' + tocar('a2.mp3') + '<b>A SPEAKER ON STAGE</b></div>' + transcricao('a2.mp3', TR['a2.mp3']) + '</div>'
    + (todos ? ABERTAS2.map(function (a, i) { return '<div class="pergunta vd ja"><small>SAY IT · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('vza' + i, a.h, 1); }).join('') : '') + '</div>'
    + '<div class="lado-l">' + (ouviu ? FM.ex('vz', VM_VOZ) : '<p class="dica-aluno">Play it first. Don’t play it as a joke: it should sound convincing.</p>') + '</div></div>';
};

R.debate = function (c) {
  var e = S.db, n = e.n;
  if (!e.lado) return cab(c) + '<div class="foco"><div class="cf-mocao vd"><small>THE MOTION</small><b>Multitasking is a myth.</b></div><div class="cf-dois">' + [['for', 'FOR · IT’S A MYTH'], ['against', 'AGAINST · IT’S REAL']].map(function (o) { return '<button type="button" class="versao grande-v" data-a="db-l" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div><p class="dica-aluno" style="text-align:center">Choose your side. Your teacher takes the other.</p></div>';
  var fim = n >= DEB.length, lado = (n >= 2) ? (e.lado === 'for' ? 'against' : 'for') : e.lado;
  var contas = '<div class="cf-contas">' + FORMAS.map(function (f) { return '<button type="button" class="cf-conta" data-a="db-f" data-v="' + f[0] + '"><b>' + (e.conta[f[0]] || 0) + '</b><span>' + f[1] + '</span></button>'; }).join('') + DEBERR.map(function (f) { return '<button type="button" class="cf-conta erro" data-a="db-e" data-v="' + f[0] + '"><span>' + f[1] + '</span></button>'; }).join('') + '</div>';
  if (fim) return cab(c) + contas + '<div class="foco"><div class="pergunta vd"><small>THE DEBATE</small><h2>Two sides, one swap, and every point with the focus where you wanted it.</h2></div></div>';
  var r = DEB[n];
  return cab(c) + trilha(DEB, n) + '<div class="foco"><div class="cf-mocao vd"><small>YOU ARGUE · ' + (lado === 'for' ? 'FOR: IT’S A MYTH' : 'AGAINST: IT’S REAL') + (r.troca ? ' · SWAPPED' : '') + '</small><b>' + r.q + '</b><span>' + r.apoio + '</span></div>'
    + (e.erro ? '<p class="recusa" style="text-align:center">' + DEBERR.filter(function (f) { return f[0] === e.erro; })[0][2] + '</p>' : '')
    + FM.ex('dbT' + n, { formato: 'cronometro', segundos: 45, titulo: 'Your turn · 45 seconds' }) + '<p class="so-prof dica-aluno" style="text-align:center">Tap each shape you hear. Answer hard.</p>' + contas
    + '<div style="text-align:center"><button type="button" class="btn" data-a="db-prox">' + (n === 1 ? 'Swap sides' : 'Next round') + '</button></div></div>';
};

R.fim = function (c) {
  var perda = S.ct.perda || 'the thread';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'What I lost was ' + perda + ', not …\nIt wasn’t … that …\nWhat surprised me was …', 'What you lost',
    ['It wasn’t', 'It was', 'that', 'What I lost was', 'What surprised me was'], ['WHAT YOU LOST, IN FOCUS', 'What you lost in scene I, with what it was NOT; the claim that surprised you; one sentence about your own focus.'])
    + '<div class="lado-fim">' + visor('<p class="cf-frase"><span class="fora">It wasn’t the time that you lost.</span> <span class="dentro">What you lost was ' + perda + '.</span></p>', 'FOCUS')
    + '<div class="grande vd"><span><u>It is / was X that …</u> · the focus in the middle</span><span><u>What … is / was X</u> · the focus at the end</span><span><u>The thing that …</u> · the escape hatch</span><span>not <s>Was the conversation that …</s>, not <s>It was the phone what …</s></span></div>'
    + mostra('fim', 'What I lost was the thread, not the time.<br>It wasn’t a study that the 23 minutes came from. It was interviews.<br>What surprised me was the self-rating: sixty-three.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ct-f'] = function (b, n) { S.ct.fase = n; };
TOQUES['ct-a'] = function (b, n, v) { S.ct.achou[S.ct.n] = v; S.ct.n++; S.ct.fase = 0; };
TOQUES['ct-p'] = function (b, n, v) { S.ct.perda = v; };
TOQUES.fc = function (b, n, v) { S.fc.parte = v; S.fc.vistos[v] = 1; };
TOQUES['fc-prox'] = function () { S.fc = { n: S.fc.n + 1, parte: '', vistos: {} }; };
TOQUES['db-l'] = function (b, n, v) { S.db.lado = v; };
TOQUES['db-f'] = function (b, n, v) { S.db.conta[v] = (S.db.conta[v] || 0) + 1; S.db.erro = ''; };
TOQUES['db-e'] = function (b, n, v) { S.db.erro = v; };
TOQUES['db-prox'] = function () { S.db.n++; S.db.erro = ''; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G7 · uma cena curta nova (k: gx) antes de moldes.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'vira', titulo: 'Plain sentence, then focus. Watch the words move.',
  frases: [
    { de: ['*The phone', 'distracted', 'the drivers', '.'], para: ['+It was', '*the phone', '+that', 'distracted', 'the drivers', '.'], d: 'The part in focus goes after It was. That brings back the rest.' },
    { de: ['*Dr. Lee', 'ran', 'the study', '.'], para: ['+It was', '*Dr. Lee', '+who', 'ran', 'the study', '.'], d: 'A person: who. The same move.' },
    { de: ['I', 'lost', '*my focus', '.'], para: ['+What', 'I', 'lost', '+was', '*my focus', '.'], d: 'The other shape: What + the rest + was + the part in focus.' }
  ],
  notaBotao: 'What moves?',
  nota: 'Two shapes, one job: put the focus on one part. <b>It was … that / who …</b> and <b>What … was …</b>. The part in focus goes after <b>was</b>. Never forget the <b>It</b>: not “Was the phone that …”.',
  pergunta: 'Your turn. Flip it out loud, then check.',
  treino: [
    { de: 'The noise broke my focus.', r: '<b>It was the noise that</b> broke my focus.' },
    { de: 'Sara found the mistake.', r: '<b>It was Sara who</b> found the mistake.' },
    { de: 'I needed a quiet room.', r: '<b>What</b> I needed <b>was</b> a quiet room.' },
    { de: 'The tests started at 9 AM.', r: '<b>It was at 9 AM that</b> the tests started.' }
  ],
  uso: { p: 'Your turn. Something that went wrong today. Put the focus on what really caused it.', molde: ['It wasn’t …, it was …', 'What I lost was …'], ex: 'It wasn’t the traffic. It was my phone that made me late. What I lost was an hour.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_vira', GX_EXPLICA); };
