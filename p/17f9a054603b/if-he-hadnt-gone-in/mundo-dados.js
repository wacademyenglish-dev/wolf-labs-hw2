/* SOLO LEVELING (B2, The Replay) · O MUNDO (cena I · Warm-up and The System)  19/10/2026 — formato celular.
   No lugar do mapa: warm-up de conversa e depois as janelas azuis do Sistema chegando ao Jinwoo, uma por vez.
   B2, já com o third conditional. */
window.WL_MUNDO = {
  forma: 'celular',
  cena: { rot: 'Warm-up and The System', t: 'Before the trailer: the doors you opened, then a blue window only he can see.', p: 'Answer three questions about your life. Then read the System’s messages out loud and say what would have happened otherwise.' },
  mundoRot: 'The System',
  guia: '<b>Warm-up and The System (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the anime under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The System:</b> the screen becomes the blue window that only Jinwoo can see. Messages arrive one at a time; the student reads each one out loud and imagines the other past (if he hadn’t…, he would have…). At the end they answer the System, speaking.',
  foto: 'estatua',
  aquece: [
    { img: 'livro', q: 'If you hadn’t discovered your favorite series, what would you have watched instead?', st: ['If I hadn’t found …, I would have …'], filme: 'This story started as a web novel. If readers hadn’t loved it, it would have stayed small.', mais: 'Who showed it to you?', ex: 'If I hadn’t found Dark, I would have watched more comedies.' },
    { img: 'corredor', q: 'Is there a hobby you would never have started if a friend hadn’t shown it to you?', st: ['If my … hadn’t …, I would never have …'], filme: 'Millions of people found the story because of the art.', mais: 'Do you still do it?', ex: 'If my cousin hadn’t shown me surfing, I would never have tried it.' },
    { img: 'estatua', q: 'What one choice changed your life? What would have happened without it?', st: ['If I hadn’t …, I wouldn’t have …'], filme: 'One door in a dungeon changed everything for Jinwoo.', mais: 'Are you glad?', ex: 'If I hadn’t moved to Curitiba, I wouldn’t have met my wife.' }
  ],
  dono: 'THE SYSTEM', onde: 'Only Sung Jinwoo can see this window',
  msgs: [
    { de: 'System', hora: 'Day 1', t: '[You have survived the Double Dungeon.] You are the only one. Everyone else turned back… or fell.', q: 'What would have happened if he had turned back too?', ex: 'If he had turned back, he would have lived, but the System would never have chosen him.' },
    { de: 'System', hora: 'Day 1', t: '[You have been chosen as a Player.] Daily quest: 100 push-ups, 100 sit-ups, 100 squats, 10 km run.', q: 'If you got this quest, what would you have said?', ex: 'If I had got it, I would have said: no way, not today!' },
    { de: 'System', hora: 'Day 2', t: '[Warning: Daily quest not completed.] Penalty: you will be sent to the Penalty Zone.', q: 'What could have happened if he had finished the quest?', ex: 'If he had finished it, he wouldn’t have been punished.' },
    { de: 'System', hora: 'Day 30', t: '[Level up!] Strength +10. You are not the weakest hunter anymore.', q: 'If he hadn’t gone into that dungeon, where would he be now?', ex: 'He would still be the weakest hunter, and his mother’s bills wouldn’t have been paid.' }
  ],
  responde: 'You are Jinwoo. Answer the System, out loud: was it worth it?',
  respondeEx: 'Yes. If I hadn’t gone in, I would have stayed weak forever. Give me the next quest.',
  vida: [],
  antes: [
    { q: 'You read the System. In the trailer, what would have happened if Jinwoo hadn’t gone in?', h: 'If he hadn’t gone in, he would have …' },
    { q: 'Which choice in the trailer could have ended everything?', h: 'If he had …, it could have …' }
  ]
};
