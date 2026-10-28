/* ============================================================
   AU PAIR · MODULE 6 · LESSON 23 OF 24 · CLASSES AND CREDITS · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   A parte de estudos do programa (conferida em 15/10/2026, 22 CFR 62.31 e j1visa.state.gov): pelo menos 6 créditos
   (semester hours) numa instituição americana credenciada; a família paga até US$ 500. Catálogo e faculdade FICTÍCIOS.
   Vídeo: Cultural Care, "Matching tips 3: Tips for improving your English as an au pair" (0:40).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 23, kick: 'AU PAIR · MODULE 6 · LESSON 23 OF 24', titulo: ['Classes and', 'Credits'], tema: 'The study part of your year', placa: 'LESSON 23',
  lugarConversa: 'THE COLLEGE LIBRARY', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Studying is part of the au pair program: at least six credits at an American college, and the family helps to pay. Today you read a course catalog, do the math and enroll.',
  chips: ['English tips', 'The course catalog', 'Do the math and enroll'], botao: 'Start the lesson',
  nota: 'Choose courses you love. The classes are where many au pairs make their best friends.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 5, img: 'conversa', rot: 'I · English Tips', t: 'Au pairs share how they improved.', p: 'One question first, then the video, then more questions.' },
  { k: 'leitura', est: 'l', min: 9, img: 'capa', rot: 'II · The Course Catalog', t: 'Lakeview Community College (fictional).', p: 'Read the catalog. Then answer the questions.' },
  { k: 'multipla', est: 'f', min: 12, img: 'conversa', rot: 'III · Do the Math', t: 'Six credits, $500 from the family.', p: 'Read the case. Choose. Then explain the numbers.' },
  { k: 'formulario', est: 'w', min: 10, img: 'capa', rot: 'IV · Enroll', t: 'Fill in Mariana’s enrollment form.', p: 'Read her choices. Fill in every field. Then check.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 23: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'LaOBVqvYvl4', titulo: 'Matching tips 3: Tips for improving your English as an au pair', fonte: 'CULTURAL CARE AU PAIR · 40 SEC',
  antes: { q: 'What is your best tip to improve your English?', h: 'Series with subtitles, music, talking with friends, reading…' },
  ouvir: 'Listen: three tips.',
  perguntas: [
    { q: 'What tip is about TV?', h: 'Watch shows and movies in English with English subtitles, to connect the words and the pronunciation.' },
    { q: 'What helped another au pair a lot?', h: 'Reading books in English and watching shows with subtitles.' },
    { q: 'What can you do with friends?', h: 'Ask them to talk in English for a while.' }],
  fecho: 'Classes help too, and they count for your program.' };

var LEITURA = { rot: 'LAKEVIEW COMMUNITY COLLEGE · COURSES FOR AU PAIRS (FICTIONAL)', tipo: 'nota',
  antes: { q: 'How many credits does an au pair need? Who pays?', h: 'At least 6 credits. The host family pays up to $500.' },
  texto: '{ESL Conversation II} · 3 credits · Tuesdays and Thursdays, 7–9 p.m. · $390\n{Introduction to Photography} · 3 credits · Saturdays, 9 a.m.–12 p.m. · $420\n{American Culture Weekend} · 6 credits · two weekends, Friday 6 p.m. to Sunday 4 p.m. · $480\n{Child Development 101} · 3 credits · Mondays, 6–9 p.m. · $350\n{Public Speaking (online)} · 3 credits · online, at your own pace · $300\nAll courses give {academic credit} from an {accredited} college. Ask your coordinator if you have questions.',
  perguntas: [
    { q: 'Which course gives 6 credits at once?', h: 'American Culture Weekend ($480).' },
    { q: 'Which courses are in the evening?', h: 'ESL Conversation II (Tue/Thu) and Child Development 101 (Mon).' },
    { q: 'Which course is online?', h: 'Public Speaking, $300.' },
    { q: 'What does “accredited” mean here?', h: 'An official, recognized college: the credits count for the program.' }],
  olha: 'The highlighted words are what you check in any catalog: the course, the credits, the time, the price, and if the credits are academic and accredited.' };

var MULTIPLA = { rot: 'DO THE MATH', fim: 'Six credits, the family pays up to $500, and you pay the rest. Plan the schedule with the family before you enroll.', itens: [
  { txt: 'Mariana wants to finish all her credits fast.', q: 'Which choice gives 6 credits with only one course?', ops: ['ESL Conversation II', 'American Culture Weekend', 'Public Speaking'], c: 1, por: 'The weekend course gives 6 credits for $480: the family pays it all.' },
  { txt: 'Bia chooses ESL Conversation II ($390) and Photography ($420).', q: 'How much does Bia pay herself?', ops: ['$0', '$310', '$810'], c: 1, por: '$390 + $420 = $810. The family pays up to $500. $810 − $500 = $310.' },
  { txt: 'Lia chooses Child Development 101 ($350) and Public Speaking ($300).', q: 'Credits and money?', ops: ['6 credits; she pays $150', '3 credits; she pays $0', '6 credits; the family pays $650'], c: 0, por: '3 + 3 = 6 credits. $650 − $500 = $150 for Lia.' },
  { txt: 'Child Development is on Mondays from 6 p.m. Ana’s schedule usually ends at 6 p.m.', q: 'What should Ana do?', ops: ['Skip the first hour of class.', 'Talk to the family before enrolling to plan Mondays.', 'Choose nothing.'], c: 1, por: 'Classes are part of the program: plan the schedule together, before you enroll.' },
  { txt: 'Carla wants to watch free videos online instead of a college course.', q: 'Does it count for the program?', ops: ['Yes, any course counts.', 'No: you need academic credit from an accredited U.S. school.', 'Only if the videos are long.'], c: 1, por: 'The program requires at least 6 credits (or the equivalent) at an accredited U.S. post-secondary school.' }] };

var FORMULARIO = { rot: 'LAKEVIEW COMMUNITY COLLEGE · ENROLLMENT FORM', perfilRot: 'MARIANA’S CHOICES (FICTIONAL)',
  perfil: '<p>I’m <b>Mariana Costa Ribeiro</b>, an au pair on a <b>J-1</b> visa.</p><p>I chose <b>Child Development 101</b> (code <b>CD101</b>) and <b>Public Speaking</b> online (code <b>PS110</b>).</p><p>Each course has <b>3 credits</b>. Together they cost <b>$650</b>.</p><p>My host family pays <b>$500</b>. I pay the rest.</p>',
  fim: 'Enrolled! Keep the receipt: your agency will ask for proof of your credits.',
  campos: [
    { r: 'Last name *', ph: '', aceita: ['Costa Ribeiro'] },
    { r: 'First name *', ph: '', aceita: ['Mariana'] },
    { r: 'Visa type *', ph: '', aceita: ['J-1', 'J1'] },
    { r: 'Course 1 (code) *', ph: '', aceita: ['CD101'] },
    { r: 'Course 2 (code) *', ph: '', aceita: ['PS110'] },
    { r: 'Total credits *', ph: '', aceita: ['6'] },
    { r: 'Host family contribution ($) *', ph: '', aceita: ['500', '$500'] },
    { r: 'Amount paid by student ($) *', ph: '', aceita: ['150', '$150'] }] };

var PODE = [
  'I can explain the study part of the program: 6 credits, up to $500 from the family.',
  'I can read a course catalog: credits, schedule, price.',
  'I can do the math and plan my schedule with the family.',
  'I can fill in an enrollment form.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 23: video · leitura · multipla · formulario (os dados estão no topo do aula.js) */
