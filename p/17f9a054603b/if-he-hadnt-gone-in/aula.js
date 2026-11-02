/* ============================================================
   SOLO LEVELING · THE REPLAY · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · third conditional: if + had + particípio, would / might /
   could have + particípio (o passado que não aconteceu): if he hadn’t
   gone in, none of this would have happened.
   Erros: passado simples no if (if he didn’t go), would no if (if he
   would have been), resultado sem have (would happen, wouldn’t laughed,
   might escaped), particípio errado (have took, hadn’t chose, have
   became), will have no lugar de would have, pergunta sem inversão,
   would had.
   Catálogo WOLFLIX Live (07/10): família ANIME, modo ILHA DE EDIÇÃO.
   A tela forte: o replay da masmorra dupla. Oito quadros de mangá em
   nanquim, tortos como numa página de manhwa, cada um com o que
   aconteceu escrito em vermelho; cada frase certa passa a tinta azul por
   cima do quadro e escreve o outro caminho (o que teria acontecido). No
   fim, a página inteira reescrita. A 296 (o mesmo anime) era a janela
   azul do Sistema; esta é a página de nanquim.
   O AQUECIMENTO (aquece.js): o dado dos e-se. O FECHAMENTO (final.js): o
   debate, uma escolha decide uma vida?
   O VÍDEO: n24l9gvM3XM (o mesmo trailer 3 da 296, áudio japonês com
   legenda em inglês na imagem, 2:21, idade 0), OUTROS trechos. Tempos
   lidos da legenda na imagem (24/09). Lutas e um pouco de sangue.
   A CARA: nanquim preto, vermelho da masmorra, roxo das sombras; Dela
   Gothic One no título, Zen Kaku Gothic New no texto, Shippori Mincho
   nas legendas dos quadros.
   Fila: FILA-LIVE-386.md · 310.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. II: dois toques de opinião; quatro toques de sentido com ▶ nos
   momentos do trailer (TRECHOS; sem legenda-dados: o áudio é japonês); um
   contador de frases com If he hadn't + uma régua; IV: separar o se, o
   resultado e a pergunta (e a regra aparece); V: a página de manhwa falada
   (montar a frase, Check, a tinta azul reescreve o quadro; 6 quadros);
   VI (era EXTRA): três conversas, a reação muda o que o amigo responde.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'estatua', rot: 'I · Warm-up and The System', t: 'Before the trailer: the doors you opened, then a blue window only he can see.', p: 'Answer three questions about your life. Then read the System’s messages out loud and say what would have happened otherwise.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'II · The Trailer', t: 'Solo Leveling. The official trailer, again.', p: 'Tap an answer first. Watch the trailer. Then short tasks: tap ▶ to see any moment again.' },
  { k: 'letra', est: 'l', min: 7, img: 'estatua', rot: 'III · Scene by Scene', t: 'Five moments of the trailer. Tap one, watch, then answer.', p: 'Each frame is a moment in the video.' },
  { k: 'regra', est: 'f', min: 6, img: 'corredor', rot: 'IV · If He Hadn’t', t: 'If he hadn’t gone in, none of this would have happened. Sort the pieces.', p: 'Sort the six pieces into three boxes. Then read the rule.' },
  { k: 'replay', est: 'o', min: 7, img: 'capa', rot: 'V · The Replay', t: 'Six panels of the double dungeon. Every Check rewrites one.', p: 'Read the panel and the clue. Build the other road out loud. Then tap Check.' },
  { k: 'esses', est: 'o', min: 7, img: 'corredor', rot: 'VI · Your What-Ifs', t: 'Three friends talk about the past. What do you say?', p: 'Read what your friend says. Pick how you answer. Then read the talk out loud.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VII · The Debate', t: 'The debate.', p: 'Debate.' }
];

var FILME = 'Solo Leveling', ANO = '2024';
var YT = 'n24l9gvM3XM', DUR = 141;

var ENCARTE = [
  ['The show', '<i>Solo Leveling</i> (2024), a Japanese anime from a Korean web novel, on Crunchyroll.'],
  ['The door', 'Sung Jinwoo, the weakest hunter in the world, goes into a hidden “double dungeon” with his team. Inside, giant statues come alive, and almost everyone dies.'],
  ['The other road', 'He survives, and the System chooses him. If he hadn’t gone in, he would have stayed weak, and none of his story would have happened.']
];

var ANTES = [
  { q: 'Think of one door in your life: a job, a city, a person. What if you hadn’t opened it?', h: 'If I hadn’t …, I wouldn’t have …' },
  { q: 'Do you believe in luck, or in choices?', h: 'I believe in … because …' }
];
var DEPOIS = [
  { q: 'What would have happened if Jinwoo had quit being a hunter?', h: 'If he had quit, he would have …' },
  { q: 'Who could have helped him, and didn’t?', h: 'His team could have …' }
];

var TRECHOS = [
  { k: 'Too stubborn', ini: 24, fim: 32, ouvir: 'What does his friend say about him?', sentido: 'A friend says he is too stubborn to quit being a hunter. He says it is his fault for being weak, and he is the only one in his family who can work.', gram: 'If he <b>had quit</b>, his family <b>would have had</b> nothing.' },
  { k: 'The statue', ini: 34, fim: 44, ouvir: 'What is wrong in the chamber?', sentido: 'A huge stone statue in the dungeon seems to be looking at them.', gram: 'If they <b>had left</b> then, they <b>might have lived</b>.' },
  { k: 'Whatever the cost', ini: 52, fim: 62, ouvir: 'What does Jinwoo decide?', sentido: 'He decides he will survive, whatever the cost. He has done his best to stay alive.', gram: 'If he <b>hadn’t fought</b>, he <b>would have died</b>.' },
  { k: 'The boss', ini: 84, fim: 92, ouvir: 'Who does he face, and with whom?', sentido: 'He goes up against the boss without his party.', gram: 'If his party <b>had stayed</b>, it <b>could have been</b> easier.' },
  { k: 'I have to', ini: 88, fim: 100, ouvir: 'Why does he do it?', sentido: 'He is afraid, but he says he has to do it.', gram: 'If he <b>hadn’t done</b> it, he <b>wouldn’t have become</b> strong.' }
];

var TRAPS = [
  ['The if part: had', 'If he didn’t go in, none of this would have happened.', 'If he <b>hadn’t gone</b> in, none of this would have happened.', 'if + had + participle'],
  ['No would after if', 'If he would have been stronger, …', 'If he <b>had been</b> stronger, …', 'would only in the result'],
  ['The result: have', 'They wouldn’t laughed. They might escaped.', 'They <b>wouldn’t have laughed</b>. They <b>might have escaped</b>.', 'would / might / could + have + participle'],
  ['The question', 'What you would have done?', 'What <b>would you have done</b>?', 'What would you have done?']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'If he <b>hadn’t gone</b> in, … · if + had + participle<br>… none of this <b>would have happened</b> · would / might / could + have + participle<br>no would after if<br><b>What would you have done?</b>';
/* II · antes: dois toques de opinião */
var VD_ANT = { formato: 'escolhe', titulo: 'Before you watch. Tap, then say why.', itens: [
  { p: 'Think of one door in your life that changed everything. What kind of door was it?', o: ['a job', 'a city', 'a person'], c: -1, d: 'Say it: If I hadn’t …, I wouldn’t have …' },
  { p: 'Do you believe in luck or in choices?', o: ['luck', 'choices', 'both'], c: -1, d: 'Say why: I believe in … because …' }
] };
/* II · durante: toques de sentido, cada um no momento do trailer (TRECHOS; legenda lida na imagem em 24/09) */
var VD_ESC = { formato: 'escolhe', titulo: 'What do you see? Tap the answer.', itens: [
  { p: 'Why can’t Jinwoo quit?', tm: '0:24', o: ['He wants to be famous', 'He is the only one in his family who can work', 'He loves the monsters'], c: 1, d: 'He is the only one in his family who can work.' },
  { p: 'What seems to be looking at the hunters?', tm: '0:34', o: ['a stone statue', 'a big dog', 'the moon'], c: 0, d: 'A huge stone statue. Something is very wrong.' },
  { p: 'What does Jinwoo decide?', tm: '0:52', o: ['to go home', 'to ask for help', 'to survive, whatever the cost'], c: 2, d: 'He decides he will survive, whatever the cost.' },
  { p: 'Who goes up against the boss?', tm: '1:24', o: ['the whole party', 'the king', 'Jinwoo, without his party'], c: 2, d: 'Jinwoo goes up against the boss without his party.' }
] };
/* II · depois: contar frases com If he hadn’t + uma régua */
var VD_CONTA = { formato: 'contador', titulo: 'What-ifs · say true sentences with If he hadn’t …', botao: 'Got it!', revelar: 'Show a model', resposta: 'If he hadn’t gone in, he would have stayed weak. If the statue hadn’t moved, they might have escaped. If the System hadn’t chosen him, he would have died.' };
var VD_REG = { formato: 'regua', titulo: 'After the trailer', frase: 'Going in alone was the right choice.', esquerda: 'Wrong', direita: 'Right', depois: 'Say why: If he hadn’t …, he wouldn’t have …' };
/* IV · separe o se, o resultado e a pergunta → a regra */
var SEP = { formato: 'separa', titulo: 'The if part, the result, or a question? Sort the pieces.', caixas: ['if + had + participle', 'would / might / could + have + participle', 'a question'], itens: [
  { t: 'If he hadn’t gone in', c: 0 }, { t: 'none of this would have happened', c: 1 }, { t: 'If the statue hadn’t moved', c: 0 },
  { t: 'they might have escaped', c: 1 }, { t: 'What would you have done?', c: 2 }, { t: 'Would you have gone in?', c: 2 }
] };
/* V · montar a frase de cada quadro (a tinta azul reescreve o quadro depois do Check) */
var PERG = { formato: 'pergunta', titulo: 'Build the other road for each panel. Say it. Tap Check.', itens: [
  { p: 'if · he · not go in · none of this · happen', r: 'If he <b>hadn’t gone</b> in, none of this <b>would have happened</b>.' },
  { p: 'if · he · be stronger · they · not laugh', r: 'If he <b>had been</b> stronger, they <b>wouldn’t have laughed</b>.' },
  { p: 'if · the statue · not move · they · might · escape', r: 'If the statue <b>hadn’t moved</b>, they <b>might have escaped</b>.' },
  { p: 'what · you · do · in his place? · a question', r: 'What <b>would you have done</b> in his place?' },
  { p: 'if · the System · not choose him · he · die', r: 'If the System <b>hadn’t chosen</b> him, he <b>would have died</b>.' },
  { p: 'if · he · wait for his party · he · not become so strong', r: 'If he <b>had waited</b> for his party, he <b>wouldn’t have become</b> so strong.' }
] };
/* VI · três conversas: a reação muda o que o amigo responde */
var ES = [
  { k: 'es1', titulo: 'Friend 1 · The new job', quem: 'Friend', fala: '“I almost said no to this job. I was so scared.”', reacoes: [
    ['Be glad', 'I’m glad you said yes. If you hadn’t taken it, you wouldn’t have met Ana.', 'True! I would have missed so much.'],
    ['Ask', 'What would you have done if you had said no?', 'I would have stayed in my old town, and I might have been bored.'],
    ['Be honest', 'If I had been you, I would have said no. But you were brave.', 'Brave? I was terrified!']] },
  { k: 'es2', titulo: 'Friend 2 · The bus', quem: 'Friend', fala: '“I missed my bus this morning, and I met my best friend at the next stop.”', reacoes: [
    ['Be amazed', 'If you hadn’t missed the bus, you wouldn’t have met her!', 'I know. If the bus had been on time, I would never have said hello.'],
    ['Joke', 'You could have met a hundred friends, if you had missed the bus every day!', 'Ha! I would have been late for work every day.'],
    ['Wonder', 'What would have happened if you had caught it?', 'I would have read my book and talked to nobody.']] },
  { k: 'es3', titulo: 'Friend 3 · The old team', quem: 'Teammate', fala: '“We left him alone in the dungeon. I can’t stop thinking about it.”', reacoes: [
    ['Comfort', 'Nobody could have known. You did what you could.', 'Thank you. I needed to hear that.'],
    ['Think', 'If we had stayed, he might have lived. But we might have died too.', 'Maybe. I’ll never know.'],
    ['Look ahead', 'If you hadn’t run, you wouldn’t be here today. He would have wanted you to live.', 'Maybe. It still hurts.']] }
];

/* o replay: o gesto forte */
var PAINEIS = [
  { foi: 'He went into the double dungeon.', se: 'If he hadn’t gone in, none of this would have happened.' },
  { foi: 'He was weak, and they laughed at him.', se: 'If he had been stronger, they wouldn’t have laughed.' },
  { foi: 'The statue moved.', se: 'If the statue hadn’t moved, they might have escaped.' },
  { foi: 'He went in alone.', se: 'What would you have done in his place?' },
  { foi: 'The System chose him.', se: 'If the System hadn’t chosen him, he would have died.' },
  { foi: 'He fought the boss without his party.', se: 'If he had waited for his party, he wouldn’t have become so strong.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, rp: { n: 0, esc: -1 } };

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
  return '<div class="sq-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a página de manhwa: oito quadros tortos; o que aconteceu em vermelho, e por cima, quando a frase sai certa, o outro caminho em azul */
function pagina(feitas, atual, nova, ver) {
  var N = PAINEIS.length, fim = feitas >= N;
  var qs = PAINEIS.map(function (p, i) {
    var ok = ver ? !!ver[i] : i < feitas;
    var cls = ok ? ' outro' : (i === atual ? ' vez' : '');
    return '<div class="sq-q q' + i + cls + '"><p class="sq-foi">' + p.foi + '</p><p class="sq-se">' + p.se + '</p><b class="sq-n">' + (i + 1) + '</b></div>';
  }).join('');
  return '<div class="sq-pag vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The replay: ' + feitas + ' of ' + N + ' panels rewritten"><div class="sq-grade">' + qs + '</div>'
    + '<p class="sq-legenda">' + (fim ? 'The whole chapter, rewritten. The other road.' : feitas + ' of ' + N + ' panels rewritten') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · third conditional · would have, might have, could have</span><h1>If He Hadn’t Gone In</h1>'
    + '<p class="banda">' + FILME + ' · Crunchyroll</p>'
    + '<p class="sub">His whole story hangs on one door. If he hadn’t gone in, none of it would have happened. Tonight you replay the double dungeon, panel by panel, and paint the other road over what really happened.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Replay the chapter</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r sq-foto"><img src="' + img('capa') + '" alt="An ink drawing of a huge stone dungeon door, half open, with a red glow inside"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="sq-encarte vd"><div class="sq-capinha"><img src="' + img('estatua') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The temple of statues</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="sq-centro"><div class="pergunta vd ja"><small>Talk</small><h2>If Jinwoo hadn’t gone in, what would his life have been like?</h2></div>' + mostra('enc', 'If he hadn’t gone in, he would have stayed weak, and he might have quit.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('ant', VD_ANT) + '</div>'
    + '<div class="lado-l"><div class="sq-selo vd"><b>' + FILME + '</b><small>the official trailer · Japanese voices, English subtitles · fights, nothing long on screen</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="sq-video"><div class="sq-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="sq-cred">' + FILME + ' · official trailer 3 (Crunchyroll) · read the English subtitles · tap a time to see it again</small></div><div class="lado-l">' + FM.ex('esc', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('cnt', VD_CONTA) + '</div><div class="lado-l">' + FM.ex('reg', VD_REG) + '</div></div>';
  return cab(c) + corpo;
};

/* 23/10/2026 · Scene by Scene: cada momento é uma tarefa de toque; a explicação (sentido + gramática) abre quando as respostas estão dadas */
var LT_TF = [
 {
  "formato": "verdadeOuMentira",
  "titulo": "True or Lie? If it’s a lie, say the truth.",
  "itens": [
   {
    "f": "A friend says he is too stubborn to quit being a hunter.",
    "t": true
   },
   {
    "f": "He says it is the friend’s fault.",
    "t": false,
    "c": "No. He says it is his own fault for being weak."
   },
   {
    "f": "He is the only one in his family who can work.",
    "t": true
   }
  ]
 },
 {
  "formato": "escolhe",
  "titulo": "What is going on in the dungeon? Tap the answer.",
  "itens": [
   {
    "p": "What is wrong in the chamber?",
    "o": [
     "A statue seems to look at them.",
     "The lights go out.",
     "Nobody is there."
    ],
    "c": 0,
    "d": "Yes. The statue seems to be looking at them."
   },
   {
    "p": "What is the statue made of?",
    "o": [
     "Stone",
     "Wood",
     "Glass"
    ],
    "c": 0,
    "d": "Yes. A huge stone statue."
   },
   {
    "p": "Where are they?",
    "o": [
     "In a dungeon",
     "In a school",
     "On a ship"
    ],
    "c": 0,
    "d": "Yes. They are in a dungeon."
   }
  ]
 },
 {
  "formato": "verdadeOuMentira",
  "titulo": "True or Lie? If it’s a lie, say the truth.",
  "itens": [
   {
    "f": "He decides he will survive, whatever the cost.",
    "t": true
   },
   {
    "f": "He gives up.",
    "t": false,
    "c": "No. He has done his best to stay alive."
   },
   {
    "f": "He has done his best to stay alive.",
    "t": true
   }
  ]
 },
 {
  "formato": "verdadeOuMentira",
  "titulo": "True or Lie? If it’s a lie, say the truth.",
  "itens": [
   {
    "f": "He goes up against the boss.",
    "t": true
   },
   {
    "f": "His party goes with him.",
    "t": false,
    "c": "No. He goes without his party."
   },
   {
    "f": "It could have been easier if his party had stayed.",
    "t": true
   }
  ]
 },
 {
  "formato": "escolhe",
  "titulo": "Why does he do it? Tap the answer.",
  "itens": [
   {
    "p": "How does he feel?",
    "o": [
     "Afraid",
     "Bored",
     "Proud"
    ],
    "c": 0,
    "d": "Yes. He is afraid."
   },
   {
    "p": "What does he say about it?",
    "o": [
     "He has to do it.",
     "He wants to go home.",
     "He wants someone else to do it."
    ],
    "c": 0,
    "d": "Yes. He is afraid, but he has to do it."
   }
  ]
 }
];
function ltTarefa(i, x) {
  var o = LT_TF[i], e = (S.fq || {})['lt' + i], n = e && e.r ? Object.keys(e.r).length : 0;
  return FM.ex('lt' + i, o) + (n >= o.itens.length ? '<div class="resposta"><b>THE MOMENT</b><span><span class="sq-sentido">' + x.sentido + '</span><span class="sq-gram">' + x.gram + '</span></span></div>' : '<p class="fm-nota">Watch the clip. Then tap your answers.</p>');
}
R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="sq-video"><div class="sq-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="sq-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l">' + ltTarefa(e.sel, x) + '</div></div>'
    : '<div class="sq-centro"><p class="sq-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).sep, tudo = !!e && SEP.itens.every(function (x, i) { return e.em && e.em[i] === x.c; });
  return cab(c) + '<div class="sq-centro">' + FM.ex('sep', SEP)
    + (tudo ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra('The if part: <b>if + had + participle</b> (If he <b>hadn’t gone</b> in, …). No would here.<br>The result: <b>would / might / could + have + participle</b> (… none of this <b>would have happened</b>).<br>The question: <b>What would you have done?</b> Would you have gone in?', 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Sort all six and the rule appears.</p>') + '</div>';
};

R.replay = function (c) {
  var e = (S.fq || {}).pg, ver = (e && e.ver) || {}, feitas = 0;
  PERG.itens.forEach(function (x, i) { if (ver[i]) feitas++; });
  var fim = feitas >= PAINEIS.length ? '<div class="fm-cena fm-fim"><p>The chapter is rewritten. Now tell the other road in three lines, as if you were the narrator.</p></div>' : '';
  return cab(c) + comPlaca('<div class="fm-obj">' + pagina(feitas, -1, 0, ver) + '</div>' + FM.ex('pg', PERG) + fim, PRESA);
};

R.esses = function (c) {
  return cab(c) + comPlaca(ES.map(function (x) { return FM.ex(x.k, { formato: 'reacao', titulo: x.titulo, quem: x.quem, fala: x.fala, reacoes: x.reacoes }); }).join(''), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="sq-centro"><p class="sq-dica">The debate.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'dado', rot: 'I · The Die of What-Ifs', t: 'Before the trailer: what if…?', p: 'Tap the die and answer. Then the teacher answers.', rotulo: 'What if', semente: 41,
  itens: [
    { q: 'If you hadn’t come to class today, what would you have done?', ex: 'I would have watched a series on the sofa.' },
    { q: 'If you had been born a hundred years ago, what would you have been?', ex: 'I would have been a farmer, like my great-grandfather.' },
    { q: 'What would you have studied if you had had more money?', ex: 'I would have studied medicine abroad.' },
    { q: 'If you hadn’t met your best friend, who would you be today?', ex: 'A quieter person! She made me brave.' },
    { q: 'What could you have done better last week?', ex: 'I could have slept more and worried less.' },
    { q: 'If you had won the lottery last year, what would you have bought first?', ex: 'I would have bought a house for my mother.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'debate', rot: 'VIII · The Debate', t: 'Can one choice decide a whole life?', p: 'Choose a side. The teacher takes the other one. Use if + had…, would have…',
  frase: 'One choice can decide a whole life.',
  a: { rot: 'Yes, it can', motivos: ['If he hadn’t gone in, nothing would have happened.', 'If I hadn’t moved, I wouldn’t have met my partner.', 'One door changes everything.'] },
  b: { rot: 'No, it’s many choices', motivos: ['He would have become strong anyway.', 'Many small choices matter more.', 'If one door had closed, another would have opened.'] },
  frases: ['If I hadn’t…, I wouldn’t have…', 'It would have happened anyway.', 'I see your point, but…'] };
/*FIM@@*/
