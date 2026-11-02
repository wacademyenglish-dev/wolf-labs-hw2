/* BREAKING BAD · O MUNDO (cena I · The Interview)  19/10/2026 — formato G (kit/mundo.js).
   No lugar do mapa: o professor é o Walter (a ficha só aparece para ele); o aluno pergunta e descobre.
   A1, já com as perguntas (who, what, where, how old, why). */
window.WL_MUNDO = {
  forma: 'entrevista',
  cena: { rot: 'Warm-up and The Interview', t: 'Before the first scene: you, then a man from the show.', p: 'Answer three questions about you. Then ask your teacher questions and find out who he is.' },
  mundoRot: 'The Interview',
  guia: '<b>Warm-up and The Interview (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Interview:</b> You are Walter White: the card with his facts shows only on your screen (dashed border). The student asks questions (the chips help: What is your name? How old are you? Where do you live?…) and taps each one they ask; answer in short A1 sentences, in character. Then the student guesses who you are and how your life is, and the photo shows the answer. A1: the question order is the point (Where do you live?, not Where you live?). Correct it gently by asking it back the right way.',
  capa: 'cena1-camera', capaLeg: 'A video camera on a desert road.',
  quem: 'Walter White',
  fatos: ['Your name is Walter White. You are 50.', 'You live in Albuquerque, in the desert, New Mexico.', 'You are a chemistry teacher at a high school.', 'You live with your wife, Skyler, and your son.', 'You are very sick. The doctor’s news is very bad.', 'You need money for your family. You have a plan… a bad plan.'],
  perguntas: ['What is your name?', 'How old are you?', 'Where do you live?', 'What do you do?', 'Who do you live with?', 'How do you feel?', 'Why are you sad?', 'What is your plan?'],
  palpiteEx: 'You are a teacher. You are fifty. You live with your family. You are sad because you are sick.',
  foto: 'sala',
  revela: 'A chemistry teacher in Albuquerque, New Mexico. He is fifty, he is very sick, and he needs money for his family. His plan is a crime.',
  aquece: [
    { img: 'cena3-cozinha', q: 'What is your name? Where do you live?', st: ['My name is …', 'I live in …'], filme: 'The man in this show lives in Albuquerque, in the desert.', mais: 'Do you like your city? Why?', ex: 'My name is Ana. I live in Curitiba. I like it, but it is cold!' },
    { img: 'sala', q: 'What do you do? Where do you work or study?', st: ['I am a …', 'I work at … / I study at …'], filme: 'He is a teacher.', mais: 'Do you like your job?', ex: 'I am a nurse. I work at a hospital.' },
    { img: 'ficha', q: 'Who do you live with? Who is the most important person in your life?', st: ['I live with …', 'The most important person is …'], filme: 'He has a wife and a son.', mais: 'Why is this person important?', ex: 'I live with my husband. The most important person is my daughter.' }
  ],
  vida: [],
  antes: [
    { q: 'You know Walter now. Where is he in the first scene? Why is he there? Guess.', h: 'I think he is in the … because …' },
    { q: 'A man talks to a video camera on the road. Who is the message for?', h: 'It is for his …' }
  ]
};
