/* ============================================================
   SIX EGGS · THE NIGHT TRAIN AND THE NOTEBOOK · LIVE CLASS  05/10/2026
   Main series A1 · easy reader · and / but / so / because
   O MUNDO: o caderno marrom no banco do trem das 7:40, uma lista com
   seis ovos, um gato que não come desde domingo, meio endereço molhado
   (o 73) e uma caixa grande. Cinco capítulos, cada um com a gravação.
   NOVO no Live: todo capítulo é OUVIR PRIMEIRO (o texto abre depois),
   como o Carlos pediu para todos os listenings. Os cinco áudios batem
   com o texto (faster-whisper; só grafia: Sophia/Sofia, 740/7:40).
   Fila: FILA-LIVE-386.md · 020.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'cap1' },
  { k: 'manha', est: 'o', min: 7, img: 'cap1', rot: 'I · Your Morning', t: 'Four questions about your morning.', p: 'Pick a card. Answer in full sentences. Your teacher taps the joining words.' },
  { k: 'cap1', est: 'l', min: 7, img: 'cap1', rot: 'II · Chapter One', t: 'The 7:40', p: 'Listen first, with the text closed. Then open it and read it together. Then two questions.' },
  { k: 'aposta', est: 'o', min: 7, img: 'cap1', rot: 'III · What Is Inside?', t: 'A stranger’s notebook. Old, nearly full, no name.', p: 'Choose one and say why, with because.' },
  { k: 'cap2', est: 'l', min: 7, extra: 1, img: 'cap2', rot: 'IV · Chapter Two', t: 'Six Eggs', p: 'Listen first. Then the text. Look at the list: one line nobody can read.' },
  { k: 'junta', est: 'f', min: 6, img: 'cap2', rot: 'V · Four Words', t: 'Two facts, one word.', p: 'Read both facts out loud. Pick the word that joins them. Then say the whole sentence.' },
  { k: 'cap3', est: 'l', min: 7, img: 'cap3', rot: 'VI · Chapter Three', t: 'Page Four', p: 'Listen first. Then the text. Then stop for a moment before the questions.' },
  { k: 'vira', est: 'f', min: 6, extra: 1, img: 'cap3', rot: 'VII · Turn It Around', t: 'The same two facts, in the other order.', p: 'Read the SO sentence. Tap the result, then BECAUSE, then the reason.' },
  { k: 'faria', est: 'o', min: 7, extra: 1, img: 'cap3', rot: 'VIII · What Do You Do?', t: 'No name. No number. And a cat that is not eating.', p: 'Choose one and say why, with because. Then say what you don’t do.' },
  { k: 'cap4', est: 'l', min: 7, extra: 1, img: 'cap4', rot: 'IX · Chapter Four', t: 'Seventy-Three', p: 'Listen first. Then the text. Then find the street, and say why.' },
  { k: 'ordem', est: 'o', min: 7, extra: 1, img: 'cap4', rot: 'X · Tell It Back', t: 'First, then, in the end.', p: 'Tap what happens next. Say it with the word on the left.' },
  { k: 'cap5', est: 'l', min: 7, extra: 1, img: 'cap5', rot: 'XI · Chapter Five', t: 'In the End', p: 'Listen first. Then the text. Then read the last line of the list.' },
  { k: 'semana', est: 'o', min: 7, extra: 1, img: 'cap5', rot: 'XII · Your Week', t: 'One true story from your week.', p: 'Five sentences. It does not have to be interesting. Use the four words.' },
  { k: 'fim', est: 'w', min: 6, img: 'cap5', rot: 'XIII · Six Eggs', t: 'Write your true story.', p: 'Five sentences with and, but, so and because. A comma before and, but, so.' }
];

var MANHA = [
  { k: 'LEAVING', q: 'What time do you leave home in the morning? How do you go?', fup: 'Do you like it?', st: ['I leave at …, and I take …'], ex: 'I leave at seven, and I take the bus.' },
  { k: 'YOUR BAG', q: 'What do you always have in your bag? Why?', fup: 'And what is never in your bag?', st: ['I always have …, because …'], ex: 'I always have an umbrella, because it rains a lot here.' },
  { k: 'MORNINGS', q: 'Do you like mornings?', fup: 'What is the best part?', st: ['I like …, but …'], ex: 'I like mornings, but I don’t like getting up.' },
  { k: 'LOSING', q: 'Do you lose things? What do you do then?', fup: 'What do you often lose?', st: ['I sometimes lose my …, so I …'], ex: 'I sometimes lose my keys, so I keep them in my bag.' }
];
var FORMAS = [{ k: 'and', t: 'and' }, { k: 'but', t: 'but' }, { k: 'so', t: 'so' }, { k: 'because', t: 'because' }, { k: 'virada', t: 'BUT WITH NO TURN', erro: 1 }, { k: 'troca', t: 'SO ↔ BECAUSE SWAPPED', erro: 1 }, { k: 'ponto', t: '“BECAUSE.” ALONE', erro: 1 }];

var CAPS = {
  cap1: { n: 1, tit: 'The 7:40', hora: 'MONDAY · 7:40 AM', img: 'cap1', au: 'cap1.mp3',
    linhas: ['Sofia takes the 7:40 train every morning.', 'She always sits in the same seat.', 'On Monday there is a small brown notebook on it.', 'There is no name on the front, <b>and</b> there is no phone number.', 'The notebook is old, <b>and</b> it is nearly full.', 'Sofia waits, <b>but</b> nobody comes back for it.', 'The train is at her station, <b>so</b> she puts the notebook in her bag.'],
    perg: ['Where is the notebook now?', 'Why does Sofia take it? Answer with because.'], ex: ['It is in Sofia’s bag.', 'She takes it because nobody comes back for it.'] },
  cap2: { n: 2, tit: 'Six Eggs', hora: 'MONDAY · 9:15 AM', img: 'cap2', au: 'cap2.mp3', lista: 1,
    linhas: ['At work, Sofia opens the notebook.', 'The first page is a short list: bread, milk, six eggs.', 'Next to the eggs there is a small drawing of an egg.', 'Six eggs is a lot of eggs for a list with three things on it.', 'Under the list there is one more line, <b>but</b> Sofia cannot read it.', 'The writing is very small <b>and</b> very fast.'],
    perg: ['How many things can Sofia read on the list?', 'Why can she not read the last line?', 'Guess: what is on the last line?'], ex: ['Three: bread, milk, six eggs.', 'She can’t read it because the writing is very small and very fast.', 'I think it is …'] },
  cap3: { n: 3, tit: 'Page Four', hora: 'MONDAY · 9:20 AM', img: 'cap3', au: 'cap3.mp3',
    linhas: ['On page four there is a drawing of a cat.', 'It is a very bad drawing, <b>but</b> it is a cat.', 'Under the cat there is one line:', '<i>Sunday. He is still not eating.</i>', 'Sofia looks at her phone. Today is Monday.', 'She closes the notebook, <b>and</b> then she opens it again.'],
    perg: ['Who is “he”?', 'Why does Sofia open the notebook again?'], ex: ['He is the cat.', 'She opens it again because she is worried about the cat.'] },
  cap4: { n: 4, tit: 'Seventy-Three', hora: 'MONDAY · 5:50 PM', img: 'cap4', au: 'cap4.mp3', ruas: 1,
    linhas: ['Near the end there is an address, <b>but</b> the page is wet.', 'The name of the street is gone. One thing is still black: the number 73.', 'Sofia knows the three streets near the station.', 'Only one of them has a number 73, <b>because</b> the other two stop at 40.', 'She looks at the clock. Her train home is at 6:10.', '<b>So</b> she does not go to the station. She walks.'],
    perg: ['How does Sofia know which street it is?', 'What does she lose when she walks?'], ex: ['She knows because the other two streets stop at 40.', 'She loses her train home.'] },
  cap5: { n: 5, tit: 'In the End', hora: 'MONDAY · 6:05 PM', img: 'cap5', au: 'cap5.mp3', lista: 2,
    linhas: ['Number 73 is a small house with a red door.', 'An old man opens it. Sofia gives him the notebook.', 'He does not say thank you. He says: “Page four?”', '“I write everything down, <b>because</b> I forget things.”', 'Then he takes her to the kitchen.', 'The cat is asleep in a big box, next to the heater.', '“He ate this morning,” says the man. “He only eats egg.”', '“On Sunday he was not eating, <b>but</b> I bought six.”', '“Why six?” “<b>Because</b> he is going to eat them.”', 'In the end Sofia misses the 6:10, <b>and</b> she is not sorry.'],
    perg: ['What is the last line on the list?', 'Why does the man have six eggs?', 'Sofia misses her train. Is she sorry? Why not?'], ex: ['A big box.', 'He has six because the cat is going to eat them.', 'No, she isn’t sorry, because the cat is OK.'] }
};

var APOSTA = ['Work: meetings, numbers, nothing interesting.', 'A diary: somebody’s private week.', 'Lists: shopping, things to do, names.', 'Drawings.'];
var FARIA = ['Nothing. It is not my notebook.', 'Take it back to the station.', 'Read the whole notebook, and then decide.', 'Look for an address, and go.'];

var PARES = [
  { a: 'Bread is normal.', b: 'Milk is normal.', ok: 'and', j: 'Bread is normal, and milk is normal.', fb: 'They agree. Nothing turns: and.' },
  { a: 'Sofia waits.', b: 'Nobody comes back.', ok: 'but', j: 'Sofia waits, but nobody comes back.', fb: 'She wants one thing and gets the other. That turn is but.' },
  { a: 'The train is at her station.', b: 'She puts the notebook in her bag.', ok: 'so', j: 'The train is at her station, so she puts the notebook in her bag.', fb: 'The second fact is what she does about the first: so.' },
  { a: 'The notebook is old.', b: 'It is nearly full.', ok: 'and', j: 'The notebook is old, and it is nearly full.', fb: 'Two facts, same direction: and.' },
  { a: 'It is a very bad drawing.', b: 'It is a cat.', ok: 'but', j: 'It is a very bad drawing, but it is a cat.', fb: 'A bad drawing, but you can still see the cat. A turn: but.' }
];
var NAO_J = { and: 'AND keeps the same direction. Do these two facts agree, or does something change?', but: 'BUT needs a turn: the second fact goes the other way. Is there a turn here?', so: 'SO puts the result second. Is the second fact a result of the first?', because: 'BECAUSE puts the reason second. Is the second fact the reason for the first?' };

var VIRA = [
  { so: 'The paper is wet, so she cannot read the street.', p: ['She cannot read the street', 'because', 'the paper is wet.'] },
  { so: 'Nobody comes back, so she puts the notebook in her bag.', p: ['She puts the notebook in her bag', 'because', 'nobody comes back.'] },
  { so: 'The writing is very small, so she cannot read the last line.', p: ['She cannot read the last line', 'because', 'the writing is very small.'] },
  { so: 'The man forgets things, so he writes everything down.', p: ['He writes everything down', 'because', 'he forgets things.'] },
  { so: 'The other two streets stop at 40, so she knows the street.', p: ['She knows the street', 'because', 'the other two streets stop at 40.'] }
];

var RUAS = [{ n: 'MILL ROAD', r: '1 – 40' }, { n: 'STATION STREET', r: '1 – 40' }, { n: 'CANAL STREET', r: '1 – 96' }];
var MARCAS = ['First', 'Then', 'Then', 'After that', 'Then', 'In the end'];
var EVENTOS = ['Sofia finds a notebook on her train seat.', 'Nobody comes back, so she puts it in her bag.', 'At work she reads a list: bread, milk, six eggs.', 'On page four there is a cat, and a line about Sunday.', 'The address is wet, but she can read the number 73.', 'She misses her train, and she walks to the house.'];
var ORDEM_TELA = [3, 0, 5, 1, 4, 2];

var PALAVRAS = [{ w: 'and', d: 'two things, same direction' }, { w: 'but', d: 'the turn' }, { w: 'so', d: 'the result comes second' }, { w: 'because', d: 'the reason comes second' }, { w: 'first · then · in the end', d: 'the order of the story' }];
var ERROS_S = [{ k: 'virada', t: 'BUT WITH NO TURN', r: 'No turn here: the two facts agree. Try and.' }, { k: 'troca', t: 'SO ↔ BECAUSE SWAPPED', r: 'Which half is the reason? The reason comes after because, the result after so.' }, { k: 'ponto', t: '“BECAUSE.” ALONE', r: 'Keep it one sentence: I stay home because it is cold.' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  manha: { sel: -1, foi: {}, formas: {} }, cap: {}, aposta: -1, faria: -1, junta: { n: 0, esc: '' }, vira: { n: 0, usados: [], err: -1 },
  rua: -1, ordem: { n: 0, err: -1 }, semana: { pal: {}, erros: {} } };

function caderno(modo) {
  var revela = modo === 2;
  return '<div class="caderno"><small>MONDAY · THE LIST</small><p>bread</p><p>milk</p><p>six eggs <span class="ovo">🥚</span></p><p class="ilegivel' + (revela && S.cap.listaAberta ? ' aberta' : '') + '">' + (revela && S.cap.listaAberta ? 'a big box' : '<span>~~~ ~~~</span>') + '</p>'
    + (revela && !S.cap.listaAberta ? '<button type="button" class="pilula" data-a="lista">Read the last line</button>' : '') + '</div>';
}

function capitulo(c, k) {
  var x = CAPS[k], st = S.cap[k] || {}, ouviu = (S.ouviu || {})[x.au];
  var texto = st.texto ? '<div class="linhas">' + x.linhas.map(function (l) { return '<p>' + l + '</p>'; }).join('') + '</div>'
    : '<div class="linhas fechadas"><p class="dica-aluno">' + (ouviu ? 'Listen first. Now open the text and read it together.' : 'Listen first. The text is closed.') + '</p>' + (ouviu ? '<button type="button" class="btn cheio" data-a="cp-texto" data-c="' + k + '">Open the text</button>' : '') + '</div>';
  var extra = '';
  if (x.lista) extra = caderno(x.lista);
  var ruas = '';
  if (x.ruas && st.texto) ruas = '<div class="ruas"><h5>THE ADDRESS SAYS 73. WHICH STREET?</h5><div class="placas-r">' + RUAS.map(function (r, i) { return '<button type="button" class="placa-r' + (S.rua === i ? (i === 2 ? ' certo' : ' errado') : '') + '" data-a="rua" data-n="' + i + '"><b>' + r.n + '</b><small>' + r.r + '</small></button>'; }).join('') + '</div>'
    + (S.rua >= 0 && S.rua !== 2 ? '<p class="recusa">Look at the numbers on the sign. Can this street have a number 73?</p>' : '') + (S.rua === 2 ? '<p class="aprova">Say it: It is Canal Street, because the other two streets stop at 40.</p>' : '') + '</div>';
  var perguntas = st.texto ? (st.perg ? '<div class="perg-cap">' + x.perg.map(function (q, i) { return '<div class="pq"><span>' + (i + 1) + '</span><p>' + q + '</p>' + mostra(k + 'q' + i, x.ex[i]) + '</div>'; }).join('') + '</div><div><button type="button" class="pilula" data-a="cp-perg" data-c="' + k + '">← Back to the text</button></div>'
    : '<div><button type="button" class="btn" data-a="cp-perg" data-c="' + k + '">The questions →</button></div>') : '';
  if (st.perg) texto = '';
  return cab(c) + '<div class="mesa-cap"><div class="lado-foto"><div class="foto-cap vd" style="background-image:url(' + img(x.img) + ')"><span class="hora">' + x.hora + '</span><span class="num">CHAPTER ' + x.n + '</span></div>'
    + '<div class="toca-linha vd">' + tocar(x.au) + '<span>' + x.tit + '</span></div>' + extra + ruas + '</div><div class="lado-texto">' + texto + perguntas + '</div></div>';
}

function escolha(c, lista, sel, toque, moldes, chave) {
  return cab(c) + '<div class="mesa-esc"><div class="opcoes">' + lista.map(function (o, i) { return '<button type="button" class="opcao vd' + (sel === i ? ' on' : '') + '" data-a="' + toque + '" data-n="' + i + '"><span>' + String.fromCharCode(65 + i) + '</span>' + o + '</button>'; }).join('') + '</div>'
    + '<div class="lado-esc">' + (sel >= 0 ? fala(chave, moldes, []) : '<p class="dica-aluno">Pick one first.</p>') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · EASY READER</span><h1>Six <b>Eggs</b></h1>'
    + '<p class="sub">A notebook on the 7:40 train. No name, no number, a list with six eggs, and half an address.</p>'
    + '<div class="chipsx"><span class="pilula">and</span><span class="pilula">but</span><span class="pilula">so</span><span class="pilula">because</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Take the 7:40</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('cap1') + '" alt="A brown notebook on a train seat"><div class="bilhete"><small>MONDAY</small><b>7:40</b><span>5 chapters</span></div></div></div>';
};

R.manha = function (c) {
  return cartasPessoais(c, MANHA, S.manha, 'manha') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.manha.formas[f.k] ? ' on' : '') + '" data-a="mh-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};
R.cap1 = function (c) { return capitulo(c, 'cap1'); };
R.cap2 = function (c) { return capitulo(c, 'cap2'); };
R.cap3 = function (c) { return capitulo(c, 'cap3'); };
R.cap4 = function (c) { return capitulo(c, 'cap4'); };
R.cap5 = function (c) { return capitulo(c, 'cap5'); };
R.aposta = function (c) { return escolha(c, APOSTA, S.aposta, 'ap', ['I think it is … because …', 'Maybe it is …, but …', 'It is not …, because …'], 'ap'); };
R.faria = function (c) { return escolha(c, FARIA, S.faria, 'fr', ['I choose … because …', 'I don’t choose …, because …', 'It is safe, but …'], 'fr'); };

R.junta = function (c) {
  var j = S.junta, n = j.n, fim = n >= PARES.length, x = PARES[Math.min(n, PARES.length - 1)];
  if (fim) return cab(c) + trilha(PARES, n) + '<div class="foco"><div class="pergunta vd"><small>SEVEN PAIRS</small><h2>The last two are the same two facts: A, so B is B because A.</h2></div></div>';
  var ok = j.esc === x.ok;
  return cab(c) + trilha(PARES, n) + '<div class="tiras"><span class="tira">' + x.a + '</span><span class="cola' + (ok ? ' cheia' : '') + '">' + (ok ? x.ok : '+') + '</span><span class="tira">' + x.b + '</span></div>'
    + '<div class="tres-b centro">' + ['and', 'but', 'so', 'because'].map(function (o) { return '<button type="button" class="pilula grande' + (j.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="jt" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
    + (j.esc && !ok ? '<p class="recusa" style="text-align:center">' + NAO_J[j.esc] + '</p>' : '')
    + (ok ? '<div class="junta vd"><small>ONE SENTENCE</small><p>' + x.j.replace(' ' + x.ok + ' ', ' <b>' + x.ok + '</b> ') + '</p><em>' + x.fb + '</em></div><div style="text-align:center"><button type="button" class="btn" data-a="jt-prox">Next pair</button></div>' : '');
};

R.vira = function (c) {
  var v = S.vira, n = v.n, fim = n >= VIRA.length;
  if (fim) return cab(c) + trilha(VIRA, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE SENTENCES</small><h2>A, so B and B because A say the same thing.</h2></div>' + follow('YOUR DAY', 'One SO sentence about your day. Then turn it around.', ['…, so …', '… because …'], [], 'vrf') + '</div>';
  var x = VIRA[n], pecas = ordem(x.p.concat(['so']), n + 1), feitas = v.usados.map(function (i) { return pecas[i]; }), ok = feitas.length === 3;
  return cab(c) + trilha(VIRA, n) + '<div class="foco"><div class="pergunta vd ja"><small>THE SO SENTENCE</small><h2>' + x.so.replace(' so ', ' <b>so</b> ') + '</h2></div>'
    + '<div class="pergunta vd"><small>TURN IT AROUND</small><h2 class="montada">' + (feitas.length ? feitas.join(' ').replace(' because ', ' <b>because</b> ') : '<span class="vaga">result · because · reason</span>') + '</h2></div>'
    + (ok ? '<p class="aprova" style="text-align:center">Now say both sentences out loud.</p><div style="text-align:center"><button type="button" class="btn" data-a="vr-prox">Next</button></div>'
      : '<div class="pecas">' + pecas.map(function (w, i) { var u = v.usados.indexOf(i) >= 0; return '<button type="button" class="peca' + (u ? ' usada' : '') + (v.err === i ? ' errado' : '') + '" data-a="vr" data-n="' + i + '"' + (u ? ' disabled' : '') + '>' + w + '</button>'; }).join('') + '</div>'
      + (v.err >= 0 ? '<p class="recusa" style="text-align:center">' + (pecas[v.err] === 'so' ? 'Not SO this time. The reason comes second, so the word is because.' : 'Not yet. Start with the result: the thing that happens.') + '</p>' : '')) + '</div>';
};

R.ordem = function (c) {
  var o = S.ordem, n = o.n, fim = n >= EVENTOS.length;
  return cab(c) + '<div class="mesa-ordem"><div class="historia vd">' + EVENTOS.map(function (e, i) { return '<div class="ev' + (i < n ? ' feito' : '') + '"><b>' + MARCAS[i] + '</b><span>' + (i < n ? (/^Sofia/.test(e) ? e : e.charAt(0).toLowerCase() + e.slice(1)) : '…') + '</span></div>'; }).join('') + '</div>'
    + '<div class="lado-ordem">' + (fim ? '<p class="aprova">Six sentences, in order, out loud. Now watch her knock.</p>' : '<h5>WHAT HAPPENS NEXT?</h5>' + ORDEM_TELA.map(function (i) { return i < n ? '' : '<button type="button" class="ev-op' + (o.err === i ? ' errado' : '') + '" data-a="od" data-n="' + i + '">' + EVENTOS[i] + '</button>'; }).join('')
      + (o.err >= 0 ? '<p class="recusa">That happens, but not now. What comes next in the story?</p>' : '')) + '</div></div>';
};

R.semana = function (c) {
  var s = S.semana;
  return cab(c) + '<div class="mesa-semana"><div class="foco"><div class="pergunta vd"><small>YOUR WEEK</small><h2>One small true thing from your week, in five sentences.</h2></div>' + fala('sem', ['On Monday I …', 'First …, then …', 'In the end …'], []) + '</div>'
    + '<div class="lado-semana"><div class="partes"><h5>THE WORDS YOU USE RIGHT</h5>' + PALAVRAS.map(function (p, i) { return '<button type="button" class="chip frase' + (s.pal[i] ? ' on' : '') + '" data-a="sm-p" data-n="' + i + '">' + p.w + '<small> · ' + p.d + '</small></button>'; }).join('') + '</div>'
    + '<div class="partes"><h5>MISTAKE HEARD</h5>' + ERROS_S.map(function (e) { return '<button type="button" class="chip frase erro-ouvido' + (s.erros[e.k] ? ' on' : '') + '" data-a="sm-e" data-v="' + e.k + '">' + e.t + '</button>'; }).join('') + '</div>'
    + ERROS_S.filter(function (e) { return s.erros[e.k]; }).map(function (e) { return '<p class="recusa">' + e.r + '</p>'; }).join('') + '</div></div>';
};

R.fim = function (c) {
  var f = S.manha.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'On Monday I …, but …', 'Your true story',
    [', and ', ', but ', ', so ', ' because ', 'First, ', 'Then ', 'In the end, '], ['YOUR STORY', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now five sentences, one comma before and, but, so.' : 'Five sentences: and, but, so, because, and the order of the story.'])
    + '<div class="lado-fim"><div class="cartoes-fim">' + [['AND · BUT', 'And puts two facts side by side. But turns the second one around.'], ['SO · BECAUSE', 'Same two facts, other order: A, so B is B because A.'], ['ONE SENTENCE', 'A comma before and, but, so, and a small letter after it.']].map(function (k) { return '<div class="ct vd"><b>' + k[0] + '</b><p>' + k[1] + '</p></div>'; }).join('') + '</div>'
    + '<p class="ultima">Six eggs, on a Sunday, for a cat that is not eating, <b>because</b> he is going to eat them.</p>'
    + mostra('fim', 'I miss the bus, so I walk. It is cold, but the street is beautiful.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['mh-f'] = function (b, n, v) { S.manha.formas[v] = !S.manha.formas[v]; };
TOQUES['cp-texto'] = function (b, n, v, c) { var x = CAPS[c]; if (!x || !(S.ouviu || {})[x.au]) return false; S.cap[c] = S.cap[c] || {}; S.cap[c].texto = 1; };
TOQUES['cp-perg'] = function (b, n, v, c) { S.cap[c] = S.cap[c] || {}; S.cap[c].perg = !S.cap[c].perg; };
TOQUES.lista = function () { S.cap.listaAberta = 1; };
TOQUES.rua = function (b, n) { S.rua = n; };
TOQUES.ap = function (b, n) { S.aposta = n; };
TOQUES.fr = function (b, n) { S.faria = n; };
TOQUES.jt = function (b, n, v) { S.junta.esc = v; };
TOQUES['jt-prox'] = function () { S.junta = { n: S.junta.n + 1, esc: '' }; };
TOQUES.vr = function (b, n) {
  var v = S.vira, x = VIRA[v.n]; if (!x) return false; var pecas = ordem(x.p.concat(['so']), v.n + 1);
  if (pecas[n] === x.p[v.usados.length]) { v.usados.push(n); v.err = -1; } else v.err = n;
};
TOQUES['vr-prox'] = function () { S.vira = { n: S.vira.n + 1, usados: [], err: -1 }; };
TOQUES.od = function (b, n) { var o = S.ordem; if (n === o.n) { o.n++; o.err = -1; } else o.err = n; };
TOQUES['sm-p'] = function (b, n) { S.semana.pal[n] = !S.semana.pal[n]; };
TOQUES['sm-e'] = function (b, n, v) { S.semana.erros[v] = !S.semana.erros[v]; };
