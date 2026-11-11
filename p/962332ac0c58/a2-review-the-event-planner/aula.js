/* ============================================================
   REVIEW · A2 · UNIT 6 · THE EVENT PLANNER · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: portas · missao · cartao · escolha · pode.
   Unidade 6 (Planos e palpites): at / on / in de tempo; at school / at home; preposições de movimento
   (into, out of, through, get on / off); will (decisão na hora, previsão, promessa) × going to (plano);
   present continuous para o que já está marcado.
   A missão: uma agência de eventos. O aluno é o organizador; três clientes; no fim ele passa o plano
   para a equipe.
   ============================================================ */
var REV = { nivel: 'A2', unidade: 6, titulo: ['The Event', 'Planner'], tema: 'Plans and predictions', placa: 'EVENTS', lugarConversa: 'THE PLANNER’S DESK', cor: '#c6a8f5', cor2: '#e3d6fb',
  sub: 'Unit 6 review. You plan events: weddings, parties, big days. Three clients, three dates, and one plan for your team.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'portas', est: 'f', min: 8, img: 'conversa', rot: 'I · Six Doors', t: 'Six doors. One minute each. No notes.', p: 'Pick a door. Do the task out loud, from memory. Your teacher taps Got it or Review.' },
  { k: 'missao', est: 'o', min: 14, img: 'capa', rot: 'II · The Event Planner', t: 'Three clients. Three big days.', p: 'Ask each client five questions. Your teacher is the client. Then tell your team the plan.' },
  { k: 'cartao', est: 'w', min: 6, img: 'conversa', rot: 'III · Your Agenda', t: 'Your next week. Write the plan.', p: 'Four short lines: what is booked, what you are going to do, and one prediction.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'gx', est: 'f', min: 3, img: 'conversa', rot: 'V · The Planner’s Card', t: 'Four lines from Unit 6.', p: 'Read one line at a time. Then keep the card in the corner for the last page.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'AT, ON, IN', tema: 'at / on / in with time', t: 'Your birthday, your class time, your favorite month: at, on or in?', ex: 'My birthday is on May 5th. Class is at 7 PM. I love the weather in June.', trap: 'at + clock, on + day/date, in + month/year.' },
  { k: 'INTO, OUT OF', tema: 'prepositions of movement', t: 'How do you get to work? Use get on / get off, into, out of, through.', ex: 'I get on the bus, get off at the park, walk through it and go into my office.', trap: '“enter in the room” → go into the room / enter the room.' },
  { k: 'GOING TO', tema: 'going to for plans', t: 'Three plans for next month.', ex: 'I’m going to visit my sister. I’m going to start a course.', trap: 'A plan you already decided: going to.' },
  { k: 'I’LL…', tema: 'will for quick decisions, promises and predictions', t: 'Your teacher says a problem. Decide now with I’ll…', ex: 'It’s cold. — I’ll close the window. I’ll call you later, I promise.', trap: 'A decision NOW: will. “I will to call” → I’ll call.' },
  { k: 'BOOKED', tema: 'present continuous for arrangements', t: 'What are you doing this Saturday? Things that are already booked.', ex: 'I’m having lunch with my parents. I’m seeing the dentist at ten.', trap: 'Booked with a time: I’m meeting… (not “I will meet”).' },
  { k: 'MAYBE', tema: 'predictions with will / might', t: 'Predict three things about next year.', ex: 'I think I’ll travel more. It might rain a lot. Prices will go up.', trap: 'I think + will; might = maybe.' }
];

var MISSAO = { pede: 'THE CLIENT MEETING · ASK FIVE QUESTIONS', quem: 'client', depois: 'Brief your team',
  campos: [
    { c: 'quando', r: 'WHEN', q: 'When is the event? What time?', f: 'The date? The time?' },
    { c: 'chegar', r: 'GETTING THERE', q: 'How are the guests going to get there?', f: 'How do they get there?' },
    { c: 'marcado', r: 'BOOKED', q: 'What are you doing that day? Is anything booked?', f: 'Booked already?' },
    { c: 'decide', r: 'DECISION', q: 'There is no music yet. What will you do?', f: 'No music: what now?' },
    { c: 'tempo', r: 'PREDICTION', q: 'Do you think it will rain?', f: 'Rain? Yes or no?' }],
  itens: [
    { k: 'CLIENT 1', tag: 'THE GARDEN WEDDING', ele: 'They', v: { quando: 'on June 12th, at 4 PM', chegar: 'get off the bus at the gate and walk through the garden', marcado: 'meeting the photographer at 10', decide: 'call a band right now', tempo: 'it won’t rain' }, diz: '“On June twelfth, at four in the afternoon.” · “They’re going to get off the bus at the gate and walk through the garden.” · “We’re meeting the photographer at ten.” · “Oh no! I’ll call a band right now.” · “I don’t think it’ll rain. It’s June!”' },
    { k: 'CLIENT 2', tag: 'THE 80TH BIRTHDAY', ele: 'She', v: { quando: 'on Sunday, at noon', chegar: 'take a van and go into the restaurant', marcado: 'having her hair done at 9', decide: 'play her old records', tempo: 'it might rain' }, diz: '“On Sunday, at noon.” · “A van is going to take them, and they’ll go straight into the restaurant.” · “I’m having my hair done at nine.” · “I’ll play my old records!” · “It might rain, but we’ll be inside.”' },
    { k: 'CLIENT 3', tag: 'THE OFFICE PARTY', ele: 'He', v: { quando: 'in December, on the 20th, at 7 PM', chegar: 'walk out of the office and through the park', marcado: 'flying to Chile that morning!', decide: 'ask his team to choose the songs', tempo: 'it’s going to be cold' }, diz: '“In December. On the twentieth, at seven.” · “They’ll walk out of the office and through the park.” · “I’m flying to Chile that morning, so I need help!” · “I’ll ask my team to choose the songs.” · “It’s going to be cold, for sure.”' }],
  relato: { titulo: 'THE TEAM MEETING · WHAT IS THE PLAN?',
    pede: function (x) { return 'OK, team. What is the plan for ' + x.tag.toLowerCase() + '?'; },
    chips: function () { return ['It’s on … at …', 'The guests are going to …', 'The client is …ing (booked).', 'We’ll …', 'I think it will / won’t …']; },
    modelo: function (x) { var v = x.v; return 'It’s ' + v.quando + '. The guests are going to ' + v.chegar + '. I think ' + v.tempo.replace('it’s going to be', 'it will be') + '.'; } },
  nao: { in: '“in Sunday” → ON Sunday.', will: '“I will to call” → I’LL CALL.', booked: '“I will meet the photographer at ten” (booked) → I’M MEETING him at ten.' },
  fim: 'Three clients, three perfect days. at / on / in, going to, I’ll and I’m meeting: all of Unit 6 in one meeting.' };

var CARTAO = { ph: 'On Monday at 9 I’m meeting my new boss.\nOn Wednesday I’m going to start my gym classes.\nOn Friday I’m having dinner with Ana.\nI think it will be a busy week!', rot: 'My agenda',
  chips: ['On Monday ', ' at ', 'I’m meeting ', 'I’m going to ', 'I’m having ', 'I think it will ', 'It might ', 'I’ll '],
  perg: ['YOUR AGENDA', 'What is booked? What are you going to do? One prediction.'],
  exemploRot: 'MY WEEK', exemplo: [['MONDAY', 'meeting my boss at 9'], ['WEDNESDAY', 'going to start the gym'], ['FRIDAY', 'dinner with Ana'], ['THE WEATHER', 'it might rain'], ['PREDICTION', 'a busy week']],
  modelo: 'On Monday at nine I’m meeting my new boss.<br>On Wednesday I’m going to start my gym classes.<br>On Friday I’m having dinner with Ana. I think it will be a busy week!' };

var PODE = [
  'I can use at, on and in with time.',
  'I can describe movement: get on / off, into, out of, through.',
  'I can talk about plans with going to.',
  'I can decide, promise and predict with will.',
  'I can say what is booked: I’m meeting…, I’m flying…'
];

/* MECÂNICAS VARIADAS */
/* A2 R6: portas · missao · cartao · escolha */
var ESCOLHA = [
  { a: 'a wedding in a garden', b: 'a wedding on a beach', chips: ['I’d choose …', 'because I think it will …'], ex: 'In a garden, because I think it will be cooler.' },
  { a: 'plan everything months before', b: 'decide everything on the day', chips: ['I prefer …', 'I’m going to … / I’ll …'], ex: 'Plan everything before. I’m going to start next month!' },
  { a: 'a party on Friday night', b: 'a party on Sunday afternoon', chips: ['On …', 'because …'], ex: 'On Sunday afternoon, because I’m always tired on Friday.' },
  { a: 'travel by bus', b: 'travel by car', chips: ['I’d get on / into …', 'because …'], ex: 'By bus. I get on, I sleep, and I get off in the city!' }];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep from Unit 6.', rotulo: 'Plans and predictions', linhas: ['<b>at</b> nine · <b>on</b> Friday · <b>in</b> June · <b>at</b> home', 'into · out of · through the door · get <b>on</b> / <b>off</b> the bus', 'a plan: I’m <b>going to</b> book the hall · it is on the calendar: I’m <b>meeting</b> Ana at six', 'decide now: OK, I’<b>ll</b> call them · a guess: it <b>will</b> rain'], uso: { p: 'Your turn. Say one plan you have for next week, and one quick decision for your teacher right now.', molde: ['On Friday I’m going to …', 'OK, I’ll …'], ex: 'On Friday I’m going to meet a client at ten. You look busy: OK, I’ll answer the phone.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
