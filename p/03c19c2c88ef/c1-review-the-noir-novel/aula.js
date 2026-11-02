/* ============================================================
   REVIEW · C1 · UNIT 4 · THE NOIR NOVEL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: bingo · ordem · erros · escolha · pode.
   Unidade 4 (Inversão): no sooner / hardly / not only; condicionais invertidas (had I known, should you,
   were it not for); not until / not once / nowhere; little did / at no time / under no circumstances;
   only then / only after; so / such + inversão.
   O mundo: um escritor de romance policial (inventado) termina o capítulo 12. O aluno põe a cena em
   ordem, corrige o rascunho e escolhe finais.
   ============================================================ */
var REV = { nivel: 'C1', unidade: 4, titulo: ['The Noir', 'Novel'], tema: 'Inversion', placa: 'CHAPTER 12 · THE HARBOUR', lugarConversa: 'THE FOGGY HARBOUR', cor: '#8aa0c8', cor2: '#c5d0e4',
  sub: 'Unit 4 review. A crime writer is finishing chapter twelve: fog, a harbour, a missing ship. Help him tell it with the drama only inversion can give.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'I · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a line, across, down or diagonal, is a BINGO.' },
  { k: 'ordem', est: 'o', min: 7, img: 'capa', rot: 'II · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'escolha', est: 'o', min: 7, img: 'conversa', rot: 'IV · Choose the Ending', t: 'Two endings. Choose, and say it with inversion.', p: 'Choose A or B. Then explain with Had I…, Never…, Not only…, So … was…' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 4: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var PODE = [
  'I can use No sooner… than, Hardly… when, Not only… but also.',
  'I can invert conditionals: Had I known, Should you need, Were it not for.',
  'I can use Not until, Not once, Nowhere, Little did, At no time.',
  'I can mark the turning point: Only then did I…, Only after…',
  'I can add drama with So … was … that, Such was … that.'
];

/* MECÂNICAS VARIADAS */
/* C1 R4: bingo · ordem · erros · escolha */
var BINGO = [['No sooner ___ we arrived than it rained.', 'had'], ['Hardly had I sat down ___ the phone rang.', 'when'], ['Not only ___ he lie, he also stole.', 'did'], ['If I had known → ___ I known', 'Had'], ['If you need help → ___ you need help', 'Should'], ['Without your help → ___ it not for your help', 'Were'], ['Not until midnight ___ they arrive.', 'did'], ['Little ___ she know the truth.', 'did'], ['So dark ___ the night that we got lost.', 'was']];
var ORDEM = { rot: 'CHAPTER 12 · THE HARBOUR', pede: 'Tap the events in order. Then tell the chapter with inversions.', chips: ['No sooner had … than …', 'Little did …', 'Not until … did …', 'Only then did …', 'Had I …, …', 'So … was … that …'],
  modelo: 'No sooner had Detective Vale reached the harbour than the fog came down. Little did she know the ship had already gone. Not until midnight did she find the captain’s note. Only then did she understand the plan. So thick was the fog that nobody saw the boat leave. Had she arrived an hour earlier, she would have stopped them.',
  passos: ['Detective Vale reached the harbour at ten.', 'The fog came down immediately.', 'The ship had already left, but she didn’t know.', 'At midnight she found the captain’s note.', 'She finally understood the whole plan.', 'She knew: one hour earlier, and she would have stopped them.'] };
var ERROS = { tipo: 'nota', rot: 'CHAPTER 12 · DRAFT · DO NOT PRINT', partes: ['No sooner ', ['she had arrived', 'had she arrived', 'had + subject.'], ' than the fog came down. Little ', ['she knew', 'did she know', 'did + subject + know.'], ' that the ship was gone. Not until midnight ', ['she found', 'did she find', 'did + subject + verb.'], ' the note. So thick ', ['the fog was', 'was the fog', 'was + subject.'], ' that nobody saw the boat. ', ['If had she arrived', 'Had she arrived', 'Inverted conditional: no if.'], ' earlier, she would have stopped them. Never ', ['she had felt', 'had she felt', 'had + subject.'], ' so alone.'] };
var ESCOLHA = [
  { a: 'Vale catches the captain on the last page', b: 'the captain escapes, and there’s a sequel', chips: ['Had I written it, …', 'Not only … but …'], ex: 'The captain escapes. Not only is it more exciting, but it also sells the next book!' },
  { a: 'a detective who never breaks the rules', b: 'a detective who breaks every rule', chips: ['Under no circumstances would …', 'Never would …'], ex: 'Breaks every rule. Never would I read a book about a perfect detective.' },
  { a: 'read the last page first', b: 'never read the ending early', chips: ['Little did I know …', 'Only after … do I …'], ex: 'Never. Only after the last page do I find out the truth, like the detective.' }];
