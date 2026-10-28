/* ============================================================
   AU PAIR · MODULE 4 · LESSON 13 OF 24 · KNOW YOUR RIGHTS · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   As regras do programa, conferidas em 15/10/2026 no regulamento federal (22 CFR 62.31, via law.cornell.edu) e no site
   oficial j1visa.state.gov: até 10 h por dia e 45 h por semana; 1,5 dia de folga por semana; 1 fim de semana inteiro por
   mês (sexta à noite a segunda de manhã); 2 semanas de férias pagas; a família paga até US$ 500 do curso (6 créditos);
   quarto privado; linha do Departamento de Estado 1-866-283-9090 / jvisas@state.gov. A proposta de mudança de 2023 NÃO
   foi aprovada (situação em out/2026). Folheto oficial "Know Your Rights" (Wilberforce): passaporte com você, denunciar
   abuso sem retaliação. O valor do stipend não entra na aula (muda; a agência informa).
   Vídeo: AupairSync, "45 hours a week…" (8:34), trecho 0:44–6:06 (sem a parte do aplicativo, que é propaganda).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 13, kick: 'AU PAIR · MODULE 4 · LESSON 13 OF 24', titulo: ['Know Your', 'Rights'], tema: 'The rules that protect you', placa: 'LESSON 13',
  lugarConversa: 'YOUR OWN ROOM', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'The au pair program has clear rules about hours, time off and vacation, and you have rights as a person. Today you learn the five numbers and how to count your hours.',
  chips: ['The five numbers', 'Your rights card', 'Count the hours'], botao: 'Start the lesson',
  nota: 'Knowing the rules is not being difficult. It protects you, the kids and the family.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 12, img: 'conversa', rot: 'I · The Five Numbers', t: 'A host family learns the rules.', p: 'One question before, then the video, then the questions.' },
  { k: 'leitura', est: 'l', min: 9, img: 'capa', rot: 'II · Your Rights Card', t: 'The program rules and your rights.', p: 'Read the card out loud. Then answer the questions.' },
  { k: 'multipla', est: 'f', min: 12, img: 'conversa', rot: 'III · Count the Hours', t: 'Six real weeks. Inside the rules or not?', p: 'Count. Choose. Then say why.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 13: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: '4gmpcqs9NrU', titulo: '45 hours a week: scheduling your au pair without breaking the J-1 rules', fonte: 'AUPAIRSYNC · 0:44–6:06', inicio: 44, fim: 366,
  antes: { q: 'How many hours do you think an au pair can work per week? And per day?', h: 'Up to 45 per week, and no more than 10 per day.' },
  ouvir: 'Listen for the five numbers. Then: what counts as work?',
  perguntas: [
    { q: 'What are the five numbers?', h: '10 hours a day; 45 a week; a day and a half off every week; one full weekend off every month (Friday evening to Monday morning); two weeks of paid vacation.' },
    { q: 'If she works 30 hours one week, can she work 60 the next?', h: 'No. Hours don’t move to the next week. Every week starts at zero.' },
    { q: 'If the family pays extra, can she work more?', h: 'No. Paying more doesn’t change the limit.' },
    { q: 'The kids are asleep and the parents are out. Is she working?', h: 'Yes. If she is responsible for the kids, she is on duty.' },
    { q: 'What went wrong in the “real week”?', h: 'A sick day, a late meeting, a teacher work day, date night, a tournament and two hours on Sunday: 55 hours, and no full day off.' }],
  fecho: 'Every hour you are in charge of the kids counts. Plan the week before it starts.' };

var LEITURA = { rot: 'YOUR RIGHTS CARD', tipo: 'nota',
  antes: { q: 'What do you think: who keeps your passport in the USA?', h: 'You do. Always.' },
  texto: 'THE PROGRAM RULES (U.S. Department of State)\n{Up to 10 hours a day} and {up to 45 hours a week} of childcare.\n{One and a half days off} every week, and {one full weekend off} every month.\n{Two weeks of paid vacation} in your year.\nYour own {private bedroom}.\nClasses: the family pays {up to $500} for your studies.\nYOUR RIGHTS AS A PERSON (“Know Your Rights” pamphlet)\nYour {passport and documents are yours}: keep them with you.\nYou can {report abuse} and ask for help without punishment.\nHELP: your coordinator, your agency, and the State Department help line {1-866-283-9090} (jvisas@state.gov).',
  perguntas: [
    { q: 'What are the limits per day and per week?', h: '10 hours per day, 45 hours per week.' },
    { q: 'What time off do you have?', h: 'One and a half days every week, one full weekend every month, and two weeks of paid vacation.' },
    { q: 'Who keeps your passport?', h: 'You. It is yours.' },
    { q: 'Who can you call if something is wrong?', h: 'The coordinator, the agency, and the State Department help line: 1-866-283-9090.' }],
  olha: 'The highlighted words are your protection. Take a photo of this card. You will build your full Safety Card in Lesson 24.' };

var MULTIPLA = { rot: 'COUNT THE HOURS', fim: 'When a week breaks the rules, talk to the family early, and to your coordinator if it continues.', itens: [
  { txt: 'Monday to Friday: 7–9 a.m. and 12–5:30 p.m. Saturday and Sunday off.', q: 'Is this week inside the rules?', ops: ['Yes: 37.5 hours, and two days off.', 'No: too many hours.', 'No: not enough days off.'], c: 0, por: '2 + 5.5 = 7.5 hours a day × 5 = 37.5. Under 45, under 10 a day, weekend off.' },
  { txt: 'Friday: 7 a.m. to 4 p.m. with the kids, then 7 to 10:30 p.m. for date night.', q: 'Is Friday inside the rules?', ops: ['Yes, it’s only one day.', 'No: 12.5 hours in one day.', 'Yes, if they pay extra.'], c: 1, por: '9 + 3.5 = 12.5 hours. The limit is 10 per day, even with extra pay.' },
  { txt: 'The family says: “Last week you worked 30 hours, so this week you can do 60.”', q: 'Is that OK?', ops: ['Yes, the average is 45.', 'Yes, if you agree.', 'No: hours don’t carry over.'], c: 2, por: 'Every week starts at zero. 45 is the limit every week.' },
  { txt: 'On her day off, the family asks her to watch the kids for two hours “because she is home anyway”.', q: 'What is true?', ops: ['It doesn’t count: she is at home.', 'It counts as work, and it breaks her day off.', 'It’s fine if it’s less than 3 hours.'], c: 1, por: 'If she is responsible for the kids, it is work. And her day and a half off must be free.' },
  { txt: 'The parents go to a party. The kids sleep from 8 p.m. The au pair is in charge until 1 a.m.', q: 'Does 8 p.m. to 1 a.m. count?', ops: ['No, the kids are asleep.', 'Yes, every hour counts.', 'Only half of it.'], c: 1, por: 'She is responsible for the kids, so she is on duty, even if they are asleep.' },
  { txt: 'The family takes her on their vacation. She watches the kids 6 hours a day.', q: 'Is this her vacation?', ops: ['Yes, she is traveling.', 'No: it is work, and it counts toward the 45.', 'Yes, if the hotel is nice.'], c: 1, por: 'A family trip is not her vacation if she does childcare. Her two weeks are separate.' }] };

var PODE = [
  'I can say the five numbers: 10 a day, 45 a week, 1.5 days off, 1 weekend a month, 2 weeks of vacation.',
  'I can count my hours and see when a week breaks the rules.',
  'I can say that my passport and documents are mine.',
  'I can say who to call: coordinator, agency, 1-866-283-9090.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 13: video · leitura · multipla (os dados estão no topo do aula.js) */
