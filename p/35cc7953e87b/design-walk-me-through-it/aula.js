/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 2 · LESSON 4 OF 12 · WALK ME THROUGH IT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   Apresentar decisões: We chose… because…, so that…, The idea is to…, Yes, and…, Can you help me understand…?
   Vídeo Synthesis (3:41–5:43). Projeto FICTÍCIO (app de academia de bairro).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 4, kick: 'ENGLISH FOR DESIGNERS · MODULE 2 · LESSON 4 OF 12', titulo: ['Walk Me', 'Through It'], tema: 'Presenting design decisions and the reasons behind them', placa: 'LESSON 4',
  lugarConversa: 'THE REVIEW MEETING', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: 'Good design is half the job. The other half is explaining it. Today you learn to present every decision with a reason, and to answer opinions without starting a fight.',
  chips: ['Prepare for the people', 'We chose… so that…', 'Yes, and…'], botao: 'Start the lesson',
  nota: 'Every decision needs a why. “Because I like it” is not a reason; “so that users find the button faster” is.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · Before the Meeting', t: 'How to prepare and how to answer feedback.', p: 'One question before, then the video, then the questions.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · A Walkthrough', t: 'A UX designer presents three decisions.', p: 'Read it out loud like a presenter. Then answer the questions.' },
  { k: 'transforma', est: 'f', min: 12, img: 'conversa', rot: 'III · Decision + Reason', t: 'Say what you did and why.', p: 'Read the decision and the clue. Say one full sentence with the reason.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'dNHTZLW58jk', titulo: 'How to Present Design Decisions to Stakeholders', fonte: 'SYNTHESIS · 3:41–5:43', inicio: 221, fim: 343,
  antes: { q: 'Your manager says: “I don’t like the button there.” What do you say?', h: 'Ask why: Can you help me understand what doesn’t work for the user?' },
  ouvir: 'Listen: What should you do before the meeting, and what should you do during it?',
  perguntas: [
    { q: 'What should you write down before the meeting?', h: 'Your “why”: why this solution is better than doing nothing or doing something else.' },
    { q: 'Why remove the distractions, like placeholder text?', h: 'So the meeting stays on topic: people start reading the fake text out loud.' },
    { q: 'What is “the art of the pause”?', h: 'Let them talk, don’t interrupt, then wait two or three seconds before you answer.' },
    { q: 'What should the first word of your answer be?', h: '“Yes”: Yes, that’s an interesting perspective. It doesn’t mean you agree.' },
    { q: 'How do you move from opinion to facts?', h: 'Ask: “Can you help me understand why having the button there doesn’t work for the user?”' }],
  fecho: 'Prepare your why, know who is in the room, listen, pause, lead with yes, and move from “I like” to “it works for the user”.' };

var LEITURA = { rot: 'DESIGN REVIEW · THE FITNOOK APP (FICTIONAL)', tipo: 'fala',
  antes: { q: 'When you present a design, what do you say first?', h: 'The goal or the problem, then the decisions, then the reasons.' },
  texto: 'DESIGNER: Thanks, everyone. {Let me walk you through} the new booking screen.\nDESIGNER: {Our goal was to} make booking a class faster. In the old app, it took six taps.\nDESIGNER: First, {we moved} the “Book” button to the bottom of the screen, {so that} people can reach it with one thumb.\nDESIGNER: Second, {we chose} a calm green for available classes {because} red made people think the class was full.\nDESIGNER: Third, {we removed} the long class descriptions. {The idea is to} show only time, coach and level, and open details on tap.\nDESIGNER: {As a result}, booking now takes two taps. In our test, eight of ten users booked without help.\nDESIGNER: {Happy to hear your thoughts.}',
  perguntas: [
    { q: 'What was the goal of the new screen?', h: 'To make booking a class faster (it took six taps).' },
    { q: 'Why did they move the button?', h: 'So that people can reach it with one thumb.' },
    { q: 'Why green and not red?', h: 'Red made people think the class was full.' },
    { q: 'What was the result?', h: 'Two taps; eight of ten test users booked without help.' }],
  olha: 'The highlighted phrases are the skeleton of a walkthrough: Let me walk you through · Our goal was to · we moved / chose / removed · so that · because · The idea is to · As a result. Each decision comes with a reason.' };

var TRANSFORMA = { rot: 'DECISION + REASON', fim: 'We + past verb + because / so that / to. Every time.', itens: [
  { de: 'UX: bigger font on the checkout screen · older users', pista: 'We made… so that…', para: 'We made the font bigger on the checkout screen so that older users can read it easily.' },
  { de: 'GRAPHIC: dark blue for the bank logo · trust', pista: 'We chose… because…', para: 'We chose a dark blue for the logo because it feels stable and trustworthy.' },
  { de: 'INTERIORS: a sliding door · small apartment', pista: 'We used… to…', para: 'We used a sliding door to save space in a small apartment.' },
  { de: 'UX: removed two fields from the sign-up form · fewer people quit', pista: 'We removed… The idea is to…', para: 'We removed two fields from the sign-up form. The idea is to make fewer people give up.' },
  { de: 'GRAPHIC: a lot of white space on the poster · the date stands out', pista: 'We left… so that…', para: 'We left a lot of empty space on the poster so that the date stands out.' },
  { de: 'MANAGER: “I don’t like the green.”', pista: 'Yes, … Can you help me understand…?', para: 'Yes, I’m glad you brought that up. Can you help me understand what doesn’t work about the green for our users?' }] };

var PODE = [
  'I can walk people through a design: goal, decisions, result.',
  'I can explain each decision with because, so that or to.',
  'I can answer an opinion with “Yes, …” and a question.',
  'I can move the conversation from “I like” to “it works for the user”.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 04: video · leitura · transforma (os dados estão no topo do aula.js) */
