/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 1 · LESSON 2 OF 16 · WHAT BRINGS YOU IN TODAY? · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   O histórico da queixa com o roteiro SOCRATES e o present perfect (How long have you had…? since / for).
   Vídeo: Geeky Medics, "SOCRATES Example | History Taking" (2:20), até 1:47 (o fim é propaganda). Legenda conferida.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 2, kick: 'ENGLISH FOR HEALTHCARE · MODULE 1 · LESSON 2 OF 16', titulo: ['What Brings You', 'In Today?'], tema: 'Taking the history of a complaint', placa: 'LESSON 02',
  lugarConversa: 'THE BEDSIDE', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'Every consultation starts with a story. Today you learn to ask about a symptom with the SOCRATES checklist, and to ask “how long” correctly.',
  chips: ['SOCRATES in action', 'How long have you had…?', 'Take a history'], botao: 'Start the lesson',
  nota: 'Start open (“What brings you in today?”), then go specific. Let the patient talk for the first minute.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · SOCRATES', t: 'A doctor asks about chest pain.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'II · How Long Have You Had…?', t: 'The question every patient hears.', p: 'Compare A and B. Which one is right? Why?' },
  { k: 'cadeira', est: 'o', min: 14, img: 'conversa', rot: 'III · Take a History', t: 'Your teacher is the patient. You ask.', p: 'Ask about each letter of SOCRATES. Listen and react.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'SqYToJR73hc', titulo: 'SOCRATES Example | History Taking', fonte: 'GEEKY MEDICS · 0:00–1:47', fim: 107,
  antes: { q: 'A patient says: “I have pain.” What questions do you ask? Say four.', h: 'Where? When did it start? What does it feel like? How bad is it?' },
  ouvir: 'Listen: Write down every question the doctor asks.',
  perguntas: [
    { q: 'Where is the pain, and when did it start?', h: 'In the center of the chest, about three hours ago, suddenly.' },
    { q: 'What does it feel like? Does it move anywhere?', h: 'A heavy, crushing pressure. It goes down the left arm and up into the jaw.' },
    { q: 'What other symptoms does the patient have?', h: 'A bit short of breath, very sweaty, and vomited once.' },
    { q: 'Is it constant? Does anything make it better or worse?', h: 'Constant. Nothing makes it better or worse.' },
    { q: 'How does the doctor ask about severity?', h: '“If you had to rate this pain on a scale of 0 to 10… what would you give it?” — “A 10.”' }],
  fecho: 'Eight letters, eight questions: Site, Onset, Character, Radiation, Associated symptoms, Time course, Exacerbating / relieving factors, Severity.' };

var DESCOBRE = {
  pares: [
    { a: 'How long {have you had} this pain?', b: 'How long {do you have} this pain?', q: 'Which question is right?', r: '<b>How long have you had…?</b> Present perfect: it started in the past and continues now.' },
    { a: 'I’ve had it {for} three days.', b: 'I’ve had it {since} three days.', q: 'For or since?', r: '<b>for</b> + a period (three days, a week). <b>since</b> + a starting point (Monday, last night).' },
    { a: 'I’ve had it {since} Monday.', b: 'I’ve had it {for} Monday.', q: 'And here?', r: '<b>since</b> Monday: Monday is the starting point.' },
    { a: '{When did} it start?', b: '{When has} it started?', q: 'Which one asks about a moment in the past?', r: '<b>When did it start?</b> With “when”, use the past simple.' }],
  regra: [['ONGOING', 'How long have you had…? / have you been…?'], ['FOR', 'a period: for two weeks, for a month'], ['SINCE', 'a starting point: since Friday, since 2023'], ['WHEN', 'a moment: When did it start? (past simple)']],
  armas: [['PRESENT PERFECT', 'How long do you have this cough?', 'How long have you had this cough?', 'started + continues'], ['FOR', 'since two weeks', 'for two weeks', 'a period'], ['WHEN', 'When has it started?', 'When did it start?', 'when → past'], ['OPEN START', 'What is your problem?', 'What brings you in today?', 'warmer']] };

var CADEIRA = { itens: [
  { alvo: 'Open the consultation.', dica: 'What brings you in today?', resp: 'My knee. It’s been hurting a lot.' },
  { alvo: 'S · Ask about the SITE.', dica: 'Where exactly is the pain? Can you point to it?', resp: 'Right here, on the inside of my right knee.' },
  { alvo: 'O · Ask about the ONSET.', dica: 'When did it start? Did it come on suddenly or gradually?', resp: 'Suddenly, two weeks ago, when I twisted it playing tennis.' },
  { alvo: 'C · Ask about the CHARACTER.', dica: 'What does the pain feel like?', resp: 'Sharp when I turn. A dull ache at night.' },
  { alvo: 'R · Ask about RADIATION.', dica: 'Does the pain go anywhere else?', resp: 'No, it stays in the knee.' },
  { alvo: 'A · Ask about ASSOCIATED symptoms.', dica: 'Have you noticed anything else, like swelling or clicking?', resp: 'Yes, it swelled up, and sometimes it locks.' },
  { alvo: 'T · Ask about the TIME course.', dica: 'Is it constant, or does it come and go?', resp: 'It comes and goes. It’s worse after walking.' },
  { alvo: 'E · Ask what makes it better or worse.', dica: 'Does anything make it better or worse?', resp: 'Ice helps. Stairs make it much worse.' },
  { alvo: 'S · Ask about SEVERITY.', dica: 'On a scale of 0 to 10, how bad is it?', resp: 'About a 6. An 8 on the stairs.' },
  { alvo: 'Summarize and check.', dica: 'So, let me check I’ve got this right…', resp: 'Yes, that’s it exactly.' }] };

var PODE = [
  'I can open a consultation with an open question.',
  'I can ask about a symptom with SOCRATES.',
  'I can ask How long have you had…? and use for and since.',
  'I can summarize what the patient said and check it.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 02: video · descobre · cadeira (os dados estão no topo do aula.js) */
