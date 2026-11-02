/* ============================================================
   THE BUZZER · A GAME SHOW ABOUT THE FUTURE · LIVE CLASS  06/10/2026
   Main series A2 · will × going to. Não é longe × perto: é QUANDO a
   decisão nasceu. Plano ou prova que já existia → going to. Nasceu agora
   (oferta, promessa, recusa, opinião) → will / won't. Will you…? pede;
   Are you going to…? pergunta do plano. Erros universais: "I will to",
   will para plano já decidido.
   O MUNDO (da aula velha): um game show — palco, placar de LED, campainha
   vermelha; cada acerto de primeira soma 100 pontos. Sem áudio.
   A CARA: PALCO de TV à noite (holofotes baixos em âmbar), PLACAR de LED
   vermelho, a CAMPAINHA redonda e as DUAS PORTAS (já estava lá × nasceu
   agora). A bateria de 2% é CSS. Fila: FILA-LIVE-386.md · 068.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'fundo' },
  { k: 'abre', est: 'o', min: 7, img: 'mala', rot: 'I · Warm-Up Round', t: 'Three questions before the game. No wrong answers yet.', p: 'Pick a card. Answer with a whole sentence. Nobody corrects you here.' },
  { k: 'prova', est: 'f', min: 6, img: 'copo', rot: 'II · What Happens Next', t: 'Nothing is moving yet, and you can see it coming.', p: 'Point at the proof. Say what happens next. Then tap it.' },
  { k: 'portas', est: 'f', min: 6, img: 'fundo', rot: 'III · Two Doors', t: 'Two doors to the future. The question is when it started.', p: 'Read the sentence out loud. Send it through the right door.' },
  { k: 'semana', est: 'o', min: 7, img: 'mala', rot: 'IV · Your Week', t: 'Now your own week. Some of it is booked. Some of it isn’t.', p: 'Say the whole sentence first. Your teacher puts it in a box.' },
  { k: 'buzz1', est: 'o', min: 7, img: 'fundo', rot: 'V · The Buzzer Round', t: 'Six situations. Nobody planned any of them.', p: 'Press the buzzer. Answer in one sentence with I’ll or I won’t.' },
  { k: 'previsao', est: 'f', min: 6, img: 'ceu', rot: 'VI · The Forecast', t: 'Somebody predicts the weather for a living. Here is how far they can see.', p: 'Read the two bars. Then answer the question.' },
  { k: 'casos', est: 'f', min: 6, extra: 1, img: 'fundo', rot: 'VII · Two Contestants', t: 'Two people on the same stage. Only one of them planned anything.', p: 'Read what each one says. Choose the true sentence.' },
  { k: 'buzz2', est: 'o', min: 7, extra: 1, img: 'fundo', rot: 'VIII · Promise, Offer, Refuse', t: 'Three jobs GOING TO can’t do.', p: 'Press. Do the task out loud, starting with I’ll or I won’t.' },
  { k: 'host', est: 'o', min: 7, extra: 1, img: 'fundo', rot: 'IX · Now You Host', t: 'You’ve answered for forty minutes. Now you hold the questions.', p: 'Tap a card. Ask your teacher out loud. Listen to the answer.' },
  { k: 'fim', est: 'w', min: 6, img: 'fundo', rot: 'X · The Scoreboard', t: 'Your warm-up answers come back.', p: 'Write one plan, one thing you decide right now, and one promise. It goes to your My notes.' }
];

var ABRE = [
  { k: 'THE TICKET', q: 'Your flight is next Tuesday. The ticket is already on your phone. What are you doing next Tuesday?', fup: 'Where to?', st: ['Next Tuesday, I …'], ex: 'I’m going to fly to Lisbon.' },
  { k: 'THE BAG', q: 'Somebody drops a full bag of shopping in front of you. What do you say?', fup: 'And then?', st: ['Oh! I …'], ex: 'Oh! I’ll help you.' },
  { k: 'PLANS', q: 'What’s one plan you have for this month? And what will you order for dinner tonight?', fup: 'Why that?', st: ['This month I …', 'Tonight I …'], ex: 'I’m going to paint my room. Tonight? I’ll have pizza.' }
];
var FORMAS = [{ k: 'going', t: 'GOING TO' }, { k: 'will', t: 'WILL / I’LL' }, { k: 'wont', t: 'WON’T' }, { k: 'willto', t: 'WILL TO', erro: 1 }, { k: 'plano', t: 'WILL FOR A PLAN', erro: 1 }];

var PROVA = [
  { img: 'copo', prova: 'The glass is over the edge of the table.', ops: [['It’s going to fall.', 'ok'], ['It will fall.', 'pode'], ['It falls.', 'pres']], por: 'The proof is in the picture. Proof in front of you: GOING TO.' },
  { img: 'ceu', prova: 'The sky is already black. The street is still dry.', ops: [['It’s going to rain.', 'ok'], ['It will rain.', 'pode'], ['It’s raining.', 'agora']], por: 'The sky now, the rain in a minute: GOING TO.' },
  { bateria: 1, prova: 'Two percent, and no charger in the room.', ops: [['My phone is going to die.', 'ok'], ['My phone will die.', 'pode'], ['My phone dies.', 'pres']], por: 'A number on a screen is proof too.' },
  { img: 'mala', prova: 'The suitcase is packed and next to the door.', ops: [['She’s going to travel.', 'ok'], ['She will travel.', 'plano'], ['She travels.', 'pres']], por: 'A decision you can see: the bag is packed. GOING TO.' }
];
var NOTA = { pode: 'Possible, but with the proof in front of you, English prefers going to.', pres: 'That is a habit. This is one moment in the future.', agora: 'Not yet: the street is still dry.', plano: 'The plan was already there: going to.' };

var PORTAS = [
  { t: 'My bag is packed. I’m going to leave at six.', k: 'antes', w: 'The plan came first.' },
  { t: 'That bag looks heavy. I’ll carry it for you.', k: 'agora', w: 'An offer, born now.' },
  { t: 'Look at those clouds. It’s going to rain.', k: 'antes', w: 'The proof came first.' },
  { t: 'I think it will rain on Sunday. I’m not sure.', k: 'agora', w: 'An opinion, with no proof: will.' },
  { t: 'We booked a table. We’re going to eat out tonight.', k: 'antes', w: 'The booking came first.' },
  { t: 'The phone is ringing. I’ll get it.', k: 'agora', w: 'Decided with the ring.' }
];

var SEMANA = ['travel somewhere this year', 'see a doctor this month', 'call somebody tonight', 'change something in your kitchen', 'study English on Saturday', 'buy something expensive', 'visit an old friend', 'go to bed before eleven tonight'];
var CAIXAS = [['plano', 'ALREADY DECIDED', 'going to'], ['agora', 'I DECIDE NOW', 'will'], ['nao', 'NOT HAPPENING', 'not going to · won’t']];

var BUZZ1 = [
  { sit: 'Your friend can’t lift a box by himself.', dica: 'an offer', por: 'I’ll help you. You decided when you saw the box.' },
  { sit: 'The server is at your table, and you haven’t read the menu.', dica: 'a decision, right now', por: 'I’ll have the chicken. Decided at the table.' },
  { sit: 'Somebody asks you to keep a secret.', dica: 'a promise', por: 'I won’t tell anybody. You make the promise when you say it.' },
  { sit: 'Somebody asks you to sing in front of forty people.', dica: 'refuse with won’t', por: 'I won’t do it! Won’t is a refusal.' },
  { sit: 'The phone rings and everybody looks at you.', dica: 'three words', por: 'I’ll get it. You decide when the phone rings.' },
  { sit: 'It’s cold, and the window is open next to your friend.', dica: 'an offer', por: 'I’ll close it.' }
];
var BUZZ2 = [
  { sit: 'A friend lent you money last month and hasn’t asked for it.', dica: 'make a promise', por: 'I’ll pay you back on Friday. With going to it’s only a plan.' },
  { sit: 'Somebody is carrying too much and can’t open the door.', dica: 'make an offer', por: 'I’ll get the door.' },
  { sit: 'Somebody wants to borrow your phone for the whole evening.', dica: 'refuse', por: 'Sorry, I won’t. A refusal is won’t.' },
  { sit: 'A child asks you to read the same story for the fourth time.', dica: 'promise, then refuse', por: 'I’ll read it tomorrow. I won’t read it again tonight.' },
  { sit: 'A neighbor asks you to water the plants for two weeks.', dica: 'offer, with a condition', por: 'I’ll do it if you leave me the key.' },
  { sit: 'Somebody asks you to speak English in front of everybody.', dica: 'your choice: promise, offer or refuse', por: 'Any of the three works, with will or won’t.' }
];

var BARRAS = [['5 DAYS AWAY', 90, 'right about 90% of the time'], ['10 DAYS AWAY', 50, 'right about half of the time']];
var PREV = { ops: [['Far away there is no proof, only an opinion.', 'ok'], ['Will is more polite than going to.', 'a'], ['Will is for far days, going to for near days.', 'b']], por: 'The sky today is evidence. Next Sunday is a guess. And “I’m going to retire in thirty years” is far away, but it’s a plan.' };

var CASOS = [
  { quem: 'CONTESTANT 1', cor: 'a', fala: 'I booked this show in March. My name is on the list, the taxi is paid, and I’ve known for six weeks.', ops: [['She’s going to play. She planned all of it.', 'ok'], ['She’ll play. She’s deciding now.', 'x']], por: 'Everything happened BEFORE she spoke: going to.' },
  { quem: 'CONTESTANT 2', cor: 'b', fala: 'I was walking past the door. Somebody needed one more person. So… fine! I have no idea what the questions are.', ops: [['He’ll play. He decided at the door.', 'ok'], ['He’s going to play. He planned it.', 'x']], por: 'He decided at the door: will.' }
];

var HOST = [
  { q: 'Are you going to do anything after this class?', d: 'A PLAN' }, { q: 'Will you answer one personal question?', d: 'A REQUEST' }, { q: 'What are you going to do this weekend?', d: 'A PLAN' },
  { q: 'Will you help me with something after the lesson?', d: 'A REQUEST' }, { q: 'Do you think it will rain tomorrow?', d: 'AN OPINION' }, { q: 'Are you going to watch anything tonight?', d: 'A PLAN' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {}, pts: 0, errou: {},
  abre: { sel: -1, foi: {}, formas: {} }, pv: { n: 0, esc: '' }, pt: { n: 0, esc: '' }, sem: {}, sem_sel: 0, b1: { n: 0, aperta: 0 }, b2: { n: 0, aperta: 0 }, prev: '', cs: {}, host: { sel: -1, feito: {} } };

function pontua(chave, ok) { if (ok) { if (!S.errou[chave] && !S.errou[chave + '!']) { S.pts += 100; S.errou[chave + '!'] = 1; } } else S.errou[chave] = 1; }
function placar() { return '<div class="placar-led"><small>SCORE</small><b>' + ('0000' + S.pts).slice(-4) + '</b></div>'; }
function campainha(on, dataA) { return '<button type="button" class="campainha' + (on ? ' on' : '') + '" data-a="' + dataA + '" aria-label="Buzzer"><span></span></button>'; }
function bateria() { return '<div class="bateria"><span class="corpo"><i style="width:4%"></i></span><span class="ponta"></span><b>2%</b></div>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · A GAME SHOW ABOUT THE FUTURE</span><h1>The <b>Buzzer</b></h1>'
    + '<p class="sub">Tonight’s game: the future. Some of it was <b>already there</b>. Some of it is <b>born when you press</b>.</p>'
    + '<div class="chipsx"><span class="pilula">going to · already there</span><span class="pilula">will · born now</span><span class="pilula">I’ll · I won’t</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the show</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="palco">' + placar() + campainha(0, 'nada') + '<div class="portas-p"><span class="porta-g a"><b>DOOR 1</b><small>GOING TO</small></span><span class="porta-g b"><b>DOOR 2</b><small>WILL</small></span></div></div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.prova = function (c) {
  var e = S.pv, n = e.n, fim = n >= PROVA.length;
  if (fim) return cab(c) + trilha(PROVA, n) + '<div class="mesa-c">' + placar() + '<div class="lado-l"><div class="pergunta vd"><small>FOUR PICTURES</small><h2>Four going to. The proof was in every one.</h2></div></div></div>';
  var x = PROVA[n], ok = e.esc === 'ok';
  var quadro = x.bateria ? '<div class="quadro-b vd">' + bateria() + '</div>' : '<div class="aberta vd" style="background-image:url(' + img(x.img) + ')"><span>THE PROOF</span></div>';
  return cab(c) + trilha(PROVA, n) + '<div class="mesa-c">' + quadro + '<div class="lado-l">' + placar() + '<div class="sit vd"><small>WHAT YOU SEE</small><b>' + x.prova + '</b></div>'
    + (ok ? '<div class="balao vd"><small>WHAT HAPPENS NEXT</small><p>' + x.ops[0][0] + '</p></div><p class="aprova">' + x.por + '</p><div><button type="button" class="btn" data-a="pv-prox">Next picture</button></div>'
      : '<div class="versoes">' + ordem(x.ops, n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="pv" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : '')) + '</div></div>';
};

R.portas = function (c) {
  var e = S.pt, n = e.n, fim = n >= PORTAS.length;
  if (fim) return cab(c) + trilha(PORTAS, n) + '<div class="foco">' + placar() + '<div class="pergunta vd"><small>TWO DOORS</small><h2>One door for what was already there. One for what is born while you speak.</h2></div></div>';
  var x = PORTAS[n], ok = e.esc === x.k;
  var porta = function (k, t, nm, f) { var est = e.esc === k ? (ok ? ' certa' : ' errada') : ''; return '<button type="button" class="porta-g ' + (k === 'antes' ? 'a' : 'b') + est + '" data-a="pt" data-v="' + k + '"' + (ok ? ' disabled' : '') + '><b>' + t + '</b><em>' + nm + '</em><small>' + f + '</small></button>'; };
  return cab(c) + trilha(PORTAS, n) + '<div class="foco">' + placar() + '<div class="sit vd"><small>THE SENTENCE</small><b>' + x.t + '</b></div><div class="portas-p grandes">' + porta('antes', 'DOOR 1', 'IT WAS ALREADY THERE', 'GOING TO') + porta('agora', 'DOOR 2', 'IT WAS BORN NOW', 'WILL') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="pt-prox">Next</button></div>' : (e.esc ? '<p class="recusa" style="text-align:center">Did this exist before you spoke, or did you just decide it?</p>' : '')) + '</div>';
};

R.semana = function (c) {
  var sel = S.sem_sel;
  return cab(c) + '<div class="mesa-s"><div class="itens-s">' + SEMANA.map(function (t, i) { var cx = S.sem[i]; return '<button type="button" class="item-s' + (sel === i ? ' on' : '') + (cx ? ' cx-' + cx : '') + '" data-a="sm" data-n="' + i + '"><b>' + t + '</b>' + (cx ? '<small>' + CAIXAS.filter(function (k) { return k[0] === cx; })[0][2] + '</small>' : '') + '</button>'; }).join('') + '</div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>SAY IT ABOUT YOU</small><h2>' + SEMANA[sel] + '</h2></div><p class="dica-aluno">I’m going to … · I’ll … · I’m not going to … · I won’t …</p><h5 class="so-prof rot-ouve">PUT IT IN A BOX</h5><div class="caixas">'
    + CAIXAS.map(function (k) { return '<button type="button" class="caixa-s cx-' + k[0] + (S.sem[sel] === k[0] ? ' on' : '') + '" data-a="sm-c" data-v="' + k[0] + '"><b>' + k[1] + '</b><small>' + k[2] + '</small></button>'; }).join('') + '</div></div></div>';
};

function rBuzz(c, lista, e, chave, fimTxt) {
  var n = e.n, fim = n >= lista.length;
  if (fim) return cab(c) + trilha(lista, n) + '<div class="foco">' + placar() + '<div class="pergunta vd"><small>ROUND OVER</small><h2>' + fimTxt + '</h2></div></div>';
  var x = lista[n];
  return cab(c) + trilha(lista, n) + '<div class="mesa-c"><div class="palco mini">' + placar() + campainha(e.aperta, chave + '-a') + '<small class="dica-b">' + (e.aperta ? 'ANSWER NOW · TWO SECONDS' : 'PRESS THE BUZZER') + '</small></div><div class="lado-l"><div class="sit vd"><small>THE SITUATION</small><b>' + x.sit + '</b></div><div class="pede vd"><small>YOUR JOB</small><b>' + x.dica + '</b></div>'
    + (e.aperta ? mostra(chave + n, x.por, 1) + '<div class="tres-b"><button type="button" class="btn so-prof" data-a="' + chave + '-ok">Good answer · +100</button><button type="button" class="btn" data-a="' + chave + '-prox">Next</button></div>' : '') + '</div></div>';
}
R.buzz1 = function (c) { return rBuzz(c, BUZZ1, S.b1, 'b1', 'Six answers, and not one of them existed before you pressed.'); };
R.buzz2 = function (c) { return rBuzz(c, BUZZ2, S.b2, 'b2', 'Promise, offer, refuse. Only will does those jobs.'); };

R.previsao = function (c) {
  var ok = S.prev === 'ok';
  return cab(c) + '<div class="mesa-c"><div class="vd barras">' + BARRAS.map(function (b) { return '<div class="barra"><small>' + b[0] + '</small><div class="trilho-b"><i style="width:' + b[1] + '%"></i></div><em>' + b[2] + '</em></div>'; }).join('') + '<div class="aberta vd ceu" style="background-image:url(' + img('ceu') + ')"><span>THE SKY OUTSIDE · NOW</span></div></div>'
    + '<div class="lado-l">' + placar() + '<div class="pergunta vd ja"><small>THE QUESTION</small><h2>The sky outside is GOING TO. The ten-day forecast is WILL. Why?</h2></div>'
    + (ok ? '<p class="aprova">' + PREV.por + '</p>' : '<div class="versoes">' + ordem(PREV.ops, 3).map(function (o) { return '<button type="button" class="versao' + (S.prev === o[1] ? ' errado' : '') + '" data-a="pr" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (S.prev ? '<p class="recusa">Think about the proof, not the distance.</p>' : '')) + '</div></div>';
};

R.casos = function (c) {
  return cab(c) + '<div class="foco-p">' + placar() + '</div><div class="casos">' + CASOS.map(function (x, i) {
    var esc = S.cs[i], ok = esc === 'ok';
    return '<div class="caso vd c-' + x.cor + '"><small>' + x.quem + '</small><p>“' + x.fala + '”</p><div class="versoes">' + ordem(x.ops, i + 2).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="cs" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (ok ? '<p class="aprova">' + x.por + '</p>' : esc ? '<p class="recusa">Find the words that show WHEN they decided.</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.host = function (c) {
  var e = S.host, x = e.sel >= 0 ? HOST[e.sel] : null, n = Object.keys(e.feito).length;
  return cab(c) + '<div class="mesa-c"><div class="cartas-h">' + HOST.map(function (h, i) { return '<button type="button" class="carta-h' + (e.sel === i ? ' on' : '') + (e.feito[i] ? ' feito' : '') + '" data-a="hs" data-n="' + i + '"><small>' + h.d + '</small><b>' + h.q + '</b></button>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (x ? '<div class="pergunta vd ja"><small>YOU ASK · ' + x.d + '</small><h2>' + x.q + '</h2></div><p class="dica-aluno">Ask it out loud, like a host. Your teacher answers for real.</p>' + (e.feito[e.sel] ? '<p class="aprova">Asked.</p>' : '<div><button type="button" class="btn so-prof" data-a="hs-ok">Asked · I answered</button></div>')
      : '<div class="pergunta vd"><small>' + n + ' OF 6 ASKED</small><h2>' + (n >= 6 ? 'WILL YOU asks a person to do something. ARE YOU GOING TO asks about a plan.' : 'Tap a card. You are the host now.') + '</h2></div>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'This year I’m going to …\nRight now I decide: I’ll …\nI promise I won’t …', 'Your future',
    ['I’m going to ', 'I’ll ', 'I won’t ', 'It’s going to ', 'I think it will '], ['THE TICKET, THE BAG, YOUR PLANS', lembra.length ? 'In the warm-up your teacher heard: ' + lembra.join(', ') + '. Now write them with the right door.' : 'One plan (going to), one decision right now (will), one promise (won’t).'])
    + '<div class="lado-fim">' + placar() + '<div class="grande vd"><span>already there: <u>going to</u></span><span>born now: <u>will</u> · <u>won’t</u></span><span>never <s>will to</s></span></div>'
    + mostra('fim', 'Next Tuesday I’m going to fly to Lisbon.<br>The bag fell! I’ll help you.<br>This year I’m going to paint my room. Tonight I’ll have pizza.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.nada = function () { return false; };
TOQUES.pv = function (b, n, v) { S.pv.esc = v; pontua('pv' + S.pv.n, v === 'ok'); };
TOQUES['pv-prox'] = function () { S.pv = { n: S.pv.n + 1, esc: '' }; };
TOQUES.pt = function (b, n, v) { S.pt.esc = v; pontua('pt' + S.pt.n, v === PORTAS[S.pt.n].k); };
TOQUES['pt-prox'] = function () { S.pt = { n: S.pt.n + 1, esc: '' }; };
TOQUES.sm = function (b, n) { S.sem_sel = n; };
TOQUES['sm-c'] = function (b, n, v) { S.sem[S.sem_sel] = v; if (S.sem_sel < SEMANA.length - 1) S.sem_sel++; };
TOQUES['b1-a'] = function () { S.b1.aperta = 1; };
TOQUES['b1-ok'] = function () { pontua('b1' + S.b1.n, true); };
TOQUES['b1-prox'] = function () { S.b1 = { n: S.b1.n + 1, aperta: 0 }; };
TOQUES['b2-a'] = function () { S.b2.aperta = 1; };
TOQUES['b2-ok'] = function () { pontua('b2' + S.b2.n, true); };
TOQUES['b2-prox'] = function () { S.b2 = { n: S.b2.n + 1, aperta: 0 }; };
TOQUES.pr = function (b, n, v) { S.prev = v; pontua('prev', v === 'ok'); };
TOQUES.cs = function (b, n, v) { S.cs[n] = v; pontua('cs' + n, v === 'ok'); };
TOQUES.hs = function (b, n) { S.host.sel = n; };
TOQUES['hs-ok'] = function () { S.host.feito[S.host.sel] = 1; };
