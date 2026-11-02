/* ============================================================
   REVIEW · A2 · UNIT 7 · FIRST DAY AT CAMP · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: bingo · tabuleiro · erros · conversa · pode.
   Unidade 7 (Regras e conselhos): should / shouldn't + verbo puro; have to / has to / don't have to,
   Do I have to…?, had to; must / mustn't (sem to, sem passado).
   A missão aqui é o TABULEIRO: o primeiro dia num acampamento à beira do lago, casa por casa.
   ============================================================ */
var REV = { nivel: 'A2', unidade: 7, titulo: ['First Day', 'at Camp'], tema: 'Rules and advice', placa: 'LAKE CAMP', lugarConversa: 'THE PIER', cor: '#7fd6a8', cor2: '#c0ecd5',
  sub: 'Unit 7 review. You are a camp leader at a summer camp by a lake. It’s the first day: rules, advice and many questions.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'I · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a row is a BINGO: across, down or diagonal.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'II · The Board', t: 'Roll, move, do the square.', p: 'Your teacher rolls the die. Do the task on your square, out loud.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'conversa', est: 'o', min: 8, img: 'conversa', rot: 'IV · Small Talk', t: 'By the lake at night. Let’s talk.', p: 'Answer, then ask the question back: “And you?”' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var CONVERSA = [
  { q: 'What do you have to do every morning?', f: 'Every morning: you have to…?', voce: ['I have to …', 'I don’t have to …'], ex: 'I have to make breakfast for my kids.' },
  { q: 'Give me one piece of advice for learning English.', f: 'English: your advice?', voce: ['You should …', 'You shouldn’t …'], ex: 'You should watch series with English subtitles.' },
  { q: 'What’s a rule at your work or school?', f: 'A rule at work?', voce: ['We must …', 'We mustn’t …'], ex: 'We mustn’t use our phones in meetings.' },
  { q: 'What did you have to do as a child that you hated?', f: 'As a child: you had to…?', voce: ['I had to …', 'My parents made me …'], ex: 'I had to go to bed at eight!' },
  { q: 'Is there something you don’t have to do on weekends?', f: 'Weekends: no need to…?', voce: ['I don’t have to …', 'so I …'], ex: 'I don’t have to get up early, so I sleep a lot.' }
];

var PODE = [
  'I can give advice with should / shouldn’t.',
  'I can say rules: have to, has to, must.',
  'I can say what is not necessary: don’t have to.',
  'I can say what is not allowed: mustn’t.',
  'I can ask “Do I have to…?” and talk about the past with had to.'
];

/* MECÂNICAS VARIADAS */
/* A2 R7: bingo · tabuleiro · erros · conversa */
var BINGO = [['Advice: I’m always tired.', 'You should sleep more.'], ['A rule at camp with must', 'You must wear a life jacket.'], ['Not necessary: wear a tie', 'You don’t have to wear a tie.'], ['He ___ to work on Saturdays. (have)', 'has'], ['Not allowed: swim at night', 'You mustn’t swim at night.'], ['Yesterday I ___ wake up at 5. (have)', 'had to'], ['Ask: is it necessary to pay?', 'Do I have to pay?'], ['Advice: don’t eat that!', 'You shouldn’t eat that.'], ['Your boss: what does she have to do?', 'She has to answer a lot of emails.']];
var TABULEIRO = { rot: 'LAKE CAMP · DAY 1', centro: 'Help the new campers, square by square.', casas: [
  { k: 'ARRIVAL', t: 'A camper asks: “Do I have to sleep in a tent?” Answer.', ex: 'Yes, you have to. All campers sleep in tents.' },
  { k: 'LIFE JACKET', t: 'Give the most important rule for the lake. Use must.', ex: 'You must wear a life jacket in the boat.' },
  { k: 'PHONE', t: 'A camper wants to use the phone all day. Say a rule with mustn’t.', ex: 'You mustn’t use your phone at dinner.' },
  { k: 'UNIFORM', t: 'Say something campers don’t have to do.', ex: 'You don’t have to wear a uniform. Wear what you want!' },
  { k: 'HOMESICK', t: 'A camper misses home. Give two pieces of advice.', ex: 'You should call your parents tonight. You shouldn’t stay alone.' },
  { k: 'DINNER', t: 'Ask the cook a polite question with have to.', ex: 'Do we have to wash our plates?' },
  { k: 'FIRE', t: 'Rules for the campfire: one must, one mustn’t.', ex: 'You must stay with a leader. You mustn’t play with the fire.' },
  { k: 'YESTERDAY', t: 'Tell a camper what you had to do yesterday to prepare the camp.', ex: 'Yesterday I had to clean all the tents!' },
  { k: 'RAIN', t: 'It’s raining. Give advice with should.', ex: 'You should wear your raincoat and stay inside.' },
  { k: 'NIGHT', t: 'Bedtime rules. Use have to and don’t have to.', ex: 'You have to be in your tent at ten. You don’t have to sleep right away.' },
  { k: 'SECRET', t: 'Another leader breaks a rule! What should he do?', ex: 'He shouldn’t swim at night. He should say sorry.' },
  { k: 'FINISH', t: 'Say goodnight to the campers with one last piece of advice.', ex: 'Good night, everybody! You should sleep well: tomorrow we have to get up at seven.' }] };
var ERROS = { tipo: 'nota', rot: 'THE RULES ON THE CAMP DOOR · WRITTEN BY A NEW LEADER', partes: ['Campers ', ['must to wear', 'must wear', 'must + verb, no to.'], ' a life jacket in the boat. You ', ['don’t must', 'mustn’t', 'Not allowed: mustn’t.'], ' swim at night. Every camper ', ['have to', 'has to', 'he / she / every camper: has to.'], ' wash his plate. You ', ['should to', 'should', 'should + verb, no to.'], ' bring a raincoat. Yesterday we ', ['must clean', 'had to clean', 'must has no past: had to.'], ' all the tents. You ', ['haven’t to', 'don’t have to', 'Not necessary: don’t have to.'], ' wear a uniform.'] };
