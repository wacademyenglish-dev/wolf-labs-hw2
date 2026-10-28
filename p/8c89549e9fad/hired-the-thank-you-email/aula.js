/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 4 · LESSON 11 OF 12 · THE THANK-YOU EMAIL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   O e-mail depois da entrevista: gratidão, entusiasmo, personalização; assunto, abertura e fecho; follow-up.
   Vídeo Self Made Millennial (1:44–4:43). Pessoas e empresas FICTÍCIAS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 11, kick: 'WOLF HIRED · MODULE 4 · LESSON 11 OF 12', titulo: ['The Thank-You', 'Email'], tema: 'A short, personal email that keeps you in their mind', placa: 'LESSON 11',
  lugarConversa: 'THE OUTBOX', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: 'Only about one in five candidates sends a thank-you email. Today you learn to write a short, warm, personal one in under ten minutes, and to follow up if nobody answers.',
  chips: ['Three ingredients', 'Fix the email', 'Write yours'], botao: 'Start the lesson',
  nota: 'Send it within 24 hours. Mention one specific thing from the conversation: that’s what makes it memorable.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · The Three Ingredients', t: 'An HR leader shares her template and two real emails.', p: 'One question before, then the video, then the questions.' },
  { k: 'erros', est: 'f', min: 10, img: 'capa', rot: 'II · Fix the Email', t: 'A candidate wrote a thank-you email with five problems.', p: 'Find the five problems. Say a better version, then tap.' },
  { k: 'formulario', est: 'w', min: 16, img: 'conversa', rot: 'III · Write Yours', t: 'Use your interview notes to write the email.', p: 'Read the notes. Write each part of the email in short, clear English.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 11: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'HZw-DY6ryQo', titulo: 'How to Write a Thank You Email After the Interview', fonte: 'SELF MADE MILLENNIAL · 1:44–4:43', inicio: 104, fim: 283,
  antes: { q: 'Do people send thank-you emails after interviews in Brazil? Do you?', h: 'Not very often. That’s exactly why it helps you stand out.' },
  ouvir: 'Listen: What are the three ingredients, and when should you send it?',
  perguntas: [
    { q: 'When should you send the email?', h: 'Within 24 hours.' },
    { q: 'What did one candidate do that was even faster?', h: 'She wrote paper thank-you notes in her car and gave them to the receptionist.' },
    { q: 'What are the three ingredients?', h: 'Gratitude, enthusiasm and personalization.' },
    { q: 'What was special about her second example?', h: 'It mentioned the interviewer’s hard work, showed enthusiasm, and had a P.S. with a useful resource.' },
    { q: 'What subject lines does she like?', h: '“Great meeting you”, “Thank you”, “Great speaking with you, [name]”.' }],
  fecho: 'Thank you + one specific moment from the conversation + “I’m very excited about this opportunity” + “I look forward to hearing about next steps.”' };

var ERROS = { rot: 'A THANK-YOU EMAIL WITH PROBLEMS', tipo: 'nota', rotulo: 'PROBLEMS', pede: 'Find the five problems. Say a better version, then tap.', fim: 'Five problems fixed. Now read the good email out loud.', dica: 'The student says the better version before tapping.', partes: [
  'Subject: ', ['Interview', 'Great speaking with you today, Ms. Rowe', 'a warm, specific subject line'], '\n',
  ['Hey!!!', 'Hi Ms. Rowe,', 'professional greeting with the name'], '\n',
  ['Thanks for the interview.', 'Thank you for taking the time to meet with me today.', 'full, warm gratitude'], ' ',
  ['It was nice.', 'I really enjoyed hearing about your plans to open the new office in Recife.', 'personalize: one specific topic'], ' ',
  ['So, did I get the job?', 'I’m very excited about this opportunity and I look forward to hearing about next steps.', 'enthusiasm, not pressure'], '\nAll the best,\nRafael'] };

var FORMULARIO = { rot: 'YOUR THANK-YOU EMAIL · BLUEHARBOR TRAVEL (FICTIONAL)', perfilRot: 'YOUR NOTES FROM THE INTERVIEW',
  perfil: '<p>Interviewer: <b>Daniel Park</b>, Head of Sales.</p><p>Role: <b>Junior Sales Consultant</b>.</p><p>Best moment: he talked about their <b>new trips for families with kids</b>. You loved it.</p><p>He said they will decide <b>next week</b>.</p><p>You mentioned an article about <b>family travel trends</b>. You promised to send it.</p>',
  fim: 'Short, warm and personal. Send it within 24 hours.',
  campos: [
    { r: 'Subject line *', ph: '', aceita: ['Great speaking with you, Daniel', 'Great speaking with you today', 'Great meeting you today', 'Great meeting you, Daniel', 'Thank you', 'Thank you, Daniel', 'Great speaking with you'] },
    { r: 'Greeting *', ph: '', aceita: ['Hi Daniel,', 'Hi Daniel', 'Dear Daniel,', 'Dear Daniel', 'Hello Daniel,', 'Dear Mr. Park,', 'Hi Mr. Park,'] },
    { r: 'Thank him *', ph: '', aceita: ['Thank you for taking the time to meet with me today.', 'Thank you for taking the time to meet with me.', 'Thank you for meeting with me today.', 'Thank you for your time today.', 'Thank you for the interview today.'] },
    { r: 'One specific moment *', ph: '', aceita: ['I really enjoyed hearing about your new trips for families with kids.', 'I loved hearing about your new trips for families.', 'I really enjoyed hearing about your new family trips.', 'I enjoyed hearing about your new trips for families with kids.', 'I loved hearing about your new trips for families with kids.'] },
    { r: 'Enthusiasm + next steps *', ph: '', aceita: ['I am very excited about this opportunity and I look forward to hearing about next steps.', 'I’m very excited about this opportunity and I look forward to hearing about next steps.', "I'm very excited about this opportunity and I look forward to hearing about next steps.", 'I am very excited about this opportunity and look forward to hearing about next steps.', 'I look forward to hearing about next steps.'] },
    { r: 'P.S. *', ph: '', aceita: ['P.S. Here is the article about family travel trends.', 'P.S. Here is the article I mentioned about family travel trends.', 'P.S. Here’s the article about family travel trends.', "P.S. Here's the article about family travel trends.", 'P.S. Here is the article I mentioned.', "P.S. Here's the article I mentioned."] }] };

var PODE = [
  'I can write a thank-you email within 24 hours.',
  'I can include gratitude, enthusiasm and one specific moment.',
  'I can write a good subject line, greeting and closing.',
  'I can add a useful P.S. and follow up politely.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 11: video · erros · formulario (os dados estão no topo do aula.js) */
