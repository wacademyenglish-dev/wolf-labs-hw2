/* OS MOMENTOS-CHAVE de It’s Time We Stood Together (11/10/2026): cinco falas do trailer de X-Men ’97.
   Forma: quem disse. Alvo: would rather (+ verbo; + pessoa + passado), it’s (high) time + passado.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [2, 3], k: 'Goodbye', quem: 'Professor X',
    contexto: 'The Professor speaks to his students one last time. He is proud of them.',
    frase: 'I’m grateful to have the chance <b>to say goodbye</b>.',
    quemOps: ['Professor X', 'Cyclops', 'Storm', 'Magneto'],
    explica: '<i>Grateful</i> = thankful. He knows he is leaving, and he wants them to stay a family.',
    formula: 'He<b>’d rather</b> they <b>stayed</b> together. (would rather + person + past)',
    tente: 'What would you rather your family or team did more often?',
    ex: 'I’d rather my kids read more. I’d rather my boss sent fewer emails!' },
  { i: [5, 6], k: 'His dream', quem: 'Cyclops',
    contexto: 'Cyclops reminds the team what the Professor left them.',
    frase: 'We have to stay vigilant. <b>The Professor entrusted us with his dream.</b>',
    explica: '<i>Vigilant</i> = alert. <i>Entrust</i> = give something precious to someone you trust.',
    formula: '<b>It’s time</b> they <b>believed</b> in each other. (it’s time + past = it should happen now)',
    tente: 'What is it time you did? Something you are late for.',
    ex: 'It’s time I went to the dentist. It’s high time I learned to cook!' },
  { i: [7, 8, 9], k: 'Believe', quem: 'Storm',
    contexto: 'Storm answers: the team’s strength is trust.',
    frase: 'No matter how dark it is, <b>we must believe in each other</b>.',
    explica: '<i>No matter how</i> = even if it is very dark. She chooses hope over fear.',
    formula: 'I<b>’d rather</b> believe than give up. (would rather + verb + than + verb)',
    tente: 'Would you rather work alone or in a team? Why?',
    ex: 'I’d rather work in a team. I’d rather share ideas than decide alone.' },
  { i: [10, 11, 12], k: 'As a team', quem: 'Wolverine',
    contexto: 'Cyclops gives another speech about teamwork. Wolverine has heard enough.',
    frase: 'We get this done by working together as a team. — Jeez, bub, <b>keep buzzin’ in my ear</b>.',
    quemOps: ['Professor X', 'Cyclops', 'Wolverine', 'Magneto'],
    explica: '<i>Bub</i> is Wolverine’s word for “buddy”. <i>Buzzing in my ear</i> = talking non-stop, like a fly.',
    formula: 'Wolverine<b>’d rather</b> work alone. · He<b>’d rather</b> Cyclops <b>didn’t</b> talk so much.',
    tente: 'Ask your teacher three Would you rather…? questions.',
    ex: 'Would you rather fly or be invisible? Would you rather live in the city or the country?' },
  { i: [15, 16, 17], k: 'The will', quem: 'Magneto',
    contexto: 'The Professor’s will is read, and it gives everything to his old enemy.',
    frase: 'The last will and testament of Charles Xavier. <b>Everything he built now belongs to me.</b>',
    quemOps: ['Professor X', 'Cyclops', 'Storm', 'Magneto'],
    explica: '<i>Last will and testament</i> = the legal document of what you leave when you die. Nobody expected this.',
    formula: 'The team<b>’d rather</b> Magneto <b>didn’t</b> lead them. · I<b>’d rather not</b> say.',
    tente: 'Your boss leaves, and someone you don’t like takes the job. What would you rather happened?',
    ex: 'I’d rather they chose someone from the team. I’d rather not work for him!' }
];
WL_MOMENTOS[1].quemOps = WL_MOMENTOS[2].quemOps = ['Professor X', 'Cyclops', 'Storm', 'Wolverine'];

window.WL_MOMENTOS_ESTILO = { forma: 'quem', cor: '#e0c23a', titulo: 'Who said it, X-Men?', sub: 'Hear the line, say which X-Man says it, then tell us what you would rather.', rot: { por: 'WHAT IT MEANS', padrao: 'WOULD RATHER · IT’S TIME', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
