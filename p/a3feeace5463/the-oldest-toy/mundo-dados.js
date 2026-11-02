/* TOY STORY 5 · O MUNDO (cena I · Warm-up and The Toy Box)  19/10/2026 — formato mala (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois os brinquedos, um por vez, de 1995 até o tablet.
   A2, já com os superlativos (the oldest, the funniest, the most modern). */
window.WL_MUNDO = {
  forma: 'mala',
  cena: { rot: 'Warm-up and The Toy Box', t: 'Before the trailer: your oldest things, then thirty years of toys.', p: 'Answer three questions about your life. Then open the toy box one thing at a time and compare them.' },
  mundoRot: 'The Toy Box',
  guia: '<b>Warm-up and The Toy Box (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Toy Box:</b> five things come out of the box, one at a time: Andy’s room, the toys, the box for Bonnie, Forky, and the new tablet. With each, the student answers a short question with a superlative (the oldest, the funniest, the most modern). At the end, they say which toy is the most important and why.',
  foto: 'capa',
  aquece: [
    { img: 'quarto', q: 'What is the oldest thing you have? Who gave it to you?', st: ['The oldest thing I have is …', 'My … gave it to me.'], filme: 'The first Toy Story was in 1995. The toys are thirty years old now!', mais: 'Do you still use it?', ex: 'The oldest thing I have is a teddy bear. My grandmother gave it to me.' },
    { img: 'brinquedos', q: 'What was the best toy you had as a child?', st: ['The best toy I had was …', 'I played with it …'], filme: 'Woody was Andy’s favorite toy.', mais: 'Where is it now?', ex: 'The best toy I had was a red bike. I rode it every day.' },
    { img: 'brecho', q: 'What is the most useful thing you have? Is it new or old?', st: ['The most useful thing I have is …', 'It’s new / old.'], filme: 'In the new film, a tablet arrives: the most modern toy in the house.', mais: 'Could you live without it?', ex: 'The most useful thing I have is my phone. It’s new, and I can’t live without it!' }
  ],
  itens: [
    { img: 'quarto', nome: 'Andy’s room', q: 'This is Andy’s room in 1995. What is the oldest toy here?', ex: 'Woody is the oldest toy. He is a cowboy.' },
    { img: 'brinquedos', nome: 'the toys', q: 'Woody, Buzz, Jessie: who is the bravest? Who is the funniest?', ex: 'Buzz is the bravest, and Rex is the funniest!' },
    { img: 'caixa', nome: 'the box for Bonnie', q: 'Andy grew up and gave his toys to Bonnie. Is it the saddest moment or the happiest?', ex: 'It’s the saddest moment for Andy, but the happiest for Bonnie.' },
    { img: 'garfo', nome: 'Forky', q: 'Bonnie made a toy with a spork. Is he the strangest toy in the room?', ex: 'Yes, he is the strangest toy, but he is very funny.' },
    { img: 'brecho', nome: 'the tablet', q: 'A tablet arrives. Is she the most modern toy? Is she the best?', ex: 'She is the most modern toy, but I think she isn’t the best.' }
  ],
  revelaRot: 'Whose box is it?',
  revela: 'It is Bonnie’s toy box, with toys from 1995 to today. In Toy Story 5, a tablet called Lilypad arrives, and the old toys feel forgotten.',
  conta: 'Which toy is the most important in the box? Why?',
  contaEx: 'Woody is the most important toy, because he is the oldest and the kindest friend.',
  vida: [],
  antes: [
    { q: 'You opened the toy box. In the trailer, who is the newest toy in the house? Guess.', h: 'I think the newest toy is …' },
    { q: 'Woody, Buzz or Jessie: who is the bravest? Why?', h: 'I think … is the bravest, because …' }
  ]
};
