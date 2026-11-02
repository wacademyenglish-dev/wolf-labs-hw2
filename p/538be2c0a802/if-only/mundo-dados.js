/* TOY STORY 5 (B2) · O MUNDO (cena I · Warm-up and The Attic Box)  19/10/2026 — formato mala (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois a caixa do sótão, um objeto por vez, cada um com um desejo.
   B2, já com wish / if only (wish + passado, wish + had + particípio, wish + would). */
window.WL_MUNDO = {
  forma: 'mala',
  cena: { rot: 'Warm-up and The Attic Box', t: 'Before the trailer: your wishes, then the toys’ wishes.', p: 'Answer three questions about your life. Then open the attic box one thing at a time and say what each toy wishes.' },
  mundoRot: 'The Attic Box',
  guia: '<b>Warm-up and The Attic Box (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Attic Box:</b> five things come out of a box in the attic, one at a time: Andy’s room, Bonnie, the tablet, the attic, the last question. With each, the student says what the toys wish (they wish she played…, if only she hadn’t…, they wish the tablet would…). At the end, they say what they hope happens to the toys.',
  foto: 'sotao',
  aquece: [
    { img: 'quarto', q: 'Is there a time in your life you wish you could go back to?', st: ['I wish I could go back to …', 'If only …'], filme: 'The toys sometimes wish Andy were a kid again.', mais: 'What would you do differently?', ex: 'I wish I could go back to university. If only I had studied a little more!' },
    { img: 'tablet', q: 'What do you wish a device in your life would stop doing?', st: ['I wish my … would stop …'], filme: 'Woody wishes the new tablet would stop talking for one minute.', mais: 'Could you live without it for a week?', ex: 'I wish my phone would stop sending notifications at night.' },
    { img: 'sotao', q: 'What did you throw away that you wish you had kept?', st: ['I wish I had kept …', 'If only I hadn’t …'], filme: 'In attics and boxes, old toys wish somebody had kept them.', mais: 'Why did you throw it away?', ex: 'I wish I had kept my first skateboard. If only I hadn’t sold it!' }
  ],
  itens: [
    { img: 'quarto', nome: 'Andy’s room', q: 'Andy grew up and went to college. What do the toys wish?', ex: 'They wish Andy were still a kid. If only he hadn’t grown up so fast.' },
    { img: 'capa', nome: 'Bonnie', q: 'Bonnie is older now. What do the toys wish she did?', ex: 'They wish she still played with them every day.' },
    { img: 'tablet', nome: 'the tablet', q: 'A talking tablet arrives and does everything. What does Woody wish?', ex: 'He wishes that tablet would stop talking for one minute!' },
    { img: 'sotao', nome: 'the attic', q: 'Abandoned toys in boxes. What do they wish?', ex: 'They wish somebody had kept them. If only their kids hadn’t forgotten them.' },
    { img: 'caixa', nome: 'the last question', q: '“Toys are for play, but tech is for everything.” Does Bonnie still need them? What do the toys hope?', ex: 'They hope she still needs them. They wish they could ask her.' }
  ],
  revelaRot: 'Whose box is it?',
  revela: 'It is a box of old toys in an attic. In Toy Story 5, a tablet called Lilypad arrives at Bonnie’s house, and the toys wonder if a child still needs them.',
  conta: 'What do you hope happens to the old toys at the end? And what do you wish for them?',
  contaEx: 'I hope Bonnie remembers them. I wish she would put the tablet down and play outside with Woody.',
  vida: [],
  antes: [
    { q: 'You opened the attic box. In the trailer, what does Woody wish? Guess.', h: 'He wishes Bonnie … / If only …' },
    { q: 'What do you hope happens to the old toys at the end?', h: 'I hope they …' }
  ]
};
