/* ============================================================
   REVIEW · A1 · UNIT 3 · THE PET HOTEL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js.
   Unidade 3 (De quem é, o que eu tenho): his / her / their / its pelo dono; o 's; whose,
   mine / yours / hers; have got / has got com a resposta curta; have / has.
   A missão: a recepção de um hotel para animais. Três donos deixam os bichos; no fim, os donos
   voltam e o aluno devolve: “Whose dog is this? It’s Maria’s. Her dog has got big ears.”
   ============================================================ */
var REV = { nivel: 'A1', unidade: 3, titulo: ['The Pet', 'Hotel'], tema: 'Whose is it? What have you got?', placa: 'PET HOTEL', lugarConversa: 'THE QUIET ROOM', cor: '#d9b46a', cor2: '#f1d89a',
  sub: 'Unit 3 review. You work at the desk of a hotel for pets. Six doors, three owners and their animals, and everyone goes home with the right pet.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Pet Hotel', t: 'Three pets check in tonight.', p: 'Ask each owner five questions. Your teacher is the owner. Then give the pets back.' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'III · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'HIS OR HER?', tema: 'his / her / their / its', t: 'Talk about two people you know and their phones: “His phone is…, her phone is…”', ex: 'My dad? His phone is old. My sister? Her phone is new.', trap: 'his / her = the OWNER, not the thing. its = an animal or a thing.' },
  { k: 'ANA’S', tema: 'the possessive ’s', t: 'Say three things in your family with ’s.', ex: 'My mother’s car is red. My brother’s name is Leo. My dog’s bed is big.', trap: '“the car of my mother” → my mother’s car.' },
  { k: 'WHOSE?', tema: 'whose, mine / yours / hers', t: 'Your teacher points at things. Answer: “It’s mine / It’s yours / It’s hers.”', ex: 'Whose pen is this? It’s mine. And that? It’s yours.', trap: 'mine, not “my”. It’s hers (no apostrophe).' },
  { k: 'HAVE YOU GOT?', tema: 'have got + short answers', t: 'Have you got a car? A pet? A bike? Short answers.', ex: 'Yes, I have. / No, I haven’t.', trap: 'Short answer: Yes, I have. Not “Yes, I have got”.' },
  { k: 'HE HAS', tema: 'have / has', t: 'Your best friend: what has he or she got? Three things.', ex: 'She has a cat, a bike and two brothers.', trap: 'he / she / it HAS. “she have” → she has.' },
  { k: 'MONSTER', tema: 'has got to describe', t: 'Invent a monster: it has got… (eyes, legs, color).', ex: 'It has got three eyes, four legs and green hair.', trap: '“it have” → it has. Color before the noun: green hair.' }
];

var MISSAO = { pede: 'AT THE DESK · ASK FIVE QUESTIONS', quem: 'owner', depois: 'The owners are back',
  campos: [
    { c: 'dono', r: 'OWNER', q: 'What’s your name, please?', f: 'Your name?' },
    { c: 'pet', r: 'PET', q: 'What pet have you got?', f: 'A dog? A cat?' },
    { c: 'nome', r: 'ITS NAME', q: 'What’s its name?', f: 'The name?' },
    { c: 'tem', r: 'IT HAS GOT', q: 'What has it got? Big ears? A long tail?', f: 'Big ears? Long tail?' },
    { c: 'brinq', r: 'ITS THING', q: 'Has it got a favorite toy?', f: 'A toy? Yes or no?' }],
  itens: [
    { k: 'OWNER 1', tag: 'ROOM A', ele: 'Her', dono: 'Maria', v: { dono: 'Maria Lopes', pet: 'a dog', nome: 'Bolt', tem: 'big ears', brinq: 'a red ball' }, diz: '“I’m Maria Lopes.” · “I’ve got a dog.” · “Its name is Bolt.” · “It has got big ears.” · “Yes, it has: a red ball.”' },
    { k: 'OWNER 2', tag: 'ROOM B', ele: 'His', dono: 'Ken', v: { dono: 'Ken Ito', pet: 'a cat', nome: 'Miso', tem: 'green eyes', brinq: 'a blue mouse toy' }, diz: '“I’m Ken Ito.” · “I’ve got a cat.” · “Its name is Miso.” · “It has got green eyes.” · “Yes, it has: a little blue mouse toy.”' },
    { k: 'OWNERS 3', tag: 'ROOM C', ele: 'Their', dono: 'the twins', v: { dono: 'Lia and Theo', pet: 'a rabbit', nome: 'Pip', tem: 'long ears', brinq: 'no toy' }, diz: '“We’re Lia and Theo, the twins.” · “We’ve got a rabbit.” · “Its name is Pip.” · “It has got very long ears.” · “No, it hasn’t.”' }],
  relato: { titulo: 'THE OWNERS ARE BACK · WHOSE PET IS IT?',
    pede: function (x) { return 'Hi! Is my pet here? I’m ' + x.v.dono + '.'; },
    chips: function (x) { return ['Whose … is this?', 'It’s ' + x.dono + '’s …', x.ele + ' … has got …', 'Here is ' + x.ele.toLowerCase() + ' …']; },
    modelo: function (x) { var p = x.v.pet.replace(/^an? /, ''); return 'It’s ' + (x.dono === 'the twins' ? 'the twins’ ' : x.dono + '’s ') + p + '! ' + x.ele + ' ' + p + '’s name is ' + x.v.nome + '. It has got ' + x.v.tem + '.'; } },
  nao: { de: '“the dog of Maria” → Maria’s dog.', his: '“his dog” for Maria → HER dog. The owner is a woman.', have: '“it have big ears” → it HAS big ears.' },
  fim: 'Three pets, three happy owners. his / her / its, Maria’s, whose and has got: all of Unit 3 at one desk.' };

var CARTAO = { ph: 'I’ve got a cat.\nIts name is Nina.\nIt has got white paws and green eyes.\nNina is my daughter’s cat.', rot: 'My pet card',
  chips: ['I’ve got a ', 'Its name is ', 'It has got ', ' and ', 'It’s my ', '’s ', 'I haven’t got '],
  perg: ['YOUR PET CARD', 'What pet? Its name? What has it got? Whose is it? (No pet? Invent one!)'],
  exemploRot: 'ROOM D', exemplo: [['OWNER', 'Ana'], ['PET', 'a cat'], ['ITS NAME', 'Nina'], ['IT HAS GOT', 'green eyes'], ['ITS THING', 'a small bed']],
  modelo: 'I’ve got a cat. Its name is Nina.<br>It has got white paws and green eyes.<br>It’s my daughter’s cat.' };

var CONVERSA = [
  { q: 'Have you got a pet? What’s its name?', f: 'A pet? Its name?', voce: ['Yes, I have. Its name is …', 'No, I haven’t.'], ex: 'Yes, I have. A dog. Its name is Pipoca.' },
  { q: 'Whose car do you use: yours or your family’s?', f: 'Your car or your family’s?', voce: ['I use my …’s car.', 'It’s mine.'], ex: 'I use my husband’s car. I haven’t got a car.' },
  { q: 'What has your house got? A garden? A balcony?', f: 'A garden? A balcony?', voce: ['It has got …', 'It hasn’t got …'], ex: 'It has got a small balcony, but it hasn’t got a garden.' },
  { q: 'Describe your best friend’s family.', f: 'Your friend: brothers? sisters?', voce: ['His / Her family is …', 'He / She has got …'], ex: 'Her family is big. She has got three sisters.' },
  { q: 'What’s your favorite thing? Is it yours or your family’s?', f: 'Your favorite thing?', voce: ['My favorite thing is …', 'It’s my …’s.'], ex: 'My watch. It’s my grandfather’s old watch, but now it’s mine.' }
];

var PODE = [
  'I can say his / her / their / its for the owner.',
  'I can use ’s: Maria’s dog, my brother’s car.',
  'I can ask “Whose is it?” and answer mine / yours / hers.',
  'I can ask “Have you got…?” and answer “Yes, I have.”',
  'I can describe with has got: it has got big ears.'
];

/* MECÂNICAS VARIADAS */
var PARES = [['he', 'his'], ['she', 'her'], ['they', 'their'], ['it', 'its'], ['I', 'mine'], ['you', 'yours']];
PARES = PARES.map(function (p) { return [p[0], p[1], { his: 'Leo is my friend. His dog is big.', her: 'Ana has a cat. Her cat is white.', their: 'The twins love their rabbit.', its: 'The dog loves its red ball.', mine: 'This pen is mine.', yours: 'Is this bag yours?' }[p[1]]]; });
var CADEIRA = { itens: [{ alvo: 'Ask about my pets.', dica: 'Have you got a pet?', resp: 'Yes, I have. A cat.' }, { alvo: 'Ask about my pet’s name.', dica: 'What’s its name?', resp: 'Its name is Biscuit.' }, { alvo: 'Ask about my car.', dica: 'Have you got a car? What color is it?', resp: 'Yes, a small grey car.' }, { alvo: 'Ask whose bag is on my chair.', dica: 'Whose bag is this?', resp: 'It’s my sister’s.' }, { alvo: 'Ask about my family.', dica: 'Have you got brothers or sisters?', resp: 'I’ve got one brother.' }] };
