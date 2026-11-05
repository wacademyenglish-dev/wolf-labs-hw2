/* OS MOMENTOS-CHAVE de Where Are You From? (20/10/2026): BBC Learning English, Easy English Conversations 2
   (Tim, Sian, Buli e Georgie). Forma: as abas. Alvo: wh-questions (be sem do; do / does com os outros verbos; from no fim).
   Lidos pela cena Line by Line do kit (kit/legenda.js). Os números são as falas de legenda-dados.js. */
window.WL_MOMENTOS = [
  { i: [1, 2, 3], k: 'Where from?', quem: 'Tim',
    contexto: 'The first question, and the first answer.',
    frase: '<b>Where are you from</b>? — Hi, I’m Tim. <b>I’m from Oxford</b>.',
    explica: 'With <i>be</i> there is no <i>do</i>. And <i>from</i> goes at the end of the question.',
    formula: 'Where <b>are</b> you <b>from</b>? · ✗ Where do you are from? · ✗ From where are you?',
    tente: 'Where are you from? Where is your family from?',
    ex: 'I’m from Recife. My father’s family is from Portugal.' },
  { i: [4, 5, 7, 8], k: 'Sian and Buli', quem: 'Sian and Buli',
    contexto: 'Two more friends, two more cities.',
    frase: 'Where are you from, Sian? — <b>I’m from Swansea.</b> · Where are you from, Buli? — <b>I’m from Beijing.</b>',
    explica: 'The name goes at the end: <i>Where are you from, Sian?</i> A short answer is OK too: <i>From Swansea.</i>',
    formula: 'Where are you from, <b>Sian</b>? · I’m from <b>Swansea</b>. · From Swansea.',
    tente: 'Ask your teacher: Where are you from? Where is your mother from?',
    ex: 'I’m from Belo Horizonte. My mother is from Bahia.' },
  { i: [15, 16], k: 'Who is from…?', quem: 'The quiz',
    contexto: 'Now a quiz: who is from where?',
    frase: '<b>Who is from</b> Swansea? · <b>Who is from</b> Petworth?',
    explica: '<i>Who</i> asks about a person. Who + is + from…?',
    formula: '<b>Who is</b> from Swansea? — <b>Sian is</b>.',
    tente: 'In your family, who is from your city?',
    ex: 'My father is from here. My mother is from Recife.' },
  { i: [27, 28, 29, 30], k: 'Where do you live?', quem: 'Sian',
    contexto: 'The second question: where do they live, and who with?',
    frase: 'Where <b>do</b> you <b>live</b>, Sian? — I live in a house in Brighton. — Who <b>do</b> you live with? — I live with my family.',
    explica: '<i>Live</i> is not <i>be</i>, so the question needs <i>do</i>.',
    formula: 'Where <b>do</b> you <b>live</b>? · Who <b>do</b> you <b>live</b> with?',
    tente: 'Where do you live? Who do you live with?',
    ex: 'I live in an apartment in Campinas. I live with my husband.' },
  { i: [44, 45], k: 'Sian lives', quem: 'The quiz',
    contexto: 'And now about them: he, she, they.',
    frase: 'Who <b>lives</b> in Brighton? — Sian <b>lives</b> in Brighton.',
    explica: 'With he / she: <i>lives</i>, with -s. In the question: Where <b>does</b> she <b>live</b>? (no -s after <i>does</i>)',
    formula: 'She <b>lives</b> in Brighton. · Where <b>does</b> she <b>live</b>?',
    tente: 'Where does your best friend live?',
    ex: 'My best friend lives in Lisbon now.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'abas', cor: '#d9534f', titulo: 'Four friends, five answers.', sub: 'Tap a moment, hear it, and ask the question behind it.', rot: { por: 'WHAT IT MEANS', padrao: 'WHERE · WHAT · WHO · WHEN', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["Hi","Bye"],["I’m","He’s"]],"iscas":["high","time","farm","wear"],"pergunta":"Where are you from? What do you like in your hometown?"},{"mentira":[["are","were"],["you","they"]],"iscas":["wear","farm","hair","frog"],"pergunta":"I’m from Swansea. What is in your hometown?"},{"mentira":[],"iscas":["zoo","his","farm","worth"],"pergunta":"Who is from a different city or country in your family or group of friends?"},{"mentira":[["house","flat"],["family","friends"]],"iscas":["mouse","leave","wish","famous"],"pergunta":"Who do you live with, and what do you like doing together?"},{"mentira":[["in","near"]],"iscas":["loves","leaves","bright","zoo"],"pergunta":"Who lives near you, and how often do you see them?"}];
