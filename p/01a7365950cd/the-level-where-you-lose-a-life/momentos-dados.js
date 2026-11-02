/* OS MOMENTOS-CHAVE de The Level Where You Lose a Life (11/10/2026): cinco falas do trailer de Jumanji.
   Forma: as abas. Alvo: who (pessoa), which / that (coisa), where (lugar).
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [3, 4, 5, 6, 7], k: 'Over my shoulder', quem: 'Spencer’s grandpa',
    contexto: 'Strange things happen in a real town: something from the game is in the street, right behind Grandpa.',
    frase: 'Grandpa, are you okay? — <b>Look over my left shoulder.</b> — No way. Is that...? — Yes, it is.',
    explica: 'The game is not in a box anymore. It is in the town, with real people.',
    formula: 'This is the town <b>where</b> the game breaks. (<b>where</b> = a place)',
    tente: 'Describe a place you love with where.',
    ex: 'This is the café where I read on Sundays.' },
  { i: [11, 12, 13, 14, 15], k: 'My reputation', quem: 'Dr. Bravestone',
    contexto: 'Someone finds the big hero of the game. He thinks everybody loves him.',
    frase: 'Dr. Bravestone, I’m so glad I found you. — Of course you are. Because of <b>my reputation</b>. And my charisma.',
    explica: 'He talks like a video game hero: confident, a little ridiculous. For a person, we use <i>who</i>.',
    formula: 'He is a hero <b>who</b> loves himself. · ✗ a hero which loves',
    tente: 'Describe a famous person with who.',
    ex: 'Neymar is a player who loves the camera.' },
  { i: [17, 18, 19], k: 'Demo mode', quem: 'Spencer',
    contexto: 'Spencer explains the problem: the game characters are real, but they act like a demo.',
    frase: 'We have a problem. They’re video game characters. But they’re <b>stuck in demo mode</b>.',
    explica: '<i>Demo mode</i> = the short version of a game in a store, which repeats the same things. They say the same lines again and again.',
    formula: 'They are characters <b>who say</b> only one line. · a character <b>who says</b> (verb + s)',
    tente: 'Do you know somebody who says the same thing every day? What does he or she say?',
    ex: 'My father is a man who says “Don’t forget your coat!” every morning.' },
  { i: [27, 28], k: 'Not in Jumanji', quem: 'One of the heroes',
    contexto: 'One of them starts to understand: Jumanji is now in the real world.',
    frase: 'I’m beginning to suspect <b>we’re not in Jumanji</b>.',
    explica: 'This time, the jungle is outside. It is a world with no rules. For things, we use <i>which</i> or <i>that</i>.',
    formula: 'It is a world <b>which / that</b> has no rules. · ✗ a world who',
    tente: 'Describe a game or an app you use with which or that.',
    ex: 'Duolingo is an app that sends me a message every day.' },
  { i: [44, 45], k: 'Back in the game', quem: 'Spencer',
    contexto: 'Is the world broken? Spencer has only one plan.',
    frase: 'The only way to stop this is to <b>get you guys back in the game</b>.',
    explica: 'The characters need to go home, and their home is a video game.',
    formula: 'The game is the place <b>where</b> they belong. · the person <b>who</b> · the thing <b>which</b>',
    tente: 'Where do you belong? Describe the place where you feel at home.',
    ex: 'My grandmother’s kitchen is the place where I feel at home.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#5fb85a', titulo: 'Five lines from the game.', sub: 'Tap a moment, hear it, and describe it with who, which or where.', rot: { por: 'WHAT IT MEANS', padrao: 'WHO · WHICH · WHERE', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["okay","ready"],["Yes","No"]],"iscas":["soldier","day","book","lift"],"pergunta":"Who would you be shocked to see if someone said, 'Look over my left shoulder'?"},{"mentira":[["glad","sad"],["found","met"]],"iscas":["bad","sound","horse","glass"],"pergunta":"What do you think your reputation is among your friends and family?"},{"mentira":[["problem","question"],["characters","players"]],"iscas":["name","half","mood","carpet"],"pergunta":"Have you ever felt stuck in demo mode, doing the same things every day?"},{"mentira":[["beginning","learning"],["suspect","forget"]],"iscas":["winning","respect","expect","perfect"],"pergunta":"Have you ever started to suspect you were not in the place you expected?"},{"mentira":[["only","best"],["stop","start"]],"iscas":["day","shop","eyes","bag"],"pergunta":"Have you ever helped a friend get back in the game after a hard time?"}];
