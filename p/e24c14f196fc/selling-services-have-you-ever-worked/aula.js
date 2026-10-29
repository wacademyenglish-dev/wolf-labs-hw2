/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 27 · HAVE YOU EVER WORKED WITH SAP? · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js e cliente.js do curso). A1+.
   Alvo: Have you ever…? / Yes, we have. / No, I haven’t. / We’ve never… (present perfect SÓ para experiência, leve)
   + com tempo (in 2024, last year) volta o passado: We worked with them in 2024.
   Armadilhas: “You already worked with SAP?”, “Have you ever work…?”, “Yes, I do.” para Have you…?, “We have worked with them in 2024”.
   Situação: o cliente pergunta sobre a experiência da empresa. Formatos: portas (6 portas Have you ever…? como aquecimento),
   múltipla, cartão ANTES do cliente, cliente IA-03 Objection Gym leve. Produto: 3 frases de experiência.
   Empresas FICTÍCIAS (Bluepeak Services, Oakridge Paper, Serra Steel). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 27, kick: 'SELLING SERVICES · LESSON 27', titulo: ['Have You Ever', 'Worked with SAP?'], tema: 'Have you ever…? · experience', placa: 'LESSON 27',
  lugarConversa: 'THE EXPERIENCE QUESTION', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Every client asks it: “Have you ever worked with a company like us?” Today you answer with experience, a real example and a smile.',
  chips: ['Six doors', 'The tough client', 'Your 3 experience lines'], botao: 'Start the lesson',
  nota: 'Experience, no time: Have you ever worked…? Yes, we have. With a time: We worked with them in 2024.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'portas', est: 'o', min: 9, img: 'conversa', rot: 'I · Six Doors', t: 'Six questions about you and your work. Pick a door.', p: 'Answer: Yes, I have / No, I haven’t + one detail. Then ask: “And you?”' },
  { k: 'dialogo', est: 'l', min: 8, img: 'mesa', rot: 'II · “Have You Worked with a Company Like Us?”', t: 'Nora, a controller, asks Leo about his experience.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 8, img: 'capa', rot: 'III · Have You Ever…?', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'multipla', est: 'f', min: 6, img: 'mesa', rot: 'IV · Yes, We Have or Yes, We Did?', t: 'Six client questions and answers.', p: 'Choose the right word. Then read the sentence out loud.' },
  { k: 'cartao', est: 'w', min: 7, img: 'capa', rot: 'V · Your 3 Experience Lines', t: 'Three sentences about your company’s experience.', p: 'Write them now. You use them in the next scene!' },
  { k: 'cliente', est: 'o', min: 12, img: 'conversa', rot: 'VI · The Tough Client', t: 'Victor, a CFO, has doubts. Your teacher is Victor.', p: 'Find his four doubts. Answer each one with your experience.' },
  { k: 'escolha', est: 'o', min: 6, img: 'mesa', rot: 'VII · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 27: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'TRAVEL', tema: 'experience', t: 'Have you ever traveled for work?', ex: 'Yes, I have. I traveled to Chicago for a fair in 2024.', trap: 'Yes, I have + a detail with a time (traveled in 2024)' },
  { k: 'SYSTEMS', tema: 'experience', t: 'Have you ever used SAP, Oracle or TOTVS?', ex: 'Yes, I have. I’ve used TOTVS for five years.', trap: 'have used, not have use' },
  { k: 'A BIG DEAL', tema: 'experience', t: 'Have you ever closed a really big deal?', ex: 'Yes, I have! I closed a contract with a steel company last year.', trap: 'Yes, I have → then the past with a time' },
  { k: 'IN ENGLISH', tema: 'experience', t: 'Have you ever presented in English?', ex: 'No, I haven’t. But I’m going to present in March!', trap: 'No, I haven’t (not “No, I didn’t”)' },
  { k: 'A FAIR', tema: 'experience', t: 'Have you ever been to a business fair?', ex: 'Yes, I have. I’ve been to a big fair in São Paulo.', trap: 'been, not “gone” or “went”' },
  { k: 'NEVER', tema: 'experience', t: 'Something you have never done at work, but want to do.', ex: 'I’ve never visited a client in another country, but I want to!', trap: 'I’ve never + -ed' }];

var DIALOGO = { rot: 'THE EXPERIENCE QUESTION · OAKRIDGE PAPER (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A client asks: “Have you ever worked with a paper company?” What do you say?', h: 'Yes, we have. We worked with … in 2025. / No, we haven’t, but …' },
  ouvir: 'Listen: what experience does Bluepeak have? Why is Nora nervous?',
  falas: [
    ['Nora', 'Leo, {have} you {ever worked} with a paper company?'],
    ['Leo', 'Yes, {we have}. We worked with two in 2025.'],
    ['Nora', 'Good. {Have} you {ever used} SAP for payroll?'],
    ['Leo', 'Yes, many times. Most of our clients use SAP.'],
    ['Nora', 'And {have} you {ever had} a client with four factories?'],
    ['Leo', 'Yes, we have. Serra Steel has five factories.'],
    ['Nora', 'OK. {Have} you {ever lost} a client?'],
    ['Leo', 'Yes, one, in 2023. We were slow. We learned a lot.'],
    ['Nora', 'I like that. An honest answer.'],
    ['Leo', 'And you? {Have} you {ever worked} with a BPO?'],
    ['Nora', 'No, {I haven’t}. That’s why I’m nervous!'],
    ['Leo', 'That’s normal. Can I send you a case study?']],
  voz: { Nora: 'en-US-AvaNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'Has Bluepeak worked with paper companies?', h: 'Yes, it has. It worked with two in 2025.' },
    { q: 'Have they used SAP for payroll?', h: 'Yes, many times. Most of their clients use SAP.' },
    { q: 'Have they ever lost a client? When? Why?', h: 'Yes, one, in 2023. They were slow.' },
    { q: 'Has Nora ever worked with a BPO? How does she feel?', h: 'No, she hasn’t. She’s nervous.' },
    { q: 'What does Leo want to send?', h: 'A case study.' }],
  fim: 'Experience: Have you ever…? Yes, we have. / No, I haven’t. With a time (in 2025): We worked…' };

var DESCOBRE = {
  pares: [
    { a: '{Have you ever worked} with SAP?', b: '{You already worked} with SAP?', q: 'Experience in your life. Which question is English?', r: 'Experience: <b>Have you ever</b> + -ed? Not “You already worked?”.' },
    { a: 'Have you ever {worked} with a BPO?', b: 'Have you ever {work} with a BPO?', q: 'After have: which form?', r: 'have + <b>-ed</b>: worked, used, visited. Some are different: been, had, lost.' },
    { a: 'Have you ever used Oracle? — Yes, {I have}.', b: 'Have you ever used Oracle? — Yes, {I do}.', q: 'How do we answer?', r: 'Answer with the same helper: Yes, I <b>have</b>. / No, I <b>haven’t</b>.' },
    { a: 'We {worked} with them in 2024.', b: 'We {have worked} with them in 2024.', q: 'With a year (2024): which one?', r: 'A time (in 2024, last year) → the past: <b>We worked</b>. No time → <b>We’ve worked</b>.' }],
  regra: [['QUESTION', 'Have you ever worked with SAP?'], ['ANSWER', 'Yes, we have. · No, I haven’t.'], ['NEVER', 'We’ve never had a late payroll.'], ['WITH A TIME', 'We worked with them in 2024.']],
  armas: [['HAVE YOU', 'You already worked with SAP?', 'Have you ever worked with SAP?', 'Have you ever…?'], ['-ED', 'Have you ever use Oracle?', 'Have you ever used Oracle?', 'have + -ed'], ['ANSWER', 'Have you…? Yes, I do.', 'Have you…? Yes, I have.', 'Yes, I have'], ['A TIME', 'We have worked with them in 2024.', 'We worked with them in 2024.', 'time → past']] };

var MULTIPLA = { rot: 'CLIENT QUESTIONS · WHICH WORD?', fim: 'Have you ever…? → Yes, we have / No, I haven’t. With a time → the past.', itens: [
  { txt: 'Have you ever worked with a retail company? — Yes, we ___.', q: 'Choose the right word.', ops: ['did', 'have'], c: 1, por: 'Have you…? → Yes, we have.' },
  { txt: 'Have you ever ___ a client with ten factories?', q: 'Choose the right word.', ops: ['had', 'have'], c: 0, por: 'have + had (have → had).' },
  { txt: 'We ___ with Brava Foods in 2025.', q: 'Choose the right word.', ops: ['have worked', 'worked'], c: 1, por: 'in 2025 = a time → worked.' },
  { txt: '___ you ever used TOTVS?', q: 'Choose the right word.', ops: ['Have', 'Do'], c: 0, por: 'Experience: Have you ever used…?' },
  { txt: 'We’ve ___ lost a payroll. Never!', q: 'Choose the right word.', ops: ['ever', 'never'], c: 1, por: 'have + never: We’ve never lost a payroll.' },
  { txt: 'Have you ever been to our office? — No, I ___.', q: 'Choose the right word.', ops: ['didn’t', 'haven’t'], c: 1, por: 'Have you…? → No, I haven’t.' }] };

var CARTAO = { ph: 'We’ve worked with …\nWe’ve used … / We’ve never …\nIn …, we worked with …, and they saved …', rot: 'My 3 experience lines',
  chips: ['We’ve worked with ', 'companies like you.', 'We’ve used ', 'for many years.', 'We’ve never ', 'had a late payroll.', 'In 2025, we worked with ', 'and they saved ', 'Have you ever worked with ', 'a BPO?'],
  perg: ['YOUR EXPERIENCE LINES', 'Three sentences about your company’s real experience: clients, systems, one result with a year. You use them in the next scene!'],
  exemploRot: 'BLUEPEAK · EXPERIENCE', exemplo: [['CLIENTS', '40 companies · 6 paper companies'], ['SYSTEMS', 'SAP, Oracle, TOTVS'], ['NEVER', 'a late payroll'], ['RESULT', 'Serra Steel, 2025: 20% saved']],
  modelo: 'We’ve worked with forty companies, and six of them are paper companies.<br>We’ve used SAP, Oracle and TOTVS, and we’ve never had a late payroll.<br>In 2025, we worked with Serra Steel, and they saved 20%.' };

var CLIENTE = { rot: 'OBJECTION GYM', codigo: 'IA-03',
  persona: { nome: 'Victor Hale', cargo: 'CFO', empresa: 'Oakridge Paper (fictional)', humor: 'Polite but doubtful. He asks “Have you ever…?” and waits for an example.', ini: 'VH' },
  missao: 'Victor has 4 doubts and 1 request. Ask “What worries you?” and answer each doubt with your experience.',
  abre: 'Hello, Leo. I read your proposal. Honestly? I have some doubts.',
  fatos: [
    { k: 'COMPANIES LIKE US', q: 'What worries you? → Yes, we have. We’ve worked with…', r: 'Have you ever worked with a paper company?' },
    { k: 'SYSTEMS', q: 'Any other doubt? → Yes, we have. We’ve used…', r: 'Have you ever used SAP for payroll?' },
    { k: 'BIG TEAMS', q: 'Anything else? → Yes. In 2025, we…', r: 'Have you ever had a client with 3,000 people?' },
    { k: 'PROBLEMS', q: 'Is there one more? → Honestly, yes. Once, in 2023…', r: 'Have you ever had a late go-live?' },
    { k: 'A REFERENCE', q: 'How can I help? → Of course. You can talk to…', r: 'Can I talk to one of your clients?' }],
  chips: ['What worries you?', 'Any other doubt?', 'Yes, we have. We’ve …', 'No, we haven’t, but …', 'In 2025, we worked with …', 'Have you ever worked with a BPO?'],
  modelo: 'What worries you? → Yes, we have. We’ve worked with six paper companies.<br>Any other doubt? → Yes, we’ve used SAP for payroll for ten years.<br>Anything else? → Yes. In 2025, we worked with a company with 3,000 people.<br>One more? → Honestly, yes. Once, in 2023. We learned a lot.<br>A reference? → Of course. You can talk to Serra Steel.',
  fim: 'Four honest answers. Victor says: “OK, Leo. I’m less worried now. Send me the case study.”' };

var ESCOLHA = [
  { a: 'Say “No, we haven’t” honestly', b: 'Change the subject', chips: ['I prefer … because …', 'We’ve … · We’ve never …'], ex: 'I prefer honest because the client will find out. Honesty sells!' },
  { a: 'A case study by e-mail', b: 'A call with a real client', chips: ['I prefer … because …', 'The CFO can …'], ex: 'I prefer a call with a real client because the CFO can ask questions.' },
  { a: 'Many small clients on your website', b: 'Three famous clients on your website', chips: ['I prefer … because …', 'CFOs know …'], ex: 'I prefer three famous clients because CFOs know the names.' }];
var ESCOLHA_FIM = 'Experience sells, and honest experience sells more.';

var PODE = [
  'I can ask about experience: Have you ever worked with…?',
  'I can answer: Yes, we have. / No, we haven’t, but…',
  'I can use a time with the past: We worked with them in 2025.',
  'I can answer a client’s doubts with real experience.'
];
