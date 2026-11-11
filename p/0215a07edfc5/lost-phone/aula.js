/* ============================================================
   THE LOST PHONE · THE LOCK SCREEN · LIVE CLASS  05/10/2026
   Main series A1 · like / love / hate + -ing · like it / them · doesn't like
   O MUNDO: um celular esquecido no ônibus das 8:15, sem nome: nove apps
   e 451 fotos. O CELULAR é desenhado em CSS (tela escura, grade de
   apps); ao lado, o CARTÃO DE PERFIL da dona, que se preenche a cada
   frase. No fim a dona entra e tira uma linha: ela passeia com sete
   cachorros porque é o trabalho — e não gosta. Fazer não é gostar.
   Áudios conferidos (faster-whisper): batem com o texto.
   Fila: FILA-LIVE-386.md · 027.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'bandeja' },
  { k: 'abre', est: 'o', min: 7, img: 'bandeja', rot: 'I · Your Phone First', t: 'Take out your own phone.', p: 'Pick a card. Answer out loud. Your teacher taps what you used. Don’t worry about it yet.' },
  { k: 'tela', est: 'l', min: 7, img: 'bandeja', rot: 'II · Nine Apps', t: 'No name on the lock screen. Only nine apps.', p: 'Listen first. Then guess from the icon, tap it, and say the line. It goes on her card.' },
  { k: 'gx', est: 'f', min: 4, img: 'bandeja', rot: 'III · Phone Blocks', t: 'The same sentence, about the phone’s owner.', p: 'Read the blocks out loud. Notice what changes. Then build a sentence and say your own.' },
  { k: 'depois', est: 'f', min: 6, img: 'bandeja', rot: 'IV · After the Verb', t: 'After like, love and hate, the verb changes, and nothing else gets in.', p: 'Pick the piece. Then read the whole sentence.' },
  { k: 'objeto', est: 'f', min: 6, img: 'bandeja', rot: 'V · Yes, I Like It', t: 'The answer can’t stop at the verb.', p: 'Read the question. Pick the last word. Then say the whole answer.' },
  { k: 'rolo', est: 'o', min: 7, img: 'bandeja', rot: 'VI · The Photo Roll', t: '451 photos in six piles. One is much bigger.', p: 'Tap a pile. Read the number out loud. Then say the sentence.' },
  { k: 'cartas', est: 'l', min: 7, img: 'bandeja', rot: 'VII · Three Cards', t: 'Three cards. They name your answers.', p: 'Listen first. Then open the card and answer its question.' },
  { k: 'nao', est: 'f', min: 6, extra: 1, img: 'bandeja', rot: 'VIII · What She Doesn’t Like', t: 'A phone says no without words.', p: 'Read the evidence. Pick the piece. Say the sentence.' },
  { k: 'busca', est: 'o', min: 7, extra: 1, img: 'bandeja', rot: 'IX · Ask the Phone', t: 'The search bar only says yes or no.', p: 'Ask the question out loud first. Then tap it and read the answer.' },
  { k: 'dona', est: 'l', min: 7, extra: 1, img: 'coleiras', rot: 'X · The Owner', t: 'Her card is ready. Then the door opens.', p: 'Read her card. Listen to the owner. Which line on the card is wrong?' },
  { k: 'devolver', est: 'o', min: 7, extra: 1, img: 'balcao', rot: 'XI · Is It Really Yours?', t: 'Two people say the phone is theirs.', p: 'Ask Do you like …? to find the owner. Round 1: a stranger. Round 2: the owner.' },
  { k: 'fim', est: 'w', min: 6, img: 'balcao', rot: 'XII · In the Drawer', t: 'Write your own profile card.', p: 'Six lines: three things you like or love doing, two you don’t like, and one you do every day but don’t like. The red line watches. It goes to your My notes.' }
];

var TR = {
  'achado.mp3': 'Somebody left a phone on the bus this morning. There is no name on it. Just nine apps, and four hundred and fifty-one photos.',
  'ing.mp3': 'I like cooking. She loves dancing. They hate running in the rain.',
  'objeto.mp3': 'Do you like this song? Yes, I like it. Do you like the photos? Yes, I like them.',
  'does.mp3': 'She likes running. She doesn’t like running. Does she like running? No, she doesn’t.',
  'dona.mp3': 'Oh, that’s mine. Thank you. The dogs? No. I walk seven dogs every morning. It is my job. I don’t like it.'
};

var ABRE = [
  { k: 'TWO APPS', q: 'Which two apps do you open every day?', fup: 'What do you do on them?', st: ['I open … and …'], ex: 'I open WhatsApp and a music app.' },
  { k: 'DO YOU LIKE IT?', q: 'Do you like them? What do you like doing on them?', fup: 'And what do you hate doing on your phone?', st: ['I like …ing', 'Yes, I like it.'], ex: 'Yes, I like it. I like listening to music on the bus.' },
  { k: 'PHOTOS', q: 'What is in most of your photos?', fup: 'Why?', st: ['Most of my photos are …', 'I love …'], ex: 'Most of my photos are of my cat. I love taking pictures of her.' }
];
var FORMAS = [{ k: 'ing', t: 'LIKE …ING' }, { k: 'it', t: 'I LIKE IT / THEM' }, { k: 'plano', t: 'I LIKE WATCH', erro: 1 }, { k: 'of', t: 'I LIKE OF …', erro: 1 }, { k: 'semit', t: 'YES, I LIKE.', erro: 1 }];

var APPS = [
  { ic: '🍲', n: 'Recipes', viva: 1, fr: 'She loves cooking.' }, { ic: '📚', n: 'Books', viva: 1, fr: 'She loves reading.' }, { ic: '🏊', n: 'Pool', viva: 1, fr: 'She likes swimming.' },
  { ic: '📷', n: 'Photos', viva: 1, fr: 'She takes photos every day.' }, { ic: '📍', n: 'Maps', viva: 1, fr: 'She walks a lot.' }, { ic: '💬', n: 'Messages', viva: 1, fr: 'She talks to her sister every day.' },
  { ic: '🎲', n: 'Games', viva: 0, fr: 'She never opens this one.' }, { ic: '🎵', n: 'Music', viva: 0, fr: 'She never opens this one.' }, { ic: '☀️', n: 'Weather', viva: 0, fr: 'She never opens this one.' }
];

var DEPOIS = [
  { a: 'I like', v: 'watch', ing: 'watching', b: 'videos.' }, { a: 'She loves', v: 'cook', ing: 'cooking', b: 'on Sunday.' },
  { a: 'They hate', v: 'run', ing: 'running', b: 'in the rain.', d: 'run → running.' }, { a: 'He likes', v: 'play', ing: 'playing', b: 'soccer.' },
  { a: 'We love', v: 'swim', ing: 'swimming', b: 'in the sea.', d: 'swim → swimming.' }, { a: 'I don’t like', v: 'talk', ing: 'talking', b: 'on the phone.' },
  { a: 'She hates', v: 'wait', ing: 'waiting', b: 'for the bus.' }, { a: 'Do you like', v: 'dance', ing: 'dancing', b: '?', d: 'dance → dancing (the E goes).' }
];

var OBJ = [
  { q: 'Do you like this song?', a: 'Yes, I like', ok: 'it' }, { q: 'Do you like the photos?', a: 'Yes, I like', ok: 'them' },
  { q: 'Does she like the city?', a: 'No, she doesn’t like', ok: 'it' }, { q: 'Do you like coffee?', a: 'No, I don’t like', ok: 'it' },
  { q: 'Do you like these apps?', a: 'No, I don’t like', ok: 'them' }, { q: 'Does he like the book?', a: 'Yes, he likes', ok: 'it' }
];

var PILHAS = [
  { ic: '🐕', n: 'dogs', q: 214, num: 'two hundred and fourteen', fr: 'She loves dogs.' }, { ic: '🍝', n: 'food', q: 96, num: 'ninety-six', fr: 'She loves food.' },
  { ic: '👭', n: 'her sister', q: 58, num: 'fifty-eight', fr: 'She loves her sister.' }, { ic: '📚', n: 'books', q: 40, num: 'forty', fr: 'She loves books.' },
  { ic: '🌊', n: 'the sea', q: 31, num: 'thirty-one', fr: 'She likes the sea.' }, { ic: '🍰', n: 'cake', q: 12, num: 'twelve', fr: 'She likes cake.' }
];

var CARTAS = [
  { w: '-ing', m: 'THE VERB · after like, love, hate', au: 'ing.mp3', mais: 'cook → cooking · dance → dancing · run → running', ask: 'Say three things you like doing.' },
  { w: 'it / them', m: 'THE END · say the thing', au: 'objeto.mp3', mais: 'this song → it · the photos → them · never “Yes, I like.”', ask: 'Do you like coffee? Do you like these apps?' },
  { w: 'doesn’t', m: 'THE NO · plain like', au: 'does.mp3', mais: 'She likes → she doesn’t like. One S only.', ask: 'Say three things she doesn’t like.' }
];

var PROVAS = [
  { ev: 'Running app · deleted in March', o: 'running' }, { ev: 'Games · never opened', o: 'games' }, { ev: 'Family group chat · muted since June', o: 'group chats' },
  { ev: 'Alarm at 5:30 · snoozed nine times', o: 'getting up early' }, { ev: 'Notifications · off after 9 PM', o: 'noise at night' }
];
var PECAS_N = [{ k: 's', t: 'doesn’t likes' }, { k: 'don', t: 'don’t like' }, { k: 'ok', t: 'doesn’t like' }];
var NAO_N = { s: 'One S only: it’s already in DOES.', don: 'Don’t is for I, you, we, they. This is she.' };

var BUSCAS = [{ q: 'Does she like cooking?', r: 'Yes, she does.' }, { q: 'Does she like running?', r: 'No, she doesn’t.' }, { q: 'Does she like swimming?', r: 'Yes, she does.' }, { q: 'Does she like games?', r: 'No, she doesn’t.' }, { q: 'Does she like dogs?', r: '… I can’t answer that.', mudo: 1 }];

var CARTAO = ['She loves cooking.', 'She loves reading.', 'She likes swimming.', 'She loves dogs.', 'She doesn’t like running.', 'She doesn’t like getting up early.'];
var PARTES_D = [{ k: 'perg', t: 'DO YOU LIKE …ING?' }, { k: 'curta', t: 'YES, I DO / NO, I DON’T' }, { k: 'it', t: '… LIKE IT / THEM' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, tela: { aberto: {}, ult: -1 }, dep: { n: 0, esc: '' }, obj: { n: 0, esc: '' }, rolo: { aberto: {}, ult: -1 },
  cartas: { abre: {} }, nao: { n: 0, esc: '' }, busca: { aberto: {} }, dona: { esc: -1 }, dev: { r: 0, partes: {}, erro: 0 } };

function celular(conteudo, extra) { return '<div class="celular' + (extra || '') + '"><span class="entalhe"></span><div class="tela-c">' + conteudo + '</div></div>'; }
function cartaoPerfil(linhas, risca) {
  return '<div class="perfil vd"><div class="topo-p"><span class="foto-p">?</span><div><small>OWNER · UNKNOWN</small><b>Her profile card</b></div></div><ul>' + (linhas.length ? linhas.map(function (l, i) { return '<li class="' + (risca === i ? 'riscada' : '') + '">' + l + '</li>'; }).join('') : '<li class="vazia">Nothing yet.</li>') + '</ul></div>';
}
function linhasPerfil() { var out = []; APPS.forEach(function (a, i) { if (S.tela.aberto[i] && a.viva) out.push(a.fr); }); return out; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>The Lost <b>Phone</b></h1>'
    + '<p class="sub">Found on the 8:15 bus. Nine apps, 451 photos, and no name. Who does it belong to?</p>'
    + '<div class="chipsx"><span class="pilula">love cooking</span><span class="pilula">hate running</span><span class="pilula">I like it</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Unlock the screen</button>' + faixaLive() + '</div>'
    + '<div class="capa-cel">' + celular('<div class="bloqueio"><b>8:15</b><small>Tuesday · Bus 42</small><span class="cadeado">🔒</span><em>No name</em></div>') + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.tela = function (c) {
  var t = S.tela, ouviu = (S.ouviu || {})['achado.mp3'];
  var grade = '<div class="apps">' + APPS.map(function (a, i) { return '<button type="button" class="app' + (t.aberto[i] ? (a.viva ? ' aberto' : ' morto') : '') + '" data-a="tl" data-n="' + i + '"' + (ouviu ? '' : ' disabled') + '><span>' + a.ic + '</span><small>' + a.n + '</small></button>'; }).join('') + '</div>';
  var ult = t.ult >= 0 ? APPS[t.ult] : null;
  return cab(c) + '<div class="mesa-cel">' + celular(grade) + '<div class="lado-cel"><div class="toca-linha vd"><span class="ic">🚌</span>' + tocar('achado.mp3') + '<div>' + transcricao('achado.mp3', TR['achado.mp3']) + '</div></div>'
    + (ult ? '<div class="pergunta vd ja"><small>' + ult.n.toUpperCase() + '</small><h2>' + ult.fr + '</h2></div><p class="dica-aluno">Say it out loud.</p>' : (ouviu ? '<p class="dica-aluno">Guess from the icon, then tap it.</p>' : ''))
    + cartaoPerfil(linhasPerfil()) + '</div></div>';
};

R.depois = function (c) {
  var d = S.dep, n = d.n, fim = n >= DEPOIS.length, x = DEPOIS[Math.min(n, DEPOIS.length - 1)];
  if (fim) return cab(c) + trilha(DEPOIS, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT SENTENCES</small><h2>like / love / hate + …ing. No “of”, no plain verb.</h2></div><p class="dica-aluno" style="text-align:center">“I like to run” is also correct. Today we train the -ing shape.</p></div>';
  var ok = d.esc === 'ing';
  return cab(c) + trilha(DEPOIS, n) + '<div class="frase-d vd"><span>' + x.a + '</span><span class="buraco' + (ok ? ' cheio' : d.esc ? ' errado' : '') + '">' + (ok ? x.ing : x.v + ' → ?') + '</span><span>' + x.b + '</span></div>'
    + '<div class="tres-b centro">' + PECAS_D().map(function (p) { return '<button type="button" class="pilula grande' + (d.esc === p.k ? (ok ? ' certo' : ' errado') : '') + '" data-a="dp" data-v="' + p.k + '">' + (p.k === 'de' ? 'of ' + x.ing : p.k === 'plano' ? x.v : x.ing) + '</button>'; }).join('') + '</div>'
    + (d.esc && !ok ? '<p class="recusa" style="text-align:center">' + (d.esc === 'de' ? 'There’s no box for that little word in English. Take it out.' : 'After like, love and hate: put -ing on the verb.') + '</p>' : '')
    + (ok ? '<p class="aprova" style="text-align:center">' + (x.d || 'Read the whole sentence.') + '</p><div style="text-align:center"><button type="button" class="btn" data-a="dp-prox">Next</button></div>' : '');
};
function PECAS_D() { return [{ k: 'de', t: 'of …ing' }, { k: 'plano', t: '…' }, { k: 'ing', t: '…ing' }].map(function (p) { return p; }); }

R.objeto = function (c) {
  var o = S.obj, n = o.n, fim = n >= OBJ.length, x = OBJ[Math.min(n, OBJ.length - 1)];
  if (fim) return cab(c) + trilha(OBJ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX ANSWERS</small><h2>One thing: it. More than one: them. Never stop at like.</h2></div></div>';
  var ok = o.esc === x.ok;
  return cab(c) + trilha(OBJ, n) + '<div class="mesa-obj">' + celular('<div class="bolhas"><p class="bolha-q">' + x.q + '</p>' + (ok ? '<p class="bolha-a">' + x.a + ' <b>' + x.ok + '</b>.</p>' : '<p class="bolha-a esc">' + x.a + ' <span class="vaga">___</span></p>') + '</div>', ' pequeno')
    + '<div class="lado-cel"><div class="tres-b">' + [['it', 'it'], ['them', 'them'], ['nada', '— nothing —']].map(function (p) { return '<button type="button" class="pilula grande' + (o.esc === p[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ob" data-v="' + p[0] + '">' + p[1] + '</button>'; }).join('') + '</div>'
    + (o.esc && !ok ? '<p class="recusa">' + (o.esc === 'nada' ? 'The sentence has to say what. It can’t stop at like.' : o.esc === 'it' ? 'More than one thing: them.' : 'One thing: it.') + '</p>' : '')
    + (ok ? '<p class="aprova">Say the whole answer.</p><div><button type="button" class="btn" data-a="ob-prox">Next</button></div>' : '') + '</div></div>';
};

R.rolo = function (c) {
  var r = S.rolo, max = 214, x = r.ult >= 0 ? PILHAS[r.ult] : null;
  return cab(c) + '<div class="mesa-rolo"><div class="pilhas">' + PILHAS.map(function (p, i) { return '<button type="button" class="pilha' + (r.aberto[i] ? ' on' : '') + '" data-a="rl" data-n="' + i + '"><span class="ic">' + p.ic + '</span><span class="barra-r"><i style="width:' + (r.aberto[i] ? Math.round(p.q / max * 100) : 0) + '%"></i></span><b>' + (r.aberto[i] ? p.q : '?') + '</b><small>' + p.n + '</small></button>'; }).join('') + '</div>'
    + '<div class="lado-cel">' + (x ? '<div class="pergunta vd"><small>' + x.n.toUpperCase() + '</small><h2>' + x.num + ' photos</h2></div><p class="aprova">' + x.fr + ' Say it.</p>' : '<div class="pergunta vd"><small>451 PHOTOS</small><h2>Tap a pile.</h2></div>') + '</div></div>';
};

R.cartas = function (c) {
  var e = S.cartas;
  return cab(c) + '<div class="cartas-r">' + CARTAS.map(function (k, i) {
    var ouviu = (S.ouviu || {})[k.au];
    return '<div class="carta-r vd' + (e.abre[i] ? ' aberta' : '') + '"><b>' + k.w + '</b><small>' + k.m + '</small><div class="toca-linha">' + tocar(k.au) + '</div>' + transcricao(k.au, TR[k.au])
      + (e.abre[i] ? '<p class="mais">' + k.mais + '</p><p class="ask">' + k.ask + '</p>' : '<button type="button" class="pilula" data-a="cr" data-n="' + i + '"' + (ouviu ? '' : ' disabled') + '>Open the card</button>') + '</div>';
  }).join('') + '</div>';
};

R.nao = function (c) {
  var e = S.nao, n = e.n, fim = n >= PROVAS.length, x = PROVAS[Math.min(n, PROVAS.length - 1)];
  if (fim) return cab(c) + trilha(PROVAS, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE NO’S</small><h2>She doesn’t like … One S only, and it lives in DOES.</h2></div></div>';
  var ok = e.esc === 'ok';
  return cab(c) + trilha(PROVAS, n) + '<div class="mesa-obj">' + celular('<div class="aviso-c"><span>⚠️</span><p>' + x.ev + '</p></div>', ' pequeno') + '<div class="lado-cel"><div class="pergunta vd"><h2>She ' + (ok ? '<b>doesn’t like</b>' : '<span class="vaga">________</span>') + ' ' + x.o + '.</h2></div>'
    + '<div class="tres-b">' + PECAS_N.map(function (p) { return '<button type="button" class="pilula grande' + (e.esc === p.k ? (ok ? ' certo' : ' errado') : '') + '" data-a="nn" data-v="' + p.k + '">' + p.t + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa">' + NAO_N[e.esc] + '</p>' : '') + (ok ? '<div><button type="button" class="btn" data-a="nn-prox">Next</button></div>' : '') + '</div></div>';
};

R.busca = function (c) {
  var b = S.busca;
  return cab(c) + '<div class="mesa-obj">' + celular('<div class="buscas"><div class="barra-b">🔍 Ask the phone…</div>' + BUSCAS.map(function (x, i) { return '<button type="button" class="busca' + (b.aberto[i] ? ' on' : '') + (x.mudo && b.aberto[i] ? ' mudo' : '') + '" data-a="bc" data-n="' + i + '"><span>' + x.q + '</span>' + (b.aberto[i] ? '<b>' + x.r + '</b>' : '') + '</button>'; }).join('') + '</div>')
    + '<div class="lado-cel"><p class="dica-aluno">Ask it out loud before you tap.</p>' + (b.aberto[4] ? '<div class="pergunta vd ja"><small>THE PHONE CAN’T SAY</small><h2>214 photos of dogs. Does she like them? Only she knows.</h2></div>' : '') + '</div></div>';
};

R.dona = function (c) {
  var d = S.dona, ouviu = (S.ouviu || {})['dona.mp3'], ok = d.esc === 3;
  return cab(c) + '<div class="mesa-cel"><div class="lado-cel"><div class="toca-linha vd"><span class="ic">🚪</span>' + tocar('dona.mp3') + '<div>' + transcricao('dona.mp3', TR['dona.mp3']) + '</div></div>'
    + (ok ? '<div class="virada vd"><b>She walks dogs every day, but she doesn’t like it.</b><p>Doing is not liking.</p></div>' : (ouviu ? '<p class="dica-aluno">Which line is gone? Tap it on the card.</p>' : '<p class="dica-aluno">Read her card. Then listen.</p>'))
    + (d.esc >= 0 && !ok ? '<p class="recusa">Listen again. Which line is gone?</p>' : '') + '</div>'
    + '<div class="perfil vd"><div class="topo-p"><span class="foto-p">' + (ok ? '🐕' : '?') + '</span><div><small>OWNER · ' + (ok ? 'FOUND' : 'UNKNOWN') + '</small><b>Her profile card</b></div></div><ul>' + CARTAO.map(function (l, i) { return '<li><button type="button" class="linha-p' + (d.esc === i ? (ok ? ' riscada' : ' errado') : '') + '" data-a="dn" data-n="' + i + '"' + (ouviu ? '' : ' disabled') + '>' + l + '</button></li>'; }).join('') + '</ul></div></div>';
};

R.devolver = function (c) {
  var e = S.dev, r = e.r, fim = r >= 2;
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>THE PHONE GOES HOME</small><h2>You found the owner with Do you like …? questions.</h2></div></div>';
  return cab(c) + trilha([0, 1], r) + '<div class="mesa-cel"><div class="lado-cel"><div class="pergunta vd"><small>ROUND ' + (r + 1) + ' · ' + (r === 0 ? 'PERSON 1' : 'PERSON 2') + '</small><h2>' + (r === 0 ? 'Ask at least three questions. Is it really their phone?' : 'Ask again. Compare with her card.') + '</h2></div>'
    
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES_D.map(function (p) { return '<button type="button" class="chip frase' + (e.partes[p.k] ? ' on' : '') + '" data-a="dv-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (e.erro ? ' on' : '') + '" data-a="dv-e">MISTAKE: DO YOU LIKE RUN? / I LIKE OF</button></div>'
    + (e.erro ? '<p class="recusa">Do you like running? And no extra word.</p>' : '') + '<div><button type="button" class="btn" data-a="dv-prox">' + (r === 0 ? 'Next person' : 'Give the phone back') + '</button></div></div>' + cartaoPerfil(CARTAO.slice(0, 3).concat(['She walks dogs, but she doesn’t like it.', 'She doesn’t like running.', 'She doesn’t like getting up early.'])) + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I love cooking.\nI don’t like running.\n…', 'Your profile card',
    ['I love ', 'I like ', 'I hate ', 'I don’t like ', '…ing', ' I like it.'], ['YOUR PHONE, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now your card, every verb with -ing.' : 'Six lines about you.'])
    + '<div class="lado-fim"><div class="grande vd"><span>I love cook<u>ing</u>. She hates runn<u>ing</u>.</span><span>Yes, I like <u>it</u>. I like <u>them</u>.</span><span>She <u>doesn’t like</u> it. Doing is not liking.</span></div>'
    + mostra('fim', 'I love cooking on Sunday.<br>I like reading on the bus.<br>I hate waiting in lines.<br>I don’t like getting up early.<br>I wash the dishes every day, but I don’t like it.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.tl = function (b, n) { if (!(S.ouviu || {})['achado.mp3']) return false; S.tela.aberto[n] = 1; S.tela.ult = n; };
TOQUES.dp = function (b, n, v) { S.dep.esc = v; };
TOQUES['dp-prox'] = function () { S.dep = { n: S.dep.n + 1, esc: '' }; };
TOQUES.ob = function (b, n, v) { S.obj.esc = v; };
TOQUES['ob-prox'] = function () { S.obj = { n: S.obj.n + 1, esc: '' }; };
TOQUES.rl = function (b, n) { S.rolo.aberto[n] = 1; S.rolo.ult = n; };
TOQUES.cr = function (b, n) { if (!(S.ouviu || {})[CARTAS[n].au]) return false; S.cartas.abre[n] = 1; };
TOQUES.nn = function (b, n, v) { S.nao.esc = v; };
TOQUES['nn-prox'] = function () { S.nao = { n: S.nao.n + 1, esc: '' }; };
TOQUES.bc = function (b, n) { S.busca.aberto[n] = 1; };
TOQUES.dn = function (b, n) { if (!(S.ouviu || {})['dona.mp3']) return false; S.dona.esc = n; };
TOQUES['dv-p'] = function (b, n, v) { S.dev.partes[v] = !S.dev.partes[v]; };
TOQUES['dv-e'] = function () { S.dev.erro = !S.dev.erro; };
TOQUES['dv-prox'] = function () { S.dev = { r: S.dev.r + 1, partes: {}, erro: 0 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de depois.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'The owner’s phone, in blocks. Each block has a job.',
  frases: [
    { b: [['She', 'WHO'], ['loves', 'FEELING', 'aux'], ['taking', 'ACTION + ING', 'acao'], ['photos', 'WHAT']], d: 'Her phone has 451 of them.' },
    { b: [['I', 'WHO'], ['hate', 'FEELING', 'aux'], ['waiting', 'ACTION + ING', 'acao'], ['for the bus', 'WHAT']], d: 'After hate, the next verb gets -ing: waiting.' },
    { b: [['She', 'WHO'], ['doesn’t like', 'NOT', 'aux'], ['walking', 'ACTION + ING', 'acao'], ['seven dogs', 'WHAT']], d: 'With doesn’t like, the next verb still gets -ing.' }
  ],
  nota: 'After <b>like</b>, <b>love</b> and <b>hate</b>, the next verb takes <b>-ing</b>: she loves <b>taking</b>, I hate <b>waiting</b>. With she, only the first verb gets the -s: she love<b>s</b> taking.',
  monta: { p: 'Build the next line about the phone. Then say it.', pecas: [['music', 'WHAT'], ['loves', 'FEELING', 'aux'], ['listening to', 'ACTION + ING', 'acao'], ['She', 'WHO']], ordem: [3, 1, 2, 0] },
  uso: { p: 'Now you. Say two things you love or hate doing every week.', molde: ['I love …ing …', 'I hate …ing …'], ex: 'I love cooking on Sundays. I hate cleaning the bathroom.' },
  prof: 'Read the blocks with the student, top to bottom: the word on top, its job under it. Point at the -ing after the feeling.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
