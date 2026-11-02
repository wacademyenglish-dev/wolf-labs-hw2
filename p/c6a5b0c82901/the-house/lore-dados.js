/* THE ODYSSEY · O LORE (cena I · The Story)  09/10/2026 — A1, já com there is / there are e his / her / their.
   A história é a do Homero (quase 3 mil anos); do filme de 2026, só o que a aula já confirma. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'An old sea map of the Greek islands, at night',
  rotulo: 'THE SEA MAP', anda: 'Sail to the next stop',
  fimTit: 'Ten years at war, ten years at sea, and a house that waits.',
  fim: 'Now you know the story. Now the trailer.',
  antes: [
    { q: 'You know the story now. In the trailer, is there a ship? Is there a monster? Guess.', h: 'I think there is … / there are …', r: 'I think there are a lot of men in his house, and they want his wife and his house.' },
    { q: 'Odysseus comes home after twenty years. Who is at the door?', h: 'I think his … is at the door.' }
  ],
  paradas: [
    { k: 'TROY', nome: 'Troy', dur: 'TEN YEARS OF WAR', x: 82, y: 30, img: 'troia',
      h: 'There is a long war',
      t: 'Odysseus is the king of Ithaca, a small island. The war in Troy takes ten years.',
      q: 'Is there a very old story in your country that everybody knows?', st: ['Yes, there is a story about …', 'In the story, there is …'],
      ex: 'Yes, there is a story about a boy with one leg.' },
    { k: 'THE SEA', nome: 'The Sea', dur: 'TEN YEARS AT SEA', x: 56, y: 56, img: 'mar',
      h: 'There are monsters on the way',
      t: 'Odysseus wants to go home, but the sea is dangerous. There is a giant with one eye.',
      q: 'What is the longest trip in your life? Was there a problem?', st: ['My longest trip was to …', 'There was a problem with …'],
      ex: 'My longest trip was to Portugal.' },
    { k: 'ITHACA', nome: 'Ithaca', dur: 'HOME', x: 22, y: 40, img: 'cena6-portas',
      h: 'There are many men in his house',
      t: 'On Ithaca there is his house. There are many men in it. They eat his food.',
      q: 'What is there in your house? What is your favorite room?', st: ['In my house, there is …', 'My favorite room is …'],
      ex: 'In my house, there is a small garden.' },
    { k: 'PENELOPE', nome: 'Penelope', dur: 'HER LOOM', x: 30, y: 70, img: 'cena4-tear',
      h: 'Her secret',
      t: 'Penelope is his wife. There is a loom in her room.',
      q: 'Is there something you do every day? Do you like it?', st: ['Every day, I …', 'I like it because … / I don’t like it.'],
      ex: 'Every day, I walk my dog.' },
    { k: 'ARGOS', nome: 'Argos', dur: 'TWENTY YEARS LATER', x: 14, y: 52, img: 'cena3-cao',
      h: 'His old dog knows him',
      t: 'After twenty years, Odysseus comes home. Nobody knows him. Only his old dog, Argos.',
      q: 'Is there a pet in your life? What is its name?', st: ['Yes, there is … Its name is …', 'No, there isn’t, but …'],
      ex: 'Yes, there is a cat.' }
  ]
};
