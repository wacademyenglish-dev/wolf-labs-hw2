/* ============================================================
   KIT LIVE CLASS · A ABERTURA                          08/10/2026
   Catálogo de variedade (08/10, aprovado): 262 aulas abriam com as mesmas
   cartas de pergunta pessoal. Com window.WL_ABERTURA (arquivo da aula
   abertura-dados.js), a cena "voce" vira um dos oito modos:
     mala (A1) · linha (A2) · termometro (A3) · objeto (A4)
     nunca (A5) · tres (A6) · mural (A7) · foto (A8)
   Sem o arquivo de dados, a aula abre como antes. Liga-se ao motor por
   window.WL_PECAS; estado em S.__ab; toques "wla-…"; o avanço "wla-prox"
   (o ‹ Previous funciona). Usa mostra() e fala() do motor (Show answer e
   SAY IT WITH), iguais nos dois lados da sala. Sem cronômetro: no "tres"
   é o professor quem esconde a imagem.
   ============================================================ */
(function () {
  function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function st() { if (!S.__ab) S.__ab = { sel: [], esc: null, zoom: 0, i: 0, viu: {}, esconde: 0, vista: 0 }; return S.__ab; }
  function im(k) { return /[\/.]/.test(k) ? k : img(k); }
  function apoio(d, chave) {   /* o apoio de sempre: frases para começar + Show answer com um exemplo */
    return (d.starter ? fala('ab' + chave, [].concat(d.starter), d.palavras || []) : '') + (d.ex ? mostra('ab' + chave, d.ex, 1) : '');
  }
  function fup(q, chave, starter, ex) { return '<div class="follow"><small>FOLLOW-UP</small><p class="q">' + q + '</p>' + (starter ? fala('abf' + chave, [].concat(starter), []) : '') + (ex ? mostra('abf' + chave, ex, 1) : '') + '</div>'; }

  var M = {};
  /* A1 · A MALA: escolher N coisas para levar e dizer por quê */
  M.mala = function (d) {
    var e = st(), max = d.max || 2, cheia = e.sel.length >= max;
    return '<div class="wla-mala"><div class="wla-itens">' + d.itens.map(function (x, k) { var on = e.sel.indexOf(k) >= 0; return '<button type="button" class="wla-item' + (on ? ' on' : '') + '" data-a="wla-sel" data-n="' + k + '"><span class="wla-e" aria-hidden="true">' + x[0] + '</span><b>' + h(x[1]) + '</b></button>'; }).join('') + '</div>'
      + '<div class="wla-lado"><p class="wla-conta">' + e.sel.length + ' / ' + max + ' in the bag</p>'
      + (cheia ? '<div class="pergunta vd ja"><small>WHY THESE?</small><h2>' + d.q + '</h2></div>' + apoio(d, 'm') + (d.fup ? fup(d.fup, 'm', d.fst, d.fex) : '') : '<p class="dica-aluno">Tap ' + max + ' things.</p><p class="wla-dica so-prof">The student chooses ' + max + '.</p>') + '</div></div>';
  };
  /* A2 · LINHA DA VIDA: momentos numa linha; tocar abre a pergunta daquele momento */
  M.linha = function (d) {
    var e = st(), sel = e.esc, x = sel != null ? d.marcos[sel] : null;
    return '<div class="wla-linha"><div class="wla-eixo">' + d.marcos.map(function (m, k) { return '<button type="button" class="wla-marco' + (sel === k ? ' on' : e.viu[k] ? ' foi' : '') + (k === d.marcos.length - 1 ? ' agora' : '') + '" style="left:' + (6 + 88 * k / Math.max(1, d.marcos.length - 1)) + '%" data-a="wla-esc" data-n="' + k + '"><i></i><b>' + h(m.t) + '</b></button>'; }).join('') + '</div>'
      + (x ? '<div class="foco"><div class="pergunta vd ja"><small>' + h(x.t).toUpperCase() + '</small><h2>' + x.q + '</h2></div>' + apoio({ starter: x.st || d.starter, ex: x.ex }, 'l' + sel) + '</div>' : '<p class="wla-dica" style="text-align:center">Tap a moment on the line.</p>') + '</div>';
  };
  /* A3 · TERMÔMETRO DE OPINIÃO: uma frase provocadora; o aluno e o professor marcam onde estão */
  M.termometro = function (d) {
    var e = st(), ESC = ['Totally disagree', 'Disagree', 'Not sure', 'Agree', 'Totally agree'];
    var linhaDe = function (quem, chave) { return '<div class="wla-escala"><span class="wla-quem">' + quem + '</span>' + ESC.map(function (t, k) { return '<button type="button" class="wla-grau g' + k + (e[chave] === k ? ' on' : '') + '" data-a="wla-grau" data-c="' + chave + '" data-n="' + k + '">' + t + '</button>'; }).join('') + '</div>'; };
    return '<div class="wla-termo"><blockquote class="wla-frase vd">“' + d.frase + '”</blockquote>' + linhaDe('STUDENT', 'gA') + linhaDe('TEACHER', 'gP')
      + (e.gA != null ? '<div class="foco"><div class="pergunta vd ja"><small>' + (e.gP != null && e.gP !== e.gA ? 'YOU DON’T AGREE WITH EACH OTHER' : 'WHY?') + '</small><h2>' + (d.q || 'Why do you think so? Give one example from your life.') + '</h2></div>' + apoio(d, 't') + (d.fup ? fup(d.fup, 't', d.fst, d.fex) : '') + '</div>' : '<p class="wla-dica" style="text-align:center">The student marks first. Then the teacher.</p>') + '</div>';
  };
  /* A4 · OBJETO MISTERIOSO: um detalhe da imagem em zoom; cada toque abre um pouco */
  M.objeto = function (d) {
    var e = st(), Z = [7, 3.6, 1.8, 1], z = Z[Math.min(e.zoom, Z.length - 1)], fim = e.zoom >= Z.length - 1;
    return '<div class="wla-obj"><div class="wla-lente vd" style="background-image:url(\'' + im(d.img) + '\');background-size:' + (z * 100) + '%;background-position:' + d.foco[0] + '% ' + d.foco[1] + '%"><span class="wla-zoom">zoom ' + z + '×</span></div>'
      + '<div class="wla-lado">' + (fim ? '<div class="pergunta vd ja"><small>IT IS…</small><h2>' + d.resposta + '</h2></div>' + (d.depois ? fup(d.depois, 'o', d.fst, d.fex) : '')
        : '<div class="pergunta vd ja"><small>WHAT IS IT?</small><h2>' + (d.q || 'What is it? What can you see?') + '</h2></div>' + apoio(d, 'o') + '<div class="wla-pe"><button type="button" class="btn" data-a="wla-zoom">Zoom out</button></div>') + '</div></div>';
  };
  /* A5 · NEVER HAVE I EVER: cartas; cada uma abre "I have / I never have" e o follow-up */
  M.nunca = function (d) {   /* 11/10: lista de jogo, não cartões */
    var e = st(), sel = e.esc;
    if (!document.getElementById('css-nunca-lista')) { var cs = document.createElement('style'); cs.id = 'css-nunca-lista';
      cs.textContent = '.wla-nl{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:24px;align-items:start}'
        + '.wla-lista{display:grid;gap:0;border-radius:18px;overflow:hidden;border:1px solid var(--fio2);background:var(--vidro)}'
        + '.wla-li{display:flex;align-items:center;gap:12px;padding:14px 16px;border:0;border-bottom:1px solid var(--fio);background:transparent;color:var(--t1);text-align:left;font:inherit;cursor:pointer}'
        + '.wla-li:last-child{border-bottom:0}.wla-li em{font:italic 600 13px var(--ui);color:var(--t3);white-space:nowrap}'
        + '.wla-li b{flex:1;font:700 clamp(16px,1.25vw,20px)/1.35 var(--disp,var(--ui))}'
        + '.wla-li i{font-style:normal;padding:6px 12px;border-radius:999px;border:1px solid var(--fio2);font:800 13px var(--ui);color:var(--t2);white-space:nowrap}'
        + '.wla-li.on{background:color-mix(in srgb,var(--ac) 16%,transparent);box-shadow:inset 4px 0 0 var(--ac)}.wla-li.on i{background:var(--ac);border-color:var(--ac);color:#1a1205}'
        + '.wla-li.foi b{color:var(--t2)}.wla-li.foi i{border-color:var(--ok,#8fe3a8);color:var(--ok,#8fe3a8)}'
        + '@media (max-width:900px){.wla-nl{grid-template-columns:1fr}.wla-li em{display:none}}';
      document.head.appendChild(cs); }
    return '<div class="wla-nunca wla-nl"><div class="wla-lista">' + d.cartas.map(function (c, k) { return '<button type="button" class="wla-li' + (sel === k ? ' on' : e.viu[k] ? ' foi' : '') + '" data-a="wla-esc" data-n="' + k + '"><em>Never have I ever…</em><b>' + h(c.t) + '</b><i>' + (sel === k ? '✋ I have!' : e.viu[k] ? '✓' : '✋') + '</i></button>'; }).join('') + '</div>'
      + (sel != null ? '<div class="foco">' + fala('abn' + sel, d.starter || ['I have! …', 'I never have.'], []) + fup(d.cartas[sel].fup || d.fup || 'When? What happened?', 'n' + sel, d.fst, d.cartas[sel].ex) + '</div>' : '<p class="wla-dica">Tap a line. Have you ever done it?</p>') + '</div>';
  };
  /* A6 · TRÊS SEGUNDOS (sem relógio): o professor mostra, esconde, e o aluno lembra */
  M.tres = function (d) {
    var e = st();
    return '<div class="wla-tres"><div class="wla-quadro vd' + (e.esconde ? ' escondido' : '') + '" style="background-image:url(\'' + im(d.img) + '\')">' + (e.esconde ? '<span>What did you see?</span>' : '') + '</div>'
      + '<div class="wla-lado">' + (e.esconde ? '<div class="pergunta vd ja"><small>FROM MEMORY</small><h2>' + (d.q || 'What did you see? Say everything you remember.') + '</h2></div>' + apoio(d, 'r') + '<div class="wla-pe"><button type="button" class="btn" data-a="wla-mostra">Show it again</button></div>'
        : '<div class="pergunta vd ja"><small>LOOK CAREFULLY</small><h2>' + (d.antes || 'Look at the picture. Remember everything you can.') + '</h2></div><div class="wla-pe so-prof"><button type="button" class="btn cheio" data-a="wla-esconde">Hide the picture</button></div><p class="dica-aluno">Look! Your teacher will hide it.</p>'
          + (e.vista && d.depois ? fup(d.depois, 'r', d.fst, d.fex) : '')) + '</div></div>';
  };
  /* A7 · MURAL DE UMA PALAVRA: cada um escreve uma palavra sobre o tema; cada palavra vira uma pergunta */
  M.mural = function (d) {
    var e = st(), ta = (S.txt && S.txt['ab-aluno']) || '', tp = (S.txt && S.txt['ab-prof']) || '';
    var post = function (txt, cor, quem) { return '<div class="wla-post" style="--pc:' + cor + '"><small>' + quem + '</small><b>' + (h(txt) || '…') + '</b></div>'; };
    return '<div class="wla-mural"><div class="wla-parede">' + post(ta, '#d9b54a', 'STUDENT') + post(tp, '#d98aa6', 'TEACHER') + (d.extras || []).map(function (x, k) { return post(x, ['#7fa9d9', '#86c48c', '#a98ad9'][k % 3], 'THE ' + (d.de || 'LESSON').toUpperCase()); }).join('') + '</div>'
      + '<div class="wla-lado"><div class="pergunta vd ja"><small>ONE WORD</small><h2>' + d.q + '</h2></div>'
      + '<label class="wla-campo"><span>Student’s word</span><input data-campo="ab-aluno" maxlength="24" autocomplete="off" value="' + h(ta) + '"></label>'
      + '<label class="wla-campo"><span>Teacher’s word</span><input data-campo="ab-prof" maxlength="24" autocomplete="off" value="' + h(tp) + '"></label>'
      + (ta ? fup(d.fup || 'Why that word? Tell me a story about it.', 'w', d.fst, d.fex) : '') + '</div></div>';
  };
  /* A8 · A ÚLTIMA FOTO: perguntas que giram em volta da última foto do celular, uma por vez */
  M.foto = function (d) {
    var e = st(), n = e.i, lista = d.perguntas, x = lista[Math.min(n, lista.length - 1)], fim = n >= lista.length;
    return '<div class="wla-foto"><div class="wla-cel vd"><div class="wla-cel-tela"><span>📷</span><b>' + (d.pedido || 'Open your gallery. Look at your last photo.') + '</b></div></div>'
      + '<div class="wla-lado">' + (fim ? '<p class="aprova">' + (d.fim || 'Now ask your teacher about their last photo!') + '</p>'
        : '<div class="pergunta vd ja"><small>QUESTION ' + (n + 1) + ' OF ' + lista.length + '</small><h2>' + x.q + '</h2></div>' + apoio({ starter: x.st || d.starter, ex: x.ex }, 'f' + n) + '<div class="wla-pe"><button type="button" class="btn" data-a="wla-prox">Next question</button></div>') + '</div></div>';
  };

  TOQUES['wla-sel'] = function (b, n) { var e = st(), max = (window.WL_ABERTURA || {}).max || 2, i = e.sel.indexOf(n); if (i >= 0) e.sel.splice(i, 1); else if (e.sel.length < max) e.sel.push(n); };
  TOQUES['wla-esc'] = function (b, n) { var e = st(); e.esc = n; e.viu[n] = 1; };
  TOQUES['wla-grau'] = function (b, n, v, c) { st()[c] = n; };
  TOQUES['wla-zoom'] = function () { st().zoom++; };
  TOQUES['wla-esconde'] = function () { var e = st(); e.esconde = 1; e.vista = 1; };
  TOQUES['wla-mostra'] = function () { st().esconde = 0; };
  TOQUES['wla-prox'] = function () { st().i++; };
  CAMPOS['ab-aluno'] = function () { if (typeof pinta === 'function') setTimeout(function () { var a = document.activeElement, id = a && a.getAttribute && a.getAttribute('data-campo'); pinta(); if (id) { var x = document.querySelector('[data-campo="' + id + '"]'); if (x) { x.focus(); x.setSelectionRange(x.value.length, x.value.length); } } }, 0); };
  CAMPOS['ab-prof'] = CAMPOS['ab-aluno'];

  function troca(palco, c) {
    var d = window.WL_ABERTURA; if (!d || !c || c.k !== 'voce' || !M[d.modo]) return;
    var cena = palco.querySelector('section.cena'); if (!cena || cena.getAttribute('data-wla')) return;
    var cab = cena.querySelector('.cab');
    if (cab) { var r = cab.querySelector('.rot'), t = cab.querySelector('h1'), p = cab.querySelector('p');
      if (d.rot && r) r.innerHTML = r.innerHTML.replace(/·[^·<]*$/, '· ' + h(d.rot)); if (d.t && t) t.innerHTML = d.t; if (d.p && p) p.innerHTML = d.p; }
    [].slice.call(cena.children).forEach(function (x) { if (x !== cab) cena.removeChild(x); });
    cena.insertAdjacentHTML('beforeend', '<div class="wla wla-' + d.modo + '-c">' + M[d.modo](d) + '</div>');
    cena.setAttribute('data-wla', d.modo);
  }
  (window.WL_PECAS = window.WL_PECAS || []).push(troca);
  window.WolfAbertura = { modos: Object.keys(M) };

  var css = document.createElement('style');
  css.textContent = ''
    + '.wla{display:grid;gap:14px;margin-top:4px}.wla-dica{color:var(--t3);font:600 15px var(--ui)}.wla-pe{display:flex;justify-content:flex-end;gap:8px}'
    + '.wla-lado{display:grid;gap:12px;align-content:start}'
    /* mala */
    + '.wla-mala{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:28px;align-items:start}'
    + '.wla-itens{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;padding:18px;border-radius:24px;background:linear-gradient(180deg,color-mix(in srgb,var(--ac) 14%,transparent),var(--vidro));border:1.5px dashed var(--fio2)}'
    + '.wla-item{display:grid;justify-items:center;gap:6px;padding:16px 8px;border-radius:16px;border:1.5px solid var(--fio2);background:var(--vidro2);color:var(--t1);transition:transform .2s,border-color .2s}'
    + '.wla-item:hover{transform:translateY(-2px)}.wla-item.on{border-color:var(--ac);background:color-mix(in srgb,var(--ac) 20%,transparent);transform:translateY(-4px)}'
    + '.wla-e{font-size:clamp(30px,2.6vw,44px);line-height:1}.wla-item b{font:700 14.5px var(--ui)}.wla-conta{margin:0;font:800 13px var(--ui);letter-spacing:.14em;color:var(--ac)}'
    /* linha */
    + '.wla-eixo{position:relative;height:120px;margin:10px 4% 6px;border-bottom:3px solid var(--fio2)}'
    + '.wla-eixo::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:3px;background:linear-gradient(90deg,transparent,var(--ac))}'
    + '.wla-marco{position:absolute;bottom:-14px;transform:translateX(-50%);display:grid;justify-items:center;gap:6px;border:0;background:none;color:var(--t2);font:700 15px var(--ui)}'
    + '.wla-marco i{order:2;width:24px;height:24px;border-radius:50%;background:var(--noite);border:3px solid var(--fio2)}.wla-marco b{order:1;padding:4px 12px;border-radius:999px;background:var(--vidro2);white-space:nowrap}'
    + '.wla-marco.foi i{border-color:var(--ac);background:color-mix(in srgb,var(--ac) 40%,var(--noite))}.wla-marco.on i{border-color:var(--ac);background:var(--ac);box-shadow:0 0 0 6px color-mix(in srgb,var(--ac) 25%,transparent)}.wla-marco.on b{background:var(--ac);color:#140d0a}'
    + '.wla-marco.agora b{border:1.5px solid var(--ac)}'
    /* termômetro */
    + '.wla-termo{display:grid;gap:10px}.wla-frase{margin:0 auto 6px;max-width:900px;padding:22px 26px;text-align:center;font:400 clamp(26px,2.4vw,42px)/1.25 var(--disp);color:var(--t1)}'
    + '.wla-escala{display:grid;grid-template-columns:110px repeat(5,minmax(0,1fr));gap:6px;align-items:center;max-width:1000px;width:100%;margin:0 auto}'
    + '.wla-quem{font:800 12px var(--ui);letter-spacing:.14em;color:var(--t3)}.wla-grau{min-height:46px;padding:4px 6px;border-radius:12px;border:1.5px solid var(--fio2);background:var(--vidro);color:var(--t2);font:700 13.5px var(--ui)}'
    + '.wla-grau.on{color:#140d0a;border-color:transparent}.wla-grau.g0.on{background:#ff8fa3}.wla-grau.g1.on{background:#ffb88a}.wla-grau.g2.on{background:#cfc6e8}.wla-grau.g3.on{background:#a8e6b8}.wla-grau.g4.on{background:#7ee0a1}'
    /* objeto */
    + '.wla-obj,.wla-tres,.wla-mural,.wla-foto{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px;align-items:start}'
    + '.wla-lente{position:relative;aspect-ratio:1;max-height:56vh;border-radius:50%;background-repeat:no-repeat;transition:background-size .8s ease;box-shadow:0 0 0 6px var(--vidro2),0 0 0 8px var(--fio2),var(--sombra);justify-self:center;width:min(100%,56vh)}'
    + '.wla-zoom{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);padding:4px 12px;border-radius:999px;background:rgba(0,0,0,.6);font:800 12px var(--ui);color:#fff}'
    /* nunca */
    + '.wla-cartas{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px}'
    + '.wla-nc{display:grid;gap:6px;align-content:start;min-height:120px;padding:16px;border-radius:18px;text-align:left;border:1.5px solid var(--fio2);background:var(--vidro2);color:var(--t1)}'
    + '.wla-nc small{font:700 12px var(--ui);color:var(--t3);font-style:italic}.wla-nc b{font:700 clamp(17px,1.3vw,21px)/1.3 var(--ui)}.wla-nc.on{border-color:var(--ac);background:color-mix(in srgb,var(--ac) 18%,transparent)}.wla-nc.foi{opacity:.6}'
    /* tres */
    + '.wla-quadro{aspect-ratio:16/10;border-radius:22px;background:center/cover;transition:filter .5s;display:grid;place-items:center}.wla-quadro.escondido{filter:brightness(.08) blur(14px)}'
    + '.wla-quadro span{font:800 clamp(20px,1.8vw,30px) var(--ui);color:var(--t1);filter:none}'
    /* mural */
    + '.wla-parede{display:flex;flex-wrap:wrap;gap:14px;align-content:flex-start;min-height:280px;padding:22px;border-radius:22px;background:var(--vidro);border:1px solid var(--fio)}'
    + '.wla-post{width:150px;min-height:120px;padding:12px;background:var(--pc);color:#1d160e;box-shadow:0 10px 22px rgba(0,0,0,.45);filter:saturate(.9) brightness(.92);transform:rotate(-2deg)}.wla-post:nth-child(2n){transform:rotate(2deg)}'
    + '.wla-post small{display:block;font:800 10px var(--ui);letter-spacing:.12em;opacity:.6}.wla-post b{display:block;margin-top:10px;font:700 30px/1.05 Caveat,cursive;overflow-wrap:anywhere}'
    + '.wla-campo{display:grid;gap:4px;font:700 13px var(--ui);color:var(--t3)}.wla-campo input{min-height:46px;padding:0 14px;border-radius:12px;border:1.5px solid var(--fio2);background:var(--vidro2);color:var(--t1);font:600 17px var(--ui)}'
    /* foto */
    + '.wla-cel{justify-self:center;width:min(280px,100%);aspect-ratio:9/17;border-radius:36px;padding:12px;background:#0b0b0f;border:1px solid var(--fio2)}'
    + '.wla-cel-tela{height:100%;border-radius:26px;display:grid;place-items:center;align-content:center;gap:12px;padding:20px;text-align:center;background:radial-gradient(70% 60% at 50% 40%,color-mix(in srgb,var(--ac) 30%,transparent),transparent),#15131c}'
    + '.wla-cel-tela span{font-size:46px}.wla-cel-tela b{font:700 17px/1.35 var(--ui);color:var(--t1)}'
    + '@media (max-width:900px){.wla-mala,.wla-obj,.wla-tres,.wla-mural,.wla-foto{grid-template-columns:1fr}.wla-itens{grid-template-columns:repeat(2,minmax(0,1fr))}'
    + '.wla-escala{grid-template-columns:1fr 1fr}.wla-quem{grid-column:1/-1}.wla-eixo{height:130px}.wla-marco b{font-size:12px;padding:3px 8px;white-space:normal;max-width:80px;text-align:center}.wla-cel{width:200px}}';
  document.head.appendChild(css);
})();
