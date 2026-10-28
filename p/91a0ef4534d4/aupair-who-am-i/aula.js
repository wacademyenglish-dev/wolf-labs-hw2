/* ============================================================
   AU PAIR · MODULE 1 · LESSON 1 OF 24 · WHO AM I? · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1), 24 aulas em 6 módulos.
   Aula 1: apresentar-se para uma família: present simple e can (I love kids, I can drive).
   Vídeo: AuPairCare, "What is an Au Pair | Meet Laura from Spain" (2:12), legenda conferida em 15/10.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 1, kick: 'AU PAIR · MODULE 1 · LESSON 1 OF 24', titulo: ['Who', 'Am I?'], tema: 'Introduce yourself to a family', placa: 'LESSON 01',
  lugarConversa: 'THE FAMILY LIVING ROOM', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'A family in the United States is looking for you, but they don’t know you yet. Today you learn to say who you are, what you love and what you can do.',
  chips: ['Meet Laura, a real au pair', 'I love… · I can…', 'Your first lines'], botao: 'Start the lesson',
  nota: 'Families read hundreds of profiles. Short, true and warm is better than long and perfect.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 10, img: 'conversa', rot: 'I · Meet Laura', t: 'A real au pair tells her story.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'II · Say It Right', t: 'Small words, big difference.', p: 'Compare A and B. Which one is right? Why?' },
  { k: 'conversa', est: 'o', min: 9, img: 'conversa', rot: 'III · Tell Me About You', t: 'A host mom asks. You answer.', p: 'Answer, then ask the question back: “And you?”' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'IV · Your First Lines', t: 'Write five lines about you.', p: 'Name, age, where you live, what you love, what you can do.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'oMgQ1e0kEz8', titulo: 'What is an Au Pair | Meet Laura from Spain', fonte: 'AUPAIRCARE · 2 MIN',
  antes: { q: 'What does an au pair do? Say three things.', h: 'She lives with a family in another country, takes care of the children, and learns the language and the culture.' },
  ouvir: 'Listen: Where is Laura from? How did she feel before she came?',
  perguntas: [
    { q: 'Where is Laura from? How long was she an au pair?', h: 'She is from Spain. She was an au pair for two years, from 2012 to 2014.' },
    { q: 'How did she feel before she came? Why?', h: 'Nervous: a new country and a new language.' },
    { q: 'What did the family do when she arrived?', h: 'A big “Welcome Laura” sign, flowers and gifts.' },
    { q: 'What is her best memory?', h: 'Fishing for salmon with the family, on their boat.' },
    { q: 'What is her advice for you?', h: 'It’s normal to be nervous, but it’s going to be an amazing adventure.' }],
  fecho: 'Laura was nervous too. Today you take the first step.' };

var DESCOBRE = {
  pares: [
    { a: 'I {am} 22 years old.', b: 'I {have} 22 years.', q: 'Which one is right in English?', r: '<b>I am</b> 22 (years old). In Portuguese we “have” years; in English we ARE.' },
    { a: 'I {can drive}.', b: 'I {can to drive}.', q: 'What comes after “can”?', r: '<b>can + verb</b>, no “to”: I can drive, I can cook, I can swim.' },
    { a: 'My sister {loves} kids.', b: 'My sister {love} kids.', q: 'Why the -s in A?', r: 'He, she, it: <b>-s</b>. She loves, he plays, it works.' },
    { a: 'I {love playing} with kids.', b: 'I {love play} with kids.', q: 'What form comes after “love”?', r: '<b>love + -ing</b> (or love + to): I love playing / I love to play.' }],
  regra: [['AGE', 'I am 22 (years old)'], ['ABILITY', 'I can + verb: I can drive'], ['HE / SHE', 'she loves · he works'], ['WHAT YOU LOVE', 'I love + -ing: I love reading']],
  armas: [['AGE', 'I have 22 years.', 'I am 22 years old.', 'be, not have'], ['CAN', 'I can to cook.', 'I can cook.', 'can + verb'], ['-S', 'My mom work in a school.', 'My mom works in a school.', 'she → -s'], ['LOVE', 'I love play.', 'I love playing.', 'love + -ing']] };

var CONVERSA = [
  { q: 'Hi! It’s so nice to meet you. Can you tell us a little about yourself?', f: 'What’s your name? How old are you?', voce: ['My name is…', 'I’m … years old.', 'I’m from…'], ex: 'Hi! My name is Ana, I’m 22 years old, and I’m from Curitiba, in the south of Brazil.' },
  { q: 'Who do you live with?', f: 'Do you live with your family?', voce: ['I live with…', 'I have … brother(s) / sister(s).'], ex: 'I live with my parents and my little brother, Pedro. He is eight.' },
  { q: 'What do you like doing in your free time?', f: 'What are your hobbies?', voce: ['I love…ing', 'I really like…', 'On weekends, I…'], ex: 'I love cooking and dancing. On weekends, I go to the park with my brother.' },
  { q: 'Can you drive? Can you swim?', f: 'Do you drive?', voce: ['Yes, I can.', 'No, I can’t, but…', 'I can… very well.'], ex: 'Yes, I can drive. I drive every day. I can swim too, but not very well!' },
  { q: 'Why do you want to be an au pair?', f: 'Why the United States?', voce: ['Because I love…', 'I want to…', 'It’s my dream to…'], ex: 'Because I love children, and I want to improve my English and know a new culture. It’s my dream.' }];

var CARTAO = { ph: 'My name is …\nI’m … years old and I’m from …\nI live with …\nI love …ing and …\nI can …', rot: 'About me',
  chips: ['My name is ', 'I’m ', 'years old', 'I’m from ', 'I live with ', 'I love ', 'I can ', 'I really like '],
  perg: ['YOUR FIRST LINES', 'Five short lines: name, age, home, what you love, what you can do.'],
  exemploRot: 'THE FIVE LINES', exemplo: [['WHO', 'My name is…'], ['AGE + HOME', 'I’m 22 and I’m from…'], ['FAMILY', 'I live with…'], ['LOVE', 'I love …ing'], ['CAN', 'I can drive / cook / swim']],
  modelo: 'My name is Ana. I’m 22 years old and I’m from Curitiba, Brazil.<br>I live with my parents and my little brother.<br>I love cooking, dancing and reading stories.<br>I can drive, I can swim, and I can make the best chocolate cake in the family!' };

var PODE = [
  'I can say my name, age and where I’m from.',
  'I can say who I live with.',
  'I can say what I love doing (I love + -ing).',
  'I can say what I can do (I can + verb).'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 01: video · descobre · conversa · cartao (os dados estão no topo do aula.js) */
