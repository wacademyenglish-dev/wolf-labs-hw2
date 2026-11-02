/* ============================================================
   BACKROOMS · THE MAP · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · present perfect: have / has + particípio (do passado até
   agora): someone has been here, I have been here every night since I
   found it; since (um ponto) × for (um período); never / just / ever;
   How long have you been…?
   Erros: have + verbo base (have find), am / was no lugar de have (am
   found, was been), presente com since / for (I am here since…), since
   × for trocados, have com he / someone, never / just fora do lugar,
   passado no lugar do particípio (have saw), pergunta sem inversão.
   Catálogo WOLFLIX Live (07/10): família TERROR, modo ESCURO.
   A tela forte: o mapa que se desenha sozinho. A planta do Nível 0 vista
   de cima, apagada; cada frase certa desenha uma sala, em amarelo
   apagado (nunca fluorescente), com a marca “someone has been here” e o
   caminho tracejado até ela. No fim, a porta: o mapa inteiro.
   O AQUECIMENTO (aquece.js): o ranking dos lugares que dão medo. O
   FECHAMENTO (final.js): a cadeira quente, o aluno é o Clark.
   O VÍDEO: 0HjdiohVOik (trailer oficial A24, 2:18, idade 0, embed sim).
   Terror sem sangue: corredores, uma voz no alto-falante, um grito
   rápido no fim. Tempos lidos da legenda (yt-dlp, 07/10), contados com
   palavras nossas.
   A CARA: escuro de sala abandonada, amarelo de papel de parede velho,
   verde-cinza de mofo; VT323 só no título, Public Sans no texto, a
   planta em traço fino. A antiga era a lanterna de quarto em quarto.
   Fila: FILA-LIVE-386.md · 300.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: antes, um minuto de conversa com cronômetro; durante, achar a
   palavra errada e escolher o que ele diz, com ▶ nas falas do trailer
   (legenda-dados.js); depois, pôr os momentos na ordem + uma régua.
   V: separar since / for (a regra aparece quando todos estão certos);
   VI: a planta com seis salas (fala primeiro: o aluno diz e toca Check, a
   sala é desenhada); VII (era EXTRA): um dado com três temas + cronômetro.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'vhs', rot: 'I · Warm-up and In the Dark', t: 'Before the trailer: strange places you have been, then a voice in the dark.', p: 'Answer three questions about your life. Then close your eyes and listen to the start of the trailer.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Backrooms. The official trailer.', p: 'Talk for one minute. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'loja', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'vhs', rot: 'V · Someone Has Been Here', t: 'Since or for? Sort the times. Then see the rule.', p: 'Tap a time, then its box. When all six are right, the rule appears.' },
  { k: 'mapa', est: 'o', min: 7, img: 'capa', rot: 'VI · The Map', t: 'Level 0, room by room. Every right sentence draws one.', p: 'Read the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'desde', est: 'o', min: 7, img: 'loja', rot: 'VII · Since and For', t: 'Roll the dice: three things from your life, from the past until now.', p: 'Roll, then say one sentence for each word. Then start the clock.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · The Hot Seat', t: 'The hot seat.', p: 'Hot seat.' }
];

var FILME = 'Backrooms', ANO = '2026';
var YT = '0HjdiohVOik', DUR = 138;

var ENCARTE = [
  ['The film', '<i>Backrooms</i> (2026) is an A24 horror film by Kane Parsons, from his own YouTube videos that millions of people have watched.'],
  ['The place', 'Behind a small door in a furniture store, there is a place that shouldn’t exist: empty rooms with old yellow wallpaper and damp carpet, one after the other, forever.'],
  ['The man', 'Clark found it. He has been there every night since, filming, and he still hasn’t found the end. Someone has been there before him.']
];

var ANTES = [
  { q: 'Have you ever been in an empty building at night? Where?', h: 'Yes, I have … / No, I haven’t …' },
  { q: 'Have you ever seen a horror film in the cinema? Did you like it?', h: 'Yes, I have seen …' }
];
var DEPOIS = [
  { q: 'How long has Clark been going there? What has he found?', h: 'He has been there … He has found …' },
  { q: 'Would you go through that door? Why or why not?', h: 'No way! / Maybe, because …' }
];

var TRECHOS = [
  { k: 'I found a place', ini: 0, fim: 30, ouvir: 'What did he find, and where?', sentido: 'A man calls a friend: he has found something in the store. Not an object. A place.', gram: 'He <b>has found</b> a place.' },
  { k: 'Anyone there?', ini: 30, fim: 50, ouvir: 'What do we hear in the empty rooms?', sentido: 'A voice speaks in a strange language over a loudspeaker. Someone calls: hello? Is anyone there? Nobody answers.', gram: 'Nobody <b>has answered</b> yet.' },
  { k: 'The proof', ini: 50, fim: 64, ouvir: 'Does his friend believe him?', sentido: 'He knows how it sounds. The place is huge, he says, and he promises to come back with proof. His friend starts filming.', gram: '<b>Have</b> you <b>ever seen</b> a place like this?' },
  { k: 'Every night', ini: 64, fim: 80, ouvir: 'How often has he gone there?', sentido: 'He says he has been there every night since he found it, and he has only seen a tiny part of it.', gram: 'I <b>have been</b> here every night <b>since</b> I found it.' },
  { k: 'All these rooms', ini: 80, fim: 104, ouvir: 'What does the place do?', sentido: 'From above, all you can see is rooms. The place builds them, like a maze that never ends. He is scared he will get lost. (A short scream at the end.)', gram: 'He <b>has never seen</b> anything like it.' }
];

var TRAPS = [
  ['Have + participle', 'I have find a place.', 'I <b>have found</b> a place.', 'have / has + past participle: found, seen, been'],
  ['Since or for', 'We have walked since three hours.', 'We have walked <b>for</b> three hours. … <b>since</b> Monday.', 'for + a period · since + a point'],
  ['Until now', 'I am here every night since I found it.', 'I <b>have been</b> here every night since I found it.', 'from the past until now: present perfect'],
  ['The question', 'How long you have been here?', 'How long <b>have you</b> been here?', 'How long have you…? · Have you ever…?']
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>Someone has been</b> here · have / has + participle<br><b>since</b> I found it (a point) · <b>for</b> three hours (a period)<br><b>I have never seen</b> it · never, just, ever: between have and the participle<br><b>How long have you</b> been here? · have comes first';
/* III · antes: um minuto de conversa */
var VD_CRONO = { formato: 'cronometro', titulo: 'Before you watch · just a minute', segundos: 30, texto: 'Talk for 30 seconds. Have you ever been in an empty building at night? Or in a place that scared you? Start with: I have … / I haven’t …' };
/* III · durante: a palavra errada e o que ele diz, cada um no minuto do trailer (legenda-dados.js) */
var VD_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: 'I’ve been here every night <u>for</u> I found the place.', r: 'since', t: '1:07' },
  { f: 'I’m gonna come back here with <u>luck</u>.', r: 'proof', t: '0:58' },
  { f: 'Sometimes I’m scared I’ll get <u>late</u>.', r: 'lost', t: '1:34' }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'What does he say? Tap one.', itens: [
  { p: 'Where did he find it?', o: ['In a store', 'In a school', 'In a hotel'], c: 0, tm: '0:05', d: 'Yes: he says it was in the store.' },
  { p: 'What does he say he will bring back?', o: ['Proof', 'Food', 'A map'], c: 0, tm: '0:58', d: 'Yes: he will come back with proof.' },
  { p: 'What does the voice say about the place?', o: ['It builds the rooms', 'It cleans the rooms', 'It sells the rooms'], c: 0, tm: '1:26', d: 'Yes: “This place builds them.”' }
] };
/* III · depois: os momentos na ordem + uma régua */
var VD_ORD = { formato: 'ordem', titulo: 'After the trailer', toque: 'Tap the moments in the order of the trailer', itens: [
  { t: 'Scared of getting lost', img: 'mapa', n: 4 }, { t: 'He found a place', img: 'loja', n: 1 }, { t: 'Every night since', img: 'corredor', n: 3 }, { t: 'He promises proof', img: 'vhs', n: 2 }
] };
var VD_REG = { formato: 'regua', titulo: 'Your opinion', frase: 'I would go through that door.', esquerda: 'No way', direita: 'Yes, I would', depois: 'Say why: I have never … / I have always … / I haven’t …' };
/* V · since ou for: separar os tempos; a regra aparece no fim */
var SEPARA_SF = { formato: 'separa', titulo: 'Tap a time, then its box.', caixas: ['since + a point in time', 'for + a period of time'], itens: [
  { t: 'Monday', c: 0 }, { t: 'three hours', c: 1 }, { t: '2019', c: 0 }, { t: 'a long time', c: 1 }, { t: 'I found it', c: 0 }, { t: 'two weeks', c: 1 }
] };
/* VI · a planta: seis salas, fala primeiro */
var SALAS = [
  { sala: 'The door', x: 24, y: 214, w: 60, h: 46 }, { sala: 'Room 1', x: 96, y: 196, w: 74, h: 64 }, { sala: 'The yellow hall', x: 104, y: 118, w: 150, h: 54 },
  { sala: 'Long room', x: 268, y: 118, w: 70, h: 120 }, { sala: 'Office', x: 186, y: 186, w: 66, h: 74 }, { sala: 'Carpet room', x: 186, y: 30, w: 92, h: 72 }
];
var TIROS = [
  { pista: 'The door · I · find a place · behind the store', resp: 'I <b>have found</b> a place behind the store.', depois: 'Have you found anything strange this year? What?' },
  { pista: 'Room 1 · I · be here every night · since I found it', resp: 'I <b>have been</b> here every night <b>since</b> I found it.', depois: 'Where have you been every week since this year started?' },
  { pista: 'The yellow hall · someone · be here · before', resp: 'Someone <b>has been</b> here before.', depois: 'How do you know when someone has been in your room?' },
  { pista: 'Long room · we · walk · three hours', resp: 'We <b>have walked for</b> three hours.', depois: 'What have you done for hours without stopping?' },
  { pista: 'Office · I · never · see a room like this', resp: 'I <b>have never seen</b> a room like this.', depois: 'What have you never seen, but want to see?' },
  { pista: 'Carpet room · how long · you · be here? · a question', resp: 'How long <b>have you been</b> here?', depois: 'Ask the teacher: How long have you lived in your city?' }
];
/* VII (era EXTRA) · um dado com três temas + um minuto */
var VG_DADO = { formato: 'sorteio', tipo: 'dado', titulo: 'Roll the dice · three things from your life', botao: 'Roll', opcoes: ['your home', 'your job', 'English', 'your phone', 'an old friend', 'a place you have never been to'] };
var VG_CRONO = { formato: 'cronometro', titulo: 'Just a minute · since and for', segundos: 45, texto: 'Talk for 45 seconds about the three things on the dice. Use since, for and never. How long have you…?' };

/* o mapa: o gesto forte */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, mp: { n: 0, esc: -1 } };

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
  return '<div class="bk-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a planta do Nível 0: as salas desenhadas acendem em amarelo apagado, com o caminho tracejado de sala em sala; a da vez é só um contorno pontilhado */
function planta(feitas, atual, nova) {
  var fim = feitas >= SALAS.length, cs = '', cam = [];
  SALAS.forEach(function (s, i) {
    var cx = s.x + s.w / 2, cy = s.y + s.h / 2;
    if (i < feitas) {
      cam.push(cx.toFixed(0) + ',' + cy.toFixed(0));
      cs += '<g class="bk-sala' + (nova && i === feitas - 1 ? ' novo' : '') + '"><rect x="' + s.x + '" y="' + s.y + '" width="' + s.w + '" height="' + s.h + '"/><text x="' + (s.x + 5) + '" y="' + (s.y + 13) + '">' + s.sala + '</text><path class="bk-pe" d="M' + (cx - 6) + ' ' + (cy + 6) + 'l3 -3m3 0l3 -3"/></g>';
    } else if (i === atual) cs += '<rect class="bk-vez" x="' + s.x + '" y="' + s.y + '" width="' + s.w + '" height="' + s.h + '"/>';
  });
  var aqui = cam.length ? cam[cam.length - 1].split(',') : null;
  return '<div class="bk-planta vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The map of Level 0: ' + feitas + ' of ' + SALAS.length + ' rooms drawn"><div class="bk-topo"><b>Level 0</b><small>' + (fim ? 'mapped' : feitas + ' / ' + SALAS.length + ' rooms') + '</small></div>'
    + '<svg class="bk-svg" viewBox="0 0 420 280" aria-hidden="true"><defs><pattern id="bk-grade" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0H0V14" fill="none" stroke="#1c1a10" stroke-width="1"/></pattern></defs><rect width="420" height="280" fill="url(#bk-grade)"/>'
    + cs + (cam.length > 1 ? '<polyline class="bk-caminho" points="' + cam.join(' ') + '"/>' : '')
    + (aqui ? '<circle class="bk-aqui" cx="' + aqui[0] + '" cy="' + aqui[1] + '" r="4"/>' : '')
    + (fim ? '<g class="bk-porta"><rect x="398" y="214" width="12" height="30" rx="1"/></g>' : '') + '</svg>'
    + '<p class="bk-legenda">' + (fim ? 'Six rooms. Someone has been in every one of them.' : 'Someone has been here. ' + feitas + ' rooms drawn.') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · present perfect · since, for, never, ever</span><h1>Backrooms</h1>'
    + '<p class="banda">' + FILME + ' · A24</p>'
    + '<p class="sub">Behind a door in a furniture store there are rooms that never end, and someone has been there before you. Tonight you map Level 0, one room at a time, with the tense of things that started in the past and haven’t stopped.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Go through the door</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r bk-foto"><img src="' + img('capa') + '" alt="A dark corridor of old yellow wallpaper with all the lights off and a faint glow from a far doorway"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="bk-encarte vd"><div class="bk-capinha"><img src="' + img('vhs') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>Clark’s camera</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="bk-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Clark has gone back every night. Why do you think he keeps going?</h2></div>' + mostra('enc', 'He has found something nobody has seen. He wants to understand it.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vc', VD_CRONO) + '</div>'
    + '<div class="lado-l"><div class="bk-selo vd"><b>' + FILME + '</b><small>the official trailer · horror, no blood · one short scream at the end</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="bk-video"><div class="bk-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="bk-cred">' + FILME + ' · official trailer (A24) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('ve', VD_ERRO) + FM.ex('vs', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vo', VD_ORD) + '</div><div class="lado-l">' + FM.ex('vg', VD_REG) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="bk-video"><div class="bk-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="bk-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="bk-sentido">' + x.sentido + '</span><span class="bk-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="bk-centro"><p class="bk-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).sf, em = (e && e.em) || {}, ok = !!e;
  SEPARA_SF.itens.forEach(function (x, i) { if (em[i] !== x.c) ok = false; });
  return cab(c) + '<div class="bk-centro">' + FM.ex('sf', SEPARA_SF)
    + (ok ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Sort all six times. Then the rule appears.</p>') + '</div>';
};

R.mapa = function (c) {
  return cab(c) + FM.fala('tiro', TIROS, {
    rotulo: 'Room', prox: 'Next room', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + planta(feitas, atual, atual >= 0 ? nova : 0) + '</div>'; },
    fim: 'Level 0 is mapped. Now report to the teacher like Clark: say three things you have done, seen or found in there.'
  });
};

R.desde = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('dd', VG_DADO) + '</div><div class="lado-l">' + FM.ex('dc', VG_CRONO) + '</div></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="bk-centro"><p class="bk-dica">The hot seat.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'ranking', rot: 'I · Scary Places', t: 'Before the trailer: which place is the scariest?', p: 'Tap the places from the scariest to the least scary. Then explain the top and the bottom.',
  rotulo: 'Scary places', q: 'Which place is the scariest for you? Put them in order.',
  itens: ['An empty mall at night', 'A hospital hallway at 3 a.m.', 'A forest with no phone signal', 'An elevator that stops between floors', 'Your old school, empty'],
  depois: 'Have you ever been in a place like that? What happened?', ex: 'Number 1 is the elevator. I have been stuck in one, for an hour!' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'cadeira', rot: 'VIII · The Hot Seat', t: 'The hot seat: Clark, back from the Backrooms.', p: 'Sit in the hot seat as Clark. The teacher asks what you have done and seen in there. Answer with the present perfect. Then swap.',
  quem: 'Clark, back from the Backrooms',
  itens: [
    { q: 'How long have you been going in there?', ex: 'I have been there every night for two weeks.' },
    { q: 'What have you seen?', ex: 'I have seen rooms that never end.' },
    { q: 'Have you ever met anyone in there?', ex: 'No, I haven’t. But someone has been there before me.' },
    { q: 'Have you told your family?', ex: 'No, I haven’t told anybody yet.' },
    { q: 'Why have you gone back so many times?', ex: 'Because I haven’t found the end yet.' }
  ] };
/*FIM@@*/
