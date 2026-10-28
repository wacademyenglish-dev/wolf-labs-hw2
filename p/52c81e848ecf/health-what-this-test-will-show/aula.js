/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 2 · LESSON 6 OF 16 · WHAT THIS TEST WILL SHOW · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Explicar um exame ou procedimento: a agenda, o resultado em palavras simples, a sequência (first, then, after that)
   e o futuro (will). Vídeo: University of Nottingham, "Clinical communication skills - explanation skills" (8:05),
   trecho 0:47–5:30 (anemia: resultado, explicação, dieta). Legenda conferida em 15/10.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 6, kick: 'ENGLISH FOR HEALTHCARE · MODULE 2 · LESSON 6 OF 16', titulo: ['What This Test', 'Will Show'], tema: 'Explaining tests and procedures', placa: 'LESSON 06',
  lugarConversa: 'THE X-RAY ROOM', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'Patients remember little of what we explain, unless we explain it well. Today you learn a structure for any explanation: agenda, simple words, steps in order, and a check.',
  chips: ['A doctor explains a result', 'Steps in order', 'Your explanation'], botao: 'Start the lesson',
  nota: 'Give an agenda, explain in small chunks, and check: “Does that make sense so far?”' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 12, img: 'conversa', rot: 'I · Explaining a Result', t: 'A doctor explains anemia and the next steps.', p: 'One question before, then the video, then the questions.' },
  { k: 'ordem', est: 'f', min: 8, img: 'capa', rot: 'II · Steps in Order', t: 'Explaining a dental filling.', p: 'Tap the steps in order. Then explain it with first, then, after that.' },
  { k: 'prova', est: 'o', min: 14, img: 'conversa', rot: 'III · Your Explanation', t: 'Explain a test or procedure from your job.', p: 'Thirty seconds to plan. Then explain it, step by step.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'SSJFJpk0osU', titulo: 'Clinical communication skills - explanation skills', fonte: 'UNIVERSITY OF NOTTINGHAM · 0:47–5:30', inicio: 47, fim: 330,
  antes: { q: 'A blood test shows something. How do you start the explanation?', h: 'With an agenda: “First I’ll give you the results, then we’ll talk about the condition, then the treatment.”' },
  ouvir: 'Listen: How does the doctor organize the conversation? How does she explain the numbers?',
  perguntas: [
    { q: 'What three things does the doctor plan to do (her agenda)?', h: 'Give the blood test results, talk about anemia, then talk about treatments.' },
    { q: 'How does she explain the result?', h: 'She shows the normal range for women (11.5 to 16) and the patient’s level, 8.7: “a bit lower than we would like”.' },
    { q: 'How does she reassure the patient?', h: 'Iron deficiency anemia is fairly common (up to around 15% of women) and very treatable.' },
    { q: 'How does she explain hemoglobin in simple words?', h: 'A protein in the red blood cells that carries oxygen around the body to the organs.' },
    { q: 'What does she suggest first, and how does she involve the patient?', h: 'More iron in the diet. She asks about the patient’s diet, preferences (no liver, yes steak, broccoli) and makes a plan with her.' }],
  fecho: 'Agenda → result in context → simple explanation → a plan made WITH the patient.' };

var ORDEM = { rot: 'A DENTAL FILLING', pede: 'Tap the six steps of the explanation in order.',
  passos: ['I’m going to explain what we’ll do today, and then you can ask me anything.', 'First, I’ll numb the area, so you won’t feel any pain.', 'Then I’ll remove the decay with a small drill. You’ll feel some vibration.', 'After that, I’ll fill the hole with a tooth-colored material.', 'Finally, I’ll check your bite. The numbness will last about two hours.', 'Does that make sense? Do you have any questions?'],
  chips: ['First,', 'Then', 'After that,', 'Finally,', 'will / won’t', 'Does that make sense?'],
  modelo: 'I’m going to explain what we’ll do today. First, I’ll numb the area, so you won’t feel any pain. Then I’ll remove the decay; you’ll feel some vibration. After that, I’ll fill the hole. Finally, I’ll check your bite. The numbness will last about two hours. Does that make sense?' };

var PROVA = { rot: 'YOUR EXPLANATION', tarefas: [
  { k: 'A TEST OR PROCEDURE', tipo: 'fala', prep: 30, seg: 90, enun: 'Explain a test or procedure from your job to a patient. Thirty seconds to plan, then about 90 seconds.',
    texto: '<b>Ideas:</b> a blood test · a chest X-ray · an ECG · a tooth extraction · a physio assessment · how a new inhaler works · a vaccine.',
    chips: ['I’m going to explain…', 'This test will show…', 'First,…', 'Then…', 'After that,…', 'You’ll feel / you won’t feel…', 'The results will be ready…', 'Does that make sense so far?'],
    criterios: ['Gave an agenda', 'Said what the test will show', 'Steps in order (first, then…)', 'Said what the patient will feel', 'Said when results come', 'Checked understanding'],
    modelo: 'I’m going to explain the ECG, and then you can ask me anything. This test will show us how your heart is beating. First, I’ll put some small stickers on your chest, arms and legs. Then you’ll lie still for about five minutes. You won’t feel anything: it doesn’t hurt at all. After that, I’ll remove the stickers, and the doctor will look at the results today. Does that make sense so far?' }] };

var PODE = [
  'I can start an explanation with an agenda.',
  'I can explain a result in simple words, with a normal range.',
  'I can explain a procedure in order: first, then, after that, finally.',
  'I can say what the patient will feel and check understanding.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 06: video · ordem · prova (os dados estão no topo do aula.js) */
