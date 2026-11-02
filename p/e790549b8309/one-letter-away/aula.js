/* ============================================================
   ABSOLUTELY EXHAUSTED · THE THERMOMETER · LIVE CLASS  06/10/2026
   Main series B1 · adjetivos graduáveis (a bit / quite / very tired) ×
   extremos (absolutely exhausted) · really serve aos dois.
   Erros universais: "very exhausted", "absolutely good", "very amazing",
   "absolutely tired".
   O MUNDO (da aula velha): a Lena lê a fila de resenhas à noite e apaga
   as que ninguém entende; seis recados de resenhistas (ol-ouve1–6,
   conferidos no whisper em 06/10: batem); três lugares para resenhar.
   A CARA: o TERMÔMETRO DE INTENSIDADE — uma coluna de cinco marcas; VERY
   sobe o mercúrio até a terceira, ABSOLUTELY vai até a quinta (e o bulbo
   brilha), REALLY serve nas duas. A fila de resenhas mantém as estrelas
   só como nota de cada resenha. Fila: FILA-LIVE-386.md · 081.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'cinema' },
  { k: 'abre', est: 'o', min: 7, img: 'fila', rot: 'I · Best and Worst', t: 'Lena reads movie reviews at night. First, yours.', p: 'Pick a card. Answer out loud with one word for how the movie made you feel.' },
  { k: 'pares', est: 'f', min: 6, img: 'fila', rot: 'II · Normal and Extreme', t: 'Every normal adjective has an extreme partner that means “very, very”.', p: 'Find the partner. Then say both: very tired, absolutely exhausted.' },
  { k: 'termo', est: 'f', min: 6, img: 'cinema', rot: 'III · The Thermometer', t: 'VERY goes up to three. ABSOLUTELY goes to five. REALLY works with both.', p: 'Pick the word that can go before the adjective. Then say a full sentence.' },
  { k: 'ouve', est: 'l', min: 7, img: 'fones', rot: 'IV · Six Reviewers', t: 'Six reviewers left voice notes.', p: 'Play each one. Which word could go before the adjective you heard?' },
  { k: 'erros', est: 'f', min: 6, img: 'fila', rot: 'V · Very Exhausted', t: 'Five sentences have a problem. One is right.', p: 'Pick the fix. Then say the whole sentence.' },
  { k: 'fila', est: 'o', min: 7, img: 'mesa', rot: 'VI · Lena’s Queue', t: 'Lena approves a review only when the words match the stars.', p: 'Read the stars. Pick the words that match. Then read the review out loud, with feeling.' },
  { k: 'escala', est: 'o', min: 7, extra: 1, img: 'cinema', rot: 'VII · Climb the Scale', t: 'Four scales. Climb each one out loud.', p: 'Say all four steps. Then use one of them in a true sentence.' },
  { k: 'lugares', est: 'o', min: 7, extra: 1, img: 'cafe', rot: 'VIII · Your Review', t: 'Three places. Rate each one and review it out loud. Lena is listening.', p: 'Tap the stars. Use the words that match. Your teacher asks one question after each review.' },
  { k: 'apagada', est: 'f', min: 6, extra: 1, img: 'fila', rot: 'IX · The Deleted Review', t: 'Lena deleted a review: “This movie is bored.” Nobody could tell what it meant.', p: 'Rewrite it in three clear sentences.' },
  { k: 'fim', est: 'w', min: 6, img: 'cinema', rot: 'X · Your Movies Again', t: 'Your two movies from scene I come back.', p: 'Write a review of your best and your worst movie. It goes to your My notes.' }
];

var TR = {
  'ol-ouve1.mp3': 'Honestly, the ending was surprising.', 'ol-ouve2.mp3': 'I was surprised he came back at all.', 'ol-ouve3.mp3': 'The second season is disappointing.',
  'ol-ouve4.mp3': 'We were so bored, we started talking.', 'ol-ouve5.mp3': 'The main character is exhausting.', 'ol-ouve6.mp3': 'I am interested, but not this week.'
};

var ABRE = [
  { k: 'The best', q: 'The BEST movie you’ve ever seen. Say its name, and one word for how it made you feel.', fup: 'Why that word?', st: ['It was …'], ex: 'It was amazing. I watched it three times.' },
  { k: 'The worst', q: 'The WORST movie you’ve ever seen. Say its name, and one word for what it was like.', fup: 'Did you finish it?', st: ['It was …'], ex: 'It was awful. I fell asleep.' }
];
var FORMAS = [{ k: 'very', t: 'VERY + NORMAL' }, { k: 'abs', t: 'ABSOLUTELY + EXTREME' }, { k: 'vx', t: 'VERY + EXTREME (VERY AMAZING)', erro: 1 }, { k: 'an', t: 'ABSOLUTELY + NORMAL', erro: 1 }];

var PARES = [
  { n: 'tired', ops: ['exhausted', 'sleepy', 'bored'] }, { n: 'good', ops: ['amazing', 'nice', 'fine'] }, { n: 'bad', ops: ['awful', 'sad', 'wrong'] }, { n: 'hungry', ops: ['starving', 'thirsty', 'full'] },
  { n: 'cold', ops: ['freezing', 'cool', 'wet'] }, { n: 'big', ops: ['huge', 'tall', 'wide'] }, { n: 'funny', ops: ['hilarious', 'happy', 'strange'] }, { n: 'interesting', ops: ['fascinating', 'important', 'different'] }
];

var TERMO = [
  { a: 'exhausted', x: 1, s: 'After the night shift I was ___ exhausted.', fup: 'What makes you absolutely exhausted?', fr: 'I get absolutely exhausted when…' },
  { a: 'tired', x: 0, s: 'After the movie I was ___ tired.', fup: 'Are you very tired today? Why?', fr: 'Today I am…' },
  { a: 'freezing', x: 1, s: 'The cinema was ___ freezing.', fup: 'Is your home absolutely freezing in winter?', fr: 'In winter my home is…' },
  { a: 'cold', x: 0, s: 'The popcorn was ___ cold.', fup: 'Do you like very cold drinks?', fr: 'I prefer…' },
  { a: 'hilarious', x: 1, s: 'The second half is ___ hilarious.', fup: 'Which movie is absolutely hilarious for you?', fr: '… is absolutely hilarious.' },
  { a: 'good', x: 0, s: 'The soundtrack is ___ good.', fup: 'What is a very good soundtrack you love?', fr: 'I love the soundtrack of…' },
  { a: 'awful', x: 1, s: 'The ending was ___ awful.', fup: 'Which movie had an absolutely awful ending?', fr: 'The ending of … was absolutely awful.' },
  { a: 'boring', x: 0, s: 'The first hour is ___ boring.', fup: 'What is very boring for you but fun for other people?', fr: 'For me, … is very boring.' }
];

var OUVE = [
  { au: 'ol-ouve1.mp3', adj: 'surprising', x: 0 }, { au: 'ol-ouve2.mp3', adj: 'surprised', x: 0 }, { au: 'ol-ouve3.mp3', adj: 'disappointing', x: 0 },
  { au: 'ol-ouve4.mp3', adj: 'bored', x: 0 }, { au: 'ol-ouve5.mp3', adj: 'exhausting', x: 1 }, { au: 'ol-ouve6.mp3', adj: 'interested', x: 0 }
];

var ERROS = [
  { f: 'After the flight I was <s>very exhausted</s>.', ops: ['absolutely exhausted', 'very very exhausted', 'too exhausted'], w: 'Extreme: absolutely.' },
  { f: 'The food was <s>absolutely good</s>.', ops: ['very good', 'absolutely goodest', 'completely good'], w: 'Normal: very.' },
  { f: 'The hotel room was <s>very huge</s>.', ops: ['absolutely huge', 'very big huge', 'quite huge'], w: 'Extreme: absolutely.' },
  { f: 'I was <s>absolutely hungry</s>.', ops: ['very hungry', 'absolutely hunger', 'completely hungry'], w: 'Normal: very. Or absolutely starving.' },
  { f: 'The movie was <s>very hilarious</s>.', ops: ['absolutely hilarious', 'very funny hilarious', 'a bit hilarious'], w: 'Extreme: absolutely.' },
  { f: 'It was really freezing outside.', ops: ['Nothing: it’s right', 'very freezing', 'absolutely cold'], w: 'Really works with both.' }
];

var FILA = [
  { stars: 5, txt: 'The final scene was ___. I cried twice.', ops: ['absolutely amazing', 'quite good', 'very amazing'] },
  { stars: 1, txt: 'Two hours of nothing. It was ___.', ops: ['absolutely awful', 'a bit bad', 'very terrible'] },
  { stars: 3, txt: 'Nice actors, slow story. It was ___.', ops: ['quite good', 'absolutely fantastic', 'absolutely good'] },
  { stars: 5, txt: 'I laughed from start to finish. It’s ___.', ops: ['absolutely hilarious', 'very hilarious', 'a bit funny'] },
  { stars: 2, txt: 'The idea was good, but the movie was ___.', ops: ['very boring', 'absolutely boring', 'absolutely fascinating'] }
];

var ESCALAS = [
  { tema: 'THE WEATHER TODAY', d: ['a bit cold', 'quite cold', 'very cold', 'absolutely freezing'] },
  { tema: 'YOU, RIGHT NOW', d: ['a bit tired', 'quite tired', 'very tired', 'absolutely exhausted'] },
  { tema: 'YOUR LAST MEAL', d: ['quite good', 'very good', 'really delicious', 'absolutely delicious'] },
  { tema: 'YOUR CITY', d: ['quite big', 'very big', 'really huge', 'absolutely huge'] }
];

var LUGARES = [{ nome: 'THE CORNER CAFÉ', img: 'cafe', q: 'Would you go back? Why?' }, { nome: 'THE HOTEL BY THE STATION', img: 'hotel', q: 'What would you change first?' }, { nome: 'THE OLD CINEMA', img: 'cinema', q: 'Who would you take there?' }];
var BANCOS = { 1: ['absolutely awful', 'absolutely filthy', 'absolutely disgusting'], 2: ['very noisy', 'quite dirty', 'very slow'], 3: ['quite good', 'quite clean', 'very quiet'], 4: ['really good', 'really comfortable', 'very friendly'], 5: ['absolutely amazing', 'absolutely fantastic', 'absolutely delicious'] };

var APAGADA = [
  { q: 'Say the movie was not interesting:', ops: ['The movie was very boring.', 'The movie was absolutely boring.', 'The movie was very bored.'] },
  { q: 'Say how you felt at minute forty:', ops: ['I was absolutely exhausted.', 'I was very exhausted.', 'I was absolutely tired.'] },
  { q: 'Give the final verdict:', ops: ['It was absolutely awful.', 'It was absolutely bad.', 'It was very awful.'] }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, pr: { n: 0, esc: -1 }, tm: { n: 0, esc: '' }, ou: { esc: {} }, er: { n: 0, esc: -1 }, fl: { n: 0, esc: -1 }, es: { n: 0, passo: 0 }, lg: { n: 0, nota: {} }, ap: { n: 0, esc: -1 } };

function termometro(nivel, rotulos) {
  var marcas = '', h = 280, y0 = 40;
  for (var k = 1; k <= 5; k++) { var y = y0 + h - k * (h / 5); marcas += '<line x1="118" y1="' + y + '" x2="134" y2="' + y + '" class="marca-t"/><text x="142" y="' + (y + 5) + '" class="num-t' + (k <= nivel ? ' on' : '') + '">' + k + '</text>'; }
  var topo = y0 + h - nivel * (h / 5);
  var rot = rotulos ? '<text x="142" y="' + (y0 + h - 3 * (h / 5) - 18) + '" class="rot-t">VERY · up to 3</text><text x="142" y="' + (y0 + h - 5 * (h / 5) - 18) + '" class="rot-t abs">ABSOLUTELY · 5</text>' : '';
  return '<svg class="termo" viewBox="0 0 300 400" role="img" aria-label="Intensity: ' + nivel + ' of 5"><rect x="80" y="' + (y0 - 10) + '" width="34" height="' + (h + 20) + '" rx="17" class="tubo"/>'
    + '<rect x="88" y="' + topo + '" width="18" height="' + (y0 + h + 20 - topo) + '" rx="9" class="mercurio' + (nivel >= 5 ? ' quente' : '') + '"/>'
    + '<circle cx="97" cy="' + (y0 + h + 34) + '" r="30" class="bulbo' + (nivel >= 5 ? ' quente' : nivel > 0 ? ' morno' : '') + '"/>' + marcas + rot + '</svg>';
}
function estrelas(n) { var s = ''; for (var k = 1; k <= 5; k++) s += '<i class="' + (k <= n ? 'on' : '') + '">★</i>'; return '<span class="estrelas">' + s + '</span>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · B1 · THE REVIEW QUEUE</span><h1>Absolutely <b>Exhausted</b></h1>'
    + '<p class="sub">Very tired. Absolutely exhausted. <b>Never very exhausted, and never absolutely tired.</b></p>'
    + '<div class="chipsx"><span class="pilula">very tired</span><span class="pilula">absolutely exhausted</span><span class="pilula">really = both</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the review queue</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="termo-dupla">' + termometro(3, 0) + termometro(5, 0) + '</div><div class="termo-leg"><span>very tired</span><span>absolutely exhausted</span></div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · WRITE THEIR WORDS · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.pares = function (c) {
  var e = S.pr, n = e.n, fim = n >= PARES.length;
  var feitos = '<div class="pares-l">' + PARES.slice(0, n).map(function (p) { return '<span><i>' + p.n + '</i> → <b>' + p.ops[0] + '</b></span>'; }).join('') + '</div>';
  if (fim) return cab(c) + trilha(PARES, n) + '<div class="foco">' + feitos + '<div class="pergunta vd"><small>EIGHT PAIRS</small><h2>Three on the left, five on the right.</h2></div></div>';
  var x = PARES[n], ok = e.esc === 0;
  return cab(c) + trilha(PARES, n) + '<div class="mesa-c"><div class="lado-l">' + termometro(ok ? 5 : 3, 1) + '</div><div class="lado-l"><div class="balao vd"><small>NORMAL</small><p>very ' + x.n + '</p></div><h5 class="rot-ouve">THE EXTREME PARTNER: ABSOLUTELY …</h5>'
    + '<div class="tres-b">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 2).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="pr" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">Say both: “very ' + x.n + ', absolutely ' + x.ops[0] + '.”</p><div><button type="button" class="btn" data-a="pr-prox">Next pair</button></div>' : e.esc > 0 ? '<p class="recusa">Which one means “very, very”?</p>' : '') + feitos + '</div></div>';
};

R.termo = function (c) {
  var e = S.tm, n = e.n, fim = n >= TERMO.length;
  if (fim) return cab(c) + trilha(TERMO, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT ADJECTIVES</small><h2>Very stopped at three; absolutely went to five. Really went everywhere.</h2></div></div>';
  var x = TERMO[n], esc = e.esc, ok = esc === 'really' || (esc === 'very' && !x.x) || (esc === 'abs' && x.x);
  var nivel = esc === 'very' ? 3 : esc === 'abs' ? 5 : esc === 'really' ? (x.x ? 5 : 3) : 0;
  var palavra = esc === 'very' ? 'very' : esc === 'abs' ? 'absolutely' : esc === 'really' ? 'really' : '___';
  return cab(c) + trilha(TERMO, n) + '<div class="mesa-c"><div class="lado-l">' + termometro(nivel, 1) + '</div><div class="lado-l"><div class="balao vd"><p>' + x.s.replace('___', '<span class="lacuna-q">' + palavra + '</span>') + '</p></div>'
    + '<div class="tres-b">' + [['very', 'VERY'], ['abs', 'ABSOLUTELY'], ['really', 'REALLY']].map(function (o) { return '<button type="button" class="pilula grande-p' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="tm" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">' + (esc === 'really' ? 'Really works with both. Now say it with ' + (x.x ? 'absolutely' : 'very') + ' too.' : (x.x ? 'Extreme: it already means very, very.' : 'Normal: it has degrees.')) + '</p><div class="pede vd"><small>YOUR TURN</small><b>' + x.fup + '</b></div>' + fala('tm' + n, [x.fr], []) + '<div><button type="button" class="btn" data-a="tm-prox">Next adjective</button></div>'
      : esc ? '<p class="recusa">Is it normal or extreme? Very goes with normal. Absolutely goes with extreme.</p>' : '') + '</div></div>';
};

R.ouve = function (c) {
  var e = S.ou;
  return cab(c) + '<div class="ouve-3">' + OUVE.map(function (x, i) {
    var ouviu = (S.ouviu || {})[x.au], esc = e.esc[i], ok = esc === (x.x ? 'abs' : 'very');
    return '<div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>REVIEWER ' + (i + 1) + '</b></div>'
      + (ouviu ? '<div class="tres-b">' + [['very', 'VERY'], ['abs', 'ABSOLUTELY']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ou" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' : '<p class="transcricao vazia">Play it first.</p>')
      + (ok ? '<p class="aprova">' + (x.x ? 'absolutely' : 'very') + ' ' + x.adj + '</p>' + transcricao(x.au, TR[x.au], 'ou' + i) : esc ? '<p class="recusa">Listen again. Normal, or extreme?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>The adjective decides the word before it.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div><div class="tres-b centro">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 6).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="er" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + ' Say the whole sentence.</p><div style="text-align:center"><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Normal adjective? Very. Extreme? Absolutely. Really? Both.</p>' : '') + '</div>';
};

R.fila = function (c) {
  var e = S.fl, n = e.n, fim = n >= FILA.length;
  if (fim) return cab(c) + trilha(FILA, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE REVIEWS APPROVED</small><h2>The words matched the stars.</h2></div></div>';
  var x = FILA[n], ok = e.esc === 0;
  return cab(c) + trilha(FILA, n) + '<div class="mesa-c"><div class="lado-l"><div class="resenha' + (ok ? ' aprovada' : '') + '"><div class="resenha-top">' + estrelas(x.stars) + '<span class="selo-r">' + (ok ? 'APPROVED' : 'IN THE QUEUE') + '</span></div><p>' + x.txt.replace('___', ok ? '<b>' + x.ops[0] + '</b>' : '<span class="lacuna-q">___</span>') + '</p></div></div>'
    + '<div class="lado-l"><h5 class="rot-ouve">THE WORDS THAT MATCH ' + x.stars + (x.stars === 1 ? ' STAR' : ' STARS') + '</h5><div class="versoes">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 8).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="fl" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">Approved. Now read it out loud, with feeling.</p><div><button type="button" class="btn" data-a="fl-prox">Next review</button></div>' : e.esc > 0 ? '<p class="recusa">Count the stars. Is the feeling normal or extreme?</p>' : '') + '</div></div>';
};

R.escala = function (c) {
  var e = S.es, n = Math.min(e.n, ESCALAS.length - 1), x = ESCALAS[n], p = e.passo;
  return cab(c) + trilha(ESCALAS, e.n) + '<div class="mesa-c"><div class="lado-l">' + termometro(p === 0 ? 0 : [0, 1, 2, 3, 5][p], 0) + '</div><div class="lado-l"><div class="pede vd"><small>SCALE ' + (n + 1) + ' OF 4</small><b>' + x.tema + '</b></div><div class="degraus">'
    + x.d.map(function (d, i) { return '<div class="degrau' + (i < p ? ' on' : '') + (i === 3 ? ' topo' : '') + '"><i>' + (i + 1) + '</i>' + (i < p ? d : '?') + '</div>'; }).join('') + '</div>'
    + (p < 4 ? '<div><button type="button" class="btn" data-a="es-sobe">Say it, then climb one step</button></div>' : '<p class="aprova">Now one of them in a true sentence.</p>' + fala('es' + n, [x.tema === 'YOU, RIGHT NOW' ? 'Right now I’m …' : 'It’s …'], x.d) + (n < ESCALAS.length - 1 ? '<div><button type="button" class="btn" data-a="es-prox">Next scale</button></div>' : ''))
    + '</div></div>';
};

R.lugares = function (c) {
  var e = S.lg, n = Math.min(e.n, LUGARES.length - 1), x = LUGARES[n], nota = e.nota[n] || 0;
  return cab(c) + trilha(LUGARES, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img(x.img) + ')"><span>' + x.nome + '</span></div></div>'
    + '<div class="lado-l"><h5 class="rot-ouve">YOUR RATING</h5><div class="tres-b">' + [1, 2, 3, 4, 5].map(function (k) { return '<button type="button" class="estrela-b' + (k <= nota ? ' on' : '') + '" data-a="lg-n" data-n="' + k + '" aria-label="' + k + ' stars">★</button>'; }).join('') + '</div>'
    + (nota ? fala('lg' + n, ['The place is … The … was …'], BANCOS[nota]) + '<p class="dica-aluno">Your teacher asks: ' + x.q + '</p>' : '<p class="dica-aluno">Tap the stars first.</p>')
    + (n < LUGARES.length - 1 ? '<div><button type="button" class="btn" data-a="lg-prox">Next place</button></div>' : '<p class="aprova">Three places reviewed. Every word matched its stars.</p>') + '</div></div>';
};

R.apagada = function (c) {
  var e = S.ap, n = e.n, fim = n >= APAGADA.length;
  if (fim) return cab(c) + trilha(APAGADA, n) + '<div class="foco"><div class="resenha aprovada"><div class="resenha-top">' + estrelas(1) + '<span class="selo-r">APPROVED</span></div><p>The movie was very boring. At minute forty I was absolutely exhausted. It was absolutely awful.</p></div><p class="aprova" style="text-align:center">Three clear sentences. Read the new review out loud.</p></div>';
  var x = APAGADA[n], ok = e.esc === 0;
  return cab(c) + trilha(APAGADA, n) + '<div class="foco"><div class="resenha apagada-r"><div class="resenha-top">' + estrelas(1) + '<span class="selo-r">DELETED</span></div><p><s>This movie is bored.</s></p></div><div class="pergunta vd ja"><small>STEP ' + (n + 1) + ' OF 3</small><h2>' + x.q + '</h2></div>'
    + '<div class="versoes duas-v">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 11).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="ap" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="ap-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Normal or extreme?</p>' : '') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My best movie is … It’s absolutely …\nMy worst movie is … It was very … and absolutely …', 'Your reviews',
    ['It’s absolutely ', 'It was very ', 'I was absolutely ', 'really ', 'quite '], ['YOUR BEST AND WORST MOVIES', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now make the words stronger.' : 'Your best and worst movies, with very, absolutely and really.'])
    + '<div class="lado-fim"><div class="grande vd"><span>a bit / quite / <u>very</u> tired</span><span><u>absolutely</u> exhausted</span><span><u>really</u> = both · never <s>very exhausted</s></span></div>'
    + mostra('fim', 'My best movie is a small film about a family in Lisbon. It’s absolutely beautiful, and the ending is absolutely amazing.<br>My worst movie was a long space film. It was very slow, and I was absolutely exhausted after two hours.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.pr = function (b, n) { S.pr.esc = n; };
TOQUES['pr-prox'] = function () { S.pr = { n: S.pr.n + 1, esc: -1 }; };
TOQUES.tm = function (b, n, v) { S.tm.esc = v; };
TOQUES['tm-prox'] = function () { S.tm = { n: S.tm.n + 1, esc: '' }; };
TOQUES.ou = function (b, n, v) { S.ou.esc[n] = v; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };
TOQUES.fl = function (b, n) { S.fl.esc = n; };
TOQUES['fl-prox'] = function () { S.fl = { n: S.fl.n + 1, esc: -1 }; };
TOQUES['es-sobe'] = function () { S.es.passo++; };
TOQUES['es-prox'] = function () { S.es = { n: S.es.n + 1, passo: 0 }; };
TOQUES['lg-n'] = function (b, n) { S.lg.nota[Math.min(S.lg.n, LUGARES.length - 1)] = n; };
TOQUES['lg-prox'] = function () { S.lg.n++; };
TOQUES.ap = function (b, n) { S.ap.esc = n; };
TOQUES['ap-prox'] = function () { S.ap = { n: S.ap.n + 1, esc: -1 }; };
