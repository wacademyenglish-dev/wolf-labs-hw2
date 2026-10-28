/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 3 · LESSON 8 OF 12 · YOUR QUESTIONS FOR THEM · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   Perguntas no fim da entrevista: perguntas indiretas (Could you tell me what…? I was wondering if…), ordem da frase.
   Vídeo CareerVidz (0:00–2:55).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 8, kick: 'WOLF HIRED · MODULE 3 · LESSON 8 OF 12', titulo: ['Your Questions', 'for Them'], tema: 'Smart, polite questions at the end of the interview', placa: 'LESSON 8',
  lugarConversa: 'THE LAST FIVE MINUTES', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: '“Do you have any questions for us?” Never say no. Today you learn smart questions that impress the interviewer, and the polite, indirect way to ask them in English.',
  chips: ['Five smart questions', 'Direct to polite', 'Your turn to interview them'], botao: 'Start the lesson',
  nota: 'In indirect questions, the word order changes: “What IS the team like?” → “Could you tell me what the team IS like?”' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 7, img: 'conversa', rot: 'I · Never Say “No Questions”', t: 'An interview coach shares five questions.', p: 'First one question, then the video, then the questions.' },
  { k: 'transforma', est: 'f', min: 14, img: 'capa', rot: 'II · Direct to Polite', t: 'Make every question more professional.', p: 'Read the direct question and the clue. Say the polite version.' },
  { k: 'cadeira', est: 'o', min: 14, img: 'conversa', rot: 'III · Your Turn to Interview Them', t: 'Your teacher is the interviewer. You ask.', p: 'Ask each question politely. Listen and react to the answers.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: '2u_5Lyz6TCA', titulo: 'Top 5 Questions to Ask at the End of an Interview', fonte: 'CAREERVIDZ · 0:00–2:55', inicio: 0, fim: 175,
  antes: { q: 'The interviewer asks: “Do you have any questions for us?” What do most people say?', h: '“No, you covered everything.” That’s a missed chance.' },
  ouvir: 'Listen: Write down the five questions.',
  perguntas: [
    { q: 'What is question one, and why is it good?', h: '“What’s the one thing I could do in this role to help you succeed?” It shows you want to do a great job for them.' },
    { q: 'What does asking about the team show?', h: 'That you’re team-focused and already imagining yourself in the role.' },
    { q: 'Why ask about the company’s plans for the next five to ten years?', h: 'It shows you plan to stay for the long term.' },
    { q: 'Which is his favorite question?', h: '“What advice would you give to the successful candidate who wants to excel in the position?”' },
    { q: 'What is question five?', h: 'What the next steps are and when you can contact them about the result.' }],
  fecho: 'Ask two or three. About the role, the team, the future, advice, and the next steps.' };

var TRANSFORMA = { rot: 'DIRECT TO POLITE', fim: 'Could you tell me / I was wondering / Do you know + statement order (subject before verb).', itens: [
  { de: 'What is the team like?', pista: 'Could you tell me what…?', para: 'Could you tell me what the team is like?' },
  { de: 'How do you measure success in this role?', pista: 'I was wondering how…', para: 'I was wondering how you measure success in this role.' },
  { de: 'Is there training for new people?', pista: 'Could you tell me if…?', para: 'Could you tell me if there is any training for new employees?' },
  { de: 'What are the biggest challenges?', pista: 'I’d love to know what…', para: 'I’d love to know what the biggest challenges for this team are right now.' },
  { de: 'When will I know the result?', pista: 'Could you tell me what the next steps are and when…?', para: 'Could you tell me what the next steps are and when I might hear from you?' },
  { de: 'Why did the last person leave?', pista: 'Is this a new role, or…?', para: 'Is this a new role, or are you replacing someone?' }] };

var CADEIRA = { itens: [
  { alvo: 'Thank them and say you have a few questions.', dica: 'Thank you. Yes, I have a few questions, if that’s okay.', resp: 'Of course, go ahead.' },
  { alvo: 'Ask about a typical day.', dica: 'Could you tell me what a typical day in this role looks like?', resp: 'Mornings are meetings with clients; afternoons, reports and planning.' },
  { alvo: 'Ask about the team.', dica: 'I was wondering who I would be working with most closely.', resp: 'A team of six, plus two people in our Lisbon office.' },
  { alvo: 'Ask about success.', dica: 'How would you measure success in the first six months?', resp: 'Learning our systems and managing five accounts on your own.' },
  { alvo: 'React and connect to your experience.', dica: 'That sounds great. In my current job, I…', resp: 'Good to know. Any other questions?' },
  { alvo: 'Ask about challenges.', dica: 'I’d love to know what the biggest challenge for the team is right now.', resp: 'Honestly, we’re growing fast, and our processes are not keeping up.' },
  { alvo: 'Ask for advice.', dica: 'What advice would you give to someone starting in this role?', resp: 'Ask a lot of questions in the first month. Nobody expects you to know everything.' },
  { alvo: 'Ask about the next steps.', dica: 'Could you tell me what the next steps are?', resp: 'We’ll decide by Friday and call the finalists for a second interview.' },
  { alvo: 'Close the interview warmly.', dica: 'Thank you so much for your time. I really enjoyed our conversation.', resp: 'Thank you, it was a pleasure.' }] };

var PODE = [
  'I can always ask two or three smart questions at the end.',
  'I can make indirect questions: Could you tell me what… is?',
  'I can use I was wondering… and I’d love to know…',
  'I can ask about the next steps and close the interview warmly.'
];

/* MECÂNICAS VARIADAS */
/* HIRED 08: video · transforma · cadeira (os dados estão no topo do aula.js) */
