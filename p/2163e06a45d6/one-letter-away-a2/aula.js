/* ============================================================
   ONE LETTER AWAY · THE CHAT · LIVE CLASS  06/10/2026
   Main series A2 · -ED × -ING: -ed é a pessoa que SENTE (bored, tired,
   interested, surprised), -ing é a coisa que CAUSA (boring, tiring...). O
   BE não muda; só a terminação faz o trabalho. Erro universal: "I'm
   boring" querendo dizer o sentimento; "the film was bored".
   O MUNDO (da aula velha): domingo, um filme longo; no meio, o Tom escreve
   para a Ana "I'm boring". Cinco áudios, conferidos com faster-whisper em
   06/10: batem com a transcrição antiga.
   A CARA: uma TELA DE CHAT escura (balões, horário, "typing…"); o aluno
   escolhe a terminação e a Ana responde: entendeu, ou ficou confusa.
   Fila: FILA-LIVE-386.md · 059.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'sofa' },
  { k: 'abre', est: 'o', min: 7, img: 'sofa', rot: 'I · Your Weekend', t: 'Before Tom’s chat: your weekend.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'msg', est: 'f', min: 6, img: 'sofa', rot: 'II · The Message', t: 'Sunday. A long film. In the middle, Tom writes to Ana.', p: 'Read Tom’s message out loud. Then answer two questions.' },
  { k: 'chat', est: 'f', min: 6, img: 'sofa', rot: 'III · The Chat', t: 'Tom tries again. You choose his endings. Ana answers.', p: 'Read Tom’s message out loud with an ending. Tap -ED or -ING. Watch Ana’s reply.' },
  { k: 'gx', est: 'f', min: 4, img: 'sofa', rot: 'IV · Who Feels It?', t: 'Two small scenes on the sofa. Two endings.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new moments.' },
  { k: 'regra', est: 'f', min: 6, img: 'sofa', rot: 'V · The Rule', t: 'Two slots, and the slot chooses the ending.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'ouve', est: 'l', min: 7, img: 'onibus', rot: 'VI · Listen', t: 'Nobody says -ED or -ING loudly.', p: 'Play. Choose the ending you heard. Then say it back.' },
  { k: 'metades', est: 'o', min: 7, img: 'onibus', rot: 'VII · Match the Halves', t: 'The second half proves the first.', p: 'Tap a beginning, then its ending. Say the pair out loud.' },
  { k: 'conserta', est: 'f', min: 6, extra: 1, img: 'sofa', rot: 'VIII · Five Messages to Fix', t: 'Five messages from real students. One has nothing wrong.', p: 'Read it out loud. Tap the wrong word, or NOTHING IS WRONG.' },
  { k: 'semana', est: 'o', min: 7, extra: 1, img: 'onibus', rot: 'IX · Rate Your Week', t: 'Four things from your week. Rate them, then say both halves.', p: 'Tap the stars. Then say: It was ___ing, so I was ___ed.' },
  { k: 'fim', est: 'w', min: 6, img: 'sofa', rot: 'X · Tom Tries Again', t: 'Write your own message to a friend.', p: 'Something from your week: the thing (-ing) and you (-ed). It goes to your My notes.' }
];

var TR = { 'a2ol-ouve1.mp3': 'The film was boring.', 'a2ol-ouve2.mp3': 'I was bored on Sunday.', 'a2ol-ouve3.mp3': 'The end is surprising.', 'a2ol-ouve4.mp3': 'I was surprised, honestly.', 'a2ol-ouve5.mp3': 'The trip was tiring.' };

var ABRE = [
  { k: 'BORED', q: 'What makes you bored? And what is boring for you?', fup: 'What do you do when you’re bored?', st: ['I get bored when …', '… is boring.'], ex: 'I get bored in long meetings. Traffic is boring too.' },
  { k: 'THE LAST FILM', q: 'Finish it out loud: “The last film I saw was ___, and I was ___.”', fup: 'Your teacher keeps this one for the end.', st: ['The last film I saw was …'], ex: 'The last film I saw was long, and I was sleepy.' },
  { k: 'THIS WEEK', q: 'What was interesting this week?', fup: 'Why?', st: ['… was interesting.'], ex: 'A podcast about the ocean was interesting.' }
];
var FORMAS = [{ k: 'ed', t: '-ED FOR THE PERSON' }, { k: 'ing', t: '-ING FOR THE THING' }, { k: 'imb', t: 'I’M BORING (= BORED)', erro: 1 }, { k: 'fb', t: 'THE FILM WAS BORED', erro: 1 }];

var PASSOS = [
  { q: 'What did Ana read?', op: [['Tom is a boring person.', 0], ['Tom feels bored.', 1]], k: 0, w: 'BORING describes Tom himself: he makes people bored.' },
  { q: 'What did Tom mean?', op: [['He is a boring person.', 0], ['He feels bored.', 1]], k: 1, w: 'He meant I’m bored. One letter.' }
];

var MSGS = [
  { pre: 'Sorry! I meant I’m ', raiz: 'bor', pos: '.', end: 'ed', ok: 'Ha! OK, that makes more sense.', mau: 'Wait… you’re boring? Why?' },
  { pre: 'The film is so ', raiz: 'bor', pos: '. Nothing happens.', end: 'ing', ok: 'Stop watching it, then!', mau: 'The film feels bored?' },
  { pre: 'But the music is ', raiz: 'interest', pos: '.', end: 'ing', ok: 'Which composer?', mau: 'The music wants to know more?' },
  { pre: 'I’m ', raiz: 'interest', pos: ' in the soundtrack.', end: 'ed', ok: 'Send me the name!', mau: 'You make people interested? Nice.' },
  { pre: 'Three hours on the sofa. I’m so ', raiz: 'tir', pos: '.', end: 'ed', ok: 'Go to bed, Tom.', mau: 'You make people tired?' },
  { pre: 'OK, the end was ', raiz: 'surpris', pos: '!', end: 'ing', ok: 'No spoilers!', mau: 'The end was surprised by what?' },
  { pre: 'I was really ', raiz: 'surpris', pos: '. I didn’t see it coming.', end: 'ed', ok: 'Now I want to watch it.', mau: 'You surprise people? How?' },
  { pre: 'Tomorrow’s trip will be ', raiz: 'tir', pos: '. Six hours on a bus.', end: 'ing', ok: 'Take a pillow!', mau: 'The trip feels tired?' }
];
function palavra(raiz, end) { var base = { bor: 'bor', interest: 'interest', tir: 'tir', surpris: 'surpris' }[raiz]; return end === 'ed' ? base + 'ed' : base + 'ing'; }

var FITAS = [['-ED · THE PERSON', 'I am bored · she was tired'], ['-ING · THE THING', 'the film is boring · the trip is tiring'], ['BE NEVER CHANGES', 'only the ending does the job'], ['BOTH HALVES', 'It was ___ing, so I was ___ed.']];
var ARMAS = [
  ['THE FEELING', 'I’m boring. (you mean the feeling)', 'I’m bored.', 'The person who feels it: -ed.'],
  ['THE THING', 'The film was very bored.', 'The film was very boring.', 'A film can’t feel. It causes the feeling: -ing.'],
  ['INTERESTED', 'I was very interesting in the story.', 'I was very interested in the story.', 'You feel it: interested.'],
  ['TIRED', 'We are tiring after the trip.', 'We are tired after the trip.', 'They feel it: tired.'],
  ['SURPRISED', 'I was surprising. I didn’t see it coming.', 'I was surprised. I didn’t see it coming.', 'You feel it: surprised.'],
  ['PEOPLE CAUSE IT TOO', 'My teacher is interested. (a great class)', 'My teacher is interesting.', 'The teacher makes the class interesting: -ing.']
];

var AUDIOS = [
  { au: 'a2ol-ouve1.mp3', raiz: 'bor', end: 'ing' }, { au: 'a2ol-ouve2.mp3', raiz: 'bor', end: 'ed' }, { au: 'a2ol-ouve3.mp3', raiz: 'surpris', end: 'ing' },
  { au: 'a2ol-ouve4.mp3', raiz: 'surpris', end: 'ed' }, { au: 'a2ol-ouve5.mp3', raiz: 'tir', end: 'ing' }
];

var PARES = [
  ['The film was boring,', 'so we stopped it after an hour.'],
  ['I was bored,', 'because nothing happened for forty minutes.'],
  ['The end was surprising,', 'so nobody moved for ten seconds.'],
  ['The trip was tiring,', 'so we slept until eleven.'],
  ['I was tired,', 'because the bus left at 5 AM.']
];
var LADO_B = ordem(PARES.map(function (p, i) { return [p[1], i]; }), 6);

var CONSERTA = [
  { s: 'I am so boring in this class.', errada: 'boring', certa: 'bored', w: 'The feeling: BORED.' },
  { s: 'The film was very bored and long.', errada: 'bored', certa: 'boring', w: 'A film can’t feel bored.' },
  { s: 'My teacher is very interesting.', ok: 1, w: 'Nothing to fix. The teacher makes the class interesting.' },
  { s: 'I was very interesting in the story.', errada: 'interesting', certa: 'interested', w: 'The feeling: INTERESTED.' },
  { s: 'We are tiring after the trip.', errada: 'tiring', certa: 'tired', w: 'They feel it: TIRED.' }
];

var COISAS = [
  { t: 'Something you watched', dica: 'The show was …, so I was …', ex: 'The show was exciting, so I was excited all week.' },
  { t: 'Your work or classes', dica: 'My work was …, and I was …', ex: 'My work was tiring, and I was tired every night.' },
  { t: 'A trip or a commute', dica: 'The trip was …, so I was …', ex: 'The bus ride was boring, so I was bored.' },
  { t: 'A conversation', dica: 'The conversation was …, and I was …', ex: 'The conversation was surprising, and I was surprised.' }
];
var PALAVRAS = ['boring / bored', 'interesting / interested', 'tiring / tired', 'exciting / excited', 'surprising / surprised', 'relaxing / relaxed'];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, msg: { esc: {} }, chat: { n: 0, esc: '' }, ouv: {}, mt: { sel: -1, par: {}, err: -1 }, cs: {}, sem: { estrelas: {} } };

function balao(quem, txt, cls) { return '<div class="bolha ' + quem + (cls ? ' ' + cls : '') + '"><span>' + txt + '</span></div>'; }
function telefone(conteudo, rodape, cls) {
  return '<div class="fone' + (cls ? ' ' + cls : '') + '"><div class="topo-f"><span class="avatar">A</span><div><b>Ana</b><small>online</small></div><em>SUN · 9:41 PM</em></div><div class="conversa">' + conteudo + '</div>' + (rodape ? '<div class="rodape-f">' + rodape + '</div>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE CHAT</span><h1>One Letter <b>Away</b></h1>'
    + '<p class="sub">Tom wrote to Ana in the middle of a long film. He meant <b>bored</b>. He typed <b>boring</b>. One letter changed everything.</p>'
    + '<div class="chipsx"><span class="pilula">-ed · the person</span><span class="pilula">-ing · the thing</span><span class="pilula">bored · boring</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the chat</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + telefone(balao('tom', 'This film is three hours long…') + balao('tom', 'I’m boring.', 'grita') + balao('ana', 'Oh no, Tom. You’re not boring!'), '<span class="digita">Tom is typing…</span>') + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.msg = function (c) {
  var e = S.msg, feitos = PASSOS.filter(function (p, i) { return e.esc[i] === p.k; }).length;
  return cab(c) + '<div class="mesa-c">' + telefone(balao('tom', 'This film is three hours long…') + balao('tom', 'I’m boring.', 'grita') + (feitos === 2 ? balao('ana', 'Oh no, Tom. You’re not boring!') : ''), '') + '<div class="lado-l">' + PASSOS.map(function (p, i) {
    var esc = e.esc[i], ok = esc === p.k;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + p.q + '</p><div class="tres-b">' + p.op.map(function (o) { return '<button type="button" class="pilula grande-p' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="mg" data-n="' + i + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (ok ? '<p class="aprova">' + p.w + '</p>' : esc !== undefined ? '<p class="recusa">Read the message again. What does the -ING say about Tom?</p>' : '') + '</div>';
  }).join('') + (feitos === 2 ? '<p class="aprova">Both are real English. One letter decided which one Ana got.</p>' : '') + '</div></div>';
};

R.chat = function (c) {
  var e = S.chat, n = e.n, fim = n >= MSGS.length, hist = '';
  MSGS.slice(Math.max(0, n - 2), n).forEach(function (m) { hist += balao('tom', m.pre + palavra(m.raiz, m.end) + m.pos) + balao('ana', m.ok); });
  if (fim) return cab(c) + trilha(MSGS, n) + '<div class="mesa-c">' + telefone(hist, '') + '<div class="lado-l"><div class="pergunta vd"><small>EIGHT MESSAGES</small><h2>Ana understood every one in the end.</h2></div></div></div>';
  var x = MSGS[n], ok = e.esc === x.end;
  var tom = x.pre + '<span class="slot' + (e.esc ? (ok ? ' bom' : ' mau') : '') + '">' + (e.esc ? palavra(x.raiz, e.esc) : x.raiz + '___') + '</span>' + x.pos;
  var conversa = hist + balao('tom', tom) + (e.esc ? balao('ana', ok ? x.ok : x.mau, ok ? '' : 'confusa') : '');
  var rodape = ok ? '<button type="button" class="btn" data-a="ch-prox">Next message</button>' : '<button type="button" class="tecla" data-a="ch" data-v="ed">' + x.raiz + '<b>ED</b></button><button type="button" class="tecla" data-a="ch" data-v="ing">' + x.raiz + '<b>ING</b></button>';
  return cab(c) + trilha(MSGS, n) + '<div class="mesa-c">' + telefone(conversa, rodape) + '<div class="lado-l"><div class="pergunta vd"><small>WHO FEELS IT? WHAT CAUSES IT?</small><h2>' + (e.esc && !ok ? 'Ana is confused. Who feels it, and what causes it?' : ok ? 'Ana got it.' : 'Read Tom’s message out loud, with the ending. Then tap it.') + '</h2></div><div class="fitas mini"><div class="fita vd"><small>-ED</small><b>the person who feels it</b></div><div class="fita vd"><small>-ING</small><b>the thing that causes it</b></div></div></div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.ouve = function (c) {
  return cab(c) + '<div class="audios">' + AUDIOS.map(function (x, i) {
    var esc = S.ouv[i], ok = esc === x.end, ouviu = (S.ouviu || {})[x.au];
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><div class="toca-linha">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>'
      + (ouviu ? '<div class="tres-b">' + ['ed', 'ing'].map(function (en) { return '<button type="button" class="pilula grande-p' + (esc === en ? (ok ? ' certo' : ' errado') : '') + '" data-a="ov" data-n="' + i + '" data-v="' + en + '">' + palavra(x.raiz, en) + '</button>'; }).join('') + '</div>' : '')
      + (ok ? '<p class="aprova">Now say it back, loud: the ending too.</p>' : esc ? '<p class="recusa">Play it again. Listen to the very end of the word.</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.metades = function (c) {
  var e = S.mt, feitos = Object.keys(e.par).length;
  return cab(c) + '<div class="metades"><div class="col-m">' + PARES.map(function (p, i) { return '<button type="button" class="meia a' + (e.sel === i ? ' on' : '') + (e.par[i] ? ' feito' : '') + '" data-a="mt-a" data-n="' + i + '"' + (e.par[i] ? ' disabled' : '') + '>' + p[0] + '</button>'; }).join('') + '</div>'
    + '<div class="col-m">' + LADO_B.map(function (b) { var feito = e.par[b[1]]; return '<button type="button" class="meia b' + (feito ? ' feito' : '') + (e.err === b[1] ? ' errado' : '') + '" data-a="mt-b" data-n="' + b[1] + '"' + (feito ? ' disabled' : '') + '>' + b[0] + '</button>'; }).join('') + '</div></div>'
    + (e.err >= 0 ? '<p class="recusa" style="text-align:center">That half doesn’t fit. Read the beginning again.</p>' : feitos === 5 ? '<p class="aprova" style="text-align:center">-ING goes with what it caused. -ED goes with why you felt it.</p>' : '<p class="dica-aluno" style="text-align:center">' + (e.sel >= 0 ? 'Now tap its ending.' : 'Tap a beginning.') + '</p>');
};

R.conserta = function (c) {
  return cab(c) + '<div class="conserta">' + CONSERTA.map(function (x, i) {
    var esc = S.cs[i], ok = x.ok ? esc === 'nada' : esc === x.errada;
    var palavras = x.s.split(' ').map(function (w) { var limpa = w.replace(/[.,]/g, ''); var marca = ok && !x.ok && limpa === x.errada; return '<button type="button" class="pal' + (marca ? ' riscada' : '') + (esc === limpa && !ok ? ' errado' : '') + '" data-a="cs" data-n="' + i + '" data-v="' + limpa + '"' + (ok ? ' disabled' : '') + '>' + (marca ? '<s>' + w + '</s> <b>' + x.certa + '</b>' : w) + '</button>'; }).join(' ');
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><div class="frase-w">' + palavras + '</div><div class="tres-b"><button type="button" class="pilula' + (esc === 'nada' ? (ok ? ' certo' : ' errado') : '') + '" data-a="cs" data-n="' + i + '" data-v="nada"' + (ok ? ' disabled' : '') + '>NOTHING IS WRONG</button></div>' + (ok ? '<p class="aprova">' + x.w + '</p>' : esc ? '<p class="recusa">Read it again. Who feels it?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.semana = function (c) {
  var e = S.sem;
  return cab(c) + '<div class="palavras-s">' + PALAVRAS.map(function (p) { return '<span class="pilula">' + p + '</span>'; }).join('') + '</div><div class="semana">' + COISAS.map(function (x, i) {
    var n = e.estrelas[i] || 0;
    return '<div class="q-linha vd"><p>' + x.t + '</p><div class="estrelas">' + [1, 2, 3, 4, 5].map(function (k) { return '<button type="button" class="estrela' + (k <= n ? ' on' : '') + '" data-a="st" data-n="' + i + '" data-v="' + k + '" aria-label="' + k + ' stars">★</button>'; }).join('') + '</div><p class="dica-aluno">' + x.dica + '</p>' + mostra('sm' + i, x.ex, 1) + '</div>';
  }).join('') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Hi! The … was …ing, so I was …ed.', 'Your message',
    ['was boring', 'I was bored', 'was tiring', 'I was tired', 'was interesting', 'I was interested', 'was surprising', 'I was surprised'], ['TOM: “Sorry! I meant: I was bored. The film was boring. Not me.” ANA: “I know. I just wanted to hear you say it right.”', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write to a friend about your week: the thing, then you.' : 'Write to a friend about your week: the thing (-ing), then you (-ed).'])
    + '<div class="lado-fim">' + telefone(balao('tom', 'I was bored. The film was boring. Not me.') + balao('ana', 'I know.'), '', 'mini') + '<div class="grande vd"><span><u>-ed</u>: the person who feels it</span><span><u>-ing</u>: the thing that causes it</span><span>BE never changes</span></div>'
    + mostra('fim', 'Hi Ana! The trip to the beach was tiring, so I was tired on Monday.<br>But the sunset was amazing. I was surprised: no rain!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.mg = function (b, n, v) { S.msg.esc[n] = +v; };
TOQUES.ch = function (b, n, v) { S.chat.esc = v; };
TOQUES['ch-prox'] = function () { S.chat = { n: S.chat.n + 1, esc: '' }; };
TOQUES.ov = function (b, n, v) { S.ouv[n] = v; };
TOQUES['mt-a'] = function (b, n) { S.mt.sel = n; S.mt.err = -1; };
TOQUES['mt-b'] = function (b, n) { if (S.mt.sel < 0) return; if (n === S.mt.sel) { S.mt.par[n] = 1; S.mt.sel = -1; S.mt.err = -1; } else S.mt.err = n; };
TOQUES.cs = function (b, n, v) { S.cs[n] = v; };
TOQUES.st = function (b, n, v) { S.sem.estrelas[n] = +v; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'This or that? Two scenes on the sofa.',
  a: { t: 'Who feels it', falas: [['Ana', 'Are you OK? You’re so quiet.'], ['Tom', 'I’m <mark>bored</mark>. I’m also tired.']], d: 'Tom is the person who feels it. That is <b>-ed</b>.' },
  b: { t: 'What causes it', falas: [['Ana', 'Why are you so quiet?'], ['Tom', 'The film is <mark>boring</mark>. It’s too long.']], d: 'The film is the thing that causes it. That is <b>-ing</b>.' },
  pergunta: 'Same word, two endings. What is different in the situation?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'Ana: “How was the trip?” Tom:', o: ['It was tiring.', 'It was tired.'], c: 0, d: 'The trip makes you tired: -ing.' },
    { p: 'Tom just watched a scary movie. He says:', o: ['I’m frightened.', 'I’m frightening.'], c: 0, d: 'Tom feels it: -ed.' },
    { p: 'Ana got a big present. She says:', o: ['I’m so surprised!', 'I’m so surprising!'], c: 0, d: 'She feels it: -ed.' },
    { p: 'Tom tells a long story. Ana says:', o: ['That’s so interesting!', 'That’s so interested!'], c: 0, d: 'The story causes it: -ing.' }
  ],
  nota: 'Look at who it is. The person who feels it: <b>-ed</b> (I’m bored). The thing that causes it: <b>-ing</b> (the film is boring). The verb be never changes.',
  uso: { p: 'Your turn. One thing from your week, and how you felt about it.', molde: ['The … was …ing.', 'I was …ed.'], ex: 'The meeting was boring, so I was really tired.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_isso', GX_EXPLICA); };
