/* ============================================================
   WRAPPING IT UP · THE LONG TABLE · LIVE CLASS  06/10/2026
   Main series B2 · elipse e substituição: so / not (I think so, I hope
   not, I'm afraid not, I suppose so) · So do I / Neither can I / Nor
   have I com o auxiliar do tempo · pergunta-eco (She did? You can?) ·
   o verbo cai depois do to (I'd love to) · one / ones.
   Erros: I think yes · I don't hope so · So I do · Neither can't I ·
   Is it? (para tudo) · I'd love. · Yes, I'm. · the gold / the smalls.
   O MUNDO (da aula velha): véspera de Natal na casa da avó Edith, doze
   pessoas numa mesa só; os crackers com as respostas robóticas do Leo;
   a guirlanda de dez luzes; a tia Ruth no viva-voz. Sem áudio, sem vídeo.
   A CARA (nova; a velha eram crackers + guirlanda em cartões): a MESA
   COMPRIDA vista de cima — doze lugares, quem fala acende; e a TESOURA:
   a resposta robô do Leo é cortada palavra por palavra até sobrar só a
   palavrinha que segura a frase (SO, NOT, DO, CAN, TO, ONE).
   Reforço conferido: a A2 me-neither (too / either) está no ar; aqui é B2.
   Fila: FILA-LIVE-386.md · 139. Pasta piloto-wrap (conferida: não existia).
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 8
   páginas. A auditoria: escolher entre três frases quase iguais (II, V),
   as quatro cartas de regra para consertar com um toque e as páginas de
   conversa só com Show answer. Agora: I fica (é o aquecimento, abertura.js);
   II os crackers, o aluno responde curto e o Check mostra a
   tesoura cortando a resposta do Leo (fala); III a conversa da mesa → a
   regra (carta); IV o auxiliar errado (erro); V ligar o que dizem à
   resposta curta, a guirlanda acende (liga); VI a tia Ruth no viva-voz
   (fala); VII respostas curtas pessoais (escolhe). VII deixa de ser EXTRA.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'lareira', rot: 'I · Your Holidays', t: 'Before dinner: you, your family and the end of the year.', p: 'Tap a gift tag. The student answers; then the teacher answers too.' },
  { k: 'tesoura', est: 'o', min: 7, img: 'crackers', rot: 'II · The Crackers', t: 'Little Leo wrote the answers inside the crackers. Every one is way too long.', p: 'Read the cracker’s question. Answer short, out loud. Then tap Check: the scissors cut Leo’s answer.' },
  { k: 'gx', est: 'f', min: 4, img: 'lareira', rot: 'III · At the Long Table', t: 'Grandma Edith’s table. Some words are lit.', p: 'Read it together. Tap the lit words: why this form? Then answer your teacher with one small word.' },
  { k: 'regra', est: 'f', min: 7, img: 'cozinha', rot: 'IV · The Rule', t: 'Don’t repeat. Keep one small word.', p: 'Read the table talk out loud. Tap the small word in each answer. Then finish the rule.' },
  { k: 'aux', est: 'f', min: 6, img: 'cozinha', rot: 'V · The Tense Decides', t: 'So … I, Neither … I, She …? The auxiliary comes from their sentence.', p: 'One helper is wrong in each answer. Say the answer the right way out loud. Then tap Check.' },
  { k: 'guirlanda', est: 'o', min: 7, img: 'guirlanda', rot: 'VI · The Wreath', t: 'Six quick lines from around the table. Each right match lights the wreath.', p: 'Tap what they say, then the short answer. Then say each pair out loud, fast.' },
  { k: 'ruth', est: 'o', min: 7, img: 'janela', rot: 'VII · Aunt Ruth on Speaker', t: 'Aunt Ruth couldn’t come this year. The phone goes around the table.', p: 'Read Aunt Ruth’s line. Answer short, add one detail. Then tap Check and ask her back.' },
  { k: 'real', est: 'o', min: 7, extra: 1, img: 'presentes', rot: 'VIII · Short and Real', t: 'Now it’s your life. Short answer first, then the story.', p: 'Tap the short answer that is true for you. Say it. Then add one real detail.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · Your Own Table', t: 'Who talks the most at your holiday table, and what do you say back?', p: 'Three lines your family always says, and your short answers. They go to your My notes.' }
];

/* a mesa: doze lugares (0 = cabeceira) */
var LUGARES = ['GRANDMA EDITH', 'UNCLE FRANK', 'AUNT LINDA', 'COUSIN MIA', 'COUSIN SAM', 'LITTLE LEO', 'YOU', 'MOM', 'DAD', 'GRANDPA JOE', 'AUNT RUTH', 'UNCLE TOM'];

var VOCE = [
  { k: 'THE BIG NIGHT', q: 'What is the biggest family night of the year for you?', fup: 'What do you eat?', st: ['For us, it’s …'], ex: 'Christmas Eve. We eat at midnight, and nobody sleeps.' },
  { k: 'THE TABLE', q: 'How many people sit at your family table on a big night? Who sits at the head?', fup: 'Where do you sit?', st: ['About …'], ex: 'About fifteen. My grandmother sits at the head, of course.' },
  { k: 'THE QUESTIONS', q: 'Which relative always asks uncomfortable questions? What do they ask?', fup: 'What do you answer?', st: ['My … always asks …'], ex: 'My aunt. She always asks when I’m getting married.' },
  { k: 'THE FOOD', q: 'What dish is always on the table, even if nobody really likes it?', fup: 'Who makes it?', st: ['There’s always …'], ex: 'A salad with raisins. Every year!' },
  { k: 'THE TRADITION', q: 'Is there a family tradition you love, or one you secretly hate?', fup: 'Why?', st: ['I love …', 'I secretly hate …'], ex: 'I love the secret gift game. I hate the family photo.' },
  { k: 'THE NIGHT OWL', q: 'Do you stay up late on big nights, or do you go to bed early?', fup: 'What time, usually?', st: ['I stay up until …'], ex: 'I stay up until three. Then I sleep all day.' }
];

/* a tesoura: robo = a resposta do Leo; fica = as palavras que ficam; chave = a palavrinha */
var CRACK = [
  { quem: 0, q: 'Are you staying for dessert?', robo: 'Yes, I am staying for dessert.', fica: 'Yes, I am.', chave: 'am', mais: 'I wouldn’t miss it!', ops: ['Yes, I am. I wouldn’t miss it!', 'Yes, I’m. I wouldn’t miss it!', 'Yes, I am staying for dessert.'] },
  { quem: 1, q: 'Is it going to snow tonight?', robo: 'I think that it is going to snow tonight.', fica: 'I think so.', chave: 'so', mais: '', ops: ['I think so.', 'I think yes.', 'I think it.'] },
  { quem: 2, q: 'So… are you getting married soon?', robo: 'I do not think that I am getting married soon.', fica: 'I don’t think so!', chave: 'so', mais: '', ops: ['I don’t think so!', 'I think no!', 'I don’t think!'] },
  { quem: 3, q: 'Will you come to my wedding in June?', robo: 'I would love to come to your wedding in June.', fica: 'I’d love to!', chave: 'to', mais: '', ops: ['I’d love to!', 'I’d love!', 'I’d love it to!'] },
  { quem: 8, q: 'I can’t eat another bite.', robo: 'I also cannot eat another bite.', fica: 'Neither can I.', chave: 'can', mais: '', ops: ['Neither can I.', 'Me too.', 'I also can’t.'] },
  { quem: 7, q: 'Did you call Grandpa Joe last week?', robo: 'I tried to call Grandpa Joe, but he did not answer.', fica: 'I tried to,', chave: 'to', mais: 'but he didn’t answer.', ops: ['I tried to, but he didn’t answer.', 'I tried it, but he didn’t answer.', 'I tried to call Grandpa Joe last week.'] },
  { quem: 5, q: 'I love Christmas!', robo: 'I love Christmas too, and I also love the presents.', fica: 'So do I!', chave: 'do', mais: '', ops: ['So do I!', 'So I do!', 'So am I!'] },
  { quem: 9, q: 'Is the store still open? We need more ice.', robo: 'I am afraid that the store is not open anymore.', fica: 'I’m afraid not.', chave: 'not', mais: '', ops: ['I’m afraid not.', 'I’m afraid no.', 'I’m not afraid.'] }
];

/* II · os seis crackers que ficam (o aluno responde curto; o Check mostra a resposta cortada) */
var CRACK6 = [CRACK[0], CRACK[1], CRACK[2], CRACK[3], CRACK[4], CRACK[7]];

/* III · a conversa da mesa (texto nosso) → a regra */
var CARTA = { de: 'THE LONG TABLE · CHRISTMAS EVE · WHO SAID WHAT',
  txt: 'Edith: Will it snow tonight? Frank: I think [[so]]. Linda: Will it rain on the wedding day? Mia: I hope [[not]]! Sam: I love this song. Leo: So [[do]] I! Sam: I can’t eat another bite. Dad: Neither [[can]] I. Mom: Do you want to open a gift? Mia: I’d love [[to]]! Edith: The gold plate or the green plate? Joe: The gold [[one]], please.' };
var REGRA = [
  { a: 'After think, hope, suppose, be afraid, say ', par: ['so or not', 'yes or no'], c: 0 },
  { a: 'To say “I hope it won’t”: I hope ', par: ['not', 'no'], c: 0 },
  { a: 'To agree with a positive: So ', par: ['do I', 'I do'], c: 0, b: ' (the helper of their sentence)' },
  { a: 'To agree with a negative: ', par: ['Neither can I', 'Neither can’t I'], c: 0 },
  { a: 'After would love / tried, keep ', par: ['to', 'it'], c: 0, b: ': I’d love to.' },
  { a: 'One thing → the gold one. Many things → the small ', par: ['ones', 'one'], c: 0 }
];
var PRESA = 'think / hope / suppose + <b>so</b> · <b>not</b><br>So <b>do</b> I · Neither <b>can</b> I · Nor <b>have</b> I<br>She <b>did</b>? You <b>can</b>?<br>I’d love <b>to</b> · I tried <b>to</b><br>the gold <b>one</b> · the small <b>ones</b>';

/* IV · o auxiliar errado (o certo vem da frase deles) */
var AUXERRO = [
  { f: 'I’ve never tried eggnog. — Nor <u>do</u> I.', r: 'have' },
  { f: 'I didn’t sleep at all last night. — Neither <u>do</u> I.', r: 'did' },
  { f: 'I’m so tired. — So <u>do</u> I.', r: 'am' },
  { f: 'Mia got engaged last night! — She <u>does</u>?', r: 'did' },
  { f: 'I can whistle with my fingers! — You <u>do</u>?', r: 'can' },
  { f: 'I won’t eat any more pie. — Neither <u>do</u> I.', r: 'will' }
];

/* V · ligar o que dizem à resposta curta; cada par certo acende a guirlanda */
var GL = { formato: 'liga', titulo: 'Match what they say to the short answer.', pares: [
  ['Mia got engaged last night!', 'She did? That’s wonderful!'],
  ['I’ve never tried eggnog.', 'Nor have I! Let’s try some.'],
  ['The gold plate or the green plate?', 'The gold one, please.'],
  ['Will the roads be icy tomorrow?', 'I’m afraid so. Drive slowly!'],
  ['I can whistle with my fingers!', 'You can? Show me!'],
  ['Do you want to open one gift tonight?', 'Yes, I’d like to!']
], ordemDireita: [3, 0, 5, 1, 4, 2] };

/* VI · a tia Ruth: ela fala, o aluno responde curto + um detalhe e pergunta de volta */
var RUTH = [
  { pista: '<span class="ano">Aunt Ruth</span>“Is Mia really engaged? Is she happy?”', resp: 'For example: <b>I think so!</b> She can’t stop smiling.', depois: 'Are you coming to the wedding in June? <small>(Ruth: “I hope so! If my knee is better, I’ll be there.”)</small>' },
  { pista: '<span class="ano">Aunt Ruth</span>“I’m so sad I couldn’t be there this year.”', resp: 'For example: <b>So are we!</b> Your chair is empty.', depois: 'Did you make your famous cookies anyway? <small>(Ruth: “I tried to, but my oven broke!”)</small>' },
  { pista: '<span class="ano">Aunt Ruth</span>“Did Frank make his famous pumpkin pie?”', resp: 'For example: <b>I’m afraid not.</b> He bought one this year!', depois: 'Do you want Grandma to send you some? <small>(Ruth: “Yes, please! The small pieces, not the big ones.”)</small>' },
  { pista: '<span class="ano">Aunt Ruth</span>“Can I send the kids some gifts? Big ones or small ones?”', resp: 'For example: <b>Small ones</b>, please. The house is full!', depois: 'Can you call again tomorrow? <small>(Ruth: “I think so. Around ten, after breakfast.”)</small>' }
];

/* VII · respostas curtas pessoais: o aluno escolhe a que é verdade para ele, diz e acrescenta um detalhe */
var REAL = { formato: 'escolhe', titulo: 'Tap the short answer that is true for you. Say it. Then add one real detail.', itens: [
  { p: '<b>Next year.</b> “Will you travel next year?”', o: ['I hope so!', 'I don’t think so.', 'I’m afraid not.'], c: -1, d: 'Add one real detail: where to?' },
  { p: '<b>The cook.</b> “I can’t cook a whole holiday dinner. Can you?”', o: ['Neither can I.', 'I can!', 'I can, but only dessert.'], c: -1, d: 'Add one real detail: what can you make?' },
  { p: '<b>Snow.</b> “I’ve never seen real snow. Have you?”', o: ['Nor have I.', 'I have!', 'I have, once.'], c: -1, d: 'Add one real detail: where?' },
  { p: '<b>Something new.</b> “Would you like to learn an instrument next year?”', o: ['I’d love to!', 'I’d like to, but …', 'I don’t want to.'], c: -1, d: 'Add one real detail: which one?' },
  { p: '<b>The promise.</b> “Did you keep your promise for this year?”', o: ['I tried to!', 'I did!', 'I didn’t.'], c: -1, d: 'Add one real detail: what was it?' },
  { p: '<b>The phone.</b> “Which phone do you want next, a big one or a small one?”', o: ['A small one.', 'A big one.', 'The one I have.'], c: -1, d: 'Add one real detail: why?' }
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {}, voce: { sel: -1, foi: {} } };

/* a mesa comprida vista de cima */
function mesa(ativo, feitos) {
  feitos = feitos || {};
  return '<div class="tb-mesa"><div class="tb-tampo"><span class="tb-vela"></span><span class="tb-vela"></span><span class="tb-vela"></span></div>' + LUGARES.map(function (nome, i) {
    var ang = Math.PI * 2 * i / LUGARES.length + Math.PI, x = 50 + Math.cos(ang) * 46, y = 50 + Math.sin(ang) * 40;
    var cls = 'tb-lugar' + (i === ativo ? ' fala' : '') + (nome === 'YOU' ? ' voce' : '') + (feitos[i] ? ' feito' : '') + (nome === 'AUNT RUTH' ? ' vazio' : '');
    return '<span class="' + cls + '" style="left:' + x.toFixed(1) + '%;top:' + y.toFixed(1) + '%"><i></i><small>' + nome.replace('GRANDMA ', 'GRANDMA<br>').replace('GRANDPA ', 'GRANDPA<br>').replace(/^(UNCLE|AUNT|COUSIN|LITTLE) /, '$1<br>') + '</small></span>';
  }).join('') + '</div>';
}
/* a tesoura: corta a resposta robô até sobrar a palavrinha */
function tesoura(x, corta) {
  var palavras = x.robo.split(' ');
  if (!corta) return '<div class="tb-papel vd"><small>LEO’S PAPER · TOO LONG</small><p>' + palavras.map(function (p) { return '<span>' + p + '</span>'; }).join(' ') + '</p></div>';
  var curta = x.fica.replace(new RegExp('\\b(' + x.chave + ')\\b', 'i'), '<b class="tb-chave">$1</b>');
  return '<div class="tb-papel cortado vd"><small>✂ CUT · ONE SMALL WORD STAYS</small><p class="tb-robo">' + palavras.map(function (p) { return '<s>' + p + '</s>'; }).join(' ') + '</p><p class="tb-curta">' + curta + (x.mais ? ' <span>' + x.mais + '</span>' : '') + '</p></div>';
}
function guirlanda(n, tot) {
  tot = tot || 10;
  var l = ''; for (var i = 0; i < tot; i++) { var a = Math.PI * 2 * i / tot - Math.PI / 2; l += '<i class="' + (i < n ? 'acesa' : '') + '" style="left:' + (50 + Math.cos(a) * 40).toFixed(1) + '%;top:' + (50 + Math.sin(a) * 40).toFixed(1) + '%"></i>'; }
  return '<div class="tb-guirlanda"><div class="tb-aro"></div>' + l + '<b>' + n + ' / ' + tot + '</b></div>';
}
function balao(quem, txt) { return '<div class="tb-diz vd"><small>' + LUGARES[quem] + ' SAYS</small><p>“' + txt + '”</p></div>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · ELLIPSIS AND SUBSTITUTION</span><h1>Wrapping <b>It Up</b></h1>'
    + '<p class="sub">Twelve people, one table, a hundred questions. Real people cut the answer short and keep <b>one small word</b>: I think <b>so</b>. Neither <b>can</b> I. She <b>did</b>? I’d love <b>to</b>.</p>'
    + '<div class="chipsx"><span class="pilula">I hope not</span><span class="pilula">So do I</span><span class="pilula">I’d love to</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Sit at the table</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + mesa(0, {}) + tesoura(CRACK[1], 1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['For us, it’s …', 'My aunt always …', 'I love …']); };

/* II · o aluno responde curto; o Check mostra a tesoura cortando a resposta do Leo */
R.tesoura = function (c) {
  return cab(c) + FM.fala('tes', CRACK6.map(function (x) {
    var curta = x.fica.replace(new RegExp('\\b(' + x.chave + ')\\b', 'i'), '<b>$1</b>');
    return { pista: '<span class="ano">' + LUGARES[x.quem] + '</span>“' + x.q + '”', resp: curta + (x.mais ? ' ' + x.mais : '') };
  }), {
    rotulo: 'Cracker', prox: 'Next cracker', diga: 'Answer short, out loud, first',
    lado: function (feitas, atual, nova) {
      var feitos = {}; CRACK6.slice(0, atual < 0 ? CRACK6.length : atual).forEach(function (x) { feitos[x.quem] = 1; });
      if (atual < 0) return '<div class="lado-l" style="max-width:640px;margin:0 auto">' + mesa(-1, feitos) + '</div>';
      var x = CRACK6[atual];
      return '<div class="mesa-c"><div class="lado-l">' + mesa(x.quem, feitos) + '</div><div class="lado-l">' + tesoura(x, nova) + '</div></div>';
    },
    fim: 'Six human answers. Which small word did each one keep?'
  });
};

/* III · a conversa da mesa → a regra */
R.regra = function (c) {
  return cab(c) + FM.carta('mesa', CARTA, REGRA, { toque: 'Tap the small word that holds each answer', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

/* IV · o auxiliar errado */
R.aux = function (c) {
  return cab(c) + FM.erro('aux', AUXERRO, { titulo: 'One helper is wrong. Say the answer the right way.', regra: PRESA });
};

/* V · ligar e acender a guirlanda */
R.guirlanda = function (c) {
  var e = (S.fq && S.fq.gl && S.fq.gl.par) || {}, n = GL.pares.filter(function (x, i) { return e[i] === i; }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + guirlanda(n, GL.pares.length) + '</div><div class="lado-l">' + FM.ex('gl', GL)
    + (n === GL.pares.length ? '<p class="aprova">The whole table is laughing, and nobody said anything twice. Now say each pair out loud, fast.</p>' : '') + '</div></div>';
};

/* VI · a tia Ruth no viva-voz */
R.ruth = function (c) {
  return cab(c) + FM.fala('ruth', RUTH, {
    rotulo: 'Call', prox: 'Next call', regra: PRESA, diga: 'Answer short, add one detail, first',
    lado: function () { return '<div class="tb-fone vd"><span class="tb-pulso"></span><b>AUNT RUTH · ON SPEAKER</b><small>THE PHONE GOES AROUND THE TABLE</small></div>'; },
    fim: 'Aunt Ruth says goodbye. Her chair is still empty, but she was there.'
  });
};

/* VII · respostas curtas pessoais */
R.real = function (c) { return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('real', REAL) + '</div>' + FM.regra(PRESA) + '</div>'; };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My aunt always says, “You look thin!” And I say, “I hope not!”\nMy dad always says, “I can’t eat any more.” And I say, “Neither can I.”', 'Your table',
    ['I think so', 'I hope not', 'So do I', 'Neither can I', 'I’d love to', 'the … one'], ['YOUR OWN TABLE', 'Three lines your family always says, and your short answer to each one.'])
    + '<div class="lado-fim">' + mesa(6, { 0: 1, 1: 1, 2: 1, 3: 1, 5: 1, 7: 1, 8: 1, 9: 1 })
    + '<div class="grande vd"><span><u>so / not</u> · I think so, I hope not, I’m afraid not</span><span><u>the auxiliary</u> · So do I, Nor have I, She did?</span><span><u>to</u> · I’d love to, I tried to · <u>one / ones</u> · the gold one</span><span>not <s>I think yes</s>, not <s>I don’t hope so</s>, not <s>So I do</s>, not <s>Is it?</s> for everything</span></div>'
    + mostra('fim', 'My aunt always says, “You look thin!” And I say, “I hope not!”<br>My dad always says, “I can’t eat any more.” And I say, “Neither can I.”<br>My grandma always asks, “Do you want more pie?” And I say, “I’d love to!”', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'Christmas Eve at the long table. Tap the lit words.',
  falas: [
    { q: 'Grandma Edith', f: 'Will it snow on Christmas Eve?' },
    { q: 'You', f: '[[I hope so]]. I love the snow.' },
    { q: 'Leo', f: 'I can’t stand the cold.' },
    { q: 'You', f: '[[Neither can I]]. But I love the fire.' },
    { q: 'Grandma Edith', f: 'Are you staying until Sunday?' },
    { q: 'You', f: '[[I’m afraid not]]. I start work on Saturday.' },
    { q: 'Leo', f: 'I always sleep late on the holidays.' },
    { q: 'You', f: '[[So do I]]. Until 10 AM.' },
    { q: 'Aunt Ruth', f: 'Your grandma put a cup of sugar in the cake.' },
    { q: 'You', f: '[[She did?]] I thought it was perfect.' },
    { q: 'Grandma Edith', f: 'Would you like to help with the dishes?' },
    { q: 'You', f: 'Sure, [[I’d love to]].' }
  ],
  porques: [
    'Don’t repeat the whole sentence. One small word holds it: so.',
    'A no sentence with can’t: neither can I. The helper comes from their sentence.',
    'The answer is no, and you are sorry: not. Not “I’m afraid no”.',
    'A yes sentence with a plain verb: so do I. The helper is do.',
    'An echo question: the same helper as theirs, to show you are listening.',
    'After to, the verb stays out. You don’t say it again: I’d love to.'
  ],
  nota: 'Don’t repeat the whole sentence. Keep one small word: <b>so</b> or <b>not</b> after think, hope, be afraid. Copy their helper: <b>So do I</b>, <b>Neither can I</b>, <b>She did?</b>. After <b>to</b>, the verb stays out: <b>I’d love to</b>.',
  uso: { p: 'Your turn. Your teacher says a sentence. Answer with one small word: so, not, neither, or an echo.', molde: ['I think …', 'Neither …', 'So …'], ex: 'Teacher: I can’t cook. You: Neither can I. Teacher: I love pizza. You: So do I.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
