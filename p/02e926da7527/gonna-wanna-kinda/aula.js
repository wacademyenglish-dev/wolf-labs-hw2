/* ============================================================
   GONNA, WANNA, KINDA · C1 · UNIT 9 (REGISTER AND STYLE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: o inglês falado × o escrito: gonna, wanna, gotta, kinda, sorta, dunno, lemme, ’cause, y’know;
   a elipse da fala (Coming? / Sounds good / Want some?); e quando NÃO usar (e-mail, prova, trabalho).
   Também: entender isso nos filmes e séries (o foco é compreensão + uso consciente na fala informal).
   Armadilha: escrever gonna num e-mail de trabalho; I’m gonna to; I wanna you to (→ I want you to).
   O mundo: a transcrição de uma mensagem de voz entre dois amigos combinando um show.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 9, titulo: ['Gonna, Wanna,', 'Kinda'], tema: 'How English is really spoken.',
  sub: 'Films and series are full of “gonna”, “wanna”, “dunno”. Your textbooks never were. Read a real voice message, decode it, and learn when to use it, and when never to.',
  placa: 'VOICE MESSAGE · 0:47', lugarConversa: 'THE RECORD PLAYER', cor: '#e0a0b8', cor2: '#f0d0dc',
  chips: ['gonna', 'wanna', 'kinda'], botao: 'Start the lesson', nota: 'Understand all of it. Use some of it, with friends.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'I · Series and Films', t: 'What do you watch in English?', p: 'Answer with detail. Then ask the question back.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · The Voice Message', t: 'Leo sends a message to Ana.', p: 'Read it out loud, fast and relaxed, like Leo. Then decode it.' },
  { k: 'gx', est: 'l', min: 4, img: 'conversa', rot: 'III · Say It Like Leo', t: 'The words melt together when we talk fast.', p: 'Listen to the pairs. Then the ear test: which one do you hear? Then say yours, fast and relaxed.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'IV · Spoken or Written?', t: 'Same words, two worlds.', p: 'Compare A and B. Where does each one belong?' },
  { k: 'memoria', est: 'l', min: 8, img: 'capa', rot: 'V · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'VI · Where Would You Say It?', t: 'Gonna in a job interview? Choose.', p: 'Choose A or B. Then explain: spoken or written? Friends or work?' }
];
var PORTAS = [];

var CONVERSA = [
  { q: 'What series or films do you watch in English? With or without subtitles?', f: 'Series in English?', voce: ['I’m watching …', 'With / without subtitles, because …'], ex: 'I’m watching a comedy series, with English subtitles. They speak so fast!' },
  { q: 'What words do you hear a lot in series, but never saw in your English books?', f: 'Words from series?', voce: ['I hear “…” a lot.', 'I didn’t know …'], ex: 'Gonna and wanna! And “dude”. My books never had those.' },
  { q: 'What are you gonna do this weekend? (Answer like a native friend.)', f: 'This weekend?', voce: ['I’m gonna …', 'I kinda wanna …'], ex: 'I’m gonna sleep a lot. And I kinda wanna see the new Marvel film.' }
];

var LEITURA = { rot: 'WHATSAPP · VOICE MESSAGE · TRANSCRIPT', tipo: 'chat',
  antes: { q: 'Do you send voice messages or text messages? Is your Portuguese different in each one?', h: 'Voice messages! I speak much more informally: I cut words, I say “tá” instead of “está”.' },
  texto: 'LEO: Hey Ana! So, uh, the band’s playing Saturday, and I {wanna} go. You {wanna} come?\nLEO: I {dunno} the exact time, {kinda} late, like nine? {Lemme} check. Yeah, nine.\nLEO: Tickets are {sorta} expensive, {’cause} it’s a big venue, {y’know}? But I {gotta} see them live.\nLEO: I’m {gonna} buy two tonight, {’cause} they’re {gonna} sell out.\nLEO: {Coming}? Text me. {Sounds good}? Ok, bye!',
  perguntas: [
    { q: 'What does Leo want to do, and when?', h: 'See a band live on Saturday, at about nine.' },
    { q: 'Why are the tickets expensive?', h: 'Because it’s a big venue.' },
    { q: 'What is Leo going to do tonight, and why?', h: 'Buy two tickets, because they will sell out.' },
    { q: 'Find two questions with missing words. What is missing?', h: '“Coming?” = Are you coming? “Sounds good?” = Does that sound good?' }],
  olha: 'Find every spoken form. Write the full version of each one: wanna = want to…' };

var DESCOBRE = {
  pares: [
    { a: 'I’m {gonna} buy two tickets.', b: 'I’m {going to} buy two tickets.', q: 'Which one is spoken, which one is written? Is A wrong?', r: 'A is how people SAY it; B is how they WRITE it. A is not wrong in speech or in chat with friends, but never in an email to work or an exam.' },
    { a: 'I {wanna} go.', b: 'I {wanna} you to come.', q: 'One of these is impossible, even in speech. Which one?', r: 'B. wanna = want to. “I want to you to come” doesn’t work. With a person: I want you to come (no wanna).' },
    { a: 'I’m {gonna to} call you.', b: 'I’m {gonna} call you.', q: 'Which one is a common mistake?', r: 'A. gonna already includes “to” (going to). Never gonna to, wanna to, gotta to.' },
    { a: '{Coming}?', b: '{Are you coming}?', q: 'What’s missing in A? Is that normal?', r: 'The auxiliary and the subject. Very normal in speech: Want some? Sounds good. Got it. Never in formal writing.' }],
  regra: [['GONNA · WANNA · GOTTA', 'going to · want to · have got to (I gotta go)'], ['KINDA · SORTA · DUNNO · LEMME', 'kind of · sort of · I don’t know · let me'], ['’CAUSE · Y’KNOW', 'because · you know'], ['WHERE?', 'speech, voice messages, chats with friends · NOT emails to work, exams, formal writing']],
  armas: [
    ['EMAIL', 'Dear Ms. Reed, I’m gonna send the report today.', 'Dear Ms. Reed, I <b>am going to</b> send the report today.', 'gonna never in formal writing.'],
    ['TO', 'I’m gonna to call you.', 'I’m <b>gonna</b> call you.', 'gonna = going to (no extra to).'],
    ['PERSON', 'I wanna you to come.', 'I <b>want you to</b> come.', 'want + person + to: no wanna.'],
    ['GOTTA', 'I gotta to go.', 'I <b>gotta</b> go.', 'gotta = (have) got to.']] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Gonna, Wanna, Kinda: conversa · leitura · descobre · memoria · escolha */
var PARES = [
  ['gonna', 'going to', 'I’m gonna call you later = I’m going to call you later.'],
  ['wanna', 'want to', 'You wanna come? = Do you want to come?'],
  ['gotta', 'have got to', 'I gotta go! = I have got to go.'],
  ['kinda', 'kind of', 'It’s kinda late = It’s kind of late.'],
  ['dunno', 'I don’t know', 'Dunno. Ask Ana. = I don’t know. Ask Ana.'],
  ['lemme', 'let me', 'Lemme check = Let me check.']];
var ESCOLHA = [
  { a: 'say “I’m gonna” in a job interview', b: 'say “I’m going to” in a job interview', chips: ['In an interview, I’d say …', 'because it’s …'], ex: 'Going to, but honestly, in speech gonna is OK too. In writing, never.' },
  { a: 'write “wanna” to your best friend', b: 'write “want to” to your best friend', chips: ['With friends, …', 'It sounds …'], ex: 'Wanna! “Want to” sounds a bit cold with my best friend.' },
  { a: 'write “gonna” in an email to a client', b: 'write “going to” in an email to a client', chips: ['To a client, I’d write …', 'Never …'], ex: 'Going to. Gonna would look unprofessional.' },
  { a: 'use “y’know” in a presentation', b: 'avoid it in a presentation', chips: ['Too many y’knows sound …', 'One or two …'], ex: 'Avoid it. One is fine, but ten sound nervous.' }];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G11 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'som2', titulo: 'Careful or relaxed? Listen first.', toque: 'Tap ▶ and listen. The careful one is slow and clear. The relaxed one melts: going to → gonna, want to → wanna.', pares: [[{ t: 'I’m going to come.', fala: 'I am going to come to the show.' }, { t: 'I’m gonna come.', fala: 'I am gonna come to the show.' }], [{ t: 'Do you want to go?', fala: 'Do you want to go with me?' }, { t: 'D’you wanna go?', fala: 'Do you wanna go with me?' }], [{ t: 'Let me see.', fala: 'Let me see the tickets.' }, { t: 'Lemme see.', fala: 'Lemme see the tickets.' }]], pergunta: 'The ear test. Which one do you hear?', itens: [{ fala: 'We are gonna be late.', o: ['going to', 'gonna'], c: 1 }, { fala: 'I am going to call you tomorrow.', o: ['going to', 'gonna'], c: 0 }, { fala: 'I wanna see the band.', o: ['want to', 'wanna'], c: 1 }, { fala: 'I want to see the band.', o: ['want to', 'wanna'], c: 0 }], nota: 'Spoken English joins words: <b>going to → gonna</b>, <b>want to → wanna</b>, <b>got to → gotta</b>, <b>kind of → kinda</b>, <b>let me → lemme</b>. Understand them in films. Say them with friends. Never write them in an e-mail to work, and never say <b>I’m gonna to</b>.', uso: { p: 'Your turn. Tell your friend two plans for the weekend, relaxed and fast, with gonna and wanna.', molde: ['I’m gonna …', 'I wanna …', 'Do you wanna …?'], ex: 'I’m gonna see a band on Saturday. I wanna dance all night. Do you wanna come?' }, prof: 'The ▶ uses the voice of the browser. No sound? Say the sentences yourself, careful first and relaxed second.' };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_som', GX_EXPLICA); };
