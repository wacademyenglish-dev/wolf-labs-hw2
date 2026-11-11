/* ============================================================
   A SMALL BLACK COAT · THE COAT RACK · LIVE CLASS  05/10/2026
   Main series A1 · London series 2/3 · tamanho + cor + coisa · I want a…
   O MUNDO: dia quatro da corrida de Londres a Edimburgo. O Bob está em
   Cambridge, faz 3 °C e ele não tem casaco; o trem sai em três horas.
   O aluno VESTE o cabide (a cor muda o casaco desenhado), prova os
   tamanhos no manequim, pendura as etiquetas SIZE · COLOR · THING na
   ordem e gasta as £100 do Bob na arara.
   Mantido da aula antiga: o vídeo (FnMVGYhlE-M, dois trechos), os 29
   áudios com transcrição, as seis fotos (sem gente) e a vendedora.
   Fila: FILA-LIVE-386.md · 002.
   ============================================================ */
var YT = 'FnMVGYhlE-M';
var L = [
  { k: 'capa', est: null, img: 'vitrine' },
  { k: 'veste', est: 'o', min: 7, img: 'rua', rot: 'I · Your Clothes', t: 'Before Bob: you.', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'historia', est: 'l', min: 7, img: 'estacao', rot: 'II · The Story So Far', t: 'Day four of the race. Where is everyone?', p: 'Listen to a card first. Answer the question. Then open the transcript and read it out loud.' },
  { k: 'video1', est: 'l', min: 7, img: 'rua', rot: 'III · Cold in Cambridge', t: 'Watch Bob in Cambridge. Six words matter.', p: 'Ears only. Tap each word when you hear it.' },
  { k: 'quero', est: 'o', min: 7, extra: 1, img: 'rua', rot: 'IV · I Want a Coat', t: 'Bob speaks. Hear it, say it, then see it.', p: 'One word changes each time. Then say it with something you really want.' },
  { k: 'cores', est: 'l', min: 7, extra: 1, img: 'arara', rot: 'V · The Colors', t: 'The coat on the hanger takes your color.', p: 'Say the whole sentence first. Then tap the color, and check with the voice.' },
  { k: 'gx', est: 'o', min: 4, img: 'arara', rot: 'VI · Look First', t: 'Four pictures from Bob’s day.', p: 'Look at the picture. Guess what Bob says. Then tap to see it, and say it.' },
  { k: 'tamanho', est: 'f', min: 6, img: 'espelho', rot: 'VII · The Sizes', t: 'Hold each coat up against Bob. Only one fits.', p: 'Say the size out loud. Then put the coat on him.' },
  { k: 'video2', est: 'l', min: 7, img: 'vitrine', rot: 'VIII · In the Shop', t: 'Bob in the shop. You know every one of these words.', p: 'Tap each word when you hear it. Then one question.' },
  { k: 'tags', est: 'f', min: 6, extra: 1, img: 'etiqueta', rot: 'IX · The Tags', t: 'Three tags for every thing: SIZE, COLOR, THING.', p: 'Say it first. Then hang the tags. They only hang in one order.' },
  { k: 'arara', est: 'o', min: 7, extra: 1, img: 'arara', rot: 'X · The Rack', t: 'Six coats. Bob’s money: £100 for five days.', p: 'Say the whole coat. Tap it to see the price. Expensive or cheap? Then Bob buys one.' },
  { k: 'cliente', est: 'o', min: 7, extra: 1, img: 'vitrine', rot: 'XI · The Shop Assistant', t: 'Your turn to shop. Your teacher works in the shop.', p: 'Three friends, three things. Say what you want, ask the price, and decide.' },
  { k: 'guarda', est: 'o', min: 7, extra: 1, img: 'arara', rot: 'XII · Your Wardrobe', t: 'Now your own clothes.', p: 'Answer out loud. Then the follow-up comes.' },
  { k: 'fim', est: 'w', min: 6, img: 'estacao', rot: 'XIII · Your Shopping List', t: 'Bob is warm on the train. Now your list.', p: 'Write four things you want, each with a size and a color: I want a small black coat. The red line watches the order. It goes to your My notes.' }
];

/* as cores e os desenhos */
var COR = { black: '#2a2d33', red: '#b8443c', yellow: '#d9ac3f', blue: '#3f6a99', white: '#e6e2da', green: '#5c8055', brown: '#7a5233', gray: '#8a8d93' };
function casaco(cor, o) {
  o = o || {}; var c = COR[cor] || cor || '#3a3d44', s = o.sem ? '' : '<path d="M60 6 q0 -6 6 -6 q6 0 6 6 q0 5 -6 9" class="gancho"/><path d="M30 26 L66 15 L102 26" class="cabide"/>';
  return '<svg class="desenho casaco' + (o.cls ? ' ' + o.cls : '') + '" viewBox="0 0 132 170" role="img" aria-label="A ' + (cor || '') + ' coat">' + s
    + '<path d="M40 24 L66 30 L92 24 L118 44 L124 120 L106 124 L102 70 L104 162 L28 162 L30 70 L26 124 L8 120 L14 44 Z" fill="' + c + '" class="corpo"/>'
    + '<path d="M40 24 L66 58 L92 24 L84 22 L66 44 L48 22 Z" fill="rgba(0,0,0,.28)"/><path d="M66 58 L66 162" class="costura"/>'
    + '<circle cx="73" cy="78" r="3" class="botao"/><circle cx="73" cy="100" r="3" class="botao"/><circle cx="73" cy="122" r="3" class="botao"/>'
    + '<path d="M36 112 h16 M80 112 h16" class="bolso"/></svg>';
}
function coisa(t, cor) {
  var c = COR[cor] || cor;
  if (t === 'coat') return casaco(cor, { sem: 1 });
  if (t === 'bag') return '<svg class="desenho" viewBox="0 0 132 170"><path d="M44 62 q0 -36 22 -36 q22 0 22 36" fill="none" stroke="' + c + '" stroke-width="8"/><rect x="22" y="60" width="88" height="86" rx="12" fill="' + c + '"/><rect x="22" y="60" width="88" height="22" rx="10" fill="rgba(0,0,0,.25)"/><circle cx="66" cy="84" r="5" class="botao"/></svg>';
  if (t === 'hat') return '<svg class="desenho" viewBox="0 0 132 170"><path d="M26 112 q0 -64 40 -64 q40 0 40 64 Z" fill="' + c + '"/><rect x="18" y="104" width="96" height="22" rx="10" fill="' + c + '"/><rect x="18" y="104" width="96" height="22" rx="10" fill="rgba(0,0,0,.22)"/><circle cx="66" cy="44" r="10" fill="' + c + '"/></svg>';
  return '<svg class="desenho" viewBox="0 0 132 170"><path d="M44 36 L66 44 L88 36 L120 56 L108 80 L96 74 L98 150 L34 150 L36 74 L24 80 L12 56 Z" fill="' + c + '"/><path d="M52 38 q14 14 28 0" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="4"/></svg>';
}
function manequim(roupa) {
  return '<svg class="manequim" viewBox="0 0 160 300" role="img" aria-label="A shop mannequin"><circle cx="80" cy="34" r="22" class="mq"/><path d="M72 56 h16 v10 h-16z" class="mq"/><path d="M42 74 q38 -12 76 0 l6 96 h-88z" class="mq"/><path d="M52 170 h56 l-6 118 h-14 l-8 -100 l-8 100 h-14z" class="mq"/><path d="M74 292 h12 M80 292 v8" class="mq-pe"/>'
    + (roupa ? '<g class="veste ' + roupa.t + '" transform="translate(' + roupa.x + ' ' + roupa.y + ') scale(' + roupa.e + ')"><path d="M40 24 L66 30 L92 24 L118 44 L124 120 L106 124 L102 70 L104 162 L28 162 L30 70 L26 124 L8 120 L14 44 Z" fill="' + COR.black + '" stroke="#8b8f98" stroke-width="2"/><path d="M40 24 L66 58 L92 24 L84 22 L66 44 L48 22 Z" fill="rgba(0,0,0,.28)"/></g>' : '') + '</svg>';
}

/* I · o que você está vestindo */
var VESTE = [
  { k: 'YOUR SHIRT', q: 'What color is your shirt right now?', fup: 'Is it big or small? Say it with the thing: a … shirt.', st: ['It’s …', 'My shirt is …'], ex: 'It’s blue. It’s a big blue shirt.' },
  { k: 'YOUR SHOES', q: 'Look down. What color are your shoes?', fup: 'Are they old or new?', st: ['They’re …', 'My shoes are …'], ex: 'They’re white. They’re old white shoes.' },
  { k: 'COLD DAYS', q: 'It is very cold today. What do you want?', fup: 'What color is it?', st: ['I want a …', 'My … is …'], ex: 'I want a long black coat and a red hat.' },
  { k: 'YOUR BAG', q: 'Your bag today: what is it like?', fup: 'Is it new or old?', st: ['It’s a … bag.', 'It’s …'], ex: 'It’s a small brown bag. It’s old, but it’s nice.' }
];

/* II · a história */
var HIST = [
  { k: 'THE RACE', au: 'r-race.mp3', t: 'London to Edinburgh. Five days. Three people. One hundred pounds each. Day four now.', q: 'How much money does each person have?', ops: ['One hundred pounds.', 'Fifty pounds.', 'Five pounds.'] },
  { k: 'FRAN AND PAULA', au: 'r-two.mp3', t: 'Fran is on a bike. Paula is on a bus. They are moving north. They are not cold.', q: 'Is Paula cold?', ops: ['No, she isn’t.', 'Yes, she is.', 'She’s in Cambridge.'] },
  { k: 'BOB', au: 'r-bob.mp3', t: 'Bob is in Cambridge. Bob is cold. His train leaves in three hours. He does not have a coat.', q: 'What does Bob not have?', ops: ['A coat.', 'A train.', 'A bike.'] }
];

/* III e VII · os trechos do vídeo */
var VIDEOS = {
  video1: { ini: 36, fim: 86, cred: 'Video: from 0:36 to 1:26', antes: 'Where is Bob? What is the weather like? Guess before you watch.', pal: ['Cambridge', 'cold', 'coat', 'train', 'three hours', 'want'], trans: 'I am in Edinburgh. Fran is here, Paula is in London, and Bob is in Cambridge. Bob is in Cambridge. He is cold, and he does not have a coat. I am in Cambridge. My train leaves in three hours. It is very cold today. I want a coat.', q: 'Why is Bob cold?', st: ['Because it is …', 'He is …'], ex: 'Because it is very cold today.', fecho: 'COLD and COAT: the two words of the hour. Two different sounds.' },
  video2: { ini: 118, fim: 194, cred: 'Video: from 1:58 to 3:14', antes: 'What color do you think Bob buys?', pal: ['black', 'yellow', 'red', 'small', 'medium', 'large'], trans: 'Black? Yellow? Red? Maybe red. Small? Medium? Large? Yeah. I want a small, black coat. It is so warm.', q: 'Maybe one color, then another. Which ones?', st: ['Maybe …', 'Then a …'], ex: 'Maybe red… and then a small black coat. “It is so warm.”', fecho: 'Maybe red… and then a small, black coat.' }
};

/* IV · eu quero */
var QUERO = [
  { au: 'w-coat.mp3', en: 'I want a coat.', troca: 'a coat' },
  { au: 'w-warm.mp3', en: 'I want a warm coat.', troca: 'warm' },
  { au: 'w-cold.mp3', en: 'It is very cold today.', troca: 'very cold' },
  { au: 'w-black.mp3', en: 'I want a black coat.', troca: 'black' },
  { au: 'w-small.mp3', en: 'I want a small coat.', troca: 'small' }
];

/* V · as cores */
var CORES = [
  { c: 'black', au: 'k-black.mp3' }, { c: 'red', au: 'k-red.mp3' }, { c: 'yellow', au: 'k-yellow.mp3' },
  { c: 'blue', au: 'k-blue.mp3' }, { c: 'white', au: 'k-white.mp3' }, { c: 'green', au: 'k-green.mp3' }
];

/* VI · os tamanhos (escala do casaco no manequim) */
var TAM = [
  { t: 'medium', e: .82, x: 26, y: 62, au: 't-medium.mp3', w: 'The arms are too long on him.' },
  { t: 'large', e: 1.02, x: 13, y: 60, au: 't-large.mp3', w: 'He is inside it twice!' },
  { t: 'small', e: .62, x: 39, y: 64, au: 't-small.mp3', w: 'It fits!', ok: 1 }
];

/* VIII · as etiquetas */
var TAGS = [
  { p: ['black', 'coat'], au: 'a-black.mp3', t: 'coat', c: 'black' },
  { p: ['small', 'black', 'coat'], au: 'a-small.mp3', t: 'coat', c: 'black' },
  { p: ['large', 'red', 'coat'], au: 'a-large.mp3', t: 'coat', c: 'red' },
  { p: ['small', 'black', 'bag'], au: 'a-bag.mp3', t: 'bag', c: 'black' },
  { p: ['large', 'blue', 'hat'], au: '', t: 'hat', c: 'blue' },
  { p: ['medium', 'white', 'shirt'], au: '', t: 'shirt', c: 'white' }
];
var ROTULO = { small: 'SIZE', medium: 'SIZE', large: 'SIZE', black: 'COLOR', red: 'COLOR', blue: 'COLOR', white: 'COLOR', coat: 'THING', bag: 'THING', hat: 'THING', shirt: 'THING' };

/* IX · a arara */
var ARARA = [
  { t: 'small', c: 'black', p: 50, au: 'l-smallblack.mp3' }, { t: 'large', c: 'red', p: 45, au: 'l-largered.mp3' },
  { t: 'small', c: 'yellow', p: 30, au: 'l-smallyellow.mp3' }, { t: 'medium', c: 'blue', p: 60, au: 'l-mediumblue.mp3' },
  { t: 'large', c: 'black', p: 55, au: 'l-largeblack.mp3' }, { t: 'medium', c: 'green', p: 35, au: 'l-mediumgreen.mp3' }
];
var ESCALA = { small: .78, medium: .9, large: 1 };

/* X · a vendedora */
var CLIENTES = [
  { k: 'FOR YOUR MOTHER', pede: 'something warm · she is small · red', ex: 'Hello! I want a small red coat for my mother. How much is it? … OK, yes, please.' },
  { k: 'FOR YOUR BROTHER', pede: 'something for his head · he is big · blue, please', ex: 'I want a large blue hat. How much is it? … Twenty pounds? Yes, please.' },
  { k: 'FOR YOU', pede: 'your choice · your size · your color', ex: 'I want a medium green sweater. How much is it? … Sixty pounds? No, thank you!' }
];
var PARTES = [{ k: 'quero', t: 'I WANT A …' }, { k: 'ordem', t: 'SIZE · COLOR · THING' }, { k: 'preco', t: 'HOW MUCH IS IT?' }, { k: 'decide', t: 'YES, PLEASE / NO, THANK YOU' }];

/* XI · seu guarda-roupa */
var GUARDA = [
  { q: 'Your favorite piece of clothing: what is it?', fup: 'Is it new or old?', st: ['My favorite is a …', 'It’s a … … …'], ex: 'My favorite is a big green sweater. It’s old.' },
  { q: 'Is yellow your color?', fup: 'And black?', st: ['Yes, it is.', 'No, it isn’t.'], ex: 'No, it isn’t. Yellow is not my color!' },
  { q: 'A thing for this month: what is it?', fup: 'How much is it?', st: ['I want a …', 'It’s about …'], ex: 'I want a small black backpack. It’s about forty dollars.' },
  { q: 'Your turn. Ask me: what do you want?', fup: 'Now ask me about my favorite coat.', st: ['What do you want?', 'What color is …?'], ex: 'What do you want? What color is your favorite coat?' }
];

/* ---------- o estado ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  veste: { sel: -1, foi: {} }, hist: { esc: {} },
  video1: { p: 0, ouviu: {} }, video2: { p: 0, ouviu: {} },
  quero: { n: 0, viu: 0 }, cores: { c: '', foi: {} }, tm: { esc: -1, foi: {} },
  tg: { n: 0, poe: [], err: '' }, ar: { sel: -1, vistos: {}, comprou: -1 },
  cli: { n: 0, partes: {}, erro: {} }, guarda: { n: 0, foi: {} } };

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · LONDON SERIES · A1</span><h1>A Small <b>Black Coat</b></h1>'
    + '<p class="sub">Bob is cold. His train leaves in three hours. He needs a coat, and two words in front of it.</p>'
    + '<div class="chipsx"><span class="pilula">I want a …</span><span class="pilula">size · color · thing</span><span class="pilula">How much is it?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the shop</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('vitrine') + '" alt="A shop window with coats on a rack, on a rainy street"><div class="placa-capa"><small>CAMBRIDGE · DAY FOUR</small><b>3°C</b><span>TRAIN IN 3 HOURS</span></div></div></div>';
};
R.veste = function (c) { return cartasPessoais(c, VESTE, S.veste, 'veste'); };

R.historia = function (c) {
  var e = S.hist;
  return cab(c) + '<div class="hist">' + HIST.map(function (x, i) {
    var ouviu = (S.ouviu || {})[x.au], esc = e.esc[i], certo = esc === 0;
    var ops = ordem(x.ops.map(function (t, k) { return [t, k]; }), i + 1);
    return '<div class="hist-card vd' + (certo ? ' feito' : '') + '"><small>' + (i + 1) + ' · ' + x.k + '</small><div class="toca-linha">' + tocar(x.au) + '</div>' + transcricao(x.au, x.t, 'hs' + i)
      + (ouviu ? '<p class="q">' + x.q + '</p><div class="versoes">' + ops.map(function (o) {
        return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="hist" data-n="' + i + '" data-v="' + o[1] + '"' + (certo ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>'
        + (esc > 0 ? '<p class="recusa">Play the card again and read it out loud.</p>' + mostra('hs' + i, x.ops[0]) : '') : '')
      + '</div>';
  }).join('') + '</div>' + (HIST.every(function (_, i) { return e.esc[i] === 0; }) ? '<div class="foco"><div class="pergunta vd"><small>DAY FOUR</small><h2>Bob is cold, in Cambridge, with no coat. Three hours.</h2></div></div>' : '');
};

function cenaVideo(c, chave) {
  var v = VIDEOS[chave], e = S[chave], tudo = v.pal.every(function (w) { return e.ouviu[w]; });
  var passos = '<div class="tres-tempos">' + tempos3(e.p, 'vid-p', null, chave) + '</div>';
  var corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>' + v.antes + '</h2></div>' + fala(chave + 'a', ['I think …', 'Maybe …'], v.pal) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vid-p" data-c="' + chave + '" data-n="1">Watch</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Bob in Cambridge', '&start=' + v.ini + '&end=' + v.fim) + '<small class="cred">' + v.cred + '</small></div><div class="lado-video"><h5>TAP WHEN YOU HEAR IT</h5><div class="ouvidos">'
    + v.pal.map(function (w) { return '<button type="button" class="ouvido' + (e.ouviu[w] ? ' on' : '') + '" data-a="vid-w" data-c="' + chave + '" data-v="' + h(w) + '">' + w + '</button>'; }).join('') + '</div>'
    + (tudo ? '<p class="aprova">GOT IT. All six words.</p>' : '<p class="dica-aluno">Nobody has to understand the rest.</p>') + '<div><button type="button" class="btn" data-a="vid-p" data-c="' + chave + '" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>' + v.q + '</h2></div>' + fala(chave + 'b', v.st, []) + mostra(chave + 'q', v.ex) + ((S.trans || {})[chave + 't'] ? '<div class="post-trans vd"><small>WHAT THEY SAY IN THE VIDEO</small><p class="transcricao">' + v.trans + '</p></div>' : '<div class="resp-btn"><button type="button" class="pilula" data-a="trans" data-c="' + chave + 't">Show transcript</button></div>') + '<p class="aprova" style="text-align:center">' + v.fecho + '</p></div>';
  return cab(c) + passos + corpo;
}
R.video1 = function (c) { return cenaVideo(c, 'video1'); };
R.video2 = function (c) { return cenaVideo(c, 'video2'); };

R.quero = function (c) {
  var q = S.quero, n = q.n, fim = n >= QUERO.length, x = QUERO[Math.min(n, QUERO.length - 1)];
  if (fim) return cab(c) + trilha(QUERO, n) + '<div class="foco"><div class="pergunta vd ja"><small>NOW YOU</small><h2>Something you really want today: I want a …</h2></div>' + fala('querosua', ['I want a …', 'I want a … … today.'], ['warm', 'new', 'big', 'small', 'coffee', 'bike']) + mostra('querosua', 'I want a big cup of coffee. And I want a new phone.', 1) + '</div>';
  var en = q.viu ? x.en.replace(x.troca, '<mark>' + x.troca + '</mark>') : '';
  return cab(c) + trilha(QUERO, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (q.viu ? en : 'Play it. Say it with Bob.') + '</span></div>'
    + '<div style="text-align:center">' + (q.viu ? '<button type="button" class="btn" data-a="quero-prox">Next</button>' : '<button type="button" class="btn cheio" data-a="quero-viu">Said it · show it</button>') + '</div>'
    + (n === 2 && q.viu ? '<p class="dica-aluno" style="text-align:center">Cold (the weather) and coat (the thing): two different sounds.</p>' : '') + '</div>';
};

R.cores = function (c) {
  var e = S.cores, x = CORES.filter(function (k) { return k.c === e.c; })[0], todas = CORES.every(function (k) { return e.foi[k.c]; });
  var amostras = '<div class="amostras">' + CORES.map(function (k) {
    return '<button type="button" class="amostra' + (e.c === k.c ? ' on' : '') + (e.foi[k.c] ? ' feito' : '') + '" data-a="cor" data-v="' + k.c + '" style="--cor:' + COR[k.c] + '"><i></i><span>' + k.c + '</span></button>';
  }).join('') + '</div>';
  var lado = '<div class="lado-cabide">' + (x ? '<div class="toca-linha vd">' + tocar(x.au) + '<span>Check with the voice: <b>I want a ' + x.c + ' coat.</b></span></div>' : '<p class="dica-aluno">Say it first: “I want a … coat.” Then tap the color.</p>')
    + amostras + (todas ? '<p class="aprova">GOT IT. Six colors, and the sentence never changed. Only one word moved: I want a … coat.</p>' + follow('FOLLOW-UP', 'And your coat at home? What color is it?', ['My coat is …', 'I have a … coat.'], [], 'corescasa') : '') + '</div>';
  return cab(c) + '<div class="mesa-cabide"><div class="cabide-box vd">' + casaco(e.c || 'gray', { cls: e.c ? 'troca' : 'vazio' }) + '<small>' + (e.c ? 'a ' + e.c + ' coat' : 'which color?') + '</small></div>' + lado + '</div>';
};

R.tamanho = function (c) {
  var e = S.tm, x = e.esc >= 0 ? TAM[e.esc] : null, achou = x && x.ok;
  var cabides = '<div class="cabides">' + TAM.map(function (t, i) {
    return '<button type="button" class="cabide-t' + (e.esc === i ? ' on' : '') + (e.foi[i] ? ' visto' : '') + '" data-a="tm" data-n="' + i + '"><div class="mini" style="--e:' + t.e + '">' + casaco('black', { sem: 1 }) + '</div><b>' + t.t + '</b></button>';
  }).join('') + '</div>';
  var lado = (x ? '<div class="toca-linha vd">' + tocar(x.au) + '<span>“This one is ' + x.t + '.”</span></div>' + (achou ? '<p class="aprova">GOT IT. It fits! Bob wants a small coat.</p>' + follow('FOLLOW-UP', 'What size are you in a shop?', ['I’m a …', 'Small, medium or large?'], [], 'tmeu', mostra('tmeu', 'I’m a medium. Sometimes a large.', 1)) : '<p class="recusa">' + x.w + ' Say the next size out loud and try again.</p>')
    : '<p class="dica-aluno">Say “This one is medium”. Then tap the coat.</p>');
  return cab(c) + '<div class="provador"><div class="espelho-box vd">' + manequim(x ? { t: x.ok ? 'cabe' : 'nao', e: x.e, x: x.x, y: x.y } : null) + '</div><div class="lado-prova">' + cabides + lado + '</div></div>';
};

R.tags = function (c) {
  var g = S.tg, n = g.n, fim = n >= TAGS.length, x = TAGS[Math.min(n, TAGS.length - 1)];
  if (fim) return cab(c) + trilha(TAGS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX THINGS, ONE ORDER</small><h2>Size · color · thing. The thing always comes last.</h2></div>'
    + armas([['COLOR AFTER', 'a coat black', 'a black coat', 'The thing goes last.'], ['COLOR FIRST', 'a black small coat', 'a small black coat', 'Size first, then color.'], ['NO A', 'I want black coat.', 'I want a black coat.', 'One coat: say A.'], ['WON’T', 'I won’t a coat.', 'I want a coat.', 'Want has a long A. Won’t means will not.']], 'THE FOUR TRAPS · TAP TO FIX') + '</div>';
  var alvo = x.p, pronto = g.poe.length === alvo.length;
  var ganchos = '<div class="ganchos">' + alvo.map(function (w, i) {
    var r = alvo.length === 2 ? ['COLOR', 'THING'][i] : ['SIZE', 'COLOR', 'THING'][i];
    return '<div class="gancho-t' + (g.poe[i] ? ' cheio' : '') + '"><small>' + r + '</small><b>' + (g.poe[i] || '·') + '</b></div>';
  }).join('') + '</div>';
  var soltas = ordem(alvo.map(function (w, i) { return [w, i]; }), n + 1).filter(function (o) { return g.poe.indexOf(o[0]) < 0; });
  var pecas = '<div class="soltas">' + soltas.map(function (o) { return '<button type="button" class="etiqueta' + (g.err === o[0] ? ' treme' : '') + '" data-a="tag" data-v="' + o[0] + '"><i></i>' + o[0] + '</button>'; }).join('') + '</div>';
  return cab(c) + trilha(TAGS, n) + '<div class="mesa-tags"><div class="coisa-box vd">' + coisa(x.t, x.c) + '</div><div class="lado-tags">' + ganchos
    + (pronto ? '<p class="aprova">GOT IT. a ' + alvo.join(' ') + '</p>' + (x.au ? '<div class="toca-linha vd">' + tocar(x.au) + '<span>Say it: <b>I want a ' + alvo.join(' ') + '.</b></span></div>' : '<p class="dica-aluno">Say it: <b>I want a ' + alvo.join(' ') + '.</b></p>') + '<div><button type="button" class="btn" data-a="tag-prox">Next thing</button></div>'
      : pecas + (g.err ? '<p class="recusa">Not there. <b>Size</b> first, <b>color</b> second, the <b>thing</b> last.</p>' + mostra('tg' + n, 'a ' + alvo.join(' ')) : '<p class="dica-aluno">Say it first: “a ' + '…”. Then tap the tags in order.</p>'))
    + '</div></div>';
};

R.arara = function (c) {
  var a = S.ar, x = a.sel >= 0 ? ARARA[a.sel] : null, gasto = a.comprou >= 0 ? ARARA[a.comprou].p : 0;
  var rack = '<div class="rack vd"><div class="barra"></div>' + ARARA.map(function (k, i) {
    var visto = a.vistos[i];
    return '<button type="button" class="pendurado' + (a.sel === i ? ' on' : '') + (a.comprou === i ? ' comprado' : '') + '" data-a="ar" data-n="' + i + '"><div class="mini" style="--e:' + ESCALA[k.t] + '">' + casaco(k.c) + '</div><span class="preco' + (visto ? ' virou' : '') + '">' + (visto ? '£' + k.p : '£ ?') + '</span></button>';
  }).join('') + '</div>';
  var carteira = '<div class="carteira vd"><small>BOB’S MONEY · 5 DAYS</small><b>£' + (100 - gasto) + '</b><span>' + (a.comprou >= 0 ? 'He bought a ' + ARARA[a.comprou].t + ' ' + ARARA[a.comprou].c + ' coat.' : 'Nothing yet.') + '</span></div>';
  var lado = x ? '<div class="toca-linha vd">' + tocar(x.au) + '<span>“I want a ' + x.t + ', ' + x.c + ' coat.”</span></div>'
    + follow('EXPENSIVE OR CHEAP?', 'It’s £' + x.p + '. £50 or more is expensive.', ['It’s expensive.', 'It’s cheap.', 'How much is it?'], [], 'ar' + a.sel, mostra('ar' + a.sel, 'It’s £' + x.p + '. ' + (x.p >= 50 ? 'It’s expensive!' : 'It’s cheap.')))
    + (a.comprou === a.sel ? '<p class="aprova">Bob buys it. ' + (100 - x.p < 50 ? 'Only £' + (100 - x.p) + ' for four more days!' : 'He still has £' + (100 - x.p) + '.') + '</p>' : '<div><button type="button" class="btn" data-a="ar-compra">Bob buys this one</button></div>')
    : '<p class="dica-aluno">Your teacher points at a coat. Say it: “I want a medium blue coat.” Then tap it.</p>';
  return cab(c) + '<div class="loja-arara">' + rack + '<div class="lado-arara">' + carteira + lado + '</div></div>';
};

R.cliente = function (c) {
  var e = S.cli, n = e.n, fim = n >= CLIENTES.length, x = CLIENTES[Math.min(n, CLIENTES.length - 1)];
  if (fim) return cab(c) + trilha(CLIENTES, n) + '<div class="foco"><div class="pergunta vd"><small>THREE FRIENDS, THREE THINGS</small><h2>Every one in the right order: size, color, thing.</h2></div></div>';
  var pt = e.partes[n] || {}, err = e.erro[n];
  return cab(c) + trilha(CLIENTES, n) + '<div class="balcao"><div class="pedido vd"><small>' + x.k + '</small><h3>' + x.pede.split(' · ').map(function (p) { return '<span>' + p + '</span>'; }).join('') + '</h3><p class="so-prof diga-prof">You are the shop assistant: <b>“Hello! Can I help you?”</b> Be a little difficult: <i>“We don’t have red. Blue?”</i></p></div>'
    + '<div class="lado-balcao">' + fala('cli' + n, ['I want a …', 'How much is it?', 'I’ll take it.', 'No, thank you.'], ['small', 'medium', 'large', 'coat', 'hat', 'sweater', 'scarf'])
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="cli-parte" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (err ? ' on' : '') + '" data-a="cli-erro">MISTAKE HEARD: a coat black / a black small …</button></div>'
    + (err ? '<p class="recusa">Fix it together: size first, color second, the thing last: <b>a small black coat</b>.</p>' : '')
    + mostra('cli' + n, x.ex, 1) + '<div><button type="button" class="btn" data-a="cli-prox">Next friend</button></div></div></div>';
};

R.guarda = function (c) { return sequencia(c, GUARDA, S.guarda, 'guarda', 'Your wardrobe, in English, in the right order.'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I want a small black coat.\nI want a …', 'Your shopping list',
    ['I want a ', 'small ', 'medium ', 'large ', 'black ', 'red ', 'blue ', 'coat', 'hat', 'bag'], ['YOUR SHOPPING LIST', 'Four things you want. Each one with a size and a color.'])
    + '<div class="lado-fim"><div class="grande vd"><span>a <u>small</u> <u>black</u> <u>coat</u></span><small>SIZE · COLOR · THING. The thing always comes last. And one thing takes A: I want a coat.</small></div>'
    + mostra('fim', 'I want a small black coat.<br>I want a large red bag for my mother.<br>I want a medium blue sweater.<br>I want a big white cup of coffee!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- os toques desta aula ---------- */
TOQUES.hist = function (b, n, v) { if (S.hist.esc[n] === 0) return false; S.hist.esc[n] = +v; };
TOQUES['vid-p'] = function (b, n, v, c) { S[c].p = n; };
TOQUES['vid-w'] = function (b, n, v, c) { S[c].ouviu[v] = !S[c].ouviu[v]; };
TOQUES['quero-viu'] = function () { S.quero.viu = 1; };
TOQUES['quero-prox'] = function () { S.quero = { n: S.quero.n + 1, viu: 0 }; };
TOQUES.cor = function (b, n, v) { S.cores.c = v; S.cores.foi[v] = 1; };
TOQUES.tm = function (b, n) { S.tm.esc = n; S.tm.foi[n] = 1; };
TOQUES.tag = function (b, n, v) {
  var g = S.tg, x = TAGS[g.n]; if (!x) return false;
  if (x.p[g.poe.length] === v) { g.poe.push(v); g.err = ''; } else g.err = v;
};
TOQUES['tag-prox'] = function () { S.tg = { n: S.tg.n + 1, poe: [], err: '' }; };
TOQUES.ar = function (b, n) { S.ar.sel = n; S.ar.vistos[n] = 1; };
TOQUES['ar-compra'] = function () { S.ar.comprou = S.ar.sel; };
TOQUES['cli-parte'] = function (b, n, v) { var e = S.cli; e.partes[e.n] = e.partes[e.n] || {}; e.partes[e.n][v] = !e.partes[e.n][v]; };
TOQUES['cli-erro'] = function () { var e = S.cli; e.erro[e.n] = !e.erro[e.n]; };
TOQUES['cli-prox'] = function () { S.cli.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G12 · uma cena curta nova (k: gx) antes de tamanho.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'fotoPrimeiro', titulo: 'Look first. What does Bob say?',
  cenas: [
    { img: 'rua', antes: 'Cambridge. It is three degrees. Bob has no coat.', frase: '“I want <mark>a coat</mark>.”' },
    { img: 'vitrine', antes: 'The shop window. The coat on the hanger is not big.', frase: '“I want <mark>a small</mark> coat.”' },
    { img: 'arara', antes: 'The rack. Six coats. Bob points at the dark one.', frase: '“I want a small <mark>black</mark> coat.”' },
    { img: 'etiqueta', antes: 'The tag has three lines: size, color, thing.', frase: '“A <mark>small black coat</mark>, please.”' }
  ],
  nota: 'Three tags, always in this order: <b>size → color → thing</b>. A <b>small black coat</b>. Not “a black small coat”, and no “and”.',
  uso: { p: 'Your turn. You are in the shop. Say what you want: size, color, thing.', molde: ['I want a … … …', 'A … … …, please.'], ex: 'I want a large blue sweater. A small red bag, please.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_foto', GX_EXPLICA); };
