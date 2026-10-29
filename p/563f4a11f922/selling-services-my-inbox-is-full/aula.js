/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 23 · MY INBOX IS FULL · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js e cliente.js do curso). A1+.
   Alvo: need to / have to / don’t have to (+ has to na 3ª pessoa; Do I have to…?).
   Armadilhas: “I need send” (sem to), “I have that call” (ter que), “she have to”, “you have not to come”.
   Situação: segunda-feira, 40 e-mails; o que é urgente e o que pode esperar. Formatos: ordem (6 e-mails por urgência),
   debate leve (telefone × e-mail), erros (resposta com 4 erros), EASY READER · CHAPTER 5 de “Leo’s First Big Client”.
   Produto: 2 respostas curtas de e-mail. Empresas FICTÍCIAS (Bluepeak Services, Orla Beverages, Costa Retail).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 23, kick: 'SELLING SERVICES · LESSON 23', titulo: ['My Inbox', 'Is Full'], tema: 'need to · have to · don’t have to', placa: 'LESSON 23',
  lugarConversa: 'MONDAY MORNING', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Monday, 8 a.m. Forty new e-mails. You can’t answer everything at once. Today you decide what you have to do now, and what can wait.',
  chips: ['Six e-mails in order', 'Easy Reader: chapter 5', 'Your two replies'], botao: 'Start the lesson',
  nota: 'Necessary: I have to / I need to + verb. She has to. Not necessary: you don’t have to.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Inbox', t: 'How many e-mails do you get every day?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'dialogo', est: 'l', min: 7, img: 'mesa', rot: 'II · “Forty E-mails, Sara!”', t: 'Monday, 8 a.m. Leo and Sara look at his inbox.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 8, img: 'capa', rot: 'III · Need To, Not “Need Send”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'ordem', est: 'f', min: 7, img: 'mesa', rot: 'IV · Six E-mails in Order', t: 'Six e-mails. Which one first?', p: 'Tap them from most urgent to least urgent. Then say your plan out loud.' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'V · The Debate: Phone or E-mail?', t: 'Three small debates for busy sellers.', p: 'Choose a side and say why. Your teacher takes the other side.' },
  { k: 'leitura', est: 'l', min: 7, img: 'mesa', rot: 'VI · Easy Reader: We Have to Talk', t: 'Leo’s First Big Client · Chapter 5.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'erros', est: 'f', min: 6, img: 'capa', rot: 'VII · Fix the Reply', t: 'Leo’s reply has four mistakes.', p: 'Find a mistake. Say the right form. Then tap it.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VIII · Your Two Replies', t: 'Two real e-mails: one urgent, one that can wait.', p: 'Write two short replies. Then read them to your teacher.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Lesson 23: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How many e-mails do you get every day?', f: 'Ten? Fifty? A hundred?', voce: ['I get about … e-mails a day.', 'Too many!'], ex: 'I get about sixty e-mails a day. Too many!' },
  { q: 'What do you have to do first on Monday?', f: 'E-mails, a meeting, calls?', voce: ['First, I have to …', 'I need to …'], ex: 'First, I have to check my calendar. Then I need to call two clients.' },
  { q: 'Is there something you don’t have to do on Fridays?', f: 'No meetings? No suit?', voce: ['On Fridays, I don’t have to …'], ex: 'On Fridays, I don’t have to wear a suit.' },
  { q: 'Does your manager have to approve your proposals?', f: 'Yes or no?', voce: ['Yes, she has to …', 'No, I don’t need to …'], ex: 'Yes, he has to approve every discount.' }
];

var DIALOGO = { rot: 'MONDAY INBOX · BLUEPEAK SERVICES (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'You have forty e-mails and one hour. What do you do first?', h: 'First, I have to answer the clients. Then …' },
  ouvir: 'Listen: what does Leo have to do first? What doesn’t he have to do today?',
  falas: [
    ['Leo', 'Sara, I have forty e-mails. I don’t know where to start.'],
    ['Sara', 'OK. First, the clients. Who {needs to} hear from you today?'],
    ['Leo', 'Mr. Duarte, from Orla Beverages. He {needs to} see the new price.'],
    ['Sara', 'Then you {have to} answer him first. Before 10 a.m.'],
    ['Leo', 'And the report for the finance team?'],
    ['Sara', 'You {don’t have to} send it today. It’s for Friday.'],
    ['Leo', 'Great. And this e-mail from IT? A new password.'],
    ['Sara', 'You {have to} change it, but it takes two minutes.'],
    ['Leo', '{Do} I {have to} go to the training at 11?'],
    ['Sara', 'No, you {don’t}. It’s for the new sellers.'],
    ['Leo', 'Perfect. So: Mr. Duarte, the password, then my calls.'],
    ['Sara', 'Exactly. And you {need to} stop checking e-mail every five minutes!']],
  voz: { Leo: 'en-US-AndrewNeural', Sara: 'en-US-EmmaNeural' },
  perguntas: [
    { q: 'Who does Leo have to answer first? Why?', h: 'Mr. Duarte, from Orla Beverages. He needs to see the new price.' },
    { q: 'When does he have to send the report?', h: 'On Friday. He doesn’t have to send it today.' },
    { q: 'Does he have to change his password?', h: 'Yes, he does. It takes two minutes.' },
    { q: 'Does Leo have to go to the training? Why not?', h: 'No, he doesn’t. It’s for the new sellers.' },
    { q: 'What is Sara’s last tip?', h: 'Stop checking e-mail every five minutes.' }],
  fim: 'have to / need to + verb · he has to · you don’t have to = it isn’t necessary · Do I have to…?' };

var DESCOBRE = {
  pares: [
    { a: 'I {need to send} the proposal today.', b: 'I {need send} the proposal today.', q: 'Which one is English?', r: '<b>need to</b> + verb: need to send, need to call.' },
    { a: 'I {have to} answer the CFO.', b: 'I {have that} answer the CFO.', q: 'It’s necessary. Which one is English?', r: 'Necessary: <b>have to</b> + verb. Never “have that”.' },
    { a: 'She {has to} approve the price.', b: 'She {have to} approve the price.', q: 'He, she, it: which form?', r: 'He / she / it: <b>has to</b>, <b>needs to</b>.' },
    { a: 'You {don’t have to} come. It’s optional.', b: 'You {have not to} come. It’s optional.', q: 'It isn’t necessary. How do we say it?', r: 'Not necessary: <b>don’t have to</b>. Question: <b>Do</b> I have to…?' }],
  regra: [['I · YOU · WE · THEY', 'I have to / need to answer'], ['HE · SHE · IT', 'she has to / needs to approve'], ['NOT NECESSARY', 'you don’t have to · he doesn’t need to'], ['QUESTION', 'Do I have to…? Does she need to…?']],
  armas: [['TO', 'I need send it.', 'I need to send it.', 'need to'], ['HAVE TO', 'I have that call him.', 'I have to call him.', 'have to'], ['HAS', 'He have to sign.', 'He has to sign.', 'he has to'], ['NOT NECESSARY', 'You have not to come.', 'You don’t have to come.', 'don’t have to']] };

var ORDEM = { rot: 'MONDAY INBOX · LEO MARTINS', pede: 'Tap the six e-mails from MOST urgent to LEAST urgent.',
  passos: [
    'Mr. Duarte (Orla Beverages): “I need to see the new price before 10 a.m.”',
    'Sara: “We have to approve the discount today at 11 a.m.”',
    'IT: “You have to change your password by 6 p.m. today.”',
    'Costa Retail: “Can you send the case study this week?”',
    'Finance: “We need the monthly report on Friday.”',
    'Marketing: “A webinar next month. You don’t have to come.”'],
  chips: ['Before 10 a.m.', 'At 11 a.m.', 'By 6 p.m.', 'This week', 'On Friday', 'Optional'],
  modelo: 'First, I have to answer Mr. Duarte: he needs the price before 10 a.m.<br>Then I have to approve the discount with Sara at 11.<br>I have to change my password by 6 p.m.<br>This week, I need to send the case study to Costa Retail.<br>On Friday, I have to send the report.<br>I don’t have to go to the webinar. It’s optional.' };

var ESCOLHA = [
  { a: 'Phone first', b: 'E-mail first', chips: ['I think … is better because …', 'I agree / I don’t agree because …', 'You have to … · You don’t have to …'], ex: 'I think the phone is better because the client has to answer now. You don’t have to wait.' },
  { a: 'Answer every e-mail today', b: 'Answer only the urgent ones', chips: ['I think … is better because …', 'I agree / I don’t agree because …', 'You need to … · It can wait.'], ex: 'I don’t agree with “every e-mail”. You don’t have to answer everything today. Some e-mails can wait.' },
  { a: 'Check e-mail all day', b: 'Check e-mail three times a day', chips: ['I think … is better because …', 'I agree / I don’t agree because …', 'I need to focus on …'], ex: 'I think three times a day is better because I need to focus on my clients.' }];
var ESCOLHA_FIM = 'A good debate: one side, one reason, and “I agree / I don’t agree because…”. Teacher: take the other side every time.';

var LEITURA = { rot: 'EASY READER · CHAPTER 5 · LEO’S FIRST BIG CLIENT (FICTION)', tipo: 'nota',
  antes: { q: 'Before: Rita Gomes, the CFO of Orla Beverages, said: “Send me the contract.” But then Sara sent a message: “Call me NOW. It’s about Orla.” Good news or bad news?', h: 'Free answer: “I think it’s bad news because…”, “I think it’s good news because…”' },
  texto: 'WE HAVE TO TALK\nLeo calls Sara. His hands are cold.\n“Sara? What happened?”\n“Kestrel Partners called Mr. Duarte. Now he {has to} choose: Kestrel or us. We {have to} present again. On Thursday.”\n“But Rita said: send me the contract!”\n“Rita likes us. But the CEO {has to} sign, not Rita.”\nThe next morning, it’s 8 a.m. Leo opens his laptop. Forty new e-mails!\nA webinar: he {doesn’t have to} go. A report: he {doesn’t need to} send it today. A new password: he {has to} change it, but that’s easy.\nThen he sees an e-mail from Nina, Mr. Duarte’s assistant. The subject is: “The final presentation.”\nNina writes: “Mr. Duarte wants to see you and Kestrel on Thursday. You {need to} come at 9 a.m. Kestrel is at 10.”\nLeo smiles. Nine o’clock. He is first!\nBut then he reads the last line: “P.S. Remember: Mr. Duarte hates long presentations. You {need to} explain everything in five minutes.”\nFive minutes! Leo looks at his presentation. Forty slides.\n“Sara,” he says, “I {have to} cut thirty-five slides.”',
  perguntas: [
    { q: 'Why does Mr. Duarte have to choose?', h: 'Kestrel Partners called him. Now he has to choose: Kestrel or Bluepeak.' },
    { q: 'Who has to sign the contract: Rita or Mr. Duarte?', h: 'Mr. Duarte, the CEO.' },
    { q: 'Does Leo have to go to the webinar? What does he have to change?', h: 'No, he doesn’t. He has to change his password.' },
    { q: 'What does Nina say? What is the problem in the P.S.?', h: 'Leo needs to come on Thursday at 9 a.m. He needs to explain everything in five minutes, and he has forty slides!' }],
  olha: 'Look at the highlighted words. Which ones mean “it’s necessary”? Which ones mean “it isn’t necessary”? Find “has to”: who is it about?' };

var ERROS = { rot: 'E-MAIL · REPLY TO NINA (DRAFT)', tipo: 'nota', rotulo: 'MISTAKES', pede: 'Find the four mistakes. Say the right form, then tap.', fim: 'Four fixed. Now read the e-mail out loud, like you’re sending it.', dica: 'The student says the right form BEFORE tapping. Ask: to? has or have? have to or “have that”?', partes: [
  'Hi Nina,\nThank you for your e-mail. Thursday at 9 a.m. is perfect.\n',
  ['I need confirm the time with my manager.', 'I need to confirm the time with my manager.', 'need + to + verb'], ' ',
  ['She have to approve the visit.', 'She has to approve the visit.', 'she → has to'], '\n',
  ['You don’t need prepare anything.', 'You don’t need to prepare anything.', 'need + to'], ' ',
  ['I have that send you the agenda today.', 'I have to send you the agenda today.', 'necessary → have to'], '\nBest,\nLeo'] };

var CARTAO = { ph: 'Reply 1 (urgent):\nHi …, thank you for … I have to … / We need to …\n\nReply 2 (it can wait):\nHi …, thanks. You don’t have to … It can wait until …', rot: 'My two replies',
  chips: ['Hi ', 'Thank you for your e-mail.', 'I need to check ', 'I have to talk to ', 'We need to meet ', 'You don’t have to ', 'It can wait until ', 'Can you send me ', 'by Friday?', 'Best,'],
  perg: ['TWO REAL REPLIES', 'Two e-mails from your real inbox (or invented): one urgent, one that can wait. Two or three lines each.'],
  exemploRot: 'INBOX · LEO MARTINS', exemplo: [['URGENT', 'Nina (Orla Beverages): meeting on Thursday'], ['CAN WAIT', 'IT: a new laptop next month'], ['MY TIME', '15 minutes for both']],
  modelo: 'Hi Nina,<br>Thank you! Thursday at 9 a.m. is perfect. I need to confirm with my manager, and I have to send you the agenda today.<br>Best, Leo<br><br>Hi Ana,<br>Thanks for the message. I don’t have to change my laptop this month. It can wait until December.<br>Best, Leo' };

var PODE = [
  'I can say what is necessary: I have to… I need to… She has to…',
  'I can say what isn’t necessary: You don’t have to…',
  'I can put e-mails in order: what is urgent, what can wait.',
  'I can write two short replies to real e-mails.'
];
