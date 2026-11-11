/* ============================================================
   HOOK THEM IN TEN SECONDS · C1 · UNIT 10 (THE TALK) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: aberturas de apresentação: a pergunta retórica (Have you ever wondered why…?), o dado
   surpreendente (Did you know that…?), o “Imagine…”, a mini-história (Last year, I…), o “Raise your
   hand if…”, e a promessa (By the end of this talk, you’ll…). E o que NÃO fazer: “Hello, my name is…
   today I will talk about…”, pedir desculpas pelo inglês, “I’m very nervous”.
   O mundo: três versões da abertura da mesma palestra (sobre sono) num concurso de oratória.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 10, titulo: ['Hook Them in', 'Ten Seconds'], tema: 'The first ten seconds of a talk.',
  sub: '“Hello, my name is Ana, and today I will talk about sleep.” The audience is already on their phones. Learn five openings that make people look up, and write the first ten seconds of your own talk.',
  placa: 'SPEAKING CONTEST · ROUND 1', lugarConversa: 'THE GREEN ROOM', cor: '#e8b45a', cor2: '#f4d9ad',
  chips: ['Have you ever wondered…?', 'Imagine…', 'Raise your hand if…'], botao: 'Start the lesson', nota: 'You never get a second chance at a first sentence.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · Three Openings', t: 'Same talk. Three first sentences.', p: 'Read the three openings out loud, like a speaker. Then look closer.' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'II · Find the Rule', t: 'Four hooks. You find the rule.', p: 'Read the four openings out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · Which One Hooks You?', t: 'Boring or brilliant?', p: 'Compare A and B. Which one makes you want to listen? Why?' },
  { k: 'transforma', est: 'f', min: 8, img: 'capa', rot: 'IV · Fix the Opening', t: 'Boring → hook.', p: 'Read the boring opening. Use the clue. Say a hook.' },
  { k: 'bingo', est: 'f', min: 8, img: 'capa', rot: 'V · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a row, across, down or diagonal, is a BINGO.' },
  { k: 'cartao', est: 'w', min: 9, img: 'conversa', rot: 'VI · Your First Ten Seconds', t: 'Write the opening of your own talk.', p: 'Choose a topic you love. Write a hook, a bridge and a promise.' }
];
var PORTAS = [];

var LEITURA = { rot: 'SPEAKING CONTEST · THREE OPENINGS · TOPIC: SLEEP', tipo: 'fala',
  antes: { q: 'Think of a talk or a class you loved. How did it start?', h: 'With a story about the teacher’s childhood. I remember it even today.' },
  texto: 'SPEAKER 1: Hello, my name is Carla, and today I will talk about sleep. I’m sorry about my English, I’m very nervous.\nSPEAKER 2: {Have you ever wondered why} you feel tired, even after eight hours in bed? {Did you know that} one in three adults doesn’t sleep enough? {By the end of this talk, you’ll} know three simple ways to sleep better tonight.\nSPEAKER 3: {Imagine} it’s 3 AM. You’re staring at the ceiling. Your alarm rings in three hours. {Raise your hand if} that has ever happened to you. {Last year, that was me}, every single night. {Here’s what changed}.',
  perguntas: [
    { q: 'What does Speaker 1 do in the first ten seconds? How does the audience feel?', h: 'Name, topic, an apology and “I’m nervous”. The audience gets bored or worried.' },
    { q: 'Which two techniques does Speaker 2 use?', h: 'A question (Have you ever wondered why…?), a surprising fact (Did you know that…?) and a promise.' },
    { q: 'What does Speaker 3 ask the audience to do?', h: 'Imagine a scene, and raise their hands. Then she tells her own story.' },
    { q: 'Which opening would you choose? Why?', h: 'Any answer works, but speakers 2 and 3 create curiosity and connection.' }],
  olha: 'Find the techniques in speakers 2 and 3. Which ones are questions, which create a picture, which make a promise?' };

var DESCOBRE = {
  pares: [
    { a: 'Hello, my name is Carla, and today I will talk about sleep.', b: '{Have you ever wondered why} you feel tired after eight hours of sleep?', q: 'Which one makes you curious? What does B do to your brain?', r: 'B. A question makes the audience answer in their heads: they are already in the talk. A gives information nobody asked for yet.' },
    { a: 'Many people don’t sleep well.', b: '{Did you know that} one in three adults doesn’t sleep enough?', q: 'Same idea. Why is B stronger?', r: 'A precise, surprising number makes it real. “Many people” is vague; “one in three” is in the room right now.' },
    { a: '{Imagine} it’s 3 AM. You’re staring at the ceiling.', b: 'Insomnia is when you can’t sleep at night.', q: 'Which one puts the audience inside the problem?', r: 'A. Imagine + present simple / continuous creates a picture: the audience lives it. B is a dictionary definition.' },
    { a: 'I’m sorry about my English. I’m very nervous.', b: '{By the end of this talk, you’ll} know three ways to sleep better.', q: 'What does each one make the audience think about?', r: 'A: your English and your nerves. B: what they will get. Never apologize in your first sentence: promise something.' }],
  regra: [['ASK', 'Have you ever wondered why…? · What would you do if…?'], ['SURPRISE', 'Did you know that…? · Here’s a number that shocked me: …'], ['PICTURE / STORY', 'Imagine… · Last year, I… · Raise your hand if…'], ['PROMISE', 'By the end of this talk, you’ll… · Today I’m going to show you…']],
  armas: [
    ['NAME FIRST', 'Hello, my name is Ana and my topic is…', '<b>Have you ever wondered</b> why…? (Name later.)', 'Hook first, introduce yourself after.'],
    ['APOLOGY', 'Sorry for my English.', '<b>By the end of this talk, you’ll</b>…', 'Never apologize. Promise.'],
    ['WONDER', 'Have you ever wondered why do we dream?', 'Have you ever wondered why <b>we dream</b>?', 'Indirect question: no do.'],
    ['IMAGINE', 'Imagine that you will be in a plane.', '<b>Imagine</b> you’re on a plane.', 'Imagine + present: more vivid.']] };

var TRANSFORMA = { rot: 'BORING → HOOK', fim: 'Six openings nobody will scroll past.',
  itens: [
    { de: 'Today I will talk about stress at work.', pista: 'Have you ever wondered …', para: 'Have you ever wondered why Monday mornings feel so heavy?' },
    { de: 'A lot of food is wasted.', pista: 'Did you know that …', para: 'Did you know that a third of all food is thrown away?' },
    { de: 'My topic is public speaking.', pista: 'Raise your hand if …', para: 'Raise your hand if your heart beats faster when you speak in public.' },
    { de: 'Learning a language is difficult.', pista: 'Imagine …', para: 'Imagine you’re in a café in Tokyo, and you can’t even order water.' },
    { de: 'I want to talk about my experience.', pista: 'Last year, I …', para: 'Last year, I almost gave up English. Here’s what changed.' },
    { de: 'This talk is about saving money.', pista: 'By the end of this talk …', para: 'By the end of this talk, you’ll know three ways to save money this week.' }] };

var CARTAO = { ph: 'Have you ever wondered why we forget most of what we learn?\nDid you know that after one week, we forget about 70%?\nLast year, I forgot almost everything from a course I paid for.\nBy the end of this talk, you’ll know how to remember more with less study.', rot: 'My opening',
  chips: ['Have you ever wondered why ', 'Did you know that ', 'Imagine ', 'Raise your hand if ', 'Last year, I ', 'Here’s what changed.', 'By the end of this talk, you’ll '],
  perg: ['YOUR FIRST TEN SECONDS', 'Choose a topic you love (your job, a hobby, a cause). Write a hook, a short bridge and a promise.'],
  exemploRot: 'SPEAKER 2 · THE STRUCTURE', exemplo: [['HOOK', 'Have you ever wondered why…?'], ['FACT', 'one in three adults'], ['BRIDGE', 'that was me'], ['PROMISE', 'three ways to sleep better'], ['NAME', 'later, not first']],
  modelo: 'Have you ever wondered why we forget most of what we learn? Did you know that after one week we forget about 70%?<br>Last year, I forgot almost everything from a course I paid for.<br>By the end of this talk, you’ll know how to remember more with less study.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Hook Them in Ten Seconds: leitura · descobre · transforma · bingo · cartao */
var BINGO = [['A hook with a question about a mystery', 'Have you ever wondered why…?'], ['A hook with a number', 'Did you know that…?'], ['A hook that creates a picture', 'Imagine…'], ['A hook that makes the audience move', 'Raise your hand if…'], ['A hook with your own story', 'Last year, I…'], ['A promise', 'By the end of this talk, you’ll…'], ['Fix it: “Have you ever wondered why do we dream?”', 'why we dream'], ['Never start with…', 'an apology / “my name is…”'], ['Say a hook for a talk about coffee', 'e.g. Did you know that coffee is the second most traded product in the world?']];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four openings of a talk about sleep. Find the rule yourself.', exemplos: ['<b>Have you ever wondered</b> why we dream?', '<b>Did you know that</b> we spend a third of our lives asleep?', '<b>Imagine</b> you never slept again.', '<b>By the end of this talk, you’ll</b> know how to sleep better.'], pergunta: 'A good hook speaks to …', opcoes: ['the listener: you, imagine, have you ever', 'the speaker: I am, my name is, I will talk about', 'nobody: only facts, no question, no you'], c: 0, nao: 'Not that one. Read the four lit starts again: who is in the sentence?', regra: 'A hook puts the <b>listener</b> in the first sentence: a <b>question</b> (Have you ever wondered …?), a <b>surprise</b> (Did you know that …?), <b>Imagine …</b>, or a <b>promise</b> (By the end, you’ll …). Do not start with: “Hello, my name is … today I will talk about …”.', uso: { p: 'Your turn. Choose a topic you love. Say the first ten seconds of your talk: one hook and one promise.', molde: ['Have you ever wondered …?', 'Imagine …', 'By the end of this talk, you’ll …'], ex: 'Have you ever wondered why we love music? Imagine a day without it. By the end of this talk, you’ll know why songs get stuck in your head.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
