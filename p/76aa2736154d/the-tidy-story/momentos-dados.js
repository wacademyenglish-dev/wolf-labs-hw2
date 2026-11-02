/* OS MOMENTOS-CHAVE de The Tidy Story (11/10/2026): a regra das 10.000 horas posta à prova (palestra TED de David Epstein).
   Forma: a linha do tempo. Alvo: passiva de relato com o nome na frente (X is said / thought / known + to; to have + particípio; to be).
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1, 2, 3, 4, 5], k: 'The rule', quem: 'David Epstein',
    contexto: 'Almost everybody has heard of a famous rule about becoming great at something.',
    frase: 'Many of you here have probably heard of <b>the 10,000 hours rule</b>. It’s the idea that to become great in anything takes 10,000 hours of focused practice.',
    explica: 'A popular belief. When we report it, the subject can go first, followed by <i>is said to</i>.',
    formula: 'Practice <b>is said to</b> make you great. · ✗ Practice is said that makes you great.',
    tente: 'Report a popular belief about learning with is said to / is thought to.',
    ex: 'Children are said to learn languages faster. Music is thought to help memory.' },
  { i: [6, 7, 8, 9, 10, 11], k: 'Tiger', quem: 'David Epstein',
    contexto: 'The classic example of the rule is a famous golfer.',
    frase: 'The poster child for this story is Tiger Woods. His father famously <b>gave him a putter</b> when he was seven months old.',
    explica: '<i>Poster child</i> = the perfect example. An action before now: to have + participle.',
    formula: 'Tiger <b>is said to have started</b> golf as a baby. (to have + participle = earlier)',
    tente: 'Report something a famous person is said to have done as a child.',
    ex: 'Mozart is said to have written music at five.' },
  { i: [29, 30, 31, 32, 33, 34], k: 'Sampling', quem: 'David Epstein',
    contexto: 'But when scientists follow real athletes, the pattern is different.',
    frase: 'The future elites tend to have what scientists call <b>a sampling period</b>, where they try a variety of physical activities, they gain broad general skills, and delay specializing.',
    explica: '<i>Sampling</i> = trying a little of many things. The best don’t specialize early.',
    formula: 'Elite athletes <b>are known to</b> try many sports first.',
    tente: 'Report a fact about successful people with are known to.',
    ex: 'Successful people are known to read a lot. They are thought to sleep well too.' },
  { i: [51, 52, 53], k: 'Ellington', quem: 'David Epstein',
    contexto: 'Many great people started late, or started with something else.',
    frase: 'Duke Ellington <b>shunned music lessons</b> as a kid to focus on baseball and painting and drawing.',
    explica: '<i>Shun</i> = avoid on purpose. A great musician who didn’t want music lessons!',
    formula: 'Ellington <b>is reported to have avoided</b> music lessons.',
    tente: 'Report a surprising fact about an artist or athlete you admire.',
    ex: 'Van Gogh is reported to have sold only one painting in his life.' },
  { i: [87, 88], k: 'The dabbler', quem: 'David Epstein',
    contexto: 'An athlete who tried every sport before choosing one. Who is he?',
    frase: 'So who is this dabbler? <b>This is Roger Federer.</b>',
    explica: '<i>Dabbler</i> = someone who tries many things a little. The surprise of the talk.',
    formula: 'Federer <b>is believed to be</b> one of the greatest ever. (to be = now)',
    tente: 'Say who is believed to be the best in your favorite sport or art.',
    ex: 'Pelé is believed to be the greatest footballer of all time.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'linha', cor: '#7f9fd9', titulo: 'The evidence, on a timeline.', sub: 'Tap a mark on the line, hear it, then report it: X is said to…, X is known to…', rot: { por: 'WHAT IT MEANS', padrao: 'X IS SAID TO (HAVE)…', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["probably","never"],["focused","relaxed"]],"iscas":["hard","hear","pool","grade"],"pergunta":"Is there something you have practiced for many hours, like the 10,000 hours rule says?"},{"mentira":[["father","mother"],["seven","eleven"]],"iscas":["storm","cold","mouths","farmer"],"pergunta":"What special gift did your parents give you when you were little?"},{"mentira":[["gain","lose"],["delay","start"]],"iscas":["send","dry","board","kills"],"pergunta":"Which different sports or hobbies did you try during your own sampling period as a kid?"},{"mentira":[["baseball","football"],["drawing","dancing"]],"iscas":["kick","pointing","basketball","listen"],"pergunta":"Did you ever skip a class you didn't like, the way he shunned music lessons?"},{"mentira":[["who","where"],["dabbler","player"]],"iscas":["zoo","show","bubble","miss"],"pergunta":"Who is a sports star you admire, and why do you like him or her?"}];
