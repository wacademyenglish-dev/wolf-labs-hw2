/* ============================================================
   FORMAL OR FRIENDLY? · C1 · UNIT 9 (REGISTER AND STYLE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: trocar de registro sem mudar a mensagem: abertura e fecho (Dear Ms. Reed / Hi Jo; Kind regards /
   Cheers), contrações, perguntas indiretas (Would it be possible to…? / Can you…?), verbos latinos ×
   phrasal verbs (postpone / put off), frases prontas (I’m writing to let you know / Just a heads-up;
   I apologise for any inconvenience / Sorry about that!).
   Armadilha: misturar registros no mesmo e-mail (Dear Sir… cheers!); formal demais com amigo;
   "I’m writing to you to inform that" (inform + person).
   O mundo: a mesma notícia (o voo atrasou, a reunião muda) escrita para a diretora e para a amiga.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 9, titulo: ['Formal', 'or Friendly?'], tema: 'Same message, two voices.',
  sub: 'Your flight is delayed and you’ll miss two things: a meeting with the director and dinner with your best friend. Same news, two very different messages. Learn to switch register like a native.',
  placa: 'TWO MESSAGES · ONE PROBLEM', lugarConversa: 'THE RESTAURANT', cor: '#b8a2d0', cor2: '#dcd0e8',
  chips: ['I’m writing to let you know', 'Just a heads-up', 'Would it be possible…?'], botao: 'Start the lesson', nota: 'Register is a choice: the words change, the message stays.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · Two Messages', t: 'The same delay. Two people.', p: 'Read both messages out loud. Answer the questions. Then look closer.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'II · The Register Ladder', t: 'One message, five steps up.', p: 'Read each step out loud, then go one step up. Notice what gets more formal. Then climb with your own message.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · Which Voice?', t: 'Formal or friendly: what changes?', p: 'Compare A and B. Who is each one for? What exactly changed?' },
  { k: 'transforma', est: 'f', min: 8, img: 'capa', rot: 'IV · Switch the Register', t: 'Friendly → formal.', p: 'Read the friendly sentence. Use the clue. Say the formal version.' },
  { k: 'cartao', est: 'w', min: 10, img: 'conversa', rot: 'V · Your Two Messages', t: 'One problem. Write it twice.', p: 'You’re sick and can’t go to work, or to a party. Write to your boss, then to a friend.' }
];
var PORTAS = [];

var LEITURA = { rot: 'OUTBOX · TWO MESSAGES · 7:42 AM', tipo: 'chat',
  antes: { q: 'Do you write to your boss and to your friends in the same way? What changes?', h: 'No! With my boss I’m more careful: no jokes, no emojis, complete sentences.' },
  texto: 'TO MS. REED: {Dear Ms. Reed}, {I am writing to let you know} that my flight from Lisbon has been {delayed} by four hours. {Unfortunately}, I will {be unable to attend} this morning’s meeting. {Would it be possible to} {postpone} it until Thursday? {I apologise for any inconvenience}. {Kind regards}, Paula Sousa\nTO JO: {Hi Jo}! {Just a heads-up}: my flight’s {stuck} in Lisbon, four hours late. {I’m not gonna make it} to dinner tonight. {Can we} {put it off} till Friday? {So sorry!!} {Talk soon}, P x',
  perguntas: [
    { q: 'What is the problem, in both messages?', h: 'Paula’s flight is four hours late, so she’ll miss a meeting and a dinner.' },
    { q: 'What does Paula ask Ms. Reed, and what does she ask Jo?', h: 'To move the meeting to Thursday; to move dinner to Friday.' },
    { q: 'Find three differences you can see at once.', h: 'Dear / Hi; no contractions / contractions; Kind regards / Talk soon, P x.' },
    { q: 'Would it be a problem to send the message to Jo to Ms. Reed? Why?', h: 'Yes: gonna, stuck, So sorry!! and x are too informal for a director.' }],
  olha: 'Find the pairs: delayed / stuck, postpone / put off… Make a list of formal ↔ friendly.' };

var DESCOBRE = {
  pares: [
    { a: 'Would it be possible to {postpone} it?', b: 'Can we {put it off}?', q: 'Same request. What are the two big differences?', r: 'A: an indirect question (Would it be possible to…) + a Latin-origin verb (postpone). B: a direct question + a phrasal verb (put off). Formal English prefers single, longer verbs.' },
    { a: '{I am writing to let you know} that…', b: '{Just a heads-up}: …', q: 'Both introduce news. Where would you use each one?', r: 'A: emails to clients, bosses, institutions. B: friends, close colleagues, chats.' },
    { a: '{I apologise for any inconvenience}.', b: '{So sorry!!}', q: 'Which one shows more emotion? Which one is more appropriate for a director?', r: 'B is warmer and emotional; A is calm and professional. In formal writing: no exclamation marks, no double !!' },
    { a: 'Dear Ms. Reed, … {Cheers}!', b: 'Dear Ms. Reed, … {Kind regards}.', q: 'What’s the problem with A?', r: 'Mixed register: a formal opening with a friendly closing. Keep the whole message in one voice.' }],
  regra: [['OPEN AND CLOSE', 'Dear Ms. Reed / Kind regards · Hi Jo / Talk soon, Cheers'], ['VERBS', 'postpone / put off · attend / go to · contact / get in touch · receive / get'], ['REQUESTS', 'Would it be possible to…? / I would be grateful if… · Can we…? / Could you…?'], ['TONE', 'formal: no contractions, no !!, no emojis · friendly: contractions, short, warm']],
  armas: [
    ['MIXED', 'Dear Mr. Lima, … Cheers, Paula', 'Dear Mr. Lima, … <b>Kind regards</b>, Paula', 'One register from start to end.'],
    ['INFORM', 'I am writing you to inform that the flight is late.', 'I am writing <b>to inform you</b> that the flight is late.', 'inform + person + that.'],
    ['TOO FORMAL', 'Dear Jo, I regret to inform you I cannot attend dinner.', '<b>Hi Jo!</b> I can’t make it to dinner, sorry!', 'Too formal with a friend sounds cold, or angry.'],
    ['GONNA', 'I am not gonna attend the meeting.', 'I <b>will be unable to attend</b> the meeting.', 'gonna is only for friendly messages.']] };

var TRANSFORMA = { rot: 'FRIENDLY → FORMAL', fim: 'Six sentences ready for any director.',
  itens: [
    { de: 'Hi! Just a heads-up: the report’s late.', pista: 'I am writing to …', para: 'I am writing to let you know that the report will be late.' },
    { de: 'Can we put off the meeting?', pista: 'Would it be possible to …', para: 'Would it be possible to postpone the meeting?' },
    { de: 'Sorry about the mess!', pista: 'I apologise …', para: 'I apologise for any inconvenience.' },
    { de: 'I can’t come tomorrow.', pista: 'be unable to attend', para: 'I will be unable to attend tomorrow.' },
    { de: 'Get back to me when you can.', pista: 'I look forward to …', para: 'I look forward to hearing from you.' },
    { de: 'Thanks a lot for your help!', pista: 'I am very grateful …', para: 'I am very grateful for your help.' }] };

var CARTAO = { ph: 'Dear Mr. Lima,\nI am writing to let you know that I am unwell and will be unable to attend work today.\nWould it be possible to move our call to Monday?\nKind regards, Ana\n\nHi Bia! Just a heads-up: I’m sick, so I can’t make it tonight. So sorry! Can we do Saturday? x', rot: 'My two messages',
  chips: ['Dear …,', 'I am writing to let you know that ', 'Unfortunately, I will be unable to ', 'Would it be possible to ', 'I apologise for any inconvenience.', 'Kind regards,', 'Hi …!', 'Just a heads-up: ', 'I can’t make it ', 'Can we …?', 'Talk soon!'],
  perg: ['YOUR TWO MESSAGES', 'You are sick. Write to your boss (formal), then to a friend whose party you’ll miss (friendly).'],
  exemploRot: 'FORMAL ↔ FRIENDLY', exemplo: [['OPEN', 'Dear Ms. Reed ↔ Hi Jo'], ['NEWS', 'I am writing to let you know ↔ Just a heads-up'], ['VERB', 'postpone ↔ put off'], ['SORRY', 'I apologise ↔ So sorry!'], ['CLOSE', 'Kind regards ↔ Talk soon']],
  modelo: 'Dear Mr. Lima, I am writing to let you know that I am unwell and will be unable to attend work today. Would it be possible to move our call to Monday? Kind regards, Ana<br><br>Hi Bia! Just a heads-up: I’m sick, so I can’t make it tonight. So sorry! Can we do Saturday?' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Formal or Friendly?: leitura · descobre · transforma · cartao */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One delay. Climb it from friendly to formal.', degraus: [{ r: 'friend', f: 'Hi Jo! Flight’s late, can’t make it. Sorry!', d: 'Short, with a greeting from a friend.' }, { r: 'full words', f: 'Hello Jo, my flight is late and I cannot make it. I’m sorry.', d: 'No short forms, full sentences.' }, { r: 'polite ask', f: 'Dear Ms. Reed, <b>would it be possible to</b> move our meeting?', d: 'A formal opening, and an indirect question.' }, { r: 'latin verbs', f: 'I would like to <b>postpone</b> the meeting, as my flight has been <b>delayed</b>.', d: 'Formal verbs: postpone (put off), delayed (held up).' }, { r: 'fixed phrases', f: 'I am writing to <b>inform you that</b> … <b>I apologise for any inconvenience</b>. <b>Kind regards</b>', d: 'The fixed frames of a formal e-mail.' }], nota: 'Going up the ladder: <b>full words</b> (no short forms), <b>indirect questions</b> (would it be possible to), <b>Latin verbs</b> (postpone, not put off), <b>fixed phrases</b> (I am writing to inform you that). Do not mix: no Dear Sir … cheers!', uso: { p: 'Your turn. You are sick and cannot go to work. Say it to your boss, in a formal way, in two sentences.', molde: ['I am writing to inform you that …', 'Would it be possible to …?'], ex: 'I am writing to inform you that I am unwell and cannot come in today. Would it be possible to work from home tomorrow?' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
