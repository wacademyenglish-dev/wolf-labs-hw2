/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 1 · LESSON 2 OF 12 · SO WHAT YOU'RE SAYING IS… · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   Confirmar e esclarecer: When you say “modern”, do you mean…? So what you’re saying is… Just to clarify…
   Vídeo Abi Connick (3:58–5:53, a direção criativa). Cliente FICTÍCIO.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 2, kick: 'ENGLISH FOR DESIGNERS · MODULE 1 · LESSON 2 OF 12', titulo: ['So What You’re', 'Saying Is…'], tema: 'Clarifying and confirming what the client wants', placa: 'LESSON 2',
  lugarConversa: 'THE MOOD BOARD', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: '“Make it modern. Clean. But fun.” Clients use words that can mean many things. Today you learn to ask what they really mean, and to write it in the brief.',
  chips: ['Creative direction', 'Vague words, clear questions', 'Write the brief'], botao: 'Start the lesson',
  nota: 'Clarifying is not a sign of weak English. It’s what good designers do in any language.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · Creative Direction', t: 'A brand designer’s questions about the look.', p: 'One question before, then the video, then the questions.' },
  { k: 'transforma', est: 'f', min: 10, img: 'capa', rot: 'II · What Do You Mean by…?', t: 'Turn a vague word into a clear question.', p: 'Read what the client said and the clue. Ask the clarifying question.' },
  { k: 'formulario', est: 'w', min: 14, img: 'conversa', rot: 'III · Write the Brief', t: 'Turn the client’s email into a brief.', p: 'Read the email. Fill in the brief in short, clear English.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'kS5jGXKVzB4', titulo: 'SECRET Questions Pro Designers Ask Their Clients', fonte: 'ABI CONNICK · 3:58–5:53', inicio: 238, fim: 353,
  antes: { q: 'A client sends you a mood board with 40 images. What do you ask them?', h: 'What exactly do you like in each image? What don’t you like? Which three are your favorites?' },
  ouvir: 'Listen: Write down the five creative direction questions.',
  perguntas: [
    { q: 'Why ask about the client’s vision?', h: 'So the designer can guide and steer them to the best option. Their wishes may be personal preference; the designer’s job is to make it timeless.' },
    { q: 'What does she ask about the mood board (Pinterest board)?', h: 'What exactly they like, and what they dislike, picking individual parts.' },
    { q: 'Why ask for words that describe the desired look?', h: 'Some clients aren’t visual people and get confused with their mood board; words help compare.' },
    { q: 'What does she ask if there is an existing brand?', h: '“Why isn’t it working?” What they don’t like and what the goal of the rebrand is.' },
    { q: 'Which question did she forget once, and why does it matter?', h: 'Icons or symbols the client wants (or doesn’t want). It helps you not design something they didn’t want.' }],
  fecho: 'Vision, the mood board in detail, describing words, what isn’t working, symbols. Then you check: “So what you’re saying is…”.' };

var TRANSFORMA = { rot: 'WHAT DO YOU MEAN BY…?', fim: 'Vague word → specific question → confirm. You save hours of revisions.', itens: [
  { de: 'CLIENT: “I want it to look modern.”', pista: 'When you say “modern”, do you mean… or…?', para: 'When you say “modern”, do you mean minimal and simple, or bold and colorful?' },
  { de: 'CLIENT: “Make it pop.”', pista: 'Could you show me an example of…?', para: 'Could you show me an example of something that “pops” for you?' },
  { de: 'CLIENT: “The app feels confusing.”', pista: 'Which part…? What were you trying to do?', para: 'Which part feels confusing? What were you trying to do when it happened?' },
  { de: 'CLIENT: “We want a cozy living room, but not too cozy.”', pista: 'Just to clarify, …?', para: 'Just to clarify, you want it warm and comfortable, but still open and light?' },
  { de: 'CLIENT: “I need it soon.”', pista: 'What date do you have in mind?', para: 'What date do you have in mind for the final version?' },
  { de: 'CLIENT: talks for five minutes about colors, fonts and the old logo.', pista: 'So what you’re saying is…, right?', para: 'So what you’re saying is: you like the green, but the font needs to be more modern, right?' }] };

var FORMULARIO = { rot: 'DESIGN BRIEF · NORTHWIND YOGA (FICTIONAL)', perfilRot: 'THE CLIENT’S EMAIL',
  perfil: '<p>Hi! I’m <b>Mara Quinn</b> from <b>Northwind Yoga</b>, a small studio with <b>two locations</b>.</p><p>We need a <b>new logo</b> and <b>class schedule posters</b>. Our old logo looks like a <b>bank</b>, haha.</p><p>Our students are mostly <b>women from 30 to 50</b> who want to slow down after work.</p><p>I’d like it to feel <b>calm and natural</b>, but not boring. I love <b>earthy colors</b>. Please <b>no lotus flowers</b>, every studio uses them!</p><p>We open our third studio on <b>March 10</b>, so we need everything <b>by March 1</b>. Our budget is <b>$2,500</b>.</p>',
  fim: 'Short, clear notes. Now confirm it with the client: “So what you’re saying is…”',
  campos: [
    { r: 'Client / company *', ph: '', aceita: ['Northwind Yoga', 'Mara Quinn, Northwind Yoga', 'Northwind Yoga, Mara Quinn', 'Mara Quinn - Northwind Yoga', 'Mara Quinn (Northwind Yoga)'] },
    { r: 'Deliverables *', ph: '', aceita: ['Logo and posters', 'A new logo and class schedule posters', 'New logo and class schedule posters', 'Logo and class schedule posters', 'New logo and posters', 'Logo, posters'] },
    { r: 'Audience *', ph: '', aceita: ['Women from 30 to 50', 'Women 30 to 50', 'Women 30-50', 'Women aged 30 to 50', 'Women from 30 to 50 who want to slow down after work'] },
    { r: 'Look and feel *', ph: '', aceita: ['Calm and natural', 'Calm, natural', 'Calm and natural, not boring', 'Calm and natural, but not boring', 'Calm, natural, earthy colors', 'Calm and natural, earthy colors'] },
    { r: 'Avoid *', ph: '', aceita: ['Lotus flowers', 'No lotus flowers', 'Lotus flower', 'A lotus', 'Lotus'] },
    { r: 'Deadline *', ph: '', aceita: ['March 1', 'By March 1', '1 March', 'March 1st', 'March first'] },
    { r: 'Budget *', ph: '', aceita: ['$2,500', '$2500', '2,500', '2500', '2,500 dollars', '2500 dollars', 'US$ 2,500'] }] };

var PODE = [
  'I can ask the client what a vague word means.',
  'I can ask about the mood board: what exactly they like and don’t like.',
  'I can confirm with “So what you’re saying is…” and “Just to clarify…”.',
  'I can turn a client’s email into a short, clear brief.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 02: video · transforma · formulario (os dados estão no topo do aula.js) */
