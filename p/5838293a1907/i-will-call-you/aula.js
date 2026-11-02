/* ============================================================
   I WILL CALL YOU · B1 · UNIT 3 (BEFORE AND AFTER) · LIVE CLASS  16/10/2026
   Aula nova do livro B1 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: will para promessas (I'll call you, I won't forget), ofertas (I'll carry it) e decisões na hora
   (OK, I'll take the bus) × going to para planos já feitos (I'm going to wear the blue dress).
   Shall I…? para oferecer. O mundo: a véspera do casamento da Bia; tudo dá errado e todo mundo se oferece.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 3, titulo: ['I Will', 'Call You'], tema: 'Promises, offers and decisions.',
  sub: 'It’s the night before Bia’s wedding. The cake is late, the flowers are wrong and the DJ is sick. Read the friends’ chat, sort the promises from the plans, and save the wedding.',
  placa: 'THE NIGHT BEFORE', lugarConversa: 'THE KITCHEN, 11 PM', cor: '#c9b8ff', cor2: '#e4dcff',
  chips: ['I’ll do it!', 'I’m going to…', 'Shall I…?'], botao: 'Start the lesson', nota: 'Decided right now: I’ll get it. Decided before: I’m going to wear the blue dress.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · The Wedding Chat', t: 'Eleven p.m. Three problems.', p: 'Read the chat out loud with your teacher. Then look closer.' },
  { k: 'separa', est: 'f', min: 8, img: 'capa', rot: 'II · Now or Before?', t: 'Decided now, or planned before?', p: 'Read each sentence. Is it WILL (now: promise, offer, decision) or GOING TO (a plan)? Say why, then tap.' },
  { k: 'cadeira', est: 'o', min: 10, img: 'conversa', rot: 'III · Save the Wedding', t: 'Your teacher is Bia. Offer help!', p: 'Bia tells you a problem. Offer help or make a promise with will or Shall I…?' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say what you will do.' }
];
var PORTAS = [];

var LEITURA = { rot: 'GROUP · BIA’S WEDDING TEAM · 11:04 PM', tipo: 'chat',
  antes: { q: 'Have you ever helped to organize a party or a wedding? What went wrong?', h: 'Yes! The music didn’t work and we used a phone.' },
  texto: 'BIA: Help! The bakery says the cake is late. It won’t be ready until noon.\nRAFA: Don’t worry. {I’ll pick} it up at noon. {I promise}.\nBIA: And the flowers are yellow. I wanted white!\nCAMILA: {I’ll call} the florist first thing tomorrow. {Shall I} send her a photo?\nBIA: Yes please. AND the DJ is sick.\nLEO: OK… {I’ll play} the music. I have a great playlist.\nBIA: Leo, you{’re going to} be a guest! You{’re going to} wear a suit!\nLEO: {I’ll wear} the suit AND play the music. {I won’t} dance, {I promise}.\nBIA: You are the best friends in the world. I{’m going to} cry.',
  perguntas: [
    { q: 'What are the three problems?', h: 'The cake is late, the flowers are yellow, and the DJ is sick.' },
    { q: 'What does Rafa promise?', h: 'To pick up the cake at noon.' },
    { q: 'What does Camila offer?', h: 'To call the florist and send her a photo.' },
    { q: 'What does Leo decide? What does he promise?', h: 'To play the music in his suit. He promises not to dance.' }],
  olha: 'Find the promises, offers and quick decisions. Then find the plans that Bia already made. Which form does each one use?' };

var SEPARA = { rot: 'WILL OR GOING TO?', a: 'WILL (DECIDED NOW)', b: 'GOING TO (A PLAN)', fim: 'A promise, an offer or a decision at this moment: will. A plan made before: going to.', itens: [
  ['The cake is late? Don’t worry, I’ll pick it up.', 'a', 'A decision and offer at this moment.'],
  ['Leo is going to wear his grey suit.', 'b', 'A plan: he bought the suit last month.'],
  ['I won’t dance, I promise.', 'a', 'A promise.'],
  ['We’re going to get married at 4 p.m.', 'b', 'The plan of the wedding.'],
  ['The phone is ringing. I’ll get it!', 'a', 'Decided right now.'],
  ['Shall I send her a photo?', 'a', 'An offer: Shall I…?'],
  ['Bia’s going to wear her grandmother’s ring.', 'b', 'Planned a long time ago.'],
  ['OK, I’ll call the florist first thing.', 'a', 'A quick decision and a promise.']] };

var CADEIRA = { itens: [
  { alvo: 'Bia says: “The cake is late!” Offer help.', dica: 'Don’t worry, I’ll pick it up.', resp: 'Really? Thank you! At noon?' },
  { alvo: 'Make a promise about the time.', dica: 'I promise I’ll be there at noon.', resp: 'OK. And the flowers are yellow…' },
  { alvo: 'Offer with Shall I…?', dica: 'Shall I call the florist?', resp: 'Yes, please! She opens at eight.' },
  { alvo: 'Bia says: “I have nothing for my hair.” Decide now.', dica: 'I’ll lend you my clips. I’ll bring them tomorrow.', resp: 'You’re a star.' },
  { alvo: 'Ask about her plans for tomorrow morning.', dica: 'What are you going to do in the morning?', resp: 'I’m going to have breakfast with my mom and then the hairdresser.' },
  { alvo: 'Promise something NOT to do.', dica: 'I won’t be late. / I won’t cry… much.', resp: 'Ha! You will cry. Everybody will cry.' }] };

var ESCOLHA = [
  { a: 'be the DJ at a wedding', b: 'make the wedding cake', chips: ['I’ll …', 'because …'], ex: 'I’ll be the DJ! I can’t bake.' },
  { a: 'a big wedding with 300 guests', b: 'a small party with 20 friends', chips: ['If I get married, I’m going to …', 'because …'], ex: 'A small party. I’m going to invite only my real friends.' },
  { a: 'the phone rings at midnight: answer it', b: 'let it ring', chips: ['I’ll …', 'because …'], ex: 'I’ll answer it. It can be important.' },
  { a: 'promise to help and arrive early', b: 'promise nothing and surprise them', chips: ['I’ll …', 'because …'], ex: 'I’ll promise and arrive early. A promise is a promise.' }];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* B1 · I Will Call You: leitura · separa · cadeira · escolha */
