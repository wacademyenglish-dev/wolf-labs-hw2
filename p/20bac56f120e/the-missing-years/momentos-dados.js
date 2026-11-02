/* OS MOMENTOS-CHAVE de The Missing Years (11/10/2026): a viagem de The Odyssey contada no passado.
   Forma: a linha do tempo (uma viagem). Alvo: past simple (was / were, irregulares, didn’t, Did he…?).
   A irmã A1 (The House That Waited) usa o mesmo trailer na forma "ordem". Lidos pela cena Line by Line (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [1, 2, 3], k: 'Don’t you remember?', quem: 'A voice in the dark',
    contexto: 'Odysseus is far from home after a long war. A voice asks him about the past.',
    frase: 'Don’t you remember? — Thunder. Fire. <b>Death.</b>',
    explica: 'Three words for the war: there was thunder, there was fire, and many men died.',
    formula: 'There <b>was</b> a war. · The ships <b>were</b> lost. · Many men <b>died</b>.',
    tente: 'Tell me about a big storm you remember. Where were you?',
    ex: 'There was a huge storm in 2019. I was at work, and the lights went out.' },
  { i: [4, 5, 6, 7], k: 'He remembered', quem: 'Odysseus',
    contexto: 'Slowly, he remembers the three important things.',
    frase: 'I remember... <b>a wife. A son. Home.</b>',
    explica: 'He says it in the present. We tell the story in the past: he <b>remembered</b>.',
    formula: 'He <b>remembered</b> his wife. · <b>Did</b> he forget his son? No, he <b>didn’t</b>.',
    tente: 'What is your first memory of home?',
    ex: 'I remembered my mother’s garden. We had a big mango tree.' },
  { i: [9, 10, 11], k: 'A daddy he didn’t know', quem: 'Telemachus, and a man in the palace',
    contexto: 'At home, his son believes his father is coming back. The men in the palace laugh at him.',
    frase: 'My dad is coming home. — You’re pining for a daddy you <b>didn’t even know</b>.',
    explica: '<i>Pine for</i> = miss someone very much. Telemachus was a baby when his father left.',
    formula: 'He <b>didn’t know</b> his father. · ✗ didn’t knew · ✗ didn’t knows',
    tente: 'Tell me one thing you didn’t know as a child.',
    ex: 'I didn’t know how to ride a bike until I was ten.' },
  { i: [20, 21, 22], k: 'That world is gone', quem: 'A voice in the trailer',
    contexto: 'Twenty years passed. Someone tells him the truth about home.',
    frase: 'Do you think life goes back to the way it was? <b>That world is gone.</b>',
    explica: 'His old life was different. People changed, and his house changed too.',
    formula: 'Life <b>was</b> different. · <b>Did</b> it go back? No, it <b>didn’t</b>.',
    tente: 'How was your city ten years ago? What was different?',
    ex: 'It was smaller. There weren’t so many cars, and there was a cinema downtown.' },
  { i: [30, 31], k: 'I defy the gods', quem: 'Odysseus',
    contexto: 'The gods said no. He didn’t listen.',
    frase: 'The gods told you. Then <b>I defy the gods</b>.',
    explica: '<i>Defy</i> = say no to, fight against. <i>Told</i> is the past of <i>tell</i>: irregular.',
    formula: 'The gods <b>told</b> him (tell → told). · <b>Did</b> he give up? No, he <b>didn’t</b>.',
    tente: 'Tell me about a time someone told you no, and you did it anyway.',
    ex: 'My parents told me not to study art. I did it anyway, and I love it!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#3b8fc4', titulo: 'The voyage, in five lines.', sub: 'Tap a mark on the line, hear it, and tell that part of the story in the past.', rot: { por: 'WHAT IT MEANS', padrao: 'THE PAST', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["remember","forget"],["Fire","Ice"]],"iscas":["wonder","tire","deaf","november"],"pergunta":"What is something from your childhood that you still remember very well?"},{"mentira":[["remember","forget"],["wife","mother"]],"iscas":["knife","sun","phone","number"],"pergunta":"Who is waiting for you at home, and what do you miss when you're away?"},{"mentira":[["coming","leaving"],["pining","crying"]],"iscas":["dead","running","phone","now"],"pergunta":"Is there someone you miss a lot, even though you didn’t even know them well?"},{"mentira":[["think","hope"],["life","time"]],"iscas":["knife","drink","bag","why"],"pergunta":"What part of your life is gone now that you miss the most?"},{"mentira":[["told","asked"],["Then","Now"]],"iscas":["cold","guards","ten","deny"],"pergunta":"Have you ever refused to follow a rule or advice because you believed in yourself?"}];
