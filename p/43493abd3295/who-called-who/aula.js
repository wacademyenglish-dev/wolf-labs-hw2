/* ============================================================
   WHO CALLED WHO · THE ROUND TABLE · LIVE CLASS  06/10/2026
   Main series A2 · pergunta de sujeito (Who called Caio?) × de objeto
   (Who did Marina call?) · nunca as duas juntas · What happened? ×
   What did you eat?
   Erros universais: "Who did call you?", "Who you called?", "Who did
   Sara drove home?", "What did happen?".
   O MUNDO (da aula velha): dez amigos jantaram na sexta; a conta ficou
   com a Bea; na segunda ainda é dela. Seis perguntas da Bea (wc-b1–6,
   conferidas no whisper em 06/10: batem; o whisper grafou Sarah/Yuri,
   o som é Sara/Iuri). Os nomes ficam: os áudios os dizem.
   A CARA: a MESA REDONDA vista de cima — dez lugares com iniciais (sem
   rosto), setas de quem FEZ para quem RECEBEU; a pergunta põe um "?"
   numa ponta da seta. Fila: FILA-LIVE-386.md · 079.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. IV = ligar cada
   regra ao exemplo (FM.liga) e só depois a regra aparece; VI = a seta com
   o "?": o aluno FALA a pergunta e toca Check (FM.fala, a mesa redonda
   em cima, a placa no canto); VII = achar a parte quebrada de seis
   perguntas (FM.erro). I, II, III, V, VIII e IX ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'mesa' },
  { k: 'abre', est: 'o', min: 7, img: 'mesa', rot: 'I · Ten People, One Bill', t: 'Ten friends had dinner on Friday. The bill went to Bea. On Monday, it’s still hers.', p: 'Pick a card. Answer out loud. Nobody corrects you here.' },
  { k: 'setas', est: 'f', min: 6, img: 'mesa', rot: 'II · Who Did What', t: 'The group is trying to remember Friday. Every message is an arrow.', p: 'Read the message out loud. Tap the person who DID it. The arrow starts there.' },
  { k: 'duas', est: 'o', min: 7, img: 'mesa', rot: 'III · Two Questions', t: 'One arrow, two questions.', p: 'Tap the end you want to ask about. Say the question out loud.' },
  { k: 'gx', est: 'f', min: 4, img: 'mesa', rot: 'IV · Doer or Other?', t: 'Two questions about the same arrow.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new questions.' },
  { k: 'regra', est: 'f', min: 7, img: 'mesa', rot: 'V · The Rule', t: 'Doer: ask the sentence. Other one: bring in DID.', p: 'Tap a rule, then its example. Then ask one question of your own.' },
  { k: 'bea', est: 'l', min: 7, img: 'tela', rot: 'VI · Bea Asks', t: 'Bea asks. You point.', p: 'Play the question. Say it the same way. Then tap the answer on the table.' },
  { k: 'escolhe', est: 'f', min: 7, img: 'mesa', rot: 'VII · The Question Mark', t: 'The question mark sits on one end of the arrow.', p: 'Read the arrow. Say the question out loud. Then tap Check.' },
  { k: 'conserta', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'VIII · Find the Broken Part', t: 'Six questions are broken.', p: 'Find the broken part in each question. Say the fix. Then tap Check.' },
  { k: 'conta', est: 'o', min: 7, extra: 1, img: 'tela', rot: 'IX · Who Didn’t Pay?', t: 'Nine friends owe Bea money. One didn’t pay. Your teacher has Bea’s notebook.', p: 'Ask the questions. Your teacher answers. Then name the one who didn’t pay.' },
  { k: 'fim', est: 'w', min: 6, img: 'mesa', rot: 'X · The Message', t: 'Your message from scene I comes back.', p: 'Write to Caio: who did he pay, who called him, what happened? It goes to your My notes.' }
];

var TR = { 'wc-b1.mp3': 'Who called Caio?', 'wc-b2.mp3': 'Who did Caio invite?', 'wc-b3.mp3': 'Who paid the waiter?', 'wc-b4.mp3': 'Who did Sara drive home?', 'wc-b5.mp3': 'Who texted Davi?', 'wc-b6.mp3': 'Who did Iuri text?' };

var ABRE = [
  { k: 'The place', q: 'The last time you went out with a group: who chose the place?', fup: 'Was it good?', st: ['… chose the place.'], ex: 'My friend Ana chose the place. It was a pizza place.' },
  { k: 'The bill', q: 'Who paid first? And who did you sit next to?', fup: 'Did everybody pay back?', st: ['… paid first. I sat next to …'], ex: 'My brother paid first. I sat next to my cousin.' },
  { k: 'The message', q: 'Someone still owes you money. Say your message to the group.', fup: 'Who will answer first?', st: ['Hi everyone! Who …?'], ex: 'Hi everyone! Who still owes me for the pizza?' }
];
var FORMAS = [{ k: 'suj', t: 'WHO + VERB?' }, { k: 'obj', t: 'WHO DID … + VERB?' }, { k: 'whodid', t: 'WHO DID CALL YOU?', erro: 1 }, { k: 'semdid', t: 'WHO YOU CALLED?', erro: 1 }];

var LUGARES = ['Bea', 'Marina', 'Caio', 'Nina', 'Rui', 'Sara', 'Téo', 'Lia', 'Iuri', 'Davi'];
var SETAS = [
  { de: 'RUI · 9:14 AM', a: 'Marina', v: 'called', vc: 'call', b: 'Caio', fim: ' at eight.' },
  { de: 'NINA · 9:20 AM', a: 'Caio', v: 'invited', vc: 'invite', b: 'Nina', fim: '.' },
  { de: 'LIA · 9:31 AM', a: 'Bea', v: 'paid', vc: 'pay', b: 'the waiter', fim: '.' },
  { de: 'TÉO · 10:02 AM', a: 'Sara', v: 'drove', vc: 'drive', b: 'Téo', fim: ' home.' },
  { de: 'DAVI · 10:11 AM', a: 'Iuri', v: 'texted', vc: 'text', b: 'Davi', fim: ' at midnight.' },
  { de: 'BEA · 10:40 AM', a: 'Nobody', v: 'paid', vc: 'pay', b: 'Bea', fim: ' back.' }
];
var REGRA = [
  ['WHO IS THE DOER', 'The sentence is already the question.', 'Marina called Caio → Who called Caio?'],
  ['WHO IS THE OTHER ONE', 'DID comes in, the verb goes bare.', 'Who did Marina call?'],
  ['ONE PAST PER QUESTION', 'did … call, never did … called', 'Who did Sara drive home?'],
  ['NEVER BOTH', 'Who did call you? → Who called you?', 'Who called you today?'],
  ['WHAT WORKS THE SAME', 'What happened? · What did you eat?', 'What happened on Friday?']
];
var BEA = [
  { au: 'wc-b1.mp3', r: 'Marina' }, { au: 'wc-b2.mp3', r: 'Nina' }, { au: 'wc-b3.mp3', r: 'Bea' },
  { au: 'wc-b4.mp3', r: 'Téo' }, { au: 'wc-b5.mp3', r: 'Iuri' }, { au: 'wc-b6.mp3', r: 'Davi' }
];
var FATOS = ['Marina called Caio.', 'Caio invited Nina.', 'Bea paid the waiter.', 'Sara drove Téo home.', 'Iuri texted Davi.'];
/* IV · ligar a regra ao exemplo (FM.liga): a regra só aparece depois */
var LIGA_RG = { formato: 'liga', titulo: 'Match each rule to its example.', ordemDireita: [2, 0, 4, 1, 3], pares: [
  ['WHO is the doer · the start of the arrow', 'Who called Caio? · the sentence is the question'],
  ['WHO is the other one · the end of the arrow', 'Who did Marina call? · DID comes in'],
  ['After DID the verb has no past ending', 'did … drive · never did … drove'],
  ['One past per question: DID or -ed, never both', 'Who called you? · not Who did call you?'],
  ['WHAT works the same way', 'What happened? · What did you eat?']
] };
/* VI · a seta com o ? (FM.fala): o aluno fala a pergunta e toca Check */
var ESC_Q = [
  { a: 'Nina', b: 'Bea', q: 'a', pista: '<b>?</b> called Bea.', resp: 'Who <b>called</b> Bea?', depois: 'Who called YOU last night?' },
  { a: 'Marina', b: 'Caio', q: 'b', pista: 'Marina called <b>?</b>.', resp: 'Who <b>did</b> Marina <b>call</b>?', depois: 'Who did YOU call this morning?' },
  { a: 'Rui', b: 'Bea', q: 'a', pista: '<b>?</b> paid Bea back.', resp: 'Who <b>paid</b> Bea back?', depois: 'Who paid for your last dinner?' },
  { a: 'Sara', b: 'Téo', q: 'b', pista: 'Sara drove <b>?</b> home.', resp: 'Who <b>did</b> Sara <b>drive</b> home?', depois: 'Who did you drive home last time?' },
  { a: 'Iuri', b: 'Davi', q: 'b', pista: 'Iuri texted <b>?</b> at midnight.', resp: 'Who <b>did</b> Iuri <b>text</b> at midnight?', depois: 'Who did you text last night?' },
  { a: 'Caio', b: 'Nina', q: 'a', pista: '<b>?</b> invited Nina.', resp: 'Who <b>invited</b> Nina?', depois: 'Who invited you to the last party?' }
];
var PRESA_Q = 'The ? is the <b>doer</b> → no DID<br><b>Who called</b> Bea?<br>The ? is the <b>other one</b> → DID<br><b>Who did</b> Marina <b>call</b>?<br>After DID: the bare verb (call, not called)';
/* VII · achar a parte quebrada (FM.erro) */
var ERRO_Q = [
  { f: 'Who <u>did call</u> you?', r: 'called' },
  { f: 'Who <u>Marina called</u>?', r: 'did Marina call' },
  { f: 'Who did Sara <u>drove</u> home?', r: 'drive' },
  { f: 'Who <u>did pay</u> the waiter?', r: 'paid' },
  { f: 'What <u>did happen</u> on Friday?', r: 'happened' },
  { f: 'Who <u>you called</u> at midnight?', r: 'did you call' }
];
var CONTA = [
  { q: 'Who paid for the dinner?', r: 'Bea did.', de: ['Bea'], para: '' },
  { q: 'Who paid Bea on Saturday?', r: 'Nina, Téo and Lia.', de: ['Nina', 'Téo', 'Lia'], para: 'Bea' },
  { q: 'Who paid Bea on Sunday?', r: 'Davi, Sara and Iuri.', de: ['Davi', 'Sara', 'Iuri'], para: 'Bea' },
  { q: 'Who did Marina pay?', r: 'Bea, on Sunday night.', de: ['Marina'], para: 'Bea' },
  { q: 'Who paid Bea on Monday?', r: 'Rui.', de: ['Rui'], para: 'Bea' },
  { q: 'Who called Caio?', r: 'Everybody! He didn’t answer.', de: [], para: 'Caio' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, st: { n: 0, esc: '' }, du: { n: 0, ponta: '' }, bea: { esc: {} }, ct: { feitos: {}, final: '' } };

function pos(nome) { var i = LUGARES.indexOf(nome); if (i < 0) return null; var a = -Math.PI / 2 + i * 2 * Math.PI / LUGARES.length; return [300 + Math.cos(a) * 190, 210 + Math.sin(a) * 165]; }
function mesa(setas, destaque, pergunta) {
  var s = '<svg class="mesa-r" viewBox="0 0 600 420" role="img" aria-label="The round table"><defs><marker id="ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ponta-s"/></marker></defs>'
    + '<ellipse cx="300" cy="210" rx="150" ry="120" class="tampo"/><text x="300" y="205" text-anchor="middle" class="conta-t">THE BILL</text><text x="300" y="228" text-anchor="middle" class="conta-v">$ 412.00</text>';
  s += setas.map(function (x) {
    var p1 = pos(x[0]), p2 = pos(x[1]); if (!p1 || !p2) return '';
    var dx = p2[0] - p1[0], dy = p2[1] - p1[1], d = Math.sqrt(dx * dx + dy * dy), ux = dx / d, uy = dy / d;
    return '<path d="M' + (p1[0] + ux * 30).toFixed(1) + ' ' + (p1[1] + uy * 30).toFixed(1) + ' Q 300 210 ' + (p2[0] - ux * 32).toFixed(1) + ' ' + (p2[1] - uy * 32).toFixed(1) + '" class="seta' + (x[2] ? ' ' + x[2] : '') + '" marker-end="url(#ponta)"/>';
  }).join('');
  s += LUGARES.map(function (n) {
    var p = pos(n), cls = destaque && destaque[n] ? ' ' + destaque[n] : '', q = pergunta && pergunta[n];
    return '<g class="lugar' + cls + '"><circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="27"/><text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 6).toFixed(1) + '" text-anchor="middle">' + (q ? '?' : n.slice(0, 2).toUpperCase()) + '</text><text x="' + p[0].toFixed(1) + '" y="' + (p[1] + 46).toFixed(1) + '" text-anchor="middle" class="nome-l">' + n + '</text></g>';
  }).join('');
  return s + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · TEN FRIENDS · ONE BILL</span><h1>Who Called <b>Who</b></h1>'
    + '<p class="sub">Every fact is an arrow. <b>The question decides which end you ask about.</b></p>'
    + '<div class="chipsx"><span class="pilula">Who called Caio?</span><span class="pilula">Who did Marina call?</span><span class="pilula">What happened?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Follow the arrows</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + mesa([['Marina', 'Caio'], ['Caio', 'Nina'], ['Sara', 'Téo'], ['Iuri', 'Davi']], null, { Caio: 0 }) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.setas = function (c) {
  var e = S.st, n = e.n, setas = SETAS.slice(0, n).filter(function (x) { return pos(x.a) && pos(x.b); }).map(function (x) { return [x.a, x.b]; });
  if (n >= SETAS.length) return cab(c) + trilha(SETAS, n) + '<div class="mesa-c"><div class="lado-l">' + mesa(setas) + '</div><div class="lado-l"><div class="pergunta vd"><small>SIX ARROWS</small><h2>One shape every time: somebody, a verb, somebody else. And NOBODY paid Bea back.</h2></div></div></div>';
  var x = SETAS[n], ok = e.esc === 'a', dest = {}; if (pos(x.a)) dest[x.a] = ok ? 'fez' : ''; if (pos(x.b)) dest[x.b] = ok ? 'recebeu' : '';
  if (ok && pos(x.a) && pos(x.b)) setas.push([x.a, x.b, 'nova']);
  return cab(c) + trilha(SETAS, n) + '<div class="mesa-c"><div class="lado-l">' + mesa(setas, dest) + '</div><div class="lado-l"><div class="msg-g"><small>' + x.de + '</small><p>'
    + '<button type="button" class="nome-b' + (e.esc === 'a' ? ' certo' : '') + '" data-a="st" data-v="a">' + x.a + '</button> ' + x.v + ' <button type="button" class="nome-b' + (e.esc === 'b' ? ' errado' : '') + '" data-a="st" data-v="b">' + x.b + '</button>' + x.fim + '</p></div>'
    + (ok ? '<p class="aprova">' + (x.a === 'Nobody' ? 'NOBODY is the doer. That’s the problem.' : x.a + ' did it. The arrow starts at ' + x.a + ' and lands on ' + x.b + '.') + '</p><div><button type="button" class="btn" data-a="st-prox">Next message</button></div>' : e.esc === 'b' ? '<p class="recusa">That’s where the arrow lands. Who started it?</p>' : '<p class="dica-aluno">Tap the doer in the message.</p>') + '</div></div>';
};

R.duas = function (c) {
  var e = S.du, n = Math.min(e.n, SETAS.length - 2), x = SETAS[n], pq = {}, q = '';
  if (e.ponta === 'a') { pq[x.a] = 1; q = 'Who ' + x.v + ' ' + x.b + x.fim.replace('.', '') + '?'; }
  if (e.ponta === 'b') { pq[x.b] = 1; q = 'Who did ' + x.a + ' ' + x.vc + x.fim.replace('.', '') + '?'; }
  var setas = pos(x.a) && pos(x.b) ? [[x.a, x.b, 'nova']] : [];
  return cab(c) + trilha(SETAS.slice(0, 5), e.n) + '<div class="mesa-c"><div class="lado-l">' + mesa(setas, null, pq) + '</div><div class="lado-l"><div class="pede vd"><small>THE ARROW</small><b>' + x.a + ' ' + x.v + ' ' + x.b + x.fim + '</b></div>'
    + '<div class="dois-l"><button type="button" class="lado-btn' + (e.ponta === 'a' ? ' on-l' : '') + '" data-a="du" data-v="a"><b>ASK ABOUT THE START</b><small>the doer</small></button><button type="button" class="lado-btn' + (e.ponta === 'b' ? ' on-l' : '') + '" data-a="du" data-v="b"><b>ASK ABOUT THE END</b><small>the other one</small></button></div>'
    + (q ? '<div class="balao vd"><p>' + q + '</p></div><p class="aprova">' + (e.ponta === 'a' ? 'The doer: the sentence is already the question. Nothing moves.' : 'The other one: DID comes in, and the verb goes bare: ' + x.vc + '.') + ' Now ask the other one too.</p>' : '')
    + (n < 4 ? '<div><button type="button" class="btn" data-a="du-prox">Next arrow</button></div>' : '<p class="aprova">Two questions, one arrow. DID is the whole difference.</p>') + '</div></div>';
};

R.regra = function (c) {
  var e = ((S.fq || {}).rg || {}).par || {}, todos = LIGA_RG.pares.every(function (p, i) { return e[i] === i; });
  return cab(c) + FM.ex('rg', LIGA_RG)
    + (todos ? '<div class="regras-w">' + REGRA.map(function (r, i) { return '<div class="regra-w' + (i === 1 ? ' obj' : i === 0 ? ' suj' : '') + '"><small>' + r[0] + '</small><b>' + r[1] + '</b><em>' + r[2] + '</em></div>'; }).join('') + '</div>'
      + '<div class="foco">' + fala('rg', ['Who …? / Who did … ?'], ['Who called…?', 'Who did … call?', 'What happened?']) + '</div>'
      : '<p class="dica-aluno" style="text-align:center">Think about the arrow: is WHO the start of it, or the end?</p>');
};

R.bea = function (c) {
  var e = S.bea, n = Math.min(e.n || 0, BEA.length - 1), x = BEA[n], setas = FATOS.map(function (f) { var w = f.replace('.', '').split(' '); return [w[0], w[2]]; });
  var ouviu = (S.ouviu || {})[x.au], esc = e.esc[n], ok = esc === x.r, dest = {}; if (ok) dest[x.r] = 'fez';
  return cab(c) + trilha(BEA, e.n || 0) + '<div class="mesa-c"><div class="lado-l">' + mesa(setas, dest) + '<div class="fatos-l">' + FATOS.map(function (f) { return '<span>' + f + '</span>'; }).join('') + '</div></div><div class="lado-l">'
    + '<div class="bea-q vd"><div class="toca-linha">' + tocar(x.au) + '<b>BEA · QUESTION ' + (n + 1) + ' OF 6</b></div>'
    + (ouviu ? '<p class="dica-aluno">Say her question the same way. Then tap the answer.</p><div class="tres-b">' + LUGARES.filter(function (nm) { return nm !== 'Rui' && nm !== 'Lia'; }).map(function (nm) { return '<button type="button" class="pilula grande-p' + (esc === nm ? (ok ? ' certo' : ' errado') : '') + '" data-a="bea" data-n="' + n + '" data-v="' + nm + '">' + nm + '</button>'; }).join('') + '</div>' : '<p class="transcricao vazia">Play it first.</p>')
    + (ok ? '<p class="aprova">' + x.r + '. ' + (/ did /.test(TR[x.au]) ? 'DID: she asked about the other one, the end of the arrow.' : 'No DID: she asked about the doer, the start of the arrow.') + '</p>' + transcricao(x.au, TR[x.au], 'bea' + n) : esc ? '<p class="recusa">Listen again. Start of the arrow, or the end?</p>' : '') + '</div>'
    + (ok && n < BEA.length - 1 ? '<div><button type="button" class="btn" data-a="bea-prox">Next question</button></div>' : ok ? '<p class="aprova">The last two were the same fact, and not the same answer.</p>' : '') + '</div></div>';
};

R.escolhe = function (c) {
  return cab(c) + FM.fala('ec', ESC_Q.map(function (x) { return { pista: x.pista, resp: x.resp, depois: x.depois }; }), {
    rotulo: 'Arrow', prox: 'Next arrow', regra: PRESA_Q, diga: 'Say the question out loud first',
    fim: 'Six question marks, six questions. Now ask your teacher one of them for real.',
    lado: function (feitas, atual, ver) {
      var x = ESC_Q[atual < 0 ? 0 : atual], pq = {};
      if (atual >= 0 && !ver) pq[x.q === 'a' ? x.a : x.b] = 1;
      var setas = atual < 0 ? ESC_Q.map(function (y) { return [y.a, y.b]; }) : [[x.a, x.b, 'nova']];
      return '<div class="ec-mesa">' + mesa(setas, atual >= 0 && ver ? (function () { var d = {}; d[x.a] = 'fez'; d[x.b] = 'recebeu'; return d; })() : null, pq) + '</div>';
    } });
};

R.conserta = function (c) {
  return cab(c) + FM.ex('cs', { formato: 'erro', titulo: 'Six questions are broken. Find the broken part. Say the fix.', itens: ERRO_Q, regra: PRESA_Q });
};

R.conta = function (c) {
  var e = S.ct, setas = [];
  CONTA.forEach(function (x, i) { if (!e.feitos[i]) return; if (x.para && x.de.length) x.de.forEach(function (d) { setas.push([d, x.para]); }); if (!x.de.length) LUGARES.forEach(function (l) { if (l !== 'Caio') setas.push([l, 'Caio', 'fina']); }); });
  var todas = Object.keys(e.feitos).length >= CONTA.length, ok = e.final === 'Caio';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + mesa(setas, ok ? { Caio: 'culpado' } : null) + '</div><div class="lado-l"><h5 class="rot-ouve">BEA’S NOTEBOOK · YOU ASK, YOUR TEACHER ANSWERS</h5><div class="caderno">'
    + CONTA.map(function (x, i) { var f = e.feitos[i]; return '<div class="linha-c' + (f ? ' feita' : '') + '"><b>' + x.q + '</b>' + (f ? '<em>' + x.r + '</em>' : '<span class="so-prof">' + x.r + '</span><button type="button" class="chip" data-a="ct" data-n="' + i + '">Answered</button>') + '</div>'; }).join('') + '</div>'
    + (todas ? '<div class="final-c vd"><b>So who didn’t pay Bea?</b>' + ['Rui', 'Caio', 'Marina'].map(function (o) { return '<button type="button" class="pilula' + (e.final === o ? (o === 'Caio' ? ' certo' : ' errado') : '') + '" data-a="ct-f" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
      + (ok ? '<p class="aprova">Caio. Everybody called him, and he didn’t answer. Case closed. Now write to Caio.</p>' : e.final ? '<p class="recusa">Look at the arrows. Who never sent one to Bea?</p>' : '') : '') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Hi Caio!\nWho did you pay?\nWho called you on Friday?\nWhat happened?', 'Your message to Caio',
    ['Hi Caio! ', 'Who did you ', 'Who called ', 'What happened?', 'Who paid '], ['WRITE TO CAIO', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now ask about both ends of the arrow.' : 'Ask about both ends of the arrow: the doer and the other one.'])
    + '<div class="lado-fim"><div class="grande vd"><span><u>Who called</u> Caio? (the doer)</span><span><u>Who did</u> Marina <u>call</u>? (the other one)</span><span><u>What happened</u>? · never <s>who did call</s></span></div>'
    + mostra('fim', 'Hi Caio! Everybody paid Bea. Who did you pay?<br>Who called you on Friday? Nina says she did.<br>What happened? Please call Bea!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.st = function (b, n, v) { S.st.esc = v; };
TOQUES['st-prox'] = function () { S.st = { n: S.st.n + 1, esc: '' }; };
TOQUES.du = function (b, n, v) { S.du.ponta = v; };
TOQUES['du-prox'] = function () { S.du = { n: S.du.n + 1, ponta: '' }; };
TOQUES.bea = function (b, n, v) { S.bea.esc[n] = v; };
TOQUES['bea-prox'] = function () { S.bea.n = (S.bea.n || 0) + 1; };
TOQUES.ct = function (b, n) { S.ct.feitos[n] = 1; };
TOQUES['ct-f'] = function (b, n, v) { S.ct.final = v; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'Same arrow, two questions. Who is the question?',
  a: { t: 'The doer is the question', falas: [['Bea', 'Somebody called Caio on Friday.'], ['You', '<mark>Who called</mark> Caio?']], d: 'You ask about the person who DID it. Ask like a sentence: Who called. No did.' },
  b: { t: 'The other one is the question', falas: [['Bea', 'Marina called somebody on Friday.'], ['You', '<mark>Who did</mark> Marina <mark>call</mark>?']], d: 'You ask about the person who RECEIVED it. Bring in did: Who did Marina call? The verb is clean.' },
  pergunta: 'Same dinner, two questions. What is different?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'Sara drove somebody home. You ask about the person who got a ride:', o: ['Who did Sara drive home?', 'Who drove Sara home?'], c: 0, d: 'Sara is the doer. The question is the other one: did.' },
    { p: 'Somebody paid the bill. You ask who:', o: ['Who paid the bill?', 'Who did pay the bill?'], c: 0, d: 'The doer is the question: no did.' },
    { p: 'Iuri ate something. You ask what:', o: ['What did Iuri eat?', 'What ate Iuri?'], c: 0, d: 'Iuri did it. Ask about the thing: did.' },
    { p: 'Something happened at dinner. You ask what:', o: ['What happened at dinner?', 'What did happen at dinner?'], c: 0, d: 'happened is the doer: no did.' }
  ],
  nota: 'If the question word is the one who <b>did</b> it: ask like a sentence, <b>Who called Caio?</b> If the question word is the other end of the arrow: bring in <b>did</b>, <b>Who did Marina call?</b>',
  uso: { p: 'Your turn. Something that happened at a party. One question about the doer, one about the other one.', molde: ['Who …ed …?', 'Who did … …?'], ex: 'Who brought the cake? Who did Paulo invite?' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_isso', GX_EXPLICA); };
