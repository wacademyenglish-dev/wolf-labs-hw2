/* ============================================================
   TURN LEFT AT THE BAKERY · THE MAP OF GULL HARBOR · LIVE CLASS  05/10/2026
   Main series A1 · directions: go straight · turn left AT · go past ·
   cross · take the first right · on your left · next to · between A and B ·
   opposite (não in front of)
   A HISTÓRIA (da aula velha, mantida): Kenji chega a Gull Harbor com o
   mapa da avó (1974), uma linha vermelha e um X. Ontem cavou NA PORTA do
   farol. O bilhete diz "do outro lado da rua": OPPOSITE. A gramática acha
   a caixa. Sem áudio (a aula velha não tinha).
   O CENTRO: dois desenhos em SVG escuro, feitos aqui — a praça redonda
   (Kenji no ponto de ônibus, olhando para a fonte) e o mapa da avó com o
   alfinete que anda e deixa a linha vermelha atrás. Fila: FILA-LIVE-386 · 034.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'vila', rot: 'I · You and Your Street', t: 'Before the map: your street.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'praca', est: 'o', min: 7, img: 'praca', rot: 'II · The Square', t: 'Kenji is at the bus stop. Where is everything?', p: 'Kenji asks. Look at the square and tell him. Think: where is he?' },
  { k: 'regra', est: 'f', min: 6, img: 'padaria', rot: 'III · The Rule', t: 'Directions start with the verb. Places have little words.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'linha', est: 'o', min: 7, img: 'mapa', rot: 'IV · The Red Line', t: 'Grandma’s red line goes to the X. Guide Kenji.', p: 'Your teacher is Kenji. Give the next step at once. The arrow shows where he is looking: his left, his right.' },
  { k: 'brennan', est: 'o', min: 7, img: 'padaria', rot: 'V · Mrs. Brennan’s Bakery', t: 'Mrs. Brennan is an old friend of Grandma Aiko.', p: 'Your teacher is the baker. Answer her, then ask her the way.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'farol', rot: 'VI · Quick Check', t: 'Five quick lines from Gull Harbor.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'cidade', est: 'o', min: 7, extra: 1, img: 'vila', rot: 'VII · Your Town', t: 'Your real streets. Give directions like a local.', p: 'Pick a card. Answer about your real town.' },
  { k: 'papel', est: 'o', min: 7, extra: 1, img: 'caixa', rot: 'VIII · Paper or Phone?', t: 'Paper map or phone map: which is better for a trip?', p: 'You first, then your teacher. Then guide your teacher to your favorite place.' },
  { k: 'fim', est: 'w', min: 6, img: 'farol', rot: 'IX · From Your Door', t: 'Write the way from your home to a place you love.', p: 'Verb first. Turn at. On your left. Across the street: opposite. The red line watches. It goes to your My notes.' }
];

var ABRE = [
  { k: 'YOUR STREET', q: 'What is the name of your street? What is next to your home?', fup: 'And what is opposite your home?', st: ['I live on …', '… is next to my building.'], ex: 'I live on Oak Street. There is a pharmacy next to my building.' },
  { k: 'THE BAKERY', q: 'Is there a bakery near your home? What do you buy there?', fup: 'How do you get there?', st: ['Yes, there is …', 'I buy …'], ex: 'Yes, there is. I buy bread and coffee every morning.' },
  { k: 'PHONE OR PEOPLE', q: 'In a new city, do you use your phone or ask people?', fup: 'Do you get lost a lot?', st: ['I use …', 'I ask …'], ex: 'I use my phone. I never ask people.' }
];
var FORMAS = [{ k: 'next', t: 'NEXT TO' }, { k: 'opp', t: 'OPPOSITE' }, { k: 'frente', t: 'IN FRONT OF (ACROSS)', erro: 1 }, { k: 'nextof', t: 'NEXT OF / NEAR OF', erro: 1 }];

var NOTA = {
  em: 'Your side: ON your right, ON your left.', nextof: 'Always next TO.', frente: 'In front of is at its door, on the same side. Across the square or the street: opposite.',
  oposto: 'Opposite has no of: opposite the …', beside: 'Beside has no of. Or: next to.', entre: 'Between has no of: between A and B.', artigo: 'Places need the: the town hall, the pharmacy.',
  near: 'Near has no of. And here it’s right there: next to.', meio: 'The center of a place: in the middle of.', onmid: 'It’s IN the middle.',
  to: 'Directions start with the verb alone: Go straight. No to.', right: 'Right is a turn. The same direction, no turn: straight.', 'in': 'You turn AT a place. In the church = inside it.',
  turnto: 'Turn right. No to.', ing: 'Directions start with the verb: Turn.', traverse: 'The everyday word is cross.', the: 'Street names have no the: Cross Church Street.',
  passfor: 'The way is go past: go past the bank.', pastof: 'Go past the bank. No of.', get: 'The words are take the first right.', atright: 'The first right. And a side is on your right.'
};

/* a praça: 8 lugares em volta da fonte; Kenji no ponto de ônibus (embaixo), olhando para a fonte */
var LUG = ['TOWN HALL', 'POST OFFICE', 'PHARMACY', 'ICE CREAM', 'BUS STOP', 'FLOWER SHOP', 'MUSEUM', 'MARKET'];
var PRACA = [
  { k: 'THE ICE CREAM SHOP', alvo: 3, liga: [4], q: 'Ice cream! Where is the ice cream shop?', ini: 'It’s on your …', ops: [['It’s on your right, next to the bus stop.', 'ok'], ['It’s in your right, next to the bus stop.', 'em'], ['It’s on your right, next of the bus stop.', 'nextof']] },
  { k: 'THE TOWN HALL', alvo: 0, liga: [4], q: 'Where is the town hall?', ini: 'It’s opposite …', ops: [['It’s opposite the bus stop.', 'ok'], ['It’s in front of the bus stop.', 'frente'], ['It’s opposite of the bus stop.', 'oposto']] },
  { k: 'THE FLOWER SHOP', alvo: 5, liga: [4], q: 'I want flowers for Grandma’s photo. Where is the flower shop?', ini: 'It’s on your …', ops: [['It’s on your left, next to the bus stop.', 'ok'], ['It’s in your left, next to the bus stop.', 'em'], ['It’s on your left, beside of the bus stop.', 'beside']] },
  { k: 'THE POST OFFICE', alvo: 1, liga: [0, 2], q: 'I need stamps. Where is the post office?', ini: 'It’s between …', ops: [['It’s between the town hall and the pharmacy.', 'ok'], ['It’s between of the town hall and the pharmacy.', 'entre'], ['It’s between town hall and pharmacy.', 'artigo']] },
  { k: 'THE MUSEUM', alvo: 6, liga: [2], q: 'Grandma loves the museum. Where is it?', ini: 'It’s opposite …', ops: [['It’s opposite the pharmacy.', 'ok'], ['It’s in front of the pharmacy.', 'frente'], ['It’s in the opposite of the pharmacy.', 'oposto']] },
  { k: 'THE MARKET', alvo: 7, liga: [0], q: 'I need water. Where is the market?', ini: 'It’s next to …', ops: [['It’s next to the town hall.', 'ok'], ['It’s near of the town hall.', 'near'], ['It’s next of the town hall.', 'nextof']] },
  { k: 'THE PHARMACY', alvo: 2, liga: [1, 3], q: 'My feet hurt! Where is the pharmacy?', ini: 'It’s on your right, between …', ops: [['It’s on your right, between the post office and the ice cream shop.', 'ok'], ['It’s on your right, between of the post office and the ice cream shop.', 'entre'], ['It’s in your right, between the post office and the ice cream shop.', 'em']] },
  { k: 'THE FOUNTAIN', alvo: -1, liga: [], q: 'Grandma drew a fountain on her map. Where is it?', ini: 'It’s in the …', ops: [['It’s in the middle of the square.', 'ok'], ['It’s in the half of the square.', 'meio'], ['It’s on the middle of the square.', 'onmid']] }
];

var ARMAS = [
  ['ACROSS THE STREET', 'The box is in front of the lighthouse.', 'The box is opposite the lighthouse.', 'In front of = at its door, same side. Across = opposite. No of.'],
  ['AT THE BAKERY', 'Turn left in the bakery.', 'Turn left at the bakery.', 'You turn on the street, at the place. In = inside, with the bread!'],
  ['STRAIGHT, NOT RIGHT', 'Go right. Then turn left.', 'Go straight. Then turn left.', 'Right is a turn (→). No turn: straight (↑).'],
  ['YOUR SIDE', 'It’s in your left, next of the bank.', 'It’s on your left, next to the bank.', 'On your left. Next to. Always.']
];
var FITAS = [['MOVE', 'Go straight · Go past the bank · Cross the street'], ['TURN', 'Turn left at the bakery · Take the first right'], ['WHERE IS IT?', 'on your left · next to · between A and B · opposite']];

/* o mapa da avó (coordenadas 0–100, desenhado em 160×100) */
var RUAS = [{ k: 'HILL ROAD', y: 20 }, { k: 'MAIN STREET', y: 50 }, { k: 'HARBOR ROAD', y: 80 }, { k: 'MILL LANE', x: 36 }, { k: 'CHURCH STREET', x: 62 }, { k: 'PIER ROAD', x: 88 }];
var MARCOS = [{ k: 'BUS STOP', x: 10, y: 11 }, { k: 'SCHOOL', x: 22, y: 30 }, { k: 'CHURCH', x: 46, y: 11 }, { k: 'BAKERY', x: 46, y: 41 }, { k: 'BANK', x: 76, y: 41 }, { k: 'BOOKS', x: 36, y: 71 }, { k: 'CAFÉ', x: 60, y: 71 }, { k: 'LIGHTHOUSE', x: 48, y: 93, farol: 1 }];
var INICIO = [8, 20], XIS = [48, 72];
var PASSOS = [
  { vai: [36, 20], diz: 'I’m at the bus stop. The red line goes along Hill Road, past the school. What do I do?', ini: 'Go …', ops: [['Go straight. Go past the school.', 'ok'], ['Go to straight. Go past the school.', 'to'], ['Go right. Go past the school.', 'right']] },
  { vai: [36, 50], diz: 'OK, I’m at the corner with the church. The line turns here, down Mill Lane.', ini: 'Turn …', ops: [['Turn right at the church.', 'ok'], ['Turn right in the church.', 'in'], ['Turn to right at the church.', 'turnto']] },
  { vai: [56, 50], diz: 'Mmm, fresh bread! I’m at the corner with the bakery. The line turns again.', ini: 'Turn …', ops: [['Turn left at the bakery.', 'ok'], ['Turning left at the bakery.', 'ing'], ['Turn left in the bakery.', 'in']] },
  { vai: [68, 50], diz: 'There’s a big street in front of me: Church Street. The line goes to the other side.', ini: 'Cross …', ops: [['Cross Church Street.', 'ok'], ['Traverse Church Street.', 'traverse'], ['Cross the Church Street.', 'the']] },
  { vai: [88, 50], diz: 'I’m on the other side. I can see a bank. The line goes straight, past it.', ini: 'Go straight …', ops: [['Go straight. Go past the bank.', 'ok'], ['Go straight. Pass for the bank.', 'passfor'], ['Go straight. Go past of the bank.', 'pastof']] },
  { vai: [88, 80], diz: 'Now the line goes down to the sea. It’s the first street on the right.', ini: 'Take …', ops: [['Take the first right.', 'ok'], ['Get the first right.', 'get'], ['Take the first at right.', 'atright']] },
  { vai: [60, 80], diz: 'I can see the sea! The line turns right again. And there’s a little café.', ini: 'Turn right. The café is …', ops: [['Turn right. The café is on your right.', 'ok'], ['Turn right. The café is in your right.', 'em'], ['Turn right. The café is at right.', 'atright']] },
  { vai: [48, 80], diz: 'Grandma’s note: “the box is under the old bench, across the street from the lighthouse.” Yesterday I dug at the lighthouse door!', ini: 'Stop! It’s …', ops: [['Stop! It’s opposite the lighthouse.', 'ok'], ['Stop! It’s in front of the lighthouse.', 'frente'], ['Stop! It’s opposite of the lighthouse.', 'oposto']] }
];

var BRENNAN = [
  { ela: 'Aiko’s photo! Oh, I remember her! So, where is the box?', pede: 'Excuse me, where is the museum?', resp: 'The museum? It’s in the square, opposite the pharmacy.' },
  { ela: 'And you? Is there a bakery near your home?', pede: 'How do I get to the beach?', resp: 'Easy. Go straight on Main Street, take the first right, and go past the lighthouse.' },
  { ela: 'What is next to your home? A park? A shop?', pede: 'Is there a bank near here?', resp: 'Yes. Go straight. It’s on your left, next to the flower shop.' },
  { ela: 'Kenji wants a photo of the town. What is a good place for a photo in YOUR town?', pede: 'Where is a good place for a photo here?', resp: 'The old bench, at sunset. It’s opposite the lighthouse. You know it!' }
];

var QUIZ = [
  { a: '', b: ' straight. Then turn left.', op: ['Go', 'Going', 'Go to'], nao: 'Directions start with the verb alone: Go straight.' },
  { a: 'Turn left ', b: ' the bakery.', op: ['at', 'in', 'of'], nao: 'You turn at a place. In = inside it.' },
  { a: 'The bench is across the street from the lighthouse. It’s ', b: ' the lighthouse.', op: ['opposite', 'in front of', 'opposite of'], nao: 'Across the street = opposite, with no of.' },
  { a: 'The bank is next ', b: ' the flower shop.', op: ['to', 'of', 'at'], nao: 'Always next to.' },
  { a: 'The café is ', b: ' your right.', op: ['on', 'in', 'at'], nao: 'Your side: on your right, on your left.' }
];

var CIDADE = [
  { k: 'THE BAKERY', q: 'There is a bakery near your home. How do you go there?', ex: 'Go out and turn left. Go straight. It’s next to the pharmacy.' },
  { k: 'WORK OR SCHOOL', q: 'How do you get to work or school?', ex: 'I take the bus. Then I turn right at the bank and go straight.' },
  { k: 'OPPOSITE', q: 'What is opposite your home, across the street?', ex: 'A supermarket. It’s opposite my building.' },
  { k: 'A TOURIST', q: 'A tourist is at your door. Give directions to a good café near you.', ex: 'Go straight and take the second left. It’s opposite the church.' },
  { k: 'YOUR ROOM', q: 'Look around your room. What is between two things?', ex: 'My desk is between the window and the bed.' },
  { k: 'LOST', q: 'Where do you always get lost in your city? Why?', ex: 'Downtown. All the streets look the same!' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, praca: { sel: -1, esc: {} }, linha: { n: 0, esc: '' }, br: { n: 0, viu: {} }, quiz: { esc: {} }, cid: { sel: -1, foi: {} } };

/* ---------- desenhos ---------- */
function pos(i) { var a = (-90 + i * 45) * Math.PI / 180; return [300 + 200 * Math.cos(a), 250 + 190 * Math.sin(a)]; }
function praca(sel, liga, feitos) {
  var s = '<svg class="praca-svg" viewBox="0 0 600 500" role="img" aria-label="The town square"><circle cx="300" cy="250" r="150" class="pr-chao"/><circle cx="300" cy="250" r="46" class="pr-fonte' + (sel === -1 ? ' alvo' : '') + '"/><text x="300" y="255" class="pr-t pq">FOUNTAIN</text>';
  liga.forEach(function (j) { var p = pos(j); s += '<line x1="' + p[0] + '" y1="' + p[1] + '" x2="' + pos(sel)[0] + '" y2="' + pos(sel)[1] + '" class="pr-liga"/>'; });
  LUG.forEach(function (k, i) {
    var p = pos(i), cls = 'pr-lugar' + (i === 4 ? ' voce' : '') + (i === sel ? ' alvo' : '') + (feitos[i] ? ' feito' : '');
    s += '<g class="' + cls + '"><rect x="' + (p[0] - 62) + '" y="' + (p[1] - 22) + '" width="124" height="44" rx="10"/><text x="' + p[0] + '" y="' + (p[1] + 6) + '" class="pr-t">' + k + '</text></g>';
  });
  var b = pos(4);
  s += '<g class="kenji"><circle cx="' + b[0] + '" cy="' + (b[1] - 46) + '" r="11"/><path d="M' + b[0] + ' ' + (b[1] - 72) + ' l-9 14 h18z"/></g><text x="' + b[0] + '" y="' + (b[1] + 44) + '" class="pr-t pq ouro">KENJI · LOOKING AT THE FOUNTAIN</text>';
  return s + '</svg>';
}
function X(v) { return v * 1.6; }
function mapa(n) {
  var s = '<svg class="mapa-svg" viewBox="0 0 160 100" role="img" aria-label="Grandma’s map">';
  s += '<rect x="0" y="86" width="160" height="14" class="mar"/>';
  RUAS.forEach(function (r) { s += r.y != null ? '<line x1="3" y1="' + r.y + '" x2="157" y2="' + r.y + '" class="rua"/><text x="4" y="' + (r.y - 1.6) + '" class="rua-t">' + r.k + '</text>' : '<line x1="' + X(r.x) + '" y1="8" x2="' + X(r.x) + '" y2="86" class="rua"/><text x="' + (X(r.x) + 1.4) + '" y="12" class="rua-t" transform="rotate(90 ' + (X(r.x) + 1.4) + ' 12)">' + r.k + '</text>'; });
  MARCOS.forEach(function (m) { s += '<g class="marco' + (m.farol ? ' farol' : '') + '"><rect x="' + (X(m.x) - 9) + '" y="' + (m.y - 3.4) + '" width="18" height="6.8" rx="1.4"/><text x="' + X(m.x) + '" y="' + (m.y + 1.2) + '">' + m.k + '</text></g>'; });
  var pts = [INICIO].concat(PASSOS.slice(0, n).map(function (p) { return p.vai; }));
  s += '<polyline points="' + pts.map(function (p) { return X(p[0]) + ',' + p[1]; }).join(' ') + '" class="linha-v"/>';
  if (n >= PASSOS.length) s += '<g class="xis achou"><line x1="' + (X(XIS[0]) - 3) + '" y1="' + (XIS[1] - 3) + '" x2="' + (X(XIS[0]) + 3) + '" y2="' + (XIS[1] + 3) + '"/><line x1="' + (X(XIS[0]) + 3) + '" y1="' + (XIS[1] - 3) + '" x2="' + (X(XIS[0]) - 3) + '" y2="' + (XIS[1] + 3) + '"/></g><text x="' + X(XIS[0]) + '" y="' + (XIS[1] - 5) + '" class="rua-t ouro" text-anchor="middle">THE OLD BENCH</text>';
  else s += '<g class="xis"><line x1="' + (X(XIS[0]) - 2.4) + '" y1="' + (XIS[1] - 2.4) + '" x2="' + (X(XIS[0]) + 2.4) + '" y2="' + (XIS[1] + 2.4) + '"/><line x1="' + (X(XIS[0]) + 2.4) + '" y1="' + (XIS[1] - 2.4) + '" x2="' + (X(XIS[0]) - 2.4) + '" y2="' + (XIS[1] + 2.4) + '"/></g>';
  var aqui = pts[pts.length - 1], prox = n < PASSOS.length ? PASSOS[n].vai : null, ant = pts.length > 1 ? pts[pts.length - 2] : null;
  var dx, dy; if (ant) { dx = aqui[0] - ant[0]; dy = aqui[1] - ant[1]; } else { dx = 1; dy = 0; }
  var ang = Math.atan2(dy, X(dx)) * 180 / Math.PI;
  s += '<g class="pino" transform="translate(' + X(aqui[0]) + ' ' + aqui[1] + ') rotate(' + ang + ')"><circle r="3.2"/><path d="M3.4 -2.4 L8 0 L3.4 2.4z"/></g>';
  return s + '</svg>';
}

/* ---------- cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa" style="--fundo:url(' + img('capa') + ')"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · THE MAP OF GULL HARBOR</span><h1>Turn Left at <b>the Bakery</b></h1>'
    + '<p class="sub">Grandma’s old map, a red line and an X. The box is <b>opposite</b> the lighthouse.</p>'
    + '<div class="chipsx"><span class="pilula">go straight</span><span class="pilula">turn left at</span><span class="pilula">next to · between</span><span class="pilula">opposite</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the map</button>' + faixaLive() + '</div>'
    + '<div class="capa-mapa vd">' + mapa(0) + '<p class="sussurro">1974. A red line, and an X.</p></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

function opcoes(ops, esc, toque, semente, extra) {
  return '<div class="versoes">' + ordem(ops, semente).map(function (o) {
    return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="' + toque + '" data-v="' + o[1] + '"' + (extra || '') + '>' + o[0] + '</button>';
  }).join('') + '</div>';
}

R.praca = function (c) {
  var e = S.praca, x = e.sel >= 0 ? PRACA[e.sel] : null, feitos = {};
  PRACA.forEach(function (p, i) { if (e.esc[i] === 'ok' && p.alvo >= 0) feitos[p.alvo] = 1; });
  var lista = '<div class="perg-p">' + PRACA.map(function (p, i) { return '<button type="button" class="chip' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feito' : '') + '" data-a="pc" data-n="' + i + '">' + p.k.replace('THE ', '').toLowerCase() + '</button>'; }).join('') + '</div>';
  var lado;
  if (!x) lado = lista + '<p class="dica-aluno">Tap a place. Kenji asks where it is.</p>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = lista + '<div class="balao vd"><small>KENJI</small><p>“' + x.q + '”</p></div><p class="ini">' + x.ini + '</p>'
      + '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5>' + opcoes(x.ops, esc, 'pc-v', e.sel + 1)
      + (esc && !ok ? '<p class="recusa">' + NOTA[esc] + '</p>' : '') + (ok ? '<p class="aprova">GOT IT. Kenji looks, and finds it.</p>' : '');
  }
  var todos = PRACA.every(function (_, i) { return e.esc[i] === 'ok'; });
  return cab(c) + '<div class="mesa-praca"><div class="praca-box vd">' + praca(x ? x.alvo : -2, x ? x.liga : [], feitos) + '</div><div class="lado-l">' + lado + (todos ? '<p class="aprova">Eight places. Why opposite and not in front of? The rule is next.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.linha = function (c) {
  var e = S.linha, n = e.n, fim = n >= PASSOS.length, lado;
  if (fim) lado = '<div class="balao vd achou"><small>UNDER THE OLD BENCH</small><p>A small tin box. Inside: a photo of Grandma Aiko at the bakery, 1974, and a note: “Say hello to Mrs. Brennan.”</p></div>'
    + follow('NOW YOU', 'Tell Kenji the whole way, from the bus stop to the bench.', ['Go straight …', 'Turn right at …', 'It’s opposite …'], [], 'linha-tudo');
  else {
    var x = PASSOS[n], ok = e.esc === 'ok';
    lado = trilha(PASSOS, n) + '<div class="balao vd"><small>KENJI</small><p>“' + x.diz + '”</p></div><p class="ini">' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5>' + opcoes(x.ops, e.esc, 'ln', n + 2)
      + (e.esc && !ok ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : '') + (ok ? '<div class="linha-ok"><p class="aprova">GOT IT. The pin walks.</p><button type="button" class="btn" data-a="ln-prox">' + (n === PASSOS.length - 1 ? 'Dig!' : 'Next step') + '</button></div>' : '');
  }
  return cab(c) + '<div class="mesa-mapa"><div class="mapa-box vd">' + mapa(fim ? n : (e.esc === 'ok' ? n + 1 : n)) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.brennan = function (c) {
  var e = S.br, n = e.n, fim = n >= BRENNAN.length;
  var foto = '<div class="foto-b vd" style="background-image:url(' + img('padaria') + ')"><span>MRS. BRENNAN · THE BAKER</span></div>';
  if (fim) return cab(c) + '<div class="mesa-lista">' + foto + '<div class="lado-l"><div class="balao vd achou"><small>MRS. BRENNAN</small><p>“Take this bread. For Aiko.”</p></div><p class="aprova">Four questions, four ways. Excuse me, where is …? How do I get to …?</p></div></div>';
  var x = BRENNAN[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-lista">' + foto + '<div class="lado-l">' + trilha(BRENNAN, n) + '<div class="balao vd"><small>MRS. BRENNAN</small><p>“' + x.ela + '”</p></div>'
    + '<div class="pede vd"><small>NOW ASK HER</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>MRS. BRENNAN</small><p>“' + x.resp + '”</p></div><p class="dica-aluno">Say her directions back: So, …</p><div><button type="button" class="btn" data-a="br-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="br-viu">Asked · show her answer</button><p class="dica-aluno">Answer her. Then ask your question.</p></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Five out of five. Now your own town.</p>' : '');
};

R.cidade = function (c) {
  var e = S.cid, x = e.sel >= 0 ? CIDADE[e.sel] : null;
  return cab(c) + '<div class="mesa-lista"><div class="cartoes-c">' + CIDADE.map(function (k, i) { return '<button type="button" class="cartao-c' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feito' : '') + '" data-a="cd" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + k.k + '</b></button>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('cd' + e.sel, ['Go straight …', 'Turn … at …', 'It’s next to / opposite …'], ['on your left', 'between', 'go past', 'cross']) + mostra('cd' + e.sel, x.ex, 1) : '<p class="dica-aluno">Pick a card. Your teacher answers too.</p>') + '</div></div>';
};

R.papel = function (c) {
  return cab(c) + '<div class="mesa-lista"><div class="foto-b vd" style="background-image:url(' + img('caixa') + ')"><span>THE TIN BOX · 1974</span></div><div class="lado-l">'
    + follow('THE BIG QUESTION', 'Paper map or phone map: which is better for a trip? Why?', ['I think … is better, because …', 'With a paper map …', 'With a phone …'], ['fast', 'fun', 'lost', 'battery'], 'papel', mostra('papel', 'I think the phone is better, because it’s fast. But a paper map is more fun.', 1))
    + '<div class="pede vd"><small>AND THEN</small><b>Guide your teacher from your home to your favorite place: Go out and … Turn … at … It’s opposite …</b></div></div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Go out and turn left.\nGo straight …\nIt’s opposite …', 'From your door',
    ['Go straight. ', 'Turn left at the ', 'Go past the ', 'Cross ', 'Take the first right. ', 'It’s on your left', 'next to the ', 'opposite the '], ['FROM YOUR DOOR', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now the way from your home to a place you love.' : 'The way from your home to a place you love.'])
    + '<div class="lado-fim"><div class="grande vd"><span>verb first: <u>Go</u> straight. <u>Turn</u> left.</span><span>you turn <u>at</u> a place</span><span><u>on</u> your left · next <u>to</u></span><span>across the street: <u>opposite</u></span></div>'
    + mostra('fim', 'Go out and turn left. Go straight and go past the bank. Turn right at the church. The park is on your left, opposite the school.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.pc = function (b, n) { S.praca.sel = n; };
TOQUES['pc-v'] = function (b, n, v) { S.praca.esc[S.praca.sel] = v; };
TOQUES.ln = function (b, n, v) { S.linha.esc = v; };
TOQUES['ln-prox'] = function () { S.linha = { n: S.linha.n + 1, esc: '' }; };
TOQUES['br-viu'] = function () { S.br.viu[S.br.n] = 1; };
TOQUES['br-prox'] = function () { S.br.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
TOQUES.cd = function (b, n) { S.cid.sel = n; S.cid.foi[n] = 1; };
