/* OS MOMENTOS-CHAVE de The Auction House (11/10/2026): o jogo de memória do Easy English.
   Forma: a lacuna. Alvo: a / an / the + adjetivo (big / small, old / new, heavy / light, cheap / expensive).
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [5, 6, 7, 8, 9], k: 'A game', quem: 'Tim and Georgie',
    contexto: 'Georgie is bored at work. Tim has an idea: a memory game.',
    frase: 'I’m bored. — Oh dear. — <b>Let’s play</b> a game. — Sounds great.',
    distr: ['Let’s pay', 'Let’s plan'],
    explica: '<i>Let’s</i> + verb = an idea for the two of us. <i>A game</i>: one game, any game.',
    formula: '<b>a</b> game · <b>a</b> + consonant sound',
    tente: 'You’re bored. Make a suggestion with Let’s…',
    ex: 'Let’s watch a movie! Let’s cook a big lunch!' },
  { i: [10, 11], k: 'Big and small', quem: 'Tim',
    contexto: 'Tim shows the things for the game. Georgie has to remember them.',
    frase: 'We have <b>a big</b> cuddly toy, a small cuddly toy.',
    distr: ['an big', 'the big'],
    explica: 'The adjective comes before the noun, and the article comes first of all.',
    formula: '<b>a</b> + adjective + noun: a big toy · ✗ a toy big',
    tente: 'Describe two things in your room with a + adjective + noun.',
    ex: 'I have a big bed and a small window.' },
  { i: [12, 13], k: 'Expensive', quem: 'Tim',
    contexto: 'Two computers: one costs a lot of money, and one doesn’t.',
    frase: 'We have <b>an expensive</b> computer, a cheap computer.',
    distr: ['a expensive', 'the expensive'],
    explica: '<i>Expensive</i> starts with a vowel sound, so we say <i>an</i>. <i>Cheap</i> starts with a consonant: <i>a</i>.',
    formula: '<b>an</b> + vowel sound: an expensive, an old · <b>a</b> cheap',
    tente: 'Tell me something expensive and something cheap you have.',
    ex: 'I have an expensive phone and a cheap watch.' },
  { i: [14, 15, 16, 17], k: 'New and old', quem: 'Tim',
    contexto: 'Heavy and light, new and old. The list is long now.',
    frase: 'A heavy box, a light box, a new TV, <b>an old</b> TV.',
    distr: ['a old', 'old'],
    explica: 'Same rule: <i>old</i> starts with a vowel sound, so <i>an old</i>.',
    formula: '<b>an</b> old TV · <b>a</b> new TV · ✗ a old TV',
    tente: 'Describe your kitchen: one thing old, one thing new.',
    ex: 'There is an old fridge and a new microwave.' },
  { i: [48, 49, 50, 51], k: 'The prize', quem: 'Tim and Georgie',
    contexto: 'Georgie remembers everything. Now she wants her prize.',
    frase: 'What’s the prize? — The prize is <b>this box</b>. — What’s in the box? — A round of applause.',
    distr: ['the box', 'a box'],
    explica: 'We use <i>the</i> for something we both know: the prize, the box. And the prize is a joke: just applause!',
    formula: '<b>the</b> prize · <b>the</b> box (we know which one) · <b>a</b> box (any box)',
    tente: 'What is a good prize for you?',
    ex: 'A good prize is a trip to the beach!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'lacuna', cor: '#c9963a', titulo: 'Going once, going twice: five lines.', sub: 'Tap a moment, hear it, and choose the missing words: a, an or the?', rot: { por: 'WHAT IT MEANS', padrao: 'A · AN · THE', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["bored","happy"],["great","bad"]],"iscas":["board","came","eight","deer"],"pergunta":"When you're bored, who do you say \"Let's play\" to?"},{"mentira":[["have","want"],["small","huge"]],"iscas":["boy","tall","muddy","hat"],"pergunta":"Did you have a big cuddly toy when you were a child?"},{"mentira":[["have","need"],["cheap","free"]],"iscas":["chip","sheep","half","deep"],"pergunta":"Do you have an expensive phone or computer at home?"},{"mentira":[["light","dark"],["new","big"]],"iscas":["fox","night","blue","ready"],"pergunta":"Do you have an old TV at home, or do you prefer new things?"},{"mentira":[["round","lot"],["applause","music"]],"iscas":["size","sound","socks","pause"],"pergunta":"If this box had a prize for you, what would you want inside?"}];
