/* ICE AGE: BOILING POINT · O MUNDO (cena I · Warm-up and Two Truths and a Lie)  19/10/2026 — formato mentira.
   No lugar do mapa: warm-up de conversa e depois duas verdades e uma mentira sobre a turma do gelo.
   A1, já com it’s hot / I’m cold / too + adjetivo. */
window.WL_MUNDO = {
  forma: 'mentira',
  cena: { rot: 'Warm-up and Two Truths and a Lie', t: 'Before the teaser: hot and cold, then a world of ice.', p: 'Answer three questions about your life. Then find the lie about the animals.' },
  mundoRot: 'Two Truths and a Lie',
  guia: '<b>Warm-up and Two Truths and a Lie (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). A1: short answers are fine. <b>2 · Two Truths and a Lie:</b> three rounds about the animals (Manny, Scrat, the lost world). The student reads the three sentences, says which one is the lie, then taps. In the last round, they say two truths and one lie about themselves, and you guess.',
  foto: 'capa',
  aquece: [
    { img: 'gelo', q: 'Do you like cold days or hot days?', st: ['I like … days, because …'], filme: 'In this film, the world is ice and snow. It is very cold.', mais: 'Is it hot or cold today?', ex: 'I like cold days, because I am happy under a blanket. Today it is hot!' },
    { img: 'selva', q: 'Where is it too hot for you?', st: ['It is too hot in …'], filme: 'Under the ice, there is a hot jungle with dinosaurs.', mais: 'What do you do there?', ex: 'It is too hot in my kitchen in summer. I open all the windows.' },
    { img: 'bolota', q: 'What is one thing you always want?', st: ['I always want …'], filme: 'Scrat, a little squirrel, always wants his acorn.', mais: 'When do you want it?', ex: 'I always want coffee. I want it every morning!' }
  ],
  rodadas: [
    { img: 'rebanho', sobre: 'Manny and Sid', frases: ['Manny is a big mammoth.', 'Manny is very fast.', 'Sid talks too much.'], mentira: 1, porque: 'Manny is big and slow. He is too big to run fast!' },
    { img: 'bolota', sobre: 'Scrat', frases: ['Scrat is a little squirrel.', 'Scrat has one acorn.', 'Scrat doesn’t like acorns.'], mentira: 2, porque: 'Scrat loves his acorn! It is his favorite thing in the world.' },
    { img: 'lava', sobre: 'Boiling Point', frases: ['In the new film, a volcano explodes.', 'The ice breaks.', 'In the lost world, it is very cold.'], mentira: 2, porque: 'It is very hot! There is lava everywhere. It is too hot for a mammoth.' }
  ],
  suaEx: 'One: I am cold now. Two: I have a cat. Three: I can ski. — Number three is the lie! It is too cold for me.',
  vida: [],
  antes: [
    { q: 'You know the herd now. In the teaser, is it too hot or too cold for Manny? Guess.', h: 'I think it is too … for him.' },
    { q: 'Sid, Manny or Diego: who has a big problem in the lava world?', h: 'I think … because he is too …' }
  ]
};
