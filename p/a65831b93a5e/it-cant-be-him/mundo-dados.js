/* THE BATMAN · O MUNDO (cena I · What’s in the Bag?)  19/10/2026 — formato C (kit/mundo.js).
   No lugar do mapa: cinco pistas do caso, uma por vez; a cada pista o aluno deduz com must / might / can’t be.
   B1, modais de dedução. */
window.WL_MUNDO = {
  forma: 'mala',
  cena: { rot: 'Warm-up and The Evidence', t: 'Before the trailer: you, then five pieces of evidence.', p: 'Answer three questions about your life. Then open the evidence one piece at a time and say what it must, might or can’t be.' },
  mundoRot: 'The Evidence',
  guia: '<b>Warm-up and The Evidence Bag (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Evidence Bag:</b> Five pieces of evidence open one at a time: a card with a question mark, a desk full of notes, a board with red strings, a police station, a rainy street. With each one, the student deduces out loud (it must be…, it might be…, it can’t be…) and changes their story if they need to. At the end, a short text says whose case it is, and the student tells the whole story. Don’t correct the modal yet: let them use it, the rule comes later.',
  foto: 'capa',
  itens: [
    { img: 'cartao', nome: 'a card in the rain', q: 'Somebody left this card on the street. What must it be? Who might leave a card like this?', ex: 'It must be a message. It might be from a criminal who likes games.' },
    { img: 'mesa', nome: 'a desk at night', q: 'Notes, photos and cold coffee. Whose desk might this be?', ex: 'It might be a detective’s desk. He must work all night: the coffee is cold.' },
    { img: 'mapa', nome: 'a board with red strings', q: 'Red strings between photos. What could this person be looking for?', ex: 'He could be looking for a killer. The strings must connect the crimes.' },
    { img: 'delegacia', nome: 'the police station', q: 'The police are part of the story. Are they the good guys? What might be wrong?', ex: 'They might not be the good guys. Some of the police could be working for the criminal.' },
    { img: 'capa', nome: 'a city in the rain', q: 'Last piece: the city. What must life be like here?', ex: 'It must be dangerous. It can’t be a happy city: it’s always dark and wet.' }
  ],
  revelaRot: 'Whose case is it?',
  revela: 'It’s the case of the Batman, in Gotham City. Somebody is killing the powerful people who run the city, and he leaves a card with a riddle for the Batman at every crime scene. The killer calls himself the Riddler. Nobody knows who he is.',
  conta: 'Tell the whole story with the five pieces of evidence. Who must the Riddler be?',
  contaEx: 'There is a killer in a rainy city. He leaves cards for a detective. The detective must be the Batman. The killer can’t be a normal man: he must be very intelligent.',
  aquece: [
    { img: 'gotham', q: 'What is the weather like where you are today? What must it be like in your favorite city?', st: ['It must be …', 'It might be …'], filme: 'In this film, it rains in Gotham every day.', mais: 'Do you like rainy days? Why?', ex: 'It’s sunny here. In Lisbon, it might be cold now.' },
    { img: 'cartao', q: 'You find a strange note on your door. Who could it be from?', st: ['It could be from …', 'It can’t be from …'], filme: 'A killer leaves a card for the Batman at every crime scene.', mais: 'What would you do with it?', ex: 'It could be from my neighbor. It can’t be from my mother: she always calls.' },
    { img: 'salao', q: 'Which film villain surprised you the most when you found out who it was?', st: ['I thought it might be …', 'It couldn’t be … but it was!'], filme: 'Nobody knows who the Riddler is.', mais: 'Do you usually guess the end of a film?', ex: 'I thought it might be the father, but it was the best friend!' }
  ],
  vida: [],
  antes: [
    { q: 'You saw the evidence. In the trailer, who might the Riddler be? Guess.', h: 'It might be … / It can’t be …' },
    { q: 'Why does the Riddler leave cards for the Batman? What must he want?', h: 'He must want … / He might …' }
  ]
};
