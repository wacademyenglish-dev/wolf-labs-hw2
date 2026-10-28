/* ============================================================
   AU PAIR · MODULE 1 · LESSON 2 OF 24 · DEAR HOST FAMILY · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   A carta para a família: pular a apresentação óbvia, algo único, a experiência com crianças, por que os EUA.
   Conectivos: and, because, so. Vídeo: Cultural Care, "Profile tips 3: Your host family letter" (1:04),
   no lugar do vídeo do plano, que saiu do ar (conferido em 15/10).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 2, kick: 'AU PAIR · MODULE 1 · LESSON 2 OF 24', titulo: ['Dear Host', 'Family'], tema: 'The letter that makes them remember you', placa: 'LESSON 02',
  lugarConversa: 'THE KITCHEN TABLE', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Your letter is how the family meets you. Today you learn what to write in it, and how to join ideas with and, because and so.',
  chips: ['Tips from an agency', 'and · because · so', 'Your letter'], botao: 'Start the lesson',
  nota: 'Families remember details: the cake you bake, the song you sing, the game you invent.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · What Families Want', t: 'An agency’s tips for your letter.', p: 'First one question, then the video, then more questions.' },
  { k: 'transforma', est: 'f', min: 9, img: 'capa', rot: 'II · Join Your Ideas', t: 'Two short sentences. Make one.', p: 'Read the sentences and the clue. Say them as one sentence.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'cartao', est: 'w', min: 12, img: 'capa', rot: 'IV · Your Letter', t: 'Write your letter.', p: 'Six lines. One unique detail. One memory with children.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'ln-Q__22LeQ', titulo: 'Profile tips 3: Your host family letter', fonte: 'CULTURAL CARE AU PAIR · 1 MIN',
  antes: { q: 'Imagine you are a host mom. What do you want to read in a letter from an au pair?', h: 'Who she is, her experience with kids, why she wants to come, something special about her.' },
  ouvir: 'Listen: What should you skip? What should you write about?',
  perguntas: [
    { q: 'What does the video say to skip? Why?', h: 'The usual introduction (name, age, city): families already know it from the profile.' },
    { q: 'What “unique” things does Hannah suggest?', h: 'Handstands, drawing little stick men, a great chocolate cake, braiding hair, soccer ball tricks.' },
    { q: 'Why write something unique?', h: 'So the family remembers you.' },
    { q: 'What questions about childcare should your letter answer?', h: 'What have you done? What do you love about caring for kids? Why the USA? A good memory? What did you learn?' }],
  fecho: 'Skip the obvious. Be specific. Talk about the kids.' };

var TRANSFORMA = { rot: 'JOIN YOUR IDEAS', fim: 'and adds · because gives a reason · so gives a result.', itens: [
  { de: 'I love children. I love outdoor games.', pista: 'and', para: 'I love children and outdoor games.' },
  { de: 'I want to be an au pair. I want to know a new culture.', pista: 'because', para: 'I want to be an au pair because I want to know a new culture.' },
  { de: 'My cousins are little. I babysit them every weekend.', pista: 'so', para: 'My cousins are little, so I babysit them every weekend.' },
  { de: 'I make a great chocolate cake. I love baking with kids.', pista: 'and', para: 'I make a great chocolate cake, and I love baking with kids.' },
  { de: 'I can drive. I can take the kids to school.', pista: 'so', para: 'I can drive, so I can take the kids to school.' },
  { de: 'I’m a little nervous. It’s my first time abroad.', pista: 'because', para: 'I’m a little nervous because it’s my first time abroad.' }] };

var ORDEM = { rot: 'BEATRIZ’S LETTER', pede: 'Tap the five parts in order: greeting, something special, kids, why the USA, goodbye.',
  passos: ['Dear Host Family,', 'Let me tell you something special about me: I can braid hair in ten different ways!', 'I love working with kids. I helped at my aunt’s daycare for two years, so I know how to keep little ones busy and happy.', 'I want to come to the USA because I want to grow, improve my English and share Brazilian culture with you.', 'I can’t wait to meet you. With love, Beatriz'],
  chips: ['Dear Host Family,', 'Let me tell you…', 'I love…', 'because…', 'I can’t wait to meet you.'],
  modelo: 'Dear Host Family, let me tell you something special about me: I can braid hair in ten different ways! I love working with kids… I want to come to the USA because… I can’t wait to meet you. With love, Beatriz.' };

var CARTAO = { ph: 'Dear Host Family,\nSomething special about me: …\nWith children, I …\nMy best memory with kids is …\nI want to come to the USA because …\nI can’t wait to meet you! With love, …', rot: 'My letter',
  chips: ['Dear Host Family,', 'Something special about me:', 'I love … and …', 'because ', ', so ', 'My best memory with kids is ', 'I can’t wait to meet you!', 'With love,'],
  perg: ['YOUR LETTER', 'Six lines. Skip the obvious. One special detail. One memory with kids.'],
  exemploRot: 'THE SIX PARTS', exemplo: [['GREETING', 'Dear Host Family,'], ['SPECIAL', 'something they will remember'], ['KIDS', 'what you did with children'], ['MEMORY', 'one moment, one detail'], ['WHY', 'because…'], ['GOODBYE', 'I can’t wait to meet you!']],
  modelo: 'Dear Host Family,<br>Something special about me: I make the best brigadeiro in my neighborhood, and kids love to help me!<br>With children, I am patient and creative. I babysit my two cousins every weekend, so I know how to make bedtime fun.<br>My best memory with kids is a picnic we had in the living room on a rainy day.<br>I want to come to the USA because I want to grow and share my culture with you.<br>I can’t wait to meet you! With love, Ana' };

var PODE = [
  'I can say what goes in a letter to a host family.',
  'I can write something unique about me.',
  'I can join ideas with and, because and so.',
  'I can write a short letter to a host family.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 02: video · transforma · ordem · cartao (os dados estão no topo do aula.js) */
