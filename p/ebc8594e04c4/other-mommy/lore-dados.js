/* OTHER MOMMY · O LORE (cena I · The Film)  09/10/2026 — A1, já com o present simple de he / she.
   Filme de 2026: só o que o trailer e a sinopse confirmam; a última parada diz isso em voz alta.
   Terror A1: nada de susto. As paradas são cômodos da casa, no escuro calmo. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'The plan of a house at night, seen from above',
  rotulo: 'THE HOUSE PLAN', anda: 'Walk to the next room',
  fimTit: 'A girl, a closet, two mothers.',
  fim: 'That is all we know. Now the trailer: look for clues.',
  antes: [
    { q: 'You know the closet now. What does Other Mommy wear? Guess.', h: 'I think she wears …', r: 'I think she wears a long black dress and black gloves.' },
    { q: 'Does Bela’s mother believe her? What do you think?', h: 'Yes, she believes her. / No, she doesn’t believe her.' }
  ],
  paradas: [
    { k: 'BELA’S ROOM', nome: 'Bela’s Room', dur: 'THE GIRL', x: 28, y: 32, img: 'cama',
      h: 'A little girl',
      t: 'Bela is a little girl. She has a big bed and a lot of toys. She sleeps in her room, next to a closet.',
      q: 'When you were a child, did you sleep with a light on?', st: ['Yes, I did. / No, I didn’t.', 'My room had …'],
      ex: 'Yes, I did.' },
    { k: 'THE CLOSET', nome: 'The Closet', dur: 'THE DOOR', x: 46, y: 26, img: 'armario',
      h: 'Somebody in the closet',
      t: 'Bela says there is somebody in her closet. She talks to this person. Sometimes the closet door is open at night, and Bela doesn’t close it.',
      q: 'Is there a place in your house that you don’t like at night?', st: ['I don’t like the … at night.', 'because it is …'],
      ex: 'I don’t like the garage at night, because it is dark and cold.' },
    { k: 'OTHER MOMMY', nome: 'Other Mommy', dur: 'THE NAME', x: 70, y: 40, img: 'chapeu',
      h: 'She looks like Mommy… but not exactly',
      t: 'Bela calls the person “Other Mommy”. Other Mommy looks like her mother, but not exactly. She wears different things, and she has different hands.',
      q: 'Who in your family looks like you? What is the same, and what is different?', st: ['My … looks like me.', 'He / She has … but I have …'],
      ex: 'My brother looks like me.' },
    { k: 'THE DIRECTOR', nome: 'The Director', dur: 'ROB SAVAGE', x: 74, y: 72, img: 'corredor',
      h: 'A man who makes calm, scary films',
      t: 'The director is Rob Savage. He makes horror films. In one film, friends talk on a video call and something happens.',
      q: 'Do you like horror films? Who watches them with you?', st: ['Yes, I like them. / No, I don’t like them.', 'My … watches them with me.'],
      ex: 'No, I don’t like them.' },
    { k: 'THE TRAILER', nome: 'The Trailer', dur: '2026 · WHAT WE KNOW', x: 34, y: 74, img: 'cozinha',
      h: 'Clues, not answers',
      t: 'The film is new. We only know what the trailer shows: Bela, the closet, and two mothers. So, in the trailer, look for clues.',
      q: 'In films, do you look for clues, or do you just watch?', st: ['I look for clues. / I just watch.', 'My friend always …'],
      ex: 'I look for clues.' }
  ]
};
