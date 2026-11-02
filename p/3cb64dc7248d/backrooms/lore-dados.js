/* BACKROOMS · O LORE (cena I · The Story)  09/10/2026 — B1, já com o present perfect (has been, since / for, never, just, ever).
   Fotofobia: as salas amarelas aparecem escuras, de lanterna. Do filme de 2026, só o que a aula já confirma. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'A hand-drawn map of endless rooms, by flashlight',
  rotulo: 'CLARK’S MAP', anda: 'Walk to the next room',
  fimTit: 'A photo on the internet that became a film.',
  fim: 'Now you know the Backrooms. Now the trailer.',
  antes: [
    { q: 'You know Clark now. In the trailer, how long has he been there? Guess.', h: 'I think he has been there for … / since …', r: 'I think he has been there for many years, since he was a teenager.' },
    { q: 'Someone has been there before him. Who do you think it was?', h: 'I think … has been there.' }
  ],
  paradas: [
    { k: 'THE PHOTO', nome: 'The Photo', dur: '2019', x: 18, y: 30, img: 'foto',
      h: 'An empty yellow room',
      t: 'In 2019, someone posted a strange photo online: an empty room with old yellow wallpaper and damp carpet. Someone wrote: if you fall out of reality, you end up here. Millions of people have seen it since.',
      q: 'What is the strangest photo or video you have ever seen online?', st: ['The strangest thing I have seen is …', 'I have never forgotten it.'],
      ex: 'The strangest thing I have seen is a video of a cat opening a fridge.' },
    { k: 'THE LEVELS', nome: 'The Levels', dur: 'THE LEGEND', x: 40, y: 56, img: 'corredor',
      h: 'Rooms that never end',
      t: 'People started writing stories about it: the rooms go on forever, there are “levels”, and something lives there. The legend has grown for years. Nobody has ever found the end.',
      q: 'Have you ever been lost in a building? How long were you lost?', st: ['I have been lost in …', 'I was lost for …'],
      ex: 'I have been lost in a huge hospital.' },
    { k: 'KANE', nome: 'Kane', dur: '2022', x: 62, y: 30, img: 'vhs',
      h: 'A teenager with a camera',
      t: 'In 2022, a sixteen-year-old, Kane Parsons, made short videos about the Backrooms that look like old VHS tapes. Millions of people have watched them. He has just made the jump from YouTube to cinema.',
      q: 'What have you made or learned by watching YouTube?', st: ['I have learned to … on YouTube.', 'I have just …'],
      ex: 'I have learned to fix my bike on YouTube.' },
    { k: 'THE STORE', nome: 'The Store', dur: 'THE DOOR', x: 80, y: 60, img: 'loja',
      h: 'A door behind a store',
      t: 'In the film, there is a small door behind a furniture store. It shouldn’t be there. Behind it: the yellow rooms, one after the other, forever.',
      q: 'Is there a place in your city that has always felt a bit strange to you?', st: ['… has always felt strange to me.', 'I have never …'],
      ex: 'An old cinema downtown has always felt strange to me.' },
    { k: 'CLARK', nome: 'Clark', dur: 'EVERY NIGHT', x: 40, y: 82, img: 'capa',
      h: 'He has been there every night',
      t: 'Clark found the door. He has been there every night since, filming, and he still hasn’t found the end. And he has just found something worse: someone has been there before him.',
      q: 'What have you done every day since you started this year?', st: ['I have … every day since …', 'I haven’t … yet.'],
      ex: 'I have walked every day since January.' }
  ]
};
