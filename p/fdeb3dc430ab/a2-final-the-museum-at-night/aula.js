/* ============================================================
   REVIEW · A2 · UNIT 10 · THE MUSEUM AT NIGHT · THE A2 FINAL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: memoria · tabuleiro · erros · cadeira · pode · ponte.
   Unidade 10 (Fechando o A2): phrasal verbs (turn it on, look for it); relativas who / that / which / where;
   a passiva no presente (it’s made, they’re kept); must / might / can’t be para deduzir.
   É a ÚLTIMA revisão do livro A2: o tabuleiro é a ronda noturna do vigia; a cena VI mostra o livro B1.
   ============================================================ */
var REV = { nivel: 'A2', unidade: 10, titulo: ['The Museum', 'at Night'], tema: 'Closing Book A2', placa: 'THE A2 FINAL', lugarConversa: 'THE ROAD TO B1', cor: '#c6f36b', cor2: '#e2fab5',
  sub: 'The last review of Book A2. You are the night guard at a small museum. Something strange is happening. Take your flashlight and check the rooms.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'I · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'II · The Night Round', t: 'Roll, walk, check every room.', p: 'Your teacher rolls the die. Do the task in your room, out loud.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'V · I Can', t: 'Unit 10: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' },
  { k: 'ponte', est: 'l', min: 3, img: 'conversa', rot: 'VI · The Next Book', t: 'Book A2 is done. Here is Book B1.', p: 'Read the three cards out loud. Which one do you want first?' }
];
var PORTAS = [];

var PODE = [
  'I can use phrasal verbs, with the pronoun in the middle: turn it on.',
  'I can describe with who, which, that and where.',
  'I can say how things are made: it’s made of…, it’s kept in…',
  'I can guess: it must be…, it might be…, it can’t be…',
  'I can finish Book A2: I can tell, compare, plan and give advice.'
];

var PONTE = { nivel: 'B1', titulo: 'Book 3 · Opinions, guesses and reports',
  itens: [
    ['THE STORY BEHIND', 'When I got there, the show had already started.', 'Tell what happened before something else.'],
    ['IMAGINE', 'If I won the lottery, I would travel the world.', 'Talk about dreams and things that aren’t real.'],
    ['WHAT THEY SAID', 'She said she was tired.', 'Tell people what others said and asked.']],
  fim: 'Book A2 is complete. Congratulations! Book B1 starts with the story behind the story.' };

/* MECÂNICAS VARIADAS */
/* A2 R10: memoria · tabuleiro · erros · cadeira · ponte */
var PARES = [
  ['turn on', 'the lights', 'It’s dark. Turn the lights on! Turn them on.'],
  ['look for', 'your keys', 'I’m looking for my keys. I’m looking for them.'],
  ['a person who', 'guards a museum', 'A night guard is a person who guards a museum at night.'],
  ['the room where', 'the statues are', 'This is the room where the statues are.'],
  ['it’s made', 'of gold', 'This old crown is made of gold.'],
  ['it can’t be', 'a ghost', 'That noise can’t be a ghost. It might be the wind.']];
var TABULEIRO = { rot: 'THE NIGHT ROUND', centro: 'Check every room with your flashlight.', casas: [
  { k: 'ENTRANCE', t: 'It’s dark. Tell your partner to turn the lights on. Then use “it”.', ex: 'Turn on the lights, please! Turn them on.' },
  { k: 'STATUES', t: 'Describe the statue room with where.', ex: 'This is the room where the old statues are kept.' },
  { k: 'A NOISE', t: 'You hear a noise. What is it? Use must, might or can’t.', ex: 'It might be the wind. It can’t be a person: the doors are closed.' },
  { k: 'THE CROWN', t: 'Say what the crown is made of and where it’s from.', ex: 'It’s made of gold. It was found in Peru. It’s kept in a glass box.' },
  { k: 'A VISITOR', t: 'Describe the person who works in the morning, with who.', ex: 'Ana is the woman who sells the tickets.' },
  { k: 'THE MAP', t: 'You lost the museum map. Use look for and find out.', ex: 'I’m looking for the map. I need to find out where the exit is.' },
  { k: 'THE CAFE', t: 'Say what is made here, with the passive.', ex: 'Coffee is made here, and cakes are baked every morning.' },
  { k: 'FOOTPRINTS', t: 'Footprints on the floor! Deduce who it is.', ex: 'They’re very small. It must be a child… or a cat!' },
  { k: 'THE ALARM', t: 'The alarm is loud. Tell someone to turn it off.', ex: 'Turn off the alarm! Turn it off, please!' },
  { k: 'THE PAINTING', t: 'Describe the painting with which or that.', ex: 'It’s a painting which shows a ship in a storm.' },
  { k: 'THE CAT', t: 'It’s the museum cat! Describe it with who / that and might.', ex: 'It’s the cat that lives in the museum. It might be hungry.' },
  { k: 'MORNING', t: 'Tell the morning guard what happened. Use phrasal verbs.', ex: 'The lights went off, I looked for the problem, and I found out it was the cat!' }] };
var ERROS = { tipo: 'nota', rot: 'THE NIGHT GUARD’S REPORT · 3:00 AM', partes: ['At 2 AM the lights went off, so I ', ['turned on them', 'turned them on', 'Pronoun in the middle: turn them on.'], '. I heard a noise in the room ', ['where the statues are there', 'where the statues are', 'No there at the end.'], '. It ', ['must not be', 'can’t be', 'Impossible: can’t be.'], ' a thief: the doors were locked. The old crown ', ['made', 'is made', 'The passive: is made.'], ' of gold, and it’s still in its box. In the end I found the cat ', ['what', 'that', 'A thing or an animal: that / which.'], ' lives here. I’m ', ['looking it for', 'looking for it', 'look for: never open.'], ' now. It’s hiding!'] };
var CADEIRA = { itens: [
  { alvo: 'Ask me about a museum I like.', dica: 'What’s a museum that you like?', resp: 'The art museum in my city.' },
  { alvo: 'Ask me what is made in my city.', dica: 'What is made in your city?', resp: 'Shoes are made there!' },
  { alvo: 'Ask me to turn something on or off.', dica: 'Could you turn … on / off?', resp: 'Sure, I’ll turn it off.' },
  { alvo: 'Ask me about a person who helped me.', dica: 'Who is a person who helped you?', resp: 'My first English teacher.' },
  { alvo: 'Show me a photo and ask me to guess.', dica: 'Where do you think this is?', resp: 'It must be Paris. It might be Lyon.' }] };
