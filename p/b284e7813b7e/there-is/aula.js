/* ============================================================
   THERE IS · THE FRONT SEAT · LIVE CLASS  05/10/2026
   Main series A1 · there is / there are · there isn't / aren't (any) ·
   Is there…? / Are there any…? · o número está no fim
   O MUNDO: uma rua e depois quatro cidades reais (Brighton, Petworth,
   London, Cambridge). A ideia da hora: a frente da frase em inglês NUNCA
   fica vazia; o inglês contrata uma palavra que não significa nada
   (there) só para sentar ali. Na tela, a frase é uma FILEIRA DE
   POLTRONAS de cinema (escuras, CSS): a poltrona da frente está vazia.
   ÁUDIOS (faster-whisper, a transcrição velha estava vazia): a fala de
   Cambridge diz “two universities, lots of churches, no water park” —
   o roteiro velho dizia bicicletas/colleges/aeroporto; o texto agora é
   o do áudio. A aula velha citava o português (“tem um parque”); a Live
   é toda em inglês. Fila: FILA-LIVE-386.md · 032.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'cadeira' },
  { k: 'abre', est: 'o', min: 7, img: 'rua', rot: 'I · Your Street', t: 'Two true things about the street where you live.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'escuta', est: 'l', min: 7, img: 'rua', rot: 'II · Five Sentences', t: 'Five sentences. All five start with the same word.', p: 'Listen first. Say it out loud. Then see the words.' },
  { k: 'frente', est: 'f', min: 6, img: 'cadeira', rot: 'III · The Front Seat', t: 'Somebody has to sit at the front.', p: 'Say the whole sentence first. Then fill the front seat. It can’t stay empty.' },
  { k: 'fundo', est: 'f', min: 6, img: 'cadeira', rot: 'IV · The Back of the Sentence', t: 'Is or are? The answer is at the back.', p: 'Cover the front with your hand. Read only the end. One thing: is. More: are.' },
  { k: 'lista', est: 'l', min: 7, img: 'brighton', rot: 'V · Six Things in Brighton', t: 'Five of these six are really there. One is not.', p: 'Ears only. Read the six words, press play, tap each one when you hear it.' },
  { k: 'cidades', est: 'l', min: 7, img: 'london', rot: 'VI · Four Towns', t: 'Four people, one question: what is there in your town?', p: 'Tap a town. Listen first. Then read the five lines out loud.' },
  { k: 'pergunta', est: 'f', min: 6, extra: 1, img: 'placa', rot: 'VII · Is There a …?', t: 'To ask, the two words change places.', p: 'Turn the sentence around. Say both out loud.' },
  { k: 'nao', est: 'f', min: 6, extra: 1, img: 'fila', rot: 'VIII · What Is Not There', t: 'The same sentence, saying no.', p: 'One thing: there isn’t. More than one: there aren’t any.' },
  { k: 'portas', est: 'o', min: 7, extra: 1, img: 'petworth', rot: 'IX · You Decide', t: 'No town has everything. Where do you move?', p: 'Pick a town. Say the good half with there is, and the bad half with there isn’t.' },
  { k: 'cidade', est: 'o', min: 7, extra: 1, img: 'rua', rot: 'X · Your Town', t: 'Now about a real place: yours.', p: 'One true sentence for each card. If it isn’t true, it doesn’t count.' },
  { k: 'fim', est: 'w', min: 6, img: 'placa', rot: 'XI · There Is', t: 'Write about your town.', p: 'There is, there are, there isn’t, there aren’t any, and one Is there…? The red line watches the front and the back. It goes to your My notes.' }
];

var TR = {
  't-park.mp3': 'There is a park.', 't-two.mp3': 'There are two cinemas.', 't-isnt.mp3': 'There isn’t a beach.', 't-isthere.mp3': 'Is there a station?', 't-no.mp3': 'No, there isn’t.',
  'v-brighton.mp3': 'What is there in Brighton? Well, there is a beach, a university, a train station and a football stadium. There is a cinema. Actually, no, there are two… three cinemas. And there are lots of shops and restaurants. Is there an airport in Brighton? No, there isn’t.',
  'b-brighton.mp3': 'There is a beach. There is a university. There is a train station. There are three cinemas. There isn’t an airport.',
  'b-petworth.mp3': 'There is a school. There is a park. There is a market. There are lots of houses. There isn’t a train station.',
  'b-london.mp3': 'There are lots of museums. There are some theaters. There are lots of shops. There is the London Eye. There isn’t a beach.',
  'b-cambridge.mp3': 'There is a river. There is a market. There are two universities. There are lots of churches. There isn’t a water park.',
  'v-questions.mp3': 'Is there a university in your town? No, there isn’t. Is there a cathedral in Brighton? No, there isn’t. Is there a theme park in Oxford? No, there isn’t. Is there a beach in London? No, there isn’t.'
};

var ABRE = [
  { k: 'ON YOUR STREET', q: 'Say one thing that is on your street.', fup: 'Do you go there?', st: ['On my street …'], ex: 'There is a small bakery on my street.' },
  { k: 'NOT THERE', q: 'Now one thing that is not on it.', fup: 'Do you miss it?', st: ['… isn’t …'], ex: 'There isn’t a park on my street.' },
  { k: 'HOW MANY', q: 'How many shops are on it? Say the number in a sentence.', fup: 'What kind of shops?', st: ['… two shops.'], ex: 'There are three shops and a pharmacy.' }
];
var FORMAS = [{ k: 'there', t: 'THERE IS / ARE' }, { k: 'q', t: 'IS THERE…?' }, { k: 'have', t: 'HAVE A PARK (NO THERE)', erro: 1 }, { k: 'vazia', t: 'IS A PARK (EMPTY FRONT)', erro: 1 }];

var ESCUTA = ['t-park.mp3', 't-two.mp3', 't-isnt.mp3', 't-isthere.mp3', 't-no.mp3'];

var FRENTE = [
  { fato: 'a park, near your house', fr: '? is a park near my house.', fb: 'There sits at the front. It doesn’t mean over there. It means nothing.' },
  { fato: 'two cinemas, in this town', fr: '? are two cinemas in this town.', fb: 'Same front, other verb. The front never changes.' },
  { fato: 'a station, ten minutes away', fr: '? is a station ten minutes away.', fb: 'Three fronts, and the same word every time.' },
  { fato: 'lots of shops, on the main street', fr: '? are lots of shops on the main street.', fb: 'Lots of is many, so the verb is are. The front doesn’t change.' },
  { fato: 'a school, behind the church', fr: '? is a school behind the church.', fb: 'Five done. The front seat takes the same word every time.' },
  { fato: 'some trees, in front of the house', fr: '? are some trees in front of the house.', fb: 'Six for six. An English front is never empty.' }
];
var OPS_F = ['there', 'have', 'it', 'is'];
var NAO_F = { have: 'Have is a verb. English doesn’t put the verb in the front seat.', is: 'That leaves the front seat empty. English won’t start a sentence this way.', it: 'It means something. The word you want means nothing at all.' };

var FUNDO = [
  { fato: 'one beach', fr: 'There ? a beach.', ok: 'is', fb: 'One beach, so is. The front never helps you.' },
  { fato: 'three cinemas', fr: 'There ? three cinemas.', ok: 'are', fb: 'Three, so are. The verb looked at the back.' },
  { fato: 'lots of shops', fr: 'There ? lots of shops.', ok: 'are', fb: 'Lots of has no number. It’s still more than one.' },
  { fato: 'a market, on Saturdays', fr: 'There ? a market on Saturdays.', ok: 'is', fb: 'One market. A at the back means is at the front.' },
  { fato: 'some trees', fr: 'There ? some trees.', ok: 'are', fb: 'Some is more than one, even without a number.' },
  { fato: 'two schools and a park', fr: 'There ? two schools and a park.', ok: 'are', fb: 'The first thing decides, and it’s two schools. This one catches everybody.' }
];

var PALAVRAS_B = ['beach', 'university', 'station', 'cinemas', 'shops', 'airport'];

var CIDADES = [
  { n: 'Brighton', img: 'brighton', cap: 'south coast', au: 'b-brighton.mp3', tem: ['🏖️ beach', '🎓 university', '🚉 station', '🎬 3 cinemas'], nao: '✈️ airport' },
  { n: 'Petworth', img: 'petworth', cap: 'West Sussex', au: 'b-petworth.mp3', tem: ['🏫 school', '🌳 park', '🧺 market', '🏘️ lots of houses'], nao: '🚉 station' },
  { n: 'London', img: 'london', cap: 'the capital', au: 'b-london.mp3', tem: ['🏛️ lots of museums', '🎭 some theaters', '🛍️ lots of shops', '🎡 the London Eye'], nao: '🏖️ beach' },
  { n: 'Cambridge', img: 'cambridge', cap: 'the river Cam', au: 'b-cambridge.mp3', tem: ['🌊 river', '🧺 market', '🎓 2 universities', '⛪ lots of churches'], nao: '🛝 water park' }
];

var PERG = [
  { fato: 'you want to know about ONE station', fr: '? a station near here?', ok: 'Is there', fb: 'The two words swapped. That’s the whole question.' },
  { fato: 'ONE bank', fr: '? a bank on this street?', ok: 'Is there', fb: 'One bank, so is there.' },
  { fato: 'TWO OR MORE cinemas', fr: '? any cinemas in this town?', ok: 'Are there', fb: 'More than one, so are there. The number still decides.' },
  { fato: 'ONE market, on Saturdays', fr: '? a market on Saturdays?', ok: 'Is there', fb: 'Three questions, and the two words swapped every time.' },
  { fato: 'TWO OR MORE buses at night', fr: '? any buses at night?', ok: 'Are there', fb: 'Any is the some of a question.' },
  { fato: 'ONE beach', fr: '? a beach in Cambridge?', ok: 'Is there', fb: 'And the honest answer is no, there isn’t.' }
];
var OPS_P = ['Is there', 'Are there', 'There is', 'There are'];
var NAO_P = { 'There is': 'That keeps the order and lifts the voice. English moves the words: Is there…?', 'There are': 'Swap the words for a question: Are there…?', 'Is there': 'More than one: Are there…?', 'Are there': 'One thing: Is there…?' };

var NAO = [
  { fato: 'no airport in Brighton', fr: 'In Brighton ? an airport.', ok: 'there isn’t', fb: 'One airport, so isn’t.' },
  { fato: 'no cinemas in Petworth', fr: 'In Petworth ? any cinemas.', ok: 'there aren’t', fb: 'More than one, so aren’t. And any comes with the no.' },
  { fato: 'no beach in London', fr: 'In London ? a beach.', ok: 'there isn’t', fb: 'London has almost everything, but no beach.' },
  { fato: 'no water park in Cambridge', fr: 'In Cambridge ? a water park.', ok: 'there isn’t', fb: 'Four for four, and the number decided all four.' }
];
var OPS_N = ['there isn’t', 'there aren’t'];

var PORTAS = ['Brighton: beach, university, station. No airport.', 'Petworth: school, park, market. No station.', 'London: museums, theaters, shops. No beach.', 'Cambridge: river, market, universities. No water park.'];
var CARTOES = [{ w: 'there is', d: 'one thing your town has' }, { w: 'there are', d: 'more than one' }, { w: 'there isn’t', d: 'one thing it doesn’t have' }, { w: 'there aren’t any', d: 'more than one it doesn’t have' }, { w: 'is there…?', d: 'ask me about my town' }, { w: 'lots of', d: 'something there is a lot of' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, frente: { n: 0, esc: '' }, fundo: { n: 0, esc: '' }, lista: { tap: {}, falta: 0 }, cid: { sel: -1 }, perg: { n: 0, esc: '' }, nao: { n: 0, esc: '' }, portas: -1, cidade: {} };

function poltronas(pecas, frente, cls) {
  return '<div class="poltronas' + (cls || '') + '">' + pecas.map(function (p, i) { return '<span class="poltrona' + (i === 0 ? ' frente' + (frente ? ' ocupada' : '') : '') + '"><b>' + (i === 0 ? (frente || '') : p) + '</b></span>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>There <b>Is</b></h1>'
    + '<p class="sub">A street, four real towns, and one word that means nothing, but holds up every sentence.</p>'
    + '<div class="chipsx"><span class="pilula">there is</span><span class="pilula">there are</span><span class="pilula">Is there…?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Take a seat</button>' + faixaLive() + '</div>'
    + '<div class="capa-pol">' + poltronas(['', 'is', 'a', 'park.'], '', ' grande') + '<p class="sussurro">The front seat is empty. Who sits there?</p></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.escuta = function (c) {
  return cab(c) + '<div class="escutas">' + ESCUTA.map(function (au, i) { return '<div class="toca-linha vd"><span class="num">' + (i + 1) + '</span>' + tocar(au) + '<div>' + transcricao(au, TR[au]) + '</div></div>'; }).join('') + '</div>';
};

function cenaSeat(c, lista, est, ops, por, toque, okFn, fimTxt, front) {
  var n = est.n, fim = n >= lista.length, x = lista[Math.min(n, lista.length - 1)], okv = okFn(x), ok = est.esc === okv;
  if (fim) return cab(c) + trilha(lista, n) + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>' + fimTxt + '</h2></div></div>';
  var pal = x.fr.replace('?', '§').split(' '), pecas = pal.map(function (w) { return w === '§' ? (ok ? okv : '') : w; });
  var vis = front ? poltronas(pecas.slice(0), ok ? okv : '', '') : '<div class="poltronas">' + pal.map(function (w, i) { return '<span class="poltrona' + (w === '§' ? ' frente' + (ok ? ' ocupada' : '') : (i === 0 && w === 'There' ? ' coberta' : '')) + '"><b>' + (w === '§' ? (ok ? okv : '') : w) + '</b></span>'; }).join('') + '</div>';
  return cab(c) + trilha(lista, n) + '<div class="foco"><div class="fato vd"><small>THE FACT</small><p>' + x.fato + '</p></div>' + vis
    + '<div class="tres-b centro">' + ops.map(function (o) { return '<button type="button" class="pilula grande' + (est.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="' + toque + '" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>'
    + (est.esc && !ok ? '<p class="recusa" style="text-align:center">' + (por[est.esc] || por._) + '</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">' + x.fb + ' Say the whole sentence.</p><div style="text-align:center"><button type="button" class="btn" data-a="' + toque + '-prox">Next</button></div>' : '') + '</div>';
}
R.frente = function (c) { return cenaSeat(c, FRENTE, S.frente, OPS_F, NAO_F, 'fr', function () { return 'there'; }, 'An English front is never empty. There fills it, and means nothing.', 1); };
R.fundo = function (c) { return cenaSeat(c, FUNDO, S.fundo, ['is', 'are'], { _: 'You looked at the front. There never changes, so it never decides. Look at the end.' }, 'fd', function (x) { return x.ok; }, 'The number is at the back. One thing: is. More than one: are.', 0); };
R.pergunta = function (c) { return cenaSeat(c, PERG, S.perg, OPS_P, NAO_P, 'pg', function (x) { return x.ok; }, 'there is → is there? The two words swap. Nothing else moves.', 0); };
R.nao = function (c) { return cenaSeat(c, NAO, S.nao, OPS_N, { 'there isn’t': 'More than one: there aren’t any.', 'there aren’t': 'One thing: there isn’t.' }, 'nn', function (x) { return x.ok; }, 'One thing: there isn’t. More than one: there aren’t any.', 0); };

R.lista = function (c) {
  var l = S.lista, ouviu = (S.ouviu || {})['v-brighton.mp3'];
  return cab(c) + '<div class="mesa-lista"><div class="foto-l vd" style="background-image:url(' + img('brighton') + ')"><span>BRIGHTON · SOUTH COAST</span></div><div class="lado-l"><div class="toca-linha vd">' + tocar('v-brighton.mp3') + '<span>What is there in Brighton?</span></div>'
    + '<div class="palavras-b">' + PALAVRAS_B.map(function (w, i) { return '<button type="button" class="pal-b' + (l.tap[i] ? ' on' : '') + (l.falta && i === 5 ? ' falta' : '') + '" data-a="ls" data-n="' + i + '">' + w + '</button>'; }).join('') + '</div>'
    + (ouviu ? '<div class="pergunta vd ja"><small>THE QUESTION</small><h2>Five of those six are in Brighton. Which one is not?</h2></div>' + (l.falta ? '<p class="aprova">No airport. “Is there an airport in Brighton? No, there isn’t.”</p>' + transcricao('v-brighton.mp3', TR['v-brighton.mp3']) : '<button type="button" class="btn so-prof" data-a="ls-falta">Show the missing one</button>') : '') + '</div></div>';
};

R.cidades = function (c) {
  var e = S.cid, x = e.sel >= 0 ? CIDADES[e.sel] : null;
  var grade = '<div class="cidades">' + CIDADES.map(function (k, i) { return '<button type="button" class="cidade-b vd' + (e.sel === i ? ' on' : '') + '" data-a="cd" data-n="' + i + '" style="background-image:url(' + img(k.img) + ')"><b>' + k.n + '</b><small>' + k.cap + '</small></button>'; }).join('') + '</div>';
  if (!x) return cab(c) + grade + '<p class="dica-aluno" style="text-align:center">Tap a town.</p>';
  var ouviu = (S.ouviu || {})[x.au];
  return cab(c) + grade + '<div class="mesa-cid"><div class="toca-linha vd">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>'
    + (ouviu ? '<div class="placa-c"><div class="tem">' + x.tem.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div><span class="nao-tem">✕ ' + x.nao + '</span></div>' : '') + '</div>';
};

R.portas = function (c) {
  var p = S.portas;
  return cab(c) + '<div class="mesa-lista"><div class="portas-d">' + PORTAS.map(function (t, i) { return '<button type="button" class="porta-d vd' + (p === i ? ' on' : '') + '" data-a="pt" data-n="' + i + '"><span>' + (i + 1) + '</span>' + t + '</button>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (p >= 0 ? fala('pt', ['I choose … because there is …', '… but there isn’t …'], []) + mostra('pt', 'I choose Cambridge because there is a river and there are two universities, but there isn’t a water park.') : '<p class="dica-aluno">Pick a town.</p>') + '</div></div>';
};

R.cidade = function (c) {
  var q = S.cidade, todos = CARTOES.every(function (_, i) { return q[i]; });
  return cab(c) + '<div class="cartoes-c">' + CARTOES.map(function (x, i) { return '<button type="button" class="cartao-c' + (q[i] ? ' on' : '') + '" data-a="cc" data-n="' + i + '"><b>' + x.w + '</b><small>' + x.d + '</small></button>'; }).join('') + '</div>'
    + '<div class="toca-linha vd centro">' + tocar('v-questions.mp3') + '<span>Some questions to steal</span></div>' + (todos ? '<p class="aprova" style="text-align:center">Six real sentences about a real town.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'In my town there is a big park.\nThere aren’t any …', 'Your town',
    ['There is ', 'There are ', 'There isn’t ', 'There aren’t any ', 'Is there ', 'lots of '], ['YOUR STREET, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now your town, front seat full every time.' : 'Six sentences about your town.'])
    + '<div class="lado-fim">' + poltronas(['', 'is', 'a', 'park.'], 'There', ' mini') + '<div class="grande vd"><span>the front is never empty: <u>there</u></span><span>the number is at the back: <u>is</u> / <u>are</u></span><span>to ask, swap: <u>is there</u>?</span></div>'
    + mostra('fim', 'In my town there is a big park and there are lots of bakeries.<br>There isn’t a beach, and there aren’t any museums.<br>Is there a cinema in your town?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
[['fr', 'frente'], ['fd', 'fundo'], ['pg', 'perg'], ['nn', 'nao']].forEach(function (k) {
  TOQUES[k[0]] = function (b, n, v) { S[k[1]].esc = v; };
  TOQUES[k[0] + '-prox'] = function () { S[k[1]] = { n: S[k[1]].n + 1, esc: '' }; };
});
TOQUES.ls = function (b, n) { S.lista.tap[n] = !S.lista.tap[n]; };
TOQUES['ls-falta'] = function () { S.lista.falta = 1; };
TOQUES.cd = function (b, n) { S.cid.sel = n; };
TOQUES.pt = function (b, n) { S.portas = n; };
TOQUES.cc = function (b, n) { S.cidade[n] = !S.cidade[n]; };
