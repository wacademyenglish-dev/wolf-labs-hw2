/* ============================================================
   KIT LIVE CLASS · O TECLADO DE CELULAR                08/10/2026
   Pedido do Carlos (08/10): "um super corretor no estilo teclado de
   celular que dá as sugestões de escrita da palavra certa", "bem bonito,
   na cor da plataforma", e "você escreve get, aparece todas as formas
   de get, get up… um dicionário" (catálogo da escrita, B1–B3 + E1 + E6).
   Uma barra com três sugestões embaixo de cada campo de escrever
   ([data-papel] textarea: a escrita da aula e a da lição de casa):
     - completa a palavra e corrige o erro de digitação (como o celular)
     - sugere a próxima palavra (pares tirados das frases das nossas aulas)
     - as palavras da própria aula vêm primeiro
     - pega os erros de brasileiro (I have 20 years → I am 20)
   O botão ⋯ abre o cartão da palavra: as formas, os phrasal verbs (com o
   sentido em português e um exemplo) e o porquê do erro.
   Dados: kit/teclado-dados.js (WL_TECLADO) e kit/familia-dados.js
   (WL_FAMILIA). Tudo no aparelho, sem API. Tocar numa sugestão troca o
   texto e dispara 'input' (o corretor e o fio da sala recebem o texto).
   Os botões levam data-wl-local: o texto já viaja pelo campo.
   ============================================================ */
(function () {
  /* o dicionário (385 KB) só carrega no primeiro toque num campo de escrever: a aula abre tão rápido quanto antes */
  var ALVO = '[data-papel] textarea, textarea[data-teclado]';
  var PASTA = ((document.currentScript && document.currentScript.src) || '').replace(/teclado\.js(\?.*)?$/, '');
  var carregando = false;
  function carrega(primeiro) {
    if (window.WL_TECLADO && window.WL_FAMILIA && window.WL_EXPLORA) return inicia(primeiro);
    if (carregando) return; carregando = true;
    var faltam = 0;
    ['teclado-dados.js', 'familia-dados.js', 'explora-dados.js'].forEach(function (f) {
      if ((f === 'teclado-dados.js' && window.WL_TECLADO) || (f === 'familia-dados.js' && window.WL_FAMILIA) || (f === 'explora-dados.js' && window.WL_EXPLORA)) return;
      faltam++; var s = document.createElement('script'); s.src = PASTA + f;
      s.onload = s.onerror = function () { if (--faltam === 0) inicia(primeiro); };
      document.head.appendChild(s);
    });
    if (!faltam) inicia(primeiro);
  }
  document.addEventListener('focusin', function (e) { if (e.target && e.target.matches && e.target.matches(ALVO)) carrega(e.target); });
  var pronto = false;
  function inicia(primeiro) {
  if (pronto || !window.WL_TECLADO) return; pronto = true;
  var D = window.WL_TECLADO;
  var F = window.WL_FAMILIA || { irr: {}, pv: {} };
  var X = window.WL_EXPLORA || { nivel: {}, junto: {}, conecta: {} };
  var NIV_DE = {};   /* amazing → a escada de good (E3) */
  Object.keys(X.nivel).forEach(function (k) { X.nivel[k].forEach(function (w) { if (!NIV_DE[w]) NIV_DE[w] = k; }); });
  var NIVEL = (function () {   /* o nível da aula (A1…C1), para os conectores do "continue a história" (E5) */
    if (window.HWMETA && window.HWMETA.nivel) return window.HWMETA.nivel;
    var t = (document.title || '') + ' ' + ((document.querySelector('.marca') || {}).textContent || '') + ' ' + location.pathname.replace(/%20/g, ' ') + ' ' + ((document.body && document.body.textContent) || '').slice(0, 3000);
    var m = t.match(/\b(A1|A2|B1|B2|C1)\b/); return m ? m[1] : 'A2';
  })();
  function alvoDaAula(n) {   /* o alvo da aula: o começo da frase certa das armadilhas do Focus, até a parte em negrito ("Would you mind holding") */
    var l = (window.TRAPS || window.ARMAS || []).filter(function (a) { return a && /<b>/.test(a[2] || ''); }), k, a, m;
    for (k = 0; k < l.length; k++) {
      a = String(l[(n + k) % l.length][2]); m = a.match(/^(.*?)<b>([^<]+)<\/b>/); if (!m || !/[A-Za-z]/.test(m[1])) continue;
      var ws = (m[1] + m[2]).replace(/<[^>]+>/g, '').replace(/[“”"«»]/g, '').replace(/[.,!?]+\s*$/, '').trim().split(/\s+/);
      if (ws.length >= 2 && ws.length <= 6 && /^[A-Za-z’']/.test(ws[0])) return ws.join(' ');
    }
    return null;
  }
  var PAL = D.w.split(' '), RANK = {}, i;
  for (i = 0; i < PAL.length; i++) RANK[PAL[i]] = i;
  var FORMA = {};   /* went → go, gotten → get (o índice de volta dos irregulares) */
  Object.keys(F.irr).forEach(function (b) { F.irr[b].split('|').forEach(function (f) { f.split(' / ').forEach(function (x) { x = x.trim(); if (x && x !== '—' && !FORMA[x]) FORMA[x] = b; }); }); });
  function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  /* ---------- corrigir (o método do SymSpell: índice de apagamentos + distância de edição) ---------- */
  var DEL = null;
  function indice() {
    if (DEL) return DEL; DEL = {};
    for (var k = 0; k < PAL.length; k++) {
      var w = PAL[k]; if (w.length < 3 || w.indexOf("'") >= 0) continue;
      for (var j = 0; j < w.length; j++) { var d = w.slice(0, j) + w.slice(j + 1); (DEL[d] = DEL[d] || []).push(k); }
    }
    return DEL;
  }
  function osa(a, b) {
    var m = a.length, n = b.length, d = [], x, y;
    if (Math.abs(m - n) > 2) return 9;
    for (x = 0; x <= m; x++) d[x] = [x];
    for (y = 0; y <= n; y++) d[0][y] = y;
    for (x = 1; x <= m; x++) for (y = 1; y <= n; y++) {
      var c = a[x - 1] === b[y - 1] ? 0 : 1;
      d[x][y] = Math.min(d[x - 1][y] + 1, d[x][y - 1] + 1, d[x - 1][y - 1] + c);
      if (x > 1 && y > 1 && a[x - 1] === b[y - 2] && a[x - 2] === b[y - 1]) d[x][y] = Math.min(d[x][y], d[x - 2][y - 2] + 1);
    }
    return d[m][n];
  }
  var BOOST = {}, boostDe = null;
  function atualizaBoost() {
    var palco = document.getElementById('palco') || document.body, chave = (window.S && S.i) + '|' + palco.textContent.length;
    if (boostDe === chave) return; boostDe = chave; BOOST = {};
    var partes = [], tw = document.createTreeWalker(palco, NodeFilter.SHOW_TEXT), no;
    while ((no = tw.nextNode())) if (!(no.parentElement && no.parentElement.closest('.wlt-caixa, textarea, script, style'))) partes.push(no.nodeValue);
    (partes.join(' ').toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || []).forEach(function (w) { if (w.length > 2 && RANK[w] != null) BOOST[w] = 1; });
    [window.TRAPS, window.ARMAS].forEach(function (l) { (l || []).forEach(function (x) { (String(x[2]).replace(/<[^>]+>/g, ' ').toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || []).forEach(function (w) { BOOST[w] = 2; }); }); });
  }
  function nota(w) { var r = RANK[w]; return (r == null ? 50000 : r) - (BOOST[w] ? 30000 * BOOST[w] : 0); }
  var SUSPEITA = {};
  function suspeita(w) {   /* "becouse" está na internet; se é rara e fica a 1 letra de uma palavra 30× mais usada, é erro */
    if (w in SUSPEITA) return SUSPEITA[w];
    var r = RANK[w], res = false;
    if (r != null && r > 2500 && w.length >= 4 && !BOOST[w]) {
      var idx = indice(), dels = [w];
      for (var k = 0; k < w.length; k++) dels.push(w.slice(0, k) + w.slice(k + 1));
      dels.forEach(function (d) { if (res) return; [RANK[d] != null ? RANK[d] : -1].concat((idx[d] || [])).forEach(function (n) { var c = typeof n === 'number' && n >= 0 ? PAL[n] : null; if (c && c !== w && RANK[c] * 30 < r && osa(w, c) <= 1) res = true; }); });
    }
    return (SUSPEITA[w] = res);
  }
  function conhecida(w) { return (RANK[w] != null && !suspeita(w)) || BOOST[w] || /^\d/.test(w); }
  var JUNTAS = { im: "i'm", dont: "don't", doesnt: "doesn't", didnt: "didn't", cant: "can't", wont: "won't", isnt: "isn't", arent: "aren't", wasnt: "wasn't",
    werent: "weren't", havent: "haven't", hasnt: "hasn't", couldnt: "couldn't", shouldnt: "shouldn't", wouldnt: "wouldn't", ive: "i've", youre: "you're",
    theyre: "they're", lets: "let's", thats: "that's", whats: "what's", theres: "there's" };
  function corrige(w) {
    if (JUNTAS[w]) return [JUNTAS[w]];
    var cand = {}, idx = indice(), dels = [w], k, j;
    for (k = 0; k < w.length; k++) dels.push(w.slice(0, k) + w.slice(k + 1));
    if (w.length > 4) dels.slice(1).forEach(function (d) { for (j = 0; j < d.length; j++) dels.push(d.slice(0, j) + d.slice(j + 1)); });
    dels.forEach(function (d) { if (RANK[d] != null) cand[d] = 1; (idx[d] || []).forEach(function (n) { cand[PAL[n]] = 1; }); });
    return Object.keys(cand).map(function (c) { return [c, osa(w, c)]; }).filter(function (x) { return x[1] <= 2; })
      .sort(function (a, b) { return a[1] - b[1] || nota(a[0]) - nota(b[0]); }).slice(0, 3).map(function (x) { return x[0]; });
  }
  function completa(p) {
    var out = Object.keys(BOOST).filter(function (w) { return w.indexOf(p) === 0 && w !== p; }).sort(function (x, y) { return nota(x) - nota(y); }).slice(0, 2);
    for (var k = 0; k < PAL.length && out.length < 4; k++) if (PAL[k].indexOf(p) === 0 && PAL[k] !== p && out.indexOf(PAL[k]) < 0) out.push(PAL[k]);
    return out.sort(function (x, y) { return nota(x) - nota(y); });
  }
  function proxima(antes) {
    var w = (antes.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || []), a = w[w.length - 1], b2 = w.slice(-2).join(' ');
    var out = [].concat((D.t && D.t[b2]) || [], (D.b && D.b[a]) || []);
    return out.filter(function (x, n) { return out.indexOf(x) === n; }).slice(0, 3);
  }

  /* ---------- os erros de brasileiro, com o porquê (E6): [padrão no fim do texto, a troca, por quê, em português] ---------- */
  var BASE_DE = { went: 'go', saw: 'see', ate: 'eat', came: 'come', had: 'have', made: 'make', took: 'take', got: 'get', gave: 'give', said: 'say', bought: 'buy', wrote: 'write' };
  var REGRAS = [
    [/\bi have (\d+) years( old)?$/i, function (m) { return 'I am ' + m[1]; }, 'Age uses BE in English: I am 20 (years old).', 'Idade em inglês usa o verbo BE (ser/estar), não HAVE: I am 20.'],
    [/\bpeople is$/i, 'people are', 'People is plural: people are.', 'People já é plural: people ARE.'],
    [/\bi'?\s?a?m agree$/i, 'I agree', 'Agree is a verb: I agree (no am).', 'Agree já é verbo: I agree, sem am.'],
    [/\b(can|must|should|will|might) to (\w+)$/i, function (m) { return m[1] + ' ' + m[2]; }, 'No to after can, must, should, will, might.', 'Depois de can, must, should, will e might, o verbo vem sem TO.'],
    [/\bmore (better|worse|bigger|smaller|easier|faster|older|younger)$/i, function (m) { return m[1]; }, 'Better already means “more good”: no more.', 'Better já é comparativo: não precisa de more.'],
    [/\bexplain me$/i, 'explain to me', 'Explain something TO someone.', 'Explicar algo PARA alguém: explain to me.'],
    [/\bdepends of$/i, 'depends on', 'In English: depend ON.', 'Em inglês é depend ON (não of).'],
    [/\bmarried with$/i, 'married to', 'In English: married TO someone.', 'Casado COM, em inglês, é married TO.'],
    [/\b(he|she|it) don'?t$/i, function (m) { return m[1] + " doesn't"; }, 'He, she, it: doesn’t.', 'Com he, she e it, a negativa é doesn’t.'],
    [/\bthere have$/i, 'there is', 'To say something exists: there is / there are.', 'Para dizer que algo existe (o “tem” do português): there is / there are.'],
    [/\bi have (fear|hunger|thirst|sleep)$/i, function (m) { return { fear: "I'm scared", hunger: "I'm hungry", thirst: "I'm thirsty", sleep: "I'm sleepy" }[m[1].toLowerCase()]; }, 'Feelings use BE: I’m hungry, I’m scared.', 'Fome, sede, medo e sono usam BE: I’m hungry.'],
    [/\bhow do you call$/i, 'what do you call', 'In English: WHAT do you call…?', 'Em inglês: WHAT do you call…? (não how).'],
    [/\bat the night$/i, 'at night', 'At night (no the).', 'À noite é at night, sem the.'],
    [/\bin the weekend$/i, 'on the weekend', 'On the weekend.', 'No fim de semana é ON the weekend.'],
    [/\bdid (\w+) (went|saw|ate|came|had|made|took|got|gave|said|bought|wrote)$/i, function (m) { return 'did ' + m[1] + ' ' + BASE_DE[m[2].toLowerCase()]; }, 'After did: the base verb (did you go?).', 'Depois de did, o verbo volta para a forma base: did you go?'],
    [/\bi am (\d+) years$/i, function (m) { return 'I am ' + m[1] + ' years old'; }, 'Say “years old”, or just the number.', 'Diga “years old” no fim, ou só o número: I am 20.'],
    [/\bsince (\d+) years$/i, function (m) { return 'for ' + m[1] + ' years'; }, 'A length of time uses FOR: for 3 years.', 'Uma duração usa FOR: for 3 years. Since é para o ponto de início.'],
    [/\bmake a question$/i, 'ask a question', 'We ASK a question.', 'Fazer uma pergunta é ASK a question.'],
    [/\bdiscuss about$/i, 'discuss', 'Discuss something (no about).', 'Discuss já inclui o “sobre”: discuss the plan.'],
    [/\bi didn'?t (went|saw|ate|came|had|made|took|got|gave|said|bought|wrote)$/i, function (m) { return "I didn't " + BASE_DE[m[1].toLowerCase()]; }, 'After didn’t: the base verb.', 'Depois de didn’t, o verbo fica na forma base: I didn’t go.']
  ];
  function regra(antes) {
    for (var k = 0; k < REGRAS.length; k++) {
      var m = antes.match(REGRAS[k][0]); if (!m) continue;
      var novo = typeof REGRAS[k][1] === 'function' ? REGRAS[k][1](m) : REGRAS[k][1];
      return { de: m.index, ate: antes.length, txt: novo, rot: '✓ ' + novo, por: REGRAS[k][2], pt: REGRAS[k][3], errado: m[0] };
    }
    return null;
  }
  function caixa(w, molde, inicio) {
    if (w === 'i' || /^i'/.test(w)) return 'I' + w.slice(1);
    if (inicio || (molde && /^[A-Z]/.test(molde))) return w.charAt(0).toUpperCase() + w.slice(1);
    return w;
  }

  /* ---------- a família da palavra (E1) ---------- */
  function regulares(b) {
    var cvc = /^[^aeiou]*[aeiou][^aeiouwxy]$/.test(b), terc = /(s|sh|ch|x|z|o)$/.test(b) ? b + 'es' : /[^aeiou]y$/.test(b) ? b.slice(0, -1) + 'ies' : b + 's';
    var pass = /e$/.test(b) ? b + 'd' : /[^aeiou]y$/.test(b) ? b.slice(0, -1) + 'ied' : cvc ? b + b.slice(-1) + 'ed' : b + 'ed';
    var ing = /ie$/.test(b) ? b.slice(0, -2) + 'ying' : /[^aeiou]e$/.test(b) && b !== 'be' ? b.slice(0, -1) + 'ing' : cvc ? b + b.slice(-1) + 'ing' : b + 'ing';
    return [terc, pass, pass, ing].join('|');
  }
  function baseDe(w) {
    w = w.toLowerCase();
    if (F.irr[w] || F.pv[w]) return w;
    if (FORMA[w]) return FORMA[w];
    var tenta = [w.replace(/ies$/, 'y'), w.replace(/es$/, ''), w.replace(/s$/, ''), w.replace(/ied$/, 'y'), w.replace(/ed$/, ''), w.replace(/d$/, ''), w.replace(/(.)\1ed$/, '$1'),
      w.replace(/ying$/, 'ie'), w.replace(/ing$/, ''), w.replace(/ing$/, 'e'), w.replace(/(.)\1ing$/, '$1')];
    for (var k = 0; k < tenta.length; k++) { var b = tenta[k]; if (b !== w && (F.irr[b] || F.pv[b])) return b; }
    for (k = 0; k < tenta.length; k++) { b = tenta[k]; if (b !== w && b.length > 2 && RANK[b] != null && RANK[b] < 8000) return b; }
    return w;
  }
  function ehVerbo(b) { return !!(F.irr[b] || F.pv[b] || (RANK[b] != null && (RANK[regulares(b).split('|')[1]] != null) && RANK[regulares(b).split('|')[3]] != null)); }
  function parentes(w) {   /* para o que não é verbo: as palavras da mesma raiz (amazing → amazed, amazingly, amazement) */
    var raiz = w.replace(/(ingly|edly|ness|ment|tion|sion|able|ible|ful|less|ing|ed|ly|er|est|s|e|y)$/, '');
    if (raiz.length < 4) raiz = w.slice(0, Math.max(4, w.length - 2));
    var SUF = /^(e|ed|es|s|ing|ingly|edly|ly|ment|ments|ness|tion|tions|sion|er|ers|est|ful|fully|less|able|ably|ible|y|ies|ied|ity|ive|ively|ous|ously|ance|ence|al|ally|ist|ism)$/;
    var out = [];
    for (var k = 0; k < PAL.length && out.length < 8 && k < 15000; k++) { var p = PAL[k]; if (p !== w && p.indexOf(raiz) === 0 && SUF.test(p.slice(raiz.length))) out.push(p); }
    return out;
  }

  /* ---------- as sugestões ---------- */
  function palavraNoCursor(ta) {
    var pos = ta.selectionStart, v = ta.value, a = v.slice(0, pos).match(/[A-Za-z']+$/), d = v.slice(pos).match(/^[A-Za-z']*/);
    if (a) return { w: a[0] + d[0], de: pos - a[0].length, ate: pos + d[0].length };
    var p = v.slice(0, pos).match(/([A-Za-z']+)\s+$/);
    return p ? { w: p[1], de: pos - p[0].length, ate: pos - p[0].length + p[1].length } : null;
  }
  function sugestoes(ta) {
    atualizaBoost();
    var pos = ta.selectionStart, antes = ta.value.slice(0, pos), out = [];
    var inicio = /(^|[.!?]\s+)[A-Za-z']*$/.test(antes);
    var aparado = antes.replace(/\s+$/, ''), r = regra(aparado);
    if (r) out.push({ tipo: 'regra', de: r.de, ate: aparado.length, txt: r.txt, rot: r.rot, por: r.por, pt: r.pt, errado: r.errado });
    var m = antes.match(/[A-Za-z']+$/);
    if (m) {
      var p = m[0], pl = p.toLowerCase(), de = pos - p.length;
      var lista = pl.length > 1 ? completa(pl) : [];   /* completar vem antes: "beautif" é o começo de beautiful, não um erro */
      var corr = pl.length >= 3 && !conhecida(pl) && !lista.length ? corrige(pl).filter(function (c) { return c !== pl; }) : [];
      out.push({ tipo: 'literal', de: de, ate: pos, txt: p, rot: '“' + p + '”' });
      corr.forEach(function (w) { out.push({ tipo: 'fix', de: de, ate: pos, txt: caixa(w, p, inicio), rot: caixa(w, p, inicio) }); });
      lista.forEach(function (w) { out.push({ tipo: 'comp', de: de, ate: pos, txt: caixa(w, p, inicio), rot: caixa(w, p, inicio) }); });
    } else {
      var ult = antes.match(/([A-Za-z']+)\s+$/);
      if (ult && ((!conhecida(ult[1].toLowerCase()) && !/^[A-Z]/.test(ult[1])) || JUNTAS[ult[1].toLowerCase()])) {
        var w0 = ult[1], d0 = antes.length - ult[0].length, inicio0 = /(^|[.!?]\s+)$/.test(antes.slice(0, d0));
        corrige(w0.toLowerCase()).filter(function (c) { return c !== w0.toLowerCase(); }).forEach(function (w) { out.push({ tipo: 'fix', de: d0, ate: d0 + w0.length, txt: caixa(w, w0, inicio0), rot: caixa(w, w0, inicio0) }); });
      }
      if (/[.!?]\s*$/.test(antes)) {   /* E5 · continue a história: um conector do nível e o alvo da aula */
        var nfr = (antes.match(/[.!?]/g) || []).length, cs = X.conecta[NIVEL] || X.conecta.A2 || [], al = alvoDaAula(nfr);
        if (cs.length) out.push({ tipo: 'prox', de: pos, ate: pos, txt: cs[nfr % cs.length] + ' ', rot: cs[nfr % cs.length] + ' …' });
        if (al) out.push({ tipo: 'alvo', de: pos, ate: pos, txt: al.charAt(0).toUpperCase() + al.slice(1) + ' ', rot: '★ ' + al.charAt(0).toUpperCase() + al.slice(1) + ' …' });
        if (cs.length > 1) out.push({ tipo: 'prox', de: pos, ate: pos, txt: cs[(nfr + 1) % cs.length] + ' ', rot: cs[(nfr + 1) % cs.length] + ' …' });
      }
      else if (out.length < 3 && antes.trim()) proxima(antes).forEach(function (w) { out.push({ tipo: 'prox', de: pos, ate: pos, txt: caixa(w, '', inicio) + ' ', rot: caixa(w, '', inicio) }); });
    }
    var vistos = {}; out = out.filter(function (x) { var k = x.rot.toLowerCase(); if (vistos[k]) return false; vistos[k] = 1; return true; });
    var melhor = out.filter(function (x) { return x.tipo === 'regra'; })[0] || out.filter(function (x) { return x.tipo === 'fix'; })[0] || out.filter(function (x) { return x.tipo === 'alvo'; })[0] || out.filter(function (x) { return x.tipo === 'comp' || x.tipo === 'prox'; })[0];
    var resto = out.filter(function (x) { return x !== melhor; }).slice(0, 2);
    var fim = melhor ? [resto[0], melhor, resto[1]].filter(Boolean) : resto;
    fim.melhor = melhor; return fim;
  }

  /* ---------- o cartão da palavra (⋯) ---------- */
  var aberto = false, emPt = false;
  function cartao(ta, lista) {
    var r = lista.filter(function (x) { return x.tipo === 'regra'; })[0], html = '';
    if (r) html += '<div class="wlt-por"><small>WHY?</small><p>' + h(emPt ? r.pt : r.por) + '</p><p class="wlt-tr"><s>' + h(r.errado) + '</s> → <b>' + h(r.txt) + '</b></p>'
      + '<button type="button" class="wlt-pt" data-wl-local="1" data-wlt="pt">' + (emPt ? 'In English' : 'Em português') + '</button></div>';
    var pc = palavraNoCursor(ta); if (!pc) return html || '<p class="wlt-nada">Write a word, then tap ⋯ to explore it.</p>';
    var b = baseDe(pc.w), corte = html.length, lw0 = pc.w.toLowerCase(), temNivel = !!(X.nivel[lw0] || NIV_DE[lw0]);
    if (ehVerbo(b)) {
      var f = (F.irr[b] || regulares(b)).split('|'), rot = ['now', 'past', 'done', '-ing'];
      html += '<div class="wlt-fam"><small>THE FAMILY OF “' + h(b.toUpperCase()) + '”</small><div class="wlt-formas">'
        + '<button type="button" class="wlt-f" data-wl-local="1" data-wlt="f" data-x="' + h(b) + '"><i>base</i>' + h(b) + '</button>'
        + f.map(function (x, k) { return x && x !== '—' ? x.split(' / ').map(function (y) { return '<button type="button" class="wlt-f" data-wl-local="1" data-wlt="f" data-x="' + h(y) + '"><i>' + rot[k] + '</i>' + h(y) + '</button>'; }).join('') : ''; }).join('') + '</div>';
      var pv = F.pv[b] || [];
      if (pv.length) html += '<small>PHRASAL VERBS</small><div class="wlt-pv">' + pv.map(function (x) {
        var usa = x[0].split(' / ')[0];
        return '<button type="button" class="wlt-p" data-wl-local="1" data-wlt="f" data-x="' + h(usa.replace(/\s*\(.*\)/, '')) + '"><b>' + h(x[0]) + '</b><span>' + h(x[1]) + '</span><i>' + h(x[2]) + '</i></button>';
      }).join('') + '</div>';
      html += '</div>';
    } else {
      var par = temNivel ? [] : parentes(pc.w.toLowerCase());
      if (par.length) html += '<div class="wlt-fam"><small>WORDS LIKE “' + h(pc.w.toUpperCase()) + '”</small><div class="wlt-formas">' + par.map(function (y) { return '<button type="button" class="wlt-f" data-wl-local="1" data-wlt="f" data-x="' + h(y) + '">' + h(y) + '</button>'; }).join('') + '</div></div>';
    }
    var lw = lw0, esc = X.nivel[lw] ? lw : NIV_DE[lw], fam = html.slice(corte); html = html.slice(0, corte);
    if (esc) {   /* E3 · suba de nível */
      var rotN = ['A1', 'A2', 'B1', 'B2–C1'];
      html += '<div class="wlt-fam"><small>LEVEL UP “' + h(pc.w.toUpperCase()) + '”</small><div class="wlt-niv">' + X.nivel[esc].map(function (y, k) {
        return '<button type="button" class="wlt-n' + (y === lw ? ' on' : '') + '" data-wl-local="1" data-wlt="f" data-x="' + h(y) + '"><i>' + rotN[k] + '</i>' + h(y) + '</button>'; }).join('') + '</div></div>';
    }
    var jb = X.junto[lw] ? lw : X.junto[b] ? b : null;
    if (jb) {   /* E4 · as combinações */
      var J = X.junto[jb];
      html += '<div class="wlt-fam"><small>WHAT GOES WITH “' + h(jb.toUpperCase()) + '”?</small><div class="wlt-formas">' + J.sim.map(function (y) {
        return '<button type="button" class="wlt-f" data-wl-local="1" data-wlt="ins" data-x="' + h(y) + '">' + h(y) + '</button>'; }).join('') + '</div>'
        + (J.nao.length ? '<small>NOT LIKE THIS</small><div class="wlt-nao">' + J.nao.map(function (y) { return '<span><s>' + h(y[0]) + '</s> → <b>' + h(y[1]) + '</b></span>'; }).join('') + '</div>' : '') + '</div>';
    }
    html += fam;
    var mp = mapa(ta);
    if (!html && !mp) html = '<p class="wlt-nada">No family for “' + h(pc.w) + '” yet.</p>';
    return html + mp;
  }
  /* E7 · o mapa das palavras: as palavras do texto por nível (pela frequência), sem placar; ★ na que o aluno usa pela primeira vez */
  function faixa(w) { var r = RANK[w]; if (r == null) return null; return r < 1200 ? 'A' : r < 3500 ? 'B1' : r < 8000 ? 'B2' : 'C1'; }
  var VISTAS = {}; try { VISTAS = JSON.parse(localStorage.getItem('wl-palavras') || '{}'); } catch (e) { VISTAS = {}; }   /* as palavras de antes desta página */
  function mapa(ta) {
    var vistas = VISTAS, guarda = {};
    try { guarda = JSON.parse(localStorage.getItem('wl-palavras') || '{}'); } catch (e) { guarda = {}; }
    var ws = ta.value.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || []; if (ws.length < 8) return '';
    var g = { A: [], B1: [], B2: [], C1: [] }, uniq = {}, novas = 0;
    ws.forEach(function (w) { if (uniq[w] || w.length < 3) return; uniq[w] = 1; var f = faixa(w); if (f) g[f].push(w); });
    var linhas = ['B1', 'B2', 'C1'].filter(function (k) { return g[k].length; }).map(function (k) {
      return '<div class="wlt-map"><b>' + k + '</b>' + g[k].map(function (w) { var n = !vistas[w]; if (n) novas++; return '<span' + (n ? ' class="nova"' : '') + '>' + (n ? '★ ' : '') + h(w) + '</span>'; }).join('') + '</div>';
    }).join('');
    try { ['B1', 'B2', 'C1'].forEach(function (k) { g[k].forEach(function (w) { guarda[w] = 1; }); }); localStorage.setItem('wl-palavras', JSON.stringify(guarda)); } catch (e) { /* sem memória no aparelho */ }
    return '<div class="wlt-fam"><small>YOUR WORDS</small><p class="wlt-nada">' + g.A.length + ' everyday words' + (linhas ? '' : ' · try a B1 word!') + '</p>' + linhas + (novas ? '<p class="wlt-nada">★ new for you</p>' : '') + '</div>';
  }

  /* ---------- E8 · fale e escreva (o reconhecimento de voz do próprio navegador) ---------- */
  var REC = window.SpeechRecognition || window.webkitSpeechRecognition, ouvindo = null;
  var MIC = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-2.1A7 7 0 0 0 19 12h-2z"/></svg>';
  function fala(ta) {
    if (ouvindo) { try { ouvindo.stop(); } catch (e) { /* segue */ } return; }
    var r = new REC(); r.lang = 'en-US'; r.interimResults = false; r.maxAlternatives = 1; ouvindo = r;
    r.onresult = function (ev) {
      var t = ev.results[0][0].transcript.trim(); if (!t) return;
      var antes = ta.value.slice(0, ta.selectionStart);
      if (!antes.trim() || /[.!?]\s*$/.test(antes)) t = t.charAt(0).toUpperCase() + t.slice(1);
      troca(ta, ta.selectionStart, ta.selectionEnd, t.replace(/\bi\b/g, 'I'), 'prox');
    };
    r.onend = function () { ouvindo = null; if (document.activeElement === ta) pinta(ta); };
    r.onerror = r.onend;
    try { r.start(); } catch (e) { ouvindo = null; }
    pinta(ta);
  }

  /* ---------- a barra ---------- */
  function barraDe(ta) {
    /* num app React (o Writing Lab da plataforma), a barra mora num lugar reservado logo depois do campo */
    var lugar = ta.nextElementSibling && ta.nextElementSibling.hasAttribute('data-teclado-barra') ? ta.nextElementSibling : null;
    if (lugar) {
      var bl = lugar.querySelector('.wlt-caixa');
      if (!bl) { bl = document.createElement('div'); bl.className = 'wlt-caixa'; bl.innerHTML = '<div class="wlt" role="toolbar" aria-label="Word suggestions"></div><div class="wlt-cartao" hidden></div>'; lugar.appendChild(bl); }
      return bl;
    }
    var pap = ta.closest('[data-papel]') || ta, b = pap.nextElementSibling;
    if (b && b.classList.contains('wlt-caixa')) return b;
    b = document.createElement('div'); b.className = 'wlt-caixa';
    b.innerHTML = '<div class="wlt" role="toolbar" aria-label="Word suggestions"></div><div class="wlt-cartao" hidden></div>';
    pap.parentNode.insertBefore(b, pap.nextSibling); return b;
  }
  var atual = null;
  function pinta(ta) {
    var cx = barraDe(ta), bar = cx.querySelector('.wlt'), card = cx.querySelector('.wlt-cartao'), lista = sugestoes(ta);
    atual = { ta: ta, lista: lista };
    var temPalavra = !!palavraNoCursor(ta) || lista.some(function (x) { return x.tipo === 'regra'; });
    bar.innerHTML = lista.map(function (x, k) {
      var meio = x === lista.melhor;
      return '<button type="button" class="wlt-s ' + x.tipo + (meio ? ' melhor' : '') + '" data-wl-local="1" data-wlt="' + k + '">' + h(x.rot) + '</button>';
    }).join('') + (REC ? '<button type="button" class="wlt-s wlt-mic' + (ouvindo ? ' on' : '') + '" data-wl-local="1" data-wlt="mic" aria-label="' + (ouvindo ? 'Stop listening' : 'Speak, then fix it') + '">' + (ouvindo ? '● listening' : MIC) + '</button>' : '') + (temPalavra ? '<button type="button" class="wlt-s wlt-mais' + (aberto ? ' on' : '') + '" data-wl-local="1" data-wlt="mais" aria-label="Explore this word" aria-expanded="' + aberto + '">⋯</button>' : '');
    cx.hidden = !lista.length && !temPalavra && !REC;
    card.hidden = !aberto;
    if (aberto) card.innerHTML = cartao(ta, lista);
  }
  function troca(ta, de, ate, txt, tipo) {
    var v = ta.value, antes = v.slice(0, de), depois = v.slice(ate), espaco = /^\s/.test(depois);
    if (tipo === 'alvo') tipo = 'prox';
    if (tipo === 'prox') { if (antes && !/\s$/.test(antes)) txt = ' ' + txt; }
    else if (!espaco) txt += ' ';
    /* o setter nativo: assim um campo do React (o Writing Lab da plataforma) também percebe a troca */
    var setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
    if (setter && setter.set) setter.set.call(ta, antes + txt + depois); else ta.value = antes + txt + depois;
    var c = de + txt.length + (tipo !== 'prox' && espaco ? 1 : 0); ta.setSelectionRange(c, c); ta.focus();
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  }
  function alvo(t) { return t && t.matches && t.matches('[data-papel] textarea, textarea[data-teclado]'); }
  ['input', 'keyup', 'click', 'focusin'].forEach(function (ev) {
    document.addEventListener(ev, function (e) { if (alvo(e.target)) { var ta = e.target; setTimeout(function () { if (document.activeElement === ta) pinta(ta); }, 0); } });
  });
  document.addEventListener('focusout', function (e) {
    if (!alvo(e.target)) return; var ta = e.target;
    setTimeout(function () { var a = document.activeElement; if (a !== ta && !(a && a.closest && a.closest('.wlt-caixa'))) { aberto = false; barraDe(ta).hidden = true; } }, 180);
  });
  document.addEventListener('mousedown', function (e) { if (e.target.closest && e.target.closest('.wlt-caixa button')) e.preventDefault(); });
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.wlt-caixa [data-wlt]'); if (!b || !atual) return;
    var a = b.getAttribute('data-wlt'), ta = atual.ta;
    if (a === 'mais') { aberto = !aberto; ta.focus(); pinta(ta); return; }
    if (a === 'pt') { emPt = !emPt; ta.focus(); pinta(ta); return; }
    if (a === 'mic') { ta.focus(); fala(ta); return; }
    if (a === 'ins') { var pi = palavraNoCursor(ta); if (pi) troca(ta, pi.ate, pi.ate, ' ' + b.getAttribute('data-x'), 'f'); return; }
    if (a === 'f') { var pc = palavraNoCursor(ta); if (pc) { var x = b.getAttribute('data-x'); troca(ta, pc.de, pc.ate, caixa(x, ta.value.slice(pc.de, pc.de + 1), false), 'f'); } return; }
    var s = atual.lista[+a]; if (s) troca(ta, s.de, s.ate, s.txt, s.tipo);
  });
  window.WolfTeclado = { sugestoes: function (ta) { return sugestoes(ta).map(function (x) { return x.tipo + ':' + x.rot; }); }, corrige: corrige, baseDe: baseDe };

  /* ---------- a cara: a lavanda da plataforma sobre a noite (pedido do Carlos) ---------- */
  var css = document.createElement('style');
  css.textContent = ''
    + '.wlt-caixa{--wl-lav:#c9b8ff;--wl-lav2:#a58bff;--wl-lav3:#7c5cff;--wl-noite:#1e1838;margin:8px 0 0;font-family:Manrope,var(--ui,system-ui),sans-serif}.wlt-caixa[hidden]{display:none}'
    + '.wlt{display:flex;align-items:stretch;padding:5px;border-radius:16px;background:linear-gradient(180deg,rgba(124,92,255,.24),rgba(124,92,255,.12)),rgba(23,18,43,.92);border:1px solid rgba(201,184,255,.3);box-shadow:0 10px 24px rgba(0,0,0,.25)}'
    + '.wlt-s{flex:1 1 0;min-width:0;min-height:44px;padding:4px 8px;border:0;border-radius:11px;background:transparent;color:#cfc6ea;font:600 16px/1.2 Manrope,var(--ui,system-ui),sans-serif;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;transition:background .15s}'
    + '.wlt-s+.wlt-s{box-shadow:-1px 0 0 rgba(201,184,255,.22)}.wlt-s:hover{background:rgba(201,184,255,.1)}'
    + '.wlt-s.melhor{color:#fff;font-weight:800;background:rgba(201,184,255,.16)}'
    + '.wlt-s.fix.melhor,.wlt-s.fix{color:#1b1530;background:var(--wl-lav);font-weight:800}.wlt-s.fix:not(.melhor){background:rgba(201,184,255,.25);color:#fff}'
    + '.wlt-s.regra{color:#1b1530;background:#f6d34a;font-weight:800}'
    + '.wlt-s.literal{color:#8f86ad;font-weight:500}'
    + '.wlt-mais{flex:0 0 48px;color:var(--wl-lav);font-weight:900;font-size:20px}.wlt-mais.on{background:var(--wl-lav3);color:#fff}'
    + '.wlt-cartao{margin-top:8px;padding:14px 16px;border-radius:18px;background:rgba(30,24,56,.97);border:1.5px solid rgba(201,184,255,.3);box-shadow:0 22px 46px rgba(0,0,0,.45);display:grid;gap:12px;color:#f5f1fb}'
    + '.wlt-cartao[hidden]{display:none}.wlt-cartao small{font:800 11px Manrope,sans-serif;letter-spacing:.14em;color:var(--wl-lav)}'
    + '.wlt-formas{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 10px}'
    + '.wlt-f{display:inline-flex;align-items:baseline;gap:6px;padding:7px 12px;border-radius:999px;border:1px solid rgba(201,184,255,.3);background:rgba(201,184,255,.1);color:#f5f1fb;font:700 15px Manrope,sans-serif;cursor:pointer}'
    + '.wlt-f i{font-style:normal;font:800 10.5px Manrope,sans-serif;letter-spacing:.06em;color:var(--wl-lav);text-transform:uppercase}.wlt-f:hover{background:rgba(201,184,255,.22)}'
    + '.wlt-pv{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:6px;margin-top:8px}'
    + '.wlt-p{display:grid;gap:2px;text-align:left;padding:9px 11px;border-radius:12px;border:1px solid rgba(245,241,251,.1);background:rgba(255,255,255,.04);color:#bdb3d6;font:600 13px Manrope,sans-serif;cursor:pointer}'
    + '.wlt-p b{font:800 15px Manrope,sans-serif;color:#fff}.wlt-p i{font-style:normal;color:#8f86ad;font-size:12.5px}.wlt-p:hover{border-color:var(--wl-lav)}'
    + '.wlt-por{padding:12px 14px;border-radius:14px;border:1.5px solid #f6d34a;background:rgba(246,211,74,.06)}.wlt-por small{color:#f6d34a}'
    + '.wlt-por p{margin:4px 0;font:600 15px/1.45 Manrope,sans-serif;color:#ddd5f0}.wlt-tr s{color:#ff8fa3}.wlt-tr b{color:#7ee0a1}'
    + '.wlt-pt{margin-top:4px;padding:5px 12px;border-radius:999px;border:1px solid rgba(246,211,74,.5);background:transparent;color:#f6d34a;font:700 12.5px Manrope,sans-serif;cursor:pointer}'
    + '.wlt-nada{margin:0;color:#8f86ad;font:600 14px Manrope,sans-serif}'
    + '.wlt-niv{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin:8px 0 4px}'
    + '.wlt-n{display:grid;gap:2px;justify-items:center;min-height:44px;padding:8px 4px;border-radius:12px;border:1px solid rgba(245,241,251,.1);background:rgba(255,255,255,.04);color:#f5f1fb;font:800 15px Manrope,sans-serif;cursor:pointer}'
    + '.wlt-n i{font-style:normal;font:800 10.5px Manrope,sans-serif;letter-spacing:.08em;color:#8f86ad}.wlt-n.on{border-color:var(--wl-lav);background:rgba(201,184,255,.16)}.wlt-n:hover{border-color:var(--wl-lav)}'
    + '.wlt-nao{display:flex;gap:6px 14px;flex-wrap:wrap;margin-top:6px;font:600 14px Manrope,sans-serif;color:#bdb3d6}.wlt-nao s{color:#ff8fa3}.wlt-nao b{color:#7ee0a1}'
    + '.wlt-map{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:6px}.wlt-map b{font:800 11px Manrope,sans-serif;color:#8f86ad;width:28px}'
    + '.wlt-map span{padding:3px 10px;border-radius:999px;background:rgba(255,255,255,.06);font:700 13.5px Manrope,sans-serif}.wlt-map span.nova{background:rgba(246,211,74,.16);color:#f6d34a}'
    + '.wlt-s.alvo{color:#1b1530;background:rgba(246,211,74,.85);font-weight:800}'
    + '.wlt-mic{flex:0 0 48px;display:grid;place-items:center;color:var(--wl-lav)}.wlt-mic.on{flex:0 0 118px;background:#e2536a;color:#fff;font:800 13px Manrope,sans-serif}'
    + '@media (max-width:560px){.wlt-s{font-size:15px;padding:4px 4px}.wlt-pv{grid-template-columns:1fr}.wlt-niv{grid-template-columns:1fr 1fr}.wlt-mic{flex-basis:42px}.wlt-mais{flex-basis:42px}}';
  document.head.appendChild(css);
  if (primeiro && document.activeElement === primeiro) pinta(primeiro);
  }
})();
