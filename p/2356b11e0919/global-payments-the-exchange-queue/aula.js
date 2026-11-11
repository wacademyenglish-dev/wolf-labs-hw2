/* ============================================================
   GLOBAL PAYMENTS ENGLISH · BUSINESS · CURSOS · LESSON 2 · THE EXCHANGE QUEUE · LIVE CLASS   03/11/2026
   Só os dados: o motor é o kit/revisao/revisao.js + dialogo.js + gp.js.
   Alvo: is / are + status, valores (vírgula e ponto ao contrário), moedas, datas (May twelfth).
   Entram as frases 1 a 5 do Core 10. Sistemas, bancos, empresas e BICs FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', aula: 2, nivel: 'A1', unidade: 1, kick: 'GLOBAL PAYMENTS ENGLISH · LESSON 2', titulo: ['The Exchange', 'Queue'], tema: 'is · are · amounts · dates', placa: 'LESSON 2',
  lugarConversa: 'MONDAY · 9 AM', cor: '#b9a6e8', cor2: '#d8c08a',
  sub: 'Read the queue out loud: the status, the amount, the currency and the value date of each payment.',
  chips: ['Status words', 'Big numbers', 'The queue simulator'], botao: 'Start the lesson',
  nota: 'In English, the comma and the dot change places: 8,750.50.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'morning', est: 'o', min: 4, img: 'mesa', rot: 'I · Morning Check', t: 'Your first payment of the day.', p: 'Read the line out loud. One question at a time.', sig: ['status', 'numeros', 'vd'] },
  { k: 'conversa', est: 'o', min: 4, img: 'conversa', rot: 'II · Monday Morning', t: 'A short chat before work.', p: 'Choose an answer. Say it. Then ask: “And you?”' },
  { k: 'termos', est: 'l', min: 8, img: 'capa', rot: 'III · Screen Words', t: 'Eight words from the queue.', p: 'Listen. Look. Say each word three times.', sig: ['status', 'ccy', 'vd'] },
  { k: 'gx', est: 'f', min: 4, img: 'mesa', rot: 'IV · The Queue in Blocks', t: 'The same report, in blocks.', p: 'Read the blocks out loud. Notice what changes. Then build a line and say your own.' },
  { k: 'explica', est: 'f', min: 9, img: 'mesa', rot: 'V · Is, Are, Numbers', t: 'The status, the amount, the date.', p: 'Read the card with your teacher. Then build the sentence.', sig: ['numeros', 'vd'] },
  { k: 'simulador', est: 'f', min: 12, img: 'capa', rot: 'VI · The Simulator', t: 'Filter the queue. Read it.', p: 'Do each mission on the screen. Then say it out loud.', sig: ['status', 'ccy', 'numeros', 'vd'] },
  { k: 'dialogo', est: 'l', min: 7, img: 'conversa', rot: 'VII · A Call From London', t: 'A colleague asks about a payment.', p: 'One question before. Listen. Then the questions.', sig: ['status', 'vd'] },
  { k: 'cartao', est: 'w', min: 7, img: 'mesa', rot: 'VIII · The Status Report', t: 'Write the status of two payments.', p: 'Status, amount, currency, value date.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Lesson 2: what can you do now?', p: 'Read each line out loud. Tap what you can do.' }
];

var MORNING = { rot: 'OPERATIONS QUEUE · 08:02', ref: 'FX-20482',
  perguntas: [
    { q: 'What’s the status?', st: ['It’s …'], r: 'It’s on hold.' },
    { q: 'What’s the amount?', st: ['The amount is …'], r: 'The amount is eight thousand, seven hundred and fifty euros and fifty cents.' },
    { q: 'What’s the currency?', st: ['The currency is …'], r: 'The currency is euros.' },
    { q: 'What’s the value date?', st: ['The value date is …'], r: 'The value date is May twelfth.' }],
  frase: 'FX-20482 is on hold. The amount is 8,750.50 euros. The value date is May twelfth.' };

var CONVERSA = [
  { q: 'Is the queue big today?', f: 'Big or small?', voce: ['Yes, it’s big.', 'No, it’s small.'], ex: 'Yes, it’s big. Monday is busy!' },
  { q: 'Dollars or euros: what is the main currency in your job?', f: 'Dollars or euros?', voce: ['Dollars.', 'Euros.'], ex: 'Dollars. The main currency is dollars.' },
  { q: 'Is the weather good today?', f: 'Sunny or rainy?', voce: ['It’s sunny.', 'It’s rainy.'], ex: 'It’s rainy and cold today.' },
  { q: 'Are numbers easy or difficult in English?', f: 'Easy or difficult?', voce: ['They’re easy.', 'They’re difficult.'], ex: 'They’re difficult! Big numbers are difficult.' }];

var TERMOS = [
  { w: 'pending', pt: 'pendente, esperando', au: 'w-pending', tela: '<span class="gp-st st-pending">PENDING</span>', pron: 'PÉN-ding.' },
  { w: 'approved', pt: 'aprovado', au: 'w-approved', tela: '<span class="gp-st st-approved">APPROVED</span>', pron: 'a-PRUVD: o “ed” não vira sílaba.' },
  { w: 'rejected', pt: 'rejeitado', au: 'w-rejected', tela: '<span class="gp-st st-rejected">REJECTED</span>', pron: 'ri-DJÉK-tid: aqui o “ed” vira sílaba (depois de t).' },
  { w: 'on hold', pt: 'retido, parado', au: 'w-on-hold', tela: '<span class="gp-st st-on-hold">ON HOLD</span>', pron: 'on HOULD: o “o” de hold é “ou”.' },
  { w: 'released', pt: 'liberado', au: 'w-released', tela: '<span class="gp-st st-released">RELEASED</span>', pron: 'ri-LIIST: o “ed” soa “t”.' },
  { w: 'amount', pt: 'valor', au: 'w-amount', tela: 'AMOUNT <b>25,000.00</b>', pron: 'a-MAUNT.' },
  { w: 'currency', pt: 'moeda', au: 'w-currency', tela: 'CCY <b>USD · EUR · GBP</b>', pron: 'CÂ-ren-si.' },
  { w: 'value date', pt: 'data-valor', au: 'w-value-date', tela: 'VALUE DATE <b>12 MAY</b>', pron: 'VÁL-iu deit.' }];

var EXPLICA = {
  cards: [
    { tile: 'is', curto: 'é / está (um)', le: 'lê-se “iz”', titulo: 'um pagamento: is', img: 'Pense num sinal de igual: o pagamento = retido. Para UM pagamento, use is (é / está).',
      ex: [{ b: [['The payment', 'o pagamento', 'a'], ['is', 'está', 'v'], ['on hold', 'retido', 'c']], en: 'The payment is on hold.', pt: 'O pagamento está retido.', au: 'x1' },
           { b: [['FX-20481', 'a FX-20481', 'a'], ['is', 'está', 'v'], ['pending', 'pendente', 'c']], en: 'FX-20481 is pending.', pt: 'A FX-20481 está pendente.', au: 'x2' }],
      aviso: 'Não diga “The payment on hold”. Falta o is: The payment IS on hold.' },
    { tile: 'are', curto: 'são / estão (vários)', le: 'lê-se “ar”', titulo: 'dois ou mais: are', img: 'Dois pagamentos ou mais: are (são / estão). O verbo muda com o número, como em português: está / estão.',
      ex: [{ b: [['Two payments', 'dois pagamentos', 'a'], ['are', 'estão', 'v'], ['pending', 'pendentes', 'c']], en: 'Two payments are pending.', pt: 'Dois pagamentos estão pendentes.', au: 'x3' }],
      aviso: 'Em inglês o adjetivo não ganha plural: pending, nunca “pendings”.' },
    { tile: '8,750.50', curto: 'números grandes', le: 'lê-se “eight thousand, seven hundred and fifty”', titulo: 'vírgula e ponto ao contrário', img: 'Em inglês a VÍRGULA separa os milhares e o PONTO separa os centavos. É o contrário do Brasil.',
      ex: [{ b: [['The amount', 'o valor', 'a'], ['is', 'é', 'v'], ['25,000 dollars', '25 mil dólares', 'c']], en: 'The amount is twenty-five thousand dollars.', pt: 'O valor é 25 mil dólares.', au: 'x4' },
           { b: [['140,000', '140 mil', 'c']], en: 'one hundred and forty thousand', pt: 'cento e quarenta mil', au: 'x5' }],
      aviso: 'Thousand não ganha s: twenty-five thousand (nunca “thousands”).' },
    { tile: '12 MAY', curto: 'datas', le: 'lê-se “May twelfth”', titulo: 'a data se lê com número ordinal', img: 'Na tela: 12 MAY. Na fala: May twelfth (12º de maio). O mês vem primeiro na fala americana.',
      ex: [{ b: [['The value date', 'a data-valor', 'a'], ['is', 'é', 'v'], ['May twelfth', '12 de maio', 'c']], en: 'The value date is May twelfth.', pt: 'A data-valor é 12 de maio.', au: 'x6' }],
      aviso: '11 eleventh · 12 twelfth · 13 thirteenth · 14 fourteenth. O “th” no fim é com a língua nos dentes.' }],
  monta: [
    { pt: 'O pagamento está retido.', blocos: ['on hold.', 'The payment', 'is'], certo: 'The payment is on hold.' },
    { pt: 'Dois pagamentos estão pendentes.', blocos: ['pending.', 'are', 'Two payments'], certo: 'Two payments are pending.' },
    { pt: 'A moeda é euro.', blocos: ['is', 'euros.', 'The currency'], certo: 'The currency is euros.' },
    { pt: 'A data-valor é 13 de maio.', blocos: ['May thirteenth.', 'The value date', 'is'], certo: 'The value date is May thirteenth.' }] };

var SIM = { mods: ['exchange'], ops: ['FX-20481', 'FX-20482', 'FX-20483', 'FX-20484', 'FX-20485', 'FX-20486', 'FX-20487', 'FX-20488'],
  fim: 'Five missions. You can read the queue in English.',
  missoes: [
    { q: 'Filter: ON HOLD. Read the payment out loud.', pt: 'Clique no filtro ON HOLD e leia a linha.', st: ['FX-20482 is on hold.', 'The amount is …'], r: 'FX-20482 is on hold. The amount is 8,750.50 euros.', alvo: { t: 'filtro', v: 'ON HOLD' }, prof: 'Filtro = o botão de status. Peça a frase inteira: referência + status + valor.' },
    { q: 'Filter: PENDING. How many payments are pending?', pt: 'Quantos pagamentos estão pendentes?', st: ['… payments are pending.'], r: 'Three payments are pending.', alvo: { t: 'filtro', v: 'PENDING' }, prof: 'São 3 (FX-20481, FX-20487, FX-20488). Note o ARE: three payments ARE pending.' },
    { q: 'Filter the currency: EUR. What is the value date of FX-20486?', pt: 'Filtre a moeda EUR. Qual é a data-valor da FX-20486?', st: ['The value date is …'], r: 'The value date is May eleventh.', alvo: { t: 'ccy', v: 'EUR' }, prof: '11 MAY = May eleventh. Ajude com o ordinal se travar.' },
    { q: 'Open FX-20483. Read the amount.', pt: 'Abra a FX-20483 e leia o valor.', st: ['The amount is …'], r: 'The amount is one hundred and forty thousand dollars.', alvo: { t: 'abre', v: 'FX-20483' }, prof: '140,000.00 = one hundred and forty thousand. Lembre que a vírgula separa milhar.' },
    { q: 'Open FX-20485. What’s the status? Who is the beneficiary?', pt: 'Abra a FX-20485. Qual é a situação? Quem é o beneficiário?', st: ['It’s rejected.', 'The beneficiary is missing.'], r: 'It’s rejected. The beneficiary name is missing.', alvo: { t: 'abre', v: 'FX-20485' }, prof: 'Pagamento rejeitado porque falta o nome do beneficiário (MISSING NAME). Missing = faltando (volta na aula 4).' }] };

var DIALOGO = { rot: 'A CALL FROM THE LONDON OFFICE', audio: 'dialogo',
  antes: { q: 'A colleague calls about a payment. What is the first question?', h: 'What’s the status?' },
  ouvir: 'Listen: what is the reference? What is the status?',
  falas: [
    ['Rachel', 'Hi Ana, it’s Rachel from London. {What’s the status} of FX-20482?'],
    ['Ana', 'One moment, please. I’m checking. {It’s} on hold.'],
    ['Rachel', 'On hold? OK. {What’s the amount}?'],
    ['Ana', 'The amount {is} eight thousand, seven hundred and fifty euros.'],
    ['Rachel', 'And {the value date}?'],
    ['Ana', 'The value date {is} May twelfth.'],
    ['Rachel', 'Sorry, can you repeat that?'],
    ['Ana', 'May twelfth. One, two.'],
    ['Rachel', 'Thanks, Ana.']],
  voz: { Rachel: 'en-GB-SoniaNeural', Ana: 'en-US-AvaNeural' },
  perguntas: [
    { q: 'What is the reference?', h: 'FX-20482.' },
    { q: 'What’s the status?', h: 'It’s on hold.' },
    { q: 'What’s the amount?', h: 'Eight thousand, seven hundred and fifty euros.' },
    { q: 'What’s the value date?', h: 'May twelfth.' }],
  fim: 'What’s the status? · It’s on hold. · The amount is … · The value date is …' };

var CARTAO = { ph: 'FX-… is …\nThe amount is …\nThe value date is …', rot: 'Status report',
  chips: ['FX-20481 ', 'FX-20487 ', 'is ', 'pending', 'on hold', 'The amount is ', 'dollars', 'euros', 'The value date is ', 'May twelfth', 'May fourteenth'],
  perg: ['THE STATUS REPORT', 'Two payments from the queue: status, amount and value date.'],
  exemploRot: 'QUEUE', exemplo: [['FX-20481', 'PENDING · 25,000.00 USD · 12 MAY'], ['FX-20487', 'PENDING · 9,999.00 USD · 14 MAY']],
  modelo: 'FX-20481 is pending. The amount is 25,000 dollars. The value date is May twelfth.<br>FX-20487 is pending too. The amount is 9,999 dollars. The value date is May fourteenth.' };

var PODE = [
  'I can say five status words: pending, approved, on hold, released, rejected.',
  'I can ask and answer: “What’s the status?” “It’s on hold.”',
  'I can read big amounts: 25,000.00 = twenty-five thousand.',
  'I can read a value date: 12 MAY = May twelfth.'];

var PT = {
  morning: 'Leia a linha da fila: situação, valor, moeda, data. Uma pergunta por vez.',
  conversa: 'Escolha uma das duas respostas e fale. Depois pergunte: “And you?”',
  termos: 'As palavras de situação da fila. Ouça, veja a etiqueta colorida e repita 3 vezes.',
  explica: 'Um pagamento: is. Dois ou mais: are. E a vírgula e o ponto trocam de lugar nos números.',
  simulador: 'Use os filtros (status e moeda) e abra as operações. Depois fale a frase.',
  dialogo: 'Uma colega de Londres liga perguntando de um pagamento. Ouça sem parar.',
  cartao: 'Escreva a situação de dois pagamentos: status, valor e data.',
  pode: 'Leia cada frase em voz alta e toque nas que você já consegue fazer.' };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de explica.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'A line from the queue, in blocks. Each block has a job.',
  frases: [
    { b: [['FX-20481', 'WHAT', 'o'], ['is', 'IS', 'aux'], ['pending', 'STATUS', 'como']], d: 'One payment: is.' },
    { b: [['The amount', 'WHAT', 'o'], ['is', 'IS', 'aux'], ['25,000.00 dollars', 'AMOUNT', 'acao']], d: 'Say it: twenty-five thousand. The comma and the dot change places in English.' },
    { b: [['The value date', 'WHAT', 'o'], ['is', 'IS', 'aux'], ['May twelfth', 'DATE', 'quando']], d: 'The date: the month, then the number: May twelfth.' },
    { b: [['Two payments', 'WHAT', 'o'], ['are', 'ARE', 'aux'], ['on hold', 'STATUS', 'como']], d: 'More than one: are.' }
  ],
  nota: 'One payment: <b>is</b>. Two or more: <b>are</b>. After it: the status, the amount or the date.',
  monta: { p: 'Build a line for the status report. Then say it.', pecas: [['is', 'IS', 'aux'], ['May fourteenth', 'DATE', 'quando'], ['The value date', 'WHAT', 'o']], ordem: [2, 0, 1] },
  uso: { p: 'Now your own report. Say the status of one payment and the amount.', molde: ['FX-… is …', 'The amount is …'], ex: 'FX-20487 is approved. The amount is 9,999 dollars.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
