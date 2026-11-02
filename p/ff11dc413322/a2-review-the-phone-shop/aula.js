/* ============================================================
   REVIEW · A2 · UNIT 5 · THE PHONE SHOP · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: escada · missao · erros · cadeira · pode.
   Unidade 5 (Comparar e descrever): comparativo e superlativo; as … as, the same as, different from;
   -ed × -ing (bored / boring); advérbios de modo (quickly, well, hard); adjetivo + preposição + -ing
   (good at, scared of, tired of, interested in).
   A missão: uma loja de celulares (aparelhos fictícios: Nova 2, Nova 5, Pebble). O aluno atende três
   clientes e no fim recomenda um aparelho, comparando.
   ============================================================ */
var REV = { nivel: 'A2', unidade: 5, titulo: ['The Phone', 'Shop'], tema: 'Comparing and describing', placa: 'NEW PHONES', lugarConversa: 'THE SHOPPING STREET', cor: '#8fd3c2', cor2: '#c5ece2',
  sub: 'Unit 5 review. You work in a phone shop. Three customers need a new phone, and only you can help them choose.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escada', est: 'f', min: 8, img: 'conversa', rot: 'I · The Ladder', t: 'Climb from easy to hard.', p: 'Go one step at a time. A good answer takes you up.' },
  { k: 'missao', est: 'o', min: 14, img: 'capa', rot: 'II · The Phone Shop', t: 'Three customers. What do they need?', p: 'Ask each customer five questions. Your teacher is the customer. Then recommend a phone.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'BIGGER', tema: 'comparatives', t: 'Compare two cities you know: two sentences.', ex: 'São Paulo is bigger and busier than Curitiba.', trap: '“more big” → bigger; good → better.' },
  { k: 'THE BEST', tema: 'superlatives', t: 'The best, the worst and the most expensive things you have.', ex: 'My best thing is my bike. The most expensive is my laptop.', trap: '“the most big” → the biggest.' },
  { k: 'AS … AS', tema: 'as … as, the same as, different from', t: 'Compare you and someone in your family with as … as.', ex: 'I’m as tall as my father, but I’m not as patient as him.', trap: 'as … as (never as … than).' },
  { k: 'BORED / BORING', tema: '-ed × -ing adjectives', t: 'Something boring, something exciting, and how you feel about them.', ex: 'Traffic is boring; I get bored. Football is exciting; I feel excited.', trap: 'the thing: -ing; the person who feels: -ed.' },
  { k: 'QUICKLY', tema: 'adverbs of manner', t: 'How do you drive, cook and speak English?', ex: 'I drive carefully, I cook badly, and I speak English slowly.', trap: 'well (not good), hard (not hardly), fast (not fastly).' },
  { k: 'GOOD AT', tema: 'adjective + preposition + -ing', t: 'What are you good at, bad at, and scared of?', ex: 'I’m good at cooking, bad at singing and scared of flying.', trap: 'After at / of / in: -ing. “good in cook” → good at cooking.' }
];

var MISSAO = { pede: 'AT THE COUNTER · ASK FIVE QUESTIONS', quem: 'customer', depois: 'Recommend a phone',
  campos: [
    { c: 'usa', r: 'USES IT FOR', q: 'What do you use your phone for?', f: 'Your phone: for what?' },
    { c: 'velho', r: 'OLD PHONE', q: 'What’s wrong with your old phone?', f: 'The old phone: problem?' },
    { c: 'sente', r: 'FEELS', q: 'How do you feel about it? Bored? Annoyed?', f: 'Bored? Annoyed?' },
    { c: 'bom', r: 'GOOD AT', q: 'Are you good at using technology?', f: 'Technology: good or bad?' },
    { c: 'maisimp', r: 'MOST IMPORTANT', q: 'What’s the most important thing for you?', f: 'Most important?' }],
  itens: [
    { k: 'CUSTOMER 1', tag: 'A PHOTOGRAPHER', ele: 'She', fone: 'the Nova 5', v: { usa: 'taking photos', velho: 'the camera is worse than her friend’s', sente: 'annoyed', bom: 'very good at it', maisimp: 'the best camera' }, diz: '“I use it for taking photos.” · “The camera is worse than my friend’s!” · “I’m really annoyed.” · “Yes, I’m very good at technology.” · “The most important thing is the best camera.”' },
    { k: 'CUSTOMER 2', tag: 'A GRANDFATHER', ele: 'He', fone: 'the Pebble', v: { usa: 'calling his grandkids', velho: 'the buttons are too small', sente: 'confused', bom: 'bad at it, he types slowly', maisimp: 'a big, simple screen' }, diz: '“I use it for calling my grandkids.” · “The buttons are too small for me.” · “I feel confused.” · “No, I’m bad at it. I type very slowly.” · “The most important thing is a big, simple screen.”' },
    { k: 'CUSTOMER 3', tag: 'A STUDENT', ele: 'He', fone: 'the Nova 2', v: { usa: 'playing games and studying', velho: 'it’s slower than his laptop', sente: 'bored of waiting', bom: 'good at it', maisimp: 'the cheapest fast phone' }, diz: '“I use it for playing games and studying.” · “It’s slower than my laptop.” · “I’m bored of waiting for it!” · “Yes, I’m good at it.” · “The most important thing is a fast phone, but the cheapest one.”' }],
  relato: { titulo: 'THE CUSTOMER DECIDES · RECOMMEND A PHONE',
    pede: function (x) { return 'So, which phone is the best for me?'; },
    chips: function () { return ['The … is better / cheaper / faster than …', 'It’s as … as …', 'It’s the best / the most … for you.', 'It works well / quickly.']; },
    modelo: function (x) { return x.fone.charAt(0).toUpperCase() + x.fone.slice(1) + ' is the best for you. You said ' + x.v.maisimp + ' is the most important thing, and it works really well.'; } },
  nao: { more: '“more fast” → FASTER.', most: '“the most cheap” → THE CHEAPEST.', good: '“It works good” → it works WELL.' },
  fim: 'Three customers, three happy choices. -er / the -est, as … as, -ed / -ing and well: all of Unit 5 at one counter.' };

var PODE = [
  'I can compare: cheaper than, more expensive than, better than.',
  'I can say the best, the cheapest, the most expensive.',
  'I can use as … as, the same as and different from.',
  'I can choose -ed (I’m bored) or -ing (it’s boring).',
  'I can say how people do things: well, quickly, carefully; and good at + -ing.'
];

/* MECÂNICAS VARIADAS */
/* A2 R5: escada · missao · erros · cadeira */
var ERROS = { tipo: 'nota', rot: 'A CUSTOMER REVIEW · THE NOVA 2 · ★★★★☆', partes: ['This phone is ', ['more fast', 'faster', 'Short word: -er.'], ' than my old one, and it’s ', ['the most cheap', 'the cheapest', 'the + -est.'], ' phone in the shop. The battery is ', ['as good than', 'as good as', 'as … as.'], ' the Nova 5. My old phone was so ', ['bored', 'boring', 'The thing: -ing.'], '! This one works really ', ['good', 'well', 'How it works: well.'], '. I’m not very good ', ['in using', 'at using', 'good at + -ing.'], ' technology, but it’s easy.'] };
var CADEIRA = { itens: [
  { alvo: 'Ask me how old my phone is.', dica: 'How old is your phone?', resp: 'It’s three years old.' },
  { alvo: 'Ask me to compare my phone with my old one.', dica: 'Is it better than your old phone?', resp: 'Yes, it’s much faster.' },
  { alvo: 'Ask me about the best app on my phone.', dica: 'What’s the best app on your phone?', resp: 'The map. I’m bad at directions!' },
  { alvo: 'Ask me what I’m good at.', dica: 'What are you good at?', resp: 'I’m good at cooking.' },
  { alvo: 'Ask me something I find boring.', dica: 'What do you think is boring?', resp: 'Long meetings are so boring!' }] };
