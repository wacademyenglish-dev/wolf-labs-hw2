/* ============================================================
   REVIEW · B1 · UNIT 5 · THE CROSSROADS · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: rapido · missao · ordem · cadeira · pode.
   Unidade 5 (Se, quando, a não ser que): zero conditional (when / if + presente); first conditional
   (if + present, will; unless); second conditional (if I had…, I would…); third conditional (if I had
   known, I would have…).
   A missão: o aluno apresenta um podcast, "The Crossroads", e entrevista três pessoas que estão numa
   encruzilhada da vida; no fim dá um conselho com o second conditional.
   ============================================================ */
var REV = { nivel: 'B1', unidade: 5, titulo: ['The', 'Crossroads'], tema: 'If, when, unless', placa: 'PODCAST · EP. 5', lugarConversa: 'THE ROOFTOP', cor: '#86c9f0', cor2: '#c3e4f8',
  sub: 'Unit 5 review. You host a podcast called The Crossroads. Three guests have a big decision to make. Ask them, then tell them what you would do.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'I · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Crossroads', t: 'Three guests, three big decisions.', p: 'Ask each guest five questions. Your teacher is the guest. Then give your advice on the air.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · Mistake Hunter', t: 'Five lines from the crossroads. Each one has a wrong word.', p: 'Tap the wrong word. Say the line right. Then check.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'ON THE AIR · ASK FIVE QUESTIONS', quem: 'guest', depois: 'Give your advice on the air',
  campos: [
    { c: 'decisao', r: 'THE DECISION', q: 'What’s the big decision?', f: 'The decision?' },
    { c: 'se', r: 'IF YES', q: 'What will happen if you say yes?', f: 'If yes: what happens?' },
    { c: 'amenos', r: 'UNLESS', q: 'Is there anything that would stop you? Use unless.', f: 'Unless…?' },
    { c: 'sonho', r: 'IF YOU COULD', q: 'If you could do anything, what would you do?', f: 'Anything: what would you do?' },
    { c: 'passado', r: 'IF YOU HAD', q: 'Is there anything you would have done differently?', f: 'Anything different, in the past?' }],
  itens: [
    { k: 'GUEST 1', tag: 'JULIA, 34', ele: 'She', conselho: 'take the job in Canada', v: { decisao: 'a job offer in Canada', se: 'she’ll earn more, but she’ll be far from her parents', amenos: 'she’ll go, unless her mother gets sick', sonho: 'she would take her parents with her', passado: 'if she had learned French, she would have gone to Montreal' }, diz: '“A job offer in Canada!” · “If I say yes, I’ll earn more, but I’ll be far from my parents.” · “I’ll go, unless my mother gets sick.” · “If I could, I’d take my parents with me!” · “If I had learned French, I would have gone to Montreal.”' },
    { k: 'GUEST 2', tag: 'RAFA, 52', ele: 'He', conselho: 'open the restaurant, but small at first', v: { decisao: 'leaving his bank job to open a restaurant', se: 'he’ll be happier, but he won’t have a salary', amenos: 'he won’t quit unless he saves enough money', sonho: 'he would cook for famous people', passado: 'if he had started earlier, he would have been a chef by now' }, diz: '“I want to leave my bank job and open a restaurant.” · “If I do it, I’ll be happier. But I won’t have a salary.” · “I won’t quit unless I save enough money.” · “If I could do anything, I’d cook for famous people!” · “If I had started at twenty, I would have been a chef by now.”' },
    { k: 'GUEST 3', tag: 'BIA, 19', ele: 'She', conselho: 'take the gap year, and travel with a plan', v: { decisao: 'a gap year before university', se: 'she’ll travel, but her friends will finish first', amenos: 'she’ll do it, unless her parents say no', sonho: 'she would sail around the world', passado: 'if she had saved more money, she would have more choices now' }, diz: '“A gap year before university.” · “If I take it, I’ll travel. But my friends will finish first.” · “I’ll do it, unless my parents say no.” · “If I could, I’d sail around the world!” · “If I had saved more money, I’d have more choices now.”' }],
  relato: { titulo: 'ON THE AIR · WHAT WOULD YOU DO?',
    pede: function (x) { return 'So, what would you do if you were me?'; },
    chips: function () { return ['If I were you, I’d …', 'If you …, you’ll …', 'unless …', 'When you …, you …', 'If you had …, you would have …']; },
    modelo: function (x) { return 'If I were you, I’d ' + x.conselho + '. If you do it, you’ll be happy. And when you’re happy, you work better!'; } },
  nao: { will: '“If I will go” → If I GO, I’ll…', were: '“If I was you” → If I WERE you (more correct).', had: '“If I would have known” → If I HAD known, I would have…' },
  fim: 'Three guests, three crossroads, one great episode. when / if, will, unless, would and would have: all of Unit 5 on the air.' };

var PODE = [
  'I can say what always happens: When it rains, the streets flood.',
  'I can talk about real possibilities: If it rains, I’ll stay home.',
  'I can use unless: I’ll go, unless it rains.',
  'I can imagine: If I had more time, I would learn the piano. If I were you, I’d…',
  'I can imagine the past: If I had known, I would have called.'
];

/* MECÂNICAS VARIADAS */
/* B1 R5: rapido · missao · ordem · cadeira */
var RAPIDO = { seg: 60, itens: [['When water ___ 100 degrees, it boils. (reach)', 'reaches'], ['If it rains, I ___ stay home.', 'will / ’ll'], ['I won’t go ___ you come. (if not)', 'unless'], ['If I ___ rich, I’d buy an island. (be)', 'were / was'], ['If I had time, I ___ learn the piano.', 'would / ’d'], ['If I ___ you, I’d call her. (advice)', 'were'], ['If I had known, I ___ have called.', 'would'], ['If she ___ studied, she would have passed. (have)', 'had'], ['If you ___ (heat) ice, it melts.', 'heat'], ['What would you do if you ___ (win) the lottery?', 'won']] };
var ORDEM = { rot: 'THE OTHER TRACK', pede: 'Tap the events in the right order. Then tell it with if.', chips: ['First,', 'If …, … would have …', 'Then,', 'In the end,'],
  modelo: 'First, Leo missed the 8 o’clock train. Then he took the next one and sat next to Ana. If he hadn’t missed the train, he wouldn’t have met her. In the end, they got married, and now, when they see a train, they laugh!',
  passos: ['Leo’s alarm didn’t ring.', 'He missed the 8 o’clock train.', 'He took the next train and sat next to Ana.', 'They talked for two hours.', 'Two years later, they got married.', 'Now, when they see a train, they laugh!'] };
var CADEIRA = { itens: [
  { alvo: 'Ask me what I do when I can’t sleep.', dica: 'What do you do when you can’t sleep?', resp: 'When I can’t sleep, I read.' },
  { alvo: 'Ask me about my plans if it rains this weekend.', dica: 'What will you do if it rains this weekend?', resp: 'If it rains, I’ll watch movies.' },
  { alvo: 'Ask me what I would do with a million dollars.', dica: 'What would you do if you had a million dollars?', resp: 'I’d buy a house by the sea.' },
  { alvo: 'Ask me for advice: “What would you do if you were me?”', dica: 'What would you do if you were me?', resp: 'If I were you, I’d talk to your boss.' },
  { alvo: 'Ask me about a decision I’d change in the past.', dica: 'Is there anything you would have done differently?', resp: 'If I had known, I would have studied music.' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G14 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'cacaErro', titulo: 'Mistake hunter. The Crossroads podcast.', toque: 'Advanced learners often say these. Tap the wrong word before you see the answer.', itens: [{ f: 'If it [[will rain]], I’ll stay home.', r: 'If it <b>rains</b>, I’ll stay home.', d: 'After if: the present. No will.' }, { f: 'If I [[was]] you, I’d take the job.', r: 'If I <b>were</b> you, I’d take the job.', d: 'If I were you: were.' }, { f: 'If I [[would have]] known, I would have called.', r: 'If I <b>had</b> known, I would have called.', d: 'if + had + participle.' }, { f: 'I’ll go [[if not]] it rains.', r: 'I’ll go <b>unless</b> it rains.', d: 'unless = if not.' }, { f: 'If I [[have]] more time, I would learn the piano.', r: 'If I <b>had</b> more time, I would learn the piano.', d: 'Imagine it: if + past, would + verb.' }], nota: 'The if part never has <b>will</b> or <b>would</b>: If it <b>rains</b>, If I <b>had</b>, If I <b>had known</b>. <b>Unless</b> = if not. <b>If I were you</b>, I’d …', uso: { p: 'Your turn. A guest is at a crossroads. Give advice: one with If I were you, and one with unless.', molde: ['If I were you, I’d …', 'You’ll …, unless …'], ex: 'If I were you, I’d take the job. You’ll be happy, unless the boss is terrible.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_caca', GX_EXPLICA); };
