/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 15 · DO WE HAVE A DEAL? · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Revisão das aulas 6–14 (3ª pessoa, can, números, in/on/at, going to, passado, comparativos, frases de telefone)
   + negociar simples: What about…? / We can offer… / Do we have a deal? / OK, it’s a deal.
   Situação: a última reunião antes de fechar. Cenas: conversa, diálogo, cadeira (o professor é a CFO),
   escolha (arena), erros (e-mail de fechamento), cartão. Produto: o e-mail de fechamento.
   Empresas FICTÍCIAS (Bluepeak Services, Lumen Logistics). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 15, kick: 'SELLING SERVICES · LESSON 15', titulo: ['Do We Have', 'a Deal?'], tema: 'review 6–14 · simple negotiation', placa: 'LESSON 15',
  lugarConversa: 'THE LAST MEETING', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'The proposal is on the table. The CFO likes it… but the price is a problem. Today you negotiate, you close, and you write the e-mail that every seller wants to write.',
  chips: ['The last meeting', 'Your negotiation', 'Your closing e-mail'], botao: 'Start the lesson',
  nota: 'Negotiate with three phrases: What about…? We can offer… Do we have a deal?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Week', t: 'How was your week? Did you close a deal?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'dialogo', est: 'l', min: 9, img: 'mesa', rot: 'II · The Last Meeting', t: 'The CFO likes the proposal. But the price…', p: 'One question before. Listen. Then the questions.' },
  { k: 'cadeira', est: 'o', min: 12, img: 'conversa', rot: 'III · Your Negotiation', t: 'Now you are the seller. Your teacher is the CFO.', p: 'Do each task. Offer, answer, close.' },
  { k: 'escolha', est: 'o', min: 7, img: 'mesa', rot: 'IV · The Arena', t: 'Three hard choices for a seller.', p: 'Choose A or B and say why. Your teacher answers first.' },
  { k: 'erros', est: 'f', min: 8, img: 'capa', rot: 'V · Fix the Closing E-mail', t: 'A closing e-mail with five mistakes.', p: 'Find a mistake. Say the right form. Then tap it.' },
  { k: 'cartao', est: 'w', min: 10, img: 'capa', rot: 'VI · Your Closing E-mail', t: 'Write your closing e-mail.', p: 'Thank you, the plan, one reason, the next step.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VII · I Can', t: 'Lesson 15: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How was your week? Did you close a deal?', f: 'A deal: yes or no?', voce: ['Yes, I did! I closed …', 'No, I didn’t. Not yet.'], ex: 'No, I didn’t. Not yet! But I sent two proposals.' },
  { q: 'Are you going to meet a client this week?', f: 'A client meeting?', voce: ['Yes, I am. On …', 'No, I’m not.'], ex: 'Yes, I am. On Thursday at 3 p.m.' },
  { q: 'Is negotiating easier than presenting for you?', f: 'Easier or more difficult?', voce: ['It’s easier because …', 'It’s more difficult because …'], ex: 'It’s more difficult because clients always want a discount.' }
];

var DIALOGO = { rot: 'THE LAST MEETING · LUMEN LOGISTICS (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'The CFO likes the proposal but says: “The price is a problem.” What do you say?', h: 'I understand. What about …? We can offer …' },
  ouvir: 'Listen: what does Leo offer? Do they have a deal?',
  falas: [
    ['Karen', 'Leo, we like the proposal. But the price is a problem.'],
    ['Leo', 'I understand. {What about} a two-year contract? It’s 10% cheaper.'],
    ['Karen', 'Two years is long. Can you give us a discount for one year?'],
    ['Leo', 'No, I can’t. But {we can offer} a free first month.'],
    ['Karen', 'A free first month… And when are you going to start?'],
    ['Leo', 'We’re going to start on March 1. The go-live is in May.'],
    ['Karen', 'Last year, a supplier was late. It was a big problem.'],
    ['Leo', 'I understand. We started twelve projects last year, all on time.'],
    ['Karen', 'OK. A free first month and a go-live in May.'],
    ['Leo', 'Exactly. {Do we have a deal}?'],
    ['Karen', 'Yes, Leo. {It’s a deal}.'],
    ['Leo', 'Great! I’m going to send you the contract today.']],
  voz: { Karen: 'en-US-JennyNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'What is Karen’s problem?', h: 'The price.' },
    { q: 'What is Leo’s first offer?', h: 'A two-year contract, 10% cheaper.' },
    { q: 'Can Leo give a discount for one year? What does he offer?', h: 'No, he can’t. He offers a free first month.' },
    { q: 'What happened with a supplier last year?', h: 'The supplier was late. It was a big problem.' },
    { q: 'Do they have a deal? What is the next step?', h: 'Yes, they do. Leo is going to send the contract today.' }],
  fim: 'What about…? · We can offer… · Do we have a deal? · It’s a deal. And the whole course in one meeting.' };

var CADEIRA = { itens: [
  { alvo: 'Say hello. Ask about the CFO’s week.', dica: 'Hi, … How was your week?', resp: 'It was busy. We closed the month on Tuesday.' },
  { alvo: 'Present the plan with going to.', dica: 'We’re going to start on … The go-live is going to be in …', resp: 'OK. How many people are going to work on our project?' },
  { alvo: 'Answer with a number. Then say the price.', dica: 'Six people. It’s … per month. It’s cheaper than a new team.', resp: 'Hmm. That’s expensive for us.' },
  { alvo: 'Negotiate: make an offer.', dica: 'What about …? We can offer …', resp: 'A free month? Interesting. And a discount?' },
  { alvo: 'Say no politely. Tell a past result.', dica: 'Sorry, we can’t. But last year we saved … for a client.', resp: 'Twenty percent? Can you send me that case?' },
  { alvo: 'The CFO speaks fast (teacher: speak fast!). Ask politely.', dica: 'Sorry, could you speak more slowly, please?', resp: '(slowly) Sure. Can you start on Monday, April 6?' },
  { alvo: 'Agree on the date and close.', dica: 'Yes, we can. On Monday, April 6, at 9 a.m. Do we have a deal?', resp: 'Yes. It’s a deal!' }] };

var ESCOLHA = [
  { a: 'A 10% discount', b: 'A free first month', chips: ['I prefer … because …', 'It’s cheaper / better for … than …'], ex: 'I prefer a free first month because it’s cheaper for us than 10% for a full year.' },
  { a: 'A one-year contract', b: 'A two-year contract', chips: ['I prefer … because …', 'The client is going to …'], ex: 'I prefer two years because the client is going to see better results.' },
  { a: 'Close the deal today', b: 'Wait for the CFO’s e-mail', chips: ['I prefer … because …', 'Next week … is going to … · Last time …'], ex: 'I prefer to close today because next week the CFO is going to be on vacation.' }];
var ESCOLHA_FIM = 'A good negotiator always gives a reason: “because it’s cheaper…”, “because they’re going to…”.';

var ERROS = { rot: 'E-MAIL · CLOSING DRAFT', tipo: 'nota', rotulo: 'MISTAKES', pede: 'Find the five mistakes. Say the right form, then tap.', fim: 'Five fixed. Now read the e-mail out loud: it’s your last e-mail of the course!', dica: 'The student says the right form BEFORE tapping. Ask: past or plan? short or long word? can + to?', partes: [
  'Hi Karen,\nThank you for the meeting today. We’re very happy with the deal!\n',
  ['We go to start on March 1.', 'We’re going to start on March 1.', 'plan → be + going to'], ' The go-live is in May.\n',
  ['Our service is more cheap than a new team,', 'Our service is cheaper than a new team,', 'cheap → cheaper'], ' and the first month is free.\n',
  ['Last year we save 20% for a client like you.', 'Last year we saved 20% for a client like you.', 'past → saved'], '\n',
  ['Can you to sign the contract by Friday?', 'Can you sign the contract by Friday?', 'can + verb (no “to”)'], '\n',
  ['The kick-off is in Monday, March 3, at 10 a.m.', 'The kick-off is on Monday, March 3, at 10 a.m.', 'days → on'], '\nBest,\nLeo'] };

var CARTAO = { ph: 'Hi …,\nThank you for …\nWe’re going to start on … The go-live is going to be in …\nAs we agreed, …\nCan you sign the contract by …?\nBest,\n…', rot: 'My closing e-mail',
  chips: ['Thank you for the meeting today.', 'We’re going to start on ', 'The go-live is going to be in ', 'As we agreed, ', 'the first month is free.', 'It’s cheaper than ', 'Last year our clients saved ', 'Can you sign the contract by ', 'It’s a deal!', 'Best,'],
  perg: ['YOUR CLOSING E-MAIL', 'To the CFO in your negotiation (Lumen Logistics or a real client): thank you, the plan, the offer, one reason, the next step.'],
  exemploRot: 'DEAL NOTES · LUMEN LOGISTICS', exemplo: [['CLIENT', 'Karen Wells, CFO'], ['OFFER', 'free first month'], ['START', 'March 1'], ['GO-LIVE', 'May'], ['NEXT STEP', 'contract signed by Friday']],
  modelo: 'Hi Karen,<br>Thank you for the meeting today. We’re very happy with the deal!<br>We’re going to start on March 1, and the go-live is going to be in May.<br>As we agreed, the first month is free. Our service is cheaper than a new team, and last year our clients saved 20%.<br>Can you sign the contract by Friday?<br>Best,<br>Leo' };

var PODE = [
  'I can negotiate in simple English: What about…? We can offer…',
  'I can use the course in one meeting: plans, the past, numbers, comparisons.',
  'I can close: Do we have a deal? It’s a deal.',
  'I can write a closing e-mail.'
];
