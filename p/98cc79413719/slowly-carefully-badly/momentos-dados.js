/* OS MOMENTOS-CHAVE de Slowly, Carefully, Badly (11/10/2026): cinco falas do episódio da geladeira.
   Forma: a linha do tempo. Alvo: advérbios de modo (-ly; well, fast, hard, late) e look / feel + ADJETIVO.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0], k: 'Good morning', quem: 'The dad',
    contexto: 'A normal morning. Dad says hello with a big smile.',
    frase: 'Hey, <b>good morning</b>, Chilli.',
    explica: 'How does he say it? Happily. The adverb describes the action; the adjective describes the person.',
    formula: 'He says it <b>happily</b>. (adjective + <b>-ly</b>) · He <b>is</b> happy. (be + adjective)',
    tente: 'How do you say good morning on Mondays? Use an adverb.',
    ex: 'I say it slowly and quietly. I’m not a morning person!' },
  { i: [1, 2], k: 'This day', quem: 'The dad',
    contexto: 'Then he sees something, and his face changes.',
    frase: 'Ah, crud. <b>I knew this day was coming</b>.',
    explica: '<i>Crud</i> is a soft, funny way to say “oh no”. He speaks sadly, and he looks sad.',
    formula: 'He speaks <b>sadly</b>. · He <b>looks sad</b>. (look + adjective · ✗ looks sadly)',
    tente: 'How do you look on Friday afternoon? How do you work?',
    ex: 'I look happy, but I work very slowly!' },
  { i: [3, 4], k: 'Gotta go', quem: 'The dad',
    contexto: 'He leaves the house in a hurry. Something is happening.',
    frase: 'See you later, Chilli. <b>I gotta go</b>, um, I gotta go run an errand.',
    explica: '<i>Gotta</i> = have got to (informal). <i>Run an errand</i> = go out to do a small task. He leaves very fast.',
    formula: 'He leaves <b>fast</b>. (✗ fastly) · <b>quickly</b> · he works <b>hard</b> (✗ hardly)',
    tente: 'What do you do fast? What do you do slowly?',
    ex: 'I eat fast, but I drive slowly and carefully.' },
  { i: [9, 10], k: 'My fridge', quem: 'The dad',
    contexto: 'At a shop, he asks a strange question to a stranger.',
    frase: 'Have... <b>Have you seen my fridge?</b>',
    explica: 'He can’t find the right words. He asks the question nervously.',
    formula: 'He asks <b>nervously</b>. · He doesn’t speak <b>well</b> right now. (good → <b>well</b>)',
    tente: 'Describe how you speak English today: well, fast, slowly, carefully?',
    ex: 'I speak slowly, but I speak clearly.' },
  { i: [15, 16, 17], k: 'Conclusions', quem: 'The dad',
    contexto: 'In the end, he explains himself to the fridge. It was all a misunderstanding.',
    frase: 'Oh no, no, no, I was never going to replace you, see? <b>You can’t jump to conclusions</b> like that.',
    explica: '<i>Jump to conclusions</i> = decide too fast, without thinking. The lesson: think carefully.',
    formula: 'Think <b>carefully</b>. Don’t decide <b>fast</b>. · He explains it <b>well</b>.',
    tente: 'Tell me about a time you jumped to conclusions.',
    ex: 'I thought my friend was angry, but she was only tired. I decided too fast!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#e2683a', titulo: 'The fridge, five moments.', sub: 'Tap a mark, hear it, and say HOW he does it.', rot: { por: 'WHAT IT MEANS', padrao: 'HOW? ADVERBS', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["Hey","Bye"]],"iscas":["warning","food","wood","day"],"pergunta":"What do you usually say when you wake up and see your family in the morning?"},{"mentira":[["crud","great"],["Ah","Oh"]],"iscas":["new","way","running","mud"],"pergunta":"Have you ever had a day you knew was coming, like an exam or a big change?"},{"mentira":[["later","tomorrow"],["errand","event"]],"iscas":["waiter","grand","sun","sea"],"pergunta":"What do you say when you need to leave early, and where do you often have to go?"},{"mentira":[],"iscas":["bridge","clean","green","half"],"pergunta":"Have you ever lost something at home and asked, \"Have you seen my keys?\"?"},{"mentira":[["never","always"],["replace","forget"]],"iscas":["place","clever","knowing","jam"],"pergunta":"Has someone ever jumped to conclusions about you? What happened?"}];
