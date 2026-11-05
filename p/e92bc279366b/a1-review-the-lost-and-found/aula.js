/* ============================================================
   REVIEW · A1 · UNIT 2 · THE LOST AND FOUND · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js.
   Unidade 2 (Coisas e pessoas): a / an pelo som e o adjetivo antes da coisa; tamanho + cor + coisa;
   but × and; o plural regular e irregular; this / that / these / those.
   A missão: o balcão de achados e perdidos de uma estação, à noite. Três donos descrevem o que
   perderam; no fim o aluno devolve as coisas: “Is this your umbrella? Are these your keys?”
   ============================================================ */
var REV = { nivel: 'A1', unidade: 2, titulo: ['The Lost', 'and Found'], tema: 'Things and people', placa: 'LOST & FOUND', lugarConversa: 'THE WAITING ROOM', cor: '#e0a85c', cor2: '#f3cf92',
  sub: 'Unit 2 review. Tonight you work at the lost and found desk of a train station. Six doors, three owners, and everything goes back home.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'I · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a line, across, down or diagonal, is a BINGO.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Lost and Found', t: 'Three people lost something. Find it.', p: 'Ask each owner five questions. Your teacher is the owner. Then give the things back.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'A OR AN?', tema: 'a / an by the sound', t: 'Say a or an: umbrella, bag, egg, house, orange, hour.', ex: 'an umbrella, a bag, an egg, a house, an orange, an hour.', trap: 'an before a vowel SOUND: an hour (h is silent).' },
  { k: 'SMALL BLACK BAG', tema: 'size + color + thing', t: 'Describe two things near you. Size, color, thing.', ex: 'a small black phone and a big white cup.', trap: '“a bag black” → a black bag. Adjective first.' },
  { k: 'BUT OR AND?', tema: 'but × and', t: 'Say one sentence about your phone with and, and one with but.', ex: 'My phone is old and slow, but it’s my favorite.', trap: 'but = a surprise, the other side.' },
  { k: 'ONE, TWO', tema: 'the plural', t: 'Say the plural: book, box, baby, child, person, foot.', ex: 'books, boxes, babies, children, people, feet.', trap: 'children / people: no -s. Not “childrens”.' },
  { k: 'THIS OR THESE?', tema: 'this / that / these / those', t: 'Point and say: one thing near you, two things near you, one thing far.', ex: 'This is my pen. These are my keys. That is the door.', trap: 'these + are (plural). “this keys” → these keys.' },
  { k: 'WHO IS IT?', tema: 'describing people', t: 'Describe a person in your family in two short lines.', ex: 'My brother is tall and funny. His hair is short and black.', trap: 'is + adjective: tall, funny, short, black.' }
];

var MISSAO = { pede: 'AT THE DESK · ASK FIVE QUESTIONS', quem: 'owner', depois: 'Give the things back',
  campos: [
    { c: 'coisa', r: 'THING', q: 'What is it? A bag? An umbrella?', f: 'What is it?' },
    { c: 'quantos', r: 'HOW MANY', q: 'Is it one thing, or two or three?', f: 'One? Two?' },
    { c: 'tam', r: 'SIZE', q: 'Is it big or small?', f: 'Big or small?' },
    { c: 'cor', r: 'COLOR', q: 'What color is it?', f: 'The color?' },
    { c: 'velho', r: 'NEW / OLD', q: 'Is it new or old?', f: 'New or old?' }],
  itens: [
    { k: 'OWNER 1', tag: 'TICKET 31', ele: 'this', v: { coisa: 'an umbrella', quantos: 'one', tam: 'small', cor: 'black', velho: 'old' }, diz: '“It’s an umbrella.” · “One umbrella.” · “It’s small.” · “It’s black.” · “It’s old, but I love it!”', frase: 'a small black umbrella' },
    { k: 'OWNER 2', tag: 'TICKET 32', ele: 'these', v: { coisa: 'keys', quantos: 'three', tam: 'small', cor: 'silver', velho: 'new' }, diz: '“They’re keys.” · “Three keys.” · “They’re small.” · “They’re silver.” · “They’re new.”', frase: 'three small silver keys' },
    { k: 'OWNER 3', tag: 'TICKET 33', ele: 'this', v: { coisa: 'a suitcase', quantos: 'one', tam: 'big', cor: 'blue', velho: 'new' }, diz: '“It’s a suitcase.” · “Just one.” · “It’s very big.” · “It’s blue.” · “It’s new and expensive!”', frase: 'a big blue suitcase' }],
  relato: { titulo: 'THE OWNER IS BACK · GIVE IT BACK',
    pede: function (x) { return 'Hello! I’m here for ' + x.tag.toLowerCase() + '. Are my things here?'; },
    chips: function (x) { return x.ele === 'these' ? ['Are these your …?', 'Here you are.', 'They are …'] : ['Is this your …?', 'Here you are.', 'It is a …']; },
    modelo: function (x) { return x.ele === 'these' ? 'Are these your keys? Three small silver keys. Here you are!' : 'Is this your ' + x.v.coisa.replace(/^an? /, '') + '? ' + x.frase.charAt(0).toUpperCase() + x.frase.slice(1) + '. Here you are!'; } },
  nao: { an: '“a umbrella” → AN umbrella. A vowel sound: an.', ordem: '“a umbrella black” → a black umbrella. Color first.', these: '“this keys” → THESE keys. Plural: these.' },
  fim: 'Three owners, three happy endings. a / an, size + color + thing, plurals and this / these: all of Unit 2 at one desk.' };

var CARTAO = { ph: 'It’s a small red backpack.\nIt’s new.\nTwo books and an old phone\nare in the backpack.', rot: 'My lost thing',
  chips: ['It’s a ', 'It’s an ', ' small ', ' big ', 'It’s ', 'They’re ', ' new', ' old', 'Two ', ' and an '],
  perg: ['YOUR LOST THING', 'What is it? Size? Color? New or old? What’s inside?'],
  exemploRot: 'TICKET 34', exemplo: [['THING', 'a backpack'], ['HOW MANY', 'one'], ['SIZE', 'small'], ['COLOR', 'red'], ['NEW / OLD', 'new']],
  modelo: 'It’s a small red backpack. It’s new.<br>Two books and an old phone are in the backpack.' };

var CONVERSA = [
  { q: 'What is in your bag right now?', f: 'Your bag: what’s in it?', voce: ['A … is in my bag.', 'A … and an … are in my bag.'], ex: 'My phone, a black pen and an apple.' },
  { q: 'Your keys, your phone: which is always lost?', f: 'Keys? Phone? Wallet?', voce: ['My … is always lost.', 'My … are always lost.'], ex: 'My keys are always lost!' },
  { q: 'What is your favorite thing in your house? Describe it.', f: 'Your favorite thing?', voce: ['My favorite thing is …', 'It’s a big / small …'], ex: 'My sofa. It’s a big blue sofa, and it’s very old.' },
  { q: 'Describe your best friend.', f: 'Your friend: tall? short?', voce: ['He / She is …', 'His / Her hair is …'], ex: 'She is short and funny. Her hair is long and black.' },
  { q: 'How many people are in your family?', f: 'Your family: how many?', voce: ['… people.', '… children.'], ex: 'Five people. Two children.' }
];

var PODE = [
  'I can use a and an: an umbrella, a bag.',
  'I can describe a thing: a small black umbrella.',
  'I can say plurals: keys, boxes, children, people.',
  'I can say this / that / these / those.',
  'I can join ideas with and and but.'
];

/* MECÂNICAS VARIADAS */
var BINGO = [['a or an: umbrella', 'an umbrella'], ['Plural: child', 'children'], ['Describe your phone: size + color', 'a small black phone'], ['Plural: box', 'boxes'], ['this or these: ___ keys', 'these keys'], ['and or but: It’s old, ___ I love it.', 'but'], ['Plural: person', 'people'], ['a or an: hour', 'an hour'], ['Point far, one thing: ___ door', 'that door']];
var ERROS = { tipo: 'nota', rot: 'A LOST ITEM REPORT · TICKET 35', partes: ['I lost ', ['a umbrella', 'an umbrella', 'A vowel sound: an.'], ' and two ', ['keys silver', 'silver keys', 'The color comes first.'], '. In my bag: three ', ['book', 'books', 'Three: plural.'], ' and ', ['a old phone', 'an old phone', 'old starts with a vowel sound: an.'], '. ', ['This keys', 'These keys', 'Plural: these.'], ' are very important!'] };
var ESCOLHA = [{ a: 'a big old house', b: 'a small new apartment', chips: ['A … , because it’s …'], ex: 'A small new apartment, because it’s easy.' }, { a: 'two cats', b: 'one big dog', chips: ['… , because …'], ex: 'One big dog, because dogs are fun.' }, { a: 'a red car', b: 'a black car', chips: ['A … car.', 'because …'], ex: 'A red car, because it’s happy!' }, { a: 'three children', b: 'no children', chips: ['… children, because …'], ex: 'Three children! Big families are great.' }];
