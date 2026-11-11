/* ============================================================
   THE OFFICE MYSTERY · THE PROOF METER · LIVE CLASS  06/10/2026
   Main series B1 · dedução no passado: must have / might have /
   can't have + particípio. O grau não é gramática, é prova: quanto
   eu tenho? Erros: "must took", "must have went", "mustn't have" no
   lugar de "can't have", "couldn't" (habilidade) × "can't have"
   (dedução).
   O MUNDO (da aula velha): um protótipo sumiu de uma mesa durante a
   noite; três pessoas ficaram até tarde (Arthur, Elena, Marcus); o
   registro da porta, a mancha de chá verde ainda molhada às 11, a
   alergia do Marcus, a garagem às 9:40. Três gravações mantidas
   (arthur, elena, marcus), conferidas no faster-whisper em 06/10: a
   voz usa contrações (didn't, can't), e a transcrição segue a voz.
   A CARA: o MEDIDOR DE PROVA — um ponteiro em meia-lua com três
   faixas (CAN'T HAVE vermelho · MIGHT HAVE âmbar · MUST HAVE verde) —
   e a PLANTA DO ESCRITÓRIO em azul de projeto, com sete marcadores
   amarelos de perícia que mudam de cor quando a dedução sai.
   Fila: FILA-LIVE-386.md · 106.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'mesa' },
  { k: 'mesa', est: 'o', min: 7, img: 'mesa', rot: 'I · The Desk at Seven', t: 'The prototype was on this desk last night. This morning it’s gone.', p: 'Three questions. Answer out loud. Nothing gets corrected yet.' },
  { k: 'log', est: 'f', min: 6, img: 'porta', rot: 'II · The Door Log', t: 'The badge reader at the front door. Facts, not stories.', p: 'Read the claim out loud. Is it in the log, or not?' },
  { k: 'gx', est: 'f', min: 4, img: 'mesa', rot: 'III · The Clues, Lit Up', t: 'Two detectives, one wet stain. Some words are lit.', p: 'Read it together. Tap the lit words: why this form? Then say your own.' },
  { k: 'forma', est: 'f', min: 6, img: 'porta', rot: 'IV · Now, or Last Night?', t: 'One shape for now, one for last night. The modal never moves.', p: 'Read the situation. Choose the sentence about last night. Then say why the other one is wrong.' },
  { k: 'medidor', est: 'o', min: 7, img: 'copa', rot: 'V · How Much Proof?', t: 'Three degrees. The only question is how much proof you have.', p: 'Read the proof. Set the meter. Then say the sentence.' },
  { k: 'vozes', est: 'l', min: 7, img: 'copa', rot: 'VI · Three Voices', t: 'Three alibis. Nobody is telling the whole truth.', p: 'Play all three. Then decide: did they say it, or not?' },
  { k: 'planta', est: 'o', min: 7, img: 'mancha', rot: 'VII · Seven Markers', t: 'Seven yellow markers on the floor plan. Each one is a piece of proof.', p: 'Open a marker. Set the meter. Say the deduction out loud.' },
  { k: 'couldnt', est: 'f', min: 6, extra: 1, img: 'garagem', rot: 'VIII · Couldn’t, or Can’t Have?', t: 'COULDN’T is about ability. CAN’T HAVE is about what happened.', p: 'Read what you mean. Choose the shape that says it.' },
  { k: 'chefe', est: 'o', min: 7, extra: 1, img: 'garagem', rot: 'IX · The Report to the Boss', t: 'The boss wasn’t here last night and has read nothing. Present the case.', p: 'Cover one point out loud. Your teacher, the boss, pushes back. Defend it.' },
  { k: 'noite', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'X · Your Own Last Night', t: 'Now your night, and deductions about other people.', p: 'Answer the question. Then make the deduction with the degree on the card.' },
  { k: 'fim', est: 'w', min: 6, img: 'mancha', rot: 'XI · Case Closed', t: 'Your first sentence about last night comes back.', p: 'Write the case in four sentences, all three degrees. It goes to your My notes.' }
];

var TR = {
  'arthur.mp3': 'I left at a quarter past eight. I always leave at a quarter past eight. I went straight to the gym on Lima Street. I was on the treadmill by half past. No, I didn’t go back. Why would I go back? It was raining when I got to my car. I remember because I had no umbrella. And look, I don’t even drink tea. Ask anybody here.',
  'elena.mp3': 'I stayed until about nine, maybe five past. I made a tea around half past eight, green tea, I always do, and I took it to my own desk. I never went into his office. I have no reason to. When I came out, it was dry. The rain only started later, around ten. I locked my drawer and I left. That’s all.',
  'marcus.mp3': 'I was there until half past ten. On my own, finishing a deck. I didn’t go near his office, I swear. But someone came in, around twenty to ten. I heard the garage door. I thought it was security, so I didn’t look up. And I can’t drink tea. It makes me ill. I can’t even be near it.'
};

var GRAU = { x: { t: 'CAN’T HAVE', s: 'the proof killed it', c: '#ff6e6e', a: -58 }, m: { t: 'MIGHT HAVE', s: 'the proof allows it', c: '#f0b866', a: 0 }, v: { t: 'MUST HAVE', s: 'nothing else is left', c: '#8fd9a2', a: 58 } };

var ABRE = [
  { q: 'Look at the empty desk. What happened in this room last night?', fup: 'And what else might have happened?', st: ['Somebody must have …', 'Somebody might have …'], ex: 'Somebody must have taken it after everybody left.' },
  { q: 'Did anything disappear at your home or work recently? What must have happened to it?', fup: 'Did you ever find it?', st: ['My … disappeared. Somebody must have …', 'I must have left it …'], ex: 'My keys disappeared. I must have left them at the gym.' },
  { q: 'Three people stayed late. Who do you talk to first, and why?', fup: 'What would you ask them?', st: ['I’d talk to … first, because …', 'The last one to leave …'], ex: 'I’d talk to the last one to leave.' }
];

var LOG = [['7:40 PM', 'The cleaner sees the prototype on the desk.'], ['8:15 PM', 'ARTHUR badges out, front door.'], ['9:02 PM', 'ELENA badges out, front door.'], ['10:30 PM', 'MARCUS badges out, front door.'], ['11:00 PM', 'Security finds a wet green tea stain on a document.']];
var CLAIMS = [
  { n: 'Arthur was out by twenty after eight.', k: 'sim', por: 'The log says 8:15 PM.', l: 1 },
  { n: 'Elena left about an hour after Arthur.', k: 'sim', por: '9:02 PM: forty-seven minutes later.', l: 2 },
  { n: 'Marcus stayed the longest.', k: 'sim', por: '10:30 PM. Over two hours alone.', l: 3 },
  { n: 'Arthur never came back.', k: 'nao', por: 'Not in the log. The log only knows the FRONT door.', l: 1 },
  { n: 'Only three people were in the building.', k: 'nao', por: 'The log knows who used this door, not who was inside.', l: -1 }
];

var FORMA = [
  { sit: 'Arthur badged out at 8:15, and the log agrees.', ops: ['He must have left before nine.', 'He must left before nine.'], por: '<b>must have</b> + past participle. MUST never moves.' },
  { sit: 'Elena drinks green tea every morning.', ops: ['It might have been her cup.', 'It might be her cup last night.'], por: 'MIGHT BE is about now. Last night: <b>might have been</b>.' },
  { sit: 'Marcus is allergic to tea.', ops: ['It can’t have been Marcus.', 'It mustn’t have been Marcus.'], por: 'Impossible: the negative comes from CAN, <b>can’t have</b>.' },
  { sit: 'Somebody took the prototype. You’re sure.', ops: ['Somebody must have taken it.', 'Somebody must have took it.'], por: 'After HAVE, the past participle: take · took · <b>taken</b>.' }
];

var CARTAS = [
  { p: 'Her coat is soaking wet, and she’s holding a closed umbrella.', g: 'v', diz: 'It must have been raining.' },
  { p: 'He had no key, and the door was locked from the inside.', g: 'x', diz: 'He can’t have gone in that way.' },
  { p: 'The window was open. Anybody could reach it from the outside stairs.', g: 'm', diz: 'Somebody might have come in through the window.' },
  { p: 'She was on a plane to Denver all evening.', g: 'x', diz: 'She can’t have been at the party.' },
  { p: 'He knows the password, and he was in the building.', g: 'm', diz: 'He might have opened the file.' },
  { p: 'The cake is gone, the dog is asleep, and there are crumbs on its nose.', g: 'v', diz: 'The dog must have eaten it.' }
];

var VOZES = [['arthur.mp3', 'ARTHUR · THE MANAGER'], ['elena.mp3', 'ELENA · THE DESIGNER'], ['marcus.mp3', 'MARCUS · THE INTERN']];
var DITOS = [
  { n: 'Arthur says he went straight to the gym.', k: 'sim', por: 'And he gives a street name. Rehearsed people give details.' },
  { n: 'Arthur says it was raining when he got to his car.', k: 'sim', por: 'At about 8:15. Remember that.' },
  { n: 'Elena says the rain only started around ten.', k: 'sim', por: 'Two people, two different skies. One of them is wrong.' },
  { n: 'Marcus says he heard the garage door.', k: 'sim', por: 'Around 9:40. He thought it was security.' },
  { n: 'Marcus says he saw who came in.', k: 'nao', por: 'He HEARD it. He didn’t look up.' },
  { n: 'Arthur mentions tea before anybody asks him.', k: 'sim', por: 'Nobody said the word “tea” to him.' }
];

var SALAS = [['OFFICE', 4, 6, 40, 44], ['KITCHEN', 48, 6, 24, 44], ['DESKS', 4, 54, 68, 40], ['GARAGE', 76, 6, 20, 88]];
var MARCAS = [
  { x: 14, y: 30, p: 'Medical file: Marcus is allergic to tea. It makes him ill within minutes.', g: 'x', diz: 'It can’t have been Marcus.', por: 'An allergy isn’t a preference. That door is shut.' },
  { x: 58, y: 22, p: 'Kitchen camera: Arthur only ever takes black espresso.', g: 'm', diz: 'It might still have been Arthur.', por: 'Not liking tea isn’t being unable to touch it. The door stays open.' },
  { x: 62, y: 40, p: 'Elena drinks green tea every morning, and she made one at 8:30 PM.', g: 'm', diz: 'It might have been Elena.', por: 'She FITS. Fitting isn’t proof.' },
  { x: 30, y: 20, p: 'The stain was still wet at 11 PM. Tea dries on paper in about two hours.', g: 'v', diz: 'It must have been made after nine.', por: 'Wet at eleven, two hours to dry: after nine.' },
  { x: 30, y: 72, p: 'Elena left the building at 9:02 PM, and the stain was made after nine, in a locked office.', g: 'x', diz: 'She can’t have made it.', por: 'Two minutes, and a locked door.' },
  { x: 86, y: 40, p: 'Garage log, 9:40 PM: one badge in. It’s Arthur’s. Marcus heard the garage door at that time.', g: 'v', diz: 'It must have been Arthur.', por: 'Every other door is shut.' },
  { x: 22, y: 40, p: 'Arthur talked about tea before anybody mentioned it.', g: 'v', diz: 'He must have known about the stain.', por: 'The only way to know was to be there.' }
];

var COULD = [
  { sit: 'The gym closes at eight. You mean: it’s impossible that he went.', ops: ['He can’t have gone to the gym.', 'He couldn’t go to the gym.'], por: 'A deduction about the night: <b>can’t have</b>.' },
  { sit: 'Marcus had no badge for the top floor. You mean: he wasn’t able to get in.', ops: ['He couldn’t get in.', 'He can’t have got in.'], por: 'His ability: <b>couldn’t</b>.' },
  { sit: 'Elena was on a train at nine. You’re deducing about the stain.', ops: ['She can’t have made it.', 'She couldn’t make it.'], por: '“She couldn’t make it” sounds like she tried and failed.' }
];

var PONTOS = [
  { p: 'What was taken, and when', push: 'How do you know it was still there at 7:40?' },
  { p: 'Who was in the building', push: 'The log only shows the front door. Couldn’t somebody else have been inside?' },
  { p: 'What each suspect told you', push: 'Why don’t you believe Arthur? He has an alibi.' },
  { p: 'The two people you ruled out', push: 'Elena drinks green tea. She must have done it, right?' },
  { p: 'The stain, and why it matters', push: 'Maybe the stain is old. Can you prove it isn’t?' },
  { p: 'Who did it, and how you know', push: 'Arthur is my best manager. You’d better be sure.' }
];

var NOITE = [
  { q: 'What time did you get home yesterday?', entao: 'A friend got home at 3 AM.', g: 'v', ok: 'They must have had a long night.' },
  { q: 'What was the last thing you ate last night?', entao: 'A friend ate nothing all day.', g: 'x', ok: 'They can’t have felt very good.' },
  { q: 'Did anybody call you, and you didn’t answer?', entao: 'Say what the caller thought.', g: 'm', ok: 'They might have thought I was angry.' },
  { q: 'What time did you put your phone down last night?', entao: 'Somebody answered a message at 4 AM.', g: 'v', ok: 'They must have been awake all night.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { n: 0, foi: {} }, lg: { n: 0, esc: '' }, fo: { n: 0, esc: -1 }, me: { n: 0, esc: '' }, vz: { n: 0, esc: '' },
  pl: { sel: -1, g: {} }, co: { n: 0, esc: -1 }, ch: { n: 0, push: 0 }, no: { n: 0, foi: 0 } };

/* o medidor de prova: meia-lua, três faixas, um ponteiro */
function medidor(g, mini) {
  var a = g ? GRAU[g].a : -90, cor = g ? GRAU[g].c : '#5b6670';
  return '<div class="medidor' + (mini ? ' mini' : '') + '"><svg viewBox="0 0 240 140" aria-hidden="true">'
    + '<path class="f-x" d="M30 120 A90 90 0 0 1 75 42"/><path class="f-m" d="M82 38 A90 90 0 0 1 158 38"/><path class="f-v" d="M165 42 A90 90 0 0 1 210 120"/>'
    + '<g class="ponteiro" style="transform:rotate(' + a + 'deg)"><path d="M120 120 L120 44" stroke="' + cor + '"/><circle cx="120" cy="120" r="9" fill="' + cor + '"/></g></svg>'
    + '<div class="m-rot">' + ['x', 'm', 'v'].map(function (k) { return '<span class="' + (k === g ? 'on' : '') + '" style="--gc:' + GRAU[k].c + '">' + GRAU[k].t + '</span>'; }).join('') + '</div></div>';
}
function botoesGrau(acao, esc, certo) {
  return '<div class="graus">' + ['x', 'm', 'v'].map(function (k) { return '<button type="button" class="grau-b' + (esc === k ? (k === certo ? ' certo' : ' errado') : '') + '" style="--gc:' + GRAU[k].c + '" data-a="' + acao + '" data-v="' + k + '"><b>' + GRAU[k].t + '</b><small>' + GRAU[k].s + '</small></button>'; }).join('') + '</div>';
}
function planta(sel, g, mini) {
  return '<div class="planta' + (mini ? ' mini' : '') + '">' + SALAS.map(function (s) { return '<span class="sala" style="left:' + s[1] + '%;top:' + s[2] + '%;width:' + s[3] + '%;height:' + s[4] + '%"><small>' + s[0] + '</small></span>'; }).join('')
    + '<span class="retangulo" style="left:24%;top:24%"></span>'
    + MARCAS.map(function (m, i) { var feito = g && g[i] === m.g; return '<button type="button" class="marcador' + (sel === i ? ' on' : '') + (feito ? ' feita' : '') + '" style="left:' + m.x + '%;top:' + m.y + '%' + (feito ? ';--gc:' + GRAU[m.g].c : '') + '" data-a="pl" data-n="' + i + '"' + (mini ? ' tabindex="-1"' : '') + '>' + (i + 1) + '</button>'; }).join('') + '</div>';
}
/* duas frases, a certa sempre na posição 0 */
function duas(chave, lista, est, msg, fecho) {
  var n = est.n, fim = n >= lista.length;
  if (fim) return trilha(lista, n) + '<div class="foco"><div class="pergunta vd"><small>' + lista.length + ' OF ' + lista.length + '</small><h2>' + fecho + '</h2></div></div>';
  var x = lista[n], ok = est.esc === 0;
  return trilha(lista, n) + '<div class="foco"><div class="pede vd centro"><small>THE SITUATION</small><b>' + x.sit + '</b></div><div class="dois-f">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="versao grande-f' + (est.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + chave + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.por + '</p><div style="text-align:center"><button type="button" class="btn" data-a="' + chave + '-prox">Next</button></div>' : est.esc > 0 ? '<p class="recusa" style="text-align:center">' + msg + '</p>' : '<p class="dica-aluno" style="text-align:center">Choose. Then say why the other one is wrong.</p>') + '</div>';
}
/* sim/não com um porquê */
function simNao(chave, lista, est, rot, msg) {
  var n = est.n, x = lista[Math.min(n, lista.length - 1)], ok = est.esc === x.k;
  if (n >= lista.length) return '';
  return '<div class="claim vd"><small>CLAIM ' + (n + 1) + ' OF ' + lista.length + '</small><p class="cl-t">“' + x.n + '”</p><div class="dois-f">' + [['sim', rot[0]], ['nao', rot[1]]].map(function (o) { return '<button type="button" class="versao grande-v' + (est.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="' + chave + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">' + x.por + '</p><button type="button" class="btn" data-a="' + chave + '-prox">Next claim</button>' : est.esc ? '<p class="recusa">' + msg + '</p>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · ONE DESK · THREE SUSPECTS</span><h1>The Office <b>Mystery</b></h1>'
    + '<p class="sub">At 7:40 PM the prototype was on the desk. At 7 AM there was only a clean rectangle in the dust. Somebody <b>must have</b> taken it.</p>'
    + '<div class="chipsx"><span class="pilula">must have + gone</span><span class="pilula">might have + been</span><span class="pilula">can’t have + taken</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the case</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + planta(-1, {}, 1) + medidor('v', 1) + '</div></div>';
};

R.mesa = function (c) { return sequencia(c, ABRE, S.ab, 'ab', 'Your sentence about last night is in the file. It comes back when the case is closed.') + '<p class="so-prof dica-aluno" style="text-align:center">Write the first sentence about last night word for word.</p>'; };

R.log = function (c) {
  var e = S.lg, x = CLAIMS[Math.min(e.n, CLAIMS.length - 1)], fim = e.n >= CLAIMS.length, aceso = !fim && e.esc === x.k ? x.l : -2;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="registro vd"><small>FRONT DOOR · BADGE READER</small>' + LOG.map(function (l, i) { return '<div class="r-linha' + (i === aceso ? ' on' : '') + '"><b>' + l[0] + '</b><span>' + l[1] + '</span></div>'; }).join('') + '</div></div>'
    + '<div class="lado-l">' + trilha(CLAIMS, e.n) + (fim ? '<div class="pergunta vd"><small>FIVE CLAIMS</small><h2>A log doesn’t tell a story. It gives times, and you build the story. What else can’t the log tell us?</h2></div>' : simNao('lg', CLAIMS, e, ['IN THE LOG', 'NOT IN THE LOG'], 'Read the log again. Is that exactly what it says?')) + '</div></div>';
};

R.forma = function (c) { return cab(c) + duas('fo', FORMA, S.fo, 'It’s about last night: must / might / can’t + <b>have</b> + been, gone, taken.', 'Modal + have + past participle. Every time. Now one about your own last night.'); };

R.medidor = function (c) {
  var e = S.me, n = e.n, fim = n >= CARTAS.length;
  if (fim) return cab(c) + trilha(CARTAS, n) + '<div class="foco">' + medidor('v') + '<div class="pergunta vd"><small>SIX CARDS</small><h2>MUST isn’t a strong MIGHT. It’s what’s left when every other door is shut. Change one card so its degree changes.</h2></div></div>';
  var x = CARTAS[n], ok = e.esc === x.g;
  return cab(c) + trilha(CARTAS, n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>THE PROOF · CARD ' + (n + 1) + ' OF 6</small><b>' + x.p + '</b></div>' + medidor(e.esc) + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">SET THE METER</h5>' + botoesGrau('me', e.esc, x.g)
    + (ok ? '<div class="balao vd ok-b"><small>SAY IT</small><p>' + x.diz + '</p></div><div><button type="button" class="btn" data-a="me-prox">Next card</button></div>' : e.esc ? '<p class="recusa">Does the proof shut the door, leave it open, or shut every OTHER door?</p>' : '<p class="dica-aluno">How much proof is there?</p>') + '</div></div>';
};

R.vozes = function (c) {
  var todos = VOZES.every(function (v) { return (S.ouviu || {})[v[0]]; }), fim = S.vz.n >= DITOS.length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + VOZES.map(function (v) { return '<div class="ouve-c vd"><div class="toca-linha">' + tocar(v[0]) + '<b>' + v[1] + '</b></div>' + transcricao(v[0], TR[v[0]]) + '</div>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (!todos ? '<div class="pergunta vd ja"><h2>Three people stayed late. Whose alibi do you trust most? Listen first.</h2></div><p class="dica-aluno">Play all three voices.</p>'
      : fim ? '<div class="pergunta vd"><small>SIX CLAIMS</small><h2>Two skies at the same hour, and a man answering about tea before anybody asked. Whose voice sounds rehearsed?</h2></div>' + fala('vz', ['Arthur might have …', 'It can’t have been raining at …', 'He must have …'], ['rehearsed', 'rain', 'tea'])
        : trilha(DITOS, S.vz.n) + simNao('vz', DITOS, S.vz, ['THEY SAID IT', 'THEY DIDN’T']
          , 'Play it again. Listen for that exact detail.')) + '</div></div>';
};

R.planta = function (c) {
  var e = S.pl, feitas = MARCAS.filter(function (m, i) { return e.g[i] === m.g; }).length;
  var lado;
  if (feitas >= MARCAS.length && e.sel < 0) lado = '<div class="pergunta vd"><small>SEVEN MARKERS · CASE CLOSED</small><h2>The case closed itself while you talked. Who was it, and how do you know? Three sentences, three degrees.</h2></div>' + medidor('v', 1);
  else if (e.sel < 0) lado = '<div class="pergunta vd ja"><small>' + feitas + ' OF 7 MARKERS</small><h2>Open any marker on the plan.</h2></div>' + medidor('', 1);
  else { var m = MARCAS[e.sel], ok = e.g[e.sel] === m.g;
    lado = '<div class="pede vd"><small>MARKER ' + (e.sel + 1) + ' · THE PROOF</small><b>' + m.p + '</b></div>' + botoesGrau('pl-g', e.g[e.sel] || '', m.g)
      + (ok ? '<div class="balao vd ok-b"><small>SAY IT · ' + GRAU[m.g].t + '</small><p>' + m.diz + '</p></div><p class="aprova">' + m.por + '</p>' : e.g[e.sel] ? '<p class="recusa">Look at the proof again. Does it shut the door, leave it open, or leave nothing else?</p>' : ''); }
  return cab(c) + '<div class="mesa-c planta-m"><div class="lado-l">' + planta(e.sel, e.g) + '<p class="pista">' + feitas + ' of 7 deductions · the clean rectangle is where the prototype was.</p></div><div class="lado-l">' + lado + '</div></div>';
};

R.couldnt = function (c) { return cab(c) + duas('co', COULD, S.co, 'Are you talking about what they were able to do, or about what happened?', 'One is about ability. The other is about the night. Now one of each about your own week.'); };

R.chefe = function (c) {
  var e = S.ch, n = Math.min(e.n, PONTOS.length - 1), fim = e.n >= PONTOS.length, x = PONTOS[n];
  var lista = '<div class="pontos">' + PONTOS.map(function (p, i) { return '<span class="ponto' + (i < e.n ? ' feito' : i === e.n ? ' on' : '') + '"><b>' + (i + 1) + '</b>' + p.p + '</span>'; }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + lista + '</div><div class="lado-l"><div class="pergunta vd"><small>THE BOSS IS CONVINCED</small><h2>You told the whole case in order, and you guessed at nothing. Now all of it again, in ninety seconds.</h2></div></div></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + lista + '</div><div class="lado-l"><div class="pergunta vd ja"><small>POINT ' + (n + 1) + ' OF 6 · SAY IT</small><h2>' + x.p + '</h2></div>'
    + (e.push ? '<div class="balao vd chefe-b"><small>THE BOSS PUSHES BACK</small><p>“' + x.push + '”</p></div><div><button type="button" class="btn" data-a="ch-prox">Next point</button></div>' + fala('ch' + n, ['It can’t have been …, because …', 'It might have …, but …', 'It must have …, because …'], [])
      : '<div><button type="button" class="btn so-prof" data-a="ch-push">Point covered · push back</button></div><p class="dica-aluno">Tell the boss. Out loud.</p>')
    + '<p class="so-prof dica-aluno">Let wrong forms pass here. Note them; feedback at the end.</p></div></div>';
};

R.noite = function (c) {
  var e = S.no, n = Math.min(e.n, NOITE.length - 1), fim = e.n >= NOITE.length, x = NOITE[n];
  if (fim) return cab(c) + trilha(NOITE, e.n) + '<div class="foco"><div class="pergunta vd"><small>FOUR NIGHTS</small><h2>Your own night, and four deductions about somebody else’s. Now two about your teacher’s last night, at two degrees.</h2></div></div>';
  return cab(c) + trilha(NOITE, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd' + (e.foi ? ' ja' : '') + '"><small>YOUR NIGHT · ' + (n + 1) + ' OF 4</small><h2>' + x.q + '</h2></div>' + (e.foi ? '' : fala('no' + n, ['I got home at …', 'The last thing I ate was …'], []) + '<div><button type="button" class="btn so-prof" data-a="no-foi">Answered · show the card</button></div>') + (e.foi ? medidor(x.g, 1) : '') + '</div>'
    + '<div class="lado-l">' + (e.foi ? '<div class="carta-g vd" style="--gc:' + GRAU[x.g].c + '"><small>THE CARD · ' + GRAU[x.g].t + '</small><b>' + x.entao + '</b></div>' + fala('nd' + n, ['They ' + GRAU[x.g].t.toLowerCase() + ' …'], []) + mostra('no' + n, x.ok, 1) + '<div><button type="button" class="btn" data-a="no-prox">Next</button></div>' : '<p class="dica-aluno">Answer first. The deduction comes after.</p>') + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'It can’t have been …, because …\nIt might have been …, but …\nIt must have been …, because …', 'The case',
    ['must have', 'might have', 'can’t have', 'been', 'taken', 'gone', 'made'], ['THE CASE IN FOUR SENTENCES', 'Who it can’t have been, who it might have been, and who it must have been. Then your sentence from scene I, fixed.'])
    + '<div class="lado-fim">' + medidor('v', 1)
    + '<div class="grande vd"><span><u>must have</u> · nothing else is left</span><span><u>might have</u> · the proof allows it</span><span><u>can’t have</u> · the proof killed it</span><span>not <s>must took</s>, not <s>mustn’t have</s></span></div>'
    + mostra('fim', 'It can’t have been Marcus, because he can’t be near tea.<br>It might have been Elena, but she left at 9:02.<br>It must have been Arthur, because his badge opened the garage at 9:40.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.lg = function (b, n, v) { S.lg.esc = v; };
TOQUES['lg-prox'] = function () { S.lg = { n: S.lg.n + 1, esc: '' }; };
TOQUES.fo = function (b, n) { S.fo.esc = n; };
TOQUES['fo-prox'] = function () { S.fo = { n: S.fo.n + 1, esc: -1 }; };
TOQUES.me = function (b, n, v) { S.me.esc = v; };
TOQUES['me-prox'] = function () { S.me = { n: S.me.n + 1, esc: '' }; };
TOQUES.vz = function (b, n, v) { S.vz.esc = v; };
TOQUES['vz-prox'] = function () { S.vz = { n: S.vz.n + 1, esc: '' }; };
TOQUES.pl = function (b, n) { S.pl.sel = n; };
TOQUES['pl-g'] = function (b, n, v) { S.pl.g[S.pl.sel] = v; };
TOQUES.co = function (b, n) { S.co.esc = n; };
TOQUES['co-prox'] = function () { S.co = { n: S.co.n + 1, esc: -1 }; };
TOQUES['ch-push'] = function () { S.ch.push = 1; };
TOQUES['ch-prox'] = function () { S.ch = { n: S.ch.n + 1, push: 0 }; };
TOQUES['no-foi'] = function () { S.no.foi = 1; };
TOQUES['no-prox'] = function () { S.no = { n: S.no.n + 1, foi: 0 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de forma.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'The empty desk. Tap the lit words.',
  falas: [
    { q: 'Partner', f: 'The tea stain was still wet at 11. Someone [[must have been]] at the desk after ten.' },
    { q: 'You', f: 'The door log says Elena left at 9. She [[can’t have made]] that stain.' },
    { q: 'Partner', f: 'And Marcus? He was in the garage at 9:40.' },
    { q: 'You', f: 'He [[might have come]] back by 11. We don’t know yet.' },
    { q: 'Partner', f: 'Then it [[could have been]] Arthur. Let’s ask him.' }
  ],
  porques: [
    'Strong proof: the wet stain. must have + third form.',
    'A clue says no: she was already gone. can’t have + third form.',
    'Not sure: only a maybe. might have + third form.',
    'Another maybe: could have + third form.'
  ],
  nota: 'The degree is the proof: <b>must have</b> (strong proof), <b>might / could have</b> (maybe), <b>can’t have</b> (a clue says no). Then the third form: must have <b>been</b>, can’t have <b>made</b>.',
  uso: { p: 'Your turn. Something is missing at home or at work. Say what happened, with your proof.', molde: ['Someone must have …', 'It can’t have …', 'He might have …'], ex: 'The cake is gone. Someone must have eaten it. My dog can’t have done it: he was outside.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
