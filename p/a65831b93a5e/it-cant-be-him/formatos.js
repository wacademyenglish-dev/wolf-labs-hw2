/* ============================================================
   KIT LIVE CLASS · OS FORMATOS NOVOS (FM)              22/10/2026
   Pedido do Carlos depois da auditoria Fluentize: mesmas páginas,
   exercícios novos, "bem interativos por causa do live mode" e com
   "design lindo". Nada de escolher entre três frases quase iguais.
     FM.fala      o aluno vê a pista, FALA, e ele mesmo toca Check
     FM.som       qual palavra você ouviu? (par de som, ▶ no minuto)
     FM.erro      uma palavra está errada: diga a certa (▶ no minuto)
     FM.carta     o texto de um personagem: tocar a forma, completar a regra
     FM.pergunta  monte a pergunta e entreviste o professor
     FM.ordem     ponha na ordem (toque 1, 2, 3…), Check confere
     FM.ab        o professor escolhe a conversa A ou B
     FM.reflexao  um minuto antes de sair, vai para o My notes
     FM.regra     a placa da regra presa no canto (op.regra em qualquer formato)
   O desenho: cada exercício é um OBJETO da história sobre o vidro escuro
   da aula (a carta, o cartão de cena, a placa, o pôster). A cor vem dos
   tokens da aula (--ac, --am, --disp, --ui). Papel escuro, nunca creme
   grande (fotofobia). Um só gesto de movimento: a frase certa que se
   escreve quando o aluno toca Check.
   Ações fq-* e estado S.fq (o final.js já usa fm-x e S.fm). Tudo por data-a: o toque viaja na sala e os dois lados repintam igual.
   ============================================================ */
(function () {
  var FM = window.FM = {};
  function E(k, base) { S.fq = S.fq || {}; if (!S.fq[k]) S.fq[k] = base || {}; return S.fq[k]; }
  function seg(t) { var p = String(t).split(':'); return p.length > 1 ? (+p[0]) * 60 + (+p[1]) : +t; }
  function pulo(t) { return t == null ? '' : '<button type="button" class="fm-tempo" data-a="fq-pula" data-v="' + seg(t) + '" aria-label="Play the video from ' + t + '"><i aria-hidden="true"></i>' + t + '</button>'; }
  function com(regra, corpo) { return regra ? '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>' : corpo; }
  function fita(n, total) {
    return '<div class="fm-fita" role="img" aria-label="' + Math.min(n + 1, total) + ' of ' + total + '">' + Array.apply(null, Array(total)).map(function (_, i) { return '<i class="' + (i < n ? 'f' : i === n ? 'v' : '') + '"></i>'; }).join('') + '</div>';
  }
  function par(k, acao, i, opcoes, certa, esc) {
    return '<span class="fm-par' + (esc != null ? (esc === certa ? ' acertou' : ' errou') : '') + '">' + opcoes.map(function (w, j) {
      var cls = esc === j ? (j === certa ? 'on' : 'no') : '';
      return '<button type="button"' + (cls ? ' class="' + cls + '"' : '') + ' data-a="' + acao + '" data-c="' + k + '" data-n="' + i + '" data-v="' + j + '">' + w + '</button>';
    }).join('') + '</span>';
  }

  FM.regra = function (html, titulo) {
    return '<aside class="fm-placa"><span class="fm-placa-t">' + (titulo || 'The rule') + '</span><div class="fm-placa-c">' + html + '</div></aside>';
  };

  /* ---------- fala primeiro: o cartão de cena ---------- */
  FM.fala = function (k, itens, op) {
    op = op || {}; var e = E(k, { n: 0, ver: 0 }), n = e.n;
    /* o objeto da cena (op.lado: o varal, o mapa…) fica em cima, na largura toda; o cartão e a placa embaixo */
    if (n >= itens.length) return (op.lado ? op.lado(itens.length, -1, 1) : '') + com(op.regra, '<div class="fm-cena fm-fim"><p>' + (op.fim || 'Done. Say them all again, without looking.') + '</p></div>');
    var x = itens[n];
    var topo = op.lado ? op.lado(n + (e.ver ? 1 : 0), n, e.ver) : '';
    var corpo = '<div class="fm-cena' + (e.ver ? ' virou' : '') + '">'
      + '<div class="fm-cena-topo"><span class="fm-cena-n">' + (op.rotulo || 'Take') + ' ' + (n + 1) + '<small>/' + itens.length + '</small></span>' + fita(n, itens.length) + '</div>'
      + '<div class="fm-pista">' + x.pista + '</div>'
      + (e.ver
        ? '<p class="fm-certa">' + x.resp + '</p>' + (x.depois ? '<p class="fm-depois"><span>Ask</span>' + x.depois + '</p>' : '')
          + '<div class="fm-acoes"><button type="button" class="fm-bt" data-a="fq-prox" data-c="' + k + '">' + (n + 1 < itens.length ? (op.prox || 'Next') : 'Finish') + '</button></div>'
        : '<div class="fm-acoes"><span class="fm-diga"><i class="fm-boca" aria-hidden="true"></i>' + (op.diga || 'Say it out loud first') + '</span><button type="button" class="fm-check" data-a="fq-ver" data-c="' + k + '"><i aria-hidden="true"></i>Check</button></div>')
      + '</div>';
    return topo + '<div class="fm-gap"></div>' + com(op.regra, corpo);
  };

  /* ---------- qual palavra você ouviu? ---------- */
  FM.som = function (k, itens, op) {
    op = op || {}; var e = E(k, { esc: {} });
    var feitos = 0; itens.forEach(function (x, i) { if (e.esc[i] === x.c) feitos++; });
    return com(op.regra, '<div class="fm-folha"><div class="fm-folha-t"><b>' + (op.titulo || 'Which word did you hear?') + '</b><span>' + feitos + ' of ' + itens.length + '</span></div><ol class="fm-linhas">' + itens.map(function (x, i) {
      return '<li><p>' + (x.a || '') + par(k, 'fq-par', i, x.par, x.c, e.esc[i]) + (x.b || '') + '</p>' + pulo(x.t) + '</li>';
    }).join('') + '</ol><p class="fm-nota">' + (op.nota || 'Not sure? Tap the time and listen again.') + '</p></div>');
  };

  /* ---------- uma palavra está errada ---------- */
  FM.erro = function (k, itens, op) {
    op = op || {}; var e = E(k, { ver: 0 });
    return com(op.regra, '<div class="fm-folha"><div class="fm-folha-t"><b>' + (op.titulo || 'One word is wrong. Say the right one.') + '</b></div><ol class="fm-linhas">' + itens.map(function (x, i) {
      var f = x.f.replace(/<u>(.*?)<\/u>/, e.ver ? '<s class="fm-riscada">$1</s> <span class="fm-troca">' + x.r + '</span>' : '<span class="fm-errada">$1</span>');
      return '<li><p>' + f + '</p>' + pulo(x.t) + '</li>';
    }).join('') + '</ol>' + (e.ver ? '' : '<div class="fm-acoes"><span class="fm-diga"><i class="fm-boca" aria-hidden="true"></i>Say all the fixes first</span><button type="button" class="fm-check" data-a="fq-ver" data-c="' + k + '"><i aria-hidden="true"></i>Check</button></div>') + '</div>');
  };

  /* ---------- o texto do personagem → a regra ---------- */
  FM.carta = function (k, carta, regra, op) {
    op = op || {}; var e = E(k, { v: {}, r: {}, x: {} }); e.x = e.x || {};
    var total = 0, achou = 0, nx = 0;
    /* toda palavra é tocável (senão o aluno vê quais são os alvos); só as [[marcadas]] contam, as outras ficam riscadas de leve */
    var txt = carta.txt.split(/(\[\[.*?\]\])/).map(function (pedaco) {
      var m = pedaco.match(/^\[\[(.*)\]\]$/);
      if (m) { var i = total++; if (e.v[i]) achou++; return '<button type="button" class="fm-w' + (e.v[i] ? ' on' : '') + '" data-a="fq-v" data-c="' + k + '" data-n="' + i + '">' + m[1] + '</button>'; }
      return pedaco.replace(/[A-Za-z’']+/g, function (w) { var j = nx++; return '<button type="button" class="fm-w' + (e.x[j] ? ' no' : '') + '" data-a="fq-x" data-c="' + k + '" data-n="' + j + '">' + w + '</button>'; });
    }).join('');
    var feitas = 0;
    var linhas = regra.map(function (x, i) { if (e.r[i] === x.c) feitas++; return '<li>' + (x.a || '') + par(k, 'fq-r', i, x.par, x.c, e.r[i]) + (x.b || '') + '</li>'; }).join('');
    var pronta = feitas === regra.length;
    return '<div class="fm-mesa">'
      + '<div class="fm-carta-col"><article class="fm-carta' + (op.papel ? ' ' + op.papel : '') + '">' + (carta.de ? '<header class="fm-de">' + carta.de + '</header>' : '') + '<div class="fm-corpo">' + txt + '</div>' + (carta.assina ? '<footer class="fm-assina">' + carta.assina + '</footer>' : '') + '</article>'
      + '<p class="fm-achou"><span class="fm-medidor" style="--p:' + (total ? achou / total : 0) + '"><i></i></span>' + (op.toque || 'Tap the verbs in the past') + ' · <b>' + achou + '</b> of ' + total + '</p></div>'
      + '<div class="fm-placa grande' + (pronta ? ' pronta' : '') + '"><span class="fm-placa-t">' + (op.titulo || 'Now finish the rule') + '</span><ol class="fm-regra-l">' + linhas + '</ol>'
      + (pronta ? '<p class="fm-placa-ok">' + (op.pronta || 'The rule is ready. It stays on the screen.') + '</p>' : '') + '</div></div>';
  };

  /* ---------- monte a pergunta ---------- */
  FM.pergunta = function (k, itens, op) {
    op = op || {}; var e = E(k, { ver: {} });
    return com(op.regra, '<div class="fm-folha"><div class="fm-folha-t"><b>' + (op.titulo || 'Build the question. Ask your teacher.') + '</b></div><ol class="fm-linhas">' + itens.map(function (x, i) {
      return '<li class="' + (e.ver[i] ? 'aberta' : '') + '"><p><span class="fm-molde">' + x.p + '</span>' + (e.ver[i] ? '<span class="fm-certa-l">' + x.r + '</span>' : '') + '</p>'
        + (e.ver[i] ? '' : '<button type="button" class="fm-check mini" data-a="fq-q" data-c="' + k + '" data-n="' + i + '"><i aria-hidden="true"></i>Check</button>') + '</li>';
    }).join('') + '</ol>' + (op.depois ? '<div class="fm-depois-chips"><span>' + (op.depoisRot || 'Then compare') + '</span>' + op.depois.map(function (f) { return '<em>' + f + '</em>'; }).join('') + '</div>' : '') + '</div>');
  };

  /* ---------- ponha na ordem ---------- */
  FM.ordem = function (k, itens, op) {
    op = op || {}; var e = E(k, { seq: [], ver: 0 });
    return '<div class="fm-ordem">' + itens.map(function (x, i) {
      var pos = e.seq.indexOf(i), certo = e.ver && pos === x.n - 1;
      return '<button type="button" class="fm-pol' + (pos >= 0 ? ' marcado' : '') + (e.ver ? (certo ? ' certo' : ' errado') : '') + '" style="--g:' + [-3, 2, -1.5, 3, -2, 1][i % 6] + 'deg" data-a="fq-ord" data-c="' + k + '" data-n="' + i + '">'
        + '<span class="fm-foto"' + (x.img ? ' style="background-image:url(\'' + img(x.img) + '\')"' : '') + '></span><span class="fm-leg">' + x.t + '</span>'
        + (pos >= 0 ? '<b class="fm-n">' + (pos + 1) + '</b>' : '') + (e.ver && !certo ? '<em class="fm-n2">' + x.n + '</em>' : '') + '</button>';
    }).join('') + '</div>'
      + '<div class="fm-acoes centro">' + (e.ver ? '<span class="fm-ok">' + (op.ok || 'The green number is the right place.') + '</span>' : (e.seq.length === itens.length ? '<button type="button" class="fm-check" data-a="fq-ver" data-c="' + k + '"><i aria-hidden="true"></i>Check</button>' : '<span class="fm-nota">' + (op.toque || 'Tap them in order: first, second, third…') + '</span>')) + '</div>';
  };

  /* ---------- A ou B: dois pôsteres ---------- */
  FM.ab = function (k, A, B) {
    var e = E(k, { op: -1 });
    return '<div class="fm-ab" role="radiogroup" aria-label="Pick A or B">' + [A, B].map(function (x, i) {
      return '<button type="button" role="radio" aria-checked="' + (e.op === i) + '" class="fm-poster' + (e.op === i ? ' on' : '') + (e.op >= 0 && e.op !== i ? ' apaga' : '') + '" data-a="fq-ab" data-c="' + k + '" data-n="' + i + '">'
        + '<span class="fm-letra" aria-hidden="true">' + 'AB'[i] + '</span><b>' + x.t + '</b><span class="fm-d">' + x.d + '</span>'
        + '<span class="fm-st">' + (x.st || []).map(function (s) { return '<em>' + s + '</em>'; }).join('') + '</span></button>';
    }).join('') + '</div>' + (e.op < 0 ? '<p class="fm-nota so-prof" style="text-align:center">Teacher: pick A or B for this student.</p>' : '');
  };

  /* ---------- um minuto antes de sair ---------- */
  FM.reflexao = function (campo, perguntas, chips) {
    S.txt = S.txt || {}; S.salvo = S.salvo || {};
    return '<div class="fm-reflexao"><div class="fm-canhotos">' + perguntas.map(function (p) { return '<div class="fm-canhoto"><b>' + p[0] + '</b><span>' + p[1] + '</span></div>'; }).join('') + '</div>'
      + escritaFinal(campo, S.txt[campo] || '', S.salvo[campo], 'One new word, one sentence, one thing that was hard…', 'Before you go', chips || ['Today I learned …', 'Now I can say …', 'It was hard to …']) + '</div>';
  };

  /* ---------- os toques ---------- */
  var T = {
    'fq-ver': function (b, n, v, c) { E(c).ver = 1; },
    'fq-prox': function (b, n, v, c) { var e = E(c); e.n++; e.ver = 0; },
    'fq-par': function (b, n, v, c) { var e = E(c, { esc: {} }); e.esc = e.esc || {}; e.esc[n] = +v; },
    'fq-r': function (b, n, v, c) { var e = E(c, { v: {}, r: {}, x: {} }); e.r[n] = +v; },
    'fq-v': function (b, n, v, c) { var e = E(c, { v: {}, r: {}, x: {} }); e.v[n] = !e.v[n]; },
    'fq-x': function (b, n, v, c) { var e = E(c, { v: {}, r: {}, x: {} }); e.x = e.x || {}; e.x[n] = !e.x[n]; },
    'fq-q': function (b, n, v, c) { var e = E(c, { ver: {} }); e.ver[n] = 1; },
    'fq-ab': function (b, n, v, c) { E(c, { op: -1 }).op = n; },
    'fq-ord': function (b, n, v, c) { var e = E(c, { seq: [], ver: 0 }); if (e.ver) return false; var p = e.seq.indexOf(n); if (p >= 0) e.seq.splice(p); else e.seq.push(n); },
    'fq-pula': function (b, n, v) {
      var f = document.querySelector('#palco .video iframe'); if (!f) return false;
      try {
        f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'seekTo', args: [+v, true] }), '*');
        f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
      } catch (e) { /* segue */ }
      return false;
    }
  };
  /* 22/10/2026 · uma página que falha não fica em branco: mostra o erro (o Carlos via a página 2 vazia e o Next "pulava" para a 3) */
  function blinda() {
    Object.keys(R).forEach(function (k) {
      var f = R[k]; if (typeof f !== 'function' || f.__fq) return;
      var g = function (c) { try { return f.apply(this, arguments); } catch (e) { try { console.error(e); } catch (x) { /* segue */ } return (window.cab ? cab(c) : '') + '<div class="fm-folha"><b>This page could not open.</b><p class="fm-nota">' + h(e && e.message || e) + '</p></div>'; } };
      /* 23/10: a página pode guardar dados nela mesma (R.dois.regra); o embrulho leva junto */
      for (var p in f) if (Object.prototype.hasOwnProperty.call(f, p)) g[p] = f[p];
      g.__fq = 1; R[k] = g;
    });
  }
  function liga() { for (var a in T) TOQUES[a] = T[a]; blinda(); setTimeout(blinda, 0); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', liga); else liga();

  /* ---------- o desenho ---------- */
  var css = [
    /* a placa da regra: esmalte escuro com moldura dupla na cor quente da aula */
    '.fm-com-regra{display:grid;grid-template-columns:minmax(0,1fr) 270px;gap:22px;align-items:start;width:min(1200px,100%);margin:0 auto}',
    '.fm-mio{display:grid;gap:18px;min-width:0}',
    '.fm-gap{height:16px}',
    '.fm-placa{position:sticky;top:6px;padding:16px 18px 18px;border-radius:14px;background:linear-gradient(160deg,color-mix(in srgb,var(--am) 9%,rgba(10,8,14,.9)),rgba(10,8,14,.92));border:1px solid color-mix(in srgb,var(--am) 55%,transparent);box-shadow:inset 0 0 0 4px rgba(0,0,0,.35),inset 0 0 0 5px color-mix(in srgb,var(--am) 22%,transparent),0 24px 50px rgba(0,0,0,.45);font:500 15px/1.65 var(--ui);color:var(--t1)}',
    '.fm-placa-t{display:block;font:italic 700 19px/1.1 var(--disp);color:var(--am);margin-bottom:8px}',
    '.fm-placa b{color:var(--am);font-weight:800}',
    '.fm-placa.grande{position:relative;top:0;padding:22px 24px}',
    '.fm-placa.grande .fm-placa-t{font-size:24px;margin-bottom:6px}',
    '.fm-placa.pronta{border-color:var(--am);box-shadow:inset 0 0 0 4px rgba(0,0,0,.35),inset 0 0 0 5px color-mix(in srgb,var(--am) 45%,transparent),0 0 0 6px color-mix(in srgb,var(--am) 12%,transparent),0 24px 50px rgba(0,0,0,.45)}',
    '.fm-placa-ok{margin:12px 0 0;font:600 15px var(--ui);color:#cdeed6}',
    '.fm-regra-l{list-style:none;margin:0;padding:0;counter-reset:r}',
    '.fm-regra-l li{counter-increment:r;position:relative;padding:12px 0 12px 34px;border-top:1px solid rgba(255,255,255,.07);font:500 clamp(16px,1.2vw,19px)/1.9 var(--ui)}',
    '.fm-regra-l li:first-child{border-top:0}',
    '.fm-regra-l li::before{content:counter(r);position:absolute;left:0;top:14px;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font:800 12px var(--ui);color:var(--am);border:1px solid color-mix(in srgb,var(--am) 50%,transparent)}',
    /* o par: um interruptor de duas teclas */
    '.fm-par{display:inline-flex;vertical-align:baseline;margin:0 5px;padding:3px;border-radius:999px;background:rgba(0,0,0,.35);box-shadow:inset 0 1px 3px rgba(0,0,0,.5),0 0 0 1px var(--fio2)}',
    '.fm-par button{border:0;background:transparent;border-radius:999px;padding:1px 14px;font:700 1em/1.55 var(--ui);color:var(--t2);transition:background .2s,color .2s}',
    '.fm-par button:hover{color:var(--t1)}',
    '.fm-par button.on{background:linear-gradient(180deg,#7fe0a6,#4fbf7f);color:#06240f;box-shadow:0 2px 10px rgba(79,191,127,.35)}',
    '.fm-par button.no{background:rgba(255,110,110,.2);color:#ffd3cc;text-decoration:line-through}',
    '.fm-par.errou{animation:fm-nao .32s}',
    '@keyframes fm-nao{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}',
    /* a folha de tarefas (vídeo, perguntas) */
    '.fm-folha{width:min(980px,100%);margin:0 auto;padding:20px 24px;border-radius:22px;background:var(--vidro);border:1px solid var(--fio);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);box-shadow:inset 0 1px 0 var(--luz),var(--sombra)}',
    '.fm-folha-t{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:6px}',
    '.fm-folha-t b{font:italic 700 clamp(20px,1.6vw,26px)/1.15 var(--disp);color:var(--t1)}',
    '.fm-folha-t span{font:700 13px var(--ui);color:var(--t3);font-variant-numeric:tabular-nums}',
    '.fm-linhas{list-style:none;margin:0;padding:0;counter-reset:l}',
    '.fm-linhas li{counter-increment:l;display:flex;align-items:center;gap:14px;padding:13px 0 13px 40px;position:relative;border-top:1px solid var(--fio)}',
    '.fm-linhas li:first-child{border-top:0}',
    '.fm-linhas li::before{content:counter(l);position:absolute;left:0;top:50%;transform:translateY(-50%);font:900 22px/1 var(--disp);color:color-mix(in srgb,var(--ac) 80%,var(--t1))}',
    '.fm-linhas p{margin:0;flex:1;min-width:0;font:500 clamp(17px,1.35vw,22px)/1.7 var(--ui)}',
    /* 23/10: sem vídeo na página o ▶ não teria onde pular, então some */
    'body:not(:has(#palco .video iframe)) .fm-tempo{display:none!important}',
    '.fm-tempo{flex:none;display:inline-flex;align-items:center;gap:7px;border:1px solid color-mix(in srgb,var(--l) 55%,transparent);background:color-mix(in srgb,var(--l) 10%,transparent);color:var(--l);border-radius:999px;padding:4px 12px 4px 9px;font:800 13px var(--ui);font-variant-numeric:tabular-nums}',
    '.fm-tempo i{width:0;height:0;border-left:8px solid currentColor;border-top:5px solid transparent;border-bottom:5px solid transparent}',
    '.fm-tempo:hover{background:color-mix(in srgb,var(--l) 20%,transparent)}',
    '.fm-errada{color:#ffd3cc;text-decoration:underline wavy rgba(255,110,110,.9);text-underline-offset:6px;text-decoration-thickness:1.5px}',
    '.fm-riscada{color:var(--t3);text-decoration-color:rgba(255,110,110,.7)}',
    '.fm-troca{color:#bdf0cd;font-weight:800;animation:fm-escreve .5s ease-out both}',
    '.fm-molde{font-style:italic;color:var(--t2)}',
    '.fm-certa-l{display:block;font:700 clamp(18px,1.45vw,24px)/1.4 var(--disp);color:#e3f7e9;animation:fm-escreve .5s ease-out both}',
    '.fm-certa-l b,.fm-certa b{color:var(--am)}',
    '.fm-nota{margin:10px 0 0;color:var(--t3);font-size:14px}',
    '.fm-ok{color:#bdf0cd;font-weight:700}',
    '.fm-depois-chips{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:14px;padding-top:14px;border-top:1px dashed var(--fio2)}',
    '.fm-depois-chips span{font:italic 700 16px var(--disp);color:var(--am);margin-right:4px}',
    '.fm-depois-chips em,.fm-st em{font-style:italic;border:1px solid color-mix(in srgb,var(--am) 40%,transparent);border-radius:999px;padding:5px 13px;font-size:14.5px;color:var(--t1)}',
    /* o botão Check: um selo redondo na cor da aula */
    '.fm-acoes{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;margin-top:6px}',
    '.fm-acoes.centro{justify-content:center}',
    '.fm-diga{display:inline-flex;align-items:center;gap:10px;color:var(--t2);font:600 15px var(--ui)}',
    '.fm-boca{width:28px;height:28px;border-radius:50%;background:color-mix(in srgb,var(--o) 22%,transparent);box-shadow:0 0 0 1px color-mix(in srgb,var(--o) 60%,transparent);position:relative}',
    '.fm-boca::after{content:"";position:absolute;left:8px;top:11px;width:12px;height:6px;border-radius:0 0 8px 8px;background:var(--o)}',
    '.fm-check{display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:0 24px 0 10px;border-radius:999px;border:0;background:var(--ac);color:#fff;font:800 16px var(--ui);box-shadow:0 10px 28px color-mix(in srgb,var(--ac) 40%,transparent);transition:transform .15s}',
    '.fm-check:hover{transform:translateY(-1px)}.fm-check:active{transform:translateY(1px)}',
    '.fm-check i{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.18);position:relative}',
    '.fm-check i::after{content:"";position:absolute;left:12px;top:8px;width:8px;height:14px;border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg)}',
    '.fm-check.mini{min-height:40px;padding:0 16px 0 6px;font-size:14px;flex:none}.fm-check.mini i{width:28px;height:28px}.fm-check.mini i::after{left:10px;top:6px;width:7px;height:12px}',
    '.fm-bt{min-height:48px;padding:0 24px;border-radius:999px;border:1px solid var(--fio2);background:var(--vidro2);font:700 15px var(--ui);color:var(--t1)}',
    /* o cartão de cena (fala primeiro) */
    '.fm-cena{position:relative;padding:22px 28px 22px;border-radius:24px;background:linear-gradient(170deg,rgba(255,255,255,.05),rgba(0,0,0,.25)),var(--vidro);border:1px solid var(--fio2);box-shadow:inset 0 1px 0 var(--luz),var(--sombra);display:grid;gap:14px;overflow:hidden}',
    '.fm-cena::before{content:"";position:absolute;inset:0 0 auto;height:6px;background:repeating-linear-gradient(90deg,var(--t1) 0 18px,transparent 18px 36px);opacity:.12}',
    '.fm-cena-topo{display:flex;align-items:center;justify-content:space-between;gap:12px}',
    '.fm-cena-n{font:italic 700 18px var(--disp);color:var(--am)}.fm-cena-n small{font-size:14px;color:var(--t3);font-style:normal;margin-left:2px}',
    '.fm-fita{display:flex;gap:5px}.fm-fita i{width:22px;height:6px;border-radius:2px;background:var(--fio2)}.fm-fita i.f{background:var(--am)}.fm-fita i.v{background:var(--t2)}',
    '.fm-pista{font:700 clamp(24px,2.1vw,36px)/1.22 var(--disp);letter-spacing:-.01em;color:var(--t1)}',
    '.fm-pista .ano{display:inline-block;margin-right:14px;font-style:italic;color:var(--am)}',
    '.fm-pista b{font-weight:inherit;color:var(--t1);border-bottom:2px solid color-mix(in srgb,var(--am) 70%,transparent)}',
    '.fm-certa{margin:0;padding:14px 18px;border-radius:16px;background:rgba(96,200,135,.10);border:1px solid rgba(96,200,135,.38);font:700 clamp(22px,1.9vw,32px)/1.25 var(--disp);color:#e3f7e9;animation:fm-escreve .55s ease-out both}',
    '.fm-depois{margin:0;display:flex;gap:12px;align-items:baseline;font:600 17px/1.5 var(--ui);color:var(--t2)}',
    '.fm-depois span{flex:none;font:italic 700 16px var(--disp);color:var(--am)}',
    '.fm-fim p{margin:0;font:italic 700 22px/1.35 var(--disp)}',
    '@keyframes fm-escreve{from{clip-path:inset(0 100% 0 0);opacity:.4}to{clip-path:inset(0 0 0 0);opacity:1}}',
    /* a carta: papel ESCURO envelhecido, tinta quente (fotofobia: nada de creme grande) */
    '.fm-mesa{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,1fr);gap:26px;width:min(1200px,100%);margin:0 auto;align-items:start}',
    '.fm-carta-col{display:grid;gap:12px;min-width:0}',
    '.fm-carta{position:relative;padding:26px 30px 24px;border-radius:6px;transform:rotate(-.7deg);background:radial-gradient(120% 90% at 15% 0%,#3a2c1e,transparent 60%),radial-gradient(90% 80% at 100% 100%,#1e160f,transparent 70%),#2b2016;color:#ecdcbc;box-shadow:0 30px 60px rgba(0,0,0,.55),inset 0 0 0 1px rgba(236,220,188,.08),inset 0 0 60px rgba(0,0,0,.45)}',
    '.fm-carta::after{content:"";position:absolute;top:-14px;right:34px;width:84px;height:28px;background:color-mix(in srgb,var(--am) 35%,rgba(240,230,210,.25));transform:rotate(4deg);opacity:.55;border-radius:2px}',
    '.fm-de{font:600 30px/1.05 "Caveat",cursive;color:color-mix(in srgb,var(--am) 75%,#ecdcbc);margin-bottom:10px}',
    '.fm-corpo{font:500 clamp(18px,1.4vw,23px)/1.95 Georgia,"Fraunces",serif}',
    '.fm-assina{margin-top:10px;text-align:right;font:600 28px "Caveat",cursive;color:color-mix(in srgb,var(--am) 70%,#ecdcbc)}',
    '.fm-carta.tela{transform:none;border-radius:14px;background:#0d1218;color:#d8e4f2;box-shadow:0 30px 60px rgba(0,0,0,.55),inset 0 0 0 1px rgba(134,201,240,.18)}',
    '.fm-carta.tela::after{display:none}.fm-carta.tela .fm-de{font:700 14px var(--ui);letter-spacing:.06em;color:var(--l)}.fm-carta.tela .fm-corpo{font-family:var(--ui);line-height:1.85}',
    '.fm-w{border:0;background:transparent;font:inherit;color:inherit;padding:0 2px;margin:0 -1px;border-radius:5px;transition:background .15s,color .15s}',
    '.fm-w:hover{background:rgba(236,220,188,.08)}',
    '.fm-w.on{background:var(--am);color:#1c140b;box-shadow:0 0 0 2px color-mix(in srgb,var(--am) 35%,transparent)}',
    '.fm-w.no{color:rgba(255,150,140,.85);text-decoration:line-through;text-decoration-color:rgba(255,110,110,.6)}',
    '.fm-achou{margin:0;display:flex;align-items:center;gap:12px;color:var(--t2);font:600 15px var(--ui)}.fm-achou b{color:var(--am)}',
    '.fm-medidor{width:90px;height:6px;border-radius:3px;background:var(--fio2);overflow:hidden;flex:none}.fm-medidor i{display:block;height:100%;width:calc(var(--p)*100%);background:var(--am);transition:width .3s}',
    /* as fotos para ordenar (pequenas: o creme não vira campo claro) */
    '.fm-ordem{display:flex;flex-wrap:wrap;gap:22px;justify-content:center;padding:16px 0 6px}',
    '.fm-pol{position:relative;width:170px;padding:9px 9px 12px;border:0;border-radius:3px;background:#e9dfcd;color:#2b2418;box-shadow:0 18px 36px rgba(0,0,0,.5);transform:rotate(var(--g));transition:transform .2s}',
    '.fm-pol:hover{transform:rotate(0) translateY(-4px)}',
    '.fm-foto{display:block;height:116px;background:#2a2536 center/cover;filter:saturate(.9) brightness(.9)}',
    '.fm-leg{display:block;font:600 23px/1.05 "Caveat",cursive;margin-top:7px}',
    '.fm-n,.fm-n2{position:absolute;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font:900 17px var(--disp);color:#fff;font-style:normal;box-shadow:0 6px 14px rgba(0,0,0,.4)}',
    '.fm-n{right:-12px;top:-12px;background:var(--ac)}.fm-pol.certo .fm-n{background:#3fae6a}.fm-pol.errado .fm-n{background:#b9474c}',
    '.fm-n2{left:-12px;top:-12px;background:#3fae6a}',
    /* A ou B: dois pôsteres, a letra grande escapa da moldura */
    '.fm-ab{display:grid;grid-template-columns:1fr 1fr;gap:22px;width:min(1100px,100%);margin:26px auto 0}',
    '.fm-poster{position:relative;display:grid;gap:10px;align-content:start;text-align:left;padding:34px 26px 24px;border-radius:24px;border:1px solid var(--fio2);background:linear-gradient(165deg,color-mix(in srgb,var(--ac) 14%,transparent),rgba(0,0,0,.3)),var(--vidro);color:var(--t1);box-shadow:inset 0 1px 0 var(--luz),var(--sombra);transition:opacity .25s,transform .2s,box-shadow .2s}',
    '.fm-poster:hover{transform:translateY(-2px)}',
    '.fm-letra{position:absolute;top:-34px;right:20px;font:italic 900 86px/1 var(--disp);color:var(--ac);text-shadow:0 10px 30px rgba(0,0,0,.6)}',
    '.fm-poster b{font:700 clamp(22px,1.8vw,28px)/1.2 var(--disp);max-width:85%}',
    '.fm-d{color:var(--t2);font-size:16px;line-height:1.55}',
    '.fm-st{display:flex;flex-wrap:wrap;gap:7px;margin-top:4px}',
    '.fm-poster.on{border-color:var(--ac);box-shadow:0 0 0 2px var(--ac),0 30px 60px rgba(0,0,0,.5)}',
    '.fm-poster.apaga{opacity:.38}',
    /* a reflexão: três canhotos de ingresso */
    '.fm-reflexao{width:min(1100px,100%);margin:24px auto 0;display:grid;gap:12px}',
    '.fm-canhotos{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}',
    '.fm-canhoto{position:relative;padding:12px 16px 12px 22px;border-radius:12px;background:var(--vidro);border:1px dashed var(--fio2);display:grid;gap:2px}',
    '.fm-canhoto::before{content:"";position:absolute;left:-7px;top:50%;width:14px;height:14px;margin-top:-7px;border-radius:50%;background:var(--noite);border-right:1px dashed var(--fio2)}',
    '.fm-canhoto b{font:italic 700 17px var(--disp);color:var(--am)}.fm-canhoto span{color:var(--t2);font-size:14.5px}',
    '@media (max-width:900px){.fm-com-regra,.fm-mesa,.fm-ab{grid-template-columns:minmax(0,1fr)}.fm-placa{position:static;order:-1}.fm-canhotos{grid-template-columns:1fr}.fm-pol{width:140px}.fm-letra{font-size:64px;top:-24px}.fm-linhas li{flex-wrap:wrap}}',
    '@media (prefers-reduced-motion:reduce){.fm-certa,.fm-certa-l,.fm-troca,.fm-par.errou{animation:none}.fm-pol,.fm-poster,.fm-check{transition:none}}'
  ].join('');
  var st = document.createElement('style'); st.textContent = css; (document.head || document.documentElement).appendChild(st);
})();

/* ============================================================
   KIT LIVE CLASS · FORMATOS, PARTE 2 (FM2)              22/10/2026
   Os 57 formatos da vitrine (catálogo de 221) reduzidos aos movimentos
   que faltavam no formatos.js. Vai COLADO no fim do formatos.js
   (kit/monta_formatos.py). A aula só descreve:
     FM.ex('chave', { formato: 'verdadeOuMentira', itens: [...] })
   Movimentos novos:
     verdadeOuMentira  True/Lie (ou Correct/Wrong) + a correção falada
     escolhe           escolher entre opções DIFERENTES (som, sentido, motivo,
                       pessoa); c: -1 = sem resposta certa (opinião)
     liga              ligar a coluna da esquerda à da direita
     separa            tocar o cartão, depois a caixa
     revela            pistas uma a uma; "I know it!" mostra a resposta
     cartas            cartas que viram (perguntas, temas, menu)
     cronometro        relógio para Just a Minute, Taboo, recado de voz
     regua             posição numa régua (opinião, poll)
     contador          contagem (Phrase Hunt, Twenty Questions)
     sorteio           roleta, dado, lado do debate — sem acaso: o mesmo
                       resultado nos dois lados da sala (semente fixa)
     reacao            Choose Your Response: a reação muda a resposta
     twist             o cartão da reviravolta
     usa               Keyword Retell: tocar cada palavra ao usar
   Ações fq2-* (o final.js usa fm-*, o formatos.js usa fq-*).
   ============================================================ */
(function () {
  var FM = window.FM = window.FM || {};
  function E(k, base) { S.fq = S.fq || {}; if (!S.fq[k]) S.fq[k] = JSON.parse(JSON.stringify(base || {})); return S.fq[k]; }
  function hh(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function seg(t) { var p = String(t).split(':'); return p.length > 1 ? (+p[0]) * 60 + (+p[1]) : +t; }
  function pulo(t) { return t == null ? '' : '<button type="button" class="fm-tempo" data-a="fq-pula" data-v="' + seg(t) + '" aria-label="Play the video from ' + t + '"><i aria-hidden="true"></i>' + t + '</button>'; }
  function semente(s) { var x = 17; for (var i = 0; i < s.length; i++) x = (x * 31 + s.charCodeAt(i)) % 10007; return x; }
  function folha(tit, corpo, extra) { return '<div class="fm-folha"><div class="fm-folha-t"><b>' + tit + '</b>' + (extra || '') + '</div>' + corpo + '</div>'; }
  function bt(k, a, i, v, txt, cls) { return '<button type="button" class="f2-bt' + (cls ? ' ' + cls : '') + '" data-a="fq2-' + a + '" data-c="' + k + '" data-n="' + (i == null ? 0 : i) + '"' + (v != null ? ' data-v="' + v + '"' : '') + '>' + txt + '</button>'; }

  FM.verdadeOuMentira = function (k, o) {
    var e = E(k, { r: {} }), rot = o.rotulos || ['True', 'Lie'];
    return folha(o.titulo || 'True or lie? If it’s a lie, say the truth.', '<ol class="fm-linhas">' + o.itens.map(function (x, i) {
      var r = e.r[i], ok = r != null && (r === 't') === !!x.t;
      return '<li><p>' + x.f + '</p>' + pulo(x.tm) + '<span class="f2-par">' + bt(k, 'tf', i, 't', rot[0], r === 't' ? (ok ? 'on' : 'no') : '') + bt(k, 'tf', i, 'l', rot[1], r === 'l' ? (ok ? 'on' : 'no') : '') + '</span>'
        + (r != null ? '<span class="f2-veredito' + (ok ? '' : ' no') + '">' + (ok ? 'Right.' : 'Not quite.') + (x.c ? ' <b>' + x.c + '</b>' : '') + '</span>' : '') + '</li>';
    }).join('') + '</ol>');
  };
  FM.escolhe = function (k, o) {
    var e = E(k, { r: {} });
    return folha(o.titulo || 'Choose.', '<ol class="fm-linhas">' + o.itens.map(function (x, i) {
      var r = e.r[i];
      return '<li><p>' + x.p + '</p>' + pulo(x.tm) + '<span class="f2-ops">' + x.o.map(function (op, j) { return bt(k, 'esc', i, j, op, r === j ? (x.c == null || x.c < 0 ? 'sel' : j === x.c ? 'on' : 'no') : ''); }).join('') + '</span>'
        + (r != null && x.d ? '<span class="f2-veredito' + (x.c >= 0 && r !== x.c ? ' no' : '') + '">' + x.d + '</span>' : '') + '</li>';
    }).join('') + '</ol>');
  };
  FM.liga = function (k, o) {
    var e = E(k, { a: -1, par: {} }), feitos = 0;
    Object.keys(e.par).forEach(function (i) { if (o.pares[i] && e.par[i] === i * 1) feitos++; });
    var dir = o.ordemDireita || o.pares.map(function (_, i) { return i; }).reverse();
    return folha(o.titulo || 'Match them.', '<div class="f2-liga"><div>' + o.pares.map(function (p, i) {
      var v = e.par[i]; return bt(k, 'lA', i, null, p[0], (e.a === i ? 'sel' : '') + (v != null ? (v === i ? ' on' : ' no') : ''));
    }).join('') + '</div><div>' + dir.map(function (j) { var de = -1; Object.keys(e.par).forEach(function (i) { if (e.par[i] === j) de = i * 1; }); return bt(k, 'lB', j, null, o.pares[j][1], de < 0 ? '' : (de === j ? 'on' : 'no')); }).join('') + '</div></div><p class="fm-nota">' + (feitos === o.pares.length ? 'All matched.' : 'Tap one on the left, then its pair on the right.') + '</p>');
  };
  FM.separa = function (k, o) {
    var e = E(k, { sel: -1, em: {} });
    return folha(o.titulo || 'Sort them.', '<div class="f2-soltas">' + o.itens.map(function (x, i) { return e.em[i] != null ? '' : bt(k, 'sS', i, null, x.t, e.sel === i ? 'sel' : ''); }).join('') + '</div>'
      /* 22/10/2026 · a ficha na caixa errada volta com um toque (antes ficava presa no vermelho) */
      + '<div class="f2-caixas">' + o.caixas.map(function (c, j) { return '<div class="f2-caixa" role="button" tabindex="0" data-a="fq2-sC" data-c="' + k + '" data-n="' + j + '"><b>' + c + '</b>' + o.itens.map(function (x, i) { return e.em[i] !== j ? '' : x.c === j ? '<span class="f2-ficha on">' + x.t + '</span>' : '<button type="button" class="f2-ficha no" data-a="fq2-tira" data-c="' + k + '" data-n="' + i + '" title="Tap to take it back">' + x.t + ' ↩</button>'; }).join('') + '</div>'; }).join('') + '</div>');
  };
  FM.revela = function (k, o) {
    var e = E(k, { n: 1, fim: 0 });
    return folha(o.titulo || 'Guess.', '<div class="f2-soltas">' + o.pistas.slice(0, e.n).map(function (x) { return '<span class="f2-ficha">' + x + '</span>'; }).join('') + '</div><div class="fm-acoes">'
      + (e.n < o.pistas.length && !e.fim ? bt(k, 'mais', 0, null, o.mais || 'Next clue', '') : '<span></span>')
      + (e.fim ? '<p class="fm-certa" style="margin:0">' + o.resposta + '</p>' : '<button type="button" class="fm-check" data-a="fq2-fim" data-c="' + k + '"><i aria-hidden="true"></i>' + (o.botao || 'I know it! Show') + '</button>') + '</div>');
  };
  FM.cartas = function (k, o) {
    var e = E(k, { a: {} });
    return folha(o.titulo || 'Tap a card.', '<div class="f2-cartas">' + o.cartas.map(function (c, i) {
      return '<button type="button" class="f2-carta' + (e.a[i] ? ' on' : '') + '" data-a="fq2-vira" data-c="' + k + '" data-n="' + i + '"><small>' + c[0] + '</small><span>' + (e.a[i] ? c[1] : (o.fechada || 'Tap to open')) + '</span></button>';
    }).join('') + '</div>');
  };
  var RELOGIOS = {};
  FM.cronometro = function (k, o) {
    var e = E(k, { on: 0, t: o.segundos });
    return folha(o.titulo || 'Ready?', (o.texto ? '<p class="fm-pista" style="margin:0 0 10px">' + o.texto + '</p>' : '') + '<div class="fm-acoes"><span class="f2-relogio" id="f2r-' + k + '">' + e.t + '</span>' + bt(k, 'crono', 0, o.segundos, e.on ? 'Stop' : 'Start', 'grande') + '</div>');
  };
  FM.regua = function (k, o) {
    var e = E(k, { v: 50 });
    return folha(o.titulo || 'Where are you?', '<p class="fm-pista" style="margin:0">' + o.frase + '</p><div class="f2-regua"><span class="f2-pino" style="left:' + e.v + '%"></span>' + [0, 25, 50, 75, 100].map(function (v) { return '<button type="button" class="f2-ponto" style="left:' + v + '%" data-a="fq2-reg" data-c="' + k + '" data-n="' + v + '" aria-label="' + v + '%"></button>'; }).join('')
      + '<span class="f2-rot" style="left:0">' + (o.esquerda || 'Disagree') + '</span><span class="f2-rot" style="right:0">' + (o.direita || 'Agree') + '</span></div>' + (o.depois ? '<p class="fm-nota">' + o.depois + '</p>' : ''));
  };
  FM.contador = function (k, o) {
    var e = E(k, { n: o.inicio || 0, fim: 0 });
    return folha(o.titulo || 'Count.', '<div class="fm-acoes"><span class="f2-relogio">' + e.n + '</span>' + bt(k, 'conta', 0, o.passo || 1, o.botao || 'Got it!', 'grande') + bt(k, 'fim', 0, null, o.revelar || 'Show the answer', '') + '</div>' + (e.fim ? '<p class="fm-certa">' + o.resposta + '</p>' : ''));
  };
  FM.sorteio = function (k, o) {
    var e = E(k, { n: 0 }), lista = o.opcoes, i = e.n ? (semente(k) + e.n * 7) % lista.length : -1;
    var visor = o.tipo === 'dado' ? '<div class="f2-dados">' + [0, 1, 2].map(function (j) { return '<span>' + (e.n ? lista[(semente(k) + e.n * 7 + j * 5) % lista.length] : '?') + '</span>'; }).join('') + '</div>'
      : '<div class="f2-roda' + (e.n ? ' gira' : '') + '" style="--v:' + (e.n * 900 + i * 47) + 'deg" aria-hidden="true"></div>';
    return folha(o.titulo || 'Spin.', '<div class="f2-sorteio">' + visor + '<div>' + bt(k, 'sorteia', 0, null, o.botao || (o.tipo === 'dado' ? 'Roll' : 'Spin'), 'grande') + (e.n && o.tipo !== 'dado' ? '<p class="fm-certa" style="margin-top:12px">' + lista[i] + '</p>' : '') + '</div></div>');
  };
  FM.reacao = function (k, o) {
    var e = E(k, { r: -1 });
    return folha(o.titulo || 'How do you answer?', '<p class="fm-pista" style="margin:0">' + o.fala + '</p><div class="f2-ops">' + o.reacoes.map(function (r, i) { return bt(k, 'rea', i, null, r[0], e.r === i ? 'sel' : ''); }).join('') + '</div>'
      + (e.r >= 0 ? '<div class="f2-conversa"><p><b>You</b> ' + o.reacoes[e.r][1] + '</p><p><b>' + (o.quem || 'They') + '</b> ' + o.reacoes[e.r][2] + '</p></div>' : ''));
  };
  FM.twist = function (k, o) {
    var e = E(k, { t: 0 });
    return folha(o.titulo || 'Role-play', '<div class="f2-cartas">' + o.cartoes.map(function (c) { return '<div class="f2-carta on"><small>' + c[0] + '</small><span>' + c[1] + '</span></div>'; }).join('') + '</div>'
      + '<div class="fm-acoes">' + (e.t ? '<p class="fm-certa" style="margin:0">' + o.twist + '</p>' : bt(k, 'twist', 0, null, o.botao || 'Reveal the twist', 'grande')) + '</div>');
  };
  FM.usa = function (k, o) {
    var e = E(k, { u: {} }), n = Object.keys(e.u).length;
    return folha(o.titulo || 'Tell the story. Tap each word when you use it.', '<div class="f2-soltas">' + o.palavras.map(function (w, i) { return bt(k, 'usa', i, null, w, e.u[i] ? 'on' : ''); }).join('') + '</div>' + (n === o.palavras.length ? '<p class="fm-certa">' + (o.fim || 'All of them. Great!') + '</p>' : ''));
  };

  /* a porta única: a aula descreve, a peça desenha */
  FM.ex = function (k, def) {
    var f = FM[def.formato]; if (!f) return '<p class="fm-nota">Unknown format: ' + hh(def.formato) + '</p>';
    if (def.formato === 'fala' || def.formato === 'som' || def.formato === 'erro' || def.formato === 'pergunta' || def.formato === 'ordem') return f(k, def.itens, def);
    if (def.formato === 'carta') return f(k, def.carta, def.regra, def);
    if (def.formato === 'ab') return f(k, def.a, def.b);
    if (def.formato === 'reflexao') return f(k, def.perguntas, def.chips);
    return f(k, def);
  };

  var T = {
    'fq2-tf': function (b, n, v, c) { E(c, { r: {} }).r[n] = v; },
    'fq2-esc': function (b, n, v, c) { E(c, { r: {} }).r[n] = +v; },
    'fq2-lA': function (b, n, v, c) { E(c, { a: -1, par: {} }).a = n; },
    'fq2-lB': function (b, n, v, c) { var e = E(c, { a: -1, par: {} }); if (e.a < 0) return false; e.par[e.a] = n; e.a = -1; },
    'fq2-sS': function (b, n, v, c) { E(c, { sel: -1, em: {} }).sel = n; },
    'fq2-sC': function (b, n, v, c) { var e = E(c, { sel: -1, em: {} }); if (e.sel < 0) return false; e.em[e.sel] = n; e.sel = -1; },
    'fq2-tira': function (b, n, v, c) { var e = E(c, { sel: -1, em: {} }); delete e.em[n]; },
    'fq2-mais': function (b, n, v, c) { E(c, { n: 1 }).n++; },
    'fq2-fim': function (b, n, v, c) { E(c, {}).fim = 1; },
    'fq2-vira': function (b, n, v, c) { var e = E(c, { a: {} }); e.a[n] = !e.a[n]; },
    'fq2-reg': function (b, n, v, c) { E(c, { v: 50 }).v = n; },
    'fq2-conta': function (b, n, v, c) { var e = E(c, { n: 0 }); e.n += +v; },
    'fq2-sorteia': function (b, n, v, c) { E(c, { n: 0 }).n++; },
    'fq2-rea': function (b, n, v, c) { E(c, { r: -1 }).r = n; },
    'fq2-twist': function (b, n, v, c) { E(c, {}).t = 1; },
    'fq2-usa': function (b, n, v, c) { E(c, { u: {} }).u[n] = 1; },
    'fq2-crono': function (b, n, v, c) {
      var e = E(c, { on: 0, t: +v });
      if (e.on) { clearInterval(RELOGIOS[c]); e.on = 0; e.t = +v; return; }
      e.on = 1; e.t = +v; clearInterval(RELOGIOS[c]);
      RELOGIOS[c] = setInterval(function () { e.t = Math.max(0, e.t - 1); var el = document.getElementById('f2r-' + c); if (el) el.textContent = e.t; if (!e.t) { clearInterval(RELOGIOS[c]); e.on = 0; } }, 1000);
    }
  };
  function liga() { for (var a in T) TOQUES[a] = T[a]; }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', liga); else liga();

  var css = [
    '.f2-bt{border:1px solid var(--fio2);background:var(--vidro2);color:var(--t1);border-radius:999px;padding:7px 15px;font:700 14.5px var(--ui);transition:background .15s,border-color .15s}',
    '.f2-bt:hover{border-color:var(--ac)}.f2-bt.grande{padding:12px 24px;font-size:16px;background:var(--ac);border-color:var(--ac);color:var(--pl-sobre-ac,#140f1c)}',
    '.f2-bt.on{background:rgba(96,200,135,.2);border-color:#60c887;color:#dcf6e5}.f2-bt.no{background:rgba(255,110,110,.16);border-color:#ff6e6e;color:#ffdcd6}.f2-bt.sel{border-color:var(--ac);box-shadow:0 0 0 2px var(--ac)}',
    '.f2-par,.f2-ops{display:inline-flex;flex-wrap:wrap;gap:6px;flex:0 1 auto;max-width:100%}',
    '.f2-veredito{flex-basis:100%;font:600 14.5px var(--ui);color:#bfeccd}.f2-veredito.no{color:#ffc9c2}.f2-veredito b{color:var(--t1)}',
    '.fm-linhas li{flex-wrap:wrap}.fm-linhas li p{flex:1 1 260px}',
    '.f2-liga{display:grid;grid-template-columns:1fr 1fr;gap:16px}.f2-liga>div{display:grid;gap:8px;align-content:start}.f2-liga .f2-bt{border-radius:12px;text-align:left}',
    '.f2-soltas{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}',
    '.f2-ficha{display:inline-block;border:1px solid var(--fio2);background:var(--vidro2);border-radius:10px;padding:6px 12px;font:600 14.5px var(--ui)}.f2-ficha.on{border-color:#60c887}.f2-ficha.no{border-color:#ff6e6e}',
    '.f2-caixas{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}.f2-caixa{min-height:120px;border:1.5px dashed var(--fio2);border-radius:16px;padding:12px;display:flex;flex-direction:column;align-items:flex-start;gap:6px;background:transparent;color:var(--t1);text-align:left}.f2-caixa b{font:700 14px var(--ui);color:var(--ac)}.f2-caixa:hover{border-color:var(--ac)}',
    '.f2-cartas{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px}.f2-carta{min-height:120px;border-radius:16px;border:1px solid var(--fio2);background:var(--vidro2);padding:14px;text-align:left;display:flex;flex-direction:column;justify-content:space-between;gap:8px;color:var(--t1);font:600 15.5px/1.4 var(--ui)}.f2-carta small{font:700 11.5px var(--ui);letter-spacing:.1em;text-transform:uppercase;color:var(--t3)}.f2-carta.on{border-color:var(--ac);background:linear-gradient(180deg,color-mix(in srgb,var(--ac) 14%,transparent),transparent),var(--vidro2)}',
    '.f2-relogio{font:700 56px/1 var(--disp);font-variant-numeric:tabular-nums;min-width:90px}',
    '.f2-regua{position:relative;height:64px;margin:14px 12px 4px}.f2-regua::before{content:"";position:absolute;left:0;right:0;top:26px;height:5px;border-radius:3px;background:linear-gradient(90deg,#ff6e6e,var(--am,#f0b866),#60c887)}',
    '.f2-ponto{position:absolute;top:16px;width:26px;height:26px;margin-left:-13px;border-radius:50%;border:2px solid var(--fio2);background:var(--vidro2)}.f2-pino{position:absolute;top:12px;width:34px;height:34px;margin-left:-17px;border-radius:50%;background:var(--t1);box-shadow:0 4px 14px rgba(0,0,0,.6);pointer-events:none;transition:left .3s;z-index:1}.f2-rot{position:absolute;top:48px;font:600 12px var(--ui);color:var(--t3)}',
    '.f2-sorteio{display:flex;gap:24px;align-items:center;flex-wrap:wrap}.f2-roda{width:170px;height:170px;border-radius:50%;background:conic-gradient(color-mix(in srgb,var(--ac) 50%,#1a1625) 0 60deg,#25313a 60deg 120deg,#3a2c22 120deg 180deg,color-mix(in srgb,var(--ac) 50%,#1a1625) 180deg 240deg,#25313a 240deg 300deg,#3a2c22 300deg);border:4px solid var(--fio2);transform:rotate(var(--v,0deg));transition:transform 1.4s cubic-bezier(.2,.8,.2,1)}',
    '.f2-dados{display:flex;gap:12px}.f2-dados span{width:78px;height:78px;border-radius:16px;background:var(--vidro2);border:1px solid var(--fio2);display:grid;place-items:center;font-size:36px}',
    '.f2-conversa{display:grid;gap:8px;margin-top:12px}.f2-conversa p{margin:0;padding:10px 14px;border-radius:14px;background:var(--vidro2);font:500 16px/1.5 var(--ui)}.f2-conversa p:last-child{background:color-mix(in srgb,var(--ac) 14%,transparent)}.f2-conversa b{color:var(--ac);margin-right:6px}',
    '@media (max-width:760px){.f2-liga{grid-template-columns:1fr}}',
    '@media (prefers-reduced-motion:reduce){.f2-roda,.f2-pino{transition:none}}'
  ].join('');
  var st = document.createElement('style'); st.textContent = css; (document.head || document.documentElement).appendChild(st);
})();
