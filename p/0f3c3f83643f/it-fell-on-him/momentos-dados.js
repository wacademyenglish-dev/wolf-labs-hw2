/* OS MOMENTOS-CHAVE de It Fell On Him (11/10/2026): cinco falas do trailer de Coyote vs. Acme.
   Forma: a lacuna — some a palavra que importa (you / your / he / him) e o aluno escolhe ouvindo.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1], k: 'The TV ad', quem: 'A TV ad',
    contexto: 'The trailer starts like a lawyer’s ad on TV, the kind that asks if a product hurt you.',
    frase: 'Have you been <b>horribly injured</b> by a product made by the Acme Corporation?',
    distr: ['very happy', 'really rich'],
    explica: '<i>Injured</i> = hurt. Every Acme product goes wrong, and the coyote always gets hurt.',
    formula: 'The product hurts <b>him</b>. · It falls on <b>him</b>. · It hits <b>him</b>.',
    tente: 'Is there a bad product in your house? What is it?',
    ex: 'My hair dryer is very hot. It burns me!' },
  { i: [2, 3], k: 'Not your fault', quem: 'A TV ad',
    contexto: 'The ad says the same thing to everyone: it is not your fault.',
    frase: 'It’s not <b>your fault</b>. There’s probably someone to blame.',
    distr: ['you fault', 'yours fault'],
    explica: '<i>Your</i> comes before a noun (your fault, your car). After a verb we use <i>you</i>: nobody can blame <b>you</b>.',
    formula: '<b>your</b> + noun · verb + <b>you</b>: Nobody blames <b>you</b>.',
    tente: 'Something breaks at home. Whose fault is it?',
    ex: 'My brother breaks a glass, and he says it is my fault!' },
  { i: [7], k: 'Reckless', quem: 'Acme’s lawyer',
    contexto: 'In court, the Acme lawyer points at the coyote. For him, the coyote is the problem, not the products.',
    frase: '<b>He</b> is reckless.',
    distr: ['Him', 'His'],
    explica: 'Before the verb we use <i>he</i>. After the verb, or after <i>on / to / at</i>, it changes to <i>him</i>: the anvil falls on <b>him</b>.',
    formula: '<b>He</b> + verb · verb + <b>him</b> · on / to / at + <b>him</b>',
    tente: 'Is someone in your family reckless? What does he or she do?',
    ex: 'My cousin is reckless. He rides his bike with no helmet.' },
  { i: [10, 11], k: '250 bucks', quem: 'The coyote’s lawyer',
    contexto: 'The lawyer is used to small cases. At first, he offers the coyote a very small amount of money.',
    frase: 'I could probably get <b>you</b> 250 bucks for that.',
    distr: ['your', 'you’re'],
    explica: '<i>Get you</i> = get for you. After the verb, the pronoun is the object: get <b>you</b>, help <b>him</b>, call <b>us</b>. And <i>bucks</i> = dollars (informal).',
    formula: 'get / give / help / call + <b>me · you · him · her · us · them</b>',
    tente: 'Who helps you when you have a problem? Who do you help?',
    ex: 'My sister helps me with money. I help her with her computer.' },
  { i: [19, 20], k: 'What’s up, Doc?', quem: 'Bugs Bunny',
    contexto: 'At the end, a famous rabbit appears with his famous line.',
    frase: 'Uh, <b>what is up</b>, Doc?',
    distr: ['where is up', 'who is up'],
    explica: '<i>What’s up?</i> = Hi, how are you? What’s happening? It is Bugs Bunny’s famous hello. <i>Doc</i> is just a funny name for the other person.',
    formula: '<b>What’s up?</b> → Not much! · Nothing! · All good.',
    tente: 'Answer like a friend: What’s up?',
    ex: 'Not much! Just working and watching movies.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#e8b13a', titulo: 'Five lines. One word is missing.', sub: 'Tap a moment, hear it, and choose the missing words. Then see what the line tells us.', rot: { por: 'WHAT IT MEANS', padrao: 'THE PRONOUN', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["product","toy"],["made","sold"]],"iscas":["produce","operation","terribly","mad"],"pergunta":"Have you ever been horribly injured doing something silly, like falling off a bike?"},{"mentira":[["probably","never"],["blame","thank"]],"iscas":["flame","salt","note","name"],"pergunta":"When something goes wrong, do you often feel it's your fault?"},{"mentira":[["reckless","careful"],["is","was"]],"iscas":["wreck","necklace","restless","records"],"pergunta":"Do you know someone who is reckless? What does he do?"},{"mentira":[["probably","never"],["bucks","cents"]],"iscas":["books","ducks","box","good"],"pergunta":"What is something you own that you could sell for a few bucks?"},{"mentira":[["Doc","man"],["Uh","Oh"]],"iscas":["dog","dock","cup","duck"],"pergunta":"So, what is up with you this week? Anything fun happening?"}];
