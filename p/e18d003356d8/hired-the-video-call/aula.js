/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 3 · LESSON 9 OF 12 · THE VIDEO CALL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   Entrevista online: preparo, problemas técnicos (You’re on mute, You’re breaking up, I lost you), etiqueta.
   Vídeo The Companies Expert (0:00–2:00). Áudios: entrevistadores (edge-tts).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 9, kick: 'WOLF HIRED · MODULE 3 · LESSON 9 OF 12', titulo: ['The Video', 'Call'], tema: 'Online interviews: setup, technical problems and etiquette', placa: 'LESSON 9',
  lugarConversa: 'THE HOME OFFICE', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: 'Most first interviews now happen on a screen. The mic fails, the video freezes, the cat walks in. Today you learn to prepare the call and to solve every technical problem in calm, natural English.',
  chips: ['Ace the video interview', 'Five things that go wrong', 'Fix the call'], botao: 'Start the lesson',
  nota: 'A technical problem is not a disaster. Staying calm and solving it politely shows the interviewer exactly how you work.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 6, img: 'conversa', rot: 'I · Set It Up Right', t: 'Tips for an online interview.', p: 'One question before, then the video, then the questions.' },
  { k: 'multipla', est: 'l', min: 12, img: 'capa', rot: 'II · Five Things That Go Wrong', t: 'Listen to the interviewer. What do you say?', p: 'Play the line. Read the three answers. Which one is best?' },
  { k: 'erros', est: 'f', min: 12, img: 'conversa', rot: 'III · Fix the Call', t: 'A candidate made five mistakes on a video call.', p: 'Find the five problems. Say a better version, then tap.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: '9SHEJXbtMnI', titulo: 'Video Interview Tips: How to Ace an Online Job Interview', fonte: 'THE COMPANIES EXPERT · 0:00–2:00', inicio: 0, fim: 120,
  antes: { q: 'What can go wrong in an online interview?', h: 'Bad internet, no sound, a noisy room, bad light, notifications, the wrong background…' },
  ouvir: 'Listen: Write down five tips.',
  perguntas: [
    { q: 'When should you have everything ready, and what materials?', h: '30 minutes before: your CV, the job posting, notes about the company, your questions, the recruiter’s emails.' },
    { q: 'Computer or phone? Wi-Fi or cable?', h: 'Computer, and a wired connection if possible.' },
    { q: 'Where should the camera and the light be?', h: 'The camera slightly above eye level; the light in front of you, not behind.' },
    { q: 'What does he say about virtual backgrounds?', h: 'Don’t use one: people may think you’re hiding something. Just make sure the real background is professional.' },
    { q: 'Where should you look, and why the sticky note?', h: 'Into the camera, for eye contact. A smiley face on a sticky note reminds you to smile.' }],
  fecho: 'Ready 30 minutes early, computer and cable, camera at eye level, light in front, look at the camera, smile.' };

var MULTIPLA = { rot: 'FIVE THINGS THAT GO WRONG', fim: 'Name the problem, fix it, apologize briefly, and continue. No drama.', itens: [
  { audio: 'vc1.mp3', ouve: 'Hi! Can you hear me? I think you’re on mute.', q: 'You unmute. What do you say?', ops: ['Sorry about that! Can you hear me now?', 'Oh no, this computer is terrible.', 'Yes.'], c: 0, por: 'Short apology + check.' },
  { audio: 'vc2.mp3', ouve: 'Sorry, you’re breaking up a little. I missed the last part.', q: 'What is the best answer?', ops: ['What part?', 'I’m sorry, I’ll move closer to the router. I was saying that I managed the project for two years.', 'It’s your internet, not mine.'], c: 1, por: 'Fix it and repeat the key point.' },
  { audio: 'vc3.mp3', ouve: 'Your video froze for a moment. Okay, you’re back.', q: 'What do you say?', ops: ['Thank you. Should I repeat my last answer?', 'Okay.', 'This always happens to me, sorry, sorry, sorry.'], c: 0, por: 'Calm, and offer to repeat.' },
  { audio: 'vc4.mp3', ouve: 'There’s a bit of an echo on your side.', q: 'What is the best answer?', ops: ['I don’t hear any echo.', 'Let me know if it continues.', 'Oh, let me put on my headphones. Is that better?'], c: 2, por: 'Take action and check.' },
  { audio: 'vc5.mp3', ouve: 'Could you share your screen and show us the project you mentioned?', q: 'What is the best answer?', ops: ['Sure, give me one second. Can you see my screen now?', 'I don’t know how to do that.', 'Now? I didn’t prepare it.'], c: 0, por: 'Ready, and check what they see.' }] };

var ERROS = { rot: 'A VIDEO CALL THAT WENT WRONG', tipo: 'nota', rotulo: 'PROBLEMS', pede: 'Find the five problems. Say a better version, then tap.', fim: 'Five problems fixed. Now say the good version out loud.', dica: 'The student says the better version before tapping.', partes: [
  'INTERVIEWER: Hi, can you hear me? CANDIDATE: ',
  ['Hello? Hello? Is this working???', 'Hi! Yes, I can hear you. Can you hear me okay?', 'stay calm and check the connection politely'], ' INTERVIEWER: You’re on mute now. CANDIDATE: ',
  ['Ugh, this stupid computer!', 'Sorry about that. Can you hear me now?', 'a short apology, no complaints'], ' INTERVIEWER: Tell me about your last project. CANDIDATE: (dog barking) ',
  ['Wait, wait. (leaves for two minutes)', 'Excuse me for one second. (mutes, comes back) Sorry about that.', 'mute, be quick, apologize once'], ' INTERVIEWER: You froze. Could you repeat? CANDIDATE: ',
  ['Repeat what?', 'Of course. I was saying that I led a team of four.', 'repeat the key point'], ' At the end, CANDIDATE: ',
  ['Okay, bye. (closes the call)', 'Thank you so much for your time. I’ll look forward to hearing from you.', 'close warmly before leaving the call'], ''] };

var PODE = [
  'I can prepare my space, camera and light for a video interview.',
  'I can solve problems politely: Sorry about that. Can you hear me now?',
  'I can react to a frozen video or bad connection and repeat my point.',
  'I can open and close a video call professionally.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 09: video · multipla (áudio) · erros (os dados estão no topo do aula.js) */
