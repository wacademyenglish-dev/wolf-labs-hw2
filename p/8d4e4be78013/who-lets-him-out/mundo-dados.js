/* JUJUTSU KAISEN · O MUNDO (cena I · Warm-up and The Sorcerer Rules)  19/10/2026 — formato regras.
   No lugar do mapa: warm-up de conversa e depois as regras do mundo dos feiticeiros.
   B1, já com make / let + pessoa + verbo, be made to, be allowed to. */
window.WL_MUNDO = {
  forma: 'regras',
  cena: { rot: 'Warm-up and The Sorcerer Rules', t: 'Before the trailer: who made you do things, then the rules of curses.', p: 'Answer three questions about your life. Then read the rules of the sorcerers and say if you could live with them.' },
  mundoRot: 'The Sorcerer Rules',
  guia: '<b>Warm-up and The Sorcerer Rules (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the anime under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Sorcerer Rules:</b> four rules of this world appear one at a time (curses come from fear, only sorcerers can see them, the old sorcerers make the rules, Yuji is made to eat the fingers). For each, the student taps Yes / No way / Only if… and says why, with make, let or be allowed to.',
  foto: 'capa',
  aquece: [
    { img: 'rua', q: 'What made you afraid when you were a child?', st: ['… made me afraid.'], filme: 'In this anime, people’s fear becomes invisible monsters.', mais: 'Does it still make you afraid?', ex: 'Storms made me afraid. Now I like them!' },
    { img: 'escola', q: 'What is a promise somebody made you make?', st: ['My … made me promise to …'], filme: 'Before he died, Yuji’s grandfather made him promise to help people.', mais: 'Did you keep it?', ex: 'My mother made me promise to call her every Sunday. I always do.' },
    { img: 'capa', q: 'Which teacher let you be yourself? What did he or she make you believe?', st: ['My … teacher let me …', 'He / She made me believe …'], filme: 'Gojo, Yuji’s teacher, doesn’t let the old men make all the decisions.', mais: 'Are you still in touch?', ex: 'My English teacher let me speak without fear. She made me believe I could travel.' }
  ],
  regras: [
    { img: 'rua', t: 'People’s fear and anger become curses: invisible monsters.', q: 'Could you live in a world where your fear becomes a monster?', ex: 'No way. My fears would make a very big monster!' },
    { img: 'jujutsu', t: 'Only sorcerers are allowed to fight curses. Normal people aren’t allowed to know.', q: 'Would you want to know, or would you let the sorcerers do it?', ex: 'I would want to know. Nobody should make me stay in the dark.' },
    { img: 'escola', t: 'The old sorcerers make the rules. Students aren’t allowed to say no.', q: 'Could you study in a school where you aren’t allowed to say no?', ex: 'Only if a teacher like Gojo let me ask questions.' },
    { img: 'caixa', t: 'Yuji has a curse inside him. He is made to find and eat all twenty fingers.', q: 'If you were Yuji, would you let them make you do it?', ex: 'No, I wouldn’t let them. I would run away with Gojo!' }
  ],
  sua: 'Invent rule number five for the sorcerers, with make, let or be allowed to.',
  suaEx: 'Students aren’t allowed to leave the school at night, and the teachers make them train on Sundays.',
  vida: [],
  antes: [
    { q: 'You know the rules now. In the trailer, what do the sorcerers make Yuji do? Guess.', h: 'I think they make him … / They don’t let him …' },
    { q: 'If a king of curses lived inside you, would you let him talk?', h: 'I would / wouldn’t let him … because …' }
  ]
};
