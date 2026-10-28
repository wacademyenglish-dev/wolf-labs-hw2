/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 6 OF 16 · LISTEN AND TYPE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: ouvir uma frase (até 3 vezes) e digitar exatamente. Armadilhas: fala ligada (wanna = want to),
   palavras pequenas fracas (of soa "a"), -ed e -s quase mudos, mesmo som (they're / their / there).
   Áudios: edge-tts (vozes neurais grátis), sotaques misturados, americano como padrão (aprovado em 15/10).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 6, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 6 OF 16', titulo: ['Listen and', 'Type'], tema: 'Type what is written, not what you hear', placa: 'LESSON 06',
  lugarConversa: 'THE RECORDING CORNER', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'You hear one sentence, up to three times, and type it. Fast speech hides small words and endings. Today you learn where they hide.',
  chips: ['Where words hide', 'Eight sentences, six accents', 'Same sound, different word'], botao: 'Start the lesson',
  nota: 'Listen once for the meaning, once for the details, and once to check. Grammar helps with the words you miss.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'descobre', est: 'l', min: 9, img: 'conversa', rot: 'I · Where Words Hide', t: 'What you hear is not what you type.', p: 'Compare A and B. Which one do you type? Why?' },
  { k: 'ditado', est: 'l', min: 16, img: 'capa', rot: 'II · Eight Sentences', t: 'Listen up to three times. Type every word.', p: 'Play, type, play again, check. Six different accents.' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'III · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var DESCOBRE = {
  pares: [
    { a: 'I {want to} go home.', b: 'I {wanna} go home. (what you hear)', q: 'Which one do you type?', r: 'Always the written form: <b>want to</b>. The same with gonna → <b>going to</b>.' },
    { a: 'a cup {of} tea', b: 'a cup {a} tea (what you hear)', q: 'Where did “of” go?', r: 'Small words get weak: <b>of</b> sounds like “a”. Grammar says: a cup OF something.' },
    { a: 'Yesterday he {walked} to work.', b: 'Yesterday he {walk} to work. (what you hear)', q: 'Why don’t you hear the -ed?', r: 'Before t, the -ed almost disappears. <b>Yesterday</b> tells you: past, so <b>walked</b>.' },
    { a: '{They’re} late again.', b: '{Their} late again.', q: 'Same sound. Which one is right?', r: '<b>They’re</b> = they are. Their = of them (their car). There = a place.' }],
  regra: [['TYPE THE FULL FORM', 'wanna → want to · gonna → going to'], ['SMALL WORDS ARE THERE', 'of, a, to, and: weak, but you type them'], ['ENDINGS ARE QUIET', '-ed and -s: grammar tells you'], ['SAME SOUND', 'they’re / their / there: meaning tells you']],
  armas: [['FULL FORM', 'I wanna go.', 'I want to go.', 'type what is written'], ['ENDING', 'Yesterday I walk to work.', 'Yesterday I walked to work.', 'past: -ed'], ['SMALL WORD', 'a cup a tea', 'a cup of tea', 'of sounds like “a”'], ['SAME SOUND', 'Their late.', 'They’re late.', 'they are']] };

var DITADO = { fim: 'Eight sentences, six accents. In the test, you get a few of these: use all three plays.', itens: [
  { t: 'I want to visit my grandmother this weekend.', audio: 'lt1.mp3', nota: '<b>want to</b> sounds like “wanna”: type want to.' },
  { t: 'She walked to the station and took the last train.', audio: 'lt2.mp3', nota: '<b>walked to</b>: the -ed is quiet before t. British accent.' },
  { t: 'Could you send me a copy of the report?', audio: 'lt3.mp3', nota: '<b>copy of the</b>: “of” is very weak.' },
  { t: 'They’re planning a trip to Canada next summer.', audio: 'lt4.mp3', nota: '<b>They’re</b> = they are. Australian accent.' },
  { t: 'There aren’t enough chairs for everyone in the room.', audio: 'lt5.mp3', nota: '<b>aren’t enough</b>: the words link. Indian accent.' },
  { t: 'He has lived in this neighborhood since he was a child.', audio: 'lt6.mp3', nota: '<b>has lived</b>: the h of has is soft. American spelling: neighborhood.' },
  { t: 'If it rains tomorrow, we will move the party inside.', audio: 'lt7.mp3', nota: '<b>we will</b>: listen for will, not the past. Irish accent.' },
  { t: 'The results were better than we expected.', audio: 'lt8.mp3', nota: '<b>expected</b>: the -ed sounds like “id” after t. Canadian accent.' }] };

var PODE = [
  'I can type the written form of fast speech: want to, going to.',
  'I can hear the small words: of, a, to, and.',
  'I can use grammar to find quiet endings: -ed, -s.',
  'I can choose between words with the same sound: they’re, their, there.'
];

/* MECÂNICAS VARIADAS */
/* DET 06: descobre · ditado · memoria */
var PARES = [
  ['their', 'there', 'Their car is over there.'],
  ['to', 'too', 'I want to go too.'],
  ['your', 'you’re', 'You’re late for your class.'],
  ['weak', 'week', 'I felt weak all week.'],
  ['hear', 'here', 'Can you hear me from here?'],
  ['write', 'right', 'Write the right answer.']];
