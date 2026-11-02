/* SUPERGIRL · O MUNDO (cena I · Warm-up and Kara’s Bag)  19/10/2026 — formato mala (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois a mala da Kara, um objeto por vez, do sol vermelho à Terra.
   B2, já com used to × be used to × get used to. */
window.WL_MUNDO = {
  forma: 'mala',
  cena: { rot: 'Warm-up and Kara’s Bag', t: 'Before the trailer: what you got used to, then a girl from a red sun.', p: 'Answer three questions about your life. Then open Kara’s bag one thing at a time and say what she used to do, and what she is getting used to.' },
  mundoRot: 'Kara’s Bag',
  guia: '<b>Warm-up and Kara’s Bag (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Kara’s Bag:</b> five things come out of Kara’s bag, one at a time: Argo City, the red sun, Krypto, the window on Earth, the city where Clark lives. With each, the student contrasts what she used to do with what she is (not) used to or getting used to. At the end, they tell her story in their words.',
  foto: 'capa',
  aquece: [
    { img: 'argo', q: 'Where did you use to spend your childhood holidays?', st: ['I used to spend them …'], filme: 'Kara grew up in a city floating in space, under a red sun.', mais: 'Do you still go there?', ex: 'I used to spend them at my grandparents’ farm. I haven’t been there for years.' },
    { img: 'janela', q: 'What is something you are getting used to these days?', st: ['I’m getting used to …', 'I’m not used to … yet.'], filme: 'On Earth, Kara is still getting used to people, noise and food.', mais: 'Is it easy or hard?', ex: 'These days, I’m getting used to waking up at six. It’s still hard!' },
    { img: 'cidade', q: 'When you moved or changed jobs, who helped you get used to it?', st: ['… helped me get used to …'], filme: 'Her cousin Clark, Superman, keeps calling to help her.', mais: 'What was the hardest thing?', ex: 'My neighbor helped me get used to the city. The hardest thing was the traffic.' }
  ],
  itens: [
    { img: 'argo', nome: 'Argo City', q: 'A city on a rock in space. How did Kara use to live here?', ex: 'She used to live with almost nobody, and she used to watch her people disappear.' },
    { img: 'capa', nome: 'the red sun', q: 'Under a red sun, she had no powers. What was she used to?', ex: 'She was used to being weak and getting cold. She was used to being alone.' },
    { img: 'krypto', nome: 'Krypto', q: 'Her white dog flies on Earth. Is he used to it?', ex: 'Yes, he is completely used to flying. He chases planes!' },
    { img: 'janela', nome: 'the window', q: 'On Earth she can lift a train. What isn’t she used to?', ex: 'She isn’t used to people and noise. She is still getting used to Earth food.' },
    { img: 'cidade', nome: 'the city', q: 'Clark is used to being loved. And Kara?', ex: 'She isn’t used to it. She arrived older and angry, and she says she has no people.' }
  ],
  revelaRot: 'Whose bag is it?',
  revela: 'It is Kara’s bag: Kara Zor-El, Supergirl, Superman’s cousin. She grew up under a red sun with no powers, and now, on Earth, she is getting used to being the strongest girl in the world.',
  conta: 'Tell Kara’s story: what did she use to do, and what is she getting used to?',
  contaEx: 'She used to live on a rock in space with no powers. Now she is on Earth, and she is getting used to being strong, but she isn’t used to people yet.',
  vida: [],
  antes: [
    { q: 'You opened Kara’s bag. In the trailer, what is she still not used to on Earth? Guess.', h: 'She isn’t used to … yet. / She’s getting used to …' },
    { q: 'What did Kara use to do under the red sun that she can’t do now?', h: 'She used to …' }
  ]
};
