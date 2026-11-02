/* ============================================================
   REVIEW · B1 · UNIT 10 · THE DEBATE NIGHT · THE B1 FINAL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: memoria · tabuleiro · cartao · cadeira · pode · ponte.
   Unidade 10 (Ligar ideias e segurar a conversa): finalidade (to, in order to, so that); causa e
   efeito (because, because of, leads to); contraste (however, despite, in spite of, even though);
   o do enfático (I do mean it); bring / take, come / go; dizer sem a palavra (paráfrase).
   É a ÚLTIMA revisão do livro B1: o tabuleiro é uma noite de debate; a cena VI mostra o livro B2.
   ============================================================ */
var REV = { nivel: 'B1', unidade: 10, titulo: ['The Debate', 'Night'], tema: 'Closing Book B1', placa: 'THE B1 FINAL', lugarConversa: 'THE ROAD TO B2', cor: '#c6f36b', cor2: '#e2fab5',
  sub: 'The last review of Book B1. Tonight is debate night at the town theater. Pick a side, connect your ideas, and hold the floor.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'I · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'II · Debate Night', t: 'Roll, move, defend your idea.', p: 'Your teacher rolls the die. Do the task on your square, out loud. Your teacher may disagree!' },
  { k: 'cartao', est: 'w', min: 7, img: 'conversa', rot: 'III · Your Opening Speech', t: 'Write your opening speech.', p: 'Four short lines: your idea, why, the other side, and your goal.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'V · I Can', t: 'Unit 10: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' },
  { k: 'ponte', est: 'l', min: 3, img: 'conversa', rot: 'VI · The Next Book', t: 'Book B1 is done. Here is Book B2.', p: 'Read the three cards out loud. Which one do you want first?' }
];
var PORTAS = [];

var CARTAO = { ph: 'I believe we should work four days a week.\nPeople would be happier because of the extra day, and that leads to better work.\nHowever, some jobs are different. Even though it’s hard, they can take turns.\nWe should try it so that families have more time together. I do mean it!', rot: 'My opening speech',
  chips: ['I believe ', 'because ', 'because of ', 'That leads to ', 'However, ', 'Even though ', 'Despite ', 'in order to ', 'so that ', 'I do think '],
  perg: ['YOUR OPENING SPEECH', 'Choose a topic: four-day week, phones at school, or working from home. Your idea? Why? The other side? Your goal?'],
  exemploRot: 'THE TOPICS TONIGHT', exemplo: [['TOPIC 1', 'a four-day work week'], ['TOPIC 2', 'no phones at school'], ['TOPIC 3', 'working from home'], ['TIME', 'one minute each'], ['RULE', 'connect every idea']],
  modelo: 'I believe we should work four days a week. People would be happier because of the extra day, and that leads to better work.<br>However, some jobs are different. Even though it’s hard, they can take turns.<br>We should try it so that families have more time together. I do mean it!' };

var PODE = [
  'I can say why: to, in order to, so that.',
  'I can connect causes and results: because of, leads to.',
  'I can show the other side: however, despite, even though.',
  'I can make my point strong: I do think so! I did call you!',
  'I can explain a word I don’t know: it’s a thing you use to…'
];

var PONTE = { nivel: 'B2', titulo: 'Book 4 · Layers, wishes and what if',
  itens: [
    ['BY THEN', 'By 2030 I will have finished my degree.', 'Say what will be done before a time in the future.'],
    ['I WISH', 'I wish I had more time. If only I had known!', 'Talk about wishes and regrets, now and in the past.'],
    ['WHAT IF', 'If I had moved to Lisbon, I would be there now.', 'Mix the past and the present when you imagine.']],
  fim: 'Book B1 is complete. Congratulations! Book B2 starts with the past in layers, and the future already done.' };

/* MECÂNICAS VARIADAS */
/* B1 R10: memoria · tabuleiro · cartao · cadeira · ponte */
var PARES = [
  ['I study at night', 'so that I can work by day.', 'I study at night so that I can work during the day.'],
  ['She saved money', 'in order to travel.', 'She saved money in order to travel to Japan.'],
  ['Despite the rain,', 'we went to the beach.', 'Despite the rain, we went to the beach. It was fun!'],
  ['Even though he was tired,', 'he finished the race.', 'Even though he was tired, he finished the race.'],
  ['Too much screen time', 'leads to bad sleep.', 'Too much screen time leads to bad sleep.'],
  ['I do', 'mean it!', 'I’m not joking. I do mean it!']];
var TABULEIRO = { rot: 'DEBATE NIGHT', centro: 'Connect every idea. Hold the floor.', casas: [
  { k: 'OPENING', t: 'Say your idea about a four-day work week and one reason, with because.', ex: 'I think it’s a great idea because people need more rest.' },
  { k: 'THE GOAL', t: 'Why do people work? Answer with to, in order to and so that.', ex: 'We work to pay the bills, in order to travel, and so that our kids can study.' },
  { k: 'CAUSE', t: 'What does stress lead to? Two results.', ex: 'Stress leads to bad sleep, and bad sleep leads to mistakes.' },
  { k: 'THE OTHER SIDE', t: 'Your teacher disagrees. Answer with however.', ex: 'That’s true. However, many companies have tried it, and it works.' },
  { k: 'DESPITE', t: 'Something good that happened despite a problem.', ex: 'Despite the traffic, I arrived on time.' },
  { k: 'EVEN THOUGH', t: 'Phones at school: give your opinion with even though.', ex: 'Even though phones are useful, kids should keep them in their bags in class.' },
  { k: 'I DO MEAN IT', t: 'Your teacher doesn’t believe you. Insist with do / did.', ex: 'I did read the article! And I do think it’s important.' },
  { k: 'NO WORD', t: 'You forgot the word “umbrella”. Explain it without the word.', ex: 'It’s a thing you use so that you don’t get wet when it rains.' },
  { k: 'BRING / TAKE', t: 'The debate is at your house next week. What should people bring? What will you take to the theater?', ex: 'Bring some snacks when you come. I’ll take the chairs when I go.' },
  { k: 'BECAUSE OF', t: 'Working from home: one good thing because of it, one problem.', ex: 'Because of home office, I have more time. However, I feel lonely.' },
  { k: 'SO THAT', t: 'Give one piece of advice to the city, with so that.', ex: 'The city should build more bike lanes so that people can leave their cars.' },
  { k: 'CLOSING', t: 'Close the debate: your idea, the other side, your goal. One minute!', ex: 'I believe it works. Even though it isn’t easy, we should try it so that people live better. I do mean it!' }] };
var CADEIRA = { itens: [
  { alvo: 'Ask me why I study English.', dica: 'Why do you study English?', resp: 'I study it so that I can travel and work abroad.' },
  { alvo: 'Ask me about something I did despite a problem.', dica: 'What did you do despite a problem?', resp: 'Despite the rain, I ran ten kilometers.' },
  { alvo: 'Ask me what too much coffee leads to.', dica: 'What does too much coffee lead to?', resp: 'It leads to bad sleep!' },
  { alvo: 'Ask me for my opinion on working from home.', dica: 'What do you think about working from home?', resp: 'I like it. However, I miss my colleagues.' },
  { alvo: 'Say you don’t believe me. Make me insist!', dica: 'I don’t believe you did your homework!', resp: 'I did do it! I do work hard!' }] };
