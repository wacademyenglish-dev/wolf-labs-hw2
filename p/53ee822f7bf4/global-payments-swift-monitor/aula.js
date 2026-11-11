/* ============================================================
   GLOBAL PAYMENTS ENGLISH · BUSINESS · CURSOS · LESSON 3 · SWIFT MONITOR · LIVE CLASS   03/11/2026
   Só os dados: o motor é o kit/revisao/revisao.js + dialogo.js + gp.js.
   Alvo: Who is…? / What is…? + o alfabeto para soletrar BIC e referência. Abre o SWIFT Monitor (MT103 e pacs.008).
   Entra a frase 6 do Core 10. Sistemas, bancos, empresas e BICs FICTÍCIOS (todo BIC tem Q na 4ª letra).
   ============================================================ */
var REV = { tipo: 'aula', aula: 3, nivel: 'A1', unidade: 1, kick: 'GLOBAL PAYMENTS ENGLISH · LESSON 3', titulo: ['SWIFT', 'Monitor'], tema: 'Who is…? · What is…? · spelling', placa: 'LESSON 3',
  lugarConversa: 'TUESDAY · 10 AM', cor: '#b9a6e8', cor2: '#d8c08a',
  sub: 'Open the payment message. Find who sends, who receives and which banks are in the route. Then spell a BIC on the phone.',
  chips: ['The message fields', 'The alphabet', 'MT103 and pacs.008'], botao: 'Start the lesson',
  nota: 'A BIC is the address of a bank. Spell it slowly: letter by letter.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'morning', est: 'o', min: 4, img: 'mesa', rot: 'I · Morning Check', t: 'Your first payment of the day.', p: 'Read the line out loud. One question at a time.', sig: ['status', 'numeros', 'vd'] },
  { k: 'conversa', est: 'o', min: 4, img: 'conversa', rot: 'II · Tuesday Morning', t: 'A short chat before work.', p: 'Choose an answer. Say it. Then ask: “And you?”' },
  { k: 'termos', est: 'l', min: 8, img: 'capa', rot: 'III · Message Words', t: 'Eight words from the SWIFT message.', p: 'Listen. Look. Say each word three times.', sig: ['sndrcv', 'bene', 'inter', 'bic'] },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'IV · The Flip', t: 'Watch the words move.', p: 'Flip each statement into a question. Notice where is goes. Then flip four on your own.' },
  { k: 'explica', est: 'f', min: 9, img: 'mesa', rot: 'V · Who, What, Spell It', t: 'Ask about the message.', p: 'Read the card with your teacher. Then build the question.', sig: ['bic', 'bene'] },
  { k: 'simulador', est: 'f', min: 13, img: 'capa', rot: 'VI · The Simulator', t: 'Open the SWIFT Monitor.', p: 'Do each mission on the screen. Then say it out loud.', sig: ['swift', 'mt103', 'pacs008', 'bic', 'bene', 'inter', 'sndrcv'] },
  { k: 'dialogo', est: 'l', min: 7, img: 'conversa', rot: 'VII · Spell It, Please', t: 'A call with the intermediary bank.', p: 'One question before. Listen. Then the questions.', sig: ['bic', 'inter'] },
  { k: 'cartao', est: 'w', min: 6, img: 'mesa', rot: 'VIII · Questions for a Call', t: 'Write three questions about a payment.', p: 'Who is …? What is …? Then read them out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Lesson 3: what can you do now?', p: 'Read each line out loud. Tap what you can do.' }
];

var MORNING = { rot: 'OPERATIONS QUEUE · 08:05', ref: 'FX-20481',
  perguntas: [
    { q: 'What’s the status?', st: ['It’s …'], r: 'It’s pending.' },
    { q: 'What’s the amount?', st: ['The amount is …'], r: 'The amount is twenty-five thousand dollars.' },
    { q: 'What’s the currency?', st: ['The currency is …'], r: 'The currency is dollars.' },
    { q: 'What’s the value date?', st: ['The value date is …'], r: 'The value date is May twelfth.' }],
  frase: 'FX-20481 is pending. The amount is 25,000 dollars. The value date is May twelfth.' };

var CONVERSA = [
  { q: 'Is your name easy or difficult to spell?', f: 'Easy or difficult?', voce: ['It’s easy.', 'It’s difficult.'], ex: 'It’s difficult! People always ask: “Can you spell that?”' },
  { q: 'Phone or email: what is easier in English?', f: 'Phone or email?', voce: ['Email is easier.', 'The phone is easier.'], ex: 'Email is easier. The phone is difficult.' },
  { q: 'Is your team big or small?', f: 'Big or small?', voce: ['It’s big.', 'It’s small.'], ex: 'It’s small. We’re five people.' },
  { q: 'What is your favorite day: Monday or Friday?', f: 'Monday or Friday?', voce: ['Friday!', 'Monday.'], ex: 'Friday! The queue is small on Friday.' }];

var TERMOS = [
  { w: 'sender', pt: 'remetente (banco que envia)', au: 'w-sender', tela: '<b>Sender</b> AURQBRSPXXX', pron: 'SÉN-der.' },
  { w: 'receiver', pt: 'destinatário (banco que recebe)', au: 'w-receiver', tela: '<b>Receiver</b> HBRQGB2LXXX', pron: 'ri-SII-ver.' },
  { w: 'beneficiary', pt: 'beneficiário (quem recebe o dinheiro)', au: 'w-beneficiary', tela: ':59: <b>Beneficiary</b> Customer · Lumen Trading LLC', pron: 'be-ne-FI-xi-é-ri: repita em pedaços.' },
  { w: 'intermediary bank', pt: 'banco intermediário', au: 'w-intermediary', tela: ':56A: <b>Intermediary</b> · HBRQGB2LXXX', pron: 'in-ter-MII-di-é-ri.' },
  { w: 'BIC', pt: 'código do banco no SWIFT', au: 'w-bic', tela: '<b>BIC</b> NGTQUS33XXX', pron: 'B-I-C (bi-ai-si) ou “bick”.' },
  { w: 'reference', pt: 'referência (número da operação)', au: 'w-reference', tela: ':20: Sender’s <b>Reference</b> · FX-20481', pron: 'RÉ-fe-rens.' },
  { w: 'message', pt: 'mensagem', au: 'w-message', tela: '<b>Message</b> MT103 · Single Customer Credit Transfer', pron: 'MÉ-sidj.' },
  { w: 'field', pt: 'campo', au: 'w-field', tela: '<b>Field</b> :32A: Value Date / Currency / Amount', pron: 'fiild: “i” longo.' }];

var EXPLICA = {
  cards: [
    { tile: 'Who', curto: 'quem (pessoa, empresa)', le: 'lê-se “ruu”', titulo: 'perguntar por gente e por empresa', img: 'Who = quem. E na pergunta o is vem ANTES: Who IS the beneficiary? (Quem É o beneficiário?)',
      ex: [{ b: [['Who', 'quem', 'a'], ['is', 'é', 'v'], ['the beneficiary?', 'o beneficiário?', 'c']], en: 'Who is the beneficiary?', pt: 'Quem é o beneficiário?', au: 'x1' },
           { b: [['The beneficiary', 'o beneficiário', 'a'], ['is', 'é', 'v'], ['Lumen Trading', 'a Lumen Trading', 'c']], en: 'The beneficiary is Lumen Trading.', pt: 'O beneficiário é a Lumen Trading.', au: 'x2' }],
      aviso: 'O “w” de who não se fala: soa “ruu”.' },
    { tile: 'What', curto: 'qual / o que (coisa)', le: 'lê-se “uót”', titulo: 'perguntar por coisa: código, valor, data', img: 'What = o quê / qual. Para coisas: o BIC, a referência, a moeda. What’s = What is.',
      ex: [{ b: [['What', 'qual', 'a'], ['is', 'é', 'v'], ['the BIC?', 'o BIC?', 'c']], en: 'What is the BIC?', pt: 'Qual é o BIC?', au: 'x3' },
           { b: [['What’s', 'qual é', 'v'], ['the reference?', 'a referência?', 'c']], en: 'What’s the reference?', pt: 'Qual é a referência?', au: 'x4' }],
      aviso: 'Não diga “What the BIC is?”. Na pergunta, o is vem antes: What IS the BIC?' },
    { tile: 'A E I', curto: 'as letras que confundem', le: 'A “ei” · E “ii” · I “ai”', titulo: 'soletrar sem trocar as vogais', img: 'Em inglês as vogais têm outro nome. A = ei, E = ii, I = ai. Também: G = dji, J = djei, R = ar, H = eitch, W = dâbliu, Y = uai, Q = kiu.',
      ex: [{ b: [['N', 'én', 'a'], ['G', 'dji', 'v'], ['T', 'tii', 'a'], ['Q', 'kiu', 'v'], ['U', 'iu', 'a'], ['S', 'és', 'a']], en: 'N, G, T, Q, U, S', pt: 'o começo do BIC NGTQUS33', au: 'x5' }],
      aviso: 'Número dentro do código: dígito por dígito. 33 = “three, three”. Zero = “zero” ou “oh”.' },
    { tile: 'Spell', curto: 'pedir para soletrar', le: 'lê-se “spél”', titulo: 'Can you spell that, please?', img: 'A frase 6 do Core 10. Use sempre que ouvir um código, um nome ou uma referência.',
      ex: [{ b: [['Can you', 'você pode', 'v'], ['spell that', 'soletrar isso', 'c'], ['please?', 'por favor?', 'a']], en: 'Can you spell that, please?', pt: 'Pode soletrar, por favor?', au: 'x6' }],
      aviso: 'E se ele falar rápido: “Slowly, please.” (Devagar, por favor.)' }],
  monta: [
    { pt: 'Quem é o beneficiário?', blocos: ['the beneficiary?', 'is', 'Who'], certo: 'Who is the beneficiary?' },
    { pt: 'Qual é o BIC?', blocos: ['is', 'the BIC?', 'What'], certo: 'What is the BIC?' },
    { pt: 'Quem é o banco intermediário?', blocos: ['the intermediary bank?', 'Who', 'is'], certo: 'Who is the intermediary bank?' },
    { pt: 'Pode soletrar, por favor?', blocos: ['please?', 'spell that,', 'Can you'], certo: 'Can you spell that, please?' }] };

var SIM = { mods: ['exchange', 'swift'], ops: ['FX-20481', 'FX-20482', 'FX-20483', 'FX-20484', 'FX-20485', 'FX-20486', 'FX-20487', 'FX-20488'],
  fim: 'Five missions. You can read a SWIFT message in English.',
  missoes: [
    { q: 'Open FX-20481 in the SWIFT Monitor.', pt: 'Abra a FX-20481 e clique em “Open in SWIFT Monitor”.', st: ['This is the message.', 'It’s an MT103.'], r: 'This is the message. It’s an MT103.', alvo: { t: 'swift', v: 'FX-20481' }, prof: 'Caminho: clique na FX-20481 na fila → “Open in SWIFT Monitor”. Ou aba SWIFT MONITOR → escolher a mensagem.' },
    { q: 'Tap the field :59:. Who is the beneficiary?', pt: 'Toque no campo :59:. Quem é o beneficiário?', st: ['The beneficiary is …'], r: 'The beneficiary is Lumen Trading LLC.', alvo: { t: 'campo', v: 'ben' }, prof: ':59: Beneficiary Customer = quem recebe o dinheiro.' },
    { q: 'Tap the field :57A:. What is the BIC? Spell it.', pt: 'Toque no :57A:. Qual é o BIC? Soletre.', st: ['The BIC is …', 'N, G, T, Q …'], r: 'The BIC is N-G-T-Q-U-S-three-three-X-X-X.', alvo: { t: 'campo', v: 'bbk' }, prof: ':57A: = banco do beneficiário. Faça o aluno soletrar devagar; você escreve no papel e confere.' },
    { q: 'Tap :56A:. Who is the intermediary bank?', pt: 'Toque no :56A:. Quem é o banco intermediário?', st: ['The intermediary bank is …'], r: 'The intermediary bank is Harbor Trust Bank, HBRQGB2LXXX.', alvo: { t: 'campo', v: 'int' }, prof: 'Na tela aparece só o BIC. Para dizer o nome, ele pode voltar à fila ou ao Morning Check: Harbor Trust Bank (Londres, GB).' },
    { q: 'Switch to pacs.008. Find the beneficiary again. What is the field name?', pt: 'Troque para pacs.008 e ache o beneficiário de novo. Qual é o nome do campo?', st: ['It’s Cdtr.', 'Cdtr is the beneficiary.'], r: 'It’s Cdtr. Cdtr is the beneficiary.', alvo: { t: 'campo-mx', v: 'ben' }, prof: 'pacs.008 é o formato novo (ISO 20022). Cdtr = creditor = beneficiário. Mesma informação, outro nome.' }] };

var DIALOGO = { rot: 'A CALL WITH HARBOR TRUST BANK', audio: 'dialogo',
  antes: { q: 'Someone says a code fast on the phone. What do you say?', h: 'Can you spell that, please?' },
  ouvir: 'Listen: who is the beneficiary? What is the BIC?',
  falas: [
    ['David', 'Harbor Trust, David speaking.'],
    ['Ana', 'Hi David, it’s Ana from Banco Aurora. I have a question about FX-20481.'],
    ['David', 'OK. {Who is} the beneficiary?'],
    ['Ana', 'The beneficiary is Lumen Trading.'],
    ['David', 'And {what is} the BIC of the beneficiary bank?'],
    ['Ana', 'N, G, T, Q, U, S, three, three.'],
    ['David', 'Sorry, {can you spell that}, please? Slowly.'],
    ['Ana', 'Sure. N … G … T … Q … U … S … three … three.'],
    ['David', 'Perfect. Thank you, Ana.']],
  voz: { David: 'en-GB-RyanNeural', Ana: 'en-US-AvaNeural' },
  perguntas: [
    { q: 'Where is David from?', h: 'He’s from Harbor Trust (the intermediary bank).' },
    { q: 'Who is the beneficiary?', h: 'Lumen Trading.' },
    { q: 'What is the BIC? Spell it.', h: 'N-G-T-Q-U-S-3-3.' },
    { q: 'What does David ask?', h: 'Can you spell that, please? Slowly.' }],
  fim: 'Who is …? · What is …? · Can you spell that, please?' };

var CARTAO = { ph: 'Who is …?\nWhat is …?\nCan you …?', rot: 'Questions for a call',
  chips: ['Who is ', 'What is ', 'the beneficiary?', 'the BIC?', 'the reference?', 'the intermediary bank?', 'the sender?', 'Can you spell that, please?'],
  perg: ['QUESTIONS FOR A CALL', 'Write three questions about a payment. Then read them out loud.'],
  exemploRot: 'MESSAGE', exemplo: [['REFERENCE', 'FX-20483'], [':59: BENEFICIARY', 'Atlas Motors Inc.'], [':57A: BANK', 'NGTQUS33XXX'], [':56A: INTERMEDIARY', 'HBRQGB2LXXX']],
  modelo: 'Who is the beneficiary?<br>What is the BIC of the beneficiary bank?<br>Can you spell that, please?' };

var PODE = [
  'I can find the sender, the receiver and the beneficiary in a SWIFT message.',
  'I can ask: “Who is the beneficiary?” “What is the BIC?”',
  'I can spell a BIC letter by letter: A “ei”, E “ii”, I “ai”.',
  'I can say: “Can you spell that, please?”'];

var PT = {
  morning: 'Leia a linha da fila: situação, valor, moeda, data.',
  conversa: 'Escolha uma das duas respostas e fale. Depois pergunte: “And you?”',
  termos: 'As palavras da mensagem SWIFT. Sender/receiver são os BANCOS; beneficiary é quem recebe o dinheiro.',
  explica: 'Who = quem. What = qual / o quê. Na pergunta, o is vem antes: Who IS…? E cuidado com as vogais ao soletrar.',
  simulador: 'Agora o SWIFT Monitor está liberado. Toque nos campos da mensagem para ver o que cada um é.',
  dialogo: 'Uma ligação com o banco intermediário. A Ana soletra um código.',
  cartao: 'Escreva 3 perguntas para uma ligação sobre um pagamento.',
  pode: 'Leia cada frase em voz alta e toque nas que você já consegue fazer.' };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G7 · uma cena curta nova (k: gx) antes de explica.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'vira', titulo: 'The statement, then the question. Watch the words move.',
  frases: [
    { de: ['The sender', '*is', 'Northline Bank', '.'], para: ['+Who', '*is', 'the sender', '?'], d: 'Who + is first. Who asks about a person or a bank.' },
    { de: ['The reference', '*is', 'FX-20481', '.'], para: ['+What', '*is', 'the reference', '?'], d: 'What + is first. What asks about a thing.' },
    { de: ['The BIC', '*is', 'the address of a bank', '.'], para: ['+What', '*is', 'a BIC', '?'], d: 'Same shape: What is a BIC?' }
  ],
  notaBotao: 'What moves?',
  nota: 'The question starts with <b>Who</b> or <b>What</b>, then <b>is</b>, then the thing: <b>Who is</b> the sender? <b>What is</b> the reference? The answer: The sender <b>is</b> Northline Bank.',
  pergunta: 'Your turn. Flip it out loud, then check.',
  treino: [
    { de: 'The sender is Alba Trading.', r: '<b>Who is</b> the sender?' },
    { de: 'The amount is 5,000 dollars.', r: '<b>What is</b> the amount?' },
    { de: 'The beneficiary is Orla Marsh.', r: '<b>Who is</b> the beneficiary?' },
    { de: 'The message type is MT103.', r: '<b>What is</b> the message type?' }
  ],
  uso: { p: 'Your turn. You are on a call about a payment. Write two questions for the other bank.', molde: ['Who is …?', 'What is …?'], ex: 'Who is the beneficiary? What is the reference?' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_vira', GX_EXPLICA); };
