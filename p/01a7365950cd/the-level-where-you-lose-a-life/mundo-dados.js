/* JUMANJI: OPEN WORLD · O MUNDO (cena I · Warm-up and The Game Rules)  19/10/2026 — formato regras.
   No lugar do mapa: warm-up de conversa e depois as regras do jogo; o aluno diz se jogaria.
   A2, já com who / which / that / where. */
window.WL_MUNDO = {
  forma: 'regras',
  cena: { rot: 'Warm-up and The Game Rules', t: 'Before the trailer: your games, then a game that plays you.', p: 'Answer three questions about your life. Then read the rules of Jumanji and say if you could play.' },
  mundoRot: 'The Game Rules',
  guia: '<b>Warm-up and The Game Rules (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Game Rules:</b> four rules of the game appear one at a time (you go into the game, you become an avatar, you have three lives, the animals come out). For each, the student taps Yes / No way / Only if… and says why. A2: help with who / which / where (“a game which…”, “a place where…”).',
  foto: 'capa',
  aquece: [
    { img: 'tabuleiro', q: 'What board game did you play as a kid? Who did you play with?', st: ['I played … with …', 'He / She was a person who …'], filme: 'In this film, the board game is alive.', mais: 'Who always won?', ex: 'I played Monopoly with my cousin, who always cheated!' },
    { img: 'cartucho', q: 'Which video game character would you like to be? Why?', st: ['I’d like to be …, who …'], filme: 'Four teenagers are pulled into a video game.', mais: 'What would you do first?', ex: 'I’d like to be Mario, who never gets tired.' },
    { img: 'selva', q: 'What is one strength that you have, and one weakness?', st: ['My strength is …, which …', 'My weakness is …'], filme: 'In the game, a shy boy becomes a strong man who isn’t afraid.', mais: 'Which one do people see first?', ex: 'My strength is patience, which helps me at work. My weakness is chocolate!' }
  ],
  regras: [
    { img: 'cartucho', t: 'If you play, the game pulls you inside. You can’t stop.', q: 'Could you play a game which pulls you inside?', ex: 'Only if my friends are with me. I need people who help me.' },
    { img: 'selva', t: 'Inside, you are an avatar: a person who is very different from you.', q: 'Would you like to be a person who is very different? Who?', ex: 'Yes! I’d like to be a person who can fly.' },
    { img: 'tabuleiro', t: 'You have three lives. When you lose the third, the game is over.', q: 'Could you play with only three lives? What would you do?', ex: 'No way. I’d look for a place where I could hide.' },
    { img: 'capa', t: 'In 2026, the game breaks: the animals come out into a real town.', q: 'Which place in your city would be the hardest level?', ex: 'The bus station, where everybody runs at 6 PM!' }
  ],
  sua: 'Invent rule number five for Jumanji. Use who, which or where.',
  suaEx: 'The player who rolls a six goes to a jungle where it never stops raining.',
  vida: [],
  antes: [
    { q: 'You know the rules now. In the trailer, what is the place where the game comes out? Guess.', h: 'I think it is a place where …', r: 'I think it is a place where the game becomes real and you can lose your life.' },
    { q: 'Bravestone is the hero who… what? Finish the sentence.', h: 'He is the hero who …', r: 'He is the hero who is very strong and has no weaknesses.' }
  ]
};
