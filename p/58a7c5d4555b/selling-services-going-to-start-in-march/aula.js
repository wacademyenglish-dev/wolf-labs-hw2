/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 13 · WE’RE GOING TO START IN MARCH · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: going to para planos (be + going to + verbo), negativa e pergunta.
   Armadilhas: “we go to start” (no futuro), “we are going start” (sem to), “going to started”.
   Situação: o plano de implantação (kick-off, mapa do processo, testes, go-live). Produto: o plano de 4 passos.
   Empresas FICTÍCIAS (Bluepeak Services, Brava Foods). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 13, kick: 'SELLING SERVICES · LESSON 13', titulo: ['We’re Going to', 'Start in March'], tema: 'going to: plans', placa: 'LESSON 13',
  lugarConversa: 'THE PROJECT PLAN', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'The client says yes… almost. Now he wants the plan: when you start, what you do, and when the go-live is. Today you explain the plan, step by step.',
  chips: ['The plan e-mail', 'The kick-off call', 'Your 4-step plan'], botao: 'Start the lesson',
  nota: 'A plan: be + going to + verb. We’re going to start. Not “we go to start”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'What are you going to do this week?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 7, img: 'mesa', rot: 'II · The Plan E-mail', t: 'Leo sends the project plan to the client.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 9, img: 'conversa', rot: 'III · “So, What’s the Plan?”', t: 'The client’s project manager asks about the plan.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Going To, Not “Go To”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'ordem', est: 'f', min: 8, img: 'mesa', rot: 'V · Put the Plan in Order', t: 'Five steps, one project.', p: 'Tap the five steps in the right order. Then read the plan out loud.' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your 4-Step Plan', t: 'A plan for a real client, in four steps.', p: 'Kick-off, work, tests, go-live. Then present it out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 13: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'What are you going to do this week?', f: 'Calls, meetings, a proposal?', voce: ['I’m going to …', 'I’m going to visit …'], ex: 'I’m going to visit two clients and send a proposal.' },
  { q: 'Are you going to travel this month?', f: 'Travel: yes or no?', voce: ['Yes, I am. I’m going to …', 'No, I’m not.'], ex: 'Yes, I am. I’m going to Curitiba next Tuesday.' },
  { q: 'Is your team going to have a big meeting soon?', f: 'A big meeting?', voce: ['Yes, it is. It’s going to be on …', 'No, it isn’t.'], ex: 'Yes, it is. It’s going to be on Friday.' },
  { q: 'What are you going to do this weekend?', f: 'Rest, work or travel?', voce: ['I’m going to rest.', 'I’m going to …'], ex: 'I’m going to rest and watch a movie.' }
];

var LEITURA = { rot: 'E-MAIL · THE PROJECT PLAN · BRAVA FOODS (FICTIONAL)', tipo: 'nota',
  antes: { q: 'A client asks for the project plan. What does he want to see?', h: 'The steps and the dates: start, tests, go-live.' },
  texto: 'Hi Tom,\nHere is our plan for the payroll project.\nMARCH: we {are going to start} with a kick-off meeting.\nAPRIL: our team {is going to map} your payroll process, and we {are going to connect} TOTVS with payroll.\nMAY: we {are going to test} two payrolls. Your team {isn’t going to do} extra work.\nJUNE: the go-live!\n{Are} you {going to be} in São Paulo on June 1?\nBest,\nLeo',
  perguntas: [
    { q: 'When is the kick-off meeting?', h: 'In March.' },
    { q: 'What is the Bluepeak team going to do in April?', h: 'They’re going to map the payroll process and connect TOTVS with payroll.' },
    { q: 'What are they going to do in May?', h: 'They’re going to test two payrolls.' },
    { q: 'Is Tom’s team going to do extra work?', h: 'No, it isn’t.' }],
  olha: 'Look at the highlighted words. What comes before “going to” (am, is, are)? What comes after it?' };

var DIALOGO = { rot: 'THE KICK-OFF PLAN · BRAVA FOODS (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A client asks: “So, what’s the plan?” What do you say first?', h: 'First, we’re going to have a kick-off meeting in …' },
  ouvir: 'Listen: when are they going to start? When is the go-live?',
  falas: [
    ['Tom', 'So, Leo, what’s the plan?'],
    ['Leo', 'We’re {going to start} in March, with a kick-off meeting.'],
    ['Tom', 'Who {is going to be} at the kick-off?'],
    ['Leo', 'Sara, my manager, and me. {Is} your CFO {going to come}?'],
    ['Tom', 'Yes, she {is}. And then?'],
    ['Leo', 'In April, our team {is going to map} your payroll process.'],
    ['Tom', '{Are} you {going to change} our TOTVS?'],
    ['Leo', 'No, we {aren’t}. We’re {going to connect} it with payroll.'],
    ['Tom', 'Good. And when is the go-live?'],
    ['Leo', 'On June 1. In May, we’re {going to test} two payrolls.'],
    ['Tom', 'Perfect. I’m {going to tell} my team today.']],
  voz: { Tom: 'en-US-GuyNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'When are they going to start? How?', h: 'In March, with a kick-off meeting.' },
    { q: 'Who is going to be at the kick-off?', h: 'Sara, Leo and Tom’s CFO.' },
    { q: 'Are they going to change TOTVS?', h: 'No, they aren’t. They’re going to connect it with payroll.' },
    { q: 'When is the go-live? What are they going to do before it?', h: 'On June 1. In May, they’re going to test two payrolls.' },
    { q: 'What is Tom going to do today?', h: 'He’s going to tell his team.' }],
  fim: 'I’m / He’s / We’re + going to + verb · We aren’t going to … · Are you going to …?' };

var DESCOBRE = {
  pares: [
    { a: 'We’re {going to start} in March.', b: 'We {go to start} in March.', q: 'A plan for next March. Which one is English?', r: 'A plan for the future: <b>be + going to</b> + verb. “We go to start” is not the future.' },
    { a: 'We’re {going to test} it in May.', b: 'We’re {going test} it in May.', q: 'What is missing?', r: 'Don’t forget <b>to</b>: going <b>to</b> test, going <b>to</b> start.' },
    { a: 'It’s going to {start} on June 1.', b: 'It’s going to {started} on June 1.', q: 'After “going to”: which form?', r: 'After <b>going to</b>: the simple verb (start, test, connect). No -ed: it’s the future!' },
    { a: '{Is} the CFO {going to come}?', b: 'The CFO {go to come}?', q: 'How do we ask?', r: 'Question: <b>Is / Are</b> first: Is she going to…? Are you going to…?' }],
  regra: [['I', 'I’m going to call'], ['HE · SHE · IT', 'it’s going to start'], ['WE · YOU · THEY', 'we’re going to test'], ['NO · ?', 'we aren’t going to · Are you going to…?']],
  armas: [['BE', 'We go to start in March.', 'We’re going to start in March.', 'be + going to'], ['TO', 'We are going start.', 'We are going to start.', 'going to'], ['SIMPLE VERB', 'It’s going to started.', 'It’s going to start.', 'simple verb'], ['QUESTION', 'You going to come?', 'Are you going to come?', 'Are you…?']] };

var ORDEM = { rot: 'THE PROJECT PLAN · BRAVA FOODS (FICTIONAL)', pede: 'Tap the five steps in order.',
  passos: [
    'First, we’re going to have a kick-off meeting on March 3.',
    'Then our team is going to map your payroll process.',
    'In April, we’re going to connect TOTVS with payroll.',
    'In May, we’re going to test two payrolls with your team.',
    'The go-live is going to be on June 1.'],
  chips: ['Kick-off', 'Process map', 'Integration', 'Tests', 'Go-live'],
  modelo: 'First → Then → In April → In May → Go-live. Every step: be + going to + verb.' };

var ESCOLHA = [
  { a: 'Start in January', b: 'Start after Carnival', chips: ['I prefer … because …', 'People are going to … / aren’t going to …'], ex: 'I prefer after Carnival because in January a lot of people are going to be on vacation.' },
  { a: 'A kick-off in person', b: 'A kick-off on video', chips: ['I prefer … because …', 'The team is going to …'], ex: 'I prefer in person because the team is going to meet us. It’s more personal.' },
  { a: 'Change everything in one month', b: 'Change step by step', chips: ['I prefer … because …', 'It’s going to be … · It isn’t going to be …'], ex: 'I prefer step by step because it isn’t going to be stressful for the client’s team.' }];
var ESCOLHA_FIM = 'Plans and reasons: “because they’re going to…”, “because it isn’t going to…”.';

var CARTAO = { ph: 'First, we’re going to …\nThen, we’re going to …\nIn …, we’re going to …\nThe go-live is going to be on …', rot: 'My 4-step plan',
  chips: ['First, ', 'Then, ', 'In April, ', 'we’re going to ', 'have a kick-off meeting', 'map the process', 'connect ', 'test ', 'The go-live is going to be on ', 'We aren’t going to '],
  perg: ['YOUR IMPLEMENTATION PLAN', 'Four steps for a real (or invented) client: kick-off, work, tests, go-live. With months or dates.'],
  exemploRot: 'PROJECT PLAN · BRAVA FOODS', exemplo: [['CLIENT', 'Tom Reed, project manager'], ['KICK-OFF', 'March 3'], ['APRIL', 'process map + TOTVS connection'], ['MAY', 'two test payrolls'], ['GO-LIVE', 'June 1']],
  modelo: 'First, we’re going to have a kick-off meeting in March.<br>Then, in April, we’re going to map the payroll process and connect TOTVS.<br>In May, we’re going to test two payrolls with your team.<br>The go-live is going to be on June 1.' };

var PODE = [
  'I can talk about plans: We’re going to start in March.',
  'I can say the negative and ask: We aren’t going to… Are you going to…?',
  'I can explain a project in steps: kick-off, tests, go-live.',
  'I can write a four-step implementation plan.'
];
