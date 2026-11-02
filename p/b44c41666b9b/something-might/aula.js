/* ============================================================
   SOMETHING MIGHT BE IN THE HOUSE · THE HALLWAY AT NIGHT · LIVE 06/10/2026
   Main series A2 · might / may + verbo puro para POSSIBILIDADE AGORA ·
   might not / may not · maybe (uma palavra) + frase inteira. Erros
   universais: "It can be the cat" (can para palpite), "It might is",
   "It mights", "It might to be", "It might don't", "Maybe it might".
   O MUNDO (da aula velha): noite de Halloween, sozinho numa casa velha, a
   luz caiu, só uma lanterna. Atrás de cada porta, um barulho; no fim é
   sempre uma bobagem (a torneira, o gato, o vovô). Terror sem susto.
   A CARA: o CORREDOR escuro com seis PORTAS de madeira (a aberta deixa
   escapar uma luz âmbar fraca) e a PAREDE com o círculo da lanterna e a
   SOMBRA em SVG. O feixe é âmbar e pequeno: nada de campo claro.
   Fila: FILA-LIVE-386.md · 066.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'sala', rot: 'I · Noises at Night', t: 'Your house at night. What do you hear?', p: 'Pick a card. Real life. Nobody is corrected here.' },
  { k: 'portas', est: 'o', min: 7, img: 'capa', rot: 'II · Six Doors', t: 'Six doors, six noises. Guess before you open the door.', p: 'Tap a door. Read the noise. Guess out loud. Then open it.' },
  { k: 'regra', est: 'f', min: 6, img: 'lanterna', rot: 'III · The Rule', t: 'A guess about now: might or may.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'sombra', est: 'o', min: 7, img: 'escada', rot: 'IV · The Flashlight', t: 'Eight shadows on the wall. Two guesses for each, fast.', p: 'Your teacher reads the clue. Guess at once: might, then might not.' },
  { k: 'roda', est: 'o', min: 7, img: 'janela', rot: 'V · Tonight, Maybe', t: 'What might happen tonight? Nobody knows. Guess!', p: 'Spin. Answer with might or might not, and say why.' },
  { k: 'sam', est: 'o', min: 7, extra: 1, img: 'cozinha', rot: 'VI · Sam Is Scared', t: 'Sam is home alone and hears noises. Calm Sam down.', p: 'Your teacher is Sam. Answer with might, may or might not.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'lanterna', rot: 'VII · Quick Check', t: 'Six quick guesses from the house.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'sala', rot: 'VIII · Lights On', t: 'The power is back. What might be in YOUR house tonight?', p: 'Three guesses: one with might, one with may, one with might not. It goes to your My notes.' }
];

var ABRE = [
  { k: 'NOISES', q: 'What noises do you hear in your house at night?', fup: 'Which one is the strangest?', st: ['I hear …'], ex: 'I hear the fridge, and my neighbor’s dog.' },
  { k: 'ALONE', q: 'Do you like being home alone at night?', fup: 'What do you do?', st: ['Yes, I …', 'No, I …'], ex: 'Yes, I love it. It’s quiet.' },
  { k: 'THE DARK', q: 'Were you afraid of the dark when you were a child?', fup: 'And now?', st: ['Yes! I …', 'No, I …'], ex: 'Yes! I slept with the light on until I was ten.' },
  { k: 'POWER CUT', q: 'What do you do when there is no power?', fup: 'When was the last time?', st: ['I look for …'], ex: 'I look for my phone and a candle.' },
  { k: 'HALLOWEEN', q: 'Do people celebrate Halloween where you live? How?', fup: 'Did you ever wear a costume?', st: ['Some people …'], ex: 'Some kids go to parties. Not many people go trick-or-treating.' }
];
var FORMAS = [{ k: 'might', t: 'MIGHT / MAY + VERB' }, { k: 'not', t: 'MIGHT NOT' }, { k: 'can', t: 'IT CAN BE (A GUESS)', erro: 1 }, { k: 'is', t: 'IT MIGHT IS / MIGHTS', erro: 1 }];

var NOTA = {
  can: 'can is for ability. For a guess about now: might or may.', base: 'After might / may: the base verb (be, want, go).', s: 'might never changes: no -s.', to: 'No to after might / may.',
  dobro: 'One is enough: It might be… or Maybe it’s…', sujeito: 'Who? Start with it, he, somebody…: It might be…', nao: 'Negative: might not / may not + verb.', nao2: 'Negative: might not / may not + verb.'
};

var PORTAS = [
  { k: 'KITCHEN', som: 'drip… drip… drip…', pista: 'A small, slow noise. Water?', ops: [['It might be the tap.', 'ok'], ['It can be the tap.', 'can'], ['It might is the tap.', 'base']], abre: 'It IS the tap. Nobody closed it. Close it, and the noise stops.' },
  { k: 'BATHROOM', som: 'scratch, scratch', pista: 'Something at the bottom of the door. Small and soft.', ops: [['It might be the cat.', 'ok'], ['It mights be the cat.', 's'], ['It might to be the cat.', 'to']], abre: 'The cat! She is hungry and she wants her dinner.' },
  { k: 'STAIRS', som: 'creak… creak…', pista: 'Slow steps on old wood.', ops: [['Somebody may be on the stairs.', 'ok'], ['Somebody can be on the stairs.', 'can'], ['Maybe somebody might be on the stairs.', 'dobro']], abre: 'It’s Grandpa. He wants a glass of milk, and he forgot his glasses.' },
  { k: 'WINDOW', som: 'tap, tap, tap', pista: 'On the glass. Again and again.', ops: [['It may be the rain.', 'ok'], ['It may is the rain.', 'base'], ['May be the rain.', 'sujeito']], abre: 'Not the rain: a branch in the wind. Guesses can be wrong: that’s why we say might.' },
  { k: 'ATTIC', som: 'BUMP!', pista: 'Something heavy, up in the attic.', ops: [['It might not be a ghost.', 'ok'], ['It might don’t be a ghost.', 'nao'], ['It not might be a ghost.', 'nao2']], abre: 'An old box fell off a shelf. Inside: photos from 1985. No ghost.' },
  { k: 'LIVING ROOM', som: 'a song from nowhere', pista: 'Music, very quiet, from under the sofa.', ops: [['It might be my phone.', 'ok'], ['It might being my phone.', 'base'], ['It can be my phone.', 'can']], abre: 'Your phone, under the sofa! Your friend is calling. Answer it later, in scene VI.' }
];

var FITAS = [['YES, MAYBE', 'It might be the cat. · It may rain.'], ['NO, MAYBE NOT', 'It might not be a ghost.'], ['THE VERB', 'might + be · want · go (no -s, no to)'], ['SAME IDEA', 'Maybe it’s the cat. = It might be the cat.']];
var ARMAS = [
  ['NOT CAN', 'It can be the cat.', 'It might be the cat.', 'can is for ability. For a guess about now: might or may.'],
  ['THE VERB', 'It might is the wind.', 'It might be the wind.', 'After might / may: the base verb.'],
  ['NO -S, NO TO', 'She mights to come.', 'She might come.', 'might is the same for everybody. No to after it.'],
  ['NEGATIVE', 'It might don’t be a ghost.', 'It might not be a ghost.', 'No don’t: just not after might.'],
  ['ONE IS ENOUGH', 'Maybe it might be the rain.', 'It might be the rain.', 'Or: Maybe it’s the rain. Not both.'],
  ['TONIGHT', 'It can rain tonight.', 'It might rain tonight.', 'A guess about tonight: might.']
];

var SOMBRAS = [
  { k: 'SHADOW 1', forma: 'arvore', pista: 'Tall and thin. It moves a little in the wind.', ops: [['It might be a tree. It may not be a person.', 'ok'], ['It can be a tree.', 'can'], ['It might be a tree. It may don’t be a person.', 'nao']] },
  { k: 'SHADOW 2', forma: 'gato', pista: 'Two pointy ears and a long tail.', ops: [['It might be a cat. It might not be a wolf.', 'ok'], ['It mights be a cat.', 's'], ['It might be a cat. It might not is a wolf.', 'base']] },
  { k: 'SHADOW 3', forma: 'abobora', pista: 'Round and big, on the kitchen table.', ops: [['It may be a pumpkin.', 'ok'], ['It may to be a pumpkin.', 'to'], ['It can be a pumpkin.', 'can']] },
  { k: 'SHADOW 4', forma: 'casaco', pista: 'Wide, with long arms, on a chair.', ops: [['It might be a coat on the chair.', 'ok'], ['Might be a coat on the chair.', 'sujeito'], ['It might is a coat on the chair.', 'base']] },
  { k: 'SHADOW 5', forma: 'chapeu', pista: 'A pointy hat and a long stick, by the door.', ops: [['It may be a Halloween costume.', 'ok'], ['It can be a costume.', 'can'], ['Maybe it might be a costume.', 'dobro']] },
  { k: 'SHADOW 6', forma: 'rato', pista: 'Very small. It runs fast along the wall.', ops: [['It might be a mouse. It may not be dangerous.', 'ok'], ['It may not to be dangerous.', 'to'], ['It no may be dangerous.', 'nao']] },
  { k: 'SHADOW 7', forma: 'aranha', pista: 'Many long legs, slowly, on the ceiling.', ops: [['It might be a spider!', 'ok'], ['It might being a spider.', 'base'], ['It can be a spider.', 'can']] },
  { k: 'SHADOW 8', forma: 'dupla', pista: 'Two small shapes with pointy hats at the front door, laughing.', ops: [['They might be my friends. They might want candy!', 'ok'], ['They mights be my friends.', 's'], ['They might to want candy.', 'to']] }
];

var FATIAS = [
  { k: 'WEATHER', q: 'Will it rain tonight where you are?', h: 'It might rain. It’s very cloudy.' },
  { k: 'SLEEP', q: 'Will you sleep well tonight?', h: 'I might not. I have too much coffee in me!' },
  { k: 'A MESSAGE', q: 'Who might send you a message tonight?', h: 'My sister might text me. She always does.' },
  { k: 'DINNER', q: 'What might you eat for dinner?', h: 'I might order a pizza.' },
  { k: 'A MOVIE', q: 'Will you watch a scary movie this week?', h: 'I might. Or I might watch a comedy.' },
  { k: 'THE DOOR', q: 'Will somebody knock on your door on Halloween?', h: 'Kids may come for candy. I may not open!' },
  { k: 'THE POWER', q: 'Will the power go out this month?', h: 'It might. It happens in storms.' },
  { k: 'COSTUME', q: 'What might you wear to a Halloween party?', h: 'I might go as a vampire.' }
];
var CORES_R = ['#2a1e30', '#1c2230', '#30261a', '#1f2a22', '#331c22', '#16262a', '#2c2216', '#22223a'];
var GIROS = ordem(FATIAS.map(function (_, i) { return i; }), 4);

var SAM = [
  { ela: 'Hello? I hear something in the kitchen!', pede: 'Don’t worry. It might be… (your guess)', resp: 'The fridge? Maybe… It does make noises.' },
  { ela: 'Now there’s a light in the garden!', pede: 'It may be… (your guess)', resp: 'A car? Yes… there is a car outside.' },
  { ela: 'And a shadow on the wall! Is it a ghost?', pede: 'It might not be a ghost. It might be…', resp: 'My coat! You’re right. It’s my coat.' },
  { ela: 'Can you come here? Please?', pede: 'I might… / I may not… (your answer)', resp: 'Thank you. I feel better already. Happy Halloween!' }
];

var QUIZ = [
  { a: 'It ', b: ' be the cat.', op: ['might', 'can', 'mights'], nao: 'A guess about now: might.' },
  { a: 'Somebody may ', b: ' on the stairs.', op: ['be', 'is', 'to be'], nao: 'After may: the base verb, be.' },
  { a: 'It might ', b: ' a ghost.', op: ['not be', 'don’t be', 'no be'], nao: 'Negative: might not + verb.' },
  { a: 'They might ', b: ' candy.', op: ['want', 'to want', 'wants'], nao: 'After might: want. No to, no -s.' },
  { a: '', b: ' it’s the rain.', op: ['Maybe', 'Might', 'May'], nao: 'Before a full sentence: Maybe (one word).' },
  { a: 'It ', b: ' rain tonight. Take an umbrella.', op: ['might', 'can', 'is might'], nao: 'A guess about tonight: might.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, pt: { sel: -1, esc: {}, aberta: {} }, sb: { n: 0, esc: '' }, roda: { g: 0, anim: 0 }, sam: { n: 0, viu: {} }, quiz: { esc: {} } };

var FORMAS_SVG = {
  arvore: '<path d="M96 200 L100 90 L104 200 Z"/><path d="M100 120 L70 90 M100 110 L132 82 M100 140 L64 120 M100 135 L138 112" stroke-width="5"/>',
  gato: '<path d="M80 200 Q76 150 92 132 L86 108 L100 124 L114 108 L108 132 Q124 150 120 200 Z"/><path d="M120 190 Q150 180 146 150" stroke-width="7" fill="none"/>',
  abobora: '<ellipse cx="100" cy="165" rx="48" ry="36"/><rect x="96" y="118" width="8" height="16"/>',
  casaco: '<path d="M70 110 L100 100 L130 110 L150 170 L132 172 L126 140 L126 200 L74 200 L74 140 L68 172 L50 170 Z"/><rect x="66" y="196" width="68" height="6"/>',
  chapeu: '<path d="M70 150 L100 70 L130 150 Z"/><rect x="58" y="146" width="84" height="8"/><path d="M146 80 L140 200" stroke-width="5"/>',
  rato: '<ellipse cx="100" cy="180" rx="22" ry="12"/><circle cx="80" cy="172" r="6"/><path d="M122 182 Q150 190 160 176" stroke-width="3" fill="none"/>',
  aranha: '<circle cx="100" cy="90" r="14"/><path d="M100 90 L60 60 M100 90 L56 90 M100 90 L60 120 M100 90 L66 140 M100 90 L140 60 M100 90 L144 90 M100 90 L140 120 M100 90 L134 140" stroke-width="3"/><path d="M100 76 L100 20" stroke-width="1.5"/>',
  dupla: '<path d="M60 200 L60 160 Q72 140 84 160 L84 200 Z"/><path d="M58 154 L72 110 L86 154 Z"/><path d="M110 200 L110 166 Q120 150 130 166 L130 200 Z"/><path d="M108 160 L120 124 L132 160 Z"/>'
};
function parede(forma, revelado) {
  return '<svg class="parede" viewBox="0 0 200 220" role="img" aria-label="A shadow on the wall"><defs><radialGradient id="feixe" cx="50%" cy="55%" r="50%"><stop offset="0" stop-color="#5a4320" stop-opacity=".9"/><stop offset=".7" stop-color="#2a2014" stop-opacity=".6"/><stop offset="1" stop-color="#0b0a09" stop-opacity="0"/></radialGradient></defs>'
    + '<rect width="200" height="220" fill="#0c0b0a"/><circle cx="100" cy="125" r="100" fill="url(#feixe)"/><g class="sombra-f' + (revelado ? ' revelada' : '') + '">' + (FORMAS_SVG[forma] || '') + '</g></svg>';
}
function porta(p, i, e) {
  var aberta = e.aberta[i], feita = e.esc[i] === 'ok';
  return '<button type="button" class="porta' + (e.sel === i ? ' on' : '') + (aberta ? ' porta-aberta' : '') + (feita ? ' feita' : '') + '" data-a="pt" data-n="' + i + '"><span class="folha-p"><i class="macaneta"></i></span><b>' + p.k + '</b><small>' + p.som + '</small></button>';
}
function roda(sel, anim) {
  var fat = FATIAS.map(function (f, i) {
    var a0 = (i * 45 - 90) * Math.PI / 180, a1 = ((i + 1) * 45 - 90) * Math.PI / 180, am = ((i + 0.5) * 45 - 90) * Math.PI / 180;
    var x0 = 100 + 96 * Math.cos(a0), y0 = 100 + 96 * Math.sin(a0), x1 = 100 + 96 * Math.cos(a1), y1 = 100 + 96 * Math.sin(a1);
    var tx = 100 + 62 * Math.cos(am), ty = 100 + 62 * Math.sin(am);
    return '<path d="M100 100 L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A96 96 0 0 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' Z" fill="' + CORES_R[i] + '" stroke="#0a0d14" stroke-width="2"/>'
      + '<text x="' + tx.toFixed(1) + '" y="' + ty.toFixed(1) + '" transform="rotate(' + ((i + 0.5) * 45) + ' ' + tx.toFixed(1) + ' ' + ty.toFixed(1) + ')" text-anchor="middle" dominant-baseline="middle">' + f.k + '</text>';
  }).join('');
  var fim = sel < 0 ? 0 : -((sel + 0.5) * 45);
  return '<div class="roda-box"><span class="ponteiro"></span><svg class="roda' + (anim ? ' gira' : '') + '" viewBox="0 0 200 200" style="--ate:' + fim + 'deg;transform:rotate(' + fim + 'deg)" role="img" aria-label="Tonight wheel">' + fat + '<circle cx="100" cy="100" r="16" fill="#0a0d14" stroke="#e0a24a" stroke-width="2"/></svg></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE HALLWAY AT NIGHT</span><h1>Something <b>Might</b> Be in the House</h1>'
    + '<p class="sub">The power is out. You hear a noise. It <b>might</b> be the cat… It <b>may not</b> be a ghost.</p>'
    + '<div class="chipsx"><span class="pilula">might / may + verb</span><span class="pilula">might not</span><span class="pilula">not can</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn on the flashlight</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + parede('gato', 0) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.portas = function (c) {
  var e = S.pt, x = e.sel >= 0 ? PORTAS[e.sel] : null, n = 0, lado;
  PORTAS.forEach(function (_, i) { if (e.aberta[i]) n++; });
  if (!x) lado = '<div class="pergunta vd"><small>' + n + ' OF 6 DOORS OPEN</small><h2>' + (n === 6 ? 'Six doors, six guesses, six silly answers. How do we guess in English? The rule is next.' : 'Tap a door. Listen to the noise. Guess before you open it.') + '</h2></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok', aberta = e.aberta[e.sel];
    lado = '<div class="ruido-p vd"><small>' + x.k + '</small><b>“' + x.som + '”</b><em>' + x.pista + '</em></div>'
      + (ok ? '<div class="balao vd"><small>YOUR GUESS</small><p>' + x.ops[0][0] + '</p></div>' + (aberta ? '<div class="balao vd revela"><small>THE DOOR IS OPEN</small><p>' + x.abre + '</p></div>' : '<div><button type="button" class="btn" data-a="pt-abre">Open the door</button></div>')
        : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="pt-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : ''));
  }
  return cab(c) + '<div class="mesa-c"><div class="corredor">' + PORTAS.map(function (p, i) { return porta(p, i, e); }).join('') + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.sombra = function (c) {
  var e = S.sb, n = e.n, fim = n >= SOMBRAS.length;
  if (fim) return cab(c) + trilha(SOMBRAS, n) + '<div class="mesa-c">' + parede('dupla', 1) + '<div class="lado-l"><div class="pergunta vd"><small>EIGHT SHADOWS</small><h2>Sixteen guesses. The last two were right: it’s your friends, and they want candy.</h2></div></div></div>';
  var x = SOMBRAS[n], ok = e.esc === 'ok';
  return cab(c) + trilha(SOMBRAS, n) + '<div class="mesa-c">' + parede(x.forma, ok) + '<div class="lado-l"><div class="ruido-p vd"><small>' + x.k + ' · THE CLUE</small><b>' + x.pista + '</b></div>'
    + (ok ? '<div class="balao vd"><small>YOUR TWO GUESSES</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="sb-prox">Next shadow</button></div>'
      : '<p class="ini">It might be… It might not be…</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 2).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="sb" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : '')) + '</div></div>';
};

R.roda = function (c) {
  var e = S.roda, sel = e.g > 0 ? GIROS[(e.g - 1) % 8] : -1, x = sel >= 0 ? FATIAS[sel] : null;
  var lado = x ? '<div class="pergunta vd ja"><small>' + x.k + ' · TONIGHT, MAYBE</small><h2>' + x.q + '</h2></div>' + fala('rd' + sel, ['It might …', 'I might not …', '… may …'], ['because']) + mostra('rd' + sel, x.h, 1)
    : '<div class="pergunta vd"><small>TONIGHT, MAYBE</small><h2>Spin the wheel. Guess with might or might not.</h2></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + roda(sel, e.anim) + '<button type="button" class="btn cheio" data-a="rd">' + (e.g ? 'Spin again' : 'Spin') + '</button></div><div class="lado-l">' + lado + '</div></div>';
};

R.sam = function (c) {
  var e = S.sam, n = e.n, fim = n >= SAM.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('cozinha') + ')"><span class="rec">● CALLING</span><span>SAM · HOME ALONE</span></div>';
  if (fim) return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l"><div class="pergunta vd"><small>SAM IS CALM</small><h2>Four guesses, zero ghosts.</h2></div></div></div>';
  var x = SAM[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l">' + trilha(SAM, n) + '<div class="balao vd"><small>SAM</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>YOUR TURN</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd"><small>SAM</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="sm-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="sm-viu">Answered · Sam replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. Lights on.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Tonight, there might be …\nMy neighbor may …\nIt might not …', 'Three guesses',
    ['It might be ', 'It may be ', 'It might not be ', 'Maybe it’s '], ['WHAT MIGHT BE IN YOUR HOUSE TONIGHT?', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now three guesses about your own house.' : 'Three guesses about your own house: might, may, might not.'])
    + '<div class="lado-fim">' + parede('abobora', 1) + '<div class="grande vd"><span><u>might</u> / <u>may</u> + verb</span><span><u>might not</u> + verb</span><span>never <s>it can be</s> for a guess</span></div>'
    + mostra('fim', 'The noise in the kitchen might be the fridge.<br>My cat may be under the bed.<br>It might not be a ghost!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.pt = function (b, n) { S.pt.sel = n; };
TOQUES['pt-v'] = function (b, n, v) { S.pt.esc[S.pt.sel] = v; };
TOQUES['pt-abre'] = function () { S.pt.aberta[S.pt.sel] = 1; };
TOQUES.sb = function (b, n, v) { S.sb.esc = v; };
TOQUES['sb-prox'] = function () { S.sb = { n: S.sb.n + 1, esc: '' }; };
TOQUES.rd = function () { S.roda.g++; S.roda.anim = 1; setTimeout(function () { S.roda.anim = 0; }, 1300); };
TOQUES['sm-viu'] = function () { S.sam.viu[S.sam.n] = 1; };
TOQUES['sm-prox'] = function () { S.sam.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
