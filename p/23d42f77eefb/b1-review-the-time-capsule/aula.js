/* ============================================================
   REVIEW · B1 · UNIT 3 · THE TIME CAPSULE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: dado · tabuleiro · erros · cadeira · pode.
   Unidade 3 (Antes e depois): past perfect (had closed, had already started); was going to, kept,
   ended up; o futuro: going to, will, will be doing (future continuous).
   O tabuleiro: uma cápsula do tempo enterrada em 2006 pela escola é aberta hoje. Cada casa é um
   objeto lá de dentro, e no fim o aluno enterra uma cápsula nova para 2046.
   ============================================================ */
var REV = { nivel: 'B1', unidade: 3, titulo: ['The Time', 'Capsule'], tema: 'Before and after', placa: 'BURIED IN 2006', lugarConversa: 'THE OLD STATION', cor: '#7fc8b8', cor2: '#bfe5dc',
  sub: 'Unit 3 review. In 2006, a class buried a time capsule in the school garden. Today you open it. What had they hoped? What happened instead? And what will you be doing in 2046?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'II · Open the Capsule', t: 'Roll, move, take an object out.', p: 'Your teacher rolls the die. Do the task on your square, out loud.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'HAD DONE', tema: 'past perfect', t: 'You arrived late to something. What had already happened?', ex: 'When I arrived at the cinema, the movie had already started and my friends had eaten all the popcorn.', trap: 'The earlier action: had + participle.' },
  { k: 'THE BACKSTORY', tema: 'past perfect for the story behind', t: 'Tell a time you were very tired, angry or happy. Why? What had happened before?', ex: 'I was so tired because I hadn’t slept: the neighbors had had a party.', trap: '“I was tired because I didn’t sleep before” → I hadn’t slept.' },
  { k: 'WAS GOING TO', tema: 'was going to: plans that changed', t: 'Two plans you had that didn’t happen. What happened instead?', ex: 'I was going to study medicine, but I studied design. I was going to visit Peru, but I lost my passport.', trap: 'A plan in the past: was going to + verb.' },
  { k: 'ENDED UP', tema: 'kept + -ing, ended up + -ing', t: 'Something that kept going wrong, and how you ended up.', ex: 'My car kept breaking down, so I ended up selling it and buying a bike.', trap: 'kept / ended up + -ing: “ended up to sell” → ended up selling.' },
  { k: 'GOING TO / WILL', tema: 'going to (plan) or will (decision now, prediction)', t: 'One plan for next month, one decision right now, one prediction for the world.', ex: 'I’m going to paint my room. I’ll have some water, thanks! I think cars will fly one day.', trap: 'A plan already made: going to. Decided now: will.' },
  { k: 'THIS TIME NEXT YEAR', tema: 'future continuous: will be doing', t: 'This time tomorrow, next week and next year: what will you be doing?', ex: 'This time tomorrow I’ll be working. Next year I’ll be living in a new apartment.', trap: 'In progress in the future: will be + -ing.' }
];

var PODE = [
  'I can tell what had happened before: the show had already started.',
  'I can talk about plans that changed: I was going to…, but…',
  'I can use kept + -ing and ended up + -ing.',
  'I can choose going to (plan) or will (decision, prediction).',
  'I can say what I’ll be doing: this time next year I’ll be living in…'
];

/* MECÂNICAS VARIADAS */
/* B1 R3: dado · tabuleiro · erros · cadeira */
var TABULEIRO = { rot: 'THE 2006 CAPSULE', centro: 'Take each object out. What had they hoped?', casas: [
  { k: 'THE BOX', t: 'The box was under a tree. Say what had happened to it in twenty years.', ex: 'It had gone very rusty, and a root had grown around it!' },
  { k: 'A LETTER', t: 'A student wrote: “In 2026 I’ll be a famous singer.” Say what she was going to do.', ex: 'She was going to be a famous singer, but she ended up being a nurse.' },
  { k: 'A CAMERA', t: 'An old camera with photos inside. Nobody had seen them. Say it with “nobody had ever”.', ex: 'Nobody had ever seen these photos. They had stayed in the dark for twenty years.' },
  { k: 'A CASSETTE', t: 'A music cassette. Say what you used to listen to, then what kept happening to cassettes.', ex: 'Cassettes kept breaking. We ended up buying CDs.' },
  { k: 'A PREDICTION', t: 'A boy wrote: “In 2026, cars will fly.” Was he right? Make your own prediction for 2046.', ex: 'He was wrong! I think in 2046 robots will cook our dinner.' },
  { k: 'A PHONE', t: 'A 2006 phone. Before smartphones, what had you never done?', ex: 'I had never taken a photo with a phone before 2008!' },
  { k: 'THE TEACHER', t: 'The old teacher is here today. Ask her: “What will you be doing next year?”', ex: 'What will you be doing next year? — I’ll be traveling around Brazil!' },
  { k: 'A TICKET', t: 'A ticket for a concert in 2006. They were going to go, but… what happened?', ex: 'They were going to go, but it rained and the concert was cancelled.' },
  { k: 'A RECIPE', t: 'Grandma’s cake recipe. You decide to make it now. Use will.', ex: 'Great! I’ll make it this weekend. I’ll bring you some.' },
  { k: 'THE PLAN', t: 'Plan the party for the capsule. Say three things you’re going to do.', ex: 'We’re going to invite the old class, we’re going to show the photos, and we’re going to sing!' },
  { k: 'YOUR OBJECT', t: 'Choose one object of yours for a new capsule. Why?', ex: 'My phone. In 2046 people will laugh at it!' },
  { k: '2046', t: 'The new capsule opens in 2046. This time in 2046, what will you be doing?', ex: 'In 2046 I’ll be living near the sea, and I’ll be teaching my grandchildren English!' }] };
var ERROS = { tipo: 'nota', rot: 'A LETTER FROM THE CAPSULE · 2006', partes: ['Dear people of 2026, when I wrote this, I ', ['already finished', 'had already finished', 'Before another past action: had finished.'], ' school. I ', ['was go to', 'was going to', 'A past plan: was going to.'], ' study music, but my parents kept ', ['to say', 'saying', 'kept + -ing.'], ' no. Maybe I ended up ', ['to work', 'working', 'ended up + -ing.'], ' in a bank! I think in 2026 everybody ', ['will flying', 'will be flying', 'will be + -ing.'], ' to work. Wait, my phone is ringing. I ', ['am answering', 'will answer', 'A decision now: will.'], ' it. Goodbye, future!'] };
var CADEIRA = { itens: [
  { alvo: 'Ask me what I was going to be when I was a kid.', dica: 'What were you going to be when you were a kid?', resp: 'I was going to be an astronaut!' },
  { alvo: 'Ask me what I ended up doing.', dica: 'And what did you end up doing?', resp: 'I ended up teaching English.' },
  { alvo: 'Ask me about a time I arrived too late.', dica: 'Have you ever arrived when everything had finished?', resp: 'Yes! The party had ended.' },
  { alvo: 'Ask me about my plans for next year.', dica: 'What are you going to do next year?', resp: 'I’m going to move house.' },
  { alvo: 'Ask me what I’ll be doing this time tomorrow.', dica: 'What will you be doing this time tomorrow?', resp: 'I’ll be teaching another class.' }] };
