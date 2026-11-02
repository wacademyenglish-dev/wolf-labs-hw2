/* ============================================================
   REVIEW · A2 · UNIT 2 · THE LOCAL PAPER · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: bingo · missao · ordem · cadeira · pode.
   Unidade 2 (A história no passado): past simple regular e irregular, did / didn't + verbo puro;
   pergunta de sujeito (Who called…?) × de objeto (Who did you call?); first, then, after that,
   finally; and then, so, because.
   A missão: o jornal do bairro. O aluno é repórter; três testemunhas contam o que aconteceu ontem;
   no fim ele dita a notícia para a editora.
   ============================================================ */
var REV = { nivel: 'A2', unidade: 2, titulo: ['The Local', 'Paper'], tema: 'Stories in the past', placa: 'THE DAILY NEWS', lugarConversa: 'MAIN STREET', cor: '#e8b86a', cor2: '#f6d9a6',
  sub: 'Unit 2 review. You are a reporter for the neighborhood paper. Something happened yesterday, and three people saw it. Find the story.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'I · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a line, across, down or diagonal, is a BINGO.' },
  { k: 'missao', est: 'o', min: 14, img: 'capa', rot: 'II · The Local Paper', t: 'Three people saw something yesterday. Interview them.', p: 'Ask each person five questions. Your teacher is the person. Then dictate the story to your editor.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [];

var MISSAO = { pede: 'THE INTERVIEW · ASK FIVE QUESTIONS', quem: 'person', depois: 'Call your editor',
  campos: [
    { c: 'onde', r: 'WHERE', q: 'Where were you yesterday afternoon?', f: 'Yesterday: where?' },
    { c: 'viu', r: 'SAW', q: 'What did you see?', f: 'You saw…?' },
    { c: 'primeiro', r: 'FIRST', q: 'What happened first?', f: 'First?' },
    { c: 'quem', r: 'WHO CALLED', q: 'Who called for help?', f: 'Who called?' },
    { c: 'depois', r: 'IN THE END', q: 'And what happened in the end?', f: 'The end?' }],
  itens: [
    { k: 'WITNESS 1', tag: 'THE CAT ON THE ROOF', ele: 'She', v: { onde: 'in her garden', viu: 'a cat on the church roof', primeiro: 'the cat cried for hours', quem: 'the baker called the firefighters', depois: 'a firefighter climbed up and saved it' }, diz: '“I was in my garden.” · “I saw a cat on the church roof!” · “First, the cat cried for hours.” · “The baker called the firefighters.” · “In the end, a firefighter climbed up and saved it.”' },
    { k: 'WITNESS 2', tag: 'THE OLD COINS', ele: 'He', v: { onde: 'at the new park', viu: 'kids with an old box', primeiro: 'a boy found a box in the ground', quem: 'his mother called the museum', depois: 'the museum took the coins' }, diz: '“I was at the new park.” · “I saw some kids with an old box.” · “First, a boy found the box in the ground.” · “His mother called the museum.” · “In the end, the museum took the coins. They’re 200 years old!”' },
    { k: 'WITNESS 3', tag: 'THE WEDDING CAKE', ele: 'He', v: { onde: 'outside the bakery', viu: 'a huge cake on the sidewalk', primeiro: 'the van stopped too fast', quem: 'nobody called; everybody laughed', depois: 'the baker made a new cake in two hours' }, diz: '“I was outside the bakery.” · “I saw a huge cake on the sidewalk!” · “First, the van stopped too fast and the cake fell.” · “Nobody called anyone. Everybody laughed.” · “In the end, the baker made a new cake in two hours.”' }],
  relato: { titulo: 'THE EDITOR CALLS · DICTATE THE STORY',
    pede: function (x) { return 'I need the story about ' + x.tag.toLowerCase() + '. What happened?'; },
    chips: function () { return ['Yesterday afternoon, …', 'First, …', 'Then, …', 'After that, …', 'Finally, …', 'so / because …']; },
    modelo: function (x) { var v = x.v; return 'Yesterday afternoon, a witness was ' + v.onde + '. First, ' + v.primeiro + '. Then ' + v.quem + '. Finally, ' + v.depois + '.'; } },
  nao: { did: '“Who did call the firefighters?” → WHO CALLED the firefighters? (subject: no did)', went: '“He didn’t went” → he didn’t GO.', after: '“After, he climbed” → AFTER THAT, he climbed.' },
  fim: 'Three witnesses, one front page. The past, Who called…?, and first / then / finally: all of Unit 2 in the newsroom.' };

var PODE = [
  'I can tell what happened yesterday: regular and irregular verbs.',
  'I can say didn’t + verb and ask Did you…?',
  'I can ask Who called? (subject) and Who did you call? (object).',
  'I can tell a story in order: first, then, after that, finally.',
  'I can join ideas with and then, so and because.'
];

/* MECÂNICAS VARIADAS */
/* A2 R2: bingo · missao · ordem · cadeira */
var BINGO = [['go → past', 'went'], ['Did you sleep well? (short answer)', 'Yes, I did. / No, I didn’t.'], ['Yesterday I ___ (not / watch) TV.', 'didn’t watch'], ['Who ___ you? (call, subject)', 'Who called you?'], ['buy → past', 'bought'], ['First, … Then, … (your morning)', 'First, I had coffee. Then, I took the bus.'], ['Where ___ you go last weekend?', 'did'], ['so or because: I was tired, ___ I slept.', 'so'], ['meet → past', 'met']];
var ORDEM = { rot: 'THE CAT ON THE ROOF', pede: 'Tap the events in the right order.', chips: ['First,', 'Then,', 'After that,', 'Finally,'],
  modelo: 'First, a cat climbed onto the church roof. Then it cried for hours. After that, the baker called the firefighters. Finally, a firefighter climbed up and saved it, and everybody clapped.',
  passos: ['A cat climbed onto the church roof.', 'It cried for hours.', 'The baker heard it.', 'He called the firefighters.', 'A firefighter climbed up and saved the cat.', 'Everybody clapped.'] };
var CADEIRA = { itens: [
  { alvo: 'Ask me where I went last weekend.', dica: 'Where did you go last weekend?', resp: 'I went to the beach.' },
  { alvo: 'Ask me who went with me.', dica: 'Who went with you?', resp: 'My brother went with me.' },
  { alvo: 'Ask me what I ate.', dica: 'What did you eat?', resp: 'We ate fish and rice.' },
  { alvo: 'Ask me something I didn’t do.', dica: 'Did you swim?', resp: 'No, I didn’t. The water was cold!' },
  { alvo: 'Ask me who called me yesterday.', dica: 'Who called you yesterday?', resp: 'My mother called me, of course.' }] };
var PORTAS = [];
