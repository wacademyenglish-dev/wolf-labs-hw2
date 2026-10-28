/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 14 · SORRY, COULD YOU REPEAT THAT? · LIVE CLASS  27/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js do curso). A1.
   Alvo: frases de sobrevivência na ligação: Could you repeat that? / speak more slowly? / spell that? / Can I call you back? / Let me check.
   Soletrar nomes e e-mails (at, dot, underscore, dash). Imperativo educado.
   Armadilhas: “What?” como resposta, “Repeat, please” seco, “Can you speak more slow?”, “arroba”, “point”.
   Situação: uma ligação ruim com um cliente. Produto: o cartão de frases + soletrar o próprio e-mail.
   Empresas FICTÍCIAS (Bluepeak Services, Westfield Plastics). SAP, Oracle, TOTVS só como nome de produto.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 14, kick: 'SELLING SERVICES · LESSON 14', titulo: ['Sorry, Could You', 'Repeat That?'], tema: 'phone phrases · spelling names and e-mails', placa: 'LESSON 14',
  lugarConversa: 'A BAD LINE', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'The line is bad, the client is fast, and his e-mail is long. No panic. Today you learn the phrases that save every phone call, and you spell your e-mail in English.',
  chips: ['The phone tips', 'A bad line', 'Your phone card'], botao: 'Start the lesson',
  nota: 'Never “What?”. Say: “Sorry, could you repeat that?” And @ is “at”, not “arroba”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Week', t: 'How many calls did you have this week?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'leitura', est: 'l', min: 7, img: 'mesa', rot: 'II · The Phone Tips', t: 'A page from the Bluepeak sales training.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'dialogo', est: 'l', min: 9, img: 'conversa', rot: 'III · A Bad Line', t: 'A client calls. The line is bad, and he is fast.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Polite, Not “What?”', t: 'Two answers. Which one is better on the phone?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'erros', est: 'f', min: 8, img: 'mesa', rot: 'V · Fix the Call Script', t: 'A new colleague wrote a call script. Five mistakes.', p: 'Find a mistake. Say the right form. Then tap it.' },
  { k: 'escolha', est: 'o', min: 5, img: 'conversa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 9, img: 'capa', rot: 'VII · Your Phone Card', t: 'Your four phrases and your e-mail, in words.', p: 'Write them. Then spell your e-mail out loud: your teacher writes it.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 14: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How many calls did you have this week?', f: 'A lot or a few?', voce: ['I had … calls.', 'A lot! About …'], ex: 'A lot! About fifteen calls.' },
  { q: 'Are phone calls in English easy for you?', f: 'Easy or difficult?', voce: ['They’re difficult because …', 'They’re OK.'], ex: 'They’re difficult because people speak fast.' },
  { q: 'How do you spell your first name?', f: 'Letter by letter!', voce: ['It’s …', 'My name is … : …'], ex: 'It’s Rafael: R-A-F-A-E-L.' },
  { q: 'Do you prefer calls or messages with clients?', f: 'Calls or messages?', voce: ['I prefer … because …'], ex: 'I prefer messages because I can read them again.' }
];

var LEITURA = { rot: 'BLUEPEAK TRAINING · PHONE CALLS IN ENGLISH (FICTIONAL)', tipo: 'nota',
  antes: { q: 'You don’t understand a client on the phone. What is a bad answer?', h: '“What?” or silence. Both are bad.' },
  texto: 'Phone calls in English are difficult for everybody. Use these phrases.\nYou don’t understand: “Sorry, {could you repeat that}?”\nThe client is fast: “{Could you speak more slowly}, please?”\nA name or an e-mail: “{Could you spell that}, please?”\nThe line is bad: “Sorry, the line is bad. {Can I call you back}?”\nYou check: “{Let me check}: is that M-A-R-K?”\nIn an e-mail, @ is “at”, . is “dot”, _ is “underscore” and - is “dash”.\nNever say “What?”. It isn’t polite.',
  perguntas: [
    { q: 'You don’t understand. What do you say?', h: 'Sorry, could you repeat that?' },
    { q: 'The client is fast. What do you say?', h: 'Could you speak more slowly, please?' },
    { q: 'How do you say @ and . in an e-mail?', h: '@ is “at”, and . is “dot”.' },
    { q: 'Why not “What?”?', h: 'It isn’t polite.' }],
  olha: 'Look at the highlighted phrases. How do they start (Could you…? Can I…? Let me…)? Where is “please”?' };

var DIALOGO = { rot: 'A BAD LINE · WESTFIELD PLASTICS (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'A client says his e-mail very fast. What do you say?', h: 'Could you speak more slowly, please? Could you spell that?' },
  ouvir: 'Listen: what does Greg need? What is his e-mail?',
  falas: [
    ['Greg', 'Hi, Leo. It’s Greg from Westfield. Can you hear me?'],
    ['Leo', 'Hi, Greg. Sorry, the line is bad. {Could you repeat that}?'],
    ['Greg', 'Sure. It’s Greg Novak, from Westfield Plastics.'],
    ['Leo', 'Thanks, Greg. How can I help?'],
    ['Greg', 'I need the proposal by Thursday. Please send it to my e-mail.'],
    ['Leo', 'Of course. {Could you spell} your e-mail, please?'],
    ['Greg', 'G, underscore, N-O-V-A-K, at westfield dot com.'],
    ['Leo', 'Sorry, {could you speak more slowly}, please?'],
    ['Greg', 'Sure. G… underscore… N-O-V-A-K… at westfield… dot com.'],
    ['Leo', '{Let me check}: G, underscore, Novak, at westfield dot com?'],
    ['Greg', 'Yes, that’s right. And the meeting is on Friday at 2 p.m.'],
    ['Leo', 'Friday at 2 p.m. Perfect. Thank you for your patience!']],
  voz: { Greg: 'en-US-SteffanNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'What is the problem with the call?', h: 'The line is bad, and Greg is fast.' },
    { q: 'What does Greg need? When?', h: 'The proposal, by Thursday.' },
    { q: 'What is Greg’s e-mail?', h: 'G underscore Novak at westfield dot com: g_novak@westfield.com.' },
    { q: 'What does Leo say when Greg is fast?', h: 'Sorry, could you speak more slowly, please?' },
    { q: 'When is the meeting?', h: 'On Friday at 2 p.m.' }],
  fim: 'Repeat · speak more slowly · spell · let me check. Polite, calm, and nothing lost.' };

var DESCOBRE = {
  pares: [
    { a: 'Sorry, {could you repeat that}?', b: '{What?}', q: 'You don’t understand the client. Which one is polite?', r: '“What?” sounds rude on a call. Say <b>Sorry, could you repeat that?</b>' },
    { a: 'Could you speak {more slowly}, please?', b: 'Can you speak {more slow}?', q: 'Speak how?', r: 'Speak how? <b>slowly</b> (with -ly). And <b>Could you…, please?</b> is softer than “Can you…?”.' },
    { a: '{Could you} repeat your name, please?', b: '{Repeat}, please.', q: 'Which one is better with a client?', r: 'An order is too dry with a client. Start with <b>Could you…?</b>' },
    { a: 'leo {at} bluepeak {dot} com', b: 'leo {arroba} bluepeak {point} com', q: 'How do you say an e-mail in English?', r: '@ = <b>at</b> · . = <b>dot</b> · _ = <b>underscore</b> · - = <b>dash</b>.' }],
  regra: [['DON’T UNDERSTAND', 'Sorry, could you repeat that?'], ['TOO FAST', 'Could you speak more slowly, please?'], ['NAMES', 'Could you spell that, please? · Let me check: …'], ['E-MAIL', '@ at · . dot · _ underscore · - dash']],
  armas: [['WHAT?', 'What?', 'Sorry, could you repeat that?', 'polite'], ['SLOW', 'Can you speak more slow?', 'Could you speak more slowly?', 'slowly'], ['DRY', 'Repeat, please.', 'Could you repeat that, please?', 'Could you…?'], ['@', 'leo arroba bluepeak', 'leo at bluepeak', 'at · dot']] };

var ERROS = { rot: 'CALL SCRIPT · DRAFT FROM A NEW COLLEAGUE', tipo: 'nota', rotulo: 'MISTAKES', pede: 'Find the five mistakes. Say the right form, then tap.', fim: 'Five fixed. Now read the script out loud, like a real call.', dica: 'The student says the right form BEFORE tapping. Ask: is it polite? Is it English or Portuguese?', partes: [
  'MY PHONE SCRIPT\nI don’t understand: ',
  ['What?', 'Sorry, could you repeat that?', 'polite: could you repeat'], '\nThe client is fast: ',
  ['Can you speak more slow?', 'Could you speak more slowly, please?', 'slowly + please'], '\nA name: ',
  ['Repeat the name.', 'Could you spell your name, please?', 'polite: Could you…?'], '\nMy e-mail: leo underscore martins ',
  ['arroba', 'at', '@ = at'], ' bluepeak ',
  ['point', 'dot', '. = dot'], ' com\nThe line is bad: Can I call you back?'] };

var ESCOLHA = [
  { a: 'A phone call', b: 'A video call', chips: ['I prefer … because …', 'It’s easier / clearer …'], ex: 'I prefer a video call because I can see the face. It’s easier to understand.' },
  { a: 'Ask the client to repeat', b: 'Say “yes” and check later by e-mail', chips: ['I prefer … because …', '… is better than …'], ex: 'I prefer to ask. “Could you repeat that?” is better than a wrong number in the proposal.' },
  { a: 'Calls in the morning', b: 'Calls in the afternoon', chips: ['I prefer … because …', 'Clients are … in the …'], ex: 'I prefer the morning because clients are less busy.' }];
var ESCOLHA_FIM = 'No shame in “Could you repeat that?”. Native speakers say it every day.';

var CARTAO = { ph: 'Sorry, could you …?\nCould you speak …, please?\nCould you spell …, please?\nMy e-mail is … at … dot com.', rot: 'My phone card',
  chips: ['Sorry, could you repeat that?', 'Could you speak more slowly, please?', 'Could you spell that, please?', 'Can I call you back?', 'Let me check: ', 'My e-mail is ', ' at ', ' dot ', ' underscore ', 'Thank you for your patience.'],
  perg: ['YOUR PHONE CARD', 'Your four favorite phrases, and your real work e-mail in words. Then spell it out loud: your teacher writes it.'],
  exemploRot: 'CONTACT · WESTFIELD PLASTICS', exemplo: [['NAME', 'Greg Novak'], ['JOB', 'finance manager'], ['E-MAIL', 'g_novak@westfield.com'], ['SAY IT', 'G underscore N-O-V-A-K at westfield dot com'], ['MEETING', 'Friday, 2 p.m.']],
  modelo: 'Sorry, could you repeat that?<br>Could you speak more slowly, please?<br>Could you spell that, please?<br>Let me check: …<br>My e-mail is leo underscore martins at bluepeak dot com: L-E-O, underscore, M-A-R-T-I-N-S.' };

var PODE = [
  'I can ask a client to repeat, politely (never “What?”).',
  'I can ask a client to speak more slowly and to spell a name.',
  'I can say an e-mail in English: at, dot, underscore, dash.',
  'I can spell my name and my e-mail on the phone.'
];
