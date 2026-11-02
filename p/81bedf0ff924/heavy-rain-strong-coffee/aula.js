/* ============================================================
   HEAVY RAIN, STRONG COFFEE · C1 · UNIT 1 (PRECISION) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula'): ver (leitura), notar (descobre), usar.
   Alvo: colocações adjetivo / advérbio + substantivo / adjetivo: heavy rain, heavy traffic, a heavy smoker;
   strong coffee, a strong accent; highly recommended, highly unlikely; deeply grateful, deeply moved;
   bitterly cold, bitterly disappointed; a narrow escape; a quick bite.
   Armadilha do português: a gente traduz "chuva forte" → strong rain, "trânsito pesado" ok, mas
   "muito grato" → very grateful (fraco), "frio de rachar" → very cold (fraco), "alto risco" → high risk ok.
   O mundo: um blog de viagem, 48 horas em Lisboa debaixo de chuva.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 1, titulo: ['Heavy Rain,', 'Strong Coffee'], tema: 'Words that go together.',
  sub: 'Natives don’t say “strong rain” or “very grateful”. They say heavy rain and deeply grateful. Read a travel blog from a rainy Lisbon and steal its best word pairs.',
  placa: '48 HOURS IN LISBON', lugarConversa: 'THE YELLOW TRAM', cor: '#e2a86c', cor2: '#f3d3ae',
  chips: ['heavy rain', 'strong coffee', 'deeply grateful'], botao: 'Start the lesson', nota: 'C1 is about precision: not just a correct word, but the word a native would choose.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 7, img: 'conversa', rot: 'I · Your Weather, Your Coffee', t: 'Before the words: you.', p: 'Answer with detail. Then ask the question back.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · The Blog', t: '48 hours in a very wet Lisbon.', p: 'Read it out loud. Answer the questions. Then find the word pairs.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · Which One Sounds Native?', t: 'Two sentences. Both are “correct”. One is natural.', p: 'Compare A and B. Which one would a native say? Why?' },
  { k: 'transforma', est: 'f', min: 7, img: 'capa', rot: 'IV · Upgrade It', t: 'Make it sound native.', p: 'Read the plain sentence. Use the clue. Say the upgraded version.' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'V · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'cartao', est: 'w', min: 8, img: 'conversa', rot: 'VI · Your Review', t: 'Write a short review, native style.', p: 'A place you visited: four lines, at least four word pairs from today.' }
];
var PORTAS = [];

var CONVERSA = [
  { q: 'What’s the weather like where you are today? Describe it in detail.', f: 'Today’s weather?', voce: ['It’s …', 'There’s …'], ex: 'It’s grey and humid, and there was heavy rain this morning.' },
  { q: 'How do you take your coffee, and how many do you have a day?', f: 'Your coffee?', voce: ['I like it …', 'I usually have …'], ex: 'Strong and black. Three a day, maybe four on bad days!' },
  { q: 'What’s the worst traffic you’ve ever been stuck in?', f: 'The worst traffic?', voce: ['Once I was stuck …', 'It took me …'], ex: 'Once I was stuck in heavy traffic for three hours on a holiday weekend.' },
  { q: 'Tell me about a place you would recommend to anyone.', f: 'A place you recommend?', voce: ['I’d recommend …', 'It’s …'], ex: 'A tiny restaurant near my house. I highly recommend the fish.' }
];

var LEITURA = { rot: 'THE WANDERING FORK · TRAVEL BLOG', tipo: 'nota',
  antes: { q: 'Imagine a weekend trip where it rains the whole time. Is it ruined, or can it still be good?', h: 'It can still be good: cafés, museums, long lunches. Rain changes the plan, not the trip.' },
  texto: '48 hours in Lisbon (in the rain)\nWe landed in {heavy rain} and spent the first hour in {heavy traffic}, which was not the plan. The taxi driver, a {heavy smoker} with a {strong accent}, told us it hadn’t rained like this in years.\nOur first stop was a tiny café near the river. The coffee was {strong} and the custard tarts were still warm. I was {deeply grateful}.\nOn Saturday it was {bitterly cold} by the water, so we grabbed {a quick bite} and hid in a museum. We had {a narrow escape} when a tram nearly soaked us outside!\nWould I go back? Absolutely. The old town is {highly recommended}, even in a storm. A dry weekend? {Highly unlikely} in November.',
  perguntas: [
    { q: 'What went wrong when they arrived?', h: 'It was raining heavily and they spent an hour stuck in traffic.' },
    { q: 'Why was the writer so happy at the café?', h: 'The coffee was strong and the custard tarts were still warm.' },
    { q: 'What happened outside the museum?', h: 'A tram nearly soaked them: a narrow escape!' },
    { q: 'Would the writer recommend Lisbon in November? What’s the catch?', h: 'Yes, highly recommended, but a dry weekend is highly unlikely.' }],
  olha: 'Find the word pairs. Rain isn’t “strong” and grateful isn’t “very”. Which words go with which?' };

var DESCOBRE = {
  pares: [
    { a: 'We landed in {heavy rain}.', b: 'We landed in {strong rain}.', q: 'Both are understandable. Which one does a native say? What other things can be “heavy”?', r: 'A: heavy rain. Also heavy traffic, a heavy smoker, a heavy workload. In Portuguese the rain is “forte”, in English it’s heavy.' },
    { a: 'The coffee was {strong}.', b: 'The coffee was {heavy}.', q: 'So when is it strong and not heavy?', r: 'A: strong coffee, a strong accent, a strong wind, a strong opinion. Heavy food exists, but heavy coffee doesn’t.' },
    { a: 'I was {very grateful}.', b: 'I was {deeply grateful}.', q: 'Both are correct. Which one sounds more C1? What’s the difference?', r: 'B. very is neutral and a little weak; deeply goes with feelings: deeply grateful, deeply moved, deeply concerned.' },
    { a: 'It was {bitterly cold} by the water.', b: 'It was {highly cold} by the water.', q: 'One adverb works, one doesn’t. Why?', r: 'A. bitterly goes with cold and disappointed. highly goes with recommended, unlikely, qualified, successful.' }],
  regra: [['HEAVY +', 'rain · traffic · smoker · workload · losses'], ['STRONG +', 'coffee · accent · wind · opinion · evidence'], ['DEEPLY / BITTERLY +', 'deeply grateful · deeply moved · bitterly cold · bitterly disappointed'], ['HIGHLY +', 'recommended · unlikely · qualified · successful']],
  armas: [
    ['RAIN', 'There was strong rain all day.', 'There was <b>heavy</b> rain all day.', 'Rain, traffic and smokers are heavy.'],
    ['GRATEFUL', 'I’m very grateful for your help.', 'I’m <b>deeply</b> grateful for your help.', 'very isn’t wrong, but deeply is the C1 choice.'],
    ['COLD', 'It was very very cold.', 'It was <b>bitterly</b> cold.', 'One precise word beats two weak ones.'],
    ['RECOMMEND', 'I strongly recommend… / I very recommend it.', 'It’s <b>highly</b> recommended.', 'highly recommended; never “very recommend”.']] };

var TRANSFORMA = { rot: 'PLAIN → NATIVE', fim: 'Six upgrades. Same meaning, much more precise.',
  itens: [
    { de: 'It rained a lot all night.', pista: 'heavy …', para: 'There was heavy rain all night.' },
    { de: 'The traffic was very bad this morning.', pista: 'heavy …', para: 'There was heavy traffic this morning.' },
    { de: 'I’m very, very thankful for everything.', pista: 'deeply …', para: 'I’m deeply grateful for everything.' },
    { de: 'It will probably not happen.', pista: 'highly …', para: 'It’s highly unlikely.' },
    { de: 'We were very sad about the result.', pista: 'bitterly …', para: 'We were bitterly disappointed with the result.' },
    { de: 'A car almost hit me!', pista: 'a narrow …', para: 'I had a narrow escape!' }] };

var CARTAO = { ph: 'I stayed at a small guesthouse in Paraty.\nThere was heavy rain on the first day, but the coffee was strong and the owner was lovely.\nI was deeply grateful for the free umbrella!\nHighly recommended, but highly unlikely to be dry in March.', rot: 'My review',
  chips: ['heavy rain', 'heavy traffic', 'strong coffee', 'a strong accent', 'deeply grateful', 'deeply moved', 'bitterly cold', 'bitterly disappointed', 'highly recommended', 'highly unlikely', 'a quick bite', 'a narrow escape'],
  perg: ['YOUR REVIEW', 'A hotel, a restaurant, a city you visited. Four lines, four word pairs.'],
  exemploRot: 'THE WANDERING FORK · RATINGS', exemplo: [['WEATHER', 'heavy rain, bitterly cold'], ['COFFEE', 'strong, perfect'], ['FEELING', 'deeply grateful'], ['VERDICT', 'highly recommended'], ['DRY WEEKEND?', 'highly unlikely']],
  modelo: 'I stayed at a small guesthouse in Paraty. There was heavy rain on the first day, but the coffee was strong.<br>I was deeply grateful for the free umbrella!<br>Highly recommended, but a dry weekend in March is highly unlikely.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Heavy Rain, Strong Coffee: conversa · leitura · descobre · transforma · memoria · cartao */
var PARES = [
  ['heavy', 'traffic', 'Sorry I’m late: there was heavy traffic on the bridge.'],
  ['strong', 'accent', 'He has a strong Scottish accent, but I understand him.'],
  ['deeply', 'moved', 'I was deeply moved by her speech.'],
  ['bitterly', 'disappointed', 'The fans were bitterly disappointed with the result.'],
  ['highly', 'qualified', 'She’s highly qualified for the job.'],
  ['a narrow', 'escape', 'The car missed us by a metre: a narrow escape!']];
