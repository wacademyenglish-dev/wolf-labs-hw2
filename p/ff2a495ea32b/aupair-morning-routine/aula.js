/* ============================================================
   AU PAIR · MODULE 5 · LESSON 17 OF 24 · MORNING ROUTINE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   A rotina com as crianças: imperativos gentis e firmes (Shoes on, please. Let's brush our teeth.), palavras de tempo.
   Vídeo: Au Pair in America, "Life with APiA | Gabi's 2nd Vlog" (7:21): um dia de trabalho real (café, lanches da natação,
   natação, cinema, jantar com legumes). Gabi é tcheca, mora na Virgínia e cuida de três meninas. Legenda conferida.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 17, kick: 'AU PAIR · MODULE 5 · LESSON 17 OF 24', titulo: ['Morning', 'Routine'], tema: 'A real day with the kids', placa: 'LESSON 17',
  lugarConversa: 'SCHOOL BUS TIME', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Breakfast, lunch boxes, shoes, teeth, the bus. Today you follow a real au pair’s day and learn to give instructions to kids: kind, short and clear.',
  chips: ['A day with Gabi', 'Kind and clear', 'The morning in order'], botao: 'Start the lesson',
  nota: 'With kids, short is kind: one instruction at a time, a choice when possible, and a smile.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 10, img: 'conversa', rot: 'I · A Day With Gabi', t: 'A real au pair’s working day.', p: 'One question first, then the video, then the questions.' },
  { k: 'transforma', est: 'o', min: 9, img: 'capa', rot: 'II · Kind and Clear', t: 'From bossy to kind, still clear.', p: 'Read the bossy instruction and the clue. Say it the kind way.' },
  { k: 'ordem', est: 'f', min: 7, img: 'conversa', rot: 'III · The Morning in Order', t: 'A school morning, in pieces.', p: 'Tap the steps in order. Then tell the morning with first, then, after that.' },
  { k: 'conversa', est: 'o', min: 8, img: 'capa', rot: 'IV · Your Routine', t: 'Talk about routines.', p: 'Answer, then ask back: “And you?”' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 17: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'jxW9txGgiSo', titulo: 'Life with APiA | Gabi’s 2nd Vlog', fonte: 'AU PAIR IN AMERICA · 7 MIN',
  antes: { q: 'What do you think an au pair does between 7 and 9 in the morning?', h: 'Wakes the kids, makes breakfast, prepares snacks or lunch, gets them dressed, school drop-off.' },
  ouvir: 'Listen: What does Gabi do in the morning? Where do they go during the day?',
  perguntas: [
    { q: 'What does Gabi usually do first in the morning?', h: 'She feeds the dog. Then she makes breakfast and snacks for the swimming lesson.' },
    { q: 'Where do they go during the day?', h: 'To the swimming pool, then home for lunch, then to the cinema.' },
    { q: 'What does she do while the kids play?', h: 'The dishes from the morning, then she joins them.' },
    { q: 'What do they have for dinner? What is the family rule?', h: 'Broccoli, green beans, chicken and rice. They try to put vegetables or fruit in every meal.' },
    { q: 'Where is Gabi from? Where does she live, and with how many kids?', h: 'From Czechia. She lives in Virginia, near Washington, D.C., and takes care of three girls.' }],
  fecho: '“This decision was the best decision in my life.” A real day: busy, simple and full.' };

var TRANSFORMA = { rot: 'KIND AND CLEAR', fim: 'Kind and clear: one instruction, a reason or a choice, and “please”.', itens: [
  { de: 'Eat your breakfast now!', pista: 'Let’s…', para: 'Let’s eat breakfast together. Then we can play for five minutes.' },
  { de: 'Put your shoes on!', pista: '… on, please. + a choice', para: 'Shoes on, please! The red ones or the blue ones?' },
  { de: 'Stop running!', pista: 'say what TO do', para: 'Walking feet inside, please.' },
  { de: 'Go brush your teeth.', pista: 'Can you…, please?', para: 'Can you brush your teeth, please? I’ll set a two-minute timer!' },
  { de: 'No TV!', pista: 'First…, then…', para: 'First we get dressed, then you can watch one show.' },
  { de: 'Hurry up!', pista: 'We have … minutes', para: 'We have five minutes until the bus. Backpack on, please!' }] };

var ORDEM = { rot: 'A SCHOOL MORNING', pede: 'Tap the six steps of a school morning in order.',
  passos: ['At 7:00, I wake the kids up with a song.', 'Then we have breakfast together.', 'After that, they get dressed and brush their teeth.', 'I check the backpacks and the lunch boxes.', 'At 8:10, we walk to the bus stop.', 'Finally, I wave goodbye and go back home to tidy their rooms.'],
  chips: ['At 7:00,', 'Then', 'After that,', 'Finally,'],
  modelo: 'At 7:00, I wake the kids up with a song. Then we have breakfast together. After that, they get dressed and brush their teeth. I check the backpacks and lunch boxes. At 8:10, we walk to the bus stop. Finally, I wave goodbye and tidy their rooms.' };

var CONVERSA = [
  { q: 'What time do you usually wake up?', f: 'When do you get up?', voce: ['I usually wake up at…', 'On weekdays,…', 'On weekends,…'], ex: 'I usually wake up at 6:30 on weekdays, and at 9 on weekends.' },
  { q: 'What do you usually have for breakfast?', f: 'What do you eat in the morning?', voce: ['I usually have…', 'I never…', 'In Brazil, we…'], ex: 'I usually have coffee with milk and bread with butter. In Brazil, we love pão de queijo.' },
  { q: 'How do you wake up a child who doesn’t want to wake up?', f: 'What do you do if a child is sleepy?', voce: ['I…', 'First,…', 'Then,…'], ex: 'First, I open the curtains and sing a funny song. Then I give a choice: “Five more minutes or get up now and choose your shirt?”' },
  { q: 'What is the most difficult part of a morning with kids?', f: 'What is hard in the morning?', voce: ['The hardest part is…', 'because…'], ex: 'The hardest part is the time, because everybody is slow and the bus doesn’t wait!' }];

var PODE = [
  'I can understand a real au pair’s day in English.',
  'I can give kind and clear instructions: Let’s…, … on, please, Can you…?',
  'I can describe a morning in order: first, then, after that, finally.',
  'I can talk about my own routine.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 17: video · transforma · ordem · conversa (os dados estão no topo do aula.js) */
