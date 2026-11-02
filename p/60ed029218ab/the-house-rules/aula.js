/* ============================================================
   THE HOUSE RULES · B1 · UNIT 6 (MUST, CAN, DEDUCE) · LIVE CLASS  16/10/2026
   Aula nova do livro B1 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: must / have to (obrigação), mustn't (proibido), don't have to (não precisa), should (conselho).
   A armadilha: mustn't ≠ don't have to.
   O mundo: o aluno vai dividir apartamento com dois estranhos; as regras da geladeira, um bilhete cheio de
   erros e, no fim, as regras da casa DELE.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 6, titulo: ['The House', 'Rules'], tema: 'Must, have to, mustn’t, don’t have to, should.',
  sub: 'You’re moving into a shared flat with two people you don’t know. Read the rules on the fridge, discover the difference between mustn’t and don’t have to, fix a passive-aggressive note, and write your own rules.',
  placa: 'FLAT 3 · THE RULES', lugarConversa: 'THE SHARED KITCHEN', cor: '#c9b8ff', cor2: '#e4dcff',
  chips: ['must · have to', 'mustn’t × don’t have to', 'Your house rules'], botao: 'Start the lesson', nota: 'You mustn’t smoke = it’s forbidden. You don’t have to cook = it’s not necessary. Very different!' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · The Rules on the Fridge', t: 'Welcome to Flat 3.', p: 'Read the rules out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'II · Mustn’t or Don’t Have To?', t: 'One word, a big difference.', p: 'Compare A and B. What is the difference in meaning?' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · The Angry Note', t: 'A flatmate left an angry note. Five mistakes.', p: 'Find a mistake, say the right form, then tap.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'IV · Your House Rules', t: 'Now write the rules of YOUR home.', p: 'Five rules: must, mustn’t, don’t have to, should.' }
];
var PORTAS = [];

var LEITURA = { rot: 'FLAT 3 · THE RULES (PLEASE READ!)', tipo: 'nota',
  antes: { q: 'Have you ever shared a house or a room? What was the hardest part?', h: 'Yes, at university. The dirty dishes!' },
  texto: '1. You {must} wash your dishes the same day.\n2. You {mustn’t} use other people’s food without asking. (Yes, Leo, the cheese.)\n3. We {have to} take out the trash on Tuesdays and Fridays. The building is strict.\n4. You {don’t have to} cook for everybody, but Sunday dinner together is nice.\n5. You {should} close the window when it rains. The floor is old.\n6. Guests are welcome, but they {mustn’t} stay more than three nights.\n7. You {don’t have to} be quiet all the time. Just after 11 p.m.',
  perguntas: [
    { q: 'What must you do with your dishes?', h: 'Wash them the same day.' },
    { q: 'What did Leo probably do?', h: 'He used somebody’s cheese without asking!' },
    { q: 'Do you have to cook for everybody?', h: 'No, you don’t have to. But Sunday dinner together is nice.' },
    { q: 'How long can guests stay?', h: 'Three nights maximum.' }],
  olha: 'Find the rules that are obligations, the ones that are forbidden, the ones that are not necessary, and the one that is advice.' };

var DESCOBRE = {
  pares: [
    { a: 'You {mustn’t} cook after midnight.', b: 'You {don’t have to} cook after midnight.', q: 'Same words, different meaning. What does each one mean?', r: 'A: it’s <b>forbidden</b> (não pode). B: it’s <b>not necessary</b> (não precisa), but you can.' },
    { a: 'We {have to} take out the trash on Tuesdays.', b: 'We {must} take out the trash on Tuesdays.', q: 'Is there a big difference here?', r: 'Almost none. <b>have to</b> often means an outside rule (the building). <b>must</b> often sounds like your own rule or a written rule.' },
    { a: 'You {should} close the window.', b: 'You {must} close the window.', q: 'Which one is advice, and which one is a rule?', r: '<b>should</b> = a good idea, advice. <b>must</b> = a rule, no choice.' },
    { a: 'He {doesn’t have to} pay.', b: 'He {don’t must} pay.', q: 'Which one is right?', r: '<b>must</b> has no do / does: he mustn’t. <b>have to</b> uses do / does: he doesn’t have to.' }],
  regra: [['MUST / HAVE TO', 'obligation: you must, we have to'], ['MUSTN’T', 'forbidden: you mustn’t smoke'], ['DON’T HAVE TO', 'not necessary: you don’t have to cook'], ['SHOULD', 'advice: you should close the window']],
  armas: [['TO', 'You must to wash', 'You <b>must wash</b>', 'must + verb, no to'], ['HE', 'He musts', 'He <b>must</b>', 'must has no -s'], ['NEGATIVE', 'You don’t must', 'You <b>mustn’t</b>', 'no do with must'], ['MEANING', 'mustn’t = não precisa', '<b>don’t have to</b> = não precisa', 'mustn’t = forbidden']] };

var ERROS = { tipo: 'nota', rot: 'A NOTE ON THE FRIDGE · FROM ANA', rotulo: 'MISTAKES', pede: 'Find the five mistakes. Say the right form, then tap.', fim: 'Five mistakes fixed. Now read it again: is it still angry? Make it friendlier.', dica: 'The student says the right form before tapping.', partes: [
  'To whoever ate my yogurt: you ', ['must to ask', 'must ask', 'must + verb, no to'], ' first! In this flat you ', ['don’t have to', 'mustn’t', 'forbidden, not “not necessary”'], ' eat other people’s food. Leo ',
  ['have to', 'has to', 'he: has to'], ' buy me two yogurts. And please, you ', ['must', 'should', 'this is advice, not a rule'], ' try the strawberry one, it’s delicious. PS: You ', ['don’t must', 'don’t have to', 'not necessary: don’t have to'], ' answer this note.'] };

var CARTAO = { ph: 'MY HOME · THE RULES\n1. You must take off your shoes at the door.\n2. You mustn’t feed the cat at the table.\n3. You don’t have to make your bed. I don’t!\n4. You should try my mom’s cake.\n5. We have to be quiet after ten: the neighbors are strict.', rot: 'My house rules',
  chips: ['You must ', 'You mustn’t ', 'You don’t have to ', 'You should ', 'We have to ', ' because '],
  perg: ['YOUR HOME', 'What must people do in your home? What is forbidden? What is not necessary? Any advice?'],
  exemploRot: 'MY RULES', exemplo: [['MUST', 'shoes off'], ['MUSTN’T', 'feed the cat at the table'], ['DON’T HAVE TO', 'make the bed'], ['SHOULD', 'try the cake'], ['HAVE TO', 'quiet after ten']],
  modelo: '1. You must take off your shoes at the door.<br>2. You mustn’t feed the cat at the table.<br>3. You don’t have to make your bed.<br>4. You should try my mom’s cake.<br>5. We have to be quiet after ten.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* B1 · The House Rules: leitura · descobre · erros · cartao */
