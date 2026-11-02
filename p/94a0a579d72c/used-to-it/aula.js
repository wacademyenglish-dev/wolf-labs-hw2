/* ============================================================
   USED TO IT · THE MOVING BOX · LIVE CLASS  06/10/2026
   Main series B1 · used to + verbo (acabou) × be used to + -ing /
   substantivo (é normal agora) × get used to (o caminho, ainda custa).
   A diferença é o BE; e aquele TO é preposição, então vem -ING.
   Erros: "I'm used to wake up", "I used to living", "I'm used to it
   slowly" (falta GET), "could never getting used to".
   O MUNDO (da aula velha): a Ana se mudou de uma cidade quente para
   Toronto; um ano em seis momentos; uma entrevista com o professor,
   que "se mudou" para outro país; os pares que o professor lê em voz
   alta (o 'm engolido). Sem áudio, como a velha.
   A CARA: a CAIXA DE MUDANÇA de papelão em SVG, com fita — os hábitos
   que acabaram caem dentro e a tampa fecha; e a FAIXA DOS DOZE MESES,
   do laranja de casa ao branco-gelo de Toronto, que acende conforme
   o que era estranho vira normal.
   Fila: FILA-LIVE-386.md · 113.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'mala' },
  { k: 'abre', est: 'o', min: 7, img: 'mudanca', rot: 'I · Strange at First', t: 'Three questions about things that changed.', p: 'Answer out loud, in whole sentences. Nothing gets corrected yet.' },
  { k: 'prateleira', est: 'f', min: 6, img: 'mudanca', rot: 'II · Over, or Ordinary?', t: 'Eight sentences. One place is finished. The other is today.', p: 'Read it out loud. Put it in the box, or keep it on the table.' },
  { k: 'regra', est: 'f', min: 6, img: 'mala', rot: 'III · That TO Is a Preposition', t: 'I used to wake up early. · I’m used to waking up early.', p: 'Three questions. Choose, then say why.' },
  { k: 'ana', est: 'o', min: 7, img: 'neve', rot: 'IV · Ana’s First Year', t: 'Ana moved from a warm city to Toronto. Six moments of her first year.', p: 'Choose the words. Old habits go in the box. Everything else lights up the year.' },
  { k: 'metades', est: 'f', min: 6, img: 'neve', rot: 'V · What Comes After TO', t: 'Six sentences. One piece decides each.', p: 'Choose the piece. Then say the whole sentence.' },
  { k: 'voz', est: 'l', min: 7, img: 'mudanca', rot: 'VI · The Word You Swallow', t: 'At speed, the two are almost the same sound.', p: 'Your teacher reads ONE sentence of the pair. Say which one you heard. Then you both say both.' },
  { k: 'entrevista', est: 'o', min: 7, extra: 1, img: 'mudanca', rot: 'VII · The Interview', t: 'Your teacher moved to another country three years ago. Interview them.', p: 'Tap a question card. Ask it out loud. Listen, then ask one follow-up.' },
  { k: 'conserta', est: 'f', min: 6, extra: 1, img: 'mala', rot: 'VIII · Eight Broken Lines', t: 'Six broken, two clean. You’d understand all of them; that’s why nobody corrects them.', p: 'Say what’s wrong, or that nothing is. Then say the correct sentence.' },
  { k: 'linha', est: 'o', min: 7, extra: 1, img: 'neve', rot: 'IX · Three Moments', t: 'Not three rules. Three moments on one line.', p: 'Before, during, or after? Choose, then say it. Then one change of your own, at all three.' },
  { k: 'fim', est: 'w', min: 6, img: 'mala', rot: 'X · Your Line, in Shape', t: 'Your answers from scene I come back.', p: 'Write one change in your life at all three moments. It goes to your My notes.' }
];

var ABRE = [
  { q: 'What did you have to get used to recently?', fup: 'How long did it take?', st: ['I had to get used to …', 'I’m still getting used to …'], ex: 'I had to get used to my new boss.' },
  { q: 'What did you use to do as a kid that you don’t do now?', fup: 'Why did you stop?', st: ['I used to …', 'When I was a kid, I used to …'], ex: 'I used to climb trees every afternoon.' },
  { q: 'Is there anything you’re still getting used to?', fup: 'When will you be used to it?', st: ['I’m still getting used to …'], ex: 'I’m still getting used to working from home.' }
];

var PRAT = [
  ['I used to walk to work.', 'caixa'], ['I’m used to walking to work.', 'hoje'], ['She used to work nights.', 'caixa'], ['She’s used to working nights.', 'hoje'],
  ['We used to live near the airport.', 'caixa'], ['We’re used to the planes now.', 'hoje'], ['He used to hate the cold.', 'caixa'], ['He’s used to the cold.', 'hoje']
];

var PASSOS = [
  { q: 'What’s different between the two sentences?', ops: ['One has BE and -ING.', 'One is more polite.', 'One is stronger.'], rev: 'BE and -ING travel together. Take them away and the sentence goes back to the past.' },
  { q: 'Which one is about a habit that ended?', ops: ['I used to wake up early.', 'I’m used to waking up early.', 'Both.'], rev: 'A bare verb after TO: it stopped.' },
  { q: 'Why does the second one take -ING?', ops: ['Because that TO is a preposition.', 'Because it’s a continuous tense.', 'Because it’s irregular.'], rev: 'A preposition, like IN, ON, AT: they all take -ING. Like “I’m good AT cooking”. Not a new rule.' }
];
var REGRA = [
  { t: 'IT’S OVER', f: 'I used to <u>wake</u> up early.', n: 'used to + verb · no BE' },
  { t: 'IT’S NORMAL NOW', f: 'I<u>’m</u> used to <u>waking</u> up early.', n: 'BE + used to + -ING (or a noun)' },
  { t: 'IT STILL COSTS SOMETHING', f: 'I’m <u>getting</u> used to it.', n: 'GET + used to + -ING · the road in between' }
];

var ANA = [
  { quando: 'BACK HOME', a: 'I ', b: ' walk everywhere.', ops: ['used to', 'am used to', 'used to walking'], onde: 'caixa', item: 'walking everywhere', w: 'A habit that ended: <b>used to + verb</b>.' },
  { quando: 'WEEK 1', a: 'The cold is terrible. I’m not ', b: ' it.', ops: ['used to', 'use to', 'getting use'], onde: 1, w: '<b>not used to</b> + a noun (it).' },
  { quando: 'MONTH 2', a: 'I’m slowly ', b: ' the cold.', ops: ['getting used to', 'used to', 'get used'], onde: 3, w: 'Still costs something: <b>getting used to</b>.' },
  { quando: 'BACK HOME', a: 'We ', b: ' have dinner at nine.', ops: ['used to', 'were used to having', 'are used to'], onde: 'caixa', item: 'dinner at nine', w: 'Over: <b>used to</b>.' },
  { quando: 'MONTH 6', a: 'Now I’m used to ', b: ' dinner at six.', ops: ['having', 'have', 'had'], onde: 7, w: 'That TO is a preposition: <b>-ING</b>.' },
  { quando: 'MONTH 12', a: 'I ', b: ' the snow. It’s just winter.', ops: ['am used to', 'used to', 'am used'], onde: 12, w: 'Normal now: <b>I’m used to</b>.' }
];

var METADES = [
  { a: 'When I was twenty, I ', b: ' at six every morning. Not anymore.', ops: ['used to get up', 'was used to getting up', 'am used to getting up'], pq: 'Over: <b>used to</b> + verb, no BE.' },
  { a: 'I hated the night shift at first. Now I ', b: ' it.', ops: ['am used to', 'used to', 'was used to'], pq: 'True today: present BE.' },
  { a: 'She’s been here two weeks, and she ', b: ' the accent.', ops: ['is getting used to', 'is used to', 'used to'], pq: 'Still costs her something: GET.' },
  { a: 'By the end of the year, we ', b: ' the new system.', ops: ['were used to', 'are used to', 'used to'], pq: 'The BE carries the tense: past.' },
  { a: 'I could never ', b: ' the cold in that city.', ops: ['get used to', 'getting used to', 'used to'], pq: 'After a modal, bare GET.' },
  { a: 'He isn’t used to ', b: ' in front of people.', ops: ['speaking', 'speak', 'spoke'], pq: 'After that TO: <b>-ING</b>.' }
];

var PARES = [
  { a: 'I used to drive to work.', b: 'I’m used to driving to work.', nota: 'The whole difference is one small sound: ’m.' },
  { a: 'She used to live alone.', b: 'She’s used to living alone.', nota: 'The second says something about her today.' },
  { a: 'They used to work weekends.', b: 'They’re used to working weekends.', nota: 'One is the past. The other is a warning about next Saturday.' }
];

var ENTREVISTA = [
  { k: 'BACK HOME', q: 'What did you use to do back home that you can’t do now?', fup: 'Do you miss it?', st: ['What did you use to …?'], ex: 'What did you use to do on Sundays?' },
  { k: 'THE HARDEST', q: 'What was the hardest thing to get used to?', fup: 'How long did it take?', st: ['What was the hardest thing to get used to?'], ex: 'Was the food hard to get used to?' },
  { k: 'THE WEATHER', q: 'Are you used to the weather now?', fup: 'And the food?', st: ['Are you used to …?'], ex: 'Are you used to the cold?' },
  { k: 'STILL', q: 'What are you still getting used to?', fup: 'Why is it so hard?', st: ['What are you still getting used to?'], ex: 'Are you still getting used to the language?' },
  { k: 'NEVER', q: 'Is there anything you’ll never get used to?', fup: 'Why not?', st: ['Will you ever get used to …?'], ex: 'Will you ever get used to the early dinners?' },
  { k: 'THE FIRST YEAR', q: 'What did you use to miss most in the first year?', fup: 'And now?', st: ['What did you use to miss …?'], ex: 'What did you use to miss most?' }
];

var QUEBRAS = [['sembe', 'THE BE IS MISSING'], ['seming', 'IT NEEDS -ING'], ['bedemais', 'THERE’S AN EXTRA BE / -ING'], ['get', 'IT NEEDS GET'], ['nada', 'NOTHING WRONG']];
var LINHAS = [
  { f: 'I used to waking up at five now.', k: 'sembe', certo: 'I’m used to waking up at five now.' },
  { f: 'She’s used to work at night.', k: 'seming', certo: 'She’s used to working at night.' },
  { f: 'I’m used to live here when I was a child.', k: 'bedemais', certo: 'I used to live here when I was a child.' },
  { f: 'We’re used to the noise now.', k: 'nada', certo: 'Nothing wrong: a noun after TO is fine.' },
  { f: 'It’s hard, but I’m used to it slowly.', k: 'get', certo: 'It’s hard, but I’m getting used to it slowly.' },
  { f: 'He used to smoke, and then he stopped.', k: 'nada', certo: 'Nothing wrong: a finished habit.' },
  { f: 'I never got used to drive on the left.', k: 'seming', certo: 'I never got used to driving on the left.' },
  { f: 'They used to working weekends before the baby.', k: 'bedemais', certo: 'They used to work weekends before the baby.' }
];

var MOMENTOS = [['antes', 'BEFORE · it ended'], ['durante', 'DURING · still hard'], ['depois', 'AFTER · normal now']];
var ITENS = [['I used to sleep eight hours.', 'antes'], ['I’m getting used to the alarm.', 'durante'], ['I’m used to the alarm now.', 'depois'], ['She used to hate Mondays.', 'antes'], ['She’s getting used to the new team.', 'durante'], ['She’s used to the new team.', 'depois']];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { n: 0, foi: {} }, pt: {}, rg: { n: 0, esc: -1 }, an: { n: 0, esc: -1 }, me: { n: 0, esc: -1 }, vz: { n: 0, ouviu: '', disse: '' }, en: { sel: -1, foi: {} }, cs: { n: 0, esc: '' }, ln: {} };

/* a caixa de mudança: papelão, fita; o que acabou cai dentro */
function caixa(itens, fechada, mini) {
  return '<div class="mv-caixa' + (fechada ? ' fechada' : '') + (mini ? ' mini' : '') + '"><svg viewBox="0 0 260 190" aria-hidden="true">'
    + '<path class="aba e" d="M20 70 L60 30 L130 30 L130 70Z"/><path class="aba d" d="M240 70 L200 30 L130 30 L130 70Z"/>'
    + '<rect class="corpo" x="20" y="70" width="220" height="110" rx="4"/><rect class="fita" x="118" y="70" width="24" height="110"/>'
    + '<text x="130" y="168" text-anchor="middle" class="rot">THE OLD LIFE</text></svg>'
    + '<div class="mv-dentro">' + (itens || []).map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div></div>';
}
/* a faixa do ano: 12 meses do laranja ao gelo; acende até `ate` */
function ano(ate, rot) {
  var html = '<div class="mv-ano"><div class="mv-meses">';
  for (var i = 1; i <= 12; i++) html += '<i class="' + (i <= ate ? 'on' : '') + '" style="--m:' + i + '"><b>' + i + '</b></i>';
  return html + '</div><div class="mv-leg"><span>STRANGE</span><span>' + (rot || 'USED TO TORONTO') + '</span><span>NORMAL</span></div></div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="mv-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
function anaEstado(ate) {
  var caixaItens = [], mes = 0;
  ANA.forEach(function (x, i) { if (i < ate) { if (x.onde === 'caixa') caixaItens.push(x.item); else mes = x.onde; } });
  return { caixa: caixaItens, mes: mes };
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · ONE MOVE · ONE YEAR</span><h1>Used <b>to It</b></h1>'
    + '<p class="sub">Back home, she <b>used to walk</b> everywhere. In Toronto, she’s <b>getting used to</b> the snow. A year later, she’s <b>used to</b> it.</p>'
    + '<div class="chipsx"><span class="pilula">used to + verb · over</span><span class="pilula">be used to + -ing · normal</span><span class="pilula">get used to · the road</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the box</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + caixa(['walking everywhere', 'dinner at nine'], 0) + ano(8) + '</div></div>';
};

R.abre = function (c) { return sequencia(c, ABRE, S.ab, 'ab', 'Your three answers go in the box. They come back at the end.') + '<p class="so-prof dica-aluno" style="text-align:center">Write them down. Listen for “I’m used to wake up” and “I used to living”. Don’t correct.</p>'; };

R.prateleira = function (c) {
  var e = S.pt, feitas = PRAT.filter(function (x, i) { return e[i] === x[1]; });
  var naCaixa = PRAT.filter(function (x, i) { return e[i] === 'caixa' && x[1] === 'caixa'; }).map(function (x) { return x[0]; });
  var naMesa = PRAT.filter(function (x, i) { return e[i] === 'hoje' && x[1] === 'hoje'; }).map(function (x) { return x[0]; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + PRAT.map(function (x, i) { var foi = e[i], ok = foi === x[1]; return '<div class="mv-linha vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + x[0] + '</span><div class="mv-fs">' + [['caixa', 'IN THE BOX'], ['hoje', 'TODAY']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="pt" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + '<div class="lado-l">' + caixa(naCaixa, naCaixa.length >= 4, 1) + '<div class="mv-mesa vd"><small>ON THE TABLE · IT’S NORMAL NOW</small>' + naMesa.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>'
    + (feitas.length >= 8 ? '<p class="aprova">Eight sentences, and four are about a life that’s still going on. Now change each one to the other side.</p>' : '<p class="dica-aluno">Is it still happening? That’s the only question.</p>') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg, n = e.n, fim = n >= PASSOS.length;
  var cartoes = '<div class="mv-regra">' + REGRA.map(function (r, i) { return '<div class="mv-cartao vd m' + i + (fim ? ' on' : '') + '"><small>' + r.t + '</small><p>' + r.f + '</p><span>' + r.n + '</span></div>'; }).join('') + '</div>';
  if (fim) return cab(c) + cartoes + '<div class="foco">' + fala('rg', ['I used to …', 'I’m used to …-ing', 'I’m getting used to …'], []) + '<p class="aprova" style="text-align:center">A bare verb, or -ING. Nothing else changed. Now one of each about your life.</p></div>';
  var x = PASSOS[n], ok = e.esc === 0;
  return cab(c) + trilha(PASSOS, n) + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd ja"><small>QUESTION ' + (n + 1) + ' OF 3</small><h2>' + x.q + '</h2></div>' + tres('rg', x.ops, e.esc, n + 1) + '</div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><p>' + x.rev + '</p></div><div><button type="button" class="btn" data-a="rg-prox">' + (n < 2 ? 'Next question' : 'Show the three shapes') + '</button></div>' : e.esc > 0 ? '<p class="recusa">Read what comes after TO. That’s the whole answer.</p>' : '<p class="dica-aluno">Say why before you tap.</p>') + '</div></div>';
};

R.ana = function (c) {
  var e = S.an, n = e.n, fim = n >= ANA.length, est = anaEstado(n + (e.esc === 0 ? 1 : 0));
  var visual = '<div class="mv-ana">' + caixa(est.caixa, fim, 1) + ano(est.mes, 'ANA IN TORONTO') + '</div>';
  if (fim) return cab(c) + visual + '<div class="foco"><div class="pergunta vd"><small>ONE YEAR</small><h2>Two habits in the box, and a full year. What does Ana still miss? Add a step between month 6 and month 12.</h2></div></div>';
  var x = ANA[n], ok = e.esc === 0;
  return cab(c) + trilha(ANA, n) + visual + '<div class="foco"><div class="balao vd"><small>' + x.quando + '</small><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div>' + tres('an', x.ops, e.esc, n + 1, 'linha')
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + ' Read the whole line.</p><div style="text-align:center"><button type="button" class="btn" data-a="an-prox">Next moment</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Is it back home (over), or in Toronto (getting there, or normal)?</p>' : '') + '</div>';
};

R.metades = function (c) {
  var e = S.me, n = e.n, fim = n >= METADES.length;
  if (fim) return cab(c) + trilha(METADES, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Only the piece after TO moved. Now a true version of each one.</h2></div></div>';
  var x = METADES[n], ok = e.esc === 0;
  return cab(c) + trilha(METADES, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div>' + tres('me', x.ops, e.esc, n + 2, 'linha')
    + (ok ? '<p class="aprova" style="text-align:center">' + x.pq + '</p><div style="text-align:center"><button type="button" class="btn" data-a="me-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Look before the gap: is there a BE or not? Finished, normal, or still hard?</p>' : '') + '</div>';
};

R.voz = function (c) {
  var e = S.vz, n = Math.min(e.n, PARES.length - 1), fim = e.n >= PARES.length, x = PARES[n];
  if (fim) return cab(c) + trilha(PARES, e.n) + '<div class="foco"><div class="pergunta vd"><small>THREE PAIRS</small><h2>The words barely changed. One small verb did. Now swap: you read, your teacher guesses.</h2></div></div>';
  var ok = e.disse && e.disse === e.ouviu;
  return cab(c) + trilha(PARES, e.n) + '<div class="mesa-c"><div class="lado-l"><h5 class="so-prof rot-ouve">1 · TAP THE ONE YOU’LL READ (THE STUDENT DOESN’T SEE IT)</h5><div class="mv-ops so-prof">' + [['a', x.a], ['b', x.b]].map(function (o) { return '<button type="button" class="versao' + (e.ouviu === o[0] ? ' on' : '') + '" data-a="vz-l" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + '<div class="mv-ouvido vd"><small>THE WORD YOU SWALLOW</small><b>’m · ’s · ’re</b><span>Listen for it.</span></div></div>'
    + '<div class="lado-l"><h5 class="rot-ouve">2 · WHICH ONE DID YOU HEAR?</h5><div class="mv-ops">' + [['a', 'IT’S OVER · used to'], ['b', 'IT’S NORMAL · be used to']].map(function (o) { return '<button type="button" class="versao grande-v' + (e.disse === o[0] ? (e.ouviu ? (o[0] === e.ouviu ? ' certo' : ' errado') : ' on') : '') + '" data-a="vz-d" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (e.disse && e.ouviu ? (ok ? '<div class="balao vd ok-b"><p>' + (e.ouviu === 'a' ? x.a : x.b) + '</p></div>' : '<p class="recusa">Not that one. Listen for the small sound before “used”.</p>') + '<p class="aprova">' + x.nota + ' Now you both say both.</p><div><button type="button" class="btn" data-a="vz-prox">Next pair</button></div>' : '') + '</div></div>';
};

R.entrevista = function (c) { return cartasPessoais(c, ENTREVISTA, S.en, 'en', ['… and how did you feel?', 'Do you miss it?', 'Why?']) + '<p class="so-prof dica-aluno" style="text-align:center">Invent a move. Answer with all three forms, naturally. Listen for “Are you used to wake up …?”</p>'; };

R.conserta = function (c) {
  var e = S.cs, n = e.n, fim = n >= LINHAS.length;
  if (fim) return cab(c) + trilha(LINHAS, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT LINES</small><h2>Every break was something you’d have understood anyway. Now break a sentence for your teacher to fix.</h2></div></div>';
  var x = LINHAS[n], ok = e.esc === x.k;
  return cab(c) + trilha(LINHAS, n) + '<div class="foco"><div class="balao vd"><small>LINE ' + (n + 1) + ' OF 8</small><p>' + x.f + '</p></div><div class="mv-quebras">' + QUEBRAS.map(function (q) { return '<button type="button" class="versao grande-v' + (e.esc === q[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="cs" data-v="' + q[0] + '">' + q[1] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div class="balao vd ok-b"><small>THE CLEAN LINE · SAY IT</small><p>' + x.certo + '</p></div><div style="text-align:center"><button type="button" class="btn" data-a="cs-prox">Next line</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Two questions: is there a BE, and what comes after TO?</p>' : '') + '</div>';
};

R.linha = function (c) {
  var e = S.ln, todos = ITENS.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="mv-tempo">' + MOMENTOS.map(function (m) { return '<div class="mv-ponto ' + m[0] + '"><b>' + m[1] + '</b>' + ITENS.filter(function (x, i) { return e[i] === m[0] && x[1] === m[0]; }).map(function (x) { return '<span>' + x[0] + '</span>'; }).join('') + '</div>'; }).join('') + '</div>'
    + '<div class="mv-itens">' + ITENS.map(function (x, i) { var foi = e[i], ok = foi === x[1]; return '<div class="mv-linha vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + x[0] + '</span><div class="mv-fs">' + MOMENTOS.map(function (m) { return '<button type="button" class="pilula' + (foi === m[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ln" data-n="' + i + '" data-v="' + m[0] + '">' + m[1].split(' ·')[0] + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + (todos ? '<div class="foco">' + fala('ln', ['I used to …', 'I’m getting used to …', 'Now I’m used to …'], []) + '<p class="aprova" style="text-align:center">One line, three points, the same life at all three. Now one change of your own.</p></div>' : '<p class="dica-aluno" style="text-align:center">Does it still cost something?</p>');
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Before, I used to …\nNow I’m getting used to …\nIn a year, I’ll be used to …-ing', 'Your change',
    ['I used to', 'I’m used to', 'I’m getting used to', 'I’ll get used to', '-ing'], ['ONE CHANGE, THREE MOMENTS', 'What you used to do, what you’re getting used to, and what is normal now.'])
    + '<div class="lado-fim">' + caixa(['your old habit'], 1, 1)
    + '<div class="grande vd"><span><u>used to + verb</u> · it’s over</span><span><u>be used to + -ing</u> · it’s normal now</span><span><u>get used to</u> · the road between</span><span>not <s>I’m used to wake up</s>, not <s>I used to living</s></span></div>'
    + mostra('fim', 'Before, I used to sleep until nine.<br>Now I’m getting used to waking up at six.<br>In a year, I’ll be used to it.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.pt = function (b, n, v) { S.pt[n] = v; };
TOQUES.rg = function (b, n) { S.rg.esc = n; };
TOQUES['rg-prox'] = function () { S.rg = { n: S.rg.n + 1, esc: -1 }; };
TOQUES.an = function (b, n) { S.an.esc = n; };
TOQUES['an-prox'] = function () { S.an = { n: S.an.n + 1, esc: -1 }; };
TOQUES.me = function (b, n) { S.me.esc = n; };
TOQUES['me-prox'] = function () { S.me = { n: S.me.n + 1, esc: -1 }; };
TOQUES['vz-l'] = function (b, n, v) { S.vz.ouviu = v; };
TOQUES['vz-d'] = function (b, n, v) { S.vz.disse = v; };
TOQUES['vz-prox'] = function () { S.vz = { n: S.vz.n + 1, ouviu: '', disse: '' }; };
TOQUES.cs = function (b, n, v) { S.cs.esc = v; };
TOQUES['cs-prox'] = function () { S.cs = { n: S.cs.n + 1, esc: '' }; };
TOQUES.ln = function (b, n, v) { S.ln[n] = v; };
