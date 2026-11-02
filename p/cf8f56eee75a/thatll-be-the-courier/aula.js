/* ============================================================
   THAT’LL BE THE COURIER · C1 · UNIT 2 (MODALS WITH NUANCE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: will / would para DEDUÇÃO (não futuro): That’ll be the courier (a campainha tocou);
   She’ll be at work now; He’ll have left by now; That would be about 1995; He’d be about sixty now;
   won’t have arrived yet.
   Armadilha do português: "deve ser o entregador" vira must be (ok, mas o nativo diz that’ll be);
   "ele já deve ter saído" → he must left / he will left.
   O mundo: uma tarde de trabalho em casa: campainha, telefone, mensagens; depois, três ligações.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 2, titulo: ['That’ll Be', 'the Courier'], tema: 'Will and would for confident guesses.',
  sub: 'The doorbell rings. A native doesn’t say “It must be the courier”. They say: “That’ll be the courier.” Learn the confident guess with will, will have and would.',
  placa: 'DING DONG · 3:15 PM', lugarConversa: 'THE PARCEL', cor: '#b8c98a', cor2: '#dbe5c4',
  chips: ['that’ll be the courier', 'she’ll be at work', 'he’ll have left'], botao: 'Start the lesson', nota: 'Not the future: a confident guess about now, or about the past.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'capa', rot: 'I · A Normal Afternoon', t: 'Bell, phone, messages: who is it?', p: 'Read the afternoon out loud. Answer the questions. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · Future or Guess?', t: 'Is will about tomorrow, or about right now?', p: 'Compare A and B. What is will or would doing?' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'III · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'IV · Three Phone Calls', t: 'You need to find three people. Today.', p: 'Call each assistant and ask five questions. Your teacher is the assistant. Then tell your boss.' },
  { k: 'conversa', est: 'o', min: 7, img: 'conversa', rot: 'V · Your Guesses', t: 'Guess about the people in your life, right now.', p: 'Answer with a confident guess. Then ask the question back.' }
];
var PORTAS = [];

var LEITURA = { rot: 'WORKING FROM HOME · TUESDAY', tipo: 'chat',
  antes: { q: 'When the doorbell rings and you’re not expecting anyone, what do you think first?', h: 'It’s probably a delivery. Or a neighbor. Or my mother, without calling first!' },
  texto: 'MAX: (the doorbell rings) {That’ll be} the courier. I ordered a lamp yesterday.\nNINA: At three? No, {that’ll be} Mrs. Silva. She always comes for the post.\nMAX: (the phone rings) Unknown number. {That’ll be} the bank again.\nNINA: Where’s Leo? He said he’d call at two.\nMAX: He {’ll be} in a meeting. He’s always in meetings on Tuesdays.\nNINA: And Ana? I sent her a message an hour ago.\nMAX: Her plane {will have landed} by now. She {won’t have checked} her phone yet.\nNINA: Look at this photo of Grandpa as a young man.\nMAX: That {would be} about 1965. He {’d be} about twenty there.',
  perguntas: [
    { q: 'Who does Max think is at the door? And Nina?', h: 'Max thinks it’s the courier with his lamp. Nina thinks it’s Mrs. Silva, the neighbor.' },
    { q: 'Why hasn’t Leo called?', h: 'Max guesses he is in a meeting: he always is on Tuesdays.' },
    { q: 'What does Max think about Ana?', h: 'Her plane has probably landed, but she probably hasn’t looked at her phone yet.' },
    { q: 'When was the photo taken, according to Max?', h: 'Around 1965, when Grandpa was about twenty.' }],
  olha: 'Find will and would. Is ANY of them about the future? What are they doing?' };

var DESCOBRE = {
  pares: [
    { a: '(The doorbell rings.) {That’ll be} the courier.', b: 'The courier {will come} tomorrow.', q: 'One will is about the future. What is the other one about?', r: 'A: a confident guess about NOW (= that is probably the courier). B: the future.' },
    { a: 'He {’ll be} in a meeting now.', b: 'He {must be} in a meeting now.', q: 'Both are guesses. Any difference?', r: 'Very similar. will is a little more relaxed and confident, based on what you know (he always is on Tuesdays). Both are correct.' },
    { a: 'Her plane {will have landed} by now.', b: 'Her plane {will land} at six.', q: 'Which one is a guess about the past?', r: 'A. will have + participle = I’m confident it already happened. B is the future.' },
    { a: 'That photo {would be} about 1965.', b: 'That photo {is} from 1965.', q: 'What does would add?', r: 'Would = a guess about the past (approximately). is = a fact. would be about = probably around.' }],
  regra: [['THAT’LL BE…', 'a confident guess about now: That’ll be the courier.'], ['HE’LL BE…', 'He’ll be at work now. They’ll be asleep.'], ['WILL HAVE + PARTICIPLE', 'a guess about the past: She’ll have landed by now.'], ['WOULD BE / ’D BE', 'a guess about a past time: That would be 1965. He’d be twenty there.']],
  armas: [
    ['PAST', 'He will left already.', 'He <b>will have left</b> already.', 'A guess about the past: will have + participle.'],
    ['PAST', 'She must arrived by now.', 'She <b>must have arrived</b> / <b>will have arrived</b> by now.', 'Past guess: + have + participle.'],
    ['NOW', 'The bell! It will be the courier tomorrow.', 'The bell! <b>That’ll be</b> the courier.', 'About right now: that’ll be.'],
    ['AGE', 'In this photo he would have twenty.', 'In this photo he <b>would be</b> about twenty.', 'Age in English: be, never have.']] };

var MISSAO = { pede: 'ON THE PHONE · ASK FIVE QUESTIONS', quem: 'assistant', depois: 'Tell your boss',
  campos: [
    { c: 'onde', r: 'WHERE NOW', q: 'Where would she / he be right now?', f: 'Where now?' },
    { c: 'saiu', r: 'ALREADY LEFT?', q: 'Will she / he have left the office?', f: 'Left already?' },
    { c: 'volta', r: 'BACK', q: 'When will she / he be back?', f: 'Back when?' },
    { c: 'email', r: 'MY EMAIL', q: 'Will she / he have read my email?', f: 'My email: read?' },
    { c: 'recado', r: 'MESSAGE', q: 'Could I leave a message?', f: 'A message?' }],
  itens: [
    { k: 'CALL 1', tag: 'MS. OKAFOR’S ASSISTANT', nome: 'Ms. Okafor', ele: 'She', v: { onde: 'she’ll be at lunch with a client', saiu: 'no, she won’t have left: her bag is here', volta: 'she’ll be back by three', email: 'she’ll have read it: she reads everything at lunch', recado: 'yes, the assistant will put it on her desk' }, diz: '“She’ll be at lunch with a client.” · “No, she won’t have left. Her bag is still here.” · “She’ll be back by three.” · “Oh, she’ll have read it. She reads everything at lunch.” · “Of course. I’ll put it on her desk.”' },
    { k: 'CALL 2', tag: 'MR. BRANDT’S ASSISTANT', nome: 'Mr. Brandt', ele: 'He', v: { onde: 'he’ll be on the train to Rio', saiu: 'yes, he’ll have left an hour ago', volta: 'he won’t be back until Monday', email: 'he won’t have read it: no signal on that train', recado: 'yes, but he’ll only see it on Monday' }, diz: '“He’ll be on the train to Rio.” · “Yes, he’ll have left about an hour ago.” · “He won’t be back until Monday.” · “He won’t have read it. There’s no signal on that train.” · “Sure, but he’ll only see it on Monday.”' },
    { k: 'CALL 3', tag: 'DR. LIMA’S ASSISTANT', nome: 'Dr. Lima', ele: 'She', v: { onde: 'she’ll be in surgery', saiu: 'no, she won’t have finished yet', volta: 'she’d be free around six', email: 'she’ll have seen the subject, but not opened it', recado: 'yes, marked urgent' }, diz: '“She’ll be in surgery right now.” · “No, she won’t have finished yet. It’s a long one.” · “She’d be free around six, I think.” · “She’ll have seen the subject, but she won’t have opened it.” · “Yes. I’ll mark it urgent.”' }],
  relato: { titulo: 'YOUR BOSS · WHERE IS EVERYBODY?',
    pede: function (x) { return 'So? Where is ' + x.nome + '?'; },
    chips: function (x) { return [x.ele + '’ll be …', x.ele + '’ll have …', x.ele + ' won’t have …', x.ele + '’d be …', 'by now', 'yet']; },
    modelo: function (x) { var v = x.v; return v.onde.charAt(0).toUpperCase() + v.onde.slice(1) + '. ' + v.volta.charAt(0).toUpperCase() + v.volta.slice(1) + ', and ' + v.email + '.'; } },
  nao: { left: '“He will left” → he WILL HAVE LEFT.', must: '“She must arrived” → she MUST HAVE arrived.', age: '“He would have twenty” → he WOULD BE twenty.' },
  fim: 'Three people found without leaving your chair. that’ll be, she’ll be, he’ll have left and she’d be: confident guesses, all afternoon.' };

var CONVERSA = [
  { q: 'Think of someone in your family. What will they be doing right now?', f: 'Your family, right now?', voce: ['My … will be …ing', 'They’ll be at …'], ex: 'My mother will be watching her soap opera. It’s eight o’clock!' },
  { q: 'Your best friend didn’t answer your message this morning. Why, do you think?', f: 'No answer: why?', voce: ['She’ll have …', 'He won’t have …'], ex: 'She’ll have left her phone at home. She does it every week.' },
  { q: 'Look at an old photo of yourself in your mind. When would that be?', f: 'An old photo of you?', voce: ['That would be …', 'I’d be about …'], ex: 'That would be 2005. I’d be about twelve, with terrible hair.' },
  { q: 'Your phone rings at 7 AM on a Sunday. Who will that be?', f: '7 AM on Sunday?', voce: ['That’ll be …', 'It won’t be …'], ex: 'That’ll be my father. Nobody else calls that early.' }
];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · That’ll Be the Courier: leitura · descobre · memoria · missao · conversa */
var PARES = [
  ['(The bell rings.) That’ll be', 'the courier.', 'Ding dong! That’ll be the courier with my lamp.'],
  ['It’s ten. She’ll be', 'at work now.', 'Don’t call her now. She’ll be at work.'],
  ['His plane will', 'have landed by now.', 'It’s eight. His plane will have landed by now.'],
  ['He won’t have', 'read it yet.', 'I sent it at five. He won’t have read it yet.'],
  ['That photo would be', 'about 1965.', 'Look at the car! That photo would be about 1965.'],
  ['In that photo he’d be', 'about twenty.', 'In that photo he’d be about twenty.']];
