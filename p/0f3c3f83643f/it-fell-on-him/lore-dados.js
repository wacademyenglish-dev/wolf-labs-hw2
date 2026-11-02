/* COYOTE VS. ACME · O LORE (cena I · The Film)  09/10/2026 — A1, já com me / him / it / them. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of a desert canyon at sunset',
  rotulo: 'THE MAP OF THE DESERT', anda: 'Go to the next stop',
  fimTit: 'Seventy years of falling rocks, and now a court.',
  fim: 'Now you know the coyote. Now the trailer.',
  antes: [
    { q: 'Every ACME product hurts the coyote. In the trailer, what falls on him? Guess.', h: 'I think a … falls on him.' },
    { q: 'The coyote takes ACME to court. Do you think the judge helps him?', h: 'Yes, the judge helps him. / No, the judge doesn’t help him.' }
  ],
  paradas: [
    { k: 'THE DESERT', nome: 'The Desert', dur: '1949', x: 22, y: 64, img: 'deserto',
      h: 'A cartoon from 1949',
      t: 'In 1949, Chuck Jones made a short cartoon: a coyote in the desert, and a fast bird. The coyote is hungry. He wants the bird.',
      q: 'What cartoons did you watch as a child? Do you remember them?', st: ['I watched …', 'Yes, I remember them. / No, I don’t remember them.'],
      ex: 'I watched Tom and Jerry.' },
    { k: 'THE ROAD RUNNER', nome: 'Road Runner', dur: 'BEEP BEEP', x: 42, y: 34, img: 'capa',
      h: 'A bird he can’t catch',
      t: 'The bird is the Road Runner. It is very fast, and it says only two words: “Beep, beep!” The coyote runs after it all day.',
      q: 'Is there something you want, but you can’t get it?', st: ['I want …, but I can’t get it.', 'I never …'],
      ex: 'I want a big dog, but I can’t get it.' },
    { k: 'ACME', nome: 'ACME', dur: 'THE CATALOG', x: 62, y: 58, img: 'caixa',
      h: 'A company that sells everything',
      t: 'The coyote buys things from ACME: rockets, magnets, giant rubber bands. The products come in a box in the desert.',
      q: 'What did you buy online that went wrong?', st: ['I bought …', 'It didn’t work. I returned it.'],
      ex: 'I bought a phone case.' },
    { k: 'THE CLIFF', nome: 'The Cliff', dur: 'THE JOKE', x: 80, y: 28, img: 'bigorna',
      h: 'The rock falls on him',
      t: 'The joke is always the same. The coyote falls off a cliff, or a big rock falls on him.',
      q: 'Who is a person that never gives up? Tell me about him or her.', st: ['My … never gives up.', 'I admire him / her because …'],
      ex: 'My mother never gives up.' },
    { k: 'THE COURT', nome: 'The Court', dur: '2026', x: 54, y: 82, img: 'tribunal',
      h: 'He takes ACME to court',
      t: 'In the new film, the coyote is tired. Every ACME product hurt him, so he takes the company to court. Will Forte plays his lawyer.',
      q: 'A product hurts you. What do you do: you call the company, or you take them to court?', st: ['I call them and …', 'I take them to court because …'],
      ex: 'I call them first.' }
  ]
};
