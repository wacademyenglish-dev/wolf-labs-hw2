/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 1 · LESSON 3 OF 12 · YOUR PRICE IS TOO HIGH · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   Preço e escopo sem pedir desculpa: What problem does this solve? Here’s what’s included. If…, I could…
   Vídeo The Futur (0:00–1:50, a conversa sobre valor). Áudios: clientes (edge-tts). Clientes FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 3, kick: 'ENGLISH FOR DESIGNERS · MODULE 1 · LESSON 3 OF 12', titulo: ['Your Price Is', 'Too High'], tema: 'Talking about price and scope without apologizing', placa: 'LESSON 3',
  lugarConversa: 'THE NEGOTIATION', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: '“That’s a bit expensive.” The sentence every designer hears. Today you learn to talk about value, change the scope instead of the price, and say it all calmly, in English.',
  chips: ['Value, not cost', 'Confident or sorry?', 'Four clients on the phone'], botao: 'Start the lesson',
  nota: 'If they don’t meet you at your price, you don’t have to meet them at their deliverable: a smaller scope is a good answer.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · What Is It Worth?', t: 'A designer asks about value before price.', p: 'One question before, then the video, then the questions.' },
  { k: 'separa', est: 'f', min: 9, img: 'capa', rot: 'II · Confident or Sorry?', t: 'Which answer keeps your value?', p: 'Read each answer out loud. Is it confident or apologetic?' },
  { k: 'prova', est: 'o', min: 16, img: 'conversa', rot: 'III · Four Clients on the Phone', t: 'Four clients, four price objections.', p: 'Play the client, start the clock, answer in about 40 seconds.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'RFk8ZmIDrFM', titulo: 'When Client Says “Your Price Is Too High”: Role Play', fonte: 'THE FUTUR · 0:00–1:50', inicio: 0, fim: 110,
  antes: { q: 'A client says: “I have $1,000.” What questions could you ask before you say yes or no?', h: 'What problem does this solve? Why is it important? What result do you want?' },
  ouvir: 'Listen: What questions does Chris ask about the budget and the business?',
  perguntas: [
    { q: 'What does the client want, and what is the budget?', h: 'A video, like the ones on Chris’s website. The budget is $1,000.' },
    { q: 'What problem does the client want to solve?', h: 'Awareness: no one is walking into the store.' },
    { q: 'How many new customers does he want?', h: 'Two or three more people a day.' },
    { q: 'How much new revenue could that be in a month?', h: 'About $250 a day, times 30: $7,500 a month.' },
    { q: 'Why does Chris do this math?', h: 'To compare the price with the value: is $1,000 a lot for $7,500 a month?' }],
  fecho: 'Ask about the problem and the result first. Then the price is compared with the value, not with another designer.' };

var SEPARA = { rot: 'CONFIDENT OR SORRY?', a: 'CONFIDENT', b: 'APOLOGETIC', fim: 'Explain the value, offer options, keep a calm voice. No “sorry” for your price.', itens: [
  ['“Sorry, I know it’s expensive…”', 'b', 'You agree that it’s too much before they say it.'],
  ['“Here’s what’s included in that price.”', 'a', 'You show the value.'],
  ['“I can do it cheaper if you want, no problem.”', 'b', 'Same work, less money: your price was never real.'],
  ['“If the budget is $1,000, I could do the logo only, without the posters.”', 'a', 'Change the scope, not the price.'],
  ['“What would a great result mean for your business?”', 'a', 'Talk about value.'],
  ['“Other designers charge more, I promise.”', 'b', 'Comparing and promising sounds defensive.'],
  ['“I understand. Let’s look at a few options.”', 'a', 'Calm, and it moves the conversation forward.'],
  ['“Um… okay… what can you pay?”', 'b', 'You give away control of the price.'],
  ['“My rate for this kind of project starts at $3,000.”', 'a', 'Clear, simple, no excuses.'],
  ['“I’m just starting, so it’s not very good anyway.”', 'b', 'Never sell your work down.']] };

var PROVA = { rot: 'FOUR CLIENTS ON THE PHONE', tarefas: [
  { k: 'CLIENT 1', tipo: 'fala', seg: 40, audio: 'pr1.mp3', ouve: 'Hi! I loved your proposal, but three thousand dollars is a bit much for a logo, don’t you think?', enun: 'Listen. Explain the value without apologizing.',
    chips: ['I understand.', 'Here’s what’s included:', 'It’s not just a logo,', 'It will help you…'],
    criterios: ['No “sorry” for the price', 'Explained what’s included', 'Connected it to the client’s goal', 'Calm, friendly voice'],
    modelo: 'I understand. It’s not just a logo: it includes three concepts, two rounds of revisions, the files for print and web, and a simple brand guide, so everything looks consistent. It will help you look as professional as you are.' },
  { k: 'CLIENT 2', tipo: 'fala', seg: 40, audio: 'pr2.mp3', ouve: 'Look, my budget is only one thousand. Can you do the whole website for that?', enun: 'Listen. Offer a smaller scope.',
    chips: ['With a budget of…,', 'I could…', 'and then later we could…', 'Would that work for you?'],
    criterios: ['Didn’t lower the price', 'Offered a smaller scope', 'Gave a next step', 'Asked a question at the end'],
    modelo: 'With a budget of one thousand, I could design a one-page website with your main information and a contact form. Then, when you’re ready, we could add the shop and the blog. Would that work for you?' },
  { k: 'CLIENT 3', tipo: 'fala', seg: 40, audio: 'pr3.mp3', ouve: 'I found another designer online who does it for two hundred dollars. Why should I pay you more?', enun: 'Listen. Answer without criticizing the other designer.',
    chips: ['That’s a fair question.', 'What I offer is…', 'The difference is…', 'It’s your choice, of course.'],
    criterios: ['Didn’t criticize the other designer', 'Explained the difference (process, research, support)', 'Stayed calm and confident'],
    modelo: 'That’s a fair question. What I offer is a process: I research your customers and competitors, I design for your goals, and I support you after the launch. If that matters to you, I’m the right person. If you only need a quick file, the other option may be fine. It’s your choice, of course.' },
  { k: 'CLIENT 4', tipo: 'fala', seg: 40, audio: 'pr4.mp3', ouve: 'Can you just give me a discount? You know, for a long-term relationship.', enun: 'Listen. Say no to the discount, but offer something else.',
    chips: ['I’d love to work together long-term.', 'I keep my rates the same for all clients, but…', 'What I can do is…'],
    criterios: ['Said no politely', 'Offered an alternative (scope, payment plan, package)', 'Kept the relationship positive'],
    modelo: 'I’d love to work together long-term. I keep my rates the same for all my clients, but what I can do is offer a package: if you book the logo and the social media templates together, the templates come with an extra round of revisions.' }] };

var PODE = [
  'I can ask about the problem and the result before I talk about price.',
  'I can explain what’s included in my price without apologizing.',
  'I can offer a smaller scope instead of a lower price.',
  'I can say no to a discount and keep the client happy.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 03: video · separa · prova (áudio) (os dados estão no topo do aula.js) */
