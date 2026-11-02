/* SILO · O MUNDO (cena I · Warm-up and The Silo Rules)  19/10/2026 — formato regras (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois as regras do silo; o aluno diz se aguentaria.
   B1, já com perguntas indiretas (do you know why… / I wonder if…). */
window.WL_MUNDO = {
  forma: 'regras',
  cena: { rot: 'Warm-up and The Silo Rules', t: 'Before the trailer: your questions, then the rules underground.', p: 'Answer three questions about your life. Then read the rules of the silo and say if you could live with them.' },
  mundoRot: 'The Silo Rules',
  guia: '<b>Warm-up and The Silo Rules (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Silo Rules:</b> four rules of the silo appear one at a time (144 floors and no elevator, the screen is the only window, old objects are illegal, never say you want to go outside). For each, the student taps Yes / No way / Only if… and says why, with an indirect question when they can (I wonder if…, I’d want to know why…). At the end, they invent a fifth rule.',
  foto: 'capa',
  aquece: [
    { img: 'escadaria', q: 'Can you tell me how many stairs you climb every day?', st: ['I don’t know how many …', 'I live on the … floor.'], filme: 'In this show, ten thousand people live in a tower under the ground, with no elevators.', mais: 'Do you take the stairs or the elevator?', ex: 'I don’t know how many, but I live on the fourth floor and there is no elevator!' },
    { img: 'oficina', q: 'Do you know how something at home works that most people don’t?', st: ['I know how … works.', 'I don’t know how …'], filme: 'Juliette is an engineer. She wants to know how everything works.', mais: 'Who taught you?', ex: 'I know how our water pump works. My father taught me.' },
    { img: 'reliquia', q: 'Is there a question people in your family never ask? Why not?', st: ['Nobody asks why …', 'I wonder if …'], filme: 'In the silo, nobody knows who built it, or why they are there.', mais: 'Would you like to ask it?', ex: 'Nobody asks why my uncle moved away. I wonder if he is happy.' }
  ],
  regras: [
    { img: 'escadaria', t: 'There are 144 floors and no elevators. You walk.', q: 'Could you live with it? Do you know how long it would take you to go down?', ex: 'Only if I live near the middle! I don’t know how long it takes, but probably a whole day.' },
    { img: 'tela', t: 'The only window is a screen. It shows a dead world outside.', q: 'Could you trust the screen? Would you want to know if it tells the truth?', ex: 'No way. I would want to know if the screen is real.' },
    { img: 'reliquia', t: 'Old objects from before are illegal. You give them to the police.', q: 'Could you give away an old object from your family? Do you know why it’s illegal?', ex: 'No, I couldn’t. I don’t know why it’s illegal, but I wonder if they are hiding the past.' },
    { img: 'capa', t: 'Never say you want to go outside. If you say it, you are sent outside.', q: 'Could you keep that wish a secret? Do you know what happens outside?', ex: 'Yes, I could. Nobody knows what happens outside, and I don’t want to find out.' }
  ],
  sua: 'Invent rule number five for the silo. Do you know why the rule exists?',
  suaEx: 'Nobody can climb above floor 100 at night. I don’t know why, but I wonder if something is up there.',
  vida: [],
  antes: [
    { q: 'You know the silo rules now. In the trailer, what does Juliette want to know? Guess.', h: 'She wants to know why … / if …' },
    { q: 'Do you know who built the silo? What do you think?', h: 'I don’t know who … / I wonder if …' }
  ]
};
