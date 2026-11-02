/* ============================================================
   SUPERMAN · THE FRONT PAGE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · reported speech: said (that) / told + pessoa, o passo
   para trás no tempo (is → was, will → would, can → could, stopped →
   had stopped), pronomes que mudam (I → he), perguntas relatadas (asked
   if / asked where + ordem de afirmação), ordens (told him to / not to).
   Erros: said me, told that (sem pessoa), sem passo atrás (said he is),
   asked where did I live, asked do you…, said to me that (aceito, mas
   aqui foca told), told him don't, said he will, pronome não muda.
   Catálogo WOLFLIX Live (07/10): família HERÓI, modo COLETIVA DE IMPRENSA.
   A tela forte: a primeira página do Daily Planet. Cada fala relatada
   certa vira uma notícia numa coluna da página, e a manchete do alto
   muda para a última notícia; no fim, a edição fecha com o carimbo
   PRINT IT.
   O AQUECIMENTO (aquece.js): o ranking. O FECHAMENTO (final.js): a
   cadeira quente, o aluno é o Superman na coletiva.
   O VÍDEO: Ox8ZLF6cGM0 (trailer oficial DC, 3:02, idade 0, embed sim).
   Tempos da legenda (24/09): 0:09, 0:33, 0:42, 0:53, 1:42, 2:01; cada
   momento contado com palavras nossas.
   A CARA: azul-noite do uniforme, vermelho da capa, papel de jornal
   escuro; Abril Fatface + Libre Franklin. A antiga era a première.
   Fila: FILA-LIVE-386.md · 293.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a reação (Choose Your Response) antes; True or Lie com ▶ nas
   falas do trailer; depois, quem disse (tocar a fala, tocar o nome). V: a
   página de jornal (tocar o que disseram, perguntaram, mandaram) e completar
   a regra. VI: a primeira página com SEIS colunas, cada uma com a fala primeiro
   e o Check. VII (era EXTRA, agora essencial): contar o seu dia, tocando cada
   palavra quando usar.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'redacao', rot: 'I · Warm-up and The Daily Planet', t: 'Before the trailer: what people said, then the front page.', p: 'Answer three questions about your life. Then pick a story on the front page and say what happened.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Superman, 2025. The official trailer.', p: 'React first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'redacao', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'coletiva', rot: 'V · He Said, She Asked', t: 'He said he had stopped a war. She asked if he had asked the President.', p: 'Tap what people said, asked and told. Then finish the rule.' },
  { k: 'pagina', est: 'o', min: 7, img: 'redacao', rot: 'VI · The Front Page', t: 'Report every quote right, and it goes on the front page.', p: 'Read the quote. Report it out loud. Then tap Check.' },
  { k: 'fofoca', est: 'o', min: 6, img: 'coletiva', rot: 'VII · What Did They Say?', t: 'Tell the story of your day: who said what?', p: 'Tap each word when you use it. Then say it to the teacher.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var FILME = 'Superman', ANO = '2025';
var YT = 'Ox8ZLF6cGM0', DUR = 182;

var ENCARTE = [
  ['The film', '<i>Superman</i> (James Gunn, DC Studios, 2025): David Corenswet is Superman, Rachel Brosnahan is Lois Lane, Nicholas Hoult is Lex Luthor.'],
  ['The interview', 'Lois Lane, a reporter at the Daily Planet, interviews Superman. He stopped a war in another country, but nobody asked him to do it.'],
  ['The questions', 'The government wants answers. Lex Luthor says he isn’t a man at all. And Lois asks the hardest questions: did he ask anybody first?']
];

var ANTES = [
  { q: 'Do you read the news? Where?', h: 'I read the news on … every …' },
  { q: 'Should a hero ask permission before helping?', h: 'I think he should / shouldn’t, because …' }
];
var DEPOIS = [
  { q: 'What did Superman say about the war?', h: 'He said he had …' },
  { q: 'What did Lois ask him?', h: 'She asked if he had …' }
];

var TRECHOS = [
  { k: 'The interview', ini: 6, fim: 22, ouvir: 'Does Superman agree to the interview?', sentido: 'Lois asks if he would let her interview him as Superman. He says sure. They start, very formal.', gram: 'She <b>asked if</b> he <b>would</b> let her interview him.' },
  { k: 'His actions', ini: 30, fim: 42, ouvir: 'Who wants to look into his actions?', sentido: 'Lois says the Secretary of Defense wants to look into what he did. Superman says he stopped a war.', gram: 'He <b>said</b> he <b>had stopped</b> a war.' },
  { k: 'The President', ini: 42, fim: 60, ouvir: 'Did he talk to the President?', sentido: 'Lois says he entered a country without permission and asks if he talked to the President first. He says no.', gram: 'She <b>asked if</b> he <b>had consulted</b> the President.' },
  { k: 'Who you are', ini: 98, fim: 112, ouvir: 'What makes him who he is?', sentido: 'Someone tells him that his choices and his actions make him who he is.', gram: 'His father <b>told</b> him his choices <b>made</b> him who he <b>was</b>.' },
  { k: 'Not a man', ini: 118, fim: 132, ouvir: 'What does Lex say about Superman?', sentido: 'Lex Luthor says Superman is not a man. He calls him a thing.', gram: 'Lex <b>said</b> he <b>wasn’t</b> a man.' }
];

var TRAPS = [
  ['Said · told + person', 'He said me he was fine.', 'He <b>told me</b> he was fine. / He <b>said</b> he was fine.', 'said (no person) · told + person'],
  ['One step back', 'He said he is from Krypton.', 'He said he <b>was</b> from Krypton.', 'is → was · will → would · can → could'],
  ['Reported questions', 'She asked where did he live.', 'She asked where <b>he lived</b>.', 'no do / did · normal order'],
  ['Yes / no questions: if', 'She asked did he call the President.', 'She asked <b>if</b> he <b>had called</b> the President.', 'asked if / whether']
];

/* a primeira página: o gesto forte */
var CITACOES = [
  { quem: 'Superman', fala: '“I stopped a war.”', manchete: 'HERO STOPS WAR', ops: ['Superman said he had stopped a war.'], r: 'Superman said he <b>had stopped</b> a war.', depois: 'What is something you stopped doing this year?' },
  { quem: 'Lois', fala: '“Did you consult with the President?”', manchete: 'NO CALL TO THE WHITE HOUSE', ops: ['Lois asked if he had consulted the President.'], r: 'Lois <b>asked if</b> he <b>had consulted</b> the President.', depois: 'Who do you ask before making a big decision?' },
  { quem: 'The Secretary', fala: '“I will look into his actions.”', manchete: 'GOVERNMENT TO INVESTIGATE', ops: ['The Secretary said he would look into his actions.'], r: 'The Secretary said he <b>would</b> look into his actions.', depois: 'What did someone promise you and never do?' },
  { quem: 'Lois', fala: '“Where do you live?”', manchete: 'THE MYSTERY ADDRESS', ops: ['Lois asked where he lived.'], r: 'Lois <b>asked where he lived</b>.', depois: 'Where did you live when you were ten?' },
  { quem: 'Lex Luthor', fala: '“He is not a man.”', manchete: 'LUTHOR: “NOT A MAN”', ops: ['Lex told reporters he wasn’t a man.'], r: 'Lex <b>told reporters</b> he <b>wasn’t</b> a man.', depois: 'Have you ever read a news story that was not true?' },
  { quem: 'Perry White', fala: '“Don’t print it yet!”', manchete: 'EDITOR STOPS THE PRESSES', ops: ['Perry told Lois not to print it yet.'], r: 'Perry <b>told Lois not to print</b> it yet.', depois: 'What did your boss or teacher tell you not to do?' }
];
var RECUSA = {
  saidme: 'Said has no person after it: said he… / told me he…',
  tempo: 'One step back in time: is → was, has → had, stopped → had stopped.',
  did: 'Reported questions have no do / did: asked if he had… / asked where he lived.',
  ordem: 'Reported questions: normal order. if he had consulted.',
  will: 'One step back: will → would.',
  told: 'Told needs a person: told reporters… / said he would…',
  do: 'No do / does in reported questions: where he lived.',
  saidperson: 'Said + a person needs to: said to reporters. Or: told reporters.',
  dont: 'Reported orders: told + person + not to.',
  ing: 'Not to + base verb: not to print.',
  can: 'One step back: can → could.',
  toldto: 'Told + person, no to: told Lois.'
};

var DISSE = [
  { k: 'Your mother', h: 'What did your mother tell you yesterday?', ex: 'She told me she was tired.' },
  { k: 'A friend', h: 'What did a friend ask you this week?', ex: 'She asked if I wanted to go to the cinema.' },
  { k: 'Your boss', h: 'What did your boss say in the last meeting?', ex: 'He said we would have a new project.' },
  { k: 'A doctor', h: 'What did a doctor tell you to do?', ex: 'He told me to drink more water.' },
  { k: 'A stranger', h: 'What did a stranger ask you recently?', ex: 'A woman asked where the station was.' },
  { k: 'This class', h: 'What did the teacher ask you at the start?', ex: 'You asked me how my week was.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
var PRESA = '<b>said</b> he <b>had</b> stopped · one step back (is → was, will → would, can → could)<br><b>told + person</b> · said + nothing<br><b>asked if</b> he had called · <b>asked where he lived</b> · normal order, no do / did<br><b>told her (not) to</b> print it';
/* III · antes: como o Superman responde? (a resposta de verdade está no trailer, 0:52) */
var VD_REA = { formato: 'reacao', titulo: 'Before you watch: Lois asks a hard question. How does Superman answer?', quem: 'Lois', fala: 'Lois: “Did you consult with the President?”', reacoes: [
  ['No. I acted alone.', 'No. I acted alone.', 'Why not? People will say you broke the law.'],
  ['Yes. I called him first.', 'Yes. I called him before I went.', 'Then why does the Secretary want to look into your actions?'],
  ['I don’t have to answer.', 'I don’t have to answer that, Lois.', 'Then I will write that you said nothing.']
] };
/* III · durante: True or Lie, com ▶ nos tempos do trailer (legenda-dados.js, todos antes de 0:55) */
var VD_VL = { formato: 'verdadeOuMentira', titulo: 'While you watch: true or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Lois asks if she can interview him as Superman.', t: 1, tm: '0:07' },
  { f: 'The Secretary of Defense said he was going to thank Superman.', t: 0, tm: '0:32', c: 'He said he was going to look into his actions.' },
  { f: 'Superman said he had stopped a war.', t: 1, tm: '0:39' },
  { f: 'Lois said he entered a country legally.', t: 0, tm: '0:45', c: 'She said he entered it illegally.' },
  { f: 'Lois asked if he had consulted the President.', t: 1, tm: '0:52' }
] };
/* III · depois: quem disse? (tocar a fala, tocar o nome) */
var VD_QUEM = { formato: 'separa', titulo: 'After the trailer: who said it? Tap the line, then the name.', caixas: ['Lois', 'Superman', 'Lex'], itens: [
  { t: '“Did you consult with the President?”', c: 0 },
  { t: '“I stopped a war.”', c: 1 },
  { t: '“I’m not the one being interviewed.”', c: 0 },
  { t: '“I wasn’t representing anybody except for me!”', c: 1 },
  { t: '“He’s not a man.”', c: 2 }
] };
/* V · a página de jornal */
var CARTA_R = { formato: 'carta', carta: { de: 'The Daily Planet · page one', txt: 'Superman [[said he had stopped]] a war. Lois [[asked if he had consulted]] the President. The Secretary [[told reporters he would look]] into the case. Lex [[said he wasn’t]] a man. Lois [[asked where he lived]]. And Perry [[told Lois not to print]] it yet.', assina: 'The newsroom' },
  toque: 'Tap what people said, asked and told', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner.',
  regra: [
    { a: '“I stopped a war.” → Superman said he', par: ['had stopped', 'stops'], c: 0, b: 'a war.' },
    { a: '“I will look into it.” → He said he', par: ['will', 'would'], c: 1, b: 'look into it.' },
    { a: '“Did you consult him?” → Lois asked', par: ['did he consult', 'if he had consulted'], c: 1, b: 'him.' },
    { a: '“Where do you live?” → She asked where', par: ['he lived', 'did he live'], c: 0, b: '.' },
    { a: '“Don’t print it!” → Perry told Lois', par: ['don’t print', 'not to print'], c: 1, b: 'it.' }
  ] };
/* VII · contar o dia, tocando cada palavra */
var VD_USA = { formato: 'usa', titulo: 'Tell the story of your day. Tap each word when you use it.', palavras: ['said', 'told me', 'asked me if', 'asked me where', 'told me not to', 'would'], fim: 'All six words. That is a front-page story!' };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, pg: { n: 0, esc: -1 } };

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
  return '<div class="su-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a primeira página escura: o nome do jornal, a manchete grande (a última notícia), e oito colunas; cada coluna relatada mostra a manchete pequena e a frase; no fim, o carimbo PRINT IT */
function pagina(feitas, atual, nova) {
  var manchete = feitas ? CITACOES[feitas - 1].manchete : 'TODAY’S EDITION';
  var cols = CITACOES.map(function (c, i) {
    if (i < feitas) return '<div class="su-col' + (nova && i === feitas - 1 ? ' novo' : '') + '"><b>' + c.manchete + '</b><span>' + c.ops[0] + '</span></div>';
    return '<div class="su-col vazia' + (i === atual ? ' vez' : '') + '">' + (i === atual ? '<b>' + c.quem + '</b><span class="su-cita">' + c.fala + '</span>' : '<i></i><i></i><i></i>') + '</div>';
  }).join('');
  var fim = feitas >= CITACOES.length;
  return '<div class="su-jornal vd' + (fim ? ' fechado' : '') + '" role="img" aria-label="The front page: ' + feitas + ' of 6 stories"><div class="su-nome"><small>Metropolis · evening edition</small><b>The Daily Planet</b></div>'
    + '<h3 class="su-manchete' + (nova ? ' novo' : '') + '">' + manchete + '</h3><div class="su-cols">' + cols + '</div>'
    + (fim ? '<p class="su-carimbo">Print it</p>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · reported speech · said, told, asked</span><h1>On the Record</h1>'
    + '<p class="banda">' + FILME + ' · ' + ANO + '</p>'
    + '<p class="sub">Superman stopped a war, and now everybody has something to say. Lois has the interview, the government has questions, Lex has an opinion. Tonight you are at the Daily Planet: report every quote right, and it goes on the front page.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the edition</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r su-foto"><img src="' + img('capa') + '" alt="An art deco city skyline at dusk with a golden globe on top of a newspaper building"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="su-encarte vd"><div class="su-capinha"><img src="' + img('redacao') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The newsroom at night</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="su-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Superman stopped a war without asking. Was he right?</h2></div>' + mostra('enc', 'I think he was right. People were going to die.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REA) + '<p class="fm-nota">Then watch: what does he really answer?</p></div>'
    + '<div class="lado-l"><div class="su-selo vd"><b>' + FILME + '</b><small>the official trailer · about three minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="su-video"><div class="su-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="su-cred">' + FILME + ' · official trailer (DC Studios) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_VL) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="su-centro">' + FM.ex('v2', VD_QUEM) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="su-video"><div class="su-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="su-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="su-sentido">' + x.sentido + '</span><span class="su-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="su-centro"><p class="su-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('car', CARTA_R);
};

R.pagina = function (c) {
  return cab(c) + '<div class="fm-lado2">' + FM.ex('pg', { formato: 'fala', rotulo: 'Quote', regra: PRESA, diga: 'Report it out loud first',
    lado: function (f, a, v) { return pagina(f, a, v ? 1 : 0); },
    fim: 'Print it! Now be the editor: tell the teacher the three biggest stories of the day, in reported speech.',
    itens: CITACOES.map(function (x) { return { pista: '<span class="ano">' + x.quem + '</span>' + x.fala, resp: x.r, depois: x.depois }; }) }) + '</div>';
};

R.fofoca = function (c) {
  return cab(c) + '<div class="su-centro">' + FM.ex('us', VD_USA) + '<p class="fm-nota">Start like this: Today my mother told me … A friend asked me if … My boss said he would …</p></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="su-centro"><p class="su-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'ranking', rot: 'I · Breaking News', t: 'Before the trailer: which news is the biggest?', p: 'Tap the headlines from the biggest to the smallest. Then explain the top and the bottom.',
  rotulo: 'Breaking news', q: 'Which story would you put on the front page? Put them in order.',
  itens: ['A hero stops a war', 'Aliens are real', 'Free coffee for a year in your city', 'Your team wins the cup', 'A new law: four-day work week'],
  depois: 'What was the biggest news in your life this year?', ex: 'Number 1 is the four-day week! The last one is the cup. I don’t like football.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: Superman, after the press conference.', p: 'Sit in the hot seat as Superman. The teacher asks what people said and asked. Then swap.',
  quem: 'Superman, after the press conference',
  itens: [
    { q: 'What did the reporters ask you?', ex: 'They asked if I had asked permission.' },
    { q: 'What did Lex say about you?', ex: 'He said I wasn’t a man. That hurt.' },
    { q: 'What did Lois tell you after the interview?', ex: 'She told me I had to be more careful.' },
    { q: 'What did the Secretary say he would do?', ex: 'He said he would look into my actions.' },
    { q: 'What did your parents tell you when you were young?', ex: 'They told me to always help people.' }
  ] };
/*FIM@@*/
