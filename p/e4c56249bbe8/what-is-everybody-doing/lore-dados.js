/* SPIRITED AWAY · O LORE (cena I · The Film)  09/10/2026 — A1, já com o present continuous (is / are + -ing). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of a spirit town with a bathhouse and a river, at night',
  rotulo: 'THE MAP OF THE SPIRIT TOWN', anda: 'Walk to the next stop',
  fimTit: 'A girl in a car, a tunnel, and a town for spirits.',
  fim: 'Now you know the story. Now the trailer.',
  antes: [
    { q: 'You know the bathhouse now. In the trailer, what is Chihiro doing? Guess.', h: 'I think she is …ing.' },
    { q: 'It is night in the spirit town. What are the spirits doing?', h: 'They are …ing.', r: 'They are eating, working at the bathhouse and walking in the streets.' }
  ],
  paradas: [
    { k: 'THE CAR', nome: 'The Car', dur: 'MOVING DAY', x: 14, y: 70, img: 'estrada',
      h: 'A sad girl in the car',
      t: 'Chihiro is ten. She is sitting in the back of the car with flowers. Her family is moving to a new town. She isn’t smiling.',
      q: 'Right now, what are you thinking about?', st: ['Right now, I am thinking about …', 'I am not thinking about …'],
      ex: 'Right now, I am thinking about my dinner.' },
    { k: 'THE TUNNEL', nome: 'The Tunnel', dur: 'THE WRONG ROAD', x: 32, y: 50, img: 'tunel',
      h: 'A tunnel in the forest',
      t: 'Her father is driving on the wrong road. They find an old red tunnel. The parents are walking in, and Chihiro is following them.',
      q: 'What are you doing this week that you don’t like?', st: ['This week, I am …', 'I don’t like it because …'],
      ex: 'This week, I am painting my apartment.' },
    { k: 'THE FOOD', nome: 'The Food', dur: 'THE PIGS', x: 52, y: 66, img: 'banquete',
      h: 'Her parents are eating',
      t: 'On the other side, there is a quiet town with a lot of food. Nobody is there. The parents are eating and eating.',
      q: 'What food can you eat and eat and never stop?', st: ['I can eat … all day.', 'I am eating it a lot this month.'],
      ex: 'I can eat pizza all day.' },
    { k: 'THE BATHHOUSE', nome: 'The Bathhouse', dur: 'WORKING', x: 70, y: 34, img: 'capa',
      h: 'A job for spirits',
      t: 'To save her parents, Chihiro is working in a huge bathhouse. Spirits come here to take a bath. A witch is the boss.',
      q: 'Who is helping you this year? How?', st: ['… is helping me with …', 'I am helping … too.'],
      ex: 'My sister is helping me with my English.' },
    { k: 'THE BRIDGE', nome: 'The Bridge', dur: 'AT NIGHT', x: 86, y: 58, img: 'ponte',
      h: 'Don’t breathe on the bridge',
      t: 'At night, the lanterns are shining. Chihiro is walking on the bridge, and she is not breathing: if she breathes, the spirits can see her.',
      q: 'What is something brave that you are doing now?', st: ['Now, I am …', 'It is scary, but …'],
      ex: 'Now, I am learning to drive.' }
  ]
};
