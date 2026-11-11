/* ============================================================
   GLOBAL PAYMENTS ENGLISH · BUSINESS · CURSOS · LESSON 10 · THE DOCUMENTS · LIVE CLASS   03/11/2026
   Unidade 2 (fecha). Só os dados: o motor é o kit/revisao/revisao.js + dialogo.js + gp.js.
   Alvo: Do you have …? Yes, I do / No, I don’t · We need … · os documentos da importação.
   No simulador: a aba DOCUMENTS. Fecha com o Screen Check da Unidade 2. Tudo FICTÍCIO.
   ============================================================ */
var REV = { tipo: 'aula', aula: 10, nivel: 'A1', unidade: 2, kick: 'GLOBAL PAYMENTS ENGLISH · LESSON 10', titulo: ['The', 'Documents'], tema: 'Do you have…? · We need … · documents', placa: 'LESSON 10',
  lugarConversa: 'FRIDAY · 9 AM', cor: '#b9a6e8', cor2: '#d8c08a',
  sub: 'An import payment needs papers. Check what is missing, ask the client for it, and close Unit 2.',
  chips: ['The import documents', 'Do you have …?', 'The Screen Check'], botao: 'Start the lesson',
  nota: 'Do you have the invoice? Yes, I do. No, I don’t. Short and polite.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'morning', est: 'o', extra: 1, min: 4, img: 'mesa', rot: 'I · Morning Check', t: 'Your first payment of the day.', p: 'Read the line out loud. One question at a time.', sig: ['status', 'numeros', 'vd'] },
  { k: 'conversa', est: 'o', min: 3, img: 'conversa', rot: 'II · Paper or Screen?', t: 'A short chat about papers.', p: 'Choose an answer. Say it. Then ask: “And you?”' },
  { k: 'termos', est: 'l', min: 7, img: 'capa', rot: 'III · Document Words', t: 'Eight words for the papers.', p: 'Listen. Look. Say each word three times.', sig: ['invoice', 'proforma', 'bl', 'fxc', 'di'] },
  { k: 'gx', est: 'o', min: 3, img: 'conversa', rot: 'IV · Yes, I Do', t: 'Ping-pong about the documents.', p: 'The teacher asks. Tap your true answer and say it fast. Then you ask.' },
  { k: 'explica', est: 'f', min: 8, img: 'mesa', rot: 'V · Do You Have …?', t: 'Ask for a document. Say what you need.', p: 'Read the card with your teacher. Then build the sentence.' },
  { k: 'simulador', est: 'f', min: 12, img: 'capa', rot: 'VI · The Simulator', t: 'Check the papers.', p: 'Do each mission on the screen. Then say it out loud.', sig: ['invoice', 'proforma', 'bl', 'fxc', 'di'] },
  { k: 'dialogo', est: 'l', min: 6, img: 'conversa', rot: 'VII · The Missing Papers', t: 'Call the client about two documents.', p: 'One question before. Listen. Then the questions.', sig: ['bl', 'di'] },
  { k: 'cartao', est: 'w', min: 6, img: 'mesa', rot: 'VIII · The Document Email', t: 'Ask for the missing documents.', p: 'We need … Do you have …? Can you send …, please?' },
  { k: 'check', est: 'o', min: 5, img: 'capa', rot: 'IX · Screen Check', t: 'A new screen. Two minutes. In English.', p: 'Talk about the payment. Your teacher checks the list.', sig: ['status', 'cutoff', 'ampm', 'rate', 'bl', 'di'] },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'X · I Can', t: 'Unit 2: what can you do now?', p: 'Read each line out loud. Tap what you can do.' }
];

var MORNING = { rot: 'OPERATIONS QUEUE · 08:00', ref: 'FX-20486',
  perguntas: [
    { q: 'What’s the status?', st: ['It’s …'], r: 'It’s approved.' },
    { q: 'What’s the amount?', st: ['The amount is …'], r: 'The amount is sixty-one thousand, three hundred euros.' },
    { q: 'What time is the cut-off for euros?', st: ['It’s at …'], r: 'It’s at noon.' },
    { q: 'How many documents are there for an import payment?', st: ['There are …'], r: 'There are five: invoice, proforma, bill of lading, FX contract and import declaration.' }],
  frase: 'FX-20486 is approved. The amount is 61,300 euros. The cut-off for euros is at noon.' };

var CONVERSA = [
  { q: 'Do you print documents or read them on the screen?', f: 'Print or screen?', voce: ['I print them.', 'I read them on the screen.'], ex: 'I read them on the screen. I don’t print.' },
  { q: 'Do you have a lot of emails on Friday?', f: 'Yes or no?', voce: ['Yes, I do.', 'No, I don’t.'], ex: 'Yes, I do. Friday is busy.' },
  { q: 'Is your desk organized or messy?', f: 'Organized or messy?', voce: ['It’s organized.', 'It’s messy.'], ex: 'It’s messy! There are a lot of papers.' }];

var TERMOS = [
  { w: 'commercial invoice', pt: 'fatura comercial', au: 'w-invoice', tela: '<b>Commercial invoice</b> · RECEIVED', pron: 'co-MÂR-xal ÍN-vóis.' },
  { w: 'proforma invoice', pt: 'fatura proforma', au: 'w-proforma', tela: '<b>Proforma invoice</b> · MISSING', pron: 'pro-FÓR-ma.' },
  { w: 'bill of lading', pt: 'conhecimento de embarque', au: 'w-bill', tela: '<b>Bill of lading</b> · MISSING', pron: 'bil óv LEI-ding.' },
  { w: 'FX contract', pt: 'contrato de câmbio', au: 'w-fx-contract', tela: '<b>FX contract</b> · RECEIVED', pron: 'éf-éks CÓN-trakt.' },
  { w: 'import declaration', pt: 'declaração de importação', au: 'w-declaration', tela: '<b>Import declaration</b> · MISSING', pron: 'ÍM-port dé-cla-RÊI-xan.' },
  { w: 'need', pt: 'precisar', au: 'w-need', tela: 'We <b>need</b> the bill of lading.', pron: 'niid.' },
  { w: 'have', pt: 'ter', au: 'w-have', tela: 'Do you <b>have</b> the invoice?', pron: 'rév.' },
  { w: 'request', pt: 'pedir, solicitar', au: 'w-request', tela: '<span class="gp-bt">Request</span> · REQUESTED', pron: 'ri-KUÉST.' }];

var EXPLICA = {
  cards: [
    { tile: 'Do you', curto: 'perguntar: você tem?', le: 'lê-se “du iu”', titulo: 'Do you have …? (você tem …?)', img: 'Para perguntar sobre ação ou posse, a pergunta começa com Do. Com is era diferente (Is it…?). Aqui: Do you have …?',
      ex: [{ b: [['Do you', 'você', 'v'], ['have', 'tem', 'a'], ['the invoice?', 'a invoice?', 'c']], en: 'Do you have the invoice?', pt: 'Você tem a invoice?', au: 'x1' }],
      aviso: 'Não diga “You have the invoice?”. Comece com Do: Do you have …?' },
    { tile: 'Yes, I do', curto: 'resposta curta', le: 'Yes, I do · No, I don’t', titulo: 'responder curto', img: 'A resposta repete o do, sem o verbo: Yes, I do. / No, I don’t. Educado e rápido.',
      ex: [{ b: [['Yes,', 'sim,', 'a'], ['I do.', 'tenho.', 'v']], en: 'Yes, I do.', pt: 'Sim, tenho.', au: 'x2' },
           { b: [['No,', 'não,', 'a'], ['I don’t.', 'não tenho.', 'v']], en: 'No, I don’t.', pt: 'Não, não tenho.', au: 'x3' }],
      aviso: 'Não diga “Yes, I have.” Diga Yes, I do.' },
    { tile: 'need', curto: 'precisamos de', le: 'lê-se “niid”', titulo: 'We need … (precisamos de …)', img: 'Need + a coisa, sem “of”: We need the bill of lading. (Precisamos DO conhecimento de embarque.)',
      ex: [{ b: [['We', 'nós', 'a'], ['need', 'precisamos de', 'v'], ['the bill of lading', 'o conhecimento de embarque', 'c']], en: 'We need the bill of lading.', pt: 'Precisamos do conhecimento de embarque.', au: 'x4' }],
      aviso: 'Não diga “We need of the …”. Need vai direto.' },
    { tile: 'Can you', curto: 'o pedido (revisão)', le: 'lê-se “ken iu”', titulo: 'o pedido completo', img: 'Junte tudo: o problema (We need …) + o pedido (Can you send …, please?) da aula 5.',
      ex: [{ b: [['Can you', 'pode', 'v'], ['send', 'mandar', 'a'], ['the import declaration,', 'a declaração de importação,', 'c'], ['please?', 'por favor?', 'a']], en: 'Can you send the import declaration, please?', pt: 'Pode mandar a declaração de importação, por favor?', au: 'x5' }],
      aviso: 'Dois documentos: “Can you send the bill of lading AND the import declaration, please?”' }],
  monta: [
    { pt: 'Você tem a invoice?', blocos: ['have', 'the invoice?', 'Do you'], certo: 'Do you have the invoice?' },
    { pt: 'Não, não tenho.', blocos: ['I don’t.', 'No,'], certo: 'No, I don’t.' },
    { pt: 'Precisamos do conhecimento de embarque.', blocos: ['need', 'the bill of lading.', 'We'], certo: 'We need the bill of lading.' },
    { pt: 'Pode mandar a fatura proforma, por favor?', blocos: ['please?', 'Can you', 'the proforma invoice,', 'send'], certo: 'Can you send the proforma invoice, please?' }] };

var SIM = { mods: ['exchange', 'swift', 'unit', 'cutoff', 'fx', 'docs'], ops: ['FX-20481', 'FX-20482', 'FX-20483', 'FX-20484', 'FX-20485', 'FX-20486', 'FX-20487', 'FX-20488'],
  fim: 'Every paper checked and requested, in English. Unit 2 is done!',
  missoes: [
    { q: 'Open DOCUMENTS. Select FX-20482. What is missing?', pt: 'Abra a aba DOCUMENTS e selecione a FX-20482. O que falta?', st: ['The commercial invoice is missing.', 'We need the invoice.'], r: 'The commercial invoice is missing. We need the invoice.', alvo: { t: 'dsel', v: 'FX-20482' } },
    { q: 'Request the invoice.', pt: 'Peça a invoice (botão Request).', st: ['I request the invoice.', 'Can you send the invoice, please?'], r: 'I request the invoice. Can you send the invoice, please?', alvo: { t: 'pede', v: 'FX-20482:inv' } },
    { q: 'Select FX-20486. How many documents are missing? Which?', pt: 'Selecione a FX-20486. Quantos faltam? Quais?', st: ['There are two documents missing.', 'We need the … and the …'], r: 'There are two documents missing: the bill of lading and the import declaration.', alvo: { t: 'dsel', v: 'FX-20486' }, prof: 'Revisão da aula 8: there are two …' },
    { q: 'Tap Bill of lading. What is it? Say it in English.', pt: 'Toque em Bill of lading. O que é? Diga em inglês.', st: ['It’s the paper from the ship.'], r: 'It’s the paper from the ship. The goods are on the ship.', alvo: { t: 'doc', v: 'bl' }, prof: 'B/L = conhecimento de embarque. Use o botão PT se ele travar.' },
    { q: 'Your teacher is the client. Ask: Do you have the bill of lading? Then request it.', pt: 'O professor é o cliente. Pergunte se ele tem o B/L e depois peça.', st: ['Do you have the bill of lading?', 'We need it. Can you send it, please?'], r: 'Do you have the bill of lading? We need it for FX-20486. Can you send it, please?', alvo: { t: 'pede', v: 'FX-20486:bl' }, prof: 'Você é o Tom, da Brava Foods. Responda: “Yes, I do. I can send it today.” Depois ele toca em Request.' }] };

var DIALOGO = { rot: 'A CALL TO BRAVA FOODS', audio: 'dialogo',
  antes: { q: 'Two documents are missing. What is your first question to the client?', h: 'Do you have the bill of lading?' },
  ouvir: 'Listen: which documents are missing? Which one does Tom have?',
  falas: [
    ['Ana', 'Hi Tom, it’s Ana. It’s about the payment FX-20486. {We need} two documents.'],
    ['Tom', 'Oh, OK. Which documents?'],
    ['Ana', 'The bill of lading and the import declaration. {Do you have} the bill of lading?'],
    ['Tom', 'Yes, {I do}. I can send it now.'],
    ['Ana', 'Great. And {do you have} the import declaration?'],
    ['Tom', 'No, {I don’t}. Not yet. Maybe on Monday.'],
    ['Ana', 'OK. {Can you send} the bill of lading today, please?'],
    ['Tom', 'Sure. In ten minutes.'],
    ['Ana', 'Thank you. I’ll check and confirm.']],
  voz: { Ana: 'en-US-AvaNeural', Tom: 'en-US-BrianNeural' },
  perguntas: [
    { q: 'Which documents are missing?', h: 'The bill of lading and the import declaration.' },
    { q: 'Does Tom have the bill of lading?', h: 'Yes, he does.' },
    { q: 'Does he have the import declaration?', h: 'No, he doesn’t. Maybe on Monday.' },
    { q: 'When can he send the bill of lading?', h: 'In ten minutes.' }],
  fim: 'We need … · Do you have …? · Yes, I do. / No, I don’t. · Can you send …, please?' };

var CARTAO = { ph: 'Dear …,\nWe need … for …\nDo you have …?\nCan you send …, please?\nBest regards,', rot: 'Document email',
  chips: ['Dear Tom,', 'We need two documents for FX-20486: ', 'the bill of lading ', 'and the import declaration.', 'Do you have them?', 'Can you send them, please?', 'Thank you.', 'Best regards,'],
  perg: ['THE DOCUMENT EMAIL', 'To the client: what you need, a question, the request.'],
  exemploRot: 'DOCUMENTS · FX-20486', exemplo: [['COMMERCIAL INVOICE', 'RECEIVED'], ['PROFORMA INVOICE', 'RECEIVED'], ['BILL OF LADING', 'MISSING'], ['FX CONTRACT', 'RECEIVED'], ['IMPORT DECLARATION', 'MISSING']],
  modelo: 'Dear Tom,<br>We need two documents for FX-20486: the bill of lading and the import declaration.<br>Do you have them? Can you send them, please?<br>Thank you.<br>Best regards,<br>Ana' };

var CHECK = { ref: 'FX-20487', prof: 'Unidade 2. Tela que ele já conhece por fora, mas sem dicas: deixe 2 minutos. Pergunte se precisar: “What time is it? What do you do with it? How many payments are pending? How much is the dollar?” Meta: 7 de 10.',
  modelo: 'This is FX-20487. It’s pending. The amount is 9,999 dollars. The value date is May fourteenth. The cut-off for dollars is at four p.m. There are three payments pending today. First I check the message, then I send it to Unit. The dollar rate is five point four three eight zero. We need the commercial invoice. Do you have it?',
  itens: ['The status and the amount', 'The value date (May fourteenth)', 'The cut-off time: at four p.m.', 'Today or tomorrow? before / after', 'The routine: first I …, then I …', 'There are … payments pending', 'A rate with point: five point four …', 'Who buys and who sells', 'We need the … (a document)', 'Do you have …? / Can you send …, please?'] };

var PODE = [
  'I can name the five import documents in English.',
  'I can ask: Do you have the bill of lading? and answer: Yes, I do. / No, I don’t.',
  'I can say: We need the import declaration.',
  'I can write an email asking for missing documents.',
  'I can talk about my day: routine, times, counts, rates and documents.'];

var PT = {
  morning: 'Leia a linha da fila. Última pergunta: quantos documentos tem uma importação?',
  conversa: 'Perguntas leves sobre papel e tela.',
  termos: 'Os nomes dos documentos da importação. Ouça e repita 3 vezes.',
  explica: 'Pergunta com Do: Do you have …? Resposta: Yes, I do / No, I don’t. E We need … (sem “of”).',
  simulador: 'A aba DOCUMENTS está liberada. Veja o que falta em cada operação e peça (Request).',
  dialogo: 'A Ana liga para o cliente pedindo dois documentos.',
  cartao: 'Escreva um e-mail pedindo os documentos que faltam.',
  check: 'Uma tela. Fale tudo o que você consegue sobre esse pagamento, por 2 minutos.',
  pode: 'Leia cada frase em voz alta e toque nas que você já consegue fazer.' };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G8 · uma cena curta nova (k: gx) antes de explica.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'respostaCurta', titulo: 'Short answers. Three words, fast.',
  perguntas: [
    { q: 'Do you have the invoice?', s: 'Yes, I <mark>do</mark>.', n: 'No, I <mark>don’t</mark>.', mais: 'Now ask your teacher: Do you have the invoice?' },
    { q: 'Does Vela Foods have the contract?', s: 'Yes, it <mark>does</mark>.', n: 'No, it <mark>doesn’t</mark>.', mais: 'What do we need? We need the contract.' },
    { q: 'Do you have the bill of lading?', s: 'Yes, I <mark>do</mark>.', n: 'No, I <mark>don’t</mark>.', mais: 'Then say: We need the bill of lading.' },
    { q: 'Do the documents have a signature?', s: 'Yes, they <mark>do</mark>.', n: 'No, they <mark>don’t</mark>.' },
    { q: 'Does the bank have all the documents?', s: 'Yes, it <mark>does</mark>.', n: 'No, it <mark>doesn’t</mark>.', mais: 'What is missing? The invoice is missing.' },
    { q: 'Do you have a paper copy?', s: 'Yes, I <mark>do</mark>.', n: 'No, I <mark>don’t</mark>.' }
  ],
  nota: 'The short answer repeats the helper, never the verb: Do you have …? Yes, I <b>do</b>. No, I <b>don’t</b>. Not “Yes, I have”. And for a missing paper: We <b>need</b> the invoice. No “of”.',
  uso: { p: 'Your turn. You are the analyst. Ask your teacher about two documents, then say what you need.', molde: ['Do you have …?', 'We need …'], ex: 'Do you have the invoice? Do you have the bill of lading? We need the bill of lading, please.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_curta', GX_EXPLICA); };
