/* ============================================================
   OBSESSION · THE WISH CONTRACT · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · second conditional: If + past, would + verbo (If I had
   one wish, I would…), What would you do if…?, If I were you (conselho),
   could no if (If I could…).
   Erros: If I would have, If I had…, I will, If I was you (conselho),
   I would to, What you would do…?, If she loves me, I would (presente
   no if), If I can change (é could), would changed, wouldn’t loves,
   will you do it (é would).
   Catálogo WOLFLIX Live (07/10): família TERROR, modo ESCOLHA O FINAL.
   A tela forte: o contrato do desejo. Um papel escuro com oito
   cláusulas; cada desejo dito certo assina uma cláusula e revela, em
   vermelho, a letra miúda do preço. No fim, o selo de cera: sem
   devolução.
   ⚠ O trailer tem sustos e gritos; nada disso na tela da aula. O
   professor avisa antes.
   O AQUECIMENTO (aquece.js): a pilha. O FECHAMENTO (final.js): um
   minuto.
   O VÍDEO: gMC8kkwbIQQ (trailer oficial, 2:13, idade 0, embed sim).
   Sem legenda no YouTube hoje: os tempos são ESTIMADOS, e cada momento
   é contado com palavras nossas.
   A CARA: noite, verde doente de salgueiro, papel cor de osso, tinta
   vermelha; IM Fell English + Albert Sans. A antiga era o kit "escolha
   a cena".
   Fila: FILA-LIVE-386.md · 287.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: três cartões da história antes (você é o Bear) e o twist;
   a palavra que você ouviu com ▶ nas falas do trailer; depois, Choose Your
   Response (o Bear e a Nikki). V: a mensagem do Bear (tocar os verbos) e
   completar a regra. VI: o contrato com SEIS cláusulas (era oito), cada uma
   com a fala primeiro. VII (era EXTRA, agora essencial): a roleta das
   situações impossíveis e o contador de frases.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'quarto', rot: 'I · Warm-up and Two Truths and a Lie', t: 'Before the trailer: your wishes, then wishes with a price.', p: 'Answer three questions about your life. Then find the lie about the old stories of wishes.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Obsession. The official trailer.', p: 'Open the cards first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'quarto', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'lampada', rot: 'V · The Wish Ladder', t: 'One wish, five steps.', p: 'Read each step out loud, then go one step up. Notice the verbs. Then climb with your own wish.' },
  { k: 'regra', est: 'f', min: 6, img: 'salgueiro', rot: 'VI · If I Had, I Would', t: 'If I had one wish, I would… If I were you, I wouldn’t.', p: 'Read Bear’s message. Tap the verbs of the imagined situation. Then finish the rule.' },
  { k: 'contrato', est: 'o', min: 7, img: 'capa', rot: 'VII · The Wish Contract', t: 'Every wish has a price. Say it, then read the small print.', p: 'Read the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'desejos', est: 'o', min: 7, img: 'quarto', rot: 'VIII · What Would You Do?', t: 'Six impossible situations. What would you do?', p: 'Spin the wheel. Answer with If…, I would… The teacher taps Got it! for each sentence.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · One Minute', t: 'One minute.', p: 'Minute.' }
];

var FILME = 'Obsession', ANO = '2026';
var YT = 'gMC8kkwbIQQ', DUR = 133;

var ENCARTE = [
  ['The film', '<i>Obsession</i> is a horror film from 2026. It starts like a love story, in a strange little shop that sells wishes.'],
  ['The wish', 'Bear is in love with his friend Nikki. In the shop he buys one wish, breaks a willow branch, and wishes that Nikki loved him more than anyone in the world.'],
  ['The price', 'The next day, Nikki loves him. Too much. She can’t stop. He calls the shop to cancel the wish, but there is a rule: no cancellations, for as long as he lives.']
];

var ANTES = [
  { q: 'If you found a shop that sold wishes, would you go in?', h: 'Yes, I would. / No, I wouldn’t, because …' },
  { q: 'Is it a good idea to make someone love you? Why?', h: 'I think it would be … because …' }
];
var DEPOIS = [
  { q: 'What would you do if you were Bear now?', h: 'If I were Bear, I would …', r: 'If I were Bear, I would tell Nikki everything.' },
  { q: 'Is the film scary or sad? Why?', h: 'It seems … because …' }
];

var TRECHOS = [
  { k: 'The shop', ini: 0, fim: 22, ouvir: 'What does the shop sell?', sentido: 'In a strange little shop, a young man learns that he can buy one wish, only one.', gram: 'If I <b>had</b> one wish, I <b>would</b>…' },
  { k: 'The wish', ini: 22, fim: 45, ouvir: 'What does he wish for?', sentido: 'He breaks a willow branch and wishes that Nikki loved him more than anyone in the world.', gram: 'If she <b>loved</b> me, I <b>would</b> be happy.' },
  { k: 'Super dating', ini: 45, fim: 70, ouvir: 'What do their friends notice?', sentido: 'Suddenly they are together, and their friends think it is strange. Nikki says “I love you” again and again.', gram: 'If I <b>were</b> her friend, I <b>would</b> worry.' },
  { k: 'The spell', ini: 70, fim: 95, ouvir: 'Is Nikki OK?', sentido: 'People say Nikki is going through something. Someone asks him what spell he put on her.', gram: 'What <b>would</b> you <b>do</b> if your friend changed?' },
  { k: 'No cancellations', ini: 95, fim: 125, ouvir: 'Can he cancel the wish?', sentido: 'He calls the shop to cancel the wish. The answer is no: it lasts as long as he lives.', gram: 'If he <b>could</b> cancel it, he <b>would</b>.' }
];

var TRAPS = [
  ['No would after if', 'If I would have one wish…', 'If I <b>had</b> one wish…', 'If + past · would in the other half'],
  ['Would, not will', 'If I had a wish, I will ask for love.', 'If I had a wish, I <b>would</b> ask for love.', 'an imagined situation → would'],
  ['Advice: If I were you', 'If I was you, I wouldn’t do it.', 'If I <b>were</b> you, I wouldn’t do it.', 'If I were you (for advice)'],
  ['The question', 'What you would do?', 'What <b>would you</b> do if…?', 'What would + person + verb']
];

/* o contrato: o gesto forte */
var CLAUSULAS = [
  { tema: 'the wish', preco: 'One wish only. Forever.', pista: 'I · have one wish · ask for love', resp: 'If I <b>had</b> one wish, I <b>would</b> ask for love.', depois: 'And you: if you had one wish, what would you ask for?' },
  { tema: 'the girl', preco: 'She will love you more than her own life.', pista: 'she · love me · I · be happy', resp: 'If she <b>loved</b> me, I <b>would</b> be happy.', depois: 'What would make you really happy this year?' },
  { tema: 'the advice', preco: 'Advice is not included in the price.', pista: 'advice · I · be you · not make that wish', resp: 'If I <b>were</b> you, I <b>wouldn’t</b> make that wish.', depois: 'Give the teacher some advice: If I were you, I would…' },
  { tema: 'the cancellation', preco: 'No cancellations. No refunds.', pista: 'we · cancel the wish · she · be free', resp: 'If we <b>cancelled</b> the wish, she <b>would</b> be free.', depois: 'What would you cancel in your life if you could?' },
  { tema: 'the past', preco: 'The past cannot be returned to the shop.', pista: 'I · can change one thing · change my past', resp: 'If I <b>could</b> change one thing, I <b>would</b> change my past.', depois: 'If you could go back to one day, which day would it be?' },
  { tema: 'the signature', preco: 'Sign here. The shop always collects.', pista: 'you · have to pay the price · do it? · a question', resp: 'If you <b>had</b> to pay the price, <b>would</b> you do it?', depois: 'The contract is sealed. Would you sign it? Why or why not?' }
];
var RECUSA = {
  ifwould: 'No would after if: If I had…, If she loved…, If we cancelled…',
  will: 'An imagined situation: would (not will).',
  presente: 'In the if half: the past. If she loved me, if you had, if there were.',
  q: 'Questions: What would you do…? (would before you)',
  were: 'For advice: If I were you.',
  to: 'After would: the base verb, no to.',
  could: 'Imagined ability: If I could…',
  base: 'After would: the base verb. would change.',
  base2: 'After wouldn’t: the base verb. wouldn’t love.'
};

var DESEJOS = [
  { k: 'A million dollars', h: 'What would you do if you won a million dollars?', ex: 'I would buy a house for my mother.' },
  { k: 'Invisible', h: 'Where would you go if you were invisible for a day?', ex: 'I would go to a concert for free!' },
  { k: 'Any language', h: 'If you could speak any language tomorrow, which would you choose?', ex: 'I would choose Japanese.' },
  { k: 'A famous person', h: 'If you could have dinner with anyone, who would it be?', ex: 'I would have dinner with my grandfather.' },
  { k: 'No phone', h: 'What would you do if you had no phone for a month?', ex: 'I would read more, but I would miss my friends.' },
  { k: 'Advice', h: 'Your friend wants to quit her job. What would you say?', ex: 'If I were you, I would find a new job first.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>If + past</b>, <b>would</b> + verb<br>If I <b>had</b> one wish, I <b>would</b> ask for love.<br>Advice: If I <b>were</b> you…<br><b>What would you do</b>…? · If I <b>could</b>…';
/* III · antes: três cartões da história e o twist */
var VD_TWI = { formato: 'twist', titulo: 'Before you watch: you are Bear. Say: If I had one wish, I would …', cartoes: [
  ['Where', 'A strange little shop that sells wishes.'],
  ['The deal', 'One coin buys one wish. Only one.'],
  ['You', 'You are Bear. You love your friend Nikki.']
], botao: 'Reveal the twist', twist: 'The twist: every wish has a price, and nothing can be cancelled.' };
/* III · durante: a palavra que você ouviu, cada uma no minuto do trailer (legenda-dados.js) */
var VD_SOM = { formato: 'som', titulo: 'Which word did you hear?', itens: [
  { a: 'One ', par: ['wash', 'wish'], c: 1, b: ', Willow.', t: '0:32' },
  { a: 'I wish Nikki ', par: ['lived', 'loved'], c: 1, b: ' me more than anyone in the world.', t: '0:35' },
  { a: 'It’s ', par: ['wired', 'weird'], c: 1, b: ' how you two are dating all of a sudden.', t: '1:00' },
  { a: 'What kind of ', par: ['smells', 'spells'], c: 1, b: ' you put on her?', t: '1:16' },
  { a: 'Is there a way I can ', par: ['camel', 'cancel'], c: 1, b: ' a wish?', t: '1:59' }
] };
/* III · depois: Choose Your Response */
var VD_REA = { formato: 'reacao', titulo: 'After the trailer: you are Bear. How do you answer?', quem: 'Nikki', fala: 'Nikki says: “I love you so, so, so, so much.” You know the wish did this.', reacoes: [
  ['Tell her the truth', 'If I told you the truth, you would be afraid.', 'I would never be afraid of you.'],
  ['Say nothing', 'If I said nothing, you would stay with me forever.', 'Good. I never want to leave.'],
  ['Call the shop', 'If I called the shop, they would help us.', 'Help us? Why? I love you.']
] };
/* V · a mensagem do Bear */
var CARTA_R = { formato: 'carta', papel: 'tela', carta: { de: 'MESSAGE FROM BEAR', txt: 'Nikki, if I [[had]] one wish, I [[would take]] it back. If you [[knew]] the truth, you [[would be]] afraid. If I [[were]] you, I [[would run]]. But what would you do if you loved someone this much?' },
  toque: 'Tap the verbs of the imagined situation', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner.',
  regra: [
    { a: 'After if, use the', par: ['past', 'will'], c: 0, b: '(if I had, if you knew).' },
    { a: 'In the other half:', par: ['would + verb', 'will + verb'], c: 0, b: '.' },
    { a: 'For advice: If I', par: ['were', 'was'], c: 0, b: 'you…' },
    { a: 'The question: What', par: ['would you do', 'you would do'], c: 0, b: 'if you had one wish?' }
  ] };
/* VII · a roleta das situações e o contador de frases */
var VD_ROL = { formato: 'sorteio', titulo: 'Spin the wheel. What would you do?', botao: 'Spin', opcoes: ['You win a million dollars.', 'You are invisible for a day.', 'You speak any language tomorrow.', 'You have dinner with anyone in the world.', 'You have no phone for a month.', 'Your friend wants to quit her job.'] };
var VD_CON = { formato: 'contador', titulo: 'Count your sentences: tap Got it! for each If…, I would… sentence.', botao: 'Got it!', revelar: 'Show an example', resposta: 'If I won a million dollars, I would buy a house for my mother. If I were invisible for a day, I would go to a concert for free!' };

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
  return '<div class="ob-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o contrato escuro: oito cláusulas numeradas; a assinada mostra o desejo e, embaixo, a letra miúda do preço em vermelho; no fim, o selo de cera */
function contrato(feitas, atual, nova) {
  var linhas = CLAUSULAS.map(function (c, i) {
    var cls = i < feitas ? (nova && i === feitas - 1 ? ' ok novo' : ' ok') : (i === atual ? ' vez' : '');
    return '<li class="ob-cl' + cls + '"><span class="ob-num">§' + (i + 1) + '</span><span class="ob-tema">' + c.tema + '</span>' + (i < feitas ? '<em class="ob-miuda">* ' + c.preco + '</em>' : '<em class="ob-miuda vaga">' + (i === atual ? 'say the wish to read the price' : '') + '</em>') + '</li>';
  }).join('');
  var fim = feitas >= CLAUSULAS.length;
  return '<div class="ob-papel vd' + (fim ? ' selado' : '') + '" role="img" aria-label="The wish contract: ' + feitas + ' of ' + CLAUSULAS.length + ' clauses"><div class="ob-topo"><b>The Wish Contract</b><small>one coin · one wish · no returns</small></div><ol>' + linhas + '</ol>'
    + '<div class="ob-assina"><span>signature</span><i></i>' + (fim ? '<b class="ob-cera">W</b>' : '') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · second conditional · If I had…, I would…</span><h1>If I Had One Wish</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">A strange shop sells one wish for one coin. A young man wishes for love, and gets it, forever. Tonight you read the contract before you sign: say each wish the right way, and the small print shows the price.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the contract</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r ob-foto"><img src="' + img('capa') + '" alt="A dusty curiosity shop at night with an old coin and a willow branch on the counter"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="ob-encarte vd"><div class="ob-capinha"><img src="' + img('quarto') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The night after the wish</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="ob-centro"><div class="pergunta vd ja"><small>Talk</small><h2>If you could make someone love you, would you do it? Why?</h2></div>' + mostra('enc', 'No, I wouldn’t. If it wasn’t real, it wouldn’t be love.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_TWI) + '</div>'
    + '<div class="lado-l"><div class="ob-selo vd"><b>' + FILME + '</b><small>the official trailer · a horror film · jump scares</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="ob-video"><div class="ob-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="ob-cred">' + FILME + ' · official trailer · it has jump scares · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('som', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="ob-centro">' + FM.ex('rea', VD_REA) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="ob-video"><div class="ob-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="ob-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="ob-sentido">' + x.sentido + '</span><span class="ob-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="ob-centro"><p class="ob-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('car', CARTA_R);
};

R.contrato = function (c) {
  return cab(c) + FM.ex('ct', { formato: 'fala', rotulo: 'Clause', regra: PRESA,
    lado: function (f, a, v) { return contrato(f, a, v && a >= 0 ? 1 : 0); },
    fim: 'The contract is sealed. Now read it to the teacher like the shop owner: three wishes, and the price of each one.',
    itens: CLAUSULAS.map(function (x) { return { pista: x.pista, resp: x.resp, depois: x.depois }; }) });
};

R.desejos = function (c) {
  return cab(c) + comPlaca(FM.ex('rol', VD_ROL) + FM.ex('con', VD_CON), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="ob-centro"><p class="ob-dica">One minute.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'pilha', rot: 'I · Wishes', t: 'Before the trailer: your wishes.', p: 'Turn one card at a time and finish it out loud. Then the teacher finishes it too.', rotulo: 'Finish it',
  depois: 'Which card was the most honest? Say it again.',
  itens: [
    { q: 'If I had more free time, I would …', ex: '… learn to play the guitar.' },
    { q: 'If I lived in another country, I would live in …', ex: '… Portugal, near the sea.' },
    { q: 'If I were rich, I wouldn’t …', ex: '… work on Mondays!' },
    { q: 'If I could meet anyone, I would meet …', ex: '… my great-grandmother.' },
    { q: 'If I had a superpower, it would be …', ex: '… flying. No more traffic.' },
    { q: 'I would never … , not even for a million dollars.', ex: '… eat insects!' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'minuto', rot: 'VIII · One Minute', t: 'One minute of wishes.', p: 'Pick a topic. Talk for one minute with If I…, I would… Then the teacher.',
  temas: [
    { t: 'If I had one wish', ajuda: 'If I had one wish, I would… But the price would be…' },
    { t: 'If I could live in any time in history', ajuda: 'If I could…, I would live in… I would…' },
    { t: 'Advice for Bear, the boy with the wish', ajuda: 'If I were you, I would… / I wouldn’t…' }
  ],
  palavras: ['If I had', 'I would', 'I wouldn’t', 'If I were you', 'If I could', 'What would you do'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One wish. Climb it one step at a time.',
  degraus: [
    { r: 'idea', f: 'I <b>have</b> one wish.', d: 'Today, for real: have.' },
    { r: 'if', f: 'If I <b>had</b> one wish…', d: 'Not real today. The verb steps back: had.' },
    { r: 'result', f: 'If I had one wish, I <b>would ask</b> for a quiet life.', d: 'The result takes would + a clean verb.' },
    { r: 'not', f: 'If I had one wish, I <b>wouldn’t waste</b> it.', d: 'For no: wouldn’t + a clean verb.' },
    { r: '?', f: 'What <b>would</b> you <b>do</b> if you <b>had</b> one wish?', d: 'Would goes first. The if-half stays in the past.' },
    { r: 'advice', f: 'If I <b>were</b> you, I <b>wouldn’t sign</b> it.', d: 'Advice: were, even with I.' }
  ],
  nota: 'After <b>if</b>, the verb steps back: <b>had</b>, <b>were</b>. The result takes <b>would</b> + a clean verb. Never would after if.',
  uso: { p: 'Your turn. One wish of yours. Climb the ladder: If I had …, I would … Then ask your teacher.', molde: ['If I had …, I would …', 'What would you do if …?'], ex: 'If I had one wish, I would travel the world. What would you do if you had one wish?' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
