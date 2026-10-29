/* OS PROJETOS · Arena do Cliente (catálogo P-xx) · curso Selling Services · 28/10/2026
   Carregado DEPOIS do revisao.js. O aluno CONSTRÓI algo de trabalho na aula ao vivo e apresenta.
   Só tocar e escrever (nada de arrastar): o fio da sala repete toque e texto nos dois lados.
   Quatro cenas novas, cada uma com os seus dados no aula.js:
   · raciocinio (P-01) RACIOCINIO = { rot, cliente, etapas:['PAIN','IMPACT','SOLUTION','PROOF','NEXT STEP'],
       cartas:[{ t, e }] (e = índice da etapa; e:-1 = carta que não serve), fala:[frases], modelo }
   · conta      (P-02) CONTA = { rot, campos:[{ r, ph, ex }], chips:[…], modelo }
   · slides     (P-04) SLIDES = { rot, slides:[{ rt, ph, pn }], chips:[…], modelo }
   · calculo    (P-06) CALCULO = { rot, cliente, campos:[{ k, r, v, un }] (k: pessoas, horas, custo, pct), fala, modelo } */
S.pj = S.pj || { rc: [] };

/* ---------- P-01 · a linha de raciocínio da venda ---------- */
if (!R.raciocinio) R.raciocinio = function (c) {
  var D = window.RACIOCINIO, E = D.etapas, esc = S.pj.rc, vaga = pjVaga(), cheio = vaga < 0;
  var linha = '<div class="pj-linha">' + E.map(function (et, i) {
    var x = esc[i] != null ? D.cartas[esc[i]] : null, certo = x && x.e === i;
    return '<button type="button" class="pj-slot' + (x ? (certo ? ' ok' : ' no') : '') + '" data-a="pj-tira" data-n="' + i + '"' + (x ? '' : ' disabled') + '><small>' + (i + 1) + ' · ' + et + '</small><span>' + (x ? x.t : 'tap a card') + '</span></button>';
  }).join('') + '</div>';
  var ordem = embaralha(D.cartas.map(function (x, i) { return i; }), 3);   /* misturadas, mas iguais nos dois lados da sala */
  var cartas = '<div class="pj-cartas">' + ordem.map(function (i) { var x = D.cartas[i];
    var usada = esc.indexOf(i) >= 0;
    return '<button type="button" class="pj-carta' + (usada ? ' usada' : '') + '" data-a="pj-poe" data-n="' + i + '"' + (usada || cheio ? ' disabled' : '') + '>' + x.t + '</button>';
  }).join('') + '</div>';
  var certos = esc.filter(function (n, i) { return n != null && D.cartas[n].e === i; }).length;
  var lado = '<div class="mesa-card"><small>THE CLIENT · ' + D.cliente + '</small>'
    + (cheio ? '<p class="' + (certos === E.length ? 'aprova' : 'recusa') + '">' + (certos === E.length ? 'A strong storyline. Now say it to the client, card by card.' : certos + ' of ' + E.length + ' in the right place. Tap a red card to take it out.') + '</p>'
      + fala('pj-rc', D.fala || [], []) + mostra('pj-rc-m', D.modelo, 1)
      : '<p class="pq">Build the story of your sale: tap a card for step ' + (vaga + 1) + ' · <b>' + E[vaga] + '</b>.</p>')
    + '<p class="so-prof dica-aluno">Let the student choose. A card in the wrong place turns red only when the line is full. Then the student presents it to you, the client.</p></div>';
  return cab(c) + linha + '<div class="mesa-c"><div class="lado-l">' + cartas + '</div><div class="lado-l">' + lado + '</div></div>';
};
/* a primeira etapa vazia (a carta tirada deixa o buraco no lugar dela) */
function pjVaga() { var E = window.RACIOCINIO.etapas; for (var i = 0; i < E.length; i++) if (S.pj.rc[i] == null) return i; return -1; }
TOQUES['pj-poe'] = function (b, n) { var v = pjVaga(); if (v >= 0 && S.pj.rc.indexOf(n) < 0) S.pj.rc[v] = n; };
TOQUES['pj-tira'] = function (b, n) { S.pj.rc[n] = null; };

/* ---------- P-02 · o quadro da conta ---------- */
function pjCampo(id, ph, rot) {
  return '<label class="pj-campo"><small>' + rot + '</small><input data-campo="' + id + '" value="' + h((S.txt || {})[id] || '') + '" placeholder="' + h(ph) + '" spellcheck="false" lang="en" autocomplete="off"></label>';
}
if (!R.conta) R.conta = function (c) {
  var D = window.CONTA;
  var quadro = '<div class="pj-quadro">' + D.campos.map(function (f, i) { return pjCampo('pj-ct' + i, f.ph, f.r); }).join('') + '</div>';
  var ex = '<div class="ficha vd on"><small>EXAMPLE · A FICTIONAL ACCOUNT</small>' + D.campos.map(function (f) { return '<div class="ficha-l"><span>' + f.r + '</span><b>' + f.ex + '</b></div>'; }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + quadro + fala('pj-ct', D.chips || [], []) + '</div><div class="lado-l">' + ex + mostra('pj-ct-m', D.modelo, 1)
    + '<p class="so-prof dica-aluno">A real client (no secret data) or an invented one. When the board is full, the student presents the account in 5–6 sentences.</p></div></div>';
};

/* ---------- P-04 · o pitch de 3 slides ---------- */
if (!R.slides) R.slides = function (c) {
  var D = window.SLIDES, T = S.txt || {};
  var edita = D.slides.map(function (s, i) { return '<div class="pj-ed"><small>SLIDE ' + (i + 1) + ' · ' + s.rt + '</small>' + pjCampo('pj-sl' + i + 't', s.ph, 'Title') + pjCampo('pj-sl' + i + 'n', s.pn, 'One number') + '</div>'; }).join('');
  var mostraS = '<div class="pj-slides">' + D.slides.map(function (s, i) {
    return '<div class="pj-slide" data-sl="' + i + '"><small>' + (i + 1) + ' / ' + D.slides.length + '</small><b class="pj-sn">' + h(T['pj-sl' + i + 'n'] || '—') + '</b><span class="pj-st">' + h(T['pj-sl' + i + 't'] || s.rt) + '</span></div>';
  }).join('') + '</div>';
  return cab(c) + mostraS + '<div class="mesa-c"><div class="lado-l">' + edita + '</div><div class="lado-l"><div class="mesa-card"><small>PRESENT IT · 1 MINUTE</small><p class="pq">Write a title and one number for each slide. Then present the three slides to the client.</p>'
    + fala('pj-sl', D.chips || [], []) + mostra('pj-sl-m', D.modelo, 1) + '</div></div></div>';
};

/* ---------- P-06 · a calculadora de economia ---------- */
function pjNum(id, v) { var x = parseFloat(String((S.txt || {})[id] ?? v).replace(',', '.')); return isFinite(x) ? x : 0; }
function pjConta() {
  var D = window.CALCULO, val = {};
  D.campos.forEach(function (f, i) { val[f.k] = pjNum('pj-ca' + i, f.v); });
  var horas = Math.round((val.horas || 0) * (val.pct || 0) / 100);
  var dinheiro = Math.round(horas * (val.custo || 0));
  return { horas: horas, mes: dinheiro, ano: dinheiro * 12 };
}
function pjMoeda(n) { return 'R$ ' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
if (!R.calculo) R.calculo = function (c) {
  var D = window.CALCULO, r = pjConta();
  var campos = '<div class="pj-quadro">' + D.campos.map(function (f, i) {
    var id = 'pj-ca' + i, v = (S.txt || {})[id]; if (v === undefined) { S.txt = S.txt || {}; S.txt[id] = String(f.v); }
    return '<label class="pj-campo"><small>' + f.r + (f.un ? ' · ' + f.un : '') + '</small><input data-campo="' + id + '" inputmode="decimal" value="' + h(S.txt[id]) + '" autocomplete="off"></label>';
  }).join('') + '</div>';
  var res = '<div class="pj-res" id="pj-res"><div><small>HOURS SAVED / MONTH</small><b>' + r.horas + '</b></div><div><small>SAVED / MONTH</small><b>' + pjMoeda(r.mes) + '</b></div><div><small>SAVED / YEAR</small><b>' + pjMoeda(r.ano) + '</b></div></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="mesa-card"><small>THE CLIENT · ' + D.cliente + '</small>' + campos + '</div></div><div class="lado-l">' + res
    + '<div class="mesa-card"><small>SAY IT</small><p class="pq">' + D.fala + '</p>' + mostra('pj-ca-m', D.modelo, 1) + '</div></div></div>';
};
/* conta e slides mudam a cada letra: troco só o pedaço, sem repintar (o cursor não pula) */
document.addEventListener('input', function (ev) {
  var t = ev.target, id = t && t.getAttribute && t.getAttribute('data-campo');
  if (!id) return;
  if (/^pj-ca\d/.test(id) && window.CALCULO) {
    var r = pjConta(), box = document.getElementById('pj-res');
    if (box) { var b = box.querySelectorAll('b'); b[0].textContent = r.horas; b[1].textContent = pjMoeda(r.mes); b[2].textContent = pjMoeda(r.ano); }
  }
  var m = /^pj-sl(\d+)([tn])$/.exec(id);
  if (m) { var sl = document.querySelector('.pj-slide[data-sl="' + m[1] + '"] ' + (m[2] === 't' ? '.pj-st' : '.pj-sn')); if (sl) sl.textContent = t.value || (m[2] === 'n' ? '—' : window.SLIDES.slides[+m[1]].rt); }
});
