/* THE HUNGER GAMES · O LORE (cena I · The Story)  09/10/2026 — B1, já com should / ought to / had better.
   Sem como ninguém morre: a aula fica no conselho e na sobrevivência. Do filme de 2026, só o que o livro e a aula já dizem. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A relief map of a country with twelve districts and a capital, at night',
  rotulo: 'THE MAP OF PANEM', anda: 'Go to the next district',
  fimTit: 'Twelve districts, one Capitol, and a boy from the poorest place.',
  fim: 'Now you know Panem. Now the trailer.',
  antes: [
    { q: 'You know the Games now. In the trailer, what should the boy from District 12 do first? Guess.', h: 'He should … / He’d better not …', r: 'He should find water first. He’d better not fight at the start.' },
    { q: 'Twice the tributes this year. What had the players better do?', h: 'They’d better … / They ought to …', r: 'They’d better make friends quickly. They ought to stay hidden.' }
  ],
  paradas: [
    { k: 'PANEM', nome: 'Panem', dur: 'THE COUNTRY', x: 50, y: 30, img: 'capitolio',
      h: 'A rich Capitol, twelve poor districts',
      t: 'Panem is a country in the future. In the middle, the Capitol is rich and colorful. Around it, there are twelve districts, and they are poor. Each district works for the Capitol: coal, fish, wood, food.',
      q: 'What should a rich city do for the poor places around it?', st: ['It should …', 'It ought to …'],
      ex: 'It should build good schools.' },
    { k: 'THE REAPING', nome: 'The Reaping', dur: 'ONCE A YEAR', x: 22, y: 60, img: 'distrito',
      h: 'Names in a glass bowl',
      t: 'Once a year, every district has a Reaping. The names of young people go into a glass bowl. Two names come out: a boy and a girl. They have to go to the Games. Nobody chooses to go.',
      q: 'You have a very important day tomorrow. What should you do tonight?', st: ['I should …', 'I’d better not …'],
      ex: 'I should go to bed early.' },
    { k: 'THE GAMES', nome: 'The Games', dur: 'ON TV', x: 74, y: 56, img: 'cornucopia',
      h: 'A show for the Capitol',
      t: 'The tributes go into an arena. There is a golden horn in the middle with food and tools. Only one person can come back.',
      q: 'What is a TV show that you think is too cruel? Should people stop watching it?', st: ['I think … is too cruel.', 'People should … / ought to …'],
      ex: 'I think some reality shows are too cruel.' },
    { k: 'THE QUARTER QUELL', nome: 'The Quarter Quell', dur: 'THE 50TH GAMES', x: 82, y: 22, img: 'capa',
      h: 'Twice the number of tributes',
      t: 'Every twenty-five years, the Games have a special rule. At the 50th Games, the rule is terrible: twice the number of tributes. Forty-eight young people go into the arena. They’d better make friends fast.',
      q: 'You start a new job with forty-eight people. What should you do on the first day?', st: ['I should …', 'I’d better …'],
      ex: 'I should learn names.' },
    { k: 'DISTRICT 12', nome: 'District 12', dur: 'THE COAL', x: 30, y: 84, img: 'mina',
      h: 'A boy from the poorest place',
      t: 'This story happens twenty-four years before Katniss. A boy from District 12, the place of the coal mines, goes to the 50th Games. Years later, he will be a mentor: the person who gives advice to new players.',
      q: 'Who gave you the best advice in your life? What was it?', st: ['The best advice came from my …', 'He / She said I should …'],
      ex: 'The best advice came from my grandmother.' }
  ]
};
