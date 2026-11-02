/* OBSESSION (B2, The Rewind) · O MUNDO (cena I · Warm-up and Put It in Order)  19/10/2026 — formato ordem.
   No lugar do mapa: warm-up de conversa e depois quatro momentos da noite do desejo embaralhados.
   B2, já com should have / could have / couldn’t have / needn’t have. */
window.WL_MUNDO = {
  forma: 'ordem',
  cena: { rot: 'Warm-up and Put It in Order', t: 'Before the trailer: what you should have done, then one wish and no way back.', p: 'Answer three questions about your life. Then put four moments of Bear’s story in order and say what he should have done.' },
  mundoRot: 'Put It in Order',
  guia: '<b>Warm-up and Put It in Order (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Put It in Order:</b> four moments of Bear’s story, shuffled. The student taps them in order (“First… then…”); then the cards show the real order, and the student retells it, judging every step (he should have…, he could have…).',
  foto: 'capa',
  aquece: [
    { img: 'quarto', q: 'What is something you should have said to someone, but never did?', st: ['I should have told …', 'I could have …'], filme: 'In this film, Bear has loved his friend for years. He never told her.', mais: 'Can you still say it?', ex: 'I should have told my grandfather that he was my hero.' },
    { img: 'loja', q: 'Have you ever bought something late at night that you needn’t have bought?', st: ['I once bought …', 'I needn’t have …'], filme: 'One night, Bear goes into a strange little shop.', mais: 'Did you use it?', ex: 'I once bought a juicer at 2 AM online. I needn’t have bought it: I used it once.' },
    { img: 'telefone', q: 'What is a decision you couldn’t have changed, even if you had wanted to?', st: ['I couldn’t have changed …'], filme: 'Bear calls the shop to cancel his wish. They don’t do that.', mais: 'How did you feel?', ex: 'I couldn’t have changed my flight. It was the last one.' }
  ],
  cartas: [
    { img: 'quarto', t: 'Bear loves his friend Nikki, but for years he is too shy to tell her.' },
    { img: 'loja', t: 'One night, he goes into a strange shop. He could have walked out. He didn’t.' },
    { img: 'galho', t: 'He breaks a small branch and wishes that Nikki loved him more than anyone.' },
    { img: 'telefone', t: 'Nikki loves him too much. He calls the shop to cancel. No refunds.' }
  ],
  embaralha: [2, 0, 3, 1],
  contaEx: 'First, Bear was too shy to tell Nikki. He should have talked to her. Then he went into the shop: he could have walked out. After that, he made the wish. In the end, he couldn’t have cancelled it.',
  vida: [],
  antes: [
    { q: 'You know Bear’s wish now. In the trailer, what should he have done instead? Guess.', h: 'He should have … / He shouldn’t have …' },
    { q: 'Could he have known it was dangerous?', h: 'He could have … / He couldn’t have known, because …' }
  ]
};
