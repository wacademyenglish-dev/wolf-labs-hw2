/* TOY STORY 5 (B2) · O LORE (cena I · The Story)  09/10/2026 — B2, já com wish / if only / hope.
   A outra aula do filme (A2, o brechó) conta os 30 anos dos filmes; esta conta os desejos dos brinquedos. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A house seen from above, with an attic, at night',
  rotulo: 'THE MAP OF THE HOUSE', anda: 'Go to the next room',
  fimTit: 'Toys who only wish to be played with.',
  fim: 'Now you know what the toys wish. Now the trailer.',
  antes: [
    { q: 'You know the toys now. In the trailer, what does Woody wish? Guess.', h: 'He wishes Bonnie … / If only …', r: 'He wishes Bonnie still played with him. If only she needed him again.' },
    { q: 'What do you hope happens to the old toys at the end?', h: 'I hope they …', r: 'I hope they find a new child who loves them.' }
  ],
  paradas: [
    { k: 'ANDY’S ROOM', nome: 'Andy’s Room', dur: 'THE GOODBYE', x: 20, y: 28, img: 'quarto',
      h: 'If only he hadn’t grown up',
      t: 'For years, the toys belonged to Andy. Then Andy grew up and went to college. He gave them to a little girl, Bonnie. The toys were happy, but sometimes they still wish Andy were a kid again.',
      q: 'Is there a time in your life you wish you could go back to?', st: ['I wish I could go back to …', 'If only I had …'],
      ex: 'I wish I could go back to university.' },
    { k: 'BONNIE', nome: 'Bonnie', dur: 'THE NEW OWNER', x: 42, y: 54, img: 'capa',
      h: 'A girl who loved to play',
      t: 'Bonnie used to play with them every day: cowboys, space rangers, dinosaurs. Now she is older. The toys wish she still played with them like before.',
      q: 'What do you wish you had more time for these days?', st: ['I wish I had more time for …', 'I hope I can …'],
      ex: 'I wish I had more time for my guitar.' },
    { k: 'LILYPAD', nome: 'Lilypad', dur: 'THE TABLET', x: 64, y: 30, img: 'tablet',
      h: 'Screen time, not play time',
      t: 'A package arrives for Bonnie: Lilypad, a talking tablet. Lilypad does everything. Soon there is more screen time and less play time. Woody wishes that tablet would stop talking for one minute.',
      q: 'What do you wish a device in your life would stop doing?', st: ['I wish my … would stop …ing.', 'If only it didn’t …'],
      ex: 'I wish my phone would stop sending notifications.' },
    { k: 'THE ATTIC', nome: 'The Attic', dur: 'FORGOTTEN', x: 82, y: 56, img: 'sotao',
      h: 'A box of forgotten toys',
      t: 'Woody finds more and more abandoned toys every day, in boxes, in attics, in second-hand shops. Each one wishes somebody had kept them. If only their kids hadn’t grown up so fast.',
      q: 'What did you throw away that you wish you had kept?', st: ['I wish I had kept …', 'If only I hadn’t …'],
      ex: 'I wish I had kept my first skateboard.' },
    { k: 'THE QUESTION', nome: 'The Question', dur: 'TOYS OR TECH?', x: 48, y: 82, img: 'caixa',
      h: 'Does she still need them?',
      t: 'Someone says: toys are for play, but tech is for everything. So the old question comes back: does Bonnie still need them? The toys hope so. They wish they could ask her.',
      q: 'What do you hope children of the future will still do, even with screens?', st: ['I hope they still …', 'I wish more kids …'],
      ex: 'I hope they still play outside.' }
  ]
};
