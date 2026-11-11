/* ============================================================
   REVIEW · C1 · UNIT 1 · THE COPY EDITOR · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: memoria · missao · erros · cartao · pode.
   Unidade 1 (Precisão: a palavra certa): advérbio + adjetivo (eerily quiet, painfully slow), expressões
   fixas e idioms, idioms de negócio (move the needle), linguagem vaga na fala (kind of, sort of, and
   stuff), colocações adjetivo + substantivo (heavy rain, strong coffee) e verbo + substantivo formais
   (raise a concern, draw a conclusion).
   A missão: o aluno é o editor de texto de uma revista (inventada) e conversa com três redatores sobre
   o texto de cada um; no fim escreve a nota do editor.
   ============================================================ */
var REV = { nivel: 'C1', unidade: 1, titulo: ['The Copy', 'Editor'], tema: 'Precision: the right word', placa: 'THE EDIT · ISSUE 48', lugarConversa: 'THE EDITORIAL OFFICE', cor: '#e2a86c', cor2: '#f3d3ae',
  sub: 'Unit 1 review. You are the copy editor at a magazine. Three writers, three drafts, and too many weak words. Make every sentence precise.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'I · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Writers', t: 'Three writers. Three drafts. Talk to them.', p: 'Ask each writer five questions. Your teacher is the writer. Then give your editing advice.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the correct form, then tap.' },
  { k: 'cartao', est: 'w', min: 8, img: 'conversa', rot: 'IV · The Editor’s Note', t: 'Write a short note to one writer.', p: 'Four lines. Use at least four precise word pairs from the unit.' },
  { k: 'gx', est: 'f', min: 3, img: 'conversa', rot: 'V · The Editor’s Card', t: 'Four lines from Unit 1.', p: 'Read one line at a time. Then keep the card in the corner for the last page.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'THE EDIT · ASK FIVE QUESTIONS', quem: 'writer', depois: 'Give your editing advice',
  campos: [
    { c: 'tema', r: 'THE PIECE', q: 'What’s your piece about, in one sentence?', f: 'Your piece?' },
    { c: 'fraco', r: 'WEAK WORDS', q: 'Which sentence do you think is weakest?', f: 'The weakest sentence?' },
    { c: 'idiom', r: 'AN IDIOM', q: 'Is there an idiom that could make it more vivid?', f: 'An idiom?' },
    { c: 'vago', r: 'TOO VAGUE?', q: 'Is any part too vague, kind of “and stuff”?', f: 'Too vague?' },
    { c: 'prazo', r: 'DEADLINE', q: 'Can you meet the Friday deadline?', f: 'Friday: OK?' }],
  itens: [
    { k: 'WRITER 1', tag: 'THE TRAVEL WRITER', ele: 'She', conselho: 'Change “very quiet village” to “eerily quiet village”, and “strong rain” to “heavy rain”. Cut “and stuff”. Then it’s perfect, and I know you’ll meet the deadline.', v: { tema: 'a village in the mountains that empties in winter', fraco: '“the village was very quiet”', idiom: '“off the beaten track”', vago: '“we saw old houses and stuff”', prazo: 'yes, she always meets deadlines' }, diz: '“A mountain village that empties in winter.” · “Probably: the village was very quiet.” · “Maybe off the beaten track?” · “Yes… we saw old houses and stuff.” · “Yes, I always meet my deadlines.”' },
    { k: 'WRITER 2', tag: 'THE BUSINESS WRITER', ele: 'He', conselho: 'Your piece is strong, but “did a review” should be “carried out a review”, and “took conclusions” should be “drew conclusions”. The idiom “move the needle” works well here.', v: { tema: 'a small company that doubled its sales', fraco: '“the company did a review and took conclusions”', idiom: '“move the needle”', vago: '“they kind of changed things”', prazo: 'he needs until Monday' }, diz: '“A small company that doubled its sales.” · “The company did a review and took conclusions.” · “Move the needle! That’s the idea.” · “They kind of changed things, I guess.” · “Honestly, I need until Monday.”' },
    { k: 'WRITER 3', tag: 'THE FOOD WRITER', ele: 'She', conselho: 'Lovely piece. Make it precise: “bitterly cold” instead of “very very cold”, and “I was deeply grateful” instead of “I was very thankful”. And off the top of your head is fine in speech, but not in print.', v: { tema: 'a soup kitchen open every winter night', fraco: '“it was very very cold and I was very thankful”', idiom: '“off the top of my head” (too spoken for print)', vago: '“sort of a community place”', prazo: 'yes, but she wants one more day' }, diz: '“A soup kitchen, open every winter night.” · “It was very very cold, and I was very thankful.” · “I wrote: off the top of my head, there were a hundred people.” · “I call it sort of a community place.” · “Yes, but one more day would help.”' }],
  relato: { titulo: 'THE EDITOR · YOUR ADVICE',
    pede: function (x) { return 'So, editor, what should I change?'; },
    chips: function () { return ['Change … to …', 'heavy / strong / deeply / bitterly / eerily …', 'carry out / draw / raise …', 'Cut “and stuff” / “kind of”', 'The idiom … works well.']; },
    modelo: function (x) { return x.conselho; } },
  nao: { strong: '“strong rain” → HEAVY rain.', take: '“took conclusions” → DREW conclusions.', stuff: '“and stuff” in print → cut it, or be specific.' },
  fim: 'Three drafts, edited and precise. Collocations, idioms and fewer vague words: all of Unit 1 in one magazine.' };

var CARTAO = { ph: 'Dear Lia,\nYour piece is beautiful. A few changes: “very quiet” → eerily quiet, “strong rain” → heavy rain.\nPlease cut “and stuff”: be specific, name the houses.\nI’m deeply grateful for your work. Highly recommended for the cover!', rot: 'My editor’s note',
  chips: ['eerily ', 'painfully ', 'heavy ', 'strong ', 'deeply ', 'bitterly ', 'highly ', 'carry out ', 'draw a conclusion', 'raise a concern', 'move the needle', 'off the beaten track'],
  perg: ['THE EDITOR’S NOTE', 'Write to one of the writers. What should change? What is already precise?'],
  exemploRot: 'WEAK → PRECISE', exemplo: [['very quiet', 'eerily quiet'], ['strong rain', 'heavy rain'], ['did a review', 'carried out a review'], ['took conclusions', 'drew conclusions'], ['and stuff', 'be specific']],
  modelo: 'Dear Lia, your piece is beautiful. A few changes: “very quiet” → eerily quiet, “strong rain” → heavy rain.<br>Please cut “and stuff”: be specific, name the houses.<br>I’m deeply grateful for your work. Highly recommended for the cover!' };

var PODE = [
  'I can choose precise adverb + adjective pairs: eerily quiet, painfully slow.',
  'I can use natural collocations: heavy rain, strong coffee, deeply grateful.',
  'I can use formal verb + noun pairs: carry out a review, draw a conclusion.',
  'I can use idioms in context, and I know when they are too spoken for writing.',
  'I can spot vague language (kind of, and stuff) and make it specific.'
];

/* MECÂNICAS VARIADAS */
/* C1 R1: memoria · missao · erros · cartao */
var PARES = [
  ['eerily', 'quiet', 'At night the village was eerily quiet.'],
  ['heavy', 'rain', 'We drove for hours in heavy rain.'],
  ['deeply', 'grateful', 'I’m deeply grateful for your help.'],
  ['draw', 'a conclusion', 'It’s too early to draw a conclusion.'],
  ['move', 'the needle', 'The new ad didn’t really move the needle.'],
  ['off the beaten', 'track', 'We found a café off the beaten track.']];
var ERROS = { tipo: 'nota', rot: 'DRAFT · “THE VILLAGE THAT SLEEPS” · NOT EDITED', partes: ['We arrived in ', ['strong rain', 'heavy rain', 'Rain is heavy.'], '. The village was ', ['very very quiet', 'eerily quiet', 'One precise word.'], ', and we saw old houses ', ['and stuff', 'with blue doors', 'Be specific in writing.'], '. The mayor ', ['did a review', 'carried out a review', 'carry out a review.'], ' of tourism and ', ['took a conclusion', 'drew a conclusion', 'draw a conclusion.'], ': visitors don’t really move the needle for the economy. I was ', ['very thankful', 'deeply grateful', 'deeply grateful.'], ' to the people who opened their doors.'] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep from Unit 1.', rotulo: 'The right word', linhas: ['adverb + adjective: <b>eerily</b> quiet · <b>painfully</b> slow · <b>deeply</b> grateful', 'adjective + noun: <b>heavy</b> rain · <b>strong</b> coffee · a <b>narrow</b> escape', 'verb + noun, formal: <b>raise</b> a concern · <b>draw</b> a conclusion · <b>meet</b> a deadline', 'vague talk: <b>kind of</b> · <b>sort of</b> · <b>and stuff</b> · business: <b>move the needle</b>'], uso: { p: 'Your turn. You edit a draft. Say a note to the writer with two precise word pairs.', molde: ['Instead of very …, try …', 'You could raise …'], ex: 'Instead of very quiet, try eerily quiet. You could also draw a clearer conclusion at the end.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
