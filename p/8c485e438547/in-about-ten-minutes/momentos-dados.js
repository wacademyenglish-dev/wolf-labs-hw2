/* OS MOMENTOS-CHAVE de In About Ten Minutes (11/10/2026): o plano do relógio adiantado, em cinco falas.
   Forma: a linha do tempo (é uma aula sobre hora). Alvo: at / on / in com tempo.
   Lidos pela cena Line by Line do kit (kit/legenda.js). */
window.WL_MOMENTOS = [
  { i: [377, 378, 379, 380], k: 'The front desk', quem: 'Erin',
    contexto: 'Erin works at the front desk. Michael is in his office, but he can’t come to the phone.',
    frase: 'This is Erin. He’s not available <b>right now</b>. Sure, I’ll give him a message when he gets back.',
    explica: '<i>Right now</i> = at this moment. Erin is protecting a big secret: Michael is asleep.',
    formula: 'She works <b>at</b> the front desk. · <b>at</b> work · <b>at</b> the moment',
    tente: 'Where are you right now? Where are you usually at ten in the morning?',
    ex: 'Right now I’m at home. At ten I’m usually at work.' },
  { i: [383, 384, 385, 386, 387, 388], k: 'The pot pie', quem: 'Erin',
    contexto: 'She explains to the camera why the whole office is so quiet today.',
    frase: 'Michael ate an entire family-sized chicken pot pie <b>for lunch</b>, and then he promptly fell asleep.',
    explica: 'A family-sized pie is for four people. He ate it alone, and now he is asleep in the afternoon.',
    formula: '<b>at</b> lunchtime · <b>in</b> the afternoon · <b>on</b> Tuesday afternoon',
    tente: 'What do you do after lunch? Do you ever feel sleepy in the afternoon?',
    ex: 'After lunch I’m very sleepy. In the afternoon I drink a lot of coffee.' },
  { i: [389, 390, 391], k: 'Before five', quem: 'Erin',
    contexto: 'The plan: nobody wakes Michael up. Then everybody changes the clocks.',
    frase: 'So we’re all trying to be very quiet so as to not wake him up <b>before 5 PM</b>, which actually should be in about...',
    explica: 'Two ways to talk about time: the clock time, <i>at 5 PM</i>, and time from now, <i>in ten minutes</i>.',
    formula: '<b>at</b> 5 PM (the clock) · <b>in</b> ten minutes (from now) · ✗ in 5 PM',
    tente: 'What time do you finish work or class today? What are you doing in an hour?',
    ex: 'I finish at six. In an hour I’m going to the supermarket.' },
  { i: [392, 393, 394, 395, 396], k: 'The horse doctor', quem: 'Michael',
    contexto: 'Michael wakes up, sees “5 PM” on the clock, and says goodbye with a silly joke.',
    frase: 'Normally I don’t condone leaving early, but I have <b>an appointment</b> with the horse doctor.',
    explica: '<i>An appointment</i> = a time to see a doctor or a dentist. For an appointment we use all three prepositions.',
    formula: '<b>on</b> Friday · <b>at</b> 3:30 · <b>in</b> the morning · <b>in</b> October',
    tente: 'When is your next appointment? Use on, at and in.',
    ex: 'My next dentist appointment is on November 5th, at 9 AM, in the morning.' },
  { i: [405, 406, 407, 408], k: 'See you tomorrow', quem: 'Michael',
    contexto: 'The plan works perfectly. Everybody goes home early, and Michael never knows.',
    frase: 'Okay. All right. Let’s all go home. Come on. <b>See you all tomorrow</b>.',
    explica: 'Jim says “like clockwork”: everything happens on time. Tomorrow has no preposition: <i>see you tomorrow</i>.',
    formula: 'see you <b>on</b> Monday · <b>in</b> two weeks · see you <b>tomorrow</b> (no preposition)',
    tente: 'When will you see your best friend again? Say the day and the time.',
    ex: 'I’ll see her on Saturday, at the beach, in the afternoon.' }
];

window.WL_MOMENTOS_ESTILO = { forma: 'jogo', cor: '#d9a441', titulo: 'Five lines on the clock.', sub: 'Tap a mark on the timeline, hear it, and say when things happen.', rot: { por: 'WHAT IT MEANS', padrao: 'AT · ON · IN', voce: 'YOUR TURN', ex: 'LIKE THIS' } };
/* JOGO-PREPARO (21/10/2026 · a IA no preparo do Line by Line com jogos: palavras trocadas e iscas do bingo) */
window.WL_MOMENTOS_JOGO = [{"mentira":[["give","send"],["back","home"]],"iscas":["massage","bag","live","shore"],"pergunta":"What are you doing right now, and do you like it?"},{"mentira":[["ate","made"],["chicken","beef"]],"iscas":["eight","bunch","feel","pine"],"pergunta":"What do you usually have for lunch on a busy day?"},{"mentira":[["quiet","loud"],["wake","call"]],"iscas":["quite","cake","drying","berry"],"pergunta":"Do you ever have to be quiet at home so someone can sleep?"},{"mentira":[["early","late"],["horse","family"]],"iscas":["living","house","actor","point"],"pergunta":"Do you have an appointment this week, maybe with a doctor or dentist?"},{"mentira":[["go","stay"],["Come","Hold"]],"iscas":["phone","some","night","hope"],"pergunta":"Who do you say \"See you all tomorrow\" to at the end of your day?"}];
