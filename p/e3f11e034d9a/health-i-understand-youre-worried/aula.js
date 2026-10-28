/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 3 · LESSON 10 OF 16 · I UNDERSTAND YOU'RE WORRIED · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Empatia com paciente e família: reconhecer a emoção, validar, informar, envolver ("I'm really glad you told me").
   Vídeo oficial: AHRQ (agência de saúde dos EUA), "CUSP: Effective Patient and Family Communication" (1:51),
   legenda conferida. Áudios: pacientes e familiares preocupados (edge-tts).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 10, kick: 'ENGLISH FOR HEALTHCARE · MODULE 3 · LESSON 10 OF 16', titulo: ['I Understand', 'You’re Worried'], tema: 'Empathy with patients and families', placa: 'LESSON 10',
  lugarConversa: 'THE WAITING WINDOW', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'Worried patients and families don’t need perfect English: they need to feel heard. Today you learn empathy phrases and how to involve the family.',
  chips: ['A nurse involves the family', 'Five worried people', 'From cold to caring'], botao: 'Start the lesson',
  nota: 'Name it, validate it, then help: “I can see you’re worried. That’s completely understandable. Let me explain what’s happening.”' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · Patient and Family', t: 'A nurse talks to a patient and her husband.', p: 'One question before, then the video, then the questions.' },
  { k: 'multipla', est: 'l', min: 11, img: 'capa', rot: 'II · Five Worried People', t: 'Listen. Choose the most caring answer.', p: 'Play each person once. Choose. Then say it with a warm voice.' },
  { k: 'transforma', est: 'o', min: 10, img: 'conversa', rot: 'III · From Cold to Caring', t: 'Same information, more care.', p: 'Read the cold answer and the clue. Say it the caring way.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 10: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'UxLBXCjD-yM', titulo: 'CUSP: Effective Patient and Family Communication', fonte: 'AHRQ (U.S. AGENCY FOR HEALTHCARE RESEARCH AND QUALITY) · 2 MIN',
  antes: { q: 'Why is it important to talk to the family, not only the patient?', h: 'They care for the patient at home; they notice things; they have questions too.' },
  ouvir: 'Listen: How does the nurse involve the husband? What problem does he mention?',
  perguntas: [
    { q: 'Why is the nurse glad that Mr. Adams is there?', h: 'He can better understand what to expect at home and how her recovery is going.' },
    { q: 'What steps did they follow before walking?', h: 'Pain medication an hour before; sit on the edge of the bed to check dizziness; stand for a minute; then walk.' },
    { q: 'Why is the blood thinner important?', h: 'It prevents blood clots; walking also helps the circulation.' },
    { q: 'What problem does the husband mention?', h: 'They are not clear on the dose of each medicine.' },
    { q: 'How does the nurse react?', h: '“I’m really glad you told me this. This is exactly the kind of information I need to know.” She reviews the doses now and again at discharge, with printed materials.' }],
  fecho: 'When a family raises a problem, thank them: it is information you need.' };

var MULTIPLA = { rot: 'FIVE WORRIED PEOPLE', fim: 'Name it, validate it, then help with something concrete.', itens: [
  { audio: 'wr1.mp3', ouve: 'Is my son going to be okay? Nobody is telling me anything!', q: 'A mother in the corridor. The most caring answer?', ops: ['Calm down, please.', 'I can see how worried you are. I’ll find out exactly what’s happening and come back to you in ten minutes.', 'I don’t know, I’m not his nurse.'], c: 1, por: 'Name the emotion, promise a concrete action and a time.' },
  { audio: 'wr2.mp3', ouve: 'I’ve been waiting for three hours. I’m really scared it’s something serious.', q: 'A patient in the waiting room. The most caring answer?', ops: ['Three hours is a long time, especially when you’re scared. Let me check where you are in the queue and what the next step is.', 'Everyone is waiting.', 'It’s probably nothing.'], c: 0, por: 'Validate (a long time, scared) and give information.' },
  { audio: 'wr3.mp3', ouve: 'I don’t understand all these medicines. What if I give my dad the wrong one?', q: 'A daughter at discharge. The most caring answer?', ops: ['It’s on the paper.', 'Ask his doctor.', 'That’s a really good question, and I’m glad you asked. Let’s go through each one together, and I’ll give you a written chart.'], c: 2, por: 'Thank, involve, and give a tool (a chart).' },
  { audio: 'wr4.mp3', ouve: 'I’m so nervous about the injection. I fainted last time.', q: 'A patient before an injection. The most caring answer?', ops: ['It’s just a little needle, don’t be silly.', 'Thank you for telling me. Let’s do it with you lying down, and I’ll tell you before each step.', 'Look away and be brave.'], c: 1, por: 'Thank, adapt (lying down), and keep them informed.' },
  { audio: 'wr5.mp3', ouve: 'Can I stay with her during the procedure?', q: 'A husband before a small procedure. The most caring answer?', ops: ['I understand you want to be with her. For this part you’ll need to wait outside, but I’ll come and get you as soon as it’s finished.', 'No.', 'Why?'], c: 0, por: 'Acknowledge the wish, explain the rule kindly, offer an alternative.' }] };

var TRANSFORMA = { rot: 'FROM COLD TO CARING', fim: 'The information is the same. The feeling is not.', itens: [
  { de: 'Calm down.', pista: 'I can see… That’s understandable.', para: 'I can see you’re really upset, and that’s completely understandable.' },
  { de: 'It’s nothing.', pista: 'I understand why… Let me explain…', para: 'I understand why you’re worried. Let me explain what we found.' },
  { de: 'You have to wait.', pista: 'I’m sorry… I’ll…', para: 'I’m sorry for the wait. I’ll let you know as soon as the doctor is free.' },
  { de: 'That’s not my job.', pista: 'Let me find someone who…', para: 'That’s a good question. Let me find someone who can help you with that.' },
  { de: 'Read the leaflet.', pista: 'Let’s go through it together…', para: 'Let’s go through it together, and then you can keep the leaflet.' },
  { de: 'Why didn’t you tell us before?', pista: 'Thank you for telling me…', para: 'Thank you for telling me. That’s really helpful to know.' }] };

var PODE = [
  'I can name and validate emotions: I can see…, That’s understandable.',
  'I can thank families for information: I’m really glad you told me.',
  'I can follow empathy with a concrete action and a time.',
  'I can say no to a request kindly, with an alternative.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 10: video · multipla (áudio) · transforma (os dados estão no topo do aula.js) */
