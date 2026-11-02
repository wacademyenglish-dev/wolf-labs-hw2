/* SPIDER-MAN: BRAND NEW DAY · O LORE (cena I · The Story)  09/10/2026 — B1, já com used to × present perfect (for / since / ever). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of New York from Queens to Manhattan, at night',
  rotulo: 'THE MAP OF PETER’S CITY', anda: 'Swing to the next stop',
  fimTit: 'A hero who used to have everyone, and has been alone since.',
  fim: 'Now you know Peter. Now the trailer.',
  antes: [
    { q: 'You know Peter now. In the trailer, how long has he been alone? Guess.', h: 'He has been alone for … / since …', r: 'He has been alone since nobody remembers him anymore.' },
    { q: 'What did Peter use to have that he doesn’t have now?', h: 'He used to have …', r: 'He used to have his friends, MJ and Ned.' }
  ],
  paradas: [
    { k: 'QUEENS', nome: 'Queens', dur: 'THE BOY', x: 76, y: 46, img: 'queens',
      h: 'A boy from Queens',
      t: 'Peter Parker grew up in Queens, New York, with his aunt May. A spider bite gave him powers. He used to be a normal student who did homework at night and fought crime after school.',
      q: 'What did you use to do after school when you were a teenager?', st: ['I used to …', 'I haven’t … since …'],
      ex: 'I used to play football in the street.' },
    { k: 'TOM HOLLAND', nome: 'Tom Holland', dur: 'SINCE 2016', x: 54, y: 28, img: 'telhado',
      h: 'The youngest Spider-Man',
      t: 'Tom Holland has played Spider-Man since 2016, when he was nineteen. Before him, two other actors used to play the hero. Brand New Day is his fourth film as Spider-Man.',
      q: 'Which actor or singer have you liked for a very long time?', st: ['I have liked … for … / since …', 'I used to …'],
      ex: 'I have liked Ivete Sangalo since I was a kid.' },
    { k: 'AUNT MAY', nome: 'Aunt May', dur: 'THE LOSS', x: 30, y: 56, img: 'corredor',
      h: 'He used to have a family',
      t: 'Aunt May raised Peter and taught him that great power comes with great responsibility. In the last film, he lost her. He has never been the same since.',
      q: 'Who used to give you the best advice when you were young?', st: ['My … used to tell me …', 'I have always remembered …'],
      ex: 'My grandfather used to tell me to save money.' },
    { k: 'THE SPELL', nome: 'The Spell', dur: 'FORGOTTEN', x: 20, y: 30, img: 'feitico',
      h: 'Nobody remembers him',
      t: 'To save the world, a spell made everyone forget Peter Parker. His girlfriend MJ and his best friend Ned used to know everything about him. Now they look at him like a stranger.',
      q: 'Have you ever met an old friend who didn’t remember you?', st: ['Yes, once I … / No, I have never …', 'We used to …'],
      ex: 'Yes, once I met a school friend at the bank.' },
    { k: 'A NEW DAY', nome: 'A New Day', dur: '2026', x: 44, y: 84, img: 'capa',
      h: 'Alone in a small apartment',
      t: 'Since the spell, Peter has lived alone in a small apartment. MJ and Ned have gone to university. He has kept fighting crime, but nobody has thanked him.',
      q: 'What new thing have you started this year? How long have you done it?', st: ['I have … since …', 'I used to … but now …'],
      ex: 'I have taken guitar lessons since March.' }
  ]
};
