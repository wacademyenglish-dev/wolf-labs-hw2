/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 1 OF 16 · WHAT IS THE TEST? · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   Formato conferido em 15/10/2026 (mudança de julho de 2025: saíram Read Aloud e Listen, Then Speak;
   entrou Interactive Speaking). O nome da prova é marca registrada: no curso, sem logo e sem imagem deles.
   Aula 1: como a prova funciona, a nota, as quatro notas parciais, um gosto de duas questões e o plano.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 1, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 1 OF 16', titulo: ['What Is', 'the Test?'], tema: 'The test, the score, the plan', placa: 'LESSON 01',
  lugarConversa: 'THE STUDY DESK', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'One hour, at home, on a computer. Today you learn how the test works, what the score means, and you try two real tasks with the clock.',
  chips: ['The test in 10 minutes', 'Two real tasks', 'Your plan'], botao: 'Start the lesson',
  nota: 'This course follows the test format of 2025–2026. Formats change: check the official website before you book.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · The Test in One Page', t: 'One hour. One score. Here is how it works.', p: 'Read the fact sheet out loud. Then answer the questions.' },
  { k: 'multipla', est: 'f', min: 6, img: 'capa', rot: 'II · True to the Test', t: 'Do you remember the facts?', p: 'Choose one answer. Then say why.' },
  { k: 'palavras', est: 'f', min: 5, img: 'conversa', rot: 'III · First Taste: Real or Fake?', t: 'Your first real task: real words only.', p: 'Tap only the real English words. The clock is the real one.' },
  { k: 'prova', est: 'o', min: 8, img: 'capa', rot: 'IV · First Taste: Read, Then Speak', t: 'Your second real task: speak with the clock.', p: '20 seconds to prepare. Then speak until the clock stops.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'THE TEST · FACT SHEET', tipo: 'nota',
  antes: { q: 'Why do people take an English test? Say two reasons.', h: 'To study abroad, to get a job, for a visa, to see their real level.' },
  texto: 'You take the test {at home}, on a computer, with a camera and a microphone. It takes {about one hour}.\nThe test is {adaptive}: when you answer well, the next question is harder. When you make mistakes, it is easier.\nYou get {one score from 10 to 160}, plus {four subscores}: Literacy (reading and writing), Comprehension (reading and listening), Conversation (listening and speaking) and Production (writing and speaking).\nAt the end, there is {a writing sample and a speaking sample}. They are not scored, but universities can see them.\nMost questions have {a clock}. The clock is part of the test: you learn to use it, not to fear it.',
  perguntas: [
    { q: 'Where do you take the test? How long is it?', h: 'At home, on a computer. About one hour.' },
    { q: 'What does “adaptive” mean here?', h: 'The questions get harder when you answer well, and easier when you make mistakes.' },
    { q: 'What are the four subscores?', h: 'Literacy, Comprehension, Conversation and Production.' },
    { q: 'Who sees the writing and speaking samples?', h: 'The universities. They are not scored, but they can read and watch them.' }],
  olha: 'The highlighted words are the six facts to remember. Close the sheet and say all six from memory.' };

var MULTIPLA = { rot: 'TRUE TO THE TEST', fim: 'Now you know the test better than most people who take it.', itens: [
  { q: 'The score goes from…', ops: ['0 to 100', '10 to 160', '1 to 9'], c: 1, por: 'One score from 10 to 160, plus four subscores.' },
  { q: 'You answer a question very well. The next question is probably…', ops: ['harder', 'the same', 'easier'], c: 0, por: 'The test is adaptive: good answers bring harder questions. A hard question is good news!' },
  { q: 'The writing sample and the speaking sample…', ops: ['are worth half the score', 'are not scored, but universities can see them', 'are optional'], c: 1, por: 'Not scored, but they go with your score. Write and speak as yourself, at your best.' },
  { q: 'Which subscore mixes listening and speaking?', ops: ['Literacy', 'Production', 'Conversation'], c: 2, por: 'Conversation = listening + speaking. Production = writing + speaking.' },
  { q: 'The clock is running and you have nothing more to say. Best idea?', ops: ['Stop and wait', 'Add one more detail or example', 'Repeat your first sentence'], c: 1, por: 'Use the time: one more detail, one more example, one more reason.' },
  { q: 'The format of the test…', ops: ['never changes', 'changes from time to time', 'is different for each country'], c: 1, por: 'It changed in 2025. Always check the official website before you book.' }] };

var PROVA = { rot: 'READ, THEN SPEAK', tarefas: [
  { k: 'A TASTE', tipo: 'fala', prep: 20, seg: 90, enun: 'Read the topic. You have 20 seconds to prepare. Then speak for 30 to 90 seconds.',
    texto: '<b>Talk about why you want to take an English test.</b><br>You can talk about: what the score is for (study, work, a visa); what part of English is easy for you; what part is still hard.',
    dica: 'Speak for at least 30 seconds. More is better, up to 90.',
    chips: ['The main reason is…', 'For me, the easy part is…', 'What is still hard is…', 'For example,…', 'That’s why…'],
    criterios: ['Spoke for 30 seconds or more', 'Answered all three parts', 'Gave one example', 'Kept going, with few long pauses'],
    modelo: 'The main reason is my master’s degree: I want to study design in Canada, and the university asks for an English score. For me, the easy part is reading, because I read a lot for work. What is still hard is speaking with a clock: I get nervous and I forget words. For example, in meetings I understand everything, but I answer in short sentences. That’s why I’m taking this course.' }] };

var PODE = [
  'I can explain how the test works: at home, one hour, adaptive.',
  'I can say what the score and the four subscores mean.',
  'I can do a Read and Select round with the clock.',
  'I can speak for 30 seconds or more about a topic, with 20 seconds to prepare.'
];

/* MECÂNICAS VARIADAS */
/* DET 01: leitura · multipla · palavras · prova */
var PALAVRAS = { seg: 60, dica: 'Fake words look real on purpose. If the student is not sure, ask: “Have you ever seen it?” Not sure? Leave it.', rodadas: [
  [['weather', 1], ['flomber', 0], ['journey', 1], ['borrow', 1], ['drimply', 0], ['honest', 1], ['sporcate', 0], ['thirsty', 1], ['neighbor', 1], ['blenter', 0], ['decide', 1], ['quistful', 0], ['quiet', 1], ['prenth', 0], ['knowledge', 1]]] };
