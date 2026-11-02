/* SILO · O LORE (cena I · The Story)  09/10/2026 — B1, já com as perguntas indiretas (Do you know why…? I wonder if…). */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A cross-section of a giant underground tower, 144 floors deep',
  rotulo: 'THE SILO, FLOOR BY FLOOR', anda: 'Go down the stairs',
  fimTit: 'Ten thousand people underground, and one question nobody can ask.',
  fim: 'Now you know the silo. Now the trailer.',
  antes: [
    { q: 'You know the silo now. In the trailer, what does Juliette want to know? Guess.', h: 'She wants to know why … / if …', r: 'She wants to know why they can’t go outside.' },
    { q: 'Do you know who built the silo? What do you think?', h: 'I don’t know who … / I wonder if …', r: 'I don’t know who built it. I wonder if the outside is really dangerous.' }
  ],
  paradas: [
    { k: 'THE BOOKS', nome: 'The Books', dur: 'HUGH HOWEY', x: 76, y: 14, img: 'capa',
      h: 'A story that started small',
      t: 'Hugh Howey published the first part of the story himself, online, as a short book called Wool. Millions of readers wanted to know what happened next. Years later, it became an Apple TV series.',
      q: 'Do you know how your favorite book or show started?', st: ['I know that … / I don’t know how …', 'I wonder if …'],
      ex: 'I don’t know how Friends started.' },
    { k: '144 FLOORS', nome: '144 Floors', dur: 'THE STAIRS', x: 50, y: 34, img: 'escadaria',
      h: 'No elevators, only stairs',
      t: 'Ten thousand people live in a giant tower under the ground, 144 floors deep. There are no elevators. A long spiral staircase connects everything. Going from the top to the bottom takes days.',
      q: 'Can you tell me how many stairs you climb every day?', st: ['I think I climb …', 'I don’t know how many …'],
      ex: 'I don’t know how many, but I live on the fourth floor and there is no elevator!' },
    { k: 'MECHANICAL', nome: 'Mechanical', dur: 'THE BOTTOM', x: 50, y: 82, img: 'oficina',
      h: 'An engineer at the bottom',
      t: 'Juliette is an engineer. She works at the very bottom, in Mechanical, where the big generator keeps everyone alive. She fixes things, she asks questions, and she wants to know how everything works.',
      q: 'Do you know how something at home works that most people don’t?', st: ['I know how … works.', 'I wonder why …'],
      ex: 'I know how our water pump works.' },
    { k: 'THE SCREEN', nome: 'The Screen', dur: 'THE TOP', x: 22, y: 26, img: 'tela',
      h: 'A window to a dead world',
      t: 'At the top, a big screen shows the world outside: grey, dead, and dangerous. Nobody has been outside and come back. People look at the screen and wonder if the world will ever be green again.',
      q: 'If you lived in the silo, would you want to know what is really outside?', st: ['I’d want to know if …', 'I wouldn’t ask whether …'],
      ex: 'I’d want to know if the screen tells the truth.' },
    { k: 'THE RULE', nome: 'The Rule', dur: 'NO QUESTIONS', x: 20, y: 62, img: 'reliquia',
      h: 'Never say you want to go out',
      t: 'Nobody knows who built the silo or why they are there. Old objects from before are illegal. And there is one rule: never say you want to go outside, or you will be sent outside.',
      q: 'Is there a question people in your family never ask? Why not?', st: ['Nobody asks why …', 'I don’t know if …'],
      ex: 'Nobody asks why my uncle moved away.' }
  ]
};
