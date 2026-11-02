/* SPY x FAMILY · O LORE (cena I · The Story)  09/10/2026 — A2, já com present simple (rotina) × present continuous (agora). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of an old European city divided in two, at night',
  rotulo: 'THE MAP OF BERLINT', anda: 'Go to the next file',
  fimTit: 'A spy, an assassin, a girl who reads minds, and a dog.',
  fim: 'Now you know the family. Now the trailer.',
  antes: [
    { q: 'You know the family now. In the trailer, what is Loid really doing? Guess.', h: 'He says he works at …, but he is really …ing.' },
    { q: 'Anya reads minds. What is she probably thinking right now?', h: 'She is probably thinking: “…”' }
  ],
  paradas: [
    { k: 'TWO COUNTRIES', nome: 'Two Countries', dur: 'A COLD WAR', x: 50, y: 22, img: 'sala',
      h: 'Peace on the outside',
      t: 'Two countries live side by side. They don’t trust each other. Spies work every day.',
      q: 'What is a secret project you are working on these days?', st: ['These days, I’m working on …', 'Nobody knows that I …'],
      ex: 'These days, I’m working on a surprise party.' },
    { k: 'TWILIGHT', nome: 'Twilight', dur: 'THE SPY', x: 20, y: 46, img: 'mesa',
      h: 'The best spy has a new mission',
      t: 'Loid says he works at a hospital. In fact, he is the best spy in the country.',
      q: 'What do you say you do, and what are you really doing right now?', st: ['I say I usually …', 'But right now I’m …ing!'],
      ex: 'I say I usually study at night.' },
    { k: 'ANYA', nome: 'Anya', dur: 'THE DAUGHTER', x: 34, y: 74, img: 'escola',
      h: 'A little girl who reads minds',
      t: 'Loid adopts Anya. She loves peanuts and hates studying. And she can read minds.',
      q: 'If you could read minds today, whose mind would you read?', st: ['I’d read …’s mind.', 'I think he / she is thinking about …'],
      ex: 'I’d read my boss’s mind.' },
    { k: 'YOR', nome: 'Yor', dur: 'THE MOTHER', x: 70, y: 70, img: 'prefeitura',
      h: 'A quiet woman with a night job',
      t: 'Yor works at City Hall. She is kind and a little shy. But at night she has another job: she is an assassin.',
      q: 'What do you do every day, and what are you doing this month?', st: ['Every day, I …', 'This month, I’m …ing.'],
      ex: 'Every day, I take the bus.' },
    { k: 'BOND', nome: 'Bond', dur: 'THE DOG', x: 84, y: 38, img: 'cao',
      h: 'A big white dog with a secret too',
      t: 'Later, the family adopts a big white dog, Bond. Of course, he has a secret too: he can see the future.',
      q: 'What is your pet, or a friend’s pet, doing right now? Guess!', st: ['I think … is …ing.', 'He / She usually …'],
      ex: 'I think my cat is sleeping on my bed.' }
  ]
};
