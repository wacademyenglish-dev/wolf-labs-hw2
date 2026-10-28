/* ============================================================
   AU PAIR · MODULE 3 · LESSON 11 OF 24 · THE CONSULATE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   A entrevista do visto J-1: respostas curtas e verdadeiras, os documentos na mão. Nunca ensinar a esconder ou mentir:
   se o plano verdadeiro não é o de intercâmbio, a conversa é com a agência antes. Vídeo oficial: Bureau of Educational
   and Cultural Affairs (Departamento de Estado), "J-1 Visa Exchange Visitor Program" (1:39). Áudios: edge-tts (oficial).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 11, kick: 'AU PAIR · MODULE 3 · LESSON 11 OF 24', titulo: ['The', 'Consulate'], tema: 'Short, true answers', placa: 'LESSON 11',
  lugarConversa: 'THE WAITING ROOM', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'The visa interview is short. The officer asks simple questions and wants clear, true answers. Today you learn what the J-1 is and practice with an officer’s voice.',
  chips: ['What the J-1 is', 'Good or risky answer?', 'The officer asks'], botao: 'Start the lesson',
  nota: 'Short, true, calm. Have your documents ready, and never memorize a speech. The interview can be in English or in Portuguese: be ready for both.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · What the J-1 Is', t: 'The U.S. government explains the program.', p: 'First one question, then the video, then more questions.' },
  { k: 'separa', est: 'f', min: 10, img: 'capa', rot: 'II · Good or Risky?', t: 'Eight answers. Which ones help you?', p: 'Choose the side and say why.' },
  { k: 'prova', est: 'o', min: 14, img: 'conversa', rot: 'III · The Officer Asks', t: 'Five questions. Short and true.', p: 'Play the question, start the clock, answer in about 20 seconds.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 11: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'UtmzBXmOxfA', titulo: 'J-1 Visa Exchange Visitor Program', fonte: 'U.S. DEPARTMENT OF STATE (ECA) · 2 MIN',
  antes: { q: 'Why does the U.S. government have exchange programs? Guess.', h: 'To help people from different countries understand each other.' },
  ouvir: 'Listen: How many visitors come each year? How many types of program are there?',
  perguntas: [
    { q: 'How many exchange visitors come each year?', h: 'Nearly 280,000.' },
    { q: 'How many types of exchange programs are there?', h: '13 (au pair is one of them).' },
    { q: 'Who are the exchange visitors? Name three groups.', h: 'Students, teachers, young professionals, scholars (and au pairs).' },
    { q: 'What is the main goal of the program?', h: 'Mutual understanding and trust between Americans and people from other countries.' },
    { q: 'What do visitors do after the program?', h: 'They return home, “do great things” and keep in touch with their American friends.' }],
  fecho: 'J-1 = an EXCHANGE: you learn, you share your culture, and you go back home.' };

var SEPARA = { rot: 'GOOD OR RISKY?', a: 'GOOD ANSWER', b: 'RISKY ANSWER', fim: 'Short, true and specific. If something in your real plan doesn’t fit the program, talk to your agency BEFORE the interview.', itens: [
  ['“I’m going as an au pair on the J-1 program, with my agency.”', 'a', 'Clear and true: the purpose in one sentence.'],
  ['“I don’t know. My agency knows everything.”', 'b', 'You must know your own plan: the family, the city, the program.'],
  ['“I’ll live with the Parker family in Illinois and take care of their two kids.”', 'a', 'Specific: who, where, what.'],
  ['A long speech you memorized at home.', 'b', 'Officers notice memorized speeches. Short, natural answers are better.'],
  ['“I’m going to take six credits at a community college.”', 'a', 'The education part is part of the program. Good to know it.'],
  ['Saying you have experience with babies when you don’t.', 'b', 'Never lie. It can cost your visa, and later, a child’s safety.'],
  ['“Here are my passport and my DS-2019.”', 'a', 'Documents ready, in your hand, in order.'],
  ['“Actually, I want to stay in the U.S. forever.”', 'b', 'The J-1 is an exchange program. If this is your real plan, talk to your agency first. Never lie to the consulate.']] };

var PROVA = { rot: 'THE OFFICER ASKS', tarefas: [
  { k: 'QUESTION 1', tipo: 'fala', seg: 20, audio: 'cs1.mp3', ouve: 'Good morning. What is the purpose of your trip to the United States?', enun: 'Listen to the officer. Answer in about 20 seconds.',
    criterios: ['Greeted the officer', 'Said the purpose in one sentence', 'Mentioned the program (J-1, au pair)', 'Calm and clear'],
    modelo: 'Good morning. I’m going to the United States as an au pair, on the J-1 exchange program.' },
  { k: 'QUESTION 2', tipo: 'fala', seg: 20, audio: 'cs2.mp3', ouve: 'Which sponsor organization are you going with?', enun: 'Listen. Answer in about 20 seconds.',
    criterios: ['Said the name of the agency', 'Short answer', 'No hesitation'],
    modelo: 'I’m going with BrightPath Au Pair. (In real life: the name of YOUR agency.)' },
  { k: 'QUESTION 3', tipo: 'fala', seg: 20, audio: 'cs3.mp3', ouve: 'Where will you live, and what will you do there?', enun: 'Listen. Answer in about 20 seconds.',
    criterios: ['Said the family and the state', 'Said the main duties', 'Mentioned the classes'],
    modelo: 'I’ll live with the Parker family in Illinois. I’ll take care of their two children, and I’ll take classes at a local college.' },
  { k: 'QUESTION 4', tipo: 'fala', seg: 20, audio: 'cs4.mp3', ouve: 'Have you ever traveled outside Brazil?', enun: 'Listen. Answer in about 20 seconds.',
    criterios: ['Yes, I have / No, I haven’t', 'One detail (where, when)', 'True answer'],
    modelo: 'Yes, I have. I went to Argentina with my family in 2022. (Or: No, I haven’t. This will be my first trip abroad.)' },
  { k: 'QUESTION 5', tipo: 'fala', seg: 20, audio: 'cs5.mp3', ouve: 'What are your plans after the program?', enun: 'Listen. Answer in about 20 seconds.',
    criterios: ['A true plan', 'Specific (study, work, family)', 'Short'],
    modelo: 'I plan to go back to Brazil and finish my degree in education. I want to work with children. (Your answer must be YOUR true plan.)' }] };

var PODE = [
  'I can explain what the J-1 exchange program is.',
  'I can give short, true, specific answers.',
  'I can say my purpose, my agency, my family and my plans.',
  'I can keep my documents ready and stay calm.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 11: video · separa · prova (áudio) (os dados estão no topo do aula.js) */
