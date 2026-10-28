/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 1 · LESSON 1 OF 16 · FIRST CONTACT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+), 16 aulas, 4 módulos.
   Para médicos, enfermagem, dentistas, farmacêuticos e fisioterapeutas: o núcleo é o mesmo, os exemplos variam.
   Aula 1: o primeiro contato com o roteiro AIDET (Acknowledge, Introduce, Duration, Explanation, Thank you) e
   "I'm going to…". Vídeo: Lecturio Nursing, "AIDET for Patient Communication" (3:47), legenda conferida em 15/10.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 1, kick: 'ENGLISH FOR HEALTHCARE · MODULE 1 · LESSON 1 OF 16', titulo: ['First', 'Contact'], tema: 'The first thirty seconds with a patient', placa: 'LESSON 01',
  lugarConversa: 'THE CORRIDOR', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'Doctor, nurse, dentist, pharmacist or physio: the first thirty seconds decide how a patient feels. Today you learn a five-step routine for any first contact.',
  chips: ['The AIDET routine', 'I’m going to…', 'Your first contact'], botao: 'Start the lesson',
  nota: 'A patient who knows who you are, what you will do and how long it takes is a calmer patient.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · AIDET', t: 'A nurse explains a five-step routine.', p: 'First one question, then the video, then more questions.' },
  { k: 'ordem', est: 'f', min: 7, img: 'capa', rot: 'II · At the Dentist', t: 'A dentist’s first contact, in pieces.', p: 'Tap the five steps in order. Then say it like a dentist.' },
  { k: 'transforma', est: 'o', min: 9, img: 'conversa', rot: 'III · I’m Going To…', t: 'Tell the patient what you will do.', p: 'Read the action and the clue. Say it to the patient.' },
  { k: 'prova', est: 'o', min: 12, img: 'capa', rot: 'IV · Your First Contact', t: 'Your profession, your patient.', p: 'Twenty seconds to plan. Then the five steps, out loud.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'r3IxkCqdMCI', titulo: 'AIDET for Patient Communication', fonte: 'LECTURIO NURSING · 4 MIN',
  antes: { q: 'What do you say in the first ten seconds with a new patient?', h: 'Hello, my name, my role, what I’m going to do…' },
  ouvir: 'Listen: What do the five letters A-I-D-E-T stand for?',
  perguntas: [
    { q: 'What are the five steps of AIDET?', h: 'Acknowledge, Introduce, Duration, Explanation, Thank you.' },
    { q: 'Why is “Introduce” important in a hospital?', h: 'Many people come in and out in different scrub colors; patients get confused about who is who.' },
    { q: 'Why tell the patient the duration?', h: 'So the patient knows what to expect: “I can do anything for five minutes.”' },
    { q: 'What does the nurse say in the example?', h: '“Good morning, Miss Jones, it’s me, Nurse Nancy. I’m here to insert the Foley… It should take about 10 minutes… Do you have any questions before we get started?”' },
    { q: 'How does she thank the patient?', h: '“Thank you for your time and cooperation. I know that wasn’t the most comfortable procedure.”' }],
  fecho: 'AIDET works for every profession: you will hear it in a pharmacy and in a dental office too.' };

var ORDEM = { rot: 'AT THE DENTIST', pede: 'Tap the five AIDET steps in order.',
  passos: ['Good afternoon, Mr. Ellis. Thanks for waiting.', 'I’m Dr. Lima, your dentist today.', 'This will take about twenty minutes.', 'I’m going to check the tooth that hurts and take a small X-ray. You may feel a little pressure, but it shouldn’t hurt.', 'Thank you, Mr. Ellis. You did great.'],
  chips: ['Acknowledge', 'Introduce', 'Duration', 'Explanation', 'Thank you'],
  modelo: 'Good afternoon, Mr. Ellis, thanks for waiting. I’m Dr. Lima, your dentist today. This will take about twenty minutes. I’m going to check the tooth that hurts and take a small X-ray… Thank you, Mr. Ellis. You did great.' };

var TRANSFORMA = { rot: 'I’M GOING TO…', fim: 'I’m going to + verb: the patient always knows the next step.', itens: [
  { de: 'NURSE: take blood pressure', pista: 'I’m going to…', para: 'I’m going to take your blood pressure now. It will feel a little tight on your arm.' },
  { de: 'DOCTOR: listen to the chest', pista: 'I’m going to… Could you…?', para: 'I’m going to listen to your chest. Could you take a deep breath for me?' },
  { de: 'DENTIST: numb the area', pista: 'I’m going to… You may feel…', para: 'I’m going to numb the area. You may feel a small pinch.' },
  { de: 'PHYSIO: check knee movement', pista: 'I’m going to… Tell me if…', para: 'I’m going to check how your knee moves. Tell me if anything hurts.' },
  { de: 'PHARMACIST: check the prescription', pista: 'I’m going to… It will take…', para: 'I’m going to check your prescription. It will take about five minutes.' },
  { de: 'NURSE: give an injection', pista: 'I’m going to… a small scratch', para: 'I’m going to give you an injection in your arm. You’ll feel a small scratch.' }] };

var PROVA = { rot: 'YOUR FIRST CONTACT', tarefas: [
  { k: 'YOUR PROFESSION', tipo: 'fala', prep: 20, seg: 60, enun: 'Choose a situation from YOUR profession. Twenty seconds to plan. Then the five AIDET steps, out loud.',
    texto: '<b>Choose one:</b> a nurse taking blood · a doctor examining a sore throat · a dentist cleaning teeth · a pharmacist explaining a new medicine · a physio starting a back assessment.',
    chips: ['Good morning, Mr./Ms. …', 'I’m …, your … today.', 'This will take about…', 'I’m going to…', 'You may feel…', 'Do you have any questions?', 'Thank you for…'],
    criterios: ['Acknowledged the patient by name', 'Introduced name and role', 'Said the duration', 'Explained with I’m going to…', 'Asked for questions and thanked'],
    modelo: 'Good morning, Ms. Carter, thanks for waiting. I’m Rafael, the physiotherapist who will look after you today. This first session will take about forty minutes. I’m going to ask you some questions about your back pain, and then I’m going to check how you move. Tell me if anything hurts, and we’ll stop. Do you have any questions before we start? … Thank you, Ms. Carter, you did really well today.' }] };

var PODE = [
  'I can greet a patient and introduce my name and role.',
  'I can say how long something will take.',
  'I can explain what I’m going to do, step by step.',
  'I can thank the patient at the end, especially after something uncomfortable.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 01: video · ordem · transforma · prova (os dados estão no topo do aula.js) */
