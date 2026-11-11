/* ============================================================
   AVENGERS: DOOMSDAY · THE WAR TABLE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · may not be able to (talvez não consiga), far + comparativo
   (far stronger, far less), e a consequência: it will be for nothing if
   we don’t…, unless…, otherwise…
   Erros: may not to be able, maybe not able (sem to be), may not can,
   very stronger / very more, far more strong, will must, fewer no lugar
   de less com incontável, if + will na condição, otherwise + vírgula
   errada (otherwise we lose → ok), more far.
   Catálogo WOLFLIX Live (07/10): família HERÓI, modo ESCOLHA O FINAL.
   A tela forte: a mesa holográfica da sala de guerra. Um mapa-múndi em
   linhas de luz sobre a mesa redonda; oito regiões apagadas. Cada frase
   certa é uma consequência pesada na balança, e uma região do mapa
   acende em verde de alerta, com a ameaça e a decisão. No fim, o mapa
   inteiro aceso: a decisão impensável.
   O AQUECIMENTO (aquece.js): a escala, o quanto você aguenta pressão.
   O FECHAMENTO (final.js): a cadeira quente, o aluno lidera a reunião.
   O VÍDEO: irVNGjRFZGk (trailer oficial Marvel, 2:26, idade 0, embed
   sim). Ação, sem sangue. Tempos lidos da legenda (yt-dlp, 07/10).
   A CARA: verde de Destino, azul do holograma, preto da sala; Teko no
   título, Barlow no texto.
   Fila: FILA-LIVE-386.md · 315.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: adivinhar quem está por trás (pistas) antes; Verdade ou
   Mentira com ▶ nas falas do trailer (legenda-dados.js); três escolhas de
   sentido depois. V: o bilhete na mesa de guerra (carta) e a regra para
   completar. VI: a mesa holográfica com SEIS regiões; ligar as metades,
   cada par certo acende uma região. VII (era EXTRA): a régua do time e o
   plano contado com as seis expressões.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'trono', rot: 'I · Warm-up and Pick a Side', t: 'Before the trailer: your bigger-than-expected moments, then a divided team.', p: 'Answer three questions about your life. Then choose the heroes’ plan and defend it.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Avengers: Doomsday. The official trailer.', p: 'Guess first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'ceu', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 5, img: 'mapa', rot: 'V · Three Kinds of Hard News', t: 'One war table, three tools.', p: 'Look at the three kinds. Tap the kind of each sentence. Then say three of your own.' },
  { k: 'regra', est: 'f', min: 7, img: 'trono', rot: 'VI · May Not Be Able To', t: 'A note was left on the war table. Find the key phrases.', p: 'Read the note out loud. Tap the key phrases. Then finish the rule.' },
  { k: 'mesa', est: 'o', min: 7, img: 'capa', rot: 'VII · The War Table', t: 'Six regions on the map. Every right match lights one.', p: 'Match the halves. Then say the whole sentence out loud.' },
  { k: 'pesos', est: 'o', min: 7, extra: 1, img: 'ceu', rot: 'VIII · Weigh It', t: 'How ready is your team? Then tell your plan.', p: 'Tap the ruler. Then tell your plan and tap each phrase when you use it.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var FILME = 'Avengers: Doomsday', ANO = '2026';
var YT = 'irVNGjRFZGk', DUR = 146;

var ENCARTE = [
  ['The film', '<i>Avengers: Doomsday</i> (2026), Marvel Studios, with Robert Downey Jr. as Doctor Doom.'],
  ['The threat', 'Something is coming that the heroes may not be able to stop. The last heroes who faced something like it were far stronger than all of them, and they died.'],
  ['The decision', 'The heroes are divided, and every choice costs something. Before the day ends, they will face an unthinkable decision.']
];

var ANTES = [
  { q: 'Have you ever had to make a very hard decision fast?', h: 'Yes, once I had to …' },
  { q: 'Who is your favorite Avenger? Why?', h: 'My favorite is … because …' }
];
var DEPOIS = [
  { q: 'Why may the heroes not be able to win?', h: 'Because the enemy is far …' },
  { q: 'What will be for nothing if they don’t stand together?', h: 'Everything … will be for nothing if …' }
];

var TRECHOS = [
  { k: 'Something’s coming', ini: 4, fim: 24, ouvir: 'What is coming?', sentido: 'Something is coming, something they may not be able to stop. Before the day ends, they will face an unthinkable decision.', gram: 'We <b>may not be able to</b> stop it.' },
  { k: 'Far stronger', ini: 28, fim: 42, ouvir: 'Who were the warriors?', sentido: 'Someone remembers great warriors. They were far stronger than all of them put together, and they died.', gram: 'They were <b>far stronger</b> than us.' },
  { k: 'Far less', ini: 42, fim: 56, ouvir: 'Which enemies did they face?', sentido: 'They died facing enemies that were far less scary than this one.', gram: 'Those enemies were <b>far less</b> dangerous.' },
  { k: 'For nothing', ini: 56, fim: 80, ouvir: 'What will be for nothing?', sentido: 'Everything they gave up will be for nothing if they don’t stand together. Put aside the small fights.', gram: 'It <b>will be for nothing if</b> we <b>don’t</b> stand together.' },
  { k: 'A miracle', ini: 80, fim: 105, ouvir: 'What will they need?', sentido: 'If they come back, they will come back as brothers and sisters. But they are going to need a miracle.', gram: '<b>Unless</b> a miracle happens, we lose.' }
];

var TRAPS = [
  ['May not be able TO', 'We may not to be able stop it.', 'We <b>may not be able to</b> stop it.', 'may not be able to + verb'],
  ['Far, not very', 'He is very stronger than us.', 'He is <b>far stronger</b> than us.', 'far / much + comparative (very + adjective)'],
  ['No will after if', 'It will be for nothing if we won’t stand together.', 'It will be for nothing if we <b>don’t</b> stand together.', 'if + present, will in the result'],
  ['Less, not fewer', 'They had fewer fear than us.', 'They had <b>far less</b> fear than us.', 'less + uncountable · fewer + plural']
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>may not be able to</b> + verb: maybe we can’t<br>far + <b>stronger</b> / <b>less</b>: a big gap<br>It will be for nothing <b>if</b> we <b>don’t</b>…<br><b>Unless</b> we find help, …<br>…, <b>otherwise</b> it is the end.';
/* III · antes: pistas, uma a uma */
var HM_REV = { formato: 'revela', titulo: 'Before you watch: who is behind it? Guess with the clues.', pistas: [
  'Something is coming. The heroes may not be able to stop it.',
  'It is far stronger than anything they have faced.',
  'The man behind it wears a metal mask and a green cloak.'
], resposta: 'Doctor Doom. Now watch the trailer and check.', botao: 'I know it! Show', mais: 'Next clue' };
/* III · durante: verdade ou mentira, cada fala no minuto do trailer (legenda-dados.js) */
var HM_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? Tap ▶ and listen. If it is a lie, say the truth.', itens: [
  { f: '“I fought with many warriors in my time.”', t: 1, tm: '0:31' },
  { f: '“They were far weaker than all of us put together.”', t: 0, tm: '0:35', c: 'They were far stronger than all of us.' },
  { f: '“They died facing enemies that scared me far more than this one.”', t: 0, tm: '0:43', c: 'They scared me far less than this one.' },
  { f: '“Everything that they sacrifice will be for nothing.”', t: 1, tm: '1:02' }
] };
/* III · depois: três escolhas de sentido */
var HM_ESC = { formato: 'escolhe', titulo: 'After the trailer: pick the answer. Then say it.', itens: [
  { p: 'What happened to the old warriors?', o: ['They won easily', 'They died facing the enemy', 'They ran away'], c: 1, tm: '0:43', d: 'Say it: They were far stronger than us, and they died.' },
  { p: 'What must they do, or everything will be for nothing?', o: ['Stand together', 'Go home', 'Wait a year'], c: 0, tm: '1:05', d: 'Say it: It will be for nothing if we don’t stand together.' },
  { p: 'What do they say they need?', o: ['A bigger army', 'A miracle', 'More time'], c: 1, tm: '1:39', d: 'Say it: Unless we find a miracle, we may not be able to win.' }
] };
/* V · o bilhete na mesa de guerra → a regra */
var HM_CARTA = { de: 'Note on the war table · tonight',
  txt: 'Team, the news is bad. We [[may not be able to]] stop Doom alone. He is [[far stronger]] than any of us, and the old enemies were [[far less]] dangerous. [[If we don’t]] stand together, everything we gave up will be for nothing. [[Unless]] we find help, we lose. Move now, [[otherwise]] it is the end.', assina: 'The team' };
var HM_REGRA = [
  { a: '<b>may not be able to</b> + verb. It means', par: ['maybe we can’t', 'we never try'], c: 0 },
  { a: '<b>far</b> + stronger / less. The gap is', par: ['big', 'small'], c: 0 },
  { a: '<b>if we don’t</b> stand together. After if we use the', par: ['present', 'future'], c: 0, b: ' (no will)' },
  { a: '<b>unless</b> we find help. Unless means', par: ['if … not', 'and then'], c: 0 },
  { a: '<b>otherwise</b> it is the end. Otherwise means', par: ['if not, then …', 'at the same time'], c: 0 }
];
/* VI · ligar as metades: cada par certo acende uma região da mesa */
var PARES = [
  ['We may not be able to …', '… stop it alone.'],
  ['Doom is far stronger …', '… than all of us.'],
  ['Those enemies were far less …', '… scary than this one.'],
  ['It will be for nothing if …', '… we don’t stand together.'],
  ['Unless we find help, …', '… we will lose.'],
  ['We must hurry, otherwise …', '… it will be too late.']
];
/* VII · a régua e o plano */
var HM_REG = { formato: 'regua', titulo: 'How ready is your team?', frase: '“We may not be able to stop it, but we must try.”', esquerda: 'No way', direita: 'We can do it', depois: 'Pick a spot. Tell your teacher why, with far or unless.' };
var HM_USA = { formato: 'usa', titulo: 'Your plan against Doom. Tell it out loud. Tap each phrase when you use it.', palavras: ['may not be able to', 'far stronger', 'far less', 'will be for nothing if', 'unless', 'otherwise'], fim: 'All six! Now vote: do you fight now, or wait?' };

/* a mesa: o gesto forte */
var REGIOES = [
  { nome: 'New York', x: 112, y: 70 },
  { nome: 'London', x: 184, y: 52 },
  { nome: 'Wakanda', x: 214, y: 128 },
  { nome: 'Latveria', x: 236, y: 74 },
  { nome: 'Tokyo', x: 330, y: 76 },
  { nome: 'São Paulo', x: 132, y: 146 }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, av: { n: 0, esc: -1 } };

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
  return '<div class="av-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a mesa holográfica: o mapa-múndi em pontos de luz; cada região acesa tem um anel verde pulsante e o nome */
function mesa(luz, ultima) {
  var n = luz.filter(Boolean).length, fim = n >= REGIOES.length;
  var pontos = '';
  var mundo = [[60,50,140,60],[90,110,40,40],[180,40,60,30],[190,90,50,60],[240,40,120,50],[320,140,50,30]];
  mundo.forEach(function (r) { for (var x = r[0]; x < r[0] + r[2]; x += 7) for (var y = r[1]; y < r[1] + r[3]; y += 7) if (((x * 7 + y * 13) % 5) !== 0) pontos += '<circle cx="' + x + '" cy="' + y + '" r="1.4"/>'; });
  var rs = REGIOES.map(function (r, i) {
    var cls = luz[i] ? (ultima === i ? ' on novo' : ' on') : '';
    return '<g class="av-r' + cls + '"><circle class="av-anel" cx="' + r.x + '" cy="' + r.y + '" r="9"/><circle class="av-nucleo" cx="' + r.x + '" cy="' + r.y + '" r="3"/>' + (luz[i] ? '<text x="' + r.x + '" y="' + (r.y + 20) + '" text-anchor="middle">' + r.nome + '</text>' : '') + '</g>';
  }).join('');
  return '<div class="av-holo vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The war table: ' + n + ' of ' + REGIOES.length + ' regions lit">'
    + '<div class="av-topo"><b>Threat map</b><small>' + n + ' / ' + REGIOES.length + ' regions</small></div>'
    + '<svg class="av-svg" viewBox="40 20 340 170" aria-hidden="true"><g class="av-mundo">' + pontos + '</g>' + rs + '</svg>'
    + '<p class="av-legenda">' + (fim ? 'The whole map is lit. The unthinkable decision is yours.' : ultima >= 0 && luz[ultima] ? 'Alert: ' + REGIOES[ultima].nome + '.' : 'Every region is quiet. For now.') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · may not be able to · far + comparative · consequence</span><h1>The Unthinkable Decision</h1>'
    + '<p class="banda">' + FILME + ' · Marvel Studios</p>'
    + '<p class="sub">Something is coming that they may not be able to stop. It is far stronger than anything before. Tonight you stand at the war table and weigh every consequence until the whole map is lit.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the war room</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r av-foto"><img src="' + img('capa') + '" alt="A dark war room with a round holographic table showing a map of the world"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="av-encarte vd"><div class="av-capinha"><img src="' + img('trono') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The empty throne</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="av-centro"><div class="pergunta vd ja"><small>Talk</small><h2>The enemy is far stronger. Would you fight, or try to make a deal?</h2></div>' + mostra('enc', 'I would fight. We may not be able to win, but a deal would be far worse.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', HM_REV) + '</div>'
    + '<div class="lado-l"><div class="av-selo vd"><b>' + FILME + '</b><small>the official trailer · superhero action, no blood · under three minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="av-video"><div class="av-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="av-cred">' + FILME + ' · official trailer (Marvel) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vm', HM_VM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="av-centro">' + FM.ex('esc', HM_ESC) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="av-video"><div class="av-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="av-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="av-sentido">' + x.sentido + '</span><span class="av-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="av-centro"><p class="av-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('carta', { formato: 'carta', carta: HM_CARTA, regra: HM_REGRA, toque: 'Tap the 6 key phrases', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.mesa = function (c) {
  var e = (S.fq || {}).mesaL, luz = PARES.map(function (p, i) { return !!(e && e.par && e.par[i] === i); });
  var antes = S.avluz || [], nova = -1;
  luz.forEach(function (x, i) { if (x && !antes[i]) nova = i; });
  if (nova >= 0) S.avult = nova;
  S.avluz = luz;
  return cab(c) + comPlaca('<div class="fm-obj">' + mesa(luz, S.avult == null ? -1 : S.avult) + '</div>'
    + FM.ex('mesaL', { formato: 'liga', titulo: 'Match the halves. Then say the whole sentence out loud.', pares: PARES, ordemDireita: [3, 5, 1, 0, 4, 2] }), PRESA);
};

R.pesos = function (c) {
  return cab(c) + comPlaca(FM.ex('reg', HM_REG) + FM.ex('usa', HM_USA), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="av-centro"><p class="av-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'escala', rot: 'I · Under Pressure', t: 'Before the trailer: how do you decide under pressure?', p: 'Mark a number for each sentence and say why. The teacher marks theirs too.', rotulos: ['Not me', 'Totally me'],
  itens: [
    { q: 'I decide far better under pressure.', ex: '3. Under pressure, I panic.' },
    { q: 'I say when I may not be able to do something.', ex: '8. I prefer to be honest.' },
    { q: 'I am far calmer now than ten years ago.', ex: '9. Kids made me calm!' },
    { q: 'I ask for help when it is far too much.', ex: '4. I try alone first.' },
    { q: 'I can choose fast in a crisis.', ex: '6. Fast, but not always right.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: the leader of the war room.', p: 'Sit in the hot seat as the leader. The teacher asks hard questions about the plan. Answer with may not be able to, far + comparative, if / unless. Then swap.',
  quem: 'the leader of the war room',
  itens: [
    { q: 'Can we win this?', ex: 'Honestly, we may not be able to. But we must try.' },
    { q: 'How strong is the enemy?', ex: 'Far stronger than anything we have faced.' },
    { q: 'What happens if the team splits?', ex: 'If we don’t stand together, everything will be for nothing.' },
    { q: 'What do we need?', ex: 'Unless we find more help, we will need a miracle.' },
    { q: 'Is there another way?', ex: 'There may be, but it will be far more dangerous.' }
  ] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'Hard news at the war table. Three kinds.',
  usos: [
    { t: 'THE RISK', f: 'We may not be able to stop him.', d: 'Maybe it is not possible: may not be able to + verb.', img: 'oficina' },
    { t: 'THE GAP', f: 'He is far stronger than any of us.', d: 'far + comparative: a much bigger difference.', img: 'multiverso' },
    { t: 'THE PRICE', f: 'Unless we act now, it will be for nothing.', d: 'unless or otherwise: what happens if we don’t.', img: 'trono' }
  ],
  pergunta: 'Which kind is it?',
  itens: [
    { f: 'Doom’s army is far bigger than ours.', c: 1 },
    { f: 'The team may not be able to reach the portal in time.', c: 0 },
    { f: 'We close the gate now. Otherwise, the whole map falls.', c: 2 },
    { f: 'We have far less time than we thought.', c: 1 },
    { f: 'Unless the heroes agree, Doom wins.', c: 2 },
    { f: 'I may not be able to hold the line alone.', c: 0 }
  ],
  nota: 'Three tools for a hard moment. <b>may not be able to</b> + verb: maybe it is not possible. <b>far</b> + comparative: a much bigger gap (far stronger, far less). <b>unless</b> or <b>otherwise</b>: what happens if we don’t act. Never “may not can”, never “very stronger”.',
  uso: { p: 'Your turn. A hard goal at work or in your life. Say the risk, the gap and the price.', molde: ['I may not be able to …', '… is far more … than …', 'Unless I …, …'], ex: 'I may not be able to finish the report today. The deadline is far closer than I expected. Unless I get help, the client will be upset.' },
  prof: 'Read the three kinds out loud with the student. Then the student taps a kind for each sentence. No rule to read: the kinds are the rule.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
