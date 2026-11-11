/* ============================================================
   SO STRANGE WAS IT · C1 · UNIT 4 (INVERSION) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: so / such + inversão para resultado e intensidade: So strange was the light that…;
   So quickly did it happen that…; Such was the noise that…; Such was her anger that…; e a forma
   normal (It was so strange that… / It was such a strange light that…) para comparar.
   Armadilha: So strange the light was that; Such the noise was that; Such was a noise that.
   O mundo: a notícia de um jornal de interior sobre uma luz estranha na floresta, e um tabuleiro
   de mistérios.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 4, titulo: ['So Strange', 'Was It'], tema: 'So and such, with drama.',
  sub: '“The light was so bright that everybody woke up.” Good. “So bright was the light that the whole valley woke up.” Unforgettable. Read a strange night in a small town and make every mystery sound bigger.',
  placa: 'THE VALLEY GAZETTE', lugarConversa: 'THE FOGGY ROAD', cor: '#86c4d6', cor2: '#c3e2ea',
  chips: ['So strange was it that…', 'Such was the noise…', 'So quickly did it…'], botao: 'Start the lesson', nota: 'Put the feeling first. The result comes after “that”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Gazette', t: 'The night the valley woke up.', p: 'Read the article out loud, like a radio reporter. Then look closer.' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'II · Find the Rule', t: 'Four sentences from the Gazette. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · Normal or Dramatic?', t: 'Same story, two styles.', p: 'Compare A and B. What moves to the front?' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'IV · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a row, across, down or diagonal, is a BINGO.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'V · The Mystery Board', t: 'Roll, move, make it dramatic.', p: 'Your teacher rolls the die. Tell the strange event on your square with So… or Such…' }
];
var PORTAS = [];

var LEITURA = { rot: 'THE VALLEY GAZETTE · LOCAL NEWS', tipo: 'nota',
  antes: { q: 'Is there a strange story or legend in your town or family? What do people say happened?', h: 'In my grandmother’s town, people say a white horse appears on the road at night.' },
  texto: 'THE NIGHT THE VALLEY WOKE UP\nAt 2 AM last Tuesday, a blue light appeared above Pine Forest. {So bright was the light that} the whole valley woke up.\nFarmer Joe Lane went outside. “{Such was the noise that} my dogs hid under the bed,” he said. “It was like a train in the sky.”\nThen, just as people started filming, it disappeared. {So quickly did it happen that} nobody got a clear video.\nOn Wednesday morning, a circle of burnt grass was found in the forest. {So strange was it that} scientists came from the city.\nTheir answer? A weather balloon. {Such was the disappointment in town that} the café has stopped selling its new “Alien Cake”.',
  perguntas: [
    { q: 'What happened at 2 AM?', h: 'A very bright blue light appeared above the forest and woke up the whole valley.' },
    { q: 'How did the dogs react, and why?', h: 'They hid under the bed because the noise was so loud.' },
    { q: 'Why is there no good video?', h: 'It happened and disappeared too quickly.' },
    { q: 'What was the official explanation, and how did the town feel?', h: 'A weather balloon. People were so disappointed that the café stopped selling the Alien Cake.' }],
  olha: 'Find five sentences that start with So or Such. What comes right after them? Where is the result?' };

var DESCOBRE = {
  pares: [
    { a: 'The light was {so bright that} everybody woke up.', b: '{So bright was the light that} everybody woke up.', q: 'Same meaning. What moved to the front in B?', r: 'B starts with So + adjective, then the verb (was) comes BEFORE the subject (the light). The intensity comes first: drama.' },
    { a: 'It was {such a loud noise that} the dogs hid.', b: '{Such was the noise that} the dogs hid.', q: 'What happened to “a loud” in B?', r: 'Such was + noun = the noise was so great. No adjective needed: such itself means “so big / so strong”.' },
    { a: 'It happened {so quickly that} nobody filmed it.', b: '{So quickly did it happen that} nobody filmed it.', q: 'With an action verb, what auxiliary appears?', r: 'did: So quickly did it happen. Like a question: So + adverb + did + subject + verb.' },
    { a: '{Such was a noise} that the dogs hid.', b: '{Such was the noise} that the dogs hid.', q: 'One is wrong. Which one?', r: 'A. Such was + THE noise / HER anger / THEIR surprise (a specific noun), never “a”.' }],
  regra: [['SO + ADJ + BE + SUBJECT', 'So bright was the light that the valley woke up.'], ['SO + ADVERB + DID + SUBJECT + VERB', 'So quickly did it happen that nobody filmed it.'], ['SUCH + BE + THE NOUN', 'Such was the noise that the dogs hid.'], ['THE NORMAL WAY', 'It was so bright that… / It was such a bright light that…']],
  armas: [
    ['ORDER', 'So strange the light was that…', 'So strange <b>was the light</b> that…', 'Verb before subject.'],
    ['DID', 'So fast it happened that…', 'So fast <b>did it happen</b> that…', 'Action verbs: did + subject + verb.'],
    ['SUCH', 'Such the noise was that…', 'Such <b>was the noise</b> that…', 'Such + was + the noun.'],
    ['A / THE', 'Such was a panic that…', 'Such was <b>the</b> panic that…', 'Such was THE…, never a.']] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · So Strange Was It: leitura · descobre · bingo · tabuleiro */
var BINGO = [['So bright ___ the light that… (be)', 'was'], ['So quickly ___ it happen that…', 'did'], ['Such ___ the noise that… (be)', 'was'], ['Such was ___ panic that… (a / the)', 'the'], ['It was so cold. → So cold ___ it that…', 'was'], ['So loudly ___ they shout that… (aux)', 'did'], ['It was such a big surprise. → Such ___ the surprise that…', 'was'], ['So ___ was the cake that we ate it all. (delicious)', 'delicious'], ['So tired ___ I that I slept for 12 hours.', 'was']];
var TABULEIRO = { rot: 'THE MYSTERY BOARD', centro: 'Something strange happened. Make it dramatic.', casas: [
  { k: 'THE STORM', t: 'A storm last night. How strong was the wind?', ex: 'So strong was the wind that the trees fell on the road.' },
  { k: 'THE NOISE', t: 'A strange noise in the attic. What happened?', ex: 'Such was the noise that I called the police. It was a cat.' },
  { k: 'THE SPEED', t: 'Something that happened very fast.', ex: 'So quickly did the thief run that nobody saw his face.' },
  { k: 'THE COLD', t: 'The coldest day of your life.', ex: 'So cold was it that my coffee froze in five minutes!' },
  { k: 'THE QUEUE', t: 'The longest queue you have ever seen.', ex: 'So long was the queue that people brought chairs.' },
  { k: 'THE SURPRISE', t: 'A surprise party. How surprised were they?', ex: 'Such was her surprise that she dropped the cake.' },
  { k: 'THE FOOD', t: 'The best meal you have ever eaten.', ex: 'So delicious was the fish that I ordered it twice.' },
  { k: 'THE FLIGHT', t: 'A terrible flight.', ex: 'So bumpy was the flight that everybody screamed.' },
  { k: 'THE CROWD', t: 'A very crowded concert.', ex: 'Such was the crowd that we couldn’t move.' },
  { k: 'THE SILENCE', t: 'A moment of total silence.', ex: 'So quiet was the room that you could hear a pin drop.' },
  { k: 'THE ANGER', t: 'Someone very angry. What did they do?', ex: 'Such was his anger that he left without paying.' },
  { k: 'THE LEGEND', t: 'Tell a strange legend from your town, with drama.', ex: 'So strange was the light on the hill that people still talk about it.' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four sentences from the Gazette. Find the rule yourself.', exemplos: ['<b>So strange was</b> the light that nobody slept.', '<b>So quickly did</b> it happen that nobody saw it.', '<b>Such was</b> the noise that the dogs ran away.', '<b>Such was</b> her anger that she left.'], pergunta: 'After So + adjective or Such, the verb …', opcoes: ['comes before the person: so strange was the light', 'stays after the person: so strange the light was', 'is missing: so strange the light'], c: 0, nao: 'Not that one. Read the four lit starts again: where is was? where is did?', regra: '<b>So + adjective/adverb + verb + person</b> and <b>Such + was + noun</b>, then <b>that</b> + result. The normal order: It was <b>so strange</b> that … / It was <b>such a strange</b> light that …', uso: { p: 'Your turn. A strange thing you saw or heard. Say it with So … was … that, or Such was …', molde: ['So strange was …', 'So loudly did …', 'Such was …'], ex: 'So loud was the music that I could not hear my friend. Such was the crowd that we left early.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
