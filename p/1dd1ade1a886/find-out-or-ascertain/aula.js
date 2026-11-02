/* ============================================================
   FIND OUT OR ASCERTAIN? · C1 · UNIT 9 (REGISTER AND STYLE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: phrasal verbs (fala) × verbos formais de uma palavra (escrita formal): find out / ascertain,
   look into / investigate, set up / establish, carry on / continue, put up with / tolerate,
   come up with / devise, go up / increase, point out / indicate, deal with / address, turn down / reject.
   O ponto: o brasileiro acha o verbo latino FÁCIL (investigar, estabelecer) e usa demais na fala,
   soando robótico; e foge do phrasal verb, soando livro. C1 = escolher pelo contexto.
   O mundo: a gerente de um hotel fala com a equipe (phrasal verbs) e depois escreve o relatório (formal).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 9, titulo: ['Find Out', 'or Ascertain?'], tema: 'Phrasal verbs or formal verbs?',
  sub: 'Brazilians find “investigate” easy and “look into” hard. But in a meeting, “We’ll look into it” sounds human; in a report, “We will investigate” sounds professional. Learn to switch.',
  placa: 'HOTEL ALMA · INCIDENT REPORT', lugarConversa: 'THE LIBRARY CORRIDOR', cor: '#c2b07f', cor2: '#e2d8bd',
  chips: ['look into / investigate', 'set up / establish', 'put up with / tolerate'], botao: 'Start the lesson', nota: 'Phrasal verbs for people. One-word verbs for documents.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Meeting and the Report', t: 'Same problem, two texts.', p: 'Read both texts out loud. Answer the questions. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · Spoken or Written?', t: 'Same meaning, different world.', p: 'Compare A and B. Where would you say A? Where would you write B?' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'III · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a row, across, down or diagonally, is a BINGO.' },
  { k: 'erros', est: 'f', min: 7, img: 'capa', rot: 'IV · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'conversa', rot: 'V · The Hot Seat', t: 'Now YOU ask me about my work.', p: 'Ask with phrasal verbs, like in a real conversation. React naturally.' }
];
var PORTAS = [];

var LEITURA = { rot: 'HOTEL ALMA · THE NOISE COMPLAINTS', tipo: 'nota',
  antes: { q: 'Have you ever complained in a hotel or a restaurant? What happened?', h: 'Yes, the room was noisy. They said they would check, but nothing happened.' },
  texto: 'THE TEAM MEETING (spoken)\n“OK, guests can’t {put up with} the noise anymore. We need to {find out} where it’s coming from. Dan, can you {look into} it? And let’s {come up with} a plan before prices {go up} in summer. If we {turn down} more bookings, we lose money.”\nTHE REPORT (written)\nFollowing several complaints, management will {investigate} the source of the noise in order to {ascertain} its cause. Guests should not be expected to {tolerate} such conditions. A plan will be {devised} and a quiet zone {established}. It should be {noted} that bookings have been {rejected} and that prices will {increase} in June.',
  perguntas: [
    { q: 'What is the problem at Hotel Alma?', h: 'Guests are complaining about noise.' },
    { q: 'What does the manager ask Dan to do?', h: 'To look into the problem: find out where the noise comes from.' },
    { q: 'Why is the problem urgent?', h: 'They are turning down bookings and losing money, and prices go up in summer.' },
    { q: 'What will the hotel create?', h: 'A plan and a quiet zone.' }],
  olha: 'Find the pairs: the spoken verb and its formal partner. put up with = tolerate…' };

var DESCOBRE = {
  pares: [
    { a: 'We’ll {look into} it.', b: 'We will {investigate} the matter.', q: 'Same meaning. Where would you hear A, and where would you read B?', r: 'A: in a meeting, on the phone, face to face: it sounds human. B: in a report, a letter, an official email.' },
    { a: 'Guests can’t {put up with} the noise.', b: 'Guests cannot {tolerate} the noise.', q: 'Which one sounds more natural if you say it to a colleague?', r: 'A. In conversation, phrasal verbs are normal. Saying “tolerate” to a colleague sounds a bit stiff, like a document.' },
    { a: 'Let’s {come up with} a plan.', b: 'A plan will be {devised}.', q: 'What else changes besides the verb?', r: 'B is passive and impersonal; A uses “let’s” and a phrasal verb. Formal writing often combines one-word verbs + passive.' },
    { a: 'We need to {ascertain} who called.', b: 'We need to {find out} who called.', q: 'You’re talking to a friend. Which one?', r: 'B. ascertain in a chat sounds funny, like a lawyer. Brazilians often overuse formal verbs in speech because they look like Portuguese.' }],
  regra: [['SPEAK', 'find out · look into · set up · carry on · put up with · come up with'], ['WRITE (FORMAL)', 'ascertain · investigate · establish · continue · tolerate · devise'], ['MORE PAIRS', 'go up / increase · point out / indicate · deal with / address · turn down / reject'], ['THE RULE', 'people → phrasal verbs · documents → one-word verbs']],
  armas: [
    ['TOO STIFF', '(to a friend) I will ascertain the time of the film.', '(to a friend) I’ll <b>find out</b> the time of the film.', 'Formal verbs in chat sound robotic.'],
    ['TOO CASUAL', '(report) The team will look into the stuff.', '(report) The team will <b>investigate</b> the matter.', 'Reports: one-word verbs, precise nouns.'],
    ['PARTICLE', 'I can’t put up the noise.', 'I can’t put up <b>with</b> the noise.', 'put up with: three parts.'],
    ['PARTICLE', 'She came up a great idea.', 'She came up <b>with</b> a great idea.', 'come up with + idea.']] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Find Out or Ascertain?: leitura · descobre · bingo · erros · cadeira */
var BINGO = [['formal of “find out”', 'ascertain / discover'], ['formal of “look into”', 'investigate'], ['formal of “set up”', 'establish'], ['formal of “put up with”', 'tolerate'], ['spoken of “devise”', 'come up with'], ['spoken of “increase”', 'go up'], ['spoken of “reject”', 'turn down'], ['spoken of “continue”', 'carry on'], ['formal of “point out”', 'indicate']];
var ERROS = { tipo: 'nota', rot: 'DRAFT REPORT · HOTEL ALMA', partes: ['Management will ', ['look into the stuff', 'investigate the matter', 'Report: one-word verb + precise noun.'], ' and try to ', ['find out', 'ascertain', 'Formal: ascertain / determine.'], ' the cause. Guests should not have to ', ['put up with', 'tolerate', 'Formal: tolerate.'], ' this. A plan will be ', ['come up with', 'devised', 'Formal and passive: devised.'], ' and a quiet zone ', ['set up', 'established', 'Formal: established.'], '. Prices will ', ['go up', 'increase', 'Formal: increase.'], ' in June.'] };
var CADEIRA = { itens: [
  { alvo: 'Ask me about a problem I had to look into at work.', dica: 'Have you ever had to look into a problem at work?', resp: 'Yes, last month I looked into why our website was so slow.' },
  { alvo: 'Ask me something I can’t put up with.', dica: 'What can’t you put up with?', resp: 'Loud phone calls on the bus!' },
  { alvo: 'Ask me how I came up with an idea.', dica: 'How did you come up with that idea?', resp: 'I came up with it in the shower, like all my ideas.' },
  { alvo: 'Ask me what I found out recently.', dica: 'What have you found out recently?', resp: 'I found out my neighbor is a famous chef!' },
  { alvo: 'Ask me if I ever turned down a job.', dica: 'Have you ever turned down a job offer?', resp: 'Once. I turned it down because it was too far.' }] };
