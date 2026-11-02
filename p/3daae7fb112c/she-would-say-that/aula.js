/* ============================================================
   SHE WOULD SAY THAT · C1 · UNIT 2 (MODALS WITH NUANCE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: will e would para comportamento típico e previsível: She would say that, wouldn’t she?
   (era de se esperar); He will leave his socks everywhere (hábito irritante, will com ênfase);
   Grandpa would sit by the window for hours (hábito passado, com nostalgia); is always -ing (queixa).
   Armadilha do português: "ela ia dizer isso mesmo" vira she was going to say that; usar would para
   estado no passado (would live / would have a dog) em vez de used to.
   O mundo: dois irmãos arrumando a casa dos avós, falando da família.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 2, titulo: ['She Would', 'Say That'], tema: 'Typical, predictable, annoying.',
  sub: '“Mum says she loves the new sofa.” “Well, she would say that, wouldn’t she?” Learn how natives use will and would to talk about character: what people typically do, and what drives us crazy.',
  placa: 'GRANDMA’S HOUSE · SUNDAY', lugarConversa: 'THE OLD ARMCHAIR', cor: '#d9a8c4', cor2: '#ecd3e1',
  chips: ['she would say that', 'he will leave his socks', 'grandpa would sit'], botao: 'Start the lesson', nota: 'Here will and would are not about the future. They are about character.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'I · Who Does That?', t: 'Annoying or charming? Choose and explain.', p: 'Choose A or B. Then say who in your life does it.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · Two Siblings', t: 'Clearing out Grandma’s house.', p: 'Read the dialogue out loud, with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · Future or Character?', t: 'Will and would, but no future at all.', p: 'Compare A and B. What is will or would doing here?' },
  { k: 'transforma', est: 'f', min: 7, img: 'capa', rot: 'IV · Say It With Character', t: 'Neutral → typical.', p: 'Read the neutral sentence. Use the clue. Say it with will or would.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'conversa', rot: 'V · The Hot Seat', t: 'Now YOU ask about my family.', p: 'Ask your teacher about the people in their life. React with will / would.' }
];
var PORTAS = [];

var ESCOLHA = [
  { a: 'a flatmate who will always leave dirty cups in the sink', b: 'a flatmate who will always play loud music at night', chips: ['I couldn’t stand someone who will …', 'My … will always …'], ex: 'Cups. Music at night would drive me crazy. My brother will play the guitar at 1 AM!' },
  { a: 'a grandparent who would tell the same story every Sunday', b: 'a grandparent who would never talk about the past', chips: ['My grandfather would …', 'He / She would always …'], ex: 'The same story! My grandmother would tell us about the war every Sunday. I miss it.' },
  { a: 'a boss who will reply to emails at midnight', b: 'a boss who will never reply at all', chips: ['My boss will …', 'He / She’s always …ing'], ex: 'Midnight emails. At least they answer. My old boss would never reply.' }];

var LEITURA = { rot: 'SUNDAY · CLEARING OUT GRANDMA’S HOUSE', tipo: 'chat',
  antes: { q: 'Think of an older person in your family. What did they always do, every single time?', h: 'My grandfather always made coffee at 4 PM, no matter what.' },
  texto: 'LIA: Look, Grandpa’s chair. He {would sit} here for hours and watch the street.\nTOM: And he {would tell} everyone who walked past about his football team.\nLIA: Mum called. She says she doesn’t want anything from the house.\nTOM: Well, she {would say that}, {wouldn’t she}? Then next week she’ll ask where the teapot is.\nLIA: True. And Dad {will keep asking} if we found his old records.\nTOM: He {will leave} his coffee cups all over this house, even now!\nLIA: And you {are always losing} the keys. Where are they?\nTOM: In my pocket. Probably.',
  perguntas: [
    { q: 'What did Grandpa do every day?', h: 'He sat in his chair for hours, watched the street and talked to everyone about football.' },
    { q: 'Does Tom believe his mother? Why not?', h: 'No. It’s typical of her to say she wants nothing, and then ask for the teapot.' },
    { q: 'What annoys Tom and Lia about their father?', h: 'He keeps asking about his records and leaves coffee cups everywhere.' },
    { q: 'What’s Lia’s complaint about Tom?', h: 'He is always losing the keys.' }],
  olha: 'Find will and would. Is any of them about the future? What are they about?' };

var DESCOBRE = {
  pares: [
    { a: 'Grandpa {would sit} here for hours.', b: 'Grandpa {would sit} here if he were alive.', q: 'Same words. Two very different meanings. What are they?', r: 'A: a typical habit in the past (= used to). B: an imaginary situation (conditional). Context tells you which.' },
    { a: 'She {would say that}, {wouldn’t she}?', b: 'She {was going to say} that.', q: 'Which one means “of course she said that, it’s typical of her”?', r: 'A. would say that = predictable, typical of that person. B is a plan in the past.' },
    { a: 'He {will leave} his cups everywhere!', b: 'He {will leave} tomorrow at six.', q: 'One is the future. What is the other one?', r: 'A: an annoying habit (we stress WILL in speech). B: the future.' },
    { a: 'Grandpa {used to have} a dog.', b: 'Grandpa {would have} a dog.', q: 'Which one is right for a past STATE?', r: 'A. would works for repeated actions (would sit, would tell), not for states (have, live, be). For states: used to.' }],
  regra: [['WOULD · TYPICAL PAST', 'Grandpa would sit here for hours. (actions, not states)'], ['WILL · TYPICAL NOW', 'Cats will sleep anywhere. He’ll always help you.'], ['WILL (stressed) · ANNOYING', 'He WILL leave his cups everywhere!'], ['WOULD SAY THAT', 'Of course she would say that: it’s typical of her.']],
  armas: [
    ['STATE', 'When I was a kid, we would live in Recife.', 'When I was a kid, we <b>used to live</b> in Recife.', 'States (live, have, be): used to, not would.'],
    ['TYPICAL', 'She was going to say that, wasn’t she?', 'She <b>would say that</b>, wouldn’t she?', 'Typical of her: would say that.'],
    ['ANNOYING', 'He always will leave the lights on.', 'He <b>will</b> leave the lights on!', 'Stress will; no need for always.'],
    ['COMPLAINT', 'You always lose your keys!', 'You’re <b>always losing</b> your keys!', 'is always -ing = a complaint about a habit.']] };

var TRANSFORMA = { rot: 'NEUTRAL → TYPICAL', fim: 'Six sentences with character.',
  itens: [
    { de: 'Every Sunday, Grandma cooked for twenty people.', pista: 'would …', para: 'Every Sunday, Grandma would cook for twenty people.' },
    { de: 'Of course the salesman said it was the best car. That’s typical.', pista: 'he would …', para: 'He would say that, wouldn’t he?' },
    { de: 'My flatmate leaves wet towels on the floor. It drives me crazy.', pista: 'will (stressed)', para: 'My flatmate WILL leave wet towels on the floor!' },
    { de: 'My son loses his phone all the time. So annoying!', pista: 'always …ing', para: 'My son is always losing his phone!' },
    { de: 'Cats usually sleep wherever they want.', pista: 'will …', para: 'Cats will sleep wherever they want.' },
    { de: 'At school, my teacher often made us sing in English.', pista: 'would …', para: 'At school, my teacher would make us sing in English.' }] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · She Would Say That: escolha · leitura · descobre · transforma · cadeira */
var CADEIRA = { itens: [
  { alvo: 'Ask me what my grandparents would do on Sundays.', dica: 'What would your grandparents do on Sundays?', resp: 'My grandmother would make pasta for everyone.' },
  { alvo: 'Ask me about someone who will always be late.', dica: 'Do you know someone who will always be late?', resp: 'My best friend. She’ll always arrive twenty minutes late!' },
  { alvo: 'Ask me about a habit that drives me crazy.', dica: 'What habit drives you crazy?', resp: 'People who will talk on the phone in the cinema!' },
  { alvo: 'Tell me something a politician said. Let me react.', dica: 'The minister says the economy is great.', resp: 'Well, he would say that, wouldn’t he?' },
  { alvo: 'Ask me what I was always doing as a teenager.', dica: 'What were you always doing as a teenager?', resp: 'I was always losing my keys. I still am!' }] };
