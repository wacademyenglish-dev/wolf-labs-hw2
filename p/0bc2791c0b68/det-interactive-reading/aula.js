/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 5 OF 16 · INTERACTIVE READING · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: um texto e várias tarefas sobre ele: completar frases, completar o texto com a frase que falta,
   achar a resposta, a ideia principal e o título. Chave: as palavras-sinal (however, as a result, in other words).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 5, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 5 OF 16', titulo: ['Interactive', 'Reading'], tema: 'One text, five tasks', placa: 'LESSON 05',
  lugarConversa: 'THE READING NOOK', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'One text and five kinds of task: the missing word, the missing sentence, the answer, the main idea and the title. The secret is in the connecting words.',
  chips: ['Signposts', 'Five tasks', 'Put it in order'], botao: 'Start the lesson',
  nota: 'Connecting words like however, as a result and in other words tell you what comes next. Use them.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · The Text', t: 'Read it once for the meaning.', p: 'Read the text out loud. Then read the questions. Then look at the connecting words.' },
  { k: 'multipla', est: 'f', min: 10, img: 'capa', rot: 'II · Five Tasks', t: 'The five tasks of Interactive Reading.', p: 'Choose. Then show where in the text you found it.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connecting words.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'THE TEXT · MORE THAN BOOKS', tipo: 'nota',
  antes: { q: 'When did you last go to a library? What did you do there?', h: 'Any answer is fine: to study, to borrow a book, never!' },
  texto: 'Twenty years ago, many people predicted the end of libraries. With the internet in every pocket, who needed a building full of books? {However}, the opposite happened. Today, visits are growing again in many cities, but the reasons have changed.\nLibraries are {no longer} only quiet places for books. Visitors can borrow tools, cameras and even musical instruments. Many libraries offer free classes on computers, languages and job applications. On weekends, families come for free workshops and a safe place for children.\n{As a result}, librarians now do much more than organize shelves. They help people fill in online forms, find reliable information and learn new skills. {In other words}, the library has become the living room of the city: a place where anyone can go, without paying, to learn something new.',
  perguntas: [
    { q: 'What did people predict twenty years ago?', h: 'The end of libraries, because of the internet.' },
    { q: 'What can visitors borrow today, apart from books?', h: 'Tools, cameras and musical instruments.' },
    { q: 'What do librarians do now?', h: 'They help people with online forms, reliable information and new skills.' },
    { q: 'Why does the text call the library “the living room of the city”?', h: 'Because anyone can go there, without paying, to learn and meet.' }],
  olha: 'The highlighted words are signposts. However = contrast. No longer = a change. As a result = a consequence. In other words = the same idea, explained again. Find one more signpost in the text.' };

var MULTIPLA = { rot: 'INTERACTIVE READING', base: LEITURA.texto, fim: 'Five tasks, one text. In the test, read the text once for meaning before the first task.', itens: [
  { txt: '<b>Complete the sentence.</b> Libraries are no longer ____ quiet places for books.', q: 'Choose the best word.', ops: ['already', 'only', 'never'], c: 1, por: 'no longer ONLY: they are still places for books, but more than that.' },
  { txt: '<b>Complete the sentence.</b> Visitors can ____ tools, cameras and even musical instruments.', q: 'Choose the best word.', ops: ['lend', 'owe', 'borrow'], c: 2, por: 'Visitors TAKE them for a short time: borrow. The library lends.' },
  { txt: '<b>Complete the passage.</b> “…many people predicted the end of libraries. With the internet in every pocket, who needed a building full of books? [ ? ] Today, visits are growing again…”', q: 'Which sentence fits the gap?', ops: ['However, the opposite happened.', 'Books are made of paper.', 'Libraries open at nine.'], c: 0, por: 'The next sentence says visits are growing: a contrast. “However” shows it.' },
  { txt: '<b>Highlight the answer.</b> Why do families go to the library on weekends?', q: 'Which part of the text answers it?', ops: ['to organize shelves', 'for free workshops and a safe place for children', 'to fill in online forms'], c: 1, por: 'It is in paragraph 2, after “On weekends”.' },
  { txt: '<b>Identify the idea.</b>', q: 'What is the main idea of the text?', ops: ['Libraries will close soon.', 'E-books are better than paper books.', 'Libraries are changing into community centers.'], c: 2, por: 'Every paragraph shows a change: more services, more people, a new role.' },
  { txt: '<b>Title the passage.</b>', q: 'Choose the best title.', ops: ['More Than Books', 'How to Print a Book', 'The Last Library'], c: 0, por: 'The text is about everything libraries offer beyond books. “The Last Library” says the opposite.' }] };

var ORDEM = { rot: 'RAFAEL’S STORY', pede: 'Tap the five sentences in order. Look for the connecting words.',
  passos: ['Last month, Rafael moved to a new city and knew nobody.', 'First, he went to the public library to get a free card.', 'There, he saw a poster for a conversation club on Tuesday nights.', 'He was nervous, but he went anyway.', 'Now, three weeks later, he has four new friends and a favorite armchair.'],
  chips: ['Last month,', 'First,', 'There,', 'but', 'Now,'],
  modelo: 'Last month, Rafael moved to a new city and knew nobody. First, he went to the public library to get a free card. There, he saw a poster for a conversation club. He was nervous, but he went anyway. Now he has four new friends.' };

var PODE = [
  'I can read a text once for the main idea before the tasks.',
  'I can use signposts: however, no longer, as a result, in other words.',
  'I can choose the missing sentence that connects two ideas.',
  'I can find the answer in the text and choose the best title.'
];

/* MECÂNICAS VARIADAS */
/* DET 05: leitura · multipla · ordem (os dados estão no topo do aula.js) */
