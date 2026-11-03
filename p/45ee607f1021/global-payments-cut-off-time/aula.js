/* ============================================================
   GLOBAL PAYMENTS ENGLISH · BUSINESS · CURSOS · LESSON 7 · CUT-OFF TIME · LIVE CLASS   03/11/2026
   Unidade 2. Só os dados: o motor é o kit/revisao/revisao.js + dialogo.js + gp.js.
   Alvo: as horas (a.m. / p.m., noon), What time is…?, at / before / after, today / tomorrow.
   No simulador: o quadro de cut-off na fila, relógio às 3:40 PM. Tudo FICTÍCIO.
   ============================================================ */
var REV = { tipo: 'aula', aula: 7, nivel: 'A1', unidade: 2, kick: 'GLOBAL PAYMENTS ENGLISH · LESSON 7', titulo: ['Cut-off', 'Time'], tema: 'times · at · before · after', placa: 'LESSON 7',
  lugarConversa: 'TUESDAY · 3 PM', cor: '#b9a6e8', cor2: '#d8c08a',
  sub: 'It’s 3:40 PM. Which payments can go today, and which go tomorrow? Read the clock and the cut-off times in English.',
  chips: ['Telling the time', 'Before · after', 'The cut-off board'], botao: 'Start the lesson',
  nota: 'In English, 16h is 4 p.m. The day has two halves: a.m. and p.m.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'morning', est: 'o', min: 4, img: 'mesa', rot: 'I · Afternoon Check', t: 'One payment, late in the day.', p: 'Read the line out loud. One question at a time.', sig: ['status', 'numeros', 'cutoff'] },
  { k: 'conversa', est: 'o', min: 4, img: 'conversa', rot: 'II · Your Day', t: 'A short chat about time.', p: 'Choose an answer. Say it. Then ask: “And you?”' },
  { k: 'termos', est: 'l', min: 8, img: 'capa', rot: 'III · Time Words', t: 'Eight words for the clock.', p: 'Listen. Look. Say each word three times.', sig: ['ampm', 'cutoff'] },
  { k: 'explica', est: 'f', min: 9, img: 'mesa', rot: 'IV · What Time Is It?', t: 'Read the clock. Say the cut-off.', p: 'Read the card with your teacher. Then build the sentence.', sig: ['ampm', 'cutoff'] },
  { k: 'simulador', est: 'f', min: 13, img: 'capa', rot: 'V · The Simulator', t: 'It’s 3:40 PM. Beat the clock.', p: 'Do each mission on the screen. Then say it out loud.', sig: ['cutoff', 'ampm', 'settle', 'vd'] },
  { k: 'dialogo', est: 'l', min: 7, img: 'conversa', rot: 'VI · Today or Tomorrow?', t: 'A client calls late in the day.', p: 'One question before. Listen. Then the questions.', sig: ['cutoff'] },
  { k: 'cartao', est: 'w', min: 6, img: 'mesa', rot: 'VII · The Cut-off Note', t: 'Write a note about two payments.', p: 'Today or tomorrow? Before or after the cut-off?' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 7: what can you do now?', p: 'Read each line out loud. Tap what you can do.' }
];

var MORNING = { rot: 'OPERATIONS QUEUE · 3:40 PM', ref: 'FX-20486',
  perguntas: [
    { q: 'What’s the status?', st: ['It’s …'], r: 'It’s approved.' },
    { q: 'What’s the currency?', st: ['The currency is …'], r: 'The currency is euros.' },
    { q: 'What’s the value date?', st: ['The value date is …'], r: 'The value date is May eleventh: today.' },
    { q: 'What time is it now?', st: ['It’s …'], r: 'It’s three forty p.m.' }],
  frase: 'FX-20486 is approved. It’s in euros. The value date is today, and it’s three forty p.m.' };

var CONVERSA = [
  { q: 'What time do you finish work?', f: 'At 5 or at 6?', voce: ['At 5 p.m.', 'At 6 p.m.'], ex: 'At 6 p.m. Sometimes later!' },
  { q: 'Is the afternoon busy or quiet?', f: 'Busy or quiet?', voce: ['It’s busy.', 'It’s quiet.'], ex: 'It’s busy before the cut-off.' },
  { q: 'Do you have lunch at 12 or at 1?', f: '12 or 1?', voce: ['At 12.', 'At 1.'], ex: 'At 1. At 12 the queue is busy.' },
  { q: 'Are you a morning person or a night person?', f: 'Morning or night?', voce: ['A morning person.', 'A night person.'], ex: 'A morning person. I start early.' }];

var TERMOS = [
  { w: 'cut-off time', pt: 'horário limite', au: 'w-cutoff', tela: 'CUT-OFF TIMES · TODAY', pron: 'CÂT-óf taim.' },
  { w: 'a.m.', pt: 'da manhã (antes do meio-dia)', au: 'w-am', tela: 'JPY <b>9:00 AM</b>', pron: 'ei-ém.' },
  { w: 'p.m.', pt: 'da tarde / da noite', au: 'w-pm', tela: 'USD <b>4:00 PM</b>', pron: 'pii-ém.' },
  { w: 'noon', pt: 'meio-dia', au: 'w-noon', tela: 'EUR <b>12:00 PM</b> (noon)', pron: 'nuun.' },
  { w: 'before', pt: 'antes', au: 'w-before', tela: 'Settle <b>before</b> the cut-off.', pron: 'bi-FÓR.' },
  { w: 'after', pt: 'depois', au: 'w-after', tela: '<b>After</b> the cut-off: tomorrow.', pron: 'ÉF-ter.' },
  { w: 'today', pt: 'hoje', au: 'w-today', tela: 'Value date: <b>today</b>', pron: 'tu-DEI.' },
  { w: 'tomorrow', pt: 'amanhã', au: 'w-tomorrow', tela: 'Moved to <b>tomorrow</b>', pron: 'tu-MÓ-rou.' }];

var EXPLICA = {
  cards: [
    { tile: '3:40', curto: 'ler a hora', le: 'lê-se “three forty”', titulo: 'a hora: os dois números', img: 'O jeito mais fácil: diga os dois números. 3:40 = three forty. 9:05 = nine oh five. 4:00 = four o’clock.',
      ex: [{ b: [['It’s', 'são', 'v'], ['three forty', '3h40', 'c'], ['p.m.', 'da tarde', 'a']], en: 'It’s three forty p.m.', pt: 'São 15h40.', au: 'x1' }],
      aviso: 'Para a hora, sempre It’s: It’s four o’clock. Nunca “Are four hours”.' },
    { tile: 'PM', curto: 'a.m. e p.m.', le: 'a.m. “ei-ém” · p.m. “pii-ém”', titulo: 'o relógio de 12 horas', img: 'Inglês usa 12 horas. a.m. = da meia-noite ao meio-dia. p.m. = do meio-dia à meia-noite. 16h = 4 p.m. 12h = noon.',
      ex: [{ b: [['The cut-off', 'o horário limite', 'a'], ['is', 'é', 'v'], ['at four p.m.', 'às 16h', 'c']], en: 'The cut-off is at four p.m.', pt: 'O horário limite é às 16h.', au: 'x2' }],
      aviso: 'Hora com AT: at 4 p.m., at noon. Dia com ON: on Monday.' },
    { tile: 'before', curto: 'antes / depois', le: 'before “bi-fór” · after “éf-ter”', titulo: 'antes ou depois do cut-off', img: 'Antes do cut-off: o pagamento sai hoje. Depois: só amanhã.',
      ex: [{ b: [['I', 'eu', 'a'], ['can settle it', 'consigo liquidar', 'v'], ['before 4 p.m.', 'antes das 16h', 'c']], en: 'I can settle it before four p.m.', pt: 'Consigo liquidar antes das 16h.', au: 'x3' },
           { b: [['It’s', 'está', 'v'], ['after the cut-off', 'depois do horário limite', 'c']], en: 'It’s after the cut-off.', pt: 'Passou do horário limite.', au: 'x4' }],
      aviso: 'Junte com can / can’t da aula 4: I can’t settle it today. It’s after the cut-off.' },
    { tile: 'What time', curto: 'perguntar a hora', le: 'lê-se “uót taim”', titulo: 'What time is…?', img: 'What time is it? (Que horas são?) · What time is the cut-off? (Qual é o horário limite?)',
      ex: [{ b: [['What time', 'que horas', 'a'], ['is', 'é', 'v'], ['the cut-off', 'o horário limite', 'c'], ['for euros?', 'do euro?', 'a']], en: 'What time is the cut-off for euros?', pt: 'Qual é o horário limite do euro?', au: 'x5' }],
      aviso: 'Para euros, 12:00 PM: diga “twelve noon” ou “at noon”.' }],
  monta: [
    { pt: 'São 15h40.', blocos: ['three forty p.m.', 'It’s'], certo: 'It’s three forty p.m.' },
    { pt: 'O horário limite é às 16h.', blocos: ['at four p.m.', 'is', 'The cut-off'], certo: 'The cut-off is at four p.m.' },
    { pt: 'Qual é o horário limite do euro?', blocos: ['for euros?', 'What time', 'the cut-off', 'is'], certo: 'What time is the cut-off for euros?' },
    { pt: 'Não consigo liquidar hoje. Passou do horário limite.', blocos: ['It’s after the cut-off.', 'I can’t settle it today.'], certo: 'I can’t settle it today. It’s after the cut-off.' }] };

var SIM = { mods: ['exchange', 'swift', 'unit', 'cutoff'], hora: '3:40 PM', ops: ['FX-20481', 'FX-20482', 'FX-20483', 'FX-20484', 'FX-20485', 'FX-20486', 'FX-20487', 'FX-20488'],
  fim: 'You beat the clock. Today, tomorrow, before, after: all in English.',
  missoes: [
    { q: 'Look at the clock in the top bar. What time is it?', pt: 'Olhe o relógio na barra do sistema. Que horas são?', st: ['It’s three forty p.m.'], r: 'It’s three forty p.m.', alvo: { t: 'prof' }, prof: 'Passe o mouse na hora para ver o extenso. Peça “It’s …”.' },
    { q: 'Tap USD on the cut-off board. What time is the cut-off for dollars?', pt: 'Toque em USD no quadro de cut-off.', st: ['The cut-off for dollars is at four p.m.'], r: 'The cut-off for dollars is at four p.m. It’s open.', alvo: { t: 'cut', v: 'USD' } },
    { q: 'Tap EUR. Is it open or closed? Why?', pt: 'Toque em EUR. Está aberto ou fechado?', st: ['It’s closed.', 'The cut-off is at noon.'], r: 'It’s closed. The cut-off for euros is at noon. It’s after the cut-off.', alvo: { t: 'cut', v: 'EUR' } },
    { q: 'UNIT: try to settle FX-20486 (euros). What happens?', pt: 'No Unit, tente liquidar a FX-20486 (em euros).', st: ['I can’t settle it today.', 'It’s after the cut-off.'], r: 'I can’t settle it today. It’s after the cut-off. I can settle it tomorrow.', alvo: { t: 'erro', v: 'FX-20486' } },
    { q: 'Quick! Settle FX-20481 (dollars) before four p.m.', pt: 'Rápido: liquide a FX-20481 (dólar) antes das 16h.', st: ['I can settle it before four p.m.', 'It’s released.'], r: 'I can settle it before four p.m. FX-20481 is released.', alvo: { t: 'settle', v: 'FX-20481' }, prof: 'Dólar fecha às 16h: ainda dá. É a frase-par da missão anterior: hoje × amanhã.' }] };

var DIALOGO = { rot: 'A CLIENT CALLS AT 3:45 PM', audio: 'dialogo',
  antes: { q: 'It’s 3:45 p.m. A client wants a payment in euros today. Is it possible?', h: 'No. The cut-off for euros is at noon.' },
  ouvir: 'Listen: which payment can go today? Which one goes tomorrow?',
  falas: [
    ['Tom', 'Hi Ana, it’s Tom from Brava Foods. Can you send the euro payment today?'],
    ['Ana', 'Sorry, Tom. The cut-off for euros is at {noon}. It’s {after} the cut-off.'],
    ['Tom', 'Oh no. {What time} is it now?'],
    ['Ana', 'It’s {three forty-five p.m.} I can send it {tomorrow} morning.'],
    ['Tom', 'OK. And the dollar payment?'],
    ['Ana', 'The cut-off for dollars is at {four p.m.} I can send it {today}, {before} four.'],
    ['Tom', 'Great. Thank you!']],
  voz: { Tom: 'en-US-BrianNeural', Ana: 'en-US-AvaNeural' },
  perguntas: [
    { q: 'What time is the cut-off for euros?', h: 'At noon.' },
    { q: 'What time is it?', h: 'It’s three forty-five p.m.' },
    { q: 'When can Ana send the euro payment?', h: 'Tomorrow morning.' },
    { q: 'And the dollar payment?', h: 'Today, before four p.m.' }],
  fim: 'What time is it? · at four p.m. · before / after the cut-off · today / tomorrow' };

var CARTAO = { ph: 'It’s …\nI can send … today, before …\nI can’t send … today. It’s after …', rot: 'The cut-off note',
  chips: ['It’s three forty p.m. ', 'I can send ', 'I can’t send ', 'the dollar payment ', 'the euro payment ', 'today', 'tomorrow', 'before four p.m.', 'It’s after the cut-off.'],
  perg: ['THE CUT-OFF NOTE', 'Two payments: one goes today, one goes tomorrow. Why?'],
  exemploRot: 'CUT-OFF TIMES', exemplo: [['NOW', '3:40 PM'], ['USD', '4:00 PM · OPEN'], ['EUR', '12:00 PM · CLOSED'], ['GBP', '1:30 PM · CLOSED']],
  modelo: 'It’s three forty p.m.<br>I can send the dollar payment today, before four p.m.<br>I can’t send the euro payment today. It’s after the cut-off. I can send it tomorrow.' };

var PODE = [
  'I can tell the time: It’s three forty p.m.',
  'I can ask: “What time is the cut-off for euros?”',
  'I can say: before / after the cut-off, today / tomorrow.',
  'I can explain why a payment goes tomorrow.'];

var PT = {
  morning: 'Agora é fim de tarde (15h40). Leia a linha e diga que horas são.',
  conversa: 'Perguntas sobre horários. Escolha e fale.',
  termos: 'Palavras do relógio: a.m., p.m., noon, before, after.',
  explica: 'Hora em inglês: os dois números (three forty) + a.m./p.m. Antes = before; depois = after.',
  simulador: 'Agora a fila mostra os horários limite de cada moeda. São 15h40: o que ainda sai hoje?',
  dialogo: 'Um cliente liga às 15h45 querendo pagar em euro hoje.',
  cartao: 'Escreva um recado: um pagamento sai hoje, outro só amanhã, e por quê.',
  pode: 'Leia cada frase em voz alta e toque nas que você já consegue fazer.' };
