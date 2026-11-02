/* ============================================================
   PAGE THIRTY-FOUR · THE NIGHT SHELF · LIVE CLASS  06/10/2026
   Main series B1 · I'd rather + verbo + than + verbo (sem TO) ·
   I prefer + -ing + to + -ing / I prefer to + verbo · I'd rather not
   é uma resposta inteira · Would you rather A or B? Erros: "I'd rather
   to read", "I prefer read", "prefer … than", "rather … to".
   O MUNDO (da aula velha): seis livros numa estante, cinco com o
   marcador parado perto do começo; cinco foram escolhidos PARA os
   leitores (lista, chefe, site, amigo, prêmio); o sexto, o único
   terminado, o leitor escolheu sozinho. Cinco gravações mantidas
   (s1–s5), conferidas no faster-whisper em 06/10: batem.
   A CARA: a ESTANTE À NOITE — seis lombadas em tons escuros sob uma
   luminária; cada marcador é uma fita que sai da lombada na altura da
   página onde o leitor parou; o sexto livro não tem fita. A estante
   clara da aula velha saiu. Fila: FILA-LIVE-386.md · 095.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'estante' },
  { k: 'lombadas', est: 'o', min: 7, img: 'estante', rot: 'I · Six Spines', t: 'Six books, no titles. Only the color and the kind of book.', p: 'Two books light up. Say which you’d rather read, with THAN. Then give one reason.' },
  { k: 'pagina', est: 'o', min: 7, img: 'marcador', rot: 'II · Page Thirty-Four', t: 'Every one of these books was started. How far did each reader get?', p: 'Guess out loud. Tap. Then answer the question underneath.' },
  { k: 'emvez', est: 'l', min: 7, img: 'cabeceira', rot: 'III · Instead', t: 'Behind every bookmark there’s a night. Listen to each reader.', p: 'Play the recording. Choose what they’d rather do. Say the whole sentence.' },
  { k: 'ponte', est: 'f', min: 6, img: 'estante', rot: 'IV · To or Than', t: 'PREFER takes TO. RATHER takes THAN.', p: 'Choose the word that finishes the sentence. Then say the whole thing.' },
  { k: 'quem', est: 'l', min: 7, img: 'estante', rot: 'V · Who Chose It', t: 'Who put each book in that person’s hands?', p: 'Listen again if you need to. Choose who chose it. At the end: what do the five have in common?' },
  { k: 'sexto', est: 'f', min: 6, extra: 1, img: 'ultima', rot: 'VI · The Sixth Book', t: 'The dark green one. Travel writing. 302 pages.', p: 'Five short questions.' },
  { k: 'nao', est: 'o', min: 7, extra: 1, img: 'vazia', rot: 'VII · Not Tonight', t: 'Four people offer you something. You don’t owe anybody a reason.', p: 'Read the offer. Answer out loud with one sentence. Then tap it.' },
  { k: 'clube', est: 'o', min: 7, extra: 1, img: 'vazia', rot: 'VIII · The Book Club', t: 'You start a book club with your teacher. What kind of reader are they?', p: 'Ask the question. Your teacher answers. Then answer it yourself, with RATHER, then with PREFER.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'estante', rot: 'IX · No To After Rather', t: 'Rather never takes TO. Prefer does.', p: 'Five sentences have a problem. One is right. Choose the fix.' },
  { k: 'fim', est: 'w', min: 6, img: 'estante', rot: 'X · Your Shelf', t: 'Your picks from scene I come back.', p: 'Write about your own shelf: what you’d rather read, what you prefer, and one book you’d rather not. It goes to your My notes.' }
];

var TR = {
  's1.mp3': 'It was on the reading list, so I started it. On the fourth night, I watched the whole series again instead. I never opened it after that.',
  's2.mp3': 'My manager put it in my hand and told me it changed his life. I read it on the train for two weeks. Then I started sleeping on the train.',
  's3.mp3': 'It was number one on a list of a hundred books. Twelve pages in, my sister called, and we talked for an hour. That was in March.',
  's4.mp3': 'My friend would not stop talking about it, so I promised him I would read it. I got quite far. Then football started again on Thursdays.',
  's5.mp3': 'Somebody gave it to me because it won a prize. I read five pages, and then I cooked dinner. I have cooked dinner every night since.'
};

var LIVROS = {
  green: { nome: 'the green one', g: 'science fiction', cor: '#4f5c34', fita: '#c9a24a', alt: 78, pg: 210, marca: 34 },
  cream: { nome: 'the sand one', g: 'a love story', cor: '#54493a', fita: '#b85a5a', alt: 92, pg: 480, marca: 61 },
  gray: { nome: 'the gray one', g: 'true crime', cor: '#4a4f57', fita: '#d08a3a', alt: 84, pg: 190, marca: 12 },
  pale: { nome: 'the pale green one', g: 'history', cor: '#4e6159', fita: '#9a7ad0', alt: 80, pg: 240, marca: 88 },
  orange: { nome: 'the orange one', g: 'poetry', cor: '#7a4318', fita: '#d9c27a', alt: 86, pg: 350, marca: 5 },
  dark: { nome: 'the dark green one', g: 'travel', cor: '#24382c', fita: '', alt: 90, pg: 302, marca: 0 }
};
var ORDEM = ['green', 'cream', 'gray', 'pale', 'orange', 'dark'];

var PARES = [['green', 'gray'], ['cream', 'orange'], ['dark', 'gray'], ['pale', 'green'], ['orange', 'pale']];

var PAGINA = [
  { k: 'green', q: 'The green one: science fiction. 210 pages.', op: ['page 34', 'page 120', 'page 190', 'she finished it'], a: 0, w: 'Page 34 of 210. She stopped on the fourth night.', fala: 'What’s the last book you started? How far did you get?' },
  { k: 'cream', q: 'The sand one: a love story. 480 pages.', op: ['page 61', 'page 240', 'page 400', 'he finished it'], a: 0, w: 'Page 61 of 480. Two weeks on the train, and then nothing.', fala: 'Where do you read, when you read?' },
  { k: 'gray', q: 'The gray one: true crime. 190 pages.', op: ['page 12', 'page 95', 'page 150', 'she finished it'], a: 0, w: 'Page 12 of 190. One phone call, and the book never came back.', fala: 'What most often takes you away from a book?' },
  { k: 'pale', q: 'The pale green one: history. 240 pages.', op: ['page 5', 'page 88', 'page 200', 'he finished it'], a: 1, w: 'Page 88 of 240. The furthest on the shelf, and he still stopped.', fala: 'Have you ever stopped a book more than halfway?' },
  { k: 'orange', q: 'The orange one: poetry. 350 pages.', op: ['page 5', 'page 60', 'page 175', 'she finished it'], a: 0, w: 'Page 5 of 350. Five pages, and then dinner.', fala: 'Five pages a night, forever: is that a failure?' }
];

var EMVEZ = [
  { k: 'green', au: 's1.mp3', p: 'She', ops: ['watch the series', 'go to the movies', 'sleep'] },
  { k: 'cream', au: 's2.mp3', p: 'He', ops: ['sleep', 'read the news', 'call his manager'] },
  { k: 'gray', au: 's3.mp3', p: 'She', ops: ['talk to her sister', 'watch TV', 'go for a walk'] },
  { k: 'pale', au: 's4.mp3', p: 'He', ops: ['play football', 'cook dinner', 'talk to his friend'] },
  { k: 'orange', au: 's5.mp3', p: 'She', ops: ['cook dinner', 'win a prize', 'write poems'] }
];

var PONTE = [
  { esq: 'I prefer reading', dir: 'scrolling.', a: 'to' }, { esq: 'I’d rather read', dir: 'scroll.', a: 'than' },
  { esq: 'She prefers paper', dir: 'screens.', a: 'to' }, { esq: 'She’d rather hold paper', dir: 'hold a phone.', a: 'than' },
  { esq: 'We prefer walking', dir: 'driving.', a: 'to' }, { esq: 'We’d rather walk', dir: 'drive.', a: 'than' },
  { esq: 'They prefer reading at night', dir: 'reading in the morning.', a: 'to' }, { esq: 'They’d rather read at night', dir: 'in the morning.', a: 'than' }
];

var QUEM = [
  { k: 'green', au: 's1.mp3', ops: ['a school reading list', 'a friend', 'a prize'] },
  { k: 'cream', au: 's2.mp3', ops: ['his manager', 'his sister', 'a list online'] },
  { k: 'gray', au: 's3.mp3', ops: ['a list of a hundred books', 'her manager', 'she did'] },
  { k: 'pale', au: 's4.mp3', ops: ['a friend who wouldn’t stop talking', 'a reading list', 'a shop'] },
  { k: 'orange', au: 's5.mp3', ops: ['a prize, and somebody who bought it', 'her manager', 'she did'] }
];

var SEXTO = [
  { q: 'Look at the shelf. What’s different about the sixth book?', ops: ['it has no bookmark', 'it’s thicker', 'it’s a different color'], w: 'No bookmark. There hasn’t been one since the start.' },
  { q: '302 pages. How far did he get?', ops: ['page 302', 'page 88', 'page 200'], w: 'All of it.' },
  { q: 'Who chose it?', ops: ['he did', 'a friend', 'a list'], w: 'He saw it in a shop and bought it.' },
  { q: 'He’d rather read that one ___ any book on the list.', ops: ['than', 'to', 'that'], w: 'He’d rather read that one THAN any book on the list.' },
  { q: 'Five books were chosen ___ their readers.', ops: ['for', 'by', 'to'], w: 'Chosen FOR them. One he chose himself: the only one with a last page.' }
];

var OFERTAS = ['You have to read this one. Everybody has.', 'Can I put you on the list for the book club? It’s every Tuesday.', 'Do you want to tell everybody what you thought of it?', 'You stopped at page thirty-four. Do you want to explain why?'];

var CLUBE = [
  { a: 'read at night', b: 'read in the morning', ia: 'reading at night', ib: 'reading in the morning' },
  { a: 'read on paper', b: 'read on a screen', ia: 'reading on paper', ib: 'reading on a screen' },
  { a: 'finish a bad book', b: 'stop at page thirty', ia: 'finishing a bad book', ib: 'stopping at page thirty' },
  { a: 'read one book slowly', b: 'read three books at once', ia: 'reading one book slowly', ib: 'reading three books at once' },
  { a: 'be given a book', b: 'find one yourself', ia: 'being given a book', ib: 'finding one yourself' },
  { a: 'read in silence', b: 'read with music', ia: 'reading in silence', ib: 'reading with music' }
];

var ERROS = [
  { f: 'I’d rather <s>to read</s>.', ops: ['read', 'reading', 'to reading'], w: 'I’d rather read.' },
  { f: 'I prefer <s>read</s> at night.', ops: ['to read / reading', 'read to', 'than read'], w: 'I prefer to read, or I prefer reading.' },
  { f: 'I prefer reading <s>than</s> scrolling.', ops: ['to', 'that', 'of'], w: 'Prefer… TO.' },
  { f: 'I’d rather walk <s>to</s> drive.', ops: ['than', 'of', 'from'], w: 'Rather… THAN.' },
  { f: 'Would you rather <s>to stay</s> or go?', ops: ['stay', 'staying', 'to staying'], w: 'Would you rather stay or go?' },
  { f: 'I prefer to read on paper.', ops: ['Nothing: it’s right', 'prefer read', 'rather to read'], w: 'Five problems and one good sentence.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  lb: { n: 0, esc: {} }, pg: { n: 0, esc: -1 }, ev: { n: 0, esc: -1 }, pt: { n: 0, esc: '' }, qm: { n: 0, esc: -1 }, sx: { n: 0, esc: -1 }, no: { n: 0 }, cl: { n: 0 }, er: { n: 0, esc: -1 } };

/* a estante: luz = lista de chaves acesas; marcas = mostra as fitas */
function estante(luz, marcas, sel, mini) {
  var x = 20, s = '<svg class="estante' + (mini ? ' mini' : '') + '" viewBox="0 0 420 260" role="img" aria-label="The shelf"><defs><radialGradient id="lum" cx="50%" cy="0%" r="80%"><stop offset="0" stop-color="#e8b86a" stop-opacity=".22"/><stop offset="1" stop-color="#e8b86a" stop-opacity="0"/></radialGradient></defs>'
    + '<rect class="fundo-e" x="0" y="0" width="420" height="260" rx="14"/><rect x="0" y="0" width="420" height="260" rx="14" fill="url(#lum)"/>';
  ORDEM.forEach(function (k) {
    var b = LIVROS[k], w = k === 'cream' ? 70 : k === 'dark' ? 60 : 54, h = b.alt * 2.1, y = 226 - h, on = !luz || luz.indexOf(k) >= 0;
    s += '<g class="livro' + (on ? '' : ' apagado') + (sel === k ? ' sel' : '') + '"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="4" fill="' + b.cor + '"/><rect x="' + (x + 6) + '" y="' + (y + 16) + '" width="' + (w - 12) + '" height="3" fill="rgba(255,240,210,.18)"/><rect x="' + (x + 6) + '" y="' + (y + h - 22) + '" width="' + (w - 12) + '" height="3" fill="rgba(255,240,210,.18)"/>';
    if (marcas && b.marca) { var fy = y + 6 + (1 - b.marca / b.pg) * 0; s += '<path class="fita" d="M' + (x + w / 2 - 5) + ' ' + y + ' v-' + (8 + Math.round(b.marca / b.pg * 60)) + ' h10 v' + (8 + Math.round(b.marca / b.pg * 60)) + '" fill="' + b.fita + '"/>'; }
    s += '</g>'; x += w + 10;
  });
  return s + '<rect class="tabua-e" x="8" y="226" width="404" height="14" rx="3"/></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE NIGHT SHELF</span><h1>Page <b>Thirty-Four</b></h1>'
    + '<p class="sub">I’d rather read <b>than</b> scroll. I prefer reading <b>to</b> scrolling. Two roads, two little words, and six books with a story.</p>'
    + '<div class="chipsx"><span class="pilula">I’d rather … than …</span><span class="pilula">I prefer … to …</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Pick a spine</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + estante(null, 1) + '</div></div>';
};

R.lombadas = function (c) {
  var e = S.lb, n = e.n, fim = n >= PARES.length;
  var escolhas = Object.keys(e.esc).map(function (i) { var p = PARES[i], a = e.esc[i], b = p[0] === a ? p[1] : p[0]; return '<span class="esc-l">I’d rather read <b>' + LIVROS[a].g + '</b> than <b>' + LIVROS[b].g + '</b>.</span>'; }).join('');
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + estante(null, 0) + '</div><div class="lado-l"><div class="pergunta vd"><small>FIVE CHOICES</small><h2>No titles, and you still had favorites. Now say two of them with PREFER.</h2></div><div class="esc-lista">' + escolhas + '</div></div></div>';
  var p = PARES[n], esc = e.esc[n];
  return cab(c) + trilha(PARES, n) + '<div class="mesa-c"><div class="lado-l centro">' + estante(p, 0, esc) + '</div><div class="lado-l"><h5 class="rot-ouve">WHICH WOULD YOU RATHER READ?</h5><div class="dois-l">'
    + p.map(function (k) { return '<button type="button" class="lombada-b' + (esc === k ? ' on' : '') + '" data-a="lb" data-v="' + k + '"><i style="background:' + LIVROS[k].cor + '"></i><b>' + LIVROS[k].g + '</b><small>' + LIVROS[k].nome + '</small></button>'; }).join('') + '</div>'
    + (esc ? '<div class="balao vd ok-b"><p>I’d rather read <u>' + LIVROS[esc].g + '</u> than ' + LIVROS[p[0] === esc ? p[1] : p[0]].g + '.</p></div>' + fala('lb' + n, ['… because …'], ['I’d rather', 'than', 'because']) + '<div><button type="button" class="btn" data-a="lb-prox">Next pair</button></div>' : '<p class="dica-aluno">Say it first: “I’d rather read … than …”</p>') + '</div></div>';
};

R.pagina = function (c) {
  var e = S.pg, n = e.n, fim = n >= PAGINA.length;
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + estante(null, 1) + '</div><div class="lado-l"><div class="pergunta vd"><small>FIVE BOOKMARKS</small><h2>34 of 210. 12 of 190. 5 of 350. Nobody got close to the end. And none of the bookmarks ever moved again.</h2></div>' + fala('pg', ['Right now, I have … books open.', 'The last book I finished was …'], ['started', 'stopped', 'finished']) + '</div></div>';
  var x = PAGINA[n], ok = e.esc === x.a;
  return cab(c) + trilha(PAGINA, n) + '<div class="mesa-c"><div class="lado-l centro">' + estante([x.k], ok, x.k) + '</div><div class="lado-l"><div class="pede vd"><small>GUESS</small><b>' + x.q + '</b></div><div class="tres-b">'
    + x.op.map(function (o, i) { return '<button type="button" class="pilula grande-p' + (e.esc === i ? (i === x.a ? ' certo' : ' errado') : '') + '" data-a="pg" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (e.esc >= 0 ? '<p class="' + (ok ? 'aprova' : 'recusa') + '">' + (ok ? '' : 'Not that far. ') + x.w + '</p>' + (ok ? '<div class="pergunta vd ja"><h2>' + x.fala + '</h2></div><div><button type="button" class="btn" data-a="pg-prox">Next book</button></div>' : '') : '') + '</div></div>';
};

R.emvez = function (c) {
  var e = S.ev, n = e.n, fim = n >= EMVEZ.length;
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('cabeceira') + ')"><span>THE NIGHTSTAND</span></div></div><div class="lado-l"><div class="pergunta vd"><small>FIVE NIGHTS</small><h2>Nobody hated their book. They just preferred something else that night. And you, last night?</h2></div>' + fala('ev', ['Last night I’d rather … than read.'], ['I’d rather', 'than', 'instead']) + '</div></div>';
  var x = EMVEZ[n], ok = e.esc === 0, ouviu = (S.ouviu || {})[x.au];
  return cab(c) + trilha(EMVEZ, n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>' + LIVROS[x.k].nome.toUpperCase() + ' · ' + LIVROS[x.k].g.toUpperCase() + '</small><div class="toca-linha">' + tocar(x.au) + '<b>THE READER</b></div>' + transcricao(x.au, TR[x.au]) + '</div></div>'
    + '<div class="lado-l"><h5 class="rot-ouve">' + x.p.toUpperCase() + '’D RATHER…</h5><div class="versoes">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 4).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="ev" data-n="' + o[1] + '"' + (ouviu ? '' : ' disabled') + '>' + o[0] + '</button>'; }).join('') + '</div>'
    + (!ouviu ? '<p class="dica-aluno">Listen first.</p>' : ok ? '<div class="balao vd ok-b"><p>' + x.p + '’d rather <u>' + x.ops[0] + '</u> than read.</p></div><div><button type="button" class="btn" data-a="ev-prox">Next reader</button></div>' : e.esc > 0 ? '<p class="recusa">Play it again. What did they do instead?</p>' : '') + '</div></div>';
};

R.ponte = function (c) {
  var e = S.pt, n = e.n, fim = n >= PONTE.length;
  if (fim) return cab(c) + trilha(PONTE, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT SENTENCES</small><h2>PREFER… TO. RATHER… THAN. Two roads, same meaning.</h2></div></div>';
  var x = PONTE[n], ok = e.esc === x.a;
  return cab(c) + trilha(PONTE, n) + '<div class="foco"><div class="ponte-f vd"><span class="esq">' + x.esq + '</span><span class="gap' + (ok ? ' ok' : '') + '">' + (ok ? x.a : '___') + '</span><span>' + x.dir + '</span></div><div class="tres-b centro">'
    + ['to', 'than'].map(function (w) { return '<button type="button" class="pilula grande-p' + (e.esc === w ? (ok ? ' certo' : ' errado') : '') + '" data-a="pt" data-v="' + w + '">' + w + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="pt-prox">Next</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Look at the first verb: PREFER or RATHER?</p>' : '') + '</div>';
};

R.quem = function (c) {
  var e = S.qm, n = e.n, fim = n >= QUEM.length;
  var feitos = QUEM.slice(0, n).map(function (q) { return '<span class="esc-l"><i style="background:' + LIVROS[q.k].cor + '"></i>' + LIVROS[q.k].g + ': <b>' + q.ops[0] + '</b></span>'; }).join('');
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="esc-lista">' + feitos + '</div></div><div class="lado-l"><div class="pergunta vd"><small>WHAT DO THE FIVE HAVE IN COMMON?</small><h2>A list, a manager, a website, a friend, a prize. Not one reader chose their own book.</h2></div><p class="so-prof dica-aluno">Ask the question first and wait. Let your student find it.</p></div></div>';
  var x = QUEM[n], ok = e.esc === 0;
  return cab(c) + trilha(QUEM, n) + '<div class="mesa-c"><div class="lado-l"><div class="esc-lista">' + feitos + '</div><div class="pede vd"><small>' + LIVROS[x.k].g.toUpperCase() + '</small><div class="toca-linha">' + tocar(x.au) + '<b>LISTEN AGAIN</b></div></div></div>'
    + '<div class="lado-l"><h5 class="rot-ouve">WHO CHOSE IT?</h5><div class="versoes">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 6).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qm" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div><button type="button" class="btn" data-a="qm-prox">Next book</button></div>' : e.esc > 0 ? '<p class="recusa">Listen again: who put the book in their hands?</p>' : '') + '</div></div>';
};

R.sexto = function (c) {
  var e = S.sx, n = e.n, fim = n >= SEXTO.length;
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + estante(['dark'], 1, 'dark') + '</div><div class="lado-l"><div class="pergunta vd"><small>302 OF 302</small><h2>The only book its reader chose. The only one with a last page.</h2></div></div></div>';
  var x = SEXTO[n], ok = e.esc === 0;
  return cab(c) + trilha(SEXTO, n) + '<div class="mesa-c"><div class="lado-l centro">' + estante(n === 0 ? null : ['dark'], 1, 'dark') + '</div><div class="lado-l"><div class="pergunta vd ja"><h2>' + x.q + '</h2></div><div class="tres-b">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="sx" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">' + x.w + '</p><div><button type="button" class="btn" data-a="sx-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa">Look at the shelf again.</p>' : '') + '</div></div>';
};

R.nao = function (c) {
  var e = S.no, n = Math.min(e.n, OFERTAS.length - 1);
  return cab(c) + trilha(OFERTAS, e.n) + '<div class="foco"><div class="balao vd"><small>OFFER ' + (n + 1) + ' OF 4</small><p>“' + OFERTAS[n] + '”</p></div>'
    + (e.n >= OFERTAS.length ? '<div class="pergunta vd"><small>A WHOLE ANSWER</small><h2>I’d rather not. When did you last say yes to something you’d rather not do?</h2></div>' : '<div style="text-align:center"><button type="button" class="pilula grande-p rather-not" data-a="no">I’d rather not.</button></div><p class="dica-aluno" style="text-align:center">Say it out loud first. No reason. Then tap.</p>') + '</div>';
};

R.clube = function (c) {
  var e = S.cl, n = Math.min(e.n, CLUBE.length - 1), x = CLUBE[n];
  return cab(c) + trilha(CLUBE, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>ASK YOUR TEACHER · ' + (n + 1) + ' OF 6</small><b>Would you rather ' + x.a + ' or ' + x.b + '?</b></div><p class="so-prof dica-aluno">Answer in full, then ask it back.</p><div class="aberta vd" style="background-image:url(' + img('vazia') + ')"><span>THE CLUB’S FIRST NIGHT</span></div></div>'
    + '<div class="lado-l"><div class="dois-f"><span><small>RATHER</small>I’d rather ' + x.a + ' than ' + x.b + '.</span><span><small>PREFER</small>I prefer ' + x.ia + ' to ' + x.ib + '.</span></div>' + fala('cl' + n, ['I’d rather … than …', 'I prefer …-ing to …-ing.'], ['rather', 'than', 'prefer', 'to'])
    + (e.n < CLUBE.length - 1 ? '<div><button type="button" class="btn" data-a="cl-prox">Next question</button></div>' : '<p class="aprova">Six questions, twelve answers. Your club has its first rules. Now: the club’s first book, and why?</p>') + '</div></div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>No TO after rather.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div><div class="tres-b centro">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 2).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="er" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">RATHER + plain verb. PREFER + to / -ing.</p>' : '') + '</div>';
};

R.fim = function (c) {
  var esc = Object.keys(S.lb.esc).slice(0, 2).map(function (i) { var p = PARES[i], a = S.lb.esc[i], b = p[0] === a ? p[1] : p[0]; return 'I’d rather read ' + LIVROS[a].g + ' than ' + LIVROS[b].g + '.'; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’d rather read … than …\nI prefer …-ing to …-ing.\nA book I’d rather not read: …', 'Your shelf',
    ['I’d rather ', ' than ', 'I prefer ', ' to ', 'I’d rather not'], ['WHO CHOSE THE LAST BOOK YOU FINISHED?', 'Your shelf: what you’d rather read, what you prefer, and one book you’d rather not.'])
    + '<div class="lado-fim">' + estante(null, 1, '', 1) + (esc.length ? '<div class="esc-lista">' + esc.map(function (s) { return '<span class="esc-l">' + s + '</span>'; }).join('') + '</div>' : '') + '<div class="grande vd"><span><u>I’d rather</u> read <u>than</u> scroll</span><span><u>I prefer</u> reading <u>to</u> scrolling</span><span><u>I’d rather not.</u> A whole answer.</span></div>'
    + mostra('fim', 'I’d rather read history than poetry.<br>I prefer reading on paper to reading on a screen.<br>A book I’d rather not read: anything my manager recommends!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.lb = function (b, n, v) { S.lb.esc[S.lb.n] = v; };
TOQUES['lb-prox'] = function () { S.lb.n++; };
TOQUES.pg = function (b, n) { S.pg.esc = n; };
TOQUES['pg-prox'] = function () { S.pg = { n: S.pg.n + 1, esc: -1 }; };
TOQUES.ev = function (b, n) { S.ev.esc = n; };
TOQUES['ev-prox'] = function () { S.ev = { n: S.ev.n + 1, esc: -1 }; };
TOQUES.pt = function (b, n, v) { S.pt.esc = v; };
TOQUES['pt-prox'] = function () { S.pt = { n: S.pt.n + 1, esc: '' }; };
TOQUES.qm = function (b, n) { S.qm.esc = n; };
TOQUES['qm-prox'] = function () { S.qm = { n: S.qm.n + 1, esc: -1 }; };
TOQUES.sx = function (b, n) { S.sx.esc = n; };
TOQUES['sx-prox'] = function () { S.sx = { n: S.sx.n + 1, esc: -1 }; };
TOQUES.no = function () { S.no.n++; };
TOQUES['cl-prox'] = function () { S.cl.n++; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };
