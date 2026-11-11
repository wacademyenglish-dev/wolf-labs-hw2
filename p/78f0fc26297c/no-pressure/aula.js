/* ============================================================
   HARRY POTTER · THE LETTERS · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · want / expect / need / ask / tell / would like +
   pessoa + to + verbo (they expect him to win); o negativo (they
   don't want him to go / told him not to go); pronome objeto.
   Erros: wants that I go (que + verbo), expect me going, want he to
   (pronome sujeito), want me go (sem to), wants me not to (no sentido
   de don’t want), told to him, asked that he, would like that you.
   Catálogo WOLFLIX Live (07/10): família FANTASIA, modo CORREIO.
   A tela forte: as cartas chegando pela lareira. Oito envelopes com
   selo de cera; cada frase certa faz uma carta sair voando da lareira
   e abrir na mesa: quem mandou e o que essa pessoa espera do Harry.
   Sem pressão.
   O AQUECIMENTO (aquece.js): o dado. O FECHAMENTO (final.js): o debate.
   O VÍDEO: SJVmeJaS44s (teaser oficial HBO Max da série, 2:37, idade
   0, embed sim). Inglês britânico, aula em americano. Tempos da
   legenda (23/09): 0:02, 0:17, 0:33, 1:00, 1:24, 1:38, 1:55; cada
   momento contado com palavras nossas.
   A CARA: pergaminho escuro, vermelho e ouro de lareira, cera; Cinzel
   já usado na 267, então Pirata One + Spectral. A antiga era o set.
   Fila: FILA-LIVE-386.md · 292.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: o role-play "você é o Harry" com a reviravolta antes; uma
   palavra errada para corrigir, com ▶ nas falas do teaser; depois, ligar a
   pessoa à fala. V: a carta para o Harry (tocar o que querem, esperam, pedem)
   e completar a regra. VI: a mesa de cartas com SEIS envelopes, montar a frase
   com as palavras e tocar Check. VII (era EXTRA, agora essencial): duas cartas,
   o professor escolhe A ou B.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'lareira', rot: 'I · Warm-up and Put It in Order', t: 'Before the trailer: what people expected from you, then a boy under the stairs.', p: 'Answer three questions about your life. Then put four moments of Harry’s story in order and tell it.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Teaser', t: 'Harry Potter. The HBO series teaser.', p: 'Role-play first. Watch the teaser. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'corujas', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'lareira', rot: 'V · Letters in Blocks', t: 'Everybody wants something from Harry.', p: 'Read the blocks out loud. Notice what changes. Then build a sentence and say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'lareira', rot: 'VI · Want Him to Go', t: 'They expect him to win. They don’t want him to fail.', p: 'Tap what people want, expect and ask. Then finish the rule.' },
  { k: 'cartas', est: 'o', min: 7, img: 'lareira', rot: 'VII · The Letters', t: 'Everybody writes to Harry. Read each letter right.', p: 'Build each sentence from the words. Say it. Then tap Check.' },
  { k: 'pressao', est: 'o', min: 5, img: 'corujas', rot: 'VIII · Your Letters', t: 'Two letters for you. The teacher picks.', p: 'The teacher picks A or B. Say what they want you to do.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Debate', t: 'The debate.', p: 'Debate.' }
];

var SERIE = 'Harry Potter', ANO = '2026';
var YT = 'SJVmeJaS44s', DUR = 157;

var ENCARTE = [
  ['The series', '<i>Harry Potter</i> is the new HBO series (2026) from J.K. Rowling’s books. Every season will be one book.'],
  ['The boy', 'Harry lives with his aunt and uncle, who treat him badly. On his eleventh birthday, letters arrive: he is a wizard, and Hogwarts wants him to come.'],
  ['The school', 'At Hogwarts a magic hat puts every first-year in a house. Everybody expects something from Harry, the boy who lived. No pressure.']
];

var ANTES = [
  { q: 'Who expected a lot from you at school?', h: 'My … expected me to …' },
  { q: 'Would you like a school to choose your friends for you?', h: 'No, I wouldn’t like … to …' }
];
var DEPOIS = [
  { q: 'What does the professor expect Harry to do?', h: 'She expects him to …' },
  { q: 'Which house would you like the hat to choose for you?', h: 'I would like it to choose …' }
];

var TRECHOS = [
  { k: 'The Sorting', ini: 0, fim: 16, ouvir: 'What happens before the banquet?', sentido: 'A voice explains that before the first dinner of the year, the first-years will be put into their houses.', gram: 'The school <b>wants</b> them <b>to sit</b> with their house.' },
  { k: 'Summer reading', ini: 16, fim: 30, ouvir: 'Did Ron do the summer reading?', sentido: 'Hermione asks if they loved the summer reading. Ron didn’t know there was any.', gram: 'Hermione <b>expected</b> them <b>to read</b> it.' },
  { k: 'No pressure', ini: 30, fim: 45, ouvir: 'Why is the house so important?', sentido: 'Someone says the house basically decides their whole future. So, no pressure. Harry quietly hopes for a different house.', gram: 'He <b>doesn’t want</b> the hat <b>to choose</b> Slytherin.' },
  { k: 'Work hard', ini: 58, fim: 75, ouvir: 'What does the professor expect from Harry?', sentido: 'A professor tells Harry what she expects: work hard, find what he loves, and make good friends.', gram: 'She <b>expects</b> him <b>to work</b> hard.' },
  { k: 'Prepare them', ini: 115, fim: 135, ouvir: 'Can the teachers protect the students?', sentido: 'Two teachers talk: they can’t protect the children, they can only prepare them.', gram: 'They <b>need</b> the children <b>to be</b> ready.' }
];

var TRAPS = [
  ['Not that', 'She wants that I go.', 'She <b>wants me to go</b>.', 'want / expect + person + to + verb'],
  ['To, not -ing', 'They expect me going.', 'They <b>expect me to go</b>.', 'expect + person + to'],
  ['Me, him, her, them', 'I want he to win.', 'I want <b>him</b> to win.', 'object pronoun after want'],
  ['The negative', 'He wants me not to go.', 'He <b>doesn’t want me to go</b>.', 'don’t want … to (more natural)']
];

/* as cartas: o gesto forte */
var CARTAS = [
  { de: 'Hogwarts', cor: '#7a1b1b', ops: ['Hogwarts wants Harry to come to the school.'], p: 'Hogwarts · want · Harry · come to the school', r: 'Hogwarts <b>wants Harry to come</b> to the school.' },
  { de: 'Aunt Petunia', cor: '#4a4a3a', ops: ['His aunt doesn’t want him to read the letter.'], p: 'His aunt · not want · him · read the letter', r: 'His aunt <b>doesn’t want him to read</b> the letter.' },
  { de: 'Professor McGonagall', cor: '#1d4a2a', ops: ['The professor expects Harry to work hard.'], p: 'The professor · expect · Harry · work hard', r: 'The professor <b>expects Harry to work</b> hard.' },
  { de: 'Ron', cor: '#8a4a1a', ops: ['Ron asked Harry to sit with him.'], p: 'Ron · ask · Harry · sit with him', r: 'Ron <b>asked Harry to sit</b> with him.' },
  { de: 'Madam Hooch', cor: '#1a3a5a', ops: ['The teachers need the students to be ready.'], p: 'The teachers · need · the students · be ready', r: 'The teachers <b>need the students to be</b> ready.' },
  { de: 'Dumbledore', cor: '#3a1a5a', ops: ['Dumbledore told Harry not to be afraid.'], p: 'Dumbledore · tell · Harry · not / be afraid', r: 'Dumbledore <b>told Harry not to be</b> afraid.' }
];
var RECUSA = {
  that: 'Not that + a full sentence: want / expect / need + person + to + verb.',
  to: 'Don’t forget to: want them to do.',
  pron: 'After want: the object pronoun (me, him, her, them).',
  neg: 'The negative: doesn’t want him to read.',
  neg2: 'More natural: doesn’t want the hat to choose.',
  ing: 'Expect + person + to (not -ing).',
  askto: 'Ask + person, no to: asked Harry to sit.',
  tellto: 'Tell + person, no to: told Harry not to be afraid.',
  notbe: 'The negative: not to + verb. not to be afraid.'
};

var CASA = [
  { k: 'Your parents', h: 'What did your parents want you to be?', ex: 'They wanted me to be a doctor!' },
  { k: 'Your boss', h: 'What does your boss expect you to do?', ex: 'She expects me to answer emails fast.' },
  { k: 'Your friends', h: 'What do your friends always ask you to do?', ex: 'They ask me to cook for the parties.' },
  { k: 'Your city', h: 'What would you like your city to change?', ex: 'I would like it to have more parks.' },
  { k: 'Your teacher', h: 'What do you want your teacher to do more?', ex: 'I want you to correct my pronunciation.' },
  { k: 'You', h: 'What do you expect yourself to do this year?', ex: 'I expect myself to read ten books.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>want / expect / need</b> + person + <b>to</b> + verb<br>want <b>him</b> to go · not “want he” · not “that”<br>the negative: <b>doesn’t want him to</b> read<br><b>ask / tell</b> + person + (not) to · no “to” before the person';
/* III · antes: você é o Harry (role-play com reviravolta) */
var VD_TW = { formato: 'twist', titulo: 'Before you watch: you are Harry. You are eleven.', cartoes: [
  ['Your aunt', 'She doesn’t want you to read the letter.'],
  ['The letter', 'Hogwarts wants you to come to the school.'],
  ['You', 'Tell your aunt what you want.']
], twist: 'The twist: a hundred letters fly out of the fireplace. Everybody wants you to read them!', botao: 'Reveal the twist' };
/* III · durante: uma palavra errada, com ▶ nas falas do teaser (legenda-dados.js) */
var VD_ERRO = { formato: 'erro', titulo: 'While you watch: one word is wrong. Say the right one. Tap ▶ to hear it.', itens: [
  { f: 'Did you <u>hate</u> the summer reading?', r: 'love', t: '0:17' },
  { f: 'So, no <u>fun</u>?', r: 'pressure', t: '0:37' },
  { f: 'I <u>hope</u> you to work hard.', r: 'expect', t: '1:02' },
  { f: 'Make a <u>weak</u> friendship.', r: 'solid', t: '1:10' },
  { f: 'I can only <u>protect</u> them.', r: 'prepare', t: '1:56' }
] };
/* III · depois: quem diz? ligar a pessoa à fala */
var VD_LIGA = { formato: 'liga', titulo: 'After the teaser: who says it? Match the person with the line.', ordemDireita: [2, 0, 3, 1], pares: [
  ['The professor', '“I expect you to work hard.”'],
  ['Hermione', '“Did you love the summer reading?”'],
  ['A teacher', '“I can only prepare them.”'],
  ['Harry', '“Not Slytherin, not Slytherin.”']
] };
/* V · a carta para o Harry */
var CARTA_R = { formato: 'carta', carta: { de: 'Dear Harry,', txt: 'Hogwarts [[wants you to come]] to the school. The professor [[expects you to work]] hard. Your aunt [[doesn’t want you to read]] this letter. Ron [[asked you to sit]] with him. The teachers [[need you to be]] ready. And Dumbledore [[told you not to be]] afraid.', assina: 'Everybody (no pressure)' },
  toque: 'Tap what people want, expect and ask', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner.',
  regra: [
    { a: 'want / expect / need + person +', par: ['to + verb', 'that + sentence'], c: 0, b: '(they expect him to win).' },
    { a: 'After want: the pronoun', par: ['he', 'him'], c: 1, b: '(want him to go).' },
    { a: 'The negative: she', par: ['doesn’t want him to read', 'wants him not to read'], c: 0, b: 'it.' },
    { a: 'Ask + person: Ron asked', par: ['to Harry to sit', 'Harry to sit'], c: 1, b: 'with him.' },
    { a: 'Tell + not to: he told Harry', par: ['not to be', 'to not be'], c: 0, b: 'afraid.' }
  ] };
/* VI · montar a frase: cada Check abre uma carta */
var PERG = { formato: 'pergunta', titulo: 'Build the sentence from the words. Say it. Then tap Check.', depoisRot: 'Then ask each other', depois: ['Who wanted you to join a school or a company?', 'Ask the teacher: “What do you want me to do next?”'], itens: CARTAS.map(function (x) { return { p: x.p, r: x.r }; }) };
/* VII · duas cartas: o professor escolhe */
var VD_A = { t: 'A letter from your family', d: 'Your family writes to you. What do they want you to do? What do they expect?', st: ['They want me to …', 'They expect me to …', 'They don’t want me to …'] };
var VD_B = { t: 'A letter from your job', d: 'Your boss writes to you. What does he need you to do? What did he ask you to do?', st: ['He needs me to …', 'He asked me to …', 'He told me not to …'] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, ct: { n: 0, esc: -1 } };

/* a tira de filme: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
function onda(marcas, sel, acao) {
  var ims = []; L.forEach(function (x) { if (x.img && ims.indexOf(x.img) < 0) ims.push(x.img); });
  var fr = (marcas || []).map(function (x, i) {
    var t = Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2);
    var bg = ' style="--bg:url(\'' + img(ims[(i + 1) % ims.length]) + '\')"';
    var dentro = '<i class="tq-img"></i><b>' + t + '</b><span>' + x.k + '</span>';
    return acao ? '<button type="button" class="tq' + (sel === i ? ' on' : '') + '"' + bg + ' data-a="' + acao + '" data-n="' + i + '">' + dentro + '</button>' : '<span class="tq"' + bg + '>' + dentro + '</span>';
  }).join('');
  return '<div class="tira' + (acao ? ' grande' : '') + '" aria-hidden="' + (acao ? 'false' : 'true') + '"><div class="tira-furos"></div><div class="tira-q">' + fr + '</div><div class="tira-furos"></div></div>';
}
function tres(acao, ops, esc, semente) {
  return '<div class="hp-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a lareira de pedra embaixo, com o fogo; acima, a mesa com oito envelopes: os abertos mostram quem mandou e a frase; o da vez treme dentro da lareira */
function cartas() {
  /* 23/10/2026 · o envelope abre onde a frase já foi checada (em qualquer ordem); o próximo treme */
  var e = (S.fq && S.fq.ct && S.fq.ct.ver) || {}, feitas = 0, prox = -1, N = CARTAS.length;
  CARTAS.forEach(function (c, i) { if (e[i]) feitas++; else if (prox < 0) prox = i; });
  var env = CARTAS.map(function (c, i) {
    var gira = [-6, 4, -3, 7, -5, 3][i];
    if (e[i]) return '<div class="hp-env aberta" style="--g:' + gira + 'deg;--cera:' + c.cor + '"><i class="hp-cera"></i><small>from ' + c.de + '</small><span>' + c.ops[0] + '</span></div>';
    return '<div class="hp-env fechada' + (i === prox ? ' vez' : '') + '" style="--g:' + gira + 'deg;--cera:' + c.cor + '"><i class="hp-cera"></i></div>';
  }).join('');
  var fim = feitas >= N;
  return '<div class="hp-correio vd" role="img" aria-label="The letters: ' + feitas + ' of ' + N + ' open"><div class="hp-envs">' + env + '</div>'
    + '<div class="hp-lareira"><i class="hp-fogo"></i></div>'
    + '<p class="hp-legenda">' + (fim ? 'Six letters, six people. No pressure.' : feitas + ' of ' + N + ' letters open') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · want / expect / need + someone + to</span><h1>No Pressure</h1>'
    + '<p class="banda">' + SERIE + ' · HBO · ' + ANO + '</p>'
    + '<p class="sub">On his eleventh birthday, letters start flying out of the fireplace. Hogwarts wants him to come; his aunt doesn’t want him to read them; everybody expects him to be great. Tonight you open every letter. No pressure.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the first letter</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r hp-foto"><img src="' + img('capa') + '" alt="A great castle hall at night with floating candles above long tables"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="hp-encarte vd"><div class="hp-capinha"><img src="' + img('lareira') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>The letters arrive</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="hp-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Everybody expects Harry to be special. Is that a gift or a problem?</h2></div>' + mostra('enc', 'A problem. When people expect you to be perfect, you can’t make mistakes.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_TW) + '<p class="fm-nota">Say: I want … / She doesn’t want me to …</p></div>'
    + '<div class="lado-l"><div class="hp-selo vd"><b>' + SERIE + '</b><small>the HBO series teaser · British English · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the teaser now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="hp-video"><div class="hp-vcol">' + iframe(YT, SERIE + ' · teaser') + '<small class="hp-cred">' + SERIE + ' · official teaser (HBO Max) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_ERRO) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the teaser</button></div></div></div>';
  else corpo = '<div class="hp-centro">' + FM.ex('v2', VD_LIGA) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="hp-video"><div class="hp-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="hp-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="hp-sentido">' + x.sentido + '</span><span class="hp-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="hp-centro"><p class="hp-dica">Tap a frame to open that moment of the teaser.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('car', CARTA_R);
};

R.cartas = function (c) {
  var e = (S.fq && S.fq.ct && S.fq.ct.ver) || {}, n = 0;
  CARTAS.forEach(function (x, i) { if (e[i]) n++; });
  return cab(c) + '<div class="fm-lado2">' + cartas() + comPlaca(FM.ex('ct', PERG), PRESA) + '</div>'
    + (n === CARTAS.length ? '<p class="fm-certa" style="width:min(1100px,100%);margin:16px auto 0">All the letters are open. Now be Harry: tell the teacher what three people want or expect you to do, and how you feel.</p>' : '');
};

R.pressao = function (c) {
  return cab(c) + comPlaca(FM.ab('ab', VD_A, VD_B), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="hp-centro"><p class="hp-dica">The debate.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'dado', rot: 'I · The Pressure Die', t: 'Before the teaser: who expects things from you?', p: 'Tap the die and answer. Then the teacher answers.', rotulo: 'Pressure', semente: 17,
  itens: [
    { q: 'What did your parents expect you to study?', ex: 'They expected me to study law.' },
    { q: 'What does your family want you to do more?', ex: 'They want me to call more often.' },
    { q: 'Who asked you for help this week?', ex: 'My neighbor asked me to water her plants.' },
    { q: 'What would you like your boss to change?', ex: 'I’d like him to give us Fridays off!' },
    { q: 'What did your teachers tell you not to do?', ex: 'They told me not to talk in class.' },
    { q: 'Do you feel pressure to be perfect? From who?', ex: 'Yes, from myself. Nobody else expects me to be perfect.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'debate', rot: 'VIII · The Debate', t: 'Should a school decide where students belong?', p: 'Choose a side. The teacher takes the other one. Use want / expect / need + person + to.',
  frase: 'A school should decide where students belong.',
  a: { rot: 'Yes, it should', motivos: ['Teachers know what they expect students to do.', 'Students need someone to guide them.', 'The hat wants every student to find their place.'] },
  b: { rot: 'No, it shouldn’t', motivos: ['I want students to choose for themselves.', 'Nobody should expect an eleven-year-old to know.', 'Labels make kids feel pressure.'] },
  frases: ['I want… to…', 'They expect us to…', 'I see your point, but…'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'The letters, in blocks. Each block has a job.',
  frases: [
    { b: [['Uncle Vernon', 'WHO WANTS', 'quem'], ['wants', 'WANT', 'aux'], ['him', 'WHO DOES IT', 'o'], ['to be quiet', 'TO + ACTION', 'acao']], d: 'One person wants. Another person does.' },
    { b: [['Hagrid', 'WHO WANTS', 'quem'], ['asked', 'ASK', 'aux'], ['him', 'WHO DOES IT', 'o'], ['to come', 'TO + ACTION', 'acao']], d: 'Same four blocks with asked.' },
    { b: [['Aunt Petunia', 'WHO WANTS', 'quem'], ['told', 'TELL', 'aux'], ['him', 'WHO DOES IT', 'o'], ['not to go', 'NOT + TO + ACTION', 'acao']], d: 'For no: not goes before to.' }
  ],
  nota: 'The same blocks every time: <b>who wants</b> + the word + <b>him / her / me</b> + <b>to</b> + action. The person after the word is him, not he. For no: <b>not to</b>.',
  monta: { p: 'Build the next line. Then say it.', pecas: [['him', 'WHO DOES IT', 'o'], ['to read', 'TO + ACTION', 'acao'], ['Hagrid', 'WHO WANTS', 'quem'], ['the letter', 'WHAT', 'o'], ['wants', 'WANT', 'aux']], ordem: [2, 4, 0, 1, 3] },
  uso: { p: 'Your turn. What do people expect you to do? Say two sentences.', molde: ['My boss wants me to …', 'My mother asked me to …'], ex: 'My boss wants me to finish the report today. My mother asked me to call her tonight.' },
  prof: 'Read the blocks with the student, top to bottom: the word on top, its job under it. Point at him before to.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
