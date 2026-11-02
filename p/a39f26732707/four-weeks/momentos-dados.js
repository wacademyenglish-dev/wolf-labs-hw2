/* OS MOMENTOS-CHAVE de Four Weeks (11/10/2026): como o cérebro aprende e as técnicas de estudo (TED-Ed).
   Forma: a lacuna. Alvo: relativas restritivas × explicativas (duas vírgulas: who / which, nunca that) e what = a coisa que.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1, 2, 3], k: 'Procedures', quem: 'The narrator',
    contexto: 'Medical residents learn hundreds of techniques. Remembering them can save a life.',
    frase: 'During their training, medical residents learn countless techniques, surgeries, and procedures <b>which they’ll later use</b> to save lives.',
    distr: ['what they’ll later use', 'who they’ll later use'],
    explica: 'No comma: the clause tells us WHICH procedures. Here <i>which</i> or <i>that</i> both work, and you can even drop it.',
    formula: 'procedures <b>(which / that)</b> they use · no commas = it chooses which ones',
    tente: 'Describe a skill which you use every day at work.',
    ex: 'Excel is a tool which I use every single day.' },
  { i: [36, 37, 38], k: 'Long-term', quem: 'The narrator',
    contexto: 'Slowly, new knowledge moves to long-term memory.',
    frase: 'Gradually, the knowledge of heart anatomy is stored long-term, <b>which involves</b> another brain area known as the neocortex.',
    distr: ['that involves', 'what involves'],
    explica: 'After a comma, the clause adds extra information about the whole idea. With a comma, never <i>that</i>.',
    formula: ', <b>which</b> involves… · ✗ , that involves… (no “that” after a comma)',
    tente: 'Tell me a fact about your city, then add extra information with , which…',
    ex: 'My city has a big river, which floods almost every summer.' },
  { i: [49, 50, 51, 52], k: 'Recall', quem: 'The narrator',
    contexto: 'Every time you remember something, the memory opens again.',
    frase: 'Each time you recall heart anatomy, you reactivate the long-term memory, <b>which makes it</b> susceptible to change.',
    explica: '<i>Susceptible to change</i> = it can change. The <i>which</i> here refers to the whole action before the comma.',
    formula: 'You recall it, <b>which</b> makes it stronger. (which = the whole idea before)',
    tente: 'Tell me a habit of yours, then its effect with , which…',
    ex: 'I go to bed at ten, which makes my mornings much easier.' },
  { i: [67, 68, 69], k: 'What you know', quem: 'The narrator',
    contexto: 'Testing yourself is better than rereading. Here is why.',
    frase: 'Testing yourself, however, allows you to more accurately gauge <b>what you actually know</b>.',
    distr: ['which you actually know', 'that you actually know'],
    explica: '<i>Gauge</i> = measure. <i>What</i> = the thing that. Use it when there is no noun before.',
    formula: '<b>what</b> you know = the thing that you know · ✗ the thing what you know',
    tente: 'Tell me what you need to study more this month.',
    ex: 'What I need is more listening practice. What I don’t need is more grammar books!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#7bbf5a', titulo: 'How memory works, line by line.', sub: 'Tap a moment, hear it, choose the right word: which, that or what?', rot: { por: 'WHAT IT MEANS', padrao: 'WHICH · , WHICH · WHAT', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["countless","few"],["save","change"]],"iscas":["raining","lines","turn","presidents"],"pergunta":"What is something you learned long ago that you still use today, which you'll probably keep using later?"},{"mentira":[["heart","body"],["brain","muscle"]],"iscas":["hard","train","board","phone"],"pergunta":"What is something you learned years ago that is stored in your memory, which still helps you today?"},{"mentira":[["recall","forget"],["susceptible","resistant"]],"iscas":["team","chain","hat","beach"],"pergunta":"Is there a memory you often recall, which makes it feel different now from before?"},{"mentira":[["accurately","quickly"]],"iscas":["resting","cage","snow","also"],"pergunta":"How do you test yourself to see what you actually know in English?"}];
