/* ============================================================
   REVIEW · B2 · UNIT 2 · DEAR IVY · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: bingo · tabuleiro · cartao · escolha · pode.
   Unidade 2 (Condicionais: o provável e o imaginário): first conditional com unless, provided that,
   as long as; second conditional (improvável e imaginário); wish + past; second × third conditional.
   O tabuleiro: o aluno assume a coluna de conselhos "Dear Ivy" por uma semana. Cada casa é a carta
   de um leitor; no fim escreve a resposta da semana.
   ============================================================ */
var REV = { nivel: 'B2', unidade: 2, titulo: ['Dear', 'Ivy'], tema: 'Likely and imaginary', placa: 'THE ADVICE COLUMN', lugarConversa: 'THE WINDOW SEAT', cor: '#e89ab8', cor2: '#f4cddc',
  sub: 'Unit 2 review. Ivy writes the most famous advice column in town, and she is on holiday. This week, you answer the letters.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'I · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a line, across, down or diagonal, is a BINGO.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'II · The Letters', t: 'Roll, move, answer the reader.', p: 'Your teacher rolls the die and reads the letter. You answer, out loud, like Ivy.' },
  { k: 'cartao', est: 'w', min: 7, img: 'conversa', rot: 'III · This Week’s Answer', t: 'Choose one letter. Write Ivy’s answer.', p: 'Four lines: what will happen if…, provided that…, if I were you…, and if only…' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var CARTAO = { ph: 'Dear Worried in Recife,\nIf you tell your boss now, she’ll probably understand.\nYou can keep the job, provided that you ask for help early.\nIf I were you, I’d stop working on weekends. I wish someone had told me that at your age!', rot: 'Ivy’s answer',
  chips: ['If you …, you’ll …', 'unless ', 'provided that ', 'as long as ', 'If I were you, I’d ', 'If you had …, you would have …', 'I wish ', 'If only '],
  perg: ['THIS WEEK’S ANSWER', 'Pick one letter from the board. What will happen? On what condition? What would you do? What do you wish?'],
  exemploRot: 'THE LETTERS THIS WEEK', exemplo: [['WORRIED IN RECIFE', 'too much work'], ['LONELY IN LISBON', 'no friends yet'], ['BROKE IN BELO HORIZONTE', 'no savings'], ['STUCK IN SANTOS', 'the wrong course'], ['SIGNED', 'Ivy (this week: you)']],
  modelo: 'Dear Worried in Recife, if you tell your boss now, she’ll probably understand.<br>You can keep the job, provided that you ask for help early.<br>If I were you, I’d stop working on weekends. I wish someone had told me that at your age!' };

var PODE = [
  'I can talk about likely results: If you call her, she’ll understand.',
  'I can set conditions: unless, provided that, as long as.',
  'I can imagine unlikely things: If I won the lottery, I’d…',
  'I can make wishes: I wish I had more time. If only I knew!',
  'I can imagine the past: If you had asked, I would have helped.'
];

/* MECÂNICAS VARIADAS */
/* B2 R2: bingo · tabuleiro · cartao · escolha */
var BINGO = [['If it ___ (rain), the party will move inside.', 'rains'], ['You can borrow it ___ ___ you bring it back. (on the condition)', 'provided that / as long as'], ['I won’t go ___ you come too. (if not)', 'unless'], ['If I ___ (be) you, I’d apologize.', 'were'], ['I wish I ___ (have) more free time.', 'had'], ['If only I ___ (know) the answer now!', 'knew'], ['If you had asked, I ___ ___ helped.', 'would have'], ['If I ___ (not / miss) the bus, I wouldn’t have been late.', 'hadn’t missed'], ['What would you do if you ___ (lose) your phone?', 'lost']];
var TABULEIRO = { rot: 'DEAR IVY', centro: 'Read the letter. Answer like Ivy.', casas: [
  { k: 'TIRED IN TOWN', t: '“I work twelve hours a day.” What will happen if they don’t stop?', ex: 'If you don’t stop, you’ll get sick. Take a break before it’s too late.' },
  { k: 'THE LOAN', t: '“My brother wants to borrow my car.” Give a condition with provided that.', ex: 'Lend it to him, provided that he pays for the petrol.' },
  { k: 'THE PARTY', t: '“Should I go to my ex’s wedding?” Use unless.', ex: 'Don’t go, unless you feel completely fine about it.' },
  { k: 'THE LOTTERY', t: '“I bought a lottery ticket.” What would they do if they won? Imagine for them.', ex: 'If you won, you’d probably quit your job, travel, and buy a house for your mom.' },
  { k: 'THE NEIGHBOR', t: '“My neighbor plays drums at midnight.” If you were them, what would you do?', ex: 'If I were you, I’d talk to him first. If that didn’t work, I’d call the building manager.' },
  { k: 'I WISH…', t: '“I hate my job.” Make three wishes for the reader.', ex: 'You wish you had a different job, you wish your boss listened, and you wish you could work from home.' },
  { k: 'THE REGRET', t: '“I didn’t accept a job in Lisbon in 2019.” Third conditional.', ex: 'If you had accepted it, you would have lived by the sea. But you wouldn’t have met your partner!' },
  { k: 'AS LONG AS', t: '“Can I adopt a dog in a small flat?” Answer with as long as.', ex: 'Yes, as long as you walk it twice a day.' },
  { k: 'IF ONLY', t: '“I said something horrible to my friend.” Use if only.', ex: 'If only you hadn’t said it! But you can still apologize.' },
  { k: 'THE DREAM', t: '“I’m 50. Is it too late to study medicine?” Imagine both sides.', ex: 'If you started now, you’d finish at 56. If you never tried, you’d always wonder.' },
  { k: 'THE MISTAKE', t: '“I forgot my wife’s birthday.” What would have happened if they had remembered?', ex: 'If you had remembered, you wouldn’t be sleeping on the sofa now!' },
  { k: 'LAST LETTER', t: 'Ivy writes to you. What’s your biggest wish, and what would you change?', ex: 'I wish I spoke five languages. If I had more time, I would study every day.' }] };
var ESCOLHA = [
  { a: 'know the date of every important event in your life', b: 'never know anything in advance', chips: ['If I knew …, I’d …', 'I wish …'], ex: 'Never know. If I knew everything, life would be boring.' },
  { a: 'go back and change one decision', b: 'see one day of your future', chips: ['If I could go back, I would have …', 'If I saw …, I’d …'], ex: 'Change one decision. If I had studied music, I would be happier.' },
  { a: 'lend money to a friend, provided they sign a paper', b: 'never lend money to friends', chips: ['provided that …', 'unless …'], ex: 'Never, unless it’s an emergency.' },
  { a: 'win a big prize but lose your best friend', b: 'stay the same', chips: ['If I won, I would …', 'I’d rather …'], ex: 'Stay the same. If I lost my friend, the money wouldn’t matter.' }];
