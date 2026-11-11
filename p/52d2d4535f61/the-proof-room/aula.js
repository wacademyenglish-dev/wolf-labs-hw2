/* ============================================================
   THE PROOF ROOM · THE SIX PADLOCKS · LIVE CLASS  06/10/2026
   Main series B1 · could × was able to × managed to. A pergunta é
   COMPRIMENTO, não dificuldade: uma JANELA (anos, uma infância) leva
   COULD; UM DIA leva WAS ABLE TO, ou MANAGED TO quando custou. E
   COULDN'T serve para os dois — por isso ninguém nunca corrigiu "I
   could open the jar last night". Erros: could para um dia só;
   "managed open" (sem TO); "was able to" para habilidade de anos.
   O MUNDO (da aula velha): uma escape room; seis cadeados; quatro
   chaves; a história de um problema real resolvido. A aula velha não
   tinha áudio, e esta também não tem (a voz é do professor).
   A CARA: os CADEADOS de latão em SVG — a alça salta quando a chave
   certa entra — e a RÉGUA DO TEMPO: a janela é uma barra longa, o dia
   é um colchete curto com bordas.
   Fila: FILA-LIVE-386.md · 108.
   ============================================================ */
/* 19/10/2026 · MAIS SIMPLES (o Carlos: "está meio confusa"). Era metáfora demais ao mesmo tempo
   (sala de prova, claims, fitas, janela, bordas, carimbo) e a mesma pergunta em três cenas. Agora uma
   só: a escape room, cadeados e chaves. A regra vem ANTES de julgar; "janela/dia" virou "anos (uma
   habilidade) × um momento (você conseguiu)". Saíram V Proven or Not e VI Give It Edges (os dados
   ficam no arquivo, sem cena). Backup: aula.js.antes-de-simplificar. */
/* 19/10/2026 · 2.0 (desenho _v2/desenho.html, aprovado): a regra contada com a história do pote (II),
   um listening gravado (IV, edge-tts Ava US + Ryan GB, audio/fuga*.mp3), três conversas (I, VIII, IX)
   e uma pergunta rápida a cada cadeado aberto (VI). Backup: aula.js.antes-do-2-0. */
var L = [
  { k: 'capa', est: null, img: 'saida' },
  { k: 'claims', est: 'o', min: 6, img: 'piscina', rot: 'I · Warm-up', t: 'Before the room: things you could do.', p: 'Answer out loud, in full sentences. Your teacher keeps your answers for the end.' },
  { k: 'pote', est: 'f', min: 5, img: 'pote1', rot: 'II · The Jar', t: 'Last night, a jar. Why not COULD?', p: 'Read the story out loud, one picture at a time. Then answer: years, or one moment?' },
  { k: 'gx', est: 'f', min: 4, img: 'chaves', rot: 'III · The Timeline', t: 'Years, one day, or one hard day?', p: 'Tap a sentence, then its place on the line. Notice the verbs. Then say three lines about you.' },
  { k: 'chaves', est: 'f', min: 6, img: 'chaves', rot: 'IV · The Four Keys', t: 'Four keys. Each one opens a different kind of lock.', p: 'Read each key out loud. Then make one sentence about your life with each.' },
  { k: 'ligacao', est: 'l', min: 8, img: 'saida', rot: 'V · The Escape Call', t: 'Tom just got out of an escape room. Listen.', p: 'Listen once for the story. Then line by line: which key did they use?' },
  { k: 'fitas', est: 'f', extra: 1, min: 5, img: 'porta', rot: 'VI · Years or One Moment?', t: 'Two sentences. Which one is ONE moment?', p: 'Read A and B. Tap the one that happened once. Say why.' },
  { k: 'cadeados', est: 'o', min: 6, img: 'caixa', rot: 'VII · The Six Locks', t: 'Six locks between you and the door. Each one needs the right key.', p: 'Choose a key, say the whole sentence, then answer the quick question.' },
  { k: 'contra', est: 'f', extra: 1, min: 4, img: 'caixa', rot: 'VIII · The Trap', t: 'Three of these five are fine. Two are broken.', p: 'Fine as it is, or does it need another key? Then say the fixed one.' },
  { k: 'entrevista', est: 'o', min: 7, img: 'bicicleta', rot: 'IX · The Interview', t: 'Ask your teacher. Then your teacher asks you.', p: 'Pick a card, ask it, and always ask one more: “When exactly?”' },
  { k: 'historia', est: 'o', min: 7, img: 'porta', rot: 'X · Your Escape Story', t: 'Tell a real problem you solved: at work, at home, anywhere.', p: 'One step at a time. Your teacher will ask: when, exactly?' },
  { k: 'fim', est: 'w', min: 5, img: 'chaves', rot: 'XI · Your Three Sentences', t: 'Your warm-up answers come back. Fix them with the right keys.', p: 'Write them again with the right keys. It goes to your My notes.' }
];

var CHAVES = {
  could: { t: 'COULD', s: 'years · a skill', c: '#86c9f0', regra: 'YEARS: a skill you had for a long time.', ex: 'I <b>could</b> swim when I was six.' },
  able: { t: 'WAS ABLE TO', s: 'one moment · you did it', c: '#8fd9a2', regra: 'ONE MOMENT: you did it, once.', ex: 'We <b>were able to</b> book the last two seats.' },
  managed: { t: 'MANAGED TO', s: 'one moment · it was hard', c: '#e9b04f', regra: 'ONE MOMENT, AND IT WAS HARD: after trying.', ex: 'After three tries, I <b>managed to</b> open the window.' },
  couldnt: { t: 'COULDN’T', s: 'years or one moment', c: '#c7a6ff', regra: 'THE NEGATIVE: years or one moment. Always works.', ex: 'I <b>couldn’t</b> sleep last night. I <b>couldn’t</b> swim until I was ten.' }
};
var CK = ['could', 'able', 'managed', 'couldnt'];

var CLAIMS = [
  { q: 'Could you swim when you were six? Who taught you?', fup: 'And now: can you still swim well?', st: ['I could … when I was …', 'I couldn’t … until I was …'], ex: 'Yes, I could swim when I was six. My father taught me in a river.' },
  { q: 'What could you do as a kid that you can’t do now?', fup: 'How old were you?', st: ['When I was …, I could …', 'I could … but now I can’t.'], ex: 'When I was ten, I could do a cartwheel. Now I can’t!' },
  { q: 'Tell me about something difficult you did once. What happened?', fup: 'When exactly?', st: ['Once, I …', 'Last year, I …'], ex: 'Last year I passed my driving test on the third try.' }
];

/* II · O POTE: a regra contada antes de qualquer exercício */
var POTE = [
  { img: 'pote1', t: 'Last night, I wanted some honey. A new jar.' },
  { img: 'pote2', t: 'The lid was stuck. I tried a towel, then a knife. Nothing.' },
  { img: 'pote3', t: 'Then hot water, for five minutes…' },
  { img: 'pote4', t: '…and it opened!' }
];

/* IV · A LIGAÇÃO DA FUGA: o diálogo (audio/fuga.mp3) e as falas soltas (audio/fuga-NN.mp3) */
var FUGA = [
  ['Mia', 'Tom! You’re out! How was the escape room?'],
  ['Tom', 'Honestly? Terrible at first. We couldn’t find the first key for twenty minutes.'],
  ['Mia', 'Twenty minutes? But you’re so good at puzzles. You could solve anything at school.'],
  ['Tom', 'Yeah, at school I could. Tonight, not so much.'],
  ['Mia', 'So what happened?'],
  ['Tom', 'Lucy found a clock behind a painting. She was able to open the first lock with the time on it.'],
  ['Mia', 'Smart. And the last door?'],
  ['Tom', 'That one was hard. The code had six numbers, and we kept getting it wrong.'],
  ['Mia', 'Did you get out in time?'],
  ['Tom', 'Just. We managed to open it with forty seconds left.'],
  ['Mia', 'Forty seconds! I couldn’t do that. I can’t even open a jar under pressure.'],
  ['Tom', 'Ha! Next time, you’re coming with us.']
];
var GIST = [
  { q: 'Did they get out of the room?', ex: 'Yes, they did. They managed to get out.' },
  { q: 'How much time was left?', ex: 'Forty seconds!' },
  { q: 'Who opened the first lock, and how?', ex: 'Lucy. She was able to open it with the time on a clock.' }
];
/* fala por fala: qual chave? (i = índice em FUGA; a frase com a lacuna) */
var LINHAS = [
  { i: 1, a: 'We ', b: ' find the first key for twenty minutes.', k: 'couldnt', w: 'Negative, twenty minutes: COULDN’T works.' },
  { i: 2, a: 'You ', b: ' solve anything at school.', k: 'could', w: 'Years at school: a skill. COULD.' },
  { i: 5, a: 'She ', b: ' open the first lock with the time on it.', k: 'able', w: 'One moment, she did it: WAS ABLE TO.' },
  { i: 9, a: 'We ', b: ' open it with forty seconds left.', k: 'managed', w: 'One hard moment, forty seconds left: MANAGED TO.' },
  { i: 10, a: 'Forty seconds! I ', b: ' do that.', k: 'couldnt', w: 'Negative: COULDN’T is always safe.' }
];
var DEPOIS_FUGA = [
  { q: 'Have you ever done an escape room? Would you like to?', ex: 'No, I haven’t, but I’d love to. I think I could solve the puzzles!' },
  { q: 'Could you get out of a room in sixty minutes? Who would you take with you?', ex: 'I think I could. I’d take my sister: she was able to solve a Rubik’s cube in five minutes once.' }
];

/* VIII · A ENTREVISTA: o aluno pergunta, depois o professor */
var CARTAS = [
  'Could you ride a bike when you were five?',
  'Were you able to sleep well last night?',
  'What did you manage to do yesterday?',
  'What couldn’t you do as a kid?',
  'Could your parents speak English?',
  'What did you manage to finish this week?',
  'Were you able to find everything you needed today?',
  'What couldn’t you do last week?'
];

var FITAS = [
  { a: 'I could fix engines. Any engine, really.', b: 'I was able to get it running in forty minutes.', k: 'b', w: 'B is one morning: you did it once. COULD is for years.' },
  { a: 'I could swim before I could read.', b: 'I managed to swim back to the boat.', k: 'b', w: 'A is a childhood. B is a few hard minutes: MANAGED TO.' },
  { a: 'She was able to convince him.', b: 'She could convince anybody.', k: 'a', w: 'A is one argument. B is a talent.' },
  { a: 'I couldn’t sleep on planes.', b: 'I couldn’t sleep that night.', k: 'ab', w: 'Both! In the negative, COULDN’T covers a lifetime AND one night.' },
  { a: 'He managed to say it in Japanese.', b: 'He could say it in Japanese.', k: 'a', w: 'A is once, and it cost him. B is a skill.' },
  { a: 'We could see the ocean from the kitchen.', b: 'We were able to see the ocean that evening.', k: 'b', w: 'A is the house, every day. B is one evening.' }
];

var CADEADOS = [
  { a: 'I ', b: ' swim when I was five.', ok: ['could'], w: 'A childhood, years: <b>could</b>.', talk: 'And you: what could you do when you were five?' },
  { a: 'The door was stuck, but after ten minutes I ', b: ' open it.', ok: ['managed', 'able'], w: 'One moment, and it was hard: <b>managed to</b> (or <b>was able to</b>). What changes?', talk: 'Was there a door, or a jar, that you couldn’t open? What did you do?' },
  { a: 'My grandfather ', b: ' speak four languages.', ok: ['could'], w: 'A lifetime skill: <b>could</b>.', talk: 'What could your grandparents do that you can’t?' },
  { a: 'I ', b: ' find my keys last night, so I slept at a friend’s place.', ok: ['couldnt'], w: 'Negative, one night: <b>couldn’t</b> works.', talk: 'Have you ever lost your keys? Were you able to find them?' },
  { a: 'The code was hard, but she ', b: ' solve it before midnight.', ok: ['managed', 'able'], w: 'One night, a clock: <b>managed to</b> / <b>was able to</b>.', talk: 'What did you manage to finish just before a deadline?' },
  { a: 'We ', b: ' see the mountains from our old house.', ok: ['could'], w: 'For years: <b>could</b>.', talk: 'What could you see from the window of your old house?' }
];

var SELO = [
  { f: 'I could speak Spanish.', k: 'no', w: 'A window with no day in it. True, maybe, but unproven.' },
  { f: 'I managed to keep the team calm on Friday.', k: 'ok', w: 'A day, a difficulty, a result. Proven.' },
  { f: 'I was able to read music.', k: 'no', w: 'A skill over years takes COULD, and it still has no day.' },
  { f: 'I couldn’t finish it that night.', k: 'ok', w: 'The negative is always safe, and there’s a night.' },
  { f: 'I was able to fix the door in about ten minutes.', k: 'ok', w: 'Ten minutes has edges. A day.' },
  { f: 'I managed to understand English.', k: 'no', w: 'Understanding English isn’t an afternoon.' },
  { f: 'She could always find the cheapest flight.', k: 'no', w: 'ALWAYS is a window. Correct grammar, no proof.' },
  { f: 'We managed to get there before it closed.', k: 'ok', w: 'BEFORE IT CLOSED is a clock. Proven.' }
];

var BORDAS = [
  { f: 'I could cook when I was younger.', dica: 'One meal, one evening.', alvo: 'I managed to cook for eleven people the night my sister moved out.' },
  { f: 'She could always calm him down.', dica: 'One argument, one room.', alvo: 'She was able to calm him down in two minutes on Tuesday.' },
  { f: 'We could understand each other.', dica: 'One conversation, something at stake.', alvo: 'We managed to understand each other on a very bad phone line.' },
  { f: 'He could run fast.', dica: 'A distance, a clock, a finish.', alvo: 'He managed to run the last two miles with a bad knee.' },
  { f: 'I could never say no.', dica: 'Careful: this one is already fine. Find the day anyway.', alvo: 'The negative works for both. And on Thursday, I was able to say no.' }
];

var CONTRA = [
  { f: 'I couldn’t open the jar last night.', k: 'ok', w: 'Fine. Negative, one night.' },
  { f: 'I could open the jar last night.', k: 'troca', v: 'I managed to open the jar last night.', w: 'Same jar, same night. Positive, and COULD breaks.' },
  { f: 'She couldn’t drive until she was thirty.', k: 'ok', w: 'Fine. A window, negative.' },
  { f: 'He could pass the exam on the third try.', k: 'troca', v: 'He managed to pass the exam on the third try.', w: 'ON THE THIRD TRY is one moment, and it was hard.' },
  { f: 'We couldn’t hear the announcement.', k: 'ok', w: 'Fine, whether it was one announcement or all of them.' }
];

var PASSOS = [
  { q: 'What was the problem? When did it happen?', st: ['It was last …', 'A few years ago …'], push: 'When exactly? What day, what time?' },
  { q: 'What couldn’t you do at first?', st: ['At first, I couldn’t …'], push: 'Why not? What was in the way?' },
  { q: 'What did you try?', st: ['I tried to …, then I …'], push: 'And did it work the first time?' },
  { q: 'How did you manage to solve it in the end?', st: ['In the end, I managed to …'], push: 'How long did it take?' },
  { q: 'Were you able to do it alone?', st: ['I was able to …', 'I couldn’t … without …'], push: 'Who helped?' },
  { q: 'Could you do it again today?', st: ['Now I can …', 'I could …'], push: 'Years or one moment?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {}, po: { n: 0 }, li: { p: 0, sel: -1, esc: {} }, en: { usadas: {}, troca: 0 },
  cl: { n: 0, foi: {} }, fi: { n: 0, esc: '' }, ch: { sel: '' , foi: {} }, ca: { n: 0, esc: '' }, se: { n: 0, esc: '' }, bo: { n: 0, abre: 0 }, co: { n: 0, esc: '' }, hi: { n: 0, push: 0 } };

/* um cadeado de latão: a alça salta quando abre */
function cadeado(aberto, num, cor, mini) {
  return '<svg class="pf-cad' + (aberto ? ' aberto' : '') + (mini ? ' mini' : '') + '" viewBox="0 0 80 100" aria-hidden="true"' + (cor ? ' style="--kc:' + cor + '"' : '') + '>'
    + '<path class="pf-alca" d="M22 46 V30 a18 18 0 0 1 36 0 V46"/>'
    + '<rect class="pf-corpo" x="10" y="44" width="60" height="48" rx="9"/>'
    + '<circle class="pf-furo" cx="40" cy="64" r="6"/><path class="pf-furo" d="M37 66 h6 l-1 12 h-4z"/>'
    + (num ? '<text x="40" y="88" text-anchor="middle" class="pf-num">' + num + '</text>' : '') + '</svg>';
}
/* a régua do tempo: janela (barra longa) ou dia (colchete curto) */
function regua(k) {
  return '<div class="pf-regua ' + (k || '') + '"><span class="pf-ano">YEARS</span><div class="pf-eixo"><i class="pf-janela"></i><i class="pf-dia"></i></div><span class="pf-ano">NOW</span></div>';
}
function chaveBtn(k, acao, esc, certo, extra) {
  var C = CHAVES[k], cls = esc === k ? (certo ? ' certo' : ' errado') : '';
  return '<button type="button" class="pf-chave' + cls + '" style="--kc:' + C.c + '" data-a="' + acao + '" data-v="' + k + '"' + (extra || '') + '><span class="pf-cabeca"></span><b>' + C.t + '</b><small>' + C.s + '</small></button>';
}
function doisLados(acao, est, ok, ops, msg) {
  return '<div class="pf-dois">' + ops.map(function (o) { return '<button type="button" class="versao grande-v' + (est.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>';
}

/* a legenda das chaves: a regra inteira numa linha, sempre na tela dos exercícios */
function legenda() {
  return '<div class="pf-legenda" aria-label="The four keys">' + CK.map(function (k) { var C = CHAVES[k]; return '<span style="--kc:' + C.c + '"><b>' + C.t + '</b>' + C.s + '</span>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · AN ESCAPE ROOM</span><h1>The Proof <b>Room</b></h1>'
    + '<p class="sub">“I <s>could</s> open the jar last night.” The lock won’t open. Try another key: I <b>managed to</b> open it.</p>'
    + '<div class="chipsx"><span class="pilula">could · years</span><span class="pilula">was able to · one moment</span><span class="pilula">managed to · one hard moment</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the room</button>' + faixaLive() + '</div>'
    + '<div class="capa-r"><div class="pf-fila">' + [0, 1, 2, 3, 4, 5].map(function (i) { return cadeado(i === 1, i + 1, i === 1 ? CHAVES.managed.c : ''); }).join('') + '</div>'
    + '<div class="pf-chaveiro">' + CK.map(function (k) { return '<span class="pf-chave estatica" style="--kc:' + CHAVES[k].c + '"><span class="pf-cabeca"></span><b>' + CHAVES[k].t + '</b></span>'; }).join('') + '</div></div></div>';
};

R.claims = function (c) { return sequencia(c, CLAIMS, S.cl, 'cl', 'Warm-up') + '<p class="so-prof dica-aluno" style="text-align:center">Note the second answer word for word: many students say “I could” for one moment. Don’t correct it now; it comes back in VII.</p>'; };

R.fitas = function (c) {
  var e = S.fi, n = e.n, fim = n >= FITAS.length;
  if (fim) return cab(c) + legenda() + trilha(FITAS, n) + '<div class="foco">' + regua('ambos') + '<div class="pergunta vd"><small>SIX PAIRS</small><h2>One question decides it: years, or one moment?</h2></div></div>';
  var x = FITAS[n], ok = e.esc === x.k, um = ok ? (x.k === 'a' ? 'dia-a' : x.k === 'b' ? 'dia-b' : 'ab') : '';
  return cab(c) + legenda() + trilha(FITAS, n) + '<div class="foco"><div class="pf-fitas">' + [['a', x.a], ['b', x.b]].map(function (f) { var dia = ok && x.k.indexOf(f[0]) >= 0; return '<div class="pf-fita vd' + (dia ? ' dia' : '') + '"><small>TAPE ' + f[0].toUpperCase() + '</small><p>' + f[1] + '</p>' + (ok ? regua(dia ? 'dia' : 'janela') : '') + '</div>'; }).join('') + '</div>'
    + '<p class="pf-pergunta">Which one happened ONCE?</p><div class="pf-tres">' + [['a', 'A IS ONE MOMENT'], ['b', 'B IS ONE MOMENT'], ['ab', 'BOTH']].map(function (o) { return '<button type="button" class="versao grande-v' + (e.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="fi" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="fi-prox">Next pair</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Did it happen once, or for years?</p>' : '') + '</div>';
};

R.chaves = function (c) {
  var e = S.ch, frases = { could: ['When I was …, I could …'], able: ['Last …, I was able to …'], managed: ['After …, I managed to …'], couldnt: ['Last night I couldn’t …', 'Until I was …, I couldn’t …'] };
  return cab(c) + '<div class="pf-quatro">' + CK.map(function (k) {
    var C = CHAVES[k], on = e.sel === k;
    return '<button type="button" class="pf-cartao vd' + (on ? ' on' : '') + (e.foi[k] ? ' foi' : '') + '" style="--kc:' + C.c + '" data-a="ch" data-v="' + k + '">'
      + '<span class="pf-chave estatica" style="--kc:' + C.c + '"><span class="pf-cabeca"></span><b>' + C.t + '</b></span>'
      + '<h3>' + C.regra + '</h3><p>' + C.ex + '</p>' + regua(k === 'could' ? 'janela' : k === 'couldnt' ? 'ambos' : 'dia') + '</button>';
  }).join('') + '</div>'
    + (e.sel ? '<div class="pf-tua">' + fala('ch' + e.sel, frases[e.sel], []) + '</div>' : '<p class="dica-aluno" style="text-align:center">Tap a key and make a sentence about your life.</p>')
    + (CK.every(function (x) { return e.foi[x]; }) ? '<p class="aprova" style="text-align:center">Four keys. One question decides: years, or one moment?</p>' : '');
};

R.cadeados = function (c) {
  var e = S.ca, n = e.n, fim = n >= CADEADOS.length;
  var fila = '<div class="pf-fila">' + CADEADOS.map(function (x, i) { var aberto = i < n || (i === n && x.ok.indexOf(e.esc) >= 0); return cadeado(aberto, i + 1, aberto ? CHAVES[i < n ? x.ok[0] : e.esc].c : '', 1); }).join('') + '</div>';
  if (fim) return cab(c) + legenda() + fila + '<div class="foco"><div class="pergunta vd"><small>SIX LOCKS OPEN</small><h2>The door swings. You’re out. Now write a seventh lock for your teacher.</h2></div></div>';
  var x = CADEADOS[n], ok = x.ok.indexOf(e.esc) >= 0;
  return cab(c) + legenda() + fila + '<div class="foco"><div class="balao vd"><small>LOCK ' + (n + 1) + ' OF 6</small><p>' + x.a + '<u>' + (ok ? CHAVES[e.esc].t.toLowerCase() : '_____') + '</u>' + x.b + '</p></div>'
    + '<p class="pf-pergunta">Years or one moment? Positive or negative? Choose the key.</p><div class="pf-chaves linha">' + CK.map(function (k) { return chaveBtn(k, 'ca', e.esc, x.ok.indexOf(k) >= 0); }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + ' Say the whole sentence.</p>' + (x.talk ? '<div class="pf-rapida vd"><small>QUICK TALK</small><p>' + x.talk + '</p></div>' : '') + '<div style="text-align:center"><button type="button" class="btn" data-a="ca-prox">Next lock</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Click. The lock didn’t move. Years or one moment? Is it negative?</p>' : '') + '</div>';
};

R.selo = function (c) {
  var e = S.se, n = e.n, fim = n >= SELO.length;
  if (fim) return cab(c) + trilha(SELO, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT CLAIMS</small><h2>Every unproven sentence might be true. It just needs a day. Prove line 1 with a day of your own.</h2></div></div>';
  var x = SELO[n], ok = e.esc === x.k;
  return cab(c) + trilha(SELO, n) + '<div class="foco"><div class="pf-doc vd">' + (ok ? '<span class="pf-carimbo ' + x.k + '">' + (x.k === 'ok' ? 'ONE DAY · PROVEN' : 'NO DAY · NOT YET') + '</span>' : '') + '<small>CLAIM ' + (n + 1) + ' OF 8</small><p>“' + x.f + '”</p></div>'
    + doisLados('se', e, ok, [['ok', 'ONE DAY · PROVEN'], ['no', 'NO DAY · NOT YET']])
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="se-prox">Next claim</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Is there one day in it?</p>' : '') + '</div>';
};

R.bordas = function (c) {
  var e = S.bo, n = e.n, fim = n >= BORDAS.length;
  if (fim) return cab(c) + trilha(BORDAS, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE WINDOWS, FIVE DAYS</small><h2>The verb followed the day. Now find the day inside one of your own windows.</h2></div></div>';
  var x = BORDAS[n];
  return cab(c) + trilha(BORDAS, n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>THE WINDOW</small><b>' + x.f + '</b></div>' + regua(e.abre ? 'dia' : 'janela') + '<p class="pista">Hint: ' + x.dica + '</p></div>'
    + '<div class="lado-l">' + fala('bo' + n, ['Last …, I managed to …', 'On …, she was able to …'], ['managed to', 'was able to', 'that night', 'on Tuesday']) + (e.abre ? '<div class="balao vd ok-b"><small>A MODEL · ONE DAY</small><p>' + x.alvo + '</p></div><div><button type="button" class="btn" data-a="bo-prox">Next window</button></div>' : '<div><button type="button" class="btn so-prof" data-a="bo-abre">They said it · open a model</button></div><p class="dica-aluno">Say your one-day version first.</p>') + '</div></div>';
};

/* II · O POTE: quatro quadros, um de cada vez; no fim, a frase errada riscada e a pergunta que decide */
R.pote = function (c) {
  var n = S.po.n, fim = n >= POTE.length;
  var quadros = '<div class="pf-quadros">' + POTE.map(function (q, i) { var on = i <= n; return '<figure class="' + (on ? 'on' : '') + (i === n ? ' vez' : '') + '">' + (on ? '<img src="' + img(q.img) + '" alt=""><figcaption>' + (i + 1) + ' · ' + q.t + '</figcaption>' : '<b>' + (i + 1) + '</b>') + '</figure>'; }).join('') + '</div>';
  if (!fim) return cab(c) + quadros + '<div style="text-align:center;margin-top:14px"><button type="button" class="btn cheio" data-a="po-prox">' + (n < POTE.length - 1 ? 'Next picture' : 'So… what do I say?') + '</button></div>';
  return cab(c) + quadros + '<div class="pf-veredito vd"><p class="pf-frase"><s>I could open it.</s> <span>→</span> I <b>managed to</b> open it.</p>'
    + '<div class="pergunta vd ja"><small>THE ONE QUESTION</small><h2>Was it years, or one moment?</h2></div>' + mostra('po', 'One moment: one night, and it was hard. So not COULD (years, a skill). MANAGED TO, or WAS ABLE TO.')
    + '<p class="pf-ponte">Em português: <b>conseguia</b> (sempre) = could · <b>consegui</b> (uma vez) = managed to / was able to</p></div>';
};

/* IV · A LIGAÇÃO DA FUGA: ouvir a história → fala por fala (qual chave?) → conversar */
R.ligacao = function (c) {
  var e = S.li, passos = '<div class="pf-passos">' + ['1 · The story', '2 · Line by line', '3 · Talk'].map(function (t, i) { return '<span class="' + (i === e.p ? 'on' : i < e.p ? 'foi' : '') + '">' + t + '</span>'; }).join('') + '</div>';
  if (e.p === 0) {
    var texto = FUGA.map(function (f) { return '<b>' + f[0] + ':</b> ' + f[1]; }).join('<br>');
    return cab(c) + passos + '<div class="mesa-c"><div class="lado-l"><div class="pf-ouvir vd"><small>THE ESCAPE CALL · 1:03</small><p>Mia calls her friend Tom. He just got out of an escape room with his friends.</p>' + tocar('fuga.mp3') + '</div>' + transcricao('fuga.mp3', texto, 'fuga') + '</div>'
      + '<div class="lado-l">' + GIST.map(function (g, i) { return '<div class="pergunta vd ja"><small>LISTEN FOR · ' + (i + 1) + '</small><h2>' + g.q + '</h2></div>' + mostra('gi' + i, g.ex); }).join('') + '<div><button type="button" class="btn" data-a="li-p" data-n="1">Now line by line</button></div></div></div>';
  }
  if (e.p === 1) {
    var sel = e.sel;
    var lista = '<div class="pf-linhas">' + LINHAS.map(function (x, i) {
      var esc = e.esc[i], ok = esc === x.k, quem = FUGA[x.i][0];
      return '<div class="pf-linha' + (i === sel ? ' on' : '') + (ok ? ' feita' : '') + '"><span class="pf-quem">' + quem + '</span>' + tocar('fuga-' + ('0' + x.i).slice(-2) + '.mp3', true)
        + '<button type="button" class="pf-frase-l" data-a="li-sel" data-n="' + i + '">' + x.a + '<u style="--kc:' + (ok ? CHAVES[x.k].c : 'currentColor') + '">' + (ok ? CHAVES[x.k].t.toLowerCase() : '_____') + '</u>' + x.b + '</button></div>';
    }).join('') + '</div>';
    var x = LINHAS[sel], esc = sel >= 0 ? e.esc[sel] : null, ok = x && esc === x.k;
    var lado = x ? '<p class="pf-pergunta">Line ' + (sel + 1) + ': which key did they use? Say it, then tap.</p><div class="pf-chaves linha">' + CK.map(function (k) { return chaveBtn(k, 'li-k', esc, k === x.k); }).join('') + '</div>'
      + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p>' : esc ? '<p class="recusa" style="text-align:center">Listen again. Years or one moment? Is it negative?</p>' : '')
      : '<p class="dica-aluno" style="text-align:center">Tap a line. Listen to it, then choose the key.</p>';
    var todas = LINHAS.every(function (y, i) { return e.esc[i] === y.k; });
    return cab(c) + passos + legenda() + lista + lado + (todas ? '<div style="text-align:center"><button type="button" class="btn" data-a="li-p" data-n="2">Now talk</button></div>' : '');
  }
  return cab(c) + passos + '<div class="mesa-c"><div class="lado-l"><figure class="pf-foto"><img src="' + img('saida') + '" alt=""><figcaption>“We managed to open it with forty seconds left.”</figcaption></figure></div>'
    + '<div class="lado-l">' + DEPOIS_FUGA.map(function (g, i) { return '<div class="pergunta vd ja"><small>TALK · ' + (i + 1) + '</small><h2>' + g.q + '</h2></div>' + mostra('df' + i, g.ex, 1); }).join('') + '</div></div>';
};

/* VIII · A ENTREVISTA: cartas de pergunta; primeiro o aluno pergunta, depois o professor */
R.entrevista = function (c) {
  var e = S.en, quem = e.troca ? 'Your teacher asks you' : 'You ask your teacher';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><figure class="pf-foto"><img src="' + img('bicicleta') + '" alt=""><figcaption>' + quem + '</figcaption></figure>'
    + '<div class="pf-rapida vd"><small>AFTER EVERY ANSWER</small><p>Ask one more: <b>“When exactly?”</b> It decides the key.</p></div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + quem.toUpperCase() + '</small><h2>Pick a card. Ask it. Listen for the key.</h2></div>'
    + '<div class="pf-cartas-q">' + CARTAS.map(function (q, i) { return '<button type="button" class="pf-carta-q' + (e.usadas[i] ? ' on' : '') + '" data-a="en-usa" data-n="' + i + '">' + q + '</button>'; }).join('') + '</div>'
    + '<div><button type="button" class="btn" data-a="en-troca">' + (e.troca ? 'Swap: you ask again' : 'Swap: your teacher asks') + '</button></div></div></div>';
};

R.contra = function (c) {
  var e = S.co, n = e.n, fim = n >= CONTRA.length;
  if (fim) return cab(c) + legenda() + trilha(CONTRA, n) + '<div class="foco"><div class="pergunta vd"><small>THE TRAP</small><h2>COULDN’T works so often that you never looked at COULD. Invent a trap sentence for your teacher.</h2></div></div>';
  var x = CONTRA[n], ok = e.esc === x.k;
  return cab(c) + legenda() + trilha(CONTRA, n) + '<div class="foco"><div class="balao vd"><small>SENTENCE ' + (n + 1) + ' OF 5</small><p>' + x.f + '</p></div>'
    + '<p class="pf-pergunta">Is this sentence fine, or does it need another key?</p>' + doisLados('co', e, ok, [['ok', 'FINE AS IT IS'], ['troca', 'NEEDS ANOTHER KEY']])
    + (ok ? (x.v ? '<div class="balao vd ok-b"><small>SAY IT</small><p>' + x.v + '</p></div>' : '') + '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="co-prox">Next</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Positive or negative? Years or one moment?</p>' : '<p class="so-prof dica-aluno" style="text-align:center">If they’re stuck, cover the NOT and read it again.</p>') + '</div>';
};

R.historia = function (c) {
  var e = S.hi, n = Math.min(e.n, PASSOS.length - 1), fim = e.n >= PASSOS.length, x = PASSOS[n];
  var fila = '<div class="pf-fila">' + PASSOS.map(function (p, i) { return cadeado(i < e.n, i + 1, i < e.n ? CHAVES.managed.c : '', 1); }).join('') + '</div>';
  if (fim) return cab(c) + fila + '<div class="foco"><div class="pergunta vd"><small>SIX STEPS</small><h2>You escaped: a real problem, told with the right key at every lock. Now the whole story again, in one minute.</h2></div></div>';
  return cab(c) + fila + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd ja"><small>STEP ' + (n + 1) + ' OF 6</small><h2>' + x.q + '</h2></div>' + fala('hi' + n, x.st, []) + '</div>'
    + '<div class="lado-l">' + (e.push ? '<div class="balao vd pf-push"><small>YOUR TEACHER PUSHES</small><p>“' + x.push + '”</p></div><div><button type="button" class="btn" data-a="hi-prox">Next step</button></div>' : '<div><button type="button" class="btn so-prof" data-a="hi-push">Answered · ask “when exactly?”</button></div><p class="dica-aluno">Answer out loud.</p>') + '<p class="so-prof dica-aluno">Listen for “I could solve it” for one moment: that’s the mistake.</p></div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'When I was …, I could …\nLast …, I managed to …\nLast week I couldn’t …', 'Your three sentences',
    ['could', 'was able to', 'managed to', 'couldn’t', 'last night', 'when I was'], ['YOUR THREE SENTENCES, WITH THE RIGHT KEYS', 'Years with COULD, one moment with MANAGED TO or WAS ABLE TO, and a COULDN’T.'])
    + '<div class="lado-fim"><div class="pf-fila">' + CK.map(function (k) { return cadeado(1, 0, CHAVES[k].c, 1); }).join('') + '</div>'
    + '<div class="grande vd"><span><u>years</u> (a skill): could</span><span><u>one moment</u>: was able to · managed to</span><span><u>couldn’t</u>: always works</span><span>not <s>I could open it last night</s></span></div>'
    + mostra('fim', 'When I was ten, I could do a cartwheel.<br>Last May, I managed to run ten kilometers.<br>Last week I couldn’t finish my book.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.fi = function (b, n, v) { S.fi.esc = v; };
TOQUES['po-prox'] = function () { S.po.n += 1; };
TOQUES['li-p'] = function (b, n) { S.li.p = n; };
TOQUES['li-sel'] = function (b, n) { S.li.sel = n; };
TOQUES['li-k'] = function (b, n, v) { if (S.li.sel >= 0) S.li.esc[S.li.sel] = v; };
TOQUES['en-usa'] = function (b, n) { S.en.usadas[n] = !S.en.usadas[n]; };
TOQUES['en-troca'] = function () { S.en.troca = S.en.troca ? 0 : 1; S.en.usadas = {}; };
TOQUES['fi-prox'] = function () { S.fi = { n: S.fi.n + 1, esc: '' }; };
TOQUES.ch = function (b, n, v) { S.ch.sel = v; S.ch.foi[v] = 1; };
TOQUES.ca = function (b, n, v) { S.ca.esc = v; };
TOQUES['ca-prox'] = function () { S.ca = { n: S.ca.n + 1, esc: '' }; };
TOQUES.se = function (b, n, v) { S.se.esc = v; };
TOQUES['se-prox'] = function () { S.se = { n: S.se.n + 1, esc: '' }; };
TOQUES['bo-abre'] = function () { S.bo.abre = 1; };
TOQUES['bo-prox'] = function () { S.bo = { n: S.bo.n + 1, abre: 0 }; };
TOQUES.co = function (b, n, v) { S.co.esc = v; };
TOQUES['co-prox'] = function () { S.co = { n: S.co.n + 1, esc: '' }; };
TOQUES['hi-push'] = function () { S.hi.push = 1; };
TOQUES['hi-prox'] = function () { S.hi = { n: S.hi.n + 1, push: 0 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de chaves.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'Which key opens it? Put each sentence on the line.',
  marcos: [{ t: 'YEARS', s: 'when I was a kid' }, { t: 'ONE DAY', s: 'last night' }, { t: 'ONE HARD DAY', s: 'it cost something' }],
  frases: [
    { f: 'I could swim when I was six.', c: 0, d: 'could · a window of years' },
    { f: 'We could play outside every summer.', c: 0, d: 'could · a window of years' },
    { f: 'I was able to open the jar last night.', c: 1, d: 'was able to · one day' },
    { f: 'She was able to finish the report on Friday.', c: 1, d: 'was able to · one day' },
    { f: 'I managed to open the door after ten minutes.', c: 2, d: 'managed to · it was hard' },
    { f: 'He managed to find the key at the last second.', c: 2, d: 'managed to · it was hard' }
  ],
  nota: 'A window of years: <b>could</b>. One day: <b>was able to</b>. One day, and it was hard: <b>managed to</b>. And <b>couldn’t</b> works for all three.',
  uso: { p: 'Your turn. One thing you could do as a kid, one thing you were able to do yesterday, and one thing you managed to do.', molde: ['When I was a kid, I could …', 'Yesterday I was able to …', 'I managed to … after …'], ex: 'When I was a kid, I could ride a bike with no hands. Yesterday I was able to finish early. I managed to fix my phone after an hour.' },
  prof: 'Let the student place the sentences alone. A wrong place comes back with one tap.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
