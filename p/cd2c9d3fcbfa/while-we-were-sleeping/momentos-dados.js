/* OS MOMENTOS-CHAVE de While We Were Sleeping (11/10/2026): o discurso do presidente no trailer de Invasion.
   Forma: a lacuna (ouvir e escolher). Alvo: past continuous × past simple, while / when.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [2, 3, 4], k: 'The broadcast', quem: 'The president',
    contexto: 'Strange things happen all over the world. The president goes on TV to talk to everybody.',
    frase: 'My fellow citizens of the world, what I have to say to you is not something <b>I was ever prepared</b> to say.',
    distr: ['I was never ready', 'I am prepared'],
    explica: '<i>Prepared</i> = ready. A president who is not ready: that is how big the news is.',
    formula: 'Everybody <b>was watching</b> TV <b>when</b> the president <b>spoke</b>. (long action + short action)',
    tente: 'What were you doing when you heard some big news this year?',
    ex: 'I was having breakfast when I saw the news on my phone.' },
  { i: [5, 6, 7], k: 'Inexplicable', quem: 'The president',
    contexto: 'He lists the strange events: different places, different problems.',
    frase: 'As many of you know by now, we are suffering from <b>inexplicable</b> and seemingly unrelated incidents.',
    distr: ['incredible', 'invisible'],
    explica: '<i>Inexplicable</i> = nobody can explain it. <i>Unrelated</i> = not connected.',
    formula: 'People <b>were living</b> normal lives <b>when</b> the incidents <b>started</b>.',
    tente: 'Tell me about something strange that happened while you were working or studying.',
    ex: 'While I was studying, the neighbor’s dog started singing!' },
  { i: [8, 9, 10], k: 'Power outages', quem: 'The president',
    contexto: 'Lights go out, buildings fall. Nobody knows why.',
    frase: 'Ranging from <b>power outages</b>, to the destruction of infrastructure and homes.',
    distr: ['power stations', 'power lines'],
    explica: '<i>Power outage</i> = the electricity goes out. It interrupts what people are doing.',
    formula: 'I <b>was cooking</b> when the power <b>went</b> out. · ✗ I cooked when the power was going out',
    tente: 'What were you doing the last time the power went out?',
    ex: 'I was taking a shower when the power went out. Cold water!' },
  { i: [11, 12], k: 'Connected', quem: 'The president',
    contexto: 'Then the big revelation: all these events are one thing.',
    frase: 'We now believe these incidents are not unrelated, but <b>in fact, connected</b>.',
    distr: ['in fact, separated', 'in fact, invented'],
    explica: 'It was happening everywhere at the same time, and nobody saw the connection.',
    formula: '<b>While</b> they <b>were sleeping</b>, it <b>was happening</b> everywhere. (while + past continuous)',
    tente: 'What was happening in your house while you were sleeping last night?',
    ex: 'While I was sleeping, my cat was eating my plants.' },
  { i: [13, 14], k: 'Not of our Earth', quem: 'The president',
    contexto: 'The last sentence of the speech changes everything.',
    frase: 'What is being visited upon our Earth is <b>not of our Earth</b>.',
    distr: ['not on our Earth', 'all over our Earth'],
    explica: 'He doesn’t say the word “aliens”. He doesn’t need to.',
    formula: 'What <b>were</b> you <b>doing</b> when you <b>heard</b> the news? — I <b>was</b> …',
    tente: 'Ask your teacher: What were you doing when…?',
    ex: 'What were you doing when Brazil won the last World Cup?' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#4f9bd9', titulo: 'The speech, line by line.', sub: 'Tap a moment, hear the president, and choose the missing words.', rot: { por: 'WHAT IT MEANS', padrao: 'WAS / WERE + -ING', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["world","country"],["have","want"]],"iscas":["word","yellow","cities","day"],"pergunta":"What is something you were never prepared to say to someone?"},{"mentira":[["many","few"],["unrelated","related"]],"iscas":["money","farm","accidents"],"pergunta":"Have you ever had a strange experience that was inexplicable to you?"},{"mentira":[["destruction","repair"],["homes","schools"]],"iscas":["raining","tower","hopes","farm"],"pergunta":"Have you ever had a power outage at home? What did you do?"},{"mentira":[["now","never"],["incidents","storms"]],"iscas":["leave","know","please","bought"],"pergunta":"Do you think everything in life is, in fact, connected? Why?"},{"mentira":[["visited","built"],["upon","across"]],"iscas":["birth","bean","hat","limited"],"pergunta":"Have you ever seen or felt something that seemed not of our Earth?"}];
