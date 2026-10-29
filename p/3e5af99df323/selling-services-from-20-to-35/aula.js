/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 22 · FROM 20% TO 35% · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. A1.
   Alvo: números no slide: increase / decrease / go up / go down + from … to … + by …; decimal com ponto (1.5 = one point five).
   Armadilhas: “increased in 15%”, “from 20% for 35%”, “1,5 million” (vírgula), “grew up 20%”.
   Situação: apresentar 3 números. Cenas: Easy Reader cap. 4, ditado (números), Focus, cadeira (o professor é a CFO e
   pergunta sobre o slide), mini-debate (3 or 10 numbers?), cartão. Produto: o próprio slide em 3 frases.
   Empresas FICTÍCIAS (Bluepeak, Orla Beverages, Brava Foods, Kestrel Partners). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 22, kick: 'SELLING SERVICES · LESSON 22', titulo: ['From 20%', 'to 35%'], tema: 'numbers on a slide: increase / decrease · from … to · by', placa: 'LESSON 22',
  lugarConversa: 'THE SLIDE', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Clients don’t remember twenty numbers. They remember three, said clearly. Today you present a slide: what went up, what went down, from where to where, and by how much.',
  chips: ['Easy Reader: chapter 4', 'Listen to the numbers', 'Your slide'], botao: 'Start the lesson',
  nota: 'Errors decreased from 300 to 60. Costs went down by 15%. And 1.5 is “one point five”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Numbers', t: 'What number is important in your job?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · Easy Reader: The Numbers', t: 'Leo’s First Big Client · Chapter 4.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'ditado', est: 'l', min: 8, img: 'mesa', rot: 'III · Listen to the Numbers', t: 'Six results from different clients.', p: 'Listen up to three times. Type every word. Numbers in digits: 15, 300, 35%.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'IV · By, From, To', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'slides', est: 'o', min: 10, img: 'conversa', rot: 'V · Your 3-Slide Pitch', t: 'Three slides, three numbers. Then present.', p: 'Write a title and one number for each slide. Your teacher is the CFO and asks one question.' },
  { k: 'escolha', est: 'o', min: 6, img: 'mesa', rot: 'VI · Mini-Debate: 3 or 10 Numbers?', t: 'Two sides. Your teacher takes the other side.', p: 'Choose a side. Say “I think … because …”. Then answer your teacher: “I agree / I don’t agree because …”.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VII · Your Slide', t: 'Your slide: three real numbers, three sentences.', p: 'Write them. Then present the slide out loud, in one minute.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 22: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'What number is important in your job?', f: 'Sales, clients, calls, meetings?', voce: ['My sales number is important.', 'The number of … is important.'], ex: 'The number of new clients. My target is five a month.' },
  { q: 'Did your sales go up or go down this year?', f: 'Up or down?', voce: ['They went up by …%.', 'They went down a little.'], ex: 'They went up by about 10%.' },
  { q: 'How many slides are in your presentation?', f: 'A few or a lot?', voce: ['About … slides.', 'Too many!'], ex: 'About twenty slides. Too many!' },
  { q: 'Do you like presenting numbers?', f: 'Yes or no? Why?', voce: ['Yes, because …', 'No, because …'], ex: 'No, because I’m nervous with big numbers in English.' }
];

var LEITURA = { rot: 'EASY READER · CHAPTER 4 · LEO’S FIRST BIG CLIENT (FICTION)', tipo: 'nota',
  antes: { q: 'Before: Rita Gomes, the CFO of Orla Beverages, says Bluepeak is too expensive. Another company, Kestrel Partners, is 30% cheaper. What can Leo show her?', h: 'Results: numbers from a real client.' },
  texto: 'THE NUMBERS\nMonday, 9 a.m. Leo is at Orla Beverages again. This time, he has one slide and only three numbers.\n“Look at Brava Foods. They work with us,” says Leo.\n“Their closing time {decreased from} twelve days {to} five.\nTheir payroll errors {went down by} 80%.\nAnd their team’s free time {increased from} 20% {to} 35%.”\nRita looks at the slide for a long time. “And Kestrel? Do you have their numbers?”\n“No,” says Leo. “But you can ask them for a slide like this.”\nMr. Duarte laughs. “I like this guy.”\nRita closes her notebook. “OK, Leo. Send me the contract.”\nLeo can’t believe it. His first big client!\nIn the elevator, he smiles at his phone. Then the phone vibrates. A message from Sara, his manager:\n“Leo. Call me NOW. It’s about Orla.”',
  perguntas: [
    { q: 'How many numbers are on Leo’s slide?', h: 'Three.' },
    { q: 'What happened to Brava’s closing time?', h: 'It decreased from twelve days to five.' },
    { q: 'And the payroll errors? And the free time?', h: 'Errors went down by 80%. Free time increased from 20% to 35%.' },
    { q: 'What does Rita say at the end of the meeting?', h: '“OK, Leo. Send me the contract.”' },
    { q: 'What is Sara’s message about? What do you think?', h: 'It’s about Orla. Free answer: a problem with the contract? Good news?' }],
  olha: 'Look at the highlighted words. Which words go up, which go down? What comes before the start number (from) and the end number (to)? And before the difference (by)?' };

var DITADO = { fim: 'Six results. In a slide, the small words matter: from, to, by.', itens: [
  { t: 'Closing time decreased from 12 days to 5 days.', audio: 'n1.mp3', nota: '<b>from</b> the old number <b>to</b> the new number.' },
  { t: 'Payroll errors went down by 80%.', audio: 'n2.mp3', nota: '<b>by</b> + the difference. 80% = “eighty percent”.' },
  { t: 'Free time increased from 20% to 35%.', audio: 'n3.mp3', nota: 'Listen for the -ty: twenty (20) × twelve (12).' },
  { t: 'Our costs went down by 15% in one year.', audio: 'n4.mp3', nota: '<b>fifteen</b> (15) × <b>fifty</b> (50): the stress is at the end in 15.' },
  { t: 'The number of invoices went up from 300 to 900 a month.', audio: 'n5.mp3', nota: 'In English: three hundred, nine hundred (no “s” in hundred).' },
  { t: 'Late payments decreased by half.', audio: 'n6.mp3', nota: '<b>by half</b> = 50% less. Clients love simple words.' }] };

var DESCOBRE = {
  pares: [
    { a: 'Costs went down {by} 15%.', b: 'Costs went down {in} 15%.', q: 'The difference. Which word?', r: 'The difference: <b>by</b> 15%.' },
    { a: 'It increased {from} 20% {to} 35%.', b: 'It increased {of} 20% {for} 35%.', q: 'Start and end. Which words?', r: 'Start number: <b>from</b>. End number: <b>to</b>.' },
    { a: 'Our revenue is {1.5} million.', b: 'Our revenue is {1,5} million.', q: 'Decimals in English. Point or comma?', r: 'English uses a <b>point</b>: 1.5 = “one point five”. A comma is for thousands: 1,500.' },
    { a: 'Sales {grew by} 20%.', b: 'Sales {grew up} 20%.', q: 'Which one is right in business?', r: 'Numbers <b>grow / go up / increase</b> by… · “Grow up” = children becoming adults.' }],
  regra: [['UP', 'increase · go up · grow'], ['DOWN', 'decrease · go down · by half'], ['FROM … TO', 'from 20% to 35% (start → end)'], ['BY · POINT', 'by 15% (the difference) · 1.5 = one point five']],
  armas: [['BY', 'It went up in 10%.', 'It went up by 10%.', 'by'], ['FROM / TO', 'From 12 for 5 days.', 'From 12 to 5 days.', 'from … to'], ['POINT', '2,5 million', '2.5 million', 'point'], ['GROW', 'Sales grew up 20%.', 'Sales grew by 20%.', 'grew by']] };

var CADEIRA = { itens: [
  { alvo: 'Start: say what your slide shows.', dica: 'This slide shows three results from Brava Foods.', resp: 'OK. Brava Foods. Are they a big company?' },
  { alvo: 'Number 1: closing time, 12 days → 5 days.', dica: 'Their closing time decreased from 12 days to 5 days.', resp: 'Five days? In how many months?' },
  { alvo: 'Answer. Then number 2: payroll errors, down 80%.', dica: 'In six months. And their payroll errors went down by 80%.', resp: 'Eighty percent? How many errors before?' },
  { alvo: 'Say the real numbers: 300 errors → 60.', dica: 'They had 300 errors a month. Now they have 60.', resp: 'Good. And the team?' },
  { alvo: 'Number 3: free time, from 20% to 35%.', dica: 'Their free time increased from 20% to 35%.', resp: 'And the cost? Did it go up?' },
  { alvo: 'Answer about the cost. Close with a question.', dica: 'Their costs went down by 15%. Would you like the same results?', resp: 'Maybe. Send me this slide, please.' }] };

var ESCOLHA = [
  { a: '3 numbers on a slide', b: '10 numbers on a slide', chips: ['I think … is better because …', 'I agree because …', 'I don’t agree because …'], ex: 'I think three numbers is better because the client remembers them.' },
  { a: 'Show percentages (35%)', b: 'Show money ($200,000)', chips: ['I think … is better because …', 'I don’t agree because …'], ex: 'I think money is better because the CFO thinks in dollars.' },
  { a: 'Numbers from one client', b: 'Numbers from all our clients', chips: ['I think … is better because …', 'I agree, but …'], ex: 'I think one client is better because it’s a real story.' }];
var ESCOLHA_FIM = 'Good debate! Fewer numbers, said slowly: from…, to…, by….';

var CARTAO = { ph: 'This slide shows …\n1. … decreased / went down from … to …\n2. … increased / went up by …%\n3. … from … to …', rot: 'My slide',
  chips: ['This slide shows ', ' results from ', ' decreased from ', ' increased from ', ' to ', ' went down by ', ' went up by ', '%', ' a month', ' in one year', 'Would you like the same results?'],
  perg: ['YOUR SLIDE', 'Three real results from your company (or from a client): one that went down, one that went up, one with from… to…. Then present it in one minute.'],
  exemploRot: 'SLIDE · BRAVA FOODS RESULTS', exemplo: [['CLOSING TIME', '12 days → 5 days'], ['PAYROLL ERRORS', '300 → 60 a month (−80%)'], ['FREE TIME', '20% → 35%'], ['COSTS', '−15% in one year'], ['QUESTION', 'Would you like the same results?']],
  modelo: 'This slide shows three results from Brava Foods.<br>1. Their closing time decreased from 12 days to 5 days.<br>2. Their payroll errors went down by 80%, from 300 to 60 a month.<br>3. Their team’s free time increased from 20% to 35%.<br>Would you like the same results?' };

var PODE = [
  'I can say what went up and what went down: increase, decrease, go up, go down.',
  'I can use from… to… and by… with numbers.',
  'I can say decimals in English: 1.5 = one point five.',
  'I can present a slide with three numbers and answer questions.'
];

var SLIDES = { rot: '3-SLIDE PITCH',
  slides: [
    { rt: 'The problem', ph: 'Manual work in payroll', pn: '400 hours' },
    { rt: 'The result', ph: 'Faster reports', pn: '-40%' },
    { rt: 'The savings', ph: 'Savings per year', pn: 'R$ 115,000' }],
  chips: ['Slide 1: the problem. …', 'It went up / down by …', 'from … to …', 'This means …', 'Any questions?'],
  modelo: 'Slide one is the problem: four hundred hours of manual work a month. Slide two is the result: reports are forty percent faster. They went from ten days to six days. Slide three is the savings: one hundred and fifteen thousand reais a year. Any questions?' };
