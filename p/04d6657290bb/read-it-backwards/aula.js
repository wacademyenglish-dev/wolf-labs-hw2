/* ============================================================
   READ IT BACKWARDS · THE READING LAMP · LIVE CLASS  06/10/2026
   Main series C1 · sintagmas nominais complexos: o núcleo (head) é a
   ÚLTIMA palavra; ler de trás para a frente; a ordem dos modificadores
   (opinion · size · age · shape · color · origin · material · purpose);
   o hífen e o número no singular dentro da pilha (a two-year-old car);
   e saber parar (pilha longa demais).
   Erros: modificador depois do núcleo (a bag of leather brown); ordem
   trocada (a cooking cast-iron pot, a French old clock); a two-years-old
   car; ler da esquerda para a direita.
   O MUNDO (da aula velha): a oficina de um pai doada a um museu pequeno;
   cada objeto precisa de etiqueta; depois, uma loja online. Sem áudio,
   sem vídeo. As três fotos da pasta mantidas (bancada, bandeja, plaina);
   IMAGENS.md lido: nenhuma homenagem.
   A CARA (nova; a velha eram rótulos de laboratório): a LÂMPADA DE
   LEITURA — as palavras num trilho de madeira; a lâmpada acende o núcleo
   primeiro e anda para a esquerda, e embaixo a frase se desmonta em
   degraus (a driver → a delivery driver → …); o ARMÁRIO DE GAVETAS com
   oito gavetas rotuladas (OPINION … PURPOSE) + a do núcleo, onde cada
   modificador cai no seu lugar.
   Fila: FILA-LIVE-386.md · 145. Pasta piloto-backwards (conferida: não existia).
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre "two-year-old / two-years-old / two years
   old". IV = a carta da curadora: tocar o núcleo de cada frase e completar
   a regra (FM.carta). V = reescrever com o número dentro, falar + Check,
   a placa no canto (FM.pergunta). VII (extra) = o cliente pergunta, uma
   palavra errada em cada etiqueta (FM.erro) e um minuto para vender o seu
   objeto (FM.cronometro). I, II, III, VI e VIII ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'bancada' },
  { k: 'abre', est: 'o', min: 7, img: 'bandeja', rot: 'I · An Object of Yours', t: 'Pick an object you use every day.', p: 'Tap it. Then describe it out loud.' },
  { k: 'cabeca', est: 'f', min: 6, img: 'bandeja', rot: 'II · Find the Head', t: 'The phrase is about its LAST word. Find it, then read backwards.', p: 'Tap the head. Watch the lamp move left. Then choose what it means.' },
  { k: 'ordem', est: 'f', min: 6, img: 'bancada', rot: 'III · The Drawers', t: 'Opinion · size · age · shape · color · origin · material · purpose.', p: 'Tap the modifiers in order, left to right. Each one drops into its drawer. Say the label.' },
  { k: 'regra', est: 'f', min: 6, img: 'bancada', rot: 'IV · The Rule', t: 'English builds to the LEFT of the noun, and joins with nothing.', p: 'Read the curator’s letter out loud. Tap the head of each phrase. Then finish the rule.' },
  { k: 'hifen', est: 'f', min: 6, img: 'bandeja', rot: 'V · The Hyphen', t: 'The car is two years old. It is a two-year-old car.', p: 'Read each sentence. Say the phrase before the noun. Then tap Check.' },
  { k: 'longe', est: 'f', min: 6, img: 'plaina', rot: 'VI · Too Far', t: 'Every stack here is grammatical. Some went too far.', p: 'Read it out loud. READABLE or TOO FAR? For each TOO FAR, break it with OF or FOR.' },
  { k: 'venda', est: 'o', min: 7, extra: 1, img: 'plaina', rot: 'VII · Sell It', t: 'You run a small online shop. The teacher is the customer.', p: 'Read what the customer says. Each label has one mistake: say the right one. Then sell your own object.' },
  { k: 'fim', est: 'w', min: 6, img: 'bancada', rot: 'VIII · Your Label', t: 'Your object from scene I, as a museum label.', p: 'One great label, then unpack it backwards. It goes to your My notes.' }
];

var OBJ = ['a bag', 'a mug', 'a lamp', 'a jacket', 'a phone case', 'a notebook'];
var ABRE = [
  { q: 'What is it made of, and what color is it?', fup: 'Is it new or old?', st: ['It’s made of …'], ex: 'It’s made of brown leather.' },
  { q: 'How old is it, and where is it from?', fup: 'Who gave it to you?', st: ['It’s about … years old.'], ex: 'It’s about three years old, from Italy.' },
  { q: 'Now describe it in one phrase of about ten words, all before the noun.', fup: 'Read it again. Is the noun last?', st: ['a … bag'], ex: 'a beautiful three-year-old brown Italian leather work bag' }
];

/* o núcleo é o último; des = os degraus do desmonte, da direita para a esquerda */
var CAB = [
  { pal: ['a', 'worn', 'late-Victorian', 'rosewood', 'smoothing', 'plane'], ops: ['an old wooden plane, from about 1890, worn from use, for smoothing wood', 'a worn Victorian house made of rosewood', 'a plane that flies very smoothly'] },
  { pal: ['a', 'self-employed', 'part-time', 'delivery', 'driver'], ops: ['a driver who delivers things, works part time and works for himself', 'a delivery that a driver does part time', 'a part of a delivery for a driver'] },
  { pal: ['a', 'badly written', 'three-page', 'internal', 'memo'], ops: ['a memo for people inside the company, three pages long, badly written', 'three memos that were written badly', 'a page of a memo about writing'] },
  { pal: ['a', 'pair', 'of', 'small', 'round', 'wire-framed', 'reading', 'glasses'], ops: ['small round glasses with thin metal frames, for reading', 'large square sunglasses', 'a round metal frame for a picture'], cab: 7 },
  { pal: ['a', 'cheap', 'second-hand', 'office', 'chair'], ops: ['a chair for an office, used before, and cheap', 'an office that sells cheap chairs', 'a second office with a cheap chair'] },
  { pal: ['the', 'city', 'budget', 'reduction', 'timetable'], ops: ['a timetable for reducing the city’s budget', 'a city with a cheap budget', 'a reduction in the city’s timetable'] }
];

var GAV = ['OPINION', 'SIZE', 'AGE', 'SHAPE', 'COLOR', 'ORIGIN', 'MATERIAL', 'PURPOSE'];
/* g = gaveta de cada peça, na ordem certa */
var ORD = [
  { pecas: ['beautiful', 'small', 'brass'], g: [0, 1, 6], n: 'compass' },
  { pecas: ['worn', 'round', 'wooden'], g: [0, 3, 6], n: 'handle' },
  { pecas: ['lovely', 'little', 'old', 'French'], g: [0, 1, 2, 5], n: 'clock' },
  { pecas: ['heavy', 'black', 'cast-iron', 'cooking'], g: [0, 4, 6, 7], n: 'pot' },
  { pecas: ['strange', 'tall', 'narrow', 'green', 'glass'], g: [0, 1, 3, 4, 6], n: 'bottle' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
var PRESA_RB = 'the head is <b>last</b> · read it <b>backwards</b><br>opinion · size · age · shape · color · origin · material · <b>purpose</b><br>a two-<b>year</b>-old car · no S inside<br>stop before the reader gets lost';
/* IV · a carta da curadora (texto do museu) → a regra */
var CARTA_RB = { de: 'The curator · Small Tools Museum',
  txt: 'Dear volunteers, today we label the workshop. The first object is a worn late-Victorian rosewood smoothing [[plane]]. The second is a heavy black cast-iron cooking [[pot]]. The third is a lovely little brass desk [[clock]]. Please write each label so that a visitor can read it in one go.',
  assina: 'The curator' };
var REGRA_RB = [
  { a: 'The head of the phrase is the ', par: ['last', 'first'], c: 0, b: ' word.' },
  { a: 'To understand a long phrase, read it ', par: ['backwards', 'forwards'], c: 0, b: '.' },
  { a: 'What it is FOR goes ', par: ['right before the noun', 'at the start'], c: 0, b: ': a cast-iron cooking pot.' },
  { a: 'Inside the stack: a two-', par: ['year', 'years'], c: 0, b: '-old car. No S, and a hyphen.' }
];

/* V · reescrever com o número dentro (FM.pergunta: falar, montar, Check) */
var HIF_P = [
  { p: 'The car is two years old. → a … car', r: 'a <b>two-year-old</b> car' },
  { p: 'The memo has three pages. → a … memo', r: 'a <b>three-page</b> memo' },
  { p: 'The walk takes ten minutes. → a … walk', r: 'a <b>ten-minute</b> walk' },
  { p: 'The writer is well known. → a … writer', r: 'a <b>well-known</b> writer' },
  { p: 'The hotel has five stars. → a … hotel', r: 'a <b>five-star</b> hotel' }
];

var LONGE = [['a small wooden writing box', 'ok'], ['the city budget reduction implementation timetable review meeting', 'longe'], ['a part-time delivery driver', 'ok'], ['a new customer online account password reset request form', 'longe'], ['a cheap second-hand office chair', 'ok']];

/* VII · o cliente pergunta; uma palavra errada em cada etiqueta (FM.erro) */
var VENDA_ERRO = [
  { f: '<small class="rb-cli">Customer: “I need a gift for my dad. He likes old tools.”</small>This is a <u>smoothing rosewood Victorian beautiful</u> plane.', r: 'beautiful Victorian rosewood smoothing' },
  { f: '<small class="rb-cli">Customer: “Do you have something for the kitchen?”</small>We have a <u>cooking cast-iron black heavy</u> pot.', r: 'heavy black cast-iron cooking' },
  { f: '<small class="rb-cli">Customer: “Something small for my desk?”</small>Try this <u>brass little lovely</u> desk clock.', r: 'lovely little brass' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { obj: '', n: 0, foi: {} }, cb: { n: 0, cab: 0, erro: -1, esc: -1 }, or: { n: 0, seq: [], erro: '' }, hf: { n: 0, esc: -1 }, lg: {}, ve: { n: 0, esc: -1 } };

/* a lâmpada de leitura: acende o núcleo e anda para a esquerda */
function lampada(pal, cab, aceso) {
  var trilho = pal.map(function (p, i) {
    var cls = 'rb-pal' + (i === cab ? ' nucleo' : '') + (aceso && i <= cab && i > 0 ? ' luz' : '') + (aceso && i > cab ? ' resto' : '');
    return '<span class="' + cls + '" style="animation-delay:' + (aceso ? (cab - i) * .18 : 0) + 's">' + p + '</span>';
  }).join('');
  var degraus = '';
  if (aceso) {
    var d = [];
    for (var i = cab; i >= 1; i--) d.push(pal.slice(i, cab + 1).join(' '));
    degraus = '<ol class="rb-degraus">' + d.map(function (x, j) { return '<li style="animation-delay:' + (j * .18 + .2) + 's">' + (j === 0 ? '<b>' + x + '</b>' : x) + '</li>'; }).join('') + '</ol>';
  }
  return '<div class="rb-trilho vd"><div class="rb-lampada' + (aceso ? ' on' : '') + '"><i></i><small>' + (aceso ? '◀ READING BACKWARDS' : 'FIND THE HEAD') + '</small></div><div class="rb-palavras">' + trilho + '</div>' + degraus + '</div>';
}
/* o armário de gavetas */
function armario(x, seq) {
  var cheias = {}; seq.forEach(function (k) { cheias[x.g[k]] = x.pecas[k]; });
  var fim = seq.length === x.pecas.length;
  return '<div class="rb-armario vd">' + GAV.map(function (g, i) {
    var usada = x.g.indexOf(i) >= 0;
    return '<div class="rb-gaveta' + (cheias[i] ? ' cheia' : usada ? ' espera' : ' vazia') + '"><small>' + g + '</small><b>' + (cheias[i] || '') + '</b></div>';
  }).join('') + '<div class="rb-gaveta nucleo' + (fim ? ' acesa' : '') + '"><small>HEAD</small><b>' + x.n + '</b></div></div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="rb-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · COMPLEX NOUN PHRASES</span><h1>Read It <b>Backwards</b></h1>'
    + '<p class="sub"><b>A worn late-Victorian rosewood smoothing plane.</b> Six words before you find out what it is. English builds to the left: find the last word, then walk back.</p>'
    + '<div class="chipsx"><span class="pilula">the head is last</span><span class="pilula">a two-year-old car</span><span class="pilula">know where to stop</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the collection</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + lampada(CAB[0].pal, 5, 1) + '</div></div>';
};

R.abre = function (c) {
  var e = S.ab;
  var chips = '<div class="rb-objs">' + OBJ.map(function (t) { return '<button type="button" class="pilula' + (e.obj === t ? ' on' : '') + '" data-a="ab-o" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.obj) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Tap an object you use every day.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ABRE, e, 'ab', 'Keep your phrase. At the end it becomes a proper museum label.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write down the ten-word phrase exactly. Modifiers after the noun, wrong order: don’t correct yet.</p>';
};

R.cabeca = function (c) {
  var e = S.cb, n = e.n, fim = n >= CAB.length;
  if (fim) return cab(c) + trilha(CAB, n) + '<div class="foco"><div class="pergunta vd"><small>SIX HEADS</small><h2>Each one was waiting at the end. Now your phrase from scene I: where is its head?</h2></div></div>';
  var x = CAB[n], certo = x.cab || x.pal.length - 1, achou = e.cab === 1, ok = e.esc === 0;
  var botoes = '<div class="rb-toque">' + x.pal.map(function (p, i) { return i === 0 ? '' : '<button type="button" class="pilula' + (achou && i === certo ? ' certo' : e.erro === i ? ' errado' : '') + '" data-a="cb-t" data-n="' + i + '">' + p + '</button>'; }).join('') + '</div>';
  return cab(c) + trilha(CAB, n) + lampada(x.pal, certo, achou)
    + (achou ? '<p class="rb-rot">WHAT IS IT, EXACTLY? SAY IT, THEN CHOOSE</p>' + tres('cb', x.ops, e.esc, n + 2, 'linha')
      + (ok ? '<div class="rb-linha-ok centro"><p class="aprova">Read backwards, it made sense. Say the whole label again, slowly.</p><button type="button" class="btn" data-a="cb-prox">Next label</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">The last word is the thing. Everything before it describes it.</p>' : '')
      : '<p class="rb-rot" style="text-align:center">TAP THE WORD THE PHRASE IS ABOUT</p>' + botoes + (e.erro >= 0 ? '<p class="recusa" style="text-align:center">Not that one. The head is the word the phrase is about, and it is always the last.</p>' : ''));
};

R.ordem = function (c) {
  var e = S.or, n = e.n, fim = n >= ORD.length;
  if (fim) return cab(c) + trilha(ORD, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE LABELS</small><h2>The list explains your ear; it doesn’t replace it. Say one of them in the wrong order and hear it.</h2></div></div>';
  var x = ORD[n], pronto = e.seq.length === x.pecas.length;
  var resto = ordem(x.pecas.map(function (p, i) { return [p, i]; }), n + 3).filter(function (p) { return e.seq.indexOf(p[1]) < 0; });
  return cab(c) + trilha(ORD, n) + armario(x, e.seq)
    + (pronto ? '<div class="rb-linha-ok centro"><p class="aprova">a ' + x.pecas.join(' ') + ' <b>' + x.n + '</b>. Say it. Then say it in the wrong order and hear the difference.</p><button type="button" class="btn" data-a="or-prox">Next label</button></div>'
      : '<div class="rb-pecas">' + resto.map(function (p) { return '<button type="button" class="pilula' + (e.erro === p[0] ? ' errado' : '') + '" data-a="or-t" data-n="' + p[1] + '">' + p[0] + '</button>'; }).join('') + '</div>'
      + (e.erro ? '<p class="recusa" style="text-align:center">Say both orders out loud: your ear will know. Opinion goes first; purpose goes right next to the noun.</p>' : '<p class="dica-aluno" style="text-align:center">Which word comes first, on the left?</p>'));
};

R.regra = function (c) {
  return cab(c) + '<div class="rb-faixa vd">' + GAV.map(function (g) { return '<span>' + g + '</span>'; }).join('<i>›</i>') + '<i>›</i><b>HEAD</b></div>'
    + FM.carta('rg', CARTA_RB, REGRA_RB, { toque: 'Tap the head of each phrase', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.hifen = function (c) {
  return cab(c) + FM.ex('hf', { formato: 'pergunta', titulo: 'Put the number inside. Say the phrase. Tap Check.', itens: HIF_P, regra: PRESA_RB, depoisRot: 'Then say three about your week', depois: ['a …-hour trip', 'a …-year plan', 'a …-page report'] });
};

R.longe = function (c) {
  var e = S.lg, todos = LONGE.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="rb-lista">' + LONGE.map(function (x, i) {
    var foi = e[i], ok = foi === x[1], palavras = x[0].split(' ').length;
    return '<div class="rb-tf vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><div><span>' + x[0] + '</span><small class="rb-conta' + (palavras > 6 ? ' muito' : '') + '">' + palavras + ' WORDS</small></div><div class="rb-fs">' + [['ok', 'READABLE'], ['longe', 'TOO FAR']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="lg" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Three readable, two too far. Now break the long ones with OF or FOR: a meeting to review the timetable for …</p>' : '<p class="dica-aluno" style="text-align:center">Could a tired reader follow it in one go?</p>');
};

R.venda = function (c) {
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('ve', { formato: 'erro', titulo: 'The customer asks. Each label has one mistake. Say the right one.', itens: VENDA_ERRO })
    + FM.ex('vt', { formato: 'cronometro', titulo: 'Now sell your own object from scene I', texto: 'One great label. Then the customer asks: “What exactly is it?” Unpack it backwards.', segundos: 60 }) + '</div>' + FM.regra(PRESA_RB) + '</div>';
};

R.fim = function (c) {
  var o = S.ab.obj || 'a bag';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, o.replace(/^an? /, 'a … ') + '\nUnpacked: …', 'Your label',
    ['opinion', 'size', 'age', 'color', 'origin', 'material', 'purpose', '-year-old'], ['YOUR LABEL', 'Your object from scene I as one museum label. Then unpack it backwards.'])
    + '<div class="lado-fim">' + lampada(['a', 'heavy', 'black', 'cast-iron', 'cooking', 'pot'], 5, 1)
    + '<div class="grande vd"><span><u>the head is last</u> · read backwards</span><span><u>opinion · size · age · shape · color · origin · material · purpose</u></span><span><u>a two-year-old car</u> · hyphen, singular inside</span><span>not <s>a bag of leather brown</s>, not <s>a cooking cast-iron pot</s>; and stop before the reader gets lost</span></div>'
    + mostra('fim', 'a beautiful three-year-old brown Italian leather work bag<br>Unpacked: a bag for work, made of leather, from Italy, brown, three years old, and beautiful.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-o'] = function (b, n, v) { S.ab.obj = v; };
TOQUES['cb-t'] = function (b, n) { var x = CAB[S.cb.n], certo = x.cab || x.pal.length - 1; if (n === certo) { S.cb.cab = 1; S.cb.erro = -1; } else S.cb.erro = n; };
TOQUES.cb = function (b, n) { S.cb.esc = n; };
TOQUES['cb-prox'] = function () { S.cb = { n: S.cb.n + 1, cab: 0, erro: -1, esc: -1 }; };
TOQUES['or-t'] = function (b, n) { var e = S.or, x = ORD[e.n]; if (n === e.seq.length) { e.seq.push(n); e.erro = ''; } else e.erro = x.pecas[n]; };
TOQUES['or-prox'] = function () { S.or = { n: S.or.n + 1, seq: [], erro: '' }; };
TOQUES.lg = function (b, n, v) { S.lg[n] = v; };
