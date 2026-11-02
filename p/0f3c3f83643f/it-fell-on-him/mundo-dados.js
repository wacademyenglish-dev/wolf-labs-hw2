/* COYOTE VS. ACME · O MUNDO (cena I · Warm-up and The ACME Box)  19/10/2026 — formato mala (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois os produtos da ACME, um por vez, e o que eles fazem com ele.
   A1, já com os pronomes objeto (me, him, it, them). */
window.WL_MUNDO = {
  forma: 'mala',
  cena: { rot: 'Warm-up and The ACME Box', t: 'Before the trailer: you and your things, then a box from ACME.', p: 'Answer three questions about your life. Then open the ACME box one thing at a time and say what happens.' },
  mundoRot: 'The ACME Box',
  guia: '<b>Warm-up and The ACME Box (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; A1: short answers are fine. <b>2 · The ACME Box:</b> five things come out of the box, one at a time: the desert, the bird, the box, the anvil, the court. With each, the student answers a short question (who wants it? what falls on him?). At the end they tell the story in three sentences. The object pronouns are in the questions; don’t correct them yet.',
  foto: 'capa',
  aquece: [
    { img: 'deserto', q: 'What cartoons did you watch as a child? Do you remember them?', st: ['I watched …', 'I loved it. / I didn’t like it.'], filme: 'This coyote is in cartoons since 1949.', mais: 'Who watched them with you?', ex: 'I watched Tom and Jerry. I watched it with my brother.' },
    { img: 'caixa', q: 'What did you buy online that went wrong?', st: ['I bought a …', 'It was …'], filme: 'The coyote buys everything from ACME. Everything goes wrong.', mais: 'Did you send it back?', ex: 'I bought a phone case. It was very small! I sent it back.' },
    { img: 'bigorna', q: 'Who is a person that never gives up? Tell me about him or her.', st: ['My … never gives up.', 'He / She …'], filme: 'The coyote never gives up. Never.', mais: 'Do you give up easily?', ex: 'My mother never gives up. She works and studies at night.' }
  ],
  itens: [
    { img: 'deserto', nome: 'the desert', q: 'A hungry coyote lives here. What does he want to eat?', ex: 'He wants a bird. He wants to catch it.' },
    { img: 'capa', nome: 'the bird', q: 'This bird is very, very fast. Can the coyote catch it?', ex: 'No, he can’t catch it. It is too fast for him.' },
    { img: 'caixa', nome: 'the ACME box', q: 'The coyote buys rockets and magnets from ACME. Do they help him?', ex: 'No, they don’t help him. They hurt him.' },
    { img: 'bigorna', nome: 'the anvil', q: 'This is very heavy. Where does it go? On the bird, or on him?', ex: 'It falls on him! Always on him.' },
    { img: 'tribunal', nome: 'the court', q: 'Now the coyote is angry with ACME. What does he do?', ex: 'He takes them to court. He wants money from them.' }
  ],
  revelaRot: 'Whose box is it?',
  revela: 'It is the box of Wile E. Coyote. He buys ACME products to catch the Road Runner, and every product hurts him. In the new film, he takes ACME to court.',
  conta: 'Tell the story in three sentences. Who wants what? What happens to him?',
  contaEx: 'The coyote wants the bird, but he can’t catch it. ACME products hurt him. Now he takes them to court.',
  vida: [],
  antes: [
    { q: 'Every ACME product hurts the coyote. In the trailer, what falls on him? Guess.', h: 'I think a … falls on him.' },
    { q: 'The coyote takes ACME to court. Do you think the judge helps him?', h: 'Yes, the judge helps him. / No, the judge doesn’t help him.' }
  ]
};
