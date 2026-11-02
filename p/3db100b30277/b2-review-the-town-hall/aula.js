/* ============================================================
   REVIEW · B2 · UNIT 8 · THE TOWN HALL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: escada · tabuleiro · cartao · cadeira · pode.
   Unidade 8 (Ligar, contrastar e explicar): concessão (although, despite, however, no matter how;
   admittedly, granted, having said that, even so); contraste formal (whereas, while, on the other
   hand, in contrast); causa e efeito (due to, as a result, consequently); finalidade (so that).
   O tabuleiro: assembleia na prefeitura sobre fechar a rua principal para carros. Cada casa é uma
   voz da cidade; o aluno argumenta, concede e rebate. No fim escreve à prefeitura.
   ============================================================ */
var REV = { nivel: 'B2', unidade: 8, titulo: ['The Town', 'Hall'], tema: 'Connecting, contrasting, explaining', placa: 'PUBLIC MEETING · 7 PM', lugarConversa: 'THE FOUNTAIN SQUARE', cor: '#b9e27a', cor2: '#dcf0bd',
  sub: 'Unit 8 review. Tonight the town decides: should Main Street be closed to cars? Everybody wants to speak. You have the microphone.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escada', est: 'f', min: 8, img: 'conversa', rot: 'I · The Ladder', t: 'Climb from easy to hard.', p: 'One step at a time. A good answer, and you go up.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'II · The Public Meeting', t: 'Roll, move, answer the voice of the town.', p: 'Your teacher rolls the die and speaks as that person. You answer: agree, concede, disagree.' },
  { k: 'cartao', est: 'w', min: 7, img: 'conversa', rot: 'III · Letter to the Council', t: 'Write to the council.', p: 'Four lines: your position, a concession, a contrast, and a result.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'ALTHOUGH', tema: 'although, even though, despite, in spite of', t: 'Your job or your city: one good thing despite a problem. Say it two ways.', ex: 'Although the rent is high, I love my neighborhood. Despite the high rent, I love it.', trap: 'although + sentence; despite + noun or -ing.' },
  { k: 'NO MATTER HOW', tema: 'however much, no matter how', t: 'Something you never manage, no matter how hard you try.', ex: 'No matter how early I go to bed, I’m always tired. However much I clean, the flat is messy.', trap: 'no matter how + adjective / adverb + subject + verb.' },
  { k: 'GRANTED', tema: 'admittedly, granted, having said that, even so', t: 'Your teacher gives an opinion. Agree in part, then disagree.', ex: 'Granted, the city is expensive. Having said that, the salaries are higher. Even so, I’d leave.', trap: 'Concede first (granted), then turn (having said that / even so).' },
  { k: 'WHEREAS', tema: 'whereas, while, on the other hand, in contrast', t: 'Compare two cities, two jobs or two generations, in a formal way.', ex: 'My parents bought a house at 25, whereas most of my friends still rent. In contrast, we travel more.', trap: 'whereas / while join two sentences; in contrast starts a new one.' },
  { k: 'DUE TO', tema: 'due to, owing to, as a result, consequently', t: 'A recent problem: the cause and the result.', ex: 'Due to the storm, the bridge was closed. As a result, thousands of people were late.', trap: 'due to + noun (not due to + a full sentence).' },
  { k: 'SO THAT', tema: 'so that, in order to: purpose', t: 'Three things your city should do, and why.', ex: 'The city should plant trees so that the streets are cooler, and build bike lanes in order to reduce traffic.', trap: 'so that + subject + can / will; in order to + verb.' }
];

var CARTAO = { ph: 'Dear Council,\nI support closing Main Street to cars, so that children can walk safely.\nAdmittedly, some shops may lose customers at first. Having said that, quieter streets attract more people.\nWhereas drivers can use the new ring road, pedestrians have no other option.\nDue to the traffic, the air is terrible; as a result, we must act now.', rot: 'My letter to the council',
  chips: ['I support / I oppose ', 'so that ', 'in order to ', 'Admittedly, ', 'Granted, ', 'Having said that, ', 'Even so, ', 'Whereas ', 'On the other hand, ', 'Due to ', 'As a result, ', 'No matter how '],
  perg: ['TO THE COUNCIL', 'Do you support or oppose? Concede one point. Contrast two groups. Say a cause and a result.'],
  exemploRot: 'THE PROPOSAL', exemplo: [['WHAT', 'close Main Street to cars'], ['WHEN', 'from next March'], ['FOR', 'walkers, cafes, children'], ['AGAINST', 'some shops, taxi drivers'], ['VOTE', 'tonight']],
  modelo: 'Dear Council, I support closing Main Street to cars, so that children can walk safely.<br>Admittedly, some shops may lose customers at first. Having said that, quieter streets attract more people.<br>Due to the traffic, the air is terrible; as a result, we must act now.' };

var PODE = [
  'I can concede and still disagree: although, despite, even so, having said that.',
  'I can use no matter how / however much.',
  'I can contrast formally: whereas, while, on the other hand, in contrast.',
  'I can explain causes and results: due to, as a result, consequently.',
  'I can say why and what for: so that, in order to.'
];

/* MECÂNICAS VARIADAS */
/* B2 R8: escada · tabuleiro · cartao · cadeira */
var TABULEIRO = { rot: 'MAIN STREET · CARS OR NO CARS?', centro: 'Agree, concede, disagree. Connect everything.', casas: [
  { k: 'THE MAYOR', t: '“We want to close Main Street to cars.” Give your first reaction with although.', ex: 'Although it sounds radical, I think it’s a good idea.' },
  { k: 'THE BAKER', t: '“I’ll lose customers!” Concede, then answer.', ex: 'Granted, you might lose drivers. Having said that, you’ll gain people walking by.' },
  { k: 'THE TAXI DRIVER', t: '“It’ll take me twice as long.” Use despite.', ex: 'Despite the longer route, the ring road is faster at rush hour.' },
  { k: 'A MOTHER', t: '“My kids could walk to school!” Use so that.', ex: 'Exactly. We should close it so that children can walk safely.' },
  { k: 'THE DOCTOR', t: '“The air is terrible.” Give a cause and a result.', ex: 'Due to the traffic, the air is polluted. As a result, more people are getting sick.' },
  { k: 'THE OLD MAN', t: '“In my time, this street had no cars.” Compare then and now with whereas.', ex: 'Fifty years ago it was a market, whereas now it’s a car park.' },
  { k: 'THE SHOP OWNER', t: '“No matter what you do, I’ll vote no!” Answer politely.', ex: 'No matter how you vote, your shop will always be welcome here.' },
  { k: 'A STUDENT', t: '“Bikes are cheaper.” Contrast with on the other hand.', ex: 'Bikes are cheaper. On the other hand, not everyone can ride one.' },
  { k: 'THE ENGINEER', t: '“The ring road isn’t ready.” Use consequently or as a result.', ex: 'The ring road won’t be ready until May. Consequently, we should wait until June.' },
  { k: 'THE CAFE OWNER', t: '“I want tables on the street!” Concede and add.', ex: 'Admittedly, tables would look great. Even so, we need space for ambulances.' },
  { k: 'THE JOURNALIST', t: '“What’s the main argument?” Summarize in one sentence with in order to.', ex: 'We want to close it in order to make the center safer and greener.' },
  { k: 'THE VOTE', t: 'Final speech: your position, one concession, one result.', ex: 'I vote yes. Granted, it won’t be easy. Even so, as a result, our town will be healthier.' }] };
var CADEIRA = { itens: [
  { alvo: 'Ask me about something I love despite a problem.', dica: 'What do you love, despite a problem?', resp: 'My old car. Despite its age, it never fails.' },
  { alvo: 'Ask me to compare my city with another one.', dica: 'How is your city different from…?', resp: 'Mine is quiet, whereas Rio never sleeps.' },
  { alvo: 'Give me an opinion. I’ll concede and disagree.', dica: 'I think social media is terrible.', resp: 'Granted, it can be toxic. Having said that, it helps small businesses.' },
  { alvo: 'Ask me about a problem in my city and its result.', dica: 'What problem does your city have, and what’s the result?', resp: 'Due to the rain, the roads flood. As a result, buses are always late.' },
  { alvo: 'Ask me about something I can’t do, no matter how hard I try.', dica: 'What can’t you do, no matter how hard you try?', resp: 'No matter how hard I try, I can’t wake up early!' }] };
