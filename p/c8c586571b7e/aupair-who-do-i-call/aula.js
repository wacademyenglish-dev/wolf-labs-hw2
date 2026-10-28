/* ============================================================
   AU PAIR · MODULE 4 · LESSON 15 OF 24 · WHO DO I CALL? · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   A rede de proteção, conferida em 15/10/2026: coordenadora local (contato em 48 h e encontro em até 2 semanas — regra
   do programa; reuniões mensais), a agência, a linha do Departamento de Estado 1-866-283-9090 / jvisas@state.gov,
   911 (emergência), a linha nacional contra tráfico humano 1-888-373-7888 (SMS 233733, 24 h, humantraffickinghotline.org)
   e o consulado do Brasil da região. Trocar de família (rematch) é feito pela agência.
   Vídeo: InterExchange, "Au Pair USA Local Coordinators" (5:24), trecho 1:33–3:05.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 15, kick: 'AU PAIR · MODULE 4 · LESSON 15 OF 24', titulo: ['Who Do', 'I Call?'], tema: 'Your safety network', placa: 'LESSON 15',
  lugarConversa: 'A CALM CORNER', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'You are never alone in the program. Today you learn who does what, who to call in each situation, and how to make a clear call to 911.',
  chips: ['Meet the coordinators', 'Who do I call?', 'A 911 call'], botao: 'Start the lesson',
  nota: 'Emergency = 911 first. Problem with the family = your coordinator. Coordinator doesn’t help = the agency, then the State Department help line.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · Your Local Coordinator', t: 'What a local coordinator does.', p: 'One question before, then the video, then the questions.' },
  { k: 'multipla', est: 'f', min: 12, img: 'capa', rot: 'II · Who Do I Call?', t: 'Eight situations. Who is the right call?', p: 'Choose. Then say why.' },
  { k: 'ordem', est: 'o', min: 8, img: 'conversa', rot: 'III · A 911 Call', t: 'A clear emergency call, in order.', p: 'Tap the sentences in order. Then say the call out loud, slowly.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'IV · My Contacts', t: 'Write your safety contacts.', p: 'Who, what for, and the number. You will finish the card in Lesson 24.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'V · I Can', t: 'Lesson 15: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'HwxbBFkS7VM', titulo: 'InterExchange Au Pair USA Local Coordinators', fonte: 'INTEREXCHANGE · 1:33–3:05', inicio: 93, fim: 185,
  antes: { q: 'Who helps an au pair when there is a problem with the family?', h: 'The local coordinator (and the agency).' },
  ouvir: 'Listen: When does the coordinator meet you? What happens every month?',
  perguntas: [
    { q: 'When does the coordinator meet the au pair and the family?', h: 'In the first two weeks after the au pair arrives.' },
    { q: 'What do they talk about in that meeting?', h: 'Everything about the program, including the rules of the U.S. Department of State.' },
    { q: 'What happens every month?', h: 'Cluster meetings: au pairs from the same area meet, often with a cultural activity.' },
    { q: 'What extra things does one coordinator do?', h: 'Weekly meetings in coffee shops, an open door at her house, breakfast, an international hike with dishes from each country.' }],
  fecho: 'Your coordinator is your first call for any problem with the family. Save her number on day one.' };

var MULTIPLA = { rot: 'WHO DO I CALL?', fim: 'Save all these numbers today. In Lesson 24 they go on your Safety Card.', itens: [
  { txt: 'A child falls, hits his head and doesn’t wake up properly.', q: 'Who do you call FIRST?', ops: ['911', 'Your coordinator', 'Your mom in Brazil'], c: 0, por: 'A medical emergency: 911 first. Then the parents.' },
  { txt: 'The family wants you to work 55 hours this week.', q: 'Who do you talk to?', ops: ['911', 'The family first, then your coordinator', 'Nobody'], c: 1, por: 'Talk to the family kindly. If it continues, your coordinator.' },
  { txt: 'You talked to your coordinator two times, and nothing changed. The problem is serious.', q: 'Who is next?', ops: ['The agency, and the State Department help line', 'Social media', 'Another au pair only'], c: 0, por: 'The agency, and the State Department help line: 1-866-283-9090 or jvisas@state.gov.' },
  { txt: 'Someone took your passport and says you can’t leave the house.', q: 'Who can you call?', ops: ['Nobody: it’s their house.', '911 if you are in danger, and the trafficking hotline 1-888-373-7888', 'Wait one month'], c: 1, por: 'This is serious. 911 if you are in danger. The National Human Trafficking Hotline helps 24 hours: 1-888-373-7888 (text 233733).' },
  { txt: 'You lost your passport on a weekend trip.', q: 'Who helps you with a new passport?', ops: ['The Brazilian consulate', '911', 'The host family'], c: 0, por: 'The Brazilian consulate of your region. Tell your coordinator too.' },
  { txt: 'You and the family don’t get along, and you want to change families.', q: 'What is the process called, and who helps?', ops: ['Rematch, through your agency and coordinator', 'Running away', 'Asking a new family on Facebook'], c: 0, por: 'Rematch is part of the program. Your coordinator and agency help you.' },
  { txt: 'There is a fire in the house.', q: 'What do you do?', ops: ['Call the parents first', 'Get the kids out, then call 911', 'Post it online'], c: 1, por: 'Get everyone out. Then 911. Then the parents.' },
  { txt: 'You feel very sad and homesick for weeks.', q: 'Who can help?', ops: ['Nobody', 'Your coordinator, other au pairs and your family', 'Only the host family'], c: 1, por: 'It’s common. Talk to your coordinator: she can help you find support.' }] };

var ORDEM = { rot: 'A 911 CALL', pede: 'Tap the six parts of the call in order.',
  passos: ['911, what is your emergency?', 'A child fell and is not responding.', 'The address is 24 Oak Street, Springfield.', 'My name is Ana. I’m the au pair. The parents are not home.', 'He is breathing, but he doesn’t open his eyes.', 'OK. I’ll stay on the phone and follow your instructions.'],
  chips: ['What happened', 'Where', 'Who you are', 'How the child is', 'Stay on the phone'],
  modelo: '911, what is your emergency? — A child fell and is not responding. The address is 24 Oak Street, Springfield. My name is Ana, I’m the au pair, the parents are not home. He is breathing, but he doesn’t open his eyes. — Stay on the line. — OK, I’ll stay on the phone.' };

var CARTAO = { ph: 'Emergency: 911\nMy coordinator: …\nMy agency (24 h): …\nState Department help line: 1-866-283-9090\nTrafficking hotline: 1-888-373-7888', rot: 'My safety contacts',
  chips: ['911', 'my coordinator', 'my agency', '1-866-283-9090', 'jvisas@state.gov', '1-888-373-7888', 'text 233733', 'the Brazilian consulate', 'the address of the house'],
  perg: ['MY CONTACTS', 'Who, what for, and the number. Your teacher checks the official numbers with you.'],
  exemploRot: 'WHO DOES WHAT', exemplo: [['911', 'emergency: health, fire, danger'], ['COORDINATOR', 'any problem with the family'], ['AGENCY', 'when the coordinator can’t solve it'], ['STATE DEPT.', '1-866-283-9090 · jvisas@state.gov'], ['TRAFFICKING HOTLINE', '1-888-373-7888 · text 233733']],
  modelo: 'Emergency: 911.<br>My coordinator: (her name and number).<br>My agency, 24 hours: (the number from the agency).<br>State Department help line: 1-866-283-9090, jvisas@state.gov.<br>National Human Trafficking Hotline: 1-888-373-7888, text 233733.<br>Brazilian consulate of my region: (from the Itamaraty website).' };

var PODE = [
  'I can say who my coordinator is and what she does.',
  'I can choose the right call: 911, coordinator, agency, help line, consulate.',
  'I can make a clear 911 call: what, where, who, how, stay on the phone.',
  'I can write my safety contacts.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 15: video · multipla · ordem · cartao (os dados estão no topo do aula.js) */
