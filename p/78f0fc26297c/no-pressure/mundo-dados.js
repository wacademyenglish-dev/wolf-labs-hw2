/* HARRY POTTER · O MUNDO (cena I · Warm-up and Put It in Order)  19/10/2026 — formato ordem (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois quatro momentos da história embaralhados.
   B1, já com want / expect / tell / ask + pessoa + to. */
window.WL_MUNDO = {
  forma: 'ordem',
  cena: { rot: 'Warm-up and Put It in Order', t: 'Before the trailer: what people expected from you, then a boy under the stairs.', p: 'Answer three questions about your life. Then put four moments of Harry’s story in order and tell it.' },
  mundoRot: 'Put It in Order',
  guia: '<b>Warm-up and Put It in Order (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Put It in Order:</b> four cards from the start of Harry’s story, shuffled. The student taps them in order, saying why (“First…, then…”); then the cards show the real order, and the student tells the whole story in their words. The structure is already in the cards (they want him to…, they tell him not to…).',
  foto: 'chapeu',
  aquece: [
    { img: 'escada', q: 'What did adults tell you not to do when you were a child?', st: ['They told me not to …', 'My mother wanted me to …'], filme: 'Harry’s aunt and uncle tell him not to ask questions about his parents.', mais: 'Did you listen to them?', ex: 'They told me not to talk to strangers, and they wanted me to come home before dark.' },
    { img: 'corujas', q: 'What is the most important letter or message you ever received?', st: ['It was from …', 'It asked me to …'], filme: 'Before his eleventh birthday, Harry gets letters brought by owls.', mais: 'Do you still have it?', ex: 'It was an email from a company. It asked me to start a new job.' },
    { img: 'chapeu', q: 'When did people expect you to be great at something? How did you feel?', st: ['People expected me to …', 'I felt …'], filme: 'At his new school, everybody expects Harry to be special.', mais: 'Were you great at it?', ex: 'People expected me to be a doctor like my father. I felt a lot of pressure.' }
  ],
  cartas: [
    { img: 'escada', t: 'Harry lives under the stairs. The Dursleys tell him not to ask questions.' },
    { img: 'corujas', t: 'Owls bring hundreds of letters. His uncle doesn’t want him to read them.' },
    { img: 'lareira', t: 'Hagrid tells Harry the truth: he is a wizard, and Hogwarts wants him to come.' },
    { img: 'beco', t: 'In a hidden street, the shopkeeper asks him to try wand after wand.' }
  ],
  embaralha: [2, 0, 3, 1],
  contaEx: 'First, Harry lives under the stairs, and the Dursleys tell him not to ask questions. Then owls bring letters, but his uncle doesn’t want him to read them. After that, Hagrid tells him he is a wizard. In the end, he buys a wand in a hidden street.',
  vida: [],
  antes: [
    { q: 'You know Harry now. In the teaser, what does everybody expect him to do? Guess.', h: 'They expect him to …' },
    { q: 'What do the Dursleys want Harry to do with the letters?', h: 'They want him to … / They don’t want him to …' }
  ]
};
