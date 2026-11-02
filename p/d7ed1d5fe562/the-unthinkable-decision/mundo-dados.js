/* AVENGERS: DOOMSDAY (B2) · O MUNDO (cena I · Warm-up and Pick a Side)  19/10/2026 — formato lado.
   No lugar do mapa: warm-up de conversa e depois a decisão dos heróis divididos: atacar agora × esperar.
   B2, já com may not be able to, far + comparativo, unless / otherwise. */
window.WL_MUNDO = {
  forma: 'lado',
  cena: { rot: 'Warm-up and Pick a Side', t: 'Before the trailer: your bigger-than-expected moments, then a divided team.', p: 'Answer three questions about your life. Then choose the heroes’ plan and defend it.' },
  mundoRot: 'Pick a Side',
  guia: '<b>Warm-up and Pick a Side (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Pick a Side:</b> the heroes are divided: attack Doom now, or wait and prepare? The student picks a plan and defends it for thirty seconds. Then tap “The teacher pushes back” and let them answer. Twice. Push for may not be able to, far + comparative, unless / otherwise.',
  q: 'Doctor Doom is far more intelligent than Thanos. Should the heroes attack him now, or wait and prepare?',
  aquece: [
    { img: 'oficina', q: 'What started small in your life and became far bigger than you expected?', st: ['… started small, but it became far …'], filme: 'In 2008, one film about a man in an armor started more than thirty films.', mais: 'Did you plan it?', ex: 'My sourdough hobby started small, but it became far bigger: I sell bread now!' },
    { img: 'multiverso', q: 'If there were another version of you in another universe, how would they be different?', st: ['The other me may be far …'], filme: 'Now there are many universes, and far more dangerous enemies.', mais: 'Would you like to meet them?', ex: 'The other me may be far braver. They may live in Japan!' },
    { img: 'capa', q: 'When your team or family is divided, what happens unless somebody decides?', st: ['Unless somebody decides, …', 'Otherwise, …'], filme: 'The heroes are divided, and every choice costs something.', mais: 'Who usually decides?', ex: 'Unless somebody decides, we lose a week. Otherwise, my mother decides for us.' }
  ],
  lados: [
    { img: 'trono', nome: 'Attack now', t: 'Doom is getting stronger every day. Unless they act now, they may not be able to stop him.' },
    { img: 'ceu', nome: 'Wait and prepare', t: 'Last time, victory cost far more than they thought. Otherwise, they may lose everyone.' }
  ],
  ex: [
    'Attack now. Unless they act fast, Doom will be far too strong to stop.',
    'Wait. They may not be able to win if they are divided. Otherwise, they lose more heroes.'
  ],
  contra: [
    ['The team is divided. They may not be able to win a fight like that. Isn’t it too soon?', 'Every day, Doom gets far stronger. Unless they attack, won’t it be too late?'],
    ['Doom is far more intelligent. He may already expect an attack. What then?', 'Waiting cost them half the universe last time. Otherwise, why wait?']
  ],
  depois: 'Watch the trailer. Then tell me: will it be for nothing unless they work together?',
  vida: [],
  antes: [
    { q: 'You chose a plan. In the trailer, why may the heroes not be able to win? Guess.', h: 'They may not be able to … because Doom is far …' },
    { q: 'The heroes are divided. What will happen unless they work together?', h: 'Unless they …, … / Otherwise, …' }
  ]
};
