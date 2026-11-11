/* ============================================================
   ATTACK ON TITAN · THE THREE WALLS · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · can / can't / could / couldn't; be allowed to / not
   allowed to; Are we allowed to…?
   Erros: don't can, can to, allow (sem -ed), allowed sem be (we
   allowed / don't allowed), allowed sem to, can't no passado (é
   couldn't), couldn't + passado, cans / can fights, pergunta sem
   inversão.
   Catálogo WOLFLIX Live (07/10): família ANIME, modo JORNADA NO MAPA.
   A tela forte: o mapa das três muralhas visto de cima (Sina, Rose,
   Maria); cada regra certa abre um portão, de dentro para fora.
   ⚠ Trailer: legenda queimada na imagem, lida em 24/09; só minutagem e
   paráfrase. Tem titãs e mortes: aviso no guia, nada mostrado.
   O AQUECIMENTO (aquece.js): o dado. O FECHAMENTO (final.js): a
   entrevista com um soldado da Tropa de Exploração.
   O VÍDEO: af6O_McpSEA (trailer oficial legendado, 2013, 2:00 — a aula
   usa até 1:44; idade 0, embed sim).
   A CARA: pedra, verde da Tropa de Exploração, céu de tempestade;
   Anton + Barlow. A antiga era o estúdio de legenda.
   Fila: FILA-LIVE-386.md · 271.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. II: antes, uma régua e uma aposta; durante, escolher o que
   acontece e verdadeiro ou mentira, com ▶ nos minutos dos TRECHOS (a legenda
   está queimada na imagem, então só paráfrase); depois, a reação ao guarda
   do portão e ligar quem é quem. IV: o aviso do soldado na muralha -> a regra
   (carta); V: seis portões, cada frase vai para a caixa certa (agora,
   antes, regra) e o portão abre; VI (era EXTRA): quatro cartas de lugares +
   contar as frases que você disse.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'lore', est: 'o', min: 8, img: 'cidade', rot: 'I · The World', t: 'Before the trailer: the world inside the walls.', p: 'Tap the next stop on the map. Read the page out loud. Then answer the question.' },
  { k: 'video', est: 'l', min: 10, img: 'portao', rot: 'II · The Trailer', t: 'Attack on Titan, 2013. The official trailer.', p: 'Two quick opinions. Watch the trailer. Then two short tasks: tap ▶ to see any moment again.' },
  { k: 'letra', est: 'l', min: 7, img: 'portao', rot: 'III · Scene by Scene', t: 'Five moments of the trailer. Tap one, watch, then True or Lie.', p: 'Each frame is a moment in the video.' },
  { k: 'gx', est: 'f', min: 3, img: 'portao', rot: 'IV · Then and Now', t: 'Where does each sentence live in time?', p: 'Tap a sentence, then its place on the line. Notice the verbs. Then say three lines about you.' },
  { k: 'regra', est: 'f', min: 6, img: 'capa', rot: 'V · The Rules of the Wall', t: 'A soldier’s notice on the wall. Find the pattern.', p: 'Read the notice out loud. Tap can, could and allowed to. Then finish the rule.' },
  { k: 'muralhas', est: 'o', min: 7, img: 'portao', rot: 'VI · The Three Walls', t: 'Six gates, from the center to the outside. Every right answer opens one.', p: 'Say the sentence out loud. Then tap the card and the box that fits: now, before, or a rule.' },
  { k: 'regras', est: 'o', min: 6, img: 'cidade', rot: 'VII · Your Walls', t: 'Four places in your life. What can you do there? What aren’t you allowed to do?', p: 'Open a card and answer out loud. Tap the counter for each sentence you say.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · The Interview', t: 'The interview.', p: 'Interview.' }
];

var SERIE = 'Attack on Titan', ANO = '2013';
var YT = 'af6O_McpSEA', DUR = 120;

var ENCARTE = [
  ['The show', '<i>Attack on Titan</i> is a Japanese anime (2013–2023), from the manga by Hajime Isayama.'],
  ['The world', 'For one hundred years, people have lived inside three giant walls: Maria, Rose and Sina. Outside, there are titans, giants that eat people. Nobody is allowed to go outside.'],
  ['The boy', 'Eren Yeager wants to see the world outside. When a titan breaks the wall, he loses his home, and he joins the army with his friends Mikasa and Armin.']
];

var ANTES = [   /* 09/10: as perguntas de antes saem do lore (cena I) */
  { q: 'You know the walls now. In the trailer, what do you think the titan can do to the gate?', h: 'I think the titan can … / The people can’t …', r: 'I think the titan can break the gate. The people can’t stop him.' },
  { q: 'Eren, Mikasa or Armin: who do you want to see in the trailer? Why?', h: 'I want to see … because …', r: 'I want to see Mikasa, because she is the strongest fighter.' }
];
var DEPOIS = [
  { q: 'What happens to the wall?', h: 'A titan …' },
  { q: 'What can the soldiers do? What can’t the people do?', h: 'The soldiers can … The people can’t …' }
];

var TRECHOS = [
  { k: 'The walls', ini: 0, fim: 20, ouvir: 'Where do the people live?', sentido: 'People live a quiet life inside huge walls. They think they are safe.', gram: 'They <b>can</b> live there. They <b>can’t</b> go outside.' },
  { k: 'The titan', ini: 20, fim: 42, ouvir: 'What looks over the wall?', sentido: 'A giant titan looks over the wall, and the wall breaks.', gram: 'Nobody <b>could</b> stop it.' },
  { k: 'The escape', ini: 42, fim: 55, ouvir: 'What do the people do?', sentido: 'The people run to the inner walls. A boy loses his home and his mother.', gram: 'He <b>couldn’t</b> save her.' },
  { k: 'The promise', ini: 55, fim: 81, ouvir: 'What does the boy promise?', sentido: 'He promises to fight all the titans, and he becomes a soldier.', gram: 'Soldiers <b>are allowed to</b> go outside.' },
  { k: 'The battle', ini: 81, fim: 104, ouvir: 'How do the soldiers fight?', sentido: 'Soldiers fly between the houses with special gear and fight the giants.', gram: 'They <b>can</b> fly. The titans <b>can’t</b> catch them.' }
];

var TRAPS = [
  ['Can’t, not don’t can', 'People don’t can go outside.', 'People <b>can’t</b> go outside.', 'can · can’t · could · couldn’t'],
  ['Allowed, with be', 'Children don’t allowed to climb.', 'Children <b>aren’t allowed to</b> climb.', 'am / is / are (not) allowed to'],
  ['The past: could', 'As a child, Eren can’t fight.', 'As a child, Eren <b>couldn’t</b> fight.', 'past → could / couldn’t'],
  ['Questions', 'We are allowed to go outside?', '<b>Are we allowed</b> to go outside?', 'Are we allowed to…? Can we…?']
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>People can’t</b> go outside · can’t + verb<br><b>Soldiers are allowed to</b> go · be + allowed + to<br><b>As a child, he couldn’t</b> · the past: could / couldn’t<br><b>Are we allowed to</b> go? · be comes first';
/* II · antes: uma régua e uma aposta */
var VD_REG0 = { formato: 'regua', titulo: 'Before you watch', frase: 'It is better to live safe inside a wall than free outside.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why: I can’t … / I can … / I want to …' };
var VD_APOSTA = { formato: 'escolhe', titulo: 'Who do you want to see in the trailer? Tap one, then say why.', itens: [
  { p: 'Eren, Mikasa or Armin?', o: ['Eren', 'Mikasa', 'Armin'], c: -1, d: 'Say: I want to see … because he / she can …' }
] };
/* II · durante: o que acontece, em cada trecho (minutos dos TRECHOS) */
var VD_ESC = { formato: 'escolhe', titulo: 'What happens? Tap one.', itens: [
  { p: 'What looks over the wall?', o: ['A giant titan', 'A big bird', 'A ship'], c: 0, tm: '0:20', d: 'Yes: a giant titan looks over the wall, and the wall breaks.' },
  { p: 'Where do the people run?', o: ['To the inner walls', 'To the sea', 'To the forest'], c: 0, tm: '0:42', d: 'Yes: they run to the inner walls.' },
  { p: 'What does the boy promise?', o: ['To fight all the titans', 'To go home', 'To build a wall'], c: 0, tm: '0:55', d: 'Yes: he promises to fight all the titans.' }
] };
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'People live inside huge walls.', t: true, tm: '0:00' },
  { f: 'Soldiers can fly between the houses with special gear.', t: true, tm: '1:21' },
  { f: 'The titans can catch the soldiers easily.', t: false, c: 'The titans <b>can’t</b> catch them.', tm: '1:21' }
] };
/* II · depois: a reação ao guarda + quem é quem */
var VD_REA = { formato: 'reacao', titulo: 'After the trailer · at the gate', quem: 'The guard', fala: 'A guard stops you at the gate. Nobody is allowed to go outside. What do you say?', reacoes: [
  ['Ask', 'Are we allowed to go outside?', 'Only the Survey Corps are allowed.'],
  ['Say what you can do', 'I can fight very well!', 'Good. But the rule is the rule.'],
  ['Say the past', 'I couldn’t save my home. I want to help!', 'Then you can join the Training Corps.']
] };
var VD_LIGA = { formato: 'liga', titulo: 'Who is who? Match them.', ordemDireita: [2, 0, 3, 1], pares: [
  ['The soldiers', 'are allowed to go outside'], ['The people', 'aren’t allowed to go outside'], ['The titan', 'breaks the wall'], ['The boy', 'promises to fight the titans']
] };
/* IV · o aviso do soldado → a regra */
var CARTA = { de: 'From a soldier’s notebook · Wall Rose',
  txt: 'Rules of the wall. People [[can’t]] go outside. Only soldiers [[are allowed to]] open the gate. Children [[aren’t allowed to]] climb the wall. As a child, Eren [[couldn’t]] fight, but Mikasa [[can]] fight very well. And the new recruits? [[Are]] they [[allowed to]] go outside? Only the Survey Corps.',
  assina: 'A soldier' };
var REGRA = [
  { a: 'People ', par: ['can’t', 'don’t can'], c: 0, b: ' go outside. (the negative: can’t)' },
  { a: 'Only soldiers ', par: ['are allowed to', 'can to'], c: 0, b: ' open the gate. (be + allowed + to)' },
  { a: 'Children ', par: ['aren’t allowed to', 'don’t allowed to'], c: 0, b: ' climb the wall. (be, not do)' },
  { a: 'As a child, Eren ', par: ['couldn’t', 'can’t'], c: 0, b: ' fight. (before: could)' },
  { a: '', par: ['Are', 'Do'], c: 0, b: ' they allowed to go outside? (be goes first)' }
];
/* V · seis portões: cada frase vai para a caixa certa */
var PORTOES = [
  { muro: 'sina', ang: 20 }, { muro: 'sina', ang: 200 }, { muro: 'rose', ang: 70 }, { muro: 'rose', ang: 250 }, { muro: 'maria', ang: 140 }, { muro: 'maria', ang: 320 }
];
var RAIO = { sina: 60, rose: 112, maria: 164 };
var SEPARA = { formato: 'separa', titulo: 'Say the sentence. Then tap the card and its box.', caixas: ['now: can / can’t', 'before: could / couldn’t', 'a rule: (not) allowed to'], itens: [
  { t: 'Mikasa · fight very well', c: 0 },
  { t: 'Eren · as a child · fight · no', c: 1 },
  { t: 'Only soldiers · open the gate', c: 2 },
  { t: 'The titan · the wall broke · nobody stopped it', c: 1 },
  { t: 'People · go outside · the king says no', c: 2 },
  { t: 'Soldiers · fly between the houses · with their gear', c: 0 }
] };
/* VI (era EXTRA) · quatro cartas de lugares + contar as frases */
var VG_CARTAS = { formato: 'cartas', titulo: 'Open a card · answer out loud', fechada: 'Tap to open', cartas: [
  ['At work or school', 'What can you do there? What aren’t you allowed to do?'],
  ['As a child', 'What couldn’t you do? What weren’t you allowed to do?'],
  ['On a plane', 'What can’t you do there? What aren’t you allowed to do?'],
  ['In your city', 'Where can’t you go at night? Where are you allowed to go?']
] };
var VG_CONTA = { formato: 'contador', titulo: 'Your rules · six sentences', botao: 'I said one!', revelar: 'Show a model', resposta: 'We aren’t allowed to eat in class. I couldn’t swim. You can’t smoke on a plane. I can walk at night, but not in every street.' };

/* as muralhas: o gesto forte. Seis portões, de Sina (centro) até Maria (fora). */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, mr: { n: 0, esc: -1 } };

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
  return '<div class="at-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o mapa das três muralhas visto de cima: três anéis de pedra; oito portões; o aberto vira uma fresta verde, o da vez pisca devagar */
function mapa(abertos, atual, nova) {
  var c = 180, svg = '<svg viewBox="0 0 360 360" class="at-svg" aria-hidden="true">';
  svg += '<circle cx="' + c + '" cy="' + c + '" r="178" class="at-fora"/>';
  ['maria', 'rose', 'sina'].forEach(function (m) { svg += '<circle cx="' + c + '" cy="' + c + '" r="' + RAIO[m] + '" class="at-anel at-' + m + '"/>'; });
  svg += '<circle cx="' + c + '" cy="' + c + '" r="40" class="at-centro-c"/>';
  PORTOES.forEach(function (p, i) {
    var a = p.ang * Math.PI / 180, r = RAIO[p.muro], x = c + Math.cos(a) * r, y = c + Math.sin(a) * r;
    var cls = i < abertos ? (nova && i === abertos - 1 ? 'at-gate aberto novo' : 'at-gate aberto') : (i === atual ? 'at-gate vez' : 'at-gate');
    svg += '<g class="' + cls + '" transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + (p.ang + 90) + ')"><rect x="-14" y="-8" width="28" height="16" rx="2"/><text y="4" transform="rotate(' + -(p.ang + 90) + ')">' + (i + 1) + '</text></g>';
  });
  ['Sina', 'Rose', 'Maria'].forEach(function (n, j) { svg += '<text x="' + c + '" y="' + (c - [RAIO.sina, RAIO.rose, RAIO.maria][j] + 22) + '" class="at-nome">' + n + '</text>'; });
  svg += '<text x="' + c + '" y="10" class="at-nome at-out">outside · the titans</text></svg>';
  return '<div class="at-mapa vd" role="img" aria-label="The map of the three walls: ' + abertos + ' of ' + PORTOES.length + ' gates open">' + svg + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · can, can’t, could · be allowed to</span><h1>Inside the Walls</h1>'
    + '<p class="banda">' + SERIE + ' · ' + ANO + '</p>'
    + '<p class="sub">For one hundred years, people have lived inside three giant walls. The rules are simple: you can’t go outside. Tonight you open the gates, one by one, from the center to the titans.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the walls</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r at-foto"><img src="' + img('capa') + '" alt="An enormous stone wall around a medieval town at dusk"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="at-encarte vd"><div class="at-capinha"><img src="' + img('portao') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>Wall Maria</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="at-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Safe inside, or free outside? What do you choose?</h2></div>' + mostra('enc', 'Free outside! I can’t live all my life inside a wall.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vr', VD_REG0) + FM.ex('va', VD_APOSTA) + '</div>'
    + '<div class="lado-l"><div class="at-selo vd"><b>' + SERIE + '</b><small>the official trailer · Japanese with English subtitles · stop at 1:44</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="at-video"><div class="at-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="at-cred">' + SERIE + ' · official subtitled trailer (2013) · tap a time to see it again</small></div><div class="lado-l">' + FM.ex('ve', VD_ESC) + FM.ex('vm', VD_VM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vf', VD_REA) + '</div><div class="lado-l">' + FM.ex('vl', VD_LIGA) + '</div></div>';
  return cab(c) + corpo;
};

/* 23/10/2026 · Scene by Scene: cada momento é uma tarefa de toque; a explicação (sentido + gramática) abre quando as respostas estão dadas */
var LT_TF = [
 {
  "formato": "verdadeOuMentira",
  "titulo": "True or Lie? If it’s a lie, say the truth.",
  "itens": [
   {
    "f": "People live inside huge walls.",
    "t": true
   },
   {
    "f": "They can go outside whenever they want.",
    "t": false,
    "c": "No. They can’t go outside."
   },
   {
    "f": "They think they are safe.",
    "t": true
   }
  ]
 },
 {
  "formato": "verdadeOuMentira",
  "titulo": "True or Lie? If it’s a lie, say the truth.",
  "itens": [
   {
    "f": "A giant titan looks over the wall.",
    "t": true
   },
   {
    "f": "The titan is smaller than the wall.",
    "t": false,
    "c": "No. It looks over the wall: it is giant."
   },
   {
    "f": "The wall breaks, and nobody could stop it.",
    "t": true
   }
  ]
 },
 {
  "formato": "verdadeOuMentira",
  "titulo": "True or Lie? If it’s a lie, say the truth.",
  "itens": [
   {
    "f": "The people run to the inner walls.",
    "t": true
   },
   {
    "f": "The boy keeps his home.",
    "t": false,
    "c": "No. He loses his home and his mother."
   },
   {
    "f": "He couldn’t save his mother.",
    "t": true
   }
  ]
 },
 {
  "formato": "verdadeOuMentira",
  "titulo": "True or Lie? If it’s a lie, say the truth.",
  "itens": [
   {
    "f": "He promises to fight all the titans.",
    "t": true
   },
   {
    "f": "He becomes a farmer.",
    "t": false,
    "c": "No. He becomes a soldier."
   },
   {
    "f": "Soldiers are allowed to go outside.",
    "t": true
   }
  ]
 },
 {
  "formato": "verdadeOuMentira",
  "titulo": "True or Lie? If it’s a lie, say the truth.",
  "itens": [
   {
    "f": "Soldiers fly between the houses.",
    "t": true
   },
   {
    "f": "They fight without any gear.",
    "t": false,
    "c": "No. They use special gear."
   },
   {
    "f": "The titans can’t catch them.",
    "t": true
   }
  ]
 }
];
function ltTarefa(i, x) {
  var o = LT_TF[i], e = (S.fq || {})['lt' + i], n = e && e.r ? Object.keys(e.r).length : 0;
  return FM.ex('lt' + i, o) + (n >= o.itens.length ? '<div class="resposta"><b>THE MOMENT</b><span><span class="at-sentido">' + x.sentido + '</span><span class="at-gram">' + x.gram + '</span></span></div>' : '<p class="fm-nota">Watch the clip. Then tap your answers.</p>');
}
R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="at-video"><div class="at-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="at-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l">' + ltTarefa(e.sel, x) + '</div></div>'
    : '<div class="at-centro"><p class="at-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap can, could and allowed to', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.muralhas = function (c) {
  var e = (S.fq || {}).mu, em = (e && e.em) || {}, feitas = 0;
  SEPARA.itens.forEach(function (x, i) { if (em[i] === x.c) feitas++; });
  return cab(c) + comPlaca('<div class="fm-obj">' + mapa(feitas, -1, 0) + '</div>' + FM.ex('mu', SEPARA)
    + '<p class="fm-nota" style="text-align:center">' + (feitas >= PORTOES.length ? 'All six gates are open, from Sina to the outside. Now tell the teacher the rules of the walls: what people can, can’t and aren’t allowed to do.' : 'Each card in the right box opens a gate. A wrong box? Tap the card to take it back.') + '</p>', PRESA);
};

R.regras = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('rc', VG_CARTAS) + '</div><div class="lado-l">' + FM.ex('rn', VG_CONTA) + '</div></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="at-centro"><p class="at-dica">The interview.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'dado', rot: 'I · The Rules Die', t: 'Before the trailer: rules in your life.', p: 'Tap the die and answer. Then the teacher answers.', rotulo: 'Rules and freedom', semente: 7,
  itens: [
    { q: 'What weren’t you allowed to do as a child?', ex: 'I wasn’t allowed to play outside at night.' },
    { q: 'What can you do now that you couldn’t do as a child?', ex: 'Now I can drive!' },
    { q: 'What aren’t you allowed to do at work or school?', ex: 'We aren’t allowed to use our phones in meetings.' },
    { q: 'Where can’t you go in your city?', ex: 'I can’t go to some streets at night.' },
    { q: 'Can you live in one city all your life? Why?', ex: 'No, I can’t. I want to see the world.' },
    { q: 'Who decides the rules in your house?', ex: 'My mother! We aren’t allowed to say no.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'entrevista', rot: 'VIII · The Interview', t: 'Interview a soldier of the Survey Corps.', p: 'The teacher is a soldier who goes outside the walls. Ask with can, could and allowed to. Then swap: you talk about the rules of your life.',
  papel: 'a soldier of the Survey Corps', papel2: 'you, about the rules of your life',
  itens: [
    { q: 'Are you allowed to go outside the walls?', ex: 'Yes, I am. Only the Survey Corps are allowed.' },
    { q: 'What can you do that other people can’t?', ex: 'I can fly between the houses with my gear.' },
    { q: 'What weren’t you allowed to do as a child?', ex: 'I wasn’t allowed to go near the gate.' },
    { q: 'Could you sleep last night?', ex: 'No, I couldn’t. I was afraid.' },
    { q: 'What can people inside the walls do to help you?', ex: 'They can make food and fix the gear.' }
  ] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'Life inside the walls. Where does each sentence go?',
  marcos: [{ t: 'LONG AGO', s: 'before the walls' }, { t: 'YESTERDAY', s: 'last night' }, { t: 'NOW', s: 'today' }],
  frases: [
    { f: 'People couldn’t leave the city.', c: 0, d: 'couldn’t · past' },
    { f: 'Soldiers weren’t allowed to open the gate.', c: 0, d: 'weren’t allowed to · past' },
    { f: 'Armin couldn’t find his book.', c: 1, d: 'couldn’t · past' },
    { f: 'The guard wasn’t allowed to talk to us.', c: 1, d: 'wasn’t allowed to · past' },
    { f: 'Mikasa can carry the heavy box.', c: 2, d: 'can · now' },
    { f: 'We aren’t allowed to open the gate.', c: 2, d: 'aren’t allowed to · now' }
  ],
  nota: 'The past is <b>could / couldn’t</b> and <b>was / were allowed to</b>. Now is <b>can / can’t</b> and <b>am / is / are allowed to</b>. For yesterday, never can’t: it is couldn’t.',
  uso: { p: 'Your turn. One thing you couldn’t do as a kid, one thing you can do now, and one rule you are not allowed to break.', molde: ['As a kid, I couldn’t …', 'Now I can …', 'I’m not allowed to …'], ex: 'As a kid, I couldn’t swim. Now I can swim well. I’m not allowed to park in front of my building.' },
  prof: 'Let the student place the sentences alone. A wrong place comes back with one tap.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
