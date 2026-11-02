/* ============================================================
   DEMON SLAYER · THE NICHIRIN BLADE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · must / mustn't (obrigação forte / proibido), have to /
   has to / don't have to (necessário / não é necessário), had to (o
   passado), Do I have to…?
   Erros: must to, musts, don't must, mustn't × don't have to trocados
   (proibido × não precisa), have to para she, has sem to, Have I to /
   Must I to, must + passado (é had to).
   Catálogo WOLFLIX Live (07/10): família ANIME, modo SUBIR DE NÍVEL.
   A tela forte: a lâmina nichirin da prova de seleção; cada regra
   certa acende um trecho da lâmina com a cor da respiração da água, e
   a lâmina inteira muda de cor no fim.
   ⚠ Trailer: só minutagem e paráfrase. Tem demônios e lutas; nada
   mostrado na aula.
   O AQUECIMENTO (aquece.js): o ranking. O FECHAMENTO: escrita, o livro
   de regras do aluno.
   O VÍDEO: gxM1j64w4fk (trailer oficial dublado, Aniplex USA, 0:56,
   idade 0, embed sim). Tempos das legendas automáticas de 25/09.
   A CARA: roxo de glicínia, noite, azul da respiração da água; Yuji
   Syuku + Zen Kaku Gothic New. A antiga era o estúdio de legenda.
   Fila: FILA-LIVE-386.md · 272.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a conversa com o estranho na montanha (escolher como reagir)
   antes; achar a palavra errada com ▶ nas falas do trailer; depois, True or
   Lie com ▶. V: a carta do Corpo (tocar as regras) e completar a regra. VI: a
   lâmina com SEIS trechos, separar cada regra na caixa certa (acende o
   trecho). VII (era EXTRA, agora essencial): seis cartas, virar e dizer a regra.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'casa', rot: 'I · Warm-up and Put It in Order', t: 'Before the trailer: your rules, then a boy who had to become a slayer.', p: 'Answer three questions about your life. Then put four moments of Tanjiro’s story in order and tell it.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Demon Slayer. The official trailer in English.', p: 'Choose your answer first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'espada', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'espada', rot: 'V · The Rules of the Corps', t: 'A letter from the Corps: what must you do?', p: 'Tap the rules in the letter. Then finish the rule.' },
  { k: 'lamina', est: 'o', min: 7, img: 'capa', rot: 'VI · The Nichirin Blade', t: 'The Final Selection. Six rules, three boxes. Every right one lights your blade.', p: 'Tap a rule card, then its box. Then say each rule.' },
  { k: 'livro', est: 'o', min: 6, img: 'casa', rot: 'VII · Real Rules', t: 'Six places in your life. What are the rules?', p: 'Tap a card. Say one rule with must, mustn’t, have to or don’t have to.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · Your Rule Book', t: 'Your own rule book: four rules for your life.', p: 'must, mustn’t, have to, don’t have to. It goes to your My notes.' }
];

var SERIE = 'Demon Slayer', ANO = '2019';
var YT = 'gxM1j64w4fk', DUR = 56;

var ENCARTE = [
  ['The show', '<i>Demon Slayer</i> is a Japanese anime. It started in 2019.'],
  ['The boy', 'Tanjiro sells charcoal on a snowy mountain. A demon attacks his family. His sister becomes a demon too.'],
  ['The Corps', 'To save her, Tanjiro trains for two years and joins the Demon Slayer Corps. The Corps has strict rules.']
];

var ANTES = [
  { q: 'Do you like anime with fights? Which one?', h: 'Yes, I like … / No, I don’t.' },
  { q: 'Your sister becomes a monster, but she is still good. What do you do?', h: 'I have to … I mustn’t …' }
];
var DEPOIS = [
  { q: 'What does Tanjiro have to do to save his sister?', h: 'He has to …' },
  { q: 'What do you think the Corps mustn’t do?', h: 'They mustn’t …' }
];

var TRECHOS = [
  { k: 'The family', ini: 0, fim: 12, ouvir: 'Where does Tanjiro live?', sentido: 'Tanjiro lives with his family on a snowy mountain. He works hard for them.', gram: 'He <b>has to</b> sell charcoal every day.' },
  { k: 'Nezuko', ini: 12, fim: 25, ouvir: 'What happens to his sister?', sentido: 'His sister becomes a demon, but she does not attack him. She protects him.', gram: 'He <b>mustn’t</b> lose her.' },
  { k: 'The decision', ini: 25, fim: 35, ouvir: 'What does Tanjiro decide?', sentido: 'He decides to become a demon slayer and find a way to turn her back into a human.', gram: 'He <b>must</b> become strong.' },
  { k: 'The training', ini: 35, fim: 45, ouvir: 'Is the training easy?', sentido: 'The training is very hard. He trains with a sword, again and again.', gram: 'He <b>had to</b> train for two years.' },
  { k: 'The fight', ini: 45, fim: 56, ouvir: 'How does he fight?', sentido: 'He fights demons with a sword and a special way of breathing, like water.', gram: 'Slayers <b>don’t have to</b> fight alone.' }
];

var TRAPS = [
  ['No to after must', 'Slayers must to protect people.', 'Slayers <b>must protect</b> people.', 'must + verb · have TO + verb'],
  ['Forbidden: mustn’t', 'You don’t have to kill humans.', 'You <b>mustn’t</b> kill humans.', 'mustn’t = it’s a rule: NO'],
  ['Not necessary: don’t have to', 'You mustn’t wear the uniform at home.', 'You <b>don’t have to</b> wear the uniform at home.', 'don’t have to = you can, but it isn’t necessary'],
  ['The past: had to', 'Tanjiro must trained for two years.', 'Tanjiro <b>had to</b> train for two years.', 'must has no past · had to']
];

/* a lâmina: o gesto forte */
var REGRAS = [
  { t: 'Hurt humans', c: 1, tipo: 'mustn’t' },
  { t: 'Wear the uniform at home', c: 2, tipo: 'don’t have to' },
  { t: 'Protect people', c: 0, tipo: 'must' },
  { t: 'Wake up early on Sundays', c: 2, tipo: 'don’t have to' },
  { t: 'Train every day', c: 0, tipo: 'have to' },
  { t: 'Let Nezuko out in the sun', c: 1, tipo: 'mustn’t' }
];

var VIDA = [
  { k: 'Your job or school', h: 'One must, one mustn’t.', ex: 'I must arrive at 8. We mustn’t use phones in meetings.' },
  { k: 'At home', h: 'What do you have to do every day?', ex: 'I have to wash the dishes.' },
  { k: 'Driving', h: 'One must, one mustn’t.', ex: 'You must wear a seatbelt. You mustn’t drink and drive.' },
  { k: 'As a child', h: 'What did you have to do?', ex: 'I had to go to bed at 9.' },
  { k: 'On Sunday', h: 'What don’t you have to do?', ex: 'I don’t have to wake up early!' },
  { k: 'This class', h: 'One have to, one don’t have to.', ex: 'We have to speak English. We don’t have to wear a uniform.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>must</b> + verb · a rule · <b>mustn’t</b> = NO<br><b>have / has to</b> + verb · necessary<br><b>don’t have to</b> = it isn’t necessary<br>the past: <b>had to</b> (must has no past)<br>question: <b>Do I have to</b> …?';
/* III · antes: o estranho na montanha */
var VD_REA = { formato: 'reacao', titulo: 'Before you watch: a stranger stops you on a snowy mountain. How do you answer?', quem: 'The stranger', fala: 'Your sister is a demon now. Do you want to save her?', reacoes: [
  ['Say yes', 'Yes! I have to find a way. I must save her.', 'Then you must be strong. You have to train every day.'],
  ['Ask what to do', 'What do I have to do?', 'You have to join the Demon Slayers. You must not give up.'],
  ['Say you are scared', 'I am scared. But I mustn’t lose her.', 'Good. Fear is okay. But you must keep going.'] ] };
/* III · durante: uma palavra está errada, com ▶ nos tempos do trailer (legenda-dados.js) */
var VD_ERR = { formato: 'erro', titulo: 'While you watch: one word is wrong. Say the right one.', itens: [
  { f: 'Your big <u>sister</u>’s got you!', r: 'brother', t: '0:14' },
  { f: 'There’s a <u>door</u>!', r: 'way', t: '0:21' },
  { f: 'And I’ll find it no matter what it <u>costs</u>!', r: 'takes', t: '0:22' },
  { f: 'Ready or not, here I <u>go</u>!', r: 'come', t: '0:28' },
  { f: 'Tonight, you’ve come to enter the Demon Slayer <u>school</u> final selection.', r: 'course', t: '0:39' }
] };
/* III · depois: True or Lie, com ▶ */
var VD_VL = { formato: 'verdadeOuMentira', titulo: 'After the trailer: true or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Tanjiro promises to save his sister.', t: 1, tm: '0:12' },
  { f: 'Someone says there is no way to help her.', t: 0, tm: '0:21', c: 'It says: There’s a way!' },
  { f: 'Tanjiro says he will find it no matter what it takes.', t: 1, tm: '0:22' },
  { f: 'A man says goodbye to everybody at the Final Selection.', t: 0, tm: '0:45', c: 'He says: Thank you all for being here.' },
  { f: 'Tanjiro says: “Ready or not, here I come!”', t: 1, tm: '0:28' }
] };
/* V · a carta do Corpo */
var CARTA_R = { formato: 'carta', carta: { de: 'The Demon Slayer Corps · The rules', txt: 'Every slayer [[must protect]] people. You [[mustn’t hurt]] humans. A slayer [[has to]] train every day. You [[don’t have to]] wear the uniform at home. Tanjiro [[had to]] train for two years. And you may ask: [[Do I have to]] go alone?', assina: 'The Corps' },
  toque: 'Tap the rules in the letter', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner.',
  regra: [
    { a: 'Necessary: you must', par: ['to protect', 'protect'], c: 1, b: 'people.' },
    { a: 'A rule, NO →', par: ['don’t have to', 'mustn’t'], c: 1, b: 'hurt humans.' },
    { a: 'You can, but it isn’t necessary →', par: ['don’t have to', 'mustn’t'], c: 0, b: 'wear the uniform at home.' },
    { a: 'The past of must:', par: ['must', 'had to'], c: 1, b: 'train for two years.' },
    { a: 'Question:', par: ['Must I to', 'Do I have to'], c: 1, b: 'go alone?' }
  ] };
/* VI · separar cada regra na caixa certa: cada acerto acende um trecho da lâmina */
var SEP = { formato: 'separa', titulo: 'The Final Selection: tap a rule card, then its box.', caixas: ['Must / have to', 'Mustn’t', 'Don’t have to'], itens: REGRAS.map(function (x) { return { t: x.t, c: x.c }; }) };
/* VII · seis cartas: as regras da sua vida */
var VD_CARTAS = { formato: 'cartas', titulo: 'Six places in your life. Tap a card, then say the rule.', fechada: 'Tap to open', cartas: [
  ['Your job or school', 'One must, one mustn’t. What are they?'],
  ['At home', 'What do you have to do every day?'],
  ['Driving', 'One must, one mustn’t. What are they?'],
  ['As a child', 'What did you have to do?'],
  ['On Sunday', 'What don’t you have to do?'],
  ['This class', 'One have to, one don’t have to. What are they?']
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, lm: { n: 0, esc: -1 } };

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
  return '<div class="ds-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a espada deitada: cabo, guarda e oito trechos de lâmina; cada regra certa acende um trecho; com oito, a lâmina inteira ganha a cor da água */
function lamina(em) {
  /* 23/10/2026 · cada regra na caixa certa (em qualquer ordem) acende um trecho da lâmina */
  em = em || {}; var acesos = 0;
  var trechos = REGRAS.map(function (r, i) {
    var ok = em[i] === r.c; if (ok) acesos++;
    return '<span class="ds-trecho' + (ok ? ' aceso' : '') + '"><small>' + (ok ? r.tipo : '') + '</small></span>';
  }).join('');
  return '<div class="ds-espada-c vd' + (acesos >= REGRAS.length ? ' pronta' : '') + '" role="img" aria-label="The nichirin blade: ' + acesos + ' of 6 parts lit"><div class="ds-espada"><i class="ds-cabo"></i><i class="ds-guarda"></i><div class="ds-lamina">' + trechos + '<i class="ds-ponta"></i></div></div>'
    + '<p class="ds-cor">' + (acesos >= REGRAS.length ? 'Your blade is the color of water.' : acesos ? 'The color is coming…' : 'A grey blade. No color yet.') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · must, mustn’t · have to, don’t have to</span><h1>The Corps Has Rules</h1>'
    + '<p class="banda">' + SERIE + ' · Kimetsu no Yaiba</p>'
    + '<p class="sub">To save his sister, Tanjiro joins the Demon Slayer Corps, and the Corps has strict rules. Tonight is the Final Selection on the mountain of wisteria. Every right rule lights a part of your blade.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Climb the mountain</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r ds-foto"><img src="' + img('capa') + '" alt="A mountain at night covered in purple wisteria, old lanterns and a full moon"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="ds-encarte vd"><div class="ds-capinha"><img src="' + img('casa') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>The Kamado house</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="ds-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Tanjiro trains for two years for his sister. What would you do for your family?</h2></div>' + mostra('enc', 'I would work very hard. I have to help my family.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REA) + '</div>'
    + '<div class="lado-l"><div class="ds-selo vd"><b>' + SERIE + '</b><small>the official trailer in English · one minute</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="ds-video"><div class="ds-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="ds-cred">' + SERIE + ' · official English dub trailer (Aniplex USA) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_ERR) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="ds-centro">' + FM.ex('v2', VD_VL) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="ds-video"><div class="ds-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="ds-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="ds-sentido">' + x.sentido + '</span><span class="ds-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="ds-centro"><p class="ds-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('car', CARTA_R);
};

R.lamina = function (c) {
  var s = S.fq && S.fq.bl, em = (s && s.em) || {}, n = 0;
  REGRAS.forEach(function (r, i) { if (em[i] === r.c) n++; });
  return cab(c) + lamina(em) + comPlaca(FM.ex('bl', SEP), PRESA)
    + (n === REGRAS.length ? '<p class="fm-certa" style="width:min(1100px,100%);margin:16px auto 0">You passed the Final Selection. Now tell the teacher the rules of the Corps: you must protect people, you have to train every day, you mustn’t hurt humans, and you don’t have to wear the uniform at home.</p>' : '');
};

R.livro = function (c) {
  return cab(c) + comPlaca(FM.ex('lv', VD_CARTAS), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'In my life, I must …\nI mustn’t …\nI have to …\nI don’t have to …', 'Your rule book',
    ['must', 'mustn’t', 'have to', 'has to', 'don’t have to', 'had to'], ['Your rule book', 'Four rules for your life: one must, one mustn’t, one have to, one don’t have to.'])
    + '<div class="lado-fim"><div class="grande vd"><span>you <u>must</u> + verb</span><span>you <u>mustn’t</u> = NO</span><span><u>don’t have to</u> = not necessary</span><span>not <s>must to</s>, not <s>don’t must</s></span></div>'
    + mostra('fim', 'I must take care of my family. I mustn’t give up. I don’t have to wake up early on Sundays!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'ranking', rot: 'I · The Hardest Training', t: 'Before the trailer: what is the hardest training?', p: 'Tap them from the hardest to the easiest. Then explain the top and the bottom.',
  rotulo: 'The hardest training', q: 'Which one is the hardest for you? Put them in order.',
  itens: ['Waking up at 5 a.m.', 'Running 10 km', 'Cold showers', 'No sugar for a month', 'Studying 3 hours a day'],
  depois: 'Which one do you have to do in your life?', ex: 'Number 1 is waking up at 5 a.m. I hate it! The easiest is no sugar. And I have to study every day.' };
/*AQ@@*/
