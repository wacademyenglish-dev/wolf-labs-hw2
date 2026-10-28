/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 3 · LESSON 8 OF 12 · CAN WE MAKE THE LOGO BIGGER? · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   Receber feedback e discordar com educação: I see where you’re coming from, but…, What if we…?, Let me show you…
   Sem vídeo (o do plano não permite incorporação). Áudios: clientes (edge-tts). Clientes FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 8, kick: 'ENGLISH FOR DESIGNERS · MODULE 3 · LESSON 8 OF 12', titulo: ['Can We Make the', 'Logo Bigger?'], tema: 'Receiving feedback and disagreeing politely', placa: 'LESSON 8',
  lugarConversa: 'THE CLIENT CALL', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: 'The client wants the logo bigger, the text in red and “just one more” photo. Today you learn to receive feedback calmly, find the real problem, and disagree without losing the client.',
  chips: ['Five clients, five comments', 'From blunt to polite', 'Say no, kindly'], botao: 'Start the lesson',
  nota: 'Behind “make the logo bigger” there is usually a real worry: “people won’t remember us”. Find the worry, then solve it your way.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'multipla', est: 'l', min: 10, img: 'conversa', rot: 'I · Five Client Comments', t: 'Listen to each client. Choose the best answer.', p: 'Play the comment. Read the three answers. Which one is best?' },
  { k: 'transforma', est: 'f', min: 12, img: 'capa', rot: 'II · From Blunt to Polite', t: 'Same opinion, better words.', p: 'Read the too-direct answer and the clue. Say it the professional way.' },
  { k: 'prova', est: 'o', min: 14, img: 'conversa', rot: 'III · Say No, Kindly', t: 'Two clients ask for changes you disagree with.', p: 'Read the card, prepare, start the clock, answer.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var MULTIPLA = { rot: 'FIVE CLIENT COMMENTS', fim: 'Thank, ask why, then propose: the client feels heard and the design stays good.', itens: [
  { audio: 'lb1.mp3', ouve: 'I like it, but can we make the logo bigger? Like, much bigger?', q: 'What is the best first answer?', ops: ['No, that would look terrible.', 'Sure, I’ll make it three times bigger.', 'I see. Can I ask what worries you about the size now?'], c: 2, por: 'Ask about the worry first. Maybe the real problem is visibility.' },
  { audio: 'lb2.mp3', ouve: 'My wife thinks the green is a bit boring. Can we try red?', q: 'What is the best answer?', ops: ['Thanks for sharing that. We chose green because it feels fresh, but I can show you a warmer green and a red next to each other.', 'Your wife isn’t the designer.', 'Okay, red.'], c: 0, por: 'Thank, explain the reason, offer to compare options.' },
  { audio: 'lb3.mp3', ouve: 'Can you add all our twelve services on the home page? People need to see everything.', q: 'What is the best answer?', ops: ['That’s impossible.', 'I understand you want people to see what you offer. What if we show the top three and add a “See all services” button?', 'Fine, but it will look bad.'], c: 1, por: 'Name the goal, then propose a better way with “What if…?”.' },
  { audio: 'lb4.mp3', ouve: 'Honestly, I don’t love it. I can’t explain why.', q: 'What is the best answer?', ops: ['Then I can’t help you.', 'Let’s start over from zero.', 'That’s okay. Let’s go part by part. How do you feel about the colors? And the font?'], c: 2, por: 'Help the client find the words: break it into parts.' },
  { audio: 'lb5.mp3', ouve: 'This is great. Just one tiny change: can you redo the whole menu in a different style?', q: 'What is the best answer?', ops: ['Happy to look at it. That’s a bigger change than it sounds, so it’s outside the two revisions we agreed. I can send you a quote for it.', 'No problem, I’ll do it for free.', 'That’s not a tiny change!'], c: 0, por: 'Positive, honest about the scope, and a clear next step.' }] };

var TRANSFORMA = { rot: 'FROM BLUNT TO POLITE', fim: 'Thank → understand → reason → option. You can disagree and still be on the same team.', itens: [
  { de: 'No, that’s a bad idea.', pista: 'I see where you’re coming from, but…', para: 'I see where you’re coming from, but a bigger logo might make the page feel crowded.' },
  { de: 'You’re wrong about the font.', pista: 'I understand. The reason we chose… is…', para: 'I understand. The reason we chose this font is that it’s easier to read on small screens.' },
  { de: 'I’m not doing that.', pista: 'What if we…? That way,…', para: 'What if we make the logo a bit bigger only on the cover? That way, the inside pages stay clean.' },
  { de: 'Trust me, it looks better.', pista: 'Let me show you… side by side.', para: 'Let me show you both versions side by side, so you can compare.' },
  { de: 'Fine. Whatever you want.', pista: 'Happy to try it. Can we test…?', para: 'Happy to try it. Can we test both versions with a few customers first?' },
  { de: 'That will cost more.', pista: 'That’s outside the scope we agreed, so…', para: 'That’s outside the scope we agreed, so I’ll send you a quick quote for it.' }] };

var PROVA = { rot: 'SAY NO, KINDLY', tarefas: [
  { k: 'CLIENT 1 · GRAPHIC OR UX', tipo: 'fala', prep: 40, seg: 60, enun: 'Read the card. Answer the client politely, but keep your design.',
    texto: '<b>A bakery website (fictional).</b> The client says: “Can we put a big flashing banner with our discounts at the top? And the logo much bigger?” You think it will look cheap and push the “Order now” button down.',
    chips: ['Thanks for…', 'I see where you’re coming from.', 'The thing is,…', 'What if we…?', 'That way,…', 'Would you like to see…?'],
    criterios: ['Thanked and showed understanding', 'Gave a reason based on the user / the goal', 'Offered an alternative', 'Ended with a question'],
    modelo: 'Thanks for the idea. I see where you’re coming from: you want people to notice the discounts. The thing is, a flashing banner might push the “Order now” button down and make the site feel less premium. What if we add a small, calm discount label next to the products? That way, people see it when they’re choosing. Would you like to see both versions?' },
  { k: 'CLIENT 2 · INTERIORS', tipo: 'fala', prep: 40, seg: 60, enun: 'Read the card. Answer the client politely and propose another option.',
    texto: '<b>A small apartment (fictional).</b> The client wants to paint all the walls dark brown and add a big dining table for ten people. The room is 20 square meters, and they usually eat alone or with one friend.',
    chips: ['I love that you want…', 'My only concern is…', 'Since you usually…', 'What if we…?', 'We could also…'],
    criterios: ['Started with something positive', 'Explained the concern clearly', 'Connected it to the client’s life', 'Offered a creative alternative'],
    modelo: 'I love that you want a warm, cozy feeling. My only concern is that dark brown on every wall might make a 20-square-meter room feel smaller. Since you usually eat alone or with a friend, what if we choose an extendable table for four that opens for parties? We could also paint just one wall brown, as a feature wall.' }] };

var PODE = [
  'I can receive feedback calmly and ask about the real worry.',
  'I can disagree politely: I see where you’re coming from, but…',
  'I can propose alternatives with What if we…? and That way,…',
  'I can say when a change is outside the agreed scope.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 08: multipla (áudio) · transforma · prova (os dados estão no topo do aula.js) */
