/* DAREDEVIL: BORN AGAIN · O LORE (cena I · The Story)  09/10/2026 — B1, já com looks / sounds / seems (+ like). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of Hell’s Kitchen drawn in sound waves, at night',
  rotulo: 'THE SOUND MAP', anda: 'Walk to the next sound',
  fimTit: 'A blind lawyer who hears everything, and a criminal who became mayor.',
  fim: 'Now you know Matt and Fisk. Now the trailer.',
  antes: [
    { q: 'You know Matt and Fisk now. In the trailer, does Fisk look like a mayor or a criminal? Guess.', h: 'He looks like … / He seems …', r: 'He looks like a mayor, but he seems very dangerous.' },
    { q: 'Matt hears Fisk’s heartbeat. What does it sound like?', h: 'It sounds … / It sounds like …', r: 'It sounds friendly, but it sounds like a threat underneath.' }
  ],
  paradas: [
    { k: 'HELL’S KITCHEN', nome: 'Hell’s Kitchen', dur: 'NEW YORK', x: 50, y: 22, img: 'bairro',
      h: 'A neighborhood with a dark name',
      t: 'Hell’s Kitchen is a neighborhood in Manhattan, New York. Today it looks like any part of the city: theaters, restaurants, apartments. In the story, it is a place where crime seems to never sleep.',
      q: 'Is there a place in your city that seems dangerous but isn’t?', st: ['… seems dangerous, but …', 'It looks like …'],
      ex: 'The old market seems dangerous at night, but it’s full of families.' },
    { k: 'THE ACCIDENT', nome: 'The Accident', dur: 'A BOY', x: 22, y: 50, img: 'acidente',
      h: 'He lost his sight, and gained everything else',
      t: 'When Matt Murdock was a boy, he saved a man from a truck, and chemicals fell on his eyes. He lost his sight. But his other senses became extraordinary: he can hear a heartbeat across a room.',
      q: 'Which of your senses seems strongest? What does your home sound like in the morning?', st: ['My … seems strongest.', 'My home sounds like …'],
      ex: 'My hearing seems strongest.' },
    { k: 'THE LAWYER', nome: 'The Lawyer', dur: 'BY DAY', x: 44, y: 56, img: 'mesa',
      h: 'He hears when you lie',
      t: 'By day, Matt is a lawyer. He listens to people’s hearts: when somebody lies, the heartbeat changes. A story can sound true, but to Matt it sounds like a lie.',
      q: 'How do you know when someone is lying? What do they look like or sound like?', st: ['They look … / They sound …', 'Their voice sounds like …'],
      ex: 'They look nervous, and their voice sounds a bit too high.' },
    { k: 'THE CHURCH', nome: 'The Church', dur: 'BY NIGHT', x: 76, y: 60, img: 'igreja',
      h: 'A devil who goes to church',
      t: 'By night, Matt puts on a red mask and fights criminals in the streets: Daredevil. He is Catholic, and he often goes to church to talk about guilt.',
      q: 'Who do you know that seems very different at night or on weekends?', st: ['My … seems … on weekends.', 'He / She looks like a different person.'],
      ex: 'My boss seems very relaxed on weekends.' },
    { k: 'FISK', nome: 'Fisk', dur: 'THE MAYOR', x: 82, y: 30, img: 'capa',
      h: 'From kingpin to mayor',
      t: 'Wilson Fisk used to be the biggest criminal in the city: the Kingpin. Now he is the mayor. He looks calm and polite.',
      q: 'Can someone change completely, or does it only look like it?', st: ['I think people can … / It only looks like …', 'It seems to me that …'],
      ex: 'I think people can change, but it seems to me that it takes many years.' }
  ]
};
