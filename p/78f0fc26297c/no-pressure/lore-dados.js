/* HARRY POTTER · O LORE (cena I · The Story)  09/10/2026 — B1, já com want / expect / need / ask / tell / would like + pessoa + to.
   A história é a do primeiro livro; da série de 2026, só o que a aula já confirma. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'An old magic map from a house to a castle, at night',
  rotulo: 'THE MAP TO HOGWARTS', anda: 'Go to the next stop',
  fimTit: 'A boy under the stairs, a pile of letters, and a school that expects everything.',
  fim: 'Now you know Harry. Now the teaser.',
  antes: [
    { q: 'You know Harry now. In the teaser, what does everybody expect him to do? Guess.', h: 'They expect him to …', r: 'They expect him to be a great wizard, like his parents.' },
    { q: 'What do the Dursleys want Harry to do with the letters?', h: 'They want him to … / They don’t want him to …', r: 'They want him to throw them away. They don’t want him to read them.' }
  ],
  paradas: [
    { k: 'PRIVET DRIVE', nome: 'Privet Drive', dur: 'THE CUPBOARD', x: 16, y: 72, img: 'escada',
      h: 'A boy who sleeps under the stairs',
      t: 'Harry lives with his aunt and uncle, the Dursleys. They want him to be invisible. He sleeps in a cupboard under the stairs, and they tell him not to ask questions about his parents.',
      q: 'What did adults tell you not to do when you were a child?', st: ['They told me not to …', 'They wanted me to …'],
      ex: 'They told me not to talk to strangers.' },
    { k: 'THE LETTERS', nome: 'The Letters', dur: 'HIS 11TH BIRTHDAY', x: 34, y: 50, img: 'corujas',
      h: 'Hundreds of letters',
      t: 'Before his eleventh birthday, letters start to arrive for Harry, brought by owls. His uncle doesn’t want him to read them, so he burns them. Then hundreds of letters come down the chimney at once.',
      q: 'What is the most important letter or message you ever received?', st: ['The most important one asked me to …', 'I didn’t expect them to …'],
      ex: 'The most important one asked me to start a new job.' },
    { k: 'HAGRID', nome: 'Hagrid', dur: 'THE NEWS', x: 52, y: 70, img: 'lareira',
      h: '“You’re a wizard, Harry.”',
      t: 'A giant man, Hagrid, finds Harry and tells him the truth: he is a wizard, and Hogwarts, a school of magic, wants him to come. His parents didn’t die in a car crash: a dark wizard killed them.',
      q: 'Who told you something that changed how you see yourself?', st: ['… told me …', 'They encouraged me to …'],
      ex: 'My coach told me I was a leader.' },
    { k: 'DIAGON ALLEY', nome: 'Diagon Alley', dur: 'THE WAND', x: 70, y: 40, img: 'beco',
      h: 'The wand chooses the wizard',
      t: 'In a hidden street in London, Harry buys his school things: books, a cauldron, an owl. In the wand shop, the old shopkeeper asks him to try wand after wand, until one chooses him.',
      q: 'What did you need your parents to buy you before a new school year?', st: ['I needed them to buy …', 'I wanted them to …'],
      ex: 'I needed them to buy new shoes every year.' },
    { k: 'THE HAT', nome: 'The Hat', dur: 'HOGWARTS', x: 84, y: 22, img: 'chapeu',
      h: 'Everybody expects something',
      t: 'At Hogwarts, a talking hat puts every first-year in a house. Everybody already knows Harry’s name: the boy who lived. Everybody expects him to be special. No pressure.',
      q: 'When did people expect you to be great at something? How did you feel?', st: ['People expected me to …', 'I felt …'],
      ex: 'People expected me to be a doctor like my father.' }
  ]
};
