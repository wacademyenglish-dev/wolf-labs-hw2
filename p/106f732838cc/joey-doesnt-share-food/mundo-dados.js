/* FRIENDS · O MUNDO (cena I · Two Truths and a Lie)  19/10/2026 — formato E (kit/mundo.js).
   No lugar do mapa: três rodadas de duas verdades e uma mentira sobre os amigos; no fim, a vez do aluno.
   A2, já com should / shouldn’t. */
window.WL_MUNDO = {
  forma: 'mentira',
  cena: { rot: 'Warm-up and Two Truths and a Lie', t: 'Before the clip: you and your friends, then six friends in New York.', p: 'Answer three questions about your life. Then find the lie about the friends.' },
  mundoRot: 'Two Truths and a Lie',
  guia: '<b>Warm-up and Two Truths and a Lie (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Two Truths and a Lie:</b> Three rounds about Friends (Joey, Monica, the coffee house). The student reads the three sentences, says which one is the lie and why, then taps: the card turns and explains. In the last round the student tells two truths and one lie about their own life, and you guess. A2: short answers are fine (“Number two. He loves food!”).',
  foto: 'capa',
  rodadas: [
    { img: 'mesa', sobre: 'Joey', frases: ['Joey is an actor.', 'Joey never shares his food.', 'Joey hates sandwiches.'], mentira: 2, porque: 'Joey LOVES sandwiches. His friends should never touch his sandwich!' },
    { img: 'cozinha', sobre: 'Monica', frases: ['Monica is a chef.', 'Monica’s kitchen is always dirty.', 'Monica’s door is purple.'], mentira: 1, porque: 'Monica’s kitchen is always clean. She cleans it every day, and you shouldn’t touch anything!' },
    { img: 'capa', sobre: 'The coffee house', frases: ['The friends meet in a coffee house.', 'They always sit on a green couch.', 'The show started in 1994.'], mentira: 1, porque: 'The couch is orange, not green. And nobody else should sit there!' }
  ],
  suaEx: 'One: I have two cats. Two: I can cook lasagna. Three: I have been to Japan. — Number three is the lie! You should go one day.',
  aquece: [
    { img: 'mesa', q: 'Do you share your food with your friends? What food do you never share?', st: ['I share …', 'I never share …'], filme: 'Joey, one of the friends, never shares his food.', mais: 'Who in your family eats your food?', ex: 'I share pizza, but I never share my chocolate!' },
    { img: 'nyc', q: 'Where do you meet your friends: at home, in a café, or in a park?', st: ['We meet …', 'We should meet …'], filme: 'The six friends meet in the same coffee house every day.', mais: 'How often do you meet?', ex: 'We meet at my house on Fridays. We should meet more!' },
    { img: 'cozinha', q: 'Who is the best cook you know? What should everybody learn to cook?', st: ['The best cook is …', 'Everybody should …'], filme: 'Monica is a chef, and her kitchen is always clean.', mais: 'Can you cook? What?', ex: 'My grandmother is the best cook. Everybody should learn to make rice and beans.' }
  ],
  vida: [],
  antes: [
    { q: 'You know Joey now. In the clip, what should his friends never do? Guess.', h: 'They should never …' },
    { q: 'Somebody eats your food at work. What should you do?', h: 'You should … / You shouldn’t …' }
  ]
};
