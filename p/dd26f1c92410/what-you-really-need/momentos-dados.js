/* OS MOMENTOS-CHAVE de What You Really Need (11/10/2026): Solomon's Paradox em cinco falas, lidas por um apresentador de rádio.
   Forma: a linha do tempo. Alvo: frases clivadas de conselho (What you need is…, All you have to do is…, The problem is that…).
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1, 2], k: 'All it takes', quem: 'Henry, the narrator',
    contexto: 'The video opens with a big promise: one night can change your life.',
    frase: 'Do you know your entire life can change tonight? And <b>all it takes is one simple technique</b>.',
    explica: '<i>All it takes is</i> = the only thing you need is. The important part waits for the end of the sentence.',
    formula: '<b>All it takes is</b> one decision. · <b>All you have to do is</b> start. (all + clause + is)',
    tente: 'Finish it about your English: All it takes is…',
    ex: 'All it takes is twenty minutes a day and a good teacher.' },
  { i: [3, 4, 5, 6, 7, 8], k: 'Easy to spot', quem: 'Henry, the narrator',
    contexto: 'Other people’s problems look simple from the outside.',
    frase: 'Do you ever notice how easy it is to <b>spot</b> what’s wrong with your friends’ lives? They hate their job. So quit.',
    explica: '<i>Spot</i> = notice quickly. From outside, the answer takes one second.',
    formula: '<b>What your friend needs to do is</b> quit. (do … is + base verb)',
    tente: 'A friend hates their job. What do they need to do?',
    ex: 'What they need to do is update their CV and start applying this week.' },
  { i: [12, 13, 14, 15, 16], k: 'You draw a blank', quem: 'Henry, the narrator',
    contexto: 'When the problem is yours, the clear answer disappears.',
    frase: 'But when it comes to your problems… well… <b>you draw a blank</b>.',
    explica: '<i>Draw a blank</i> = your mind goes empty. <i>When it comes to</i> = when we talk about.',
    formula: '<b>The problem is that</b> I’m inside it. (The problem is + that-clause, no extra it)',
    tente: 'Think of a decision you keep postponing. What is the real problem?',
    ex: 'The problem is that I want two different things at the same time.' },
  { i: [20, 21, 22, 23, 24, 25, 26], k: 'Solomon’s Paradox', quem: 'Henry, the narrator',
    contexto: 'The wise king could solve everybody’s problems except his own. Psychologists named it after him.',
    frase: 'This is called Solomon’s Paradox, a psychological <b>phenomenon</b> where we <b>reason</b> more wisely about other people’s problems than our own.',
    explica: '<i>Reason</i> = think logically. Fear, history and ego get <i>tangled up</i> in our own problems.',
    formula: '<b>What makes it hard is</b> my fear. · <b>What gets in the way is</b> my ego.',
    tente: 'In your life, what gets in the way when you have to decide something?',
    ex: 'What gets in the way is my history. I failed once, and I’m afraid it will happen again.' },
  { i: [46, 47, 48, 49], k: 'Step outside', quem: 'Henry, the narrator',
    contexto: 'The last line: the whole technique in one sentence.',
    frase: 'Because sometimes <b>all you need to do is step outside of yourself</b> long enough to see clearly what to do when you step back in.',
    explica: 'Step outside = look from a <i>distance</i>, like a friend would. Then step back in and act.',
    formula: '<b>All you need to do is</b> step outside. (after do … is: the base verb, never stepping)',
    tente: 'Give yourself the advice, like a radio host: “All you need to do is…”',
    ex: 'All you need to do is send that email tomorrow morning, before you change your mind.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#ffb347', titulo: 'The video, read on air.', sub: 'Tap a mark on the line, hear Henry, and give the advice, host.', rot: { por: 'WHAT IT MEANS', padrao: 'WHAT · ALL · THE PROBLEM IS', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["tonight","tomorrow"],["life","day"]],"iscas":["knife","snow","chance","light"],"pergunta":"What is one simple technique that has helped you change something in your life?"},{"mentira":[["easy","hard"],["job","boss"]],"iscas":["long","quiet","late","jog"],"pergunta":"Is it easy for you to spot a problem in a friend's life?"},{"mentira":[["problems","friends"],["well","sorry"]],"iscas":["then","bell","homes","wall"],"pergunta":"When was the last time you drew a blank on something important?"},{"mentira":[["more","less"],["psychological","physical"]],"iscas":["season","cold","wide","thin"],"pergunta":"Is it easier for you to give advice to a friend than to follow it yourself?"},{"mentira":[["long","short"],["clearly","quickly"]],"iscas":["song","nearly","bag","sea"],"pergunta":"Do you ever step outside of yourself to see a problem clearly? How?"}];
