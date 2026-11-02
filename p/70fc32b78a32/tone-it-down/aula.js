/* ============================================================
   TONE IT DOWN · C1 · UNIT 9 (REGISTER AND STYLE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: eufemismo, understatement e ironia: not exactly cheap (= caro), a bit of a problem (= um
   problemão), could be better (= ruim), not the best idea, I’m not sure that’s wise; eufemismos sociais
   (let go = demitido, between jobs, passed away, economical with the truth, senior citizens);
   ironia (Oh, great. / Brilliant. / That went well.) e como reconhecê-la pelo contexto e entonação.
   Armadilha: levar a ironia ao pé da letra; "not bad" achando que é fraco (é elogio!); traduzir
   eufemismos ao pé da letra.
   O mundo: a avaliação de um restaurante feita por um crítico britânico muito educado.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 9, titulo: ['Tone It', 'Down'], tema: 'Understatement, euphemism and irony.',
  sub: 'When a British critic says the food was “not exactly memorable”, the restaurant is in trouble. Learn to decode polite understatement, kind euphemisms and dry irony, and to use them yourself.',
  placa: 'THE CRITIC’S TABLE', lugarConversa: 'TEA BY THE WINDOW', cor: '#a8b8c8', cor2: '#d3dbe3',
  chips: ['not exactly cheap', 'a bit of a problem', 'Oh, great.'], botao: 'Start the lesson', nota: 'Sometimes the softest words carry the hardest message.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'I · Honest or Polite?', t: 'Would you say it directly?', p: 'Choose A or B. Then say why: honesty or kindness?' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · The Review', t: 'A very polite critic.', p: 'Read the review out loud, in a calm British voice. Then decode it.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · What Does It Really Mean?', t: 'The words say one thing…', p: 'Compare A and B. What is the real message?' },
  { k: 'transforma', est: 'f', min: 7, img: 'capa', rot: 'IV · Tone It Down', t: 'Direct → diplomatic.', p: 'Read the direct sentence. Use the clue. Say the softer version.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'conversa', rot: 'V · The Hot Seat', t: 'Ask me. I’ll answer… very politely.', p: 'Ask your teacher about things. Decode the real meaning of each answer.' }
];
var PORTAS = [];

var ESCOLHA = [
  { a: 'tell a friend “your cake is terrible”', b: 'say “it’s not exactly my favorite”', chips: ['I’d say …', 'because …'], ex: 'The second one. My friend tried hard. It’s not exactly my favorite, but thanks!' },
  { a: 'say “he was fired”', b: 'say “he was let go”', chips: ['It sounds …', 'I’d use … when …'], ex: '“Let go”, if he is my friend. “Fired” in the news.' },
  { a: 'answer “Oh, great” when your flight is cancelled', b: 'answer “That’s terrible!”', chips: ['Irony: …', 'I’d probably say …'], ex: '“Oh, great.” With a sad face. Everybody understands!' }];

var LEITURA = { rot: 'THE SUNDAY CRITIC · “LA PERLA”', tipo: 'nota',
  antes: { q: 'If a friend’s restaurant is bad, would you tell them directly? What would you say?', h: 'Probably not directly. I’d say something like “the service could be faster”.' },
  texto: 'La Perla opened last month with a lot of noise. The room is lovely. The food is {not exactly memorable}.\nMy steak was {a little on the dry side}, and the sauce had {a rather interesting} amount of salt. The prices are {not exactly cheap}: £40 for a starter is {a bit of a stretch}.\nThe waiter, who {was clearly between jobs} as a comedian, forgot our wine twice. When it finally arrived, it was warm. {Oh, wonderful}.\nThe chef has {been economical with the truth} about his “fresh” fish: it tasted {anything but} fresh.\nWould I go back? {I’m not sure that would be wise}. But the bread was {not bad at all}.',
  perguntas: [
    { q: 'Did the critic like the food? How do you know?', h: 'No. “Not exactly memorable” means bad; the steak was dry, the sauce too salty.' },
    { q: 'What does he think of the prices?', h: 'Far too expensive.' },
    { q: 'What happened with the wine, and how does he react?', h: 'The waiter forgot it twice and it was warm. “Oh, wonderful” is irony: he was annoyed.' },
    { q: 'Is there anything positive at all?', h: 'The room, and the bread: “not bad at all” is a real compliment.' }],
  olha: 'Find every soft or ironic expression. For each one, say what the critic REALLY means.' };

var DESCOBRE = {
  pares: [
    { a: 'The food is {not exactly memorable}.', b: 'The food is {bad}.', q: 'Same message? Which one is more polite, and which one is more powerful?', r: 'Same message: bad. A is understatement: polite on the surface, but a native reader understands it perfectly. Often A hurts more!' },
    { a: 'The wine was warm. {Oh, wonderful}.', b: 'The wine was cold. {Oh, wonderful}!', q: 'The same words. Is the critic happy in both?', r: 'A is irony: the context (a problem) shows he means the opposite. B is sincere. Context and tone tell you which.' },
    { a: 'The bread was {not bad}.', b: 'The bread was {not good}.', q: 'Which one is a compliment?', r: 'A! “Not bad” (especially “not bad at all”) is positive in English. B is negative.' },
    { a: 'He {was let go} last week.', b: 'He {was fired} last week.', q: 'Same fact. When would you choose A?', r: 'A is a euphemism: kinder, used about someone you care about or in HR language. B is direct.' }],
  regra: [['UNDERSTATEMENT', 'not exactly cheap · a bit of a problem · could be better · a little on the dry side'], ['EUPHEMISM', 'let go (fired) · between jobs · passed away · economical with the truth (lied)'], ['IRONY', 'Oh, great. · Brilliant. · That went well. (context + flat tone)'], ['SURPRISE COMPLIMENTS', 'not bad (at all) · I wouldn’t say no to… · rather good']],
  armas: [
    ['LITERAL', '“Oh, great, the train is late.” = she is happy.', '“Oh, great, the train is late.” = <b>she is annoyed</b>.', 'Irony: the context says the opposite.'],
    ['NOT BAD', '“Not bad” = it was weak.', '“Not bad” = <b>it was good</b>.', 'A compliment in English.'],
    ['TOO DIRECT', 'Your presentation was terrible.', 'Your presentation <b>could have been a bit stronger</b>.', 'Understatement softens criticism.'],
    ['EUPHEMISM', 'My grandfather died last year. (at a formal event)', 'My grandfather <b>passed away</b> last year.', 'A softer, respectful word.']] };

var TRANSFORMA = { rot: 'DIRECT → SOFT', fim: 'Six messages, delivered gently. The meaning stays.',
  itens: [
    { de: 'This is very expensive.', pista: 'not exactly …', para: 'It’s not exactly cheap.' },
    { de: 'We have a huge problem.', pista: 'a bit of …', para: 'We have a bit of a problem.' },
    { de: 'That’s a stupid idea.', pista: 'I’m not sure …', para: 'I’m not sure that’s the best idea.' },
    { de: 'The service was bad.', pista: 'could be …', para: 'The service could be better.' },
    { de: 'He lied to the press.', pista: 'economical with …', para: 'He was economical with the truth.' },
    { de: 'She doesn’t have a job right now.', pista: 'between …', para: 'She’s between jobs at the moment.' }] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Tone It Down: escolha · leitura · descobre · transforma · cadeira */
var CADEIRA = { itens: [
  { alvo: 'Ask me about the last restaurant I went to.', dica: 'How was the last restaurant you went to?', resp: 'The food was… not exactly memorable. (Decode it!)' },
  { alvo: 'Ask me about my last flight.', dica: 'How was your last flight?', resp: 'Oh, wonderful. Six hours late and no food. (Irony!)' },
  { alvo: 'Ask me about my English when I was a beginner.', dica: 'How was your English at the start?', resp: 'It could have been better. Much better!' },
  { alvo: 'Ask me about a film I saw recently.', dica: 'What did you think of the last film you saw?', resp: 'Not bad at all, actually. (A compliment!)' },
  { alvo: 'Ask me about my city’s traffic.', dica: 'What’s the traffic like in your city?', resp: 'Let’s say it’s a bit of a challenge.' }] };
