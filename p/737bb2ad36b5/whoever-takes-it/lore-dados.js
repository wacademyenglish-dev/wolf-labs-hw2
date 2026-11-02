/* THE LORD OF THE RINGS · O LORE (cena I · The Story)  09/10/2026 — B2, já com whoever / whatever / wherever / whenever / however. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'An old map of Middle-earth, at night',
  rotulo: 'THE MAP OF MIDDLE-EARTH', anda: 'Walk to the next stop',
  fimTit: 'One Ring, and everyone who ever held it.',
  fim: 'Now you know the Ring. Now the film.',
  antes: [
    { q: 'You know the Ring now. In the film, what happens to whoever holds it? Guess.', h: 'Whoever holds it …', r: 'Whoever holds it slowly becomes obsessed with it.' },
    { q: 'However brave Frodo is, will the Ring change him?', h: 'However …, I think …', r: 'However brave he is, I think it will change him in the end.' }
  ],
  paradas: [
    { k: 'TOLKIEN', nome: 'Tolkien', dur: '1954', x: 16, y: 26, img: 'capa',
      h: 'A professor who invented a world',
      t: 'J. R. R. Tolkien was a professor of old languages at Oxford. He invented languages, then a whole world for them: Middle-earth. The Lord of the Rings came out in 1954, and Peter Jackson filmed it in New Zealand in 2001.',
      q: 'Whatever you do for work, what do you invent or create in your free time?', st: ['Whatever my job is, I always …', 'Whenever I have time, I …'],
      ex: 'Whatever my job is, I always draw.' },
    { k: 'MORDOR', nome: 'Mordor', dur: 'THE FORGE', x: 84, y: 58, img: 'forja',
      h: 'One Ring to rule them all',
      t: 'The Dark Lord, Sauron, made one Ring in the fire of a volcano, to rule all the other rings of power. He put his cruelty and his power into it. Whoever holds it wants to keep it, whatever the cost.',
      q: 'Is there something you can’t stop using, whatever happens?', st: ['Whatever happens, I can’t stop …', 'Whenever I try, …'],
      ex: 'Whatever happens, I can’t stop checking my phone.' },
    { k: 'THE RIVER', nome: 'The River', dur: 'ISILDUR', x: 56, y: 40, img: 'rio',
      h: 'He could have destroyed it',
      t: 'A king, Isildur, cut the Ring from Sauron’s hand. He could have thrown it into the fire. He kept it. Later, the Ring slipped from his finger into a river, and it was lost for two and a half thousand years.',
      q: 'Have you ever kept something you should have given away?', st: ['I once kept …', 'Whoever had it before …'],
      ex: 'I once kept a library book for a year.' },
    { k: 'THE CAVE', nome: 'The Cave', dur: 'GOLLUM', x: 70, y: 76, img: 'caverna',
      h: 'Five hundred years in the dark',
      t: 'A creature called Gollum found the Ring. It changed him completely. He hid in a dark cave for five hundred years, talking to it: “my precious”. However long he had it, he was never happy.',
      q: 'However much you have, what do you always want more of?', st: ['However much … I have, I always want more.', 'It never makes me …'],
      ex: 'However many books I have, I always want more.' },
    { k: 'THE SHIRE', nome: 'The Shire', dur: 'BILBO AND FRODO', x: 26, y: 54, img: 'condado',
      h: 'Two small hobbits',
      t: 'A hobbit, Bilbo, took the Ring from Gollum’s cave. Years later, he gave it to his young cousin Frodo. Now Frodo must carry it back to the volcano where it was made, wherever the road takes him.',
      q: 'Wherever you go, what do you always take with you?', st: ['Wherever I go, I take …', 'Whoever gave it to me …'],
      ex: 'Wherever I go, I take a small photo of my kids.' }
  ]
};
