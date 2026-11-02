/* OS MOMENTOS-CHAVE de You’d Better Not Volunteer (11/10/2026): cinco falas do trailer de The Hunger Games.
   Forma: as abas. Alvo: should / ought to (conselho), had better / ’d better (aviso), ’d better not.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1, 2, 3, 4], k: 'On your own', quem: 'A voice from the Capitol',
    contexto: 'Haymitch is chosen for the games. Somebody tells him the hard truth.',
    frase: 'I bet I know a thing or two about you. You love her and she loves you. But now, <b>you are on your own</b>.',
    explica: '<i>On your own</i> = alone, with no help. In the games, trust is dangerous.',
    formula: 'You <b>should</b> trust nobody. · You <b>ought to</b> be careful. (advice)',
    tente: 'Give advice to someone who starts a new job tomorrow.',
    ex: 'You should arrive early. You ought to learn everybody’s name.' },
  { i: [5, 6, 7, 8], k: 'The Quell', quem: 'The Capitol host',
    contexto: 'The host announces special games with twice as many tributes.',
    frase: 'To the Second Quarter Quell! You have no idea <b>what’s in store for you</b>. Twice the number of tributes, twice the glory.',
    explica: '<i>What’s in store for you</i> = what is going to happen to you. It is a party for the Capitol and a nightmare for the tributes.',
    formula: 'You’<b>d better</b> be ready. (or something bad will happen) · ✗ You’d better to be',
    tente: 'Give a warning to a friend who has a big exam tomorrow.',
    ex: 'You’d better sleep early, or you won’t remember anything!' },
  { i: [9, 10], k: 'Presentation', quem: 'A stylist',
    contexto: 'Before the games, the tributes go on TV. Looking good could mean getting help.',
    frase: '<b>Presentation could save your life.</b> Shoulders back, big smiles.',
    explica: 'Sponsors send gifts to the tributes they like. So a smile is not just a smile here.',
    formula: 'You <b>should</b> smile for the cameras. · You’<b>d better not</b> look scared.',
    tente: 'Give advice for a job interview: what should you do, and what had you better not do?',
    ex: 'You should smile and look at the person. You’d better not check your phone.' },
  { i: [17, 18], k: 'All the power', quem: 'A tribute',
    contexto: 'One tribute asks the question nobody asks in public.',
    frase: 'President Snow has all the power. <b>Why do you submit to it all?</b>',
    explica: '<i>Submit to</i> = accept, obey. It is a dangerous question in the Capitol.',
    formula: 'We <b>ought to</b> ask questions. · <b>Should</b> I say something? — Yes, you <b>should</b>.',
    tente: 'Ask your teacher for advice with Should I…?',
    ex: 'Should I watch series in English with subtitles or without?' },
  { i: [21, 22, 23], k: 'Remember you', quem: 'A voice in the trailer',
    contexto: 'The last advice before the arena: don’t just survive, be remembered.',
    frase: 'The arena, it’s a killing machine, but all machines can be broken. <b>Go out there and make them remember you.</b>',
    explica: 'A machine can be broken: the Capitol is not as strong as it looks. A warning and a hope.',
    formula: 'You’<b>d better</b> make them remember you. · You’<b>d better not</b> give up.',
    tente: 'Give a warning to someone going to a big party in your city.',
    ex: 'You’d better take a jacket. You’d better not drive home!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#d98a3a', titulo: 'Advice and warnings from the arena.', sub: 'Tap a moment, hear it, then give advice with should and warnings with ’d better.', rot: { por: 'WHAT IT MEANS', padrao: 'SHOULD · OUGHT TO · ’D BETTER', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["know","hear"],["love","hate"]],"iscas":["glove","think","bed","cow"],"pergunta":"When was the last time you felt like you were on your own?"},{"mentira":[["Second","First"],["glory","danger"]],"iscas":["story","summer","water","nice"],"pergunta":"Do you know what's in store for you this year? What are you excited about?"},{"mentira":[["back","forward"],["big","small"]],"iscas":["soldiers","miles","bag","black"],"pergunta":"Has good presentation ever saved you, maybe at a job interview or on a first date?"},{"mentira":[["has","loses"],["power","money"]],"iscas":["flower","tower","resident","ball"],"pergunta":"Is there something you do every day and think, why do I submit to it all?"},{"mentira":[["killing","washing"],["broken","fixed"]],"iscas":["area","feeling","spoken","magazine"],"pergunta":"If you could go out there and make people remember you, what would you do?"}];
