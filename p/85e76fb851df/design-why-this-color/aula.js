/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 2 · LESSON 5 OF 12 · WHY THIS COLOR? · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   Descrever o visual: cor, contraste, peso, sensação. It feels…, It looks a bit too…, not … enough, -ish.
   Vídeo The Futur Academy (0:46–3:28, harmonias, neutros, menos é mais).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 5, kick: 'ENGLISH FOR DESIGNERS · MODULE 2 · LESSON 5 OF 12', titulo: ['Why This', 'Color?'], tema: 'Describing the visual: color, contrast, weight and feeling', placa: 'LESSON 5',
  lugarConversa: 'THE COLOR STUDIO', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: '“It’s nice” says nothing. Today you learn the words to describe a design precisely: how it looks, how it feels, and what is too much or not enough.',
  chips: ['Five color tips', 'Too, enough, -ish', 'This one or that one?'], botao: 'Start the lesson',
  nota: 'Designers describe with feelings and with facts: “It feels calm” and “the contrast is too low”. Use both.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · Where Do I Start?', t: 'A designer’s first three color tips.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 12, img: 'capa', rot: 'II · Too Much, Not Enough', t: 'The small words that make feedback precise.', p: 'Compare A and B. Which one is right? Why?' },
  { k: 'escolha', est: 'o', min: 14, img: 'conversa', rot: 'III · This One or That One?', t: 'Two options. Choose and explain.', p: 'Imagine both options. Choose one and describe why.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'C1rQQ_YpgcI', titulo: 'How to Not Suck at Color: 5 Color Theory Tips', fonte: 'THE FUTUR ACADEMY · 0:46–3:28', inicio: 46, fim: 208,
  antes: { q: 'Describe the colors of the room you are in now. Use three words.', h: 'For example: warm, neutral, a bit dark.' },
  ouvir: 'Listen: What are the first three tips?',
  perguntas: [
    { q: 'Where does he say you should start with color?', h: 'With color harmonies: monochromatic, complementary, analogous… find one color you like and let science do the rest.' },
    { q: 'What are neutral colors, and what do they do?', h: 'Blacks, whites, grays and browns. They recede into the background and make the main colors stand out.' },
    { q: 'He compares neutrals to something. What?', h: 'Negative space, but for color. And you probably need more than you think.' },
    { q: 'What are the two most common color mistakes?', h: 'Using too many colors (overuse) and too much saturation (oversaturation).' },
    { q: 'What does cooking have to do with color?', h: 'You don’t use all the spices: start with two colors and two neutrals, and add more later.' }],
  fecho: 'Harmony to start, neutrals to rest, fewer colors than you think. And then you have to explain it in words.' };

var DESCOBRE = {
  pares: [
    { a: 'The text is {too} small.', b: 'The text is {very} small. (and that’s a problem)', q: 'Which one says clearly that it’s a problem?', r: '<b>too</b> = more than it should be: a problem. <b>very</b> just describes.' },
    { a: 'The contrast isn’t {strong enough}.', b: 'The contrast isn’t {enough strong}.', q: 'Where does “enough” go?', r: 'adjective + <b>enough</b>: strong enough, big enough, clear enough. But <b>enough</b> + noun: enough space, enough contrast.' },
    { a: 'It {feels} calm.', b: 'It {feels like} calm.', q: 'Which one is right?', r: '<b>feels / looks + adjective</b> (feels calm, looks busy). <b>feels / looks like + noun</b> (looks like a hospital).' },
    { a: 'It’s a {bluish} gray.', b: 'It’s a {blue-ish like} gray.', q: 'Which one sounds natural?', r: '<b>-ish</b> = a little: bluish, greenish, reddish. Very common when you describe color.' }],
  regra: [['TOO', 'too + adjective: a problem (too bright, too busy)'], ['ENOUGH', 'adjective + enough (big enough); enough + noun (enough space)'], ['FEELS / LOOKS', '+ adjective (calm) · + like + noun (like a bank)'], ['-ISH', 'a little: bluish, warmish, 1990s-ish']],
  armas: [['TOO', 'The logo is very big, we must change.', 'The logo is too big.', 'a problem'], ['ENOUGH', 'not enough big', 'not big enough', 'adjective + enough'], ['LOOKS LIKE', 'It looks a bank.', 'It looks like a bank.', 'like + noun'], ['FEELS', 'It feels like warm.', 'It feels warm.', 'feels + adjective']] };

var ESCOLHA = [
  { a: 'Logo for a children’s bookshop: bright yellow, red and blue', b: 'Logo for a children’s bookshop: soft orange and warm gray', chips: ['I’d go with… because…', 'It feels…', 'The other one looks a bit too…'], ex: 'I’d go with the soft orange and gray, because it feels warm and friendly. The other one looks a bit too loud, like a toy store.' },
  { a: 'Banking app: dark navy with one green accent', b: 'Banking app: purple, pink and orange gradients', chips: ['I’d choose… because…', 'It looks…', 'The contrast is…'], ex: 'I’d choose the navy with one green accent, because it looks stable and the contrast is strong enough for the numbers.' },
  { a: 'Bedroom for a teenager: all white with gray furniture', b: 'Bedroom for a teenager: greenish walls, wood and one bold rug', chips: ['I’d prefer… because…', 'It feels like…', 'There isn’t enough…'], ex: 'I’d prefer the greenish walls and wood, because the white room feels like a hospital and there isn’t enough personality.' },
  { a: 'Event poster: twelve colors and five fonts', b: 'Event poster: two colors, two neutrals and one font', chips: ['I’d go for… because…', 'It’s too…', 'The date stands out…'], ex: 'I’d go for two colors and one font, because the other is too busy and the date doesn’t stand out.' }];
var ESCOLHA_FIM = 'Feeling + fact: “It feels calm, and the contrast is strong enough.” That’s a designer’s description.';

var PODE = [
  'I can describe a design with feels / looks + adjective.',
  'I can say what is too much or not enough.',
  'I can describe colors precisely: bluish, warm, neutral, saturated.',
  'I can choose between two options and explain why.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 05: video · descobre · escolha (os dados estão no topo do aula.js) */
