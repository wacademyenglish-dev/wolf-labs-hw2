/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 4 · LESSON 10 OF 12 · MY CASE STUDY · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   Contar um projeto na entrevista: contexto, problema, objetivo, exploração, solução, resultado (passado + we / I).
   Vídeo femke.design (3:56–6:50). Projetos FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 10, kick: 'ENGLISH FOR DESIGNERS · MODULE 4 · LESSON 10 OF 12', titulo: ['My Case', 'Study'], tema: 'Telling the story of a project in a portfolio review', placa: 'LESSON 10',
  lugarConversa: 'THE PORTFOLIO REVIEW', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: 'A job interview, a design team on the call, and “Walk us through one of your projects.” Today you learn the shape of a case study and tell yours as a story.',
  chips: ['From problem to result', 'Put the story in order', 'Present your project'], botao: 'Start the lesson',
  nota: 'Say “I” for what you did and “we” for what the team did. Interviewers want to know YOUR part.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · The Case Study Section', t: 'A design lead explains what interviewers want to see.', p: 'One question before, then the video, then the questions.' },
  { k: 'ordem', est: 'f', min: 9, img: 'capa', rot: 'II · Put the Story in Order', t: 'A case study in six steps.', p: 'Tap the six parts in the right order.' },
  { k: 'prova', est: 'o', min: 18, img: 'conversa', rot: 'III · Present Your Project', t: 'Two minutes, one project.', p: 'Read the card (or use your own project), prepare, start the clock, present.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 10: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'w-PoV_sIWos', titulo: 'Presenting Portfolio Projects in a Design Interview', fonte: 'FEMKE.DESIGN · 3:56–6:50', inicio: 236, fim: 410,
  antes: { q: 'In an interview, what do you say first about a project?', h: 'The context: what it was, who it was for, and the problem.' },
  ouvir: 'Listen: What parts should a case study presentation have?',
  perguntas: [
    { q: 'How is the presentation different from the case study on your website?', h: 'Less text, more visuals: show your work and talk about it.' },
    { q: 'What should you always start with?', h: 'The context, the problem and the goal, at a high level.' },
    { q: 'What does she want to see in the explorations part?', h: 'The messy process: explorations, refinement, collaboration, research.' },
    { q: 'Besides the “happy path”, what else impresses her?', h: 'Sad paths, edge cases and error states: it shows you see the big picture.' },
    { q: 'Why talk about handoff?', h: 'Engineers may be in the room; they want to know how you work with them.' }],
  fecho: 'Context, problem, goal → explorations → final design → how it solves the problem → results or next steps.' };

var ORDEM = { rot: 'A CASE STUDY · A LIBRARY APP (FICTIONAL)', pede: 'Tap the six parts in order.',
  passos: [
    'This project was for a city library. I was the only designer, working with two developers.',
    'Members were missing book reservations, because the app only sent emails, and nobody read them.',
    'Our goal was to cut missed reservations by half in three months.',
    'I interviewed eight members and tested three ideas: text messages, a calendar button and push notifications.',
    'We launched push notifications with a one-tap “Pick up tomorrow” option.',
    'Missed reservations fell by 60%, and the library now wants to use the same pattern for events.'],
  chips: ['Context', 'Problem', 'Goal', 'Process', 'Solution', 'Result'],
  modelo: 'Context (who, my role) → problem (with the cause) → goal (a number if possible) → process (research, options) → solution → result (a number) or next steps.' };

var PROVA = { rot: 'PRESENT YOUR PROJECT', tarefas: [
  { k: 'PROJECT · YOUR OWN OR THIS ONE', tipo: 'fala', prep: 60, seg: 120, enun: 'Use a project of your own. If you don’t have one, use this card.',
    texto: '<b>A rebrand for a family bakery (fictional).</b> Your role: designer, alone, with the owner. Problem: young people thought the bakery was “for old people”; sales were falling. Goal: attract customers under 35. Process: visited three competitors, interviewed ten customers, tested two logo directions. Solution: a warmer, hand-drawn logo, new packaging and an Instagram template. Result: 25% more customers under 35 in four months.',
    chips: ['This project was for…', 'My role was…', 'The problem was that…', 'Our goal was to…', 'First, I… Then, we…', 'In the end,…', 'As a result,…', 'If I did it again, I would…'],
    criterios: ['Clear context and role (I / we)', 'Problem and goal before the solution', 'Showed the process, not only the result', 'Ended with a result or next step', 'Past tenses correct'],
    modelo: 'This project was for a family bakery, and I was the only designer, working directly with the owner. The problem was that young people thought the bakery was for older customers, and sales were falling. Our goal was to attract customers under 35. First, I visited three competitors and interviewed ten customers. Then, I tested two logo directions with them. In the end, we chose a warmer, hand-drawn logo, and I designed new packaging and an Instagram template. As a result, the bakery got 25% more customers under 35 in four months. If I did it again, I would test the packaging earlier.' }] };

var PODE = [
  'I can present a project in order: context, problem, goal, process, solution, result.',
  'I can say clearly what I did and what the team did.',
  'I can tell the story in the past and give results with numbers.',
  'I can present a project for two minutes in a portfolio review.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 10: video · ordem · prova (os dados estão no topo do aula.js) */
