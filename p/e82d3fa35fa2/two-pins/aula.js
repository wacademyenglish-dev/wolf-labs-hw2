/* ============================================================
   TWO PINS · THE OLD CITY AND THE CITY NOW · LIVE CLASS  05/10/2026
   Main series A1 · I'm from · I live in · I was born in · a house / an
   apartment · with my family / on my own · Where are you from? × Where do
   you live?
   A CARA: um quadro de cortiça ESCURO; o alfinete da esquerda (vermelho) é
   a cidade de origem, o da direita (âmbar) é a cidade de agora, e o fio
   entre eles é a frase. Desenhado aqui em SVG.
   ÁUDIOS (faster-whisper): os p-* NÃO dizem o que o roteiro velho dizia —
   cada um traz a casa e com quem (Tim: house, housemates; Sian: house,
   family; Buli: flat, on his own; Georgie: flat, flatmates). O v-live
   (montagem) troca Tim e Sian, então saiu; a cena VI usa os p-*.
   O áudio é britânico (flat, flatmates); a tela ensina o americano
   (apartment, roommates) e mostra flat como a palavra britânica.
   Fila: FILA-LIVE-386.md · 035.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 10
   páginas. A auditoria: escolher entre frases quase iguais (IV, V, VIII), o
   professor tocando o que o aluno disse (I, VII, IX). Agora: I as três
   perguntas do quadro, fala + Check (os alfinetes aparecem); II ouvir e ligar
   cada pessoa aos seus dois alfinetes (liga); III ouvir os seis lugares e
   separar em cidade velha / cidade de agora (separa); IV o cartão-postal do
   Tim → a regra (carta); V a resposta → dizer a pergunta (fala); VI ouvir e
   escolher a casa (escolhe); VII o cartão de pouso, fala + Check (fala);
   VIII a palavra errada (erro); IX monte a pergunta (pergunta). VII e IX
   deixam de ser EXTRA.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'cortica' },
  { k: 'abre', est: 'o', min: 7, img: 'cortica', rot: 'I · Your Two Pins', t: 'Before anything else: your own two pins.', p: 'Read the question. Say your answer out loud. Then tap Check. Nobody is corrected here.' },
  { k: 'gente', est: 'l', min: 7, img: 'cidade-velha', rot: 'II · Four People', t: 'Four people. Not one of them lives where they are from.', p: 'Play each person. Match the name to the two pins. Then say both pins out loud.' },
  { k: 'lugares', est: 'l', min: 7, img: 'cidade-velha', rot: 'III · Six Places', t: 'The four say where they are from, fast.', p: 'Press play. Tap a city, then its box: the old city or the city now.' },
  { k: 'gx', est: 'f', min: 4, img: 'cortica', rot: 'IV · Left Pin or Right Pin?', t: 'Two questions, two pins. Same board.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new people.' },
  { k: 'regra', est: 'f', min: 7, img: 'cortica', rot: 'V · Left Pin, Right Pin', t: 'A postcard from Tim. One word decides which pin you mean.', p: 'Read the postcard out loud. Tap from and live. Then finish the rule.' },
  { k: 'perg', est: 'f', min: 6, img: 'cidade-nova', rot: 'VI · Which Question?', t: 'Six answers. Which question came first?', p: 'Read the answer out loud. Say the question. Then tap Check.' },
  { k: 'casa', est: 'l', min: 7, img: 'cidade-nova', rot: 'VII · Home and People', t: 'Inside the right pin: what kind of home, and who with?', p: 'Play the short lines and say each one. Then play a person and tap their home.' },
  { k: 'cartao', est: 'o', min: 7, extra: 1, img: 'cidade-nova', rot: 'VIII · The Landing Card', t: 'You land in a new country.', p: 'Read the officer’s question. Answer in a full sentence. Then tap Check: the line fills.' },
  { k: 'nasci', est: 'f', min: 6, extra: 1, img: 'cidade-velha', rot: 'IX · A Third Pin', t: 'Some people have three pins.', p: 'Read the story. One word is wrong in each line. Say the right one. Then tap Check.' },
  { k: 'povo', est: 'o', min: 7, extra: 1, img: 'cortica', rot: 'X · Your People', t: 'Your family and friends on the board.', p: 'Build each question out loud. Tap Check. Then ask your teacher.' },
  { k: 'fim', est: 'w', min: 6, img: 'cortica', rot: 'XI · Your Line, Again', t: 'Write your pins.', p: 'Born, from, live, home, who with. The red line watches from and in. It goes to your My notes.' }
];

var TR = {
  'p-tim.mp3': 'Hi, I’m Tim. I’m from Oxford. I live in a house in London with my housemates.',
  'p-sian.mp3': 'I’m from Swansea. I live in a house in Brighton with my family.',
  'p-buli.mp3': 'I’m from Beijing. I live in a flat in Cambridge. I live on my own.',
  'p-georgie.mp3': 'I’m from Petworth. I live in a flat in London with my flatmates.',
  'v-from.mp3': 'Hello, I’m Tim. I’m from Oxford and I live in London. — I’m Sian. I’m from Swansea. I live in Brighton now. — My name is Buli. I’m from Beijing. — I’m Georgie and I’m from Petworth.',
  'a-house.mp3': 'I live in a house.', 'a-flat.mp3': 'I live in a flat.', 'a-family.mp3': 'I live with my family.', 'a-own.mp3': 'I live on my own.', 'a-mates.mp3': 'I live with my flatmates.'
};

/* I · as três perguntas do quadro: fala primeiro, o Check mostra um exemplo e os alfinetes aparecem */
var ABRE = [
  { pista: '<span class="ano">The left pin</span>Where are you from?', resp: 'For example: <b>I’m from</b> Denver. It’s a big city.', depois: 'Is it a big city or a small town?' },
  { pista: '<span class="ano">The right pin</span>Where do you live now?', resp: 'For example: <b>I live in</b> Chicago now. I like it.', depois: 'Is it nice there?' },
  { pista: '<span class="ano">The string</span>Say both pins in one line.', resp: 'For example: <b>I’m from</b> Denver, and <b>I live in</b> Chicago.', depois: 'Same city or two cities?' }
];

var GENTE = [
  { n: 'TIM', de: 'Oxford', em: 'London', au: 'p-tim.mp3', casa: 2 },
  { n: 'SIAN', de: 'Swansea', em: 'Brighton', au: 'p-sian.mp3', casa: 0 },
  { n: 'BULI', de: 'Beijing', em: 'Cambridge', au: 'p-buli.mp3', casa: 1 },
  { n: 'GEORGIE', de: 'Petworth', em: 'London', au: 'p-georgie.mp3', casa: 3 }
];
/* II · ouvir cada pessoa e ligar o nome aos dois alfinetes */
var GENTE_LIGA = { formato: 'liga', titulo: 'Match each person to their two pins.', pares: GENTE.map(function (g) { return [g.n, g.de + ' → ' + g.em]; }), ordemDireita: [2, 0, 3, 1] };

/* III · os seis lugares do v-from: cidade velha ou cidade de agora */
var LUG = { formato: 'separa', titulo: 'Tap a city, then its box.', itens: [
  { t: 'Beijing', c: 0 }, { t: 'London', c: 1 }, { t: 'Oxford', c: 0 }, { t: 'Brighton', c: 1 }, { t: 'Petworth', c: 0 }, { t: 'Swansea', c: 0 }
], caixas: ['THE OLD CITY · I’m from …', 'THE CITY NOW · I live in …'] };

/* IV · o cartão-postal do Tim (texto nosso) → a regra */
var CARTA = { de: 'POSTCARD · TO YOU · FROM TIM',
  txt: 'Hi! I’m Tim. I’m [[from]] Oxford, but I [[live in]] London now. My friend Sian is [[from]] Swansea. She [[lives in]] Brighton. And you? Where are you [[from]]? Where do you [[live]]?', assina: 'Tim' };
var REGRA = [
  { a: 'The old city, the left pin: I’m ', par: ['from', 'in'], c: 0, b: ' Oxford.' },
  { a: 'The city now, the right pin: I live ', par: ['in', 'from'], c: 0, b: ' London.' },
  { a: 'Ask about the old city: Where ', par: ['are you from?', 'do you from?'], c: 0 },
  { a: 'Ask about the city now: Where ', par: ['do you live?', 'are you live?'], c: 0 },
  { a: 'With he / she, live gets an S: She ', par: ['lives', 'live'], c: 0, b: ' in Brighton.' }
];
var PRESA = 'I’m <b>from</b> Oxford · the old city<br>I live <b>in</b> London · the city now<br>Where <b>are</b> you <b>from</b>?<br>Where <b>do</b> you <b>live</b>?<br>she live<b>s</b> · I was <b>born in</b>';

/* V · a resposta → o aluno diz a pergunta */
var PERG = [
  { pista: '“I’m from Mexico.”', resp: 'Where <b>are</b> you <b>from</b>?', depois: 'Now you: where are you from?' },
  { pista: '“In a small town near Paris.”', resp: 'Where <b>do</b> you <b>live</b>?', depois: 'Now you: where do you live?' },
  { pista: '“I live in Tokyo now.”', resp: 'Where <b>do</b> you <b>live</b>?', depois: 'Is your city big or small?' },
  { pista: '“Originally from Ghana.”', resp: 'Where <b>are</b> you <b>from</b>?', depois: 'Where is your family from?' },
  { pista: '“Near the station.”', resp: 'Where <b>do</b> you <b>live</b>?', depois: 'Is your house big or small?' },
  { pista: '“She’s from Brazil, but she lives in Rome.”', resp: 'Where <b>is</b> she <b>from</b>, and where <b>does</b> she <b>live</b>?', depois: 'Where is your best friend from?' }
];

var CASAS = [
  { casa: 'a house', com: 'with my family', ic: '🏠' },
  { casa: 'an apartment', com: 'on my own', ic: '🏢', br: 'a flat' },
  { casa: 'a house', com: 'with my housemates', ic: '🏠' },
  { casa: 'an apartment', com: 'with my roommates', ic: '🏢', br: 'a flat · flatmates' }
];
var CURTAS = ['a-house.mp3', 'a-flat.mp3', 'a-family.mp3', 'a-own.mp3', 'a-mates.mp3'];
var DCASA = ['Tim: a house, with his housemates.', 'Sian: a house, with her family.', 'Buli: a flat (an apartment), on his own.', 'Georgie: a flat (an apartment), with her flatmates (roommates).'];

/* VII · o cartão de pouso: o oficial pergunta, o aluno responde e confere; cada Check preenche uma linha */
var CARTAO = [
  { k: 'NAME', pista: '<span class="ano">Officer</span>“Good morning! What’s your name?”<br><small style="font-size:.55em;color:var(--t2)">Say it with: My name’s …</small>', resp: 'For example: <b>My name’s</b> Ana.' },
  { k: 'FROM', pista: '<span class="ano">Officer</span>“Where are you from?”<br><small style="font-size:.55em;color:var(--t2)">Say it with: I’m from …</small>', resp: 'For example: <b>I’m from</b> Mexico.' },
  { k: 'BORN', pista: '<span class="ano">Officer</span>“Were you born there too?”<br><small style="font-size:.55em;color:var(--t2)">Say it with: Yes, I was born in … / No, I was born in …</small>', resp: 'For example: Yes, <b>I was born in</b> Mexico City.' },
  { k: 'LIVE', pista: '<span class="ano">Officer</span>“And where do you live now?”<br><small style="font-size:.55em;color:var(--t2)">Say it with: I live in …</small>', resp: 'For example: <b>I live in</b> Chicago now.' },
  { k: 'HOME', pista: '<span class="ano">Officer</span>“Do you live in a house or an apartment?”<br><small style="font-size:.55em;color:var(--t2)">Say it with: I live in a …</small>', resp: 'For example: <b>I live in</b> an apartment.' },
  { k: 'WITH', pista: '<span class="ano">Officer</span>“Who do you live with?”<br><small style="font-size:.55em;color:var(--t2)">Say it with: I live with … / on my own.</small>', resp: 'For example: <b>I live with</b> my family. · <b>I live on my own.</b>' }
];

/* VIII · Ana e Omar: a palavra errada */
var NASCI_FATOS = ['ANA · born in Lisbon · from Porto · lives in Berlin', 'OMAR · born in Cairo · lives in Dubai'];
var NASCI = [
  { f: 'Ana <u>is born</u> in Lisbon.', r: 'was born' },
  { f: 'Ana <u>lives from</u> Porto. It is her home.', r: 'is from' },
  { f: 'Ana lives <u>at</u> Berlin.', r: 'in' },
  { f: 'Omar <u>born</u> in Cairo.', r: 'was born' },
  { f: 'Omar <u>live</u> in Dubai.', r: 'lives' }
];

/* IX · monte a pergunta e entreviste o professor */
var POVO = [
  { p: '(where · your mother · from)?', r: 'Where <b>is</b> your mother <b>from</b>?' },
  { p: '(where · your best friend · live)?', r: 'Where <b>does</b> your best friend <b>live</b>?' },
  { p: '(where · you · born)?', r: 'Where <b>were</b> you <b>born</b>?' },
  { p: '(who · you · live with)?', r: 'Who <b>do</b> you live <b>with</b>?' },
  { p: '(you · live · in a house or an apartment)?', r: '<b>Do</b> you live in a house or an apartment?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {} };

/* o quadro: dois alfinetes e o fio */
function quadro(de, em, cls, legenda) {
  var fio = de && em;
  return '<div class="quadro' + (cls ? ' ' + cls : '') + '" style="background-image:url(' + img('cortica') + ')"><svg viewBox="0 0 400 170" role="img" aria-label="Two pins">'
    + (fio ? '<path d="M78 70 Q200 120 322 70" class="fio"/>' : '')
    + '<g class="pin de' + (de ? '' : ' vazio') + '"><circle cx="78" cy="62" r="13"/><line x1="78" y1="75" x2="78" y2="90"/></g>'
    + '<g class="pin em' + (em ? '' : ' vazio') + '"><circle cx="322" cy="62" r="13"/><line x1="322" y1="75" x2="322" y2="90"/></g>'
    + '<text x="78" y="118" class="cid">' + (de || '?') + '</text><text x="322" y="118" class="cid">' + (em || '?') + '</text>'
    + '<text x="78" y="140" class="verbo de">am from</text><text x="322" y="140" class="verbo em">live in</text>'
    + (legenda ? '<text x="200" y="28" class="leg">' + legenda + '</text>' : '') + '</svg></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>Two <b>Pins</b></h1>'
    + '<p class="sub">Everybody has two cities: the old city and the city now. The string between them is the sentence.</p>'
    + '<div class="chipsx"><span class="pilula">I’m from</span><span class="pilula">I live in</span><span class="pilula">I was born in</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Put in the first pin</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-q">' + quadro('the old city', 'the city now', 'grande') + '</div></div>';
};

/* I · os alfinetes entram no quadro conforme o aluno confere cada pergunta */
R.abre = function (c) {
  return cab(c) + FM.fala('abre', ABRE, {
    rotulo: 'Pin', prox: 'Next', diga: 'Say your answer out loud first',
    lado: function (feitas) { return '<div class="vd q-box mini" style="max-width:520px;margin:0 auto">' + quadro(feitas >= 1 ? 'the old city' : '', feitas >= 2 ? 'the city now' : '', '', feitas >= 3 ? 'YOUR TWO PINS' : '') + '</div>'; },
    fim: 'Two pins and a string. Say them all again, without looking.'
  });
};

/* II · ouvir as quatro pessoas e ligar cada nome aos dois alfinetes; o quadro se enche */
R.gente = function (c) {
  var e = (S.fq && S.fq.gente) || { par: {} }, feitos = GENTE.filter(function (g, i) { return e.par && e.par[i] === i; }).length, todos = feitos === GENTE.length;
  var players = '<div class="pn-players">' + GENTE.map(function (g) { return '<div class="toca-linha vd mini">' + tocar(g.au) + '<div><b>' + g.n + '</b>' + (todos ? transcricao(g.au, TR[g.au]) : '') + '</div></div>'; }).join('') + '</div>';
  var quadros = '<div class="pn-quatro">' + GENTE.map(function (g, i) { var ok = e.par && e.par[i] === i; return '<div class="vd q-box mini">' + quadro(ok ? g.de : '', ok ? g.em : '', 'mini', g.n) + '</div>'; }).join('') + '</div>';
  return cab(c) + '<div class="pn-duas">' + players + '<div>' + FM.ex('gente', GENTE_LIGA) + '</div></div>' + quadros
    + (todos ? follow('ABOUT THE BOARD', 'Who is from Beijing? Who lives in London? (Two people.)', ['… is from …', '… and … live in …'], [], 'gente', mostra('gente', 'Buli is from Beijing. Tim and Georgie live in London.')) : '');
};

/* III · os seis lugares: ouvir e separar em duas caixas */
R.lugares = function (c) {
  var e = (S.fq && S.fq.lug && S.fq.lug.em) || {}, certos = LUG.itens.filter(function (x, i) { return e[i] === x.c; }).length;
  return cab(c) + '<div class="mesa-lista"><div class="foto-l vd" style="background-image:url(' + img('cidade-velha') + ')"><span>THE OLD CITIES</span></div><div class="lado-l"><div class="toca-linha vd">' + tocar('v-from.mp3') + '<span>Where are you from?</span></div>'
    + FM.ex('lug', LUG)
    + (certos === LUG.itens.length ? '<p class="aprova">Four old cities: Oxford, Swansea, Beijing, Petworth. Two cities now: London and Brighton. Say two of them: “… is from … He / She lives in …”</p>' : '')
    + transcricao('v-from.mp3', TR['v-from.mp3']) + '</div></div>';
};

/* IV · o cartão-postal do Tim → a regra */
R.regra = function (c) {
  return cab(c) + FM.carta('postal', CARTA, REGRA, { toque: 'Tap from and live', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

/* V · a resposta: dizer a pergunta */
R.perg = function (c) {
  return cab(c) + FM.fala('perg', PERG, { rotulo: 'Answer', prox: 'Next answer', regra: PRESA, diga: 'Say the question first',
    fim: 'Two questions that sound alike, and never ask the same thing.' });
};

/* VI · ouvir cada pessoa e escolher a casa */
R.casa = function (c) {
  var curtas = '<div class="curtas">' + CURTAS.map(function (au) { return '<div class="toca-linha vd mini">' + tocar(au) + '<div>' + transcricao(au, TR[au]) + '</div></div>'; }).join('') + '</div>';
  var e = (S.fq && S.fq.casa && S.fq.casa.r) || {}, todos = GENTE.every(function (g, i) { return e[i] === g.casa; });
  var ESC = { formato: 'escolhe', titulo: 'Play each person. What kind of home, and who with?', itens: GENTE.map(function (g, i) {
    return { p: tocar(g.au) + ' <b>' + g.n + '</b>', o: CASAS.map(function (k) { return k.ic + ' ' + k.casa + ' · ' + k.com; }), c: g.casa, d: DCASA[i] };
  }) };
  return cab(c) + '<div class="mesa-casa"><div class="lado-l">' + curtas + '<p class="nota-br">They say <b>flat</b> and <b>flatmates</b>: British English. In American English: <b>apartment</b>, <b>roommates</b>.</p></div><div class="lado-l">' + FM.ex('casa', ESC)
    + (todos ? follow('AND YOU?', 'A house or an apartment? Who do you live with?', ['I live in a …', 'I live with … / on my own.'], [], 'casa') : '') + '</div></div>';
};

/* VII · o cartão de pouso: cada Check preenche uma linha */
R.cartao = function (c) {
  return cab(c) + FM.fala('cartao', CARTAO, {
    rotulo: 'Question', prox: 'Next question', diga: 'Answer in a full sentence first',
    lado: function (feitas) {
      var fim = feitas >= CARTAO.length;
      return '<div class="cartao vd" style="max-width:520px;margin:0 auto"><div class="topo-c"><b>LANDING CARD</b><small>WELCOME · PLEASE WRITE CLEARLY</small></div>' + CARTAO.map(function (k, i) { return '<div class="linha-c' + (i < feitas ? ' feito' : '') + (i === feitas ? ' agora' : '') + '"><small>' + k.k + '</small><span>' + (i < feitas ? '✓' : '') + '</span></div>'; }).join('') + (fim ? '<div class="carimbo">WELCOME</div>' : '') + '</div>';
    },
    fim: 'Stamped. Welcome! Now you are the officer: ask your teacher the six questions.'
  });
};

/* VIII · Ana e Omar: a palavra errada */
R.nasci = function (c) {
  var ver = !!(S.fq && S.fq.nasci && S.fq.nasci.ver);
  return cab(c) + '<div style="width:min(980px,100%);margin:0 auto 14px"><div class="fatos vd"><small>THREE PINS</small>' + NASCI_FATOS.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div></div>'
    + FM.erro('nasci', NASCI, { titulo: 'One word is wrong. Say the right one.', regra: PRESA })
    + (ver ? follow('NOW YOU', 'Say your three pins.', ['I was born in …', 'I’m from …', 'I live in …'], [], 'nasci') : '');
};

/* IX · monte a pergunta e entreviste o professor */
R.povo = function (c) {
  return cab(c) + FM.pergunta('povo', POVO, { titulo: 'Build the question. Ask your teacher.', regra: PRESA, depoisRot: 'Then say', depois: ['Me too!', 'I’m from … and you?', 'I live … and you?'] });
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I was born in …\nI’m from …\nI live in …', 'Your pins',
    ['I was born in ', 'I’m from ', 'I live in ', 'I live in an apartment ', 'with my family', 'on my own'], ['YOUR LINE, AGAIN', 'Born, from, live, home, who with.'])
    + '<div class="lado-fim">' + quadro('am from', 'live in', 'mini') + '<div class="grande vd"><span>the old city: <u>I’m from</u></span><span>the city now: <u>I live in</u></span><span>a third pin: <u>I was born in</u></span><span>alone: <u>on my own</u></span></div>'
    + mostra('fim', 'I was born in Denver, and I’m from Denver.<br>I live in Chicago now.<br>I live in an apartment, on my own.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'Two pins on the board. Which one is it?',
  a: { t: 'The left pin', falas: [['Teacher', 'Where are you from?'], ['You', 'I<mark>’m from</mark> Denver.']], d: 'The left pin is the old city. You start there. That is <b>I’m from</b>.' },
  b: { t: 'The right pin', falas: [['Teacher', 'Where do you live now?'], ['You', 'I <mark>live in</mark> Chicago.']], d: 'The right pin is the city now. You are there today. That is <b>I live in</b>.' },
  pergunta: 'Two questions, two pins. What is different?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'Tim grew up in Oxford. Where is he from?', o: ['He’s from Oxford.', 'He lives in Oxford.'], c: 0, d: 'The left pin: the old city.' },
    { p: 'Tim has an apartment in London now. Where does he live?', o: ['He lives in London.', 'He’s from London.'], c: 0, d: 'The right pin: the city now.' },
    { p: 'Sian grew up in Swansea. She says:', o: ['I’m from Swansea.', 'I live in Swansea.'], c: 0, d: 'Where you started: from.' },
    { p: 'Buli has an apartment in Cambridge today. He says:', o: ['I live in Cambridge.', 'I’m from Cambridge.'], c: 0, d: 'Where you are today: live in.' }
  ],
  nota: 'Left pin: <b>I’m from</b> + the old city. Right pin: <b>I live in</b> + the city now. It can be the same city: I’m from Denver, and I live in Denver.',
  uso: { p: 'Your turn. Say both of your pins: where you are from, and where you live now.', molde: ['I’m from …', 'I live in …'], ex: 'I’m from Recife. I live in São Paulo now.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_pins', GX_EXPLICA); };
