/* THE OFFICE · O LORE (cena I · The Story)  09/10/2026 — A2, já com at / on / in.
   O "mapa" desta é o relógio da parede: as paradas andam pelas horas do dia do trote. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A big office wall clock seen up close, in the evening',
  rotulo: 'THE OFFICE CLOCK', anda: 'Move the clock',
  fimTit: 'Nine in the morning to five in the afternoon… or is it?',
  fim: 'Now you know the day. Now the clip.',
  antes: [
    { q: 'You know the prank now. What time does Michael think it is when he wakes up?', h: 'He thinks it is five o’clock. It is really …', r: 'He thinks it is five o’clock. It is really only half past three.' },
    { q: 'What time do you usually go home? On which days do you finish early?', h: 'I usually go home at … On Fridays, I …', r: 'I usually go home at six. On Fridays, I finish early, at four.' }
  ],
  paradas: [
    { k: 'THE SHOW', nome: 'The Show', dur: '2005 – 2013', x: 50, y: 50, img: 'capa',
      h: 'A short joke before the title',
      t: 'The Office was on TV from 2005 to 2013. Every episode starts with a short joke before the title: a “cold open”. Our clip is one of the most famous cold opens.',
      q: 'What show did you watch every week? On what day was it on?', st: ['I watched … every week.', 'It was on …'],
      ex: 'I watched Friends every week.' },
    { k: 'NINE A.M.', nome: 'Nine A.M.', dur: 'THE MORNING', x: 35, y: 50, img: 'rua',
      h: 'Work starts at nine',
      t: 'At Dunder Mifflin, work starts at nine in the morning and ends at five in the afternoon. In the morning, everybody is busy. In the afternoon, everybody looks at the clock.',
      q: 'What time do you start work or school? At what time are you most tired?', st: ['I start at …', 'I’m most tired at … / in the …'],
      ex: 'I start at eight.' },
    { k: 'LUNCH', nome: 'Lunch', dur: 'AT NOON', x: 50, y: 14, img: 'torta',
      h: 'A whole chicken pot pie',
      t: 'At noon, the boss, Michael Scott, eats lunch. He eats a whole chicken pot pie, alone, in ten minutes. Not one piece: the whole pie.',
      q: 'What did you eat for lunch on Sunday? Did you eat too much?', st: ['On Sunday, I ate …', 'In the afternoon, I …'],
      ex: 'On Sunday, I ate lasagna.' },
    { k: 'THE NAP', nome: 'The Nap', dur: 'IN THE AFTERNOON', x: 62, y: 24, img: 'relogio',
      h: 'The boss falls asleep',
      t: 'At two in the afternoon, Michael falls asleep at his desk. The office is quiet. Nobody wants to wake him up. So the team has a plan… with the clocks.',
      q: 'Do you sleep in the afternoon? On which days?', st: ['Yes, on … / No, never.', 'I sleep for about … minutes.'],
      ex: 'Yes, on Saturdays.' },
    { k: 'FIVE O’CLOCK', nome: 'Five O’Clock', dur: '…OR IS IT?', x: 59, y: 80, img: 'capa',
      h: 'A clock that lies',
      t: 'Jim changes the clock on Michael’s computer. Dwight changes his watch. Michael wakes up, looks at the clock and thinks it is five o’clock.',
      q: 'Were you ever late, or early, because of a wrong clock?', st: ['Once, I was … because …', 'It was on … at …'],
      ex: 'Once, I was an hour early because my phone was wrong.' }
  ]
};
