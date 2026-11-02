/* BACKROOMS · O MUNDO (cena I · Warm-up and In the Dark)  19/10/2026 — formato escuro.
   No lugar do mapa: warm-up de conversa e depois os primeiros 14 segundos do trailer só no som
   (“I found something. In the store… The place.”). B1, já com o present perfect. */
window.WL_MUNDO = {
  forma: 'escuro',
  cena: { rot: 'Warm-up and In the Dark', t: 'Before the trailer: strange places you have been, then a voice in the dark.', p: 'Answer three questions about your life. Then close your eyes and listen to the start of the trailer.' },
  mundoRot: 'In the Dark',
  guia: '<b>Warm-up and In the Dark (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · In the Dark:</b> the screen is covered and only the sound of the first 14 seconds of the trailer plays (a man: “I found something. In the store… The place.”). The student says who is talking, where he is and how he sounds; then take off the cover. Horror without scares: nothing is on the screen.',
  foto: 'capa', ini: 0, fim: 14,
  aquece: [
    { img: 'foto', q: 'What is the strangest photo or video you have ever seen online?', st: ['The strangest thing I have seen is …'], filme: 'In 2019, a strange photo of an empty yellow room went online.', mais: 'Have you shown it to anybody?', ex: 'The strangest thing I have seen is a video of a cat opening a fridge.' },
    { img: 'corredor', q: 'Have you ever been lost in a building? How long were you lost?', st: ['I have been lost in …', 'I was lost for …'], filme: 'In the story, the yellow rooms go on forever.', mais: 'How did you find the way out?', ex: 'I have been lost in a huge hospital. I was lost for twenty minutes!' },
    { img: 'loja', q: 'Is there a place in your city that has always felt a bit strange to you?', st: ['… has always felt strange to me.'], filme: 'In the film, there is a small door behind a furniture store.', mais: 'Have you ever gone in?', ex: 'An old cinema downtown has always felt strange to me. I have never gone in.' }
  ],
  q: 'Close your eyes. Somebody has found something. Listen.',
  ouvir: [
    { q: 'Who is talking? How many people?', ops: ['one man', 'two people', 'a child', 'a group'], ex: 'Two people. A man has found something, and another person asks what it is.' },
    { q: 'Where has he been?', ops: ['in a store', 'in a hospital', 'at home', 'in a car'], ex: 'He has been in a store. He says he found something there.' },
    { q: 'How does he sound?', ops: ['excited', 'scared', 'calm', 'tired'], ex: 'He sounds scared, but also excited. It sounds as if he has found something big.' }
  ],
  revela: 'Clark found a door behind a furniture store. Behind it: empty yellow rooms that go on forever. He has been there every night since.',
  vida: [],
  antes: [
    { q: 'You heard Clark. In the trailer, how long has he been there? Guess.', h: 'I think he has been there for … / since …' },
    { q: 'Someone has been there before him. Who do you think it was?', h: 'I think … has been there.' }
  ]
};
