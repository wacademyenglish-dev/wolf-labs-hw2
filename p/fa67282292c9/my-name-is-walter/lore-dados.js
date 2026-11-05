/* BREAKING BAD · O LORE (cena I · The Case)  09/10/2026 — A1, já com as perguntas (who, what, where, how old, why). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of a desert city, at night',
  rotulo: 'THE CASE MAP', anda: 'Drive to the next stop',
  fimTit: 'A chemistry teacher, a sick man, a desert road.',
  fim: 'Now you know Walter. Now the first scene.',
  antes: [
    { q: 'You know Walter now. Where is he in the first scene? Why is he there? Guess.', h: 'I think he is in the … because …', r: 'I think he is in the desert because he is in trouble and he is hiding.' },
    { q: 'A man talks to a video camera on the road. Who is the message for?', h: 'It is for his …', r: 'It is for his family: his wife and his son.' }
  ],
  paradas: [
    { k: 'ALBUQUERQUE', nome: 'Albuquerque', dur: 'HOME', x: 50, y: 44, img: 'cena3-cozinha',
      h: 'A normal family',
      t: 'Walter White lives in Albuquerque, a city in the desert of New Mexico. He is fifty years old. He has a wife, Skyler, and a son.',
      q: 'Where do you live? Who do you live with?', st: ['I live in …', 'I live with …'],
      ex: 'I live in Curitiba.' },
    { k: 'THE SCHOOL', nome: 'The School', dur: 'MONDAY TO FRIDAY', x: 26, y: 30, img: 'sala',
      h: 'A teacher with two jobs',
      t: 'Walter is a chemistry teacher at a high school. He is very intelligent, but his students are bored.',
      q: 'What do you do? Where do you work or study?', st: ['I am a …', 'I work at … / I study at …'],
      ex: 'I am a nurse.' },
    { k: 'THE DOCTOR', nome: 'The Doctor', dur: 'THE BAD NEWS', x: 72, y: 26, img: 'ficha',
      h: 'Very bad news',
      t: 'One day, Walter goes to the doctor. The news is very bad: he is very sick. He thinks about his family. Who pays for the house?',
      q: 'Who is an important person in your life? Why?', st: ['An important person is my …', 'because …'],
      ex: 'An important person is my daughter, because she is my best friend.' },
    { k: 'THE RV', nome: 'The RV', dur: 'A NEW PARTNER', x: 78, y: 66, img: 'cena2-estrada',
      h: 'An old RV and an old student',
      t: 'Walter decides to do something very bad to get money. It is a crime. His partner is Jesse, an old student.',
      q: 'What is your favorite trip by car? Where do you go?', st: ['My favorite trip is to …', 'I go with my …'],
      ex: 'My favorite trip is to the beach.' },
    { k: 'THE ROAD', nome: 'The Road', dur: 'THE FIRST SCENE', x: 30, y: 76, img: 'cena5-sirene',
      h: 'Sirens on the road',
      t: 'The first scene is the end of the first story. The RV is on a desert road. Walter hears sirens.',
      q: 'You record a message for your family. What do you say first?', st: ['My name is …', 'I want to say …'],
      ex: 'My name is Ana.' }
  ]
};
