/* ============================================================
   WITH ALL DUE RESPECT · C1 · UNIT 5 (DISTANCE AND DIPLOMACY) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: discordar com diplomacia: With all due respect, …; I take your point, but…; I see it slightly
   differently; I’m not sure I’d go that far; Correct me if I’m wrong, but…; That’s one way of looking
   at it; I hear what you’re saying. However, … ; e suavizadores: a bit, slightly, perhaps, might.
   Armadilha: "With all due respect" usado como insulto disfarçado (é forte!); "You are wrong" direto;
   "I don’t agree with you" seco; "I agree with you, but" sem suavizar.
   O mundo: a reunião do conselho do condomínio sobre a reforma do jardim; o aluno é o mediador.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 5, titulo: ['With All', 'Due Respect'], tema: 'Disagree without a war.',
  sub: '“You’re wrong” ends a conversation. “I see it slightly differently” keeps it going. Read a tense residents’ meeting, notice how the clever people disagree, then mediate one yourself.',
  placa: 'RESIDENTS’ MEETING · 8 PM', lugarConversa: 'THE HOTEL LOUNGE', cor: '#c4a6e0', cor2: '#e1d3f0',
  chips: ['I take your point, but…', 'I see it slightly differently', 'I’m not sure I’d go that far'], botao: 'Start the lesson', nota: 'At C1 you can say no without making an enemy.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Meeting', t: 'The garden: pool or vegetables?', p: 'Read the meeting out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · Direct or Diplomatic?', t: 'Same message, different temperature.', p: 'Compare A and B. How would the other person feel?' },
  { k: 'transforma', est: 'f', min: 7, img: 'capa', rot: 'III · Cool It Down', t: 'Hot → diplomatic.', p: 'Read the direct sentence. Use the clue. Say the diplomatic version.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'IV · The Mediator', t: 'Three neighbors. Three strong opinions.', p: 'Ask each neighbor five questions. Your teacher is the neighbor. Then answer each one, diplomatically.' }
];
var PORTAS = [];

var LEITURA = { rot: 'GREEN TOWERS · RESIDENTS’ MEETING · NOTES', tipo: 'chat',
  antes: { q: 'Think of a meeting or a family dinner where people disagreed. How did it go?', h: 'Badly! Everybody talked at the same time and nobody listened.' },
  texto: 'MR. COSTA: The garden is useless. We need a swimming pool. End of story.\nDR. RAO: {I take your point}, Mr. Costa, {but} a pool would cost a fortune.\nMR. COSTA: Nonsense. Everyone wants a pool.\nMS. LEE: {I’m not sure I’d go that far}. Half of us are over seventy.\nDR. RAO: {Correct me if I’m wrong, but} didn’t we vote for a vegetable garden last year?\nMR. COSTA: {With all due respect}, Doctor, that vote was a joke.\nMS. LEE: {I see it slightly differently}. It was a fair vote. {Perhaps we could} look at both ideas properly?\nDR. RAO: {That’s one way of looking at it}. {I hear what you’re saying}, Mr. Costa. {However}, the budget is the budget.',
  perguntas: [
    { q: 'What does Mr. Costa want, and how does he say it?', h: 'A swimming pool. He is very direct: “End of story”, “Nonsense”.' },
    { q: 'What are the two arguments against the pool?', h: 'It would cost a fortune, and half the residents are over seventy.' },
    { q: 'What happened last year?', h: 'They voted for a vegetable garden.' },
    { q: 'Who is the best at disagreeing? Why?', h: 'Probably Ms. Lee: she disagrees calmly and offers a solution.' }],
  olha: 'Find eight ways to disagree or to soften. Which one is actually quite aggressive?' };

var DESCOBRE = {
  pares: [
    { a: 'You’re wrong.', b: '{I see it slightly differently}.', q: 'Same message. How does the other person feel after A, and after B?', r: 'A attacks the person. B talks about your view (I see) and makes the difference small (slightly). The conversation continues.' },
    { a: 'I don’t agree. A pool is expensive.', b: '{I take your point, but} a pool would be expensive.', q: 'What two things does B do before disagreeing?', r: 'It recognizes the other idea (I take your point) and uses would to soften the fact.' },
    { a: 'Everyone wants a pool? {That’s not true}.', b: 'Everyone? {I’m not sure I’d go that far}.', q: 'Why is B more effective in a meeting?', r: 'B disagrees with the exaggeration, not with the person. It sounds reasonable, so others join you.' },
    { a: '{With all due respect}, that vote was a joke.', b: '{With respect}, I think the vote was fair.', q: 'Careful: “with all due respect” is not as polite as it looks. Why?', r: 'In real life it often comes before something rude. It signals strong disagreement. Use it rarely, and never with a smile you don’t mean.' }],
  regra: [['RECOGNIZE FIRST', 'I take your point, but… · I hear what you’re saying. However, …'], ['MAKE IT SMALL', 'I see it slightly differently · I’m not sure I’d go that far'], ['ASK, DON’T ATTACK', 'Correct me if I’m wrong, but… · Couldn’t we…?'], ['SOFTENERS', 'a bit · slightly · perhaps · might · would']],
  armas: [
    ['DIRECT', 'You are completely wrong.', 'I <b>see it slightly differently</b>.', 'Talk about your view, not their mistake.'],
    ['FLAT', 'I don’t agree with you.', 'I’m <b>not sure I agree</b>, actually.', 'Add doubt: not sure, actually.'],
    ['FACT', 'That is too expensive.', 'That <b>might be a bit</b> expensive.', 'might + a bit: softer.'],
    ['RESPECT', 'With all due respect, you are an idiot.', '<b>I take your point, but</b> I disagree.', 'Don’t hide an insult behind “with all due respect”.']] };

var TRANSFORMA = { rot: 'HOT → DIPLOMATIC', fim: 'Six sentences that keep the peace.',
  itens: [
    { de: 'You’re wrong about the budget.', pista: 'I see it …', para: 'I see the budget slightly differently.' },
    { de: 'That’s a terrible idea.', pista: 'I’m not sure …', para: 'I’m not sure that’s the best idea.' },
    { de: 'No. We voted for a garden. Remember?', pista: 'Correct me if …', para: 'Correct me if I’m wrong, but didn’t we vote for a garden?' },
    { de: 'Everybody hates the new rules!', pista: 'I’m not sure I’d …', para: 'I’m not sure I’d go that far.' },
    { de: 'Your plan is too expensive.', pista: 'I take your point, but …', para: 'I take your point, but the plan might be a bit expensive.' },
    { de: 'Stop talking about the pool.', pista: 'Perhaps we could …', para: 'Perhaps we could look at the other ideas too?' }] };

var MISSAO = { pede: 'THE MEDIATOR · ASK FIVE QUESTIONS', quem: 'neighbor', depois: 'Answer each one diplomatically',
  campos: [
    { c: 'quer', r: 'WANTS', q: 'What would you like to see in the garden?', f: 'What do you want?' },
    { c: 'porque', r: 'WHY', q: 'Why is that so important to you?', f: 'Why?' },
    { c: 'contra', r: 'AGAINST', q: 'What do you think of the other ideas?', f: 'The other ideas?' },
    { c: 'aceita', r: 'COMPROMISE', q: 'Is there anything you could accept?', f: 'A compromise?' },
    { c: 'medo', r: 'WORRY', q: 'What worries you most?', f: 'Your worry?' }],
  itens: [
    { k: 'NEIGHBOR 1', tag: 'MR. COSTA, FLAT 12', ele: 'He', resposta: 'I take your point, Mr. Costa: a pool would be lovely in summer. However, it might be a bit expensive for everyone. Perhaps we could look at a small pool for children?', v: { quer: 'a swimming pool', porque: 'his grandchildren visit every summer', contra: 'the vegetable garden is “a waste of space”', aceita: 'maybe a small pool, but not vegetables', medo: 'that the building looks old and boring' }, diz: '“A swimming pool, obviously.” · “My grandchildren visit every summer.” · “The vegetable garden is a waste of space.” · “Maybe a small pool. But no vegetables!” · “That our building looks old and boring.”' },
    { k: 'NEIGHBOR 2', tag: 'MS. LEE, FLAT 3', ele: 'She', resposta: 'I hear what you’re saying, Ms. Lee, and I agree the vote was fair. I see the shade slightly differently, though: perhaps we could have a garden with a few trees for both?', v: { quer: 'the vegetable garden they voted for', porque: 'the vote was fair and older people need a quiet place', contra: 'a pool is noisy and expensive', aceita: 'benches and a little shade, too', medo: 'that nobody respects votes anymore' }, diz: '“The vegetable garden we voted for.” · “The vote was fair, and older people need a quiet place.” · “A pool is noisy and expensive.” · “Benches and a little shade, maybe.” · “That nobody respects votes anymore.”' },
    { k: 'NEIGHBOR 3', tag: 'DR. RAO, FLAT 7', ele: 'He', resposta: 'Correct me if I’m wrong, Dr. Rao, but your main concern is the budget, not the idea. I’m not sure I’d say the garden is impossible: perhaps we could get prices for both plans first?', v: { quer: 'whatever is cheaper', porque: 'the building fund is almost empty', contra: 'everything is too expensive right now', aceita: 'a simple garden first, a pool in five years', medo: 'a big monthly increase for everyone' }, diz: '“Honestly? Whatever is cheaper.” · “The building fund is almost empty.” · “Everything is too expensive right now.” · “A simple garden first. A pool in five years, maybe.” · “A big monthly increase for everyone.”' }],
  relato: { titulo: 'THE MEETING · YOUR DIPLOMATIC ANSWER',
    pede: function (x) { return x.tag.split(',')[0].replace(/\b([A-Z])([A-Z]+)\b/g, function (m, a, b) { return a + b.toLowerCase(); }) + ' looks at you. What do you say?'; },
    chips: function () { return ['I take your point, but …', 'I hear what you’re saying. However, …', 'I see it slightly differently.', 'I’m not sure I’d go that far.', 'Correct me if I’m wrong, but …', 'Perhaps we could …']; },
    modelo: function (x) { return x.resposta; } },
  nao: { wrong: '“You are wrong” → I see it slightly DIFFERENTLY.', flat: '“I don’t agree” → I’m not SURE I agree.', respect: '“With all due respect, you are…” → careful: it sounds aggressive.' },
  fim: 'Decision: a garden with benches and shade now, prices for a small pool next year. Nobody shouted. That’s C1 diplomacy.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · With All Due Respect: leitura · descobre · transforma · missao */
