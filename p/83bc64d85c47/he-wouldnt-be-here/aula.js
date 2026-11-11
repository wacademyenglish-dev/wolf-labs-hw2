/* ============================================================
   THE BOYS · THE VOUGHT RANKING · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · mixed conditionals: passado → agora (if + had +
   particípio, would + verbo: if A-Train hadn’t run through Robin, Hughie
   wouldn’t be here) e agora → passado (if + passado, would have +
   particípio: if Homelander were honest, he would have told the truth).
   Erros: would have no lado do agora (wouldn’t have been here now),
   would no lado do if, passado simples para o passado (if he didn’t
   run, … would be), presente no lado do agora (if she were…, she
   wouldn’t had), would + -ing, particípio errado, pergunta sem inversão.
   Catálogo WOLFLIX Live (07/10): família HERÓI, modo COLETIVA.
   A tela forte: o ranking de heróis da Vought. Um painel de bastidor com
   oito heróis da lista (nomes da série, sem rostos), cada um com a
   nota do público; cada frase certa é uma mudança da equipe de relações
   públicas na história, e um herói sobe ou desce no ranking, com a seta
   e a nota nova. No fim, a lista inteira mexida: a verdade custa caro.
   O AQUECIMENTO (aquece.js): a pilha, termine a frase. O FECHAMENTO
   (final.js): um minuto.
   O VÍDEO: tcrNsIaQkb4 (trailer final da 1ª temporada, Prime Video,
   2:47, idade 0, embed sim). ATENÇÃO: violência e palavrões fortes no
   trailer; a aula usa só falas limpas, conferidas na legenda (23/09). O
   professor assiste antes e decide se mostra.
   A CARA: azul frio da torre, ouro da Vought, vermelho de alerta;
   Archivo Black no título, Inter Tight no texto, JetBrains Mono no
   painel. A antiga era o episódio do bastidor.
   Fila: FILA-LIVE-386.md · 312.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: o cronômetro de 30 segundos antes; escolher a resposta com ▶
   nas falas do trailer; depois, a palavra que você ouviu com ▶. V: separar as
   frases (passado → agora × agora → passado); a placa da regra aparece quando
   tudo está separado. VI: o painel da Vought com SEIS heróis, cada um com a
   fala primeiro. VII (era EXTRA, agora essencial): duas conversas, o professor
   escolhe A ou B.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'sala', rot: 'I · Warm-up and Pick a Side', t: 'Before the trailer: the moments that changed you, then heroes for sale.', p: 'Answer three questions about your life. Then pick a side and defend it.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'The Boys. The official trailer.', p: 'Beat the clock first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'palco', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'sala', rot: 'V · Right, Not This', t: 'Five lines about The Boys. One is right.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'regra', est: 'f', min: 6, img: 'sala', rot: 'VI · Then and Now', t: 'Past → now, or now → past? Sort the sentences.', p: 'Tap a sentence, then its box. Then read the rule.' },
  { k: 'ranking', est: 'o', min: 7, img: 'sala', rot: 'VII · The Vought Ranking', t: 'Six heroes on the board. Every sentence you say moves one.', p: 'Read the clue. Say the sentence. Then tap Check.' },
  { k: 'mistos', est: 'o', min: 6, img: 'palco', rot: 'VIII · Your Other Life', t: 'Two ways to talk about your other life.', p: 'The teacher picks A or B. Use mixed conditionals.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · One Minute', t: 'One minute.', p: 'One minute.' }
];

var FILME = 'The Boys', ANO = '2019';
var YT = 'tcrNsIaQkb4', DUR = 167;

var ENCARTE = [
  ['The show', '<i>The Boys</i> is a Prime Video series (2019) about superheroes owned by a company, Vought. They are rich, famous and loved, and many of them are terrible people.'],
  ['The boy', 'Hughie is a normal guy. One day a hero, A-Train, runs so fast that he kills Hughie’s girlfriend, Robin, in the street. Vought calls it an accident.'],
  ['The ranking', 'Vought’s PR team decides what people think of each hero. A good story pushes a hero up the ranking; the truth can push him down.']
];

var ANTES = [
  { q: 'Do you trust famous people who seem perfect?', h: 'Not really, because …' },
  { q: 'Would you like to have a superpower? Which one?', h: 'I would like to … because …' }
];
var DEPOIS = [
  { q: 'Why is Hughie in this story at all?', h: 'If Robin hadn’t … , he wouldn’t …' },
  { q: 'Who is the real hero in the trailer?', h: 'I think … because …' }
];

var TRECHOS = [
  { k: 'Condolences', ini: 27, fim: 37, ouvir: 'What does the company say about Robin?', sentido: 'A Vought executive offers condolences to Robin’s family: she just stepped into the wrong place.', gram: 'If she <b>hadn’t been</b> there, she <b>would be</b> alive.' },
  { k: 'Collateral damage', ini: 37, fim: 50, ouvir: 'How many people do heroes lose every year?', sentido: 'The executive says heroes lose hundreds of people every year. It is collateral damage.', gram: 'If they <b>cared</b>, they <b>would have said</b> sorry.' },
  { k: 'A bad day', ini: 80, fim: 92, ouvir: 'How is Starlight feeling?', sentido: 'Starlight says she is fine, just having a bad day at work. She is supposed to be a hero.', gram: 'If she <b>hadn’t joined</b> the team, she <b>wouldn’t be</b> so sad now.' },
  { k: 'You don’t have the fight', ini: 116, fim: 124, ouvir: 'What does the hero say to Hughie?', sentido: 'A hero tells Hughie he can’t do this: he doesn’t have the fight. He never has.', gram: 'If Hughie <b>were</b> a fighter, he <b>would have</b> already <b>won</b>.' },
  { k: 'Full of surprises', ini: 124, fim: 132, ouvir: 'What does Butcher think of Hughie?', sentido: 'Butcher says this kid is full of surprises.', gram: 'If Hughie <b>hadn’t met</b> Butcher, he <b>would</b> still <b>be</b> at the shop.' }
];

var TRAPS = [
  ['Past → now', 'If it hadn’t happened, he wouldn’t have been here now.', 'If it hadn’t happened, he <b>wouldn’t be</b> here now.', 'if + had + participle, would + verb'],
  ['Now → past', 'If Homelander was honest, he would tell the truth last year.', 'If Homelander <b>were</b> honest, he <b>would have told</b> the truth last year.', 'if + past, would have + participle'],
  ['The if part', 'If A-Train would have stopped, Robin would be alive.', 'If A-Train <b>had stopped</b>, Robin would be alive.', 'no would in the if part'],
  ['The question', 'Where you would be now if…?', 'Where <b>would you be</b> now if…?', 'would + subject + verb']
];

/* o ranking: o gesto forte */
var HEROIS = ['Homelander', 'Queen Maeve', 'A-Train', 'The Deep', 'Black Noir', 'Starlight'];
var NOTAS0 = [94, 88, 85, 79, 76, 70];
var MUDANCAS = [
  { heroi: 2, delta: -14, fato: 'A-Train ran through Robin.', pista: 'if · A-Train · not run so fast · Robin · be alive now', r: 'If A-Train <b>hadn’t run</b> so fast, Robin <b>would be</b> alive now.', depois: 'If you hadn’t taken this class, where would you be now?' },
  { heroi: 0, delta: -9, fato: 'Homelander is not honest.', pista: 'if · Homelander · be honest · he · tell the truth last year', r: 'If Homelander <b>were</b> honest, he <b>would have told</b> the truth last year.', depois: 'If you were braver, what would you have done last year?' },
  { heroi: 5, delta: +12, fato: 'Starlight joined the Seven.', pista: 'if · Starlight · not join the team · she · not be so sad now', r: 'If Starlight <b>hadn’t joined</b> the team, she <b>wouldn’t be</b> so sad now.', depois: 'If you hadn’t chosen your job, would you be happier now?' },
  { heroi: 3, delta: -11, fato: 'The Deep lied to the press.', pista: 'if · the Deep · be a good person · he · not lie to the press', r: 'If the Deep <b>were</b> a good person, he <b>wouldn’t have lied</b> to the press.', depois: 'If you were more patient, what wouldn’t you have said last week?' },
  { heroi: 1, delta: +6, fato: 'Queen Maeve told part of the truth.', pista: 'if · Maeve · not speak up · nobody · know the truth now', r: 'If Maeve <b>hadn’t spoken</b> up, nobody <b>would know</b> the truth now.', depois: 'Who spoke up once, and changed things for you?' },
  { heroi: 4, delta: +4, fato: 'Black Noir never talks.', pista: 'where · you · be now · if · you · never meet Vought? · a question', r: '<b>Where would you be</b> now if you <b>had never met</b> Vought?', depois: 'Where would you be now if you hadn’t started English?' }
];

var MISTOS = [
  { k: 'School', h: 'If you had studied something else, what would you be doing now?', ex: 'If I had studied music, I would be playing in a band now.' },
  { k: 'A city', h: 'If you had been born in another city, would you be different now?', ex: 'If I had been born in Rio, I would surf every weekend.' },
  { k: 'You now', h: 'If you were more organized, what would you have done last week?', ex: 'If I were more organized, I would have paid my bills on time.' },
  { k: 'A person', h: 'If you hadn’t met your best friend, would you be the same today?', ex: 'If I hadn’t met Ana, I wouldn’t be so confident today.' },
  { k: 'English', h: 'If you spoke perfect English, what would you have done differently?', ex: 'If I spoke perfect English, I would have applied for that job.' },
  { k: 'A choice', h: 'If you had taken another road, where would you live now?', ex: 'If I had moved abroad, I would live in Lisbon now.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>Past → now:</b> if + <b>had</b> + participle, <b>would</b> + verb<br>If it hadn’t happened, he <b>wouldn’t be</b> here.<br><b>Now → past:</b> if + <b>past</b>, <b>would have</b> + participle<br>If he <b>were</b> honest, he <b>would have told</b> you.<br>no <b>would</b> in the if part · <b>Where would you be</b> …?';
/* III · antes: trinta segundos */
var VD_CRO = { formato: 'cronometro', titulo: 'Before you watch: 30 seconds on the clock.', segundos: 30, texto: 'Say as many as you can: “If I hadn’t started English, I would be … now.” “If I were braver, I would have … last year.” Then the teacher.' };
/* III · durante: escolher a resposta, com ▶ nos tempos do trailer (legenda-dados.js; só falas limpas) */
var VD_ESC = { formato: 'escolhe', titulo: 'While you watch: choose the right answer. Tap ▶ to hear it again.', itens: [
  { p: 'What do people love?', o: ['Cartoons', 'Superheroes'], c: 1, tm: '0:01', d: '“People love superheroes.”' },
  { p: 'What do the heroes do?', o: ['They swoop out of the sky and save the day.', 'They stay at home all day.'], c: 0, tm: '0:04', d: '“They swoop out of the sky and save the day.”' },
  { p: 'What kind of day is it?', o: ['A great day', 'A bad day'], c: 1, tm: '1:24', d: '“I’m fine, I’m just having a bad day.”' },
  { p: 'Who should you remember?', o: ['Your friends and your enemies', 'Your teachers and your parents'], c: 0, tm: '1:43', d: '“Just remember who your friends are, who your enemies are.”' },
  { p: 'What is this kid full of?', o: ['Questions', 'Surprises'], c: 1, tm: '2:07', d: '“This kid is full of surprises.”' }
] };
/* III · depois: qual palavra você ouviu? */
var VD_SOM = { formato: 'som', titulo: 'After the trailer: which word did you hear?', itens: [
  { a: 'People love that ', par: ['crazy', 'cozy'], c: 1, b: ' feeling.', t: '0:08' },
  { a: 'I’m just having a ', par: ['bad', 'bed'], c: 0, b: ' day.', t: '1:24' },
  { a: 'Just remember who your ', par: ['trends', 'friends'], c: 1, b: ' are.', t: '1:43' },
  { a: 'This kid is full of ', par: ['surprises', 'supplies'], c: 0, b: '.', t: '2:07' },
  { a: 'I thought we had an ', par: ['undertaking', 'understanding'], c: 1, b: '.', t: '2:15' }
] };
/* V · separar as frases: passado → agora × agora → passado */
var VD_SEP = { formato: 'separa', titulo: 'Tap a sentence, then its box.', caixas: ['Past → now (the result is now)', 'Now → past (the result was in the past)'], itens: [
  { t: 'If Hughie hadn’t met Butcher, he would still be at the shop.', c: 0 },
  { t: 'If Homelander were honest, he would have told the truth.', c: 1 },
  { t: 'If the Deep were a good person, he wouldn’t have lied.', c: 1 },
  { t: 'If A-Train hadn’t run so fast, Robin would be alive now.', c: 0 },
  { t: 'If Maeve weren’t so scared, she would have spoken up years ago.', c: 1 },
  { t: 'If Starlight hadn’t joined the team, she wouldn’t be so sad now.', c: 0 }
] };
/* VII · duas conversas: o professor escolhe */
var VD_A = { t: 'The road you didn’t take', d: 'Pick a big choice in your past: a school, a city, a job. What would your life be like now if you had chosen the other road?', st: ['If I had … , I would be …', 'I wouldn’t …', 'Where would you be?'] };
var VD_B = { t: 'If you were a different person', d: 'Think of something you are not: braver, richer, more organized. What would you have done last year if you were?', st: ['If I were …', 'I would have …', 'I wouldn’t have …'] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, rk: { n: 0, esc: -1 } };

/* a linha do vídeo: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
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
  return '<div class="tb-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o painel do ranking: aplica as mudanças feitas, ordena pela nota e mostra seta para quem mexeu */
function painel(feitas, nova) {
  var fim = feitas >= MUDANCAS.length;
  var notas = NOTAS0.slice(), mov = {};
  for (var i = 0; i < feitas; i++) { notas[MUDANCAS[i].heroi] += MUDANCAS[i].delta; mov[MUDANCAS[i].heroi] = MUDANCAS[i].delta; }
  var ult = feitas ? MUDANCAS[feitas - 1].heroi : -1;
  var ord = HEROIS.map(function (h, i) { return i; }).sort(function (a, b) { return notas[b] - notas[a]; });
  var linhas = ord.map(function (h, pos) {
    var d = mov[h], cls = (h === ult && nova ? ' novo' : '') + (d ? (d > 0 ? ' sobe' : ' desce') : '');
    return '<li class="tb-l' + cls + '"><span class="tb-pos">' + (pos + 1) + '</span><b>' + HEROIS[h] + '</b><i class="tb-barra"><i style="width:' + notas[h] + '%"></i></i><span class="tb-nota">' + notas[h] + '</span><span class="tb-seta">' + (d ? (d > 0 ? '▲ ' + d : '▼ ' + (-d)) : '') + '</span></li>';
  }).join('');
  var fato = feitas ? MUDANCAS[feitas - 1].fato : 'Public approval, this week.';
  return '<div class="tb-painel vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The Vought ranking: ' + feitas + ' of 6 changes">'
    + '<div class="tb-topo"><b>Vought · Hero approval</b><small>' + (fim ? 'final' : 'live') + '</small></div><ol>' + linhas + '</ol>'
    + '<p class="tb-fato"><span>PR note</span>' + fato + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · mixed conditionals · past → now · now → past</span><h1>He Wouldn’t Be Here</h1>'
    + '<p class="banda">' + FILME + ' · Prime Video</p>'
    + '<p class="sub">If a hero hadn’t run through his girlfriend, Hughie wouldn’t be here. At Vought, a story can push a hero up the ranking and the truth can pull him down. Tonight you move the board, one mixed conditional at a time.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the board</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r tb-foto"><img src="' + img('capa') + '" alt="A glass corporate skyscraper at night with a golden top floor"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="tb-encarte vd"><div class="tb-capinha"><img src="' + img('sala') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The PR room</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="tb-centro"><div class="pergunta vd ja"><small>Talk</small><h2>If Robin hadn’t died, where would Hughie be now?</h2></div>' + mostra('enc', 'He would still be at the electronics shop, and he would be with Robin.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_CRO) + '</div>'
    + '<div class="lado-l"><div class="tb-selo vd"><b>' + FILME + '</b><small>the season 1 trailer · strong violence and language · the teacher decides</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="tb-video"><div class="tb-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="tb-cred">' + FILME + ' · season 1 trailer (Prime Video) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="tb-centro">' + FM.ex('v2', VD_SOM) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="tb-video"><div class="tb-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="tb-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="tb-sentido">' + x.sentido + '</span><span class="tb-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="tb-centro"><p class="tb-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  /* a placa da regra aparece quando as seis frases estão nas caixas certas */
  var e = (S.fq && S.fq.rg) || { em: {} }, ok = 0;
  VD_SEP.itens.forEach(function (x, i) { if (e.em[i] === x.c) ok++; });
  var corpo = FM.ex('rg', VD_SEP);
  return cab(c) + (ok === VD_SEP.itens.length ? comPlaca(corpo, PRESA) : corpo);
};

R.ranking = function (c) {
  return cab(c) + '<div class="fm-lado2">' + FM.ex('rk', { formato: 'fala', rotulo: 'Change', regra: PRESA,
    lado: function (f, a, v) { return painel(f, v ? 1 : 0); },
    fim: 'The board has moved. Now be Hughie at a press conference: say the truth in three mixed conditionals.',
    itens: MUDANCAS.map(function (x) { return { pista: x.pista, resp: x.r, depois: x.depois }; }) }) + '</div>';
};

R.mistos = function (c) {
  return cab(c) + comPlaca(FM.ab('ab', VD_A, VD_B), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="tb-centro"><p class="tb-dica">One minute.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'pilha', rot: 'I · Finish It', t: 'Before the trailer: your life, the other way.', p: 'Turn one card at a time and finish it out loud. Then the teacher finishes it too.', rotulo: 'Finish it',
  depois: 'Which card surprised you the most? Say it again.',
  itens: [
    { q: 'If I hadn’t started English, I would be …', ex: '… learning Spanish now, probably.' },
    { q: 'If I were rich, I would have bought … last year.', ex: '… a house by the beach.' },
    { q: 'If I had been born in another country, I would …', ex: '… speak three languages today.' },
    { q: 'If I were a superhero, I would have saved …', ex: '… my old phone from the river!' },
    { q: 'If I hadn’t met my best friend, I wouldn’t …', ex: '… be so funny now.' },
    { q: 'If I were braver, I would have told …', ex: '… my boss the truth last month.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'minuto', rot: 'VIII · One Minute', t: 'One minute of your other life.', p: 'Pick a topic. Talk for one minute with mixed conditionals. Then the teacher.',
  temas: [
    { t: 'The road you didn’t take', ajuda: 'If I had…, I would be… now. I would live in… I wouldn’t…' },
    { t: 'If you were a different person', ajuda: 'If I were more…, I would have… last year. I would have…' },
    { t: 'Hughie’s life without The Boys', ajuda: 'If Robin hadn’t died, he would be… If he were braver, he would have…' }
  ],
  palavras: ['If I had…', 'I would be', 'If I were', 'would have', 'now', 'last year'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.',
  pares: [
    { c: 'If Hughie hadn’t met Annie, he wouldn’t be here.', x: 'If Hughie didn’t meet Annie, he wouldn’t be here.', d: 'A closed past: had + participle in the if part.' },
    { c: 'If Homelander were honest, he would have told the truth.', x: 'If Homelander would be honest, he would have told the truth.', d: 'Never would in the if part: were.' },
    { c: 'If A-Train hadn’t run, Robin would be alive.', x: 'If A-Train hadn’t run, Robin would have been alive now.', d: 'The result is today: would + verb, no have.' },
    { c: 'If Butcher had trusted Hughie, they would be friends now.', x: 'If Butcher had trusted Hughie, they would had friends now.', d: 'Would is followed by a clean verb.' },
    { c: 'If Starlight hadn’t joined the Seven, she would have a quieter life today.', x: 'If Starlight didn’t join the Seven, she would have a quieter life today.', d: 'Past before now: had joined, not joined.' }
  ],
  nota: 'The two halves have different clocks. The past that changed: <b>if + had + participle</b>. The result today: <b>would + verb</b>. An always-true fact: <b>were</b>, and the result finished: <b>would have + participle</b>.',
  uso: { p: 'Your turn. A moment that changed your life, and what is different today.', molde: ['If I hadn’t …, I wouldn’t …now.', 'If I had …, I would …today.'], ex: 'If I hadn’t joined that class, I wouldn’t speak English today.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
