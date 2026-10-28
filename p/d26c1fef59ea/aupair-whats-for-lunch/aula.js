/* ============================================================
   AU PAIR · MODULE 5 · LESSON 19 OF 24 · WHAT'S FOR LUNCH? · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   Comida e alergias: some / any, contáveis e incontáveis, ler rótulo ("Contains: milk, peanuts"), comer exigente.
   Sem vídeo (aula de prática). Rótulos e marcas FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 19, kick: 'AU PAIR · MODULE 5 · LESSON 19 OF 24', titulo: ['What’s for', 'Lunch?'], tema: 'Food, labels and allergies', placa: 'LESSON 19',
  lugarConversa: 'THE OPEN FRIDGE', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'You will make snacks, lunches and dinners for the kids. Today you learn food words with some and any, how to read an allergy label, and how to help a picky eater.',
  chips: ['some · any', 'Read the label', 'The picky eater'], botao: 'Start the lesson',
  nota: 'With allergies, there is no “a little bit”. If you are not sure, don’t give it, and ask the parents.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'I · Some or Any?', t: 'Small words in the kitchen.', p: 'Compare A and B. Then see the rule.' },
  { k: 'multipla', est: 'f', min: 12, img: 'capa', rot: 'II · Read the Label', t: 'Leo is allergic to peanuts. Emma can’t have milk.', p: 'Read each label. Can the kids eat it?' },
  { k: 'escolha', est: 'o', min: 8, img: 'conversa', rot: 'III · The Picky Eater', t: 'Two ideas for a child who won’t eat.', p: 'Choose one and say why. Then your teacher answers too.' },
  { k: 'conversa', est: 'o', min: 8, img: 'capa', rot: 'IV · Food Talk', t: 'Talk about food with the family.', p: 'Answer, then ask back: “And you?”' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 19: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var DESCOBRE = {
  pares: [
    { a: 'There is {some} milk in the fridge.', b: 'There isn’t {any} milk in the fridge.', q: 'When do we use some, and when any?', r: '<b>some</b> in positive sentences; <b>any</b> in negatives and most questions.' },
    { a: 'Are there {any} apples?', b: 'Would you like {some} apples?', q: 'Both are questions. Why “some” in B?', r: 'In <b>offers and requests</b> we use some: Would you like some…? Can I have some…?' },
    { a: 'two {apples} · some {bread}', b: 'two {breads} · some {apple}', q: 'Which words can we count?', r: '<b>Countable</b>: an apple, two apples. <b>Uncountable</b>: bread, milk, rice, cheese (a slice of bread).' },
    { a: 'How {much} juice?', b: 'How {many} eggs?', q: 'Why much in A and many in B?', r: '<b>How much</b> + uncountable (juice). <b>How many</b> + countable (eggs).' }],
  regra: [['SOME', 'positive and offers: some bread, Would you like some…?'], ['ANY', 'negative and questions: I don’t have any…, Are there any…?'], ['COUNTABLE', 'an apple, two apples · How many?'], ['UNCOUNTABLE', 'bread, milk, rice · How much?']],
  armas: [['ANY', 'There isn’t some juice.', 'There isn’t any juice.', 'negative → any'], ['UNCOUNTABLE', 'two breads', 'two slices of bread', 'bread is uncountable'], ['MUCH / MANY', 'How much eggs?', 'How many eggs?', 'countable → many'], ['OFFER', 'Would you like any cake?', 'Would you like some cake?', 'offer → some']] };

var MULTIPLA = { rot: 'READ THE LABEL', fim: 'If you are not sure, the answer is no. Then ask the parents.', itens: [
  { txt: '<b>Crunchy Bites</b> (fictional) · Ingredients: corn, sunflower oil, salt. <i>Contains: none of the top allergens.</i>', q: 'Can Leo (peanut allergy) and Emma (no milk) eat it?', ops: ['Yes, both can.', 'Only Emma.', 'Nobody.'], c: 0, por: 'No peanuts, no milk.' },
  { txt: '<b>Choco Stars</b> (fictional) · Contains: milk, soy. <i>May contain traces of peanuts.</i>', q: 'Who can eat it?', ops: ['Leo only.', 'Emma only.', 'Neither of them.'], c: 2, por: 'Milk is a problem for Emma, and “may contain peanuts” is a risk for Leo.' },
  { txt: '<b>Sunny Oat Bar</b> (fictional) · Contains: oats, honey, almonds. <i>Made in a factory that also processes milk.</i>', q: 'What should you do for Emma?', ops: ['Give it, it’s only a little milk.', 'Ask the parents first.', 'Remove the almonds.'], c: 1, por: '“Factory that also processes milk”: ask the parents what is OK for Emma.' },
  { txt: '<b>Garden Pasta Sauce</b> (fictional) · Ingredients: tomatoes, olive oil, basil, garlic.', q: 'Who can eat it?', ops: ['Both kids.', 'Only Leo.', 'Only Emma.'], c: 0, por: 'No milk, no peanuts.' },
  { txt: '<b>Nutty Crunch Cereal</b> (fictional) · Contains: wheat, PEANUTS, milk.', q: 'What do you do with it?', ops: ['Give it to Leo with a lot of milk.', 'Keep it away from both kids.', 'Give it only on Fridays.'], c: 1, por: 'Peanuts for Leo, milk for Emma. Keep it away from both.' }] };

var ESCOLHA = [
  { a: 'Let the child help you cook the vegetables', b: 'Say: “No dessert if you don’t eat the vegetables”', chips: ['I’d choose… because…', 'Kids like…'], ex: 'I’d choose cooking together. Kids eat more food they help to make.' },
  { a: 'Put a very small portion on the plate', b: 'Put a big portion and insist', chips: ['I prefer… because…', 'In my experience,…'], ex: 'I prefer a small portion, because it’s less scary, and they can ask for more.' },
  { a: 'Follow the parents’ food rules', b: 'Use your own rules from Brazil', chips: ['I would…, because…', 'The parents…'], ex: 'I would follow the parents’ rules, because they are the parents, but I can share Brazilian food at the weekend.' }];
var ESCOLHA_FIM = 'Patience, small portions, cooking together, and always the family’s rules.';

var CONVERSA = [
  { q: 'What is your favorite Brazilian dish? Can you describe it?', f: 'What food from Brazil do you love?', voce: ['My favorite dish is…', 'It’s made with…', 'We eat it…'], ex: 'My favorite is feijoada. It’s a black bean stew with pork, and we eat it with rice, collard greens and orange slices on Saturdays.' },
  { q: 'Do you have any food allergies?', f: 'Is there any food you can’t eat?', voce: ['I don’t have any…', 'I’m allergic to…', 'I don’t eat…'], ex: 'I don’t have any allergies, but I don’t eat pork.' },
  { q: 'Can you cook? What can you make?', f: 'Do you like cooking?', voce: ['I can make…', 'I’m good at…', 'I’d like to learn…'], ex: 'I can make rice and beans, pasta and brigadeiro. I’d like to learn to make pancakes!' },
  { q: 'What would you make for a quick, healthy snack?', f: 'What snack would you give the kids?', voce: ['I would make…', 'with some…'], ex: 'I would make apple slices with some yogurt, or a banana with oats.' }];

var PODE = [
  'I can use some and any, much and many with food.',
  'I can read an allergy label: contains, may contain.',
  'I can say what I do when I am not sure: don’t give it, ask the parents.',
  'I can talk about food and help a picky eater.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 19: descobre · multipla · escolha · conversa (os dados estão no topo do aula.js) */
