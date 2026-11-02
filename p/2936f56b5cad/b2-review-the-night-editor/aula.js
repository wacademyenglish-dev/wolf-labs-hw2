/* ============================================================
   REVIEW · B2 · UNIT 6 · THE NIGHT EDITOR · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: memoria · missao · erros · conversa · pode.
   Unidade 6 (A passiva que relata): is said to, is thought to, it is believed that, is expected to;
   passiva avançada (is thought to have been…, being done); modal passives (must be approved, could
   have been avoided); have / get it done.
   A missão: o aluno é o editor da noite de um jornal (inventado, The Evening Lamp). Três repórteres
   trazem três histórias; ele confere cada uma e escreve a manchete com a passiva que relata.
   ============================================================ */
var REV = { nivel: 'B2', unidade: 6, titulo: ['The Night', 'Editor'], tema: 'The passive that reports', placa: 'THE EVENING LAMP · 11:40 PM', lugarConversa: 'THE ROOFTOP', cor: '#9fb4ff', cor2: '#cfd9ff',
  sub: 'Unit 6 review. You are the night editor at The Evening Lamp. The paper prints at midnight. Three reporters, three stories, and nothing is confirmed yet.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'I · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · Twenty Minutes to Print', t: 'Three reporters. Check every story.', p: 'Ask each reporter five questions. Your teacher is the reporter. Then dictate the headline and the first line.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'conversa', est: 'o', min: 8, img: 'conversa', rot: 'IV · On the Rooftop', t: 'After the paper prints: just talk.', p: 'Answer in detail, then turn the question back.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'BEFORE MIDNIGHT · ASK FIVE QUESTIONS', quem: 'reporter', depois: 'Dictate the headline',
  campos: [
    { c: 'fato', r: 'THE STORY', q: 'What’s the story? What is being said?', f: 'The story?' },
    { c: 'cre', r: 'BELIEVED', q: 'What is it believed or thought to have happened?', f: 'What do people think?' },
    { c: 'espera', r: 'EXPECTED', q: 'What is expected to happen next?', f: 'Next?' },
    { c: 'evitar', r: 'AVOIDED?', q: 'Could it have been avoided?', f: 'Avoidable?' },
    { c: 'falta', r: 'TO BE DONE', q: 'What still has to be done before we print?', f: 'Before we print?' }],
  itens: [
    { k: 'REPORTER 1', tag: 'THE FERRY STORY', ele: 'It', manchete: 'FERRY STOPPED IN THE BAY. The engine is thought to have failed at 9 PM, and the 200 passengers are expected to arrive home by morning.', v: { fato: 'a ferry is said to have stopped in the middle of the bay', cre: 'the engine is thought to have failed at 9 PM', espera: 'the passengers are expected to arrive home by morning', evitar: 'it could have been avoided: the engine should have been checked last month', falta: 'the photos must be approved by the captain' }, diz: '“A ferry is said to have stopped in the middle of the bay.” · “The engine is thought to have failed at nine.” · “The 200 passengers are expected to arrive home by morning.” · “Yes. It could have been avoided. The engine should have been checked last month.” · “The photos must be approved by the captain.”' },
    { k: 'REPORTER 2', tag: 'THE PAINTING STORY', ele: 'It', manchete: 'LOST PAINTING FOUND IN A GARAGE. It is believed to have been painted in 1890, and it is being examined by experts tonight.', v: { fato: 'a lost painting is reported to have been found in a garage', cre: 'it is believed to have been painted in 1890', espera: 'it is expected to be sold for millions', evitar: 'it can’t have been avoided: nobody knew it was there', falta: 'the name of the owner has to be checked' }, diz: '“A lost painting is reported to have been found in a garage!” · “It is believed to have been painted in 1890.” · “It’s expected to be sold for millions.” · “Avoided? No. Nobody knew it was there.” · “The name of the owner has to be checked. And it’s being examined by experts right now.”' },
    { k: 'REPORTER 3', tag: 'THE BAKERY STORY', ele: 'It', manchete: 'TOWN’S OLDEST BAKERY TO CLOSE. The building is said to be unsafe, but it is hoped that it will be repaired by spring.', v: { fato: 'the town’s oldest bakery is said to be closing', cre: 'the building is thought to be unsafe', espera: 'it is hoped that it will be repaired by spring', evitar: 'it could have been avoided if the roof had been fixed years ago', falta: 'the owner needs to have the quote confirmed by the builders' }, diz: '“The town’s oldest bakery is said to be closing.” · “The building is thought to be unsafe.” · “It is hoped that it will be repaired by spring.” · “It could have been avoided if the roof had been fixed years ago.” · “The owner needs to have the quote confirmed by the builders.”' }],
  relato: { titulo: 'THE FRONT PAGE · DICTATE IT',
    pede: function (x) { return 'Two minutes! The headline and the first line for ' + x.tag.toLowerCase() + ', please.'; },
    chips: function () { return ['… is said to …', '… is thought to have …', 'It is believed that …', '… is expected to …', '… could have been avoided', '… is being …']; },
    modelo: function (x) { return x.manchete; } },
  nao: { said: '“It is said to stop yesterday” → it is said to HAVE STOPPED.', believe: '“It believes that…” → IT IS BELIEVED that…', avoid: '“It could be avoided” (about the past) → it could HAVE BEEN avoided.' },
  fim: 'The Evening Lamp printed at 11:59. is said to, is thought to have been, is expected to, could have been avoided and have it done: all of Unit 6 on one front page.' };

var CONVERSA = [
  { q: 'What is your city said to be famous for? Is it true?', f: 'Your city: famous for?', voce: ['It’s said to be …', 'Actually, …'], ex: 'It’s said to be the coldest city in Brazil. In winter, it’s true!' },
  { q: 'Think of a recent problem in your city. Could it have been avoided?', f: 'A problem in your city?', voce: ['It could have been avoided if …', 'It should have been …'], ex: 'The floods could have been avoided if the drains had been cleaned.' },
  { q: 'What is expected to change in your job or studies in the next few years?', f: 'Changes coming?', voce: ['… is expected to …', 'It is thought that …'], ex: 'A lot of reports are expected to be written by AI. It is thought that we’ll need new skills.' },
  { q: 'What do you have done by professionals, and what do you do yourself?', f: 'Done by professionals?', voce: ['I have my … done', 'I do my own …'], ex: 'I have my car serviced, but I cut my own hair!' },
  { q: 'Is there a legend or a story your family tells that may not be true?', f: 'A family legend?', voce: ['My grandfather is said to have …', 'It is believed that …'], ex: 'My great-grandfather is said to have met a famous singer on a train.' }
];

var PODE = [
  'I can report what people say: it is said to be, he is thought to be.',
  'I can report the past: she is believed to have left, it is thought to have been built…',
  'I can talk about the future: prices are expected to rise.',
  'I can use modal passives: it must be checked, it could have been avoided.',
  'I can say what I have done by others: I need to have it checked.'
];

/* MECÂNICAS VARIADAS */
/* B2 R6: memoria · missao · erros · conversa */
var PARES = [
  ['The ferry is said', 'to have stopped in the bay.', 'The ferry is said to have stopped in the middle of the bay.'],
  ['It is believed', 'to have been painted in 1890.', 'The painting is believed to have been painted in 1890.'],
  ['Prices are expected', 'to rise next year.', 'Prices are expected to rise again next year.'],
  ['It could have', 'been avoided.', 'The accident could have been avoided.'],
  ['The photos must', 'be approved.', 'The photos must be approved before midnight.'],
  ['I need to have', 'my laptop fixed.', 'I need to have my laptop fixed before Monday.']];
var ERROS = { tipo: 'nota', rot: 'DRAFT · PAGE 1 · NOT CHECKED', partes: ['A lost painting ', ['says to have been found', 'is said to have been found', 'Passive reporting: is said to.'], ' in a garage. It ', ['believes', 'is believed', 'Passive: is believed.'], ' to have been painted in 1890. It is expected ', ['to sell', 'to be sold', 'Passive infinitive: to be sold.'], ' for millions. The garage roof is ', ['thought to fall', 'thought to have fallen', 'The past: to have fallen.'], ' last winter, and the painting ', ['could be damaged', 'could have been damaged', 'The past: could have been.'], '. The owner will ', ['have checked the painting', 'have the painting checked', 'have + thing + participle.'], ' by experts.'] };
