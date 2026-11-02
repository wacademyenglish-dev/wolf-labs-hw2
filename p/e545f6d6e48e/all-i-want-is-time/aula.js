/* ============================================================
   ALL I WANT IS TIME · C1 · UNIT 3 (EMPHASIS) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: clivadas que põem o foco numa coisa só: All I want is…, The only thing (that) I miss is…,
   The reason (why) I left was…, The last thing I expected was…, The one person who…, The place where…
   (As clivadas com what e it e o fronting estão em outras aulas da unidade; aqui é all / the only / the reason.)
   Armadilha do português: "tudo que eu quero é tempo" → All what I want is time; "o motivo é porque" →
   The reason is because; concordância: The only thing I need are…
   O mundo: a entrevista de uma chef famosa que largou um restaurante premiado.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 3, titulo: ['All I Want', 'Is Time'], tema: 'One thing, in the spotlight.',
  sub: '“I want time” is information. “All I want is time” is a confession. Read an interview with a chef who walked away from fame, and learn to put one thing in the spotlight.',
  placa: 'THE INTERVIEW · PAGE 12', lugarConversa: 'THE PARK BENCH', cor: '#e8b27a', cor2: '#f4d8bb',
  chips: ['All I want is…', 'The only thing…', 'The reason why…'], botao: 'Start the lesson', nota: 'Same words, more feeling: the structure tells the listener what really matters.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Interview', t: 'Why would anyone leave a famous kitchen?', p: 'Read the interview out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · Information or Spotlight?', t: 'Same idea, two sentences.', p: 'Compare A and B. What does B do that A doesn’t?' },
  { k: 'transforma', est: 'f', min: 7, img: 'capa', rot: 'III · Turn On the Spotlight', t: 'Plain → spotlight.', p: 'Read the plain sentence. Use the clue. Say the spotlight version.' },
  { k: 'escolha', est: 'o', min: 7, img: 'conversa', rot: 'IV · All You Need', t: 'Choose, then say it with a spotlight.', p: 'Choose A or B. Then explain with All I…, The only thing…, The reason why…' },
  { k: 'cartao', est: 'w', min: 8, img: 'conversa', rot: 'V · Your Confession', t: 'Four lines about what really matters to you.', p: 'All I want…, The only thing…, The reason why…, The last thing…' }
];
var PORTAS = [];

var LEITURA = { rot: 'WEEKEND MAGAZINE · “I JUST WANTED TO COOK”', tipo: 'chat',
  antes: { q: 'Imagine you had your dream job, and you were famous for it. Why would you ever leave?', h: 'Maybe stress, no free time, family, or because the dream became a prison.' },
  texto: 'MAGAZINE: Two stars, a TV show, a book. Why leave?\nRITA: Honestly? {All I wanted was} time. Time to cook for my family, not for critics.\nMAGAZINE: Do you miss the restaurant?\nRITA: {The only thing I miss} is the team. They were my second family.\nMAGAZINE: People say you left because of money.\nRITA: No. {The reason why I left} was my daughter. She asked me if I remembered her birthday. I didn’t.\nMAGAZINE: And now?\nRITA: Now I run a tiny café by the sea. {The last thing I expected} was to be this happy with ten tables.\nMAGAZINE: Any advice for young chefs?\nRITA: {The one thing you really need} is a life outside the kitchen. {All you have to do} is protect it.',
  perguntas: [
    { q: 'What did Rita have before she left?', h: 'Two stars, a TV show and a book: fame.' },
    { q: 'What does she miss, and what doesn’t she?', h: 'She only misses the team. Not the fame.' },
    { q: 'What was the real reason she left?', h: 'Her daughter: she forgot her daughter’s birthday.' },
    { q: 'What surprised her about her new life?', h: 'How happy she is with a tiny café of ten tables.' }],
  olha: 'Rita never says “I wanted time” or “I miss the team”. Find how she says it. What’s the effect?' };

var DESCOBRE = {
  pares: [
    { a: 'I wanted time.', b: '{All I wanted was} time.', q: 'Same information. What does B add?', r: 'B: only time, nothing else. It sounds like a confession, emotional and emphatic. All = the only thing.' },
    { a: 'I miss the team.', b: '{The only thing I miss is} the team.', q: 'What does B tell you that A doesn’t?', r: 'B: she misses nothing else. The rest (fame, money) she doesn’t miss at all.' },
    { a: 'I left because of my daughter.', b: '{The reason why I left was} my daughter.', q: 'Same fact. Why would Rita choose B in an interview?', r: 'To correct a wrong idea (people said money) and put her daughter in the spotlight. Careful: The reason is… NOT The reason is because…' },
    { a: '{All what I want} is peace.', b: '{All I want} is peace.', q: 'One is a typical Brazilian mistake. Which one?', r: 'A is wrong. “Tudo que eu quero” → All I want (no what). The verb after is singular: All I want IS…' }],
  regra: [['ALL … IS', 'All I want is time. All you have to do is ask.'], ['THE ONLY / THE ONE THING', 'The only thing I miss is the team.'], ['THE REASON (WHY) … IS', 'The reason why I left was my daughter. (not “is because”)'], ['THE LAST / THE FIRST THING', 'The last thing I expected was to be happy.']],
  armas: [
    ['ALL', 'All what I need is a holiday.', '<b>All I need</b> is a holiday.', 'No what after all.'],
    ['REASON', 'The reason is because I was tired.', 'The reason is <b>that</b> I was tired.', 'The reason is that… (or just: because).'],
    ['VERB', 'All I want are three things.', 'All I want <b>is</b> three things.', 'All / The only thing … IS.'],
    ['DO', 'All you have to do is to ask.', 'All you have to do is <b>ask</b>.', 'After do … is: the verb without to sounds more natural.']] };

var TRANSFORMA = { rot: 'PLAIN → SPOTLIGHT', fim: 'Six spotlights. Now you can choose what matters.',
  itens: [
    { de: 'I need a long holiday.', pista: 'All I …', para: 'All I need is a long holiday.' },
    { de: 'I only regret one thing: I never learned to swim.', pista: 'The only thing …', para: 'The only thing I regret is that I never learned to swim.' },
    { de: 'I moved because of the job.', pista: 'The reason why …', para: 'The reason why I moved was the job.' },
    { de: 'I didn’t expect a party at all!', pista: 'The last thing …', para: 'The last thing I expected was a party!' },
    { de: 'You just have to press this button.', pista: 'All you have to do …', para: 'All you have to do is press this button.' },
    { de: 'My grandmother understood me. Only her.', pista: 'The one person who …', para: 'The one person who understood me was my grandmother.' }] };

var CARTAO = { ph: 'All I want this year is a little more time.\nThe only thing I really miss is my old neighborhood.\nThe reason why I study English is my daughter: she wants to live abroad.\nThe last thing I expected was to enjoy grammar!', rot: 'What really matters',
  chips: ['All I want is ', 'All I need is ', 'The only thing I … is ', 'The reason why I … is ', 'The last thing I expected was ', 'The one person who … is ', 'All you have to do is '],
  perg: ['YOUR CONFESSION', 'What do you want? What do you miss? Why do you do what you do? What surprised you?'],
  exemploRot: 'RITA’S ANSWERS', exemplo: [['ALL SHE WANTED', 'time'], ['THE ONLY THING', 'the team'], ['THE REASON WHY', 'her daughter'], ['THE LAST THING', 'to be this happy'], ['ADVICE', 'a life outside the kitchen']],
  modelo: 'All I want this year is a little more time.<br>The only thing I really miss is my old neighborhood.<br>The reason why I study English is my daughter. The last thing I expected was to enjoy grammar!' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · All I Want Is Time: leitura · descobre · transforma · escolha · cartao */
var ESCOLHA = [
  { a: 'a famous job with no free time', b: 'an ordinary job with every evening free', chips: ['All I’d want is …', 'The only thing that matters is …'], ex: 'The ordinary job. All I’d want is my evenings with my family.' },
  { a: 'a big house far from everyone', b: 'a tiny flat near your friends', chips: ['The reason why I’d choose … is …', 'The last thing I want is …'], ex: 'The tiny flat. The last thing I want is to be lonely.' },
  { a: 'one perfect week of holiday a year', b: 'one free afternoon every week', chips: ['All I need is …', 'The one thing …'], ex: 'One free afternoon a week. All I need is a little time, often.' },
  { a: 'never cook again', b: 'never watch a series again', chips: ['The only thing I’d miss is …', 'The reason why …'], ex: 'Never cook again. The only thing I’d miss is my mother’s soup.' }];
