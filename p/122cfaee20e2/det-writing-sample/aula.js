/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 14 OF 16 · WRITING SAMPLE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: no fim da prova, um tema, 30 segundos para preparar e 5 minutos para escrever. Não vale nota,
   mas o texto vai para as universidades. Chave: o registro (formal, sem gíria nem abreviação) e três partes claras.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 14, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 14 OF 16', titulo: ['Writing', 'Sample'], tema: 'Five minutes that universities read', placa: 'LESSON 14',
  lugarConversa: 'THE ADMISSIONS OFFICE', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'At the end of the test, you write for five minutes. No score, but universities read it. Today: the right register, a clear plan and a strong last sentence.',
  chips: ['The right register', 'Fix the text', 'Five minutes, real clock'], botao: 'Start the lesson',
  nota: 'Write like a future student, not like a text message: no “gonna”, no “u”, no “lol”. Be clear, polite and personal.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'I · The Right Register', t: 'A message to a friend, or a text for a university?', p: 'Compare A and B. Which one belongs in the Writing Sample? Why?' },
  { k: 'erros', est: 'f', min: 7, img: 'capa', rot: 'II · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'prova', est: 'w', min: 14, img: 'conversa', rot: 'III · The Real Thing', t: 'Thirty seconds to plan. Five minutes to write.', p: 'Plan three parts in your head. Then write. Save 30 seconds to check.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 14: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var DESCOBRE = {
  pares: [
    { a: 'I {am going to} apply for a master’s degree.', b: 'I’m {gonna} apply for a master’s.', q: 'Which one is right for a university?', r: 'A. <b>gonna</b> is spoken English. In writing: going to.' },
    { a: 'This program {would help me} work in renewable energy.', b: 'This program is {super cool}.', q: 'Which one shows a real reason?', r: 'A: a <b>specific reason</b>. “Super cool” is informal and says nothing.' },
    { a: '{In addition}, I have volunteered in my community.', b: '{Also also} I did volunteer stuff.', q: 'What makes A better?', r: 'A connector (<b>In addition</b>) and a precise verb. “Stuff” is too informal.' },
    { a: '{I believe} this experience prepared me well.', b: '{I think I think} this was good.', q: 'How can you vary “I think”?', r: '<b>I believe</b> · In my view · I am convinced that… Variety shows level.' }],
  regra: [['NO SPOKEN FORMS', 'gonna → going to · wanna → want to'], ['NO TEXTING', 'u → you · lol, btw, stuff → out'], ['SPECIFIC WORDS', 'super cool → useful, challenging, inspiring'], ['A CLEAR END', 'For these reasons, … · That is why I hope to…']],
  armas: [['SPOKEN FORM', 'I’m gonna study hard.', 'I am going to study hard.', 'written English'], ['TEXTING', 'Thank u for reading.', 'Thank you for reading.', 'never u'], ['VAGUE', 'The course is super cool.', 'The course is very practical.', 'a specific adjective'], ['I THINK', 'I think… I think…', 'I believe… / In my view…', 'vary']] };

var ERROS = { rot: 'A CANDIDATE’S WRITING SAMPLE', tipo: 'nota', partes: [
  'In the next five years, ', ['I’m gonna', 'I am going to', 'written English: going to'], ' finish my master’s degree in data science. ',
  ['This area is super cool', 'This area is growing fast', 'a specific reason, not “super cool”'], ', and companies in my country need people with these skills. ',
  ['Also also', 'In addition', 'one connector, formal'], ', I want to work with public health data, because ', ['u can', 'you can', 'never “u”'], ' save lives with good information. ',
  ['To make this happen I will study a lot of stuff', 'To achieve this, I will take courses in statistics and programming', 'precise words, no “stuff”'], '. ',
  ['Thats why', 'That is why', 'apostrophe, or the full form'], ' this program is my first choice.'] };

var PROVA = { rot: 'WRITING SAMPLE', tarefas: [
  { k: 'YOUR SAMPLE', tipo: 'escrita', prep: 30, seg: 300, enun: 'Plan for 30 seconds. Then write for 5 minutes.',
    texto: '<b>Describe a goal you have for the next five years. How do you plan to achieve it?</b>',
    dica: 'Three parts: the goal (and why) → the plan (two or three steps) → a strong last sentence. Aim for 100–150 words.',
    criterios: ['Formal register: no gonna, u, stuff', 'A clear goal and a reason', 'A plan with two or three steps', 'Varied connectors', 'A strong last sentence', '100 words or more'],
    modelo: 'In the next five years, I hope to become a sustainable architect. In my city, many buildings are hot in summer and waste a lot of energy, and I believe design can change this. To achieve my goal, I am going to complete a master’s degree abroad, where I can study new materials and techniques. In addition, I plan to work as an intern at a firm that builds affordable green housing. Finally, I would like to return to my country and share what I learned with local builders. For these reasons, this program is the first step of a plan I have been preparing for a long time.' }] };

var PODE = [
  'I can write in a formal register: no spoken forms, no texting.',
  'I can plan three parts in 30 seconds: goal, plan, last sentence.',
  'I can write 100 words or more in five minutes.',
  'I can end with a strong sentence: For these reasons, …'
];

/* MECÂNICAS VARIADAS */
/* DET 14: descobre · erros · prova (os dados estão no topo do aula.js) */
