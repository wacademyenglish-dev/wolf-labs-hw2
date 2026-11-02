/* ============================================================
   SPIDER-MAN: BRAND NEW DAY · THE SPLIT SCREEN · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · used to (hábito do passado que acabou) × present perfect
   com for / since / ever (do passado até agora).
   Erros: use to, used to + passado, were used to (é outra coisa),
   used walk (sem to), Did … used to, Used people to…?, not used to,
   lives … since (presente com since), for + ponto / since + período,
   He haven't, Did you ever met, Have you ever meet, I am here since.
   Catálogo WOLFLIX Live (07/10): família HERÓI, modo TELA DUPLA.
   A tela forte: a foto partida do quarto do Peter. À esquerda, em
   sépia, BEFORE (used to); à direita, em cor, NOW (present perfect).
   Cada frase certa cola uma legenda no lado dela, e o controle do
   meio anda da esquerda para a direita, do antes para o agora.
   O AQUECIMENTO (aquece.js): o dado. O FECHAMENTO (final.js): o debate.
   O VÍDEO: 8TZMtslA3UY (trailer oficial, 2:40, idade 0, embed sim).
   Palavrão leve no trailer (turma adulta). Tempos da legenda (23/09):
   0:05, 0:31, 0:51, 1:28, 2:02, 2:23; cada momento contado com
   palavras nossas.
   A CARA: noite de Queens, vermelho e azul do uniforme; Big Shoulders
   Display + Instrument Sans + Permanent Marker nas legendas. A antiga
   era o set de filmagem.
   Fila: FILA-LIVE-386.md · 285.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a régua "você faria isso?" antes; True or Lie com ▶ nas falas
   do trailer; depois, separar a vida do Peter (antes do feitiço × desde então).
   V: achar a palavra errada nas mensagens e depois a placa da regra. VI: a tela
   partida com SEIS legendas, montar cada uma com as palavras e tocar Check.
   VII (era EXTRA, agora essencial): duas conversas, escolher como reagir.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'corredor', rot: 'I · Warm-up', t: 'Before the trailer: your then and now.', p: 'Answer one question at a time about your life. Talk as much as you want. Then the next question.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Spider-Man: Brand New Day. The official trailer.', p: 'Slide first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'telhado', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'corredor', rot: 'V · Used To × Have Been', t: 'One word is wrong in every message.', p: 'Find the wrong word. Say the right one. Then tap Check.' },
  { k: 'tela', est: 'o', min: 7, img: 'capa', rot: 'VI · The Split Screen', t: 'Before and now. Six captions for Peter’s split screen.', p: 'Read the words. Say the caption. Then tap Check.' },
  { k: 'vida', est: 'o', min: 6, img: 'telhado', rot: 'VII · Your Then and Now', t: 'Two moments from your life. How do you answer?', p: 'Tap an answer. Read the conversation. Then say your own.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · The Debate', t: 'The debate.', p: 'Debate.' }
];

var FILME = 'Spider-Man: Brand New Day', ANO = '2026';
var YT = '8TZMtslA3UY', DUR = 160;

var ENCARTE = [
  ['The film', '<i>Spider-Man: Brand New Day</i> (Sony and Marvel, 2026) is the fourth Spider-Man film with Tom Holland.'],
  ['Before', 'Peter Parker used to have everything: his aunt May, his girlfriend MJ, his best friend Ned. Everybody used to know his name.'],
  ['Now', 'To save the world, a spell made everyone forget him. Since then he has lived alone in a small apartment. MJ and Ned have gone to university. Nobody has remembered him.']
];

var ANTES = [
  { q: 'Have you ever lost contact with a good friend? What happened?', h: 'Yes, I have. We used to … but now …' },
  { q: 'Everybody forgets you tomorrow. What is the first thing you do?', h: 'I go to … / I call …' }
];
var DEPOIS = [
  { q: 'What used to be different in Peter’s life?', h: 'He used to …' },
  { q: 'What has changed for Peter since the spell?', h: 'He has … / Nobody has …' }
];

var TRECHOS = [
  { k: 'The happiest', ini: 0, fim: 20, ouvir: 'Is Peter happy at the start?', sentido: 'Someone tells Peter to act normal, as if this is not the happiest moment of his life. But something is wrong.', gram: 'He <b>has never been</b> so happy.' },
  { k: 'We used to know', ini: 28, fim: 45, ouvir: 'What does Peter tell MJ?', sentido: 'Peter tells someone that they don’t remember him, but they used to know each other. He made everyone forget him to stop something terrible.', gram: 'We <b>used to</b> know each other.' },
  { k: 'Something changes', ini: 48, fim: 76, ouvir: 'What is happening to Peter’s body?', sentido: 'An accident in the street, and then Peter feels something strange. His body is changing, and he doesn’t know why.', gram: 'Something <b>has happened</b> to me.' },
  { k: 'Dr. Banner', ini: 85, fim: 105, ouvir: 'Who does Peter ask for help?', sentido: 'Peter goes to Dr. Banner. A body that is changing like this could be very dangerous.', gram: '<b>Have</b> you <b>ever seen</b> this before?' },
  { k: 'The neighbor', ini: 118, fim: 150, ouvir: 'Who is the man with the flowers?', sentido: 'Someone says Peter is losing control. Then a quiet neighbor from across the hall appears, with flowers.', gram: 'He <b>has lived</b> across the hall <b>for</b> a month.' }
];

var TRAPS = [
  ['Used to: a past habit', 'We use to know each other.', 'We <b>used to</b> know each other.', 'used to + base verb · it is over now'],
  ['From then until now', 'I live here for two weeks.', 'I <b>have lived</b> here <b>for</b> two weeks.', 'have / has + past participle'],
  ['For a time, since a point', 'I have been here for Monday.', 'I have been here <b>since</b> Monday.', 'for two weeks · since Monday, since 2024'],
  ['Finished time: past simple', 'I have seen her yesterday.', 'I <b>saw</b> her yesterday.', 'yesterday, last week, in 2020 → past simple']
];

/* a tela partida: o gesto forte */
var LEGENDAS = [
  { lado: 'antes', pista: 'before · Peter · live with Aunt May', txt: 'Peter used to live with Aunt May.', r: 'Peter <b>used to live</b> with Aunt May.' },
  { lado: 'antes', pista: 'before · MJ and Peter · walk to school together', txt: 'MJ and Peter used to walk to school together.', r: 'MJ and Peter <b>used to walk</b> to school together.' },
  { lado: 'antes', pista: 'before · people · know his name? · a question', txt: 'Did people use to know his name?', r: '<b>Did</b> people <b>use to</b> know his name?' },
  { lado: 'agora', pista: 'now · Peter · live alone · since the spell', txt: 'Peter has lived alone since the spell.', r: 'Peter <b>has lived</b> alone <b>since</b> the spell.' },
  { lado: 'agora', pista: 'now · he · not see MJ · two years', txt: 'He hasn’t seen MJ for two years.', r: 'He <b>hasn’t seen</b> MJ <b>for</b> two years.' },
  { lado: 'agora', pista: 'now · you · ever · meet Dr. Banner? · a question', txt: 'Have you ever met Dr. Banner?', r: '<b>Have</b> you <b>ever met</b> Dr. Banner?' }
];
var RECUSA = {
  use: 'A past habit: used to (with d). We used to know.',
  base: 'After used to: the base verb. used to live.',
  were: 'Be used to = be familiar with. A past habit: used to walk.',
  to: 'Don’t forget the to: used to walk.',
  didused: 'After did / didn’t: use to (no d). Did you use to…?',
  q: 'Questions: Did + person + use to…?',
  neg: 'The negative: didn’t use to.',
  since: 'From then until now: have / has + participle. has lived, have been.',
  forsince: 'for + a period (two years) · since + a point (Monday, the spell).',
  has: 'He / she: has. He hasn’t seen.',
  ever: 'Life experience up to now: Have you ever met…?',
  pp: 'After have: the past participle. Have you ever met…?'
};

var VIDA = [
  { k: 'Your hair', h: 'What did your hair use to look like? Has it changed?', ex: 'I used to have long hair. I have had short hair since 2019.' },
  { k: 'Your home', h: 'Where did you use to live? How long have you lived here?', ex: 'I used to live with my parents. I have lived here for three years.' },
  { k: 'Your weekends', h: 'What did you use to do on Saturdays? What about now?', ex: 'I used to go to parties. Now I have started running.' },
  { k: 'Your friends', h: 'Who used to be your best friend? Have you seen them lately?', ex: 'Ana used to be my best friend. I haven’t seen her for years.' },
  { k: 'Your phone', h: 'What phone did you use to have? How long have you had this one?', ex: 'I used to have a flip phone! I have had this one since January.' },
  { k: 'Your English', h: 'Did you use to study English at school? How long have you studied it now?', ex: 'I used to hate it. I have studied with the teacher for a year.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>used to</b> + verb · a habit that ended<br>did / didn’t + <b>use to</b> (no d)<br><b>has / have</b> + participle · until now<br><b>for</b> two weeks · <b>since</b> Monday<br>finished time (yesterday) → <b>saw</b>';
/* III · antes: a régua */
var VD_REG = { formato: 'regua', titulo: 'Before you watch: how far would you go?', frase: 'You can keep the people you love safe, but everybody will forget you. Would you do it?', esquerda: 'No way', direita: 'Yes, I would', depois: 'Say why. What did you use to have that you would lose?' };
/* III · durante: True or Lie, com ▶ nos tempos do trailer (legenda-dados.js) */
var VD_VL = { formato: 'verdadeOuMentira', titulo: 'While you watch: true or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Someone says: “I can’t believe our first day at MIT.”', t: 1, tm: '0:02' },
  { f: 'A voice says Peter is the saddest he has ever been.', t: 0, tm: '0:07', c: 'It says: the happiest you’ve ever been in your entire life.' },
  { f: 'Peter says: “You don’t remember me, but we used to know each other.”', t: 1, tm: '0:30' },
  { f: 'Peter says he wants everyone to remember him.', t: 0, tm: '0:34', c: 'He says: make everyone forget about me.' },
  { f: 'Peter asks Dr. Banner for help.', t: 1, tm: '1:28' },
  { f: 'Someone says the flowers are a birthday gift.', t: 0, tm: '2:24', c: 'It says: a housewarming gift.' }
] };
/* III · depois: separar a vida do Peter */
var VD_SEP = { formato: 'separa', titulo: 'After the trailer: Peter’s life. Before the spell, or since? Tap a card, then a box.', caixas: ['Before the spell', 'Since the spell'], itens: [
  { t: 'He lives alone', c: 1 },
  { t: 'Everybody knew his name', c: 0 },
  { t: 'MJ is at university', c: 1 },
  { t: 'He lived with Aunt May', c: 0 },
  { t: 'Ned was his best friend', c: 0 },
  { t: 'Nobody remembers him', c: 1 }
] };
/* V · achar a palavra errada */
var VD_ERR2 = { formato: 'erro', titulo: 'Peter’s messages: one word is wrong in each. Say the right one.', itens: [
  { f: 'We <u>use</u> to know each other.', r: 'used' },
  { f: 'Peter <u>lives</u> alone since the spell.', r: 'has lived' },
  { f: 'I have been here <u>for</u> Monday.', r: 'since' },
  { f: 'Did you <u>used</u> to live with May?', r: 'use' },
  { f: 'I <u>have seen</u> her yesterday.', r: 'saw' },
  { f: 'Have you ever <u>meet</u> Dr. Banner?', r: 'met' }
] };
/* VI · montar a legenda com as palavras: cada Check cola uma legenda */
var PERG = { formato: 'pergunta', titulo: 'Build the caption from the words. Say it. Then tap Check.', depoisRot: 'Then ask each other', depois: ['Who did you use to live with?', 'How long have you lived in your house?'], itens: LEGENDAS.map(function (x) { return { p: x.pista, r: x.r }; }) };
/* VII · duas conversas: escolher como reagir */
var VD_REA1 = { formato: 'reacao', titulo: 'An old friend walks up to you. How do you answer?', quem: 'Your friend', fala: 'Wow! I haven’t seen you for ten years! You look so different.', reacoes: [
  ['Say what you used to be like', 'Ha! I used to have long hair, and I used to wear glasses.', 'And you used to be so shy! What have you done since school?'],
  ['Say what you have done since', 'I have lived in a new city since 2020. I have changed a lot.', 'Really? How long have you lived there? I have never been!'],
  ['Ask about the old days', 'Did we use to sit together at school?', 'Yes, we did! You used to share your lunch with me.'] ] };
var VD_REA2 = { formato: 'reacao', titulo: 'A new colleague asks about you. How do you answer?', quem: 'Your colleague', fala: 'Tell me about yourself. Have you always lived here?', reacoes: [
  ['Say where you used to live', 'No. I used to live with my parents in a small town.', 'Oh nice! How long have you lived here now?'],
  ['Say how long you have lived here', 'I have lived here for three years. I love it.', 'Three years! You have settled in fast.'],
  ['Say what you have never done', 'I have never lived alone before. I used to live with my family.', 'It’s a big change. Have you ever cooked for yourself?'] ] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, tl: { n: 0, esc: -1 } };

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
  return '<div class="bn-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a foto do quarto partida ao meio: sépia à esquerda (BEFORE), cor à direita (NOW); as legendas certas grudam no lado delas; o controle do meio anda do antes para o agora */
function tela(e) {
  /* 23/10/2026 · a legenda gruda no lado dela quando o Check é tocado (em qualquer ordem); a próxima de cada lado pisca */
  e = e || {}; var feitas = 0, vez = { antes: -1, agora: -1 };
  LEGENDAS.forEach(function (l, i) { if (e[i]) feitas++; else if (vez[l.lado] < 0) vez[l.lado] = i; });
  var pos = 22 + feitas * 9;
  var cola = function (lado) {
    return LEGENDAS.map(function (l, i) { return [l, i]; }).filter(function (p) { return p[0].lado === lado; }).map(function (p) {
      var i = p[1];
      if (e[i]) return '<li class="bn-leg">' + p[0].txt + '</li>';
      if (i === vez[lado]) return '<li class="bn-leg vez">· · ·</li>';
      return '';
    }).join('');
  };
  return '<div class="bn-tela vd" role="img" aria-label="The split screen: ' + feitas + ' of 6 captions"><div class="bn-quadro" style="--bg:url(\'' + img('capa') + '\')"><span class="bn-meia antes"></span><span class="bn-meia agora"></span>'
    + '<b class="bn-rot antes">Before</b><b class="bn-rot agora">Now</b>'
    + '<ul class="bn-legs antes">' + cola('antes') + '</ul><ul class="bn-legs agora">' + cola('agora') + '</ul>'
    + '<span class="bn-corte"></span></div>'
    + '<div class="bn-controle"><span>used to</span><div class="bn-trilho"><i style="left:' + pos + '%"></i></div><span>has / have + done</span></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · used to · present perfect · for, since, ever</span><h1>Brand New Day</h1>'
    + '<p class="banda">' + FILME + '</p>'
    + '<p class="sub">Peter Parker used to have everything. Then the whole world forgot him. Since that day he has lived alone. Tonight you caption his life on a split screen: what used to be, and what has been since.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Remember Peter</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r bn-foto"><img src="' + img('capa') + '" alt="A small empty apartment at night with the city lights in the window"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="bn-encarte vd"><div class="bn-capinha"><img src="' + img('corredor') + '" alt=""><div><small>' + FILME + '</small><b>Across the hall</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="bn-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Peter used to have a big group of friends. Did you use to have a group like that?</h2></div>' + mostra('enc', 'Yes, at school we used to play football every day. I haven’t seen them for years.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REG) + '</div>'
    + '<div class="lado-l"><div class="bn-selo vd"><b>Spider-Man</b><small>Brand New Day · the official trailer · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="bn-video"><div class="bn-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="bn-cred">' + FILME + ' · official trailer (Sony Pictures) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_VL) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="bn-centro">' + FM.ex('v2', VD_SEP) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="bn-video"><div class="bn-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="bn-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="bn-sentido">' + x.sentido + '</span><span class="bn-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="bn-centro"><p class="bn-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  /* a placa da regra aparece quando o aluno já achou as seis palavras */
  var e = (S.fq && S.fq.rg) || {}, corpo = FM.ex('rg', VD_ERR2);
  return cab(c) + (e.ver ? comPlaca(corpo, PRESA) : corpo);
};

R.tela = function (c) {
  var e = (S.fq && S.fq.tl && S.fq.tl.ver) || {}, n = 0;
  LEGENDAS.forEach(function (l, i) { if (e[i]) n++; });
  return cab(c) + '<div class="fm-lado2">' + tela(e) + comPlaca(FM.ex('tl', PERG), PRESA) + '</div>'
    + (n === LEGENDAS.length ? '<p class="fm-certa" style="width:min(1100px,100%);margin:16px auto 0">Both sides are captioned. Now be Peter: tell the teacher two things you used to have, and two things that have changed since the spell.</p>' : '');
};

R.vida = function (c) {
  return cab(c) + comPlaca('<div class="fm-duas">' + FM.ex('v7a', VD_REA1) + FM.ex('v7b', VD_REA2) + '</div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="bn-centro"><p class="bn-dica">The debate.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'dado', rot: 'I · Then and Now Die', t: 'Before the trailer: you, then and now.', p: 'Tap the die and answer. Then the teacher answers.', rotulo: 'Then and now', semente: 13,
  itens: [
    { q: 'What did you use to do after school?', ex: 'I used to play video games with my brother.' },
    { q: 'What food did you use to hate?', ex: 'I used to hate onions. Now I love them!' },
    { q: 'What have you done this year that is new?', ex: 'I have started yoga.' },
    { q: 'Who used to be your hero as a kid?', ex: 'My grandfather. He used to tell great stories.' },
    { q: 'How long have you known your best friend?', ex: 'I have known her since we were six.' },
    { q: 'Have you ever forgotten someone’s name at a party?', ex: 'Yes! Many times.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'debate', rot: 'VIII · The Debate', t: 'Is it better to be forgotten, if it keeps the people you love safe?', p: 'Choose a side. The teacher takes the other one. Use used to and the present perfect.',
  frase: 'It is better to be forgotten, if it keeps the people you love safe.',
  a: { rot: 'Yes, it’s better', motivos: ['Peter has saved everybody he loves.', 'Love means putting others first.', 'They have lived normal lives since then.'] },
  b: { rot: 'No, it isn’t', motivos: ['He used to have a family, and now he has nobody.', 'Friends should choose for themselves.', 'Nobody has ever been happy alone.'] },
  frases: ['He used to… but now…', 'Since then, he has…', 'I see your point, but…'] };
/*FIM@@*/
