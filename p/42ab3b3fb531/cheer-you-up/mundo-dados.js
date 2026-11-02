/* PLURIBUS · O MUNDO (cena I · Warm-up and Carol’s Phone)  19/10/2026 — formato celular (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois o celular da Carol na manhã em que todo mundo acordou feliz.
   A2, já com os phrasal verbs separáveis (cheer her up, figure it out, turn it off). */
window.WL_MUNDO = {
  forma: 'celular',
  cena: { rot: 'Warm-up and Carol’s Phone', t: 'Before the trailer: your mornings, then a very strange morning.', p: 'Answer three questions about your life. Then read Carol’s messages out loud and say what is happening.' },
  mundoRot: 'Carol’s Phone',
  guia: '<b>Warm-up and Carol’s Phone (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Carol’s Phone:</b> the screen becomes Carol’s phone on the morning everybody on Earth woke up happy. Messages arrive one at a time; the student reads each one out loud and says what is happening. At the end they answer the last message, speaking. The phrasal verbs (cheer you up, figure it out, turn it off) are already in the messages: let the student notice them, the rule comes later.',
  foto: 'casa',
  aquece: [
    { img: 'manha', q: 'What is the first thing that cheers you up in the morning?', st: ['… cheers me up.', 'In the morning, I …'], filme: 'In this show, one morning, everybody on Earth wakes up happy.', mais: 'And what puts you in a bad mood?', ex: 'A hot coffee cheers me up. My alarm puts me in a bad mood!' },
    { img: 'casa', q: 'When you are in a bad mood, do you want people to cheer you up, or to leave you alone?', st: ['I want them to cheer me up.', 'I want them to leave me alone.'], filme: 'Carol is the only person who is not happy. The whole world wants to cheer her up.', mais: 'Who is the best person to cheer you up?', ex: 'I want them to leave me alone for one hour. Then my sister can cheer me up.' },
    { img: 'pergunta', q: 'What is a mystery in your life that you want to figure out?', st: ['I want to figure out …', 'I can’t figure out …'], filme: 'Carol wants to figure out why everybody is happy.', mais: 'Have you tried to figure it out? How?', ex: 'I want to figure out why my cat wakes me up at 5 AM.' }
  ],
  dono: 'Carol’s phone', onde: 'Albuquerque · 7:00 AM',
  msgs: [
    { de: 'Helen', hora: '7:02 AM', t: 'Good morning, Carol!! 😊 What a beautiful day. Everybody is so happy!', q: 'Who is Helen? Is this a normal message from her?', ex: 'Helen is her friend, I think. It’s not normal: she is too happy, with a lot of emojis.' },
    { de: 'Unknown number', hora: '7:05 AM', t: 'Hello, Carol. We know you are sad today. Is there anything we could do to cheer you up?', q: 'Who could “we” be? How does Carol feel now?', ex: 'Maybe it’s everybody, the whole world. Carol must feel scared and confused.' },
    { de: 'Bank', hora: '7:09 AM', t: 'Good news! We have turned off all your bills. You don’t need to pay anything. Have a happy day! 😊', q: 'Would this message make you happy or scared? Why?', ex: 'Scared! A bank never gives you money. Something is very wrong.' },
    { de: 'Carol', hora: '7:12 AM', eu: 1, t: 'Who is this? Why is everybody so happy? I need to figure this out.', q: 'What should Carol do now: stay home, or go out and figure it out?', ex: 'She should go out and figure it out, but she should be careful.' },
    { de: 'Unknown number', hora: '7:13 AM', t: 'We just want you to be happy, Carol. Can we pick you up? 😊', q: 'Would you say yes? What do you think happens if she says yes?', ex: 'No way! I think if she says yes, she becomes happy like everybody.' }
  ],
  responde: 'You are Carol. Answer the last message, out loud. What do you say?',
  respondeEx: 'No, thank you. Don’t pick me up. I want to figure out what is happening first.',
  vida: [],
  antes: [
    { q: 'You read Carol’s phone. In the trailer, how do people try to cheer her up? Guess.', h: 'I think they … to cheer her up.' },
    { q: 'If you were Carol, what would you do first: run away, or figure it out?', h: 'I would … / I would try to figure it out.' }
  ]
};
