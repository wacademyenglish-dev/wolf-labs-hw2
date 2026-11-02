/* JUJUTSU KAISEN · O LORE (cena I · The Story)  09/10/2026 — B1, já com make / let / be made to / be allowed to. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A dark map of Tokyo with purple lights',
  rotulo: 'THE MAP OF THE CURSES', anda: 'Go to the next stop',
  fimTit: 'A strong boy, a cursed finger, and a death sentence that waits.',
  fim: 'Now you know Yuji. Now the trailer.',
  antes: [
    { q: 'You know Yuji now. In the trailer, what do the sorcerers make him do? Guess.', h: 'I think they make him … / They don’t let him …', r: 'I think they make him eat the cursed finger. They don’t let him go back to normal life.' },
    { q: 'If a king of curses lived inside you, would you let him talk?', h: 'I would / wouldn’t let him … because …', r: 'I wouldn’t let him talk, because he is dangerous and he lies.' }
  ],
  paradas: [
    { k: 'CURSES', nome: 'Curses', dur: 'BORN FROM FEAR', x: 50, y: 50, img: 'rua',
      h: 'Fear has a body',
      t: 'In this world, people’s fear and anger don’t disappear. They become curses: invisible monsters that hurt people. Only special people, jujutsu sorcerers, can see them and fight them.',
      q: 'What made you afraid when you were a child?', st: ['… made me afraid.', 'My parents didn’t let me …'],
      ex: 'Storms made me afraid.' },
    { k: 'YUJI', nome: 'Yuji', dur: 'A NORMAL BOY', x: 18, y: 30, img: 'escola',
      h: 'A strong boy with a promise',
      t: 'Yuji Itadori is a high school student who is incredibly strong, but he only wants a normal life. Before his grandfather died, he made Yuji promise one thing: help people, and don’t die alone.',
      q: 'What is a promise somebody made you make?', st: ['My … made me promise to …', 'I kept it / I didn’t keep it.'],
      ex: 'My mother made me promise to call her every Sunday.' },
    { k: 'THE FINGER', nome: 'The Finger', dur: 'A CURSED OBJECT', x: 38, y: 74, img: 'caixa',
      h: 'He swallowed it',
      t: 'At his school, there is an old box with a cursed finger inside: a finger of Sukuna, the King of Curses. Monsters attack his friends. To get the power to save them, Yuji swallows the finger.',
      q: 'What is the strangest thing a friend made you eat or try?', st: ['A friend made me try …', 'It was …'],
      ex: 'A friend made me try a very spicy pepper.' },
    { k: 'THE SCHOOL', nome: 'Jujutsu High', dur: 'TOKYO', x: 70, y: 28, img: 'jujutsu',
      h: 'A sentence that waits',
      t: 'The old sorcerers who make the rules want to kill Yuji. But they let him live… for now: he is made to find and eat all twenty fingers, and then he will die.',
      q: 'Who makes the rules at your job or school? Do they let you choose anything?', st: ['… makes the rules.', 'They let us … / They don’t let us …'],
      ex: 'My manager makes the rules.' },
    { k: 'GOJO', nome: 'Gojo', dur: 'THE STRONGEST', x: 84, y: 66, img: 'capa',
      h: 'The teacher who breaks the rules',
      t: 'His teacher is Satoru Gojo, the strongest sorcerer alive. He wears a blindfold, he jokes a lot, and he doesn’t let the old men make all the decisions.',
      q: 'Which teacher let you be yourself? What did he or she make you believe?', st: ['My teacher … let me …', 'He / She made me believe …'],
      ex: 'My English teacher let me speak without fear.' }
  ]
};
