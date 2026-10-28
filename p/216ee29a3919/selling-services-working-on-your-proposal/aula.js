/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 10 · WE’RE WORKING ON YOUR PROPOSAL. · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: present continuous (agora / esta semana: am / is / are + -ing) × present simple (rotina: every, usually).
   Armadilhas: “we working”, “I am work”, “we are send every month”, “she checks it right now”.
   Situação: atualizar o cliente sobre o status da proposta. Produto: o e-mail de status.
   Empresas FICTÍCIAS (Lumen Logistics). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 10, kick: 'SELLING SERVICES · LESSON 10', titulo: ['We’re Working on', 'Your Proposal.'], tema: 'now (-ing) × routine (simple)', placa: 'LESSON 10',
  lugarConversa: 'THIS WEEK', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'The client is waiting. A good seller says what is happening now, and what always happens. Today you write a status update that calms a client.',
  chips: ['A status e-mail', 'The client calls', 'Your status update'], botao: 'Start the lesson',
  nota: 'Now and this week: am / is / are + -ing. Every week and usually: the simple form.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'What are you working on this week?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · A Status E-mail', t: 'Leo tells a client what is happening.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · “How Is It Going?”', t: 'The client calls for news about the proposal.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Now or Every Week?', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'transforma', est: 'f', min: 7, img: 'mesa', rot: 'V · Routine or Right Now?', t: 'Change the time word. Change the verb.', p: 'Read the sentence and the clue. Say the new sentence. Then check.' },
  { k: 'escolha', est: 'o', min: 5, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Status Update', t: 'Write a status e-mail to a client.', p: 'What you’re doing, what your team is doing, one routine. Then read it.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 10: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'What are you working on this week?', f: 'A proposal? A big client?', voce: ['I’m working on …', 'I’m preparing …'], ex: 'I’m working on two proposals this week.' },
  { q: 'What do you usually do on Friday afternoons?', f: 'Calls? The CRM? Coffee?', voce: ['I usually …', 'I don’t …'], ex: 'I usually update the CRM. I don’t call clients.' },
  { q: 'Are you waiting for an answer from a client?', f: 'Yes or no?', voce: ['Yes, I am. I’m waiting for …', 'No, I’m not.'], ex: 'Yes, I am. I’m waiting for a CFO. He isn’t answering!' },
  { q: 'What is your team doing right now?', f: 'A meeting? Lunch?', voce: ['They’re …ing …', 'I don’t know!'], ex: 'They’re having a meeting right now.' }
];

var LEITURA = { rot: 'E-MAIL · STATUS UPDATE TO KAREN WELLS, LUMEN LOGISTICS (FICTIONAL)', tipo: 'nota',
  antes: { q: 'A client waits for your proposal. She doesn’t have news. How does she feel?', h: 'Worried. A short update every week helps: “We’re working on it.”' },
  texto: 'Hi Karen,\nA quick update on your proposal.\nThis week we{’re working} on the numbers.\nOur payroll team {is checking} your headcount report.\nSara, my manager, {is preparing} the timeline. She{’s talking} with our Oracle team today.\nWe usually {send} a proposal in ten days. Yours is on time.\nWe {aren’t waiting} for anything from you right now.\nAs always, I {send} you an update every Monday.\nBest,\nLeo',
  perguntas: [
    { q: 'What are they working on this week?', h: 'The numbers.' },
    { q: 'What is Sara doing?', h: 'She’s preparing the timeline. She’s talking with the Oracle team today.' },
    { q: 'Are they waiting for anything from Karen?', h: 'No, they aren’t.' },
    { q: 'When does Leo usually send an update?', h: 'Every Monday.' }],
  olha: 'Look at the highlighted verbs. Which are about now or this week? Which are about every week, usually, always?' };

var DIALOGO = { rot: 'THE CLIENT CALLS · KAREN WELLS, LUMEN LOGISTICS (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A client calls: “How is the proposal going?” What is a good first answer?', h: 'Good! We’re working on it right now.' },
  ouvir: 'Listen: what is the team doing now? What does Leo do every Monday?',
  falas: [
    ['Karen', 'Hi, Leo. How is the proposal going?'],
    ['Leo', 'Good! We{’re working} on it right now.'],
    ['Karen', 'Great. {Are} you {using} our headcount report?'],
    ['Leo', 'Yes, we {are}. Our payroll team {is checking} it this week.'],
    ['Karen', 'And the Oracle part?'],
    ['Leo', 'Sara{’s talking} with our Oracle team today.'],
    ['Karen', 'When do you usually send proposals?'],
    ['Leo', 'We usually {send} them in ten days. Yours is on time.'],
    ['Karen', 'Good. Our CEO {is asking} about it every day!'],
    ['Leo', 'I understand. I {send} you an update every Monday. Is that OK?'],
    ['Karen', 'Perfect. Thanks, Leo.']],
  voz: { Karen: 'en-US-JennyNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'What is Leo’s team doing right now?', h: 'They’re working on the proposal.' },
    { q: 'Are they using the headcount report?', h: 'Yes, they are. The payroll team is checking it this week.' },
    { q: 'What is Sara doing today?', h: 'She’s talking with the Oracle team.' },
    { q: 'When do they usually send proposals?', h: 'In ten days.' },
    { q: 'What does Leo do every Monday?', h: 'He sends Karen an update.' }],
  fim: 'Now, today, this week → am / is / are + -ing. Every Monday, usually → present simple.' };

var DESCOBRE = {
  pares: [
    { a: 'We{’re working} on your proposal.', b: 'We {working} on your proposal.', q: 'Now: what is missing in B?', r: 'Now / this week: <b>am / is / are + -ing</b>. Don’t forget be: we’re working.' },
    { a: 'I{’m preparing} the timeline.', b: 'I {am prepare} the timeline.', q: 'After am / is / are: prepare or preparing?', r: 'be + verb<b>-ing</b>: I’m preparing, she’s checking.' },
    { a: 'We {send} a report every month.', b: 'We {are send} a report every month.', q: '“Every month” is a routine. Which one?', r: 'Routine (every month, usually, always): <b>present simple</b>: we send.' },
    { a: 'Sara {is talking} with the IT team now.', b: 'Sara {talks} with the IT team now.', q: '“Now”: which one?', r: 'Now, today, this week: <b>is talking</b>.' }],
  regra: [['NOW · THIS WEEK', 'We’re working on it. She’s checking it.'], ['BE + -ING', 'I’m · she’s · we’re · they’re + working'], ['ROUTINE', 'We send an update every Monday.'], ['THE TEST', 'now → -ing · every / usually → simple']],
  armas: [['BE', 'We working on it.', 'We’re working on it.', 'add be'], ['-ING', 'I am work on the proposal.', 'I’m working on the proposal.', 'be + -ing'], ['ROUTINE', 'We are send it every month.', 'We send it every month.', 'routine → simple'], ['NOW', 'She checks it right now.', 'She’s checking it right now.', 'now → -ing']] };

var TRANSFORMA = { rot: 'ROUTINE ↔ RIGHT NOW', fim: 'now / today / this week → am / is / are + -ing. every / usually → simple.', itens: [
  { de: 'We usually check the numbers.', pista: '… right now', para: 'We’re checking the numbers right now.' },
  { de: 'Sara prepares the timeline.', pista: '… this week', para: 'Sara is preparing the timeline this week.' },
  { de: 'I write the proposal.', pista: '… today', para: 'I’m writing the proposal today.' },
  { de: 'The team doesn’t use Oracle.', pista: '… this week', para: 'The team isn’t using Oracle this week.' },
  { de: 'They’re sending the report now.', pista: '… every Monday', para: 'They send the report every Monday.' },
  { de: 'Do you work on the proposal?', pista: '… now?', para: 'Are you working on the proposal now?' }] };

var ESCOLHA = [
  { a: 'Send an update every week', b: 'Send news only when it’s ready', chips: ['I prefer … because …', 'Clients are waiting · We’re working on …'], ex: 'I prefer every week, because clients are waiting and they want to know.' },
  { a: 'Update by e-mail', b: 'Update by phone', chips: ['I prefer … because …', 'The client is … · It’s …'], ex: 'I prefer a phone call, because the client is waiting and it’s personal.' }];
var ESCOLHA_FIM = 'Your reasons mix both: routine (we send) and now (clients are waiting).';

var CARTAO = { ph: 'Hi …,\nA quick update on …\nThis week we’re …ing …\nOur … team is …ing …\nWe usually … It’s on time.\nBest,\n…', rot: 'My status e-mail',
  chips: ['Hi ', 'A quick update on your proposal.', 'This week we’re working on ', 'Our payroll team is checking ', 'My manager is preparing ', 'We aren’t waiting for anything.', 'We usually send ', 'every Monday', 'It’s on time.', 'Best,'],
  perg: ['YOUR STATUS E-MAIL', 'To a real client (or Lumen Logistics): what you’re doing this week, what your team is doing, one routine, and if it’s on time.'],
  exemploRot: 'STATUS · LUMEN LOGISTICS PROPOSAL', exemplo: [['THIS WEEK', 'the numbers'], ['PAYROLL TEAM', 'checking headcount'], ['SARA', 'preparing the timeline'], ['WAITING FOR', 'nothing'], ['ROUTINE', 'update every Monday'], ['STATUS', 'on time']],
  modelo: 'Hi Karen,<br>A quick update on your proposal.<br>This week we’re working on the numbers, and our payroll team is checking your headcount report. Sara is preparing the timeline.<br>We aren’t waiting for anything from you. It’s on time.<br>As always, I send you an update every Monday.<br>Best,<br>Leo' };

var PODE = [
  'I can say what is happening now: We’re working on … She’s checking …',
  'I can say a routine: We send an update every Monday.',
  'I can choose: now → -ing; every / usually → simple.',
  'I can write a short status e-mail to a client.'
];
