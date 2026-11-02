/* OBSESSION · O LORE (cena I · The Story)  09/10/2026 — B2, já com should have / could have / couldn't have / needn't have.
   Filme de 2026: só o que a aula já conta (a mesma história da One Wish, agora pelo lado do arrependimento). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of a small town at night, with one shop lit',
  rotulo: 'THE MAP OF THE NIGHT', anda: 'Go to the next stop',
  fimTit: 'One wish, and no way to cancel it.',
  fim: 'Now you know the wish. Now the trailer.',
  antes: [
    { q: 'You know Bear’s wish now. In the trailer, what should he have done instead? Guess.', h: 'He should have … / He shouldn’t have …', r: 'He should have told Nikki the truth. He shouldn’t have made the wish alone.' },
    { q: 'Could he have known it was dangerous?', h: 'He could have … / He couldn’t have known, because …', r: 'He couldn’t have known, because nobody told him wishes have a price.' }
  ],
  paradas: [
    { k: 'BEAR', nome: 'Bear', dur: 'TOO SHY', x: 20, y: 30, img: 'quarto',
      h: 'A boy who never said it',
      t: 'Bear is in love with his friend Nikki. He has had years to tell her. He never did. He was too shy, and every year it got harder.',
      q: 'What is something you should have said to someone, but never did?', st: ['I should have told … that …', 'I could have said it when …'],
      ex: 'I should have told my grandfather that he was my hero.' },
    { k: 'THE SHOP', nome: 'The Shop', dur: 'LATE AT NIGHT', x: 44, y: 56, img: 'loja',
      h: 'A strange little shop',
      t: 'One night, Bear goes into a strange little shop. It sells old, odd things. The man at the counter doesn’t smile much. Bear could have walked out. He didn’t.',
      q: 'Have you ever bought something late at night that you needn’t have bought?', st: ['I once bought …', 'I needn’t have …'],
      ex: 'I once bought a juicer at 2 AM online.' },
    { k: 'THE BRANCH', nome: 'The Branch', dur: 'ONE WISH', x: 66, y: 30, img: 'galho',
      h: 'A branch that gives one wish',
      t: 'He buys a small branch that gives you one wish. You break it, and you say the wish. Bear wishes Nikki loved him more than anyone in the world.',
      q: 'If you had one wish last year, what should you have wished for?', st: ['I should have wished for …', 'I couldn’t have imagined …'],
      ex: 'I should have wished for a new knee.' },
    { k: 'NIKKI', nome: 'Nikki', dur: 'TOO MUCH', x: 82, y: 62, img: 'vhs',
      h: 'It works too well',
      t: 'The next day, it works. Nikki loves him. Then she loves him too much: she never leaves, she never stops watching him. It becomes frightening. Bear starts to understand what he did.',
      q: 'When did getting what you wanted turn out worse than you expected?', st: ['I wanted …, and I got it.', 'I shouldn’t have …'],
      ex: 'I wanted a big promotion, and I got it.' },
    { k: 'NO REFUNDS', nome: 'No Refunds', dur: 'THE PHONE CALL', x: 40, y: 82, img: 'telefone',
      h: 'They don’t do that',
      t: 'Bear calls the shop to cancel the wish. The answer is short: they don’t do that. Nikki will stay like this as long as he lives. He could have asked more questions before. He didn’t.',
      q: 'What is a decision you couldn’t have changed, even if you had wanted to?', st: ['I couldn’t have changed …', 'Even if I had …, …'],
      ex: 'I couldn’t have changed my flight.' }
  ]
};
