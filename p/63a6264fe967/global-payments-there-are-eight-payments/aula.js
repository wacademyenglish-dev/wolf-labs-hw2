/* ============================================================
   GLOBAL PAYMENTS ENGLISH · BUSINESS · CURSOS · LESSON 8 · THERE ARE EIGHT PAYMENTS · LIVE CLASS   03/11/2026
   Unidade 2. Só os dados: o motor é o kit/revisao/revisao.js + dialogo.js + gp.js.
   Alvo: there is / there are, How many … are there?, Is there …? Yes, there is / No, there isn’t.
   No simulador: contar a fila com os filtros e fazer o relatório do fim do dia. Tudo FICTÍCIO.
   ============================================================ */
var REV = { tipo: 'aula', aula: 8, nivel: 'A1', unidade: 2, kick: 'GLOBAL PAYMENTS ENGLISH · LESSON 8', titulo: ['There Are', 'Eight Payments'], tema: 'there is · there are · how many', placa: 'LESSON 8',
  lugarConversa: 'WEDNESDAY · 5 PM', cor: '#b9a6e8', cor2: '#d8c08a',
  sub: 'Count the queue and give the end-of-day report: how many payments there are, in which currency, and which status.',
  chips: ['There is · there are', 'How many?', 'The end-of-day report'], botao: 'Start the lesson',
  nota: 'There is one. There are two. In Portuguese it is the same word: “tem”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'morning', est: 'o', extra: 1, min: 4, img: 'mesa', rot: 'I · Morning Check', t: 'Your first payment of the day.', p: 'Read the line out loud. One question at a time.', sig: ['status', 'numeros', 'vd'] },
  { k: 'conversa', est: 'o', min: 4, img: 'conversa', rot: 'II · Your Office', t: 'A short chat about your office.', p: 'Choose an answer. Say it. Then ask: “And you?”' },
  { k: 'termos', est: 'l', min: 8, img: 'capa', rot: 'III · Counting Words', t: 'Eight words for counting the queue.', p: 'Listen. Look. Say each word three times.', sig: ['queue', 'status'] },
  { k: 'gx', est: 'f', min: 3, img: 'conversa', rot: 'IV · The End-of-Day Call', t: 'Mark and Ana, at the end of the day. Some words are lit.', p: 'Read it together. Tap the lit words: why this form? Then say what there is in your office.' },
  { k: 'explica', est: 'f', min: 9, img: 'mesa', rot: 'V · There Is, There Are', t: '“Tem” in English: there is, there are.', p: 'Read the card with your teacher. Then build the sentence.' },
  { k: 'simulador', est: 'f', min: 13, img: 'capa', rot: 'VI · The Simulator', t: 'Count the queue.', p: 'Use the filters. Count. Say it with there is / there are.', sig: ['status', 'ccy', 'queue'] },
  { k: 'dialogo', est: 'l', min: 7, img: 'conversa', rot: 'VII · The End-of-Day Call', t: 'Your manager asks for the numbers.', p: 'One question before. Listen. Then the questions.' },
  { k: 'cartao', est: 'w', min: 7, img: 'mesa', rot: 'VIII · The Daily Report', t: 'Write the end-of-day report.', p: 'There are … There is … There aren’t any …' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Lesson 8: what can you do now?', p: 'Read each line out loud. Tap what you can do.' }
];

var MORNING = { rot: 'OPERATIONS QUEUE · 08:00', ref: 'FX-20488',
  perguntas: [
    { q: 'What’s the status?', st: ['It’s …'], r: 'It’s pending.' },
    { q: 'What’s the amount?', st: ['The amount is …'], r: 'The amount is four hundred and fifty thousand yen.' },
    { q: 'What’s the value date?', st: ['The value date is …'], r: 'The value date is May fourteenth.' },
    { q: 'How many operations are in the queue today?', st: ['There are …'], r: 'There are eight operations.' }],
  frase: 'FX-20488 is pending. The amount is 450,000 yen. There are eight operations in the queue.' };

var CONVERSA = [
  { q: 'How many people are there in your team?', f: 'A few or a lot?', voce: ['There are five.', 'There are ten.'], ex: 'There are six people in my team.' },
  { q: 'Is there a coffee machine in your office?', f: 'Yes or no?', voce: ['Yes, there is.', 'No, there isn’t.'], ex: 'Yes, there is. It’s very important!' },
  { q: 'How many screens are there on your desk?', f: 'One or two?', voce: ['There is one.', 'There are two.'], ex: 'There are two screens on my desk.' },
  { q: 'Is there a window near your desk?', f: 'Yes or no?', voce: ['Yes, there is.', 'No, there isn’t.'], ex: 'No, there isn’t. It’s a dark corner!' }];

var TERMOS = [
  { w: 'there is', pt: 'tem / há (um)', au: 'w-there-is', tela: '<b>There is</b> one payment on hold.', pron: 'dhér iz → “dhérz”.' },
  { w: 'there are', pt: 'tem / há (vários)', au: 'w-there-are', tela: '<b>There are</b> three payments pending.', pron: 'dhér ar.' },
  { w: 'how many', pt: 'quantos', au: 'w-how-many', tela: '<b>How many</b> payments are there?', pron: 'rau MÉ-ni.' },
  { w: 'total', pt: 'total', au: 'w-total', tela: '<b>Total</b>: 8 operations', pron: 'TÔU-tal.' },
  { w: 'showing', pt: 'mostrando', au: 'w-showing', tela: '<b>Showing</b> 3 of 8 operations', pron: 'XÔU-ing.' },
  { w: 'filter', pt: 'filtro / filtrar', au: 'w-filter', tela: '<b>Filter</b>: STATUS · CCY', pron: 'FIL-ter.' },
  { w: 'report', pt: 'relatório', au: 'w-report', tela: 'End-of-day <b>report</b>', pron: 'ri-PÓRT.' },
  { w: 'any', pt: 'nenhum (no negativo)', au: 'w-any', tela: 'There aren’t <b>any</b> payments in reais.', pron: 'É-ni.' }];

var EXPLICA = {
  cards: [
    { tile: 'There is', curto: 'tem um', le: 'lê-se “dhér iz” (ou “dhérz”)', titulo: 'there is: tem / há UM', img: 'O “tem” de existir (Tem um pagamento retido) em inglês é there is. Nunca “have”.',
      ex: [{ b: [['There is', 'tem', 'v'], ['one payment', 'um pagamento', 'c'], ['on hold', 'retido', 'a']], en: 'There is one payment on hold.', pt: 'Tem um pagamento retido.', au: 'x1' }],
      aviso: 'Não diga “Have one payment on hold”. Diga There is one payment on hold.' },
    { tile: 'There are', curto: 'tem vários', le: 'lê-se “dhér ar”', titulo: 'there are: tem / há DOIS OU MAIS', img: 'Mesma ideia, para plural: there are + número + coisas.',
      ex: [{ b: [['There are', 'tem', 'v'], ['eight operations', 'oito operações', 'c'], ['in the queue', 'na fila', 'a']], en: 'There are eight operations in the queue.', pt: 'Tem oito operações na fila.', au: 'x2' }],
      aviso: 'Um: there is. Dois ou mais: there are. Como is / are da aula 2.' },
    { tile: 'How many', curto: 'perguntar quantos', le: 'lê-se “rau mé-ni”', titulo: 'How many … are there?', img: 'Quantos … tem? = How many + coisa + are there? A resposta vem com there are.',
      ex: [{ b: [['How many', 'quantos', 'a'], ['payments', 'pagamentos', 'c'], ['are there?', 'tem?', 'v']], en: 'How many payments are there?', pt: 'Quantos pagamentos tem?', au: 'x3' }],
      aviso: 'A ordem muda na pergunta: are there? (e não “there are?”).' },
    { tile: 'Is there', curto: 'tem? sim / não', le: 'lê-se “iz dhér”', titulo: 'Is there…? Yes, there is. No, there isn’t.', img: 'Para perguntar se tem: Is there…? Para dizer que não tem nenhum (plural): There aren’t any …',
      ex: [{ b: [['Is there', 'tem', 'v'], ['a payment', 'um pagamento', 'c'], ['in pounds?', 'em libras?', 'a']], en: 'Is there a payment in pounds?', pt: 'Tem algum pagamento em libra?', au: 'x4' },
           { b: [['There aren’t', 'não tem', 'v'], ['any payments', 'nenhum pagamento', 'c'], ['in reais', 'em reais', 'a']], en: 'There aren’t any payments in reais.', pt: 'Não tem nenhum pagamento em reais.', au: 'x5' }],
      aviso: 'Resposta curta: Yes, there is. / No, there isn’t. Sem repetir a frase.' }],
  monta: [
    { pt: 'Tem um pagamento retido.', blocos: ['one payment', 'There is', 'on hold.'], certo: 'There is one payment on hold.' },
    { pt: 'Tem três pagamentos pendentes.', blocos: ['three payments', 'pending.', 'There are'], certo: 'There are three payments pending.' },
    { pt: 'Quantos pagamentos tem em euro?', blocos: ['are there', 'How many', 'in euros?', 'payments'], certo: 'How many payments are there in euros?' },
    { pt: 'Não tem nenhum pagamento em reais.', blocos: ['any payments', 'in reais.', 'There aren’t'], certo: 'There aren’t any payments in reais.' }] };

var SIM = { mods: ['exchange', 'swift', 'unit', 'cutoff'], ops: ['FX-20481', 'FX-20482', 'FX-20483', 'FX-20484', 'FX-20485', 'FX-20486', 'FX-20487', 'FX-20488'],
  fim: 'The queue is counted. Now give the report!',
  missoes: [
    { q: 'Filter PENDING. How many payments are pending?', pt: 'Filtre PENDING. Quantos estão pendentes?', st: ['There are … payments pending.'], r: 'There are three payments pending.', alvo: { t: 'filtro', v: 'PENDING' }, prof: 'Olhe o rodapé: “Showing 3 of 8”. Peça a frase inteira com there are.' },
    { q: 'Filter REJECTED. How many?', pt: 'Filtre REJECTED. Quantos?', st: ['There is one …', 'There are …'], r: 'There is one payment rejected: FX-20485.', alvo: { t: 'filtro', v: 'REJECTED' }, prof: 'Só UM → there IS. É o contraste da aula.' },
    { q: 'Filter the currency: GBP. Is there a payment in pounds?', pt: 'Filtre GBP. Tem pagamento em libra?', st: ['Yes, there is.', 'No, there isn’t.'], r: 'Yes, there is. There is one payment in pounds: FX-20484.', alvo: { t: 'ccy', v: 'GBP' } },
    { q: 'Filter EUR. How many payments are there in euros?', pt: 'Filtre EUR. Quantos em euro?', st: ['There are … payments in euros.'], r: 'There are two payments in euros.', alvo: { t: 'ccy', v: 'EUR' } },
    { q: 'Is there a payment in reais? Look at the currencies.', pt: 'Tem pagamento em reais? Olhe as moedas.', st: ['No, there isn’t.', 'There aren’t any payments in reais.'], r: 'No, there isn’t. There aren’t any payments in reais.', alvo: { t: 'prof' }, prof: 'Não há filtro BRL: a resposta é olhando a lista. Alvo: There aren’t any …' }] };

var DIALOGO = { rot: 'THE END-OF-DAY CALL', audio: 'dialogo',
  antes: { q: 'Your manager asks: “How many payments are there today?” How do you start?', h: 'There are …' },
  ouvir: 'Listen: how many payments are there? How many are on hold?',
  falas: [
    ['Paul', 'Hi Ana. {How many} payments {are there} in the queue today?'],
    ['Ana', '{There are} eight payments.'],
    ['Paul', 'OK. How many are released?'],
    ['Ana', '{There are} two released and three pending.'],
    ['Paul', '{Is there} a payment on hold?'],
    ['Ana', 'Yes, {there is}. {There is} one on hold. The invoice is missing.'],
    ['Paul', 'And {is there} a problem in pounds?'],
    ['Ana', 'No, {there isn’t}. The payment in pounds is OK now.']],
  voz: { Paul: 'en-US-GuyNeural', Ana: 'en-US-AvaNeural' },
  perguntas: [
    { q: 'How many payments are there?', h: 'There are eight.' },
    { q: 'How many are pending?', h: 'There are three pending.' },
    { q: 'Is there a payment on hold? Why?', h: 'Yes, there is one. The invoice is missing.' },
    { q: 'Is there a problem in pounds?', h: 'No, there isn’t.' }],
  fim: 'How many … are there? · There are … · Is there …? · Yes, there is. / No, there isn’t.' };

var CARTAO = { ph: 'There are … payments today.\nThere are … pending.\nThere is …\nThere aren’t any …', rot: 'End-of-day report',
  chips: ['There are ', 'There is ', 'There aren’t any ', 'eight payments today.', 'payments pending.', 'one payment on hold.', 'payments in reais.', 'one payment rejected.'],
  perg: ['THE DAILY REPORT', 'Count the queue: total, status, one thing that isn’t there.'],
  exemploRot: 'QUEUE TODAY', exemplo: [['TOTAL', '8'], ['PENDING', '3'], ['APPROVED', '3'], ['ON HOLD', '1'], ['REJECTED', '1'], ['BRL', '0']],
  modelo: 'There are eight payments today.<br>There are three payments pending and three approved.<br>There is one payment on hold and one rejected.<br>There aren’t any payments in reais.' };

var PODE = [
  'I can say: There is one payment on hold. There are three pending.',
  'I can ask: How many payments are there? Is there a payment in pounds?',
  'I can answer short: Yes, there is. / No, there isn’t.',
  'I can give a short end-of-day report.'];

var PT = {
  morning: 'Leia a linha da fila. Última pergunta: quantas operações tem hoje?',
  conversa: 'Perguntas sobre o seu escritório com there is / there are.',
  termos: 'Palavras para contar a fila. Ouça e repita 3 vezes.',
  explica: 'O “tem” de existir é there is (um) / there are (vários). Nunca “have”.',
  simulador: 'Use os filtros e conte. Responda com there is / there are.',
  dialogo: 'O gerente pede os números do fim do dia.',
  cartao: 'Escreva o relatório do fim do dia: total, status e o que não tem.',
  pode: 'Leia cada frase em voz alta e toque nas que você já consegue fazer.' };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de explica.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'The end-of-day call. Tap the lit words.',
  falas: [
    { q: 'Mark', f: 'How many payments [[are there]] in the queue?' },
    { q: 'Ana', f: '[[There are]] eight. [[There is]] one on hold.' },
    { q: 'Mark', f: '[[Is there]] a problem with the hold?' },
    { q: 'Ana', f: 'Yes, [[there is]]. The invoice is missing.' },
    { q: 'Mark', f: '[[Are there]] any urgent payments?' },
    { q: 'Ana', f: 'No, [[there aren’t]]. All of them are for tomorrow.' }
  ],
  porques: [
    'How many + the thing + are there? The question ends with are there.',
    'More than one thing: there are.',
    'One thing: there is.',
    'A yes or no question: Is there …? The helper goes first.',
    'The short answer repeats it: Yes, there is.',
    'More than one, and a question: Are there …? With any.',
    'The short answer for no: No, there aren’t.'
  ],
  nota: 'One thing: <b>there is</b>. Two or more: <b>there are</b>. A question: <b>Is there</b> …? <b>Are there</b> …? The short answer repeats it: Yes, there is. No, there aren’t.',
  uso: { p: 'Your turn. Tell Mark about your office: one thing there is, and two things there are.', molde: ['There is …', 'There are … in …'], ex: 'There is a coffee machine. There are ten desks in my office.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
