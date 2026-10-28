/* AU PAIR 14 · RED FLAGS (CURSOS, A2+/B1) · conversa · 26/10/2026 · regra 3×3 do Carlos (CURSOS: 1 momento + 3 surpresas)
   O semáforo entra DEPOIS de "III · Spot the Scam" (apos: 'erros') e ANTES de "IV · I Can": o I Can é a checagem
   com carimbo e guarda o link da lição de casa, então fica por último e intacto (nada de hw aqui). O II já separa
   OK × red flag em casos claros; aqui são cinco casos CINZENTOS, já na casa da família, e o amarelo ("talk to
   them first") é a escolha que mais rende conversa. A língua da aula (I’d like to …, talk to my coordinator,
   it’s a red flag because …) mora nos iniciadores. Nada de toque/assédio aqui: o II já trata disso com cuidado. */
window.WL_CONVERSA = { nivel: 'B1', cenas: [
  { id: 'semaforo', apos: 'erros', est: 'o', min: 7, img: 'conversa', rot: 'Traffic Light',
    t: 'Five moments in the house. Green, yellow or red?',
    p: 'Choose a color for each moment, or say your own idea. Then say what you would do. Your teacher pushes back.',
    formato: 'escolha',
    rodadas: [
      { tag: 'The dog', sit: 'Week two. Your host mom says: “Can you also walk the dog every morning? The kids love to come.”',
        q: 'Green, yellow or red?', opc: [{ t: 'Green · it’s OK', cor: 'g' }, { t: 'Yellow · talk to them first', cor: 'y' }, { t: 'Red · call my coordinator', cor: 'r' }],
        st: ['It’s OK, because …', 'I’d like to talk about …', 'It’s a red flag because …'],
        ex: 'Green, if the kids come with me. It’s time with the children. If it’s only the dog, I’d like to talk about it.',
        push: 'And if next week it’s the dog, the car wash and the groceries?' },
      { tag: 'Extra hours', sit: 'Your schedule says 45 hours. This week you worked 50. The family says: “It’s only this week. We’ll pay you more.”',
        q: 'Green, yellow or red?', opc: [{ t: 'Green · it’s OK', cor: 'g' }, { t: 'Yellow · talk to them first', cor: 'y' }, { t: 'Red · call my coordinator', cor: 'r' }],
        st: ['It’s only OK if …', 'I’d like to keep my hours …', 'In the USA, more than 45 hours …'],
        ex: 'Yellow, almost red. In the USA, more than 45 hours is not allowed, even with extra pay. I’d talk to them today, and if it happens again, I’d call my coordinator.',
        push: 'They are really nice people and they are in trouble this week. Still yellow?' },
      { tag: 'The phone', sit: 'The host dad says: “House rule: your phone stays in the kitchen after 10 PM.”',
        q: 'Green, yellow or red?', opc: [{ t: 'Green · it’s OK', cor: 'g' }, { t: 'Yellow · talk to them first', cor: 'y' }, { t: 'Red · call my coordinator', cor: 'r' }],
        st: ['I understand the rule, but …', 'I’d like to keep my phone …', 'It’s a red flag because …'],
        ex: 'Yellow. I understand a rule for the kids, but I’m an adult. I’d like to keep my phone with me: my family calls at night from Brazil.',
        push: 'And if the rule is only “no phone at the dinner table”?' },
      { tag: 'The room', sit: 'Grandma visits for a month. The family says: “She can sleep in your room with you. It’s only four weeks.”',
        q: 'Green, yellow or red?', opc: [{ t: 'Green · it’s OK', cor: 'g' }, { t: 'Yellow · talk to them first', cor: 'y' }, { t: 'Red · call my coordinator', cor: 'r' }],
        st: ['A private room is …', 'I’d like to …', 'I’d talk to my coordinator, because …'],
        ex: 'Red. A private room is a program rule, not a favor. I’d say no politely, and I’d tell my coordinator.',
        push: 'Grandma is lovely and she cooks for you every day. Do you still say no?' },
      { tag: 'Friends', sit: 'You want to meet the other au pairs in town on Saturday. The host mom says: “I don’t like those girls. Stay home with us.”',
        q: 'Green, yellow or red?', opc: [{ t: 'Green · it’s OK', cor: 'g' }, { t: 'Yellow · talk to them first', cor: 'y' }, { t: 'Red · call my coordinator', cor: 'r' }],
        st: ['On my day off, I …', 'I’d like to meet …', 'It’s a red flag because …'],
        ex: 'Red if it happens every weekend. Saturday is my free time. Isolation is a red flag, so I’d talk to my coordinator.',
        push: 'It’s only the first time she says it. Red already?' }
    ],
    fim: { tag: 'Your red line', q: 'One thing a family can NEVER ask you. What is it, and what do you say?', segundos: 45,
      nota: 'Forty-five seconds. Then your teacher plays the family and asks for it.',
      st: ['A family can never ask me to …', 'I’d say: “I’d like to …”'],
      ex: 'A family can never ask me to keep my passport. I’d say: “I’d like to keep it with me, thank you.”',
      push: 'Now I’m the host mom, and I ask nicely. Say no, kindly.' } }
] };
