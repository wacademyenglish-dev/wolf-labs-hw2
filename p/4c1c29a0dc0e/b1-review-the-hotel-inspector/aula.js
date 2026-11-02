/* ============================================================
   REVIEW · B1 · UNIT 4 · THE HOTEL INSPECTOR · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: bingo · missao · cartao · escolha · pode.
   Unidade 4 (Quanto, quão, que tipo): too much / too many / not enough; few × a few, little × a little;
   both / either / neither; -ed × -ing; adjetivos extremos (absolutely exhausted, really tired).
   A missão: o aluno é inspetor secreto do Hotel Marlow (inventado) e ouve três hóspedes no saguão;
   no fim dá as estrelas e explica por quê.
   ============================================================ */
var REV = { nivel: 'B1', unidade: 4, titulo: ['The Hotel', 'Inspector'], tema: 'How much, how, what kind', placa: 'HOTEL MARLOW', lugarConversa: 'THE LOBBY', cor: '#f0c66a', cor2: '#f8e3b2',
  sub: 'Unit 4 review. You are a secret hotel inspector. Tonight you’re at the Hotel Marlow. Three guests are in the lobby, and they have a lot to say.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'I · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a line, across, down or diagonal, is a BINGO.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Secret Inspector', t: 'Three guests. How was the stay?', p: 'Ask each guest five questions. Your teacher is the guest. Then give the hotel its stars.' },
  { k: 'cartao', est: 'w', min: 7, img: 'conversa', rot: 'III · Your Review', t: 'Write a review of a place you stayed.', p: 'Four short lines: too much / not enough, both or neither, one -ed and one -ing word.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'THE LOBBY · ASK FIVE QUESTIONS', quem: 'guest', depois: 'Give the stars',
  campos: [
    { c: 'quarto', r: 'THE ROOM', q: 'How was your room?', f: 'The room?' },
    { c: 'demais', r: 'TOO MUCH / MANY', q: 'Was there too much or too many of anything?', f: 'Too much? Too many?' },
    { c: 'falta', r: 'NOT ENOUGH', q: 'Was there anything that wasn’t enough?', f: 'Not enough of what?' },
    { c: 'ambos', r: 'BOTH / NEITHER', q: 'There are two restaurants. Did you like both of them?', f: 'The two restaurants?' },
    { c: 'sentiu', r: 'FELT', q: 'How did you feel at the end of the stay?', f: 'How did you feel?' }],
  itens: [
    { k: 'GUEST 1', tag: 'A BUSINESSWOMAN', ele: 'She', estrelas: 'three stars', v: { quarto: 'absolutely tiny, but clean', demais: 'too much noise from the street', falta: 'not enough plugs for her laptop', ambos: 'neither of them: both were too expensive', sentiu: 'exhausted: she didn’t sleep' }, diz: '“My room was absolutely tiny! But clean.” · “There was too much noise from the street.” · “There weren’t enough plugs for my laptop.” · “Neither of them. Both were too expensive.” · “I was exhausted. I didn’t sleep at all.”' },
    { k: 'GUEST 2', tag: 'A FAMILY OF FIVE', ele: 'They', estrelas: 'four stars', v: { quarto: 'huge, with a view of the sea', demais: 'too many stairs: the elevator was broken', falta: 'only a few towels for five people', ambos: 'both: the pizza was amazing', sentiu: 'relaxed, but the kids were bored on the last day' }, diz: '“Our room was huge, with a view of the sea!” · “Too many stairs. The elevator was broken.” · “There were only a few towels for five people.” · “Both! The pizza was amazing.” · “We felt relaxed. But the kids were bored on the last day.”' },
    { k: 'GUEST 3', tag: 'A TRAVEL BLOGGER', ele: 'He', estrelas: 'two stars', v: { quarto: 'really old and a bit dirty', demais: 'too many rules: no music, no visitors', falta: 'very little hot water', ambos: 'either is OK, but the breakfast was disappointing', sentiu: 'annoyed: the Wi-Fi was terrible' }, diz: '“Really old. And a bit dirty.” · “Too many rules! No music, no visitors.” · “There was very little hot water.” · “Either one is OK. But the breakfast was disappointing.” · “Annoyed. The Wi-Fi was terrible, and I work online!”' }],
  relato: { titulo: 'YOUR INSPECTOR REPORT · HOW MANY STARS?',
    pede: function (x) { return 'So, inspector, after talking to ' + x.tag.toLowerCase() + ': how many stars?'; },
    chips: function () { return ['I’d give it … stars,', 'because there was too much / too many …', 'there wasn’t enough …', 'only a few / very little …', 'both / neither …', 'The guest was absolutely …']; },
    modelo: function (x) { var v = x.v; return 'I’d give it ' + x.estrelas + '. The room was ' + v.quarto + '. The problems: ' + v.demais + ', and ' + v.falta + '. The guest felt ' + v.sentiu + '.'; } },
  nao: { many: '“too much people” → too MANY people.', enough: '“enough hot not water” → not hot ENOUGH / not ENOUGH hot water.', ed: '“I was very boring” (= people found me boring!) → I was very BORED.' },
  fim: 'Three guests, one hotel, an honest report. too much / many, not enough, a few / a little, both / neither and -ed / -ing: all of Unit 4 in the lobby.' };

var CARTAO = { ph: 'I stayed at a small hotel in Paraty.\nThe room was absolutely beautiful, but there were too many mosquitoes!\nThere was only a little hot water, and not enough pillows.\nBoth breakfasts were amazing. I wasn’t bored for a second.', rot: 'My review',
  chips: ['too much ', 'too many ', 'not enough ', 'only a few ', 'very little ', 'Both ', 'Neither ', 'Either ', 'absolutely ', 'really ', 'bored / boring', 'tired / tiring'],
  perg: ['YOUR REVIEW', 'Where did you stay? What was too much? What wasn’t enough? Both or neither? How did you feel?'],
  exemploRot: 'HOTEL MARLOW · GUEST 2', exemplo: [['ROOM', 'huge, sea view'], ['TOO MANY', 'stairs'], ['NOT ENOUGH', 'towels'], ['RESTAURANTS', 'both great'], ['FELT', 'relaxed']],
  modelo: 'I stayed at a small hotel in Paraty. The room was absolutely beautiful, but there were too many mosquitoes!<br>There was only a little hot water, and not enough pillows.<br>Both breakfasts were amazing. I wasn’t bored for a second.' };

var PODE = [
  'I can say too much / too many and not enough.',
  'I can choose a few / a little (some) or few / little (not many).',
  'I can compare two things with both, either and neither.',
  'I can choose -ed (how I feel) or -ing (what causes it).',
  'I can use strong words: absolutely exhausted, really tired.'
];

/* MECÂNICAS VARIADAS */
/* B1 R4: bingo · missao · cartao · escolha */
var BINGO = [['too much or too many: ___ people', 'too many people'], ['too much or too many: ___ noise', 'too much noise'], ['It isn’t warm ___. (enough)', 'warm enough'], ['a few or a little: ___ water', 'a little water'], ['Few or a few? “I have ___ friends here, so I’m happy.”', 'a few'], ['Both, either or neither? (two, and not one of them)', 'neither'], ['The movie was boring / bored? I was ___.', 'bored'], ['very tired → absolutely ___', 'exhausted'], ['very big → absolutely ___', 'huge']];
var ESCOLHA = [
  { a: 'a tiny room with a sea view', b: 'a huge room with no view', chips: ['I’d rather …', 'because there’s too much / not enough …'], ex: 'The tiny room! The view is absolutely amazing.' },
  { a: 'a hotel with too many rules', b: 'a hotel with too much noise', chips: ['Neither, but …', 'I’d choose …'], ex: 'Neither! But I’d choose the rules. I need to sleep.' },
  { a: 'a few close friends', b: 'a lot of friends you see a little', chips: ['I’d rather have a few …', 'Both are …'], ex: 'A few close friends. A lot of friends is tiring.' },
  { a: 'a relaxing beach holiday', b: 'an exciting city holiday', chips: ['I get bored when …', 'I find … exciting / tiring'], ex: 'The city. I get bored on the beach after two days.' }];
