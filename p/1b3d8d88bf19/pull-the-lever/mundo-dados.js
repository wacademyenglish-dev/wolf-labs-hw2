/* THE GOOD PLACE · O MUNDO (cena I · Warm-up and Two Truths and a Lie)  19/10/2026 — formato mentira.
   No lugar do mapa: warm-up de conversa e depois duas verdades e uma mentira sobre o mundo da série.
   A2, já com have to / don’t have to / had to. */
window.WL_MUNDO = {
  forma: 'mentira',
  cena: { rot: 'Warm-up and Two Truths and a Lie', t: 'Before the clip: what you have to do, then a woman in the wrong place.', p: 'Answer three questions about your life. Then find the lie about the Good Place.' },
  mundoRot: 'Two Truths and a Lie',
  guia: '<b>Warm-up and Two Truths and a Lie (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). Let them talk; A2: short answers are fine. <b>2 · Two Truths and a Lie:</b> three rounds about the show (Eleanor, the points, Chidi). The student reads the three sentences, says which one is the lie and why, then taps. In the last round, they say two truths and one lie about their own life, and you guess.',
  foto: 'capa',
  aquece: [
    { img: 'estacionamento', q: 'What did you have to do yesterday that you didn’t want to do?', st: ['Yesterday, I had to …'], filme: 'In this show, Eleanor wasn’t nice. She never said sorry.', mais: 'Who made you do it?', ex: 'Yesterday, I had to clean the bathroom. Nobody else wanted to!' },
    { img: 'bairro', q: 'In your perfect town, what don’t you have to do?', st: ['In my perfect town, I don’t have to …'], filme: 'After she dies, Eleanor wakes up in a perfect little town.', mais: 'And what do you have to do there?', ex: 'In my perfect town, I don’t have to drive. I can walk everywhere.' },
    { img: 'professor', q: 'What is a decision that is hard for you?', st: ['It’s hard for me to decide …', 'I have to …'], filme: 'Chidi is a teacher who can never decide anything.', mais: 'Who helps you decide?', ex: 'It’s hard for me to decide what to watch. I spend thirty minutes choosing!' }
  ],
  rodadas: [
    { img: 'estacionamento', sobre: 'Eleanor', frases: ['Eleanor lied a lot when she was alive.', 'Eleanor had to help old people every day.', 'Eleanor died in a silly accident.'], mentira: 1, porque: 'Eleanor never helped anybody! She didn’t have to, and she didn’t want to.' },
    { img: 'sala', sobre: 'The points', frases: ['After you die, somebody counts your points.', 'Helping a friend gives you plus points.', 'You don’t have to be good: everybody goes to the Good Place.'], mentira: 2, porque: 'Not everybody goes! You have to be very, very good to go to the Good Place.' },
    { img: 'professor', sobre: 'Chidi', frases: ['Chidi has to teach Eleanor to be good.', 'Chidi decides everything very fast.', 'Chidi was a teacher.'], mentira: 1, porque: 'Chidi can never decide anything. Choosing a muffin takes him an hour!' }
  ],
  suaEx: 'One: I have to wake up at five. Two: I don’t have to work on Saturdays. Three: I had to sing at my sister’s wedding. — Number three is the lie!',
  vida: [],
  antes: [
    { q: 'You know Chidi now. In the clip, what does he have to decide? Guess.', h: 'I think he has to … / He doesn’t have to …' },
    { q: 'A train is coming. Do you have to choose, or can you do nothing?', h: 'I think you have to … / You don’t have to …' }
  ]
};
