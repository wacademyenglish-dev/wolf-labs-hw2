/* ============================================================
   REVIEW · B1 · UNIT 7 · THE FACTORY TOUR · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: escada · tabuleiro · erros · escolha · pode.
   Unidade 7 (A voz passiva): a passiva no presente e no passado (is made, was built), com by e sem
   quem fez; present perfect passivo para notícia (has been found); have / get something done.
   O tabuleiro: o aluno é o guia da visita a uma fábrica de chocolate inventada (Cacau Lume) e conta
   cada etapa na passiva; uma casa é a notícia do dia, outra é o que a gente manda fazer.
   ============================================================ */
var REV = { nivel: 'B1', unidade: 7, titulo: ['The Factory', 'Tour'], tema: 'The passive', placa: 'CACAU LUME · SINCE 1952', lugarConversa: 'THE OLD BARBER SHOP', cor: '#e0a37a', cor2: '#f1d2bd',
  sub: 'Unit 7 review. Today you are the guide at Cacau Lume, a small chocolate factory. The visitors want to know how everything is made, and who made it.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escada', est: 'f', min: 8, img: 'conversa', rot: 'I · The Ladder', t: 'Climb from easy to hard.', p: 'Go one step at a time. Give a good answer and you go up.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'II · The Tour', t: 'Roll, move, explain each room.', p: 'Your teacher rolls the die. You are the guide: explain your square, out loud.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Factory Pairs', t: 'Five pairs from the chocolate factory.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'IT IS MADE', tema: 'present passive', t: 'Three things that are made or grown in your country.', ex: 'Coffee is grown in Minas, shoes are made in Franca, and cheese is produced everywhere!', trap: 'be + participle: “coffee grows” (it’s alive!) but “coffee is grown” (by farmers).' },
  { k: 'IT WAS BUILT', tema: 'past passive', t: 'A building or a monument in your city: when was it built? By whom?', ex: 'Our cathedral was built in 1910. It was designed by an Italian architect.', trap: '“It was build” → it was BUILT.' },
  { k: 'NOBODY’S NAME', tema: 'the passive when the person is not important', t: 'Change it: “Somebody stole my bike yesterday.” Then two more of your own.', ex: 'My bike was stolen yesterday. My car was washed. The pizza was delivered late!', trap: 'Not important who: no “by somebody”.' },
  { k: 'BY', tema: 'the passive with by', t: 'A famous song, a famous book, a famous painting: who were they made by?', ex: 'Garota de Ipanema was written by Tom Jobim. Mona Lisa was painted by Leonardo.', trap: 'The person who did it: by.' },
  { k: 'HAS BEEN FOUND', tema: 'present perfect passive for news', t: 'Read three headlines, like a TV reporter.', ex: 'A new planet has been found! The old bridge has been closed. A dog has been elected mayor!', trap: 'News now: has been + participle.' },
  { k: 'HAD IT DONE', tema: 'have / get something done', t: 'Three things you have done by other people, not by you.', ex: 'I have my hair cut every month, I get my car fixed at a garage, and I had my nails done last week.', trap: '“I cut my hair” = you did it yourself! I HAD my hair cut.' }
];

var PODE = [
  'I can say how things are made: it’s made of, it’s grown in.',
  'I can talk about the past with the passive: it was built in 1910.',
  'I can use by for the person who did it.',
  'I can give news: a planet has been found.',
  'I can say what I have done by others: I had my hair cut.'
];

/* MECÂNICAS VARIADAS */
/* B1 R7: escada · tabuleiro · erros · escolha */
var TABULEIRO = { rot: 'CACAU LUME', centro: 'You are the guide. Tell the visitors how it is done.', casas: [
  { k: 'THE DOOR', t: 'Welcome! Say when the factory was opened, and by whom.', ex: 'The factory was opened in 1952 by a family from Bahia.' },
  { k: 'THE BEANS', t: 'Where are the cacao beans grown? How are they brought here?', ex: 'They’re grown in Bahia, and they’re brought here by truck.' },
  { k: 'THE OVEN', t: 'Explain what happens to the beans in the oven.', ex: 'The beans are roasted for thirty minutes.' },
  { k: 'THE MACHINE', t: 'An old machine. When was it made? Is it still used?', ex: 'It was made in Germany in 1960, and it’s still used every day!' },
  { k: 'NEWS!', t: 'Read today’s factory news like a reporter.', ex: 'A new flavor has been created! It has been called “Night Mint”.' },
  { k: 'THE MOLDS', t: 'How is the chocolate shaped? Use is poured and is left.', ex: 'The chocolate is poured into molds and it’s left to cool.' },
  { k: 'A VISITOR', t: 'A visitor asks: “Is everything made by machines?” Answer.', ex: 'No! The boxes are still closed by hand.' },
  { k: 'THE WRAPPERS', t: 'The wrappers are beautiful. Who were they designed by?', ex: 'They were designed by a young artist from Recife.' },
  { k: 'THE ACCIDENT', t: 'Yesterday a box of chocolate disappeared. Say it with the passive.', ex: 'A box was stolen yesterday! Nobody knows who took it.' },
  { k: 'THE UNIFORM', t: 'The workers’ uniforms: who cleans them? Use have / get … done.', ex: 'They have their uniforms washed every night.' },
  { k: 'THE SHOP', t: 'How many bars are sold every day? Where are they sent?', ex: 'About two thousand bars are sold every day. Many are sent abroad.' },
  { k: 'GOODBYE', t: 'Give each visitor a gift. Say what it is made of.', ex: 'This is for you! It’s made of dark chocolate and coffee.' }] };
var ERROS = { tipo: 'nota', rot: 'THE TOUR LEAFLET · CACAU LUME', partes: ['Welcome to Cacau Lume! Our factory ', ['opened', 'was opened', 'Somebody opened it: was opened.'], ' in 1952. Our cacao ', ['is grow', 'is grown', 'be + participle.'], ' in Bahia. Every bar ', ['is make', 'is made', 'make, made, made.'], ' with love. The wrappers were designed ', ['from', 'by', 'The person: by.'], ' a young artist. Big news: a new flavor ', ['has created', 'has been created', 'News, passive: has been created.'], '! And yes, we still ', ['have washed our uniforms', 'have our uniforms washed', 'Done by others: have + thing + participle.'], ' every night.'] };
var ESCOLHA = [
  { a: 'visit a chocolate factory', b: 'visit a coffee farm', chips: ['I’d rather …', 'It’s grown / made …'], ex: 'The coffee farm! I want to see how coffee is grown.' },
  { a: 'a cake made by a famous chef', b: 'a cake made by your grandmother', chips: ['I’d choose the one made by …', 'because …'], ex: 'The one made by my grandmother. Nothing is better.' },
  { a: 'have your hair cut by a friend for free', b: 'get it done at a salon', chips: ['I’d have it done …', 'I’d rather …'], ex: 'At a salon. My friend isn’t good with scissors!' },
  { a: 'live in a house built in 1900', b: 'live in a house built last year', chips: ['A house that was built …', 'because …'], ex: 'One built in 1900. Old houses have stories.' }];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.', pares: [{ c: 'The factory was built in 1910.', x: 'The factory was build in 1910.', d: 'be + participle: was <b>built</b>.' }, { c: 'Cocoa is grown by farmers.', x: 'Cocoa grows by farmers.', d: 'Farmers do it, so the passive: is <b>grown</b> by farmers.' }, { c: 'The first bar was invented by Ana Lume.', x: 'The first bar was invented from Ana Lume.', d: 'Who did it? <b>by</b>.' }, { c: 'The oldest recipe has been found!', x: 'The oldest recipe has been find!', d: 'News now: has been + <b>found</b>.' }, { c: 'We had the machines checked last week.', x: 'We had the machines check last week.', d: 'Someone else did it: had + thing + <b>checked</b>.' }], nota: 'The passive is <b>be + participle</b>: is made, was built, has been found. Add <b>by</b> only when we care who did it. For a job someone does for you: <b>have</b> + thing + participle.', uso: { p: 'Your turn. You are the guide at a factory. Say three sentences about a product you know: how it is made, where, and by whom.', molde: ['It is made of …', 'It was invented in …', 'It is sold in …'], ex: 'Coffee is grown in Brazil. It is picked by hand. It was brought to Europe in the 1600s.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
