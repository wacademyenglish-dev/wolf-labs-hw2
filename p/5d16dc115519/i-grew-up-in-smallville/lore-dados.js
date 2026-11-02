/* SUPERMAN & LOIS · O LORE (cena I · The Story)  09/10/2026 — A2, já com o past simple (moved, came, grew up, didn't).
   A outra aula da série (A1, a geladeira) conta o mesmo mundo no presente; esta conta em linha do tempo, no passado. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of the road from a Kansas farm to a big city, at night',
  rotulo: 'CLARK’S ROAD', anda: 'Drive to the next year',
  fimTit: 'A baby from the sky, a reporter, and the road back home.',
  fim: 'Now you know Clark’s life. Now the trailer.',
  antes: [
    { q: 'You know Clark’s past now. In the trailer, why did the family go back to the farm? Guess.', h: 'I think they went back because …', r: 'I think they went back because the city was too dangerous for the boys.' },
    { q: 'Did the boys know their father’s secret? What do you think?', h: 'I think they knew … / they didn’t know …', r: 'I think they didn’t know their father’s secret at first.' }
  ],
  paradas: [
    { k: 'THE FIELD', nome: 'The Field', dur: 'A NIGHT IN KANSAS', x: 20, y: 66, img: 'queda',
      h: 'Something fell from the sky',
      t: 'One night, a small ship fell in a field in Kansas. There was a baby inside. He came from another planet, Krypton. Krypton didn’t exist any more.',
      q: 'Where were you born? Did you grow up there?', st: ['I was born in …', 'I grew up in … / I didn’t grow up there.'],
      ex: 'I was born in Recife, but I didn’t grow up there.' },
    { k: 'THE BARN', nome: 'The Barn', dur: 'SMALLVILLE', x: 34, y: 44, img: 'celeiro',
      h: 'A boy who grew up on a farm',
      t: 'Martha and Jonathan Kent found the baby and called him Clark. He grew up on their farm in Smallville. He was very strong, but he didn’t tell anybody.',
      q: 'What did your parents always tell you when you were a child?', st: ['They always told me: “…”', 'I didn’t always listen!'],
      ex: 'They always told me: “Study first, play later.” I didn’t always listen!' },
    { k: 'METROPOLIS', nome: 'Metropolis', dur: 'THE BIG CITY', x: 62, y: 26, img: 'metropole',
      h: 'He moved to the big city',
      t: 'When he was a young man, Clark moved to Metropolis. He got a job at a newspaper. In the city, he became Superman, but at work he was only quiet, shy Clark.',
      q: 'When did you move out, or start your first job? How did you feel?', st: ['I started my first job in …', 'I felt …'],
      ex: 'I started my first job in 2015.' },
    { k: 'LOIS', nome: 'Lois', dur: 'THE NEWSROOM', x: 80, y: 46, img: 'redacao',
      h: 'He met a reporter',
      t: 'At the newspaper, Clark met Lois Lane, the best reporter in the city. They fell in love, they got married, and they had twin boys, Jonathan and Jordan.',
      q: 'How did you meet your best friend or your partner?', st: ['I met … at …', 'We became friends because …'],
      ex: 'I met my best friend at university.' },
    { k: 'THE ROAD HOME', nome: 'The Road Home', dur: 'YEARS LATER', x: 46, y: 74, img: 'estrada',
      h: 'They went back to the farm',
      t: 'Years later, the family left the big city. They drove back to Smallville, to the old farm. The boys didn’t want to go.',
      q: 'Did you ever go back to a place from your childhood? What was different?', st: ['I went back to …', 'It was different because …'],
      ex: 'I went back to my old school.' }
  ]
};
