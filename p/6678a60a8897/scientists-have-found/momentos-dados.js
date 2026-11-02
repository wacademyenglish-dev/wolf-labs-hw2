/* OS MOMENTOS-CHAVE de Scientists Have Found… (11/10/2026): a rocha de Marte (notícia).
   Forma: a linha do tempo. Alvo: present perfect da notícia, a passiva (has been found), o passado com tempo terminado.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [2, 3], k: 'The clearest sign', quem: 'The reporter',
    contexto: 'A spotted rock on Mars might be evidence of ancient life. NASA is excited.',
    frase: 'NASA called it <b>the clearest sign of life</b> that we have ever found.',
    explica: '<i>Ever</i> + present perfect = in all our history, until now.',
    formula: 'the clearest sign we <b>have ever found</b> · the best food I<b>’ve ever eaten</b>',
    tente: 'What is the best news you have ever heard?',
    ex: 'The best news I’ve ever heard was that my sister was pregnant.' },
  { i: [35, 36, 37], k: 'So far', quem: 'The reporter',
    contexto: 'The rover is still working, and the count is still going up.',
    frase: 'So far, the Perseverance rover <b>has collected</b> more than 20 rock samples from the Red Planet.',
    explica: '<i>So far</i> = until now. The number can still change, so we use the present perfect.',
    formula: '<b>So far</b>, it <b>has collected</b>… · 20 samples <b>have been collected</b>. (passive)',
    tente: 'What have you done so far this week?',
    ex: 'So far I’ve finished two reports and I’ve been to the gym once.' },
  { i: [62, 63], k: 'In 2021', quem: 'The reporter',
    contexto: 'The story starts on the day the rover arrived.',
    frase: '<b>In 2021</b>, the Perseverance Mars Rover landed in Jezero Crater.',
    explica: 'A finished time (in 2021, yesterday, last year) needs the past simple, not the present perfect.',
    formula: 'In 2021 it <b>landed</b>. · ✗ In 2021 it has landed.',
    tente: 'Tell me something that happened to you in 2021.',
    ex: 'In 2021 I moved to a new apartment and I adopted a cat.' },
  { i: [79, 80, 81], k: 'Not yet', quem: 'The reporter',
    contexto: 'Maybe the minerals didn’t come from life. But there is no proof of that either.',
    frase: 'It’s possible these minerals did not come from microbes, but researchers <b>haven’t been able to</b> find any evidence of that yet.',
    explica: '<i>Yet</i> at the end of a negative = until now, but maybe in the future.',
    formula: 'They <b>haven’t found</b> evidence <b>yet</b>. · ✗ They didn’t find yet',
    tente: 'Tell me something you haven’t done yet this year, but want to.',
    ex: 'I haven’t traveled yet this year. I haven’t read a book in English yet.' },
  { i: [97, 98, 99], k: 'Life on Mars?', quem: 'The reporter',
    contexto: 'The big question at the end, and an honest answer.',
    frase: 'So, <b>has Perseverance definitely found</b> life on Mars? No, not yet.',
    explica: 'The news in one sentence, in the passive: the thing first.',
    formula: 'Life <b>hasn’t been found</b> yet. · A rock <b>has been found</b>.',
    tente: 'Write a headline about your city this week, with has / have been.',
    ex: 'A new park has been opened downtown. Two streets have been closed.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#d9673a', titulo: 'Breaking news from Mars.', sub: 'Tap a mark on the line, hear it, then tell the news: has found, has been found, found.', rot: { por: 'WHAT IT MEANS', padrao: 'HAS FOUND · HAS BEEN FOUND', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["ever","never"],["found","lost"]],"iscas":["cold","nine","wife","round"],"pergunta":"Do you think we will find the clearest sign of life on another planet one day?"},{"mentira":[["more","less"],["rock","soil"]],"iscas":["clock","simple","plane","car"],"pergunta":"Has your family collected anything special over the years, like coins, photos or stamps?"},{"mentira":[["landed","crashed"],["Rover","Rocket"]],"iscas":["sand","cover","later","stars"],"pergunta":"What important thing happened in your life in 2021?"},{"mentira":[["possible","impossible"],["find","hide"]],"iscas":["some","mind","get","bikes"],"pergunta":"Is there something you haven't been able to do yet, but really want to?"},{"mentira":[["life","water"],["yet","now"]],"iscas":["wife","hot","wet","cars"],"pergunta":"Has your favorite team definitely found its best player, or are you still waiting?"}];
