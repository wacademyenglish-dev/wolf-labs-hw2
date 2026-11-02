/* ============================================================
   A KNOCK AT THE DOOR · A2 · UNIT 4 (HOW MUCH AND WHO) · LIVE CLASS  16/10/2026
   Aula nova do livro A2 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: a / an na primeira vez, the quando já sabemos qual; sem artigo no geral (I love cats);
   the + único (the sun, the door of my flat); a / an com profissão.
   O mundo: alguém bateu na porta às dez da noite e deixou uma caixa; dentro, um bilhete e uma chave.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2', unidade: 4, titulo: ['A Knock at', 'the Door'], tema: 'A, an, the, or nothing.',
  sub: 'At 10 p.m. somebody knocked at the door and left a box. In the box there was a note and a key. Read the story, learn when it’s a and when it’s the, and solve the mystery.',
  placa: 'FLAT 9 · 10:02 PM', lugarConversa: 'THE HALLWAY', cor: '#7cc4ff', cor2: '#c4e3ff',
  chips: ['a box… the box', 'a, an, the', 'Who left it?'], botao: 'Start the lesson', nota: 'First time: a box. After that, we know which box: the box.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · The Box', t: 'A knock, a box, a note.', p: 'Read the story out loud with your teacher. Then look closer.' },
  { k: 'separa', est: 'f', min: 9, img: 'capa', rot: 'II · A or The?', t: 'New, or we know which one?', p: 'Read each sentence. Does the gap need A / AN or THE? Say why, then tap.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · The Message to the Neighbor', t: 'Your message has five mistakes.', p: 'Find a mistake, say the right form, then tap.' },
  { k: 'cadeira', est: 'o', min: 9, img: 'capa', rot: 'IV · The Hot Seat', t: 'Your teacher left the box. Ask!', p: 'Your teacher is the mystery person. Ask, listen, react.' }
];
var PORTAS = [];

var LEITURA = { rot: 'WHAT HAPPENED LAST NIGHT', tipo: 'nota',
  antes: { q: 'Somebody knocks at your door at 10 p.m. What do you do?', h: 'I look through the peephole. / I don’t open it!' },
  texto: 'At ten o’clock there was {a} knock at {the} door. I opened {the} door, but there was nobody there.\nOn {the} floor there was {a} box. In {the} box there was {an} old key and {a} note.\n{The} note said: “Thank you for {the} music. {The} key is for {the} roof.”\nI live next to {a} musician. I play {the} piano every evening. Maybe {the} musician wants to play with me on {the} roof!\nI love music. And now I love mysteries.',
  perguntas: [
    { q: 'What time was the knock? Who was there?', h: 'At ten o’clock. Nobody was there.' },
    { q: 'What was in the box?', h: 'An old key and a note.' },
    { q: 'What did the note say?', h: '“Thank you for the music. The key is for the roof.”' },
    { q: 'Who do you think left the box?', h: 'Maybe the musician next door.' }],
  olha: 'Find the first “a box” and then “the box”. Why does it change? And why is there no article in “I love music”?' };

var SEPARA = { rot: 'A / AN OR THE?', a: 'A / AN (NEW)', b: 'THE (WE KNOW WHICH)', fim: 'New thing: a / an. Thing we already know, or only one: the.', itens: [
  ['There was ___ knock at the door.', 'a', 'First time we hear about it.'],
  ['I opened ___ door of my flat.', 'b', 'My door: we know which one.'],
  ['On the floor there was ___ box.', 'a', 'A new thing in the story.'],
  ['In ___ box there was a key.', 'b', 'The box from before.'],
  ['It was ___ old key.', 'a', 'old starts with a vowel sound: an.'],
  ['___ key is for the roof.', 'b', 'The key from the box.'],
  ['My neighbor is ___ musician.', 'a', 'A job: a / an.'],
  ['___ sun was down. It was dark.', 'b', 'Only one sun.']] };

var ERROS = { tipo: 'nota', rot: 'MESSAGE TO FLAT 10', rotulo: 'MISTAKES', pede: 'Find the five mistakes. Say the right form, then tap.', fim: 'Five fixed. Now read the message out loud.', dica: 'The student says the right form before tapping.', partes: [
  'Hi! Last night somebody left ', ['the box', 'a box', 'new in the message: a'], ' at my door. In the box there was ', ['a old key', 'an old key', 'old: a vowel sound → an'], ' and a note. ',
  ['A note', 'The note', 'we know which note now: the'], ' says “thank you for the music”. Are you ', ['musician', 'a musician', 'a job needs a / an'], '? I love ', ['the music', 'music', 'music in general: no article'], ' too. See you on the roof?'] };

var CADEIRA = { itens: [
  { alvo: 'Ask if I left a box at your door.', dica: 'Did you leave a box at my door?', resp: 'Maybe… What was in the box?' },
  { alvo: 'Tell me what was in the box. Then ask about the key.', dica: 'There was a key. What is the key for?', resp: 'The key is for the roof. There’s a little garden up there.' },
  { alvo: 'Ask about my job.', dica: 'Are you a musician?', resp: 'Yes, I’m a musician. I play the guitar.' },
  { alvo: 'Ask why I said thank you.', dica: 'Why did you write “thank you for the music”?', resp: 'Because I listen to the piano every evening. It’s beautiful.' },
  { alvo: 'Ask what we can do on the roof.', dica: 'What can we do on the roof?', resp: 'We can play music under the stars!' },
  { alvo: 'Say yes or no to the invitation, and why.', dica: 'Yes! I love music. / Sorry, I’m afraid of the dark.', resp: 'Great! Saturday at eight?' }] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* A2 · A Knock at the Door: leitura · separa · erros · cadeira */
