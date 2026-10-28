/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 6 · WHAT DOES YOUR TEAM DO? · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: present simple na 3ª pessoa: -s (she works, he pays), doesn’t / does + verbo.
   Armadilhas: “she work”, “he don’t send”, “the team don’t use”, “does he pays”.
   Situação: a cliente descreve quem faz o quê no financeiro. Produto: o mapa do processo do cliente.
   Empresas FICTÍCIAS (Atlas Motors). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 6, kick: 'SELLING SERVICES · LESSON 6', titulo: ['What Does', 'Your Team Do?'], tema: 'he works · she doesn’t · does it…?', placa: 'LESSON 6',
  lugarConversa: 'THE PROCESS MAP', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Before you sell, you see who does what. Today a client describes her finance team, and you draw the process map: person, task, system, problem.',
  chips: ['The client’s e-mail', 'Who does what?', 'Your process map'], botao: 'Start the lesson',
  nota: 'He, she, it (and the team): the verb takes an s. In the negative and the question, the s goes to does.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'What does your manager do on Mondays?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · The Client’s E-mail', t: 'A finance manager describes her team.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · Who Does What?', t: 'Leo asks about every person in the team.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · She Works, He Doesn’t', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'transforma', est: 'f', min: 7, img: 'mesa', rot: 'V · I → He, She, It', t: 'The client says “I”. You tell your manager.', p: 'Read the sentence and the clue. Say the new sentence. Then check.' },
  { k: 'escolha', est: 'o', min: 5, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Process Map', t: 'Who does what in your client’s finance team?', p: 'Person, task, system, problem. Then explain it out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'What does your manager do on Mondays?', f: 'Calls? Meetings? Reports?', voce: ['She / He usually …', 'He doesn’t … on Mondays.'], ex: 'She usually checks the numbers. She doesn’t visit clients on Mondays.' },
  { q: 'Who sends the proposals in your team?', f: 'You? Your manager?', voce: ['… sends them.', 'I send them. My manager checks them.'], ex: 'I write them. My manager checks them and sends them.' },
  { q: 'Does your team work on Saturdays?', f: 'Saturday: yes or no?', voce: ['Yes, it does.', 'No, it doesn’t.'], ex: 'No, it doesn’t. But my phone works on Saturdays!' },
  { q: 'What does a good client do?', f: 'Answers fast? Pays on time?', voce: ['A good client …s …', 'A good client doesn’t …'], ex: 'A good client answers e-mails. He doesn’t cancel meetings.' }
];

var LEITURA = { rot: 'E-MAIL · FROM RACHEL KIM, FINANCE MANAGER, ATLAS MOTORS (FICTIONAL)', tipo: 'nota',
  antes: { q: 'A client says: “Our finance team is a mess.” What do you want to know first?', h: 'Who does what: payroll, invoices, the month-end close, tax. And with what system.' },
  texto: 'Hi Leo,\nHere is our finance team, before the call.\nPaula {does} payroll. She {works} with spreadsheets.\nTom {pays} the suppliers. He {doesn’t use} the ERP for this.\nOur accountant, Mr. Reis, {closes} the books every month. It {takes} ten days.\nThe tax team {doesn’t work} here. It {works} in Campinas.\nI {check} everything, and I {don’t have} time!\nBest,\nRachel',
  perguntas: [
    { q: 'Who does payroll? With what?', h: 'Paula does. She works with spreadsheets.' },
    { q: 'Does Tom use the ERP to pay the suppliers?', h: 'No, he doesn’t.' },
    { q: 'How long does the month-end close take?', h: 'It takes ten days.' },
    { q: 'Where does the tax team work?', h: 'In Campinas. It doesn’t work in the same office.' }],
  olha: 'Look at the highlighted verbs. With he, she, it: what letter is at the end? And with I?' };

var DIALOGO = { rot: 'THE CALL · RACHEL KIM, ATLAS MOTORS (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A client says: “Paula does payroll.” What is a good next question?', h: 'Does she use the ERP? / What does she use?' },
  ouvir: 'Listen: what does Tom do? What does Paula do?',
  falas: [
    ['Leo', 'Thanks for the e-mail, Rachel. So, who {does} the invoices?'],
    ['Rachel', 'Tom {does}. He {receives} the invoices and he {pays} the suppliers.'],
    ['Leo', '{Does} he {use} the ERP?'],
    ['Rachel', 'No, he {doesn’t}. He {uses} spreadsheets and e-mail.'],
    ['Leo', 'And Paula? What {does} she {do}?'],
    ['Rachel', 'She {does} payroll for 1,200 people. She {works} late every month.'],
    ['Leo', '{Does} the tax team {talk} with Paula?'],
    ['Rachel', 'Not really. The tax team {doesn’t know} the payroll numbers.'],
    ['Leo', 'I see. And you?'],
    ['Rachel', 'I {check} everything. My director {wants} a report every Monday.'],
    ['Leo', 'OK. Can I draw a process map and send it to you?'],
    ['Rachel', 'Yes, please.']],
  voz: { Leo: 'en-US-AndrewNeural', Rachel: 'en-US-EmmaNeural' },
  perguntas: [
    { q: 'What does Tom do?', h: 'He receives the invoices and pays the suppliers.' },
    { q: 'Does Tom use the ERP?', h: 'No, he doesn’t. He uses spreadsheets and e-mail.' },
    { q: 'What does Paula do?', h: 'She does payroll for 1,200 people. She works late every month.' },
    { q: 'Does the tax team know the payroll numbers?', h: 'No, it doesn’t.' },
    { q: 'What does the director want?', h: 'A report every Monday.' }],
  fim: 'He, she, it: verb + s (works, pays, does). Negative and question: doesn’t / does + verb, no s.' };

var DESCOBRE = {
  pares: [
    { a: 'She {works} with spreadsheets.', b: 'She {work} with spreadsheets.', q: 'She = one person. What is at the end of the verb?', r: 'he, she, it → verb + <b>s</b>: she works, he pays, it takes.' },
    { a: 'He {doesn’t send} the reports.', b: 'He {don’t send} the reports.', q: 'He: don’t or doesn’t?', r: 'he, she, it → <b>doesn’t</b> + verb.' },
    { a: 'The team {doesn’t use} the ERP.', b: 'The team {don’t use} the ERP.', q: 'The team = one group. He, she, it or they?', r: 'The team, the company, the client = <b>it</b> → doesn’t. (In American English, a team is one.)' },
    { a: '{Does} he {pay} the suppliers?', b: '{Does} he {pays} the suppliers?', q: 'After does / doesn’t: verb with s or without?', r: 'Only one s: it goes to <b>does</b>. The verb stays simple: Does he pay…? She doesn’t work.' }],
  regra: [['HE · SHE · IT', 'She works. He pays. It takes ten days.'], ['NEGATIVE', 'He doesn’t send. The team doesn’t use.'], ['QUESTION', 'Does she do payroll? What does he do?'], ['ONE S ONLY', 'does + pay (not “does pays”)']],
  armas: [['SHE', 'She work in tax.', 'She works in tax.', 'she → + s'], ['HE', 'He don’t send the reports.', 'He doesn’t send the reports.', 'he → doesn’t'], ['TEAM', 'The team don’t use the ERP.', 'The team doesn’t use the ERP.', 'team = it'], ['QUESTION', 'Does he pays the suppliers?', 'Does he pay the suppliers?', 'one s only']] };

var TRANSFORMA = { rot: 'THE CLIENT SAYS “I” → YOU SAY “HE / SHE”', fim: 'He, she, it, the team: + s. Negative: doesn’t + verb. Question: Does … + verb?', itens: [
  { de: 'Paula: “I do payroll.”', pista: 'Paula …', para: 'Paula does payroll.' },
  { de: 'Tom: “I pay the suppliers.”', pista: 'Tom …', para: 'Tom pays the suppliers.' },
  { de: 'Rachel: “We don’t use the ERP.”', pista: 'The team …', para: 'The team doesn’t use the ERP.' },
  { de: 'Rachel: “I check the reports every Monday.”', pista: 'Rachel …', para: 'Rachel checks the reports every Monday.' },
  { de: 'Mr. Reis: “I close the books in ten days.”', pista: 'The accountant …', para: 'The accountant closes the books in ten days.' },
  { de: 'You ask Tom: “Do you work with the tax team?”', pista: 'Ask Rachel: Does …?', para: 'Does Tom work with the tax team?' }] };

var ESCOLHA = [
  { a: 'A client with a big finance team', b: 'A client with one person who does everything', chips: ['I prefer … because …', 'She does … · He doesn’t …'], ex: 'I prefer the client with one person, because she does everything and she needs help.' },
  { a: 'Talk to the CFO', b: 'Talk to the person who does the work', chips: ['I prefer … because …', 'The CFO decides … · She knows …'], ex: 'I prefer the person who does the work, because she knows the real problems.' }];
var ESCOLHA_FIM = 'Listen to your reasons: she knows, he decides, it takes. He, she, it + s.';

var CARTAO = { ph: 'Payroll: … does it. She / He uses …\nInvoices: … pays the suppliers. He / She doesn’t …\nThe close: … It takes …\nTax: The tax team works …\nThe problem: …', rot: 'My client’s process map',
  chips: ['… does payroll. ', 'She uses ', 'He pays ', 'the suppliers', 'closes the books', 'doesn’t use ', 'the ERP', 'The tax team works in ', 'The CFO checks ', 'It takes '],
  perg: ['YOUR CLIENT’S PROCESS MAP', 'A real client (no secret names) or Atlas Motors: who does what in finance, what they use, and one problem. Then explain it out loud.'],
  exemploRot: 'PROCESS MAP · ATLAS MOTORS', exemplo: [['PAYROLL', 'Paula · spreadsheets'], ['INVOICES', 'Tom · e-mail'], ['CLOSE', 'Mr. Reis · 10 days'], ['TAX', 'team in Campinas'], ['CHECKS', 'Rachel'], ['PROBLEM', 'no ERP, no connection']],
  modelo: 'Paula does payroll. She uses spreadsheets, and she works late every month.<br>Tom pays the suppliers. He doesn’t use the ERP.<br>Mr. Reis closes the books. It takes ten days.<br>The tax team works in Campinas. It doesn’t know the payroll numbers.' };

var PODE = [
  'I can say who does what: Paula does payroll. Tom pays the suppliers.',
  'I can use he / she / it + s: she works, he pays, it takes.',
  'I can use doesn’t and Does…? (never “he don’t”).',
  'I can explain a client’s process map.'
];
