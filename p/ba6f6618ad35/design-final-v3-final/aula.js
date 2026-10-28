/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 3 · LESSON 9 OF 12 · FINAL_V3_FINAL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   Revisões e prazos: will have + particípio, by / until, round of revisions, sign off, status update por e-mail.
   Sem vídeo. Projeto e pessoas FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 9, kick: 'ENGLISH FOR DESIGNERS · MODULE 3 · LESSON 9 OF 12', titulo: ['Final_v3', '_FINAL'], tema: 'Revisions, deadlines and status updates', placa: 'LESSON 9',
  lugarConversa: 'THE PROJECT INBOX', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: 'Version 3. Final. Final final. Today you learn to manage revisions and deadlines in English: clear emails, honest dates, and the future perfect that every project manager loves.',
  chips: ['A project email thread', 'By or until?', 'Will have done by Friday'], botao: 'Start the lesson',
  nota: '“I’ll have sent it by Friday” is a promise about a finished action before a time. Use it only when you are sure.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · The Email Thread', t: 'A designer and a client agree on the last changes.', p: 'Read the emails out loud. Then answer the questions.' },
  { k: 'separa', est: 'f', min: 9, img: 'capa', rot: 'II · By or Until?', t: 'Two small words, two different meanings.', p: 'Read each sentence. Does it need BY or UNTIL?' },
  { k: 'transforma', est: 'w', min: 14, img: 'conversa', rot: 'III · Your Status Update', t: 'Turn a to-do list into a clear update.', p: 'Read the task and the clue. Say the sentence. Then write the full update.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'EMAIL THREAD · RIVERSIDE BOOK FESTIVAL POSTERS (FICTIONAL)', tipo: 'nota',
  antes: { q: 'How many rounds of revisions do you usually include in a project?', h: 'Many designers include two rounds; extra rounds are charged.' },
  texto: 'CLIENT (Tom): Hi Lia, we love version 2! {Just a few small changes}: can the date be bigger, and can we add the sponsor logos at the bottom?\nDESIGNER (Lia): Hi Tom, great to hear! {This will be our second and final round of revisions}, as agreed in the proposal. {Could you send me} the sponsor logos {by} Wednesday?\nCLIENT (Tom): Sure. Also, the printer needs the files on Monday morning.\nDESIGNER (Lia): No problem. {I’ll have finished} the changes {by} Thursday evening, so you’ll have two days to check. {Once you sign off}, {I’ll send} the print files.\nCLIENT (Tom): Perfect. I’m out of the office {until} Thursday, but I’ll check on Friday.\nDESIGNER (Lia): Great. {Just a heads-up}: any changes after Friday {might delay} the printing. Have a good week!',
  perguntas: [
    { q: 'What changes does Tom ask for?', h: 'A bigger date and the sponsor logos at the bottom.' },
    { q: 'How many rounds of revisions were in the proposal?', h: 'Two: this is the second and final round.' },
    { q: 'What does Lia need, and by when?', h: 'The sponsor logos, by Wednesday.' },
    { q: 'What is the plan for Thursday, Friday and Monday?', h: 'Lia finishes the changes by Thursday evening; Tom checks and signs off on Friday; the printer gets the files on Monday morning.' }],
  olha: 'The highlighted phrases manage a project: a round of revisions · Could you send me… by…? · I’ll have finished… by… · Once you sign off · until · Just a heads-up · might delay. Notice: BY = no later than; UNTIL = all the time up to.' };

var SEPARA = { rot: 'BY OR UNTIL?', a: 'BY', b: 'UNTIL', fim: 'BY = a deadline (no later than). UNTIL = a situation that continues up to a time.', itens: [
  ['Please send me your feedback ___ Friday.', 'a', 'A deadline: no later than Friday.'],
  ['I’m on vacation ___ the 15th.', 'b', 'The vacation continues up to the 15th.'],
  ['I’ll have finished the logo ___ Monday.', 'a', 'will have finished + by: completed before a time.'],
  ['The office is closed ___ January 3.', 'b', 'Closed all the time up to January 3.'],
  ['We need the photos ___ 5 p.m.', 'a', 'Deadline.'],
  ['You can make changes ___ we send the files to the printer.', 'b', 'Changes are possible all the time up to that moment.'],
  ['The client has to sign off ___ the end of the month.', 'a', 'Deadline.'],
  ['Let’s wait ___ the client replies.', 'b', 'Continue waiting up to that moment.']] };

var TRANSFORMA = { rot: 'YOUR STATUS UPDATE', fim: 'Done → in progress → will have done by → I need… by… That’s a status update.', itens: [
  { de: 'DONE: the homepage design', pista: 'I’ve finished…', para: 'I’ve finished the homepage design.' },
  { de: 'IN PROGRESS: the mobile version', pista: 'I’m currently working on…', para: 'I’m currently working on the mobile version.' },
  { de: 'BY WEDNESDAY: the mobile version complete', pista: 'I’ll have finished… by…', para: 'I’ll have finished the mobile version by Wednesday.' },
  { de: 'NEED FROM CLIENT: the product photos, Tuesday', pista: 'Could you send me… by…?', para: 'Could you send me the product photos by Tuesday?' },
  { de: 'RISK: late photos = late launch', pista: 'Just a heads-up: if…, it might…', para: 'Just a heads-up: if the photos arrive late, it might delay the launch.' },
  { de: 'NEXT: final files after approval', pista: 'Once you sign off, I’ll…', para: 'Once you sign off, I’ll send you the final files.' }] };

var PODE = [
  'I can write clear emails about revisions and deadlines.',
  'I can use by and until correctly.',
  'I can promise a finished action: I’ll have finished it by Friday.',
  'I can write a short status update: done, in progress, next, risks.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 09: leitura · separa · transforma (os dados estão no topo do aula.js) */
