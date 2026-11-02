/* OBSESSION (B1) · O LORE (cena I · The Story)  09/10/2026 — B1, já com o second conditional (If I had…, I would…).
   A outra aula do filme (B2, a fita) conta o arrependimento do Bear; esta conta a velha história dos desejos que cobram um preço. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'An old map of famous wishes, by candlelight',
  rotulo: 'THE MAP OF WISHES', anda: 'Go to the next wish',
  fimTit: 'A very old story: every wish has a price.',
  fim: 'Now you know the rule of wishes. Now the trailer.',
  antes: [
    { q: 'You know the old stories now. In the trailer, what would you do if you were Bear?', h: 'If I were Bear, I would …', r: 'If I were Bear, I would tell Nikki everything.' },
    { q: 'If Nikki knew about the wish, what would she do?', h: 'If she knew, she would …', r: 'If she knew, she would be very angry and very scared.' }
  ],
  paradas: [
    { k: 'THE LAMP', nome: 'The Lamp', dur: 'A THOUSAND NIGHTS', x: 18, y: 30, img: 'lampada',
      h: 'Three wishes from a lamp',
      t: 'In the old stories of the Thousand and One Nights, a young man finds a lamp with a genie inside. The genie gives him wishes. It sounds perfect. But in many old stories, wishes come with a trick.',
      q: 'If you found a lamp with a genie, what would your first wish be?', st: ['If I found one, I would wish for …', 'I wouldn’t wish for …'],
      ex: 'If I found one, I would wish for good health for my family.' },
    { k: 'THE PAW', nome: 'The Paw', dur: '1902', x: 40, y: 56, img: 'pata',
      h: 'Be careful what you wish for',
      t: 'In 1902, a famous horror story, The Monkey’s Paw, told of an old paw that gives three wishes. A family wishes for money. The money comes… because their son dies at work.',
      q: 'If you could change one thing in your past, would you? What would happen?', st: ['If I could, I would change …', 'But then I wouldn’t …'],
      ex: 'If I could, I would change my university.' },
    { k: 'THE SHOP', nome: 'The Shop', dur: 'A STRANGE PLACE', x: 62, y: 30, img: 'salgueiro',
      h: 'A shop that sells wishes',
      t: 'In the film, a strange little shop sells wishes. Bear, a shy young man, goes in. If he were braver, he would talk to Nikki himself. Instead, he buys one wish.',
      q: 'If you were braver, what would you do tomorrow?', st: ['If I were braver, I would …', 'I would tell … that …'],
      ex: 'If I were braver, I would ask for a raise.' },
    { k: 'THE WISH', nome: 'The Wish', dur: 'ONE BRANCH', x: 80, y: 60, img: 'quarto',
      h: 'A wish that works too well',
      t: 'Bear breaks a willow branch and wishes that Nikki loved him more than anyone in the world. The next day, she does. Too much. She can’t stop. If she could choose, would she still love him?',
      q: 'If someone loved you “too much”, how would you feel?', st: ['I would feel …', 'I would want them to …'],
      ex: 'I would feel trapped.' },
    { k: 'THE RULE', nome: 'The Rule', dur: 'NO CANCELLATIONS', x: 44, y: 84, img: 'capa',
      h: 'No cancellations',
      t: 'Bear calls the shop to cancel the wish. There is a rule: no cancellations, for as long as he lives. If he had known, he would never have bought it. Or would he?',
      q: 'If you could buy one wish today, but never cancel it, would you buy it?', st: ['Yes, I would, because …', 'No, I wouldn’t, because …'],
      ex: 'No, I wouldn’t, because I would worry about the price every day.' }
  ]
};
