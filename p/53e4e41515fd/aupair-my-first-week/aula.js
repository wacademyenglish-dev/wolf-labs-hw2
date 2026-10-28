/* ============================================================
   AU PAIR · MODULE 6 · LESSON 24 OF 24 · MY FIRST WEEK · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1). PROJETO FINAL.
   A simulação da chegada (a mãe da família fala, áudio edge-tts Jenny) e o Cartão de Segurança completo.
   Regras usadas (conferidas em 15/10/2026): um adulto responsável fica em casa nos 3 primeiros dias; a coordenadora
   faz contato em 48 h e encontra a família e a au pair em até 2 semanas; linha do Departamento de Estado 1-866-283-9090
   (jvisas@state.gov); linha contra tráfico humano 1-888-373-7888 (SMS 233733). Coordenadora e telefone FICTÍCIOS (555-01xx).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 24, kick: 'AU PAIR · MODULE 6 · LESSON 24 OF 24 · FINAL PROJECT', titulo: ['My First', 'Week'], tema: 'Arrival day and your Safety Card', placa: 'LESSON 24',
  lugarConversa: 'THE FRONT DOOR', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'The last lesson: you arrive. The host mom welcomes you, you answer, and you finish the most important thing of this course: your Safety Card.',
  chips: ['A message from your coordinator', 'Arrival day', 'Your Safety Card'], botao: 'Start the final project',
  nota: 'Everything you learned fits in one card and one smile. Welcome to your year.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 8, img: 'conversa', rot: 'I · A Message From Your Coordinator', t: 'Your coordinator writes on day one.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'prova', est: 'o', min: 14, img: 'capa', rot: 'II · Arrival Day', t: 'Mrs. Parker welcomes you. Answer.', p: 'Play each line, start the clock, answer in about 30 seconds.' },
  { k: 'cartao', est: 'w', min: 14, img: 'conversa', rot: 'III · My Safety Card', t: 'Write your Safety Card.', p: 'Contacts, rights, phrases. Then save it in your phone and on paper.' },
  { k: 'pode', est: 'f', min: 5, img: 'capa', rot: 'IV · I Can', t: 'The course is done. What can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms and stamps the course.' }
];

var LEITURA = { rot: 'A MESSAGE FROM KAREN, YOUR LOCAL COORDINATOR (FICTIONAL)', tipo: 'chat',
  antes: { q: 'What do you think your coordinator will say on your first day?', h: 'Welcome, when she will call or visit, how to contact her, the monthly meetings…' },
  texto: 'KAREN: Welcome to Illinois, Ana! I’m Karen, your {local coordinator}.\nKAREN: I’ll {call you within 48 hours}, and we’ll {meet at your host family’s home within two weeks}.\nKAREN: Our {cluster meeting} is on the second Saturday of every month. You’ll meet the other au pairs!\nKAREN: Save my number: (217) 555-0142. {For any problem with the family, call me}, anytime.\nKAREN: {Emergency? Call 911 first.} The {State Department help line} is 1-866-283-9090.\nKAREN: The first days are a lot. Be patient with yourself. You’re not alone!',
  perguntas: [
    { q: 'When will Karen call, and when will she visit?', h: 'She will call within 48 hours and meet at the family’s home within two weeks.' },
    { q: 'What is a cluster meeting? When is it?', h: 'A monthly meeting with the au pairs of the area: the second Saturday of every month.' },
    { q: 'Who do you call for a problem with the family? And in an emergency?', h: 'Karen (the coordinator). In an emergency: 911 first.' },
    { q: 'What is her last advice?', h: 'Be patient with yourself. You’re not alone.' }],
  olha: 'The highlighted words are your first-week plan. They go straight to your Safety Card.' };

var PROVA = { rot: 'ARRIVAL DAY', tarefas: [
  { k: 'AT THE DOOR', tipo: 'fala', seg: 30, audio: 'fw1.mp3', ouve: 'Welcome! We’re so happy you’re finally here. How was your flight?', enun: 'Listen to Mrs. Parker. Answer warmly.',
    criterios: ['Thanked her / said she is happy too', 'Answered about the flight (past simple)', 'Asked a question back'],
    modelo: 'Thank you so much! I’m so happy to be here. The flight was long, and it was delayed in São Paulo, but everything was OK. How are the kids?' },
  { k: 'YOUR ROOM', tipo: 'fala', seg: 30, audio: 'fw2.mp3', ouve: 'This is your room. Is there anything you need for tonight?', enun: 'Listen. Answer.',
    criterios: ['Thanked her for the room', 'Asked for something real (wifi, a towel, a charger…)', 'Polite request: Could I…?'],
    modelo: 'It’s beautiful, thank you! Could I have the wifi password? I’d like to tell my mom I arrived.' },
  { k: 'THE SCHEDULE', tipo: 'fala', seg: 30, audio: 'fw3.mp3', ouve: 'Tomorrow I’ll show you the kids’ routine. Do you have any questions about the schedule?', enun: 'Listen. Ask about the schedule.',
    criterios: ['Asked about hours or days off', 'Proposed to write it down', 'Kind tone'],
    modelo: 'Yes, thank you. Could we write my weekly schedule down together, with my hours and my days off? It helps me organize my classes.' },
  { k: 'DINNER', tipo: 'fala', seg: 30, audio: 'fw4.mp3', ouve: 'We usually have dinner at six. Is there any food you don’t eat?', enun: 'Listen. Answer.',
    criterios: ['Said what she eats / doesn’t eat', 'Mentioned allergies (or none)', 'Offered to share Brazilian food'],
    modelo: 'Six is early for me, but I’ll get used to it! I eat everything, and I don’t have any allergies. One day I’d love to cook a Brazilian dinner for you.' },
  { k: 'FEELINGS', tipo: 'fala', seg: 30, audio: 'fw5.mp3', ouve: 'How are you feeling? It’s a lot for one day!', enun: 'Listen. Answer honestly.',
    criterios: ['Said how she feels, honestly', 'Gave a reason', 'Ended positively'],
    modelo: 'Honestly, I’m tired and a little emotional, because I miss my family. But I’m really happy and excited to start. Thank you for making me feel welcome.' }] };

var CARTAO = { ph: 'EMERGENCY: 911 · House address: …\nMy coordinator: … · Agency (24 h): …\nState Department help line: 1-866-283-9090 · jvisas@state.gov\nTrafficking hotline: 1-888-373-7888 (text 233733) · Brazilian consulate: …\nMy rights: up to 10 h a day, 45 h a week, 1.5 days off, 1 weekend a month, 2 weeks of vacation · My passport is mine.\nMy phrases: I’m not comfortable with that. · I need to check with my coordinator first. · Could we write the schedule down?\nIn Brazil: … (name, phone, a fixed time to talk every week)', rot: 'My Safety Card',
  chips: ['911', 'the house address', 'my coordinator', 'my agency', '1-866-283-9090', 'jvisas@state.gov', '1-888-373-7888', 'text 233733', 'the Brazilian consulate', 'My passport is mine.', 'I’m not comfortable with that.', 'I need to check with my coordinator first.', 'Could we write the schedule down?', 'someone in Brazil'],
  perg: ['MY SAFETY CARD', 'Seven lines: emergency and address, coordinator and agency, the help lines, your rights, your phrases, someone in Brazil.'],
  exemploRot: 'THE SEVEN LINES', exemplo: [['EMERGENCY', '911 + the house address'], ['MY PEOPLE', 'coordinator + agency (24 h)'], ['HELP LINES', '1-866-283-9090 · 1-888-373-7888'], ['CONSULATE', 'the Brazilian consulate of my region'], ['MY RIGHTS', '10 a day · 45 a week · 1.5 days off · my passport'], ['MY PHRASES', 'not comfortable · check with my coordinator'], ['BRAZIL', 'a person, a phone, a fixed time']],
  modelo: 'EMERGENCY: 911. House: 24 Oak Street, Springfield, IL.<br>Coordinator: Karen, (217) 555-0142. Agency 24 h: (the agency’s number).<br>State Department help line: 1-866-283-9090, jvisas@state.gov.<br>Trafficking hotline: 1-888-373-7888 (text 233733). Brazilian consulate: (from the Itamaraty website).<br>My rights: up to 10 hours a day and 45 a week; 1.5 days off; 1 weekend a month; 2 weeks of vacation. My passport is mine.<br>My phrases: “I’m not comfortable with that.” “I need to check with my coordinator first.”<br>In Brazil: my mom, every Sunday at 7 p.m.' };

var PODE = [
  'I can introduce myself, write a letter and record a video for a host family.',
  'I can fill in forms, read an agreement and answer interviews: family and consulate.',
  'I know my rights, the red flags and who to call.',
  'I can live the day-to-day with the kids, say no kindly, and enjoy my year.',
  'I have my Safety Card, in my phone and on paper.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 24 · projeto final: leitura · prova (áudio) · cartao (os dados estão no topo do aula.js) */
