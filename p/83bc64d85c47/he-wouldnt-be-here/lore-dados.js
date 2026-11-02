/* THE BOYS · O LORE (cena I · The Story)  09/10/2026 — B2, já com os mixed conditionals (passado → agora, agora → passado).
   A série é violenta: aqui nada é descrito, só o que aconteceu. O professor assiste o trailer antes. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of a big city with a company tower in the middle, at night',
  rotulo: 'THE MAP OF VOUGHT CITY', anda: 'Go to the next stop',
  fimTit: 'Heroes as a product, and a normal guy who lost everything.',
  fim: 'Now you know the Boys. Now the trailer.',
  antes: [
    { q: 'You know Hughie now. In the trailer, what would be different if Robin were still alive? Guess.', h: 'If Robin hadn’t died, Hughie would …', r: 'If Robin hadn’t died, Hughie would be living a normal life, not fighting superheroes.' },
    { q: 'If people knew the truth about the heroes, would they still love them?', h: 'If people knew …, they would / wouldn’t …', r: 'If people knew the truth, they wouldn’t love them anymore. They would be afraid of them.' }
  ],
  paradas: [
    { k: 'VOUGHT', nome: 'Vought', dur: 'THE COMPANY', x: 50, y: 46, img: 'torre',
      h: 'Heroes are a product',
      t: 'In this world, superheroes are real, and a company owns them: Vought. It sells their films, their toys and their image. If the heroes weren’t a business, Vought wouldn’t have become so powerful.',
      q: 'Which famous person do you think is more of a product than a person?', st: ['I think … is a product.', 'If he / she weren’t famous, …'],
      ex: 'I think some influencers are products.' },
    { k: 'THE SEVEN', nome: 'The Seven', dur: 'THE BEST TEAM', x: 76, y: 24, img: 'palco',
      h: 'The most loved heroes',
      t: 'The Seven are Vought’s most famous team. The public loves them. But many of them are terrible people. If the cameras weren’t always on, people would have seen the truth a long time ago.',
      q: 'If you could choose one superpower, which one would you choose, and why?', st: ['I would choose …', 'If I had it, I would have …'],
      ex: 'I would choose teleporting.' },
    { k: 'ROBIN', nome: 'Robin', dur: 'THE ACCIDENT', x: 26, y: 68, img: 'rua',
      h: 'A hero who didn’t stop',
      t: 'Hughie is a normal guy who sells electronics. One day, A-Train, the fastest hero, runs through the street without stopping, and Hughie’s girlfriend, Robin, dies in an instant. Vought calls it an accident.',
      q: 'What is one small moment that changed the direction of your life?', st: ['If I hadn’t …, I wouldn’t be …', 'That day, I …'],
      ex: 'If I hadn’t missed my bus that day, I wouldn’t be married to the man I met at the stop!' },
    { k: 'BUTCHER', nome: 'Butcher', dur: 'THE BOYS', x: 18, y: 32, img: 'bar',
      h: 'A man who hates heroes',
      t: 'A dangerous man, Billy Butcher, finds Hughie. He has his own reasons to hate the heroes, and a small team: the Boys. If Hughie were a different person, he would have said no. He says yes.',
      q: 'Who convinced you to do something you would never have done alone?', st: ['… convinced me to …', 'If I had been alone, I wouldn’t have …'],
      ex: 'My sister convinced me to go skydiving.' },
    { k: 'THE RANKING', nome: 'The Ranking', dur: 'PUBLIC RELATIONS', x: 70, y: 76, img: 'sala',
      h: 'A story pushes you up',
      t: 'Vought’s PR team decides what people think of each hero. A good story pushes a hero up the ranking; the truth can push him down. If Vought didn’t control the stories, the ranking would have changed years ago.',
      q: 'If you had a PR team, what story would they tell about you?', st: ['They would say that I …', 'If they told the truth, …'],
      ex: 'They would say that I run every morning.' }
  ]
};
