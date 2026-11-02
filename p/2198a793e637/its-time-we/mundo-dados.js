/* X-MEN ’97 · O MUNDO (cena I · Warm-up and Pick a Side)  19/10/2026 — formato lado.
   No lugar do mapa: warm-up de conversa e depois a votação do time: seguir o Magneto × ir embora.
   B2, já com would rather / it’s time. */
window.WL_MUNDO = {
  forma: 'lado',
  cena: { rot: 'Warm-up and Pick a Side', t: 'Before the trailer: your choices, then a team without its teacher.', p: 'Answer three questions about your life. Then vote with the team and defend your choice.' },
  mundoRot: 'Pick a Side',
  guia: '<b>Warm-up and Pick a Side (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Pick a Side:</b> Professor X left everything to Magneto. Stay and follow him, or leave the team? The student taps one side and defends it for thirty seconds. Then tap “The teacher pushes back” and let them answer. Twice. Push for I’d rather… than… and it’s time we….',
  q: 'Professor X is gone, and Magneto leads the X-Men now. Would you rather stay with the team, or leave?',
  aquece: [
    { img: 'capa', q: 'Would you rather watch an old cartoon from your childhood, or a new one? Why?', st: ['I’d rather watch …, because …'], filme: 'This cartoon was on TV every Saturday in the 90s. Now it’s back.', mais: 'Which one did you love?', ex: 'I’d rather watch an old one. It reminds me of Saturday mornings.' },
    { img: 'clube', q: 'When did you first have to decide something big without help?', st: ['The first time was when …'], filme: 'Professor X is gone. For the first time, his students decide alone.', mais: 'Was it the right decision?', ex: 'The first time was when I chose my university. I’d rather have had some help!' },
    { img: 'reuniao', q: 'In your family or team, is it time somebody changed something? What?', st: ['It’s time we …', 'It’s time somebody …'], filme: 'Cyclops says it’s time the team made a choice.', mais: 'Who should change it?', ex: 'It’s time we stopped working on weekends.' }
  ],
  lados: [
    { img: 'magneto', nome: 'Stay with Magneto', t: 'The Professor trusted him with everything. Maybe it’s time old enemies worked together.' },
    { img: 'reuniao', nome: 'Leave the team', t: 'Magneto used to fight the X-Men. Some would rather leave than follow him.' }
  ],
  ex: [
    'I’d rather stay. The Professor chose him, and it’s time we trusted that choice.',
    'I’d rather leave than follow a man who fought us for years. It’s time we made our own team.'
  ],
  contra: [
    ['Magneto used to think humans and mutants could never live together. Would you rather follow a man like that?', 'If you leave, the team breaks. Would you rather be alone in a world that hates mutants?'],
    ['The Professor trusted Magneto. Would you rather ignore his last wish?', 'It’s time the team stayed together. Who will protect the young mutants if you go?']
  ],
  depois: 'Watch the trailer. Then tell me: would you still rather do the same?',
  vida: [],
  antes: [
    { q: 'You voted. In the trailer, would the team rather follow Magneto or split up? Guess.', h: 'I think they’d rather … than …' },
    { q: 'What do you think Cyclops says: “It’s time we…” what?', h: '“It’s time we …”' }
  ]
};
