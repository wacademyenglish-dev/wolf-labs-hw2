/* SOLO LEVELING (B1) · O MUNDO (cena I · Warm-up and The Hunter Rules)  19/10/2026 — formato regras.
   No lugar do mapa: warm-up de conversa e depois as regras do mundo dos caçadores.
   B1, já com the more…, the more… */
window.WL_MUNDO = {
  forma: 'regras',
  cena: { rot: 'Warm-up and The Hunter Rules', t: 'Before the trailer: your habits, then the rules of the gates.', p: 'Answer three questions about your life. Then read the rules of the hunters and say if you could live with them.' },
  mundoRot: 'The Hunter Rules',
  guia: '<b>Warm-up and The Hunter Rules (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the anime under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Hunter Rules:</b> four rules of this world appear one at a time (the gates, the ranks, the hidden dungeon, the System’s daily quest). For each, the student taps Yes / No way / Only if… and says why; the rules already use the more…, the more…. At the end they invent a fifth rule.',
  foto: 'capa',
  aquece: [
    { img: 'portal', q: 'What problem in your city gets worse the longer people ignore it?', st: ['The longer we ignore …, the worse …'], filme: 'In this anime, the longer a gate stays open, the more dangerous it becomes.', mais: 'Who should fix it?', ex: 'The longer we ignore the traffic, the worse it gets.' },
    { img: 'hospital', q: 'Who in your life works the hardest for their family?', st: ['My … works the hardest.', 'The more he / she works, the …'], filme: 'Jinwoo is the weakest hunter. He works for his mother’s hospital bills.', mais: 'How do you help them?', ex: 'My mother works the hardest. The more she works, the more tired she gets.' },
    { img: 'capa', q: 'If you had a daily quest, what would it be? The more you did it, the… what?', st: ['My daily quest would be …', 'The more I …, the …'], filme: 'A blue window gives Jinwoo a quest every day: 100 push-ups, 100 sit-ups…', mais: 'Could you do it every day?', ex: 'My daily quest would be reading twenty pages. The more I read, the better my English gets.' }
  ],
  regras: [
    { img: 'portal', t: 'Gates open all over the world. The longer they stay open, the more dangerous they get.', q: 'Could you live in a city with gates? What would you do?', ex: 'Only if I lived far from them. The farther, the better!' },
    { img: 'templo', t: 'Hunters are ranked from E to S. The higher your rank, the more money you make.', q: 'Could you live in a world of ranks? Is it fair?', ex: 'No way. The higher the rank, the more famous you are, but the weak ones get nothing.' },
    { img: 'teto', t: 'Some dungeons are hidden. The deeper you go, the stranger the rules.', q: 'Would you go into a hidden dungeon? Why?', ex: 'No, I wouldn’t. The stranger the rules, the more afraid I get.' },
    { img: 'capa', t: 'The System gives you a quest every day. If you don’t finish it, you are punished.', q: 'Could you live with a daily quest and a punishment?', ex: 'Yes, I could. The more I train, the stronger I get, so maybe it’s good.' }
  ],
  sua: 'Invent rule number five for the hunters, with the more…, the more….',
  suaEx: 'The more monsters you defeat, the more people you must protect.',
  vida: [],
  antes: [
    { q: 'You know the rules now. In the trailer, the more Jinwoo fights, the… what? Guess.', h: 'The more he fights, the …' },
    { q: 'Is the System good or dangerous for him? Why?', h: 'The stronger he gets, the more …' }
  ]
};
