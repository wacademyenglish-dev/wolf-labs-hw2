/* THE OFFICE (A1, Wash Your Hands) · O MUNDO (cena I · Warm-up and Dwight’s Phone)  19/10/2026 — formato celular.
   No lugar do mapa: warm-up de conversa e depois o celular do Dwight numa manhã de trote.
   A1, já com imperativos (Don’t touch!, Let’s…, Please…). */
window.WL_MUNDO = {
  forma: 'celular',
  cena: { rot: 'Warm-up and Dwight’s Phone', t: 'Before the clip: your rules, then a very strange morning at the office.', p: 'Answer three questions about your life. Then read Dwight’s messages out loud and say what is happening.' },
  mundoRot: 'Dwight’s Phone',
  guia: '<b>Warm-up and Dwight’s Phone (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). A1: short answers are fine. <b>2 · Dwight’s Phone:</b> the screen becomes Dwight’s phone on the morning his desk disappears. Messages arrive one at a time, full of orders (Don’t touch…, Come here…, Let’s…); the student reads each one out loud and says what is happening. At the end they answer the last message with an order.',
  foto: 'escritorio',
  aquece: [
    { img: 'cidade', q: 'Where do you work or study? Is it exciting or a little boring?', st: ['I work at … / I study at …', 'It is …'], filme: 'In this show, people sell paper on the phone, all day.', mais: 'What time do you start?', ex: 'I work at a bank. It is a little boring. I start at nine.' },
    { img: 'chefe', q: 'What is a rule your boss or teacher always says?', st: ['My … always says: “…”'], filme: 'Michael is the boss. He always says: “Let’s have a party!”', mais: 'Do you like the rule?', ex: 'My teacher always says: “Don’t use your phone in class!”' },
    { img: 'gelatina', q: 'Did you ever play a prank on a friend? What happened?', st: ['Once, I …'], filme: 'Jim loves pranks. Dwight is very serious.', mais: 'Was your friend angry?', ex: 'Once, I hid my brother’s phone. He was very angry!' }
  ],
  dono: 'Dwight’s phone', onde: 'Scranton · 8:55 AM',
  msgs: [
    { de: 'Jim', hora: '8:55 AM', t: 'Good morning, Dwight! Come to the office early today. 😊', q: 'Who is Jim? Why does he want Dwight to come early?', ex: 'Jim is his colleague. I think he has a prank!' },
    { de: 'Dwight', hora: '9:01 AM', eu: 1, t: 'WHERE IS MY DESK??? Don’t touch my things! Give it back NOW!', q: 'What is the problem? How does Dwight feel?', ex: 'His desk isn’t there. He is very angry!' },
    { de: 'Pam', hora: '9:03 AM', t: 'Calm down, Dwight. Look in the bathroom. 🤭', q: 'Where is the desk? Is Pam helping?', ex: 'The desk is in the bathroom! Pam is helping Jim.' },
    { de: 'Michael', hora: '9:05 AM', t: 'Let’s have a meeting about this. Everybody, come to the conference room!', q: 'What does the boss want? Is it a good idea?', ex: 'He wants a meeting. It is not a good idea!' }
  ],
  responde: 'You are Dwight. Answer Jim, out loud, with an order.',
  respondeEx: 'Jim! Put my desk back now! And don’t touch my stapler!',
  vida: [],
  antes: [
    { q: 'You read Dwight’s phone. In the clip, what does Jim say to him? Guess.', h: 'Jim says: “Don’t …” / “Look at …”' },
    { q: 'Your desk is missing. What do you say to your team?', h: '“Give me back …!” / “Don’t touch …!”' }
  ]
};
