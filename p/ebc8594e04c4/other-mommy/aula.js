/* ============================================================
   OTHER MOMMY · TWO MOTHERS IN THE DARK · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A1 · present simple com he / she: she wears, she has, she
   doesn't, Does she…?
   Erros: sem -s (Mommy wear), is + verbo (is wear), have / haves para
   she, don't para she, doesn't sings, Do she, -ing para hábito.
   Catálogo WOLFLIX Live (07/10): família TERROR, modo LANTERNA.
   A tela forte: duas mães lado a lado no escuro (Mommy e Other Mommy);
   a lanterna revela uma diferença por vez, e cada frase certa deixa a
   diferença acesa.
   ⚠ Terror A1: aviso na capa; nada de susto, nada de clarão (fotofobia).
   Trailer: só minutagem e paráfrase.
   O AQUECIMENTO (aquece.js): a imagem do armário. O FECHAMENTO
   (final.js): perguntas.
   O VÍDEO: -mnTITqqiT0 (trailer oficial 2, Universal, 1:46, idade 0,
   embed sim). 08/10: CONFERIDO à mão (legenda automática do YouTube +
   transcrição local + quadros a cada segundo). O que o trailer mostra e
   diz está em PISTAS e TRECHOS; nada além disso é afirmado como fato.
   PILOTO 08/10 · PÓS-TRAILER COM EVIDÊNCIAS (aprovado pelo Carlos):
   III (depois do vídeo) = a hipótese do aluno; IV = três pistas
   conferidas, cada frase classificada em “I can see it” / “I’m not
   sure” (dá para trocar), o quadro e a revisão da hipótese; VIII = o
   fechamento reaproveita o quadro. Estado em S.ev, só toques de valor
   fixo (repetir o toque não muda nada); recarga e entrada tardia pedem
   o estado ao outro lado pelo canal aula-estado do fio (sem mexer no fio).
   A CARA: breu, azul de luar, vermelho só no alerta; IM Fell English
   (livro de histórias antigo). A antiga era a sala escura (dark).
   Fila: FILA-LIVE-386.md · 270.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: antes, três cartas que abrem; durante, a palavra que você
   ouviu e verdadeiro ou mentira, com ▶ nas falas do trailer
   (legenda-dados.js); depois, a hipótese (como estava). V (Three Clues) e o
   quadro S.ev ficam como estavam. VI: o caderno da Bela -> a regra (carta);
   VII: as duas mães, seis traços (fala primeiro: o aluno diz e toca Check, a
   lanterna acende o traço); VIII (era EXTRA): uma roleta de pessoas + tocar
   cada forma que usou.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'cama', rot: 'I · Warm-up and In the Dark', t: 'Before the trailer: your house at night, then a sound in the dark.', p: 'Answer three questions about your life. Then close your eyes and listen to the start of the trailer.' },
  { k: 'palavras', est: 'l', img: 'corredor', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'corredor', rot: 'III · The Trailer', t: 'Other Mommy, 2026. The official trailer.', p: 'Open the cards. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', extra: 1, img: 'corredor', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'letra', est: 'l', min: 7, img: 'corredor', rot: 'V · Three Clues', t: 'What can you see? What are you not sure about?', p: 'Watch each clue again. Put each sentence in a box. You can change your mind.' },
  { k: 'regra', est: 'f', min: 6, img: 'cozinha', rot: 'VI · She Wears, She Has', t: 'Bela’s notebook. Find the pattern.', p: 'Read the notebook out loud. Tap the verbs after she. Then finish the rule.' },
  { k: 'lanterna', est: 'o', min: 7, img: 'chapeu', rot: 'VII · Two Mothers', t: 'Two mothers in the dark. The flashlight finds one difference at a time.', p: 'Read the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'familia', est: 'o', min: 6, img: 'cozinha', rot: 'VIII · Your People', t: 'Spin the wheel: a person in your life. What do they wear, have, do?', p: 'Spin, talk about that person, and tap each form when you use it.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · Questions', t: 'Questions.', p: 'Answer.' }
];

var FILME = 'Other Mommy', ANO = '2026';
var YT = '-mnTITqqiT0', DUR = 106;

var ENCARTE = [
  ['The film', '<i>Other Mommy</i> is a horror film by Rob Savage (Universal, 2026).'],
  ['The girl', 'Bela is a little girl. She says there is somebody in her closet, and she calls it “Other Mommy”.'],
  ['The problem', 'Other Mommy looks like her mother… but not exactly. She wears different things, she has different hands, and she wants to stay.']
];

var ANTES = [
  { q: 'Do you like horror films? Why or why not?', h: 'Yes, I like … / No, I don’t like …' },
  { q: 'A girl says there is a person in her closet. What does her mother do? Guess.', h: 'Her mother …' }
];
/* III, depois do vídeo: a hipótese (antes de rever qualquer trecho) */
var HIPOTESES = ['She is the girl’s mommy.', 'She is Other Mommy.', 'I’m not sure yet.'];

/* 08/10: os cinco momentos CONFERIDOS (legenda automática + quadros); a tira usa arte da aula, não quadros do trailer */
var TRECHOS = [
  { k: 'The bath', ini: 0, fim: 34 },
  { k: 'At night', ini: 37, fim: 51 },
  { k: 'A question', ini: 53, fim: 57 },
  { k: 'The ball pit', ini: 57, fim: 75 },
  { k: 'The car', ini: 96, fim: 101 }
];

/* IV · as três pistas: só o que se vê e se ouve no intervalo (conferido em 08/10).
   c = 'ver' (dá para ver no trecho) ou 'inc' (o trecho não mostra) · prova = o que o trecho mostra, para o professor revelar */
var PISTAS = [
  { k: 'Clue A · The bath', ini: 0, fim: 34, olhe: 'Look at the woman in the bath. Then look at the door at the end.',
    f: [{ t: 'The woman in the bath has bangs.', c: 'ver', prova: '0:02–0:12: she has long dark hair and bangs.' },
        { t: 'The woman in the bath is the girl’s mommy.', c: 'inc', prova: 'The trailer doesn’t say. At 0:32 another woman stands at the door.' }] },
  { k: 'Clue B · At night', ini: 37, fim: 51, olhe: 'Listen to the name. Look at the woman with the man.',
    f: [{ t: 'One woman wears glasses.', c: 'ver', prova: '0:46–0:50: a woman with glasses talks to a man.' },
        { t: 'The woman with glasses believes the girl.', c: 'inc', prova: 'She only says “What?”. The man asks: “Are you certain she doesn’t look like you?”' }] },
  { k: 'Clue C · The car', ini: 96, fim: 101, olhe: 'Look at the woman in the car. What does she wear?',
    f: [{ t: 'She wears a yellow dress.', c: 'ver', prova: '1:36–1:41: a yellow dress, in a car full of colorful balls.' },
        { t: 'She is the woman from the bath.', c: 'inc', prova: 'She has bangs too, but the trailer doesn’t say who she is.' }] }
];
var FRASES = []; PISTAS.forEach(function (p, i) { p.f.forEach(function (f) { FRASES.push({ t: f.t, c: f.c, prova: f.prova, pista: i }); }); });

var TRAPS = [
  ['He / she: -s', 'Mommy wear glasses.', 'Mommy <b>wears</b> glasses.', 'she wears · she sings · she calls'],
  ['She has', 'Other Mommy have long nails.', 'Other Mommy <b>has</b> long nails.', 'I have · she has'],
  ['She doesn’t', 'Mommy don’t sing at night.', 'Mommy <b>doesn’t sing</b> at night.', 'doesn’t + verb (no -s)'],
  ['Does she…?', 'Do she smile?', '<b>Does</b> she smile?', 'Does she…? Yes, she does.']
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>Mommy wears</b> glasses · he / she: verb + -s<br><b>She has</b> short hair · have → has<br><b>She doesn’t sing</b> at night · doesn’t + verb<br><b>Does she smile?</b> Yes, she does.';
/* III · antes: três cartas que abrem */
var VD_CARTAS = { formato: 'cartas', titulo: 'Before you watch · open a card', fechada: 'Tap to open', cartas: [
  ['The film', 'Do you like horror films? Why or why not?'],
  ['The closet', 'A girl says there is a person in her closet. What does her mother do? Guess.'],
  ['Your mother', 'What does your mother wear at home? What does she have in her bag?']
] };
/* III · durante: a palavra que você ouviu e verdadeiro ou mentira, cada um no minuto do trailer (legenda-dados.js) */
var VD_SOM = { formato: 'som', titulo: 'Which word did you hear?', itens: [
  { a: 'That is a very fancy ', par: ['hat', 'cat'], c: 0, b: '.', t: '0:01' },
  { a: 'She ', par: ['calls', 'falls'], c: 0, b: ' it Other Mommy.', t: '0:37' },
  { a: 'And I keep ', par: ['playing', 'paying'], c: 0, b: ' with you.', t: '0:42' }
] };
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Somebody says: “I think I need a bigger hat.”', t: true, tm: '0:10' },
  { f: 'Somebody says: “I’m very sleepy.”', t: false, c: 'Somebody says: “I’m <b>not</b> sleepy yet.”', tm: '0:40' },
  { f: 'Somebody says: “She said she looked like you.”', t: true, tm: '0:48' }
] };
/* VI · o caderno da Bela → a regra */
var CARTA = { de: 'Bela’s notebook · about the two mothers',
  txt: 'Mommy [[wears]] glasses. She [[has]] short hair. She [[doesn’t]] sing at night. But Other Mommy [[sings]] every night. [[Does]] she smile? She [[smiles]] a lot.',
  assina: 'Bela' };
var REGRA = [
  { a: 'Mommy ', par: ['wears', 'wear'], c: 0, b: ' glasses. (he / she: verb + -s)' },
  { a: 'She ', par: ['has', 'have'], c: 0, b: ' short hair. (have → has)' },
  { a: 'She ', par: ['doesn’t', 'don’t'], c: 0, b: ' sing at night. (doesn’t + verb, no -s)' },
  { a: '', par: ['Does', 'Do'], c: 0, b: ' she smile? Yes, she does.' }
];
/* VII · as duas mães: seis traços, fala primeiro */
var TRACOS = [
  { quem: 'mommy', curto: 'glasses' }, { quem: 'other', curto: 'a fancy hat' }, { quem: 'mommy', curto: 'short hair' },
  { quem: 'other', curto: 'long black nails' }, { quem: 'mommy', curto: 'no singing at night' }, { quem: 'other', curto: 'sings at night' }
];
var TIROS = [
  { pista: 'Mommy · wear · glasses', resp: 'Mommy <b>wears</b> glasses.', depois: 'Who wears glasses in your family?' },
  { pista: 'Other Mommy · wear · a fancy hat', resp: 'Other Mommy <b>wears</b> a fancy hat.', depois: 'Do you wear a hat? When?' },
  { pista: 'Mommy · have · short hair', resp: 'Mommy <b>has</b> short hair.', depois: 'Who has long hair in your family?' },
  { pista: 'Other Mommy · have · long black nails', resp: 'Other Mommy <b>has</b> long black nails.', depois: 'Is this film too scary for you?' },
  { pista: 'Mommy · not · sing at night', resp: 'Mommy <b>doesn’t sing</b> at night.', depois: 'Does anybody sing in your house?' },
  { pista: 'Other Mommy · sing · at night', resp: 'Other Mommy <b>sings</b> at night.', depois: 'What do you do at night before you sleep?' }
];
/* VIII (era EXTRA) · uma roleta de pessoas + tocar cada forma que usou */
var VG_RODA = { formato: 'sorteio', titulo: 'Spin the wheel · a person in your life', botao: 'Spin', opcoes: [
  'Your mother: what does she wear? What does she like?', 'Your father: what does he have? What does he do?', 'Your best friend: what doesn’t he or she like?',
  'Your grandmother: what does she do every day?', 'Your neighbor: what does he or she have?', 'Your teacher: ask Does your teacher…?'
] };
var VG_USA = { formato: 'usa', titulo: 'Tap each form when you use it.', palavras: ['she wears …', 'she has …', 'she doesn’t …', 'he / she …s', 'Does she …?'], fim: 'All five. The flashlight is on, and you said it all with -s!' };

/* as duas mães: o gesto forte */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, ln: { n: 0, esc: -1 },
  /* S.ev: a hipótese (hip), a aba (pista 0–2, 3 = o quadro), a classificação de cada frase (cl), a hipótese revista (rev) e n = quantos toques (a versão, para a recarga) */
  ev: { hip: -1, pista: 0, cl: {}, rev: -1, n: 0 } };

/* a tira de filme: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
function onda(marcas, sel, acao) {
  var ims = []; L.forEach(function (x) { if (x.img && ims.indexOf(x.img) < 0) ims.push(x.img); });
  var fr = (marcas || []).map(function (x, i) {
    var t = Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2);
    var bg = ' style="--bg:url(\'' + img(ims[(i + 1) % ims.length]) + '\')"';
    var dentro = '<i class="tq-img"></i><b>' + t + '</b><span>' + x.k + '</span>';
    return acao ? '<button type="button" class="tq' + (sel === i ? ' on' : '') + '"' + bg + ' data-a="' + acao + '" data-n="' + i + '">' + dentro + '</button>' : '<span class="tq"' + bg + '>' + dentro + '</span>';
  }).join('');
  return '<div class="tira' + (acao ? ' grande' : '') + '" aria-hidden="' + (acao ? 'false' : 'true') + '"><div class="tira-furos"></div><div class="tira-q">' + fr + '</div><div class="tira-furos"></div><small class="tira-nota">Lesson art · not frames from the trailer</small></div>';
}
function tres(acao, ops, esc, semente) {
  return '<div class="om-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* duas mães no escuro: dois painéis; o feixe de lanterna está no traço da vez; os achados ficam acesos com luz baixa */
function maes(achados, atual, nova) {
  var lado = function (q, nome) {
    var itens = TRACOS.map(function (t, i) { return [t, i]; }).filter(function (p) { return p[0].quem === q; }).map(function (p) {
      var i = p[1], cls = i < achados ? (nova && i === achados - 1 ? ' achado novo' : ' achado') : (i === atual ? ' vez' : '');
      return '<li class="om-traco' + cls + '">' + (i < achados || i === atual ? p[0].curto : '· · ·') + '</li>';
    }).join('');
    var vez = atual >= 0 && TRACOS[atual] && TRACOS[atual].quem === q;
    return '<div class="om-mae om-' + q + (vez ? ' luz' : '') + '"><b>' + nome + '</b><i class="om-silhueta"></i><ul>' + itens + '</ul></div>';
  };
  return '<div class="om-quarto vd" role="img" aria-label="Two mothers in the dark: ' + achados + ' of ' + TRACOS.length + ' differences found">' + lado('mommy', 'Mommy') + lado('other', 'Other Mommy') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A1 · she wears · she has · she doesn’t · does she…?</span><h1>Other Mommy</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">Bela says there is somebody in her closet. It looks like her mother, but it is not her mother. Tonight you hold the flashlight: find the differences between the two of them.</p>'
    + '<p class="om-aviso">A horror film. The lesson stays calm: no jump scares, only the closet and the questions.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn on the flashlight</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r om-foto"><img src="' + img('capa') + '" alt="A dark bedroom at night with the closet door open"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="om-encarte vd"><div class="om-capinha"><img src="' + img('cama') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>Bela’s room</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="om-centro"><div class="pergunta vd ja"><small>Talk</small><h2>When you were a child, were you scared of the dark? What did you do?</h2></div>' + mostra('enc', 'Yes! I slept with the light on.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vc', VD_CARTAS) + '</div>'
    + '<div class="lado-l"><div class="om-selo vd"><b>' + FILME + '</b><small>the official trailer · a horror film · about two minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="om-video"><div class="om-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="om-cred">' + FILME + ' · official trailer (Universal) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('vs', VD_SOM) + FM.ex('vm', VD_VM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = hipotese();
  return cab(c) + corpo;
};
/* III · depois do vídeo: o aluno escolhe uma hipótese e diz uma frase, antes de rever qualquer pista */
function hipotese() {
  var e = S.ev;
  return '<div class="ev-hip vd"><div class="pergunta vd ja"><small>After the trailer · your guess</small><h2>At the end, a woman in a yellow dress smiles in a car. Who is she?</h2></div>'
    + '<div class="ev-escolhas" role="group" aria-label="Your guess">' + HIPOTESES.map(function (h, i) { return '<button type="button" class="ev-escolha' + (e.hip === i ? ' sel' : '') + '" data-a="ev-hip" data-n="' + i + '" aria-pressed="' + (e.hip === i) + '">' + h + '</button>'; }).join('') + '</div>'
    + (e.hip >= 0 ? '<p class="ev-diz">Say it in one sentence: <b>I think she is …</b> / <b>I’m not sure.</b> Then go to the clues.</p>' + mostra('hipmod', 'I think she is Other Mommy. She smiles a lot, and she doesn’t look like a real mom.', 1) : '<p class="ev-diz">Choose one. There is no right answer yet: the clues come next.</p>') + '</div>';
}

/* IV · as três pistas e o quadro */
var EV_CX = { ver: 'I see it', inc: 'I’m not sure' };
function evAbas(e) {
  return '<div class="ev-abas" role="tablist">' + PISTAS.map(function (p, i) { var feitas = p.f.filter(function (f, j) { return e.cl[i * 2 + j]; }).length; return '<button type="button" role="tab" class="ev-aba' + (e.pista === i ? ' sel' : '') + '" data-a="ev-pista" data-n="' + i + '" aria-selected="' + (e.pista === i) + '">' + p.k + '<i>' + feitas + ' / 2</i></button>'; }).join('')
    + '<button type="button" role="tab" class="ev-aba quadro' + (e.pista === 3 ? ' sel' : '') + '" data-a="ev-pista" data-n="3" aria-selected="' + (e.pista === 3) + '">Your board<i>' + Object.keys(e.cl).length + ' / 6</i></button></div>';
}
function evFrase(k) {
  var f = FRASES[k], esc = S.ev.cl[k];
  return '<div class="ev-frase' + (esc ? ' feita' : '') + '"><p>' + f.t + '</p><div class="ev-bt">'
    + ['ver', 'inc'].map(function (cx, j) { return '<button type="button" class="ev-cx ' + cx + (esc === cx ? ' sel' : '') + '" data-a="ev-cl" data-n="' + (k * 2 + j) + '" aria-pressed="' + (esc === cx) + '">' + EV_CX[cx] + '</button>'; }).join('') + '</div>'
    + (esc ? '<p class="ev-por">' + (esc === 'ver' ? 'The teacher asks: <b>Where do you see it?</b>' : 'The teacher asks: <b>Why are you not sure?</b>') + '</p>' + mostra('prova' + k, '<span class="ev-prova">What the clip shows: ' + f.prova + '</span>', 1) : '') + '</div>';
}
function evQuadro(e) {
  var col = function (cx) {
    var it = FRASES.map(function (f, k) { return [f, k]; }).filter(function (p) { return e.cl[p[1]] === cx; });
    return '<div class="ev-col ' + cx + '"><small>' + EV_CX[cx] + '</small>' + (it.length ? '<ul>' + it.map(function (p) { return '<li>' + p[0].t + '<i>' + PISTAS[p[0].pista].k.split(' · ')[0] + '</i></li>'; }).join('') + '</ul>' : '<p class="ev-vazio">Nothing here yet.</p>') + '</div>';
  };
  var antes = e.hip >= 0 ? HIPOTESES[e.hip] : 'no guess yet';
  return '<div class="ev-quadro"><div class="ev-cols">' + col('ver') + col('inc') + '</div>'
    + '<div class="ev-rev vd"><small>Your first guess: <b>' + antes + '</b></small><h3>And now? Keep it or change it.</h3><div class="ev-escolhas">'
    + HIPOTESES.map(function (h, i) { return '<button type="button" class="ev-escolha' + (e.rev === i ? ' sel' : '') + '" data-a="ev-rev" data-n="' + i + '" aria-pressed="' + (e.rev === i) + '">' + h + '</button>'; }).join('') + '</div>'
    + (e.rev >= 0 ? '<p class="ev-diz">' + (e.rev === e.hip ? 'You kept it. Say why, with one clue.' : 'You changed it. Which clue changed your mind?') + ' Then three sentences: <b>She has …</b> · <b>She wears …</b> · <b>She doesn’t …</b> And ask: <b>Does she …?</b></p>' + mostra('perfil', 'She has long dark hair and bangs. She wears a yellow dress. She doesn’t say her name. Does she live in the house?', 1) : '') + '</div></div>';
}
R.letra = function (c) {
  var e = S.ev, corpo;
  if (e.pista === 3) corpo = evQuadro(e);
  else {
    var x = PISTAS[e.pista];
    corpo = '<div class="ev-pista"><div class="om-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="om-cred">' + x.k + ' · ' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · the official trailer · it stops by itself</small></div>'
      + '<div class="lado-l"><p class="ev-olhe"><small>Watch for</small>' + x.olhe + '</p>' + evFrase(e.pista * 2) + evFrase(e.pista * 2 + 1) + '</div></div>';
  }
  return cab(c) + evAbas(e) + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { papel: 'tela', toque: 'Tap the verbs after she', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.lanterna = function (c) {
  return cab(c) + FM.fala('tiro', TIROS, {
    rotulo: 'Clue', prox: 'Next clue', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + maes(feitas, atual, atual >= 0 ? nova : 0) + '</div>'; },
    fim: 'The flashlight found every difference. Now compare the two mothers for the teacher: “Mommy wears…, but Other Mommy wears…”'
  });
};

R.familia = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('fr', VG_RODA) + '</div><div class="lado-l">' + FM.ex('fu', VG_USA) + '</div></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="om-centro"><p class="om-dica">Questions.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };
/* o pós-trailer: só valores fixos (o mesmo toque repetido não muda nada), para o clique repetido pelo fio e o estado pedido na recarga chegarem ao mesmo lugar */
TOQUES['ev-hip'] = function (b, n) { if (S.ev.hip === n) return false; S.ev.hip = n; S.ev.n++; };
TOQUES['ev-pista'] = function (b, n) { if (S.ev.pista === n) return false; S.ev.pista = n; S.ev.n++; };
TOQUES['ev-cl'] = function (b, n) { var k = n >> 1, cx = n & 1 ? 'inc' : 'ver'; if (S.ev.cl[k] === cx) return false; S.ev.cl[k] = cx; S.ev.n++; };
TOQUES['ev-rev'] = function (b, n) { if (S.ev.rev === n) return false; S.ev.rev = n; S.ev.n++; };
/* RECARGA E ENTRADA TARDIA (08/10): o fio da sala só refaz a cena; os toques de antes não voltam.
   Quem acaba de abrir pede o estado ao outro lado pelo canal aula-estado (o que o fio já tem);
   o outro responde com o S.ev dele, e fica a versão com mais toques. Fora da sala não faz nada. */
function evManda(tipo) { try { if (window.__wlSalaEstado) window.__wlSalaEstado({ om: tipo, ev: S.ev }); } catch (e) { /* segue */ } }
window.addEventListener('wl-sala-estado', function (ev) {
  var d = ev.detail; if (!d || !d.om) return;
  if (d.om === 'pede') { if (S.ev.n > 0) evManda('estado'); return; }
  if (d.om === 'estado' && d.ev && typeof d.ev.n === 'number' && d.ev.n > S.ev.n) {
    var v = d.ev, ok = function (x, max) { return typeof x === 'number' && x >= -1 && x <= max; };
    if (!ok(v.hip, 2) || !ok(v.rev, 2) || !ok(v.pista, 3)) return;
    var cl = {}; Object.keys(v.cl || {}).forEach(function (k) { if (+k >= 0 && +k < FRASES.length && (v.cl[k] === 'ver' || v.cl[k] === 'inc')) cl[+k] = v.cl[k]; });
    S.ev = { hip: v.hip, pista: v.pista, cl: cl, rev: v.rev, n: v.n }; pinta();
  }
});
[1200, 3500].forEach(function (t) { setTimeout(function () { evManda('pede'); }, t); });
/* a cada 8 s, quem tem toques manda o estado: depois de uma queda do canal sem recarga, o lado que perdeu toques alcança o outro (fica sempre a versão com mais toques). A classe de escolhido é 'sel', não 'on': o fio lê 'on' como acerto e o painel do professor pintaria a escolha de verde. */
setInterval(function () { if (S.ev.n > 0) evManda('estado'); }, 8000);

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'imagem', img: 'armario', alt: 'A dark bedroom at night, the closet door open, the moon in the window', rotulo: 'The closet', rot: 'I · The Closet', t: 'Before the trailer: a door in the dark.', p: 'One question at a time. The student answers; then the teacher answers too.',
  itens: [
    { q: 'Look at the closet. What is in it? Guess.', ex: 'Clothes… and maybe a monster!' },
    { q: 'Is there a closet in your bedroom? What does it have?', ex: 'Yes. It has my clothes and my old toys.' },
    { q: 'Who in your family is scared of the dark?', ex: 'My little brother. He sleeps with the light on.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'perguntas', rot: 'VIII · Questions', t: 'Questions: what do you know about her?', p: 'Use your board from VI. Answer with she + -s, she doesn’t, and Does she…? Then the teacher asks: How do you know?',
  itens: [
    { get q() { var v = FRASES.filter(function (f, k) { return S.ev.cl[k] === 'ver'; }).length; return 'Describe the woman in the yellow dress in three sentences.<small class="fm-apoio">Your board has ' + v + ' “I see it” sentence' + (v === 1 ? '' : 's') + '. Help: She has … · She wears … · She …s</small>'; },
      ex: 'She has long dark hair and bangs. She wears a yellow dress. She smiles a lot.' },
    { get q() { var r = S.ev.rev >= 0 ? S.ev.rev : S.ev.hip; return 'What don’t you know about her?<small class="fm-apoio">Your guess: ' + (r >= 0 ? HIPOTESES[r] : 'no guess yet') + ' Help: She doesn’t … · I’m not sure she …</small>'; },
      ex: 'She doesn’t say her name. I’m not sure she is the mommy.' },
    { q: 'Ask the teacher two questions about her.<small class="fm-apoio">Help: Does she …? · Does she have …? · Does she wear …?</small>', ex: 'Does she live in the house? Does she want to stay?' },
    { q: 'Optional: one person in your family, in one sentence.<small class="fm-apoio">Help: My … has … and wears …</small>', ex: 'My mother wears glasses and she has short hair.' }
  ],
  depois: 'The teacher asks: <b>How do you know?</b> Answer with a clue: “In the car, she wears…”. Then swap: you ask the teacher.' };
/*FIM@@*/
