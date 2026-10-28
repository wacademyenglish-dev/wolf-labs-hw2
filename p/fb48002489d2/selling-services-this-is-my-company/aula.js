/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 1 · THIS IS MY COMPANY · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Inglês para vendas B2B de serviços (BPO e BTO). Primeiro aluno: executivo comercial A1.
   Alvo: be + isn’t / aren’t / I’m not. A armadilha dele: “it don’t is”, “he don’t is ready”.
   Situação: a primeira mensagem no LinkedIn. Produto: o "About" de 3 frases.
   Empresas FICTÍCIAS (Bluepeak Services, Brava Foods, Lumen Logistics). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 1, kick: 'SELLING SERVICES · LESSON 1', titulo: ['This Is', 'My Company'], tema: 'be: is, isn’t, aren’t', placa: 'LESSON 1',
  lugarConversa: 'MONDAY MORNING', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'You sell services to big companies. Today you say who you are, what your company is, and what it isn’t, on LinkedIn and face to face.',
  chips: ['A LinkedIn message', 'Coffee at an event', 'Your 3-sentence profile'], botao: 'Start the lesson',
  nota: 'In English, “is” has its own negative: isn’t. No “don’t” with is.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'How is your week?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · The LinkedIn Message', t: 'A first message to a new lead.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · Coffee at an Event', t: 'Two people meet at a business event.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Isn’t, Not “Don’t Is”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'transforma', est: 'f', min: 7, img: 'mesa', rot: 'V · Make It Negative', t: 'Say the sentence with not.', p: 'Read the sentence. Say the negative. Then check.' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Profile', t: 'Write your LinkedIn “About”: three sentences.', p: 'You, your company, your clients. Then read it out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'Hi! How is your week?', f: 'Good or busy?', voce: ['It’s good.', 'It’s busy. I have …'], ex: 'It’s busy! I have four meetings this week.' },
  { q: 'Are you at the office today?', f: 'Office or home?', voce: ['Yes, I am.', 'No, I’m not. I’m at home.'], ex: 'No, I’m not. I’m at home today.' },
  { q: 'Is Monday a good day for calls?', f: 'Monday: good or bad?', voce: ['Yes, it is.', 'No, it isn’t. People are busy.'], ex: 'No, it isn’t. On Monday, people are busy.' },
  { q: 'Are your clients big companies?', f: 'Big or small?', voce: ['Yes, they are.', 'They aren’t small. They’re …'], ex: 'Yes, they are. They’re big and mid-size companies.' },
  { q: 'Is coffee important in your job?', f: 'Coffee: yes or no?', voce: ['Yes, it is!', 'No, it isn’t.'], ex: 'Yes, it is! Coffee is very important.' }
];

var LEITURA = { rot: 'LINKEDIN · NEW MESSAGE', tipo: 'chat',
  antes: { q: 'A stranger sends you a message on LinkedIn. What is important in the first message?', h: 'Short and clear: who you are, what your company is, and one question.' },
  texto: 'Leo Martins: Hi, Ms. Costa! I’m Leo, an account executive at Bluepeak Services.\nLeo Martins: We’re a BPO and BTO company. We {aren’t} a software company. We {are} people and technology.\nLeo Martins: Our clients {are} mid-size and large companies. Payroll and tax {are} our strong areas.\nLeo Martins: This {isn’t} a sales pitch. It’s a short hello. {Are} you the right person for finance projects at Brava Foods?\nAna Costa: Hi, Leo. Thank you. I’m {not} the right person. Our CFO is Mr. Duarte. He {isn’t} on LinkedIn, but his e-mail is on our website.',
  perguntas: [
    { q: 'Who is Leo?', h: 'He’s an account executive at Bluepeak Services.' },
    { q: 'What is Bluepeak? What isn’t it?', h: 'It’s a BPO and BTO company. It isn’t a software company.' },
    { q: 'Who are their clients?', h: 'Mid-size and large companies.' },
    { q: 'Is Ana the right person? Who is?', h: 'No, she isn’t. The CFO, Mr. Duarte, is the right person.' }],
  olha: 'Look at the highlighted words. Which are positive (is, are)? Which are negative (isn’t, aren’t, not)? Is there a “don’t”?' };

var DIALOGO = { rot: 'COFFEE AT A BUSINESS EVENT', audio: 'dialogo',
  antes: { q: 'At a business event, what do you say first?', h: 'Hi! I’m … I’m a / an … at …' },
  ouvir: 'Listen: where does Priya work? What is her problem?',
  falas: [
    ['Priya', 'Hi! Are you from Bluepeak?'],
    ['Leo', 'Yes, I {am}. I’m Leo, an account executive.'],
    ['Priya', 'Nice to meet you. I’m Priya. I’m a finance manager at Lumen Logistics.'],
    ['Leo', 'Nice to meet you, Priya. {Is} Lumen a big company?'],
    ['Priya', 'Yes, it {is}. We have two thousand employees. But our finance team {isn’t} big. It’s twelve people.'],
    ['Leo', 'And is payroll inside the company?'],
    ['Priya', 'Yes, and that’s a problem. It {isn’t} fast, and the reports {aren’t} ready on time.'],
    ['Leo', 'I understand. Payroll is our strong area. Here’s my card.'],
    ['Priya', 'Thanks! I’m {not} the decision maker, but my director is open to new ideas.']],
  voz: { Priya: 'en-US-AvaNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'Where does Priya work? What is her job?', h: 'At Lumen Logistics. She’s a finance manager.' },
    { q: 'Is the finance team big?', h: 'No, it isn’t. It’s twelve people.' },
    { q: 'What is the problem with payroll?', h: 'It isn’t fast, and the reports aren’t ready on time.' },
    { q: 'Is Priya the decision maker?', h: 'No, she isn’t. Her director is.' }],
  fim: 'is → isn’t · are → aren’t · I am → I’m not.' };

var DESCOBRE = {
  pares: [
    { a: 'The report {isn’t} ready.', b: 'The report {don’t is} ready.', q: 'Which one is right? Why?', r: '<b>isn’t</b> = is not. With <b>be</b> (am, is, are) the negative is just <b>not</b>. Never “don’t is”.' },
    { a: 'He {isn’t} the decision maker.', b: 'He {don’t is} the decision maker.', q: 'He is… What is the negative?', r: 'he is → he <b>isn’t</b>. Same for she and it.' },
    { a: 'Our clients {aren’t} small.', b: 'Our clients {don’t are} small.', q: 'They are… What is the negative?', r: 'they are → they <b>aren’t</b>. We, you, they: <b>aren’t</b>.' },
    { a: 'I’m {not} at the office today.', b: 'I {don’t am} at the office today.', q: 'I am… What is the negative?', r: 'I am → <b>I’m not</b>. (There is no “amn’t”.)' }],
  regra: [['I', 'I’m · I’m not'], ['HE · SHE · IT', 'it’s · it isn’t'], ['WE · YOU · THEY', 'we’re · they aren’t'], ['QUESTION', 'Is it…? Are they…?']],
  armas: [['IT', 'It don’t is ready.', 'It isn’t ready.', 'be → isn’t'], ['HE', 'He don’t is ready.', 'He isn’t ready.', 'he isn’t'], ['THEY', 'They don’t are big.', 'They aren’t big.', 'they aren’t'], ['I', 'I no am the manager.', 'I’m not the manager.', 'I’m not']] };

var TRANSFORMA = { rot: 'MAKE IT NEGATIVE', fim: 'is → isn’t · are → aren’t · am → ’m not. No “don’t” with be.', itens: [
  { de: 'The CFO is at the office.', pista: 'not', para: 'The CFO isn’t at the office.' },
  { de: 'Our reports are late.', pista: 'not', para: 'Our reports aren’t late.' },
  { de: 'I’m the decision maker.', pista: 'not', para: 'I’m not the decision maker.' },
  { de: 'Payroll is a problem.', pista: 'not', para: 'Payroll isn’t a problem.' },
  { de: 'The systems are new.', pista: 'not', para: 'The systems aren’t new.' },
  { de: 'It’s a software company.', pista: 'not', para: 'It isn’t a software company.' }] };

var ESCOLHA = [
  { a: 'A LinkedIn message', b: 'A phone call', chips: ['I prefer … because …', 'It’s fast. / It’s personal.', 'It isn’t …'], ex: 'I prefer a phone call because it’s personal. A message isn’t personal.' },
  { a: 'A big company', b: 'A mid-size company', chips: ['I prefer … because …', 'They are … / They aren’t …'], ex: 'I prefer a mid-size company because they aren’t slow.' }];
var ESCOLHA_FIM = 'Two choices, two reasons: “because it is…” or “because it isn’t…”.';

var CARTAO = { ph: 'I’m …, an account executive at …\nWe’re a … company. We aren’t …\nOur clients are …', rot: 'My LinkedIn “About”',
  chips: ['I’m ', 'an account executive at ', 'We’re a ', 'BPO and BTO company', 'We aren’t ', 'It isn’t ', 'Our clients are ', 'mid-size and large companies', 'Our strong areas are '],
  perg: ['YOUR LINKEDIN “ABOUT”', 'Three sentences: you, your company (what it is and what it isn’t), your clients.'],
  exemploRot: 'PROFILE CARD', exemplo: [['NAME', 'Leo Martins'], ['JOB', 'account executive'], ['COMPANY', 'Bluepeak Services'], ['IT IS', 'BPO and BTO'], ['IT ISN’T', 'a software company'], ['CLIENTS', 'mid-size and large companies']],
  modelo: 'I’m Leo Martins, an account executive at Bluepeak Services.<br>We’re a BPO and BTO company. We aren’t a software company: we’re people and technology.<br>Our clients are mid-size and large companies.' };

var PODE = [
  'I can say who I am and where I work: I’m …, an account executive at …',
  'I can say what my company is and what it isn’t.',
  'I can use isn’t and aren’t (and never “don’t is”).',
  'I can write a three-sentence LinkedIn profile.'
];
