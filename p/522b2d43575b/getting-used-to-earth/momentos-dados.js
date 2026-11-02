/* OS MOMENTOS-CHAVE de Getting Used to Earth (11/10/2026): cinco falas do trailer de Supergirl.
   Forma: as abas. Alvo: used to (hábito que acabou) × be used to (já é normal) × get used to (ficando normal).
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1, 2, 3], k: 'Touching base', quem: 'Clark, on the phone',
    contexto: 'Clark calls his cousin Kara. She keeps leaving Earth, and he is worried about her.',
    frase: 'Hey, I was just touching base to see when you think you might be coming back. I’m just worried that <b>you’re not gonna find your stride</b> here.',
    explica: '<i>Touch base</i> = check in quickly. <i>Find your stride</i> = feel comfortable and confident somewhere.',
    formula: 'She <b>isn’t used to</b> Clark’s calls yet. (be used to + noun = it’s normal for her)',
    tente: 'What are you used to now that wasn’t normal for you before?',
    ex: 'I’m used to working from home now. At first it was strange.' },
  { i: [5, 6, 7, 8], k: 'No people', quem: 'Kara',
    contexto: 'Clark is worried she won’t find her people. Kara answers with a hard truth.',
    frase: 'Worried you’re not gonna find your people. — Yeah. Well, that’s the thing, Clark. <b>No people.</b>',
    explica: 'Her planet is gone. She used to have a family, a home, a world. Not anymore.',
    formula: 'She <b>used to</b> have a family. (past habit or state that ended) · ✗ she use to',
    tente: 'Tell me three things you used to have or do that you don’t now.',
    ex: 'I used to have long hair. I used to live with my parents. I used to eat meat.' },
  { i: [10, 11, 12, 13], k: 'Lucky', quem: 'Kara',
    contexto: 'She and her dog Krypto survived together. She thought that was luck.',
    frase: 'Krypto and I at least had each other. Honestly, <b>I thought we were lucky</b>. But luck, almost by definition, runs out.',
    explica: '<i>Runs out</i> = ends, there is no more. Krypto is used to being her only friend.',
    formula: 'Krypto <b>is used to being</b> her only friend. (be used to + <b>-ing</b>) · ✗ is used to be',
    tente: 'What is your pet or your best friend used to doing with you?',
    ex: 'My dog is used to sleeping on my bed. My friend is used to me being late!' },
  { i: [28, 29], k: 'No home', quem: 'Kara',
    contexto: 'Krypto is hurt. Kara speaks to him softly.',
    frase: 'There is <b>no home</b> without you, buddy.',
    explica: 'Home is not a planet for her: it’s her dog. Slowly, she is getting used to Earth too.',
    formula: 'She <b>is getting used to</b> calling Earth home. (get used to = becoming normal)',
    tente: 'What are you getting used to these days?',
    ex: 'I’m getting used to waking up at six for my new job. It’s hard!' },
  { i: [30, 31, 32, 33], k: 'Dive bar', quem: 'Kara and a new friend',
    contexto: 'A girl she met in a bar has a funny nickname for her. Kara has one for the girl too.',
    frase: '<b>Ditz from that dive bar?</b> — Funny! That’s what I’ve been calling you!',
    explica: '<i>Ditz</i> = a silly person (a joke). <i>Dive bar</i> = a cheap, simple bar. Making friends: something new for Kara.',
    formula: 'She <b>used to</b> drink alone. Now she <b>is getting used to</b> having friends.',
    tente: 'What was hard to get used to when you started a new job, school or city?',
    ex: 'It was hard to get used to the cold in Curitiba. Now I’m used to it.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#3f8fe0', titulo: 'Five lines from a new home.', sub: 'Tap a moment and choose: used to, be used to, or get used to?', rot: { por: 'WHAT IT MEANS', padrao: 'USED TO · BE / GET USED TO', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["coming","going"],["here","there"]],"iscas":["case","hurried","teaching","sink"],"pergunta":"Have you ever started somewhere new and needed time to find your stride?"},{"mentira":[["find","meet"],["thing","problem"]],"iscas":["mind","sing","wall","hurried"],"pergunta":"Is there a place where you feel you have your people?"},{"mentira":[["least","most"],["luck","love"]],"iscas":["mother","beach","guns","east"],"pergunta":"Who do you think you're lucky to have in your life?"},{"mentira":[["without","with"],["buddy","friend"]],"iscas":["phone","about","body","muddy"],"pergunta":"What makes a place feel like home to you?"},{"mentira":[["Funny","Sorry"],["calling","telling"]],"iscas":["sunny","falling","five","car"],"pergunta":"Has anyone ever given you a funny nickname? What was it?"}];
