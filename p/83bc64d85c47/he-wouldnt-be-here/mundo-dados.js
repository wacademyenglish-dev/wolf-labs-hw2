/* THE BOYS · O MUNDO (cena I · Warm-up and Pick a Side)  19/10/2026 — formato lado.
   No lugar do mapa: warm-up de conversa e depois os dois lados: a Vought e seus heróis × os Boys.
   B2, já com mixed conditionals. */
window.WL_MUNDO = {
  forma: 'lado',
  cena: { rot: 'Warm-up and Pick a Side', t: 'Before the trailer: the moments that changed you, then heroes for sale.', p: 'Answer three questions about your life. Then pick a side and defend it.' },
  mundoRot: 'Pick a Side',
  guia: '<b>Warm-up and Pick a Side (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Pick a Side:</b> Vought and its heroes, or the Boys. The student taps one side and defends it for thirty seconds. Then tap “The teacher pushes back”: read the counter-argument in your voice and let them answer. Twice. Push for mixed conditionals (if they hadn’t…, they would…).',
  q: 'Who would you stand with: the famous heroes who keep people safe, or the small team who wants to expose them?',
  aquece: [
    { img: 'rua', q: 'What is one small moment that changed the direction of your life?', st: ['If I hadn’t …, I wouldn’t … now.'], filme: 'In this show, one second on a street changes Hughie’s life forever.', mais: 'Are you happy it happened?', ex: 'If I hadn’t missed my bus that day, I wouldn’t be married to the man I met at the stop!' },
    { img: 'bar', q: 'Who convinced you to do something you would never have done alone?', st: ['My … convinced me to …', 'If I were braver, I would have …'], filme: 'A dangerous man, Butcher, convinces Hughie to join his team.', mais: 'Would you do it again?', ex: 'My sister convinced me to go skydiving. If I were braver, I would have gone alone.' },
    { img: 'sala', q: 'If you had a PR team, what story would they tell about you?', st: ['They would say that I …'], filme: 'Vought’s PR team decides what people think of each hero.', mais: 'And what is the true story?', ex: 'They would say that I run every morning. The truth is I run once a month!' }
  ],
  lados: [
    { img: 'palco', nome: 'Vought and the Seven', t: 'The most famous heroes in the world. They save people on camera, and the public loves them.' },
    { img: 'bar', nome: 'The Boys', t: 'A small, dangerous team led by Butcher. They want the world to know the truth about the heroes.' }
  ],
  ex: [
    'I’d stand with the Seven. If they weren’t there, the world would have had many more disasters.',
    'I’d stand with the Boys. If people knew the truth, they would have stopped loving the heroes years ago.'
  ],
  contra: [
    ['A hero killed Hughie’s girlfriend and called it an accident. If they were good, wouldn’t they have said sorry?', 'Vought controls every story. If the cameras weren’t on, would the heroes still be nice?'],
    ['Butcher is violent too. If he were a good man, would he have a team like this?', 'Without the heroes, who would stop the real villains? If the Boys won, the city might be in danger.']
  ],
  depois: 'Watch the trailer. Then tell me: if you had seen this first, would you have chosen the same side?',
  vida: [],
  antes: [
    { q: 'You picked a side. In the trailer, what would be different if Robin were still alive? Guess.', h: 'If Robin hadn’t died, Hughie would …' },
    { q: 'If people knew the truth about the heroes, would they still love them?', h: 'If people knew …, they would / wouldn’t …' }
  ]
};
