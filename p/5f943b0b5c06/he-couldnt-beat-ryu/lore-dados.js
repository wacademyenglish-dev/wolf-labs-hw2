/* STREET FIGHTER · O LORE (cena I · The Story)  09/10/2026 — A2, já com could / couldn't / was able to.
   A rivalidade de 25 anos é a história da aula (dito no guia e no encarte); o resto é a história do jogo. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A neon world map with flight routes, like an old arcade game',
  rotulo: 'THE WORLD TOUR', anda: 'Fly to the next fight',
  fimTit: 'From a coin in an arcade to a final round tonight.',
  fim: 'Now you know the fighters. Now the trailer.',
  antes: [
    { q: 'You know Ryu and Ken now. In the trailer, who could win the tournament? Guess.', h: 'I think … could win, because …', r: 'I think Ryu could win, because he is very calm and strong.' },
    { q: 'Twenty-five years ago, Ken couldn’t beat Ryu. Could he beat him tonight?', h: 'Yes, he could, because … / No, he couldn’t, because …', r: 'Yes, he could, because now he trains every day and he really wants to win.' }
  ],
  paradas: [
    { k: 'THE ARCADE', nome: 'The Arcade', dur: '1987 · 1991', x: 18, y: 36, img: 'fliperama',
      h: 'A coin and a long line',
      t: 'Street Fighter came from Japan in 1987. In 1991, Street Fighter II was in every arcade. Kids waited in long lines with one coin.',
      q: 'What games could you play as a child? Were you good at them?', st: ['As a child, I could play …', 'I was / wasn’t good at …'],
      ex: 'As a child, I could play Mario for hours.' },
    { k: 'RYU', nome: 'Ryu', dur: 'JAPAN', x: 82, y: 32, img: 'dojo',
      h: 'A fighter who only trains',
      t: 'Ryu is a quiet fighter from Japan. He trains every day. He only wants a better fight.',
      q: 'What could you do very well when you were ten?', st: ['When I was ten, I could …', 'Now I can’t … any more.'],
      ex: 'When I was ten, I could do a cartwheel.' },
    { k: 'KEN', nome: 'Ken', dur: 'THE U.S.A.', x: 30, y: 62, img: 'rua',
      h: 'The best friend, the best rival',
      t: 'Ken is from the United States. He and Ryu had the same master. Best friends, best rivals.',
      q: 'Who was your best friend and your best rival when you were young?', st: ['My best friend and rival was …', 'He / She could always … better than me.'],
      ex: 'It was my cousin Lia.' },
    { k: 'THE TOURNAMENT', nome: 'The Tournament', dur: 'THE BEST IN THE WORLD', x: 58, y: 54, img: 'arena',
      h: 'Fighters from every country',
      t: 'The fighters come from many countries. Chun-Li could kick faster than anybody.',
      q: 'Was there a competition you were able to win? Or one you couldn’t win?', st: ['I was able to win …', 'I couldn’t win … because …'],
      ex: 'I was able to win a chess competition at school.' },
    { k: 'THE FILM', nome: 'The Film', dur: '2026', x: 76, y: 74, img: 'capa',
      h: 'The game becomes a film again',
      t: 'In 2026 the game is a film again. Tonight there is a final round: you against Ryu.',
      q: 'Is there something you couldn’t do years ago, but you could do it today?', st: ['Years ago, I couldn’t …', 'Today I could … / I was able to …'],
      ex: 'Years ago, I couldn’t speak in public.' }
  ]
};
