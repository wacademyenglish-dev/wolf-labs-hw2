/* ============================================================
   DISCLOSURE DAY · THE REDACTED FILE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · passive reporting: as duas portas. It is said / believed /
   thought / known that + oração; ou sujeito + is said / believed + to +
   verbo, to have + particípio para o passado, to be para estado.
   Erros: It says / It believes that (o “diz-se que” do português), as
   duas portas coladas (He is said that he stole), to + passado (to
   stole), is believe (sem particípio), voz ativa no lugar da passiva
   (The signal thinks to), sem be (The reporter reported to have),
   Is known that sem It, to are, is com plural, to have knew.
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo ARQUIVO.
   A tela forte: o arquivo do governo com tarjas pretas. Uma folha
   datilografada do arquivo secreto, oito linhas cobertas por tarjas;
   cada frase certa arranca uma tarja e a linha aparece por baixo, na
   voz de quem não quer assumir quem disse. No fim, a folha inteira está
   aberta: liberada ao público. A 298 (o mesmo filme) era o relógio
   mundial; esta é o papel.
   O AQUECIMENTO (aquece.js): duas verdades e uma mentira. O FECHAMENTO
   (final.js): a entrevista, o professor é a repórter de Kansas City.
   O VÍDEO: icDuEHSxE-w (trailer oficial Universal, 2:43, idade 0, embed
   sim). Tenso, não gráfico. Falas conferidas na legenda (24/09),
   contadas com palavras nossas.
   A CARA: papel pardo do arquivo, preto da tarja, vermelho do carimbo;
   Big Shoulders Stencil Display no título, IBM Plex Serif no texto,
   Courier Prime só na folha. A antiga era o noticiário da estreia.
   Fila: FILA-LIVE-386.md · 307.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: separar "sabemos / acreditamos" antes; qual palavra você
   ouviu, com ▶ nas falas do trailer (nada entre 0:41 e 1:02); depois,
   escolher a resposta. V: ligar o que as pessoas dizem à forma cuidadosa; a
   placa das duas portas aparece quando tudo está ligado. VI: a folha com SEIS
   tarjas, certo ou errado: cada resposta certa arranca uma tarja. VII (era
   EXTRA, agora essencial): a roleta "o que se diz onde você mora".
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'antena', rot: 'I · Warm-up and The Secret File', t: 'Before the trailer: what is said, then eighty years of secrets.', p: 'Answer three questions about your life. Then open the file one document at a time and report what is believed.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Disclosure Day. The official trailer.', p: 'Sort first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'antena', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'estudio', rot: 'V · It Is Believed', t: 'It is believed that we are not alone.', p: 'Match what people say with the careful way. Then read the rule.' },
  { k: 'arquivo', est: 'o', min: 7, img: 'capa', rot: 'VI · The Redacted File', t: 'Six black bars on the page. Every right answer removes one.', p: 'Right or wrong? If it is wrong, say it the careful way out loud.' },
  { k: 'boatos', est: 'o', min: 5, img: 'estudio', rot: 'VII · What People Say', t: 'Six things people say where you live.', p: 'Spin the wheel. Answer with It is said that… / … is said to…' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · The Interview', t: 'The interview.', p: 'Interview.' }
];

var FILME = 'Disclosure Day', ANO = '2026';
var YT = 'icDuEHSxE-w', DUR = 163;

var ENCARTE = [
  ['The film', '<i>Disclosure Day</i> (2026), by Steven Spielberg, with Emily Blunt and Josh O’Connor.'],
  ['The file', 'A man steals a secret file from the government: proof that we are not alone. For 79 years, the truth has been hidden, and nobody official will say it out loud.'],
  ['The words', 'So the news is careful. Nobody says “we know”. They say: it is believed, it is said, he is thought to have… The passive hides who is talking.']
];

var ANTES = [
  { q: 'Do you believe the government knows things it doesn’t tell us?', h: 'Yes, I think … / No, I don’t think …' },
  { q: 'Where do you check if a piece of news is true?', h: 'I usually check …' }
];
var DEPOIS = [
  { q: 'What is the man said to have stolen?', h: 'He is said to have stolen …' },
  { q: 'Should the truth be told to everyone at once? Why?', h: 'It should be … because …' }
];

var TRECHOS = [
  { k: 'Not alone', ini: 8, fim: 24, ouvir: 'What does Spielberg believe now?', sentido: 'The director says he believes more now than when he made Close Encounters that we are not the only intelligent life in the universe.', gram: '<b>It is believed that</b> we are not alone.' },
  { k: 'Secrets', ini: 24, fim: 37, ouvir: 'What did the man steal?', sentido: 'What did you steal? Secrets. People have the right to know the truth.', gram: 'He <b>is said to have stolen</b> secrets.' },
  { k: 'Good morning', ini: 37, fim: 60, ouvir: 'What happens on the morning news?', sentido: 'A reporter starts the morning news in Kansas City, and something strange happens on air.', gram: 'She <b>is reported to have lost</b> her voice.' },
  { k: 'Cannot accept', ini: 60, fim: 80, ouvir: 'Why do some people want to stop it?', sentido: 'Someone says the human race cannot accept what they know, and they must stop it any way they can. Another says the 79-year cover-up has to end.', gram: '<b>It is known that</b> the truth was hidden.' },
  { k: 'For the better', ini: 80, fim: 100, ouvir: 'How will the truth change us?', sentido: 'The news is interrupted. How will disclosure change us? For the better, someone believes: it will remind us of our capacity for empathy.', gram: 'The truth <b>is thought to</b> change everything.' }
];

var TRAPS = [
  ['It is, not it says', 'It believes that we are not alone.', '<b>It is believed</b> that we are not alone.', 'it is said / believed / thought / known that…'],
  ['One door, not two', 'He is said that he stole the file.', 'He <b>is said to have stolen</b> the file. / <b>It is said that</b> he stole it.', 'subject + is said to… OR it is said that…'],
  ['The past: to have', 'He is said to stole the file.', 'He is said <b>to have stolen</b> the file.', 'to have + participle'],
  ['Now: to be / to + verb', 'The visitors are believed to are here.', 'The visitors are believed <b>to be</b> here.', 'to + base verb']
];

/* o arquivo com tarjas: o gesto forte */
var LINHAS = [
  { ops: ['It is believed that we are not alone.'], f: 'It is believed that we are not alone.', t: 1 },
  { ops: ['He is said to have stolen the file.'], f: 'He is said that he stole the file.', t: 0, c: 'He is said <b>to have stolen</b> the file. / <b>It is said that</b> he stole it.' },
  { ops: ['The signal is thought to come from space.'], f: 'The signal thinks to come from space.', t: 0, c: 'The signal <b>is thought</b> to come from space.' },
  { ops: ['The reporter is reported to have lost her voice.'], f: 'The reporter reported to have lost her voice.', t: 0, c: 'The reporter <b>is</b> reported to have lost her voice.' },
  { ops: ['It is known that they have hidden the truth for 79 years.'], f: 'It is known that they have hidden the truth for 79 years.', t: 1 },
  { ops: ['The visitors are believed to be already here.'], f: 'The visitors are believed to are already here.', t: 0, c: 'The visitors are believed <b>to be</b> already here.' }
];
var RECUSA = {
  it: 'Nobody in particular says it: It is believed / It is known that… (passive).',
  part: 'The passive: is + participle (is believed, is said).',
  have: 'Something in the past: to have + participle (to have stolen, to have lost).',
  dois: 'Choose one door: He is said to have stolen… OR It is said that he stole…',
  dois2: 'Choose one door: The signal is thought to come… OR It is thought that the signal comes…',
  passiva: 'Use the passive: is thought, is expected (by people).',
  is: 'Don’t forget be: is reported.',
  it2: 'Start with It: It is known that…',
  base: 'After to: the base verb (to be).',
  are: 'Plural: the visitors are believed.',
  part2: 'After to have: the participle (known).'
};

var BOATOS = [
  { k: 'Food', h: 'What is said to be the best food in your city?', ex: 'It is said that the best pizza is in my neighborhood.' },
  { k: 'A place', h: 'Which place is believed to be haunted?', ex: 'The old hospital is believed to be haunted.' },
  { k: 'A person', h: 'Who is said to be the richest person you know of?', ex: 'Our mayor is said to have three houses.' },
  { k: 'Weather', h: 'What is expected for the weather this weekend?', ex: 'It is expected to rain on Saturday.' },
  { k: 'History', h: 'What is your city known for?', ex: 'It is known for its old churches.' },
  { k: 'A legend', h: 'Is there a legend in your country? What is it believed to be?', ex: 'The Saci is believed to live in the forest.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>Door 1</b> · <b>It is said / believed / thought / known that</b> + a full sentence<br><b>Door 2</b> · subject + <b>is said / believed</b> + <b>to + verb</b> (to be = now)<br>the past: <b>to have + participle</b> (is said to have stolen)<br>never both doors: not “He is said that he…”';
/* III · antes: sabemos ou acreditamos? */
var VD_SEP = { formato: 'separa', titulo: 'Before you watch: sure or not sure? Tap the sentence, then the box.', caixas: ['It is known that… · we are sure', 'It is said / believed that… · we are not sure'], itens: [
  { t: 'The Earth goes around the Sun.', c: 0 },
  { t: 'There is life on other planets.', c: 1 },
  { t: 'Water boils at 100 degrees.', c: 0 },
  { t: 'The government hides secret files.', c: 1 },
  { t: 'Humans need sleep.', c: 0 },
  { t: 'Aliens visited the Earth in 1947.', c: 1 }
] };
/* III · durante: qual palavra você ouviu? ▶ nas falas do trailer (legenda-dados.js; nada entre 0:41 e 1:02) */
var VD_SOM = { formato: 'som', titulo: 'While you watch: which word did you hear? Tap ▶ to hear it again.', itens: [
  { a: 'I am much more ', par: ['inclined', 'included'], c: 0, b: ' now…', t: '0:10' },
  { a: 'To really ', par: ['believe', 'relieve'], c: 0, b: ' that we’re not the only civilization.', t: '0:16' },
  { a: 'What did you ', par: ['steal', 'feel'], c: 0, b: '? Secrets.', t: '0:25' },
  { a: 'The most ', par: ['extraordinary', 'ordinary'], c: 0, b: ' event in human history.', t: '0:38' },
  { a: 'The human race cannot ', par: ['accept', 'except'], c: 0, b: ' what we know.', t: '1:03' },
  { a: 'How will ', par: ['disclosure', 'closure'], c: 0, b: ' change us?', t: '1:25' }
] };
/* III · depois: escolher a resposta (sem ▶, o vídeo já passou) */
var VD_ESC = { formato: 'escolhe', titulo: 'After the trailer: choose the right answer.', itens: [
  { p: 'What did the man steal?', o: ['Secrets', 'Money'], c: 0, d: '“What did you steal? Secrets.”' },
  { p: 'Where does the morning news begin?', o: ['In Kansas City', 'In Paris'], c: 0, d: '“Good morning, Kansas City.”' },
  { p: 'What has to end?', o: ['The cover-up of the truth', 'The morning news'], c: 0, d: 'A long cover-up of the truth has to end.' },
  { p: 'How will disclosure change us, someone believes?', o: ['For the better', 'For the worse'], c: 0, d: '“…for the better.”' },
  { p: 'What will it remind us of?', o: ['Our capacity for empathy', 'Our need for sleep'], c: 0, d: '“It will remind us of our capacity for empathy.”' }
] };
/* V · ligar o que as pessoas dizem à forma cuidadosa */
var VD_LIGA = { formato: 'liga', titulo: 'What goes with what? Match what people say with the careful way.', ordemDireita: [3, 0, 5, 2, 4, 1], pares: [
  ['People say he stole the file.', 'He is said to have stolen the file.'],
  ['Experts think the signal comes from space.', 'The signal is thought to come from space.'],
  ['The news says the reporter lost her voice.', 'The reporter is reported to have lost her voice.'],
  ['Everybody knows they hid the truth for 79 years.', 'It is known that they hid the truth for 79 years.'],
  ['People believe the visitors are already here.', 'The visitors are believed to be already here.'],
  ['People expect the President to speak tonight.', 'The President is expected to speak tonight.']
] };
/* VI · a folha: certo ou errado? (cada resposta certa arranca uma tarja) */
var VD_AR = { formato: 'verdadeOuMentira', titulo: 'Right or wrong? If it is wrong, say it the careful way.', rotulos: ['Right', 'Wrong'], itens: LINHAS.map(function (x) { return { f: x.f, t: x.t, c: x.c }; }) };
/* VII · a roleta: o que se diz onde você mora */
var VD_RODA = { formato: 'sorteio', titulo: 'What is said where you live? Spin the wheel.', botao: 'Spin', opcoes: [
  'What is said to be the best food in your city?',
  'Which place is believed to be haunted?',
  'Who is said to be the richest person you know of?',
  'What is expected for the weather this weekend?',
  'What is your city known for?',
  'Is there a legend in your country? What is it believed to be?'
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, tj: { n: 0, esc: -1 } };

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
  return '<div class="tj-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a folha do arquivo: oito linhas; as que já foram ditas mostram a frase, as outras ficam sob a tarja preta */
function folha(ok, atual) {
  /* 23/10/2026 · a tarja sai quando a resposta do certo/errado está certa (em qualquer ordem); a próxima fica marcada */
  var feitas = 0; ok.forEach(function (x) { if (x) feitas++; });
  var N = LINHAS.length, fim = feitas >= N;
  var ls = LINHAS.map(function (x, i) {
    var cls = ok[i] ? ' aberta' : (i === atual ? ' vez' : '');
    var larg = [86, 72, 80, 90, 94, 70][i];
    return '<li class="tj-linha' + cls + '"><span class="tj-n">' + ('0' + (i + 1)).slice(-2) + '</span><span class="tj-txt"><span>' + x.ops[0] + '</span><i class="tj-barra" style="width:' + larg + '%"></i></span></li>';
  }).join('');
  return '<div class="tj-folha vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The redacted file: ' + feitas + ' of ' + N + ' lines uncovered">'
    + '<div class="tj-cab"><b>File 79-D · Eyes only</b><small>Subject: the visitors · Page 1 of 1</small></div>'
    + '<ol class="tj-lista">' + ls + '</ol>'
    + '<div class="tj-pe"><span>' + (fim ? 'Released to the public' : feitas + ' of ' + N + ' lines uncovered') + '</span>' + (fim ? '<b class="tj-carimbo">Released</b>' : '') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · passive reporting · it is said that, he is said to have</span><h1>It Is Believed</h1>'
    + '<p class="banda">' + FILME + ' · Steven Spielberg</p>'
    + '<p class="sub">For 79 years, the truth was hidden under black bars. Now a file has been stolen, and nobody official will say “we know”. Tonight you open the file line by line, the careful way: it is believed, he is said to have, they are thought to be.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the file</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r tj-foto"><img src="' + img('capa') + '" alt="A dark government archive with rows of filing cabinets and one green desk lamp"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="tj-encarte vd"><div class="tj-capinha"><img src="' + img('antena') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>Listening to the sky</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="tj-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Why do the news say “it is believed” and not “we know”?</h2></div>' + mostra('enc', 'Because nobody wants to be responsible. It is safer to say it is believed.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_SEP) + '<p class="fm-nota">Say: It is known that … / It is believed that …</p></div>'
    + '<div class="lado-l"><div class="tj-selo vd"><b>' + FILME + '</b><small>the official trailer · tense, not graphic · almost three minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="tj-video"><div class="tj-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="tj-cred">' + FILME + ' · official trailer (Universal) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="tj-centro">' + FM.ex('v2', VD_ESC) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="tj-video"><div class="tj-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="tj-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="tj-sentido">' + x.sentido + '</span><span class="tj-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="tj-centro"><p class="tj-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  /* a placa das duas portas aparece quando as seis frases estão ligadas */
  var e = (S.fq && S.fq.rg) || { par: {} }, feitos = 0;
  VD_LIGA.pares.forEach(function (p, i) { if (e.par && e.par[i] === i) feitos++; });
  var liga = FM.ex('rg', VD_LIGA);
  return cab(c) + (feitos === VD_LIGA.pares.length ? comPlaca(liga, PRESA) : liga);
};

R.arquivo = function (c) {
  var e = (S.fq && S.fq.ar && S.fq.ar.r) || {}, N = LINHAS.length, feitas = 0, atual = -1;
  var ok = LINHAS.map(function (x, i) { var o = e[i] != null && (e[i] === 't') === !!x.t; if (o) feitas++; else if (atual < 0) atual = i; return o; });
  return cab(c) + '<div class="tj-mesa"><div class="lado-l">' + folha(ok, atual) + '</div><div class="lado-l">' + FM.ex('ar', VD_AR)
    + (feitas === N ? '<p class="aprova">The whole page is open. Now read the news like an anchor: three lines, the careful way.</p>' : '') + '</div></div>';
};

R.boatos = function (c) {
  return cab(c) + '<div class="tj-centro">' + FM.ex('bo', VD_RODA) + '<p class="fm-nota">Answer with It is said that… / … is said to… Spin again for the next one.</p></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="tj-centro"><p class="tj-dica">The interview.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'mentira', rot: 'I · Two Truths and a Lie', t: 'Before the trailer: what is said about you?', p: 'The teacher reads three sentences. Two are true. Which one is the lie?',
  q: 'Three things that are said about the teacher. One is a lie. Which one?',
  frases: ['It is said in my family that I cook very well.', 'I am believed to be the worst singer at every party.', 'It is known that I once met a famous actor at the airport.'], mentira: 2,
  depois: 'Now you: say two true sentences and one lie with “It is said that…” or “I am believed to…”. The teacher finds the lie.',
  ex: 'It is said that I never forget a face. I am believed to be the funniest in my family. It is known that I ran a marathon.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'entrevista', rot: 'VIII · The Interview', t: 'Interview the reporter from Kansas City.', p: 'The teacher is the TV reporter who lost her voice on air. Ask what is said, believed and known. Then swap: you are a government spokesperson.',
  papel: 'the TV reporter from Kansas City', papel2: 'you, a government spokesperson',
  itens: [
    { q: 'What is believed about the stolen file?', ex: 'It is believed that it proves we are not alone.' },
    { q: 'What is the thief said to have done?', ex: 'He is said to have stolen secret data.' },
    { q: 'Where are the visitors thought to be?', ex: 'They are thought to be already here.' },
    { q: 'What is the President expected to say?', ex: 'He is expected to tell the whole truth tonight.' },
    { q: 'What was reported about you?', ex: 'I was reported to have lost my voice on air.' }
  ] };
/*FIM@@*/
