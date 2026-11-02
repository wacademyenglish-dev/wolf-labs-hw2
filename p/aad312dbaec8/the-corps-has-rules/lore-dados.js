/* DEMON SLAYER · O LORE (cena I · The Story)  09/10/2026 — A2, já com must / mustn't / have to / had to.
   Sem sangue e sem detalhe do ataque: só que um demônio atacou a família. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of snowy mountains in old Japan, at night',
  rotulo: 'THE ROAD OF THE SLAYER', anda: 'Go to the next stop',
  fimTit: 'A boy, his sister, and the rules of the Corps.',
  fim: 'Now you know Tanjiro. Now the trailer.',
  antes: [
    { q: 'You know Nezuko now. In the trailer, what mustn’t she do? Guess.', h: 'She mustn’t … / She has to …', r: 'She mustn’t attack people. She has to stay in the box during the day.' },
    { q: 'What must Tanjiro do to protect his sister?', h: 'He must … He doesn’t have to …', r: 'He must find a cure for her. He doesn’t have to fight alone.' }
  ],
  paradas: [
    { k: 'THE MOUNTAIN', nome: 'The Mountain', dur: 'A SNOWY HOME', x: 18, y: 34, img: 'casa',
      h: 'A boy who sells charcoal',
      t: 'Tanjiro lives on a snowy mountain with his family. His father died, so he had to work.',
      q: 'When you were young, did you have to help at home? What did you have to do?', st: ['I had to …', 'I didn’t have to …'],
      ex: 'I had to wash the dishes every night.' },
    { k: 'NEZUKO', nome: 'Nezuko', dur: 'THE SISTER', x: 38, y: 60, img: 'caixa',
      h: 'A sister in a wooden box',
      t: 'One day, a demon attacks his family. His sister Nezuko survives, but she becomes a demon too. She is still good, and she protects him.',
      q: 'What is one thing you mustn’t forget when you leave home?', st: ['I mustn’t forget …', 'I always have to take …'],
      ex: 'I mustn’t forget my keys.' },
    { k: 'THE TRAINING', nome: 'The Training', dur: 'TWO YEARS', x: 58, y: 30, img: 'treino',
      h: 'A teacher in a mask',
      t: 'An old slayer with a red mask trains Tanjiro. For two years he has to practice every day.',
      q: 'What is the hardest thing you had to learn?', st: ['The hardest thing I had to learn was …', 'I had to practice …'],
      ex: 'The hardest thing I had to learn was swimming.' },
    { k: 'FINAL SELECTION', nome: 'Final Selection', dur: 'SEVEN DAYS', x: 78, y: 56, img: 'glicinias',
      h: 'Seven nights on a mountain',
      t: 'To join the Corps, you must stay alive for seven days on a mountain full of demons.',
      q: 'What test did you have to pass in your life? Was it difficult?', st: ['I had to pass …', 'It was …'],
      ex: 'I had to pass my driving test.' },
    { k: 'THE BLADE', nome: 'The Blade', dur: 'THE CORPS', x: 44, y: 82, img: 'espada',
      h: 'A sword that changes color',
      t: 'Every slayer gets a special sword, a nichirin blade. When its owner holds it for the first time, it changes color.',
      q: 'What is a rule at your job or school that people must never break?', st: ['People must never …', 'But you don’t have to …'],
      ex: 'At my school, people must never use phones in exams.' }
  ]
};
