/* JUMANJI · O LORE (cena I · The Story)  09/10/2026 — A2, já com who / which / that / where. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'An old jungle game map with levels, at night',
  rotulo: 'THE MAP OF THE GAME', anda: 'Roll the dice',
  fimTit: 'A book, a board, a video game, and now the real world.',
  fim: 'Now you know Jumanji. Now the trailer.',
  antes: [
    { q: 'You know the game now. In the trailer, what is the place where the game comes out? Guess.', h: 'I think it is a place where …', r: 'I think it is a place where the game becomes real and you can lose your life.' },
    { q: 'Bravestone is the hero who… what? Finish the sentence.', h: 'He is the hero who …', r: 'He is the hero who is very strong and has no weaknesses.' }
  ],
  paradas: [
    { k: 'THE BOOK', nome: 'The Book', dur: '1981', x: 16, y: 30, img: 'livro',
      h: 'A book that started it all',
      t: 'Jumanji began as a picture book in 1981. Two children find a jungle game in a park.',
      q: 'What was a book that you loved as a child?', st: ['It was a book which / that …', 'It was about a child who …'],
      ex: 'It was a book about a boy who could talk to animals.' },
    { k: 'THE BOARD', nome: 'The Board', dur: '1995', x: 36, y: 56, img: 'tabuleiro',
      h: 'The game that plays you',
      t: 'In 1995 it became a film. Robin Williams plays Alan, trapped in the game for 26 years.',
      q: 'What board game did you play as a kid? Who did you play with?', st: ['I played a game which …', 'I played with my …, who …'],
      ex: 'I played Monopoly with my cousin, who always cheated!' },
    { k: 'THE VIDEO GAME', nome: 'The Video Game', dur: '2017', x: 58, y: 28, img: 'cartucho',
      h: 'The board becomes a video game',
      t: 'In the new films, the game is a video game. Four teenagers are pulled into the jungle.',
      q: 'Which video game character would you like to be? Why?', st: ['I’d like to be …, who …', 'It’s a game where …'],
      ex: 'I’d like to be Mario, who never gets tired.' },
    { k: 'THE AVATARS', nome: 'The Avatars', dur: 'THE JUNGLE', x: 78, y: 52, img: 'selva',
      h: 'Strengths and weaknesses',
      t: 'A shy boy becomes Dr. Bravestone, a strong man who isn’t afraid. Each character has strengths and weaknesses.',
      q: 'What is one strength that you have, and one weakness?', st: ['My strength is something that …', 'My weakness is …'],
      ex: 'My strength is patience, which helps me at work.' },
    { k: 'OPEN WORLD', nome: 'Open World', dur: '2026', x: 50, y: 82, img: 'capa',
      h: 'The game breaks out',
      t: 'In 2026 the game breaks. The animals come out into a real town.',
      q: 'If a game came into your city, which place would be the hardest level?', st: ['The hardest level would be …, where …', 'It’s a place which …'],
      ex: 'The bus station, where everybody runs at 6 PM!' }
  ]
};
