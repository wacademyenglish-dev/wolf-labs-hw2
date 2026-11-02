/* THE GOOD PLACE · O LORE (cena I · The Story)  09/10/2026 — A2, já com have to / has to / don't have to / had to.
   Sem a grande virada da série (spoiler): a aula fica no começo. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of a perfect little town in the afterlife, at night',
  rotulo: 'THE MAP OF THE GOOD PLACE', anda: 'Walk to the next stop',
  fimTit: 'A woman in the wrong place, and a teacher who has to save her.',
  fim: 'Now you know the Good Place. Now the clip.',
  antes: [
    { q: 'You know Chidi now. In the clip, what does he have to decide? Guess.', h: 'I think he has to … / He doesn’t have to …', r: 'I think he has to choose: one person or five people.' },
    { q: 'A train is coming. Do you have to choose, or can you do nothing?', h: 'I think you have to … / You don’t have to …', r: 'I think you have to choose, because doing nothing is also a choice.' }
  ],
  paradas: [
    { k: 'ARIZONA', nome: 'Arizona', dur: 'HER OLD LIFE', x: 18, y: 70, img: 'estacionamento',
      h: 'A rude woman, a silly end',
      t: 'Eleanor wasn’t nice: she lied and never said sorry. Then she died in a silly accident.',
      q: 'What did you have to do yesterday that you didn’t want to do?', st: ['Yesterday, I had to …', 'I didn’t want to, but …'],
      ex: 'Yesterday, I had to clean the bathroom.' },
    { k: 'THE POINTS', nome: 'The Points', dur: 'YOUR WHOLE LIFE', x: 40, y: 40, img: 'sala',
      h: 'Every action has points',
      t: 'After you die, somebody counts your points. Every action in your life has a number. Helping a friend: plus points. Being rude: minus points.',
      q: 'What is one good thing you have to do every day?', st: ['Every day, I have to …', 'It is worth … points!'],
      ex: 'Every day, I have to walk my grandma’s dog.' },
    { k: 'THE NEIGHBORHOOD', nome: 'The Neighborhood', dur: 'THE GOOD PLACE', x: 60, y: 56, img: 'bairro',
      h: 'A perfect town',
      t: 'Eleanor wakes up in a perfect little town. Everybody is very good.',
      q: 'In your perfect town, what don’t you have to do?', st: ['In my perfect town, I don’t have to …', 'And I have to …'],
      ex: 'In my perfect town, I don’t have to drive.' },
    { k: 'CHIDI', nome: 'Chidi', dur: 'THE TEACHER', x: 80, y: 32, img: 'professor',
      h: 'A teacher who can’t decide',
      t: 'Chidi has to teach Eleanor to be good. But he can never decide anything.',
      q: 'What is a decision that is hard for you?', st: ['It’s hard for me to decide …', 'I have to think for …'],
      ex: 'It’s hard for me to decide what to watch.' },
    { k: 'THE TROLLEY', nome: 'The Trolley', dur: 'THE TEST', x: 70, y: 80, img: 'capa',
      h: 'A train, a lever, a choice',
      t: 'Michael has a test for Chidi: a train is coming. If you pull the lever, it changes tracks.',
      q: 'Is there a choice you had to make this year? What did you choose?', st: ['This year, I had to choose between …', 'I chose …'],
      ex: 'This year, I had to choose between two jobs.' }
  ]
};
