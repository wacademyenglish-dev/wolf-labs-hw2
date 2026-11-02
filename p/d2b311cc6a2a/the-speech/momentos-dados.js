/* OS MOMENTOS-CHAVE de The Speech (11/10/2026): o discurso de John F. Kennedy na Rice University (1962).
   Forma: as abas. Alvo: recursos retóricos (tricolon, paralelismo, antítese, anáfora, a analogia que torna um número humano).
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [13, 14, 15, 16], k: 'A brief lecture', quem: 'John F. Kennedy',
    contexto: 'Houston, 1962. The president opens a famous speech about going to the Moon with a small joke.',
    frase: 'I appreciate your president having made me an honorary visiting professor, and I will assure you that <b>my first lecture will be very brief</b>.',
    explica: 'A light joke before a serious speech: it relaxes the audience and builds trust.',
    formula: 'The opening joke: modest, short, and it makes the audience smile.',
    tente: 'Open a short talk about your city with a small, modest joke.',
    ex: 'I was asked to talk about my city for five minutes. I’ll try to finish before the traffic does!' },
  { i: [20, 21, 22, 23], k: 'All three', quem: 'John F. Kennedy',
    contexto: 'He praises the college, the city and the state, one after the other.',
    frase: 'We meet at a college noted for knowledge, in a city noted for progress, in a state noted for strength, <b>and we stand in need of all three</b>.',
    explica: 'Three parts with the same grammar, and then a short sentence that ties them together.',
    formula: '<b>Tricolon</b>: three parallel parts (noted for…, noted for…, noted for…), the strongest at the end.',
    tente: 'Describe your family or your team with a tricolon.',
    ex: 'My team is known for its ideas, its energy and its patience. We need all three.' },
  { i: [24, 25, 26, 27], k: 'Change and challenge', quem: 'John F. Kennedy',
    contexto: 'He describes the moment in history with a rhythm that repeats.',
    frase: 'For we meet in an hour of change and challenge, in a decade of hope and fear, <b>in an age of both knowledge and ignorance</b>.',
    explica: 'The same start again and again (<i>in an…</i>) is <b>anaphora</b>. Opposite pairs (hope × fear) are <b>antithesis</b>.',
    formula: '<b>Anaphora</b>: in an hour…, in a decade…, in an age… · <b>Antithesis</b>: hope and fear',
    tente: 'Describe this year of your life with three “in a…” parts and an opposite pair.',
    ex: 'In a year of work and worry, in a month of rain and sun, I found time to study.' },
  { i: [28, 29], k: 'Greater', quem: 'John F. Kennedy',
    contexto: 'Then a line that sounds like a paradox.',
    frase: '<b>The greater our knowledge increases, the greater our ignorance unfolds.</b>',
    explica: 'The more we learn, the more we discover we don’t know. Antithesis inside a double comparative.',
    formula: 'the greater…, the greater… · <b>antithesis</b>: knowledge × ignorance',
    tente: 'Make your own paradox with The more…, the more…',
    ex: 'The more I travel, the more I realize how little I’ve seen.' },
  { i: [41, 42, 43, 44, 45], k: 'Fifty years', quem: 'John F. Kennedy',
    contexto: 'Human history is too long to imagine. So he makes it smaller.',
    frase: 'No man can fully grasp how far and how fast we have come, but <b>condense, if you will, the 50,000 years</b> of man’s recorded history in a time span of about a half a century.',
    explica: '<i>Condense</i> = make shorter. He turns 50,000 years into 50, so we can feel the speed of progress.',
    formula: '<b>An analogy</b> that makes a big number human: 50,000 years → 50 years.',
    tente: 'Explain a big number from your life or work with a human comparison.',
    ex: 'I answer 200 emails a week. That’s like writing a short book every month!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#5f8fd9', titulo: 'The shape of a great speech.', sub: 'Tap a moment, hear it, name the device, then use it in your own sentence.', rot: { por: 'WHAT IT DOES', padrao: 'THE DEVICE', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["president","mayor"],["professor","doctor"]],"iscas":["beef","present","fast","maid"],"pergunta":"Do you prefer talks where my first lecture will be very brief, or long and detailed?"},{"mentira":[["city","town"],["strength","wealth"]],"iscas":["meat","pity","length","late"],"pergunta":"What do you and your family stand in need of right now?"},{"mentira":[["hope","doubt"],["change","peace"]],"iscas":["our","hear","home","meat"],"pergunta":"Do you feel we live in an age of both knowledge and ignorance? Why?"},{"mentira":[["increases","decreases"]],"iscas":["college","holds","great","cases"],"pergunta":"Has learning something new ever made you realize how much you still don't know?"},{"mentira":[["fast","slow"],["century","decade"]],"iscas":["grass","mystery","some","plan"],"pergunta":"If you condense the last 50,000 years into one story, what would you tell a friend?"}];
