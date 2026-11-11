/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 1 · LESSON 1 OF 12 · TELL ME ABOUT YOURSELF · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   O pitch de 60 segundos: present simple (quem sou), present perfect (experiência), conquista, por que esta vaga.
   Vídeo Linda Raynier (1:34–6:20). Candidatos e empresas FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 1, kick: 'WOLF HIRED · MODULE 1 · LESSON 1 OF 12', titulo: ['Tell Me About', 'Yourself'], tema: 'The 60-second pitch that opens every interview', placa: 'LESSON 1',
  lugarConversa: 'THE INTERVIEW ROOM', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: 'The first question of almost every interview, and the one most people improvise. Today you build a clear, one-minute answer: who you are, what you’ve done, what you’re proud of, and why this job.',
  chips: ['Four tips from a career coach', 'Put the pitch in order', 'Your first 60 seconds'], botao: 'Start the lesson',
  nota: 'They are not asking about your childhood or your city. They want your professional story, short and clear.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · What They Really Want', t: 'A career coach explains the right answer.', p: 'One question before, then the video, then the questions.' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'II · The Pitch Timeline', t: 'Where does each sentence of the pitch live in time?', p: 'Tap a sentence, then its place on the line. Notice the verbs. Then say three lines about you.' },
  { k: 'ordem', est: 'f', min: 9, img: 'capa', rot: 'III · Put the Pitch in Order', t: 'Five sentences, one strong answer.', p: 'Tap the five parts in the right order.' },
  { k: 'prova', est: 'o', min: 18, img: 'conversa', rot: 'IV · Your First 60 Seconds', t: 'Prepare and give your own pitch.', p: 'Read the card, prepare, start the clock, speak.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Lesson 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'kayOhGRcNt4', titulo: 'Tell Me About Yourself: A Good Answer to This Interview Question', fonte: 'LINDA RAYNIER · 1:34–6:20', inicio: 94, fim: 380,
  antes: { q: 'An interviewer says: “Tell me about yourself.” What do you say in the first sentence?', h: 'Many people start with their age or city. A better start: your profession and experience.' },
  ouvir: 'Listen: What are the four tips?',
  perguntas: [
    { q: 'What is tip number one?', h: 'A short summary of your work history: company, job title, how long, main responsibilities.' },
    { q: 'What does “achievement-oriented” mean in tip two?', h: 'For each role, mention one accomplishment, ideally with a number (time or money saved).' },
    { q: 'What is her example of an achievement?', h: 'An Excel model that automated a process and saved about one day per month.' },
    { q: 'What is tip three?', h: 'Tell them what you know about the role: “I understand you’re looking for someone with…”' },
    { q: 'And tip four?', h: 'Tell them why you are the right fit: “I’m confident I’ll be able to succeed in this role.”' }],
  fecho: 'Snapshot → achievement → what they need → why you. Professional, short, and connected to THIS job.' };

var ORDEM = { rot: 'A PITCH · CUSTOMER SUCCESS ANALYST (FICTIONAL)', pede: 'Tap the five parts in order.',
  passos: [
    'I’m a customer support specialist, and I’ve worked with software companies for four years.',
    'I started my career at a small startup, where I answered about sixty customer tickets a day.',
    'Then I moved to Larkspur Software, where I’ve led a team of five since 2023. I’m most proud of cutting our response time by forty percent.',
    'I understand that you’re looking for someone who can turn customer problems into product ideas.',
    'That’s exactly what I love doing, so I’m confident I can make a real difference in this role.'],
  chips: ['Who I am (present)', 'Where I started (past)', 'My experience + achievement (present perfect)', 'What they need', 'Why me'],
  modelo: 'Present (who I am) → past simple (where I started) → present perfect + one number (what I’ve achieved) → “I understand you’re looking for…” → “That’s why I’m confident…”.' };

var PROVA = { rot: 'YOUR FIRST 60 SECONDS', tarefas: [
  { k: 'YOUR PITCH', tipo: 'fala', prep: 60, seg: 60, enun: 'Tell me about yourself, for a job you want (real or dream job). About 60 seconds.',
    texto: '<b>Use your real experience.</b> No job yet? Use this card: <b>Bia</b>, 24, studied marketing, two years of internships, manages social media for a local gym (followers went from 2,000 to 9,000), applying for a junior marketing job at a fictional sports brand.',
    chips: ['I’m a … with … years of experience in…', 'I started my career at…, where I…', 'Since …, I’ve been…', 'I’m most proud of…', 'I understand you’re looking for…', 'That’s why I’m confident I can…'],
    criterios: ['Started with profession, not age or city', 'Past simple for the start, present perfect for experience', 'At least one achievement with a number', 'Connected to the job and ended with “why me”', 'About 60 seconds'],
    modelo: 'I’m a marketing professional, and I’ve worked with social media for two years. I started with internships at two agencies, where I learned to plan content and read the numbers. Since last year, I’ve managed the social media of a local gym, and I’m most proud of growing their followers from two thousand to nine thousand. I understand that you’re looking for someone creative who can grow a young audience. That’s exactly what I’ve been doing, so I’m confident I can help your brand grow too.' }] };

var PODE = [
  'I can open my answer with my profession, not my age or city.',
  'I can tell my career with the past simple and the present perfect.',
  'I can mention one achievement with a number.',
  'I can end my pitch by connecting my experience to the job.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 01: video · ordem · prova (os dados estão no topo do aula.js) */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de ordem.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'A pitch on one line. Where does each sentence go?',
  marcos: [{ t: 'WHERE I STARTED', s: 'past simple · finished' }, { t: 'UNTIL NOW', s: 'present perfect · still true' }, { t: 'WHO I AM', s: 'present · now' }],
  frases: [
    { f: 'I started my career at a small startup.', c: 0, d: 'started · finished' },
    { f: 'I answered about sixty tickets a day.', c: 0, d: 'answered · finished' },
    { f: 'I’ve worked with software companies for four years.', c: 1, d: 'I’ve worked · for four years, until now' },
    { f: 'I’ve led a team of five since 2023.', c: 1, d: 'I’ve led · since 2023, until now' },
    { f: 'I’m a customer support specialist.', c: 2, d: 'I’m · who I am now' },
    { f: 'I love turning customer problems into ideas.', c: 2, d: 'love · true today' }
  ],
  nota: 'The past simple is finished: <b>started, answered</b>. The present perfect, <b>I’ve worked, I’ve led</b> + for or since, started before and is still true. The present, <b>I’m</b>, says who you are today.',
  uso: { p: 'Your turn. Your own story in three lines: who you are, where you started, what you’ve done.', molde: ['I’m a …', 'I started …', 'I’ve … for / since …'], ex: 'I’m a project manager. I started in sales at a small company. I’ve led teams for six years.' },
  prof: 'Let the student place the sentences alone. A wrong place comes back with one tap.' };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
