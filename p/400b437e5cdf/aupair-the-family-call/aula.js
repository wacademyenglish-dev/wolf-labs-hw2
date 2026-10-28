/* ============================================================
   AU PAIR · MODULE 3 · LESSON 9 OF 24 · THE FAMILY CALL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   A entrevista por vídeo com a família: responder às perguntas da mãe (áudio gravado) e fazer as suas.
   Vídeo: Cultural Care, "Matching tips 2: What interview questions to ask a host family" (1:10), legenda conferida.
   Áudios: edge-tts, mãe americana (Jenny). Família FICTÍCIA (os Parkers).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 9, kick: 'AU PAIR · MODULE 3 · LESSON 9 OF 24', titulo: ['The Family', 'Call'], tema: 'Answer and ask in the interview', placa: 'LESSON 09',
  lugarConversa: 'THE PARKERS’ PORCH', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'A family wants to talk to you on video. They ask, you answer, and then YOU ask. Today you practice both sides with a host mom’s real voice.',
  chips: ['What to ask a family', 'The host mom asks', 'Now you ask'], botao: 'Start the lesson',
  nota: 'In an interview, both sides ask questions. You choose the family, too.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 7, img: 'conversa', rot: 'I · What to Ask', t: 'An au pair’s tips for the interview.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 8, img: 'capa', rot: 'II · Make a Good Question', t: 'Two questions. Which one is right?', p: 'Compare A and B. Then see the question patterns.' },
  { k: 'prova', est: 'o', min: 14, img: 'conversa', rot: 'III · The Host Mom Asks', t: 'Listen to Mrs. Parker. Answer.', p: 'Play the question, start the clock, answer in about 45 seconds.' },
  { k: 'cadeira', est: 'o', min: 9, img: 'capa', rot: 'IV · Now You Ask', t: 'Your teacher is Mrs. Parker. You ask.', p: 'Ask about the kids, a typical day and the family.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'RrHaYBpm3lA', titulo: 'Matching tips 2: What interview questions to ask a host family', fonte: 'CULTURAL CARE AU PAIR · 1 MIN',
  antes: { q: 'What would YOU like to ask a host family? Say two questions.', h: 'How old are the kids? What do they like? What is a typical day? Where do you live?' },
  ouvir: 'Listen: Which questions do they suggest?',
  perguntas: [
    { q: 'What relationship question do they suggest?', h: 'What kind of relationship would you like to have with the au pair?' },
    { q: 'What questions about the day and the hours?', h: 'What does a typical day with the kids look like? How many hours will I usually work per day?' },
    { q: 'What questions about the kids?', h: 'What are they interested in? What do they like doing: soccer, dancing, baking, Legos?' },
    { q: 'What question about the last au pair?', h: 'How was your experience with the last au pair? Or, if you are the first: what do you expect from me?' }],
  fecho: 'Ask about the kids first: it builds connection.' };

var DESCOBRE = {
  pares: [
    { a: 'What {do} the kids like?', b: 'What {the kids like}?', q: 'Which question is right?', r: 'A question in the present needs <b>do / does</b>: What do the kids like?' },
    { a: 'How old {are} your children?', b: 'How many years {have} your children?', q: 'How do we ask about age?', r: '<b>How old are…?</b> (be, not have).' },
    { a: 'What {does} a typical day {look} like?', b: 'How {is} a typical day?', q: 'Which one sounds natural in English?', r: '<b>What does a typical day look like?</b> is the natural question.' },
    { a: 'How many hours {will I} work per day?', b: 'How many hours {I will} work per day?', q: 'Where does “will” go?', r: 'In a question, <b>will</b> comes before the subject: will I work?' }],
  regra: [['PRESENT', 'What do they like? · What does she like?'], ['AGE', 'How old are they?'], ['A TYPICAL DAY', 'What does a typical day look like?'], ['FUTURE', 'How many hours will I work?']],
  armas: [['DO', 'What the kids like?', 'What do the kids like?', 'add do'], ['AGE', 'How many years has Emma?', 'How old is Emma?', 'how old + be'], ['DOES', 'What do she like?', 'What does she like?', 'she → does'], ['WILL', 'When I will start?', 'When will I start?', 'will + subject']] };

var PROVA = { rot: 'THE FAMILY CALL', tarefas: [
  { k: 'QUESTION 1', tipo: 'fala', seg: 45, audio: 'fc1.mp3', ouve: 'Hi! It’s so nice to finally talk to you. How are you feeling about becoming an au pair?', enun: 'Listen to Mrs. Parker. Answer in about 45 seconds.', dica: 'Be honest and warm: excited, a little nervous, ready.',
    criterios: ['Greeted her back (Nice to meet you too!)', 'Said how she feels, honestly', 'Gave a reason', 'Smiled and kept eye contact'],
    modelo: 'Hi! It’s so nice to meet you too. I’m really excited, and a little nervous, to be honest, because it’s my first time living abroad. But I’ve wanted this for a long time, and I feel ready.' },
  { k: 'QUESTION 2', tipo: 'fala', seg: 45, audio: 'fc2.mp3', ouve: 'Tell me about your experience with young children. What ages have you cared for?', enun: 'Listen. Answer in about 45 seconds.', dica: 'Ages, where, how long, one example.',
    criterios: ['Said the ages', 'Said where and how long', 'Used I have + participle', 'Gave one example'],
    modelo: 'I have taken care of children from two to ten years old. I helped at my aunt’s daycare for two years, and I babysit my cousins every weekend. For example, I put the little ones to sleep and help the older ones with homework.' },
  { k: 'QUESTION 3', tipo: 'fala', seg: 45, audio: 'fc3.mp3', ouve: 'Our kids are six and three. What would a fun afternoon with them look like for you?', enun: 'Listen. Answer in about 45 seconds.', dica: 'I would… First… Then… Ideas for BOTH ages.',
    criterios: ['Used I would…', 'Ideas for a 6-year-old AND a 3-year-old', 'An order: first, then…', 'Something safe and active'],
    modelo: 'I would take them to the park first, because kids need to run. Then we would make a snack together, something easy that the little one can help with. After that, I would read a story or do some painting with them before dinner.' },
  { k: 'QUESTION 4', tipo: 'fala', seg: 45, audio: 'fc4.mp3', ouve: 'How do you usually handle a child who doesn’t want to listen?', enun: 'Listen. Answer in about 45 seconds.', dica: 'Calm, clear, kind: get down to their level, give choices, follow the family’s rules.',
    criterios: ['A calm strategy (no shouting)', 'Gave an example', 'Mentioned the family’s rules', 'Kept a positive tone'],
    modelo: 'I stay calm and get down to the child’s level. I explain the rule in a simple way and give two choices, like “Do you want to put on your shoes or your jacket first?” If it doesn’t work, I follow the rules the parents prefer, because it’s important that we do the same thing.' }] };

var CADEIRA = { itens: [
  { alvo: 'Ask about the kids’ interests.', dica: 'What do the kids like doing?', resp: 'Emma loves dancing and Leo is crazy about dinosaurs!' },
  { alvo: 'Ask what a typical day looks like.', dica: 'What does a typical day look like?', resp: 'School drop-off at 8, Leo is home at noon, Emma at 3. Dinner at 6.' },
  { alvo: 'Ask how many hours you will usually work.', dica: 'How many hours will I usually work per day?', resp: 'About 8 on school days, and never more than 45 a week.' },
  { alvo: 'Ask about the last au pair.', dica: 'How was your experience with your last au pair?', resp: 'Wonderful! Her name was Sofia. She still visits us.' },
  { alvo: 'Ask about free time and the area.', dica: 'What is there to do in your area on weekends?', resp: 'There’s a lake, a mall, and Chicago is an hour away by train.' }] };

var PODE = [
  'I can answer a host family’s first questions with warmth and examples.',
  'I can say how I would spend an afternoon with kids (I would…).',
  'I can make good questions: What do…? How old are…? What does… look like?',
  'I can ask about the kids, a typical day and the hours.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 09: video · descobre · prova (áudio) · cadeira (os dados estão no topo do aula.js) */
