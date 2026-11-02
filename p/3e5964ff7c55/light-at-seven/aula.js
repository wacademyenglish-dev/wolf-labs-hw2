/* ============================================================
   THE LIGHT AT SEVEN · WINDOWS AT NIGHT · LIVE CLASS  05/10/2026
   Main series A1 · present simple na 3ª pessoa: he works / she reads /
   they read (o S tem um lugar só)
   O MUNDO: o aluno acabou de se mudar. Da janela da cozinha ele vê o
   prédio do outro lado do pátio e uma janela que acende às sete toda
   noite. A tela é ESSE PRÉDIO (fachada escura em CSS): cada rotina dita
   com o -s acende uma janela.
   ÁUDIOS (faster-whisper): story.mp3 é a história INTEIRA e a sexta
   dela é outra que a do texto velho (“the light doesn't come on… He
   doesn't wake up”); a transcrição agora é a do áudio. Os n-* (“He
   doesn't make coffee”) nunca eram usados: entram na sexta escura.
   Fila: FILA-LIVE-386.md · 026.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'noite' },
  { k: 'abre', est: 'o', min: 7, img: 'manha', rot: 'I · Someone in Your House', t: 'Think of one person in your house.', p: 'Pick a card. Answer out loud, any words you have. Your teacher taps what you used. Don’t worry about it yet.' },
  { k: 'noites', est: 'l', min: 7, img: 'noite', rot: 'II · Every Night', t: 'Every night, the same four things.', p: 'Listen first. Say the sentence. Then the window across the courtyard shows it.' },
  { k: 'gang', est: 'f', min: 6, img: 'noite', rot: 'III · One S Only', t: 'The S has one place: the front, or the verb. Never both.', p: 'Tap the side that takes the S. Then say the sentence.' },
  { k: 'predio', est: 'f', min: 6, img: 'noite', rot: 'IV · The Building', t: 'Eight windows, eight neighbors.', p: 'Read the card. Pick the verb. Then say the whole sentence with the hour, and the window lights up.' },
  { k: 'grafia', est: 'f', min: 6, img: 'manha', rot: 'V · Four Endings', t: 'Four ways to write the S.', p: 'Look at the end of the word. Pick the ending. Then say it.' },
  { k: 'escuro', est: 'l', min: 7, img: 'uma', rot: 'VI · Friday, Saturday', t: 'Friday: the window stays dark. Saturday: there are two cups.', p: 'Listen first. Then say it. Friday is doesn’t; Saturday is they, and the S goes away.' },
  { k: 'historia', est: 'l', min: 7, extra: 1, img: 'duas', rot: 'VII · The Whole Story', t: 'Listen first. The text is hidden.', p: 'Listen twice. Answer three questions. Then open the text and read it out loud.' },
  { k: 'vizinhos', est: 'o', min: 7, extra: 1, img: 'noite', rot: 'VIII · Curious Neighbors', t: 'Now you invent three neighbors.', p: 'For each window: who they are, what they do, and when.' },
  { k: 'fim', est: 'w', min: 6, img: 'noite', rot: 'IX · Lights Off', t: 'Write your own building.', p: 'Four neighbors, four routines: he / she …s, they … (no s), and the hour. The red line watches the S. It goes to your My notes.' }
];

var TR = {
  'j-wake.mp3': 'He wakes up.', 'j-coffee.mp3': 'He makes coffee.', 'j-read.mp3': 'He reads at the table.', 'j-off.mp3': 'He turns off the light.',
  'd-wake.mp3': 'They wake up.', 'd-coffee.mp3': 'They make coffee.', 'd-read.mp3': 'They read at the table.', 'd-off.mp3': 'They turn off the light.',
  'n-light.mp3': 'The light doesn’t come on.', 'n-wake.mp3': 'He doesn’t wake up.', 'n-coffee.mp3': 'He doesn’t make coffee.', 'n-read.mp3': 'He doesn’t read tonight.',
  'story.mp3': '<b>The Light at Seven.</b> I moved here last week. From my kitchen window, I see one window across the courtyard. At seven o’clock, the light comes on. A man wakes up. He makes coffee. He reads at the table. At half past ten, he turns off the light.<br><br>He does the same thing every night. Monday, Tuesday, Wednesday, Thursday. I know his week better than mine.<br><br>On Friday, the light doesn’t come on. Seven o’clock, quarter past seven, half past seven. The window stays dark. He doesn’t wake up. He doesn’t make coffee. I don’t sleep well.<br><br>On Saturday, the light comes on at eight. There are two cups on the table. They make coffee. They read. At eleven, they turn off the light.<br><br>On Sunday, he sees me at my window. He waves. I go down, and we drink coffee, the three of us. His granddaughter arrived on Friday night. That is all it was.'
};

var ABRE = [
  { k: 'AT SEVEN', q: 'One person in your house: what does that person do at seven in the morning?', fup: 'And you? What do you do at seven?', st: ['My … gets up …', 'She makes …'], ex: 'My mother gets up at six. She makes coffee at seven.' },
  { k: 'AT NIGHT', q: 'And what does that person do at night?', fup: 'What time does that person go to bed?', st: ['At night he …', 'She goes to bed at …'], ex: 'At night my father watches TV. He goes to bed at eleven.' },
  { k: 'ON SUNDAY', q: 'What does your best friend do on Sunday?', fup: 'Do you do it too?', st: ['On Sunday she …'], ex: 'On Sunday my friend plays soccer.' }
];
var FORMAS = [{ k: 's', t: 'HE / SHE …S' }, { k: 'they', t: 'THEY … (NO S)' }, { k: 'sems', t: 'SHE WORK / HE GO', erro: 1 }, { k: 'dupla', t: 'THEY WORKS', erro: 1 }];

var ACOES = [{ au: 'j-wake.mp3', hora: '7:00', ic: '⏰' }, { au: 'j-coffee.mp3', hora: '7:10', ic: '☕' }, { au: 'j-read.mp3', hora: '8:00', ic: '📖' }, { au: 'j-off.mp3', hora: '10:30', ic: '🌙' }];

var GANG = [
  { a: 'The dog', b: 'bark', lado: 1, say: 'The dog barks.' }, { a: 'The dogs', b: 'bark', lado: 0, say: 'The dogs bark.' },
  { a: 'My brother', b: 'work', lado: 1, say: 'My brother works.' }, { a: 'The lights', b: 'come on', lado: 0, say: 'The lights come on.' },
  { a: 'She', b: 'read', lado: 1, say: 'She reads.' }, { a: 'The neighbors', b: 'sleep', lado: 0, say: 'The neighbors sleep.' },
  { a: 'It', b: 'open at nine', lado: 1, say: 'It opens at nine.' }, { a: 'My friends', b: 'live here', lado: 0, say: 'My friends live here.' },
  { a: 'The bus', b: 'stop here', lado: 1, say: 'The bus stops here.' }, { a: 'The children', b: 'play outside', lado: 0, say: 'The children play outside.' }
];

var VIZ = [
  { n: 'Mrs. Lee', o: ['cooks', 'cook'], r: 'dinner', h: 'at seven', pos: 0, ic: '🍲' },
  { n: 'Tom', o: ['watchs TV', 'watches TV'], r: '', h: 'at nine', pos: 5, ic: '📺', d: '-ch, -sh, -s, -x, -o: -es.' },
  { n: 'The twins', o: ['play the piano', 'plays the piano'], r: '', h: 'at six', pos: 2, ic: '🎹', d: 'Two people: no S on the verb.' },
  { n: 'Ana', o: ['studys', 'studies'], r: '', h: 'at ten', pos: 7, ic: '📚', d: 'Consonant + y: -ies.' },
  { n: 'Mr. Park', o: ['goes to bed', 'go to bed'], r: '', h: 'at eleven', pos: 9, ic: '🛏️', d: 'go → goes.' },
  { n: 'The cat', o: ['sleep on the window', 'sleeps on the window'], r: '', h: 'all day', pos: 12, ic: '🐈' },
  { n: 'Rosa', o: ['has dinner', 'haves dinner'], r: '', h: 'at eight', pos: 14, ic: '🍽️', d: 'have → has.' },
  { n: 'Sam', o: ['washs the dishes', 'washes the dishes'], r: '', h: 'at midnight', pos: 11, ic: '🧽', d: '-sh: -es.' }
];
var CERTO_V = ['cooks', 'watches TV', 'play the piano', 'studies', 'goes to bed', 'sleeps on the window', 'has dinner', 'washes the dishes'];

var FINAIS = ['+ S', '+ ES', 'Y → IES', 'SPECIAL'];
var GRAFIA = [{ v: 'work', k: 0, s: 'works' }, { v: 'watch', k: 1, s: 'watches' }, { v: 'study', k: 2, s: 'studies' }, { v: 'have', k: 3, s: 'has' }, { v: 'go', k: 1, s: 'goes' }, { v: 'play', k: 0, s: 'plays', d: 'Vowel + y: just -s.' }, { v: 'wash', k: 1, s: 'washes' }, { v: 'do', k: 1, s: 'does' }];

var SEXTA = ['n-light.mp3', 'n-wake.mp3', 'n-coffee.mp3', 'n-read.mp3'];
var SABADO = [{ au: 'd-wake.mp3', ele: 'He wakes up.' }, { au: 'd-coffee.mp3', ele: 'He makes coffee.' }, { au: 'd-read.mp3', ele: 'He reads at the table.' }, { au: 'd-off.mp3', ele: 'He turns off the light.' }];

var PERG_H = [{ q: 'What time does he wake up?', a: 'He wakes up at seven o’clock.' }, { q: 'What happens on Friday?', a: 'The light doesn’t come on. The window stays dark.' }, { q: 'Who is with him on Saturday?', a: 'His granddaughter. They make coffee together.' }];

var JANELAS_V = ['THE MAN ON THE 3RD FLOOR', 'THE WOMAN WITH THE DOG', 'THE FAMILY ON THE 1ST FLOOR'];
var PARTES_V = [{ k: 'verbo', t: 'HE / SHE …S' }, { k: 'hora', t: 'AT … (TIME)' }, { k: 'mais', t: 'EVERY DAY / ON SUNDAY' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, noites: { acesas: {} }, gang: { n: 0, esc: -1 }, predio: { sel: -1, ok: {}, esc: {} }, grafia: { n: 0, esc: -1 },
  escuro: { fase: 0, n: 0 }, hist: { foi: {} }, viz: { n: 0, partes: {}, erro: 0 } };

function predio(acesas, especial) {
  var j = []; for (var i = 0; i < 15; i++) { var a = acesas[i]; j.push('<span class="jan' + (a ? ' acesa' : '') + (especial === i ? ' dele' : '') + '">' + (a && a !== 1 ? '<i>' + a + '</i>' : '') + '</span>'); }
  return '<div class="predio"><div class="telhado"></div><div class="janelas">' + j.join('') + '</div><div class="porta-p"></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>The Light at <b>Seven</b></h1>'
    + '<p class="sub">He wakes up at seven. He makes coffee. He reads. Every night, the same window.</p>'
    + '<div class="chipsx"><span class="pilula">he works</span><span class="pilula">she reads</span><span class="pilula">they read</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Look out of the window</button>' + faixaLive() + '</div>'
    + '<div class="capa-predio">' + predio({ 7: '☕' }, 7) + '<span class="relogio-c">7:00 PM</span></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.noites = function (c) {
  var e = S.noites, ac = {}; ACOES.forEach(function (x, i) { if (e.acesas[i]) ac[7] = x.ic; });
  var todas = ACOES.every(function (_, i) { return e.acesas[i]; });
  return cab(c) + '<div class="mesa-predio">' + predio(ac, 7) + '<div class="lado-predio">' + ACOES.map(function (x, i) {
    var ouviu = (S.ouviu || {})[x.au];
    return '<div class="acao vd' + (e.acesas[i] ? ' feita' : '') + '"><span class="hora-a">' + x.hora + '</span>' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div>'
      + (e.acesas[i] ? '<span class="ic-a">' + x.ic + '</span>' : '<button type="button" class="pilula" data-a="nt" data-n="' + i + '"' + (ouviu ? '' : ' disabled') + '>Said it</button>') + '</div>';
  }).join('') + (todas ? '<p class="aprova">Four things, every night. He wakes up, he makes, he reads, he turns off: the S every time.</p>' : '') + '</div></div>';
};

R.gang = function (c) {
  var g = S.gang, n = g.n, fim = n >= GANG.length, x = GANG[Math.min(n, GANG.length - 1)];
  if (fim) return cab(c) + trilha(GANG, n) + '<div class="foco"><div class="pergunta vd"><small>TEN SENTENCES</small><h2>One S per sentence. The dog barks. The dogs bark.</h2></div></div>';
  var ok = g.esc === x.lado;
  var esq = ok && x.lado === 0 ? x.a : x.a, dir = ok && x.lado === 1 ? x.b.replace(/^(\w+)/, function (w) { return w === 'stop' ? 'stops' : w === 'open' ? 'opens' : w + 's'; }) : x.b;
  return cab(c) + trilha(GANG, n) + '<div class="gangorra' + (ok ? ' l' + x.lado : '') + '"><button type="button" class="prato' + (g.esc === 0 ? (ok ? ' certo' : ' errado') : '') + '" data-a="gg" data-n="0"><small>THE FRONT</small><b>' + esq + '</b></button><span class="eixo-g">S</span><button type="button" class="prato' + (g.esc === 1 ? (ok ? ' certo' : ' errado') : '') + '" data-a="gg" data-n="1"><small>THE VERB</small><b>' + dir + '</b></button></div>'
    + (g.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">Look at the front. Does it already have an S, or is it he, she, it?</p>' : '')
    + (ok ? '<p class="aprova" style="text-align:center">Say it: ' + x.say + '</p><div style="text-align:center"><button type="button" class="btn" data-a="gg-prox">Next</button></div>' : '');
};

R.predio = function (c) {
  var p = S.predio, x = p.sel >= 0 ? VIZ[p.sel] : null, ac = {};
  VIZ.forEach(function (v, i) { if (p.ok[i]) ac[v.pos] = v.ic; });
  var cartas = '<div class="vizinhos">' + VIZ.map(function (v, i) { return '<button type="button" class="viz' + (p.sel === i ? ' on' : '') + (p.ok[i] ? ' feito' : '') + '" data-a="pr-sel" data-n="' + i + '"><span>' + v.ic + '</span><b>' + v.n + '</b><small>' + v.h + '</small></button>'; }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd"><small>' + x.n.toUpperCase() + ' · ' + x.h.toUpperCase() + '</small><h2>' + x.n + ' ' + (p.ok[p.sel] ? '<b>' + CERTO_V[p.sel] + '</b>' : '<span class="vaga">____</span>') + ' ' + x.h + '.</h2></div>'
    + (p.ok[p.sel] ? (x.d ? '<p class="aprova">' + x.d + '</p>' : '<p class="aprova">The window lights up. Say the whole sentence.</p>') : '<div class="tres-b">' + x.o.map(function (o) { return '<button type="button" class="pilula grande' + (p.esc[p.sel] === o ? ' errado' : '') + '" data-a="pr" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>' + (p.esc[p.sel] ? '<p class="recusa">The window stays dark. Say it again: one person, or two?</p>' : ''))
    : '<div class="pergunta vd"><small>' + Object.keys(p.ok).length + ' OF 8 LIT</small><h2>Pick a neighbor.</h2></div>';
  return cab(c) + '<div class="mesa-predio">' + predio(ac, -1) + '<div class="lado-predio">' + cartas + lado + '</div></div>';
};

R.grafia = function (c) {
  var g = S.grafia, n = g.n, fim = n >= GRAFIA.length, x = GRAFIA[Math.min(n, GRAFIA.length - 1)];
  if (fim) return cab(c) + trilha(GRAFIA, n) + '<div class="foco"><div class="placas-f">' + GRAFIA.map(function (y) { return '<span>he ' + y.s + '</span>'; }).join('') + '</div></div>';
  var ok = g.esc === x.k;
  return cab(c) + trilha(GRAFIA, n) + '<div class="foco"><div class="palavra-g vd"><small>HE / SHE / IT</small><b>' + (ok ? x.s : x.v + ' → ?') + '</b></div>'
    + '<div class="tres-b centro">' + FINAIS.map(function (o, i) { return '<button type="button" class="pilula grande' + (g.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="gf" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (g.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">Look at the last letters again.</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">' + (x.d || 'Say it: he ' + x.s + '.') + '</p><div style="text-align:center"><button type="button" class="btn" data-a="gf-prox">Next</button></div>' : '');
};

R.escuro = function (c) {
  var e = S.escuro, sexta = e.fase === 0, lista = sexta ? SEXTA : SABADO.map(function (x) { return x.au; });
  var n = e.n, fim = n >= lista.length;
  if (fim && !sexta) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>FRIDAY AND SATURDAY</small><h2>He doesn’t wake up. He doesn’t make coffee. Then two cups: they make coffee, they read. No S.</h2></div></div>';
  if (fim && sexta) return cab(c) + '<div class="mesa-esc"><div class="foto-e vd" style="background-image:url(' + img('uma') + ');filter:brightness(.35)"><span>FRIDAY · 7:30 PM · DARK</span></div><div class="foco"><div class="pergunta vd"><small>FRIDAY</small><h2>Four things he doesn’t do. doesn’t + the verb, no S.</h2></div><div><button type="button" class="btn cheio" data-a="es-sab">Saturday →</button></div></div></div>';
  var au = lista[n], ouviu = (S.ouviu || {})[au];
  return cab(c) + trilha(lista, n) + '<div class="mesa-esc"><div class="foto-e vd" style="background-image:url(' + img(sexta ? 'uma' : 'duas') + ')' + (sexta ? ';filter:brightness(.35)' : '') + '"><span>' + (sexta ? 'FRIDAY · DARK' : 'SATURDAY · 8:00 PM · TWO CUPS') + '</span></div>'
    + '<div class="foco">' + (sexta ? '' : '<div class="pergunta vd ja"><small>USUALLY</small><h2>' + SABADO[n].ele + '</h2></div>') + '<div class="toca-linha vd">' + tocar(au) + '<div>' + transcricao(au, TR[au]) + '</div></div>'
    + (ouviu ? '<p class="dica-aluno">Say it out loud.' + (sexta ? '' : ' He wakes up → they wake up: the S goes away.') + '</p><div><button type="button" class="btn" data-a="es-prox">Next</button></div>' : '') + '</div></div>';
};

R.historia = function (c) {
  var e = S.hist, ouviu = (S.ouviu || {})['story.mp3'];
  return cab(c) + '<div class="mesa-hist"><div class="lado-h"><div class="toca-linha vd"><span class="ic-a">🎧</span>' + tocar('story.mp3') + '<span>The Light at Seven · the whole story</span></div>'
    + (ouviu ? PERG_H.map(function (q, i) { return '<div class="pq"><span>' + (i + 1) + '</span><p>' + q.q + '</p>' + mostra('hs' + i, q.a) + '</div>'; }).join('') : '<p class="dica-aluno">Listen twice. Then the questions.</p>') + '</div>'
    + '<div class="lado-h2">' + transcricao('story.mp3', TR['story.mp3']) + '</div></div>';
};

R.vizinhos = function (c) {
  var v = S.viz, n = v.n, fim = n >= JANELAS_V.length, pt = v.partes[n] || {}, ac = {};
  for (var i = 0; i < n; i++) ac[[3, 8, 13][i]] = ['👤', '🐕', '👪'][i];
  if (fim) return cab(c) + '<div class="mesa-predio">' + predio(ac, -1) + '<div class="lado-predio"><p class="aprova">Three neighbors, three routines, and the S in its place.</p></div></div>';
  ac[[3, 8, 13][n]] = 1;
  return cab(c) + trilha(JANELAS_V, n) + '<div class="mesa-predio">' + predio(ac, [3, 8, 13][n]) + '<div class="lado-predio"><div class="pergunta vd"><small>WINDOW ' + (n + 1) + '</small><h2>' + JANELAS_V[n] + '</h2></div>'
    + fala('vz' + n, ['He gets up at …', 'She walks the dog …', 'They have dinner at …'], [])
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES_V.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="vz-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (v.erro ? ' on' : '') + '" data-a="vz-e">MISTAKE: SHE WORK / HE GO</button></div>'
    + (v.erro ? '<p class="recusa">He, she, it: she works, he goes.</p>' : '') + '<div><button type="button" class="btn" data-a="vz-prox">Next window</button></div></div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'The woman on the 2nd floor gets up at six. She …\n…', 'Your building',
    ['He gets up at ', 'She works ', 'They ', ' goes ', ' has ', ' watches '], ['YOUR PERSON, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now your building, with the S in its place.' : 'Four neighbors in your building: what they do, and when.'])
    + '<div class="lado-fim"><div class="grande vd"><span>he work<u>s</u> · she watch<u>es</u> · it stud<u>ies</u></span><span>he <u>has</u> · he <u>goes</u> · he <u>does</u></span><span>they work · the dogs bark · <u>one S only</u></span></div>'
    + mostra('fim', 'The man on the 3rd floor gets up at six. He goes to work by bike.<br>The woman with the dog walks it at seven.<br>The family on the 1st floor has dinner at eight. They watch TV after.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.nt = function (b, n) { if (!(S.ouviu || {})[ACOES[n].au]) return false; S.noites.acesas[n] = 1; };
TOQUES.gg = function (b, n) { S.gang.esc = n; };
TOQUES['gg-prox'] = function () { S.gang = { n: S.gang.n + 1, esc: -1 }; };
TOQUES['pr-sel'] = function (b, n) { S.predio.sel = n; };
TOQUES.pr = function (b, n, v) { var p = S.predio; if (p.sel < 0) return false; if (v === CERTO_V[p.sel]) p.ok[p.sel] = 1; else p.esc[p.sel] = v; };
TOQUES.gf = function (b, n) { S.grafia.esc = n; };
TOQUES['gf-prox'] = function () { S.grafia = { n: S.grafia.n + 1, esc: -1 }; };
TOQUES['es-prox'] = function () { S.escuro.n++; };
TOQUES['es-sab'] = function () { S.escuro = { fase: 1, n: 0 }; };
TOQUES['vz-p'] = function (b, n, v) { var z = S.viz; z.partes[z.n] = z.partes[z.n] || {}; z.partes[z.n][v] = !z.partes[z.n][v]; };
TOQUES['vz-e'] = function () { S.viz.erro = !S.viz.erro; };
TOQUES['vz-prox'] = function () { S.viz.n++; S.viz.erro = 0; };
