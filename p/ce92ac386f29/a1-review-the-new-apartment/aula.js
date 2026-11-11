/* ============================================================
   REVIEW · A1 · UNIT 4 · THE NEW APARTMENT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js.
   Unidade 4 (Onde as coisas estão): at / in / on com lugares; preposições de posição (on the table,
   next to, in front of, between … and …); there is / there are e Is there…?; some / any,
   how much / how many.
   A missão: uma imobiliária pequena. O aluno pergunta ao dono (o professor) sobre três apartamentos
   e depois descreve um para a cliente: “There are two bedrooms. It’s next to a park.”
   ============================================================ */
var REV = { nivel: 'A1', unidade: 4, titulo: ['The New', 'Apartment'], tema: 'Where things are', placa: 'FOR RENT', lugarConversa: 'THE BALCONY', cor: '#8fc7b0', cor2: '#c4ead8',
  sub: 'Unit 4 review. You help at a small rental agency. Six doors, three apartments to check, and one client who needs a new home.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'I · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The New Apartment', t: 'Three apartments. Ask the owner.', p: 'Ask five questions about each apartment. Your teacher is the owner. Then describe one to the client.' },
  { k: 'cartao', est: 'w', min: 6, img: 'conversa', rot: 'III · Your Home', t: 'Your home is for rent! Write the ad.', p: 'Four short lines: rooms, what there is, where it is.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose one.', p: 'Choose one. Then say it with there is / there are.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The New Apartment Card', t: 'Four lines from Unit 4.', p: 'Read one line at a time. Then keep the card in the corner for the last page.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'AT, IN, ON', tema: 'at / in / on with places', t: 'Where are you now? Where is your phone? Where is your family?', ex: 'I’m at home. My phone is on the table. My family is in Recife.', trap: 'at home (no “in the home”); on the table; in a city.' },
  { k: 'WHERE IS IT?', tema: 'next to, in front of, between', t: 'Look around. Say where three things are.', ex: 'The lamp is next to the bed. The cup is between the phone and the book.', trap: '“between of”, “next of” → between, next to.' },
  { k: 'THERE IS', tema: 'there is / there are', t: 'What is there in your kitchen? Three sentences.', ex: 'There is a fridge. There are two chairs. There isn’t a microwave.', trap: '“Have a fridge in my kitchen” → THERE IS a fridge.' },
  { k: 'IS THERE…?', tema: 'Is there…? / Are there…?', t: 'Ask your teacher three questions about their house.', ex: 'Is there a garden? Are there any plants?', trap: 'Is there + one thing; Are there + many.' },
  { k: 'SOME, ANY', tema: 'some / any', t: 'In your fridge now: say two things with some, one with any.', ex: 'There is some milk and some eggs. There isn’t any cheese.', trap: 'some in yes-sentences; any in no and questions.' },
  { k: 'HOW MANY?', tema: 'how much / how many', t: 'Ask your teacher two questions: one with how many, one with how much.', ex: 'How many rooms are there in your house? How much milk is there in your fridge?', trap: 'how many + plural things; how much + water, money, time.' }
];

var MISSAO = { pede: 'ASK THE OWNER FIVE QUESTIONS', quem: 'apartment', depois: 'The client is here',
  campos: [
    { c: 'quartos', r: 'BEDROOMS', q: 'How many bedrooms are there?', f: 'Bedrooms: how many?' },
    { c: 'cozinha', r: 'KITCHEN', q: 'Is there a big kitchen?', f: 'A kitchen? Big?' },
    { c: 'moveis', r: 'FURNITURE', q: 'Is there any furniture? A sofa? Some chairs?', f: 'A sofa? Chairs?' },
    { c: 'andar', r: 'FLOOR', q: 'Where is it? On the first floor?', f: 'Which floor?' },
    { c: 'perto', r: 'NEXT TO', q: 'What is next to the building?', f: 'Next to it: a park? a shop?' }],
  itens: [
    { k: 'APARTMENT 1', tag: 'GREEN STREET', ele: 'It', v: { quartos: 'two bedrooms', cozinha: 'a small kitchen', moveis: 'some chairs, no sofa', andar: 'on the second floor', perto: 'next to a park' }, diz: '“There are two bedrooms.” · “There is a kitchen, but it’s small.” · “There are some chairs, but there isn’t a sofa.” · “It’s on the second floor.” · “It’s next to a park.”' },
    { k: 'APARTMENT 2', tag: 'MAIN STREET', ele: 'It', v: { quartos: 'one bedroom', cozinha: 'a big kitchen', moveis: 'a sofa and a bed', andar: 'on the first floor', perto: 'between a bank and a café' }, diz: '“There is one bedroom.” · “Yes, there is: a big kitchen.” · “There is a sofa and a bed.” · “It’s on the first floor.” · “It’s between a bank and a café.”' },
    { k: 'APARTMENT 3', tag: 'HILL ROAD', ele: 'It', v: { quartos: 'three bedrooms', cozinha: 'no kitchen!', moveis: 'no furniture', andar: 'on the top floor', perto: 'in front of a school' }, diz: '“There are three bedrooms.” · “No, there isn’t a kitchen!” · “No, there isn’t any furniture.” · “It’s on the top floor.” · “It’s in front of a school.”' }],
  relato: { titulo: 'THE CLIENT IS HERE · DESCRIBE ONE APARTMENT',
    pede: function (x) { return 'Tell me about the apartment on ' + x.tag.charAt(0) + x.tag.slice(1).toLowerCase() + '.'; },
    chips: function () { return ['There is …', 'There are …', 'There isn’t any …', 'It’s on the … floor.', 'It’s next to / between / in front of …']; },
    modelo: function (x) { var v = x.v; return 'It has ' + v.quartos + ' and ' + v.cozinha + '. It’s ' + v.andar + ', ' + v.perto + '.'; } },
  nao: { tem: '“Have two bedrooms” → THERE ARE two bedrooms.', entre: '“between of a bank” → between a bank and a café.', algum: '“There isn’t some furniture” → there isn’t ANY furniture.' },
  fim: 'Three apartments, one happy client. there is / are, some / any and next to / between: all of Unit 4 in one agency.' };

var CARTAO = { ph: 'There are two bedrooms.\nThere is a small kitchen with some plants.\nThere isn’t a garden.\nIt’s on the third floor, next to a bakery.', rot: 'My home: the ad',
  chips: ['There is a ', 'There are ', 'There isn’t a ', 'There aren’t any ', 'some ', 'It’s on the ', ' floor', 'next to ', 'between ', 'in front of '],
  perg: ['YOUR AD', 'Bedrooms? What is there (and what isn’t)? Where is it?'],
  exemploRot: 'FOR RENT · RUA DAS FLORES', exemplo: [['BEDROOMS', 'two'], ['KITCHEN', 'small, with plants'], ['FURNITURE', 'a sofa'], ['FLOOR', 'the third'], ['NEXT TO', 'a bakery']],
  modelo: 'There are two bedrooms. There is a small kitchen with some plants.<br>There isn’t a garden.<br>It’s on the third floor, next to a bakery.' };

var CONVERSA = [
  { q: 'Is there a park near your house?', f: 'A park near you?', voce: ['Yes, there is.', 'No, there isn’t.', 'It’s next to …'], ex: 'Yes, there is. It’s in front of my building.' },
  { q: 'What is there on your desk right now?', f: 'Your desk: what is on it?', voce: ['There is a …', 'There are some …'], ex: 'There is a laptop, and there are some papers.' },
  { q: 'Where is your English book? At home? At work?', f: 'At home? At work?', voce: ['It’s at home.', 'It’s in my bag.'], ex: 'It’s on my desk, at home.' },
  { q: 'How many rooms are there in your house?', f: 'Rooms: how many?', voce: ['There are …', 'There is only one …'], ex: 'There are five rooms, and there is one bathroom.' },
  { q: 'Are there any plants in your house?', f: 'Plants at home?', voce: ['Yes, there are some …', 'No, there aren’t any …'], ex: 'Yes, there are some plants in the kitchen.' }
];

var PODE = [
  'I can use at / in / on with places: at home, in Recife, on the table.',
  'I can say where things are: next to, between, in front of.',
  'I can say there is / there are, and ask Is there…?',
  'I can use some and any.',
  'I can ask how much / how many.'
];

/* MECÂNICAS VARIADAS */
var RAPIDO = { seg: 60, itens: [['The phone is ___ the table.', 'on'], ['I’m ___ home.', 'at'], ['There ___ two chairs.', 'are'], ['There ___ a sofa.', 'is'], ['___ there a park?', 'Is'], ['How ___ chairs?', 'many'], ['How ___ water?', 'much'], ['There isn’t ___ milk.', 'any'], ['The café is ___ to the bank.', 'next'], ['She lives ___ Recife.', 'in']] };
var ESCOLHA = [{ a: 'an apartment next to a park', b: 'an apartment next to a mall', chips: ['A … for me.', 'There is / there are …'], ex: 'Next to a park. There are trees.' }, { a: 'a big kitchen', b: 'a big bedroom', chips: ['A big …', 'There is …'], ex: 'A big kitchen. There is a big table.' }, { a: 'the first floor', b: 'the top floor', chips: ['The … floor', 'There is …'], ex: 'The top floor. There is a great view.' }, { a: 'a house in the city', b: 'a house on the beach', chips: ['In the city / On the beach', 'There is …'], ex: 'On the beach. There is a lot of sun!' }];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep from Unit 4.', rotulo: 'Where things are', linhas: ['<b>at</b> home · <b>in</b> Recife · <b>on</b> the table', '<b>next to</b> the park · <b>between</b> a bank and a café · <b>in front of</b> the door', '<b>There is</b> a fridge · <b>There are</b> two bedrooms · <b>Is there</b> a garden?', '<b>some</b> in yes · <b>any</b> in no and questions · <b>How many</b> chairs? · <b>How much</b> space?'], uso: { p: 'Your turn. Describe an apartment to a client: how many rooms, where it is, one thing it has.', molde: ['There are …', 'It’s next to …', 'There is a …'], ex: 'There are two bedrooms. It’s next to a park. There is a small balcony.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
