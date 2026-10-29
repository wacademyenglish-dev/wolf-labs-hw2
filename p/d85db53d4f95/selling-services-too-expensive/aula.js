/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 19 · IT’S TOO EXPENSIVE · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: responder objeção com but / because / so: I understand, but… · because… · so…; too expensive.
   Armadilhas: “too much expensive”, “but is good” (sem it), “then” no lugar de “so” (então), “why” no lugar de “because” (porque).
   Situação: objeções de preço. Cenas: Easy Reader cap. 3, diálogo, Focus, 6 portas = cartas de objeção (o professor é o cliente),
   mini-debate (Is a discount a good idea?), cartão. Produto: 3 respostas prontas para objeções.
   Empresas FICTÍCIAS (Bluepeak, Orla Beverages, Serra Steel, Kestrel Partners). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 19, kick: 'SELLING SERVICES · LESSON 19', titulo: ['It’s Too', 'Expensive'], tema: 'answering objections: but · because · so', placa: 'LESSON 19',
  lugarConversa: 'THE OBJECTION', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Every client says it: “It’s too expensive.” A weak seller says sorry. A good seller uses three small words: but, because, so. Today you learn to answer, calm and clear.',
  chips: ['Easy Reader: chapter 3', 'Six objection cards', 'Your 3 answers'], botao: 'Start the lesson',
  nota: 'I understand, BUT it includes… It’s a good price BECAUSE… SO you save…' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Clients', t: 'What do your clients say about your price?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · Easy Reader: The Price', t: 'Leo’s First Big Client · Chapter 3.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 8, img: 'conversa', rot: 'III · Three Objections', t: 'A finance director has three problems with the proposal.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'IV · But, Because, So', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'portas', est: 'o', min: 12, img: 'mesa', rot: 'V · Six Objection Cards', t: 'Six cards. Your teacher is the client and reads each objection.', p: 'Pick a card. Answer with but, because or so. One minute per card.' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'VI · Mini-Debate: Is a Discount a Good Idea?', t: 'Two sides. Your teacher takes the other side.', p: 'Choose a side. Say “I think … because …”. Then answer your teacher: “I agree / I don’t agree because …”.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VII · Your 3 Answers', t: 'Three objections from your real clients. Three answers.', p: 'Write them. Then your teacher says the objections, and you answer.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 19: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'What do your clients say about your price?', f: 'Too expensive? OK? Cheap?', voce: ['They say it’s …', 'Some clients say …, but …'], ex: 'Some clients say it’s expensive, but they buy.' },
  { q: 'What do you say when a client says “It’s too expensive”?', f: 'In Portuguese, what do you say?', voce: ['I say … because …', 'I ask …'], ex: 'I ask why. Then I show the numbers.' },
  { q: 'What is too expensive for you in your city?', f: 'Rent, coffee, parking?', voce: ['… is too expensive, so I …'], ex: 'Parking is too expensive, so I take the subway.' },
  { q: 'Do you like negotiating?', f: 'Yes or no? Why?', voce: ['Yes, because …', 'No, because …'], ex: 'No, because I’m nervous. But I want to learn!' }
];

var LEITURA = { rot: 'EASY READER · CHAPTER 3 · LEO’S FIRST BIG CLIENT (FICTION)', tipo: 'nota',
  antes: { q: 'Before: Leo met Hugo Duarte, the CEO of Orla Beverages, in an elevator. After four days of calls, Mr. Duarte said: “Come on Friday. A short presentation.” What can be the problem on Friday?', h: 'The price! And maybe the CFO.' },
  texto: 'THE PRICE\nFriday, 10 a.m. Leo is at Orla Beverages again. His presentation is short: ten minutes. Mr. Duarte smiles.\nThen Rita Gomes, the CFO, reads the proposal. She doesn’t smile.\n“Leo, {it’s too expensive}.”\nLeo’s hands are cold. He remembers Sara, his manager: “Never say sorry for the price. Use three words: but, because, so.”\n“I understand, {but} the price includes the SAP integration,” says Leo.\n“Hmm.”\n“And it’s a good price {because} your team doesn’t do the payroll anymore. {So} your people have time for other work.”\nRita writes in her notebook. “OK. Good answer.”\nLeo smiles. Mr. Duarte smiles.\nThen Rita opens her bag and takes out another proposal.\n“This is from Kestrel Partners. Their price is 30% lower. {So}… why Bluepeak?”\nThe room is quiet. Everybody looks at Leo.',
  perguntas: [
    { q: 'Who is Rita Gomes? Does she like the price?', h: 'She’s the CFO. No, she says it’s too expensive.' },
    { q: 'What is Sara’s tip?', h: 'Never say sorry for the price. Use but, because, so.' },
    { q: 'What does the price include?', h: 'The SAP integration.' },
    { q: 'What is the new problem at the end?', h: 'Another company, Kestrel Partners, is 30% cheaper.' },
    { q: 'What can Leo say now?', h: 'Free answer: “I understand, but…”, “Is the integration included?”…' }],
  olha: 'Look at the highlighted words. Which word adds a problem (but)? Which gives a reason (because)? Which gives a result (so)?' };

var DIALOGO = { rot: 'THREE OBJECTIONS · SERRA STEEL (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A client says: “Your price is too high.” What is a good first word?', h: '“I understand, but…” Not “Sorry”.' },
  ouvir: 'Listen: what are Daniel’s three problems? How does Leo answer?',
  falas: [
    ['Daniel', 'Leo, I read the proposal. {It’s too expensive}.'],
    ['Leo', 'I understand, {but} it includes training for your team.'],
    ['Daniel', 'OK. But we don’t have time for a big project.'],
    ['Leo', 'That’s no problem, {because} our team does the work.'],
    ['Daniel', 'Hmm. And my team? They do payroll now.'],
    ['Leo', 'Your team is great, {but} they work late every month.'],
    ['Daniel', 'That’s true. Every month.'],
    ['Leo', 'With us, the process is automatic, {so} they go home on time.'],
    ['Daniel', 'OK, that’s interesting. Can you send me the numbers?'],
    ['Leo', 'Sure. I can send them today.']],
  voz: { Daniel: 'en-US-GuyNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'What are Daniel’s three problems?', h: 'The price, no time for a big project, and his team does payroll now.' },
    { q: 'What does the price include?', h: 'Training for his team.' },
    { q: 'Why is time not a problem?', h: 'Because Bluepeak’s team does the work.' },
    { q: 'What happens with Daniel’s team every month?', h: 'They work late.' },
    { q: 'What does Daniel want at the end?', h: 'The numbers.' }],
  fim: 'But (a new side) · because (the reason) · so (the result). Three objections, three calm answers.' };

var DESCOBRE = {
  pares: [
    { a: 'It’s {too expensive}.', b: 'It’s {too much expensive}.', q: 'Which one is English?', r: '<b>too + adjective</b>: too expensive, too long. No “much”.' },
    { a: 'I understand, {but it’s} a good price.', b: 'I understand, {but is} a good price.', q: 'Which one is right?', r: 'English needs a subject: <b>but it’s</b>.' },
    { a: 'It’s automatic, {so} you save time.', b: 'It’s automatic, {then} you save time.', q: '“Então” for a result. Which word?', r: 'A result: <b>so</b>. (then = after that, in time.)' },
    { a: 'It’s cheaper {because} it’s automatic.', b: 'It’s cheaper {why} it’s automatic.', q: '“Porque” in an answer. Which word?', r: 'A reason: <b>because</b>. “Why” is for questions.' }],
  regra: [['BUT', 'I understand, but it includes training.'], ['BECAUSE', 'It’s a good price because our team does the work.'], ['SO', 'It’s automatic, so your team goes home on time.'], ['TOO', 'It’s too expensive. (no “much”)']],
  armas: [['TOO', 'It’s too much expensive.', 'It’s too expensive.', 'too + adj'], ['IT', 'But is a good price.', 'But it’s a good price.', 'subject'], ['SO', 'It’s fast, then you save.', 'It’s fast, so you save.', 'result = so'], ['BECAUSE', 'It’s cheap why it’s automatic.', 'It’s cheap because it’s automatic.', 'reason = because']] };

var PORTAS = [
  { k: 'THE PRICE', tema: 'price', t: 'Client: “It’s too expensive.”', ex: 'I understand, but the price includes the SAP integration, so you don’t pay for a new system.', trap: 'but + it’s (not “but is”)' },
  { k: 'NO TIME', tema: 'time', t: 'Client: “We don’t have time for a new project.”', ex: 'I understand, but our team does the work, so your team doesn’t lose time.', trap: 'so for the result (not “then”)' },
  { k: 'MY TEAM', tema: 'team', t: 'Client: “My team does the payroll. It’s OK.”', ex: 'Your team is great, but they work late every month because the process is manual.', trap: 'because + subject + verb' },
  { k: 'CHEAPER', tema: 'competitor', t: 'Client: “Another company is 30% cheaper.”', ex: 'OK, but is training included? Our price is higher because it includes training, so there are no surprises.', trap: 'higher / cheaper (lesson 12)' },
  { k: 'NO BUDGET', tema: 'budget', t: 'Client: “We don’t have a budget this year.”', ex: 'I understand. So we can start in January. A small project is good because it’s cheaper.', trap: 'So… to move to a next step' },
  { k: 'RISK', tema: 'risk', t: 'Client: “Outsourcing is risky.”', ex: 'I understand, but we work with fifty companies, so your data is safe with us.', trap: 'I understand, but… (no “sorry”)' }];

var ESCOLHA = [
  { a: 'Give a 10% discount', b: 'Keep the price, add free training', chips: ['I think … is better because …', 'I agree because …', 'I don’t agree because …'], ex: 'I think free training is better because the price stays the same, so our margin is OK.' },
  { a: 'Talk about the price first', b: 'Talk about the value first', chips: ['I think … is better because …', 'I don’t agree because …'], ex: 'I think the value first is better because the client understands the price later.' },
  { a: 'Say: “It’s a good price.”', b: 'Ask: “Why is it expensive for you?”', chips: ['I think … is better because …', 'I agree, but …'], ex: 'I think the question is better because the client explains the real problem.' }];
var ESCOLHA_FIM = 'Good debate! In sales, a discount is the last answer, not the first.';

var CARTAO = { ph: 'Objection 1: “…”\nMy answer: I understand, but …\nObjection 2: “…”\nMy answer: … because …\nObjection 3: “…”\nMy answer: …, so …', rot: 'My 3 answers',
  chips: ['I understand, but ', 'it includes ', ' because ', ', so ', 'your team ', 'you save ', 'There are no surprises.', 'It’s cheaper than a new team.', 'We can start small.', 'Can I show you the numbers?'],
  perg: ['YOUR 3 ANSWERS', 'Three objections your real clients say, and your answer to each one: one with but, one with because, one with so.'],
  exemploRot: 'OBJECTIONS · ORLA BEVERAGES', exemplo: [['CLIENT', 'Rita Gomes, CFO'], ['OBJECTION 1', 'too expensive'], ['OBJECTION 2', 'no time'], ['OBJECTION 3', 'a cheaper company'], ['NEXT STEP', 'send the numbers']],
  modelo: 'Objection 1: “It’s too expensive.”<br>My answer: I understand, but the price includes the SAP integration.<br>Objection 2: “We don’t have time.”<br>My answer: That’s no problem, because our team does the work.<br>Objection 3: “Another company is cheaper.”<br>My answer: Our price includes training, so there are no surprises.' };

var PODE = [
  'I can answer “It’s too expensive” calmly: I understand, but…',
  'I can give a reason with because.',
  'I can give a result with so (not “then”).',
  'I can answer three real objections from my clients.'
];
