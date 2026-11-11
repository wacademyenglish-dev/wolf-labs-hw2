/* ============================================================
   THE ODYSSEY · THE SEA ROUTE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · past simple da viagem: was / were, irregulares (took,
   ate, forgot, came), didn't + verbo base, Did he…? / Yes, he did.
   Erros: the war were, the men was, presente no lugar do passado,
   taked, did took, eated, forgeted, didn't saw, no saw, Did he stayed,
   pergunta sem did, didn't heard, comed.
   (O alvo repete o da 280, past simple: reforço entre linhas. Aqui o
   foco é was / were e os irregulares de uma viagem.)
   Catálogo WOLFLIX Live (07/10): família FANTASIA, modo JORNADA NO MAPA.
   A tela forte: o mar de Odisseu num mapa. Oito paradas de Troia a
   Ítaca; cada frase certa leva o barco para a próxima ilha e risca a
   rota em bronze. (A 267 é a outra aula do filme: a planta da casa em
   Ítaca; esta é o mar, outra cara.)
   O AQUECIMENTO (aquece.js): duas verdades e uma mentira. O FECHAMENTO
   (final.js): as perguntas.
   O VÍDEO: AyIZ9tiiN8I (trailer oficial, Universal, 2:30, idade 0,
   embed sim), o mesmo da 267. Tempos da legenda oficial; cada momento
   contado com palavras nossas. Uma fala do trailer tem palavrão e não
   é usada.
   A CARA: mar cor de vinho à noite, bronze e azul do Egeu; Cormorant
   + Mulish. A antiga era o kit "escolha a cena".
   Fila: FILA-LIVE-386.md · 282.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: três cartas de conversa; verdadeiro ou mentira e a palavra
   que você ouviu, com ▶ nas falas do trailer (legenda-dados.js); separar was
   e were + uma régua; V: a carta da Penélope -> a regra; VI: o mar falado
   (montar a pergunta de cada ilha, Check, o navio avança; 6 ilhas);
   VII (era EXTRA): a roleta da viagem + tocar cada verbo que usou.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'lore', est: 'o', min: 8, img: 'mar', rot: 'I · The Story', t: 'Before the trailer: a poem, a war, and the sea.', p: 'Tap the next stop on the map. Read the page out loud. Then answer the question.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'The Odyssey, 2026. The official trailer.', p: 'Open a card. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'mar', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'mar', rot: 'V · The Ladder', t: 'One verb, five steps, one long voyage.', p: 'Read each step out loud, then go one step up. Notice where the past lives. Then climb with your own verb.' },
  { k: 'regra', est: 'f', min: 6, img: 'ilha', rot: 'VI · Was, Were, Didn’t', t: 'Penelope writes to Odysseus. Find the pattern.', p: 'Read the letter out loud. Tap the verbs in the past. Then finish the rule.' },
  { k: 'rota', est: 'o', min: 7, img: 'mar', rot: 'VII · The Sea Route', t: 'Ask about each island, and the ship sails on.', p: 'Build the question out loud, tap Check, then ask your teacher. The teacher answers in the past.' },
  { k: 'viagem', est: 'o', min: 7, img: 'ilha', rot: 'VIII · Your Journey', t: 'Six questions about a trip you remember.', p: 'Spin for a question. Answer in the past, and tap each verb when you use it.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · Questions', t: 'Questions.', p: 'Questions.' }
];

var FILME = 'The Odyssey', ANO = '2026';
var YT = 'AyIZ9tiiN8I', DUR = 150;

var ENCARTE = [
  ['The poem', 'The <i>Odyssey</i> is a Greek poem by Homer, almost three thousand years old. In 2026 Christopher Nolan made it into a film (Universal).'],
  ['The war', 'Odysseus was the king of Ithaca. He went to the war in Troy, and the war lasted ten years. When it was over, he wanted to go home.'],
  ['The missing years', 'But the trip home took ten more years: storms, monsters, magic islands. His wife and his son waited for him in Ithaca for twenty years.']
];

var ANTES = [
  { q: 'What was your longest trip? How long was it?', h: 'My longest trip was to … It was … hours.' },
  { q: 'A man is away for twenty years. What changed at home? Guess.', h: 'His son grew up. His …' }
];
var DEPOIS = [
  { q: 'What did Odysseus remember?', h: 'He remembered …' },
  { q: 'Was the trailer exciting? What was the best moment?', h: 'Yes, it was. The best moment was …' }
];

var TRECHOS = [
  { k: 'The storm', ini: 0, fim: 39, ouvir: 'What happened at sea?', sentido: 'Ships on a dark sea, a terrible storm, and a man far from home who doesn’t remember everything.', gram: 'There <b>was</b> a storm. The ships <b>were</b> lost.' },
  { k: 'He remembered', ini: 39, fim: 55, ouvir: 'What did he remember?', sentido: 'Slowly he remembered three things: a wife, a son, and his home.', gram: 'He <b>remembered</b> his wife and his son.' },
  { k: 'The kingdom', ini: 55, fim: 71, ouvir: 'Who waited in Ithaca?', sentido: 'Ithaca waited for its king, and his son believed his father was coming home.', gram: 'His son <b>didn’t forget</b> him.' },
  { k: 'The voyage', ini: 71, fim: 108, ouvir: 'What did they find on the way?', sentido: 'Monsters, battles and the sea. The news spread: the king of Ithaca was coming back.', gram: 'They <b>saw</b> monsters. They <b>fought</b>.' },
  { k: 'The old world', ini: 108, fim: 150, ouvir: 'Was his old world still there?', sentido: 'Someone told him that his old world was gone. He decided to fight anyway, even against the gods.', gram: 'That world <b>was</b> gone. <b>Did</b> he <b>give up</b>? No, he <b>didn’t</b>.' }
];

var TRAPS = [
  ['One: was · many: were', 'The men was tired.', 'The men <b>were</b> tired.', 'I / he / she / it was · you / we / they were'],
  ['Irregular verbs', 'The wind taked the ships.', 'The wind <b>took</b> the ships.', 'take → took · eat → ate · come → came'],
  ['The negative', 'The Cyclops didn’t saw him.', 'The Cyclops <b>didn’t see</b> him.', 'didn’t + the base verb'],
  ['The question', 'Did he stayed for a year?', '<b>Did</b> he <b>stay</b> for a year?', 'Did + person + base verb']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'The war <b>was</b> over. The men <b>were</b> tired.<br>irregular: <b>took, ate, forgot, came</b><br>They <b>didn’t see</b> Ithaca · didn’t + the base verb<br><b>Did</b> he <b>stay</b>? Yes, he <b>did</b>.';
/* III · antes: três cartas para conversar */
var VD_CARTAS = { formato: 'cartas', titulo: 'Before you watch · open a card', fechada: 'Tap to open', cartas: [
  ['Twenty years', 'A man is away from home for twenty years. What changed at home?'], ['The wife', 'His wife waited. What did she do every day?'], ['The son', 'His son was a baby when he left. Who was he when his father came back?']
] };
/* III · durante: verdadeiro ou mentira e a palavra que você ouviu, cada um no minuto do trailer (legenda-dados.js) */
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'He remembers a wife, a son, and home.', t: true, tm: '0:39' },
  { f: 'A voice says: “Ithaca’s queen is coming back.”', t: false, tm: '1:11', c: 'It says: “Ithaca’s king is coming back.”' },
  { f: 'A voice says: “That world is still here.”', t: false, tm: '1:49', c: 'It says: “That world is gone.”' }
] };
var VD_SOM = { formato: 'som', itens: [
  { a: 'Don’t you ', par: ['remember', 'remain'], c: 0, b: '?', t: '0:18' },
  { a: 'My ', par: ['dad', 'dead'], c: 0, b: ' is coming home.', t: '1:00' },
  { a: 'Do you think life goes back to the way it ', par: ['was', 'wars'], c: 0, b: '?', t: '1:44' }
] };
/* III · depois: separar was e were + uma régua */
var VD_SEP = { formato: 'separa', titulo: 'Was or were? Sort them.', caixas: ['was', 'were'], itens: [
  { t: 'the war', c: 0 }, { t: 'the men', c: 1 }, { t: 'the storm', c: 0 }, { t: 'the ships', c: 1 }, { t: 'Odysseus', c: 0 }, { t: 'his wife and son', c: 1 }
] };
var VD_REG = { formato: 'regua', titulo: 'After the trailer', frase: 'It was a good idea to go home after twenty years.', esquerda: 'No way', direita: 'Sure', depois: 'Say why: It was … / He didn’t …' };
/* V · a carta da Penélope → a regra */
var CARTA = { de: 'A letter to Odysseus · from Penelope · Ithaca',
  txt: 'Dear Odysseus, the war [[was]] over, but you [[didn’t come]] home. Our son [[was]] a boy when you [[left]]. He [[took]] your old bow. The men of Ithaca [[were]] tired of waiting. Did you [[forget]] us?',
  assina: 'Penelope' };
var REGRA = [
  { a: 'The war ', par: ['was', 'were'], c: 0, b: ' over. (one thing)' },
  { a: 'The men ', par: ['was', 'were'], c: 1, b: ' tired. (many people)' },
  { a: 'He ', par: ['took', 'taked'], c: 0, b: ' the bow. (irregular: took, ate, forgot, came)' },
  { a: 'You didn’t ', par: ['come', 'came'], c: 0, b: ' home. (didn’t + the base verb)' },
  { a: 'Did he ', par: ['stay', 'stayed'], c: 0, b: ' for a year? (Did + person + base verb)' }
] ;
/* VI · as perguntas de cada ilha (seis) */
var PERG = { formato: 'pergunta', titulo: 'Build the question for each island. Ask your teacher.', depoisRot: 'Your teacher answers', depois: ['Yes, he did.', 'No, he didn’t.', 'Yes, it was.', 'They were …'], itens: [
  { p: 'Troy · (the war · be over)?', r: '<b>Was</b> the war over?' },
  { p: 'The storm · (what · the wind · take)?', r: 'What <b>did</b> the wind <b>take</b>?' },
  { p: 'The lotus island · (the men · eat · the flowers)?', r: '<b>Did</b> the men <b>eat</b> the flowers?' },
  { p: 'The cave · (the Cyclops · see · Odysseus)?', r: '<b>Did</b> the Cyclops <b>see</b> Odysseus?' },
  { p: 'The sirens · (the sailors · afraid)?', r: '<b>Were</b> the sailors afraid?' },
  { p: 'Ithaca · (how long · Odysseus · be away)?', r: 'How long <b>was</b> Odysseus away?' }
] };
/* VII · a roleta da viagem + tocar cada verbo que usou */
var VG_ROLETA = { formato: 'sorteio', titulo: 'Spin for a question', opcoes: ['Where did you go on your best trip?', 'Who was with you?', 'How did you travel? How long was it?', 'Did something go wrong?', 'What was the best part?', 'How did you feel when you came home?'], botao: 'Spin' };
var VG_USA = { formato: 'usa', titulo: 'Tell the story of your trip. Tap each verb when you use it.', palavras: ['went', 'was / were', 'took', 'saw', 'didn’t', 'came home'], fim: 'All six. Bon voyage!' };

/* a rota: o gesto forte */
var ILHAS = [
  { nome: 'Troy', x: 368, y: 92 },
  { nome: 'The storm', x: 318, y: 168 },
  { nome: 'The lotus island', x: 252, y: 214 },
  { nome: 'The cave', x: 168, y: 176 },
  { nome: 'The sirens', x: 92, y: 116 },
  { nome: 'Ithaca', x: 44, y: 196 }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, rt: { n: 0, esc: -1 } };

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
  return '<div class="od-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o mapa do mar: oito ilhas de Troia (leste) a Ítaca (oeste); a rota já feita vira um risco de bronze, a próxima perna é pontilhada, e o barco fica na última ilha alcançada */
function mapa(feitas, atual, nova) {
  var pts = ILHAS.map(function (i) { return i.x + ',' + i.y; });
  var feito = feitas > 1 ? '<polyline class="od-feita" points="' + pts.slice(0, feitas).join(' ') + '"/>' : '';
  var prox = feitas >= 1 && feitas < ILHAS.length ? '<line class="od-prox" x1="' + ILHAS[feitas - 1].x + '" y1="' + ILHAS[feitas - 1].y + '" x2="' + ILHAS[feitas].x + '" y2="' + ILHAS[feitas].y + '"/>' : '';
  var ilhas = ILHAS.map(function (i, k) {
    var cls = k < feitas ? 'ok' : (k === atual ? 'vez' : '');
    var esq = i.x < 200;
    return '<g class="od-ilha ' + cls + '"><ellipse cx="' + i.x + '" cy="' + i.y + '" rx="13" ry="8"/><text x="' + (i.x + (esq ? 18 : -18)) + '" y="' + (i.y - 10) + '" text-anchor="' + (esq ? 'start' : 'end') + '">' + i.nome + '</text></g>';
  }).join('');
  var b = feitas ? ILHAS[Math.min(feitas, ILHAS.length) - 1] : { x: 384, y: 70 };
  var barco = '<g class="od-barco' + (nova ? ' novo' : '') + '" transform="translate(' + b.x + ',' + (b.y - 4) + ')"><path d="M-11 0 L11 0 L7 6 L-7 6 Z"/><line x1="0" y1="0" x2="0" y2="-16"/><path class="vela" d="M1 -15 L10 -5 L1 -5 Z"/></g>';
  return '<div class="od-mapa vd" role="img" aria-label="The sea route: ' + feitas + ' of ' + ILHAS.length + ' islands"><svg viewBox="0 0 412 250" class="od-svg"><rect x="0" y="0" width="412" height="250" class="od-mar"/>'
    + '<g class="od-rosa" transform="translate(372,214)"><circle r="16"/><path d="M0 -14 L3 0 L0 14 L-3 0 Z"/><text y="-19" text-anchor="middle">N</text></g>'
    + feito + prox + ilhas + barco + '</svg><p class="od-legenda">' + (feitas >= ILHAS.length ? 'Ithaca. Twenty years later, the king is home.' : 'From Troy to Ithaca · ' + feitas + ' of ' + ILHAS.length) + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · past simple · was, were · didn’t · Did he…?</span><h1>The Missing Years</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">The war in Troy was over, but the way home took ten more years. Tonight you sail with Odysseus: ask about each island in the past, and the ship moves on, from Troy to Ithaca.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Set sail</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r od-foto"><img src="' + img('capa') + '" alt="An ancient Greek ship with one sail on a dark sea at night"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="od-encarte vd"><div class="od-capinha"><img src="' + img('mar') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The wine-dark sea</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="od-centro"><div class="pergunta vd ja"><small>Talk</small><h2>His family waited twenty years. Who waited for you once? How long?</h2></div>' + mostra('enc', 'My mother waited for me at the airport for five hours. My flight was late.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vc', VD_CARTAS) + '</div>'
    + '<div class="lado-l"><div class="od-selo vd"><b>' + FILME + '</b><small>the official trailer · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="od-video"><div class="od-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="od-cred">' + FILME + ' · official trailer (Universal) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vm', VD_VM) + FM.ex('som', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('sep', VD_SEP) + '</div><div class="lado-l">' + FM.ex('reg', VD_REG) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="od-video"><div class="od-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="od-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="od-sentido">' + x.sentido + '</span><span class="od-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="od-centro"><p class="od-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the verbs in the past (and the verb after Did)', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.rota = function (c) {
  var e = (S.fq || {}).mar, ver = (e && e.ver) || {}, feitas = 0;
  PERG.itens.forEach(function (x, i) { if (ver[i]) feitas++; });
  return cab(c) + comPlaca('<div class="fm-obj">' + mapa(feitas, feitas < ILHAS.length ? feitas : -1, 0) + '</div>' + FM.ex('mar', PERG), PRESA);
};

R.viagem = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('vgr', VG_ROLETA) + '</div><div class="lado-l">' + FM.ex('vgu', VG_USA) + '</div></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="od-centro"><p class="od-dica">Questions.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'mentira', rot: 'I · Two Truths and a Lie', t: 'Before the trailer: a trip, and a lie.', p: 'The teacher reads three sentences about a trip. Two are true. Which one is the lie?',
  q: 'The teacher’s three sentences about trips. One is a lie. Which one?',
  frases: ['I once slept in an airport.', 'I swam in the sea at night.', 'I was on a boat for three days.'], mentira: 2,
  depois: 'Now you: say two true sentences and one lie about a trip, in the past. The teacher finds the lie.',
  ex: 'I lost my passport in Paris. I saw a whale. I didn’t eat for a day.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'perguntas', rot: 'VIII · Questions', t: 'Questions about your past.', p: 'Answer each question in the past. Then ask the teacher.',
  itens: [
    { q: 'Where were you ten years ago?', ex: 'I was in college. I lived with my parents.' },
    { q: 'What did you want to be as a child?', ex: 'I wanted to be a pilot.' },
    { q: 'When was the last time you were very tired?', ex: 'Last Friday. I worked twelve hours.' },
    { q: 'Did you ever get lost? Where?', ex: 'Yes, I did. In a big market in São Paulo.' },
    { q: 'What was the best year of your life? Why?', ex: '2019. I met my wife and I got a new job.' }
  ],
  depois: 'Now you ask the teacher two of these questions.' };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One verb. Climb it one step at a time.',
  degraus: [
    { r: 'verb', f: 'take', d: 'The verb, clean.' },
    { r: 'past', f: 'Odysseus <b>took</b> a ship from Troy.', d: 'took: the past, finished.' },
    { r: 'not', f: 'He <b>didn’t take</b> the short way home.', d: 'The past goes into didn’t. take is clean again.' },
    { r: '?', f: '<b>Did</b> he <b>take</b> the short way?', d: 'Did goes first. take stays clean.' },
    { r: 'short', f: 'Yes, he <b>did</b>. · No, he <b>didn’t</b>.', d: 'The short answer keeps did.' }
  ],
  nota: 'The past lives in <b>one place only</b>: in the verb (he took) or in <b>did / didn’t</b> (he didn’t take, Did he take?). Never two. And was / were: he was, they were.',
  uso: { p: 'Your turn. A trip you remember. Climb the ladder with one verb: I …, I didn’t …, Did you …?', molde: ['Last year I took …', 'I didn’t …', 'Did you …?'], ex: 'Last year I took a boat to an island. I didn’t take my phone. Did you take a trip too? Yes, I did.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
