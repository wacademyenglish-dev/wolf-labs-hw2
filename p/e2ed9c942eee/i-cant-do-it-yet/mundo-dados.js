/* NARUTO SHIPPUDEN · O MUNDO (cena I · Warm-up and Put It in Order)  19/10/2026 — formato ordem.
   No lugar do mapa: warm-up de conversa e depois quatro momentos da história do Naruto embaralhados.
   A1, já com can / can’t … yet. */
window.WL_MUNDO = {
  forma: 'ordem',
  cena: { rot: 'Warm-up and Put It in Order', t: 'Before the trailer: what you can do, then Naruto’s story.', p: 'Answer three questions about you. Then put four moments of Naruto’s story in order and tell it.' },
  mundoRot: 'Put It in Order',
  guia: '<b>Warm-up and Put It in Order (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the anime under the photo). A1: short answers are fine. <b>2 · Put It in Order:</b> four cards of Naruto’s story, shuffled. The student taps them in order (“First… then…”); then the cards show the real order, and the student tells the story with can / can’t.',
  foto: 'capa',
  aquece: [
    { img: 'vila', q: 'Can you run fast? What sport can you play?', st: ['Yes, I can. / No, I can’t.', 'I can play …'], filme: 'In this anime, many people in the village are ninjas.', mais: 'Can you swim?', ex: 'No, I can’t run fast. I can play volleyball.' },
    { img: 'rolo', q: 'What do you practice every day?', st: ['I practice … every day.'], filme: 'Naruto trains every day for two and a half years.', mais: 'Can you do it well now?', ex: 'I practice the guitar every day. I can play three songs now.' },
    { img: 'capa', q: 'What is your big dream? Can you do it now?', st: ['My dream is …', 'I can’t … yet.'], filme: 'Naruto wants to be the leader of his village. He isn’t… yet.', mais: 'What do you need?', ex: 'My dream is to live in another country. I can’t do it yet, but I can save money.' }
  ],
  cartas: [
    { img: 'academia', t: 'At ninja school, Naruto can’t do a simple trick. The other kids laugh.' },
    { img: 'treino', t: 'He is in Team 7. Sasuke can do everything. Naruto can’t.' },
    { img: 'rolo', t: 'He leaves the village with a great ninja and trains every day.' },
    { img: 'capa', t: 'He comes home. He can do amazing things now, but he isn’t the leader… yet.' }
  ],
  embaralha: [2, 0, 3, 1],
  contaEx: 'First, Naruto can’t do a simple trick. Then he is in a team, and Sasuke can do everything. After that, he trains every day. In the end, he can do amazing things.',
  vida: [],
  antes: [
    { q: 'Naruto can’t do a simple trick at school. After two years, what can he do? Guess.', h: 'I think he can … / He can’t … yet.' },
    { q: 'What can you do now? What can’t you do yet?', h: 'Now I can … I can’t … yet.' }
  ]
};
