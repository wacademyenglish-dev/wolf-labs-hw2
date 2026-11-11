/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 12 OF 16 · WRITE ABOUT THE PHOTO · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: uma foto, 1 minuto para escrever sobre ela (algumas fotos em seguida). Meta: uma ou duas frases RICAS:
   lugar + detalhe + adjetivo + uma oração com which/where/with. Fotos do ComfyUI, sem pessoas.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 12, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 12 OF 16', titulo: ['Write About', 'the Photo'], tema: 'One minute, one rich sentence', placa: 'LESSON 12',
  lugarConversa: 'THE GALLERY', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'One photo, one minute, a few sentences. Today you learn to build one rich sentence fast: a place, details, adjectives and a which or where.',
  chips: ['Build a rich sentence', 'Fix the mistakes', 'Three photos, 1 min each'], botao: 'Start the lesson',
  nota: 'Quality beats quantity here: two correct, rich sentences are better than five short ones with mistakes.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'I · The Ladder', t: 'One photo sentence, five steps.', p: 'Read each step out loud, then go one step up. Notice what each step adds. Then climb with your own photo.' },
  { k: 'transforma', est: 'w', min: 9, img: 'conversa', rot: 'II · Build It Up', t: 'From flat to rich, one step at a time.', p: 'Read the sentence and the clue. Say the richer sentence. Then write it.' },
  { k: 'erros', est: 'f', min: 7, img: 'capa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'prova', est: 'w', min: 14, img: 'conversa', rot: 'IV · Three Photos', t: 'One minute each. Write.', p: 'Start the clock and write about the photo. Aim for two rich sentences.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Lesson 12: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var TRANSFORMA = { rot: 'BUILD IT UP', fim: 'That is the formula: place + details + adjectives + which / where / with.', itens: [
  { de: 'There is a tent.', pista: 'add a place: by a lake', para: 'There is a tent by a lake.' },
  { de: 'There is a tent by a lake.', pista: 'add adjectives: small, calm', para: 'There is a small tent by a calm lake.' },
  { de: 'There is a small tent by a calm lake.', pista: 'add “with” + detail', para: 'There is a small tent by a calm lake, with a campfire in front of it.' },
  { de: 'There is a workshop. It has many tools.', pista: 'join with “full of”', para: 'This is a carpentry workshop full of tools and wooden planks.' },
  { de: 'There is a park. The leaves are orange.', pista: 'join with “where”', para: 'This is a city park in autumn, where orange leaves cover the ground.' },
  { de: 'There is a bench. Someone left a leash on it.', pista: 'join with “which”', para: 'There is an empty bench, which has a dog leash on it.' }] };

var ERROS = { rot: 'A CANDIDATE’S ANSWER · 1 MINUTE', tipo: 'nota', partes: [
  ['In this photo have', 'In this photo, there is', 'there is / there are, not “have”'], ' a small tent near ', ['of a lake', 'a lake', 'near + place, no “of”'], '. ',
  ['There is two mugs', 'There are two mugs', 'plural → are'], ' on a log, and a campfire ', ['what', 'which', 'which for things'], ' is still burning. The sky is ',
  ['very much dark', 'very dark', 'very + adjective'], ', so it ', ['must to be', 'must be', 'must + base verb'], ' late in the evening.'] };

var PROVA = { rot: 'WRITE ABOUT THE PHOTO', tarefas: [
  { k: 'PHOTO 1', tipo: 'escrita', seg: 60, img: 'foto-acampamento', alt: 'A camping tent by a lake at dusk with a campfire and two mugs on a log', enun: 'Write one or more sentences about the photo. You have 1 minute.',
    criterios: ['At least one rich sentence (place + details)', 'Two or more adjectives', 'Used with / which / where', 'No grammar mistakes'],
    modelo: 'There is a small tent by a calm lake at dusk, with a campfire in front of it. Two mugs are on a log, which makes the scene look peaceful.' },
  { k: 'PHOTO 2', tipo: 'escrita', seg: 60, img: 'foto-oficina', alt: 'A carpentry workshop with wooden planks and tools on a workbench', enun: 'Write one or more sentences about the photo. You have 1 minute.',
    criterios: ['At least one rich sentence (place + details)', 'Two or more adjectives', 'Used with / which / where', 'No grammar mistakes'],
    modelo: 'This is a quiet carpentry workshop full of wooden planks and tools. Warm light comes through a small window, where you can see it is still day outside.' },
  { k: 'PHOTO 3', tipo: 'escrita', seg: 60, img: 'foto-parque', alt: 'A city park in autumn with a bench and fallen orange leaves', enun: 'Write one or more sentences about the photo. You have 1 minute.',
    criterios: ['At least one rich sentence (place + details)', 'Two or more adjectives', 'Used with / which / where', 'No grammar mistakes'],
    modelo: 'This photo shows a city park in autumn, where orange leaves cover the ground. In the foreground, there is an empty wooden bench with a dog leash on it.' }] };

var PODE = [
  'I can write one rich sentence about a photo in one minute.',
  'I can add a place, details and adjectives.',
  'I can join ideas with with, which and where.',
  'I can check there is / there are and very + adjective.'
];

/* MECÂNICAS VARIADAS */
/* DET 12: transforma · erros · prova (os dados estão no topo do aula.js) */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de transforma.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One photo. Build the sentence one step at a time.',
  degraus: [
    { r: 'start', f: '<b>There is</b> a tent.', d: 'The first sentence: what is in the photo.' },
    { r: 'place', f: 'There is a tent <b>by a lake</b>.', d: 'Add a place.' },
    { r: 'adjectives', f: 'There is a <b>small</b> tent by a <b>calm</b> lake.', d: 'Add adjectives before the nouns.' },
    { r: 'with', f: 'There is a small tent by a calm lake, <b>with a campfire</b> in front of it.', d: 'Add with and one more detail.' },
    { r: 'where', f: 'This is a small camp by a calm lake, <b>where</b> a campfire is burning.', d: 'Join the ideas with where or which.' }
  ],
  nota: 'The formula for one rich sentence: <b>place + details + adjectives + which / where / with</b>. Add one piece at a time, and the sentence grows.',
  uso: { p: 'Your turn. Look at the room you are in. Build one sentence with the ladder.', molde: ['There is a … by …', '… with …', '… where …'], ex: 'There is a small table by a bright window, with a green plant on it.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
