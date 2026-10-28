/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 5 · THE FIRST MEETING · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Revisão das 4 primeiras + simulação de reunião com um diretor financeiro + e-mail de follow-up curto.
   Arena A1 (escolha e diga por quê, com frase pronta). Produto: o e-mail de follow-up.
   Empresas FICTÍCIAS (Serra Steel). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 5, kick: 'SELLING SERVICES · LESSON 5', titulo: ['The First', 'Meeting'], tema: 'is · there are · don’t · questions', placa: 'LESSON 5',
  lugarConversa: 'THE MEETING ROOM', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Your first face-to-face meeting with a finance director. You present your company, ask good questions, choose the next step and write the follow-up e-mail.',
  chips: ['Listen to a meeting', 'Your turn: the meeting', 'The follow-up e-mail'], botao: 'Start the lesson',
  nota: 'Everything from Lessons 1 to 4, in one real meeting. Short sentences win.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Week', t: 'Is there a big meeting this week?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'dialogo', est: 'l', min: 9, img: 'mesa', rot: 'II · A First Meeting', t: 'Leo meets the finance director of Serra Steel.', p: 'One question before. Listen. Then the questions.' },
  { k: 'cadeira', est: 'o', min: 12, img: 'conversa', rot: 'III · Your Meeting', t: 'Now you are the seller. Your teacher is the director.', p: 'Do each task. Ask, listen, react.' },
  { k: 'escolha', est: 'o', min: 7, img: 'mesa', rot: 'IV · The Next Step', t: 'The meeting is over. What now?', p: 'Choose A or B and say why. Your teacher answers first.' },
  { k: 'erros', est: 'f', min: 8, img: 'capa', rot: 'V · Fix the Follow-up', t: 'A follow-up e-mail with five mistakes.', p: 'Find a mistake. Say the right form. Then tap it.' },
  { k: 'cartao', est: 'w', min: 10, img: 'capa', rot: 'VI · Your Follow-up E-mail', t: 'Write your follow-up e-mail.', p: 'Thank you, two facts, what you do, the next step.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VII · I Can', t: 'Lesson 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'Is there a big meeting this week?', f: 'A big meeting: yes or no?', voce: ['Yes, there is. It’s on …', 'No, there isn’t.'], ex: 'Yes, there is. It’s on Thursday, with a director.' },
  { q: 'Do you prepare for meetings?', f: 'Notes before a meeting?', voce: ['Yes, I do. I …', 'No, I don’t.'], ex: 'Yes, I do. I write five questions.' },
  { q: 'Are you nervous before a first meeting?', f: 'Nervous: yes or no?', voce: ['Yes, I am. A little.', 'No, I’m not.'], ex: 'Yes, I am. A little!' }
];

var DIALOGO = { rot: 'THE FIRST MEETING · SERRA STEEL (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A finance director says: “So, what is your company?” What do you say?', h: 'We’re a BPO and BTO company. We do payroll, tax and accounting.' },
  ouvir: 'Listen: what is the problem at Serra Steel? What is the next step?',
  falas: [
    ['Daniel', 'Welcome, Leo. Please sit down. So, what is Bluepeak?'],
    ['Leo', 'Thank you. We’re a BPO and BTO company. We do payroll, tax and accounting, and we connect ERPs.'],
    ['Daniel', 'We use SAP. Do you sell SAP?'],
    ['Leo', 'No, we {don’t}. We {aren’t} a reseller. We work with your SAP. Can I ask some questions?'],
    ['Daniel', 'Of course.'],
    ['Leo', 'How many employees {are there} at Serra Steel?'],
    ['Daniel', '{There are} four thousand, in two factories.'],
    ['Leo', '{Is there} a shared service center?'],
    ['Daniel', 'No, {there isn’t}. Every factory has its own finance team. It {isn’t} efficient.'],
    ['Leo', 'I see. Is payroll a problem?'],
    ['Daniel', 'Yes, it is. {There are} a lot of manual processes.'],
    ['Leo', 'OK. I can send you a short proposal. Is Friday good for a second meeting?'],
    ['Daniel', 'Yes, it is. Send me an e-mail today.']],
  voz: { Daniel: 'en-US-ChristopherNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'Does Bluepeak sell SAP?', h: 'No, it doesn’t. It isn’t a reseller. It works with the client’s SAP.' },
    { q: 'How many employees are there at Serra Steel?', h: 'There are four thousand, in two factories.' },
    { q: 'Is there a shared service center?', h: 'No, there isn’t. Every factory has its own finance team.' },
    { q: 'Is payroll a problem? Why?', h: 'Yes, it is. There are a lot of manual processes.' },
    { q: 'What is the next step?', h: 'An e-mail today, and a second meeting on Friday.' }],
  fim: 'Present, ask, listen, next step. Short sentences, a real meeting.' };

var CADEIRA = { itens: [
  { alvo: 'Say hello. Say who you are and your company.', dica: 'Good morning! I’m …, an account executive at …', resp: 'Good morning. Nice to meet you. Please sit down.' },
  { alvo: 'Say what your company is and what it isn’t.', dica: 'We’re a BPO company. We aren’t a software company.', resp: 'Interesting. We get a lot of calls from software companies.' },
  { alvo: 'Ask about the employees.', dica: 'How many employees are there?', resp: 'There are three thousand, in four stores and one office.' },
  { alvo: 'Ask about the ERP.', dica: 'What ERP do you use? Do you use SAP?', resp: 'We use TOTVS. It’s old, and it isn’t connected to payroll.' },
  { alvo: 'Ask about a problem.', dica: 'Is there a problem with payroll? Are there manual processes?', resp: 'Yes. There are a lot of spreadsheets, and the team is tired.' },
  { alvo: 'The director asks: “Do you sell TOTVS?” Answer.', dica: 'No, we don’t. We aren’t a reseller. We connect TOTVS with …', resp: 'OK, good. That’s clear.' },
  { alvo: 'Propose the next step.', dica: 'Is Tuesday good for a second meeting?', resp: 'Yes, it is. Tuesday at 3 p.m.' }] };

var ESCOLHA = [
  { a: 'Send the proposal today', b: 'Call first, then send it', chips: ['I prefer … because …', 'The director is … / isn’t …'], ex: 'I prefer to call first because the director is busy. A call is fast.' },
  { a: 'Start with payroll', b: 'Start with tax', chips: ['I prefer … because …', 'There are … / There is …'], ex: 'I prefer payroll because there are a lot of manual processes.' },
  { a: 'A discount', b: 'A free first month', chips: ['I prefer … because …', 'Clients don’t … / It isn’t …'], ex: 'I prefer a free first month because it isn’t a risk for the client.' }];
var ESCOLHA_FIM = 'No wrong answer: a good reason is the answer.';

var ERROS = { rot: 'E-MAIL · FOLLOW-UP DRAFT', tipo: 'nota', rotulo: 'MISTAKES', pede: 'Find the five mistakes. Say the right form, then tap.', fim: 'Five fixed. Now read the e-mail out loud.', dica: 'The student says the right form BEFORE tapping. Ask: be or action? one or many?', partes: [
  'Hi Daniel,\nThank you for the meeting today.\n',
  ['There is four thousand employees at Serra Steel,', 'There are four thousand employees at Serra Steel,', 'four thousand → there are'], ' and ',
  ['have a lot of manual processes.', 'there are a lot of manual processes.', '“tem” → there are'], '\n',
  ['We don’t are a reseller.', 'We aren’t a reseller.', 'be → aren’t'], ' ',
  ['We no sell SAP.', 'We don’t sell SAP.', 'action → don’t'], ' We work with your SAP.\n',
  ['Friday is good for you? ', 'Is Friday good for you? ', 'question: Is … ?'], 'My proposal is ready.\nBest,\nLeo'] };

var CARTAO = { ph: 'Hi …,\nThank you for the meeting today.\nThere are … There is / isn’t …\nWe do … We don’t …\nIs … good for a second meeting?\nBest,\n…', rot: 'My follow-up e-mail',
  chips: ['Hi ', 'Thank you for the meeting today.', 'There are ', 'There isn’t a ', 'We do ', 'We don’t ', 'We aren’t ', 'Is Friday good for ', 'a second meeting?', 'Best,'],
  perg: ['YOUR FOLLOW-UP E-MAIL', 'To the director in your meeting (Serra Steel or your real client): thank you, two facts, what you do, the next step.'],
  exemploRot: 'MEETING NOTES', exemplo: [['WHO', 'Daniel Price, finance director'], ['EMPLOYEES', '4,000'], ['SHARED SERVICES', 'no'], ['PROBLEM', 'manual payroll'], ['NEXT STEP', 'Friday meeting']],
  modelo: 'Hi Daniel,<br>Thank you for the meeting today.<br>There are four thousand employees, and there isn’t a shared service center, so there are a lot of manual processes in payroll.<br>We do payroll and accounting with your SAP. We don’t sell SAP, and we aren’t a reseller.<br>Is Friday at 10 a.m. good for a second meeting?<br>Best,<br>Leo' };

var PODE = [
  'I can present my company in a meeting: what it is, what it does, what it isn’t.',
  'I can ask a director about employees, ERPs and problems.',
  'I can propose the next step: Is Friday good for …?',
  'I can write a short follow-up e-mail.'
];
