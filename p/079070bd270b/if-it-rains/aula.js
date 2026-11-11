/* ============================================================
   IF IT RAINS, TAKE THIS · A2 · UNIT 9 (IF… AND VERB + VERB) · LIVE CLASS  16/10/2026
   Aula nova do livro A2 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: if + presente, imperativo (If it rains, take the umbrella. If he barks, don't worry.);
   a vírgula quando o if vem primeiro; nada de will depois do if (If it will rain → If it rains).
   O mundo: o aluno vai cuidar do apartamento da amiga Nina por uma semana: o cachorro Biscuit, as plantas,
   a máquina de lavar que faz barulho. Ela deixou instruções; depois o aluno escreve as dele.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2', unidade: 9, titulo: ['If It Rains,', 'Take This'], tema: 'If this happens, do that.',
  sub: 'Your friend Nina is away for a week. You’re looking after her flat, her plants and her dog, Biscuit. Read her instructions, turn problems into “if” sentences, and write instructions for YOUR home.',
  placa: 'NINA’S FLAT · ONE WEEK', lugarConversa: 'THE BALCONY', cor: '#7cc4ff', cor2: '#c4e3ff',
  chips: ['If it rains, …', 'Don’t worry if…', 'Your instructions'], botao: 'Start the lesson', nota: 'After if, use the present: If it rains (not if it will rain). Then the instruction: take the umbrella.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · Nina’s Instructions', t: 'A note on the kitchen table.', p: 'Read the instructions out loud with your teacher. Then look closer.' },
  { k: 'transforma', est: 'f', min: 9, img: 'capa', rot: 'II · Problem → Instruction', t: 'A problem, and what to do.', p: 'Read the problem and the clue. Say an if sentence.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'III · If, Then', t: 'Five notes Nina could write.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'cartao', est: 'w', min: 9, img: 'conversa', rot: 'IV · Your Instructions', t: 'A friend is staying in YOUR home.', p: 'Write four if sentences for your friend.' },
  { k: 'escolha', est: 'o', min: 6, img: 'capa', rot: 'V · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with if.' }
];
var PORTAS = [];

var LEITURA = { rot: 'NOTE ON THE KITCHEN TABLE', tipo: 'nota',
  antes: { q: 'Do you have a pet or plants? Who takes care of them when you travel?', h: 'I have a cat. My sister feeds her.' },
  texto: 'Thank you SO much!\n{If it rains, close} the balcony door.\n{If Biscuit barks} at night, {don’t worry}. He’s just talking to the cat next door.\n{If the plants look} sad, {give} them a little water. Not too much!\n{If the washing machine makes} a terrible noise, {turn} it off and {call} Leo in Flat 2.\nAnd {if you’re} hungry, {eat} the cake in the fridge. It’s for you!\nNina',
  perguntas: [
    { q: 'Who is Biscuit? Why does he bark at night?', h: 'Nina’s dog. He’s talking to the cat next door.' },
    { q: 'What do you do if it rains?', h: 'Close the balcony door.' },
    { q: 'What do you do if the washing machine makes a noise?', h: 'Turn it off and call Leo in Flat 2.' },
    { q: 'What is the nice surprise?', h: 'A cake in the fridge, for you!' }],
  olha: 'Find six if sentences. What tense comes after if? And what comes in the other part?' };

var TRANSFORMA = { rot: 'PROBLEM → INSTRUCTION', fim: 'Six problems, six clear instructions.',
  itens: [
    { de: 'Problem: the dog is hungry.', pista: 'If Biscuit …, give …', para: 'If Biscuit is hungry, give him one cup of food.' },
    { de: 'Problem: it’s very hot.', pista: 'If it’s …, open …', para: 'If it’s very hot, open the windows.' },
    { de: 'Problem: the neighbor knocks.', pista: 'If somebody …, say …', para: 'If somebody knocks, say Nina is away.' },
    { de: 'Problem: you lose the key.', pista: 'If you …, don’t panic …', para: 'If you lose the key, don’t panic. Leo has a spare one.' },
    { de: 'Problem: the plants are dry.', pista: 'If the plants …, water …', para: 'If the plants are dry, water them in the morning.' },
    { de: 'Careful: “If it will rain…”', pista: 'If it …, take …', para: 'If it rains, take the umbrella.' }] };

var CARTAO = { ph: 'Welcome to my home!\nIf you’re cold, the blankets are in the closet.\nIf the cat meows, give her some food.\nIf the Wi-Fi stops, turn the router off and on.\nDon’t worry if the fridge makes a noise!', rot: 'Instructions for my friend',
  chips: ['If you’re hungry, ', 'If you’re cold, ', 'If the … , ', 'If it rains, ', 'Don’t worry if ', 'turn it off', 'call me', 'take the …', 'give him / her …'],
  perg: ['YOUR HOME · YOUR RULES', 'A friend is staying in your home. What happens if…? Write four if sentences.'],
  exemploRot: 'MY HOME', exemplo: [['IF COLD', 'blankets in the closet'], ['IF THE CAT MEOWS', 'some food'], ['IF NO WI-FI', 'router off and on'], ['IF A NOISE', 'don’t worry']],
  modelo: 'Welcome to my home!<br>If you’re cold, the blankets are in the closet.<br>If the cat meows, give her some food.<br>If the Wi-Fi stops, turn the router off and on.<br>Don’t worry if the fridge makes a noise!' };

var ESCOLHA = [
  { a: 'look after a dog for a week', b: 'look after ten plants for a month', chips: ['I’d choose …', 'because if …'], ex: 'Ten plants, because if a plant is sad, it doesn’t bark!' },
  { a: 'a friend’s flat with a big TV', b: 'a friend’s flat with a big balcony', chips: ['The one with …', 'because if …'], ex: 'The balcony, because if it’s sunny I can have breakfast outside.' },
  { a: 'if it rains: stay home', b: 'if it rains: go out with an umbrella', chips: ['If it rains, I …', 'because …'], ex: 'If it rains, I stay home and watch a film.' },
  { a: 'leave instructions on paper', b: 'send instructions by message', chips: ['I prefer …', 'because if …'], ex: 'By message, because if they lose the paper, they still have it.' }];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* A2 · If It Rains, Take This: leitura · transforma · cartao · escolha */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de cartao.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right note.', pares: [{ c: 'If it rains, take the umbrella.', x: 'If it will rain, take the umbrella.', d: 'After if: the present. No <b>will</b>.' }, { c: 'If Biscuit barks, don’t worry.', x: 'If Biscuit barks, no worry.', d: 'For no, use <b>don’t</b> + verb.' }, { c: 'If the washer is noisy, turn it off.', x: 'If the washer is noisy, to turn it off.', d: 'An order: the verb first, no to.' }, { c: 'If you go out, close the window.', x: 'If you go out close the window.', d: 'When if comes first, put a <b>comma</b>.' }, { c: 'Call me if you need help.', x: 'Call me if you will need help.', d: 'if + present, even when we talk about later.' }], nota: 'After <b>if</b>, use the present, never will: If it <b>rains</b>. Then the order: <b>take</b> the umbrella. If the if part comes first, add a comma.', uso: { p: 'Your turn. A friend will take care of your home. Write two notes with If.', molde: ['If … , …', 'If … , don’t …'], ex: 'If the doorbell rings, don’t open the door. If the cat is hungry, give her the blue bowl.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
