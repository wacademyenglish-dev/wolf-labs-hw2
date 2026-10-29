/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 21 · I’D LIKE TO CONNECT · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: I’d like to… (pedido/convite educado) · Would you like to…? · Yes, I’d love to. / I’d like to, but…
   Armadilhas: “I’d like connect” (sem to), “I like to meet you” (= gosto sempre), “Do you would like…?”, “Yes, I like.”
   Situação: a mensagem no LinkedIn. Cenas: diálogo (a cliente liga depois da mensagem), Focus, erros (mensagem ruim),
   cadeira (o professor é a cliente no chat), escolha, cartão. Produto: 3 mensagens prontas.
   Empresas FICTÍCIAS (Bluepeak, Brightline Retail). LinkedIn citado só como canal.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 21, kick: 'SELLING SERVICES · LESSON 21', titulo: ['I’d Like', 'to Connect'], tema: 'I’d like to… · Would you like to…?', placa: 'LESSON 21',
  lugarConversa: 'THE LINKEDIN MESSAGE', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'A good LinkedIn message is short, polite and has one question. A bad one says “I want to sell you something”. Today you write messages that people answer.',
  chips: ['She calls back', 'Fix the message', 'Your 3 messages'], botao: 'Start the lesson',
  nota: 'Polite: I’d like to connect. Would you like to meet? Not “I want” and not “Do you would like”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · You and LinkedIn', t: 'Do you use LinkedIn for work?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'dialogo', est: 'l', min: 9, img: 'conversa', rot: 'II · She Calls Back', t: 'Leo sent a LinkedIn message. Now the client calls.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'III · I’d Like To, Not “I Like To”', t: 'Two sentences. Which one is right?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'erros', est: 'f', min: 8, img: 'mesa', rot: 'IV · Fix the Message', t: 'A new seller wrote a LinkedIn message. Five mistakes.', p: 'Find a mistake. Say the right form. Then tap it.' },
  { k: 'cadeira', est: 'o', min: 9, img: 'conversa', rot: 'V · The Chat', t: 'Your teacher is a client on LinkedIn. You write first.', p: 'Do each task out loud, like a chat. Invite, offer, and get a call.' },
  { k: 'escolha', est: 'o', min: 6, img: 'mesa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your 3 Messages', t: 'Three LinkedIn messages for a real client.', p: 'Connect, follow up, invite. Then read them out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 21: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'Do you use LinkedIn for work?', f: 'Every day, sometimes, never?', voce: ['Yes, I use it …', 'No, I don’t. I prefer …'], ex: 'Yes, I use it every morning to find new clients.' },
  { q: 'Do clients answer your messages?', f: 'Many, a few, nobody?', voce: ['A few clients answer.', 'Yes, because …'], ex: 'A few. Maybe my messages are too long.' },
  { q: 'What would you like to learn this year?', f: 'For work or for you?', voce: ['I’d like to learn …', 'I’d like to …'], ex: 'I’d like to speak English in meetings, with no fear!' },
  { q: 'Would you like to travel for work?', f: 'Yes or no? Where?', voce: ['Yes, I’d love to. I’d like to go to …', 'No, I wouldn’t.'], ex: 'Yes, I’d love to. I’d like to go to a conference in Chicago.' }
];

var DIALOGO = { rot: 'SHE CALLS BACK · BRIGHTLINE RETAIL (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'You want a meeting with a client. How do you invite her politely?', h: 'Would you like to meet next week?' },
  ouvir: 'Listen: why does Emma call? What does she want first?',
  falas: [
    ['Emma', 'Hi, Leo. It’s Emma Lee, from Brightline. I saw your message on LinkedIn.'],
    ['Leo', 'Hi, Emma! Thanks for calling. {I’d like to} tell you about our payroll service.'],
    ['Emma', 'OK. I have five minutes.'],
    ['Leo', 'Great. We do payroll for twelve retail companies.'],
    ['Emma', 'Interesting. We have a lot of problems with payroll.'],
    ['Leo', '{Would you like to} meet next week? Thirty minutes.'],
    ['Emma', '{I’d like to}, but I’m very busy this month.'],
    ['Leo', 'No problem. {Would you like} a short case study first?'],
    ['Emma', 'Yes, {I’d love to} read it. Please send it today.'],
    ['Leo', 'Sure. And {would you like to} talk again in two weeks?'],
    ['Emma', 'Yes, that’s perfect. Call me on the 15th.']],
  voz: { Emma: 'en-US-AriaNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'Why does Emma call?', h: 'She saw Leo’s message on LinkedIn.' },
    { q: 'What problem does Brightline have?', h: 'A lot of problems with payroll.' },
    { q: 'Does Emma want to meet next week? Why?', h: 'No. She’d like to, but she’s very busy this month.' },
    { q: 'What does Leo offer first?', h: 'A short case study.' },
    { q: 'What is the next step?', h: 'Leo sends the case study today and calls on the 15th.' }],
  fim: 'I’d like to… · Would you like to…? · I’d love to. · I’d like to, but… Polite, short, and always a next step.' };

var DESCOBRE = {
  pares: [
    { a: 'I’d like {to connect} with you.', b: 'I’d like {connect} with you.', q: 'Which one is right?', r: '<b>I’d like + to + verb</b>: I’d like to connect.' },
    { a: '{I’d like to} meet you next week.', b: '{I like to} meet you next week.', q: 'You want a meeting next week. Which one?', r: '<b>I’d like to</b> = I want, now (polite). <b>I like</b> = I always enjoy it.' },
    { a: '{Would you like to} meet?', b: '{Do you would like to} meet?', q: 'Which invitation is right?', r: 'The question starts with <b>Would</b>: Would you like to…? (no “do”).' },
    { a: 'Would you like a case study? {Yes, I’d love to.}', b: 'Would you like a case study? {Yes, I like.}', q: 'Which answer is right?', r: 'Answer: <b>Yes, I’d love to. / Yes, please.</b> · No: <b>I’d like to, but…</b>' }],
  regra: [['I’D LIKE TO', 'I’d like to connect / show you / send you…'], ['INVITE', 'Would you like to meet? Would you like a case study?'], ['YES', 'Yes, I’d love to. · Yes, please.'], ['NO, POLITELY', 'I’d like to, but I’m busy this month.']],
  armas: [['TO', 'I’d like connect.', 'I’d like to connect.', 'like + to'], ['NOW', 'I like to meet you on Monday.', 'I’d like to meet you on Monday.', 'I’d = now'], ['WOULD', 'Do you would like to meet?', 'Would you like to meet?', 'Would you…?'], ['ANSWER', 'Yes, I like.', 'Yes, I’d love to.', 'I’d love to']] };

var ERROS = { rot: 'LINKEDIN · DRAFT MESSAGE FROM A NEW SELLER', tipo: 'chat', rotulo: 'MISTAKES', pede: 'Find the five mistakes. Say the right form, then tap.', fim: 'Five fixed. Now it’s short, polite, and it has one clear question.', dica: 'The student says the right form BEFORE tapping. Ask: now or always? Is there a “to”? Is it polite?', partes: [
  'Hi Emma,\n',
  ['I would like connect with you.', 'I’d like to connect with you.', 'would like + to'], ' I work at Bluepeak Services. We do payroll for retail companies.\n',
  ['I want to sell you our service.', 'I’d like to show you our service.', 'polite: I’d like to'], '\n',
  ['Do you would like to meet next week?', 'Would you like to meet next week?', 'Would you…?'], '\nOr ',
  ['would you like have a 15-minute call?', 'would you like to have a 15-minute call?', 'like + to'], '\n',
  ['I like to send you a case study.', 'I’d like to send you a case study.', 'now → I’d like'], '\nBest,\nLeo'] };

var CADEIRA = { itens: [
  { alvo: 'Write the first message: hello + connect.', dica: 'Hi Emma, I’d like to connect with you. I work with payroll for retail companies.', resp: 'Hi Leo. Sure, connected. What do you do exactly?' },
  { alvo: 'Say what you do in one line. Offer something.', dica: 'We do payroll for retail companies. Would you like a short case study?', resp: 'Yes, please. Is it long?' },
  { alvo: 'Answer. Then invite her to a call.', dica: 'No, it’s one page. Would you like to have a 15-minute call?', resp: 'I’d like to, but I’m busy this week.' },
  { alvo: 'Answer politely. Offer another time.', dica: 'No problem. Would you like to talk next week? Maybe Tuesday at 10 a.m.?', resp: 'Tuesday is OK. But at 11 a.m., please.' },
  { alvo: 'Confirm. Say what you would like to do next.', dica: 'Perfect. I’d like to send you an invite. What’s your e-mail?', resp: 'It’s emma dot lee at brightline dot com.' },
  { alvo: 'Thank her and close the chat.', dica: 'Thank you, Emma! I’d love to hear about your payroll. See you on Tuesday.', resp: 'See you, Leo!' }] };

var ESCOLHA = [
  { a: 'A LinkedIn message', b: 'An e-mail', chips: ['I prefer … because …', 'Clients read / don’t read …'], ex: 'I prefer a LinkedIn message because clients see my photo and my profile.' },
  { a: 'A 3-line message', b: 'A 10-line message', chips: ['I prefer … because …', 'It’s shorter / clearer …'], ex: 'I prefer three lines because people read it on the phone.' },
  { a: 'Ask for a meeting in message 1', b: 'Ask for a meeting in message 3', chips: ['I prefer … because …', 'First I’d like to …'], ex: 'I prefer message 3 because first I’d like to build a connection.' }];
var ESCOLHA_FIM = 'One message, one question. People answer short messages.';

var CARTAO = { ph: '1. Connect: Hi …, I’d like to connect with you. …\n2. Follow up: Thanks for connecting! Would you like …?\n3. Invite: Would you like to have a 15-minute call on …?', rot: 'My 3 messages',
  chips: ['Hi …, I’d like to connect with you.', 'I work with ', 'Thanks for connecting!', 'Would you like a short case study?', 'I’d like to show you ', 'Would you like to have a 15-minute call?', 'on Tuesday at 10 a.m.', 'I’d love to hear about ', 'Best,'],
  perg: ['YOUR 3 MESSAGES', 'For a real prospect: 1. a connection request, 2. a follow-up after “connected”, 3. an invitation for a call. Three lines each, maximum.'],
  exemploRot: 'PROSPECT · BRIGHTLINE RETAIL', exemplo: [['NAME', 'Emma Lee'], ['JOB', 'HR director'], ['PROBLEM', 'payroll errors'], ['OFFER', 'a one-page case study'], ['CALL', 'Tuesday, 11 a.m.']],
  modelo: '1. Hi Emma, I’d like to connect with you. I work with payroll for retail companies.<br>2. Thanks for connecting, Emma! Would you like a short case study? It’s one page.<br>3. Hi Emma, would you like to have a 15-minute call on Tuesday at 11 a.m.? I’d love to hear about your payroll.' };

var PODE = [
  'I can write a polite LinkedIn message: I’d like to connect.',
  'I can invite: Would you like to meet / have a call?',
  'I can say yes or no politely: I’d love to. / I’d like to, but…',
  'I know the difference: I like (always) and I’d like (now).'
];
