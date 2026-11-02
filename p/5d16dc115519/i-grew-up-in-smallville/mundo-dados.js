/* SUPERMAN & LOIS (A2) · O MUNDO (cena I · Warm-up and Put It in Order)  19/10/2026 — formato ordem.
   No lugar do mapa: warm-up de conversa e depois quatro fotos do álbum do Clark embaralhadas.
   A2, já com o past simple (regulares e irregulares). */
window.WL_MUNDO = {
  forma: 'ordem',
  cena: { rot: 'Warm-up and Put It in Order', t: 'Before the trailer: your past, then Clark’s album.', p: 'Answer three questions about your life. Then put four photos of Clark’s life in order and tell his story.' },
  mundoRot: 'Put It in Order',
  guia: '<b>Warm-up and Put It in Order (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). Let them talk; A2: short answers are fine. <b>2 · Put It in Order:</b> four photos of Clark’s life, shuffled. The student taps them in order (“First… then…”); then the cards show the real order, and the student tells his story in the past.',
  foto: 'capa',
  aquece: [
    { img: 'queda', q: 'Where were you born? Did you grow up there?', st: ['I was born in …', 'I grew up in … / I didn’t grow up there.'], filme: 'In this show, a baby came to Earth from another planet.', mais: 'Did you like it there?', ex: 'I was born in Recife, but I didn’t grow up there. I grew up in Natal.' },
    { img: 'redacao', q: 'How did you meet your best friend or your partner?', st: ['I met … at …'], filme: 'Clark met Lois at a newspaper.', mais: 'What did you think of them at first?', ex: 'I met my best friend at university. At first, I thought she was very serious!' },
    { img: 'estrada', q: 'Did you ever go back to a place from your childhood? What was different?', st: ['I went back to …', 'It was …'], filme: 'Years later, the family went back to the old farm.', mais: 'How did you feel?', ex: 'I went back to my old school. Everything looked very small!' }
  ],
  cartas: [
    { img: 'queda', t: 'One night, a small ship fell in a field in Kansas. There was a baby inside.' },
    { img: 'celeiro', t: 'The Kents found the baby. Clark grew up on their farm, and he didn’t tell anybody he was strong.' },
    { img: 'metropole', t: 'Clark moved to Metropolis, got a job at a newspaper and became Superman.' },
    { img: 'redacao', t: 'He met Lois, they got married, and they had twin boys.' }
  ],
  embaralha: [2, 0, 3, 1],
  contaEx: 'First, a ship fell in a field with a baby inside. Then the Kents found him, and he grew up on a farm. After that, he moved to Metropolis. In the end, he met Lois and they had twins.',
  vida: [],
  antes: [
    { q: 'You know Clark’s past now. In the trailer, why did the family go back to the farm? Guess.', h: 'I think they went back because …' },
    { q: 'Did the boys know their father’s secret? What do you think?', h: 'I think they knew … / they didn’t know …' }
  ]
};
