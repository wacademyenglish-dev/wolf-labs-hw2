/* OS MOMENTOS-CHAVE de What Did You Do on Saturday? (11/10/2026): a conversa de segunda-feira do Easy English.
   Forma: a linha do tempo. Alvo: perguntas no passado (Did you…?, What did you…?, Yes, I did / No, she didn’t).
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [6, 7, 8], k: 'Hiking', quem: 'Tim and his friend',
    contexto: 'It’s Monday. Tim calls his friends and asks about the weekend.',
    frase: 'What did you do at the weekend? — Ah, the weekend. <b>I went hiking</b>.',
    explica: 'The question uses <i>did</i>, so the verb is clean (<i>do</i>). The answer is in the past: <i>went</i>.',
    formula: '<b>What did</b> you <b>do</b>? · I <b>went</b> hiking. (go → went)',
    tente: 'What did you do last weekend? Say two things.',
    ex: 'I went to the market, and I watched a series.' },
  { i: [13, 14], k: 'Pasta', quem: 'Tim and his friend',
    contexto: 'His friend had dinner with friends. Tim wants details.',
    frase: '<b>What did you eat</b>? — We ate pasta.',
    explica: 'After <i>did</i>, the verb goes back to the base form. The past is only in <i>did</i>.',
    formula: 'What <b>did</b> you <b>eat</b>? · ✗ What did you ate?',
    tente: 'Ask your teacher what he or she ate yesterday.',
    ex: 'What did you eat for dinner yesterday? Did you cook?' },
  { i: [24, 25, 26, 27], k: 'Ice cream', quem: 'Bully',
    contexto: 'Bully went to the beach, and it wasn’t too cold this time.',
    frase: 'What did you do at the beach? — I had an ice cream. — <b>What flavour</b> ice cream did you have?',
    explica: '<i>What</i> + a noun makes the question exact: what flavor, what film, what book. (<i>Flavour</i> is the British spelling.)',
    formula: '<b>What</b> + noun + <b>did</b> you…? · What flavor did you have?',
    tente: 'What flavor of ice cream did you have last time?',
    ex: 'I had a coconut ice cream. It was delicious!' },
  { i: [34, 35, 36, 37, 38], k: 'The cake', quem: 'Sean and Tim',
    contexto: 'Sean made a chocolate cake. Tim wants some. Too late.',
    frase: 'What kind of cake did you make? — I made a chocolate cake. — Can I have some? — Sorry Tim, <b>my family ate it all</b>.',
    explica: 'The family ate everything. A short answer repeats <i>did</i>, not the verb.',
    formula: '<b>Did</b> they eat it all? — Yes, they <b>did</b>. · ✗ Yes, they ate.',
    tente: 'Answer with short answers: Did you cook yesterday? Did you sleep well?',
    ex: 'No, I didn’t. Yes, I did!' },
  { i: [45, 46], k: 'Swimming', quem: 'Tim and Georgie',
    contexto: 'Georgie went swimming. Tim asks where.',
    frase: '<b>Where did you go</b> swimming? — I went swimming at the swimming pool.',
    explica: 'Where + did + you + base verb. The answer uses the past: <i>went</i>.',
    formula: 'Where <b>did</b> you <b>go</b>? · <b>Did</b> she go? No, she <b>didn’t</b>.',
    tente: 'Ask your teacher three questions about last Saturday.',
    ex: 'Where did you go? Who did you see? Did you have fun?' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#4fa8d9', titulo: 'Monday morning, five answers.', sub: 'Tap a mark on the line, hear it, and ask about the weekend with did.', rot: { por: 'WHAT IT MEANS', padrao: 'DID YOU…?', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["do","eat"],["weekend","beach"]],"iscas":["biking","liking","want","tent"],"pergunta":"What did you do last weekend?"},{"mentira":[["ate","made"],["pasta","pizza"]],"iscas":["eight","late","faster","past"],"pergunta":"What did you eat yesterday?"},{"mentira":[["beach","park"],["had","bought"]],"iscas":["peach","dream","rice","bad"],"pergunta":"What flavor of ice cream do you like?"},{"mentira":[["chocolate","lemon"],["have","try"]],"iscas":["take","lake","find","same"],"pergunta":"Do you cook at home?"},{"mentira":[["pool","school"],["went","came"]],"iscas":["cool","tool","winning","want"],"pergunta":"Did you go swimming last month?"}];
