/* SPIRITED AWAY · O MUNDO (cena I · Warm-up and The Spirit Bag)  19/10/2026 — formato mala (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois cinco lugares da história, um por vez: o que está acontecendo?
   A1, já com o present continuous. */
window.WL_MUNDO = {
  forma: 'mala',
  cena: { rot: 'Warm-up and The Spirit Town', t: 'Before the trailer: you, right now, then a town for spirits.', p: 'Answer three questions about your life. Then open one picture at a time and say what is happening.' },
  mundoRot: 'The Spirit Town',
  guia: '<b>Warm-up and The Spirit Town (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). A1: short answers are fine. <b>2 · The Spirit Town:</b> five pictures open one at a time: the car, the tunnel, the food, the bathhouse, the bridge. With each, the student says what is happening, with is / are + -ing. At the end, they tell the story in three sentences.',
  foto: 'capa',
  aquece: [
    { img: 'estrada', q: 'Right now, what are you thinking about?', st: ['Right now, I am thinking about …'], filme: 'Chihiro is ten. She is sitting in the car. She isn’t smiling.', mais: 'And what are you doing tonight?', ex: 'Right now, I am thinking about my dinner. Tonight, I am cooking pasta.' },
    { img: 'banquete', q: 'What food can you eat and eat and never stop?', st: ['I can eat … all day.'], filme: 'In this film, the parents are eating and eating in an empty town.', mais: 'Who cooks it for you?', ex: 'I can eat pizza all day. My brother makes it on Sundays.' },
    { img: 'capa', q: 'Who is helping you this year? How?', st: ['My … is helping me with …'], filme: 'Chihiro is working in a big bathhouse for spirits.', mais: 'And who are you helping?', ex: 'My sister is helping me with my English. I am helping my father with his phone.' }
  ],
  itens: [
    { img: 'estrada', nome: 'the car', q: 'A family is in the car. What are they doing? Is the girl happy?', ex: 'They are moving to a new town. The girl isn’t smiling.' },
    { img: 'tunel', nome: 'the tunnel', q: 'An old red tunnel. What are the parents doing?', ex: 'They are walking into the tunnel. The girl is following them.' },
    { img: 'banquete', nome: 'the food', q: 'There is a lot of food, and nobody is there. What are the parents doing?', ex: 'They are eating and eating!' },
    { img: 'capa', nome: 'the bathhouse', q: 'A huge bathhouse. Who is working here? Who is coming here?', ex: 'Chihiro is working here. Spirits are coming to take a bath.' },
    { img: 'ponte', nome: 'the bridge', q: 'It is night. What are the lanterns doing? What is Chihiro doing?', ex: 'The lanterns are shining. Chihiro is walking on the bridge. She isn’t breathing!' }
  ],
  revelaRot: 'Whose story is it?',
  revela: 'It is Chihiro’s story. She is ten. Her parents walk into a tunnel and find a town for spirits. To save them, she is working in a bathhouse.',
  conta: 'Tell the story in three sentences. What is happening?',
  contaEx: 'Chihiro is moving to a new town. Her parents are eating in a strange town. Now she is working in a bathhouse to save them.',
  vida: [],
  antes: [
    { q: 'You saw the spirit town. In the trailer, what is Chihiro doing? Guess.', h: 'I think she is …ing.' },
    { q: 'It is night in the spirit town. What are the spirits doing?', h: 'They are …ing.' }
  ]
};
