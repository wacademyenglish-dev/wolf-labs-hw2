/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 11 · LAST YEAR WE SAVED 20% · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: past simple: was / were + verbos regulares -ed + 4 irregulares úteis (had, made, sent, began); didn’t + verbo.
   Armadilhas: “we save last year” (sem -ed), “it was don’t easy”, “we didn’t saved”, “we maked”.
   Situação: contar um caso de sucesso a uma CFO nova. Produto: o mini case de 3–4 frases.
   Empresas FICTÍCIAS (Bluepeak Services, Atlas Motors, Northway Chemicals). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 11, kick: 'SELLING SERVICES · LESSON 11', titulo: ['Last Year', 'We Saved 20%'], tema: 'past simple: was, were, -ed, had, made, sent, began', placa: 'LESSON 11',
  lugarConversa: 'LAST WEEK', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Clients believe stories. Today you tell a real success story in the past: what the problem was, what you did, and the result, with a number.',
  chips: ['The case study', 'A story for the CFO', 'Your mini case'], botao: 'Start the lesson',
  nota: 'In the past, the verb changes: we saved, we made. In the negative, one past is enough: we didn’t save.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'How was your weekend?', p: 'Answer in the past, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · The Case Study', t: 'One page: the problem, what we did, the result.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · A Story for the CFO', t: 'A new CFO asks: “Do you have a client like us?”', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Saved, Not “Save”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'transforma', est: 'f', min: 7, img: 'mesa', rot: 'V · Tell It in the Past', t: 'This year → last year.', p: 'Read the sentence and the time. Say it in the past. Then check.' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Mini Case', t: 'A real project in three or four sentences.', p: 'The problem, what you did, the result. Then tell it out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 11: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How was your weekend?', f: 'Good, quiet or busy?', voce: ['It was good. I …', 'It was busy.'], ex: 'It was good. I visited my family on Sunday.' },
  { q: 'Did you have meetings yesterday?', f: 'Meetings yesterday?', voce: ['Yes, I did. I had …', 'No, I didn’t.'], ex: 'Yes, I did. I had two meetings in the afternoon.' },
  { q: 'Were you at the office last Friday?', f: 'Office or home?', voce: ['Yes, I was.', 'No, I wasn’t. I was at home.'], ex: 'No, I wasn’t. I was at home.' },
  { q: 'Did you send a proposal last week?', f: 'A proposal: yes or no?', voce: ['Yes, I sent one to …', 'No, I didn’t.'], ex: 'Yes, I sent one to a food company.' }
];

var LEITURA = { rot: 'BLUEPEAK SERVICES · CASE STUDY · ATLAS MOTORS (FICTIONAL)', tipo: 'nota',
  antes: { q: 'A client reads a case study. What does he want to see?', h: 'A real problem, what you did, and a number.' },
  texto: 'THE PROBLEM\nIn 2024, payroll at Atlas Motors {was} slow. There {were} forty spreadsheets, and the reports {were} late.\nWHAT WE DID\nWe {began} in March 2025. We {connected} SAP with payroll, and we {made} a new monthly calendar.\nThe client {didn’t need} a new ERP.\nTHE RESULT\nLast year, Atlas {saved} 20% on payroll costs. The team {had} more time, and the CFO {sent} us a thank-you e-mail.',
  perguntas: [
    { q: 'What was the problem in 2024?', h: 'Payroll was slow, and the reports were late.' },
    { q: 'How many spreadsheets were there?', h: 'There were forty spreadsheets.' },
    { q: 'When did Bluepeak begin? What did they do?', h: 'In March 2025. They connected SAP with payroll and made a new calendar.' },
    { q: 'What was the result?', h: 'Atlas saved 20% on payroll costs, and the team had more time.' }],
  olha: 'Look at the highlighted verbs. Which ones end in -ed? Which ones are different (began, made, had, sent)?' };

var DIALOGO = { rot: 'A SUCCESS STORY · NORTHWAY CHEMICALS (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A CFO asks: “Do you have a client like us?” What do you say?', h: 'Yes! Last year we … (a short story with a number).' },
  ouvir: 'Listen: what was the problem at Atlas? What was the result?',
  falas: [
    ['Olivia', 'So, Leo, do you have a client like us?'],
    ['Leo', 'Yes. Atlas Motors. Last year, payroll {was} a big problem there.'],
    ['Olivia', 'What {was} the problem?'],
    ['Leo', 'There {were} forty spreadsheets. The reports {were} always late.'],
    ['Olivia', 'And what {did} you {do}?'],
    ['Leo', 'We {began} in March. We {connected} SAP with payroll.'],
    ['Olivia', '{Did} they {buy} a new ERP?'],
    ['Leo', 'No, they {didn’t}. They {didn’t need} a new ERP.'],
    ['Olivia', 'Interesting. And the result?'],
    ['Leo', 'They {saved} 20% in the first year.'],
    ['Olivia', 'Twenty percent? Can you send me the case study?'],
    ['Leo', 'Of course. I {sent} it to your assistant this morning!']],
  voz: { Olivia: 'en-US-EmmaNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'What was the problem at Atlas Motors?', h: 'There were forty spreadsheets, and the reports were always late.' },
    { q: 'When did Bluepeak begin? What did they do?', h: 'In March. They connected SAP with payroll.' },
    { q: 'Did Atlas buy a new ERP?', h: 'No, they didn’t. They didn’t need a new ERP.' },
    { q: 'What was the result?', h: 'They saved 20% in the first year.' },
    { q: 'Where is the case study now?', h: 'Leo sent it to Olivia’s assistant this morning.' }],
  fim: 'was / were · -ed (saved, connected) · began, made, had, sent · didn’t + verb.' };

var DESCOBRE = {
  pares: [
    { a: 'Last year we {saved} 20%.', b: 'Last year we {save} 20%.', q: '“Last year”… Which verb is in the past?', r: 'The verb shows the past: save → <b>saved</b>, connect → <b>connected</b>. “Last year” alone is not enough.' },
    { a: 'We {didn’t need} a new ERP.', b: 'We {didn’t needed} a new ERP.', q: 'After didn’t: which form?', r: '<b>didn’t</b> is already the past. After it, the simple verb: didn’t <b>need</b>, didn’t <b>save</b>.' },
    { a: 'It {wasn’t} easy.', b: 'It {was don’t} easy.', q: 'It was easy. What is the negative?', r: 'With <b>be</b> in the past: <b>wasn’t / weren’t</b>. No “don’t”, no “didn’t”.' },
    { a: 'We {made} a new calendar.', b: 'We {maked} a new calendar.', q: 'Make in the past?', r: 'Some verbs are different: make → <b>made</b>, have → <b>had</b>, send → <b>sent</b>, begin → <b>began</b>.' }],
  regra: [['BE', 'was · were · wasn’t · weren’t'], ['ACTION + -ED', 'saved · connected · worked'], ['DIFFERENT', 'had · made · sent · began'], ['NEGATIVE', 'didn’t + verb: didn’t need']],
  armas: [['-ED', 'Last year we save 20%.', 'Last year we saved 20%.', 'past → -ed'], ['DIDN’T', 'We didn’t saved money.', 'We didn’t save money.', 'didn’t + simple verb'], ['BE', 'It was don’t easy.', 'It wasn’t easy.', 'be → wasn’t'], ['DIFFERENT', 'We maked a plan.', 'We made a plan.', 'make → made']] };

var TRANSFORMA = { rot: 'THIS YEAR → LAST YEAR', fim: 'Past: -ed, or a different verb (had, made, sent, began). Negative: didn’t + simple verb.', itens: [
  { de: 'Payroll is slow.', pista: 'last year', para: 'Last year, payroll was slow.' },
  { de: 'The reports are late.', pista: 'last month', para: 'Last month, the reports were late.' },
  { de: 'We connect SAP with payroll.', pista: 'in 2025', para: 'In 2025, we connected SAP with payroll.' },
  { de: 'They have forty spreadsheets.', pista: 'last year', para: 'Last year, they had forty spreadsheets.' },
  { de: 'I send the proposal.', pista: 'yesterday', para: 'I sent the proposal yesterday.' },
  { de: 'The client doesn’t need a new ERP.', pista: 'last year', para: 'Last year, the client didn’t need a new ERP.' }] };

var ESCOLHA = [
  { a: 'A story with a number', b: 'A story with a famous client', chips: ['I prefer … because …', 'Last year we saved … · The client was …'], ex: 'I prefer a number because CFOs like numbers. “We saved 20%” is strong.' },
  { a: 'Tell the story in a meeting', b: 'Send the case study by e-mail', chips: ['I prefer … because …', 'Last time, the client … · It was …'], ex: 'I prefer a meeting because last time the client asked a lot of questions. It was a good conversation.' }];
var ESCOLHA_FIM = 'A good story has a past and a number: “Last year we saved…”.';

var CARTAO = { ph: 'Last year, … had a problem: …\nWe began in … We …\nThey didn’t need …\nThe result: they saved …', rot: 'My mini case',
  chips: ['Last year, ', 'The problem was ', 'There were ', 'We began in ', 'We connected ', 'We made ', 'They didn’t need ', 'The result: ', 'they saved ', '% on payroll costs'],
  perg: ['YOUR MINI CASE', 'Three or four sentences about a real project (no secret names): the problem, what you did, the result with a number.'],
  exemploRot: 'CASE CARD · ATLAS MOTORS', exemplo: [['CLIENT', 'Atlas Motors (car parts)'], ['PROBLEM', '40 spreadsheets, late reports'], ['START', 'March 2025'], ['WHAT WE DID', 'connected SAP with payroll'], ['RESULT', '20% savings']],
  modelo: 'Last year, Atlas Motors had a problem: payroll was slow, and there were forty spreadsheets.<br>We began in March. We connected SAP with payroll and made a new calendar.<br>They didn’t need a new ERP.<br>The result: they saved 20% in the first year.' };

var PODE = [
  'I can say what was wrong: It was slow. There were forty spreadsheets.',
  'I can say what we did: we connected, we began, we made, we sent.',
  'I can use didn’t + verb (never “didn’t saved”).',
  'I can tell a mini case in three or four sentences, with a number.'
];
