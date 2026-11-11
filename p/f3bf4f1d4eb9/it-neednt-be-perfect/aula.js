/* ============================================================
   IT NEEDN’T BE PERFECT · C1 · UNIT 2 (MODALS WITH NUANCE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo (presente): needn’t / don’t need to / don’t have to (não é necessário) × mustn’t / aren’t
   allowed to (proibido); there’s no need to + verbo; needn’t + verbo sem to. (O passado needn’t have ×
   didn’t need to fica para outra aula da unidade; aqui é o presente e as regras.)
   Armadilha do português: "você não precisa" × "você não pode" se confundem em you mustn’t (proibido!);
   needn’t to; don’t must.
   O mundo: o bilhete de boas-vindas de uma anfitriã de casa de temporada (inventada).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 2, titulo: ['It Needn’t', 'Be Perfect'], tema: 'Not necessary, or not allowed?',
  sub: '“You mustn’t bring towels” sounds like a crime. “You needn’t bring towels” is a kind host. One letter changes everything. Read the welcome note, then write your own house rules.',
  placa: 'THE BLUE HOUSE · WELCOME', lugarConversa: 'THE KITCHEN', cor: '#86b9e0', cor2: '#c3dcf0',
  chips: ['needn’t', 'don’t have to', 'mustn’t'], botao: 'Start the lesson', nota: 'A small modal can make you sound kind, or very strict.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Rules', t: 'Rules in your life.', p: 'Answer with detail. Then ask the question back.' },
  { k: 'leitura', est: 'l', min: 9, img: 'capa', rot: 'II · The Welcome Note', t: 'A note on the kitchen table.', p: 'Read it out loud. Answer the questions. Then look closer.' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'III · Right, Not This', t: 'Six pairs from the welcome note. One is right.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'IV · Kind or Strict?', t: 'Not necessary, or not allowed?', p: 'Compare A and B. How does the guest feel in each one?' },
  { k: 'bingo', est: 'f', min: 8, img: 'capa', rot: 'V · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a row (across, down or diagonal) is a BINGO.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'VI · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'cartao', est: 'w', min: 8, img: 'conversa', rot: 'VII · Your House Rules', t: 'A guest is coming to your home.', p: 'Write four rules: one must, one mustn’t, two needn’t / don’t have to.' }
];
var PORTAS = [];

var CONVERSA = [
  { q: 'At your job or school, what do you have to do that you don’t like?', f: 'Something you have to do?', voce: ['I have to …', 'We’re supposed to …'], ex: 'I have to send a report every Friday at five.' },
  { q: 'What are you not allowed to do at work, or at home?', f: 'Not allowed?', voce: ['We mustn’t …', 'We aren’t allowed to …'], ex: 'We aren’t allowed to eat at our desks.' },
  { q: 'What’s something people think is necessary, but really isn’t?', f: 'Not really necessary?', voce: ['You don’t have to …', 'You needn’t …'], ex: 'You don’t have to answer emails at night. It can wait.' }
];

var LEITURA = { rot: 'ON THE KITCHEN TABLE · THE BLUE HOUSE', tipo: 'nota',
  antes: { q: 'You arrive at a holiday house. What do you hope the host’s note says?', h: 'Where the keys and the Wi-Fi are, and that I can relax!' },
  texto: 'Welcome to the Blue House!\nMake yourselves at home. You {needn’t} bring towels or sheets: everything is in the white cupboard.\nYou {don’t have to} clean before you leave; a cleaner comes on Mondays. And {there’s no need to} call me when you arrive.\nJust two serious things: you {mustn’t} leave the back door open (the dog next door loves our kitchen!), and you {aren’t allowed to} have fires on the beach.\nCheckout is at 11, but you {don’t need to} rush: if nobody is coming after you, I’ll send a message.\nThe house {needn’t} be perfect when you go. Just happy.\nMarta',
  perguntas: [
    { q: 'What three things are NOT necessary for the guests?', h: 'Bringing towels, cleaning before leaving, and calling when they arrive.' },
    { q: 'What two things are forbidden? Why the back door?', h: 'Leaving the back door open (the neighbor’s dog comes in) and having fires on the beach.' },
    { q: 'Is checkout really at 11?', h: 'Officially yes, but the guests don’t need to rush if nobody is coming after them.' },
    { q: 'What kind of person is Marta, from her note?', h: 'Relaxed and kind, but clear about two serious rules.' }],
  olha: 'Find the “not necessary” phrases and the “not allowed” phrases. How many of each?' };

var DESCOBRE = {
  pares: [
    { a: 'You {mustn’t} bring towels.', b: 'You {needn’t} bring towels.', q: 'How does the guest feel after each one?', r: 'A: it’s forbidden (and strange! why?). B: it’s not necessary, there are towels here. Kind and relaxed.' },
    { a: 'You {don’t have to} clean.', b: 'You {needn’t} clean.', q: 'Same meaning? Any difference in style?', r: 'Same meaning: not necessary. needn’t is a little more British and a little more formal; don’t have to / don’t need to work everywhere.' },
    { a: 'You {needn’t} call me.', b: 'You {needn’t to} call me.', q: 'One of these is wrong. Which one, and why?', r: 'B is wrong. needn’t is a modal: no to (like mustn’t, can’t). But: you don’t NEED TO call me.' },
    { a: 'You {aren’t allowed to} have fires.', b: 'You {mustn’t} have fires.', q: 'Both mean forbidden. Who makes the rule?', r: 'not allowed to = an external rule (the beach, the law). mustn’t = often the speaker’s own strong advice or rule.' }],
  regra: [['NOT NECESSARY', 'needn’t + verb · don’t have to · don’t need to · there’s no need to'], ['NOT ALLOWED', 'mustn’t · aren’t allowed to · can’t'], ['NO TO AFTER', 'needn’t, mustn’t, can’t (modals): You needn’t call.'], ['WITH TO', 'don’t need to, don’t have to, aren’t allowed to']],
  armas: [
    ['NEEDN’T', 'You needn’t to worry.', 'You <b>needn’t worry</b>.', 'needn’t + verb, no to.'],
    ['FORBIDDEN?', 'You mustn’t pay: it’s free!', 'You <b>don’t have to</b> pay: it’s free!', 'Free = not necessary, not forbidden.'],
    ['MUST', 'You don’t must smoke here.', 'You <b>mustn’t</b> smoke here.', 'must has no don’t: mustn’t.'],
    ['NEED', 'You don’t need bring anything.', 'You <b>don’t need to</b> bring anything.', 'don’t need TO + verb.']] };

var CARTAO = { ph: 'Welcome to my flat!\nYou needn’t bring anything: there’s food in the fridge.\nYou don’t have to make the bed in the morning.\nYou mustn’t open the window in the bathroom: it falls!\nAnd you aren’t allowed to leave without trying my coffee.', rot: 'My house rules',
  chips: ['You needn’t ', 'You don’t have to ', 'There’s no need to ', 'You don’t need to ', 'You must ', 'You mustn’t ', 'You aren’t allowed to ', 'Please '],
  perg: ['YOUR HOUSE RULES', 'A guest is coming. What’s not necessary? What’s forbidden? Be kind, but clear.'],
  exemploRot: 'THE BLUE HOUSE · RULES', exemplo: [['TOWELS', 'needn’t bring'], ['CLEANING', 'don’t have to'], ['BACK DOOR', 'mustn’t leave open'], ['FIRES', 'not allowed'], ['THE HOUSE', 'needn’t be perfect']],
  modelo: 'Welcome to my flat! You needn’t bring anything: there’s food in the fridge.<br>You don’t have to make the bed. You mustn’t open the bathroom window: it falls!<br>And you aren’t allowed to leave without trying my coffee.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · It Needn’t Be Perfect: conversa · leitura · descobre · bingo · erros · cartao */
var BINGO = [['not necessary, modal: You ___ bring towels.', 'needn’t'], ['forbidden: You ___ smoke here.', 'mustn’t'], ['It’s free! You don’t ___ pay.', 'have to'], ['There’s no ___ to call me.', 'need'], ['You needn’t ___ (worry). (to or not?)', 'worry (no to)'], ['You don’t need ___ (bring) anything.', 'to bring'], ['a rule of the beach: You aren’t ___ to have fires.', 'allowed'], ['mustn’t or don’t have to? Dress code: casual. You ___ wear a tie.', 'don’t have to'], ['mustn’t or don’t have to? Exam room: You ___ use your phone.', 'mustn’t']];
var ERROS = { tipo: 'chat', rot: 'A MESSAGE FROM A FRIEND · YOUR PARTY', partes: ['Hi! About Saturday: you ', ['mustn’t bring', 'needn’t bring', 'Not necessary, not forbidden.'], ' anything, we have plenty of food. You ', ['don’t must', 'mustn’t', 'must → mustn’t.'], ' park in front of the garage, my neighbor gets angry. You ', ['needn’t to', 'needn’t', 'needn’t + verb, no to.'], ' dress up, it’s casual. There’s no need ', ['bring', 'to bring', 'no need TO + verb.'], ' a gift. And you ', ['don’t allowed to', 'aren’t allowed to', 'be allowed to.'], ' leave before the cake!'] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.', pares: [{ c: 'You needn’t take your shoes off.', x: 'You needn’t to take your shoes off.', d: 'Needn’t + the clean verb. No to.' }, { c: 'You don’t need to buy milk.', x: 'You don’t must buy milk.', d: 'Don’t must does not exist. Not necessary: don’t need to.' }, { c: 'There’s no need to book a taxi.', x: 'There’s no need of book a taxi.', d: 'There’s no need to + verb.' }, { c: 'Guests aren’t allowed to smoke here.', x: 'Guests needn’t smoke here.', d: 'Forbidden is not needn’t. Use aren’t allowed to, or mustn’t.' }, { c: 'You don’t have to wash the cups.', x: 'You mustn’t wash the cups.', d: 'It is optional: don’t have to. Mustn’t would mean: it is forbidden.' }, { c: 'She needn’t wait for us.', x: 'She needn’t waits for us.', d: 'No -s after needn’t.' }], nota: '<b>Needn’t, don’t need to, don’t have to, there’s no need to</b> = it is not necessary (kind). <b>Mustn’t, aren’t allowed to</b> = it is forbidden (strict). Needn’t takes the clean verb: no <b>to</b>, no <b>-s</b>.', uso: { p: 'Your turn. A guest is coming to your home. Tell them one thing they needn’t do, and one thing that is not allowed.', molde: ['You needn’t …', 'There’s no need to …', 'You’re not allowed to …'], ex: 'You needn’t bring anything. There’s no need to call first. You’re not allowed to park in front of the garage.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
