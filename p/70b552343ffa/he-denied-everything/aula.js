/* ============================================================
   DIGGER · THE PRESS CONFERENCE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · reporting verbs e o formato depois de cada um: deny /
   admit + -ing; promise / refuse + to; blame someone for; accuse
   someone of + -ing; warn someone (not) to; apologize for + -ing.
   Erros: deny / admit + to (denied to cause), admit + pessoa (admitted
   me), promise / refuse + -ing, to + -ing, blame of / because, accuse
   to, of + verbo base, warn + don’t, warn to them, apologize to + verbo.
   Catálogo WOLFLIX Live (07/10): família CRIME, modo COLETIVA.
   A tela forte: a mesa de microfones. Seis microfones lado a lado na
   frente do pódio, com a etiqueta de quem falou; cada relato certo liga
   um (a luz vermelha do AO VIVO) e a frase relatada corre na faixa de
   notícia embaixo. No fim, todos ligados: a história foi contada.
   O AQUECIMENTO (aquece.js): a escala, o quanto você é honesto. O
   FECHAMENTO (final.js): a cadeira quente, o aluno é o Digger.
   O VÍDEO: qORTe1wW3Wg (trailer Warner Bros., 2:38, idade 0, embed sim).
   Comédia de desastre, sem violência. Falas conferidas na legenda
   oficial (25/09), contadas com palavras nossas.
   A CARA: gelo do ártico na noite, vermelho do AO VIVO; Archivo Narrow
   no título e nas etiquetas, Libre Caslon Text no texto. A antiga era a
   coletiva com os flashes.
   Fila: FILA-LIVE-386.md · 304.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a régua "você confia?" antes; True or Lie com ▶ nas falas do
   trailer; depois, o que eles FAZEM com as palavras (sentido, com ▶). V: as
   notas da repórter (tocar o verbo e o que vem depois) e completar a regra.
   VI: a mesa com SEIS microfones, fala primeiro + Check. VII (era EXTRA, agora
   essencial): montar o relato com as pistas.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'gelo', rot: 'I · Warm-up and The Morning Paper', t: 'Before the trailer: what people promised you, then a crack in the ice.', p: 'Answer three questions about your life. Then pick a story on the front page and report it.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Digger. The official trailer.', p: 'Slide first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'gelo', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'podio', rot: 'V · What They Really Said', t: 'The reporter’s notes: which verbs, and what comes after them?', p: 'Tap the reporting verbs in the notes. Then finish the rule.' },
  { k: 'coletiva', est: 'o', min: 7, img: 'podio', rot: 'VI · The Press Conference', t: 'Six statements at the podium. Report each one.', p: 'Read what they said. Say the report out loud. Then tap Check.' },
  { k: 'relate', est: 'o', min: 6, img: 'gelo', rot: 'VII · Report It', t: 'Six things people said to you this year. Report them.', p: 'Build each report from the clues. Say it. Then tap Check.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var FILME = 'Digger', ANO = '2026';
var YT = 'qORTe1wW3Wg', DUR = 158;

var ENCARTE = [
  ['The film', '<i>Digger</i> (2026) is a dark comedy by Alejandro G. Iñárritu, with Tom Cruise as Digger Rockwell, the richest oil man in the world.'],
  ['The disaster', 'A crack opens in the ice near one of his projects, and it is getting bigger every day. The worst case: a disaster that could cost the world eighteen trillion dollars.'],
  ['The story', 'Digger knew long before everybody else. Now he wants to be the hero who saves the world from the disaster he caused. If he can’t control nature, he will control the story.']
];

var ANTES = [
  { q: 'Do you trust very rich people? Why or why not?', h: 'I trust / I don’t trust … because …' },
  { q: 'Have you ever seen a famous person say sorry on TV? Did you believe them?', h: 'Yes, I saw … / No, I never …' }
];
var DEPOIS = [
  { q: 'What did Digger know, and when did he know it?', h: 'He knew about … long before …' },
  { q: 'Is Digger a hero or a villain? Why?', h: 'I think he is … because …' }
];

var TRECHOS = [
  { k: 'Everything changes', ini: 0, fim: 28, ouvir: 'What does the voice say about life?', sentido: 'Everything changes: one day you are a king, the next you are ashes in a box. How long is left? Between two weeks and five minutes.', gram: 'He <b>warned</b> them <b>not to</b> relax.' },
  { k: 'The crack', ini: 28, fim: 60, ouvir: 'Who is paying for everything?', sentido: 'Digger is the man with the crack in the ice. He says he knows what is going on there, because he is paying for the whole thing.', gram: 'He <b>admitted</b> <b>paying</b> for it.' },
  { k: 'Worst case', ini: 60, fim: 85, ouvir: 'What is the worst-case scenario?', sentido: 'Someone tells the President they are not protected against a disaster this big. The worst case costs eighteen trillion dollars. And there is nuclear waste too.', gram: 'They <b>warned</b> the President <b>about</b> the cost.' },
  { k: 'Your problem', ini: 85, fim: 102, ouvir: 'Who do they blame?', sentido: 'Everyone says Digger got them into this mess. He knew long before everybody else, so it is his problem.', gram: 'They <b>blamed</b> Digger <b>for</b> the mess.' },
  { k: 'The narrative', ini: 102, fim: 135, ouvir: 'What can they still control?', sentido: 'If they can’t control nature, at least they can control the story people hear. Digger asks for help to shape the story.', gram: 'He <b>promised to</b> save the world.' }
];

var TRAPS = [
  ['Deny, admit + -ing', 'Digger denied to cause the crack.', 'Digger <b>denied causing</b> the crack.', 'deny / admit + verb-ing (or + that…)'],
  ['Promise, refuse + to', 'She refused signing the report.', 'She <b>refused to sign</b> the report.', 'promise / refuse + to + verb'],
  ['The preposition', 'They accused him to lie.', 'They <b>accused</b> him <b>of lying</b>.', 'accuse of · blame for · apologize for + -ing'],
  ['Warn', 'She warned them don’t go.', 'She <b>warned</b> them <b>not to go</b>.', 'warn someone (not) to + verb']
];

/* a mesa de microfones: o gesto forte (23/10: seis, fala primeiro) */
var DECLARACOES = [
  { quem: 'Digger', pista: '<b>Digger</b> · deny · “I didn’t cause the crack.”', ult: 'Digger denied causing the crack.', resp: 'Digger <b>denied causing</b> the crack.', depois: 'What is something you denied doing as a child?' },
  { quem: 'Digger', pista: '<b>Digger</b> · admit · “OK. I knew about it.”', ult: 'He admitted knowing about it.', resp: 'He <b>admitted knowing</b> about it.', depois: 'What is something you finally admitted to a friend?' },
  { quem: 'Digger', pista: '<b>Digger</b> · promise · “I will fix it. I promise.”', ult: 'He promised to fix it.', resp: 'He <b>promised to fix</b> it.', depois: 'What did you promise to do this year?' },
  { quem: 'The advisor', pista: '<b>The advisor</b> · blame · “It’s your fault, Digger.”', ult: 'The advisor blamed Digger for the disaster.', resp: 'The advisor <b>blamed</b> Digger <b>for</b> the disaster.', depois: 'Who do people in your country blame for the traffic?' },
  { quem: 'A reporter', pista: '<b>A reporter</b> · accuse · “You lied to the public!”', ult: 'The reporter accused him of lying to the public.', resp: 'The reporter <b>accused</b> him <b>of lying</b> to the public.', depois: 'Has anyone ever accused you of something you didn’t do?' },
  { quem: 'The scientist', pista: '<b>The scientist</b> · warn · “Don’t go near the glacier.”', ult: 'She warned them not to go near the glacier.', resp: 'She <b>warned</b> them <b>not to go</b> near the glacier.', depois: 'What did your parents warn you not to do?' }
];
/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
var PRESA = 'deny · admit + <b>-ing</b><br>promise · refuse + <b>to</b> + verb<br>blame someone <b>for</b> · accuse someone <b>of</b> + -ing<br>warn someone <b>(not) to</b> + verb<br>apologize <b>for</b> + -ing';
/* III · antes: a régua */
var VD_REG = { formato: 'regua', titulo: 'Before you watch: how much do you trust very rich people?', frase: 'A very rich man says: “I’m sorry. I will fix it.” Do you believe him?', esquerda: 'Not at all', direita: 'Completely', depois: 'Say why: “I believe him because …” / “I don’t believe him because …”' };
/* III · durante: True or Lie, com ▶ nos tempos do trailer (legenda-dados.js) */
var VD_VL = { formato: 'verdadeOuMentira', titulo: 'While you watch: true or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Someone says: “My name is Sandy Clarkson.”', t: true, tm: '0:27' },
  { f: 'Someone tells the President they are unprotected against a big disaster.', t: true },
  { f: 'The worst case costs eighteen million dollars.', t: false, c: 'It says: eighteen trillion dollars.' },
  { f: 'Someone says there is no nuclear waste.', t: false, tm: '1:14', c: 'It says: there’s the nuclear waste, too.' },
  { f: 'Someone says: “You knew long before the rest of us.”', t: true, tm: '1:35' },
  { f: 'Mother Nature sealed it all to summer.', t: false, tm: '1:45', c: 'It says: to winter.' }
] };
/* III · depois: o que eles FAZEM com as palavras (sentido, com ▶) */
var VD_ESC = { formato: 'escolhe', titulo: 'After the trailer: what do they do with their words? Tap the best answer.', itens: [
  { p: '“You knew long before the rest of us. That is why it is your problem!”', tm: '1:35', o: ['They blame him.', 'They thank him.', 'They give him a prize.'], c: 0, d: 'They blame Digger: he knew first, so it is his problem.' },
  { p: '“Mr. President, we’re utterly unprotected against a disaster of this magnitude.”', o: ['They warn the President.', 'They apologize to the President.', 'They ask the President for money.'], c: 0, d: 'They warn the President about the disaster.' },
  { p: '“There’s the nuclear waste, too.”', tm: '1:14', o: ['He adds more bad news.', 'He says everything is fine.', 'He asks about the weather.'], c: 0, d: 'It is more bad news, after the eighteen trillion dollars.' },
  { p: '“You’re gonna save the world.”', tm: '1:48', o: ['They tell him he will save the world.', 'They tell him he will lose the world.', 'They tell him to go home.'], c: 0, d: 'They believe Digger can fix it.' }
] };
/* V · as notas da repórter → a regra */
var CARTA_R = { formato: 'carta', papel: 'tela', carta: { de: 'The reporter’s notes · Rockwell Energy press conference', txt: 'At the press conference, Digger [[denied causing]] the crack. Then he [[admitted knowing]] about it, and he [[promised to fix]] it. An engineer [[refused to sign]] the report. An advisor [[blamed]] Digger [[for]] the disaster. A reporter [[accused]] him [[of lying]]. A scientist [[warned]] them [[not to go]] near the glacier. At the end, Digger [[apologized for]] the mess.' },
  toque: 'Tap the reporting verbs and what comes after them', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner on the next pages.',
  regra: [
    { a: 'deny · admit +', par: ['-ing', 'to + verb'], c: 0, b: '(denied causing · admitted knowing)' },
    { a: 'promise · refuse +', par: ['to + verb', '-ing'], c: 0, b: '(promised to fix · refused to sign)' },
    { a: 'blame someone', par: ['for', 'of'], c: 0, b: '(blamed Digger for the disaster)' },
    { a: 'accuse someone', par: ['of', 'to'], c: 0, b: '+ -ing (accused him of lying)' },
    { a: 'warn someone', par: ['not to go', 'don’t go'], c: 0, b: '(warned them not to go)' },
    { a: 'apologize', par: ['for + -ing', 'to + verb'], c: 0, b: '(apologized for the mess)' }
  ] };
/* VII · montar o relato */
var VD_REL = { formato: 'pergunta', titulo: 'Report what they said. Build it from the clues. Say it. Then tap Check.', regra: PRESA, depoisRot: 'Then ask each other', depois: ['What did you refuse to do?', 'Did anyone ever blame you for something?'], itens: [
  { p: 'Your boss: “I won’t give anyone a raise.” <i>(refuse · give us a raise)</i>', r: 'My boss <b>refused to give</b> us a raise.' },
  { p: 'A friend: “Yes, I ate your chocolate.” <i>(admit · eat my chocolate)</i>', r: 'My friend <b>admitted eating</b> my chocolate.' },
  { p: 'Your mother: “Don’t drive at night.” <i>(warn me · not drive at night)</i>', r: 'My mother <b>warned</b> me <b>not to drive</b> at night.' },
  { p: 'A neighbor: “You took my parking space!” <i>(accuse me · take his parking space)</i>', r: 'My neighbor <b>accused</b> me <b>of taking</b> his parking space.' },
  { p: 'Your child: “I didn’t break the vase.” <i>(deny · break the vase)</i>', r: 'My son <b>denied breaking</b> the vase.' },
  { p: 'You: “I’m sorry I was late.” <i>(apologize · be late)</i>', r: 'I <b>apologized for being</b> late.' }
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
/* a mesa de microfones: seis microfones; os ligados acendem o ponto vermelho; a última frase relatada corre na faixa de notícia */
function mics(feitas, atual, nova) {
  var fim = feitas >= DECLARACOES.length;
  var ms = DECLARACOES.map(function (d, i) {
    var cls = i < feitas ? (nova && i === feitas - 1 ? ' vivo novo' : ' vivo') : (i === atual ? ' vez' : '');
    var h = [62, 74, 56, 80, 66, 52][i];
    return '<div class="dg-mic' + cls + '" style="--h:' + h + '%"><i class="dg-luz"></i><span class="dg-cabeca"></span><span class="dg-haste"></span><small>' + d.quem + '</small></div>';
  }).join('');
  var ult = feitas ? DECLARACOES[feitas - 1].ult : 'The press conference is about to begin.';
  return '<div class="dg-palco vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The press conference: ' + feitas + ' of ' + DECLARACOES.length + ' microphones live">'
    + '<div class="dg-fileira">' + ms + '</div><div class="dg-podio"><b>Rockwell Energy · press conference</b></div>'
    + '<div class="dg-faixa"><b>' + (fim ? 'Live' : 'Breaking') + '</b><span class="' + (nova ? 'novo' : '') + '">' + ult + '</span></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · reporting verbs · deny, admit, promise, refuse, blame, accuse</span><h1>He Denied Everything</h1>'
    + '<p class="banda">' + FILME + ' · Warner Bros.</p>'
    + '<p class="sub">A crack in the ice, a disaster worth trillions, and the man who paid for it all at the podium. Tonight you report the press conference: not what they said, but what they did with their words. He denied. He admitted. He promised.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Go to the press room</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r dg-foto"><img src="' + img('capa') + '" alt="A giant oil rig at night on frozen ice, with a crack in the ice nearby"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="dg-encarte vd"><div class="dg-capinha"><img src="' + img('gelo') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The crack</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="dg-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Digger wants to control the story. Can a person control the news today?</h2></div>' + mostra('enc', 'Rich people can. They promise to help, and they refuse to answer the hard questions.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REG) + '</div>'
    + '<div class="lado-l"><div class="dg-selo vd"><b>' + FILME + '</b><small>the official trailer · a dark comedy, no violence · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="dg-video"><div class="dg-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="dg-cred">' + FILME + ' · official trailer (Warner Bros.) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_VL) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="dg-video"><div class="dg-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="dg-cred">Tap a time to hear that moment again.</small></div><div class="lado-l">' + FM.ex('v2', VD_ESC) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="dg-video"><div class="dg-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="dg-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="dg-sentido">' + x.sentido + '</span><span class="dg-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="dg-centro"><p class="dg-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.ex('car', CARTA_R);
};

R.coletiva = function (c) {
  return cab(c) + FM.fala('mic', DECLARACOES.map(function (d) { return { pista: d.pista, resp: d.resp, depois: d.depois }; }), {
    rotulo: 'Statement', prox: 'Next statement', regra: PRESA,
    lado: function (feitas, atual, nova) { return mics(feitas, atual, nova); },
    fim: 'Every mic is live. Now say the headline: report three things Digger did with his words.'
  });
};

R.relate = function (c) {
  return cab(c) + FM.ex('rel', VD_REL);
};

R.fim = function (c) {
  return cab(c) + '<div class="dg-centro"><p class="dg-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'escala', rot: 'I · How Honest Are You?', t: 'Before the trailer: how honest are you?', p: 'Mark a number for each sentence and say why. The teacher marks theirs too.', rotulos: ['Never', 'Always'],
  itens: [
    { q: 'I admit it when I am wrong.', ex: '7. I admit it, but very slowly.' },
    { q: 'I promise things I can’t do.', ex: '3. Only to my kids, about ice cream.' },
    { q: 'I refuse to lend money to friends.', ex: '8. I learned the hard way.' },
    { q: 'I blame the traffic when I am late.', ex: '10! It is always the traffic.' },
    { q: 'I apologize too much.', ex: '9. I say sorry to the furniture.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: Digger Rockwell, after the press conference.', p: 'Sit in the hot seat as Digger. The teacher is a journalist and asks what you said and did. Answer with reporting verbs. Then swap.',
  quem: 'Digger Rockwell, after the press conference',
  itens: [
    { q: 'Did you deny everything?', ex: 'No! I only denied causing the crack.' },
    { q: 'What did you promise the President?', ex: 'I promised to fix it in two weeks.' },
    { q: 'Who do you blame for the disaster?', ex: 'I blame the engineers for not warning me.' },
    { q: 'Did anyone accuse you of lying?', ex: 'A reporter accused me of hiding the truth.' },
    { q: 'Will you apologize?', ex: 'I already apologized for causing the mess. Next question.' }
  ] };
/*FIM@@*/
