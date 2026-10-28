/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 7 · CAN YOU SEND ME THE NUMBERS? · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: can / can’t + verbo, Can you…? (inversão), Could you…, please? (pedido educado).
   Armadilhas: “we can to send”, “you can send me?” (sem inversão), “I can’t to meet”, “Send me the numbers.” seco.
   Situação: pedir dados ao cliente (headcount, notas, relatórios). Produto: o e-mail de pedido de dados.
   Empresas FICTÍCIAS (Serra Steel, Lumen Logistics). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 7, kick: 'SELLING SERVICES · LESSON 7', titulo: ['Can You Send Me', 'the Numbers?'], tema: 'can · can’t · Could you…, please?', placa: 'LESSON 7',
  lugarConversa: 'THE DATA REQUEST', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'No numbers, no proposal. Today you ask a client for data: what they can send, what they can’t, and how to ask politely.',
  chips: ['The client’s answer', 'A call for numbers', 'Your data request e-mail'], botao: 'Start the lesson',
  nota: 'After can, can’t and could: just the verb. No “to”. In a question, can comes first.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'Can you work from home this week?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · The Client’s Answer', t: 'A director answers: some numbers yes, some no.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · A Call for Numbers', t: 'Leo asks a CFO for data for the proposal.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Can, Not “Can To”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'ordem', est: 'f', min: 8, img: 'mesa', rot: 'V · Put the E-mail in Order', t: 'Five parts of a good data request.', p: 'Tap the five parts in the right order. Then read it out loud.' },
  { k: 'escolha', est: 'o', min: 5, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Data Request', t: 'Ask a client for three numbers, politely.', p: 'Thank you, the request, an offer, the next step. Then read it out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'Can you work from home this week?', f: 'Home: yes or no?', voce: ['Yes, I can. On …', 'No, I can’t. I …'], ex: 'Yes, I can. On Friday.' },
  { q: 'Can you understand English on the phone?', f: 'On the phone: easy or hard?', voce: ['Yes, I can. A little.', 'I can’t understand fast people!'], ex: 'I can, a little. But I can’t understand fast people!' },
  { q: 'What can you do in Excel?', f: 'Tables? Charts? Macros?', voce: ['I can …', 'I can’t …'], ex: 'I can make tables and charts. I can’t make macros.' },
  { q: 'Is it easy to get numbers from clients?', f: 'Fast or slow?', voce: ['Yes, it is. They …', 'No, it isn’t. They can’t …'], ex: 'No, it isn’t. They can’t find the reports!' }
];

var LEITURA = { rot: 'E-MAIL · FROM DANIEL PRICE, FINANCE DIRECTOR, SERRA STEEL (FICTIONAL)', tipo: 'nota',
  antes: { q: 'You ask a client for numbers. What can be a problem?', h: 'Some numbers are confidential (salaries), and the client is busy.' },
  texto: 'Hi Leo,\nThank you for the meeting. Our team {can send} you some numbers this week.\nWe {can send} the headcount and the number of invoices.\nWe {can’t send} the salaries. They are confidential.\n{Can you send} us an NDA first?\nAnd {could you call} me on Monday, {please}? I {can’t read} long e-mails!\nBest,\nDaniel',
  perguntas: [
    { q: 'What can they send?', h: 'The headcount and the number of invoices.' },
    { q: 'What can’t they send? Why?', h: 'The salaries. They are confidential.' },
    { q: 'What does Daniel want first?', h: 'An NDA.' },
    { q: 'What does Daniel ask at the end?', h: 'Could you call me on Monday, please?' }],
  olha: 'Look at the highlighted words. After can, can’t and could: is there a “to”? Or just the verb?' };

var DIALOGO = { rot: 'A CALL FOR NUMBERS · KAREN WELLS, LUMEN LOGISTICS (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'You need the client’s payroll report. How do you ask, politely?', h: 'Could you send me the payroll report, please?' },
  ouvir: 'Listen: what can Karen send? What can’t she send?',
  falas: [
    ['Leo', 'Hi, Karen. I need some numbers. {Can you send} me the headcount?'],
    ['Karen', 'Yes, I {can}. It’s 2,000 people. I {can send} it today.'],
    ['Leo', 'Great. {Could you send} me the payroll report, {please}?'],
    ['Karen', 'Sorry, I {can’t}. It has salaries. It’s confidential.'],
    ['Leo', 'No problem. {Can you send} the number of invoices per month?'],
    ['Karen', 'Yes. Our accounts payable team {can export} it from Oracle.'],
    ['Leo', 'Perfect. And {could} we {talk} with your payroll manager?'],
    ['Karen', 'Yes, you {can}. But she {can’t meet} this week. Next Tuesday?'],
    ['Leo', 'Tuesday is good. {Can I send} you a list by e-mail?'],
    ['Karen', 'Yes, please. A short list!']],
  voz: { Leo: 'en-US-AndrewNeural', Karen: 'en-US-JennyNeural' },
  perguntas: [
    { q: 'What can Karen send today?', h: 'The headcount: 2,000 people.' },
    { q: 'Can she send the payroll report? Why?', h: 'No, she can’t. It has salaries. It’s confidential.' },
    { q: 'Who can export the number of invoices?', h: 'The accounts payable team, from Oracle.' },
    { q: 'Can the payroll manager meet this week?', h: 'No, she can’t. Next Tuesday.' },
    { q: 'What can Leo send by e-mail?', h: 'A short list.' }],
  fim: 'can / can’t + verb (no “to”). A request: Can you…? More polite: Could you…, please?' };

var DESCOBRE = {
  pares: [
    { a: 'We {can send} the report.', b: 'We {can to send} the report.', q: 'After can: “to” or no “to”?', r: 'can + verb. No <b>to</b>: we can send, she can meet.' },
    { a: '{Can you send} me the headcount?', b: '{You can send} me the headcount?', q: 'Which one is a real question?', r: 'Question: <b>Can</b> comes first: Can you…? Could you…?' },
    { a: 'I {can’t meet} on Monday.', b: 'I {can’t to meet} on Monday.', q: 'Negative: can’t + …?', r: '<b>can’t</b> + verb. No to: I can’t meet.' },
    { a: '{Could you send} me the invoices, {please}?', b: '{Send me} the invoices.', q: 'To a client: which one is polite?', r: 'To a client: <b>Could you …, please?</b> “Send me…” sounds like an order.' }],
  regra: [['CAN + VERB', 'We can send it today.'], ['CAN’T + VERB', 'I can’t meet this week.'], ['QUESTION', 'Can you send…? Can I call…?'], ['POLITE', 'Could you send me…, please?']],
  armas: [['TO', 'We can to send it.', 'We can send it.', 'no “to”'], ['QUESTION', 'You can send me the report?', 'Can you send me the report?', 'Can you…?'], ['NEGATIVE', 'I can’t to meet on Monday.', 'I can’t meet on Monday.', 'can’t + verb'], ['POLITE', 'Send me the numbers.', 'Could you send me the numbers, please?', 'Could you…, please?']] };

var ORDEM = { rot: 'E-MAIL · A DATA REQUEST TO LUMEN LOGISTICS (FICTIONAL)', pede: 'Tap the five parts in order.',
  passos: [
    'Hi Karen, thank you for the call today.',
    'For the proposal, could you send me some numbers, please?',
    'Can you send me the headcount and the number of invoices per month?',
    'We can sign an NDA first. We don’t need the salaries.',
    'Can I call you on Tuesday at 10 a.m.? Best, Leo'],
  chips: ['Thank you', 'The polite request', 'The numbers', 'An offer', 'The next step'],
  modelo: 'Thank you → Could you…, please? → Can you send me…? → We can… (an offer) → Can I call you on…?' };

var ESCOLHA = [
  { a: 'Ask for the numbers by e-mail', b: 'Ask for the numbers on the phone', chips: ['I prefer … because …', 'The client can … · can’t …'], ex: 'I prefer the phone because the client can ask questions.' },
  { a: 'Ask for ten numbers', b: 'Ask for three numbers', chips: ['I prefer … because …', 'Clients can’t … · It’s …'], ex: 'I prefer three numbers because clients can’t send ten numbers fast.' }];
var ESCOLHA_FIM = 'Good reasons with can: “because they can…”, “because they can’t…”.';

var CARTAO = { ph: 'Hi …,\nThank you for …\nCould you send me …, please?\nCan you send me …?\nWe can …\nCan I call you on …?\nBest,\n…', rot: 'My data request e-mail',
  chips: ['Hi ', 'Thank you for the call today.', 'Could you send me ', ', please?', 'Can you send me ', 'the headcount', 'the number of invoices per month', 'We can sign an NDA first.', 'We don’t need ', 'Can I call you on '],
  perg: ['YOUR DATA REQUEST E-MAIL', 'To a real client (or Lumen Logistics): ask for three numbers, politely. Offer one thing. Propose a call.'],
  exemploRot: 'DATA LIST · LUMEN LOGISTICS', exemplo: [['HEADCOUNT', '2,000 employees'], ['INVOICES', 'per month'], ['ERP', 'Oracle export'], ['SALARIES', 'not needed'], ['NDA', 'yes'], ['CALL', 'Tuesday, 10 a.m.']],
  modelo: 'Hi Karen,<br>Thank you for the call today.<br>For the proposal, could you send me three numbers, please? Can you send me the headcount, the number of invoices per month and the number of payroll errors?<br>We can sign an NDA first. We don’t need the salaries.<br>Can I call you on Tuesday at 10 a.m.?<br>Best,<br>Leo' };

var PODE = [
  'I can say what I can and can’t do: We can send … I can’t meet …',
  'I can ask: Can you send me …? (never “You can send me?”)',
  'I can ask politely: Could you …, please?',
  'I can write a short e-mail to ask a client for numbers.'
];
