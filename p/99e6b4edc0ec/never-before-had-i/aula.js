/* ============================================================
   NEVER BEFORE HAD I · C1 · UNIT 3 (EMPHASIS) · LIVE CLASS  16/10/2026
   Aula nova do livro C1 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: inversão depois de advérbio negativo ou restritivo (Never before had I seen…, Rarely does…,
   Not once did…, Hardly had… when…) e fronting para efeito (Above us danced the lights; Strange it was.).
   O mundo: uma escritora de viagem escreve a abertura do texto sobre a aurora boreal num lago congelado
   da Finlândia; o aluno edita um rascunho e escreve a abertura dramática de uma viagem dele.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 3, titulo: ['Never Before', 'Had I'], tema: 'Inversion and fronting for a dramatic opening.',
  sub: 'A travel writer has 100 words to make readers feel the northern lights over a frozen lake. Read her opening, learn how inversion and fronting make a sentence land, fix a flat draft, and write the opening of YOUR best trip.',
  placa: 'LAKE INARI · 1:40 AM', lugarConversa: 'THE CABIN', cor: '#f2c14e', cor2: '#f8e2a6',
  chips: ['Never before had I…', 'Not once did…', 'Above us danced…'], botao: 'Start the lesson', nota: 'Inversion is for writing and speeches, not for ordering coffee. Use it once, at the right moment.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · The Opening', t: 'One hundred words of light.', p: 'Read the opening out loud with your teacher, slowly. Then look closer.' },
  { k: 'transforma', est: 'f', min: 9, img: 'capa', rot: 'II · Make It Land', t: 'Plain sentence → dramatic sentence.', p: 'Read the plain sentence. Use the clue. Say it with inversion or fronting.' },
  { k: 'erros', est: 'f', min: 8, img: 'conversa', rot: 'III · The Editor’s Pen', t: 'The intern’s draft has five problems.', p: 'Find a problem, say the right form, then tap.' },
  { k: 'cartao', est: 'w', min: 10, img: 'capa', rot: 'IV · Your Opening', t: 'The first lines of your best trip.', p: 'Write four or five lines. Use one inversion and one fronting. Make the reader feel it.' }
];
var PORTAS = [];

var LEITURA = { rot: 'TRAVEL SECTION · DRAFT 3 · “THE NIGHT THE SKY MOVED”', tipo: 'nota',
  antes: { q: 'What is the most beautiful thing you have ever seen in nature? Describe it in one sentence.', h: 'A sunset in the Lençóis Maranhenses: the dunes turned pink.' },
  texto: '{Never before had I} stood so still for so long.\nAt 1:40 a.m. the guide whispered “now”, and {above us danced} a green curtain, slow and enormous.\n{Not once did} anyone speak. {Rarely does} a crowd of strangers agree so completely on silence.\n{Hardly had} I lifted my camera {when} the colors changed again: violet, then white, then gone.\n{Cold it was}, brutally cold. {Little did I} care.\n{Only later did I} realize that I hadn’t taken a single good photo. {So rare is} that kind of night that I don’t regret it.',
  perguntas: [
    { q: 'Where is the writer, and at what time?', h: 'At Lake Inari, in Finland, at 1:40 in the morning.' },
    { q: 'How did the group of strangers behave?', h: 'Nobody spoke. They agreed on silence.' },
    { q: 'What happened when she lifted her camera?', h: 'The colors changed: violet, white, then gone.' },
    { q: 'Does she regret not having good photos? Why?', h: 'No. That kind of night is so rare.' }],
  olha: 'Find seven sentences where the normal order changes. After never, not once, rarely, hardly, little, only later: what comes before the subject?' };

var TRANSFORMA = { rot: 'MAKE IT LAND', fim: 'Six sentences that make an editor smile.',
  itens: [
    { de: 'I had never seen anything like it.', pista: 'Never before …', para: 'Never before had I seen anything like it.' },
    { de: 'Nobody complained once about the cold.', pista: 'Not once …', para: 'Not once did anybody complain about the cold.' },
    { de: 'You rarely find a sky so clear.', pista: 'Rarely …', para: 'Rarely do you find a sky so clear.' },
    { de: 'I had just arrived when it started.', pista: 'Hardly … when …', para: 'Hardly had I arrived when it started.' },
    { de: 'I understood its beauty only later.', pista: 'Only later …', para: 'Only later did I understand its beauty.' },
    { de: 'The lights danced above the lake.', pista: 'fronting: Above the lake …', para: 'Above the lake danced the lights.' }] };

var ERROS = { tipo: 'nota', rot: 'INTERN’S DRAFT · DESERT NIGHT', rotulo: 'PROBLEMS', pede: 'Find the five problems. Say the right form, then tap.', fim: 'Five fixed. Now read it out loud: does it land?', dica: 'The student says the right form before tapping.', partes: [
  ['Never before I had seen', 'Never before had I seen', 'after never before: had + subject'], ' so many stars. ',
  ['Not once anybody spoke', 'Not once did anybody speak', 'not once + did + subject + verb'], ' in the first hour. ',
  ['Rarely the desert is', 'Rarely is the desert', 'rarely + be + subject'], ' this quiet. ',
  ['Hardly had we sat down then', 'Hardly had we sat down when', 'hardly … when'], ' a shooting star crossed the sky. ',
  ['Little I knew', 'Little did I know', 'little + did + subject + verb'], ' that the best part was still to come.'] };

var CARTAO = { ph: 'Never before had I seen the sea change color so fast.\nAt six, on the beach of Jericoacoara, the sun dropped like a coin into the water.\nNot once did the wind stop. Above us flew kites of every color.\nOnly later did I realize I had forgotten my shoes in the sand.', rot: 'The opening of my trip',
  chips: ['Never before had I ', 'Not once did ', 'Rarely do you ', 'Hardly had I … when ', 'Little did I know ', 'Only later did I ', 'Above us ', 'So … was … that '],
  perg: ['YOUR BEST TRIP', 'Where? What moment? Use at least one inversion and one fronting. Make the reader feel it.'],
  exemploRot: 'MY TRIP', exemplo: [['PLACE', 'Jericoacoara'], ['MOMENT', 'sunset at six'], ['INVERSION', 'Never before had I…'], ['FRONTING', 'Above us flew kites'], ['TWIST', 'forgot my shoes']],
  modelo: 'Never before had I seen the sea change color so fast.<br>At six, on the beach of Jericoacoara, the sun dropped like a coin into the water.<br>Not once did the wind stop. Above us flew kites of every color.<br>Only later did I realize I had forgotten my shoes in the sand.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Never Before Had I: leitura · transforma · erros · cartao */
