/* ============================================================
   REVIEW · B2 · UNIT 4 · THE ESCAPE ROOM · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: rapido · tabuleiro · memoria · escolha · pode.
   Unidade 4 (Desejos e o que poderia ter sido): I wish / if only (presente e passado: I wish it had
   been different); past modals (shouldn’t have); modal perfects e especulação sobre o passado
   (must have, might / may / could have, can’t have).
   O tabuleiro: uma sala de fuga montada na cabine de um capitão que sumiu em 1890. Cada casa é uma
   pista; o aluno especula o que aconteceu e, no fim, sai da sala.
   ============================================================ */
var REV = { nivel: 'B2', unidade: 4, titulo: ['The Escape', 'Room'], tema: 'Wishes and what might have been', placa: 'THE CAPTAIN’S CABIN · 1890', lugarConversa: 'THE DARK BEACH', cor: '#d8c27a', cor2: '#ece0bc',
  sub: 'Unit 4 review. Sixty minutes to escape. The room is the cabin of Captain Hale, who vanished in 1890. Every clue tells part of the story. What must have happened?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'I · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'II · The Clues', t: 'Roll, move, read the clue. What happened?', p: 'Your teacher rolls the die. Read your clue and speculate, out loud: must have, might have, can’t have.' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'III · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var PODE = [
  'I can wish about now: I wish I had more time. If only it were Friday!',
  'I can wish about the past: I wish I had listened. If only I hadn’t gone!',
  'I can regret: I shouldn’t have said that. I should have stayed.',
  'I can deduce the past: he must have left; it can’t have been him.',
  'I can speculate: they might have / may have / could have left by boat.'
];

/* MECÂNICAS VARIADAS */
/* B2 R4: rapido · tabuleiro · memoria · escolha */
var RAPIDO = { seg: 60, itens: [['I wish I ___ (be) taller.', 'were'], ['I wish I ___ (not / say) that yesterday.', 'hadn’t said'], ['If only I ___ (can) fly!', 'could'], ['He’s late. He ___ have missed the bus. (almost sure)', 'must'], ['She was in Rome. She ___ have been here. (impossible)', 'can’t'], ['Maybe they took a boat. → They ___ have taken a boat.', 'might / may / could'], ['It was a mistake to eat it. → I ___ have eaten it.', 'shouldn’t'], ['I didn’t study. I ___ have studied.', 'should'], ['If only you ___ (tell) me before!', 'had told'], ['I wish you ___ (stop) talking! (annoyed now)', 'would stop']] };
var TABULEIRO = { rot: 'CAPTAIN HALE’S CABIN', centro: 'Sixty minutes. Read the clues. Get out.', casas: [
  { k: 'THE BED', t: 'The bed is perfectly made. Did he sleep here that night?', ex: 'He can’t have slept here. He must have left before midnight.' },
  { k: 'THE CANDLE', t: 'The candle burned down completely. What does it tell you?', ex: 'Someone must have been working here all night.' },
  { k: 'THE LETTER', t: 'A letter to his wife: “I wish I had stayed home.” What did he regret?', ex: 'He must have regretted the trip. He wished he had stayed with her.' },
  { k: 'THE MAP', t: 'A map with a small island circled in red. Where did he go?', ex: 'He might have sailed to that island. He may have hidden something there.' },
  { k: 'THE BOAT', t: 'One of the two lifeboats is missing.', ex: 'He could have left by boat. Or someone else might have taken it!' },
  { k: 'THE BOOTS', t: 'His boots are still here, under the chair.', ex: 'He can’t have gone far without his boots… unless he had another pair.' },
  { k: 'THE CLOCK', t: 'The clock stopped at 3:10. Speculate.', ex: 'It might have stopped when the ship hit the rocks. Or someone may have broken it.' },
  { k: 'IF ONLY', t: 'You’re stuck! Make two wishes about this room.', ex: 'If only we had a flashlight! I wish we had read the first clue more carefully.' },
  { k: 'THE DIARY', t: 'Last line of his diary: “I shouldn’t have trusted the first mate.” Explain.', ex: 'The first mate must have lied to him. Hale should have listened to his crew.' },
  { k: 'THE KEY', t: 'A key is hidden inside a book about islands. Why there?', ex: 'He must have wanted someone smart to find it. He might have planned all this!' },
  { k: 'THE TRUTH', t: 'Put the clues together. What must have happened in 1890?', ex: 'The first mate must have betrayed him, so Hale might have escaped by boat to the island.' },
  { k: 'ESCAPE!', t: 'You’re out! Say one thing you should have done faster, and one wish.', ex: 'We should have opened the book first. I wish we had another hour!' }] };
var PARES = [
  ['I wish I', 'had more time.', 'I wish I had more time to read.'],
  ['If only I', 'hadn’t said that!', 'If only I hadn’t said that! She was so hurt.'],
  ['He must have', 'left before midnight.', 'The bed is made. He must have left before midnight.'],
  ['It can’t have been', 'the captain.', 'It can’t have been the captain. He was on the island.'],
  ['They might have', 'escaped by boat.', 'A lifeboat is missing. They might have escaped by boat.'],
  ['I shouldn’t have', 'trusted him.', 'I shouldn’t have trusted him. He lied.']];
var ESCOLHA = [
  { a: 'know the truth about a family secret', b: 'never know it', chips: ['I wish I knew …', 'If only …'], ex: 'Know it. I’d always wonder if I didn’t.' },
  { a: 'go back and say something you didn’t say', b: 'go back and not say something you said', chips: ['I wish I had …', 'I shouldn’t have …'], ex: 'Not say it. I shouldn’t have shouted at my brother.' },
  { a: 'solve an escape room in five minutes', b: 'enjoy it for the full hour', chips: ['I’d rather …', 'It must be …'], ex: 'The full hour. Five minutes must be boring!' },
  { a: 'find an old diary of a stranger', b: 'find an old letter from your grandparents', chips: ['It might have …', 'They must have …'], ex: 'The letter. My grandparents must have had a fascinating life.' }];
