/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 3 OF 16 · FILL IN THE BLANKS · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: uma frase com uma palavra pela metade (as primeiras letras aparecem); completar em 20 segundos.
   A pista está em volta da lacuna: could + verbo base, was + -ed, a lot of + substantivo, como? = -ly.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 3, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 3 OF 16', titulo: ['Fill in the', 'Blanks'], tema: 'The clue is around the gap', placa: 'LESSON 03',
  lugarConversa: 'THE QUIET CAFE', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'One sentence, one word cut in half, twenty seconds. The first letters help, but the best clue is the words around the gap.',
  chips: ['Read the clues', 'What kind of word?', 'Eight sentences, 20 s each'], botao: 'Start the lesson',
  nota: 'Before you type, ask: verb, noun, adjective or adverb? The sentence tells you.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'descobre', est: 'f', min: 10, img: 'conversa', rot: 'I · The Clue Around the Gap', t: 'Same word, different form. Why?', p: 'Compare A and B. What tells you the form of the word?' },
  { k: 'multipla', est: 'f', min: 6, img: 'capa', rot: 'II · What Kind of Word?', t: 'Before you type: what kind of word goes here?', p: 'Choose. Then say the clue that told you.' },
  { k: 'lacunas', est: 'w', min: 12, img: 'conversa', rot: 'III · Eight Sentences', t: 'Twenty seconds each. Finish the word.', p: 'Tap Start, read the whole sentence, type the missing letters.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var DESCOBRE = {
  pares: [
    { a: 'The flight was {delayed}.', b: 'The storm {delayed} the flight.', q: 'Same word. What tells you the form in A?', r: '<b>was + -ed</b>: something happened TO the flight (passive). The words around the gap give the form.' },
    { a: 'Could you {remind} me?', b: 'She {reminded} me yesterday.', q: 'Why no -ed in A?', r: 'After <b>could / can / will / to</b>: the base verb. In B, “yesterday” asks for the past.' },
    { a: 'He speaks {clearly}.', b: 'His voice is {clear}.', q: 'Adverb or adjective: what decides?', r: '<b>speaks HOW?</b> → adverb (-ly). <b>is WHAT KIND?</b> → adjective.' },
    { a: 'She has a lot of {experience}.', b: 'She is very {experienced}.', q: 'Noun or adjective?', r: '<b>a lot of + noun</b>. <b>is very + adjective</b>.' }],
  regra: [['AFTER could / to / will', 'the base verb: remind, finish'], ['AFTER was / were / has', 'the -ed form: delayed, closed'], ['AFTER a / the / a lot of', 'a noun: experience, decision'], ['HOW? · WHAT KIND?', 'adverb -ly · adjective']],
  armas: [['BASE VERB', 'Could you reminded me?', 'Could you remind me?', 'could + base verb'], ['-ED FORM', 'The museum is close on Mondays.', 'The museum is closed on Mondays.', 'is + -ed'], ['NOUN', 'a lot of experienced', 'a lot of experience', 'a lot of + noun'], ['ADVERB', 'She spoke very clear.', 'She spoke very clearly.', 'spoke how? → -ly']] };

var MULTIPLA = { rot: 'WHAT KIND OF WORD?', fim: 'Name the kind of word first. The letters come easier after that.', itens: [
  { txt: 'The flight was ____ because of the storm.', q: 'What goes in the gap?', ops: ['a verb in -ed', 'a noun', 'an adverb'], c: 0, por: 'was + -ed: delayed.' },
  { txt: 'He has a lot of ____ in sales.', q: 'What goes in the gap?', ops: ['a verb', 'a noun', 'an adjective'], c: 1, por: 'a lot of + noun: experience.' },
  { txt: 'She explained it very ____.', q: 'What goes in the gap?', ops: ['an adjective', 'an adverb (-ly)', 'a noun'], c: 1, por: 'explained HOW? clearly, carefully.' },
  { txt: 'Could you ____ the window, please?', q: 'What goes in the gap?', ops: ['the base verb', 'a verb in -ing', 'a verb in -ed'], c: 0, por: 'could + base verb: open, close.' },
  { txt: 'It was a really ____ trip.', q: 'What goes in the gap?', ops: ['a noun', 'an adverb', 'an adjective'], c: 2, por: 'a really ___ trip: an adjective (amazing, tiring).' },
  { txt: 'I’m looking forward to ____ you.', q: 'What goes in the gap?', ops: ['the base verb', 'a verb in -ing', 'a verb in -ed'], c: 1, por: 'look forward to + -ing: seeing. A classic trap!' }] };

var LACUNAS = { rot: 'FILL IN THE BLANKS', item: 'SENTENCE', dica: 'Twenty seconds each, like the test. If the student is stuck, ask only: “What kind of word?”', fim: 'Eight sentences. In the test you see more of them, and they get harder when you do well.', textos: [
  { k: 'SENTENCE 1', seg: 20, t: 'I need to {fin|ish} this report before Friday.' },
  { k: 'SENTENCE 2', seg: 20, t: 'The museum is {clo|sed} on Mondays.' },
  { k: 'SENTENCE 3', seg: 20, t: 'She {apol|ogized} for being late to the meeting.' },
  { k: 'SENTENCE 4', seg: 20, t: 'Could you {rem|ind} me to call the bank tomorrow?' },
  { k: 'SENTENCE 5', seg: 20, t: 'The flight was {del|ayed} because of the storm.' },
  { k: 'SENTENCE 6', seg: 20, t: 'He has a lot of {expe|rience} in sales and marketing.' },
  { k: 'SENTENCE 7', seg: 20, t: 'The instructions were not very {cl|ear}, so we got lost.' },
  { k: 'SENTENCE 8', seg: 20, t: 'I’m looking forward to {see|ing} you next week.' }] };

var PODE = [
  'I can name the kind of word a gap needs: verb, noun, adjective or adverb.',
  'I can use the clue around the gap: could + base, was + -ed, a lot of + noun.',
  'I can finish a word in 20 seconds, with the right spelling.',
  'I can remember the traps: look forward to + -ing, spoke clearly.'
];

/* MECÂNICAS VARIADAS */
/* DET 03: descobre · multipla · lacunas (os dados estão no topo do aula.js) */
