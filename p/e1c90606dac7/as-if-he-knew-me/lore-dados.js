/* SEVERANCE · O LORE (cena I · The Story)  09/10/2026 — B2, já com as if / as though (o falso dá um passo atrás). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'The plan of an endless office floor, like a maze, at night',
  rotulo: 'THE SEVERED FLOOR', anda: 'Walk down the next corridor',
  fimTit: 'Two people in one body, and a door between them.',
  fim: 'Now you know Lumon. Now the trailer.',
  antes: [
    { q: 'You know the procedure now. In the trailer, how does Mark look at his own life? Guess.', h: 'He looks at it as if he had never …', r: 'He looks at it as if he had never lived it, as if it belonged to a stranger.' },
    { q: 'The company talks about its workers as though they were… what?', h: 'It talks about them as though they were …', r: 'It talks about them as though they were machines, not people.' }
  ],
  paradas: [
    { k: 'LUMON', nome: 'Lumon', dur: 'THE COMPANY', x: 50, y: 18, img: 'corredor',
      h: 'A company that feels like a religion',
      t: 'Lumon Industries is a huge, quiet company. Its corridors are long and identical, and its managers speak about the founder as if he were a saint. Nobody outside knows exactly what Lumon does.',
      q: 'Have you ever worked or studied somewhere that felt as if it were a different world?', st: ['It felt as if …', 'People acted as though …'],
      ex: 'My first bank job felt as if it were a different world.' },
    { k: 'THE ELEVATOR', nome: 'The Elevator', dur: 'THE SWITCH', x: 22, y: 44, img: 'elevador',
      h: 'Two people, one body',
      t: 'Some workers chose “severance”: a chip in the brain. When the elevator goes down, they forget their life outside. When it goes up, they forget work. Each half lives as if the other one didn’t exist.',
      q: 'If you could forget work completely at five o’clock, would you do it?', st: ['I would, because …', 'I wouldn’t: it would feel as if …'],
      ex: 'I wouldn’t.' },
    { k: 'MACRODATA', nome: 'Macrodata', dur: 'THE NUMBERS', x: 44, y: 70, img: 'mesas',
      h: 'Numbers that feel scary',
      t: 'Mark and his team sort numbers on old computers. Some numbers feel scary, and they move them into boxes. Nobody knows why. They do it every day, as though it were the most important job in the world.',
      q: 'Is there a task you do as if you understood it, but you don’t really?', st: ['I do … as if I understood it.', 'Honestly, it looks as though …'],
      ex: 'I fill in my tax forms as if I understood them.' },
    { k: 'THE OUTIE', nome: 'The Outie', dur: 'MARK OUTSIDE', x: 80, y: 66, img: 'casa',
      h: 'Why Mark chose to forget',
      t: 'Outside, Mark lives alone in a quiet, snowy town. He lost his wife, and the pain was too much. So he chose severance: eight hours a day when he feels as though nothing had happened.',
      q: 'Is there a place where you can forget your problems for a while?', st: ['At …, I feel as if …', 'It’s as though …'],
      ex: 'At the gym, I feel as if my problems had stayed outside the door.' },
    { k: 'THE WELLNESS ROOM', nome: 'Wellness Room', dur: 'THE CALM VOICE', x: 76, y: 28, img: 'sala',
      h: 'Nice facts, read slowly',
      t: 'When a worker is upset, he goes to the wellness room. A calm voice reads him nice facts about his outie, the person he is outside: “Your outie is generous.” As if that were enough.',
      q: 'What is one nice fact about you that a calm voice could read?', st: ['“Your outie …”', 'It would make me feel as though …'],
      ex: '“Your outie bakes bread for the neighbors.” It would make me feel as though I were a good person.' }
  ]
};
