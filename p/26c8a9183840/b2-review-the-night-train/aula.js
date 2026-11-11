/* ============================================================
   REVIEW · B2 · UNIT 9 · THE NIGHT TRAIN · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: rapido · missao · ordem · conversa · pode.
   Unidade 9 (Frases mais elaboradas): dedução no passado (must have, can’t have, might have);
   participle clauses (having missed the train, not knowing, -ing clauses); cleft sentences (It was…
   who…, What I need is…); inversion (Never have I…, Had we known…, Not only… but…).
   A missão: um colar some do cofre do trem noturno às 3h10. O aluno é a inspetora e ouve três
   passageiros; no fim faz o resumo com as frases elaboradas da unidade.
   ============================================================ */
var REV = { nivel: 'B2', unidade: 9, titulo: ['The Night', 'Train'], tema: 'More elaborate sentences', placa: 'CARRIAGE 7 · 3:10 AM', lugarConversa: 'THE FOGGY LINE', cor: '#e07a8a', cor2: '#f0bcc4',
  sub: 'Unit 9 review. On the night train to the coast, a diamond necklace disappeared from the safe at 3:10 AM. Nobody got off. You are the inspector.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'I · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · Carriage 7', t: 'Three passengers. Nobody got off.', p: 'Ask each passenger five questions. Your teacher is the passenger. Then sum up the case.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'conversa', est: 'o', min: 8, img: 'conversa', rot: 'IV · In the Fog', t: 'Your own stories, said with style.', p: 'Answer with one elaborate sentence, then turn the question back.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · Night Train Pairs', t: 'Five lines from the detective.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'CARRIAGE 7 · ASK FIVE QUESTIONS', quem: 'passenger', depois: 'Sum up the case',
  campos: [
    { c: 'onde', r: 'AT 3:10', q: 'Where were you when the safe was opened?', f: 'At 3:10?' },
    { c: 'viu', r: 'WHAT YOU SAW', q: 'What exactly did you see?', f: 'What did you see?' },
    { c: 'acha', r: 'WHO', q: 'Who do you think did it?', f: 'Who did it?' },
    { c: 'nunca', r: 'EVER?', q: 'Have you ever seen anything like this?', f: 'Ever seen this?' },
    { c: 'se', r: 'HAD YOU KNOWN', q: 'What would you have done, had you known?', f: 'If you had known?' }],
  itens: [
    { k: 'PASSENGER 1', tag: 'THE PIANIST', ele: 'She', relato: 'Having finished her concert in the city, the pianist was asleep in her cabin. What she heard was a door closing at 3:10. She thinks it can’t have been a passenger. Had she known, she would have locked her own door.', v: { onde: 'asleep in her cabin, having finished a concert', viu: 'nothing, but what she heard was a door closing', acha: 'it can’t have been a passenger: they were all asleep', nunca: 'never has she been so scared on a train', se: 'had she known, she would have locked her door' }, diz: '“Having finished my concert, I was asleep in my cabin.” · “Nothing. What I heard was a door closing.” · “It can’t have been a passenger. We were all asleep.” · “Never have I been so scared on a train.” · “Had I known, I would have locked my door.”' },
    { k: 'PASSENGER 2', tag: 'THE YOUNG LAWYER', ele: 'He', relato: 'Not being able to sleep, the lawyer was reading in the dining car. It was the guard who walked past at 3:05, he says. He thinks the guard might have had a key. Not only did he see the guard, but he also heard keys.', v: { onde: 'in the dining car, not being able to sleep', viu: 'it was the guard who walked past at 3:05', acha: 'the guard might have had a key to the safe', nunca: 'not only did he see the guard, he also heard keys', se: 'had he known, he would have followed him' }, diz: '“Not being able to sleep, I was reading in the dining car.” · “It was the guard who walked past at 3:05.” · “He might have had a key to the safe.” · “Not only did I see him, but I also heard keys.” · “Had I known, I would have followed him.”' },
    { k: 'PASSENGER 3', tag: 'THE GUARD', ele: 'He', relato: 'Having checked every cabin, the guard was at the back of the train. What he found was a window open in carriage 7. He says the thief must have climbed out and come back in. Never in thirty years has he seen anything like it.', v: { onde: 'at the back of the train, having checked every cabin', viu: 'what he found was a window open in carriage 7', acha: 'the thief must have climbed out and come back in', nunca: 'never in thirty years has he seen anything like it', se: 'had he known, he would have closed every window' }, diz: '“Having checked every cabin, I was at the back of the train.” · “What I found was a window open in carriage 7.” · “The thief must have climbed out and come back in.” · “Never in thirty years have I seen anything like it.” · “Had I known, I would have closed every window.”' }],
  relato: { titulo: 'THE INSPECTOR · SUM UP THE CASE',
    pede: function (x) { return 'Inspector, what did you learn from ' + x.tag.toLowerCase() + '?'; },
    chips: function (x) { return ['Having …, ' + x.ele.toLowerCase() + ' …', 'What ' + x.ele.toLowerCase() + ' saw / heard was …', 'It was … who …', x.ele + ' must / might / can’t have …', 'Had ' + x.ele.toLowerCase() + ' known, …', 'Never has …']; },
    modelo: function (x) { return x.relato; } },
  nao: { having: '“Having finish the concert” → HAVING FINISHED.', inv: '“Never I have seen” → NEVER HAVE I seen.', had: '“If I had known, I would locked” → I WOULD HAVE locked. (or: Had I known…)' },
  fim: 'The necklace was found in the pianist’s flower box: the guard had hidden it there! Participle clauses, clefts, inversion and must have: all of Unit 9 on one night train.' };

var CONVERSA = [
  { q: 'Tell me about a time you arrived somewhere and everyone had left.', f: 'Everyone had left?', voce: ['Having missed …, I …', 'When I got there, …'], ex: 'Having missed the last bus, I arrived at the party at midnight. Everyone had left!' },
  { q: 'What is it that you love most about your job or studies?', f: 'What you love most?', voce: ['What I love most is …', 'It’s the … that …'], ex: 'What I love most is the people. It’s my students who make my day.' },
  { q: 'What’s the most amazing thing you have ever seen?', f: 'The most amazing thing?', voce: ['Never have I seen …', 'Not only …, but …'], ex: 'Never have I seen a sky like the one in the Atacama desert.' },
  { q: 'Think of a big mistake. What would you have done differently, had you known?', f: 'Had you known?', voce: ['Had I known, I would have …', 'Not knowing …, I …'], ex: 'Not knowing the city, I took the wrong train. Had I known, I would have asked.' },
  { q: 'Someone left you a mysterious gift. Who must have sent it?', f: 'A mysterious gift?', voce: ['It must have been …', 'It can’t have been …'], ex: 'It must have been my sister. It can’t have been my brother: he never remembers.' }
];

var PODE = [
  'I can deduce the past: it must have been, it can’t have been, it might have been.',
  'I can join ideas with participle clauses: Having finished…, Not knowing…',
  'I can focus with cleft sentences: It was the guard who…, What I need is…',
  'I can use inversion for effect: Never have I seen…, Not only did…',
  'I can use Had I known… instead of If I had known…'
];

/* MECÂNICAS VARIADAS */
/* B2 R9: rapido · missao · ordem · conversa */
var RAPIDO = { seg: 60, itens: [['___ (finish) dinner, she went to bed. (participle)', 'Having finished'], ['___ (not / know) the way, I asked a guard.', 'Not knowing'], ['The guard found it. → It was the guard ___ found it.', 'who'], ['I need a holiday. → What I need ___ a holiday.', 'is'], ['I have never seen this. → Never ___ I seen this.', 'have'], ['If I had known… → ___ I known…', 'Had'], ['She can’t have done it. (possible / impossible?)', 'impossible'], ['He ___ have taken it. (almost sure)', 'must'], ['Not only ___ he see it, but he also heard it.', 'did'], ['Rarely ___ the train late. (be)', 'is']] };
var ORDEM = { rot: 'THE NECKLACE', pede: 'Tap the events in the right order. Then tell the story with style.', chips: ['Having …,', 'It was … who …', 'Not only …, but …', 'Had …, …'],
  modelo: 'Having checked every cabin, the guard went to the safe at 3:05. It was the young lawyer who saw him walk past. Having taken the necklace, the guard hid it in the pianist’s flower box and opened a window to confuse everyone. Had he closed that window, nobody would have suspected him!',
  passos: ['The guard checked every cabin.', 'At 3:05 he walked past the dining car.', 'He opened the safe and took the necklace.', 'He hid it in the pianist’s flower box.', 'He opened a window in carriage 7 to confuse everyone.', 'The inspector found the necklace in the flowers.'] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.', pares: [{ c: 'Having finished the interview, she left.', x: 'Having finish the interview, she left.', d: 'having + <b>participle</b>.' }, { c: 'Never have I seen such a thing.', x: 'Never I have seen such a thing.', d: 'Never first: the helper goes before I.' }, { c: 'It can’t have been the guard.', x: 'It can’t been the guard.', d: 'can’t + <b>have</b> + participle.' }, { c: 'It was the guard who took it.', x: 'It was the guard who he took it.', d: '<b>who</b> already replaces he.' }, { c: 'Had I known, I would have locked it.', x: 'Had I known, I would locked it.', d: 'would + <b>have</b> + participle.' }], nota: 'A past guess: <b>must have / can’t have + participle</b>. After a negative word at the start: the helper first: <b>Never have I</b>. Focus: <b>It was … who</b>.', uso: { p: 'Your turn. You are the inspector. Say who you think took the necklace, and why it can’t have been someone else.', molde: ['It must have been …', 'It can’t have been … because …', 'It was … who …'], ex: 'It must have been the waiter. It can’t have been the guard because he was asleep.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
