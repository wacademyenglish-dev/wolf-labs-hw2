/* ============================================================
   THE JUDGE · FOUR RIBBONS · LIVE CLASS  05/10/2026
   Main series A1 · superlativos: the -est · the most … · best / worst
   O MUNDO: sábado na feira de Riverside e o aluno é o juiz. Todo prêmio
   é um superlativo, e a ROSETA (desenhada em CSS, escura, com as fitas
   coloridas) só gruda quando a forma está certa.
   Vídeo mantido (5VGtCbFclgk: 0:05–0:57 e 1:32–3:26). Sem áudio.
   Fila: FILA-LIVE-386.md · 025.
   ============================================================ */
var YT = '5VGtCbFclgk';
var L = [
  { k: 'capa', est: null, img: 'feira' },
  { k: 'abre', est: 'o', min: 7, img: 'tenda', rot: 'I · Before the Fair', t: 'Three questions about your life.', p: 'Pick a card. Any words you have. Your teacher taps what you used. Don’t worry about it yet.' },
  { k: 'podio', est: 'o', min: 7, img: 'feira', rot: 'II · The Podium', t: 'Two contests. Put the winner on top.', p: 'Read the numbers. Say the sentence. Then tap the winner.' },
  { k: 'roseta', est: 'f', min: 6, img: 'fitas', rot: 'III · Pin the Ribbon', t: 'Eight ribbons. Each one only sticks with the right words.', p: 'Clap the word. Then pick the words for the ribbon, and say them.' },
  { k: 'video1', est: 'l', min: 7, img: 'feira', rot: 'IV · Watch: Who Is the Tallest?', t: 'Four friends. Who is the tallest?', p: 'Ears only. Tap each word when you hear it.' },
  { k: 'altura', est: 'o', min: 7, img: 'tenda', rot: 'V · The Height Check', t: 'One guess, then three friends.', p: 'Guess out loud. Then read the numbers and say it.' },
  { k: 'placa', est: 'f', min: 6, extra: 1, img: 'feira', rot: 'VI · Paint the Signs', t: 'Six winner signs. Six spellings.', p: 'Look at the end of the word. Pick the spelling rule. Then say it.' },
  { k: 'bolo', est: 'o', min: 7, extra: 1, img: 'bolos', rot: 'VII · The Angry Baker', t: 'The cakes are judged. The baker is not happy.', p: 'Your teacher is the baker. Pick the polite, correct answer. Then say it to him.' },
  { k: 'video2', est: 'l', min: 7, extra: 1, img: 'bolos', rot: 'VIII · Watch: The Cake Contest', t: 'Another judge, another contest.', p: 'Tap each word when you hear it. Then two questions.' },
  { k: 'jornal', est: 'f', min: 6, extra: 1, img: 'feira', rot: 'IX · The Newspaper', t: 'The local paper has a story about your fair, with one mistake in each paragraph.', p: 'Read all three lines out loud. Tap the wrong one. Say it right.' },
  { k: 'juri', est: 'o', min: 7, extra: 1, img: 'fitas', rot: 'X · Judge Your Life', t: 'Now you are the judge of your own life.', p: 'Three categories. Give the prize, and say why.' },
  { k: 'fim', est: 'w', min: 6, img: 'fitas', rot: 'XI · Ribbons Given', t: 'Write your own prizes.', p: 'Five prizes from your life: the -est, the most …, the best, the worst. And why. The red line watches. It goes to your My notes.' }
];

var ABRE = [
  { k: 'BIGGEST', q: 'What is the biggest food you like?', fup: 'Where do you eat it?', st: ['The biggest … is …'], ex: 'A family pizza. It’s enormous!' },
  { k: 'EXPENSIVE', q: 'What is the most expensive thing you have?', fup: 'Do you use it every day?', st: ['The most expensive thing is my …'], ex: 'The most expensive thing is my computer.' },
  { k: 'BEST FOOD', q: 'What is the best food in your city?', fup: 'And the worst?', st: ['The best food is …'], ex: 'The best food in my city is fish stew.' }
];
var FORMAS = [{ k: 'est', t: '-EST' }, { k: 'most', t: 'THE MOST' }, { k: 'best', t: 'BEST / WORST' }, { k: 'mostbig', t: 'THE MOST BIG', erro: 1 }, { k: 'more', t: 'THE MORE …', erro: 1 }, { k: 'goodest', t: 'THE GOODEST', erro: 1 }];

var PODIO = [
  { sup: 'the biggest pumpkin', un: 'kg', cor: 'azul', seg: 'Now: who has the smallest pumpkin?', segr: 'The school has the smallest pumpkin.', itens: [{ n: 'Mr. Ford', v: 41, img: 'abob-a' }, { n: 'Mrs. Alves', v: 58, img: 'abob-b' }, { n: 'The school', v: 33, img: 'abob-c' }] },
  { sup: 'the most beautiful flower', un: 'points', cor: 'ouro', seg: 'Now: which flowers have the lowest score?', segr: 'The daisies have the lowest score.', itens: [{ n: 'The roses', v: 71, img: 'flor-a' }, { n: 'The orchid', v: 94, img: 'flor-b' }, { n: 'The daisies', v: 63, img: 'flor-c' }] }
];

var FITAS = [
  { a: 'big', o: ['the biggest', 'the most big', 'the bigger'], r: 0, n: 'pumpkin', w: 'One clap: -est, and double the G.', cor: 'azul' },
  { a: 'beautiful', o: ['the beautifulest', 'the most beautiful', 'the more beautiful'], r: 1, n: 'flower', w: 'Three claps: the most.', cor: 'ouro' },
  { a: 'good', o: ['the goodest', 'the most good', 'the best'], r: 2, n: 'cake', w: 'good → best. Nothing to clap.', cor: 'verm' },
  { a: 'fast', o: ['the most fast', 'the fastest', 'the more fast'], r: 1, n: 'runner', w: 'One clap: -est.', cor: 'verde' },
  { a: 'expensive', o: ['the most expensive', 'the expensivest', 'the expensiver'], r: 0, n: 'ticket', w: 'Three claps: the most.', cor: 'roxo' },
  { a: 'bad', o: ['the baddest', 'the most bad', 'the worst'], r: 2, n: 'dancer', w: 'bad → worst.', cor: 'cinza' },
  { a: 'tall', o: ['the more tall', 'the tallest', 'the most tall'], r: 1, n: 'man', w: 'One clap: -est.', cor: 'azul' },
  { a: 'interesting', o: ['the interestingest', 'the most interesting', 'the more interesting'], r: 1, n: 'story', w: 'Four claps: the most.', cor: 'ouro' }
];

var VIDEOS = {
  video1: { ini: 5, fim: 57, cred: 'Video: from 0:05 to 0:57', antes: 'Look at the people around you. Who is the tallest? Who is the shortest?', pal: ['tall', 'tallest', 'short', 'shortest', 'metres', 'the world'], q: 'Who is the tallest of the friends? And in the world?', ex: 'Tim is the tallest of the friends. Who is the tallest in your family?' },
  video2: { ini: 92, fim: 206, cred: 'Video: from 1:32 to 3:26', antes: 'You are the judge of three cakes. What do you look for?', pal: ['cake', 'best', 'worst', 'sweetest', 'competition', 'winner'], q: 'Which cake wins, and why? And what does the judge say instead of the worst?', ex: 'The chocolate cake wins. It’s the sweetest. The judge is polite: she doesn’t say the worst out loud.' }
};

var ALTURAS = ['190 cm', '220 cm', '250 cm', '272 cm', '300 cm'];
var AMIGOS = [{ n: 'Georgie', v: 170 }, { n: 'Buli', v: 176 }, { n: 'Tim', v: 188 }];

var REGRAS = ['JUST ADD -EST', 'DOUBLE THE LETTER', 'Y BECOMES I', 'DROP THE E'];
var PLACAS = [
  { base: 'tall', k: 0, v: 'tallest', w: 'Nothing changes.' }, { base: 'big', k: 1, v: 'biggest', w: 'One vowel, one consonant: double the G.' },
  { base: 'heavy', k: 2, v: 'heaviest', w: 'Y becomes I, then -est.' }, { base: 'large', k: 3, v: 'largest', w: 'It ends in E: just add -st.' },
  { base: 'hot', k: 1, v: 'hottest', w: 'Like big: double the T.' }, { base: 'nice', k: 3, v: 'nicest', w: 'Not niceest.' }
];

var BOLO = [
  { q: '“My cake is the goodest here!”', o: ['You mean the best. And it’s very good.', 'Yes, it’s the goodest.'], r: 0, w: 'good → best. Polite and correct.' },
  { q: '“So why is Anna the winner?”', o: ['Because her cake is the most sweet.', 'Because her cake is the sweetest.'], r: 1, w: 'sweet: one clap, -est.' },
  { q: '“Is my cake the worst, then?”', o: ['No! It’s the second best.', 'No! It’s the second better.'], r: 0, w: 'the second best is a real phrase.' },
  { q: '“So what IS my cake?”', o: ['It’s the not baddest.', 'It’s not bad at all.'], r: 1, w: 'And you never say worst to his face.' }
];

var JORNAL = [
  { l: ['Mrs. Alves has the biggest pumpkin.', 'Tim is the most tall man at the fair.', 'Anna baked the best cake.'], mau: 1, fix: 'Tim is the tallest man at the fair.', w: 'tall: one clap.' },
  { l: ['The orchid is the most beautiful flower.', 'Buli is the fastest runner.', 'That is the goodest day of the year.'], mau: 2, fix: 'That is the best day of the year.', w: 'good → best.' },
  { l: ['This is the heaviest pumpkin ever.', 'The judge is the most fair person here.', 'Georgie has the smallest garden.'], mau: 1, fix: 'The judge is the fairest person here.', w: 'fair: one clap. The same mistake, better hidden.' }
];

var CATEG = ['The best city you know', 'The worst film you know', 'The most expensive thing you have'];
var PARTES_J = [{ k: 'premio', t: 'THE BEST / WORST / MOST … IS …' }, { k: 'porque', t: 'BECAUSE IT’S THE …EST' }, { k: 'segundo', t: 'THE SECOND …' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, podio: { n: 0, esc: -1 }, fita: { n: 0, esc: -1, palmas: 0 }, video1: { p: 0, ouviu: {} }, video2: { p: 0, ouviu: {} },
  alt: { palpite: -1, viu: 0 }, placa: { n: 0, esc: -1 }, bolo: { n: 0, esc: -1 }, jornal: { n: 0, esc: -1 }, juri: { n: 0, partes: {}, erro: 0 } };

function roseta(cor, txt, extra) { return '<div class="roseta r-' + cor + (extra || '') + '"><span class="pregas"></span><span class="miolo">' + txt + '</span><span class="caudas"><i></i><i></i></span></div>'; }
function palmas(w) { var n = { big: 1, fast: 1, tall: 1, good: 0, bad: 0, beautiful: 3, expensive: 3, interesting: 4 }[w]; var s = ''; for (var i = 0; i < n; i++) s += '<span>👏</span>'; return n ? s : '<small>no clap: it breaks</small>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>The <b>Judge</b></h1>'
    + '<p class="sub">Saturday at the Riverside fair. Today you decide who wins, and every prize is a superlative.</p>'
    + '<div class="chipsx"><span class="pilula">the biggest</span><span class="pilula">the most beautiful</span><span class="pilula">the best</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the fair</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('feira') + '" alt="A country fair with tents and tables at sunset"><div class="rosetas-capa">' + roseta('azul', '1st') + roseta('ouro', 'BEST') + roseta('verm', 'MOST') + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.podio = function (c) {
  var p = S.podio, n = p.n, fim = n >= PODIO.length, x = PODIO[Math.min(n, PODIO.length - 1)];
  if (fim) return cab(c) + trilha(PODIO, n) + '<div class="foco"><div class="pergunta vd"><small>TWO CONTESTS</small><h2>Mrs. Alves has the biggest pumpkin. The orchid is the most beautiful flower.</h2></div></div>';
  var max = Math.max.apply(null, x.itens.map(function (i) { return i.v; })), vence = x.itens.map(function (i) { return i.v; }).indexOf(max), ok = p.esc === vence;
  return cab(c) + trilha(PODIO, n) + '<div class="concorrentes">' + x.itens.map(function (it, i) {
    return '<button type="button" class="conc vd' + (p.esc === i ? (ok ? ' vence' : ' errado') : '') + '" data-a="pd" data-n="' + i + '"><span class="foto-c" style="background-image:url(' + img(it.img) + ')"></span><b>' + it.n + '</b><span class="valor">' + it.v + ' ' + x.un + '</span>' + (ok && i === vence ? roseta(x.cor, '1st', ' mini') : '') + '</button>';
  }).join('') + '</div>'
    + (p.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">Read the numbers again. Which one wins?</p>' : '')
    + (ok ? '<div class="foco"><p class="aprova" style="text-align:center">' + x.itens[vence].n + ' has ' + x.sup + '. Say it out loud.</p>' + '<div class="pergunta vd ja"><small>NOW THE OTHER END</small><h2>' + x.seg + '</h2></div>' + mostra('pdf' + n, x.segr) + '<div style="text-align:center"><button type="button" class="btn" data-a="pd-prox">Next contest</button></div></div>' : '<p class="dica-aluno" style="text-align:center">Who has ' + x.sup + '? Say it, then tap.</p>');
};

R.roseta = function (c) {
  var f = S.fita, n = f.n, fim = n >= FITAS.length, x = FITAS[Math.min(n, FITAS.length - 1)];
  if (fim) return cab(c) + trilha(FITAS, n) + '<div class="parede">' + FITAS.map(function (y) { return roseta(y.cor, y.o[y.r].replace('the ', ''), ' mini') ; }).join('') + '</div><p class="aprova" style="text-align:center">Eight ribbons. One clap: -est. Three or four claps: the most. Good and bad break.</p>';
  var ok = f.esc === x.r;
  return cab(c) + trilha(FITAS, n) + '<div class="mesa-roseta">' + roseta(x.cor, ok ? x.o[x.r] : '?', ok ? ' grudou' : f.esc >= 0 ? ' cai' : '') + '<div class="lado-roseta"><div class="pergunta vd"><small>' + x.n.toUpperCase() + '</small><h2>' + x.a + '</h2></div><div class="palmas">' + palmas(x.a) + '</div>'
    + '<div class="opcoes-l">' + x.o.map(function (o, i) { return '<button type="button" class="op-l' + (f.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="rs" data-n="' + i + '">' + o + ' ' + x.n + '</button>'; }).join('') + '</div>'
    + (f.esc >= 0 && !ok ? '<p class="recusa">The ribbon falls off. Clap the word again.</p>' : '') + (ok ? '<p class="aprova">' + x.w + '</p><div><button type="button" class="btn" data-a="rs-prox">Next ribbon</button></div>' : '') + '</div></div>';
};

function cenaVideo(c, chave) {
  var v = VIDEOS[chave], e = S[chave], tudo = v.pal.every(function (w) { return e.ouviu[w]; }), corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>' + v.antes + '</h2></div>' + fala(chave + 'a', ['The tallest is …', 'I look for the …est'], []) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vid-p" data-c="' + chave + '" data-n="1">Watch</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Superlatives', '&start=' + v.ini + '&end=' + v.fim) + '<small class="cred">' + v.cred + '</small></div><div class="lado-video"><h5>TAP WHEN YOU HEAR IT</h5><div class="ouvidos">'
    + v.pal.map(function (w) { return '<button type="button" class="ouvido' + (e.ouviu[w] ? ' on' : '') + '" data-a="vid-w" data-c="' + chave + '" data-v="' + h(w) + '">' + w + '</button>'; }).join('') + '</div>'
    + (tudo ? '<p class="aprova">GOT IT. All six.</p>' : '<p class="dica-aluno">Nobody has to understand the rest.</p>') + '<div><button type="button" class="btn" data-a="vid-p" data-c="' + chave + '" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>' + v.q + '</h2></div>' + fala(chave + 'b', ['… is the …est', '… the best …'], []) + mostra(chave + 'q', v.ex) + '</div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p, 'vid-p', null, chave) + '</div>' + corpo;
}
R.video1 = function (c) { return cenaVideo(c, 'video1'); };
R.video2 = function (c) { return cenaVideo(c, 'video2'); };

R.altura = function (c) {
  var a = S.alt;
  var regua = '<div class="regua-a vd">' + AMIGOS.map(function (x) { return '<div class="amigo"><span class="barra-a" style="height:' + Math.round((x.v - 140) * 4) + 'px"><i>' + x.v + ' cm</i></span><b>' + x.n + '</b></div>'; }).join('') + (a.viu ? '<div class="amigo gigante"><span class="barra-a" style="height:' + Math.round((272 - 140) * 4 * .75) + 'px"><i>272 cm</i></span><b>Robert Wadlow</b></div>' : '') + '</div>';
  return cab(c) + '<div class="mesa-alt"><div class="lado-alt"><div class="pergunta vd' + (a.viu ? ' ja' : '') + '"><small>ONE GUESS</small><h2>How tall was the tallest man in the world?</h2></div><div class="tres-b">' + ALTURAS.map(function (x, i) { return '<button type="button" class="pilula' + (a.palpite === i ? (a.viu ? (i === 3 ? ' certo' : ' errado') : ' on') : '') + '" data-a="al" data-n="' + i + '">' + x + '</button>'; }).join('') + '</div>'
    + (a.palpite >= 0 && !a.viu ? '<div><button type="button" class="btn cheio" data-a="al-viu">Check</button></div>' : '')
    + (a.viu ? '<p class="aprova">Robert Wadlow, from the U.S., was the tallest man ever: 272 centimeters.</p>' + follow('THE THREE FRIENDS', 'Who is the tallest? Who is the shortest?', ['… is the tallest.', '… is the shortest.'], [], 'alf', mostra('alf', 'Tim is the tallest. Georgie is the shortest.')) : '') + '</div>' + regua + '</div>';
};

R.placa = function (c) {
  var p = S.placa, n = p.n, fim = n >= PLACAS.length, x = PLACAS[Math.min(n, PLACAS.length - 1)];
  if (fim) return cab(c) + trilha(PLACAS, n) + '<div class="placas-fim">' + PLACAS.map(function (y) { return '<span class="placa-p">THE ' + y.v.toUpperCase() + '</span>'; }).join('') + '</div>';
  var ok = p.esc === x.k;
  return cab(c) + trilha(PLACAS, n) + '<div class="foco"><div class="placa-p grande">' + (ok ? 'THE ' + x.v.toUpperCase() : x.base.toUpperCase() + ' → THE ???') + '</div>'
    + '<div class="tres-b centro">' + REGRAS.map(function (o, i) { return '<button type="button" class="pilula grande' + (p.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="pl" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (p.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">Look at the last letters. What is at the end?</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">' + x.w + ' Say it: the ' + x.v + '.</p><div style="text-align:center"><button type="button" class="btn" data-a="pl-prox">Next sign</button></div>' : '') + '</div>';
};

R.bolo = function (c) {
  var b = S.bolo, n = b.n, fim = n >= BOLO.length, x = BOLO[Math.min(n, BOLO.length - 1)];
  if (fim) return cab(c) + trilha(BOLO, n) + '<div class="foco"><div class="pergunta vd"><small>THE BAKER IS CALM NOW</small><h2>The best, the sweetest, the second best, and never the worst to his face.</h2></div></div>';
  var ok = b.esc === x.r;
  return cab(c) + trilha(BOLO, n) + '<div class="mesa-bolo"><div class="foto-b vd" style="background-image:url(' + img('bolos') + ')"></div><div class="lado-bolo"><div class="balao"><small>THE BAKER</small><p>' + x.q + '</p></div><div class="opcoes-l">'
    + x.o.map(function (o, i) { return '<button type="button" class="op-l' + (b.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="bl" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (b.esc >= 0 && !ok ? '<p class="recusa">Say both out loud. Which one is English, and polite?</p>' : '') + (ok ? '<p class="aprova">' + x.w + '</p><div><button type="button" class="btn" data-a="bl-prox">The baker talks again</button></div>' : '') + '</div></div>';
};

R.jornal = function (c) {
  var j = S.jornal, n = j.n, fim = n >= JORNAL.length, x = JORNAL[Math.min(n, JORNAL.length - 1)];
  if (fim) return cab(c) + trilha(JORNAL, n) + '<div class="foco"><div class="pergunta vd"><small>THREE CORRECTIONS</small><h2>The tallest, the best, the fairest. The paper is right now.</h2></div></div>';
  var ok = j.esc === x.mau;
  return cab(c) + trilha(JORNAL, n) + '<div class="jornal vd"><div class="cabeca-j"><b>THE RIVERSIDE NEWS</b><small>SATURDAY · FAIR SPECIAL</small></div>' + x.l.map(function (l, i) { return '<button type="button" class="linha-j' + (j.esc === i ? (ok ? ' achou' : ' errado') : '') + '" data-a="jn" data-n="' + i + '">' + (ok && i === x.mau ? '<s>' + l + '</s> <b>' + x.fix + '</b>' : l) + '</button>'; }).join('') + '</div>'
    + (j.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">Read that one again. It sounds fine.</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="jn-prox">Next paragraph</button></div>' : '');
};

R.juri = function (c) {
  var j = S.juri, n = j.n, fim = n >= CATEG.length, pt = j.partes[n] || {};
  if (fim) return cab(c) + '<div class="parede">' + CATEG.map(function (k, i) { return roseta(['ouro', 'cinza', 'roxo'][i], k.split(' ')[1].toUpperCase(), ' mini'); }).join('') + '</div><p class="aprova" style="text-align:center">Three prizes from your life, and every one with a reason.</p>';
  return cab(c) + trilha(CATEG, n) + '<div class="mesa-roseta">' + roseta(['ouro', 'cinza', 'roxo'][n], 'PRIZE ' + (n + 1)) + '<div class="lado-roseta"><div class="pergunta vd"><small>CATEGORY ' + (n + 1) + '</small><h2>' + CATEG[n] + '</h2></div>'
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES_J.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="jr-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (j.erro ? ' on' : '') + '" data-a="jr-e">MISTAKE: THE MOST BIG / THE GOODEST</button></div>'
    + (j.erro ? '<p class="recusa">Short words: the biggest. Good: the best.</p>' : '') + '<div><button type="button" class="btn" data-a="jr-prox">Next category</button></div></div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'The best city I know is …, because …\n…', 'Your prizes',
    ['The best ', 'The worst ', 'The most ', 'the …est', ' because '], ['YOUR PRIZES', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now five prizes, every form right.' : 'Five prizes from your life, and why.'])
    + '<div class="lado-fim"><div class="parede pequena">' + roseta('azul', 'BIGGEST', ' mini') + roseta('ouro', 'MOST', ' mini') + roseta('verm', 'BEST', ' mini') + '</div>'
    + '<div class="grande vd"><span>one clap: the tall<u>est</u></span><span>three claps: <u>the most</u> beautiful</span><span>good → <u>the best</u> · bad → <u>the worst</u></span></div>'
    + mostra('fim', 'The best city I know is Lisbon, because it’s the most beautiful.<br>The worst film I know is a horror film. It is very, very long!<br>The most expensive thing I have is my bike.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.pd = function (b, n) { S.podio.esc = n; };
TOQUES['pd-prox'] = function () { S.podio = { n: S.podio.n + 1, esc: -1 }; };
TOQUES.rs = function (b, n) { S.fita.esc = n; };
TOQUES['rs-prox'] = function () { S.fita = { n: S.fita.n + 1, esc: -1 }; };
TOQUES['vid-p'] = function (b, n, v, c) { S[c].p = n; };
TOQUES['vid-w'] = function (b, n, v, c) { S[c].ouviu[v] = !S[c].ouviu[v]; };
TOQUES.al = function (b, n) { if (S.alt.viu) return false; S.alt.palpite = n; };
TOQUES['al-viu'] = function () { S.alt.viu = 1; };
TOQUES.pl = function (b, n) { S.placa.esc = n; };
TOQUES['pl-prox'] = function () { S.placa = { n: S.placa.n + 1, esc: -1 }; };
TOQUES.bl = function (b, n) { S.bolo.esc = n; };
TOQUES['bl-prox'] = function () { S.bolo = { n: S.bolo.n + 1, esc: -1 }; };
TOQUES.jn = function (b, n) { S.jornal.esc = n; };
TOQUES['jn-prox'] = function () { S.jornal = { n: S.jornal.n + 1, esc: -1 }; };
TOQUES['jr-p'] = function (b, n, v) { var j = S.juri; j.partes[j.n] = j.partes[j.n] || {}; j.partes[j.n][v] = !j.partes[j.n][v]; };
TOQUES['jr-e'] = function () { S.juri.erro = !S.juri.erro; };
TOQUES['jr-prox'] = function () { S.juri.n++; S.juri.erro = 0; };
