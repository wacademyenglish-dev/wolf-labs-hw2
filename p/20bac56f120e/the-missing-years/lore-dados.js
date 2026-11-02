/* THE ODYSSEY (o mar) · O LORE (cena I · The Story)  09/10/2026 — A2, já com was / were, irregulares e didn't.
   A outra aula do filme (A1, a casa) conta Ítaca; esta conta o poema e a viagem, no passado.
   As ilhas uma a uma ficam para a cena VI (a rota): aqui, o poema, a guerra, o Ciclope, o deus do mar e o filme. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'An ancient sea map in bronze and deep blue, at night',
  rotulo: 'THE MAP OF THE POEM', anda: 'Sail to the next stop',
  fimTit: 'A poem older than almost everything, and a trip that took ten years.',
  fim: 'Now you know the poem. Now the trailer.',
  antes: [
    { q: 'You know the story now. In the trailer, what did Odysseus lose at sea? Guess.', h: 'I think he lost … / He didn’t …', r: 'I think he lost his ships and his men. He didn’t lose his hope.' },
    { q: 'Why was the god of the sea so angry with him?', h: 'He was angry because Odysseus …', r: 'He was angry because Odysseus hurt his son, the Cyclops.' }
  ],
  paradas: [
    { k: 'HOMER', nome: 'Homer', dur: '2,800 YEARS AGO', x: 18, y: 28, img: 'lira',
      h: 'A poem people sang',
      t: 'The Odyssey is a Greek poem by Homer. It is almost three thousand years old.',
      q: 'What story did your family tell you again and again?', st: ['My family always told the story of …', 'I heard it when I was …'],
      ex: 'My family always told the story of my grandpa’s trip from Portugal.' },
    { k: 'TROY', nome: 'Troy', dur: 'TEN YEARS OF WAR', x: 84, y: 30, img: 'troia',
      h: 'The horse was his idea',
      t: 'Odysseus was the king of a small island, Ithaca. He went to a war in Troy, and the war lasted ten years. The giant wooden horse was his idea.',
      q: 'What was a great idea you had at work or school?', st: ['Once, I had an idea: …', 'It worked / It didn’t work.'],
      ex: 'Once, I had an idea: a shared calendar for the team.' },
    { k: 'THE CYCLOPS', nome: 'The Cyclops', dur: '“NOBODY”', x: 60, y: 58, img: 'ilha',
      h: 'His name was “Nobody”',
      t: 'On the way home, his men were hungry, and they went into a cave. It was the home of a giant with one eye.',
      q: 'Did you ever use a clever trick to get out of a problem?', st: ['Once, I …', 'It was very clever / It was a terrible idea!'],
      ex: 'Once, I said my phone was dead to leave a boring party.' },
    { k: 'POSEIDON', nome: 'Poseidon', dur: 'TEN YEARS AT SEA', x: 38, y: 74, img: 'mar',
      h: 'The sea was angry',
      t: 'The giant was the son of Poseidon, the god of the sea. Poseidon was very angry, and he sent storms. The trip home took ten more years.',
      q: 'What was the longest you waited for something?', st: ['I waited … for …', 'Finally, it came / it didn’t come.'],
      ex: 'I waited three years for my visa.' },
    { k: 'THE FILM', nome: 'The Film', dur: '2026', x: 72, y: 82, img: 'capa',
      h: 'An old poem, a new film',
      t: 'In 2026, Christopher Nolan made the poem into a film (Universal). Matt Damon plays Odysseus. The film tells the same trip: the war, the sea, the monsters, and the long way home.',
      q: 'Did you see a film made from a very old story? Was it good?', st: ['I saw …', 'It was … / It wasn’t …'],
      ex: 'I saw Troy, with Brad Pitt.' }
  ]
};
