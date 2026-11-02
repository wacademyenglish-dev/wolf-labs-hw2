/* ============================================================
   SUPERMAN & LOIS · THE BARN ALBUM · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · past simple: -ed (moved), irregulares (came, grew up,
   met, had, went, told), didn't + verbo base, Did he…? / Yes, he did.
   Erros: comed, growed, meeted, haved, goed, wented, moveed, did grew,
   did met, didn't told, no told, Did he told…?, He told…? sem did,
   presente com ano no passado (he come in 1979).
   Catálogo WOLFLIX Live (07/10): família HERÓI, modo JORNADA NO MAPA.
   A tela forte: o varal de fotos na parede do celeiro dos Kent. Oito
   polaroides vazias penduradas num barbante, de 1979 a 2021; cada
   frase certa pendura a foto daquele ano, com a legenda à mão. A
   jornada de Clark, de outro planeta até a volta para a fazenda.
   (A 266 é a outra aula da série, A1: a geladeira dos Kent; esta é o
   celeiro, outra cara.)
   O AQUECIMENTO (aquece.js): a pilha. O FECHAMENTO (final.js): a
   cadeira quente, o aluno é o Clark.
   O VÍDEO: SJPJPUpNvDw (trailer oficial DC, 1:10, idade 0, embed sim).
   Tempos da legenda (23/09): 0:02, 0:10, 0:32, 0:44; cada momento
   contado com palavras nossas.
   A CARA: madeira escura do celeiro, âmbar de lâmpada, azul do Superman;
   Fraunces + Work Sans + Caveat nas legendas. A antiga era a estrada.
   Fila: FILA-LIVE-386.md · 280.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'estrada', rot: 'I · Warm-up and Put It in Order', t: 'Before the trailer: your past, then Clark’s album.', p: 'Answer three questions about your life. Then put four photos of Clark’s life in order and tell his story.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Superman & Lois. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'estrada', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 7, img: 'celeiro', rot: 'V · Martha’s Letter', t: 'Kansas, 1979. Martha writes about the night the light fell.', p: 'Read the letter out loud. Tap the verbs in the past. Then finish the rule.' },
  { k: 'album', est: 'o', min: 7, img: 'celeiro', rot: 'VI · The Barn Album', t: 'Clark’s life, one photo at a time. Hang them on the wall.', p: 'Read the year and the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'vida', est: 'o', min: 7, img: 'estrada', rot: 'VII · Ask Me', t: 'Now you are the reporter. Interview your teacher.', p: 'Build each question out loud. Tap Check. Then ask it, and find one thing you have in common.' },
  { k: 'saida', est: 'o', min: 8, img: 'capa', rot: 'VIII · The Hot Seat', t: 'Last scene. The teacher picks A or B.', p: 'Talk for three minutes. Then one minute to write what you take home.' }
];

var SERIE = 'Superman & Lois', ANO = '2021';
/* 22/10/2026 · a capa de streaming: o elenco e a arte de cada episódio (página) */
var ELENCO = [['Clark', 'the dad', 'metropole'], ['Lois', 'the mom', 'redacao'], ['Jordan', 'the son', 'celeiro'], ['Martha', 'the grandma', 'capa']];
var EPIMG = { 1: 'estrada', 2: 'mapa', 3: 'capa', 4: 'metropole', 5: 'queda', 6: 'celeiro', 7: 'redacao', 8: 'capa' };
var YT = 'SJPJPUpNvDw', DUR = 70;

var ENCARTE = [
  ['The show', '<i>Superman & Lois</i> is an American series (The CW, 2021–2024). Tyler Hoechlin is Clark Kent, and Elizabeth Tulloch is Lois Lane.'],
  ['The boy', 'A baby came to Earth from another planet. A farmer and his wife found him in Kansas and called him Clark. He grew up on their farm in Smallville.'],
  ['The man', 'Clark moved to the big city, Metropolis. He met Lois, a reporter, and they had twin boys. Years later, the family went back to the farm.']
];

var ANTES = [
  { q: 'Where did you grow up? A big city, a small town, a farm?', h: 'I grew up in …' },
  { q: 'Did you move a lot as a child?', h: 'Yes, I moved … times. / No, I didn’t.' }
];
var DEPOIS = [
  { q: 'Why did the family go back to Smallville? Guess.', h: 'I think they went back because …', r: 'I think they went back because the city was too dangerous for the boys.' },
  { q: 'Why is Jordan angry with his dad?', h: 'Because his dad lied to him.' }
];

var TRECHOS = [
  { k: 'Stories', ini: 0, fim: 9, ouvir: 'What did their dad tell the boys?', sentido: 'One of the twins says their dad told them many stories about growing up on the farm, and he loved it.', gram: 'He <b>grew up</b> here. He <b>loved</b> it.' },
  { k: 'As a family', ini: 9, fim: 20, ouvir: 'How did they come to Smallville?', sentido: 'Lois says they came to Smallville together, as a family.', gram: 'They <b>came</b> as a family.' },
  { k: 'The farm', ini: 20, fim: 31, ouvir: 'What is life like on the farm?', sentido: 'The family is on the farm now: the barn, the fields, a new school and new problems for the boys.', gram: 'They <b>moved</b> to the farm.' },
  { k: 'The secret', ini: 31, fim: 43, ouvir: 'Why is Jordan angry?', sentido: 'Jordan finds out the truth about his dad. All the times his dad was away, he didn’t tell the truth.', gram: 'You <b>lied</b> to me. You <b>didn’t tell</b> me.' },
  { k: 'This family', ini: 43, fim: 70, ouvir: 'Who needs Clark more?', sentido: 'Lois tells Clark that the world needs Superman, but right now his family needs him more.', gram: 'He <b>was</b> never home.' }
];

var TRAPS = [
  ['Irregular verbs', 'Clark comed from another planet.', 'Clark <b>came</b> from another planet.', 'come → came · grow → grew · meet → met · go → went'],
  ['Regular: -ed', 'He move to Metropolis in 1997.', 'He <b>moved</b> to Metropolis in 1997.', 'move → moved · love → loved · live → lived'],
  ['The negative', 'He didn’t told anybody.', 'He <b>didn’t tell</b> anybody.', 'didn’t + the base verb'],
  ['The question', 'Did he told Lois?', '<b>Did</b> he <b>tell</b> Lois?', 'Did + person + base verb · Yes, he did.']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* III · depois do trailer: sons parecidos e a palavra errada, cada um no minuto do trailer (legenda-dados.js) */
var SOM = [
  { a: 'Actually, I think he kind of ', par: ['lived', 'loved'], c: 1, b: ' it.', t: '0:07' },
  { a: 'We ', par: ['came', 'come'], c: 0, b: ' here as a family.', t: '0:11' },
  { a: 'All the times you were gone, you ', par: ['lie', 'lied'], c: 1, b: ' to me.', t: '0:33' },
  { a: 'Right now this family ', par: ['needs', 'needed'], c: 0, b: ' you more.', t: '0:47' }
];
var ERRO = [
  { f: 'Our <u>mom</u> told us all these stories.', r: 'dad', t: '0:02' },
  { f: 'We came here as <u>friends</u>.', r: 'a family', t: '0:11' },
  { f: 'He told the <u>girls</u>: you’re Superman.', r: 'boys', t: '0:24' },
  { f: 'The world will <u>never</u> need Superman.', r: 'always', t: '0:44' }
];
/* V · a carta da Martha (texto nosso, no mundo da série) → a regra */
var CARTA = { de: 'Smallville, Kansas · 1979',
  txt: 'Dear Jonathan, last night a bright light [[fell]] in the corn field. We [[walked]] there with a lamp, and we [[found]] a little ship. A baby was inside! He [[didn’t cry]]. We [[carried]] him home and we [[named]] him Clark. [[Did]] we do the right thing? I [[didn’t sleep]] all night.' };
var REGRA = [
  { a: 'walk → walk<b>ed</b> · name → name<b>d</b>: most verbs add ', par: ['-ed', '-ing'], c: 0 },
  { a: 'find → ', par: ['finded', 'found'], c: 1, b: ' · fall → fell: some verbs change' },
  { a: 'Negative: he ', par: ['didn’t cry', 'didn’t cried'], c: 0, b: ' (didn’t + the base verb)' },
  { a: 'Question: ', par: ['Did', 'Do'], c: 0, b: ' we do the right thing?' }
];
var PRESA = 'walk → walk<b>ed</b><br>find → <b>found</b> · come → <b>came</b><br>didn’t + verb<br><b>Did</b> he…? Yes, he did.';
/* VII · Ask me */
var PERGUNTAS = [
  { p: '(where · grow up)?', r: 'Where <b>did</b> you grow up?' },
  { p: '(have · a pet · as a kid)?', r: '<b>Did</b> you have a pet as a kid?' },
  { p: '(when · move · to your house)?', r: 'When <b>did</b> you move to your house?' },
  { p: '(tell · a lie · to your parents)?', r: '<b>Did</b> you tell a lie to your parents?' },
  { p: '(who · be · your hero)?', r: 'Who <b>was</b> your hero?' }
];
/* VIII · A ou B */
var OPA = { t: 'You are Clark, back on the farm.', d: 'The teacher is a reporter from the Daily Planet. Answer about your past: the farm, the city, the secret.', st: ['I grew up …', 'I moved to …', 'I didn’t tell …'] };
var OPB = { t: 'Your own album.', d: 'Pick two: the place where you grew up · the day you moved · a secret you kept · your hero as a kid.', st: ['When I was ten, I …', 'Nobody knew that …', 'I didn’t …'] };

/* o varal: o gesto forte */
var FOTOS = [
  { ano: '1979', leg: 'the little ship', img: 'queda', pista: 'Clark · <b>come</b> · from another planet', resp: 'Clark <b>came</b> from another planet.', depois: 'Where did your family come from?' },
  { ano: '1985', leg: 'the farm', img: 'capa', pista: 'he · <b>grow up</b> · on a farm in Kansas', resp: 'He <b>grew up</b> on a farm in Kansas.', depois: 'Where did you grow up?' },
  { ano: '1990', leg: 'the secret', img: 'celeiro', pista: 'he · <b>not tell</b> · anybody his secret', resp: 'He <b>didn’t tell</b> anybody his secret.', depois: 'Did you have a secret as a kid?' },
  { ano: '1997', leg: 'the big city', img: 'metropole', pista: 'he · <b>move</b> · to Metropolis', resp: 'He <b>moved</b> to Metropolis.', depois: 'When did you move to your house?' },
  { ano: '1998', leg: 'the reporter', img: 'redacao', pista: 'he · <b>meet</b> · Lois at the Daily Planet', resp: 'He <b>met</b> Lois at the Daily Planet.', depois: 'Where did you meet your best friend?' },
  { ano: '2021', leg: 'home again', img: 'estrada', pista: 'they · <b>go back</b> · to Smallville', resp: 'They <b>went back</b> to Smallville.', depois: 'Did you ever go back to the place where you grew up?' }
];
var RECUSA = {
  irreg: 'This verb is irregular: came, grew, met, had, went.',
  presente: 'It is the past (the year says so): came, moved, had.',
  did: 'Positive sentences have no did: he grew up, he met.',
  didnt: 'After didn’t: the base verb. didn’t tell.',
  no: 'The negative is didn’t + verb. He didn’t tell.',
  ed: 'Move ends in e: just add -d. moved.',
  didq: 'After Did: the base verb. Did he tell…?',
  pergunta: 'Questions: Did + person + verb. Did he tell…?'
};

var VIDA = [
  { k: 'A house', h: 'Where did you live when you were ten?', ex: 'I lived in a small apartment near the beach.' },
  { k: 'A friend', h: 'Who was your best friend? Where did you meet?', ex: 'My best friend was Lia. We met at school.' },
  { k: 'A trip', h: 'What was your first big trip?', ex: 'We went to Bahia. I saw the sea for the first time.' },
  { k: 'A secret', h: 'Did you ever keep a big secret?', ex: 'Yes. I broke my mother’s vase, and I didn’t tell her.' },
  { k: 'A change', h: 'When did you move? Why?', ex: 'I moved to São Paulo in 2015 for a job.' },
  { k: 'A happy day', h: 'What happened on the happiest day of your life?', ex: 'My son was born. I cried all day!' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, ab: { n: 0, esc: -1 } };

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
  return '<div class="sm-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o varal na parede do celeiro: um barbante, oito pregadores; cada foto certa é pendurada com a legenda escrita à mão; as vazias são só a moldura tracejada */
function varal(feitas, atual, nova) {
  var fotos = FOTOS.map(function (f, i) {
    var gira = [-4, 3, -2, 5, -3, 2][i];
    if (i < feitas) return '<figure class="sm-pol' + (nova && i === feitas - 1 ? ' novo' : '') + '" style="--g:' + gira + 'deg"><i class="sm-pino"></i><span class="sm-img" style="--bg:url(\'' + img(f.img) + '\')"></span><figcaption><b>' + f.ano + '</b> ' + f.leg + '</figcaption></figure>';
    return '<figure class="sm-pol vazia' + (i === atual ? ' vez' : '') + '" style="--g:0deg"><i class="sm-pino"></i><span class="sm-img"></span><figcaption><b>' + f.ano + '</b></figcaption></figure>';
  }).join('');
  return '<div class="sm-parede vd" role="img" aria-label="The barn album: ' + feitas + ' of ' + FOTOS.length + ' photos"><div class="sm-fio"></div><div class="sm-fotos">' + fotos + '</div>'
    + '<p class="sm-legenda">' + (feitas >= FOTOS.length ? 'From another planet to the farm: the whole journey.' : 'The Kent barn · ' + feitas + ' of ' + FOTOS.length + ' photos') + '</p></div>';
}

var R = {};
R.capa = function () {
  /* 22/10/2026 · a capa é a página da série num app de streaming: a arte grande, os episódios embaixo (as páginas da aula) */
  var eps = L.map(function (x, i) { return i ? '<button type="button" class="wx-ep" data-a="ir" data-n="' + i + '"><span class="wx-ep-img" style="background-image:url(\'' + img(EPIMG[i] || x.img) + '\')"><b>' + i + '</b></span><span class="wx-ep-t">' + x.rot.replace(/^[IVX]+\s*·\s*/, '') + '</span><small>' + (x.min ? x.min + ' min' : 'extra') + '</small></button>' : ''; }).join('');
  return '<div class="wx-capa"><section class="wx-hero" style="--arte:url(\'' + img('capa') + '\')">'
    + '<div class="wx-hero-tx"><div class="wx-chips"><span>WOLFLIX</span><span>A2</span><span>Past simple</span><span>' + ANO + '</span><span>Drama</span></div><p class="wx-serie">' + SERIE + '</p><h1>I Grew Up in Smallville</h1>'
    + '<p class="wx-sub">He came from another planet. He grew up on a farm. He kept a secret. Tonight you hang his life on the barn wall, one photo at a time.</p>'
    + '<div class="wx-acoes"><button type="button" class="wx-play" data-a="ir" data-n="1"><i aria-hidden="true"></i></button><span><b>Start the lesson</b><small>8 scenes · about 50 min</small></span></div></div>'
    + '<div class="wx-elenco" aria-label="Characters"><span class="wx-elenco-t">In this lesson</span>' + ELENCO.map(function (p) { return '<span class="wx-ator"><i style="background-image:url(\'' + img(p[2]) + '\')"></i><b>' + p[0] + '</b><small>' + p[1] + '</small></span>'; }).join('') + '</div>'
    + '</section><div class="wx-eps-t"><b>Scenes</b><span>Tap one to jump there</span></div><div class="wx-eps">' + eps + '</div>' + faixaLive() + '</div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="sm-encarte vd"><div class="sm-capinha"><img src="' + img('estrada') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>The road from Smallville</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="sm-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Clark grew up on a farm and moved to a big city. Did you move from a small place to a big one?</h2></div>' + mostra('enc', 'Yes. I grew up in a small town and moved to the capital at eighteen.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>Before you watch · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.r || a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="sm-selo vd"><b>' + SERIE + '</b><small>the official trailer · about one minute</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="sm-video"><div class="sm-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="sm-cred">' + SERIE + ' · official trailer (DC, The CW)</small></div><div class="lado-l">' + FM.som('som', SOM) + FM.erro('erro', ERRO) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer: talk</button></div></div></div>';
  else corpo = '<div class="mesa-c">' + DEPOIS.map(function (a, i) { return '<div class="lado-l"><div class="pergunta vd ja"><small>After · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('vb' + i, a.r || a.h, 1) + '</div>'; }).join('') + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="sm-video"><div class="sm-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="sm-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="sm-sentido">' + x.sentido + '</span><span class="sm-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="sm-centro"><p class="sm-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the verbs in the past (and the question word).', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.album = function (c) {
  return cab(c) + FM.fala('album', FOTOS.map(function (f) { return { pista: '<span class="ano">' + f.ano + '</span>' + f.pista, resp: f.resp, depois: f.depois }; }), {
    rotulo: 'Photo', prox: 'Next photo', regra: PRESA,
    lado: function (feitas, atual, nova) { return varal(feitas, atual, nova); },
    fim: 'The album is full. Walk the teacher along the wall and tell Clark’s life, photo by photo.'
  });
};

R.vida = function (c) {
  return cab(c) + FM.pergunta('ask', PERGUNTAS, { regra: PRESA, depois: ['We both …', 'You …, but I …', 'Me too!'] });
};

R.saida = function (c) {
  return cab(c) + FM.ab('ab8', OPA, OPB) + FM.reflexao('saida', [['One new verb', 'I can use now…'], ['One sentence', 'about my past…'], ['One thing', 'that was hard today…']], ['Today I learned …', 'When I was a kid, I …', 'It was hard to …']);
};

R.fim = function (c) {
  return cab(c) + '<div class="sm-centro"><p class="sm-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'pilha', rot: 'I · When I Was a Kid', t: 'Before the trailer: where did you grow up?', p: 'Turn one card at a time and finish it out loud. Then the teacher finishes it too.', rotulo: 'Finish it',
  depois: 'Which card was the best memory? Say it again.',
  itens: [
    { q: 'I grew up in …', ex: '… a small town near the mountains.' },
    { q: 'When I was ten, I lived …', ex: '… in a yellow house with my grandparents.' },
    { q: 'My best friend was … We met …', ex: '… Rafa. We met on the first day of school.' },
    { q: 'On Sundays, my family went …', ex: '… to the beach, every week.' },
    { q: 'I didn’t like …', ex: '… vegetables. I hated broccoli!' },
    { q: 'I left my town when …', ex: '… I was eighteen, for university.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: Clark Kent, back on the farm.', p: 'Sit in the hot seat as Clark. The teacher asks about your past. Then swap.',
  quem: 'Clark Kent, back on the farm',
  itens: [
    { q: 'Where did you grow up?', ex: 'I grew up here, on this farm in Smallville.' },
    { q: 'When did you move to Metropolis?', ex: 'I moved there in 1997, for a job at the Daily Planet.' },
    { q: 'How did you meet Lois?', ex: 'I met her at the newspaper. She was the best reporter.' },
    { q: 'Did you tell your sons your secret?', ex: 'No, I didn’t. Not for many years.' },
    { q: 'Why did you come back?', ex: 'My family needed me more than the world.' }
  ] };
/*FIM@@*/
