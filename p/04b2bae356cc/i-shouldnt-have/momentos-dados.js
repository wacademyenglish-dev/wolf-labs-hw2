/* OS MOMENTOS-CHAVE de I Shouldn’t Have Wished (11/10/2026): o trailer de Obsession contado com arrependimento.
   Forma: a linha do tempo. Alvo: modais no passado (should / shouldn’t have, could have, couldn’t have, needn’t have).
   A irmã B1 (If I Had One Wish) usa o mesmo trailer para o second conditional. Lidos pela cena Line by Line (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [4, 5, 6], k: 'Ask her out', quem: 'The young man',
    contexto: 'He finally tries to ask Nikki for a drink. It doesn’t go well.',
    frase: 'Nikki, I think we should grab a drink sometime. Wait, I was gonna ask you... <b>I lost my train of thought</b>.',
    explica: '<i>Lose your train of thought</i> = forget what you were saying. The moment passes, and he does nothing.',
    formula: 'He <b>should have asked</b> her out clearly. (should have + participle = regret)',
    tente: 'Tell me about a moment you lost your words. What should you have said?',
    ex: 'In my job interview I froze. I should have prepared more examples.' },
  { i: [10, 11, 12], k: 'The wish', quem: 'The young man',
    contexto: 'Instead, he buys a magic wish.',
    frase: 'One wish, Willow. <b>I wish Nikki Freeman loved me</b> more than anyone in the entire world.',
    explica: 'He chooses magic over honesty. Everything that happens next comes from this sentence.',
    formula: 'He <b>shouldn’t have made</b> that wish. · ✗ shouldn’t have make',
    tente: 'Tell me about something you shouldn’t have bought or done.',
    ex: 'I shouldn’t have bought those expensive shoes. I never wear them.' },
  { i: [17, 18, 19], k: 'All of a sudden', quem: 'A friend',
    contexto: 'Overnight, Nikki is in love with him. Their friends notice.',
    frase: 'It’s weird how you two are dating <b>all of a sudden</b>. Like, super dating.',
    explica: 'The friends find it strange, but nobody imagines magic.',
    formula: 'They <b>couldn’t have known</b> about the wish. (it was impossible)',
    tente: 'Tell me about a surprise nobody could have predicted.',
    ex: 'Nobody could have known the company would close. It happened in one week.' },
  { i: [20, 21, 22, 23, 24, 25], k: 'Something is wrong', quem: 'Friends at school',
    contexto: 'Nikki is not okay. Someone suspects magic.',
    frase: 'I think Nikki is going through something. — Is she okay? — No. — Jeez, <b>what kind of spell</b> did you put on her?',
    explica: 'The signs were there. He saw them, and he waited.',
    formula: 'He <b>could have stopped</b> it earlier. (there was another option)',
    tente: 'Tell me about a problem you could have avoided.',
    ex: 'I could have saved the file. I lost three hours of work.' },
  { i: [26, 27, 28, 29], k: 'Cancel a wish', quem: 'The young man, on the phone',
    contexto: 'He calls the shop. There is no way to cancel.',
    frase: 'I was calling to see if there’s a way I can <b>cancel a wish</b>. — So she’s just stuck like this? — As long as I live.',
    explica: 'There is no undo button. The rules were there from the start.',
    formula: 'He <b>should have read</b> the rules. · He <b>needn’t have</b> bought it. (he did, but it wasn’t necessary)',
    tente: 'Tell me about something you did that you needn’t have done.',
    ex: 'I needn’t have brought an umbrella. It didn’t rain at all!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#d6587f', titulo: 'The rewind.', sub: 'Tap a mark on the line, hear it, and say what he should, could or couldn’t have done.', rot: { por: 'WHAT IT MEANS', padrao: 'SHOULD / COULD HAVE + PARTICIPLE', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["grab","buy"],["ask","tell"]],"iscas":["crab","task","weight","rain"],"pergunta":"Have you ever lost your train of thought in the middle of a conversation? What happened?"},{"mentira":[["more","less"],["world","town"]],"iscas":["word","door","tire","fish"],"pergunta":"If you had one wish for your life right now, what would you wish for?"},{"mentira":[["weird","great"],["two","three"]],"iscas":["beard","waiting","soup","zoo"],"pergunta":"Has something in your life ever changed all of a sudden? What happened?"},{"mentira":[["think","know"],["okay","sick"]],"iscas":["smell","find","threw","sink"],"pergunta":"If you could cast a spell on someone, what kind of spell would you choose?"},{"mentira":[["calling","waiting"],["stuck","happy"]],"iscas":["day","truck","song","leave"],"pergunta":"Is there a wish you made once that you would like to cancel?"}];
