/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 18 · PLEASE CALL ME BACK · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. A1.
   Alvo: o recado de caixa postal: imperativo educado (Please call me back / Please send…), números de telefone
   dígito a dígito (0 = “oh”), e-mails falados (at, dot) e horários de 1 a 12 com a.m./p.m.
   Armadilhas: “Please return me” (me retorne), “call me in the number…”, “at 15h”, “Please to call me”.
   Situação: a caixa postal. Cenas novas: ditado (o recado da Ana) e formulário (o recado do Victor vira ficha no CRM).
   Produto: o próprio recado de caixa postal. Empresas FICTÍCIAS (Bluepeak, Tallow Foods, Granite Labs).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 18, kick: 'SELLING SERVICES · LESSON 18', titulo: ['Please Call', 'Me Back'], tema: 'voicemail: numbers, times, e-mails · please + verb', placa: 'LESSON 18',
  lugarConversa: 'THE VOICEMAIL', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Nobody answers. Beep. You have thirty seconds. And tomorrow, a client leaves YOU a message, fast, full of numbers. Today you leave and take perfect messages.',
  chips: ['Listen and type', 'The message in the CRM', 'Your voicemail'], botao: 'Start the lesson',
  nota: 'Please call me back at 555-0143. Phone numbers: digit by digit. Times: 3 p.m., not “15h”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Phone', t: 'Do you listen to your voicemails?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'ditado', est: 'l', min: 10, img: 'mesa', rot: 'II · A Message from Ana', t: 'A client leaves a voicemail. Six sentences.', p: 'Listen up to three times. Type every word. Numbers: use digits (3, 10, 555). E-mails: type the words you hear (at, dot).' },
  { k: 'formulario', est: 'w', min: 10, img: 'mesa', rot: 'III · The Message in the CRM', t: 'Another voicemail. Put it in the CRM.', p: 'Read the message. Fill in every field: numbers in digits, times with a.m. or p.m. Then check.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'IV · “Call Me Back”, Not “Return Me”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'conversa', rot: 'V · Call Him Back', t: 'You call Victor back. Your teacher is Victor.', p: 'Do each task. Say the numbers and times clearly.' },
  { k: 'escolha', est: 'o', min: 5, img: 'mesa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VII · Your Voicemail', t: 'Your thirty-second message for a real client.', p: 'Write it. Then say it out loud: your teacher writes your number and your e-mail.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 18: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'Do you listen to your voicemails?', f: 'Always, sometimes, never?', voce: ['Yes, I do. Every …', 'No, I don’t. I prefer …'], ex: 'No, I don’t. I prefer WhatsApp messages.' },
  { q: 'What time do you start work? And finish?', f: 'Say a.m. or p.m.!', voce: ['I start at … a.m. and I finish at … p.m.'], ex: 'I start at 8 a.m. and I finish at 6 p.m.' },
  { q: 'What is a good time to call you?', f: 'Morning or afternoon?', voce: ['After … a.m.', 'Before … p.m.'], ex: 'After 10 a.m. In the morning I have meetings.' },
  { q: 'Do you have a work phone and a personal phone?', f: 'One or two phones?', voce: ['Yes, I have two phones.', 'No, I have one phone for everything.'], ex: 'No, I have one phone for everything. It’s a problem!' }
];

var DITADO = { fim: 'Six sentences. A good seller writes the number, the time and the e-mail right the first time.', itens: [
  { t: 'Hi Leo, this is Ana Ruiz from Tallow Foods.', audio: 'vm1.mp3', nota: 'A voicemail starts like a call: <b>this is</b> + name + <b>from</b> + company.' },
  { t: 'I’m calling about your payroll proposal.', audio: 'vm2.mp3', nota: '<b>calling about</b>: the reason for the message.' },
  { t: 'Please call me back at 555 0143.', audio: 'vm3.mp3', nota: 'Phone numbers: digit by digit, in groups. <b>0 = “oh”</b> or “zero”. In the CRM: 555-0143.' },
  { t: 'I’m free on Tuesday after 3 in the afternoon.', audio: 'vm4.mp3', nota: '<b>3 in the afternoon</b> = 3 p.m. Never “15h” in English.' },
  { t: 'My email is ana dot ruiz at tallow dot com.', audio: 'vm5.mp3', nota: 'In the CRM: <b>ana.ruiz@tallow.com</b>. dot = . · at = @' },
  { t: 'Please send me the numbers before the meeting.', audio: 'vm6.mp3', nota: 'Polite order: <b>Please + verb</b>. No “to”.' }] };

var FORMULARIO = { rot: 'BLUEPEAK CRM · NEW CALL-BACK TASK', perfilRot: 'VOICEMAIL · TUESDAY, 9:12 A.M. · TRANSCRIPT',
  perfil: '<p>“Hi, Leo. This is <b>Victor Hale</b>, the <b>controller</b> at <b>Granite Labs</b>.</p><p>I’m calling about your <b>accounting proposal</b>. I have two questions about the price.</p><p>Please call me back at <b>five five five, oh two six nine</b>.</p><p>I’m free on <b>Thursday, after two in the afternoon</b>.</p><p>Or e-mail me: <b>v dot hale at granite labs dot com</b>. That’s V, dot, H-A-L-E. Thanks!”</p>',
  fim: 'A perfect CRM task. Your manager knows who, why, when and how, in ten seconds.',
  campos: [
    { r: 'Contact name *', ph: 'first and last name', aceita: ['Victor Hale'] },
    { r: 'Job title *', ph: '', aceita: ['Controller', 'The controller'] },
    { r: 'Company *', ph: '', aceita: ['Granite Labs'] },
    { r: 'Reason for the call *', ph: 'about…', aceita: ['Accounting proposal', 'The accounting proposal', 'About the accounting proposal', 'Questions about the price', 'Two questions about the price', 'The price'], dica: 'he’s calling about the proposal' },
    { r: 'Phone (digits) *', ph: '000-0000', aceita: ['555-0269', '555 0269', '5550269'], dica: 'oh = 0' },
    { r: 'Best time to call *', ph: 'day + time + a.m./p.m.', aceita: ['Thursday after 2 p.m.', 'Thursday, after 2 p.m.', 'Thursday after 2 pm', 'Thursday after 2pm', 'Thursday after 2:00 p.m.', 'Thursday, after 2 pm', 'Thursday afternoon after 2 p.m.'], dica: 'two in the afternoon = 2 p.m.' },
    { r: 'E-mail *', ph: 'name@company.com', aceita: ['v.hale@granitelabs.com'], dica: 'dot = . · at = @ · no spaces' },
    { r: 'Next step *', ph: 'Call…', aceita: ['Call back', 'Call him back', 'Call Victor back', 'Call back on Thursday', 'Call him back on Thursday', 'Call Victor back on Thursday', 'Call him'] }] };

var DESCOBRE = {
  pares: [
    { a: 'Please {call me back}.', b: 'Please {return me}.', q: 'You want the client to call you. Which one is English?', r: '“Me retorne” in English: <b>call me back</b>. (Return = give something back.)' },
    { a: 'Call me {at} 555-0143.', b: 'Call me {in the number} 555-0143.', q: 'Which one is right?', r: 'Phone number: <b>call me at</b> 555-0143.' },
    { a: 'I’m free {at 3 p.m.}', b: 'I’m free {at 15h}.', q: 'Which time is English?', r: 'In English, 1 to 12 + <b>a.m.</b> (morning) or <b>p.m.</b> (afternoon, night).' },
    { a: '{Please send} me the numbers.', b: '{Please to send} me the numbers.', q: 'Which one is right?', r: 'Polite order: <b>Please + verb</b>. No “to”.' }],
  regra: [['CALL BACK', 'Please call me back at 555-0143.'], ['NUMBERS', 'Digit by digit: five five five, oh one four three.'], ['TIMES', '9 a.m. (morning) · 3 p.m. (afternoon) · 8 p.m. (night)'], ['PLEASE + VERB', 'Please call / send / e-mail me.']],
  armas: [['BACK', 'Please return me.', 'Please call me back.', 'call back'], ['AT', 'Call me in the number 555-0143.', 'Call me at 555-0143.', 'at'], ['P.M.', 'I’m free at 16h.', 'I’m free at 4 p.m.', '1–12 + a.m./p.m.'], ['NO TO', 'Please to call me.', 'Please call me.', 'please + verb']] };

var CADEIRA = { itens: [
  { alvo: 'Say who you are. Say you are calling back.', dica: 'Hi, Victor. This is Leo, from Bluepeak. I’m calling you back about the proposal.', resp: 'Oh, hi, Leo. Thanks for calling back.' },
  { alvo: 'Ask about his two questions.', dica: 'You have two questions about the price. What are they?', resp: 'First: is the price per month? Second: is training included?' },
  { alvo: 'Answer. Then offer a meeting with a day and a time.', dica: 'Yes, it’s per month. Can we meet on … at … a.m. / p.m.?', resp: 'Thursday is busy. What about Friday?' },
  { alvo: 'Say a new time. Use a.m. or p.m.', dica: 'Sure. Is Friday at 10 a.m. good for you?', resp: 'Perfect. Can you send me the invite?' },
  { alvo: 'Check his e-mail. Spell it.', dica: 'Of course. Your e-mail is v dot hale at granite labs dot com, right?', resp: 'Yes, that’s right.' },
  { alvo: 'Give your number, digit by digit. Close the call.', dica: 'And my number is five five five… Please call me if you have questions. Bye!', resp: 'Thanks, Leo. See you on Friday.' }] };

var ESCOLHA = [
  { a: 'Leave a voicemail', b: 'Send a text message', chips: ['I prefer … because …', 'Clients … voicemails / messages.'], ex: 'I prefer a text message because clients don’t listen to voicemails.' },
  { a: 'A 15-second voicemail', b: 'A 60-second voicemail', chips: ['I prefer … because …', 'It’s shorter / clearer …'], ex: 'I prefer 15 seconds because it’s clearer. Name, reason, number. Done.' },
  { a: 'Call back in 1 hour', b: 'Call back the next day', chips: ['I prefer … because …', 'The client …'], ex: 'I prefer one hour because the client is still thinking about the proposal.' }];
var ESCOLHA_FIM = 'A good voicemail is short: who, why, the number, the time. Say the number twice!';

var CARTAO = { ph: 'Hi …, this is … from …\nI’m calling about …\nPlease call me back at …\nI’m free on … after / before … a.m. / p.m.\nMy e-mail is … at … dot com.\nThanks!', rot: 'My voicemail',
  chips: ['Hi …, this is ', ' from Bluepeak.', 'I’m calling about ', 'Please call me back at ', 'Again: ', 'I’m free on ', ' after ', ' before ', ' a.m.', ' p.m.', 'My e-mail is ', ' at ', ' dot com.', 'Thanks! Have a good day.'],
  perg: ['YOUR VOICEMAIL', 'A thirty-second message for a real client: who you are, the reason, your number (twice), a good time, and your e-mail.'],
  exemploRot: 'CRM · CALL-BACK TASK', exemplo: [['CONTACT', 'Ana Ruiz, Tallow Foods'], ['REASON', 'payroll proposal'], ['PHONE', '555-0143'], ['BEST TIME', 'Tuesday after 3 p.m.'], ['E-MAIL', 'ana.ruiz@tallow.com']],
  modelo: 'Hi Ana, this is Leo Martins, from Bluepeak Services.<br>I’m calling about your payroll proposal.<br>Please call me back at five five five, oh one four three. Again: 555-0143.<br>I’m free on Wednesday after 2 p.m.<br>My e-mail is leo dot martins at bluepeak dot com.<br>Thanks! Have a good day.' };

var PODE = [
  'I can leave a short voicemail: who, why, my number, a good time.',
  'I can say and write phone numbers, digit by digit.',
  'I can say times with a.m. and p.m., not “15h”.',
  'I can take a message and put it in the CRM.'
];
