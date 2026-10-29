/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 29 · REVIEW: READY FOR THE CLIENT · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js e cliente.js do curso). A1+.
   Revisão das aulas 16–28: small talk (love + -ing), telefone, recado, objeção (but/so), quem decide, LinkedIn (I’d like / Would you like),
   números no slide, have to, will (decisão), perguntas, videochamada, Have you ever…?, it includes / it / them.
   Situação: o follow-up depois da reunião. Formatos: tabuleiro (ESCAPE ROOM “Close the Deal”: 12 casas, uma por aula),
   erros (e-mail de follow-up com 5 erros), escolha. Produto: e-mail curto de follow-up.
   Empresas FICTÍCIAS (Bluepeak Services, Lumen Logistics). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 29, kick: 'SELLING SERVICES · LESSON 29', titulo: ['Ready for', 'the Client'], tema: 'review 16–28', placa: 'LESSON 29',
  lugarConversa: 'THE ESCAPE ROOM', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Twelve squares, twelve challenges from your last lessons. Roll the die, move, and close the deal. Then you write the follow-up e-mail.',
  chips: ['The follow-up call', 'Close the Deal board', 'Your follow-up e-mail'], botao: 'Start the lesson',
  nota: 'Everything in one lesson: small talk, the phone, objections, questions, I’ll, Have you ever…?, it includes.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Two Weeks', t: 'How was your weekend? What do you love doing?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'dialogo', est: 'l', min: 8, img: 'mesa', rot: 'II · The Follow-Up Call', t: 'A week after the meeting, Leo calls Karen, the CFO.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 7, img: 'capa', rot: 'III · Thirteen Lessons, Four Traps', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'conversa', rot: 'IV · Close the Deal', t: 'Twelve squares. Roll, move, do the challenge.', p: 'Your teacher rolls. Do the task out loud. Any good answer counts.' },
  { k: 'erros', est: 'f', min: 7, img: 'mesa', rot: 'V · Fix the Follow-Up', t: 'Leo’s follow-up e-mail has five mistakes.', p: 'Find a mistake. Say the right form. Then tap it.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VI · Your Follow-Up E-mail', t: 'Write a follow-up after a real meeting.', p: 'Thank you, what’s included, one thing you have to do, the next step.' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'VII · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 29: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How was your weekend?', f: 'Great? Quiet? Busy?', voce: ['It was … I …', 'It was great! I …'], ex: 'It was great! I went to the beach with my family.' },
  { q: 'What do you love doing after work?', f: 'Sports? Cooking? Series?', voce: ['I love …ing.', 'I like …ing, but I don’t like …ing.'], ex: 'I love cooking. I don’t like watching TV.' },
  { q: 'Have you ever had a really difficult client?', f: 'Yes or no? What happened?', voce: ['Yes, I have. In …, …', 'No, I haven’t.'], ex: 'Yes, I have! A retail company in 2024. They called every day.' },
  { q: 'What do you have to do this week?', f: 'Proposals? Calls? Visits?', voce: ['I have to …', 'I don’t have to …'], ex: 'I have to send two proposals and call a CFO.' }
];

var DIALOGO = { rot: 'THE FOLLOW-UP CALL · LUMEN LOGISTICS (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A week after a meeting, you call the client. What do you say first?', h: 'Hi …, this is … How was your week? I’m calling about …' },
  ouvir: 'Listen: why is Leo calling? What is the problem? What is the next step?',
  falas: [
    ['Leo', 'Hi Karen, {this is} Leo from Bluepeak. {How was} your weekend?'],
    ['Karen', 'Great, thanks! I {love sailing}, and the weather was perfect.'],
    ['Leo', 'Nice! {I’m calling about} the proposal. Did you read it?'],
    ['Karen', 'Yes, I did. But it’s too expensive for us.'],
    ['Leo', 'I understand. {But} it {includes} the tax reports.'],
    ['Karen', 'So?'],
    ['Leo', '{So} you {don’t have to} hire a new person.'],
    ['Karen', 'Hmm. {Does} it {include} training?'],
    ['Leo', 'Yes, {it does}. Two days for your team.'],
    ['Karen', 'OK. I {have to} talk to our CEO. He signs the contracts.'],
    ['Leo', 'Of course. {Would} he {like} a call with us next week?'],
    ['Karen', 'Good idea. Tuesday at 10 a.m.?'],
    ['Leo', 'Perfect. {I’ll send} an invite today.']],
  voz: { Leo: 'en-US-AndrewNeural', Karen: 'en-US-JennyNeural' },
  perguntas: [
    { q: 'What does Karen love doing?', h: 'Sailing.' },
    { q: 'What is Karen’s problem with the proposal?', h: 'It’s too expensive.' },
    { q: 'What does the price include?', h: 'The tax reports and two days of training.' },
    { q: 'Who signs the contracts?', h: 'The CEO.' },
    { q: 'What is the next step?', h: 'A call with the CEO on Tuesday at 10 a.m. Leo will send an invite today.' }],
  fim: 'Small talk → I’m calling about… → objection (but, so) → it includes → who signs → I’ll…' };

var DESCOBRE = {
  pares: [
    { a: 'I {love sailing}.', b: 'I {love sail}.', q: 'Small talk. Which one is English?', r: 'love / like + <b>-ing</b>: I love sailing, I like cooking.' },
    { a: 'OK, {I’ll send} an invite today.', b: 'OK, {I send} an invite today.', q: 'A decision now. Which one?', r: 'A decision now: <b>I’ll</b> + verb.' },
    { a: '{Have you ever worked} with a BPO?', b: '{You already worked} with a BPO?', q: 'Experience. Which one?', r: '<b>Have you ever</b> + -ed?' },
    { a: 'It {doesn’t include} travel.', b: 'It {don’t include} travel.', q: 'The price = it. Which one?', r: 'It <b>doesn’t</b> include. It include<b>s</b>.' }],
  regra: [['SMALL TALK', 'I love sailing. How was your weekend?'], ['PHONE', 'This is Leo. I’m calling about…'], ['DECIDE · NEED', 'I’ll call. I have to talk to…'], ['THE DEAL', 'Have you ever…? It includes… Would you like…?']],
  armas: [['-ING', 'I love sail.', 'I love sailing.', 'love + -ing'], ['I’LL', 'OK, I send it today.', 'OK, I’ll send it today.', 'I’ll'], ['HAVE TO', 'I have that talk to the CEO.', 'I have to talk to the CEO.', 'have to'], ['IT', 'It don’t include travel.', 'It doesn’t include travel.', 'doesn’t']] };

var TABULEIRO = { rot: 'CLOSE THE DEAL', centro: 'Twelve challenges. One deal at the end.', casas: [
  { k: 'SMALL TALK', t: 'The CFO arrives. Start small talk: two questions.', ex: 'Hi! How was your weekend? Do you like traveling?' },
  { k: 'THE GATEKEEPER', t: 'Call a company. Ask to speak to the CFO.', ex: 'Hi, this is Leo from Bluepeak. Can I speak to Ms. Wells, please? I’m calling about payroll.' },
  { k: 'VOICEMAIL', t: 'Leave a voicemail with your number and a time.', ex: 'Hi, this is Leo from Bluepeak. Please call me back at 11 98765 4321, before 5 p.m. Thank you!' },
  { k: 'TOO EXPENSIVE', t: '“It’s too expensive.” Answer with but or because.', ex: 'I understand. But it includes the tax reports, so you don’t need a new person.' },
  { k: 'WHO SIGNS?', t: 'Find out who decides. Ask two questions.', ex: 'Who signs the contracts? Does your CEO approve the budget?' },
  { k: 'LINKEDIN', t: 'Say a short LinkedIn message to a new contact.', ex: 'Hi Paula, I’d like to connect. I work with payroll for hotels. Would you like to talk next week?' },
  { k: 'THE SLIDE', t: 'Say one number on a slide: from … to …', ex: 'Payroll costs decreased from R$ 80,000 to R$ 60,000 per month.' },
  { k: 'FULL INBOX', t: 'Two e-mails: one urgent, one not. What do you have to do?', ex: 'I have to answer the CFO today. I don’t have to answer the webinar e-mail.' },
  { k: 'NEXT STEP', t: 'No answer for two weeks. Decide now!', ex: 'OK, I’ll call him on Monday.' },
  { k: 'VIDEO CALL', t: 'The client is breaking up. Say it and fix it.', ex: 'Sorry, you’re breaking up. I’m moving to another room. Can you hear me now?' },
  { k: 'EXPERIENCE', t: '“Have you ever worked with a company like us?”', ex: 'Yes, we have. In 2025, we worked with Serra Steel, and they saved 20%.' },
  { k: 'INCLUDED?', t: '“Does the price include training?” Answer and close.', ex: 'Yes, it does. Two days. Would you like to sign this week?' }] };

var ERROS = { rot: 'E-MAIL · FOLLOW-UP (DRAFT)', tipo: 'nota', rotulo: 'MISTAKES', pede: 'Find the five mistakes. Say the right form, then tap.', fim: 'Five fixed. Now write YOUR follow-up e-mail.', dica: 'The student says the right form BEFORE tapping. After each one, ask: which lesson is this from?', partes: [
  'Hi Karen,\nThank you for the call today. ',
  ['I really enjoyed talk with you.', 'I really enjoyed talking with you.', 'enjoy + -ing'], '\n',
  ['As we discussed, the price include the tax reports', 'As we discussed, the price includes the tax reports', 'the price = it → includes'], ' and two days of training. ',
  ['It don’t include travel.', 'It doesn’t include travel.', 'it → doesn’t'], '\n',
  ['I have that talk to Sara about the discount.', 'I have to talk to Sara about the discount.', 'necessary → have to'], '\n',
  ['OK, I send you an invite for Tuesday at 10 a.m.', 'OK, I’ll send you an invite for Tuesday at 10 a.m.', 'a decision → I’ll'], '\nBest,\nLeo'] };

var CARTAO = { ph: 'Hi …,\nThank you for … today. I really enjoyed …\nAs we discussed, the proposal includes … It doesn’t include …\nI have to … I’ll …\nWould you like to …?\nBest,\n…', rot: 'My follow-up e-mail',
  chips: ['Thank you for the call today.', 'I really enjoyed talking with you.', 'As we discussed, ', 'the proposal includes ', 'It doesn’t include ', 'I have to check ', 'I’ll send you ', 'Would you like to ', 'meet our team?', 'Best,'],
  perg: ['YOUR FOLLOW-UP E-MAIL', 'After a real (or invented) meeting: thank you, what the proposal includes, one thing you have to do, the next step.'],
  exemploRot: 'AFTER THE CALL · LUMEN LOGISTICS', exemplo: [['CLIENT', 'Karen Wells, CFO'], ['OBJECTION', 'too expensive'], ['INCLUDED', 'tax reports, training'], ['NEXT STEP', 'call with the CEO, Tuesday 10 a.m.']],
  modelo: 'Hi Karen,<br>Thank you for the call today. I really enjoyed talking with you.<br>As we discussed, the proposal includes the tax reports and two days of training. It doesn’t include travel.<br>I have to talk to Sara about the discount, and I’ll send you an invite for Tuesday at 10 a.m.<br>Would you like me to invite your CEO, too?<br>Best,<br>Leo' };

var ESCOLHA = [
  { a: 'Follow up the same day', b: 'Follow up in two days', chips: ['I prefer … because …', 'The client … · I’ll …'], ex: 'I prefer the same day because the client still remembers the meeting.' },
  { a: 'A follow-up e-mail', b: 'A follow-up WhatsApp message', chips: ['I prefer … because …', 'The CFO has to …'], ex: 'I prefer an e-mail because the CFO has to send it to the CEO.' },
  { a: 'A long, complete e-mail', b: 'A short e-mail with one question', chips: ['I prefer … because …', 'CFOs don’t …'], ex: 'I prefer a short e-mail because CFOs don’t have time.' }];
var ESCOLHA_FIM = 'You’re ready for the client. Next lesson: the final project.';

var PODE = [
  'I can use small talk, the phone and objections in one call.',
  'I can decide and say what is necessary: I’ll… I have to…',
  'I can talk about experience and what a proposal includes.',
  'I can write a follow-up e-mail after a meeting.'
];
