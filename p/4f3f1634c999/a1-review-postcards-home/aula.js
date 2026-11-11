/* ============================================================
   REVIEW · A1 · UNIT 9 · POSTCARDS · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js.
   Unidade 9 (Tempo, corpo e comparação): o tempo com It’s (sunny, hot, in winter); a saúde (I have a…,
   I feel…, it hurts, you should…); and, but, so, because; comparativos (-er / more / than, as
   irregulares); superlativos; good × well.
   A missão: o aluno liga para três amigos que estão viajando e anota tudo num cartão-postal; no fim
   conta para a família: “Ana is in Lisbon. It’s hot and sunny. It’s smaller than Rio, but…”
   ============================================================ */
var REV = { nivel: 'A1', unidade: 9, titulo: ['Postcards', 'Home'], tema: 'Weather, body and comparing', placa: 'POSTCARDS', lugarConversa: 'ABOVE THE CLOUDS', cor: '#7fc8e8', cor2: '#bfe4f4',
  sub: 'Unit 9 review. Three friends are traveling, and they call you tonight. Six doors, three phone calls, and three postcards for your family.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escada', est: 'f', min: 8, img: 'conversa', rot: 'I · The Ladder', t: 'Climb from easy to hard.', p: 'One step at a time. A good answer, and you go up.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · Postcards', t: 'Three friends call from far away.', p: 'Ask each friend five questions. Your teacher is the friend. Then tell your family the news.' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'III · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose one.', p: 'Choose one. Then say it with because.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · Postcard Pairs', t: 'Five lines for your postcards.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'IT’S SUNNY', tema: 'the weather with it’s', t: 'What’s the weather like today? And in your city in winter?', ex: 'It’s sunny and hot today. In winter it’s cold and rainy.', trap: '“Is sunny” / “Makes cold” → IT’S sunny, IT’S cold.' },
  { k: 'I FEEL', tema: 'health: I have a…, I feel…, should', t: 'You are sick. Say what you have, how you feel, and get advice.', ex: 'I have a headache. I feel tired. — You should rest.', trap: '“I’m with headache” → I HAVE a headache.' },
  { k: 'SO, BECAUSE', tema: 'and, but, so, because', t: 'Join: I’m tired / I go to bed early. Then say one sentence with because.', ex: 'I’m tired, so I go to bed early. I go to bed early because I’m tired.', trap: 'so = the result; because = the reason.' },
  { k: 'BIGGER', tema: 'comparatives', t: 'Compare your city with another city: two sentences.', ex: 'São Paulo is bigger than Recife. Recife is hotter and more beautiful.', trap: '“more big” → bigger; good → better; bad → worse.' },
  { k: 'THE BEST', tema: 'superlatives', t: 'The best food, the biggest city, the most beautiful place you know.', ex: 'The best food is my mom’s. The biggest city is São Paulo.', trap: 'the + -est: the biggest; good → the best.' },
  { k: 'GOOD, WELL', tema: 'good × well', t: 'Say two things you do well and one good thing about you.', ex: 'I cook well. I swim well. I’m a good friend.', trap: 'good + thing/person; well + action: “I cook good” → I cook well.' }
];

var MISSAO = { pede: 'THE PHONE CALL · ASK FIVE QUESTIONS', quem: 'friend', depois: 'Tell your family',
  campos: [
    { c: 'tempo', r: 'WEATHER', q: 'What’s the weather like there?', f: 'The weather?' },
    { c: 'compara', r: 'COMPARED', q: 'Is it bigger or smaller than our city?', f: 'Bigger? Smaller?' },
    { c: 'melhor', r: 'THE BEST', q: 'What’s the best thing there?', f: 'The best thing?' },
    { c: 'sente', r: 'FEELS', q: 'How do you feel?', f: 'You feel…?' },
    { c: 'porque', r: 'WHY', q: 'Do you like it? Why?', f: 'Like it? Why?' }],
  itens: [
    { k: 'FRIEND 1', tag: 'ANA IN LISBON', ele: 'She', nome: 'Ana', cidade: 'Lisbon', v: { tempo: 'sunny and hot', compara: 'smaller than our city', melhor: 'the food', sente: 'a headache (the sun!)', porque: 'yes, because people are friendly' }, diz: '“It’s sunny and very hot.” · “It’s smaller than our city, but it’s beautiful.” · “The best thing is the food!” · “I have a headache. The sun is very strong.” · “Yes, I love it, because the people are very friendly.”' },
    { k: 'FRIEND 2', tag: 'BEN IN LONDON', ele: 'He', nome: 'Ben', cidade: 'London', v: { tempo: 'cold and rainy', compara: 'bigger and more expensive', melhor: 'the museums', sente: 'tired, so he sleeps early', porque: 'yes, but it’s expensive' }, diz: '“It’s cold and rainy, of course.” · “It’s bigger and more expensive than our city.” · “The best thing is the museums.” · “I feel tired, so I go to bed early.” · “Yes, I like it, but it’s very expensive.”' },
    { k: 'FRIEND 3', tag: 'KIM IN TOKYO', ele: 'She', nome: 'Kim', cidade: 'Tokyo', v: { tempo: 'windy but warm', compara: 'the biggest city in the world!', melhor: 'the trains', sente: 'great: she sleeps well', porque: 'yes, because it’s clean and safe' }, diz: '“It’s windy, but it’s warm.” · “It’s much bigger! It’s the biggest city I know.” · “The best thing is the trains. They’re very fast.” · “I feel great. I sleep well.” · “Yes, because it’s very clean and safe.”' }],
  relato: { titulo: 'DINNER WITH YOUR FAMILY · TELL THE NEWS',
    pede: function (x) { return 'Any news from ' + x.nome + '?'; },
    chips: function (x) { return [x.nome + ' is in …', 'It’s … and …', 'It’s …er than …', 'The best thing is …', x.ele + ' feels … / ' + x.ele.toLowerCase() + ' has …', 'because …']; },
    modelo: function (x) { var v = x.v; return x.nome + ' is in ' + x.cidade + '. It’s ' + v.tempo + '. It’s ' + v.compara + '. The best thing is ' + v.melhor + '.'; } },
  nao: { tempo: '“Is very hot” → IT’S very hot.', mais: '“more big” → BIGGER.', bem: '“I sleep good” → I sleep WELL.' },
  fim: 'Three calls, three postcards. The weather, how you feel, -er / the -est, so and because: all of Unit 9 on the phone.' };

var CARTAO = { ph: 'Hi from Salvador!\nIt’s sunny and very hot.\nI have a little sunburn, so I stay in the shade.\nIt’s smaller than São Paulo, but the beaches are the best!', rot: 'My postcard',
  chips: ['Hi from ', 'It’s sunny ', 'It’s cold ', 'I have a ', 'I feel ', ', so ', ' because ', ' is bigger than ', ' smaller than ', 'The best thing is '],
  perg: ['YOUR POSTCARD', 'Where are you? The weather, how you feel, compare, the best thing.'],
  exemploRot: 'POSTCARD · SALVADOR', exemplo: [['WEATHER', 'sunny and very hot'], ['COMPARED', 'smaller than São Paulo'], ['THE BEST', 'the beaches'], ['FEELS', 'a little sunburn'], ['WHY', 'because the sea is warm']],
  modelo: 'Hi from Salvador! It’s sunny and very hot.<br>I have a little sunburn, so I stay in the shade.<br>It’s smaller than São Paulo, but the beaches are the best!' };

var CONVERSA = [
  { q: 'What’s your favorite weather?', f: 'Hot or cold?', voce: ['I like it when it’s …', 'because …'], ex: 'I like it when it’s cold, because I can drink hot chocolate.' },
  { q: 'What do you do when you have a cold?', f: 'A cold: what do you do?', voce: ['I …', 'I should …, but …'], ex: 'I drink tea and I go to bed early.' },
  { q: 'Which is better: the beach or the mountains?', f: 'Beach or mountains?', voce: ['… is better than …', 'because …'], ex: 'The beach is better, because it’s hotter!' },
  { q: 'What’s the most beautiful place in your country?', f: 'The most beautiful place?', voce: ['The most beautiful place is …', 'It’s …'], ex: 'Lençóis Maranhenses. It’s the most beautiful place I know.' },
  { q: 'What do you do well? And what do you do badly?', f: 'Well? Badly?', voce: ['I … well.', 'I … badly.'], ex: 'I drive well, but I sing very badly!' }
];

var PODE = [
  'I can talk about the weather: it’s sunny, it’s cold in winter.',
  'I can say how I feel: I have a headache, I feel tired.',
  'I can join ideas with and, but, so, because.',
  'I can compare: bigger than, more expensive than, better.',
  'I can say the best, the biggest, and good × well.'
];

/* MECÂNICAS VARIADAS */
var PARES = [['big', 'bigger'], ['good', 'better'], ['bad', 'worse'], ['hot', 'the hottest'], ['expensive', 'more expensive'], ['quick', 'quickly']];
PARES = PARES.map(function (p, i) { return [p[0], p[1], ['My city is bigger than yours!', 'Summer is better than winter.', 'Rain is worse than cold.', 'January is the hottest month here.', 'London is more expensive than Lisbon.', 'She speaks very quickly.'][i]]; });
var ESCOLHA = [{ a: 'a hot beach', b: 'a cold mountain', chips: ['I prefer …', 'because it’s …er'], ex: 'A hot beach, because it’s more relaxing.' }, { a: 'London', b: 'Tokyo', chips: ['… is better', 'because …'], ex: 'Tokyo, because the food is the best!' }, { a: 'travel by train', b: 'travel by plane', chips: ['By …', 'because it’s faster / cheaper'], ex: 'By plane, because it’s faster.' }, { a: 'stay in bed with a cold', b: 'go to work with a cold', chips: ['I …', 'so / because …'], ex: 'Stay in bed, because I feel terrible.' }];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.', pares: [{ c: 'It’s very hot.', x: 'Is very hot.', d: 'The weather: <b>It’s</b> …' }, { c: 'Lisbon is bigger than Rio.', x: 'Lisbon is more big than Rio.', d: 'A short adjective: big + <b>-er</b>.' }, { c: 'I sleep well.', x: 'I sleep good.', d: 'How you do it: <b>well</b>.' }, { c: 'I have a headache.', x: 'I’m with headache.', d: 'Health: <b>I have</b> a …' }, { c: 'It’s the best hotel.', x: 'It’s the most good hotel.', d: 'good → the <b>best</b>.' }], nota: 'The weather starts with <b>It’s</b>. A short word + <b>-er</b>: bigger. <b>Good</b> is a thing; <b>well</b> is an action. Pain: <b>I have</b> a headache.', uso: { p: 'Your turn. Write a postcard: the weather, how you feel, and one comparison.', molde: ['It’s … and …', 'I feel …', '… is bigger / better than …'], ex: 'It’s hot and sunny. I feel great. This beach is better than the one in my city.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
