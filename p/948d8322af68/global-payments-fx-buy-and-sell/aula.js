/* ============================================================
   GLOBAL PAYMENTS ENGLISH · BUSINESS · CURSOS · LESSON 9 · FX: BUY AND SELL · LIVE CLASS   03/11/2026
   Unidade 2. Só os dados: o motor é o kit/revisao/revisao.js + dialogo.js + gp.js.
   Alvo: cotações com POINT (5.4380), buy / sell do ponto de vista do banco, How much is…?, higher / lower.
   No simulador: a aba FX DESK (cotações + boleta). Cotações FICTÍCIAS.
   ============================================================ */
var REV = { tipo: 'aula', aula: 9, nivel: 'A1', unidade: 2, kick: 'GLOBAL PAYMENTS ENGLISH · LESSON 9', titulo: ['FX: Buy', 'and Sell'], tema: 'rates · point · buy · sell · how much', placa: 'LESSON 9',
  lugarConversa: 'THURSDAY · 10 AM', cor: '#b9a6e8', cor2: '#d8c08a',
  sub: 'The FX desk: read the rates, say who buys and who sells, and give the client a quote in English.',
  chips: ['Rates with point', 'We buy · we sell', 'The deal ticket'], botao: 'Start the lesson',
  nota: 'In English the decimal is a point: 5.4380 = five point four three eight zero.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'morning', est: 'o', min: 4, img: 'mesa', rot: 'I · Morning Check', t: 'Your first payment of the day.', p: 'Read the line out loud. One question at a time.', sig: ['status', 'numeros', 'vd'] },
  { k: 'conversa', est: 'o', min: 4, img: 'conversa', rot: 'II · Money Talk', t: 'A short chat about money and travel.', p: 'Choose an answer. Say it. Then ask: “And you?”' },
  { k: 'termos', est: 'l', min: 8, img: 'capa', rot: 'III · FX Words', t: 'Eight words from the FX desk.', p: 'Listen. Look. Say each word three times.', sig: ['fx', 'rate', 'buysell', 'spread'] },
  { k: 'explica', est: 'f', min: 9, img: 'mesa', rot: 'IV · Point, Buy, Sell', t: 'Read a rate. Give a quote.', p: 'Read the card with your teacher. Then build the sentence.', sig: ['rate', 'buysell'] },
  { k: 'simulador', est: 'f', min: 13, img: 'capa', rot: 'V · The Simulator', t: 'The FX desk is open.', p: 'Do each mission on the screen. Then say it out loud.', sig: ['rate', 'buysell', 'spread', 'fxc'] },
  { k: 'dialogo', est: 'l', min: 7, img: 'conversa', rot: 'VI · Can I Have a Quote?', t: 'A client asks for a rate.', p: 'One question before. Listen. Then the questions.', sig: ['rate', 'buysell'] },
  { k: 'cartao', est: 'w', min: 6, img: 'mesa', rot: 'VII · The Quote', t: 'Write a quote for a client.', p: 'The rate is … The total is …' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 9: what can you do now?', p: 'Read each line out loud. Tap what you can do.' }
];

var MORNING = { rot: 'OPERATIONS QUEUE · 08:00', ref: 'FX-20484',
  perguntas: [
    { q: 'What’s the status?', st: ['It’s …'], r: 'It’s approved.' },
    { q: 'What’s the amount?', st: ['The amount is …'], r: 'The amount is three thousand, two hundred pounds.' },
    { q: 'What’s the currency?', st: ['The currency is …'], r: 'The currency is pounds.' },
    { q: 'What time is the cut-off for pounds?', st: ['It’s at …'], r: 'It’s at one thirty p.m.' }],
  frase: 'FX-20484 is approved. The amount is 3,200 pounds. The cut-off for pounds is at one thirty p.m.' };

var CONVERSA = [
  { q: 'Do you travel abroad? A lot or a little?', f: 'A lot or a little?', voce: ['A lot.', 'A little.'], ex: 'A little. Once a year.' },
  { q: 'Dollars or euros: which is more expensive today?', f: 'Dollars or euros?', voce: ['Euros.', 'Dollars.'], ex: 'Euros. The euro is more expensive.' },
  { q: 'Do you check the dollar rate every day?', f: 'Yes or no?', voce: ['Yes, I do.', 'No, I don’t.'], ex: 'Yes, I do. It’s my job!' },
  { q: 'Cash or card when you travel?', f: 'Cash or card?', voce: ['Card.', 'Cash.'], ex: 'Card. It’s easy.' }];

var TERMOS = [
  { w: 'rate', pt: 'cotação, taxa', au: 'w-rate', tela: 'USD/BRL <b>5.4380</b>', pron: 'reit.' },
  { w: 'buy', pt: 'comprar', au: 'w-buy', tela: 'WE <b>BUY</b> 5.4120', pron: 'bai.' },
  { w: 'sell', pt: 'vender', au: 'w-sell', tela: 'WE <b>SELL</b> 5.4380', pron: 'sél.' },
  { w: 'point', pt: 'vírgula (decimal)', au: 'w-point', tela: '5<b>.</b>4380 = five <b>point</b> four …', pron: 'póint.' },
  { w: 'spread', pt: 'spread (diferença)', au: 'w-spread', tela: 'SPREAD <b>0.0260</b>', pron: 'sprééd.' },
  { w: 'quote', pt: 'cotação para o cliente', au: 'w-quote', tela: 'Can I have a <b>quote</b>?', pron: 'kuôut.' },
  { w: 'deal', pt: 'operação fechada', au: 'w-deal', tela: '<b>Book the deal</b> · FXD-3001', pron: 'diil.' },
  { w: 'higher · lower', pt: 'mais alto · mais baixo', au: 'w-higher-lower', tela: 'The sell rate is <b>higher</b>.', pron: 'RAI-er · LÔU-er.' }];

var EXPLICA = {
  cards: [
    { tile: '5.4380', curto: 'ler a cotação', le: 'lê-se “five point four three eight zero”', titulo: 'decimal com POINT, dígito por dígito', img: 'Antes do ponto: o número normal. Depois do ponto: um dígito de cada vez. 5.4380 = five point four three eight zero.',
      ex: [{ b: [['The rate', 'a cotação', 'a'], ['is', 'é', 'v'], ['five point four one two', '5,412', 'c']], en: 'The rate is five point four one two.', pt: 'A cotação é 5,412.', au: 'x1' }],
      aviso: 'Não diga “five comma”. E depois do ponto não diga “four hundred and twelve”: é four one two.' },
    { tile: 'BUY', curto: 'quem compra?', le: 'we buy · we sell', titulo: 'a tela fala do lado do BANCO', img: 'WE BUY = o banco compra (o cliente vende). WE SELL = o banco vende (o cliente compra). O cliente que compra dólar paga a cotação WE SELL, a mais alta.',
      ex: [{ b: [['The client', 'o cliente', 'a'], ['buys', 'compra', 'v'], ['dollars', 'dólares', 'c']], en: 'The client buys dollars.', pt: 'O cliente compra dólares.', au: 'x2' },
           { b: [['We', 'nós (o banco)', 'a'], ['sell', 'vendemos', 'v'], ['at 5.4380', 'a 5,4380', 'c']], en: 'We sell at five point four three eight zero.', pt: 'Vendemos a 5,4380.', au: 'x3' }],
      aviso: 'Pergunta-guia: “Who buys: the bank or the client?”' },
    { tile: 'How much', curto: 'quanto custa', le: 'lê-se “rau mâtch”', titulo: 'How much is…? (quanto é?)', img: 'How much = quanto (dinheiro). How many = quantos (coisas, aula 8).',
      ex: [{ b: [['How much', 'quanto', 'a'], ['is', 'é', 'v'], ['the dollar', 'o dólar', 'c'], ['today?', 'hoje?', 'a']], en: 'How much is the dollar today?', pt: 'Quanto está o dólar hoje?', au: 'x4' }],
      aviso: 'Dinheiro: how MUCH. Coisas contáveis: how MANY.' },
    { tile: 'higher', curto: 'mais alto / mais baixo', le: 'higher “rai-er” · lower “lôu-er”', titulo: 'comparar duas cotações', img: 'Adjetivo curto + er = mais. high → higher (mais alto), low → lower (mais baixo). E para “caro”: more expensive.',
      ex: [{ b: [['The sell rate', 'a cotação de venda', 'a'], ['is', 'é', 'v'], ['higher', 'mais alta', 'c']], en: 'The sell rate is higher.', pt: 'A cotação de venda é mais alta.', au: 'x5' }],
      aviso: 'Não diga “more high”. Diga higher.' }],
  monta: [
    { pt: 'A cotação é 5,4380.', blocos: ['five point four three eight zero.', 'The rate', 'is'], certo: 'The rate is five point four three eight zero.' },
    { pt: 'O cliente compra dólares.', blocos: ['buys', 'dollars.', 'The client'], certo: 'The client buys dollars.' },
    { pt: 'Quanto está o euro hoje?', blocos: ['is', 'How much', 'today?', 'the euro'], certo: 'How much is the euro today?' },
    { pt: 'A cotação de venda é mais alta.', blocos: ['higher.', 'The sell rate', 'is'], certo: 'The sell rate is higher.' }] };

var SIM = { mods: ['exchange', 'swift', 'unit', 'cutoff', 'fx'], ops: ['FX-20481', 'FX-20482', 'FX-20483', 'FX-20484', 'FX-20485', 'FX-20486', 'FX-20487', 'FX-20488'],
  fim: 'Rates, quotes and a deal, all in English.',
  missoes: [
    { q: 'Open the FX DESK. Tap USD/BRL. Read the two rates.', pt: 'Abra a aba FX DESK e toque em USD/BRL. Leia as duas cotações.', st: ['We buy at …', 'We sell at …'], r: 'We buy at five point four one two zero. We sell at five point four three eight zero.', alvo: { t: 'par', v: 'USD/BRL' }, prof: 'Passe o mouse em cada cotação para ver o extenso. Point + dígito por dígito.' },
    { q: 'The client buys 25,000 dollars. Choose CLIENT BUYS and 25,000. What’s the rate? What’s the total?', pt: 'O cliente compra 25 mil dólares. Qual é a cotação? E o total em reais?', st: ['The rate is …', 'The total is …'], r: 'The rate is five point four three eight zero. The total is one hundred and thirty-five thousand, nine hundred and fifty reais.', alvo: { t: 'qt', v: '25000' }, prof: 'Cliente compra → o banco vende → cotação WE SELL (5.4380). Total: 135,950.00 BRL.' },
    { q: 'Book the deal.', pt: 'Feche a operação (Book the deal).', st: ['The deal is booked.', 'The reference is FXD-3001.'], r: 'The deal is booked. The reference is F-X-D three-oh-oh-one.', alvo: { t: 'deal-buy', v: 'USD/BRL' } },
    { q: 'Tap EUR/BRL. What’s the spread? Is it higher or lower than the dollar spread?', pt: 'Toque em EUR/BRL. Qual é o spread? Maior ou menor que o do dólar?', st: ['The spread is …', 'It’s higher.'], r: 'The spread is zero point zero three six zero. It’s higher than the dollar spread.', alvo: { t: 'par', v: 'EUR/BRL' }, prof: 'Dólar 0.0260, euro 0.0360. Aceite “It’s higher.” sem o than.' },
    { q: 'The client sells 10,000 euros. Make the deal and say the total.', pt: 'O cliente vende 10 mil euros. Faça a operação e diga o total.', st: ['The client sells …', 'We buy at …', 'The total is …'], r: 'The client sells ten thousand euros. We buy at five point eight nine five zero. The total is fifty-eight thousand, nine hundred and fifty reais.', alvo: { t: 'deal-sell', v: 'EUR/BRL' } }] };

var DIALOGO = { rot: 'A CLIENT ASKS FOR A QUOTE', audio: 'dialogo',
  antes: { q: 'A client wants to buy dollars. Which rate do you give: we buy or we sell?', h: 'We sell: the bank sells the dollars.' },
  ouvir: 'Listen: how many dollars? What’s the rate? What’s the total?',
  falas: [
    ['Tom', 'Hi Ana, it’s Tom from Brava Foods. Can I have a {quote} for dollars?'],
    ['Ana', 'Sure. {How much} do you need?'],
    ['Tom', 'Twenty-five thousand dollars. We {buy} the dollars today.'],
    ['Ana', 'OK. We {sell} at five {point} four three eight zero.'],
    ['Tom', 'Sorry, can you repeat the rate?'],
    ['Ana', 'Five {point} four three eight zero. The total is one hundred and thirty-five thousand, nine hundred and fifty reais.'],
    ['Tom', 'Yesterday the rate was {lower}. But OK. Let’s do it.'],
    ['Ana', 'Great. Thank you. I’ll check and confirm.']],
  voz: { Tom: 'en-US-BrianNeural', Ana: 'en-US-AvaNeural' },
  perguntas: [
    { q: 'How many dollars does Tom need?', h: 'Twenty-five thousand dollars.' },
    { q: 'What’s the rate?', h: 'Five point four three eight zero.' },
    { q: 'What’s the total in reais?', h: '135,950 reais.' },
    { q: 'Was the rate higher or lower yesterday?', h: 'Lower.' }],
  fim: 'Can I have a quote? · How much …? · We sell at five point … · higher / lower' };

var CARTAO = { ph: 'Dear …,\nThe rate for … is …\nThe total is …\nBest regards,', rot: 'The quote',
  chips: ['Dear Tom,', 'Here is your quote.', 'We sell dollars at ', '5.4380', 'The amount is ', 'USD 25,000.00', 'The total is ', 'BRL 135,950.00', 'Best regards,'],
  perg: ['THE QUOTE', 'A short email with a quote: the rate, the amount and the total.'],
  exemploRot: 'DEAL TICKET', exemplo: [['CLIENT', 'buys USD'], ['AMOUNT', '25,000.00'], ['RATE', '5.4380'], ['TOTAL', 'BRL 135,950.00']],
  modelo: 'Dear Tom,<br>Here is your quote. We sell dollars at 5.4380.<br>The amount is USD 25,000.00. The total is BRL 135,950.00.<br>Best regards,<br>Ana' };

var PODE = [
  'I can read a rate with point: five point four three eight zero.',
  'I can say who buys and who sells: the client buys, we sell.',
  'I can ask and answer: How much is the dollar today?',
  'I can compare: the sell rate is higher, the buy rate is lower.'];

var PT = {
  morning: 'Leia a linha da fila. Última pergunta: o horário limite da libra.',
  conversa: 'Perguntas leves sobre dinheiro e viagem.',
  termos: 'Palavras da mesa de câmbio. Ouça e repita 3 vezes.',
  explica: 'Decimal em inglês é POINT, e depois do ponto é dígito por dígito. WE BUY / WE SELL é do lado do banco.',
  simulador: 'A aba FX DESK está liberada: cotações e a boleta (deal ticket). Passe o mouse nos números.',
  dialogo: 'Um cliente pede uma cotação de dólar por telefone.',
  cartao: 'Escreva um e-mail curto com a cotação: taxa, valor e total.',
  pode: 'Leia cada frase em voz alta e toque nas que você já consegue fazer.' };
