/* DISCLOSURE DAY · O MUNDO (cena I · Warm-up and The Secret File)  19/10/2026 — formato mala (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois cinco documentos de oitenta anos de “it is said”.
   B2, já com passive reporting (it is said that… / he is believed to have…). */
window.WL_MUNDO = {
  forma: 'mala',
  cena: { rot: 'Warm-up and The Secret File', t: 'Before the trailer: what is said, then eighty years of secrets.', p: 'Answer three questions about your life. Then open the file one document at a time and report what is believed.' },
  mundoRot: 'The Secret File',
  guia: '<b>Warm-up and The Secret File (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Secret File:</b> five documents come out of a secret file, one at a time: Roswell 1947, Project Blue Book, the Navy videos, the stolen file, the TV news. With each, the student reports what is said or believed, like a careful journalist. At the end, they say what the file is believed to prove.',
  foto: 'capa',
  aquece: [
    { img: 'roswell', q: 'What is something that is said about your city that may not be true?', st: ['It is said that …', 'People say that …'], filme: 'In 1947, it was said that a “flying disc” fell near Roswell.', mais: 'Do you believe it?', ex: 'It is said that the river under our main street is haunted. I don’t believe it, but I don’t go there at night.' },
    { img: 'cockpit', q: 'Have you ever seen something in the sky you couldn’t explain?', st: ['I once saw …', 'It was probably …'], filme: 'Navy pilots filmed small objects moving in impossible ways.', mais: 'Who were you with? What did they say?', ex: 'I once saw a line of lights in the sky. My friend said they were satellites.' },
    { img: 'antena', q: 'Do you think governments should tell everything they know? Why?', st: ['I think they should …', 'Some secrets …'], filme: 'In the film, a man steals a secret file from the government.', mais: 'Is there a secret you think should never be told?', ex: 'I think they should tell most things, but some secrets probably protect people.' }
  ],
  itens: [
    { img: 'roswell', nome: 'Roswell, 1947', q: 'Strange metal pieces were found by a farmer. What was first announced? What is still said today?', ex: 'A “flying disc” was first announced. Today, it is still said that something else fell there.' },
    { img: 'arquivos', nome: 'Project Blue Book', q: 'Twelve thousand reports were collected. What is believed about the ones that were never explained?', ex: 'Some of them are still said to be unidentified. Nobody is thought to know what they were.' },
    { img: 'cockpit', nome: 'the Navy videos', q: 'The pilots are believed to have seen something real. What could it have been?', ex: 'It is thought to have been a drone, but some people believe it was something from another planet.' },
    { img: 'antena', nome: 'the stolen file', q: 'A man steals a file. What is it believed to contain?', ex: 'It is believed to contain proof that we are not alone.' },
    { img: 'estudio', nome: 'the TV news', q: 'Nobody official says “we know”. Why does the news say “it is believed” instead?', ex: 'Because they can’t name the source. The passive hides who is talking.' }
  ],
  revelaRot: 'What does the file say?',
  revela: 'In Disclosure Day, a man steals a government file that is said to prove we are not alone. For 79 years, the truth is believed to have been hidden.',
  conta: 'Report the whole story like a careful TV journalist, without saying “we know”.',
  contaEx: 'It is said that something fell near Roswell in 1947. Thousands of reports are believed to have been hidden, and now a file is thought to prove it.',
  vida: [],
  antes: [
    { q: 'You opened the file. In the trailer, what is the stolen file believed to contain?', h: 'It is believed to contain … / It is said that …' },
    { q: 'Who is the man thought to be?', h: 'He is thought to be … / He is said to have …' }
  ]
};
