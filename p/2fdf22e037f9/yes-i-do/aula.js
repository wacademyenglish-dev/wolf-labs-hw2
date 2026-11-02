/* ============================================================
   YES, I DO · THE CAFÉ TRAY · LIVE CLASS  05/10/2026
   Main series A1 · I like / I don't like · Do you like …? · Yes, I do. /
   No, I don't. · Water, please.
   O MUNDO (série London, 3/3): dia cinco da corrida, Fran em Edimburgo,
   com calor e fome; num café, o homem pergunta "Do you like soup?" e ela
   responde com duas palavras. Vídeo real (i2a-Fod7C5c) em dois trechos.
   A pasta antiga não tem os mp3: a voz é do professor.
   A CARA: o BALCÃO e a BANDEJA do café, escuros (madeira e ardósia, CSS):
   "Yes, I do" põe a comida na bandeja, "No, I don't" devolve ao balcão;
   "Yes, I like" é recusado. Fila: FILA-LIVE-386.md · 042.
   ============================================================ */
var YT = 'i2a-Fod7C5c';
var L = [
  { k: 'capa', est: null, img: 'balcao' },
  { k: 'abre', est: 'o', min: 7, img: 'mesa', rot: 'I · Every Week, Never', t: 'Before Fran: you and food.', p: 'Pick a card. Nobody is corrected here. Your teacher taps how you answer.' },
  { k: 'video1', est: 'l', min: 7, img: 'chuva', rot: 'II · Hot and Hungry', t: 'Day five. Fran is in Edinburgh.', p: 'Six words matter. The rest can pass.' },
  { k: 'pratos', est: 'f', min: 6, img: 'mesa', rot: 'III · Two Plates', t: 'Everything on the table goes on one plate.', p: 'Say the whole sentence first: I like … / I don’t like … Then the food moves. There is no wrong plate.' },
  { k: 'video2', est: 'l', min: 7, img: 'balcao', rot: 'IV · The Question', t: 'The man asks Fran a question.', p: 'Listen to her answer. Two words.' },
  { k: 'bandeja', est: 'f', min: 6, img: 'mesa', rot: 'V · The Short Answer', t: 'The tray only takes short answers.', p: 'Your teacher asks Do you like …? Yes: the food goes on your tray. No: back to the counter.' },
  { k: 'balcao', est: 'o', min: 7, img: 'balcao', rot: 'VI · At the Counter', t: 'You are in the café. Your teacher is the waiter.', p: 'Lunch, a drink, dessert. Answer short, then order with please.' },
  { k: 'pesquisa', est: 'o', min: 7, extra: 1, img: 'chuva', rot: 'VII · Your Survey', t: 'Your turn to ask.', p: 'Ask Do you like …? Your teacher answers short, then one more sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'chuva', rot: 'VIII · Full', t: 'Write your café.', p: 'What you like, what you don’t, and two short answers. The red line watches like and do. It goes to your My notes.' }
];

var ABRE = [
  { k: 'EVERY WEEK', q: 'One food you eat every week.', fup: 'Do you like it a lot?', st: ['I eat … every week.'], ex: 'I eat rice every week. Yes, I do. I love it.' },
  { k: 'NEVER', q: 'One food you never eat. Why?', fup: 'And your family?', st: ['I never eat …', 'I don’t like …'], ex: 'I never eat fish. I don’t like it.' },
  { k: 'QUICK ONES', q: 'Do you like coffee? Do you like pizza? Do you like fish?', fup: 'Which one is your favorite?', st: ['Yes, … / No, …'], ex: 'Yes, I do. Yes, I do! No, I don’t.' }
];
var FORMAS = [{ k: 'curta', t: 'YES / NO ONLY' }, { k: 'certa', t: 'YES, I DO · NO, I DON’T' }, { k: 'like', t: 'YES, I LIKE', erro: 1 }, { k: 'no', t: 'I NO LIKE / LIKE OF', erro: 1 }];

var COMIDA = ['soup', 'pizza', 'carrots', 'potatoes', 'onions', 'coffee', 'tea', 'water'];
var ICO = { soup: '🍲', pizza: '🍕', carrots: '🥕', potatoes: '🥔', onions: '🧅', coffee: '☕', tea: '🫖', water: '💧' };

var VIDEOS = {
  video1: { ini: 63, fim: 98, cred: 'Video: from 1:03 to 1:38', antes: 'London to Edinburgh, day five. Fran is hot and hungry, and she sits down in a café. What do you think happens?', pal: ['hungry', 'hot', 'look', 'okay', 'sit', 'thank you'], q: 'Why does Fran sit down?', st: ['Because she is …'], ex: 'Because she is very hot and hungry.', fecho: 'Hot and hungry, and a man says: sit down.' },
  video2: { ini: 106, fim: 127, cred: 'Video: from 1:46 to 2:07', antes: 'The man is going to ask Fran about food. What do you think he asks?', pal: ['do', 'like', 'soup', 'yes', 'vegetables', 'have'], q: 'What does Fran answer to “Do you like soup?”', st: ['She says …'], ex: 'Two words: Yes, I do. Not like: do.', fecho: 'She sends back do, not like.' }
};

var RESPOSTAS = [{ t: 'Yes, I do.', k: 'sim' }, { t: 'No, I don’t.', k: 'nao' }, { t: 'Yes, I like.', k: 'like' }, { t: 'No, I don’t like.', k: 'like2' }, { t: 'Yes, I am.', k: 'am' }];
var RECUSA = { like: 'The question starts with Do. The answer sends back do: Yes, I do.', like2: 'Stop at don’t: No, I don’t.', am: 'Do you like …? → do, not am.' };

var RODADAS = [
  { k: 'LUNCH', ic: '🍲', garcom: 'Hello! You look hungry. Do you like soup? We have vegetable soup.', ex: 'Yes, I do! Soup, please. Do you have bread?' },
  { k: 'A DRINK', ic: '☕', garcom: 'And to drink? Coffee, tea, or water?', ex: 'Water, please. I don’t like coffee.' },
  { k: 'DESSERT', ic: '🍰', garcom: 'Do you like cake? We have carrot cake and chocolate cake.', ex: 'Yes, I do! Chocolate cake, please. Thank you!' }
];
var PARTES = [{ k: 'curta', t: 'YES, I DO / NO, I DON’T' }, { k: 'please', t: '…, PLEASE' }, { k: 'pergunta', t: 'A QUESTION BACK' }, { k: 'obrigado', t: 'THANK YOU' }];

var TEMAS = [{ k: 'cats', ic: '🐈' }, { k: 'rain', ic: '🌧️' }, { k: 'soccer', ic: '⚽' }, { k: 'chocolate', ic: '🍫' }, { k: 'early mornings', ic: '⏰' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video1: { p: 0, ouviu: {} }, video2: { p: 0, ouviu: {} }, pratos: { sel: '', onde: {} }, band: { n: 0, onde: {}, esc: '' }, balc: { r: 0, partes: {} }, pesq: {} };

function bandeja(onde, alvo) {
  var tray = COMIDA.filter(function (c) { return onde[c] === 'sim'; }), volta = COMIDA.filter(function (c) { return onde[c] === 'nao'; }), resto = COMIDA.filter(function (c) { return !onde[c]; });
  return '<div class="cafe"><div class="balcao-c"><small>THE COUNTER</small><div class="itens">' + resto.concat(volta).map(function (c) { return '<span class="item' + (c === alvo ? ' alvo' : '') + (onde[c] === 'nao' ? ' volta' : '') + '">' + ICO[c] + '<i>' + c + '</i></span>'; }).join('') + '</div></div>'
    + '<div class="bandeja-c"><small>YOUR TRAY</small><div class="itens">' + (tray.length ? tray.map(function (c) { return '<span class="item cheio">' + ICO[c] + '<i>' + c + '</i></span>'; }).join('') : '<em>empty</em>') + '</div></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · LONDON SERIES 3/3</span><h1>Yes, <b>I Do</b></h1>'
    + '<p class="sub">One question, two words back. Fran is hungry, and the man behind the counter has soup.</p>'
    + '<div class="chipsx"><span class="pilula">I like · I don’t like</span><span class="pilula">Do you like …?</span><span class="pilula">Yes, I do</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the café</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-c">' + bandeja({ soup: 'sim', coffee: 'sim', tea: 'nao' }, '') + '<p class="sussurro">— Do you like soup? — Yes, I do.</p></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>HOW THEY ANSWER · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

function cenaVideo(c, chave) {
  var v = VIDEOS[chave], e = S[chave], tudo = v.pal.every(function (w) { return e.ouviu[w]; });
  var passos = '<div class="tres-tempos">' + tempos3(e.p, 'vid-p', null, chave) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>' + v.antes + '</h2></div>' + fala(chave + 'a', ['I think …', 'Maybe …'], v.pal) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vid-p" data-c="' + chave + '" data-n="1">Watch</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Edinburgh', '&start=' + v.ini + '&end=' + v.fim) + '<small class="cred">' + v.cred + '</small></div><div class="lado-video"><h5>TAP WHEN YOU HEAR IT</h5><div class="ouvidos">'
    + v.pal.map(function (w) { return '<button type="button" class="ouvido' + (e.ouviu[w] ? ' on' : '') + '" data-a="vid-w" data-c="' + chave + '" data-v="' + h(w) + '">' + w + '</button>'; }).join('') + '</div>'
    + (tudo ? '<p class="aprova">GOT IT. All six.</p>' : '<p class="dica-aluno">Nobody has to understand the rest.</p>') + '<div><button type="button" class="btn" data-a="vid-p" data-c="' + chave + '" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>' + v.q + '</h2></div>' + fala(chave + 'b', v.st, []) + mostra(chave + 'q', v.ex) + '<p class="aprova" style="text-align:center">' + v.fecho + '</p></div>';
  return cab(c) + passos + corpo;
}
R.video1 = function (c) { return cenaVideo(c, 'video1'); };
R.video2 = function (c) { return cenaVideo(c, 'video2'); };

R.pratos = function (c) {
  var e = S.pratos, sim = COMIDA.filter(function (k) { return e.onde[k] === 'sim'; }), nao = COMIDA.filter(function (k) { return e.onde[k] === 'nao'; });
  var mesa = '<div class="mesa-p">' + COMIDA.map(function (k) { return '<button type="button" class="item grande' + (e.sel === k ? ' alvo' : '') + (e.onde[k] ? ' posto' : '') + '" data-a="pt" data-v="' + k + '">' + ICO[k] + '<i>' + k + '</i></button>'; }).join('') + '</div>';
  var prato = function (k, t, lista) { return '<div class="prato vd"><small>' + t + '</small><div class="itens">' + (lista.length ? lista.map(function (x) { return '<span class="item">' + ICO[x] + '<i>' + x + '</i></span>'; }).join('') : '<em>empty</em>') + '</div>' + (e.sel ? '<button type="button" class="pilula" data-a="pt-v" data-v="' + k + '">' + (k === 'sim' ? 'I like ' : 'I don’t like ') + e.sel + '.</button>' : '') + '</div>'; };
  return cab(c) + mesa + '<div class="pratos">' + prato('sim', 'I LIKE', sim) + prato('nao', 'I DON’T LIKE', nao) + '</div>'
    + (sim.length + nao.length === 8 ? '<p class="aprova" style="text-align:center">Eight true sentences about you. I like … · I don’t like … and nothing in between.</p>' : '<p class="dica-aluno" style="text-align:center">' + (e.sel ? 'Say it first, then tap the plate.' : 'Tap a food.') + '</p>');
};

R.bandeja = function (c) {
  var e = S.band, n = e.n;
  if (n >= COMIDA.length) return cab(c) + bandeja(e.onde, '') + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>Eight answers, and not one of them repeated like.</h2></div>' + follow('NOW SWAP', 'You ask your teacher three: Do you like …?', ['Do you like …?'], [], 'bdsw') + '</div>';
  var x = COMIDA[n], esc = e.esc, ok = esc === 'sim' || esc === 'nao';
  return cab(c) + trilha(COMIDA, n) + bandeja(e.onde, x) + '<div class="foco"><div class="pede vd"><small>YOUR TEACHER ASKS</small><b>Do you like ' + x + '? ' + ICO[x] + '</b></div><div class="tres-b centro">' + RESPOSTAS.map(function (r) {
    return '<button type="button" class="pilula grande' + (esc === r.k ? (r.k === 'sim' || r.k === 'nao' ? ' certo' : ' errado') : '') + '" data-a="bd" data-v="' + r.k + '">' + r.t + '</button>'; }).join('') + '</div>'
    + (esc && !ok ? '<p class="recusa" style="text-align:center">' + RECUSA[esc] + '</p>' : '') + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="bd-prox">' + (esc === 'sim' ? 'On the tray →' : 'Back to the counter →') + '</button></div>' : '') + '</div>';
};

R.balcao = function (c) {
  var e = S.balc, r = e.r, fim = r >= RODADAS.length, foto = '<div class="aberta vd" style="background-image:url(' + img('balcao') + ')"><span>THE CAFÉ · ROYAL MILE</span></div>';
  if (fim) return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l"><div class="pergunta vd"><small>FULL</small><h2>Lunch, a drink and dessert, ordered in English.</h2></div></div></div>';
  var x = RODADAS[r], p = e.partes[r] || {};
  return cab(c) + trilha(RODADAS, r) + '<div class="mesa-c">' + foto + '<div class="lado-l"><div class="balao vd"><small>THE WAITER · ' + x.k + ' ' + x.ic + '</small><p>“' + x.garcom + '”</p></div>' + fala('bc' + r, ['Yes, I do. / No, I don’t.', '…, please.', 'Do you have …?', 'Thank you!'], []) + mostra('bc' + r, x.ex, 1)
    + '<div class="partes so-prof"><h5>TAP WHAT YOU HEAR</h5>' + PARTES.map(function (k) { return '<button type="button" class="chip frase' + (p[k.k] ? ' on' : '') + '" data-a="bc-p" data-v="' + k.k + '">' + k.t + '</button>'; }).join('') + '</div>'
    + '<div><button type="button" class="btn" data-a="bc-prox">' + (r < 2 ? 'Next round' : 'The bill, please') + '</button></div></div></div>';
};

R.pesquisa = function (c) {
  var e = S.pesq, n = TEMAS.filter(function (t) { return e[t.k]; }).length;
  return cab(c) + '<div class="pesquisa">' + TEMAS.map(function (t) {
    var v = e[t.k];
    return '<div class="linha-q vd' + (v ? ' feita' : '') + '"><span class="ic">' + t.ic + '</span><b>Do you like ' + t.k + '?</b><div class="tres-b so-prof"><button type="button" class="pilula' + (v === 'sim' ? ' certo' : '') + '" data-a="pq" data-n="0" data-v="' + t.k + '|sim">Yes, I do</button><button type="button" class="pilula' + (v === 'nao' ? ' certo' : '') + '" data-a="pq" data-n="0" data-v="' + t.k + '|nao">No, I don’t</button></div>' + (v ? '<span class="res">' + (v === 'sim' ? '✓ YES' : '✕ NO') + '</span>' : '') + '</div>';
  }).join('') + '</div>' + (n === 5 ? follow('AND YOU?', 'Now answer your own survey. Then say: Why?', ['Yes, I do, because …', 'No, I don’t, because …'], [], 'pq', mostra('pq', 'Do I like rain? No, I don’t, because I walk to work.', 1)) : '<p class="dica-aluno" style="text-align:center">The question needs Do: Do you like cats? (not “You like cats?”)</p>');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I like soup. I don’t like tea.\nDo you like coffee? Yes, I do.', 'Your café',
    ['I like ', 'I don’t like ', 'Do you like ', 'Yes, I do. ', 'No, I don’t. ', ', please.'], ['YOUR CAFÉ ORDER', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write the short answers.' : 'What you like, what you don’t, and two short answers.'])
    + '<div class="lado-fim"><div class="grande vd"><span>I <u>like</u> soup · I <u>don’t like</u> tea</span><span><u>Do</u> you like …?</span><span>Yes, I <u>do</u>. · No, I <u>don’t</u>.</span><span>Water, <u>please</u>.</span></div>'
    + mostra('fim', 'I like soup and potatoes. I don’t like onions.<br>Do you like coffee? Yes, I do.<br>Do you like tea? No, I don’t. Water, please!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vid-p'] = function (b, n, v, c) { S[c].p = n; };
TOQUES['vid-w'] = function (b, n, v, c) { S[c].ouviu[v] = !S[c].ouviu[v]; };
TOQUES.pt = function (b, n, v) { S.pratos.sel = v; };
TOQUES['pt-v'] = function (b, n, v) { if (S.pratos.sel) { S.pratos.onde[S.pratos.sel] = v; S.pratos.sel = ''; } };
TOQUES.bd = function (b, n, v) { S.band.esc = v; };
TOQUES['bd-prox'] = function () { var x = COMIDA[S.band.n]; S.band.onde[x] = S.band.esc; S.band.n++; S.band.esc = ''; };
TOQUES['bc-p'] = function (b, n, v) { var p = S.balc.partes[S.balc.r] = S.balc.partes[S.balc.r] || {}; p[v] = !p[v]; };
TOQUES['bc-prox'] = function () { S.balc.r++; };
TOQUES.pq = function (b, n, v) { var a = v.split('|'); S.pesq[a[0]] = a[1]; };
