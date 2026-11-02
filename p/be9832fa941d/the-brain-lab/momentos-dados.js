/* OS MOMENTOS-CHAVE de The Brain Lab (11/10/2026): o cérebro bilíngue (TED-Ed).
   Forma: a lacuna. Alvo: much / a lot / far + comparativo, a bit / slightly, not nearly as … as (a armadilha: very more).
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [8, 9, 10, 11, 12], k: 'An easier time', quem: 'The narrator',
    contexto: 'If you speak two languages, travel and movies are easier. But there is more: your brain is different.',
    frase: 'And besides having <b>an easier time</b> traveling or watching movies without subtitles, knowing two or more languages means that your brain may actually look and work differently.',
    distr: ['a harder time', 'an easy time'],
    explica: 'The comparative shows the difference. To make the difference big, use <i>much</i>, never <i>very</i>.',
    formula: 'Traveling is <b>much easier</b>. · ✗ very easier · ✗ more easier',
    tente: 'What is much easier for you in English now than one year ago?',
    ex: 'Listening is much easier now. Speaking is a bit easier too.' },
  { i: [18, 19, 20, 21], k: 'Near-equal', quem: 'The narrator',
    contexto: 'Not every bilingual is the same. Some are balanced; most are not.',
    frase: 'While a balanced bilingual has <b>near-equal abilities</b> across the board in two languages, most bilinguals around the world know and use their languages in varying proportions.',
    distr: ['equal abilities', 'nearly abilities'],
    explica: '<i>Near-equal</i> = almost the same. For a small difference, use <i>slightly</i> or <i>a bit</i>.',
    formula: 'My Portuguese is <b>slightly</b> stronger. · <b>a bit</b> better',
    tente: 'Compare your reading and your speaking in English: a bit, much or far?',
    ex: 'My reading is far better than my speaking. My writing is slightly better than my listening.' },
  { i: [51, 52, 53, 54], k: 'Two hemispheres', quem: 'The narrator',
    contexto: 'The two sides of the brain do different jobs.',
    frase: 'It’s well known that the brain’s left hemisphere is <b>more dominant</b> in analytical and logical processes, while the right hemisphere is more active in emotional and social ones.',
    distr: ['less dominant', 'most dominant'],
    explica: '<i>Dominant</i> = the stronger one, the one in control. <i>Far</i> or <i>a lot</i> make the difference bigger.',
    formula: '<b>far more</b> active · <b>a lot more</b> logical',
    tente: 'Are you a more logical or a more emotional person? How much more?',
    ex: 'I’m a lot more emotional than my brother. He’s far more logical.' },
  { i: [61, 62, 63, 64], k: 'Children', quem: 'The narrator',
    contexto: 'A famous theory explains why children learn languages fast.',
    frase: 'According to this theory, children learn languages <b>more easily</b> because the plasticity of their developing brains lets them use both hemispheres.',
    distr: ['most easily', 'easier'],
    explica: 'With adverbs, the comparative is <i>more easily</i>. And again, <i>much</i> makes it stronger.',
    formula: 'Children learn <b>much more easily</b>. · ✗ very more easily',
    tente: 'What did you learn much more easily as a child?',
    ex: 'I learned to swim much more easily as a child. Now I’m afraid!' },
  { i: [77, 78, 79], k: 'Advantages', quem: 'The narrator',
    contexto: 'Whenever you learn them, languages change your brain for the better.',
    frase: 'But regardless of when you acquire additional languages, being multilingual gives your brain <b>some remarkable advantages</b>.',
    distr: ['some small advantages', 'the same advantages'],
    explica: '<i>Remarkable</i> = surprising and important. A monolingual brain is not as active in some areas.',
    formula: 'Monolingual brains are <b>not nearly as</b> active <b>as</b> bilingual ones. (a big difference)',
    tente: 'Compare two cities with not nearly as … as.',
    ex: 'My town is not nearly as noisy as São Paulo.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#7b6be0', titulo: 'Inside the bilingual brain.', sub: 'Tap a moment, hear it, choose the missing words, then measure the difference.', rot: { por: 'WHAT IT MEANS', padrao: 'MUCH · FAR · A BIT + COMPARATIVE', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["without","with"],["more","less"]],"iscas":["train","moves","lamp","title"],"pergunta":"Have you ever had an easier time doing something because you speak English?"},{"mentira":[["most","few"],["around","outside"]],"iscas":["bowl","knows","youth","wave"],"pergunta":"In your life, which language skills show near-equal abilities, like speaking and listening, or is one stronger?"},{"mentira":[["left","right"],["emotional","physical"]],"iscas":["rain","light"],"pergunta":"Do you think you are more dominant in logical thinking or in emotional and social situations?"},{"mentira":[["children","adults"],["both","neither"]],"iscas":["chicken","lasting","bought"],"pergunta":"Do you think children really learn more easily than adults, and why do you think so?"},{"mentira":[["regardless","because"],["additional","original"]],"iscas":["gaze","remark"],"pergunta":"What are some remarkable advantages you have gotten from learning English in your daily life?"}];
