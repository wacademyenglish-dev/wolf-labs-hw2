/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 2 · LESSON 5 OF 12 · WHY US? · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   Por que esta empresa: pesquisa + paixão. What drew me to…, I’ve always been interested in…, I was impressed by…
   Vídeo The Companies Expert (0:00–3:26). Empresa FICTÍCIA.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 5, kick: 'WOLF HIRED · MODULE 2 · LESSON 5 OF 12', titulo: ['Why', 'Us?'], tema: 'Showing research and real interest in the company', placa: 'LESSON 5',
  lugarConversa: 'THE COMPANY PAGE', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: '“Why do you want to work here?” The honest answer (“I need a job”) won’t work. Today you learn to show that you researched the company and that this role fits you, with specific, natural English.',
  chips: ['What recruiters listen for', 'Read the company page', 'From generic to specific'], botao: 'Start the lesson',
  nota: '“You’re a big company” could be said about anyone. Say something only THIS company has.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · Not About You, About Them', t: 'A former CEO explains what they want to hear.', p: 'One question before, then the video, then the questions.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · Read the Company Page', t: 'A fictional company and a strong answer.', p: 'Read the page and the answer out loud. Then answer the questions.' },
  { k: 'transforma', est: 'o', min: 14, img: 'conversa', rot: 'III · From Generic to Specific', t: 'Turn a weak answer into a memorable one.', p: 'Read the generic line and the clue. Say the specific version.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'fN927yxTOYs', titulo: 'Why Do You Want To Work Here? Best Answer', fonte: 'THE COMPANIES EXPERT · 0:00–3:26', inicio: 0, fim: 206,
  antes: { q: 'Why do companies ask “Why do you want to work here?”', h: 'To see if you researched them, and if you really want this job (not any job).' },
  ouvir: 'Listen: What are interviewers looking for in your answer?',
  perguntas: [
    { q: 'What two things are they looking for?', h: 'Proof that you researched the company, and passion for the role.' },
    { q: 'Why does enthusiasm matter so much to them?', h: 'They believe the candidate who shows the most enthusiasm will stay the longest.' },
    { q: 'How should you say that you want the job?', h: 'Explicitly, but in an inspired way, not a desperate way.' },
    { q: 'What should the best answer talk about?', h: 'The company (its products or how it works) and why the role fits your personality or skills.' },
    { q: 'What does the example answer say about the smaller company?', h: 'It focuses on one industry, has a stronger team, more customer loyalty and more potential for growth.' }],
  fecho: 'Something specific about them + why the role fits you + “I want to be part of that.”' };

var LEITURA = { rot: 'COMPANY PAGE + ANSWER · GREENLINE BIKES (FICTIONAL)', tipo: 'fala',
  antes: { q: 'Where do you look before an interview to learn about a company?', h: 'Their website, LinkedIn, recent news, product reviews, people who work there.' },
  texto: 'COMPANY PAGE: Greenline Bikes rents electric bikes in six Brazilian cities. Founded in 2019. 120 employees. This year: launching in Chile. Values: “Cities for people, not cars.” Open role: Customer Experience Analyst.\nCANDIDATE: {I’ve always been interested in} how cities move, and I use your bikes to get to work every day.\nCANDIDATE: {What drew me to} Greenline is your mission: “cities for people, not cars” is something I really believe in.\nCANDIDATE: {I was also impressed by} your growth. Six cities in five years, and now Chile.\nCANDIDATE: {This role is a great fit for me because} I’ve spent three years improving customer experience at a delivery app, and {I’d love to} help you keep customers happy while you grow so fast.\nCANDIDATE: {I really want to be part of that.}',
  perguntas: [
    { q: 'What three facts about the company did the candidate use?', h: 'The mission (cities for people), the fast growth (six cities, now Chile), and the product (they use the bikes).' },
    { q: 'How does she connect the company to her own life?', h: 'She uses the bikes to get to work every day.' },
    { q: 'Why is the role a good fit for her?', h: 'Three years improving customer experience at a delivery app.' },
    { q: 'How does she end?', h: '“I really want to be part of that.”' }],
  olha: 'The highlighted phrases organize the answer: I’ve always been interested in… · What drew me to… is… · I was also impressed by… · This role is a great fit for me because… · I’d love to… · I really want to be part of that.' };

var TRANSFORMA = { rot: 'FROM GENERIC TO SPECIFIC', fim: 'One fact about them + one fact about you. That’s what makes the answer believable.', itens: [
  { de: '“You’re a big, famous company.”', pista: 'What drew me to… is…', para: 'What drew me to your company is how you train new employees: I read about your mentoring program.' },
  { de: '“I need a job.”', pista: 'I’m looking for a role where I can…', para: 'I’m looking for a role where I can use my sales experience and grow into a leadership position.' },
  { de: '“I like your products.”', pista: 'I’ve been using… for… and I love how…', para: 'I’ve been using your app for two years, and I love how simple you made paying bills.' },
  { de: '“The salary is good.”', pista: 'I was impressed by…', para: 'I was impressed by your growth: you opened three new offices in the last two years.' },
  { de: '“Any job is fine for me.”', pista: 'This role is a great fit because…', para: 'This role is a great fit because it combines my two favorite things: data and talking to customers.' },
  { de: '“I don’t know much about you.”', pista: 'I’d love to be part of… because…', para: 'I’d love to be part of a team that is bringing healthy food to schools, because it’s something I really care about.' }] };

var PODE = [
  'I can research a company and mention specific facts about it.',
  'I can say What drew me to…, I’ve always been interested in…, I was impressed by…',
  'I can explain why the role fits my experience.',
  'I can show enthusiasm without sounding desperate.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 05: video · leitura · transforma (os dados estão no topo do aula.js) */
