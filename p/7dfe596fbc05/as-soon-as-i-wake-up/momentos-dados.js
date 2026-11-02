/* OS MOMENTOS-CHAVE de As Soon As I Wake Up (11/10/2026): a rotina contada no Easy English.
   Forma: a ordem (o dia na ordem). Alvo: as soon as, until, by the time, when / before / after + PRESENTE para o futuro.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [9, 10, 11], k: 'Wake up', quem: 'A friend on the call',
    contexto: 'Friends on a video call tell each other their day, step by step.',
    frase: 'I <b>wake up</b>. I eat breakfast. I go jogging.',
    explica: 'Short sentences, one after the other. We can join them with time words.',
    formula: '<b>As soon as</b> I wake up, I eat breakfast. (as soon as = immediately after)',
    tente: 'What do you do as soon as you wake up?',
    ex: 'As soon as I wake up, I check my phone. Bad habit!' },
  { i: [12, 13], k: 'On the bus', quem: 'A friend on the call',
    contexto: 'The trip to work: a bus and a book.',
    frase: 'I get the bus to work. <b>I read a book on the bus</b>.',
    explica: 'He reads during the whole trip, and he stops when he arrives.',
    formula: 'I read <b>until</b> I <b>arrive</b>. (until + present · ✗ until I will arrive)',
    tente: 'What do you do until you arrive at work or school?',
    ex: 'I listen to podcasts until I get to the office.' },
  { i: [15], k: 'After work', quem: 'A friend on the call',
    contexto: 'Work finishes, and the best part of the day starts.',
    frase: '<b>After I finish work</b>, I swim in the sea.',
    explica: 'Use the present after ’after’, even for tomorrow.',
    formula: 'After I <b>finish</b>, I’ll swim. · ✗ After I will finish',
    tente: 'What will you do after you finish today?',
    ex: 'After I finish, I’ll go to the gym. Then I’ll cook.' },
  { i: [16, 17, 18], k: 'Sleep', quem: 'A friend on the call',
    contexto: 'The end of the day, in three short steps.',
    frase: 'I eat dinner. I have a shower. <b>Then I go to sleep</b>.',
    explica: 'By bedtime, the day is complete. <i>By the time</i> = at that moment, already.',
    formula: '<b>By the time</b> I go to sleep, I’m tired. · <b>before</b> I sleep',
    tente: 'What have you done by the time you go to sleep?',
    ex: 'By the time I go to sleep, I’ve answered all my messages.' },
  { i: [29, 30, 31], k: 'Video games', quem: 'Another friend',
    contexto: 'Another friend tells her evening: the park, dinner, and then games.',
    frase: 'After work, I go to the park. I go home and cook dinner. <b>After dinner, I play video games</b>.',
    explica: 'For a plan, the main verb can be future, but the time part stays in the present.',
    formula: 'I’ll play <b>when</b> I <b>get</b> home. · ✗ when I will get home',
    tente: 'Tell me your plan for tonight with when and as soon as.',
    ex: 'When I get home, I’ll call my sister. As soon as she answers, we’ll laugh!' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'ordem', cor: '#e8a33c', titulo: 'A day, in order.', sub: 'Put the five moments in order. Then tell the day with as soon as, until and after.', rot: { por: 'WHAT IT MEANS', padrao: 'AS SOON AS · UNTIL · BY THE TIME', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
