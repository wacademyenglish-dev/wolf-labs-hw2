/* OS MOMENTOS-CHAVE de Nine Times Longer (11/10/2026): o que a computação ensina sobre o nosso tempo (TED-Ed).
   Forma: a lacuna. Alvo: multiplicadores (twice as long as, four times the work, nine times longer) e the more…, the less….
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [41, 42, 43], k: 'Twice as full', quem: 'The narrator',
    contexto: 'You check your inbox and always look for the most important email first. It sounds smart. It isn’t.',
    frase: 'With an inbox that’s <b>twice as full</b>, these passes will take twice as long, and you’ll need to do twice as many of them.',
    distr: ['two times full', 'twice fuller'],
    explica: '<i>Twice</i> = two times. With <i>as … as</i>, the adjective stays in its normal form.',
    formula: '<b>twice as</b> full · <b>twice as</b> long · <b>twice as many</b> (✗ twice fuller as)',
    tente: 'Compare your week now with last year: twice as busy? half as stressful?',
    ex: 'My job is twice as busy, but my commute is half as long.' },
  { i: [44], k: 'Four times', quem: 'The narrator',
    contexto: 'Double the emails and double the passes: the result is not double.',
    frase: 'This means <b>four times the work</b>.',
    distr: ['four times work', 'four time the work'],
    explica: 'Two times two: four times. A multiplier can go straight before <i>the</i> + noun.',
    formula: 'four times <b>the</b> work · three times <b>the</b> price · ✗ four times work',
    tente: 'Tell me something that costs three times the price it cost five years ago.',
    ex: 'Coffee costs three times the price it did in 2020.' },
  { i: [47, 48, 49, 50], k: 'Ranking', quem: 'The narrator',
    contexto: 'The programmers of Linux had the same problem in 2003.',
    frase: 'Linux would rank every single one of its tasks in order of importance, and sometimes spent <b>more time ranking tasks</b> than doing them.',
    distr: ['most time', 'many time'],
    explica: 'The paradox: organizing too much leaves no time for the work itself.',
    formula: '<b>The more</b> time you rank, <b>the less</b> you do. (two THE + a comma)',
    tente: 'Finish it: The more I sleep, the…',
    ex: 'The more I sleep, the better I work. The less coffee I drink, the calmer I feel.' },
  { i: [60, 61], k: 'Nine times longer', quem: 'The narrator',
    contexto: 'Back from vacation, your inbox is three times fuller. The math is cruel.',
    frase: 'Waking up to an inbox three times fuller than normal could take <b>nine times longer</b> to clear.',
    distr: ['nine times long', 'nine time longer'],
    explica: 'Here the multiplier comes with the comparative: three times fuller, nine times longer.',
    formula: 'X <b>times</b> + comparative + than · nine times longer · three times fuller',
    tente: 'Compare two things in your life with X times + comparative.',
    ex: 'My new apartment is two times bigger than the old one.' },
  { i: [64, 65, 66], k: 'Give up perfect', quem: 'The narrator',
    contexto: 'The surprising conclusion: perfect order is not the goal.',
    frase: 'Surprisingly, sometimes <b>giving up</b> on doing things in the perfect order may be the key to getting them done.',
    distr: ['giving in', 'giving back'],
    explica: '<i>Give up on</i> = stop trying to. Less perfection, more progress.',
    formula: '<b>The less</b> perfect the order, <b>the faster</b> you finish.',
    tente: 'Finish it: The less I worry about details, the…',
    ex: 'The less I worry about details, the more I finish.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#4fa8c9', titulo: 'The math of time.', sub: 'Tap a moment, hear it, choose the missing words, then compare your own life.', rot: { por: 'WHAT IT MEANS', padrao: 'TWICE AS · X TIMES · THE MORE', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["passes","classes"],["need","hope"]],"iscas":["fool","song","cake","ice"],"pergunta":"Is your email inbox ever twice as full as you would like it to be?"},{"mentira":[["means","costs"]],"iscas":["walk","door","fork","lines"],"pergunta":"Do you ever have days with four times the work you expected?"},{"mentira":[["sometimes","never"],["importance","size"]],"iscas":["bank","masks","sent","border"],"pergunta":"Do you ever spend more time ranking tasks than actually doing them?"},{"mentira":[["three","two"],["clear","read"]],"iscas":["walking","formal","line","near"],"pergunta":"Has something ever taken you nine times longer than you expected?"},{"mentira":[["sometimes","never"],["done","started"]],"iscas":["tea","gone","border","wings"],"pergunta":"Have you ever felt better after giving up on doing something perfectly?"}];
