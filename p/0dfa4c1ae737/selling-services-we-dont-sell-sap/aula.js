/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 3 · WE DO PAYROLL. WE DON’T SELL SAP. · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   O CORAÇÃO do curso: verbo de ação usa don’t / doesn’t; o be usa isn’t / aren’t.
   Armadilhas: “it don’t is cheap”, “we aren’t sell SAP”, “the client don’t use”.
   Situação: o que a empresa faz e o que não faz. Produto: o pitch de 30 segundos.
   Empresas FICTÍCIAS. SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 3, kick: 'SELLING SERVICES · LESSON 3', titulo: ['We Do Payroll.', 'We Don’t Sell SAP.'], tema: 'don’t (action) · isn’t (be)', placa: 'LESSON 3',
  lugarConversa: 'THE OPEN OFFICE', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Clients confuse services with software. Today you say what your company does, what it doesn’t do, and what it isn’t, in thirty seconds.',
  chips: ['What we do', 'A client asks', 'Your 30-second pitch'], botao: 'Start the lesson',
  nota: 'Two negatives, one test: is there an action (sell, do, use, work)? Use don’t. No action? Use isn’t.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'What do you do on Monday mornings?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · What We Do', t: 'The page every client reads first.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · “So, Do You Sell SAP?”', t: 'An IT manager asks Leo some direct questions.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Don’t or Isn’t?', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'erros', est: 'f', min: 8, img: 'mesa', rot: 'V · Fix the E-mail', t: 'A new colleague wrote this e-mail. Five mistakes.', p: 'Find a mistake. Say the right form. Then tap it.' },
  { k: 'escolha', est: 'o', min: 5, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your 30-Second Pitch', t: 'Write it. Then say it in thirty seconds.', p: 'Two things you do, one thing you don’t do, one thing you aren’t.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'What do you do on Monday mornings?', f: 'Calls? E-mails? Meetings?', voce: ['I usually …', 'I don’t … on Mondays.'], ex: 'I usually call clients. I don’t have meetings on Monday mornings.' },
  { q: 'Do you work from home on Fridays?', f: 'Home on Friday: yes or no?', voce: ['Yes, I do.', 'No, I don’t.'], ex: 'No, I don’t. I’m at the office on Fridays.' },
  { q: 'Is your job easy this week?', f: 'Easy or hard?', voce: ['Yes, it is.', 'No, it isn’t. It’s …'], ex: 'No, it isn’t! It’s a crazy week.' },
  { q: 'Do you drink coffee in meetings?', f: 'Coffee in meetings?', voce: ['Yes, I do.', 'No, I don’t. I drink …'], ex: 'Yes, I do. Two coffees, every meeting.' }
];

var LEITURA = { rot: 'BLUEPEAK SERVICES · ONE-PAGE OVERVIEW (FICTIONAL)', tipo: 'nota',
  antes: { q: 'A client asks: “Do you sell software?” What does a BPO company do?', h: 'It does work for the client: payroll, accounting, tax. It doesn’t sell software licenses.' },
  texto: 'WHAT WE DO\nWe {do} payroll for companies with 500 to 10,000 employees.\nWe {do} accounting and tax for factories, stores and transport companies.\nWe {connect} ERPs: SAP, Oracle and TOTVS.\nWHAT WE DON’T DO\nWe {don’t sell} software licenses. We {aren’t} an SAP reseller.\nWe {don’t replace} your finance team. We {work} with them.\nOur price {isn’t} per hour. It’s a monthly fee.',
  perguntas: [
    { q: 'What do they do?', h: 'Payroll, accounting and tax, and they connect ERPs.' },
    { q: 'Do they sell SAP licenses?', h: 'No, they don’t. They aren’t an SAP reseller.' },
    { q: 'Do they replace the finance team?', h: 'No, they don’t. They work with the team.' },
    { q: 'Is the price per hour?', h: 'No, it isn’t. It’s a monthly fee.' }],
  olha: 'Look at the highlighted words. Which negatives come with an action (sell, replace)? Which come with be (are, is)?' };

var DIALOGO = { rot: 'A FIRST CALL · COSTA RETAIL (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A client asks: “Do you sell SAP?” Your company only connects SAP. What do you say?', h: 'No, we don’t. We aren’t a reseller. We connect SAP with your payroll.' },
  ouvir: 'Listen: what does Bluepeak do? What doesn’t it do?',
  falas: [
    ['Mark', 'Hi, Leo. I have five minutes. So, do you sell SAP?'],
    ['Leo', 'No, we {don’t}. We {aren’t} a reseller. We connect SAP with your payroll and your accounting.'],
    ['Mark', 'OK. Is it expensive?'],
    ['Leo', 'It {isn’t} cheap, but it {isn’t} per hour. It’s a monthly fee.'],
    ['Mark', 'Do you work with small companies?'],
    ['Leo', 'No, we {don’t}. Our clients are mid-size and large.'],
    ['Mark', 'We use Oracle, not SAP. Do you know Oracle?'],
    ['Leo', 'Yes, we {do}. SAP, Oracle and TOTVS.'],
    ['Mark', 'Good. Our CFO {doesn’t like} long meetings. Send me an e-mail.']],
  voz: { Mark: 'en-US-BrianNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'Does Bluepeak sell SAP?', h: 'No, it doesn’t. It isn’t a reseller. It connects SAP.' },
    { q: 'Is it expensive? Is the price per hour?', h: 'It isn’t cheap, but it isn’t per hour. It’s a monthly fee.' },
    { q: 'Do they work with small companies?', h: 'No, they don’t. Their clients are mid-size and large.' },
    { q: 'What ERP does Costa Retail use?', h: 'Oracle.' },
    { q: 'What does the CFO not like?', h: 'Long meetings. (The CFO doesn’t like long meetings.)' }],
  fim: 'Action → don’t / doesn’t. Be → isn’t / aren’t.' };

var DESCOBRE = {
  pares: [
    { a: 'We {don’t sell} software.', b: 'We {aren’t sell} software.', q: '“Sell” is an action. Which negative?', r: 'Action verbs (sell, do, work, use): <b>don’t</b> + verb.' },
    { a: 'It {isn’t} expensive.', b: 'It {don’t is} expensive.', q: '“Expensive” describes. Is there an action?', r: 'No action, just <b>be</b>: <b>isn’t</b>.' },
    { a: 'The client {doesn’t use} SAP.', b: 'The client {don’t use} SAP.', q: 'The client = he / she / it. Which one?', r: 'he, she, it + action: <b>doesn’t</b> + verb.' },
    { a: 'We {aren’t} a reseller.', b: 'We {don’t are} a reseller.', q: '“A reseller” is what we are. Which negative?', r: 'be + noun: we <b>aren’t</b> a reseller.' }],
  regra: [['BE · WHAT IT IS', 'It isn’t cheap. We aren’t a reseller.'], ['ACTION · WHAT WE DO', 'We don’t sell licenses.'], ['HE · SHE · IT + ACTION', 'The client doesn’t use SAP.'], ['THE TEST', 'An action? → don’t. No action? → isn’t.']],
  armas: [['BE', 'It don’t is cheap.', 'It isn’t cheap.', 'be → isn’t'], ['ACTION', 'We aren’t sell SAP.', 'We don’t sell SAP.', 'action → don’t'], ['IT', 'The ERP don’t work.', 'The ERP doesn’t work.', 'it → doesn’t'], ['HE', 'He don’t is the CFO.', 'He isn’t the CFO.', 'be → isn’t']] };

var ERROS = { rot: 'E-MAIL · DRAFT FROM A NEW COLLEAGUE', tipo: 'nota', rotulo: 'MISTAKES', pede: 'Find the five mistakes. Say the right form, then tap.', fim: 'Five fixed. Now read the whole e-mail out loud.', dica: 'The student says the right form BEFORE tapping. Ask: action or be?', partes: [
  'Hi Mark,\nThank you for the call today.\n',
  ['We don’t are a software company.', 'We aren’t a software company.', 'be → aren’t'], ' ',
  ['We no sell SAP licenses.', 'We don’t sell SAP licenses.', 'action → don’t'], ' We do payroll and tax.\n',
  ['Our price don’t is per hour.', 'Our price isn’t per hour.', 'be → isn’t'], ' It’s a monthly fee.\n',
  ['Bluepeak don’t work with small companies.', 'Bluepeak doesn’t work with small companies.', 'it + action → doesn’t'], '\n',
  ['Is the project long? No, it don’t.', 'Is the project long? No, it isn’t.', 'short answer with be → it isn’t'], '\nBest,\nLeo'] };

var ESCOLHA = [
  { a: 'Sell to a CFO', b: 'Sell to an IT manager', chips: ['I prefer … because …', 'He / She doesn’t … · isn’t …'], ex: 'I prefer a CFO because a CFO isn’t technical. He thinks about money.' },
  { a: 'A 30-second pitch', b: 'A 10-minute presentation', chips: ['I prefer … because …', 'Clients don’t … · It isn’t …'], ex: 'I prefer a 30-second pitch because clients don’t have time.' }];
var ESCOLHA_FIM = 'Listen to the reasons: action → don’t, be → isn’t.';

var CARTAO = { ph: 'We’re … We do …\nWe don’t … We aren’t …\nOur clients are …', rot: 'My 30-second pitch',
  chips: ['We’re a ', 'We do ', 'payroll, tax and accounting', 'We connect ', 'SAP, Oracle and TOTVS', 'We don’t ', 'sell software licenses', 'We aren’t ', 'It isn’t ', 'Our clients are '],
  perg: ['YOUR 30-SECOND PITCH', 'Two things your company does, one thing it doesn’t do, one thing it isn’t. Then say it out loud: 30 seconds.'],
  exemploRot: 'PITCH CARD', exemplo: [['WE ARE', 'a BPO and BTO company'], ['WE DO', 'payroll, tax, accounting'], ['WE CONNECT', 'SAP, Oracle, TOTVS'], ['WE DON’T', 'sell licenses'], ['WE AREN’T', 'a reseller'], ['PRICE', 'not per hour']],
  modelo: 'We’re Bluepeak, a BPO and BTO company. We do payroll, tax and accounting, and we connect ERPs like SAP, Oracle and TOTVS.<br>We don’t sell software licenses, and we aren’t a reseller. We work with your team.<br>Our clients are mid-size and large companies.' };

var PODE = [
  'I can say what my company does: We do … We connect …',
  'I can say what it doesn’t do: We don’t sell …',
  'I can choose: action → don’t / doesn’t; be → isn’t / aren’t.',
  'I can give a 30-second pitch.'
];
