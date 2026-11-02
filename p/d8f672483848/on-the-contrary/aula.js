/* ============================================================
   ON THE CONTRARY · C1 · UNIT 7 (ARGUE AND PERSUADE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: on the contrary (nega e afirma o oposto: “Is it boring? On the contrary, it’s fascinating”)
   × on the other hand (outro lado da MESMA moeda; os dois são verdade) × conversely / in contrast
   (compara duas coisas diferentes) × far from + -ing / adjetivo, quite the opposite.
   Armadilha do português: "pelo contrário" e "por outro lado" viram tudo on the contrary; on the other
   hand sem on the one hand antes é ok, mas não serve para negar.
   O mundo: uma coluna de opinião, "Are big cities bad for us?", e um debate de bar.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 7, titulo: ['On the', 'Contrary'], tema: 'Contrast with precision.',
  sub: '“Pelo contrário” and “por outro lado” are not the same, and in English the difference is huge. Read an opinion column about big cities and learn to contrast like a columnist.',
  placa: 'OPINION · PAGE 9', lugarConversa: 'THE UNIVERSITY HALL', cor: '#a3c98a', cor2: '#d1e4c4',
  chips: ['on the contrary', 'on the other hand', 'conversely'], botao: 'Start the lesson', nota: 'One says “no, the opposite”. The other says “yes, and also this”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Column', t: 'Are big cities bad for us?', p: 'Read the column out loud. Answer the questions. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · Opposite or Other Side?', t: 'They look similar. They are not.', p: 'Compare A and B. Which one says “no”?' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'III · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a line, across, down or diagonal, is a BINGO.' },
  { k: 'escolha', est: 'o', min: 8, img: 'capa', rot: 'IV · City or Village?', t: 'Choose and contrast.', p: 'Choose A or B. Then contrast it with on the other hand, or deny with on the contrary.' },
  { k: 'cartao', est: 'w', min: 8, img: 'conversa', rot: 'V · Your Column', t: 'Write a short opinion column.', p: 'Four lines: a myth, “on the contrary”, “on the other hand”, and a contrast.' }
];
var PORTAS = [];

var LEITURA = { rot: 'THE WEEKEND REVIEW · OPINION · LIA MOREL', tipo: 'nota',
  antes: { q: 'Big city or small town: where would you rather live? Why?', h: 'Big city for work, small town for peace. I can’t decide!' },
  texto: 'Are big cities bad for us?\nPeople say big cities make us lonely. {On the contrary}: studies show that city people have more friends, not fewer.\nBig cities are also said to be unhealthy. {Far from it}: city people walk more and live longer in many countries.\nCities have problems, of course. {On the one hand}, rents are absurd. {On the other hand}, salaries are higher.\nIn small towns, people know their neighbors. In cities, {conversely}, you can choose your community.\nAnd stress? {In contrast to} what we imagine, villagers report the same stress levels as city people.\nSo are cities bad for us? {Quite the opposite}. We just need better ones.',
  perguntas: [
    { q: 'What’s the first myth, and what do the studies say?', h: 'That cities make us lonely. In fact, city people have more friends.' },
    { q: 'What does Lia say about health?', h: 'City people walk more and often live longer.' },
    { q: 'What’s the problem with money in cities, and the good side?', h: 'Rents are very high, but salaries are higher too.' },
    { q: 'What’s her final conclusion?', h: 'Cities are not bad for us; we need better cities.' }],
  olha: 'Find seven contrast phrases. Which ones say “No, the opposite is true”? Which ones show two sides that are both true?' };

var DESCOBRE = {
  pares: [
    { a: 'Cities make us lonely? {On the contrary}, we have more friends.', b: 'Cities are expensive. {On the other hand}, salaries are higher.', q: 'Which one says the first idea is FALSE? Which one says both ideas are TRUE?', r: 'A: on the contrary = no, the opposite is true. B: on the other hand = yes, and there’s another side; both are true.' },
    { a: 'Rents are high. {On the contrary}, salaries are higher.', b: 'Rents are high. {On the other hand}, salaries are higher.', q: 'One is a classic Brazilian mistake. Which one?', r: 'A is wrong: rents ARE high, nobody is denying it. Two sides of one situation = on the other hand.' },
    { a: 'In towns you know your neighbors. In cities, {conversely}, you choose your community.', b: 'In towns you know your neighbors. {On the other hand}, they know your business!', q: 'Which one compares two different places? Which one shows the other side of the SAME place?', r: 'A: conversely / in contrast compares two different things. B: the other side of small towns.' },
    { a: 'Is the book boring? {Far from it}! It’s fascinating.', b: 'Is the book boring? {On the contrary}! It’s fascinating.', q: 'Same meaning? Any difference?', r: 'Both deny strongly. Far from it is more conversational and emotional; on the contrary is neutral, good for writing too.' }],
  regra: [['ON THE CONTRARY', 'No, the opposite is true. “Lonely? On the contrary.”'], ['ON THE OTHER HAND', 'Both are true: the other side of the same coin.'], ['CONVERSELY / IN CONTRAST (TO)', 'Two different things compared: In contrast to towns, cities…'], ['FAR FROM IT · QUITE THE OPPOSITE', 'Strong, conversational ways to say “no, the opposite”.']],
  armas: [
    ['OTHER SIDE', 'It’s expensive. On the contrary, it’s beautiful.', 'It’s expensive. <b>On the other hand</b>, it’s beautiful.', 'Both true: on the other hand.'],
    ['DENY', 'Was it easy? On the other hand, it was very hard.', 'Was it easy? <b>On the contrary</b>, it was very hard.', 'Saying no, the opposite: on the contrary.'],
    ['TO', 'In contrast of the city, the village is quiet.', 'In contrast <b>to</b> the city, the village is quiet.', 'in contrast to / with.'],
    ['FAR', 'Far from it is cheap.', 'It’s <b>far from cheap</b>.', 'far from + adjective / -ing.']] };

var CARTAO = { ph: 'People say working from home is lazy.\nOn the contrary: most people work more hours at home.\nOn the one hand, you save time. On the other hand, you can feel isolated.\nIn contrast to offices, home has no coffee breaks with friends.', rot: 'My column',
  chips: ['People say …', 'On the contrary, ', 'Far from it: ', 'Quite the opposite: ', 'On the one hand, ', 'On the other hand, ', 'Conversely, ', 'In contrast to '],
  perg: ['YOUR COLUMN', 'Pick a myth (social media, working from home, video games…). Deny it, show two sides, compare.'],
  exemploRot: 'LIA MOREL’S COLUMN', exemplo: [['MYTH', 'cities make us lonely'], ['ON THE CONTRARY', 'more friends'], ['ON THE OTHER HAND', 'higher salaries'], ['CONVERSELY', 'choose your community'], ['CONCLUSION', 'we need better cities']],
  modelo: 'People say working from home is lazy. On the contrary: most people work more hours at home.<br>On the one hand, you save time. On the other hand, you can feel isolated.<br>In contrast to offices, home has no coffee breaks with friends.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · On the Contrary: leitura · descobre · bingo · escolha · cartao */
var BINGO = [['“Is it cheap?” – “___ ___ ___! It’s very expensive.” (deny)', 'On the contrary'], ['Expensive, but beautiful: “On the ___ ___, it’s beautiful.”', 'other hand'], ['Two places compared: In cities, ___, you choose your friends.', 'conversely'], ['In contrast ___ the city, the village is quiet.', 'to'], ['“Was he rude?” – “Far ___ it!”', 'from'], ['It’s far ___ perfect. (not at all)', 'from'], ['on the contrary or on the other hand? It’s hot. ___, it’s dry.', 'On the other hand'], ['on the contrary or on the other hand? Lazy? ___, she works 12 hours.', 'On the contrary'], ['“Quite the ___!” = absolutely not, the opposite', 'opposite']];
var ESCOLHA = [
  { a: 'live in a big city', b: 'live in a small town', chips: ['On the one hand, … On the other hand, …', 'People say … On the contrary, …'], ex: 'A big city. People say it’s lonely. On the contrary, I have more friends there.' },
  { a: 'work from home', b: 'work in an office', chips: ['In contrast to …, …', 'On the other hand, …'], ex: 'From home. On the other hand, I miss my colleagues.' },
  { a: 'a cheap old car', b: 'an expensive new bike', chips: ['Conversely, …', 'Far from …'], ex: 'The bike. The car is cheap; conversely, the bike costs more but saves money every day.' },
  { a: 'social media every day', b: 'no social media at all', chips: ['Is it bad? On the contrary, …', 'Quite the opposite: …'], ex: 'Every day, but carefully. Is it all bad? Far from it: I found my job there.' }];
