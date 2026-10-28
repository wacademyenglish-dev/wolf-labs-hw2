/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 2 OF 16 · READ AND SELECT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: uma grade de palavras, tocar só nas reais, contra o relógio. A falsa parece real de propósito:
   terminação errada (beautyful), prefixo errado (unpossible), letra faltando (knowlege).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 2, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 2 OF 16', titulo: ['Read and', 'Select'], tema: 'Real or fake?', placa: 'LESSON 02',
  lugarConversa: 'THE READING ROOM', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'A grid of words, a clock, one question: is it a real English word? Today you learn how fake words are made, so they don’t trick you.',
  chips: ['How fake words are made', 'Three rounds with the clock', 'Word families'], botao: 'Start the lesson',
  nota: 'In the test, a fake word you tap costs points. Missing a real word costs less. When in doubt, leave it.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'descobre', est: 'f', min: 10, img: 'conversa', rot: 'I · How Fake Words Are Made', t: 'Real or fake? Compare.', p: 'Look at A and B. Which one is real? What changed?' },
  { k: 'palavras', est: 'f', min: 12, img: 'capa', rot: 'II · Three Rounds', t: 'Real words only. Three rounds, harder each time.', p: 'Tap only the real English words before the clock stops.' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'III · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var DESCOBRE = {
  pares: [
    { a: 'She has a {beautiful} voice.', b: 'She has a {beautyful} voice.', q: 'Which word is real? What changed?', r: '<b>beautiful</b> is real. beauty + -ful: the <b>y becomes i</b>. “beautyful” is a fake.' },
    { a: 'I want {happiness}.', b: 'I want {happyness}.', q: 'Same trap? Explain.', r: 'Yes: happy + -ness = <b>happiness</b> (y → i). The fake keeps the y.' },
    { a: 'He looks {unhappy}.', b: 'He looks {dishappy}.', q: 'Which prefix goes with happy?', r: '<b>un-</b>happy. dis- is real (disagree, dislike), but not with happy. Fakes use real pieces in the wrong place.' },
    { a: 'Reading builds {knowledge}.', b: 'Reading builds {knowlege}.', q: 'Look letter by letter. What is missing?', r: 'The <b>d</b>: know-le-<b>dge</b>. One missing letter makes a fake.' },
    { a: 'It was a hard {decision}.', b: 'It was a hard {decidement}.', q: 'What is the noun form of “decide”?', r: '<b>decision</b>. -ment is a real ending (agreement), but not for decide. The fake sounds possible: that is the trick.' }],
  regra: [['WATCH Y → I', 'happy → happiness · beauty → beautiful'], ['WATCH THE PREFIX', 'un-happy · dis-agree · im-possible'], ['WATCH THE ENDING', 'is -ment / -ness / -ful the ending of THIS word?'], ['WHEN IN DOUBT', 'leave it: a fake you tap costs more']],
  armas: [['Y → I', 'beautyful', 'beautiful', 'beauty + -ful'], ['PREFIX', 'unpossible', 'impossible', 'im- before p'], ['ENDING', 'decidement', 'decision', 'decide → decision'], ['MISSING LETTER', 'knowlege', 'knowledge', 'know-le-dge']] };

var PODE = [
  'I can spot fake words: wrong ending, wrong prefix, missing letter.',
  'I can keep y → i: happiness, beautiful, carefully.',
  'I can finish a round of real words before the clock stops.',
  'I can leave a word when I am not sure, instead of guessing.'
];

/* MECÂNICAS VARIADAS */
/* DET 02: descobre · palavras · rapido */
var PALAVRAS = { seg: 60, dica: 'After each round, ask about one fake word: “Why is it fake?” The student names the trap: ending, prefix, y → i or a missing letter.', fim: 'Three rounds done. In the test the words get harder when you do well: that is a good sign.', rodadas: [
  [['careful', 1], ['happyness', 0], ['library', 1], ['comfortable', 1], ['beautyful', 0], ['receive', 1], ['improve', 1], ['unpossible', 0], ['agreement', 1], ['quickly', 1], ['childs', 0], ['furniture', 1], ['dishonest', 1], ['plantful', 0], ['explain', 1]],
  [['decision', 1], ['decidement', 0], ['knowledge', 1], ['nervousity', 0], ['although', 1], ['useless', 1], ['friendship', 1], ['brightment', 0], ['achieve', 1], ['receit', 0], ['neighborhood', 1], ['loudity', 0], ['sensible', 1], ['angryful', 0], ['suddenly', 1]],
  [['reluctant', 1], ['reluctful', 0], ['thorough', 1], ['thoroughful', 0], ['inevitable', 1], ['inavoidable', 0], ['whereabouts', 1], ['overcomplish', 0], ['bewildered', 1], ['frightment', 0], ['consequence', 1], ['necessity', 1], ['compliment', 1], ['emptyness', 0], ['meanwhile', 1]]] };
var RAPIDO = { seg: 60, itens: [
  ['happy → the noun', 'happiness'], ['decide → the noun', 'decision'], ['beauty → the adjective', 'beautiful'], ['agree → the opposite', 'disagree'],
  ['possible → the opposite', 'impossible'], ['know → the noun', 'knowledge'], ['quick → the adverb', 'quickly'], ['friend → the noun with -ship', 'friendship'],
  ['use → the adjective with -less', 'useless'], ['child → the plural', 'children'], ['care → the adverb', 'carefully'], ['achieve → the noun', 'achievement']] };
