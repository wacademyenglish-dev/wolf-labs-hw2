/* ============================================================
   UNDER THE SOFA · A1 · UNIT 4 (WHERE THINGS ARE) · LIVE CLASS  16/10/2026
   Aula nova do livro A1 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: in, on, under, next to, behind, between + Where is…? / Where are…? It's… / They're…
   O mundo: a vizinha viajou e deixou o gato Mochi com o aluno; o bilhete diz onde está tudo, mas o gato sumiu.
   A1 friendly: frases curtas, resposta curta vale, "Say it easier" em toda pergunta.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1', unidade: 4, titulo: ['Under the', 'Sofa'], tema: 'Where is it? In, on, under, next to.',
  sub: 'Your neighbor is on a trip. You have her keys, her plants and her cat, Mochi. Read her note, find the little words of place, and then find Mochi and two more lost things.',
  placa: 'APARTMENT 4B', lugarConversa: 'YOUR HOME', cor: '#8be0b4', cor2: '#c9f0dc',
  chips: ['in · on · under', 'next to · behind', 'Where is Mochi?'], botao: 'Start the lesson', nota: 'Short answers are perfect: “Under the sofa.” “On the table.”' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'capa', rot: 'I · The Note', t: 'Your neighbor left a note.', p: 'Read the note out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · In, On or Under?', t: 'Small words, big difference.', p: 'Compare A and B. Which one is right? Why?' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'III · Where Is Mochi?', t: 'Three things are lost.', p: 'Ask your teacher five questions for each thing. Then say where it is.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'IV · Where Is It?', t: 'Four lines from Mochi’s house. You find the rule.', p: 'Read the four lines out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'conversa', est: 'o', min: 7, img: 'conversa', rot: 'V · Your Home', t: 'Your home: where are your things?', p: 'Answer, then ask the question back: “And you?”' }
];
var PORTAS = [];

var LEITURA = { rot: 'A NOTE ON THE FRIDGE · APARTMENT 4B', tipo: 'nota',
  antes: { q: 'Where are your keys right now? Point and say.', h: 'In my bag. / On the table.' },
  texto: 'Hi! Thank you for your help!\nThe keys are {on} the shelf, {next to} the plant.\nMochi’s food is {in} the kitchen, {under} the sink.\nThe plants are {on} the balcony.\nMochi is {behind} the TV or {between} the cushions.\nSee you on Friday! Lia',
  perguntas: [
    { q: 'Who is Mochi?', h: 'The cat. Lia’s cat.' },
    { q: 'Where are the keys?', h: 'On the shelf, next to the plant.' },
    { q: 'Where is Mochi’s food?', h: 'In the kitchen, under the sink.' },
    { q: 'Where is Mochi? Two places.', h: 'Behind the TV or between the cushions.' }],
  olha: 'Find six little words of place. Which one is for “inside”?' };

var DESCOBRE = {
  pares: [
    { a: 'The food is {in} the kitchen.', b: 'The food is {on} the kitchen.', q: 'Which one is right?', r: 'A room is a box: <b>in</b> the kitchen, in the bedroom, in my bag.' },
    { a: 'The keys are {on} the shelf.', b: 'The keys are {in} the shelf.', q: 'Which one is right?', r: 'A surface (table, shelf, floor): <b>on</b>.' },
    { a: 'Mochi is {under} the sofa.', b: 'Mochi is {below of} the sofa.', q: 'Which one is right?', r: 'Short and simple: <b>under</b> the sofa.' },
    { a: 'The plant is {next to} the TV.', b: 'The plant is {next} the TV.', q: 'Which one is right?', r: 'Two words: <b>next to</b>.' }],
  regra: [['IN', 'inside: in the box, in the kitchen'], ['ON', 'a surface: on the table, on the wall'], ['UNDER', 'below: under the bed'], ['NEXT TO · BEHIND · BETWEEN', 'next to the door · behind the TV · between the cushions']],
  armas: [['ROOM', 'on the kitchen', 'in the kitchen', 'a room: in'], ['TABLE', 'in the table', 'on the table', 'a surface: on'], ['NEXT', 'next the door', 'next to the door', 'next to'], ['BETWEEN', 'between of the cushions', 'between the cushions', 'no of']] };

var MISSAO = { pede: 'WHERE IS IT? · ASK FIVE QUESTIONS', quem: 'lost thing', depois: 'Say where they are',
  profRot: function (x) { return 'YOU KNOW WHERE ' + x.k + ' IS. ANSWER YES OR NO, SHORT:'; },
  campos: [
    { c: 'sala', r: 'ROOM', q: 'Is it in the living room?', f: 'Living room?' },
    { c: 'em', r: 'ON / IN', q: 'Is it on something? In something?', f: 'On? In?' },
    { c: 'sob', r: 'UNDER', q: 'Is it under something?', f: 'Under?' },
    { c: 'perto', r: 'NEXT TO', q: 'What is it next to?', f: 'Next to what?' },
    { c: 'cor', r: 'LOOK', q: 'What color is it? Is it big or small?', f: 'Color?' }],
  itens: [
    { k: 'MOCHI', tag: 'THE CAT', onde: 'Mochi is in the living room, under the sofa, next to a cushion!', v: { sala: 'living room', em: 'no', sob: 'under the sofa', perto: 'a cushion', cor: 'grey, small' }, diz: '“Yes, the living room.” · “No, not on or in.” · “Yes! Under the sofa.” · “Next to a cushion.” · “Grey. Small.”' },
    { k: 'THE KEYS', tag: 'LIA’S KEYS', onde: 'The keys are in the kitchen, in the fruit bowl, next to the bananas.', v: { sala: 'kitchen', em: 'in the fruit bowl', sob: 'no', perto: 'the bananas', cor: 'silver, small' }, diz: '“No. In the kitchen.” · “Yes, in the fruit bowl.” · “No.” · “Next to the bananas.” · “Silver. Small.”' },
    { k: 'THE PHONE', tag: 'YOUR PHONE', onde: 'My phone is in the bathroom, on the floor, behind the door.', v: { sala: 'bathroom', em: 'on the floor', sob: 'no', perto: 'behind the door', cor: 'black, big' }, diz: '“No. In the bathroom!” · “Yes, on the floor.” · “No.” · “It’s behind the door.” · “Black. Big.”' }],
  relato: { titulo: 'FOUND IT! · SAY WHERE',
    pede: function (x) { return 'Lia calls you: “Where is ' + (x.k === 'MOCHI' ? 'Mochi' : x.k === 'THE KEYS' ? 'are my keys' : 'your phone') + '?”'; },
    chips: function () { return ['It’s in the …', 'They’re in / on …', 'under the …', 'next to the …', 'behind the …']; },
    modelo: function (x) { return x.onde; } },
  nao: { on: '“on the kitchen” → IN the kitchen.', next: '“next the door” → NEXT TO the door.', be: '“The keys is” → the keys ARE.' },
  fim: 'Three lost things, three found. Mochi is happy. In, on, under, next to, behind: you can say where things are.' };

var CONVERSA = [
  { q: 'Where is your phone now?', f: 'Your phone: where?', voce: ['It’s in my …', 'It’s on the …'], ex: 'It’s on the table, next to my coffee.' },
  { q: 'Where are your keys at home?', f: 'Your keys at home?', voce: ['On a …', 'In a …'], ex: 'In a small box next to the door.' },
  { q: 'What is on your desk or table?', f: 'Your table: what is on it?', voce: ['There is a …', 'My … is on it.'], ex: 'My computer, a cup and a plant.' },
  { q: 'Is there a pet in your home? Where is it?', f: 'A pet? Where is it?', voce: ['Yes, a … It’s …', 'No, there isn’t.'], ex: 'Yes, a dog. He is under my bed!' },
  { q: 'What is next to your bed?', f: 'Next to your bed?', voce: ['There is a …', 'My … is next to it.'], ex: 'A lamp and a glass of water.' }
];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* A1 · Under the Sofa: leitura · descobre · missao · conversa */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de conversa.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four lines. Find the rule yourself.', exemplos: ['Where <b>is</b> the cat? It <b>is</b> under the sofa.', 'Where <b>are</b> the keys? They <b>are</b> on the table.', 'Where <b>is</b> the bowl? It <b>is</b> next to the door.', 'Where <b>are</b> the toys? They <b>are</b> behind the chair.'], pergunta: 'Is or are? It depends on …', opcoes: ['one thing (is) or many things (are)', 'the place: on or under', 'the cat: it is always is'], c: 0, nao: 'Not that one. Look at the lit is / are and the thing before it: cat, keys, bowl, toys.', regra: 'One thing: <b>Where is …? It is …</b> Many things: <b>Where are …? They are …</b> Then the place: under, on, next to, behind.', uso: { p: 'Your turn. Where are two things in your house? Say one thing, then two things.', molde: ['My … is on / in …', 'My … are next to …'], ex: 'My phone is on the table. My keys are in the bag.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
