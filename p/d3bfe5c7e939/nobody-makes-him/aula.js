/* ============================================================
   NOBODY MAKES HIM · THE TRAINING BOARD · LIVE CLASS  06/10/2026
   Main series A2 · have to / has to · don't have to (livre) · had to (o
   passado de have to E de must) · mustn't (proibido, o oposto de don't
   have to). Erros universais: "I must to", "I don't must", "I haven't
   to", "he have to", "doesn't has to", "musted".
   O MUNDO (da aula velha): um jogador de futebol muito bem pago frita os
   próprios ovos às sete da manhã — ninguém obriga. O vídeo antigo fica
   (Cu3GCm73cw8, três cortes): A 0:00–0:51, B 1:26–2:03, C 2:03–2:48. O
   nome dele não aparece na tela.
   A CARA: o QUADRO TÁTICO de vestiário (verde-escuro, giz, linhas do
   campo) com as tarefas em ímãs; cada uma leva um carimbo: HAVE TO,
   DON'T HAVE TO, HAD TO. Sem áudio.
   Fila: FILA-LIVE-386.md · 058.
   ============================================================ */
var YT = 'Cu3GCm73cw8';
var L = [
  { k: 'capa', est: null, img: 'campo' },
  { k: 'abre', est: 'o', min: 7, img: 'cozinha', rot: 'I · Your Week', t: 'Your week first.', p: 'Pick a card. Any English you have. Nobody is corrected here.' },
  { k: 'videoA', est: 'l', min: 7, img: 'cozinha', rot: 'II · Seven in the Morning', t: 'One of the best-paid football players alive. This is his morning.', p: 'Answer first. Then watch the clip once.' },
  { k: 'quadro', est: 'f', min: 6, img: 'campo', rot: 'III · The Training Board', t: 'His board. Every task gets a stamp.', p: 'Read the task. Say the whole sentence. Then stamp it.' },
  { k: 'forma', est: 'f', min: 6, img: 'campo', rot: 'IV · A Normal Verb', t: 'HAVE TO behaves like a normal verb.', p: 'Say the right one out loud. Then tap it.' },
  { k: 'gx', est: 'f', min: 4, img: 'campo', rot: 'V · Duty, Free, Forbidden', t: 'Three stamps for the training board.', p: 'Look at the three stamps. Tap the stamp for each sentence. Then say three of your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'campo', rot: 'VI · The Rule', t: 'Three stamps, one verb.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'proibido', est: 'f', min: 6, img: 'vazio', rot: 'VII · Free, or Forbidden?', t: 'Two negatives that look alike. They are opposites.', p: 'Read it out loud. A free choice, or not allowed?' },
  { k: 'videoB', est: 'l', min: 7, extra: 1, img: 'vazio', rot: 'VIII · Sixteen, and Alone', t: 'Now go back. A long way back.', p: 'Two short chapters. Answer first, then watch each one once.' },
  { k: 'troca', est: 'o', min: 7, extra: 1, img: 'vazio', rot: 'IX · Would You Swap?', t: 'His board and yours. Would you swap lives?', p: 'Answer about you. Then compare with him. Then answer the next question.' },
  { k: 'fim', est: 'w', min: 6, img: 'cozinha', rot: 'X · Your Board', t: 'Your board for next week.', p: 'Two things you have to do, one you don’t have to, one you had to do as a teenager. It goes to your My notes.' }
];

var ABRE = [
  { k: 'TOMORROW', q: 'What do you have to do first tomorrow?', fup: 'Who decided that?', st: ['Tomorrow I have to …'], ex: 'Tomorrow I have to take my son to school at seven.' },
  { k: 'NOT THIS WEEK', q: 'What don’t you have to do this week, because somebody else does it?', fup: 'Who does it?', st: ['I don’t have to …'], ex: 'I don’t have to cook. My husband cooks this week.' },
  { k: 'AS A TEENAGER', q: 'When you were a teenager, what did you have to do at home?', fup: 'Did you like it?', st: ['I had to …'], ex: 'I had to wash the dishes every night.' }
];
var FORMAS = [{ k: 'have', t: 'HAVE TO / HAS TO' }, { k: 'dont', t: 'DON’T HAVE TO' }, { k: 'had', t: 'HAD TO' }, { k: 'must', t: 'MUST TO / DON’T MUST', erro: 1 }, { k: 'havent', t: 'HAVEN’T TO', erro: 1 }];

var TAREFAS = [
  { t: 'train at 10 AM with the team', q: 'TODAY', k: 'tem', diz: 'He has to train at ten.' },
  { t: 'cook his own eggs', q: 'TODAY', k: 'nao', diz: 'He doesn’t have to cook. He cooks anyway.' },
  { t: 'wash his own clothes', q: 'AT SIXTEEN', k: 'teve', diz: 'He had to wash his own clothes.' },
  { t: 'follow the team’s diet', q: 'TODAY', k: 'tem', diz: 'He has to follow the diet.' },
  { t: 'clean the whole apartment', q: 'AT SIXTEEN', k: 'teve', diz: 'He had to clean it himself.' },
  { t: 'answer fans’ messages', q: 'TODAY', k: 'nao', diz: 'He doesn’t have to answer them.' },
  { t: 'cook dinner every night', q: 'AT SIXTEEN', k: 'teve', diz: 'He had to cook every night.' },
  { t: 'go to bed early before a game', q: 'TODAY', k: 'tem', diz: 'He has to go to bed early.' }
];
var CARIMBOS = [['tem', 'HAVE TO'], ['nao', 'DON’T HAVE TO'], ['teve', 'HAD TO']];

var FORMA = [
  { sit: 'You. Tomorrow. Work.', ok: 'I have to work tomorrow.', mau: 'I must to work tomorrow.', w: 'No TO after must. And have to is the everyday form.' },
  { sit: 'He. Every morning. Train.', ok: 'He has to train every morning.', mau: 'He have to train every morning.', w: 'The S sits on HAS.' },
  { sit: 'You. Sunday. Nothing.', ok: 'I don’t have to do anything on Sunday.', mau: 'I haven’t to do anything on Sunday.', w: 'The negative takes DON’T.' },
  { sit: 'Ask Tom about early mornings.', ok: 'Do you have to wake up early?', mau: 'Have you to wake up early?', w: 'The question takes DO.' },
  { sit: 'She. Cooking. Not necessary.', ok: 'She doesn’t have to cook.', mau: 'She doesn’t has to cook.', w: 'DOESN’T took the S. HAVE goes back to plain.' },
  { sit: 'He. At sixteen. His clothes.', ok: 'He had to wash his own clothes.', mau: 'He musted wash his own clothes.', w: 'MUST has no past. Use HAD TO.' }
];

var FITAS = [['HAVE TO', 'somebody makes you · he has to'], ['DON’T HAVE TO', 'it’s your choice · she doesn’t have to'], ['HAD TO', 'the past, for everybody'], ['MUSTN’T', 'not allowed · a wall, not a choice']];
var ARMAS = [
  ['NO TO', 'I must to work tomorrow.', 'I have to work tomorrow.', 'must has no to. Everyday form: have to.'],
  ['DON’T, NOT HAVEN’T', 'I haven’t to go.', 'I don’t have to go.', 'have to is a normal verb: don’t have to.'],
  ['NOT DON’T MUST', 'I don’t must pay.', 'I don’t have to pay.', 'Not necessary: don’t have to.'],
  ['THE QUESTION', 'Have you to wake up early?', 'Do you have to wake up early?', 'Questions take do / does / did.'],
  ['HE HAS', 'He have to train.', 'He has to train.', 'The S sits on has. With doesn’t: doesn’t have to.'],
  ['THE PAST', 'He musted cook.', 'He had to cook.', 'must has no past: had to.']
];

var PROIB = [
  { f: 'You don’t have to come.', k: 'livre', w: 'No pressure. Come if you want.' },
  { f: 'You mustn’t come.', k: 'proibido', w: 'You are not allowed in.' },
  { f: 'You don’t have to worry.', k: 'livre', w: 'Kind: relax.' },
  { f: 'You mustn’t tell anybody.', k: 'proibido', w: 'It’s a secret.' },
  { f: 'She doesn’t have to drive.', k: 'livre', w: 'Somebody else can.' },
  { f: 'She mustn’t drive.', k: 'proibido', w: 'She lost her license.' }
];

var CAPS_A = [{ k: 'CLIP A', ini: 0, fim: 51, q: 'What is he doing? Does he have to do it? Does anybody make him?', h: 'He’s cooking his own breakfast. He doesn’t have to. He could pay somebody, but he does it himself.' }];
var CAPS_B = [
  { k: 'CLIP B · SIXTEEN', ini: 86, fim: 123, antes: 'He was sixteen and moved to a new city alone. What do you think he had to do?', q: 'How old was he, and where did he go? How long did his father stay?', h: 'He was sixteen, and he moved into an empty apartment. His father stayed two days. Then he had to do everything himself.' },
  { k: 'CLIP C · HAD TO', ini: 123, fim: 168, antes: 'Guess: what did he have to learn in those first weeks?', q: 'What did he have to do himself? What does he say about it now?', h: 'He had to clean his clothes, cook his food and clean the apartment. He says he learned a lot.' }
];

var TROCA = [
  { q: 'What do you have to do every morning?', ele: 'He has to train at ten.', seg: 'Does anybody make you?' },
  { q: 'What don’t you have to do, but you do anyway?', ele: 'He doesn’t have to cook, but he does.', seg: 'Why do you do it?' },
  { q: 'What did you have to do at sixteen?', ele: 'He had to live alone.', seg: 'Who decided that?' },
  { q: 'Do you have to follow a diet or a schedule?', ele: 'He has to follow the team’s diet.', seg: 'Would you like his diet?' },
  { q: 'What do you have to do on weekends?', ele: 'He has to play games on weekends.', seg: 'Would you give up your weekends?' },
  { q: 'So, would you swap lives with him?', ele: 'Millions of dollars, and a very full board.', seg: 'What would you have to give up?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, va: { p: 0 }, quadro: { sel: 0, esc: {} }, forma: { n: 0, esc: '' }, pr: {}, vb: { p: 0, cap: 0, viu: {} }, troca: { n: 0, viu: {} } };

function ima(x, i, est) {
  var c = est ? CARIMBOS.filter(function (k) { return k[0] === x.k; })[0] : null;
  return '<button type="button" class="ima' + (S.quadro.sel === i ? ' on' : '') + (est === x.k ? ' feito c-' + x.k : '') + '" data-a="qd" data-n="' + i + '"><small>' + x.q + '</small><b>' + x.t + '</b>' + (est === x.k ? '<i>' + c[1] + '</i>' : '') + '</button>';
}
function campo() {
  return '<svg class="campo-svg" viewBox="0 0 300 200" aria-hidden="true"><rect x="8" y="8" width="284" height="184" rx="4"/><line x1="150" y1="8" x2="150" y2="192"/><circle cx="150" cy="100" r="28"/><rect x="8" y="58" width="40" height="84"/><rect x="252" y="58" width="40" height="84"/>'
    + '<g class="giz"><circle cx="90" cy="70" r="7"/><circle cx="90" cy="130" r="7"/><path d="M98 70 Q130 50 170 80"/><path d="M98 130 Q140 150 200 110"/><text x="176" y="84">X</text><text x="204" y="114">X</text></g></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE TRAINING BOARD</span><h1>Nobody <b>Makes Him</b></h1>'
    + '<p class="sub">He can pay somebody to do everything. He <b>doesn’t have to</b> cook his own eggs. He cooks them anyway.</p>'
    + '<div class="chipsx"><span class="pilula">have to · has to</span><span class="pilula">don’t have to</span><span class="pilula">had to</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the board</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="lousa">' + campo() + '<div class="imas-capa"><span class="ima-s c-tem">HAVE TO · train at ten</span><span class="ima-s c-nao">DON’T HAVE TO · cook his eggs</span><span class="ima-s c-teve">HAD TO · at sixteen</span></div></div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.videoA = function (c) {
  var e = S.va, passos = '<div class="tres-tempos">' + tempos3(e.p, 'va-p') + '</div>', corpo, k = CAPS_A[0];
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>He earns millions. What do you think he does at seven in the morning?</h2></div>' + fala('va', ['I think he …', 'Maybe somebody …'], ['a cook', 'the gym', 'breakfast']) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="va-p" data-n="1">Watch the clip</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Seven in the morning', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Clip A · 0:00–0:51 · it stops by itself</small></div><div class="lado-video"><div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vaA', k.h, 1) + '<div><button type="button" class="btn" data-a="va-p" data-n="2">After the clip</button></div></div></div>';
  else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>He doesn’t have to. That is the whole point of the hour. And you: what do you do that nobody makes you do?</h2></div>' + fala('vb0', ['I don’t have to …, but I …', 'Nobody makes me …'], []) + mostra('vaB', 'I don’t have to walk to work, but I do. Nobody makes me.', 1) + '</div>';
  return cab(c) + passos + corpo;
};

R.quadro = function (c) {
  var e = S.quadro, x = TAREFAS[e.sel], esc = e.esc[e.sel], ok = esc === x.k, n = 0;
  TAREFAS.forEach(function (t, i) { if (e.esc[i] === t.k) n++; });
  return cab(c) + '<div class="mesa-q"><div class="lousa">' + campo() + '<div class="imas">' + TAREFAS.map(function (t, i) { return ima(t, i, e.esc[i]); }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="sit vd"><small>' + x.q + ' · TASK ' + (e.sel + 1) + ' OF 8</small><b>' + x.t + '</b></div>'
    + (ok ? '<div class="balao vd"><small>THE BOARD</small><p>' + x.diz + '</p></div>' + (n === 8 ? '<p class="aprova">Eight stamps. Now, back then, and the things nobody makes him do.</p>' : '<div><button type="button" class="btn" data-a="qd" data-n="' + ((e.sel + 1) % 8) + '">Next task</button></div>')
      : '<p class="dica-aluno">Say the whole sentence: He has to … / He doesn’t have to … / He had to …</p><div class="carimbos">' + CARIMBOS.map(function (k) { return '<button type="button" class="carimbo-b c-' + k[0] + (esc === k[0] ? ' errado' : '') + '" data-a="qd-v" data-v="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">Look at the time on the task. And does somebody make him?</p>' : '')) + '</div></div>';
};

R.forma = function (c) {
  var e = S.forma, n = e.n, fim = n >= FORMA.length;
  if (fim) return cab(c) + trilha(FORMA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OUT OF SIX</small><h2>HAVE TO behaved like a normal verb every time: do, does, did.</h2></div></div>';
  var x = FORMA[n], ok = e.esc === 'ok';
  return cab(c) + trilha(FORMA, n) + '<div class="foco"><div class="sit vd centro"><small>THE SITUATION</small><b>' + x.sit + '</b></div>'
    + (ok ? '<div class="balao vd"><small>THE BOARD</small><p>' + x.ok + '</p></div><p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="fo-prox">Next</button></div>'
      : '<div class="versoes dois-v">' + ordem([[x.ok, 'ok'], [x.mau, 'mau']], n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="fo" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">Is HAVE TO acting like a normal verb there?</p>' : '')) + '</div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.proibido = function (c) {
  var n = 0; PROIB.forEach(function (x, i) { if (S.pr[i] === x.k) n++; });
  return cab(c) + '<div class="proib">' + PROIB.map(function (x, i) {
    var esc = S.pr[i], ok = esc === x.k;
    return '<div class="q-linha vd' + (ok ? ' feito ' + x.k : '') + '"><p>' + x.f + '</p><div class="tres-b">' + [['livre', 'FREE CHOICE'], ['proibido', 'NOT ALLOWED']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="pr" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' + (ok ? '<p class="aprova">' + x.w + '</p>' : esc ? '<p class="recusa">Read it again. A choice, or a ban?</p>' : '') + '</div>';
  }).join('') + '</div>' + (n === 6 ? '<p class="aprova" style="text-align:center">Don’t have to is freedom. Mustn’t is a wall.</p>' : '');
};

R.videoB = function (c) {
  var e = S.vb, k = CAPS_B[e.cap], passos = '<div class="tres-tempos">' + tempos3(e.p, 'vb-p') + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>' + CAPS_B[0].antes + '</h2></div>' + fala('vb1', ['I think he had to …'], ['cook', 'clean', 'alone']) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vb-p" data-n="1">Watch, chapter by chapter</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, k.k, '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">' + k.k + ' · it stops by itself</small></div><div class="lado-video"><div class="caps">' + CAPS_B.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vb-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
    + (e.cap ? '<div class="pergunta vd"><small>FIRST, GUESS</small><h2>' + k.antes + '</h2></div>' : '') + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vbc' + e.cap, k.h, 1)
    + '<div>' + (e.cap < CAPS_B.length - 1 ? '<button type="button" class="btn" data-a="vb-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vb-p" data-n="2">After the video</button>') + '</div></div></div>';
  else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>He had to do it all at sixteen. Now he doesn’t have to, and he still does. Did you have to learn something like that? When?</h2></div>' + fala('vb2', ['When I was …, I had to …'], []) + mostra('vb2', 'When I was eighteen, I had to cook for myself. I burned everything!', 1) + '</div>';
  return cab(c) + passos + corpo;
};

R.troca = function (c) {
  var e = S.troca, n = e.n, fim = n >= TROCA.length;
  if (fim) return cab(c) + trilha(TROCA, n) + '<div class="foco"><div class="pergunta vd"><small>TWO BOARDS</small><h2>Two boards, side by side. Nobody makes you choose.</h2></div></div>';
  var x = TROCA[n], viu = e.viu[n];
  return cab(c) + trilha(TROCA, n) + '<div class="duas-lousas"><div class="lousa mini vd-l"><small>YOU</small><b>' + x.q + '</b>' + fala('tr' + n, ['I have to …', 'I don’t have to …', 'I had to …'], []) + '</div>'
    + '<div class="lousa mini vd-l ele"><small>HIM</small>' + (viu ? '<b>' + x.ele + '</b><p class="seg">' + x.seg + '</p><div><button type="button" class="btn" data-a="tc-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="tc-viu">Answered · show his board</button></div>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Next week I have to …\nI don’t have to …\nAt sixteen, I had to …', 'Your board',
    ['Next week I have to ', 'I don’t have to ', 'At sixteen, I had to ', 'Nobody makes me '], ['YOUR BOARD', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now your board for next week.' : 'Two things you have to do, one you don’t have to, one you had to do as a teenager.'])
    + '<div class="lado-fim"><div class="carimbos mini">' + CARIMBOS.map(function (k) { return '<span class="carimbo-b c-' + k[0] + '">' + k[1] + '</span>'; }).join('') + '</div><div class="grande vd"><span><u>have to</u>: somebody makes you</span><span><u>don’t have to</u>: your choice</span><span><u>had to</u>: the past</span><span><u>mustn’t</u>: not allowed</span></div>'
    + mostra('fim', 'Next week I have to finish a big report.<br>I have to take my car to the mechanic.<br>I don’t have to work on Friday!<br>At sixteen, I had to share a room with my brother.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['va-p'] = function (b, n) { S.va.p = n; };
TOQUES.qd = function (b, n) { S.quadro.sel = n; };
TOQUES['qd-v'] = function (b, n, v) { S.quadro.esc[S.quadro.sel] = v; };
TOQUES.fo = function (b, n, v) { S.forma.esc = v; };
TOQUES['fo-prox'] = function () { S.forma = { n: S.forma.n + 1, esc: '' }; };
TOQUES.pr = function (b, n, v) { S.pr[n] = v; };
TOQUES['vb-p'] = function (b, n) { S.vb.p = n; };
TOQUES['vb-c'] = function (b, n) { S.vb.viu[S.vb.cap] = 1; S.vb.cap = n; };
TOQUES['tc-viu'] = function () { S.troca.viu[S.troca.n] = 1; };
TOQUES['tc-prox'] = function () { S.troca.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'Three stamps. Which one is it?',
  usos: [
    { t: 'HAVE TO', f: 'He has to train at ten.', d: 'A duty. The club says so.' },
    { t: 'DON’T HAVE TO', f: 'He doesn’t have to cook. He wants to.', d: 'Free. Nobody makes him.' },
    { t: 'MUSTN’T', f: 'You mustn’t touch the trophy.', d: 'Forbidden. Not allowed.' }
  ],
  pergunta: 'Which stamp is it?',
  itens: [
    { f: '“Every player has to be at the gym at eight.”', c: 0 },
    { f: '“You don’t have to wear a suit. A T-shirt is fine.”', c: 1 },
    { f: '“You mustn’t use your phone in the locker room.”', c: 2 },
    { f: '“I don’t have to wake up early on Sundays.”', c: 1 },
    { f: '“Players mustn’t go on the field with dirty boots.”', c: 2 },
    { f: '“She has to pay for her own plane ticket.”', c: 0 }
  ],
  nota: '<b>have to</b> is a duty. <b>don’t have to</b> is free: you choose. <b>mustn’t</b> is forbidden. The last two are opposites. And have to is a normal verb: he <b>has</b> to, he <b>doesn’t</b> have to.',
  uso: { p: 'Your turn. One thing you have to do, one you don’t have to do, and one you mustn’t do at work.', molde: ['I have to …', 'I don’t have to …', 'I mustn’t …'], ex: 'I have to start at eight. I don’t have to wear a tie. I mustn’t use my phone in meetings.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
