/* ============================================================
   WOLF · O CORRETOR DA ESCRITA (níveis 1 e 2)         05/10/2026
   Aprovado pelo Carlos no catálogo da semana Live Class.
   Nível 1 · a regra da aula: cada aula define WolfCorretor.regras
     (uma função que recebe a frase e devolve os trechos errados com a
     dica). Sublinha em vermelho ondulado e mostra a dica embaixo, SEM
     corrigir pelo aluno. Roda no aparelho: sem internet, sem custo.
   Nível 2 · ortografia: o próprio navegador (spellcheck + lang="en"
     no campo).
   Nível 3 (IA, "Polish my sentence") fica para depois, com o AI Studio.

   Como usar na aula:
     WolfCorretor.regras = function (frase, minusc) { return [ {i, f, msg} ] };
     html  = WolfCorretor.papel('campo', valor, 'placeholder', 'rótulo');
     depois de pintar a cena: WolfCorretor.liga(document);
   O campo é um <textarea data-campo>: o fio da sala leva o texto ao
   outro lado e dispara 'input', então os dois lados veem o mesmo
   sublinhado e a mesma dica.
   ============================================================ */
window.WolfCorretor = (function () {
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  /* as frases do texto, com a posição de cada uma (a dica aponta o trecho certo) */
  function frases(txt) {
    var out = [], re = /[^.!?\n]+[.!?]*/g, m;
    while ((m = re.exec(txt))) out.push({ ini: m.index, s: m[0] });
    return out;
  }
  function confere(txt) {
    var achados = [];
    if (!api.regras) return achados;
    frases(txt).forEach(function (fr) {
      var minusc = fr.s.toLowerCase().replace(/[’‘]/g, "'");
      (api.regras(fr.s, minusc) || []).forEach(function (a) { achados.push({ i: fr.ini + a.i, f: fr.ini + a.f, msg: a.msg }); });
    });
    achados.sort(function (a, b) { return a.i - b.i; });
    /* sem sobreposição: fica o primeiro */
    var limpo = [], fim = -1;
    achados.forEach(function (a) { if (a.i >= fim) { limpo.push(a); fim = a.f; } });
    return limpo;
  }
  /* ajuda das regras: acha um padrão e devolve o trecho do grupo g */
  function acha(re, minusc, g, msg, filtro) {
    var out = [], m; re.lastIndex = 0;
    while ((m = re.exec(minusc))) {
      if (filtro && !filtro(m)) continue;
      var pedaco = g ? m[g] : m[0], i = m.index + (g ? m[0].indexOf(pedaco) : 0);
      out.push({ i: i, f: i + pedaco.length, msg: msg });
      if (!re.global) break;
    }
    return out;
  }
  /* min: altura mínima do campo (o papel pautado usa 150; o chat usa uma linha) */
  function papel(campo, valor, ph, rotulo, min, classe) {
    return '<div class="papel' + (classe ? ' ' + classe : '') + '" data-papel' + (min ? ' data-min="' + min + '"' : '') + '><div class="espelho" aria-hidden="true"></div>'
      + '<textarea data-campo="' + campo + '" spellcheck="true" lang="en" autocapitalize="sentences" autocomplete="off" rows="3" placeholder="' + esc(ph || '') + '" aria-label="' + esc(rotulo || 'Your text') + '">' + esc(valor || '') + '</textarea></div>'
      + '<div class="corretor" aria-live="polite"></div>';
  }
  function atualiza(ta) {
    var caixa = ta.closest('[data-papel]'); if (!caixa) return;
    var esp = caixa.querySelector('.espelho'), dica = caixa.nextElementSibling;
    var txt = ta.value, achados = confere(txt), html = '', p = 0;
    achados.forEach(function (a) { html += esc(txt.slice(p, a.i)) + '<mark>' + esc(txt.slice(a.i, a.f)) + '</mark>'; p = a.f; });
    esp.innerHTML = html + esc(txt.slice(p)) + '\n ';
    if (caixa.getAttribute('data-min')) ta.rows = 1;
    ta.style.height = 'auto'; ta.style.height = Math.max(ta.scrollHeight, +(caixa.getAttribute('data-min') || 150)) + 'px';
    if (!dica || !dica.classList.contains('corretor')) return;
    if (achados.length) {
      var a = achados[0];
      dica.className = 'corretor tem';
      dica.innerHTML = '<b>Help</b><span><i>' + esc(txt.slice(a.i, a.f)) + '</i> · ' + a.msg + (achados.length > 1 ? ' <em>(' + (achados.length - 1) + ' more)</em>' : '') + '</span>';
    } else if (txt.trim().length > 8) {
      dica.className = 'corretor bom';
      dica.innerHTML = '<b>Looks good</b><span>Now read it out loud.</span>';
    } else {
      dica.className = 'corretor';
      dica.innerHTML = '<b>Tip</b><span>A wavy red line is a grammar slip from today’s lesson. Spelling is checked by your browser.</span>';
    }
  }
  function liga(raiz) { [].forEach.call((raiz || document).querySelectorAll('[data-papel] textarea'), atualiza); }
  document.addEventListener('input', function (ev) { var t = ev.target; if (t && t.matches && t.matches('[data-papel] textarea')) atualiza(t); });
  var api = { regras: null, papel: papel, liga: liga, atualiza: atualiza, confere: confere, acha: acha };
  return api;
})();
