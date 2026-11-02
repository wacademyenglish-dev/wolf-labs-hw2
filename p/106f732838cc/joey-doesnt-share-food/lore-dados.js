/* FRIENDS · O LORE (cena I · The Story)  09/10/2026 — A2, já com should / shouldn't. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of New York streets at night',
  rotulo: 'THE MAP OF NEW YORK', anda: 'Walk to the next stop',
  fimTit: 'Six friends, one couch, ten years of bad food decisions.',
  fim: 'Now you know the friends. Now the clip.',
  antes: [
    { q: 'You know Joey now. In the clip, what should his friends never do? Guess.', h: 'They should never …', r: 'They should never eat food from his plate!' },
    { q: 'Somebody eats your food at work. What should you do?', h: 'You should … / You shouldn’t …', r: 'You should talk to the person. You shouldn’t eat their food back!' }
  ],
  paradas: [
    { k: 'NEW YORK', nome: 'New York', dur: '1994', x: 20, y: 30, img: 'nyc',
      h: 'Six friends in their twenties',
      t: 'Friends was on TV from 1994 to 2004. Six friends live in New York. They don’t have much money, they have strange jobs, and they spend all their free time together.',
      q: 'Where should a young person live: in a big city or a small town? Why?', st: ['I think they should live in …', 'because …'],
      ex: 'I think they should live in a big city, because there are more jobs.' },
    { k: 'THE COFFEE HOUSE', nome: 'The Coffee House', dur: 'THE ORANGE COUCH', x: 44, y: 54, img: 'capa',
      h: 'An orange couch',
      t: 'The friends meet in a coffee house every day. They always sit on the same orange couch. Nobody else can sit there… they think.',
      q: 'Where should friends meet: at home, in a café, or in a park?', st: ['Friends should meet …', 'They shouldn’t meet …'],
      ex: 'Friends should meet at home.' },
    { k: 'MONICA', nome: 'Monica', dur: 'THE CHEF', x: 64, y: 30, img: 'cozinha',
      h: 'A chef with a purple door',
      t: 'Monica is a chef. Her apartment has a purple door, and her kitchen is always clean. She loves cooking for everybody, and she is very competitive.',
      q: 'Should everybody learn to cook? What should everybody know how to cook?', st: ['Everybody should …', 'Everybody should know how to cook …'],
      ex: 'Yes.' },
    { k: 'JOEY', nome: 'Joey', dur: 'NO SHARING', x: 80, y: 62, img: 'mesa',
      h: 'Joey doesn’t share food!',
      t: 'Joey is an actor, and he loves food more than anything. He eats everybody’s food, but nobody can touch his. One famous line: “Joey doesn’t share food!”',
      q: 'Should you share your food with friends? Always?', st: ['You should share …', 'But you shouldn’t …'],
      ex: 'You should share dessert.' },
    { k: 'THANKSGIVING', nome: 'Thanksgiving', dur: 'THE TURKEY', x: 40, y: 80, img: 'peru',
      h: 'Terrible food decisions',
      t: 'In ten years, the friends make terrible decisions about food. Rachel makes a dessert with beef in it. One Thanksgiving, Joey puts a whole turkey on his head. Should he? No.',
      q: 'What is the worst food decision you ever made?', st: ['Once, I …', 'I shouldn’t have … / I should …'],
      ex: 'Once, I ate a whole pizza before a run.' }
  ]
};
