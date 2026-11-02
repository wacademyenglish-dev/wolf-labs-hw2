/* ============================================================
   NEITHER YES NOR NO · C1 · UNIT 5 (DISTANCE AND DIPLOMACY) · LIVE CLASS  16/10/2026
   Aula nova do livro C1 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: distância com a passiva sem agente (The booking was cancelled; It has been decided that…;
   Your concerns have been passed on) e neither… nor / either… or / not only… but also para não tomar partido.
   E o contrário: quando a distância vira fuga (Mistakes were made) e quando assumir é melhor (We made a mistake).
   O mundo: a dona do restaurante Casa Lume responde em público a uma avaliação de uma estrela.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 5, titulo: ['Neither Yes', 'nor No'], tema: 'Polite distance: the agentless passive and neither… nor.',
  sub: 'A one-star review says the Casa Lume ruined a birthday dinner. The owner has to answer in public, without lying, without blaming her staff and without starting a war. Read her reply, notice where the people disappear, and decide when distance helps and when it hides.',
  placa: 'CASA LUME · 1 STAR', lugarConversa: 'THE EMPTY DINING ROOM', cor: '#f2c14e', cor2: '#f8e2a6',
  chips: ['It was decided that…', 'neither… nor…', 'Distance or honesty?'], botao: 'Start the lesson', nota: 'Distance can be polite, or it can hide something. “Mistakes were made” is famous for the second one.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · The Owner’s Reply', t: 'One star, and a careful answer.', p: 'Read the review and the reply out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'II · Where Did the People Go?', t: 'Who did it? The sentence doesn’t say.', p: 'Compare A and B. Which one has more distance? When is that good, and when is it a problem?' },
  { k: 'transforma', est: 'f', min: 8, img: 'conversa', rot: 'III · Cool and Professional', t: 'Personal → distant.', p: 'Read the personal sentence. Use the clue. Say the distant version.' },
  { k: 'escolha', est: 'o', min: 8, img: 'capa', rot: 'IV · Distance or Honesty?', t: 'Two replies. Which is better here?', p: 'Choose A or B for each situation. Say why. There is no single right answer.' }
];
var PORTAS = [];

var LEITURA = { rot: 'REVIEWS · CASA LUME · ★☆☆☆☆', tipo: 'nota',
  antes: { q: 'Have you ever written a bad review? Did anybody answer?', h: 'Once, for a hotel. They never answered.' },
  texto: 'REVIEW: Our table was given to another group, we waited an hour, and NOBODY apologized. Worst birthday ever.\nREPLY FROM THE OWNER: Dear Ms. Duarte, thank you for writing.\nI have checked what happened. Your booking {was moved} to the 9 p.m. list by a system error, and {it was not noticed} until you arrived.\n{Neither} the error {nor} the long wait is acceptable, and {it has been decided} that every booking will now {be confirmed} by phone.\nYour comments {have been passed on} to the whole team. {Not only} the hosts {but also} the kitchen will receive new training.\nWe would love to welcome you back, {either} for lunch {or} for dinner, as our guests.\nAnd you are right about one thing: someone should have apologized that night. I apologize now. — Lia, owner',
  perguntas: [
    { q: 'What three things went wrong for Ms. Duarte?', h: 'Her table was given to another group, she waited an hour, and nobody apologized.' },
    { q: 'What caused the problem, according to the owner?', h: 'A system error moved the booking to the 9 p.m. list.' },
    { q: 'What will change at the restaurant?', h: 'Every booking will be confirmed by phone, and the team will get new training.' },
    { q: 'Where does the owner stop using distance? Why?', h: 'At the end: “I apologize now.” A personal apology is more honest here.' }],
  olha: 'Find the sentences where we don’t know WHO did it. Then find neither… nor, not only… but also, either… or.' };

var DESCOBRE = {
  pares: [
    { a: 'Our host moved your booking.', b: 'Your booking {was moved}.', q: 'What does B hide? Is that good here?', r: 'B doesn’t name the person. Good: the owner protects her staff in public. The responsibility stays with the restaurant.' },
    { a: 'I decided that we will confirm every booking.', b: '{It has been decided that} every booking {will be confirmed}.', q: 'How does B sound?', r: 'Official, impersonal, like a policy. Useful for rules; cold for an apology.' },
    { a: '{Mistakes were made}.', b: '{We made a mistake}.', q: 'Which one sounds more honest? Why is A famous?', r: 'A is the classic way to avoid responsibility (politicians love it). B takes responsibility. At C1 you choose on purpose.' },
    { a: 'The error {and} the wait {aren’t} acceptable.', b: '{Neither} the error {nor} the wait {is} acceptable.', q: 'What does B add?', r: '<b>Neither… nor…</b> rejects both, elegantly. Formal English: the verb agrees with the nearest noun (nor the wait IS).' }],
  regra: [['AGENTLESS PASSIVE', 'was moved · has been decided · have been passed on'], ['IT + PASSIVE', 'It has been decided / agreed / noted that…'], ['NEITHER… NOR', 'Neither the error nor the wait is acceptable.'], ['NOT ONLY… BUT ALSO · EITHER… OR', 'Not only the hosts but also the kitchen… · either for lunch or for dinner']],
  armas: [['NEITHER', 'Neither the error or the wait', 'Neither the error <b>nor</b> the wait', 'neither → nor'], ['DOUBLE NEGATIVE', 'Neither… nor isn’t acceptable', 'Neither… nor <b>is</b> acceptable', 'neither already negative'], ['PASSIVE', 'It has decided that…', 'It has <b>been</b> decided that…', 'passive: been + participle'], ['HONESTY', 'Mistakes were made. (for a personal apology)', '<b>I made a mistake. I’m sorry.</b>', 'sometimes distance hides']] };

var TRANSFORMA = { rot: 'PERSONAL → DISTANT', fim: 'Six sentences with professional distance. Now decide: which ones would you say personally instead?',
  itens: [
    { de: 'Our waiter forgot your order.', pista: 'Your order … (passive)', para: 'Your order was not passed to the kitchen.' },
    { de: 'We decided to close on Mondays.', pista: 'It has been …', para: 'It has been decided that we will close on Mondays.' },
    { de: 'I sent your comments to the team.', pista: 'Your comments have …', para: 'Your comments have been passed on to the team.' },
    { de: 'The food wasn’t good and the service wasn’t good.', pista: 'Neither … nor …', para: 'Neither the food nor the service was good enough.' },
    { de: 'The hosts will get training. The kitchen will get training too.', pista: 'Not only … but also …', para: 'Not only the hosts but also the kitchen will receive training.' },
    { de: 'Come for lunch, or come for dinner.', pista: 'either … or …', para: 'You are welcome either for lunch or for dinner.' }] };

var ESCOLHA = [
  { a: '“Your booking was cancelled due to a system error.”', b: '“Our new host cancelled your booking by mistake.”', chips: ['A is better here, because …', 'B is better, because …'], ex: 'A. In public, you protect your staff. The restaurant takes the responsibility, not one person.' },
  { a: '“Mistakes were made.”', b: '“I made a mistake, and I’m sorry.”', chips: ['A sounds …', 'B sounds …'], ex: 'B. A personal apology needs a person. A sounds like hiding.' },
  { a: '“It has been decided that prices will increase.”', b: '“We have decided to increase prices.”', chips: ['For a notice, …', 'For a loyal client, …'], ex: 'A for a notice on the door; B in a personal email to a loyal client.' },
  { a: '“Neither confirm nor deny.”', b: '“Tell the whole story.”', chips: ['When a journalist asks …', 'When a friend asks …'], ex: 'With a journalist, sometimes neither confirm nor deny. With a friend, tell the story.' }];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Neither Yes nor No: leitura · descobre · transforma · escolha */
