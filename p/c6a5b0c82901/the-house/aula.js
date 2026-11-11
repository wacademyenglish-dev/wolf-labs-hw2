/* ============================================================
   THE ODYSSEY · THE HOUSE PLAN · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A1 · there is / there are; Is there…? / There isn't; his,
   her, their.
   Erros: have no lugar de there is (Have a table in the hall), there
   is + plural, there are + singular, a old (an), his / her trocados,
   the bed of him, they cups, There is a king? (pergunta), There no is
   / Don't have.
   Catálogo WOLFLIX Live (07/10): família FANTASIA, modo SALA DE
   ROTEIRO (o diretor de arte monta a casa).
   A tela forte: a planta de pedra da casa de Ítaca vista de cima,
   quatro cômodos; cada frase certa põe o objeto no cômodo dele.
   Regra A1 da WOLFLIX: sem retrato; as pessoas são objetos (o tear é
   dela, a cama é dele, as taças são deles).
   ⚠ Trailer: só minutagem e paráfrase. A imagem cena1-mesa (ossos)
   ficou de fora, como pedia a memória.
   O AQUECIMENTO (aquece.js): o duelo. O FECHAMENTO (final.js): o debate.
   O VÍDEO: AyIZ9tiiN8I (trailer oficial de contagem regressiva,
   Universal, 2:30, idade 0, embed sim). Tempos das falas lidos em
   23/09 (0:39, 0:55, 1:00, 1:11, 1:48).
   A CARA: pedra, bronze, mar Egeu à noite; Cinzel + Alegreya Sans. A
   antiga era o set de filmagem.
   Fila: FILA-LIVE-386.md · 267.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: uma régua antes; a palavra que você ouviu e duas escolhas,
   com ▶ nas falas do trailer (legenda-dados.js); depois, três escolhas de
   sentido. V: is ou are, his ou her, uma frase por vez (a regra aparece
   quando termina). VI: a planta com SEIS objetos; tocar o objeto e depois o
   cômodo dele (a placa de regra no canto). VII (era EXTRA): andar pela casa
   e contar o que há, um toque por frase.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'cena6-portas', rot: 'I · Warm-up and Put It in Order', t: 'Before the trailer: your house, then twenty years away from home.', p: 'Answer three questions about you. Then put four moments of the story in order and tell it.' },
  { k: 'palavras', est: 'l', img: 'cena5-janela', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'cena5-janela', rot: 'III · The Trailer', t: 'The Odyssey, 2026. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'cena6-portas', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'o', min: 4, img: 'cena6-portas', rot: 'V · Look First', t: 'Five pictures from the house.', p: 'Look at the picture. Guess what they say. Then tap to see it, and say it.' },
  { k: 'regra', est: 'f', min: 6, img: 'cena2-pao', rot: 'VI · There Is, There Are', t: 'Five sentences have a mistake. Find the fix.', p: 'Say the right words out loud. Then tap Check and read the rule.' },
  { k: 'casa', est: 'o', min: 7, img: 'capa', rot: 'VII · The House Plan', t: 'You are the art director. Put six things in their rooms.', p: 'Tap the sentence, then its room. Then say it: there is … / there are …' },
  { k: 'tua', est: 'o', min: 6, img: 'cena4-tear', rot: 'VIII · Your House', t: 'Walk through your house. Say what there is.', p: 'Say what there is. The teacher taps Got it! for each sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · The Debate', t: 'The debate.', p: 'Debate.' }
];

var FILME = 'The Odyssey', ANO = '2026';
var YT = 'AyIZ9tiiN8I', DUR = 150;

var ENCARTE = [
  ['The film', '<i>The Odyssey</i> is a film by Christopher Nolan (Universal, 2026), from a Greek poem by Homer that is almost three thousand years old.'],
  ['The king', 'Odysseus is the king of Ithaca. After a war, the trip home takes ten years.'],
  ['The house', 'At home there is his wife, his son and his old dog. And there are many bad men in the house.']
];

var ANTES = [
  { q: 'Odysseus is a king. Is his house big or small?', h: 'It is …' },
  { q: 'A man is away for twenty years. Who is in his house? Guess.', h: 'I think there is … / there are …', r: 'I think there are a lot of men in his house.' }
];
var DEPOIS = [
  { q: 'What is there in the trailer? Say three things.', h: 'There is a … There are …' },
  { q: 'Who is at home for Odysseus?', h: 'His wife, his son and his dog.' }
];

var TRECHOS = [
  { k: 'The sea', ini: 0, fim: 39, ouvir: 'What is there on the sea?', sentido: 'Ships on a dark sea, a big storm, and a man far from home.', gram: '<b>There is</b> a storm. <b>There are</b> many ships.' },
  { k: 'The memory', ini: 39, fim: 55, ouvir: 'What is in his memory?', sentido: 'His wife, his son and his home are in his memory.', gram: '<b>his</b> wife, <b>his</b> son, <b>his</b> home' },
  { k: 'The kingdom', ini: 55, fim: 71, ouvir: 'Who is on Ithaca?', sentido: 'The island is without its king. His son says: my dad is coming home.', gram: '<b>There is</b> a palace. <b>There isn’t</b> a king.' },
  { k: 'The journey', ini: 71, fim: 108, ouvir: 'What is there on the journey?', sentido: 'Monsters, battles and the sea. The news is big: the king is coming back.', gram: '<b>There are</b> monsters. <b>Is there</b> a way home?' },
  { k: 'The end', ini: 108, fim: 150, ouvir: 'Is his old world still there?', sentido: 'Somebody says: his old world is gone. Then the last big images.', gram: '<b>There aren’t</b> many friends now.' }
];

var TRAPS = [
  ['There is, not have', 'Have a big table in the hall.', '<b>There is</b> a big table in the hall.', 'a thing in a place: there is / there are'],
  ['One or many', 'There is four cups.', 'There <b>are</b> four cups.', 'one: there is · two or more: there are'],
  ['His, her', 'Penelope? It is his loom.', 'It is <b>her</b> loom.', 'a man: his · a woman: her · many: their'],
  ['Not the bed of him', 'It is the bed of him.', 'It is <b>his</b> bed.', 'his bed · her loom · their cups']
];

var COMODOS = { hall: 'The great hall', pen: 'Penelope’s room', tel: 'Telemachus’s room', patio: 'The courtyard' };
/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>There is</b> + one thing<br><b>There are</b> + two or more<br><b>Is there</b>…? · there <b>isn’t</b> / <b>aren’t</b><br><b>his</b> (a man) · <b>her</b> (a woman) · <b>their</b> (many)';
/* III · antes: uma régua */
var VD_REG = { formato: 'regua', titulo: 'Before you watch', frase: 'There is a big table in my home.', esquerda: 'No', direita: 'Yes', depois: 'Say why: There is … in my home. There are … in my home.' };
/* III · durante: a palavra que você ouviu e duas escolhas, cada uma no minuto do trailer (legenda-dados.js) */
var VD_SOM = { formato: 'som', itens: [
  { a: 'I remember a ', par: ['life', 'wife'], c: 1, b: '.', t: '0:41' },
  { a: 'A ', par: ['son', 'sun'], c: 0, b: '.', t: '0:44' },
  { a: 'My ', par: ['dead', 'dad'], c: 1, b: ' is coming home.', t: '0:58' }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'Pick the word you hear.', itens: [
  { p: 'Ithaca is a kingdom waiting for a …', o: ['king', 'queen'], c: 0, tm: '0:53' },
  { p: 'Ithaca’s king is coming …', o: ['late', 'back'], c: 1, tm: '1:10' }
] };
/* III · depois: três escolhas de sentido */
var VD_DEP = { formato: 'escolhe', titulo: 'After the trailer: pick the answer. Then say it.', itens: [
  { p: 'Odysseus remembers a wife, a son, and …', o: ['a boat', 'home', 'a dog'], c: 1, tm: '0:48', d: 'Say it: His wife, his son, his home. There is a wife. There is a son.' },
  { p: 'Somebody says: “My dad is coming home.” Who is it?', o: ['The wife', 'The son', 'The dog'], c: 1, tm: '0:58', d: 'The son. His dad is coming home.' },
  { p: 'What does somebody say about the old world?', o: ['It is new', 'It is big', 'It is gone'], c: 2, tm: '1:49', d: 'Say it: There isn’t an old world now.' }
] };
/* V · is ou are, his ou her: uma frase por vez; a regra aparece quando termina */
var VD_V = { formato: 'erro', titulo: 'Five sentences have one mistake. Say the right words.', itens: [
  { f: '<u>Have</u> a big table in the hall.', r: 'There is' },
  { f: 'There <u>is</u> four cups on the table.', r: 'are' },
  { f: 'Penelope? It is <u>his</u> loom.', r: 'her' },
  { f: 'The men have cups. These are <u>they</u> cups.', r: 'their' },
  { f: '<u>Have</u> a king in the house?', r: 'Is there' }
] };
/* VI · a planta: seis objetos, cada um no cômodo dele */
var SALAS = ['hall', 'pen', 'tel', 'patio'];
/* VII · andar pela casa */
var VD_T1 = { formato: 'contador', titulo: 'Your kitchen, your bedroom, your street: say what there is. Tap Got it! for each sentence.', botao: 'Got it!', revelar: 'Show an example', resposta: 'There is a big fridge. There are two windows. There aren’t any trees in my street.' };
var VD_T2 = { formato: 'contador', titulo: 'Your family: one thing of your mother, one of your father. Tap Got it!', botao: 'Got it!', revelar: 'Show an example', resposta: 'Her car is red. His guitar is old.' };

/* a casa: o gesto forte */
var OBJETOS = [
  { sala: 'hall', obj: 'a big table', ico: '▭', t: 'There is a big table.' },
  { sala: 'hall', obj: 'four cups', ico: '◡◡', t: 'There are four cups.' },
  { sala: 'pen', obj: 'a loom', ico: '▥', t: 'It is her loom.' },
  { sala: 'tel', obj: 'a bed', ico: '▬', t: 'It is his bed.' },
  { sala: 'patio', obj: 'an old dog', ico: '◖', t: 'There is an old dog.' },
  { sala: 'patio', obj: 'an olive tree', ico: '♣', t: 'There is an old olive tree.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, cs: { n: 0, esc: -1 } };

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
  return '<div class="it-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a planta da casa vista de cima: pedra escura, quatro cômodos; cada objeto colocado aparece no cômodo dele; o cômodo da vez brilha */
function planta(luz, ultima) {
  var n = luz.filter(Boolean).length;
  var sala = function (id) {
    var itens = OBJETOS.map(function (o, i) { return [o, i]; }).filter(function (p) { return p[0].sala === id && luz[p[1]]; }).map(function (p) {
      return '<span class="it-obj' + (p[1] === ultima ? ' novo' : '') + '"><i>' + p[0].ico + '</i>' + p[0].obj + '</span>';
    }).join('');
    return '<div class="it-sala it-' + id + '"><small>' + COMODOS[id] + '</small><div class="it-itens">' + itens + '</div></div>';
  };
  return '<div class="it-planta vd" role="img" aria-label="The house plan: ' + n + ' of ' + OBJETOS.length + ' objects"><div class="it-grade">' + sala('hall') + sala('pen') + sala('tel') + sala('patio') + '</div><p class="it-legenda">Ithaca · the palace of Odysseus</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A1 · there is · there are · his, her, their</span><h1>The House That Waited</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">The king of Ithaca is far from home for twenty years, and his house waits. Tonight you are the art director of the film: say what there is in each room, and the house is ready for him.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the house</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r it-foto"><img src="' + img('capa') + '" alt="An old stone house at night on an island, a warm light in the door"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="it-encarte vd"><div class="it-capinha"><img src="' + img('cena3-cao') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>Ithaca</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="it-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Argos, the old dog, waits twenty years. Who waits for you at home?</h2></div>' + mostra('enc', 'My cat waits for me. She is always at the door.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REG) + '</div>'
    + '<div class="lado-l"><div class="it-selo vd"><b>' + FILME + '</b><small>the official trailer · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="it-video"><div class="it-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="it-cred">' + FILME + ' · official trailer (Universal) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('som', VD_SOM) + FM.ex('esc', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="it-centro">' + FM.ex('dep', VD_DEP) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="it-video"><div class="it-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="it-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="it-sentido">' + x.sentido + '</span><span class="it-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="it-centro"><p class="it-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).v, ver = !!(e && e.ver);
  return cab(c) + '<div class="it-centro">' + FM.ex('v', VD_V)
    + (ver ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Say the five fixes, tap Check, and the rule appears.</p>') + '</div>';
};
R.casa = function (c) {
  var e = (S.fq || {}).sep, luz = OBJETOS.map(function (o, i) { return !!(e && e.em && e.em[i] === SALAS.indexOf(o.sala)); });
  var antes = S.itluz || [], nova = -1;
  luz.forEach(function (x, i) { if (x && !antes[i]) nova = i; });
  if (nova >= 0) S.itult = nova;
  S.itluz = luz;
  var pronta = luz.every(Boolean);
  return cab(c) + comPlaca('<div class="fm-obj">' + planta(luz, S.itult == null ? -1 : S.itult) + '</div>' + FM.ex('sep', { formato: 'separa', titulo: 'Put each object in its room. Tap the sentence, then the room.', caixas: [COMODOS.hall, COMODOS.pen, COMODOS.tel, COMODOS.patio], itens: OBJETOS.map(function (o) { return { t: o.t, c: SALAS.indexOf(o.sala) }; }) })
    + (pronta ? '<p class="fm-nota" style="text-align:center">The house is ready for the king. Walk the teacher through it, room by room: “In the great hall, there is …”</p>' : ''), PRESA);
};

R.tua = function (c) {
  return cab(c) + comPlaca(FM.ex('t1', VD_T1) + FM.ex('t2', VD_T2), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="it-centro"><p class="it-dica">The debate.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'duelo', rot: 'I · This or That', t: 'Before the trailer: your home, your choice.', p: 'Pick one side. Then say why. The teacher picks too.',
  itens: [
    { a: 'A big house', b: 'A small house', q: 'Which one is your house?', ex: 'A small house. There is a small garden.' },
    { a: 'The sea', b: 'The mountains', q: 'Where is your house?', ex: 'The sea. There is a beach near my city.' },
    { a: 'A dog', b: 'A cat', q: 'Which one is in your house?', ex: 'A dog. There is a dog in my house.' },
    { a: 'Travel', b: 'Stay at home', q: 'Your weekend?', ex: 'Stay at home. There is a good bed there!' },
    { a: 'A neat room', b: 'A messy room', q: 'What is your room like?', ex: 'Messy. There are clothes everywhere.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'debate', rot: 'VIII · The Debate', t: 'Is a home the people, or the house?', p: 'Choose a side. The teacher takes the other one. Use there is / there are, his / her.',
  frase: 'A home is the people, not the house.',
  a: { rot: 'The people', motivos: ['There are people you love.', 'Your family is your home.', 'A house with no people is empty.'] },
  b: { rot: 'The house too', motivos: ['Your things are in it.', 'Your bed and your room are there.', 'Your memories are in the house.'] },
  frases: ['There is / There are…', 'My house is…', 'I see your point, but…'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G12 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'fotoPrimeiro', titulo: 'Look first. What is there?',
  cenas: [
    { img: 'cena6-portas', antes: 'The hall of the stone house. A torch is on the wall.', frase: '“What is in the hall?” “<mark>There’s</mark> a torch. <mark>There are</mark> three doors.”' },
    { img: 'cena3-cao', antes: 'Outside, at the door of the house.', frase: '“Is there a dog at the door?” “Yes, <mark>there is</mark>. <mark>There’s</mark> a dog on the step.”' },
    { img: 'cena2-pao', antes: 'A table in the dark.', frase: '“What is on the table?” “<mark>There’s</mark> some bread and <mark>there’s</mark> a cup. <mark>There isn’t</mark> any food.”' },
    { img: 'cena4-tear', antes: 'Up the stairs, in a room under the roof.', frase: '“What is in the room?” “<mark>There’s</mark> a loom and <mark>there’s</mark> a bed. <mark>There isn’t</mark> a TV.”' },
    { img: 'cena5-janela', antes: 'A window. It is night.', frase: '“What is outside?” “<mark>There’s</mark> the sea. <mark>There aren’t</mark> any boats tonight.”' }
  ],
  nota: 'One thing: <b>there is</b> (there’s). More than one: <b>there are</b>. For no: <b>there isn’t</b>, <b>there aren’t</b>. Not “have”: not “have a dog”.',
  uso: { p: 'Your turn. Look at your room. Say what there is, and what there isn’t.', molde: ['There’s a …', 'There are …', 'There isn’t a …'], ex: 'There’s a bed and a lamp. There are two windows. There isn’t a TV.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_foto', GX_EXPLICA); };
