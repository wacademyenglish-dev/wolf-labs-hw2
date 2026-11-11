/* ============================================================
   SEVERANCE · MACRODATA REFINEMENT · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · voz passiva: be + particípio (it was done, they are
   told), presente / passado / will be / has been, by + agente quando
   importa, a pergunta (Was it done?), o negativo (wasn’t told).
   Erros: sem be (it done), particípio errado (was did, was took, was
   wrote), be sem particípio (is clean / was close), concordância (the
   files was), do na passiva (Did it was…?), by quando não precisa,
   from no lugar de by.
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo ARQUIVO
   CONFIDENCIAL.
   A tela forte: a tela de macrodados da Lumon. Uma grade de números;
   oito grupos de números “assustadores” tremem. Cada passiva certa
   refina um grupo (os números somem para a caixa) e enche uma das oito
   caixas embaixo até 100%.
   O AQUECIMENTO (aquece.js): a pilha. O FECHAMENTO (final.js): um
   minuto.
   O VÍDEO: xEQP4VVuyrY (trailer oficial Apple TV, 2:55, idade 0, embed
   sim). Tempos da legenda (conferidos antes): 0:12, 0:31, 0:50, 1:10,
   1:25; cada momento contado com palavras nossas.
   A CARA: preto-azulado de terminal antigo, verde-água dos números,
   bege de escritório anos 70; Space Grotesk não (usado), então Atkinson
   + VT323 nos números. A antiga era o quadro do caso.
   Fila: FILA-LIVE-386.md · 294.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: duas opiniões antes; achar a palavra errada e escolher a
   certa, com ▶ nas falas do trailer (legenda-dados.js); depois, agora /
   antes / depois (is, was, will be). V: o memorando da Lumon (a carta) →
   completar a regra. VI: os macrodados com SEIS grupos, certo ou errado
   (cada resposta certa refina um grupo). VII (era EXTRA): monte a pergunta
   passiva e entreviste o professor.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'mesa', rot: 'I · Warm-up and The Lumon Rules', t: 'Before the trailer: your job, then a job where nothing is explained.', p: 'Answer three questions about your life. Then read the rules of Lumon and say if you could work there.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Severance. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'mesa', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'mesa', rot: 'V · Flip to Passive', t: 'Active on the left. Passive on the right.', p: 'Flip each sentence. Notice what steps to the front. Then flip four on your own.' },
  { k: 'regra', est: 'f', min: 7, img: 'neve', rot: 'VI · The Memo', t: 'A memo from Lumon. It was done. Nobody says by whom.', p: 'Read the memo out loud. Tap the passive verbs. Then finish the rule.' },
  { k: 'macro', est: 'o', min: 7, img: 'mesa', rot: 'VII · Macrodata Refinement', t: 'Six scary groups of numbers. Right or wrong? Say it right, and the group is refined.', p: 'Read the sentence. Tap Right or Wrong. If it is wrong, say it right out loud.' },
  { k: 'arquivo', est: 'o', min: 7, img: 'neve', rot: 'VIII · Your File', t: 'Interview your teacher: where was it made, when was it built?', p: 'Build each question out loud. Tap Check. Then ask it, and find one thing you have in common.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · One Minute', t: 'One minute.', p: 'Minute.' }
];

var SERIE = 'Severance', ANO = '2022';
var YT = 'xEQP4VVuyrY', DUR = 175;

var ENCARTE = [
  ['The show', '<i>Severance</i> is an Apple TV series (2022) created by Dan Erickson. Adam Scott is Mark S.'],
  ['The procedure', 'Mark works at Lumon Industries. A small chip cuts his memory in two: at work he doesn’t remember his life, and at home he doesn’t remember his work.'],
  ['The job', 'Every day, numbers are sorted on old computers. Nobody knows why. Things are done, and nobody says by whom.']
];

var ANTES = [
  { q: 'Would you forget your work every day when you go home? Why?', h: 'Yes, I would … / No, because …' },
  { q: 'What is done in your company or school that nobody understands?', h: 'A lot of forms are … / Meetings are …' }
];
var DEPOIS = [
  { q: 'What is done to Mark’s memory?', h: 'His memory is …' },
  { q: 'What was Mark told about Petey?', h: 'He was told that …' }
];

var TRECHOS = [
  { k: 'The procedure', ini: 10, fim: 28, ouvir: 'What did Mark choose?', sentido: 'Mark says his name and that he chose, freely, to have the procedure called Severance.', gram: 'The procedure <b>is called</b> Severance.' },
  { k: 'Consent', ini: 28, fim: 48, ouvir: 'What does Mark agree to?', sentido: 'He gives permission: his memories will be divided between work and home.', gram: 'His memories <b>are cut</b> in two.' },
  { k: 'Going home', ini: 48, fim: 62, ouvir: 'What will he remember at home?', sentido: 'When he goes home, he will not remember anything from work.', gram: 'Nothing <b>will be remembered</b>.' },
  { k: 'Petey', ini: 68, fim: 87, ouvir: 'What happened to Petey?', sentido: 'Mark’s best friend is gone. The supervisor says they would like to explain, but they can’t.', gram: 'Mark <b>wasn’t told</b> what happened.' },
  { k: 'Promotion', ini: 84, fim: 100, ouvir: 'What is Mark given?', sentido: 'Mark gets a new job: department chief. Everyone says congratulations, and shakes his hand.', gram: 'He <b>was promoted</b>, but nobody said why.' }
];

var TRAPS = [
  ['Don’t forget be', 'The file done in the morning.', 'The file <b>was done</b> in the morning.', 'be + past participle'],
  ['The participle', 'The numbers were took to the bin.', 'The numbers were <b>taken</b> to the bin.', 'do → done · take → taken · write → written'],
  ['One or many', 'The files was sorted.', 'The files <b>were</b> sorted.', 'it was · they were'],
  ['The question', 'Did it was done?', '<b>Was</b> it done?', 'Was / Is / Are + subject + participle']
];

/* os macrodados: o gesto forte */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, mc: { n: 0, esc: -1 } };

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'be + <b>past participle</b><br>is / are · was / were · <b>will be</b><br>wasn’t / weren’t + participle<br><b>Was</b> it done? (no did)<br>by + who: only if it matters';
/* III · antes: duas opiniões (sem resposta certa) */
var VD_ESC0 = { formato: 'escolhe', titulo: 'Before you watch', itens: [
  { p: 'Would you take the procedure and forget your work every night?', o: ['Yes', 'No', 'Maybe'], c: -1, d: 'Say why: I would … because … / I wouldn’t … because …' },
  { p: 'At work or school, what do you want to forget?', o: ['The meetings', 'The emails', 'Nothing'], c: -1, d: 'Say it: … is done every day, and I want to forget it.' }
] };
/* III · durante: achar a palavra errada e escolher a certa, cada um no minuto do trailer (legenda-dados.js) */
var VD_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: 'Hello, my name is <u>Peter</u> S.', r: 'Mark', t: '0:13' },
  { f: 'I give <u>permission</u> to sever my memories between my work life and my personal life.', r: 'consent', t: '0:31' },
  { f: 'PD is no longer with this <u>school</u>.', r: 'company', t: '1:14' },
  { f: 'I’m your best <u>teacher</u>.', r: 'friend', t: '1:52' }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'Pick the word you hear.', itens: [
  { p: 'Nor will I retain … memories when I return home.', o: ['work', 'school'], c: 0, tm: '0:50' },
  { p: 'I confer upon you the advanced role of department …', o: ['cook', 'chief'], c: 1, tm: '1:27' },
  { p: 'I’m from …', o: ['Chicago', 'work'], c: 1, tm: '1:48' }
] };
/* III · depois: agora, antes ou depois */
var VD_SEP = { formato: 'separa', titulo: 'After the trailer: now, before or later? Sort the sentences.', caixas: ['Now · is / are', 'Before · was / were', 'Later · will be'], itens: [
  { t: 'The numbers are sorted.', c: 0 }, { t: 'Mark was promoted.', c: 1 }, { t: 'Everything will be forgotten.', c: 2 },
  { t: 'The files were taken away.', c: 1 }, { t: 'His memory is cut in two.', c: 0 }, { t: 'Nothing will be remembered at home.', c: 2 }
] };
/* V · o memorando da Lumon (texto nosso) → a regra */
var CARTA = { de: 'LUMON INDUSTRIES · Memo to the Macrodata team',
  txt: 'Good morning. The numbers [[are sorted]] every day. The files [[were taken]] to the basement last night. A new quota [[was set]] by Ms. Cobel. Nobody [[was told]] why. Everything [[will be forgotten]] at 5 p.m. Please enjoy each file equally.' };
var REGRA = [
  { a: 'be + past participle. The numbers ', par: ['are sorted', 'are sort'], c: 0, b: ' every day.' },
  { a: 'Irregular verbs: the files ', par: ['were took', 'were taken'], c: 1, b: ' to the basement.' },
  { a: 'One thing: was. A new quota ', par: ['was', 'were'], c: 0, b: ' set by Ms. Cobel.' },
  { a: 'The negative: nobody ', par: ['didn’t told', 'was told'], c: 1, b: ' why.' },
  { a: 'The future: everything ', par: ['will be forgotten', 'will forgotten'], c: 0, b: ' at 5 p.m.' }
];
/* VI · os macrodados: seis grupos, certo ou errado */
var GRUPOS = [
  { arquivo: 'Siena', f: 'The numbers are sorted every day.', t: true, c: 'Yes. Ask: What is done in your home every day?' },
  { arquivo: 'Cold Harbor', f: 'Mark promoted last week.', t: false, c: 'Say it right: Mark <b>was promoted</b> last week.' },
  { arquivo: 'Allentown', f: 'The files were took to the basement.', t: false, c: 'Say it right: The files were <b>taken</b> to the basement.' },
  { arquivo: 'Tumwater', f: 'Mark wasn’t told the truth.', t: true, c: 'Yes. Ask: Were you ever not told something important?' },
  { arquivo: 'Labrador', f: 'Did the job was done in the morning?', t: false, c: 'Say it right: <b>Was</b> the job <b>done</b> in the morning?' },
  { arquivo: 'Eagan', f: 'Everything will be forgotten at 5 p.m.', t: true, c: 'Yes. Ask: What will be forgotten in your life one day?' }
];
/* VII · monte a pergunta e entreviste o professor */
var PERGUNTAS = [
  { p: '(where · your phone · make)?', r: 'Where <b>was</b> your phone <b>made</b>?' },
  { p: '(when · your house · build)?', r: 'When <b>was</b> your house <b>built</b>?' },
  { p: '(what · your city · know for)?', r: 'What <b>is</b> your city <b>known</b> for?' },
  { p: '(what · you · ask to do · at work)?', r: 'What <b>are</b> you <b>asked</b> to do at work?' },
  { p: '(who · you · name after)?', r: 'Who <b>were</b> you <b>named</b> after?' }
];

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
  return '<div class="sv-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a grade de números: 16 colunas x 7 linhas, dígitos fixos por posição; oito grupos de 4 a 5 números; o da vez treme, os refinados somem; embaixo, oito caixas com a porcentagem */
var GRADE_W = 16, GRADE_H = 7;
var CLUSTERS = [[1,1],[6,2],[11,1],[3,4],[8,5],[13,4]];
function digito(x, y) { var h = (x * 374761393 + y * 668265263) | 0; h = (h ^ (h >>> 13)) * 1274126177 | 0; return Math.abs(h ^ (h >>> 16)) % 10; }
function grupoDe(x, y) {
  for (var g = 0; g < CLUSTERS.length; g++) { var c = CLUSTERS[g]; if (Math.abs(x - c[0]) + Math.abs(y - c[1]) <= 1 || (x === c[0] + 1 && y === c[1] + 1)) return g; }
  return -1;
}
function macro(feitas, atual, nova) {
  var cel = '';
  for (var y = 0; y < GRADE_H; y++) for (var x = 0; x < GRADE_W; x++) {
    var g = grupoDe(x, y), cls = g < 0 ? '' : g < feitas ? (nova && g === feitas - 1 ? ' foi novo' : ' foi') : g === atual ? ' medo' : '';
    cel += '<span class="sv-n' + cls + '">' + digito(x, y) + '</span>';
  }
  var caixas = GRUPOS.map(function (g, i) {
    var p = i < feitas ? 100 : 0;
    return '<div class="sv-caixa' + (i === atual ? ' vez' : '') + (i < feitas ? ' cheia' : '') + '"><b>0' + (i + 1) + '</b><i style="width:' + p + '%"></i><small>' + p + '%</small></div>';
  }).join('');
  var fim = feitas >= GRUPOS.length;
  return '<div class="sv-tela vd" role="img" aria-label="Macrodata refinement: ' + feitas + ' of ' + GRUPOS.length + ' groups refined"><div class="sv-topo"><span>' + (atual >= 0 && atual < GRUPOS.length ? GRUPOS[atual].arquivo : 'Cold Harbor') + '</span><span>' + Math.round(feitas / GRUPOS.length * 100) + '% complete</span></div>'
    + '<div class="sv-grade">' + cel + '</div><div class="sv-caixas">' + caixas + '</div>'
    + (fim ? '<p class="sv-meta">Quota met. Please enjoy each refinement equally.</p>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · passive voice · it was done · by whom?</span><h1>It Was Done in the Morning</h1>'
    + '<p class="banda">' + SERIE + ' · Apple TV</p>'
    + '<p class="sub">At Lumon, a man’s memory is cut in two. Every day, numbers are sorted; nobody knows why, and nobody says by whom. Tonight you sit at the old computer: say each sentence right, and the scary numbers are refined.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Begin refining</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r sv-foto"><img src="' + img('capa') + '" alt="A long empty office corridor with green carpet in dim teal light"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="sv-encarte vd"><div class="sv-capinha"><img src="' + img('mesa') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>Macrodata Refinement</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="sv-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Your work memories are erased every night. Is it a dream or a nightmare?</h2></div>' + mostra('enc', 'A nightmare. My work is part of my life. I don’t want it to be erased.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_ESC0) + '</div>'
    + '<div class="lado-l"><div class="sv-selo vd"><b>' + SERIE + '</b><small>the official trailer · about three minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="sv-video"><div class="sv-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="sv-cred">' + SERIE + ' · official trailer (Apple TV) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('erro', VD_ERRO) + FM.ex('esc', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="sv-centro">' + FM.ex('sep', VD_SEP) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="sv-video"><div class="sv-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="sv-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="sv-sentido">' + x.sentido + '</span><span class="sv-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="sv-centro"><p class="sv-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { papel: 'tela', toque: 'Tap the passive verbs.', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.macro = function (c) {
  var e = (S.fq || {}).mc, n = 0;
  GRUPOS.forEach(function (g, i) { var r = e && e.r && e.r[i]; if (r != null && (r === 't') === !!g.t) n++; });
  var fim = n >= GRUPOS.length;
  return cab(c) + comPlaca('<div class="fm-obj">' + macro(n, fim ? -1 : n, 0) + '</div>'
    + FM.ex('mc', { formato: 'verdadeOuMentira', titulo: 'Right or wrong? If it’s wrong, say it right.', rotulos: ['Right', 'Wrong'], itens: GRUPOS.map(function (g) { return { f: g.f, t: g.t, c: g.c }; }) })
    + (fim ? '<p class="fm-nota" style="text-align:center">Quota met. Now say the report for Ms. Cobel: three things that were done today.</p>' : ''), PRESA);
};

R.arquivo = function (c) {
  return cab(c) + FM.pergunta('ask', PERGUNTAS, { regra: PRESA, titulo: 'Build the question. Ask your teacher.', depois: ['We both …', 'You …, but I …', 'Me too!'] });
};

R.fim = function (c) {
  return cab(c) + '<div class="sv-centro"><p class="sv-dica">One minute.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'pilha', rot: 'I · Finish It', t: 'Before the trailer: your day, as a file writes it.', p: 'Turn one card at a time and finish it out loud. Then the teacher finishes it too.', rotulo: 'Finish it',
  depois: 'Which card was the most surprising? Say it again.',
  itens: [
    { q: 'Today, my coffee was made by …', ex: '… me. Nobody makes it for me!' },
    { q: 'I was born in … and I was named …', ex: '… 1992, and I was named after my aunt.' },
    { q: 'At work or school, I am often asked to …', ex: '… help with the computers.' },
    { q: 'My house was built …', ex: '… about thirty years ago.' },
    { q: 'Something I was never told as a child: …', ex: 'how much my parents worked.' },
    { q: 'One day, my name will be …', ex: '… forgotten. Or maybe remembered!' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'minuto', rot: 'VIII · One Minute', t: 'One minute of passive voice.', p: 'Pick a topic. Talk for one minute in the passive. Then the teacher.',
  temas: [
    { t: 'How your favorite food is made', ajuda: 'First, the … is cut. Then it is … It is served with …' },
    { t: 'Your city: what was built, what is known', ajuda: 'It was founded in… It is known for… A new … was built…' },
    { t: 'A day at Lumon', ajuda: 'The numbers are sorted… Nothing is explained… Everything is forgotten…' }
  ],
  palavras: ['is made', 'was built', 'is known for', 'were told', 'will be', 'by'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G7 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'vira', titulo: 'The office, flipped. Watch the words move.',
  frases: [
    { de: ['Lumon', 'built', 'the office', '.'], para: ['*The office', '+was built', '*by Lumon', '.'], d: 'The thing goes first. Was + built. The doer moves to the end, with by.' },
    { de: ['The team', 'refines', 'the numbers', 'every day', '.'], para: ['*The numbers', '+are refined', '*by the team', 'every day', '.'], d: 'Now: are + refined. More than one number: are.' },
    { de: ['*Did', 'Lumon', 'tell', 'Mark', '?'], para: ['*Was', '*Mark', '+told', '?'], d: 'A question: was goes first. No did.' }
  ],
  notaBotao: 'What moves?',
  nota: 'What the action happens to goes first. Then <b>be + third form</b>: was built, are refined, was told. The doer is optional: by Lumon only when it matters. In a question, <b>Was</b> Mark told?',
  pergunta: 'Your turn. Flip it out loud, then check.',
  treino: [
    { de: 'Someone moved the files last night.', r: 'The files <b>were moved</b> last night.' },
    { de: 'Someone writes the memo every morning.', r: 'The memo <b>is written</b> every morning.' },
    { de: 'Did they tell Mark about the door?', r: '<b>Was</b> Mark <b>told</b> about the door?' },
    { de: 'They didn’t finish the work.', r: 'The work <b>wasn’t finished</b>.' }
  ],
  uso: { p: 'Your turn. Something that is done at your work or school every day. Say it in the passive.', molde: ['The reports are …', 'The office is …'], ex: 'The reports are checked every morning. The office is cleaned at night.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_vira', GX_EXPLICA); };
