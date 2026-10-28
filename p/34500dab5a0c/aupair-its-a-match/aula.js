/* ============================================================
   AU PAIR · MODULE 3 · LESSON 12 OF 24 · MATCH! · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   Responder às famílias na plataforma da agência: aceitar, recusar com educação (em até 24 h), agradecer e combinar
   a chegada com will / going to. Vídeo: Cultural Care, "Matching tips 1: How to manage your connections" (0:48).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 12, kick: 'AU PAIR · MODULE 3 · LESSON 12 OF 24', titulo: ['It’s a', 'Match!'], tema: 'Say yes, say no, plan the arrival', placa: 'LESSON 12',
  lugarConversa: 'COUNTING THE DAYS', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Families send you messages. Some you love, some are not for you. Today you learn to answer fast and kindly, to say yes, and to plan your arrival.',
  chips: ['Matching tips', 'Yes and no, politely', 'Your match message'], botao: 'Start the lesson',
  nota: 'A fast, kind “no” is better than silence. Families remember how you made them feel.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 6, img: 'conversa', rot: 'I · Matching Tips', t: 'Three tips in 48 seconds.', p: 'One question before, then the video, then the questions.' },
  { k: 'transforma', est: 'f', min: 9, img: 'capa', rot: 'II · Yes and No, Politely', t: 'Make it kind and clear.', p: 'Read the idea and the clue. Say it the polite way.' },
  { k: 'escolha', est: 'o', min: 8, img: 'conversa', rot: 'III · Family A or Family B?', t: 'Two families. Which one, and why?', p: 'Choose. Give two reasons. There is no wrong answer.' },
  { k: 'cartao', est: 'w', min: 10, img: 'capa', rot: 'IV · Your Match Message', t: 'Say yes and plan the arrival.', p: 'Five lines: yes, thanks, feelings, plans, questions.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 12: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'fniMzo8IVRA', titulo: 'Matching tips 1: How to manage your connections as an au pair', fonte: 'CULTURAL CARE AU PAIR · 1 MIN',
  antes: { q: 'A family sends you a message, but you are not interested. What do you do?', h: 'Answer anyway, kindly and quickly.' },
  ouvir: 'Listen: How often should you log in? How fast should you answer?',
  perguntas: [
    { q: 'How often should you log in?', h: 'Every single day, so you don’t miss a family.' },
    { q: 'How fast should you answer a family?', h: 'Within 24 hours. Even if it’s a no.' },
    { q: 'What does “think outside the box” mean here?', h: 'Be open-minded about location, number of kids, etc.' }],
  fecho: 'Log in daily, answer in 24 hours, keep an open mind.' };

var TRANSFORMA = { rot: 'YES AND NO, POLITELY', fim: 'Kind, clear and fast: that is how a professional answers.', itens: [
  { de: 'No. Not interested.', pista: 'Thank you so much…, but…', para: 'Thank you so much for your message, but I don’t think we are the right match. I wish you the best!' },
  { de: 'Three kids is too many for me.', pista: 'I’m looking for…', para: 'I’m looking for a family with one or two children, so I don’t think I’m the right au pair for you.' },
  { de: 'Yes! I want you!', pista: 'I would love to…', para: 'I would love to be your au pair! Thank you for choosing me.' },
  { de: 'I need time to think.', pista: 'Could I have…?', para: 'Thank you! Could I have until Friday to think about it?' },
  { de: 'When do I arrive?', pista: 'When are you going to…?', para: 'When are you going to need me to arrive?' },
  { de: 'I arrive on the 10th.', pista: 'I’m going to…', para: 'I’m going to arrive on March 10th, after orientation.' }] };

var ESCOLHA = [
  { a: 'A family in a big city, two kids, no car needed', b: 'A family in a small town, one baby, you drive every day', chips: ['I’d choose… because…', 'Another reason is…', 'On the other hand,…'], ex: 'I’d choose the big city, because I don’t feel confident driving every day yet. Another reason is the public transportation for my free time.' },
  { a: 'A family that travels a lot', b: 'A family with a calm routine at home', chips: ['I’d prefer… because…', 'I think…'], ex: 'I’d prefer the calm routine, because I want time for my classes and to make friends.' },
  { a: 'A first-time host family', b: 'A family that has had five au pairs', chips: ['I’d choose… because…', 'I would ask them…'], ex: 'I’d choose the experienced family, because they know the program. But I would ask them why the au pairs left.' },
  { a: 'Twins aged 8', b: 'Three kids aged 2, 5 and 10', chips: ['I’d go for… because…', 'It depends on…'], ex: 'I’d go for the twins, because I have more experience with school-age kids.' }];
var ESCOLHA_FIM = 'There is no wrong family on paper: the right one fits YOUR experience and YOUR goals.';

var CARTAO = { ph: 'Hi, Parker family!\nI’m so happy to say yes…\nThank you for…\nI’m going to…\nCould you tell me…?', rot: 'My match message',
  chips: ['I would love to', 'Thank you so much for', 'I’m so excited', 'I’m going to', 'I will', 'Could you tell me', 'See you soon!'],
  perg: ['YOUR MATCH MESSAGE', 'Five lines: yes, thanks, feelings, plans (going to / will), one question.'],
  exemploRot: 'THE FIVE LINES', exemplo: [['YES', 'I would love to be your au pair!'], ['THANKS', 'Thank you for choosing me.'], ['FEELINGS', 'I’m so excited to meet Emma and Leo.'], ['PLANS', 'I’m going to arrive on… I will…'], ['QUESTION', 'Could you tell me…?']],
  modelo: 'Hi, Parker family!<br>I would love to be your au pair! Thank you so much for choosing me.<br>I’m so excited to meet Emma and Leo.<br>I’m going to arrive on March 10th, after orientation, and I will bring a Brazilian game for the kids.<br>Could you tell me what the weather is like in March? See you soon!' };

var PODE = [
  'I can say no to a family, kindly and in 24 hours.',
  'I can say yes and thank a family.',
  'I can explain my choice with two reasons.',
  'I can plan my arrival with going to and will.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 12: video · transforma · escolha · cartao (os dados estão no topo do aula.js) */
