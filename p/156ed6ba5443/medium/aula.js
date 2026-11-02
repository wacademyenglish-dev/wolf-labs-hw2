/* ============================================================
   MEDIUM · THE SIZE RULER · LIVE CLASS  05/10/2026
   Main series A1 · comparativos: bigger · more expensive · better · than
   O MUNDO: quatro caixas chegaram e as quatro camisetas dizem MEDIUM,
   mas são quatro tamanhos. A aula é uma RÉGUA que estica: duas coisas
   lado a lado, a barra mostra qual é mais. A virada: medium não é um
   tamanho, é uma comparação que alguém já fez por você.
   Sem áudio e sem vídeo (a aula velha não tinha). Fotos escurecidas.
   Fila: FILA-LIVE-386.md · 015.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'caixas' },
  { k: 'abre', est: 'o', min: 7, img: 'caixas', rot: 'I · Same Size Everywhere?', t: 'Compare yourself. Any words you have.', p: 'Pick a card. Answer out loud. Your teacher taps the forms you used. Don’t worry about it yet.' },
  { k: 'gavetas', est: 'f', min: 6, img: 'caixas', rot: 'II · Short Word, Long Word', t: 'One thing decides the whole hour: how long the word is.', p: 'Clap it. Put it in a drawer. Then say it with its noun.' },
  { k: 'regua', est: 'f', min: 6, img: 'quatro', rot: 'III · The Ruler', t: 'Two things on the ruler. Say which one is more.', p: 'Pick the form. Then the little word after it. Then say the whole sentence.' },
  { k: 'than', est: 'f', min: 6, img: 'quatro', rot: 'IV · Than, Not Then', t: 'Three words that sound almost the same.', p: 'Pick the word. Then read the sentence out loud, fast.' },
  { k: 'arara', est: 'o', min: 7, img: 'quatro', rot: 'V · The Rack', t: 'Four shirts on one rack. Any two.', p: 'Two shirts light up. Say a sentence about them. Then check.' },
  { k: 'tres', est: 'f', min: 6, img: 'quatro', rot: 'VI · Good, Bad, Far', t: 'Three words follow no rule.', p: 'Pick the form. Then read the sentence.' },
  { k: 'etiquetas', est: 'o', min: 7, extra: 1, img: 'quatro', rot: 'VII · Four Labels', t: 'Turn the labels over.', p: 'Tap each label. Read the size and the width. Compare two.' },
  { k: 'loja', est: 'o', min: 7, extra: 1, img: 'caixas', rot: 'VIII · At the Store', t: 'Now you ask. The clerk answers.', p: 'Read the problem. Ask the clerk. Then see one way to say it.' },
  { k: 'tabela', est: 'o', min: 7, extra: 1, img: 'quatro', rot: 'IX · The Size Chart', t: 'A store in another country. Which size is yours?', p: 'Read the chart. Compare out loud. Then choose.' },
  { k: 'medio', est: 'o', min: 7, extra: 1, img: 'quatro', rot: 'X · So What Is Medium?', t: 'Three facts, and they don’t agree.', p: 'Answer first. Then open the answer.' },
  { k: 'fim', est: 'w', min: 6, img: 'caixas', rot: 'XI · Your Closet', t: 'Compare the things in your closet.', p: 'Five sentences with -er or more, and than. The red line watches the little words. It goes to your My notes.' }
];

var ABRE = [
  { k: 'FAMILY', q: 'Are you taller than someone in your family?', fup: 'Who is the tallest?', st: ['I’m taller than …', 'My … is taller than me.'], ex: 'I’m taller than my mother, but my brother is taller than me.' },
  { k: 'STORES', q: 'Are you the same size in every store?', fup: 'Which store is strange?', st: ['In … I’m a …', 'Their clothes are bigger than …'], ex: 'No! In one store I’m a medium, in another I’m a large.' },
  { k: 'YOUR CITY', q: 'Is your city bigger than the city next to it?', fup: 'Which one is more expensive?', st: ['My city is bigger than …', 'It’s more expensive than …'], ex: 'My city is smaller than Recife, but it’s more expensive.' },
  { k: 'SHOES', q: 'Which shoes are more comfortable: sneakers or sandals?', fup: 'And which are cheaper?', st: ['… are more comfortable than …', '… are cheaper.'], ex: 'Sneakers are more comfortable than sandals, but sandals are cheaper.' }
];
var FORMAS = [{ k: 'er', t: '-ER' }, { k: 'more', t: 'MORE …' }, { k: 'than', t: 'THAN' }, { k: 'morebig', t: 'MORE BIG / MORE TALL', erro: 1 }, { k: 'then', t: '… THEN / THAT …', erro: 1 }];

var PALAVRAS = [
  { w: 'big', k: 'er', c: 'bigger', ex: 'a big house', bat: 1 }, { w: 'expensive', k: 'more', ex: 'an expensive store', bat: 3 },
  { w: 'small', k: 'er', c: 'smaller', ex: 'a small shirt', bat: 1 }, { w: 'comfortable', k: 'more', ex: 'a comfortable chair', bat: 3 },
  { w: 'cheap', k: 'er', c: 'cheaper', ex: 'a cheap coat', bat: 1 }, { w: 'important', k: 'more', ex: 'an important day', bat: 3 },
  { w: 'happy', k: 'er', c: 'happier', ex: 'a happy dog', bat: 2, n: 'Two claps, but it ends in -y: -ER.' }, { w: 'beautiful', k: 'more', ex: 'a beautiful city', bat: 3 },
  { w: 'heavy', k: 'er', c: 'heavier', ex: 'a heavy bag', bat: 2, n: 'Ends in -y: -ER.' }, { w: 'modern', k: 'more', ex: 'a modern kitchen', bat: 2, n: 'Two claps, no -y: MORE.' }
];

var REGUA = [
  { a: 'The blue shirt', av: 54, b: 'the red shirt', bv: 48, un: 'cm', adj: 'big', o: ['bigger', 'more big'], en: 'The blue shirt is bigger than the red shirt.', op: 'So the red shirt is …', opr: 'The red shirt is smaller than the blue shirt.' },
  { a: 'The coat', av: 120, b: 'the jacket', bv: 80, un: '$', adj: 'expensive', o: ['expensiver', 'more expensive'], en: 'The coat is more expensive than the jacket.', op: 'So the jacket is …', opr: 'The jacket is cheaper than the coat.' },
  { a: 'The green bag', av: 3, b: 'the black bag', bv: 1, un: 'kg', adj: 'heavy', o: ['heavier', 'more heavy'], en: 'The green bag is heavier than the black bag.', op: 'So the black bag is …', opr: 'The black bag is lighter than the green bag.' },
  { a: 'The store online', av: 20, b: 'the store in the mall', bv: 35, un: '$', adj: 'cheap', o: ['more cheap', 'cheaper'], en: 'The store online is cheaper than the store in the mall.', op: 'So the store in the mall is …', opr: 'The store in the mall is more expensive than the store online.' },
  { a: 'The sofa', av: 9, b: 'the chair', bv: 5, un: '/10', adj: 'comfortable', o: ['more comfortable', 'comfortabler'], en: 'The sofa is more comfortable than the chair.', op: 'So the chair is …', opr: 'The chair is less comfortable than the sofa.' },
  { a: 'Today', av: 34, b: 'yesterday', bv: 28, un: '°C', adj: 'hot', o: ['more hot', 'hotter'], en: 'Today is hotter than yesterday.', op: 'And the other way?', opr: 'Yesterday: colder than today.' }
];
var DEPOIS = ['than', 'then', 'that'];

var THAN = [
  { a: 'This shirt is bigger', b: 'that one.', ok: 'than' }, { a: 'First we eat,', b: 'we go shopping.', ok: 'then' },
  { a: 'The blue one is cheaper', b: 'the red one.', ok: 'than' }, { a: 'I like', b: 'jacket.', ok: 'that' },
  { a: 'She is taller', b: 'me.', ok: 'than' }, { a: 'This store is more expensive', b: 'the other one.', ok: 'than' }
];

var PECAS = [
  { c: 'blue', w: 'the blue one', larg: 118, alt: 96 }, { c: 'red', w: 'the red one', larg: 100, alt: 74 },
  { c: 'green', w: 'the green one', larg: 86, alt: 88 }, { c: 'gray', w: 'the gray one', larg: 140, alt: 104 }
];
var PARES_A = [
  { a: 0, b: 1, en: 'The blue one is bigger than the red one.' }, { a: 2, b: 0, en: 'The green one is smaller than the blue one.' },
  { a: 3, b: 1, en: 'The gray one is longer than the red one.' }, { a: 1, b: 3, en: 'The red one is shorter than the gray one.' },
  { a: 3, b: 2, en: 'The gray one is wider than the green one.' }, { a: 2, b: 3, en: 'The green one is narrower than the gray one.' }
];

var TRES = [
  { w: 'good', o: ['better', 'gooder', 'more good'], r: 0, en: 'This one is better than that one.' },
  { w: 'bad', o: ['badder', 'worse', 'more bad'], r: 1, en: 'The service here is worse than there.' },
  { w: 'far', o: ['farer', 'more far', 'farther'], r: 2, en: 'My house is farther than yours.' },
  { w: 'good', o: ['more better', 'better', 'gooder'], r: 1, en: 'The blue shirt is better than the red one.' },
  { w: 'bad', o: ['worse', 'more worse', 'worser'], r: 0, en: 'Today is worse than yesterday.' }
];

var LABELS = [
  { c: 'blue', w: 'the blue one', cm: 54 }, { c: 'red', w: 'the red one', cm: 48 },
  { c: 'green', w: 'the green one', cm: 46 }, { c: 'gray', w: 'the gray one', cm: 58 }
];

var LOJA = [
  { sit: 'The shirt is too big.', diz: 'Do you have a smaller size?', resp: 'Yes, we do. How is this one?' },
  { sit: 'The shoes are too small.', diz: 'Do you have a bigger size?', resp: 'Let me check. How are these?' },
  { sit: 'The coat costs too much.', diz: 'Do you have a cheaper one?', resp: 'This one is cheaper.' },
  { sit: 'This jacket is heavy.', diz: 'Do you have a lighter one?', resp: 'This one is lighter.' },
  { sit: 'The store next door is cheaper.', diz: 'That store is cheaper than this one.', resp: 'Maybe, but our shirts are better.' },
  { sit: 'You tried two. The second one fits.', diz: 'This one is better than the first one.', resp: 'I think so too.' },
  { sit: 'You’re taking it.', diz: 'I’ll take this one. It’s more comfortable.', resp: 'Good choice.' }
];

var TAB = [['S', 96, 90], ['M', 104, 96], ['L', 112, 102], ['XL', 120, 108]];
var TAB_Q = ['Compare the two mediums.', 'Which store is bigger?', 'Which size do you buy here? Why?'];
var PARTES = [{ k: 'comp', t: '…ER / MORE …' }, { k: 'than', t: '… THAN …' }, { k: 'motivo', t: 'SO I BUY …' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, gav: { n: 0, esc: '', bat: 0 }, regua: { n: 0, f: '', d: '' }, than: { esc: {} },
  arara: { n: 0, ok: 0 }, tres: { n: 0, esc: -1 }, etq: { abre: {} }, loja: { n: 0, viu: 0 }, tab: { n: 0, partes: {}, erro: 0, lin: -1 }, medio: { abre: 0 } };

function camisa(p, cls) {
  var w = p.larg, h = p.alt;
  return '<svg class="camisa c-' + p.c + (cls || '') + '" viewBox="-90 -6 180 116"><path d="M' + (-w / 4) + ' 0 L' + (-w / 2) + ' 8 L' + (-w / 2 - 14) + ' 30 L' + (-w / 2 + 2) + ' 38 L' + (-w / 2 + 6) + ' 30 L' + (-w / 2 + 6) + ' ' + h + ' L' + (w / 2 - 6) + ' ' + h + ' L' + (w / 2 - 6) + ' 30 L' + (w / 2 - 2) + ' 38 L' + (w / 2 + 14) + ' 30 L' + (w / 2) + ' 8 L' + (w / 4) + ' 0 Q0 14 ' + (-w / 4) + ' 0 Z"/></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1><b>Medium</b> The Size Ruler</h1>'
    + '<p class="sub">Four boxes, four shirts, four labels that say MEDIUM. And four different sizes.</p>'
    + '<div class="chipsx"><span class="pilula">bigger than</span><span class="pilula">more expensive than</span><span class="pilula">better</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the boxes</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('caixas') + '" alt="Open delivery boxes with clothes on a bedroom floor"><div class="regua-capa">' + [54, 48, 46, 58].map(function (v, i) { return '<span style="width:' + ((v - 40) * 5) + '%"><i>MEDIUM</i><b>' + v + ' cm</b></span>'; }).join('') + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>THE FORMS YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.gavetas = function (c) {
  var g = S.gav, n = g.n, fim = n >= PALAVRAS.length, x = PALAVRAS[Math.min(n, PALAVRAS.length - 1)];
  var dentro = function (k) { return PALAVRAS.slice(0, n).filter(function (p) { return p.k === k; }).map(function (p) { return '<span>' + (p.k === 'er' ? p.c : 'more ' + p.w) + '</span>'; }).join(''); };
  var gav = '<div class="gavetas"><button type="button" class="gaveta g-er' + (g.esc === 'er' && x.k !== 'er' ? ' errado' : '') + '" data-a="gv" data-v="er"><b>-ER</b><small>one clap, or ends in -y</small><div>' + dentro('er') + '</div></button>'
    + '<button type="button" class="gaveta g-more' + (g.esc === 'more' && x.k !== 'more' ? ' errado' : '') + '" data-a="gv" data-v="more"><b>MORE …</b><small>two or more claps</small><div>' + dentro('more') + '</div></button></div>';
  if (fim) return cab(c) + trilha(PALAVRAS, n) + gav + '<p class="aprova" style="text-align:center">Short words in one drawer, long words in the other.</p>';
  var palmas = '<div class="palmas">' + [1, 2, 3].map(function (k) { return '<span class="' + (g.bat >= k && k <= x.bat ? 'on' : '') + '">👏</span>'; }).join('') + '</div>';
  return cab(c) + trilha(PALAVRAS, n) + '<div class="palavra-g vd"><b>' + x.w + '</b><small>' + x.ex + '</small>' + palmas + '<button type="button" class="pilula" data-a="gv-bat">Clap it</button></div>'
    + (g.esc && g.esc !== x.k ? '<p class="recusa" style="text-align:center">Clap it again. One clap, or a -y ending? That’s the -ER drawer.</p>' : '') + gav;
};

function barra(nome, v, max, un, cls) {
  return '<div class="linha-r ' + (cls || '') + '"><span class="nome-r">' + nome + '</span><div class="trilho-r"><i style="width:' + Math.round(v / max * 100) + '%"></i></div><span class="val">' + (un === '$' ? '$' + v : v + ' ' + un) + '</span></div>';
}
R.regua = function (c) {
  var r = S.regua, n = r.n, fim = n >= REGUA.length, x = REGUA[Math.min(n, REGUA.length - 1)];
  if (fim) return cab(c) + trilha(REGUA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX COMPARISONS</small><h2>Short word: -ER. Long word: MORE. And THAN, every time.</h2></div></div>';
  var max = Math.max(x.av, x.bv) * 1.12;
  var certoF = r.f && (r.f === x.en.split(' is ')[1].split(' than')[0]), certoD = r.d === 'than';
  var frase = x.a + ' is ' + (certoF ? '<b>' + r.f + '</b>' : '<span class="vaga">____</span>') + ' ' + (certoD ? '<b>than</b>' : '<span class="vaga">____</span>') + ' ' + x.b + '.';
  return cab(c) + trilha(REGUA, n) + '<div class="regua vd">' + barra(x.a, x.av, max, x.un, 'ra') + barra(x.b.charAt(0).toUpperCase() + x.b.slice(1), x.bv, max, x.un, 'rb') + '<div class="marcas">' + Array(11).join('<span></span>') + '</div></div>'
    + '<p class="frase-r">' + frase + '</p>'
    + (certoF && certoD ? '' : '<div class="escolhas"><div><h5>' + x.adj.toUpperCase() + ' →</h5>' + x.o.map(function (o) { return '<button type="button" class="pilula' + (r.f === o ? (certoF ? ' certo' : ' errado') : '') + '" data-a="rg-f" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
    + (certoF ? '<div><h5>THEN THE LITTLE WORD</h5>' + DEPOIS.map(function (o) { return '<button type="button" class="pilula' + (r.d === o ? (certoD ? ' certo' : ' errado') : '') + '" data-a="rg-d" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>' : '') + '</div>')
    + (r.f && !certoF ? '<p class="recusa" style="text-align:center">Clap “' + x.adj + '” again. Short or long?</p>' : '')
    + (r.d && !certoD ? '<p class="recusa" style="text-align:center">Say it fast: it sounds like “then”, but a comparison is spelled <b>than</b>.</p>' : '')
    + (certoF && certoD ? '<div class="foco">' + follow('NOW THE OPPOSITE', x.op, [], [], 'rgo' + n, mostra('rgo' + n, x.opr)) + '<div style="text-align:center"><button type="button" class="btn" data-a="rg-prox">Next pair</button></div></div>' : '');
};

R.than = function (c) {
  var e = S.than, tudo = THAN.every(function (x, i) { return e.esc[i] === x.ok; });
  return cab(c) + '<div class="frases-t">' + THAN.map(function (x, i) {
    var esc = e.esc[i], ok = esc === x.ok;
    return '<div class="frase-t vd' + (ok ? ' feita' : '') + '"><p>' + x.a + ' ' + (ok ? '<b>' + x.ok + '</b>' : '<span class="vaga">____</span>') + ' ' + x.b + '</p><div class="tres-b">'
      + (ok ? '' : ['than', 'then', 'that'].map(function (o) { return '<button type="button" class="pilula' + (esc === o ? ' errado' : '') + '" data-a="th" data-n="' + i + '" data-v="' + o + '">' + o + '</button>'; }).join('')) + '</div></div>';
  }).join('') + '</div>' + (tudo ? '<p class="aprova" style="text-align:center">A comparison always takes <b>than</b>. Then is for time. That points.</p>' : (Object.keys(e.esc).some(function (i) { return e.esc[i] !== THAN[i].ok; }) ? '<p class="recusa" style="text-align:center">Is something bigger, cheaper, taller? Then it’s <b>than</b>.</p>' : ''));
};

R.arara = function (c) {
  var a = S.arara, n = a.n, fim = n >= PARES_A.length, x = PARES_A[Math.min(n, PARES_A.length - 1)];
  var rack = '<div class="arara vd"><div class="cano"></div><div class="cabides">' + PECAS.map(function (p, i) { var on = !fim && (i === x.a || i === x.b); return '<div class="cabide' + (on ? ' on' : '') + (on && i === x.a ? ' primeiro' : '') + '"><span class="gancho"></span>' + camisa(p) + '<small>' + p.w + '</small></div>'; }).join('') + '</div></div>';
  if (fim) return cab(c) + trilha(PARES_A, n) + rack + '<p class="aprova" style="text-align:center">Six comparisons, and not one number.</p>';
  return cab(c) + trilha(PARES_A, n) + rack + '<div class="foco"><div class="pergunta vd"><small>START WITH ' + PECAS[x.a].w.toUpperCase() + '</small><h2>' + PECAS[x.a].w.charAt(0).toUpperCase() + PECAS[x.a].w.slice(1) + ' is … than ' + PECAS[x.b].w + '.</h2></div>'
    + fala('ar' + n, ['… bigger / smaller …', '… longer / shorter …', '… wider / narrower …'], []) + mostra('ar' + n, x.en) + '<div style="text-align:center"><button type="button" class="btn" data-a="ar-prox">Next two</button></div></div>';
};

R.tres = function (c) {
  var t = S.tres, n = t.n, fim = n >= TRES.length, x = TRES[Math.min(n, TRES.length - 1)];
  var lista = '<div class="tres-lista"><span>good → <b>better</b></span><span>bad → <b>worse</b></span><span>far → <b>farther</b></span></div>';
  if (fim) return cab(c) + trilha(TRES, n) + lista + '<div class="foco">' + follow('YOUR WEEK', 'Is this week better or worse than last week? Why?', ['This week is better than …', 'It’s worse because …'], [], 'trs') + '</div>';
  var ok = t.esc === x.r;
  return cab(c) + trilha(TRES, n) + '<div class="foco"><div class="pergunta vd"><small>' + x.w.toUpperCase() + ' →</small><h2>' + (ok ? x.en.replace(x.o[x.r], '<b>' + x.o[x.r] + '</b>') : x.en.replace(x.o[x.r], '<span class="vaga">____</span>')) + '</h2></div>'
    + '<div class="tres-b centro">' + x.o.map(function (o, i) { return '<button type="button" class="pilula grande' + (t.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="tr" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (t.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">No -er and no more here. These three change completely.</p>' : '')
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="tr-prox">Next</button></div>' : '') + '</div>' + (n >= 3 ? lista : '');
};

R.etiquetas = function (c) {
  var e = S.etq, todas = LABELS.every(function (_, i) { return e.abre[i]; });
  return cab(c) + '<div class="etiquetas">' + LABELS.map(function (l, i) {
    return '<button type="button" class="etiqueta e-' + l.c + (e.abre[i] ? ' virada' : '') + '" data-a="et" data-n="' + i + '"><span class="frente"><i></i>' + l.w + '<small>tap to turn</small></span><span class="verso"><small><i></i>' + l.w.toUpperCase() + '</small><b>MEDIUM</b><em>chest ' + l.cm + ' cm</em></span></button>';
  }).join('') + '</div>' + (todas ? '<div class="foco">' + follow('FOUR LABELS, ONE WORD', 'Compare two of them. Use but.', ['The … one is wider than …, but …', 'Both are medium, but …'], [], 'etq', mostra('etq', 'The gray one is wider than the green one, but both are medium.')) + '<p class="aprova" style="text-align:center">The same word on four labels, and 12 centimeters between them.</p></div>' : '<p class="dica-aluno" style="text-align:center">Turn all four.</p>');
};

R.loja = function (c) {
  var l = S.loja, n = l.n, fim = n >= LOJA.length, x = LOJA[Math.min(n, LOJA.length - 1)];
  if (fim) return cab(c) + trilha(LOJA, n) + '<div class="foco"><div class="pergunta vd"><small>SEVEN REQUESTS</small><h2>A comparison in every one.</h2></div>' + follow('SWITCH', 'Now you are the clerk. Your teacher asks.', ['Yes, this one is …', 'Sorry, we don’t have a … one.'], [], 'ljs') + '</div>';
  return cab(c) + trilha(LOJA, n) + '<div class="balcao"><div class="problema vd"><small>THE PROBLEM</small><h2>' + x.sit + '</h2></div><div class="dialogo">'
    + '<div class="bal voce"><small>YOU</small>' + (l.viu ? '<p>' + x.diz + '</p>' : '<p class="vaga">Ask the clerk out loud…</p>') + '</div>'
    + (l.viu ? '<div class="bal clerk"><small>CLERK</small><p>' + x.resp + '</p></div>' : '') + '</div>'
    + '<div>' + (l.viu ? '<button type="button" class="btn" data-a="lj-prox">Next customer</button>' : '<button type="button" class="btn cheio" data-a="lj-viu">See one way to say it</button>') + '</div>'
    + '<p class="dica-aluno">Any good request counts. This is one way.</p></div>';
};

R.tabela = function (c) {
  var t = S.tab, n = t.n, fim = n >= TAB_Q.length, pt = t.partes[n] || {};
  var tab = '<table class="tabela-t vd"><thead><tr><th>SIZE</th><th>THIS STORE<small>chest</small></th><th>YOUR STORE<small>chest</small></th></tr></thead><tbody>' + TAB.map(function (r, i) {
    return '<tr class="' + (t.lin === i ? 'on' : '') + '" data-a="tb-l" data-n="' + i + '"><td><b>' + r[0] + '</b></td><td>' + r[1] + ' cm</td><td>' + r[2] + ' cm</td></tr>';
  }).join('') + '</tbody></table>';
  if (fim) return cab(c) + '<div class="mesa-tab">' + tab + '<div class="foco"><div class="pergunta vd"><small>THE CHART</small><h2>A medium here is a large there.</h2></div></div></div>';
  return cab(c) + trilha(TAB_Q, n) + '<div class="mesa-tab">' + tab + '<div class="lado-tab"><div class="pergunta vd"><small>QUESTION ' + (n + 1) + '</small><h2>' + TAB_Q[n] + '</h2></div>'
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="tb-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (t.erro ? ' on' : '') + '" data-a="tb-e">MISTAKE HEARD: more big / bigger then</button></div>'
    + (t.erro ? '<p class="recusa">bigger <b>than</b>: -er, and than.</p>' : '')
    + mostra('tb' + n, ['Their medium is bigger than our medium: 104 against 96.', 'This store is bigger. Every size is bigger than in my store.', 'Here I buy a small, because their small is bigger than my medium.'][n]) + '<div><button type="button" class="btn" data-a="tb-prox">Next question</button></div></div></div>';
};

R.medio = function (c) {
  var m = S.medio;
  return cab(c) + '<div class="mesa-medio"><div class="fatos">' + ['Four labels say MEDIUM.', 'The shirts are all different sizes.', 'Every store decides on its own.'].map(function (f, i) { return '<div class="fato vd"><span>' + (i + 1) + '</span>' + f + '</div>'; }).join('') + '</div>'
    + '<div class="lado-medio"><div class="pergunta vd"><small>THE QUESTION</small><h2>So is MEDIUM a size at all?</h2></div>' + fala('md', ['I think medium is …', 'Medium is not …'], [])
    + (m.abre ? '<div class="virada vd"><b>Medium is not a size.</b><p>It’s a comparison somebody else makes for you. <b>Bigger</b> and <b>smaller</b> are real. Medium only means something next to another thing.</p></div>' : '<div><button type="button" class="btn cheio" data-a="md-abre">Open the answer</button></div>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = Object.keys(f).filter(function (k) { return f[k]; }).map(function (k) { return FORMAS.filter(function (x) { return x.k === k; })[0].t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My blue jeans are older than my black jeans.\n…', 'Your closet',
    ['… is bigger than …', '… is more comfortable than …', '… is better than …', '… is cheaper than …'], ['YOUR CLOSET', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now five sentences, the right way.' : 'Compare five things in your closet: shirts, shoes, jackets.'])
    + '<div class="lado-fim"><div class="grande vd"><span>big → <u>bigger than</u></span><span>expensive → <u>more expensive than</u></span><span>good → <u>better</u> · bad → <u>worse</u></span><small>And medium is not a size.</small></div>'
    + mostra('fim', 'My black jeans are older than my blue jeans.<br>My sneakers are more comfortable than my boots.<br>The gray jacket is warmer than the blue one.<br>My new shirt is more expensive than my old shirt.<br>My boots are better for rain.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['gv-bat'] = function () { S.gav.bat = Math.min(3, S.gav.bat + 1); };
TOQUES.gv = function (b, n, v) { var g = S.gav, x = PALAVRAS[g.n]; if (!x) return false; if (v === x.k) S.gav = { n: g.n + 1, esc: '', bat: 0 }; else g.esc = v; };
TOQUES['rg-f'] = function (b, n, v) { S.regua.f = v; S.regua.d = ''; };
TOQUES['rg-d'] = function (b, n, v) { S.regua.d = v; };
TOQUES['rg-prox'] = function () { S.regua = { n: S.regua.n + 1, f: '', d: '' }; };
TOQUES.th = function (b, n, v) { S.than.esc[n] = v; };
TOQUES['ar-prox'] = function () { S.arara.n++; };
TOQUES.tr = function (b, n) { S.tres.esc = n; };
TOQUES['tr-prox'] = function () { S.tres = { n: S.tres.n + 1, esc: -1 }; };
TOQUES.et = function (b, n) { S.etq.abre[n] = 1; };
TOQUES['lj-viu'] = function () { S.loja.viu = 1; };
TOQUES['lj-prox'] = function () { S.loja = { n: S.loja.n + 1, viu: 0 }; };
TOQUES['tb-l'] = function (b, n) { S.tab.lin = S.tab.lin === n ? -1 : n; };
TOQUES['tb-p'] = function (b, n, v) { var t = S.tab; t.partes[t.n] = t.partes[t.n] || {}; t.partes[t.n][v] = !t.partes[t.n][v]; };
TOQUES['tb-e'] = function () { S.tab.erro = !S.tab.erro; };
TOQUES['tb-prox'] = function () { S.tab.n++; S.tab.erro = 0; };
TOQUES['md-abre'] = function () { S.medio.abre = 1; };
