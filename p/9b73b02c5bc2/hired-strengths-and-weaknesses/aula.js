/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 1 · LESSON 3 OF 12 · STRENGTHS AND WEAKNESSES · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   I tend to…, I’m working on…, I’ve started to…, adjetivos de perfil com exemplo (reliable, detail-oriented…).
   Vídeo Self Made Millennial (0:28–2:30).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 3, kick: 'WOLF HIRED · MODULE 1 · LESSON 3 OF 12', titulo: ['Strengths and', 'Weaknesses'], tema: 'Talking about yourself honestly, with proof', placa: 'LESSON 3',
  lugarConversa: 'THE HONEST ANSWER', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: '“What’s your greatest weakness?” is not a trap if you have a story. Today you learn to name a real weakness, show what you’re doing about it, and prove every strength with an example.',
  chips: ['A recruiter’s formula', 'Good answer or red flag?', 'Weakness + action + result'], botao: 'Start the lesson',
  nota: '“I’m a perfectionist” is the answer everyone gives. A real weakness with a real plan is much stronger.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 7, img: 'conversa', rot: 'I · Always Be Telling Stories', t: 'A recruiter answers the weakness question.', p: 'One question before, then the video, then the questions.' },
  { k: 'separa', est: 'f', min: 9, img: 'capa', rot: 'II · Good Answer or Red Flag?', t: 'What would make an interviewer worried?', p: 'Read each answer out loud. Good answer or red flag?' },
  { k: 'transforma', est: 'o', min: 16, img: 'conversa', rot: 'III · Weakness + Action + Result', t: 'Turn a weakness into a strong answer.', p: 'Read the weakness and the clue. Say the full answer.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 't2MpQuaMn7U', titulo: 'What Is Your Greatest Weakness? Answer Samples', fonte: 'SELF MADE MILLENNIAL · 0:28–2:30', inicio: 28, fim: 150,
  antes: { q: 'What do most people say when an interviewer asks about their greatest weakness?', h: '“I’m a perfectionist” or “I work too hard.” Interviewers have heard it a thousand times.' },
  ouvir: 'Listen: What three things should a good weakness answer include?',
  perguntas: [
    { q: 'What three things does she recommend?', h: 'Name something you aren’t as good at, describe how you’ve been working on it, and share some results.' },
    { q: 'What does this kind of answer show the employer?', h: 'Self-awareness and the ability to take feedback.' },
    { q: 'In her example, what did her boss ask?', h: 'To be more precise and detail-oriented.' },
    { q: 'What was the real cause of the problem?', h: 'She’s action-oriented: she started projects without asking enough questions first.' },
    { q: 'What has she been doing since then, and what changed?', h: 'Asking about the “why” before each assignment; she now delivers exactly what her boss wants.' }],
  fecho: 'A real weakness → what you’ve been doing about it → the result. That’s a story, not a confession.' };

var SEPARA = { rot: 'GOOD ANSWER OR RED FLAG?', a: 'GOOD ANSWER', b: 'RED FLAG', fim: 'Real, not a deal-breaker for the job, and with a plan. Strengths always with proof.', itens: [
  ['“I’m a perfectionist. I just work too hard.”', 'b', 'A fake weakness: it sounds rehearsed.'],
  ['“I tend to say yes to everything, so I’ve started using a priority list with my manager.”', 'a', 'Real weakness + action.'],
  ['“I don’t really have any weaknesses.”', 'b', 'It shows no self-awareness.'],
  ['“I’m not a people person.” (for a sales job)', 'b', 'A deal-breaker for this job.'],
  ['“Public speaking used to make me nervous. Last year I joined a speaking club, and now I present to clients every month.”', 'a', 'Weakness, action and result.'],
  ['“I’m very reliable. In four years, I’ve never missed a deadline.”', 'a', 'A strength with proof.'],
  ['“I’m a hard worker, a team player and a fast learner.”', 'b', 'Three clichés and no proof.'],
  ['“I’m still working on my Excel skills, so I’m taking an online course, and I already build my own reports.”', 'a', 'Honest, and it’s improving.']] };

var TRANSFORMA = { rot: 'WEAKNESS + ACTION + RESULT', fim: 'I tend to… → so I’ve started… / I’m working on it by… → now… That’s the formula.', itens: [
  { de: 'WEAKNESS: you get stressed with many tasks', pista: 'I tend to… so I’ve started…', para: 'I tend to get stressed when I have many tasks, so I’ve started planning my week every Monday morning.' },
  { de: 'WEAKNESS: you don’t delegate', pista: 'I used to… Now I…', para: 'I used to do everything myself. Now I delegate more, and my team has grown a lot.' },
  { de: 'WEAKNESS: your English presentations', pista: 'I’m working on… by…', para: 'I’m working on my presentations in English by taking classes and practicing with my team.' },
  { de: 'STRENGTH: organized', pista: 'I’m very… For example,…', para: 'I’m very organized. For example, I created the filing system my whole department uses today.' },
  { de: 'STRENGTH: good with difficult customers', pista: 'One of my strengths is… Last year,…', para: 'One of my strengths is staying calm with difficult customers. Last year, I had the best customer score on my team.' },
  { de: 'STRENGTH: fast learner', pista: 'I pick things up quickly. When…, I…', para: 'I pick things up quickly. When we changed systems, I learned it in a week and trained five colleagues.' }] };

var PODE = [
  'I can name a real weakness and what I’m doing about it.',
  'I can use I tend to…, I used to…, I’m working on…',
  'I can prove a strength with an example.',
  'I can avoid fake weaknesses and empty clichés.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 03: video · separa · transforma (os dados estão no topo do aula.js) */
