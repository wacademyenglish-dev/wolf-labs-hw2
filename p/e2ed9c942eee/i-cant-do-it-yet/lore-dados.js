/* NARUTO · O LORE (cena I · The Village)  09/10/2026 — A1, já com can / can't / yet. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of a ninja village in the forest, at night',
  rotulo: 'THE MAP OF THE VILLAGE', anda: 'Run to the next stop',
  fimTit: 'From the worst student to a hero… almost.',
  fim: 'Now you know Naruto. Now the trailer.',
  antes: [
    { q: 'Naruto can’t do a simple trick at school. Now, after two years, what can he do? Guess.', h: 'I think he can … / He can’t … yet.' },
    { q: 'What can you do now that you couldn’t do two years ago?', h: 'Now I can … Two years ago, I couldn’t …', r: 'Now I can drive a car. Two years ago, I couldn’t.' }
  ],
  paradas: [
    { k: 'THE VILLAGE', nome: 'The Village', dur: 'HOME', x: 50, y: 48, img: 'vila',
      h: 'A village of ninjas',
      t: 'Naruto lives in a village in the forest. Many people here are ninjas.',
      q: 'Can you run fast? What sport can you play?', st: ['Yes, I can … / No, I can’t …', 'I can play …'],
      ex: 'No, I can’t run fast.' },
    { k: 'THE ACADEMY', nome: 'The Academy', dur: 'NINJA SCHOOL', x: 26, y: 30, img: 'academia',
      h: 'The worst student',
      t: 'At ninja school, Naruto is the worst student. He can’t do a simple trick. The other kids laugh at him.',
      q: 'At school, what couldn’t you do? Can you do it now?', st: ['At school, I couldn’t …', 'Now I can … / I can’t … yet.'],
      ex: 'At school, I couldn’t speak English.' },
    { k: 'TEAM 7', nome: 'Team 7', dur: 'THE TEAM', x: 72, y: 30, img: 'treino',
      h: 'Three kids and a teacher',
      t: 'Naruto is in a team with Sakura and Sasuke. Their teacher is Kakashi. Sasuke can do everything, and Naruto can’t.',
      q: 'Do you work or study in a team? What can your team do well?', st: ['My team can …', 'We can’t … yet.'],
      ex: 'Yes.' },
    { k: 'THE ROAD', nome: 'The Road', dur: 'TWO YEARS', x: 80, y: 70, img: 'rolo',
      h: 'Two years away',
      t: 'Naruto leaves the village with a great ninja, Jiraiya. For two and a half years, he trains every day.',
      q: 'What do you practice every day? How long have you practiced it?', st: ['I practice … every day.', 'Now I can …'],
      ex: 'I practice the guitar every day.' },
    { k: 'HOME AGAIN', nome: 'Home Again', dur: 'SHIPPUDEN', x: 30, y: 74, img: 'capa',
      h: 'He can do it… almost',
      t: 'Naruto comes home. He is taller, and he can do amazing things now. But he isn’t the Hokage… yet.',
      q: 'What is your big dream? Can you do it now?', st: ['My dream is to …', 'I can’t do it… yet!'],
      ex: 'My dream is to live in another country.' }
  ]
};
