/* ============================================================
   THE AUCTION HOUSE · GOING ONCE, GOING TWICE · LIVE CLASS  05/10/2026
   Main series A1 · a / an / the + adjective · big/small · old/new ·
   heavy/light · cheap/expensive
   O MUNDO: o leilão da noite. Fichas de lote ESCURAS (bordô e dourado),
   o martelo que bate SOLD e o lance que só sobe quando a frase está certa.
   Vídeo mantido (BBC Learning English, ceOhxZjDt-g, 0:05–1:08).
   ÁUDIOS: os 23 da pasta não eram usados pelo remaster de 16/09. Agora
   entram: v-list1/2 (as listas do vídeo, devagar) depois do vídeo; os
   j-* na escuta “a ou an?”; os b-* na balança. Conferidos no
   faster-whisper (j-oldtv: o whisper ouve “and”, é “an old TV”).
   Fila: FILA-LIVE-386.md · 021.
   ============================================================ */
var YT = 'ceOhxZjDt-g';
var L = [
  { k: 'capa', est: null, img: 'salao' },
  { k: 'tesouro', est: 'o', min: 7, img: 'lampada', rot: 'I · Your Treasure', t: 'One special thing in your home.', p: 'Show it to the camera. Together, you make its label. Then three questions.' },
  { k: 'palavras', est: 'l', img: 'leilao', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'leilao', rot: 'III · Catch Six', t: 'Two boys play a memory game with a list of things.', p: 'Six words. Tap each one when you hear it. Then hear the list again, slower.' },
  { k: 'falas', est: 'l', extra: 1, img: 'leilao', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'l', min: 4, img: 'lampada', rot: 'V · A or An?', t: 'Two little words that sound different.', p: 'Listen to the pairs. Then the ear test: a or an? Then say yours.' },
  { k: 'pulo', est: 'f', min: 6, img: 'relogio', rot: 'VI · The Jump', t: 'The describing word jumps in front of the thing. Then a or an?', p: 'First listen: a or an? Then pick the right label.' },
  { k: 'catalogo', est: 'o', min: 7, img: 'relogio', rot: 'VII · The Misprint', t: 'The catalog has mistakes.', p: 'Say the right label out loud. Then turn the card: it gets the AUTHENTIC stamp.' },
  { k: 'balanca', est: 'o', min: 7, img: 'balanca', rot: 'VIII · The Scale', t: 'One word from the auctioneer. You say the opposite.', p: 'In a full sentence. The scale tips when you say it.' },
  { k: 'lance', est: 'f', min: 6, extra: 1, img: 'salao', rot: 'IX · The Bid', t: 'You and your teacher: the same lots.', p: 'Three bids per lot. The price goes up only when the sentence is right. On the third bid, the hammer falls.' },
  { k: 'memoria', est: 'o', min: 7, extra: 1, img: 'leilao', rot: 'X · The Memory Game', t: 'Like the boys in the video. Ten seconds, then the curtain closes.', p: 'Say every lot you remember, with a / an and the describing word.' },
  { k: 'venda', est: 'o', min: 7, extra: 1, img: 'duas', rot: 'XI · Sell It to Me', t: 'Now you are the auctioneer.', p: 'Pick a room. Show one thing and sell it in 30 seconds. Three rounds.' },
  { k: 'conversa', est: 'o', min: 7, extra: 1, img: 'lampada', rot: 'XII · After the Sale', t: 'The sale is over. A coffee, and five questions.', p: 'Your teacher asks about the things in your life.' },
  { k: 'fim', est: 'w', min: 6, img: 'salao', rot: 'XIII · Lot 00', t: 'The last lot of the night is yours.', p: 'Write the catalog of your own room: five lots, a / an the first time, the after that. The red line watches. It goes to your My notes.' }
];

var COISAS = ['watch', 'book', 'cup', 'photo', 'toy', 'guitar', 'umbrella', 'ring'];
var ADJS = ['big', 'small', 'old', 'new', 'heavy', 'light', 'cheap', 'expensive'];
var PERG_T = [
  { q: 'Is it new or old?', fup: 'Is it big or small?' }, { q: 'How old is it?', fup: 'Is it old or new?' },
  { q: 'What color is it?', fup: 'How much is it?' }
];

var PAL_V = ['big', 'small', 'expensive', 'cheap', 'heavy', 'light'];
var TR = {
  'v-list1.mp3': 'Let us play a game. Can you remember these things? We have a big cuddly toy, a small cuddly toy, an expensive computer, a cheap computer, a heavy box, a light box, a new TV, an old TV.',
  'v-list2.mp3': 'Can you remember these things? We have a big pencil, a small pencil, an expensive watch, a cheap watch, a heavy bag, a light bag, a new phone, an old phone.'
};

var OUVE = [
  { au: 'j-oldtoy.mp3', ok: 'an', t: 'an old toy' }, { au: 'j-heavybox.mp3', ok: 'a', t: 'a heavy box' }, { au: 'j-expwatch.mp3', ok: 'an', t: 'an expensive watch' },
  { au: 'j-newphone.mp3', ok: 'a', t: 'a new phone' }, { au: 'j-oldtv.mp3', ok: 'an', t: 'an old TV' }, { au: 'j-lightbag.mp3', ok: 'a', t: 'a light bag' }
];
var PULO = [
  { coisa: 'clock', adj: 'old', ok: 'an old clock', trap: [{ t: 'a old clock', k: 'som' }, { t: 'an clock old', k: 'ordem' }] },
  { coisa: 'lamp', adj: 'small', ok: 'a small lamp', trap: [{ t: 'a lamp small', k: 'ordem' }, { t: 'an small lamp', k: 'som' }] },
  { coisa: 'watch', adj: 'expensive', ok: 'an expensive watch', trap: [{ t: 'a expensive watch', k: 'som' }, { t: 'a watch expensive', k: 'ordem' }] },
  { coisa: 'box', adj: 'heavy', ok: 'a heavy box', trap: [{ t: 'an heavy box', k: 'som' }, { t: 'a box heavy', k: 'ordem' }] },
  { coisa: 'umbrella', adj: 'new', ok: 'a new umbrella', trap: [{ t: 'an new umbrella', k: 'som2' }, { t: 'a umbrella new', k: 'ordem' }] },
  { coisa: 'umbrella', adj: '', ok: 'an umbrella', trap: [{ t: 'a umbrella', k: 'som' }, { t: 'umbrella', k: 'sem' }] }
];
var POR = { som: 'Listen to the sound after the little word: a vowel sound takes AN.', som2: 'The word right after a/an decides. NEW starts with N: a new umbrella.', ordem: 'The describing word jumps in front of the thing.', sem: 'One thing needs a little word: an umbrella.' };

var LOTES = [
  { n: 'LOT 01', erro: 'a apple box', ok: 'an apple box', k: 'som' }, { n: 'LOT 02', erro: 'lamp small', ok: 'a small lamp', k: 'ordem' },
  { n: 'LOT 03', erro: 'a old clock', ok: 'an old clock', k: 'som' }, { n: 'LOT 04', erro: 'an big vase', ok: 'a big vase', k: 'som' },
  { n: 'LOT 05', erro: 'a mirror heavy', ok: 'a heavy mirror', k: 'ordem' }, { n: 'LOT 06', erro: 'a expensive ring', ok: 'an expensive ring', k: 'som' },
  { n: 'LOT 07', erro: 'an new radio', ok: 'a new radio', k: 'som' }, { n: 'LOT 08', erro: 'a chair cheap', ok: 'a cheap chair', k: 'ordem' }
];
var ROT = { som: 'A / AN IS WRONG', ordem: 'THE ORDER IS WRONG' };

var BAL = [
  { a: 'heavy', b: 'light', f: 'The box isn’t heavy. It’s light.' }, { a: 'old', b: 'new', f: 'The radio isn’t old. It’s new.' },
  { a: 'cheap', b: 'expensive', f: 'The ring isn’t cheap. It’s expensive.', au: 'b-cheap.mp3' }, { a: 'big', b: 'small', f: 'The vase isn’t big. It’s small.' },
  { a: 'new', b: 'old', f: 'The chair isn’t new. It’s old.' }, { a: 'expensive', b: 'cheap', f: 'The lamp isn’t expensive. It’s cheap.' },
  { a: 'light', b: 'heavy', f: 'The mirror isn’t light. It’s heavy.', au: 'b-light.mp3' }, { a: 'small', b: 'big', f: 'The clock isn’t small. It’s big.', au: 'b-small.mp3' }
];
BAL[1].au = 'b-old.mp3';

var LANCE = [
  { n: 'LOT 03', coisa: 'clock', preco: 40, p: [
    { cue: 'It is ___.', ok: 'It is an old clock.', trap: [{ t: 'It is a old clock.', k: 'som' }, { t: 'It is an clock old.', k: 'ordem' }] },
    { cue: '___ clock is ___.', ok: 'The clock is heavy.', trap: [{ t: 'A clock is heavy.', k: 'the' }, { t: 'The heavy is clock.', k: 'ordem' }] },
    { cue: '___, please!', ok: 'The old clock, please!', trap: [{ t: 'An old clock, please!', k: 'the' }, { t: 'The clock old, please!', k: 'ordem' }] }] },
  { n: 'LOT 04', coisa: 'lamp', preco: 25, p: [
    { cue: 'It is ___.', ok: 'It is a small lamp.', trap: [{ t: 'It is an small lamp.', k: 'som' }, { t: 'It is a lamp small.', k: 'ordem' }] },
    { cue: '___ lamp is ___.', ok: 'The lamp is cheap.', trap: [{ t: 'A lamp is cheap.', k: 'the' }, { t: 'The cheap is lamp.', k: 'ordem' }] },
    { cue: '___, please!', ok: 'The small lamp, please!', trap: [{ t: 'A small lamp, please!', k: 'the' }, { t: 'The lamp small, please!', k: 'ordem' }] }] },
  { n: 'LOT 06', coisa: 'ring', preco: 300, p: [
    { cue: 'It is ___.', ok: 'It is an expensive ring.', trap: [{ t: 'It is a expensive ring.', k: 'som' }, { t: 'It is a ring expensive.', k: 'ordem' }] },
    { cue: '___ ring is ___.', ok: 'The ring is small.', trap: [{ t: 'A ring is small.', k: 'the' }, { t: 'An ring is small.', k: 'som' }] },
    { cue: '___, please!', ok: 'The expensive ring, please!', trap: [{ t: 'An expensive ring, please!', k: 'the' }, { t: 'The ring expensive, please!', k: 'ordem' }] }] },
  { n: 'LOT 05', coisa: 'mirror', preco: 80, p: [
    { cue: 'It is ___.', ok: 'It is a big mirror.', trap: [{ t: 'It is an big mirror.', k: 'som' }, { t: 'It is a mirror big.', k: 'ordem' }] },
    { cue: '___ mirror is ___.', ok: 'The mirror is old.', trap: [{ t: 'A mirror is old.', k: 'the' }, { t: 'The old is mirror.', k: 'ordem' }] },
    { cue: '___, please!', ok: 'The big mirror, please!', trap: [{ t: 'A big mirror, please!', k: 'the' }, { t: 'The mirror big, please!', k: 'ordem' }] }] }
];
var POR_L = { som: 'The sound after the little word decides: a vowel sound takes AN.', ordem: 'The describing word comes before the thing.', the: 'We know this one now. The second time: THE.' };

var MEMO = [{ t: 'an old clock', ic: '🕰️' }, { t: 'a small lamp', ic: '💡' }, { t: 'a heavy box', ic: '📦' }, { t: 'an expensive ring', ic: '💍' }, { t: 'a big mirror', ic: '🪞' }, { t: 'a new radio', ic: '📻' }, { t: 'a cheap chair', ic: '🪑' }, { t: 'an apple box', ic: '🍎' }];

var SALAS = [{ k: 'YOUR BEDROOM', q: 'Show me something from your bedroom. Sell it!' }, { k: 'YOUR KITCHEN', q: 'Show me something from your kitchen. Sell it!' }, { k: 'YOUR BAG', q: 'Show me something from your bag or your pocket. Sell it!' }, { k: 'YOUR DESK', q: 'Show me something on your desk. Sell it!' }];
var FORMAS_V = [{ k: 'primeira', t: 'A / AN + WORD + THING' }, { k: 'segunda', t: 'THE + THING (SECOND TIME)' }, { k: 'preco', t: 'IT’S $… / IT’S CHEAP…' }];
var ARM_V = [{ k: 'ordem', t: 'THING + WORD' }, { k: 'som', t: 'A + VOWEL SOUND' }];

var CONVERSA = [
  { q: 'What is an old thing in your home?', fup: 'Is it a nice thing?', st: ['An old thing in my home is a / an …'], ex: 'An old radio. It’s small and brown. It’s very nice.' },
  { q: 'What is an expensive thing in your home?', fup: 'Is it new or old?', st: ['An expensive … '], ex: 'A big TV. It’s new and very expensive!' },
  { q: 'Old things or new things?', fup: 'An old thing in your living room: what is it?', st: ['Old things.', 'New things.'], ex: 'Old things. An old chair is in my living room.' },
  { q: 'What is a cheap thing in your life?', fup: 'How much is it?', st: ['A cheap … is …'], ex: 'A cheap coffee. It’s two dollars.' },
  { q: 'Your turn. Ask me two questions about my things.', fup: 'Now ask me: What is an old thing in your home?', st: ['What is …?', 'Is it a / an …?'], ex: 'What is an old thing in your home?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  tes: { coisa: '', adjs: [], n: 0, foi: {} }, video: { p: 0, ouviu: {} }, pulo: { fase: 0, n: 0, esc: '' }, cat: { virado: {} }, bal: { n: 0, viu: 0 },
  lance: { l: 0, s: 0, esc: '', preco: 0, sold: {} }, memo: { fase: 0, lembrou: {} }, venda: { sala: -1, r: 0, formas: {}, arm: {} }, conv: { n: 0, foi: {} } };

function artigo(w) { return /^[aeiou]/.test(w) && !/^(uni|use|eu|one)/.test(w) ? 'an' : 'a'; }
function rotulo() { var t = S.tes; if (!t.coisa) return ''; var ORD = ['cheap', 'expensive', 'big', 'small', 'heavy', 'light', 'old', 'new'], palavras = t.adjs.slice().sort(function (a, b) { return ORD.indexOf(a) - ORD.indexOf(b); }).concat([t.coisa]);   /* a ordem do inglês: tamanho antes de idade */ return artigo(palavras[0]) + ' ' + palavras.join(' '); }
function ficha(n, txt, extra) { return '<div class="ficha' + (extra || '') + '"><small>' + n + '</small><b>' + txt + '</b></div>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>The Auction <b>House</b></h1>'
    + '<p class="sub">Eight things arrive tonight. Nothing sells without a good label.</p>'
    + '<div class="chipsx"><span class="pilula">a</span><span class="pilula">an</span><span class="pilula">the</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the doors</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('salao') + '" alt="An empty auction hall with red curtains">' + ficha('LOT 03 · $40', 'an old clock', ' capa-f') + '</div></div>';
};

R.tesouro = function (c) {
  var t = S.tes, r = rotulo();
  return cab(c) + '<div class="mesa-tes"><div class="lado-tes"><div class="partes so-prof"><h5>WHAT IS IT?</h5>' + COISAS.map(function (x) { return '<button type="button" class="chip frase' + (t.coisa === x ? ' on' : '') + '" data-a="ts-c" data-v="' + x + '">' + x + '</button>'; }).join('') + '</div>'
    + '<div class="partes so-prof"><h5>TWO DESCRIBING WORDS</h5>' + ADJS.map(function (x) { return '<button type="button" class="chip frase' + (t.adjs.indexOf(x) >= 0 ? ' on' : '') + '" data-a="ts-a" data-v="' + x + '">' + x + '</button>'; }).join('') + '</div>'
    + (r ? ficha('LOT 00 · NOT FOR SALE', r, ' grande') + '<p class="dica-aluno">Read your label out loud.</p>' : '<p class="dica-aluno">Show your thing to the camera.</p>') + '</div>'
    + '<div class="lado-tes2">' + (r ? sequencia({ est: 'o', rot: '', t: '', p: '' }, PERG_T.map(function (q) { return { q: q.q, fup: q.fup, st: ['I got it …', 'It’s …'], ex: 'It’s from my grandmother.' }; }), S.tes, 'tes', 'Your thing is LOT 00. It is the last lot tonight.').replace(/<div class="cab[\s\S]*?<\/div>/, '') : '') + '</div></div>';
};

R.video = function (c) {
  var e = S.video, tudo = PAL_V.every(function (w) { return e.ouviu[w]; }), corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>Are you good at memory games?</h2></div>' + fala('vda', ['I’m good at …', 'I’m not good at …'], []) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vid-p" data-n="1">Watch</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'A memory game with a list of things', '&start=5&end=68') + '<small class="cred">Video: BBC Learning English, from 0:05 to 1:08</small></div><div class="lado-video"><h5>TAP WHEN YOU HEAR IT</h5><div class="ouvidos">'
    + PAL_V.map(function (w) { return '<button type="button" class="ouvido' + (e.ouviu[w] ? ' on' : '') + '" data-a="vid-w" data-v="' + w + '">' + w + '</button>'; }).join('') + '</div>'
    + (tudo ? '<p class="aprova">GOT IT. All six.</p>' : '<p class="dica-aluno">The list goes fast. Only the six words.</p>') + '<div><button type="button" class="btn" data-a="vid-p" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="mesa-listas">' + ['v-list1.mp3', 'v-list2.mp3'].map(function (au, i) { return '<div class="lista-v vd"><small>LIST ' + (i + 1) + ' · SLOWER · LISTEN FIRST</small><div class="toca-linha">' + tocar(au) + '</div>' + transcricao(au, TR[au].replace(/\b(an?) (big|small|expensive|cheap|heavy|light|new|old)\b/g, '$1 <b>$2</b>')) + '</div>'; }).join('')
    + '</div><div class="foco">' + follow('YOUR TURN', 'Play the game: say four things with a describing word. Then again, fast.', ['a big …', 'an old …', 'a light …'], [], 'vdb') + '</div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p, 'vid-p') + '</div>' + corpo;
};

R.pulo = function (c) {
  var p = S.pulo;
  if (p.fase === 0) {
    var n = p.n, fim = n >= OUVE.length, x = OUVE[Math.min(n, OUVE.length - 1)];
    if (fim) return cab(c) + trilha(OUVE, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SOUNDS</small><h2>AN before a vowel sound: an old, an expensive. A before the rest.</h2></div><div style="text-align:center"><button type="button" class="btn cheio" data-a="pl-fase">Now the labels</button></div></div>';
    var ouviu = (S.ouviu || {})[x.au], ok = p.esc === x.ok;
    return cab(c) + trilha(OUVE, n) + '<div class="foco"><div class="pergunta vd"><small>LISTEN FIRST · A OR AN?</small><h2>' + (ok ? x.t.replace(/^(an?)/, '<b>$1</b>') : '<span class="vaga">__</span> ' + x.t.replace(/^an? /, '')) + '</h2></div>'
      + '<div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (ouviu ? 'Say it, then choose.' : 'Ears only.') + '</span></div>'
      + (ouviu ? '<div class="tres-b centro">' + ['a', 'an'].map(function (o) { return '<button type="button" class="pilula grande' + (p.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="pl-a" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>' : '')
      + (p.esc && !ok ? '<p class="recusa" style="text-align:center">Listen again: what sound comes right after the little word?</p>' : '')
      + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="pl-prox">Next</button></div>' : '') + '</div>';
  }
  var n2 = p.n, fim2 = n2 >= PULO.length, y = PULO[Math.min(n2, PULO.length - 1)];
  if (fim2) return cab(c) + trilha(PULO, n2) + '<div class="foco"><div class="pergunta vd"><small>SIX LABELS</small><h2>The word right after a/an decides: an umbrella, but a new umbrella.</h2></div></div>';
  var ops = ordem([y.ok].concat(y.trap.map(function (t) { return t.t; })), n2 + 1), certo = p.esc === y.ok, tr = y.trap.filter(function (t) { return t.t === p.esc; })[0];
  return cab(c) + trilha(PULO, n2) + '<div class="pulo-cartas"><div class="carta-p vd"><small>THING</small><b>' + y.coisa + '</b></div>' + (y.adj ? '<div class="carta-p vd salta"><small>DESCRIBING WORD</small><b>' + y.adj + '</b></div>' : '') + '</div>'
    + '<div class="tres-b centro">' + ops.map(function (o) { return '<button type="button" class="pilula grande' + (p.esc === o ? (o === y.ok ? ' certo' : ' errado') : '') + '" data-a="pl-l" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>'
    + (tr ? '<p class="recusa" style="text-align:center">' + POR[tr.k] + '</p>' : '') + (certo ? ficha('THE LABEL', y.ok, ' centro') + '<div style="text-align:center"><button type="button" class="btn" data-a="pl-prox">Next</button></div>' : '');
};

R.catalogo = function (c) {
  var v = S.cat.virado, todos = LOTES.every(function (_, i) { return v[i]; });
  return cab(c) + '<div class="lotes">' + LOTES.map(function (l, i) {
    return '<button type="button" class="lote' + (v[i] ? ' virado' : '') + '" data-a="ct" data-n="' + i + '"><small>' + l.n + '</small>' + (v[i] ? '<s>' + l.erro + '</s><b>' + l.ok + '</b><em>' + ROT[l.k] + '</em><span class="carimbo">AUTHENTIC</span>' : '<b class="errado-l">' + l.erro + '</b><em>Say it right, then tap</em>') + '</button>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Eight cards, eight stamps. The catalog is ready. Lots 4 and 7 went the other way: AN became A.</p>' : '');
};

R.balanca = function (c) {
  var b = S.bal, n = b.n, fim = n >= BAL.length, x = BAL[Math.min(n, BAL.length - 1)];
  if (fim) return cab(c) + trilha(BAL, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT PAIRS</small><h2>Every thing tonight has a word, and every word has an opposite.</h2></div>' + follow('YOUR ROOM', 'Say two of them about a thing in your room.', ['My … isn’t …. It’s …'], [], 'blf') + '</div>';
  return cab(c) + trilha(BAL, n) + '<div class="mesa-bal"><svg class="escala' + (b.viu ? ' tomba' : '') + '" viewBox="0 0 300 200"><line x1="150" y1="30" x2="150" y2="180" stroke="#c9a24a" stroke-width="6"/><rect x="100" y="178" width="100" height="10" rx="4" fill="#c9a24a"/><g class="braco"><line x1="40" y1="40" x2="260" y2="40" stroke="#c9a24a" stroke-width="6"/><path d="M20 100 Q40 120 60 100 Z" fill="#7a2030"/><path d="M240 100 Q260 120 280 100 Z" fill="#7a2030"/><line x1="40" y1="40" x2="20" y2="100" stroke="#c9a24a"/><line x1="40" y1="40" x2="60" y2="100" stroke="#c9a24a"/><line x1="260" y1="40" x2="240" y2="100" stroke="#c9a24a"/><line x1="260" y1="40" x2="280" y2="100" stroke="#c9a24a"/></g></svg>'
    + '<div class="lado-bal"><div class="pergunta vd"><small>THE AUCTIONEER SAYS</small><h2>' + x.a + '</h2></div>' + (x.au ? '<div class="toca-linha vd">' + tocar(x.au, 1) + '<span>Hear the auctioneer.</span></div>' : '')
    + (b.viu ? '<p class="aprova">' + x.f.replace(x.b + '.', '<b>' + x.b + '</b>.') + '</p><div><button type="button" class="btn" data-a="bl-prox">Next word</button></div>' : '<p class="dica-aluno">Say the opposite, in a full sentence.</p><button type="button" class="btn cheio so-prof" data-a="bl-viu">Answered · tip the scale</button>') + '</div></div>';
};

R.lance = function (c) {
  var e = S.lance, fim = e.l >= LANCE.length;
  var vendidos = '<div class="vendidos">' + LANCE.map(function (x, i) { return '<span class="' + (e.sold[i] ? 'on' : '') + '">' + x.n + (e.sold[i] ? ' · SOLD $' + e.sold[i] : '') + '</span>'; }).join('') + '</div>';
  if (fim) return cab(c) + vendidos + '<div class="foco"><div class="pergunta vd"><small>FOUR HAMMERS</small><h2>A the first time, the after that.</h2></div></div>';
  var x = LANCE[e.l], st = x.p[Math.min(e.s, 2)], sold = e.s >= 3;
  var ops = ordem([st.ok].concat(st.trap.map(function (t) { return t.t; })), e.l + e.s + 1), tr = st.trap.filter(function (t) { return t.t === e.esc; })[0];
  return cab(c) + vendidos + '<div class="mesa-lance"><div class="palco vd"><small>' + x.n + '</small><b class="coisa-l">' + x.coisa + '</b><span class="preco">$' + (x.preco + e.preco) + '</span><div class="lances">' + [0, 1, 2].map(function (i) { return '<i class="' + (i < e.s ? 'on' : '') + '"></i>'; }).join('') + '</div>' + (sold ? '<span class="martelo">SOLD!</span>' : '') + '</div>'
    + '<div class="lado-lance">' + (sold ? '<p class="aprova">Going once, going twice… sold for $' + (x.preco + e.preco) + '!</p><div><button type="button" class="btn cheio" data-a="ln-prox">Next lot</button></div>'
      : '<div class="pergunta vd"><small>BID ' + (e.s + 1) + ' OF 3</small><h2>' + st.cue + '</h2></div><div class="opcoes-l">' + ops.map(function (o) { return '<button type="button" class="op-l' + (e.esc === o ? (o === st.ok ? ' certo' : ' errado') : '') + '" data-a="ln" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>'
      + (tr ? '<p class="recusa">' + POR_L[tr.k] + '</p>' : '<p class="dica-aluno">Say it out loud. Your teacher taps what you said.</p>')) + '</div></div>';
};

R.memoria = function (c) {
  var m = S.memo, conta = MEMO.filter(function (_, i) { return m.lembrou[i]; }).length;
  return cab(c) + '<div class="mesa-memo"><div class="vitrine' + (m.fase === 1 ? ' fechada' : '') + '">' + MEMO.map(function (x, i) { return '<button type="button" class="item-m' + (m.lembrou[i] ? ' on' : '') + '" data-a="mm" data-n="' + i + '"' + (m.fase === 1 ? '' : ' disabled') + '><i>' + x.ic + '</i><span>' + (m.fase === 1 && !m.lembrou[i] ? '?' : x.t) + '</span></button>'; }).join('') + (m.fase === 1 ? '<div class="cortina"></div>' : '') + '</div>'
    + '<div class="lado-memo">' + (m.fase === 0 ? '<p class="dica-aluno">Look for ten seconds. Your teacher counts.</p><button type="button" class="btn cheio so-prof" data-a="mm-f" data-n="1">Close the curtain</button>'
      : m.fase === 1 ? '<div class="pergunta vd"><small>' + conta + ' OF 8</small><h2>Say every lot you remember.</h2></div><p class="dica-aluno">With a / an and the describing word.</p><button type="button" class="btn so-prof" data-a="mm-f" data-n="2">Open the curtain</button>'
        : '<p class="aprova">' + conta + ' of 8 from memory. The hardest part is not the memory: it is the little word.</p>') + '</div></div>';
};

R.venda = function (c) {
  var v = S.venda;
  if (v.sala < 0) return cab(c) + '<div class="salas">' + SALAS.map(function (s, i) { return '<button type="button" class="sala-c vd" data-a="vd-s" data-n="' + i + '"><b>' + s.k + '</b><small>' + s.q + '</small></button>'; }).join('') + '</div>';
  var fim = v.r >= 3;
  return cab(c) + trilha([0, 1, 2], v.r) + '<div class="mesa-venda"><div class="pergunta vd"><small>' + SALAS[v.sala].k + ' · ROUND ' + Math.min(v.r + 1, 3) + '</small><h2>' + (fim ? 'Three things sold. Going once, going twice… sold!' : SALAS[v.sala].q) + '</h2></div>'
    + (fim ? '' : '<div class="partes"><h5>WHAT YOU HEAR</h5>' + FORMAS_V.map(function (f) { return '<button type="button" class="chip frase' + (v.formas[f.k] ? ' on' : '') + '" data-a="vd-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('')
      + ARM_V.map(function (f) { return '<button type="button" class="chip frase erro-ouvido' + (v.arm[f.k] ? ' on' : '') + '" data-a="vd-a" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>'
      + (v.arm.ordem || v.arm.som ? '<p class="recusa">' + (v.arm.ordem ? 'The word goes before the thing: an old watch. ' : '') + (v.arm.som ? 'A vowel sound takes AN.' : '') + '</p>' : '')
      + mostra('vd' + v.r, 'Lot 1 is an old watch. The watch is small, but it’s expensive: two hundred dollars!') + '<div><button type="button" class="btn" data-a="vd-prox">I’ll buy it! · next round</button></div>') + '</div>';
};

R.conversa = function (c) { return sequencia(c, CONVERSA, S.conv, 'conv', 'Ten answers about real things. That is where these words live.'); };

R.fim = function (c) {
  var r = rotulo() || 'an old watch';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Lot 1: a small lamp. The lamp is old.\nLot 2: …', 'Your room catalog',
    ['Lot 1: a ', 'Lot 2: an ', 'The ', ' is ', 'It’s $'], ['YOUR ROOM', 'Five lots from your room. Each one twice: a / an the first time, the after that.'])
    + '<div class="lado-fim">' + ficha('LOT 00', r, ' grande') + '<p class="dica-aluno">Say it the second time: The ' + r.replace(/^an? /, '') + ' is …</p><p class="ultima">Going once… going twice… <b>not for sale.</b></p>'
    + mostra('fim', 'Lot 1: a small lamp. The lamp is old, but it’s beautiful.<br>Lot 2: an expensive guitar. The guitar is heavy.<br>Lot 3: a cheap mirror. The mirror is new.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ts-c'] = function (b, n, v) { S.tes.coisa = v; };
TOQUES['ts-a'] = function (b, n, v) { var a = S.tes.adjs, i = a.indexOf(v); if (i >= 0) a.splice(i, 1); else { a.push(v); if (a.length > 2) a.shift(); } };
TOQUES['vid-p'] = function (b, n) { S.video.p = n; };
TOQUES['vid-w'] = function (b, n, v) { S.video.ouviu[v] = !S.video.ouviu[v]; };
TOQUES['pl-a'] = function (b, n, v) { S.pulo.esc = v; };
TOQUES['pl-l'] = function (b, n, v) { S.pulo.esc = v; };
TOQUES['pl-prox'] = function () { S.pulo.n++; S.pulo.esc = ''; };
TOQUES['pl-fase'] = function () { S.pulo = { fase: 1, n: 0, esc: '' }; };
TOQUES.ct = function (b, n) { S.cat.virado[n] = 1; };
TOQUES['bl-viu'] = function () { S.bal.viu = 1; };
TOQUES['bl-prox'] = function () { S.bal = { n: S.bal.n + 1, viu: 0 }; };
TOQUES.ln = function (b, n, v) {
  var e = S.lance, x = LANCE[e.l]; if (!x || e.s >= 3) return false; var st = x.p[e.s];
  if (v === st.ok) { e.s++; e.preco += 10; e.esc = ''; if (e.s >= 3) e.sold[e.l] = x.preco + e.preco; } else e.esc = v;
};
TOQUES['ln-prox'] = function () { var e = S.lance; S.lance = { l: e.l + 1, s: 0, esc: '', preco: 0, sold: e.sold }; };
TOQUES['mm-f'] = function (b, n) { S.memo.fase = n; };
TOQUES.mm = function (b, n) { S.memo.lembrou[n] = !S.memo.lembrou[n]; };
TOQUES['vd-s'] = function (b, n) { S.venda.sala = n; };
TOQUES['vd-f'] = function (b, n, v) { S.venda.formas[v] = !S.venda.formas[v]; };
TOQUES['vd-a'] = function (b, n, v) { S.venda.arm[v] = !S.venda.arm[v]; };
TOQUES['vd-prox'] = function () { var v = S.venda; S.venda = { sala: v.sala, r: v.r + 1, formas: {}, arm: {} }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G11 · uma cena curta nova (k: gx) antes de pulo.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'som2', titulo: 'A or an? Listen first.',
  toque: 'Tap ▶ and listen. Before a consonant sound: a. Before a vowel sound: an.',
  pares: [
    [{ t: 'a big clock', fala: 'a big clock' }, { t: 'an old clock', fala: 'an old clock' }],
    [{ t: 'a new lamp', fala: 'a new lamp' }, { t: 'an expensive lamp', fala: 'an expensive lamp' }]
  ],
  pergunta: 'The ear test. Which one do you hear?',
  itens: [
    { fala: 'It is an old TV.', o: ['a', 'an'], c: 1 },
    { fala: 'It is a small table.', o: ['a', 'an'], c: 0 },
    { fala: 'It is an expensive ring.', o: ['a', 'an'], c: 1 },
    { fala: 'It is a heavy box.', o: ['a', 'an'], c: 0 }
  ],
  nota: 'The word <b>right after</b> a / an decides. A vowel sound (old, expensive) takes <b>an</b>. A consonant sound (big, new, heavy) takes <b>a</b>. Listen, don’t look at the letter: an old TV, a new TV.',
  uso: { p: 'Your turn. Two things in your room. Say each one with a or an and a describing word.', molde: ['It is a …', 'It is an …'], ex: 'It is a small desk. It is an old chair.' },
  prof: 'The ▶ uses the voice of the browser. No sound? Say the sentences yourself, with a soft and an clear.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_som', GX_EXPLICA); };
