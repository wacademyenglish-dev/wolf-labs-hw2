/* FROM · O LORE (cena I · The Story)  09/10/2026 — B1, já com o zero conditional (if / when + presente, presente).
   Terror sem susto: nada é descrito, só as regras da cidade. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of a small town surrounded by forest, at night',
  rotulo: 'THE TOWN MAP', anda: 'Walk to the next stop (before dark)',
  fimTit: 'A town you can’t leave, and a night you can’t go out in.',
  fim: 'Now you know the rules. Now the trailer.',
  antes: [
    { q: 'You know the rules now. In the trailer, what happens when someone breaks a rule? Guess.', h: 'When someone …, the creatures …', r: 'When someone goes outside at night, the creatures come.' },
    { q: 'What do people in the town do when the sun goes down?', h: 'When the sun goes down, they …', r: 'When the sun goes down, they lock the doors and hang talismans on the windows.' }
  ],
  paradas: [
    { k: 'THE ROAD', nome: 'The Road', dur: 'NO WAY OUT', x: 16, y: 70, img: 'estrada',
      h: 'Every road brings you back',
      t: 'A family drives off the highway and finds a tree across the road. They turn around, and they end up in a small town. When they try to leave, every road brings them back to the same place.',
      q: 'What happens when you get lost? What do you usually do?', st: ['When I get lost, I …', 'If my phone dies, I …'],
      ex: 'When I get lost, I ask someone in a shop.' },
    { k: 'THE TOWN', nome: 'The Town', dur: 'THE PEOPLE', x: 40, y: 50, img: 'casa',
      h: 'Everyone arrived the same way',
      t: 'Everyone in town arrived the same way, from different places and years. In the day, the town is quiet: people cook, fix houses and grow food. Nobody knows why they are there.',
      q: 'When you arrive in a new place, what do you do first?', st: ['When I arrive somewhere new, I …', 'If I don’t know anyone, I …'],
      ex: 'When I arrive somewhere new, I look for a café.' },
    { k: 'THE STONES', nome: 'The Stones', dur: 'THE TALISMANS', x: 62, y: 30, img: 'talisma',
      h: 'A stone in every window',
      t: 'Every house has a small stone with a strange symbol in the window. If the stone is there, the creatures can’t come in. If it falls, the house is not safe. Nobody knows why it works.',
      q: 'Is there something you do “for luck”? What happens if you don’t do it?', st: ['I always … for luck.', 'If I don’t, I feel …'],
      ex: 'I always wear my red socks on game day.' },
    { k: 'THE FOREST', nome: 'The Forest', dur: 'AFTER DARK', x: 82, y: 56, img: 'floresta',
      h: 'When the sun goes down',
      t: 'When the sun goes down, creatures with human faces come out of the forest. They smile, they knock, they ask to come in. If you let them in, you die.',
      q: 'What is a rule in your house when it gets dark?', st: ['When it gets dark, we …', 'If someone …, …'],
      ex: 'When it gets dark, we lock the gate.' },
    { k: 'BOYD', nome: 'Boyd', dur: 'THE SHERIFF', x: 44, y: 84, img: 'capa',
      h: 'The man who keeps the rules',
      t: 'Boyd is the sheriff of the town. He has been there for years, and he keeps everyone alive with simple rules. When people follow them, they survive. When they don’t, people get hurt.',
      q: 'Who keeps the rules in your family or at your job? What happens when people don’t follow them?', st: ['… keeps the rules.', 'When people don’t follow them, …'],
      ex: 'My manager keeps the rules.' }
  ]
};
