/* OS MOMENTOS-CHAVE de It Is Believed (11/10/2026): cinco falas do trailer de Disclosure Day.
   Forma: a lacuna. Alvo: passive reporting (It is believed that… / He is said to have…).
   As irmãs A2 e B1 usam trailers do mesmo filme. Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1, 2, 3], k: 'Not alone', quem: 'Steven Spielberg, the director',
    contexto: 'The director compares what he believes now with what he believed when he made Close Encounters.',
    frase: 'I am much more inclined now than I was when I made Close Encounters to really believe that <b>we’re not the only</b> intelligent civilization in the universe.',
    distr: ['we’re the only', 'we’re not the first'],
    explica: '<i>Inclined to</i> = tending to. He believes it more and more. In the news, that becomes impersonal.',
    formula: '<b>It is believed that</b> we are not alone. (It + passive + that-clause)',
    tente: 'Report a common belief about your country with It is believed / said that…',
    ex: 'It is said that Brazilians are always late. It is believed that coffee is good for you.' },
  { i: [4, 5, 6], k: 'Secrets', quem: 'A woman under arrest',
    contexto: 'Someone stole secret files, and she isn’t sorry.',
    frase: 'What did you steal? — <b>Secrets.</b> — I have a right to know the truth.',
    distr: ['Weapons', 'Money'],
    explica: 'One word answer, and it is enough. The press will report it without being sure.',
    formula: 'She <b>is said to have stolen</b> secrets. (to have + participle = earlier action)',
    tente: 'Report a rumor about a famous person, with is said to have…',
    ex: 'The actor is said to have bought an island. He is believed to be very shy.' },
  { i: [9, 10, 11], k: 'On air', quem: 'The TV reporter',
    contexto: 'A morning reporter starts the show, and something strange happens to her live.',
    frase: 'Good morning, Kansas City. Up against <b>the most extraordinary event</b> in human history.',
    distr: ['the most ordinary event', 'the most dangerous event'],
    explica: '<i>Up against</i> = facing. Thousands of people watched it, so the news reports it with distance.',
    formula: 'She <b>is reported to have lost</b> her voice on air. · ✗ is reported to lost',
    tente: 'Report a strange story from the news, with is reported to…',
    ex: 'A cat is reported to have travelled 300 kilometers to find its family.' },
  { i: [23, 24], k: 'Cannot accept', quem: 'A man in a dark room',
    contexto: 'The people hiding the truth explain why they hide it.',
    frase: 'The human race <b>cannot accept</b> what we know. We need to stop it any way we can.',
    distr: ['can accept', 'cannot expect'],
    explica: 'They think people can’t handle the truth. So the truth stayed hidden for decades.',
    formula: '<b>It is known that</b> the truth <b>was hidden</b>. · The files <b>are thought to</b> be real.',
    tente: 'What is known about your city’s history that tourists don’t know?',
    ex: 'It is known that the old station was a hospital during the war.' },
  { i: [32, 33, 34, 35, 36], k: 'For the better', quem: 'A voice on TV',
    contexto: 'The news is interrupted for the big question.',
    frase: 'How will disclosure change us? — I believe <b>for the better</b>.',
    distr: ['for the worse', 'forever'],
    explica: '<i>For the better</i> = in a good way. The voice believes the truth will make us kinder.',
    formula: 'The truth <b>is thought to</b> change everything. · ✗ It is thought to that',
    tente: 'Report a prediction about the future using is expected to / is thought to.',
    ex: 'Electric cars are expected to be cheaper in five years.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#5fb6c9', titulo: 'The redacted file.', sub: 'Tap a moment, hear it, fill the line, then report it like a journalist.', rot: { por: 'WHAT IT MEANS', padrao: 'IT IS SAID · HE IS SAID TO', voce: 'REPORT IT', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["more","less"],["made","saw"]],"iscas":["leave","lonely","how","mind"],"pergunta":"Do you believe we're not the only intelligent life in the universe? Why?"},{"mentira":[["steal","buy"],["know","tell"]],"iscas":["still","tooth","night","snow"],"pergunta":"Do you have any secrets that you have never told anyone?"},{"mentira":[["morning","evening"],["human","modern"]],"iscas":["warning","pretty","seven","mystery"],"pergunta":"What is the most extraordinary event you have ever lived through or seen?"},{"mentira":[["stop","start"],["know","fear"]],"iscas":["rice","shop","feed","woman"],"pergunta":"Is there something you cannot accept, even when other people say it's normal?"},{"mentira":[["disclosure","technology"],["change","help"]],"iscas":["chance","leave","letter","well"],"pergunta":"Has a big change in your life ever turned out for the better?"}];
