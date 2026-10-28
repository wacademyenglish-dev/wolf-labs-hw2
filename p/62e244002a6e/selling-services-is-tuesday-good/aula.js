/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 9 · IS TUESDAY AT 10 GOOD FOR YOU? · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: in / on / at para tempo (on Monday · at 10 a.m. · in the morning · in March); hora de 1 a 12 + a.m. / p.m.
   Armadilhas: “in Monday”, “at the morning”, “on 10 a.m.”, “at 14h”.
   Situação: marcar e remarcar reunião. Produto: a mensagem de convite / remarcação.
   Empresas FICTÍCIAS (Lumen Logistics, Atlas Motors). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 9, kick: 'SELLING SERVICES · LESSON 9', titulo: ['Is Tuesday at 10', 'Good for You?'], tema: 'on · at · in (time) · a.m. / p.m.', placa: 'LESSON 9',
  lugarConversa: 'THE CALENDAR', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Clients are busy, and meetings move. Today you invite, say sorry, and move a meeting: the day, the time and the part of the day, the American way.',
  chips: ['A chat about a demo', 'A meeting moves', 'Your meeting message'], botao: 'Start the lesson',
  nota: 'on + day · at + time · in + the morning, March. And the clock goes 1 to 12: 3 p.m., not 15h.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Week', t: 'What time do you start work?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 7, img: 'mesa', rot: 'II · A Chat about a Demo', t: 'Leo and a client look for a time.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · The Meeting Moves', t: 'A client calls: she can’t do Thursday.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · On Monday, at 10, in the Morning', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'erros', est: 'f', min: 8, img: 'mesa', rot: 'V · Fix the Message', t: 'A message to move a meeting. Five mistakes.', p: 'Find a mistake. Say the right form. Then tap it.' },
  { k: 'escolha', est: 'o', min: 5, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Meeting Message', t: 'Move a real meeting: sorry + two new options.', p: 'Write it. Then read it out loud, times too.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'What time do you start work?', f: '8 a.m.? 9 a.m.?', voce: ['I start at … a.m.', 'It depends. On Mondays, at …'], ex: 'I start at 8 a.m. On Fridays, at 9.' },
  { q: 'What is your busy day?', f: 'Monday? Friday?', voce: ['On …, I have …', '… is crazy!'], ex: 'On Mondays I have five meetings!' },
  { q: 'Do you prefer calls in the morning or in the afternoon?', f: 'Morning or afternoon?', voce: ['In the morning, because …', 'In the afternoon, at …'], ex: 'In the morning, at 9 or 10 a.m.' },
  { q: 'When is your next vacation?', f: 'A month? A season?', voce: ['In …', 'I don’t know!'], ex: 'In December. Two weeks!' }
];

var LEITURA = { rot: 'TEAMS CHAT · LEO MARTINS AND KAREN WELLS (FICTIONAL)', tipo: 'chat',
  antes: { q: 'You want a demo with a client. What do you need to agree?', h: 'The day, the time, who comes, and video call or office.' },
  texto: 'Leo Martins: Hi Karen! Is Tuesday {at} 10 a.m. good for the demo?\nKaren Wells: Sorry, Leo. I can’t {on} Tuesday. I’m in Curitiba {in} the morning.\nKaren Wells: What about Wednesday {at} 3 p.m.?\nLeo Martins: Wednesday is great. My manager, Sara, can join. She’s free {in} the afternoon.\nKaren Wells: Perfect. {On} March 12, {at} 3 p.m. I can send the invite.\nLeo Martins: Thank you! See you {on} Wednesday.',
  perguntas: [
    { q: 'Can Karen do Tuesday? Why?', h: 'No, she can’t. She’s in Curitiba in the morning.' },
    { q: 'What is the new day and time?', h: 'Wednesday, March 12, at 3 p.m.' },
    { q: 'Who can join?', h: 'Sara, Leo’s manager.' },
    { q: 'Who sends the invite?', h: 'Karen.' }],
  olha: 'Look at the highlighted words. Which one goes with days and dates? With times? With “the morning”?' };

var DIALOGO = { rot: 'THE MEETING MOVES · RACHEL KIM, ATLAS MOTORS (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A client can’t come to the meeting. What do you say?', h: 'No problem! Is … at … good for you?' },
  ouvir: 'Listen: what is the new day and time?',
  falas: [
    ['Rachel', 'Hi, Leo. I’m sorry, but I can’t do Thursday {at} 9.'],
    ['Leo', 'No problem, Rachel. Is Friday good for you?'],
    ['Rachel', '{On} Friday I’m busy {in} the morning. What about {at} 2 p.m.?'],
    ['Leo', 'Hmm, I have a client visit {at} 2. Is 4 p.m. OK?'],
    ['Rachel', '4 p.m. is late. Can we do Monday?'],
    ['Leo', 'Sure. Monday, March 16?'],
    ['Rachel', 'Yes. {On} Monday {at} 10 a.m.'],
    ['Leo', 'Great. A video call, or {at} your office?'],
    ['Rachel', 'A video call, please. I’m never {in} the office {on} Mondays.'],
    ['Leo', 'Perfect. I can send the invite today.']],
  voz: { Rachel: 'en-US-EmmaNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'Why does Rachel call?', h: 'She can’t do Thursday at 9.' },
    { q: 'Why not Friday?', h: 'Rachel is busy in the morning, and Leo has a client visit at 2. 4 p.m. is late.' },
    { q: 'What is the new day and time?', h: 'Monday, March 16, at 10 a.m.' },
    { q: 'Is it at the office?', h: 'No, it’s a video call. She’s never in the office on Mondays.' },
    { q: 'Who sends the invite?', h: 'Leo, today.' }],
  fim: 'on + day / date · at + time · in + the morning. The clock: 1 to 12 + a.m. / p.m.' };

var DESCOBRE = {
  pares: [
    { a: 'Can we meet {on} Monday?', b: 'Can we meet {in} Monday?', q: 'Days and dates: in or on?', r: 'Days and dates: <b>on</b>: on Monday, on March 12, on Friday morning.' },
    { a: 'I’m free {in the} morning.', b: 'I’m free {at the} morning.', q: 'Morning, afternoon: at or in?', r: '<b>in</b> the morning, <b>in</b> the afternoon. (Only one exception: at night.)' },
    { a: 'The call is {at} 10 a.m.', b: 'The call is {on} 10 a.m.', q: 'A time on the clock: at or on?', r: 'Clock times: <b>at</b>: at 10 a.m., at noon.' },
    { a: 'The demo is at {3 p.m.}', b: 'The demo is at {15h}.', q: 'In American English: 15h or 3 p.m.?', r: 'The clock goes <b>1 to 12</b> + <b>a.m.</b> (morning) or <b>p.m.</b> (afternoon, evening). 15h = 3 p.m.' }],
  regra: [['ON', 'on Monday · on March 12 · on Friday morning'], ['AT', 'at 10 a.m. · at noon · at night'], ['IN', 'in the morning · in March · in 2027'], ['A.M. · P.M.', '9h = 9 a.m. · 15h = 3 p.m.']],
  armas: [['DAY', 'in Monday', 'on Monday', 'day → on'], ['MORNING', 'at the morning', 'in the morning', 'part of the day → in'], ['TIME', 'on 10 a.m.', 'at 10 a.m.', 'clock → at'], ['P.M.', 'at 14h', 'at 2 p.m.', '1–12 + p.m.']] };

var ERROS = { rot: 'MESSAGE · A NEW TIME (DRAFT)', tipo: 'nota', rotulo: 'MISTAKES', pede: 'Find the five mistakes. Say the right form, then tap.', fim: 'Five fixed. Now read the message out loud, times too.', dica: 'The student says the right form BEFORE tapping. Ask: a day, a time, or a part of the day?', partes: [
  'Hi Rachel,\nSorry, I can’t meet ',
  ['in Thursday.', 'on Thursday.', 'day → on'], ' ',
  ['I have a client visit at the morning.', 'I have a client visit in the morning.', 'part of the day → in'], '\n',
  ['Is Friday on 10 a.m. good for you?', 'Is Friday at 10 a.m. good for you?', 'clock → at'], ' ',
  ['Or Monday at 15h?', 'Or Monday at 3 p.m.?', '15h → 3 p.m.'], '\nThe project starts ',
  ['on March,', 'in March,', 'month → in'], ' so we have time.\nBest,\nLeo'] };

var ESCOLHA = [
  { a: 'Meetings on Monday morning', b: 'Meetings on Friday afternoon', chips: ['I prefer … because …', 'On Monday … · In the afternoon …'], ex: 'I prefer Monday morning, because on Friday afternoon people are tired.' },
  { a: 'Move a meeting by message', b: 'Move a meeting by phone', chips: ['I prefer … because …', 'It’s fast · It’s polite'], ex: 'I prefer a phone call, because it’s polite.' },
  { a: 'A meeting at 8 a.m.', b: 'A meeting at 6 p.m.', chips: ['I prefer … because …', 'At … I’m …'], ex: 'I prefer 8 a.m., because at 6 p.m. I’m tired.' }];
var ESCOLHA_FIM = 'Day → on. Time → at. The morning → in.';

var CARTAO = { ph: 'Hi …,\nSorry, I can’t meet on … at …\nIs … at … a.m. / p.m. good for you?\nOr … in the afternoon?\nI can send the invite.\nBest,\n…', rot: 'My meeting message',
  chips: ['Hi ', 'Sorry, I can’t meet on ', 'Is ', ' at ', ' a.m.', ' p.m.', ' good for you?', 'Or ', ' in the morning', 'I can send the invite today.'],
  perg: ['YOUR MEETING MESSAGE', 'Move a real meeting (or the Atlas Motors meeting): say sorry, give two new options (day + time), and offer the invite.'],
  exemploRot: 'CALENDAR · NEXT WEEK', exemplo: [['THURSDAY', 'client visit, 9 a.m.'], ['FRIDAY', 'free at 10 a.m.'], ['MONDAY', 'free at 3 p.m.'], ['TUESDAY', 'busy all day'], ['FORMAT', 'video call']],
  modelo: 'Hi Rachel,<br>Sorry, I can’t meet on Thursday at 9 a.m. I have a client visit in the morning.<br>Is Friday at 10 a.m. good for you? Or Monday at 3 p.m.?<br>I can send the invite today.<br>Best,<br>Leo' };

var PODE = [
  'I can say days and dates with on: on Monday, on March 12.',
  'I can say times with at: at 10 a.m., at 3 p.m. (not 15h).',
  'I can say in the morning, in the afternoon, in March.',
  'I can invite a client and move a meeting by message.'
];
