/* ============================================================
   NEITHER HERE NOR THERE · C1 · UNIT 9 (REGISTER AND STYLE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: expressões de opinião com nuance: if you ask me, the way I see it, for what it’s worth,
   I’m all for it, I’m in two minds, I have mixed feelings, I’m sitting on the fence, it’s not my
   cup of tea, I couldn’t care less, it’s neither here nor there (= irrelevante), to be fair.
   Armadilha: I couldn’t care less entendido como "me importo muito" (é o contrário!); "in my
   opinion" para tudo; I’m agree.
   O mundo: um programa de rádio com ouvintes ao telefone: "A cidade deve fechar ruas para carros
   aos domingos?"
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 9, titulo: ['Neither Here', 'Nor There'], tema: 'Opinions with nuance.',
  sub: '“In my opinion” is fine. But real opinions have shades: all for it, in two minds, couldn’t care less, sitting on the fence. Listen to a radio phone-in and find your own shade.',
  placa: 'CITY RADIO · PHONE-IN', lugarConversa: 'THE PUB CORNER', cor: '#c9a87a', cor2: '#e4d3bc',
  chips: ['I’m all for it', 'I’m in two minds', 'I couldn’t care less'], botao: 'Start the lesson', nota: 'An opinion is not just yes or no. It has a temperature.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Hot Topics', t: 'What do you think?', p: 'Give your opinion with detail. Then ask the question back.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · The Phone-In', t: 'Should we close streets on Sundays?', p: 'Read the callers out loud, each with a different temperature. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · What’s the Temperature?', t: 'Strongly for, against, or in the middle?', p: 'Compare A and B. How strong is each opinion?' },
  { k: 'memoria', est: 'l', min: 8, img: 'capa', rot: 'IV · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'gx', est: 'f', min: 3, img: 'conversa', rot: 'V · The Opinion Card', t: 'Four lines. Keep them in the corner.', p: 'Read one line at a time. Then keep the card in the corner for the board.' },
  { k: 'tabuleiro', est: 'o', min: 14, img: 'capa', rot: 'VI · The Opinion Board', t: 'Roll, move, give your opinion.', p: 'Your teacher rolls the die. Give your opinion on the topic with a nuanced phrase.' }
];
var PORTAS = [];

var CONVERSA = [
  { q: 'What do you think about working from home?', f: 'Working from home?', voce: ['If you ask me, …', 'I have mixed feelings: …'], ex: 'I have mixed feelings. I love the silence, but I miss people.' },
  { q: 'Is there something everybody loves that you really don’t?', f: 'Something you don’t like?', voce: ['It’s not my cup of tea.', 'To be honest, …'], ex: 'Reality shows. They’re just not my cup of tea.' },
  { q: 'What’s something you’re completely for?', f: 'Completely for?', voce: ['I’m all for …', 'The way I see it, …'], ex: 'I’m all for a four-day week. The way I see it, people need rest.' }
];

var LEITURA = { rot: 'CITY RADIO · THE PHONE-IN · SUNDAY STREETS', tipo: 'fala',
  antes: { q: 'Imagine your main street closed to cars every Sunday. Good idea or bad idea?', h: 'Good for families and bikes. Bad for shops that need cars, maybe.' },
  texto: 'HOST: Today’s question: should the city close the main streets to cars on Sundays? Line one, Marta.\nMARTA: {I’m all for it}. {If you ask me}, Sunday should be for people, not cars.\nHOST: Line two, Bruno.\nBRUNO: {I’m in two minds}, honestly. {The way I see it}, it’s great for families, but my shop needs customers with cars.\nHOST: Line three, Dona Celia.\nCELIA: {I couldn’t care less}. I don’t drive and I don’t go out on Sundays!\nHOST: Line four, Tom.\nTOM: {I have mixed feelings}. {For what it’s worth}, I tried it in Lisbon and loved it. {To be fair}, Lisbon has better buses.\nHOST: Someone says it will cost the city money.\nTOM: {That’s neither here nor there}. The question is if people want it.\nHOST: And you, are you {sitting on the fence} too?',
  perguntas: [
    { q: 'Who is completely in favor, and why?', h: 'Marta: Sundays should be for people, not cars.' },
    { q: 'Why can’t Bruno decide?', h: 'It’s good for families, but bad for his shop.' },
    { q: 'What does Dona Celia think?', h: 'She doesn’t care at all: she doesn’t drive or go out on Sundays.' },
    { q: 'Why does Tom say the cost is “neither here nor there”?', h: 'For him, it’s not relevant: the important question is what people want.' }],
  olha: 'Find ten opinion phrases. Put them on a line: from strongly for, to in the middle, to don’t care at all.' };

var DESCOBRE = {
  pares: [
    { a: '{I’m all for} it.', b: '{I’m in two minds} about it.', q: 'Which speaker has decided? Which one hasn’t?', r: 'A: completely in favor. B: undecided, I see both sides. Other “middle” phrases: I have mixed feelings, I’m sitting on the fence.' },
    { a: '{I couldn’t care less}.', b: '{I couldn’t care more}.', q: 'Which one means “I don’t care at all”? Careful!', r: 'A. I couldn’t care less = it’s impossible to care less than I do = zero interest. Brazilians often think it means the opposite.' },
    { a: 'The cost is {neither here nor there}.', b: 'The cost is {very important}.', q: 'What does A say about the cost?', r: 'That it’s irrelevant to the discussion. It doesn’t matter for this question.' },
    { a: '{For what it’s worth}, I loved it.', b: '{In my opinion}, I loved it.', q: 'What does A add?', r: 'Humility: “my opinion may not matter much, but…”. In my opinion is neutral. (And “In my opinion, I loved” is a bit strange: loving is already your opinion!)' }],
  regra: [['STRONGLY FOR / AGAINST', 'I’m all for it · I’m totally against it · I couldn’t agree more'], ['IN THE MIDDLE', 'I’m in two minds · I have mixed feelings · I’m sitting on the fence'], ['NOT INTERESTED / IRRELEVANT', 'I couldn’t care less · it’s not my cup of tea · it’s neither here nor there'], ['INTRODUCE IT', 'If you ask me · The way I see it · For what it’s worth · To be fair']],
  armas: [
    ['CARE', 'I couldn’t care less about football. (= I love it)', 'I couldn’t care less about football. (= <b>I don’t care at all</b>)', 'less, not more: zero interest.'],
    ['AGREE', 'I’m agree with Marta.', 'I <b>agree</b> with Marta.', 'agree is a verb: no am.'],
    ['TWO MINDS', 'I’m in two minds of it.', 'I’m in two minds <b>about</b> it.', 'in two minds about.'],
    ['TEA', 'It’s not my cup of coffee.', 'It’s not my cup of <b>tea</b>.', 'The idiom is fixed.']] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Neither Here Nor There: conversa · leitura · descobre · memoria · tabuleiro */
var PARES = [
  ['I’m all', 'for it.', 'A four-day week? I’m all for it.'],
  ['I’m in two', 'minds.', 'Moving abroad? I’m in two minds about it.'],
  ['I couldn’t', 'care less.', 'Celebrity news? I couldn’t care less.'],
  ['It’s not my', 'cup of tea.', 'Horror films are not my cup of tea.'],
  ['It’s neither here', 'nor there.', 'Whether it’s Monday or Tuesday is neither here nor there.'],
  ['For what', 'it’s worth, …', 'For what it’s worth, I think you made the right choice.']];
var TABULEIRO = { rot: 'THE OPINION BOARD', centro: 'Give your opinion, with its temperature.', casas: [
  { k: 'SOCIAL MEDIA', t: 'Social media for children under 14.', ex: 'If you ask me, they should wait. I’m totally against it.' },
  { k: 'PINEAPPLE PIZZA', t: 'Pineapple on pizza.', ex: 'I couldn’t care less. Eat what you want!' },
  { k: 'FOUR-DAY WEEK', t: 'A four-day work week.', ex: 'I’m all for it. The way I see it, rested people work better.' },
  { k: 'MOVING ABROAD', t: 'Moving to another country.', ex: 'I’m in two minds. Exciting, but far from my family.' },
  { k: 'REALITY TV', t: 'Reality shows.', ex: 'Not my cup of tea, to be honest.' },
  { k: 'SCHOOL UNIFORMS', t: 'School uniforms.', ex: 'I have mixed feelings. They’re practical, but boring.' },
  { k: 'THE PRICE', t: 'A friend says the hotel is cheaper on Tuesdays. Is it relevant to your holiday?', ex: 'That’s neither here nor there: I can only travel on weekends.' },
  { k: 'FOOTBALL', t: 'The national football team.', ex: 'For what it’s worth, I think they need a new coach.' },
  { k: 'AI IN SCHOOLS', t: 'Students using AI for homework.', ex: 'I’m sitting on the fence. It helps, but they need to think too.' },
  { k: 'EARLY MORNINGS', t: 'Waking up at 5 AM every day.', ex: 'To be fair, it works for some people. Not my cup of tea!' },
  { k: 'CASH', t: 'A world without cash.', ex: 'If you ask me, it’s coming anyway. I’m all for it.' },
  { k: 'YOUR TOPIC', t: 'Choose a topic you care about. Defend it with three phrases.', ex: 'The way I see it, libraries are essential. I’m all for more funding. For what it’s worth, my library changed my life.' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de tabuleiro.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep in your pocket.', rotulo: 'How strong is your opinion?', linhas: ['for: <b>I’m all for it</b> · <b>if you ask me</b>, it’s a great idea', 'in the middle: <b>I’m in two minds</b> · <b>I have mixed feelings</b> · <b>I’m sitting on the fence</b>', 'against: <b>it’s not my cup of tea</b> · <b>I couldn’t care less</b> (= I do not care at all)', 'step back: <b>to be fair</b> · <b>for what it’s worth</b> · <b>it’s neither here nor there</b> (= not important)'], uso: { p: 'Your turn. The city wants to close streets to cars on Sundays. Give your opinion in two sentences, with a phrase from the card.', molde: ['If you ask me, …', 'I’m in two minds about …', 'To be fair, …'], ex: 'If you ask me, it’s a great idea. To be fair, the shops might lose a few customers.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
