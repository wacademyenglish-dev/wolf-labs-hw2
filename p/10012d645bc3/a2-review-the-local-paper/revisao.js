/* ============================================================
   O MOTOR DAS REVISÕES · currículo 60+10                 15/10/2026
   Carregado DEPOIS do aula.js da revisão. A revisão não reapresenta a
   matéria: lembrar (seis portas), misturar (a missão), falar (a conversa),
   provar (I can + o carimbo). O aula.js da revisão define só os DADOS:
     REV      { nivel, unidade, titulo:[a, b], tema, sub, placa, cor, cor2 }
     PORTAS   [{ k, tema, t, ex, trap }] × 6 · o ASSUNTO de cada aula, nunca o nome (regra 22)
     MISSAO   { lugar, quem, pede, itens:[{ k, tag, v:{campo: valor}, diz, ele }],
                campos:[{ c, r, q, f }], relato:{ titulo, pede(x), chips(x), modelo(x) },
                nao:{ chave: 'o deslize → a forma certa' }, fim }
     CARTAO   { ph, rot, chips, perg:[rótulo, pergunta], exemplo:[[rótulo, valor]], modelo }
     CONVERSA [{ q, f, voce:[…], ex }]
     PODE     [frases "I can…"]
   e o roteiro L (capa, portas, missao, cartao, conversa, pode).
   Cuidado: CAMPOS é global do motor.js — a missão usa MISSAO.campos.
   ============================================================ */
if (REV.cor) { document.documentElement.style.setProperty('--ac', REV.cor); document.documentElement.style.setProperty('--ac2', REV.cor2 || REV.cor); }

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  pt: { sel: -1, r: {} }, ms: { h: 0, ok: {}, fac: {}, rel: 0, nao: '' }, cv: { n: 0, fac: {} }, pd: { v: {}, prof: 0 } };

function placa(txt) { return '<div class="placa-latao" aria-hidden="true"><span>' + txt + '</span></div>'; }
function ficha(x, ok, on, feita) {
  return '<div class="ficha vd' + (on ? ' on' : '') + (feita ? ' feita' : '') + '"><small>' + x.k + (x.tag ? ' · ' + x.tag : '') + '</small>'
    + MISSAO.campos.map(function (f) { return '<div class="ficha-l"><span>' + f.r + '</span><b>' + (ok === true || (ok && ok[f.c]) ? x.v[f.c] : '') + '</b></div>'; }).join('') + '</div>';
}

var R = R || {};
if (!R.capa) R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · ' + REV.nivel + ' · UNIT ' + REV.unidade + ' REVIEW</span><h1>' + REV.titulo[0] + ' <b>' + REV.titulo[1] + '</b></h1>'
    + '<p class="sub"><b>' + REV.tema + '</b> ' + REV.sub + '</p>'
    + '<div class="chipsx"><span class="pilula">6 doors</span><span class="pilula">1 mission</span><span class="pilula">I can…</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the first door</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + placa(REV.placa) + '<div class="capa-foto" style="background-image:url(' + img('capa') + ')" aria-hidden="true"></div><p class="capa-nota">A review is not a new lesson. Answer from memory: mistakes today are the best part.</p></div></div>';
};

/* I · as portas */
if (!R.portas) R.portas = function (c) {
  var e = S.pt, x = e.sel >= 0 ? PORTAS[e.sel] : null, verdes = 0, ambar = [];
  PORTAS.forEach(function (p, i) { if (e.r[i] === 'ok') verdes++; if (e.r[i] === 'rev') ambar.push(p.tema); });
  var grade = '<div class="portas">' + PORTAS.map(function (p, i) {
    var st = e.r[i] === 'ok' ? ' ok' : e.r[i] === 'rev' ? ' rev' : '';
    return '<button type="button" class="porta' + st + (e.sel === i ? ' on' : '') + '" data-a="pt" data-n="' + i + '"><b>' + (i + 1) + '</b><span>' + p.k + '</span><i aria-hidden="true"></i></button>';
  }).join('') + '</div>';
  var lado;
  if (!x) lado = '<div class="mesa-card"><small>SIX DOORS</small><h2>' + (Object.keys(e.r).length >= PORTAS.length ? verdes + ' of 6 doors are green.' : 'Pick any door. There is no order.') + '</h2>'
    + (ambar.length ? '<p class="para-rev"><b>To review:</b> ' + ambar.join(' · ') + '</p>' : '<p>One minute per door. No notes, no book: from memory.</p>') + '</div>';
  else lado = '<div class="mesa-card"><small>DOOR ' + (e.sel + 1) + ' · ' + x.k + '</small><p class="pq">' + x.t + '</p>' + mostra('pt' + e.sel, x.ex, 1)
    + '<p class="so-prof dica-aluno">Listen for: ' + x.trap + '</p>'
    + '<div class="pratos-bt"><button type="button" class="btn' + (e.r[e.sel] === 'ok' ? ' cheio' : '') + '" data-a="pt-r" data-v="ok">Got it ✓</button><button type="button" class="btn" data-a="pt-r" data-v="rev">Review</button><button type="button" class="btn" data-a="pt" data-n="-1">All doors</button></div></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + grade + '</div><div class="lado-l">' + lado + '</div></div>';
};

/* II · a missão: perguntar para preencher as fichas, depois relatar um caso */
if (!R.missao) R.missao = function (c) {
  var M = MISSAO, e = S.ms, fim = e.h >= M.itens.length;
  var cartoes = '<div class="hospedes">' + M.itens.map(function (x, i) { return ficha(x, e.ok[i] || {}, i === e.h, i < e.h); }).join('') + '</div>';
  var lado;
  if (!fim) {
    var x = M.itens[e.h], ok = e.ok[e.h] || {}, falta = M.campos.filter(function (f) { return !ok[f.c]; });
    lado = '<div class="mesa-card"><small>' + x.k + ' · ' + M.pede + '</small>'
      + '<div class="perguntas">' + M.campos.map(function (f) { return '<button type="button" class="perg-b' + (ok[f.c] ? ' feita' : '') + '" data-a="ms-c" data-v="' + f.c + '"><b>' + f.r + '</b>' + (e.fac[e.h + f.c] ? f.f : f.q) + '</button>'; }).join('') + '</div>'
      + '<div class="pratos-bt"><button type="button" class="btn" data-a="ms-f">Say it easier</button>' + (falta.length ? '' : '<button type="button" class="btn cheio" data-a="ms-prox">' + (e.h < M.itens.length - 1 ? 'Next ' + M.quem : M.depois) + '</button>') + '</div></div>'
      + '<div class="so-prof guest-card"><small>' + (M.profRot ? M.profRot(x) : 'YOU ARE ' + x.k + '. ANSWER LIKE THIS:') + '</small><p>' + x.diz + '</p><p>' + (M.profDica || 'Tap a question when the student asks it. The card fills in.') + '</p></div>';
  } else {
    var r = Math.min(e.rel, M.itens.length - 1), xr = M.itens[r];
    lado = '<div class="mesa-card"><small>' + M.relato.titulo + '</small><p class="pq">“' + M.relato.pede(xr) + '”</p>'
      + fala('rel' + r, M.relato.chips(xr), [])
      + mostra('rel' + r, M.relato.modelo(xr), 0)
      + '<h5 class="so-prof rot-ouve">A SLIP YOU HEARD?</h5><div class="tres-b so-prof">' + Object.keys(M.nao).map(function (k) { return '<button type="button" class="pilula" data-a="ms-nao" data-v="' + k + '">' + M.nao[k].split('→')[0].trim() + '</button>'; }).join('') + '</div>'
      + (e.nao ? '<p class="recusa">' + M.nao[e.nao] + '</p>' : '')
      + '<div class="pratos-bt">' + (e.rel < M.itens.length - 1 ? '<button type="button" class="btn" data-a="ms-rel">Another one</button>' : '') + '</div>'
      + '<p class="aprova">' + M.fim + '</p></div>';
  }
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + cartoes + '</div><div class="lado-l">' + lado + '</div></div>';
};

if (!R.cartao) R.cartao = function (c) {
  var K = CARTAO;
  return cab(c) + '<div class="fim">' + escritaFinal('cartao', (S.txt || {}).cartao || '', (S.salvo || {}).cartao, K.ph, K.rot, K.chips, K.perg)
    + '<div class="lado-fim"><div class="ficha vd on"><small>' + K.exemploRot + '</small>' + K.exemplo.map(function (l) { return '<div class="ficha-l"><span>' + l[0] + '</span><b>' + l[1] + '</b></div>'; }).join('') + '</div>'
    + mostra('cartao', K.modelo, 1)
    + '<p class="so-prof dica-aluno">Short lines are perfect. One correction per line is enough.</p></div></div>';
};

if (!R.conversa) R.conversa = function (c) {
  var e = S.cv, n = Math.min(e.n, CONVERSA.length - 1), x = CONVERSA[n];
  return cab(c) + trilha(CONVERSA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta" style="background-image:url(' + img('conversa') + ')"><span>' + REV.lugarConversa + '</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>QUESTION ' + (n + 1) + ' OF ' + CONVERSA.length + '</small><b>“' + x.q + '”</b>' + (e.fac[n] ? '<span class="pq-f">' + x.f + '</span>' : '') + '</div>'
    + fala('cv' + n, x.voce.concat(['And you?']), []) + mostra('cv' + n, x.ex, 1)
    + '<p class="so-prof dica-aluno">After the answer, wait: the student asks “And you?”. Answer it, short.</p>'
    + '<div class="pratos-bt"><button type="button" class="btn" data-a="cv-f">Say it easier</button>' + (n < CONVERSA.length - 1 ? '<button type="button" class="btn" data-a="cv-prox">Next question</button>' : '') + '</div></div></div>';
};

if (!R.pode) R.pode = function (c) {
  var e = S.pd, n = PODE.filter(function (t, i) { return e.v[i]; }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="pode-lista">' + PODE.map(function (t, i) { return '<button type="button" class="pode' + (e.v[i] ? ' on' : '') + '" data-a="pd" data-n="' + i + '"><i aria-hidden="true"></i><span>' + t + '</span></button>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="carimbo-u' + (e.prof ? ' dado' : '') + '"><small>' + REV.nivel + ' · UNIT ' + REV.unidade + '</small><b>' + (e.prof ? 'DONE' : n + ' / ' + PODE.length) + '</b><span>' + REV.tema + '</span></div>'
    + (e.prof ? '<p class="aprova">Unit ' + REV.unidade + ' is stamped. ' + (n < PODE.length ? 'The open lines go to the homework.' : 'Every line: you can do it all.') + '</p>'
      : '<div class="pratos-bt"><button type="button" class="btn cheio so-prof" data-a="pd-ok">Teacher: confirm and stamp</button></div>')
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* VI · a ponte (só na última revisão do nível): o livro seguinte em três cartões. PONTE = { nivel, titulo, itens:[[k, frase, sobre]] } */
if (!R.ponte) R.ponte = function (c) {
  var P = window.PONTE || { itens: [] };
  return cab(c) + '<div class="ponte"><div class="ponte-cab"><small>YOUR NEXT BOOK</small><b>' + P.nivel + '</b><span>' + P.titulo + '</span></div>'
    + '<div class="ponte-cartas">' + P.itens.map(function (x, i) { return '<div class="ponte-c vd"><small>' + (i + 1) + ' · ' + x[0] + '</small><p>“' + x[1] + '”</p><span>' + x[2] + '</span></div>'; }).join('') + '</div>'
    + '<p class="aprova">' + (P.fim || '') + '</p><p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div>';
};
TOQUES.pt = function (b, n) { S.pt.sel = n; };
TOQUES['pt-r'] = function (b, n, v) { if (S.pt.sel >= 0) S.pt.r[S.pt.sel] = v; S.pt.sel = -1; };
TOQUES['ms-c'] = function (b, n, v) { var e = S.ms; e.ok[e.h] = e.ok[e.h] || {}; e.ok[e.h][v] = 1; };
TOQUES['ms-f'] = function () { var e = S.ms; MISSAO.campos.forEach(function (f) { e.fac[e.h + f.c] = 1; }); };
TOQUES['ms-prox'] = function () { S.ms.h++; };
TOQUES['ms-rel'] = function () { S.ms.rel++; S.ms.nao = ''; };
TOQUES['ms-nao'] = function (b, n, v) { S.ms.nao = v; };
TOQUES['cv-f'] = function () { S.cv.fac[Math.min(S.cv.n, CONVERSA.length - 1)] = 1; };
TOQUES['cv-prox'] = function () { S.cv.n++; };
TOQUES.pd = function (b, n) { S.pd.v[n] = !S.pd.v[n]; };
TOQUES['pd-ok'] = function () { S.pd.prof = 1; };

/* ============================================================
   O CATÁLOGO DE MECÂNICAS (15/10/2026, pedido do Carlos: "não deixem todos iguais").
   Cada revisão escolhe a sua combinação no L; revisões vizinhas não repetem a mesma mecânica na mesma função.
   LEMBRAR: portas · bingo (BINGO) · dado (usa PORTAS) · rapido (RAPIDO) · escada (usa PORTAS) · memoria (PARES)
   MISTURAR: missao (MISSAO) · ordem (ORDEM) · erros (ERROS)
   FALAR: conversa (CONVERSA) · cadeira (CADEIRA) · escolha (ESCOLHA)
   ESCREVER: cartao (CARTAO) · PROVAR: pode (PODE) · ponte (PONTE, só na última do nível)
   Combinações do A1: R1 portas·missao·cartao·conversa · R2 bingo·missao·erros·escolha · R3 dado·missao·memoria·cadeira
   R4 rapido·missao·cartao·escolha · R5 escada·missao·erros·cadeira · R6 memoria·missao·cartao·cadeira
   R7 bingo·missao·erros·escolha · R8 rapido·missao·cartao·cadeira · R9 escada·missao·memoria·escolha · R10 dado·missao·ordem·conversa·ponte
   ============================================================ */
S.bg = { v: {}, sel: -1 }; S.dd = { n: 0, face: 0, feito: {} }; S.rp = { ini: 0, n: 0, ok: 0, fim: 0 }; S.es = { degrau: 0, ver: 0 };
S.me = { abertas: [], achados: {} }; S.er = { achou: {} }; S.or = { seq: [] }; S.cd = { n: 0, fac: {} }; S.ec = { n: 0, esc: {} };

/* BINGO · uma cartela 3×3 de tarefas rápidas; o professor marca; linha completa = BINGO */
/* embaralha sem sorteio: um passo primo com o tamanho */
function embaralha(a, passo) { var n = a.length, g = function (x, y) { return y ? g(y, x % y) : x; }; while (n > 1 && g(passo, n) !== 1) passo++; var o = []; for (var j = 0; j < n; j++) o.push(a[(j * passo + 1) % n]); return o; }
var LINHAS_BINGO = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
if (!R.bingo) R.bingo = function (c) {
  var e = S.bg, B = window.BINGO || [], x = e.sel >= 0 ? B[e.sel] : null;
  var linhas = LINHAS_BINGO.filter(function (l) { return l.every(function (i) { return e.v[i]; }); }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="bingo">' + B.map(function (b, i) { return '<button type="button" class="bg-c' + (e.v[i] ? ' on' : '') + (e.sel === i ? ' sel' : '') + '" data-a="bg" data-n="' + i + '"><span>' + b[0] + '</span></button>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="mesa-card"><small>' + (linhas ? 'BINGO × ' + linhas : 'BINGO') + '</small>' + (x ? '<p class="pq">' + x[0] + '</p>' + mostra('bg' + e.sel, x[1], 1) + '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="bg-ok">Done ✓</button><button type="button" class="btn" data-a="bg" data-n="-1">Back to the card</button></div>'
      : '<h2>' + (linhas ? 'BINGO! Want a second line?' : 'Pick a square. Do it out loud. Make a line: across, down or diagonal.') + '</h2>') + '</div><p class="so-prof dica-aluno">Tap Done when the answer is good enough. Three in a line is a BINGO.</p></div></div>';
};
/* O DADO · o professor rola; o número escolhe a tarefa (PORTAS); rodízio fixo, sem sorteio */
if (!R.dado) R.dado = function (c) {
  var e = S.dd, x = e.face ? PORTAS[e.face - 1] : null, feitos = Object.keys(e.feito).length;
  var pontos = { 1: [5], 2: [1, 9], 3: [1, 5, 9], 4: [1, 3, 7, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] }[e.face] || [];
  var dado = '<div class="dado' + (e.face ? ' rolou' : '') + '" aria-label="Die: ' + (e.face || 'not rolled') + '">' + [1,2,3,4,5,6,7,8,9].map(function (i) { return '<i class="' + (pontos.indexOf(i) >= 0 ? 'on' : '') + '"></i>'; }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l dado-col">' + dado + '<div class="pratos-bt" style="justify-content:center"><button type="button" class="btn cheio" data-a="dd-rola">' + (e.face ? 'Roll again' : 'Roll the die') + '</button></div>'
    + '<div class="dd-feitos">' + PORTAS.map(function (p, i) { return '<span class="' + (e.feito[i + 1] ? 'on' : '') + '">' + (i + 1) + '</span>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="mesa-card"><small>' + (x ? 'YOU ROLLED ' + e.face + ' · ' + x.k : 'THE DIE') + '</small>' + (x ? '<p class="pq">' + x.t + '</p>' + mostra('dd' + e.face, x.ex, 1) + '<p class="so-prof dica-aluno">Listen for: ' + x.trap + '</p>' : '<h2>' + (feitos >= 6 ? 'All six numbers done!' : 'Roll the die. The number chooses the challenge. No notes!') + '</h2>') + '</div></div></div>';
};
/* SPEED ROUND · 60 segundos; o professor toca certo ou passa; a barra corre sozinha */
if (!R.rapido) R.rapido = function (c) {
  var e = S.rp, P = window.RAPIDO || { seg: 60, itens: [] }, agora = Date.now();
  var passou = e.ini ? (agora - e.ini) / 1000 : 0, acabou = e.ini && (passou >= P.seg || e.n >= P.itens.length);
  if (acabou && !e.fim) e.fim = 1;
  var x = P.itens[Math.min(e.n, P.itens.length - 1)];
  var corpo = !e.ini ? '<h2>' + P.itens.length + ' quick ones in ' + P.seg + ' seconds. Ready?</h2><div class="pratos-bt"><button type="button" class="btn cheio" data-a="rp-ini">Start the clock</button></div>'
    : e.fim ? '<h2>' + e.ok + ' right in ' + Math.min(P.seg, Math.round(passou)) + ' seconds!</h2><p>' + (e.ok >= P.itens.length - 1 ? 'Fantastic speed.' : 'Good! Try again at the end of class and beat your score.') + '</p><div class="pratos-bt"><button type="button" class="btn" data-a="rp-de-novo">Play again</button></div>'
    : '<p class="rp-q">' + x[0] + '</p>' + '<p class="so-prof dica-aluno">Answer: ' + x[1] + '</p><div class="pratos-bt"><button type="button" class="btn cheio" data-a="rp-ok">Right ✓</button><button type="button" class="btn" data-a="rp-passa">Pass</button></div>';
  return cab(c) + '<div class="rapido"><div class="rp-relogio"><i style="animation-duration:' + P.seg + 's;animation-delay:-' + passou.toFixed(1) + 's;animation-play-state:' + (e.ini && !e.fim ? 'running' : 'paused') + '"></i></div>'
    + '<div class="rp-placar"><b>' + e.ok + '</b><span>right</span><b>' + Math.min(e.n, P.itens.length) + ' / ' + P.itens.length + '</b><span>done</span></div><div class="mesa-card rp-card">' + corpo + '</div></div>';
};
/* A ESCADA · as tarefas (PORTAS) do fácil ao difícil; acertou, sobe um degrau */
if (!R.escada) R.escada = function (c) {
  var e = S.es, n = e.degrau, topo = n >= PORTAS.length, x = PORTAS[Math.min(n, PORTAS.length - 1)];
  var degraus = '<div class="escada">' + PORTAS.map(function (p, i) { return '<div class="degrau' + (i < n ? ' feito' : i === n ? ' on' : '') + '" style="--i:' + i + '"><b>' + (i + 1) + '</b><span>' + p.k + '</span></div>'; }).reverse().join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + degraus + '</div><div class="lado-l"><div class="mesa-card"><small>' + (topo ? 'THE TOP!' : 'STEP ' + (n + 1) + ' OF ' + PORTAS.length + ' · ' + x.k) + '</small>'
    + (topo ? '<h2>You climbed all the way up. From memory!</h2>' : '<p class="pq">' + x.t + '</p>' + mostra('es' + n, x.ex, 1) + '<p class="so-prof dica-aluno">Listen for: ' + x.trap + '</p><div class="pratos-bt"><button type="button" class="btn cheio" data-a="es-sobe">Good! Go up</button><button type="button" class="btn" data-a="es-fica">Try again</button></div>' + (e.ver ? '<p class="recusa">Not yet. Same step: try one more time.</p>' : ''))
    + '</div></div></div>';
};
/* O JOGO DA MEMÓRIA · pares virados; achou um par, o aluno faz uma frase com ele */
if (!R.memoria) R.memoria = function (c) {
  var e = S.me, P = window.PARES || [], cartas = [];
  P.forEach(function (p, i) { cartas.push([p[0], i]); cartas.push([p[1], i]); });
  var mix = embaralha(cartas, 7);
  var achou = Object.keys(e.achados).length, ultimo = e.ultimo;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="memoria">' + mix.map(function (x, j) {
      var aberta = e.achados[x[1]] || e.abertas.indexOf(j) >= 0;
      return '<button type="button" class="me-c' + (aberta ? ' aberta' : '') + (e.achados[x[1]] ? ' par' : '') + '" data-a="me" data-n="' + j + '" data-v="' + x[1] + '">' + (aberta ? '<span>' + x[0] + '</span>' : '<i aria-hidden="true">?</i>') + '</button>';
    }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="mesa-card"><small>PAIRS · ' + achou + ' OF ' + P.length + '</small>' + (ultimo !== undefined && e.achados[ultimo] ? '<p class="pq">A pair: ' + P[ultimo][0] + ' · ' + P[ultimo][1] + '</p><p>Now say a sentence with it.</p>' + mostra('me' + ultimo, P[ultimo][2], 1) : '<h2>' + (achou >= P.length ? 'All pairs found!' : 'Open two cards. Find the pair. Then make a sentence.') + '</h2>') + '</div></div></div>';
};
/* CAÇA AOS ERROS · um bilhete / uma mensagem com erros; o aluno acha, toca e diz a forma certa */
if (!R.erros) R.erros = function (c) {
  var e = S.er, E = window.ERROS || { partes: [] }, tot = 0, ach = 0;
  var corpo = E.partes.map(function (p) {
    if (typeof p === 'string') return h(p).replace(/\n/g, '<br>');
    var i = tot++; if (e.achou[i]) ach++;
    return '<button type="button" class="er-p' + (e.achou[i] ? ' achou' : '') + '" data-a="er" data-n="' + i + '">' + (e.achou[i] ? '<s>' + p[0] + '</s> <b>' + p[1] + '</b>' : p[0]) + '</button>';
  }).join('');
  var ult = e.ult !== undefined ? E.partes.filter(function (p) { return typeof p !== 'string'; })[e.ult] : null;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="er-artefato er-' + (E.tipo || 'nota') + ' vd"><small>' + E.rot + '</small><div class="er-txt">' + corpo + '</div></div></div>'
    + '<div class="lado-l"><div class="mesa-card"><small>' + ach + ' OF ' + tot + ' MISTAKES</small>' + (ult ? '<p class="pq">' + ult[0] + ' → <b>' + ult[1] + '</b></p><p>' + ult[2] + '</p>' : '<h2>' + (ach >= tot ? 'Every mistake fixed. Read the whole thing out loud now.' : 'Find the mistakes. Say the right form, then tap it.') + '</h2>')
    + '</div><p class="so-prof dica-aluno">The student finds a mistake and SAYS the right form first. Then tap it.</p></div></div>';
};
/* A HISTÓRIA EM ORDEM · os fatos embaralhados (rodízio fixo); o aluno toca na ordem e conta com conectores */
if (!R.ordem) R.ordem = function (c) {
  var e = S.or, O = window.ORDEM || { passos: [] }, n = O.passos.length;
  var mix = embaralha(O.passos.map(function (p, i) { return [p, i]; }), 3);
  var certo = e.seq.every(function (v, i) { return v === i; }), cheio = e.seq.length >= n;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="or-cartas">' + mix.map(function (x) {
      var pos = e.seq.indexOf(x[1]);
      return '<button type="button" class="or-c' + (pos >= 0 ? (pos === x[1] ? ' ok' : ' errado') : '') + '" data-a="or" data-n="' + x[1] + '"' + (pos >= 0 ? ' disabled' : '') + '>' + (pos >= 0 ? '<b>' + (pos + 1) + '</b>' : '') + '<span>' + x[0] + '</span></button>';
    }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="mesa-card"><small>' + O.rot + '</small>' + (!cheio ? '<h2>' + O.pede + '</h2>' : certo ? '<h2>Right order! Now tell the whole story with: ' + O.chips.join(' ') + '</h2>' + mostra('or', O.modelo, 1) : '<h2>Some cards are out of order. Try again!</h2><div class="pratos-bt"><button type="button" class="btn" data-a="or-zera">Start again</button></div>')
    + '</div>' + fala('or', O.chips, []) + '</div></div>';
};
/* HOT SEAT · agora é o ALUNO quem pergunta; o professor responde e o aluno reage */
if (!R.cadeira) R.cadeira = function (c) {
  var e = S.cd, C = window.CADEIRA || { itens: [] }, n = Math.min(e.n, C.itens.length - 1), x = C.itens[n];
  return cab(c) + trilha(C.itens, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="cadeira vd"><span class="cd-cad" aria-hidden="true"></span><small>THE HOT SEAT</small><b>Your teacher sits here.</b><span>You ask the questions.</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>QUESTION ' + (n + 1) + ' OF ' + C.itens.length + ' · YOU ASK</small><b>' + x.alvo + '</b>' + (e.fac[n] ? '<span class="pq-f">Try: ' + x.dica + '</span>' : '') + '</div>'
    + '<p class="so-prof dica-aluno">Answer as yourself, short: “' + x.resp + '”. Then wait for a reaction or a follow-up question.</p>'
    + fala('cd' + n, [x.dica, 'Really?', 'Why?', 'Me too! / Me neither!'], [])
    + '<div class="pratos-bt"><button type="button" class="btn" data-a="cd-f">Help me ask</button>' + (n < C.itens.length - 1 ? '<button type="button" class="btn" data-a="cd-prox">Next question</button>' : '') + '</div></div></div>';
};
/* WOULD YOU RATHER · duas opções; o aluno escolhe e explica com because */
if (!R.escolha) R.escolha = function (c) {
  var e = S.ec, E = window.ESCOLHA || [], n = Math.min(e.n, E.length - 1), x = E[n], esc = e.esc[n];
  return cab(c) + trilha(E, e.n) + '<div class="escolha"><button type="button" class="ec-op' + (esc === 'a' ? ' on' : '') + '" data-a="ec" data-v="a"><small>A</small><b>' + x.a + '</b></button><span class="ec-ou">or</span><button type="button" class="ec-op' + (esc === 'b' ? ' on' : '') + '" data-a="ec" data-v="b"><small>B</small><b>' + x.b + '</b></button></div>'
    + '<div class="mesa-c"><div class="lado-l">' + fala('ec' + n, x.chips, []) + '</div><div class="lado-l">' + mostra('ec' + n, x.ex, 1)
    + '<p class="so-prof dica-aluno">Then you answer the same question. Do you agree with the student?</p>'
    + (n < E.length - 1 ? '<div class="pratos-bt"><button type="button" class="btn" data-a="ec-prox">Next one</button></div>' : '<p class="aprova">' + (window.ESCOLHA_FIM || 'Great choices, with good reasons.') + '</p>') + '</div></div>';
};

TOQUES.bg = function (b, n) { S.bg.sel = n; };
TOQUES['bg-ok'] = function () { if (S.bg.sel >= 0) S.bg.v[S.bg.sel] = 1; S.bg.sel = -1; };
TOQUES['dd-rola'] = function () { var e = S.dd; if (e.face) e.feito[e.face] = 1; var faltam = [1,2,3,4,5,6].filter(function (f) { return !e.feito[f]; }); e.n++; e.face = faltam.length ? faltam[(e.n * 4) % faltam.length] : ((e.n * 5) % 6) + 1; };
TOQUES['rp-ini'] = function () { S.rp = { ini: Date.now(), n: 0, ok: 0, fim: 0 }; };
TOQUES['rp-ok'] = function () { S.rp.ok++; S.rp.n++; };
TOQUES['rp-passa'] = function () { S.rp.n++; };
TOQUES['rp-de-novo'] = function () { S.rp = { ini: 0, n: 0, ok: 0, fim: 0 }; };
TOQUES['es-sobe'] = function () { S.es.degrau++; S.es.ver = 0; };
TOQUES['es-fica'] = function () { S.es.ver = 1; };
TOQUES.me = function (b, n, v) { var e = S.me; v = +v; if (e.abertas.length >= 2) e.abertas = []; if (e.abertas.indexOf(n) < 0) e.abertas.push(n);
  if (e.abertas.length === 2) { var a = document.querySelector('.me-c[data-n="' + e.abertas[0] + '"]'); if (a && +a.getAttribute('data-v') === v) { e.achados[v] = 1; e.ultimo = v; e.abertas = []; } } };
TOQUES.er = function (b, n) { S.er.achou[n] = 1; S.er.ult = n; };
TOQUES.or = function (b, n) { if (S.or.seq.indexOf(n) < 0) S.or.seq.push(n); };
TOQUES['or-zera'] = function () { S.or.seq = []; };
TOQUES['cd-f'] = function () { S.cd.fac[Math.min(S.cd.n, ((window.CADEIRA || {}).itens || []).length - 1)] = 1; };
TOQUES['cd-prox'] = function () { S.cd.n++; };
TOQUES.ec = function (b, n, v) { S.ec.esc[Math.min(S.ec.n, (window.ESCOLHA || []).length - 1)] = v; };
TOQUES['ec-prox'] = function () { S.ec.n++; };
/* O TABULEIRO (missão alternativa) · 12 casas em volta da mesa; o professor rola, o peão anda, a casa traz a tarefa.
   TABULEIRO = { rot, centro, casas:[{ k, t, ex }] × 12 } · o dado segue um rodízio fixo (sem sorteio). */
S.tb = { pos: -1, rol: 0, ultimo: 0, feitas: {}, fim: 0 };
var TB_POS = [[1,1],[1,2],[1,3],[1,4],[2,4],[3,4],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1]];
var TB_DADO = [3, 5, 2, 4, 6, 1, 4, 2, 5, 3];
if (!R.tabuleiro) R.tabuleiro = function (c) {
  var e = S.tb, T = window.TABULEIRO || { casas: [] }, x = e.pos >= 0 && !e.fim ? T.casas[e.pos] : null;
  var casas = T.casas.map(function (cs, i) { var p = TB_POS[i]; return '<div class="tb-casa' + (e.feitas[i] ? ' feita' : '') + (i === e.pos ? ' aqui' : '') + '" style="grid-row:' + p[0] + ';grid-column:' + p[1] + '"><b>' + (i + 1) + '</b><span>' + cs.k + '</span>' + (i === e.pos ? '<i class="tb-peao" aria-label="You are here"></i>' : '') + '</div>'; }).join('');
  var meio = '<div class="tb-meio"><small>' + T.rot + '</small><b>' + (e.fim ? 'FINISH!' : e.ultimo ? 'You rolled ' + e.ultimo : 'Roll to start') + '</b><span>' + T.centro + '</span><button type="button" class="btn cheio" data-a="tb-rola"' + (e.fim ? ' disabled' : '') + '>Roll the die</button></div>';
  return cab(c) + '<div class="mesa-c tb-mesa"><div class="lado-l"><div class="tabuleiro">' + casas + meio + '</div></div>'
    + '<div class="lado-l"><div class="mesa-card"><small>' + (x ? 'SQUARE ' + (e.pos + 1) + ' · ' + x.k : e.fim ? 'THE END OF THE BOARD' : 'THE BOARD') + '</small>'
    + (x ? '<p class="pq">' + x.t + '</p>' + mostra('tb' + e.pos, x.ex, 1) + '<div class="pratos-bt"><button type="button" class="btn" data-a="tb-ok">Done ✓</button></div>' : '<h2>' + (e.fim ? 'You went all the way around. ' + Object.keys(e.feitas).length + ' squares done!' : 'Roll the die and move. Do the task on your square, out loud.') + '</h2>')
    + '</div><p class="so-prof dica-aluno">Any good answer counts. Tap Done, then roll again.</p></div></div>';
};
TOQUES['tb-rola'] = function () { var e = S.tb; var d = TB_DADO[e.rol % TB_DADO.length]; e.rol++; e.ultimo = d; var n = e.pos + d; var tot = ((window.TABULEIRO || {}).casas || []).length; if (n >= tot) { e.fim = 1; e.pos = tot - 1; } else e.pos = n; };
TOQUES['tb-ok'] = function () { S.tb.feitas[S.tb.pos] = 1; };