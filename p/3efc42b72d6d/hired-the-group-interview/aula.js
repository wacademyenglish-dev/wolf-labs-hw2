/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 4 · LESSON 10 OF 12 · THE GROUP INTERVIEW · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   Dinâmica em grupo: concordar, acrescentar, discordar com educação, pedir a vez, devolver a vez.
   Vídeo Indeed (0:49–4:50). Candidatos e tarefas FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 10, kick: 'WOLF HIRED · MODULE 4 · LESSON 10 OF 12', titulo: ['The Group', 'Interview'], tema: 'Agreeing, adding and disagreeing politely in a group', placa: 'LESSON 10',
  lugarConversa: 'THE ROUND TABLE', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: 'Five candidates, one table, one task. They don’t want the loudest person. They want the one who listens and adds ideas. Today you learn the language of a great team player.',
  chips: ['A mock group interview', 'Build, don’t interrupt', 'The group task'], botao: 'Start the lesson',
  nota: 'Mentioning another candidate’s idea (“Building on what Ana said…”) shows you listen. Interviewers notice it every time.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · Three Candidates, One Room', t: 'A mock group interview with commentary.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 12, img: 'capa', rot: 'II · Build, Don’t Interrupt', t: 'The phrases of a good team player.', p: 'Compare A and B. Which one works better in a group? Why?' },
  { k: 'prova', est: 'o', min: 16, img: 'conversa', rot: 'III · The Group Task', t: 'Your teacher plays the other candidates.', p: 'Read the task, prepare, start the clock, discuss.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 10: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'eLxA6hPaStw', titulo: 'How to Ace Your Group Interview: Mock Job Interview', fonte: 'INDEED · 0:49–4:50', inicio: 49, fim: 290,
  antes: { q: 'In a group interview, what do employers want to see?', h: 'How you communicate and how you work with a team.' },
  ouvir: 'Listen: What does each candidate do well or badly?',
  perguntas: [
    { q: 'What did Anne do before the interviewer arrived?', h: 'She started talking to the other candidates instead of checking her phone.' },
    { q: 'What made Chloe’s answer memorable?', h: 'She bragged a little: employee of the month twice, for problem-solving.' },
    { q: 'What was the problem with Michael’s first answer?', h: 'He said “I’ll handle it” and did it alone; they want to see a team player, too.' },
    { q: 'What mistake did Michael make later?', h: 'He interrupted Anne to add something about himself.' },
    { q: 'Why was Anne’s final answer brilliant?', h: 'Teamwork was her core strength, and she referred to Chloe’s answer and added to it.' }],
  fecho: 'Be early and friendly, brag a little with proof, never interrupt, and build on what others say.' };

var DESCOBRE = {
  pares: [
    { a: '{Building on what Chloe said}, I think we should also…', b: '{My idea is better}: we should…', q: 'Which one works better in a group?', r: '<b>Building on what … said</b> shows you listened, and you still add your idea.' },
    { a: '{I see it slightly differently.} What if we…?', b: '{No, that’s wrong.} We should…', q: 'You disagree. Which one is better?', r: 'Disagree softly: <b>I see it slightly differently / I’m not sure I agree, because…</b>' },
    { a: '{Sorry, go ahead.}', b: '(you keep talking over them)', q: 'Two people start talking at the same time. What do you do?', r: '<b>Sorry, go ahead.</b> Then: <b>Can I add something?</b> when they finish.' },
    { a: '{What do you think, Michael?}', b: '(you never invite the quiet person)', q: 'Someone hasn’t spoken. What helps the group?', r: 'Inviting others is leadership: <b>What do you think, …? / We haven’t heard from…</b>' }],
  regra: [['AGREE', 'I completely agree with… / That’s a great point.'], ['BUILD', 'Building on what … said, … / To add to that, …'], ['DISAGREE', 'I see it slightly differently. / I’m not sure I agree, because…'], ['TURNS', 'Sorry, go ahead. / Can I add something? / What do you think, …?']],
  armas: [['BUILD', 'Like Chloe said, but mine is better…', 'Building on what Chloe said, …', 'credit + add'], ['DISAGREE', 'That doesn’t make sense.', 'I see it slightly differently, because…', 'soft + reason'], ['INTERRUPT', 'Wait, wait, I want to say…', 'Can I add something?', 'ask for the turn'], ['INVITE', '(silence)', 'What do you think, Michael?', 'lead the group']] };

var PROVA = { rot: 'THE GROUP TASK', tarefas: [
  { k: 'TASK · THE TEAM EVENT', tipo: 'fala', prep: 45, seg: 120, enun: 'You are candidates for a job at a hotel. Together, choose ONE event for the hotel’s 10th anniversary. Your teacher plays two other candidates.',
    texto: '<b>Options:</b> (A) a free concert in the hotel garden for the neighborhood; (B) a dinner for the 50 best clients; (C) a 20% discount week for everyone. <b>Budget:</b> enough for only one. <b>Goal:</b> more bookings next year. <b>Candidate “Leo”</b> (your teacher) loves option B. <b>Candidate “Mia”</b> (your teacher) is quiet.',
    chips: ['That’s a great point, Leo.', 'Building on what Leo said,…', 'I see it slightly differently, because…', 'Can I add something?', 'What do you think, Mia?', 'So, do we all agree on…?'],
    criterios: ['Agreed or built on someone’s idea', 'Disagreed politely with a reason', 'Invited the quiet person', 'Helped the group reach a decision', 'Never interrupted'],
    modelo: 'That’s a great point, Leo: the best clients bring a lot of bookings. I see it slightly differently, though, because the goal is more bookings next year, and a concert could bring new people to the hotel. Building on Leo’s idea, what if we invite the fifty best clients to the concert as VIP guests? What do you think, Mia? … Great. So, do we all agree on the concert with a VIP area for our best clients?' }] };

var PODE = [
  'I can agree and build on others’ ideas: Building on what … said,…',
  'I can disagree politely with a reason.',
  'I can take and give turns without interrupting.',
  'I can invite quiet people and help the group decide.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 10: video · descobre · prova (os dados estão no topo do aula.js) */
