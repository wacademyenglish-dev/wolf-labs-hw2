/* ============================================================
   LOOK AT MY PICTURES · THREE FRAMES · LIVE CLASS  05/10/2026
   Main series A1 · London series 3/3 · at / in / on com LUGARES (at the
   shops · in London · on the bus) · very · home sem preposição
   O MUNDO: a corrida Londres → Edimburgo; a Paula fica em Londres
   tirando fotos. A aula é o álbum dela, com TRÊS MOLDURAS desenhadas:
   AT = um ponto no mapa (alfinete), IN = uma caixa ao redor, ON = uma
   superfície embaixo. A foto só cola na moldura certa; na errada, cai.
   Mantidos: o vídeo (4SHGkvbva3I, 0:02–1:10 e 2:16–3:20), os 27 áudios
   (transcrições conferidas no faster-whisper; ouvir primeiro), as fotos.
   Fila: FILA-LIVE-386.md · 014.
   ============================================================ */
var YT = '4SHGkvbva3I';
var L = [
  { k: 'capa', est: null, img: 'album' },
  { k: 'foto', est: 'o', min: 7, img: 'album', rot: 'I · Your Last Photo', t: 'Open your phone. Find your last photo.', p: 'Pick a card. Answer out loud. Your teacher taps the word you used. Don’t worry about it yet.' },
  { k: 'corrida', est: 'l', min: 7, img: 'bridge', rot: 'II · The Race', t: 'Three cards. The story before the photos.', p: 'Listen to each card first. Then open the transcript and read it out loud.' },
  { k: 'video1', est: 'l', min: 7, img: 'album', rot: 'III · Watch: The Start', t: 'The race begins. Six words matter.', p: 'Ears only. Tap each word when you hear it.' },
  { k: 'ouve', est: 'l', min: 7, extra: 1, img: 'album', rot: 'IV · Listen', t: 'Five places. Hear it, say it three times, then see it.', p: 'Play it. Say it three times. Then show it: it goes into its frame.' },
  { k: 'gx', est: 'o', min: 4, img: 'album', rot: 'V · Look First', t: 'Four photos from Paula.', p: 'Look at the picture. Guess what she says. Then tap to see it, and say it.' },
  { k: 'molduras', est: 'f', min: 6, img: 'album', rot: 'VI · The Three Frames', t: 'Three frames. A photo only sticks in the right one.', p: 'Say the sentence first. Then drop the photo into a frame.' },
  { k: 'very', est: 'o', min: 7, img: 'bridge', rot: 'VII · Very', t: 'One small word. The photo gets bigger, and so does your voice.', p: 'Play it. Say it. Then zoom, and say it bigger.' },
  { k: 'album', est: 'l', min: 7, extra: 1, img: 'park', rot: 'VIII · Paula’s Album', t: 'Three photos from Paula. Every caption lost one word.', p: 'Play the caption. Put the word back. Then say it about your photo.' },
  { k: 'video2', est: 'l', min: 7, extra: 1, img: 'bridge', rot: 'IX · Watch: Paula in London', t: 'Paula in London. You know every one of these words.', p: 'Tap each word when you hear it. Then one question.' },
  { k: 'colunas', est: 'f', min: 6, extra: 1, img: 'album', rot: 'X · Sort Them, Fast', t: 'Nine places. One takes no word at all.', p: 'Say the whole sentence. Then drop it in a column.' },
  { k: 'suas', est: 'o', min: 7, extra: 1, img: 'album', rot: 'XI · Your Three Photos', t: 'Your turn. Three photos from your phone.', p: 'For each photo: where you are, what it’s like, and who is with you.' },
  { k: 'fim', est: 'w', min: 6, img: 'album', rot: 'XII · Your Album', t: 'Write the captions for your album.', p: 'Five captions: where you are (at, in, on) and what it’s like (very…). The red line watches the little words. It goes to your My notes.' }
];

var FOTO = [
  { k: 'RIGHT NOW', q: 'Where are you right now?', fup: 'And your family?', st: ['I’m in …', 'I’m at …'], ex: 'I’m at home, in my room. My parents are at work.' },
  { k: 'LAST PHOTO', q: 'Look at a photo on your phone. Where are you?', fup: 'What is there in the photo?', st: ['I’m in …', 'I’m on …', 'I’m at …'], ex: 'I’m on the beach with my cousins. There is a big umbrella.' },
  { k: 'FAVORITE', q: 'What is your favorite photo on your phone? Where are you in it?', fup: 'Who is with you?', st: ['I’m in …', 'I’m on …'], ex: 'I’m on a boat in Bahia. My sister is with me.' },
  { k: 'TRAVEL', q: 'Where are you in your best travel photo?', fup: 'Are there a lot of people?', st: ['I’m in …', 'I’m at …'], ex: 'I’m in Buenos Aires, at a café. It’s very busy!' }
];
var FORMAS = [{ k: 'in', t: 'IN …' }, { k: 'on', t: 'ON …' }, { k: 'at', t: 'AT …' }, { k: 'nada', t: 'NO WORD / ANOTHER WORD', erro: 1 }];

var CORRIDA = [
  { n: 'THE RACE', au: 'r-race.mp3', t: 'London to Edinburgh. Five days. Three people. One hundred pounds each. That is all.' },
  { n: 'THE THREE', au: 'r-three.mp3', t: 'Bob is on a train. Fran is on a bike. They are moving north. Day three, and they are far away.' },
  { n: 'PAULA', au: 'r-paula.mp3', t: 'Paula is still in London. She is not moving. She is taking photos.' }
];

var VIDEOS = {
  video1: { ini: 2, fim: 70, cred: 'Video: from 0:02 to 1:10', antes: 'Three people, one hundred pounds, five days. How do you go from London to Edinburgh? Guess.', pal: ['London', 'Edinburgh', 'train', 'cycling', 'waiting', 'Paula'], q: 'Where is Bob? Where is Fran? And Paula?', st: ['Bob is on …', 'Fran is …', 'Paula is in …'], ex: 'Bob is on the train. Fran is cycling. Paula is still in London.', trans: 'London to Edinburgh. Three people. One hundred pounds. Five days. I am in Edinburgh. I am waiting for Bob, Paula and Fran. Bob is on the train to Cambridge, Fran is cycling, and Paula is in London.' },
  video2: { ini: 136, fim: 200, cred: 'Video: from 2:16 to 3:20', antes: 'Paula is not racing. What is she doing in London? Guess.', pal: ['big', 'busy', 'very', 'shops', 'park', 'bridge'], q: 'Where is Paula in the three moments?', st: ['She is at …', 'She is in …', 'She is on …'], ex: 'She is at the shops. She is in the park. She is on a bridge.', trans: 'Paula is having an amazing time. London is big. London is very big. London is very busy. She is at the shops. She is in the park. She is on a bridge over the river.' }
};

var OUVE = [
  { au: 'w-inlondon.mp3', en: 'I am in London.', k: 'in' }, { au: 'w-atshops.mp3', en: 'I am at the shops.', k: 'at' },
  { au: 'w-onbridge.mp3', en: 'I am on a bridge.', k: 'on' }, { au: 'w-inpark.mp3', en: 'I am in the park.', k: 'in' },
  { au: 'w-onbus.mp3', en: 'I am on the bus.', k: 'on' }
];

var MOLD = { at: ['AT', 'one point on the map'], in: ['IN', 'a box around you'], on: ['ON', 'a surface or a line under you'] };
var ITENS = [
  { t: 'the bus', ic: '🚌', k: 'on', w: 'You stand on its floor, and it moves.', au: 'z-bus.mp3' },
  { t: 'London', ic: '🏙️', k: 'in', w: 'A city is a big box around you.', au: 'z-london.mp3' },
  { t: 'the shops', ic: '🛍️', k: 'at', w: 'One point on the map. You go there to do something.', au: 'z-shops.mp3' },
  { t: 'a bridge', ic: '🌉', k: 'on', w: 'A bridge is a line, and you are on the line.', au: 'z-bridge.mp3' },
  { t: 'the park', ic: '🌳', k: 'in', w: 'Trees all around you. You are inside.', au: 'z-park.mp3' },
  { t: 'work', ic: '💼', k: 'at', w: 'One point. You go there for a reason.', au: 'z-work.mp3' },
  { t: 'the train', ic: '🚆', k: 'on', w: 'Same as the bus.', au: 'z-train.mp3' },
  { t: 'the kitchen', ic: '🍳', k: 'in', w: 'Four walls around you.', au: 'z-kitchen.mp3' }
];
var NAO_M = { in: 'It falls off: that one is not a box. You are not inside it.', on: 'It falls off: that one is not a surface you stand on.', at: 'It falls off: that one is not one point. It is bigger than that.' };

var VERY = [
  { s: 'London is big.', s2: 'London is very big.', au: 'c-big.mp3', au2: 'c-verybig.mp3' },
  { s: 'London is busy.', s2: 'London is very busy.', au: 'c-busy.mp3', au2: 'c-verybusy.mp3' },
  { s: 'London is good.', s2: 'London is very good.', au: 'c-good.mp3', au2: 'c-verygood.mp3' }
];

var ALBUM = [
  { n: 'PHOTO 1', img: 'shops', pre: 'Look, I am ', pos: ' the shops.', ok: 'at', au: 'p-shops.mp3', w: 'One point on the map. She is there to buy something.' },
  { n: 'PHOTO 2', img: 'park', pre: 'I am ', pos: ' Hyde Park.', ok: 'in', au: 'p-park.mp3', w: 'Trees all around her. She is inside.' },
  { n: 'PHOTO 3', img: 'bridge', pre: 'I am ', pos: ' a bridge.', ok: 'on', au: 'p-bridge.mp3', w: 'A bridge is a line, and she is on the line.' }
];

var COLS = [
  { t: 'school', k: 'at' }, { t: 'a plane', k: 'on' }, { t: 'Brazil', k: 'in' }, { t: 'the bus stop', k: 'at' }, { t: 'my room', k: 'in' },
  { t: 'home', k: '-', d: 'HOME takes no word: I’m home.' }, { t: 'the street', k: 'on' }, { t: 'the station', k: 'at' }, { t: 'a taxi', k: 'in', d: 'A taxi is small: you sit IN it, like a car.' }
];
var PARTES = [{ k: 'lugar', t: 'WHERE? → I’M IN / ON / AT …' }, { k: 'very', t: 'WHAT IS IT LIKE? → IT’S VERY …' }, { k: 'mais', t: 'WHO IS WITH YOU? → I’M WITH …' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  foto: { sel: -1, foi: {}, formas: {} }, video1: { p: 0, ouviu: {} }, video2: { p: 0, ouviu: {} }, ouve: { n: 0, viu: 0, vezes: 0 },
  mold: { sel: -1, feitos: {}, err: '' }, very: { n: 0, zoom: 0 }, album: { esc: {} }, cols: { sel: -1, feitos: {}, err: '' }, suas: { n: 0, partes: {}, erro: 0 } };

function moldura(k, conteudo, extra) {
  var m = MOLD[k];
  var simbolo = k === 'at' ? '<svg viewBox="0 0 60 60" class="sim-at"><path d="M30 6c-11 0-19 8-19 19 0 14 19 31 19 31s19-17 19-31C49 14 41 6 30 6z"/><circle cx="30" cy="25" r="7"/></svg>'
    : k === 'in' ? '<svg viewBox="0 0 60 60" class="sim-in"><path d="M8 20 L30 8 L52 20 L52 46 L30 56 L8 46 Z"/><circle cx="30" cy="34" r="6"/></svg>'
      : '<svg viewBox="0 0 60 60" class="sim-on"><rect x="6" y="38" width="48" height="10" rx="3"/><circle cx="30" cy="26" r="8"/></svg>';
  return '<button type="button" class="moldura m-' + k + (extra || '') + '" data-a="md" data-v="' + k + '"><span class="topo-m">' + simbolo + '<b>' + m[0] + '</b><small>' + m[1] + '</small></span><span class="dentro-m">' + (conteudo || '') + '</span></button>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · LONDON SERIES · A1</span><h1>Look at <b>My Pictures</b></h1>'
    + '<p class="sub">One city, three photos, three little words. Every photo goes in one frame: at, in or on.</p>'
    + '<div class="chipsx"><span class="pilula">at the shops</span><span class="pilula">in London</span><span class="pilula">on the bus</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the album</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('album') + '" alt="A photo album and a map on a wooden table"><div class="placa-capa"><small>PAULA’S ALBUM</small><b>London</b><span>DAY THREE</span></div></div></div>';
};

R.foto = function (c) {
  var base = cartasPessoais(c, FOTO, S.foto, 'foto');
  return base + '<div class="partes so-prof"><h5>THE WORD YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.foto.formas[f.k] ? ' on' : '') + '" data-a="ft-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.corrida = function (c) {
  return cab(c) + '<div class="cartoes-c">' + CORRIDA.map(function (x, i) {
    return '<div class="corrida-c vd"><small>' + (i + 1) + ' · ' + x.n + '</small><div class="toca-linha">' + tocar(x.au) + '</div>' + transcricao(x.au, x.t, 'cr' + i) + '</div>';
  }).join('') + '</div>' + (CORRIDA.every(function (x) { return (S.ouviu || {})[x.au]; }) ? '<div class="foco">' + follow('SAY IT BACK', 'Without looking: where are the three people?', ['Bob is on …', 'Fran is on …', 'Paula is in …'], [], 'crb', mostra('crb', 'Bob is on a train. Fran is on a bike. Paula is still in London.')) + '</div>' : '');
};

function cenaVideo(c, chave) {
  var v = VIDEOS[chave], e = S[chave], tudo = v.pal.every(function (w) { return e.ouviu[w]; });
  var passos = '<div class="tres-tempos">' + tempos3(e.p, 'vid-p', null, chave) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>' + v.antes + '</h2></div>' + fala(chave + 'a', ['I think …', 'Maybe …'], v.pal) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vid-p" data-c="' + chave + '" data-n="1">Watch</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The race from London to Edinburgh', '&start=' + v.ini + '&end=' + v.fim) + '<small class="cred">' + v.cred + '</small></div><div class="lado-video"><h5>TAP WHEN YOU HEAR IT</h5><div class="ouvidos">'
    + v.pal.map(function (w) { return '<button type="button" class="ouvido' + (e.ouviu[w] ? ' on' : '') + '" data-a="vid-w" data-c="' + chave + '" data-v="' + h(w) + '">' + w + '</button>'; }).join('') + '</div>'
    + (tudo ? '<p class="aprova">GOT IT. All six words.</p>' : '<p class="dica-aluno">Nobody has to understand the rest.</p>') + '<div><button type="button" class="btn" data-a="vid-p" data-c="' + chave + '" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>' + v.q + '</h2></div>' + fala(chave + 'b', v.st, []) + mostra(chave + 'q', v.ex)
    + ((S.trans || {})[chave + 't'] ? '<div class="post-trans vd"><small>WHAT THEY SAY IN THE VIDEO</small><p class="transcricao">' + v.trans + '</p></div>' : '<div class="resp-btn"><button type="button" class="pilula" data-a="trans" data-c="' + chave + 't">Show transcript</button></div>') + '</div>';
  return cab(c) + passos + corpo;
}
R.video1 = function (c) { return cenaVideo(c, 'video1'); };
R.video2 = function (c) { return cenaVideo(c, 'video2'); };

R.ouve = function (c) {
  var e = S.ouve, n = e.n, fim = n >= OUVE.length, x = OUVE[Math.min(n, OUVE.length - 1)];
  var mini = '<div class="tres-mini">' + ['at', 'in', 'on'].map(function (k) { var dentro = OUVE.slice(0, n + (e.viu ? 1 : 0)).filter(function (o) { return o.k === k; }).map(function (o) { return '<span>' + o.en.replace('I am ', '') + '</span>'; }).join(''); return '<div class="mini-m m-' + k + '"><b>' + k.toUpperCase() + '</b>' + dentro + '</div>'; }).join('') + '</div>';
  if (fim) return cab(c) + trilha(OUVE, n) + mini + '<div class="foco"><div class="pergunta vd"><small>FIVE PLACES</small><h2>Two in IN, two in ON, one in AT.</h2></div></div>';
  var ouviu = (S.ouviu || {})[x.au];
  return cab(c) + trilha(OUVE, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (e.viu ? '<b>' + x.en + '</b>' : (ouviu ? 'Say it three times.' : 'Play it. Ears only.')) + '</span></div>'
    + '<div class="vezes">' + [1, 2, 3].map(function (k) { return '<button type="button" class="vez' + (e.vezes >= k ? ' on' : '') + '" data-a="ov-vez" data-n="' + k + '">' + k + '</button>'; }).join('') + '</div>'
    + '<div style="text-align:center">' + (e.viu ? '<button type="button" class="btn" data-a="ov-prox">Next</button>' : '<button type="button" class="btn cheio" data-a="ov-viu"' + (ouviu ? '' : ' disabled') + '>Show it</button>') + '</div></div>' + mini;
};

R.molduras = function (c) {
  var e = S.mold, x = e.sel >= 0 ? ITENS[e.sel] : null;
  var pilha = '<div class="pilha">' + ITENS.map(function (it, i) { return e.feitos[i] ? '' : '<button type="button" class="polaroid' + (e.sel === i ? ' on' : '') + (e.sel === i && e.err ? ' cai' : '') + '" data-a="md-sel" data-n="' + i + '"><i>' + it.ic + '</i><span>' + it.t + '</span></button>'; }).join('') + '</div>';
  var frames = '<div class="molduras">' + ['at', 'in', 'on'].map(function (k) {
    var dentro = ITENS.filter(function (it, i) { return e.feitos[i] && it.k === k; }).map(function (it) { return '<span class="colada"><i>' + it.ic + '</i>' + it.t + '</span>'; }).join('');
    return moldura(k, dentro, x && e.err === k ? ' errada' : '');
  }).join('') + '</div>';
  var msg = x ? (e.err ? '<p class="recusa">' + NAO_M[e.err] + '</p>' : '<p class="dica-aluno" style="text-align:center">Say it first: “I am … ' + x.t + '.” Then tap a frame.</p>') : (Object.keys(e.feitos).length === ITENS.length ? '<p class="aprova" style="text-align:center">A box is IN. A surface or a line is ON. One point is AT.</p>' : '<p class="dica-aluno" style="text-align:center">Pick a photo from the pile.</p>');
  var ultimo = e.ult >= 0 && e.feitos[e.ult] ? '<div class="toca-linha vd centro">' + tocar(ITENS[e.ult].au) + '<span>GOT IT. ' + ITENS[e.ult].w + '</span></div>' : '';
  return cab(c) + pilha + msg + ultimo + frames;
};

R.very = function (c) {
  var v = S.very, n = v.n, fim = n >= VERY.length, x = VERY[Math.min(n, VERY.length - 1)];
  if (fim) return cab(c) + trilha(VERY, n) + '<div class="foco"><div class="pergunta vd"><small>THREE WORDS</small><h2>VERY goes before the word: very big, very busy.</h2></div>' + follow('NOW YOURS', 'Your city: big? busy? good? Use very.', ['My city is very …', 'It’s very …'], [], 'vys') + '</div>';
  return cab(c) + trilha(VERY, n) + '<div class="mesa-very"><div class="foto-zoom vd' + (v.zoom ? ' zoom' : '') + '" style="background-image:url(' + img('bridge') + ')"><span class="leg">' + (v.zoom ? x.s2.replace('very', '<b>very</b>') : x.s) + '</span></div><div class="lado-very">'
    + '<div class="toca-linha vd">' + tocar(x.au) + '<span>' + x.s + '</span></div>'
    + (v.zoom ? '<div class="toca-linha vd grande-v">' + tocar(x.au2) + '<span>' + x.s2.replace('very', '<b>very</b>') + '</span></div><div><button type="button" class="btn" data-a="vy-prox">Next</button></div>' : '<div><button type="button" class="btn cheio" data-a="vy-zoom">Zoom · say it bigger</button></div>') + '</div></div>';
};

R.album = function (c) {
  var e = S.album, todos = ALBUM.every(function (_, i) { return e.esc[i] === ALBUM[i].ok; });
  return cab(c) + '<div class="paginas">' + ALBUM.map(function (f, i) {
    var esc = e.esc[i], certo = esc === f.ok, ouviu = (S.ouviu || {})[f.au];
    return '<div class="pagina-a vd' + (certo ? ' feita' : '') + '"><div class="foto-a" style="background-image:url(' + img(f.img) + ')"><small>' + f.n + '</small></div><div class="toca-linha">' + tocar(f.au) + '</div>'
      + '<p class="legenda">' + f.pre + (certo ? '<b>' + f.ok + '</b>' : '<span class="vaga">___</span>') + f.pos + '</p>'
      + (ouviu && !certo ? '<div class="tres-b">' + ['at', 'in', 'on'].map(function (k) { return '<button type="button" class="pilula' + (esc === k ? ' errado' : '') + '" data-a="al" data-n="' + i + '" data-v="' + k + '">' + k + '</button>'; }).join('') + '</div>' : (ouviu ? '' : '<p class="dica-aluno">Play the caption first.</p>'))
      + (certo ? '<p class="aprova">' + f.w + '</p>' : (esc ? '<p class="recusa">Look at the photo again: a point, a box, or a line?</p>' : '')) + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Three photos, three different words.</p>' : '');
};

R.colunas = function (c) {
  var e = S.cols, x = e.sel >= 0 ? COLS[e.sel] : null;
  var fichas = '<div class="pilha">' + COLS.map(function (it, i) { return e.feitos[i] ? '' : '<button type="button" class="ficha-l' + (e.sel === i ? ' on' : '') + '" data-a="cl-sel" data-n="' + i + '">' + it.t + '</button>'; }).join('') + '</div>';
  var cols = '<div class="colunas">' + [['at', 'AT'], ['in', 'IN'], ['on', 'ON'], ['-', 'NO WORD']].map(function (k) {
    return '<button type="button" class="coluna' + (x && e.err === k[0] ? ' errado' : '') + '" data-a="cl" data-v="' + k[0] + '"><b>' + k[1] + '</b>' + COLS.filter(function (it, i) { return e.feitos[i] && it.k === k[0]; }).map(function (it) { return '<span>' + (k[0] === '-' ? 'I’m ' : 'I’m ' + k[0] + ' ') + it.t + '</span>'; }).join('') + '</button>';
  }).join('') + '</div>';
  var ult = e.ult >= 0 && COLS[e.ult].d && e.feitos[e.ult] ? '<p class="aprova" style="text-align:center">' + COLS[e.ult].d + '</p>' : '';
  return cab(c) + fichas + (x && e.err ? '<p class="recusa" style="text-align:center">Not that one. Say it again and think: point, box, or surface?</p>' : '') + ult + cols + (Object.keys(e.feitos).length === COLS.length ? '<p class="aprova" style="text-align:center">Nine places. And I’m home, with no word.</p>' : '');
};

R.suas = function (c) {
  var s = S.suas, n = s.n, fim = n >= 3, pt = s.partes[n] || {};
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>THREE PHOTOS</small><h2>Your places, your words.</h2></div></div>';
  return cab(c) + trilha([0, 1, 2], n) + '<div class="mesa-suas"><div class="polaroid-grande vd"><span>📱</span><small>YOUR PHOTO ' + (n + 1) + '</small><p>Show it on your camera, or describe it.</p></div><div class="lado-suas">'
    + ['Where are you in this photo?', 'What is it like there?', 'Who is with you?'].map(function (q) { return '<p class="q-suas">' + q + '</p>'; }).join('')
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="su-parte" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (s.erro ? ' on' : '') + '" data-a="su-erro">MISTAKE HEARD: in the bus / at London</button></div>'
    + (s.erro ? '<p class="recusa">The bus is a surface: on the bus. A city is a box: in London.</p>' : '')
    + mostra('su' + n, 'I’m on a boat in Bahia. It’s very hot and very beautiful. My sister is with me.', 1) + '<div><button type="button" class="btn" data-a="su-prox">Next photo</button></div></div></div>';
};

R.fim = function (c) {
  var f = S.foto.formas, lembra = Object.keys(f).filter(function (k) { return f[k]; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Photo 1: I’m on the beach in Bahia. It’s very hot.\nPhoto 2: …', 'Your album',
    ['I’m in ', 'I’m on ', 'I’m at ', 'It’s very ', 'I’m home.', 'Photo 1: '], ['YOUR ALBUM', lembra.length ? 'In scene I your teacher heard: ' + lembra.map(function (k) { return k === 'nada' ? 'no word / another word' : k.toUpperCase(); }).join(', ') + '. Now five captions, the right way.' : 'Five captions for five photos: where you are, and what it’s like.'])
    + '<div class="lado-fim"><div class="grande vd"><span><u>at</u> the shops · one point</span><span><u>in</u> London · a box</span><span><u>on</u> the bus · a surface</span><small>And home takes no word: I’m home.</small></div>'
    + mostra('fim', 'Photo 1: I’m on the beach in Bahia. It’s very hot.<br>Photo 2: I’m at a café with my sister.<br>Photo 3: I’m in the park near my house.<br>Photo 4: I’m on the bus to work. It’s very busy!<br>Photo 5: I’m home. It’s very quiet.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ft-f'] = function (b, n, v) { S.foto.formas[v] = !S.foto.formas[v]; };
TOQUES['vid-p'] = function (b, n, v, c) { S[c].p = n; };
TOQUES['vid-w'] = function (b, n, v, c) { S[c].ouviu[v] = !S[c].ouviu[v]; };
TOQUES['ov-vez'] = function (b, n) { S.ouve.vezes = n; };
TOQUES['ov-viu'] = function () { S.ouve.viu = 1; };
TOQUES['ov-prox'] = function () { S.ouve = { n: S.ouve.n + 1, viu: 0, vezes: 0 }; };
TOQUES['md-sel'] = function (b, n) { S.mold.sel = n; S.mold.err = ''; };
TOQUES.md = function (b, n, v) { var e = S.mold, x = ITENS[e.sel]; if (!x) return false; if (v === x.k) { e.feitos[e.sel] = 1; e.ult = e.sel; e.sel = -1; e.err = ''; } else e.err = v; };
TOQUES['vy-zoom'] = function () { S.very.zoom = 1; };
TOQUES['vy-prox'] = function () { S.very = { n: S.very.n + 1, zoom: 0 }; };
TOQUES.al = function (b, n, v) { S.album.esc[n] = v; };
TOQUES['cl-sel'] = function (b, n) { S.cols.sel = n; S.cols.err = ''; };
TOQUES.cl = function (b, n, v) { var e = S.cols, x = COLS[e.sel]; if (!x) return false; if (v === x.k) { e.feitos[e.sel] = 1; e.ult = e.sel; e.sel = -1; e.err = ''; } else e.err = v; };
TOQUES['su-parte'] = function (b, n, v) { var s = S.suas; s.partes[s.n] = s.partes[s.n] || {}; s.partes[s.n][v] = !s.partes[s.n][v]; };
TOQUES['su-erro'] = function () { S.suas.erro = !S.suas.erro; };
TOQUES['su-prox'] = function () { S.suas.n++; S.suas.erro = 0; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G12 · uma cena curta nova (k: gx) antes de molduras.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'fotoPrimeiro', titulo: 'Look first. What does Paula say?',
  cenas: [
    { img: 'shops', antes: 'Paula takes a photo outside the door. She is at one point on the map.', frase: '“Where are you?” “I’m <mark>at the shops</mark>.”' },
    { img: 'park', antes: 'Paula takes a photo. The whole park is around her, like a big box.', frase: '“Where are you?” “I’m <mark>in the park</mark>.”' },
    { img: 'bridge', antes: 'Paula takes a photo from a bus. She is on top of a surface.', frase: '“Where are you?” “I’m <mark>on the bus</mark>.”' },
    { img: 'album', antes: 'Paula is back in her room with the photos.', frase: '“Where are you now?” “I’m <mark>home</mark>.”' }
  ],
  nota: 'Three frames: <b>at</b> a point (at the shops), <b>in</b> a box (in London, in the park), <b>on</b> a surface (on the bus). And <b>home</b> takes no small word.',
  uso: { p: 'Your turn. Look at your last photo. Where are you, or where is it?', molde: ['I’m at …', 'I’m in …', 'I’m on …'], ex: 'I’m at the beach. I’m in my car. I’m on the train.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_foto', GX_EXPLICA); };
