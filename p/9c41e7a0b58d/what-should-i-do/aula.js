/* ============================================================
   WHAT SHOULD I DO? · THE ON-AIR DESK · LIVE CLASS  06/10/2026
   Main series A2 · What should I do? · Should I…? · You should / You
   shouldn't + verbo puro (sem to, sem s, sem do) · a voz cai no conselho.
   Erros universais: "What do I do?" pedindo conselho, "You should to go",
   "She shoulds", "They don't should", "What I should do?".
   O MUNDO (da aula velha): um programa de conselhos de madrugada; ontem
   um vigia ligou (três áudios radio1–3, conferidos no whisper em 06/10:
   batem); a pilha de cartas de ouvintes; as linhas abertas.
   A CARA: a MESA DE SOM no ar — lâmpada ON AIR, seis faders que sobem
   a cada carta respondida (um SHOULD e um SHOULDN'T), o VU da audiência,
   as linhas de telefone que piscam. Fila: FILA-LIVE-386.md · 078.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'estudio' },
  { k: 'abre', est: 'o', min: 7, img: 'estudio', rot: 'I · Your Problem', t: 'What’s one small problem you have this week?', p: 'Pick a card. Answer out loud, however it comes out. Then ask your teacher for help.' },
  { k: 'ontem', est: 'l', min: 7, img: 'mesa', rot: 'II · Last Night’s Show', t: 'Last night a night guard called the show.', p: 'Read his question out loud. Play the advice. Say it back. The transcript opens after.' },
  { k: 'forma', est: 'f', min: 6, img: 'estudio', rot: 'III · No To, No S', t: 'Should never changes. No TO. No S. No DO.', p: 'Pick the correct sentence. Then say it.' },
  { k: 'duas', est: 'f', min: 6, img: 'estudio', rot: 'IV · Two Different Questions', t: 'Both are correct English. They ask different things.', p: 'Read both. Say the difference out loud. Then open it.' },
  { k: 'cartas', est: 'o', min: 7, img: 'cartas', rot: 'V · The Letter Stack', t: 'Six letters. Two pieces of advice for each.', p: 'Read the letter out loud. Give one SHOULD and one SHOULDN’T.' },
  { k: 'ordem', est: 'f', min: 6, img: 'estudio', rot: 'VI · Asking for Advice', t: 'Now you ask. Should jumps to the front.', p: 'Tap the words in order. Then ask your teacher.' },
  { k: 'linhas', est: 'o', min: 7, extra: 1, img: 'estudio', rot: 'VII · The Phone Lines Are Open', t: 'Live. Your teacher calls the show five times.', p: 'Answer each caller. Ask a question first, then give advice.' },
  { k: 'voz', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'VIII · The Voice Falls', t: 'Advice ends with the voice going down.', p: 'Your teacher says it. You repeat it. Then tap: does the voice go down or up?' },
  { k: 'seu', est: 'o', min: 7, extra: 1, img: 'estudio', rot: 'IX · Your Turn to Call', t: 'Now you call the show. Your teacher is the host.', p: 'Tell a real problem. Ask for advice. Answer the host’s questions.' },
  { k: 'fim', est: 'w', min: 6, img: 'amanhecer', rot: 'X · Off Air', t: 'Sunrise. Your problem from scene I comes back.', p: 'Write a letter to the show and answer it yourself. It goes to your My notes.' }
];

var TR = {
  'radio1.mp3': 'You should check the badge first. Always the badge.',
  'radio2.mp3': 'You shouldn’t go in there alone. Wait for me.',
  'radio3.mp3': 'If you’re not sure, you should call. That’s what the radio is for.'
};

var ABRE = [
  { k: 'This week', q: 'What’s one small problem you have this week?', fup: 'Now ask me for advice about it.', st: ['My problem is … What should I …?'], ex: 'I can’t sleep before midnight. What should I do?' },
  { k: 'Advice', q: 'Who do you ask for advice? Why that person?', fup: 'Was the advice good?', st: ['I ask my …'], ex: 'I ask my sister. She always tells the truth.' }
];
var FORMAS = [{ k: 'should', t: 'WHAT SHOULD I DO?' }, { k: 'deve', t: 'YOU SHOULD …' }, { k: 'whatdo', t: 'WHAT DO I DO?', erro: 1 }, { k: 'to', t: 'SHOULD TO …', erro: 1 }];

var ONTEM = [
  { au: 'radio1.mp3', p: 'Somebody is at the door. What should I do?' },
  { au: 'radio2.mp3', p: 'The lights went out in the hallway. Should I go in?' },
  { au: 'radio3.mp3', p: 'I heard a sound upstairs. What should I do?' }
];

var FORMA = [
  { sit: 'You · tired · bed', ok: 'You should go to bed.', mau: 'You should to go to bed.', w: 'No TO after should.' },
  { sit: 'He · coffee · too much', ok: 'He shouldn’t drink so much coffee.', mau: 'He shouldn’t to drink so much coffee.', w: 'The negative doesn’t bring TO back.' },
  { sit: 'She · the new job · good idea', ok: 'She should take the new job.', mau: 'She shoulds take the new job.', w: 'SHE, and still no S.' },
  { sit: 'They · alone · bad idea', ok: 'They shouldn’t go alone.', mau: 'They don’t should go alone.', w: 'No DON’T: shouldn’t.' },
  { sit: 'You · the door · closed', ok: 'You should keep it closed.', mau: 'You should keeps it closed.', w: 'The verb after should never changes.' },
  { sit: 'Me · more sleep', ok: 'I should sleep more.', mau: 'I should sleeping more.', w: 'Plain verb: sleep.' }
];

var DUAS = [
  { a: 'What do I do?', b: 'What should I do?', ea: 'About the task: what is my job here?', eb: 'Asking for advice: what is best?' },
  { a: 'I call him?', b: 'Should I call him?', ea: 'Not a real question in English.', eb: 'The real question: Should I…?' },
  { a: 'Where do I go?', b: 'Where should I go?', ea: 'The address. One right answer.', eb: 'An opinion. What do you think?' },
  { a: 'Do I open it?', b: 'Should I open it?', ea: 'The rule: is it part of my job?', eb: 'Advice: is it a good idea?' }
];

var CARTAS = [
  { de: 'Tired in Toronto', txt: 'I can’t sleep before 2 AM, and I start work at 7. What should I do?', d: ['phone', 'coffee', 'bed', 'walk'], ex: 'You should put your phone away at ten. You shouldn’t drink coffee after lunch.' },
  { de: 'Lonely in Leeds', txt: 'I moved to a new city and I don’t know anybody. What should I do?', d: ['a class', 'a club', 'stay home'], ex: 'You should take a dance class. You shouldn’t stay home every weekend.' },
  { de: 'Broke in Boston', txt: 'I spend all my money on food delivery. What should I do?', d: ['cook', 'apps', 'a list'], ex: 'You should cook on Sundays. You shouldn’t keep the apps on your phone.' },
  { de: 'Nervous in Nairobi', txt: 'I have a job interview in English on Monday. What should I do?', d: ['practice', 'the company', 'stay up late'], ex: 'You should practice with a friend. You shouldn’t stay up late on Sunday.' },
  { de: 'Busy in Busan', txt: 'My friend always calls me when I’m working. What should I do?', d: ['tell her', 'answer', 'a time'], ex: 'You should tell her a better time. You shouldn’t answer at work.' },
  { de: 'Messy in Madrid', txt: 'My roommate never washes the dishes. What should I do?', d: ['talk', 'a schedule', 'shout'], ex: 'You should talk to him and make a schedule. You shouldn’t shout.' }
];

var ORDEM = [['What', 'should', 'I', 'do?'], ['Should', 'I', 'call', 'him?'], ['Where', 'should', 'we', 'go?'], ['What', 'should', 'I', 'say?']];

var LINHAS = [
  { de: 'LINE 1 · A STUDENT', p: 'Hi! I have three exams next week and I can’t concentrate.', ex: 'How many hours do you study? You should study in the library. You shouldn’t study with your phone on the table.' },
  { de: 'LINE 2 · A DAD', p: 'My kids want a dog, but our apartment is very small.', ex: 'How old are your kids? You should get a small dog. You shouldn’t say yes today.' },
  { de: 'LINE 3 · A RUNNER', p: 'I want to run a marathon, but I get bored after ten minutes.', ex: 'Do you run alone? You should run with a group. You shouldn’t run the same street every day.' },
  { de: 'LINE 4 · A TRAVELER', p: 'I’m going to Japan and I don’t speak any Japanese.', ex: 'When are you going? You should learn ten words. You shouldn’t worry too much.' },
  { de: 'LINE 5 · A NEIGHBOR', p: 'My neighbor plays the drums every night at eleven.', ex: 'Did you talk to him? You should knock on his door. You shouldn’t call the police first.' }
];
var PARTES = [['q', 'A QUESTION FIRST'], ['s', 'YOU SHOULD …'], ['n', 'YOU SHOULDN’T …']];

var VOZ = [
  { e: 'You should call her.', k: 'baixa', n: 'Down on her: it sounds sure.' },
  { e: 'You shouldn’t go alone.', k: 'baixa', n: 'Down on alone.' },
  { e: 'What should I do?', k: 'baixa', n: 'A WH- question falls too.' },
  { e: 'Should I tell him?', k: 'sobe', n: 'A yes/no question goes up.' }
];

var SEU = [
  { q: 'Tell the host your problem.', m: 'Hi. I have a problem: …' },
  { q: 'Ask for advice.', m: 'What should I do?' },
  { q: 'The host asks a question. Answer it.', m: 'Well, I usually …' },
  { q: 'The host gives advice. React to it.', m: 'That’s a good idea. / I don’t think I should …, because …' },
  { q: 'Ask one more question.', m: 'Should I … first?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, fm: { n: 0, esc: -1 }, du: {}, ct: { sel: 0, partes: {} }, od: { n: 0, pick: [], err: 0 }, ln: { n: 0, partes: {} }, vz: { n: 0, esc: '' }, seu: { n: 0 } };

function cartaFeita(i) { var p = S.ct.partes[i] || {}; return p.s && p.n; }
function mesa(niveis, onair) {
  var faders = niveis.map(function (v, i) { var y = 150 - v * 1.1; return '<g class="fader' + (v > 0 ? ' alto' : '') + '"><line x1="' + (60 + i * 52) + '" y1="40" x2="' + (60 + i * 52) + '" y2="150" class="trilho-f"/><rect x="' + (60 + i * 52 - 14) + '" y="' + (y - 9) + '" width="28" height="18" rx="3" class="botao-f"/><text x="' + (60 + i * 52) + '" y="172" text-anchor="middle">' + (i + 1) + '</text></g>'; }).join('');
  var total = niveis.reduce(function (a, b) { return a + b; }, 0) / niveis.length, leds = '';
  for (var k = 0; k < 12; k++) leds += '<rect x="' + (400 + k * 16) + '" y="130" width="12" height="20" rx="2" class="led' + (k < Math.round(total / 100 * 12) ? (k > 9 ? ' quente' : ' aceso') : '') + '"/>';
  return '<svg class="mesa-s" viewBox="0 0 620 200" role="img" aria-label="The on-air desk"><rect width="620" height="200" rx="14" class="corpo-m"/>' + faders
    + '<rect x="400" y="30" width="188" height="60" rx="8" class="onair' + (onair ? ' ligado' : '') + '"/><text x="494" y="70" text-anchor="middle" class="onair-t' + (onair ? ' ligado' : '') + '">ON AIR</text>'
    + '<text x="400" y="118" class="rot-m">AUDIENCE</text>' + leds + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · LATE NIGHT ADVICE · 98.2 FM</span><h1>What Should <b>I Do?</b></h1>'
    + '<p class="sub">You are the host tonight. <b>The letters are waiting.</b></p>'
    + '<div class="chipsx"><span class="pilula">What should I do?</span><span class="pilula">You should…</span><span class="pilula">You shouldn’t…</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Go on air</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + mesa([80, 60, 95, 40, 70, 55], 1) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.ontem = function (c) {
  return cab(c) + '<div class="ontem-g">' + ONTEM.map(function (x, i) {
    return '<div class="chamada-v vd"><small>LAST NIGHT · CALL ' + (i + 1) + ' · THE NIGHT GUARD</small><b>“' + x.p + '”</b><div class="toca-linha">' + tocar(x.au) + '<span>THE ADVICE</span></div>' + transcricao(x.au, TR[x.au], 'on' + i) + '</div>';
  }).join('') + '</div><p class="dica-aluno" style="text-align:center">Three answers, and every one has the same word. Which one?</p>';
};

R.forma = function (c) {
  var e = S.fm, n = e.n, fim = n >= FORMA.length;
  if (fim) return cab(c) + trilha(FORMA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Should didn’t move once. No TO, no S, no DO.</h2></div></div>';
  var x = FORMA[n], ok = e.esc === 0;
  return cab(c) + trilha(FORMA, n) + '<div class="foco"><div class="pergunta vd ja"><small>THE NOTE</small><h2>' + x.sit + '</h2></div><div class="versoes duas-v">' + ordem([[x.ok, 0], [x.mau, 1]], n + 3).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="fm" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="fm-prox">Next</button></div>' : e.esc === 1 ? '<p class="recusa" style="text-align:center">That one has an extra piece. Read it again slowly.</p>' : '') + '</div>';
};

R.duas = function (c) {
  return cab(c) + '<div class="duas-g">' + DUAS.map(function (x, i) {
    var on = S.du[i];
    return '<div class="par-q vd"><div class="q-l esq"><b>' + x.a + '</b>' + (on ? '<small>' + x.ea + '</small>' : '') + '</div><div class="q-l dir"><b>' + x.b + '</b>' + (on ? '<small>' + x.eb + '</small>' : '') + '</div>'
      + (on ? '' : '<button type="button" class="chip" data-a="du" data-n="' + i + '">Open the difference</button>') + '</div>';
  }).join('') + '</div>';
};

R.cartas = function (c) {
  var e = S.ct, x = CARTAS[e.sel], p = e.partes[e.sel] || {}, niveis = CARTAS.map(function (cc, i) { var q = e.partes[i] || {}; return (q.s ? 50 : 0) + (q.n ? 50 : 0); });
  var feitas = CARTAS.filter(function (cc, i) { return cartaFeita(i); }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + mesa(niveis, 1) + '<div class="pilha">' + CARTAS.map(function (cc, i) { return '<button type="button" class="carta-o' + (e.sel === i ? ' sel' : '') + (cartaFeita(i) ? ' feita' : '') + '" data-a="ct" data-n="' + i + '">' + cc.de + '</button>'; }).join('') + '</div>'
    + (feitas >= 6 ? '<p class="aprova">Six letters answered. The faders are high: the listeners are staying.</p>' : '') + '</div>'
    + '<div class="lado-l"><div class="carta-l"><small>DEAR SHOW · FROM ' + x.de.toUpperCase() + '</small><p>' + x.txt + '</p><div class="dicas">' + x.d.map(function (d) { return '<span>' + d + '</span>'; }).join('') + '</div></div>'
    + fala('ct' + e.sel, ['You should … / You shouldn’t …'], ['You should', 'You shouldn’t', 'because']) + mostra('ct' + e.sel, x.ex, 1)
    + '<h5 class="so-prof rot-ouve">WHAT YOU HEARD · THE FADER GOES UP</h5><div class="tres-b so-prof">' + [['s', 'YOU SHOULD …'], ['n', 'YOU SHOULDN’T …']].map(function (k) { return '<button type="button" class="chip' + (p[k[0]] ? ' on' : '') + '" data-a="ct-p" data-v="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</div><p class="recusa so-prof">Not this: should to · shoulds</p></div></div>';
};

R.ordem = function (c) {
  var e = S.od, n = e.n, fim = n >= ORDEM.length;
  if (fim) return cab(c) + trilha(ORDEM, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR QUESTIONS</small><h2>Should was always before the person.</h2></div></div>';
  var alvo = ORDEM[n], emb = ordem(alvo.map(function (w, i) { return [w, i]; }), n + 7), pronto = e.pick.length === alvo.length;
  return cab(c) + trilha(ORDEM, n) + '<div class="foco"><div class="montagem vd">' + (e.pick.length ? e.pick.map(function (i) { return '<span class="pal-m">' + alvo[i] + '</span>'; }).join(' ') : '<span class="vazio-m">tap the words in order</span>') + '</div>'
    + (pronto ? '<p class="aprova" style="text-align:center">Now ask your teacher, for real.</p><div style="text-align:center"><button type="button" class="btn" data-a="od-prox">Next question</button></div>'
      : '<div class="tres-b centro">' + emb.map(function (o) { return '<button type="button" class="pilula grande-p" data-a="od" data-n="' + o[1] + '"' + (e.pick.indexOf(o[1]) >= 0 ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (e.err ? '<p class="recusa" style="text-align:center">Not yet. After the question word, should comes next.</p>' : '')) + '</div>';
};

R.linhas = function (c) {
  var e = S.ln, n = Math.min(e.n, LINHAS.length - 1), x = LINHAS[n], p = e.partes[n] || {};
  return cab(c) + trilha(LINHAS, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="telefones">' + LINHAS.map(function (l, i) { return '<div class="linha-t' + (i === n ? ' toca' : i < e.n ? ' feita' : '') + '"><i></i><span>LINE ' + (i + 1) + '</span></div>'; }).join('') + '</div>'
    + '<div class="pede vd"><small>' + x.de + ' · ON AIR</small><b>“' + x.p + '”</b></div><p class="dica-aluno">Your teacher is the caller. React for real: “Oh, but…”</p></div>'
    + '<div class="lado-l">' + fala('ln' + n, ['How …? / Do you …?', 'You should …', 'You shouldn’t …'], ['How long…?', 'Do you…?', 'You should', 'You shouldn’t']) + mostra('ln' + n, x.ex, 1)
    + '<h5 class="so-prof rot-ouve">WHAT YOU HEARD</h5><div class="tres-b so-prof">' + PARTES.map(function (k) { return '<button type="button" class="chip' + (p[k[0]] ? ' on' : '') + '" data-a="ln-p" data-v="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</div>'
    + (n < LINHAS.length - 1 ? '<div><button type="button" class="btn" data-a="ln-prox">Next caller</button></div>' : '<p class="aprova">Five callers, and every one hung up with a plan.</p>') + '</div></div>';
};

R.voz = function (c) {
  var e = S.vz, n = e.n, fim = n >= VOZ.length;
  if (fim) return cab(c) + trilha(VOZ, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR LINES</small><h2>Down for advice and WH- questions. Up only for yes/no.</h2></div></div>';
  var x = VOZ[n], ok = e.esc === x.k;
  return cab(c) + trilha(VOZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.e + '</p>' + (ok ? '<svg class="curva" viewBox="0 0 300 50"><path d="' + (x.k === 'baixa' ? 'M10 15 Q200 10 290 42' : 'M10 38 Q200 40 290 8') + '"/></svg>' : '') + '</div><div class="dois-l">'
    + '<button type="button" class="lado-btn' + (e.esc === 'baixa' ? (ok ? ' certo' : ' errado') : '') + '" data-a="vz" data-v="baixa"><b>↘ DOWN</b><small>sure, finished</small></button>'
    + '<button type="button" class="lado-btn' + (e.esc === 'sobe' ? (ok ? ' certo' : ' errado') : '') + '" data-a="vz" data-v="sobe"><b>↗ UP</b><small>a yes/no question</small></button></div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.n + ' Say it again, like that.</p><div style="text-align:center"><button type="button" class="btn" data-a="vz-prox">Next line</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Listen to your teacher again. Where does the voice go at the end?</p>' : '') + '</div>';
};

R.seu = function (c) {
  var e = S.seu, n = Math.min(e.n, SEU.length - 1), x = SEU[n];
  return cab(c) + trilha(SEU, e.n) + '<div class="mesa-c"><div class="lado-l">' + mesa([60, 40, 70, 50, 30, 80], 1) + '<div class="telefones"><div class="linha-t toca"><i></i><span>YOU · ON AIR</span></div></div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>STEP ' + (n + 1) + ' OF 5</small><h2>' + x.q + '</h2></div>' + fala('se' + n, [x.m], ['What should I do?', 'Should I…?', 'I don’t think I should'])
    + (n < SEU.length - 1 ? '<div><button type="button" class="btn" data-a="se-prox">Next step</button></div>' : '<p class="aprova">A real problem, and real advice, all in English.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Dear Show,\nMy problem is …\nWhat should I do?\n\nYou should … You shouldn’t …', 'Your letter',
    ['Dear Show, ', 'My problem is ', 'What should I do?', 'You should ', 'You shouldn’t '], ['YOUR LETTER, AND THE ANSWER', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write it with should.' : 'Write a letter to the show, then answer it: one should, one shouldn’t.'])
    + '<div class="lado-fim">' + mesa([90, 90, 90, 90, 90, 90], 0) + '<div class="grande vd"><span>What <u>should</u> I do?</span><span>You <u>should</u> call · you <u>shouldn’t</u> go</span><span>no <s>to</s> · no <s>s</s> · no <s>do</s></span></div>'
    + mostra('fim', 'Dear Show, I can’t wake up in the morning. What should I do?<br>You should go to bed before eleven. You shouldn’t look at your phone in bed.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.fm = function (b, n) { S.fm.esc = n; };
TOQUES['fm-prox'] = function () { S.fm = { n: S.fm.n + 1, esc: -1 }; };
TOQUES.du = function (b, n) { S.du[n] = 1; };
TOQUES.ct = function (b, n) { S.ct.sel = n; };
TOQUES['ct-p'] = function (b, n, v) { var p = S.ct.partes[S.ct.sel] = S.ct.partes[S.ct.sel] || {}; p[v] = !p[v]; };
TOQUES.od = function (b, n) { var e = S.od; if (n === e.pick.length) { e.pick.push(n); e.err = 0; } else e.err = 1; };
TOQUES['od-prox'] = function () { S.od = { n: S.od.n + 1, pick: [], err: 0 }; };
TOQUES['ln-p'] = function (b, n, v) { var p = S.ln.partes[Math.min(S.ln.n, LINHAS.length - 1)] = S.ln.partes[Math.min(S.ln.n, LINHAS.length - 1)] || {}; p[v] = !p[v]; };
TOQUES['ln-prox'] = function () { S.ln.n++; };
TOQUES.vz = function (b, n, v) { S.vz.esc = v; };
TOQUES['vz-prox'] = function () { S.vz = { n: S.vz.n + 1, esc: '' }; };
TOQUES['se-prox'] = function () { S.seu.n++; };
