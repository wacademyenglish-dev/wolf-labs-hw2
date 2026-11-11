/* ============================================================
   WE WOULD ALWAYS · THE HOME MOVIE · LIVE CLASS  06/10/2026
   Main series A2 · would para ação repetida no passado (depois do
   período) × used to para estado (e ação) · past simple para o que
   aconteceu uma vez. Reforço da Nobody Does That Anymore (used to).
   Erros universais: "I would have long hair" (would + estado), WOULD
   sem período, "she would sell the house that spring" (uma vez), "he
   wouldn't come" soando como recusa.
   O MUNDO (da aula velha): os verões na casa da avó perto da água; o
   bolo; o tio que perde no baralho; o verão em que ela vendeu a casa.
   Quatro áudios (w1–w4) conferidos no whisper em 06/10: batem.
   A CARA: o FILME CASEIRO de 8 mm — uma película com quadros; a ação
   repetida vira quadro projetado (dá para filmar), o estado deixa o
   quadro vazio ("nothing to film"). Fila: FILA-LIVE-386.md · 077.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'casa' },
  { k: 'abre', est: 'o', min: 7, img: 'estrada', rot: 'I · Every Summer', t: 'Your summers first.', p: 'Pick a card. Answer out loud. Mistakes are okay. Nobody corrects you.' },
  { k: 'gx', est: 'f', min: 4, img: 'lago', rot: 'II · Find the Rule', t: 'Four sentences about summer. You find the rule.', p: 'Read the four sentences out loud. Look at the lit verbs. Choose the rule. Then say your own.' },
  { k: 'rolo', est: 'f', min: 6, img: 'casa', rot: 'III · The Home Movie', t: 'When I was ten, every summer… Eight frames on the reel.', p: 'Say the line with WOULD or USED TO. Then tap. WOULD on a state leaves the frame empty.' },
  { k: 'camera', est: 'f', min: 6, img: 'lago', rot: 'IV · Could You Film It?', t: 'One question decides the verb.', p: 'Read it out loud. Could a camera film it? Tap.' },
  { k: 'umavez', est: 'f', min: 6, img: 'janela', rot: 'V · The Summer It Stopped', t: 'The last summer. Each thing happened once.', p: 'Read the situation. Pick. Read the sentence out loud.' },
  { k: 'ouve', est: 'l', min: 7, img: 'casa', rot: 'VI · Which Past Was That?', t: 'Four lines at normal speed.', p: 'Play. Repeated, or once? The text opens after you listen.' },
  { k: 'depois', est: 'o', min: 7, img: 'estrada', rot: 'VII · What Replaced It', t: 'Every habit that ended left another behind.', p: 'Say the old habit with WOULD. Open it. Then: …, but now …' },
  { k: 'melhor', est: 'o', min: 7, extra: 1, img: 'lago', rot: 'VIII · The Best Summer', t: 'Your best summer. Your teacher wants details.', p: 'Answer each question. Then your teacher asks for more.' },
  { k: 'moldes', est: 'o', min: 7, extra: 1, img: 'casa', rot: 'IX · Say the Five', t: 'Only the shape on the screen. The sentence is yours.', p: 'Say a whole sentence for each shape, about your life.' },
  { k: 'fim', est: 'w', min: 6, img: 'janela', rot: 'X · The Last Reel', t: 'Your answers from scene I come back.', p: 'Write your summer: the period, two habits, one state, and the year it stopped. It goes to your My notes.' }
];

var TR = {
  'w1.mp3': 'Every summer we would drive down on the Friday.',
  'w2.mp3': 'We used to have a house near the water.',
  'w3.mp3': 'My grandmother would make the same cake every year.',
  'w4.mp3': 'That summer, she sold the house.'
};

var ABRE = [
  { k: 'Every summer', q: 'What did you do every summer when you were a child?', fup: 'Who was with you?', st: ['When I was …, we would …'], ex: 'When I was ten, we would go to the beach every weekend.' },
  { k: 'Year after year', q: 'Where did your family go, year after year?', fup: 'Who decided?', st: ['We used to go to …'], ex: 'We used to go to my aunt’s farm.' },
  { k: 'A place', q: 'What was that place like?', fup: 'Is it still there?', st: ['It used to be …'], ex: 'It used to be very quiet, with no internet.' }
];
var FORMAS = [{ k: 'would', t: 'WOULD + ACTION' }, { k: 'used', t: 'USED TO' }, { k: 'estado', t: 'WOULD + A STATE', erro: 1 }, { k: 'solto', t: 'WOULD WITH NO PERIOD', erro: 1 }];

var ROLO = [
  { a: 'we', b: 'drive down on the Friday night.', v: 'drive', t: 'acao' },
  { a: 'we', b: 'have a little house near the water.', v: 'have', t: 'estado' },
  { a: 'my grandmother', b: 'make the same cake for the first dinner.', v: 'make', t: 'acao' },
  { a: 'I', b: 'be afraid of the water.', v: 'be', t: 'estado' },
  { a: 'we', b: 'swim before breakfast, even when it was cold.', v: 'swim', t: 'acao' },
  { a: 'my uncle', b: 'lose at cards and blame the light.', v: 'lose', t: 'acao' },
  { a: 'the house', b: 'smell of wood and salt.', v: 'smell', t: 'estado' },
  { a: 'on the last night, we', b: 'eat outside.', v: 'eat', t: 'acao' }
];
var CAMERA = [['swim before breakfast', 1], ['be shy', 0], ['ride a bike to the lake', 1], ['have a dog called Max', 0], ['play cards after dinner', 1], ['love that old house', 0], ['sing in the car', 1], ['live far from the sea', 0]];

var UMAVEZ = [
  { fr: 'Your grandmother sold the house in March.', ok: 'She sold the house that spring.', mau: 'She would sell the house that spring.', w: 'Once. WOULD needs it to happen again.' },
  { fr: 'The last drive down, and you knew it.', ok: 'We drove down one more time.', mau: 'We would drive down one more time.', w: 'ONE MORE TIME counts it. Past simple.' },
  { fr: 'Your uncle did not come that year.', ok: 'He didn’t come that summer.', mau: 'He wouldn’t come that summer.', w: '“He wouldn’t come” sounds like he refused.' },
  { fr: 'The cake, for the last time.', ok: 'She made the cake one last time.', mau: 'She would make the cake one last time.', w: 'ONE LAST TIME: past simple.' },
  { fr: 'Nobody talked on the last evening.', ok: 'That evening nobody talked.', mau: 'That evening nobody would talk.', w: '“Nobody would talk” sounds like a refusal.' },
  { fr: 'You went back once, years later.', ok: 'I went back once, years later.', mau: 'I would go back once, years later.', w: 'ONCE. Nowhere for WOULD to stand.' }
];

var OUVE = [
  { au: 'w1.mp3', k: 'rep', w: 'Repeated. EVERY SUMMER sets the period.' },
  { au: 'w2.mp3', k: 'rep', w: 'Repeated, but a state: only USED TO.' },
  { au: 'w3.mp3', k: 'rep', w: 'Repeated. An action you could film.' },
  { au: 'w4.mp3', k: 'uma', w: 'Once. THAT SUMMER, one sale. Past simple.' }
];

var DEPOIS = [
  { fr: 'We would drive down every Friday.', k: 'now we fly, once a year', w: 'The road became a flight.' },
  { fr: 'She would make the cake herself.', k: 'now we buy one', w: 'Same table, and nobody bakes.' },
  { fr: 'We would swim before breakfast.', k: 'now we sleep late', w: 'The water is still there. The hour is not.' },
  { fr: 'My uncle would lose at cards.', k: 'now he watches from a chair', w: 'He still blames the light.' },
  { fr: 'We would all stay in one house.', k: 'now everybody has their own', w: 'More rooms, less noise.' }
];

var MELHOR = [
  { q: 'Which summer was the best? How old were you?', ini: 'The best summer was when I was …', seg: 'Who was with you?', ex: 'The best summer was when I was twelve, at my grandparents’ house.' },
  { q: 'Where would you go every day?', ini: 'Every day we would …', seg: 'And what would you eat?', ex: 'Every day we would walk to the river.' },
  { q: 'What was the place like?', ini: 'It used to be …', seg: 'Is it still like that?', ex: 'It used to be a small town with one store.' },
  { q: 'What would you do when it rained?', ini: 'When it rained, we would …', seg: 'Who always won?', ex: 'When it rained, we would play cards on the floor.' },
  { q: 'What happened once that summer that you still remember?', ini: 'One day, …', seg: 'Why do you remember it?', ex: 'One day, my cousin fell in the river with his phone.' },
  { q: 'Did those summers stop? When?', ini: 'They stopped when …', seg: 'Would you go back?', ex: 'They stopped when my grandfather sold the house.' }
];

var MOLDES = [
  { nm: 'SET THE PERIOD FIRST', d: 'When I was …, we would …', ex: 'When I was eight, we would visit my aunt every July.' },
  { nm: 'A REPEATED ACTION', d: 'She would always …', ex: 'My mom would always sing in the car.' },
  { nm: 'A STATE, NOT WOULD', d: 'We used to …', ex: 'We used to have a big yellow dog.' },
  { nm: 'THE YEAR IT ENDED', d: 'That year, …', ex: 'That year, we moved to the city.' },
  { nm: 'THE ONE TIME', d: '… one last time.', ex: 'We visited the house one last time.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, ro: { n: 0, esc: '', feitos: [] }, cm: { n: 0, esc: -1 }, uv: { n: 0, esc: -1 }, ou: { esc: {} }, dp: { n: 0, viu: {} }, me: { n: 0 }, mo: { n: 0 } };

function pelicula(quadros, atual, off) {
  off = off || 0;
  return '<div class="pelicula"><div class="furos">' + Array(12).join('<i></i>') + '</div><div class="quadros">' + quadros.map(function (q, i) {
    return '<div class="quadro-f' + (q === 'acao' ? ' rodou' : q === 'estado' ? ' vazio' : '') + (atual === i ? ' agora' : '') + '"' + (q === 'acao' ? ' style="background-image:url(' + img(['casa', 'estrada', 'lago', 'janela'][i % 4]) + ')"' : '') + '><span>' + (q === 'acao' ? 'FILMED' : q === 'estado' ? 'NOTHING TO FILM' : (off + i + 1)) + '</span></div>';
  }).join('') + '</div><div class="furos">' + Array(12).join('<i></i>') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · EVERY SUMMER · ONE REEL</span><h1>We Would <b>Always</b></h1>'
    + '<p class="sub">A home movie from the same summer, every year. <b>Would</b> for what you did. <b>Used to</b> for how things were.</p>'
    + '<div class="chipsx"><span class="pilula">When I was ten, we would…</span><span class="pilula">we used to have</span><span class="pilula">that summer, she sold it</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Play the reel</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + pelicula(['acao', 'estado', 'acao', 'acao'], -1) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.rolo = function (c) {
  var e = S.ro, n = e.n, quadros = ROLO.map(function (x, i) { return i < n ? x.t : ''; }), fim = n >= ROLO.length;
  var reel = '<div class="reel-l">' + pelicula(quadros.slice(0, 4), n < 4 ? n : -1) + pelicula(quadros.slice(4), n >= 4 ? n - 4 : -1, 4) + '</div>';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + reel + '</div><div class="lado-l"><div class="pergunta vd"><small>EIGHT FRAMES</small><h2>Five filmed, three empty. Would for what you did, used to for how things were.</h2></div></div></div>';
  var x = ROLO[n], esc = e.esc, ok = esc === 'used' || (esc === 'would' && x.t === 'acao'), msg = '';
  if (esc === 'would' && x.t === 'acao') msg = '<p class="aprova">Filmed. A repeated action: WOULD carries it (USED TO would too).</p>';
  else if (esc === 'used' && x.t === 'acao') msg = '<p class="aprova">USED TO works here too. In a story, WOULD sounds like a film.</p>';
  else if (esc === 'used') msg = '<p class="aprova">A state. Only USED TO carries it. The frame stays empty: nothing to film.</p>';
  else if (esc === 'would') msg = '<p class="recusa">The frame is empty. You can’t film being or having: WOULD can’t carry a state. Say it again with USED TO.</p>';
  var verbo = esc === 'would' && ok ? 'would' : esc === 'used' ? 'used to' : '___';
  return cab(c) + trilha(ROLO, n) + '<div class="mesa-c"><div class="lado-l">' + reel + '</div><div class="lado-l"><div class="pede vd"><small>WHEN I WAS TEN, EVERY SUMMER…</small><b>' + x.a.charAt(0).toUpperCase() + x.a.slice(1) + ' <span class="lacuna-r">' + verbo + '</span> ' + x.b + '</b></div>'
    + '<div class="dois-l"><button type="button" class="lado-btn' + (esc === 'would' ? (ok ? ' certo' : ' errado') : '') + '" data-a="ro" data-v="would"><b>WOULD</b><small>a repeated action</small></button><button type="button" class="lado-btn' + (esc === 'used' ? ' certo' : '') + '" data-a="ro" data-v="used"><b>USED TO</b><small>a state, or an action</small></button></div>'
    + msg + (ok ? '<div><button type="button" class="btn" data-a="ro-prox">Next frame</button></div>' : '') + '</div></div>';
};

R.camera = function (c) {
  var e = S.cm, n = e.n, fim = n >= CAMERA.length;
  if (fim) return cab(c) + trilha(CAMERA, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT SHOTS</small><h2>Four actions, four states. The camera decides.</h2></div></div>';
  var x = CAMERA[n], ok = e.esc === x[1];
  return cab(c) + trilha(CAMERA, n) + '<div class="foco"><div class="visor' + (ok ? (x[1] ? ' gravando' : ' sem-sinal') : '') + '"><span class="rec">● REC</span><p>' + x[0] + '</p></div><div class="dois-l">'
    + '<button type="button" class="lado-btn' + (e.esc === 1 ? (ok ? ' certo' : ' errado') : '') + '" data-a="cm" data-n="1"><b>YOU CAN FILM IT</b><small>would or used to</small></button>'
    + '<button type="button" class="lado-btn' + (e.esc === 0 ? (ok ? ' certo' : ' errado') : '') + '" data-a="cm" data-n="0"><b>NOTHING TO FILM</b><small>only used to</small></button></div>'
    + (ok ? '<p class="aprova" style="text-align:center">Now the whole sentence: “When I was ten, I ' + (x[1] ? 'would ' : 'used to ') + x[0] + '.”</p><div style="text-align:center"><button type="button" class="btn" data-a="cm-prox">Next shot</button></div>' : e.esc >= 0 ? '<p class="recusa" style="text-align:center">Imagine the camera. Is anybody doing anything?</p>' : '') + '</div>';
};

R.umavez = function (c) {
  var e = S.uv, n = e.n, fim = n >= UMAVEZ.length;
  if (fim) return cab(c) + trilha(UMAVEZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SINGLE MOMENTS</small><h2>Past simple, every time. One time kills WOULD.</h2></div></div>';
  var x = UMAVEZ[n], ok = e.esc === 0;
  return cab(c) + trilha(UMAVEZ, n) + '<div class="foco"><div class="pergunta vd ja"><small>THE LAST SUMMER</small><h2>' + x.fr + '</h2></div><div class="versoes duas-v">' + ordem([[x.ok, 0], [x.mau, 1]], n + 2).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="uv" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="uv-prox">Next</button></div>' : e.esc === 1 ? '<p class="recusa" style="text-align:center">How many times did it happen? If once, WOULD is gone.</p>' : '') + '</div>';
};

R.ouve = function (c) {
  var e = S.ou;
  return cab(c) + '<div class="ouve-g">' + OUVE.map(function (x, i) {
    var ouviu = (S.ouviu || {})[x.au], esc = e.esc[i], ok = esc === x.k;
    return '<div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>LINE ' + (i + 1) + '</b></div>'
      + (ouviu ? '<div class="tres-b">' + [['rep', 'REPEATED'], ['uma', 'ONCE']].map(function (o) { return '<button type="button" class="pilula grande-p' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ou" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' : '<p class="transcricao vazia">Play it first.</p>')
      + (ok ? '<p class="aprova">' + x.w + '</p>' + transcricao(x.au, TR[x.au], 'ou' + i) : esc ? '<p class="recusa">Play it again. More than once, or exactly once?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.depois = function (c) {
  var e = S.dp, n = Math.min(e.n, DEPOIS.length - 1), x = DEPOIS[n], aberto = e.viu[n];
  return cab(c) + trilha(DEPOIS, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="antes-depois"><div class="ad antes"><small>THEN</small><b>' + x.fr + '</b></div><div class="ad depois' + (aberto ? ' aberto' : '') + '"><small>NOW</small><b>' + (aberto ? x.k.charAt(0).toUpperCase() + x.k.slice(1) + '.' : '?') + '</b></div></div>'
    + (aberto ? '<p class="aprova">' + x.w + '</p>' : '<div><button type="button" class="chip" data-a="dp-v">Open what replaced it</button></div>') + '</div>'
    + '<div class="lado-l">' + fala('dp' + n, [x.fr.replace('.', ', but now …')], ['would', 'but now', 'used to']) + mostra('dp' + n, x.fr.replace('.', '') + ', but ' + x.k + '.', 1)
    + (n < DEPOIS.length - 1 ? '<div><button type="button" class="btn" data-a="dp-prox">Next habit</button></div>' : '<p class="aprova">Five endings, and each one left something in its place.</p>') + '</div></div>';
};

R.melhor = function (c) {
  var e = S.me, n = Math.min(e.n, MELHOR.length - 1), x = MELHOR[n];
  return cab(c) + trilha(MELHOR, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('lago') + ')"><span>YOUR BEST SUMMER</span></div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>QUESTION ' + (n + 1) + ' OF 6</small><h2>' + x.q + '</h2></div>' + fala('me' + n, [x.ini], ['would', 'used to', 'one day', 'that summer']) + mostra('me' + n, x.ex, 1)
    + '<p class="dica-aluno">Your teacher asks: ' + x.seg + '</p>'
    + (n < MELHOR.length - 1 ? '<div><button type="button" class="btn" data-a="me-prox">Next question</button></div>' : '<p class="aprova">A whole summer: the period, the habits, the states and the one day.</p>') + '</div></div>';
};

R.moldes = function (c) {
  var e = S.mo, n = Math.min(e.n, MOLDES.length - 1), x = MOLDES[n];
  return cab(c) + trilha(MOLDES, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="moldes">' + MOLDES.map(function (m, i) { return '<div class="molde' + (i === n ? ' agora' : i < e.n ? ' feito' : '') + '"><small>' + (i + 1) + ' · ' + m.nm + '</small><b>' + m.d + '</b></div>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>SHAPE ' + (n + 1) + ' · ' + x.nm + '</small><b>' + x.d + '</b></div>' + fala('mo' + n, [x.d], ['would', 'used to', 'that year', 'one last time']) + mostra('mo' + n, x.ex, 1)
    + (n < MOLDES.length - 1 ? '<div><button type="button" class="btn" data-a="mo-prox">Next shape</button></div>' : '<p class="aprova">Five shapes. The last two close a story.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'When I was …, every summer we would …\nWe would …\nWe used to …\nThat year, …', 'Your summer',
    ['When I was ', 'every summer ', 'we would ', 'we used to ', 'That year, ', 'one last time'], ['THE LAST REEL', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now your summer, with the period first.' : 'The period, two habits, one state, and the year it stopped.'])
    + '<div class="lado-fim">' + pelicula(['acao', 'acao', 'estado', 'acao'], -1) + '<div class="grande vd"><span>When I was ten, we <u>would</u> swim</span><span>we <u>used to</u> have a house</span><span>that summer, she <u>sold</u> it</span></div>'
    + mostra('fim', 'When I was ten, every summer we would go to my grandmother’s house.<br>We would swim before breakfast.<br>We used to have a little boat.<br>That year, she sold the house.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.ro = function (b, n, v) { S.ro.esc = v; };
TOQUES['ro-prox'] = function () { S.ro = { n: S.ro.n + 1, esc: '' }; };
TOQUES.cm = function (b, n) { S.cm.esc = n; };
TOQUES['cm-prox'] = function () { S.cm = { n: S.cm.n + 1, esc: -1 }; };
TOQUES.uv = function (b, n) { S.uv.esc = n; };
TOQUES['uv-prox'] = function () { S.uv = { n: S.uv.n + 1, esc: -1 }; };
TOQUES.ou = function (b, n, v) { S.ou.esc[n] = v; };
TOQUES['dp-v'] = function () { S.dp.viu[Math.min(S.dp.n, DEPOIS.length - 1)] = 1; };
TOQUES['dp-prox'] = function () { S.dp.n++; };
TOQUES['me-prox'] = function () { S.me.n++; };
TOQUES['mo-prox'] = function () { S.mo.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de rolo.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four summers. Find the rule yourself.',
  exemplos: [
    'Every summer we <b>would</b> <u>swim</u> in the lake.',
    'Grandma <b>would</b> <u>bake</u> a cake on Sundays.',
    'My uncle always <b>would</b> <u>lose</u> at cards.',
    'We <b>used to</b> <u>have</u> a small boat.'
  ],
  pergunta: 'We say would + verb for …',
  opcoes: ['things we did again and again', 'something that happened one time', 'how a place was, with no action'], c: 0,
  nao: 'Not that one. Read the four lit verbs again: could you film them every summer?',
  regra: '<b>would + verb</b> for a habit in the past, after you say the period: Every summer we <b>would swim</b>. For a state, use <b>used to</b>: We <b>used to have</b> a boat. For one time, the past: She <b>sold</b> the house that spring.',
  uso: { p: 'Your turn. One thing you did every summer when you were a kid.', molde: ['Every summer I would …', 'We used to have …'], ex: 'Every summer I would ride my bike to the river. We used to have a dog.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
