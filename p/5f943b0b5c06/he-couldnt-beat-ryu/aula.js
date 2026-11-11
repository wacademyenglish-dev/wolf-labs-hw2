/* ============================================================
   STREET FIGHTER · THE FINAL ROUND · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · could / couldn't + verbo (habilidade no passado), Could
   you…?, was able to (conseguiu, uma vez)
   Erros: could to, could + passado, could + -s / coulds, didn't could,
   Did you could…?, pergunta sem inversão (You could see…?), can't com
   marca de passado, was able + verbo sem to, were able com ele.
   Catálogo WOLFLIX Live (07/10): família JOGO, modo PLACAR AO VIVO.
   A tela forte: a tela de luta. O aluno contra o professor (Ryu), duas
   barras de vida; cada frase certa é um golpe na barra do Ryu, cada
   erro tocado custa um pedaço da barra do aluno. Oito golpes: K.O.
   O AQUECIMENTO (aquece.js): a escala. O FECHAMENTO (final.js): as
   perguntas.
   O VÍDEO: Xt4X4FvXk2A (trailer oficial do filme de 2026, Paramount /
   Legendary, 2:53, idade 0, embed sim). CORTADO em 1:56: depois disso
   o trailer tem dois palavrões. Tempos da legenda oficial (25/09):
   0:09, 0:31, 0:44, 1:03, 1:20; cada momento contado com palavras
   nossas. A história da aula (Ken não venceu o Ryu há 25 anos) é nossa
   e é dita como tal.
   A CARA: fliperama à noite, vermelho, amarelo e azul de HUD; Russo One
   + Chakra Petch + Press Start 2P no placar. A antiga era o set.
   Fila: FILA-LIVE-386.md · 276.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: um cronômetro; achar a palavra errada e a palavra que você
   ouviu, com ▶ nas falas do trailer (legenda-dados.js, tudo antes de 1:56);
   adivinhar quem é + uma régua; V: o placar com cinco erros (achar e dizer a
   certa), a regra aparece depois do Check; VI: a luta falada (fala + placa;
   seis rounds, a barra do Ryu cai a cada Check); VII (era EXTRA): cartas que
   viram + tocar cada forma que usou.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'rua', rot: 'I · Warm-up and Pick a Side', t: 'Before the trailer: what you could do, then two old rivals.', p: 'Answer three questions about your life. Then pick a fighter and say why he could win.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Street Fighter, 2026. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'rua', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'o', min: 4, img: 'dojo', rot: 'V · Yes, I Could', t: 'Ping-pong. Two words for each answer.', p: 'The teacher asks. Tap your true answer and say it fast. Then you ask.' },
  { k: 'regra', est: 'f', min: 6, img: 'dojo', rot: 'VI · Could', t: 'The scoreboard has five mistakes. Find the fix.', p: 'Say the right word for each mistake out loud. Then tap Check and read the rule.' },
  { k: 'luta', est: 'o', min: 7, img: 'capa', rot: 'VII · The Final Round', t: 'You against Ryu. Every right sentence is a hit.', p: 'Read the fighter and the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'antes', est: 'o', min: 7, img: 'dojo', rot: 'VIII · When You Were Ten', t: 'Six things. Could you do them when you were ten?', p: 'Open a card and answer. Then tell your story and tap each form when you use it.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · Questions', t: 'Questions.', p: 'Questions.' }
];

var FILME = 'Street Fighter', ANO = '2026';
var YT = 'Xt4X4FvXk2A', DUR = 172;

var ENCARTE = [
  ['The game', '<i>Street Fighter</i> is a fighting game from Japan (Capcom, 1987). Two players, two life bars, and one winner in every round.'],
  ['The film', 'In 2026 the game becomes a film again (Paramount and Legendary). The best fighters in the world come to one big tournament.'],
  ['Our story', 'Ryu and Ken are old friends and old rivals. Years ago Ken couldn’t beat Ryu. Tonight you fight him.']
];

var ANTES = [
  { q: 'Did you play video games as a child? Which ones?', h: 'Yes, I played … / No, I couldn’t …' },
  { q: 'Who could beat you at games when you were a kid?', h: 'My brother could beat me at …' }
];
var DEPOIS = [
  { q: 'Who comes to the tournament? Say two fighters.', h: 'Ken and …' },
  { q: 'Do you want to watch this film? Why?', h: 'Yes, because … / No, because …' }
];

var TRECHOS = [
  { k: 'The tournament', ini: 0, fim: 19, ouvir: 'Who comes to the tournament?', sentido: 'A big voice announces the news: the best fighters in the world are all here, and only one will be the champion.', gram: 'Only one fighter <b>could</b> win.' },
  { k: 'Not a warrior', ini: 28, fim: 39, ouvir: 'What does Ken do now?', sentido: 'Somebody tells Ken he isn’t a real warrior anymore, only a show. Ken smiles for the cameras.', gram: 'Before, Ken <b>could</b> fight. Now he does TV.' },
  { k: 'A second chance', ini: 39, fim: 56, ouvir: 'Is Ryu coming?', sentido: 'This tournament is a second chance. Everybody asks if Ryu is coming, but Ryu says his path is not fighting now.', gram: 'Ken <b>couldn’t</b> beat Ryu. Maybe now he can.' },
  { k: 'The finder', ini: 60, fim: 75, ouvir: 'Who finds Ryu?', sentido: 'A stranger finds Ryu in a quiet place. Her job is to find champions, even the lost ones.', gram: '<b>Could</b> you find him? Yes, I <b>could</b>.' },
  { k: 'Old friends', ini: 78, fim: 116, ouvir: 'Are Ryu and Ken happy to see each other?', sentido: 'Ryu and Ken meet again after many years. They are still friends, and still rivals. And the tournament has a secret.', gram: 'They <b>couldn’t</b> stop being rivals.' }
];

var TRAPS = [
  ['No to after could', 'Ryu could to fight.', 'Ryu <b>could fight</b>.', 'could + verb, nothing else'],
  ['The base verb', 'Ken couldn’t won.', 'Ken <b>couldn’t win</b>.', 'could is already the past'],
  ['The negative', 'He didn’t could beat Ryu.', 'He <b>couldn’t</b> beat Ryu.', 'could not = couldn’t'],
  ['The question', 'Did you could see it?', '<b>Could you</b> see it?', 'Could you…? Yes, I could.']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'Ryu <b>could fight</b> at ten · no to, no -ed<br>Ken <b>couldn’t win</b> · couldn’t + verb (no didn’t)<br><b>Could you</b> see it? · Yes, I could.<br>one success: he <b>was able to</b> win';
/* III · antes: dez segundos e uma pergunta */
var VD_CRONO = { formato: 'cronometro', titulo: 'Before you watch', texto: 'Say the names of the fighters you know. Twenty seconds.', segundos: 20 };
/* III · durante: achar a palavra errada e a palavra que você ouviu, cada uma no minuto do trailer (legenda-dados.js) */
var VD_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: '“Gathered here are the world’s best <u>cooks</u>.”', r: 'fighters', t: '0:11' },
  { f: '“You’re not a <u>teacher</u> anymore, you’re a sideshow.”', r: 'warrior', t: '0:31' },
  { f: '“The path I’m on now is not one of <u>music</u>.”', r: 'combat', t: '0:49' }
] };
var VD_SOM = { formato: 'som', itens: [
  { a: 'This is your shot at ', par: ['redemption', 'reduction'], c: 0, b: '.', t: '0:37' },
  { a: 'I’m paid to find ', par: ['champions', 'chambers'], c: 0, b: '.', t: '1:06' },
  { a: 'Good to see you, old ', par: ['friend', 'fiend'], c: 0, b: '.', t: '1:16' }
] };
/* III · depois: adivinhar quem é, e uma régua */
var VD_REV = { formato: 'revela', titulo: 'After the trailer · guess who', pistas: [
  'In our story, he couldn’t beat Ryu in the old days.', 'He could fight very well, but now he is on TV.', 'In the trailer, a voice says he is a sideshow.', 'His name has three letters.'
], resposta: 'Ken. The voice says: “You’re not a warrior anymore, you’re a sideshow.”', mais: 'Next clue', botao: 'I know it! Show' };
var VD_REG = { formato: 'regua', titulo: 'After the trailer', frase: 'This time, Ken could beat Ryu.', esquerda: 'No way', direita: 'Sure', depois: 'Say why: He could … / He couldn’t …' };
/* V · o placar com cinco erros: achar e dizer a certa */
var ERROS = { formato: 'erro', titulo: 'The scoreboard has five mistakes. Say the right word.', itens: [
  { f: 'Ryu could <u>to fight</u>.', r: 'fight' },
  { f: 'Ken couldn’t <u>won</u>.', r: 'win' },
  { f: 'He <u>didn’t could</u> beat Ryu.', r: 'couldn’t' },
  { f: '<u>Did you could</u> see it?', r: 'Could you' },
  { f: 'After years of training, Ken was able <u>win</u> a tournament.', r: 'to win' }
] };
/* VII · cartas que viram + tocar cada forma que usou */
var DZ_CARTAS = { formato: 'cartas', titulo: 'Open a card. Answer about you at ten.', fechada: 'Tap to open', cartas: [
  ['Swim', 'Could you swim when you were ten?'], ['Ride a bike', 'Could you ride a bike?'], ['Cook', 'What could you cook?'],
  ['Stay up late', 'Could you stay up late?'], ['Play a game', 'Which game could you play very well?'], ['Speak English', 'Could you speak any English at ten?']
] };
var DZ_USA = { formato: 'usa', titulo: 'Tell the teacher about you at ten. Tap each form when you use it.', palavras: ['could', 'couldn’t', 'was able to', 'Could you…?'], fim: 'All four forms. Great!' };

/* a luta: o gesto forte */
var GOLPES = [
  { quem: 'Ryu', golpe: 'a fireball', pista: 'as a kid · fight very well · YES', resp: 'As a kid, Ryu <b>could fight</b> very well.', depois: 'What could you do very well as a kid?' },
  { quem: 'Ken', golpe: 'a dragon punch', pista: 'beat Ryu in the final · NO', resp: 'Ken <b>couldn’t beat</b> Ryu in the final.', depois: 'Who could you never beat at a game?' },
  { quem: 'You', golpe: 'a quick kick', pista: 'you · see the fight? · a question', resp: '<b>Could you see</b> the fight?', depois: 'Ask the teacher: “Could you … when you were ten?”' },
  { quem: 'Ryu', golpe: 'a hurricane kick', pista: 'sleep before the final · NO', resp: 'Ryu <b>couldn’t sleep</b> before the final.', depois: 'When couldn’t you sleep? Why?' },
  { quem: 'Ken', golpe: 'a flying kick', pista: 'after years of training · win one tournament (one time)', resp: 'After years of training, Ken <b>was able to win</b> a tournament.', depois: 'What were you able to do after a lot of practice?' },
  { quem: 'Ryu', golpe: 'the final fireball', pista: 'do a fireball · when he was ten · YES', resp: 'Ryu <b>could do</b> a fireball when he was ten.', depois: 'K.O.! What could you do at ten that you can’t do now?' }
];

var DEZ = [
  { k: 'Swim', h: 'Could you swim when you were ten?', ex: 'Yes, I could. I swam every summer.' },
  { k: 'Ride a bike', h: 'Could you ride a bike?', ex: 'No, I couldn’t. I learned at twelve.' },
  { k: 'Cook', h: 'What could you cook?', ex: 'I could make eggs and rice.' },
  { k: 'Stay up late', h: 'Could you stay up late?', ex: 'No, I couldn’t. My mother was very strict.' },
  { k: 'Play a game', h: 'Which game could you play very well?', ex: 'I could play football very well.' },
  { k: 'Speak English', h: 'Could you speak any English at ten?', ex: 'I could say hello and count to ten!' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, rd: { n: 0, esc: -1, dano: 0 } };

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
  return '<div class="sx-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a tela de luta: duas barras de vida, o relógio e o round no meio; cada golpe certo tira um oitavo do Ryu, cada erro tocado tira um pedaço do aluno */
function hud(golpes, dano, nova, atual) {
  var N = GOLPES.length, ryu = Math.max(0, Math.round(100 - golpes * 100 / N)), voce = Math.max(10, 100 - dano * 6);
  var ko = golpes >= N;
  return '<div class="sx-hud vd' + (nova ? ' bate' : '') + '" role="img" aria-label="The fight: Ryu ' + ryu + ' percent, you ' + voce + ' percent">'
    + '<div class="sx-barras"><div class="sx-lado"><b>YOU</b><div class="sx-barra"><i style="width:' + voce + '%"></i></div></div>'
    + '<div class="sx-relogio"><b>' + (ko ? 'K.O.' : (99 - golpes * 16)) + '</b><small>' + (ko ? 'YOU WIN' : 'ROUND ' + (Math.min(golpes, N - 1) + 1)) + '</small></div>'
    + '<div class="sx-lado dir"><b>RYU</b><div class="sx-barra"><i style="width:' + ryu + '%"></i></div></div></div>'
    + '<div class="sx-arena">' + (nova && golpes ? '<p class="sx-hit">HIT! ' + GOLPES[golpes - 1].golpe + '</p>' : ko ? '<p class="sx-hit ko">K.O.</p>' : '<p class="sx-pronto">' + (atual >= 0 ? GOLPES[atual].quem + ' · ready' : '') + '</p>') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · could · couldn’t · was able to</span><h1>He Couldn’t Beat Ryu</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">Twenty-five years ago, in our story, Ken couldn’t beat Ryu. Now there is a new tournament, and tonight you are in the final. Two life bars, six rounds: every right sentence is a hit.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Press start</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r sx-foto"><img src="' + img('capa') + '" alt="An empty fighting arena at night under red and blue spotlights"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="sx-encarte vd"><div class="sx-capinha"><img src="' + img('rua') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The street</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="sx-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Who was your rival when you were a kid? At school, in sports, at home?</h2></div>' + mostra('enc', 'My cousin. He could run faster than me, and I couldn’t beat him.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('cr0', VD_CRONO) + '</div>'
    + '<div class="lado-l"><div class="sx-selo vd"><b>' + FILME + '</b><small>the official trailer · we stop it at 1:56</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="sx-video"><div class="sx-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="sx-cred">' + FILME + ' · official trailer (Paramount, Legendary) · stop at 1:56 · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('erro', VD_ERRO) + FM.ex('som', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('rev', VD_REV) + '</div><div class="lado-l">' + FM.ex('reg', VD_REG) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="sx-video"><div class="sx-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="sx-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="sx-sentido">' + x.sentido + '</span><span class="sx-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="sx-centro"><p class="sx-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).err, ver = !!(e && e.ver);
  return cab(c) + '<div class="sx-centro">' + FM.ex('err', ERROS)
    + (ver ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra('Ryu <b>could fight</b>: could + the verb, nothing else (no to, no -ed).<br>Ken <b>couldn’t win</b>: could not = couldn’t (no didn’t).<br><b>Could you</b> see it? Could comes first.<br>One success: <b>was / were able to</b> + verb.', 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Say the five fixes, tap Check, and the rule appears.</p>') + '</div>';
};

R.luta = function (c) {
  return cab(c) + FM.fala('luta', GOLPES.map(function (g) { return { pista: '<span class="ano">' + g.quem + '</span>' + g.pista, resp: g.resp, depois: g.depois }; }), {
    rotulo: 'Round', prox: 'Next round', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + hud(feitas, 0, atual >= 0 ? nova : 0, atual) + '</div>'; },
    fim: 'K.O.! You beat Ryu. Now tell the story of the fight to the teacher: what could Ryu do, and what couldn’t he do tonight?'
  });
};

R.antes = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('dzc', DZ_CARTAS) + '</div><div class="lado-l">' + FM.ex('dzu', DZ_USA) + '</div></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="sx-centro"><p class="sx-dica">Questions.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'escala', rot: 'I · How Good Were You?', t: 'Before the trailer: what could you do as a child?', p: 'Mark a number for each sentence and say why. The teacher marks theirs too.', rotulos: ['Not at all', 'Very well'],
  itens: [
    { q: 'As a child, I could run fast.', ex: '8. I could run faster than my brother.' },
    { q: 'I could play video games for hours.', ex: '10! I could play all day on Saturday.' },
    { q: 'I could win a fight with my brother or sister.', ex: '3. No, my sister was bigger.' },
    { q: 'I could sing well.', ex: '1. I couldn’t sing at all!' },
    { q: 'I could stay calm when I lost a game.', ex: '2. No. I couldn’t. I was very angry.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'perguntas', rot: 'VIII · Questions', t: 'Questions about you, as a child.', p: 'Answer each question with could or couldn’t. Then ask the teacher.',
  itens: [
    { q: 'What could you do very well at school?', ex: 'I could draw very well.' },
    { q: 'What couldn’t you eat as a child?', ex: 'I couldn’t eat fish. I hated it!' },
    { q: 'Could you go out alone at night when you were fifteen?', ex: 'No, I couldn’t. My father didn’t let me.' },
    { q: 'Who could beat you at video games?', ex: 'My cousin. I could never beat him.' },
    { q: 'What were you able to do after a lot of practice?', ex: 'I was able to play the guitar.' }
  ],
  depois: 'Now you ask the teacher two of these questions.' };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G8 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'respostaCurta', titulo: 'Short answers. Could and couldn’t, fast.',
  perguntas: [
    { q: 'Could you run fast when you were ten?', s: 'Yes, I <mark>could</mark>.', n: 'No, I <mark>couldn’t</mark>.', mais: 'Who was faster, you or your friends?' },
    { q: 'Could Ken beat Ryu twenty-five years ago?', s: 'Yes, he <mark>could</mark>.', n: 'No, he <mark>couldn’t</mark>.', mais: 'Why not? He couldn’t …' },
    { q: 'Could you swim when you were seven?', s: 'Yes, I <mark>could</mark>.', n: 'No, I <mark>couldn’t</mark>.', mais: 'Where did you learn?' },
    { q: 'Could your parents drive when they were eighteen?', s: 'Yes, they <mark>could</mark>.', n: 'No, they <mark>couldn’t</mark>.' },
    { q: 'Could you play video games all night when you were a kid?', s: 'Yes, I <mark>could</mark>.', n: 'No, I <mark>couldn’t</mark>.', mais: 'Which game?' },
    { q: 'Could Ryu see the next punch?', s: 'Yes, he <mark>could</mark>.', n: 'No, he <mark>couldn’t</mark>.', mais: 'How? He could …' }
  ],
  nota: 'The short answer repeats <b>could</b> or <b>couldn’t</b>. No did: not “Yes, I did could”. The question never needs did either: <b>Could you</b> swim?',
  uso: { p: 'Your turn. Ask your teacher three Could you …? questions about the past. Your teacher answers the short way.', molde: ['Could you … when you were ten?', 'Could your … ?'], ex: 'Could you ride a bike when you were six? Could your father speak English?' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_curta', GX_EXPLICA); };
