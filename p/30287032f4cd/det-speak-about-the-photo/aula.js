/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 8 OF 16 · SPEAK ABOUT THE PHOTO · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: uma foto, 20 segundos para preparar, de 30 a 90 segundos falando.
   Roteiro: o geral (This photo shows…) → os lugares (in the foreground, on the left) → os detalhes (there is / there are)
   → um palpite com motivo (It might be… because…). Fotos do ComfyUI, sem pessoas (regra da casa).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 8, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 8 OF 16', titulo: ['Speak About', 'the Photo'], tema: 'Big picture, places, details, a guess', placa: 'LESSON 08',
  lugarConversa: 'THE PHOTO STUDIO', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'One photo, 20 seconds to prepare, up to 90 seconds to speak. Today you learn a plan, so you always have something to say.',
  chips: ['The route', 'Make it richer', 'Three photos, real clock'], botao: 'Start the lesson',
  nota: 'Big picture → places → details → a guess. Four steps, and 90 seconds pass fast.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'I · The Route', t: 'Which sentence works better?', p: 'Compare A and B. Then look at the four steps of the plan.' },
  { k: 'transforma', est: 'o', min: 7, img: 'capa', rot: 'II · Make It Richer', t: 'A flat sentence. Make it richer.', p: 'Read the sentence and the clue. Say it with more detail.' },
  { k: 'prova', est: 'o', min: 16, img: 'conversa', rot: 'III · Three Photos', t: 'Twenty seconds to prepare. Then speak.', p: 'Follow the plan: big picture, places, details, a guess.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var DESCOBRE = {
  pares: [
    { a: '{This photo shows} a market in the evening.', b: '{I see} oranges.', q: 'Which one is a better first sentence? Why?', r: 'A: start with the <b>big picture</b>. Details come later.' },
    { a: '{In the foreground}, there are crates of oranges.', b: '{Here} there are crates of oranges.', q: 'Which one helps the listener see the photo?', r: 'A: places organize your talk. <b>In the foreground / in the background / on the left / next to</b>.' },
    { a: 'There {are} some tomatoes next to the apples.', b: 'There {is} some tomatoes next to the apples.', q: 'Which one is right?', r: '<b>There are</b> + plural. There is + singular: there is a lamp.' },
    { a: 'It {might be} a market in Spain, because the fruit looks very fresh.', b: 'It {is} a market in Spain.', q: 'Which one is safer and has more detail?', r: 'A: a <b>guess with a reason</b>. You can’t know; you can think. It might be… because…' }],
  regra: [['1 · BIG PICTURE', 'This photo shows… · It looks like…'], ['2 · PLACES', 'in the foreground · in the background · on the left · next to'], ['3 · DETAILS', 'there is a… · there are some… · colors, light'], ['4 · A GUESS', 'It might be… because… · I think…']],
  armas: [['THERE ARE', 'There is many boxes.', 'There are many boxes.', 'plural → are'], ['IN THE', 'On the background, there is a tree.', 'In the background, there is a tree.', 'in the background'], ['MIGHT', 'It might is a market.', 'It might be a market.', 'might + base verb'], ['LOOKS LIKE', 'It looks a market.', 'It looks like a market.', 'looks like + noun']] };

var TRANSFORMA = { rot: 'A FLAT SENTENCE', fim: 'Richer sentences = more points, and more seconds filled.', itens: [
  { de: 'There is a table. There is a cake.', pista: 'join with “with … on it”', para: 'There is a table with a birthday cake on it.' },
  { de: 'There are bikes. There is a canal.', pista: 'add a place: along', para: 'There are some bicycles parked along a canal.' },
  { de: 'The street is wet.', pista: 'add a reason: because', para: 'The street is wet, probably because it has been raining.' },
  { de: 'It is a kitchen.', pista: 'start big: This photo shows…', para: 'This photo shows a cozy home kitchen in the evening.' },
  { de: 'It is evening.', pista: 'guess with a reason: might … because', para: 'It might be early evening, because the lights are on and the sky is dark.' }] };

var PROVA = { rot: 'SPEAK ABOUT THE PHOTO', tarefas: [
  { k: 'PHOTO 1', tipo: 'fala', prep: 20, seg: 90, img: 'foto-mercado', alt: 'A fruit and vegetable market stall at dusk under string lights', enun: 'Speak about the photo for 30 to 90 seconds.',
    chips: ['This photo shows…', 'In the foreground,…', 'In the background,…', 'There are some…', 'It might be… because…'],
    criterios: ['Started with the big picture', 'Used two place words (foreground, next to…)', 'Said three or more details', 'Ended with a guess and a reason'],
    modelo: 'This photo shows a fruit and vegetable market in the evening. In the foreground, there are wooden crates full of oranges, apples and tomatoes. Above the stall, there are string lights, so the colors look warm. In the background, I can see more stalls, but they are a bit dark. It might be a small market in a European town, because the crates look old and traditional.' },
  { k: 'PHOTO 2', tipo: 'fala', prep: 20, seg: 90, img: 'foto-cozinha', alt: 'A home kitchen in the evening with a pot on the stove and vegetables on a board', enun: 'Speak about the photo for 30 to 90 seconds.',
    chips: ['This photo shows…', 'On the left,…', 'Next to…', 'It looks like someone is about to…', 'I think… because…'],
    criterios: ['Started with the big picture', 'Used two place words', 'Said three or more details', 'Ended with a guess and a reason'],
    modelo: 'This photo shows a home kitchen in the evening. On the stove, there is a big pot, and next to it there is a cutting board with some vegetables. On the left, there is a window, and it looks like it is raining outside. It looks like someone is about to cook dinner, maybe a soup, because there are carrots and peppers ready on the board.' },
  { k: 'PHOTO 3', tipo: 'fala', prep: 20, seg: 90, img: 'foto-estacao', alt: 'A small train platform at night with a bench under a lamp', enun: 'Speak about the photo for 30 to 90 seconds.',
    chips: ['This photo shows…', 'In the background,…', 'There is a…', 'It might be… because…'],
    criterios: ['Started with the big picture', 'Used two place words', 'Said three or more details', 'Ended with a guess and a reason'],
    modelo: 'This photo shows a small train station at night. On the right, there is a wooden bench under a lamp, and on the left there are the railway tracks. The light from the lamp is warm, but the rest of the photo is very dark. It might be a station in the countryside, because there are no buildings and no people around.' }] };

var PODE = [
  'I can describe a photo with a route: big picture, places, details, a guess.',
  'I can use place words: in the foreground, in the background, on the left, next to.',
  'I can say there is / there are correctly.',
  'I can make a guess with a reason: It might be… because…'
];

/* MECÂNICAS VARIADAS */
/* DET 08: descobre · transforma · prova (os dados estão no topo do aula.js) */
