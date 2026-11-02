/* SPY x FAMILY · O MUNDO (cena I · Warm-up and Two Truths and a Lie)  19/10/2026 — formato mentira.
   No lugar do mapa: warm-up de conversa e depois duas verdades e uma mentira sobre a família de mentira.
   A2, já com present simple × present continuous. */
window.WL_MUNDO = {
  forma: 'mentira',
  cena: { rot: 'Warm-up and Two Truths and a Lie', t: 'Before the trailer: your days, then a family full of secrets.', p: 'Answer three questions about your life. Then find the lie about the Forger family.' },
  mundoRot: 'Two Truths and a Lie',
  guia: '<b>Warm-up and Two Truths and a Lie (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the anime under the photo). Let them talk; A2: short answers are fine. <b>2 · Two Truths and a Lie:</b> three rounds about the family (Loid, Anya, Yor). The student reads the three sentences, says which one is the lie and why, then taps. In the last round, they say two truths and one lie about their own life, and you guess.',
  foto: 'capa',
  aquece: [
    { img: 'mesa', q: 'What do you do every day? And what are you doing differently this month?', st: ['Every day, I …', 'This month, I am …'], filme: 'In this anime, a father says he works at a hospital every day. It isn’t true.', mais: 'Do you like your routine?', ex: 'Every day, I take the bus. This month, I am walking to work.' },
    { img: 'escola', q: 'If you could read minds today, whose mind would you read?', st: ['I’d read …’s mind.'], filme: 'Anya, the little girl, can read minds.', mais: 'What do you think they are thinking right now?', ex: 'I’d read my boss’s mind. I think he is thinking about lunch!' },
    { img: 'cao', q: 'What is your pet, or a friend’s pet, doing right now? Guess!', st: ['I think my … is …ing.'], filme: 'The family’s big white dog can see the future.', mais: 'What does it usually do in the afternoon?', ex: 'I think my cat is sleeping on my bed. She usually sleeps all afternoon.' }
  ],
  rodadas: [
    { img: 'mesa', sobre: 'Loid', frases: ['Loid says he works at a hospital.', 'Loid is the best spy in his country.', 'Loid never tells lies.'], mentira: 2, porque: 'Loid tells lies every day! He says he is a doctor, but he is spying.' },
    { img: 'escola', sobre: 'Anya', frases: ['Anya loves peanuts.', 'Anya loves studying.', 'Anya can read minds.'], mentira: 1, porque: 'Anya hates studying. She is thinking about peanuts in every class!' },
    { img: 'prefeitura', sobre: 'Yor', frases: ['Yor works at City Hall.', 'Yor is a little shy.', 'Yor sleeps every night at nine.'], mentira: 2, porque: 'At night, Yor has another job: she is an assassin.' }
  ],
  suaEx: 'One: I wake up at six every day. Two: I am learning Japanese this year. Three: I have a dog. — Number two is the lie!',
  vida: [],
  antes: [
    { q: 'You know the family now. In the trailer, what is Loid really doing? Guess.', h: 'He says he works at …, but he is really …ing.' },
    { q: 'Anya reads minds. What is she probably thinking right now?', h: 'She is probably thinking: “…”' }
  ]
};
