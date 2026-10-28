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
  var aula = REV.tipo === 'aula';   /* 15/10: o mesmo motor serve às AULAS do C1 (ver, notar, usar) */
  return '<div class="capa"><div><span class="kick">' + (REV.kick || 'MAIN SERIES · ' + REV.nivel + ' · UNIT ' + REV.unidade + (aula ? ' · LESSON' : ' REVIEW')) + '</span><h1>' + REV.titulo[0] + ' <b>' + REV.titulo[1] + '</b></h1>'
    + '<p class="sub"><b>' + REV.tema + '</b> ' + REV.sub + '</p>'
    + '<div class="chipsx">' + (REV.chips || ['6 doors', '1 mission', 'I can…']).map(function (t) { return '<span class="pilula">' + t + '</span>'; }).join('') + '<span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">' + (REV.botao || 'Open the first door') + '</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + placa(REV.placa) + '<div class="capa-foto" style="background-image:url(' + img('capa') + ')" aria-hidden="true"></div><p class="capa-nota">' + (REV.nota || 'A review is not a new lesson. Answer from memory: mistakes today are the best part.') + '</p></div></div>';
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
    + '<div class="lado-l"><div class="carimbo-u' + (e.prof ? ' dado' : '') + '"><small>' + REV.nivel + ' · ' + (REV.tipo === 'aula' ? 'LESSON' : 'UNIT ' + REV.unidade) + '</small><b>' + (e.prof ? 'DONE' : n + ' / ' + PODE.length) + '</b><span>' + REV.tema + '</span></div>'
    + (e.prof ? '<p class="aprova">' + (REV.kick ? 'Lesson stamped. ' : 'Unit ' + REV.unidade + ' is stamped. ') + (n < PODE.length ? 'The open lines go to the homework.' : 'Every line: you can do it all.') + '</p>'
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
var TB_DADO = [2, 1, 3, 2, 1, 2, 3, 1, 2, 1];   /* passos curtos: umas 7 casas por volta */
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

/* ============================================================
   AS CENAS DE AULA (15/10/2026) · o currículo novo do C1 usa o mesmo motor: VER, NOTAR, USAR.
   REV.tipo = 'aula' muda a capa (REV.chips, REV.botao, REV.nota) e o carimbo.
   VER   · leitura   LEITURA = { rot, tipo:'nota'|'chat'|'fala', antes:{q,h}, texto (o alvo entre {chaves}; "NOME:" no começo da linha vira fala),
                                 perguntas:[{q,h}], olha:'o que notar' }
   NOTAR · descobre  DESCOBRE = { pares:[{ a, b, q, r }], regra:[[rótulo, forma]], armas:[[rótulo, errado, certo, por quê]] }
   USAR  · transforma TRANSFORMA = { rot, itens:[{ de, pista, para }] } · e depois as mecânicas de sempre (missao, tabuleiro, cartao…)
   ============================================================ */
S.lt = { p: 0, marca: 0, q: 0 }; S.dc = { n: 0 }; S.tf = { n: 0, ok: {} };
function comAlvo(t, marca) {
  return h(t).replace(/\{([^}]+)\}/g, '<mark class="alvo' + (marca ? ' on' : '') + '">$1</mark>')
    .split('\n').map(function (l) { return l.replace(/^([A-Z][A-Za-z .’']{1,24}):/, '<b class="lt-quem">$1:</b>'); }).join('<br>');
}
if (!R.leitura) R.leitura = function (c) {
  var e = S.lt, T = window.LEITURA || { texto: '', perguntas: [] }, P = T.perguntas || [], q = Math.min(e.q, P.length - 1);
  var art = '<div class="er-artefato er-' + (T.tipo || 'nota') + ' lt-art vd"><small>' + T.rot + '</small><div class="er-txt">' + comAlvo(T.texto, e.marca) + '</div></div>';
  var lado;
  if (e.p === 0) lado = '<div class="mesa-card"><small>BEFORE YOU READ</small><p class="pq">' + T.antes.q + '</p>' + mostra('lt-a', T.antes.h, 1)
    + '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="lt-p" data-n="1">Read it</button></div></div>';
  else if (e.p === 1) lado = '<div class="mesa-card"><small>QUESTION ' + (q + 1) + ' OF ' + P.length + '</small><p class="pq">' + P[q].q + '</p>' + mostra('lt' + q, P[q].h, 1)
    + '<div class="pratos-bt">' + (q < P.length - 1 ? '<button type="button" class="btn" data-a="lt-q">Next question</button>' : '<button type="button" class="btn cheio" data-a="lt-p" data-n="2">Now look closer</button>') + '</div>'
    + '<p class="so-prof dica-aluno">The student reads the text out loud first. Then the questions: meaning before grammar.</p></div>';
  else lado = '<div class="mesa-card"><small>LOOK CLOSER</small><p class="pq">' + T.olha + '</p>'
    + '<div class="pratos-bt"><button type="button" class="btn' + (e.marca ? '' : ' cheio') + '" data-a="lt-m">' + (e.marca ? 'Hide the pattern' : 'Show the pattern') + '</button></div>'
    + '<p class="so-prof dica-aluno">Let the student find the pattern first. Then tap Show the pattern.</p></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + art + '</div><div class="lado-l">' + lado + '</div></div>';
};
if (!R.descobre) R.descobre = function (c) {
  var e = S.dc, D = window.DESCOBRE || { pares: [], regra: [], armas: [] }, P = D.pares;
  if (e.n >= P.length) return cab(c) + '<div class="fitas4">' + D.regra.map(function (f, i) { return '<div class="fita4 f' + (i % 4) + '"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>'
    + (D.armas && D.armas.length ? armas(D.armas, 'THE TRAPS · SAY IT RIGHT, THEN TAP') : '');
  var x = P[e.n];
  return cab(c) + trilha(P, e.n) + '<div class="dc-par"><div class="dc-f vd"><small>A</small><p>' + comAlvo(x.a, 1) + '</p></div><div class="dc-f vd"><small>B</small><p>' + comAlvo(x.b, 1) + '</p></div></div>'
    + '<div class="mesa-c"><div class="lado-l"><div class="mesa-card"><small>COMPARE · ' + (e.n + 1) + ' OF ' + P.length + '</small><p class="pq">' + x.q + '</p>' + mostra('dc' + e.n, x.r, 0) + '</div></div>'
    + '<div class="lado-l"><p class="so-prof dica-aluno">Guided discovery: the student explains the difference in their own words, even in Portuguese. Then Show answer.</p>'
    + '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="dc-prox">' + (e.n < P.length - 1 ? 'Next pair' : 'See the rule') + '</button></div></div></div>';
};
if (!R.transforma) R.transforma = function (c) {
  var e = S.tf, T = window.TRANSFORMA || { itens: [] }, I = T.itens, n = Math.min(e.n, I.length - 1), x = I[n], feitos = Object.keys(e.ok).length;
  return cab(c) + trilha(I, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="tf-de vd"><small>' + T.rot + '</small><p>' + h(x.de) + '</p><span class="tf-pista">' + x.pista + '</span></div></div>'
    + '<div class="lado-l"><div class="mesa-card"><small>SAY IT THE NEW WAY · ' + feitos + ' OF ' + I.length + ' RIGHT</small>' + mostra('tf' + n, x.para, 0)
    + '<div class="pratos-bt"><button type="button" class="btn' + (e.ok[n] ? ' cheio' : '') + '" data-a="tf-ok">Right ✓</button>' + (n < I.length - 1 ? '<button type="button" class="btn" data-a="tf-prox">Next one</button>' : '') + '</div>'
    + (feitos >= I.length ? '<p class="aprova">' + (T.fim || 'All of them, the new way.') + '</p>' : '') + '</div>'
    + '<p class="so-prof dica-aluno">The student says the new sentence out loud before you show it. Close is good: accept natural variations.</p></div></div>';
};
TOQUES['lt-p'] = function (b, n) { S.lt.p = n; };
TOQUES['lt-q'] = function () { S.lt.q++; };
TOQUES['lt-m'] = function () { S.lt.marca = S.lt.marca ? 0 : 1; };
TOQUES['dc-prox'] = function () { S.dc.n++; };
TOQUES['tf-ok'] = function () { S.tf.ok[Math.min(S.tf.n, ((window.TRANSFORMA || {}).itens || []).length - 1)] = 1; };
TOQUES['tf-prox'] = function () { S.tf.n++; };

/* ============================================================
   AS CENAS DE PROVA (15/10/2026) · cursos preparatórios (Duolingo English Test): cada tipo de questão com o relógio da prova.
   PROVA    = { rot, tarefas:[{ k, tipo:'fala'|'escrita', prep, seg, enun, img, alt, texto, audio, ouve, dica, chips:[], criterios:[], modelo }] }
              prep e seg em segundos; img = chave da imagem (img/live-<img>.webp); audio = a pergunta ouvida (audio/<arquivo>), ouve = o texto dela
   PALAVRAS = { seg, rodadas:[[ ['word', 1|0] … ]], dica, fim }         · Read and Select: tocar só nas palavras reais
   LACUNAS  = { rot, seg, textos:[{ k, t, seg, audio }] }               · Read and Complete / Fill in the Blanks: "{visível|falta}" vira lacuna
   DITADO   = { itens:[{ t, audio, nota }] }                            · Listen and Type: ouvir até 3 vezes e digitar
   MULTIPLA = { rot, itens:[{ audio, ouve, txt, q, ops:[], c, por }] }  · escolha única (Interactive Listening / Reading)
   O relógio corre sozinho; quando zera, a cena repinta e segue para a fase seguinte.
   O REV.kick troca a linha de cima da capa (o curso não é a Main series).
   ============================================================ */
S.rel = {}; S.pv = { n: 0, fase: 0, crit: {} }; S.pl = { r: 0, on: {}, ini: 0, fim: 0 }; S.lc = { n: 0, ver: 0, ini: 0 }; S.dt = { n: 0, ver: {} }; S.mt = { n: 0, esc: {} }; S.toques = {};
function mmss(s) { return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
function resta(k) { var r = S.rel[k]; return r ? Math.max(0, Math.ceil(r.seg - (Date.now() - r.ini) / 1000)) : null; }
function liga(k, seg, ini) { S.rel[k] = { ini: ini || Date.now(), seg: seg }; }
function relogio(k, seg, rot) {
  var r = S.rel[k], f = r ? resta(k) : seg, corre = !!r && f > 0, pass = r ? Math.min(r.seg, (Date.now() - r.ini) / 1000) : 0;
  return '<div class="pv-rel' + (corre ? ' corre' : r ? ' fim' : '') + (corre && f <= 10 ? ' quase' : '') + '" data-rel="' + k + '"><div class="pv-rel-n"><b class="pv-num">' + mmss(f) + '</b><small>' + rot + '</small></div>'
    + '<div class="pv-barra"><i style="animation-duration:' + seg + 's;animation-delay:-' + pass.toFixed(1) + 's;animation-play-state:' + (corre ? 'running' : 'paused') + '"></i></div></div>';
}
setInterval(function () {
  var zerou = false;
  [].forEach.call(document.querySelectorAll('.pv-rel.corre'), function (el) {
    var f = resta(el.getAttribute('data-rel')); if (f === null) return;
    el.querySelector('.pv-num').textContent = mmss(f); el.classList.toggle('quase', f <= 10);
    if (!f) zerou = true;
  });
  if (zerou) pinta();
}, 250);
function conta(t) { var n = (String(t).trim().match(/\S+/g) || []).length; return n + (n === 1 ? ' word' : ' words'); }
/* o áudio da prova: conta as vezes que tocou (Listen and Type deixa 3) */
var __tocaAntes = TOQUES.toca;
TOQUES.toca = function (b, n, v) { var x = b.getAttribute('data-x'), au = SONS[x]; S.toques[x] = (S.toques[x] || 0) + 1; if (au && !au.__wlConta) { au.__wlConta = 1; au.addEventListener('ended', function () { pinta(); }); } return __tocaAntes ? __tocaAntes(b, n, v) : true; };
function ouvir(a, max, rot) {
  var vez = S.toques[a] || 0, tocando = SONS[a] && !SONS[a].paused;
  if (max && vez >= max && !tocando) return '<div class="pv-ouve gasto"><span>' + max + ' of ' + max + ' plays used.</span></div>';
  return '<div class="pv-ouve">' + tocar(a, 1) + '<span>' + (rot || 'Listen.') + (max ? ' <em>' + vez + ' of ' + max + ' plays</em>' : '') + '</span></div>';
}

/* A TAREFA COM RELÓGIO · ler o pedido → preparar → falar ou escrever → a lista do que tinha que estar lá + o modelo */
if (!R.prova) R.prova = function (c) {
  var P = window.PROVA || { tarefas: [] }, T = P.tarefas, e = S.pv, n = Math.min(e.n, T.length - 1), x = T[n], kp = 'pvp' + n, kr = 'pvr' + n, campo = 'pv' + n;
  /* as fases andam com o relógio: o preparo zerou → a resposta começa no instante exato em que o preparo acabou */
  if (e.fase === 1 && resta(kp) === 0) { e.fase = 2; liga(kr, x.seg, S.rel[kp].ini + x.prep * 1000); }
  if (e.fase === 2 && resta(kr) === 0) e.fase = 3;
  var escrita = x.tipo === 'escrita', txt = (S.txt || {})[campo] || '';
  var tarefa = '<div class="pv-tarefa vd"><small>' + (P.rot || 'THE TASK') + ' · ' + x.k + '</small>'
    + (x.img ? '<div class="pv-foto" style="background-image:url(' + img(x.img) + ')" role="img" aria-label="' + h(x.alt || 'A photo') + '"></div>' : '')
    + (x.audio ? ouvir(x.audio, 0, e.fase >= 3 && x.ouve ? '“' + x.ouve + '”' : 'Listen to the question. In the test, it plays once.') : '')
    + '<p class="pv-enun">' + x.enun + '</p>' + (x.texto ? '<div class="pv-texto">' + x.texto + '</div>' : '') + '</div>';
  var lado;
  if (e.fase === 0) lado = '<div class="mesa-card"><small>TASK ' + (n + 1) + ' OF ' + T.length + '</small><h2>' + (x.prep ? x.prep + ' seconds to prepare, then ' : '') + mmss(x.seg) + ' to ' + (escrita ? 'write' : 'speak') + '.</h2>'
    + (x.dica ? '<p>' + x.dica + '</p>' : '') + '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="pv-ini">' + (x.prep ? 'Start preparing' : 'Start the clock') + '</button></div></div>';
  else if (e.fase === 1) lado = '<div class="mesa-card">' + relogio(kp, x.prep, 'TO PREPARE') + '<p>Plan in your head: what will you say first, second, last?</p>' + (x.chips ? fala(campo + 'p', x.chips, []) : '')
    + '<div class="pratos-bt"><button type="button" class="btn" data-a="pv-ja">I’m ready</button></div></div>';
  else if (e.fase === 2) lado = '<div class="mesa-card">' + relogio(kr, x.seg, escrita ? 'TO WRITE' : 'TO SPEAK')
    + (escrita ? '<textarea class="pv-ta" data-campo="' + campo + '" rows="7" spellcheck="false" lang="en" placeholder="Write here…" aria-label="Your answer">' + h(txt) + '</textarea><p class="pv-conta">' + conta(txt) + '</p>'
      : '<p class="pv-falando"><i aria-hidden="true"></i>Speak now. Keep going until the clock stops.</p>' + (x.chips ? fala(campo + 'f', x.chips, []) : ''))
    + '<div class="pratos-bt"><button type="button" class="btn" data-a="pv-fim">Finish early</button></div></div>';
  else lado = '<div class="mesa-card"><small>' + (escrita ? 'YOUR ANSWER · ' + conta(txt) : 'TIME’S UP') + '</small>'
    + (escrita ? WolfCorretor.papel(campo, txt, '', 'Your answer') : '<h2>How did it go? Check the list together.</h2>')
    + '<h5 class="pv-h5">THE CHECKLIST · TAP WHAT WAS THERE</h5><div class="pv-crit">' + (x.criterios || []).map(function (t, i) { return '<button type="button" class="pv-c' + (e.crit[n + '_' + i] ? ' on' : '') + '" data-a="pv-c" data-n="' + i + '"><i aria-hidden="true"></i><span>' + t + '</span></button>'; }).join('') + '</div>'
    + mostra(campo, x.modelo, 1)
    + '<div class="pratos-bt"><button type="button" class="btn" data-a="pv-zera">Try again</button>' + (n < T.length - 1 ? '<button type="button" class="btn cheio" data-a="pv-prox">Next task</button>' : '') + '</div></div>';
  return cab(c) + (T.length > 1 ? trilha(T, e.n) : '') + '<div class="mesa-c"><div class="lado-l">' + tarefa + '</div><div class="lado-l">' + lado + '</div></div>';
};
function pvX() { var T = (window.PROVA || { tarefas: [] }).tarefas, n = Math.min(S.pv.n, T.length - 1); return [n, T[n]]; }
TOQUES['pv-ini'] = function () { var a = pvX(); if (a[1].prep) { S.pv.fase = 1; liga('pvp' + a[0], a[1].prep); } else { S.pv.fase = 2; liga('pvr' + a[0], a[1].seg); } };
TOQUES['pv-ja'] = function () { var a = pvX(); S.pv.fase = 2; liga('pvr' + a[0], a[1].seg); };
TOQUES['pv-fim'] = function () { S.pv.fase = 3; };
TOQUES['pv-c'] = function (b, n) { var k = pvX()[0] + '_' + n; S.pv.crit[k] = !S.pv.crit[k]; };
TOQUES['pv-zera'] = function () { var n = pvX()[0]; S.pv.fase = 0; delete S.rel['pvp' + n]; delete S.rel['pvr' + n]; S.txt = S.txt || {}; S.txt['pv' + n] = ''; delete S.resp['pv' + n]; };
TOQUES['pv-prox'] = function () { S.pv.n++; S.pv.fase = 0; };

/* READ AND SELECT · tocar só nas palavras reais, contra o relógio; no fim: achou, perdeu, tocou numa falsa */
if (!R.palavras) R.palavras = function (c) {
  var P = window.PALAVRAS || { seg: 60, rodadas: [[]] }, e = S.pl, r = Math.min(e.r, P.rodadas.length - 1), W = P.rodadas[r], k = 'pl' + r;
  if (e.ini && !e.fim && resta(k) === 0) e.fim = 1;
  var reais = W.filter(function (w) { return w[1]; }).length, achou = 0, falsas = 0;
  W.forEach(function (w, i) { if (e.on[r + '_' + i]) { if (w[1]) achou++; else falsas++; } });
  var grade = '<div class="pl-grade' + (e.ini ? '' : ' tapa') + '">' + W.map(function (w, i) {
    var on = e.on[r + '_' + i], cl = e.fim ? (w[1] ? (on ? ' certo' : ' perdeu') : (on ? ' errou' : ' neutra')) : on ? ' on' : '';
    return '<button type="button" class="pl-w' + cl + '" data-a="pl" data-n="' + i + '"' + (e.ini && !e.fim ? '' : ' disabled') + '>' + w[0] + '</button>'; }).join('') + '</div>';
  var lado = !e.ini ? '<div class="mesa-card"><small>ROUND ' + (r + 1) + ' OF ' + P.rodadas.length + '</small><h2>Tap only the REAL English words. You have ' + P.seg + ' seconds.</h2><p>Careful: some fake words look very real.</p><div class="pratos-bt"><button type="button" class="btn cheio" data-a="pl-ini">Start the clock</button></div></div>'
    : !e.fim ? '<div class="mesa-card">' + relogio(k, P.seg, 'LEFT') + '<div class="pratos-bt"><button type="button" class="btn" data-a="pl-ve">Done: check</button></div></div>'
    : '<div class="mesa-card"><small>ROUND ' + (r + 1) + ' · RESULT</small><h2>' + achou + ' of ' + reais + ' real words found' + (falsas ? ', and ' + falsas + ' fake word' + (falsas > 1 ? 's' : '') + ' tapped.' : '. No fake words tapped!') + '</h2>'
      + '<p class="pl-leg"><span class="certo">found</span><span class="perdeu">missed</span><span class="errou">fake, tapped</span></p>'
      + (P.dica ? '<p class="so-prof dica-aluno">' + P.dica + '</p>' : '')
      + (r < P.rodadas.length - 1 ? '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="pl-prox">Next round</button></div>' : '<p class="aprova">' + (P.fim || 'In the test, a fake word you tap costs points. When in doubt, leave it.') + '</p>') + '</div>';
  return cab(c) + (P.rodadas.length > 1 ? trilha(P.rodadas, e.r) : '') + '<div class="mesa-c"><div class="lado-l">' + grade + '</div><div class="lado-l">' + lado + '</div></div>';
};
TOQUES.pl = function (b, n) { var k = Math.min(S.pl.r, (window.PALAVRAS || { rodadas: [1] }).rodadas.length - 1) + '_' + n; S.pl.on[k] = !S.pl.on[k]; };
TOQUES['pl-ini'] = function () { S.pl.ini = 1; S.pl.fim = 0; liga('pl' + Math.min(S.pl.r, PALAVRAS.rodadas.length - 1), PALAVRAS.seg); };
TOQUES['pl-ve'] = function () { S.pl.fim = 1; };
TOQUES['pl-prox'] = function () { S.pl.r++; S.pl.ini = 0; S.pl.fim = 0; };

/* AS LACUNAS · "{visível|falta}": o aluno digita só o que falta; Check pinta certo/errado e mostra a palavra inteira */
function lacunasTxt(t, n, ver) {
  var j = 0;
  return h(t).replace(/\{([^|}]*)\|([^}]+)\}/g, function (_, vis, falta) {
    var campo = 'lc' + n + '_' + (j++), v = (S.txt || {})[campo] || '', ok = v.trim().toLowerCase() === falta.toLowerCase();
    return '<span class="lc-p' + (ver ? (ok ? ' ok' : ' no') : '') + '">' + vis + '<input class="lc-in" data-campo="' + campo + '" maxlength="' + falta.length + '" style="width:' + (falta.length * 0.68 + 0.9).toFixed(2) + 'em" value="' + h(v) + '" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Missing letters"' + (ver ? ' readonly' : '') + '>'
      + (ver && !ok ? '<em>' + vis + falta + '</em>' : '') + '</span>';
  }).replace(/\n/g, '<br>');
}
if (!R.lacunas) R.lacunas = function (c) {
  var P = window.LACUNAS || { textos: [] }, e = S.lc, n = Math.min(e.n, P.textos.length - 1), x = P.textos[n], k = 'lc' + n, seg = x.seg || P.seg;
  if (seg && e.ini && !e.ver && resta(k) === 0) e.ver = 1;
  var gaps = x.t.match(/\{[^|}]*\|[^}]+\}/g) || [], certos = 0;
  gaps.forEach(function (m, j) { var f = m.slice(1, -1).split('|')[1]; if ((((S.txt || {})['lc' + n + '_' + j]) || '').trim().toLowerCase() === f.toLowerCase()) certos++; });
  var tapa = seg && !e.ini && !e.ver;
  var art = '<div class="er-artefato lc-art vd' + (tapa ? ' tapa' : '') + '"><small>' + (x.k || P.rot) + '</small>' + (x.audio ? ouvir(x.audio, 0, 'Listen first, then fill in the gaps.') : '') + '<div class="er-txt lc-txt">' + lacunasTxt(x.t, n, e.ver) + '</div></div>';
  var lado = '<div class="mesa-card"><small>' + (P.item || 'TEXT') + ' ' + (n + 1) + ' OF ' + P.textos.length + ' · ' + gaps.length + (gaps.length === 1 ? ' GAP' : ' GAPS') + '</small>'
    + (e.ver ? '<h2>' + certos + ' of ' + gaps.length + ' right.</h2><p>' + (certos === gaps.length ? 'Every gap. Perfect.' : 'Read it all out loud, with the right words.') + '</p>'
        + (n < P.textos.length - 1 ? '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="lc-prox">Next text</button></div>' : '<p class="aprova">' + (P.fim || 'Done. Spelling counts: one wrong letter and the gap is wrong.') + '</p>')
      : tapa ? '<h2>' + mmss(seg) + ' for the whole text. Type only the missing letters.</h2><div class="pratos-bt"><button type="button" class="btn cheio" data-a="lc-ini">Start the clock</button></div>'
      : (seg ? relogio(k, seg, 'LEFT') : '<h2>Type only the missing letters.</h2>') + '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="lc-ve">Check</button></div>')
    + (P.dica ? '<p class="so-prof dica-aluno">' + P.dica + '</p>' : '') + '</div>';
  return cab(c) + (P.textos.length > 1 ? trilha(P.textos, e.n) : '') + '<div class="mesa-c"><div class="lado-l">' + art + '</div><div class="lado-l">' + lado + '</div></div>';
};
TOQUES['lc-ini'] = function () { var P = LACUNAS, n = Math.min(S.lc.n, P.textos.length - 1); S.lc.ini = 1; liga('lc' + n, P.textos[n].seg || P.seg); };
TOQUES['lc-ve'] = function () { S.lc.ver = 1; };
TOQUES['lc-prox'] = function () { S.lc.n++; S.lc.ver = 0; S.lc.ini = 0; };

/* O DITADO · ouvir até 3 vezes, digitar, conferir palavra por palavra */
function compara(alvo, dado) {
  var norm = function (s) { return s.toLowerCase().replace(/[’`]/g, "'").replace(/[^a-z0-9' ]+/g, ' ').trim(); };
  var B = norm(dado).split(/\s+/).filter(Boolean), ok = 0, tot = 0;
  var html = alvo.split(/\s+/).map(function (w) { var nw = norm(w); if (!nw) return h(w); tot++; var i = B.indexOf(nw); if (i >= 0) { B.splice(i, 1); ok++; return '<span class="dt-ok">' + h(w) + '</span>'; } return '<span class="dt-no">' + h(w) + '</span>'; }).join(' ');
  return { html: html, ok: ok, tot: tot };
}
if (!R.ditado) R.ditado = function (c) {
  var D = window.DITADO || { itens: [] }, e = S.dt, n = Math.min(e.n, D.itens.length - 1), x = D.itens[n], campo = 'dt' + n, v = (S.txt || {})[campo] || '';
  var esq = '<div class="pv-tarefa vd"><small>LISTEN AND TYPE · ' + (n + 1) + ' OF ' + D.itens.length + '</small>'
    + (x.audio ? ouvir(x.audio, 3, 'Listen to the sentence.') : '<p class="so-prof dica-aluno">Read it out loud, at normal speed (up to 3 times): “' + x.t + '”</p><p class="dica-aluno">Listen to your teacher.</p>')
    + '<textarea class="pv-ta dt-ta" data-campo="' + campo + '" rows="3" spellcheck="false" lang="en" placeholder="Type what you hear…" aria-label="Type what you hear"' + (e.ver[n] ? ' readonly' : '') + '>' + h(v) + '</textarea></div>';
  var r = e.ver[n] ? compara(x.t, v) : null;
  var lado = '<div class="mesa-card">' + (r ? '<small>' + r.ok + ' OF ' + r.tot + ' WORDS</small><p class="dt-alvo">' + r.html + '</p>' + (x.nota ? '<p class="pv-nota">' + x.nota + '</p>' : '')
      + (n < D.itens.length - 1 ? '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="dt-prox">Next sentence</button></div>' : '<p class="aprova">' + (D.fim || 'Small words matter: a, the, to, -s, -ed. Listen for them.') + '</p>')
    : '<small>THE SENTENCE</small><h2>Type every word. Punctuation does not count; spelling does.</h2><div class="pratos-bt"><button type="button" class="btn cheio" data-a="dt-ve">Check</button></div>') + '</div>';
  return cab(c) + trilha(D.itens, e.n) + '<div class="mesa-c"><div class="lado-l">' + esq + '</div><div class="lado-l">' + lado + '</div></div>';
};
TOQUES['dt-ve'] = function () { S.dt.ver[Math.min(S.dt.n, DITADO.itens.length - 1)] = 1; };
TOQUES['dt-prox'] = function () { S.dt.n++; };

/* A ESCOLHA ÚNICA · ouvir ou ler, escolher; a cor diz certo/errado e a frase diz por quê */
if (!R.multipla) R.multipla = function (c) {
  var M = window.MULTIPLA || { itens: [] }, I = M.itens, e = S.mt, n = Math.min(e.n, I.length - 1), x = I[n], esc = e.esc[n], foi = esc !== undefined;
  var certos = 0, feitos = 0; Object.keys(e.esc).forEach(function (k) { feitos++; if (I[k] && e.esc[k] === I[k].c) certos++; });
  var esq = '<div class="pv-tarefa vd"><small>' + (M.rot || 'CHOOSE') + ' · ' + (n + 1) + ' OF ' + I.length + '</small>'
    + (x.audio ? ouvir(x.audio, 0, foi && x.ouve ? '“' + x.ouve + '”' : 'Listen.') : x.ouve ? '<p class="so-prof dica-aluno">Read it out loud: “' + x.ouve + '”</p>' : '')
    + (x.txt ? '<div class="pv-texto">' + x.txt + '</div>' : '') + '<p class="pv-enun">' + x.q + '</p>' + (M.base ? '<details class="mt-base"><summary>See the text</summary><div class="er-txt">' + comAlvo(M.base, 0) + '</div></details>' : '') + '</div>';
  var ops = '<div class="mt-ops">' + x.ops.map(function (o, i) { var cl = !foi ? '' : i === x.c ? ' certo' : i === esc ? ' errou' : ' apaga';
    return '<button type="button" class="mt-op' + cl + '" data-a="mt" data-n="' + i + '"' + (foi ? ' disabled' : '') + '><b>' + 'ABCDEF'.charAt(i) + '</b><span>' + o + '</span></button>'; }).join('') + '</div>';
  var lado = '<div class="mesa-card"><small>' + certos + ' OF ' + feitos + ' RIGHT</small>' + ops
    + (foi ? '<p class="' + (esc === x.c ? 'aprova' : 'recusa') + '">' + (esc === x.c ? 'Right. ' : 'Not this one. ') + x.por + '</p>'
      + (n < I.length - 1 ? '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="mt-prox">Next</button></div>' : '<p class="aprova">' + certos + ' of ' + I.length + ' right. ' + (M.fim || '') + '</p>') : '') + '</div>';
  return cab(c) + trilha(I, e.n) + '<div class="mesa-c"><div class="lado-l">' + esq + '</div><div class="lado-l">' + lado + '</div></div>';
};
TOQUES.mt = function (b, n) { var k = Math.min(S.mt.n, MULTIPLA.itens.length - 1); if (S.mt.esc[k] === undefined) S.mt.esc[k] = n; };
TOQUES['mt-prox'] = function () { S.mt.n++; };

/* digitação sem repintar: a lacuna cheia pula para a próxima; a escrita conta as palavras */
document.addEventListener('input', function (ev) {
  var t = ev.target; if (!t.classList) return;
  if (t.classList.contains('lc-in') && t.value.length >= t.maxLength) { var todas = [].slice.call(document.querySelectorAll('.lc-in:not([readonly])')), i = todas.indexOf(t); if (todas[i + 1]) todas[i + 1].focus(); }
  if (t.classList.contains('pv-ta')) { var cnt = t.parentNode.querySelector('.pv-conta'); if (cnt) cnt.textContent = conta(t.value); }
});
