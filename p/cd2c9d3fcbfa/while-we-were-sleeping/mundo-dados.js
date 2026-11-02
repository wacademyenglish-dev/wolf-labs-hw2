/* INVASION · O MUNDO (cena I · Warm-up and In the Dark)  19/10/2026 — formato escuro.
   No lugar do mapa: warm-up de conversa e depois só o som do trailer de 0:18 a 0:34 (um líder fala ao mundo:
   “My fellow citizens of the world…”). B1, já com past continuous × past simple. */
window.WL_MUNDO = {
  forma: 'escuro',
  cena: { rot: 'Warm-up and In the Dark', t: 'Before the trailer: where you were, then a voice to the whole world.', p: 'Answer three questions about your life. Then close your eyes and listen to the trailer.' },
  mundoRot: 'In the Dark',
  guia: '<b>Warm-up and In the Dark (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). Let them talk; don’t correct the grammar yet. <b>2 · In the Dark:</b> the screen is covered and only the sound plays, from 0:18 to 0:34: a leader speaks to the whole world (“My fellow citizens of the world…”). The student says who is talking, to whom and how he sounds, and imagines what people were doing while they listened; then take off the cover.',
  foto: 'capa', ini: 18, fim: 34,
  aquece: [
    { img: 'relogios', q: 'What were you doing when you heard some very important news?', st: ['I was …ing when I heard …'], filme: 'In this show, four people in four countries remember what they were doing on one night.', mais: 'Who told you?', ex: 'I was making coffee when I heard about the earthquake. My sister called me.' },
    { img: 'tokio', q: 'Where were you while a big event was happening on TV?', st: ['While … was happening, I was …'], filme: 'In Tokyo, an engineer was watching a space mission when something hit the ship.', mais: 'Did you watch it later?', ex: 'While the World Cup final was happening, I was working. I watched it on my phone!' },
    { img: 'capa', q: 'What were you doing at this time yesterday?', st: ['At this time yesterday, I was …'], filme: 'At the same moment, all over the world, the lights went out.', mais: 'And what were your family doing?', ex: 'At this time yesterday, I was sitting in traffic. My kids were doing homework.' }
  ],
  q: 'Close your eyes. Somebody is speaking to the whole world. Listen.',
  ouvir: [
    { q: 'Who is talking?', ops: ['a president', 'a reporter', 'a soldier', 'a child'], ex: 'It sounds like a president, or a world leader.' },
    { q: 'Who is he talking to?', ops: ['the whole world', 'his family', 'his team'], ex: 'He is talking to the whole world: “My fellow citizens of the world.”' },
    { q: 'How does he sound? What was happening?', ops: ['scared', 'serious', 'happy', 'tired'], ex: 'He sounds very serious. Strange things were happening all over the world, and nobody could explain them.' }
  ],
  revela: 'On the same night, all over the world, the lights went out and strange things started happening. Four people who didn’t know each other were living normal lives when it began.',
  vida: [],
  antes: [
    { q: 'You heard the leader. In the trailer, what was each person doing when it happened? Guess.', h: 'The sheriff was …ing when … / She was …ing when …' },
    { q: 'What were the lights doing while the signals stopped?', h: 'While …, the lights were …' }
  ]
};
