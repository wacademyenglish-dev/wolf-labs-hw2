/* DEMON SLAYER · O MUNDO (cena I · Warm-up and Put It in Order)  19/10/2026 — formato ordem.
   No lugar do mapa: warm-up de conversa e depois quatro momentos da história do Tanjiro embaralhados.
   A2, já com must / mustn’t / have to / don’t have to / had to. */
window.WL_MUNDO = {
  forma: 'ordem',
  cena: { rot: 'Warm-up and Put It in Order', t: 'Before the trailer: your rules, then a boy who had to become a slayer.', p: 'Answer three questions about your life. Then put four moments of Tanjiro’s story in order and tell it.' },
  mundoRot: 'Put It in Order',
  guia: '<b>Warm-up and Put It in Order (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the anime under the photo). Let them talk; A2: short answers are fine. <b>2 · Put It in Order:</b> four cards of Tanjiro’s story, shuffled. The student taps them in order (“First… then…”); then the cards show the real order, and the student tells the story with had to / must.',
  foto: 'capa',
  aquece: [
    { img: 'casa', q: 'When you were young, did you have to help at home? What did you have to do?', st: ['I had to …', 'I didn’t have to …'], filme: 'In this anime, Tanjiro’s father died, so he had to work.', mais: 'Did you like it?', ex: 'I had to wash the dishes every night. I hated it!' },
    { img: 'caixa', q: 'What is one thing you mustn’t forget when you leave home?', st: ['I mustn’t forget …'], filme: 'Tanjiro carries his sister in a box on his back. He must protect her.', mais: 'What happens if you forget it?', ex: 'I mustn’t forget my keys. Last week I had to wait two hours outside!' },
    { img: 'espada', q: 'What is a rule at your job or school that people must never break?', st: ['At my …, people must never …'], filme: 'Every slayer gets a special sword that changes color.', mais: 'What happens if somebody breaks it?', ex: 'At my school, people must never use phones in exams.' }
  ],
  cartas: [
    { img: 'casa', t: 'Tanjiro lives on a snowy mountain. His father died, so he has to work.' },
    { img: 'caixa', t: 'A demon attacks his family. His sister Nezuko becomes a demon, but she is still good.' },
    { img: 'treino', t: 'An old slayer trains him. For two years, he has to practice every day.' },
    { img: 'glicinias', t: 'To join the Corps, he must stay alive for seven days on a mountain of demons.' }
  ],
  embaralha: [2, 0, 3, 1],
  contaEx: 'First, Tanjiro had to work for his family. Then a demon attacked, and his sister became a demon. After that, he had to train for two years. In the end, he had to stay alive for seven days.',
  vida: [],
  antes: [
    { q: 'You know Nezuko now. In the trailer, what mustn’t she do? Guess.', h: 'She mustn’t … / She has to …' },
    { q: 'What must Tanjiro do to protect his sister?', h: 'He must … He doesn’t have to …' }
  ]
};
