/* ============================================================
   REVIEW · B2 · UNIT 5 · PITCH NIGHT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: portas · missao · cartao · cadeira · pode.
   Unidade 5 (Relativas e preposições): defining e non-defining relatives (who, which, whose, vírgulas);
   sentence relatives (which is why, which means); reduced relatives (the files left on the desk, people
   living alone); verbo / preposição + -ing (instead of deciding, insist on paying); o to sozinho
   (nobody told me to); collocations com make.
   A missão: noite de pitch numa oficina de inventores. O aluno é o investidor e ouve três inventores
   (produtos inventados); no fim diz em quem investe e por quê.
   ============================================================ */
var REV = { nivel: 'B2', unidade: 5, titulo: ['Pitch', 'Night'], tema: 'Describing with precision', placa: 'THE WORKSHOP · PITCH NIGHT', lugarConversa: 'THE LOUNGE', cor: '#8fd3c2', cor2: '#c5ece2',
  sub: 'Unit 5 review. Pitch night at an inventors’ workshop. You are the investor, and you have money for only one idea. Three inventors. Three minutes each.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'portas', est: 'f', min: 8, img: 'conversa', rot: 'I · Six Doors', t: 'Six doors. One minute each. No notes.', p: 'Pick a door. Do the task out loud, from memory. Your teacher taps Got it or Review.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Pitches', t: 'Three inventors. One investment.', p: 'Ask each inventor five questions. Your teacher is the inventor. Then announce your decision.' },
  { k: 'cartao', est: 'w', min: 7, img: 'conversa', rot: 'III · Your Pitch', t: 'Now you pitch your own idea.', p: 'Four lines: what it is (which…), who it’s for (people …ing), why (which is why…), and what people do instead.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · Pitch Night Pairs', t: 'Four pairs from the inventors.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'WHO, WHICH, WHOSE', tema: 'defining and non-defining relative clauses', t: 'Describe a person whose work you admire and a place which means a lot to you. Add one extra fact between commas.', ex: 'My aunt, who is a nurse, works nights. She’s someone whose patience I admire.', trap: 'Extra information goes between commas, and never with that.' },
  { k: 'WHICH IS WHY', tema: 'sentence relatives: which is why, which means', t: 'Two facts about your week, each followed by which is why / which means.', ex: 'I started a new job, which is why I’m tired. It’s far from home, which means I leave at six.', trap: 'which refers to the whole idea before it (not what).' },
  { k: 'LEFT ON THE DESK', tema: 'reduced relative clauses', t: 'Describe your desk or bag right now, with reduced relatives.', ex: 'There’s a cup of coffee left from this morning, and a book written by my favorite author.', trap: 'the book (which was) written by… → the book written by…' },
  { k: 'INSTEAD OF', tema: 'preposition + -ing', t: 'Three habits: instead of…, before…, after… + -ing.', ex: 'Instead of driving, I cycle. Before sleeping, I read. After eating, I walk.', trap: 'After a preposition: -ing. “instead of drive” → instead of driving.' },
  { k: 'NOBODY TOLD ME TO', tema: 'the to on its own: I didn’t mean to, nobody told me to', t: 'Answer your teacher’s questions with short answers ending in to.', ex: 'Why did you do that? — Nobody told me to! / Will you come? — I’d love to. / Sorry, I didn’t mean to.', trap: 'Don’t repeat the verb: “I’d love to come” → I’d love to.' },
  { k: 'MAKE, NOT DO', tema: 'collocations with make', t: 'Use make with: a decision, a mistake, a difference, an effort, sense.', ex: 'I made a big decision last year. It made a real difference, even though I made a few mistakes.', trap: 'make a decision / a mistake (never do).' }
];

var MISSAO = { pede: 'PITCH NIGHT · ASK FIVE QUESTIONS', quem: 'inventor', depois: 'Announce your investment',
  campos: [
    { c: 'produto', r: 'THE PRODUCT', q: 'So, what exactly is it?', f: 'What is it?' },
    { c: 'para', r: 'WHO IT’S FOR', q: 'Who is it for?', f: 'For who?' },
    { c: 'porque', r: 'WHY', q: 'Why did you build it?', f: 'Why build it?' },
    { c: 'emvez', r: 'INSTEAD OF', q: 'What do people do now, instead of using your product?', f: 'Instead of it, people…?' },
    { c: 'decisao', r: 'THE BIG DECISION', q: 'What’s the biggest decision you’ve made for this project?', f: 'The big decision?' }],
  itens: [
    { k: 'INVENTOR 1', tag: 'LUNA, THE SLEEP LAMP', ele: 'She', decide: 'I’d invest in the Luna lamp, which means a lot of people sleeping better.', v: { produto: 'a lamp which changes color slowly so that you fall asleep', para: 'people working night shifts', porque: 'she couldn’t sleep for a year, which is why she built it', emvez: 'they take pills instead of changing their routine', decisao: 'she made the decision to leave her job at a bank' }, diz: '“It’s a lamp which changes color slowly, so that you fall asleep.” · “People working night shifts. Nurses, drivers, pilots.” · “I couldn’t sleep for a year, which is why I built it.” · “They take pills instead of changing their routine.” · “I made the decision to leave my job at a bank.”' },
    { k: 'INVENTOR 2', tag: 'BRUNO, THE PLANT SENSOR', ele: 'He', decide: 'I’d invest in Bruno’s sensor, which is why my plants will finally survive!', v: { produto: 'a small sensor whose light turns red when a plant needs water', para: 'people living in small flats who forget their plants', porque: 'all his plants died while he was traveling, which made him angry', emvez: 'they buy new plants instead of looking after the old ones', decisao: 'he made a big mistake first: the first sensor was too expensive' }, diz: '“It’s a small sensor whose light turns red when your plant needs water.” · “People living in small flats who forget their plants. Like me!” · “All my plants died while I was traveling, which made me angry.” · “They buy new plants instead of looking after the old ones.” · “I made a big mistake first: the first sensor was too expensive.”' },
    { k: 'INVENTOR 3', tag: 'DONA CIDA, THE RECIPE BOX', ele: 'She', decide: 'I’d invest in Dona Cida’s box, which means family recipes won’t be lost.', v: { produto: 'a wooden box which records grandparents telling their recipes', para: 'families separated by distance', porque: 'nobody had written down her mother’s recipes, which is why they were almost lost', emvez: 'they search online instead of asking their grandmothers', decisao: 'she made the effort to visit forty families' }, diz: '“It’s a wooden box which records grandparents telling their recipes.” · “Families separated by distance.” · “Nobody had written down my mother’s recipes, which is why they were almost lost.” · “They search online instead of asking their grandmothers.” · “I made the effort to visit forty families. Nobody told me to. I just wanted to.”' }],
  relato: { titulo: 'THE INVESTOR · YOUR DECISION',
    pede: function (x) { return 'So, investor: what about ' + x.tag.split(',')[1].trim().toLowerCase() + '? Yes or no?'; },
    chips: function () { return ['It’s a … which / whose …', 'for people …ing', '…, which is why …', '…, which means …', 'instead of …ing', 'I’ve made my decision:']; },
    modelo: function (x) { return 'It’s ' + x.v.produto + ', for ' + x.v.para + '. ' + x.decide; } },
  nao: { what: '“It’s a lamp what changes color” → a lamp WHICH / THAT changes color.', ing: '“instead of change their routine” → instead of CHANGING.', make: '“I did a big decision” → I MADE a big decision.' },
  fim: 'Three ideas, one investor, a hard choice. who / which / whose, which is why, reduced relatives, preposition + -ing and make: all of Unit 5 in one night.' };

var CARTAO = { ph: 'My idea is an app which reminds you to drink water.\nIt’s for people working long hours at a desk.\nI always forget to drink, which is why I need it!\nInstead of buying expensive bottles, you just use your phone.', rot: 'My pitch',
  chips: ['My idea is a … which ', 'whose ', 'It’s for people …ing ', 'which is why ', 'which means ', 'Instead of …ing, ', 'Before …ing, ', 'I made the decision to '],
  perg: ['YOUR PITCH', 'What is your idea? Who is it for? Why? What do people do instead?'],
  exemploRot: 'TONIGHT’S PITCHES', exemplo: [['LUNA', 'a lamp for night workers'], ['BRUNO', 'a plant sensor'], ['DONA CIDA', 'a recipe box'], ['YOU', 'your idea'], ['TIME', 'three minutes']],
  modelo: 'My idea is an app which reminds you to drink water. It’s for people working long hours at a desk.<br>I always forget to drink, which is why I need it!<br>Instead of buying expensive bottles, you just use your phone.' };

var PODE = [
  'I can define and add information: my aunt, who is a nurse, … / a man whose…',
  'I can comment on a whole idea: which is why, which means.',
  'I can shorten relatives: the files left on the desk, people living alone.',
  'I can use prepositions + -ing: instead of driving, before sleeping.',
  'I can answer short: I’d love to. Nobody told me to. And I make decisions, not do them!'
];

/* MECÂNICAS VARIADAS */
/* B2 R5: portas · missao · cartao · cadeira */
var CADEIRA = { itens: [
  { alvo: 'Ask me about a person whose advice changed my life.', dica: 'Who is someone whose advice changed your life?', resp: 'My first boss, whose advice was: listen more.' },
  { alvo: 'Ask me about a recent change, and make me use which is why.', dica: 'What has changed in your life recently?', resp: 'I moved closer to work, which is why I’m less tired.' },
  { alvo: 'Ask me what I do instead of watching TV.', dica: 'What do you do instead of watching TV?', resp: 'Instead of watching TV, I listen to podcasts.' },
  { alvo: 'Invite me to something. I’ll answer short.', dica: 'Would you like to come to dinner on Friday?', resp: 'I’d love to!' },
  { alvo: 'Ask me about the hardest decision I’ve made.', dica: 'What’s the hardest decision you’ve ever made?', resp: 'I made the decision to change careers at forty.' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.', pares: [{ c: 'It’s a lamp which changes color.', x: 'It’s a lamp what changes color.', d: 'A thing: <b>which</b> or that. Never what.' }, { c: 'Instead of changing their routine, they bought a robot.', x: 'Instead of change their routine, they bought a robot.', d: 'After a preposition: <b>-ing</b>.' }, { c: 'I made a big decision.', x: 'I did a big decision.', d: 'We <b>make</b> a decision.' }, { c: 'My aunt, who is a nurse, invented it.', x: 'My aunt, that is a nurse, invented it.', d: 'Extra information between commas: <b>who</b>, never that.' }], nota: 'A thing: <b>which</b>. A person with extra information: <b>who</b> between commas. After a preposition: <b>-ing</b>. A decision or a mistake: <b>make</b>.', uso: { p: 'Your turn. Pitch an invention to the investors. Say what it is with which or who, and what it does instead of the old way.', molde: ['It’s a … which …', 'Instead of …ing, you …'], ex: 'It’s a bottle which tells you when to drink. Instead of forgetting, you get a message.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
