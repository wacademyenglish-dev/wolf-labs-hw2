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
