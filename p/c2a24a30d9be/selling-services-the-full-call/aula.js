/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 25 · THE FULL CALL · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js e cliente.js do curso). A1+.
   Alvo: revisão das perguntas (Do/Does…? Is…? Can…? Will…? + What / Who / How many / Where), abrir a ligação e pedir o próximo passo.
   Armadilhas: “You use SAP?” (sem do), “What system you use?”, “How many employees has the company?”, “Where is located the office?”.
   Situação: a ligação de descoberta completa. Formatos: transforma (nota do CRM → pergunta), cartão ANTES da ligação
   (o roteiro), cliente IA-01 Discovery Call (cliente novo), escolha. Produto: o roteiro final da ligação.
   Empresas FICTÍCIAS (Bluepeak Services, Pine Hotels, Coral Bay Resorts). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 25, kick: 'SELLING SERVICES · LESSON 25', titulo: ['The Full', 'Call'], tema: 'questions review: do · does · is · can · will · wh-', placa: 'LESSON 25',
  lugarConversa: 'THE DISCOVERY CALL', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'A new client says yes to a short call. Fifteen minutes, one chance. Today you build your full call: hello, the right questions, the next step. Then you make the call.',
  chips: ['A full call', 'Your call script', 'The live call'], botao: 'Start the lesson',
  nota: 'A question needs a helper: Do you…? Does she…? Is it…? Can we…? Not “You use SAP?”' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Calls', t: 'How many calls do you make in a week?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'dialogo', est: 'l', min: 8, img: 'mesa', rot: 'II · A Full Call', t: 'Leo calls a new client: Pine Hotels.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 8, img: 'capa', rot: 'III · The Helper in the Question', t: 'Two questions. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'transforma', est: 'f', min: 7, img: 'mesa', rot: 'IV · From Notes to Questions', t: 'CRM notes are answers. What was the question?', p: 'Read the note. Use the clue. Say the question.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'V · Your Call Script', t: 'Write your call: hello, six questions, the next step.', p: 'Write it now. You use it in the next scene!' },
  { k: 'cliente', est: 'o', min: 12, img: 'conversa', rot: 'VI · The Discovery Call', t: 'A new client. Your teacher is the client.', p: 'Use your script. Find the five facts. Then ask for the next step.' },
  { k: 'escolha', est: 'o', min: 6, img: 'mesa', rot: 'VII · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 25: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How many calls do you make in a week?', f: 'Five? Thirty?', voce: ['I make about … calls a week.'], ex: 'I make about twenty calls a week. Most are short.' },
  { q: 'What’s your first question on a call?', f: 'Personal or business?', voce: ['My first question is …'], ex: 'My first question is: “Is this a good time?”' },
  { q: 'Do you prefer calling or receiving calls?', f: 'Calling or receiving?', voce: ['I prefer … because …'], ex: 'I prefer calling because I’m ready with my questions.' },
  { q: 'What is a bad question for a first call?', f: 'Too personal? Too direct?', voce: ['A bad question is …'], ex: 'A bad question is “How much is your budget?” in the first minute.' }
];

var DIALOGO = { rot: 'DISCOVERY CALL · PINE HOTELS (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A new client answers the phone. What are your first two sentences?', h: 'Hi, this is … from … I’m calling about … Is this a good time?' },
  ouvir: 'Listen: how many employees? What system? What is the next step?',
  falas: [
    ['Leo', 'Hi Grace, this is Leo Martins from Bluepeak. {Is} this a good time?'],
    ['Grace', 'Yes, I have twenty minutes. Go ahead.'],
    ['Leo', 'Great. {How many} employees {do} you {have}?'],
    ['Grace', 'About nine hundred, in six hotels.'],
    ['Leo', '{Who does} the payroll today?'],
    ['Grace', 'My team. Four people, and a lot of spreadsheets.'],
    ['Leo', 'I see. {What} system {do} you {use}?'],
    ['Grace', 'TOTVS. But the team doesn’t like it.'],
    ['Leo', '{Does} your CFO {know} about this call?'],
    ['Grace', 'Yes. She signs the contracts.'],
    ['Leo', 'Perfect. {Can} we {meet} next week, with your CFO?'],
    ['Grace', 'Sure. {Will} you {send} me two dates?'],
    ['Leo', 'Yes, I’ll send them today.']],
  voz: { Leo: 'en-US-AndrewNeural', Grace: 'en-US-AriaNeural' },
  perguntas: [
    { q: 'How many employees does Pine Hotels have?', h: 'About nine hundred, in six hotels.' },
    { q: 'Who does the payroll today?', h: 'Grace’s team: four people, with a lot of spreadsheets.' },
    { q: 'What system do they use? Is the team happy?', h: 'TOTVS. No, the team doesn’t like it.' },
    { q: 'Who signs the contracts?', h: 'The CFO.' },
    { q: 'What is the next step?', h: 'A meeting next week with the CFO. Leo will send two dates today.' }],
  fim: 'Every question has a helper: Is…? Do…? Does…? Can…? Will…? And What / Who / How many come first.' };

var DESCOBRE = {
  pares: [
    { a: '{Do you use} SAP?', b: '{You use} SAP?', q: 'A question to a client. Which one is English?', r: 'A question needs a helper: <b>Do</b> you use…? <b>Does</b> she sign…?' },
    { a: 'What system {do you use}?', b: 'What system {you use}?', q: 'With What, Who or How many: which one?', r: 'Wh- + <b>do / does</b> + person + verb: What system do you use?' },
    { a: 'How many employees {does the company have}?', b: 'How many employees {has the company}?', q: 'Which one is English?', r: 'How many + <b>do / does</b> + … + <b>have</b>. Not “has the company?”.' },
    { a: 'Where {is the office}?', b: 'Where {is located the office}?', q: 'Which one is simple and right?', r: 'Where <b>is</b> the office? Short and right.' }],
  regra: [['YES / NO', 'Do you use…? Does she sign…?'], ['WITH BE', 'Is this a good time? Are you the CFO?'], ['WH-', 'What do you use? How many people do you have?'], ['NEXT STEP', 'Can we meet…? Will you send…?']],
  armas: [['DO', 'You use SAP?', 'Do you use SAP?', 'Do you…?'], ['DOES', 'The CFO sign the contracts?', 'Does the CFO sign the contracts?', 'Does…?'], ['HOW MANY', 'How many employees has the company?', 'How many employees does the company have?', 'does … have'], ['WHERE', 'Where is located the office?', 'Where is the office?', 'Where is…?']] };

var TRANSFORMA = { rot: 'CRM NOTES → QUESTIONS', fim: 'Notes are answers. Your job: the question, with a helper.', itens: [
  { de: 'Employees: 900.', pista: 'How many…?', para: 'How many employees do you have?' },
  { de: 'ERP: TOTVS.', pista: 'What…?', para: 'What ERP do you use?' },
  { de: 'Payroll: four people, in-house.', pista: 'Who…?', para: 'Who does the payroll today?' },
  { de: 'The CFO signs the contracts.', pista: 'Does…?', para: 'Does the CFO sign the contracts?' },
  { de: 'Main office: Curitiba.', pista: 'Where…?', para: 'Where is your main office?' },
  { de: 'Next step: a meeting next week.', pista: 'Can…?', para: 'Can we meet next week?' }] };

var CARTAO = { ph: 'Hello: Hi …, this is … from … I’m calling about … Is this a good time?\nQuestions:\n1. …\n2. …\n3. …\n4. …\n5. …\n6. …\nNext step: Can we …?', rot: 'My call script',
  chips: ['Hi, this is ', 'I’m calling about ', 'Is this a good time?', 'How many employees do you have?', 'What system do you use?', 'Who does the payroll today?', 'Who signs the contracts?', 'What is your biggest problem?', 'Can we meet next week?', 'I’ll send you '],
  perg: ['YOUR FINAL CALL SCRIPT', 'For a real (or invented) client: hello, six questions, the next step. You use it in the next scene!'],
  exemploRot: 'CALL PLAN · PINE HOTELS', exemplo: [['CONTACT', 'Grace Miller, HR director'], ['TIME', '20 minutes'], ['FIND OUT', 'employees · system · team · problem · who signs'], ['NEXT STEP', 'meeting with the CFO']],
  modelo: 'Hi Grace, this is Leo Martins from Bluepeak Services. I’m calling about your payroll. Is this a good time?<br>1. How many employees do you have?<br>2. Who does the payroll today?<br>3. What system do you use?<br>4. What is your biggest problem?<br>5. Who signs the contracts?<br>6. When does your new budget start?<br>Next step: Can we meet next week with your CFO? I’ll send you two dates.' };

var CLIENTE = { rot: 'DISCOVERY CALL', codigo: 'IA-01',
  persona: { nome: 'Paula Reyes', cargo: 'Finance manager', empresa: 'Coral Bay Resorts (fictional)', humor: 'Friendly but busy: she has fifteen minutes. She answers only what you ask.', ini: 'PR' },
  missao: 'Find out 5 things with your questions. Then ask for the next step.',
  abre: 'Hello, Paula Reyes speaking. I have fifteen minutes. How can I help?',
  fatos: [
    { k: 'EMPLOYEES', q: 'How many employees do you have?', r: 'About 1,200, in four resorts.' },
    { k: 'SYSTEM', q: 'What system do you use?', r: 'Oracle. It’s old, but it works.' },
    { k: 'TEAM', q: 'Who does the payroll today?', r: 'Three people in my team.' },
    { k: 'PROBLEM', q: 'What is your biggest problem?', r: 'Summer. We hire 300 more people.' },
    { k: 'DECISION', q: 'Who signs the contracts?', r: 'Our CFO, Ms. Chen.' }],
  chips: ['Hi Paula, this is … from …', 'How many …?', 'What … do you use?', 'Who …?', 'What is your biggest …?', 'Can we meet …?'],
  modelo: 'Hi Paula, this is … from Bluepeak Services. Thank you for your time.<br>How many employees do you have?<br>What system do you use?<br>Who does the payroll today?<br>What is your biggest problem?<br>Who signs the contracts?<br>Can we meet next week with Ms. Chen?',
  fim: 'Five facts! Now the next step: “Can we meet next week?” Paula says: “Yes. Send me two dates.”' };

var ESCOLHA = [
  { a: 'Small talk first', b: 'Business first', chips: ['I prefer … because …', 'The client has … · Is it …?'], ex: 'I prefer business first because the client has only fifteen minutes.' },
  { a: 'Six questions', b: 'Three good questions', chips: ['I prefer … because …', 'The client doesn’t …'], ex: 'I prefer three good questions because six questions is like an interview.' },
  { a: 'Notes on paper', b: 'Type in the CRM during the call', chips: ['I prefer … because …', 'It’s faster · It’s quieter …'], ex: 'I prefer paper because typing is noisy on a call.' }];
var ESCOLHA_FIM = 'Good call, good reasons. Next time, you make this call with a real client.';

var PODE = [
  'I can open a call: This is… I’m calling about… Is this a good time?',
  'I can ask questions with do, does, is, can and will.',
  'I can find five facts about a new client.',
  'I can ask for the next step and write my call script.'
];
