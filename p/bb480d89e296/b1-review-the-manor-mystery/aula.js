/* ============================================================
   REVIEW · B1 · UNIT 6 · THE MANOR MYSTERY · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: dado · missao · memoria · conversa · pode.
   Unidade 6 (Dever, poder, deduzir): must / have to / mustn’t / don’t have to; be supposed to;
   could / was able to / managed to; deduzir no presente (must be, might be, can’t be) e no passado
   (must have, might have, can’t have).
   A missão: fim de semana numa mansão antiga; às duas da manhã um vaso famoso caiu e quebrou. O
   aluno ouve três hóspedes e deduz quem pode ter sido. (Foi o vento: alguém abriu a janela, e
   ninguém devia abrir.)
   ============================================================ */
var REV = { nivel: 'B1', unidade: 6, titulo: ['The Manor', 'Mystery'], tema: 'Rules, abilities and guesses', placa: 'ASHWORTH MANOR', lugarConversa: 'BY THE FIRE', cor: '#d9a0e8', cor2: '#ecd0f3',
  sub: 'Unit 6 review. A weekend at old Ashworth Manor. At two in the morning, the famous blue vase fell and broke. Three guests were awake. Who could it have been?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Blue Vase', t: 'Three guests. Who could it have been?', p: 'Ask each guest five questions. Your teacher is the guest. Then say what you think: must have, might have, can’t have.' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'III · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'conversa', est: 'o', min: 8, img: 'conversa', rot: 'IV · By the Fire', t: 'Rules and guesses in your life.', p: 'Answer, then ask back: “What about you?”' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'MUST / HAVE TO', tema: 'must, have to, mustn’t, don’t have to', t: 'Your job or your home: two things you have to do, one you mustn’t, one you don’t have to.', ex: 'I have to wake up at six and I must answer emails fast. I mustn’t be late, but I don’t have to wear a suit.', trap: 'mustn’t = it’s not allowed. don’t have to = it’s not necessary.' },
  { k: 'SHOULD', tema: 'should and shouldn’t for advice', t: 'A friend can’t sleep. Give three pieces of advice.', ex: 'You should drink less coffee, you shouldn’t look at your phone in bed, and you should go for a walk.', trap: '“You should to sleep” → you should sleep.' },
  { k: 'SUPPOSED TO', tema: 'be supposed to, be expected to', t: 'A dinner at a Brazilian home: what are guests supposed to do?', ex: 'You’re supposed to bring something, and you’re expected to stay for coffee!', trap: 'The rule people expect: be supposed to + verb.' },
  { k: 'MANAGED TO', tema: 'could, was able to, managed to', t: 'Something difficult you managed to do, and something you couldn’t do as a kid.', ex: 'Last year I managed to run ten kilometers. As a kid I couldn’t swim.', trap: 'One difficult success in the past: managed to / was able to (not could).' },
  { k: 'MUST BE', tema: 'present deduction: must be, might be, can’t be', t: 'Your teacher says: “My neighbor has five dogs and no car.” Guess three things.', ex: 'He must love animals. He might work from home. He can’t live in a small apartment!', trap: 'Impossible: can’t be (not mustn’t be).' },
  { k: 'MUST HAVE', tema: 'past deduction: must have, might have, can’t have', t: 'The office kitchen is a mess this morning. What happened last night?', ex: 'Someone must have had a party. They might have forgotten to clean. It can’t have been the boss!', trap: 'The past: must have + participle.' }
];

var MISSAO = { pede: 'THE BLUE VASE · ASK FIVE QUESTIONS', quem: 'guest', depois: 'Say what you think',
  campos: [
    { c: 'onde', r: 'AT 2 AM', q: 'Where were you at two in the morning?', f: 'Two AM: where?' },
    { c: 'regra', r: 'THE RULES', q: 'What are guests supposed to do at night here?', f: 'The rules at night?' },
    { c: 'conseguiu', r: 'MANAGED', q: 'Were you able to sleep?', f: 'Could you sleep?' },
    { c: 'ouviu', r: 'HEARD', q: 'What did you hear or see?', f: 'Heard or saw?' },
    { c: 'acha', r: 'THINKS', q: 'Who do you think it was?', f: 'Who was it?' }],
  itens: [
    { k: 'GUEST 1', tag: 'THE COOK', ele: 'She', veredito: 'She can’t have broken it: she was in the kitchen, downstairs, all night.', v: { onde: 'in the kitchen, downstairs', regra: 'guests mustn’t open the windows: the old house is very windy', conseguiu: 'no, she couldn’t sleep, so she baked bread', ouviu: 'a door banging upstairs, again and again', acha: 'it must have been the nephew: he’s always awake' }, diz: '“I was in the kitchen, downstairs.” · “Guests mustn’t open the windows. The old house is very windy.” · “No, I couldn’t sleep. So I baked bread.” · “I heard a door banging upstairs, again and again.” · “It must have been the nephew. He’s always awake!”' },
    { k: 'GUEST 2', tag: 'THE NEPHEW', ele: 'He', veredito: 'He might have heard it, but he can’t have broken it: he had headphones on in the library.', v: { onde: 'in the library, playing a game with headphones', regra: 'you’re supposed to be in your room by midnight', conseguiu: 'he didn’t want to sleep: he managed to finish his game', ouviu: 'nothing: he had headphones on', acha: 'it might have been the cat' }, diz: '“I was in the library, playing a game. With headphones.” · “We’re supposed to be in our rooms by midnight. Oops.” · “I didn’t want to sleep. I managed to finish my game!” · “Nothing. I had headphones on.” · “It might have been the cat.”' },
    { k: 'GUEST 3', tag: 'THE OLD AUNT', ele: 'She', veredito: 'She must have opened the window. She didn’t break the vase herself, but the wind must have pushed it.', v: { onde: 'in her room, next to the blue vase', regra: 'you don’t have to stay in your room: it’s a free house', conseguiu: 'she was able to sleep only after she opened the window', ouviu: 'a strong wind, then a crash', acha: 'it can’t have been a person: everybody was in bed' }, diz: '“I was in my room. Next to the blue vase, yes.” · “Rules? You don’t have to stay in your room. It’s a free house!” · “It was so hot. I was able to sleep only after I opened the window.” · “I heard a strong wind… then a crash.” · “It can’t have been a person. Everybody was in bed!”' }],
  relato: { titulo: 'THE LIVING ROOM · WHAT DO YOU THINK?',
    pede: function (x) { return 'Detective, everybody is listening. What about ' + x.tag.toLowerCase() + '?'; },
    chips: function (x) { return [x.ele + ' can’t have …', x.ele + ' must have …', x.ele + ' might have …', 'because ' + x.ele.toLowerCase() + ' was …', 'Guests mustn’t / are supposed to …']; },
    modelo: function (x) { return x.veredito; } },
  nao: { mustnt: '“You mustn’t stay in your room” (= it’s forbidden!) → you DON’T HAVE TO stay.', could: '“I could finish the game last night” → I MANAGED TO / WAS ABLE TO finish it.', musthave: '“He must broke it” → he must HAVE broken it.' },
  fim: 'Mystery solved: the aunt opened the window, and the wind broke the vase! must / have to, supposed to, managed to, must have and can’t have: all of Unit 6 in one night.' };

var CONVERSA = [
  { q: 'What’s a rule you have to follow at work or at home that you don’t like?', f: 'A rule you don’t like?', voce: ['I have to …', 'We mustn’t …'], ex: 'I have to answer messages on weekends. I hate it!' },
  { q: 'What are you supposed to do when you visit someone’s home in your country?', f: 'Visiting someone’s home?', voce: ['You’re supposed to …', 'You’re expected to …'], ex: 'You’re supposed to bring something, like a cake.' },
  { q: 'What’s something difficult you managed to do this year?', f: 'Something difficult this year?', voce: ['I managed to …', 'I was able to …'], ex: 'I managed to save some money, finally!' },
  { q: 'Look out of your window. What’s happening, do you think?', f: 'Out of your window?', voce: ['It must be …', 'They might be …', 'It can’t be …'], ex: 'It must be cold: people are wearing jackets.' },
  { q: 'Have you ever lost something and later found it in a strange place? How must it have got there?', f: 'Lost, then found?', voce: ['It must have …', 'Someone might have …'], ex: 'My keys were in the fridge! I must have put them there with the milk.' }
];

var PODE = [
  'I can talk about rules: I have to, I mustn’t, I don’t have to.',
  'I can say what people expect: you’re supposed to bring a gift.',
  'I can talk about past abilities: I couldn’t swim; I managed to finish.',
  'I can guess now: it must be, it might be, it can’t be.',
  'I can guess the past: it must have been, it can’t have been.'
];

/* MECÂNICAS VARIADAS */
/* B1 R6: dado · missao · memoria · conversa */
var PARES = [
  ['You mustn’t', 'open the windows.', 'You mustn’t open the windows. It’s not allowed.'],
  ['You don’t have to', 'stay in your room.', 'You don’t have to stay in your room. It’s a free house.'],
  ['We’re supposed to', 'be in bed by midnight.', 'We’re supposed to be in bed by midnight. Oops!'],
  ['I managed to', 'finish my game.', 'I didn’t sleep, but I managed to finish my game.'],
  ['It can’t be', 'the cat.', 'It can’t be the cat. The cat is sleeping on my bed.'],
  ['It must have been', 'the wind.', 'The window was open. It must have been the wind.']];
