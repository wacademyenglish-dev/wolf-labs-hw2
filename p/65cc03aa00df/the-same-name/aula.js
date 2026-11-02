/* ============================================================
   THE SAME NAME · LOST AND FOUND · LIVE CLASS  05/10/2026
   Main series A1 · possessivo 's (o dono primeiro) · Whose…? ·
   mine / yours / his / hers / ours / theirs
   O MUNDO: o aluno assume o balcão de achados e perdidos da escola. Um
   ARMÁRIO de sete gavetas em madeira escura (CSS), uma por dono — e dois
   donos se chamam Marta. Cada objeto tem uma pista; o aluno acha o dono,
   diz com o dono primeiro (Pedro's jacket) e devolve com It's mine.
   Sem áudio e sem vídeo. A cena IV (ouvir onde caiu o s) é o professor
   quem lê: as frases ficam só no lado do professor.
   Fila: FILA-LIVE-386.md · 029.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'balcao' },
  { k: 'abre', est: 'o', min: 7, img: 'bancada', rot: 'I · Your Desk', t: 'Three things near you right now. Whose are they?', p: 'Pick a card. Point and say it, any words you have. Your teacher taps what you used. Don’t worry about it yet.' },
  { k: 'regra', est: 'f', min: 6, img: 'balcao', rot: 'II · The Owner Comes First', t: 'Three pieces, and they never change places.', p: 'Tap each piece and read the line out loud. The tag builds itself.' },
  { k: 'etiqueta', est: 'f', min: 6, img: 'bancada', rot: 'III · Seven Tags', t: 'Build each tag. Then say it out loud.', p: 'Tap the pieces in order: the owner, the small s, the thing.' },
  { k: 'som', est: 'l', min: 7, img: 'balcao', rot: 'IV · The Sound', t: 'Your teacher reads a line. Where is the small s?', p: 'Listen to your teacher. Tap the word that got the s.' },
  { k: 'gaveta', est: 'f', min: 6, img: 'caixa', rot: 'V · The Drawers', t: 'Seven things, no tags. Read the clue. Find the owner.', p: 'Say “I think it’s …’s, because …”. Then open the drawer.' },
  { k: 'balcao', est: 'o', min: 7, img: 'balcao', rot: 'VI · At the Counter', t: 'People come to the counter.', p: 'Your teacher plays each one. Ask. Listen. Give it back with the right short word.' },
  { k: 'meu', est: 'f', min: 6, extra: 1, img: 'bancada', rot: 'VII · Mine, Yours, His', t: 'When the thing is clear, drop it.', p: 'Read the first line. Pick the short word for the second.' },
  { k: 'dobra', est: 'f', min: 6, extra: 1, img: 'bancada', rot: 'VIII · Fold the Sentence', t: 'This is the long way. Fold it.', p: 'Say the long one. Tap the OWNER. The sentence folds.' },
  { k: 'seu', est: 'o', min: 7, extra: 1, img: 'bancada', rot: 'IX · Your Things', t: 'Real answers now.', p: 'Five questions. Answer in full sentences.' },
  { k: 'fim', est: 'w', min: 6, img: 'caixa', rot: 'X · Counter Closed', t: 'Write the tags for your own things.', p: 'Five things at home and whose they are. Owner first, and one Whose…? question. The red line watches the s. It goes to your My notes.' }
];

var ABRE = [
  { k: 'YOUR DESK', q: 'Three things near you. Whose are they?', fup: 'Is there anything near you that isn’t yours?', st: ['This is my …', 'That’s my sister’s …'], ex: 'This is my phone. That’s my sister’s laptop.' },
  { k: 'NOT YOURS', q: 'Is there something in your house that isn’t yours, but you use it?', fup: 'Whose is it?', st: ['I use my …’s …'], ex: 'I use my father’s car.' },
  { k: 'BORROWED', q: 'Do you have something from a friend right now?', fup: 'When are you giving it back?', st: ['I have my friend’s …'], ex: 'This is my friend’s book. It isn’t my book.' }
];
var FORMAS = [{ k: 's', t: '’S (MY SISTER’S…)' }, { k: 'mine', t: 'MY / MINE' }, { k: 'of', t: 'THE … OF MY SISTER', erro: 1 }, { k: 'whos', t: 'WHO’S / NO S', erro: 1 }];

var REGRA = [{ p: 'Pedro', r: 'The owner comes first.' }, { p: '’s', r: 'Add a small s to the owner. You can hear it.' }, { p: 'jacket', r: 'Then the thing.' }];

var TAGS = [
  { dono: 'Alice', coisa: 'notebook' }, { dono: 'Bruno', coisa: 'bottle' }, { dono: 'Otto', coisa: 'glove' }, { dono: 'Nina', coisa: 'key' },
  { dono: 'Marta Reis', coisa: 'cap', duas: 1 }, { dono: 'Marta Lima', coisa: 'book', duas: 1 }, { dono: 'Pedro', coisa: 'jacket' }
];

var SOM = [
  { ouve: 'Bruno’s bottle is cold.', pal: ['Bruno', 'bottle', 'is', 'cold'], onde: 0 },
  { ouve: 'Alice’s notebook is on the shelf.', pal: ['Alice', 'notebook', 'is', 'on', 'the', 'shelf'], onde: 0 },
  { ouve: 'That is Otto’s glove.', pal: ['That', 'is', 'Otto', 'glove'], onde: 2 },
  { ouve: 'Nina has Pedro’s jacket.', pal: ['Nina', 'has', 'Pedro', 'jacket'], onde: 2 },
  { ouve: 'The book is Marta Lima’s.', pal: ['The', 'book', 'is', 'Marta', 'Lima'], onde: 4 }
];

var PESSOAS = [
  { n: 'Pedro', s: 'plays soccer', ic: '⚽' }, { n: 'Nina', s: 'works at this counter', ic: '🗝️' }, { n: 'Bruno', s: 'swims every day', ic: '🏊' },
  { n: 'Alice', s: 'lives in the library', ic: '📚' }, { n: 'Otto', s: 'is always cold', ic: '🥶' }, { n: 'Marta Reis', s: 'plays in the band', ic: '🥁' }, { n: 'Marta Lima', s: 'takes art class', ic: '🎨' }
];
var OBJETOS = [
  { coisa: 'jacket', pista: 'It has a soccer ball on the back.', d: 0, ic: '🧥' }, { coisa: 'book', pista: 'There’s paint on the cover.', d: 6, ic: '📕' },
  { coisa: 'bottle', pista: 'It smells like the swimming pool.', d: 2, ic: '🧴' }, { coisa: 'cap', pista: 'It has a sticker of the school band.', d: 5, ic: '🧢' },
  { coisa: 'glove', pista: 'Only one. Somebody’s hands are always cold.', d: 4, ic: '🧤' }, { coisa: 'key', pista: 'It opens the counter.', d: 1, ic: '🔑' },
  { coisa: 'notebook', pista: 'There’s a library card inside.', d: 3, ic: '📓' }
];

var VISITAS = [
  { q: 'A BOY', f: 'Hi. I lost a jacket.', p: 'Is this yours?', r: 'Yes! It’s mine. Thank you.', d: 'Here you are. It’s yours.' },
  { q: 'A GIRL', f: 'Is there a notebook here? My friend Alice lost it.', p: 'Is this Alice’s notebook?', r: 'Yes, it’s hers.', d: 'Here you go. Give it to her.' },
  { q: 'A TEACHER', f: 'Where is my glove? Just one!', p: 'Whose glove is it?', r: 'It’s Otto’s. He’s in my class.', d: 'OK. It’s his. Can you take it to him?' },
  { q: 'TWO FRIENDS', f: 'We lost our bottles!', p: 'Are these yours?', r: 'This one is mine. That one isn’t.', d: 'So this is yours, and that’s somebody else’s.' },
  { q: 'YOUR TEACHER', f: 'Oh no. I lost something too. It’s small and black.', p: 'Is this your phone?', r: 'No, that’s not mine. Mine is bigger.', d: 'Whose is it, then? Let’s look.' }
];
var PARTES = [{ k: 'whose', t: 'WHOSE … IS THIS?' }, { k: 'yours', t: 'IS THIS YOURS?' }, { k: 'curta', t: 'IT’S …’S / MINE / HERS' }];

var MEU = [
  { a: 'This is my bag.', q: 'It’s ___.', o: ['mine', 'my', 'me'] }, { a: 'Is this your pen?', q: 'Is it ___?', o: ['yours', 'your', 'you'] },
  { a: 'That’s Pedro’s jacket.', q: 'It’s ___.', o: ['his', 'he', 'him'] }, { a: 'That’s Alice’s notebook.', q: 'It’s ___.', o: ['hers', 'her', 'she'] },
  { a: 'This is our classroom.', q: 'It’s ___.', o: ['ours', 'our', 'us'] }, { a: 'These are the twins’ bikes.', q: 'They’re ___.', o: ['theirs', 'their', 'them'] },
  { a: '___ bag is this?', q: '(asking for the owner)', o: ['Whose', 'Who’s', 'Who'] }, { a: 'The car of my father.', q: 'Better: ___ car.', o: ['My father’s', 'My father', 'Father my'] }
];

var DOBRA = [
  { pal: ['the', 'notebook', 'of', 'Alice'], k: 3, dono: 'Alice', coisa: 'notebook' }, { pal: ['the', 'bottle', 'of', 'Bruno'], k: 3, dono: 'Bruno', coisa: 'bottle' },
  { pal: ['the', 'car', 'of', 'my father'], k: 3, dono: 'My father', coisa: 'car' }, { pal: ['the', 'cap', 'of', 'Marta Reis'], k: 3, dono: 'Marta Reis', coisa: 'cap' }
];

var SEU = [
  { q: 'Whose car do you use most?', fup: 'Is it a good car?', st: ['I use my …’s car.', 'I don’t use a car.'], ex: 'I use my mother’s car.' },
  { q: 'Whose cooking do you miss?', fup: 'What dish?', st: ['I miss my …’s cooking.'], ex: 'I miss my grandmother’s cooking. Her beans!' },
  { q: 'What is an old thing in your bag or your home?', fup: 'Is it your thing, or your family’s?', st: ['An old thing of mine is …'], ex: 'My watch. It’s my grandfather’s watch.' },
  { q: 'Is there something at home that is everybody’s?', fup: 'Who uses it most?', st: ['The … is everybody’s.'], ex: 'The TV is everybody’s, but it’s really my brother’s.' },
  { q: 'Whose phone number do you know by heart?', fup: 'Why that one?', st: ['I know my …’s number.'], ex: 'I know my mom’s number.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, regra: { n: 0 }, tag: { n: 0, feitas: 0, err: -1 }, som: { n: 0, esc: -1 }, gav: { sel: -1, ok: {}, err: -1 },
  balcao: { n: 0, partes: {}, erro: 0, viu: 0 }, meu: { n: 0, esc: -1 }, dobra: { n: 0, dobrou: 0, err: -1 }, seu: { n: 0, foi: {} } };

function etiqueta(dono, coisa, extra) { return '<span class="etiq' + (extra || '') + '"><i class="furo"></i><b>' + dono + '<u>’s</u></b> ' + coisa + '</span>'; }
function armario(abertas, alvo, extra) {
  return '<div class="armario' + (extra || '') + '">' + PESSOAS.map(function (p, i) {
    var o = abertas[i];
    return '<button type="button" class="gaveta' + (o ? ' cheia' : '') + (alvo === i ? ' errada' : '') + '" data-a="gv" data-n="' + i + '"><span class="placa-g">' + p.n + '</span><span class="puxa"></span>' + (o ? '<span class="dentro-g">' + o + '</span>' : '') + '</button>';
  }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>The Same <b>Name</b></h1>'
    + '<p class="sub">Lost and found. Seven drawers, seven names, and two of them are Marta.</p>'
    + '<div class="chipsx"><span class="pilula">Pedro’s</span><span class="pilula">Whose…?</span><span class="pilula">mine · yours</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the counter</button>' + faixaLive() + '</div>'
    + '<div class="capa-arm">' + armario({ 0: '🧥', 5: '🧢' }, -1, ' capa') + etiqueta('Marta Reis', 'cap', ' solta') + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.regra = function (c) {
  var n = S.regra.n;
  return cab(c) + '<div class="foco"><div class="etiq-grande">' + REGRA.map(function (x, i) { return '<button type="button" class="peca-r' + (i < n ? ' on' : '') + (i === n ? ' prox' : '') + '" data-a="rg" data-n="' + i + '">' + (i < n ? x.p : '?') + '</button>'; }).join('') + '</div>'
    + '<div class="linhas-r">' + REGRA.map(function (x, i) { return '<p class="' + (i < n ? 'on' : '') + '"><span>' + (i + 1) + '</span>' + (i < n ? x.r : '…') + '</p>'; }).join('') + '</div>'
    + (n >= 3 ? '<p class="aprova" style="text-align:center">Pedro’s jacket. We never say “the jacket of Pedro”: English uses of for things (the door of the car), not for people.</p>' : '') + '</div>';
};

R.etiqueta = function (c) {
  var t = S.tag, n = t.n, fim = n >= TAGS.length;
  if (fim) return cab(c) + trilha(TAGS, n) + '<div class="varal-t">' + TAGS.map(function (x) { return etiqueta(x.dono, x.coisa); }).join('') + '</div><p class="aprova" style="text-align:center">Seven tags. Two Martas: the s waits for the end of the whole name.</p>';
  var x = TAGS[n], pecas = [x.dono, '’s', x.coisa], tela = ordem(pecas, n + 1), f = t.feitas;
  return cab(c) + trilha(TAGS, n) + '<div class="foco"><div class="etiq-montando">' + (f ? pecas.slice(0, f).join(' ').replace(' ’s', '’s') : '<span class="vaga">owner · ’s · thing</span>') + '</div>'
    + (f >= 3 ? '<p class="aprova" style="text-align:center">Say it: ' + x.dono + '’s ' + x.coisa + '.' + (x.duas ? ' Two Martas: the s goes on the family name.' : '') + '</p><div style="text-align:center"><button type="button" class="btn" data-a="tg-prox">Next tag</button></div>'
      : '<div class="pecas">' + tela.map(function (p, i) { var usada = pecas.indexOf(p) < f; return '<button type="button" class="peca' + (usada ? ' usada' : '') + (t.err === i ? ' errado' : '') + '" data-a="tg" data-n="' + i + '"' + (usada ? ' disabled' : '') + '>' + p + '</button>'; }).join('') + '</div>'
      + (t.err >= 0 ? '<p class="recusa" style="text-align:center">' + (tela[t.err] === '’s' ? 'The s waits for the end of the name.' : 'The owner comes first. Then the s. Then the thing.') + '</p>' : '')) + '</div>';
};

R.som = function (c) {
  var s = S.som, n = s.n, fim = n >= SOM.length, x = SOM[Math.min(n, SOM.length - 1)];
  if (fim) return cab(c) + trilha(SOM, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE LINES</small><h2>The s is small, but you can hear it: Bruno’s, Otto’s, Marta Lima’s.</h2></div></div>';
  var ok = s.esc === x.onde;
  return cab(c) + trilha(SOM, n) + '<div class="foco"><div class="prof-le so-prof"><small>TEACHER · READ THIS ONCE, AT NORMAL SPEED</small><b>' + x.ouve + '</b></div>'
    + '<div class="palavras-s">' + x.pal.map(function (w, i) { return '<button type="button" class="pal-s' + (s.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="sm" data-n="' + i + '">' + w + (ok && i === x.onde ? '<u>’s</u>' : '') + '</button>'; }).join('') + '</div>'
    + (s.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">Say it again in your head. Where is the sound?</p>' : '') + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="sm-prox">Next line</button></div>' : '') + '</div>';
};

R.gaveta = function (c) {
  var g = S.gav, x = g.sel >= 0 ? OBJETOS[g.sel] : null, abertas = {};
  OBJETOS.forEach(function (o, i) { if (g.ok[i]) abertas[o.d] = o.ic; });
  var pilha = '<div class="pilha-o">' + OBJETOS.map(function (o, i) { return g.ok[i] ? '' : '<button type="button" class="obj' + (g.sel === i ? ' on' : '') + '" data-a="gv-sel" data-n="' + i + '"><span>' + o.ic + '</span>' + o.coisa + '</button>'; }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd"><small>THE ' + x.coisa.toUpperCase() + ' · THE CLUE</small><h2>' + x.pista + '</h2></div><p class="dica-aluno">“I think it’s …’s, because …”. Then open the drawer.</p>'
    + (g.err >= 0 ? '<p class="recusa">That’s ' + PESSOAS[g.err].n + '’s drawer. Read the clue again: whose ' + x.coisa + ' is it?</p>' : '')
    : '<div class="pergunta vd"><small>' + Object.keys(g.ok).length + ' OF 7 RETURNED</small><h2>' + (Object.keys(g.ok).length === 7 ? 'Every drawer has its thing.' : 'Pick a thing.') + '</h2></div>';
  return cab(c) + '<div class="mesa-gav"><div>' + armario(abertas, g.err) + '<div class="quem">' + PESSOAS.map(function (p) { return '<span>' + p.ic + ' <b>' + p.n + '</b> ' + p.s + '</span>'; }).join('') + '</div></div><div class="lado-gav">' + pilha + lado + '</div></div>';
};

R.balcao = function (c) {
  var b = S.balcao, n = b.n, fim = n >= VISITAS.length, x = VISITAS[Math.min(n, VISITAS.length - 1)], pt = b.partes[n] || {};
  if (fim) return cab(c) + trilha(VISITAS, n) + '<div class="foco"><div class="pergunta vd"><small>COUNTER CLOSED</small><h2>Mine, yours, his, hers. And when the thing is clear, you drop it.</h2></div></div>';
  return cab(c) + trilha(VISITAS, n) + '<div class="mesa-gav"><div class="cena-b"><div class="balao"><small>' + x.q + '</small><p>“' + x.f + '”</p></div>' + (b.viu ? '<div class="balao voce"><small>YOU</small><p>“' + x.p + '”</p></div><div class="balao"><small>' + x.q + '</small><p>“' + x.r + '”</p></div><div class="balao voce"><small>YOU</small><p>“' + x.d + '”</p></div>' : '<button type="button" class="btn cheio" data-a="bl-viu">Answered · see one way</button>') + '</div>'
    + '<div class="lado-gav"><div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="bl-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (b.erro ? ' on' : '') + '" data-a="bl-e">MISTAKE: WHO’S BAG? / THE BAG OF…</button></div>'
    + (b.erro ? '<p class="recusa">Whose bag asks for the owner. And the owner goes first: Marta’s jacket.</p>' : '') + '<div><button type="button" class="btn" data-a="bl-prox">Next visitor</button></div></div></div>';
};

R.meu = function (c) {
  var m = S.meu, n = m.n, fim = n >= MEU.length, x = MEU[Math.min(n, MEU.length - 1)];
  if (fim) return cab(c) + trilha(MEU, n) + '<div class="foco"><div class="tabela-p"><span>my → <b>mine</b></span><span>your → <b>yours</b></span><span>his → <b>his</b></span><span>her → <b>hers</b></span><span>our → <b>ours</b></span><span>their → <b>theirs</b></span></div></div>';
  var ops = ordem(x.o, n + 2), ok = m.esc >= 0 && ops[m.esc] === x.o[0];
  return cab(c) + trilha(MEU, n) + '<div class="foco"><div class="pergunta vd ja"><h2>' + x.a.replace('___', ok ? '<b>' + x.o[0] + '</b>' : '<span class="vaga">___</span>') + '</h2></div><div class="pergunta vd"><h2>' + x.q.replace('___', ok ? '<b>' + x.o[0] + '</b>' : '<span class="vaga">___</span>') + '</h2></div>'
    + '<div class="tres-b centro">' + ops.map(function (o, i) { return '<button type="button" class="pilula grande' + (m.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="mu" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (m.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">Read both lines out loud. Does a thing come after the word?</p>' : '') + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="mu-prox">Next</button></div>' : '') + '</div>';
};

R.dobra = function (c) {
  var d = S.dobra, n = d.n, fim = n >= DOBRA.length, x = DOBRA[Math.min(n, DOBRA.length - 1)];
  if (fim) return cab(c) + trilha(DOBRA, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR FOLDS</small><h2>The owner jumps to the front and takes the s. “Of” goes away.</h2></div></div>';
  return cab(c) + trilha(DOBRA, n) + '<div class="foco">' + (d.dobrou ? '<div class="etiq-montando dobrado">' + x.dono + '’s ' + x.coisa + '</div><p class="aprova" style="text-align:center">Say both. The short one is the one people use.</p><div style="text-align:center"><button type="button" class="btn" data-a="db-prox">Next</button></div>'
    : '<div class="palavras-s">' + x.pal.map(function (w, i) { return '<button type="button" class="pal-s' + (d.err === i ? ' errado' : '') + '" data-a="db" data-n="' + i + '">' + w + '</button>'; }).join('') + '</div>' + (d.err >= 0 ? '<p class="recusa" style="text-align:center">That’s the thing, not the owner.</p>' : '<p class="dica-aluno" style="text-align:center">Say the long one. Then tap the owner.</p>')) + '</div>';
};

R.seu = function (c) { return sequencia(c, SEU, S.seu, 'seu', 'Real things, real owners.'); };

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My sister’s laptop is on the table.\n…', 'Your tags',
    ['’s ', 'Whose ', ' is this?', 'It’s mine.', 'It’s hers.', 'It’s his.'], ['YOUR DESK, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now owner first, every time.' : 'Five things at home, and whose they are.'])
    + '<div class="lado-fim"><div class="varal-t mini">' + etiqueta('Pedro', 'jacket') + etiqueta('Marta Reis', 'cap') + '</div><div class="grande vd"><span><u>Pedro’s</u> jacket · not the jacket of Pedro</span><span><u>Whose</u> bag is this? · not who’s</span><span>It’s <u>mine</u> · <u>yours</u> · <u>his</u> · <u>hers</u></span></div>'
    + mostra('fim', 'My sister’s laptop is on the table.<br>The blue car is my father’s.<br>Whose umbrella is this? It isn’t mine.<br>The TV is everybody’s, but the remote is my brother’s.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.rg = function (b, n) { if (n !== S.regra.n) return false; S.regra.n++; };
TOQUES.tg = function (b, n) {
  var t = S.tag, x = TAGS[t.n]; if (!x) return false; var pecas = [x.dono, '’s', x.coisa], tela = ordem(pecas, t.n + 1);
  if (tela[n] === pecas[t.feitas]) { t.feitas++; t.err = -1; } else t.err = n;
};
TOQUES['tg-prox'] = function () { S.tag = { n: S.tag.n + 1, feitas: 0, err: -1 }; };
TOQUES.sm = function (b, n) { S.som.esc = n; };
TOQUES['sm-prox'] = function () { S.som = { n: S.som.n + 1, esc: -1 }; };
TOQUES['gv-sel'] = function (b, n) { S.gav.sel = n; S.gav.err = -1; };
TOQUES.gv = function (b, n) { var g = S.gav, x = OBJETOS[g.sel]; if (!x) return false; if (n === x.d) { g.ok[g.sel] = 1; g.sel = -1; g.err = -1; } else g.err = n; };
TOQUES['bl-viu'] = function () { S.balcao.viu = 1; };
TOQUES['bl-p'] = function (b, n, v) { var x = S.balcao; x.partes[x.n] = x.partes[x.n] || {}; x.partes[x.n][v] = !x.partes[x.n][v]; };
TOQUES['bl-e'] = function () { S.balcao.erro = !S.balcao.erro; };
TOQUES['bl-prox'] = function () { S.balcao = { n: S.balcao.n + 1, partes: S.balcao.partes, erro: 0, viu: 0 }; };
TOQUES.mu = function (b, n) { S.meu.esc = n; };
TOQUES['mu-prox'] = function () { S.meu = { n: S.meu.n + 1, esc: -1 }; };
TOQUES.db = function (b, n) { var d = S.dobra, x = DOBRA[d.n]; if (!x) return false; if (n === x.k) d.dobrou = 1; else d.err = n; };
TOQUES['db-prox'] = function () { S.dobra = { n: S.dobra.n + 1, dobrou: 0, err: -1 }; };
