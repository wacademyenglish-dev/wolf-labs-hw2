/* THE OFFICE · O LORE (cena I · The Office)  09/10/2026 — A1, já com os imperativos (Do this, Don't do that, Let's…). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'The plan of a small office seen from above, at night',
  rotulo: 'THE OFFICE PLAN', anda: 'Walk to the next desk',
  fimTit: 'A paper company, a terrible boss, and a lot of pranks.',
  fim: 'Now you know the office. Now the clip.',
  antes: [
    { q: 'You know Jim and Dwight now. In the clip, Dwight’s desk is not in its place. What does Jim say to him? Guess.', h: 'Jim says: “Don’t …” / “Look at …”' },
    { q: 'Your desk is missing. What do you say to your team?', h: '“Give me back …!” / “Don’t touch …!”' }
  ],
  paradas: [
    { k: 'SCRANTON', nome: 'Scranton', dur: 'THE TOWN', x: 16, y: 26, img: 'cidade',
      h: 'A small town, a small office',
      t: 'Scranton is a small city in Pennsylvania. Here there is a little office of a paper company. The people sell paper on the phone, all day.',
      q: 'Where do you work or study? Is it exciting or a little boring?', st: ['I work / study at …', 'It is …'],
      ex: 'I work at a bank.' },
    { k: 'DUNDER MIFFLIN', nome: 'Dunder Mifflin', dur: 'THE COMPANY', x: 44, y: 50, img: 'escritorio',
      h: 'A camera in the office',
      t: 'The company is Dunder Mifflin. A camera team films the office every day, like a documentary.',
      q: 'A camera films your day. What does it see?', st: ['It sees me at …', 'Don’t film me!'],
      ex: 'It sees me at my desk.' },
    { k: 'MICHAEL', nome: 'Michael', dur: 'THE BOSS', x: 74, y: 24, img: 'chefe',
      h: 'The worst boss… and the funniest',
      t: 'Michael Scott is the boss. He wants everybody to love him. He tells bad jokes and has terrible ideas: “Let’s have a party!',
      q: 'What is a rule your boss or teacher always says?', st: ['My boss always says: “…”', 'Don’t … / Let’s …'],
      ex: 'My teacher always says: “Don’t use your phone in class!”' },
    { k: 'JIM AND DWIGHT', nome: 'Jim and Dwight', dur: 'THE NEXT DESK', x: 72, y: 70, img: 'gelatina',
      h: 'The stapler in the jelly',
      t: 'Jim and Dwight sit at the next desks. Dwight is very serious: “Don’t touch my things!” Jim loves pranks.',
      q: 'Do you like pranks? Say yes or no.', st: ['Yes, I do.', 'No, I don’t. Don’t …!'],
      ex: 'Yes, I do. I like funny pranks.' },
    { k: 'THE CLIP', nome: 'The Clip', dur: 'WHERE IS THE DESK?', x: 34, y: 78, img: 'impressora',
      h: 'A missing desk',
      t: 'In this clip, Dwight comes to work, and his desk is not in its place. Where is it? Listen to the orders in the clip: Look!',
      q: 'Your colleague moves your desk. What do you say?', st: ['“Put it back!”', '“Don’t do that again!”'],
      ex: '“Put it back now!' }
  ]
};
