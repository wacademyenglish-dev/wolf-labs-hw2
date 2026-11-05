/* ============================================================
   THE FRIDGE DOOR · LIVE CLASS  05/10/2026
   Main series A1 · easy reader · still / already / not … yet
   O MUNDO: Marco no turno da noite a semana inteira (chega às 8:00 AM),
   Bea sai às 7:30 AM. Trinta minutos e eles nunca se encontram: tudo o
   que dizem fica na PORTA DA GELADEIRA (desenhada em CSS, grafite, com
   bilhetes ESCUROS). Os bilhetes sobem e descem pelos dias; o de segunda,
   sob o ímã vermelho, não desce: ARE YOU STILL HAPPY HERE? No domingo,
   atrás dele: I AM STILL HERE. A virada da história é a da gramática.
   Sem áudio (a aula nunca teve). A aula velha tinha português no guia e
   numa cena (o “já”); a Live é toda em inglês (edição internacional).
   Fila: FILA-LIVE-386.md · 023.
   ============================================================ */
var DIAS = ['', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
var NOTAS = [
  { id: 'gas', t: 'GAS BILL', sub: 'pay by Thursday', desde: 1, ate: 1, x: 8, y: 14, rot: -3 },
  { id: 'bread', t: 'BREAD', sub: 'there is none', desde: 1, ate: 5, x: 54, y: 12, rot: 3 },
  { id: 'plant', t: 'THE PLANT', sub: 'I cannot reach it', desde: 1, ate: 4, x: 8, y: 42, rot: 4 },
  { id: 'window', t: 'THE WINDOW', sub: 'it does not close', desde: 3, ate: 5, x: 52, y: 40, rot: -2 },
  { id: 'monday', t: 'MONDAY', sub: '(folded)', desde: 1, ate: 6, x: 28, y: 68, rot: 2, red: 1 }
];

var L = [
  { k: 'capa', est: null, img: 'cozinha' },
  { k: 'abre', est: 'o', min: 7, img: 'cozinha', rot: 'I · Before the Door', t: 'Four short answers about today.', p: 'Pick a card. Answer out loud. Your teacher writes it down and says nothing.' },
  { k: 'cap1', est: 'o', min: 7, img: 'cozinha', rot: 'II · Chapter One', t: 'Thirty Minutes', p: 'Read it together, line by line. Then the questions.' },
  { k: 'porta1', est: 'f', min: 6, img: 'cozinha', rot: 'III · The First Days', t: 'The door is the question. Read it before you choose.', p: 'One round at a time. When you get it right, the door moves.' },
  { k: 'cap2', est: 'o', min: 7, img: 'mesa', rot: 'IV · Chapter Two', t: 'A Full Door', p: 'Read it together. Then the questions.' },
  { k: 'porta2', est: 'f', min: 6, img: 'mesa', rot: 'V · Seven Days', t: 'Read the day on the door. Then say the whole sentence.', p: 'Already, still or yet. Then the sentence, out loud.' },
  { k: 'cap3', est: 'o', min: 7, img: 'sala', rot: 'VI · Chapter Three', t: 'Almost Empty', p: 'Read it together. Then the questions.' },
  { k: 'lugar', est: 'f', min: 6, extra: 1, img: 'sala', rot: 'VII · Where the Word Goes', t: 'Three sentences, and two put the word in the wrong place.', p: 'Say all three out loud. Then pick the one that sounds right.' },
  { k: 'cap4', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'VIII · Chapter Four', t: 'Five Words', p: 'Read it together. Then open the note.' },
  { k: 'dois', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'IX · Yes, or No?', t: 'In many languages one word does both jobs. In English it is two.', p: 'A yes takes already. A no or a question takes yet. Read the situation first.' },
  { k: 'cap5', est: 'o', min: 7, extra: 1, img: 'cozinha', rot: 'X · Chapter Five', t: 'The Empty Door', p: 'Read it together. Then turn the note over.' },
  { k: 'sua', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'XI · Your Own Door', t: 'Your kitchen now. Six notes, and every one is true.', p: 'One real sentence for each. Say it out loud, and the note goes up on your door.' },
  { k: 'fim', est: 'w', min: 6, img: 'cozinha', rot: 'XII · Still', t: 'Write your own fridge door.', p: 'Six notes: already, not … yet, still, still not, a question with yet. The red line watches the place of the word. It goes to your My notes.' }
];

var ABRE = [
  { k: 'FINISHED', q: 'One thing in your day that is finished. And early?', fup: 'Is it early?', st: ['I already …', '… is already …'], ex: 'My coffee is already finished. It’s only nine!' },
  { k: 'NOT FINISHED', q: 'One thing that is not finished.', fup: 'When is it going to be finished?', st: ['… is not … yet.'], ex: 'My report is not ready yet.' },
  { k: 'NEVER CHANGES', q: 'One thing in your house that never changes.', fup: 'Is that good or bad?', st: ['… is still …'], ex: 'The kitchen light is still broken.' },
  { k: 'WAITING', q: 'Ask me about something you are waiting for.', fup: 'And you? What are you waiting for?', st: ['Is … here yet?', 'Are you … yet?'], ex: 'Is your new phone here yet?' }
];
var FORMAS = [{ k: 'already', t: 'ALREADY' }, { k: 'still', t: 'STILL' }, { k: 'yet', t: '… YET' }, { k: 'naoal', t: 'NOT ALREADY', erro: 1 }, { k: 'pergal', t: 'IS IT ALREADY…? (FOR WAITING)', erro: 1 }];

var CAPS = {
  cap1: { n: 'One', tit: 'Thirty Minutes', hora: 'MONDAY · 7:30 AM', img: 'cozinha',
    linhas: ['Bea and Marco live in a small apartment with a big old fridge.', 'This week Marco is on the night shift. He gets home at eight in the morning.', 'Bea leaves for work at half past seven.', 'Thirty minutes, every day, and the two of them never meet.', 'So they do not talk. They write, and the fridge door is where they write.', 'On Monday there are four notes on it. One of them is under a red magnet, at the bottom.'],
    papel: ['BREAD: there is none', 'GAS BILL: pay it by Thursday', 'THE PLANT: I cannot reach it'],
    perg: ['What time does Bea leave? What time does Marco get home?', 'Where is the fourth note? What color is the magnet?'],
    ex: ['Bea leaves at 7:30 AM. Marco gets home at 8:00 AM.', 'It is at the bottom, under a red magnet.'] },
  cap2: { n: 'Two', tit: 'A Full Door', hora: 'WEDNESDAY · 7:20 AM', img: 'mesa',
    linhas: ['It is Wednesday. There are four notes on the door.', 'They are not the same four. The gas bill is not there any more.', 'There is a new one about the window, because the window does not close.', 'The bread note is <b>still</b> on the door. Nobody goes to the store at eight in the morning.', 'And at the bottom, under the red magnet, there is the one from Monday.', 'Nobody takes it down. It is going yellow at the top.'],
    papel: ['THE WINDOW: it does not close', 'BREAD: still none'],
    perg: ['Which note is not on the door now? Why?', 'The Monday note is old now. How many days?'],
    ex: ['The gas bill. It is paid.', 'Three days.'] },
  cap3: { n: 'Three', tit: 'Almost Empty', hora: 'FRIDAY · 7:25 AM', img: 'sala',
    linhas: ['Friday. The door is not full any more.', 'The gas bill is paid. The plant is watered.', 'Three notes are left: the bread, the window, and one more.', 'The last one is at the bottom, under the red magnet. It went up on Monday.', 'It is five words long, in Bea’s writing, and the top of the paper is yellow now.', 'Bea reads it every morning. Marco reads it every night. Neither of them takes it down.'],
    perg: ['How many notes are left on the door?', 'Does Marco read the note?'],
    ex: ['Three notes.', 'Yes. Marco reads it every night.'] },
  cap4: { n: 'Four', tit: 'Five Words', hora: 'SATURDAY · 7:00 AM', img: 'mesa', nota: 'ARE YOU STILL HAPPY HERE?',
    linhas: ['On Saturday morning Bea is in the kitchen at seven.', 'She takes the note off the door. The paper is soft, and the top of it is yellow.', 'It is her own writing, from Monday. Five words, and a question mark.'],
    perg: ['Whose writing is it? Who is the question for?', 'Does she take it down?'],
    ex: ['It is Bea’s writing. The question is for Marco.', 'No. She puts it back.'] },
  cap5: { n: 'Five', tit: 'The Empty Door', hora: 'SUNDAY · 9:00 AM', img: 'cozinha', nota: 'I AM STILL HERE.', virar: 1,
    linhas: ['Sunday. Marco is not at work.', 'Bea comes into the kitchen at nine. The door is empty.', 'Every note is gone. The red magnet is on the table.', 'The Monday note is on the table too, turned over.', 'On the back there are four words, in Marco’s writing.', 'He is at the window with two cups of coffee. “You are <b>already</b> awake,” he says. “And I am not going to bed <b>yet</b>.”'],
    perg: ['What is on the fridge door on Sunday?', 'What does Marco write on the back?'],
    ex: ['Nothing. The door is empty.', 'I am still here.'] }
};

var R1 = [
  { dia: 2, alvo: 'gas', cab: 'Tuesday. The bill is for Thursday. It is paid, and the note is gone.', fr: 'The gas bill is __ paid.', ok: 'already', fb: 'Already: it is done, and early.', nao: { still: 'Still says nothing changed. But the note is gone.', yet: 'Yet is for a no or a question. This is a yes.' } },
  { dia: 2, alvo: 'bread', cab: 'Tuesday. The bread note is on the door. Nobody goes to the store.', fr: 'The bread note is __ on the door.', ok: 'still', fb: 'Still: it is there today, like yesterday. Nothing changes.', nao: { already: 'Already means early. Nothing is early here.', yet: 'Yet is for a no or a question. This is a yes.' } },
  { dia: 3, alvo: 'bread', cab: 'Wednesday. Bea looks in the cupboard. There is no bread.', fr: 'The bread is not here __.', ok: 'yet', fb: 'Yet: a no, and you wait. It goes at the end.', nao: { already: 'A no never takes already.', still: 'Still goes before not, not at the end.' } },
  { dia: 3, alvo: 'plant', cab: 'Wednesday. Marco knows about the plant from Monday.', fr: 'Marco __ knows about the plant.', ok: 'already', fb: 'Already, before the verb. He knows early.', nao: { still: 'Still does not fit here. Knowing does not stop.', yet: 'A yes never takes yet.' } }
];
var R2 = [
  { dia: 1, cab: 'Monday, 7:30. Bea has her coat on. Marco is on his way.', fr: 'Marco is not home __.', ok: 'yet', fb: 'Yet: a no, and he is coming. At the end.', nao: { already: 'A no never takes already.', still: 'Still is for a long wait. He is not late.' } },
  { dia: 1, cab: 'Monday, 8:00. Marco is home. The coffee cup is warm.', fr: 'Bea is __ at work.', ok: 'already', fb: 'Already: early, and a surprise.', nao: { still: 'Still says nothing changed. Bea left.', yet: 'Yet is for a no or a question.' } },
  { dia: 3, cab: 'Wednesday. The bread note is on the door. It is going yellow.', fr: 'The bread is __ on the list.', ok: 'still', fb: 'Still: three days, and no change.', nao: { already: 'Already needs something early.', yet: 'Yet needs a no or a question.' } },
  { dia: 6, cab: 'Saturday, 8:00. Marco stops at the store on his way home.', fr: 'The bread is __ in the kitchen.', ok: 'already', fb: 'Already: a surprise, and early.', nao: { still: 'Still says it is always there.', yet: 'A yes never takes yet.' } }
];
var LUGAR = [
  { dia: 3, cab: 'Wednesday. The bread note is on the door.', f: ['The bread is still on the list.', 'The bread is on the list still.', 'The bread still is on the list.'], fb: 'After is, and nothing between them.', nao: ['', 'Still never goes at the end.', 'After is, the word goes after the verb.'] },
  { dia: 3, cab: 'Wednesday. Marco reads the plant note every morning.', f: ['He already knows about the plant.', 'He knows already about the plant.', 'Already he knows about the plant.'], fb: 'With a normal verb, the word comes before it.', nao: ['', 'Already goes before a normal verb.', 'Keep the word in the middle.'] },
  { dia: 5, cab: 'Friday, 7:30. Bea is at the door with her coat on.', f: ['Marco is not home yet.', 'Marco is not already home.', 'Marco is yet not home.'], fb: 'A no: yet, at the end.', nao: ['', 'A no never takes already.', 'Yet goes at the end.'] },
  { dia: 5, cab: 'Friday. Bea reads the Monday note again before work.', f: ['She still reads it every morning.', 'She reads it still every morning.', 'She reads still it every morning.'], fb: 'In front of the normal verb.', nao: ['', 'Put still before the verb.', 'Never between the verb and its thing.'] }
];
var DOIS = [
  { dia: 1, cab: 'A yes, and he is early.', fr: 'He is __ home.', ok: 'already', fb: 'Already. A yes takes already.', nao: { yet: 'Yet is for a no or a question. This is a yes.' } },
  { dia: 1, cab: 'A question, and you are waiting.', fr: 'Is he home __?', ok: 'yet', fb: 'Yet, at the end. In a question, you wait.', nao: { already: 'In a question you wait: yet.' } },
  { dia: 3, cab: 'A no, and the bread is coming.', fr: 'I do not have the bread __.', ok: 'yet', fb: 'Not … yet: at the end.', nao: { already: 'Already never goes in a no.' } },
  { dia: 4, cab: 'A yes, and you knew before.', fr: 'I __ know.', ok: 'already', fb: 'Already, before the verb.', nao: { yet: 'A yes never takes yet.' } }
];

var NOTINHAS = [
  { w: 'already', d: 'something in your week that is done early' }, { w: 'not … yet', d: 'something that is not done, and that you will do' },
  { w: 'still', d: 'something that has not changed since last month' }, { w: 'still not', d: 'something you are waiting for, and it is late' },
  { w: '… yet?', d: 'a question for somebody who lives with you' }, { w: 'already', d: 'a person who knew something before you told them' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, cap: {}, p1: { n: 0, esc: '' }, p2: { n: 0, esc: '' }, lugar: { n: 0, esc: -1 }, dois: { n: 0, esc: '' }, sua: {} };

function porta(dia, alvo, extra) {
  return '<div class="porta-g' + (extra || '') + '"><div class="puxador"></div><span class="dia-p">' + DIAS[dia] + '</span>' + NOTAS.map(function (n) {
    var na = dia >= n.desde && dia <= n.ate;
    return '<div class="nota' + (na ? '' : ' fora') + (n.red ? ' vermelha' : '') + (alvo === n.id ? ' alvo' : '') + '" style="left:' + n.x + '%;top:' + n.y + '%;--r:' + n.rot + 'deg"><i class="ima"></i><b>' + n.t + '</b><small>' + n.sub + '</small></div>';
  }).join('') + '</div>';
}
function cenaPorta(c, lista, est, toque, ops) {
  var n = est.n, fim = n >= lista.length, x = lista[Math.min(n, lista.length - 1)];
  var ok = est.esc === x.ok, diaV = ok && x.alvo === 'gas' ? x.dia : x.dia;
  if (fim) return cab(c) + '<div class="mesa-porta">' + porta(x.dia + (lista === R1 ? 0 : 0)) + '<div class="lado-porta"><div class="pergunta vd"><small>' + lista.length + ' ROUNDS</small><h2>Already: early. Still: no change. Yet: in a no or a question, at the end.</h2></div></div></div>';
  var frase = x.fr.replace('__', ok ? '<b>' + x.ok + '</b>' : '<span class="vaga">____</span>');
  return cab(c) + trilha(lista, n) + '<div class="mesa-porta">' + porta(diaV, x.alvo, ok && x.alvo === 'gas' ? ' sem-gas' : '') + '<div class="lado-porta"><div class="pergunta vd ja"><small>' + DIAS[x.dia] + '</small><h2>' + x.cab + '</h2></div>'
    + '<p class="frase-p">' + frase + '</p>'
    + '<div class="tres-b">' + ops.map(function (o) { return '<button type="button" class="pilula grande' + (est.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="' + toque + '" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
    + (est.esc && !ok ? '<p class="recusa">' + x.nao[est.esc] + '</p>' : '')
    + (ok ? '<p class="aprova">' + x.fb + ' Now say the whole sentence.</p><div><button type="button" class="btn" data-a="' + toque + '-prox">Next round</button></div>' : '') + '</div></div>';
}

function capitulo(c, k) {
  var x = CAPS[k], st = S.cap[k] || {};
  var papel = x.papel ? '<div class="bilhete-c">' + x.papel.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>' : '';
  var nota = x.nota ? (st.nota ? '<div class="nota-grande vd' + (x.virar ? ' verso' : '') + '"><i class="ima"></i><p>' + x.nota.replace('STILL', '<b>STILL</b>') + '</p></div>' : '<button type="button" class="btn cheio" data-a="cp-nota" data-c="' + k + '">' + (x.virar ? 'Turn the note over' : 'Open the note') + '</button>') : '';
  var direita = st.perg ? '<div class="perg-cap">' + x.perg.map(function (q, i) { return '<div class="pq"><span>' + (i + 1) + '</span><p>' + q + '</p>' + mostra(k + 'q' + i, x.ex[i]) + '</div>'; }).join('') + '</div><div><button type="button" class="pilula" data-a="cp-perg" data-c="' + k + '">← Back to the text</button></div>'
    : '<div class="linhas">' + x.linhas.map(function (l) { return '<p>' + l + '</p>'; }).join('') + '</div><div><button type="button" class="btn" data-a="cp-perg" data-c="' + k + '">The questions →</button></div>';
  return cab(c) + '<div class="mesa-cap"><div class="lado-foto"><div class="foto-cap vd" style="background-image:url(' + img(x.img) + ')"><span class="hora">' + x.hora + '</span><span class="num">CHAPTER ' + x.n.toUpperCase() + '</span></div>' + papel + nota + '</div><div class="lado-texto">' + direita + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · EASY READER</span><h1>The Fridge <b>Door</b></h1>'
    + '<p class="sub">Seven days of notes on one fridge door. One of them never comes down.</p>'
    + '<div class="chipsx"><span class="pilula">already</span><span class="pilula">still</span><span class="pilula">not … yet</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the kitchen</button>' + faixaLive() + '</div>'
    + '<div class="capa-porta">' + porta(1, '', ' capa') + '</div></div>';
};
R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};
['cap1', 'cap2', 'cap3', 'cap4', 'cap5'].forEach(function (k) { R[k] = function (c) { return capitulo(c, k); }; });
R.porta1 = function (c) { return cenaPorta(c, R1, S.p1, 'p1', ['already', 'still', 'yet']); };
R.porta2 = function (c) { return cenaPorta(c, R2, S.p2, 'p2', ['already', 'still', 'yet']); };
R.dois = function (c) { return cenaPorta(c, DOIS, S.dois, 'ds', ['already', 'yet']); };

R.lugar = function (c) {
  var e = S.lugar, n = e.n, fim = n >= LUGAR.length, x = LUGAR[Math.min(n, LUGAR.length - 1)];
  if (fim) return cab(c) + trilha(LUGAR, n) + '<div class="foco"><div class="pergunta vd"><small>THE PLACE</small><h2>Already and still in the middle: in front of a normal verb, after am, is, are. Still in front of not. Yet at the end.</h2></div></div>';
  var ordemF = ordem([0, 1, 2], n + 1), ok = e.esc === 0;
  return cab(c) + trilha(LUGAR, n) + '<div class="mesa-porta">' + porta(x.dia) + '<div class="lado-porta"><div class="pergunta vd ja"><small>' + DIAS[x.dia] + '</small><h2>' + x.cab + '</h2></div><div class="opcoes-l">'
    + ordemF.map(function (i) { return '<button type="button" class="op-l' + (e.esc === i ? (i === 0 ? ' certo' : ' errado') : '') + '" data-a="lg" data-n="' + i + '">' + x.f[i] + '</button>'; }).join('') + '</div>'
    + (e.esc > 0 ? '<p class="recusa">' + x.nao[e.esc] + '</p>' : '') + (ok ? '<p class="aprova">' + x.fb + '</p><div><button type="button" class="btn" data-a="lg-prox">Next</button></div>' : '') + '</div></div>';
};

R.sua = function (c) {
  var s = S.sua, todas = NOTINHAS.every(function (_, i) { return s[i]; });
  return cab(c) + '<div class="mesa-porta"><div class="porta-g sua"><div class="puxador"></div><span class="dia-p">YOUR DOOR</span>' + NOTINHAS.map(function (x, i) { return s[i] ? '<div class="nota" style="left:' + (8 + (i % 2) * 46) + '%;top:' + (10 + Math.floor(i / 2) * 29) + '%;--r:' + (i % 2 ? 3 : -3) + 'deg"><i class="ima"></i><b>' + x.w.toUpperCase() + '</b><small>said out loud</small></div>' : ''; }).join('') + '</div>'
    + '<div class="lado-porta"><div class="notinhas">' + NOTINHAS.map(function (x, i) { return '<button type="button" class="notinha' + (s[i] ? ' on' : '') + '" data-a="su" data-n="' + i + '"><b>' + x.w + '</b><small>' + x.d + '</small></button>'; }).join('') + '</div>'
    + (todas ? '<p class="aprova">Six sentences, six real things.</p>' : '<p class="dica-aluno">Say the whole sentence, not the word. Then tap the line.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'MILK: it is already in the fridge.\nTHE LIGHT: it is still broken.\n…', 'Your fridge door',
    ['is already ', 'is still ', 'is still not ', 'is not … yet', 'Is … yet?'], ['YOUR DOOR', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now six notes, each word in its place.' : 'Six notes for your own fridge door.'])
    + '<div class="lado-fim"><div class="cartoes-fim">' + [['ALREADY IS A SURPRISE', 'It happened, and sooner than anybody expected. In the middle, never in a no.'], ['YET IS A PROMISE', 'It has not happened, and everybody is waiting. In a no and in a question, at the end.'], ['STILL IS NO NEWS', 'Nothing has changed. In the middle, and in front of the not: he is still not home.']].map(function (k) { return '<div class="ct vd"><b>' + k[0] + '</b><p>' + k[1] + '</p></div>'; }).join('') + '</div>'
    + mostra('fim', 'MILK: it is already in the fridge.<br>THE LIGHT: it is still broken.<br>MY SISTER: she is still not home.<br>THE PIZZA: it is not here yet.<br>Is the pizza here yet?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['cp-perg'] = function (b, n, v, c) { S.cap[c] = S.cap[c] || {}; S.cap[c].perg = !S.cap[c].perg; };
TOQUES['cp-nota'] = function (b, n, v, c) { S.cap[c] = S.cap[c] || {}; S.cap[c].nota = 1; };
TOQUES.p1 = function (b, n, v) { S.p1.esc = v; };
TOQUES['p1-prox'] = function () { S.p1 = { n: S.p1.n + 1, esc: '' }; };
TOQUES.p2 = function (b, n, v) { S.p2.esc = v; };
TOQUES['p2-prox'] = function () { S.p2 = { n: S.p2.n + 1, esc: '' }; };
TOQUES.ds = function (b, n, v) { S.dois.esc = v; };
TOQUES['ds-prox'] = function () { S.dois = { n: S.dois.n + 1, esc: '' }; };
TOQUES.lg = function (b, n) { S.lugar.esc = n; };
TOQUES['lg-prox'] = function () { S.lugar = { n: S.lugar.n + 1, esc: -1 }; };
TOQUES.su = function (b, n) { S.sua[n] = !S.sua[n]; };
