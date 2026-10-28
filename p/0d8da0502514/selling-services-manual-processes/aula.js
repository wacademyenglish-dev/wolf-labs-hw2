/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 2 · THERE ARE A LOT OF MANUAL PROCESSES · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: there is / there are + a / some / many / a lot of. As armadilhas: “there is three systems”, “have two ERPs” (tem).
   Situação: descrever o cliente (departamentos, ERPs, problemas). Produto: o raio-x do cliente.
   Empresas FICTÍCIAS. SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 2, kick: 'SELLING SERVICES · LESSON 2', titulo: ['There Are a Lot of', 'Manual Processes'], tema: 'there is · there are', placa: 'LESSON 2',
  lugarConversa: 'BEFORE THE CALL', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Before you sell, you see the client. How many people? How many systems? Where are the problems? Today you describe a company like a doctor reads an x-ray.',
  chips: ['The client notes', 'Prepare with your manager', 'Your client x-ray'], botao: 'Start the lesson',
  nota: 'One thing: there is. Two or more: there are. In Portuguese it is “tem”, but in English it isn’t “have”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'How many meetings are there this week?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · The Client Notes', t: 'The notes about a new client.', p: 'Read them out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · Prepare with Your Manager', t: 'Leo tells his manager about the client.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · There Is or There Are?', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'multipla', est: 'f', min: 7, img: 'mesa', rot: 'V · Is or Are?', t: 'Six lines from client notes.', p: 'Read the line out loud. Choose. Then say why.' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Client X-Ray', t: 'Describe a client in five lines.', p: 'Size, teams, systems, one problem. Then read it out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How many meetings are there in your week?', f: 'Many or few?', voce: ['There are … meetings.', 'There aren’t many.'], ex: 'There are six meetings this week!' },
  { q: 'Is there a good coffee place near your office?', f: 'Coffee near the office?', voce: ['Yes, there is. It’s …', 'No, there isn’t.'], ex: 'Yes, there is. It’s small, but the coffee is great.' },
  { q: 'How many people are there in your team?', f: 'Your team: big or small?', voce: ['There are … people.', 'It’s a small / big team.'], ex: 'There are eight people in my team.' },
  { q: 'Is there a big client on your list this week?', f: 'A big client: yes or no?', voce: ['Yes, there is.', 'No, there isn’t.'], ex: 'Yes, there is! A food company.' }
];

var LEITURA = { rot: 'CRM · CLIENT NOTES · BRAVA FOODS (FICTIONAL)', tipo: 'nota',
  antes: { q: 'Before a first call, what do you want to know about the client?', h: 'How big it is, the teams, the systems (ERPs), and the problems.' },
  texto: 'BRAVA FOODS · A FOOD COMPANY\n{There are} three factories and 1,800 employees.\n{There is} a finance department in São Paulo with 25 people.\n{There are} two ERPs: TOTVS in the factories and SAP in the head office.\n{There isn’t} a payroll system. {There are} many spreadsheets!\n{There are} a lot of manual processes in accounts payable.\nQUESTION FOR THE CFO: {Is there} a budget for next year?',
  perguntas: [
    { q: 'How many factories are there? How many employees?', h: 'There are three factories and 1,800 employees.' },
    { q: 'How many ERPs are there? Which ones?', h: 'There are two: TOTVS in the factories and SAP in the head office.' },
    { q: 'Is there a payroll system?', h: 'No, there isn’t. There are many spreadsheets.' },
    { q: 'Where are the manual processes?', h: 'In accounts payable.' }],
  olha: 'Look at the highlighted words. When is it “there is”? When is it “there are”? Look at the word after it.' };

var DIALOGO = { rot: 'PREPARING THE CALL · LEO AND HIS MANAGER', audio: 'dialogo',
  antes: { q: 'Your manager asks: “Tell me about the client.” What do you say first?', h: 'It’s a … company. There are … employees.' },
  ouvir: 'Listen: how many ERPs are there? How many people are there in payroll?',
  falas: [
    ['Sara', 'So, Leo, tell me about Brava Foods.'],
    ['Leo', 'It’s a food company. {There are} three factories.'],
    ['Sara', '{Is there} an IT team?'],
    ['Leo', 'Yes, {there is}, but it’s small. {There are} only four people.'],
    ['Sara', 'And {are there} problems with the systems?'],
    ['Leo', 'Yes. {There are} two ERPs, and they aren’t connected. {There are} a lot of spreadsheets.'],
    ['Sara', 'That’s a real need. How many people {are there} in payroll?'],
    ['Leo', '{There are} six. And {there is} a lot of extra work at the end of the month.'],
    ['Sara', 'Great. {There’s} a meeting with their CFO next week. Prepare an x-ray of the company.']],
  voz: { Sara: 'en-US-EmmaNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'Is there an IT team at Brava?', h: 'Yes, there is, but it’s small: four people.' },
    { q: 'How many ERPs are there? Are they connected?', h: 'There are two, and they aren’t connected.' },
    { q: 'How many people are there in payroll?', h: 'There are six.' },
    { q: 'What is next week?', h: 'A meeting with the CFO of Brava Foods.' }],
  fim: 'one → there is · two or more → there are · questions: Is there…? Are there…?' };

var DESCOBRE = {
  pares: [
    { a: 'There {are} three systems.', b: 'There {is} three systems.', q: 'Which one is right? Why?', r: 'Three = more than one → <b>there are</b>.' },
    { a: 'There {is} a payroll team.', b: 'There {are} a payroll team.', q: 'A payroll team: one or many?', r: 'One → <b>there is</b> (there’s).' },
    { a: 'There {are many} spreadsheets.', b: 'There {is many} spreadsheet.', q: 'What comes after “many”?', r: '<b>many</b> + plural: there are many spreadsheets.' },
    { a: '{There are} two ERPs in the company.', b: '{Have} two ERPs in the company.', q: 'In Portuguese: “tem dois ERPs”. In English?', r: '“Tem” (existe) = <b>there is / there are</b>. Not “have”.' }],
  regra: [['ONE', 'there is a … · there’s a …'], ['TWO OR MORE', 'there are some / many …'], ['NEGATIVE', 'there isn’t a … · there aren’t any …'], ['QUESTION', 'Is there a …? Are there any …?']],
  armas: [['PLURAL', 'There is three systems.', 'There are three systems.', '3 → are'], ['“TEM”', 'Have a lot of manual work.', 'There is a lot of manual work.', 'tem → there is'], ['NEGATIVE', 'There don’t have a system.', 'There isn’t a system.', 'there isn’t'], ['MANY', 'There is many problems.', 'There are many problems.', 'many → are']] };

var MULTIPLA = { rot: 'CLIENT NOTES · IS OR ARE?', fim: 'Look at the word after: one → is, two or more → are.', itens: [
  { txt: 'There ___ two ERPs: SAP and TOTVS.', q: 'Choose the right word.', ops: ['is', 'are'], c: 1, por: 'two ERPs → there are.' },
  { txt: 'There ___ a finance team in São Paulo.', q: 'Choose the right word.', ops: ['is', 'are'], c: 0, por: 'a team (one) → there is.' },
  { txt: 'There ___ a payroll system. Payroll is on spreadsheets.', q: 'Choose the right word.', ops: ['isn’t', 'aren’t'], c: 0, por: 'a system (one), negative → there isn’t.' },
  { txt: 'There ___ many manual processes.', q: 'Choose the right word.', ops: ['is', 'are'], c: 1, por: 'many processes → there are.' },
  { txt: '___ there a budget for next year?', q: 'Choose the right word.', ops: ['Is', 'Are'], c: 0, por: 'a budget (one) → Is there…?' },
  { txt: '___ there many people in the tax team?', q: 'Choose the right word.', ops: ['Is', 'Are'], c: 1, por: 'many people → Are there…?' }] };

var ESCOLHA = [
  { a: 'A client with many spreadsheets', b: 'A client with two ERPs', chips: ['I prefer the client with … because …', 'There is / There are …'], ex: 'I prefer the client with many spreadsheets because there is a lot of work for us.' },
  { a: 'A factory visit', b: 'A video call', chips: ['I prefer … because …', 'There are … / It isn’t …'], ex: 'I prefer a factory visit because there are real people and real problems.' }];
var ESCOLHA_FIM = 'Good reasons use the lesson: “because there are…”, “because there isn’t…”.';

var CARTAO = { ph: 'Client: …\nThere are … employees.\nThere is / There are … ERP(s): …\nThere isn’t …\nThere are a lot of …', rot: 'My client x-ray',
  chips: ['There is a ', 'There are ', 'There isn’t a ', 'There aren’t any ', 'There are many ', 'a lot of manual processes', 'employees', 'factories', 'ERPs'],
  perg: ['YOUR CLIENT X-RAY', 'A real client (no name if it is secret) or Brava Foods: size, teams, ERPs, one problem.'],
  exemploRot: 'X-RAY · LUMEN LOGISTICS', exemplo: [['TYPE', 'transport'], ['EMPLOYEES', '2,000'], ['FINANCE TEAM', '12 people'], ['ERP', 'Oracle'], ['PAYROLL SYSTEM', 'no'], ['MANUAL WORK', 'a lot']],
  modelo: 'Lumen Logistics is a transport company. There are 2,000 employees.<br>There is a small finance team: there are twelve people.<br>There is one ERP: Oracle. There isn’t a payroll system.<br>There are a lot of manual processes.' };

var PODE = [
  'I can describe a company with there is and there are.',
  'I can say how many: there are three factories, there are 2,000 employees.',
  'I can say what is missing: there isn’t a payroll system.',
  'I can ask: Is there a …? Are there any …?',
  'I can write a client x-ray.'
];
