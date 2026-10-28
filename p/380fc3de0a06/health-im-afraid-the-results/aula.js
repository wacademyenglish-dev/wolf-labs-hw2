/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 3 · LESSON 9 OF 16 · I'M AFRAID THE RESULTS… · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Dar uma notícia difícil com o roteiro SPIKES (Setting, Perception, Invitation, Knowledge, Emotions, Strategy &
   Summary) e o "aviso" (I'm afraid… / Unfortunately…). Vídeo: Royal College of Surgeons of Edinburgh, "Breaking Bad
   News" (3:00), legenda conferida em 15/10. Casos FICTÍCIOS, um por profissão.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 9, kick: 'ENGLISH FOR HEALTHCARE · MODULE 3 · LESSON 9 OF 16', titulo: ['I’m Afraid', 'the Results…'], tema: 'Breaking difficult news', placa: 'LESSON 09',
  lugarConversa: 'THE FAMILY ROOM', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'The hardest conversations need the clearest English. Today you watch a surgeon give difficult news to a son, and you learn a six-step route that works in every profession.',
  chips: ['A surgeon breaks news', 'The SPIKES route', 'Your difficult conversation'], botao: 'Start the lesson',
  nota: 'Warn first, then say it clearly, then stop and listen. Silence is part of the conversation.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · Breaking Bad News', t: 'A doctor updates a patient’s son.', p: 'One question before, then the video, then the questions.' },
  { k: 'ordem', est: 'f', min: 8, img: 'capa', rot: 'II · The SPIKES Route', t: 'Six steps, in order.', p: 'Tap the six sentences in order. Then name each step.' },
  { k: 'descobre', est: 'f', min: 8, img: 'conversa', rot: 'III · Clear and Kind', t: 'Too blunt, too vague, or clear and kind?', p: 'Compare A and B. Which one helps the patient?' },
  { k: 'prova', est: 'o', min: 14, img: 'capa', rot: 'IV · Your Conversation', t: 'A difficult conversation from your profession.', p: 'Thirty seconds to plan. Then up to two minutes, slowly.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'NmNBq3TwtqE', titulo: 'Breaking Bad News - RCSEd Communications Skills Video Competition 2016', fonte: 'ROYAL COLLEGE OF SURGEONS OF EDINBURGH · 3 MIN',
  antes: { q: 'Where would you give difficult news to a family? What do you do first?', h: 'In a quiet, private room. Introduce yourself, ask what they already know.' },
  ouvir: 'Listen: What does the doctor do before giving the news? How does she say it?',
  perguntas: [
    { q: 'What does she do first?', h: 'She introduces herself and invites Mr. James to a quieter, more private side room, and asks if he wants anyone with him.' },
    { q: 'How does she find out what he already knows?', h: '“Can you tell me what you already know about your mother coming to hospital today?”' },
    { q: 'How does she prepare him for the news (the “warning shot”)?', h: '“Unfortunately the operation hasn’t gone quite as straightforward as we’d hoped.”' },
    { q: 'How does she explain the tracheostomy in simple words?', h: '“We had to make an opening from the skin of her neck into her windpipe, which allows the air to go to her lungs.”' },
    { q: 'What is the plan, and how does she close?', h: 'Stabilize her in the Intensive Care Unit overnight, then tests (a camera down her throat); then a long-term plan. She invites questions, offers future contact and takes him to see his mother.' }],
  fecho: 'Private place → what do you know? → warning shot → clear facts in plain words → empathy → plan → questions.' };

var ORDEM = { rot: 'THE SPIKES ROUTE', pede: 'Tap the six steps in order.',
  passos: ['S · Setting: “Shall we go to a quieter room where we can talk?”', 'P · Perception: “Can you tell me what you already know?”', 'I · Invitation: “Would you like me to explain the results in detail?”', 'K · Knowledge: “I’m afraid the results aren’t what we hoped. The scan shows…”', 'E · Emotions: “I can see this is a shock. Take your time.”', 'S · Strategy and Summary: “Here’s what we’ll do next… What questions do you have?”'],
  chips: ['Setting', 'Perception', 'Invitation', 'Knowledge', 'Emotions', 'Strategy & Summary'],
  modelo: 'Setting → Perception → Invitation → Knowledge (with a warning shot) → Emotions → Strategy and Summary.' };

var DESCOBRE = {
  pares: [
    { a: '“{You have cancer.}”', b: '“{I’m afraid I have some difficult news.} The results show a tumor.”', q: 'Which one prepares the patient?', r: 'B. A <b>warning shot</b> (I’m afraid… / Unfortunately…) gives the person a second to prepare.' },
    { a: '“{There are some abnormal cellular changes of uncertain significance.}”', b: '“{The biopsy shows cancer cells.} It’s at an early stage.”', q: 'Which one is clear?', r: 'B. After the warning, say it <b>clearly, in plain words</b>. Vague jargon creates confusion and false hope.' },
    { a: '“{Don’t cry, it will be fine.}”', b: '“{I can see this is very hard to hear.} Take your time.”', q: 'Which one respects the emotion?', r: 'B. <b>Name the emotion</b> and allow silence. Don’t promise what you can’t know.' },
    { a: '“{OK, any questions? No? Bye.}”', b: '“{Here’s what will happen next.} … {What questions do you have?}”', q: 'Which one closes well?', r: 'B. A <b>plan</b> and an open invitation for questions (What questions…? not Any questions?).' }],
  regra: [['WARNING SHOT', 'I’m afraid… / Unfortunately… / I have some difficult news.'], ['CLEAR', 'say the key fact in plain words'], ['EMPATHY', 'I can see this is a shock. / Take your time.'], ['PLAN + QUESTIONS', 'Here’s what we’ll do next. What questions do you have?']],
  armas: [['TOO BLUNT', 'You have cancer.', 'I’m afraid I have some difficult news…', 'warn first'], ['TOO VAGUE', 'abnormal changes of uncertain significance', 'the biopsy shows cancer cells', 'plain words'], ['FALSE PROMISE', 'Don’t worry, it will be fine.', 'We’re going to do everything we can.', 'honest hope'], ['CLOSED', 'Any questions?', 'What questions do you have?', 'open invitation']] };

var PROVA = { rot: 'YOUR CONVERSATION', tarefas: [
  { k: 'YOUR PROFESSION', tipo: 'fala', prep: 30, seg: 120, enun: 'Choose a case from your profession. Thirty seconds to plan. Then use SPIKES (your teacher is the patient).',
    texto: '<b>Choose one (fictional cases):</b><br>DOCTOR · a biopsy shows early-stage breast cancer.<br>DENTIST · a tooth can’t be saved and must be extracted.<br>PHYSIO · an MRI shows a torn ligament that needs surgery.<br>NURSE · a parent’s surgery will be delayed by a day.<br>PHARMACIST · a medicine the patient depends on is out of stock for two weeks.',
    chips: ['Shall we sit down somewhere quiet?', 'Can you tell me what you already know?', 'I’m afraid…', 'Unfortunately…', 'I can see this is hard to hear.', 'Here’s what we’ll do next.', 'What questions do you have?'],
    criterios: ['Setting and perception (asked what they know)', 'A warning shot before the news', 'The key fact in plain words', 'Named the emotion and allowed silence', 'A clear plan', 'Invited questions'],
    modelo: '(Dentist) Thanks for coming back, Mr. Silva. Shall we sit here? Can you tell me what you remember from our last visit? … OK. I’m afraid I have some disappointing news. The X-ray shows the crack goes down into the root, so unfortunately we can’t save this tooth. … I can see this isn’t what you wanted to hear. Take your time. … Here’s what we can do: we’ll take the tooth out next week, under local anesthetic, and later we can talk about an implant or a bridge. What questions do you have?' }] };

var PODE = [
  'I can follow SPIKES: setting, perception, invitation, knowledge, emotions, strategy.',
  'I can give a warning shot: I’m afraid… / Unfortunately…',
  'I can say the key fact clearly, in plain words.',
  'I can respond to emotion and close with a plan and open questions.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 09: video · ordem · descobre · prova (os dados estão no topo do aula.js) */
