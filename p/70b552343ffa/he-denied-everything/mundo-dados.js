/* DIGGER · O MUNDO (cena I · Warm-up and The Morning Paper)  19/10/2026 — formato jornal.
   No lugar do mapa: warm-up de conversa e depois a primeira página do dia em que a rachadura no gelo virou notícia.
   B2, já com reporting verbs (deny / admit + -ing, refuse / promise + to, blame for, accuse of). */
window.WL_MUNDO = {
  forma: 'jornal',
  cena: { rot: 'Warm-up and The Morning Paper', t: 'Before the trailer: what people promised you, then a crack in the ice.', p: 'Answer three questions about your life. Then pick a story on the front page and report it.' },
  mundoRot: 'The Morning Paper',
  guia: '<b>Warm-up and The Morning Paper (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Morning Paper:</b> the front page on the day the crack in the ice became news, with three stories about Digger Rockwell. The student picks one, says what they think happened, reads the start and reacts. The stories already use the reporting verbs (he denied knowing, he refused to stop, they accuse him of hiding).',
  foto: 'podio',
  aquece: [
    { img: 'torre', q: 'Have you ever refused to stop something when people warned you?', st: ['My … warned me not to …', 'I refused to …'], filme: 'In this film, the richest oil man refused to stop, even when engineers warned him.', mais: 'Were they right?', ex: 'My friends warned me not to adopt a third cat. I refused to listen!' },
    { img: 'arquivo', q: 'Have you ever been blamed for something that wasn’t your fault?', st: ['Once, … blamed me for …ing.'], filme: 'Digger blames the engineers for a disaster.', mais: 'What did you do?', ex: 'Once, my team blamed me for losing a file. I denied losing it, and I was right.' },
    { img: 'podio', q: 'Can you think of a famous person who apologized well, or badly?', st: ['… apologized for …ing.'], filme: 'Digger apologizes for nothing, and promises everything.', mais: 'What should they have said?', ex: 'A footballer apologized for missing a penalty. He did it well: he didn’t blame anybody.' }
  ],
  jornal: 'THE WORLD TODAY', data: 'Morning edition',
  manchetes: [
    { t: 'A crack in the ice: “It could cost eighteen trillion dollars”', sub: 'Scientists warn the world. · Page 1',
      txt: 'Near one of Digger Rockwell’s projects, a crack in the ice is getting bigger every day. Scientists warned the world not to wait, and accused governments of ignoring the data for years.',
      q: 'Who should be blamed for the crack? Why?', ex: 'I think Digger should be blamed for not stopping the project when the engineers warned him.' },
    { t: 'Digger: “I knew nothing.” Documents say he did', sub: 'The richest man in the world speaks. · Page 3',
      txt: 'At first, Digger Rockwell denied knowing anything about the crack. Then secret documents came out. Now journalists accuse him of hiding the truth, and he blames his engineers.',
      q: 'Do you believe him? What should he admit?', ex: 'No. He should admit knowing about it, and apologize for hiding it.' },
    { t: 'Rockwell promises to “save the world”', sub: 'A press conference at noon. · Page 5',
      txt: 'Today Digger Rockwell promised to save the world from the disaster. He refused to answer questions about the documents, and he didn’t apologize for anything.',
      q: 'If you were at the press conference, what would you accuse him of?', ex: 'I would accuse him of causing the problem and then pretending to be the hero.' }
  ],
  vida: [],
  antes: [
    { q: 'You read the paper. In the trailer, what do you think Digger denies? What does he admit?', h: 'I think he denies …ing, but he admits …' },
    { q: 'Who will people blame for the disaster?', h: 'They will blame … for …' }
  ]
};
