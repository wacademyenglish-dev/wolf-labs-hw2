/* ============================================================
   THE VAN · LIVE CLASS  05/10/2026
   Main series A1 · let's + verbo puro · let's not · Shall we…? ·
   convite (let's) × plano já decidido (we're going to)
   O MUNDO: uma van para numa rua estreita às seis da tarde e duas pessoas
   precisam esvaziá-la antes de escurecer. Na tela, a VAN aberta com a
   carga e a PLANTA da casa (quatro cômodos, escura, em CSS): cada frase
   certa leva uma coisa da van para o cômodo dela.
   A aula velha citava o “vamos” em português; a Live é toda em inglês.
   Sem áudio e sem vídeo. Fila: FILA-LIVE-386.md · 030.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'van' },
  { k: 'abre', est: 'o', min: 7, img: 'rua', rot: 'I · Before It Arrives', t: 'Three real suggestions. Say them to me, out loud.', p: 'Pick a card. Nobody is corrected here. Just suggest. Your teacher taps what you used.' },
  { k: 'caixa1', est: 'f', min: 6, img: 'van', rot: 'II · The First Box', t: 'You and me, now.', p: 'Say the whole sentence out loud first. Then pick the front of it, and the thing goes to its room.' },
  { k: 'nao', est: 'f', min: 6, img: 'van', rot: 'III · Let’s Not', t: 'Half of a move is what you refuse.', p: 'Read the fact. Say it out loud. Then choose: yes, or not?' },
  { k: 'caixa2', est: 'f', min: 6, img: 'van', rot: 'IV · Six More', t: 'Six things left, and the light is going.', p: 'Same rule. Say it before you tap.' },
  { k: 'shall', est: 'f', min: 6, img: 'placa', rot: 'V · Shall We?', t: 'Sometimes you don’t decide. You ask.', p: 'Look at the end of the line: a question mark asks, a full stop decides.' },
  { k: 'duas', est: 'f', min: 6, img: 'rua', rot: 'VI · Two Kinds of Plan', t: 'An invitation, or already decided?', p: 'Read the situation. An invitation waits for an answer. A plan doesn’t.' },
  { k: 'papel', est: 'o', min: 7, extra: 1, img: 'rua', rot: 'VII · On the Sidewalk', t: 'Six lines, two people, one van and no time.', p: 'You take one side, your teacher the other. Then swap. The second time, cover the lines.' },
  { k: 'responde', est: 'o', min: 7, extra: 1, img: 'placa', rot: 'VIII · Yes, Let’s', t: 'An invitation that nobody answers is not an invitation.', p: 'Invite your teacher. Your teacher answers for real, and says no once.' },
  { k: 'quarto', est: 'o', min: 7, extra: 1, img: 'rua', rot: 'IX · Your Room', t: 'Now a real room. Yours.', p: 'Five suggestions about a room you actually live in.' },
  { k: 'fim', est: 'w', min: 6, img: 'van', rot: 'X · Let’s', t: 'Write a plan for your room, for two people.', p: 'Let’s, let’s not, Shall we…?, and one thing already decided. The red line watches. It goes to your My notes.' }
];

var ABRE = [
  { k: 'FIRST', q: 'We have one hour and a full van. What do we do first?', fup: 'And then?', st: ['… start with the boxes.'], ex: 'Let’s start with the small boxes.' },
  { k: 'RAIN', q: 'It’s raining! Say: Let’s …', fup: 'Is that a good idea?', st: ['… wait for the rain to stop.'], ex: 'Let’s wait in the van for five minutes.' },
  { k: 'NOT', q: 'Now suggest something you don’t want to do.', fup: 'Why not?', st: ['… not …'], ex: 'Let’s not carry the piano today.' }
];
var FORMAS = [{ k: 'lets', t: 'LET’S + VERB' }, { k: 'shall', t: 'SHALL WE…?' }, { k: 'wego', t: 'WE GO… / WE WILL…', erro: 1 }, { k: 'to', t: 'LET’S TO…', erro: 1 }];

var COMODOS = [{ k: 'kitchen', ic: '🍳' }, { k: 'hall', ic: '🚪' }, { k: 'bedroom', ic: '🛏️' }, { k: 'bathroom', ic: '🛁' }];
var OPS1 = ['Let’s', 'We go', 'We will', 'Let’s to'];
var NAO1 = { 'We go': '“We go” is an old habit from other languages. In English it isn’t an invitation.', 'We will': '“We will” is your decision, alone. An invitation asks the other person.', 'Let’s to': 'The to is the trap. After let’s, the verb comes plain.' };
var C1 = [
  { o: 'a box of plates', ic: '🍽️', c: 'kitchen', fr: '? put it in the kitchen.', fb: 'Let’s is let us: you and me, now. And the verb comes plain, with no to.' },
  { o: 'two chairs', ic: '🪑', c: 'hall', fr: '? leave them in the hall.', fb: 'Same word, other verb. Let’s never changes.' },
  { o: 'a heavy mattress', ic: '🛏️', c: 'bedroom', fr: '? take it upstairs.', fb: 'Upstairs is one word. And it takes no to.' },
  { o: 'a bag of towels', ic: '🧺', c: 'bathroom', fr: '? put them in the bathroom.', fb: 'Four things out of the van. The word at the front is always the same.' }
];
var C2 = [
  { o: 'a small fridge', ic: '🧊', c: 'kitchen', fr: '? carry it together.', fb: 'Together is why this word exists.' },
  { o: 'a box marked BOOKS', ic: '📚', c: 'bedroom', fr: '? leave the books for tomorrow.', fb: 'You can suggest later without saying no.' },
  { o: 'a lamp with no shade', ic: '💡', c: 'hall', fr: '? put the lamp by the door.', fb: 'The front of the sentence hasn’t moved.' },
  { o: 'a box of glasses', ic: '🥂', c: 'kitchen', fr: '? open this one last.', fb: 'Glasses break, and last is a good suggestion.' },
  { o: 'a folded table', ic: '🪵', c: 'kitchen', fr: '? open it in the kitchen.', fb: 'Five out. One left.' },
  { o: 'a plant, still alive', ic: '🪴', c: 'hall', fr: '? give it some water first.', fb: 'The van is empty. Ten things, ten sentences.' }
];

var NAO = [
  { fato: 'the mattress is too big for that door', fr: '? take it that way.', ok: 'Let’s not', fb: 'The not sits between the two words. That’s the whole shape.' },
  { fato: 'the rain has stopped', fr: '? open the boxes outside.', ok: 'Let’s', fb: 'Good news, so no not this time.' },
  { fato: 'the neighbors are asleep', fr: '? move the piano tonight.', ok: 'Let’s not', fb: 'A refusal is still an invitation. It waits for an answer.' },
  { fato: 'you are both tired', fr: '? do the kitchen today.', ok: 'Let’s not', fb: 'Every no has not in the middle.' }
];
var OPS_N = ['Let’s not', 'Let’s', 'Don’t let’s', 'Let’s don’t'];
var NAO_N = { 'Let’s don’t': 'Two negatives, and English only wants one. Use not, not don’t.', 'Don’t let’s': 'This one is in old books. Nobody says it now.', 'Let’s': 'Read the fact again. Is it a yes?', 'Let’s not': 'The rain stopped. Is that a reason to say no?' };

var SHALL = [
  { fato: 'you don’t know where to start', fr: '? start with the boxes?', ok: 'Shall we', fb: 'Shall we asks. Let’s decides. Same idea, other hand.' },
  { fato: 'it’s nearly seven', fr: '? stop for ten minutes?', ok: 'Shall we', fb: 'Two words, and they never change.' },
  { fato: 'the neighbor is watching', fr: '? ask him to help?', ok: 'Shall we', fb: 'A good question. And the verb after it is plain.' },
  { fato: 'there is one box left, and you both want to finish', fr: '? do the last one now.', ok: 'Let’s', fb: 'No question mark: you decide together. Let’s.' },
  { fato: 'you are both hungry', fr: '? order something?', ok: 'Shall we', fb: 'Question mark: ask. Full stop: decide.' }
];
var OPS_S = ['Shall we', 'Let’s', 'Do we', 'Shall us'];
var NAO_S = { 'Let’s': 'Look at the end: a question mark. Here you ask.', 'Shall us': 'We, not us, even though let’s is let us.', 'Do we': 'Do we asks about a habit. This is an invitation.', 'Shall we': 'Look at the end: a full stop, not a question mark. Decide it: let’s.' };

var DUAS = [
  { s: 'The van is here and you want to begin.', ok: 0, fb: 'You are asking him to start with you, now: let’s.' },
  { s: 'You and your sister have the color: white. It’s your plan.', ok: 1, fb: 'Decided before: we’re going to paint it white.' },
  { s: 'It’s raining. You want to wait five minutes.', ok: 0, fb: 'Now, together, and it needs a yes: let’s wait.' },
  { s: 'The new sofa arrives on Thursday. It’s on the receipt.', ok: 1, fb: 'A fact with a date. It is not an idea.' },
  { s: 'You want him to take the other end.', ok: 0, fb: 'You can’t do it alone, so it’s an invitation.' },
  { s: 'Your mother is waiting for a call at nine.', ok: 1, fb: 'Already promised: we’re going to call her at nine.' },
  { s: 'You want to stop and eat something.', ok: 0, fb: 'Now, and he can say no: let’s stop.' },
  { s: 'The keys go back to the agency on Monday. That is the deal.', ok: 1, fb: 'Eight for eight.' }
];

var FALAS = [
  { q: 0, t: 'It’s heavy. Shall we take the small ones first?' }, { q: 1, t: 'Yes, let’s. The big ones can wait.' },
  { q: 0, t: 'Let’s not leave the plant in the van.' }, { q: 1, t: 'No, let’s not. Put it by the door.' },
  { q: 0, t: 'It’s nearly seven. Shall we stop?' }, { q: 1, t: 'Let’s do one more, and then let’s stop.' }
];

var CONVITES = [{ q: 'Invite me to start with the kitchen.', h: 'Shall we …?' }, { q: 'Invite me to stop for five minutes.', h: 'Let’s …' }, { q: 'Invite me not to do something today.', h: 'Let’s not …' }, { q: 'Invite me to do one last thing.', h: 'Shall we …?' }];

var PALAVRAS = [{ w: 'let’s', d: 'move something in your room' }, { w: 'let’s not', d: 'something you don’t want to do' }, { w: 'shall we?', d: 'ask me about your room' }, { w: 'let’s … first', d: 'the order of your plan' }, { w: 'we’re going to', d: 'something already decided, not a suggestion' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, c1: { n: 0, esc: '' }, nao: { n: 0, esc: '' }, c2: { n: 0, esc: '' }, shall: { n: 0, esc: '' }, duas: { n: 0, esc: -1 },
  papel: { troca: 0, cobre: 0 }, resp2: { n: 0, r: {} }, quarto: {} };

function planta(lista, feitos, alvo) {
  return '<div class="planta">' + COMODOS.map(function (c) {
    var dentro = lista.filter(function (x, i) { return i < feitos && x.c === c.k; }).map(function (x) { return '<span>' + x.ic + '</span>'; }).join('');
    return '<div class="comodo c-' + c.k + (alvo === c.k ? ' alvo' : '') + '"><b>' + c.ic + ' ' + c.k.toUpperCase() + '</b><div class="itens-c">' + dentro + '</div></div>';
  }).join('') + '</div>';
}
function cenaCaixa(c, lista, est, toque) {
  var n = est.n, fim = n >= lista.length, x = lista[Math.min(n, lista.length - 1)], ok = est.esc === 'Let’s';
  var feitos = n + (ok ? 1 : 0);
  var van = '<div class="van vd"><small>IN THE VAN</small><div class="carga">' + lista.map(function (y, i) { return i < feitos ? '' : '<span class="' + (i === n ? 'agora' : '') + '">' + y.ic + '</span>'; }).join('') + '</div></div>';
  if (fim) return cab(c) + '<div class="mesa-van">' + van + planta(lista, lista.length, '') + '<div class="lado-van"><p class="aprova">The van is empty. Let’s + the plain verb, every time.</p></div></div>';
  return cab(c) + trilha(lista, n) + '<div class="mesa-van">' + van + planta(lista, feitos, x.c) + '<div class="lado-van"><div class="pergunta vd"><small>' + x.o.toUpperCase() + ' → THE ' + x.c.toUpperCase() + '</small><h2>' + x.fr.replace('?', ok ? '<b>Let’s</b>' : '<span class="vaga">____</span>') + '</h2></div>'
    + '<div class="tres-b">' + OPS1.map(function (o) { return '<button type="button" class="pilula grande' + (est.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="' + toque + '" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>'
    + (est.esc && !ok ? '<p class="recusa">' + NAO1[est.esc] + '</p>' : '') + (ok ? '<p class="aprova">' + x.fb + '</p><div><button type="button" class="btn" data-a="' + toque + '-prox">Next thing</button></div>' : '') + '</div></div>';
}
function cenaEscolha(c, lista, est, ops, por, toque, rot) {
  var n = est.n, fim = n >= lista.length, x = lista[Math.min(n, lista.length - 1)];
  if (fim) return cab(c) + trilha(lista, n) + '<div class="foco"><div class="pergunta vd"><small>' + rot + '</small><h2>' + (toque === 'nn' ? 'Let’s → let’s not. One word goes in, nothing else moves.' : 'Let’s decides. Shall we? asks. Both mean you and me.') + '</h2></div></div>';
  var ok = est.esc === x.ok;
  return cab(c) + trilha(lista, n) + '<div class="foco"><div class="fato-v vd"><small>THE FACT</small><p>' + x.fato + '</p></div><div class="pergunta vd"><h2>' + x.fr.replace('?', ok ? '<b>' + x.ok + '</b>' : '<span class="vaga">______</span>') + '</h2></div>'
    + '<div class="tres-b centro">' + ops.map(function (o) { return '<button type="button" class="pilula grande' + (est.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="' + toque + '" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>'
    + (est.esc && !ok ? '<p class="recusa" style="text-align:center">' + por[est.esc] + '</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">' + x.fb + '</p><div style="text-align:center"><button type="button" class="btn" data-a="' + toque + '-prox">Next</button></div>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>The <b>Van</b></h1>'
    + '<p class="sub">Six in the evening, a narrow street, a full van and two people. Every decision has to be said out loud.</p>'
    + '<div class="chipsx"><span class="pilula">Let’s</span><span class="pilula">Let’s not</span><span class="pilula">Shall we?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the van</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('van') + '" alt="An open moving van with boxes on the sidewalk"><span class="hora-v">6:00 PM</span></div></div>';
};
R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};
R.caixa1 = function (c) { return cenaCaixa(c, C1, S.c1, 'c1'); };
R.caixa2 = function (c) { return cenaCaixa(c, C2, S.c2, 'c2'); };
R.nao = function (c) { return cenaEscolha(c, NAO, S.nao, OPS_N, NAO_N, 'nn', 'FOUR LINES'); };
R.shall = function (c) { return cenaEscolha(c, SHALL, S.shall, OPS_S, NAO_S, 'sh', 'FIVE LINES'); };

R.duas = function (c) {
  var d = S.duas, n = d.n, fim = n >= DUAS.length, x = DUAS[Math.min(n, DUAS.length - 1)], ok = d.esc === x.ok;
  var pilhas = '<div class="pilhas-d">' + [['INVITATION', 'let’s …'], ['ALREADY DECIDED', 'we’re going to …']].map(function (p, i) { return '<button type="button" class="pilha-d' + (d.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="dd" data-n="' + i + '"><small>' + p[0] + '</small><b>' + p[1] + '</b><span>' + DUAS.filter(function (y, j) { return j < n && y.ok === i; }).length + '</span></button>'; }).join('') + '</div>';
  if (fim) return cab(c) + trilha(DUAS, n) + pilhas.replace(/data-a="dd"/g, 'data-x') + '<p class="aprova" style="text-align:center">Eight for eight. An invitation waits for a yes; a plan already has one.</p>';
  return cab(c) + trilha(DUAS, n) + '<div class="foco"><div class="pergunta vd"><small>SITUATION ' + (n + 1) + '</small><h2>' + x.s + '</h2></div>' + pilhas
    + (d.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">Does it wait for an answer? Then it’s an invitation.</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">' + x.fb + '</p><div style="text-align:center"><button type="button" class="btn" data-a="dd-prox">Next</button></div>' : '') + '</div>';
};

R.papel = function (c) {
  var p = S.papel;
  return cab(c) + '<div class="mesa-papel"><div class="papeis"><span class="' + (p.troca ? '' : 'voce') + '">' + (p.troca ? 'YOUR TEACHER' : 'YOU') + ' · the one carrying</span><span class="' + (p.troca ? 'voce' : '') + '">' + (p.troca ? 'YOU' : 'YOUR TEACHER') + ' · the one on the sidewalk</span></div>'
    + '<div class="falas-v">' + FALAS.map(function (f) { var meu = (f.q === 0) !== !!p.troca; return '<div class="fala-v lado' + f.q + (meu ? ' minha' : '') + '"><small>' + (meu ? 'YOU' : 'TEACHER') + '</small><p>' + (p.cobre && meu ? '<span class="coberto">……</span>' : f.t) + '</p></div>'; }).join('') + '</div>'
    + '<div class="tres-b centro"><button type="button" class="pilula" data-a="pp-troca">Swap sides</button><button type="button" class="pilula' + (p.cobre ? ' certo' : '') + '" data-a="pp-cobre">' + (p.cobre ? 'Show my lines' : 'Cover my lines') + '</button></div></div>';
};

R.responde = function (c) {
  var r = S.resp2, n = r.n, fim = n >= CONVITES.length, x = CONVITES[Math.min(n, CONVITES.length - 1)];
  if (fim) return cab(c) + trilha(CONVITES, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR INVITATIONS</small><h2>Yes, let’s. / No, let’s not. Not “Yes, we do”.</h2></div></div>';
  return cab(c) + trilha(CONVITES, n) + '<div class="foco"><div class="pergunta vd"><small>INVITE ME</small><h2>' + x.q + '</h2></div><p class="dica-aluno" style="text-align:center">Start with: ' + x.h + '</p>'
    + '<div class="partes so-prof"><h5>MY ANSWER</h5>' + ['Yes, let’s.', 'No, let’s not.'].map(function (a, i) { return '<button type="button" class="chip frase' + (r.r[n] === i + 1 ? ' on' : '') + '" data-a="rp" data-n="' + (i + 1) + '">' + a + '</button>'; }).join('') + '</div>'
    + '<div style="text-align:center"><button type="button" class="btn" data-a="rp-prox">Next invitation</button></div></div>';
};

R.quarto = function (c) {
  var q = S.quarto, todos = PALAVRAS.every(function (_, i) { return q[i]; });
  return cab(c) + '<div class="mesa-papel"><div class="notas-q">' + PALAVRAS.map(function (p, i) { return '<button type="button" class="nota-q' + (q[i] ? ' on' : '') + '" data-a="qt" data-n="' + i + '"><b>' + p.w + '</b><small>' + p.d + '</small></button>'; }).join('') + '</div>'
    + (todos ? '<p class="aprova" style="text-align:center">Five real sentences about a real room.</p>' : '<p class="dica-aluno" style="text-align:center">A real room. If it isn’t true, it doesn’t count. Say the whole sentence, then tap.</p>') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Let’s move the bed to the window.\nLet’s not …', 'Your room plan',
    ['Let’s ', 'Let’s not ', 'Shall we ', '?', 'We’re going to ', 'Yes, let’s.'], ['BEFORE IT ARRIVED', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now a plan for your room, for two people.' : 'A plan for your room, for two people.'])
    + '<div class="lado-fim"><div class="grande vd"><span><u>Let’s</u> go · not let’s to go</span><span><u>Let’s not</u> go · the not in the middle</span><span><u>Shall we</u> go? · a question</span></div>'
    + mostra('fim', 'Let’s move the bed to the window.<br>Let’s not put the desk by the door.<br>Shall we paint the wall blue?<br>Let’s do the closet first.<br>We’re going to buy a new lamp on Saturday.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.c1 = function (b, n, v) { S.c1.esc = v; };
TOQUES['c1-prox'] = function () { S.c1 = { n: S.c1.n + 1, esc: '' }; };
TOQUES.c2 = function (b, n, v) { S.c2.esc = v; };
TOQUES['c2-prox'] = function () { S.c2 = { n: S.c2.n + 1, esc: '' }; };
TOQUES.nn = function (b, n, v) { S.nao.esc = v; };
TOQUES['nn-prox'] = function () { S.nao = { n: S.nao.n + 1, esc: '' }; };
TOQUES.sh = function (b, n, v) { S.shall.esc = v; };
TOQUES['sh-prox'] = function () { S.shall = { n: S.shall.n + 1, esc: '' }; };
TOQUES.dd = function (b, n) { S.duas.esc = n; };
TOQUES['dd-prox'] = function () { S.duas = { n: S.duas.n + 1, esc: -1 }; };
TOQUES['pp-troca'] = function () { S.papel.troca = S.papel.troca ? 0 : 1; };
TOQUES['pp-cobre'] = function () { S.papel.cobre = S.papel.cobre ? 0 : 1; };
TOQUES.rp = function (b, n) { S.resp2.r[S.resp2.n] = n; };
TOQUES['rp-prox'] = function () { S.resp2.n++; };
TOQUES.qt = function (b, n) { S.quarto[n] = !S.quarto[n]; };
