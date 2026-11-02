/* STREET FIGHTER · O MUNDO (cena I · Warm-up and Pick a Side)  19/10/2026 — formato lado.
   No lugar do mapa: warm-up de conversa e depois Ryu × Ken: quem ganha a rodada final?
   A2, já com could / couldn’t / was able to. */
window.WL_MUNDO = {
  forma: 'lado',
  cena: { rot: 'Warm-up and Pick a Side', t: 'Before the trailer: what you could do, then two old rivals.', p: 'Answer three questions about your life. Then pick a fighter and say why he could win.' },
  mundoRot: 'Pick a Side',
  guia: '<b>Warm-up and Pick a Side (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; A2: short answers are fine. <b>2 · Pick a Side:</b> Ryu or Ken, best friends and best rivals. The student picks one and says why he could win. Then tap “The teacher pushes back” and let them answer. Twice. Push for could / couldn’t / was able to.',
  q: 'The final round: Ryu or Ken. Who could win tonight?',
  aquece: [
    { img: 'fliperama', q: 'What games could you play as a child? Were you good at them?', st: ['As a child, I could …', 'I couldn’t …'], filme: 'In 1991, Street Fighter II was in every arcade.', mais: 'Who could beat you?', ex: 'As a child, I could play Mario for hours. My cousin could always beat me!' },
    { img: 'rua', q: 'Who was your best friend and your best rival when you were young?', st: ['It was …', 'He / She could …'], filme: 'Ryu and Ken had the same master. Best friends, best rivals.', mais: 'Are you still friends?', ex: 'It was my cousin Lia. She could run faster than me.' },
    { img: 'capa', q: 'Is there something you couldn’t do years ago, but you can do today?', st: ['Years ago, I couldn’t …', 'Now I can …'], filme: 'Tonight there is a final round: twenty-five years later.', mais: 'How were you able to learn it?', ex: 'Years ago, I couldn’t speak in public. Now I can, and I was able to give a talk last month.' }
  ],
  lados: [
    { img: 'dojo', nome: 'Ryu', t: 'A quiet fighter from Japan. He trains every day, and he only wants a better fight.' },
    { img: 'rua', nome: 'Ken', t: 'A fighter from the United States. Twenty-five years ago, he couldn’t beat Ryu. Tonight he wants to.' }
  ],
  ex: [
    'Ryu could win, because he trains every day and he is very calm.',
    'Ken could win. Years ago he couldn’t beat Ryu, but now he really wants it.'
  ],
  contra: [
    ['Ryu only thinks about fighting. Could he win if Ken surprises him?', 'Ken has a family and a business now. Could he still train every day?'],
    ['Twenty-five years ago, Ken couldn’t beat Ryu. Why could he beat him now?', 'Ryu was able to win before. Isn’t he still the best?']
  ],
  depois: 'Watch the trailer. Then tell me: who could win?',
  vida: [],
  antes: [
    { q: 'You picked a fighter. In the trailer, who could win the tournament? Guess.', h: 'I think … could win, because …', r: 'I think Ryu could win, because he is very calm and strong.' },
    { q: 'Twenty-five years ago, Ken couldn’t beat Ryu. Could he beat him tonight?', h: 'Yes, he could, because … / No, he couldn’t, because …', r: 'Yes, he could, because now he trains every day and he really wants to win.' }
  ]
};
