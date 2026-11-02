/* ============================================================
   ONE BECOMES TWO · THE MARKET STALL · LIVE CLASS  05/10/2026
   Main series A1 · plural: -s, -es, -ies, -ves, irregulares; o som do -s
   O MUNDO: a barraca da Vera na feira de sábado. Cinco lugares de
   madeira escura: o engradado /s/, o engradado /z/, a gaveta -ES, a
   gaveta -IES e o cesto dos teimosos. A Vera grita (o professor é a
   voz dela) e a fruta vai para o lugar certo.
   Sem áudio usado (y-yes/y-no nunca foram da aula) e sem vídeo. Fila: 018.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'barraca' },
  { k: 'abre', est: 'o', min: 7, img: 'cesta', rot: 'I · Your Market', t: 'What do you buy every week?', p: 'Pick a card. Name things, and say how many. Your teacher taps what you used. Don’t worry about it yet.' },
  { k: 'caixa', est: 'f', min: 6, img: 'engradado', rot: 'II · One Becomes Two', t: 'Twelve words. Some just take S. Some need a beat.', p: 'Say the plural. Clap the beats. Then tap + S or + ES.' },
  { k: 'garganta', est: 'o', min: 7, img: 'engradado', rot: 'III · Your Throat Knows', t: 'Hand on your throat. Say the word. Does it buzz?', p: 'No buzz: the /s/ crate. A buzz: the /z/ crate.' },
  { k: 'garfo', est: 'f', min: 6, img: 'cesta', rot: 'IV · The Y Fork', t: 'Look at the letter BEFORE the Y.', p: 'A consonant before it: the Y goes, -IES comes. A vowel before it: just + S.' },
  { k: 'facas', est: 'o', min: 7, img: 'cesta', rot: 'V · The Knife Drawer', t: 'A small family: the F turns into V.', p: 'Say the plural before you open. Then the sentence.' },
  { k: 'teimosos', est: 'o', min: 7, img: 'cesta', rot: 'VI · The Stubborn Ones', t: 'No rule here. Only your mouth remembers these.', p: 'Say the plural before you open. Then find the two words that don’t exist.' },
  { k: 'grito', est: 'f', min: 6, extra: 1, img: 'barraca', rot: 'VII · Vera Shouts', t: 'Vera shouts one thing at a time. Put each one in its place.', p: 'Your teacher shouts. You say the plural. Spelling first: -ES, -IES or odd? Only a plain +S goes by sound.' },
  { k: 'placas', est: 'f', min: 6, extra: 1, img: 'placas', rot: 'VIII · The Signs', t: 'Vera’s price signs are a mess.', p: 'Tap a sign. Fix it out loud, or say it’s right.' },
  { k: 'barraca', est: 'o', min: 7, extra: 1, img: 'barraca', rot: 'IX · Your Own Stall', t: 'Saturday. You have a stall too. Shout what you sell.', p: 'Pick a stall. Shout five things with numbers. Then the customers come.' },
  { k: 'fim', est: 'w', min: 6, img: 'engradado', rot: 'X · Market Closed', t: 'Write your shopping list.', p: 'Six things with numbers, and one sentence about people or children. The red line watches every ending. It goes to your My notes.' }
];

var ABRE = [
  { k: 'EVERY WEEK', q: 'What do you buy every week at the market?', fup: 'How many? Say the numbers.', st: ['I buy …', 'two … / six …'], ex: 'I buy six eggs, two lemons and a lot of tomatoes.' },
  { k: 'NEVER', q: 'What do you never buy? Why?', fup: 'Who buys it in your house?', st: ['I never buy …'], ex: 'I never buy cherries. They’re very expensive.' },
  { k: 'YOUR KITCHEN', q: 'How many knives, cups and glasses are in your kitchen?', fup: 'Too many, or too few?', st: ['There are … knives', 'We have …'], ex: 'We have six knives and too many glasses.' },
  { k: 'PEOPLE', q: 'How many people live in your house? Any children?', fup: 'Who does the shopping?', st: ['… people live …', 'two children …'], ex: 'Four people live in my house: two adults and two children.' }
];
var FORMAS = [{ k: 's', t: 'A CLEAR -S (APPLES)' }, { k: 'irr', t: 'AN IRREGULAR (PEOPLE…)' }, { k: 'sem', t: 'NO S (TWO TOMATO)', erro: 1 }, { k: 'dupla', t: 'CHILDS / PEOPLES', erro: 1 }];

var CAIXA = [
  { w: 'apple', k: 's', b1: 2, b2: 2 }, { w: 'box', k: 'es', b1: 1, b2: 2 }, { w: 'lemon', k: 's', b1: 2, b2: 2 }, { w: 'peach', k: 'es', b1: 1, b2: 2 },
  { w: 'egg', k: 's', b1: 1, b2: 1 }, { w: 'dish', k: 'es', b1: 1, b2: 2 }, { w: 'plum', k: 's', b1: 1, b2: 1 }, { w: 'bus', k: 'es', b1: 1, b2: 2 },
  { w: 'carrot', k: 's', b1: 2, b2: 2 }, { w: 'brush', k: 'es', b1: 1, b2: 2 }, { w: 'grape', k: 's', b1: 1, b2: 1 }, { w: 'glass', k: 'es', b1: 1, b2: 2 }
];
var NAO_CX = { s: 'Say it: does it end in a hiss (s, x, ch, sh)? This one doesn’t. Just + S.', es: 'This one hisses at the end. A hiss + S is too much: the mouth needs a beat. + ES.' };

var GARG = [
  { w: 'books', k: 's' }, { w: 'dogs', k: 'z' }, { w: 'cats', k: 's' }, { w: 'pens', k: 'z' }, { w: 'cups', k: 's' }, { w: 'apples', k: 'z' },
  { w: 'plants', k: 's' }, { w: 'eggs', k: 'z' }, { w: 'grapes', k: 's' }, { w: 'lemons', k: 'z' }, { w: 'maps', k: 's' }, { w: 'tomatoes', k: 'z' }
];
var NAO_G = { s: 'Hand on your throat again. Before the S there’s a quiet sound (k, t, p). No buzz.', z: 'Hand on your throat again. Before the S the throat is already buzzing. It keeps buzzing: /z/.' };

var GARFO = [
  { w: 'cherry', k: 'ies' }, { w: 'day', k: 's' }, { w: 'berry', k: 'ies' }, { w: 'boy', k: 's' }, { w: 'city', k: 'ies' },
  { w: 'key', k: 's' }, { w: 'baby', k: 'ies' }, { w: 'tray', k: 's' }, { w: 'party', k: 'ies' }, { w: 'family', k: 'ies' }
];

var FACAS = [
  { a: 'knife', b: 'knives', s: 'Two knives on the table.' }, { a: 'loaf', b: 'loaves', s: 'She sells three loaves a day.' },
  { a: 'half', b: 'halves', s: 'Cut it into two halves.' }, { a: 'leaf', b: 'leaves', s: 'The leaves are on the ground.' },
  { a: 'shelf', b: 'shelves', s: 'Vera has four shelves.' }, { a: 'wife', b: 'wives', s: 'Their wives run the next stall.' }
];
var TEIMOSOS = [
  { a: 'man', b: 'men', s: 'Two men are waiting.' }, { a: 'woman', b: 'women', s: 'The women know Vera.' },
  { a: 'child', b: 'children', s: 'Three children are running.' }, { a: 'foot', b: 'feet', s: 'My feet hurt today.' },
  { a: 'tooth', b: 'teeth', s: 'Brush your teeth at night.' }, { a: 'person', b: 'people', s: 'Many people come on Saturday.' }
];
var TRAP = [{ w: 'children', ok: 1 }, { w: 'childrens' }, { w: 'people', ok: 1 }, { w: 'peoples' }, { w: 'men', ok: 1 }, { w: 'feet', ok: 1 }];

var GRITO = [
  { n: '3', w: 'peach', p: 'peaches', k: 'es' }, { n: '6', w: 'egg', p: 'eggs', k: 'z' }, { n: '2', w: 'knife', p: 'knives', k: 'odd' },
  { n: '10', w: 'cherry', p: 'cherries', k: 'ies' }, { n: '4', w: 'grape', p: 'grapes', k: 's' }, { n: '5', w: 'tomato', p: 'tomatoes', k: 'es' },
  { n: '2', w: 'box', p: 'boxes', k: 'es' }, { n: 'many', w: 'person', p: 'people', k: 'odd' }, { n: '8', w: 'nut', p: 'nuts', k: 's' },
  { n: '3', w: 'berry', p: 'berries', k: 'ies' }, { n: '7', w: 'lemon', p: 'lemons', k: 'z' }, { n: '4', w: 'loaf', p: 'loaves', k: 'odd' }
];
var LUGARES = [{ k: 's', t: '/s/ CRATE', d: 'quiet' }, { k: 'z', t: '/z/ CRATE', d: 'buzz' }, { k: 'es', t: '-ES DRAWER', d: 'a beat' }, { k: 'ies', t: '-IES DRAWER', d: 'no Y' }, { k: 'odd', t: 'ODD BASKET', d: 'stubborn' }];

var PLACAS = [
  { s: '2 TOMATO', ok: 0, f: '2 TOMATOES', y: 'Two is more than one. It needs the ending.', x: 13.5, y2: 35 },
  { s: '3 CHILDS TICKETS', ok: 0, f: '3 CHILDREN’S TICKETS', y: 'child is stubborn: children.', x: 29, y2: 35 },
  { s: '5 CHERRYS', ok: 0, f: '5 CHERRIES', y: 'A consonant before the Y: -IES.', x: 44, y2: 35 },
  { s: 'SIX BOXES', ok: 1, f: 'SIX BOXES', y: 'Nothing to fix. This one is right.', x: 59, y2: 35 },
  { s: 'FOR ALL PEOPLES', ok: 0, f: 'FOR ALL PEOPLE', y: 'people is already plural.', x: 74, y2: 35 },
  { s: '4 PEACHS', ok: 0, f: '4 PEACHES', y: 'CH hisses: the mouth needs a beat.', x: 89, y2: 35 }
];

var BARRACAS = [
  { k: 'fruit', t: 'FRUIT', ic: '🍑', itens: ['apples', 'peaches', 'cherries', 'lemons', 'grapes'] },
  { k: 'bread', t: 'BAKERY', ic: '🍞', itens: ['loaves', 'cookies', 'cakes', 'pies', 'rolls'] },
  { k: 'casa', t: 'KITCHEN THINGS', ic: '🔪', itens: ['knives', 'dishes', 'glasses', 'boxes', 'brushes'] },
  { k: 'kids', t: 'TOYS', ic: '🧸', itens: ['balls', 'dolls', 'games', 'cars', 'puzzles'] }
];
var CLIENTES = ['How much are the {x}?', 'Do you have any {x} for children?', 'Can I have six, please? And two boxes?'];
var PARTES = [{ k: 's', t: '-S THAT BUZZES /z/' }, { k: 'es', t: '-ES WITH A BEAT' }, { k: 'irr', t: 'AN ODD ONE (KNIVES, LOAVES)' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, cx: { n: 0, esc: '', bat: 0 }, gg: { n: 0, esc: '' }, gf: { n: 0, esc: '' },
  facas: { abre: {} }, teim: { abre: {}, trap: {} }, grito: { n: 0, esc: '', feitos: [] }, placas: { sel: -1, viu: {} },
  barraca: { b: -1, gritou: {}, cli: 0, partes: {}, erro: 0 } };

function pluralY(w) { return /[^aeiou]y$/.test(w) ? w.slice(0, -1) + 'ies' : w + 's'; }
function engradado(k, t, d, conteudo, cls) {
  return '<button type="button" class="lugar l-' + k + (cls || '') + '" data-a="lg" data-v="' + k + '"><span class="tampa"><b>' + t + '</b><small>' + d + '</small></span><span class="dentro">' + (conteudo || '') + '</span></button>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>One Becomes <b>Two</b></h1>'
    + '<p class="sub">Apples, peaches, cherries, loaves: four endings in one shout.</p>'
    + '<div class="chipsx"><span class="pilula">apples /z/</span><span class="pilula">books /s/</span><span class="pilula">cherries · people</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the stall</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('barraca') + '" alt="A market stall with wooden crates of fruit"><div class="placa-capa"><small>VERA’S STALL</small><b>3 peaches · 10 cherries · 4 loaves</b></div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

function cenaUm(c, lista, est, chaveToque, render, fimTxt) {
  var n = est.n, fim = n >= lista.length;
  if (fim) return cab(c) + trilha(lista, n) + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>' + fimTxt + '</h2></div></div>';
  return cab(c) + trilha(lista, n) + render(lista[n], n);
}

R.caixa = function (c) {
  var e = S.cx;
  return cenaUm(c, CAIXA, e, 'cx', function (x) {
    var ok = e.esc === x.k, plural = x.w + (x.k === 'es' ? 'es' : 's');
    var palmas = function (q, on) { var h2 = ''; for (var i = 0; i < q; i++) h2 += '<span class="' + (on ? 'on' : '') + '">👏</span>'; return h2; };
    return '<div class="dois-lados"><div class="lado-p vd"><small>ONE</small><b>' + x.w + '</b><div class="palmas">' + palmas(x.b1, 1) + '</div></div><span class="seta">→</span>'
      + '<div class="lado-p vd' + (ok ? ' feito' : '') + '"><small>TWO</small><b>' + (ok ? x.w + '<u>' + (x.k === 'es' ? 'es' : 's') + '</u>' : x.w + '<span class="vaga">__</span>') + '</b><div class="palmas">' + (ok ? palmas(x.b2, 1) : palmas(x.b2, 0)) + '</div></div></div>'
      + '<div class="tres-b centro">' + [['s', '+ S'], ['es', '+ ES']].map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="cx" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
      + (e.esc && !ok ? '<p class="recusa" style="text-align:center">' + NAO_CX[x.k === 's' ? 's' : 'es'] + '</p>' : '')
      + (ok ? '<p class="aprova" style="text-align:center">' + plural + ': ' + x.b2 + (x.b2 > 1 ? ' beats' : ' beat') + '.' + (x.k === 'es' ? ' The mouth takes a breath.' : '') + '</p><div style="text-align:center"><button type="button" class="btn" data-a="cx-prox">Next word</button></div>' : '');
  }, 'The -ES isn’t spelling. It’s your mouth taking a breath.');
};

R.garganta = function (c) {
  var e = S.gg, feitos = GARG.slice(0, e.n);
  var crates = '<div class="dois-crates">' + [['s', '/s/', 'no buzz'], ['z', '/z/', 'a buzz']].map(function (k) {
    return engradado(k[0], k[1], k[2], feitos.filter(function (g) { return g.k === k[0]; }).map(function (g) { return '<span>' + g.w + '</span>'; }).join(''), e.esc === k[0] && GARG[e.n] && GARG[e.n].k !== k[0] ? ' errado' : '');
  }).join('') + '</div>';
  if (e.n >= GARG.length) return cab(c) + trilha(GARG, e.n) + crates + '<p class="aprova" style="text-align:center">One letter, two sounds. Your throat picks, not you. And most plurals buzz.</p>';
  var x = GARG[e.n];
  return cab(c) + trilha(GARG, e.n) + '<div class="palavra-g vd"><span class="mao">✋</span><b>' + x.w + '</b><small>Hand on your throat. Slowly, then fast.</small></div>'
    + (e.esc && e.esc !== x.k ? '<p class="recusa" style="text-align:center">' + NAO_G[x.k] + '</p>' : '') + crates.replace(/data-a="lg"/g, 'data-a="gg"');
};

R.garfo = function (c) {
  var e = S.gf;
  return cenaUm(c, GARFO, e, 'gf', function (x) {
    var antes = x.w.charAt(x.w.length - 2), consoante = !/[aeiou]/.test(antes), ok = e.esc === x.k;
    var letras = x.w.split('').map(function (l, i) { var cls = i === x.w.length - 1 ? 'y' : i === x.w.length - 2 ? 'antes ' + (consoante ? 'cons' : 'vog') : ''; return '<span class="' + cls + '">' + l + '</span>'; }).join('');
    return '<div class="garfo vd"><div class="letras">' + letras + '</div><small class="aviso-g">' + (ok || e.esc ? antes.toUpperCase() + ' is a ' + (consoante ? 'consonant' : 'vowel') : 'Look at the letter before the Y') + '</small>'
      + '<div class="pontas"><button type="button" class="ponta' + (e.esc === 'ies' ? (ok ? ' certo' : ' errado') : '') + '" data-a="gf" data-v="ies"><b>-IES</b><small>consonant + Y</small>' + (ok && x.k === 'ies' ? '<em>' + pluralY(x.w) + '</em>' : '') + '</button>'
      + '<button type="button" class="ponta' + (e.esc === 's' ? (ok ? ' certo' : ' errado') : '') + '" data-a="gf" data-v="s"><b>+ S</b><small>vowel + Y</small>' + (ok && x.k === 's' ? '<em>' + pluralY(x.w) + '</em>' : '') + '</button></div></div>'
      + (e.esc && !ok ? '<p class="recusa" style="text-align:center">Look before the Y: ' + antes + ' is a ' + (consoante ? 'consonant. The Y goes away: -ies.' : 'vowel. The Y stays: just + s.') + '</p>' : '')
      + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="gf-prox">Next word</button></div>' : '');
  }, 'You never look at the Y. You look at the letter next to it.');
};

function pares(c, lista, est, toque, extra) {
  return cab(c) + '<div class="pares-g">' + lista.map(function (p, i) {
    var a = est.abre[i];
    return '<button type="button" class="par-g vd' + (a ? ' aberto' : '') + '" data-a="' + toque + '" data-n="' + i + '"><span class="um">' + p.a + '</span><span class="seta">→</span><span class="dois">' + (a ? p.b : '?') + '</span>' + (a ? '<small>' + p.s + '</small>' : '<small class="toque">Say it, then tap</small>') + '</button>';
  }).join('') + '</div>' + (extra || '');
}
R.facas = function (c) { var tudo = FACAS.every(function (_, i) { return S.facas.abre[i]; }); return pares(c, FACAS, S.facas, 'fc', tudo ? '<p class="aprova" style="text-align:center">Six words. That’s the whole family. And the V buzzes: knives /z/.</p>' : ''); };
R.teimosos = function (c) {
  var t = S.teim, tudo = TEIMOSOS.every(function (_, i) { return t.abre[i]; }), achou = TRAP.filter(function (x, i) { return !x.ok && t.trap[i]; }).length;
  var trap = tudo ? '<div class="trap vd"><h5>TWO OF THESE DON’T EXIST. TAP THEM.</h5><div class="tres-b centro">' + TRAP.map(function (x, i) { return '<button type="button" class="pilula grande' + (t.trap[i] ? (x.ok ? ' certo' : ' riscado') : '') + '" data-a="tp" data-n="' + i + '">' + x.w + '</button>'; }).join('') + '</div>'
    + (TRAP.some(function (x, i) { return x.ok && t.trap[i]; }) && achou < 2 ? '<p class="dica-aluno" style="text-align:center">That one is real. Keep looking.</p>' : '')
    + (achou === 2 ? '<p class="aprova" style="text-align:center">People and children are already more than one. They never take an S.</p>' : '') + '</div>' : '';
  return pares(c, TEIMOSOS, t, 'tm', trap);
};

R.grito = function (c) {
  var g = S.grito, n = g.n, fim = n >= GRITO.length, x = GRITO[Math.min(n, GRITO.length - 1)];
  var bancada = '<div class="bancada">' + LUGARES.map(function (l) { return engradado(l.k, l.t, l.d, g.feitos.filter(function (f) { return GRITO[f].k === l.k; }).map(function (f) { return '<span>' + GRITO[f].p + '</span>'; }).join(''), !fim && g.esc === l.k && x.k !== l.k ? ' errado' : ''); }).join('') + '</div>';
  if (fim) return cab(c) + trilha(GRITO, n) + bancada + '<p class="aprova" style="text-align:center">Twelve shouts, five places, and the stall is full.</p>';
  return cab(c) + trilha(GRITO, n) + '<div class="grito vd"><small>VERA SHOUTS</small><b>' + x.n + ' ' + x.w.toUpperCase() + '…!</b><span class="dica-aluno">Say the plural first.</span></div>'
    + (g.esc && g.esc !== x.k ? '<p class="recusa" style="text-align:center">Say ' + x.p + ' again. Spelling first: does it add -ES, change to -IES, or change completely? Only a plain +S goes by sound.</p>' : '') + bancada;
};

R.placas = function (c) {
  var p = S.placas, x = p.sel >= 0 ? PLACAS[p.sel] : null, todas = PLACAS.every(function (_, i) { return p.viu[i]; });
  var foto = '<div class="varal vd" style="background-image:url(' + img('placas') + ')">' + PLACAS.map(function (pl, i) { var v = p.viu[i]; return '<button type="button" class="placa' + (p.sel === i ? ' on' : '') + (v ? (pl.ok ? ' certa' : ' corrigida') : '') + '" data-a="pl" data-n="' + i + '">' + (v && !pl.ok ? '<s>' + pl.s + '</s>' + pl.f : pl.s) + '</button>'; }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd"><small>SIGN ' + (p.sel + 1) + '</small><h2>' + x.s + '</h2></div>' + (p.viu[p.sel] ? '<p class="' + (x.ok ? 'aprova' : 'recusa') + '">' + (x.ok ? '' : x.f + ': ') + x.y + '</p>' : '<p class="dica-aluno">Fix it out loud first, or say it’s right.</p><button type="button" class="btn cheio" data-a="pl-viu">Check it</button>')
    : '<div class="pergunta vd"><small>SIX SIGNS</small><h2>' + (todas ? 'Five wrong, one right. You read the sign, not the rule.' : 'Tap a sign.') + '</h2></div>';
  return cab(c) + foto + '<div class="lado-placas">' + lado + '</div>';
};

R.barraca = function (c) {
  var b = S.barraca;
  if (b.b < 0) return cab(c) + '<div class="barracas">' + BARRACAS.map(function (x, i) { return '<button type="button" class="barraca-c vd" data-a="bc" data-n="' + i + '"><span>' + x.ic + '</span><b>' + x.t + '</b><small>' + x.itens.join(' · ') + '</small></button>'; }).join('') + '</div>';
  var x = BARRACAS[b.b], todos = x.itens.every(function (_, i) { return b.gritou[i]; });
  return cab(c) + '<div class="mesa-barraca"><div class="toldo vd"><div class="topo-t"><span>' + x.ic + '</span><b>' + x.t + '</b></div><div class="itens-b">' + x.itens.map(function (it, i) { return '<button type="button" class="item-b' + (b.gritou[i] ? ' on' : '') + '" data-a="bg" data-n="' + i + '">' + (b.gritou[i] ? '<em>' + (i + 2) + '</em> ' : '') + it + '</button>'; }).join('') + '</div><p class="dica-aluno">Shout each one with a number: “Four peaches!”</p></div>'
    + '<div class="lado-barraca">' + (todos ? '<div class="pergunta vd"><small>CUSTOMER ' + (b.cli + 1) + ' OF 3</small><h2>' + CLIENTES[Math.min(b.cli, 2)].replace('{x}', x.itens[b.cli % 5]) + '</h2></div>'
      + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (b.partes[p.k] ? ' on' : '') + '" data-a="bp" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
      + '<button type="button" class="chip frase erro-ouvido' + (b.erro ? ' on' : '') + '" data-a="be">MISTAKE: TWO TOMATO / CHILDS</button></div>'
      + (b.erro ? '<p class="recusa">More than one needs its ending: two tomatoes. And children, never childs.</p>' : '')
      + (b.cli < 2 ? '<div><button type="button" class="btn" data-a="bcl">Next customer</button></div>' : '<p class="aprova">Your stall is open. Every ending is loud and clear.</p>')
      : '<div class="pergunta vd"><small>SHOUT FIRST</small><h2>Five things, five numbers. Loud, like Vera.</h2></div>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'six eggs\ntwo lemons\n…', 'Your shopping list',
    ['six eggs', 'two loaves', 'ten cherries', 'three peaches', 'four people', 'two children'], ['YOUR BASKET, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now the list, with every ending.' : 'Six things with numbers, and one sentence about the people in your house.'])
    + '<div class="lado-fim"><div class="grande vd"><span>apple<u>s</u> buzz · peach<u>es</u> take a beat</span><span>cherr<u>ies</u> lose the Y · loa<u>ves</u> lose the F</span><span>and <u>people</u> never take an S</span></div>'
    + mostra('fim', 'six eggs<br>two loaves of bread<br>ten cherries<br>three peaches<br>a box of tomatoes<br>Four people live in my house, and two are children.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.cx = function (b, n, v) { S.cx.esc = v; };
TOQUES['cx-prox'] = function () { S.cx = { n: S.cx.n + 1, esc: '' }; };
TOQUES.gg = function (b, n, v) { var e = S.gg, x = GARG[e.n]; if (!x) return false; if (v === x.k) S.gg = { n: e.n + 1, esc: '' }; else e.esc = v; };
TOQUES.gf = function (b, n, v) { S.gf.esc = v; };
TOQUES['gf-prox'] = function () { S.gf = { n: S.gf.n + 1, esc: '' }; };
TOQUES.fc = function (b, n) { S.facas.abre[n] = 1; };
TOQUES.tm = function (b, n) { S.teim.abre[n] = 1; };
TOQUES.tp = function (b, n) { S.teim.trap[n] = 1; };
TOQUES.lg = function (b, n, v) { var g = S.grito, x = GRITO[g.n]; if (!x) return false; if (v === x.k) { g.feitos.push(g.n); g.n++; g.esc = ''; } else g.esc = v; };
TOQUES.pl = function (b, n) { S.placas.sel = n; };
TOQUES['pl-viu'] = function () { var p = S.placas; if (p.sel < 0) return false; p.viu[p.sel] = 1; };
TOQUES.bc = function (b, n) { S.barraca.b = n; };
TOQUES.bg = function (b, n) { S.barraca.gritou[n] = 1; };
TOQUES.bp = function (b, n, v) { S.barraca.partes[v] = !S.barraca.partes[v]; };
TOQUES.be = function () { S.barraca.erro = !S.barraca.erro; };
TOQUES.bcl = function () { S.barraca.cli++; S.barraca.partes = {}; S.barraca.erro = 0; };
