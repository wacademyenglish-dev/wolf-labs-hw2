/* THE ODYSSEY (A1, The House) · O MUNDO (cena I · Warm-up and Put It in Order)  19/10/2026 — formato ordem.
   No lugar do mapa: warm-up de conversa e depois quatro momentos da viagem de Odisseu embaralhados.
   A1, já com there is / there are e his / her / their. */
window.WL_MUNDO = {
  forma: 'ordem',
  cena: { rot: 'Warm-up and Put It in Order', t: 'Before the trailer: your house, then twenty years away from home.', p: 'Answer three questions about you. Then put four moments of the story in order and tell it.' },
  mundoRot: 'Put It in Order',
  guia: '<b>Warm-up and Put It in Order (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). A1: short answers are fine. <b>2 · Put It in Order:</b> four cards of Odysseus’s story, shuffled. The student taps them in order (“First… then…”); then the cards show the real order, and the student tells the story with there is / there are.',
  foto: 'capa',
  aquece: [
    { img: 'cena6-portas', q: 'What is there in your house? What is your favorite room?', st: ['In my house, there is / there are …', 'My favorite room is …'], filme: 'In this story, a king is far away from his house for twenty years.', mais: 'Why do you like it?', ex: 'In my house, there is a small garden. My favorite room is the kitchen.' },
    { img: 'mar', q: 'What is the longest trip in your life? Was there a problem?', st: ['My longest trip was to …', 'There was / wasn’t …'], filme: 'Odysseus wants to go home, but the sea is dangerous.', mais: 'Who was with you?', ex: 'My longest trip was to Portugal. There was a problem with my bag!' },
    { img: 'cena3-cao', q: 'Is there a pet in your life? What is its name?', st: ['Yes, there is a … Its name is …', 'No, there isn’t.'], filme: 'After twenty years, only his old dog knows him.', mais: 'How old is it?', ex: 'Yes, there is a cat. Her name is Mel. She is five.' }
  ],
  cartas: [
    { img: 'troia', t: 'Odysseus, the king of Ithaca, goes to a war in Troy. The war is ten years long.' },
    { img: 'mar', t: 'He wants to go home, but the sea is dangerous. There is a giant with one eye.' },
    { img: 'cena6-portas', t: 'At his house, there are many men. They eat his food. His wife waits.' },
    { img: 'cena3-cao', t: 'After twenty years, he comes home. Nobody knows him. Only his old dog.' }
  ],
  embaralha: [2, 0, 3, 1],
  contaEx: 'First, Odysseus goes to the war in Troy. Then he is on the sea, and there is a giant. After that, there are many men in his house. In the end, he comes home, and his dog knows him.',
  vida: [],
  antes: [
    { q: 'You know the story now. In the trailer, is there a ship? Is there a monster? Guess.', h: 'I think there is … / there are …' },
    { q: 'Odysseus comes home after twenty years. Who is at the door?', h: 'I think his … is at the door.' }
  ]
};
