/* ============================================================
   ASSUMING THAT · C1 · UNIT 7 (ARGUE AND PERSUADE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: condições com precisão: assuming (that) (partindo do princípio), supposing (e se…? hipótese),
   given that (como, já que: fato), providing / provided (that) (desde que), in the event of + noun
   (formal), otherwise (senão), in case (por precaução — NÃO é if).
   Armadilha do português: "caso" vira in case (= por precaução) quando deveria ser if; given that
   usado como hipótese; supposing + will.
   O mundo: o e-mail de planejamento de um festival de música ao ar livre (inventado).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 7, titulo: ['Assuming', 'That'], tema: 'If, but more precise.',
  sub: '“If” is fine. But a C1 planner says assuming, supposing, given that, providing, in the event of. Each one tells your listener exactly how sure you are. Plan an open-air festival and see.',
  placa: 'FESTIVAL PLAN · v3', lugarConversa: 'THE WAITING ROOM', cor: '#d8b06a', cor2: '#ecd8b4',
  chips: ['assuming that', 'given that', 'in the event of'], botao: 'Start the lesson', nota: 'Every condition word carries a different level of certainty.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Your Plans', t: 'Plans with conditions.', p: 'Answer with detail. Then ask the question back.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · The Plan', t: 'An email three weeks before the festival.', p: 'Read it aloud. Answer the questions. Then look closer.' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'III · If or In Case?', t: 'Two plans for the festival. Two different ideas.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new moments.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'IV · How Sure Are You?', t: 'Five ways to say “if”.', p: 'Compare A and B. What does each word tell you?' },
  { k: 'transforma', est: 'f', min: 7, img: 'capa', rot: 'V · Say It Precisely', t: 'If → the precise word.', p: 'Read the sentence with if. Use the clue. Say it more precisely.' },
  { k: 'tabuleiro', est: 'o', min: 14, img: 'capa', rot: 'VI · The Planning Board', t: 'Roll, move, plan with conditions.', p: 'Your teacher rolls the die. Plan your square with the right condition word.' }
];
var PORTAS = [];

var CONVERSA = [
  { q: 'What are you planning for your next holiday, and what could change the plan?', f: 'Your next holiday?', voce: ['Assuming that …, I’ll …', 'If …, I might …'], ex: 'Assuming that I get the days off, I’ll go to Bahia in January.' },
  { q: 'What do you always take with you, just in case?', f: 'Just in case?', voce: ['I always take … in case …', 'just in case'], ex: 'An umbrella, in case it rains. And a charger, in case my phone dies.' },
  { q: 'Imagine: supposing you lost your phone today. What would you do first?', f: 'Lost phone: first thing?', voce: ['Supposing that happened, I’d …', 'I’d …'], ex: 'Supposing that happened, I’d call my bank first. Then I’d panic!' }
];

var LEITURA = { rot: 'SUBJECT: RIVERSIDE FEST · PLAN v3', tipo: 'nota',
  antes: { q: 'If you were organizing an outdoor music festival, what could go wrong?', h: 'Rain, a band cancelling, too many people, not enough toilets, no money!' },
  texto: 'Hi team,\n{Assuming that} the council signs the permit this week, we start building the stage on 1 June.\n{Given that} all tickets sold out in two days, we will need double the toilets.\n{Supposing} it rains on the Saturday? We have a covered tent for 2,000 people, {providing} we pay the deposit by Friday.\n{In the event of} a storm, the police will close the park, so please read the safety plan. {Otherwise}, we could be fined.\nI’ve also booked a second sound engineer, {in case} ours gets sick again.\n{As long as} we stay on budget, I think this will be our best festival yet.\nBest, Nadia',
  perguntas: [
    { q: 'What has to happen before they can build the stage?', h: 'The council has to sign the permit.' },
    { q: 'Why do they need double the toilets?', h: 'Because all the tickets sold out in two days: that’s a fact.' },
    { q: 'What’s the plan for rain, and what’s the condition?', h: 'A covered tent for 2,000 people, but only if they pay the deposit by Friday.' },
    { q: 'Why did Nadia book a second sound engineer?', h: 'As a precaution: maybe theirs gets sick again.' }],
  olha: 'Find seven condition words. Which one introduces a FACT? Which one is a PRECAUTION, not a condition?' };

var DESCOBRE = {
  pares: [
    { a: '{Assuming that} the council signs, we start on 1 June.', b: '{Given that} all tickets sold out, we need more toilets.', q: 'Which one is a fact we already know? Which one is something we expect but don’t know yet?', r: 'given that = it’s a fact (= because). assuming that = we believe it will happen, but it’s not certain.' },
    { a: '{Supposing} it rains? We have a tent.', b: '{If} it rains, we use the tent.', q: 'What extra flavor does supposing have?', r: 'supposing = let’s imagine this possibility (often as a question). It invites the listener to think: “Supposing it rains?”' },
    { a: 'Take an umbrella {in case} it rains.', b: 'Take an umbrella {if} it rains.', q: 'Are these the same? When do you take the umbrella in each one?', r: 'No! in case = take it now, as a precaution. if = take it only when it is raining. “Caso” in Portuguese is usually if, not in case.' },
    { a: '{In the event of} a storm, the park will close.', b: '{In the event} there’s a storm, the park will close.', q: 'Which form goes with a noun?', r: 'A. in the event of + noun (formal, safety notices). B needs “that”: in the event that there is a storm.' }],
  regra: [['ASSUMING (THAT)', 'we expect it, not certain: Assuming that the permit arrives…'], ['GIVEN THAT', 'a known fact (= because): Given that tickets sold out…'], ['SUPPOSING / PROVIDING / AS LONG AS', 'imagine… · only on this condition'], ['IN CASE · IN THE EVENT OF · OTHERWISE', 'precaution · formal “if” + noun · if not']],
  armas: [
    ['IN CASE', 'Call me in case you need help. (= only if you need it)', 'Call me <b>if</b> you need help.', '“Caso” = if. in case = precaution.'],
    ['GIVEN', 'Given that it rains tomorrow, we’ll stay in.', '<b>Assuming that</b> it rains tomorrow, we’ll stay in.', 'given that = a fact you already know.'],
    ['EVENT', 'In the event of it rains, …', 'In the event of <b>rain</b>, …', 'in the event of + noun.'],
    ['WILL', 'Providing we will pay, we get the tent.', 'Providing we <b>pay</b>, we get the tent.', 'Present after providing / assuming / as long as.']] };

var TRANSFORMA = { rot: 'IF → PRECISE', fim: 'Six conditions, each with the exact meaning.',
  itens: [
    { de: 'If the permit arrives this week (we think it will), we start in June.', pista: 'Assuming that …', para: 'Assuming that the permit arrives this week, we start in June.' },
    { de: 'Because all the tickets sold out, we need more toilets.', pista: 'Given that …', para: 'Given that all the tickets sold out, we need more toilets.' },
    { de: 'Take a jacket. Maybe it will get cold.', pista: '… in case …', para: 'Take a jacket in case it gets cold.' },
    { de: 'You can come, but only if you help with the chairs.', pista: 'providing …', para: 'You can come, providing you help with the chairs.' },
    { de: 'If there is a fire, use the stairs.', pista: 'In the event of …', para: 'In the event of a fire, use the stairs.' },
    { de: 'Pay by Friday. If you don’t, you lose the tent.', pista: '… otherwise …', para: 'Pay by Friday; otherwise, you lose the tent.' }] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Assuming That: conversa · leitura · descobre · transforma · tabuleiro */
var TABULEIRO = { rot: 'THE PLANNING BOARD', centro: 'Plan a weekend trip with friends. Every square has a condition.', casas: [
  { k: 'THE DATE', t: 'Choose the date. What do you assume?', ex: 'Assuming that everyone is free, let’s go on the 15th.' },
  { k: 'THE CAR', t: 'Who drives? Add a condition.', ex: 'I’ll drive, providing someone pays for the petrol.' },
  { k: 'THE FACT', t: 'A known fact that changes the plan.', ex: 'Given that it’s a holiday weekend, the roads will be busy.' },
  { k: 'THE RAIN', t: 'Imagine bad weather.', ex: 'Supposing it rains all weekend? We could visit the museum.' },
  { k: 'THE BAG', t: 'What do you pack, just in case?', ex: 'I’ll pack a sweater in case it gets cold at night.' },
  { k: 'THE HOTEL', t: 'Book the hotel with a condition.', ex: 'We can book it, as long as we can cancel for free.' },
  { k: 'THE BUDGET', t: 'Money: a warning with otherwise.', ex: 'Let’s set a budget; otherwise, we’ll spend too much.' },
  { k: 'EMERGENCY', t: 'A formal rule for an emergency.', ex: 'In the event of an accident, call the number on the card.' },
  { k: 'THE FOOD', t: 'Dinner plans with a condition.', ex: 'Assuming the restaurant is open, let’s eat fish on Saturday.' },
  { k: 'THE PET', t: 'Who looks after the dog?', ex: 'My neighbor will feed the dog, providing I bring her a present.' },
  { k: 'THE DELAY', t: 'Imagine the bus is late.', ex: 'Supposing the bus is late, we can take a taxi.' },
  { k: 'THE PITCH', t: 'Convince your friends to go, with three condition words.', ex: 'Given that we all need a break, and assuming the weather is good, let’s go, as long as nobody brings work!' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'If or in case? Two plans for the festival.', a: { t: 'A condition', falas: [['Organizer', 'What if it rains on Saturday?'], ['You', 'We’ll move the stage inside<mark> if it rains</mark>.']], d: 'Only when it rains, we move the stage. The rain is the condition. That is <b>if</b>.' }, b: { t: 'A precaution', falas: [['Organizer', 'The forecast looks fine.'], ['You', 'I’ll still bring ponchos<mark> in case it rains</mark>.']], d: 'Maybe it will not rain, but I prepare now. That is <b>in case</b>.' }, pergunta: 'Same rain, two ideas. What is different?', pergunta2: 'Now you. Which one fits?', itens: [{ p: 'You buy extra water now, because it might be hot.', o: ['I’ll buy extra water in case it’s hot.', 'I’ll buy extra water if it’s hot.'], c: 0, d: 'You act before. in case.' }, { p: 'You will open the second gate only when the crowd is big.', o: ['We’ll open the gate in case the crowd is big.', 'We’ll open the gate providing the crowd is big.'], c: 1, d: 'Only on this condition: providing.' }, { p: 'A fact you already know: tickets are sold out.', o: ['Supposing the tickets are sold out, add a second night.', 'Given that the tickets are sold out, we should add a second night.'], c: 1, d: 'A real fact: given that.' }, { p: 'You can enter the VIP area, but only on one condition: you have a pass.', o: ['You can enter providing you have a pass.', 'You can enter in case you have a pass.'], c: 0, d: 'Only on one condition: providing.' }], nota: '<b>If / providing / as long as</b> = only on that condition. <b>In case</b> = a precaution, you prepare now. <b>Given that</b> = a fact. <b>Supposing</b> = a what-if. <b>In the event of</b> + noun = formal.', uso: { p: 'Your turn. You plan an outdoor party. Say one thing you will do in case something happens, and one thing you will do only if it happens.', molde: ['I’ll bring … in case …', 'We’ll … providing …'], ex: 'I’ll bring umbrellas in case it rains. We’ll start the music at nine, providing the neighbors agree.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_isso', GX_EXPLICA); };
