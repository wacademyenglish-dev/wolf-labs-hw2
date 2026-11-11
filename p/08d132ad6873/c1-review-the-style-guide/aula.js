/* ============================================================
   REVIEW · C1 · UNIT 9 · THE STYLE GUIDE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: bingo · leitura · transforma · escolha · pode.
   Unidade 9 (Registro e estilo): formal × amigável; fala × escrita (gonna, wanna, kinda); phrasal verbs ×
   verbos formais (look into / investigate); linguagem de contrato (shall, subject to, prior to);
   eufemismo, understatement e ironia; expressões de opinião (I’m all for it, I couldn’t care less).
   O mundo: a página do guia de estilo de uma editora (inventada) com o que fazer e não fazer; o aluno
   troca o registro de frases nos dois sentidos.
   ============================================================ */
var REV = { nivel: 'C1', unidade: 9, titulo: ['The Style', 'Guide'], tema: 'Register and style', placa: 'HOUSE STYLE · PAGE 1', lugarConversa: 'THE READING NOOK', cor: '#b8a2d0', cor2: '#dcd0e8',
  sub: 'Unit 9 review. Your new job: editor at a publishing house. Before you start, read their style guide. Then switch every sentence to the right voice.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'I · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a line, across, down or diagonal, is a BINGO.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · The Style Guide', t: 'One page. Six rules.', p: 'Read the guide out loud. Answer the questions. Then find the examples of each register.' },
  { k: 'transforma', est: 'f', min: 8, img: 'conversa', rot: 'III · Switch the Voice', t: 'Formal ↔ friendly, written ↔ spoken.', p: 'Read the sentence and the clue. Say it in the other register.' },
  { k: 'escolha', est: 'o', min: 7, img: 'conversa', rot: 'IV · Which Voice?', t: 'A or B: which voice fits?', p: 'Choose A or B. Then explain: who is it for? where?' },
  { k: 'gx', est: 'f', min: 3, img: 'conversa', rot: 'V · The Style Card', t: 'Four lines from Unit 9.', p: 'Read one line at a time. Then keep the card in the corner for the last page.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var LEITURA = { rot: 'NORTHWIND BOOKS · HOUSE STYLE GUIDE · P. 1', tipo: 'nota',
  antes: { q: 'Does your company or school have rules for how to write? What are they?', h: 'Not official ones, but we never use emojis with clients, and we always say “Dear”.' },
  texto: '1. Letters to authors: open with {Dear Ms. Reed}, close with {Kind regards}. Never mix with {Cheers}.\n2. Speak like a person, write like a professional: in meetings say “we’ll {look into} it”; in reports write “we will {investigate}”.\n3. {Gonna} and {wanna} are fine in voice messages to colleagues, never in print.\n4. Contracts: “The Author {shall} deliver the manuscript {prior to} 1 May, {subject to} clause 4.” Explain it to the author in plain English: you must send it before May.\n5. Reviews: be honest but kind. “The ending is {not exactly} memorable” is acceptable; “The ending is terrible” is not.\n6. Opinion pieces: show your shade. {I’m all for} clear writing; {I couldn’t care less} about long words.',
  perguntas: [
    { q: 'How should letters to authors open and close?', h: 'Dear… and Kind regards. Never mixed with Cheers.' },
    { q: 'What’s the difference between rule 2’s two verbs?', h: 'look into = spoken; investigate = written, formal.' },
    { q: 'What does clause 4 really mean for the author?', h: 'You must send the manuscript before 1 May, depending on clause 4.' },
    { q: 'How should reviewers criticize?', h: 'Honestly but kindly, with mild wording: “not exactly memorable”.' }],
  olha: 'Find one example of each: formal, friendly, spoken, contract, understatement, opinion.' };

var TRANSFORMA = { rot: 'SWITCH THE REGISTER', fim: 'Six voices, one message each time. That’s style.',
  itens: [
    { de: 'Hi Jo! Can we put off the meeting?', pista: '→ formal email', para: 'Dear Ms. Jones, would it be possible to postpone the meeting?' },
    { de: 'We will investigate the matter.', pista: '→ spoken, to a colleague', para: 'We’ll look into it.' },
    { de: 'I’m gonna send it tomorrow.', pista: '→ written, to a client', para: 'I am going to send it tomorrow.' },
    { de: 'The Tenant shall pay prior to the 5th.', pista: '→ plain English', para: 'You must pay before the 5th.' },
    { de: 'The service was terrible.', pista: '→ understatement', para: 'The service could have been better.' },
    { de: 'I don’t care at all about celebrity news.', pista: '→ idiom', para: 'I couldn’t care less about celebrity news.' }] };

var ESCOLHA = [
  { a: '“Just a heads-up: the report’s late!”', b: '“I am writing to let you know that the report will be late.”', chips: ['For a …, I’d use …', 'because it’s …'], ex: 'To my manager: B. To my team chat: A.' },
  { a: '“The food was terrible.”', b: '“The food was not exactly memorable.”', chips: ['In a review, …', 'To a friend, …'], ex: 'In a public review, B. To my best friend, A!' },
  { a: '“We’ll look into it.”', b: '“The matter will be investigated.”', chips: ['On the phone, …', 'In a report, …'], ex: 'On the phone with a customer, A. In the official report, B.' },
  { a: '“I’m all for it.”', b: '“I am in favour of this proposal.”', chips: ['In a meeting, …', 'In writing, …'], ex: 'In a relaxed meeting, A. In the minutes, B.' }];

var PODE = [
  'I can switch between formal and friendly without changing the message.',
  'I can choose spoken or written forms: gonna / going to, look into / investigate.',
  'I can read contract language and explain it in plain English.',
  'I can use understatement, euphemism and recognize irony.',
  'I can show the temperature of my opinion: all for it, in two minds, couldn’t care less.'
];

/* MECÂNICAS VARIADAS */
/* C1 R9: bingo · leitura · transforma · escolha */
var BINGO = [['formal of “Can we put it off?”', 'Would it be possible to postpone it?'], ['spoken of “investigate”', 'look into'], ['written of “gonna”', 'going to'], ['plain English of “shall”', 'must'], ['plain English of “prior to”', 'before'], ['understatement of “very expensive”', 'not exactly cheap'], ['euphemism of “fired”', 'let go'], ['“I don’t care at all” (idiom)', 'I couldn’t care less'], ['friendly of “I am writing to let you know”', 'Just a heads-up']];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep from Unit 9.', rotulo: 'Register and style', linhas: ['spoken: <b>gonna, wanna, kinda</b> (friends, films) · written for work: <b>going to, want to, rather</b>', 'talk: <b>find out, look into, carry on</b> · report: <b>ascertain, investigate, continue</b>', 'contract: <b>shall</b> = must · <b>subject to</b> = only if · <b>prior to</b> + -ing', 'tone: <b>not exactly cheap</b> (= expensive) · <b>I’m all for it</b> · <b>I couldn’t care less</b> (= I do not care)'], uso: { p: 'Your turn. Say one sentence to a friend and then the same idea for your boss. Change the register.', molde: ['I’m gonna …', 'I would like to …'], ex: 'I’m gonna be late, sorry! I would like to inform you that I will arrive at ten.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
