/* ============================================================
   NOT A NORMAL DAY · A2 · UNIT 1 (THE HABIT AND THE NOW) · LIVE CLASS  16/10/2026
   Aula nova do livro A2 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: present simple (hábito: usually, every evening) × present continuous (agora: tonight, right now);
   verbos de estado sem -ing (I'm knowing → I know).
   O mundo: a luz acabou no prédio às sete da noite; o grupo de vizinhos no celular conta o que cada um
   costuma fazer e o que está fazendo agora, à luz de vela.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2', unidade: 1, titulo: ['Not a', 'Normal Day'], tema: 'What you usually do and what you’re doing now.',
  sub: 'It’s 7 p.m. and the power is out in the whole building. Read the neighbors’ group chat, choose habit or right now, and tell your own “not a normal day”.',
  placa: 'POWER CUT · 7:04 PM', lugarConversa: 'BY CANDLELIGHT', cor: '#7cc4ff', cor2: '#c4e3ff',
  chips: ['I usually…', 'Right now I’m…', 'The neighbors’ chat'], botao: 'Start the lesson', nota: 'A habit: I watch TV every evening. Right now: I’m playing cards. Same person, two times.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'capa', rot: 'I · The Group Chat', t: 'The power is out. The phones are on.', p: 'Read the chat out loud with your teacher. Then look closer.' },
  { k: 'gx', est: 'f', min: 3, img: 'capa', rot: 'II · Habit or Now?', t: 'Where does each sentence live?', p: 'Tap a sentence, then its place on the line. Notice the verbs. Then say three lines about you.' },
  { k: 'separa', est: 'f', min: 9, img: 'conversa', rot: 'III · Usually or Right Now?', t: 'A habit or this moment?', p: 'Read each sentence. Is it USUALLY or RIGHT NOW? Say why, then tap.' },
  { k: 'transforma', est: 'f', min: 8, img: 'capa', rot: 'IV · But Tonight…', t: 'Every evening… but tonight…', p: 'Read the habit. Use the clue. Say what is happening tonight.' },
  { k: 'conversa', est: 'o', min: 9, img: 'conversa', rot: 'V · Your Not-Normal Day', t: 'Your normal day, and a strange one.', p: 'Answer, then ask the question back: “And you?”' }
];
var PORTAS = [];

var LEITURA = { rot: 'GREEN TOWERS · NEIGHBORS’ GROUP · 7:12 PM', tipo: 'chat',
  antes: { q: 'What do you usually do at 7 p.m.?', h: 'I usually cook dinner. / I watch the news.' },
  texto: 'LEO: Is the power out for everybody?\nANA: Yes! I {usually watch} a series at this time. Now I{’m sitting} in the dark with a candle.\nMR. COSTA: I {cook} dinner every evening at seven. Tonight I{’m eating} bread and cheese.\nLEO: The kids {usually play} video games. Right now they{’re playing} cards with me. They{’re laughing}!\nANA: Who {knows} when the power comes back?\nMR. COSTA: Nobody. The building manager {isn’t answering} his phone. He never {answers} after six.',
  perguntas: [
    { q: 'What happened in the building?', h: 'The power is out.' },
    { q: 'What does Ana usually do at this time? What is she doing now?', h: 'She usually watches a series. Now she’s sitting in the dark with a candle.' },
    { q: 'What are Leo’s kids doing right now?', h: 'They’re playing cards and laughing.' },
    { q: 'Why isn’t the manager answering?', h: 'He never answers after six.' }],
  olha: 'Find the habits (usually, every evening, never) and the right-now (now, tonight, right now). What changes in the verb?' };

var SEPARA = { rot: 'USUALLY OR RIGHT NOW?', a: 'USUALLY (A HABIT)', b: 'RIGHT NOW', fim: 'A habit: present simple (I watch, she cooks). This moment: am / is / are + -ing (I’m watching).', itens: [
  ['I watch a series every evening.', 'a', 'every evening: a habit.'],
  ['I’m sitting in the dark with a candle.', 'b', 'Now, tonight.'],
  ['Mr. Costa cooks dinner at seven.', 'a', 'Every day at seven.'],
  ['The kids are playing cards.', 'b', 'Right now, during the power cut.'],
  ['The manager never answers after six.', 'a', 'never: a habit.'],
  ['He isn’t answering his phone.', 'b', 'At this moment.'],
  ['We usually take the elevator.', 'a', 'usually: a habit.'],
  ['Tonight we’re using the stairs!', 'b', 'Tonight only.']] };

var TRANSFORMA = { rot: 'EVERY EVENING… BUT TONIGHT…', fim: 'Six sentences: the habit and the now.',
  itens: [
    { de: 'I watch TV every evening.', pista: 'Tonight I … (read a book)', para: 'Tonight I’m reading a book.' },
    { de: 'Ana cooks pasta on Fridays.', pista: 'Right now she … (eat bread)', para: 'Right now she’s eating bread.' },
    { de: 'We take the elevator.', pista: 'Tonight we … (use the stairs)', para: 'Tonight we’re using the stairs.' },
    { de: 'The kids play video games after school.', pista: 'Now they … (play cards)', para: 'Now they’re playing cards.' },
    { de: 'Leo works on his laptop at night.', pista: 'Tonight he … (not work)', para: 'Tonight he isn’t working.' },
    { de: 'I know the building manager.', pista: 'not “I’m knowing”', para: 'I know him, but he isn’t answering.' }] };

var CONVERSA = [
  { q: 'What do you usually do in the evening?', f: 'In the evening: what do you do?', voce: ['I usually …', 'I never …'], ex: 'I usually cook and watch a series.' },
  { q: 'What are you doing right now, besides this class?', f: 'Right now: what?', voce: ['I’m drinking …', 'I’m sitting …'], ex: 'I’m drinking coffee and sitting on my sofa.' },
  { q: 'Do you remember a day without power? What did you do?', f: 'A power cut: when?', voce: ['Yes, last …', 'We played …'], ex: 'Yes, last summer. We played cards all night.' },
  { q: 'What are you learning these days?', f: 'Learning: what?', voce: ['I’m learning …', 'I’m reading …'], ex: 'I’m learning English and I’m reading a good book.' },
  { q: 'What does your family usually do on Sundays?', f: 'Sundays: your family?', voce: ['We usually …', 'My mother always …'], ex: 'We usually have lunch together.' }
];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* A2 · Not a Normal Day: leitura · separa · transforma · conversa */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de separa.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'The night the power went out. Where does each sentence go?', marcos: [{ t: 'EVERY EVENING', s: 'a habit' }, { t: 'RIGHT NOW', s: 'this moment, with -ing' }], frases: [{ f: 'I usually watch TV at seven.', c: 0, d: 'watch · the normal routine' }, { f: 'My neighbors cook dinner every night.', c: 0, d: 'cook · the normal routine' }, { f: 'Ben always checks his phone after work.', c: 0, d: 'checks · always, every day' }, { f: 'Tonight I’m reading by candlelight.', c: 1, d: 'am reading · happening now' }, { f: 'The kids are playing cards right now.', c: 1, d: 'are playing · happening now' }, { f: 'We’re waiting for the lights to come back.', c: 1, d: 'are waiting · happening now' }], nota: 'The habit keeps the normal verb: I <b>watch</b>, Ben <b>checks</b>. This moment uses <b>be + -ing</b>: I’m <b>reading</b>, we’re <b>waiting</b>. Verbs like <b>know, like, want</b> stay normal, even now: I know, not I’m knowing.', uso: { p: 'Your turn. One thing you usually do in the evening, and one thing you are doing right now.', molde: ['Every evening I …', 'Right now I’m …'], ex: 'Every evening I cook dinner. Right now I’m sitting in my kitchen.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
