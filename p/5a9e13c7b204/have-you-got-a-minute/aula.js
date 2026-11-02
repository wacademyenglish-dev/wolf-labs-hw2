/* ============================================================
   HAVE YOU GOT A MINUTE? · THE COAT POCKETS · LIVE CLASS  05/10/2026
   Main series A1 · have got: I've got / she's got · Have you got…?
   (sem DO) · Yes, I have / No, I haven't · have got para família, dor,
   tempo, planos
   O MUNDO: um casaco pendurado com seis bolsos fechados. Um bolso só
   abre com a pergunta certa (Have you got … in this pocket?) e responde
   do jeito curto. Depois o aluno monta frases com uma peça que sobra, e
   o professor confere a mala de viagem dele (e vice-versa).
   Mantidos da aula antiga: os 4 áudios (g1–g4, conferidos no
   faster-whisper), as três fotos, as seis linhas "ninguém diz isso", o
   kit de viagem. Fila: FILA-LIVE-386.md · 008.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. II = ligar a situação
   ao que as pessoas dizem (FM.liga); III = os três cartões e depois achar a
   parte quebrada de quatro linhas (FM.erro); IV = separar a pessoa em ’VE
   got ou ’S got (FM.separa). As outras ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'casaco' },
  { k: 'bolsa', est: 'o', min: 7, img: 'bolsa', rot: 'I · Your Bag', t: 'Before the coat: your bag.', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'duas', est: 'f', min: 6, img: 'casaco', rot: 'II · What People Say', t: 'Six situations. What do people really say?', p: 'Read the situation. Tap it, then tap what people say. Then say each line out loud.' },
  { k: 'regra', est: 'f', min: 7, img: 'casaco', rot: 'III · One Helper', t: 'HAVE GOT is HAVE, in everyday English.', p: 'Read the cards out loud. Then find the broken part in each line. Say the fix. Tap Check.' },
  { k: 'curta', est: 'o', min: 6, img: 'casaco', rot: 'IV · The Short Way', t: '’VE for most people. ’S for one at a time.', p: 'Tap a person, then tap its box: ’VE got or ’S got. Then say it fast.' },
  { k: 'ouve', est: 'l', min: 7, img: 'cozinha', rot: 'V · Two Words or Three', t: 'Four lines at normal speed.', p: 'Play it. HAVE, or HAVE GOT? Then the transcript opens.' },
  { k: 'bolsos', est: 'o', min: 7, img: 'casaco', rot: 'VI · The Coat', t: 'Six pockets. Something is in each one.', p: 'Pick a pocket. Ask about one thing: Have you got … in this pocket? The pocket answers the short way.' },
  { k: 'sobra', est: 'f', min: 6, extra: 1, img: 'casaco', rot: 'VII · The Word Left Over', t: 'Build it. One word in the tray isn’t needed.', p: 'Say the sentence first. Then tap the words in order. The extra word stays behind.' },
  { k: 'mala', est: 'o', min: 7, extra: 1, img: 'bolsa', rot: 'VIII · The Travel Check', t: 'Tomorrow you travel. Your teacher checks your bag.', p: 'Your teacher asks: Have you got …? Answer the short way. Then you check your teacher’s bag.' },
  { k: 'coisa', est: 'f', min: 6, extra: 1, img: 'cozinha', rot: 'IX · Not Only Things', t: 'A brother, a headache, no time.', p: 'Read it out loud. Then say what kind of thing it is.' },
  { k: 'voce', est: 'o', min: 7, extra: 1, img: 'cozinha', rot: 'X · About You', t: 'Five questions. They all start the same way.', p: 'Answer the short way first. Then say more.' },
  { k: 'fim', est: 'w', min: 6, img: 'bolsa', rot: 'XI · My Bag', t: 'What have you got in your bag, your pockets, your life?', p: 'Write five lines with I’ve got and I haven’t got. The red line watches the helpers. It goes to your My notes.' }
];

var BOLSA = [
  { k: 'YOUR BAG', q: 'What’s in your bag right now? Three things.', fup: 'And one thing you need today that isn’t in it?', st: ['I’ve got …', 'I haven’t got …'], ex: 'I’ve got my keys, my phone and a book. I haven’t got an umbrella!' },
  { k: 'YOUR POCKETS', q: 'What have you got in your pockets?', fup: 'Is that normal for you?', st: ['I’ve got …', 'Nothing!'], ex: 'I’ve got my phone and some coins.' },
  { k: 'YOUR FAMILY', q: 'Have you got any brothers or sisters?', fup: 'Where do they live?', st: ['Yes, I have. I’ve got …', 'No, I haven’t.'], ex: 'Yes, I have. I’ve got a sister in São Paulo.' },
  { k: 'TODAY', q: 'Have you got any plans tonight?', fup: 'What time?', st: ['Yes, I have. I’ve got …', 'No, I haven’t.'], ex: 'Yes, I have. I’ve got a dinner with friends at eight.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* II · ligar a situação ao que as pessoas dizem (todas as frases à direita são inglês de verdade) */
var LIGA_DUAS = { formato: 'liga', titulo: 'Match each situation to what people say. Then say each line out loud.', ordemDireita: [3, 0, 4, 1, 5, 2], pares: [
  ['You want to know if your friend owns a car.', 'Have you got a car?'],
  ['You are busy. No time!', 'I haven’t got time.'],
  ['Somebody asks: Have you got a pen? You have one.', 'Yes, I have.'],
  ['Your sister has two kids.', 'She’s got two kids.'],
  ['You want to know if Anna has a bike.', 'Has Anna got a bike?'],
  ['Your friends have a big house.', 'They’ve got a big house.']
] };
/* III · achar a parte quebrada (os cartões da regra ficam em cima) */
var ERRO_G = { formato: 'erro', titulo: 'Four lines are broken. Find the broken part. Say the fix.', itens: [
  { f: '<u>Do you have got</u> a car?', r: 'Have you got' },
  { f: 'I <u>don’t have got</u> time.', r: 'haven’t got' },
  { f: 'Have you got a pen? Yes, I <u>got</u>.', r: 'have' },
  { f: 'I <u>have got not</u> a pen.', r: 'haven’t got' }
] };
/* IV · separar a pessoa em ’VE ou ’S */
var SEP_CURTA = { formato: 'separa', titulo: 'Tap a person. Then tap its box.', caixas: ['’VE got · I, you, we, they', '’S got · he, she, it'], itens: [
  { t: 'she', c: 1 }, { t: 'they', c: 0 }, { t: 'my brother', c: 1 }, { t: 'I', c: 0 }, { t: 'my parents', c: 0 }, { t: 'the dog', c: 1 }
] };
var OUVE = [
  { au: 'g1.mp3', t: 'I’ve got a brother in Lisbon.', k: 1, pq: 'The clue is the T of GOT.' },
  { au: 'g2.mp3', t: 'I have a brother in Lisbon.', k: 0, pq: 'Nothing after HAVE.' },
  { au: 'g3.mp3', t: 'She’s got two kids.', k: 1, pq: '’S is HAS, and GOT tells you so.' },
  { au: 'g4.mp3', t: 'She has two kids.', k: 0, pq: 'The full word HAS, and no GOT.' }
];

/* VI · os bolsos: o que tem em cada um (fixo) */
var BOLSOS = ['keys', 'a ticket', 'coins', 'a pen', 'gloves', 'a phone'];
var PALPITES = ['keys', 'a ticket', 'coins', 'a pen', 'gloves', 'a phone', 'a map', 'an apple'];
var ICONE = { keys: '🔑', 'a ticket': '🎫', coins: '🪙', 'a pen': '🖊️', gloves: '🧤', 'a phone': '📱', 'a map': '🗺️', 'an apple': '🍎' };

var SOBRA = [
  { sit: 'Ask if he owns a car.', alvo: ['Have', 'you', 'got', 'a', 'car?'], sobra: 'Do' },
  { sit: 'Say you are busy.', alvo: ['I', 'haven’t', 'got', 'time.'], sobra: 'don’t' },
  { sit: 'Ask if your sister has children.', alvo: ['Has', 'she', 'got', 'kids?'], sobra: 'Does' },
  { sit: 'Answer: yes, you have one.', alvo: ['Yes,', 'I', 'have.'], sobra: 'got' }
];

var MALA = ['your passport', 'your ticket', 'a charger', 'an umbrella', 'some money', 'sunglasses', 'a toothbrush', 'a jacket'];
var MALA_ICO = ['🛂', '🎫', '🔌', '☂️', '💵', '🕶️', '🪥', '🧥'];
var PERG_ALUNO = ['Ask about your teacher’s passport.', 'Ask about your teacher’s charger.', 'Ask if your teacher has got time for a coffee.'];
var PARTES = [{ k: 'q', t: 'HAVE YOU GOT …?' }, { k: 'curta', t: 'YES, I HAVE / NO, I HAVEN’T' }];

var COISA = [
  { fr: 'I’ve got a brother in Lisbon.', k: 'family' }, { fr: 'She’s got a headache.', k: 'illness' }, { fr: 'We’ve got a meeting at four.', k: 'a plan' },
  { fr: 'He’s got blue eyes.', k: 'how someone looks' }, { fr: 'I haven’t got ten minutes.', k: 'time' }, { fr: 'They’ve got a problem with the car.', k: 'trouble' }
];
var ROTULOS = ['family', 'illness', 'a plan', 'how someone looks', 'time', 'trouble'];

var VOCE = [
  { q: 'Have you got any brothers or sisters?', fup: 'What are their names?', st: ['Yes, I have. I’ve got …', 'No, I haven’t.'], ex: 'Yes, I have. I’ve got two brothers, Leo and Caio.' },
  { q: 'Have you got a favorite cup at home?', fup: 'What color is it?', st: ['Yes, I have. It’s …'], ex: 'Yes, I have. It’s a big blue cup from Lisbon.' },
  { q: 'Have you got plans for Saturday?', fup: 'With who?', st: ['Yes, I have. I’ve got …', 'No, I haven’t.'], ex: 'Yes, I have. I’ve got a barbecue with my family.' },
  { q: 'Has your best friend got a pet?', fup: 'What’s its name?', st: ['Yes, she has.', 'No, he hasn’t.'], ex: 'Yes, she has. She’s got a cat called Pipoca.' },
  { q: 'Have you got five minutes after class?', fup: 'Why not?', st: ['Yes, I have.', 'No, I haven’t, because …'], ex: 'No, I haven’t, because I’ve got another meeting.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  bolsa: { sel: -1, foi: {} }, duas: { sel: -1, feitos: {}, err: '' }, curta: { n: 0, esc: -1 }, ouve: { n: 0, esc: -1 },
  bolsos: { sel: -1, tent: {}, aberto: {} }, sobra: { n: 0, poe: [], err: '' }, mala: { sel: -1, resp: {}, vira: 0, perg: {}, partes: {}, erro: 0 },
  coisa: { sel: -1, feitos: {}, err: '' }, voce: { n: 0, foi: {} } };

function casaco(e) {
  var pos = [[96, 196], [204, 196], [96, 276], [204, 276], [96, 346], [204, 346]];
  return '<svg class="casaco-svg" viewBox="0 0 300 440" role="img" aria-label="A coat with six pockets"><path d="M150 18 q-10 -14 0 -16 q10 2 0 16" class="gancho"/><path d="M90 40 L150 30 L210 40" class="cabide"/>'
    + '<path d="M96 38 L150 54 L204 38 L262 80 L282 300 L246 306 L240 170 L244 430 L56 430 L60 170 L54 306 L18 300 L38 80 Z" class="corpo"/>'
    + '<path d="M96 38 L150 110 L204 38 L190 34 L150 86 L110 34 Z" class="gola"/><path d="M150 110 L150 430" class="costura"/>'
    + pos.map(function (p, i) {
      var ab = e.aberto[i], on = e.sel === i;
      return '<g class="bolso' + (on ? ' on' : '') + (ab ? ' aberto' : '') + '" data-a="bs-sel" data-n="' + i + '"><rect x="' + (p[0] - 40) + '" y="' + (p[1] - 24) + '" width="80" height="54" rx="8" class="fundo"/>'
        + (ab ? '<text x="' + p[0] + '" y="' + (p[1] + 14) + '" class="item">' + ICONE[BOLSOS[i]] + '</text>' : '') + '<path d="M' + (p[0] - 42) + ' ' + (p[1] - 24) + ' h84 v' + (ab ? 6 : 18) + ' q-42 ' + (ab ? 6 : 14) + ' -84 0 Z" class="aba"/><circle cx="' + p[0] + '" cy="' + (p[1] - 8 + (ab ? -8 : 0)) + '" r="4" class="botao"/><text x="' + p[0] + '" y="' + (p[1] + 40) + '" class="num">' + (i + 1) + '</text></g>';
    }).join('') + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE COAT POCKETS · A1</span><h1>Have You Got <b>a Minute?</b></h1>'
    + '<p class="sub">Six closed pockets, and every one opens with the same words.</p>'
    + '<div class="chipsx"><span class="pilula">I’ve got · she’s got</span><span class="pilula">Have you got …?</span><span class="pilula">Yes, I have · No, I haven’t</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the coat</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('casaco') + '" alt="A dark coat and a red scarf on a hook"><div class="placa-capa"><small>SIX POCKETS</small><b>Have you got…?</b><span>ONE QUESTION</span></div></div></div>';
};
R.bolsa = function (c) { return cartasPessoais(c, BOLSA, S.bolsa, 'bolsa'); };

R.duas = function (c) {
  var par = ((S.fq || {}).duas || {}).par || {}, todos = LIGA_DUAS.pares.every(function (p, i) { return par[i] === i; });
  return cab(c) + '<div class="foco">' + FM.ex('duas', LIGA_DUAS)
    + (todos ? '<p class="aprova" style="text-align:center">People say HAVE once: Have you got…? I haven’t got… One helper per sentence.</p>' : '') + '</div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="cartoes">'
    + '<div class="cr vd"><small>1 · THE SPOKEN WAY</small><h3>I<em>’ve got</em> · she<em>’s got</em></h3><div class="ex"><span><u>Have</u> you got a brother?</span><span>No DO: HAVE is the helper.</span></div></div>'
    + '<div class="cr vd"><small>2 · THE NO</small><h3>I <em>haven’t got</em></h3><div class="ex"><span>I <u>haven’t got</u> a car.</span></div></div>'
    + '<div class="cr vd"><small>3 · THE SHORT ANSWER</small><h3><em>Yes, I have.</em> · <em>No, she hasn’t.</em></h3><div class="ex"><span>Repeat the helper, never GOT.</span></div></div></div>'
    + FM.ex('erro', ERRO_G);
};

R.curta = function (c) {
  var em = ((S.fq || {}).curta || {}).em || {}, todos = SEP_CURTA.itens.every(function (x, i) { return em[i] === x.c; });
  return cab(c) + '<div class="foco">' + FM.ex('curta', SEP_CURTA)
    + (todos ? '<p class="aprova" style="text-align:center">Now say all six, fast: <b>She’s got a dog. They’ve got two cars…</b> Then answer short: Has she got a bike? No, she hasn’t.</p>' : '<p class="dica-aluno" style="text-align:center">One person: ’s got. More than one, or I / you: ’ve got.</p>') + '</div>';
};

R.ouve = function (c) {
  var o = S.ouve, n = o.n, fim = n >= OUVE.length, x = OUVE[Math.min(n, OUVE.length - 1)];
  if (fim) return cab(c) + trilha(OUVE, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR LINES</small><h2>The difference is one small sound: the T of GOT.</h2></div></div>';
  var ouviu = (S.ouviu || {})[x.au], certo = o.esc === x.k;
  return cab(c) + trilha(OUVE, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (certo ? '“' + x.t + '”' : (ouviu ? 'HAVE, or HAVE GOT?' : 'Play it. Ears only.')) + '</span></div>'
    + '<div class="dois-b">' + ['HAVE', 'HAVE GOT'].map(function (t, k) { return '<button type="button" class="escolha-b' + (o.esc === k ? (k === x.k ? ' certo' : ' errado') : '') + '" data-a="ov" data-n="' + k + '"' + (ouviu && !certo ? '' : ' disabled') + '>' + t + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.pq + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ov-prox">Next line</button></div>' : (o.esc >= 0 ? '<p class="recusa" style="text-align:center">Play it again. Listen for a T after the little word.</p>' + mostra('ov' + n, x.t) : '')) + '</div>';
};

R.bolsos = function (c) {
  var e = S.bolsos, n = e.sel, tent = n >= 0 ? (e.tent[n] || {}) : {}, todos = BOLSOS.every(function (_, i) { return e.aberto[i]; });
  var ultimo = n >= 0 ? e.ult : '';
  var lado;
  if (n < 0) lado = '<p class="dica-aluno">Pick a pocket.</p>';
  else if (e.aberto[n]) lado = '<div class="resposta-bolso vd sim"><small>POCKET ' + (n + 1) + '</small><b>Yes, I have.</b><p>' + ICONE[BOLSOS[n]] + ' I’ve got ' + BOLSOS[n] + ' in this pocket.</p></div>';
  else lado = '<div class="pergunta vd"><small>POCKET ' + (n + 1) + '</small><h2>Have you got … in this pocket?</h2></div><div class="palpites">' + PALPITES.map(function (p) {
      return '<button type="button" class="palpite' + (tent[p] ? ' nao' : '') + '" data-a="bs" data-v="' + p + '"' + (tent[p] ? ' disabled' : '') + '><i>' + ICONE[p] + '</i>' + p + '</button>'; }).join('') + '</div>'
    + (ultimo && tent[ultimo] ? '<div class="resposta-bolso vd nao"><b>No, I haven’t.</b><p>I haven’t got ' + ultimo + ' in this pocket.</p></div>' : '<p class="dica-aluno">Ask out loud first. Your teacher taps what you asked.</p>');
  return cab(c) + '<div class="mesa-bolsos"><div class="casaco-box vd">' + casaco(e) + '</div><div class="lado-bolsos">' + lado + (todos ? '<p class="aprova">Six pockets open, and every one opened with the same question.</p>' : '') + '</div></div>';
};

R.sobra = function (c) {
  var o = S.sobra, n = o.n, fim = n >= SOBRA.length, x = SOBRA[Math.min(n, SOBRA.length - 1)];
  if (fim) return cab(c) + trilha(SOBRA, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR SENTENCES</small><h2>The word left over is never needed.</h2></div></div>';
  var pronto = o.poe.length === x.alvo.length, pecas = x.alvo.concat([x.sobra]);
  var soltas = ordem(pecas.map(function (w, i) { return [w, i]; }), n + 2).filter(function (p) { return o.poe.indexOf(p[1]) < 0; });
  return cab(c) + trilha(SOBRA, n) + '<div class="foco"><div class="pergunta vd"><small>THE SITUATION</small><h2>' + x.sit + '</h2></div><div class="montada vd' + (pronto ? ' pronta' : '') + '">' + (o.poe.length ? o.poe.map(function (i) { return '<span>' + pecas[i] + '</span>'; }).join('') : '<em>…</em>') + '</div>'
    + (pronto ? '<p class="aprova" style="text-align:center">GOT IT. <b>' + x.alvo.join(' ') + '</b> And <s>' + x.sobra + '</s> stays in the tray.</p><div style="text-align:center"><button type="button" class="btn" data-a="sb-prox">Next</button></div>'
      : '<div class="pecas-o">' + soltas.map(function (p) { return '<button type="button" class="peca-o' + (o.err === p[0] ? ' treme' : '') + '" data-a="sb" data-n="' + p[1] + '">' + p[0] + '</button>'; }).join('') + '</div>' + (o.err ? '<p class="recusa" style="text-align:center">That word isn’t next. ' + (o.err === x.sobra ? 'Maybe it isn’t needed at all!' : 'Read from the start again.') + '</p>' + mostra('sb' + n, x.alvo.join(' ')) : '')) + '</div>';
};

R.mala = function (c) {
  var m = S.mala;
  if (m.vira) {
    var pt = m.partes;
    return cab(c) + '<div class="foco"><div class="pergunta vd"><small>NOW YOU CHECK YOUR TEACHER</small><h2>Three questions. Start with HAVE.</h2></div><div class="perg-aluno">' + PERG_ALUNO.map(function (q, i) { return '<button type="button" class="chip frase' + (m.perg[i] ? ' on' : '') + '" data-a="ml-pg" data-n="' + i + '">' + q + '</button>'; }).join('') + '</div>'
      + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="ml-parte" data-v="' + p.k + '">' + p.t + '</button>'; }).join('') + '<button type="button" class="chip frase erro-ouvido' + (m.erro ? ' on' : '') + '" data-a="ml-erro">MISTAKE HEARD: Yes, I got / Do you have got</button></div>'
      + (m.erro ? '<p class="recusa">Yes, I HAVE. And the question needs no DO: Have you got …?</p>' : '') + mostra('mlv', 'Have you got your passport? Have you got your charger? Have you got time for a coffee?', 1) + '</div>';
  }
  var x = m.sel >= 0 ? MALA[m.sel] : null;
  var itens = '<div class="mala vd">' + MALA.map(function (it, i) {
    var r = m.resp[i];
    return '<button type="button" class="item-m' + (m.sel === i ? ' on' : '') + (r === 1 ? ' sim' : r === 0 ? ' nao' : '') + '" data-a="ml-sel" data-n="' + i + '"><i>' + MALA_ICO[i] + '</i><span>' + it + '</span><b>' + (r === 1 ? '✓' : r === 0 ? '✗' : '') + '</b></button>';
  }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd"><small>YOUR TEACHER ASKS</small><h2>Have you got ' + x + '?</h2></div><div class="dois-b"><button type="button" class="escolha-b' + (m.resp[m.sel] === 1 ? ' certo' : '') + '" data-a="ml-r" data-n="1">Yes, I have.</button><button type="button" class="escolha-b' + (m.resp[m.sel] === 0 ? ' certo' : '') + '" data-a="ml-r" data-n="0">No, I haven’t.</button></div><p class="dica-aluno">Say it out loud first. Then tap what you said.</p>'
    : '<p class="dica-aluno">Your teacher picks a thing and asks.</p>';
  var tudo = MALA.every(function (_, i) { return m.resp[i] != null; });
  return cab(c) + '<div class="mesa-mala">' + itens + '<div class="lado-mala">' + lado + (tudo ? '<p class="aprova">Eight things checked. Ready to go!</p><div><button type="button" class="btn cheio" data-a="ml-vira">Now check your teacher</button></div>' : '') + '</div></div>';
};

R.coisa = function (c) {
  var e = S.coisa, x = e.sel >= 0 ? COISA[e.sel] : null;
  return cab(c) + '<div class="mesa-coisa"><div class="frases-c">' + COISA.map(function (p, i) { return '<button type="button" class="frase-c' + (e.sel === i ? ' on' : '') + (e.feitos[i] ? ' feito' : '') + '" data-a="cs-sel" data-n="' + i + '">' + p.fr + (e.feitos[i] ? '<small>' + p.k + '</small>' : '') + '</button>'; }).join('') + '</div>'
    + '<div class="lado-coisa">' + (x ? '<div class="pergunta vd"><small>READ IT OUT LOUD</small><h2>' + x.fr + '</h2></div><div class="rotulos">' + ROTULOS.map(function (r) { return '<button type="button" class="chip frase' + (e.err === r ? ' errado' : '') + (e.feitos[e.sel] && x.k === r ? ' on' : '') + '" data-a="cs" data-v="' + h(r) + '">' + r + '</button>'; }).join('') + '</div>'
      + (e.err ? '<p class="recusa">Read it again. If it isn’t an object, what is it?</p>' : '') : '<p class="dica-aluno">Pick a sentence.</p>')
    + (Object.keys(e.feitos).length === COISA.length ? '<p class="aprova">Six sentences, and nobody owned anything.</p>' : '') + '</div></div>';
};

R.voce = function (c) { return sequencia(c, VOCE, S.voce, 'voce', 'Five answers, and none of them needed DO.'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'In my bag I’ve got my keys and a book.\nI haven’t got an umbrella.\nI’ve got a sister in …', 'My bag, my life',
    ['I’ve got ', 'I haven’t got ', 'She’s got ', 'He’s got ', 'We’ve got '], ['MY BAG, MY LIFE', 'Five lines: your bag, your family, a plan, something you haven’t got.'])
    + '<div class="lado-fim"><div class="grande vd"><span><u>Have</u> you got a minute?</span><span><u>Yes, I have.</u> · <u>No, I haven’t.</u></span><small>One helper per sentence. Where GOT is, DO stays out.</small></div>'
    + mostra('fim', 'In my bag I’ve got my keys, my phone and a small book.<br>I haven’t got an umbrella, and it’s raining!<br>I’ve got a brother in Recife. He’s got two kids.<br>We’ve got a family lunch on Sunday.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.ov = function (b, n) { S.ouve.esc = n; };
TOQUES['ov-prox'] = function () { S.ouve = { n: S.ouve.n + 1, esc: -1 }; };
TOQUES['bs-sel'] = function (b, n) { S.bolsos.sel = n; S.bolsos.ult = ''; };
TOQUES.bs = function (b, n, v) { var e = S.bolsos, i = e.sel; if (i < 0 || e.aberto[i]) return false; if (v === BOLSOS[i]) e.aberto[i] = 1; else { e.tent[i] = e.tent[i] || {}; e.tent[i][v] = 1; } e.ult = v; };
TOQUES.sb = function (b, n) { var o = S.sobra, x = SOBRA[o.n], pecas = x.alvo.concat([x.sobra]); if (pecas[n] === x.alvo[o.poe.length]) { o.poe.push(n); o.err = ''; } else o.err = pecas[n]; };
TOQUES['sb-prox'] = function () { S.sobra = { n: S.sobra.n + 1, poe: [], err: '' }; };
TOQUES['ml-sel'] = function (b, n) { S.mala.sel = n; };
TOQUES['ml-r'] = function (b, n) { S.mala.resp[S.mala.sel] = n; };
TOQUES['ml-vira'] = function () { S.mala.vira = 1; };
TOQUES['ml-pg'] = function (b, n) { S.mala.perg[n] = !S.mala.perg[n]; };
TOQUES['ml-parte'] = function (b, n, v) { S.mala.partes[v] = !S.mala.partes[v]; };
TOQUES['ml-erro'] = function () { S.mala.erro = !S.mala.erro; };
TOQUES['cs-sel'] = function (b, n) { S.coisa.sel = n; S.coisa.err = ''; };
TOQUES.cs = function (b, n, v) { var e = S.coisa, x = COISA[e.sel]; if (!x) return false; if (v === x.k) { e.feitos[e.sel] = 1; e.err = ''; } else e.err = v; };
