/* OS MOMENTOS-CHAVE de I’m Not an Astronaut (11/10/2026): cinco falas do trailer de Project Hail Mary.
   Forma: a lacuna — some a palavra (nothing / anything / nobody...) e o aluno escolhe ouvindo.
   Alvo: somebody / anybody / nobody, something / anything / nothing, uma negação por frase.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [3, 4, 5, 6], k: 'Not an astronaut', quem: 'Ryland Grace',
    contexto: 'Grace wakes up from a coma on a spaceship, very far from home. He doesn’t understand why he is there.',
    frase: 'I’m several light years from my apartment. And <b>I’m not an astronaut</b>.',
    distr: ['I’m an astronaut', 'I’m not a scientist'],
    explica: 'He says it three times, because nobody believes it, and he can’t believe it either.',
    formula: '<b>Nobody</b> asked him. · He didn’t want <b>anything</b> like this.',
    tente: 'Say three things you are NOT. Then one thing you are.',
    ex: 'I’m not a doctor, I’m not a singer, I’m not a morning person. I’m a teacher!' },
  { i: [20, 21, 22, 23], k: 'We don’t know', quem: 'The mission leader',
    contexto: 'Every star near us is dying, except one. Nobody on Earth knows why.',
    frase: 'Why? — <b>We don’t know</b>. Which is why we built a ship. To go there and find out.',
    distr: ['We don’t care', 'We know'],
    explica: 'With <i>don’t</i>, use <i>anything / anybody</i>. Without <i>not</i>, use <i>nothing / nobody</i>. One negative is enough.',
    formula: '<b>Nobody</b> knows. = We don’t know <b>anything</b>. · ✗ We don’t know nothing.',
    tente: 'Name something nobody in your family knows how to do.',
    ex: 'Nobody in my family knows how to swim. We don’t know anything about the sea!' },
  { i: [30], k: 'Who on earth?', quem: 'Ryland Grace',
    contexto: 'The mission is one way only. Grace thinks no person will say yes.',
    frase: '<b>Who on earth</b> is gonna sign up for this?',
    distr: ['Where on earth', 'Why on earth'],
    explica: '<i>Who on earth?</i> = a strong, surprised <i>who?</i>. His answer: nobody. In questions we use <i>anybody</i>.',
    formula: '<b>Is anybody</b> going? · <b>Nobody</b> wants to go.',
    tente: 'Ask your teacher a question with anybody about this week.',
    ex: 'Did anybody call you this week? Did anybody give you a present?' },
  { i: [31, 32], k: 'If we do nothing', quem: 'The mission leader',
    contexto: 'She explains the problem in one sentence. There is no other choice.',
    frase: 'If we do <b>nothing</b>, everything on this planet will go extinct.',
    distr: ['something', 'anything'],
    explica: '<i>Do nothing</i> = not do anything. <i>Nothing</i> already has the “no” inside, so the verb stays positive.',
    formula: 'If we do <b>nothing</b>... = If we don’t do <b>anything</b>... · ✗ If we don’t do nothing',
    tente: 'What happens if you do nothing for a whole weekend?',
    ex: 'If I do nothing, my house is a mess on Monday. But I feel great!' },
  { i: [36, 37, 38], k: 'Never done anything', quem: 'Ryland Grace',
    contexto: 'Grace tries again to say no. He has zero experience in space.',
    frase: 'I’ve never done <b>anything</b>. I’ve never done a space walk. I can’t even moonwalk.',
    distr: ['nothing', 'something'],
    explica: '<i>Never</i> is already negative, so it goes with <i>anything</i>. And the moonwalk joke: he can’t even dance like Michael Jackson.',
    formula: 'I’ve <b>never</b> done <b>anything</b>. · ✗ I’ve never done nothing.',
    tente: 'Tell me something you have never done, and something nobody in your family has done.',
    ex: 'I’ve never been on a plane. Nobody in my family has seen snow.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#e2a33d', titulo: 'Five lines from mission control.', sub: 'Tap a moment, hear it, and choose the missing words. One negative per sentence!', rot: { por: 'WHAT IT MEANS', padrao: 'ANYBODY · NOBODY · NOTHING', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["several","few"],["apartment","house"]],"iscas":["ears","night","department","seven"],"pergunta":"Would you like to travel to space, even if you're not an astronaut?"},{"mentira":[["built","bought"],["ship","shop"]],"iscas":["belt","sheep","fine","white"],"pergunta":"What is one thing you don't know yet but really want to find out?"},{"mentira":[["sign","show"],["for","with"]],"iscas":["line","nine","birth","gone"],"pergunta":"Who on earth would you invite to travel with you on a trip to space?"},{"mentira":[["everything","everyone"],["extinct","crazy"]],"iscas":["plane","low","well","thing"],"pergunta":"What do you do when you feel like doing nothing at all?"},{"mentira":[["space","long"],["even","really"]],"iscas":["face","work","soon","one"],"pergunta":"Is there anything you've never done but would love to try someday?"}];
