/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 12 · IT’S CHEAPER THAN A NEW TEAM · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: comparativos: -er (cheaper, faster, easier), more + palavra longa (more efficient), better / worse, less, than.
   Armadilhas: “more cheap”, “more better”, “cheaper that”, “efficienter”.
   Situação: o cliente quer montar um time em casa; Leo compara com terceirizar. Produto: a comparação em 3 frases.
   Empresas FICTÍCIAS (Bluepeak Services, Harbor Paper). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 12, kick: 'SELLING SERVICES · LESSON 12', titulo: ['It’s Cheaper', 'Than a New Team'], tema: 'comparatives: cheaper, more efficient, better, than', placa: 'LESSON 12',
  lugarConversa: 'IN-HOUSE OR OUTSOURCE?', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Every client has the same question: “Why not a new team inside the company?” Today you compare: cheaper, faster, more efficient… and honest.',
  chips: ['The proposal page', 'In-house or outsource?', 'Your comparison'], botao: 'Start the lesson',
  nota: 'Short words: -er (cheaper). Long words: more (more efficient). Good → better. And always than.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'Is this week busier than last week?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · The Proposal Page', t: 'Page 2 of a proposal: in-house or Bluepeak?', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · “Why Not a New Team?”', t: 'An HR director wants five new people. Leo compares.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Cheaper, Not “More Cheap”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'multipla', est: 'f', min: 7, img: 'mesa', rot: 'V · Which Word?', t: 'Six lines from proposals.', p: 'Read the line out loud. Choose. Then say why.' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and compare.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Comparison', t: 'In-house or your company? Three sentences.', p: 'Cost, time, quality. One number. Then say it out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 12: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'Is this week busier than last week?', f: 'Busier or quieter?', voce: ['Yes, it’s busier.', 'No, it’s quieter.'], ex: 'Yes, it’s busier. I have more meetings.' },
  { q: 'What is faster for you: e-mail or WhatsApp?', f: 'E-mail or WhatsApp?', voce: ['WhatsApp is faster than e-mail.', 'E-mail is better for …'], ex: 'WhatsApp is faster, but e-mail is better for proposals.' },
  { q: 'Is your office bigger than your home?', f: 'Bigger or smaller?', voce: ['Yes, it’s bigger.', 'No, it’s smaller.'], ex: 'Yes, it’s bigger, but my home is quieter!' },
  { q: 'Are big clients easier than small clients?', f: 'Easier or more difficult?', voce: ['They’re easier because …', 'They’re more difficult because …'], ex: 'They’re more difficult because there are more people in the decision.' }
];

var LEITURA = { rot: 'PROPOSAL · PAGE 2 · IN-HOUSE OR BLUEPEAK? (FICTIONAL)', tipo: 'nota',
  antes: { q: 'A client wants to do payroll inside the company. What does he compare?', h: 'The cost, the time to start, and the quality.' },
  texto: 'OPTION A · IN-HOUSE: A NEW PAYROLL TEAM\nFive new people, a new system, six months to start.\nOPTION B · BLUEPEAK SERVICES\nIt’s {cheaper than} a new team: about 30% {less} per year.\nIt’s {faster}: we start in eight weeks.\nOur process is {more efficient}, and our reports are {more accurate than} spreadsheets.\nIs Option B {better} for every company? No. For a very small team, in-house is {easier}.',
  perguntas: [
    { q: 'What is Option A?', h: 'A new payroll team: five people, a new system, six months to start.' },
    { q: 'How much cheaper is Bluepeak?', h: 'About 30% less per year.' },
    { q: 'Which option is faster? Why?', h: 'Bluepeak. It starts in eight weeks, not six months.' },
    { q: 'Is Bluepeak better for every company?', h: 'No. For a very small team, in-house is easier.' }],
  olha: 'Look at the highlighted words. Short words: -er (cheaper, faster). Long words: more … And “good”?' };

var DIALOGO = { rot: 'IN-HOUSE OR OUTSOURCE? · HARBOR PAPER (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A client says: “We want a new team, not a BPO.” What do you say?', h: 'I understand. But a BPO is cheaper and faster than a new team.' },
  ouvir: 'Listen: what is Rachel’s idea? What is better about Bluepeak, for Leo?',
  falas: [
    ['Rachel', 'Leo, our idea is a new payroll team. Five people.'],
    ['Leo', 'I understand. But a BPO is {cheaper than} a new team.'],
    ['Rachel', 'Really? How much {cheaper}?'],
    ['Leo', 'About 30% {less} per year. And it’s {faster}. We start in eight weeks.'],
    ['Rachel', 'But a team inside the company is {easier} to control.'],
    ['Leo', 'That’s true. But our process is {more efficient}. We use automation.'],
    ['Rachel', 'And the quality? Is it {better}?'],
    ['Leo', 'Yes. Our reports are {more accurate than} spreadsheets.'],
    ['Rachel', 'Is it {more expensive} in the first year?'],
    ['Leo', 'No. The first year is {less expensive}, too.'],
    ['Rachel', 'OK. Send me the numbers, and I can talk to the CFO.']],
  voz: { Rachel: 'en-US-AriaNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'What is Rachel’s idea?', h: 'A new payroll team inside the company: five people.' },
    { q: 'How much cheaper is a BPO?', h: 'About 30% less per year.' },
    { q: 'What is better about a team inside, for Rachel?', h: 'It’s easier to control.' },
    { q: 'Why is Bluepeak more efficient?', h: 'Because they use automation.' },
    { q: 'What is the next step?', h: 'Leo sends the numbers, and Rachel talks to the CFO.' }],
  fim: 'cheap → cheaper · efficient → more efficient · good → better · … than …' };

var DESCOBRE = {
  pares: [
    { a: 'It’s {cheaper} than a new team.', b: 'It’s {more cheap} than a new team.', q: 'Which one is right? Why?', r: 'Short words: + <b>-er</b>. cheap → <b>cheaper</b>, fast → <b>faster</b>, easy → <b>easier</b>. No “more”.' },
    { a: 'Our process is {more efficient}.', b: 'Our process is {efficienter}.', q: 'Efficient is a long word. What do we do?', r: 'Long words: <b>more</b> + word. more efficient, more expensive, more accurate.' },
    { a: 'Our reports are {better}.', b: 'Our reports are {more better}.', q: 'Good… What is the comparative?', r: 'good → <b>better</b> · bad → <b>worse</b>. They are already comparatives: never “more better”.' },
    { a: 'A BPO is cheaper {than} a new team.', b: 'A BPO is cheaper {that} a new team.', q: 'Which word connects the two things?', r: 'Compare with <b>than</b>. Not “that”, not “of”.' }],
  regra: [['SHORT', 'cheap → cheaper · fast → faster · easy → easier'], ['LONG', 'more efficient · more expensive'], ['DIFFERENT', 'good → better · bad → worse'], ['COMPARE', '… than … · 30% less']],
  armas: [['SHORT', 'It’s more cheap.', 'It’s cheaper.', 'short → -er'], ['GOOD', 'It’s more better.', 'It’s better.', 'better alone'], ['THAN', 'cheaper that a team', 'cheaper than a team', 'than'], ['LONG', 'It’s efficienter.', 'It’s more efficient.', 'long → more']] };

var MULTIPLA = { rot: 'PROPOSAL LINES · WHICH WORD?', fim: 'Short word → -er. Long word → more. Good → better. Bad → worse. Always than.', itens: [
  { txt: 'A BPO is ___ than a new team.', q: 'Choose the right word.', ops: ['cheaper', 'more cheap'], c: 0, por: 'cheap is short → cheaper.' },
  { txt: 'Our process is ___ than spreadsheets.', q: 'Choose the right word.', ops: ['efficienter', 'more efficient'], c: 1, por: 'efficient is long → more efficient.' },
  { txt: 'The new system is ___ than the old one.', q: 'Choose the right word.', ops: ['better', 'more better'], c: 0, por: 'good → better. No “more”.' },
  { txt: 'Outsourcing is faster ___ in-house.', q: 'Choose the right word.', ops: ['that', 'than'], c: 1, por: 'Compare with than.' },
  { txt: 'Spreadsheets are ___ than automation.', q: 'Choose the right word.', ops: ['worse', 'badder'], c: 0, por: 'bad → worse.' },
  { txt: 'It costs about 30% ___ per year.', q: 'Choose the right word.', ops: ['less', 'lesser'], c: 0, por: 'less = a smaller amount: 30% less.' }] };

var ESCOLHA = [
  { a: 'A cheaper service', b: 'A faster service', chips: ['I prefer … because …', '… is more important than …'], ex: 'I prefer a faster service because time is more important than money for my clients.' },
  { a: 'A big client', b: 'A small client', chips: ['I prefer … because …', 'It’s bigger / easier / faster …'], ex: 'I prefer a big client because the contract is bigger. But a small client is faster.' },
  { a: 'Work at the office', b: 'Work from home', chips: ['I prefer … because …', 'It’s quieter / better / more …'], ex: 'I prefer home because it’s quieter than the office.' }];
var ESCOLHA_FIM = 'Good reasons compare: “… is cheaper than …”, “… is more … than …”.';

var CARTAO = { ph: 'Our service is … cheaper than …\nIt’s faster: …\nOur … is more … than …', rot: 'My comparison',
  chips: ['Our service is ', 'cheaper than ', 'faster than ', 'more efficient than ', 'better than ', 'about 30% less ', 'a new team', 'spreadsheets', 'in-house', 'It’s easier to '],
  perg: ['IN-HOUSE OR YOUR COMPANY?', 'Three sentences for a real client: compare your service with a new team (or with spreadsheets). Cost, time, quality, and one number.'],
  exemploRot: 'COMPARISON · HARBOR PAPER', exemplo: [['CLIENT', 'Rachel Moore, HR director'], ['IN-HOUSE', '5 people, 6 months to start'], ['BLUEPEAK', '8 weeks to start'], ['COST', 'about 30% less per year'], ['QUALITY', 'automation, no spreadsheets']],
  modelo: 'Our service is about 30% cheaper than a new payroll team.<br>It’s faster: we start in eight weeks, not six months.<br>And our process is more efficient than spreadsheets because we use automation.' };

var PODE = [
  'I can compare with -er: cheaper, faster, easier than …',
  'I can use more with long words: more efficient, more expensive.',
  'I can say better and worse (never “more better”).',
  'I can compare in-house and my service in three sentences.'
];
