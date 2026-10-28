/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 7 OF 16 · INTERACTIVE LISTENING · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: uma conversa em várias falas; o aluno escolhe a melhor resposta a cada fala, completa notas a partir
   do que ouviu (Listen and Complete, novo em julho de 2025) e escreve um resumo da conversa (cerca de 75 s).
   Áudios: edge-tts, professor americano, colega britânica, recado de voz americano.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 7, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 7 OF 16', titulo: ['Interactive', 'Listening'], tema: 'Answer like a real person', placa: 'LESSON 07',
  lugarConversa: 'THE CAMPUS AT NIGHT', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'Someone talks to you on campus. You choose the best answer, turn after turn. Then you complete notes and write a short summary.',
  chips: ['Two conversations', 'Listen and complete', 'Summarize it'], botao: 'Start the lesson',
  nota: 'The best answer is what a real person would say next: it answers the question AND keeps the conversation going.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'multipla', est: 'l', min: 14, img: 'conversa', rot: 'I · Two Conversations', t: 'What would you say next?', p: 'Listen to each line. Choose the best answer. Say it out loud.' },
  { k: 'lacunas', est: 'l', min: 8, img: 'capa', rot: 'II · Listen and Complete', t: 'A voice message. Complete the notes.', p: 'Play the message. Then complete the notes with the missing letters.' },
  { k: 'prova', est: 'w', min: 8, img: 'conversa', rot: 'III · Summarize It', t: 'Write what happened, in a few sentences.', p: 'You have 75 seconds. Who, what problem, what solution.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var MULTIPLA = { rot: 'INTERACTIVE LISTENING', fim: 'In the test, you hear each line once. Answer the question, then move the conversation on.', itens: [
  { audio: 'il1.mp3', ouve: 'Hi, come in. You wanted to talk about the essay?', q: 'Professor Hayes, in his office. Choose the best answer.', ops: ['Yes. I wanted to ask if I could have a few more days.', 'No, the essay is easy.', 'I am a student in your class.'], c: 0, por: 'It answers (yes) and says why you came.' },
  { audio: 'il2.mp3', ouve: 'I see. What happened?', q: 'Choose the best answer.', ops: ['My essay is on the table.', 'I was sick last week, and I couldn’t finish the research.', 'What happened to you?'], c: 1, por: 'He asks what happened: give a reason.' },
  { audio: 'il3.mp3', ouve: 'Okay, that’s fine. Can you send it to me by Monday?', q: 'Choose the best answer.', ops: ['I don’t like Mondays.', 'Monday is the first day of the week.', 'Yes, Monday works. Thank you so much.'], c: 2, por: 'Accept the deadline and thank him: a polite ending.' },
  { audio: 'il4.mp3', ouve: 'Hey! Are you coming to the study group tonight?', q: 'Sophie, a classmate, in the cafe. Choose the best answer.', ops: ['I went yesterday.', 'I’d love to, but I have to work tonight. Is there another one this week?', 'The study group is a group of students.'], c: 1, por: 'A polite no, a reason, and a question to keep talking.' },
  { audio: 'il5.mp3', ouve: 'Yes, there’s one on Thursday at six, in the library.', q: 'Choose the best answer.', ops: ['Great, I’ll be there. Should I bring anything?', 'The library is very big.', 'I was in the library on Thursday.'], c: 0, por: 'Say yes and ask a useful question.' },
  { audio: 'il6.mp3', ouve: 'Just your notes from chapter four.', q: 'Choose the best answer.', ops: ['Chapter four is long.', 'My notes are mine.', 'Perfect. See you on Thursday, then!'], c: 2, por: 'End the conversation in a friendly way.' }] };

var LACUNAS = { rot: 'LISTEN AND COMPLETE', item: 'MESSAGE', dica: 'Play the message once before the student looks at the notes. Second play: complete. Third play: check.', fim: 'Notes complete. In the test, the clock is short: write while you listen.', textos: [
  { k: 'A VOICE MESSAGE FROM MAYA', audio: 'ln1.mp3', t: 'Study group moved to {Thu|rsday}, at {s|ix} o’clock.\nPlace: room {twe|lve}, in the {lib|rary}.\nBring: notes from chapter {fo|ur} and a {calcu|lator}.' }] };

var PROVA = { rot: 'SUMMARIZE THE CONVERSATION', tarefas: [
  { k: 'THE PROFESSOR', tipo: 'escrita', seg: 75, enun: 'Write a summary of your conversation with Professor Hayes. You have 75 seconds.',
    dica: 'Three sentences are enough: who, the problem, the solution.',
    criterios: ['Said who talked (a student and a professor)', 'Said the problem (sick, the essay was late)', 'Said the solution and the deadline (Monday)', 'Used the past tense correctly'],
    modelo: 'A student talked to Professor Hayes about the essay. The student was sick last week and could not finish the research, so they asked for more time. The professor agreed, and the student has to send the essay by Monday.' }] };

var PODE = [
  'I can choose the answer a real person would say next.',
  'I can say no politely and move the conversation on.',
  'I can complete notes from a voice message: day, time, place.',
  'I can summarize a conversation: who, the problem, the solution.'
];

/* MECÂNICAS VARIADAS */
/* DET 07: multipla · lacunas · prova (os dados estão no topo do aula.js) */
