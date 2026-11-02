/* OS MOMENTOS-CHAVE de Unless Somebody Goes (11/10/2026): o prólogo de The Lord of the Rings em cinco falas.
   Forma: a linha do tempo (a história dos anéis). Alvo: first conditional, unless, when / as soon as.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1, 2], k: 'The Great Rings', quem: 'Galadriel, the narrator',
    contexto: 'The story starts long ago, when magic rings were made for each people of Middle-earth.',
    frase: 'It began with the forging of the Great Rings. Three were given to the Elves, <b>immortal, wisest and fairest</b> of all beings.',
    explica: '<i>Forging</i> = making metal in fire. <i>Fairest</i> = most beautiful (old English). Every people gets power.',
    formula: 'If you <b>give</b> them power, they <b>will</b> want more. (if + present, will + verb)',
    tente: 'If someone gives you a lot of power at work, what will you do first?',
    ex: 'If my boss gives me power, I will change the meeting times!' },
  { i: [6, 7, 8], k: 'Nine for Men', quem: 'Galadriel, the narrator',
    contexto: 'Nine rings go to Men, and the narrator says what Men want most.',
    frase: 'Nine rings were gifted to the race of men, who <b>above all else, desire power</b>.',
    explica: '<i>Above all else</i> = more than anything. A ring of power is dangerous in the hands of someone who wants power.',
    formula: 'If men <b>get</b> a ring, they <b>will want</b> more. · ✗ If they will get',
    tente: 'What will happen if you give a teenager a credit card?',
    ex: 'If you give him a credit card, he will buy a new phone in an hour.' },
  { i: [11, 12, 13, 14, 15], k: 'Another ring', quem: 'Galadriel, the narrator',
    contexto: 'Everybody was tricked. In secret, the Dark Lord made one more ring.',
    frase: 'But they were all of them deceived, for <b>another ring was made</b>. In the land of Mordor, Sauron forged in secret a master ring to control all others.',
    explica: '<i>Deceived</i> = tricked. One ring controls all the others. Somebody has to stop him.',
    formula: '<b>Unless</b> someone <b>stops</b> him, he <b>will rule</b> them all. (unless = if… not)',
    tente: 'Finish it: Unless I study this week, …',
    ex: 'Unless I study this week, I won’t pass the test.' },
  { i: [23, 24, 25, 26, 27], k: 'The last alliance', quem: 'Galadriel, the narrator',
    contexto: 'Some people say no. Men and Elves fight together against the Dark Lord.',
    frase: 'But there were some who resisted. <b>A last alliance of men and elves</b> marched against the armies of Mordor.',
    explica: '<i>Resist</i> = fight against, not accept. <i>Alliance</i> = a team of different peoples.',
    formula: 'If we <b>fight</b> together, we <b>will win</b>. · <b>When</b> they <b>arrive</b>, the battle <b>will</b> start.',
    tente: 'What will happen if your team at work or school works together this month?',
    ex: 'If we work together, we will finish the project early.' },
  { i: [36, 37, 38, 39, 40], k: 'One chance', quem: 'Galadriel, the narrator',
    contexto: 'Sauron is defeated. Isildur has the ring, and one chance to destroy it.',
    frase: 'The Ring passed to Isildur, who had this one chance to destroy evil forever. But <b>the hearts of men are easily corrupted</b>.',
    explica: '<i>Corrupted</i> = made bad. The ring has a will of its own: it wants to go back to its master.',
    formula: 'If he <b>keeps</b> it, it <b>will betray</b> him. · <b>As soon as</b> he <b>takes</b> it, it <b>will</b> change him.',
    tente: 'You find a magic ring. What will happen as soon as you put it on?',
    ex: 'As soon as I put it on, I will become invisible, and I will go to every concert for free!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#c9a24a', titulo: 'The story of the Ring.', sub: 'Tap a mark on the line, hear the narrator, and say what will happen if…', rot: { por: 'WHAT IT MEANS', padrao: 'IF · UNLESS · AS SOON AS', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["began","ended"],["given","sent"]],"iscas":["tree","kings","beans","foreign"],"pergunta":"Who is the wisest and fairest person you know, and why?"},{"mentira":[["gifted","sold"],["race","land"]],"iscas":["face","ten","tower","lifted"],"pergunta":"Above all else, what do you desire most in your life right now?"},{"mentira":[["deceived","warned"],["secret","public"]],"iscas":["forced","hand","faster","mad"],"pergunta":"Have you ever kept a big secret for a long time? What was it?"},{"mentira":[["some","many"],["against","with"]],"iscas":["watched","insisted","arms","fast"],"pergunta":"Have you ever joined a group of friends to stand up for something?"},{"mentira":[["passed","returned"],["destroy","fight"]],"iscas":["change","parts","before","past"],"pergunta":"Do you think people are easily corrupted by money or power? Why?"}];
