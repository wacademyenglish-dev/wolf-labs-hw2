/* ============================================================
   LET ME REPHRASE · C1 · UNIT 8 (EXPLAIN AND REPORT) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: reformular e esclarecer: In other words, …; That is to say, …; What I mean is…; To put it
   another way, …; Let me rephrase that.; or rather, …; i.e. (escrita); to put it simply / bluntly;
   e pedir reformulação: What exactly do you mean by…? / Are you saying that…?
   Armadilha do português: "ou seja" vira or be; "quer dizer" vira want to say (→ I mean);
   "em outras palavras" in other way.
   O mundo: uma consulta difícil: um consultor financeiro explica e reexplica para um cliente confuso.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 8, titulo: ['Let Me', 'Rephrase'], tema: 'Say it again, better.',
  sub: 'Fluent speakers don’t always get it right the first time. They fix it: “What I mean is…”, “To put it another way…”. Learn the art of rephrasing, and of asking others to rephrase.',
  placa: 'THE ADVISER · ROOM 2', lugarConversa: 'THE GARDEN PATH', cor: '#b0c4a0', cor2: '#d8e2cf',
  chips: ['In other words', 'What I mean is…', 'To put it simply'], botao: 'Start the lesson', nota: 'Rephrasing is not a weakness. It’s what good explainers do.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Lost in Explanation', t: 'When did someone confuse you?', p: 'Answer with detail. Then ask the question back.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · The Appointment', t: 'A very confused client.', p: 'Read the conversation out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · Same Idea, Clearer', t: 'What does each phrase do?', p: 'Compare A and B. What is the speaker doing in B?' },
  { k: 'rapido', est: 'f', min: 6, img: 'capa', rot: 'IV · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'cadeira', est: 'o', min: 9, img: 'conversa', rot: 'V · Explain It to Me', t: 'I explain badly. You make me rephrase.', p: 'Your teacher explains something in a complicated way. Ask for clarity, then rephrase it yourself.' }
];
var PORTAS = [];

var CONVERSA = [
  { q: 'Tell me about a time a doctor, a bank or a technician explained something you didn’t understand.', f: 'A confusing explanation?', voce: ['They said …, in other words …', 'I had to ask …'], ex: 'My bank explained my loan. In other words, I understood nothing!' },
  { q: 'What’s something from your job that you find hard to explain to your family?', f: 'Hard to explain?', voce: ['To put it simply, …', 'What I do is …'], ex: 'To put it simply, I make sure the website doesn’t crash.' },
  { q: 'When you don’t understand something in English, what do you say?', f: 'Not understanding?', voce: ['Sorry, what exactly do you mean by …?', 'Are you saying that …?'], ex: 'I say: sorry, are you saying that I need to pay now?' }
];

var LEITURA = { rot: 'THE ADVISER · ROOM 2 · 4 PM', tipo: 'chat',
  antes: { q: 'Imagine an expert explains something important to you in very technical words. What do you do?', h: 'I ask them to explain again, more simply. Or I just nod and feel stupid!' },
  texto: 'ADVISER: Your portfolio has underperformed the benchmark this quarter.\nCLIENT: Sorry, {what exactly do you mean by} that?\nADVISER: {Let me rephrase that}. {In other words}, your investments earned less than the market.\nCLIENT: {Are you saying that} I lost money?\nADVISER: No, not exactly. {What I mean is}, you earned a little, {or rather}, you earned less than you could have.\nCLIENT: So should I worry?\nADVISER: {To put it simply}, no. {To put it another way}: it was a bad quarter, not a bad year.\nCLIENT: Thank you. {That is to say}, I can sleep tonight.\nADVISER: Exactly.',
  perguntas: [
    { q: 'What’s the client’s first problem?', h: 'She doesn’t understand the technical sentence.' },
    { q: 'Did the client lose money?', h: 'No. She earned money, but less than the market.' },
    { q: 'What does the adviser say about worrying?', h: 'She shouldn’t worry: it was a bad quarter, not a bad year.' },
    { q: 'Who uses rephrasing phrases: the adviser, the client, or both?', h: 'Both: the adviser rephrases, and the client asks for clarity and summarizes.' }],
  olha: 'Find nine phrases. Which ones ask for clarity? Which ones say the same thing again, more clearly?' };

var DESCOBRE = {
  pares: [
    { a: 'It underperformed the benchmark.', b: 'It underperformed the benchmark. {In other words}, it earned less than the market.', q: 'What does B do for the listener?', r: 'B says the same idea again in simpler words. In other words / To put it another way = here it is again, clearer.' },
    { a: 'You earned a little, {or rather}, less than you could have.', b: 'You earned a little, or less than you could have.', q: 'What does “or rather” do that “or” doesn’t?', r: 'or rather = I correct myself to be more precise. B with only “or” sounds like two options.' },
    { a: '{What I mean is}, it was a bad quarter.', b: '{What I want to say} is, it was a bad quarter.', q: 'Which one is the natural phrase?', r: 'A. What I mean is… Native speakers rarely say “what I want to say”. “Quer dizer” = I mean.' },
    { a: 'Sorry, {are you saying that} I lost money?', b: 'Sorry, {I didn’t understand}.', q: 'Which one helps the conversation more?', r: 'A: it shows what you understood and lets the other person correct it. It’s active listening.' }],
  regra: [['SAY IT AGAIN', 'In other words, … · To put it another way, … · That is to say, …'], ['CORRECT YOURSELF', 'What I mean is… · or rather, … · Let me rephrase that.'], ['MAKE IT SIMPLE', 'To put it simply, … · To put it bluntly, … · Basically, …'], ['ASK FOR CLARITY', 'What exactly do you mean by…? · Are you saying that…? · So, if I understand correctly, …']],
  armas: [
    ['OR BE', 'It’s expensive, or be, I can’t pay.', 'It’s expensive; <b>in other words</b>, I can’t pay.', '“ou seja” = in other words / that is to say.'],
    ['WANT TO SAY', 'What I want to say is that we need time.', '<b>What I mean is</b> that we need time.', '“quer dizer” = I mean.'],
    ['WAY', 'In other way, it was a mistake.', '<b>In other words</b> / <b>To put it another way</b>, it was a mistake.', 'in other words · to put it another way.'],
    ['MEAN', 'What do you want to say with that?', 'What do you <b>mean by</b> that?', 'mean by (not want to say with).']] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Let Me Rephrase: conversa · leitura · descobre · rapido · cadeira */
var RAPIDO = { seg: 60, itens: [['“ou seja” in English (2 options)', 'in other words / that is to say'], ['“quer dizer” (correcting yourself)', 'I mean / what I mean is'], ['What do you mean ___ that?', 'by'], ['To put it ___ way, …', 'another'], ['To put it ___, … (very clearly, maybe rude)', 'bluntly'], ['To put it ___, … (easy words)', 'simply'], ['It was good, or ___, very good.', 'rather'], ['Are you ___ that I’m wrong?', 'saying'], ['Let me ___ that. (say it in a new way)', 'rephrase'], ['So, if I understand ___, …', 'correctly']] };
var CADEIRA = { itens: [
  { alvo: 'I’ll explain my job in a complicated way. Ask me what I mean.', dica: 'Sorry, what exactly do you mean by that?', resp: 'I optimize learner outcomes through scaffolded input. To put it simply: I help people learn.' },
  { alvo: 'I’ll say something confusing about money. Check what you understood.', dica: 'Are you saying that…?', resp: 'Yes, exactly. In other words, it costs more but it lasts longer.' },
  { alvo: 'Summarize what I just said, starting with “So, if I understand correctly…”', dica: 'So, if I understand correctly, …', resp: 'Exactly! You understood perfectly.' },
  { alvo: 'Ask me to explain a word I use.', dica: 'What do you mean by “…”?', resp: 'Good question. Let me rephrase that.' },
  { alvo: 'Explain your own job in one complicated sentence, then simply.', dica: 'In my job I… To put it simply, …', resp: 'Ah, now I get it. In other words, you…' }] };
