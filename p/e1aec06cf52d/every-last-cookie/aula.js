/* ============================================================
   EVERY LAST COOKIE · A2 · UNIT 4 (HOW MUCH AND WHO) · LIVE CLASS  16/10/2026
   Aula nova do livro A2 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: all / every / some / any / none / no, e everybody / nobody / somebody (+ verbo no singular).
   O mundo: o pote de biscoitos da copa do escritório amanheceu vazio; bilhetes na geladeira, três colegas
   para interrogar e um culpado inesperado.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2', unidade: 4, titulo: ['Every Last', 'Cookie'], tema: 'All, every, some, any, none.',
  sub: 'On Monday the cookie jar in the office kitchen was full. On Tuesday, there were none. Read the notes on the fridge, learn the words for “how many”, and ask three colleagues.',
  placa: 'OFFICE KITCHEN · TUESDAY', lugarConversa: 'THE COFFEE BREAK', cor: '#7cc4ff', cor2: '#c4e3ff',
  chips: ['all · every · none', 'some or any?', 'Who ate the cookies?'], botao: 'Start the lesson', nota: 'Every + one thing: every cookie IS gone. All + many things: all the cookies ARE gone.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · Notes on the Fridge', t: 'The jar is empty. The notes are angry.', p: 'Read the notes out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'II · Every or All?', t: 'Small words that count.', p: 'Compare A and B. Which one is right? Why?' },
  { k: 'missao', est: 'o', min: 15, img: 'conversa', rot: 'III · The Investigation', t: 'Three colleagues. One empty jar.', p: 'Ask each colleague five questions. Your teacher is the colleague. Then tell the boss who did it.' },
  { k: 'escolha', est: 'o', min: 6, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with all, every, some or none.' }
];
var PORTAS = [];

var LEITURA = { rot: 'THE FRIDGE DOOR · OFFICE KITCHEN', tipo: 'nota',
  antes: { q: 'Is there a kitchen where you work or study? What is in it?', h: 'Yes. There is a coffee machine and some cups.' },
  texto: 'MONDAY 6 PM: The jar is full. There are {forty} cookies. {Everybody} can have two!\nTUESDAY 9 AM: {All} the cookies are gone. There are {none}. Not one!\nNOTE FROM SALES: {Nobody} in Sales ate them. We were {all} at a meeting.\nNOTE FROM IT: We didn’t eat {any}. We only drink coffee. {Every} day!\nNOTE FROM THE CLEANER: I saw {some} crumbs on the CEO’s desk…',
  perguntas: [
    { q: 'How many cookies were in the jar on Monday?', h: 'Forty.' },
    { q: 'How many were there on Tuesday morning?', h: 'None. Not one.' },
    { q: 'Why does Sales say it wasn’t them?', h: 'They were all at a meeting.' },
    { q: 'What did the cleaner see?', h: 'Some crumbs on the CEO’s desk!' }],
  olha: 'Find eight words that say “how many” or “who”. Which ones mean zero?' };

var DESCOBRE = {
  pares: [
    { a: '{Every cookie is} gone.', b: '{Every cookies are} gone.', q: 'Which one is right?', r: '<b>Every</b> + one thing (singular): every cookie is, every day.' },
    { a: '{All the cookies are} gone.', b: '{All the cookie is} gone.', q: 'Which one is right?', r: '<b>All</b> + many things (plural): all the cookies are.' },
    { a: 'We didn’t eat {any}.', b: 'We didn’t eat {some}.', q: 'Which one is right?', r: 'Negative and questions: <b>any</b>. Positive: <b>some</b> (I saw some crumbs).' },
    { a: '{Nobody} ate them.', b: '{Nobody didn’t} eat them.', q: 'Which one is right?', r: '<b>Nobody</b> already means zero. Only one negative: nobody ate them.' }],
  regra: [['ALL', 'all + plural: all the cookies are'], ['EVERY', 'every + singular: every day, every cookie is'], ['SOME · ANY', 'some (+) · any (− and ?)'], ['NONE · NO · NOBODY', 'zero: none, no cookies, nobody (one negative only)']],
  armas: [['EVERY', 'every days', 'every day', 'every + singular'], ['ALL', 'all the cookie', 'all the cookies', 'all + plural'], ['ANY', 'I didn’t eat some', 'I didn’t eat any', 'negative: any'], ['NOBODY', 'Nobody didn’t see', 'Nobody saw', 'one negative']] };

var MISSAO = { pede: 'THE INVESTIGATION · ASK FIVE QUESTIONS', quem: 'colleague', depois: 'Tell the boss',
  campos: [
    { c: 'onde', r: 'WHERE', q: 'Where were you on Monday night?', f: 'Monday night: where?' },
    { c: 'quantos', r: 'HOW MANY', q: 'How many cookies did you eat?', f: 'How many?' },
    { c: 'todos', r: 'WHO ELSE', q: 'Was everybody in your team there?', f: 'Everybody?' },
    { c: 'viu', r: 'SAW', q: 'Did you see anybody in the kitchen?', f: 'Anybody?' },
    { c: 'pista', r: 'CLUE', q: 'Is there anything strange on your desk?', f: 'Anything strange?' }],
  itens: [
    { k: 'COLLEAGUE 1', tag: 'BIA, SALES', v: { onde: 'at a meeting', quantos: 'none', todos: 'yes, all of Sales', viu: 'nobody', pista: 'nothing' }, diz: '“At a meeting, all night.” · “None! Not one.” · “Yes, all of us were there.” · “No, nobody.” · “No, nothing.”', fala: 'Bia didn’t eat any. All of Sales were at a meeting.' },
    { k: 'COLLEAGUE 2', tag: 'TOM, IT', v: { onde: 'at home', quantos: 'two', todos: 'no, some went home', viu: 'somebody with a big bag', pista: 'some coffee cups' }, diz: '“At home.” · “Two. Everybody can have two!” · “No. Some people went home.” · “Yes, somebody with a big bag.” · “Only some coffee cups.”', fala: 'Tom ate two, like everybody. He saw somebody with a big bag.' },
    { k: 'COLLEAGUE 3', tag: 'MR. GRANT, CEO', v: { onde: 'in his office', quantos: '“some”…', todos: 'nobody was there', viu: 'nobody', pista: 'crumbs and a big bag' }, diz: '“In my office. Working!” · “Hmm… some.” · “Nobody was in the office. Only me.” · “No, I didn’t see anybody.” · “Crumbs? Oh. And my big bag…”', fala: 'Mr. Grant ate all the cookies! There are crumbs on his desk, and nobody else was there.' }],
  relato: { titulo: 'TELL THE BOSS · WHAT DID YOU FIND?',
    pede: function (x) { return 'So? What about ' + x.tag.split(',')[0] + '?'; },
    chips: function () { return ['He / She didn’t eat any.', 'All of … were …', 'Nobody …', 'He / She saw somebody …', 'He ate all the …']; },
    modelo: function (x) { return x.fala; } },
  nao: { every: '“every cookies” → every COOKIE.', any: '“I didn’t eat some” → I didn’t eat ANY.', nobody: '“Nobody didn’t eat” → nobody ATE.' },
  fim: 'Case closed: the CEO! All, every, some, any and none: you can count and accuse in English.' };

var ESCOLHA = [
  { a: 'a box with some chocolate cookies', b: 'a box with every kind of cookie', chips: ['I prefer …', 'because …'], ex: 'Every kind of cookie, because I can’t choose!' },
  { a: 'an office where everybody shares food', b: 'an office where nobody shares food', chips: ['An office where …', 'because …'], ex: 'Everybody shares, because it’s more fun.' },
  { a: 'eat all the cookies on Monday', b: 'eat one every day', chips: ['I’d …', 'because …'], ex: 'One every day. All on Monday is too much!' },
  { a: 'no meetings at all', b: 'a meeting every morning', chips: ['I prefer …', 'because …'], ex: 'No meetings at all! I can work in peace.' }];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* A2 · Every Last Cookie: leitura · descobre · missao · escolha */
