/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 17 · CAN I SPEAK TO MR. DUARTE? · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ cliente.js do curso). A1.
   Alvo: telefone: This is… / I’m calling about… / Can I speak to…? / Could you take a message? / Hold on, please.
   Armadilhas: “Here is Leo” / “I am Leo speaking”, “I’m calling for the proposal”, “Can I talk with…?”, “Can you get a message?”.
   Situação: ligar para o CEO e passar pela assistente (Arena IA-02 The Gatekeeper). Mini-debate: phone or e-mail first?
   EASY READER · CHAPTER 2 de “Leo’s First Big Client”. Produto: o roteiro da ligação fria.
   Empresas FICTÍCIAS (Bluepeak Services, Orla Beverages). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 17, kick: 'SELLING SERVICES · LESSON 17', titulo: ['Can I Speak to', 'Mr. Duarte?'], tema: 'phone calls: This is… · I’m calling about…', placa: 'LESSON 17',
  lugarConversa: 'THE GATEKEEPER', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'You want to speak to the CEO. But first, there is the assistant: polite, busy, and very protective. Today you learn the phone phrases that open the door.',
  chips: ['Easy Reader: chapter 2', 'The gatekeeper', 'Your call script'], botao: 'Start the lesson',
  nota: 'On the phone: “This is Leo.” Not “Here is Leo” or “I am Leo speaking”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Calls', t: 'Who answers the phone at your company?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · Easy Reader: The Gatekeeper', t: 'Leo’s First Big Client · Chapter 2.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'multipla', est: 'l', min: 6, img: 'conversa', rot: 'III · The Assistant Says…', t: 'Six things an assistant says on the phone.', p: 'Listen. Choose the best answer. Then say it out loud.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'IV · “This Is Leo”, Not “Here Is Leo”', t: 'Two sentences. Which one is English on the phone?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'cliente', est: 'o', min: 10, img: 'conversa', rot: 'V · The Gatekeeper', t: 'You call Mr. Duarte. Your teacher is Nina, his assistant.', p: 'Be polite. Find out four things. Leave a message.' },
  { k: 'escolha', est: 'o', min: 6, img: 'mesa', rot: 'VI · Mini-Debate: Phone or E-mail?', t: 'Two sides. Your teacher takes the other side.', p: 'Choose a side. Say “I think … is better because …”. Then answer your teacher.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VII · Your Call Script', t: 'Your script for a real cold call.', p: 'Write it. Then call your teacher and use it.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 17: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'Who answers the phone at your company?', f: 'A receptionist, an assistant, or you?', voce: ['… answers the phone.', 'I answer my phone.'], ex: 'I answer my phone. We don’t have a receptionist.' },
  { q: 'Do you like calling new clients?', f: 'Yes or no?', voce: ['Yes, I like calling …', 'No, I don’t like calling … because …'], ex: 'No, I don’t like calling new clients because they are busy.' },
  { q: 'How many calls do you make a day?', f: 'A few or a lot?', voce: ['About … calls a day.'], ex: 'About ten calls a day.' },
  { q: 'Do you leave messages?', f: 'Messages, yes or no?', voce: ['Yes, I do. I …', 'No, I don’t. I call again.'], ex: 'No, I don’t. I call again in the afternoon.' }
];

var LEITURA = { rot: 'EASY READER · CHAPTER 2 · LEO’S FIRST BIG CLIENT (FICTION)', tipo: 'nota',
  antes: { q: 'Before: in chapter 1, Leo talked in the elevator with a man. He said, “I hate long meetings.” The man was Hugo Duarte, the CEO! Now Leo needs to call him. Is it easy?', h: 'No! CEOs are busy, and their assistants are very protective.' },
  texto: 'THE GATEKEEPER\nAfter the meeting, Mr. Duarte says, “Call me next week, Leo.”\nOn Monday, Leo calls Orla Beverages.\n“Mr. Duarte’s office, Nina speaking.”\n“Hi, {this is} Leo Martins, from Bluepeak. {I’m calling about} our proposal. {Can I speak to} Mr. Duarte, please?”\n“Sorry, he’s in a meeting.”\nOn Tuesday, Leo calls again. “Sorry, he’s on a trip.”\nOn Wednesday: “Sorry, he’s at lunch.”\nOn Thursday, Leo is tired. “OK. {Could you take a message}, please?”\n“Sure. What’s your name again?”\n“Leo Martins. M-A-R-T-I-N-S.”\nNina stops. “Wait. Leo… are you the man from the elevator? The man who hates long meetings?”\nLeo closes his eyes. “Yes. That’s me.”\nNina laughs. “Mr. Duarte talks about you every day. {Hold on, please}.”\nMusic. One minute. Two minutes.\nThen a voice: “Leo! My favorite seller! Can you come on Friday? Bring your best numbers… and a SHORT presentation.”',
  perguntas: [
    { q: 'Who is Nina?', h: 'Mr. Duarte’s assistant.' },
    { q: 'Why can’t Leo speak to Mr. Duarte on Monday, Tuesday and Wednesday?', h: 'He’s in a meeting, on a trip, at lunch.' },
    { q: 'What does Leo ask on Thursday?', h: 'Could you take a message, please?' },
    { q: 'Why does Nina laugh?', h: 'Leo is the man from the elevator. Mr. Duarte talks about him every day.' },
    { q: 'Why is “SHORT” in big letters?', h: 'Because Leo hates long meetings! It’s a joke.' }],
  olha: 'Look at the highlighted phrases. How does Leo say his name on the phone? How does he say the reason for the call? How does he ask for a person?' };

var MULTIPLA = { rot: 'ON THE PHONE · THE ASSISTANT SAYS', fim: 'Polite and short: This is… · I’m calling about… · Could you take a message?', itens: [
  { audio: 'gk1.mp3', ouve: 'Good morning, Orla Beverages. How can I help you?', q: 'Choose the best answer.', ops: ['Here is Leo. I want Mr. Duarte.', 'Hi, this is Leo Martins, from Bluepeak. Can I speak to Mr. Duarte, please?', 'Hello, I am Leo speaking with Mr. Duarte.'], c: 1, por: 'Name: This is… · Person: Can I speak to…?' },
  { audio: 'gk2.mp3', ouve: 'And what is it about?', q: 'Choose the best answer.', ops: ['I’m calling about our proposal.', 'I’m calling for the proposal.', 'Is about proposal.'], c: 0, por: 'The reason: I’m calling about…' },
  { audio: 'gk3.mp3', ouve: 'I’m sorry, he’s in a meeting right now.', q: 'Choose the best answer.', ops: ['OK. Bye.', 'Can you get a message?', 'No problem. Could you take a message, please?'], c: 2, por: 'Could you take a message, please?' },
  { audio: 'gk4.mp3', ouve: 'Sure. What’s your name again?', q: 'Choose the best answer.', ops: ['Leo Martins. M-A-R-T-I-N-S.', 'Here is Leo Martins.', 'My name was Leo.'], c: 0, por: 'Say it and spell it: M-A-R-T-I-N-S.' },
  { audio: 'gk5.mp3', ouve: 'Hold on, please. I’ll check.', q: 'Choose the best answer.', ops: ['Hold on what?', 'Sure, thank you.', 'No, I can’t.'], c: 1, por: 'Hold on = wait on the line. Answer: Sure, thank you.' },
  { audio: 'gk6.mp3', ouve: 'He can call you back this afternoon. Is that OK?', q: 'Choose the best answer.', ops: ['Yes, I call back.', 'Is OK.', 'Yes, perfect. Thank you for your help.'], c: 2, por: 'Close with thanks: Thank you for your help.' }] };

var DESCOBRE = {
  pares: [
    { a: 'Hi, {this is} Leo, from Bluepeak.', b: 'Hi, {here is} Leo, from Bluepeak.', q: 'On the phone, which one is English?', r: 'On the phone, your name: <b>This is Leo</b>. (Not “here is”, not “I am Leo speaking”.)' },
    { a: 'I’m calling {about} the proposal.', b: 'I’m calling {for} the proposal.', q: 'The reason for the call. Which one?', r: 'The reason: <b>I’m calling about…</b>' },
    { a: 'Can I {speak to} Mr. Duarte, please?', b: 'Can I {talk with} Mr. Duarte?', q: 'Which one is better on a business call?', r: 'To ask for a person: <b>Can I speak to…, please?</b>' },
    { a: 'Could you {take} a message, please?', b: 'Could you {get} a message?', q: 'Which verb goes with message?', r: 'The assistant <b>takes</b> a message. You <b>leave</b> a message.' }],
  regra: [['YOUR NAME', 'Hi, this is Leo Martins, from Bluepeak.'], ['THE REASON', 'I’m calling about our proposal.'], ['THE PERSON', 'Can I speak to Mr. Duarte, please?'], ['NOT THERE', 'Could you take a message, please? · I can call back.']],
  armas: [['NAME', 'Here is Leo.', 'This is Leo.', 'this is'], ['WHY', 'I’m calling for the meeting.', 'I’m calling about the meeting.', 'about'], ['WHO', 'Can I talk with Karen?', 'Can I speak to Karen?', 'speak to'], ['MESSAGE', 'Can you get a message?', 'Could you take a message?', 'take a message']] };

var CLIENTE = { rot: 'THE GATEKEEPER', codigo: 'IA-02',
  persona: { nome: 'Nina Cole', cargo: 'executive assistant to the CEO', empresa: 'Orla Beverages (fictional)', humor: 'Polite, busy and very protective. She says “Sorry, he’s busy” first. She helps only polite callers.', ini: 'NC' },
  missao: 'You want to speak to Mr. Duarte. Say who you are and why you are calling. Find out 4 things, and leave a message.',
  abre: 'Mr. Duarte’s office, Nina speaking.',
  fatos: [
    { k: 'WHERE IS HE?', q: 'Can I speak to Mr. Duarte, please?', r: 'Sorry, he’s in a meeting.' },
    { k: 'BEST TIME', q: 'When is a good time to call?', r: 'Tomorrow, at 9 a.m.' },
    { k: 'ANOTHER PERSON', q: 'Is there another person in finance?', r: 'Yes. Rita Gomes, our CFO.' },
    { k: 'THE MESSAGE', q: 'Could you take a message, please?', r: 'Sure. What’s the message?' },
    { k: 'HIS E-MAIL', q: 'Could I have his e-mail, please?', r: 'Sorry, no. Send it to me.' }],
  chips: ['Hi, this is … from Bluepeak.', 'I’m calling about …', 'Can I speak to …, please?', 'When is a good time to call?', 'Could you take a message, please?', 'Thank you for your help.'],
  modelo: 'Hi, this is Leo Martins, from Bluepeak. I’m calling about our proposal.<br>Can I speak to Mr. Duarte, please?<br>When is a good time to call?<br>Is there another person in finance?<br>Could you take a message, please? Please tell him Leo called about the proposal.<br>Thank you for your help, Nina.',
  fim: 'Door open. Nina has your message, and you know the best time to call.' };

var ESCOLHA = [
  { a: 'Call the CEO first', b: 'E-mail the CEO first', chips: ['I think … is better because …', 'I agree, but …', 'I don’t agree because …'], ex: 'I think an e-mail is better because the CEO is busy. He can read it at night.' },
  { a: 'Leave a message', b: 'Call again later', chips: ['I think … is better because …', 'I don’t agree because …'], ex: 'I think a message is better because the assistant can help me.' },
  { a: 'Call on Monday morning', b: 'Call on Friday afternoon', chips: ['I think … is better because …', 'On … people are …'], ex: 'I think Friday afternoon is better because people are more relaxed.' }];
var ESCOLHA_FIM = 'Good debate! There is no right side: a good reason wins.';

var CARTAO = { ph: 'Hi, this is … from …\nI’m calling about …\nCan I speak to …, please?\n(not there) Could you take a message, please?\nWhen is a good time to call?\nThank you for your help.', rot: 'My call script',
  chips: ['Hi, this is ', ' from Bluepeak.', 'I’m calling about ', 'Can I speak to ', ', please?', 'Could you take a message, please?', 'Please tell him / her that ', 'When is a good time to call?', 'My number is ', 'Thank you for your help.'],
  perg: ['YOUR CALL SCRIPT', 'A cold call to a real prospect: your name, the reason, the person, and a plan B (a message) if the person is not there.'],
  exemploRot: 'CALL PLAN · ORLA BEVERAGES', exemplo: [['CALL', 'Hugo Duarte, CEO'], ['ASSISTANT', 'Nina Cole'], ['REASON', 'our payroll proposal'], ['PLAN B', 'a message + call again at 9 a.m.'], ['OTHER CONTACT', 'Rita Gomes, CFO']],
  modelo: 'Hi, this is Leo Martins, from Bluepeak Services.<br>I’m calling about our payroll proposal.<br>Can I speak to Mr. Duarte, please?<br>(Not there?) Could you take a message, please? Please tell him that Leo called about the proposal.<br>When is a good time to call?<br>Thank you for your help.' };

var PODE = [
  'I can say who I am on the phone: This is…',
  'I can say why I am calling: I’m calling about…',
  'I can ask for a person: Can I speak to…, please?',
  'I can leave a message with an assistant.'
];
