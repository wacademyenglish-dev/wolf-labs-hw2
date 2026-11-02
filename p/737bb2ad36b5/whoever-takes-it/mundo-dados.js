/* THE LORD OF THE RINGS (B2) · O MUNDO (cena I · Warm-up and Pick a Side)  19/10/2026 — formato lado.
   No lugar do mapa: warm-up de conversa e depois a escolha: destruir o Anel × usá-lo para o bem.
   B2, já com whoever / whatever / wherever / however. */
window.WL_MUNDO = {
  forma: 'lado',
  cena: { rot: 'Warm-up and Pick a Side', t: 'Before the trailer: what you never let go, then one Ring.', p: 'Answer three questions about your life. Then decide what to do with the Ring and defend it.' },
  mundoRot: 'Pick a Side',
  guia: '<b>Warm-up and Pick a Side (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Pick a Side:</b> destroy the Ring, or use it to fight the Dark Lord? The student picks a side and defends it for thirty seconds. Then tap “The teacher pushes back” and let them answer. Twice. Push for whoever / whatever / however.',
  q: 'The Ring gives enormous power to whoever holds it. Destroy it, or use it to defeat the Dark Lord?',
  aquece: [
    { img: 'forja', q: 'Is there something you can’t stop using, whatever happens?', st: ['Whatever happens, I can’t stop …'], filme: 'In this story, whoever holds the Ring wants to keep it.', mais: 'Could you live a week without it?', ex: 'Whatever happens, I can’t stop checking my phone.' },
    { img: 'caverna', q: 'However much you have, what do you always want more of?', st: ['However many / much …, I always want more.'], filme: 'Gollum had the Ring for five hundred years, and he was never happy.', mais: 'Why do you think that is?', ex: 'However many books I have, I always want more.' },
    { img: 'condado', q: 'Wherever you go, what do you always take with you?', st: ['Wherever I go, I take …'], filme: 'Frodo must carry the Ring wherever the road takes him.', mais: 'Why that object?', ex: 'Wherever I go, I take a small photo of my kids.' }
  ],
  lados: [
    { img: 'forja', nome: 'Destroy it', t: 'Throw it into the volcano where it was made, however hard the road is.' },
    { img: 'rio', nome: 'Use it', t: 'Whoever holds it is powerful. Use that power to defeat the Dark Lord, then decide.' }
  ],
  ex: [
    'Destroy it. Whoever holds it changes, however good they are.',
    'Use it. Whatever the risk, it’s the only weapon strong enough to stop the Dark Lord.'
  ],
  contra: [
    ['The road to the volcano is long and dangerous. Whoever carries it might fail. Is it worth it?', 'With the Ring, the war could end fast. Why throw away whatever helps us?'],
    ['A king had the Ring and kept it. Whoever uses it wants to keep it. Why would you be different?', 'Gollum held it for five hundred years. However strong you are, won’t it change you?']
  ],
  depois: 'Watch the trailer. Then tell me: whoever holds the Ring, what happens to them?',
  vida: [],
  antes: [
    { q: 'You chose a side. In the film, what happens to whoever holds the Ring? Guess.', h: 'Whoever holds it …' },
    { q: 'However brave Frodo is, will the Ring change him?', h: 'However …, I think …' }
  ]
};
