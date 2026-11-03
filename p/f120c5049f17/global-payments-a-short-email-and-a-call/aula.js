/* ============================================================
   GLOBAL PAYMENTS ENGLISH · BUSINESS · CURSOS · LESSON 5 · A SHORT EMAIL AND A CALL · LIVE CLASS   03/11/2026
   Só os dados: o motor é o kit/revisao/revisao.js + dialogo.js + gp.js.
   Alvo: pedidos educados (Can you …, please?) + o e-mail de 3 linhas + o Core 10 completo.
   Fecha a Unidade 1 com o Screen Check (tela nova, 10 itens, meta 7). Tudo FICTÍCIO.
   ============================================================ */
var REV = { tipo: 'aula', aula: 5, nivel: 'A1', unidade: 1, kick: 'GLOBAL PAYMENTS ENGLISH · LESSON 5', titulo: ['A Short Email', 'and a Call'], tema: 'Can you …, please? · the 3-line email', placa: 'LESSON 5',
  lugarConversa: 'THURSDAY · 11 AM', cor: '#b9a6e8', cor2: '#d8c08a',
  sub: 'A payment is on hold. Call the client, ask for the invoice, write a short email, and settle the payment.',
  chips: ['Polite requests', 'The 3-line email', 'The Screen Check'], botao: 'Start the lesson',
  nota: 'Can you …, please? is the most useful question in your job.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'morning', est: 'o', min: 4, img: 'mesa', rot: 'I · Morning Check', t: 'Your first payment of the day.', p: 'Read the line out loud. One question at a time.', sig: ['status', 'numeros', 'vd'] },
  { k: 'conversa', est: 'o', min: 3, img: 'conversa', rot: 'II · Can You?', t: 'A short chat before work.', p: 'Choose an answer. Say it. Then ask: “And you?”' },
  { k: 'termos', est: 'l', min: 7, img: 'capa', rot: 'III · Email Words', t: 'Eight words for emails and calls.', p: 'Listen. Look. Say each word three times.', sig: ['invoice'] },
  { k: 'explica', est: 'f', min: 8, img: 'mesa', rot: 'IV · Can You …, Please?', t: 'Ask nicely. Write it short.', p: 'Read the card with your teacher. Then build the sentence.', sig: ['invoice'] },
  { k: 'simulador', est: 'f', min: 12, img: 'capa', rot: 'V · The Simulator', t: 'One payment, from hold to released.', p: 'Do each mission on the screen. Then say it out loud.', sig: ['status', 'bene', 'invoice', 'settle'] },
  { k: 'dialogo', est: 'l', min: 6, img: 'conversa', rot: 'VI · The Call', t: 'Call the client about the invoice.', p: 'One question before. Listen. Then the questions.', sig: ['invoice', 'vd'] },
  { k: 'cartao', est: 'w', min: 7, img: 'mesa', rot: 'VII · The Email', t: 'Write a three-line email.', p: 'Dear … · The payment … · Can you …, please? · Best regards.', sig: ['invoice'] },
  { k: 'check', est: 'o', min: 5, img: 'capa', rot: 'VIII · Screen Check', t: 'A new screen. Two minutes. In English.', p: 'Talk about the payment. Your teacher checks the list.', sig: ['status', 'numeros', 'vd', 'bene', 'inter', 'bic'] },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Unit 1: what can you do now?', p: 'Read each line out loud. Tap what you can do.' }
];

var MORNING = { rot: 'OPERATIONS QUEUE · 08:01', ref: 'FX-20482',
  perguntas: [
    { q: 'What’s the status?', st: ['It’s …'], r: 'It’s on hold.' },
    { q: 'What’s the amount?', st: ['The amount is …'], r: 'The amount is eight thousand, seven hundred and fifty euros.' },
    { q: 'What’s the value date?', st: ['The value date is …'], r: 'The value date is May twelfth.' },
    { q: 'Why is it on hold? (Look: Remittance.)', st: ['The invoice is …'], r: 'The invoice is missing.' }],
  frase: 'FX-20482 is on hold. The amount is 8,750.50 euros. The invoice is missing.' };

var CONVERSA = [
  { q: 'Can you send me a message after class?', f: 'Yes or no?', voce: ['Yes, I can.', 'Sorry, I can’t.'], ex: 'Yes, I can. No problem!' },
  { q: 'Do you write a lot of emails? A lot or a few?', f: 'A lot or a few?', voce: ['A lot.', 'A few.'], ex: 'A lot! Thirty emails a day.' },
  { q: 'Email or phone: what is faster?', f: 'Email or phone?', voce: ['The phone is faster.', 'Email is faster.'], ex: 'The phone is faster, but email is easier.' }];

var TERMOS = [
  { w: 'invoice', pt: 'fatura comercial', au: 'w-invoice', tela: ':70: Remittance · <b>INVOICE</b> 7781', pron: 'ÍN-vóis: força no começo.' },
  { w: 'document', pt: 'documento', au: 'w-document', tela: 'Missing <b>document</b>: invoice', pron: 'DÓ-kiu-ment.' },
  { w: 'contract', pt: 'contrato', au: 'w-contract', tela: ':70: <b>CONTRACT</b> 0451', pron: 'CÓN-trakt (substantivo).' },
  { w: 'urgent', pt: 'urgente', au: 'w-urgent', tela: 'Subject: <b>URGENT</b> · FX-20482 on hold', pron: 'ÂR-djent.' },
  { w: 'email', pt: 'e-mail', au: 'w-email', tela: 'New <b>email</b> · To: Sarah Cole', pron: 'II-meil.' },
  { w: 'call', pt: 'ligar / ligação', au: 'w-call', tela: '<b>Call</b> · Vela Foods · 2 min', pron: 'kóol.' },
  { w: 'Dear …', pt: 'Prezado(a) …', au: 'w-dear', tela: '<b>Dear</b> Ms. Cole,', pron: 'diir.' },
  { w: 'Best regards', pt: 'Atenciosamente', au: 'w-regards', tela: '<b>Best regards</b>, Ana Reis', pron: 'best ri-GÁRDZ.' }];

var EXPLICA = {
  cards: [
    { tile: 'Can you', curto: 'pedido educado', le: 'lê-se “ken iu”', titulo: 'Can you …, please? = pode …, por favor?', img: 'O mesmo can da aula 4, agora como pedido. Can you + verbo + please. Educado e simples.',
      ex: [{ b: [['Can you', 'você pode', 'v'], ['send', 'mandar', 'a'], ['the invoice,', 'a invoice,', 'c'], ['please?', 'por favor?', 'a']], en: 'Can you send the invoice, please?', pt: 'Pode mandar a invoice, por favor?', au: 'x1' },
           { b: [['Can you', 'você pode', 'v'], ['check', 'verificar', 'a'], ['the BIC,', 'o BIC,', 'c'], ['please?', 'por favor?', 'a']], en: 'Can you check the BIC, please?', pt: 'Pode verificar o BIC, por favor?', au: 'x2' }],
      aviso: 'Não diga “You send the invoice.” Soa como ordem. Use Can you …, please?' },
    { tile: '3 lines', curto: 'o e-mail curto', le: 'Dear · problem · request · Best regards', titulo: 'o e-mail de três linhas', img: 'Linha 1: o problema (The payment is on hold). Linha 2: o pedido (Can you send …, please?). Linha 3: o obrigado (Thank you).',
      ex: [{ b: [['The payment', 'o pagamento', 'a'], ['is', 'está', 'v'], ['on hold.', 'retido.', 'c']], en: 'The payment FX-20482 is on hold.', pt: 'O pagamento FX-20482 está retido.', au: 'x3' },
           { b: [['Thank you', 'obrigada', 'c'], ['for your help.', 'pela ajuda.', 'a']], en: 'Thank you for your help.', pt: 'Obrigada pela ajuda.', au: 'x4' }],
      aviso: 'Começa com Dear + nome, termina com Best regards + seu nome. Sem “Hello dear”.' },
    { tile: 'I’ll', curto: 'eu vou (já já)', le: 'lê-se “ail” · I will', titulo: 'Thank you. I’ll check and confirm.', img: 'A frase 10 do Core 10, como um bloco pronto. I’ll = eu vou (agora, logo). Fecha qualquer ligação com educação.',
      ex: [{ b: [['Thank you.', 'obrigado.', 'c'], ['I’ll', 'eu vou', 'v'], ['check and confirm.', 'verificar e confirmar.', 'a']], en: 'Thank you. I’ll check and confirm.', pt: 'Obrigado. Vou verificar e confirmo.', au: 'x5' }],
      aviso: 'Por enquanto, use como bloco pronto. O futuro com will vem nas próximas unidades.' }],
  monta: [
    { pt: 'Pode mandar a invoice, por favor?', blocos: ['the invoice,', 'please?', 'Can you', 'send'], certo: 'Can you send the invoice, please?' },
    { pt: 'O pagamento está retido.', blocos: ['on hold.', 'is', 'The payment'], certo: 'The payment is on hold.' },
    { pt: 'Obrigado. Vou verificar e confirmo.', blocos: ['check and confirm.', 'Thank you.', 'I’ll'], certo: 'Thank you. I’ll check and confirm.' },
    { pt: 'Pode soletrar, por favor?', blocos: ['spell that,', 'please?', 'Can you'], certo: 'Can you spell that, please?' }] };

var SIM = { mods: ['exchange', 'swift', 'unit'], anexo: 1, ops: ['FX-20481', 'FX-20482', 'FX-20483', 'FX-20484', 'FX-20485', 'FX-20486', 'FX-20487', 'FX-20488'],
  fim: 'From on hold to released, all in English. Unit 1 is done!',
  missoes: [
    { q: 'Find the payment on hold. Read it.', pt: 'Ache o pagamento ON HOLD e leia.', st: ['FX-20482 is on hold.', 'The amount is …'], r: 'FX-20482 is on hold. The amount is 8,750.50 euros.', alvo: { t: 'filtro', v: 'ON HOLD' } },
    { q: 'Open it in the SWIFT Monitor. Who is the beneficiary? What is the remittance?', pt: 'Abra no SWIFT Monitor. Quem é o beneficiário? O que diz o campo :70:?', st: ['The beneficiary is …', 'The invoice is missing.'], r: 'The beneficiary is Vela Foods GmbH. The invoice is missing.', alvo: { t: 'swift', v: 'FX-20482' }, prof: ':70: Remittance Information mostra INVOICE (MISSING): é por isso que está retido.' },
    { q: 'Go to UNIT. Select FX-20482. Confirm. What’s the error?', pt: 'No Unit, selecione FX-20482 e confirme. Qual é o erro?', st: ['I can’t settle it.', 'The invoice is missing.'], r: 'I can’t settle it. The invoice is missing.', alvo: { t: 'erro', v: 'FX-20482' } },
    { q: 'Your teacher is the client. Ask for the invoice on the phone.', pt: 'O professor é o cliente. Peça a invoice por telefone.', st: ['The payment is on hold.', 'Can you send the invoice, please?', 'Thank you. I’ll check and confirm.'], r: 'Hi, this is Ana. The payment FX-20482 is on hold. Can you send the invoice, please? Thank you. I’ll check and confirm.', alvo: { t: 'prof' }, prof: 'Você é a Sarah, da Vela Foods. Responda curto: “Oh, sorry. Yes, I can send it today.” Depois toque em Mark as done.' },
    { q: 'The invoice is here! Attach it. Confirm. Settle.', pt: 'A invoice chegou: Attach invoice → Confirm → Settle.', st: ['The invoice is here.', 'I can settle it.', 'FX-20482 is released.'], r: 'The invoice is here. I can settle it. FX-20482 is released.', alvo: { t: 'settle', v: 'FX-20482' }, prof: 'Fim do fluxo completo: fila → mensagem → liquidação. Peça a frase final três vezes.' }] };

var DIALOGO = { rot: 'A CALL TO VELA FOODS', audio: 'dialogo',
  antes: { q: 'A payment is on hold. The invoice is missing. What do you ask the client?', h: 'Can you send the invoice, please?' },
  ouvir: 'Listen: what is the problem? When can Sarah send the invoice?',
  falas: [
    ['Sarah', 'Hello, Vela Foods, Sarah speaking.'],
    ['Ana', 'Hi Sarah, this is Ana from the international payments team.'],
    ['Sarah', 'Hi Ana. How can I help?'],
    ['Ana', 'The payment FX-20482 is on hold. {Can you send the invoice, please}?'],
    ['Sarah', 'Oh, sorry. Yes, I {can}. Is it urgent?'],
    ['Ana', 'Yes, it is. The value date is May twelfth.'],
    ['Sarah', 'OK. I {can} send it today.'],
    ['Ana', '{Thank you. I’ll check and confirm}.']],
  voz: { Sarah: 'en-US-EmmaNeural', Ana: 'en-US-AvaNeural' },
  perguntas: [
    { q: 'Who is Sarah?', h: 'She’s from Vela Foods (the client).' },
    { q: 'What is the problem?', h: 'The payment is on hold. The invoice is missing.' },
    { q: 'Is it urgent? Why?', h: 'Yes, it is. The value date is May twelfth.' },
    { q: 'When can Sarah send the invoice?', h: 'Today.' }],
  fim: 'Can you send the …, please? · Thank you. I’ll check and confirm.' };

var CARTAO = { ph: 'Dear …,\nThe payment … is on hold.\nCan you send …, please?\nBest regards,\n…', rot: 'My email',
  chips: ['Dear Ms. Cole,', 'The payment ', 'FX-20482 ', 'is on hold.', 'Can you send ', 'the invoice, ', 'please?', 'It’s urgent.', 'Thank you for your help.', 'Best regards,'],
  perg: ['THE 3-LINE EMAIL', 'To the client: the problem, the request, thank you.'],
  exemploRot: 'EMAIL', exemplo: [['TO', 'Sarah Cole · Vela Foods'], ['SUBJECT', 'FX-20482 on hold'], ['PROBLEM', 'the invoice is missing'], ['REQUEST', 'send the invoice']],
  modelo: 'Dear Ms. Cole,<br>The payment FX-20482 is on hold. The invoice is missing.<br>Can you send the invoice, please? It’s urgent.<br>Thank you for your help.<br>Best regards,<br>Ana Reis' };

var CHECK = { ref: 'FX-20488', prof: 'Tela que ele nunca viu (o pagamento em ienes). Deixe falar 2 minutos sem ajuda. Toque em cada item que ele disser certo. Meta: 7 de 10. O que faltar vai para o Morning Check da aula 6.',
  modelo: 'This is FX-20488. It’s pending. The amount is 450,000 yen. The value date is May fourteenth. The beneficiary is Kaito Parts. The bank is Hikari Commerce Bank. The BIC is H-K-R-Q-J-P-J-T. The intermediary bank is Northgate Bank. The invoice is 0093. Can you check it, please?',
  itens: ['This is … / It’s … (to be)', 'The status (pending)', 'The amount: 450,000 (four hundred and fifty thousand)', 'The currency (yen)', 'The value date: May fourteenth', 'Who is the beneficiary', 'The bank and the BIC (spelled)', 'The intermediary bank', 'The invoice number', 'A polite request: Can you …, please?'] };

var PODE = [
  'I can ask nicely: “Can you send the invoice, please?”',
  'I can write a three-line email: problem, request, thank you.',
  'I can close a call: “Thank you. I’ll check and confirm.”',
  'I can follow a payment from the queue to the message to the settlement, in English.',
  'I can say the Core 10 phrases.'];

var PT = {
  morning: 'Leia a linha da fila. Última pergunta: por que está retido? Olhe o campo Remittance.',
  conversa: 'Escolha uma das duas respostas e fale.',
  termos: 'Palavras de e-mail e de ligação. Ouça e repita 3 vezes.',
  explica: 'Can you …, please? = Pode …, por favor? E o e-mail de 3 linhas: problema, pedido, obrigado.',
  simulador: 'O fluxo completo: ache o pagamento retido, veja o motivo, peça a invoice e liquide.',
  dialogo: 'A Ana liga para a cliente pedindo a invoice.',
  cartao: 'Escreva um e-mail curto para a cliente: o problema, o pedido e o obrigado.',
  check: 'Uma tela nova. Fale tudo o que você consegue sobre esse pagamento, por 2 minutos.',
  pode: 'Leia cada frase em voz alta e toque nas que você já consegue fazer.' };
