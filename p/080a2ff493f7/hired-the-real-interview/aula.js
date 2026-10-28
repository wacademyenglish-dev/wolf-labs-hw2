/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 4 · LESSON 12 OF 12 · THE REAL INTERVIEW · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   Simulação completa com guia de critérios: pitch, CV, história STAR, pergunta difícil, perguntas para eles, fechamento.
   Vídeo Curry College (0:03–2:55, entrevista simulada com feedback). Áudios: entrevistadora (edge-tts).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 12, kick: 'WOLF HIRED · MODULE 4 · LESSON 12 OF 12', titulo: ['The Real', 'Interview'], tema: 'A full mock interview, from hello to goodbye', placa: 'LESSON 12',
  lugarConversa: 'THE FINAL INTERVIEW', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: 'This is it. One full interview, for the job you want, with everything you practiced: the pitch, your stories, the tricky questions, your questions for them. Then honest feedback.',
  chips: ['A mock interview with feedback', 'The full interview', 'Three final questions'], botao: 'Start the lesson',
  nota: 'It’s not an oral exam. It’s a conversation: you’re also checking if this company is good for you.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · A Mock Interview With Feedback', t: 'A student answers; a career coach gives feedback.', p: 'One question before, then the video, then the questions.' },
  { k: 'cadeira', est: 'o', min: 20, img: 'capa', rot: 'II · The Full Interview', t: 'Your teacher is the interviewer. Answer everything.', p: 'Your teacher asks. You answer with what you practiced in the course.' },
  { k: 'prova', est: 'o', min: 14, img: 'conversa', rot: 'III · Three Final Questions', t: 'A new interviewer, three recorded questions.', p: 'Play the question, start the clock, answer.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 12: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'R_dxlajqA4s', titulo: 'Mock Interview Preparation: Common Questions with Feedback', fonte: 'CURRY COLLEGE · 0:03–2:55', inicio: 3, fim: 175,
  antes: { q: 'What is the most common mistake in “Tell me about yourself”?', h: 'Reading your CV in order, instead of telling them who you are as a candidate.' },
  ouvir: 'Listen: What feedback does the coach give on each answer?',
  perguntas: [
    { q: 'What did the student do well in “Tell me about yourself”?', h: 'She showed her background and her interests; it painted a picture of who she is.' },
    { q: 'What common mistake does the coach warn about?', h: 'Repeating the CV: they already read it. Think about your pitch and your story.' },
    { q: 'What was the student’s weakness?', h: 'She gets very stressed when things don’t go her way.' },
    { q: 'What is the coach’s three-part formula for weaknesses?', h: 'Be honest, don’t pick a weakness that is very bad for the job, and explain how you manage it.' },
    { q: 'What was missing from the student’s answer?', h: 'Step three: what she does about it (stops, breathes, makes lists, organizes her day).' }],
  fecho: 'Not your CV in order: your story. Not a weakness alone: a weakness and what you do about it.' };

var CADEIRA = { itens: [
  { alvo: 'Small talk: answer and say something back.', dica: 'Very well, thank you. It’s great to be here. How’s your week going?', resp: 'Busy, but good! Thanks for coming in. Shall we start?' },
  { alvo: 'Tell me about yourself.', dica: 'I’m a … with … years of experience… I’m most proud of… That’s why…', resp: 'Great. Walk me through your current role.' },
  { alvo: 'Walk me through your current role.', dica: 'I’ve been … since… I’m responsible for… Before that, I worked…', resp: 'Why are you looking for a new job?' },
  { alvo: 'Why are you looking for a new job?', dica: 'I’ve learned a lot there, but I’m looking for…', resp: 'Tell me about a time you solved a difficult problem.' },
  { alvo: 'Tell me about a time you solved a difficult problem.', dica: 'Last year, I was working… One day,… I had to… So I… As a result,…', resp: 'Nice. What’s your greatest weakness?' },
  { alvo: 'What’s your greatest weakness?', dica: 'I tend to…, so I’ve started… Now…', resp: 'Why do you want to work here?' },
  { alvo: 'Why do you want to work here?', dica: 'What drew me to… is… I was impressed by… This role is a great fit because…', resp: 'Okay. What are your salary expectations?' },
  { alvo: 'What are your salary expectations?', dica: 'Could you share the range you’ve budgeted? Based on the market, I’d be looking for…', resp: 'Fair enough. Do you have any questions for us?' },
  { alvo: 'Ask two questions.', dica: 'Could you tell me what… is? I was wondering…', resp: 'Good questions. We’ll get back to you by Friday.' },
  { alvo: 'Close the interview.', dica: 'Thank you so much for your time. I really enjoyed our conversation.', resp: 'Thank you. It was a pleasure.' }] };

var PROVA = { rot: 'THREE FINAL QUESTIONS', tarefas: [
  { k: 'QUESTION 1', tipo: 'fala', seg: 60, audio: 'ri1.mp3', ouve: 'Why should we hire you instead of the other candidates?', enun: 'Listen. Answer in about 60 seconds, for your target job.',
    chips: ['From what I understand, this role needs…', 'I’ve…', 'For example,…', 'That’s why I’m confident…'],
    criterios: ['Connected to what the job needs', 'Gave proof with an example', 'Confident, not arrogant'],
    modelo: 'From what I understand, this role needs someone who can calm down unhappy customers and also find patterns in their complaints. I’ve done both for four years: for example, I created a simple report that helped my team cut repeated complaints by a third. That’s why I’m confident I can bring results quickly.' },
  { k: 'QUESTION 2', tipo: 'fala', seg: 60, audio: 'ri2.mp3', ouve: 'Tell me about a time you made a mistake at work.', enun: 'Listen. Tell a short story: the mistake, what you did, what you learned.',
    chips: ['In my first job, I…', 'I fixed it by…', 'What I learned was…', 'Now I always…'],
    criterios: ['Took responsibility (I, not they)', 'Explained the fix', 'Said what you learned and do now'],
    modelo: 'In my first job, I sent a price list to a client without checking it, and one price was wrong. I called the client the same day, apologized and sent the correct list. What I learned was to always check numbers twice. Now I always ask a colleague to review important documents before they go out.' },
  { k: 'QUESTION 3', tipo: 'fala', seg: 45, audio: 'ri3.mp3', ouve: 'Where do you see yourself in five years?', enun: 'Listen. Answer with ambition, connected to this company.',
    chips: ['In five years, I’d like to…', 'I hope to have…', 'Ideally, here, …'],
    criterios: ['Realistic ambition', 'Connected to the company', 'Used I’d like to / I hope to have…'],
    modelo: 'In five years, I’d like to be leading a small team. I hope to have learned a lot about your products and your customers, and ideally I’d be doing that here, growing with the company.' }] };

var PODE = [
  'I can do a full interview in English, from small talk to goodbye.',
  'I can use my pitch, my stories and my questions naturally.',
  'I can answer unexpected questions calmly.',
  'I’m ready for a real interview in English.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 12: video · cadeira · prova (áudio) (os dados estão no topo do aula.js) */
