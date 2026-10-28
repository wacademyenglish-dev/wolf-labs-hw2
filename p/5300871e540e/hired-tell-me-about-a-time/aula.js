/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 2 · LESSON 4 OF 12 · TELL ME ABOUT A TIME · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   Perguntas comportamentais com STAR e narrative tenses (was …ing, had …ed, past simple).
   Vídeo Self Made Millennial (6:00–8:00). Histórias FICTÍCIAS como modelo.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 4, kick: 'WOLF HIRED · MODULE 2 · LESSON 4 OF 12', titulo: ['Tell Me About', 'a Time'], tema: 'Behavioral questions: telling a work story with STAR', placa: 'LESSON 4',
  lugarConversa: 'THE STORY TOOLBOX', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: '“Tell me about a time when you handled a difficult situation.” They don’t want an opinion, they want a story. Today you learn to tell it in four clear steps, with the right past tenses.',
  chips: ['A real STAR answer', 'Put the story in order', 'Two stories, two minutes'], botao: 'Start the lesson',
  nota: 'Most people stop after the action. The result is the part interviewers remember: always finish the story.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · Always Finish the Story', t: 'A recruiter tells a story in three steps.', p: 'One question before, then the video, then the questions.' },
  { k: 'ordem', est: 'f', min: 9, img: 'capa', rot: 'II · Situation, Task, Action, Result', t: 'A story about an angry client.', p: 'Tap the five sentences in the right order.' },
  { k: 'prova', est: 'o', min: 20, img: 'conversa', rot: 'III · Two Stories, Two Minutes', t: 'Two classic questions. Your stories.', p: 'Read the question, prepare your story, start the clock, tell it.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'ZSSID5mp93o', titulo: 'Answering Behavioral Interview Questions Using the STAR Method', fonte: 'SELF MADE MILLENNIAL · 6:00–8:00', inicio: 360, fim: 480,
  antes: { q: 'Which questions start with “Tell me about a time when…”? Say two.', h: 'A time you had a conflict, made a mistake, handled a difficult customer, led a project…' },
  ouvir: 'Listen: What problem did the person notice, what did they do, and what was the result?',
  perguntas: [
    { q: 'What was the problem?', h: 'Many customers were calling to cancel the online therapy service, because their companies paid for a similar program.' },
    { q: 'What action did the person take?', h: 'They flagged it to leadership and suggested a template email so customers could ask their employer to reimburse them.' },
    { q: 'What was the result?', h: '65% of those customers stayed, and the person was recognized at the team meeting.' },
    { q: 'What mistake does she say many people make?', h: 'They stop after the action and forget the result.' },
    { q: 'What are the three categories of behavioral questions?', h: 'Challenges and failures, working with other people, and success stories.' }],
  fecho: 'Situation (or problem) → what you had to do → what YOU did → the result, with a number if possible.' };

var ORDEM = { rot: 'A STORY · THE ANGRY CLIENT (FICTIONAL)', pede: 'Tap the five sentences in order.',
  passos: [
    'Last year, I was working as an account manager for a small logistics company.',
    'One Friday, our biggest client called, very angry: we had sent their order to the wrong city.',
    'I had to solve it before Monday, because they were opening a new store.',
    'I apologized, called three drivers, and personally organized a new delivery on Saturday morning.',
    'The order arrived on time, the client renewed their contract for two years, and we created a new checklist for addresses.'],
  chips: ['Situation (was …ing)', 'The problem (had …ed)', 'Task (had to)', 'Action (I + past simple)', 'Result (+ number)'],
  modelo: 'Past continuous for the background (I was working…), past perfect for what happened before (we had sent…), past simple for your actions (I called, I organized), and a clear result.' };

var PROVA = { rot: 'TWO STORIES, TWO MINUTES', tarefas: [
  { k: 'QUESTION 1 · A CHALLENGE', tipo: 'fala', prep: 60, seg: 90, enun: '“Tell me about a time when you had to solve a problem quickly.”',
    texto: 'Use a real story. No story? Use this card: <b>a café on a busy Saturday</b>; the coffee machine broke at 9 a.m.; you were the shift leader; you borrowed a machine from the bakery next door, changed the menu to cold drinks for one hour, and sales were only 10% lower than a normal Saturday.',
    chips: ['Last year, I was working as…', 'One day,…', 'I had to…', 'So I… Then I…', 'As a result,…', 'What I learned was…'],
    criterios: ['Clear situation with the past continuous', 'Said what YOU did (I, not we)', 'Finished with a result', 'About 90 seconds'],
    modelo: 'Last year, I was working as a shift leader in a busy café. One Saturday, the coffee machine broke at nine in the morning, our busiest time. I had to keep the café running. So I asked the bakery next door to lend us their machine, and I changed the menu to cold drinks for one hour. As a result, our sales were only ten percent lower than a normal Saturday, and my manager asked me to write an emergency plan for the team.' },
  { k: 'QUESTION 2 · A CONFLICT', tipo: 'fala', prep: 60, seg: 90, enun: '“Tell me about a time when you disagreed with a colleague.”',
    texto: 'Use a real story. No story? Use this card: <b>a marketing project</b>; a colleague wanted to spend the whole budget on ads; you wanted to test first; you suggested a small test for two weeks; the test showed which ads worked, and the campaign cost 30% less.',
    chips: ['I was working on…', 'My colleague wanted to…, but I thought…', 'I suggested that we…', 'We agreed to…', 'In the end,…'],
    criterios: ['Stayed respectful about the colleague', 'Explained the disagreement clearly', 'Showed a solution together', 'Finished with a result'],
    modelo: 'I was working on a campaign with a colleague who wanted to spend the whole budget on ads right away. I thought we should test first. Instead of arguing, I suggested that we run a small test for two weeks. We agreed, and the test showed which ads worked best. In the end, the campaign cost thirty percent less, and my colleague and I still work together on every launch.' }] };

var PODE = [
  'I can recognize behavioral questions: Tell me about a time when…',
  'I can tell a work story in order: situation, task, action, result.',
  'I can use was …ing, had …ed and the past simple in a story.',
  'I can always finish my story with a result.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 04: video · ordem · prova (os dados estão no topo do aula.js) */
