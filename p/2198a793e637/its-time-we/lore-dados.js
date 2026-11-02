/* X-MEN ’97 · O LORE (cena I · The Story)  09/10/2026 — B2, já com would rather / it's (high) time. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of a big mansion and its grounds, at night',
  rotulo: 'THE MAP OF THE MANSION', anda: 'Go to the next room',
  fimTit: 'A team without its teacher, and a will nobody expected.',
  fim: 'Now you know the X-Men. Now the trailer.',
  antes: [
    { q: 'You know the will now. In the trailer, would the team rather follow Magneto or split up? Guess.', h: 'I think they’d rather … than …', r: 'I think they’d rather split up than follow Magneto.' },
    { q: 'What do you think Cyclops says: “It’s time we…” what?', h: '“It’s time we …”', r: '“It’s time we stopped hiding and stood up for ourselves.”' }
  ],
  paradas: [
    { k: '1992', nome: '1992', dur: 'THE CARTOON', x: 16, y: 26, img: 'capa',
      h: 'A cartoon a whole generation remembers',
      t: 'From 1992 to 1997, X-Men: The Animated Series was on TV every Saturday morning. Many kids who watched it are adults now. In 2024, X-Men ’97 continued the same story, in the same style.',
      q: 'Would you rather watch an old cartoon from your childhood, or a new one? Why?', st: ['I’d rather watch …', 'It’s time I …'],
      ex: 'I’d rather watch an old one.' },
    { k: 'THE SCHOOL', nome: 'The School', dur: 'THE MANSION', x: 40, y: 50, img: 'mansao',
      h: 'A school for people the world fears',
      t: 'Mutants are people born with powers, and many humans hate and fear them. Professor Charles Xavier opened a school in his mansion to teach young mutants to control their powers, and to protect a world that fears them.',
      q: 'Would you rather study at a big famous school or a small, quiet one?', st: ['I’d rather study at …', 'because …'],
      ex: 'I’d rather study at a small one, because the teachers know your name.' },
    { k: 'PROFESSOR X', nome: 'Professor X', dur: 'GONE', x: 62, y: 30, img: 'clube',
      h: 'The teacher is gone',
      t: 'Professor X is gone. He leaves the team a message: he is proud of his X-Men, and their future is in their hands now. For the first time, the students have to decide alone.',
      q: 'When did you first have to decide something big without help?', st: ['The first time was when …', 'I’d rather have had …'],
      ex: 'The first time was when I chose my university.' },
    { k: 'MAGNETO', nome: 'Magneto', dur: 'THE WILL', x: 82, y: 56, img: 'magneto',
      h: 'Everything goes to the enemy',
      t: 'Then the will is read, and everything the Professor built goes to Magneto, his old friend and old enemy. Magneto used to think humans and mutants could never live together. Now he is their leader.',
      q: 'Would you rather work for a boss you don’t trust, or lose your job?', st: ['I’d rather …', 'I’d rather not …'],
      ex: 'I’d rather lose my job.' },
    { k: 'THE VOTE', nome: 'The Vote', dur: 'CYCLOPS', x: 46, y: 82, img: 'reuniao',
      h: 'Stay together, or split up?',
      t: 'Cyclops, the team leader, wants the X-Men to stay together. Not everybody agrees: some would rather leave than follow Magneto. Cyclops says it is time they made a choice. The team votes.',
      q: 'In your family or team, is it time somebody changed something? What?', st: ['It’s time we …', 'I’d rather we …'],
      ex: 'It’s time we stopped working on weekends.' }
  ]
};
