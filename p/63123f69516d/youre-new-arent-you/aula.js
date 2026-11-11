/* ============================================================
   YOU'RE NEW, AREN'T YOU? · B1 · UNIT 9 (ASKING NICELY AND REPORTING) · LIVE CLASS  16/10/2026
   Aula nova do livro B1 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: question tags (positivo → tag negativa; negativo → tag positiva; o auxiliar certo: do / did / can /
   have / will; I'm → aren't I?; Let's → shall we?) e a entonação: descendo (confirmo) × subindo (pergunto).
   O mundo: a primeira noite numa aula de culinária; o aluno não conhece ninguém e puxa conversa.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 9, titulo: ['You’re New,', 'Aren’t You?'], tema: 'Question tags: the friendly way to start a conversation.',
  sub: 'It’s your first night at a cooking class and you don’t know anybody. Listen to how people start small talk, learn the little questions at the end of sentences, and break the ice yourself.',
  placa: 'COOKING CLASS · NIGHT 1', lugarConversa: 'THE KITCHEN STATION', cor: '#c9b8ff', cor2: '#e4dcff',
  chips: ['…, isn’t it?', '…, don’t you?', 'Break the ice'], botao: 'Start the lesson', nota: 'Portuguese uses “né?” for everything. English changes the tag: It’s hot, isn’t it? You cook, don’t you?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · Breaking the Ice', t: 'Two strangers, one onion.', p: 'Read the conversation out loud with your teacher. Then look closer.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'II · The Ladder', t: 'One sentence, five steps.', p: 'Read each step out loud, then go one step up. Notice the helper in the tag. Then climb with your own sentence.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'III · The English “né?”', t: 'How does the tag change?', p: 'Compare A and B. Which one is right? What is the rule?' },
  { k: 'transforma', est: 'f', min: 8, img: 'conversa', rot: 'IV · Add the Tag', t: 'Make it a friendly question.', p: 'Read the sentence. Add the right tag. Say it with a falling voice.' },
  { k: 'cadeira', est: 'o', min: 10, img: 'capa', rot: 'V · Your Turn to Break the Ice', t: 'Your teacher is a stranger in the class.', p: 'Start conversations with question tags. Listen, react, continue.' }
];
var PORTAS = [];

var LEITURA = { rot: 'COOKING CLASS · STATION 4 · 7:10 PM', tipo: 'chat',
  antes: { q: 'How do you start a conversation with a stranger at a party or a class?', h: 'I comment on something: “This food is good!”' },
  texto: 'MAYA: You’re new, {aren’t you}?\nYOU: Yes, it’s my first night. It’s a bit scary, {isn’t it}?\nMAYA: Only the knives! You don’t cook much, {do you}?\nYOU: Not really. I can make pasta and eggs. You’ve done this before, {haven’t you}?\nMAYA: Three times. I came with my sister last year. She was terrible, but she had fun.\nYOU: The teacher looks serious, {doesn’t he}?\nMAYA: He isn’t! He tells jokes all night. Let’s cut the onions together, {shall we}?\nYOU: OK. I’m going to cry, {aren’t I}?\nMAYA: We all are. Welcome to the club!',
  perguntas: [
    { q: 'Is it the student’s first night? How do they feel?', h: 'Yes. A bit scared.' },
    { q: 'What can the student cook?', h: 'Pasta and eggs.' },
    { q: 'How many times has Maya done the class?', h: 'Three times.' },
    { q: 'Is the teacher really serious?', h: 'No! He tells jokes all night.' }],
  olha: 'Find seven tags. When the sentence is positive, what is the tag? And when it is negative?' };

var DESCOBRE = {
  pares: [
    { a: 'You’re new, {aren’t you}?', b: 'You’re new, {are you}?', q: 'Which one is right? Why?', r: 'Positive sentence → <b>negative tag</b>: You’re new, aren’t you?' },
    { a: 'You don’t cook much, {do you}?', b: 'You don’t cook much, {don’t you}?', q: 'Which one is right?', r: 'Negative sentence → <b>positive tag</b>: You don’t cook, do you?' },
    { a: 'The teacher looks serious, {doesn’t he}?', b: 'The teacher looks serious, {isn’t he}?', q: 'Which one is right?', r: 'No auxiliary in the sentence (looks)? Use <b>do / does / did</b>: looks → doesn’t he?' },
    { a: 'I’m going to cry, {aren’t I}?', b: 'I’m going to cry, {amn’t I}?', q: 'Which one is right?', r: 'A special one: I’m … <b>aren’t I?</b> And Let’s … <b>shall we?</b>' }],
  regra: [['+ → −', 'It’s hot, isn’t it? · You’ve been here, haven’t you?'], ['− → +', 'You don’t cook, do you? · She can’t swim, can she?'], ['NO AUXILIARY', 'present: do / does · past: did (She came, didn’t she?)'], ['SPECIAL', 'I’m…, aren’t I? · Let’s…, shall we?']],
  armas: [['NÉ', 'It’s hot, no?', 'It’s hot, <b>isn’t it</b>?', 'English needs the right tag'], ['SAME', 'You’re new, are you?', 'You’re new, <b>aren’t you</b>?', '+ sentence, − tag'], ['DO', 'He likes it, isn’t he?', 'He likes it, <b>doesn’t he</b>?', 'likes → does'], ['PAST', 'You went, don’t you?', 'You went, <b>didn’t you</b>?', 'past → did']] };

var TRANSFORMA = { rot: 'ADD THE TAG', fim: 'Six friendly questions. Now say them with a falling voice: you’re almost sure.',
  itens: [
    { de: 'This kitchen is huge.', pista: '+ → − tag', para: 'This kitchen is huge, isn’t it?' },
    { de: 'You live near here.', pista: 'live → do', para: 'You live near here, don’t you?' },
    { de: 'You didn’t bring an apron.', pista: '− → + tag', para: 'You didn’t bring an apron, did you?' },
    { de: 'She can make bread.', pista: 'can → can’t', para: 'She can make bread, can’t she?' },
    { de: 'We’ve met before.', pista: 'have → haven’t', para: 'We’ve met before, haven’t we?' },
    { de: 'Let’s taste the sauce.', pista: 'Let’s → shall we', para: 'Let’s taste the sauce, shall we?' }] };

var CADEIRA = { itens: [
  { alvo: 'Start with the place: comment and add a tag.', dica: 'This place is amazing, isn’t it?', resp: 'It is! I love the big windows.' },
  { alvo: 'Guess that I’m new, with a tag.', dica: 'You’re new here, aren’t you?', resp: 'Yes, first night. Is it that obvious?' },
  { alvo: 'Guess something about my cooking.', dica: 'You don’t cook much, do you?', resp: 'Ha! Only instant noodles.' },
  { alvo: 'Guess something about my past, with did.', dica: 'You came with a friend, didn’t you?', resp: 'No, alone. My friend cancelled.' },
  { alvo: 'Make a suggestion with Let’s… shall we?', dica: 'Let’s work together, shall we?', resp: 'Great idea. You cut, I cook?' },
  { alvo: 'Say something about the food at the end.', dica: 'It smells delicious, doesn’t it?', resp: 'It does. I’m so proud of us!' }] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* B1 · You’re New, Aren’t You?: leitura · descobre · transforma · cadeira */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One sentence. Climb it one step at a time.', degraus: [{ r: 'say it', f: 'You’re new.', d: 'A plain sentence. You are almost sure.' }, { r: 'yes, so no', f: 'You’re new, <b>aren’t you</b>?', d: 'A yes sentence gets a no tag: the same helper, with n’t.' }, { r: 'no, so yes', f: 'You aren’t from here, <b>are you</b>?', d: 'A no sentence gets a yes tag. No n’t this time.' }, { r: 'other helper', f: 'You <b>like</b> onions, <b>don’t you</b>? · She <b>cooked</b>, <b>didn’t she</b>?', d: 'No be? Then the tag borrows do, does or did.' }, { r: 'the voice', f: 'You’re new, aren’t you? ↘ (I know) · ↗ (I ask)', d: 'Falling voice: you check. Rising voice: you really ask.' }], nota: 'The tag copies the helper of the sentence (<b>are, can, have, will</b>) and flips it: yes → <b>n’t</b>, no → plain. No helper? Use <b>do, does, did</b>. Special: I’m … <b>aren’t I</b>? · Let’s … <b>shall we</b>?', uso: { p: 'Your turn. You are new in a class. Say three friendly sentences to the person next to you, each with a tag.', molde: ['You’re …, aren’t you?', 'You don’t …, do you?', 'It was …, wasn’t it?'], ex: 'You’re the teacher’s friend, aren’t you? You don’t cook much, do you? This onion is huge, isn’t it?' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
