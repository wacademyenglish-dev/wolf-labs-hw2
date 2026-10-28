/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 9 OF 16 · READ, THEN SPEAK · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: um tema escrito com perguntas-guia; 20 segundos para preparar, de 30 a 90 segundos falando.
   Estrutura em quatro partes: a resposta → o motivo → um exemplo → o fecho (That's why…).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 9, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 9 OF 16', titulo: ['Read, Then', 'Speak'], tema: 'Answer, reason, example, wrap-up', placa: 'LESSON 09',
  lugarConversa: 'THE LECTURE ROOM', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'A topic on the screen, 20 seconds to think, up to 90 seconds to speak. Today you get a plan for any topic: answer, reason, example, wrap-up.',
  chips: ['The shape of an answer', 'Roll the die: six topics', 'Three topics, real clock'], botao: 'Start the lesson',
  nota: 'Answer the question in your first sentence. Then reason, example, wrap-up. The guide questions on the card are your map.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'I · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'dado', est: 'f', min: 8, img: 'capa', rot: 'II · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'prova', est: 'o', min: 16, img: 'conversa', rot: 'III · Three Topics', t: 'The real thing: 20 seconds, then speak.', p: 'Read the topic. Use the guide questions as your map.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var ORDEM = { rot: 'TOPIC: YOUR FAVORITE SEASON', pede: 'Tap the four pieces in order: answer, reason, example, wrap-up.',
  passos: ['My favorite season is autumn.', 'The main reason is the weather: it is not too hot and not too cold.', 'For example, last October I walked to work every day, and it was wonderful.', 'That’s why autumn is the season I wait for every year.'],
  chips: ['My favorite … is …', 'The main reason is…', 'For example,…', 'That’s why…'],
  modelo: 'My favorite season is autumn. The main reason is the weather: it is not too hot and not too cold. For example, last October I walked to work every day. That’s why autumn is the season I wait for every year.' };

var PORTAS = [
  { k: 'A PERFECT SUNDAY', tema: 'free time', t: 'Describe your perfect Sunday.', ex: 'My perfect Sunday starts late. The main reason is that I wake up at six all week. For example, last Sunday I slept until ten. That’s why Sundays are special for me.', trap: 'Answer first: “My perfect Sunday…”' },
  { k: 'A HABIT', tema: 'routine', t: 'Talk about a good habit you have.', ex: 'A good habit I have is reading before bed. It helps me relax. For example, I read twenty pages every night. That’s why I sleep well.', trap: 'present simple for habits' },
  { k: 'TECHNOLOGY', tema: 'opinion', t: 'Is your phone a friend or an enemy?', ex: 'Honestly, it is both. It helps me work, but it steals my time. For example, I spend an hour a day on videos. That’s why I am trying to use it less.', trap: 'give a clear answer, even “both”' },
  { k: 'FOOD', tema: 'preferences', t: 'Talk about a dish from your country.', ex: 'I love feijoada. It is a bean stew with pork. For example, my family makes it every Saturday. That’s why it reminds me of home.', trap: 'explain it to someone who never tried it' },
  { k: 'A PLACE', tema: 'description', t: 'Describe a place where you feel calm.', ex: 'I feel calm at the beach near my city. The sound of the sea relaxes me. For example, I go there after hard weeks. That’s why it is my favorite place.', trap: 'where + why + when' },
  { k: 'THE FUTURE', tema: 'plans', t: 'Talk about something you want to do next year.', ex: 'Next year, I want to study abroad. The main reason is my career. For example, I am already saving money. That’s why I am taking this test.', trap: 'want to / I’m going to + plan' }];

var PROVA = { rot: 'READ, THEN SPEAK', tarefas: [
  { k: 'TOPIC 1', tipo: 'fala', prep: 20, seg: 90, enun: 'Read the topic. Prepare for 20 seconds. Speak for 30 to 90 seconds.',
    texto: '<b>Describe a place in your city that you like to visit.</b><br>Where is it? What do you do there? Why do you like it?',
    chips: ['A place I love is…', 'It’s in…', 'I usually go there to…', 'The main reason is…', 'That’s why…'],
    criterios: ['Answered in the first sentence', 'Gave a reason', 'Gave an example', 'Wrapped up (That’s why…)', 'Spoke for 60 seconds or more'],
    modelo: 'A place I love in my city is the botanical garden. It’s near the university, and it’s free on weekends. I usually go there to read or just to walk under the trees. The main reason I like it is the silence: you forget you are in a big city. For example, last Sunday I spent three hours there and didn’t check my phone once. That’s why it’s my favorite place to recharge.' },
  { k: 'TOPIC 2', tipo: 'fala', prep: 20, seg: 90, enun: 'Read the topic. Prepare for 20 seconds. Speak for 30 to 90 seconds.',
    texto: '<b>Talk about a skill you would like to learn.</b><br>What is it? Why do you want to learn it? How would you learn it?',
    chips: ['I’d really like to learn…', 'The main reason is…', 'I would probably…', 'For example,…', 'That’s why…'],
    criterios: ['Answered in the first sentence', 'Gave a reason', 'Said how (would + verb)', 'Wrapped up', 'Spoke for 60 seconds or more'],
    modelo: 'I’d really like to learn to play the guitar. The main reason is that music helps me relax after work. I would probably take online classes at first, and then find a teacher in my neighborhood. For example, a friend of mine learned this way in one year, and now he plays at parties. That’s why I think it’s possible for me too.' },
  { k: 'TOPIC 3', tipo: 'fala', prep: 20, seg: 90, enun: 'Read the topic. Prepare for 20 seconds. Speak for 30 to 90 seconds.',
    texto: '<b>Some people prefer to study alone; others prefer to study in groups.</b><br>Which do you prefer? Why? Give an example.',
    chips: ['I prefer to…', 'The main reason is…', 'On the other hand,…', 'For example,…', 'That’s why…'],
    criterios: ['Answered in the first sentence', 'Gave a reason', 'Mentioned the other side', 'Gave an example', 'Wrapped up'],
    modelo: 'I prefer to study alone. The main reason is concentration: in a group, we talk a lot and study a little. On the other hand, groups are great before an exam, to check answers. For example, last semester I studied alone all month and met my classmates only the day before the test. That’s why I think the best plan is a mix, but mostly alone.' }] };

var PODE = [
  'I can answer the question in my first sentence.',
  'I can follow a shape: answer, reason, example, wrap-up.',
  'I can use the guide questions as a map.',
  'I can speak for 60 seconds or more on a new topic.'
];

/* MECÂNICAS VARIADAS */
/* DET 09: ordem · dado (PORTAS) · prova (os dados estão no topo do aula.js) */
