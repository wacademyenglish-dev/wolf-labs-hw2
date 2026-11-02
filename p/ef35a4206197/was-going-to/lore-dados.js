/* DARK MATTER · O LORE (cena I · The Story)  09/10/2026 — B2, já com was going to / was about to / would / was supposed to. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of Chicago by the lake, at night',
  rotulo: 'THE MAP OF THE NIGHT WALK', anda: 'Walk to the next stop',
  fimTit: 'One walk home, and a box full of other lives.',
  fim: 'Now you know Jason. Now the trailer.',
  antes: [
    { q: 'You know Jason now. In the trailer, what was he about to do when everything changed?', h: 'He was about to … when …', r: 'He was about to go home to his family when someone took him.' },
    { q: 'Behind the doors of the box: which life was he supposed to have?', h: 'He was supposed to … / He was going to …', r: 'He was supposed to be a famous scientist. He was going to have a different family.' }
  ],
  paradas: [
    { k: 'THE BOOK', nome: 'The Book', dur: '2016', x: 14, y: 30, img: 'capa',
      h: 'A novel about the road not taken',
      t: 'Dark Matter is a 2016 novel by Blake Crouch. In 2024, he turned it into an Apple TV series himself. The question of the story is old: what would have happened if you had chosen differently?',
      q: 'What were you going to study or be when you were fifteen?', st: ['I was going to be …', 'But then …'],
      ex: 'I was going to be a pilot.' },
    { k: 'CHICAGO', nome: 'Chicago', dur: 'A GOOD LIFE', x: 36, y: 54, img: 'cozinha',
      h: 'A teacher who gave something up',
      t: 'Jason Dessen teaches physics at a small college in Chicago. He is married to Daniela and has a son, Charlie. Years ago, he was going to be a great scientist. He chose his family instead.',
      q: 'What did you give up to have the life you have now?', st: ['I was going to …, but I chose …', 'I don’t regret it / I sometimes wonder …'],
      ex: 'I was going to live in Lisbon, but I chose to stay with my parents.' },
    { k: 'THE BAR', nome: 'The Bar', dur: 'THAT NIGHT', x: 60, y: 30, img: 'bar',
      h: 'He was supposed to be home soon',
      t: 'One night, Jason goes to a bar to celebrate a friend who won a big prize, the kind of prize Jason was supposed to win. He leaves early. He was supposed to be home in twenty minutes.',
      q: 'Have you ever felt jealous of a friend’s success? What happened?', st: ['I felt … when my friend …', 'I was going to …, but …'],
      ex: 'I felt a little jealous when my friend got her job abroad.' },
    { k: 'THE STREET', nome: 'The Street', dur: 'THE QUESTION', x: 78, y: 60, img: 'beco',
      h: '“Are you happy with your life?”',
      t: 'On the way home, a man in a mask stops him. He asks one strange question: “Are you happy with your life?” Jason is about to answer when everything goes dark. He never makes it home.',
      q: 'If a stranger asked you “Are you happy with your life?”, what would you say?', st: ['I would say …', 'I was about to say … but …'],
      ex: 'I would say “mostly yes”.' },
    { k: 'THE BOX', nome: 'The Box', dur: 'THE OTHER LIVES', x: 44, y: 82, img: 'caixa',
      h: 'A corridor of doors',
      t: 'He wakes up in a world where he never married Daniela and where he is a famous scientist. That Jason built a box: behind every door is a life he could have lived. Every door was going to be his.',
      q: 'Behind one door, there is a life you almost had. What is it?', st: ['Behind my door, I was going to …', 'I would have …'],
      ex: 'Behind my door, I was going to be a chef in Italy.' }
  ]
};
