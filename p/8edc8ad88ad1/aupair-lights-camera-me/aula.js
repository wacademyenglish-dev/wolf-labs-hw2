/* ============================================================
   AU PAIR · MODULE 1 · LESSON 3 OF 24 · LIGHTS, CAMERA, ME! · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   O vídeo de inscrição (cerca de 2 minutos): present perfect de experiência (I have babysat, I have traveled alone).
   Vídeo: "My AIFS Aupair Application Video" (2:48), um vídeo real de candidata (ela vai para a Austrália; a estrutura
   é a mesma). Legenda conferida em 15/10.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 3, kick: 'AU PAIR · MODULE 1 · LESSON 3 OF 24', titulo: ['Lights, Camera,', 'Me!'], tema: 'Your two-minute video', placa: 'LESSON 03',
  lugarConversa: 'YOUR RECORDING CORNER', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Families watch your video before they call you. Today you watch a real application video, learn the present perfect for experience and record your first take.',
  chips: ['A real application video', 'I have… · Have you ever…?', 'Your first take'], botao: 'Start the lesson',
  nota: 'Smile in the first second, show your real life, and talk about the kids. Two minutes is enough.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 10, img: 'conversa', rot: 'I · A Real Video', t: 'Watch a real application video.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'II · I Have… or I …ed?', t: 'Life experience or a moment in the past?', p: 'Compare A and B. When do we use each one?' },
  { k: 'escada', est: 'f', min: 8, img: 'conversa', rot: 'III · The Ladder', t: 'Climb from easy to hard.', p: 'Go step by step. Give a good answer and you move up.' },
  { k: 'prova', est: 'o', min: 12, img: 'capa', rot: 'IV · Your First Take', t: 'Record your video, live.', p: 'Thirty seconds to plan, up to two minutes. Look at the camera and smile.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'q_NC7ZcRDRk', titulo: 'My AIFS Aupair Application Video', fonte: 'A REAL APPLICANT · 3 MIN',
  antes: { q: 'What do you want a family to SEE in your video? Say three things.', h: 'Your home and family, you with children, your hobbies, your smile, your real life.' },
  ouvir: 'Listen: What does she show? What experience does she have with children?',
  perguntas: [
    { q: 'How does she start the video?', h: '“With this video I would like to give you an impression of me… and convince you to be my future host family.”' },
    { q: 'What does she show and say about her life?', h: 'Her house, her family, her sister; she drives every day; yoga, dancing, the gym; cooking and baking with friends; filming videos.' },
    { q: 'What experience with children does she have?', h: 'Children aged 1 to 14: her cousins, babysitting, helping refugee children with homework, an internship in a kindergarten.' },
    { q: 'How does she describe herself?', h: 'Open-minded, helpful, reliable and very cheerful. She also asks children what they think of her!' },
    { q: 'How does she finish?', h: '“I hope you enjoyed my video… I look forward to hearing from you. Bye!”' }],
  fecho: 'She is going to Australia, but the shape works for any family: life, kids, personality, a warm goodbye.' };

var DESCOBRE = {
  pares: [
    { a: 'I {have babysat} my cousins many times.', b: 'I {babysat} my cousins last Saturday.', q: 'Why “have babysat” in A and “babysat” in B?', r: 'A = <b>life experience</b>, no time (present perfect). B = a <b>moment in the past</b> (last Saturday): past simple.' },
    { a: 'I {have traveled} alone.', b: 'I {traveled} alone in 2023.', q: 'What changes when you say the year?', r: 'With a time (in 2023, last year, yesterday) → <b>past simple</b>. Without a time → <b>have + participle</b>.' },
    { a: '{Have you ever worked} with babies?', b: '{Did you work} with babies last year?', q: 'Which question asks about your whole life?', r: '<b>Have you ever…?</b> = in your life. Did you…? = at a specific time.' },
    { a: 'I {have worked} in a kindergarten.', b: 'I {have work} in a kindergarten.', q: 'What form comes after have?', r: 'have + <b>participle</b>: worked, been, done, taken, taught.' }],
  regra: [['LIFE EXPERIENCE', 'I have + participle: I have babysat'], ['WITH A TIME', 'past simple: I babysat last year'], ['QUESTION', 'Have you ever…? — Yes, I have.'], ['IRREGULAR', 'be → been · do → done · teach → taught · take → taken']],
  armas: [['PARTICIPLE', 'I have work with kids.', 'I have worked with kids.', 'have + -ed'], ['WITH A TIME', 'I have traveled to Chile in 2022.', 'I traveled to Chile in 2022.', 'a year → past simple'], ['IRREGULAR', 'I have teached English.', 'I have taught English.', 'teach → taught'], ['EVER', 'Did you ever babysit?', 'Have you ever babysat?', 'life → have you ever']] };

var PORTAS = [
  { k: 'BABIES', tema: 'experience', t: 'Have you ever taken care of a baby?', ex: 'Yes, I have. I have taken care of my baby cousin many times. Last month, I fed her and put her to sleep.', trap: 'Yes, I have + detail with a time (past simple)' },
  { k: 'WORK', tema: 'experience', t: 'Have you ever worked with children?', ex: 'Yes, I have. I have worked in a kindergarten as an intern.', trap: 'have worked, not have work' },
  { k: 'TRAVEL', tema: 'experience', t: 'Have you ever traveled alone?', ex: 'Yes, I have. I traveled alone to Salvador in 2023.', trap: 'a year → past simple' },
  { k: 'COOKING', tema: 'experience', t: 'Have you ever cooked for a family?', ex: 'Yes, I have. I have cooked dinner for my family every Sunday for two years.', trap: 'for + time' },
  { k: 'TEACHING', tema: 'experience', t: 'Have you ever taught something to a child?', ex: 'Yes, I have. I have taught my nephew to ride a bike.', trap: 'teach → taught' },
  { k: 'NEVER', tema: 'experience', t: 'Something you have never done, but want to do.', ex: 'I have never seen snow, but I really want to!', trap: 'have never + participle' }];

var PROVA = { rot: 'YOUR FIRST TAKE', tarefas: [
  { k: 'MY APPLICATION VIDEO', tipo: 'fala', prep: 30, seg: 120, enun: 'Thirty seconds to plan. Then talk to the camera for one or two minutes.',
    texto: '<b>Your video for host families.</b> Hello and who you are · your life (family, home, hobbies) · your experience with kids (I have…) · your personality · a warm goodbye.',
    chips: ['Hi! With this video I’d like to…', 'This is my…', 'I have babysat / worked…', 'I would describe myself as…', 'I look forward to hearing from you!'],
    criterios: ['Smiled and looked at the camera', 'Showed her life (family, home, hobbies)', 'Used the present perfect for experience', 'Three personality words', 'A warm goodbye'],
    modelo: 'Hi! My name is Ana, and with this video I’d like to show you a little of my life. I live in Curitiba with my parents and my little brother, Pedro. I love cooking, dancing and reading stories. I have babysat my cousins since I was fifteen, and I have worked as a volunteer in a daycare, so I am used to little kids. I would describe myself as patient, creative and very cheerful. I can’t wait to share my culture with you. I look forward to hearing from you. Bye!' }] };

var PODE = [
  'I can say what goes in an application video.',
  'I can talk about my experience: I have babysat, I have worked…',
  'I can answer “Have you ever…?” with a detail.',
  'I can talk to the camera for one minute or more.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 03: video · descobre · escada (PORTAS) · prova (os dados estão no topo do aula.js) */
