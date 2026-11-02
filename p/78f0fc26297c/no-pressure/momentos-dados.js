/* OS MOMENTOS-CHAVE de No Pressure (11/10/2026): o primeiro dia em Hogwarts, em cinco falas.
   Forma: a linha do tempo. Alvo: want / expect / need / tell + pessoa + to + verbo.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [0, 1, 2], k: 'The Sorting', quem: 'A professor',
    contexto: 'The new students arrive. Before dinner, the school puts each one in a house.',
    frase: 'Before the start-of-term banquet, first years will <b>partake in the sorting ceremony</b>.',
    explica: '<i>Partake in</i> = take part in (formal). The house is where they will live for seven years.',
    formula: 'The school <b>wants them to sit</b> with their house. · ✗ wants that they sit',
    tente: 'What did your school or your boss want you to do on your first day?',
    ex: 'My boss wanted me to read the manual. My mom wanted me to make friends.' },
  { i: [5, 6], k: 'Summer reading', quem: 'Hermione and Ron',
    contexto: 'Hermione did all the summer reading. Ron didn’t know there was any.',
    frase: 'Did you love <b>the summer reading</b>? — There was a summer reading?',
    explica: 'The joke is in the second line: Ron had no idea. Hermione expected everybody to read.',
    formula: 'Hermione <b>expected them to read</b> it. (expect + person + to)',
    tente: 'What do your friends or family expect you to do on weekends?',
    ex: 'My parents expect me to visit them on Sundays.' },
  { i: [15, 16], k: 'Not Slytherin', quem: 'Harry',
    contexto: 'The talking hat is on Harry’s head. He has one wish.',
    frase: '<b>Not Slytherin</b>, not Slytherin. — Gryffindor!',
    explica: 'He asks the hat quietly, and it listens. Notice the structure: want + the hat + to choose.',
    formula: 'He <b>doesn’t want the hat to choose</b> Slytherin. · ✗ doesn’t want that the hat chooses',
    tente: 'What don’t you want your boss or your family to do this week?',
    ex: 'I don’t want my boss to call me on Saturday!' },
  { i: [18, 19, 20, 21], k: 'Work hard', quem: 'A professor',
    contexto: 'A professor tells Harry what she expects from him.',
    frase: 'Mr. Potter, <b>I expect you to work hard</b>. Find what sparks your interest. Make a solid friendship.',
    explica: '<i>Sparks your interest</i> = makes you curious. Three pieces of advice in a row, all in the imperative.',
    formula: 'She <b>expects him to work</b> hard. · She <b>told him to find</b> his interest. · <b>told him not to</b> …',
    tente: 'What did a good teacher tell you to do? What did they tell you not to do?',
    ex: 'My math teacher told me to practice every day. She told me not to give up.' },
  { i: [27, 28, 29], k: 'Prepare them', quem: 'Two teachers',
    contexto: 'Two teachers talk about the dangers in the castle.',
    frase: 'You can’t protect them. <b>I can only prepare them.</b>',
    explica: 'Teachers can’t stop every danger. They can make the students ready for it.',
    formula: 'They <b>need the children to be</b> ready. · They <b>would like them to</b> be safe.',
    tente: 'What do you need your students, kids or coworkers to do better?',
    ex: 'I need my team to answer emails faster. I’d like them to ask more questions.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#c9a24a', titulo: 'The first day, on the timeline.', sub: 'Tap a mark, hear the line, and say what everyone wants and expects.', rot: { por: 'WHAT IT MEANS', padrao: 'WANT / EXPECT + PERSON + TO', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["first","second"],["banquet","meeting"]],"iscas":["ears","turn","smart","blanket"],"pergunta":"Have you ever had to partake in a special ceremony when you started something new?"},{"mentira":[["love","hate"],["was","is"]],"iscas":["glove","live","leading","number"],"pergunta":"Did you ever have a summer reading for school, and did you actually do it?"},{"mentira":[],"iscas":["knot","note","door","floor"],"pergunta":"Have you ever hoped 'Not that one!' about something important? What happened?"},{"mentira":[["interest","anger"],["solid","weak"]],"iscas":["parks","salad","fine","trend"],"pergunta":"Is there something you expect yourself to work hard on this year?"},{"mentira":[["protect","teach"],["can’t","can"]],"iscas":["perfect","repair","prefer","project"],"pergunta":"Who do you try to prepare for hard times, and how do you help them?"}];
