/* ============================================================
   SUPERMAN & LOIS · THE KENT FRIDGE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A1 · like / love / hate + -ing (e + coisa); he / she likes;
   doesn't like; Do you like…? / Does he like…?
   Erros: sem -s (Jonathan love), sem -ing (loves play), to + -ing
   (likes to writing), don't para he / she, doesn't likes, pergunta sem
   do, does com you, plural com -s (the boys likes), are + like.
   Catálogo WOLFLIX Live (07/10): família HERÓI (série de família),
   modo CASTING. A tela forte: a porta da geladeira dos Kent; cada
   frase certa prende um bilhete com ímã (♥ love, ✓ like, ✗ hate).
   ⚠ Trailer: só minutagem e paráfrase.
   O AQUECIMENTO (aquece.js): a pilha. O FECHAMENTO: escrita, o bilhete
   da geladeira da família do aluno.
   O VÍDEO: SJPJPUpNvDw (trailer oficial da DC, 1:09, idade 0, embed
   sim). SEM LEGENDA AGORA: minutagem estimada.
   A CARA: noite do Kansas, vermelho do Superman, azul, papel de
   bilhete; DM Serif Display. A antiga era o formato Episódio.
   Fila: FILA-LIVE-386.md · 266.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: adivinhar quem é (pistas) antes; verdadeiro ou mentira e a
   palavra certa, com ▶ nas falas do trailer (legenda-dados.js); depois,
   ligar cada Kent ao que ele ama ou odeia. V: a geladeira com cinco erros
   (achar e dizer a certa), a regra aparece depois do Check. VI: a geladeira
   com SEIS bilhetes (fala + Check, a placa de regra no canto). VII (era
   EXTRA): amo, gosto ou odeio, um toque por coisa.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'cena1-celeiro', rot: 'I · Warm-up and The Interview', t: 'Before the trailer: what you like, then a man with a secret.', p: 'Answer three questions about you. Then ask your teacher questions and find out who he is.' },
  { k: 'palavras', est: 'l', img: 'cena2-milharal', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'cena2-milharal', rot: 'III · The Trailer', t: 'Superman & Lois, 2021. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'cena4-estadio', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'geladeira', rot: 'V · Love It, Hate It', t: 'The fridge door has five mistakes. Find the fix.', p: 'Say the right word for each mistake out loud. Then tap Check and read the rule.' },
  { k: 'geladeira', est: 'o', min: 7, img: 'geladeira', rot: 'VI · The Kent Fridge', t: 'Six notes for the fridge. Say it right, and the note goes up.', p: 'Read who and the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'voce2', est: 'o', min: 7, img: 'cena5-varanda', rot: 'VII · Love It or Hate It?', t: 'Six things. Love it, like it, or hate it?', p: 'Tap one for each thing. Then say it about you and a person in your family.' },
  { k: 'fim', est: 'w', min: 6, img: 'geladeira', rot: 'VIII · Your Fridge Note', t: 'Your family’s fridge note: who loves what, who hates what.', p: 'like / love / hate + -ing. It goes to your My notes.' }
];

var SERIE = 'Superman & Lois', ANO = '2021';
var YT = 'SJPJPUpNvDw', DUR = 69;

var ENCARTE = [
  ['The show', '<i>Superman & Lois</i> is an American TV series (2021–2024). Tyler Hoechlin plays Clark Kent, and Elizabeth Tulloch plays Lois Lane.'],
  ['The family', 'Clark is Superman. Lois is a famous reporter. They have twin boys, Jonathan and Jordan. The boys are fourteen and very different.'],
  ['The farm', 'The family moves from the big city to Smallville, a small town in Kansas. They live on the old family farm.']
];

var ANTES = [
  { q: 'Do you like superhero shows? Which one?', h: 'Yes, I like … / No, I don’t like …' },
  { q: 'A family moves to a farm. Do the kids like it?', h: 'I think they …' }
];
var DEPOIS = [
  { q: 'What does Jonathan like? What does Jordan like?', h: 'Jonathan likes … Jordan likes …' },
  { q: 'Do you like the farm or the big city?', h: 'I like the … / I love …ing.' }
];

var TRECHOS = [
  { k: 'The farm', ini: 0, fim: 14, ouvir: 'Where are they?', sentido: 'A quiet farm in Kansas, with a big red barn and corn fields.', gram: 'Clark <b>loves living</b> on the farm.' },
  { k: 'The family', ini: 14, fim: 28, ouvir: 'Who is in the family?', sentido: 'Clark, Lois and their two boys start a new life in Smallville.', gram: 'The boys <b>don’t like</b> moving.' },
  { k: 'The secret', ini: 28, fim: 42, ouvir: 'What is the secret?', sentido: 'The boys find out a big secret about their father.', gram: 'Jonathan <b>likes knowing</b> the secret.' },
  { k: 'Superman', ini: 42, fim: 56, ouvir: 'What does Superman do?', sentido: 'Superman flies and saves people, but he wants to be a good father too.', gram: 'He <b>loves helping</b> people.' },
  { k: 'Together', ini: 56, fim: 69, ouvir: 'Is the family happy at the end?', sentido: 'The family is together. It is hard, but they are a team.', gram: 'They <b>like being</b> together.' }
];

var TRAPS = [
  ['He / she: -s', 'Jonathan love playing baseball.', 'Jonathan <b>loves</b> playing baseball.', 'he loves · she likes · he hates'],
  ['Then -ing', 'Jordan hates go to parties.', 'Jordan hates <b>going</b> to parties.', 'like / love / hate + verb-ing'],
  ['He doesn’t like', 'Clark don’t like lying.', 'Clark <b>doesn’t like</b> lying.', 'I don’t like · he doesn’t like'],
  ['Questions: do / does', 'You like living here?', '<b>Do</b> you like living here?', 'Do you like…? Does he like…?']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'like / love / hate + verb<b>-ing</b><br>he · she: love<b>s</b> · like<b>s</b> · hate<b>s</b><br>I <b>don’t</b> like · he <b>doesn’t</b> like<br><b>Do</b> you…? <b>Does</b> he…?';
/* III · antes: quem é? (pistas uma a uma) */
var VD_REV = { formato: 'revela', titulo: 'Before you watch: who is this? Say it when you know.', pistas: ['He loves helping people.', 'He loves flying.', 'He lives with his family on a farm.', 'He has a red cape.'], resposta: 'Superman! He is Clark Kent.', mais: 'Next clue', botao: 'I know it! Show' };
/* III · durante: verdadeiro ou mentira e a palavra certa, cada um no minuto do trailer (legenda-dados.js) */
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'A boy says: “I think he kind of loved it.”', t: true, tm: '0:06' },
  { f: 'Somebody says: “We came here as a team.”', t: false, tm: '0:10', c: 'It says: “We came here as a family.”' },
  { f: 'Somebody says: “You’re Batman.”', t: false, tm: '0:17', c: 'It says: “You’re Superman.”' },
  { f: 'A man says: “The world will always need Superman.”', t: true, tm: '0:44' }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'Pick the word you hear.', itens: [
  { p: 'He told the … you’re Superman.', o: ['dogs', 'boys'], c: 1, tm: '0:24' },
  { p: 'This is going to keep my family …', o: ['together', 'home'], c: 0, tm: '0:27' },
  { p: 'Right now this family … you more.', o: ['hates', 'needs'], c: 1, tm: '0:47' }
] };
/* III · depois: ligar cada Kent ao que ele ama ou odeia */
var VD_LIGA = { formato: 'liga', titulo: 'After the trailer: match the Kents. Then say each sentence.', pares: [
  ['Jonathan', 'loves playing baseball'], ['Jordan', 'hates going to parties'], ['Lois', 'likes writing stories'], ['Clark', 'loves working on the farm']
], ordemDireita: [2, 0, 3, 1] };
/* V · a geladeira com cinco erros */
var ERROS = { formato: 'erro', titulo: 'The fridge door has five mistakes. Say the right word.', itens: [
  { f: 'Jonathan <u>love</u> playing baseball.', r: 'loves' },
  { f: 'Jordan hates <u>go</u> to parties.', r: 'going' },
  { f: 'Clark <u>don’t</u> like lying.', r: 'doesn’t' },
  { f: '<u>Does</u> you like living here?', r: 'Do' },
  { f: 'The boys <u>likes</u> playing video games.', r: 'like' }
] };
/* VII · amo, gosto ou odeio: um toque por coisa */
var VD_GOSTO = { formato: 'escolhe', titulo: 'Love it, like it or hate it? Tap one. Then say it about you and a person in your family.', itens: [
  { p: 'Getting up early', o: ['♥ love it', '✓ like it', '✗ hate it'], c: -1, d: 'Say: I hate getting up early. My father loves it.' },
  { p: 'Cooking', o: ['♥ love it', '✓ like it', '✗ hate it'], c: -1, d: 'Say: I like cooking. My brother doesn’t like it.' },
  { p: 'Watching sports', o: ['♥ love it', '✓ like it', '✗ hate it'], c: -1, d: 'Say: I love watching football. My mother hates it.' },
  { p: 'Going to parties', o: ['♥ love it', '✓ like it', '✗ hate it'], c: -1, d: 'Say: I don’t like going to parties. My sister loves it.' },
  { p: 'Driving', o: ['♥ love it', '✓ like it', '✗ hate it'], c: -1, d: 'Say: I like driving at night.' },
  { p: 'Studying English', o: ['♥ love it', '✓ like it', '✗ hate it'], c: -1, d: 'Say: I love studying English!' }
] };

/* a geladeira: o gesto forte */
var BILHETES = [
  { quem: 'Jonathan', sinal: 'love', o: 'play baseball', ops: ['Jonathan loves playing baseball.'], pista: '<span class="ano">Jonathan</span>♥ love · <b>play</b> baseball', resp: 'Jonathan <b>loves playing</b> baseball.', depois: 'Do you love playing a sport? Which one?' },
  { quem: 'Jordan', sinal: 'hate', o: 'go to parties', ops: ['Jordan hates going to parties.'], pista: '<span class="ano">Jordan</span>✗ hate · <b>go</b> to parties', resp: 'Jordan <b>hates going</b> to parties.', depois: 'Do you like going to parties?' },
  { quem: 'Lois', sinal: 'like', o: 'write stories', ops: ['Lois likes writing stories.'], pista: '<span class="ano">Lois</span>✓ like · <b>write</b> stories', resp: 'Lois <b>likes writing</b> stories.', depois: 'Do you like writing? What?' },
  { quem: 'Clark', sinal: 'not like', o: 'lie to his family', ops: ['Clark doesn’t like lying to his family.'], pista: '<span class="ano">Clark</span>✗ doesn’t like · <b>lie</b> to his family', resp: 'Clark <b>doesn’t like lying</b> to his family.', depois: 'What don’t you like doing?' },
  { quem: 'Lois asks the boys', sinal: 'question', o: 'live in Smallville?', ops: ['Do you like living in Smallville?'], pista: '<span class="ano">Lois asks</span>? a question · you · <b>live</b> in Smallville', resp: '<b>Do</b> you <b>like living</b> in Smallville?', depois: 'Do you like living in your city?' },
  { quem: 'Lois, on Clark’s first day', sinal: 'question', o: 'who · not like · baseball?', ops: ['Who doesn’t like baseball?'], pista: '<span class="ano">Lois asks</span>? a question · who · <b>not like</b> baseball', resp: '<b>Who doesn’t like</b> baseball?', depois: 'The fridge is full. Who in your family doesn’t like baseball… or football?' }
];
var SINAL = { love: '♥ love', like: '✓ like', hate: '✗ hate', 'not like': '✗ doesn’t like', question: '? a question' };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, gd: { n: 0, esc: -1 } };

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
  return '<div class="kt-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a porta da geladeira: oito bilhetes com ímã; o da vez é um papel em branco tremendo; o certo cola com o texto e o sinal */
function geladeira(colados, atual, nova) {
  var cores = ['#f2c14e', '#e2493c', '#7fa7e0', '#9fd98a', '#f2a8c8', '#f0a24a', '#c3a8f0', '#e2493c'];
  return '<div class="kt-porta vd" role="img" aria-label="The Kent fridge: ' + colados + ' of ' + BILHETES.length + ' notes"><i class="kt-pega"></i><div class="kt-notas">' + BILHETES.map(function (b, i) {
    var cls = i < colados ? (nova && i === colados - 1 ? ' colado novo' : ' colado') : (i === atual ? ' vez' : '');
    return '<div class="kt-nota' + cls + '" style="--r:' + ((i * 53 % 9) - 4) + 'deg;--m:' + cores[i] + '"><i class="kt-ima"></i><small>' + b.quem + ' · ' + SINAL[b.sinal] + '</small><span>' + (i < colados ? b.ops[0] : (i === atual ? b.o : '')) + '</span></div>';
  }).join('') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A1 · like / love / hate + -ing</span><h1>Who Doesn’t Like Baseball?</h1>'
    + '<p class="banda">' + SERIE + ' · ' + ANO + '</p>'
    + '<p class="sub">Superman, a famous reporter and their twin boys move to a farm in Kansas. On the fridge, every member of the family has a note: what they love, and what they hate.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the kitchen</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r kt-foto"><img src="' + img('capa') + '" alt="A farm in Kansas at night"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="kt-encarte vd"><div class="kt-capinha"><img src="' + img('cena1-celeiro') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>The Kents</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="kt-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Jonathan and Jordan are twins, but very different. Who is very different from you in your family?</h2></div>' + mostra('enc', 'My brother. He loves football, and I hate it!', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REV) + '</div>'
    + '<div class="lado-l"><div class="kt-selo vd"><b>' + SERIE + '</b><small>the official trailer · about one minute</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="kt-video"><div class="kt-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="kt-cred">' + SERIE + ' · official trailer (DC) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vm', VD_VM) + FM.ex('esc', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="kt-centro">' + FM.ex('liga', VD_LIGA) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="kt-video"><div class="kt-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="kt-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="kt-sentido">' + x.sentido + '</span><span class="kt-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="kt-centro"><p class="kt-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).err, ver = !!(e && e.ver);
  return cab(c) + '<div class="kt-centro">' + FM.ex('err', ERROS)
    + (ver ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Say the five fixes, tap Check, and the rule appears.</p>') + '</div>';
};

R.geladeira = function (c) {
  return cab(c) + FM.fala('gd', BILHETES.map(function (b) { return { pista: b.pista, resp: b.resp, depois: b.depois }; }), {
    rotulo: 'Note', prox: 'Next note', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + geladeira(feitas, atual, atual >= 0 ? nova : 0) + '</div>'; },
    fim: 'The fridge is full. Read the Kent family to the teacher, note by note.'
  });
};

R.voce2 = function (c) {
  return cab(c) + comPlaca(FM.ex('gosto', VD_GOSTO), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My mother loves …\nMy father doesn’t like …\nI hate …\nAnd everybody likes …', 'Your fridge note',
    ['loves', 'likes', 'hates', 'doesn’t like', 'don’t like', '-ing'], ['Your fridge note', 'A note for your family’s fridge: who loves what, who hates what, with like / love / hate + -ing.'])
    + '<div class="lado-fim"><div class="grande vd"><span>he <u>loves</u> play<u>ing</u></span><span>she <u>doesn’t like</u> cook<u>ing</u></span><span>I <u>hate</u> getting up early</span><span>not <s>he love</s>, not <s>she don’t like</s></span></div>'
    + mostra('fim', 'My mother loves cooking. My father doesn’t like driving. My brother hates studying. I love watching series. And everybody likes eating pizza!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'pilha', rot: 'I · Finish It', t: 'Before the trailer: what do you love, and what do you hate?', p: 'Turn one card at a time and finish it out loud. Then the teacher finishes it too.', rotulo: 'Finish it',
  depois: 'Which card is the most true? Say it again.',
  itens: [
    { q: 'On Sundays, I love …', ex: '… sleeping late and eating pancakes.' },
    { q: 'I really hate …', ex: '… waiting in long lines.' },
    { q: 'My mother likes …', ex: '… watching old movies.' },
    { q: 'My best friend doesn’t like …', ex: '… dancing. He is shy.' },
    { q: 'In the morning, I don’t like …', ex: '… talking. I need coffee first!' },
    { q: 'Everybody likes … but I don’t.', ex: '… going to the beach.' }
  ] };
/*AQ@@*/
