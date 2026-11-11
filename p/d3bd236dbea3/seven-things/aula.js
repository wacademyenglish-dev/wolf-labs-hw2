/* ============================================================
   SEVEN THINGS THE HOUSE CAN DO · THE SMART HOUSE · LIVE CLASS  05/10/2026
   Main series A1 · can / can't: habilidade, permissão, possibilidade
   O MUNDO: o dono viajou e a casa inteligente roda sozinha. Na tela, um
   PAINEL de sete funções: cada CAN acende uma (verde-água), cada CAN'T
   fica vermelha. O registro da noite tem uma linha que a casa não pode
   ter feito: alguém com a chave entrou (permissão, o terceiro trabalho).
   Áudios (faster-whisper): h-l1–5 e h-yes/h-no batem com o texto.
   ATENÇÃO: h-q1–4 NÃO são “Can you lock the door?” como a aula velha
   mostrava; são perguntas pessoais (What can you do that most people
   cannot?…). Viraram as perguntas da casa ao aluno na cena XI.
   Fila: FILA-LIVE-386.md · 019.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'sala' },
  { k: 'eu', est: 'o', min: 7, img: 'sala', rot: 'I · You First', t: 'Three things you can do well. One thing you can’t do.', p: 'Say them out loud, any words you have. Your teacher taps what you said. Don’t worry about it yet.' },
  { k: 'consigo', est: 'o', min: 7, img: 'sala', rot: 'II · Can You?', t: 'Six questions, all about you.', p: 'Your teacher asks. Answer Yes, I can or No, I can’t. Then say the whole sentence.' },
  { k: 'painel', est: 'o', min: 7, img: 'sala', rot: 'III · The Panel', t: 'The control panel. Seven functions, seven rooms.', p: 'Tap a function. Say what the house can do. It switches on.' },
  { k: 'gx', est: 'f', min: 4, img: 'sala', rot: 'IV · Right, Not This', t: 'Six lines from the smart house. One is right.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'naomuda', est: 'f', min: 6, img: 'sala', rot: 'V · It Never Changes', t: 'Eight people. The word in the middle never moves.', p: 'Pick the right piece. Then read the whole sentence.' },
  { k: 'limites', est: 'l', min: 7, img: 'pia', rot: 'VI · No Hands', t: 'The house knows exactly where it stops.', p: 'Listen first. Say both halves. Then see the words, and the function turns red.' },
  { k: 'hey', est: 'l', min: 7, extra: 1, img: 'sala', rot: 'VII · Hey, House', t: 'The house is asleep. Wake it up, then ask.', p: 'Say Hey, House! out loud. Ask the question. Then listen to the house.' },
  { k: 'tres', est: 'f', min: 6, extra: 1, img: 'chave', rot: 'VIII · Three Jobs', t: 'One word, three jobs.', p: 'Read it out loud. Then pick the job.' },
  { k: 'registro', est: 'f', min: 6, extra: 1, img: 'sala', rot: 'IX · The Night Log', t: 'The house has a list of everything it does tonight.', p: 'Read each line out loud: the house can do that, or it can’t. One line is not its work.' },
  { k: 'chave', est: 'o', min: 7, extra: 1, img: 'pia', rot: 'X · She Has a Key', t: 'Six in the morning. The plates are still drying.', p: 'Read the three facts. Say who it is. Then open the message.' },
  { k: 'venda', est: 'o', min: 7, extra: 1, img: 'chave', rot: 'XI · Sell Me the House', t: 'A salesperson and a suspicious customer.', p: 'Round 1: your teacher sells, you ask. Round 2: you sell.' },
  { k: 'fim', est: 'w', min: 6, img: 'sala', rot: 'XII · Lights Off', t: 'The house has four questions for you.', p: 'Listen, answer out loud, then see the words. Then write about your own house. The red line watches can. It goes to your My notes.' }
];

var TR = {
  'h-l1.mp3': 'I can’t wash the dishes. I have no hands.', 'h-l2.mp3': 'I can’t open that window. It has no motor.',
  'h-l3.mp3': 'I can’t make coffee. There is no machine.', 'h-l4.mp3': 'I can’t move a chair. Nothing in me moves.',
  'h-l5.mp3': 'I can’t answer the door. I can only record it.', 'h-yes.mp3': 'Yes, I can.', 'h-no.mp3': 'No, I can’t.',
  'h-q1.mp3': 'What can you do that most people cannot?', 'h-q2.mp3': 'What can you not do?',
  'h-q3.mp3': 'Who can come into your house without asking?', 'h-q4.mp3': 'Can you see the street from your window?'
};

var PARTES_EU = [{ k: 'c1', t: 'CAN #1' }, { k: 'c2', t: 'CAN #2' }, { k: 'c3', t: 'CAN #3' }, { k: 'nt', t: 'CAN’T' }];
var ARM_EU = [{ k: 'to', t: 'I CAN TO …' }, { k: 'dont', t: 'I DON’T CAN …' }];

var COISAS = [
  { v: 'swim', ic: '🏊' }, { v: 'drive', ic: '🚗' }, { v: 'cook', ic: '🍳' },
  { v: 'ride a bike', ic: '🚲' }, { v: 'play an instrument', ic: '🎸' }, { v: 'whistle', ic: '🎶' }
];

var FUNCOES = [
  { k: 'lock', ic: '🔒', n: 'HALL', f: 'The house can lock the door.' },
  { k: 'lights', ic: '💡', n: 'LIVING ROOM', f: 'The house can turn the lights off.' },
  { k: 'oven', ic: '♨️', n: 'KITCHEN', f: 'The house can turn the oven off.' },
  { k: 'blinds', ic: '🪟', n: 'BEDROOM', f: 'The house can close the blinds.' },
  { k: 'water', ic: '💧', n: 'BATHROOM', f: 'The house can stop the water.' },
  { k: 'plants', ic: '🌿', n: 'GARDEN', f: 'The house can water the plants.' },
  { k: 'camera', ic: '📹', n: 'FRONT DOOR', f: 'The house can record the door.' }
];

var NAOMUDA = [
  { su: 'He', v: 'swim' }, { su: 'She', v: 'drive' }, { su: 'The house', v: 'lock the door' }, { su: 'They', v: 'cook' },
  { su: 'My sister', v: 'play the piano' }, { su: 'We', v: 'start at eight' }, { su: 'It', v: 'water the plants' }, { su: 'You', v: 'ask me anything' }
];
var OPS = [{ k: 'can', t: 'can' }, { k: 'cans', t: 'cans' }, { k: 'canto', t: 'can to' }];
var PORQUE = { cans: 'No S, ever. Not for he, not for she, not for the house.', canto: 'No TO after can. The verb comes straight after it.' };

var LIMITES = [
  { k: 'dishes', ic: '🍽️', en: 'wash the dishes', au: 'h-l1.mp3' }, { k: 'window', ic: '🪟', en: 'open that window', au: 'h-l2.mp3' },
  { k: 'coffee', ic: '☕', en: 'make coffee', au: 'h-l3.mp3' }, { k: 'chair', ic: '🪑', en: 'move a chair', au: 'h-l4.mp3' },
  { k: 'door', ic: '🚪', en: 'answer the door', au: 'h-l5.mp3' }
];

var HEY = [
  { q: 'Can you lock the door?', sim: 1 }, { q: 'Can you make coffee?', sim: 0 }, { q: 'Can you water the plants?', sim: 1 },
  { q: 'Can you wash the dishes?', sim: 0 }, { q: 'Can you close the blinds?', sim: 1 }, { q: 'Can you move a chair?', sim: 0 }
];

var CAIXAS = [{ k: 'ability', t: 'ABILITY', s: 'you learned it' }, { k: 'permission', t: 'PERMISSION', s: 'somebody says yes' }, { k: 'possibility', t: 'POSSIBILITY', s: 'nothing is in the way' }];
var TRES = [
  { en: 'I can play the guitar.', k: 'ability' }, { en: 'You can go out tonight.', k: 'permission' },
  { en: 'It isn’t raining, so we can walk to the beach.', k: 'possibility' }, { en: 'She can speak three languages.', k: 'ability' },
  { en: 'You can park here.', k: 'permission' }, { en: 'The road is clear now, so the bus can go.', k: 'possibility' }, { en: 'You can use my phone.', k: 'permission' }
];

var EVENTOS = [
  { h: '9:14 PM', ev: 'The lights go off in the living room.', k: 'casa' }, { h: '9:30 PM', ev: 'The blinds close in the bedroom.', k: 'casa' },
  { h: '10:02 PM', ev: 'The front door locks.', k: 'casa' }, { h: '11:45 PM', ev: 'The oven turns off.', k: 'casa' },
  { h: '1:10 AM', ev: 'The plants get water.', k: 'casa' }, { h: '2:26 AM', ev: 'The camera records the front door.', k: 'casa' },
  { h: '3:40 AM', ev: 'Somebody washes the dishes.', k: 'pessoa' }, { h: '6:05 AM', ev: 'The water stops in the bathroom.', k: 'casa' }
];

var IDEIAS = ['cook dinner', 'walk the dog', 'open the garage', 'play music', 'call the police', 'clean the floor', 'talk to the cat', 'pay the bills'];
var PARTES_V = [{ k: 'pergunta', t: 'CAN IT …?' }, { k: 'curta', t: 'YES, IT CAN / NO, IT CAN’T' }, { k: 'mas', t: '… BUT IT CAN …' }];
var PERG_FIM = ['h-q1.mp3', 'h-q2.mp3', 'h-q3.mp3', 'h-q4.mp3'];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  eu: { partes: {}, arm: {} }, cons: { r: {} }, painel: { on: {}, ult: -1 }, nm: { n: 0, esc: '' }, lim: { n: 0, red: {} },
  hey: { n: 0, acordou: 0 }, tres: { sel: -1, feitos: {}, err: '' }, reg: { n: 0, esc: '' }, chave: { abre: 0 },
  venda: { r: 0, partes: {}, erro: 0, ideias: {} }, fimq: { n: 0 } };

function painel(extra) {
  return '<div class="painel' + (extra || '') + '">' + FUNCOES.map(function (f, i) { return '<span class="func' + (S.painel.on[i] ? ' on' : '') + '"><i>' + f.ic + '</i><small>' + f.n + '</small></span>'; }).join('')
    + LIMITES.map(function (l, i) { return S.lim.red[i] ? '<span class="func red"><i>' + l.ic + '</i><small>CAN’T</small></span>' : ''; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>Seven Things the House <b>Can Do</b></h1>'
    + '<p class="sub">It can lock the door. It can’t wash the dishes. So who washes them?</p>'
    + '<div class="chipsx"><span class="pilula">can</span><span class="pilula">can’t</span><span class="pilula">Can you…?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Wake up the house</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('sala') + '" alt="A dark living room with a glowing line of light"><div class="capa-painel"><small>NOBODY IS HOME</small><b>7 functions · 1 night log</b></div></div></div>';
};

R.eu = function (c) {
  var e = S.eu;
  return cab(c) + '<div class="foco"><div class="pergunta vd"><small>YOU FIRST</small><h2>I can … I can … I can … But I can’t …</h2></div>' + fala('eu', ['I can …', 'I can’t …'], ['cook', 'swim', 'drive', 'sing', 'dance'])
    + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + PARTES_EU.map(function (p) { return '<button type="button" class="chip frase' + (e.partes[p.k] ? ' on' : '') + '" data-a="eu-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + ARM_EU.map(function (p) { return '<button type="button" class="chip frase erro-ouvido' + (e.arm[p.k] ? ' on' : '') + '" data-a="eu-a" data-v="' + p.k + '">' + p.t + '</button>'; }).join('') + '</div>'
    + mostra('eu', 'I can cook. I can drive. I can speak a little English. But I can’t swim.', 1) + '</div>';
};

R.consigo = function (c) {
  var r = S.cons.r, tudo = COISAS.every(function (_, i) { return r[i]; });
  return cab(c) + '<div class="grade-c">' + COISAS.map(function (x, i) {
    var v = r[i];
    return '<div class="cart-c vd' + (v ? ' ' + v : '') + '"><span class="ic">' + x.ic + '</span><p class="q">Can you ' + x.v + '?</p>'
      + (v ? '<p class="resp-c">' + (v === 'sim' ? 'Yes, I can. I can ' + x.v + '.' : 'No, I can’t. I can’t ' + x.v + '.') + '</p>' : '')
      + '<div class="tres-b">' + [['sim', 'YES, I CAN'], ['nao', 'NO, I CAN’T']].map(function (o) { return '<button type="button" class="pilula' + (v === o[0] ? ' certo' : '') + '" data-a="cs" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
  }).join('') + '</div>' + (tudo ? '<p class="aprova" style="text-align:center">Six sentences, and can didn’t change once. Can is short (/kən/); can’t is long and strong.</p>' : '');
};

R.painel = function (c) {
  var p = S.painel, todas = FUNCOES.every(function (_, i) { return p.on[i]; });
  return cab(c) + '<div class="mesa-painel"><div class="painel-grande vd">' + FUNCOES.map(function (f, i) { return '<button type="button" class="tecla-f' + (p.on[i] ? ' on' : '') + '" data-a="pn" data-n="' + i + '"><i>' + f.ic + '</i><b>' + f.n + '</b><small>' + (p.on[i] ? 'ON' : 'OFF') + '</small></button>'; }).join('') + '</div>'
    + '<div class="lado-painel">' + (p.ult >= 0 ? '<div class="pergunta vd"><small>' + FUNCOES[p.ult].n + '</small><h2>' + FUNCOES[p.ult].f.replace('can', '<b>can</b>') + '</h2></div><p class="dica-aluno">Say it again without looking. Then your teacher asks: Can the house …?</p>' : '<div class="pergunta vd"><small>SEVEN FUNCTIONS</small><h2>Tap a function.</h2></div>')
    + (todas ? '<p class="aprova">Seven functions on. Remember them: you’ll need them tonight.</p>' : '') + '</div></div>';
};

R.naomuda = function (c) {
  var e = S.nm, n = e.n, fim = n >= NAOMUDA.length, x = NAOMUDA[Math.min(n, NAOMUDA.length - 1)];
  if (fim) return cab(c) + trilha(NAOMUDA, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT PEOPLE</small><h2>One form: can + the verb. No S, no TO.</h2></div>' + follow('NOW THE NEGATIVE', 'Say four of them with can’t.', ['He can’t …', 'The house can’t …'], [], 'nmf') + '</div>';
  var ok = e.esc === 'can';
  return cab(c) + trilha(NAOMUDA, n) + '<div class="trem"><span class="vagao">' + x.su + '</span><span class="vagao buraco' + (ok ? ' cheio' : e.esc ? ' errado' : '') + '">' + (ok ? 'can' : '?') + '</span><span class="vagao verbo">' + x.v + '</span></div>'
    + '<div class="tres-b centro">' + OPS.map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o.k ? (ok ? ' certo' : ' errado') : '') + '" data-a="nm" data-v="' + o.k + '">' + o.t + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa" style="text-align:center">' + PORQUE[e.esc] + '</p>' : '')
    + (ok ? '<p class="aprova" style="text-align:center">Read it: ' + x.su + ' can ' + x.v + '.</p><div style="text-align:center"><button type="button" class="btn" data-a="nm-prox">Next</button></div>' : '');
};

R.limites = function (c) {
  var e = S.lim, n = e.n, fim = n >= LIMITES.length, x = LIMITES[Math.min(n, LIMITES.length - 1)];
  var lado = '<div class="lado-lim">' + painel(' pequeno') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-lim"><div class="foco"><div class="pergunta vd"><small>FIVE LIMITS</small><h2>Five things it can’t do. Every one needs a person.</h2></div>' + follow('TWO MORE', 'Say two more things the house can’t do.', ['It can’t …', 'because …'], [], 'limf') + '</div>' + lado + '</div>';
  var ouviu = (S.ouviu || {})[x.au];
  return cab(c) + trilha(LIMITES, n) + '<div class="mesa-lim"><div class="foco"><div class="toca-linha vd"><span class="ic-g">' + x.ic + '</span>' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>'
    + (ouviu ? '<p class="dica-aluno">Say both halves out loud.</p>' : '')
    + '<div>' + (e.red[n] ? '<button type="button" class="btn" data-a="lm-prox">Next line</button>' : '<button type="button" class="btn cheio" data-a="lm-red"' + (ouviu ? '' : ' disabled') + '>It can’t · turn it red</button>') + '</div></div>' + lado + '</div>';
};

R.hey = function (c) {
  var h = S.hey, n = h.n, fim = n >= HEY.length, x = HEY[Math.min(n, HEY.length - 1)];
  if (fim) return cab(c) + trilha(HEY, n) + '<div class="foco"><div class="pergunta vd"><small>SIX QUESTIONS</small><h2>Not one needed do. Can you…? Yes, I can. No, I can’t.</h2></div>' + follow('SWAP', 'Now your teacher is the house. You ask three questions.', ['Hey, House! Can you …?'], [], 'heyf') + '</div>';
  var au = x.sim ? 'h-yes.mp3' : 'h-no.mp3';
  return cab(c) + trilha(HEY, n) + '<div class="mesa-hey"><button type="button" class="orbe' + (h.acordou ? ' acesa' : '') + '" data-a="hy-acorda"><span></span><b>' + (h.acordou ? 'Listening…' : 'Say “Hey, House!”') + '</b></button>'
    + '<div class="lado-hey">' + (h.acordou ? '<div class="pergunta vd"><small>ASK IT OUT LOUD</small><h2>' + x.q + '</h2></div><div class="toca-linha vd"><span class="ic-g">🏠</span>' + tocar(au) + '<div>' + transcricao(au, TR[au], 'hy' + n) + '</div></div>'
      + ((S.trans || {})['hy' + n] ? '<div><button type="button" class="btn" data-a="hy-prox">Next question</button></div>' : '') : '<p class="dica-aluno">Wake the house first. Out loud.</p>') + '</div></div>';
};

R.tres = function (c) {
  var e = S.tres, x = e.sel >= 0 ? TRES[e.sel] : null, tudo = Object.keys(e.feitos).length === TRES.length;
  return cab(c) + '<div class="fichas-t">' + TRES.map(function (t, i) { return e.feitos[i] ? '' : '<button type="button" class="ficha-t' + (e.sel === i ? ' on' : '') + '" data-a="tr-sel" data-n="' + i + '">' + t.en.replace('can', '<b>can</b>') + '</button>'; }).join('') + '</div>'
    + (x && e.err ? '<p class="recusa" style="text-align:center">Read it again: does someone know how, say yes, or is nothing in the way?</p>' : '')
    + '<div class="caixas-t">' + CAIXAS.map(function (k) { return '<button type="button" class="caixa-t' + (x && e.err === k.k ? ' errado' : '') + '" data-a="tr" data-v="' + k.k + '"><b>' + k.t + '</b><small>' + k.s + '</small>' + TRES.filter(function (t, i) { return e.feitos[i] && t.k === k.k; }).map(function (t) { return '<span>' + t.en + '</span>'; }).join('') + '</button>'; }).join('') + '</div>'
    + (tudo ? '<p class="aprova" style="text-align:center">Seven sentences, three jobs, one word.</p>' : '');
};

R.registro = function (c) {
  var r = S.reg, n = r.n, fim = n >= EVENTOS.length;
  var lista = '<div class="log vd">' + EVENTOS.map(function (e, i) { return '<div class="linha-log' + (i < n ? (e.k === 'pessoa' ? ' pessoa' : ' casa') : i === n ? ' agora' : ' oculta') + '"><time>' + e.h + '</time><span>' + (i <= n ? e.ev : '……') + '</span>' + (i < n ? '<em>' + (e.k === 'pessoa' ? 'A PERSON' : 'THE HOUSE') + '</em>' : '') + '</div>'; }).join('') + '</div>';
  var lembra = '<div class="lembrete"><small>THE HOUSE CAN’T</small>' + LIMITES.map(function (l) { return '<span>' + l.ic + ' ' + l.en + '</span>'; }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-log">' + lista + '<div class="lado-log"><div class="virada vd"><b>Seven lines the house can do. One it can’t do.</b><p>Somebody is inside.</p></div>' + lembra + '</div></div>';
  var x = EVENTOS[n];
  return cab(c) + '<div class="mesa-log">' + lista + '<div class="lado-log"><div class="tres-b">' + [['casa', 'THE HOUSE CAN DO THAT'], ['pessoa', 'THE HOUSE CAN’T DO THAT']].map(function (o) { return '<button type="button" class="pilula grande' + (r.esc === o[0] ? ' errado' : '') + '" data-a="rg" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (r.esc && r.esc !== x.k ? '<p class="recusa">Read the red list again. Can the house do that?</p>' : '<p class="dica-aluno">Read the line out loud first, with the whole sentence.</p>') + lembra + '</div></div>';
};

R.chave = function (c) {
  var k = S.chave;
  return cab(c) + '<div class="mesa-chave"><div class="foto-pia vd" style="background-image:url(' + img('pia') + ')"><span class="hora">6:00 AM</span></div><div class="lado-chave"><div class="fatos">'
    + ['Somebody washes the dishes at 3:40 AM.', 'Nothing is missing from the house.', 'The door is OK. Somebody has a key.'].map(function (f, i) { return '<div class="fato vd"><span>' + (i + 1) + '</span>' + f + '</div>'; }).join('') + '</div>'
    + fala('ch', ['It can be …', 'Somebody with a key …'], [])
    + (k.abre ? '<div class="mensagem vd"><small>MESSAGE FROM THE OWNER</small><p>“That’s my mother. She has a key. She <b>can</b> come in whenever she wants.”</p><em>And that can is the third job: permission.</em></div>' : '<div><button type="button" class="btn cheio" data-a="ch-abre">Open the owner’s message</button></div>') + '</div></div>';
};

R.venda = function (c) {
  var v = S.venda, r = v.r, fim = r >= 2;
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>TWO ROUNDS</small><h2>Nobody says cans.</h2></div></div>';
  return cab(c) + trilha([0, 1], r) + '<div class="mesa-venda"><div class="pergunta vd"><small>ROUND ' + (r + 1) + '</small><h2>' + (r === 0 ? 'Your teacher sells. You ask five questions: Can it …?' : 'You sell. Answer: Yes, it can. / No, it can’t, but …') + '</h2></div>'
    + '<div class="ideias">' + IDEIAS.map(function (x, i) { return '<button type="button" class="ideia' + (v.ideias[i] ? ' on' : '') + '" data-a="vd-i" data-n="' + i + '">' + x + '</button>'; }).join('') + '</div>'
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES_V.map(function (p) { return '<button type="button" class="chip frase' + (v.partes[p.k] ? ' on' : '') + '" data-a="vd-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (v.erro ? ' on' : '') + '" data-a="vd-e">MISTAKE: IT CANS / DOES IT CAN?</button></div>'
    + (v.erro ? '<p class="recusa">One form, no do: It can. Can it?</p>' : '') + '<div><button type="button" class="btn" data-a="vd-prox">' + (r === 0 ? 'Swap: round 2' : 'Close the sale') + '</button></div></div>';
};

R.fim = function (c) {
  var q = S.fimq, e = S.eu, ouvidos = PARTES_EU.filter(function (p) { return e.partes[p.k]; }).length, erros = ARM_EU.filter(function (p) { return e.arm[p.k]; }).map(function (p) { return p.t; });
  if (q.n < PERG_FIM.length) {
    var au = PERG_FIM[q.n];
    return cab(c) + trilha(PERG_FIM, q.n) + '<div class="foco"><div class="toca-linha vd centro"><span class="ic-g">🏠</span>' + tocar(au) + '<div>' + transcricao(au, TR[au]) + '</div></div>'
      + ((S.ouviu || {})[au] ? fala('fq' + q.n, ['I can …', 'I can’t …', 'My … can …'], []) : '') + '<div style="text-align:center"><button type="button" class="btn" data-a="fq-prox">' + (q.n < 3 ? 'Next question' : 'Now write') + '</button></div></div>';
  }
  var c2 = { est: 'w', rot: c.rot, t: 'Write about your own house.', p: 'The red line watches can. It goes to your My notes.' };
  return cab(c2) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'In my house I can …\nMy phone can …', 'Your house',
    ['I can ', 'I can’t ', 'My phone can ', 'Who can come in? ', 'can come in whenever '], ['YOU FIRST, AGAIN', 'Your four sentences from scene I' + (erros.length ? ' (heard: ' + erros.join(', ') + ')' : '') + ', and three things your phone can and can’t do.'])
    + '<div class="lado-fim"><div class="grande vd"><span>She <u>can</u> drive. Not she cans.</span><span>I <u>can</u> swim. Not can to.</span><span><u>Can</u> you…? Not do you can.</span></div>'
    + mostra('fim', 'I can cook and I can drive, but I can’t swim.<br>My phone can wake me up, but it can’t make coffee.<br>My sister can come in whenever she wants. She has a key.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['eu-p'] = function (b, n, v) { S.eu.partes[v] = !S.eu.partes[v]; };
TOQUES['eu-a'] = function (b, n, v) { S.eu.arm[v] = !S.eu.arm[v]; };
TOQUES.cs = function (b, n, v) { S.cons.r[n] = v; };
TOQUES.pn = function (b, n) { S.painel.on[n] = 1; S.painel.ult = n; };
TOQUES.nm = function (b, n, v) { S.nm.esc = v; };
TOQUES['nm-prox'] = function () { S.nm = { n: S.nm.n + 1, esc: '' }; };
TOQUES['lm-red'] = function () { var e = S.lim; if (!(S.ouviu || {})[LIMITES[e.n].au]) return false; e.red[e.n] = 1; };
TOQUES['lm-prox'] = function () { S.lim.n++; };
TOQUES['hy-acorda'] = function () { S.hey.acordou = 1; };
TOQUES['hy-prox'] = function () { S.hey = { n: S.hey.n + 1, acordou: 0 }; };
TOQUES['tr-sel'] = function (b, n) { S.tres.sel = n; S.tres.err = ''; };
TOQUES.tr = function (b, n, v) { var e = S.tres, x = TRES[e.sel]; if (!x) return false; if (v === x.k) { e.feitos[e.sel] = 1; e.sel = -1; e.err = ''; } else e.err = v; };
TOQUES.rg = function (b, n, v) { var r = S.reg, x = EVENTOS[r.n]; if (!x) return false; if (v === x.k) S.reg = { n: r.n + 1, esc: '' }; else r.esc = v; };
TOQUES['ch-abre'] = function () { S.chave.abre = 1; };
TOQUES['vd-i'] = function (b, n) { S.venda.ideias[n] = !S.venda.ideias[n]; };
TOQUES['vd-p'] = function (b, n, v) { S.venda.partes[v] = !S.venda.partes[v]; };
TOQUES['vd-e'] = function () { S.venda.erro = !S.venda.erro; };
TOQUES['vd-prox'] = function () { S.venda = { r: S.venda.r + 1, partes: {}, erro: 0, ideias: {} }; };
TOQUES['fq-prox'] = function () { S.fimq.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de naomuda.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.',
  pares: [
    { c: 'The house can open the door.', x: 'The house cans open the door.', d: 'Can never takes an S. It never changes.' },
    { c: 'The house can’t wash the dishes.', x: 'The house doesn’t can wash the dishes.', d: 'For no: can’t. Not doesn’t can.' },
    { c: 'Can the house turn on the lights?', x: 'Does the house can turn on the lights?', d: 'For a question, can goes first. No does.' },
    { c: 'I can cook dinner.', x: 'I can to cook dinner.', d: 'After can, the verb is alone: no to.' },
    { c: 'She can’t cook dinner.', x: 'She can’t cooks dinner.', d: 'After can’t, the verb has no S.' },
    { c: 'We can’t open the window.', x: 'We no can open the window.', d: 'Not no can. The word is can’t.' }
  ],
  nota: 'Can never changes: not cans, not to. For no: <b>can’t</b>. For a question: <b>Can</b> goes first. After can, the verb is clean: I can <b>cook</b>.',
  uso: { p: 'Your turn. Two things in your home: one thing it can do, and one thing it can’t do.', molde: ['My phone can …', 'My house can’t …'], ex: 'My phone can wake me up. My house can’t clean itself.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
