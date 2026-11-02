/* SOLO LEVELING (B2) · O LORE (cena I · The Story)  09/10/2026 — B2, já com o third conditional (if + had + particípio, would have).
   A outra aula (B1, o Sistema) conta o mundo dos caçadores; esta conta como a história chegou até nós, e a porta que mudou tudo. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A dark map of Seoul with glowing gates',
  rotulo: 'THE ROAD OF THE STORY', anda: 'Go to the next stop',
  fimTit: 'A web novel, a webtoon, an anime, and one door.',
  fim: 'Now you know the story. Now the trailer.',
  antes: [
    { q: 'You know the story now. In the trailer, what would have happened if Jinwoo hadn’t gone in?', h: 'If he hadn’t gone in, he would have …', r: 'If he hadn’t gone in, he would have stayed the weakest hunter forever.' },
    { q: 'Which choice in the trailer could have ended everything?', h: 'If he had …, it could have …', r: 'If he had refused the System, it could have ended his life right there.' }
  ],
  paradas: [
    { k: 'THE WEB NOVEL', nome: 'The Web Novel', dur: '2016', x: 16, y: 26, img: 'livro',
      h: 'A story read on phones',
      t: 'Solo Leveling started in 2016 as a Korean web novel by an author called Chugong, published chapter by chapter online. If readers hadn’t loved it so much, it would have stayed a small story.',
      q: 'If you hadn’t discovered your favorite series, what would you have watched instead?', st: ['If I hadn’t found …, I would have …', 'I might have …'],
      ex: 'If I hadn’t found Dark, I would have watched more comedies.' },
    { k: 'THE WEBTOON', nome: 'The Webtoon', dur: '2018', x: 38, y: 54, img: 'corredor',
      h: 'Pictures that made it famous',
      t: 'In 2018, it became a webtoon: a comic you read by scrolling down on your phone. The art was so good that millions of people outside Korea started reading it. Without the art, it might never have travelled.',
      q: 'Is there a hobby you would never have started if a friend hadn’t shown it to you?', st: ['If … hadn’t shown me …, I would never have …', 'It might have …'],
      ex: 'If my cousin hadn’t shown me surfing, I would never have tried it.' },
    { k: 'THE ANIME', nome: 'The Anime', dur: '2024', x: 62, y: 30, img: 'capa',
      h: 'Finally, on screen',
      t: 'In 2024, a Japanese studio made it into an anime. Fans had waited years. If the anime had been bad, many people would have been very angry. It wasn’t.',
      q: 'Which film or series from a book did you love, or hate? What would have made it better?', st: ['I loved / hated …', 'It would have been better if …'],
      ex: 'I hated one Percy Jackson film.' },
    { k: 'THE DUNGEON', nome: 'The Dungeon', dur: 'THE STATUES', x: 82, y: 60, img: 'estatua',
      h: 'A door that should have stayed closed',
      t: 'Sung Jinwoo, the weakest hunter in the world, goes into a hidden “double dungeon” with his team. Inside, giant statues come alive, and almost everyone dies. If they had turned back, they would have lived.',
      q: 'Was there a door, real or not, that you are glad you opened?', st: ['I’m glad I opened …', 'If I hadn’t, I would have …'],
      ex: 'I’m glad I opened my own business.' },
    { k: 'THE CHOICE', nome: 'The Choice', dur: 'THE OTHER ROAD', x: 44, y: 84, img: 'corredor',
      h: 'None of it would have happened',
      t: 'He survives, and the System chooses him. If he hadn’t gone in, he would have stayed weak, and none of his story would have happened. One door changed everything.',
      q: 'What one choice changed your life? What would have happened without it?', st: ['If I hadn’t …, I wouldn’t have …', 'I could have …'],
      ex: 'If I hadn’t moved to Curitiba, I wouldn’t have met my wife.' }
  ]
};
