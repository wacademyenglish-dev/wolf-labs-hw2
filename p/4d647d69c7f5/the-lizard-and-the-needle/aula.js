/* ============================================================
   THE LIZARD AND THE NEEDLE · THE FOUR LEVERS · LIVE CLASS  06/10/2026
   Main series B1 · make / let + pessoa + verbo (sem to) · help +
   pessoa + (to) verbo · stop + pessoa + FROM + -ing. Erros: "makes me
   to feel", "lets me to eat", "stops me to eat", "stops me from eat",
   "helps me eating", "letted".
   O MUNDO (da aula velha, CLIL): a caneta para perder peso. O hormônio
   do intestino (GLP-1), a enzima que o corta em dois minutos, o "food
   noise" de quem usa, o que acontece quando se para (327 pessoas, dois
   terços voltam, e ainda mais leves um ano depois), e a origem: uma
   molécula no veneno de um lagarto do deserto, 1992. Não é conselho
   médico. Três gravações mantidas (c1–c3), conferidas no faster-whisper
   em 06/10: batem (o modelo ouviu "wait" onde a voz diz "weight").
   A CARA: o PAINEL DE QUATRO ALAVANCAS em aço escuro — MAKE âmbar, LET
   ciano, HELP verde, STOP vermelho — e embaixo a TIRA DO MOLDE: quem ·
   alavanca · quem recebe · o encaixe (∅ / (to) / from) · o verbo. A
   alavanca errada volta com um tranco. O frio do laboratório vira o
   ocre do deserto no fim.
   Fila: FILA-LIVE-386.md · 105.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'lagarto' },
  { k: 'geladeira', est: 'o', min: 7, img: 'cozinha', rot: 'I · The Fridge Poll', t: 'Before the science: you and food.', p: 'Five notes on the fridge. Tap one, answer out loud, then the follow-up.' },
  { k: 'sinal', est: 'l', min: 7, img: 'bancada', rot: 'II · The Two-Minute Signal', t: 'A researcher explains why your own hormone is useless as a medicine.', p: 'Listen once. Four questions. Then one sentence with a lever.' },
  { k: 'gx', est: 'f', min: 4, img: 'caneta', rot: 'III · The Levers in Blocks', t: 'The lever, the person, the action.', p: 'Read the blocks out loud. Notice what comes after the person. Then build a sentence and say your own.' },
  { k: 'alavancas', est: 'f', min: 6, img: 'caneta', rot: 'IV · The Four Levers', t: 'Four levers, four molds. Each one changes what comes after the person.', p: 'Read who, the lever, whom and the action. Say the sentence. Your teacher taps what they heard.' },
  { k: 'cadeia', est: 'o', min: 7, img: 'deserto', rot: 'V · The Mechanism Chain', t: 'From your plate to a desert in 1992. Six links.', p: 'Read what happens. Choose the lever. Then say the whole sentence.' },
  { k: 'ruido', est: 'l', min: 7, img: 'cozinha', rot: 'VI · Food Noise', t: 'A person who uses the pen describes the strangest effect.', p: 'Listen once. Three questions, then two about you.' },
  { k: 'mito', est: 'f', min: 6, extra: 1, img: 'caneta', rot: 'VII · Myth or Mechanism?', t: 'Six things people say about the pen. Which are true?', p: 'Read it out loud and decide. If it’s a myth, say the true sentence.' },
  { k: 'curva', est: 'l', min: 7, extra: 1, img: 'frasco', rot: 'VIII · When People Stop', t: 'A doctor talks about a study: what happens when people stop the pen.', p: 'Listen once. Four questions. The curve appears as you answer.' },
  { k: 'painel', est: 'o', min: 7, extra: 1, img: 'bancada', rot: 'IX · The Panel', t: 'Should the pen be sold to everyone, without a doctor?', p: 'Choose your side. Your teacher plays four people. Answer each one with two different levers.' },
  { k: 'regras', est: 'o', min: 7, extra: 1, img: 'cozinha', rot: 'X · Your Own Rules', t: 'No science now. Your rules, your family, your habits.', p: 'Four questions. Answer, then the follow-up. The last one, you ask.' },
  { k: 'fim', est: 'w', min: 6, img: 'lagarto', rot: 'XI · Close the Leaflet', t: 'The leaflet closes. Now you write your own.', p: 'Explain the pen in four sentences, one lever each. It goes to your My notes.' }
];

var TR = {
  'c1.mp3': 'Your own GLP-1 is gone almost as fast as it arrives. An enzyme in your blood cuts it in about two minutes, so by the time it could be useful as a medicine, it has already been taken apart. That was the wall for years. You cannot inject something that disappears before it works. What changed was not a better idea about the hormone. What changed was finding a version of it that the enzyme could not cut.',
  'c2.mp3': 'People call it food noise. It is not hunger. Hunger comes and goes, and you can answer it. This was a conversation that never stopped: what is in the kitchen, what I ate yesterday, what I am allowed to have, what that makes me. Two weeks in, I noticed I had walked past the kitchen without the conversation starting. That is the part nobody warned me about. Not the weight. The quiet.',
  'c3.mp3': 'Three hundred and twenty-seven people came off the drug and were followed for a year. On average, about two thirds of the weight they had lost came back. I want to be careful about how that gets read. It does not mean the treatment failed, and it does not mean those people failed. It means the drug was doing something continuously, and when it stopped, the thing it was doing stopped too. Blood pressure and cholesterol drifted back the same way. And a year later that group was still lighter than when they started. Both things are true at once.'
};

/* as quatro alavancas: cor, o encaixe depois da pessoa, o que fazem */
var LEV = {
  make: { c: '#ffb15c', enc: '∅', verbo: 'verb', faz: 'FORCES' },
  let: { c: '#6fd3e8', enc: '∅', verbo: 'verb', faz: 'ALLOWS' },
  help: { c: '#8fd9a2', enc: '(to)', verbo: 'verb', faz: 'MAKES IT EASIER' },
  stop: { c: '#ff7a6e', enc: 'from', verbo: '-ing', faz: 'BLOCKS' }
};
var LEVS = ['make', 'let', 'help', 'stop'];

var GELADEIRA = [
  { k: 'HUNGRY', q: 'What makes you hungry, even when you’ve just eaten?', fup: 'When does it happen?', st: ['… makes me hungry.', 'The smell of … makes me …'], pal: ['makes me', 'smell', 'bored'], ex: 'Watching cooking videos makes me hungry, every time.' },
  { k: 'NIGHT', q: 'What stops you from snacking at night?', fup: 'Does it always work?', st: ['… stops me from snacking.', 'Nothing stops me from …'], pal: ['stops me from', 'brushing my teeth'], ex: 'Brushing my teeth early stops me from snacking.' },
  { k: 'FULL', q: 'What helps you stop eating when you’re full?', fup: 'Is that easy for you?', st: ['… helps me stop.', 'Eating slowly helps me …'], pal: ['helps me', 'slowly', 'water'], ex: 'Eating slowly helps me notice that I’m full.' },
  { k: 'RULES', q: 'What food did your parents never let you eat?', fup: 'Do you eat it now?', st: ['They never let me eat …', 'They made me eat …'], pal: ['let me', 'made me'], ex: 'They never let me eat cereal for dinner.' },
  { k: 'THE PEN', q: 'Have you heard about the weight-loss pen? What do people say about it?', fup: 'Would you try it? Why?', st: ['People say it makes you …', 'I’ve heard it stops you from …'], pal: ['makes you', 'stops you from'], ex: 'People say it makes you forget about food.' }
];

var Q_SINAL = [
  { q: 'How long does your own GLP-1 last in your blood?', op: ['About two minutes', 'About two hours', 'About two days'] },
  { q: 'What cuts it?', op: ['An enzyme in the blood', 'The stomach', 'Insulin'] },
  { q: 'What was “the wall” for years?', op: ['You can’t inject something that disappears before it works', 'The hormone made people sick', 'Nobody knew the hormone existed'] },
  { q: 'What changed?', op: ['They found a version the enzyme couldn’t cut', 'They had a better idea about the hormone', 'They made the enzyme stronger'] }
];

var ALAV = [
  { lev: 'make', quem: 'the hormone', alvo: 'you', acao: 'feel full', ok: 'The hormone makes you feel full.', trap: [['The hormone makes you to feel full.', 'to'], ['The hormone makes you feeling full.', 'ing']] },
  { lev: 'stop', quem: 'an enzyme', alvo: 'the hormone', acao: 'work', ok: 'An enzyme stops the hormone from working.', trap: [['An enzyme stops the hormone to work.', 'stopto'], ['An enzyme stops the hormone from work.', 'frombase']] },
  { lev: 'help', quem: 'GLP-1', alvo: 'the pancreas', acao: 'release insulin', ok: 'GLP-1 helps the pancreas release insulin.', trap: [['GLP-1 helps the pancreas releasing insulin.', 'helping'], ['GLP-1 help the pancreas release insulin.', 's']], nota: 'helps the pancreas TO release is right, too.' },
  { lev: 'let', quem: 'the enzyme', alvo: 'the signal', acao: 'last two minutes', ok: 'The enzyme lets the signal last two minutes.', trap: [['The enzyme lets the signal to last two minutes.', 'to'], ['The enzyme let the signal last two minutes.', 's']] },
  { lev: 'make', quem: 'the pen', alvo: 'the stomach', acao: 'empty slowly', ok: 'The pen makes the stomach empty slowly.', trap: [['The pen makes the stomach to empty slowly.', 'to'], ['The pen makes the stomach emptying slowly.', 'ing']] },
  { lev: 'help', quem: 'the pen', alvo: 'people', acao: 'eat less', ok: 'The pen helps people eat less.', trap: [['The pen helps people eating less.', 'helping'], ['The pen helps to people eat less.', 'ordem']], nota: 'helps people TO eat less is right, too.' },
  { lev: 'stop', quem: 'the quiet', alvo: 'me', acao: 'think about food all day', ok: 'The quiet stops me from thinking about food all day.', trap: [['The quiet stops me to think about food all day.', 'stopto'], ['The quiet stops me from think about food all day.', 'frombase']] },
  { lev: 'let', quem: 'my doctor', alvo: 'me', acao: 'use the pen for a year', ok: 'My doctor lets me use the pen for a year.', trap: [['My doctor lets me to use the pen for a year.', 'to'], ['My doctor lets me using the pen for a year.', 'ing']] }
];
var NOTA = {
  to: 'make / let + person + verb. No TO.', ing: 'make / let + person + verb. Not -ing.', stopto: 'stop + person + FROM + -ing.',
  frombase: 'After FROM, the verb takes -ing.', helping: 'help + person + (to) verb. Not -ing.', s: 'He, she, it: makes, lets, helps, stops.', ordem: 'help + PERSON + verb: helps people eat.'
};

var CADEIA = [
  { de: 'FOOD', lev: 'make', alt: ['help'], sig: 'When food arrives, the gut has no choice: it releases GLP-1.', a: 'Food ', b: ' your gut release GLP-1.', ok: 'Food makes your gut release GLP-1.' },
  { de: 'GLP-1', lev: 'help', alt: ['make'], sig: 'GLP-1 makes the job easier: the pancreas releases more insulin.', a: 'GLP-1 ', b: ' your pancreas release insulin.', ok: 'GLP-1 helps your pancreas release insulin.' },
  { de: 'GLP-1', lev: 'make', sig: 'The stomach has no choice: it empties slowly.', a: 'It also ', b: ' your stomach empty slowly.', ok: 'It also makes your stomach empty slowly.' },
  { de: 'GLP-1', lev: 'let', sig: 'The signal gives the brain permission: now it can know.', a: 'And it ', b: ' your brain know you’re full.', ok: 'And it lets your brain know you’re full.' },
  { de: 'THE ENZYME', lev: 'stop', sig: 'The enzyme blocks it: GLP-1 can’t keep working.', a: 'But an enzyme ', b: ' GLP-1 from working after two minutes.', ok: 'But an enzyme stops GLP-1 from working after two minutes.' },
  { de: 'THE LIZARD', lev: 'let', sig: 'In 1992, a molecule from a lizard gave the signal permission to last.', a: 'In 1992, a molecule in a lizard’s venom ', b: ' the signal last for hours.', ok: 'In 1992, a molecule in a lizard’s venom let the signal last for hours.', passado: 1 }
];

var Q_RUIDO = [
  { q: 'What is “food noise” for this speaker?', op: ['A conversation about food that never stopped', 'Being very hungry all the time', 'The sound of the kitchen at night'] },
  { q: 'What did the speaker notice after two weeks?', op: ['They walked past the kitchen and the conversation didn’t start', 'They had lost two kilos', 'They stopped cooking'] },
  { q: 'What surprised the speaker most?', op: ['The quiet', 'The weight', 'The price'] }
];
var BOLHAS = ['What’s in the kitchen?', 'What did I eat yesterday?', 'Am I allowed to have that?', 'What does that make me?'];

var MITOS = [
  { t: 'The pen makes you lose weight without eating less.', v: 'mito', fix: 'It helps you eat less, and that makes you lose weight.' },
  { t: 'It makes your stomach empty more slowly.', v: 'mec' },
  { t: 'It stops your body from absorbing fat.', v: 'mito', fix: 'It doesn’t block fat. It makes you feel full sooner.' },
  { t: 'Your own GLP-1 stays in your blood for hours.', v: 'mito', fix: 'An enzyme stops it from working after about two minutes.' },
  { t: 'It helps your pancreas release insulin when you eat.', v: 'mec' },
  { t: 'The idea for the medicine came from a lab, not from nature.', v: 'mito', fix: 'It started with a molecule from a lizard’s venom.' }
];

var Q_CURVA = [
  { q: 'How many people came off the drug in the study?', op: ['327', '237', '3,027'] },
  { q: 'On average, how much of the lost weight came back?', op: ['About two thirds', 'All of it', 'About one third'] },
  { q: 'What does the doctor say this means?', op: ['The drug was working all the time; when it stopped, its effect stopped', 'The treatment failed', 'The people failed'] },
  { q: 'A year later, was the group lighter or heavier than at the start?', op: ['Still lighter', 'Heavier', 'Exactly the same'] }
];

var PAPEIS = [
  { k: 'THE DOCTOR', fala: 'If we let everyone buy it, people will use it without any tests. That can make people sick.' },
  { k: 'THE PATIENT', fala: 'This pen stopped me from thinking about food all day. Why should anyone stop me from buying it?' },
  { k: 'THE MINISTER', fala: 'If the government helps everyone pay for it, that stops us from paying for schools.' },
  { k: 'THE BAKER', fala: 'If half the town uses it, it will stop people from buying my bread. Who helps me then?' }
];
var VEREDITO = ['SELL IT TO EVERYONE', 'ONLY WITH A DOCTOR', 'DON’T SELL IT AT ALL'];

var REGRAS = [
  { q: 'What did your parents make you eat when you were a child?', fup: 'Did you like it then? Do you like it now?', st: ['They made me eat …', 'My mother made me …'], ex: 'They made me eat liver every Sunday.' },
  { q: 'What do you let yourself eat on the weekend?', fup: 'And what stops you from eating it every day?', st: ['I let myself eat …', 'On Saturdays I let myself …'], ex: 'I let myself have pizza on Friday night.' },
  { q: 'What helps you relax after a long day?', fup: 'Who helps you do it?', st: ['… helps me relax.', 'A walk helps me …'], ex: 'A hot shower helps me relax.' },
  { q: 'Your turn. Ask your teacher: “What makes you hungry at night?”', fup: 'Now ask what stops them from snacking.', st: ['What makes you …?', 'What stops you from …?'], ex: 'What makes you hungry at night?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {}, q: {},
  gel: { sel: -1, foi: {} }, al: { n: 0, esc: -1, volta: 0 }, ch: { n: 0, esc: '' }, mi: { n: 0, esc: '' },
  pa: { lado: '', r: -1, ouv: {}, ver: '' }, reg: { n: 0, foi: {} } };

/* o painel: quatro alavancas; uma acesa, uma que volta */
function painel(acesa, volta, mini) {
  return '<div class="painel' + (mini ? ' mini' : '') + '">' + LEVS.map(function (k) {
    return '<div class="alav' + (k === acesa ? ' up' : '') + (k === volta ? ' volta' : '') + '" style="--lc:' + LEV[k].c + '"><span class="trilho-a"><i></i></span><b>' + k.toUpperCase() + '</b><small>' + LEV[k].faz + '</small></div>';
  }).join('') + '</div>';
}
/* a tira do molde: quem · alavanca · quem recebe · encaixe · verbo */
function molde(lev, quem, alvo, acao) {
  var L1 = LEV[lev], forma = lev === 'stop' && acao ? acao.replace(/^(\w+)/, function (v) { return v.replace(/e$/, '') + 'ing'; }) : acao;
  return '<div class="molde" style="--lc:' + L1.c + '"><span><small>WHO</small>' + (quem || '…') + '</span><span class="m-lev"><small>LEVER</small>' + lev + 's</span><span><small>WHOM</small>' + (alvo || '…') + '</span><span class="m-enc"><small>THEN</small>' + L1.enc + '</span><span><small>' + L1.verbo.toUpperCase() + '</small>' + (forma || '…') + '</span></div>';
}

/* uma pergunta de cada vez, com a resposta certa sempre na posição 0 da lista */
function quiz(k, lista, fala1) {
  var e = S.q[k] || (S.q[k] = { n: 0, esc: -1 }), n = e.n;
  if (n >= lista.length) return '';
  var x = lista[n], ok = e.esc === 0;
  return '<div class="quiz vd"><small>QUESTION ' + (n + 1) + ' OF ' + lista.length + '</small><h3>' + x.q + '</h3><div class="ops">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="op' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-c="' + k + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<button type="button" class="btn" data-a="qz-prox" data-c="' + k + '">' + (n < lista.length - 1 ? 'Next question' : 'Done') + '</button>' : e.esc > 0 ? '<p class="recusa">Play it again and listen for that part.</p>' : '<p class="dica-aluno">Answer out loud first. Then tap.</p>') + '</div>';
}
function quizFeito(k, lista) { return (S.q[k] || {}).n >= lista.length; }
function quizN(k) { return (S.q[k] || { n: 0 }).n; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE PATIENT LEAFLET</span><h1>The Lizard <i>and the</i> <b>Needle</b></h1>'
    + '<p class="sub">The most talked-about pen in the world started in the mouth of a desert lizard. Here’s how it works, in <b>four verbs</b>.</p>'
    + '<div class="chipsx"><span class="pilula">make · let + verb</span><span class="pilula">help + (to) verb</span><span class="pilula">stop + from + -ing</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the leaflet</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + painel('make') + molde('make', 'The hormone', 'you', 'feel full') + '<p class="bula">NOT MEDICAL ADVICE · THE LANGUAGE OF A MECHANISM</p></div></div>';
};

R.geladeira = function (c) { return '<div class="geladeira-m">' + cartasPessoais(c, GELADEIRA, S.gel, 'gel', ['Yes, …', 'No, …', 'It depends …']) + '</div>'; };

R.sinal = function (c) {
  var ouviu = (S.ouviu || {})['c1.mp3'], n = quizN('sinal'), feito = quizFeito('sinal', Q_SINAL), fr = feito ? 1 : n / Q_SINAL.length;
  var anel = '<div class="anel vd"><svg viewBox="0 0 120 120"><circle class="a-fundo" cx="60" cy="60" r="50"/><circle class="a-vivo" cx="60" cy="60" r="50" style="stroke-dashoffset:' + Math.round(314 * fr) + '"/></svg><div class="a-txt"><b>' + (feito ? '0:00' : ['2:00', '1:30', '1:00', '0:30'][n]) + '</b><small>YOUR OWN GLP-1</small></div></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('c1.mp3') + '<b>THE RESEARCHER</b></div>' + transcricao('c1.mp3', TR['c1.mp3']) + '</div>' + anel + '</div>'
    + '<div class="lado-l">' + (!ouviu ? '<div class="pergunta vd ja"><h2>Your body makes a hormone that tells you you’re full. Why can’t a doctor just inject more of it? Guess first.</h2></div><p class="dica-aluno">Play the researcher.</p>'
      : !feito ? quiz('sinal', Q_SINAL)
        : '<div class="pergunta vd ja"><small>ONE SENTENCE · THE STOP LEVER</small><h2>What does the enzyme do to the hormone?</h2></div>' + painel('stop', '', 1) + fala('si', ['The enzyme stops the hormone from …', 'It stops the signal from …'], ['stops', 'from', 'working', 'lasting']) + mostra('si', 'The enzyme stops the hormone from working.', 1)) + '</div></div>';
};

R.alavancas = function (c) {
  var e = S.al, n = e.n, fim = n >= ALAV.length;
  if (fim) return cab(c) + trilha(ALAV, n) + '<div class="foco">' + painel('') + '<div class="pergunta vd"><small>EIGHT PULLS</small><h2><b class="c-make">make</b> / <b class="c-let">let</b> + verb · <b class="c-help">help</b> + (to) verb · <b class="c-stop">stop</b> + from + -ing. Now one about your own life, with each lever.</h2></div></div>';
  var x = ALAV[n], vers = [[x.ok, 'ok']].concat(x.trap), esc = e.esc, ok = esc === 0, errou = esc > 0;
  return cab(c) + trilha(ALAV, n) + '<div class="mesa-c"><div class="lado-l">' + painel(ok ? x.lev : errou ? '' : x.lev, errou ? x.lev : '') + molde(x.lev, x.quem, x.alvo, ok ? x.acao : '') + '</div>'
    + '<div class="lado-l"><div class="pede vd"><small>CARD ' + (n + 1) + ' OF 8 · ' + x.lev.toUpperCase() + '</small><b>' + x.quem + ' → ' + x.alvo + ' → ' + x.acao + '</b></div><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">'
    + ordem(vers.map(function (v, i) { return [v[0], i]; }), n + 2).map(function (v) { return '<button type="button" class="versao' + (esc === v[1] ? (v[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="al" data-n="' + v[1] + '">' + v[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">' + (x.nota || 'That’s the mold.') + '</p><div><button type="button" class="btn" data-a="al-prox">Next card</button></div>' : errou ? '<p class="recusa">The lever sprang back. ' + NOTA[vers[esc][1]] + ' Say it again.</p>' : '<p class="dica-aluno">Say the sentence out loud.</p>') + '</div></div>';
};

R.cadeia = function (c) {
  var e = S.ch, n = e.n, fim = n >= CADEIA.length;
  var elos = '<div class="cadeia">' + CADEIA.map(function (x, i) { return '<span class="elo' + (i < n ? ' feito' : i === n ? ' on' : '') + '" style="--lc:' + (i < n ? LEV[x.lev].c : 'var(--fio2)') + '"><small>' + (i + 1) + '</small>' + x.de + (i < n ? '<i>' + x.lev + (x.passado ? '' : 's') + '</i>' : '') + '</span>'; }).join('<b class="seta">→</b>') + '</div>';
  if (fim) return cab(c) + elos + '<div class="mesa-c"><div class="lado-l"><div class="lagarto vd"><img src="' + img('lagarto') + '" alt=""><div><small>THE GILA MONSTER · 1992</small><p>It lives in the deserts of the southwestern United States and eats only a few big meals a year. In 1992 a researcher described a molecule in its venom, <b>exendin-4</b>. It works like GLP-1, but the enzyme can’t cut it. The first medicine of this family was made from it.</p></div></div><div class="pergunta vd ja"><small>NOW WITHOUT LOOKING</small><h2>Tell the whole chain in four sentences: make, let, help, stop from.</h2></div></div>'
    + '<div class="lado-l">' + follow('THE LIZARD', 'Why is a lizard that eats only a few times a year interesting for this story?', ['Its body has to …', 'It helps the lizard …', 'Maybe it stops the lizard from …'], ['meal', 'hungry', 'last'], 'lz') + '</div></div>';
  var x = CADEIA[n], ok = e.esc && (e.esc === x.lev || (x.alt || []).indexOf(e.esc) >= 0);
  return cab(c) + elos + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>LINK ' + (n + 1) + ' OF 6 · WHAT HAPPENS</small><b>' + x.sig + '</b></div><div class="balao vd"><p>' + x.a + '<u style="--lc:' + (ok ? LEV[e.esc].c : 'var(--t3)') + '">' + (ok ? e.esc + (x.passado ? '' : 's') : '_____') + '</u>' + x.b + '</p></div>' + (ok && x.passado ? '<p class="pista">1992 is the past, and the past of LET is LET. Not “letted”.</p>' : '') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">CHOOSE THE LEVER</h5><div class="quatro-l">' + LEVS.map(function (k) { return '<button type="button" class="lev-b' + (e.esc === k ? (ok ? ' certo' : ' errado') : '') + '" style="--lc:' + LEV[k].c + '" data-a="ch" data-v="' + k + '"><b>' + k.toUpperCase() + '</b><small>' + LEV[k].faz + '</small></button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">Say the whole sentence: ' + x.ok + '</p><div><button type="button" class="btn" data-a="ch-prox">Next link</button></div>' : e.esc ? '<p class="recusa">Read what happens again: does it force, allow, make it easier, or block?</p>' : '') + '</div></div>';
};

R.ruido = function (c) {
  var ouviu = (S.ouviu || {})['c2.mp3'], n = quizN('ruido'), feito = quizFeito('ruido', Q_RUIDO), some = feito ? 4 : n;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('c2.mp3') + '<b>THE PERSON WITH THE PEN</b></div>' + transcricao('c2.mp3', TR['c2.mp3']) + '</div>'
    + '<div class="bolhas">' + BOLHAS.map(function (b, i) { return '<span class="bolha b' + i + (i < some ? ' some' : '') + '">' + b + '</span>'; }).join('') + '</div></div>'
    + '<div class="lado-l">' + (!ouviu ? '<div class="pergunta vd ja"><h2>Is there a difference between being hungry and thinking about food? Guess first.</h2></div><p class="dica-aluno">Play the recording.</p>'
      : !feito ? quiz('ruido', Q_RUIDO)
        : follow('ABOUT YOU', 'Is there a noise like this in your life, about food, work or your phone? What stops you from listening to it?', ['… stops me from listening to it.', 'Nothing stops me from …', '… helps me turn it down.'], ['stops me from', 'helps me', 'makes me'], 'ru')) + '</div></div>';
};

R.mito = function (c) {
  var e = S.mi, n = e.n, fim = n >= MITOS.length;
  if (fim) return cab(c) + trilha(MITOS, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR MYTHS, TWO MECHANISMS</small><h2>Every true sentence needed a lever. Now a myth you’ve heard, and the true sentence.</h2></div></div>';
  var x = MITOS[n], ok = e.esc === x.v;
  return cab(c) + trilha(MITOS, n) + '<div class="foco"><div class="balao vd mito-b"><small>PEOPLE SAY</small><p>“' + x.t + '”</p></div><div class="dois-m">'
    + [['mito', 'MYTH'], ['mec', 'MECHANISM']].map(function (o) { return '<button type="button" class="versao grande-v' + (e.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="mi" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (ok ? (x.fix ? '<div class="balao vd ok-b"><small>THE TRUE SENTENCE · SAY IT</small><p>' + x.fix + '</p></div>' : '<p class="aprova" style="text-align:center">That’s how it really works. Say it again, slowly.</p>') + '<div style="text-align:center"><button type="button" class="btn" data-a="mi-prox">Next</button></div>'
      : e.esc ? '<p class="recusa" style="text-align:center">' + (x.v === 'mec' ? 'That one is how it really works. Look at the chain again.' : 'Careful: that’s not what the chain says.') + '</p>' : '') + '</div>';
};

R.curva = function (c) {
  var ouviu = (S.ouviu || {})['c3.mp3'], n = quizN('curva'), feito = quizFeito('curva', Q_CURVA), p = feito ? 4 : n;
  var g = '<svg class="graf" viewBox="0 0 420 220" aria-hidden="true"><path class="g-ini" d="M30 40 H400"/><text x="400" y="32" text-anchor="end">START</text>'
    + '<path class="g-l g1" d="M30 40 C90 50 120 150 190 160"/><text x="110" y="190" class="g-t">ON THE PEN</text>'
    + (p >= 1 ? '<text x="30" y="210" class="g-t">327 PEOPLE · ONE YEAR</text>' : '')
    + (p >= 2 ? '<path class="g-l g2" d="M190 160 C250 150 300 100 380 93"/><text x="290" y="150" class="g-t q">2/3 CAME BACK</text>' : '')
    + (p >= 3 ? '<path class="g-sep" d="M190 20 V200"/><text x="196" y="18" class="g-t">THE PEN STOPPED</text>' : '')
    + (p >= 4 ? '<circle cx="380" cy="93" r="6" class="g-p"/><text x="400" y="75" text-anchor="end" class="g-t ok">STILL LIGHTER</text>' : '') + '</svg>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('c3.mp3') + '<b>THE DOCTOR</b></div>' + transcricao('c3.mp3', TR['c3.mp3']) + '</div><div class="graf-c vd">' + g + '</div></div>'
    + '<div class="lado-l">' + (!ouviu ? '<div class="pergunta vd ja"><h2>People use the pen for a year and then stop. What do you think happens?</h2></div><p class="dica-aluno">Play the doctor.</p>'
      : !feito ? quiz('curva', Q_CURVA)
        : follow('THE BIG QUESTION', 'Should people use a medicine like this for their whole life? Why or why not?', ['It makes sense if …', 'What would stop me from … is …', 'It helps people …'], ['for life', 'stop', 'help'], 'cu')) + '</div></div>';
};

R.painel = function (c) {
  var e = S.pa, fechadas = Object.keys(e.ouv).filter(function (r) { return Object.keys(e.ouv[r]).length >= 2; }).length;
  var topo = '<div class="mocao vd"><small>TONIGHT’S MOTION</small><b>Should the pen be sold to everyone, without a prescription?</b><div class="lados">' + [['for', 'YES · SELL IT TO EVERYONE'], ['against', 'NO · ONLY WITH A DOCTOR']].map(function (o) { return '<button type="button" class="versao' + (e.lado === o[0] ? ' on' : '') + '" data-a="pa-lado" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
  if (!e.lado) return cab(c) + '<div class="foco">' + topo + '<p class="dica-aluno" style="text-align:center">Choose a side first.</p></div>';
  var papeis = '<div class="papeis">' + PAPEIS.map(function (p, i) { var f = e.ouv[i] && Object.keys(e.ouv[i]).length >= 2; return '<button type="button" class="papel-b' + (e.r === i ? ' on' : '') + (f ? ' feito' : '') + '" data-a="pa-r" data-n="' + i + '">' + p.k + (f ? ' ✓' : '') + '</button>'; }).join('') + '</div>';
  var corpo = '';
  if (fechadas >= 3) corpo = '<div class="pergunta vd ja"><small>THE PANEL IS OVER</small><h2>Your final answer? Give two reasons, with two different levers.</h2></div><div class="tres-b">' + VEREDITO.map(function (v, i) { return '<button type="button" class="pilula grande-p' + (e.ver === String(i) ? ' certo' : '') + '" data-a="pa-ver" data-v="' + i + '">' + v + '</button>'; }).join('') + '</div>';
  else if (e.r >= 0) { var p = PAPEIS[e.r], ou = e.ouv[e.r] || {};
    corpo = '<div class="balao vd papel-fala"><small>' + p.k + ' SAYS · YOUR TEACHER READS IT</small><p>“' + p.fala + '”</p></div><h5 class="so-prof rot-ouve">TAP EACH LEVER YOU HEAR IN THE ANSWER · TWO CLOSE THE ROUND</h5><div class="quatro-l mini">' + LEVS.map(function (k) { return '<button type="button" class="lev-b' + (ou[k] ? ' certo' : '') + '" style="--lc:' + LEV[k].c + '" data-a="pa-l" data-v="' + k + '"><b>' + k.toUpperCase() + '</b></button>'; }).join('') + '</div>'
      + fala('pa' + e.r, ['If we let everyone …', 'It would stop people from …', 'It helps people …'], ['let', 'make', 'help', 'stop … from']); }
  else corpo = '<p class="dica-aluno">Pick a person. Three rounds close the panel.</p>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + topo + papeis + '<p class="placar">ROUNDS CLOSED · ' + Math.min(fechadas, 3) + ' / 3</p>' + armas([['MAKE', 'It makes me to feel …', 'It makes me feel …', 'make + person + verb'], ['LET', 'They let me to eat …', 'They let me eat …', 'let + person + verb'], ['STOP', 'It stops me to eat …', 'It stops me from eating …', 'stop + from + -ing'], ['HELP', 'It helps me eating …', 'It helps me (to) eat …', 'help + (to) verb']], 'THE CLASSIC MISTAKES · TAP WHEN YOU HEAR ONE') + '</div><div class="lado-l">' + corpo + '</div></div>';
};

R.regras = function (c) { return sequencia(c, REGRAS, S.reg, 'reg', 'Your rules, in four verbs. And now you know what made your teacher hungry.'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Food makes …\nAn enzyme stops …\nA lizard helped …\nMy doctor would let me …', 'Your leaflet',
    ['makes', 'lets', 'helps', 'stops', 'from', 'feel', 'working'], ['YOUR OWN LEAFLET · FOUR SENTENCES, FOUR LEVERS', 'Explain the pen to someone who has never heard of it. Then one sentence about you.'])
    + '<div class="lado-fim">' + painel('', '', 1)
    + '<div class="grande vd"><span><u>make / let</u> + person + verb</span><span><u>help</u> + person + (to) verb</span><span><u>stop</u> + person + <u>from</u> + -ing</span><span>not <s>makes me to</s>, not <s>letted</s></span></div>'
    + mostra('fim', 'Food makes the gut release GLP-1.<br>An enzyme stops the signal from lasting.<br>A lizard helped science find a longer one.<br>My doctor would never let me use it without tests.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.qz = function (b, n, v, c) { S.q[c].esc = n; };
TOQUES['qz-prox'] = function (b, n, v, c) { S.q[c] = { n: S.q[c].n + 1, esc: -1 }; };
TOQUES.al = function (b, n) { S.al.esc = n; };
TOQUES['al-prox'] = function () { S.al = { n: S.al.n + 1, esc: -1 }; };
TOQUES.ch = function (b, n, v) { S.ch.esc = v; };
TOQUES['ch-prox'] = function () { S.ch = { n: S.ch.n + 1, esc: '' }; };
TOQUES.mi = function (b, n, v) { S.mi.esc = v; };
TOQUES['mi-prox'] = function () { S.mi = { n: S.mi.n + 1, esc: '' }; };
TOQUES['pa-lado'] = function (b, n, v) { S.pa.lado = v; };
TOQUES['pa-r'] = function (b, n) { S.pa.r = n; };
TOQUES['pa-l'] = function (b, n, v) { var o = S.pa.ouv[S.pa.r] = S.pa.ouv[S.pa.r] || {}; if (o[v]) delete o[v]; else o[v] = 1; };
TOQUES['pa-ver'] = function (b, n, v) { S.pa.ver = v; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de alavancas.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'Four levers, in blocks. Each block has a job.',
  frases: [
    { b: [['The pen', 'WHO'], ['makes', 'LEVER', 'aux'], ['me', 'WHOM', 'quem'], ['feel', 'ACTION'], ['full', 'HOW']], d: 'make + person + a clean verb.' },
    { b: [['My doctor', 'WHO'], ['lets', 'LEVER', 'aux'], ['me', 'WHOM', 'quem'], ['eat', 'ACTION'], ['pasta', 'WHAT']], d: 'let + person + a clean verb.' },
    { b: [['The pen', 'WHO'], ['helps', 'LEVER', 'aux'], ['me', 'WHOM', 'quem'], ['stop', 'ACTION'], ['snacking', 'WHAT']], d: 'help + person + a verb. The to is optional.' },
    { b: [['The pen', 'WHO'], ['stops', 'LEVER', 'aux'], ['me', 'WHOM', 'quem'], ['from eating', 'FROM + ING', 'acao'], ['at night', 'WHEN']], d: 'stop + person + from + -ing.' }
  ],
  nota: 'After <b>make</b> and <b>let</b>: the person and a clean verb, no to. After <b>help</b>: a verb, with or without to. After <b>stop</b>: <b>from</b> + -ing.',
  monta: { p: 'Build the next line from the leaflet. Then say it.', pecas: [['me', 'WHOM', 'quem'], ['makes', 'LEVER', 'aux'], ['eat less', 'ACTION'], ['The pen', 'WHO']], ordem: [3, 1, 0, 2], outras: [] },
  uso: { p: 'Your turn. Two sentences about people and rules in your life: one with make or let, one with stop.', molde: ['My boss makes me …', 'My mother never lets me …', 'Rain stops me from …'], ex: 'My boss makes me wear a tie. Rain stops me from running outside.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
