/* OS MOMENTOS-CHAVE de Two Mice, Three Children (15/10/2026): o começo do vídeo em cinco falas.
   Forma: do singular ao plural (one mouse → mice, strawberry → strawberries, guest → guests).
   Lidos pela cena Line by Line do kit (kit/legenda.js). A1: frases curtas. */
window.WL_MOMENTOS = [
  { i: [0, 1], k: 'A tiny mouse', quem: 'The narrator',
    contexto: 'Day 1. We meet Bernard.',
    frase: 'This is Bernard, <b>a tiny mouse</b> who can balance on a single stem of wheat.',
    explica: '<i>Tiny</i> = very, very small. One mouse: <b>a mouse</b>.',
    formula: 'one <b>mouse</b> → two <b>mice</b>',
    tente: 'Is there a tiny animal in your house?',
    ex: 'Yes, a tiny fish. / No.' },
  { i: [2, 3, 4], k: 'Mice in the wild', quem: 'The narrator',
    contexto: 'Where do these mice live?',
    frase: 'In the wild, harvest <b>mice</b> live in meadows and wheat fields.',
    explica: 'More than one mouse: <b>mice</b>. A new word, not “mouses”.',
    formula: 'one mouse, three <b>mice</b>',
    tente: 'Where do mice live? In a house? In a field?',
    ex: 'In a field. And in my garden!' },
  { i: [16, 17, 18, 19], k: 'A strawberry', quem: 'The narrator',
    contexto: 'How big is Bernard?',
    frase: 'Roughly the size of <b>a strawberry</b>. And his new home is big enough for quite a few <b>strawberries</b>.',
    explica: 'strawberr<b>y</b> → strawberr<b>ies</b>. Like baby → babies.',
    formula: 'consonant + y → <b>-ies</b>: baby → babies, city → cities',
    tente: 'Do you like strawberries?',
    ex: 'Yes, I love strawberries.' },
  { i: [30, 31, 32, 33], k: 'New guests', quem: 'The narrator',
    contexto: 'Day 5. Visitors arrive.',
    frase: 'And by day five, our new <b>guests</b> arrived.',
    explica: '<i>Guest</i> = a person who visits. Most words: <b>+ s</b>.',
    formula: 'one guest → two <b>guests</b>',
    tente: 'Do you have guests at home on the weekend?',
    ex: 'Sometimes. My sister and her children.' },
  { i: [34, 35, 36, 37], k: 'Three mice now', quem: 'The narrator',
    contexto: 'Bianca and Gus. Now there are three mice.',
    frase: 'This is Bianca and this is Gus. Bernard has <b>two girlfriends</b>. Harvest <b>mice</b> might be extremely cute.',
    explica: 'Two girlfriend<b>s</b> (+ s). Three <b>mice</b> (new word).',
    formula: 'one mouse, <b>three mice</b>',
    tente: 'How many animals are in your house?',
    ex: 'Two. A dog and a cat.' }
];
window.WL_MOMENTOS_ESTILO = { forma: 'jogo' };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["balance","sleep"],["single","double"]],"iscas":["house","meat","team","sweet"],"pergunta":"Have you ever seen a tiny mouse, or another very small animal, near your home?"},{"mentira":[["wild","city"],["wheat","rice"]],"iscas":["child","leave","feels","white"],"pergunta":"Have you ever seen mice or other small animals living in the wild?"},{"mentira":[["big","small"],["new","old"]],"iscas":["quiet","phone","knew","nice"],"pergunta":"What is your favorite way to eat a strawberry?"},{"mentira":[["five","ten"],["arrived","left"]],"iscas":["stay","dive","blue","drive"],"pergunta":"When guests come to your home, what do you like to cook for them?"},{"mentira":[["has","needs"],["cute","ugly"]],"iscas":["rice","night","cut","nice"],"pergunta":"Who are the two people you spend the most time with these days?"}];
