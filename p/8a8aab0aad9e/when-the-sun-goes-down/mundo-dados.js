/* FROM · O MUNDO (cena I · Could You Live Here?)  19/10/2026 — formato D (kit/mundo.js).
   No lugar do mapa: as regras da cidade, uma por vez; o aluno diz se aguentaria. Terror sem susto.
   B1, já com o zero conditional (if / when + presente, presente). */
window.WL_MUNDO = {
  forma: 'regras',
  cena: { rot: 'Warm-up and The Town Rules', t: 'Before the trailer: your rules, then the town’s rules.', p: 'Answer three questions about your life. Then read the rules of the town and say if you could live with them.' },
  mundoRot: 'The Town Rules',
  guia: '<b>Warm-up and The Town Rules (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Town Rules:</b> Four rules of the town appear one at a time (the road brings you back, everyone is inside when the sun goes down, the stone in the window, never open the door at night). For each, the student taps Yes / No way / Only if… and says why, with when or if. At the end, they invent a fifth rule for the town. Horror without scares: nothing is described, only the rules.',
  foto: 'capa',
  regras: [
    { img: 'estrada', t: 'When you try to leave, the road brings you back.', q: 'Could you live in a town you can’t leave? What do you do when you feel trapped?', ex: 'No way. When I feel trapped, I go for a long walk. Here I can’t!' },
    { img: 'capa', t: 'When the sun goes down, everybody goes inside.', q: 'Could you stay home every night? What do you usually do when it gets dark?', ex: 'Only if I have good internet. When it gets dark, I usually watch series anyway.' },
    { img: 'talisma', t: 'If the stone is in your window, your house is safe.', q: 'Could you trust a stone to keep you safe? What do you do for luck?', ex: 'Yes, I could. When I travel, I always take my grandmother’s little cross.' },
    { img: 'floresta', t: 'If someone knocks at night, you don’t open the door.', q: 'Somebody you love knocks at night. Could you keep the door closed?', ex: 'No, I couldn’t. If my mother knocks, I open the door. Always.' }
  ],
  sua: 'Invent rule number five for this town. What happens if somebody breaks it?',
  suaEx: 'If you hear music in the forest, you close your windows. If you listen, you go into the trees and never come back.',
  aquece: [
    { img: 'casa', q: 'What is a rule in your house when it gets dark?', st: ['When it gets dark, we …', 'If someone …, …'], filme: 'In this town, everybody is inside when the sun goes down.', mais: 'Who made that rule? Do you follow it?', ex: 'When it gets dark, we lock the gate and turn on the light outside.' },
    { img: 'estrada', q: 'What do you do when you get lost?', st: ['When I get lost, I …', 'If my phone dies, I …'], filme: 'A family drives into a town, and every road brings them back.', mais: 'Have you ever been really lost? Where?', ex: 'When I get lost, I ask someone in a shop. If my phone dies, I panic!' },
    { img: 'capa', q: 'Who keeps the rules in your family or at your job? What happens when people don’t follow them?', st: ['… keeps the rules.', 'When people don’t follow them, …'], filme: 'Boyd, the sheriff, keeps everyone alive with simple rules.', mais: 'Are you a person who follows rules?', ex: 'My manager keeps the rules. When people arrive late, she gets very quiet, and that’s worse than shouting.' }
  ],
  vida: [],
  antes: [
    { q: 'You know the rules now. In the trailer, what happens when someone breaks a rule? Guess.', h: 'When someone …, the creatures …' },
    { q: 'What do people in the town do when the sun goes down?', h: 'When the sun goes down, they …' }
  ]
};
