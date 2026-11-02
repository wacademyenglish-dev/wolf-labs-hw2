/* ============================================================
   ATTACK ON TITAN · O LORE (cena I · The World)       09/10/2026
   Pedido do Carlos: o lore no lugar das perguntas pré-trailer. Cinco
   paradas na ordem da história, em A2, já com a gramática da aula
   (can / can't / could / couldn't / be allowed to). Sem spoiler depois
   do primeiro episódio, a não ser o sonho do Armin, que é do começo.
   ============================================================ */
window.WL_LORE = {
  mapa: 'mapa', alt: 'Three round walls seen from above, at dusk',
  rotulo: 'THE MAP OF THE WALLS', anda: 'Walk to the next stop',
  fimTit: 'From one hundred years of peace to a dream of the sea.',
  fim: 'Now you know the world inside the walls. Now the trailer.',
  paradas: [
    { k: 'THE THREE WALLS', nome: 'The Three Walls', dur: '100 YEARS OF PEACE', x: 51, y: 50, img: 'cidade',
      h: 'A safe life, with one rule',
      t: 'For one hundred years, people have lived inside three giant walls: Maria, Rose and Sina. Inside, they can farm, work and sleep in peace. But there is one rule: nobody is allowed to go outside.',
      q: 'Would you like to live in a safe place that you can never leave? Why or why not?', st: ['Yes, because I can …', 'No, because I couldn’t …'],
      ex: 'No. I can’t stay in one place all my life. I like to travel.' },
    { k: 'OUTSIDE', nome: 'Outside', dur: 'THE TITANS', x: 86, y: 18, img: 'portao',
      h: 'The giants outside',
      t: 'Outside the walls there are titans: giants that eat people. They can’t talk, and you can’t hurt them easily. Nobody knows where they come from. The walls are the only thing that can stop them.',
      q: 'When you were a child, what were you afraid of?', st: ['When I was a child, I was afraid of …', 'I couldn’t sleep when …'],
      ex: 'When I was a child, I was afraid of the dark. I couldn’t sleep without a light.' },
    { k: 'SHIGANSHINA', nome: 'Shiganshina', dur: 'YEAR 845', x: 74, y: 82, img: 'portao-quebrado',
      h: 'The day the gate broke',
      t: 'Eren Yeager is ten. He lives in Shiganshina, a small town on the outer wall. One day, a titan taller than the wall kicks the gate. The titans come in. Eren’s mother can’t run, and Eren can’t save her.',
      q: 'Was there a day when you couldn’t do something very important? What happened?', st: ['One day, I couldn’t …', 'because …'],
      ex: 'One day, I couldn’t go to my best friend’s wedding, because my flight was cancelled.' },
    { k: 'THE TRAINING CORPS', nome: 'Training Corps', dur: 'YEARS LATER', x: 28, y: 64, img: 'treino',
      h: 'Three friends become soldiers',
      t: 'Eren and his friends Mikasa and Armin join the army. They learn to fly between the houses with a special gear. Only one group, the Survey Corps, is allowed to go outside the walls. Eren wants to be in it.',
      q: 'Is there something that only some people are allowed to do at your job or your school?', st: ['Only … are allowed to …', 'We aren’t allowed to …'],
      ex: 'Only the managers are allowed to open the safe. We aren’t allowed to use our phones in meetings.' },
    { k: 'ARMIN’S BOOK', nome: 'Armin’s Book', dur: 'THE DREAM', x: 40, y: 30, img: 'livro',
      h: 'Water you can’t drink',
      t: 'Armin has an old book. It says that outside the walls there is a lot of water, and you can’t drink it: an ocean. Inside the walls, books like this are not allowed. The three friends dream of seeing the sea.',
      q: 'What is one place you want to see one day? Why?', st: ['One day, I want to see …', 'because I can’t …'],
      ex: 'One day, I want to see the northern lights, because we can’t see them in Brazil.' }
  ]
};
