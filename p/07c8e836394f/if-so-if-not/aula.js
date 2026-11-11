/* ============================================================
   IF SO, IF NOT · C1 · UNIT 8 (EXPLAIN AND REPORT) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: elipse e substituição avançadas (o B2 viu so do I / I hope so): if so, if not, if anything,
   if necessary, if possible, if any; I’m afraid so / not; not that I know of; so I gather / so I hear;
   I suppose so / I suppose not; I’d rather not; I don’t see why not.
   Armadilha do português: "se sim / se não" vira if yes / if no; "acho que não" → I think no;
   "que eu saiba, não" → no that I know.
   O mundo: a troca de e-mails entre uma hóspede e o dono de um chalé no lago (inventado).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 8, titulo: ['If So,', 'If Not'], tema: 'Say more with fewer words.',
  sub: '“If yes” and “if no” are typical Brazilian English. Natives write “If so” and “If not”, and answer “I’m afraid not”, “Not that I know of”. Read a booking by email and learn to be short, precise and polite.',
  placa: 'THE LAKE CABIN · INBOX', lugarConversa: 'THE PIER', cor: '#7fbcb0', cor2: '#c0ded8',
  chips: ['If so, …', 'I’m afraid not', 'Not that I know of'], botao: 'Start the lesson', nota: 'Short answers are not lazy. They are elegant.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Emails', t: 'Booking a cabin by the lake.', p: 'Read the emails out loud. Answer the questions. Then look closer.' },
  { k: 'gx', est: 'o', min: 4, img: 'conversa', rot: 'II · Short Answers', t: 'Ping-pong. Short and smart.', p: 'The teacher asks. Say the short answer, then add one sentence. Then you ask.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · Long or Short?', t: 'Same meaning, fewer words.', p: 'Compare A and B. Which one sounds natural in English?' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'IV · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a line, across, down or diagonal, is a BINGO.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'V · Would You?', t: 'Answer short, then explain.', p: 'Choose A or B. Start with a short answer: I suppose so, I’d rather not, I don’t see why not…' },
  { k: 'conversa', est: 'o', min: 7, img: 'conversa', rot: 'VI · Quick Answers', t: 'Your teacher asks. You answer short and smart.', p: 'Answer with a short form first. Then add one sentence.' }
];
var PORTAS = [];

var LEITURA = { rot: 'INBOX · BOOKING · THE LAKE CABIN', tipo: 'chat',
  antes: { q: 'When you book a holiday rental, what questions do you usually ask the owner?', h: 'If pets are allowed, if there’s parking, if I can check in late, if there’s Wi-Fi.' },
  texto: 'SARA: Hello! Is the cabin free from 10 to 14 March? {If so}, can we bring our dog? {If not}, could you recommend another cabin nearby?\nMR. HOLT: Hi Sara. Yes, it’s free. Dogs are welcome, but there’s a small cleaning fee, {if any} damage is found.\nSARA: Great. Is there a shop near the cabin?\nMR. HOLT: {I’m afraid not}. The nearest one is 12 km away. Bring food, and extra blankets {if necessary}: nights can be cold.\nSARA: Is the lake safe for swimming?\nMR. HOLT: {Not that I know of}… I mean, nobody has had problems. {If anything}, it’s too cold!\nSARA: Can we arrive after 10 PM?\nMR. HOLT: {I suppose so}. Please call me {if possible}.\nSARA: My friend says you make bread every morning.\nMR. HOLT: {So I hear}! My wife does. Don’t tell her I took the credit.',
  perguntas: [
    { q: 'What two possibilities does Sara plan for in her first email?', h: 'If the cabin is free, she asks about the dog. If it isn’t, she asks for another cabin.' },
    { q: 'Is there a shop near the cabin? What should they bring?', h: 'No, it’s 12 km away. They should bring food and maybe extra blankets.' },
    { q: 'What does Mr. Holt say about swimming in the lake?', h: 'He doesn’t know of any problems; if anything, the water is too cold.' },
    { q: 'Who really makes the bread?', h: 'His wife!' }],
  olha: 'Find nine short phrases that replace a whole sentence. What does each one replace?' };

var DESCOBRE = {
  pares: [
    { a: 'Is it free? {If yes}, can we bring our dog?', b: 'Is it free? {If so}, can we bring our dog?', q: 'Which one would a native write?', r: 'B. If so = if the answer is yes. If not = if the answer is no. “If yes / if no” sound like translations.' },
    { a: 'Is there a shop? – {I think no}.', b: 'Is there a shop? – {I’m afraid not}.', q: 'One is wrong. What do we use after think, hope, afraid?', r: 'B. I’m afraid not / I hope not / I don’t think so. Never “I think no”.' },
    { a: 'Is the lake dangerous? – {Not that I know of}.', b: 'Is the lake dangerous? – {No, I don’t know}.', q: 'What’s the difference in meaning?', r: 'A: as far as I know, no (a soft no). B: I don’t have the information. Different answers!' },
    { a: 'Is it warm? – {If anything}, it’s cold.', b: 'Is it warm? – {If something}, it’s cold.', q: 'Which phrase means “actually, the opposite is more true”?', r: 'A. If anything = if there’s any difference, it goes the other way. “If something” doesn’t exist with this meaning.' }],
  regra: [['IF SO · IF NOT', 'if the answer is yes · if the answer is no'], ['I’M AFRAID SO / NOT · I SUPPOSE SO · I HOPE NOT', 'short, polite answers (never “I think no”)'], ['NOT THAT I KNOW OF · SO I HEAR / GATHER', 'as far as I know, no · that’s what people say'], ['IF ANYTHING · IF NECESSARY · IF POSSIBLE · IF ANY', 'actually, the opposite · when needed · when you can · if there is some']],
  armas: [
    ['YES', 'Do you have a room? If yes, how much is it?', 'Do you have a room? <b>If so</b>, how much is it?', 'If so = if yes.'],
    ['THINK', 'Will it rain? I think no.', 'Will it rain? <b>I don’t think so</b>.', 'I don’t think so / I hope not.'],
    ['KNOW', 'Is there a problem? No that I know.', 'Is there a problem? <b>Not that I know of</b>.', 'Not that I know of.'],
    ['AFRAID', 'Is it included? I’m afraid no.', 'Is it included? <b>I’m afraid not</b>.', 'afraid not / afraid so.']] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · If So, If Not: leitura · descobre · bingo · escolha · conversa */
var BINGO = [['“se sim” in an email', 'If so'], ['“se não”', 'If not'], ['Is it included? – I’m afraid ___.', 'not'], ['Will it rain? – I don’t think ___.', 'so'], ['Any problems? – Not that I know ___.', 'of'], ['Is it hot? – If ___, it’s cold.', 'anything'], ['Bring a coat if ___. (when needed)', 'necessary'], ['Call me if ___. (when you can)', 'possible'], ['“You’re moving?” – “So I ___!” (that’s what people say)', 'hear / gather']];
var ESCOLHA = [
  { a: 'lend your car to a friend for a week', b: 'lend your house for a weekend', chips: ['I suppose so, if …', 'I’d rather not, …'], ex: 'The house, I suppose so. The car? I’d rather not.' },
  { a: 'work on a Saturday for double pay', b: 'keep your Saturday free', chips: ['I don’t see why not.', 'If so, …', 'I’m afraid not.'], ex: 'Double pay? I don’t see why not, if it’s only once.' },
  { a: 'move abroad tomorrow', b: 'stay in your city forever', chips: ['If anything, …', 'If possible, …'], ex: 'Move abroad. If anything, I’d go tomorrow!' }];
var CONVERSA = [
  { q: 'Is there anything you’re worried about this week?', f: 'Worried this week?', voce: ['Not that I know of.', 'I’m afraid so: …'], ex: 'I’m afraid so: I have a big presentation on Thursday.' },
  { q: 'Are you going to travel this year? If so, where?', f: 'Travel this year?', voce: ['I hope so. If so, …', 'I don’t think so. If not, …'], ex: 'I hope so. If so, I’d love to see Chile.' },
  { q: 'Is your city getting more expensive?', f: 'More expensive?', voce: ['I’m afraid so.', 'If anything, …'], ex: 'I’m afraid so. If anything, rent has doubled.' },
  { q: 'Can you help me move house on Sunday?', f: 'Help me move?', voce: ['I suppose so.', 'I’d rather not, but …', 'I don’t see why not.'], ex: 'I suppose so, if you buy the pizza!' }];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G8 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'respostaCurta', titulo: 'Short answers. Two or three words, fast.', perguntas: [{ q: 'Is the cabin free in July?', s: 'I suppose <mark>so</mark>.', n: 'I’m afraid <mark>not</mark>.', mais: 'Add one sentence: why?' }, { q: 'Can I bring my dog?', s: 'I don’t see <mark>why not</mark>.', n: 'I’d <mark>rather not</mark>.', mais: 'Say what you prefer.' }, { q: 'Is there a fee for a late arrival?', s: 'If <mark>so</mark>, it’s small.', n: 'Not that <mark>I know of</mark>.', mais: 'Ask a follow-up question.' }, { q: 'Will it rain this weekend?', s: 'I hope <mark>so</mark>.', n: 'I hope <mark>not</mark>.', mais: 'Why do you hope so?' }, { q: 'Is breakfast included?', s: 'So I <mark>gather</mark>.', n: 'I suppose <mark>not</mark>.', mais: 'Where did you hear it?' }, { q: 'Do you need a parking spot?', s: 'If <mark>possible</mark>.', n: 'If <mark>not</mark>, no problem.', mais: 'Say what you need.' }], nota: 'In English we do not repeat the whole sentence: <b>I suppose so</b>, <b>I’m afraid not</b>, <b>if so</b>, <b>if not</b>, <b>if possible</b>, <b>not that I know of</b>. Not “I think no”, not “if yes”.', uso: { p: 'Your turn. Ask your teacher three questions about a trip. Your teacher answers with a short form. You react.', molde: ['Is …?', 'Can I …?', 'Do I need …?'], ex: 'Is the room by the lake? Can I check in early? Do I need to bring towels?' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_curta', GX_EXPLICA); };
