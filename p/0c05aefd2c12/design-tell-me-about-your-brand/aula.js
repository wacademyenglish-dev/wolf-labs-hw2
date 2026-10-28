/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 1 · LESSON 1 OF 12 · TELL ME ABOUT YOUR BRAND · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+): gráfico, UX e interiores.
   O briefing: perguntas abertas (Can you tell me about…? What are you hoping to…? Who is it for?).
   Vídeo WebFX (0:35–3:12), sem o trecho do telefone da agência. Empresas e pessoas FICTÍCIAS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 1, kick: 'ENGLISH FOR DESIGNERS · MODULE 1 · LESSON 1 OF 12', titulo: ['Tell Me About', 'Your Brand'], tema: 'The first client meeting: open questions for a brief', placa: 'LESSON 1',
  lugarConversa: 'THE STUDIO', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: 'A new client, a blank brief and thirty minutes. Today you learn the questions that turn “I want something modern” into a project you can actually design.',
  chips: ['Ten brief questions', 'Open, not closed', 'Your first client call'], botao: 'Start the lesson',
  nota: 'First, choose your area: graphic design, UX or interiors. Your teacher will adapt the examples to your work.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · Before the Brief', t: 'Ten questions to ask a new client.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'II · Open the Door', t: 'Questions that make the client talk.', p: 'Compare A and B. Which one gets a better answer? Why?' },
  { k: 'cadeira', est: 'o', min: 16, img: 'conversa', rot: 'III · Your First Client Call', t: 'Your teacher is the client. You ask.', p: 'Ask each question. Listen, take notes, react.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'cJrpeLgW_Wc', titulo: '10 Questions to Ask a Client Before Creating a Design Brief', fonte: 'WEBFX · 0:35–3:12', inicio: 35, fim: 192,
  antes: { q: 'A new client says: “I need a new logo.” What do you need to know before you start? Say four things.', h: 'What the company does, who the customers are, the budget, the deadline, what they like and don’t like.' },
  ouvir: 'Listen: Write down as many of the ten questions as you can.',
  perguntas: [
    { q: 'What is the first question, and why is it important?', h: '“Can you tell me about your company?” You need to know their market, their industry and their competitors.' },
    { q: 'What does he say about the target audience?', h: 'You want to know the age of the typical customer, their income and other information about them.' },
    { q: 'Why ask “What exists already?”', h: 'The client may have brand guidelines, colors or a logo that you must follow.' },
    { q: 'Why ask what designs the client doesn’t like?', h: 'It shows you what to avoid, and it saves you from many revisions.' },
    { q: 'What does the last question (the workflow) cover?', h: 'Who approves the work, what hours they can work with you, and how you will communicate.' }],
  fecho: 'Company, goals, audience, deliverables, what exists, what “good” means, budget, likes, dislikes, workflow. Ten questions, one clear brief.' };

var DESCOBRE = {
  pares: [
    { a: '{Can you tell me about} your company?', b: '{Is your company} good?', q: 'Which question gets a better answer?', r: '<b>Can you tell me about…?</b> is open: the client talks, and you learn. A yes/no question stops the conversation.' },
    { a: 'What {are you hoping to} achieve with the new website?', b: 'What {are you hoping} achieve with the new website?', q: 'Which one is correct?', r: '<b>hoping to + verb</b>: What are you hoping to achieve? What are you hoping to change?' },
    { a: '{Who is it for?}', b: '{For who is it?}', q: 'Which one sounds natural?', r: '<b>Who is it for?</b> In questions, the preposition usually goes at the end: Who is it for? What is it for?' },
    { a: 'What {don’t you like} about your current logo?', b: 'What {you don’t like} about your current logo?', q: 'Which question is right?', r: 'Question order: <b>What don’t you like…?</b> (auxiliary before the subject).' }],
  regra: [['OPEN', 'Can you tell me about…? / Could you walk me through…?'], ['GOALS', 'What are you hoping to achieve / change / avoid?'], ['AUDIENCE', 'Who is it for? Who are your customers?'], ['LIKES', 'What do you like / don’t you like about…?']],
  armas: [['OPEN', 'Do you have customers?', 'Who are your customers?', 'open, not yes/no'], ['HOPING TO', 'What are you hoping achieve?', 'What are you hoping to achieve?', 'hoping to + verb'], ['END PREPOSITION', 'For who is the app?', 'Who is the app for?', 'preposition at the end'], ['WORD ORDER', 'What you want to change?', 'What do you want to change?', 'do / does / did']] };

var CADEIRA = { itens: [
  { alvo: 'Open the call and thank the client.', dica: 'Thanks for your time. Can you tell me a bit about your company?', resp: 'Sure. We’re Bloom & Bean, a small coffee shop with two locations.' },
  { alvo: 'Ask what they want you to produce.', dica: 'What would you like me to design?', resp: 'A new logo and a menu. Maybe the sign outside, too.' },
  { alvo: 'Ask about their goals.', dica: 'What are you hoping to achieve with the new design?', resp: 'We want to look more modern and attract younger customers.' },
  { alvo: 'Ask about the audience.', dica: 'Who are your customers? Who is it for?', resp: 'Students and people who work from home, mostly 20 to 35.' },
  { alvo: 'Ask what exists already.', dica: 'Do you have any brand guidelines, colors or fonts already?', resp: 'Just the old logo. Green and brown. Nobody likes it.' },
  { alvo: 'Ask what they don’t like.', dica: 'What don’t you like about the current logo?', resp: 'It looks old-fashioned. And the font is hard to read.' },
  { alvo: 'Ask about designs they love.', dica: 'Are there any designs you really like? What do you like about them?', resp: 'I love simple, warm brands, with lots of space.' },
  { alvo: 'Ask about competitors.', dica: 'Who are your main competitors?', resp: 'A big chain across the street and a new bakery.' },
  { alvo: 'Ask about the budget, politely.', dica: 'Do you have a budget in mind for this project?', resp: 'Around three thousand dollars for everything.' },
  { alvo: 'Ask about the deadline and approval.', dica: 'When do you need it, and who will approve the final design?', resp: 'In six weeks, for our anniversary. My partner and I decide together.' },
  { alvo: 'Close the call.', dica: 'Great. I’ll send you a short brief by Friday so we can check everything.', resp: 'Perfect, thank you!' }] };

var PODE = [
  'I can open a client meeting with open questions.',
  'I can ask about goals: What are you hoping to achieve?',
  'I can ask about the audience, what exists, likes and dislikes.',
  'I can ask about budget, deadline and approval politely.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 01: video · descobre · cadeira (os dados estão no topo do aula.js) */
