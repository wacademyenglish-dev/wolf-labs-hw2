/* ============================================================
   THE STORY ARC · C1 · UNIT 10 (THE TALK) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: a história dentro de uma fala, com os sinais do arco: It all started when…; At first, …;
   Things got worse when…; That’s when…; It turned out that…; Fast forward to…; Looking back, …;
   The lesson I learned was… — e a mistura dos tempos narrativos (past simple, past continuous, past
   perfect) a serviço da história.
   Armadilha: contar tudo no presente sem querer; "It turned out what"; "Fast forward" sem destino;
   "In the end" × "At the end" (At the end of the day / In the end = finally).
   O mundo: o trecho de uma palestra de uma padeira que quase fechou a padaria.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 10, titulo: ['The Story', 'Arc'], tema: 'A story inside your talk.',
  sub: 'Facts inform. Stories move people. Every great talk has one story with a beginning, a problem, a turning point and a lesson. Read a baker’s story and build your own arc.',
  placa: 'THE TALK · MINUTE 2', lugarConversa: 'THE CAMPFIRE', cor: '#d99a6a', cor2: '#eccbb4',
  chips: ['It all started when…', 'That’s when…', 'Looking back,…'], botao: 'Start the lesson', nota: 'People forget numbers. They remember stories.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · A Story You Remember', t: 'What story do you always tell?', p: 'Answer with detail. Then ask the question back.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · The Baker’s Story', t: 'Minute two of her talk.', p: 'Read the story out loud, like a speaker. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · The Signposts', t: 'Where are we in the story?', p: 'Compare A and B. What does the signpost tell the audience?' },
  { k: 'ordem', est: 'o', min: 7, img: 'capa', rot: 'IV · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'V · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' }
];
var PORTAS = [];

var CONVERSA = [
  { q: 'What’s a story from your life that you always tell at parties?', f: 'Your party story?', voce: ['It all started when …', 'That’s when …'], ex: 'It all started when I got on the wrong plane… to Chile!' },
  { q: 'Tell me about a moment when everything changed for you.', f: 'A moment of change?', voce: ['At first, …', 'That’s when I realized …'], ex: 'At first, I hated my new job. That’s when I met my best friend.' },
  { q: 'Looking back, what’s a lesson you learned the hard way?', f: 'A hard lesson?', voce: ['Looking back, …', 'The lesson I learned was …'], ex: 'Looking back, the lesson I learned was to ask for help earlier.' }
];

var LEITURA = { rot: 'THE TALK · “HOW BREAD SAVED ME” · MINUTE 2', tipo: 'fala',
  antes: { q: 'Why do you think speakers tell personal stories in their talks?', h: 'To connect with the audience, to make an idea real and memorable.' },
  texto: 'SPEAKER: {It all started when} my grandmother gave me her old bread recipe. I opened a tiny bakery with it in 2019.\nSPEAKER: {At first}, everything was perfect. People queued around the corner.\nSPEAKER: {Things got worse when} a big supermarket opened across the street. I had been working sixteen hours a day, and I was losing money every week.\nSPEAKER: One night I was about to close the bakery forever. {That’s when} an old man knocked on the door. He wanted to buy “the bread that tastes like my mother’s”.\nSPEAKER: {It turned out that} he wrote a food blog with fifty thousand readers.\nSPEAKER: {Fast forward to} today: we have three bakeries, and a waiting list.\nSPEAKER: {Looking back}, {the lesson I learned was} this: don’t compete on price. Compete on memory.',
  perguntas: [
    { q: 'How did the bakery begin?', h: 'With her grandmother’s old bread recipe, in 2019.' },
    { q: 'What was the problem?', h: 'A big supermarket opened across the street; she worked 16 hours a day and lost money.' },
    { q: 'What was the turning point?', h: 'An old man who wanted bread like his mother’s: he had a famous food blog.' },
    { q: 'What’s the lesson of the story?', h: 'Don’t compete on price; compete on memory.' }],
  olha: 'Find the eight signposts. Which ones open the story? Which mark the problem, the turn, the end?' };

var DESCOBRE = {
  pares: [
    { a: '{It all started when} my grandmother gave me a recipe.', b: 'My grandmother gave me a recipe.', q: 'Same fact. What does A tell the audience?', r: 'A: “a story is beginning, listen”. It signals the start of the arc. B is just a fact.' },
    { a: 'An old man knocked. {That’s when} everything changed.', b: 'An old man knocked. Then everything changed.', q: 'Why is A stronger in a talk?', r: 'That’s when points to THE moment: the turning point. Then is just the next event.' },
    { a: '{It turned out that} he wrote a famous blog.', b: '{It turned out what} he wrote a famous blog.', q: 'One is wrong. Which one?', r: 'A. It turned out that… (= we discovered later that…). Never “turned out what”.' },
    { a: '{Looking back}, the lesson was simple.', b: '{In the end}, we have three bakeries.', q: 'Both are near the end. What’s the difference?', r: 'Looking back = reflection, the speaker today thinking about it. In the end = finally, the result of the events.' }],
  regra: [['THE START', 'It all started when… · At first, …'], ['THE PROBLEM', 'Things got worse when… · I had been …ing (past perfect continuous)'], ['THE TURN', 'That’s when… · It turned out that… · Little did I know…'], ['THE END AND THE LESSON', 'Fast forward to today: … · In the end, … · Looking back, … · The lesson I learned was…']],
  armas: [
    ['TURNED OUT', 'It turned out what he was famous.', 'It turned out <b>that</b> he was famous.', 'turned out that.'],
    ['FAST FORWARD', 'Fast forward, we have three shops.', 'Fast forward <b>to today</b>: we have three shops.', 'fast forward to + time.'],
    ['AT THE END', 'At the end, we survived.', '<b>In the end</b>, we survived.', 'In the end = finally.'],
    ['TENSE', 'I work sixteen hours a day, and I lose money.', 'I <b>had been working</b> sixteen hours a day, and I <b>was losing</b> money.', 'Narrative tenses in the past.']] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · The Story Arc: conversa · leitura · descobre · ordem · memoria */
var ORDEM = { rot: 'YOUR STORY ARC · A FIRST JOB', pede: 'Tap the parts of the arc in order. Then tell the whole story with the signposts.', chips: ['It all started when …', 'At first, …', 'Things got worse when …', 'That’s when …', 'It turned out that …', 'Looking back, …'],
  modelo: 'It all started when I got my first job in a call centre. At first, I loved it. Things got worse when my boss doubled our targets. That’s when a customer asked for my name and wrote to the company about me. It turned out that he was the owner. Looking back, the lesson I learned was: always be kind; you never know who is listening.',
  passos: ['I got my first job in a call centre.', 'At first, I loved it.', 'My boss doubled our targets, and I was exhausted.', 'A customer asked for my name and wrote to the company.', 'It turned out that he was the owner, and I was promoted.', 'The lesson: always be kind; you never know who is listening.'] };
var PARES = [
  ['It all started', 'when…', 'It all started when my grandmother gave me a recipe.'],
  ['Things got worse', 'when…', 'Things got worse when a supermarket opened.'],
  ['That’s', 'when…', 'That’s when an old man knocked on the door.'],
  ['It turned out', 'that…', 'It turned out that he wrote a famous blog.'],
  ['Fast forward', 'to today…', 'Fast forward to today: we have three bakeries.'],
  ['Looking', 'back…', 'Looking back, the lesson was simple.']];
