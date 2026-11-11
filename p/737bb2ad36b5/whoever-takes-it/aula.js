/* ============================================================
   THE LORD OF THE RINGS · THE BEARERS · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · whoever / whatever / wherever / whenever / however
   (qualquer um que, o que quer que, onde quer que, sempre que, por mais
   que): whoever takes it will be changed; however strong you are, it
   wins.
   Erros: who ever / what ever separados, whoever + verbo sem -s
   (whoever take it), anyone who no lugar certo misturado (whoever who),
   however + verbo (however you try → however hard you try), whatever +
   will no lado do quando (whatever you will do), wherever com will,
   whomever exagerado no lugar de whoever sujeito.
   Catálogo WOLFLIX Live (07/10): família FANTASIA, modo JORNADA NO MAPA.
   A tela forte: o caminho do Anel no mapa. Um mapa de pergaminho escuro
   com oito paradas, do fogo onde nasceu até o fogo onde termina; cada
   frase certa leva o anel dourado à parada seguinte, desenha o caminho
   tracejado e escreve o nome de quem o carregou. A 299 (o mesmo filme)
   era a mesa do Conselho; esta é a viagem.
   O AQUECIMENTO (aquece.js): a imagem, o mapa na mesa. O FECHAMENTO
   (final.js): a entrevista, o professor é o Bilbo.
   O VÍDEO: UXgbHdnoJrg (abertura oficial Warner Bros., usamos 0:00–3:56,
   idade 0, embed sim). Batalha antiga sem sangue. Tempos conferidos na
   aula antiga (24/09).
   A CARA: pergaminho na noite, ouro do Anel, vermelho do fogo; Cinzel
   Decorative no título, Crimson Text no texto, Uncial Antiqua só nos
   nomes do mapa.
   Fila: FILA-LIVE-386.md · 314.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: uma roleta de conversa; a palavra que você ouviu e o que ele
   diz, com ▶ nas falas do prólogo (legenda-dados.js); duas opiniões de toque;
   V: ligar cada -ever ao seu sentido (a regra aparece quando as cinco estão
   certas); VI: o caminho do Anel (verdadeiro ou mentira, e a frase certa
   falada; seis mãos, o Anel anda a cada acerto); VII (era EXTRA): cartas que
   viram + um cronômetro de trinta segundos.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'rio', rot: 'I · Warm-up and Pick a Side', t: 'Before the trailer: what you never let go, then one Ring.', p: 'Answer three questions about your life. Then decide what to do with the Ring and defend it.' },
  { k: 'palavras', est: 'l', img: 'caverna', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'caverna', rot: 'III · The Prologue', t: 'The Lord of the Rings. How it began.', p: 'Spin the wheel. Watch the prologue. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'rio', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'caverna', rot: 'V · Find the Rule', t: 'Four sentences about the Ring. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'caverna', rot: 'VI · Whoever Takes It', t: 'Whoever, whatever, wherever. What do they mean?', p: 'Match each word to its meaning. When all five are right, the rule appears.' },
  { k: 'mapa', est: 'o', min: 7, img: 'capa', rot: 'VII · The Bearers', t: 'Six hands, one Ring. Every right answer carries it one stop.', p: 'Is the sentence true or a lie? If it is a lie, say the true one out loud.' },
  { k: 'quemquer', est: 'o', min: 7, img: 'rio', rot: 'VIII · Whatever You Say', t: 'Six questions with -ever.', p: 'Open a card, then start the clock and answer for 30 seconds without stopping.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Interview', t: 'The interview.', p: 'Interview.' }
];

var FILME = 'The Lord of the Rings', ANO = '2001';
var YT = 'UXgbHdnoJrg', DUR = 236;

var ENCARTE = [
  ['The film', '<i>The Lord of the Rings: The Fellowship of the Ring</i> (2001), Peter Jackson, from Tolkien’s books.'],
  ['The Ring', 'The Dark Lord made one Ring to rule all the others, and put his cruelty into it. Whoever holds it wants to keep it; it changes them.'],
  ['The hands', 'It passed from Sauron to Isildur, to a river, to a creature called Gollum, to a hobbit named Bilbo, and then to Frodo, who must take it back to the fire where it was made.']
];

var ANTES = [
  { q: 'Have you ever found something valuable? What did you do with it?', h: 'Yes, I found … I …' },
  { q: 'Is there an object in your family that passes from hand to hand?', h: 'Yes, my grandmother’s … / No, but …' }
];
var DEPOIS = [
  { q: 'What happens to whoever keeps the Ring?', h: 'Whoever keeps it …' },
  { q: 'Why didn’t Isildur destroy it, whatever the cost?', h: 'Because the Ring …' }
];

var TRECHOS = [
  { k: 'The forging', ini: 10, fim: 32, ouvir: 'Who got the first rings?', sentido: 'It began when the great rings were made. Three were given to the Elves, the wisest and fairest of all.', gram: '<b>Whoever</b> wore one <b>became</b> powerful.' },
  { k: 'Desire for power', ini: 32, fim: 47, ouvir: 'What do Men want above all else?', sentido: 'Nine rings went to Men, who above all else want power.', gram: 'They wanted <b>whatever</b> gave them power.' },
  { k: 'Deceived', ini: 47, fim: 84, ouvir: 'Who made the One Ring?', sentido: 'They were all tricked. In secret, the Dark Lord made one master Ring to rule them all.', gram: '<b>Wherever</b> it went, evil followed.' },
  { k: 'They resisted', ini: 84, fim: 180, ouvir: 'Who fought back?', sentido: 'Some resisted. Men and Elves fought together on the slopes of the fire mountain. (An old battle, no blood.)', gram: '<b>However</b> strong he was, they fought.' },
  { k: 'A will of its own', ini: 215, fim: 236, ouvir: 'What did Isildur do with his one chance?', sentido: 'The Ring passed to Isildur, who had one chance to destroy it. But the hearts of Men are easily corrupted, and the Ring has a will of its own.', gram: '<b>Whenever</b> he looked at it, he wanted it more.' }
];

var TRAPS = [
  ['One word', 'Who ever takes it will be changed.', '<b>Whoever</b> takes it will be changed.', 'whoever · whatever · wherever · whenever · however'],
  ['Whoever + -s', 'Whoever take the Ring wants to keep it.', 'Whoever <b>takes</b> the Ring <b>wants</b> to keep it.', 'whoever = he / she: verb + s'],
  ['However + adjective', 'However you are strong, it wins.', '<b>However strong</b> you are, it wins.', 'however + adjective / adverb + subject + verb'],
  ['No will after -ever', 'Wherever you will go, I will go.', 'Wherever you <b>go</b>, I will go.', '-ever + present for the future']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>Whoever</b> takes it <b>wants</b> to keep it · one word, verb + s<br><b>Whatever</b> he did · <b>Whenever</b> he touched it<br><b>Wherever</b> you go, I will go · present for the future<br><b>However hard</b> he tries · however + adjective first';
/* III · antes: uma roleta de conversa */
var VD_ROLETA = { formato: 'sorteio', titulo: 'Before you watch · spin the wheel', opcoes: [
  'You find a gold ring on the street. What do you do with it?', 'What is the most valuable thing you own?', 'Who in your family keeps old objects? What do they keep?',
  'Would you wear a ring that makes you invisible? Why?', 'What would you never give away?', 'If you were invisible for a day, where would you go?'
], botao: 'Spin' };
/* III · durante: a palavra que você ouviu e o que ele diz, cada um no minuto do prólogo (legenda-dados.js) */
var VD_SOM = { formato: 'som', itens: [
  { a: 'Three were given to the ', par: ['Elves', 'elbows'], c: 0, b: '.', t: '0:17' },
  { a: 'Men, who above all else, desire ', par: ['power', 'flower'], c: 0, b: '.', t: '0:33' },
  { a: 'One ring to ', par: ['rule', 'roll'], c: 0, b: ' them all.', t: '1:15' }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'What does he say? Tap one.', itens: [
  { p: 'Who got the nine rings?', o: ['Men', 'Elves', 'Dwarfs'], c: 0, tm: '0:33', d: 'Yes: nine rings were gifted to the race of men.' },
  { p: 'What did Sauron pour into the master ring?', o: ['His cruelty and his will', 'Water from the river', 'Gold from the mountain'], c: 0, tm: '1:05', d: 'Yes: his cruelty, his malice and his will to dominate all life.' },
  { p: 'What is the last thing the voice says about the Ring?', o: ['It has a will of its own', 'It was destroyed', 'It was lost at sea'], c: 0, tm: '3:51', d: 'Yes: “the Ring of Power has a will of its own.”' }
] };
/* III · depois: duas opiniões de toque */
var VD_OP = { formato: 'escolhe', titulo: 'What do you think? Tap one, then say why.', itens: [
  { p: 'What would you do with the Ring, whatever the cost?', o: ['Destroy it', 'Keep it safe', 'Give it to someone wise'], c: -1, d: 'Say: Whatever it costs, I would … / However hard it is, I would …' },
  { p: 'Who is stronger?', o: ['Whoever holds the Ring', 'The Ring itself', 'Nobody'], c: -1, d: 'Say why: Whoever … / Wherever it goes, …' }
] };
/* V · ligar cada -ever ao seu sentido */
var LIGA = { formato: 'liga', titulo: 'What does it mean? Match them.', ordemDireita: [2, 4, 0, 3, 1], pares: [
  ['whoever', 'any person who'], ['whatever', 'any thing that'], ['wherever', 'in any place that'], ['whenever', 'every time that'], ['however hard', 'no matter how hard']
] };
/* VI · o caminho do Anel: verdadeiro ou mentira, e a frase certa falada (seis mãos) */
var PARADAS = [
  { quem: 'Sauron', x: 352, y: 196 }, { quem: 'Isildur', x: 300, y: 150 }, { quem: 'Gollum', x: 214, y: 112 },
  { quem: 'Bilbo', x: 120, y: 92 }, { quem: 'Frodo', x: 84, y: 150 }, { quem: 'The fire', x: 340, y: 232 }
];
var CAMINHO = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the true sentence out loud.', itens: [
  { f: 'Sauron · Whoever wears the Ring rules the others.', t: true },
  { f: 'Isildur · Whatever he did, the Ring stay with him.', t: false, c: 'Whatever he did, the Ring <b>stayed</b> with him.' },
  { f: 'Gollum · Whenever he touched it, he felt stronger.', t: true },
  { f: 'Bilbo · However he tries hard, he can’t let it go.', t: false, c: '<b>However hard</b> he tries, he can’t let it go.' },
  { f: 'Frodo · Wherever Frodo will go, the Ring goes too.', t: false, c: 'Wherever Frodo <b>goes</b>, the Ring goes too.' },
  { f: 'The fire · Whatever it costs, it must be destroyed.', t: true }
] };
/* VII · cartas que viram + um cronômetro */
var VG_CARTAS = { formato: 'cartas', titulo: 'Open a card · answer with -ever', fechada: 'Tap to open', cartas: [
  ['Food', 'Whatever you cook, what do you always add?'], ['Travel', 'Wherever you travel, what do you always buy?'], ['Stress', 'Whenever you feel stressed, what helps?'],
  ['Your door', 'Whoever knocks at your door at midnight, will you open it?'], ['Effort', 'However hard you try, what can’t you learn?'], ['A gift', 'Whatever anyone gives you, how do you react?']
] };
var VG_CRONO = { formato: 'cronometro', titulo: 'Just a minute · -ever', segundos: 30, texto: 'Pick one card. Answer for 30 seconds without stopping. Start with Whenever… or Wherever…' };

/* o caminho do Anel: o gesto forte */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, an: { n: 0, esc: -1 } };

/* a linha do vídeo: cada momento do prólogo é um fotograma, com a minutagem e o nome da cena */
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
  return '<div class="an-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o mapa: montanhas e rio desenhados, oito paradas; o caminho percorrido tracejado, o Anel na última parada */
function mapa(feitas, atual, nova) {
  var fim = feitas >= PARADAS.length;
  var pts = PARADAS.slice(0, Math.max(feitas, 1)).map(function (p) { return p.x + ',' + p.y; }).join(' ');
  var ps = PARADAS.map(function (p, i) {
    var cls = i < feitas ? ' foi' : (i === atual ? ' vez' : '');
    return '<g class="an-p' + cls + '"><circle cx="' + p.x + '" cy="' + p.y + '" r="5"/>' + (i < feitas || i === atual ? '<text x="' + p.x + '" y="' + (p.y - 10) + '" text-anchor="middle">' + p.quem + '</text>' : '') + '</g>';
  }).join('');
  var a = feitas ? PARADAS[feitas - 1] : PARADAS[0];
  return '<div class="an-perg vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The Ring’s road: ' + feitas + ' of ' + PARADAS.length + ' stops">'
    + '<svg class="an-svg" viewBox="40 60 360 200" aria-hidden="true">'
    + '<g class="an-montes"><path d="M60 120 l14-22 l14 22 M84 118 l12-18 l12 18 M300 110 l16-26 l16 26 M326 112 l12-20 l12 20 M330 212 l18-30 l18 30"/></g>'
    + '<path class="an-rioc" d="M180 70 C200 110 230 140 240 180 S250 240 260 260"/>'
    + '<path class="an-mata" d="M140 196 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0"/>'
    + (feitas > 1 ? '<polyline class="an-cam" points="' + pts + '"/>' : '') + ps
    + (feitas ? '<g class="an-anel' + (nova ? ' vai' : '') + '"><circle cx="' + a.x + '" cy="' + a.y + '" r="8"/></g>' : '')
    + (fim ? '<circle class="an-fogo" cx="340" cy="232" r="16"/>' : '') + '</svg>'
    + '<p class="an-legenda">' + (fim ? 'Back to the fire where it was made.' : feitas ? 'Now the Ring is with ' + a.quem + '.' : 'Six hands. One Ring.') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · whoever, whatever, wherever, whenever, however</span><h1>Whoever Takes It</h1>'
    + '<p class="banda">' + FILME + ' · The Fellowship of the Ring</p>'
    + '<p class="sub">Whoever takes it wants to keep it. Wherever it goes, evil follows. Tonight you carry the One Ring across the map, from hand to hand, from the fire where it was made to the fire where it must end.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Unroll the map</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r an-foto"><img src="' + img('capa') + '" alt="An old ink map on a dark table by candlelight, with a gold ring on it"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="an-encarte vd"><div class="an-capinha"><img src="' + img('rio') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The Great River</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="an-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Whoever holds the Ring changes. Would you take it?</h2></div>' + mostra('enc', 'No. Whoever takes it wants to keep it, and I would want to keep it too.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vr', VD_ROLETA) + '</div>'
    + '<div class="lado-l"><div class="an-selo vd"><b>' + FILME + '</b><small>the opening of the film · an old battle, no blood · about four minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the prologue now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="an-video"><div class="an-vcol">' + iframe(YT, FILME + ' · prologue', '&start=0&end=236') + '<small class="an-cred">' + FILME + ' · the prologue (Warner Bros.) · it stops at 3:56 · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vs', VD_SOM) + FM.ex('ve', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the prologue</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vo', VD_OP) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="an-video"><div class="an-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="an-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="an-sentido">' + x.sentido + '</span><span class="an-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="an-centro"><p class="an-dica">Tap a frame to open that moment of the prologue.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).lig, ok = !!e && !!e.par;
  LIGA.pares.forEach(function (p, i) { if (!e || !e.par || e.par[i] !== i) ok = false; });
  return cab(c) + '<div class="an-centro">' + FM.ex('lig', LIGA)
    + (ok ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Match all five. Then the rule appears.</p>') + '</div>';
};

R.mapa = function (c) {
  var e = (S.fq || {}).mp, r = (e && e.r) || {}, feitas = 0;
  CAMINHO.itens.forEach(function (x, i) { if (r[i] != null && (r[i] === 't') === !!x.t) feitas++; });
  return cab(c) + comPlaca('<div class="fm-obj">' + mapa(feitas, feitas < PARADAS.length ? feitas : -1, 0) + '</div>' + FM.ex('mp', CAMINHO)
    + '<p class="fm-nota" style="text-align:center">' + (feitas >= PARADAS.length ? 'The Ring is back in the fire. Now tell the road in three lines with -ever.' : 'Each right answer carries the Ring to the next hand.') + '</p>', PRESA);
};

R.quemquer = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('qc', VG_CARTAS) + '</div><div class="lado-l">' + FM.ex('qr', VG_CRONO) + '</div></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="an-centro"><p class="an-dica">The interview.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'imagem', img: 'capa', alt: 'An old ink map on a dark table by candlelight, with a gold ring on it', rotulo: 'The map', rot: 'I · The Map', t: 'Before the film: a map, and a ring.', p: 'One question at a time. The student answers; then the teacher answers too.',
  itens: [
    { q: 'You find this ring on an old map. What do you do with it?', ex: 'I put it on! Whatever happens, happens.' },
    { q: 'Wherever you go on a trip, what do you always take with you?', ex: 'My headphones, wherever I go.' },
    { q: 'Whenever you find something, do you keep it or give it back?', ex: 'I give it back, whatever it is.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'entrevista', rot: 'VIII · The Interview', t: 'Interview Bilbo, who kept the Ring for sixty years.', p: 'The teacher is Bilbo Baggins. Ask about the Ring with whoever, whatever, wherever, whenever, however. Then swap: you are Frodo.',
  papel: 'Bilbo Baggins, who kept the Ring', papel2: 'you, Frodo, the next bearer',
  itens: [
    { q: 'Whenever you held the Ring, how did you feel?', ex: 'Whenever I held it, I felt younger, and a little afraid.' },
    { q: 'However hard you tried, why couldn’t you give it away?', ex: 'However hard I tried, my hand wouldn’t open.' },
    { q: 'Wherever you went, did the Ring go with you?', ex: 'Wherever I went, it was in my pocket.' },
    { q: 'Whoever takes it next, what is your advice?', ex: 'Whoever takes it, never put it on.' },
    { q: 'Whatever happens, will you miss it?', ex: 'Whatever happens, yes. And that is the problem.' }
  ] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four sentences about the Ring. Find the rule yourself.',
  exemplos: [
    'The Ring changes <b>whoever</b> carries it.',
    'Sam follows Frodo <b>wherever</b> he goes.',
    '<b>Whatever</b> you choose, the road will be hard.',
    '<b>Whenever</b> the Ring is near, Frodo feels afraid.'
  ],
  pergunta: 'A word with -ever means …',
  opcoes: ['it does not matter which person, thing, place or time', 'one special person, thing, place or time', 'a question that is not finished'], c: 0,
  nao: 'Not that one. Read the four lit words again: does the sentence choose one person, or any person?',
  regra: '<b>who / what / where / when + -ever</b> = it does not matter which. Whoever carries it is changed. After whoever, the verb agrees: whoever <b>takes</b> it.',
  uso: { p: 'Your turn. Two sentences with -ever about your life.', molde: ['I’ll help whoever …', 'I eat whatever …'], ex: 'I’ll help whoever asks me. I eat whatever my mother cooks.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_ever', GX_EXPLICA); };
