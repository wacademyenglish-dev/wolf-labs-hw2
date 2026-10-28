/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 1 · LESSON 2 OF 12 · WALK ME THROUGH YOUR CV · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   Contar a carreira: past simple (fim) × present perfect (até agora), for / since / ago, transições.
   Vídeo Self Made Millennial (4:39–7:50). Pessoas e empresas FICTÍCIAS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 2, kick: 'WOLF HIRED · MODULE 1 · LESSON 2 OF 12', titulo: ['Walk Me Through', 'Your CV'], tema: 'Telling your career: past simple and present perfect', placa: 'LESSON 2',
  lugarConversa: 'THE CV ON THE TABLE', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: 'The CV is on the table, but the interviewer wants to hear it from you. Today you learn to tell your career clearly, choosing the right tense for what is finished and what continues.',
  chips: ['A recruiter’s formula', 'Finished or still true?', 'The interviewer’s follow-ups'], botao: 'Start the lesson',
  nota: 'Finished jobs: past simple (I worked there for two years). Your current job: present perfect (I’ve worked here since 2022).' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · Ninety Seconds, Not Ten Minutes', t: 'A recruiter’s formula and a real example.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 12, img: 'capa', rot: 'II · Finished or Still True?', t: 'The tense tells the interviewer if it’s over.', p: 'Compare A and B. Which one is right? Why?' },
  { k: 'cadeira', est: 'o', min: 14, img: 'conversa', rot: 'III · The Follow-Up Questions', t: 'Your teacher is the interviewer. You walk them through your CV.', p: 'Follow the steps. Your teacher asks follow-ups as the interviewer.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'bbirGRlxsW8', titulo: 'How to Answer “Walk Me Through Your Resume”', fonte: 'SELF MADE MILLENNIAL · 4:39–7:50', inicio: 279, fim: 470,
  antes: { q: 'The interviewer has your CV. Why do they ask you to walk them through it?', h: 'They probably didn’t read it carefully, and they want to hear the most important points from you.' },
  ouvir: 'Listen: What are the three parts of her formula?',
  perguntas: [
    { q: 'What is the first part of the answer?', h: 'A short summary: what kind of professional you are (and your new path, if you’re changing careers).' },
    { q: 'What is the second part?', h: 'Your relevant jobs or projects, with one to three accomplishments each, with numbers if possible.' },
    { q: 'How should you end?', h: 'With why this opportunity is the right next step for you.' },
    { q: 'Who is the person in her first example?', h: 'A middle school teacher who wants to become an office manager.' },
    { q: 'What achievement did the teacher mention?', h: 'She found a new vendor and got science equipment 20% cheaper, so two more students went to the science fair.' }],
  fecho: 'Overall statement → relevant roles with achievements → why this is the right next step. About 90 seconds.' };

var DESCOBRE = {
  pares: [
    { a: 'I {worked} at a bank from 2018 to 2021.', b: 'I {have worked} at a bank from 2018 to 2021.', q: 'This job is over. Which one is right?', r: '<b>Past simple</b> for finished jobs and finished time: I worked there from 2018 to 2021.' },
    { a: 'I {have worked} here since 2022.', b: 'I {work} here since 2022.', q: 'This is your current job. Which one is right?', r: '<b>Present perfect + since</b> for something that started in the past and continues: I’ve worked here since 2022.' },
    { a: 'I joined the company two years {ago}.', b: 'I joined the company {since} two years.', q: 'Which one is right?', r: '<b>ago</b> with the past simple (two years ago). <b>since</b> needs a starting point (since 2022).' },
    { a: 'I {was promoted} after a year.', b: 'I {promoted} after a year.', q: 'Someone promoted you. Which one is right?', r: 'Passive: <b>I was promoted</b> / <b>I was hired</b> / <b>I was asked to…</b>' }],
  regra: [['FINISHED', 'past simple: I worked / I led / I moved (+ in 2019, two years ago)'], ['STILL TRUE', 'present perfect: I’ve worked / I’ve led (+ since 2022, for two years)'], ['AGO', 'past simple + ago: I left three years ago'], ['PASSIVE', 'I was promoted / hired / asked to…']],
  armas: [['PAST', 'I have worked there in 2019.', 'I worked there in 2019.', 'finished time'], ['PRESENT PERFECT', 'I work here for three years.', 'I’ve worked here for three years.', 'still true'], ['AGO', 'since two years', 'two years ago', 'ago + past'], ['PASSIVE', 'I promoted in 2021.', 'I was promoted in 2021.', 'someone promoted you']] };

var CADEIRA = { itens: [
  { alvo: 'Give your overall statement.', dica: 'I’m a … professional, focused on…', resp: 'Okay. Let’s start with your current job.' },
  { alvo: 'Describe your current role (still true).', dica: 'I’ve been … at … since … / for…', resp: 'And what are your main responsibilities?' },
  { alvo: 'Explain your main responsibilities.', dica: 'I’m responsible for… I also…', resp: 'What’s an achievement you’re proud of there?' },
  { alvo: 'Give one achievement with a number.', dica: 'Last year, I… As a result,…', resp: 'Impressive. And before that?' },
  { alvo: 'Describe a previous job (finished).', dica: 'Before that, I worked at … for … years, where I…', resp: 'Why did you leave that job?' },
  { alvo: 'Explain why you left, positively.', dica: 'I was looking for… / I wanted to grow in…', resp: 'I see a gap of a few months on your CV. What happened?' },
  { alvo: 'Explain the gap calmly and honestly.', dica: 'I took … months to… During that time, I…', resp: 'That makes sense. So why this job now?' },
  { alvo: 'Say why this is the right next step.', dica: 'This role is the right next step because…', resp: 'Thank you. That was very clear.' }] };

var PODE = [
  'I can walk an interviewer through my CV in about 90 seconds.',
  'I can use the past simple for finished jobs and the present perfect for my current one.',
  'I can use for, since and ago correctly.',
  'I can explain why I left a job and a gap in my CV calmly.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 02: video · descobre · cadeira (os dados estão no topo do aula.js) */
