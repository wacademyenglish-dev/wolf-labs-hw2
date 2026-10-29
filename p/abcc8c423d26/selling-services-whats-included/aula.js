/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 28 · WHAT’S INCLUDED? · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js e cliente.js do curso). A1+.
   Alvo: it includes / it doesn’t include / Does it include…? / Is … included? + pronomes objeto it e them (send it, check them).
   Armadilhas: “the price include”, “it don’t include”, “I’ll send to you” (sem it), “we check they”.
   Situação: o cliente lê a proposta de 1 página. Formatos: leitura (a proposta), separa (INCLUDED × NOT INCLUDED),
   debate leve (desconto é boa ideia?), formulário (o CRM depois da ligação). Produto: resumo da proposta em 4 linhas.
   Empresas FICTÍCIAS (Bluepeak Services, Oakridge Paper). SAP só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 28, kick: 'SELLING SERVICES · LESSON 28', titulo: ['What’s', 'Included?'], tema: 'it includes · it doesn’t include · it / them', placa: 'LESSON 28',
  lugarConversa: 'THE PROPOSAL PAGE', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'The client reads your proposal and asks the classic question: “What’s included?” Today you read a one-page proposal, say what it includes and what it doesn’t, and send it with no surprises.',
  chips: ['The one-page proposal', 'Included or not?', 'Your 4-line summary'], botao: 'Start the lesson',
  nota: 'It includes… It doesn’t include… And the small words: I’ll send it. We check them.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Proposals', t: 'How many proposals do you send in a month?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · The One-Page Proposal', t: 'Bluepeak’s proposal for Oakridge Paper.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 7, img: 'conversa', rot: 'III · “Is Training Included?”', t: 'Nora reads the proposal. She has three questions.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 8, img: 'capa', rot: 'IV · It Includes, Send It', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'separa', est: 'f', min: 7, img: 'mesa', rot: 'V · Included or Not Included?', t: 'Eight things from the proposal.', p: 'Choose a side. Say it: “It includes… / It doesn’t include…”' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'VI · The Debate: Is a Discount a Good Idea?', t: 'Three small debates about price.', p: 'Choose a side and say why. Your teacher takes the other side.' },
  { k: 'formulario', est: 'w', min: 7, img: 'mesa', rot: 'VII · The CRM Record', t: 'After the call, Leo updates the CRM.', p: 'Read the notes. Fill in every field. Then check.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VIII · Your 4-Line Summary', t: 'Your proposal, in four lines.', p: 'Write it. Then say it to the client (your teacher).' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Lesson 28: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How many proposals do you send in a month?', f: 'Two? Ten?', voce: ['I send about … proposals a month.'], ex: 'I send about six proposals a month.' },
  { q: 'How long is your proposal? One page? Twenty?', f: 'Short or long?', voce: ['Our proposal has … pages.'], ex: 'Our proposal has twelve pages. Too long!' },
  { q: 'What do clients always ask about?', f: 'Price? Training? Dates?', voce: ['They always ask: “Does it include …?”'], ex: 'They always ask: “Does it include training?”' },
  { q: 'Does your price include travel?', f: 'Yes or no?', voce: ['Yes, it includes …', 'No, it doesn’t include …'], ex: 'No, it doesn’t include travel. The client pays it.' }
];

var LEITURA = { rot: 'PROPOSAL · PAYROLL BPO · BLUEPEAK SERVICES → OAKRIDGE PAPER (FICTIONAL)', tipo: 'nota',
  antes: { q: 'A client opens a proposal. What does she look for first?', h: 'The price, and what it includes.' },
  texto: 'PAYROLL SERVICE · 1,800 EMPLOYEES · 3 FACTORIES\nPRICE: R$ 52,000 per month. The price {includes} everything below.\nWHAT’S INCLUDED\n• Monthly payroll for all employees. We check {it} three times before payment.\n• Tax reports. We prepare {them} and send {them} to you by day 5.\n• Integration with your SAP. Our team connects {it} in the first month.\n• Training for your HR team: two days.\nWHAT’S NOT INCLUDED\n• The price {doesn’t include} new SAP licenses.\n• It {doesn’t include} travel to the factories. We charge {it} separately.\n• Changes to your SAP {aren’t included}.\nSTART: March 1 · GO-LIVE: May 1\n{Does} the price {include} vacation pay? Yes, it {does}.',
  perguntas: [
    { q: 'How much is the service per month?', h: 'R$ 52,000.' },
    { q: 'What does the price include? Say two things.', h: 'The monthly payroll, the tax reports, the SAP integration and two days of training.' },
    { q: 'When do they send the tax reports?', h: 'By day 5.' },
    { q: 'What doesn’t the price include?', h: 'New SAP licenses, travel to the factories and changes to SAP.' }],
  olha: 'Look at the highlighted words. Includes or include: when do we use -s? And “it” and “them”: what do they mean in each sentence?' };

var DIALOGO = { rot: 'THE PROPOSAL CALL · OAKRIDGE PAPER (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'The client asks: “Is training included?” What do you say?', h: 'Yes, it is. It includes two days of training. / No, it isn’t.' },
  ouvir: 'Listen: what is included? What isn’t? What will Leo send?',
  falas: [
    ['Nora', 'Leo, I’m reading the proposal. I have three questions.'],
    ['Leo', 'Sure. Go ahead.'],
    ['Nora', '{Does} the price {include} training?'],
    ['Leo', 'Yes, {it does}. Two days for your HR team.'],
    ['Nora', 'Good. And the SAP licenses?'],
    ['Leo', 'No, the price {doesn’t include} {them}. You have them already.'],
    ['Nora', 'Right. And travel to the factories?'],
    ['Leo', 'Travel {isn’t included}. We charge {it} separately.'],
    ['Nora', 'Hmm. Can you send me a price for travel?'],
    ['Leo', 'Of course. I’ll send {it} today.'],
    ['Nora', 'Thanks. And the tax reports? Who prepares {them}?'],
    ['Leo', 'We do. We prepare {them} and send {them} by day 5.']],
  voz: { Nora: 'en-US-AvaNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'Does the price include training?', h: 'Yes, it does. Two days for the HR team.' },
    { q: 'Are the SAP licenses included? Why not?', h: 'No. Nora’s company has them already.' },
    { q: 'Is travel included?', h: 'No, it isn’t. They charge it separately.' },
    { q: 'What will Leo send today?', h: 'A price for travel.' },
    { q: 'Who prepares the tax reports? When do they send them?', h: 'Bluepeak. They send them by day 5.' }],
  fim: 'It includes · It doesn’t include · Is it included? · send it · prepare them' };

var DESCOBRE = {
  pares: [
    { a: 'The price {includes} training.', b: 'The price {include} training.', q: 'The price = it. Which one is English?', r: 'The price = it → include<b>s</b>.' },
    { a: 'It {doesn’t include} travel.', b: 'It {don’t include} travel.', q: 'How do we say no?', r: 'It: <b>doesn’t</b> include. Not “don’t”.' },
    { a: 'The proposal? I’ll {send it} today.', b: 'The proposal? I’ll {send} today.', q: 'What is missing?', r: 'English needs the object: send <b>it</b>, check <b>it</b>, prepare <b>them</b>.' },
    { a: 'The reports? We check {them} every month.', b: 'The reports? We check {they} every month.', q: 'After the verb: they or them?', r: 'After a verb: <b>them</b> (not they): check them, send them.' }],
  regra: [['YES', 'It includes training.'], ['NO', 'It doesn’t include travel. Travel isn’t included.'], ['QUESTION', 'Does it include…? Is … included?'], ['IT · THEM', 'I’ll send it. We check them.']],
  armas: [['-S', 'The price include training.', 'The price includes training.', 'it includes'], ['DOESN’T', 'It don’t include travel.', 'It doesn’t include travel.', 'doesn’t'], ['IT', 'I’ll send to you today.', 'I’ll send it to you today.', 'send it'], ['THEM', 'We check they every month.', 'We check them every month.', 'them']] };

var SEPARA = { rot: 'OAKRIDGE PAPER · THE PROPOSAL', a: 'INCLUDED', b: 'NOT INCLUDED', fim: 'No surprises: say what is included AND what isn’t. Clients trust that.', itens: [
  ['The monthly payroll for 1,800 employees', 'a', 'It includes the payroll. We check it three times.'],
  ['New SAP licenses', 'b', 'It doesn’t include them. The client has them already.'],
  ['Two days of training for HR', 'a', 'It includes training: two days.'],
  ['Travel to the factories', 'b', 'Travel isn’t included. We charge it separately.'],
  ['Tax reports by day 5', 'a', 'It includes them. We prepare them and send them.'],
  ['Changes to the client’s SAP', 'b', 'They aren’t included.'],
  ['The SAP integration', 'a', 'It includes it. Our team connects it in the first month.'],
  ['Vacation pay', 'a', 'Yes, it includes it. Look at the last line!']] };

var ESCOLHA = [
  { a: 'A discount is a good idea', b: 'A discount is a bad idea', chips: ['I think … because …', 'I agree / I don’t agree because …', 'The client always wants …'], ex: 'I don’t agree with discounts. I think a discount is a bad idea because the client always wants it again.' },
  { a: 'One price that includes everything', b: 'A low price + extras', chips: ['I think … is better because …', 'I agree / I don’t agree because …', 'It includes … · It doesn’t include …'], ex: 'I think one price is better because it includes everything. Clients don’t like surprises.' },
  { a: 'Free training', b: 'A 5% discount', chips: ['I think … is better because …', 'I agree / I don’t agree because …', 'The team …'], ex: 'I agree with free training because the team learns. A discount is only money.' }];
var ESCOLHA_FIM = 'A debate: one side, one reason. Teacher: take the other side, and push a little: “Really? Why?”';

var FORMULARIO = { rot: 'BLUEPEAK CRM · OPPORTUNITY RECORD', perfilRot: 'LEO’S NOTES FROM THE CALL (FICTIONAL)',
  perfil: '<p>Client: <b>Oakridge Paper</b>. Contact: <b>Nora Bell</b>, <b>controller</b>.</p><p>Service: payroll for <b>1,800</b> employees. Price: <b>R$ 52,000</b> per month.</p><p>The price includes <b>training</b> (two days). It doesn’t include <b>travel</b>.</p><p>Go-live: <b>May 1</b>. Next step: send a price for travel <b>today</b>.</p>',
  fim: 'Perfect record. Your manager can read it in ten seconds.',
  campos: [
    { r: 'Company *', ph: '', aceita: ['Oakridge Paper'] },
    { r: 'Contact name *', ph: '', aceita: ['Nora Bell'] },
    { r: 'Job title *', ph: '', aceita: ['Controller'] },
    { r: 'Number of employees *', ph: 'numbers only', aceita: ['1,800', '1800', '1.800'] },
    { r: 'Monthly price (R$) *', ph: 'numbers only', aceita: ['52,000', '52000', '52.000', 'R$ 52,000', 'R$52,000'] },
    { r: 'Included (one thing) *', ph: '', aceita: ['Training', 'Two days of training', 'HR training', 'Payroll', 'Monthly payroll', 'Tax reports', 'SAP integration'], dica: 'look at the notes' },
    { r: 'Not included (one thing) *', ph: '', aceita: ['Travel', 'Travel to the factories', 'SAP licenses', 'New SAP licenses'], dica: 'look at the notes' },
    { r: 'Go-live date *', ph: 'month + day', aceita: ['May 1', 'May 1st', '05/01'], dica: 'month first' },
    { r: 'Next step *', ph: 'Send … today', aceita: ['Send a price for travel today', 'Send the travel price today', 'Send a price for travel', 'Send the price for travel today'], dica: 'send a price for travel today' }] };

var CARTAO = { ph: 'The proposal: … for … employees, R$ … per month.\nIt includes …\nIt doesn’t include …\nNext step: I’ll send it / them …', rot: 'My 4-line summary',
  chips: ['The proposal is for ', 'per month.', 'It includes ', 'It doesn’t include ', 'We prepare them ', 'We check it ', 'isn’t included.', 'Next step: ', 'I’ll send it ', 'by Friday.'],
  perg: ['YOUR PROPOSAL IN 4 LINES', 'A real proposal of yours (or invented): the service and price, what is included, what isn’t, the next step. Then say it to the client (your teacher).'],
  exemploRot: 'SUMMARY · OAKRIDGE PAPER', exemplo: [['SERVICE', 'payroll, 1,800 employees'], ['PRICE', 'R$ 52,000 / month'], ['INCLUDED', 'payroll, tax reports, SAP integration, training'], ['NOT INCLUDED', 'travel, SAP licenses']],
  modelo: 'The proposal is payroll for 1,800 employees, R$ 52,000 per month.<br>It includes the tax reports: we prepare them and send them by day 5.<br>It doesn’t include travel or SAP licenses.<br>Next step: I’ll send you the travel price today.' };

var PODE = [
  'I can say what a price includes and doesn’t include.',
  'I can ask: Does it include…? Is … included?',
  'I can use it and them: I’ll send it. We check them.',
  'I can write a proposal summary in four lines.'
];
