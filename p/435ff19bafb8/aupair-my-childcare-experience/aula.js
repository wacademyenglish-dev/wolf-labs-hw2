/* ============================================================
   AU PAIR · MODULE 1 · LESSON 4 OF 24 · MY CHILDCARE EXPERIENCE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   Contar experiências com crianças no past simple (regular e irregular). A agência pede pelo menos 200 horas
   de experiência documentada (e a regra do programa exige 200 horas para cuidar de bebês com menos de 2 anos).
   Vídeo: Cultural Care, "How are Au Pairs Screened and Trained?" (1:54), legenda conferida em 15/10.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 4, kick: 'AU PAIR · MODULE 1 · LESSON 4 OF 24', titulo: ['My Childcare', 'Experience'], tema: 'Tell your stories with children', placa: 'LESSON 04',
  lugarConversa: 'THE PLAYROOM', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Agencies check your hours with children, and families want your stories. Today you learn how the agency checks you and tell real stories in the past.',
  chips: ['How screening works', 'Past simple stories', 'Your best story'], botao: 'Start the lesson',
  nota: 'Count your hours honestly: babysitting, family, school, volunteering. Write each one with a date and a contact person.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · How Agencies Check You', t: 'From the application to the training school.', p: 'One question before, then the video, then the questions.' },
  { k: 'memoria', est: 'l', min: 8, img: 'capa', rot: 'II · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'prova', est: 'o', min: 12, img: 'capa', rot: 'IV · Your Best Story', t: 'Tell a real story with a child.', p: 'Twenty seconds to plan. Then up to 90 seconds.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'eCNU1oWEKWQ', titulo: 'How are Au Pairs Screened and Trained?', fonte: 'CULTURAL CARE AU PAIR · 2 MIN',
  antes: { q: 'What do you think an agency checks before it accepts an au pair?', h: 'Experience with kids, English, references, health, a background check…' },
  ouvir: 'Listen: What is in the application? How many hours of childcare do you need?',
  perguntas: [
    { q: 'What goes in the application?', h: 'Contact information, family background, childcare experience, interests, a personality profile, a personal letter, photos and a video.' },
    { q: 'What happens in the in-person interview?', h: 'Staff check your English level and your motivation, and explain what being an au pair really means.' },
    { q: 'How many hours of childcare experience do you need?', h: 'At least 200 hours.' },
    { q: 'What other documents come after you are accepted?', h: 'A criminal background check and a doctor’s health certificate.' },
    { q: 'What do au pairs study at the training school?', h: 'Child development and safety.' }],
  fecho: 'Your hours are your evidence: write down where, when, how many, and who can confirm it.' };

var PARES = [
  ['take', 'took', 'I took my cousins to the park.'],
  ['make', 'made', 'We made a cake together.'],
  ['read', 'read', 'I read them a story every night.'],
  ['teach', 'taught', 'I taught my nephew to swim.'],
  ['feed', 'fed', 'I fed the baby at 6 o’clock.'],
  ['sing', 'sang', 'I sang a song and she fell asleep.']];

var ERROS = { rot: 'CAMILA’S STORY', tipo: 'nota', partes: [
  'Last summer, I ', ['take care', 'took care', 'last summer → past: took'], ' of my two cousins for a week. One day, it ', ['rain', 'rained', 'past: -ed'], ' all day, so we ',
  ['make', 'made', 'make → made'], ' a tent with blankets in the living room. The little one ', ['didn’t wanted', 'didn’t want', 'didn’t + base verb'], ' to sleep, so I ',
  ['readed', 'read', 'read → read (same spelling)'], ' him three stories. In the end, he slept and I was very proud.'] };

var PROVA = { rot: 'YOUR BEST STORY', tarefas: [
  { k: 'A STORY WITH A CHILD', tipo: 'fala', prep: 20, seg: 90, enun: 'Tell a real story with a child. Twenty seconds to plan, then speak.',
    texto: '<b>A day with a child that you remember.</b><br>Who was the child? What happened? What did you do? How did it end?',
    chips: ['Last year / One day,…', 'I was taking care of…', 'Suddenly,…', 'So I…', 'In the end,…'],
    criterios: ['Said who and when', 'Used the past simple (took, made, said)', 'Said what SHE did (a solution)', 'Had an ending', 'Spoke for 45 seconds or more'],
    modelo: 'Last year, I was taking care of my neighbor’s daughter, Lia. She was four. Suddenly, she started crying because her mom left for work. So I took her to the window, and we waved goodbye together. Then I made a paper boat, and we played with it in the bathtub. In the end, she laughed all afternoon, and her mom asked me to babysit again the next week.' }] };

var PODE = [
  'I can explain how an agency checks an au pair.',
  'I can say the past of common verbs: took, made, read, taught, fed, sang.',
  'I can use didn’t + base verb.',
  'I can tell a short, true story with a child.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 04: video · memoria · erros · prova (os dados estão no topo do aula.js) */
