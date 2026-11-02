/* ============================================================
   SILO · THE STAIRS · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · perguntas indiretas: Do you know / Can you tell me /
   I wonder / I don’t know + palavra de pergunta + ordem de afirmação
   (why we are here), if / whether para sim e não, sem do / does / did.
   Erros: inversão (why are we here), do / did na indireta (where did
   he go), sem if (I wonder is it safe), ponto de interrogação depois
   de I wonder, that no lugar de if, what no lugar de that.
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo JORNADA NO MAPA.
   A tela forte: o corte do silo com a escada em espiral. Cento e
   quarenta e quatro andares, oito paradas; cada pergunta indireta
   certa leva a lanterna um patamar abaixo, do topo (a tela do mundo lá
   fora) ao fundo (a Mecânica). No fundo, uma porta que ninguém abriu.
   O AQUECIMENTO (aquece.js): o duelo. O FECHAMENTO (final.js): as
   perguntas.
   O VÍDEO: 8ZYhuvIv1pA (trailer oficial Apple TV, 2:28, idade 0, embed
   sim). Tempos da legenda (23/09): 0:15, 0:18, 0:35, 0:53, 1:13, 1:42;
   cada momento contado com palavras nossas.
   A CARA: concreto escuro, âmbar de lâmpada industrial, ferrugem;
   Barlow Condensed + Literata. A antiga era o kit episódio.
   Fila: FILA-LIVE-386.md · 295.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: adivinhar o que é (pistas) antes; a palavra errada com ▶
   nas falas do trailer (legenda-dados.js); depois, Verdade ou Mentira com
   ▶. V: ligar a pergunta direta à pergunta educada. VI: o silo com SEIS
   patamares; montar a pergunta, Check, a lanterna desce um patamar. VII
   (era EXTRA): três pessoas falam com você, a reação muda a conversa.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'tela', rot: 'I · Warm-up and The Silo Rules', t: 'Before the trailer: your questions, then the rules underground.', p: 'Answer three questions about your life. Then read the rules of the silo and say if you could live with them.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Silo. The official trailer.', p: 'Guess first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'tela', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 7, img: 'oficina', rot: 'V · The Question Inside', t: 'The direct question and the polite question. Match them.', p: 'Match each direct question to the polite one. Then say both, out loud.' },
  { k: 'escada', est: 'o', min: 7, img: 'capa', rot: 'VI · Down the Stairs', t: 'Six landings. Every question you build takes you one landing down.', p: 'Build the question out loud. Tap Check. The lantern goes down.' },
  { k: 'curioso', est: 'o', min: 7, img: 'oficina', rot: 'VII · What You Wonder', t: 'Three people in the silo talk to you. How do you answer?', p: 'Pick how you answer. Then read the talk out loud.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · Questions', t: 'Questions.', p: 'Questions.' }
];

var SERIE = 'Silo', ANO = '2023';
var YT = '8ZYhuvIv1pA', DUR = 148;

var ENCARTE = [
  ['The show', '<i>Silo</i> is an Apple TV series (2023) from the books by Hugh Howey. Rebecca Ferguson is Juliette, an engineer.'],
  ['The silo', 'Ten thousand people live in a giant underground tower, 144 floors deep. A screen at the top shows the world outside: grey and dead.'],
  ['The rule', 'Nobody knows who built the silo or why they are there. There is one rule: never say you want to go outside, or you will be sent outside.']
];

var ANTES = [
  { q: 'Could you live underground for a year? Why or why not?', h: 'Yes, I could … / No, I couldn’t, because …' },
  { q: 'What is a question nobody in your family can answer?', h: 'Nobody knows why …' }
];
var DEPOIS = [
  { q: 'What doesn’t anybody in the silo know?', h: 'They don’t know who … / why …' },
  { q: 'What do you think Juliette found?', h: 'I wonder if she found …' }
];

var TRECHOS = [
  { k: 'We do not know', ini: 12, fim: 28, ouvir: 'What don’t they know?', sentido: 'A leader says the truth: they do not know why they are there, who built the silo, or why they live underground.', gram: 'We don’t know <b>why we are</b> here.' },
  { k: 'One rule', ini: 33, fim: 50, ouvir: 'What is the one rule?', sentido: 'The sheriff explains the only rule: never say you want to go outside, or you will go.', gram: 'Nobody asks <b>what is</b> outside.' },
  { k: 'Beyond the silo', ini: 50, fim: 60, ouvir: 'What does someone ask?', sentido: 'A voice asks if he never thinks about the world beyond the silo.', gram: 'She wonders <b>if he thinks</b> about it.' },
  { k: 'The answers', ini: 70, fim: 82, ouvir: 'What did Juliette find?', sentido: 'Juliette says she found something that could answer a lot of questions.', gram: 'She wants to know <b>what it is</b>.' },
  { k: 'The truth', ini: 98, fim: 112, ouvir: 'What does Juliette care about?', sentido: 'Someone says this is a danger to order in the silo. Juliette shouts that she doesn’t care about order: she wants the truth.', gram: 'She asks <b>who decided</b> the rules.' }
];

var TRAPS = [
  ['The order doesn’t flip', 'We don’t know why are we here.', 'We don’t know why <b>we are</b> here.', 'question word + subject + verb'],
  ['No do / does / did', 'Do you know where did he go?', 'Do you know where <b>he went</b>?', 'the verb takes the tense'],
  ['Yes / no: if', 'I wonder is it safe outside.', 'I wonder <b>if it is</b> safe outside.', 'if / whether + subject + verb'],
  ['I wonder is not a question', 'I wonder what is down there?', 'I wonder what is down there.', 'I wonder… ends with a full stop']
];

/* a escada: o gesto forte */
var ANDARES = [
  { andar: 'Floor 1 · the screen' }, { andar: 'Floor 12 · the cafeteria' }, { andar: 'Floor 34 · the farm' },
  { andar: 'Floor 56 · the market' }, { andar: 'Floor 120 · down deep' }, { andar: 'Floor 144 · Mechanical' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, es: { n: 0, esc: -1 } };

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
  return '<div class="si-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'We don’t know <b>why we are</b> here<br>question word + <b>subject + verb</b><br>I wonder <b>if it is</b> safe<br>no <b>do / does / did</b> inside: Do you know <b>who built</b> it?<br>I wonder… ends with a full stop';
/* III · antes: pistas, uma a uma */
var SI_REV = { formato: 'revela', titulo: 'Before you watch: what is it? Guess with the clues.', pistas: [
  'It is a giant tower, and it goes deep under the ground.',
  'Ten thousand people live inside. A screen shows the world outside: grey and dead.',
  'There is one rule: never say you want to go outside.'
], resposta: 'The silo. Now watch the trailer and check.', botao: 'I know it! Show', mais: 'Next clue' };
/* III · durante: a palavra errada, cada uma no minuto do trailer (legenda-dados.js) */
var SI_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: 'We do not know <u>who</u> we are here.', r: 'why', t: '0:15' },
  { f: 'We do not know who <u>made</u> the silo.', r: 'built', t: '0:18' },
  { f: 'Do you ever think about the world <u>behind</u> the silo?', r: 'beyond', t: '0:53' }
] };
/* III · depois: verdade ou mentira, com ▶ */
var SI_VM = { formato: 'verdadeOuMentira', titulo: 'After the trailer: true or lie? If it is a lie, say the truth.', itens: [
  { f: 'The people in the silo know why they are here.', t: 0, tm: '0:15', c: 'They do not know why they are here.' },
  { f: 'Someone asks if he ever thinks about the world beyond the silo.', t: 1, tm: '0:53' },
  { f: 'Juliette found something that might hold answers to a lot of questions.', t: 1, tm: '1:13' },
  { f: 'Juliette says she cares a lot about order.', t: 0, tm: '1:44', c: 'She does not care about order. She wants the truth.' }
] };
/* V · ligar a pergunta direta à pergunta educada */
var SI_LIGA = { formato: 'liga', titulo: 'Match the direct question to the polite one. Then say both, out loud.', pares: [
  ['Why are we here?', 'We don’t know why we are here.'],
  ['Who built the silo?', 'Do you know who built the silo?'],
  ['Is it safe outside?', 'I wonder if it is safe outside.'],
  ['Where do the stairs go?', 'Can you tell me where the stairs go?'],
  ['What did Juliette find?', 'I’d like to know what Juliette found.'],
  ['Why does the door stay closed?', 'Nobody knows why the door stays closed.']
], ordemDireita: [4, 2, 5, 0, 3, 1] };
/* VI · a escada: montar a pergunta, Check, a lanterna desce */
var SI_PERG = [
  { p: '(we don’t know · why · we · be here)', r: 'We don’t know why <b>we are</b> here.' },
  { p: '(do you know · who · build · the silo)?', r: 'Do you know who <b>built</b> the silo?' },
  { p: '(I wonder · if · it · be · safe outside)', r: 'I wonder if <b>it is</b> safe outside.' },
  { p: '(can you tell me · where · the stairs · go)?', r: 'Can you tell me where <b>the stairs go</b>?' },
  { p: '(I’d like to know · what · Juliette · find)', r: 'I’d like to know what <b>Juliette found</b>.' },
  { p: '(she doesn’t know · if · the door · open)', r: 'She doesn’t know if <b>the door opens</b>.' }
];
/* VII · três pessoas, a reação muda a conversa */
var SI_REA = [
  { k: 'r1', titulo: 'Person 1 · A stranger in the cafeteria', quem: 'Stranger', fala: '“Hi! You look lost.”', reacoes: [
    ['The stairs', 'Yes! Do you know where the stairs are?', 'Down the hall, on the left.'],
    ['The time', 'Yes! Can you tell me what time it is?', 'It is half past six.'],
    ['The floor', 'Yes! Do you know which floor this is?', 'This is Floor 12.']] },
  { k: 'r2', titulo: 'Person 2 · The sheriff', quem: 'Sheriff', fala: '“Why are you asking so many questions?”', reacoes: [
    ['The truth', 'I want to know why we are here.', 'That is a dangerous question.'],
    ['Who built it', 'I wonder who built the silo.', 'Nobody knows who built it.'],
    ['The outside', 'I want to know what is outside.', 'Careful. That is the rule.']] },
  { k: 'r3', titulo: 'Person 3 · A friend', quem: 'Friend', fala: '“Tell me something you wonder about.”', reacoes: [
    ['The future', 'I wonder if people will live on Mars.', 'Maybe! I wonder when.'],
    ['Your city', 'I wonder when our city was founded.', 'Me too. Let’s ask someone.'],
    ['The teacher', 'I’d like to know where the teacher grew up.', 'Ask him!']] }
];

/* o corte do silo: o poço de concreto, a escada em zigue-zague descendo por oito patamares; os patamares visitados acendem em âmbar; a lanterna fica no patamar atual; no fundo, a porta */
function silo(feitas, atual, nova) {
  var W = 320, top = 26, passo = 38, pats = '', degraus = '', N = ANDARES.length;
  for (var i = 0; i < N; i++) {
    var y = top + i * passo, xL = i % 2 ? 60 : 200, cls = i < feitas ? 'ok' : (i === atual ? 'vez' : '');
    pats += '<g class="si-pat ' + cls + '"><rect x="' + xL + '" y="' + y + '" width="60" height="5" rx="2"/><text x="' + (i % 2 ? xL - 6 : xL + 66) + '" y="' + (y + 6) + '" text-anchor="' + (i % 2 ? 'end' : 'start') + '">' + ANDARES[i].andar.split(' · ')[0] + '</text></g>';
    if (i < N - 1) degraus += '<line class="si-deg' + (i < feitas - 1 ? ' ok' : '') + '" x1="' + (i % 2 ? 90 : 230) + '" y1="' + (y + 5) + '" x2="' + (i % 2 ? 230 : 90) + '" y2="' + (y + passo) + '"/>';
  }
  var pos = feitas ? Math.min(feitas, N) - 1 : -1;
  var lx = pos < 0 ? 160 : (pos % 2 ? 90 : 230), ly = pos < 0 ? 10 : top + pos * passo - 6;
  var fim = feitas >= N;
  return '<div class="si-corte vd" role="img" aria-label="Down the stairs: ' + feitas + ' of ' + N + ' landings"><svg viewBox="0 0 ' + W + ' 290" class="si-svg">'
    + '<rect x="40" y="0" width="240" height="290" class="si-poco"/><rect x="150" y="0" width="20" height="290" class="si-eixo"/>'
    + degraus + pats
    + '<rect x="130" y="266" width="60" height="22" rx="3" class="si-porta' + (fim ? ' aberta' : '') + '"/>'
    + '<g class="si-luz' + (nova ? ' novo' : '') + '" transform="translate(' + lx + ',' + ly + ')"><circle r="16" class="halo"/><circle r="5"/></g></svg>'
    + '<p class="si-legenda">' + (fim ? 'Floor 144. A door nobody opened.' : 'Landing ' + feitas + ' of ' + N + ' · going down') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · indirect questions · why we are here</span><h1>Why We Are Here</h1>'
    + '<p class="banda">' + SERIE + ' · Apple TV</p>'
    + '<p class="sub">Ten thousand people live underground, and nobody knows why. There is one rule, and it is about a question. Tonight you go down the stairs of the silo: every question you ask the right way takes you one landing deeper.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start going down</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r si-foto"><img src="' + img('capa') + '" alt="Looking down a deep concrete silo with a giant spiral staircase and amber lights"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="si-encarte vd"><div class="si-capinha"><img src="' + img('tela') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>The view from the top</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="si-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Would you ask the question, or follow the rule?</h2></div>' + mostra('enc', 'I would ask. I need to know why we are there.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', SI_REV) + '</div>'
    + '<div class="lado-l"><div class="si-selo vd"><b>' + SERIE + '</b><small>the official trailer · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="si-video"><div class="si-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="si-cred">' + SERIE + ' · official trailer (Apple TV) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('erro', SI_ERRO) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="si-video"><div class="si-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="si-cred">' + SERIE + ' · official trailer (Apple TV) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vm', SI_VM) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="si-video"><div class="si-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="si-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="si-sentido">' + x.sentido + '</span><span class="si-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="si-centro"><p class="si-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="si-centro">' + FM.ex('liga', SI_LIGA) + '</div>';
};

R.escada = function (c) {
  var e = (S.fq || {}).esc6, n = 0;
  if (e && e.ver) Object.keys(e.ver).forEach(function (k) { if (e.ver[k]) n++; });
  var nova = n > (S.esn || 0); S.esn = n;
  return cab(c) + '<div class="fm-obj">' + silo(n, -1, nova) + '</div>'
    + FM.pergunta('esc6', SI_PERG, { titulo: 'Build the question. Tap Check.', regra: PRESA });
};

R.curioso = function (c) {
  return cab(c) + comPlaca(SI_REA.map(function (x) { return FM.ex(x.k, { formato: 'reacao', titulo: x.titulo, quem: x.quem, fala: x.fala, reacoes: x.reacoes }); }).join(''), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="si-centro"><p class="si-dica">Questions.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'duelo', rot: 'I · This or That', t: 'Before the trailer: inside or outside?', p: 'Pick one side. Then say why. The teacher picks too.',
  itens: [
    { a: 'Know the truth', b: 'Live in peace', q: 'Which one do you choose?', ex: 'The truth. I want to know why things happen.' },
    { a: 'A city', b: 'A small village', q: 'Where would you rather live?', ex: 'A village. I wonder if I could be happy there.' },
    { a: 'Ask questions', b: 'Follow the rules', q: 'What kind of person are you?', ex: 'I ask questions. I always want to know why.' },
    { a: 'The top floor', b: 'The bottom floor', q: 'Where would you live in the silo?', ex: 'The top. I want to see the screen.' },
    { a: 'Open the door', b: 'Leave it closed', q: 'A door nobody opened. What do you do?', ex: 'Open it! I need to know what is behind it.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'perguntas', rot: 'VIII · Questions', t: 'Questions with a question inside.', p: 'Answer each one. Then ask the teacher two, the polite way.',
  itens: [
    { q: 'Do you know when your grandparents were born?', ex: 'I know when my grandmother was born: 1948.' },
    { q: 'Can you remember what you did last Sunday?', ex: 'Yes. I went to the beach with friends.' },
    { q: 'Do you know why the sky is blue?', ex: 'I don’t know why it is blue! Do you?' },
    { q: 'Have you ever wondered if there is life on other planets?', ex: 'Yes, I often wonder if we are alone.' },
    { q: 'Do you know what you will do next year?', ex: 'I don’t know what I will do yet.' }
  ],
  depois: 'Now ask the teacher two questions with Do you know…? or Can you tell me…?' };
/*FIM@@*/
