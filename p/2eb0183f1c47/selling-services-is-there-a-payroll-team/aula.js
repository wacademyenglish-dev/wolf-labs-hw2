/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 4 · IS THERE A PAYROLL TEAM? · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: perguntas Is there / Are there / Do you / Does … + respostas curtas (Yes, we do. No, it isn’t.).
   Armadilhas: “You use SAP?”, “Have a payroll team?”, “Yes, I use.”, “No, it don’t.”
   Situação: a ligação de descoberta com uma CFO. Produto: o roteiro de 6 perguntas.
   Empresas FICTÍCIAS. SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 4, kick: 'SELLING SERVICES · LESSON 4', titulo: ['Is There a', 'Payroll Team?'], tema: 'questions and short answers', placa: 'LESSON 4',
  lugarConversa: 'THE DISCOVERY CALL', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Good sellers ask before they talk. Today you prepare and make a discovery call with a CFO: six short questions, six short answers.',
  chips: ['The CFO’s e-mail', 'The discovery call', 'Your call script'], botao: 'Start the lesson',
  nota: 'A question starts with the helper: Is there…? Are there…? Do you…? Does she…?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'Do you have calls today?', p: 'Answer with a short answer. Then ask your teacher.' },
  { k: 'leitura', est: 'l', min: 7, img: 'mesa', rot: 'II · The CFO’s E-mail', t: 'A CFO says yes to a call.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 9, img: 'conversa', rot: 'III · The Discovery Call', t: 'Leo asks. The CFO answers, short.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Make a Real Question', t: 'Two questions. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'transforma', est: 'f', min: 7, img: 'mesa', rot: 'V · Ask the Client', t: 'Turn the notes into questions.', p: 'Read the note and the helper. Say the question. Then check.' },
  { k: 'escolha', est: 'o', min: 5, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Call Script', t: 'Six questions for your next discovery call.', p: 'Write them. Then ask them: your teacher is the CFO.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'Do you have calls today?', f: 'Calls today?', voce: ['Yes, I do. I have …', 'No, I don’t.'], ex: 'Yes, I do. I have three calls this afternoon.' },
  { q: 'Is there a meeting room in your office?', f: 'A meeting room?', voce: ['Yes, there is.', 'No, there isn’t.'], ex: 'Yes, there is. There are two.' },
  { q: 'Do you call clients in English?', f: 'English on the phone?', voce: ['Yes, I do. Sometimes.', 'No, I don’t. Not yet!'], ex: 'No, I don’t. Not yet!' },
  { q: 'Is your phone always on?', f: 'Phone on at night?', voce: ['Yes, it is.', 'No, it isn’t.'], ex: 'Yes, it is. It’s a problem!' }
];

var LEITURA = { rot: 'E-MAIL · FROM KAREN WELLS, CFO, LUMEN LOGISTICS (FICTIONAL)', tipo: 'nota',
  antes: { q: 'A CFO says yes to a call. What does she want from you?', h: 'Good questions, and no long presentation.' },
  texto: 'Hi Leo,\nThursday at 10 a.m. is good for me.\nSome information before the call: {there are} 2,000 employees and {there is} one ERP, Oracle.\nPayroll {is} inside the company, and it {isn’t} fast.\n{Do you} work with Oracle? {Is there} a client like us in logistics?\nPlease send me four or five questions before the call.\nBest,\nKaren',
  perguntas: [
    { q: 'When is the call?', h: 'On Thursday at 10 a.m.' },
    { q: 'What ERP do they use?', h: 'Oracle.' },
    { q: 'What is the problem?', h: 'Payroll is inside the company, and it isn’t fast.' },
    { q: 'What does Karen want before the call?', h: 'Four or five questions.' }],
  olha: 'Look at Karen’s two questions. What is the first word of each one?' };

var DIALOGO = { rot: 'THE DISCOVERY CALL · LEO AND KAREN', audio: 'dialogo',
  antes: { q: 'In a discovery call, who talks more: the seller or the client?', h: 'The client. The seller asks short questions and listens.' },
  ouvir: 'Listen: is there a payroll team? Do they use Oracle for payroll?',
  falas: [
    ['Leo', 'Good morning, Karen. Thank you for your time. Can I ask some questions?'],
    ['Karen', 'Sure, go ahead.'],
    ['Leo', '{Is there} a payroll team at Lumen?'],
    ['Karen', 'Yes, {there is}. There are five people.'],
    ['Leo', '{Do you use} Oracle for payroll?'],
    ['Karen', 'No, {we don’t}. We use spreadsheets for payroll. Oracle is only for accounting.'],
    ['Leo', '{Are there} problems at the end of the month?'],
    ['Karen', 'Yes, {there are}. The reports are late.'],
    ['Leo', '{Is} the tax team in the same office?'],
    ['Karen', 'No, {it isn’t}. It’s in Curitiba.'],
    ['Leo', '{Do you have} a budget for this project?'],
    ['Karen', 'Yes, {we do}. For next year.']],
  voz: { Leo: 'en-US-AndrewNeural', Karen: 'en-US-JennyNeural' },
  perguntas: [
    { q: 'Is there a payroll team? How many people?', h: 'Yes, there is. There are five people.' },
    { q: 'Do they use Oracle for payroll?', h: 'No, they don’t. They use spreadsheets. Oracle is only for accounting.' },
    { q: 'Are there problems at the end of the month?', h: 'Yes, there are. The reports are late.' },
    { q: 'Is the tax team in the same office?', h: 'No, it isn’t. It’s in Curitiba.' },
    { q: 'Do they have a budget?', h: 'Yes, they do. For next year.' }],
  fim: 'Short answers repeat the helper: Do you…? → Yes, we do. Is it…? → No, it isn’t.' };

var DESCOBRE = {
  pares: [
    { a: '{Do you use} SAP?', b: '{You use} SAP?', q: 'Which one is a good question in a call?', r: 'Action verbs: <b>Do you … ? Does she … ?</b> “You use SAP?” only shows surprise.' },
    { a: '{Is there} a payroll team?', b: '{Have} a payroll team?', q: 'In Portuguese: “Tem um time de folha?” In English?', r: '“Tem…?” = <b>Is there…? Are there…?</b>' },
    { a: 'Yes, {I do}.', b: 'Yes, {I use}.', q: 'Do you use Oracle? Short answer: what do we repeat?', r: 'Repeat the helper: Do you…? → <b>Yes, I do. / No, I don’t.</b>' },
    { a: 'No, {it isn’t}.', b: 'No, {it don’t}.', q: 'Is it fast? Short answer: what do we repeat?', r: 'Is it…? → <b>Yes, it is. / No, it isn’t.</b>' }],
  regra: [['ACTION', 'Do you use…? → Yes, we do. / No, we don’t.'], ['HE · SHE · IT', 'Does she use…? → Yes, she does.'], ['BE', 'Is it fast? → No, it isn’t.'], ['THERE', 'Is there…? Are there…? → Yes, there are.']],
  armas: [['NO HELPER', 'You use SAP?', 'Do you use SAP?', 'do + you'], ['“TEM?”', 'Have a payroll team?', 'Is there a payroll team?', 'is there'], ['SHORT', 'Yes, I use.', 'Yes, I do.', 'repeat do'], ['BE', 'Is it fast? No, it don’t.', 'No, it isn’t.', 'be → isn’t']] };

var TRANSFORMA = { rot: 'YOUR NOTES → YOUR QUESTIONS', fim: 'Is there / Are there / Do you / Does it: the helper comes first.', itens: [
  { de: 'The company uses TOTVS.', pista: 'Does…?', para: 'Does the company use TOTVS?' },
  { de: 'There is a tax team.', pista: 'Is there…?', para: 'Is there a tax team?' },
  { de: 'You have a budget.', pista: 'Do…?', para: 'Do you have a budget?' },
  { de: 'There are many spreadsheets.', pista: 'Are there…?', para: 'Are there many spreadsheets?' },
  { de: 'The reports are late.', pista: 'Are…?', para: 'Are the reports late?' },
  { de: 'Your CFO works in São Paulo.', pista: 'Does…?', para: 'Does your CFO work in São Paulo?' }] };

var ESCOLHA = [
  { a: 'Questions first', b: 'Presentation first', chips: ['I prefer … because …', 'The client … · It isn’t …'], ex: 'I prefer questions first because the client talks, and I learn.' },
  { a: 'A video call', b: 'A phone call', chips: ['I prefer … because …', 'There is / There isn’t …'], ex: 'I prefer a video call because there is a face. It’s more personal.' }];
var ESCOLHA_FIM = 'Now you know: a good call is short questions and long answers.';

var CARTAO = { ph: '1. Is there a … ?\n2. Do you use … for … ?\n3. Are there … ?\n4. How many people are there in … ?\n5. Does your … ?\n6. Do you have a budget for … ?', rot: 'My call script',
  chips: ['Is there a ', 'Are there any ', 'Do you use ', 'Does your team ', 'How many people are there in ', 'What ERP do you use?', 'Do you have a budget for ', 'payroll', 'tax', 'accounting'],
  perg: ['YOUR DISCOVERY CALL SCRIPT', 'Six short questions for a real client (or Lumen Logistics). Then ask them: your teacher is the CFO.'],
  exemploRot: 'CALL PLAN · LUMEN LOGISTICS', exemplo: [['WHO', 'Karen Wells, CFO'], ['WHEN', 'Thursday, 10 a.m.'], ['ERP', 'Oracle'], ['PAIN', 'payroll is slow'], ['GOAL', 'a second meeting']],
  modelo: '1. Is there a payroll team?<br>2. Do you use Oracle for payroll?<br>3. Are there problems at the end of the month?<br>4. How many people are there in the tax team?<br>5. Does your team work with spreadsheets?<br>6. Do you have a budget for this project?' };

var PODE = [
  'I can ask with Is there…? and Are there…?',
  'I can ask with Do you…? and Does it…? (never “You use…?”).',
  'I can give short answers: Yes, we do. No, it isn’t.',
  'I can write and ask six questions in a discovery call.'
];
