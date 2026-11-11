/* ============================================================
   INTO THE ROOM · THE BLUEPRINT · LIVE CLASS  06/10/2026
   Main series A2 · preposições de MOVIMENTO: into · out of · onto · off ·
   through · across · past (+ up). in = lugar, into = caminho. Os erros
   universais: "enter in the room", "go out the house", "got out the bus".
   O MUNDO (da aula velha): a planta de uma casa; a bolinha anda
   exatamente pelo caminho que o aluno narra. No fim, o professor fecha os
   olhos e o aluno o guia até o tesouro.
   A CARA: BLUEPRINT noturno (papel azul-marinho, linhas ciano finas,
   cotas em mono); cada estrada tem um DIAGRAMA em SVG (a caixa e a seta).
   A bolinha anda com animateMotion. Sem áudio, sem vídeo.
   Fila: FILA-LIVE-386.md · 054.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'labirinto' },
  { k: 'abre', est: 'o', min: 7, img: 'corredor', rot: 'I · Bed to Kitchen', t: 'Describe the way. Every step, out loud.', p: 'Pick a card. Any words you have. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'dois', est: 'f', min: 6, img: 'labirinto', rot: 'II · Place or Path?', t: 'Same word, one letter more. One sits still; one moves.', p: 'Read both out loud. Tap the one that is MOVING.' },
  { k: 'verbo', est: 'f', min: 6, img: 'corredor', rot: 'III · One Verb, Six Roads', t: 'GO never changes. The road does.', p: 'Say the sentence with the road. Then tap it, and watch the arrow.' },
  { k: 'gx', est: 'f', min: 4, img: 'labirinto', rot: 'IV · Look First', t: 'Three pictures from the house.', p: 'Look at the picture. Guess what you say. Then tap to see it, and say it.' },
  { k: 'regra', est: 'f', min: 6, img: 'labirinto', rot: 'V · Enter In, Go Out The', t: 'Two slips everybody makes, and three more.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'planta', est: 'o', min: 7, img: 'labirinto', rot: 'VI · The Floor Plan', t: 'Six legs across the house. The ball follows your words.', p: 'Say the whole leg out loud. Then tap the road, and the ball moves.' },
  { k: 'tres', est: 'o', min: 7, img: 'corredor', rot: 'VII · Through, Across, Past', t: 'Three roads people mix up.', p: 'Say the example. Then answer the question about your life.' },
  { k: 'guia', est: 'o', min: 7, extra: 1, img: 'bau', rot: 'VIII · Eyes Closed', t: 'Your teacher closes their eyes. You guide them to the treasure.', p: 'Say each instruction. Your teacher moves only with your words.' },
  { k: 'seu', est: 'o', min: 7, extra: 1, img: 'corredor', rot: 'IX · Your Real Routes', t: 'Real places now.', p: 'Answer out loud with at least two road words.' },
  { k: 'fim', est: 'w', min: 6, img: 'labirinto', rot: 'X · Out of the Maze', t: 'Bed to kitchen, again.', p: 'Write your real route with into, out of, through, past. It goes to your My notes.' }
];

var ABRE = [
  { k: 'BED TO KITCHEN', q: 'How do you get from your bed to your kitchen?', fup: 'And then to the coffee?', st: ['I get out of bed and …', 'I walk …'], ex: 'I get out of bed, walk into the hall and go into the kitchen.' },
  { k: 'DOOR TO STREET', q: 'And from your front door to the street?', fup: 'Stairs or an elevator?', st: ['I go out of …', 'I take …'], ex: 'I go out of my apartment, take the elevator and walk out of the building.' },
  { k: 'YOUR ROOM', q: 'Which is your favorite room? How do you get there from the door?', fup: 'What do you walk past?', st: ['My favorite room is …', 'You go …'], ex: 'The living room. You go through the hall, and it’s on the left.' },
  { k: 'LOST', q: 'Have you ever been lost in a building? Where?', fup: 'How did you get out?', st: ['Yes, in a …', 'I got out …'], ex: 'Yes, in a hospital. I walked through ten doors!' }
];
var FORMAS = [{ k: 'into', t: 'INTO / OUT OF' }, { k: 'thru', t: 'THROUGH / ACROSS / PAST' }, { k: 'enter', t: 'ENTER IN THE ROOM', erro: 1 }, { k: 'out', t: 'GO OUT THE HOUSE', erro: 1 }];

/* os diagramas das estradas: uma caixa (ou superfície) e a seta */
function estrada(k, cls) {
  var caixa = '<rect x="40" y="18" width="40" height="36" rx="3" fill="#0f2238" stroke="#5fb4d8" stroke-width="1.5"/>', fig = '', seta = '';
  if (k === 'into') { fig = caixa; seta = 'M6 36 L58 36'; }
  else if (k === 'out of') { fig = caixa; seta = 'M60 36 L114 36'; }
  else if (k === 'through') { fig = '<line x1="38" y1="20" x2="82" y2="20" stroke="#5fb4d8" stroke-width="1.5"/><line x1="38" y1="52" x2="82" y2="52" stroke="#5fb4d8" stroke-width="1.5"/>'; seta = 'M6 36 L114 36'; }
  else if (k === 'past') { fig = caixa; seta = 'M6 64 L114 64'; }
  else if (k === 'across') { fig = '<rect x="10" y="24" width="100" height="22" fill="#0f2238" stroke="#5fb4d8" stroke-width="1.5"/><line x1="16" y1="35" x2="104" y2="35" stroke="#5fb4d8" stroke-dasharray="6 5" stroke-width="1"/>'; seta = 'M60 64 L60 10'; }
  else if (k === 'onto') { fig = '<line x1="40" y1="44" x2="84" y2="44" stroke="#5fb4d8" stroke-width="3"/><line x1="46" y1="44" x2="46" y2="66" stroke="#5fb4d8"/><line x1="78" y1="44" x2="78" y2="66" stroke="#5fb4d8"/>'; seta = 'M8 64 Q24 26 60 38'; }
  else if (k === 'off') { fig = '<line x1="36" y1="44" x2="80" y2="44" stroke="#5fb4d8" stroke-width="3"/><line x1="42" y1="44" x2="42" y2="66" stroke="#5fb4d8"/><line x1="74" y1="44" x2="74" y2="66" stroke="#5fb4d8"/>'; seta = 'M58 38 Q96 26 112 64'; }
  else if (k === 'up') { fig = '<polyline points="20,64 20,54 40,54 40,44 60,44 60,34 80,34 80,24 100,24" fill="none" stroke="#5fb4d8" stroke-width="1.5"/>'; seta = 'M14 50 L92 12'; }
  return '<svg class="estrada' + (cls ? ' ' + cls : '') + '" viewBox="0 0 120 72" role="img" aria-label="' + k + '"><defs><marker id="pt" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#f0b45a"/></marker></defs>' + fig + '<path d="' + seta + '" fill="none" stroke="#f0b45a" stroke-width="3" stroke-linecap="round" marker-end="url(#pt)"/></svg>';
}

var DOIS = [
  { a: 'The keys are in the box.', b: 'He put the keys into the box.', k: 'b', r: 'into', w: 'IN is a place. INTO is the trip to the inside.' },
  { a: 'She walked into the room.', b: 'She is in the room.', k: 'a', r: 'into', w: 'The doorway first; after that, she is in.' },
  { a: 'The cat is on the table.', b: 'The cat jumped onto the table.', k: 'b', r: 'onto', w: 'ON is where it sits. ONTO is how it got there.' },
  { a: 'He got into the car.', b: 'He is in the car.', k: 'a', r: 'into', w: 'The door, then the seat.' },
  { a: 'The dog ran out of the house.', b: 'The dog is outside.', k: 'a', r: 'out of', w: 'OUT OF with a moving verb is a path.' },
  { a: 'The cup fell off the table.', b: 'The cup is on the floor.', k: 'a', r: 'off', w: 'OFF: the exit from a surface.' }
];

var ESTRADAS = ['into', 'out of', 'onto', 'off', 'through', 'across'];
var VERBO = [
  { a: 'She went ', b: ' the building at eight.', k: 'into', w: 'Outside, then inside.' },
  { a: 'He went ', b: ' the building at six.', k: 'out of', w: 'Inside, then outside. Two words, one idea.' },
  { a: 'The cat went ', b: ' the roof.', k: 'onto', w: 'Not on it, then on it.' },
  { a: 'The book fell ', b: ' the shelf.', k: 'off', w: 'On it, then not.' },
  { a: 'We drove ', b: ' the tunnel in four minutes.', k: 'through', w: 'In one end, out the other.' },
  { a: 'They walked ', b: ' the street to the bakery.', k: 'across', w: 'One side to the other, on top.' }
];

var ARMAS = [
  ['ENTER', 'She entered in the room.', 'She entered the room.', 'enter takes no preposition. Or: she went into the room.'],
  ['OUT OF', 'He went out the house.', 'He went out of the house.', 'out of: two words.'],
  ['A PATH', 'We walked in the kitchen.', 'We walked into the kitchen.', 'Outside, then inside: a path needs into.'],
  ['THE BUS', 'I got out the bus.', 'I got off the bus.', 'Buses, trains, planes: get on, get off. Cars and taxis: get in, get out of.'],
  ['CROSS', 'They crossed across the park.', 'They walked across the park.', 'cross already has the path: cross the park, or walk across it.'],
  ['ON / ONTO', 'The cat jumped on to the table.', 'The cat jumped onto the table.', 'onto: one word, a path to the top.']
];

/* a planta: coordenadas num desenho 340 × 240 */
var PLANTA = [
  { f: 'You walk ', b: ' the house.', k: 'into', op: ['into', 'in', 'onto'], pts: [[34, 110], [120, 110]], w: 'Outside, then inside.' },
  { f: 'You walk ', b: ' the kitchen door to the stairs. You don’t go in.', k: 'past', op: ['past', 'through', 'into'], pts: [[120, 110], [256, 110]], w: 'By it, not into it.' },
  { f: 'You go ', b: ' the stairs to the attic.', k: 'up', op: ['up', 'onto', 'across'], pts: [[256, 110], [256, 36]], w: 'Stairs: up and down.' },
  { f: 'You climb ', b: ' the attic window, onto the low roof.', k: 'out of', op: ['out of', 'off', 'across'], pts: [[256, 36], [318, 50]], w: 'Inside, then outside, through a frame.' },
  { f: 'You jump ', b: ' the low roof, onto the grass.', k: 'off', op: ['off', 'out of', 'down of'], pts: [[318, 50], [318, 204]], w: 'On a surface, then not: off.' },
  { f: 'You walk ', b: ' the yard to the gate.', k: 'across', op: ['across', 'through', 'past'], pts: [[318, 204], [98, 204]], w: 'A yard has no roof: on top, side to side.' }
];
function planta(n, anim) {
  var feitos = PLANTA.slice(0, n), pos = n ? PLANTA[n - 1].pts[1] : PLANTA[0].pts[0];
  var rastro = feitos.map(function (l) { return '<line x1="' + l.pts[0][0] + '" y1="' + l.pts[0][1] + '" x2="' + l.pts[1][0] + '" y2="' + l.pts[1][1] + '" class="rastro"/>'; }).join('');
  var bola = '<circle r="7" class="bola" cx="' + pos[0] + '" cy="' + pos[1] + '"' + (anim && n ? '><animate attributeName="cx" from="' + PLANTA[n - 1].pts[0][0] + '" to="' + pos[0] + '" dur=".9s" fill="freeze"/><animate attributeName="cy" from="' + PLANTA[n - 1].pts[0][1] + '" to="' + pos[1] + '" dur=".9s" fill="freeze"/></circle>' : '/>');
  return '<svg class="planta" viewBox="0 0 340 240" role="img" aria-label="Floor plan">'
    + '<defs><pattern id="grade" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0 L0 0 0 10" fill="none" stroke="rgba(95,180,216,.08)" stroke-width=".6"/></pattern></defs>'
    + '<rect width="340" height="240" fill="#0a1a2c"/><rect width="340" height="240" fill="url(#grade)"/>'
    + '<g class="paredes"><rect x="78" y="62" width="202" height="100"/><rect x="226" y="8" width="60" height="52" stroke-dasharray="4 3"/><rect x="288" y="34" width="44" height="34"/>'
    + '<line x1="78" y1="92" x2="280" y2="92"/><line x1="78" y1="128" x2="160" y2="128"/><line x1="190" y1="128" x2="280" y2="128"/><line x1="160" y1="128" x2="160" y2="162"/><line x1="230" y1="128" x2="230" y2="162"/><line x1="236" y1="62" x2="236" y2="92"/>'
    + '<rect x="58" y="176" width="274" height="56" stroke-dasharray="2 4"/></g>'
    + '<g class="porta"><line x1="78" y1="100" x2="78" y2="120"/><line x1="160" y1="128" x2="190" y2="128"/><line x1="286" y1="28" x2="286" y2="44"/></g>'
    + '<polyline points="240,90 240,82 248,82 248,74 256,74 256,66 264,66 264,58 272,58" fill="none" class="degrau"/>'
    + '<g class="rot"><text x="20" y="96">STREET</text><text x="96" y="84">HALL</text><text x="168" y="152">KITCHEN</text><text x="244" y="22">ATTIC</text><text x="294" y="30">ROOF</text><text x="86" y="152">LIVING</text><text x="240" y="150">BATH</text><text x="200" y="226">THE YARD</text><text x="66" y="226">GATE</text></g>'
    + '<rect x="84" y="196" width="18" height="16" class="portao"/>'
    + rastro + bola + '</svg>';
}

var TRES = [
  { w: 'through', m: 'inside, end to end', s: 'We walked through the forest.', ask: 'Something you drive or walk through every week.', ex: 'I drive through a long tunnel every Monday.' },
  { w: 'across', m: 'on top, side to side', s: 'She swam across the river.', ask: 'Something you walk across every day.', ex: 'I walk across a big square to get to work.' },
  { w: 'past', m: 'next to it, and beyond', s: 'I walk past a bakery every morning.', ask: 'A place you walk past, but never go into.', ex: 'I walk past a gym every day. I never go in!' }
];

/* o guia de olhos fechados: grade 5 × 5 */
var MUROS = { 2: 1, 3: 1, 4: 1, 5: 1, 8: 1, 9: 1, 10: 1, 11: 1, 13: 1, 14: 1, 15: 1, 16: 1, 19: 1, 20: 1, 21: 1, 22: 1 };
var MARCAS = { 0: 'START', 1: 'DOOR', 6: 'ROOM', 7: 'TABLE', 12: 'NEXT ROOM', 17: 'BOX', 18: 'EXIT', 23: 'GARDEN', 24: '✦' };
var GUIA = [
  { cel: 1, ops: [['Go through the door.', 'ok'], ['Go across the door.', 'a'], ['Go past the door.', 'b']], no: { a: 'A door is a frame: in one side, out the other. Through.', b: 'Past = next to it, not in. Your teacher needs to go IN.' } },
  { cel: 6, ops: [['Walk across the room.', 'ok'], ['Walk into the room across.', 'a'], ['Walk off the room.', 'b']], no: { a: 'One road word is enough: walk across the room.', b: 'off is for a surface (a table, a bus).' } },
  { cel: 7, ops: [['Walk past the table. Don’t touch it.', 'ok'], ['Walk through the table.', 'a'], ['Walk onto the table.', 'b']], no: { a: 'Through a table? Ouch. Next to it: past.', b: 'Onto the table? Your teacher is on the table now!' } },
  { cel: 12, ops: [['Go into the next room.', 'ok'], ['Go in the next room.', 'a'], ['Enter in the next room.', 'b']], no: { a: 'A path to the inside: into.', b: 'enter takes no in: enter the room, or go into the room.' } },
  { cel: 17, ops: [['Climb onto the box.', 'ok'], ['Climb on to off the box.', 'a'], ['Climb into the box on.', 'b']], no: { a: 'One road: onto.', b: 'On top of the box, not inside: onto.' } },
  { cel: 18, ops: [['Get off the box and go out of the room.', 'ok'], ['Get off the box and go out the room.', 'a'], ['Get out the box and go off the room.', 'b']], no: { a: 'out OF: two words.', b: 'A box top is a surface: get off. A room: go out of.' } },
  { cel: 23, ops: [['Now go across the garden. The treasure is there.', 'ok'], ['Now go through the garden on.', 'a'], ['Now go across in the garden.', 'b']], no: { a: 'One road word, and the right one: across.', b: 'across the garden. No in.' } }
];

var SEU = [
  { q: 'How do you get from your home to work or school?', st: ['I go out of …, walk past …, and …'], ex: 'I go out of my building, walk past the bakery and get on the bus.' },
  { q: 'Describe the way from the entrance of your building to your door.', st: ['You go into …, through …'], ex: 'You go into the building, through the lobby, and up the stairs.' },
  { q: 'What do you walk past every day?', st: ['I walk past …'], ex: 'I walk past a school and a big tree.' },
  { q: 'What is the last thing you climbed onto?', st: ['I climbed onto …'], ex: 'I climbed onto a chair to change a light.' },
  { q: 'Where do you get on and off the bus or train?', st: ['I get on at … and get off at …'], ex: 'I get on at Central and get off at the park.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, dois: { n: 0, esc: '' }, verbo: { n: 0, esc: '' }, pl: { n: 0, esc: '', anim: 0 }, guia: { n: 0, esc: '', olhos: 0 }, seu: { n: 0 } };

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE BLUEPRINT</span><h1>Into <b>the Room</b></h1>'
    + '<p class="sub">The ball goes exactly where your words send it. <b>Into</b> the house, <b>past</b> the kitchen, <b>out of</b> the window.</p>'
    + '<div class="chipsx"><span class="pilula">into · out of</span><span class="pilula">onto · off</span><span class="pilula">through · across · past</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the house</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + planta(6, 0) + '<div class="legenda">' + ['into', 'through', 'across', 'past'].map(function (k) { return '<span>' + estrada(k) + '<b>' + k + '</b></span>'; }).join('') + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.dois = function (c) {
  var e = S.dois, n = e.n, fim = n >= DOIS.length;
  if (fim) return cab(c) + trilha(DOIS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OUT OF SIX</small><h2>A place has no T. A path has one: in → into, on → onto.</h2></div><div class="legenda grande-l">' + ['into', 'onto', 'out of', 'off'].map(function (k) { return '<span>' + estrada(k) + '<b>' + k + '</b></span>'; }).join('') + '</div></div>';
  var x = DOIS[n], ok = e.esc === x.k;
  var card = function (lado) {
    var move = x.k === lado, cls = ok ? (move ? ' move' : ' parado') : (e.esc === lado ? ' errado' : '');
    return '<button type="button" class="frase-c vd' + cls + '" data-a="ds" data-v="' + lado + '"' + (ok ? ' disabled' : '') + '><small>' + (ok ? (move ? 'PATH · IT MOVES' : 'PLACE · IT SITS STILL') : lado.toUpperCase()) + '</small><b>' + x[lado] + '</b>' + (ok && move ? estrada(x.r, 'mini') : '') + '</button>';
  };
  return cab(c) + trilha(DOIS, n) + '<div class="dois">' + card('a') + card('b') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ds-prox">Next pair</button></div>' : (e.esc ? '<p class="recusa" style="text-align:center">Is it standing still, or is it moving?</p>' : ''));
};

R.verbo = function (c) {
  var e = S.verbo, n = e.n, fim = n >= VERBO.length;
  if (fim) return cab(c) + trilha(VERBO, n) + '<div class="foco"><div class="pergunta vd"><small>SIX ROADS, ONE VERB</small><h2>Your language uses six verbs here. English uses one verb and a small road word.</h2></div><div class="legenda grande-l">' + ESTRADAS.map(function (k) { return '<span>' + estrada(k) + '<b>' + k + '</b></span>'; }).join('') + '</div></div>';
  var x = VERBO[n], ok = e.esc === x.k;
  return cab(c) + trilha(VERBO, n) + '<div class="mesa-v"><div class="lado-l"><div class="q-grande vd"><p>' + x.a + '<span class="gap">' + (ok ? x.k : '___') + '</span>' + x.b + '</p></div>'
    + '<div class="tres-b">' + ordem(ESTRADAS.map(function (k) { return [k, k]; }), n + 1).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="vb" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">' + x.w + '</p><div><button type="button" class="btn" data-a="vb-prox">Next</button></div>' : (e.esc ? '<p class="recusa">Where does it start, and where does it end?</p>' : '')) + '</div>'
    + '<div class="vd quadro">' + (ok ? estrada(x.k, 'grande') + '<b>' + x.k + '</b>' : '<span class="interroga">?</span><small>THE ROAD</small>') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="legenda faixa-e">' + ['into', 'out of', 'onto', 'off', 'through', 'across', 'past'].map(function (k) { return '<span>' + estrada(k) + '<b>' + k + '</b></span>'; }).join('') + '</div>' + armas(ARMAS, 'THE SLIPS · SAY IT RIGHT, THEN TAP');
};

R.planta = function (c) {
  var e = S.pl, n = e.n, fim = n >= PLANTA.length, lado;
  if (fim) lado = '<div class="pergunta vd"><small>THE GATE</small><h2>Six legs. The ball did exactly what your words said.</h2></div>' + follow('THE WAY BACK', 'Now say the route back, from the gate to the street.', ['You walk across …', 'You climb onto …'], [], 'volta', mostra('volta', 'You walk across the yard, climb onto the low roof, go into the attic through the window, down the stairs, past the kitchen and out of the house.', 1));
  else {
    var x = PLANTA[n], ok = e.esc === x.k;
    lado = '<div class="q-grande vd"><small>LEG ' + (n + 1) + ' OF 6</small><p>' + x.f + '<span class="gap">' + (ok ? x.k : '___') + '</span>' + x.b + '</p></div>'
      + (ok ? '<p class="aprova">' + x.w + '</p><div><button type="button" class="btn" data-a="pl-prox">Next leg</button></div>'
        : '<h5 class="so-prof rot-ouve">TAP THE ROAD YOU HEARD</h5><div class="tres-b">' + ordem(x.op.map(function (o) { return [o, o]; }), n + 3).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? ' errado' : '') + '" data-a="pl" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">Look at the plan. Where does the leg start and end?</p>' : ''));
  }
  return cab(c) + '<div class="mesa-p"><div class="vd quadro-p">' + planta(fim ? n : n + (e.esc === PLANTA[n].k ? 1 : 0), e.anim) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.tres = function (c) {
  return cab(c) + '<div class="tres">' + TRES.map(function (x, i) {
    return '<div class="card-t vd">' + estrada(x.w, 'grande') + '<b>' + x.w + '</b><small>' + x.m + '</small><p class="ex">“' + x.s + '”</p><p class="ask">' + x.ask + '</p>' + mostra('tr' + i, x.ex, 1) + '</div>';
  }).join('') + '</div>';
};

R.guia = function (c) {
  var e = S.guia, n = e.n, fim = n >= GUIA.length, aqui = n ? GUIA[n - 1].cel : 0, x = fim ? null : GUIA[n], lado;
  var feito = { 0: 1 }; GUIA.slice(0, n).forEach(function (g) { feito[g.cel] = 1; });
  var grade = '<div class="grade-g">' + Array.apply(null, Array(25)).map(function (_, i) {
    var cls = MUROS[i] ? ' muro' : (feito[i] ? ' feito' : '') + (i === aqui ? ' aqui' : '') + (i === 24 ? ' tesouro' : '');
    return '<div class="cel' + cls + '">' + (MUROS[i] ? '' : '<small>' + (MARCAS[i] || '') + '</small>') + (i === aqui ? '<i class="prof"></i>' : '') + '</div>';
  }).join('') + '</div>';
  if (fim) lado = '<div class="bau vd" style="background-image:url(' + img('bau') + ')"><span>THE TREASURE</span></div><div class="pergunta vd"><small>OPEN YOUR EYES</small><h2>Your teacher found the treasure, with nothing but your words.</h2></div>';
  else {
    var ok = e.esc === 'ok';
    lado = (e.olhos ? '' : '<div><button type="button" class="btn so-prof" data-a="gu-olhos">My eyes are closed</button></div>')
      + '<div class="pede vd"><small>STEP ' + (n + 1) + ' OF 7 · YOU GUIDE</small><b>Where now? Say the instruction.</b></div>'
      + (ok ? '<div class="balao vd"><small>YOU SAID</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="gu-prox">Your teacher moves</button></div>'
        : '<h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 4).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="gu" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + x.no[e.esc] + '</p>' : ''));
  }
  return cab(c) + '<div class="mesa-p' + (e.olhos && !fim ? ' olhos' : '') + '"><div class="vd quadro-p">' + grade + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.seu = function (c) {
  var e = S.seu, n = Math.min(e.n, SEU.length - 1), x = SEU[n];
  return cab(c) + trilha(SEU, e.n) + '<div class="mesa-c"><div class="aberta vd" style="background-image:url(' + img('corredor') + ')"><span>YOUR ROUTE</span></div><div class="lado-l"><div class="pergunta vd ja"><small>ROUTE ' + (n + 1) + ' OF 5</small><h2>' + x.q + '</h2></div>'
    + fala('seu' + n, x.st, ['into', 'out of', 'through', 'across', 'past', 'get on / off']) + mostra('seu' + n, x.ex, 1)
    + (n < SEU.length - 1 ? '<div><button type="button" class="btn" data-a="se-prox">Next route</button></div>' : '') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I get out of bed …\nI walk into …\nI go past …', 'Your route',
    ['I get out of bed', ' and walk into ', ' through ', ' past ', ' across ', ' out of '], ['BED TO KITCHEN, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now the same route, with the road words.' : 'Your real morning route, with into, out of, through and past.'])
    + '<div class="lado-fim"><div class="legenda">' + ['into', 'out of', 'past'].map(function (k) { return '<span>' + estrada(k) + '<b>' + k + '</b></span>'; }).join('') + '</div><div class="grande vd"><span><u>enter</u> the room (no in)</span><span>go <u>out of</u> the house</span><span>get <u>on</u> / <u>off</u> the bus</span></div>'
    + mostra('fim', 'I get out of bed and walk into the hall.<br>I go past the bathroom and into the kitchen.<br>Then I walk across the kitchen to the coffee!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.ds = function (b, n, v) { S.dois.esc = v; };
TOQUES['ds-prox'] = function () { S.dois = { n: S.dois.n + 1, esc: '' }; };
TOQUES.vb = function (b, n, v) { S.verbo.esc = v; };
TOQUES['vb-prox'] = function () { S.verbo = { n: S.verbo.n + 1, esc: '' }; };
TOQUES.pl = function (b, n, v) { S.pl.esc = v; if (v === PLANTA[S.pl.n].k) { S.pl.anim = 1; setTimeout(function () { S.pl.anim = 0; }, 1000); } };
TOQUES['pl-prox'] = function () { S.pl = { n: S.pl.n + 1, esc: '', anim: 0 }; };
TOQUES.gu = function (b, n, v) { S.guia.esc = v; };
TOQUES['gu-olhos'] = function () { S.guia.olhos = 1; };
TOQUES['gu-prox'] = function () { S.guia = { n: S.guia.n + 1, esc: '', olhos: S.guia.olhos }; };
TOQUES['se-prox'] = function () { S.seu.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G12 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'fotoPrimeiro', titulo: 'Look first. What do you say?',
  cenas: [
    { img: 'corredor', antes: 'You are in the hallway. The kitchen is ahead, behind a door.', frase: '“I walk <mark>through</mark> the hallway and <mark>into</mark> the kitchen.”' },
    { img: 'labirinto', antes: 'You are inside the maze. The way out is ahead.', frase: '“I go <mark>across</mark> the yard and <mark>out of</mark> the maze.”' },
    { img: 'bau', antes: 'The treasure chest is on the table. You open it.', frase: '“I take the key <mark>out of</mark> the chest.”' }
  ],
  nota: '<b>in</b> is a place: I’m in the kitchen. <b>into</b> is a path: I walk into the kitchen. <b>out of</b>, <b>through</b>, <b>across</b> and <b>past</b> also show the way.',
  uso: { p: 'Your turn. Walk through your own house with words: two sentences with into, out of or through.', molde: ['I go into …', 'I walk through …', 'I go out of …'], ex: 'I go out of my bedroom. I walk through the hallway and into the kitchen.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_foto', GX_EXPLICA); };
