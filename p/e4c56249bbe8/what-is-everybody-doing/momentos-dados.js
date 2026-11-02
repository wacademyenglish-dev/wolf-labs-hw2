/* OS MOMENTOS-CHAVE de What Is Everybody Doing? (11/10/2026): cinco falas do trailer de A Viagem de
   Chihiro. Forma: as abas (o momento à esquerda, a carta à direita). Alvo: present continuous.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [1, 2, 3], k: 'Almost there', quem: 'The family, in the car',
    contexto: 'Chihiro’s family is driving to a new house. They stop in front of a strange old building.',
    frase: 'We’re <b>almost there</b>. What’s this old building? It looks like an entrance.',
    explica: '<i>Almost there</i> = we are near, we arrive soon. Right now they are driving, and then they are walking into a tunnel.',
    formula: 'They <b>are driving</b>. · They <b>are walking</b> into a tunnel. (am / is / are + <b>-ing</b>)',
    tente: 'Where are you right now? What are you doing?',
    ex: 'I’m sitting in my living room. I’m drinking coffee.' },
  { i: [5], k: 'Get out', quem: 'A boy on the bridge',
    contexto: 'It is getting dark. A boy sees Chihiro and tells her to leave before it is too late.',
    frase: '<b>Get out of here</b>, now!',
    explica: 'He is scared for her. Right now the sun is going down, and her parents aren’t listening to anybody.',
    formula: 'Chihiro <b>is running</b>. · Her parents <b>aren’t listening</b>.',
    tente: 'Look out of the window. What is happening outside right now?',
    ex: 'It’s raining. A man is walking his dog. The cars aren’t moving.' },
  { i: [6, 7], k: 'The bathhouse', quem: 'A voice in the trailer',
    contexto: 'At night a huge bathhouse opens, and strange spirits arrive to take a bath.',
    frase: 'It’s a bathhouse <b>for the spirits</b>. It’s where they come to replenish themselves.',
    explica: '<i>Replenish themselves</i> = get their energy back. Picture it: everywhere, spirits are taking a bath.',
    formula: 'What <b>are</b> the spirits <b>doing</b>? They <b>are taking</b> a bath.',
    tente: 'Imagine a busy place you know. What are people doing there now?',
    ex: 'At the gym, people are running and lifting weights. Nobody is talking.' },
  { i: [9, 10], k: 'Don’t be afraid', quem: 'Haku',
    contexto: 'Chihiro is alone and scared. Haku comes to help her.',
    frase: 'Don’t be afraid. I just <b>want to help</b> you.',
    explica: 'Is she crying? Maybe. Is he laughing? No. We use the question and the negative of the present continuous to describe the scene.',
    formula: '<b>Is</b> she <b>crying</b>? Yes, she <b>is</b>. · He <b>isn’t laughing</b>.',
    tente: 'Ask your teacher three questions about right now: Are you…? Is your…?',
    ex: 'Are you drinking tea? Is your cat sleeping? Are you smiling?' },
  { i: [11, 12], k: 'You never forget', quem: 'Zeniba',
    contexto: 'At the end, an old woman tells Chihiro something true about friends.',
    frase: 'Once you’ve met someone, you <b>never really forget</b> them.',
    explica: 'This is a general truth, so it is in the simple present. But right now Chihiro <b>is remembering</b> something important.',
    formula: 'always true: you <b>never forget</b> · now: she <b>is remembering</b>',
    tente: 'Who are you thinking about right now? Why?',
    ex: 'I’m thinking about my best friend from school. I never forget her birthday.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#e36b5c', titulo: 'Five moments in the spirit world.', sub: 'Tap a moment, hear it, and say what everybody is doing right now.', rot: { por: 'WHAT IT MEANS', padrao: 'AM · IS · ARE + -ING', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["old","new"],["entrance","exit"]],"iscas":["books","cold","distance","light"],"pergunta":"Have you ever walked into an old building and felt curious about its story?"},{"mentira":[["now","later"]],"iscas":["how","hair","house","wet"],"pergunta":"Have you ever had to leave a place quickly? What happened?"},{"mentira":[["come","go"],["replenish","hide"]],"iscas":["path","horse","wear","calm"],"pergunta":"Where do you go when you need to recharge and feel better?"},{"mentira":[["afraid","late"],["just","never"]],"iscas":["paid","must","went","held"],"pergunta":"Who do you want to help most in your life, and why?"},{"mentira":[["met","lost"],["them","him"]],"iscas":["wet","sum","wants","then"],"pergunta":"Is there someone you met once and still remember very well?"}];
