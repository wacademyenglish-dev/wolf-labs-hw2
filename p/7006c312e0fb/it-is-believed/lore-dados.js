/* DISCLOSURE DAY (B2) · O LORE (cena I · The Story)  09/10/2026 — B2, já com a passive reporting (it is said that / he is thought to have).
   A outra aula do filme (A2, o radar) conta o filme; esta conta a história REAL dos óvnis nos EUA, que o filme usa.
   Tudo nas paradas 1–3 é história documentada; do filme, só o que a aula já confirma. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A dark map of the United States with sighting points',
  rotulo: 'THE FILE MAP', anda: 'Open the next file',
  fimTit: 'Eighty years of “it is said”, and one stolen file.',
  fim: 'Now you know the history. Now the trailer.',
  antes: [
    { q: 'You know the history now. In the trailer, what is the stolen file believed to contain?', h: 'It is believed to contain … / It is said that …', r: 'It is believed to contain the names of secret agents. It is said that it could start a war.' },
    { q: 'Who is the man thought to be?', h: 'He is thought to be … / He is said to have …', r: 'He is thought to be a spy. He is said to have betrayed his own country.' }
  ],
  paradas: [
    { k: 'ROSWELL', nome: 'Roswell', dur: '1947', x: 30, y: 62, img: 'roswell',
      h: 'It is said that something fell',
      t: 'In 1947, near Roswell, New Mexico, a farmer found strange metal pieces. The army first announced a “flying disc”, then said it was a weather balloon. To this day, it is said that something else fell there.',
      q: 'What is something that is said about your city that may not be true?', st: ['It is said that …', 'It is believed to …'],
      ex: 'It is said that the river under our main street is haunted.' },
    { k: 'BLUE BOOK', nome: 'Blue Book', dur: '1952 – 1969', x: 50, y: 40, img: 'arquivos',
      h: 'Twelve thousand reports',
      t: 'From 1952 to 1969, the U.S. Air Force studied UFO reports in a project called Blue Book. More than twelve thousand reports were collected. Most were explained. Some are still said to be “unidentified”.',
      q: 'Is there a mystery in your family that has never been explained?', st: ['It is thought that …', 'My grandfather is said to have …'],
      ex: 'My great-grandmother is said to have been a spy.' },
    { k: 'THE VIDEOS', nome: 'The Videos', dur: '2017 – 2020', x: 74, y: 30, img: 'cockpit',
      h: 'Pilots are said to have seen…',
      t: 'In 2017, a newspaper published videos from Navy pilots: small objects moving in impossible ways. In 2020, the Pentagon officially released them. The pilots are believed to have seen something real. What, nobody says.',
      q: 'Have you ever seen something in the sky you couldn’t explain?', st: ['I once saw …', 'It was thought to be …'],
      ex: 'I once saw a line of lights in the sky.' },
    { k: 'THE FILE', nome: 'The File', dur: '79 YEARS', x: 82, y: 66, img: 'antena',
      h: 'A man steals the proof',
      t: 'In the film, a man steals a secret file from the government: proof that we are not alone. For 79 years, the truth is said to have been hidden. He believes people have the right to know.',
      q: 'Do you think governments should tell everything they know? Why?', st: ['It is often said that …', 'I think …'],
      ex: 'It is often said that some secrets protect people.' },
    { k: 'THE NEWS', nome: 'The News', dur: 'CAREFUL WORDS', x: 20, y: 30, img: 'estudio',
      h: 'Nobody says “we know”',
      t: 'So the news is careful. Nobody official says “we know”. They say: it is believed, it is said, he is thought to have… The passive hides who is talking. And a TV weather woman is caught in the middle.',
      q: 'Why do you think journalists use “it is said that” so much?', st: ['They use it because …', 'It is thought to …'],
      ex: 'They use it because they don’t want to name the source.' }
  ]
};
