/* THE LORD OF THE RINGS (B1) · O LORE (cena I · The Story)  09/10/2026 — B1, já com o first conditional (if + presente, will; unless; when / as soon as).
   A outra aula do filme (B2, os portadores) conta a história do Anel; esta conta quem está sentado na mesa do Conselho. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of the road from the Shire to Rivendell, at night',
  rotulo: 'THE ROAD TO RIVENDELL', anda: 'Walk to the next stop',
  fimTit: 'Elves, Dwarves, Men, a wizard and four hobbits at one table.',
  fim: 'Now you know the Council. Now the film.',
  antes: [
    { q: 'You know the Council now. In the film, who will take the Ring? Guess.', h: 'I think … will take it, because …', r: 'I think Frodo will take it, because he is small and brave.' },
    { q: 'What will happen if nobody takes the Ring to the fire?', h: 'If nobody takes it, … will …', r: 'If nobody takes it, Sauron will find it and destroy Middle-earth.' }
  ],
  paradas: [
    { k: 'THE SHIRE', nome: 'The Shire', dur: 'HOME', x: 14, y: 40, img: 'condado',
      h: 'Small people who love peace',
      t: 'Hobbits are small, quiet people who love food, gardens and long naps. Frodo has the Ring now. If he stays at home, the enemy will come for it. So he leaves, with his friend Sam.',
      q: 'If you have a free day tomorrow, what will you do?', st: ['If I have a free day, I will …', 'Unless it rains, I will …'],
      ex: 'If I have a free day, I will go to the beach.' },
    { k: 'GANDALF', nome: 'Gandalf', dur: 'THE WIZARD', x: 32, y: 60, img: 'fogo',
      h: 'An old wizard with a plan',
      t: 'Gandalf is an old wizard and Frodo’s friend. He knows what the Ring is. He tells Frodo: as soon as you leave, go to Rivendell, the home of the Elves. There, we will decide what to do.',
      q: 'Who do you call as soon as you have a problem?', st: ['As soon as I have a problem, I call …', 'If he / she doesn’t answer, I will …'],
      ex: 'As soon as I have a problem, I call my best friend.' },
    { k: 'ARAGORN', nome: 'Aragorn', dur: 'THE RANGER', x: 52, y: 34, img: 'espada',
      h: 'A king who doesn’t want the crown',
      t: 'On the road, a quiet ranger called Strider helps the hobbits. His real name is Aragorn, and he is the heir to the throne of Men. But he doesn’t want it.',
      q: 'If someone offered you a big leadership job, would you accept? What will change?', st: ['If they offer it, I will …', 'Unless …, I won’t …'],
      ex: 'If they offer it, I will accept.' },
    { k: 'THE OLD ENEMIES', nome: 'Old Enemies', dur: 'ELF AND DWARF', x: 72, y: 60, img: 'arco',
      h: 'An Elf and a Dwarf at one table',
      t: 'Legolas is an Elf, and Gimli is a Dwarf. Their peoples have hated each other for centuries. Now they sit at the same table. If they don’t work together, they will both lose.',
      q: 'Is there someone you don’t like, but you will have to work with?', st: ['If we work together, we will …', 'Unless we talk, …'],
      ex: 'Yes, a colleague.' },
    { k: 'THE COUNCIL', nome: 'The Council', dur: 'RIVENDELL', x: 88, y: 40, img: 'mesa',
      h: 'Who will go?',
      t: 'The Council sits at a round table. The Ring can’t be used and can’t be hidden. Unless somebody takes it to the fire where it was made, it will never be destroyed. Everyone argues.',
      q: 'When there is a hard job in your family, who usually says “I will do it”?', st: ['When there is a hard job, … says “I will do it”.', 'If nobody does, …'],
      ex: 'When there is a hard job, my sister says “I will do it”.' }
  ]
};
