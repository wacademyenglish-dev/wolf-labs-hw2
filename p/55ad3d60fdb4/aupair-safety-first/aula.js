/* ============================================================
   AU PAIR · MODULE 5 · LESSON 18 OF 24 · SAFETY FIRST · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   A segurança das crianças: must / mustn't / don't have to; água, carro, remédios, sono do bebê, primeiros socorros.
   (O programa exige treino de segurança infantil antes da colocação: 8 h, 4 delas sobre bebês. A aula não substitui
   curso de primeiros socorros: recomenda um certificado de CPR.) Vídeo: AuPairCare, "Is Being an Au Pair in the USA
   Safe in 2026?" (1:15), sobre o apoio da agência. Legenda conferida.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 18, kick: 'AU PAIR · MODULE 5 · LESSON 18 OF 24', titulo: ['Safety', 'First'], tema: 'Rules that keep children safe', placa: 'LESSON 18',
  lugarConversa: 'THE STAIRS AT NIGHT', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Water, cars, medicine, babies sleeping, stairs. Today you learn the safety rules every au pair must know, and the grammar to say them: must, mustn’t, don’t have to.',
  chips: ['Who supports you', 'must · mustn’t · don’t have to', 'Must or mustn’t?'], botao: 'Start the lesson',
  nota: 'This lesson is not a first aid course. Before you fly, take a CPR and first aid class, and ask the family about their rules.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 6, img: 'conversa', rot: 'I · You Are Supported', t: 'How an agency keeps au pairs safe.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'II · Must, Mustn’t, Don’t Have To', t: 'Three small words, three different rules.', p: 'Compare A and B. What is the difference?' },
  { k: 'separa', est: 'f', min: 14, img: 'conversa', rot: 'III · Must or Mustn’t?', t: 'Twelve safety rules.', p: 'Choose the side and say the full rule.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 18: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'zjegko3wgpw', titulo: 'Is Being an Au Pair in the USA Safe in 2026?', fonte: 'AUPAIRCARE · 1 MIN',
  antes: { q: 'Who checks that a host family is a safe place for an au pair?', h: 'The agency and its local representatives.' },
  ouvir: 'Listen: What do the area directors do?',
  perguntas: [
    { q: 'What does the director say is most important for the agency?', h: 'The health, safety and welfare of the au pair.' },
    { q: 'What happens when au pairs first arrive?', h: 'Orientation in New York City, where they meet the agency people and other au pairs.' },
    { q: 'What do the area directors do with the host family?', h: 'They visit the home, check that there is an appropriate bedroom, and help with a background check of the family.' },
    { q: 'What do they offer the au pairs every month?', h: 'Support and cultural experiences with other local au pairs.' }],
  fecho: 'Your safety matters too. Now: the kids’ safety.' };

var DESCOBRE = {
  pares: [
    { a: 'You {must} use a car seat for the kids.', b: 'You {mustn’t} use your phone while driving.', q: 'What is the difference?', r: '<b>must</b> = it is necessary. <b>mustn’t</b> = it is NOT allowed.' },
    { a: 'You {mustn’t} cook dinner for the adults.', b: 'You {don’t have to} cook dinner for the adults.', q: 'Which one is true for an au pair? Why?', r: '<b>don’t have to</b> = it is not necessary (but it is not forbidden). “Mustn’t” would mean it is not allowed.' },
    { a: 'You {have to} stay with the kids at the pool.', b: 'You {must} stay with the kids at the pool.', q: 'Is there a big difference?', r: 'Very similar: both mean it is necessary. <b>have to</b> is more common in speaking.' },
    { a: 'Medicine {must} be out of reach.', b: 'Medicine {must be} on the kitchen table.', q: 'Which rule keeps a child safe?', r: 'A. Medicines, cleaning products and knives: always out of reach.' }],
  regra: [['MUST / HAVE TO', 'necessary: You must use a car seat.'], ['MUSTN’T', 'not allowed: You mustn’t leave a child alone in the bath.'], ['DON’T HAVE TO', 'not necessary: You don’t have to clean the whole house.'], ['THE GRAMMAR', 'must + base verb (no to, no -s)']],
  armas: [['MUST', 'You must to watch them.', 'You must watch them.', 'must + verb'], ['-S', 'She musts stay.', 'She must stay.', 'no -s'], ['MEANING', 'You mustn’t clean the house. (= not necessary)', 'You don’t have to clean the house.', 'not necessary'], ['QUESTION', 'Do I must…?', 'Do I have to…?', 'question with have to']] };

var SEPARA = { rot: 'MUST OR MUSTN’T?', a: 'YOU MUST', b: 'YOU MUSTN’T', fim: 'Ask the family for THEIR rules on day one: allergies, screens, sweets, pool, bedtime.', itens: [
  ['…use a car seat for the children, every time.', 'a', 'You must use a car seat, even for short trips.'],
  ['…leave a child alone in the bath, even for one minute.', 'b', 'Children can drown in very little water, very fast.'],
  ['…keep medicines and cleaning products out of reach.', 'a', 'Up high, or locked.'],
  ['…shake a baby, even when you are very stressed.', 'b', 'Never. If you are stressed, put the baby in the crib, step away and breathe. Then ask for help.'],
  ['…stay close and watch the kids at the pool all the time.', 'a', 'Eyes on the water, phone away.'],
  ['…leave a child alone in the car.', 'b', 'Never, not even for a minute.'],
  ['…put a baby to sleep on his back, in his crib.', 'a', 'The safe way for a baby to sleep. Ask the parents about their routine.'],
  ['…give medicine the parents didn’t approve.', 'b', 'Only with the parents’ instructions.'],
  ['…know the address of the house and the emergency numbers.', 'a', 'For a 911 call, the address comes first.'],
  ['…use your phone while you drive the kids.', 'b', 'Hands on the wheel, eyes on the road.'],
  ['…keep the gate at the top of the stairs closed.', 'a', 'Falls are a common accident with small children.'],
  ['…open the door to strangers when you are alone with the kids.', 'b', 'Ask the family about deliveries and visitors.']] };

var PODE = [
  'I can say how the agency supports au pairs.',
  'I can use must, mustn’t and don’t have to correctly.',
  'I can say the main safety rules: water, car, medicine, sleep, stairs.',
  'I can ask the family about their rules: Do I have to…? Can I…?'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 18: video · descobre · separa (os dados estão no topo do aula.js) */
