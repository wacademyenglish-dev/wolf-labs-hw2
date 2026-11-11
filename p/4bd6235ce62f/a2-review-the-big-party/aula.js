/* ============================================================
   REVIEW · A2 · UNIT 4 · THE BIG PARTY · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: rapido · tabuleiro · cartao · escolha · pode.
   Unidade 4 (Quanto e quem): a few / many com contável, a little / much com incontável, a lot of;
   too much / too many, enough; all / every / some / any / none; a / an / the; somebody / anybody /
   nobody, something / anything / nothing (uma negativa só).
   A missão aqui é o TABULEIRO: o aluno organiza uma festa, casa por casa.
   ============================================================ */
var REV = { nivel: 'A2', unidade: 4, titulo: ['The Big', 'Party'], tema: 'How much, how many, and who', placa: 'PARTY TONIGHT', lugarConversa: 'AFTER THE PARTY', cor: '#f39ac0', cor2: '#f9cde0',
  sub: 'Unit 4 review. Your friend’s birthday party is tonight and you plan it. Roll the die, move on the board, and get everything ready.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'I · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'II · The Party Board', t: 'Roll, move, plan the party.', p: 'Your teacher rolls the die. Do the task on your square, out loud.' },
  { k: 'cartao', est: 'w', min: 6, img: 'conversa', rot: 'III · The Invitation', t: 'Write the invitation and the shopping list.', p: 'Four short lines: when, where, what to bring, how much / how many.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Party Rules', t: 'Four lines for the big party.', p: 'Read one line at a time. Then keep the card in the corner for the last page.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var CARTAO = { ph: 'It’s Lia’s birthday on Saturday at 8 PM!\nCome to my apartment. Everybody is welcome.\nPlease bring a little ice and a few cups.\nWe don’t need anything else. We have a lot of food!', rot: 'The invitation',
  chips: ['Please bring ', 'a few ', 'a little ', 'a lot of ', 'We don’t need any ', 'We need some ', 'Everybody ', 'Nobody ', 'too much ', 'enough '],
  perg: ['THE INVITATION', 'When? Where? What should people bring? How much? How many?'],
  exemploRot: 'SHOPPING LIST', exemplo: [['CUPS', 'a few more'], ['ICE', 'a little'], ['CAKE', 'one big cake'], ['JUICE', 'a lot of'], ['CHAIRS', 'enough? not yet']],
  modelo: 'It’s Lia’s birthday on Saturday at 8 PM! Come to my apartment.<br>Please bring a little ice and a few cups.<br>We don’t need anything else. We have a lot of food!' };

var PODE = [
  'I can use a few / many with things I count, a little / much with things I don’t.',
  'I can say too much, too many and (not) enough.',
  'I can use some, any, every and none.',
  'I can use somebody, anybody, nobody, something, anything, nothing.',
  'I can use a, an and the.'
];

/* MECÂNICAS VARIADAS */
/* A2 R4: rapido · tabuleiro · cartao · escolha */
var RAPIDO = { seg: 60, itens: [['How ___ cups? (count)', 'many'], ['How ___ juice?', 'much'], ['a ___ cups (some, not many)', 'few'], ['a ___ ice (some, not much)', 'little'], ['There isn’t ___ cake left.', 'any'], ['___ came! (0 people)', 'Nobody'], ['Is there ___ to eat? (question)', 'anything'], ['There are too ___ people!', 'many'], ['___ apple', 'an'], ['We have ___ chairs? (the right number)', 'enough']] };
var TABULEIRO = { rot: 'LIA’S PARTY', centro: 'Plan it all, square by square.', casas: [
  { k: 'START', t: 'Who is coming? Say three names and “nobody else”.', ex: 'Ana, Leo and Mei are coming. Nobody else!' },
  { k: 'CUPS', t: 'Count the cups. Ask: “How many cups do we have?” and answer.', ex: 'How many cups do we have? Only a few. We need more.' },
  { k: 'ICE', t: 'Ask about the ice with much, and answer with a little.', ex: 'How much ice do we have? Just a little.' },
  { k: 'MUSIC', t: 'Is there anybody who can play music? Answer with somebody or nobody.', ex: 'Yes! Somebody can: Leo plays the guitar.' },
  { k: 'FOOD', t: 'Too much or too many? Tell me about the food.', ex: 'We have too much rice and too many sandwiches!' },
  { k: 'CHAIRS', t: 'Do we have enough chairs? Say why or why not.', ex: 'No, we don’t have enough chairs. There are ten guests and six chairs.' },
  { k: 'CAKE', t: 'Describe the cake with a, an and the.', ex: 'We have a cake and an ice cream. The cake is chocolate.' },
  { k: 'DRINKS', t: 'Say what there is and what there isn’t, with some and any.', ex: 'There is some juice, but there isn’t any soda.' },
  { k: 'PRESENT', t: 'Did everybody bring something? Use every and something.', ex: 'Everybody brought something. Every guest brought a small present.' },
  { k: 'PROBLEM', t: 'Oh no! Is there anything to eat for a vegetarian? Answer.', ex: 'There’s nothing for vegetarians! Let’s buy some vegetables.' },
  { k: 'CLEAN', t: 'After the party: how much / how many? Say two things.', ex: 'There are a lot of dirty cups and a little cake left.' },
  { k: 'FINISH', t: 'Say thank you to the guests. Use all of you / everybody.', ex: 'Thank you, everybody! All of you made it a great party.' }] };
var ESCOLHA = [
  { a: 'a small party with a few friends', b: 'a big party with a lot of people', chips: ['I prefer …', 'because …'], ex: 'A small party with a few friends, because I can talk to everybody.' },
  { a: 'too much food', b: 'not enough food', chips: ['Too much / not enough, because …'], ex: 'Too much food. Nobody likes a hungry guest!' },
  { a: 'a party at home', b: 'a party at a restaurant', chips: ['At …', 'because there is / there isn’t …'], ex: 'At home, because there isn’t any noise.' },
  { a: 'cook something', b: 'buy something', chips: ['I’d …', 'because …'], ex: 'Buy something! I can’t cook anything.' }];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep from Unit 4.', rotulo: 'The party rules', linhas: ['<b>a few</b>, <b>many</b> + things you count · <b>a little</b>, <b>much</b> + things you don’t', '<b>too much</b> ice · <b>too many</b> cups · <b>enough</b> chairs', '<b>somebody</b>, <b>anybody</b>, <b>nobody</b> · only ONE no: I don’t see <b>anybody</b>', '<b>a</b> cake · <b>an</b> idea · <b>the</b> cake we already bought'], uso: { p: 'Your turn. You are planning a party. Say what you have too much of, what you don’t have enough of, and who is coming.', molde: ['We have too much …', 'We don’t have enough …', 'Nobody …'], ex: 'We have too much ice. We don’t have enough chairs. Nobody brings the music!' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
