/* ============================================================
   GLOBAL PAYMENTS ENGLISH · BUSINESS · CURSOS · LESSON 4 · UNIT: PAY AND SETTLE · LIVE CLASS   03/11/2026
   Só os dados: o motor é o kit/revisao/revisao.js + dialogo.js + gp.js.
   Alvo: imperativo (os botões da tela) + can / can’t + as mensagens de erro. Abre o Unit (liquidação).
   Sistemas, bancos, empresas e BICs FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', aula: 4, nivel: 'A1', unidade: 1, kick: 'GLOBAL PAYMENTS ENGLISH · LESSON 4', titulo: ['Unit: Pay', 'and Settle'], tema: 'Select · Confirm · can · can’t', placa: 'LESSON 4',
  lugarConversa: 'WEDNESDAY · 3 PM', cor: '#b9a6e8', cor2: '#d8c08a',
  sub: 'Settle payments in the Unit system. Read the buttons, read the errors, and say what you can and can’t do.',
  chips: ['The buttons', 'The error messages', 'The Unit simulator'], botao: 'Start the lesson',
  nota: 'The screen gives orders: Select. Confirm. Settle. The verb comes first.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'morning', est: 'o', extra: 1, min: 4, img: 'mesa', rot: 'I · Morning Check', t: 'Your first payment of the day.', p: 'Read the line out loud. One question at a time.', sig: ['status', 'numeros', 'vd'] },
  { k: 'conversa', est: 'o', min: 4, img: 'conversa', rot: 'II · Can You?', t: 'A short chat before work.', p: 'Choose an answer. Say it. Then ask: “And you?”' },
  { k: 'termos', est: 'l', min: 8, img: 'capa', rot: 'III · Button Words', t: 'Eight words from the Unit screen.', p: 'Listen. Look. Say each word three times.', sig: ['settle', 'imperativo'] },
  { k: 'gx', est: 'f', min: 3, img: 'capa', rot: 'IV · Mistake Hunter', t: 'Six lines on the Unit screen. Each one has a wrong word.', p: 'Tap the wrong word. Say the line right. Then check.' },
  { k: 'explica', est: 'f', min: 9, img: 'mesa', rot: 'V · Buttons, Can, Can’t', t: 'What the screen says. What you can do.', p: 'Read the card with your teacher. Then build the sentence.', sig: ['imperativo', 'settle', 'cutoff'] },
  { k: 'simulador', est: 'f', min: 14, img: 'capa', rot: 'VI · The Simulator', t: 'Settle the payments in Unit.', p: 'Do each mission on the screen. Then say it out loud.', sig: ['settle', 'bic', 'cutoff', 'imperativo'] },
  { k: 'dialogo', est: 'l', min: 7, img: 'conversa', rot: 'VII · Can You Settle It?', t: 'Your manager asks about two payments.', p: 'One question before. Listen. Then the questions.', sig: ['cutoff', 'bic'] },
  { k: 'cartao', est: 'w', min: 6, img: 'mesa', rot: 'VIII · A Note to Your Manager', t: 'Write a short note about two payments.', p: 'I can … · I can’t … The … is …' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Lesson 4: what can you do now?', p: 'Read each line out loud. Tap what you can do.' }
];

var MORNING = { rot: 'OPERATIONS QUEUE · 08:03', ref: 'FX-20483',
  perguntas: [
    { q: 'What’s the status?', st: ['It’s …'], r: 'It’s approved.' },
    { q: 'What’s the amount?', st: ['The amount is …'], r: 'The amount is one hundred and forty thousand dollars.' },
    { q: 'What’s the currency?', st: ['The currency is …'], r: 'The currency is dollars.' },
    { q: 'What’s the value date?', st: ['The value date is …'], r: 'The value date is May thirteenth.' }],
  frase: 'FX-20483 is approved. The amount is 140,000 dollars. The value date is May thirteenth.' };

var CONVERSA = [
  { q: 'Can you speak Spanish?', f: 'Yes or no?', voce: ['Yes, I can.', 'No, I can’t.'], ex: 'No, I can’t. But I can understand a little.' },
  { q: 'Can you work from home?', f: 'Yes or no?', voce: ['Yes, I can.', 'No, I can’t.'], ex: 'Yes, I can. On Fridays.' },
  { q: 'Is your computer fast or slow?', f: 'Fast or slow?', voce: ['It’s fast.', 'It’s slow.'], ex: 'It’s slow on Monday morning!' },
  { q: 'Can you cook?', f: 'Yes or no?', voce: ['Yes, I can.', 'No, I can’t.'], ex: 'Yes, I can. I can cook pasta.' }];

var TERMOS = [
  { w: 'select', pt: 'selecionar', au: 'w-select', tela: '<span class="gp-bt">Select</span> a payment', pron: 'si-LÉKT.' },
  { w: 'confirm', pt: 'confirmar', au: 'w-confirm', tela: '<span class="gp-bt cheio">Confirm</span>', pron: 'con-FÂRM.' },
  { w: 'settle', pt: 'liquidar', au: 'w-settle', tela: '<span class="gp-bt cheio">Settle</span>', pron: 'SÉ-tou.' },
  { w: 'cancel', pt: 'cancelar', au: 'w-cancel', tela: '<span class="gp-bt perigo">Cancel</span>', pron: 'KÉN-sou.' },
  { w: 'submit', pt: 'enviar (para processar)', au: 'w-submit', tela: '<span class="gp-bt cheio">Submit</span>', pron: 'sab-MIT.' },
  { w: 'error', pt: 'erro', au: 'w-error', tela: '<b style="color:#ffb3bb">ERROR</b> · Invalid BIC', pron: 'É-ror.' },
  { w: 'invalid', pt: 'inválido', au: 'w-invalid', tela: 'ERROR · <b>Invalid</b> BIC', pron: 'in-VÉ-lid.' },
  { w: 'missing', pt: 'faltando', au: 'w-missing', tela: 'ERROR · <b>Missing</b> information', pron: 'MI-sing.' }];

var EXPLICA = {
  cards: [
    { tile: 'Select', curto: 'os botões', le: 'lê-se “si-lékt”', titulo: 'a tela dá ordens: verbo primeiro', img: 'Botão é ordem (imperativo): o verbo vem primeiro, sem “you”. Select = Selecione. Confirm = Confirme.',
      ex: [{ b: [['Select', 'selecione', 'v'], ['the payment', 'o pagamento', 'c']], en: 'Select the payment.', pt: 'Selecione o pagamento.', au: 'x1' },
           { b: [['Confirm', 'confirme', 'v'], ['and', 'e', 'a'], ['settle', 'liquide', 'v']], en: 'Confirm and settle.', pt: 'Confirme e liquide.', au: 'x2' }],
      aviso: 'Submit não é “submeter”: é enviar para processar.' },
    { tile: 'can', curto: 'consigo / posso', le: 'lê-se “ken”', titulo: 'can: eu consigo, eu posso', img: 'Can + verbo, sem “to”. O can não muda: I can, she can, we can.',
      ex: [{ b: [['I', 'eu', 'a'], ['can', 'consigo', 'v'], ['settle it', 'liquidar', 'c']], en: 'I can settle it.', pt: 'Eu consigo liquidar.', au: 'x3' }],
      aviso: 'Não diga “I can to settle”. Depois de can, o verbo vem direto: I can settle.' },
    { tile: 'can’t', curto: 'não consigo + motivo', le: 'lê-se “kent” (EUA) ou “kant” (UK)', titulo: 'can’t: não consigo, e o porquê', img: 'Na prática: diga o que não dá E o motivo, com is. Duas frases curtas.',
      ex: [{ b: [['I', 'eu', 'a'], ['can’t', 'não consigo', 'v'], ['settle it', 'liquidar', 'c']], en: 'I can’t settle it.', pt: 'Não consigo liquidar.', au: 'x4' },
           { b: [['The BIC', 'o BIC', 'a'], ['is', 'está', 'v'], ['invalid', 'inválido', 'c']], en: 'The BIC is invalid.', pt: 'O BIC está inválido.', au: 'x5' }],
      aviso: 'O “t” de can’t é fraco: escute bem o som do “a”. Can = “ken”, can’t = “kent”.' },
    { tile: 'ERROR', curto: 'as mensagens de erro', le: 'lê-se “é-ror”', titulo: 'as quatro mensagens de erro do Unit', img: 'Invalid BIC (BIC inválido) · Missing information (falta informação) · Insufficient funds (saldo insuficiente) · Cut-off time passed (passou do horário limite).',
      ex: [{ b: [['The invoice', 'a invoice', 'a'], ['is', 'está', 'v'], ['missing', 'faltando', 'c']], en: 'The invoice is missing.', pt: 'A invoice está faltando.', au: 'x6' }],
      aviso: 'Insufficient se lê “in-sa-FI-xent”. Cut-off: “cât-óf”.' }],
  monta: [
    { pt: 'Selecione o pagamento.', blocos: ['the payment.', 'Select'], certo: 'Select the payment.' },
    { pt: 'Eu consigo liquidar.', blocos: ['settle it.', 'I', 'can'], certo: 'I can settle it.' },
    { pt: 'Não consigo liquidar. O BIC está inválido.', blocos: ['The BIC is invalid.', 'I can’t', 'settle it.'], certo: 'I can’t settle it. The BIC is invalid.' },
    { pt: 'A invoice está faltando.', blocos: ['is', 'missing.', 'The invoice'], certo: 'The invoice is missing.' }] };

var SIM = { mods: ['exchange', 'swift', 'unit'], ops: ['FX-20481', 'FX-20482', 'FX-20483', 'FX-20484', 'FX-20485', 'FX-20486', 'FX-20487', 'FX-20488'],
  fim: 'Five missions. You can settle payments in English.',
  missoes: [
    { q: 'Open the UNIT tab. Select FX-20483. Confirm. Settle.', pt: 'Aba UNIT → selecione FX-20483 → Confirm → Settle.', st: ['I can settle it.', 'It’s released.'], r: 'I can settle it. FX-20483 is released.', alvo: { t: 'settle', v: 'FX-20483' }, prof: 'O fluxo feliz: Select → Confirm → Settle. Peça que ele LEIA cada botão em voz alta antes de clicar.' },
    { q: 'Select FX-20484. Confirm. What’s the error?', pt: 'Selecione FX-20484 e confirme. Qual é o erro?', st: ['I can’t settle it.', 'The BIC is invalid.'], r: 'I can’t settle it. The BIC is invalid.', alvo: { t: 'erro', v: 'FX-20484' }, prof: 'O BIC está incompleto (HBRQGB2): faltam 4 caracteres. A frase-alvo é a do cartão: I can’t … + The BIC is invalid.' },
    { q: 'Fix the BIC: Edit BIC, choose the right one, Submit. Then Settle.', pt: 'Edit BIC → escolha o BIC certo → Submit → Settle.', st: ['I can fix it.', 'Now I can settle it.'], r: 'I can fix it. The BIC is HBRQGB2LXXX. Now I can settle it.', alvo: { t: 'settle', v: 'FX-20484' }, prof: 'O BIC certo tem 11 caracteres: HBRQGB2LXXX. Os outros dois trocam letras de lugar: bom para soletrar.' },
    { q: 'Select FX-20486. Confirm. Why can’t you settle it?', pt: 'Selecione FX-20486 e confirme. Por que não dá para liquidar?', st: ['I can’t settle it.', 'The cut-off time …'], r: 'I can’t settle it. The cut-off time passed.', alvo: { t: 'erro', v: 'FX-20486' }, prof: 'Cut-off = horário limite. A data-valor era 11 MAY (hoje) e o cut-off do euro é ao meio-dia: só amanhã.' },
    { q: 'Select FX-20487. Confirm. Then cancel it.', pt: 'Selecione FX-20487, confirme, leia o erro e cancele.', st: ['I can’t settle it. The funds are insufficient.', 'I can cancel it.'], r: 'I can’t settle it: insufficient funds. I can cancel it.', alvo: { t: 'cancel', v: 'FX-20487' }, prof: 'Insufficient funds = saldo insuficiente. Cancelar pede confirmação (“Yes, cancel”): leia a pergunta com ele.' }] };

var DIALOGO = { rot: 'YOUR MANAGER ON THE PHONE', audio: 'dialogo',
  antes: { q: 'Your manager asks: “Can you settle it today?” What are the two answers?', h: 'Yes, I can. / No, I can’t.' },
  ouvir: 'Listen: what is the problem with FX-20484? And with FX-20486?',
  falas: [
    ['Paul', 'Ana, {can you} settle FX-20484 today?'],
    ['Ana', 'No, I {can’t}. The BIC is invalid.'],
    ['Paul', '{Can you} fix it?'],
    ['Ana', 'Yes, I {can}. One moment, please. I’m checking.'],
    ['Ana', 'OK. The BIC is correct now. I {can} submit it.'],
    ['Paul', 'Great. And FX-20486?'],
    ['Ana', 'I {can’t} settle it today. The cut-off for euros is at noon.'],
    ['Paul', 'OK. Settle it tomorrow, please.']],
  voz: { Paul: 'en-US-GuyNeural', Ana: 'en-US-AvaNeural' },
  perguntas: [
    { q: 'What is the problem with FX-20484?', h: 'The BIC is invalid.' },
    { q: 'Can Ana fix it?', h: 'Yes, she can.' },
    { q: 'Why can’t Ana settle FX-20486 today?', h: 'The cut-off for euros is at noon.' },
    { q: 'When can she settle it?', h: 'Tomorrow.' }],
  fim: 'Can you …? · Yes, I can. · No, I can’t. The … is …' };

var CARTAO = { ph: 'I can’t settle …\nThe … is …\nI can …', rot: 'A note to my manager',
  chips: ['I can ', 'I can’t ', 'settle ', 'fix it', 'FX-20484. ', 'FX-20486. ', 'The BIC is invalid.', 'The cut-off time passed.', 'today', 'tomorrow'],
  perg: ['A NOTE TO YOUR MANAGER', 'Two payments: what you can and can’t do, and why.'],
  exemploRot: 'UNIT TODAY', exemplo: [['FX-20484', 'ERROR · Invalid BIC'], ['FX-20486', 'ERROR · Cut-off time passed'], ['FX-20483', 'SETTLED']],
  modelo: 'I can’t settle FX-20484. The BIC is invalid. I can fix it today.<br>I can’t settle FX-20486 today. The cut-off time passed. I can settle it tomorrow.' };

var PODE = [
  'I can read the buttons: Select, Confirm, Settle, Submit, Cancel.',
  'I can say: “I can settle it.” and “I can’t settle it.”',
  'I can read four error messages: invalid BIC, missing information, insufficient funds, cut-off time.',
  'I can say why: “I can’t settle it. The BIC is invalid.”'];

var PT = {
  morning: 'Leia a linha da fila: situação, valor, moeda, data.',
  conversa: 'Perguntas com can (você consegue / pode?). Responda: Yes, I can. / No, I can’t.',
  termos: 'Os botões e os erros da tela de liquidação. Ouça e repita 3 vezes.',
  explica: 'Botão é ordem: verbo primeiro. Can = consigo; can’t = não consigo + o motivo.',
  simulador: 'Agora o Unit está liberado: selecione, confirme e liquide. Leia o erro quando aparecer.',
  dialogo: 'O gerente pergunta se a Ana consegue liquidar dois pagamentos.',
  cartao: 'Escreva um recado para o gerente: o que você consegue e não consegue fazer, e por quê.',
  pode: 'Leia cada frase em voz alta e toque nas que você já consegue fazer.' };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G14 · uma cena curta nova (k: gx) antes de explica.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'cacaErro', titulo: 'Mistake hunter. Six lines in Unit.',
  toque: 'People who speak Portuguese often say these. Tap the wrong word before you see the answer.',
  itens: [
    { f: 'You [[are can]] settle it today.', r: 'You <b>can</b> settle it today.', d: 'Can is the helper already. No are.' },
    { f: 'I can [[to]] settle the payment.', r: 'I can <b>settle</b> the payment.', d: 'After can, the verb comes straight: no to.' },
    { f: '[[Selects]] the payment.', r: '<b>Select</b> the payment.', d: 'A button is an order: the clean verb, no -s.' },
    { f: 'I [[no can]] settle it.', r: 'I <b>can’t</b> settle it.', d: 'For no with can: can’t.' },
    { f: 'She [[cans]] settle it.', r: 'She <b>can</b> settle it.', d: 'Can never takes an -s.' },
    { f: 'The BIC [[invalid]].', r: 'The BIC <b>is invalid</b>.', d: 'Invalid describes the BIC, so the sentence needs is.' }
  ],
  nota: 'The screen gives orders with a clean verb: <b>Select</b>, <b>Confirm</b>, <b>Settle</b>. After <b>can</b> or <b>can’t</b>, the verb stays clean too: I can settle it.',
  uso: { p: 'Your turn. In Unit: one payment you can settle, and one you can’t. Say why.', molde: ['I can …', 'I can’t … The … is …'], ex: 'I can settle FX-20483. I can’t settle FX-20484. The BIC is invalid.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_caca', GX_EXPLICA); };
