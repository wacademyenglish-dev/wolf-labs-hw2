/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 1 · LESSON 4 OF 16 · ANY ALLERGIES? · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Antecedentes e admissão: alergias, medicação, cirurgias, hábitos, história familiar (Do you…? Have you ever had…?
   Are you taking…?). Vídeo: Fluent Nurse Medical English, "Speak Like a Nurse | Patient Admission Shadowing
   Practice" (3:56), até 1:52 (frases para repetir). Paciente FICTÍCIA no formulário.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 4, kick: 'ENGLISH FOR HEALTHCARE · MODULE 1 · LESSON 4 OF 16', titulo: ['Any', 'Allergies?'], tema: 'Medical history and admission', placa: 'LESSON 04',
  lugarConversa: 'THE ADMISSION DESK', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'Allergies, medicines, operations, habits, family: the questions you ask every new patient. Today you follow a nurse, build the questions and fill in an admission form.',
  chips: ['Shadow a nurse', 'Build the questions', 'The admission form'], botao: 'Start the lesson',
  nota: 'Ask about allergies AND the reaction: “What happens when you take it?” A rash is not the same as a swollen throat.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · Shadow a Nurse', t: 'Listen and repeat: admission phrases.', p: 'Watch, repeat each phrase in the pause, then answer.' },
  { k: 'transforma', est: 'o', min: 10, img: 'capa', rot: 'II · Build the Questions', t: 'From your notes to a full question.', p: 'Read the note and the clue. Ask the full question out loud.' },
  { k: 'formulario', est: 'w', min: 12, img: 'conversa', rot: 'III · The Admission Form', t: 'Fill in Mrs. Harper’s form.', p: 'Read what she told you. Fill in every field. Then check.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'vrxbZCA3_vk', titulo: 'Speak Like a Nurse | Patient Admission Shadowing Practice', fonte: 'FLUENT NURSE MEDICAL ENGLISH · 0:00–1:52', fim: 112,
  antes: { q: 'What do you ask a new patient on admission? Say three questions.', h: 'Full name and date of birth? Any allergies? What brings you in? Any medications today?' },
  ouvir: 'Repeat every phrase in the pause, out loud. Then answer.',
  perguntas: [
    { q: 'How does the nurse introduce herself?', h: '“Hello, my name is Karen. I’m your nurse today.”' },
    { q: 'What does she check first?', h: 'Full name and date of birth, then allergies.' },
    { q: 'What does she say before the blood pressure?', h: '“I’m going to check your blood pressure. Please roll up your sleeve. This might feel a little tight.”' },
    { q: 'How does she prepare the patient for the assessment?', h: '“You may feel some pressure, but it shouldn’t hurt.”' },
    { q: 'How does she finish?', h: '“I’ll let the doctor know when you’re ready. Do you have any questions? I’ll be right back to check on you.”' }],
  fecho: 'Short, kind, predictable phrases: the patient always knows what comes next.' };

var TRANSFORMA = { rot: 'BUILD THE QUESTIONS', fim: 'Do you…? for habits. Are you taking…? for now. Have you ever had…? for life.', itens: [
  { de: 'ALLERGIES?', pista: 'Do you have any…? + reaction', para: 'Do you have any allergies? What happens when you take it?' },
  { de: 'MEDICATION NOW?', pista: 'Are you taking any…?', para: 'Are you taking any medication at the moment, including vitamins or herbal products?' },
  { de: 'OPERATIONS?', pista: 'Have you ever had…?', para: 'Have you ever had an operation?' },
  { de: 'SMOKING?', pista: 'Do you…? How many…?', para: 'Do you smoke? How many cigarettes a day?' },
  { de: 'ALCOHOL?', pista: 'How much…?', para: 'How much alcohol do you drink in a typical week?' },
  { de: 'FAMILY HISTORY: HEART?', pista: 'Does anyone in your family…?', para: 'Does anyone in your family have heart problems?' },
  { de: 'PREGNANT? (dentist, pharmacist, X-ray)', pista: 'Is there any chance…?', para: 'Is there any chance you could be pregnant?' }] };

var FORMULARIO = { rot: 'ST. CLAIRE HOSPITAL · ADMISSION FORM (FICTIONAL)', perfilRot: 'WHAT MRS. HARPER TOLD YOU',
  perfil: '<p>“My name is <b>Joan Harper</b>.”</p><p>“I’m allergic to <b>penicillin</b>. It gives me a <b>rash</b>.”</p><p>“I take <b>metformin</b> twice a day for my <b>diabetes</b>.”</p><p>“I had my <b>appendix</b> out in <b>2015</b>.”</p><p>“I <b>don’t smoke</b>.”</p><p>“My father had a <b>heart attack</b> at 60.”</p>',
  fim: 'Complete and correct. Read it back to the patient: “Let me read this back to you…”',
  campos: [
    { r: 'Patient name *', ph: '', aceita: ['Joan Harper', 'Harper, Joan', 'Mrs. Joan Harper', 'Mrs Joan Harper'] },
    { r: 'Allergies *', ph: '', aceita: ['Penicillin'] },
    { r: 'Reaction *', ph: '', aceita: ['Rash', 'A rash', 'Skin rash'] },
    { r: 'Current medication *', ph: '', aceita: ['Metformin', 'Metformin twice a day', 'Metformin, twice a day'] },
    { r: 'Medical conditions *', ph: '', aceita: ['Diabetes', 'Type 2 diabetes'] },
    { r: 'Previous surgery (year) *', ph: '', aceita: ['Appendix removed in 2015', 'Appendectomy 2015', 'Appendectomy in 2015', 'Appendix out in 2015', 'Appendix, 2015', 'Appendix 2015'] },
    { r: 'Smoking (yes / no) *', ph: '', aceita: ['No', 'Non-smoker'] },
    { r: 'Family history *', ph: '', aceita: ['Father: heart attack at 60', 'Father had a heart attack at 60', 'Heart attack (father, 60)', 'Father - heart attack at 60', 'Father, heart attack at 60'] }] };

var PODE = [
  'I can use the admission phrases: full name and date of birth, allergies, medication.',
  'I can ask about allergies AND the reaction.',
  'I can use Do you…?, Are you taking…?, Have you ever had…? correctly.',
  'I can fill in an admission form and read it back to the patient.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 04: video · transforma · formulario (os dados estão no topo do aula.js) */
