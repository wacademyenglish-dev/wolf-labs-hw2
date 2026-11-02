/* OS MOMENTOS-CHAVE de Where Is It? (11/10/2026): a Georgie e a caixa (BBC Learning English).
   Forma: a lacuna (ouvir e escolher a preposição). Alvo: next to, behind, in front of, under, above, between, on; in × at.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [8], k: 'Next to', quem: 'Georgie',
    contexto: 'Georgie has a chair and a big box. She shows every position with her body.',
    frase: 'So first up, I’m sitting <b>next to</b> the box.',
    distr: ['in front of', 'behind'],
    explica: '<i>Next to</i> = at the side, very close. Two words, always together.',
    formula: 'I’m <b>next to</b> the box. · Where is it? It’s <b>next to</b>…',
    tente: 'Look around you. What is next to you right now?',
    ex: 'My phone is next to my coffee. My dog is next to the door.' },
  { i: [10, 11], k: 'Behind', quem: 'Georgie',
    contexto: 'Now she moves around the box: back, then front.',
    frase: 'I’m <b>behind</b> the box, and I’m in front of the box.',
    distr: ['next to', 'under'],
    explica: '<i>Behind</i> = at the back. <i>In front of</i> = at the front. They are opposites.',
    formula: '<b>behind</b> × <b>in front of</b> · ✗ in front the box (of is necessary)',
    tente: 'What is behind you? What is in front of you?',
    ex: 'Behind me there’s a bookshelf. In front of me there’s my computer.' },
  { i: [12, 13, 14, 15], k: 'Under', quem: 'Georgie',
    contexto: 'Then she goes under the box, and she is stuck!',
    frase: 'Now I am <b>under</b> the box. Oh no, I’m stuck. Okay, the box is above my head.',
    distr: ['on', 'above'],
    explica: '<i>Under</i> = below, at the bottom. <i>Above</i> = higher, not touching. She is under, the box is above.',
    formula: 'I’m <b>under</b> the box. · The box is <b>above</b> my head.',
    tente: 'Tell me something under your bed and something above your desk.',
    ex: 'There’s a box of shoes under my bed. There’s a lamp above my desk.' },
  { i: [18, 19, 20], k: 'Between', quem: 'Georgie',
    contexto: 'Georgie dances in the middle of the chair and the box.',
    frase: 'Oh, now I am dancing <b>between</b> the chair and the box.',
    distr: ['next to', 'in front of'],
    explica: '<i>Between</i> = in the middle of two things. It always comes with <i>and</i>.',
    formula: '<b>between</b> the chair <b>and</b> the box · ✗ between the chair with the box',
    tente: 'What is between your house and your work or school?',
    ex: 'Between my house and my work there’s a big park.' },
  { i: [41, 42, 43, 44], k: 'In or at?', quem: 'Georgie',
    contexto: 'The confusing part: in and at. Some combinations you just learn by heart.',
    frase: 'We say, I’m in the office, but I’m <b>at work</b>. We say, I’m in the house, but I’m at home.',
    distr: ['in work', 'on work'],
    explica: '<i>In</i> for the space itself (the office, the house). <i>At</i> for the place as an activity (work, home, school).',
    formula: 'I’m <b>at</b> work · <b>at</b> home · <b>at</b> school · but <b>in</b> the office · <b>in</b> the house',
    tente: 'Where are you right now? In or at?',
    ex: 'I’m at home, in the living room.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#c97b5a', titulo: 'Georgie and the box.', sub: 'Tap a moment, hear it, and choose the missing preposition.', rot: { por: 'WHAT IT MEANS', padrao: 'WHERE IS IT?', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["first","last"],["sitting","standing"]],"iscas":["worst","hitting","fox","boss"],"pergunta":"When you watch TV at home, who usually sits next to you?"},{"mentira":[["front","back"],["box","bag"]],"iscas":["fox","books","blind","frog"],"pergunta":"What is behind you right now in the room where you are?"},{"mentira":[["stuck","happy"],["above","below"]],"iscas":["truck","luck","bed","hand"],"pergunta":"What do you keep under your bed at home?"},{"mentira":[["dancing","sitting"],["chair","table"]],"iscas":["chasing","care","share","socks"],"pergunta":"What is between your home and your work or school?"},{"mentira":[["office","kitchen"],["house","garden"]],"iscas":["mouse","horse","day","offer"],"pergunta":"What time are you usually at work or at school in the morning?"}];
