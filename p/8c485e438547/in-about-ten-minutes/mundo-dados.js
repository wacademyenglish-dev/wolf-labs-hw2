/* THE OFFICE (A2, In About Ten Minutes) · O MUNDO (cena I · Warm-up and Jim’s Phone)  19/10/2026 — formato celular.
   No lugar do mapa: warm-up de conversa e depois o celular do Jim no dia do trote do relógio.
   A2, já com at / on / in (tempo). */
window.WL_MUNDO = {
  forma: 'celular',
  cena: { rot: 'Warm-up and Jim’s Phone', t: 'Before the clip: your times and days, then one long afternoon.', p: 'Answer three questions about your life. Then read Jim’s messages out loud and say what is happening, and when.' },
  mundoRot: 'Jim’s Phone',
  guia: '<b>Warm-up and Jim’s Phone (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the show under the photo). Let them talk; A2: short answers are fine. <b>2 · Jim’s Phone:</b> the screen becomes Jim’s phone on the afternoon of the clock prank. Messages arrive one at a time, full of times and days (at two, on Friday, in ten minutes); the student reads each one out loud and says what is happening. At the end they answer the last message.',
  foto: 'relogio',
  aquece: [
    { img: 'rua', q: 'What time do you start work or school? At what time are you most tired?', st: ['I start at …', 'I am most tired at … / in the …'], filme: 'In this office, work starts at nine and ends at five.', mais: 'And on Fridays?', ex: 'I start at eight. I am most tired at three in the afternoon.' },
    { img: 'torta', q: 'What did you eat for lunch on Sunday? Did you eat too much?', st: ['On Sunday, I ate …'], filme: 'At noon, the boss eats a whole chicken pot pie in ten minutes.', mais: 'Who cooked it?', ex: 'On Sunday, I ate lasagna. Yes, I ate too much!' },
    { img: 'relogio', q: 'Were you ever late, or early, because of a wrong clock?', st: ['Once, I was … because …'], filme: 'In this clip, the team changes the clocks.', mais: 'What did you do?', ex: 'Once, I was an hour early because my phone was wrong.' }
  ],
  dono: 'Jim’s phone', onde: 'Scranton · Friday',
  msgs: [
    { de: 'Pam', hora: '12:10 PM', t: 'Michael just ate a WHOLE chicken pot pie. In ten minutes. 😳', q: 'When did Michael eat? How much did he eat?', ex: 'He ate at noon. He ate a whole pie in ten minutes!' },
    { de: 'Pam', hora: '2:05 PM', t: 'He is asleep at his desk. It’s Friday. Everybody wants to go home…', q: 'What is Michael doing at two o’clock? What does everybody want?', ex: 'He is sleeping at his desk. Everybody wants to go home early on Friday.' },
    { de: 'Jim', hora: '2:07 PM', eu: 1, t: 'I have an idea. Let’s change the clock on his computer to 5:00. Dwight, change your watch.', q: 'What is Jim’s plan?', ex: 'He wants Michael to think it is five o’clock, so everybody can go home.' },
    { de: 'Dwight', hora: '2:09 PM', t: 'This is wrong. But OK. My watch says 5:00 now. He will wake up in a few minutes.', q: 'Will Michael believe it? What will he say when he wakes up?', ex: 'Yes, he will. He will say: “It’s five o’clock! Go home!”' }
  ],
  responde: 'You are Jim. It is really 2:30. Write back to Pam, out loud: what will you do in ten minutes?',
  respondeEx: 'In ten minutes, Michael will wake up. At three, we will all be at home!',
  vida: [],
  antes: [
    { q: 'You read Jim’s phone. What time does Michael think it is when he wakes up?', h: 'He thinks it is five o’clock. It is really …' },
    { q: 'What time do you usually go home? On which days do you finish early?', h: 'I usually go home at … On Fridays, I …' }
  ]
};
