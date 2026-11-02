/* OTHER MOMMY · O MUNDO (cena I · Warm-up and In the Dark)  19/10/2026 — formato escuro (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois os primeiros 14 segundos do trailer só no som (uma menina
   e uma mulher brincando com chapéus; "Mommy?"). Terror leve. A1, já com o present simple com she. */
window.WL_MUNDO = {
  forma: 'escuro',
  cena: { rot: 'Warm-up and In the Dark', t: 'Before the trailer: your house at night, then a sound in the dark.', p: 'Answer three questions about your life. Then close your eyes and listen to the start of the trailer.' },
  mundoRot: 'In the Dark',
  guia: '<b>Warm-up and In the Dark (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; A1: short answers are fine. <b>2 · In the Dark:</b> the screen is covered and only the sound of the first 14 seconds of the trailer plays (a girl and a woman play with hats; then “Mommy?”). The student says who is talking and how they sound, with the chips; then take off the cover. Light horror: nothing scary is on the screen.',
  foto: 'cama', ini: 0, fim: 14,
  aquece: [
    { img: 'cama', q: 'When you were a child, did you sleep with a light on?', st: ['Yes, I did.', 'No, I didn’t.'], filme: 'In this film, Bela is a little girl. She sleeps in a big room, next to a closet.', mais: 'Who slept in your room with you?', ex: 'Yes, I did. My sister slept in my room too.' },
    { img: 'armario', q: 'Is there a place in your house that you don’t like at night?', st: ['I don’t like the … at night.', 'because it is …'], filme: 'Bela says there is somebody in her closet.', mais: 'Why don’t you like it?', ex: 'I don’t like the garage at night, because it is dark and cold.' },
    { img: 'chapeu', q: 'Who in your family looks like you? What is the same?', st: ['My … looks like me.', 'She has … / He has …'], filme: 'Bela calls the person in the closet “Other Mommy”. She looks like her mother, but not exactly.', mais: 'And what is different?', ex: 'My brother looks like me. He has my eyes, but he is taller.' }
  ],
  q: 'Close your eyes. Who is in the room? What are they doing?',
  ouvir: [
    { q: 'Who is talking?', ops: ['a girl', 'a woman', 'a man', 'a dog'], ex: 'A girl and a woman are talking. The girl sounds happy.' },
    { q: 'What are they playing with?', ops: ['hats', 'toys', 'a ball', 'phones'], ex: 'They play with hats. The woman wants a bigger hat.' },
    { q: 'The girl says “Mommy?”. How does she sound now?', ops: ['happy', 'scared', 'tired'], ex: 'She sounds scared. I think Mommy isn’t there.' }
  ],
  revela: 'Bela plays with hats in her room. But who is the woman with her? Bela calls her “Other Mommy”.',
  vida: [],
  antes: [
    { q: 'You heard Bela and the woman. What does Other Mommy wear? Guess.', h: 'I think she wears …' },
    { q: 'Does Bela’s mother believe her? What do you think?', h: 'Yes, she believes her. / No, she doesn’t believe her.' }
  ]
};
