/* ============================================================
   REVIEW · B1 · UNIT 8 · THE FLAT HUNT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: portas · missao · ordem · cadeira · pode.
   Unidade 8 (Relativas e verbo + verbo): relative clauses (who, which, that, where); make / let /
   help + pessoa + verbo; stop + -ing; hear / see + alguém + -ing; would rather / prefer.
   A missão: o aluno procura apartamento e visita três; o professor é cada proprietário. No fim,
   conta para o colega qual prefere e por quê.
   ============================================================ */
var REV = { nivel: 'B1', unidade: 8, titulo: ['The Flat', 'Hunt'], tema: 'Describing and choosing', placa: 'FOR RENT', lugarConversa: 'THE BALCONY', cor: '#9fd17f', cor2: '#cfe8bf',
  sub: 'Unit 8 review. You need a new flat, and today you are visiting three. The owners are very different… and so are the flats. Which one would you rather take?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'portas', est: 'f', min: 8, img: 'conversa', rot: 'I · Six Doors', t: 'Six doors. One minute each. No notes.', p: 'Pick a door. Do the task out loud, from memory. Your teacher taps Got it or Review.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · Three Flats', t: 'Three owners. Ask about each flat.', p: 'Ask each owner five questions. Your teacher is the owner. Then tell your friend which flat you’d rather take.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Flat Hunt Pocket', t: 'Four lines from the flat hunt.', p: 'Read one line at a time. Then keep the card in the corner for the last page.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'WHO / WHICH', tema: 'relative clauses: who, which, that', t: 'Describe two people and two things in your life, with who and which.', ex: 'My sister is the one who always calls me. My bike is the thing which I love most.', trap: 'People: who. Things: which. Both: that. Never “what”.' },
  { k: 'THE PLACE WHERE', tema: 'relative clauses: where', t: 'Three places: where you grew up, where you relax, where you work.', ex: 'This is the city where I grew up. The beach is the place where I relax.', trap: 'No “there” at the end: “the city where I grew up there” → where I grew up.' },
  { k: 'MAKE / LET', tema: 'make, let, help + person + verb', t: 'Your parents when you were a kid: what did they make you do, and let you do?', ex: 'They made me do my homework before dinner, but they let me stay up late on Fridays.', trap: '“made me to do” → made me DO. let me go, help me carry.' },
  { k: 'STOP', tema: 'stop + -ing', t: 'Something you stopped doing, and something you want to stop doing.', ex: 'I stopped drinking soda last year. I want to stop checking my phone at night.', trap: 'stop + -ing = not do it anymore.' },
  { k: 'I HEARD IT', tema: 'hear / see + someone + -ing', t: 'Close your eyes for five seconds. What can you hear? What did you see on the way here?', ex: 'I can hear a dog barking and cars passing. This morning I saw a man running for the bus.', trap: 'hear / see + someone + -ing: I heard her singing.' },
  { k: 'WOULD RATHER', tema: 'would rather, prefer', t: 'Choose and say it two ways: city or countryside? cook or order food?', ex: 'I’d rather live in the countryside. I prefer cooking to ordering food.', trap: 'would rather + verb (no to). prefer + -ing … to …' }
];

var MISSAO = { pede: 'THE VISIT · ASK FIVE QUESTIONS', quem: 'owner', depois: 'Tell your friend',
  campos: [
    { c: 'lugar', r: 'THE FLAT', q: 'Can you tell me about the flat?', f: 'The flat: what is it like?' },
    { c: 'vizinho', r: 'NEIGHBORS', q: 'Who lives next door?', f: 'Next door?' },
    { c: 'deixa', r: 'LETS YOU', q: 'What do you let tenants do? Pets? Painting?', f: 'Pets? Painting?' },
    { c: 'faz', r: 'MAKES YOU', q: 'Is there anything the building makes you do?', f: 'Building rules?' },
    { c: 'ouve', r: 'AT NIGHT', q: 'What can you hear at night?', f: 'At night: what do you hear?' }],
  itens: [
    { k: 'FLAT 1', tag: 'THE CITY CENTER FLAT', ele: 'It', v: { lugar: 'a small flat which has a big window, in a street where there are lots of cafes', vizinho: 'a woman who plays the drums', deixa: 'she lets you paint the walls, but no pets', faz: 'they make you recycle everything', ouve: 'you can hear people talking and laughing outside' }, diz: '“It’s a small flat which has a big window. It’s in a street where there are lots of cafes.” · “A woman who plays the drums. Every day.” · “I let tenants paint the walls. But no pets, sorry.” · “The building makes you recycle everything.” · “You can hear people talking and laughing outside. It’s alive!”' },
    { k: 'FLAT 2', tag: 'THE GARDEN FLAT', ele: 'It', v: { lugar: 'a quiet flat that has a little garden', vizinho: 'an old man who grows tomatoes', deixa: 'he lets you have a dog or a cat', faz: 'they make you water the garden in summer', ouve: 'you can hear the birds singing, and sometimes a train passing' }, diz: '“A quiet flat that has a little garden.” · “An old man who grows tomatoes. He’ll give you some!” · “Pets? Sure. I let tenants have a dog or a cat.” · “You have to water the garden in summer. The building makes everyone help.” · “You can hear the birds singing. And sometimes a train passing.”' },
    { k: 'FLAT 3', tag: 'THE TOP-FLOOR FLAT', ele: 'It', v: { lugar: 'a flat which is on the tenth floor, with a view of the whole city', vizinho: 'nobody: it’s the only flat on the floor', deixa: 'he lets you do anything, but no parties', faz: 'nothing, but the elevator stops working every week', ouve: 'you can hear the wind blowing' }, diz: '“A flat which is on the tenth floor. You can see the whole city!” · “Nobody. It’s the only flat on the floor.” · “I let tenants do anything they want. Except parties.” · “Nothing. But… the elevator stops working every week.” · “You can hear the wind blowing. That’s all.”' }],
  relato: { titulo: 'YOUR FRIEND ASKS · WHICH ONE?',
    pede: function (x) { return 'So, what about ' + x.tag.toLowerCase() + '? Would you take it?'; },
    chips: function () { return ['It’s a flat which / that …', 'in a street where …', 'The neighbor is someone who …', 'The owner lets you …', 'I’d rather … / I prefer …']; },
    modelo: function (x) { var v = x.v; return 'It’s ' + v.lugar + '. The neighbor is ' + v.vizinho + ', and ' + v.deixa + '. At night ' + v.ouve + '. I’d rather take it… or maybe not!'; } },
  nao: { what: '“the flat what has a garden” → the flat WHICH / THAT has a garden.', make: '“She makes you to recycle” → she makes you RECYCLE.', rather: '“I’d rather to live” → I’d rather LIVE.' },
  fim: 'Three flats, three owners, one choice. who, which, where, make / let, hear it -ing and would rather: all of Unit 8 in one afternoon.' };

var PODE = [
  'I can describe people and things with who, which and that.',
  'I can describe places with where: the street where I live.',
  'I can say what people make me do, let me do and help me do.',
  'I can say what I hear or see happening: I heard a dog barking.',
  'I can choose with would rather and prefer.'
];

/* MECÂNICAS VARIADAS */
/* B1 R8: portas · missao · ordem · cadeira */
var ORDEM = { rot: 'MOVING DAY', pede: 'Tap the events in the right order. Then tell it.', chips: ['First,', 'Then,', 'After that,', 'In the end,'],
  modelo: 'First, I found a flat which had a little garden. Then my friends helped me carry the boxes. After that, the old man who lives next door gave us some tomatoes. In the end, that night I heard the birds singing and I slept like a baby.',
  passos: ['I found a flat which had a little garden.', 'The owner let me bring my dog.', 'My friends helped me carry the boxes.', 'The old man who lives next door gave us tomatoes.', 'That night I heard the birds singing.', 'I stopped looking for flats forever!'] };
var CADEIRA = { itens: [
  { alvo: 'Ask me about the street where I live.', dica: 'What’s the street where you live like?', resp: 'It’s a street where everybody knows everybody.' },
  { alvo: 'Ask me about a person who helped me a lot.', dica: 'Who is a person who helped you a lot?', resp: 'My aunt. She helped me find my first job.' },
  { alvo: 'Ask me what my parents let me do as a kid.', dica: 'What did your parents let you do?', resp: 'They let me play in the street.' },
  { alvo: 'Ask me something I stopped doing.', dica: 'What have you stopped doing?', resp: 'I stopped eating meat last year.' },
  { alvo: 'Ask me: city or countryside?', dica: 'Would you rather live in the city or in the countryside?', resp: 'I’d rather live near the sea!' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep from Unit 8.', rotulo: 'Describing and choosing', linhas: ['people: <b>who</b> · things: <b>which</b> · both: <b>that</b>', 'a place: <b>where</b> I grew up (no “there” at the end)', 'make / let / help + person + <b>verb</b>: she lets me <b>paint</b> the walls', 'stop + <b>-ing</b> · I heard her <b>singing</b> · I’d rather <b>live</b> here'], uso: { p: 'Your turn. Describe the street where you live, and say which flat you would rather take.', molde: ['I live on a street where …', 'My neighbor is someone who …', 'I’d rather …'], ex: 'I live on a street where everybody knows me. My neighbor is someone who plays the drums. I’d rather take the flat with the garden.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
