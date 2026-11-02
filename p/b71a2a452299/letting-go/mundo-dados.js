/* STAR WARS: A NEW HOPE · O MUNDO (cena I · Warm-up and Pick a Side)  19/10/2026 — formato lado.
   No lugar do mapa: warm-up de conversa e depois a escolha do Luke: ficar na fazenda × partir com o Obi-Wan.
   B1, já com -ing como substantivo (learning the Force is hard; good at flying). */
window.WL_MUNDO = {
  forma: 'lado',
  cena: { rot: 'Warm-up and Pick a Side', t: 'Before the clip: what you are good at, then a farm boy’s choice.', p: 'Answer three questions about your life. Then choose for Luke and defend it.' },
  mundoRot: 'Pick a Side',
  guia: '<b>Warm-up and Pick a Side (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Pick a Side:</b> Luke can stay on the farm or leave with Obi-Wan. The student chooses for him and defends it for thirty seconds. Then tap “The teacher pushes back” and let them answer. Twice. Push for -ing as a noun (leaving is…, staying means…, good at flying).',
  q: 'Luke is good at flying, but he is stuck on a farm. Should he stay with his family, or leave with Obi-Wan and learn the Force?',
  aquece: [
    { img: 'tatooine', q: 'What were you good at as a teenager? What did you dream about doing?', st: ['I was good at …ing.', 'I dreamed about …ing.'], filme: 'In this film, Luke is good at flying, but he is stuck on a farm.', mais: 'Do you still do it?', ex: 'I was good at drawing. I dreamed about working in animation.' },
    { img: 'cave', q: 'Who taught you something important? What did learning it change?', st: ['My … taught me …', 'Learning … changed …'], filme: 'An old man, Obi-Wan, teaches Luke about the Force.', mais: 'Have you taught it to someone?', ex: 'My grandmother taught me to cook. Learning it changed my weekends!' },
    { img: 'nave', q: 'What can you do without looking, just by feeling?', st: ['I can … without looking.'], filme: 'Luke trains with his eyes covered: trusting the Force instead of looking.', mais: 'How long did it take to learn?', ex: 'I can type without looking. Learning it took me a year.' }
  ],
  lados: [
    { img: 'tatooine', nome: 'Stay on the farm', t: 'His uncle and aunt need him. Staying means being safe, and working with his family.' },
    { img: 'nave', nome: 'Leave with Obi-Wan', t: 'His father was a Jedi. Leaving means learning the Force and helping a princess.' }
  ],
  ex: [
    'He should stay. Leaving his family alone is dangerous, and working on the farm is important too.',
    'He should leave. Staying on a farm forever is sad, and learning the Force is his chance.'
  ],
  contra: [
    ['Luke is good at flying. Isn’t staying on a farm a waste of his talent?', 'Without leaving, he will never know who his father was. Is being safe more important than knowing?'],
    ['He has never been in a war. Isn’t fighting the Empire too dangerous for a farm boy?', 'His uncle and aunt raised him. Isn’t leaving them a kind of betrayal?']
  ],
  depois: 'Watch the clip. Then tell me: is learning the Force as easy as Luke thinks?',
  vida: [],
  antes: [
    { q: 'You chose for Luke. In the clip, what is he trying to learn? Guess.', h: 'He is trying to learn … / Learning … is …' },
    { q: 'Is fighting with your eyes closed possible? What helps?', h: 'Fighting with … is … Closing your eyes …' }
  ]
};
