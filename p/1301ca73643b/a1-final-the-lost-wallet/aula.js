/* ============================================================
   REVIEW · A1 · UNIT 10 · THE LOST WALLET · THE A1 FINAL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js.
   Unidade 10 (Ontem e amanhã): was / were, there was / there were, a pergunta invertida; o passado
   com -ed e os irregulares; didn't + verbo puro, Did…?; am / is / are going to para planos;
   still / already / not … yet.
   É a ÚLTIMA revisão do livro A1: a missão fecha o livro e a cena VI (a ponte) mostra o livro A2.
   A missão: um café na hora de fechar. Uma carteira ficou numa mesa. O aluno, gerente, pergunta a três
   clientes de ontem; no fim conta à dona da carteira: “Ms. Lee was here at six. She didn’t see it.”
   ============================================================ */
var REV = { nivel: 'A1', unidade: 10, titulo: ['The Lost', 'Wallet'], tema: 'Yesterday and tomorrow', placa: 'THE A1 FINAL', lugarConversa: 'THE ROAD AHEAD', cor: '#c6f36b', cor2: '#e2fab5',
  sub: 'The last review of Book A1. A wallet was on a table at your café last night. Six doors, three customers, one happy ending, and a look at Book A2.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'missao', est: 'o', min: 14, img: 'capa', rot: 'II · The Lost Wallet', t: 'Whose wallet is it? Ask about last night.', p: 'Ask each customer five questions. Your teacher is the customer. Then call the owner of the wallet.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with first, then, after that, finally.' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'IV · Small Talk', t: 'Book A1 is almost done. Let’s talk.', p: 'Answer, then ask the question back: “And you?”' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Lost Wallet Card', t: 'Four lines from yesterday.', p: 'Read one line at a time. Then keep the card in the corner for the last page.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VI · I Can', t: 'Unit 10: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' },
  { k: 'ponte', est: 'l', min: 3, img: 'conversa', rot: 'VII · The Next Book', t: 'Book A1 is done. Here is Book A2.', p: 'Read the three cards out loud. Which one do you want first?' }
];

var PORTAS = [
  { k: 'WAS, WERE', tema: 'was / were', t: 'Where were you yesterday at 8 AM, at 1 PM and at 9 PM?', ex: 'At 8 AM I was at home. At 1 PM I was at work. At 9 PM I was in bed.', trap: 'I / he / she was; you / we / they were.' },
  { k: 'THERE WAS', tema: 'there was / there were', t: 'Your old school: two things there were, one thing there wasn’t.', ex: 'There was a big garden. There were two old computers. There wasn’t a library.', trap: '“Had a garden” → THERE WAS a garden.' },
  { k: 'YESTERDAY', tema: 'past simple: -ed and irregulars', t: 'Three things you did yesterday. One with -ed, two irregular.', ex: 'I worked. I went to the market. I ate pizza.', trap: 'go → went, eat → ate, have → had. “goed” → went.' },
  { k: 'DIDN’T', tema: 'didn’t + verb, Did…?', t: 'Two things you didn’t do yesterday. Then ask your teacher one “Did you…?”', ex: 'I didn’t cook. I didn’t watch TV. Did you go out?', trap: 'didn’t + verb with no -ed: “didn’t went” → didn’t go.' },
  { k: 'GOING TO', tema: 'going to for plans', t: 'Three plans for next weekend.', ex: 'I’m going to visit my mother. I’m going to sleep late. I’m not going to work!', trap: 'be + going to + verb: “I going to” → I’m going to.' },
  { k: 'ALREADY, YET', tema: 'still / already / not … yet', t: 'Three sentences: already, not yet, still.', ex: 'I already had lunch. I didn’t do my homework yet. I still drink coffee every morning.', trap: 'already in the middle, yet at the end.' }
];

var MISSAO = { pede: 'ABOUT LAST NIGHT · ASK FIVE QUESTIONS', quem: 'customer', depois: 'Call the owner',
  campos: [
    { c: 'onde', r: 'WHERE AT 6', q: 'Where were you yesterday at six?', f: 'Six o’clock, yesterday?' },
    { c: 'com', r: 'WITH', q: 'Who was with you?', f: 'With a friend?' },
    { c: 'fez', r: 'DID', q: 'What did you do here?', f: 'You ate? You drank?' },
    { c: 'viu', r: 'SAW IT?', q: 'Did you see a black wallet?', f: 'A black wallet: yes or no?' },
    { c: 'amanha', r: 'TOMORROW', q: 'What are you going to do tomorrow?', f: 'Tomorrow: your plan?' }],
  itens: [
    { k: 'CUSTOMER 1', tag: 'MS. LEE', ele: 'She', v: { onde: 'here, at the café', com: 'her sister', fez: 'drank a coffee', viu: 'no, she didn’t', amanha: 'going to come back' }, diz: '“I was here, at the café.” · “My sister was with me.” · “We drank a coffee and talked.” · “No, I didn’t see it.” · “I’m going to come back tomorrow!”' },
    { k: 'CUSTOMER 2', tag: 'MR. COSTA', ele: 'He', v: { onde: 'at home', com: 'nobody', fez: 'nothing here: he wasn’t here', viu: 'no, he didn’t', amanha: 'going to work' }, diz: '“At six? I was at home.” · “Nobody. I was alone.” · “Nothing! I wasn’t here yesterday.” · “No, I didn’t.” · “I’m going to work all day.”' },
    { k: 'CUSTOMER 3', tag: 'DANI', ele: 'She', v: { onde: 'here, at the table by the window', com: 'her colleague', fez: 'had a cake and worked', viu: 'yes! on the table at 7', amanha: 'going to call the owner' }, diz: '“I was here, at the table by the window.” · “My colleague was with me.” · “We had a cake and worked on our laptops.” · “Yes! There was a black wallet on the next table at seven.” · “I’m going to call you tomorrow, OK?”' }],
  relato: { titulo: 'THE OWNER CALLS · WHAT HAPPENED?',
    pede: function () { return 'Hello! It’s my wallet. I was at your café last night. Did anybody see it?'; },
    chips: function (x) { return [x.tag.charAt(0) + x.tag.slice(1).toLowerCase() + ' was …', x.ele + ' was with …', x.ele + ' didn’t see …', x.ele + ' saw it at …', x.ele + '’s going to …']; },
    modelo: function (x) { var v = x.v, e = x.ele, n = x.tag.charAt(0) + x.tag.slice(1).toLowerCase(); return n + ' was ' + v.onde + ' with ' + v.com + '. ' + (v.viu.indexOf('yes') === 0 ? e + ' saw your wallet on the table at seven. It’s here, at the café!' : e + ' didn’t see your wallet.') + ' Tomorrow ' + e.toLowerCase() + '’s ' + v.amanha + '.'; } },
  nao: { did: '“She didn’t saw it” → she didn’t SEE it.', was: '“They was here” → they WERE here.', going: '“I going to come” → I’M going to come.' },
  fim: 'The wallet goes home. was / were, did / didn’t and going to: all of Unit 10, and all of Book A1, in one night.' };

var CARTAO = { ph: 'Last weekend I was at the beach with my family.\nWe swam and we ate fish.\nI didn’t check my email!\nNext weekend I’m going to stay at home and read.', rot: 'My weekends',
  chips: ['Last weekend I was ', 'We ', ' went ', ' ate ', 'I didn’t ', 'There was ', 'Next weekend I’m going to ', 'I already '],
  perg: ['YOUR WEEKENDS', 'Where were you? What did you do? What didn’t you do? What are you going to do?'],
  exemploRot: 'LAST AND NEXT', exemplo: [['WHERE', 'at the beach'], ['WITH', 'my family'], ['DID', 'swam, ate fish'], ['DIDN’T', 'check my email'], ['NEXT', 'going to stay home']],
  modelo: 'Last weekend I was at the beach with my family.<br>We swam and we ate fish. I didn’t check my email!<br>Next weekend I’m going to stay at home and read.' };

var CONVERSA = [
  { q: 'Where were you on your last birthday?', f: 'Your last birthday: where?', voce: ['I was …', 'I was with …'], ex: 'I was at a restaurant with my friends.' },
  { q: 'What did you do last night?', f: 'Last night?', voce: ['I …ed / I went …', 'I didn’t …'], ex: 'I cooked dinner and I watched a movie.' },
  { q: 'Did you travel this year?', f: 'Travel this year?', voce: ['Yes, I did. I went to …', 'No, I didn’t. I’m going to …'], ex: 'No, I didn’t. I’m going to travel in July.' },
  { q: 'What are you going to do after this class?', f: 'After class?', voce: ['I’m going to …', 'I’m not going to …'], ex: 'I’m going to have lunch and walk my dog.' },
  { q: 'What was your favorite lesson in Book A1?', f: 'Your favorite lesson?', voce: ['My favorite was …', 'because …'], ex: 'The hotel one, because I was the receptionist!' }
];

var PODE = [
  'I can say where I was: I was at home, they were at work.',
  'I can say there was / there were.',
  'I can talk about yesterday with -ed and irregular verbs.',
  'I can say didn’t + verb and ask Did you…?',
  'I can talk about plans with going to.'
];

var PONTE = { nivel: 'A2', titulo: 'Book 2 · Tell, compare, plan',
  itens: [
    ['STORIES', 'I was walking home when it started to rain.', 'Tell what was happening when something happened.'],
    ['EXPERIENCES', 'Have you ever eaten sushi?', 'Talk about the things you did in your life.'],
    ['PLANS AND RULES', 'If it rains, I’ll stay home. You should try it!', 'Make plans, give advice, follow the rules.']],
  fim: 'Book A1 is complete. Congratulations! Book A2 starts with the stories of your life.' };

/* MECÂNICAS VARIADAS */
var ORDEM = { rot: 'LAST NIGHT AT THE CAFÉ', pede: 'Tap the cards in the right order.', chips: ['First,', 'Then,', 'After that,', 'Finally,'], modelo: 'First, Dani and her colleague arrived at six. Then they had a cake. After that, Dani saw a black wallet. Finally, she called the café in the morning.',
  passos: ['Dani and her colleague arrived at six.', 'They had a cake and worked.', 'Dani saw a black wallet on the next table.', 'The café closed at ten.', 'In the morning, Dani called the café.', 'The owner got her wallet back!'] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep from Unit 10.', rotulo: 'Yesterday and tomorrow', linhas: ['I / he / she <b>was</b> · you / we / they <b>were</b> · <b>there was</b> a wallet', 'yesterday I <b>went</b>, <b>ate</b>, <b>had</b> · not “goed”', 'she <b>didn’t</b> see it · <b>Did</b> you see it? · the verb stays clean', 'I’m <b>going to</b> call her · <b>already</b> in the middle · <b>yet</b> at the end'], uso: { p: 'Your turn. You are the manager. Tell the owner where a customer was, what she did, and what you are going to do.', molde: ['She was …', 'She didn’t …', 'I’m going to …'], ex: 'Ms. Lee was here at six. She didn’t see it. I’m going to call her tonight.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
