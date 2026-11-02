/* OS MOMENTOS-CHAVE de He Couldn’t Beat Ryu (11/10/2026): cinco falas do trailer de Street Fighter.
   Forma: a lacuna (ouvir e escolher as palavras). Alvo: could / couldn’t, was able to.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [2, 3], k: 'The best fighters', quem: 'The announcer',
    contexto: 'A big voice opens the tournament. Everybody is here, and only one can be the champion.',
    frase: 'Gathered here are <b>the world’s best</b> fighters.',
    distr: ['the world’s good', 'the world’s better'],
    explica: '<i>The best</i> = number one. Many fighters came, but only one could win.',
    formula: 'Only one fighter <b>could</b> win. (could + verb, no <i>to</i>)',
    tente: 'Who is the best at something in your family? What could he or she do as a child?',
    ex: 'My brother is the best cook. He could make a cake at ten!' },
  { i: [9, 10], k: 'Not a warrior', quem: 'Someone, to Ken',
    contexto: 'Somebody tells Ken the truth: he is famous now, but he is not a real fighter anymore.',
    frase: 'You’re not <b>a warrior</b> anymore, you’re a sideshow.',
    distr: ['a winner', 'a fighter'],
    explica: '<i>A sideshow</i> = a small show for fun, not the real thing. Before, Ken could fight. Now he smiles for cameras.',
    formula: 'Before, he <b>could</b> fight. · Now he <b>can’t</b>... or can he?',
    tente: 'What could you do as a child that you can’t do now?',
    ex: 'I could do a cartwheel when I was eight. Now I can’t!' },
  { i: [13], k: 'Redemption', quem: 'A voice in the trailer',
    contexto: 'The tournament is a second chance for Ken. Years ago, he lost to Ryu.',
    frase: 'This is your <b>shot at redemption</b>.',
    distr: ['chance to win', 'shot at the title'],
    explica: '<i>Shot</i> = chance. <i>Redemption</i> = fixing an old failure. Ken couldn’t beat Ryu before. Maybe now he can.',
    formula: 'Ken <b>couldn’t</b> beat Ryu. · Maybe now he <b>can</b>.',
    tente: 'What couldn’t you do at first, but did later?',
    ex: 'I couldn’t pass my driving test the first time. The second time, I could!' },
  { i: [17, 18, 19], k: 'The finder', quem: 'The finder',
    contexto: 'Ryu lives far from everybody now. A stranger finds him anyway.',
    frase: 'How did you find me? — I’m <b>paid to find</b> champions. Even if they’re lost.',
    distr: ['able to find', 'happy to find'],
    explica: 'It was difficult, but she found him. For one hard success in the past, we say <i>was able to</i>.',
    formula: '<b>Could</b> you find him? · Yes, she <b>was able to</b> find him. (once, a difficult thing)',
    tente: 'What were you able to do last month that was difficult?',
    ex: 'I was able to finish a big project at work. I was so tired!' },
  { i: [20], k: 'Old friends', quem: 'Ryu and Ken',
    contexto: 'After many years, the two rivals meet again. They are still friends.',
    frase: 'Good to see you, <b>old friend</b>.',
    distr: ['my friend', 'old fighter'],
    explica: '<i>Old friend</i> = a friend for a long time, not an old person. They couldn’t stop being friends, or rivals.',
    formula: 'They <b>couldn’t</b> stop being rivals. · <b>Could</b> they be a team? Yes, they <b>could</b>.',
    tente: 'Who is your oldest friend? What could you two do together as kids?',
    ex: 'My oldest friend is Lucas. We could play football for hours!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#ef5b3b', titulo: 'Round five: fill the line.', sub: 'Tap a moment, hear it, and choose the missing words. Then see what could and couldn’t happen.', rot: { por: 'WHAT IT MEANS', padrao: 'COULD · COULDN’T · WAS ABLE TO', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["here","there"],["fighters","writers"]],"iscas":["word","west","father","hear"],"pergunta":"Who is the world's best at something you love, like a singer or an athlete?"},{"mentira":[["anymore","today"],["sideshow","superstar"]],"iscas":["worry","floor","side","shoe"],"pergunta":"Do you know someone who is a warrior, someone who never gives up? Who?"},{"mentira":[["is","was"],["your","his"]],"iscas":["shop","hot","attention","shore"],"pergunta":"Have you ever had a shot at redemption after a mistake? What happened?"},{"mentira":[["champions","doctors"],["lost","found"]],"iscas":["last","chances","fine","eleven"],"pergunta":"If you were paid to find something, what would you like to find?"},{"mentira":[["see","hear"],["you","them"]],"iscas":["food","wood","sea","end"],"pergunta":"Who is an old friend you would love to see again soon?"}];
