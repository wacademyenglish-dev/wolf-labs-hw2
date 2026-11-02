/* OS MOMENTOS-CHAVE de It Can’t Be Him (11/10/2026): cinco falas do trailer de The Batman.
   Forma: a lacuna (ouvir e escolher). Alvo: dedução — must be / might be / can’t be.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [1], k: 'Whatever happens', quem: 'A voice in the trailer',
    contexto: 'Gotham is dark, and someone says he has nothing to lose.',
    frase: 'I don’t care <b>what happens to me</b>.',
    distr: ['what happened to me', 'who happens to me'],
    explica: 'A person who doesn’t care what happens to him is very dangerous, or very brave.',
    formula: 'He <b>must be</b> very brave. · He <b>might be</b> lost. (must / might + be, no <i>to</i>)',
    tente: 'Someone says “I don’t care what happens to me.” What must be true about him?',
    ex: 'He must be very angry, or he might be very sad.' },
  { i: [2], k: 'Worse for you', quem: 'The Riddler',
    contexto: 'A voice speaks very close, almost in Batman’s ear.',
    frase: 'It’s only gonna <b>get worse</b> for you.',
    distr: ['get better', 'get worst'],
    explica: '<i>Get worse</i> = become more bad. It is a threat, not advice. Who says this to you? Not a friend.',
    formula: 'That <b>can’t be</b> a friend. (I’m sure it isn’t) · ✗ can’t to be',
    tente: 'You get a message: “It’s only going to get worse for you.” Who can’t it be? Who might it be?',
    ex: 'It can’t be my mother. It might be my ex-boss!' },
  { i: [3, 4], k: 'Everything they say', quem: 'A voice in the trailer',
    contexto: 'Someone notices that Batman knows too much about everybody.',
    frase: 'You <b>hear everything</b> they say, ain’t you?',
    distr: ['see everything', 'hear nothing'],
    explica: '<i>Ain’t you</i> is very informal (= don’t you). The idea: he listens to the whole city.',
    formula: 'He <b>might be</b> listening right now. · He <b>must know</b> a lot of secrets.',
    tente: 'Your phone shows ads about something you only said out loud. What do you deduce?',
    ex: 'My phone must be listening to me! Or it might be a coincidence.' },
  { i: [5], k: 'Not so different', quem: 'Catwoman',
    contexto: 'On a rooftop, Catwoman looks at Batman. They both live in the dark.',
    frase: 'Maybe <b>we’re not so different</b>.',
    distr: ['we’re not so far', 'we’re so different'],
    explica: '<i>Maybe</i> is the same idea as <i>might</i>: perhaps it’s true, perhaps not.',
    formula: 'Maybe she’s right. = She <b>might be</b> right.',
    tente: 'Think of someone very different from you. Might you be similar in some way?',
    ex: 'My brother is a football fan and I hate football. But we might be similar: we’re both stubborn!' },
  { i: [6], k: 'Under the mask', quem: 'Catwoman',
    contexto: 'Then she asks the question everybody in Gotham wants to ask.',
    frase: 'Who are you <b>under there</b>?',
    distr: ['over there', 'in there'],
    explica: 'Under the mask is a man. Who? The audience knows. Gotham doesn’t.',
    formula: 'It <b>must be</b> a rich man. · It <b>can’t be</b> Bruce Wayne... can it?',
    tente: 'Play detective: a man has a big house, a lot of money and no free time at night. Who must he be?',
    ex: 'He must be Batman! He can’t be a normal businessman.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#c93a3a', titulo: 'Five clues. Fill the line.', sub: 'Tap a moment, hear it, choose the missing words, then play detective: must, might or can’t?', rot: { por: 'WHAT IT MEANS', padrao: 'MUST · MIGHT · CAN’T BE', voce: 'YOUR DEDUCTION', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["don’t","do"],["care","know"]],"iscas":["bear","hair","happy","open"],"pergunta":"Have you ever felt that you didn't care what happens to you? What was going on?"},{"mentira":[["only","never"],["you","them"]],"iscas":["nurse","horse","purse","gone"],"pergunta":"Think about a time when things started to get worse. What did you do to feel better?"},{"mentira":[["say","do"],["they","we"]],"iscas":["here","near","stay","day"],"pergunta":"Do you ever hear everything your neighbors say through the walls? How does that feel?"},{"mentira":[["Maybe","Surely"]],"iscas":["baby","difficult","hot","lot"],"pergunta":"Who is a friend you thought was very different from you, but you were actually not so different?"},{"mentira":[["are","were"],["you","they"]],"iscas":["blue","wonder","chair","where"],"pergunta":"When you were a child, did you ever hide under there, like under a bed or table?"}];
