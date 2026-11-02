/* ============================================================
   REVIEW · C1 · UNIT 2 · THE DETECTIVE AGENCY · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: dado · tabuleiro · cadeira · pode.
   Unidade 2 (Modais com nuance): needn’t have × didn’t need to; pedidos suavizados para negociar
   (Could we possibly…?); bound to / set to / due to; will / would para comportamento típico;
   will / would para dedução (that’ll be…, he’ll have left); needn’t × don’t have to × mustn’t.
   O tabuleiro: um escritório de detetive (inventado) e um caso de doze pistas: o colar da sra. Vane.
   ============================================================ */
var REV = { nivel: 'C1', unidade: 2, titulo: ['The Detective', 'Agency'], tema: 'Modals with nuance', placa: 'CASE FILE 17 · MRS. VANE', lugarConversa: 'RAIN ON THE BLINDS', cor: '#a8b8e0', cor2: '#d3dbf0',
  sub: 'Unit 2 review. Rain on the window, a new client at the door. Mrs. Vane’s pearl necklace has gone. Every clue needs a modal with nuance.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'tabuleiro', est: 'o', min: 16, img: 'capa', rot: 'II · The Case Board', t: 'Twelve clues. Roll and deduce.', p: 'Your teacher rolls the die. Read the clue and deduce, out loud, with the right modal.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'conversa', rot: 'III · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Unit 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'NEEDN’T HAVE', tema: 'needn’t have × didn’t need to', t: 'Something you did this week that turned out to be unnecessary.', ex: 'I needn’t have taken an umbrella: it didn’t rain. (I took it.) I didn’t need to call the bank: they emailed me. (I didn’t call.)', trap: 'needn’t have done = you did it, unnecessarily.' },
  { k: 'COULD WE POSSIBLY', tema: 'softened requests', t: 'Negotiate a discount with a shop owner, very politely.', ex: 'Could we possibly talk about the price? Would you be willing to take 10% off if I pay today?', trap: 'Softeners: possibly, would you be willing to…' },
  { k: 'BOUND TO', tema: 'bound to / set to / due to', t: 'Three things about next week: certain, planned, scheduled.', ex: 'Traffic is bound to be bad. A new law is set to start. My train is due to leave at 7:10.', trap: 'bound = almost certain; due = on the timetable.' },
  { k: 'SHE WOULD', tema: 'will / would for typical behaviour', t: 'A typical habit of someone in your family, past and present.', ex: 'My grandfather would sit in the garden for hours. My dad will always tell the same joke.', trap: 'would for past actions, not states (used to have).' },
  { k: 'THAT’LL BE', tema: 'will / would for deduction', t: 'The phone rings at 11 PM. Who will that be? And your friend didn’t reply: why?', ex: 'That’ll be my sister. My friend will have fallen asleep.', trap: 'A guess about the past: will have + participle.' },
  { k: 'NEEDN’T / MUSTN’T', tema: 'not necessary × not allowed', t: 'Rules for a guest in your home: one needn’t, one mustn’t.', ex: 'You needn’t take your shoes off, but you mustn’t let the cat out.', trap: 'needn’t = not necessary; mustn’t = forbidden.' }
];

var PODE = [
  'I can say I did something unnecessary: I needn’t have bought it.',
  'I can negotiate softly: Could we possibly…? Would you be willing to…?',
  'I can talk about the future with nuance: bound to, set to, due to.',
  'I can describe typical behaviour and make confident guesses with will and would.',
  'I can separate not necessary (needn’t) from not allowed (mustn’t).'
];

/* MECÂNICAS VARIADAS */
/* C1 R2: dado · tabuleiro · cadeira */
var TABULEIRO = { rot: 'CASE 17 · THE VANE PEARLS', centro: 'Read the clue. Deduce with nuance.', casas: [
  { k: 'THE CLIENT', t: 'Mrs. Vane says the pearls were in the safe at 9 PM. The doorbell rings: who will that be?', ex: 'That’ll be the police. They said they’d come at ten.' },
  { k: 'THE SAFE', t: 'The safe isn’t broken. Deduce about the past.', ex: 'Someone will have known the code. They won’t have forced it.' },
  { k: 'THE BUTLER', t: 'The butler says “I always lock the doors at ten.” Talk about his typical behaviour.', ex: 'He’d lock the doors every night. He’s the kind of man who will check twice.' },
  { k: 'THE NEPHEW', t: 'The nephew needs money. Is he bound to be guilty?', ex: 'He’s bound to be a suspect, but that doesn’t mean he did it.' },
  { k: 'THE TRAIN', t: 'The nephew says he was on a train. Check the timetable.', ex: 'The last train was due to arrive at 11:40, so he could have been here by midnight.' },
  { k: 'THE UMBRELLA', t: 'You brought an umbrella, but the rain stopped. Say it with needn’t have.', ex: 'I needn’t have brought my umbrella. The rain stopped an hour ago.' },
  { k: 'THE MAID', t: 'Ask the maid for her diary, very politely.', ex: 'Could I possibly see your diary? Would you be willing to show me last Tuesday?' },
  { k: 'THE RULES', t: 'Tell the family two rules while you investigate.', ex: 'You needn’t stay in the house, but you mustn’t touch the safe.' },
  { k: 'THE LETTER', t: 'A letter says “I will pay you back.” Mrs. Vane: “He would say that.” Explain.', ex: 'She means it’s typical of him: he always promises and never pays.' },
  { k: 'THE GARDEN', t: 'Footprints in the garden. Deduce.', ex: 'Someone will have come in through the garden. The gate must have been open.' },
  { k: 'THE AUCTION', t: 'An auction of pearls is planned for Friday. Use set to.', ex: 'An auction is set to take place on Friday. The pearls are bound to appear there.' },
  { k: 'THE ANSWER', t: 'Solve the case. Who did it, and how?', ex: 'It’ll have been the nephew: he knew the code, and he needn’t have run. Mrs. Vane would have helped him!' }] };
var CADEIRA = { itens: [
  { alvo: 'Ask me about something I did that turned out to be unnecessary.', dica: 'Have you ever done something you needn’t have done?', resp: 'I needn’t have studied all night. The exam was easy.' },
  { alvo: 'Negotiate with me: you want a later deadline.', dica: 'Could we possibly move the deadline to Monday?', resp: 'I might be willing to, if you send me a draft on Friday.' },
  { alvo: 'Ask me what is bound to happen in my city this year.', dica: 'What’s bound to happen in your city this year?', resp: 'Rent is bound to go up again.' },
  { alvo: 'Ask me about a typical habit of someone in my family.', dica: 'What would your grandparents typically do?', resp: 'My grandmother would sing while she cooked.' },
  { alvo: 'It’s 8 PM. Ask me where my partner will be now.', dica: 'Where will your partner be now?', resp: 'He’ll be at the gym. He always is on Tuesdays.' }] };
