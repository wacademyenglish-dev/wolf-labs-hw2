/* ============================================================
   EVERYBODY HATES CHRIS · ROCHELLE'S RECEIPT · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · much (incontável) / many (contável) / a lot of, too much /
   too many, too + adjetivo, not enough, How much…? / How many…?
   Erros: too many sugar, much candy bars, How many money, How much kids,
   a lot candy / a lots of, too much expensive, chairs enough, isn't
   enough chairs, plural esquecido (too many candy bar), money(s).
   Catálogo WOLFLIX Live (07/10): família SITCOM, modo PLATEIA.
   A tela forte: a nota da compra de Halloween da Rochelle. Cada frase
   certa imprime uma linha com o preço, o total sobe na conta da casa,
   e no fim chega aos 23 dólares que o Julius não acredita.
   O AQUECIMENTO (aquece.js): o duelo. O FECHAMENTO (final.js): a
   cadeira quente, o aluno é o Julius.
   O VÍDEO: BPqYA_8n6LQ (clipe oficial Peacock, 4:18, idade 0, embed
   sim). Sem legenda no YouTube hoje: os tempos são os conferidos com a
   legenda em 23/09 (0:11, 2:16, 2:22, 2:52, 3:52), e cada momento é
   contado com palavras nossas.
   A CARA: Brooklyn 1983, laranja de abóbora e verde-água de fórmica,
   papel de nota escuro com letra de impressora; Shrikhand + Rubik +
   VT323. A antiga era o kit cinema "episódio".
   Fila: FILA-LIVE-386.md · 274.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: duas opiniões de toque; escolher o que ele disse e a palavra
   que você ouviu, com ▶ nas falas do clipe (legenda-dados.js); verdadeiro ou
   mentira + uma régua; V: separar o que se conta e o que não se conta (a
   regra aparece quando as seis estão certas); VI: a nota falada (montar a
   pergunta de cada linha, Check, a linha imprime; 6 linhas, total 22,99);
   VII (era EXTRA): três dados de palavras + contador de frases verdadeiras.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'porta', rot: 'I · Warm-up and The Interview', t: 'Before the clip: you and money, then a father who knows every price.', p: 'Answer three questions about your life. Then ask your teacher questions and find out who he is.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Clip', t: 'Everybody Hates Chris. Halloween at the Rocks’.', p: 'Answer first. Watch the clip. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'porta', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'doces', rot: 'V · Count It or Don’t', t: 'Many candy bars, much sugar. Sort the words.', p: 'Tap a word, then tap its box. When all six are right, the rule appears.' },
  { k: 'nota', est: 'o', min: 7, img: 'capa', rot: 'VI · Rochelle’s Receipt', t: 'Every question prints a line. Watch the total.', p: 'Build the question out loud, tap Check, then ask your teacher. The teacher answers.' },
  { k: 'casa', est: 'o', min: 7, img: 'doces', rot: 'VII · Your House', t: 'Six things in your life. Too much, too many, or not enough?', p: 'Roll the dice. Say a true sentence with the three words. Tap Got it! for each one.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var SERIE = 'Everybody Hates Chris', ANO = '2005';
var YT = 'BPqYA_8n6LQ', DUR = 258;

var ENCARTE = [
  ['The show', '<i>Everybody Hates Chris</i> is an American sitcom (2005–2009) about the teenage years of the comedian Chris Rock. Chris tells the story himself.'],
  ['The family', 'It is Brooklyn, 1983. Chris lives with his mother Rochelle, his father Julius, his brother Drew and his sister Tonya. There isn’t much money, but there is a lot of love.'],
  ['The father', 'Julius has two jobs, and he knows the price of everything. On Halloween, Rochelle buys a lot of candy for the kids in the neighborhood. Julius thinks it is too much.']
];

var ANTES = [
  { q: 'Do you give candy to kids on Halloween or on another day?', h: 'Yes, I give … / No, we don’t …' },
  { q: 'Who spends too much money in your family?', h: 'My … spends too much on …' }
];
var DEPOIS = [
  { q: 'How much money did Rochelle spend on candy?', h: 'She spent …', r: 'She spent twenty-three dollars on candy. For Julius, that is too much money!' },
  { q: 'Is Julius right? Is it too much?', h: 'I think it is / isn’t too much because …', r: 'I think it is too much, because they don’t have much money. But Rochelle wanted the kids to have a nice Halloween.', modelo: 1 }
];

var TRECHOS = [
  { k: 'The cheap candy', ini: 8, fim: 22, ouvir: 'What candy does Julius buy?', sentido: 'Julius buys a cheap copy of a famous chocolate bar. It is almost the same, but it costs a lot less.', gram: 'It is <b>a lot</b> cheaper.' },
  { k: 'The knife', ini: 134, fim: 142, ouvir: 'What is Julius doing with the candy?', sentido: 'He cuts the candy bars into small pieces. For him, one bar for one kid is too expensive.', gram: 'The candy is <b>too</b> expensive.' },
  { k: 'The bill', ini: 142, fim: 158, ouvir: 'How much did they spend?', sentido: 'Julius cannot believe the bill: twenty-three dollars on candy. Rochelle only wanted to look nice to the neighbors.', gram: '<b>How much</b> money? <b>Too much</b>!' },
  { k: 'The kids', ini: 168, fim: 180, ouvir: 'Can the kids eat some candy?', sentido: 'One of the kids asks for some candy, and the answer is a short, fast no.', gram: 'Not <b>much</b> candy for the Rocks.' },
  { k: 'Three times', ini: 228, fim: 242, ouvir: 'How many times does the boy come?', sentido: 'A boy comes to the door again and again. He says it was his brother, not him.', gram: '<b>How many</b> times? <b>Too many</b>!' }
];

var TRAPS = [
  ['You can’t count it: much', 'There is too many sugar.', 'There is <b>too much</b> sugar.', 'much + sugar, money, time, candy'],
  ['You can count it: many', 'She bought too much candy bars.', 'She bought <b>too many</b> candy bars.', 'many + bars, kids, dollars, times'],
  ['A lot of: both', 'Chris eats a lot candy.', 'Chris eats <b>a lot of</b> candy.', 'a lot of sugar · a lot of kids'],
  ['Too + adjective', 'The candy is too much expensive.', 'The candy is <b>too</b> expensive.', 'too + expensive, big, sweet · too much + noun']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'Can you count it? <b>many</b> candy bars · <b>much</b> sugar<br><b>a lot of</b> + both: a lot of candy, a lot of kids<br><b>too much</b> sugar · <b>too many</b> kids · <b>too</b> expensive<br>not <b>enough</b> chairs · <b>How much</b> money? <b>How many</b> kids?';
/* III · antes: duas opiniões de toque (sem resposta certa) */
var VD_OP = { formato: 'escolhe', titulo: 'Before you watch · tap one, then say why', itens: [
  { p: 'On Halloween, how much candy is too much for one kid?', o: ['A few pieces', 'A full bag', 'A whole bowl'], c: -1, d: 'Say: I think … is too much because …' },
  { p: 'Who spends too much money in your family?', o: ['Me', 'My mother or father', 'Nobody'], c: -1, d: 'Say: … spends too much on …' }
] };
/* III · durante: o que ele disse e a palavra que você ouviu, cada um no minuto do clipe (legenda-dados.js) */
var VD_ESC = { formato: 'escolhe', titulo: 'What does he say? Tap one.', itens: [
  { p: 'What drove Julius crazy?', o: ['Buying stuff we gave away', 'Cooking dinner', 'Watching TV'], c: 0, tm: '0:04', d: 'Yes: “buying stuff that we gave away almost drove him crazy.”' },
  { p: 'Why was the candy a problem?', o: ['It was too expensive', 'It was too old', 'It was too hard'], c: 0, tm: '2:18', d: 'Yes: “way too expensive to be given to one person.”' },
  { p: 'Why did Rochelle buy so much?', o: ['To make a good impression', 'To eat it all', 'To sell it'], c: 0, tm: '2:31', d: 'Yes: it is their first Halloween in the neighborhood.' }
] };
var VD_SOM = { formato: 'som', itens: [
  { a: 'It’s the same, but it’s a lot ', par: ['cheaper', 'cheater'], c: 0, b: '.', t: '0:15' },
  { a: 'This candy is way too ', par: ['expensive', 'expressive'], c: 0, b: ' to be given to one person.', t: '2:18' },
  { a: 'Man, you’ve been here ', par: ['three', 'tree'], c: 0, b: ' times.', t: '3:52' }
] };
/* III · depois: verdadeiro ou mentira + uma régua */
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Rochelle wanted to make a good impression on the neighbors.', t: true, tm: '2:31' },
  { f: 'Julius cuts the candy into big pieces.', t: false, tm: '2:46', c: 'It says: “Cut them real small.”' },
  { f: 'The boy at the door says he is a ghost.', t: false, tm: '3:37', c: 'A boy says: “I’m a matador.”' }
] };
var VD_REG = { formato: 'regua', titulo: 'After the clip', frase: 'Twenty-three dollars on candy is too much.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why: It’s too much / It isn’t too much because …' };
/* V · separar o que se conta e o que não se conta */
var SEP = { formato: 'separa', titulo: 'Can you count it? Sort the words.', caixas: ['much', 'many'], itens: [
  { t: 'sugar', c: 0 }, { t: 'candy bars', c: 1 }, { t: 'money', c: 0 }, { t: 'kids', c: 1 }, { t: 'time', c: 0 }, { t: 'dollars', c: 1 }
] };
/* VI · a nota falada: seis linhas, o total termina em 22,99 */
var ITENS = [
  { item: 'CANDY CORN 2 BAGS', preco: 2.49 }, { item: 'CHOC BARS X 24', preco: 6.79 }, { item: 'LOLLIPOPS', preco: 3.99 },
  { item: 'GUMDROPS', preco: 2.79 }, { item: 'TAFFY', preco: 3.35 }, { item: 'BIG CHOC BAR', preco: 3.58 }
];
var PERG = { formato: 'pergunta', titulo: 'Build the question for each line. Ask your teacher.', depoisRot: 'Your teacher answers', depois: ['Twenty-three dollars.', 'Too many!', 'A lot.', 'Not enough.'], itens: [
  { p: 'Candy corn · (sugar · in this candy)?', r: '<b>How much</b> sugar is in this candy?' },
  { p: 'Choc bars · (candy bars · Rochelle buy)?', r: '<b>How many</b> candy bars did Rochelle buy?' },
  { p: 'Lollipops · (money · they spend · on candy)?', r: '<b>How much</b> money did they spend on candy?' },
  { p: 'Gumdrops · (kids · at the door)?', r: '<b>How many</b> kids are at the door?' },
  { p: 'Taffy · (candy · enough · for all the kids)?', r: 'Is there <b>enough</b> candy for all the kids?' },
  { p: 'Big choc bar · (the candy · expensive)?', r: 'Is the candy <b>too</b> expensive?' }
] };
/* VII · três dados de palavras + contador de frases verdadeiras */
var VG_DADO = { formato: 'sorteio', tipo: 'dado', titulo: 'Roll the dice', opcoes: ['candy', 'money', 'time', 'kids', 'chairs', 'sugar', 'homework', 'coffee'], botao: 'Roll' };
var VG_CONTA = { formato: 'contador', titulo: 'Say a true sentence with the three words. Tap Got it!', botao: 'Got it!', revelar: 'Show an example', resposta: 'I have too much homework, too many apps, and not enough time.' };

/* a nota: o gesto forte */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, nt: { n: 0, esc: -1 } };

/* a tira de filme: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
function onda(marcas, sel, acao) {
  var ims = []; L.forEach(function (x) { if (x.img && ims.indexOf(x.img) < 0) ims.push(x.img); });
  var fr = (marcas || []).map(function (x, i) {
    var t = Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2);
    var bg = ' style="--bg:url(\'' + img(ims[(i + 1) % ims.length]) + '\')"';
    var dentro = '<i class="tq-img"></i><b>' + t + '</b><span>' + x.k + '</span>';
    return acao ? '<button type="button" class="tq' + (sel === i ? ' on' : '') + '"' + bg + ' data-a="' + acao + '" data-n="' + i + '">' + dentro + '</button>' : '<span class="tq"' + bg + '>' + dentro + '</span>';
  }).join('');
  return '<div class="tira' + (acao ? ' grande' : '') + '" aria-hidden="' + (acao ? 'false' : 'true') + '"><div class="tira-furos"></div><div class="tira-q">' + fr + '</div><div class="tira-furos"></div></div>';
}
function tres(acao, ops, esc, semente) {
  return '<div class="eh-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
function dol(v) { return '$' + v.toFixed(2); }
/* a nota fiscal de 1983: papel escuro, letra de impressora; cada linha certa sai impressa com o preço, o total sobe; no fim, o carimbo do Julius */
function nota(feitas, nova) {
  var tot = 0; for (var i = 0; i < feitas; i++) tot += ITENS[i].preco;
  var linhas = ITENS.slice(0, feitas).map(function (a, i) { return '<li' + (nova && i === feitas - 1 ? ' class="novo"' : '') + '><span>' + a.item + '</span><b>' + (a.preco ? dol(a.preco) : '--') + '</b></li>'; }).join('');
  var fim = feitas >= ITENS.length;
  return '<div class="eh-nota vd' + (fim ? ' cheia' : '') + '" role="img" aria-label="Rochelle’s receipt: ' + feitas + ' of ' + ITENS.length + ' lines, total ' + dol(tot) + '"><div class="eh-topo"><b>KWIK MART</b><small>BROOKLYN NY · 10/31/83</small></div>'
    + '<ul class="eh-linhas">' + (linhas || '<li class="vazio"><span>* NOTHING YET *</span></li>') + '</ul>'
    + '<div class="eh-total"><span>TOTAL</span><b class="' + (nova ? 'novo' : '') + '">' + dol(tot) + '</b></div>'
    + (fim ? '<p class="eh-carimbo">Too much!</p>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · much · many · a lot of · too much · not enough</span><h1>Too Much Sugar</h1>'
    + '<p class="banda">' + SERIE + ' · ' + ANO + '</p>'
    + '<p class="sub">Brooklyn, 1983. It’s Halloween, Rochelle buys a lot of candy, and Julius knows the price of every piece. Tonight every question prints a line on her receipt. Watch the total.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the candy bowl</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r eh-foto"><img src="' + img('capa') + '" alt="An old Brooklyn kitchen at night with a big bowl of candy and a carved pumpkin"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="eh-encarte vd"><div class="eh-capinha"><img src="' + img('porta') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>Halloween in Brooklyn</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="eh-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Julius knows the price of everything. Who knows the prices in your family?</h2></div>' + mostra('enc', 'My mother. She knows how much everything costs at the supermarket.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vo', VD_OP) + '</div>'
    + '<div class="lado-l"><div class="eh-selo vd"><b>' + SERIE + '</b><small>Halloween and the candy money · a scene from the show · about four minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the clip now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="eh-video"><div class="eh-vcol">' + iframe(YT, SERIE + ' · Halloween') + '<small class="eh-cred">' + SERIE + ' · official clip (Peacock) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('ve', VD_ESC) + FM.ex('vs', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the clip</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vm', VD_VM) + '</div><div class="lado-l">' + FM.ex('vg', VD_REG) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="eh-video"><div class="eh-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="eh-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="eh-sentido">' + x.sentido + '</span><span class="eh-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="eh-centro"><p class="eh-dica">Tap a frame to open that moment of the clip.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).sep, ok = !!e;
  SEP.itens.forEach(function (x, i) { if (!e || e.em[i] !== x.c) ok = false; });
  return cab(c) + '<div class="eh-centro">' + FM.ex('sep', SEP)
    + (ok ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Sort all six words. Then the rule appears.</p>') + '</div>';
};

R.nota = function (c) {
  var e = (S.fq || {}).nt, ver = (e && e.ver) || {}, feitas = 0;
  PERG.itens.forEach(function (x, i) { if (ver[i]) feitas++; });
  return cab(c) + comPlaca('<div class="eh-duo"><div class="fm-obj">' + nota(feitas, 0) + '</div><div>' + FM.ex('nt', PERG) + '</div></div>', PRESA);
};

R.casa = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('vgd', VG_DADO) + '</div><div class="lado-l">' + FM.ex('vgc', VG_CONTA) + '</div></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="eh-centro"><p class="eh-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'duelo', rot: 'I · This or That', t: 'Before the clip: sweet or not sweet?', p: 'Pick one side. Then say why. The teacher picks too.',
  itens: [
    { a: 'Sweet', b: 'Salty', q: 'Which snack do you want now?', ex: 'Salty. I eat too much sugar already!' },
    { a: 'Coffee with sugar', b: 'Coffee with no sugar', q: 'How do you drink it?', ex: 'No sugar. A lot of sugar is bad for me.' },
    { a: 'Chocolate', b: 'Fruit', q: 'What is your dessert?', ex: 'Chocolate. I can’t eat enough chocolate!' },
    { a: 'Save money', b: 'Spend money', q: 'What are you, really?', ex: 'Spend. I buy too many things online.' },
    { a: 'A big party', b: 'A quiet night', q: 'Halloween night: which one?', ex: 'A quiet night. Too many people make me tired.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: Julius on Halloween.', p: 'Sit in the hot seat as Julius, the father who counts every cent. The teacher asks. Then swap.',
  quem: 'Julius, on Halloween night',
  itens: [
    { q: 'How much money did Rochelle spend on candy?', ex: 'Twenty-three dollars! That’s too much money!' },
    { q: 'How many candy bars did she buy?', ex: 'Too many! Twenty-four bars!' },
    { q: 'Why do you cut the bars into pieces?', ex: 'Because one bar for one kid is too expensive.' },
    { q: 'How many kids came to your door?', ex: 'A lot of kids. Too many kids!' },
    { q: 'Do your kids eat much candy?', ex: 'No! Not much. Candy costs too much.' }
  ] };
/*FIM@@*/
