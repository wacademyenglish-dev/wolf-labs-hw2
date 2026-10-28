/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 2 · LESSON 6 OF 12 · THE TRICKY QUESTION · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   Ganhar tempo e responder perguntas difíceis: That’s a good question. Let me think for a second. I’d start by…
   Vídeo Indeed (12:49–14:45). Áudios: entrevistadores (edge-tts).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 6, kick: 'WOLF HIRED · MODULE 2 · LESSON 6 OF 12', titulo: ['The Tricky', 'Question'], tema: 'Buying time and answering the questions you didn’t expect', placa: 'LESSON 6',
  lugarConversa: 'THE HOT SEAT', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: '“Why did you leave your last job?” “How many elevators are there in Brazil?” Your mind goes blank. Today you learn the phrases that buy you time and the strategy that saves almost any answer.',
  chips: ['How to handle a trick question', 'Five tricky questions', 'Buy time, then answer'], botao: 'Start the lesson',
  nota: 'Three seconds of silence feels like forever to you, but to them it looks like thinking. “Let me think about that for a second” is a strong sentence.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · Explain Your Thinking', t: 'A career coach on questions nobody can answer.', p: 'One question before, then the video, then the questions.' },
  { k: 'multipla', est: 'l', min: 12, img: 'capa', rot: 'II · Five Tricky Questions', t: 'Listen to the interviewer. Choose the best answer.', p: 'Play the question. Read the three answers. Which one is best?' },
  { k: 'transforma', est: 'o', min: 14, img: 'conversa', rot: 'III · Buy Time, Then Answer', t: 'From panic to a calm, professional answer.', p: 'Read the panic answer and the clue. Then say the calm answer.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: '-mH8C5pdeRI', titulo: 'Top 10 Tricky Interview Questions & Best Response Strategies', fonte: 'INDEED · 12:49–14:45', inicio: 769, fim: 885,
  antes: { q: 'An interviewer asks: “How many elevators are there in the USA?” What do you do?', h: 'Don’t panic: nobody knows the exact number. Explain how you would find the answer.' },
  ouvir: 'Listen: What is the real point of a trick question?',
  perguntas: [
    { q: 'What examples of trick questions does she give?', h: 'How many elevators are there in the USA? What three things would you bring to a desert island?' },
    { q: 'Who usually gets these questions?', h: 'Recent graduates or people without much experience. They are going out of fashion.' },
    { q: 'What is the interviewer really looking for?', h: 'How you explain your thinking and solve problems, not the exact answer.' },
    { q: 'What steps does her example answer describe?', h: 'Search online, ask people who know more, put the research together, maybe do first-hand research, then take ideas to the boss.' },
    { q: 'Where else can you use this strategy?', h: 'With any difficult question: a story you don’t have, or a certification you’ve never heard of.' }],
  fecho: 'You don’t need the answer. You need to show how you would get to it.' };

var MULTIPLA = { rot: 'FIVE TRICKY QUESTIONS', fim: 'Buy time, stay positive, be honest, and bring it back to the job.', itens: [
  { audio: 'tq1.mp3', ouve: 'So, why did you leave your last job?', q: 'What is the best answer?', ops: ['My boss was terrible, honestly.', 'I learned a lot there, but I was looking for a role with more responsibility, like this one.', 'They didn’t pay me enough.'], c: 1, por: 'Positive about the past, focused on the future.' },
  { audio: 'tq2.mp3', ouve: 'I see you changed jobs three times in four years. Why is that?', q: 'What is the best answer?', ops: ['Two were short-term contracts, and one company closed. Now I’m looking for a long-term home, and this role is exactly that.', 'I get bored easily.', 'It’s a long story. First, in 2021…'], c: 0, por: 'Short, honest, then back to this job.' },
  { audio: 'tq3.mp3', ouve: 'How many coffee cups are sold in São Paulo every day?', q: 'What is the best answer?', ops: ['I have no idea, sorry.', 'Fifty million.', 'That’s a good question. Let me think. I’d start with the population, estimate how many people drink coffee outside home…'], c: 2, por: 'Buy time and explain your thinking.' },
  { audio: 'tq4.mp3', ouve: 'What would your current boss say about you?', q: 'What is the best answer?', ops: ['She’d say I’m the best employee she’s ever had.', 'She’d probably say I’m very reliable. She often gives me the most urgent projects.', 'I don’t know, you’d have to ask her.'], c: 1, por: 'Honest quality + proof.' },
  { audio: 'tq5.mp3', ouve: 'Have you ever used our software, DataNest?', q: 'You haven’t. What is the best answer?', ops: ['Yes, of course.', 'No.', 'Not yet, but I’ve used two similar tools, and I learn new software quickly. I’ve already watched your tutorials.'], c: 2, por: 'Honest, then show a related skill.' }] };

var TRANSFORMA = { rot: 'BUY TIME, THEN ANSWER', fim: 'A phrase to buy time + a calm structure. Your mind can go blank: your English shouldn’t.', itens: [
  { de: '“Uh… um… I don’t know…”', pista: 'That’s a good question. Let me think about that for a second.', para: 'That’s a good question. Let me think about that for a second.' },
  { de: '“What? Can you repeat?”', pista: 'Sorry, could you say that again? / Just to make sure I understand,…?', para: 'Just to make sure I understand, you’re asking how I would deal with a difficult client?' },
  { de: '“I have no idea.”', pista: 'I don’t know exactly, but I’d start by…', para: 'I don’t know exactly, but I’d start by looking at the data and talking to the people involved.' },
  { de: '“My old company was awful.”', pista: 'It wasn’t the right fit, but I learned…', para: 'It wasn’t the right fit for me, but I learned a lot about working under pressure.' },
  { de: '“I’ve never done that.”', pista: 'I haven’t…, but I have…, so…', para: 'I haven’t managed a team yet, but I have trained new colleagues, so I’m ready for the next step.' },
  { de: 'Your mind goes completely blank.', pista: 'I’m sorry, my mind just went blank. Could I come back to that?', para: 'I’m sorry, my mind just went blank. Could we come back to that question in a minute?' }] };

var PODE = [
  'I can buy time politely: That’s a good question. Let me think…',
  'I can check a question: Just to make sure I understand,…?',
  'I can explain how I would find an answer I don’t know.',
  'I can answer “Why did you leave?” positively.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 06: video · multipla (áudio) · transforma (os dados estão no topo do aula.js) */
