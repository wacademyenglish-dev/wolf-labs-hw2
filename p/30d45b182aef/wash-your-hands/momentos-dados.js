/* OS MOMENTOS-CHAVE de Wash Your Hands, Kevin (11/10/2026): a mesa sumida do Dwight, em cinco falas.
   Forma: a linha do tempo — os momentos na régua do vídeo. Alvo: o imperativo (verbo no começo,
   Don’t + verbo). Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [2, 3, 4], k: 'No desk', quem: 'Dwight',
    contexto: 'Dwight arrives at work, and his desk is not there. For him, this is a crime.',
    frase: 'Where is <b>my desk</b>? That is weird. This is not funny.',
    explica: 'He asks a question now, but in a second he gives orders. In English an order starts with the verb, with no <i>you</i>.',
    formula: '<b>Give</b> me my desk! · <b>Tell</b> me the truth! (verb first)',
    tente: 'Something of yours is missing. Give two orders.',
    ex: 'Give me my phone! Tell me where it is!' },
  { i: [8, 9], k: 'Calm down', quem: 'A coworker',
    contexto: 'His coworkers are calm. Maybe too calm. They tell him to relax and think.',
    frase: 'Okay, <b>calm down</b>. Where was the last place you saw it?',
    explica: '<i>Calm down</i> is an order, but a kind one. The negative is <i>Don’t</i> + verb: <i>Don’t panic</i>.',
    formula: '<b>Calm down.</b> · <b>Don’t</b> panic. · <b>Don’t be</b> angry.',
    tente: 'Your friend is very angry. Tell him three things.',
    ex: 'Calm down. Don’t shout. Sit here with me.' },
  { i: [14, 15, 16], k: 'Colder, warmer', quem: 'The office',
    contexto: 'Now they play hot and cold: Dwight walks, and the office says warmer or colder.',
    frase: '<b>Colder</b>... warmer. Little warmer.',
    explica: 'Warmer = you are near. Colder = you are far. It is a game, and it is full of short orders.',
    formula: '<b>Go</b> left. <b>Turn</b> right. <b>Don’t stop</b>. <b>Come</b> back!',
    tente: 'Play hot and cold: hide a pen in the room and give directions.',
    ex: 'Stand up. Go left. Warmer! Look under the book. Hot!' },
  { i: [29, 30], k: 'Twenty times', quem: 'Dwight, on the phone',
    contexto: 'The desk is in the men’s bathroom. Dwight works there, very seriously, and answers the phone.',
    frase: 'Jim, I’ve given you this information <b>like 20 times</b>.',
    explica: '<i>Like 20 times</i> = about 20 times, many times. He is tired of the same question.',
    formula: 'Please <b>listen</b>. · <b>Write</b> it down. · <b>Don’t ask</b> me again!',
    tente: 'What do you say twenty times at home? Say it as an order.',
    ex: 'Close the door! Don’t leave your shoes in the kitchen!' },
  { i: [38], k: 'Kevin', quem: 'Dwight',
    contexto: 'Kevin comes into the bathroom, and Dwight, at his desk, has one more order.',
    frase: '<b>Wash your hands</b>, Kevin.',
    explica: 'The funniest order of the day, and a perfect imperative: verb, then the rest. Add <i>please</i> to be polite.',
    formula: '<b>Wash</b> your hands. · Please <b>don’t</b> forget. · <b>Let’s</b> go back to work.',
    tente: 'You are the boss of the office for one day. Give three orders.',
    ex: 'Let’s finish at four. Don’t eat at your desk. Please wash your hands!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#7fb0e0', titulo: 'Five orders on the timeline.', sub: 'Tap a mark on the line, hear it, and see the order behind the joke.', rot: { por: 'WHAT IT MEANS', padrao: 'THE ORDER', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["weird","normal"],["funny","easy"]],"iscas":["sunny","beard","wear","dust"],"pergunta":"Where is your desk at home, and what do you usually keep on it?"},{"mentira":[["last","first"],["saw","left"]],"iscas":["plate","list","town","wear"],"pergunta":"When you feel stressed, what helps you calm down?"},{"mentira":[["warmer","colder"],["Little","Much"]],"iscas":["older","farmer","middle","title"],"pergunta":"Do you like cold weather, or hot days?"},{"mentira":[["given","sent"],["information","money"]],"iscas":["driven","station","lines","nation"],"pergunta":"What do you say to a friend again and again?"},{"mentira":[],"iscas":["watch","lands","bands","wish"],"pergunta":"Do you always wash your hands before you eat at home?"}];
