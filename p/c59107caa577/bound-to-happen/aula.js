/* ============================================================
   BOUND TO HAPPEN · C1 · UNIT 2 (MODALS WITH NUANCE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: o futuro com nuance: be bound to (certeza), be set to (planejado, notícia), be due to (horário
   oficial), be likely / unlikely to (probabilidade), be about to (em instantes), be on the verge of + -ing.
   Armadilha do português: "deve acontecer" vira must happen (obrigação!) em vez de is bound / likely to;
   "está para sair" → is for leave; "on the verge to" em vez de on the verge of + -ing.
   O mundo: o boletim da manhã de uma rádio da cidade (inventada), e um tabuleiro de previsões.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 2, titulo: ['Bound', 'to Happen'], tema: 'The future, with nuance.',
  sub: 'Will is fine. But a C1 speaker says what is bound to happen, what is set to happen and what is due to happen. Listen to the morning news, then make your own predictions.',
  placa: 'CITY RADIO · 7 AM NEWS', lugarConversa: 'UNDER THE STARS', cor: '#8fc7d6', cor2: '#c6e3eb',
  chips: ['bound to', 'set to', 'due to'], botao: 'Start the lesson', nota: 'Each phrase tells the listener how sure you are, and why.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Next Week', t: 'What’s coming up for you?', p: 'Answer with detail. Then ask the question back.' },
  { k: 'leitura', est: 'l', min: 9, img: 'capa', rot: 'II · The Morning News', t: 'City Radio, 7 AM.', p: 'Read the bulletin out loud, like a news presenter. Then look closer.' },
  { k: 'gx', est: 'f', min: 5, img: 'capa', rot: 'III · Three Levels of Sure', t: 'One future, three levels.', p: 'Look at the three levels. Tap the level of each sentence. Then say three of your own.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'IV · How Sure?', t: 'Same event, different certainty.', p: 'Compare A and B. What exactly is the difference?' },
  { k: 'rapido', est: 'f', min: 6, img: 'capa', rot: 'V · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'VI · The Prediction Board', t: 'Roll, move, predict.', p: 'Your teacher rolls the die. Make a prediction for your square with the right phrase.' }
];
var PORTAS = [];

var CONVERSA = [
  { q: 'What’s coming up for you in the next few days?', f: 'Your next few days?', voce: ['I’m due to …', 'I’m about to …'], ex: 'I’m due to see the dentist on Thursday, and I’m about to start a new course.' },
  { q: 'Is there anything you’re sure will go wrong this week?', f: 'Something that will go wrong?', voce: ['… is bound to …', 'It’s likely to …'], ex: 'The traffic on Friday is bound to be terrible. It always is.' },
  { q: 'What’s set to change in your city soon?', f: 'Changes in your city?', voce: ['… is set to …', 'They’re about to …'], ex: 'A new metro line is set to open next year.' }
];

var LEITURA = { rot: 'CITY RADIO · MORNING BULLETIN', tipo: 'fala',
  antes: { q: 'Which is more certain: “The train is due to leave at 8” or “The train will probably leave at 8”?', h: 'The first one: due to means it’s on the official timetable.' },
  texto: 'PRESENTER: Good morning, it’s seven o’clock. The new river bridge {is set to open} next Monday, after three years of work.\nPRESENTER: The mayor {is due to speak} at the opening at ten o’clock.\nPRESENTER: With the bridge open, traffic in the old town {is likely to fall} by a third. But on the first day, the roads {are bound to be} busy.\nPRESENTER: The bus strike {is unlikely to end} before Friday, and drivers say they {are on the verge of accepting} a new offer.\nPRESENTER: And finally, the weather: a storm {is about to hit} the coast, so take an umbrella. Back at eight.',
  perguntas: [
    { q: 'When does the bridge open, and is it certain?', h: 'Next Monday. It’s planned and official: set to open.' },
    { q: 'What exactly will the mayor do, and when?', h: 'Speak at the opening at ten: it’s on the schedule.' },
    { q: 'What will happen to traffic, in two different ways?', h: 'It will probably fall by a third, but on the first day it will certainly be busy.' },
    { q: 'What’s the news about the bus strike?', h: 'It probably won’t end before Friday, but the drivers are very close to accepting an offer.' }],
  olha: 'Find six ways to talk about the future without will. Which one is the most certain? Which is the closest in time?' };

var DESCOBRE = {
  pares: [
    { a: 'The roads {are bound to be} busy.', b: 'The roads {are likely to be} busy.', q: 'Which speaker is more sure?', r: 'A. bound to = I’m almost certain (often because it always happens). likely to = probably.' },
    { a: 'The bridge {is set to open} on Monday.', b: 'The mayor {is due to speak} at ten.', q: 'Both are planned. What’s the small difference?', r: 'set to = planned, typical of news. due to = on a timetable or schedule, at an exact time.' },
    { a: 'A storm {is about to hit} the coast.', b: 'A storm {is likely to hit} the coast.', q: 'Which one is happening in minutes?', r: 'A. about to = very, very soon. likely to = probably, no idea when.' },
    { a: 'They’re {on the verge of accepting}.', b: 'They’re {on the verge to accept}.', q: 'One is right. Which form comes after “on the verge of”?', r: 'A. on the verge of + -ing: very close to doing it.' }],
  regra: [['BOUND TO', 'almost certain: The roads are bound to be busy.'], ['SET TO / DUE TO', 'planned (news) · on the timetable: The train is due to leave at 8.'], ['LIKELY / UNLIKELY TO', 'probably / probably not: It’s unlikely to end soon.'], ['ABOUT TO · ON THE VERGE OF', 'in a moment · very close to + -ing']],
  armas: [
    ['MUST', 'Prices must rise next year.', 'Prices <b>are bound to</b> rise next year.', 'must sounds like an obligation. bound to = almost certain.'],
    ['VERGE', 'She is on the verge to quit.', 'She is on the verge <b>of quitting</b>.', 'on the verge of + -ing.'],
    ['DUE', 'The plane is due landing in 10 minutes.', 'The plane is <b>due to land</b> in 10 minutes.', 'due to + verb, for a schedule.'],
    ['LIKELY', 'It is probable to rain.', 'It is <b>likely to</b> rain.', 'likely to + verb (not probable to).']] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Bound to Happen: conversa · leitura · descobre · rapido · tabuleiro */
var RAPIDO = { seg: 60, itens: [['almost certain: The roads are ___ to be busy.', 'bound'], ['on the timetable: The train is ___ to leave at 8.', 'due'], ['in news, planned: The bridge is ___ to open.', 'set'], ['probably: It’s ___ to rain.', 'likely'], ['probably not: The strike is ___ to end.', 'unlikely'], ['in a moment: The film is ___ to start.', 'about'], ['very close: He’s on the verge ___ (quit).', 'of quitting'], ['must or bound? Prices are ___ to rise.', 'bound'], ['She’s due ___ (arrive) at noon.', 'to arrive'], ['on the verge or about? I’m ___ to leave. See you!', 'about']] };
var TABULEIRO = { rot: 'THE PREDICTION BOARD', centro: 'How sure are you? Choose the phrase.', casas: [
  { k: 'YOUR CITY', t: 'Something that is set to change in your city.', ex: 'A new hospital is set to open next year.' },
  { k: 'THE TRAIN', t: 'Your next trip: what’s on the timetable?', ex: 'My flight is due to leave at 6:40 on Friday.' },
  { k: 'FRIDAY', t: 'Something that is bound to happen this Friday.', ex: 'The bars are bound to be full. They always are.' },
  { k: 'THE WEATHER', t: 'Tomorrow’s weather: likely or unlikely?', ex: 'It’s likely to rain in the afternoon, but it’s unlikely to be cold.' },
  { k: 'FOOTBALL', t: 'The next big match: predict it.', ex: 'Brazil is bound to win. Well, it’s likely to!' },
  { k: 'RIGHT NOW', t: 'Something that is about to happen right now, here.', ex: 'My cat is about to jump on the keyboard.' },
  { k: 'A FRIEND', t: 'Someone you know who is on the verge of a big decision.', ex: 'My friend is on the verge of moving to Portugal.' },
  { k: 'PRICES', t: 'Prices next year: what’s bound / likely / unlikely?', ex: 'Rent is bound to go up. Coffee is unlikely to get cheaper.' },
  { k: 'TECHNOLOGY', t: 'A technology that is set to change everything.', ex: 'AI translation is set to change how we travel.' },
  { k: 'YOUR JOB', t: 'Your work or studies: something due soon.', ex: 'My report is due to be submitted on Monday.' },
  { k: 'THE TEACHER', t: 'Predict something about your teacher’s weekend.', ex: 'You’re bound to watch a series. You’re unlikely to wake up early!' },
  { k: 'IN 2030', t: 'Three predictions for 2030, from sure to unsure.', ex: 'Cars are bound to be electric, cities are likely to be greener, and we’re unlikely to live on Mars.' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'How sure is the future? Three levels on City Radio.', usos: [{ t: 'BOUND TO', f: 'The price is bound to go up.', d: 'You are sure: it will happen, nothing can stop it. Also: be certain to.' }, { t: 'LIKELY / UNLIKELY TO', f: 'The match is likely to start late.', d: 'It is probable. Likely = probably yes, unlikely = probably not.' }, { t: 'ABOUT TO', f: 'The mayor is about to speak.', d: 'It happens in a moment. Also: on the verge of + -ing.' }], pergunta: 'Which level is it?', itens: [{ f: 'Look at the sky. It is bound to rain.', c: 0 }, { f: 'Quiet, please. The film is about to begin.', c: 2 }, { f: 'The bus is unlikely to arrive before nine.', c: 1 }, { f: 'With this traffic, we are bound to be late.', c: 0 }, { f: 'The company is on the verge of closing.', c: 2 }, { f: 'She is likely to say yes.', c: 1 }], nota: 'Not <b>must happen</b>: must is about obligation. Use <b>bound to</b> (sure), <b>likely / unlikely to</b> (probable), <b>about to</b> (any second). Official times: <b>due to</b> (the train is due at six). Planned news: <b>set to</b> (the mayor is set to resign).', uso: { p: 'Your turn. Three predictions for your city or your job next week: one you are sure of, one probable, one for right now.', molde: ['… is bound to …', '… is likely to …', '… is about to …'], ex: 'The shops are bound to be full on Saturday. My boss is likely to change the plan. The meeting is about to start.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
