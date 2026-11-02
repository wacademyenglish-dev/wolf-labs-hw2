/* TOY STORY · O LORE (cena I · The Story)  09/10/2026 — A2, já com os superlativos (the oldest, the funniest, the most…, the best). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A child’s bedroom seen from above, like a map, at night',
  rotulo: 'THE MAP OF THE ROOM', anda: 'Go to the next shelf',
  fimTit: 'Thirty years of toys that come alive.',
  fim: 'Now you know the toys. Now the trailer.',
  antes: [
    { q: 'You know the toys now. In the trailer, who is the newest toy in the house? Guess.', h: 'I think the newest toy is …', r: 'I think the newest toy is Buzz Lightyear.' },
    { q: 'Woody, Buzz or Jessie: who is the bravest? Why?', h: 'I think … is the bravest, because …', r: 'I think Woody is the bravest, because he always goes back for his friends.' }
  ],
  paradas: [
    { k: '1995', nome: '1995', dur: 'THE FIRST', x: 18, y: 30, img: 'quarto',
      h: 'The first film made with computers',
      t: 'In 1995, Toy Story was the first film made all with computers. Toys are alive when nobody looks.',
      q: 'What is the oldest film you remember watching?', st: ['The oldest film I remember is …', 'I watched it when I was …'],
      ex: 'The oldest film I remember is The Lion King.' },
    { k: 'ANDY’S ROOM', nome: 'Andy’s Room', dur: 'WOODY AND BUZZ', x: 40, y: 56, img: 'brinquedos',
      h: 'The favorite toy',
      t: 'Woody was Andy’s favorite toy. Then Buzz arrived: the newest, shiniest toy.',
      q: 'Who was the best friend you had as a child? Where did you meet?', st: ['My best friend was …', 'We met …'],
      ex: 'My best friend was Lucas.' },
    { k: 'BONNIE', nome: 'Bonnie', dur: '2010', x: 62, y: 30, img: 'caixa',
      h: 'A box at the door',
      t: 'Andy grew up and gave his toys to Bonnie, a little girl.',
      q: 'What is the saddest film scene you remember?', st: ['The saddest scene is …', 'I cried / I didn’t cry.'],
      ex: 'The saddest scene is the start of Up.' },
    { k: 'FORKY', nome: 'Forky', dur: '2019', x: 82, y: 58, img: 'garfo',
      h: 'The strangest toy',
      t: 'Bonnie made a toy with a spork: Forky. He was the strangest toy in the room.',
      q: 'What is the strangest thing you made as a child?', st: ['The strangest thing I made was …', 'I made it with …'],
      ex: 'The strangest thing I made was a robot.' },
    { k: 'LILYPAD', nome: 'Lilypad', dur: '2026', x: 44, y: 82, img: 'brecho',
      h: 'The newest toy of all',
      t: 'In the new film, a tablet arrives. She is the most modern toy. The old toys feel forgotten.',
      q: 'What is the most useful thing you have? Is it new or old?', st: ['The most useful thing I have is …', 'It is the oldest / newest …'],
      ex: 'The most useful thing I have is my bike.' }
  ]
};
