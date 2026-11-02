/* DARK MATTER · O MUNDO (cena I · Warm-up and Two Truths and a Lie)  19/10/2026 — formato mentira.
   No lugar do mapa: warm-up de conversa e depois duas verdades e uma mentira sobre a noite em que tudo mudou.
   B2, já com o futuro visto do passado (was going to, was about to, was supposed to). */
window.WL_MUNDO = {
  forma: 'mentira',
  cena: { rot: 'Warm-up and Two Truths and a Lie', t: 'Before the trailer: the lives you almost had, then one walk home.', p: 'Answer three questions about your life. Then find the lie about Jason’s night.' },
  mundoRot: 'Two Truths and a Lie',
  guia: '<b>Warm-up and Two Truths and a Lie (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Two Truths and a Lie:</b> three rounds about Jason (his life, the night at the bar, the box). The student reads the three sentences, says which one is the lie and why, then taps. In the last round, they say two truths and one lie about plans they had, and you guess.',
  foto: 'capa',
  aquece: [
    { img: 'capa', q: 'What were you going to study or be when you were fifteen?', st: ['I was going to be …', 'but then …'], filme: 'In this show, Jason was going to be a great scientist.', mais: 'What happened?', ex: 'I was going to be a pilot, but then I discovered I hate flying.' },
    { img: 'cozinha', q: 'What did you give up to have the life you have now?', st: ['I was going to …, but I chose …'], filme: 'Jason chose his family instead of his career.', mais: 'Do you ever think about the other choice?', ex: 'I was going to live in Lisbon, but I chose to stay with my parents.' },
    { img: 'beco', q: 'If a stranger asked you “Are you happy with your life?”, what would you say?', st: ['I would say …'], filme: 'On the way home, a masked man asks Jason this question.', mais: 'And what would you change?', ex: 'I would say “mostly yes”. I would change my job.' }
  ],
  rodadas: [
    { img: 'cozinha', sobre: 'Jason’s life', frases: ['Jason teaches physics in Chicago.', 'Jason was going to be a famous scientist.', 'Jason was supposed to marry a famous actress.'], mentira: 2, porque: 'He married Daniela, and they have a son. He chose his family instead of being famous.' },
    { img: 'bar', sobre: 'The bar', frases: ['A friend won the prize Jason was supposed to win.', 'Jason was supposed to be home in twenty minutes.', 'Jason stayed at the bar until morning.'], mentira: 2, porque: 'He left early. He was going home when a masked man stopped him.' },
    { img: 'caixa', sobre: 'The box', frases: ['Jason wakes up in a world where he never married Daniela.', 'In that world, he is a famous scientist.', 'Behind every door, there is the same life.'], mentira: 2, porque: 'Behind every door, there is a different life, a life he could have lived.' }
  ],
  suaEx: 'One: I was going to be a doctor. Two: I was about to move to Canada in 2019. Three: I was supposed to sing at my sister’s wedding. — Number two is the lie!',
  vida: [],
  antes: [
    { q: 'You know Jason now. In the trailer, what was he about to do when everything changed?', h: 'He was about to … when …' },
    { q: 'Behind the doors of the box: which life was he supposed to have?', h: 'He was supposed to … / He was going to …' }
  ]
};
