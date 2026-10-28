/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 4 · LESSON 12 OF 12 · THE PITCH · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   Projeto final: apresentar um projeto do briefing à entrega e responder às perguntas do “cliente”.
   Sem vídeo. Projeto modelo FICTÍCIO.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 12, kick: 'ENGLISH FOR DESIGNERS · MODULE 4 · LESSON 12 OF 12', titulo: ['The', 'Pitch'], tema: 'Final project: present a project from brief to delivery', placa: 'LESSON 12',
  lugarConversa: 'THE BIG MEETING', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: 'The last lesson. One project, your project, from the first client call to the final files, and then the questions. Everything you practiced, in one pitch.',
  chips: ['A model pitch', 'Step by step with the client', 'Your final pitch'], botao: 'Start the lesson',
  nota: 'A great pitch is a story: the client had a problem, you understood it, you made choices for a reason, and something changed.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · A Model Pitch', t: 'An interior designer presents a project to a new client.', p: 'Read it out loud like a presenter. Then answer the questions.' },
  { k: 'cadeira', est: 'o', min: 14, img: 'capa', rot: 'II · Step by Step With the Client', t: 'Your teacher is the client. You present your project.', p: 'Follow the steps. Your teacher reacts and asks questions as the client.' },
  { k: 'prova', est: 'o', min: 18, img: 'conversa', rot: 'III · Your Final Pitch', t: 'Three minutes. Then the questions.', p: 'Prepare, start the clock, pitch your project from brief to delivery.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 12: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'PITCH · A HOME OFFICE FOR A NIGHT NURSE (FICTIONAL)', tipo: 'fala',
  antes: { q: 'What does a client want to hear first when you present a past project?', h: 'Who it was for, what the problem was, and what changed for them.' },
  texto: 'DESIGNER: Thanks for having me. {I’d like to show you} a project I’m really proud of.\nDESIGNER: {The client was} a night nurse who needed to study at home during the day. {The problem was that} her apartment was dark and she couldn’t focus.\nDESIGNER: {In our first call, I asked} what she was hoping to change. She said, “I want to feel awake, but calm.” {So I asked}: “When you say calm, do you mean quiet colors or less stuff?” She meant both.\nDESIGNER: {We chose} a soft greenish white for the walls {so that} the room feels bright without glare, and {we moved} the desk next to the window {to} use the daylight.\nDESIGNER: {She wanted} a big bookcase, but {my only concern was} the space. {So we went with} floating shelves.\nDESIGNER: {We had} two rounds of revisions and {I delivered} the final plan two days early.\nDESIGNER: {As a result}, she now studies three hours a day at home, and she passed her exam last month. {Happy to answer any questions.}',
  perguntas: [
    { q: 'Who was the client, and what was the problem?', h: 'A night nurse who studies during the day; the apartment was dark and she couldn’t focus.' },
    { q: 'How did the designer clarify “calm”?', h: '“When you say calm, do you mean quiet colors or less stuff?”' },
    { q: 'What were two decisions and their reasons?', h: 'Greenish white walls so the room feels bright without glare; desk by the window to use the daylight.' },
    { q: 'How did she say no to the big bookcase?', h: '“My only concern was the space”, and she proposed floating shelves.' }],
  olha: 'The highlighted phrases come from the whole course: the brief, clarifying, decision + reason, polite disagreement, revisions and deadlines, the result. A pitch is all of them together.' };

var CADEIRA = { itens: [
  { alvo: 'Open the pitch.', dica: 'Thanks for having me. I’d like to show you a project I’m really proud of.', resp: 'Great, go ahead!' },
  { alvo: 'Say who the client was and your role.', dica: 'The client was… My role was…', resp: 'Okay. And what did they need?' },
  { alvo: 'Explain the problem and the goal.', dica: 'The problem was that… The goal was to…', resp: 'Interesting. How did you find out what they really wanted?' },
  { alvo: 'Tell one question you asked in the brief.', dica: 'In our first call, I asked… / When they said…, I asked…', resp: 'Smart. Then what did you design?' },
  { alvo: 'Present one decision and the reason.', dica: 'We chose… because… / We moved… so that…', resp: 'Hmm, I’m not sure I like that color, to be honest.' },
  { alvo: 'Answer the opinion politely.', dica: 'Yes, I’m glad you brought that up. The reason we chose it is…', resp: 'Okay, that makes sense. Did the client ask for changes?' },
  { alvo: 'Talk about feedback and revisions.', dica: 'They asked for… My only concern was… so we…', resp: 'And did you deliver on time?' },
  { alvo: 'Talk about the deadline and delivery.', dica: 'We had … rounds of revisions, and I delivered…', resp: 'Good. So, what changed for the client?' },
  { alvo: 'Give the result.', dica: 'As a result,…', resp: 'Impressive. What would you do differently?' },
  { alvo: 'Reflect honestly.', dica: 'If I did it again, I would…', resp: 'Thank you, this was really clear.' }] };

var PROVA = { rot: 'YOUR FINAL PITCH', tarefas: [
  { k: 'YOUR PROJECT · FROM BRIEF TO DELIVERY', tipo: 'fala', prep: 90, seg: 180, enun: 'Pitch a project of your own (graphic, UX or interiors). Three minutes. Then your teacher asks two questions.',
    texto: '<b>Your pitch, in this order:</b> the client and your role · the problem and the goal · one brief question you asked · two decisions with reasons · one change the client asked for and how you answered · revisions and delivery · the result · what you would do differently. <b>No project yet?</b> Use the bakery rebrand, the library app, or the night nurse’s home office.',
    chips: ['I’d like to show you…', 'The client was… My role was…', 'The problem was that…', 'In our first call, I asked…', 'We chose… because…', 'My only concern was…, so…', 'I delivered…', 'As a result,…', 'If I did it again, I would…'],
    criterios: ['A clear story in order', 'Decisions with reasons (because, so that, to)', 'Polite language for feedback and disagreement', 'A result and a reflection', 'Answered the questions calmly'],
    modelo: 'Use the model pitch (I · A Model Pitch) as the shape. What matters most: a real problem, your choices with reasons, and what changed for the client.' }] };

var PODE = [
  'I can pitch a design project from brief to delivery in English.',
  'I can explain my decisions and answer opinions politely.',
  'I can talk about revisions, deadlines and results.',
  'I can answer a client’s questions calmly, without preparing every word.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 12: leitura · cadeira · prova (os dados estão no topo do aula.js) */
