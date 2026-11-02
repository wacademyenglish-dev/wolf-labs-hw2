/* OS MOMENTOS-CHAVE de I Grew Up in Smallville (11/10/2026): quatro falas do trailer de
   Superman & Lois, todas no passado. Forma: quem disse (Lois, Clark ou Jordan?).
   Alvo: past simple. Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [3], k: 'As a family', quem: 'Lois',
    contexto: 'The Kents leave the big city and move to the old farm in Smallville. Lois explains why.',
    frase: 'We <b>came</b> here as a family.',
    quemOps: ['Lois', 'Clark', 'Jordan'],
    explica: '<i>Came</i> is the past of <i>come</i>. It is irregular: never <i>comed</i>.',
    formula: 'come → <b>came</b> · grow up → <b>grew up</b> · move → <b>moved</b>',
    tente: 'Where did you grow up? When did you come to this city?',
    ex: 'I grew up in a small town. I came to São Paulo in 2015.' },
  { i: [12, 13], k: 'You lied', quem: 'Jordan',
    contexto: 'Jordan learns the truth: his father is Superman. All those years, nobody told him.',
    frase: 'All the times you <b>were gone</b>, you lied to me. You both did.',
    quemOps: ['Lois', 'Clark', 'Jordan'],
    explica: '<i>Were gone</i> = were away. <i>You both did</i> uses <i>did</i> so he doesn’t repeat <i>lied</i>.',
    formula: 'be → <b>was / were</b> · lie → <b>lied</b> · You both <b>did</b>.',
    tente: 'Did anybody lie to you as a child? About what?',
    ex: 'My parents lied about Santa Claus. I found out at seven!' },
  { i: [14], k: 'The world', quem: 'Clark',
    contexto: 'Clark explains why he didn’t tell his sons. Superman has a job too.',
    frase: 'I <b>can’t just abandon</b> the world.',
    quemOps: ['Lois', 'Clark', 'Jordan'],
    explica: 'He didn’t tell them because he was afraid. In the past, the negative is <i>didn’t</i> + base verb.',
    formula: 'He <b>didn’t tell</b> them. · <b>Did</b> he tell them? No, he <b>didn’t</b>. · ✗ didn’t told',
    tente: 'Tell me one thing you didn’t do yesterday, and why.',
    ex: 'I didn’t go to the gym. I worked until nine!' },
  { i: [15, 16], k: 'This family', quem: 'Lois',
    contexto: 'Lois answers Clark. For years he was always flying away. Now it is time to stay.',
    frase: 'The world will always need Superman. Right now <b>this family needs you</b> more.',
    quemOps: ['Lois', 'Clark', 'Jordan'],
    explica: 'She is talking about now, but she is thinking about the past: he was never home.',
    formula: 'He <b>was</b> never home. · <b>Did</b> he <b>miss</b> birthdays? Yes, he <b>did</b>.',
    tente: 'When you were a child, was someone in your family always away? Why?',
    ex: 'My father worked on ships. He was away for months, and he missed my birthdays.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'quem', cor: '#3f86d9', titulo: 'Who said it?', sub: 'Lois, Clark or Jordan? Hear the line, choose, and then tell the story in the past.', rot: { por: 'WHAT IT MEANS', padrao: 'THE PAST', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
