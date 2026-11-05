/* ============================================================
   THE OLD PHOTO · MAPLE FALLS, 1970 · LIVE CLASS  05/10/2026
   Main series A1 · easy reader · there was / there were · there wasn't /
   weren't any · Was there…? · How many… were there? · e hoje: there is / are
   O MUNDO: o álbum da vovó Rose, Maple Falls em 1970. As fotos chegam em
   SÉPIA apagada (filtro); quando a descrição está certa, a foto ganha
   cor. Depois a vovó pergunta da cidade hoje: o cartão vira ENTÃO / AGORA.
   Sem áudio e sem vídeo. Roleta com ordem fixa (sem sorteio).
   Fila: FILA-LIVE-386.md · 028.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'caixa', rot: 'I · You and Your Town', t: 'Before the album: you, your town and your family photos.', p: 'Pick a card. Answer out loud. Then your teacher answers too.' },
  { k: 'album', est: 'o', min: 7, img: 'capa', rot: 'II · Grandma’s Album', t: 'Bring the old photos back to color.', p: 'Tap a photo. Read the chapter out loud. Answer the question. Then describe the photo.' },
  { k: 'regra', est: 'f', min: 6, img: 'cozinha', rot: 'III · The Rule', t: 'Then or now? One thing or many? That’s the whole rule.', p: 'Say each one the right way out loud. Then tap to fix it.' },
  { k: 'agora', est: 'o', min: 7, img: 'hoje', rot: 'IV · Then and Now', t: 'You visited Maple Falls last week. Grandma asks about her town today.', p: 'Your teacher is Grandma. Answer fast: 1970, and today.' },
  { k: 'roda', est: 'o', min: 7, img: 'praca', rot: 'V · Your Town, Then and Now', t: 'The place where you were a child, and today.', p: 'Spin. Answer with there was, there were, there wasn’t, and there is / there are for today.' },
  { k: 'leo', est: 'o', min: 7, extra: 1, img: 'caixa', rot: 'VI · Cousin Leo Calls', t: 'Leo never saw the album. Tell him, from memory.', p: 'Your teacher is Leo. Tell the story again, photo by photo.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'estacao', rot: 'VII · Quick Check', t: 'Five quick lines from the album.', p: 'Pick the word. Then say the whole sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · Your Old Photo', t: 'The album is in color now. One page is empty. It’s for you.', p: 'What was there in your town when you were a child, and what is there now? The red line watches was / were. It goes to your My notes.' }
];

var VOCE = [
  { k: 'YOUR TOWN', q: 'Where do you live? Is it a big city or a small town?', fup: 'Do you like it?', st: ['I live in …', 'It’s a …'], ex: 'I live in Campinas. It’s a big city.' },
  { k: 'YOUR STREET', q: 'What is there on your street?', fup: 'Is there a park?', st: ['There is a …', 'There are …'], ex: 'There is a bakery, and there are a lot of trees.' },
  { k: 'OLD PHOTOS', q: 'Do you have old family photos? Where are they?', fup: 'Who is in them?', st: ['They are in …'], ex: 'Yes! They are in a box at my mom’s house.' },
  { k: 'GRANDPARENTS', q: 'Do your grandparents live in a city or a small town?', fup: 'Do you go there?', st: ['In a small town in …'], ex: 'In a small town in Minas Gerais.' }
];

var FOTOS = [
  { k: 'MAIN STREET', img: 'rua', cap: 'This is Main Street in 1970. I was sixteen. There was a small cinema, and there were two coffee shops. There was a bakery, too. There weren’t any traffic lights. Life was slow.', pistas: ['1 cinema', '2 coffee shops', '1 bakery', '0 traffic lights'], q: 'How many coffee shops were there?',
    ops: [['There was a cinema, and there were two coffee shops.', 'ok'], ['It had a cinema, and it had two coffee shops.', 'had'], ['There was a cinema, and there was two coffee shops.', 'sing']] },
  { k: 'THE STATION', img: 'estacao', cap: 'This is the train station. There was one train in the morning and one train at night. There weren’t any buses in Maple Falls. On Sundays, there wasn’t a train.', pistas: ['2 trains a day', '0 buses', 'Sunday: no train'], q: 'Was there a train on Sundays?',
    ops: [['There was two trains a day. There wasn’t a train on Sundays.', 'sing'], ['There were two trains a day. There wasn’t a train on Sundays.', 'ok'], ['There are two trains a day. There isn’t a train on Sundays.', 'pres']] },
  { k: 'THE SQUARE', img: 'praca', cap: 'This is the town square. There was a big fountain in the middle, and there were a lot of old trees. On Saturday nights, there was music. There wasn’t a mall. The square was our mall!', pistas: ['1 fountain', 'a lot of trees', 'music on Saturdays', '0 malls'], q: 'What was there on Saturday nights?',
    ops: [['Had a fountain, and had a lot of trees.', 'had'], ['There were a fountain, and there was a lot of trees.', 'sing'], ['There was a fountain, and there were a lot of trees.', 'ok']] },
  { k: 'THE RIVER', img: 'ponte', cap: 'This is the river. There was an old wooden bridge. There weren’t any cars on the bridge, only bikes and one old truck. There were a lot of fish in the river. The water was very clean.', pistas: ['1 wooden bridge', '0 cars', 'a lot of bikes', 'a lot of fish'], q: 'Were there cars on the bridge?',
    ops: [['No, there weren’t any cars. There were only bikes.', 'ok'], ['No, there wasn’t any cars. There was only bikes.', 'sing'], ['No, there weren’t no cars. There were only bikes.', 'any']] },
  { k: 'MY KITCHEN', img: 'cozinha', cap: 'This is my mother’s kitchen. There wasn’t a TV in our house. There was a big radio, and there was music at night. Was there a phone? No, there wasn’t! There was only one phone on the whole street.', pistas: ['0 TVs', '1 big radio', '1 phone on the street'], q: 'Was there a TV in the kitchen?',
    ops: [['No, there isn’t a TV. There is a big radio.', 'pres'], ['No, there wasn’t a TV. There was a big radio.', 'ok'], ['No, didn’t have a TV. Had a big radio.', 'had']] }
];
var POR = { had: 'A place with something in it: there was / there were, never had.', sing: 'One thing: was. Many things: were.', pres: 'This is 1970: was / were, not is / are.', any: 'One no is enough: weren’t any.', troca: 'Then is was / were; now is is / are. They swapped.', q: 'A question: Was there… first.' };

var CAMINHOS = [
  { k: 'NOT HAD', antes: 'In 1970 had a cinema on Main Street.', depois: 'In 1970 there was a cinema on Main Street.', nota: 'A place with something in it: there was / there were, never had.' },
  { k: 'MANY THINGS', antes: 'There was two coffee shops.', depois: 'There were two coffee shops.', nota: 'Many things: were. One thing: was.' },
  { k: 'THE QUESTION', antes: 'There was a TV in your house?', depois: 'Was there a TV in your house?', nota: 'Question: was / were comes first. Yes, there was. / No, there wasn’t.' },
  { k: 'THEN, NOT NOW', antes: 'In 1970 there is a cinema.', depois: 'In 1970 there was a cinema.', nota: 'Then: was / were. Now: is / are.' },
  { k: 'ONE NO', antes: 'There weren’t no cars.', depois: 'There weren’t any cars.', nota: 'One no is enough: weren’t any.' }
];

var AGORA = [
  { k: 'THE CINEMA', antes: 'CINEMA', agora: 'GYM', diz: 'Is there still a cinema on Main Street?', resp: 'A gym! Oh, I loved that little cinema.', ops: [['No, there isn’t. There was a cinema, but now there is a gym.', 'ok'], ['No, there wasn’t. There is a cinema, but now there was a gym.', 'troca'], ['No, doesn’t have. Had a cinema, but now has a gym.', 'had']] },
  { k: 'COFFEE', antes: '2 COFFEE SHOPS', agora: '6 COFFEE SHOPS', diz: 'How many coffee shops are there now?', resp: 'Six! People drink a lot of coffee now.', ops: [['Now there is six coffee shops. In 1970 there was two.', 'sing'], ['Now there are six coffee shops. In 1970 there were two.', 'ok'], ['Now has six coffee shops. In 1970 had two.', 'had']] },
  { k: 'THE LIGHTS', antes: 'NO LIGHTS', agora: 'TRAFFIC LIGHTS', diz: 'Were there traffic lights in my time?', resp: 'A lot? Maple Falls is a city now!', ops: [['No, there weren’t any. Now there are a lot of traffic lights.', 'ok'], ['No, there wasn’t any. Now there is a lot of traffic lights.', 'sing'], ['No, there aren’t any. Now there were a lot.', 'troca']] },
  { k: 'THE TRAIN', antes: 'NO SUNDAY TRAIN', agora: 'SUNDAY TRAIN', diz: 'Is there a train on Sundays now?', resp: 'Lucky you! We walked everywhere.', ops: [['Yes, there is. In 1970 there isn’t a train on Sundays.', 'pres'], ['Yes, has. In 1970 didn’t have a train on Sundays.', 'had'], ['Yes, there is. In 1970 there wasn’t a train on Sundays.', 'ok']] },
  { k: 'YOUR QUESTION', antes: 'A MALL?', agora: 'A BIG MALL', diz: 'Now you ask me! Ask me about a mall in 1970.', resp: 'No, there wasn’t! There was a market on Fridays.', ops: [['There was a mall in 1970?', 'q'], ['Was there a mall in 1970?', 'ok'], ['Had a mall in 1970?', 'had']] }
];

var FATIAS = [
  { k: 'THE PARK', q: 'When you were a child, was there a park near your house?', h: 'Yes, there was. There was a small park with a lake.' },
  { k: 'YOUR CLASS', q: 'How many students were there in your class at school?', h: 'There were thirty students.' },
  { k: 'THE HOUSE', q: 'Was there a garden at your house?', h: 'No, there wasn’t. There was a small balcony.' },
  { k: 'STREET NOW', q: 'What is there on your street now?', h: 'There is a pharmacy, and there are two restaurants.' },
  { k: 'THE TV', q: 'When you were a child, how many TVs were there at home?', h: 'There was one TV, in the living room.' },
  { k: 'THE SHOPS', q: 'Was there a supermarket near your house?', h: 'No, there wasn’t. There was a small market.' },
  { k: 'YOUR ROOM', q: 'What was there in your bedroom?', h: 'There was a bed, a desk and a lot of posters.' },
  { k: 'NEW IN TOWN', q: 'What is new in your town now?', h: 'There is a big mall now. There wasn’t a mall before.' }
];

var LEO = [
  { ela: 'Hey! Grandma says you have the old album. What was there on Main Street?', voce: ['There was a …', 'there were …'], resp: 'A cinema? Cool! And now it’s a gym, right?' },
  { ela: 'Was there a train in 1970?', voce: ['Yes, there was …', 'There were two …'], resp: 'Only two trains a day? Wow.' },
  { ela: 'Were there cars on the old bridge?', voce: ['No, there weren’t any …'], resp: 'Only bikes! I love that.' },
  { ela: 'And at Grandma’s house? Was there a TV?', voce: ['No, there wasn’t …', 'There was …'], resp: 'A radio! Send me the photos, please!' }
];

var QUIZ = [
  { f: 'In 1970, there ___ a small cinema.', op: ['was', 'were', 'is'], nao: '1970, one cinema: was.', s: 'In 1970, there was a small cinema.' },
  { f: 'There ___ two coffee shops on Main Street.', op: ['were', 'was', 'had'], nao: 'Then, many things: were.', s: 'There were two coffee shops on Main Street.' },
  { f: 'There ___ any cars on the bridge.', op: ['weren’t', 'wasn’t', 'didn’t have'], nao: 'Many cars, no: weren’t any.', s: 'There weren’t any cars on the bridge.' },
  { f: '___ a TV in your house?', op: ['Was there', 'There was', 'Had'], nao: 'Question: Was there first.', s: 'Was there a TV in your house?' },
  { f: 'How many trains ___?', op: ['were there', 'there were', 'had'], nao: 'Question: were there.', s: 'How many trains were there?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {}, formas: {} }, album: { sel: -1, leu: {}, cor: {}, esc: {} }, regra: { feito: {} }, agora: { n: 0, esc: -1 }, roda: { giros: 0 }, leo: { n: 0, viu: 0 }, quiz: { n: 0, esc: -1 } };

function foto(x, colorida, extra) { return '<div class="polaroid' + (colorida ? ' cor' : '') + (extra || '') + '"><span class="imagem" style="background-image:url(' + img(x.img) + ')"></span><b>' + x.k + '</b><small>Maple Falls · 1970</small></div>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · EASY READER</span><h1>The Old <b>Photo</b></h1>'
    + '<p class="sub">Maple Falls, 1970. Five old photos. There was a cinema. There were two trains. And today?</p>'
    + '<div class="chipsx"><span class="pilula">there was</span><span class="pilula">there were</span><span class="pilula">Was there…?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the album</button>' + faixaLive() + '</div>'
    + '<div class="capa-fotos">' + foto(FOTOS[0], 0, ' tor1') + foto(FOTOS[2], 1, ' tor2') + foto(FOTOS[1], 0, ' tor3') + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

R.album = function (c) {
  var a = S.album, x = a.sel >= 0 ? FOTOS[a.sel] : null, todas = FOTOS.every(function (_, i) { return a.cor[i]; });
  var tira = '<div class="tira">' + FOTOS.map(function (f, i) { return '<button type="button" class="mini-f' + (a.sel === i ? ' on' : '') + (a.cor[i] ? ' cor' : '') + '" data-a="al-sel" data-n="' + i + '" style="background-image:url(' + img(f.img) + ')"><span>' + f.k + '</span></button>'; }).join('') + '</div>';
  if (!x) return cab(c) + tira + '<div class="foco"><div class="pergunta vd"><small>' + Object.keys(a.cor).length + ' OF 5 IN COLOR</small><h2>' + (todas ? 'The whole album is in color. There was, there were, there wasn’t.' : 'Tap a photo.') + '</h2></div></div>';
  var lado = '<div class="verso vd"><small>ON THE BACK · IN GRANDMA’S WRITING</small>' + (a.leu[a.sel] ? '<p>' + x.cap.replace(/\b(there (?:was|were|wasn’t|weren’t)|Was there)\b/gi, '<b>$1</b>') + '</p><p class="q-verso">Q: ' + x.q + '</p>' : '<button type="button" class="btn cheio" data-a="al-ler">Turn the photo over</button>') + '</div>';
  var desc = a.leu[a.sel] ? (a.cor[a.sel] ? '<p class="aprova">The photo has its color back. Say it once more.</p>' : '<div class="pistas">' + x.pistas.map(function (p) { return '<span>' + p + '</span>'; }).join('') + '</div><div class="opcoes-l">' + x.ops.map(function (o) { return '<button type="button" class="op-l' + (a.esc[a.sel] === o[0] ? ' errado' : '') + '" data-a="al" data-v="' + h(o[0]) + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (a.esc[a.sel] ? '<p class="recusa">' + POR[x.ops.filter(function (o) { return o[0] === a.esc[a.sel]; })[0][1]] + '</p>' : '<p class="dica-aluno">Describe the photo out loud. Then pick what you said.</p>')) : '';
  return cab(c) + tira + '<div class="mesa-album">' + foto(x, a.cor[a.sel], ' grande') + '<div class="lado-album">' + lado + desc + '</div></div>';
};

R.regra = function (c) {
  var r = S.regra.feito;
  return cab(c) + '<div class="regra-4"><span><b>THEN · ONE</b>there was a cinema</span><span><b>THEN · MANY</b>there were two trains</span><span><b>NO</b>there wasn’t a TV · there weren’t any cars</span><span><b>QUESTION</b>Was there a mall? · How many trains were there?</span></div>'
    + '<div class="caminhos">' + CAMINHOS.map(function (x, i) { return '<button type="button" class="caminho vd' + (r[i] ? ' feito' : '') + '" data-a="rg" data-n="' + i + '"><small>' + x.k + '</small>' + (r[i] ? '<s>' + x.antes + '</s><b>' + x.depois + '</b><em>' + x.nota + '</em>' : '<p>' + x.antes + '</p><em>Say it right, then tap.</em>') + '</button>'; }).join('') + '</div>';
};

R.agora = function (c) {
  var a = S.agora, n = a.n, fim = n >= AGORA.length, x = AGORA[Math.min(n, AGORA.length - 1)];
  if (fim) return cab(c) + trilha(AGORA, n) + '<div class="foco"><div class="pergunta vd"><small>MAPLE FALLS TODAY</small><h2>Then: there was, there were. Now: there is, there are.</h2></div></div>';
  var ok = a.esc >= 0 && x.ops[a.esc][1] === 'ok';
  return cab(c) + trilha(AGORA, n) + '<div class="mesa-agora"><div class="entao-agora"><div class="lado-ea entao"><small>1970</small><b>' + x.antes + '</b></div><span class="seta">→</span><div class="lado-ea hoje"><small>TODAY</small><b>' + x.agora + '</b></div></div>'
    + '<div class="lado-album"><div class="balao"><small>GRANDMA ROSE</small><p>“' + x.diz + '”</p></div><div class="opcoes-l">' + x.ops.map(function (o, i) { return '<button type="button" class="op-l' + (a.esc === i ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="ag" data-n="' + i + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (a.esc >= 0 && !ok ? '<p class="recusa">' + POR[x.ops[a.esc][1]] + '</p>' : '') + (ok ? '<p class="aprova">Grandma: “' + x.resp + '”</p><div><button type="button" class="btn" data-a="ag-prox">Next</button></div>' : '<p class="dica-aluno">Answer out loud first.</p>') + '</div></div>';
};

R.roda = function (c) {
  var r = S.roda, n = FATIAS.length, atual = r.giros ? (r.giros * 3 - 3) % n : -1, ang = r.giros ? -(atual * (360 / n)) + r.giros * 360 : 0;
  var fatias = FATIAS.map(function (f, i) { return '<span class="fatia" style="transform:rotate(' + (i * 360 / n) + 'deg)"><i>' + f.k + '</i></span>'; }).join('');
  var x = atual >= 0 ? FATIAS[atual] : null;
  return cab(c) + '<div class="mesa-roda"><div class="roda-w"><span class="ponteiro">▼</span><div class="roda" style="transform:rotate(' + ang + 'deg)">' + fatias + '</div><button type="button" class="btn cheio giro" data-a="rd">Spin</button></div>'
    + '<div class="lado-album">' + (x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + mostra('rd' + atual, x.h) : '<div class="pergunta vd"><small>THEN AND NOW</small><h2>Spin the wheel.</h2></div>') + '</div></div>';
};

R.leo = function (c) {
  var l = S.leo, n = l.n, fim = n >= LEO.length, x = LEO[Math.min(n, LEO.length - 1)];
  if (fim) return cab(c) + trilha(LEO, n) + '<div class="foco"><div class="pergunta vd"><small>LEO HUNG UP</small><h2>You told the whole album, from memory.</h2></div></div>';
  return cab(c) + trilha(LEO, n) + '<div class="mesa-agora"><div class="chamada vd"><span class="cam">📹</span><b>COUSIN LEO</b><small>video call</small></div><div class="lado-album"><div class="balao"><small>LEO</small><p>“' + x.ela + '”</p></div>' + fala('leo' + n, x.voce, [])
    + (l.viu ? '<p class="aprova">Leo: “' + x.resp + '”</p><div><button type="button" class="btn" data-a="le-prox">Next</button></div>' : '<button type="button" class="btn so-prof" data-a="le-viu">Answered · Leo reacts</button>') + '</div></div>';
};

R.quiz = function (c) {
  var q = S.quiz, n = q.n, fim = n >= QUIZ.length, x = QUIZ[Math.min(n, QUIZ.length - 1)];
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE LINES</small><h2>was · were · weren’t any · Was there…? · How many… were there? · and now: is.</h2></div></div>';
  var ops = ordem(x.op, n + 1), ok = q.esc >= 0 && ops[q.esc] === x.op[0];
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>LINE ' + (n + 1) + ' OF 6</small><h2>' + (ok ? x.s : x.f.replace('___', '<span class="vaga">___</span>')) + '</h2></div>'
    + '<div class="tres-b centro">' + ops.map(function (o, i) { return '<button type="button" class="pilula grande' + (q.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (q.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'When I was a child, there was a park near my house.\nNow there is …', 'Your old photo',
    ['There was ', 'There were ', 'There wasn’t ', 'There weren’t any ', 'Now there is ', 'Now there are '], ['THE EMPTY PAGE', 'What was there in your town when you were a child, and what is there now?'])
    + '<div class="lado-fim"><div class="grande vd"><span>then: there <u>was</u> · there <u>were</u></span><span>no: <u>wasn’t</u> a · <u>weren’t any</u></span><span>now: there <u>is</u> · there <u>are</u></span></div>'
    + mostra('fim', 'When I was a child, there was a small park near my house. There were a lot of trees, but there wasn’t a playground.<br>Now there is a big building there, and there are a lot of cars.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['al-sel'] = function (b, n) { S.album.sel = n; };
TOQUES['al-ler'] = function () { var a = S.album; if (a.sel < 0) return false; a.leu[a.sel] = 1; };
TOQUES.al = function (b, n, v) { var a = S.album, x = FOTOS[a.sel]; if (!x) return false; var o = x.ops.filter(function (p) { return p[0] === v; })[0]; if (o && o[1] === 'ok') a.cor[a.sel] = 1; else a.esc[a.sel] = v; };
TOQUES.rg = function (b, n) { S.regra.feito[n] = 1; };
TOQUES.ag = function (b, n) { S.agora.esc = n; };
TOQUES['ag-prox'] = function () { S.agora = { n: S.agora.n + 1, esc: -1 }; };
TOQUES.rd = function () { S.roda.giros++; };
TOQUES['le-viu'] = function () { S.leo.viu = 1; };
TOQUES['le-prox'] = function () { S.leo = { n: S.leo.n + 1, viu: 0 }; };
TOQUES.qz = function (b, n) { S.quiz.esc = n; };
TOQUES['qz-prox'] = function () { S.quiz = { n: S.quiz.n + 1, esc: -1 }; };
