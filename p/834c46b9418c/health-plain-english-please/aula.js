/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 2 · LESSON 8 OF 16 · PLAIN ENGLISH, PLEASE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Trocar o jargão por palavras simples e checar com o teach-back ("Can you tell me in your own words…?").
   Vídeo: Geeky Medics, "Type 2 Diabetes Counselling" (8:50), trecho 3:04–5:30 (a explicação da insulina e o resumo
   da paciente). Legenda conferida em 15/10.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 8, kick: 'ENGLISH FOR HEALTHCARE · MODULE 2 · LESSON 8 OF 16', titulo: ['Plain English,', 'Please'], tema: 'From jargon to simple words', placa: 'LESSON 08',
  lugarConversa: 'THE EDUCATION CORNER', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: '“Hypertension”, “benign”, “bilateral”: clear to you, confusing to a patient. Today you learn to explain in plain English and to check with a teach-back.',
  chips: ['A doctor explains diabetes', 'Jargon pairs', 'Say it simply'], botao: 'Start the lesson',
  nota: 'Jargon is fine with colleagues. With patients: short words, one idea at a time, and a teach-back.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · Explaining Diabetes', t: 'Simple words, then a teach-back.', p: 'One question before, then the video, then the questions.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'II · Plain or Jargon?', t: 'Six pairs. Which one would a patient understand?', p: 'Read both out loud. Tap the one a patient understands. The other one gets crossed out.' },
  { k: 'memoria', est: 'l', min: 8, img: 'capa', rot: 'III · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'transforma', est: 'o', min: 11, img: 'conversa', rot: 'IV · Say It Simply', t: 'From the chart to the patient.', p: 'Read the clinical sentence and the clue. Say it in plain English.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Lesson 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'wHAKLSSc6P8', titulo: 'Type 2 Diabetes Counselling - OSCE Guide', fonte: 'GEEKY MEDICS · 3:04–5:30', inicio: 184, fim: 330,
  antes: { q: 'How would you explain “insulin” to a patient with no medical knowledge?', h: 'A hormone that moves sugar from the blood into the cells, so the body can use it.' },
  ouvir: 'Listen: How does the doctor explain diabetes? How does she check understanding?',
  perguntas: [
    { q: 'What happens to food, in the doctor’s words?', h: 'It is broken down into sugar called glucose, which goes around the body to where it is needed.' },
    { q: 'What is insulin’s job, in simple words?', h: 'To move sugar from the blood into the cells, to store it to be used later.' },
    { q: 'What goes wrong in type 2 diabetes?', h: 'With too much sugar all the time, the body makes less insulin, and the cells stop “paying attention” to it.' },
    { q: 'How does the doctor check understanding?', h: '“Are you happy if I just ask you to summarize what we’ve just gone through?” (a teach-back).' },
    { q: 'Did the patient understand? How do you know?', h: 'Yes: she explains it back correctly in her own words.' }],
  fecho: 'Plain words + images (“the cells stop paying attention”) + a teach-back = understanding you can check.' };

var PARES = [
  ['hypertension', 'high blood pressure', 'You have high blood pressure.'],
  ['benign', 'not cancer', 'The lump is not cancer.'],
  ['analgesic', 'painkiller', 'I’ll give you a painkiller.'],
  ['bilateral', 'on both sides', 'There is swelling on both sides.'],
  ['fracture', 'broken bone', 'Your wrist is broken.'],
  ['oral', 'by mouth', 'Take it by mouth.']];

var TRANSFORMA = { rot: 'SAY IT SIMPLY', fim: 'Short words, one idea at a time, and: “Can you tell me in your own words…?”', itens: [
  { de: 'You present with acute onset dyspnea.', pista: 'You became… suddenly', para: 'You suddenly became short of breath.' },
  { de: 'The lesion is benign.', pista: 'The good news is…', para: 'The good news is that the spot is not cancer.' },
  { de: 'There is a hairline fracture of the radius.', pista: 'a small crack in…', para: 'There’s a small crack in one of the bones of your forearm.' },
  { de: 'We will administer an analgesic intravenously.', pista: 'We’ll give you… through a drip', para: 'We’ll give you a painkiller through a drip in your arm.' },
  { de: 'Your hypertension is uncontrolled.', pista: 'Your blood pressure is still…', para: 'Your blood pressure is still too high, even with the medicine.' },
  { de: 'You require a tooth extraction due to irreversible pulpitis.', pista: 'The nerve… we need to take out…', para: 'The nerve inside the tooth is badly inflamed and won’t recover, so we need to take the tooth out.' },
  { de: 'Teach-back.', pista: 'Can you tell me in your own words…?', para: 'Just to make sure I explained it well, can you tell me in your own words what we’re going to do?' }] };

var PODE = [
  'I can replace common jargon with plain words.',
  'I can explain one idea at a time, with an image if it helps.',
  'I can give good news and results in simple language.',
  'I can check understanding with a teach-back.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 08: video · memoria · transforma (os dados estão no topo do aula.js) */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de memoria.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Plain English for a patient. Tap the plain one.',
  toque: 'Read both out loud. Tap the one a patient understands.',
  pares: [
    { c: 'You suddenly became short of breath.', x: 'You present with acute onset dyspnea.', d: 'Short, everyday words.' },
    { c: 'The good news is that the spot is not cancer.', x: 'The lesion is benign.', d: 'Say the meaning, not the label.' },
    { c: 'Your blood pressure is still too high.', x: 'Your hypertension is uncontrolled.', d: 'Plain words for the number.' },
    { c: 'There is a small crack in a bone in your arm.', x: 'There is a hairline fracture of the radius.', d: 'A picture a patient can see.' },
    { c: 'We’ll give you a painkiller through a drip.', x: 'We will administer an analgesic intravenously.', d: 'Give, painkiller, drip.' },
    { c: 'Can you tell me in your own words what we’ll do?', x: 'Do you comprehend the plan?', d: 'The teach-back: your own words.' }
  ],
  nota: '<b>Plain words</b>: short, everyday, one idea at a time. Say what it is, not the label. Then check with a teach-back: <b>Can you tell me in your own words …?</b>',
  uso: { p: 'Your turn. Take one word from your job that patients don’t know. Say it in plain English.', molde: ['That means …', 'In other words, …'], ex: 'Hypertension means your blood pressure is too high.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
