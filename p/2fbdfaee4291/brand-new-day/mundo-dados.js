/* SPIDER-MAN: BRAND NEW DAY · O MUNDO (cena I · Warm-up)  19/10/2026 — formato conversa (kit/mundo.js).
   1ª versão (First Look: o trailer mudo em pedaços) reprovada pelo Carlos depois de dar a aula: "eu quero
   conversa de warm-up mesmo… achei o opening meio confuso". Agora: cinco perguntas da vida do aluno, uma
   por vez; o filme entra numa linha só, embaixo da foto. B1, já com used to × present perfect. */
window.WL_MUNDO = {
  forma: 'conversa',
  cena: { rot: 'Warm-up', t: 'Before the trailer: your then and now.', p: 'Answer one question at a time about your life. Talk as much as you want. Then the next question.' },
  guia: '<b>Warm-up (I)</b>: a conversation, one question at a time, about the student’s life: then and now, old friends, being alone in a new place, being forgotten. Under each photo, one short line connects the question to Peter’s story, so the world comes in little by little. Let them talk; ask more with the line under the question. The chips help them start (used to…, I have… since…). Don’t correct the grammar yet: the rule comes in V.',
  foto: 'capa',
  perguntas: [
    { img: 'queens', q: 'What did you use to do after school when you were a teenager?', st: ['I used to …', 'Every day, I used to …'],
      filme: 'Peter used to be a normal student in Queens. After school, he used to fight crime.',
      mais: 'Do you still do it? Why did you stop?', ex: 'I used to play football in the street with my cousins. I stopped when I started working.' },
    { img: 'telhado', q: 'Who is a friend you have known for a very long time? How long have you known each other?', st: ['I have known … for … years.', 'We have been friends since …'],
      filme: 'Peter’s best friends were MJ and Ned. They used to know everything about him.',
      mais: 'How did you meet? What do you do together now?', ex: 'I have known Marina for twenty years. We have been friends since school.' },
    { img: 'capa', q: 'Have you ever lived alone, or moved to a place where you didn’t know anybody?', st: ['Yes, I have. When I …', 'No, I have never …'],
      filme: 'Now Peter lives alone in a small apartment. He has lived there since everybody forgot him.',
      mais: 'How did you feel the first week? What helped you?', ex: 'Yes, I have. When I moved to São Paulo, I didn’t know anybody. I felt alone for months.' },
    { img: 'feitico', q: 'Has anybody ever forgotten your name, your birthday or something important about you?', st: ['Once, my … forgot …', 'Nobody has ever …'],
      filme: 'A spell made the whole world forget Peter Parker. Nobody remembers him now.',
      mais: 'How did you feel? Did you say something?', ex: 'Once, my boss forgot my name in a meeting. I laughed, but I was a little sad.' },
    { img: 'corredor', q: 'What is something new you have started this year? How long have you done it?', st: ['I have … since …', 'I used to …, but now I …'],
      filme: 'Peter is starting again, alone: a brand new day.',
      mais: 'Is it easy or hard? Why did you start?', ex: 'I have taken guitar lessons since March. I used to think music was not for me, but now I play every night.' }
  ],
  antes: [
    { q: 'Peter is alone now. In the trailer, how long has he been alone? Guess.', h: 'He has been alone for … / since …' },
    { q: 'What did Peter use to have that he doesn’t have now?', h: 'He used to have …' }
  ]
};
