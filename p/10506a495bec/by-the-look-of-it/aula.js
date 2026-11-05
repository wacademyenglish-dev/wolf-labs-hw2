/* ============================================================
   DAREDEVIL: BORN AGAIN · THE SOUND MAP · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · looks / sounds / seems + adjetivo (looks expensive) ×
   looks / sounds / seems like + substantivo ou frase (looks like a trap,
   sounds like it’s raining); the evidence: by the look of it.
   Erros: looks like + adjetivo (looks like expensive), sounds + nome sem
   like (sounds a glass), looks like + nome sem artigo (looks like trap),
   advérbio (sounds calmly), concordância (look / sound / seem com he,
   you looks), sounds + frase sem like, seems like he lying.
   Catálogo WOLFLIX Live (07/10): família CRIME, modo LANTERNA.
   A tela forte: o mapa de som do Demolidor. A sala do restaurante no
   escuro; cada frase certa manda uma onda de som e desenha um objeto
   em linhas vermelhas (a mesa, o copo, o coração, a porta, a cadeira,
   a janela, o relógio, a bengala), como o Matt “vê”.
   O AQUECIMENTO (aquece.js): o ranking dos sentidos. O FECHAMENTO
   (final.js): a cadeira quente, o aluno é o Matt.
   O VÍDEO: 7xALolZzhSM (trailer oficial Marvel, 2:07). Desde 19/10 a
   aula toca o trailer INTEIRO (regra do Carlos para toda a WOLFLIX);
   antes tocava só a conversa na mesa, até 0:49.
   Tempos da legenda oficial; cada momento contado com palavras nossas.
   A CARA: preto, vermelho do Demolidor e latão; Bodoni Moda + Public
   Sans. A antiga era o quadro do caso.
   Fila: FILA-LIVE-386.md · 286.
   ============================================================ */
/* 19/10/2026, pedido do Carlos depois de dar a aula: o trailer INTEIRO (2:07, com luta: “não importa”),
   o mapa de som com FOTOS (ComfyUI, img/live-dd-*.webp) no lugar do desenho em linhas, a abertura sem o
   mapa (I · In the Dark: o aluno só OUVE o começo do trailer, com a tela coberta) e mais conversa
   (VII · The Lie Detector). Backups: *.antes-do-trailer-inteiro. */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escuro', est: 'o', min: 6, img: 'mesa', rot: 'I · In the Dark', t: 'Before the trailer: listen like Matt.', p: 'Listen to the start of the trailer with the screen covered. Say what you hear. Then take off the cover.' },
  { k: 'quem', est: 'o', min: 7, img: 'bairro', rot: 'II · Who Are They?', t: 'Matt and Fisk: who are they, really?', p: 'Read one card. Then talk: answer each question out loud with the starters, and say why.' },
  { k: 'video', est: 'l', min: 6, img: 'mesa', rot: 'III · The Trailer', t: 'Daredevil: Born Again. The whole trailer.', p: 'Guess what Matt’s senses notice at the table. Watch the whole trailer. Then say how it looked and sounded.' },
  { k: 'dilema', est: 'o', min: 7, img: 'igreja', rot: 'IV · What Would You Do?', t: 'No right answer. Only your reasons.', p: 'Read the situation. Pick a side, or make your own. Say why, out loud. Then defend Matt or Fisk for one minute.' },
  { k: 'regra', est: 'f', min: 6, img: 'igreja', rot: 'V · Looks, Sounds, Seems', t: 'It looks expensive. It looks like a trap. Which one needs like?', p: 'Sort the words into three boxes. Then read the rule.' },
  { k: 'sonar', est: 'o', min: 7, img: 'mesa', rot: 'VI · The Sound Map', t: 'Work like Matt: in the dark. Every question lights up the room.', p: 'Matt can’t see. Build each question out loud, tap Check, then ask your teacher.' },
  { k: 'mentira', est: 'o', min: 7, img: 'dd-coracao', rot: 'VII · The Lie Detector', t: 'Three stories. One is a lie. Be Matt: listen to the heart.', p: 'Pick a topic. Tell three short stories in one minute; one is not true. Your teacher says how you sound. Then swap.' },
  { k: 'pistas', est: 'o', min: 7, extra: 1, img: 'capa', rot: 'VIII · Clues Around You', t: 'Six clues. What does it look, sound or seem like?', p: 'Tap what fits the clue. Then say the whole sentence.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var SERIE = 'Daredevil: Born Again', ANO = '2025';
var YT = '7xALolZzhSM', DUR = 127;

var ENCARTE = [
  ['The show', '<i>Daredevil: Born Again</i> (Marvel, 2025) brings back Charlie Cox as Matt Murdock and Vincent D’Onofrio as Wilson Fisk.'],
  ['Matt', 'Matt Murdock is a lawyer in Hell’s Kitchen, New York, and he is blind. But his other senses are extraordinary: he can hear a heartbeat across a room.'],
  ['Fisk', 'Wilson Fisk used to be the biggest criminal in the city. Now he is the mayor. They sit at one table for a polite conversation, and neither says one true thing.']
];

var ANTES = [
  { q: 'Close your eyes for ten seconds. What can you hear?', h: 'I can hear … It sounds like …' },
  { q: 'Can you tell if someone is lying? How?', h: 'Yes, they look … / their voice sounds …' }
];
var DEPOIS = [
  { q: 'Does Fisk seem honest? Why or why not?', h: 'He seems … because …', r: 'No. He seems calm, but it seems like he is hiding something.' },
  { q: 'How does the conversation sound: friendly or dangerous?', h: 'It sounds … / It sounds like …', r: 'It sounds friendly, but it sounds like a threat underneath.' },
  { q: 'At the end, the masks come out. What does it look like: is Daredevil back?', h: 'It looks like … / By the look of it, …', r: 'Yes! By the look of it, Daredevil is back, and it looks like a war.' }
];

var TRECHOS = [
  { k: 'The city', ini: 0, fim: 18, ouvir: 'What does the city look like?', sentido: 'Dark streets of New York, and two men who know each other too well.', gram: 'The city <b>looks</b> dangerous.' },
  { k: 'Up in the world', ini: 18, fim: 27, ouvir: 'What does Fisk say about Matt?', sentido: 'A lot of time has passed. From what he can see, Fisk says, Matt has done well in life. Matt says the same about him.', gram: '<b>By the look of it</b>, you’ve done well.' },
  { k: 'The mayor', ini: 26, fim: 36, ouvir: 'Is Matt convinced?', sentido: 'Fisk says a mayor serves his city. Matt can tell that Fisk doesn’t believe his own words.', gram: 'He <b>doesn’t seem</b> convinced.' },
  { k: 'The feeling', ini: 35, fim: 43, ouvir: 'What does Matt feel?', sentido: 'Matt has a feeling that Fisk is playing the system. (A short scream here, over a dark picture.)', gram: 'It <b>seems like</b> he’s playing a game.' },
  { k: 'The line', ini: 42, fim: 49, ouvir: 'Why did Matt stop?', sentido: 'Fisk asks why Matt stopped being a masked hero. Matt answers that a line was crossed.', gram: 'It <b>sounds like</b> something terrible happened.' },
  { k: 'Violent nature', ini: 49, fim: 64, ouvir: 'What does Fisk say about violence?', sentido: 'Fisk talks about how hard it is to accept a violent nature, and to hate the power it has over you.', gram: 'He <b>seems</b> calm, but he <b>sounds</b> dangerous.' },
  { k: 'Chaos', ini: 64, fim: 83, ouvir: 'What does the city need, for Fisk?', sentido: 'The city can’t go without control, he says. Sometimes peace must break, and chaos must win.', gram: 'It <b>sounds like</b> a war is coming.' },
  { k: 'Grace', ini: 83, fim: 127, ouvir: 'Grace or revenge: what does the voice believe in?', sentido: 'A voice says he grew up believing in grace, and also in paying people back. Then the masks come out.', gram: 'It <b>looks like</b> Daredevil is back.' }
];

var TRAPS = [
  ['+ adjective: no like', 'The table looks like expensive.', 'The table <b>looks expensive</b>.', 'looks / sounds / seems + adjective'],
  ['+ noun: like', 'That sounds a glass.', 'That <b>sounds like</b> a glass.', 'looks / sounds / seems like + a noun'],
  ['+ a sentence: like', 'It sounds it’s raining.', 'It <b>sounds like it’s</b> raining.', 'looks / sounds / seems like + a full sentence'],
  ['He / she: -s', 'The mayor seem nervous.', 'The mayor <b>seems</b> nervous.', 'he looks · she sounds · it seems']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'looks / sounds / seems + <b>expensive</b><br>… like + <b>a trap</b><br>… like + <b>it’s raining</b><br>he <b>looks</b> · she <b>sounds</b> · it <b>seems</b>';
/* 26/10/2026 · as cenas II, III e IV viraram CONVERSA + DILEMA (pedido do Carlos): os dados e o desenho estão no
   fim deste arquivo, no bloco "CONVERSA E DILEMA". Backups: *.antes-do-dilema. */
/* V · separe o que vem depois de looks / sounds / seems → a regra */
var SEP = { formato: 'separa', titulo: 'It looks … or It looks like …? Sort what comes after.', caixas: ['+ adjective · no like', 'like + a noun', 'like + a sentence'], itens: [
  { t: 'a trap', c: 1 }, { t: 'calm', c: 0 }, { t: 'it’s raining', c: 2 }, { t: 'a glass', c: 1 }, { t: 'expensive', c: 0 }, { t: 'he is lying', c: 2 }
] };
/* VI · o mapa de som: Matt não vê, monta a pergunta e entrevista o professor; cada pergunta acende um objeto */
var OBJS = ['the table', 'the glass', 'the heartbeat', 'the door', 'the mayor’s chair', 'the window'];
var PERG = { formato: 'pergunta', titulo: 'Matt can’t see. Build the question. Ask your teacher.', depoisRot: 'Your teacher answers with', depois: ['It looks …', 'It sounds like …', 'It seems …'], itens: [
  { p: '(what · the table · look like)?', r: 'What does the table <b>look like</b>?' },
  { p: '(that noise · sound like · a glass)?', r: 'Does that noise <b>sound like</b> a glass?' },
  { p: '(how · my heart · sound)?', r: 'How <b>does</b> my heart <b>sound</b>?' },
  { p: '(that door · look like · a trap)?', r: 'Does that door <b>look like</b> a trap?' },
  { p: '(the mayor · seem · nervous)?', r: 'Does the mayor <b>seem</b> nervous?' },
  { p: '(it · sound like · rain)?', r: 'Does it <b>sound like</b> rain?' }
] };
/* VII · o detector de mentira */
var TOPICOS = { formato: 'cartas', titulo: 'Pick a topic for your three stories', fechada: 'Tap to open', cartas: [
  ['Food', 'Something I ate this week'], ['Places', 'A place I went'], ['People', 'Somebody I talked to'],
  ['Shopping', 'Something I bought'], ['Strange', 'A strange thing that happened'], ['Screen', 'Something I watched']
] };
var CRONO = { formato: 'cronometro', titulo: 'One minute. Three stories. One is a lie.', texto: 'Then swap: now the teacher tells three.', segundos: 60 };
var JULGA = ['You sound nervous.', 'You seem very calm…', 'It sounds like a true story.', 'It seems like you’re lying.', 'Your heart sounds fast!', 'You look like you’re trying not to laugh.'];
/* VIII · seis pistas, toque no que combina */
var PG = { formato: 'escolhe', titulo: 'What does it look, sound or seem like? Tap one, then say the whole sentence.', itens: [
  { p: 'A friend calls. Her voice is slow and quiet. She sounds …', o: ['excited', 'tired', 'angry'], c: 1, d: 'She sounds tired. It sounds like she didn’t sleep.' },
  { p: 'A new neighbor smiles and says hello. He seems …', o: ['angry', 'lost', 'friendly'], c: 2, d: 'He seems friendly. It looks like he has a dog.' },
  { p: 'Dark clouds cover the sky. It looks like …', o: ['it’s going to rain', 'a sunny day', 'it’s going to snow'], c: 0, d: 'It looks like it’s going to rain.' },
  { p: 'A new restaurant has gold doors and a doorman. It looks …', o: ['cheap', 'expensive', 'empty'], c: 1, d: 'It looks expensive. It looks like a place for a date.' },
  { p: 'At 3 a.m. you hear “meow!” on the roof. It sounds like …', o: ['rain', 'a cat', 'a car'], c: 1, d: 'It sounds like a cat on the roof!' },
  { p: 'Your teacher smiles all day and says “Great weekend!” He seems …', o: ['sad', 'tired', 'happy'], c: 2, d: 'He seems happy. It seems like he had a good weekend.' }
] };

/* o mapa de som: o gesto forte */
var SONS = [
  { obj: 'the table', pista: 'the table · expensive (an adjective)', ops: ['The table looks expensive.', 'The table looks like expensive.', 'The table look expensive.'], k: ['', 'likeadj', 's'], depois: 'What looks expensive in your house?' },
  { obj: 'the glass', pista: 'that noise · a glass (a noun)', ops: ['That sounds like a glass.', 'That sounds a glass.', 'That sound like a glass.'], k: ['', 'likenoun', 's'], depois: 'What does your morning sound like?' },
  { obj: 'the heartbeat', pista: 'his heart · calm (an adjective)', ops: ['His heart sounds calm.', 'His heart sounds like calm.', 'His heart sounds calmly.'], k: ['', 'likeadj', 'adv'], depois: 'How do you sound when you are nervous?' },
  { obj: 'the door', pista: 'that door · a trap (a noun)', ops: ['It looks like a trap.', 'It looks a trap.', 'It looks like trap.'], k: ['', 'likenoun', 'art'], depois: 'Have you ever walked into something that looked like a trap?' },
  { obj: 'the mayor’s chair', pista: 'the mayor · nervous (an adjective)', ops: ['The mayor seems nervous.', 'The mayor seems like nervous.', 'The mayor seem nervous.'], k: ['', 'likeadj', 's'], depois: 'Who seems calm but is always nervous?' },
  { obj: 'the window', pista: 'outside · it’s raining (a sentence)', ops: ['It sounds like it’s raining.', 'It sounds it’s raining.', 'It sound like it’s raining.'], k: ['', 'likeclause', 's'], depois: 'What does your street sound like at night?' },
  { obj: 'the clock', pista: 'his story · he is lying (a sentence)', ops: ['It seems like he is lying.', 'It seems like he lying.', 'It seem like he is lying.'], k: ['', 'be', 's'], depois: 'How can you tell when somebody is lying?' },
  { obj: 'the cane', pista: 'you, Matt · tired (an adjective)', ops: ['You look tired, Matt.', 'You look like tired, Matt.', 'You looks tired, Matt.'], k: ['', 'likeadj', 'you'], depois: 'The room is drawn. What does the room look like now, in your words?' }
];
var RECUSA = {
  likeadj: 'Adjective: no like. looks expensive, sounds calm, seems nervous.',
  likenoun: 'A noun: like. sounds like a glass, looks like a trap.',
  likeclause: 'A full sentence: like. It sounds like it’s raining.',
  s: 'He / she / it: -s. looks, sounds, seems.',
  adv: 'After sound / look / seem: an adjective (calm), not an adverb (calmly).',
  art: 'Like + a / an + noun: like a trap.',
  be: 'Like + a full sentence: he is lying.',
  you: 'You: look (no -s).'
};

var PISTAS = [
  { k: 'A voice on the phone', h: 'Your friend calls you. What can you tell from her voice?', ex: 'She sounds tired. It sounds like she didn’t sleep.' },
  { k: 'A new neighbor', h: 'A new neighbor moves in. What do they seem like?', ex: 'He seems friendly. It looks like he has a dog.' },
  { k: 'The sky', h: 'Look out of the window. What does the weather look like?', ex: 'It looks cloudy. It looks like it’s going to rain.' },
  { k: 'A restaurant', h: 'You walk past a new restaurant. What does it look like?', ex: 'It looks expensive. It looks like a place for a date.' },
  { k: 'A noise at night', h: 'You hear a noise at 3 a.m. What does it sound like?', ex: 'It sounds like a cat on the roof!' },
  { k: 'This class', h: 'How does the teacher seem today?', ex: 'You seem happy. It seems like you had a good weekend.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, sn: { n: 0, esc: -1 }, esc: { p: 0 }, mt: { r: 0 },
  qm: { p: 0, q: {} }, vs: {}, dl: { n: 0, lado: {} } };

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
  return '<div class="dv-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* 19/10/2026: os oito objetos da sala em FOTO (ComfyUI, contorno vermelho no escuro, como o Matt “vê”),
   na ordem de SONS. Apagada até a frase certa; a da vez pulsa; a certa acende com a onda de som. */
var FOTOS = ['mesa', 'copo', 'coracao', 'porta', 'cadeira', 'janela'];
function sonar(ver) {
  var N = FOTOS.length, n = 0;
  var objs = FOTOS.map(function (f, i) {
    var ok = ver[i]; if (ok) n++;
    return '<figure class="dv-ft ' + (ok ? 'ok' : '') + '"><img src="' + img('dd-' + f) + '" alt="' + (ok ? OBJS[i] : '') + '">' + (ok ? '<figcaption>' + OBJS[i] + '</figcaption>' : '') + '</figure>';
  }).join('');
  return '<div class="dv-sala dv-fotos vd" role="img" aria-label="The sound map: ' + n + ' of ' + N + ' objects lit"><div class="dv-grade">' + objs + '</div>'
    + '<p class="dv-legenda">' + (n >= N ? 'The whole room, lit by sound.' : n + ' of ' + N + ' · every question lights one object') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · looks · sounds · seems (like)</span><h1>By the Look of It</h1>'
    + '<p class="banda">' + SERIE + ' · ' + ANO + '</p>'
    + '<p class="sub">Matt Murdock is blind, but he hears a heartbeat across a room. Tonight he sits down with the new mayor, a man who used to run the city’s crime. Work like Matt, in the dark: say what it looks, sounds and seems like, and the room appears.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Listen</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r dv-foto"><img src="' + img('capa') + '" alt="A wet street in Hell’s Kitchen at night with a red glow from a window"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="dv-encarte vd"><div class="dv-capinha"><img src="' + img('mesa') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>A table for two</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="dv-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Matt can’t see Fisk’s face. How can he know if Fisk is lying?</h2></div>' + mostra('enc', 'He listens. If Fisk’s heart sounds fast, it seems like he is lying.', 1) + '</div>';
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="dv-video"><div class="dv-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="dv-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="dv-sentido">' + x.sentido + '</span><span class="dv-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="dv-centro"><p class="dv-dica">Tap a frame to open that moment of the scene.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).sep, tudo = !!e && SEP.itens.every(function (x, i) { return e.em && e.em[i] === x.c; });
  return cab(c) + '<div class="dv-centro">' + FM.ex('sep', SEP)
    + (tudo ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra('looks / sounds / seems + an <b>adjective</b>: it looks <b>expensive</b>, he sounds <b>calm</b>.<br>… <b>like</b> + a noun: it looks like <b>a trap</b>.<br>… <b>like</b> + a sentence: it sounds like <b>it’s raining</b>.<br>He <b>looks</b>, she <b>sounds</b>, it <b>seems</b>: -s.', 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Sort all six and the rule appears.</p>') + '</div>';
};

R.sonar = function (c) {
  var e = (S.fq || {}).per, ver = (e && e.ver) || {};
  return cab(c) + comPlaca('<div class="fm-obj">' + sonar(ver) + '</div>' + FM.ex('per', PERG), PRESA);
};

/* I · IN THE DARK (19/10): abre a aula no lugar do mapa. O aluno só OUVE os primeiros 20 segundos do
   trailer, com a tela coberta; descreve; tira a tampa; e fala da vida dele. Três passos. */
var ESCURO = {
  ouvir: [
    { q: 'Where are we?', ops: ['a restaurant', 'a church', 'the street', 'a hospital'], ex: 'It sounds like a restaurant. I can hear glasses and quiet music.' },
    { q: 'Who is talking? How many people?', ops: ['two men', 'a man and a woman', 'a group'], ex: 'It sounds like two men. One voice sounds very deep and slow.' },
    { q: 'Are they friends?', ops: ['friends', 'enemies', 'strangers'], ex: 'They sound polite, but it seems like they are enemies.' }
  ],
  revela: 'A restaurant in New York. Two old enemies at one table: Matt Murdock, a blind lawyer who hears everything, and Wilson Fisk, a criminal who is now the mayor.',
  vida: [
    { q: 'What sound do you love? What sound do you hate?', ex: 'I love the sound of rain. I hate the sound of my alarm in the morning!' },
    { q: 'Close your eyes now. What does your street sound like?', ex: 'It sounds quiet. It sounds like a dog is barking far away.' }
  ]
};
R.escuro = function (c) {
  var e = S.esc, corpo;
  if (e.p === 0) corpo = '<div class="dv-mesa"><div class="lado-l"><div class="dv-breu vd"><i></i><b>In the dark</b><small>Close your eyes. Only listen.</small></div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>Before you listen</small><h2>Matt Murdock can’t see. He knows the world by sound. Can you?</h2></div><div><button type="button" class="btn cheio" data-a="es-p" data-n="1">Listen in the dark</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="dv-mesa"><div class="lado-l"><div class="dv-coberto">' + iframe(YT, SERIE + ' · listen only', '&start=0&end=20&autoplay=1') + '<div class="dv-tampa" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><b>Listening…</b></div></div><div class="dv-linha-ok"><small class="dv-cred">No sound? Tap the black screen once.</small><button type="button" class="btn" data-a="es-p" data-n="1">Play it again</button></div></div>'
    /* sem Show answer aqui: repintar a cena recriaria o vídeo e o som recomeçaria. Os modelos vêm no passo 3. */
    + '<div class="lado-l">' + ESCURO.ouvir.map(function (x, i) { return '<div class="dv-pi"><small>What can you hear? · ' + (i + 1) + '</small><p>' + x.q + '</p><div class="dv-chips">' + x.ops.map(function (o) { return '<span>' + o + '</span>'; }).join('') + '</div></div>'; }).join('')
    + '<div><button type="button" class="btn cheio" data-a="es-p" data-n="2">Take off the cover</button></div></div></div>';
  else corpo = '<div class="dv-mesa"><div class="lado-l"><figure class="dv-foto dv-revela"><img src="' + img('mesa') + '" alt="A restaurant table for two in the dark"><figcaption>' + ESCURO.revela + '</figcaption></figure>'
    + '<div class="dv-pi"><small>What Matt would hear</small>' + ESCURO.ouvir.map(function (x) { return '<p>' + x.ex + '</p>'; }).join('') + '</div></div>'
    + '<div class="lado-l">' + ESCURO.vida.map(function (x, i) { return '<div class="pergunta vd ja"><small>Your turn · ' + (i + 1) + '</small><h2>' + x.q + '</h2></div>' + mostra('ev' + i, x.ex, 1); }).join('') + '</div></div>';
  return cab(c) + corpo;
};

/* VII · THE LIE DETECTOR (19/10): mais conversa. O aluno conta três histórias, uma é mentira; o professor
   “ouve o coração” e julga com looks / sounds / seems (like). Depois troca. Os temas dão a partida. */
var MENTIRA = {
  temas: ['Something I ate this week', 'A place I went', 'Somebody I talked to', 'Something I bought', 'A strange thing that happened', 'Something I watched'],
  julga: ['You sound nervous.', 'You seem very calm…', 'It sounds like a true story.', 'It seems like you’re lying.', 'Your heart sounds fast!', 'You look like you’re trying not to laugh.'],
  ex: 'Story 1: I ate sushi on Tuesday. Story 2: I went to the beach. Story 3: I talked to a famous singer. — Number three sounds like a lie! You seem nervous.'
};
R.mentira = function (c) {
  return cab(c) + '<div class="dv-mesa"><div class="lado-l"><figure class="dv-foto dv-pulso"><img src="' + img('dd-coracao') + '" alt="A heart drawn in red sound waves"><figcaption>The teacher listens to the heart and says how you sound.</figcaption></figure>'
    + FM.ex('top', TOPICOS) + '</div>'
    + '<div class="lado-l">' + FM.ex('cro', CRONO) + '<div class="dv-pi"><small>To judge, say how it sounds</small><div class="dv-chips forte">' + JULGA.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div></div>'
    + '<div class="pergunta vd ja"><small>The question after every story</small><h2>Does it sound true? Why do you think so?</h2></div></div></div>';
};

R.pistas = function (c) {
  return cab(c) + comPlaca(FM.ex('pg', PG), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="dv-centro"><p class="dv-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };
TOQUES['es-p'] = function (b, n) { S.esc.p = n; };

/* ============================================================
   CONVERSA E DILEMA · 26/10/2026, pedido do Carlos: "que essas páginas comecem realmente da conversa".
   II · Who Are They?  quatro fichas (Matt, Fisk, o nome Daredevil × Demolidor, os dois lados: fé × violência),
                       duas perguntas pessoais por ficha, com iniciadores, EXAMPLE ANSWER e o "push" do professor.
   III · The Trailer   antes: os sentidos do Matt na mesa (o aluno chuta, o cartão confirma) · o trailer INTEIRO ·
                       depois: quatro perguntas de conversa com looks / sounds / seems (like).
   IV · What Would You Do?  cinco dilemas, um por vez (posição → por quê → push), e o debate de 1 minuto:
                       Matt ou Fisk? A gramática da aula mora nos iniciadores.
   Todo estado em S (qm, video, vs, dl, fq): o mesmo estado pinta os dois lados da sala.
   ============================================================ */
function empurra(t) { return '<div class="dv-push so-prof"><b>PUSH · for the teacher</b><span>' + t + '</span></div>'; }

var QUEM = [
  { aba: '1 · MATT', img: 'bairro', kick: 'Lawyer by day · vigilante by night', nome: 'Matt Murdock',
    fatos: ['He lost his sight in an accident when he was a boy.', 'His other senses became superhuman: he hears a heartbeat across a room, smells a perfume from the street, and “sees” the room in sound, like a radar.', 'By day he defends people in court. At night he puts on a red mask and protects Hell’s Kitchen.'],
    qs: [
      { q: 'Matt hears a heartbeat across a room. Which of his senses would you like to have? What would you do with it?', st: ['I’d love to have his …', 'It sounds useful, because …', 'It seems like a gift, but …'], ex: 'I’d love his hearing. It sounds useful: I could hear if my boss is in a good mood before I go in!', push: 'Is it a gift or a problem? Imagine hearing every noise in your building, all night.' },
      { q: 'If you lost one sense for a day, which would be the hardest to lose? And the easiest?', st: ['The hardest would be …', 'I could live without … for a day.', 'It seems easy, but …'], ex: 'The hardest would be sight: I need it for everything. Smell seems easy to lose for one day.', push: 'Matt says the dark is not empty for him. What do you think the world looks like to him?' }
    ] },
  { aba: '2 · FISK', img: 'mesa', kick: 'Crime boss · now the mayor', nome: 'Wilson Fisk',
    fatos: ['For years he was the Kingpin: the man behind the city’s crime. Other people did the dirty work for him.', 'Now New York has voted for him. He wears a perfect suit, speaks softly and says: “The mayor serves his city.”', 'He still works outside the law. But now the city hall is his.'],
    qs: [
      { q: 'Crime goes down in your city, but the mayor breaks the rules to do it. Would you vote for someone like Fisk?', st: ['If crime went down, I would …', 'It sounds good, but …', 'He seems like …'], ex: 'No, I wouldn’t. It sounds good, but it looks like he’s buying the city. Today it’s criminals; tomorrow it’s me.', push: 'Your street is finally quiet at night. Are you sure you’d say no?' },
      { q: 'Fisk always looks calm and polite. Can you trust a person who always looks calm?', st: ['By the look of it, he …', 'Calm people seem …', 'I trust people who …'], ex: 'Not always. He seems calm, but calm can be a mask. I trust what people do, not how they look.', push: 'Think of a villain from a film you love. Did they look like a villain at first?' }
    ] },
  { aba: '3 · THE NAME', img: 'capa', kick: 'In Brazil: Demolidor', nome: 'Daredevil',
    fatos: ['A <b>daredevil</b> is a person who does dangerous, bold things without fear: <i>dare</i> + <i>devil</i>. A kid who jumps from the roof into the pool is a daredevil.', 'In the comics, kids at school called young Matt “Daredevil” as a joke: he was quiet and never took risks. Years later, he took the name for himself.', 'In Brazil he is the Demolidor: the man who knocks things down. One hero, two very different names.'],
    qs: [
      { q: 'Daredevil or Demolidor: which name fits him better? Why?', st: ['I think … fits him better, because …', 'Daredevil sounds …', 'Demolidor sounds like …'], ex: 'Daredevil fits him better. It sounds brave and a little crazy, like him. Demolidor sounds like a machine.', push: 'If you were a hero, what would your name be? In English, please.' },
      { q: 'Are you a daredevil? What’s the most daring thing you’ve ever done?', st: ['I’m not a daredevil, but once I …', 'My friends say I …', 'It looked dangerous, but …'], ex: 'Not really! But once I jumped from a bridge into a river. It looked dangerous, but it was fun.', push: 'Would you do it again today? What changed?' }
    ] },
  { aba: '4 · TWO SIDES', img: 'igreja', kick: 'A comic-book hero, but a complex one', nome: 'A devil who prays',
    fatos: ['Matt wears red, with small horns. But he is a Catholic: he goes to church, goes to confession, and talks to his priest when he feels lost.', 'He fights at night, and then he feels guilty. His big question: should I stop Fisk outside the law, or wait for the law?', 'Lawyer and vigilante. Faith and fights. A devil’s costume on a man who prays.'],
    qs: [
      { q: 'Why do you think a man of faith chose a devil’s costume?', st: ['Maybe it’s because …', 'It seems like he …', 'It looks strange, but …'], ex: 'Maybe he feels there is a devil inside him. It seems like the costume is for the criminals: he wants them to be afraid.', push: 'Do we all have two sides? Tell me about one of yours.' },
      { q: 'When you can’t decide what’s right, who do you talk to? Why that person?', st: ['When I feel lost, I talk to …', 'He / She always seems …', 'I don’t talk to anyone. I …'], ex: 'I talk to my grandmother. She always seems calm, and she doesn’t tell me what to do: she asks me questions.', push: 'Is it better to talk to someone who agrees with you, or someone who says no?' }
    ] }
];
R.quem = function (c) {
  var p = Math.min(S.qm.p, QUEM.length - 1), x = QUEM[p], qi = (S.qm.q || {})[p] || 0, q = x.qs[qi], ult = qi >= x.qs.length - 1;
  var seg = ult ? (p < QUEM.length - 1 ? 'Next card · ' + QUEM[p + 1].aba.replace(/^\d · /, '') : '') : 'Question ' + (qi + 2) + ' ›';
  return cab(c) + abas3(QUEM.map(function (z) { return z.aba; }), p, 'qm-p')
    + '<div class="qm"><article class="qm-ficha" style="--bg:url(\'' + img(x.img) + '\')"><div class="qm-txt"><small>' + x.kick + '</small><h2>' + x.nome + '</h2><ul>' + x.fatos.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul></div></article>'
    + '<div class="qm-qs"><div class="qm-q vd"><small>Talk · question ' + (qi + 1) + ' of ' + x.qs.length + '</small><p class="qm-pq">' + q.q + '</p>' + fala('qm' + p + '-' + qi, q.st)
    + '<div class="qm-pe">' + mostra('qm' + p + '-' + qi, q.ex, 1) + (seg ? '<button type="button" class="btn cheio" data-a="qm-prox">' + seg + '</button>' : '<span class="vs-nota">Next: the trailer.</span>') + '</div>'
    + empurra(q.push) + '</div></div></div>';
};
TOQUES['qm-prox'] = function () { var p = S.qm.p, x = QUEM[p]; S.qm.q = S.qm.q || {}; var qi = S.qm.q[p] || 0; if (qi < x.qs.length - 1) S.qm.q[p] = qi + 1; else if (p < QUEM.length - 1) S.qm.p = p + 1; };
TOQUES['qm-p'] = function (b, n) { S.qm.p = n; };

/* III · os sentidos do Matt na mesa do restaurante: o aluno chuta, o cartão confirma */
var SENTIDOS = [
  { s: 'He can hear', q: 'What can Matt hear at the table?', r: 'Fisk’s heartbeat: slow and calm. Too calm. And the rain on the window.' },
  { s: 'He can smell', q: 'What can he smell?', r: 'Red wine, the candle, and Fisk’s expensive perfume.' },
  { s: 'He can feel', q: 'What can he feel?', r: 'The cold glass in his hand, and the floor shaking a little when a truck goes by outside.' },
  { s: 'Far away', q: 'What can he hear far away?', r: 'A cook dropping a plate in the kitchen, and two men whispering at the door.' }
];
var VIGIA = ['How does Fisk’s voice sound?', 'Does Matt look relaxed or nervous at the table?', 'At the end, what does the city look like?'];
var DEPOIS2 = DEPOIS.concat([{ q: 'Fisk says: “Sometimes peace needs to be broken.” Does it sound like a promise or a threat? Is it ever true?', h: 'It sounds like … / It seems true when …', r: 'It sounds like a threat. But maybe it’s true sometimes: when people protest, the peace breaks, and things can change.' }]);
R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="vs"><div class="vs-cab"><img src="' + img('mesa') + '" alt="A restaurant table for two in the dark, with a candle and two glasses"><div><small>Before you watch · Matt’s radar</small><p>Matt sits at this table with the mayor. He can’t see it. What can his other senses tell him? Guess first, then tap.</p>' + fala('vs', ['He can probably hear …', 'It must smell like …', 'It sounds like …', 'By the sound of it, …']) + '</div></div>'
    + '<div class="vs-grade">' + SENTIDOS.map(function (x, i) {
      var on = S.vs[i];
      return '<button type="button" class="vs-carta' + (on ? ' on' : '') + '" data-a="vs" data-n="' + i + '"><small>' + x.s + '</small><b>' + x.q + '</b>' + (on ? '<span class="vs-r"><em>MATT’S ANSWER</em>' + x.r + '</span>' : '<span class="vs-tap">Guess out loud · then tap</span>') + '</button>';
    }).join('') + '</div>' + '<div class="qm-segue"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div>';
  else if (e.p === 1) corpo = '<div class="dv-video"><div class="dv-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="dv-cred">' + SERIE + ' · official trailer (Marvel) · 2:07 · the whole trailer</small></div>'
    + '<div class="lado-l"><div class="dv-pi"><small>While you watch</small>' + VIGIA.map(function (q) { return '<p>' + q + '</p>'; }).join('') + '</div><p class="vs-nota">No need to write. Just watch and listen like Matt.</p><div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="vd-depois">' + DEPOIS2.map(function (x, i) {
    return '<div class="qm-q vd"><small>After the trailer · ' + (i + 1) + '</small><p class="qm-pq">' + x.q + '</p><p class="vd-h">' + x.h + '</p>' + mostra('va' + i, x.r, 1) + '</div>';
  }).join('') + '</div>';
  return cab(c) + tempos3(e.p) + corpo;
};
TOQUES.vs = function (b, n) { S.vs[n] = 1; };

/* IV · os dilemas, um por vez, e o debate de 1 minuto */
var DILEMAS = [
  { k: 'The client', sit: 'You are a lawyer, like Matt. The night before the trial, your client says quietly: “I did it. But you have to get me out.”', q: 'What would you do?',
    lados: ['Defend him anyway', 'Leave the case', 'Tell him to confess'], st: ['If I were his lawyer, I would …', 'It sounds wrong to …', 'It seems fair, because …'],
    ex: 'I would tell him to confess. It sounds hard, but it seems like the only honest way. If he says no, I’d leave the case.', push: 'In a fair system, everybody gets a lawyer, even guilty people. If every lawyer leaves, what happens?' },
  { k: 'The safe streets', sit: 'The new mayor cut crime in half. Your street is quiet at night for the first time in years. Then you read that he makes secret deals and breaks the rules to do it. The election is next week.', q: 'Would you vote for him again?',
    lados: ['Vote for him', 'Vote against him', 'Stay home'], st: ['The street looks safe, but …', 'It seems like he …', 'If I were a voter there, I would …'],
    ex: 'I’d vote against him. The street looks safe, but it seems like the whole city is in his pocket now.', push: 'Your kids can walk to school alone now. Still against him?' },
  { k: 'The mask', sit: 'Late at night, a man in a red mask stops two thieves who are taking an old woman’s bag. He disappears before the police arrive. An officer asks you: “Did you see where he went?” You did.', q: 'What would you say?',
    lados: ['Tell the police', 'Say nothing', 'Say “I’m not sure”'], st: ['He seemed like …', 'It sounds crazy, but I would …', 'If I were there, I would …'],
    ex: 'I’d say nothing. He seemed like a good man, and he helped her. But I’d feel strange about it later.', push: 'Next time he gets it wrong and stops the wrong man. Who stops him?' },
  { k: 'The envelope', sit: 'Your family’s small restaurant is in trouble. A man from city hall puts an envelope on the table: “This is for your family. Just sign this paper, and don’t ask questions.”', q: 'Would you take it?',
    lados: ['Take it', 'Say no', 'Ask what the paper is'], st: ['It sounds like a trap, because …', 'It looks too easy …', 'If it were my family, I would …'],
    ex: 'I’d ask what the paper is first. It sounds like a trap, and it looks too easy. Easy money always costs something later.', push: 'Without this money, your family loses the restaurant next month. Still no?' },
  { k: 'The confession', sit: 'Late at night, Matt goes to church. He tells his priest: “I want to stop Fisk, and the law can’t do it. Is it wrong to do the right thing the wrong way?” You are the priest.', q: 'What do you tell him?',
    lados: ['Wait for the law', 'Act, but carefully', 'Ask him more questions'], st: ['It seems like you already …', 'If I were you, I would …', 'A good person can …'],
    ex: 'I’d listen first. Then I’d say: “It seems like you already know the answer. A good reason doesn’t make a bad way good.”', push: 'Can a good person do bad things for a good reason? Give me one example from a film or a book.' }
];
var DEBATE = { lados: [['Matt', 'The law is too slow. Sometimes a good man has to act alone.'], ['Fisk', 'A city needs order. A strong leader can bend the rules for the people.']],
  st: ['I’m with …, because …', 'It seems clear that …', 'By the look of it, the city needs …', 'If I were the mayor, I would …'],
  ex: 'I’m with Matt, but only a little. By the look of it, the law can’t stop Fisk, so somebody has to. But it seems dangerous when one man decides alone.' };
R.dilema = function (c) {
  var e = S.dl, N = DILEMAS.length, n = Math.min(e.n, N), debate = n === N;
  var pontos = '<div class="dl-pontos" role="group" aria-label="Dilemmas">' + DILEMAS.map(function (x, i) { return '<button type="button" class="' + (i === n ? 'on' : e.lado[i] != null ? 'foi' : '') + '" data-a="dl-ir" data-n="' + i + '"' + (i === n ? ' aria-current="step"' : '') + '>' + (i + 1) + ' · ' + x.k + '</button>'; }).join('')
    + '<button type="button" class="' + (debate ? 'on' : '') + '" data-a="dl-ir" data-n="' + N + '">Matt or Fisk?</button></div>';
  if (debate) {
    var lado = e.lado.deb;
    return cab(c) + pontos + '<div class="dl"><div class="dl-carta vd"><small>The last word · one minute</small><h2>Matt or Fisk? Choose a side and defend it for one minute.</h2>'
      + '<div class="dl-lados dois">' + DEBATE.lados.map(function (l, i) { return '<button type="button" class="dl-lado' + (lado === i ? ' on' : '') + '" data-a="dl-lado" data-c="deb" data-n="' + i + '"><b>' + l[0] + '</b><span>' + l[1] + '</span></button>'; }).join('') + '</div>'
      + '<p class="vs-nota">Then swap: your teacher defends the other side, and you answer back.</p></div>'
      + '<div class="dl-dir">' + FM.ex('deb', { formato: 'cronometro', titulo: 'One minute. Your reasons.', segundos: 60 }) + fala('deb', DEBATE.st) + mostra('deb', DEBATE.ex, 1) + empurra('Take the other side, even if you agree with them. Ask: “What if Matt is wrong about someone?” or “Who checks the mayor?”') + '</div></div>';
  }
  var x = DILEMAS[n], esc = e.lado[n];
  return cab(c) + pontos + '<div class="dl"><div class="dl-carta vd"><small>Dilemma ' + (n + 1) + ' of ' + N + ' · ' + x.k + '</small><p class="dl-sit">' + x.sit + '</p><h2>' + x.q + '</h2>'
    + '<div class="dl-lados">' + x.lados.map(function (l, i) { return '<button type="button" class="dl-lado' + (esc === i ? ' on' : '') + '" data-a="dl-lado" data-c="' + n + '" data-n="' + i + '"><b>' + l + '</b></button>'; }).join('') + '</div>'
    + '<p class="vs-nota">' + (esc == null ? 'No right answer. Pick one, or say your own idea.' : 'Now say why. Your teacher will push back.') + '</p></div>'
    + '<div class="dl-dir">' + fala('dl' + n, x.st)
    + '<div class="qm-pe">' + mostra('dl' + n, x.ex, 1) + '<button type="button" class="btn cheio" data-a="dl-prox">' + (n < N - 1 ? 'Next dilemma' : 'The last word: Matt or Fisk?') + '</button></div>'
    + empurra(x.push) + '</div></div>';
};
TOQUES['dl-ir'] = function (b, n) { S.dl.n = n; };
TOQUES['dl-prox'] = function () { S.dl.n = Math.min(S.dl.n + 1, DILEMAS.length); };
TOQUES['dl-lado'] = function (b, n, v, c) { S.dl.lado[c] = n; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'ranking', rot: 'I · Your Senses', t: 'Before the trailer: which sense do you need most?', p: 'Tap the senses from the most to the least important for you. Then explain the top and the bottom.',
  rotulo: 'Your senses', q: 'Which sense do you need most in your life? Put them in order.',
  itens: ['Sight', 'Hearing', 'Smell', 'Taste', 'Touch'],
  depois: 'Close your eyes: what does this room sound like right now?', ex: 'Number 1 is hearing. I need music! The last one is smell. My room sounds very quiet now.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'IX · The Hot Seat', t: 'The hot seat: Matt Murdock, after dinner with the mayor.', p: 'Sit in the hot seat as Matt. The teacher asks what you heard and what it seemed like. Then swap.',
  quem: 'Matt Murdock, after dinner with the mayor',
  itens: [
    { q: 'What did the restaurant sound like?', ex: 'It sounded expensive. Quiet music, and glasses everywhere.' },
    { q: 'How did Fisk’s voice sound?', ex: 'His voice sounded calm, but very cold.' },
    { q: 'Does Fisk seem like a good mayor?', ex: 'No. It seems like he is playing a game.' },
    { q: 'What does the city look like to you these days?', ex: 'I can’t see it, but it sounds like a city with a problem.' },
    { q: 'You look tired. Are you OK?', ex: 'I am. It’s been a long night.' }
  ] };
/*FIM@@*/
