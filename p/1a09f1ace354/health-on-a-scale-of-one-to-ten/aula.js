/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 1 · LESSON 3 OF 16 · ON A SCALE OF ONE TO TEN · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   A dor: escala de 0 a 10 (leve 1–3, moderada 4–6, forte 7–10) e as palavras da dor (sharp, dull, throbbing, burning,
   stabbing, comes and goes). Vídeo: EnglishMedEd (Virginia Allum), "How to Help Patients Accurately Rate Their Pain"
   (2:10), legenda conferida. Áudios: pacientes com sotaques diferentes (edge-tts).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 3, kick: 'ENGLISH FOR HEALTHCARE · MODULE 1 · LESSON 3 OF 16', titulo: ['On a Scale of', 'One to Ten'], tema: 'Describing and rating pain', placa: 'LESSON 03',
  lugarConversa: 'THE EMERGENCY BAY', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: '“It hurts” is not enough. Today you learn to help a patient rate pain on a scale and to understand the words patients use: sharp, dull, throbbing, burning.',
  chips: ['A nurse explains the scale', 'Pain words', 'Listen to five patients'], botao: 'Start the lesson',
  nota: 'Many patients find the number difficult. Give them anchors: mild, moderate, severe.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 7, img: 'conversa', rot: 'I · The Pain Scale', t: 'A nurse helps a patient choose a number.', p: 'One question before, then the video, then the questions.' },
  { k: 'memoria', est: 'l', min: 8, img: 'capa', rot: 'II · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'multipla', est: 'l', min: 10, img: 'conversa', rot: 'III · Five Patients', t: 'Listen. Which word describes the pain?', p: 'Play each patient once. Choose the word.' },
  { k: 'prova', est: 'o', min: 8, img: 'capa', rot: 'IV · Explain the Scale', t: 'Your patient doesn’t understand the numbers.', p: 'Explain the scale in your words, in about 45 seconds.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'TjrkevRQQSY', titulo: 'How to Help Patients Accurately Rate Their Pain Using a Pain Scale', fonte: 'ENGLISHMEDED · 2 MIN',
  antes: { q: 'Why is it hard for some patients to give pain a number?', h: 'It is subjective; they don’t know what 10 means; they don’t want to exaggerate.' },
  ouvir: 'Listen: How does the nurse explain the scale?',
  perguntas: [
    { q: 'Why did the patient come to the emergency department?', h: 'She slipped on her son’s toy car and hurt her back.' },
    { q: 'How does the nurse explain 1–3, 4–6 and 7–10?', h: '1–3 is mild; 4–6 is moderate (you notice it, but it doesn’t stop daily activities); 7–10 is severe (you can’t move around easily).' },
    { q: 'What number does the patient choose first? And later?', h: 'An 8 at first. A 5 or 6 after painkillers and a heat pack.' },
    { q: 'What does the nurse offer besides painkillers?', h: 'A heat pack.' }],
  fecho: 'Anchors make numbers easier: mild, moderate, severe. And always ask again after treatment.' };

var PARES = [
  ['sharp', 'sudden and strong, like a cut', 'It’s a sharp pain when I bend down.'],
  ['dull', 'a constant, heavy ache', 'There’s a dull ache in my lower back.'],
  ['throbbing', 'pulsing, like a heartbeat', 'I have a throbbing headache.'],
  ['burning', 'hot, like fire', 'It’s a burning pain when I swallow.'],
  ['stabbing', 'very sudden and deep, like a knife', 'I felt a stabbing pain in my side.'],
  ['comes and goes', 'not constant', 'The pain comes and goes all day.']];

var MULTIPLA = { rot: 'FIVE PATIENTS', fim: 'Patients rarely use the textbook word: listen for the image (a hammer, fire, a knife).', itens: [
  { audio: 'pn1.mp3', ouve: 'It’s like someone is hitting my head with a hammer: boom, boom, boom, with every heartbeat.', q: 'Which word describes the pain?', ops: ['dull', 'throbbing', 'burning'], c: 1, por: 'With every heartbeat: throbbing.' },
  { audio: 'pn2.mp3', ouve: 'It’s a constant heavy ache in my lower back. It never really goes away.', q: 'Which word describes the pain?', ops: ['dull', 'stabbing', 'comes and goes'], c: 0, por: 'Constant and heavy: a dull ache.' },
  { audio: 'pn3.mp3', ouve: 'When I go to the toilet, it feels hot, like fire.', q: 'Which word describes the pain?', ops: ['sharp', 'throbbing', 'burning'], c: 2, por: 'Hot, like fire: burning.' },
  { audio: 'pn4.mp3', ouve: 'It’s fine for an hour, then it’s terrible, then it’s fine again.', q: 'Which phrase describes the pain?', ops: ['constant', 'comes and goes', 'dull'], c: 1, por: 'Not constant: it comes and goes.' },
  { audio: 'pn5.mp3', ouve: 'Suddenly I felt a very deep pain, like a knife, right here on my right side.', q: 'Which word describes the pain?', ops: ['stabbing', 'dull', 'burning'], c: 0, por: 'Sudden, deep, like a knife: stabbing.' }] };

var PROVA = { rot: 'EXPLAIN THE SCALE', tarefas: [
  { k: 'YOUR PATIENT', tipo: 'fala', prep: 15, seg: 60, enun: 'Your patient says: “I don’t know, it hurts a lot!” Explain the pain scale and ask again.',
    chips: ['Let me explain.', 'Zero means no pain at all,', 'and ten is the worst pain you can imagine.', 'One to three is mild…', 'Four to six is moderate…', 'Seven to ten is severe…', 'So, what number would you give it now?'],
    criterios: ['Explained 0 and 10', 'Gave anchors: mild, moderate, severe', 'Gave an example of daily activities', 'Asked for the number again'],
    modelo: 'That’s OK, it’s not easy. Let me explain. Zero means no pain at all, and ten is the worst pain you can imagine. One to three is mild: you notice it, but it’s easy to ignore. Four to six is moderate: it bothers you, but you can still do your daily activities. Seven to ten is severe: it stops you from moving or sleeping. So, what number would you give it now?' }] };

var PODE = [
  'I can help a patient rate pain from 0 to 10.',
  'I can use anchors: mild, moderate, severe.',
  'I can understand pain words: sharp, dull, throbbing, burning, stabbing, comes and goes.',
  'I can ask about pain again after treatment.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 03: video · memoria · multipla (áudio) · prova (os dados estão no topo do aula.js) */
