/* ============================================================
   SOMEONE MUST HAVE · B2 · UNIT 4 (WISHES AND WHAT COULD HAVE BEEN) · LIVE CLASS  16/10/2026
   Aula nova do livro B2 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: modais no passado para deduzir (must have, might / could have, can't have) e para criticar
   (should have, shouldn't have); a forma: modal + have + particípio.
   O mundo: a final do concurso de bolos da padaria Miller's; de manhã o bolo campeão tem uma mordida.
   Pistas, três suspeitos e um final inesperado (o gato do padeiro).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B2', unidade: 4, titulo: ['Someone', 'Must Have'], tema: 'Deducing the past: must have, might have, can’t have.',
  sub: 'It’s the morning of the final of the town’s cake competition. The winning cake has a big bite missing. Read the clues, learn how English guesses about the past, question three suspects and close the case.',
  placa: 'MILLER’S BAKERY · 6 AM', lugarConversa: 'THE BAKERY KITCHEN', cor: '#f5a3d6', cor2: '#fbd6eb',
  chips: ['must have', 'might have · can’t have', 'Three suspects'], botao: 'Start the lesson', nota: 'Sure: must have eaten. Maybe: might have eaten. Impossible: can’t have eaten. Criticism: should have locked the door.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · The Clues', t: 'The detective’s notebook.', p: 'Read the notes out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'II · How Sure Are You?', t: 'Must, might, can’t… + have.', p: 'Compare A and B. How sure is the speaker in each one?' },
  { k: 'missao', est: 'o', min: 15, img: 'conversa', rot: 'III · Three Suspects', t: 'Who took a bite?', p: 'Ask each suspect five questions. Your teacher is the suspect. Then give your deduction.' },
  { k: 'escolha', est: 'o', min: 6, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say what should have happened.' }
];
var PORTAS = [];

var LEITURA = { rot: 'DETECTIVE’S NOTEBOOK · MILLER’S BAKERY', tipo: 'nota',
  antes: { q: 'You find your chocolate gone from the fridge. How do you decide who ate it?', h: 'I look for clues. Who was at home? Who loves chocolate?' },
  texto: '6:05 a.m. The winning cake has a bite missing. A small one. Teeth marks? No. Something smaller.\nThe back door was open. Somebody {must have forgotten} to lock it.\nThere is flour on the floor, with tiny round prints. A person {can’t have made} those.\nMr. Miller left at 10 p.m. He {might have seen} something, but he says he didn’t.\nThe judge, Mrs. Hale, has a key. She {could have come} back at night.\nThe cleaner, Tom, loves chocolate. He {may have been} hungry.\nAnd where is Biscotti, the baker’s cat? Nobody has seen him since midnight. He {should have been} in his basket.',
  perguntas: [
    { q: 'What is wrong with the cake?', h: 'It has a small bite missing.' },
    { q: 'Why was the back door open?', h: 'Somebody must have forgotten to lock it.' },
    { q: 'What is on the floor? What does it tell us?', h: 'Flour with tiny round prints. A person can’t have made them.' },
    { q: 'Who are the suspects?', h: 'Mr. Miller, the judge Mrs. Hale, the cleaner Tom… and Biscotti, the cat.' }],
  olha: 'Find seven guesses about the past. Which ones are almost sure? Which are just possible? Which one is impossible? Which one is a criticism?' };

var DESCOBRE = {
  pares: [
    { a: 'Somebody {must have forgotten} to lock the door.', b: 'Somebody {might have forgotten} to lock the door.', q: 'Which speaker is more sure?', r: '<b>must have</b> = I’m almost sure (the door is open!). <b>might / could / may have</b> = it’s possible.' },
    { a: 'A person {can’t have made} those prints.', b: 'A person {mustn’t have made} those prints.', q: 'Which one does an English speaker say for “impossible”?', r: 'Impossible in the past: <b>can’t have</b> (or couldn’t have). Not “mustn’t have”.' },
    { a: 'He {must have seen} it.', b: 'He {must saw} it.', q: 'Which one is right?', r: 'Modal + <b>have</b> + past participle: must have seen, might have gone.' },
    { a: 'He {should have been} in his basket.', b: 'He {must have been} in his basket.', q: 'Two different ideas. What are they?', r: '<b>should have</b> = the right thing didn’t happen (criticism). <b>must have</b> = a deduction.' }],
  regra: [['ALMOST SURE', 'must have + participle: must have forgotten'], ['POSSIBLE', 'might / could / may have: might have seen'], ['IMPOSSIBLE', 'can’t / couldn’t have: can’t have made'], ['CRITICISM', 'should / shouldn’t have: should have locked it']],
  armas: [['FORM', 'He must saw it.', 'He must <b>have seen</b> it.', 'modal + have + participle'], ['IMPOSSIBLE', 'She mustn’t have done it.', 'She <b>can’t have</b> done it.', 'impossible: can’t have'], ['PARTICIPLE', 'might have went', 'might have <b>gone</b>', 'go → gone'], ['MEANING', 'You must have locked it! (critic)', 'You <b>should have</b> locked it!', 'criticism: should have']] };

var MISSAO = { pede: 'THE INVESTIGATION · ASK FIVE QUESTIONS', quem: 'suspect', depois: 'Give your deduction',
  campos: [
    { c: 'onde', r: 'WHERE', q: 'Where were you last night between 10 and 6?', f: 'Last night: where?' },
    { c: 'chave', r: 'KEY', q: 'Do you have a key to the bakery?', f: 'A key?' },
    { c: 'bolo', r: 'THE CAKE', q: 'What did you think of the winning cake?', f: 'The cake?' },
    { c: 'viu', r: 'SAW', q: 'Did you see or hear anything strange?', f: 'Anything strange?' },
    { c: 'prova', r: 'PROOF', q: 'Can anybody confirm your story?', f: 'Proof?' }],
  itens: [
    { k: 'SUSPECT 1', tag: 'MRS. HALE, THE JUDGE', v: { onde: 'at home, then a night walk', chave: 'yes, as the judge', bolo: '“too sweet”', viu: 'a light in the bakery at 2 a.m.', prova: 'nobody: she lives alone' }, diz: '“At home. Then a walk at two, I couldn’t sleep.” · “Yes, every judge has one.” · “Too sweet, frankly.” · “A light in the bakery around two.” · “No. I live alone.”', ded: 'Mrs. Hale might have come in, because she has a key and no alibi. But she hates sweet cakes, so she can’t have wanted a bite.' },
    { k: 'SUSPECT 2', tag: 'TOM, THE CLEANER', v: { onde: 'at his sister’s birthday', chave: 'no, he gave it back', bolo: '“beautiful, I didn’t touch it”', viu: 'the back door open at 9 p.m.', prova: 'his sister and twenty guests' }, diz: '“At my sister’s birthday party.” · “No, I gave it back on Friday.” · “Beautiful. I didn’t touch it.” · “When I left at nine, the back door was open!” · “My sister and twenty guests.”', ded: 'Tom can’t have done it: twenty guests saw him at the party. But Mr. Miller should have locked the back door: Tom saw it open at nine.' },
    { k: 'SUSPECT 3', tag: 'MR. MILLER, THE BAKER', v: { onde: 'home at 10 p.m.', chave: 'yes, it’s his bakery', bolo: '“my best cake ever”', viu: 'Biscotti wasn’t in his basket', prova: 'his wife' }, diz: '“I went home at ten.” · “Of course, it’s my bakery.” · “My best cake ever!” · “Now that I think… Biscotti wasn’t in his basket.” · “My wife was with me.”', ded: 'It must have been Biscotti! The tiny round prints are a cat’s, the door was open, and he wasn’t in his basket. Mr. Miller should have locked the door.' }],
  relato: { titulo: 'YOUR DEDUCTION · THE BAKERY OWNER ASKS',
    pede: function (x) { return 'So, detective… what about ' + x.tag.split(',')[0] + '?'; },
    chips: function () { return ['… must have …', '… might have …', '… can’t have …, because …', '… should have …']; },
    modelo: function (x) { return x.ded; } },
  nao: { form: '“He must saw it” → he must HAVE SEEN it.', cant: '“She mustn’t have done it” → she CAN’T HAVE done it.', went: '“might have went” → might have GONE.' },
  fim: 'Case closed: Biscotti, the cat, with flour on his paws. Must have, might have, can’t have and should have: the detective’s grammar.' };

var ESCOLHA = [
  { a: 'the baker locks the door every night himself', b: 'a camera in the kitchen', chips: ['He should have …', 'I’d choose … because …'], ex: 'A camera. He should have installed one years ago.' },
  { a: 'give the prize anyway', b: 'disqualify the bitten cake', chips: ['They should …', 'because …'], ex: 'Give the prize anyway. It must have been delicious if the cat ate it!' },
  { a: 'be the detective', b: 'be the judge', chips: ['I’d rather be …', 'because …'], ex: 'The detective. I love guessing what must have happened.' },
  { a: 'tell the truth about a mistake immediately', b: 'wait and hope nobody notices', chips: ['You should …', 'because …'], ex: 'Tell the truth. If they find out, you’ll wish you had said something.' }];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* B2 · Someone Must Have: leitura · descobre · missao · escolha */
