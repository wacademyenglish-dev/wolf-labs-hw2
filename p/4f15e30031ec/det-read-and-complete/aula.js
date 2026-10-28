/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 4 OF 16 · READ AND COMPLETE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: um parágrafo com várias palavras pela metade; completar todas em 3 minutos (a primeira frase vem inteira).
   Estratégia: ler o parágrafo inteiro primeiro, usar a gramática da frase, conferir a ortografia (a prova usa a americana).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 4, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 4 OF 16', titulo: ['Read and', 'Complete'], tema: 'A paragraph, three minutes', placa: 'LESSON 04',
  lugarConversa: 'THE UNIVERSITY HALL', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'A whole paragraph with words cut in half. Three minutes. Today you get a method: read first, think grammar, then type, then check.',
  chips: ['The method', 'Two paragraphs, 3 min each', 'Spelling check'], botao: 'Start the lesson',
  nota: 'In this question, the test uses American spelling: color, center, organize.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 8, img: 'conversa', rot: 'I · The Method', t: 'Four steps for three minutes.', p: 'Read the coach’s note out loud. Then answer the questions.' },
  { k: 'lacunas', est: 'w', min: 14, img: 'capa', rot: 'II · Two Paragraphs', t: 'Three minutes each. Read first, then type.', p: 'Tap Start. Read the whole paragraph before the first gap.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'A NOTE FROM YOUR COACH', tipo: 'nota',
  antes: { q: 'You have three minutes for ten gaps. Do you start with the first gap? Why or why not?', h: 'No: first you read the whole paragraph, so you know the topic.' },
  texto: 'Step 1: {read the whole paragraph first}. Twenty seconds is enough to know the topic.\nStep 2: {think grammar}. Is it a verb? Does it need -s, -ed or -ing? Is it a noun, singular or plural?\nStep 3: {type the easy gaps first}. Small words (each, also, this, and) are free points.\nStep 4: {check your spelling} in the last thirty seconds. One wrong letter, and the gap is wrong.\nRemember: the first sentence is always complete. {Use it}: it tells you the topic.',
  perguntas: [
    { q: 'Why read the whole paragraph first?', h: 'To know the topic. Then the missing words are easier to guess.' },
    { q: 'What questions do you ask in Step 2?', h: 'What kind of word? Does it need -s, -ed or -ing? Singular or plural?' },
    { q: 'Which gaps do you do first?', h: 'The easy ones: small words like each, also, this.' },
    { q: 'What do you do in the last thirty seconds?', h: 'Check the spelling.' }],
  olha: 'The highlighted words are the method. Close your eyes and say the four steps.' };

var LACUNAS = { rot: 'READ AND COMPLETE', item: 'PARAGRAPH', seg: 180, dica: 'Do not help while the clock runs. Afterwards, ask about each red gap: what kind of word was it?', fim: 'Two paragraphs. In the test you get a few of these, and they get harder when you do well.', textos: [
  { k: 'PARAGRAPH 1 · SLEEP', t: 'Sleep is one of the most important things we do for our health. Most adults {ne|ed} seven to nine hours {ea|ch} night, but many {peo|ple} get much less. {Wit|hout} enough sleep, it is {har|der} to focus, and we {ma|ke} more mistakes at {wo|rk}. Scientists {al|so} say that sleep helps the {bra|in} store new information. {Th|is} is why students who {sle|ep} well often remember {mo|re}.' },
  { k: 'PARAGRAPH 2 · BICYCLES', t: 'Many cities are building new lanes for bicycles. The {id|ea} is simple: if cycling {fe|els} safe, more people will {lea|ve} their cars at home. In some European cities, almost {ha|lf} of the people {go|ing} to work or school {us|e} a bike. These cities {inv|ested} in wide lanes {an|d} special traffic lights. {Oth|er} cities are now {foll|owing} the same plan, {b|ut} change takes time.' }] };

var ERROS = { rot: 'ANA’S ANSWERS', tipo: 'nota', partes: [
  'Most adults need seven to nine hours each night, but many ', ['peoples', 'people', 'people is already plural'], ' get much less. ',
  ['Withought', 'Without', 'with + out: no gh'], ' enough sleep, it is ', ['more hard', 'harder', 'short adjective: -er'], ' to focus, and we ',
  ['do', 'make', 'make a mistake'], ' more mistakes at work. Scientists ', ['allso', 'also', 'one l'], ' say that sleep helps the brain ',
  ['stores', 'store', 'helps + object + base verb'], ' new information.'] };

var PODE = [
  'I can use a method: read first, think grammar, easy gaps, check spelling.',
  'I can complete a paragraph in three minutes.',
  'I can check -s, -ed, -er and plural forms before the clock stops.',
  'I can find spelling mistakes in my own answers.'
];

/* MECÂNICAS VARIADAS */
/* DET 04: leitura · lacunas · erros (os dados estão no topo do aula.js) */
