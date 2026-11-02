/* ============================================================
   EXPENSIVE BUT FAST · THE SCALE · LIVE CLASS  05/10/2026
   Main series A1 · London series 1/3 · adjetivos opostos (expensive /
   cheap, fast / slow) + but / and · o adjetivo antes do nome
   O MUNDO: três pessoas correm de Londres a Edimburgo com £100 cada.
   Trem, ônibus ou bicicleta? A tela é uma balança: cada opção ganha duas
   marcas (preço e velocidade); a marca boa cai no prato verde, a ruim no
   laranja, e a balança pende. Lados diferentes: BUT. Mesmo lado: AND.
   Mantido da aula antiga: o vídeo (qnLaRJ3rZMk, 0:02–1:02 e 3:45–4:50),
   os 21 áudios (transcrições refeitas no faster-whisper: as antigas
   cortavam pedaços), as quatro fotos. Fila: FILA-LIVE-386.md · 006.
   ============================================================ */
var YT = 'qnLaRJ3rZMk';
var L = [
  { k: 'capa', est: null, img: 'estacao' },
  { k: 'compra', est: 'o', min: 7, img: 'estacao', rot: 'I · Your Last Buy', t: 'Before the race: your last buy.', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'corrida', est: 'l', min: 7, img: 'estacao', rot: 'II · The Race', t: 'Three cards. The story before the prices.', p: 'Listen to each card first. Answer the question. Then open the transcript and read it out loud.' },
  { k: 'palavras', est: 'l', min: 5, img: 'trem', rot: 'III · Four Words and a No', t: 'Two good words, two bad words, and one no.', p: 'Play it. Say it three times. Then show it: green is good news, orange is bad news.' },
  { k: 'video1', est: 'l', min: 7, img: 'estacao', rot: 'IV · Watch: The Prices', t: 'The race begins. Six words.', p: 'Ears only. Tap each word when you hear it.' },
  { k: 'balanca', est: 'f', min: 6, img: 'trem', rot: 'V · The Scale', t: 'Four options. Each one gets two marks, and the scale tips.', p: 'Pick an option. Give it a price and a speed. Then join them: BUT or AND?' },
  { k: 'masou', est: 'f', min: 6, img: 'onibus', rot: 'VI · But or And?', t: 'Different sides: BUT. Same side: AND.', p: 'Look at the two marks. Tap BUT or AND. Then say the whole sentence.' },
  { k: 'ouve2', est: 'l', min: 7, extra: 1, img: 'trem', rot: 'VII · Listen: Two Marks', t: 'The same three steps. Longer sentences.', p: 'Play it. Say it three times. Then show it.' },
  { k: 'video2', est: 'l', min: 7, extra: 1, img: 'estacao', rot: 'VIII · Watch: Canceled', t: 'Bob’s plan goes wrong.', p: 'Tap each word when you hear it. Then one question.' },
  { k: 'dia1', est: 'o', min: 7, extra: 1, img: 'bike', rot: 'IX · Day One', t: 'Day one is over. Three people, three places.', p: 'Play each person. Say where they are and how it’s going. Then: who is winning?' },
  { k: 'viagem', est: 'o', min: 7, extra: 1, img: 'trem', rot: 'X · Your Trip', t: 'The same trip, three ways. You choose, and you defend it.', p: 'For each option: the good side, the bad side, and BUT. Then choose one and say why.' },
  { k: 'fim', est: 'w', min: 6, img: 'trem', rot: 'XI · The Decision', t: 'How do you go to work or school? Weigh it.', p: 'Write about two ways you go places. Two marks each, joined with BUT or AND. The red line watches the order and the little word. It goes to your My notes.' }
];

/* I · a sua compra */
var COMPRA = [
  { k: 'LAST BUY', q: 'What is a cheap thing you love?', fup: 'Is it new or old?', st: ['A … ', 'It’s … '], ex: 'A coffee! It’s cheap and it’s good.' },
  { k: 'YOUR PHONE', q: 'Tell me about your phone. Is it good?', fup: 'Is it new or old?', st: ['My phone is …', 'It’s …, but …'], ex: 'My phone is old. It’s slow, but it’s cheap.' },
  { k: 'YOUR BUS', q: 'How do you go to work or school?', fup: 'Is it fast or slow?', st: ['I go by …', 'It’s …'], ex: 'I go by bus. It’s cheap, but it’s slow.' },
  { k: 'A DREAM', q: 'What is an expensive thing you want?', fup: 'Why do you want it?', st: ['I want a …', 'It’s expensive, but …'], ex: 'I want a new bike. It’s expensive, but it’s fast and beautiful.' }
];

/* II · a corrida */
var CORRIDA = [
  { n: 'THE PEOPLE', au: 'r-people.mp3', t: 'Three people: Fran, Bob and Paula. They are in London. They do not know each other.', q: 'How many people are in the race?', ops: ['Three.', 'Two.', 'Five.'] },
  { n: 'THE MONEY', au: 'r-money.mp3', t: 'One hundred pounds. Five days. That is all they have. No more.', q: 'How much money does each person have?', ops: ['One hundred pounds.', 'Five pounds.', 'Fifty pounds.'] },
  { n: 'THE CITY', au: 'r-city.mp3', t: 'London to Edinburgh. It is far. Train, bus or bike? Every one costs something.', q: 'Is Edinburgh near London?', ops: ['No, it is far.', 'Yes, it is near.', 'It is in London.'] }
];

/* III e VII · ouvir: g = 1 boa notícia, 0 ruim, -1 neutro */
var PAL = [
  { au: 'w-expensive.mp3', en: 'It is expensive.', g: 0 }, { au: 'w-cheap.mp3', en: 'It is cheap.', g: 1 },
  { au: 'w-fast.mp3', en: 'It is fast.', g: 1 }, { au: 'w-slow.mp3', en: 'It is slow.', g: 0 }, { au: 'w-isnt.mp3', en: 'It isn’t fast.', g: 0 }
];
var PAL2 = [
  { au: 'w-butfast.mp3', en: 'It is expensive, but it is fast.', g: 2 }, { au: 'w-butslow.mp3', en: 'It is cheap, but it is slow.', g: 2 },
  { au: 'w-andslow.mp3', en: 'It is expensive, and it is slow.', g: 0 }, { au: 'w-twenty.mp3', en: 'Twenty pounds.', g: -1 }
];

/* IV e VIII · vídeo */
var VIDEOS = {
  video1: { ini: 2, fim: 62, cred: 'Video: from 0:02 to 1:02', antes: 'A hundred pounds, London to Edinburgh. Train, bus or bike: which one is cheap? Guess.', pal: ['train', 'bus', 'bike', 'expensive', 'cheap', 'pounds'], q: 'Which is expensive? Which is cheap?', st: ['The train is …', 'The bus is …', 'Cycling is …'], ex: 'The train is expensive. The bus is expensive. Cycling is cheap: twenty pounds. But it is slow.', trans: 'London to Edinburgh. Three people. One hundred pounds. Five days. The train is expensive. The bus is expensive. But cycling is cheap. It is cheap, twenty pounds, but it is slow.' },
  video2: { ini: 225, fim: 290, cred: 'Video: from 3:45 to 4:50', antes: 'Bob wants the train. What can go wrong?', pal: ['train', 'canceled', 'expensive', 'slow', 'fast', 'not good'], q: 'What happens to Bob’s train?', st: ['It’s …', 'Now it’s … and …'], ex: 'No train today! Now it’s expensive and slow. That is not good!', trans: 'I can take the train. It is expensive, but it is fast. The train is canceled. It is expensive, and this is not fast. The train is slow. Oh no, Bob. It is expensive, and it is slow. That is not good.' }
};

/* V · a balança: pp/vp = 1 quando a marca é boa */
var OPCOES = [
  { n: 'THE TRAIN', img: 'trem', s: 'The train', preco: 'expensive', vel: 'fast', au: 't-train.mp3', fr: 'The train. It is expensive, but it is fast.' },
  { n: 'THE BIKE', img: 'bike', s: 'The bike', preco: 'cheap', vel: 'slow', au: 't-bike.mp3', fr: 'The bike. It is cheap, but it is slow.' },
  { n: 'THE BUS', img: 'onibus', s: 'The bus', preco: 'expensive', vel: 'slow', au: 't-bus.mp3', fr: 'The bus. It is expensive. And it is slow.' },
  { n: 'BOB’S TRAIN', img: 'estacao', s: 'Bob’s train', preco: 'expensive', vel: 'slow', au: 't-bob.mp3', fr: 'Bob’s train is canceled. Now it is expensive, and it is slow.' }
];
var BOM = { cheap: 1, fast: 1, expensive: 0, slow: 0 };

/* VI · but ou and */
var MASOU = [
  { a: 'It is expensive,', b: 'it is fast.', x: 'expensive', y: 'fast' },
  { a: 'It is cheap,', b: 'it is slow.', x: 'cheap', y: 'slow' },
  { a: 'It is expensive,', b: 'it is slow.', x: 'expensive', y: 'slow' },
  { a: 'It is cheap,', b: 'it is fast.', x: 'cheap', y: 'fast' },
  { a: 'The taxi is fast,', b: 'it is expensive.', x: 'fast', y: 'expensive' },
  { a: 'The metro is cheap,', b: 'it is fast.', x: 'cheap', y: 'fast' },
  { a: 'Walking is cheap,', b: 'it is slow.', x: 'cheap', y: 'slow' }
];

/* IX · dia um */
var PESSOAS = [
  { n: 'BOB', au: 'c-bob.mp3', t: 'Bob is on the train. It is expensive, and it is slow.', img: 'trem' },
  { n: 'FRAN', au: 'c-fran.mp3', t: 'Fran is on a bike. It is cheap, but it is slow.', img: 'bike' },
  { n: 'PAULA', au: 'c-paula.mp3', t: 'Paula is still in London.', img: 'estacao' }
];

/* X · a sua viagem */
var VIAGEM = [{ n: 'TRAIN', preco: '£60', tempo: '5 hours', ex: 'The train is expensive, but it’s fast.' }, { n: 'BUS', preco: '£25', tempo: '8 hours', ex: 'The bus is cheap, but it’s slow.' }, { n: 'PLANE', preco: '£150', tempo: '1 hour', ex: 'The plane is very expensive, but it’s very fast.' }];
var PARTES = [{ k: 'bom', t: 'IT’S CHEAP / FAST' }, { k: 'ruim', t: 'IT’S EXPENSIVE / SLOW' }, { k: 'but', t: '… BUT …' }];

/* ---------- o estado ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  compra: { sel: -1, foi: {} }, corrida: { esc: {} }, pal: { n: 0, viu: 0, vezes: 0 }, pal2: { n: 0, viu: 0, vezes: 0 },
  video1: { p: 0, ouviu: {} }, video2: { p: 0, ouviu: {} },
  bal: { sel: -1, preco: {}, vel: {}, junta: {}, err: '' }, masou: { n: 0, esc: '' },
  dia1: { venc: '' }, viagem: { sel: -1, partes: {}, erro: 0, esc: -1 } };

/* ---------- a balança desenhada ---------- */
function balanca(bons, ruins, rot) {
  var dif = Math.max(-3, Math.min(3, ruins.length - bons.length)), ang = dif * 7;
  var prato = function (lista, cls) { return '<div class="prato ' + cls + '"><i class="corda"></i><div class="marcas">' + lista.map(function (w) { return '<span class="mk ' + cls + '">' + w + '</span>'; }).join('') + '</div><i class="cuia"></i></div>'; };
  return '<div class="balanca' + (rot ? ' ' + rot : '') + '"><div class="braco" style="--ang:' + ang + 'deg">' + prato(bons, 'bom') + prato(ruins, 'ruim') + '</div><div class="pe"></div>'
    + '<div class="legenda"><span class="bom">PROS · good news</span><span class="ruim">CONS · bad news</span></div></div>';
}

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · LONDON SERIES · A1</span><h1>Expensive <b>but Fast</b></h1>'
    + '<p class="sub">Every choice has a good side and a bad side, and one little word joins them.</p>'
    + '<div class="chipsx"><span class="pilula">cheap · expensive</span><span class="pilula">fast · slow</span><span class="pilula">but · and</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Weigh the first option</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('estacao') + '" alt="A train platform in London"><div class="placa-capa"><small>LONDON → EDINBURGH</small><b>£100</b><span>FIVE DAYS · THREE PEOPLE</span></div></div></div>';
};
R.compra = function (c) { return cartasPessoais(c, COMPRA, S.compra, 'compra'); };

R.corrida = function (c) {
  var e = S.corrida;
  return cab(c) + '<div class="cartoes-corrida">' + CORRIDA.map(function (x, i) {
    var ouviu = (S.ouviu || {})[x.au], esc = e.esc[i], certo = esc === 0;
    return '<div class="corrida-c vd' + (certo ? ' feito' : '') + '"><small>' + (i + 1) + ' · ' + x.n + '</small><div class="toca-linha">' + tocar(x.au) + '</div>' + transcricao(x.au, x.t, 'cr' + i)
      + (ouviu ? '<p class="q">' + x.q + '</p><div class="versoes">' + ordem(x.ops.map(function (t, k) { return [t, k]; }), i + 1).map(function (o) {
        return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="cr" data-n="' + i + '" data-v="' + o[1] + '"' + (certo ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>'
        + (esc > 0 ? '<p class="recusa">Play it again. Listen for the number.</p>' : '') : '')
      + '</div>';
  }).join('') + '</div>' + (CORRIDA.every(function (_, i) { return e.esc[i] === 0; }) ? '<div class="foco"><div class="pergunta vd"><small>THE RACE</small><h2>A hundred pounds, five days, and a long way.</h2></div>' + follow('FOLLOW-UP', 'And you? Train, bus or bike: what is good for you?', ['For me, the … is good.', 'Because it’s …'], [], 'crf') + '</div>' : '');
};

function cenaOuve(c, lista, e, chave, fecho) {
  var n = e.n, fim = n >= lista.length, x = lista[Math.min(n, lista.length - 1)];
  if (fim) return cab(c) + trilha(lista, n) + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>' + fecho + '</h2></div>' + follow('NOW YOURS', 'One sentence about your city: the bus, the metro, a taxi.', ['The bus is …, but …', 'A taxi is …, and …'], [], chave + 'f', mostra(chave + 'f', 'The metro in my city is cheap, and it’s fast. A taxi is fast, but it’s expensive.', 1)) + '</div>';
  var ouviu = (S.ouviu || {})[x.au], cor = x.g === 1 ? ' bom' : x.g === 0 ? ' ruim' : x.g === 2 ? ' mix' : '';
  return cab(c) + trilha(lista, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (e.viu ? '<b class="frase-cor' + cor + '">' + x.en + '</b>' : (ouviu ? 'Say it three times.' : 'Play it. Ears only.')) + '</span></div>'
    + '<div class="vezes">' + [1, 2, 3].map(function (k) { return '<button type="button" class="vez' + (e.vezes >= k ? ' on' : '') + '" data-a="ov-vez" data-c="' + chave + '" data-n="' + k + '">' + k + '</button>'; }).join('') + '</div>'
    + '<div style="text-align:center">' + (e.viu ? '<button type="button" class="btn" data-a="ov-prox" data-c="' + chave + '">Next</button>' : '<button type="button" class="btn cheio" data-a="ov-viu" data-c="' + chave + '"' + (ouviu ? '' : ' disabled') + '>Show it</button>') + '</div></div>';
}
R.palavras = function (c) { return cenaOuve(c, PAL, S.pal, 'pal', 'Two good words, two bad words, and one no.'); };
R.ouve2 = function (c) { return cenaOuve(c, PAL2, S.pal2, 'pal2', 'Different sides: BUT. Same side: AND.'); };

function cenaVideo(c, chave) {
  var v = VIDEOS[chave], e = S[chave], tudo = v.pal.every(function (w) { return e.ouviu[w]; });
  var passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>' + v.antes + '</h2></div>' + fala(chave + 'a', ['I think …', 'Maybe …'], v.pal) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vid-p" data-c="' + chave + '" data-n="1">Watch</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The race from London to Edinburgh', '&start=' + v.ini + '&end=' + v.fim) + '<small class="cred">' + v.cred + '</small></div><div class="lado-video"><h5>TAP WHEN YOU HEAR IT</h5><div class="ouvidos">'
    + v.pal.map(function (w) { return '<button type="button" class="ouvido' + (e.ouviu[w] ? ' on' : '') + '" data-a="vid-w" data-c="' + chave + '" data-v="' + h(w) + '">' + w + '</button>'; }).join('') + '</div>'
    + (tudo ? '<p class="aprova">GOT IT. All six words.</p>' : '<p class="dica-aluno">Nobody has to understand the rest.</p>') + '<div><button type="button" class="btn" data-a="vid-p" data-c="' + chave + '" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>' + v.q + '</h2></div>' + fala(chave + 'b', v.st, []) + mostra(chave + 'q', v.ex)
    + ((S.trans || {})[chave + 't'] ? '<div class="post-trans vd"><small>WHAT THEY SAY IN THE VIDEO</small><p class="transcricao">' + v.trans + '</p></div>' : '<div class="resp-btn"><button type="button" class="pilula" data-a="trans" data-c="' + chave + 't">Show transcript</button></div>') + '</div>';
  return cab(c) + passos + corpo;
}
R.video1 = function (c) { return cenaVideo(c, 'video1'); };
R.video2 = function (c) { return cenaVideo(c, 'video2'); };

R.balanca = function (c) {
  var b = S.bal, x = b.sel >= 0 ? OPCOES[b.sel] : null;
  var cartas = '<div class="opcoes">' + OPCOES.map(function (o, i) {
    var feito = b.junta[i] === 'ok';
    return '<button type="button" class="opcao' + (b.sel === i ? ' on' : '') + (feito ? ' feito' : '') + '" data-a="bl-sel" data-n="' + i + '" style="background-image:url(' + img(o.img) + ')"><b>' + o.n + '</b>' + (feito ? '<span>' + o.preco + ' · ' + o.vel + '</span>' : '') + '</button>';
  }).join('') + '</div>';
  if (!x) return cab(c) + cartas + '<div class="mesa-bal">' + balanca([], [], 'parada') + '<p class="dica-aluno">Pick an option.</p></div>';
  var p = b.preco[b.sel], v = b.vel[b.sel], bons = [], ruins = [];
  [p, v].forEach(function (w) { if (w) (BOM[w] ? bons : ruins).push(w); });
  var passo;
  if (!p) passo = '<div class="pergunta vd"><small>' + x.n + ' · MARK 1 · THE PRICE</small><h2>Is it cheap or expensive?</h2></div><div class="dois-b"><button type="button" class="marca-b bom" data-a="bl-p" data-v="cheap">cheap</button><button type="button" class="marca-b ruim" data-a="bl-p" data-v="expensive">expensive</button></div>';
  else if (!v) passo = '<div class="pergunta vd"><small>' + x.n + ' · MARK 2 · THE SPEED</small><h2>Is it fast or slow?</h2></div><div class="dois-b"><button type="button" class="marca-b bom" data-a="bl-v" data-v="fast">fast</button><button type="button" class="marca-b ruim" data-a="bl-v" data-v="slow">slow</button></div>';
  else if (b.junta[b.sel] !== 'ok') passo = '<div class="pergunta vd"><small>' + x.n + ' · JOIN THE MARKS</small><h2>' + x.s + ' is ' + p + ', <span class="vaga">___</span> it is ' + v + '.</h2></div><div class="dois-b"><button type="button" class="junta-b' + (b.err === 'but' ? ' errado' : '') + '" data-a="bl-j" data-v="but">BUT</button><button type="button" class="junta-b' + (b.err === 'and' ? ' errado' : '') + '" data-a="bl-j" data-v="and">AND</button></div>'
    + (b.err ? '<p class="recusa">Look at the scale. ' + (bons.length === 1 ? 'One mark is good and one is bad: different sides.' : 'Both marks are on the same side.') + '</p>' : '');
  else passo = '<p class="aprova">GOT IT. ' + x.s + ' is ' + p + (bons.length === 1 ? ', <b>but</b> ' : ', <b>and</b> ') + 'it is ' + v + '.</p><div class="toca-linha vd">' + tocar(x.au) + '<span>Play it. Say it with the voice.</span></div>' + transcricao(x.au, x.fr, 'bl' + b.sel);
  var errou = (p && p !== x.preco) || (v && v !== x.vel);
  if (errou && !b.junta[b.sel]) passo = '<p class="recusa">Hmm. ' + (p !== x.preco ? x.s + ' costs a lot? Look at the prices from the video.' : 'Is it really ' + v + '? Think of the trip.') + '</p><div><button type="button" class="pilula" data-a="bl-zera">Try the marks again</button></div>' + mostra('bl' + b.sel + 'e', x.s + ': ' + x.preco + ' and ' + x.vel + '.');
  return cab(c) + cartas + '<div class="mesa-bal">' + balanca(bons, ruins) + '<div class="lado-bal">' + passo + '</div></div>'
    + (OPCOES.every(function (_, i) { return b.junta[i] === 'ok'; }) ? '<p class="aprova" style="text-align:center">Look at Bob’s train: both marks on the bad side. That’s AND, and bad news.</p>' : '');
};

R.masou = function (c) {
  var m = S.masou, n = m.n, fim = n >= MASOU.length, x = MASOU[Math.min(n, MASOU.length - 1)];
  if (fim) return cab(c) + trilha(MASOU, n) + '<div class="foco"><div class="pergunta vd"><small>SEVEN SENTENCES</small><h2>Different sides: BUT. Same side: AND.</h2></div></div>';
  var bons = [x.x, x.y].filter(function (w) { return BOM[w]; }), ruins = [x.x, x.y].filter(function (w) { return !BOM[w]; });
  var certo = bons.length === 1 ? 'but' : 'and', ok = m.esc === certo;
  return cab(c) + trilha(MASOU, n) + '<div class="mesa-bal">' + balanca(bons, ruins, 'mini') + '<div class="lado-bal"><div class="pergunta vd' + (ok ? ' ja' : '') + '"><small>SENTENCE ' + (n + 1) + '</small><h2>' + x.a + ' ' + (ok ? '<b>' + certo + '</b>' : '<span class="vaga">___</span>') + ' ' + x.b + '</h2></div>'
    + (ok ? '<p class="aprova">GOT IT. ' + (certo === 'but' ? 'Different sides: BUT.' : 'Same side: AND.') + ' Say the whole sentence.</p><div><button type="button" class="btn" data-a="mo-prox">Next</button></div>'
      : '<div class="dois-b"><button type="button" class="junta-b' + (m.esc === 'but' ? ' errado' : '') + '" data-a="mo" data-v="but">BUT</button><button type="button" class="junta-b' + (m.esc === 'and' ? ' errado' : '') + '" data-a="mo" data-v="and">AND</button></div>'
        + (m.esc ? '<p class="recusa">Look at the two marks again. Same side, or different sides?</p>' : '')) + '</div></div>';
};

R.dia1 = function (c) {
  var d = S.dia1, todos = PESSOAS.every(function (p) { return (S.ouviu || {})[p.au]; });
  return cab(c) + '<div class="pessoas">' + PESSOAS.map(function (p, i) {
    return '<div class="pessoa vd" style="--fundo:url(' + img(p.img) + ')"><b>' + p.n + '</b><div class="toca-linha">' + tocar(p.au) + '</div>' + transcricao(p.au, p.t, 'ds' + i) + '</div>';
  }).join('') + '</div>' + (todos ? '<div class="foco"><div class="pergunta vd"><small>DAY ONE IS OVER</small><h2>Who is winning? Why?</h2></div>' + fala('dsw', ['… is winning because …', '… is …, but …'], ['Bob', 'Fran', 'Paula', 'cheap', 'fast', 'slow'])
    + mostra('dsw', 'Fran is winning. Her bike is slow, but it is cheap. Bob’s train is expensive and slow, and Paula is still in London!', 1)
    + follow('FOLLOW-UP', 'What is good for Paula now?', ['The … is good for her.', 'Because it’s …'], [], 'dsp') + '</div>' : '<p class="dica-aluno" style="text-align:center">Play all three. Say each one back.</p>');
};

R.viagem = function (c) {
  var v = S.viagem, x = v.sel >= 0 ? VIAGEM[v.sel] : null, pt = v.partes[v.sel] || {};
  var bilhetes = '<div class="bilhetes">' + VIAGEM.map(function (o, i) {
    return '<button type="button" class="bilhete' + (v.sel === i ? ' on' : '') + (v.esc === i ? ' escolhido' : '') + '" data-a="vg-sel" data-n="' + i + '"><small>YOUR CITY → 500 KM</small><b>' + o.n + '</b><span class="pr">' + o.preco + '</span><span class="tp">' + o.tempo + '</span></button>';
  }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd"><small>' + x.n + ' · ' + x.preco + ' · ' + x.tempo + '</small><h2>The good side, the bad side, and BUT.</h2></div>'
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="vg-parte" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (v.erro ? ' on' : '') + '" data-a="vg-erro">MISTAKE HEARD: a plane fast / more cheap</button></div>'
    + (v.erro ? '<p class="recusa">The adjective comes first: <b>a fast plane</b>. And today, <b>cheap</b> is enough.</p>' : '') + mostra('vg' + v.sel, x.ex, 1)
    + '<div><button type="button" class="btn" data-a="vg-esc">I take this one</button></div>'
    : '<p class="dica-aluno">Pick a ticket.</p>';
  var fim = v.esc >= 0 ? '<div class="foco">' + follow('YOUR CHOICE · ' + VIAGEM[v.esc].n, 'Why this one? Your teacher disagrees. Defend it!', ['I take the … because …', 'It’s …, but …'], [], 'vgd') + '</div>' : '';
  return cab(c) + '<div class="mesa-viagem">' + bilhetes + '<div class="lado-viagem">' + lado + '</div></div>' + fim;
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I go to work by bus. The bus is cheap, but it is slow.\nSometimes I take a taxi. …', 'Your decision',
    [' is cheap', ' is expensive', ' is fast', ' is slow', ', but ', ', and ', 'It isn’t '], ['TWO WAYS TO GO', 'How do you go to work, school or a friend’s house? Two ways. Two marks each.'])
    + '<div class="lado-fim"><div class="grande vd"><span>expensive, <u>but</u> fast</span><span>expensive <u>and</u> slow</span><small>Different sides: BUT. Same side: AND. And the adjective comes first: a fast car.</small></div>'
    + mostra('fim', 'I go to work by bus. The bus is cheap, but it’s slow.<br>Sometimes I take a taxi. A taxi is fast, but it’s expensive.<br>On Sundays I walk. Walking is cheap and good, but it’s slow!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- os toques desta aula ---------- */
TOQUES.cr = function (b, n, v) { if (S.corrida.esc[n] === 0) return false; S.corrida.esc[n] = +v; };
TOQUES['ov-vez'] = function (b, n, v, c) { S[c].vezes = n; };
TOQUES['ov-viu'] = function (b, n, v, c) { S[c].viu = 1; };
TOQUES['ov-prox'] = function (b, n, v, c) { S[c] = { n: S[c].n + 1, viu: 0, vezes: 0 }; };
TOQUES['vid-p'] = function (b, n, v, c) { S[c].p = n; };
TOQUES['vid-w'] = function (b, n, v, c) { S[c].ouviu[v] = !S[c].ouviu[v]; };
TOQUES['bl-sel'] = function (b, n) { S.bal.sel = n; S.bal.err = ''; };
TOQUES['bl-p'] = function (b, n, v) { S.bal.preco[S.bal.sel] = v; };
TOQUES['bl-v'] = function (b, n, v) { S.bal.vel[S.bal.sel] = v; };
TOQUES['bl-zera'] = function () { var b = S.bal; delete b.preco[b.sel]; delete b.vel[b.sel]; b.err = ''; };
TOQUES['bl-j'] = function (b, n, v) { var e = S.bal, x = OPCOES[e.sel]; var certo = (BOM[x.preco] + BOM[x.vel]) === 1 ? 'but' : 'and'; if (v === certo) { e.junta[e.sel] = 'ok'; e.err = ''; } else e.err = v; };
TOQUES.mo = function (b, n, v) { S.masou.esc = v; };
TOQUES['mo-prox'] = function () { S.masou = { n: S.masou.n + 1, esc: '' }; };
TOQUES['vg-sel'] = function (b, n) { S.viagem.sel = n; };
TOQUES['vg-parte'] = function (b, n, v) { var e = S.viagem; e.partes[e.sel] = e.partes[e.sel] || {}; e.partes[e.sel][v] = !e.partes[e.sel][v]; };
TOQUES['vg-erro'] = function () { S.viagem.erro = !S.viagem.erro; };
TOQUES['vg-esc'] = function () { S.viagem.esc = S.viagem.sel; };
