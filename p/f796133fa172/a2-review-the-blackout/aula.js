/* ============================================================
   REVIEW · A2 · UNIT 3 · THE BLACKOUT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: memoria · missao · erros · conversa · pode.
   Unidade 3 (O que estava acontecendo): past continuous (was / were + -ing, a pergunta); past continuous
   × past simple (when / while); used to (e did … use to); would para hábito no passado.
   A missão: a luz do prédio acabou ontem às nove da noite. O aluno é o síndico e pergunta a três
   vizinhos; no fim conta para a companhia de luz: “At nine she was cooking when the lights went out.”
   ============================================================ */
var REV = { nivel: 'A2', unidade: 3, titulo: ['The', 'Blackout'], tema: 'What was happening', placa: 'BUILDING NOTICE', lugarConversa: 'OLD PHOTOS', cor: '#f0c97a', cor2: '#f8e3b8',
  sub: 'Unit 3 review. Last night at nine, the lights went out in your building. You are the building manager. What was everybody doing?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'I · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'missao', est: 'o', min: 14, img: 'capa', rot: 'II · The Blackout', t: 'Three neighbors. Where were they at nine?', p: 'Ask each neighbor five questions. Your teacher is the neighbor. Then call the electric company.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'conversa', est: 'o', min: 8, img: 'conversa', rot: 'IV · Small Talk', t: 'Old photos on the shelf. Let’s talk.', p: 'Answer, then ask the question back: “And you?”' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Blackout Pairs', t: 'Five pairs from the blackout.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'NINE O’CLOCK · ASK FIVE QUESTIONS', quem: 'neighbor', depois: 'Call the electric company',
  campos: [
    { c: 'onde', r: 'WHERE AT 9', q: 'Where were you at nine o’clock?', f: 'At nine: where?' },
    { c: 'fazia', r: 'WAS DOING', q: 'What were you doing when the lights went out?', f: 'What were you doing?' },
    { c: 'com', r: 'WITH', q: 'Who was with you? What were they doing?', f: 'Who was with you?' },
    { c: 'depois', r: 'THEN', q: 'What did you do then?', f: 'Then what did you do?' },
    { c: 'antes', r: 'USED TO', q: 'Did you use to have problems like this?', f: 'Before: problems?' }],
  itens: [
    { k: 'NEIGHBOR 1', tag: 'APARTMENT 2B', ele: 'She', v: { onde: 'in her kitchen', fazia: 'cooking pasta', com: 'her son: he was doing homework', depois: 'found some candles', antes: 'yes, the lights used to go out every week' }, diz: '“I was in my kitchen.” · “I was cooking pasta!” · “My son was with me. He was doing his homework.” · “I found some candles.” · “Yes. The lights used to go out every week.”' },
    { k: 'NEIGHBOR 2', tag: 'APARTMENT 5A', ele: 'He', v: { onde: 'in the elevator!', fazia: 'going up to the fifth floor', com: 'nobody: he was alone', depois: 'called for help and waited', antes: 'no, he didn’t use to take the elevator' }, diz: '“I was in the elevator!” · “I was going up to the fifth floor.” · “Nobody. I was alone.” · “I called for help and waited for twenty minutes.” · “No. I didn’t use to take the elevator. I used to take the stairs!”' },
    { k: 'NEIGHBOR 3', tag: 'APARTMENT 7C', ele: 'She', v: { onde: 'in the living room', fazia: 'watching the big game', com: 'friends: they were eating pizza', depois: 'listened to the game on the radio', antes: 'when she was a kid, they would play cards in the dark' }, diz: '“I was in the living room.” · “We were watching the big game!” · “Three friends were with me. They were eating pizza.” · “We listened to the game on the radio.” · “When I was a kid, we would play cards in the dark. It was fun!”' }],
  relato: { titulo: 'THE ELECTRIC COMPANY · WHAT HAPPENED AT NINE?',
    pede: function (x) { return 'Good evening. What was happening in ' + x.tag.toLowerCase() + ' at nine?'; },
    chips: function (x) { return ['At nine, ' + x.ele.toLowerCase() + ' was …ing', 'when the lights went out.', 'While ' + x.ele.toLowerCase() + ' was …ing, …', 'Then ' + x.ele.toLowerCase() + ' …', 'used to …']; },
    modelo: function (x) { var v = x.v, e = x.ele; return 'At nine, ' + e.toLowerCase() + ' was ' + v.onde + '. ' + e + ' was ' + v.fazia + ' when the lights went out. Then ' + e.toLowerCase() + ' ' + v.depois + '.'; } },
  nao: { were: '“She were cooking” → she WAS cooking.', ing: '“I was cook when…” → I was COOKING when…', use: '“I use to live here” (past) → I USED to live here.' },
  fim: 'Three neighbors, one dark night. was …ing, when / while, used to and would: all of Unit 3 in the building.' };

var CONVERSA = [
  { q: 'What were you doing yesterday at eight PM?', f: 'Yesterday, 8 PM?', voce: ['I was …ing.', 'I was at …'], ex: 'I was having dinner with my family.' },
  { q: 'Where did you use to live when you were a child?', f: 'As a child: where?', voce: ['I used to live in …', 'We used to …'], ex: 'I used to live in a small town near the sea.' },
  { q: 'What would you do on Sundays when you were a kid?', f: 'Sundays as a kid?', voce: ['We would …', 'My family would …'], ex: 'We would visit my grandma and eat cake.' },
  { q: 'Tell me about a problem you had while you were working.', f: 'Something went wrong?', voce: ['I was …ing when …', 'While I was …ing, …'], ex: 'I was presenting when my computer stopped!' },
  { q: 'Is there something you used to do, but you don’t do now?', f: 'Before yes, now no?', voce: ['I used to …, but now …', 'I didn’t use to …'], ex: 'I used to play football, but now I run.' }
];

var PODE = [
  'I can say what was happening: I was cooking, they were sleeping.',
  'I can ask: What were you doing at nine?',
  'I can join two actions: I was cooking when the lights went out.',
  'I can talk about the past with used to / didn’t use to.',
  'I can tell old habits with would: we would play cards.'
];

/* MECÂNICAS VARIADAS */
/* A2 R3: memoria · missao · erros · conversa */
var PARES = [
  ['I was cooking', 'when the lights went out.', 'I was cooking when the lights went out.'],
  ['While she was reading,', 'the phone rang.', 'While she was reading, the phone rang.'],
  ['I used to', 'live in a small town.', 'I used to live in a small town, but now I live in a big city.'],
  ['Every summer we would', 'swim in the river.', 'Every summer we would swim in the river.'],
  ['What were you', 'doing at nine?', 'What were you doing at nine last night?'],
  ['They weren’t', 'sleeping.', 'They weren’t sleeping. They were playing cards.']];
var ERROS = { tipo: 'chat', rot: 'A MESSAGE FROM APARTMENT 4D', partes: ['Hi! Last night I ', ['were watching', 'was watching', 'I was (not were).'], ' a movie when the lights ', ['go out', 'went out', 'The short action: past simple.'], '. My kids ', ['was sleeping', 'were sleeping', 'They were.'], ', so they didn’t notice. I ', ['use to', 'used to', 'In the past: used to.'], ' keep candles in the kitchen, but now I don’t. While I ', ['was look', 'was looking', 'was + -ing.'], ' for my phone, the lights came back!'] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.', pares: [{ c: 'She was cooking at nine.', x: 'She were cooking at nine.', d: 'she / he / it: <b>was</b>. you / we / they: were.' }, { c: 'I was cooking when the lights went out.', x: 'I was cook when the lights went out.', d: 'was + <b>-ing</b>.' }, { c: 'I used to live here.', x: 'I use to live here.', d: 'Something in the past: <b>used</b> to.' }, { c: 'We didn’t use to have a lift.', x: 'We didn’t used to have a lift.', d: 'After didn’t: <b>use</b> to.' }, { c: 'What were you doing at nine?', x: 'What you were doing at nine?', d: 'In a question, <b>were</b> comes before you.' }], nota: 'The long action: <b>was / were + -ing</b>. The short one that interrupts: past simple. An old habit: <b>used to</b>, but after didn’t: <b>use to</b>.', uso: { p: 'Your turn. The lights went out last night. Say what you were doing, and what happened.', molde: ['At nine I was …', 'When the lights went out, I …'], ex: 'At nine I was cooking pasta. When the lights went out, I found a candle.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
