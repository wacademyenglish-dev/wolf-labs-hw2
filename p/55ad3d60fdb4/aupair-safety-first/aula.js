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
  { k: 'gx', est: 'f', min: 5, img: 'conversa', rot: 'II · Three Small Words', t: 'One word, three different rules.', p: 'Read the three rules. Tap the right one for each new sentence. Then say your own.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'III · Must, Mustn’t, Don’t Have To', t: 'Three small words, three different rules.', p: 'Compare A and B. What is the difference?' },
  { k: 'separa', est: 'f', min: 14, img: 'conversa', rot: 'IV · Must or Mustn’t?', t: 'Twelve safety rules.', p: 'Choose the side and say the full rule.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Lesson 18: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
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

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'Must, mustn’t, don’t have to. Three rules for the kids.',
  usos: [
    { t: 'MUST', f: 'You must use a car seat.', d: 'It is necessary. It is the law.' },
    { t: 'MUSTN’T', f: 'You mustn’t leave a baby alone in the bath.', d: 'It is not allowed. It is dangerous.' },
    { t: 'DON’T HAVE TO', f: 'You don’t have to cook for the adults.', d: 'It is not necessary. It is not your job.' }
  ],
  pergunta: 'Which rule is it?',
  itens: [
    { f: 'You … hold a small child’s hand near the street.', c: 0, d: 'It is necessary: a car can come.' },
    { f: 'You … give the kids your own medicine.', c: 1, d: 'It is not allowed.' },
    { f: 'You … clean the whole house.', c: 2, d: 'It is not part of your duties.' },
    { f: 'Medicine … be out of reach.', c: 0, d: 'It is necessary for safety.' },
    { f: 'You … wake the baby to change a clean diaper.', c: 2, d: 'It is not necessary. Let the baby sleep.' },
    { f: 'You … leave the kids alone at the pool.', c: 1, d: 'It is never allowed.' }
  ],
  nota: '<b>must</b> + verb: it is necessary. <b>mustn’t</b> + verb: it is not allowed. <b>don’t have to</b> + verb: you can, but you don’t need to. The verb stays clean: no to, no -s.',
  uso: { p: 'Your turn. About your au pair year: one thing you must do, one thing you mustn’t do, and one thing you don’t have to do.', molde: ['I must …', 'I mustn’t …', 'I don’t have to …'], ex: 'I must watch the kids at the pool. I mustn’t use my phone when I drive. I don’t have to cook for the parents.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
