/* SEVERANCE (B1) · O LORE (cena I · The Story)  09/10/2026 — B1, já com a voz passiva (it was done, they are told, by + agente).
   A outra aula da série (B2, a sala de bem-estar) conta a vida dividida do Mark; esta conta como a série foi feita e a empresa por dentro. */
window.WL_LORE = {
  mapa: 'mapa', alt: 'The plan of a strange company floor, at night',
  rotulo: 'THE LUMON FILE', anda: 'Go to the next room',
  fimTit: 'A boring job that became a show, and a company where nothing is explained.',
  fim: 'Now you know Lumon. Now the trailer.',
  antes: [
    { q: 'You know Lumon now. In the trailer, what are the workers told? What aren’t they told?', h: 'They are told … They aren’t told …', r: 'They are told the work is important. They aren’t told what the numbers mean.' },
    { q: 'Who do you think the numbers are sorted for?', h: 'I think they are sorted for … / by …', r: 'I think they are sorted for someone at the top of the company, someone secret.' }
  ],
  paradas: [
    { k: 'THE IDEA', nome: 'The Idea', dur: 'A BORING JOB', x: 16, y: 28, img: 'capa',
      h: 'A show born in a boring office',
      t: 'Severance was created by Dan Erickson. The idea came to him when he had a very boring job: he wished he could skip the hours at work. The show was directed by Ben Stiller and was released in 2022.',
      q: 'Have you ever had a job that felt very boring? What was done there?', st: ['I had a job where … was done.', 'The hours were …'],
      ex: 'I had a job where invoices were checked all day.' },
    { k: 'THE CHIP', nome: 'The Chip', dur: 'THE PROCEDURE', x: 38, y: 54, img: 'neve',
      h: 'The memory is cut in two',
      t: 'A small chip is put in the brain of some workers. The procedure is done in a few minutes. After it, the memory is cut in two: at work, life outside is forgotten; at home, work is forgotten.',
      q: 'If a chip like this were offered to you, would you accept it?', st: ['If it were offered to me, I would …', 'because …'],
      ex: 'If it were offered to me, I would say no, because I want to remember my whole life.' },
    { k: 'KIER', nome: 'Kier', dur: 'THE FOUNDER', x: 60, y: 28, img: 'estatua',
      h: 'A founder who is almost a god',
      t: 'Lumon was founded by Kier Eagan, many years ago. His words are painted on walls and repeated by managers. His statues are everywhere. The workers are taught to love him, but they aren’t told why.',
      q: 'What rules were you taught at school that you never understood?', st: ['We were taught to …', 'We were never told why.'],
      ex: 'We were taught to stand up when the teacher came in.' },
    { k: 'THE GOATS', nome: 'The Goats', dur: 'A HIDDEN ROOM', x: 80, y: 60, img: 'cabras',
      h: 'Things are done, nobody says why',
      t: 'In one hidden room, baby goats are raised by a worker. In another, numbers are sorted. Nothing is explained. Questions are not encouraged. Things are done, and nobody says by whom, or for what.',
      q: 'What is something done in your city or job that nobody can explain?', st: ['… is done every …', 'Nobody knows why it is done.'],
      ex: 'The street in front of my house is painted every year.' },
    { k: 'MDR', nome: 'MDR', dur: 'THE NUMBERS', x: 46, y: 82, img: 'mesa',
      h: 'Numbers that are sorted',
      t: 'Mark works in Macrodata Refinement with three colleagues. Numbers are shown on old screens, and scary ones are put into boxes. The work is checked by a manager. Why is it done? They are never told.',
      q: 'What is the most repetitive task you have ever been given?', st: ['I was given …', 'It was done every …'],
      ex: 'I was given the job of folding letters.' }
  ]
};
