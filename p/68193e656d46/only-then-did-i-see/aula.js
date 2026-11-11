/* ============================================================
   ONLY THEN DID I SEE · C1 · UNIT 4 (INVERSION) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: only + expressão + inversão, para contar a virada de uma história: Only then did I see…;
   Only later did I realize…; Only after the show did I relax; Only by practising every day did I…;
   Only when the lights went down did I…; Only if you rehearse will you… (inversão na oração principal).
   Armadilha: Only then I saw; Only when did the lights go down I relaxed (inversão no lugar errado).
   O mundo: as memórias de uma atriz sobre o medo de palco, e o sótão onde ela achou o diário.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 4, titulo: ['Only Then', 'Did I See'], tema: 'The turning point of a story.',
  sub: 'Every good story has a moment when everything changes. In English, a great storyteller often marks it with “only”: Only then did I see… Read an actress’s memoir and tell your own turning point.',
  placa: 'MEMOIR · CHAPTER 7', lugarConversa: 'THE OLD CINEMA', cor: '#d6a0a0', cor2: '#ebcfcf',
  chips: ['Only then…', 'Only after…', 'Only by…'], botao: 'Start the lesson', nota: 'Only + inversion = the moment the light comes on.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'I · How Do You Learn?', t: 'Choose, then explain.', p: 'Choose A or B. Then tell your teacher why, with an example.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · The Memoir', t: 'Chapter 7: the night I stopped shaking.', p: 'Read it out loud. Answer the questions. Then look closer.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'III · The Turning Point in Blocks', t: 'The same turn, in blocks.', p: 'Read the blocks out loud. Notice where the helper goes. Then build a sentence and say your own.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'IV · Where’s the Verb?', t: 'Only… and then what?', p: 'Compare A and B. Where does the inversion go?' },
  { k: 'memoria', est: 'l', min: 8, img: 'capa', rot: 'V · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the matching pair. Then make a sentence with it.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VI · Your Turning Point', t: 'Write the moment everything changed.', p: 'Write four lines. Use Only… + inversion at least twice.' }
];
var PORTAS = [];

var ESCOLHA = [
  { a: 'learn by making mistakes', b: 'learn by watching others first', chips: ['Only by …ing did I …', 'I’d choose … because …'], ex: 'By making mistakes. Only by falling did I learn to ride a bike.' },
  { a: 'understand a film the first time', b: 'understand it only the second time', chips: ['Only the second time did I …', 'Only later did I …'], ex: 'The second time. Only then did I see all the details.' },
  { a: 'relax before a big presentation', b: 'relax only after it', chips: ['Only after … did I …', 'Only when … did I …'], ex: 'Only after it. Only when people clap do I breathe again!' }];

var LEITURA = { rot: '“BREATHE” · A MEMOIR · CHAPTER 7', tipo: 'nota',
  antes: { q: 'Have you ever been terrified of doing something in public? What happened?', h: 'My first presentation at work: my hands were shaking and I spoke too fast.' },
  texto: 'For ten years I was sick before every show. I thought it was part of the job.\nThen, one night, the lights went down and I froze. {Only when the audience started laughing did I realize} I had forgotten my first line.\nI ran off the stage. {Only later did I understand} that the laughter wasn’t cruel. They thought it was part of the play!\n{Only after that night did I start} to look for help. I found my grandmother’s old diary in the attic: she had been an actress too, and she had shaken just like me.\n{Only by reading her words did I see} that fear wasn’t a weakness. It was love for the stage.\nNow I tell young actors: {only if you accept the fear will you} be free of it.',
  perguntas: [
    { q: 'What happened to the actress before every show, for ten years?', h: 'She was sick from nerves before every performance.' },
    { q: 'What happened on the night she froze?', h: 'She forgot her first line, the audience laughed and she ran off the stage.' },
    { q: 'Why wasn’t the laughter cruel?', h: 'The audience thought it was part of the play.' },
    { q: 'What changed her mind about fear?', h: 'Her grandmother’s diary: fear was love for the stage, not weakness.' }],
  olha: 'Find five sentences that start with Only. In which part of the sentence does the verb come before the subject?' };

var DESCOBRE = {
  pares: [
    { a: 'I {only realized} later.', b: '{Only later did I realize}.', q: 'Same meaning. What happens in B?', r: 'B starts with Only later, so the verb inverts: did I realize. It marks the turning point of the story.' },
    { a: '{Only when the audience laughed did I realize} I had forgotten.', b: '{Only when did the audience laugh I realized} I had forgotten.', q: 'One is wrong. Where does the inversion go?', r: 'A. With Only when / Only after / Only if + a clause, the inversion is in the MAIN clause (did I realize), not in the first part.' },
    { a: '{Only by reading her words did I see} it.', b: 'I saw it {only by reading her words}.', q: 'Which one sounds like the climax of a book?', r: 'A. Starting with Only by… builds suspense; the important part (did I see) comes last.' },
    { a: '{Only if you accept the fear will you} be free.', b: '{Only if will you accept the fear} you will be free.', q: 'Which one is correct with only if?', r: 'A. Only if + normal clause, then the inversion: will you be free.' }],
  regra: [['ONLY THEN / ONLY LATER', 'Only then did I see. Only later did I understand.'], ['ONLY WHEN / ONLY AFTER + CLAUSE', 'Only when the lights went down did I freeze. (inversion in the main clause)'], ['ONLY BY + -ING', 'Only by reading her diary did I understand.'], ['ONLY IF', 'Only if you practise will you improve.']],
  armas: [
    ['NO INVERSION', 'Only then I understood.', 'Only then <b>did I understand</b>.', 'Only + time phrase: auxiliary + subject.'],
    ['WRONG CLAUSE', 'Only after did I finish I relaxed.', 'Only after I finished <b>did I relax</b>.', 'Inversion in the main clause.'],
    ['BY', 'Only by practise I improved.', 'Only by <b>practising did I</b> improve.', 'by + -ing, then inversion.'],
    ['IF', 'Only if you rehearse you will succeed.', 'Only if you rehearse <b>will you</b> succeed.', 'will + subject.']] };

var CARTAO = { ph: 'For years I was afraid of speaking English at work.\nOnly when my boss asked me to lead a meeting did I realize I could do it.\nOnly by making mistakes did I start to feel free.\nOnly later did I understand that nobody was judging me.', rot: 'My turning point',
  chips: ['For years I …', 'Only then did I ', 'Only later did I ', 'Only when … did I ', 'Only after … did I ', 'Only by …ing did I ', 'Only if … will '],
  perg: ['YOUR TURNING POINT', 'A moment when you understood something important. What happened before? What changed?'],
  exemploRot: 'THE ACTRESS · CHAPTER 7', exemplo: [['BEFORE', 'sick before every show'], ['THE NIGHT', 'forgot her first line'], ['ONLY LATER', 'the laughter wasn’t cruel'], ['ONLY BY', 'reading Grandma’s diary'], ['NOW', 'fear = love for the stage']],
  modelo: 'For years I was afraid of speaking English at work.<br>Only when my boss asked me to lead a meeting did I realize I could do it.<br>Only by making mistakes did I start to feel free. Only later did I understand that nobody was judging me.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Only Then Did I See: escolha · leitura · descobre · memoria · cartao */
var PARES = [
  ['Only then', 'did I see the truth.', 'She showed me the diary. Only then did I see the truth.'],
  ['Only later', 'did I understand.', 'They laughed. Only later did I understand why.'],
  ['Only when the lights went down', 'did I freeze.', 'Only when the lights went down did I freeze.'],
  ['Only after the show', 'did I relax.', 'Only after the show did I relax and eat something.'],
  ['Only by practising every day', 'did I improve.', 'Only by practising every day did I improve my accent.'],
  ['Only if you accept the fear', 'will you be free.', 'Only if you accept the fear will you be free of it.']];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'The night she stopped shaking, in blocks. Each block has a job.', frases: [{ b: [['Only then', 'WHEN'], ['did', 'HELPER', 'aux'], ['I', 'WHO'], ['see', 'ACTION'], ['the light', 'WHAT']], d: 'The time goes first. Then the helper, then the person. The verb stays clean.' }, { b: [['Only later', 'WHEN'], ['did', 'HELPER', 'aux'], ['I', 'WHO'], ['realize', 'ACTION'], ['it was only fear', 'WHAT']], d: 'The same four blocks in the same order.' }, { b: [['Only when the lights went down', 'WHEN'], ['did', 'HELPER', 'aux'], ['I', 'WHO'], ['relax', 'ACTION']], d: 'A long time block, but the helper still comes right after it.' }], nota: 'After <b>Only + time</b>, the order is: <b>TIME + helper + person + clean verb</b>. The helper (did, had, can, will) moves before the person. The first part (when the lights went down) keeps the normal order.', monta: { p: 'Build the line. Then say it.', pecas: [['did', 'HELPER', 'aux'], ['Only after the show', 'WHEN'], ['relax', 'ACTION'], ['I', 'WHO']], ordem: [1, 0, 3, 2], outras: [] }, uso: { p: 'Your turn. Think of a moment when something changed for you. Say two sentences that start with Only.', molde: ['Only then did I …', 'Only after … did I …'], ex: 'Only after the exam did I breathe again. Only then did I understand how tired I was.' }, prof: 'Read the blocks with the student, left to right. Point at the helper block: it always sits between the time and the person.' };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
