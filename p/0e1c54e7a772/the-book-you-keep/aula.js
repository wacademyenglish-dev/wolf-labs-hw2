/* ============================================================
   THE BOOK YOU KEEP · THE CARD CATALOG · LIVE CLASS  06/10/2026
   Main series A2 · orações relativas definidoras: who (pessoa) · that
   (coisa) · where (lugar); who/that somem antes de um sujeito novo (the
   book you keep); where nunca some. Erros universais: "the book what I
   keep", "the place that I live", "a man which", "where … there".
   O MUNDO (da aula velha): um sebo que tem uma ficha para cada livro,
   pessoa e lugar. Onze áudios, conferidos com faster-whisper em 06/10:
   os seis clientes batem; as QUATRO DEDICATÓRIAS NÃO batiam com a
   transcrição antiga (a voz diz outras frases) e o livro-caixa tem outra
   redação — a cena VI foi refeita em cima do que a voz diz.
   A CARA: o FICHÁRIO de madeira escura com três gavetas (WHO · THAT ·
   WHERE) e porta-etiqueta de latão; as fichas são cartões grafite com
   pauta. Fila: FILA-LIVE-386.md · 067.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'estante' },
  { k: 'abre', est: 'o', min: 7, img: 'livro', rot: 'I · Your Book', t: 'Your shelf first.', p: 'Pick a card. Any English you have. Nobody is corrected here.' },
  { k: 'vozes', est: 'l', min: 7, img: 'fundo', rot: 'II · Six Voices', t: 'The shop asked six customers about their favorite book.', p: 'Play one. Did they say what the book IS, with a joining word?' },
  { k: 'fichas', est: 'f', min: 6, img: 'estante', rot: 'III · The Card Catalog', t: 'Eight cards. Three drawers.', p: 'Say the whole line. Then put the card in the right drawer.' },
  { k: 'puxa', est: 'f', min: 6, img: 'estante', rot: 'IV · Pull the Word', t: 'Some joining words can disappear. Some can’t.', p: 'Guess first: can the word go? Then read the rest.' },
  { k: 'gx', est: 'f', min: 4, img: 'estante', rot: 'V · Find the Rule', t: 'Four sentences from the shop. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'estante', rot: 'VI · The Rule', t: 'Three drawers, one job: describe without naming.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'ded', est: 'l', min: 7, img: 'livro', rot: 'VII · Written Inside', t: 'Four books on the shelf. Each one has a line written inside.', p: 'Play it. Answer. Then describe the book with a joining word.' },
  { k: 'registro', est: 'l', min: 7, extra: 1, img: 'fundo', rot: 'VIII · The Ledger', t: 'The shop keeps a ledger. Listen to three days.', p: 'Play it. Then answer, one line at a time.' },
  { k: 'erro', est: 'f', min: 6, extra: 1, img: 'estante', rot: 'IX · Two Cards, One Right', t: 'Two cards for the same thing. Only one goes in the catalog.', p: 'Say the good one twice. Then tap it.' },
  { k: 'adivinha', est: 'o', min: 7, extra: 1, img: 'estante', rot: 'X · Don’t Say It', t: 'Your turn to write the cards. Think of something. Don’t say it.', p: 'Describe it with the frame. Your teacher guesses.' },
  { k: 'fim', est: 'w', min: 6, img: 'livro', rot: 'XI · Your Card', t: 'The book you keep, on a card.', p: 'Describe your book without its name, and the person who gave it or the place where you found it. It goes to your My notes.' }
];

var TR = {
  'kp1.mp3': 'That is a hard question. I have no idea. I do not really read at home.',
  'kp2.mp3': 'My favorite book is about a boy and a horse. I read it every winter.',
  'kp3.mp3': 'It is about a girl who runs away from home.',
  'kp4.mp3': 'It is a book that my grandfather kept next to his bed.',
  'kp5.mp3': 'It is about a small town where nothing happens and everybody knows it.',
  'kp6.mp3': 'I love it because it is funny and short. I finish it in one afternoon.',
  'ded1.mp3': 'For Ana. You said you would bring it back on Sunday.',
  'ded2.mp3': 'To the boy who reads at the table while everyone else eats.',
  'ded3.mp3': 'Bought on the last day, in the station where we said goodbye.',
  'ded4.mp3': 'I am leaving this one here. If you are reading it, you found me.',
  'registro.mp3': 'In: four books, from a house on Rua Aurora, the 11th of March. Out: one book collected, the 12th of March, no name given. On the shelf: three books still here, all of them with something written inside.'
};

var ABRE = [
  { k: 'A BOOK YOU KEPT', q: 'Is there a book you have kept for years? What is it about?', fup: 'Why do you keep it?', st: ['It’s a book that …', 'It’s about …'], ex: 'It’s a book that my mother read to me.' },
  { k: 'WHO OR WHERE', q: 'Who gave it to you, or where did you find it?', fup: 'Do you still talk to that person?', st: ['A friend who …', 'A shop where …'], ex: 'An old friend who lives in Lisbon now.' },
  { k: 'YOUR READING PLACE', q: 'Describe your favorite place to read. Don’t say its name.', fup: 'Is it quiet?', st: ['It’s a place where …'], ex: 'It’s a place where nobody talks, and the coffee is cheap.' }
];
var FORMAS = [{ k: 'who', t: 'WHO' }, { k: 'that', t: 'THAT' }, { k: 'where', t: 'WHERE' }, { k: 'what', t: 'THE BOOK WHAT…', erro: 1 }, { k: 'thatp', t: 'THE PLACE THAT I LIVE', erro: 1 }];

var VOZES = [
  { au: 'kp1.mp3', quem: 'A WOMAN AT THE COUNTER', k: 'nao' }, { au: 'kp2.mp3', quem: 'A MAN WITH A BAG', k: 'nao' }, { au: 'kp3.mp3', quem: 'A STUDENT', k: 'sim' },
  { au: 'kp4.mp3', quem: 'AN OLDER MAN', k: 'sim' }, { au: 'kp5.mp3', quem: 'A WOMAN IN A HURRY', k: 'sim' }, { au: 'kp6.mp3', quem: 'A BOY', k: 'nao' }
];

var CARTAS = [
  { cat: 'PERSON', a: 'a writer ', b: ' lives in a small town', k: 'who' },
  { cat: 'THING', a: 'a book ', b: ' I read every winter', k: 'that' },
  { cat: 'PLACE', a: 'the library ', b: ' I studied as a kid', k: 'where' },
  { cat: 'PERSON', a: 'the friend ', b: ' lent me this book', k: 'who' },
  { cat: 'THING', a: 'a story ', b: ' makes me cry', k: 'that' },
  { cat: 'PLACE', a: 'the station ', b: ' we said goodbye', k: 'where' },
  { cat: 'PERSON', a: 'the teacher ', b: ' gave me my first book', k: 'who' },
  { cat: 'PLACE', a: 'the shelf ', b: ' I keep my old books', k: 'where' }
];
var GAVETAS = [['who', 'WHO', 'people'], ['that', 'THAT', 'things'], ['where', 'WHERE', 'places']];

var PUXA = [
  { a: 'the girl', w: 'who', b: 'runs away from home', k: 'fica', por: 'A verb follows (runs). The word stays.' },
  { a: 'the book', w: 'that', b: 'my grandfather kept', k: 'sai', por: 'A new person follows (my grandfather). It can go.' },
  { a: 'the town', w: 'where', b: 'nothing happens', k: 'fica', por: 'WHERE never goes.' },
  { a: 'the friend', w: 'who', b: 'I called', k: 'sai', por: 'A new person follows (I). It can go.' },
  { a: 'a story', w: 'that', b: 'makes me cry', k: 'fica', por: 'A verb follows (makes). It stays.' },
  { a: 'the place', w: 'where', b: 'I live', k: 'fica', por: 'A new person follows, but WHERE never goes.' },
  { a: 'the book', w: 'that', b: 'you keep', k: 'sai', por: 'A new person (you). It can go: the book you keep.' }
];

var FITAS = [['WHO', 'people: a girl who runs away'], ['THAT', 'things: a book that I keep'], ['WHERE', 'places: a town where nothing happens'], ['IT CAN GO', 'before a new person: the book (that) you keep']];
var ARMAS = [
  ['NO WHAT', 'the book what I keep', 'the book that I keep', 'WHAT doesn’t join a noun to more information.'],
  ['A PLACE', 'the place that I live', 'the place where I live', 'You live IN a place: where.'],
  ['PEOPLE', 'a man which writes novels', 'a man who writes novels', 'People take who.'],
  ['NO THERE', 'a town where nothing happens there', 'a town where nothing happens', 'where already means there.'],
  ['A THING', 'the gift what she gave me', 'the gift that she gave me', 'A thing: that. Never what.'],
  ['WHERE STAYS', 'the café we met', 'the café where we met', 'who and that can go. where never goes.']
];

var DED = [
  { au: 'ded1.mp3', img: 'l1', q: 'Who is the book for? What did she promise?', ex: 'It’s for Ana. She said she would bring it back on Sunday.', desc: 'Describe it: It’s the book that …', dex: 'It’s the book that Ana never brought back.' },
  { au: 'ded2.mp3', img: 'l2', gap: ['To the boy ', ' reads at the table.'], k: 'who', q: 'Who do you know who reads at the table, or does something while everyone else eats?', ex: 'My brother. He watches videos while we eat.' },
  { au: 'ded3.mp3', img: 'l3', gap: ['In the station ', ' we said goodbye.'], k: 'where', q: 'Is there a place where you said goodbye to someone?', ex: 'The airport in my city. I said goodbye to my sister there.' },
  { au: 'ded4.mp3', img: 'l4', q: 'Somebody left this book on purpose. Why?', ex: 'Maybe they wanted somebody to find them.', desc: 'Describe it: It’s a book that …', dex: 'It’s a book that somebody left for a stranger.' }
];
var OPS_D = ['who', 'that', 'where'];

var REGISTRO = [['MARCH 11', 'IN · 4 books · a house on Rua Aurora'], ['MARCH 12', 'OUT · 1 book · no name given'], ['TODAY', 'ON THE SHELF · 3 books · something written inside']];
var REGQ = [
  { q: 'How many books came in on March 11? From where?', ex: 'Four books, from a house on Rua Aurora.' },
  { q: 'What happened on March 12?', ex: 'One book was collected, and nobody gave a name.' },
  { q: 'What is the same about the three books on the shelf?', ex: 'All of them have something written inside.' },
  { q: 'Describe the book that left. Use THAT.', ex: 'It’s the one that somebody came back for.' }
];

var ERRO = [
  { sit: 'The book. You keep it.', ok: 'the book that I keep', mau: 'the book what I keep', w: 'WHAT doesn’t join. Use THAT.' },
  { sit: 'The place. You live there.', ok: 'the place where I live', mau: 'the place that I live', w: 'You live IN a place: WHERE.' },
  { sit: 'A man. He writes novels.', ok: 'a man who writes novels', mau: 'a man which writes novels', w: 'People take WHO.' },
  { sit: 'The café. We met there.', ok: 'the café where we met', mau: 'the café that we met', w: 'A place where something happened: WHERE.' },
  { sit: 'The gift. She gave it to me.', ok: 'the gift that she gave me', mau: 'the gift what she gave me', w: 'A thing: THAT. Never WHAT.' },
  { sit: 'A town. Nothing happens there.', ok: 'a town where nothing happens', mau: 'a town where nothing happens there', w: 'WHERE already means THERE.' }
];

var ADIV = [
  { p: 'A person in your family.', k: 'who' }, { p: 'A thing in your bag right now.', k: 'that' }, { p: 'A place in your city.', k: 'where' },
  { p: 'A famous person everybody knows.', k: 'who' }, { p: 'A book, a movie or a series you love.', k: 'that' }
];
var FRAMES = { who: 'It’s a person who …', that: 'It’s a thing that …', where: 'It’s a place where …' };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, voz: {}, fc: { n: 0, esc: '' }, px: { n: 0, esc: '' }, ded: { sel: 0, esc: {} }, er: { n: 0, esc: '' }, adv: { n: 0, ok: {} } };

function ficha(txt, cls, rot) { return '<div class="ficha' + (cls ? ' ' + cls : '') + '"><small>' + (rot || 'CATALOG CARD') + '</small><b>' + txt + '</b></div>'; }
function fichario(contagem, alvo) {
  return '<div class="fichario">' + GAVETAS.map(function (g) { return '<button type="button" class="gaveta' + (alvo ? '' : ' fixa') + '" data-a="fc" data-v="' + g[0] + '"' + (alvo ? '' : ' disabled') + '><span class="etiq"><b>' + g[1] + '</b><small>' + g[2] + '</small></span><i class="puxador"></i><em>' + (contagem[g[0]] || 0) + '</em></button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · ONE SHOP · THREE DRAWERS · NO NAMES</span><h1>The Book <b>You Keep</b></h1>'
    + '<p class="sub">Every book on the shelf has a card. Every card describes something without naming it: a person <b>who</b>…, a thing <b>that</b>…, a place <b>where</b>…</p>'
    + '<div class="chipsx"><span class="pilula">who · people</span><span class="pilula">that · things</span><span class="pilula">where · places</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the catalog</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + fichario({ who: 3, that: 2, where: 3 }, 0) + ficha('a book that my grandfather kept next to his bed', 'solta') + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.vozes = function (c) {
  var n = 0; VOZES.forEach(function (v, i) { if (S.voz[i] === v.k) n++; });
  return cab(c) + '<div class="vozes">' + VOZES.map(function (v, i) {
    var esc = S.voz[i], ok = esc === v.k, ouviu = (S.ouviu || {})[v.au];
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><small class="quem">' + v.quem + '</small><div class="toca-linha">' + tocar(v.au) + '<div>' + transcricao(v.au, TR[v.au]) + '</div></div>'
      + (ouviu ? '<div class="tres-b">' + [['sim', 'IT DESCRIBES'], ['nao', 'IT DOESN’T']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="vz" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' : '')
      + (ok && v.k === 'sim' ? '<p class="aprova">A joining word: who, that or where.</p>' : esc && !ok ? '<p class="recusa">Listen again. Is there a word that joins a person, a thing or a place to more information?</p>' : '') + '</div>';
  }).join('') + '</div>' + (n === 6 ? '<p class="aprova" style="text-align:center">Three of six used a joining word: WHO, THAT, WHERE.</p>' : '');
};

R.fichas = function (c) {
  var e = S.fc, n = e.n, fim = n >= CARTAS.length, cont = {};
  CARTAS.slice(0, n).forEach(function (x) { cont[x.k] = (cont[x.k] || 0) + 1; });
  if (fim) return cab(c) + trilha(CARTAS, n) + '<div class="mesa-c">' + fichario(cont, 0) + '<div class="lado-l"><div class="pergunta vd"><small>EIGHT CARDS FILED</small><h2>People, things, places: each in its own drawer.</h2></div></div></div>';
  var x = CARTAS[n], ok = e.esc === x.k;
  return cab(c) + trilha(CARTAS, n) + '<div class="mesa-c">' + fichario(cont, !ok) + '<div class="lado-l">' + ficha(x.a + '<span class="gap">' + (ok ? x.k : '___') + '</span>' + x.b, ok ? 'certa' : '', x.cat)
    + (ok ? '<p class="aprova">Filed under ' + x.k.toUpperCase() + '.</p><div><button type="button" class="btn" data-a="fc-prox">Next card</button></div>' : (e.esc ? '<p class="recusa">Look at the word before the gap: a person, a thing, or a place?</p>' : '<p class="dica-aluno">Say the whole line. Then tap a drawer.</p>')) + '</div></div>';
};

R.puxa = function (c) {
  var e = S.px, n = e.n, fim = n >= PUXA.length;
  if (fim) return cab(c) + trilha(PUXA, n) + '<div class="foco">' + ficha('the book you keep', 'titulo-f', 'THE TITLE') + '<div class="pergunta vd"><small>THE TITLE ALL ALONG</small><h2>The book (that) you keep. WHO and THAT can go before a new person. WHERE never goes.</h2></div></div>';
  var x = PUXA[n], ok = e.esc === x.k;
  return cab(c) + trilha(PUXA, n) + '<div class="foco">' + ficha(x.a + ' <span class="puxavel' + (ok && x.k === 'sai' ? ' puxada' : '') + '">' + x.w + '</span> ' + x.b, ok ? 'certa' : '')
    + (ok ? '<p class="aprova" style="text-align:center">' + x.por + '</p><div style="text-align:center"><button type="button" class="btn" data-a="px-prox">Next</button></div>'
      : '<div class="tres-b centro">' + [['sai', 'IT CAN GO'], ['fica', 'IT STAYS']].map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[0] ? ' errado' : '') + '" data-a="px" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">What comes right after the word: a verb, or a new person?</p>' : '')) + '</div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.ded = function (c) {
  var e = S.ded, x = DED[e.sel], ouviu = (S.ouviu || {})[x.au], esc = e.esc[e.sel], ok = x.gap ? esc === x.k : true;
  var livros = '<div class="livros">' + DED.map(function (d, i) { return '<button type="button" class="livro-b' + (e.sel === i ? ' on' : '') + '" data-a="dd" data-n="' + i + '" style="background-image:url(' + img(d.img) + ')"><span>BOOK ' + (i + 1) + '</span></button>'; }).join('') + '</div>';
  var corpo = '<div class="toca-linha">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>';
  if (ouviu) {
    if (x.gap) corpo += ficha(x.gap[0] + '<span class="gap">' + (ok ? x.k : '___') + '</span>' + x.gap[1], ok ? 'certa' : '', 'WRITTEN INSIDE') + (ok ? '' : '<div class="tres-b">' + OPS_D.map(function (o) { return '<button type="button" class="pilula grande-p' + (esc === o ? ' errado' : '') + '" data-a="dd-v" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">A person, a place, or a thing?</p>' : ''));
    if (ok) corpo += '<div class="pergunta vd ja"><small>YOU AND THIS BOOK</small><h2>' + x.q + '</h2></div>' + mostra('dq' + e.sel, x.ex, 1) + (x.desc ? '<p class="ini">' + x.desc + '</p>' + mostra('dd' + e.sel, x.dex, 1) : '');
  } else corpo += '<p class="transcricao vazia">Play it first. The line opens after.</p>';
  return cab(c) + '<div class="mesa-d">' + livros + '<div class="lado-l">' + corpo + '</div></div>';
};

R.registro = function (c) {
  var ouviu = (S.ouviu || {})['registro.mp3'];
  return cab(c) + '<div class="mesa-c"><div class="livro-caixa vd"><small>THE LEDGER</small>' + REGISTRO.map(function (r) { return '<div class="linha-lc"><span>' + r[0] + '</span><b>' + (ouviu ? r[1] : '· · ·') + '</b></div>'; }).join('') + '<div class="toca-linha">' + tocar('registro.mp3') + '<div>' + transcricao('registro.mp3', TR['registro.mp3']) + '</div></div></div>'
    + '<div class="lado-l">' + (ouviu ? REGQ.map(function (q, i) { return '<div class="q-linha vd"><p>' + q.q + '</p>' + mostra('rg' + i, q.ex, i === 3) + '</div>'; }).join('') + '<p class="aprova">One book left. It was the one that somebody came back for.</p>' : '<p class="transcricao vazia">Play the ledger first.</p>') + '</div></div>';
};

R.erro = function (c) {
  var e = S.er, n = e.n, fim = n >= ERRO.length;
  if (fim) return cab(c) + trilha(ERRO, n) + '<div class="foco"><div class="pergunta vd"><small>SIX CARDS</small><h2>Six cards in the catalog. No WHAT anywhere.</h2></div></div>';
  var x = ERRO[n], ok = e.esc === 'ok';
  return cab(c) + trilha(ERRO, n) + '<div class="foco"><div class="sit vd"><small>THE THING</small><b>' + x.sit + '</b></div>'
    + (ok ? ficha(x.ok, 'certa') + '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="er-prox">Next</button></div>'
      : '<div class="dois-f">' + ordem([[x.ok, 'ok'], [x.mau, 'mau']], n + 1).map(function (o) { return '<button type="button" class="ficha-b' + (e.esc === o[1] ? ' errado' : '') + '" data-a="er" data-v="' + o[1] + '"><small>CARD</small><b>' + o[0] + '</b></button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">Read it again. Person, thing, or place?</p>' : '')) + '</div>';
};

R.adivinha = function (c) {
  var e = S.adv, n = Math.min(e.n, ADIV.length - 1), x = ADIV[n], feitos = Object.keys(e.ok).length;
  return cab(c) + trilha(ADIV, e.n) + '<div class="mesa-c">' + fichario({ who: ADIV.filter(function (a, i) { return e.ok[i] && a.k === 'who'; }).length, that: ADIV.filter(function (a, i) { return e.ok[i] && a.k === 'that'; }).length, where: ADIV.filter(function (a, i) { return e.ok[i] && a.k === 'where'; }).length }, 0)
    + '<div class="lado-l"><div class="pergunta vd ja"><small>CARD ' + (n + 1) + ' OF 5 · THINK OF…</small><h2>' + x.p + '</h2></div>' + ficha(FRAMES[x.k], 'molde', 'THE FRAME')
    + fala('ad' + n, [FRAMES[x.k]], ['lives', 'works', 'is', 'has', 'you can']) + (e.ok[n] ? '<p class="aprova">Your teacher guessed it. ' + (n < ADIV.length - 1 ? '' : 'Five cards, and nobody said a name.') + '</p>' + (n < ADIV.length - 1 ? '<div><button type="button" class="btn" data-a="ad-prox">Next card</button></div>' : '') : '<div><button type="button" class="btn so-prof" data-a="ad-ok">I guessed it</button></div>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'It’s a book that …\nThe person who gave it to me …\nThe place where I found it …', 'Your card',
    ['It’s a book that ', 'a person who ', 'a place where ', 'the book I keep'], ['THE BOOK YOU KEEP', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now describe your book without its name.' : 'Describe your book without its name, and the person who gave it, or the place where you found it.'])
    + '<div class="lado-fim">' + ficha('the book you keep', 'titulo-f', 'YOUR CARD') + '<div class="grande vd"><span><u>who</u>: people · <u>that</u>: things</span><span><u>where</u>: places · never <s>what</s></span><span>it can go: the book <u>you keep</u></span></div>'
    + mostra('fim', 'It’s a book that my grandmother read to me every night.<br>The person who gave it to me is my aunt.<br>The place where I keep it is the shelf next to my bed.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.vz = function (b, n, v) { S.voz[n] = v; };
TOQUES.fc = function (b, n, v) { S.fc.esc = v; };
TOQUES['fc-prox'] = function () { S.fc = { n: S.fc.n + 1, esc: '' }; };
TOQUES.px = function (b, n, v) { S.px.esc = v; };
TOQUES['px-prox'] = function () { S.px = { n: S.px.n + 1, esc: '' }; };
TOQUES.dd = function (b, n) { S.ded.sel = n; };
TOQUES['dd-v'] = function (b, n, v) { S.ded.esc[S.ded.sel] = v; };
TOQUES.er = function (b, n, v) { S.er.esc = v; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: '' }; };
TOQUES['ad-ok'] = function () { S.adv.ok[Math.min(S.adv.n, ADIV.length - 1)] = 1; };
TOQUES['ad-prox'] = function () { S.adv.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four sentences. Find the rule yourself.',
  exemplos: [
    'The book <b>I</b> keep on my desk is very old.',
    'The man <b>my sister</b> loves works at the shop.',
    'The place <b>where</b> I live has a small garden.',
    'The woman <b>who</b> owns the shop knows every book.'
  ],
  pergunta: 'Between the noun and the new part, a joining word …',
  opcoes: ['can disappear before a new subject (the book I keep), but where stays', 'always stays: who, that or where, every time', 'always disappears, even where'], c: 0,
  nao: 'Not that one. Read the four sentences again: which ones have no joining word? Is there a new subject there?',
  regra: 'Before a <b>new subject</b> (I, my sister), <b>that</b> or <b>who</b> can go away: the book <b>I</b> keep. Before a verb, they stay: the woman <b>who owns</b> the shop. And <b>where</b> never goes away: the place <b>where</b> I live.',
  uso: { p: 'Your turn. A book, a person and a place you love. Describe them without saying the name.', molde: ['The book (that) I …', 'The person who …', 'The place where …'], ex: 'The book I read every year is small and red. The person who calls me every day is my mother. The place where I feel calm is my grandma’s kitchen.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
