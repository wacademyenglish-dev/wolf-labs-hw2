/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 20 · WHO SIGNS THE CONTRACT? · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ cliente.js do curso). A1.
   Alvo: has / have; perguntas com who / what / where (Who signs…? sem do/does; Where does she work?); cargos
   (CEO, CFO, controller, procurement, IT manager, board).
   Armadilhas: “Who does sign…?”, “She have…”, “Where she works?”, “Does she has…?”.
   Situação: descobrir quem decide. Cenas: página “Our team”, separar DECIDES × INFLUENCES, “who is it?” com áudio,
   Arena IA-09 Mystery Client. Produto: o organograma do cliente em frases.
   Empresas FICTÍCIAS (Bluepeak, Cobalt Home Goods, Fenwick Packaging). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 20, kick: 'SELLING SERVICES · LESSON 20', titulo: ['Who Signs', 'the Contract?'], tema: 'has / have · who, what, where questions · job titles', placa: 'LESSON 20',
  lugarConversa: 'WHO DECIDES?', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'The client loves your proposal. Great! But… does he sign the contract? Today you find the real decision maker, and you ask the right questions to find him or her.',
  chips: ['The “Our team” page', 'Decides or influences?', 'The mystery client'], botao: 'Start the lesson',
  nota: 'Who signs the contract? (no “does”). She has the budget. Where does she work?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Company', t: 'Who signs the contracts at your company?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 7, img: 'mesa', rot: 'II · “Our Team”', t: 'A client’s website: the “Our team” page.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'separa', est: 'f', min: 6, img: 'capa', rot: 'III · Decides or Influences?', t: 'Eight people and facts from the client.', p: 'Does this person decide, or only influence? Say why, then tap.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'IV · “Who Signs?”, Not “Who Does Sign?”', t: 'Two questions. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'multipla', est: 'l', min: 6, img: 'conversa', rot: 'V · Who Is It?', t: 'Six people talk about their job.', p: 'Listen. Who is it? Then say it: “She’s the …”.' },
  { k: 'cliente', est: 'o', min: 10, img: 'conversa', rot: 'VI · The Mystery Client', t: 'A client loves your proposal. But who decides?', p: 'Ask who, what, where and when. Find the decision maker.' },
  { k: 'conta', est: 'w', min: 6, img: 'mesa', rot: 'VII · The Account Board', t: 'Fill in the board of one client.', p: 'A real client (no secret data) or an invented one. Then present it.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VIII · The Client’s Team', t: 'The team of a real client, in sentences.', p: 'Who decides, who influences, who uses. Then present it out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Lesson 20: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'Who signs the contracts at your company?', f: 'The CEO, the director, you?', voce: ['The … signs the contracts.', 'I sign small contracts, and …'], ex: 'The director signs the big contracts. I sign small ones.' },
  { q: 'Who is your boss? What does he or she do?', f: 'Name and job.', voce: ['My boss is … He / She …'], ex: 'My boss is Paula. She manages the sales team.' },
  { q: 'Does your boss have a big team?', f: 'How many people?', voce: ['Yes, she has … people.', 'No, he has a small team.'], ex: 'Yes, she has twelve people.' },
  { q: 'Where does your boss work?', f: 'Same office? Another city?', voce: ['He / She works in …'], ex: 'She works in São Paulo. I work in Campinas.' }
];

var LEITURA = { rot: 'COBALT HOME GOODS · ABOUT US · OUR TEAM (FICTIONAL)', tipo: 'nota',
  antes: { q: 'You visit a client’s website. Who do you look for first?', h: 'The person with the budget, or the person who signs: the CEO or the CFO.' },
  texto: 'OUR TEAM\nCarla Mendes · CEO. Carla {has} twenty years in retail. She {signs} all contracts over $100,000.\nPeter Shaw · CFO. Peter {has} a finance team of thirty people. He {has} the budget for new projects.\nLisa Tran · Controller. Lisa closes the books every month. She {uses} SAP every day.\nOmar Haddad · Procurement Manager. Omar {checks} every proposal and compares the prices.\nJulia Brandt · IT Manager. Julia {works} in our Chicago office. Her team {has} five people.\n{Do you have} a question? Write to us at team@cobalthome.com.',
  perguntas: [
    { q: 'Who signs contracts over $100,000?', h: 'Carla Mendes, the CEO.' },
    { q: 'Who has the budget for new projects?', h: 'Peter Shaw, the CFO.' },
    { q: 'What does Lisa do every day?', h: 'She uses SAP.' },
    { q: 'What does Omar do?', h: 'He checks every proposal and compares the prices.' },
    { q: 'Where does Julia work? How many people does her team have?', h: 'In the Chicago office. Five people.' }],
  olha: 'Look at the highlighted verbs. He, she, her team: has or have? signs or sign? And “Do you have…?”: have or has?' };

var SEPARA = { rot: 'COBALT HOME GOODS · WHO DECIDES?', a: 'DECIDES', b: 'INFLUENCES', fim: 'Talk to everybody. But your proposal is for the person who decides.', itens: [
  ['Carla, the CEO, signs the contract.', 'a', 'She signs, so she decides.'],
  ['Lisa, the controller, uses SAP every day.', 'b', 'She uses the system. Her opinion is important, but she doesn’t sign.'],
  ['Peter, the CFO, has the budget.', 'a', 'The budget is the power to say yes.'],
  ['Omar, from procurement, compares three proposals.', 'b', 'He compares and recommends. He doesn’t sign.'],
  ['Julia, the IT manager, checks the SAP integration.', 'b', 'IT says “OK” for the technology, but the CFO decides.'],
  ['The board approves all projects over $500,000.', 'a', 'The board has the final word on big projects.'],
  ['The payroll team tests the new process.', 'b', 'Users influence: if they don’t like it, the boss hears it.'],
  ['Peter says: “I approve the price.”', 'a', 'Approve the price = decide.']] };

var DESCOBRE = {
  pares: [
    { a: '{Who signs} the contract?', b: '{Who does sign} the contract?', q: 'Which question is right?', r: '<b>Who</b> is the subject: Who signs…? (no do / does).' },
    { a: 'She {has} the budget.', b: 'She {have} the budget.', q: 'He / she: has or have?', r: 'He, she, it: <b>has</b>. I, you, we, they: have.' },
    { a: '{Where does she work}?', b: '{Where she works}?', q: 'Which question is right?', r: 'Where / What + <b>does she</b> + verb?' },
    { a: 'Does she {have} a team?', b: 'Does she {has} a team?', q: 'After does: have or has?', r: 'After <b>does</b>, the simple verb: Does she <b>have</b>…?' }],
  regra: [['WHO = SUBJECT', 'Who signs? Who has the budget? (no do / does)'], ['HAS', 'He / she / it has · I / you / we / they have'], ['WHERE / WHAT', 'Where does she work? What does he do?'], ['DOES + HAVE', 'Does she have…? Yes, she does.']],
  armas: [['WHO', 'Who does decide?', 'Who decides?', 'no does'], ['HAS', 'He have a big team.', 'He has a big team.', 'he → has'], ['WHERE', 'Where he works?', 'Where does he work?', 'does + he'], ['DOES', 'Does she has the budget?', 'Does she have the budget?', 'does + have']] };

var MULTIPLA = { rot: 'WHO IS IT? · LISTEN', fim: 'Job titles open doors: ask “What do you do?” in the first meeting.', itens: [
  { audio: 'job1.mp3', ouve: 'I have the budget for all the finance projects.', q: 'Who is it?', ops: ['The IT manager', 'The CFO', 'The receptionist'], c: 1, por: 'The budget for finance → the CFO.' },
  { audio: 'job2.mp3', ouve: 'I close the books every month, and I check the numbers.', q: 'Who is it?', ops: ['The controller', 'The CEO', 'The procurement manager'], c: 0, por: 'Close the books → the controller.' },
  { audio: 'job3.mp3', ouve: 'I compare prices, and I talk to all the suppliers.', q: 'Who is it?', ops: ['The CFO', 'The payroll coordinator', 'The procurement manager'], c: 2, por: 'Prices and suppliers → procurement.' },
  { audio: 'job4.mp3', ouve: 'I have the final word. I sign the big contracts.', q: 'Who is it?', ops: ['The CEO', 'The controller', 'The IT manager'], c: 0, por: 'The final word → the CEO.' },
  { audio: 'job5.mp3', ouve: 'I check the systems and the integration with SAP.', q: 'Who is it?', ops: ['The procurement manager', 'The IT manager', 'The CFO'], c: 1, por: 'Systems and integration → IT.' },
  { audio: 'job6.mp3', ouve: 'My team and I do the payroll for two thousand people.', q: 'Who is it?', ops: ['The CEO', 'The IT manager', 'The payroll coordinator'], c: 2, por: 'The payroll → the payroll coordinator.' }] };

var CLIENTE = { rot: 'THE MYSTERY CLIENT', codigo: 'IA-09',
  persona: { nome: 'Sam Porter', cargo: '??? (the student finds out)', empresa: 'Fenwick Packaging (fictional)', humor: 'Very friendly and enthusiastic. He talks like the boss, but he doesn’t say his job. He answers only direct questions.', ini: 'SP' },
  missao: 'Sam loves your proposal. But who decides? Find out 5 things about the decision.',
  abre: 'Hi! I love your proposal. We’re very interested!',
  fatos: [
    { k: 'SAM’S JOB', q: 'What do you do at Fenwick?', r: 'I’m the controller.' },
    { k: 'WHO SIGNS', q: 'Who signs the contract?', r: 'Our CFO, Helen Ward.' },
    { k: 'THE BUDGET', q: 'Who has the budget?', r: 'Helen has the budget, too.' },
    { k: 'OTHER PEOPLE', q: 'Who else is in the decision?', r: 'Tom, from procurement. He compares prices.' },
    { k: 'WHEN', q: 'When does Helen decide?', r: 'At the board meeting, in March.' }],
  chips: ['What do you do at Fenwick?', 'Who signs the contract?', 'Who has the budget?', 'Who else is in the decision?', 'When does she decide?', 'Where does she work?'],
  modelo: 'What do you do at Fenwick?<br>Who signs the contract?<br>Who has the budget?<br>Who else is in the decision?<br>When does Helen decide?<br>Can we have a meeting with Helen?',
  fim: 'Mystery solved: Sam influences, Helen decides. Now ask for a meeting with Helen.' };

var ESCOLHA = [
  { a: 'Talk to the CFO first', b: 'Talk to the users first', chips: ['I prefer … because …', 'The CFO has … / The users …'], ex: 'I prefer the users first because they have the real problems. Then the CFO.' },
  { a: 'One contact at the client', b: 'Three contacts at the client', chips: ['I prefer … because …', 'If one person …'], ex: 'I prefer three contacts because if one person leaves, I have two more.' },
  { a: 'Send the proposal to the controller', b: 'Present the proposal to the CFO', chips: ['I prefer … because …', 'The CFO signs / has …'], ex: 'I prefer to present to the CFO because she signs the contract.' }];
var ESCOLHA_FIM = 'Friendly is good. But always ask: “Who signs the contract?”';

var CARTAO = { ph: '… is the …. He / She signs the contract.\n… has the budget.\n… uses … every day.\n… compares …\nNext step: a meeting with …', rot: 'The client’s team',
  chips: [' is the CEO.', ' is the CFO.', ' is the controller.', ' signs the contract.', ' has the budget.', ' uses ', ' every day.', ' compares the proposals.', ' works in ', 'Next step: a meeting with '],
  perg: ['THE CLIENT’S TEAM', 'A real client (or Fenwick Packaging): who decides, who has the budget, who influences, who uses the service. And your next step.'],
  exemploRot: 'ACCOUNT MAP · FENWICK PACKAGING', exemplo: [['SIGNS', 'Helen Ward, CFO'], ['BUDGET', 'Helen Ward'], ['INFLUENCES', 'Sam Porter, controller · Tom, procurement'], ['DECISION', 'board meeting, March'], ['NEXT STEP', 'a meeting with Helen']],
  modelo: 'Helen Ward is the CFO. She signs the contract, and she has the budget.<br>Sam Porter is the controller. He uses SAP every day, and he likes our proposal.<br>Tom is in procurement. He compares the proposals.<br>Helen decides at the board meeting in March.<br>Next step: a meeting with Helen.' };

var PODE = [
  'I can ask who decides: Who signs the contract? Who has the budget?',
  'I can use has and have right: She has the budget.',
  'I can ask what people do and where they work.',
  'I can describe a client’s team: who decides and who influences.'
];

var CONTA = { rot: 'ACCOUNT BOARD',
  campos: [
    { r: 'COMPANY', ph: 'Name and type of company', ex: 'Fenwick Foods, a food company' },
    { r: 'WHO SIGNS', ph: 'The decision maker', ex: 'Helen Ward, the CFO' },
    { r: 'WHO INFLUENCES', ph: 'Other people in the decision', ex: 'Sam (controller), Tom (procurement)' },
    { r: 'THE PROBLEM', ph: 'Their biggest problem', ex: 'Payroll is slow and manual' },
    { r: 'THEIR SYSTEM', ph: 'ERP or spreadsheets', ex: 'TOTVS and spreadsheets' },
    { r: 'NEXT STEP', ph: 'What happens next', ex: 'A meeting with Helen in March' }],
  chips: ['It’s a … company.', 'The decision maker is …', '… has the budget.', '… influences the decision.', 'Their problem is …', 'The next step is …'],
  modelo: 'Fenwick Foods is a food company. The decision maker is Helen Ward, the CFO. Sam, the controller, and Tom, from procurement, influence the decision. Their problem is slow, manual payroll. They use TOTVS and a lot of spreadsheets. The next step is a meeting with Helen in March.' };
