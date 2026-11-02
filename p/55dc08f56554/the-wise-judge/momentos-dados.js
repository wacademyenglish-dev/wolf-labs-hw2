/* OS MOMENTOS-CHAVE de The Wise Judge (11/10/2026): Solomon's Paradox em cinco falas.
   Forma: a linha do tempo (do problema à técnica). Alvo: -ing ou to (stop doing, want to, keep doing, avoid doing).
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [3, 4, 5, 6, 7, 8], k: 'Easy for friends', quem: 'Henry, the narrator',
    contexto: 'When a friend has a problem, the answer looks so simple.',
    frase: 'Do you ever notice how easy it is to spot what’s wrong with your friends’ lives? <b>They hate their job. So quit.</b>',
    explica: '<i>Spot</i> = see quickly. For other people, we always know the answer in one second.',
    formula: 'Your friend should <b>stop complaining</b> and <b>start looking</b> for a new job. (stop / start + -ing)',
    tente: 'A friend hates their job. What should they stop doing?',
    ex: 'They should stop complaining every day and start sending their CV.' },
  { i: [9, 10, 11], k: 'The courage to chase it', quem: 'Henry, the narrator',
    contexto: 'Some friends have a dream, but they never begin.',
    frase: 'They have a dream, but don’t have <b>the courage to chase it</b>. Start.',
    explica: '<i>Chase</i> = run after. Here: try hard to get your dream.',
    formula: 'I <b>want to</b> chase my dream. · I <b>keep waiting</b>. (want + to · keep + -ing)',
    tente: 'What do you want to do one day, and what do you keep postponing?',
    ex: 'I want to live abroad, but I keep postponing the plan.' },
  { i: [12, 13, 14, 15, 16], k: 'You draw a blank', quem: 'Henry, the narrator',
    contexto: 'Now the problem is yours, and suddenly you have no idea.',
    frase: 'But when it comes to your problems… well… <b>you draw a blank</b>.',
    explica: '<i>Draw a blank</i> = your mind goes empty; you can’t find the answer.',
    formula: 'I <b>avoid thinking</b> about it. · I <b>need to decide</b>. (avoid + -ing · need + to)',
    tente: 'What decision do you avoid thinking about?',
    ex: 'I avoid thinking about money, but I need to make a plan.' },
  { i: [20, 21, 22, 23, 24, 25, 26], k: 'Solomon’s Paradox', quem: 'Henry, the narrator',
    contexto: 'King Solomon was wise for everybody, but not for his own life. Psychologists gave it a name.',
    frase: 'This is called <b>Solomon’s Paradox</b>: we reason more wisely about other people’s problems than our own.',
    explica: '<i>Paradox</i> = something true that sounds impossible. Fear, history and ego get <i>tangled</i> in our problem.',
    formula: 'My fear <b>stops me from seeing</b> the answer. (stop someone from + -ing)',
    tente: 'What stops you from making a big change?',
    ex: 'My fear of failing stops me from starting my own business.' },
  { i: [37, 38, 39, 40, 41, 42, 43], k: 'Step outside', quem: 'Henry, the narrator',
    contexto: 'The technique: write about yourself like you are another person.',
    frase: 'You <b>stop referring to yourself as I</b>… Then ask: if this person were my friend, what would I tell them to do?',
    explica: 'Third person = <i>he, she, they</i>. Distance makes you wise again.',
    formula: '<b>Stop saying</b> “I”. <b>Try to see</b> yourself from outside. (stop + -ing · try + to)',
    tente: 'Talk about yourself in the third person: what does this person want, and what is stopping them?',
    ex: 'Ana wants to change careers, but she keeps waiting for the perfect moment.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#c9a24a', titulo: 'The wise advice, step by step.', sub: 'Tap a mark on the line, hear Henry, and give the advice you never take.', rot: { por: 'WHAT IT MEANS', padrao: '-ING OR TO', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["easy","hard"],["wrong","right"]],"iscas":["long","leaves","trends","shot"],"pergunta":"Have you ever hated a job or a class and decided to quit?"},{"mentira":[["dream","plan"],["Start","Stop"]],"iscas":["cream","face","smart","cage"],"pergunta":"What is one dream you have, and what gives you the courage to chase it?"},{"mentira":[["problems","plans"],["your","their"]],"iscas":["bank","black","homes","wall"],"pergunta":"Do you ever draw a blank when you try to solve your own problems?"},{"mentira":[["more","less"],["problems","plans"]],"iscas":["cold","season","purple","phone"],"pergunta":"Is it easier for you to give advice to a friend than to solve your own problems?"},{"mentira":[["friend","enemy"],["tell","teach"]],"iscas":["fried","lesson","tall","where"],"pergunta":"If your best friend had your biggest problem, what would you tell them to do?"}];
