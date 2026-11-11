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
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'II · Now or Planned?', t: 'Two messages to your host family.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new moments.' },
  { k: 'transforma', est: 'f', min: 9, img: 'capa', rot: 'III · Yes and No, Politely', t: 'Make it kind and clear.', p: 'Read the idea and the clue. Say it the polite way.' },
  { k: 'escolha', est: 'o', min: 8, img: 'conversa', rot: 'IV · Family A or Family B?', t: 'Two families. Which one, and why?', p: 'Choose. Give two reasons. There is no wrong answer.' },
  { k: 'cartao', est: 'w', min: 10, img: 'capa', rot: 'V · Your Match Message', t: 'Say yes and plan the arrival.', p: 'Five lines: yes, thanks, feelings, plans, questions.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'VI · I Can', t: 'Lesson 12: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
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

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de transforma.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'I’ll or I’m going to? Two messages to the family.',
  a: { t: 'Decided now', falas: [['Host mom', 'Can you call us tomorrow?'], ['You', 'Of course! I<mark>’ll</mark> call at six.']], d: 'You decide as you speak. That is <b>I’ll</b>.' },
  b: { t: 'Already planned', falas: [['Host mom', 'When do you arrive?'], ['You', 'I<mark>’m going to</mark> arrive on March 10. The agency booked my flight.']], d: 'The plan is already made. That is <b>I’m going to</b>.' },
  pergunta: 'Same future, two forms. What is different in the situation?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'The host dad writes: “Could you send a photo of your room?” You decide now:', o: ['I’ll send it tonight.', 'I’m going to send it tonight.'], c: 0, d: 'A quick yes, right now.' },
    { p: 'Your calendar says: orientation on March 12. You tell the family:', o: ['I’ll go to orientation on March 12.', 'I’m going to go to orientation on March 12.'], c: 1, d: 'The date is already in your calendar.' },
    { p: 'The host mom asks: “Can you take a call on Saturday?” You say yes:', o: ['Sure, I’ll be there.', 'Sure, I’m going to be there.'], c: 0, d: 'You decide when she asks.' },
    { p: 'You bought your ticket yesterday. The family asks about the flight:', o: ['I’ll fly on March 10.', 'I’m going to fly on March 10.'], c: 1, d: 'The ticket is bought: the plan is made.' }
  ],
  nota: 'One test: is the plan already made, or do you decide as you speak? Already made: <b>I’m going to</b>. Decided now: <b>I’ll</b>.',
  uso: { p: 'Your turn. One plan you already have for your arrival, and one quick promise to the family.', molde: ['I’m going to …', 'I’ll …'], ex: 'I’m going to arrive on March 10. I’ll send you a message when I land.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_isso', GX_EXPLICA); };
