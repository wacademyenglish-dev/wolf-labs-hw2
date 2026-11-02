/* OS MOMENTOS-CHAVE de Which Is Why It Matters (11/10/2026): as eleições de meio de mandato nos EUA.
   Forma: as abas. Alvo: sentence relative — ", which" comenta a ideia inteira (which is why / which means / which explains / which surprised).
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1, 2, 3, 4], k: 'Midterms', quem: 'The narrator',
    contexto: 'In the US, there are elections between presidential elections.',
    frase: 'Midterm elections. They happen right in the middle of the president’s term, <b>two years after the presidential election</b> and two years before the next one.',
    explica: '<i>Term</i> = the time in office. They are in the middle of it.',
    formula: '…in the middle of the term, <b>which is why</b> they are called midterms.',
    tente: 'Tell me a fact about your country and add , which is why…',
    ex: 'It rains a lot in São Paulo in summer, which is why everybody carries an umbrella.' },
  { i: [12, 13, 14, 15], k: 'Congress', quem: 'The narrator',
    contexto: 'Congress has two parts, and they are elected differently.',
    frase: 'Americans are represented by 535 lawmakers in Congress, <b>which is split up into two chambers</b>, the Senate and the House of Representatives.',
    explica: 'Here <i>which</i> is about one noun (Congress). Next, we’ll use it for a whole idea.',
    formula: 'Congress, <b>which</b> has two chambers, … (about one noun) · ✗ Congress, that has…',
    tente: 'Describe a place in your city with , which… in the middle.',
    ex: 'The old market, which is 100 years old, sells the best cheese in town.' },
  { i: [27, 28], k: 'Turnout', quem: 'The narrator',
    contexto: 'Fewer people vote in the midterms.',
    frase: 'Historically, voter turnout in the midterms is <b>lower than presidential elections</b>.',
    explica: '<i>Turnout</i> = how many people vote. Fewer voters: each vote has more weight.',
    formula: 'Fewer people vote, <b>which means</b> each vote counts more. (which = the whole idea)',
    tente: 'Tell me a change in your routine and what it means, with , which means…',
    ex: 'I started working from home, which means I save two hours a day.' },
  { i: [36, 37, 38], k: 'The curse', quem: 'The narrator',
    contexto: 'There is a pattern in American history.',
    frase: 'The president’s party almost always seems to <b>lose ground</b> in the midterm elections.',
    explica: '<i>Lose ground</i> = lose power or position. It happens so often that people call it a curse.',
    formula: 'The party usually loses, <b>which explains</b> the nickname “the curse”.',
    tente: 'Describe a pattern in your family or work with , which explains…',
    ex: 'My brother always arrives late, which explains why we never wait for him.' },
  { i: [46, 47], k: 'The sweep', quem: 'The narrator',
    contexto: 'In 2006, the change was enormous.',
    frase: 'That year <b>Democrats swept both chambers</b> from the GOP.',
    explica: '<i>Sweep</i> = win everything. <i>GOP</i> = the Republican Party.',
    formula: 'They won both chambers, <b>which surprised</b> many people. · ✗ , what surprised · ✗ , that surprised',
    tente: 'Tell me about a surprising result with , which surprised…',
    ex: 'Our small team won the tournament, which surprised everyone.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#d94f5f', titulo: 'Election night: five lines.', sub: 'Tap a moment, hear it, then comment on the whole idea with , which…', rot: { por: 'WHAT IT MEANS', padrao: ', WHICH IS WHY · , WHICH MEANS', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["before","after"],["next","last"]],"iscas":["happy","little","turn","ears"],"pergunta":"Do you follow politics in your country, even two years after the presidential election?"},{"mentira":[["lawmakers","judges"],["Senate","Court"]],"iscas":["mouse","lawyers","progress","sent"],"pergunta":"Do you know how Brazil's Congress works, and is it also split up into two chambers?"},{"mentira":[["voter","student"],["midterms","primaries"]],"iscas":["water","vote","turn","town"],"pergunta":"Do you always vote in Brazil, even when the election feels less important?"},{"mentira":[["always","never"],["party","family"]],"iscas":["pretty","most","teams","resident"],"pergunta":"Have you ever felt like you were starting to lose ground at work or school?"},{"mentira":[["year","week"],["from","for"]],"iscas":["slept","changes","boat","ear"],"pergunta":"Do you remember an election in Brazil where one party swept almost everything?"}];
