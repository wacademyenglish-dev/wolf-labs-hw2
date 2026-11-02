/* SOLO LEVELING · O LORE (cena I · The Story)  09/10/2026 — B1, já com the more…, the more… */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A dark map of Seoul with glowing gates',
  rotulo: 'THE MAP OF THE GATES', anda: 'Enter the next gate',
  fimTit: 'The weakest hunter, and a window that makes him stronger every day.',
  fim: 'Now you know the System. Now the trailer.',
  antes: [
    { q: 'You know Jinwoo now. In the trailer, the more he fights, the… what? Guess.', h: 'The more he fights, the …', r: 'The more he fights, the stronger he gets.' },
    { q: 'Is the System good or dangerous for him? Why?', h: 'The stronger he gets, the more …', r: 'The stronger he gets, the more dangerous it becomes for him.' }
  ],
  paradas: [
    { k: 'THE GATES', nome: 'The Gates', dur: 'TEN YEARS AGO', x: 50, y: 40, img: 'portal',
      h: 'Doors to other worlds',
      t: 'Ten years ago, strange gates opened all over the world, and monsters came out. The longer a gate stays open, the more dangerous it becomes. Someone has to go in and close it.',
      q: 'What problem in your city gets worse the longer people ignore it?', st: ['The longer we ignore …, the worse …', 'The sooner …, the better.'],
      ex: 'The longer we ignore the traffic, the worse it gets.' },
    { k: 'THE HUNTERS', nome: 'The Hunters', dur: 'E TO S', x: 22, y: 60, img: 'templo',
      h: 'From E to S',
      t: 'Some people woke up with powers and became hunters. They are ranked from E, the weakest, to S, the strongest. The higher your rank, the more money you make, and the more famous you are.',
      q: 'In your job or school, does a higher rank mean more money and more stress?', st: ['The higher …, the more …', 'The more …, the less …'],
      ex: 'Yes.' },
    { k: 'JINWOO', nome: 'Jinwoo', dur: 'E-RANK', x: 72, y: 66, img: 'hospital',
      h: 'The weakest hunter of all',
      t: 'Sung Jinwoo is an E-rank: “the weakest hunter of all mankind”. He keeps going into dangerous gates because his mother is in hospital and the bills are expensive. The more he works, the more he gets hurt.',
      q: 'Who in your life works the hardest for their family?', st: ['My … works the hardest.', 'The more he / she works, the …'],
      ex: 'My mother works the hardest.' },
    { k: 'THE DUNGEON', nome: 'The Dungeon', dur: 'THE STATUES', x: 30, y: 30, img: 'teto',
      h: 'A dungeon with rules',
      t: 'One day, his team enters a hidden dungeon with giant stone statues and strange rules. Almost everyone dies. Jinwoo stays behind so others can escape. When he wakes up in hospital, something has changed.',
      q: 'The more dangerous a situation is, the calmer or the more nervous you get?', st: ['The more dangerous it is, the … I get.', 'Once, I …'],
      ex: 'The more dangerous it is, the calmer I get.' },
    { k: 'THE SYSTEM', nome: 'The System', dur: 'DAILY QUEST', x: 80, y: 26, img: 'capa',
      h: 'A window only he can see',
      t: 'A blue window appears that nobody else can see: the System. It gives him daily quests: 100 push-ups, 100 sit-ups, 100 squats and a 10-kilometer run. If he doesn’t finish, he is punished.',
      q: 'If you had a daily quest, what would it be? The more you did it, the…?', st: ['My daily quest would be …', 'The more I did it, the …'],
      ex: 'My daily quest would be reading twenty pages.' }
  ]
};
