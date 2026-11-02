/* THE BATMAN · O LORE (cena I · The Story)  09/10/2026 — B1, já com must be / might be / could be / can't be. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of a dark, rainy city with crime scenes marked',
  rotulo: 'THE CASE MAP', anda: 'Follow the next clue',
  fimTit: 'A rainy city, a killer who leaves cards, and a detective in a mask.',
  fim: 'Now you know the case. Now the trailer.',
  antes: [
    { q: 'You know the case now. In the trailer, who might the Riddler be? Guess.', h: 'It might be … / It can’t be …', r: 'It might be someone from the city government. It can’t be the mayor: he’s the first victim.' },
    { q: 'Why does the Riddler leave cards for the Batman? What must he want?', h: 'He must want … / He might …', r: 'He must want Batman to see that the city is full of lies.' }
  ],
  paradas: [
    { k: 'GOTHAM', nome: 'Gotham', dur: 'ALWAYS RAINING', x: 50, y: 22, img: 'gotham',
      h: 'A city that never dries',
      t: 'In this film, Gotham City is dark and wet: it seems to rain every day. The rich get richer, and many people are angry.',
      q: 'Look at the weather where you are. What must it be like in Gotham today?', st: ['It must be …', 'It can’t be …'],
      ex: 'It must be raining again.' },
    { k: 'YEAR TWO', nome: 'Year Two', dur: 'BRUCE WAYNE', x: 20, y: 52, img: 'mesa',
      h: 'A young man who barely sleeps',
      t: 'Bruce Wayne lost his parents as a boy. Now he is young and rich, and he has been the Batman for two years. He barely sleeps and barely eats. He must be exhausted, but he never stops.',
      q: 'A friend never sleeps and never eats. What might be wrong?', st: ['He might be …', 'He must be … / He can’t be …'],
      ex: 'He might be stressed at work.' },
    { k: 'THE CARDS', nome: 'The Cards', dur: 'THE RIDDLES', x: 44, y: 76, img: 'cartao',
      h: 'A card at every crime scene',
      t: 'Somebody is killing the powerful people who run Gotham. At every crime scene, there is a card for the Batman, with a riddle on it.',
      q: 'You find a strange note on your door. Who could it be from?', st: ['It could be from …', 'It can’t be from …'],
      ex: 'It could be from my neighbor.' },
    { k: 'GORDON', nome: 'Gordon', dur: 'THE POLICE', x: 76, y: 56, img: 'delegacia',
      h: 'The only cop who trusts him',
      t: 'The police don’t trust the man in the mask. But Lieutenant Gordon brings him in anyway: he is the only one who can read the riddles. Some of the police might be part of the problem.',
      q: 'Who is the one person at your job or school that everybody trusts?', st: ['It must be …', 'because he / she …'],
      ex: 'It must be our secretary, because she knows everything and never lies.' },
    { k: 'THE RIDDLER', nome: 'The Riddler', dur: 'WHO?', x: 82, y: 26, img: 'capa',
      h: 'A killer in a mask, online',
      t: 'Nobody knows who the Riddler is. He wears a mask and talks to people online. Thousands follow him. He could be anyone in the city: a worker, a neighbor, a man nobody notices.',
      q: 'Which film villain surprised you the most when you found out who it was?', st: ['I thought it might be …', 'It couldn’t be … but it was!'],
      ex: 'I thought it might be the father.' }
  ]
};
