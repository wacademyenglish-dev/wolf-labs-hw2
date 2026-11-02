/* INVASION · O LORE (cena I · The Story)  09/10/2026 — B1, já com past continuous × past simple (was …ing when …). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A dark world map with four points of light',
  rotulo: 'THE NIGHT MAP', anda: 'Go to the next place',
  fimTit: 'One night, four ordinary people, four corners of the world.',
  fim: 'Now you know the night. Now the trailer.',
  antes: [
    { q: 'You know the four people now. In the trailer, what was each person doing when it happened? Guess.', h: 'The sheriff was …ing when … / She was …ing when …', r: 'The sheriff was driving when it happened. She was sleeping when the power went off.' },
    { q: 'What were the lights doing while the signals stopped?', h: 'While …, the lights were …', r: 'While the signals stopped, the lights were flashing in the sky.' }
  ],
  paradas: [
    { k: 'OKLAHOMA', nome: 'Oklahoma', dur: 'THE SHERIFF', x: 16, y: 54, img: 'campo',
      h: 'His last day at work',
      t: 'A small-town sheriff in Oklahoma was working on his last day before retiring. He was driving across the fields when he found a strange crater in a farm. Nobody could explain it.',
      q: 'What were you doing on your last day at a school or job?', st: ['On my last day, I was …ing.', 'When …, I felt …'],
      ex: 'On my last day at school, I was signing everybody’s shirts.' },
    { k: 'NEW YORK', nome: 'New York', dur: 'THE MOTHER', x: 34, y: 22, img: 'relogios',
      h: 'A mother with a secret',
      t: 'Near New York, a mother of two was living a normal life. That night, she was looking at her phone when she discovered a secret about her husband. Then the lights went out.',
      q: 'What were you doing when you heard some very important news?', st: ['I was …ing when I heard …', 'I didn’t believe it at first.'],
      ex: 'I was making coffee when I heard about the earthquake.' },
    { k: 'TOKYO', nome: 'Tokyo', dur: 'THE ENGINEER', x: 84, y: 34, img: 'tokio',
      h: 'Watching a launch',
      t: 'In Tokyo, a young engineer was working at the space agency. Her girlfriend was flying on a spaceship. While she was watching the mission on a screen, something hit the ship.',
      q: 'Where were you while a big event was happening on TV?', st: ['While … was happening, I was …', 'I was watching it with …'],
      ex: 'While the World Cup final was happening, I was working.' },
    { k: 'THE DESERT', nome: 'The Desert', dur: 'THE SOLDIER', x: 62, y: 46, img: 'deserto',
      h: 'Alone after the attack',
      t: 'In the desert, a young soldier was on patrol with his team. They were walking through the dust when something attacked them. When he woke up, he was alone.',
      q: 'Tell me about a time you were doing something and everything went wrong.', st: ['I was …ing when …', 'Then I …'],
      ex: 'I was cooking for twelve people when the gas ran out.' },
    { k: 'THE NIGHT', nome: 'The Night', dur: 'THE SAME MOMENT', x: 44, y: 80, img: 'capa',
      h: 'Everywhere, at the same time',
      t: 'They didn’t know each other. But at the same moment, all over the world, strange things were happening: the lights went out, the signals stopped. Every one of them remembers what they were doing.',
      q: 'What were you doing at this time yesterday?', st: ['At this time yesterday, I was …ing.', 'While I was …, my … was …'],
      ex: 'At this time yesterday, I was sitting in traffic.' }
  ]
};
