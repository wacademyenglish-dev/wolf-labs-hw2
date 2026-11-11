/* ============================================================
   I'VE BEEN WAITING · B1 · UNIT 2 (HOW LONG, AND WHAT IT WAS LIKE) · LIVE CLASS  16/10/2026
   Aula nova do livro B1 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: present perfect continuous (I've been waiting) + for / since; How long have you been…?;
   × present perfect simple para resultado / quantidade (I've read two books); verbos de estado (I've known).
   O mundo: o voo das 21h para Lisboa está atrasado há horas; o aluno conversa com três passageiros no portão.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 2, titulo: ['I’ve Been', 'Waiting'], tema: 'How long have you been doing it?',
  sub: 'Gate 14, 1:30 a.m. The 9 p.m. flight to Lisbon still hasn’t left. Read the messages from the gate, notice how English says “for how long”, and talk to three tired passengers.',
  placa: 'GATE 14 · DELAYED', lugarConversa: 'THE DEPARTURE LOUNGE', cor: '#c9b8ff', cor2: '#e4dcff',
  chips: ['I’ve been waiting…', 'for × since', 'Three passengers'], botao: 'Start the lesson', nota: 'Portuguese says “estou esperando há três horas”. English says: I’ve been waiting for three hours.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · Messages from Gate 14', t: 'Still waiting.', p: 'Read the messages out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'II · How Long?', t: 'The Portuguese trap.', p: 'Compare A and B. Which one does an English speaker say? Why?' },
  { k: 'missao', est: 'o', min: 15, img: 'conversa', rot: 'III · Three Passengers', t: 'Everybody has a story.', p: 'Ask each passenger five questions. Your teacher is the passenger. Then tell the airline.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'IV · Gate Pairs', t: 'Five pairs from the delayed flight.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'conversa', est: 'o', min: 8, img: 'capa', rot: 'V · Your Long Waits', t: 'You and waiting.', p: 'Answer, then ask the question back: “And you?”' }
];
var PORTAS = [];

var LEITURA = { rot: 'MESSAGES · GATE 14 · 1:32 AM', tipo: 'chat',
  antes: { q: 'What is the longest time you have waited for something? Where?', h: 'Four hours, at a bus station. It was terrible.' },
  texto: 'MARTA: Still at the airport. We{’ve been waiting} {since} nine o’clock.\nPEDRO: What? You{’ve been sitting} there {for} four and a half hours?\nMARTA: Yes. And I{’ve been drinking} coffee all night. I{’ve had} five cups.\nPEDRO: Have they said anything?\nMARTA: They{’ve been saying} “thirty more minutes” {for} three hours. Nobody believes them.\nPEDRO: Poor you. I{’ve known} that airline {for} years. Always late.\nMARTA: The man next to me{’s been sleeping} on his suitcase {since} midnight. I’m jealous.',
  perguntas: [
    { q: 'How long has Marta been waiting? Since when?', h: 'For four and a half hours, since nine o’clock.' },
    { q: 'How many cups of coffee has she had?', h: 'Five.' },
    { q: 'What has the airline been saying?', h: '“Thirty more minutes”, for three hours.' },
    { q: 'What has the man next to her been doing?', h: 'Sleeping on his suitcase since midnight.' }],
  olha: 'Find the actions that started in the past and are still going on. Which word comes before a period of time, and which before a point in time?' };

var DESCOBRE = {
  pares: [
    { a: 'I {wait} here for three hours.', b: 'I{’ve been waiting} here for three hours.', q: 'Which one does an English speaker say? Why?', r: 'Started in the past, still happening now: <b>have been + -ing</b>. The present simple doesn’t work here.' },
    { a: 'We’ve been waiting {since} nine o’clock.', b: 'We’ve been waiting {for} nine o’clock.', q: 'Which one is right?', r: '<b>since</b> + the start (nine o’clock, Monday, 2020). <b>for</b> + the length (three hours, a week).' },
    { a: 'I{’ve been drinking} coffee all night.', b: 'I{’ve had} five cups.', q: 'Both are right. What is the difference?', r: '<b>been + -ing</b>: the activity, how long. <b>have had</b>: the result, how many.' },
    { a: 'I{’ve been knowing} that airline for years.', b: 'I{’ve known} that airline for years.', q: 'Which one is right?', r: 'know, like, want, have (own) don’t use -ing: <b>I’ve known</b> it for years.' }],
  regra: [['STILL GOING ON', 'have / has been + -ing: I’ve been waiting'], ['FOR', 'a length of time: for three hours, for years'], ['SINCE', 'the start: since nine, since Monday'], ['HOW MANY? → SIMPLE', 'I’ve had five cups · I’ve read two books']],
  armas: [['PRESENT', 'I wait since nine.', 'I’ve <b>been waiting</b> since nine.', 'still happening: have been + -ing'], ['FOR / SINCE', 'since three hours', '<b>for</b> three hours', 'length: for'], ['HOW LONG', 'How long are you waiting?', 'How long <b>have you been</b> waiting?', 'have you been'], ['STATE', 'I’ve been knowing her', 'I’ve <b>known</b> her', 'know: no -ing']] };

var MISSAO = { pede: 'GATE 14 · ASK FIVE QUESTIONS', quem: 'passenger', depois: 'Tell the airline',
  campos: [
    { c: 'quanto', r: 'HOW LONG', q: 'How long have you been waiting?', f: 'How long?' },
    { c: 'desde', r: 'SINCE', q: 'What time did you arrive at the airport?', f: 'Since when?' },
    { c: 'fazendo', r: 'DOING', q: 'What have you been doing all this time?', f: 'Doing what?' },
    { c: 'quantos', r: 'HOW MANY', q: 'How many … have you had / bought?', f: 'How many?' },
    { c: 'problema', r: 'PROBLEM', q: 'What’s the biggest problem for you?', f: 'The problem?' }],
  itens: [
    { k: 'PASSENGER 1', tag: 'DONA ROSA, 74', v: { quanto: 'six hours', desde: 'since 7:30 p.m.', fazendo: 'knitting a scarf', quantos: 'two scarves finished', problema: 'her daughter is waiting in Lisbon' }, diz: '“Six hours, my dear.” · “I arrived at half past seven.” · “I’ve been knitting.” · “I’ve finished two scarves!” · “My daughter has been waiting in Lisbon all night.”', fala: 'Dona Rosa has been waiting for six hours, since 7:30. She’s been knitting and she’s finished two scarves. Her daughter has been waiting in Lisbon all night.' },
    { k: 'PASSENGER 2', tag: 'KEN, 31, MUSICIAN', v: { quanto: 'five hours', desde: 'since 8:30 p.m.', fazendo: 'playing the guitar for the gate', quantos: 'twelve songs', problema: 'a concert tomorrow at noon' }, diz: '“About five hours.” · “Since half past eight.” · “I’ve been playing the guitar for everybody.” · “Twelve songs so far.” · “I have a concert tomorrow at noon!”', fala: 'Ken has been waiting since 8:30. He’s been playing the guitar for everybody: twelve songs so far. He has a concert tomorrow at noon.' },
    { k: 'PASSENGER 3', tag: 'DR. SILVA, 45', v: { quanto: 'four hours', desde: 'since 9:30 p.m.', fazendo: 'answering emails', quantos: 'sixty emails', problema: 'a meeting at 9 a.m.' }, diz: '“Four hours.” · “Since half past nine.” · “I’ve been answering emails.” · “I’ve answered about sixty.” · “I have a meeting at nine in the morning.”', fala: 'Dr. Silva has been answering emails for four hours, since 9:30. He’s answered about sixty. He has a meeting at 9 a.m.' }],
  relato: { titulo: 'THE AIRLINE DESK · TELL THEM',
    pede: function (x) { return 'The airline asks: “And ' + x.tag.split(',')[0] + '? Tell me about this passenger.”'; },
    chips: function () { return ['… has been waiting for …', 'since …', '… has been …-ing', '… has finished / answered …']; },
    modelo: function (x) { return x.fala; } },
  nao: { pres: '“She waits since 7:30” → she’s BEEN WAITING since 7:30.', since: '“since six hours” → FOR six hours.', how: '“How long are you waiting?” → How long HAVE YOU BEEN waiting?' },
  fim: 'The plane leaves at 2:10 a.m. Everybody applauds Ken. For, since and have been + -ing: you can tell any long story now.' };

var CONVERSA = [
  { q: 'How long have you been studying English?', f: 'English: how long?', voce: ['For … years.', 'Since …'], ex: 'On and off, for about six years. Seriously since last year.' },
  { q: 'What have you been doing a lot lately?', f: 'Lately: what?', voce: ['I’ve been …-ing a lot.', 'Lately I’ve been …'], ex: 'I’ve been working late and watching a Korean series.' },
  { q: 'How long have you known your best friend?', f: 'Your best friend: how long?', voce: ['I’ve known her / him for …', 'since we were …'], ex: 'I’ve known her since we were ten.' },
  { q: 'How long have you lived in your home?', f: 'Your home: how long?', voce: ['I’ve lived here for …', 'since …'], ex: 'Since 2019. Five years now.' },
  { q: 'Is there something you’ve been wanting to do for a long time?', f: 'A dream for a long time?', voce: ['I’ve wanted to … for …', 'For years I’ve …'], ex: 'I’ve wanted to visit Japan for years.' }
];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* B1 · I’ve Been Waiting: leitura · descobre · missao · conversa */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de conversa.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.', pares: [{ c: 'She has been waiting since 7:30.', x: 'She waits since 7:30.', d: 'From a time until now: has been + <b>waiting</b>.' }, { c: 'We have been here for six hours.', x: 'We have been here since six hours.', d: 'A period of time: <b>for</b>.' }, { c: 'How long have you been waiting?', x: 'How long are you waiting?', d: 'How long until now: <b>have you been</b> + -ing.' }, { c: 'I’ve read two books today.', x: 'I’ve been reading two books today.', d: 'A number of books: the simple form, <b>read</b>.' }, { c: 'I’ve known her since school.', x: 'I’ve been knowing her since school.', d: 'know is a state verb: no -ing.' }], nota: '<b>Have been -ing</b> says how long it has gone on: for six hours, since 7:30. A number or a result: <b>have read</b>. A state verb like know: no -ing.', uso: { p: 'Your turn. You are at the gate. Tell the passenger next to you how long you have been waiting, and what you have done.', molde: ['I’ve been waiting for …', 'I’ve read / drunk / watched …'], ex: 'I’ve been waiting for four hours. I’ve read two chapters and I’ve drunk three coffees.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
