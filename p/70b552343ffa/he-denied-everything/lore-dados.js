/* DIGGER · O LORE (cena I · The Story)  09/10/2026 — B2, já com os reporting verbs (deny, admit, promise, refuse, blame, accuse, warn, apologize).
   Filme de 2026: só o que a aula já confirma; o diretor é contado pelos filmes que já fez. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A map of the Arctic ice with a long crack, at night',
  rotulo: 'THE MAP OF THE CRACK', anda: 'Go to the next stop',
  fimTit: 'A crack in the ice, and a man who wants to control the story.',
  fim: 'Now you know Digger. Now the trailer.',
  antes: [
    { q: 'You know Digger now. In the trailer, what do you think he denies? What does he admit?', h: 'I think he denies …ing, but he admits …', r: 'I think he denies stealing the water, but he admits that he knew about the problem.' },
    { q: 'Who will people blame for the disaster?', h: 'They will blame … for …', r: 'They will blame the people in charge for the disaster, not the ones who caused it.' }
  ],
  paradas: [
    { k: 'THE DIRECTOR', nome: 'The Director', dur: 'IÑÁRRITU', x: 18, y: 28, img: 'capa',
      h: 'A director of strange, intense films',
      t: 'Alejandro G. Iñárritu made Birdman, which won the Oscar for best picture, and The Revenant, which won Leonardo DiCaprio his Oscar. Digger is his first comedy with a big star: Tom Cruise.',
      q: 'Which actor do you think everybody should apologize to for never giving an award?', st: ['I think … deserves …', 'They should apologize for ignoring …'],
      ex: 'I think Fernanda Torres deserved more awards.' },
    { k: 'THE RICHEST MAN', nome: 'The Richest Man', dur: 'DIGGER ROCKWELL', x: 40, y: 54, img: 'torre',
      h: 'The richest oil man in the world',
      t: 'Digger Rockwell is the richest oil man in the world. He promised his investors to make them richer, and he refused to stop any project, even when engineers warned him to slow down.',
      q: 'Have you ever refused to stop something when people warned you?', st: ['People warned me not to …', 'I refused to stop, and …'],
      ex: 'My friends warned me not to adopt a third cat.' },
    { k: 'THE CRACK', nome: 'The Crack', dur: 'GETTING BIGGER', x: 64, y: 30, img: 'gelo',
      h: 'A crack in the ice',
      t: 'Near one of his projects, a crack opens in the ice. It is getting bigger every day. Scientists warn the world: the worst case is a disaster that could cost eighteen trillion dollars.',
      q: 'What is a “small crack” in your life that you should fix before it gets bigger?', st: ['I keep promising to fix …', 'I admit I’ve been avoiding …'],
      ex: 'I keep promising to fix my sleep.' },
    { k: 'HE KNEW', nome: 'He Knew', dur: 'THE SECRET FILES', x: 80, y: 62, img: 'arquivo',
      h: 'He knew before everybody',
      t: 'Digger knew about the crack long before everybody else. At first he denied knowing anything. Then the documents came out. Now journalists accuse him of hiding it, and he blames the engineers.',
      q: 'Have you ever been blamed for something that wasn’t your fault?', st: ['Once, people blamed me for …', 'I denied …ing, and …'],
      ex: 'Once, my team blamed me for a lost file.' },
    { k: 'THE STORY', nome: 'The Story', dur: 'THE PRESS', x: 44, y: 84, img: 'podio',
      h: 'If you can’t control nature…',
      t: 'Now Digger wants to be the hero who saves the world from the disaster he caused. He can’t control the ice, so he decides to control the story. He apologizes for nothing, and promises everything.',
      q: 'Can you think of a famous person who apologized well, or badly?', st: ['… apologized for …ing.', 'I think it was good / terrible because …'],
      ex: 'A footballer apologized for missing a penalty.' }
  ]
};
