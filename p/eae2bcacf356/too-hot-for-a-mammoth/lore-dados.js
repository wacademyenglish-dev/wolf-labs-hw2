/* ICE AGE · O LORE (cena I · The Film)  09/10/2026 — A1, já com hot / cold, I am cold, too + adjetivo. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of an ice world with a volcano, at night',
  rotulo: 'THE MAP OF THE ICE', anda: 'Walk to the next stop',
  fimTit: 'Twenty-five years of ice, and now it is too hot.',
  fim: 'Now you know the herd. Now the teaser.',
  antes: [
    { q: 'You know the herd now. In the teaser, is it too hot or too cold for Manny? Guess.', h: 'I think it is too … for him.' },
    { q: 'Sid, Manny or Diego: who has a big problem in the lava world? Why?', h: 'I think … because he is too …', r: 'I think Manny, because he is too big and too heavy for the hot rocks.' }
  ],
  paradas: [
    { k: 'THE ICE AGE', nome: 'The Ice Age', dur: 'LONG AGO', x: 24, y: 30, img: 'gelo',
      h: 'A very cold world',
      t: 'Long, long ago, the world is ice and snow. It is very cold. The animals walk south, where it is not so cold.',
      q: 'Do you like cold days or hot days? Why?', st: ['I like … days.', 'because I am …'],
      ex: 'I like cold days, because I am happy under a blanket.' },
    { k: 'THE HERD', nome: 'The Herd', dur: 'A STRANGE FAMILY', x: 46, y: 46, img: 'rebanho',
      h: 'A mammoth, a sloth and a cat',
      t: 'Manny is a big mammoth. He is slow and serious. Sid is a sloth: he is very funny, and he talks too much.',
      q: 'Who is in your “herd”? Who is the funny one?', st: ['My herd is my …', 'The funny one is …'],
      ex: 'My herd is my friends from school.' },
    { k: 'SCRAT', nome: 'Scrat', dur: 'THE ACORN', x: 70, y: 28, img: 'bolota',
      h: 'A squirrel and one acorn',
      t: 'Scrat is a little squirrel. He has one acorn, and he wants to keep it.',
      q: 'What is your “acorn”: one thing you always want?', st: ['My acorn is …', 'I always want …'],
      ex: 'My acorn is coffee.' },
    { k: 'THE LOST WORLD', nome: 'The Lost World', dur: 'UNDER THE ICE', x: 64, y: 70, img: 'selva',
      h: 'A hot world under the cold one',
      t: 'Under the ice, there is a lost world: a hot jungle with dinosaurs. The herd went there once, in an old film.',
      q: 'Where is it too hot for you? What do you do there?', st: ['It is too hot in …', 'There, I …'],
      ex: 'It is too hot in my kitchen in summer.' },
    { k: 'BOILING POINT', nome: 'Boiling Point', dur: 'FEBRUARY 2027', x: 34, y: 76, img: 'lava',
      h: 'The volcano wakes up',
      t: 'In the new film, a volcano explodes. The ice breaks, and the herd falls into the lost world again. Now there is lava everywhere.',
      q: 'What is too hot or too cold for you to eat or drink?', st: ['… is too hot for me.', '… is too cold for me.'],
      ex: 'Black coffee is too hot for me in the morning.' }
  ]
};
