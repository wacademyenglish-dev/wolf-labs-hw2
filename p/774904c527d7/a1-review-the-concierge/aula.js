/* ============================================================
   REVIEW · A1 · UNIT 5 · THE CONCIERGE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js.
   Unidade 5 (Faça, não faça, vamos): o imperativo (o verbo sozinho) e Don't + verbo; instruções em
   passos (first, then); let’s + verbo, let’s not, Shall we…?; direções (go straight, turn left AT,
   on your left, next to, between, opposite).
   A missão: a portaria de um hotel, com um mapa. Três turistas perguntam o caminho. Aqui o aluno
   não pergunta: ele DIZ cada parte do caminho, e o professor toca o que ouviu.
   ============================================================ */
var REV = { nivel: 'A1', unidade: 5, titulo: ['The', 'Concierge'], tema: 'Do, don’t, let’s', placa: 'CONCIERGE', lugarConversa: 'THE OLD TOWN', cor: '#e39a7a', cor2: '#f5c4ad',
  sub: 'Unit 5 review. You are the concierge of a small hotel, with a map on the desk. Six doors, three lost tourists, and a plan for tonight.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escada', est: 'f', min: 8, img: 'conversa', rot: 'I · The Ladder', t: 'Climb from easy to hard.', p: 'One step at a time. A good answer, and you go up.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Concierge', t: 'Three tourists. Give them the way.', p: 'For each tourist, say the way in five parts. Your teacher taps each part you say. Then plan the evening together.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · Mistake Hunter', t: 'Six lines from the concierge. Each one has a wrong word.', p: 'Tap the wrong word. Say the line right. Then check.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'COOK IT', tema: 'the imperative in steps', t: 'Tell your teacher how to make coffee. Three steps, verb first.', ex: 'Boil the water. Put the coffee in the cup. Add the water.', trap: 'Verb first, no you: “You boil the water” → Boil the water.' },
  { k: 'DON’T!', tema: 'Don’t + verb', t: 'Three rules for your house. Use Don’t.', ex: 'Don’t eat on the sofa. Don’t open the window. Don’t be late.', trap: '“No eat” / “Not open” → Don’t eat, don’t open.' },
  { k: 'PRESS ENTER', tema: 'first, then, finally', t: 'How do you send a message? Say it in steps: first, then, finally.', ex: 'First, open the app. Then write the message. Finally, press send.', trap: 'No “to” at the start: “To open the app” → Open the app.' },
  { k: 'LET’S', tema: 'let’s / let’s not / Shall we…?', t: 'Plan Saturday with your teacher: two ideas with let’s, one with Shall we…?', ex: 'Let’s go to the beach. Let’s not cook. Shall we eat pizza?', trap: '“Let’s to go” / “Let’s going” → Let’s go.' },
  { k: 'TURN LEFT', tema: 'directions', t: 'From your house to the nearest bakery: say the way.', ex: 'Go straight. Turn left at the bank. It’s on your right, next to a pharmacy.', trap: 'Turn left AT the bank. It’s ON your right.' },
  { k: 'PLEASE', tema: 'polite orders', t: 'Ask your teacher to do three things, nicely.', ex: 'Please close the door. Sit down, please. Wait a minute, please.', trap: '“Please to sit” → Please sit.' }
];

var MISSAO = { pede: 'SAY THE WAY · FIVE PARTS', quem: 'tourist', depois: 'Plan the evening',
  profRot: function (x) { return 'YOU ARE ' + x.k + ', GOING TO ' + x.tag + '. THE WAY ON THE MAP:'; }, profDica: 'Tap each part when the student says it. Any good way counts: the card shows a model.',
  campos: [
    { c: 'sai', r: 'START', q: 'Say how to start. (Go out of the hotel…)', f: 'Go out…' },
    { c: 'reto', r: 'STRAIGHT', q: 'Say how far. (Go straight…)', f: 'Go straight…' },
    { c: 'vira', r: 'TURN', q: 'Say where to turn. (Turn left / right at…)', f: 'Turn…' },
    { c: 'onde', r: 'IT’S', q: 'Say where it is. (It’s on your… next to…)', f: 'It’s on your…' },
    { c: 'nao', r: 'DON’T', q: 'Give one warning. (Don’t…)', f: 'Don’t…' }],
  itens: [
    { k: 'TOURIST 1', tag: 'THE MUSEUM', ele: 'museum', v: { sai: 'Go out of the hotel.', reto: 'Go straight for two blocks.', vira: 'Turn left at the bank.', onde: 'It’s on your right, next to the park.', nao: 'Don’t take the bus. It’s close!' }, diz: 'You ask: “Excuse me, where is the museum?” The way on the map: out of the hotel → straight two blocks → left at the bank → on the right, next to the park. A good warning: don’t take the bus (it’s close).' },
    { k: 'TOURIST 2', tag: 'THE BEACH', ele: 'beach', v: { sai: 'Go out and turn right.', reto: 'Go straight to the church.', vira: 'Turn right at the church.', onde: 'It’s at the end of the street.', nao: 'Don’t forget your sunscreen!' }, diz: 'You ask: “How do I get to the beach?” The way: out, right → straight to the church → right at the church → at the end of the street. A good warning: don’t forget your sunscreen.' },
    { k: 'TOURIST 3', tag: 'THE BAKERY', ele: 'bakery', v: { sai: 'Go out of the hotel.', reto: 'Cross the street.', vira: 'Turn left at the pharmacy.', onde: 'It’s opposite the school, between a bank and a café.', nao: 'Don’t go at night. It’s closed!' }, diz: 'You ask: “Is there a bakery near here?” The way: out → cross the street → left at the pharmacy → opposite the school, between a bank and a café. A good warning: don’t go at night (it’s closed).' }],
  relato: { titulo: 'TONIGHT · PLAN THE EVENING WITH THE TOURIST',
    pede: function (x) { return 'We’re free tonight! What do we do near the ' + x.ele + '?'; },
    chips: function () { return ['Let’s …', 'Let’s not …', 'Shall we …?', 'First, … Then, …']; },
    modelo: function (x) { return 'Let’s go to the ' + x.ele + ' first. Then let’s have dinner at the café. Let’s not take a taxi. Shall we walk?'; } },
  nao: { you: '“You turn left” → TURN left. Verb first.', no: '“No take the bus” → DON’T take the bus.', lets: '“Let’s to go” → LET’S GO.' },
  fim: 'Three tourists get to their place. The imperative, don’t, let’s and directions: all of Unit 5 at one desk.' };

var CARTAO = { ph: 'Go out of the metro station.\nGo straight for one block.\nTurn right at the supermarket.\nMy house is the blue one, next to a pharmacy.\nDon’t ring the bell. Call me!', rot: 'The way to my house',
  chips: ['Go straight ', 'Turn left at ', 'Turn right at ', 'It’s on your ', ' next to ', 'opposite ', 'Don’t ', 'First, ', 'Then '],
  perg: ['THE WAY TO YOUR HOUSE', 'Go…, turn…, it’s next to…, and one don’t.'],
  exemploRot: 'A NOTE FOR A FRIEND', exemplo: [['START', 'the metro'], ['STRAIGHT', 'one block'], ['TURN', 'right at the supermarket'], ['IT’S', 'next to a pharmacy'], ['DON’T', 'ring the bell']],
  modelo: 'Go out of the metro station. Go straight for one block.<br>Turn right at the supermarket.<br>My house is the blue one, next to a pharmacy.<br>Don’t ring the bell. Call me!' };

var CONVERSA = [
  { q: 'How do you go to work or school? Tell me the way.', f: 'Your way to work?', voce: ['First, I …', 'Go …', 'Turn …'], ex: 'I take the bus. Then I walk, and I turn left at the bank.' },
  { q: 'Give me one rule from your home.', f: 'A rule at home?', voce: ['Don’t …', 'Please …'], ex: 'Don’t wear shoes in the house!' },
  { q: 'Tell me how to make your favorite food. Three steps.', f: 'Your favorite food: how?', voce: ['First, …', 'Then, …', 'Finally, …'], ex: 'First, cut the onion. Then cook the rice. Finally, add the beans.' },
  { q: 'It’s Saturday. What’s your plan for us?', f: 'Saturday: your idea?', voce: ['Let’s …', 'Shall we …?', 'Let’s not …'], ex: 'Let’s go to the park! Let’s not watch TV. Shall we have lunch out?' },
  { q: 'Is there a nice place in your city for a tourist? How do I get there?', f: 'A nice place? The way?', voce: ['Go to …', 'Take the …', 'It’s next to …'], ex: 'Go to the old market. Take the metro. It’s next to the river.' }
];

var PODE = [
  'I can give instructions with the verb first: Open the app.',
  'I can say don’t: Don’t take the bus.',
  'I can put steps in order: first, then, finally.',
  'I can suggest with let’s and Shall we…?',
  'I can give directions: turn left at…, it’s on your right.'
];

/* MECÂNICAS VARIADAS */
var ERROS = { tipo: 'nota', rot: 'A NOTE FOR THE TOURIST · FROM THE OLD CONCIERGE', partes: ['To the museum: ', ['You go', 'Go', 'Verb first, no you.'], ' out of the hotel. ', ['Turn left in', 'Turn left at', 'turn left AT the bank.'], ' the bank. It’s on your right, ', ['next the', 'next to the', 'next TO.'], ' park. ', ['No take', 'Don’t take', 'Don’t + verb.'], ' the bus! Tonight ', ['let’s to go', 'let’s go', 'let’s + verb.'], ' to the old town.'] };
var CADEIRA = { itens: [{ alvo: 'Ask me the way to a bakery.', dica: 'Excuse me, where is the bakery?', resp: 'Go straight and turn right at the bank.' }, { alvo: 'Ask me to help you, nicely.', dica: 'Please help me with this map.', resp: 'Sure!' }, { alvo: 'Invite me to do something tonight.', dica: 'Let’s … / Shall we …?', resp: 'Good idea! Let’s go.' }, { alvo: 'Ask me for one rule in my house.', dica: 'What’s a rule in your house?', resp: 'Don’t eat in the bedroom!' }, { alvo: 'Ask me how to make my favorite drink.', dica: 'How do you make it?', resp: 'Cut a lemon, add water and sugar.' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G14 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'cacaErro', titulo: 'Mistake hunter. The way to the museum.', toque: 'People who speak Portuguese often say these. Tap the wrong word before you see the answer.', itens: [{ f: '[[You]] turn left at the bank.', r: '<b>Turn</b> left at the bank.', d: 'An order: the verb first. No you.' }, { f: '[[No]] take the bus.', r: '<b>Don’t</b> take the bus.', d: 'For no: don’t + verb.' }, { f: 'Let’s [[to]] go!', r: 'Let’s <b>go</b>!', d: 'Let’s + verb. No to.' }, { f: 'Turn left [[in]] the bank.', r: 'Turn left <b>at</b> the bank.', d: 'A point on the way: at.' }, { f: 'The museum is [[in]] your right.', r: 'The museum is <b>on</b> your right.', d: 'on your left, on your right.' }, { f: 'Please [[to]] sit down.', r: 'Please <b>sit</b> down.', d: 'Please + verb. No to.' }], nota: 'An order is the clean verb, first: <b>Turn</b>, <b>Go</b>, <b>Sit</b>. No you, no to. For no: <b>Don’t</b>. Together: <b>Let’s go</b>.', uso: { p: 'Your turn. A tourist asks for the bank. Give three steps with a verb first.', molde: ['Go straight …', 'Turn left at …', 'It’s on your right.'], ex: 'Go straight. Turn left at the hotel. The bank is on your right.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_caca', GX_EXPLICA); };
