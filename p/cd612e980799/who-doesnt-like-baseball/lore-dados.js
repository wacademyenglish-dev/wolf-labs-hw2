/* SUPERMAN & LOIS · O LORE (cena I · The Family)  09/10/2026 — A1, já com like / love / hate + -ing, he likes / doesn't like. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of farms and fields in Kansas, at night',
  rotulo: 'THE MAP OF THE KENTS', anda: 'Fly to the next stop',
  fimTit: 'From a lost planet to a family farm.',
  fim: 'Now you know the family. Now the trailer.',
  antes: [
    { q: 'You know the twins now. In the trailer, who likes the farm, and who hates it? Guess.', h: 'I think … likes it, and … hates it.' },
    { q: 'Clark loves his family. What do you think he hates?', h: 'I think he hates …ing.' }
  ],
  paradas: [
    { k: 'KRYPTON', nome: 'Krypton', dur: 'A LOST PLANET', x: 84, y: 18, img: 'planeta',
      h: 'A baby from the stars',
      t: 'Far away, the planet Krypton is dying. A mother and a father put their baby in a small ship and send him to Earth.',
      q: 'Do you like watching films about space? Why or why not?', st: ['I love / like / hate watching …', 'because …'],
      ex: 'I love watching films about space, because I like the stars.' },
    { k: 'THE FARM', nome: 'The Farm', dur: 'SMALLVILLE', x: 28, y: 60, img: 'cena1-celeiro',
      h: 'A boy with a secret',
      t: 'Martha and Jonathan Kent find the baby. They call him Clark. He grows up on the farm, in Smallville.',
      q: 'As a child, what did you love doing? What did you hate doing?', st: ['I loved …ing.', 'I hated …ing.'],
      ex: 'I loved playing in the street.' },
    { k: 'METROPOLIS', nome: 'Metropolis', dur: 'THE CITY', x: 62, y: 30, img: 'metropole',
      h: 'Two reporters',
      t: 'Clark moves to Metropolis, a big city. He works at a newspaper with Lois Lane. Lois loves asking questions, and she hates lies.',
      q: 'Do you like living in a big city or a small town?', st: ['I like living in …', 'I don’t like …ing.'],
      ex: 'I like living in a big city, but I don’t like driving in traffic.' },
    { k: 'THE TWINS', nome: 'The Twins', dur: 'FOURTEEN', x: 46, y: 76, img: 'cena4-estadio',
      h: 'Two very different boys',
      t: 'Clark and Lois have twin boys. Jonathan loves playing football. Jordan doesn’t like big groups, and he likes being at home.',
      q: 'Who in your family is very different from you? What does he or she like?', st: ['My … is very different.', 'He / She likes …ing, but I …'],
      ex: 'My brother is very different.' },
    { k: 'SMALLVILLE AGAIN', nome: 'Back Home', dur: '2021', x: 18, y: 32, img: 'cena5-varanda',
      h: 'Back to the farm',
      t: 'The family moves from Metropolis back to the Kent farm. Jonathan hates leaving his friends. Jordan likes the quiet town. And Clark? He loves being home.',
      q: 'Do you like moving to new places, or do you hate it?', st: ['I like / hate moving because …', 'The last time I moved, …'],
      ex: 'I hate moving.' }
  ]
};
