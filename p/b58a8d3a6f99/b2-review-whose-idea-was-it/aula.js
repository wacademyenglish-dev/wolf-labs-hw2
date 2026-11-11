/* ============================================================
   REVIEW · B2 · UNIT 7 · WHOSE IDEA WAS IT? · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: bingo · missao · ordem · escolha · pode.
   Unidade 7 (Contar e descrever): reported speech no trabalho; reporting verbs (deny, admit, insist on,
   promise, suggest, refuse + -ing / to); extreme adjectives (absolutely furious); compound adjectives
   (a ten-hour flight); double comparatives (the more…, the more…; nine times longer).
   A missão: o lançamento de um produto (inventado) foi um desastre. O aluno é do RH, ouve três
   colegas sobre a reunião em que tudo foi decidido e relata ao diretor quem disse o quê.
   ============================================================ */
var REV = { nivel: 'B2', unidade: 7, titulo: ['Whose Idea', 'Was It?'], tema: 'Reporting and describing', placa: 'MEETING MINUTES · ROOM 4', lugarConversa: 'THE OFFICE KITCHEN', cor: '#f0a08a', cor2: '#f8d0c5',
  sub: 'Unit 7 review. The launch of the Glow Mug was a disaster. Nobody wants to take the blame. You work in HR. Three colleagues. Who said what in that meeting?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'I · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a line, across, down or diagonal, is a BINGO.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Meeting', t: 'Three colleagues. Who said what?', p: 'Ask each colleague five questions. Your teacher is the colleague. Then report to the director.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Meeting Card', t: 'Four lines from the meeting.', p: 'Read one line at a time. Then keep the card in the corner for the last page.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'HR · ASK FIVE QUESTIONS', quem: 'colleague', depois: 'Report to the director',
  campos: [
    { c: 'acordo', r: 'WHAT WAS AGREED', q: 'What was agreed in that meeting?', f: 'What was agreed?' },
    { c: 'nega', r: 'DENIES', q: 'Was the launch date your idea?', f: 'Your idea?' },
    { c: 'admite', r: 'ADMITS', q: 'Is there anything you admit you got wrong?', f: 'Anything wrong?' },
    { c: 'prometeu', r: 'PROMISED', q: 'What did the others promise or insist on?', f: 'Promised? Insisted?' },
    { c: 'como', r: 'THE LAUNCH', q: 'How would you describe the launch day?', f: 'The launch day?' }],
  itens: [
    { k: 'COLLEAGUE 1', tag: 'PRIYA, MARKETING', ele: 'She', relato: 'Priya denied choosing the date. She admitted writing the ad, and she said the boss had insisted on launching in December. She described the launch as an absolute nightmare.', v: { acordo: 'they agreed to launch the mug in December', nega: 'she denied choosing the date', admite: 'she admitted writing the ad in a hurry', prometeu: 'the boss insisted on launching before Christmas', como: 'an absolute nightmare' }, diz: '“We agreed to launch the Glow Mug in December.” · “No! I didn’t choose the date.” · “OK, I admit I wrote the ad in a hurry.” · “The boss insisted on launching before Christmas.” · “An absolute nightmare. A twelve-hour day of complaints.”' },
    { k: 'COLLEAGUE 2', tag: 'OTTO, PRODUCTION', ele: 'He', relato: 'Otto said he had warned everyone. He refused to take the blame, but he admitted that the factory had made the mugs nine times faster than usual. He said the more they rushed, the more mugs broke.', v: { acordo: 'they decided to make 50,000 mugs in two weeks', nega: 'he refused to take the blame', admite: 'he admitted that they had made the mugs nine times faster than usual', prometeu: 'he had promised to test every mug, but there was no time', como: 'absolutely chaotic: the more they rushed, the more mugs broke' }, diz: '“We decided to make 50,000 mugs in two weeks.” · “I refuse to take the blame. I warned everyone!” · “I admit we made them nine times faster than usual.” · “I promised to test every mug. There was no time.” · “Absolutely chaotic. The more we rushed, the more mugs broke.”' },
    { k: 'COLLEAGUE 3', tag: 'THE BOSS, MR. LANE', ele: 'He', relato: 'Mr. Lane admitted choosing the date. He apologized for not listening and promised to give the team a two-week break. He suggested launching the new mug in March.', v: { acordo: 'the team agreed with him, he says', nega: 'he didn’t deny it: he admitted choosing the date', admite: 'he admitted not listening to Otto', prometeu: 'he promised to give the team a two-week break', como: 'a humiliating day, but an important lesson' }, diz: '“The team agreed with me. Or I thought they did.” · “I won’t deny it. The date was my idea.” · “I admit I didn’t listen to Otto.” · “I promise to give the team a two-week break. And I suggest launching the new mug in March.” · “Humiliating. But an important lesson.”' }],
  relato: { titulo: 'THE DIRECTOR · WHO SAID WHAT?',
    pede: function (x) { return 'So, what did ' + x.tag.split(',')[0].toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); }) + ' say?'; },
    chips: function (x) { return [x.ele + ' denied …ing', x.ele + ' admitted …ing', x.ele + ' insisted on …ing', x.ele + ' promised to …', x.ele + ' refused to …', x.ele + ' said (that) …']; },
    modelo: function (x) { return x.relato; } },
  nao: { deny: '“She denied to choose” → she denied CHOOSING.', suggest: '“He suggested us to launch” → he suggested LAUNCHING / that we launch.', very: '“very exhausted / very furious” → ABSOLUTELY exhausted.' },
  fim: 'Case closed: the date was the boss’s idea, and he said so. said, denied, admitted, insisted on, promised, absolutely and the more… the more: all of Unit 7 in one report.' };

var PODE = [
  'I can report what was said in a meeting: she said that…, it was agreed that…',
  'I can use reporting verbs: deny / admit / suggest + -ing, promise / refuse + to, insist on + -ing.',
  'I can use strong adjectives: absolutely furious, really tiny.',
  'I can use compound adjectives: a ten-hour flight, a well-paid job.',
  'I can compare in a stronger way: the more…, the more…; nine times longer.'
];

/* MECÂNICAS VARIADAS */
/* B2 R7: bingo · missao · ordem · escolha */
var BINGO = [['deny + ? “She denied ___ the date.” (choose)', 'choosing'], ['promise + ? “He promised ___ every mug.” (test)', 'to test'], ['insist + ? “He insisted ___ ___ early.” (launch)', 'on launching'], ['refuse + ? “I refuse ___ the blame.” (take)', 'to take'], ['very tired → absolutely ___', 'exhausted'], ['a flight of ten hours → a ___ flight', 'ten-hour'], ['The more you practice, ___ ___ you get.', 'the better'], ['“I’m tired.” → He said he ___ tired.', 'was'], ['suggest + ? “She suggested ___ in March.” (launch)', 'launching']];
var ORDEM = { rot: 'THE GLOW MUG DISASTER', pede: 'Tap the events in the right order. Then report the story.', chips: ['First,', 'It was agreed that …', 'The more …, the more …', 'In the end, … admitted …'],
  modelo: 'First, the boss insisted on launching before Christmas, and it was agreed that the factory would make 50,000 mugs. The more they rushed, the more mugs broke. Customers were absolutely furious. In the end, the boss admitted choosing the date and promised to give everyone a break.',
  passos: ['The boss insisted on launching before Christmas.', 'The team agreed to make 50,000 mugs in two weeks.', 'The factory worked nine times faster than usual.', 'Half of the mugs broke in the first week.', 'Customers were absolutely furious.', 'The boss admitted choosing the date.'] };
var ESCOLHA = [
  { a: 'a well-paid job with a two-hour commute', b: 'a badly-paid job five minutes from home', chips: ['I’d rather …', 'The more …, the more …'], ex: 'Five minutes from home. The more I travel, the less I live.' },
  { a: 'a boss who admits mistakes', b: 'a boss who never makes them', chips: ['I’d choose …', 'someone who admits …ing'], ex: 'One who admits making them. Nobody is perfect.' },
  { a: 'a ten-hour flight in first class', b: 'a two-hour flight in a tiny seat', chips: ['a …-hour flight', 'absolutely …'], ex: 'The two-hour flight. Ten hours is absolutely exhausting, even in first class.' },
  { a: 'promise something and fail', b: 'refuse to promise anything', chips: ['I’d rather promise to …', 'I’d refuse to …'], ex: 'Refuse to promise. Then nobody is disappointed.' }];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep from Unit 7.', rotulo: 'Reporting and describing', linhas: ['<b>deny</b> / <b>admit</b> / <b>suggest</b> + <b>-ing</b> · <b>promise</b> / <b>refuse</b> + <b>to</b>', '<b>insist on</b> + -ing · she said <b>that</b> … · he suggested <b>that we launch</b>', 'absolutely <b>furious</b> · really <b>tiny</b> · not “very furious”', 'a <b>ten-hour</b> flight (no s) · the <b>more</b> we talk, the <b>less</b> we agree'], uso: { p: 'Your turn. You are in HR. Tell the director who said what in the meeting. Use one reporting verb with -ing and one with to.', molde: ['She denied …ing', 'He promised to …', 'They suggested …ing'], ex: 'Marta admitted forgetting the date. Paulo promised to fix it. They suggested moving the launch.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
