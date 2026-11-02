/* ============================================================
   THE HIDDEN PRESENT · A BIRTHDAY AT MIDNIGHT · LIVE CLASS  05/10/2026
   Main series A1 · this / that / these / those
   O MUNDO: meia-noite antes do aniversário do Leo; o presente está
   escondido e o Leo, acordado na escada, aponta para tudo. O objeto
   central é o PRESENTE EMBRULHADO (papel escuro): a fita corta a caixa em
   quatro — ONE × MORE contra NEAR × FAR — e cada palavra mora num canto.
   A aula usa o corpo: o aluno segura, aponta e mostra coisas de casa.
   Sem áudio e sem vídeo. O presente está na gaveta (a foto mostra a
   caixinha lá dentro). Fila: FILA-LIVE-386.md · 024.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'sala' },
  { k: 'mostra', est: 'o', min: 7, img: 'sala', rot: 'I · Show Me', t: 'Before the search: things from your own home.', p: 'Do what the card says, on the camera, and say the sentence. Your teacher taps the word you used.' },
  { k: 'fita', est: 'f', min: 6, img: 'presente', rot: 'II · The Ribbon Box', t: 'The ribbon cuts the present into four.', p: 'Look at the photo. Say the sentence. Then tap its part of the box.' },
  { k: 'perto', est: 'f', min: 6, img: 'quarto', rot: 'III · Near or Far?', t: 'Leo’s room. You are standing by the door.', p: 'Say the sentence. Then pick your sentence.' },
  { k: 'leo', est: 'o', min: 7, img: 'escada', rot: 'IV · Leo Is Awake', t: 'Leo is on the stairs. He points and asks.', p: 'Your teacher is Leo. Answer him, and don’t tell him about the present!' },
  { k: 'busca', est: 'o', min: 7, img: 'quarto', rot: 'V · Hot and Cold', t: 'Find the present. It is in one of four places.', p: 'Pick a place and ask the right question. Your teacher answers: warmer, colder, or you found it!' },
  { k: 'aponta', est: 'o', min: 7, img: 'sala', rot: 'VI · Point and Ask', t: 'Now you ask. One or more? Near or far?', p: 'Read the card. Ask the right question. Then your teacher shows something and answers.' },
  { k: 'plano', est: 'o', min: 7, extra: 1, img: 'presente', rot: 'VII · The Birthday Plan', t: 'Leo is asleep. Time to talk about presents.', p: 'Six questions about you.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'sala', rot: 'VIII · Quick Quiz', t: 'Eight quick lines.', p: 'Pick the word. Then say the whole sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'escada', rot: 'IX · Back to Bed', t: 'It’s 1 AM. The present is wrapped. Write your room.', p: 'Six sentences about the things around you: this, that, these, those. The red line watches. It goes to your My notes.' }
];

var CANTOS = [{ k: 'this', n: 'ONE', d: 'NEAR' }, { k: 'that', n: 'ONE', d: 'FAR' }, { k: 'these', n: 'MORE', d: 'NEAR' }, { k: 'those', n: 'MORE', d: 'FAR' }];

var MOSTRA = [
  { k: 'IN YOUR HAND', faz: 'Hold one thing in your hand. Show it to the camera.', ok: 'this', q: 'What’s this?', mod: 'This is my phone.' },
  { k: 'ACROSS THE ROOM', faz: 'Point at one thing far from you.', ok: 'that', q: 'What’s that?', mod: 'That is my door.' },
  { k: 'ON YOUR DESK', faz: 'Show me two or more things near you.', ok: 'these', q: 'What are these?', mod: 'These are my keys.' },
  { k: 'FAR AWAY', faz: 'Point at two or more things far from you.', ok: 'those', q: 'What are those?', mod: 'Those are my books.' },
  { k: 'YOUR CHOICE', faz: 'Show me one more thing: near or far, one or more.', ok: '', q: 'What is it? Where is it?', mod: 'This is a photo of my family.' }
];
var ERROS = [{ k: 'thisare', t: 'THIS ARE / THESE IS' }, { k: 'dist', t: 'NEAR ↔ FAR SWAPPED' }];

var FITA = [
  { img: 'xicara', t: 'This is a cup.', ok: 'this', dica: 'one · near' }, { img: 'cadeira', t: 'That is a chair.', ok: 'that', dica: 'one · far' },
  { img: 'tenis', t: 'These are shoes.', ok: 'these', dica: 'more · near' }, { img: 'meias', t: 'Those are socks.', ok: 'those', dica: 'more · far' }
];

var PERTO = [
  { obj: 'the cup', onde: 'near you', ok: 'This is a cup.', trap: [{ t: 'That is a cup.', k: 'dist' }, { t: 'These is a cup.', k: 'num' }] },
  { obj: 'the shoes', onde: 'near you', ok: 'These are shoes.', trap: [{ t: 'This are shoes.', k: 'num' }, { t: 'These is shoes.', k: 'verbo' }] },
  { obj: 'the socks', onde: 'far from you', ok: 'Those are socks.', trap: [{ t: 'These are socks.', k: 'dist' }, { t: 'That are socks.', k: 'num' }] },
  { obj: 'the lamp', onde: 'far from you', ok: 'That is a lamp.', trap: [{ t: 'This is a lamp.', k: 'dist' }, { t: 'Those is a lamp.', k: 'num' }] },
  { obj: 'the books', onde: 'far from you', ok: 'Those are books.', trap: [{ t: 'Those is books.', k: 'verbo' }, { t: 'That books.', k: 'num' }] },
  { obj: 'the keys', onde: 'near you', ok: 'These are keys.', trap: [{ t: 'This keys.', k: 'num' }, { t: 'Those are keys.', k: 'dist' }] }
];
var POR = { dist: 'Near or far? Look where it is: near you takes this / these, far takes that / those.', num: 'One or more? More than one takes these / those.', verbo: 'More than one takes ARE: these are, those are.' };

var LEO = [
  { leo: 'What’s that?', img: 'papel', ok: 'That’s paper. It’s for work.', dica: 'one · far' },
  { leo: 'What are those?', img: 'tesoura', ok: 'Those are scissors.', dica: 'more · far' },
  { leo: 'What’s this?', img: 'xicara', ok: 'This is my cup. It’s tea.', dica: 'one · near' },
  { leo: 'What are these?', img: 'tenis', ok: 'These are my shoes.', dica: 'more · near' },
  { leo: 'Is that my present?', img: 'presente', ok: 'No! That’s… a box for books.', dica: 'one · far' },
  { leo: 'Can I have those socks?', img: 'meias', ok: 'Yes, those are your socks. Go to bed!', dica: 'more · far' }
];

var LUGARES = [
  { k: 'gaveta', img: 'gaveta', nome: 'THE DRAWER', perto: 1, ok: 'Is it in this drawer?', trap: ['Is it in that drawer?', 'Is it in these drawer?'], resp: 'You found it! This is Leo’s present!', achou: 1 },
  { k: 'livros', img: 'livros', nome: 'THE BOOKS', perto: 0, ok: 'Is it behind those books?', trap: ['Is it behind these books?', 'Is it behind that books?'], resp: 'Colder. Brrr.' },
  { k: 'armario', img: 'armario', nome: 'THE WARDROBE', perto: 0, ok: 'Is it on that wardrobe?', trap: ['Is it on this wardrobe?', 'Is it on those wardrobe?'], resp: 'Colder.' },
  { k: 'cama', img: 'cama', nome: 'THE BED', perto: 1, ok: 'Is it under this bed?', trap: ['Is it under that bed?', 'Is it under these bed?'], resp: 'Warmer! It’s near you…' }
];

var APONTA = [{ n: 1, d: 'perto', ok: 'this' }, { n: 3, d: 'longe', ok: 'those' }, { n: 1, d: 'longe', ok: 'that' }, { n: 2, d: 'perto', ok: 'these' }, { n: 1, d: 'perto', ok: 'this' }, { n: 4, d: 'longe', ok: 'those' }, { n: 2, d: 'perto', ok: 'these' }, { n: 1, d: 'longe', ok: 'that' }];
var PERG_A = { this: 'What’s this?', that: 'What’s that?', these: 'What are these?', those: 'What are those?' };

var PLANO = [
  { q: 'What is a nice present for you?', fup: 'Do you still have it? Show it if it is near you!', st: ['A nice present is …'], ex: 'A guitar! A guitar is a nice present.' },
  { q: 'A present is in your home. Where is it? Guess!', fup: 'Say it: I’d hide it in that … / under this …', st: ['I’d hide it in that …', 'under this …'], ex: 'I’d hide it in that box on the shelf.' },
  { q: 'Do you like surprises?', fup: 'Do you like surprises?', st: ['I love surprises …', 'I don’t like …'], ex: 'Yes! I love surprises. Parties are great.' },
  { q: 'Look around your room. What is your favorite thing near you?', fup: 'And far from you?', st: ['This is my favorite …', 'That … over there'], ex: 'This is my favorite pen. And that plant over there.' },
  { q: 'How do you celebrate your birthday?', fup: 'Who is with you?', st: ['I have dinner with …'], ex: 'I have dinner with my family.' },
  { q: 'Your turn. Ask me two questions about the things in my room.', fup: 'Use What’s that? and What are those?', st: ['What’s that?', 'What are those?'], ex: 'What’s that on the wall? What are those?' }
];

var QUIZ = [
  { f: '___ shoes are new. (near)', op: ['These', 'This'], s: 'These shoes are new.', nao: 'More than one, near: These.' },
  { f: '___ is my house. (far)', op: ['That', 'This'], s: 'That is my house.', nao: 'One, far: That.' },
  { f: 'What ___ those?', op: ['are', 'is'], s: 'What are those?', nao: 'Those: are.' },
  { f: '___ cup is hot. (in my hand)', op: ['This', 'That'], s: 'This cup is hot.', nao: 'In my hand: This.' },
  { f: '___ are my friends, over there.', op: ['Those', 'These'], s: 'Those are my friends, over there.', nao: 'Over there: Those.' },
  { f: 'These ___ my keys.', op: ['are', 'is'], s: 'These are my keys.', nao: 'These: are.' },
  { f: 'Is ___ your car, across the street?', op: ['that', 'this'], s: 'Is that your car, across the street?', nao: 'Across the street: that.' },
  { f: 'What’s ___? (in your bag)', op: ['this', 'those'], s: 'What’s this?', nao: 'One thing, near: this.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  mostra: { n: 0, ouvi: {}, err: {} }, fita: { n: 0, esc: '' }, perto: { n: 0, esc: '' }, leo: { n: 0 }, busca: { sel: -1, esc: {}, ok: {} }, aponta: { n: 0, viu: 0 }, plano: { n: 0, foi: {} }, quiz: { n: 0, esc: -1 } };

function caixa(on, extra, ultimo) {
  return '<div class="caixa' + (extra || '') + '"><span class="fita-h"></span><span class="fita-v"></span><span class="laco"></span>'
    + '<span class="eixo eixo-n">NEAR ← → FAR</span>' + CANTOS.map(function (c) { return '<button type="button" class="canto c-' + c.k + (on === c.k ? ' on' : '') + (ultimo === c.k ? ' errado' : '') + '" data-a="cx" data-v="' + c.k + '"><b>' + c.k.toUpperCase() + '</b><small>' + c.n + ' · ' + c.d + '</small></button>'; }).join('') + '</div>';
}
function escolhas(ops, esc, okTxt, toque, porTrap) {
  var tr = (porTrap || []).filter(function (t) { return t.t === esc; })[0];
  return '<div class="opcoes-l">' + ops.map(function (o) { return '<button type="button" class="op-l' + (esc === o ? (o === okTxt ? ' certo' : ' errado') : '') + '" data-a="' + toque + '" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>'
    + (tr ? '<p class="recusa">' + POR[tr.k] + '</p>' : '');
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>The Hidden <b>Present</b></h1>'
    + '<p class="sub">Somewhere in this house there is a present. Leo is awake, and he is pointing at everything.</p>'
    + '<div class="chipsx"><span class="pilula">this</span><span class="pilula">that</span><span class="pilula">these</span><span class="pilula">those</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the search</button>' + faixaLive() + '</div>'
    + '<div class="capa-caixa">' + caixa('', ' capa') + '</div></div>';
};

R.mostra = function (c) {
  var m = S.mostra, n = m.n, fim = n >= MOSTRA.length, x = MOSTRA[Math.min(n, MOSTRA.length - 1)];
  if (fim) return cab(c) + trilha(MOSTRA, n) + '<div class="mesa-caixa">' + caixa('') + '<div class="lado-caixa"><div class="pergunta vd"><small>FIVE THINGS</small><h2>Your hand, your desk, across the room. Four words, four corners.</h2></div></div></div>';
  var ouvi = m.ouvi[n];
  return cab(c) + trilha(MOSTRA, n) + '<div class="mesa-caixa">' + caixa(ouvi || '') + '<div class="lado-caixa"><div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.faz + '</h2></div><p class="q-mostra">' + x.q + '</p>'
    + '<div class="partes so-prof"><h5>THE WORD YOU HEAR · DON’T CORRECT</h5>' + ['this', 'that', 'these', 'those'].map(function (w) { return '<button type="button" class="chip frase' + (ouvi === w ? ' on' : '') + '" data-a="ms-o" data-v="' + w + '">' + w.toUpperCase() + '</button>'; }).join('')
    + ERROS.map(function (e) { return '<button type="button" class="chip frase erro-ouvido' + ((m.err[n] || {})[e.k] ? ' on' : '') + '" data-a="ms-e" data-v="' + e.k + '">' + e.t + '</button>'; }).join('') + '</div>'
    + mostra('ms' + n, x.mod) + '<div><button type="button" class="btn" data-a="ms-prox">Next card</button></div></div></div>';
};

R.fita = function (c) {
  var f = S.fita, n = f.n, fim = n >= FITA.length, x = FITA[Math.min(n, FITA.length - 1)];
  if (fim) return cab(c) + trilha(FITA, n) + '<div class="mesa-caixa">' + caixa('') + '<div class="lado-caixa"><div class="pergunta vd"><small>THE SOUND</small><h2>this /ðɪs/ is short. these /ðiːz/ is long: smile on these.</h2></div>' + fala('ft', ['this · these', 'this cup · these cups'], []) + '</div></div>';
  var ok = f.esc === x.ok;
  return cab(c) + trilha(FITA, n) + '<div class="mesa-caixa">' + caixa(ok ? x.ok : '', '', f.esc && !ok ? f.esc : '') + '<div class="lado-caixa"><div class="foto-f vd" style="background-image:url(' + img(x.img) + ')"><span>' + x.dica + '</span></div>'
    + (ok ? '<p class="aprova">' + x.t + ' Say it out loud.</p><div><button type="button" class="btn" data-a="ft-prox">Next photo</button></div>' : (f.esc ? '<p class="recusa">Look at the label: ' + x.dica + '. Which corner?</p>' : '<p class="dica-aluno">Say the sentence. Then tap a corner of the box.</p>')) + '</div></div>';
};

R.perto = function (c) {
  var e = S.perto, n = e.n, fim = n >= PERTO.length, x = PERTO[Math.min(n, PERTO.length - 1)];
  if (fim) return cab(c) + trilha(PERTO, n) + '<div class="foco"><div class="pergunta vd"><small>SIX THINGS</small><h2>Near: this, these. Far: that, those. More than one: are.</h2></div></div>';
  var ops = ordem([x.ok].concat(x.trap.map(function (t) { return t.t; })), n + 1), ok = e.esc === x.ok;
  return cab(c) + trilha(PERTO, n) + '<div class="mesa-caixa"><div class="quarto vd" style="background-image:url(' + img('quarto') + ')"><span class="voce">YOU · by the door</span><span class="alvo-q ' + (x.onde === 'near you' ? 'perto' : 'longe') + '">' + x.obj + '<small>' + x.onde + '</small></span></div>'
    + '<div class="lado-caixa"><div class="pergunta vd"><small>' + x.obj.toUpperCase() + ' · ' + x.onde.toUpperCase() + '</small><h2>Say it out loud.</h2></div>' + escolhas(ops, e.esc, x.ok, 'pt', x.trap)
    + (ok ? '<div><button type="button" class="btn" data-a="pt-prox">Next</button></div>' : '') + '</div></div>';
};

R.leo = function (c) {
  var l = S.leo, n = l.n, fim = n >= LEO.length, x = LEO[Math.min(n, LEO.length - 1)];
  if (fim) return cab(c) + trilha(LEO, n) + '<div class="foco"><div class="pergunta vd"><small>LEO GOES BACK TO BED</small><h2>Six questions, and the present is still a secret.</h2></div></div>';
  return cab(c) + trilha(LEO, n) + '<div class="mesa-caixa"><div class="foto-f grande vd" style="background-image:url(' + img(x.img) + ')"><span>' + x.dica + '</span></div><div class="lado-caixa"><div class="balao"><small>LEO, ON THE STAIRS</small><p>“' + x.leo + '”</p></div>'
    + fala('leo' + n, ['This is …', 'That’s …', 'These are …', 'Those are …'], []) + mostra('leo' + n, x.ok) + '<div><button type="button" class="btn" data-a="leo-prox">Leo asks again</button></div></div></div>';
};

R.busca = function (c) {
  var b = S.busca, x = b.sel >= 0 ? LUGARES[b.sel] : null, achou = LUGARES.some(function (l, i) { return l.achou && b.ok[i]; });
  var grade = '<div class="lugares">' + LUGARES.map(function (l, i) { return '<button type="button" class="lugar-b vd' + (b.sel === i ? ' on' : '') + (b.ok[i] ? (l.achou ? ' achou' : ' visto') : '') + '" data-a="bs-sel" data-n="' + i + '" style="background-image:url(' + img(l.img) + ')"><b>' + l.nome + '</b><small>' + (l.perto ? 'near you' : 'far from you') + '</small>' + (b.ok[i] ? '<em>' + (l.achou ? '🎁 FOUND' : l.resp) + '</em>' : '') + '</button>'; }).join('') + '</div>';
  var lado = '';
  if (x) { var ops = ordem([x.ok].concat(x.trap), b.sel + 1), esc = b.esc[b.sel];
    lado = '<div class="lado-busca"><div class="pergunta vd"><small>' + x.nome + ' · ' + (x.perto ? 'NEAR YOU' : 'FAR FROM YOU') + '</small><h2>Ask out loud.</h2></div><div class="opcoes-l">' + ops.map(function (o) { return '<button type="button" class="op-l' + (esc === o ? (o === x.ok ? ' certo' : ' errado') : '') + '" data-a="bs" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>'
      + (esc && esc !== x.ok ? '<p class="recusa">' + (/these|those/.test(esc) && !/books/.test(esc) ? 'One thing: this or that.' : 'Near or far? Look at the label.') + '</p>' : '') + (b.ok[b.sel] ? '<p class="' + (x.achou ? 'aprova' : 'dica-aluno') + '">Your teacher: “' + x.resp + '”</p>' : '') + '</div>'; }
  return cab(c) + '<div class="mesa-busca">' + grade + (lado || '<div class="lado-busca"><div class="pergunta vd"><small>FOUR PLACES</small><h2>' + (achou ? 'Found! This is Leo’s present!' : 'Pick a place.') + '</h2></div></div>') + '</div>';
};

R.aponta = function (c) {
  var a = S.aponta, n = a.n, fim = n >= APONTA.length, x = APONTA[Math.min(n, APONTA.length - 1)];
  if (fim) return cab(c) + trilha(APONTA, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT CARDS</small><h2>What’s this? What’s that? What are these? What are those?</h2></div></div>';
  var objs = ''; for (var i = 0; i < x.n; i++) objs += '<span class="obj">◆</span>';
  return cab(c) + trilha(APONTA, n) + '<div class="mesa-caixa"><div class="carta-a vd ' + x.d + '"><span class="mao">' + (x.d === 'perto' ? '✋' : '👉') + '</span><div class="objs">' + objs + '</div><small>' + (x.n > 1 ? 'MORE THAN ONE' : 'ONE') + ' · ' + (x.d === 'perto' ? 'NEAR' : 'FAR') + '</small></div>'
    + '<div class="lado-caixa"><div class="pergunta vd"><small>CARD ' + (n + 1) + '</small><h2>Ask the question out loud.</h2></div>'
    + (a.viu ? '<p class="aprova">' + PERG_A[x.ok] + ' Now your teacher shows something and answers.</p><div><button type="button" class="btn" data-a="ap-prox">Next card</button></div>' : '<button type="button" class="btn cheio" data-a="ap-viu">Show the question</button>') + '</div></div>';
};

R.plano = function (c) { return sequencia(c, PLANO, S.plano, 'plano', 'Presents, secrets and things you can point at.'); };

R.quiz = function (c) {
  var q = S.quiz, n = q.n, fim = n >= QUIZ.length, x = QUIZ[Math.min(n, QUIZ.length - 1)];
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT LINES</small><h2>One near: this. One far: that. More near: these. More far: those.</h2></div></div>';
  var ops = n % 2 ? [x.op[1], x.op[0]] : x.op, ok = q.esc >= 0 && ops[q.esc] === x.op[0];
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>LINE ' + (n + 1) + ' OF 8</small><h2>' + (ok ? x.s : x.f.replace('___', '<span class="vaga">___</span>')) + '</h2></div>'
    + '<div class="tres-b centro">' + ops.map(function (o, i) { return '<button type="button" class="pilula grande' + (q.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (q.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'This is my phone. That is my door.\n…', 'Your room',
    ['This is ', 'That is ', 'These are ', 'Those are ', 'What’s that? ', 'What are those? '], ['YOUR ROOM', 'Six sentences: two things near you, two far from you, and two questions.'])
    + '<div class="lado-fim"><p class="ultima">This is the present. That is Leo’s door. These are my hands, and those are the stars. <b>Happy birthday, Leo.</b></p>'
    + mostra('fim', 'This is my phone. These are my keys.<br>That is my door. Those are my books, on the shelf.<br>What’s that on the wall? What are those?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ms-o'] = function (b, n, v) { var m = S.mostra; m.ouvi[m.n] = m.ouvi[m.n] === v ? '' : v; };
TOQUES['ms-e'] = function (b, n, v) { var m = S.mostra; m.err[m.n] = m.err[m.n] || {}; m.err[m.n][v] = !m.err[m.n][v]; };
TOQUES['ms-prox'] = function () { S.mostra.n++; };
TOQUES.cx = function (b, n, v) { if (S.i !== 2) return false; S.fita.esc = v; };
TOQUES['ft-prox'] = function () { S.fita = { n: S.fita.n + 1, esc: '' }; };
TOQUES.pt = function (b, n, v) { S.perto.esc = v; };
TOQUES['pt-prox'] = function () { S.perto = { n: S.perto.n + 1, esc: '' }; };
TOQUES['leo-prox'] = function () { S.leo.n++; };
TOQUES['bs-sel'] = function (b, n) { S.busca.sel = n; };
TOQUES.bs = function (b, n, v) { var e = S.busca, x = LUGARES[e.sel]; if (!x) return false; e.esc[e.sel] = v; if (v === x.ok) e.ok[e.sel] = 1; };
TOQUES['ap-viu'] = function () { S.aponta.viu = 1; };
TOQUES['ap-prox'] = function () { S.aponta = { n: S.aponta.n + 1, viu: 0 }; };
TOQUES.qz = function (b, n) { S.quiz.esc = n; };
TOQUES['qz-prox'] = function () { S.quiz = { n: S.quiz.n + 1, esc: -1 }; };
