/* OBSESSION (B1) · O MUNDO (cena I · Warm-up and Two Truths and a Lie)  19/10/2026 — formato mentira.
   No lugar do mapa: warm-up de conversa e depois duas verdades e uma mentira sobre os desejos das histórias antigas.
   B1, já com o second conditional. */
window.WL_MUNDO = {
  forma: 'mentira',
  cena: { rot: 'Warm-up and Two Truths and a Lie', t: 'Before the trailer: your wishes, then wishes with a price.', p: 'Answer three questions about your life. Then find the lie about the old stories of wishes.' },
  mundoRot: 'Two Truths and a Lie',
  guia: '<b>Warm-up and Two Truths and a Lie (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Two Truths and a Lie:</b> three rounds (the genie’s lamp, the monkey’s paw, the wish shop in the film). The student reads the three sentences, says which one is the lie and why, then taps. In the last round, they say two truths and one lie about their own life, and you guess.',
  foto: 'capa',
  aquece: [
    { img: 'lampada', q: 'If you found a lamp with a genie, what would your first wish be?', st: ['If I found one, I would wish for …'], filme: 'In the old stories, wishes always come with a trick.', mais: 'And your second wish?', ex: 'If I found one, I would wish for good health for my family.' },
    { img: 'salgueiro', q: 'If you were braver, what would you do tomorrow?', st: ['If I were braver, I would …'], filme: 'Bear is shy. If he were braver, he would talk to Nikki himself.', mais: 'What stops you?', ex: 'If I were braver, I would ask for a raise.' },
    { img: 'capa', q: 'If you could buy one wish today, but never cancel it, would you buy it?', st: ['Yes, I would, because …', 'No, I wouldn’t, because …'], filme: 'In this film, a wish has one rule: no cancellations.', mais: 'What would you wish for?', ex: 'No, I wouldn’t, because I would worry about the price every day.' }
  ],
  rodadas: [
    { img: 'lampada', sobre: 'The lamp', frases: ['In the old stories, a young man finds a lamp with a genie.', 'The genie gives him wishes.', 'In the old stories, wishes never have a price.'], mentira: 2, porque: 'In many old stories, wishes come with a trick. If they were free, the stories would be boring!' },
    { img: 'pata', sobre: 'The monkey’s paw', frases: ['The Monkey’s Paw is a horror story from 1902.', 'The family wishes for money.', 'The money comes, and everybody is happy.'], mentira: 2, porque: 'The money comes because their son dies at work. Nobody would be happy.' },
    { img: 'quarto', sobre: 'The wish shop', frases: ['Bear buys one wish in a strange little shop.', 'He wishes that Nikki loved him.', 'He can cancel the wish when he wants.'], mentira: 2, porque: 'There are no cancellations, for as long as he lives. If he had known, he wouldn’t have bought it.' }
  ],
  suaEx: 'One: If I won the lottery, I would buy a farm. Two: I have never seen snow. Three: I can speak Japanese. — Number three is the lie! If I could, I would watch anime without subtitles.',
  vida: [],
  antes: [
    { q: 'You know the old stories now. In the trailer, what would you do if you were Bear?', h: 'If I were Bear, I would …' },
    { q: 'If Nikki knew about the wish, what would she do?', h: 'If she knew, she would …' }
  ]
};
