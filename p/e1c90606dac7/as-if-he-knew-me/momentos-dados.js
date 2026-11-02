/* OS MOMENTOS-CHAVE de As If He Knew Me (11/10/2026): cinco momentos do trailer de Severance.
   Forma: a linha do tempo. Alvo: as if / as though (o que não é verdade dá um passo atrás: as if he knew him).
   A irmã B1 (It Was Done in the Morning) usa o mesmo trailer para a voz passiva. Lidos pela cena Line by Line (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1], k: 'You chose to come back', quem: 'A voice at Lumon',
    contexto: 'Mark wakes up on a table in a strange room. A calm voice explains.',
    frase: 'Every time you find yourself here, <b>it’s because you chose to come back</b>.',
    explica: 'He chose it, they say. But inside the office he has no memory of choosing anything.',
    formula: 'He looks around <b>as if</b> he <b>had never been</b> here. (not true → a step back in time)',
    tente: 'Describe someone in a new place, using as if.',
    ex: 'On his first day, my son walked into school as if he owned the building.' },
  { i: [6, 7, 8], k: 'Consent', quem: 'Mark',
    contexto: 'Mark reads his statement: half of his life will be erased every day.',
    frase: 'I give consent to <b>sever my memories</b> between my work life and my personal life.',
    explica: 'A huge decision, read like a shopping list. He says it calmly, as if it were nothing.',
    formula: 'He signs <b>as though</b> it <b>were</b> nothing. (formal: <b>were</b> for all persons)',
    tente: 'Tell me about a time someone talked about something serious as if it were nothing.',
    ex: 'My doctor told me I needed surgery as though it were a haircut.' },
  { i: [30, 31, 32, 33], k: 'No longer with us', quem: 'Mr. Milchick',
    contexto: 'Mark’s best friend at work is gone. The supervisor gives the news in two lines.',
    frase: 'Mark, could I have a word? <b>Petey is no longer with this company.</b> I’m sorry, Mark.',
    explica: 'No explanation, no details. Everybody moves on very fast.',
    formula: 'They talk <b>as if</b> Petey <b>had never</b> existed. (past perfect: earlier, and not true)',
    tente: 'Think of someone who left your job or school. Did people act as if nothing had happened?',
    ex: 'When our manager left, everybody acted as if nothing had changed. But everything had.' },
  { i: [44, 45, 46, 47, 48], k: 'Do I know you?', quem: 'Petey',
    contexto: 'Outside the office, a stranger stops Mark. The stranger knows him very well.',
    frase: 'I know you. My name is Petey. I’m from work. — So, we’re friends? — <b>I’m your best friend.</b>',
    explica: 'From Mark’s side, Petey talks as if they were best friends. And the strange part: they are.',
    formula: 'It looks <b>as if</b> he <b>is</b> telling the truth. (looks true → no step back)',
    tente: 'Look at your teacher right now. Describe how he or she looks, with as if.',
    ex: 'You look as if you’ve had a long day. You look as though you need a coffee!' },
  { i: [59, 60], k: 'Kind eyes', quem: 'A voice at Lumon',
    contexto: 'Even the workers’ faces have rules at Lumon.',
    frase: 'It’s important <b>your eyes be kind</b>. Do you know how to make your eyes kind?',
    explica: '<i>Your eyes be kind</i> is a formal subjunctive: a rule, an order. Smile, look happy, even if you aren’t.',
    formula: 'It feels <b>as though</b> the office <b>were</b> a prison.',
    tente: 'Describe a place that feels as though it were something else.',
    ex: 'My school felt as though it were a prison: grey walls and no windows.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#5aa0c9', titulo: 'Five moments at Lumon.', sub: 'Tap a mark on the timeline, hear it, and describe what it is as if…', rot: { por: 'WHAT IT MEANS', padrao: 'AS IF · AS THOUGH', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["find","lose"],["here","there"]],"iscas":["fine","hair","bag","close"],"pergunta":"Is there a place you keep coming back to because you chose to?"},{"mentira":[["give","refuse"],["work","school"]],"iscas":["walk","knife","live","content"],"pergunta":"Would you like to sever your memories of work from your personal life? Why?"},{"mentira":[["word","minute"],["sorry","happy"]],"iscas":["world","work","story","hurry"],"pergunta":"Have you ever had a coworker or classmate who is no longer with your company or school?"},{"mentira":[["know","see"],["work","school"]],"iscas":["now","game","walk","fresh"],"pergunta":"Who is your best friend, and how did you two meet?"},{"mentira":[["know","remember"],["make","keep"]],"iscas":["mind","take","size","now"],"pergunta":"When you meet someone new, how do you show that you are kind?"}];
