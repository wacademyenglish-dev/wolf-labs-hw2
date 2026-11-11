/* ============================================================
   GLOBAL PAYMENTS ENGLISH · BUSINESS · CURSOS · LESSON 6 · EVERY MORNING · LIVE CLASS   03/11/2026
   Unidade 2 (My Day). Só os dados: o motor é o kit/revisao/revisao.js + dialogo.js + gp.js.
   Alvo: presente simples (I / we) das tarefas do dia + every morning / usually + I don’t.
   O aluno NARRA a rotina enquanto faz no simulador. Tudo FICTÍCIO.
   ============================================================ */
var REV = { tipo: 'aula', aula: 6, nivel: 'A1', unidade: 2, kick: 'GLOBAL PAYMENTS ENGLISH · LESSON 6', titulo: ['Every', 'Morning'], tema: 'I check · we release · I don’t', placa: 'LESSON 6',
  lugarConversa: 'MONDAY · 8 AM', cor: '#b9a6e8', cor2: '#d8c08a',
  sub: 'Your routine in English: what you do every morning, step by step, on the screen and out loud.',
  chips: ['Your routine', 'I check · we release', 'The simulator, step by step'], botao: 'Start the lesson',
  nota: 'Every day, the same verbs: check, open, release, send. Today they are yours.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'morning', est: 'o', extra: 1, min: 4, img: 'mesa', rot: 'I · Morning Check', t: 'Your first payment of the day.', p: 'Read the line out loud. One question at a time.', sig: ['status', 'numeros', 'vd'] },
  { k: 'conversa', est: 'o', min: 4, img: 'conversa', rot: 'II · Your Mornings', t: 'A short chat about your mornings.', p: 'Choose an answer. Say it. Then ask: “And you?”' },
  { k: 'termos', est: 'l', min: 8, img: 'capa', rot: 'III · Routine Verbs', t: 'Eight verbs for every day.', p: 'Listen. Look. Say each verb three times.', sig: ['queue', 'settle'] },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'IV · The Ladder', t: 'One verb, five steps.', p: 'Read each step out loud, then go one step up. Notice what moves. Then climb with your own verb.' },
  { k: 'explica', est: 'f', min: 9, img: 'mesa', rot: 'V · I Check, We Release', t: 'The present simple: things you do every day.', p: 'Read the card with your teacher. Then build the sentence.' },
  { k: 'simulador', est: 'f', min: 13, img: 'capa', rot: 'VI · The Simulator', t: 'Your morning, step by step.', p: 'Do each step on the screen. Say what you do.', sig: ['queue', 'swift', 'settle', 'status'] },
  { k: 'dialogo', est: 'l', min: 7, img: 'conversa', rot: 'VII · What Do You Do?', t: 'Mark asks about your routine.', p: 'One question before. Listen. Then the questions.' },
  { k: 'cartao', est: 'w', min: 7, img: 'mesa', rot: 'VIII · My Morning', t: 'Write your real morning routine.', p: 'Three or four sentences. Then read them out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Lesson 6: what can you do now?', p: 'Read each line out loud. Tap what you can do.' }
];

var MORNING = { rot: 'OPERATIONS QUEUE · 08:00', ref: 'FX-20487',
  perguntas: [
    { q: 'What’s the status?', st: ['It’s …'], r: 'It’s pending.' },
    { q: 'What’s the amount?', st: ['The amount is …'], r: 'The amount is nine thousand, nine hundred and ninety-nine dollars.' },
    { q: 'What’s the value date?', st: ['The value date is …'], r: 'The value date is May fourteenth.' },
    { q: 'What do you do first?', st: ['I check …', 'I open …'], r: 'I check the queue. Then I open the payment.' }],
  frase: 'FX-20487 is pending. The amount is 9,999 dollars. I check it every morning.' };

var CONVERSA = [
  { q: 'What time do you start work?', f: 'Early or late?', voce: ['I start at 8.', 'I start at 9.'], ex: 'I start at 8. It’s early!' },
  { q: 'Do you drink coffee in the morning?', f: 'Yes or no?', voce: ['Yes, I do.', 'No, I don’t.'], ex: 'Yes, I do. Two cups.' },
  { q: 'Do you work at the office every day?', f: 'Every day or not?', voce: ['Yes, every day.', 'No. I work at home on …'], ex: 'No. I work at home on Fridays.' },
  { q: 'Is your morning quiet or busy?', f: 'Quiet or busy?', voce: ['It’s quiet.', 'It’s busy.'], ex: 'It’s busy. I check a lot of payments.' }];

var TERMOS = [
  { w: 'check', pt: 'verificar, conferir', au: 'w-check', tela: 'I <b>check</b> the queue.', pron: 'tchék.' },
  { w: 'open', pt: 'abrir', au: 'w-open', tela: '<b>Open</b> in SWIFT Monitor', pron: 'ÔU-pen.' },
  { w: 'release', pt: 'liberar', au: 'w-release', tela: '<span class="gp-st st-released">RELEASED</span> ← release', pron: 'ri-LIIS.' },
  { w: 'send', pt: 'enviar', au: 'w-send', tela: '<b>Send</b> to Unit', pron: 'sénd.' },
  { w: 'receive', pt: 'receber', au: 'w-receive', tela: 'Documents <b>received</b>', pron: 'ri-SIIV.' },
  { w: 'every day', pt: 'todo dia', au: 'w-every-day', tela: 'I check the queue <b>every day</b>.', pron: 'É-vri dei.' },
  { w: 'usually', pt: 'geralmente', au: 'w-usually', tela: 'I <b>usually</b> start at 8.', pron: 'IÚ-ju-a-li.' },
  { w: 'first · then', pt: 'primeiro · depois', au: 'w-first-then', tela: '<b>First</b> I check. <b>Then</b> I settle.', pron: 'fârst · dhén.' }];

var EXPLICA = {
  cards: [
    { tile: 'I check', curto: 'o que eu faço sempre', le: 'lê-se “ai tchék”', titulo: 'presente simples: a rotina', img: 'Para o que você faz sempre (todo dia, toda manhã): I + verbo, sem nada no meio. Igual ao português: eu confiro.',
      ex: [{ b: [['I', 'eu', 'a'], ['check', 'confiro', 'v'], ['the queue', 'a fila', 'c']], en: 'I check the queue.', pt: 'Eu confiro a fila.', au: 'x1' },
           { b: [['We', 'nós', 'a'], ['release', 'liberamos', 'v'], ['payments', 'pagamentos', 'c']], en: 'We release payments.', pt: 'Nós liberamos pagamentos.', au: 'x2' }],
      aviso: 'Não diga “I am check”. Na rotina não tem am: I check.' },
    { tile: 'every', curto: 'quando', le: 'every morning · every day', titulo: 'quando: no fim ou no começo', img: 'Every morning, every day, on Mondays: no fim da frase (ou no começo). Usually (geralmente) fica antes do verbo.',
      ex: [{ b: [['I', 'eu', 'a'], ['check', 'confiro', 'v'], ['the queue', 'a fila', 'c'], ['every morning', 'toda manhã', 'a']], en: 'I check the queue every morning.', pt: 'Confiro a fila toda manhã.', au: 'x3' },
           { b: [['I', 'eu', 'a'], ['usually', 'geralmente', 'a'], ['start', 'começo', 'v'], ['at 8', 'às 8', 'c']], en: 'I usually start at 8.', pt: 'Geralmente começo às 8.', au: 'x4' }],
      aviso: 'Every day (todo dia) tem espaço. Everyday junto é outra coisa (comum).' },
    { tile: 'first', curto: 'a ordem', le: 'first · then · after that', titulo: 'contar os passos em ordem', img: 'First (primeiro), then (depois), after that (depois disso). Com eles o aluno narra a rotina inteira.',
      ex: [{ b: [['First', 'primeiro', 'a'], ['I', 'eu', 'a'], ['check', 'confiro', 'v'], ['the queue.', 'a fila.', 'c']], en: 'First I check the queue.', pt: 'Primeiro confiro a fila.', au: 'x5' }],
      aviso: 'Then se fala com a língua nos dentes: “dhén”.' },
    { tile: 'don’t', curto: 'o que eu não faço', le: 'lê-se “dount” · do not', titulo: 'negativo: I don’t', img: 'Para dizer o que você não faz: I don’t + verbo. (Com is é diferente: It isn’t. Aqui é ação.)',
      ex: [{ b: [['I', 'eu', 'a'], ['don’t', 'não', 'v'], ['work', 'trabalho', 'c'], ['on Saturday', 'no sábado', 'a']], en: 'I don’t work on Saturday.', pt: 'Não trabalho no sábado.', au: 'x6' }],
      aviso: 'Não diga “I no work”. Diga I don’t work.' }],
  monta: [
    { pt: 'Eu confiro a fila toda manhã.', blocos: ['every morning.', 'check', 'the queue', 'I'], certo: 'I check the queue every morning.' },
    { pt: 'Nós liberamos pagamentos.', blocos: ['payments.', 'We', 'release'], certo: 'We release payments.' },
    { pt: 'Primeiro abro o Exchange.', blocos: ['open', 'First', 'Exchange.', 'I'], certo: 'First I open Exchange.' },
    { pt: 'Não trabalho no sábado.', blocos: ['work', 'I', 'on Saturday.', 'don’t'], certo: 'I don’t work on Saturday.' }] };

var SIM = { mods: ['exchange', 'swift', 'unit'], ops: ['FX-20481', 'FX-20482', 'FX-20483', 'FX-20484', 'FX-20485', 'FX-20486', 'FX-20487', 'FX-20488'],
  fim: 'Your whole morning, in English. Say it again from the start!',
  missoes: [
    { q: 'Step 1. Filter PENDING. Say what you do.', pt: 'Passo 1: filtre PENDING e diga o que você faz.', st: ['First I check the queue.', 'I check the pending payments.'], r: 'First I check the queue. I check the pending payments.', alvo: { t: 'filtro', v: 'PENDING' }, prof: 'O alvo é narrar EM PRESENTE: I check, I open. Não “I am checking”.' },
    { q: 'Step 2. Open FX-20481 in the SWIFT Monitor.', pt: 'Passo 2: abra a FX-20481 no SWIFT Monitor.', st: ['Then I open the message.', 'I check the beneficiary.'], r: 'Then I open the message. I check the beneficiary and the BIC.', alvo: { t: 'swift', v: 'FX-20481' } },
    { q: 'Step 3. Go to UNIT. Settle FX-20483.', pt: 'Passo 3: no Unit, liquide a FX-20483.', st: ['After that I settle the approved payments.', 'I release it.'], r: 'After that I settle the approved payments. I release FX-20483.', alvo: { t: 'settle', v: 'FX-20483' } },
    { q: 'Step 4. Filter ON HOLD. What do you do with this one?', pt: 'Passo 4: filtre ON HOLD. O que você faz com ele?', st: ['I send an email to the client.', 'I don’t settle it.'], r: 'I don’t settle it. I send an email to the client.', alvo: { t: 'filtro', v: 'ON HOLD' }, prof: 'Aceite qualquer verbo da rotina real dele (call, write, ask). O importante é o presente simples.' },
    { q: 'Now tell your teacher your whole morning, from step 1.', pt: 'Agora conte a manhã inteira, do passo 1 ao 4.', st: ['First I …', 'Then I …', 'After that I …'], r: 'First I check the queue. Then I open the messages. After that I settle the approved payments. I don’t settle the payments on hold: I send an email.', alvo: { t: 'prof' }, prof: 'Deixe falar sem interromper. Marque os verbos certos no papel. Depois, uma correção só.' }] };

var DIALOGO = { rot: 'MARK FROM NEW YORK ASKS', audio: 'dialogo',
  antes: { q: 'A colleague asks: “What do you do every morning?” What is the first verb?', h: 'I check the queue.' },
  ouvir: 'Listen: what time does Ana start? What does she do first?',
  falas: [
    ['Mark', 'Ana, what do you do every morning?'],
    ['Ana', 'I {start} at eight. First I {check} the queue.'],
    ['Mark', 'And then?'],
    ['Ana', 'Then I {open} the messages in the SWIFT Monitor.'],
    ['Mark', 'Do you settle the payments in the morning?'],
    ['Ana', 'Yes. I {settle} the approved payments before eleven.'],
    ['Mark', 'And the payments on hold?'],
    ['Ana', 'I {don’t} settle them. I {send} an email to the client.']],
  voz: { Mark: 'en-US-AndrewNeural', Ana: 'en-US-AvaNeural' },
  perguntas: [
    { q: 'What time does Ana start?', h: 'At eight.' },
    { q: 'What does she do first?', h: 'She checks the queue.' },
    { q: 'When does she settle the approved payments?', h: 'Before eleven.' },
    { q: 'What does she do with the payments on hold?', h: 'She sends an email to the client.' }],
  fim: 'I check · I open · I settle · I send · I don’t …' };

var CARTAO = { ph: 'I start at …\nFirst I …\nThen I …\nI don’t …', rot: 'My morning',
  chips: ['I start at ', 'First I ', 'Then I ', 'After that I ', 'check the queue.', 'open the messages.', 'settle the approved payments.', 'send emails.', 'I don’t ', 'every morning'],
  perg: ['MY MORNING', 'Your real routine: three or four sentences, in order.'],
  exemploRot: 'ANA’S MORNING', exemplo: [['8:00', 'start · check the queue'], ['9:00', 'open the messages'], ['10:30', 'settle the approved payments'], ['11:00', 'emails for payments on hold']],
  modelo: 'I start at eight.<br>First I check the queue. Then I open the messages in the SWIFT Monitor.<br>After that I settle the approved payments.<br>I don’t settle the payments on hold: I send an email to the client.' };

var PODE = [
  'I can say my routine: I check, I open, I settle, I send.',
  'I can put the steps in order: first, then, after that.',
  'I can say what I don’t do: I don’t work on Saturday.',
  'I can say when: every morning, every day, usually.'];

var PT = {
  morning: 'Leia a linha da fila. Última pergunta: o que você faz primeiro?',
  conversa: 'Perguntas sobre a sua manhã. Escolha a resposta e fale.',
  termos: 'Os verbos da rotina. Ouça e repita 3 vezes cada.',
  explica: 'Rotina = presente simples: I check, we release. Para negar: I don’t.',
  simulador: 'Faça cada passo da sua manhã na tela e diga em inglês o que você faz.',
  dialogo: 'O Mark pergunta da rotina da Ana. Ouça sem parar.',
  cartao: 'Escreva a sua manhã de verdade, em ordem: first, then, after that.',
  pode: 'Leia cada frase em voz alta e toque nas que você já consegue fazer.' };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de explica.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One verb. Climb it one step at a time.',
  degraus: [
    { r: 'I', f: '<b>I check</b> the queue.', d: 'Every day. I + the verb, nothing in the middle.' },
    { r: 'when', f: 'I check the queue <b>every morning</b>.', d: 'The time goes at the end.' },
    { r: 'usually', f: 'I <b>usually</b> check the queue at 8.', d: 'Usually goes before the verb.' },
    { r: 'not', f: 'I <b>don’t</b> check the queue on Sundays.', d: 'For no: don’t + the clean verb.' },
    { r: 'order', f: '<b>First</b> I check it. <b>Then</b> I release it.', d: 'First and then tell the order of the steps.' }
  ],
  nota: 'Your routine is simple: <b>I</b> or <b>we</b> + the clean verb. Add <b>every morning</b> at the end, <b>usually</b> before the verb, and <b>don’t</b> for no.',
  uso: { p: 'Your turn. Climb the ladder with a verb from your own morning: I …, every morning, usually, don’t, first and then.', molde: ['I … every morning.', 'I usually …', 'First I …, then I …'], ex: 'I open the queue every morning. I usually start at 8. First I check the payments, then I release them.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
