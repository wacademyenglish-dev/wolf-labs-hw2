/* ============================================================
   AVENGERS: DOOMSDAY · THE ASSEMBLY TABLE · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · orações relativas: who / which / that, where, whose,
   o pronome que some quando é objeto (the decision we have to make),
   everything that (nunca what), sem sujeito duplo nem objeto duplo.
   Erros: what como relativo (the shield what, everything what), who
   para coisa, which para pessoa, who his cloak (é whose), which no
   lugar de where, objeto repetido (that Steve carried it), sujeito
   repetido (who they died), where … there.
   (Reforço da 281, que é A2; aqui entram whose, that, a omissão do
   pronome e os erros de duplicar.)
   Catálogo WOLFLIX Live (07/10): família HERÓI, modo CASTING.
   A tela forte: a mesa holográfica da reunião. Um núcleo verde de
   ameaça no centro e oito lugares em volta; cada frase certa projeta
   no lugar dela o objeto de um herói (o escudo, o martelo, a capa…) e
   liga uma linha de luz até o centro.
   O AQUECIMENTO (aquece.js): o duelo. O FECHAMENTO (final.js): as
   perguntas.
   O VÍDEO: irVNGjRFZGk (trailer oficial Marvel, 2:26, idade 0, embed
   sim). Tempos da legenda (24/09): 0:06, 0:31, 1:01, 1:18, 1:31; a
   legenda não diz quem fala, então a aula não adivinha. Cada momento
   contado com palavras nossas.
   A CARA: azul de holograma, verde de ameaça; Oxanium + Sora. A antiga
   era a première.
   Fila: FILA-LIVE-386.md · 288.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: ligar o objeto ao herói antes; a palavra que você ouviu e a
   palavra errada com ▶ nas falas do trailer (legenda-dados.js); depois,
   Verdade ou Mentira. V: separar pelo sentido (pessoa, coisa, lugar, dono)
   e achar a palavra errada. VI: a mesa com SEIS lugares; falar primeiro,
   cada frase certa projeta um herói. VII (era EXTRA): Ask Me, montar a
   pergunta com a oração relativa e entrevistar o professor.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'ceu', rot: 'I · Warm-up and Pick a Side', t: 'Before the trailer: your people, then the heroes and the man in the mask.', p: 'Answer three questions about your life. Then pick a side and defend it.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Avengers: Doomsday. The official trailer.', p: 'Match first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'ceu', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 7, img: 'sala', rot: 'V · Who, Which, That, Whose', t: 'A person, a thing, a place, an owner. Sort the clues.', p: 'Tap a clue, then its box. Then find the wrong word and say the fix.' },
  { k: 'mesa', est: 'o', min: 7, img: 'capa', rot: 'VI · The Assembly Table', t: 'Six seats at the table. Every sentence brings a hero.', p: 'Read the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'herois', est: 'o', min: 7, img: 'sala', rot: 'VII · Your Heroes', t: 'Now you are the reporter. Ask your teacher about their people.', p: 'Build each question out loud. Tap Check. Then ask it, and find one thing you have in common.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · Questions', t: 'Questions.', p: 'Questions.' }
];

var FILME = 'Avengers: Doomsday', ANO = '2026';
var YT = 'irVNGjRFZGk', DUR = 146;

var ENCARTE = [
  ['The film', '<i>Avengers: Doomsday</i> (Marvel, 2026) brings together the heroes who are still alive after the last great war.'],
  ['The threat', 'Something is coming that nobody can stop alone: Doctor Doom, a genius who wants to rule every world.'],
  ['The heroes', 'Many warriors who were stronger than the Avengers have already died. Now the heroes who are left must forget their fights and stand together, or everything that their friends sacrificed will be for nothing.']
];

var ANTES = [
  { q: 'Who is a hero for you? Not from a film: from real life.', h: 'My hero is … , the person who …' },
  { q: 'Is it easy to work with people who you don’t like?', h: 'No, it isn’t, because …' }
];
var DEPOIS = [
  { q: 'What does the trailer say about the warriors who died?', h: 'They were stronger than …' },
  { q: 'Which hero do you want to see most? Why?', h: 'The one who … / the one whose …' }
];

var TRECHOS = [
  { k: 'Something’s coming', ini: 0, fim: 20, ouvir: 'What is coming?', sentido: 'A voice warns that something is coming, something they may not be able to stop, and a terrible decision is waiting.', gram: 'It is a decision <b>that</b> nobody wants to make.' },
  { k: 'The warriors', ini: 28, fim: 50, ouvir: 'What happened to the old warriors?', sentido: 'Someone remembers the warriors he fought with: they were stronger than all of them together, and they died.', gram: 'The warriors <b>who</b> died were stronger.' },
  { k: 'Everything they gave', ini: 58, fim: 72, ouvir: 'Why must they stand together?', sentido: 'If they don’t stand together, everything that their friends sacrificed will be for nothing.', gram: 'Everything <b>that</b> they sacrificed.' },
  { k: 'Brothers and sisters', ini: 72, fim: 90, ouvir: 'How will they come back?', sentido: 'They must forget their small fights. If they come back, they come back as a family.', gram: 'The family <b>that</b> they become.' },
  { k: 'A miracle', ini: 90, fim: 115, ouvir: 'What do they need?', sentido: 'Someone says they will need a miracle. Someone else says it is not possible.', gram: 'The place <b>where</b> they meet.' }
];

var TRAPS = [
  ['Never what', 'Everything what they sacrificed.', 'Everything <b>that</b> they sacrificed.', 'everything that · the thing that (what is not a relative)'],
  ['Whose: the owner', 'The man who his cloak can fly.', 'The man <b>whose</b> cloak can fly.', 'whose + noun (= his / her / their)'],
  ['Don’t repeat', 'The shield that he carried it.', 'The shield <b>that</b> he carried.', 'that already is the shield: no it'],
  ['It can disappear', 'The decision that we have to make.', 'The decision <b>we</b> have to make.', 'when it is the object, you can drop that']
];

/* a mesa holográfica: o gesto forte */
var HEROIS = [
  { icone: 'escudo', nome: 'the shield' },
  { icone: 'martelo', nome: 'the hammer' },
  { icone: 'capa', nome: 'the cloak' },
  { icone: 'cidade', nome: 'the city' },
  { icone: 'estrela', nome: 'the fallen' },
  { icone: 'mascara', nome: 'the enemy' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, ms: { n: 0, esc: -1 } };

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
  return '<div class="av-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'the warriors <b>who</b> died · the shield <b>that</b> he carried<br>the country <b>where</b> they meet<br>the man <b>whose</b> cloak flies<br>the decision <b>we</b> have to make: drop it<br>never <b>what</b> · never add it / him / there';
/* III · antes: ligar o objeto ao herói */
var HO_LIGA = { formato: 'liga', titulo: 'Before you watch: whose is it? Match the object to its hero. Then say: He is the man whose …', pares: [
  ['the shield', 'Captain America'], ['the hammer', 'Thor'], ['the cloak that can fly', 'Doctor Strange'], ['the metal mask', 'Doctor Doom']
], ordemDireita: [2, 0, 3, 1] };
/* III · durante: a palavra que você ouviu e a palavra errada, cada uma no minuto do trailer (legenda-dados.js) */
var HO_SOM = { formato: 'som', itens: [
  { a: 'I fought with many ', par: ['warriors', 'worriers'], c: 0, b: ' in my time.', t: '0:31' },
  { a: 'They died facing enemies and ', par: ['threats', 'trades'], c: 0, b: '.', t: '0:46' },
  { a: 'We’re going to need a ', par: ['pinnacle', 'miracle'], c: 1, b: '.', t: '1:39' }
] };
var HO_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: 'I fought with many warriors in my <u>life</u>.', r: 'time', t: '0:31' },
  { f: 'Everything <u>what</u> they sacrifice will be for nothing.', r: 'that', t: '1:02' },
  { f: 'They died facing enemies and threats <u>who</u> scared me far less.', r: 'that', t: '0:46' }
] };
/* III · depois: verdade ou mentira */
var HO_VM = { formato: 'verdadeOuMentira', titulo: 'After the trailer: true or lie? If it is a lie, say the truth.', itens: [
  { f: 'The warriors who died were weaker than the heroes.', t: 0, tm: '0:35', c: 'They were far stronger than all of them.' },
  { f: 'The heroes must put aside their petty fights.', t: 1, tm: '1:09' },
  { f: 'They say they will need a lot of time.', t: 0, tm: '1:39', c: 'They say they will need a miracle.' },
  { f: 'Someone says a miracle is not possible.', t: 1, tm: '1:48' }
] };
/* V · pessoa, coisa, lugar ou dono: separar pelo sentido */
var HO_SEP = { formato: 'separa', titulo: 'Person, thing, place or owner? Tap a clue, then its box. Then say it with who, that, where or whose.', caixas: ['A person → who', 'A thing → that / which', 'A place → where', 'The owner → whose'], itens: [
  { t: 'the warriors · they died', c: 0 }, { t: 'the enemy · everybody fears him', c: 0 },
  { t: 'the shield · Steve carried it', c: 1 }, { t: 'Wakanda · the heroes meet there', c: 2 },
  { t: 'the man · his cloak can fly', c: 3 }, { t: 'the hero · her hammer is magic', c: 3 }
] };
var HO_ERRO5 = { formato: 'erro', titulo: 'One word is wrong. Find it and say the fix.', itens: [
  { f: 'The man <u>who</u> cloak can fly is a hero.', r: 'whose' },
  { f: 'This is the shield that Steve carried <u>it</u>.', r: '(delete it)' },
  { f: 'Wakanda is the country <u>which</u> the warriors meet.', r: 'where' },
  { f: 'The decision <u>what</u> we have to make is unthinkable.', r: 'that' }
] };
/* VI · a mesa: falar primeiro, Check, o herói aparece */
var HO_FALA = [
  { pista: 'the shield · Steve · used to carry (it)', resp: 'This is the shield <b>that</b> Steve used to carry.', depois: 'What is an object that you used to carry everywhere?' },
  { pista: 'the hammer · only Thor can lift (it) · is here', resp: 'The hammer <b>which</b> only Thor can lift is here.', depois: 'What is something that only you can do in your family?' },
  { pista: 'Doctor Strange · the man · his cloak can fly', resp: 'Doctor Strange is the man <b>whose</b> cloak can fly.', depois: 'Do you know someone whose job is very strange?' },
  { pista: 'Wakanda · the country · the warriors meet (there)', resp: 'Wakanda is the country <b>where</b> the warriors meet.', depois: 'What is the place where your family meets?' },
  { pista: 'the warriors · died · were stronger than us', resp: 'The warriors <b>who</b> died were stronger than us.', depois: 'Who is a person who taught you something important?' },
  { pista: 'Doom · the enemy · everybody fears (him)', resp: 'Doom is the enemy <b>that</b> everybody fears.', depois: 'The table is full. Who is a person that you admire?' }
];
/* VII · Ask Me */
var HO_PERG = [
  { p: '(who · be · a teacher · change · your life)?', r: 'Who is a teacher <b>who</b> changed your life?' },
  { p: '(what · be · a place · you feel safe)?', r: 'What is a place <b>where</b> you feel safe?' },
  { p: '(do you have · an object · have a story)?', r: 'Do you have an object <b>that</b> has a story?' },
  { p: '(do you know · someone · job · you would love to have)?', r: 'Do you know someone <b>whose</b> job you would love to have?' },
  { p: '(who · be · the friend · you call when things go wrong)?', r: 'Who is the friend <b>you</b> call when things go wrong?' }
];

/* os ícones dos objetos, desenhados em linha (SVG de 24 x 24) */
var ICONES = {
  escudo: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><path d="M12 9.5 L12.8 11.4 L14.8 11.5 L13.2 12.7 L13.8 14.6 L12 13.5 L10.2 14.6 L10.8 12.7 L9.2 11.5 L11.2 11.4 Z"/>',
  martelo: '<rect x="5" y="4" width="14" height="7" rx="1"/><path d="M12 11 L12 21"/>',
  chama: '<path d="M12 3 C15 8 18 10 18 14 A6 6 0 0 1 6 14 C6 10 9 9 12 3 Z"/>',
  capa: '<path d="M8 4 L16 4 L20 20 L12 17 L4 20 Z"/>',
  cidade: '<path d="M3 20 L3 11 L7 11 L7 6 L11 6 L11 13 L15 13 L15 8 L19 8 L19 20 Z"/>',
  estrela: '<path d="M12 3 L14.6 9 L21 9.3 L16 13.3 L17.6 20 L12 16.4 L6.4 20 L8 13.3 L3 9.3 L9.4 9 Z"/>',
  relogio: '<path d="M7 3 L17 3 L12 12 L17 21 L7 21 L12 12 Z"/>',
  mascara: '<path d="M5 6 Q12 2 19 6 L18 15 Q12 22 6 15 Z"/><path d="M8 11 L10.5 11 M13.5 11 L16 11"/>'
};
/* a mesa vista de cima: o núcleo de ameaça no centro e oito lugares em volta; cada lugar aceso projeta o ícone, o nome, e uma linha de luz até o centro */
function mesa(feitas, atual, nova) {
  var lugares = HEROIS.map(function (h, i) {
    var a = (i * 60 - 90) * Math.PI / 180, x = 160 + Math.cos(a) * 112, y = 160 + Math.sin(a) * 112;
    var cls = i < feitas ? (nova && i === feitas - 1 ? 'ok novo' : 'ok') : (i === atual ? 'vez' : '');
    var cx = Math.cos(a), sy = Math.sin(a), tx = 160 + cx * 140, ty = 160 + sy * 140 + 4 + (sy < -0.9 ? -8 : sy > 0.9 ? 10 : 0), anc = cx > 0.3 ? 'start' : cx < -0.3 ? 'end' : 'middle';
    return (i < feitas ? '<line class="av-raio' + (nova && i === feitas - 1 ? ' novo' : '') + '" x1="160" y1="160" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '"/>' : '')
      + '<g class="av-lugar ' + cls + '"><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="21"/>'
      + (i < feitas ? '<g transform="translate(' + (x - 12).toFixed(1) + ',' + (y - 12).toFixed(1) + ')" class="av-ico">' + ICONES[h.icone] + '</g>' : '<text x="' + x.toFixed(1) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="middle">' + (i + 1) + '</text>')
      + '<text class="av-nome" x="' + tx.toFixed(1) + '" y="' + ty.toFixed(1) + '" text-anchor="' + anc + '">' + (i < feitas || i === atual ? h.nome : '') + '</text></g>';
  }).join('');
  var fim = feitas >= HEROIS.length;
  return '<div class="av-holo vd' + (fim ? ' cheia' : '') + '" role="img" aria-label="The assembly table: ' + feitas + ' of ' + HEROIS.length + ' heroes"><svg viewBox="-10 -10 340 340" class="av-svg"><circle cx="160" cy="160" r="150" class="av-borda"/><circle cx="160" cy="160" r="112" class="av-anel"/>'
    + lugares + '<circle cx="160" cy="160" r="' + (34 - feitas * 2.5) + '" class="av-nucleo"/><circle cx="160" cy="160" r="46" class="av-nucleo2"/></svg>'
    + '<p class="av-legenda">' + (fim ? 'Assembled. Now we need a miracle.' : 'Heroes at the table · ' + feitas + ' of ' + HEROIS.length) + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · relative clauses · who, which, that, where, whose</span><h1>In My Time</h1>'
    + '<p class="banda">' + FILME + '</p>'
    + '<p class="sub">Something is coming that nobody can stop alone. The warriors who were stronger are gone. Tonight you call the heroes who are left to the table, one by one: the one who, the thing that, the place where, the man whose.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Assemble</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r av-foto"><img src="' + img('capa') + '" alt="A dark war room with a round table and a glowing blue hologram of a planet"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="av-encarte vd"><div class="av-capinha"><img src="' + img('ceu') + '" alt=""><div><small>' + FILME + '</small><b>The sky that changed</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="av-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Who is the person that you would call if the world was ending?</h2></div>' + mostra('enc', 'My brother. He is the person who always knows what to do.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', HO_LIGA) + '</div>'
    + '<div class="lado-l"><div class="av-selo vd"><b>Avengers</b><small>Doomsday · the official trailer · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="av-video"><div class="av-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="av-cred">' + FILME + ' · official trailer (Marvel) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('som', HO_SOM) + FM.ex('erro', HO_ERRO) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="av-centro">' + FM.ex('vm', HO_VM) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="av-video"><div class="av-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="av-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="av-sentido">' + x.sentido + '</span><span class="av-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="av-centro"><p class="av-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="av-centro">' + FM.ex('sep', HO_SEP) + FM.ex('erro5', HO_ERRO5) + '</div>';
};

R.mesa = function (c) {
  return cab(c) + FM.fala('mesa', HO_FALA, {
    rotulo: 'Seat', prox: 'Next seat', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + mesa(feitas, atual, nova) + '</div>'; },
    fim: 'The table is full. Walk the teacher around it and introduce each hero: who, that, which, whose, where.'
  });
};

R.herois = function (c) {
  return cab(c) + FM.pergunta('ask', HO_PERG, { regra: PRESA, depois: ['We both …', 'You …, but I …', 'Me too!'] });
};

R.fim = function (c) {
  return cab(c) + '<div class="av-centro"><p class="av-dica">Questions.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'duelo', rot: 'I · Choose Your Side', t: 'Before the trailer: which hero are you?', p: 'Pick one side. Then say why. The teacher picks too.',
  itens: [
    { a: 'The leader', b: 'The one who follows', q: 'In a team, which one are you?', ex: 'The leader. I am the person who always organizes everything.' },
    { a: 'Super strength', b: 'Reading minds', q: 'Which power would you choose?', ex: 'Reading minds. I want to know what people think!' },
    { a: 'Save the world', b: 'Save your family', q: 'An impossible choice: which one?', ex: 'My family. They are the people who matter most.' },
    { a: 'A hero with a mask', b: 'A hero everybody knows', q: 'Which kind of hero would you be?', ex: 'With a mask. I am a person who likes privacy.' },
    { a: 'Old heroes', b: 'New heroes', q: 'Which ones do you prefer in films?', ex: 'Old heroes, the ones that I watched as a kid.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'perguntas', rot: 'VIII · Questions', t: 'Questions about the people and places in your life.', p: 'Answer each question with a relative clause. Then ask the teacher.',
  itens: [
    { q: 'Who is the person you trust most?', ex: 'My sister. She is the person who never lies to me.' },
    { q: 'What is a place where you were very happy?', ex: 'The beach where we spent every summer.' },
    { q: 'Do you know someone whose job you would love to have?', ex: 'Yes, my cousin, whose job is testing video games!' },
    { q: 'What is something that you can’t live without?', ex: 'Coffee. It is the thing that wakes me up.' },
    { q: 'What is the best film that you saw this year?', ex: 'The best film I saw was a Korean thriller.' }
  ],
  depois: 'Now you ask the teacher two of these questions.' };
/*FIM@@*/
