/* ============================================================
   NOT UNTIL MIDNIGHT · C1 · UNIT 4 (INVERSION) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: inversão depois de expressões negativas de TEMPO e LUGAR: Not until midnight did they arrive;
   Not until I saw the map did I understand; Not once did we stop; Not since 1990 has it snowed;
   Nowhere have I seen such stars. (No sooner / hardly / not only ficam em outra aula da unidade.)
   Armadilha do português: Not until midnight they arrived (sem inversão); Not until I saw did I…
   com a inversão no lugar errado (a inversão vai na SEGUNDA oração).
   O mundo: o relato de uma noite perdida na montanha e do resgate.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 4, titulo: ['Not Until', 'Midnight'], tema: 'Inversion after time and place.',
  sub: '“They didn’t arrive until midnight” is a fact. “Not until midnight did they arrive” is a story. Read a night on the mountain, and learn to tell it with drama.',
  placa: 'THE RESCUE · 23:58', lugarConversa: 'THE OLD CINEMA', cor: '#7fb2d9', cor2: '#c0d9ec',
  chips: ['Not until…', 'Not once…', 'Nowhere…'], botao: 'Start the lesson', nota: 'Inversion is the storyteller’s tool: it makes the listener wait for the important part.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Night on the Mountain', t: 'A hiker tells her story.', p: 'Read it out loud, like a storyteller. Then look closer.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'II · The Flip', t: 'Watch the words move.', p: 'Flip each plain sentence. Notice where the helper goes. Then flip four on your own.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · Fact or Story?', t: 'Same event. One sentence is a story.', p: 'Compare A and B. Where does the verb go?' },
  { k: 'transforma', est: 'f', min: 8, img: 'capa', rot: 'IV · Make It Dramatic', t: 'Plain → dramatic.', p: 'Read the plain sentence. Start with the clue. Say it with inversion.' },
  { k: 'ordem', est: 'o', min: 7, img: 'capa', rot: 'V · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'conversa', est: 'o', min: 7, img: 'conversa', rot: 'VI · Your Story', t: 'Tell your own stories, with drama.', p: 'Answer with one inversion. Then ask the question back.' }
];
var PORTAS = [];

var LEITURA = { rot: 'TRAVEL STORIES · “THE LONGEST NIGHT”', tipo: 'nota',
  antes: { q: 'Have you ever been lost? What did you feel when you were finally found or got home?', h: 'Relief! I was lost in a big city once, and I only relaxed when I saw my hotel.' },
  texto: 'We left the hut at two. The path was easy and the sky was clear. {Not once did we check} the weather.\nAt five the fog came down. {Not until it was completely dark did we realize} we were lost.\nWe sat under a rock and waited. I had a whistle and blew it every ten minutes. {Not once did anyone answer}.\nThen, at last, a light. {Not until midnight did the rescue team reach us}, but when they did, I cried.\n{Not since I was a child had I felt} so small and so grateful. And as we walked down, the fog cleared. {Nowhere have I seen} such stars.',
  perguntas: [
    { q: 'What mistake did they make at the start?', h: 'They never checked the weather.' },
    { q: 'When did they understand they were lost?', h: 'Only when it was completely dark.' },
    { q: 'When did the rescue team arrive?', h: 'At midnight, after hours of waiting.' },
    { q: 'How did she feel, and what did she see at the end?', h: 'Small and grateful, like a child. The most beautiful stars of her life.' }],
  olha: 'Find the sentences that start with “Not” or “Nowhere”. What happens to the verb right after?' };

var DESCOBRE = {
  pares: [
    { a: 'The team didn’t reach us {until midnight}.', b: '{Not until midnight did the team reach us}.', q: 'Same fact. What changes in B, and why would a storyteller choose it?', r: 'B starts with Not until… and the verb inverts (did the team reach), like a question. It makes us wait: drama.' },
    { a: '{Not until it was dark did we realize} we were lost.', b: '{Not until it was dark we realized} we were lost.', q: 'One is correct. Where must the inversion be?', r: 'A. With Not until + a clause, the inversion is in the SECOND part (did we realize), not in “it was dark”.' },
    { a: 'We {never once} checked the weather.', b: '{Not once did we check} the weather.', q: 'What does B emphasize?', r: 'B: zero times, not even one. The inversion makes the mistake sound bigger.' },
    { a: 'I have never seen such stars {anywhere}.', b: '{Nowhere have I seen} such stars.', q: 'Which one fits a story, and which one fits a casual chat?', r: 'Both are correct. A is normal conversation; B is literary, written or a dramatic moment.' }],
  regra: [['NOT UNTIL + TIME / CLAUSE', 'Not until midnight did they arrive. Not until I saw it did I believe it.'], ['NOT ONCE', 'Not once did we stop.'], ['NOT SINCE', 'Not since 1990 has it snowed here.'], ['NOWHERE', 'Nowhere have I seen such stars.']],
  armas: [
    ['NO INVERSION', 'Not until midnight they arrived.', 'Not until midnight <b>did they arrive</b>.', 'After a negative opening: auxiliary + subject.'],
    ['WRONG PLACE', 'Not until did I see the map I understood.', 'Not until I saw the map <b>did I understand</b>.', 'The inversion goes in the second clause.'],
    ['TENSE', 'Not once we stopped.', 'Not once <b>did we stop</b>.', 'Past simple: did + subject + verb.'],
    ['PERFECT', 'Nowhere I have seen such a place.', 'Nowhere <b>have I seen</b> such a place.', 'have / has + subject.']] };

var TRANSFORMA = { rot: 'PLAIN → DRAMATIC', fim: 'Six dramatic openings. Now tell a story.',
  itens: [
    { de: 'We didn’t eat until ten at night.', pista: 'Not until ten …', para: 'Not until ten at night did we eat.' },
    { de: 'I didn’t understand the joke until I read it again.', pista: 'Not until I …', para: 'Not until I read it again did I understand the joke.' },
    { de: 'She never looked back. Not one time.', pista: 'Not once …', para: 'Not once did she look back.' },
    { de: 'It hasn’t rained like this since 2010.', pista: 'Not since …', para: 'Not since 2010 has it rained like this.' },
    { de: 'I have never eaten such good bread anywhere.', pista: 'Nowhere …', para: 'Nowhere have I eaten such good bread.' },
    { de: 'He didn’t say sorry until the end.', pista: 'Not until the end …', para: 'Not until the end did he say sorry.' }] };

var CONVERSA = [
  { q: 'When did you first realize what you wanted to do with your life?', f: 'When did you know?', voce: ['Not until I … did I …', 'It wasn’t until … that …'], ex: 'Not until I taught my first class did I know I loved teaching.' },
  { q: 'Tell me about a place that surprised you. What did you see there?', f: 'A surprising place?', voce: ['Nowhere have I seen …', 'Never …'], ex: 'Nowhere have I seen such a blue sea as in Fernando de Noronha.' },
  { q: 'Is there something you did every day for a long time without failing?', f: 'Every day, without failing?', voce: ['Not once did I …', 'For … years, not once …'], ex: 'For two years I ran every morning. Not once did I miss a day.' },
  { q: 'Is there something that hasn’t happened in your city for a long time?', f: 'Not for a long time?', voce: ['Not since … has …', 'Not since … have I …'], ex: 'Not since 2016 has my team won the championship!' }
];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Not Until Midnight: leitura · descobre · transforma · ordem · conversa */
var ORDEM = { rot: 'THE LONGEST NIGHT', pede: 'Tap the events in order. Then tell the story with at least three inversions.', chips: ['Not once did …', 'Not until … did …', 'Not since … had …', 'Nowhere have I …'],
  modelo: 'We left the hut at two. Not once did we check the weather. Not until it was dark did we realize we were lost. Not until midnight did the team reach us. Not since I was a child had I felt so grateful, and nowhere have I seen such stars.',
  passos: ['They left the hut at two, without checking the weather.', 'At five, the fog came down.', 'When it got dark, they realized they were lost.', 'They waited under a rock and blew the whistle.', 'At midnight, the rescue team found them.', 'The fog cleared, and they saw the stars.'] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G7 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'vira', titulo: 'The plain sentence, then the dramatic one. Watch the words move.', frases: [{ de: ['They', 'did not arrive', 'until midnight', '.'], para: ['+Not', 'until midnight', '*did', 'they', '*arrive', '.'], d: 'The time goes first, then the helper, then the person: did they arrive.' }, { de: ['We', 'did not stop', 'once', '.'], para: ['+Not', 'once', '*did', 'we', '*stop', '.'], d: 'The same shape: a no word first, then did we stop.' }, { de: ['It', 'has not snowed', 'since 1990', '.'], para: ['+Not', 'since 1990', '*has', 'it', '*snowed', '.'], d: 'With has: not since 1990 has it snowed.' }], notaBotao: 'What moves?', nota: 'After <b>Not until + time</b>, the helper comes before the person, like in a question: <b>did they</b> arrive, <b>has it</b> snowed. The inversion is in the <b>second</b> part: Not until I saw the map <b>did I</b> understand.', pergunta: 'Your turn. Flip it out loud, then check.', treino: [{ de: 'She did not call until Friday.', r: 'Not until Friday <b>did she call</b>.' }, { de: 'I have not seen such stars anywhere.', r: 'Nowhere <b>have I seen</b> such stars.' }, { de: 'They did not leave once in three days.', r: 'Not once in three days <b>did they leave</b>.' }, { de: 'The rain did not stop until dawn.', r: 'Not until dawn <b>did the rain stop</b>.' }], uso: { p: 'Your turn. A night you will never forget. Start with Not until … did I …', molde: ['Not until … did I …', 'Not once did I …'], ex: 'Not until the sun came up did I understand where I was. Not once did I feel afraid.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_vira', GX_EXPLICA); };
