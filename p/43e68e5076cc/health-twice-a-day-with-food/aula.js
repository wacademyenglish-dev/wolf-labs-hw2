/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 2 · LESSON 7 OF 16 · TWICE A DAY WITH FOOD · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Orientar a medicação: dose, frequência (once / twice / three times a day, every 8 hours), com ou sem comida, should,
   must, avoid, efeitos colaterais e quando procurar ajuda. Vídeo: PharmAchieve, "PEBC OSCE Practice Station - Patient
   picking up new prescription" (6:23), trecho 0:23–5:00. Remédios e rótulos do exercício são exemplos genéricos.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 7, kick: 'ENGLISH FOR HEALTHCARE · MODULE 2 · LESSON 7 OF 16', titulo: ['Twice a Day', 'With Food'], tema: 'Explaining a medication', placa: 'LESSON 07',
  lugarConversa: 'THE PILL ORGANIZER', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'Pharmacist, doctor, nurse or dentist: everyone explains medicines. Today you watch a pharmacist counsel a patient and learn to turn a label into clear, safe instructions.',
  chips: ['A pharmacist counsels', 'Label to plain English', 'Do you understand the label?'], botao: 'Start the lesson',
  nota: 'Dose, how often, with or without food, what to avoid, side effects, and when to get help. Then ask: “Can you tell me how you’re going to take it?”' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 11, img: 'conversa', rot: 'I · A New Prescription', t: 'A pharmacist explains a new medicine.', p: 'One question before, then the video, then the questions.' },
  { k: 'transforma', est: 'o', min: 10, img: 'capa', rot: 'II · Label to Plain English', t: 'Turn the label into words a patient understands.', p: 'Read the label and the clue. Say it to the patient.' },
  { k: 'multipla', est: 'f', min: 9, img: 'conversa', rot: 'III · Read the Instructions', t: 'Five instructions. What do they mean?', p: 'Choose. Then explain it to the patient.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'kKZ68sImQaQ', titulo: 'PEBC OSCE Practice Station - Patient picking up new prescription', fonte: 'PHARMACHIEVE · 0:23–5:00', inicio: 23, fim: 300,
  antes: { q: 'What does a pharmacist ask BEFORE explaining a new medicine?', h: 'Allergies, medical conditions, other medications (prescribed, over the counter, vitamins, herbal), what the doctor said.' },
  ouvir: 'Listen: What does the pharmacist ask first? Then: dose, frequency, food, what to avoid, side effects.',
  perguntas: [
    { q: 'What questions does the pharmacist ask first?', h: 'Allergies, medical conditions, current medications and doses, over-the-counter products, vitamins or herbal supplements, and what the doctor told her.' },
    { q: 'What is the dose and how often?', h: '20 milligrams, three times a day, about 6 to 8 hours apart, with or without food.' },
    { q: 'What must she avoid, and why?', h: 'Grapefruit juice: it can increase the level of the medicine and the side effects.' },
    { q: 'When should she stop and see the doctor immediately?', h: 'If she has a severe skin reaction, like blisters or peeling skin.' },
    { q: 'What common side effects does he mention?', h: 'Headache and nausea (and rarer ones: flu-like symptoms, hearing or vision changes).' }],
  fecho: 'Before: ask. Then: dose, frequency, food, avoid, side effects, when to get help. At the end: “Any questions?”' };

var TRANSFORMA = { rot: 'LABEL TO PLAIN ENGLISH', fim: 'Dose + how often + food + duration: and always one safety line.', itens: [
  { de: 'Take 1 tablet twice daily with food.', pista: 'twice a day, morning and evening', para: 'Take one tablet twice a day, in the morning and in the evening, with food.' },
  { de: '500 mg every 8 hours for 7 days.', pista: 'three times a day… finish…', para: 'Take one 500-milligram tablet every eight hours, so three times a day, for seven days. Finish the whole course, even if you feel better.' },
  { de: 'Take on an empty stomach.', pista: 'one hour before…', para: 'Take it on an empty stomach: one hour before breakfast, with a glass of water.' },
  { de: 'May cause drowsiness. Avoid alcohol.', pista: 'You may feel… You shouldn’t…', para: 'This medicine may make you sleepy, so you shouldn’t drive if you feel drowsy, and you should avoid alcohol.' },
  { de: 'Apply a thin layer to the affected area twice daily.', pista: 'Put a little… on…', para: 'Put a thin layer of the cream on the red area twice a day.' },
  { de: 'Do not exceed 4 doses in 24 hours.', pista: 'You must not take more than…', para: 'You must not take more than four doses in 24 hours.' }] };

var MULTIPLA = { rot: 'READ THE INSTRUCTIONS', fim: 'Finish with a teach-back: “Can you tell me how you’re going to take it?”', itens: [
  { txt: '“Take 2 tablets at bedtime.”', q: 'What does it mean?', ops: ['Two tablets when you go to bed.', 'Two tablets in the morning.', 'Two tablets every hour.'], c: 0, por: 'Bedtime = when you go to bed.' },
  { txt: '“Take as needed for pain, up to 3 times a day.”', q: 'What does it mean?', ops: ['Take it three times a day, always.', 'Take it only when you have pain, maximum three times a day.', 'Take three tablets at once.'], c: 1, por: '“As needed” = only when you need it. “Up to” = the maximum.' },
  { txt: '“Shake well before use. Keep in the fridge.”', q: 'What do you tell the patient?', ops: ['Shake the bottle first, and store it in the fridge.', 'Don’t move the bottle.', 'Keep it in a warm place.'], c: 0, por: 'Shake well = mix by shaking. Keep in the fridge = refrigerate.' },
  { txt: '“Complete the full course.”', q: 'What does it mean?', ops: ['Stop when you feel better.', 'Take all the tablets until the end, even if you feel better.', 'Take double doses to finish faster.'], c: 1, por: 'Typical for antibiotics: finish all of it.' },
  { txt: '“Avoid grapefruit juice.”', q: 'Why might a label say this?', ops: ['It changes how some medicines work in the body.', 'It makes the tablets taste bad.', 'It is too sweet.'], c: 0, por: 'Like in the video: it can increase the level of the medicine.' }] };

var PODE = [
  'I can ask about allergies, conditions and other medicines before I explain.',
  'I can explain dose, frequency and food: twice a day, with food, every 8 hours.',
  'I can say what to avoid and when to get help: should, shouldn’t, must not.',
  'I can check understanding with a teach-back.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 07: video · transforma · multipla (os dados estão no topo do aula.js) */
