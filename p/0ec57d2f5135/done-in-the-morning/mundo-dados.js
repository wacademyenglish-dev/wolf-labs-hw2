/* SEVERANCE (B1) · O MUNDO (cena I · Warm-up and The Lumon Rules)  19/10/2026 — formato regras (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois as regras da Lumon; o aluno diz se aguentaria.
   B1, já com a voz passiva. */
window.WL_MUNDO = {
  forma: 'regras',
  cena: { rot: 'Warm-up and The Lumon Rules', t: 'Before the trailer: your job, then a job where nothing is explained.', p: 'Answer three questions about your life. Then read the rules of Lumon and say if you could work there.' },
  mundoRot: 'The Lumon Rules',
  guia: '<b>Warm-up and The Lumon Rules (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Lumon Rules:</b> four rules of the company appear one at a time (a chip is put in your brain, the founder is loved, nothing is explained, the work is checked). For each, the student taps Yes / No way / Only if… and says why. The rules are already in the passive; at the end they write a fifth rule in the passive.',
  foto: 'capa',
  aquece: [
    { img: 'mesa', q: 'Have you ever had a job that felt very boring? What was done there?', st: ['I had a job where … was / were …'], filme: 'In this show, numbers are sorted all day, and nobody knows why.', mais: 'Why did you stay?', ex: 'I had a job where invoices were checked all day. I stayed for the money.' },
    { img: 'estatua', q: 'What rules were you taught at school that you never understood?', st: ['We were taught to …', 'We weren’t told why.'], filme: 'At Lumon, the workers are taught to love the founder, but they aren’t told why.', mais: 'Do you follow any of them now?', ex: 'We were taught to stand up when the teacher came in. We weren’t told why.' },
    { img: 'cabras', q: 'What is something done in your city or job that nobody can explain?', st: ['… is done every …', 'Nobody knows why it is done.'], filme: 'In one hidden room, baby goats are raised. Nothing is explained.', mais: 'Have you ever asked?', ex: 'The street in front of my house is painted every year, and nobody knows why.' }
  ],
  regras: [
    { img: 'neve', t: 'A chip is put in your brain. At work, your life outside is forgotten.', q: 'If a chip like this were offered to you, would you accept it?', ex: 'No way. If it were offered to me, I would say no. I want to remember my whole life.' },
    { img: 'estatua', t: 'The founder’s words are painted on the walls and repeated every day.', q: 'Could you work in a place where you are told what to love?', ex: 'Only if the salary is very good! But I wouldn’t repeat the words.' },
    { img: 'cabras', t: 'Nothing is explained. Questions are not encouraged.', q: 'Could you do a job if the reason was never explained?', ex: 'No, I couldn’t. I need to know why something is done.' },
    { img: 'mesa', t: 'Your work is checked by a manager every day.', q: 'Could you work if everything you did was checked?', ex: 'Yes, I could. My work is already checked by my boss every day!' }
  ],
  sua: 'Write rule number five for Lumon, in the passive. Would people follow it?',
  suaEx: 'Phones are not allowed. They are taken at the door and given back at six.',
  vida: [],
  antes: [
    { q: 'You know Lumon’s rules now. In the trailer, what are the workers told? What aren’t they told?', h: 'They are told … They aren’t told …' },
    { q: 'Who do you think the numbers are sorted for?', h: 'I think they are sorted for … / by …' }
  ]
};
