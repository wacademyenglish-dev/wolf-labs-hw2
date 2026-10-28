/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 8 · HOW MUCH IS IT? · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: números grandes (thousand, million, sem s), percent, preço; How much (dinheiro) × How many (contável);
   ponto decimal × vírgula de milhar (1.2 million · 4,000), o contrário do português.
   Armadilhas: “two thousands”, “how much employees”, “twenty percents”, “R$ 1,2 million”.
   Situação: custo hoje × preço × economia. Produto: os 3 números da proposta.
   Empresas FICTÍCIAS (Serra Steel). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 8, kick: 'SELLING SERVICES · LESSON 8', titulo: ['How Much', 'Is It?'], tema: 'big numbers · percent · how much / how many', placa: 'LESSON 8',
  lugarConversa: 'THE NUMBERS ROOM', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Every client asks it: “How much is it?” Today you say the cost today, your price and the savings, with big numbers, clearly.',
  chips: ['The proposal summary', 'The price question', 'Your three numbers'], botao: 'Start the lesson',
  nota: 'Two thousand, five million, twenty percent: no s. And in English, 1.2 has a point; 4,000 has a comma.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'How many e-mails do you get in a day?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · The Proposal Summary', t: 'Cost today, price, savings: one page.', p: 'Read it out loud, numbers too. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · “So, How Much Is It?”', t: 'A finance director asks about the price.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Thousand, Not “Thousands”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'multipla', est: 'f', min: 7, img: 'mesa', rot: 'V · Numbers in the Proposal', t: 'Six lines from a proposal.', p: 'Read the line out loud. Choose. Then say why.' },
  { k: 'escolha', est: 'o', min: 5, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Three Numbers', t: 'Cost today, your price, the savings.', p: 'Write them. Then say them out loud, slowly and clearly.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How many e-mails do you get in a day?', f: 'Ten? A hundred?', voce: ['About … e-mails.', 'Too many! About …'], ex: 'About eighty e-mails. Too many!' },
  { q: 'How much is a coffee near your office?', f: 'Cheap or expensive?', voce: ['It’s … reais.', 'It’s expensive: …'], ex: 'It’s eight reais. Expensive!' },
  { q: 'How many clients are there on your list?', f: 'Ten? Fifty?', voce: ['There are about …', 'I have …'], ex: 'There are about forty clients on my list.' },
  { q: 'What percent of your week is meetings?', f: '10 percent? 50 percent?', voce: ['About … percent.', 'More than … percent!'], ex: 'About thirty percent. The rest is e-mail!' }
];

var LEITURA = { rot: 'PROPOSAL SUMMARY · BLUEPEAK FOR SERRA STEEL (FICTIONAL)', tipo: 'nota',
  antes: { q: 'A CFO reads a proposal. What three numbers does she look for first?', h: 'The cost today, the new price, and the savings (in money and in percent).' },
  texto: 'TODAY · PAYROLL INSIDE SERRA STEEL\nPeople: {4,000} employees ({four thousand}), two factories.\nCost: R$ {1.2 million} a year ({one point two million}).\nErrors: {3 percent} of paychecks every month.\nWITH BLUEPEAK\nMonthly fee: R$ {75,000} ({seventy-five thousand}) = R$ 900,000 a year.\nSavings: R$ {300,000} a year. That’s {25 percent}.\nErrors: less than {1 percent}.\n{How much} is the project? R$ 120,000, one time. {How many} months? Four.',
  perguntas: [
    { q: 'How many employees are there? Say the number.', h: '4,000: four thousand.' },
    { q: 'How much is payroll today, a year?', h: 'R$ 1.2 million: one point two million reais.' },
    { q: 'How much is the monthly fee?', h: 'Seventy-five thousand reais.' },
    { q: 'How much do they save? What percent?', h: 'Three hundred thousand reais a year. That’s twenty-five percent.' }],
  olha: 'Look at the big numbers. Is there an s in “thousand” or “million”? Where is the comma? Where is the point?' };

var DIALOGO = { rot: 'THE PRICE QUESTION · DANIEL PRICE, SERRA STEEL (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'The client asks: “How much is it?” What do you say first: the price or the savings?', h: 'Many sellers say both: the price, and then what the client saves.' },
  ouvir: 'Listen: how much is the monthly fee? How much do they save?',
  falas: [
    ['Daniel', 'OK, Leo. The big question: {how much} is it?'],
    ['Leo', 'The monthly fee is {seventy-five thousand} reais.'],
    ['Daniel', 'Seventy-five thousand a month? That’s {nine hundred thousand} a year!'],
    ['Leo', 'Yes. And today your payroll costs {one point two million} a year.'],
    ['Daniel', 'So we save {three hundred thousand}?'],
    ['Leo', 'Exactly. That’s {twenty-five percent}.'],
    ['Daniel', '{How many} people do we need inside?'],
    ['Leo', 'Two. Today there are eight.'],
    ['Daniel', 'And the project? {How much} is it?'],
    ['Leo', '{A hundred and twenty thousand}, one time. Four months.'],
    ['Daniel', 'Hmm. Can you do {a hundred thousand}?'],
    ['Leo', 'I can talk with my manager.']],
  voz: { Daniel: 'en-US-ChristopherNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'How much is the monthly fee?', h: 'Seventy-five thousand reais.' },
    { q: 'How much do they save a year? What percent?', h: 'Three hundred thousand. That’s twenty-five percent.' },
    { q: 'How many people do they need inside? And today?', h: 'Two. Today there are eight.' },
    { q: 'How much is the project?', h: 'A hundred and twenty thousand, one time.' },
    { q: 'What does Daniel ask at the end?', h: 'A hundred thousand for the project. (A discount.)' }],
  fim: 'thousand, million, percent: no s. Money → How much? People, invoices → How many?' };

var DESCOBRE = {
  pares: [
    { a: 'There are {four thousand} employees.', b: 'There are {four thousands} employees.', q: 'Thousand: with s or without s?', r: 'With a number: <b>four thousand, two million</b>. No s.' },
    { a: '{How many} employees are there?', b: '{How much} employees are there?', q: 'Employees: can you count them?', r: 'You count it (people, invoices, factories) → <b>How many</b>. Money → <b>How much</b>.' },
    { a: 'We save {twenty-five percent}.', b: 'We save {twenty-five percents}.', q: 'Percent: with s?', r: '<b>percent</b>: no s. In American English, one word: 25 percent (25%).' },
    { a: 'It costs {R$ 1.2 million}.', b: 'It costs {R$ 1,2 million}.', q: 'In English: a point or a comma for 1.2?', r: 'English: <b>point</b> for decimals (1.2 = one point two), <b>comma</b> for thousands (4,000). The opposite of Portuguese!' }],
  regra: [['BIG NUMBERS', 'four thousand · 1.2 million · no s'], ['HOW MANY', 'people, invoices, factories'], ['HOW MUCH', 'money · How much is it?'], ['POINT · COMMA', '1.2 = one point two · 4,000 = four thousand']],
  armas: [['S', 'two thousands employees', 'two thousand employees', 'no s'], ['MANY', 'How much employees?', 'How many employees?', 'count → many'], ['PERCENT', 'twenty percents', 'twenty percent', 'no s'], ['POINT', 'R$ 1,5 million', 'R$ 1.5 million', 'decimal → point']] };

var MULTIPLA = { rot: 'THE PROPOSAL · CHOOSE THE RIGHT WORD', fim: 'No s on thousand, million, percent. Count it → many. Money → much.', itens: [
  { txt: '___ invoices do you get a month?', q: 'Choose the right word.', ops: ['How many', 'How much'], c: 0, por: 'invoices (you count them) → How many.' },
  { txt: '___ is the monthly fee?', q: 'Choose the right word.', ops: ['How many', 'How much'], c: 1, por: 'money → How much.' },
  { txt: 'There are five ___ employees.', q: 'Choose the right word.', ops: ['thousands', 'thousand'], c: 1, por: 'with a number: thousand, no s.' },
  { txt: 'You save thirty ___.', q: 'Choose the right word.', ops: ['percent', 'percents'], c: 0, por: 'percent: no s.' },
  { txt: 'Two point five million = R$ ___ million.', q: 'Choose the right number.', ops: ['2,5', '2.5'], c: 1, por: 'decimals in English: a point.' },
  { txt: '4,500 = four thousand ___ hundred.', q: 'Choose the right word.', ops: ['five', 'fifty'], c: 0, por: '4,500 = four thousand five hundred.' }] };

var ESCOLHA = [
  { a: 'Say the price first', b: 'Say the savings first', chips: ['I prefer … because …', '… percent · … thousand'], ex: 'I prefer the savings first, because twenty-five percent is a strong number.' },
  { a: 'A low monthly fee', b: 'A low project price', chips: ['I prefer … because …', 'The client pays … · It’s …'], ex: 'I prefer a low monthly fee, because the client pays it every month.' }];
var ESCOLHA_FIM = 'Numbers win meetings: say them slowly, with no s.';

var CARTAO = { ph: 'Today, … costs … a year.\nWith us, the monthly fee is …\nYou save … a year. That’s … percent.', rot: 'My three numbers',
  chips: ['Today, payroll costs ', ' a year.', 'With us, the monthly fee is ', 'thousand', 'million', 'You save ', 'That’s ', ' percent.', 'The project is ', 'one time.'],
  perg: ['YOUR THREE NUMBERS', 'For a real proposal (approximate numbers are OK) or Serra Steel: the cost today, your price, the savings in percent. Then say them out loud, clearly.'],
  exemploRot: 'NUMBERS · SERRA STEEL', exemplo: [['EMPLOYEES', '4,000'], ['COST TODAY', 'R$ 1.2 million / year'], ['MONTHLY FEE', 'R$ 75,000'], ['SAVINGS', 'R$ 300,000 / year'], ['PERCENT', '25%'], ['PROJECT', 'R$ 120,000, one time']],
  modelo: 'Today, payroll costs one point two million reais a year.<br>With Bluepeak, the monthly fee is seventy-five thousand reais: nine hundred thousand a year.<br>You save three hundred thousand reais a year. That’s twenty-five percent.' };

var PODE = [
  'I can say big numbers: four thousand, one point two million (no s).',
  'I can ask How much…? (money) and How many…? (people, invoices).',
  'I can say percent and read 1.2 and 4,000 the English way.',
  'I can present three numbers for a proposal.'
];
