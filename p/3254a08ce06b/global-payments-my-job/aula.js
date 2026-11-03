/* ============================================================
   GLOBAL PAYMENTS ENGLISH · BUSINESS · CURSOS · LESSON 1 · MY JOB · LIVE CLASS   03/11/2026
   Só os dados: o motor é o kit/revisao/revisao.js + dialogo.js + gp.js (simulador, blocos, PT, siglas).
   Inglês para quem trabalha com pagamentos internacionais (câmbio, SWIFT, liquidação). A1 com cara de A0.
   Alvo: to be (I’m, it’s, this is) + 8 palavras da tela. Sistemas, bancos, empresas e BICs FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', aula: 1, nivel: 'A1', unidade: 1, kick: 'GLOBAL PAYMENTS ENGLISH · LESSON 1', titulo: ['My', 'Job'], tema: 'I’m · this is · it’s', placa: 'LESSON 1',
  lugarConversa: 'MONDAY · 9 AM', cor: '#b9a6e8', cor2: '#d8c08a',
  sub: 'You work with international payments. Today you say who you are, and you meet your system: the Exchange queue.',
  chips: ['8 screen words', 'The Exchange simulator', 'Your 3 sentences'], botao: 'Start the lesson',
  nota: 'Small steps. Say everything out loud. Mistakes are part of the job.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'morning', est: 'o', min: 3, img: 'mesa', rot: 'I · Morning Check', t: 'Your profile in the system.', p: 'Read the screen out loud. Small answers.', sig: ['queue'] },
  { k: 'conversa', est: 'o', min: 4, img: 'conversa', rot: 'II · Good Morning', t: 'A short chat before work.', p: 'Choose an answer. Say it. Then ask: “And you?”' },
  { k: 'termos', est: 'l', min: 8, img: 'capa', rot: 'III · Screen Words', t: 'Eight words from your screen.', p: 'Listen. Look. Say each word three times.', sig: ['queue', 'fx', 'swift'] },
  { k: 'explica', est: 'f', min: 8, img: 'mesa', rot: 'IV · I’m, This Is, It’s', t: 'Three small words. A lot of English.', p: 'Read the card with your teacher. Then build the sentence.' },
  { k: 'simulador', est: 'f', min: 12, img: 'capa', rot: 'V · The Simulator', t: 'This is Exchange. Your queue.', p: 'Do each mission on the screen. Then say it out loud.', sig: ['queue', 'ref', 'bene', 'status'] },
  { k: 'dialogo', est: 'l', min: 7, img: 'conversa', rot: 'VI · A Video Call', t: 'A new colleague from New York.', p: 'One question before. Listen. Then the questions.' },
  { k: 'cartao', est: 'w', min: 7, img: 'mesa', rot: 'VII · My Job', t: 'Three sentences about you.', p: 'Write. Then read it out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 1: what can you do now?', p: 'Read each line out loud. Tap what you can do.' }
];

var MORNING = { perfil: [['NAME', 'Ana Reis'], ['JOB', 'Payments analyst'], ['TEAM', 'International payments'], ['SYSTEM', 'Exchange'], ['OFFICE', 'São Paulo'], ['QUEUE TODAY', '8 operations']],
  perguntas: [
    { q: 'What is her name?', st: ['Her name is …'], r: 'Her name is Ana Reis.' },
    { q: 'What is her job?', st: ['She’s a …'], r: 'She’s a payments analyst.' },
    { q: 'What is the system?', st: ['It’s …'], r: 'It’s Exchange.' },
    { q: 'And you? What is your job?', st: ['I’m a …', 'I’m a payments analyst.'], r: 'I’m a payments analyst.' }],
  frase: 'This is Ana. She’s a payments analyst. The system is Exchange.' };

var CONVERSA = [
  { q: 'Good morning! How are you today?', f: 'Good or tired?', voce: ['I’m good, thanks.', 'I’m tired, but OK.'], ex: 'I’m good, thanks. And you?' },
  { q: 'Are you at the office or at home today?', f: 'Office or home?', voce: ['I’m at the office.', 'I’m at home.'], ex: 'I’m at the office today.' },
  { q: 'Is today busy or quiet?', f: 'Busy or quiet?', voce: ['It’s busy.', 'It’s quiet.'], ex: 'It’s busy! It’s Monday.' },
  { q: 'Coffee or tea in the morning?', f: 'Coffee or tea?', voce: ['Coffee, please!', 'Tea.'], ex: 'Coffee, please! Coffee is important.' }];

var TERMOS = [
  { w: 'payment', pt: 'pagamento', au: 'w-payment', tela: 'Exchange › Queue › <b>Payment</b> FX-20481', pron: 'PEI-ment. O “a” soa “ei”.' },
  { w: 'bank', pt: 'banco', au: 'w-bank', tela: 'Beneficiary <b>bank</b>: Northgate Bank', pron: 'bænk: boca aberta no “a”, sem “o” no fim.' },
  { w: 'client', pt: 'cliente', au: 'w-client', tela: '<b>Client</b>: Serra Steel S.A.', pron: 'CLAI-ent. O “i” soa “ai”.' },
  { w: 'system', pt: 'sistema', au: 'w-system', tela: '<b>System</b>: Exchange', pron: 'SIS-tem. Força no começo.' },
  { w: 'queue', pt: 'fila', au: 'w-queue', tela: 'Operations <b>queue</b> · 8 operations', pron: '“kiu”, igual à letra Q. O resto não se fala.' },
  { w: 'screen', pt: 'tela', au: 'w-screen', tela: 'The Exchange <b>screen</b>', pron: 'scriin: começa com “s”, sem “is” antes.' },
  { w: 'analyst', pt: 'analista', au: 'w-analyst', tela: 'User: <b>analyst</b>01', pron: 'Ê-na-list. Força no começo. “an analyst” (vogal).' },
  { w: 'international', pt: 'internacional', au: 'w-international', tela: '<b>International</b> payments team', pron: 'in-ter-NÉ-xo-nal.' }];

var EXPLICA = {
  cards: [
    { tile: 'I’m', curto: 'eu sou / eu estou', le: 'lê-se “aim” · I am', titulo: 'eu sou · eu estou', img: 'Em português o “eu” some (“Sou analista”). Em inglês, NUNCA: toda frase precisa de quem. I’m = I am, e serve para “sou” E para “estou”.',
      ex: [{ b: [['I’m', 'eu sou', 'v'], ['a payments analyst', 'analista de pagamentos', 'c']], en: 'I’m a payments analyst.', pt: 'Sou analista de pagamentos.', au: 'x1' },
           { b: [['I’m', 'eu estou', 'v'], ['at the office', 'no escritório', 'c']], en: 'I’m at the office.', pt: 'Estou no escritório.', au: 'x2' }],
      aviso: 'Não diga “Am analyst”. Diga I’m an analyst: com I e com an (analyst começa com vogal).' },
    { tile: 'This is', curto: 'este é / esta é', le: 'lê-se “dhis iz”', titulo: 'apresentar: este é · esta é', img: 'Pense num dedo apontando para a tela. This is = “este é”, para coisa ou pessoa perto de você.',
      ex: [{ b: [['This', 'este', 'a'], ['is', 'é', 'v'], ['the Exchange system', 'o sistema Exchange', 'c']], en: 'This is the Exchange system.', pt: 'Este é o sistema Exchange.', au: 'x3' },
           { b: [['This', 'esta', 'a'], ['is', 'é', 'v'], ['the queue', 'a fila', 'c']], en: 'This is the queue.', pt: 'Esta é a fila.', au: 'x4' }],
      aviso: 'O “th” de this: a língua encosta nos dentes. Não é “dis” nem “zis”.' },
    { tile: 'It’s', curto: 'é / está (coisa)', le: 'lê-se “its” · it is', titulo: 'é · está, para coisas', img: 'Em português: “É um pagamento.” Sem sujeito. Em inglês, a coisa ganha um sujeito: it. It’s = it is.',
      ex: [{ b: [['It’s', 'é', 'v'], ['a payment', 'um pagamento', 'c']], en: 'It’s a payment.', pt: 'É um pagamento.', au: 'x5' },
           { b: [['It’s', 'está', 'v'], ['busy', 'cheio, corrido', 'c']], en: 'It’s busy today.', pt: 'Está corrido hoje.', au: 'x6' }],
      aviso: 'Não diga “Is a payment”. Sempre It’s a payment.' }],
  monta: [
    { pt: 'Sou analista de pagamentos.', blocos: ['payments analyst.', 'I’m', 'a'], certo: 'I’m a payments analyst.' },
    { pt: 'Este é o sistema Exchange.', blocos: ['the Exchange system.', 'is', 'This'], certo: 'This is the Exchange system.' },
    { pt: 'É um pagamento internacional.', blocos: ['international payment.', 'an', 'It’s'], certo: 'It’s an international payment.' },
    { pt: 'Estou no escritório hoje.', blocos: ['today.', 'at the office', 'I’m'], certo: 'I’m at the office today.' }] };

var SIM = { mods: ['exchange'], ops: ['FX-20481', 'FX-20482', 'FX-20483', 'FX-20484', 'FX-20485', 'FX-20486', 'FX-20487', 'FX-20488'],
  fim: 'Five missions. This is your system, in English.',
  missoes: [
    { q: 'This is Exchange. Look at the queue. Say: “This is the queue.”', pt: 'Olhe a fila na tela e diga a frase.', st: ['This is the queue.'], r: 'This is the queue.', alvo: { t: 'prof' }, prof: 'Missão de abertura: aponte para a tabela. Quando ele disser a frase, toque “Mark as done”.' },
    { q: 'Click FX-20481. Say: “This is a payment.”', pt: 'Clique na referência FX-20481.', st: ['This is a payment.', 'It’s a payment.'], r: 'This is a payment. It’s FX-20481.', alvo: { t: 'abre', v: 'FX-20481' }, prof: 'FX = câmbio. A referência é o “número” do pagamento.' },
    { q: 'Find the client of FX-20481. Who is it?', pt: 'Ache o “Client” no quadro que abriu.', st: ['The client is …'], r: 'The client is Serra Steel S.A.', alvo: { t: 'abre', v: 'FX-20481' }, prof: 'Client = o cliente do banco que manda o dinheiro (ordenante).' },
    { q: 'Find the bank. Say: “The bank is …”', pt: 'Ache o “Beneficiary bank”.', st: ['The bank is …'], r: 'The bank is Northgate Bank.', alvo: { t: 'abre', v: 'FX-20481' }, prof: 'Beneficiary bank = o banco de quem recebe. A palavra beneficiary é da aula 3: aqui basta “bank”.' },
    { q: 'Click FX-20488. Is it a big payment? Say: “It’s …”', pt: 'Abra a FX-20488. É um pagamento grande?', st: ['It’s a big payment.', 'It’s a small payment.'], r: 'It’s 450,000 yen. It’s a small payment in dollars!', alvo: { t: 'abre', v: 'FX-20488' }, prof: 'Brincadeira: 450 mil ienes são uns 3 mil dólares. Aceite big ou small: o alvo é “It’s …”.' }] };

var DIALOGO = { rot: 'A VIDEO CALL · MONDAY MORNING', audio: 'dialogo',
  antes: { q: 'A new colleague calls you. What do you say first?', h: 'Hi! I’m … I’m a payments analyst.' },
  ouvir: 'Listen: where is Mark from? What is Ana’s job?',
  falas: [
    ['Mark', 'Hi! I’m Mark. I’m from the New York office.'],
    ['Ana', 'Hi, Mark! {I’m} Ana. {I’m} a payments analyst.'],
    ['Mark', 'Nice to meet you, Ana. What is your system?'],
    ['Ana', '{This is} Exchange. {It’s} the payment queue.'],
    ['Mark', 'Is it busy today?'],
    ['Ana', 'Yes, {it’s} very busy.'],
    ['Mark', 'Sorry, can you repeat that?'],
    ['Ana', 'Yes. {It’s} very busy. One moment, please. I’m checking.']],
  voz: { Mark: 'en-US-AndrewNeural', Ana: 'en-US-AvaNeural' },
  perguntas: [
    { q: 'Where is Mark from?', h: 'He’s from the New York office.' },
    { q: 'What is Ana’s job?', h: 'She’s a payments analyst.' },
    { q: 'What is Exchange?', h: 'It’s the payment queue.' },
    { q: 'Is it busy today?', h: 'Yes, it’s very busy.' }],
  fim: 'I’m … · This is … · It’s … · Sorry, can you repeat that? · One moment, please. I’m checking.' };

var CARTAO = { ph: 'I’m …\nI’m a … at …\nThis is my system: …', rot: 'My job',
  chips: ['I’m ', 'a payments analyst ', 'at ', 'I work with international payments.', 'This is my system: ', 'It’s ', 'busy', 'the payment queue'],
  perg: ['MY JOB', 'Three sentences: your name, your job, your system.'],
  exemploRot: 'PROFILE', exemplo: [['NAME', 'Ana Reis'], ['JOB', 'payments analyst'], ['TEAM', 'international payments'], ['SYSTEM', 'Exchange']],
  modelo: 'I’m Ana Reis.<br>I’m a payments analyst. I work with international payments.<br>This is my system: Exchange. It’s the payment queue.' };

var PODE = [
  'I can say my name and my job: I’m … I’m a payments analyst.',
  'I can show my system: This is Exchange. This is the queue.',
  'I can say eight screen words: payment, bank, client, system, queue, screen, analyst, international.',
  'I can say: “Sorry, can you repeat that?” and “One moment, please. I’m checking.”'];

var PT = {
  morning: 'Leia a tela de perfil em voz alta. Responda curto: “Her name is…”, “She’s a…”.',
  conversa: 'Escolha uma das duas respostas e fale. Depois pergunte ao professor: “And you?” (E você?).',
  termos: 'Toque numa palavra, ouça, veja onde ela aparece na tela e repita 3 vezes.',
  explica: 'Leia o cartão: inglês em cima, português embaixo. Depois monte a frase tocando nos blocos.',
  simulador: 'Este é um sistema de treino (fictício). Faça a missão na tela e depois fale a frase.',
  dialogo: 'Ouça a ligação uma vez sem parar. Depois responda às perguntas.',
  cartao: 'Escreva 3 frases sobre você: nome, trabalho, sistema. Use os blocos “Tap to add”.',
  pode: 'Leia cada frase em voz alta e toque nas que você já consegue fazer.' };
