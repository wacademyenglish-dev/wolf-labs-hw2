/* ============================================================
   X-MEN ’97 · THE TEAM VOTE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · would rather + verbo (I’d rather stay … than split up),
   would rather + pessoa + passado (I’d rather you listened), I’d rather
   not, Would you rather…?, it’s (high) time + pessoa + passado (it’s
   time we fought back), it’s time to + verbo.
   Erros: would rather to, would rather + -ing, presente com outra pessoa
   (I’d rather you listen), I’d rather you to, it’s time + presente / will
   (it’s time we fight), it’s time + -ing / for + verbo, I’d rather don’t,
   I’d not rather, Do you rather…?, would depois de rather + pessoa.
   Catálogo WOLFLIX Live (07/10): família HERÓI, modo CONSELHO.
   A tela forte: a votação na Sala de Perigo. A grade azul do chão de
   treino vista de cima, oito pódios em roda com o nome de cada mutante;
   cada frase certa acende um pódio (um voto amarelo de “juntos”) e a
   barra do placar sobe. No fim, oito votos: o time fica junto.
   O AQUECIMENTO (aquece.js): a imagem, a sala de treino. O FECHAMENTO:
   escrita, uma mensagem para o time, vai para My notes.
   O VÍDEO: pv3Ss8o9gGQ (trailer oficial Marvel, 1:46, idade 0, embed
   sim). Ação de desenho, sem sangue. Falas conferidas na legenda
   (24/09), contadas com palavras nossas.
   A CARA: azul da grade de treino, amarelo dos uniformes dos anos 90;
   Bungee no título, Atkinson Hyperlegible no texto. A antiga era o
   clube de sábado de manhã no porão.
   Fila: FILA-LIVE-386.md · 309.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'mansao', rot: 'I · Warm-up and Pick a Side', t: 'Before the trailer: your choices, then a team without its teacher.', p: 'Answer three questions about your life. Then vote with the team and defend your choice.' },
  { k: 'palavras', est: 'l', img: 'clube', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'clube', rot: 'III · The Trailer', t: 'X-Men ’97. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'mansao', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'clube', rot: 'V · I’d Rather, It’s Time', t: 'Cyclops writes to the team. Find the pattern.', p: 'Read the message out loud. Tap the words after rather and after it’s time. Then finish the rule.' },
  { k: 'votacao', est: 'o', min: 7, img: 'capa', rot: 'VI · The Team Vote', t: 'Six mutants, one vote. Every right sentence wins a voice.', p: 'Read who is voting and the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'dilemas', est: 'o', min: 7, extra: 1, img: 'clube', rot: 'VII · Would You Rather?', t: 'Six hard choices. Would you rather…?', p: 'Open a card. Answer with I’d rather … than … Then ask your teacher.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · A Message to the Team', t: 'Write a message to your team.', p: 'Use I’d rather, I’d rather you, it’s time we. It goes to your My notes.' }
];

var FILME = 'X-Men ’97', ANO = '2024';
var YT = 'pv3Ss8o9gGQ', DUR = 106;

var ENCARTE = [
  ['The show', '<i>X-Men ’97</i> (2024) is a Marvel animated series on Disney+. It continues the famous cartoon from the 1990s, with the same style and the same team.'],
  ['The loss', 'Professor X, the teacher who brought the mutants together, is gone. He leaves a message: he is proud of his X-Men, and their future is in their hands now.'],
  ['The surprise', 'Then his will is read, and everything he built goes to Magneto, his old enemy. Cyclops wants the team to stay together. Not everybody agrees.']
];

var ANTES = [
  { q: 'Did you watch cartoons on Saturday mornings as a child? Which ones?', h: 'Yes, I watched … / No, I …' },
  { q: 'Would you rather work alone or in a team? Why?', h: 'I’d rather … because …' }
];
var DEPOIS = [
  { q: 'What does the Professor want the team to do?', h: 'He’d rather they … / It’s time they …' },
  { q: 'Would you rather have Cyclops or Wolverine as your leader?', h: 'I’d rather have … because …' }
];

var TRECHOS = [
  { k: 'Goodbye', ini: 0, fim: 30, ouvir: 'What does the Professor say to his X-Men?', sentido: 'The Professor is thankful for the chance to say goodbye. He is proud of them. Jean says their future is in their hands now.', gram: 'He’<b>d rather</b> they <b>stayed</b> together.' },
  { k: 'His dream', ini: 30, fim: 52, ouvir: 'What did the Professor give them?', sentido: 'Cyclops says they must stay alert: the Professor gave them his dream. Storm says, however dark it is, they must believe in each other.', gram: '<b>It’s time</b> they <b>believed</b> in each other.' },
  { k: 'As a team', ini: 52, fim: 75, ouvir: 'How does Cyclops want to work?', sentido: 'Cyclops says they will do this by working together as a team. Wolverine complains that he keeps talking in his ear.', gram: 'Wolverine’<b>d rather</b> <b>work</b> alone.' },
  { k: 'To me', ini: 75, fim: 92, ouvir: 'What does Cyclops shout?', sentido: 'In the middle of the fight, Cyclops calls the team to him: “To me, my X-Men.”', gram: '<b>It’s high time</b> someone <b>led</b> them.' },
  { k: 'The will', ini: 92, fim: 106, ouvir: 'What does the will say?', sentido: 'Magneto reads the Professor’s last will. Everything the Professor built now belongs to him.', gram: 'The team’<b>d rather</b> Magneto <b>didn’t</b> lead them.' }
];

var TRAPS = [
  ['No to', 'I would rather to stay together.', 'I <b>would rather stay</b> together.', 'would rather + base verb (… than …)'],
  ['Another person: past', 'I’d rather you listen to me.', 'I’d rather you <b>listened</b> to me.', 'would rather + person + past'],
  ['It’s time + past', 'It’s time we fight back.', 'It’s time we <b>fought</b> back.', 'it’s (high) time + person + past · it’s time to + verb'],
  ['The question', 'Do you rather fight or hide?', '<b>Would you rather</b> fight or hide?', 'Would you rather…? · I’d rather not']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* III · antes: duas réguas (opinião), sem resposta certa */
var REGUA_A = { formato: 'regua', titulo: 'Before you watch', frase: 'The Professor is gone. Stay together, or go alone?', esquerda: 'Stay together', direita: 'Go alone', depois: 'Say why: I’d rather … than … / It’s time we …' };
/* III · durante: verdadeiro ou mentira e a palavra que você ouviu, cada um no minuto do trailer (legenda-dados.js) */
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'The Professor is thankful to say goodbye.', t: true, tm: '0:05' },
  { f: 'Fate lies in the Professor’s hands.', t: false, tm: '0:13', c: 'It says: “in our hands now.”' },
  { f: 'They say they will do this alone.', t: false, tm: '0:54', c: 'They say: “working together as a team.”' },
  { f: 'Everything the Professor built now belongs to Magneto.', t: true, tm: '1:33' }
] };
var VD_SOM = { formato: 'som', itens: [
  { a: 'I’m ', par: ['graceful', 'grateful'], c: 1, b: ' to have the chance to say goodbye.', t: '0:05' },
  { a: 'We have to stay ', par: ['vigilant', 'violent'], c: 0, b: '.', t: '0:31' },
  { a: 'We get this done by working together as a ', par: ['theme', 'team'], c: 1, b: '.', t: '0:54' },
  { a: 'The last ', par: ['wheel', 'will'], c: 1, b: ' and testament of Charles Xavier.', t: '1:33' }
] };
/* III · depois: contar a história do Professor tocando cada palavra */
var VD_USA = { formato: 'usa', titulo: 'Tell the Professor’s goodbye in your own words. Tap each word when you use it.', palavras: ['grateful', 'vigilant', 'dream', 'believe', 'team'], fim: 'All five words. The Professor would be proud.' };
/* V · a mensagem do Cyclops → a regra */
var CARTA = { de: 'From Cyclops · to the team',
  txt: 'Team, I know the will hurts. I’d rather [[stay]] together than split up. I’d rather you [[listened]] to me, just this once. I’d rather [[not]] fight Magneto. But it’s time we [[stood]] up for what the Professor built. It’s high time somebody [[led]] this team. It’s time [[to]] choose.',
  assina: 'Cyclops' };
var REGRA = [
  { a: 'I’d rather ', par: ['stay', 'to stay'], c: 0, b: ' together than split up.' },
  { a: 'I’d rather you ', par: ['listen', 'listened'], c: 1, b: ' to me. (another person: the past)' },
  { a: 'I’d rather ', par: ['not go', 'don’t go'], c: 0, b: ' to the mansion.' },
  { a: 'It’s time we ', par: ['stood', 'stand'], c: 0, b: ' up.' },
  { a: 'It’s time ', par: ['for choose', 'to choose'], c: 1, b: '.' }
];
var PRESA = 'I’d rather <b>stay</b> than split up.<br>I’d rather <b>not</b> go.<br>I’d rather you <b>listened</b>.<br>It’s time we <b>stood</b> up.<br>It’s time <b>to</b> choose.';
/* VII · seis cartas */
var CARTAS_D = [['Powers', 'Would you rather fly or read minds?'], ['Work', 'Would you rather work from home or at the office?'], ['Leader', 'Would you rather lead a team or be in one?'], ['Weekend', 'Would you rather go out or stay in this weekend?'], ['Your boss', 'What would you rather your boss did?'], ['It’s time', 'What is it time you changed?']];

/* a votação: o gesto forte */
var VOTOS = [
  { quem: 'Cyclops', pista: 'I · rather · stay together · than split up', resp: 'I would rather <b>stay</b> together than split up.', depois: 'Would you rather live with your family or alone?' },
  { quem: 'Storm', pista: 'I · rather · you · listen to me (another person)', resp: 'I’d rather you <b>listened</b> to me.', depois: 'What would you rather people did at work?' },
  { quem: 'Wolverine', pista: 'it’s time · we · fight back', resp: 'It’s time we <b>fought</b> back.', depois: 'What is it time you did in your life?' },
  { quem: 'Jean', pista: 'it’s time · make a choice (no person)', resp: 'It’s time <b>to</b> make a choice.', depois: 'Is it time to make a big choice in your life?' },
  { quem: 'Gambit', pista: 'I · rather not · go back to the mansion', resp: 'I’d rather <b>not</b> go back to the mansion.', depois: 'Where would you rather not go this weekend?' },
  { quem: 'Beast', pista: 'you · rather · fight or hide? · a question', resp: '<b>Would</b> you rather fight or hide?', depois: 'Ask the teacher: “Would you rather … or …?”' }
];
var RECUSA = {
  to: 'After would rather: the base verb, no to. It’s time TO + verb only with no person.',
  base: 'Would rather + base verb (stay), not -ing.',
  pessoa: 'Another person: would rather + person + past (you listened, he were).',
  pessoa2: 'No to: I’d rather you listened.',
  time: 'It’s (high) time + person + past: it’s time we fought, somebody led.',
  for: 'It’s time to + verb (or it’s time for + a noun).',
  not: 'The negative: I’d rather not + verb.',
  not2: 'Not comes after rather: I’d rather not go.',
  q: 'The question: Would you rather…?',
  would: 'No would after rather + person: I’d rather he were here.'
};

var DILEMAS = [
  { k: 'Powers', h: 'Would you rather fly or read minds?', ex: 'I’d rather fly. Reading minds sounds terrible.' },
  { k: 'Work', h: 'Would you rather work from home or at the office?', ex: 'I’d rather work from home than sit in traffic.' },
  { k: 'Leader', h: 'Would you rather lead a team or be in one?', ex: 'I’d rather be in one. Leading is stressful.' },
  { k: 'Weekend', h: 'Would you rather go out or stay in this weekend?', ex: 'I’d rather stay in and watch a series.' },
  { k: 'Your boss', h: 'What would you rather your boss did?', ex: 'I’d rather he gave us Fridays off.' },
  { k: 'It’s time', h: 'What is it time you changed?', ex: 'It’s time I stopped eating so much sugar.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, xm: { n: 0, esc: -1 } };

/* a linha do vídeo: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
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
  return '<div class="xm-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a sala de treino vista de cima: a grade, oito pódios em roda; cada voto acende um pódio e a barra do placar */
function sala(feitas, atual, nova) {
  var N = VOTOS.length, fim = feitas >= N, cx = 200, cy = 118, R0 = 86;
  var linhas = '';
  for (var g = 0; g <= 400; g += 25) linhas += '<line x1="' + g + '" y1="0" x2="' + g + '" y2="236"/>';
  for (var h = 0; h <= 236; h += 25) linhas += '<line x1="0" y1="' + h + '" x2="400" y2="' + h + '"/>';
  var pods = VOTOS.map(function (v, i) {
    var a = (i * 360 / N - 90) * Math.PI / 180, x = cx + R0 * 1.45 * Math.cos(a), y = cy + R0 * Math.sin(a);
    var cls = i < feitas ? (nova && i === feitas - 1 ? ' sim novo' : ' sim') : (i === atual ? ' vez' : '');
    return '<g class="xm-pod' + cls + '"><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="15"/><text x="' + x.toFixed(1) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="middle">' + (i < feitas ? '✓' : '') + '</text><text class="xm-nome" x="' + x.toFixed(1) + '" y="' + (y + 29).toFixed(1) + '" text-anchor="middle">' + v.quem + '</text></g>';
  }).join('');
  return '<div class="xm-sala vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The team vote: ' + feitas + ' of ' + N + ' votes to stay together">'
    + '<svg class="xm-svg" viewBox="0 0 400 236" aria-hidden="true"><g class="xm-grade">' + linhas + '</g><circle class="xm-centro" cx="' + cx + '" cy="' + cy + '" r="26"/>' + pods + '</svg>'
    + '<div class="xm-placar"><span>Stay together</span><div class="xm-barra"><i style="width:' + (feitas / N * 100).toFixed(0) + '%"></i></div><b>' + feitas + ' / ' + N + '</b></div>'
    + '<p class="xm-legenda">' + (fim ? 'Six votes. The team stands together.' : feitas ? 'Last vote: ' + VOTOS[feitas - 1].quem + '.' : 'The vote is open.') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · would rather, it’s time · Would you rather…?</span><h1>It’s Time We Stood Together</h1>'
    + '<p class="banda">' + FILME + ' · Marvel Animation</p>'
    + '<p class="sub">The Professor is gone, and everything he built now belongs to his old enemy. In the training room, the team votes: stay together, or split up? Tonight every right sentence wins one mutant’s voice.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Call the vote</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r xm-foto"><img src="' + img('capa') + '" alt="An empty futuristic training room with a glowing blue grid on the floor"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="xm-encarte vd"><div class="xm-capinha"><img src="' + img('mansao') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The school for mutants</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="xm-centro"><div class="pergunta vd ja"><small>Talk</small><h2>The team lost its teacher. Would you rather stay together or go your own way?</h2></div>' + mostra('enc', 'I’d rather stay together. It’s time we made the Professor proud.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', REGUA_A) + '</div>'
    + '<div class="lado-l"><div class="xm-selo vd"><b>' + FILME + '</b><small>the official trailer · cartoon action, no blood · under two minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="xm-video"><div class="xm-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="xm-cred">' + FILME + ' · official trailer (Marvel) · tap a time to hear that moment again</small></div><div class="lado-l">' + FM.ex('vm', VD_VM) + FM.ex('som', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="xm-centro">' + FM.ex('usa', VD_USA) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="xm-video"><div class="xm-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="xm-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="xm-sentido">' + x.sentido + '</span><span class="xm-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="xm-centro"><p class="xm-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the words after I’d rather and after it’s time', pronta: 'The rule is ready. It stays in the corner on the next page.' });
};

R.votacao = function (c) {
  return cab(c) + FM.fala('voto', VOTOS.map(function (v) { return { pista: '<span class="ano">' + v.quem + '</span>' + v.pista, resp: v.resp, depois: v.depois }; }), {
    rotulo: 'Vote', prox: 'Next vote', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + sala(feitas, atual, nova) + '</div>'; },
    fim: 'Six votes: the team stays together. Now be Cyclops and give the speech, three sentences. Try: I’d rather fight together than lose alone. It’s time we …'
  });
};

R.dilemas = function (c) {
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('dil', { formato: 'cartas', titulo: 'Open a card. Answer out loud. Then ask your teacher the same question.', cartas: CARTAS_D })
    + '<div class="fm-depois-chips"><span>Start with</span><em>I’d rather … than …</em><em>I’d rather not …</em><em>It’s time I …</em></div></div>' + FM.regra(PRESA) + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Team,\nIt’s time we …\nI’d rather … than …\nI’d rather you …', 'A message to the team',
    ['I’d rather', 'I’d rather not', 'I’d rather you', 'it’s time we', 'it’s high time', 'than'], ['A message to the team', 'Write to your team (at work, at school, your family, your friends): what you would rather do, what you would rather they did, and what it is time you all did.'])
    + '<div class="lado-fim"><div class="grande vd"><span>I’<u>d rather stay</u></span><span>I’d rather you <u>stayed</u></span><span>it’s time we <u>went</u></span><span>not <s>rather to stay</s>, not <s>time we go</s></span></div>'
    + mostra('fim', 'Team, it’s time we talked about our meetings. I’d rather have one long meeting than five short ones. And I’d rather you didn’t send messages after ten at night. It’s high time we had a real weekend!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'imagem', img: 'capa', alt: 'An empty futuristic training room with a glowing blue grid on the floor', rotulo: 'The training room', rot: 'I · The Training Room', t: 'Before the trailer: would you rather…?', p: 'One question at a time. The student answers; then the teacher answers too.',
  itens: [
    { q: 'You are in this training room. Would you rather fight a robot or a friend?', ex: 'I’d rather fight a robot. Friends are harder!' },
    { q: 'What is it time you did in your life?', ex: 'It’s time I learned to drive.' },
    { q: 'Would you rather lead a team or be in one?', ex: 'I’d rather be in one. Leading is stressful.' }
  ] };
/*AQ@@*/
