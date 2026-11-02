/* ============================================================
   OBSESSION · THE REWIND · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · modais no passado (arrependimento e crítica): should /
   shouldn’t have + particípio, could have (havia outra saída), couldn’t
   have (era impossível), needn’t have (fiz, mas não precisava), What
   should I have done?
   Erros: have + verbo base (shouldn’t have make), should had, sem o
   have (could asked), should of, needn’t have to, passado simples no
   lugar do particípio (have drank, have knew), modal sem have para o
   passado (shouldn’t drink last night), pergunta sem inversão, must
   have no lugar de should have.
   Catálogo WOLFLIX Live (07/10): família TERROR, modo ESCOLHA.
   A tela forte: a fita VHS rebobinando. Uma fita de vídeo com a janela
   dos dois carretéis e o visor do videocassete; cada frase certa volta a
   noite um momento (de 2:00 da manhã até as 18:45): o carretel da
   esquerda cresce, o da direita encolhe, o visor mostra a hora e o
   momento entra na lista. No fim, a fita está no começo: antes do
   desejo.
   O AQUECIMENTO (aquece.js): a imagem, a fita velha. O FECHAMENTO:
   escrita, uma carta para o ano passado, vai para My notes.
   O VÍDEO: gMC8kkwbIQQ (trailer oficial, 2:13, idade 0, embed sim). Tem
   sustos e gritos: o professor avisa antes. Tempos lidos da legenda
   (yt-dlp, 07/10), contados com palavras nossas.
   A CARA: rosa da obsessão, verde do visor de videocassete;
   Bricolage Grotesque no título, Crimson Pro no texto, Share Tech Mono
   só no visor. A antiga era o filme que começa pelo fim.
   Fila: FILA-LIVE-386.md · 305.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: pistas uma a uma antes; qual palavra você ouviu + achar a
   palavra errada, com ▶ nas falas do trailer; depois, separar "should have" ×
   "couldn’t have". V: achar a palavra errada nas mensagens do Bear e a placa da
   regra. VI: a fita com SEIS momentos; o aluno diz a frase de cada cartão e
   toca o cartão (a fita volta). VII (era EXTRA, agora essencial): seis
   perguntas sobre a sua vida, toque sim ou não e diga a frase.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'loja', rot: 'I · Warm-up and Put It in Order', t: 'Before the trailer: what you should have done, then one wish and no way back.', p: 'Answer three questions about your life. Then put four moments of Bear’s story in order and say what he should have done.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Obsession. The official trailer.', p: 'Open the clues first. Watch the trailer. Then three short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'loja', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'vhs', rot: 'V · Should Have', t: 'Bear’s texts: one word is wrong in every message.', p: 'Find the wrong word. Say the right one. Then tap Check.' },
  { k: 'fita', est: 'o', min: 7, img: 'vhs', rot: 'VI · The Rewind', t: 'Rewind the night. Six regrets take the tape back to before the wish.', p: 'Read the time and the clue. Say the sentence. Tap the card when you say it.' },
  { k: 'volta', est: 'o', min: 6, img: 'loja', rot: 'VII · Your Rewind', t: 'Six moments from your life. What should you have done?', p: 'Tap yes or no. Then say the sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · A Letter to Last Year', t: 'Write a letter to last year.', p: 'Use should have, shouldn’t have, could have, needn’t have. It goes to your My notes.' }
];

var FILME = 'Obsession', ANO = '2026';
var YT = 'gMC8kkwbIQQ', DUR = 133;

var ENCARTE = [
  ['The film', '<i>Obsession</i> (2026) is a horror film about love, a wish and what it costs. It is from the same story as our lesson <i>One Wish</i>, now told from the side of regret.'],
  ['The wish', 'Bear is in love with his friend Nikki and too shy to tell her. In a strange little shop he buys a branch that gives you one wish. He wishes Nikki loved him more than anyone in the world.'],
  ['The price', 'It works, too well. Nikki loves him so much that it becomes frightening. He calls to cancel the wish. They don’t do that. She will stay like this as long as he lives.']
];

var ANTES = [
  { q: 'Have you ever wanted to say something to someone, and you didn’t? What happened?', h: 'Yes, once I … / No, I always say …' },
  { q: 'If you could have one wish, what would you wish for?', h: 'I would wish for …' }
];
var DEPOIS = [
  { q: 'What should Bear have done, instead of making the wish?', h: 'He should have … / He shouldn’t have …', r: 'He should have told Nikki the truth. He shouldn’t have made the wish alone.' },
  { q: 'Is it Bear’s fault? Could he have known?', h: 'He couldn’t have known … / He should have …' }
];

var TRECHOS = [
  { k: 'Ask her out', ini: 0, fim: 30, ouvir: 'What does he try to say to Nikki?', sentido: 'His friends ask if he has ever flirted with Nikki. He tries to ask her for a drink, and he loses his words.', gram: 'He <b>should have asked</b> her out.' },
  { k: 'One wish', ini: 30, fim: 45, ouvir: 'What does he wish for?', sentido: 'You only get one wish. He wishes Nikki loved him more than anyone in the whole world.', gram: 'He <b>shouldn’t have made</b> that wish.' },
  { k: 'All of a sudden', ini: 45, fim: 68, ouvir: 'What do the friends notice?', sentido: 'Nikki loves him so, so much. The friends say it is weird how they are dating all of a sudden.', gram: 'They <b>couldn’t have known</b> about the wish.' },
  { k: 'Something is wrong', ini: 68, fim: 96, ouvir: 'Is Nikki okay?', sentido: 'Someone thinks Nikki is going through something. What kind of spell did he use? (Screams and jump scares.)', gram: 'He <b>could have stopped</b> it earlier.' },
  { k: 'Cancel a wish', ini: 115, fim: 133, ouvir: 'Can he cancel the wish?', sentido: 'He calls to cancel the wish. They don’t really do that. She will stay like this as long as he lives.', gram: 'He <b>should have read</b> the rules.' }
];

var TRAPS = [
  ['Have + participle', 'I shouldn’t have make the wish.', 'I shouldn’t have <b>made</b> the wish.', 'should / could / needn’t + have + past participle'],
  ['Have, not had or of', 'I should of told her. I should had told her.', 'I <b>should have told</b> her.', 'we say should’ve, we write should have'],
  ['Needn’t have', 'We needn’t have to buy it.', 'We <b>needn’t have bought</b> it.', 'I did it, but it wasn’t necessary'],
  ['The question', 'What I should have said?', 'What <b>should I have</b> said?', 'What should I have done?']
];

/* a fita: o gesto forte (23/10: seis momentos; cada cartão tocado volta a fita) */
var MOMENTOS = [
  { hora: '2:00 AM', pista: 'I · not make the wish', ops: ['I shouldn’t have made the wish.'] },
  { hora: '1:30 AM', pista: 'he · could · ask about the rules first (he didn’t)', ops: ['He could have asked about the rules first.'] },
  { hora: '12:40 AM', pista: 'I · tell her the truth (I didn’t)', ops: ['I should have told her the truth.'] },
  { hora: '11:50 PM', pista: 'we · not need · buy the branch (we had one)', ops: ['We needn’t have bought the branch.'] },
  { hora: '9:15 PM', pista: 'she · not possible · know about the wish', ops: ['She couldn’t have known about the wish.'] },
  { hora: '6:45 PM', pista: 'I · ask her out · like a normal person', ops: ['I should have asked her out like a normal person.'] }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'should(n’t) + have + <b>participle</b><br>could(n’t) have + participle<br><b>needn’t have</b> + participle · I did it, it wasn’t needed<br>we say should<b>’ve</b>, we write should <b>have</b><br>What <b>should I</b> have done?';
/* III · antes: pistas uma a uma */
var VD_REV = { formato: 'revela', titulo: 'Before you watch: open the clues. What happens in this film?', pistas: ['A shy man loves his friend Nikki.', 'He finds a little shop.', 'He buys the branch of a willow tree.', 'The branch gives you one wish.'], mais: 'Next clue', botao: 'I know it! Show', resposta: 'He wishes Nikki loved him more than anyone in the world. It works, and it can’t be cancelled.' };
/* III · durante: qual palavra + palavra errada, com ▶ nos tempos do trailer (legenda-dados.js) */
var VD_SOM = [
  { a: 'I ', par: ['wish', 'which'], c: 0, b: ' Nikki Freeman loved me more than anyone in the entire world.', t: '0:35' },
  { a: 'Lost my train of ', par: ['thought', 'taught'], c: 0, b: '.', t: '0:22' },
  { a: 'Only the branch of a willow ', par: ['tree', 'three'], c: 0, b: ' could …', t: '0:53' },
  { a: 'So she’s just ', par: ['stuck', 'stock'], c: 0, b: ' like this forever.', t: '2:03' }
];
var VD_ERR = [
  { f: 'I wish Nikki Freeman <u>hated</u> me more than anyone in the entire world.', r: 'loved', t: '0:35' },
  { f: 'It’s weird how you two are <u>fighting</u> all of a sudden.', r: 'dating', t: '1:00' },
  { f: 'I was calling to see if there’s a way I can <u>repair</u> a wish.', r: 'cancel', t: '1:57' }
];
/* III · depois: separar o que ele devia ter feito do que era impossível */
var VD_SEP = { formato: 'separa', titulo: 'After the trailer: what should Bear have done, and what couldn’t he have done? Tap a card, then a box. Then say it.', caixas: ['He should have …', 'He couldn’t have …'], itens: [
  { t: 'asked Nikki out like a normal person', c: 0 },
  { t: 'read the rules of the wish', c: 0 },
  { t: 'known the wish had a price', c: 1 },
  { t: 'told Nikki the truth', c: 0 },
  { t: 'guessed Nikki would be frightened', c: 1 },
  { t: 'cancelled the wish on the phone', c: 1 }
] };
/* V · achar a palavra errada */
var VD_ERR2 = { formato: 'erro', titulo: 'Bear’s texts: one word is wrong in each. Say the right one.', itens: [
  { f: 'I shouldn’t have <u>make</u> the wish.', r: 'made' },
  { f: 'I should <u>of</u> told her.', r: 'have' },
  { f: 'We needn’t have <u>buy</u> it.', r: 'bought' },
  { f: 'She couldn’t have <u>knew</u>.', r: 'known' },
  { f: 'What <u>I should</u> have said?', r: 'should I' },
  { f: 'He should have <u>ask</u> her out.', r: 'asked' }
] };
/* VI · a fita: uma frase para cada cartão */
var USA = { formato: 'usa', titulo: 'Rewind the night. Say a sentence for each card. Tap the card when you say it.', palavras: MOMENTOS.map(function (m) { return m.hora + ' · ' + m.pista; }), fim: 'The tape is at the start: before the wish. Now say three regrets of the night, out loud, as Bear.' };
/* VII · seis perguntas sobre a sua vida: toque e diga a frase */
var VD_VOL = { formato: 'escolhe', titulo: 'Six moments from your life. Tap your answer, then say the sentence.', itens: [
  { p: 'Did you buy something this year that you didn’t need?', o: ['Yes, I did.', 'No, I didn’t.'], c: -1, d: 'Say it: “I shouldn’t have bought …” or “I needn’t have bought …”' },
  { p: 'Is there something you could have studied when you were younger?', o: ['Yes, there is.', 'No, there isn’t.'], c: -1, d: 'Say it: “I could have studied …”' },
  { p: 'Did you worry about something that turned out fine?', o: ['Yes, I did.', 'No, never.'], c: -1, d: 'Say it: “I needn’t have worried about …”' },
  { p: 'Is there something you should have said to a friend?', o: ['Yes, there is.', 'No, there isn’t.'], c: -1, d: 'Say it: “I should have said …”' },
  { p: 'Did anything go wrong that you couldn’t have avoided?', o: ['Yes, it did.', 'No, nothing.'], c: -1, d: 'Say it: “I couldn’t have known …”' },
  { p: 'Did you do something this morning that you shouldn’t have?', o: ['Yes, I did.', 'No, I didn’t.'], c: -1, d: 'Say it: “I shouldn’t have …”' }
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} } };

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
/* a fita VHS: dois carretéis (o da esquerda cresce ao rebobinar), o visor com a hora e a lista dos momentos já voltados (23/10: cada cartão tocado volta a fita) */
function fita(u) {
  u = u || {}; var feitos = []; MOMENTOS.forEach(function (m, i) { if (u[i]) feitos.push(i); });
  var feitas = feitos.length, fim = feitas >= MOMENTOS.length, f = feitas / MOMENTOS.length;
  var re = (14 + 22 * f).toFixed(1), rd = (36 - 22 * f).toFixed(1);
  var hora = feitas ? MOMENTOS[feitos[feitos.length - 1]].hora : '2:13 AM';
  var lista = feitos.map(function (i) { return '<li><b>' + MOMENTOS[i].hora + '</b><span>' + MOMENTOS[i].ops[0] + '</span></li>'; }).reverse().slice(0, 3).join('');
  return '<div class="ob-deck vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The tape: ' + feitas + ' of ' + MOMENTOS.length + ' moments rewound">'
    + '<svg class="ob-svg" viewBox="0 0 400 190" aria-hidden="true"><rect class="ob-corpo" x="10" y="8" width="380" height="174" rx="10"/>'
    + '<rect class="ob-etiqueta" x="60" y="20" width="280" height="34" rx="3"/><text class="ob-titulo-fita" x="200" y="43" text-anchor="middle">the night of the wish</text>'
    + '<rect class="ob-janela" x="100" y="70" width="200" height="80" rx="6"/>'
    + '<g class="ob-car" style="--cx:150px;--cy:110px"><circle class="ob-fita-rolo" cx="150" cy="110" r="' + re + '"/><circle class="ob-cubo" cx="150" cy="110" r="10"/><path class="ob-raio" d="M150 100 V120 M140 110 H160"/></g>'
    + '<g class="ob-car" style="--cx:250px;--cy:110px"><circle class="ob-fita-rolo" cx="250" cy="110" r="' + rd + '"/><circle class="ob-cubo" cx="250" cy="110" r="10"/><path class="ob-raio" d="M250 100 V120 M240 110 H260"/></g></svg>'
    + '<div class="ob-visor"><span>' + (fim ? '■ STOP' : '◀◀ REW') + '</span><b>' + hora + '</b></div>'
    + '<ol class="ob-lista">' + (lista || '<li class="vazio"><span>Press rewind. Go back to before the wish.</span></li>') + '</ol></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · past modals · should have, could have, needn’t have</span><h1>I Shouldn’t Have Wished</h1>'
    + '<p class="banda">' + FILME + ' · in cinemas 2026</p>'
    + '<p class="sub">He bought a branch that gives you one wish, and he wished she loved him more than anyone in the world. It worked. It can’t be cancelled. Tonight you put the night on tape and rewind it, regret by regret, to the moment before the wish.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Press rewind</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r ob-foto"><img src="' + img('capa') + '" alt="A weeping willow tree at night in a dark park with a faint pink glow"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="ob-encarte vd"><div class="ob-capinha"><img src="' + img('loja') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The little shop</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="ob-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Bear can’t cancel the wish. What should he have done instead?</h2></div>' + mostra('enc', 'He should have talked to Nikki. He shouldn’t have used magic.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REV) + '</div>'
    + '<div class="lado-l"><div class="ob-selo vd"><b>' + FILME + '</b><small>the official trailer · horror, jump scares and screams · about two minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="ob-video"><div class="ob-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="ob-cred">' + FILME + ' · official trailer · tap a time to hear it again</small></div><div class="lado-l">' + FM.som('som', VD_SOM) + FM.erro('erro', VD_ERR) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="ob-centro">' + FM.ex('v2', VD_SEP) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="ob-video"><div class="ob-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="ob-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="ob-sentido">' + x.sentido + '</span><span class="ob-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="ob-centro"><p class="ob-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  /* a placa da regra aparece quando o aluno já achou as seis palavras */
  var e = (S.fq && S.fq.rg) || {}, corpo = FM.ex('rg', VD_ERR2);
  return cab(c) + (e.ver ? comPlaca(corpo, PRESA) : corpo);
};

R.fita = function (c) {
  var u = (S.fq && S.fq.ft && S.fq.ft.u) || {};
  return cab(c) + '<div class="fm-lado2">' + fita(u) + comPlaca(FM.ex('ft', USA), PRESA) + '</div>';
};

R.volta = function (c) {
  return cab(c) + comPlaca(FM.ex('vo', VD_VOL), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Dear last year,\nI should have …\nI shouldn’t have …\nI needn’t have …', 'A letter to last year',
    ['should have', 'shouldn’t have', 'could have', 'needn’t have', 'couldn’t have', 'instead'], ['A letter to last year', 'Write to last year: what you should and shouldn’t have done, what you could have done, and what you needn’t have worried about.'])
    + '<div class="lado-fim"><div class="grande vd"><span>I <u>should have called</u></span><span>I <u>needn’t have worried</u></span><span>it <u>couldn’t have been</u> worse</span><span>not <s>should of</s>, not <s>shouldn’t have went</s></span></div>'
    + mostra('fim', 'Dear last year, I should have spent more time with my parents. I shouldn’t have worked every weekend. I could have traveled more, and I needn’t have worried so much about money. This year will be different.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'imagem', img: 'vhs', alt: 'An old video tape on a table next to an old television with static', rotulo: 'The old tape', rot: 'I · The Old Tape', t: 'Before the trailer: a tape you shouldn’t watch.', p: 'One question at a time. The student answers; then the teacher answers too.',
  itens: [
    { q: 'You find this old tape at your parents’ house. What is on it?', ex: 'My birthday party when I was five. I was crying!' },
    { q: 'What is one small thing you should have done last week?', ex: 'I should have called my grandmother.' },
    { q: 'If you had one wish today, would you use it, or save it?', ex: 'I would save it. I am afraid of wishes.' }
  ] };
/*AQ@@*/
