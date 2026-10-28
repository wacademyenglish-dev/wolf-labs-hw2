/* ============================================================
   AU PAIR · MODULE 6 · LESSON 22 OF 24 · MY WEEKEND · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   A vida fora da casa: contar o fim de semana (past simple) e planejar o próximo (going to / will).
   Vídeo: Au Pair in America, "Life with APiA | Wiktoria's 4th vlog" (5:36): um fim de semana em Nova York com amigas
   au pairs (no lugar do vlog da Ola, que não tem legenda). Wiktoria é polonesa e mora perto de Chicago. Legenda conferida.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 22, kick: 'AU PAIR · MODULE 6 · LESSON 22 OF 24', titulo: ['My', 'Weekend'], tema: 'Friends, trips and free time', placa: 'LESSON 22',
  lugarConversa: 'THE DINER', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Free time is part of your au pair year: friends, trips, new places. Today you follow an au pair’s weekend in New York, tell your weekend and plan the next one.',
  chips: ['A weekend in New York', 'What did you do?', 'Your weekend plan'], botao: 'Start the lesson',
  nota: 'Make friends with other au pairs at cluster meetings and classes: they become your family in the USA.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 10, img: 'conversa', rot: 'I · Wiktoria in New York', t: 'An au pair’s weekend trip.', p: 'One question before, then the video, then the questions.' },
  { k: 'conversa', est: 'o', min: 10, img: 'capa', rot: 'II · How Was Your Weekend?', t: 'Monday morning: the family asks.', p: 'Answer in the past. Then ask back: “And you?”' },
  { k: 'cartao', est: 'w', min: 12, img: 'conversa', rot: 'III · Your Weekend Plan', t: 'Plan a weekend trip.', p: 'Where, with whom, how, what you are going to do, and the safety plan.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 22: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'QtdzZGKsOX4', titulo: 'Life with APiA | Wiktoria’s 4th vlog', fonte: 'AU PAIR IN AMERICA · 6 MIN',
  antes: { q: 'If you had a free weekend in New York, what would you do?', h: 'Central Park, Times Square, a famous bagel, a museum, a show…' },
  ouvir: 'Listen: How did she travel? What did they eat and see?',
  perguntas: [
    { q: 'How and when did she travel to New York?', h: 'By plane, very early on Saturday morning, to LaGuardia.' },
    { q: 'What food did they try?', h: 'Bagels (three different places!) and her first real matcha.' },
    { q: 'What places did they visit? Say four.', h: 'The Rockefeller Christmas tree, Central Park, the Central Park Zoo, the Roosevelt Island Tramway, the Friends building, Chinatown, Little Italy, Times Square, Pier 35.' },
    { q: 'What happens in Times Square at 11:57 p.m.?', h: 'The billboards go black and a digital art show appears for three minutes until midnight.' },
    { q: 'Where is “home” for her, and how did the trip end?', h: 'Chicago. She went back on Monday with one friend; the third friend left on Sunday.' }],
  fecho: 'Plan, go with friends, try everything, and come back with stories (in the past simple!).' };

var CONVERSA = [
  { q: 'Hi! How was your weekend?', f: 'Did you have a good weekend?', voce: ['It was great!', 'I went to…', 'We…'], ex: 'It was great! I went to the city with two au pair friends. We visited a museum and ate pizza.' },
  { q: 'What did you do on Saturday?', f: 'Where did you go on Saturday?', voce: ['On Saturday, I…', 'In the morning,…', 'In the evening,…'], ex: 'On Saturday morning, I took the train downtown. In the evening, we went to a concert in the park.' },
  { q: 'Did you meet anyone new?', f: 'Did you make new friends?', voce: ['Yes, I met…', 'She’s from…', 'No, but…'], ex: 'Yes, I met an au pair from Colombia at the cluster meeting. We’re going to study together.' },
  { q: 'What are you going to do next weekend?', f: 'Any plans for next weekend?', voce: ['I’m going to…', 'Maybe I’ll…', 'I’d love to…'], ex: 'I’m going to visit Chicago with my friends. Maybe we’ll go to the lake if it’s sunny.' },
  { q: 'Is there anything you need from us for your trip?', f: 'Can we help with your plans?', voce: ['Could you…?', 'Do you know…?', 'Thank you!'], ex: 'Could you tell me which train goes downtown? And thank you for asking!' }];

var CARTAO = { ph: 'Where: …\nWith: …\nHow: …\nI’m going to …\nMy safety plan: …', rot: 'My weekend plan',
  chips: ['I’m going to', 'with my friends', 'by train', 'by bus', 'We’ll stay at', 'I’ll share my location with', 'I’ll be back on Sunday at', 'my phone charged'],
  perg: ['YOUR WEEKEND PLAN', 'Five lines. Remember: your full weekend off is from Friday evening to Monday morning.'],
  exemploRot: 'THE PLAN', exemplo: [['WHERE', 'a city, a lake, a park'], ['WITH', 'friends from the cluster'], ['HOW', 'train, bus, a friend’s car'], ['WHAT', 'I’m going to…'], ['SAFETY', 'who knows where you are, and when you come back']],
  modelo: 'Where: Chicago, on my free weekend.<br>With: two au pair friends from my cluster.<br>How: by train, on Saturday morning.<br>I’m going to see the lake, eat deep-dish pizza and visit the Art Institute.<br>My safety plan: I’ll share my location with my host mom and be back on Sunday at 8 p.m.' };

var PODE = [
  'I can understand an au pair’s weekend vlog.',
  'I can tell my weekend in the past: I went, we visited, I met…',
  'I can plan a trip with going to and will.',
  'I can include a safety plan in my weekend.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 22: video · conversa · cartao (os dados estão no topo do aula.js) */
