/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 30 · FINAL PROJECT: THE DEAL · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js e cliente.js do curso). A1+.
   Projeto final do A1+ (o curso inteiro): -s, perguntas com helper, going to, passado, Have you ever…?, it includes, I’ll, negociar.
   Situação: a reunião do começo ao fim com uma cliente nova. Formatos: EASY READER · CHAPTER 8 (o final feliz),
   cliente IA-01 completo (persona nova, 5 fatos + próximo passo), diálogo-modelo do fechamento, cadeira (o fechamento ao vivo),
   cartão = o kit de vendas (LinkedIn, pitch, 6 perguntas, e-mail de fechamento). Pode com o “certificado”.
   Empresas FICTÍCIAS (Bluepeak Services, Orla Beverages, Kestrel Partners, Skyline Air). SAP só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 30, kick: 'SELLING SERVICES · LESSON 30', titulo: ['Final Project:', 'The Deal'], tema: 'final project · the whole course', placa: 'LESSON 30',
  lugarConversa: 'THE BIG MEETING', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Thirty lessons. One new client, from hello to “It’s a deal.” Today you find out what she needs, close the deal and build your sales kit in English.',
  chips: ['The happy ending', 'The discovery meeting', 'The deal and your kit'], botao: 'Start the lesson',
  nota: 'Everything you learned, in one meeting. Slow, clear, with a smile.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 4, img: 'conversa', rot: 'I · Thirty Lessons', t: 'Thirty lessons! What was your favorite?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 6, img: 'mesa', rot: 'II · Easy Reader: It’s a Deal', t: 'Leo’s First Big Client · Chapter 8, the last one.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'descobre', est: 'f', min: 6, img: 'capa', rot: 'III · Your Top 4 Traps', t: 'The four big traps of the course.', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'cliente', est: 'o', min: 12, img: 'conversa', rot: 'IV · The Discovery Meeting', t: 'A new client from the story. Your teacher is the client.', p: 'Pitch first. Then find the five facts and ask for the next step.' },
  { k: 'dialogo', est: 'l', min: 6, img: 'mesa', rot: 'V · The Closing', t: 'Two weeks later. Leo closes with Ivy.', p: 'One question before. Listen. Then the questions.' },
  { k: 'raciocinio', est: 'o', min: 10, img: 'conversa', rot: 'VI · Your Sales Storyline', t: 'Build the story of the sale. Then tell it to Ivy.', p: 'Tap a card for each step. Then present it, card by card. Your teacher is Ivy.' },
  { k: 'cartao', est: 'w', min: 10, img: 'capa', rot: 'VII · Your Sales Kit', t: 'Four parts for your real job.', p: 'LinkedIn message, pitch, six questions, closing e-mail. Finish at home if you need to.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 30: the end of the course!', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'Thirty lessons! What was your favorite lesson? Why?', f: 'Video calls? Numbers? The phone?', voce: ['My favorite was … because …'], ex: 'My favorite was the video call lesson because I use it every day.' },
  { q: 'Have you used English with a real client this month?', f: 'An e-mail? A call?', voce: ['Yes, I have. I …', 'No, I haven’t. But I’m going to …'], ex: 'Yes, I have! I wrote an e-mail to a client in Chile.' },
  { q: 'What will you do differently on your next call?', f: 'More questions? Slower?', voce: ['I’ll …', 'I won’t …'], ex: 'I’ll ask more questions, and I won’t talk too much!' },
  { q: 'What do you have to practice more?', f: 'Numbers? Listening? Questions?', voce: ['I have to practice …'], ex: 'I have to practice numbers. They’re difficult!' }
];

var LEITURA = { rot: 'EASY READER · CHAPTER 8 · LEO’S FIRST BIG CLIENT (FICTION)', tipo: 'nota',
  antes: { q: 'Before: Leo presented to Mr. Duarte on a video call at the airport. Kestrel Partners is 30% cheaper. Mr. Duarte liked Leo’s slides, but he had one question… and the screen went black. What is the question?', h: 'Free answer: “I think he asks about the price.”, “I think he asks about Kestrel.”' },
  texto: 'IT’S A DEAL\nMonday, 8 a.m. Leo’s phone rings. It’s Nina.\n“Leo! Mr. Duarte is back. He has his question. Can you come at 3 p.m.?”\nAt 3 p.m., Leo and Sara are at Orla Beverages. Mr. Duarte and Rita Gomes, the CFO, are at the table.\n“Leo,” says Mr. Duarte, “Kestrel is 30% cheaper. Why you?”\nLeo is calm. “Because {we’ve done} it before. Brava Foods saved money with us. And our price {includes} training for your team. Kestrel’s price {doesn’t include} it.”\nRita looks at the two proposals. “It’s true. Kestrel {charges} training separately.”\nMr. Duarte smiles. “OK. {Do we have a deal}?”\n“Yes,” says Leo. “{It’s a deal}.”\nMr. Duarte signs. Rita signs. Sara gives Leo a little smile.\n“One more thing,” says Mr. Duarte. “At the airport, the woman next to me {read} your slides. She’s the CFO of Skyline Air. She {wants to} meet you.”\nIn the elevator, Leo’s phone vibrates. A new e-mail: “Hi Leo, I saw your slides at the airport. {Would you like to} meet next week? Ivy Carter, CFO, Skyline Air.”\nSara laughs. “Your first big client {is bringing} your second big client.”\nLeo opens his calendar. “{I’ll call} her today.”\nTHE END',
  perguntas: [
    { q: 'What is Mr. Duarte’s question?', h: '“Kestrel is 30% cheaper. Why you?”' },
    { q: 'What are Leo’s two reasons?', h: 'They’ve done it before (Brava Foods), and the price includes training. Kestrel’s doesn’t.' },
    { q: 'Do they have a deal? Who signs?', h: 'Yes! Mr. Duarte and Rita sign.' },
    { q: 'Who is Ivy Carter? What does she want?', h: 'The CFO of Skyline Air. She wants to meet Leo next week.' }],
  olha: 'Look at the highlighted words: they’re from many lessons. Find a question, an experience, “it includes”, a decision now and a polite invitation.' };

var DESCOBRE = {
  pares: [
    { a: 'The team {uses} SAP.', b: 'The team {use} SAP.', q: 'The team = it. Which one?', r: 'He / she / it / the team: verb + <b>-s</b>.' },
    { a: '{Do you have} a payroll team?', b: '{You have} a payroll team?', q: 'Which question is English?', r: 'Questions need a helper: <b>Do / Does / Is / Can / Will / Have</b>.' },
    { a: 'We’re {going to start} in March.', b: 'We {go to start} in March.', q: 'A plan. Which one?', r: 'A plan: <b>be + going to</b> + verb.' },
    { a: 'Last year we {saved} 20%.', b: 'Last year we {save} 20%.', q: 'Last year. Which one?', r: 'Past: <b>-ed</b>: saved, worked. Or: had, made, sent.' }],
  regra: [['-S', 'The team uses SAP. It includes training.'], ['QUESTIONS', 'Do you…? Does it…? Have you ever…?'], ['FUTURE', 'We’re going to start. · OK, I’ll call.'], ['PAST', 'Last year we saved 20%.']],
  armas: [['-S', 'The CFO sign the contracts.', 'The CFO signs the contracts.', 'he / she / it + -s'], ['DO', 'You use Oracle?', 'Do you use Oracle?', 'Do you…?'], ['GOING TO', 'We go to start in March.', 'We’re going to start in March.', 'be + going to'], ['PAST', 'Last year we save 20%.', 'Last year we saved 20%.', '-ed']] };

var CLIENTE = { rot: 'THE DISCOVERY MEETING', codigo: 'IA-01',
  persona: { nome: 'Ivy Carter', cargo: 'CFO', empresa: 'Skyline Air (fictional)', humor: 'Friendly, fast and direct. She likes numbers. She has twenty minutes.', ini: 'IC' },
  missao: 'First, a short pitch: who you are and what you do. Then find out 5 things and get the next step.',
  abre: 'Hi! I saw your slides at the airport. So, tell me: what do you do?',
  fatos: [
    { k: 'EMPLOYEES', q: 'How many employees do you have?', r: 'About 4,000. Pilots, crews and offices.' },
    { k: 'SYSTEM', q: 'What system do you use?', r: 'SAP. We changed to SAP in 2024.' },
    { k: 'PROBLEM', q: 'What is your biggest problem?', r: 'Night shifts and overtime. Payroll is complicated.' },
    { k: 'DECISION', q: 'Who signs the contracts?', r: 'I do. But our CEO has to approve.' },
    { k: 'TIMING', q: 'When would you like to start?', r: 'In January. Our new year starts then.' },
    { k: 'NEXT STEP', q: 'Can we meet next week? / I’ll send…', r: 'Yes. Send me a proposal by Friday.' }],
  chips: ['We help companies with …', 'How many …?', 'What system …?', 'What is your biggest …?', 'Who signs …?', 'When would you like to …?', 'Can we …? I’ll send …'],
  modelo: 'Bluepeak Services helps companies with payroll and finance. We’ve worked with forty companies.<br>How many employees do you have?<br>What system do you use?<br>What is your biggest problem?<br>Who signs the contracts?<br>When would you like to start?<br>Can we meet next week? I’ll send you a proposal by Friday.',
  fim: 'Five facts and a next step! Ivy says: “Great. Send me the proposal. I think we can work together.”' };

var DIALOGO = { rot: 'THE CLOSING · SKYLINE AIR (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'The client says: “I like it, but the price is high.” How do you close?', h: 'I understand. What about…? We can offer… Do we have a deal?' },
  ouvir: 'Listen: what is Ivy’s problem? What does Leo offer? Do they have a deal?',
  falas: [
    ['Ivy', 'Leo, I read the proposal. I like it, but the price is high.'],
    ['Leo', 'I understand. {What about} a two-year contract? It’s 8% cheaper.'],
    ['Ivy', 'Hmm. {Does} the price {include} the night shifts?'],
    ['Leo', 'Yes, {it does}. And {we’ve done} it before, for a bus company.'],
    ['Ivy', 'Good. When {are} you {going to} start?'],
    ['Leo', 'We’re {going to} start on January 5. The go-live is in March.'],
    ['Ivy', 'Our CEO {has to} approve it. He’s here today.'],
    ['Leo', '{Would} he {like to} meet us now?'],
    ['Ivy', 'One minute… OK. He says yes to two years.'],
    ['Leo', 'Great. {Do we have a deal}?'],
    ['Ivy', 'Yes, Leo. {It’s a deal}.'],
    ['Leo', 'Thank you! {I’ll send} you the contract today.']],
  voz: { Ivy: 'en-US-AriaNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'What is Ivy’s problem?', h: 'The price is high.' },
    { q: 'What does Leo offer?', h: 'A two-year contract, 8% cheaper.' },
    { q: 'Does the price include the night shifts?', h: 'Yes, it does. They’ve done it before, for a bus company.' },
    { q: 'When are they going to start? When is the go-live?', h: 'On January 5. The go-live is in March.' },
    { q: 'What is the next step?', h: 'Leo will send the contract today.' }],
  fim: 'The whole course in one closing: What about…? · it includes · we’ve done it · going to · has to · Would he like…? · It’s a deal · I’ll send…' };

var CADEIRA = { itens: [
  { alvo: 'Start the meeting with small talk.', dica: 'Hi Ivy! How was your week? Do you like traveling?', resp: 'Busy! I love traveling, but not for work.' },
  { alvo: 'Present your proposal in two sentences: what it includes and the price.', dica: 'Our service includes … It’s R$ … per month.', resp: 'Hmm. Does it include training?' },
  { alvo: 'Answer. Then give an experience.', dica: 'Yes, it does. We’ve done it for …', resp: 'OK. But the price is high for us.' },
  { alvo: 'Answer the objection: make an offer.', dica: 'I understand. What about …? We can offer …', resp: 'Interesting. When are you going to start?' },
  { alvo: 'Say the plan with going to.', dica: 'We’re going to start on … The go-live is going to be in …', resp: 'Good. Our CEO has to approve, but he likes it.' },
  { alvo: 'Close the deal and say the next step.', dica: 'Do we have a deal? … Great! I’ll send you the contract today.', resp: 'Yes. It’s a deal!' }] };

var CARTAO = { ph: '1. LINKEDIN: Hi …, I’d like to connect. …\n2. PITCH (30 seconds): We help … We’ve worked with …\n3. SIX QUESTIONS: How many …? What …? Who …? …\n4. CLOSING E-MAIL: Hi …, thank you for … We’re going to start on … I’ll send …', rot: 'My sales kit',
  chips: ['I’d like to connect.', 'Would you like to talk next week?', 'We help companies with ', 'We’ve worked with ', 'How many employees do you have?', 'What system do you use?', 'Who signs the contracts?', 'We’re going to start on ', 'It’s a deal!', 'I’ll send you the contract today.'],
  perg: ['YOUR SALES KIT · FINAL PROJECT', 'Four parts for your real job: a LinkedIn message, a 30-second pitch, six questions, a closing e-mail. Finish it at home if you need to.'],
  exemploRot: 'DEAL · SKYLINE AIR (FICTIONAL)', exemplo: [['CLIENT', 'Ivy Carter, CFO'], ['EMPLOYEES', '4,000 · SAP'], ['OFFER', 'two years, 8% cheaper'], ['START', 'January 5'], ['GO-LIVE', 'March']],
  modelo: '1. LINKEDIN: Hi Ivy, I’d like to connect. I saw you work with payroll for 4,000 people. Would you like to talk next week?<br>2. PITCH: Bluepeak Services helps companies with payroll and finance. We’ve worked with forty companies, and last year our clients saved 20%.<br>3. QUESTIONS: How many employees do you have? What system do you use? Who does the payroll today? What is your biggest problem? Who signs the contracts? When would you like to start?<br>4. CLOSING E-MAIL: Hi Ivy, thank you for the meeting today. We’re going to start on January 5, and the go-live is going to be in March. The price includes the night shifts. I’ll send you the contract today. Best, Leo' };

var PODE = [
  'I can find a client, ask the right questions and close a deal in English.',
  'I can write a LinkedIn message, a pitch and a closing e-mail.',
  'I can use the whole course: questions, plans, the past, experience.',
  'I finished Selling Services A1+. This is my certificate. Congratulations!'
];

var RACIOCINIO = { rot: 'SALES STORYLINE', cliente: 'Ivy Carter, Skyline Air (fictional)',
  etapas: ['PAIN', 'IMPACT', 'SOLUTION', 'PROOF', 'NEXT STEP'],
  cartas: [
    { t: 'Payroll is complicated: night shifts and overtime.', e: 0 },
    { t: 'The team works late every month, and reports are late.', e: 1 },
    { t: 'We do your payroll with your SAP, every month.', e: 2 },
    { t: 'Brava Foods saved 20% in the first year.', e: 3 },
    { t: 'Can I send you a proposal by Friday?', e: 4 },
    { t: 'We sell SAP licenses.', e: -1 },
    { t: 'Our office is very beautiful.', e: -1 }],
  fala: ['Your problem is …', 'Because of this, …', 'We can …', 'For example, …', 'Can we …?'],
  modelo: 'Your problem is payroll: night shifts and overtime make it complicated. Because of this, your team works late every month, and the reports are late. We can do your payroll with your SAP, every month. For example, Brava Foods saved twenty percent in the first year. Can I send you a proposal by Friday?' };
