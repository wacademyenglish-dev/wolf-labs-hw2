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
   10/11/2026 · lista de 3+ perguntas = UM CARTÃO POR VEZ (FM.cartoes, toque fq-cd, S.fq[k].n; classes fm-cd-*).
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

  /* ---------- 10/11/2026 · UM CARTÃO POR VEZ (pedido do Carlos depois de uma aula: "as perguntas do vídeo,
     tem que ficar rolando para baixo… respondeu, vai para o próximo card, botão Next e Previous") ----------
     Lista com 3 itens ou mais (som, pergunta, verdadeOuMentira, escolhe) vira um cartão por vez. O cartão da
     vez é ESTADO: S.fq[k].n, mudado pelo toque fq-cd (data-n = o cartão de destino; o nome não termina em
     -prox de propósito, senão o motor poria outro ‹ Previous). As respostas continuam onde sempre estiveram
     (S.fq[k].r / .esc / .ver). Os outros cartões ficam empilhados e invisíveis no mesmo lugar (já com a linha
     da correção), só para a altura ser a do mais alto e nada pular. { lista: true } na definição volta à lista. */
  function mudo(s) { return String(s).replace(/\sdata-a="/g, ' data-mudo="'); }
  FM.emCartoes = function (itens, op) { return !!itens && itens.length >= 3 && !(op && op.lista); };
  /* lis: [{ h: '<li>…</li>' como está agora, g: o mesmo <li> no estado mais alto (com a correção), ok: respondido }] */
  FM.cartoes = function (k, e, lis, rot) {
    var N = lis.length, n = Math.max(0, Math.min(N - 1, e.n | 0)), feito = !!lis[n].ok;
    var dots = lis.map(function (x, i) {
      return '<button type="button" class="fm-cd-dot' + (x.ok ? ' fm-cd-f' : '') + (i === n ? ' fm-cd-v' : '') + '" data-a="fq-cd" data-c="' + k + '" data-n="' + i + '" aria-label="' + (i + 1) + ' of ' + N + (x.ok ? ', answered' : '') + '"' + (i === n ? ' aria-current="step"' : '') + '></button>';
    }).join('');
    return '<div class="fm-cd" data-fmcd="' + k + '" data-n="' + n + '">'
      + '<div class="fm-cd-topo"><span class="fm-cd-rot">' + (rot || 'Question') + '<b>' + (n + 1) + '</b><i>/ ' + N + '</i></span><div class="fm-cd-dots">' + dots + '</div></div>'
      + '<div class="fm-cd-pilha"><ol class="fm-linhas fm-cd-um fm-cd-vivo">' + lis[n].h + '</ol>'
      + lis.map(function (x) { return '<ol class="fm-linhas fm-cd-um fm-cd-fan" aria-hidden="true" inert>' + mudo(x.g || x.h) + '</ol>'; }).join('') + '</div>'
      + '<div class="fm-cd-pe"><button type="button" class="fm-cd-bt fm-cd-ant" data-a="fq-cd" data-c="' + k + '" data-n="' + (n - 1) + '"' + (n ? '' : ' disabled') + '>Previous</button>'
      + (n + 1 < N ? '<button type="button" class="fm-cd-bt fm-cd-prox' + (feito ? ' fm-cd-cheio' : '') + '" data-a="fq-cd" data-c="' + k + '" data-n="' + (n + 1) + '">Next</button>'
        : '<button type="button" class="fm-cd-bt fm-cd-fim' + (feito ? ' fm-cd-cheio' : '') + '" aria-disabled="true">Done</button>') + '</div></div>';
  };
  /* a passagem entre cartões: a cena repinta inteira a cada toque, então a classe do movimento entra DEPOIS de pintar,
     e só quando o cartão mudou (responder não mexe o cartão). Se o estado do professor chega logo em seguida e a cena
     repinta de novo, o movimento continua de onde estava. Motor antigo sem WL_PECAS: troca seca, sem erro. */
  var VISTO = {};
  (window.WL_PECAS = window.WL_PECAS || []).push(function (palco) {
    [].forEach.call(palco.querySelectorAll('.fm-cd[data-fmcd]'), function (el) {
      var k = el.getAttribute('data-fmcd'), n = +el.getAttribute('data-n'), a = VISTO[k], agora = Date.now(), vivo = el.querySelector('.fm-cd-vivo');
      if (a && a.cena === S.i && a.n !== n) a = VISTO[k] = { cena: S.i, n: n, dir: n > a.n ? 'fm-cd-vd' : 'fm-cd-ve', t: agora };
      else if (!a || a.cena !== S.i) a = VISTO[k] = { cena: S.i, n: n };
      if (vivo && a.dir && agora - a.t < 300) { vivo.classList.add(a.dir); if (agora > a.t) vivo.style.animationDelay = (a.t - agora) + 'ms'; }
    });
  });

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
    op = op || {}; var e = E(k, { esc: {} }); e.esc = e.esc || {};
    var feitos = 0; itens.forEach(function (x, i) { if (e.esc[i] === x.c) feitos++; });
    var cd = FM.emCartoes(itens, op);
    var lis = itens.map(function (x, i) {
      return { h: '<li><p>' + (x.a || '') + par(k, 'fq-par', i, x.par, x.c, e.esc[i]) + (x.b || '') + '</p>' + pulo(x.t) + '</li>', ok: e.esc[i] === x.c };
    });
    return com(op.regra, '<div class="fm-folha' + (cd ? ' fm-tem-cd' : '') + '"><div class="fm-folha-t"><b>' + (op.titulo || 'Which word did you hear?') + '</b><span>' + feitos + ' of ' + itens.length + '</span></div>'
      + (cd ? FM.cartoes(k, e, lis, op.rotulo || 'Sentence') : '<ol class="fm-linhas">' + lis.map(function (x) { return x.h; }).join('') + '</ol>')
      + '<p class="fm-nota">' + (op.nota || 'Not sure? Tap the time and listen again.') + '</p></div>');
  };

  /* ---------- uma palavra está errada ---------- */
  FM.erro = function (k, itens, op) {
    op = op || {}; var e = E(k, { ver: 0 });
    /* 10/11 · em cartões o Check continua um só (mostra todas as trocas): fala-se a correção de cada cartão e confere no fim */
    var cd = FM.emCartoes(itens, op);
    var lis = itens.map(function (x) {
      function li(ver) { return '<li><p>' + x.f.replace(/<u>(.*?)<\/u>/, ver ? '<s class="fm-riscada">$1</s> <span class="fm-troca">' + x.r + '</span>' : '<span class="fm-errada">$1</span>') + '</p>' + pulo(x.t) + '</li>'; }
      return { h: li(e.ver), g: li(1), ok: !!e.ver };
    });
    return com(op.regra, '<div class="fm-folha' + (cd ? ' fm-tem-cd' : '') + '"><div class="fm-folha-t"><b>' + (op.titulo || 'One word is wrong. Say the right one.') + '</b></div>'
      + (cd ? FM.cartoes(k, e, lis, op.rotulo || 'Sentence') : '<ol class="fm-linhas">' + lis.map(function (x) { return x.h; }).join('') + '</ol>') + (e.ver ? '' : '<div class="fm-acoes"><span class="fm-diga"><i class="fm-boca" aria-hidden="true"></i>Say all the fixes first</span><button type="button" class="fm-check" data-a="fq-ver" data-c="' + k + '"><i aria-hidden="true"></i>Check</button></div>') + '</div>');
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
    op = op || {}; var e = E(k, { ver: {} }); if (!e.ver || typeof e.ver !== 'object') e.ver = {};
    var cd = FM.emCartoes(itens, op);
    var lis = itens.map(function (x, i) {
      var bt = '<button type="button" class="fm-check mini" data-a="fq-q" data-c="' + k + '" data-n="' + i + '"><i aria-hidden="true"></i>Check</button>';
      return { ok: !!e.ver[i],
        /* no cartão a classe é fm-cd-aberta: há aula com um .aberta próprio (a foto 16:9 da Hollywood) que desmontava a linha respondida */
        h: '<li class="' + (e.ver[i] ? (cd ? 'fm-cd-aberta' : 'aberta') : '') + '"><p><span class="fm-molde">' + x.p + '</span>' + (e.ver[i] ? '<span class="fm-certa-l">' + x.r + '</span>' : '') + '</p>' + (e.ver[i] ? '' : bt) + '</li>',
        g: '<li><p><span class="fm-molde">' + x.p + '</span><span class="fm-certa-l">' + x.r + '</span></p>' + bt + '</li>' };
    });
    return com(op.regra, '<div class="fm-folha' + (cd ? ' fm-tem-cd' : '') + '"><div class="fm-folha-t"><b>' + (op.titulo || 'Build the question. Ask your teacher.') + '</b></div>'
      + (cd ? FM.cartoes(k, e, lis, op.rotulo || 'Question') : '<ol class="fm-linhas">' + lis.map(function (x) { return x.h; }).join('') + '</ol>') + (op.depois ? '<div class="fm-depois-chips"><span>' + (op.depoisRot || 'Then compare') + '</span>' + op.depois.map(function (f) { return '<em>' + f + '</em>'; }).join('') + '</div>' : '') + '</div>');
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
    'fq-q': function (b, n, v, c) { var e = E(c, { ver: {} }); if (!e.ver || typeof e.ver !== 'object') e.ver = {}; e.ver[n] = 1; },
    /* 10/11 · o cartão da vez (Previous, Next e as bolinhas): só muda S.fq[c].n, as respostas ficam */
    'fq-cd': function (b, n, v, c) { var e = S.fq && S.fq[c]; if (!e || !(n >= 0) || (e.n | 0) === n) return false; e.n = n; },
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
    /* 10/11 · um cartão por vez: a folha de vidro da aula vira o cartão (a pele já veste a .fm-folha); fio fino na cor da aula no alto,
       número grande na fonte de título, bolinhas, e o pé com Previous (fantasma) e Next (cheio quando o cartão foi respondido) */
    '.fm-folha.fm-tem-cd{position:relative;padding:22px 28px 20px}',
    '.fm-folha.fm-tem-cd::after{content:"";position:absolute;left:28px;right:28px;top:0;height:1px;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--ac2,var(--ac)) 75%,transparent),transparent);pointer-events:none}',
    '.fm-cd{display:grid;gap:14px;margin-top:12px;min-width:0}',
    '.fm-cd-topo{display:flex;align-items:center;justify-content:space-between;gap:10px 16px;flex-wrap:wrap;padding-bottom:12px;border-bottom:1px solid var(--fio)}',
    '.fm-cd-rot{display:inline-flex;align-items:baseline;gap:9px;font:800 11.5px/1 var(--ui);letter-spacing:.18em;text-transform:uppercase;color:var(--t3)}',
    '.fm-cd-rot b{font:italic 700 30px/1 var(--disp);letter-spacing:0;color:var(--ac2,var(--ac));font-variant-numeric:tabular-nums}',
    '.fm-cd-rot i{font:700 14px/1 var(--ui);font-style:normal;letter-spacing:.04em;color:var(--t3);font-variant-numeric:tabular-nums}',
    '.fm-cd-dots{display:flex;flex-wrap:wrap;gap:2px}',
    '.fm-cd-dot{width:28px;height:28px;padding:0;border:0;border-radius:50%;background:transparent;display:grid;place-items:center;cursor:pointer}',
    '.fm-cd-dot::before{content:"";width:10px;height:10px;border-radius:50%;box-shadow:inset 0 0 0 1.5px var(--fio2);transition:background .2s,box-shadow .2s,transform .2s}',
    '.fm-cd-dot:hover::before{transform:scale(1.25)}',
    '.fm-cd-dot.fm-cd-f::before{background:var(--ac2,var(--ac));box-shadow:none}',
    '.fm-cd-dot.fm-cd-v::before{outline:1.5px solid var(--ac2,var(--ac));outline-offset:4px}',
    '.fm-cd-pilha{display:grid;align-items:start;min-width:0}',
    '.fm-cd-pilha>ol{grid-area:1/1;min-width:0}',
    '.fm-cd-fan{visibility:hidden;pointer-events:none}.fm-cd-fan *{animation:none!important}',
    '.fm-cd ol.fm-linhas.fm-cd-um>li{display:flex;flex-direction:column;flex-wrap:nowrap;align-items:flex-start;gap:14px;padding:6px 0 4px;border-top:0}',
    '.fm-cd ol.fm-linhas.fm-cd-um>li::before{display:none}',
    '.fm-cd ol.fm-linhas.fm-cd-um>li>*{flex:none;max-width:100%}',
    '.fm-cd ol.fm-linhas.fm-cd-um>li>p{width:100%;font:600 clamp(19px,1.5vw,25px)/1.5 var(--ui);color:var(--t1)}',
    '.fm-cd ol.fm-linhas.fm-cd-um>li .f2-ops,.fm-cd ol.fm-linhas.fm-cd-um>li .f2-par{gap:9px;margin-top:0}',
    '.fm-cd ol.fm-linhas.fm-cd-um>li .f2-bt{padding:10px 18px;font-size:15.5px;line-height:1.3;text-align:left}',
    '.fm-cd ol.fm-linhas.fm-cd-um>li>.f2-veredito{width:100%;margin-top:0;padding-top:12px;border-top:1px dashed var(--fio2);font-size:15.5px;line-height:1.5}',
    /* os dois botões juntos à esquerda: no canto de baixo à direita mora o Surprise question do professor, que cobria o Next */
    '.fm-cd-pe{display:flex;align-items:center;justify-content:flex-start;gap:10px;padding-top:14px;border-top:1px solid var(--fio)}',
    '.fm-cd .fm-cd-pe>.fm-cd-bt{flex:0 0 auto;width:auto}','.fm-cd-bt{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:46px;padding:0 22px;border-radius:999px;border:1px solid var(--fio2);background:transparent;color:var(--t2);font:700 15px/1 var(--ui);letter-spacing:.01em;cursor:pointer;transition:background .2s,color .2s,border-color .2s,box-shadow .2s,transform .15s}',
    '.fm-cd-bt:hover{border-color:var(--ac2,var(--ac));color:var(--t1)}.fm-cd-bt:active{transform:translateY(1px)}',
    '.fm-cd-bt[disabled]{opacity:.32;cursor:default;pointer-events:none}',
    '.fm-cd-bt.fm-cd-ant::before,.fm-cd-bt.fm-cd-prox::after{content:"";width:7px;height:7px;border:solid currentColor;border-width:0 0 2px 2px;transform:rotate(45deg)}',
    '.fm-cd-bt.fm-cd-prox::after{transform:rotate(-135deg)}',
    '.fm-cd-bt.fm-cd-cheio{background:var(--ac);border-color:var(--ac);color:var(--pl-sobre-ac,#fff);box-shadow:0 10px 28px color-mix(in srgb,var(--ac) 38%,transparent),inset 0 1px 0 rgba(255,255,255,.18)}',
    '.fm-cd-bt.fm-cd-cheio:hover{color:var(--pl-sobre-ac,#fff);transform:translateY(-1px)}',
    '.fm-cd-bt.fm-cd-fim{cursor:default}.fm-cd-bt.fm-cd-fim:hover{transform:none;border-color:var(--fio2);color:var(--t2)}.fm-cd-bt.fm-cd-fim.fm-cd-cheio:hover{border-color:var(--ac);color:var(--pl-sobre-ac,#fff)}',
    '.fm-cd-bt.fm-cd-fim.fm-cd-cheio::before{content:"";width:6px;height:11px;margin:-3px 2px 0 0;border:solid currentColor;border-width:0 2.5px 2.5px 0;transform:rotate(45deg)}',
    '.fm-folha.fm-tem-cd>.fm-acoes,.fm-folha.fm-tem-cd>.fm-depois-chips{margin-top:14px}',
    '.fm-cd button:focus-visible{outline:2px solid var(--ac2,var(--ac));outline-offset:3px}',
    '.fm-cd-vivo.fm-cd-vd{animation:fm-cd-d .28s cubic-bezier(.2,.7,.2,1) both}.fm-cd-vivo.fm-cd-ve{animation:fm-cd-e .28s cubic-bezier(.2,.7,.2,1) both}',
    '@keyframes fm-cd-d{from{opacity:0;transform:translateX(26px)}to{opacity:1;transform:none}}',
    '@keyframes fm-cd-e{from{opacity:0;transform:translateX(-26px)}to{opacity:1;transform:none}}',
    '@media (max-width:640px){.fm-folha.fm-tem-cd{padding:18px 16px 16px}.fm-cd-bt{padding:0 18px}.fm-cd-rot b{font-size:26px}}',
    '@media (prefers-reduced-motion:reduce){.fm-cd-vivo.fm-cd-vd,.fm-cd-vivo.fm-cd-ve{animation:none}.fm-cd-dot::before,.fm-cd-bt{transition:none}}',
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
  /* 10/11/2026 · lista de 3+ itens = um cartão por vez (FM.cartoes, no formatos.js); 1 ou 2 itens, ou { lista: true }, seguem em lista */
  function lista(k, e, o, tit, lis, rot) {
    if (FM.cartoes && FM.emCartoes && FM.emCartoes(o.itens, o)) return '<div class="fm-folha fm-tem-cd"><div class="fm-folha-t"><b>' + tit + '</b></div>' + FM.cartoes(k, e, lis, o.rotulo || rot) + '</div>';
    return folha(tit, '<ol class="fm-linhas">' + lis.map(function (x) { return x.h; }).join('') + '</ol>');
  }
  function bt(k, a, i, v, txt, cls) { return '<button type="button" class="f2-bt' + (cls ? ' ' + cls : '') + '" data-a="fq2-' + a + '" data-c="' + k + '" data-n="' + (i == null ? 0 : i) + '"' + (v != null ? ' data-v="' + v + '"' : '') + '>' + txt + '</button>'; }

  FM.verdadeOuMentira = function (k, o) {
    var e = E(k, { r: {} }), rot = o.rotulos || ['True', 'Lie']; e.r = e.r || {};
    var lis = o.itens.map(function (x, i) {
      var r = e.r[i], ok = r != null && (r === 't') === !!x.t;
      var corpo = '<li><p>' + x.f + '</p>' + pulo(x.tm) + '<span class="f2-par">' + bt(k, 'tf', i, 't', rot[0], r === 't' ? (ok ? 'on' : 'no') : '') + bt(k, 'tf', i, 'l', rot[1], r === 'l' ? (ok ? 'on' : 'no') : '') + '</span>';
      return { ok: r != null, h: corpo + (r != null ? '<span class="f2-veredito' + (ok ? '' : ' no') + '">' + (ok ? 'Right.' : 'Not quite.') + (x.c ? ' <b>' + x.c + '</b>' : '') + '</span>' : '') + '</li>',
        g: corpo + '<span class="f2-veredito">Not quite.' + (x.c ? ' <b>' + x.c + '</b>' : '') + '</span></li>' };
    });
    return lista(k, e, o, o.titulo || 'True or lie? If it’s a lie, say the truth.', lis, 'Statement');
  };
  FM.escolhe = function (k, o) {
    var e = E(k, { r: {} }); e.r = e.r || {};
    var lis = o.itens.map(function (x, i) {
      var r = e.r[i];
      var corpo = '<li><p>' + x.p + '</p>' + pulo(x.tm) + '<span class="f2-ops">' + x.o.map(function (op, j) { return bt(k, 'esc', i, j, op, r === j ? (x.c == null || x.c < 0 ? 'sel' : j === x.c ? 'on' : 'no') : ''); }).join('') + '</span>';
      return { ok: r != null, h: corpo + (r != null && x.d ? '<span class="f2-veredito' + (x.c >= 0 && r !== x.c ? ' no' : '') + '">' + x.d + '</span>' : '') + '</li>',
        g: corpo + (x.d ? '<span class="f2-veredito">' + x.d + '</span>' : '') + '</li>' };
    });
    return lista(k, e, o, o.titulo || 'Choose.', lis, 'Question');
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

/* ============================================================
   KIT LIVE CLASS · FORMATOS, PARTE 3 · AS EXPLICAÇÕES (GX)   10/11/2026
   O Carlos aprovou o catálogo CATALOGO-EXPLICACOES.html inteiro: "use
   todos, cada um numa aula diferente". Catorze jeitos de EXPLICAR a
   gramática, 100% em inglês (o botão PT do aluno A1/A2 continua igual,
   fora daqui). Embaixo de cada bloco vai a FUNÇÃO (WHO, ACTION, WHEN),
   nunca a tradução. Toda explicação anda em três passos: SEE (o exemplo)
   → NOTICE (o que muda) → USE (o aluno monta ou fala uma frase dele).
   O desenho dos blocos é o do Global Payments (gpBlocos / gpCartao, "o
   jeito do app de japonês do Carlos"), sem a linha em português.
   Vai COLADO depois do formatos.js + formatos2.js (kit/monta_formatos.py
   e kit/cartoes_perguntas.py montam o formatos-kit.js). A aula descreve:
     FM.ex('chave', { formato: 'blocos', ... })
       G1  blocos         os blocos coloridos com a função embaixo + montar
       G2  linhaTempo     a frase vai para o ponto certo da linha do tempo
       G3  certoErrado    o certo ao lado do errado: tocar no certo
       G4  tresUsos       três usos lado a lado + classificar frases novas
       G5  contraste      duas mini-conversas: o que muda na situação?
       G6  escada         a frase sobe um degrau por toque
       G7  vira           as palavras trocam de lugar (a pergunta que vira)
       G8  respostaCurta  pergunta + Yes / No curtos, pingue-pongue
       G9  dialogoAceso   conversa com o alvo aceso: tocar abre o porquê
       G10 achaRegra      três exemplos, o aluno escolhe a regra
       G11 som2           pares de som com ▶ (voz do navegador, de graça)
       G12 fotoPrimeiro   a foto dá o sentido, a frase aparece dentro dela
       G13 regraBolso     a regra de bolso: fica no canto nas cenas seguintes
       G14 cacaErro       achar a palavra errada, falar o certo, conferir
   Todo toque é data-a="gx-*" e muda só S.fq[chave]: o toque viaja na sala
   e os dois lados repintam igual. Nenhum nome termina em -prox (o motor
   poria outro ‹ Previous). Listas de 3+ itens: um cartão por vez
   (FM.cartoes, do formatos.js), como o resto do kit desde 10/11.
   Cores só dos tokens da aula (--ac --ac2 --am --l --o --w --f, vidro,
   fontes): serve em toda pele. Papel escuro. Sem emoji.
   ============================================================ */
(function () {
  var FM = window.FM = window.FM || {};
  function E(k, base) { S.fq = S.fq || {}; if (!S.fq[k]) S.fq[k] = JSON.parse(JSON.stringify(base || {})); var e = S.fq[k]; for (var p in base) if (e[p] == null) e[p] = JSON.parse(JSON.stringify(base[p])); return e; }
  function hh(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function sem(s) { return String(s == null ? '' : s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(); }
  function bt(a, k, n, v, txt, cls, extra) { return '<button type="button" class="' + (cls || 'f2-bt') + '" data-a="' + a + '" data-c="' + k + '"' + (n != null ? ' data-n="' + n + '"' : '') + (v != null ? ' data-v="' + hh(v) + '"' : '') + (extra || '') + '>' + txt + '</button>'; }
  var OK = '<svg class="fm-gx-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var NO = '<svg class="fm-gx-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>';
  var PLAY = '<svg class="fm-gx-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z" fill="currentColor"/></svg>';
  var SETA = '<svg class="fm-gx-seta" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v14M3 14l4 4 4-4M17 20V6M13 10l4-4 4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- as peças comuns ---------- */
  /* a função de cada bloco escolhe a cor (tokens da aula) */
  function tipo(f) {
    f = String(f || '').toUpperCase();
    if (/WHO|PERSON|SUBJECT|THEY|PEOPLE/.test(f)) return 'quem';
    if (/WHEN|TIME|HOW LONG/.test(f)) return 'quando';
    if (/WHERE|PLACE/.test(f)) return 'onde';
    if (/ACTION|VERB|DO/.test(f)) return 'acao';
    if (/QUESTION|ASK/.test(f)) return 'q';
    if (/WHAT|THING|OBJECT|WHO\?/.test(f)) return 'o';
    if (/HOW|WAY/.test(f)) return 'como';
    return 'aux';
  }
  function bloco(x) { var k = x[2] || tipo(x[1]); return '<span class="fm-gx-b fm-gx-k-' + k + '"><b>' + x[0] + '</b>' + (x[1] ? '<i>' + x[1] + '</i>' : '') + '</span>'; }
  function blocos(b) { return '<div class="fm-gx-blocos" lang="en">' + b.map(bloco).join('') + '</div>'; }
  FM.gxBlocos = blocos;
  /* see → notice → use: a faixa dos três passos no alto */
  function passos(f) {
    return '<ol class="fm-gx-passos" aria-label="See, notice, use">' + ['See', 'Notice', 'Use'].map(function (t, i) {
      return '<li class="' + (i < f ? 'feito' : i === f ? 'agora' : '') + '"' + (i === f ? ' aria-current="step"' : '') + '><b>' + (i + 1) + '</b>' + t + '</li>';
    }).join('') + '</ol>';
  }
  function topo(tit, f, extra) { return '<div class="fm-folha-t fm-gx-cab"><b>' + tit + '</b>' + (extra || '') + '</div>' + passos(f); }
  function folha(cls, tit, f, corpo, o) { return '<div class="fm-folha fm-gx ' + cls + '">' + topo(tit, f) + corpo + (o && o.prof ? '<p class="so-prof dica-aluno fm-gx-prof">' + o.prof + '</p>' : '') + '</div>'; }
  /* o NOTICE: uma linha só, aberta com um toque (ou sozinha quando o aluno termina) */
  function nota(k, e, o, sozinha) {
    if (!o.nota) return '';
    if (e.nota || sozinha) return '<div class="fm-gx-nota"><span>Notice</span><p>' + o.nota + '</p></div>';
    return '<div class="fm-gx-nota-bt">' + bt('gx-nota', k, 0, null, '<i aria-hidden="true"></i>' + (o.notaBotao || 'What do you notice?'), 'fm-bt fm-gx-bt') + '</div>';
  }
  /* o USE: a frase do aluno (o texto viaja na sala pelo data-campo), os moldes, e um exemplo atrás do botão */
  function uso(k, e, u) {
    if (!u) return '';
    var campo = 'gx-' + k; S.txt = S.txt || {};
    return '<div class="fm-gx-uso"><span class="fm-gx-uso-t">Your turn</span><p class="fm-gx-uso-p">' + String(u.p).replace(/^Your turn[.:!]?\s*/i, '') + '</p>'
      + (u.molde ? '<div class="fm-gx-moldes">' + [].concat(u.molde).map(function (m) { return '<em>' + m + '</em>'; }).join('') + '</div>' : '')
      + '<input class="fm-gx-campo" type="text" data-campo="' + campo + '" value="' + hh(S.txt[campo] || '') + '" placeholder="' + hh(u.ph || 'Write your sentence. Then say it out loud.') + '" autocomplete="off" aria-label="Your sentence">'
      + '<div class="fm-gx-uso-pe"><span class="fm-diga"><i class="fm-boca" aria-hidden="true"></i>Say it out loud</span>'
      + (u.ex ? (e.ex ? '<p class="fm-gx-ex"><small>One way to say it</small>' + u.ex + '</p>' : bt('gx-ex', k, 0, null, 'Show an example', 'fm-bt fm-gx-bt-ex')) : '') + '</div></div>';
  }
  /* a lista: 3+ itens = um cartão por vez (FM.cartoes); 1 ou 2 seguem em lista */
  function lista(k, e, o, itens, lis, rot) {
    if (FM.cartoes && FM.emCartoes && FM.emCartoes(itens, o)) return '<div class="fm-gx-cd">' + FM.cartoes(k, e, lis, o.rotulo || rot) + '</div>';
    return '<ol class="fm-linhas fm-gx-linhas">' + lis.map(function (x) { return x.h; }).join('') + '</ol>';
  }
  function fase(viu, notou) { return notou ? 2 : viu ? 1 : 0; }

  /* ---------- G1 · BLOCKS: o inglês em cima, a função embaixo; depois montar ---------- */
  FM.blocos = function (k, o) {
    var e = E(k, { sel: [], ok: 0, nota: 0, ex: 0 }), M = o.monta;
    var corpo = '<div class="fm-gx-frases">' + o.frases.map(function (f) { return '<div class="fm-gx-frase">' + blocos(f.b) + (f.d ? '<p class="fm-gx-dito">' + f.d + '</p>' : '') + '</div>'; }).join('') + '</div>';
    corpo += nota(k, e, o);
    if (e.nota && M) {
      var feita = e.sel.length === M.pecas.length, certa = e.ok === 1;
      corpo += '<div class="fm-gx-monta' + (certa ? ' certa' : e.ok === -1 ? ' nao' : '') + '"><span class="fm-gx-uso-t">Build it</span><p class="fm-gx-uso-p">' + (M.p || 'Tap the blocks in order.') + '</p>'
        + '<div class="fm-gx-trilho" lang="en">' + (e.sel.length ? e.sel.map(function (i) { var x = M.pecas[i]; return '<button type="button" class="fm-gx-peca on fm-gx-k-' + (x[2] || tipo(x[1])) + '" data-a="gx-tira" data-c="' + k + '" data-n="' + i + '"' + (certa ? ' disabled' : '') + '><b>' + x[0] + '</b><i>' + (x[1] || '') + '</i></button>'; }).join('') : '<span class="fm-gx-vazio">Tap the blocks below</span>') + '</div>'
        + '<div class="fm-gx-bandeja" lang="en">' + M.pecas.map(function (x, i) { return e.sel.indexOf(i) >= 0 ? '' : '<button type="button" class="fm-gx-peca fm-gx-k-' + (x[2] || tipo(x[1])) + '" data-a="gx-poe" data-c="' + k + '" data-n="' + i + '"><b>' + x[0] + '</b><i>' + (x[1] || '') + '</i></button>'; }).join('') + '</div>'
        + '<div class="fm-acoes">' + (certa ? '<span class="fm-ok">' + OK + ' Right. Now say it out loud.</span>' : e.ok === -1 ? '<span class="fm-gx-nao">Not yet. Look at the colors above and try again.</span>' : '<span></span>')
        + '<span class="fm-gx-acoes-d">' + (e.sel.length && !certa ? bt('gx-limpa', k, 0, null, 'Clear', 'fm-bt') : '') + (feita && !certa ? '<button type="button" class="fm-check mini" data-a="gx-conf" data-c="' + k + '"><i aria-hidden="true"></i>Check</button>' : '') + '</span></div></div>';
    }
    if (e.nota && (!M || e.ok === 1)) corpo += uso(k, e, o.uso);
    return folha('fm-gx-g1', o.titulo || 'Look at the blocks. Each one has a job.', e.nota ? 2 : e.sel.length ? 1 : 0, corpo, o);
  };

  /* ---------- G2 · TIMELINE: a frase vai para o ponto certo ---------- */
  FM.linhaTempo = function (k, o) {
    var e = E(k, { sel: -1, pos: {}, nota: 0, ex: 0 }), N = o.marcos.length, certas = 0;
    o.frases.forEach(function (f, i) { if (e.pos[i] === f.c) certas++; });
    var tudo = certas === o.frases.length;
    var soltas = o.frases.map(function (f, i) { return e.pos[i] != null ? '' : bt('gx-tl-s', k, i, null, '<span>' + f.f + '</span>', 'fm-gx-chip' + (e.sel === i ? ' sel' : '')); }).join('');
    var linha = '<div class="fm-gx-tl" style="--n:' + N + '"><div class="fm-gx-tl-fio" aria-hidden="true"></div>' + o.marcos.map(function (m, j) {
      var aqui = o.frases.map(function (f, i) {
        if (e.pos[i] !== j) return '';
        return f.c === j ? '<span class="fm-gx-chip on">' + f.f + (f.d ? '<small>' + f.d + '</small>' : '') + '</span>' : bt('gx-tl-tira', k, i, null, f.f + ' <span aria-hidden="true">↩</span>', 'fm-gx-chip no', ' title="Not here. Tap to take it back."');
      }).join('');
      return '<div class="fm-gx-tl-col">' + bt('gx-tl-p', k, j, null, '<span class="fm-gx-tl-pt" aria-hidden="true"></span><b>' + m.t + '</b>' + (m.s ? '<small>' + m.s + '</small>' : ''), 'fm-gx-tl-bt' + (e.sel >= 0 ? ' pronto' : ''), ' aria-label="Put it at ' + hh(sem(m.t)) + '"') + '<div class="fm-gx-tl-aqui">' + aqui + '</div></div>';
    }).join('') + '</div>';
    var corpo = linha + (soltas ? '<div class="fm-gx-soltas">' + soltas + '</div><p class="fm-nota">' + (e.sel >= 0 ? 'Now tap its place on the line.' : 'Tap a sentence, then tap its place on the line.') + '</p>' : '')
      + nota(k, e, o, tudo) + (tudo || e.nota ? uso(k, e, o.uso) : '');
    return folha('fm-gx-g2', o.titulo || 'Where does it live in time?', tudo || e.nota ? 2 : Object.keys(e.pos).length ? 1 : 0, corpo, o);
  };

  /* ---------- G3 · RIGHT, NOT THIS: tocar no certo; o errado aparece riscado ---------- */
  FM.certoErrado = function (k, o) {
    var e = E(k, { r: {}, nota: 0, ex: 0 }), feitos = Object.keys(e.r).length;
    var corpo = '<div class="fm-gx-pares">' + o.pares.map(function (p, i) {
      var r = e.r[i], lado = [{ t: p.c, c: 1 }, { t: p.x, c: 0 }]; if (i % 2) lado.reverse();
      return '<div class="fm-gx-par' + (r != null ? (r === 1 ? ' acertou' : ' errou') : '') + '">' + lado.map(function (x) {
        if (r == null) return bt('gx-ce', k, i, x.c, '<span>' + x.t + '</span>', 'fm-gx-op');   /* 10/11: o <b> da frase quebrava o botão em pedaços e entregava a certa */
        return x.c ? '<span class="fm-gx-op certo">' + OK + '<span>' + x.t + '</span></span>' : '<span class="fm-gx-op riscado">' + NO + '<s>' + sem(x.t) + '</s></span>';
      }).join('') + (r != null && p.d ? '<p class="fm-gx-por">' + p.d + '</p>' : '') + '</div>';
    }).join('') + '</div>';
    var tudo = feitos === o.pares.length;
    corpo += (tudo ? nota(k, e, o, 1) + uso(k, e, o.uso) : '<p class="fm-nota">' + (o.toque || 'Read both out loud. Tap the one that is right.') + ' · ' + feitos + ' of ' + o.pares.length + '</p>');
    return folha('fm-gx-g3', o.titulo || 'Right, not this.', tudo ? 2 : feitos ? 1 : 0, corpo, o);
  };

  /* ---------- G4 · THREE MOMENTS: três usos lado a lado, depois classificar ---------- */
  FM.tresUsos = function (k, o) {
    var e = E(k, { r: {}, n: 0, nota: 0, ex: 0 }), feitos = 0;
    o.itens.forEach(function (x, i) { if (e.r[i] === x.c) feitos++; });
    var cols = '<div class="fm-gx-tres">' + o.usos.map(function (u, j) {
      return '<div class="fm-gx-uso3" style="--i:' + j + '">' + (u.img ? '<span class="fm-gx-uso3-img" style="background-image:url(\'' + img(u.img) + '\')" aria-hidden="true"></span>' : '') + '<small>' + u.t + '</small><b>' + u.f + '</b>' + (u.d ? '<span>' + u.d + '</span>' : '') + '</div>';
    }).join('') + '</div>';
    var lis = o.itens.map(function (x, i) {
      var r = e.r[i];
      var ops = '<span class="f2-ops">' + o.usos.map(function (u, j) { return bt('gx-3', k, i, j, sem(u.t), 'f2-bt' + (r === j ? (j === x.c ? ' on' : ' no') : '')); }).join('') + '</span>';
      var ver = function (rr) { return '<span class="f2-veredito' + (rr === x.c ? '' : ' no') + '">' + (rr === x.c ? 'Yes: ' + sem(o.usos[x.c].t).toLowerCase() + '.' : 'Look again. Which moment is it?') + (x.d ? ' <b>' + x.d + '</b>' : '') + '</span>'; };
      return { ok: r === x.c, h: '<li><p>' + x.f + '</p>' + ops + (r != null ? ver(r) : '') + '</li>', g: '<li><p>' + x.f + '</p>' + ops + ver(x.c) + '</li>' };
    });
    var tudo = feitos === o.itens.length;
    var corpo = cols + '<div class="fm-gx-sub"><b>' + (o.pergunta || 'Which moment is it?') + '</b><span>' + feitos + ' of ' + o.itens.length + '</span></div>' + lista(k, e, o, o.itens, lis, 'Sentence')
      + nota(k, e, o, tudo) + (tudo || e.nota ? uso(k, e, o.uso) : '');
    return folha('fm-gx-g4', o.titulo || 'Three moments. One word.', tudo || e.nota ? 2 : Object.keys(e.r).length ? 1 : 0, corpo, o);
  };

  /* ---------- G5 · THIS OR THAT: duas cenas, duas formas; o aluno diz o que muda ---------- */
  function conversa(c, letra) {
    return '<div class="fm-gx-cena"><span class="fm-gx-letra" aria-hidden="true">' + letra + '</span>' + (c.t ? '<small>' + c.t + '</small>' : '') + c.falas.map(function (f, i) {
      return '<p class="fm-gx-balao' + (i % 2 ? ' d' : '') + '">' + (f[0] ? '<b>' + f[0] + '</b>' : '') + f[1] + '</p>';
    }).join('') + '</div>';
  }
  FM.contraste = function (k, o) {
    var e = E(k, { ver: 0, r: {}, n: 0, nota: 0, ex: 0 }), feitos = 0;
    (o.itens || []).forEach(function (x, i) { if (e.r[i] === x.c) feitos++; });
    var corpo = '<div class="fm-gx-duas">' + conversa(o.a, 'A') + conversa(o.b, 'B') + '</div>'
      + '<div class="fm-gx-pq"><b>' + (o.pergunta || 'Same idea, two forms. What is different in the situation?') + '</b>'
      + (e.ver ? '<div class="fm-gx-dif"><p><span>A</span>' + o.a.d + '</p><p><span>B</span>' + o.b.d + '</p></div>' : '<div class="fm-acoes"><span class="fm-diga"><i class="fm-boca" aria-hidden="true"></i>Say it first, in your words</span>' + bt('gx-ver', k, 0, null, '<i aria-hidden="true"></i>Check', 'fm-check mini') + '</div>') + '</div>';
    if (e.ver && o.itens) {
      var lis = o.itens.map(function (x, i) {
        var r = e.r[i], ops = '<span class="f2-ops">' + x.o.map(function (t, j) { return bt('gx-ct', k, i, j, t, 'f2-bt' + (r === j ? (j === x.c ? ' on' : ' no') : '')); }).join('') + '</span>';
        return { ok: r === x.c, h: '<li><p>' + x.p + '</p>' + ops + (r != null ? '<span class="f2-veredito' + (r === x.c ? '' : ' no') + '">' + (r === x.c ? 'Right.' : 'Look at A and B again.') + (x.d ? ' <b>' + x.d + '</b>' : '') + '</span>' : '') + '</li>',
          g: '<li><p>' + x.p + '</p>' + ops + '<span class="f2-veredito">Look at A and B again.' + (x.d ? ' <b>' + x.d + '</b>' : '') + '</span></li>' };
      });
      corpo += '<div class="fm-gx-sub"><b>' + (o.pergunta2 || 'Now you. A or B?') + '</b><span>' + feitos + ' of ' + o.itens.length + '</span></div>' + lista(k, e, o, o.itens, lis, 'Moment');
    }
    var tudo = e.ver && (!o.itens || feitos === o.itens.length);
    corpo += (tudo ? nota(k, e, o, 1) + uso(k, e, o.uso) : '');
    return folha('fm-gx-g5', o.titulo || 'This or that?', tudo ? 2 : e.ver ? 1 : 0, corpo, o);
  };

  /* ---------- G6 · LADDER: a frase sobe um degrau por toque ---------- */
  FM.escada = function (k, o) {
    var e = E(k, { n: 1, nota: 0, ex: 0 }), N = o.degraus.length, n = Math.max(1, Math.min(N, e.n)), tudo = n >= N;
    var dg = o.degraus.map(function (d, i) {
      var on = i < n;
      return '<li class="fm-gx-dg' + (on ? ' on' : '') + (i === n - 1 && n > 1 ? ' novo' : '') + '" style="--i:' + i + '"' + (on ? '' : ' aria-hidden="true"') + '><span class="fm-gx-dg-r">' + (d.r || (i + 1)) + '</span><p>' + (on ? d.f : '&nbsp;') + '</p>' + (on && d.d ? '<small>' + d.d + '</small>' : '') + '</li>';
    }).reverse().join('');
    var corpo = '<ol class="fm-gx-escada" reversed>' + dg + '</ol>'
      + '<div class="fm-acoes"><span class="fm-diga"><i class="fm-boca" aria-hidden="true"></i>' + (tudo ? 'Now say all the steps, from the bottom' : 'Say this step out loud') + '</span>' + (tudo ? '' : bt('gx-sobe', k, 0, null, 'One step up', 'fm-bt fm-gx-bt')) + '</div>'
      + (tudo ? nota(k, e, o, 1) + uso(k, e, o.uso) : '');
    return folha('fm-gx-g6', o.titulo || 'One step at a time.', tudo ? 2 : n > 1 ? 1 : 0, corpo, o);
  };

  /* ---------- G7 · THE FLIP: as palavras trocam de lugar ---------- */
  function fila(tok, anima) {
    return '<span class="fm-gx-fila">' + tok.map(function (t, i) {
      var c = t.charAt(0), w = (c === '*' || c === '+') ? t.slice(1) : t;
      return '<i class="fm-gx-tk' + (c === '*' ? ' mov' : c === '+' ? ' novo' : '') + (/^[.?!,]$/.test(w) ? ' pt' : '') + (anima && c !== '*' && c !== '+' ? '' : '') + '" style="--d:' + i + '">' + w + '</i>';
    }).join('') + '</span>';
  }
  FM.vira = function (k, o) {
    var e = E(k, { v: {}, q: {}, n: 0, nota: 0, ex: 0 }), viradas = Object.keys(e.v).length, tudo = viradas === o.frases.length;
    var corpo = '<div class="fm-gx-viras">' + o.frases.map(function (f, i) {
      return '<div class="fm-gx-vira' + (e.v[i] ? ' virou' : '') + '">' + fila(f.de) + (e.v[i] ? SETA + fila(f.para, 1) + (f.d ? '<small>' + f.d + '</small>' : '') : bt('gx-vira', k, i, null, 'Flip it', 'fm-bt fm-gx-bt')) + '</div>';
    }).join('') + '</div>';
    if (tudo || e.nota) {
      corpo += nota(k, e, o, 1);
      if (o.treino) {
        var lis = o.treino.map(function (x, i) {
          var b = bt('gx-vq', k, i, null, '<i aria-hidden="true"></i>Check', 'fm-check mini');
          return { ok: !!e.q[i], h: '<li class="' + (e.q[i] ? 'fm-cd-aberta' : '') + '"><p><span class="fm-molde">' + x.de + '</span>' + (e.q[i] ? '<span class="fm-certa-l">' + x.r + '</span>' : '') + '</p>' + (e.q[i] ? '' : b) + '</li>',
            g: '<li><p><span class="fm-molde">' + x.de + '</span><span class="fm-certa-l">' + x.r + '</span></p>' + b + '</li>' };
        });
        corpo += '<div class="fm-gx-sub"><b>' + (o.pergunta || 'Your turn. Flip it out loud, then check.') + '</b></div>' + lista(k, e, o, o.treino, lis, 'Flip');
      }
      corpo += uso(k, e, o.uso);
    }
    return folha('fm-gx-g7', o.titulo || 'Watch the words move.', tudo || e.nota ? 2 : viradas ? 1 : 0, corpo, o);
  };

  /* ---------- G8 · SHORT ANSWERS: pingue-pongue de Yes / No ---------- */
  FM.respostaCurta = function (k, o) {
    var e = E(k, { r: {}, n: 0, nota: 0, ex: 0 }), feitos = Object.keys(e.r).length, tudo = feitos === o.perguntas.length;
    var lis = o.perguntas.map(function (x, i) {
      var r = e.r[i];
      var ops = '<span class="fm-gx-sn">' + bt('gx-sn', k, i, 's', 'Yes', 'fm-gx-sim' + (r === 's' ? ' on' : '')) + bt('gx-sn', k, i, 'n', 'No', 'fm-gx-nao2' + (r === 'n' ? ' on' : '')) + '</span>';
      function resp(rr) { return '<div class="fm-gx-curta"><p class="fm-gx-balao d">' + (rr === 'n' ? x.n : x.s) + '</p><p class="fm-gx-ou">or: ' + (rr === 'n' ? x.s : x.n) + '</p>' + (x.mais ? '<p class="fm-gx-mais"><span>Then</span>' + x.mais + '</p>' : '') + '</div>'; }
      return { ok: r != null, h: '<li><p class="fm-gx-balao">' + x.q + '</p>' + ops + (r != null ? resp(r) : '') + '</li>', g: '<li><p class="fm-gx-balao">' + x.q + '</p>' + ops + resp('s') + '</li>' };
    });
    var corpo = '<p class="fm-nota fm-gx-dica">' + (o.toque || 'The teacher asks. Tap your true answer and say it fast. Then ask the teacher.') + '</p>' + lista(k, e, o, o.perguntas, lis, 'Question')
      + nota(k, e, o, tudo) + (tudo || e.nota ? uso(k, e, o.uso) : '');
    return folha('fm-gx-g8', o.titulo || 'Short answers. Three words.', tudo || e.nota ? 2 : feitos ? 1 : 0, corpo, o);
  };

  /* ---------- G9 · LIT DIALOGUE: a conversa com o alvo aceso ---------- */
  FM.dialogoAceso = function (k, o) {
    var e = E(k, { a: {}, nota: 0, ex: 0 }), N = 0, achou = 0;
    var falas = o.falas.map(function (f, i) {
      var porques = [];
      var txt = f.f.replace(/\[\[(.*?)\]\]/g, function (_, w) {
        var j = N++, on = !!e.a[j]; if (on) { achou++; porques.push(o.porques[j]); }
        return '<button type="button" class="fm-gx-luz' + (on ? ' on' : '') + '" data-a="gx-luz" data-c="' + k + '" data-n="' + j + '" aria-pressed="' + on + '">' + w + '</button>';
      });
      return '<div class="fm-gx-fala' + (i % 2 ? ' d' : '') + '"><p class="fm-gx-balao' + (i % 2 ? ' d' : '') + '">' + (f.q ? '<b>' + f.q + '</b>' : '') + txt + '</p>' + porques.map(function (p) { return '<p class="fm-gx-porque">' + p + '</p>'; }).join('') + '</div>';
    }).join('');
    var tudo = achou === N;
    var corpo = '<div class="fm-gx-dialogo">' + falas + '</div><p class="fm-achou"><span class="fm-medidor" style="--p:' + (N ? achou / N : 0) + '"><i></i></span>' + (o.toque || 'Tap the lit words: why this form?') + ' · <b>' + achou + '</b> of ' + N + '</p>'
      + nota(k, e, o, tudo) + (tudo || e.nota ? uso(k, e, o.uso) : '');
    return folha('fm-gx-g9', o.titulo || 'Read it together. The lit words tell you why.', tudo || e.nota ? 2 : achou ? 1 : 0, corpo, o);
  };

  /* ---------- G10 · FIND THE RULE: três exemplos, o aluno escolhe a regra ---------- */
  FM.achaRegra = function (k, o) {
    var e = E(k, { r: -1, t: {}, ex: 0 }), certa = e.r === o.c;
    var corpo = '<ol class="fm-gx-exemplos">' + o.exemplos.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>'
      + '<div class="fm-gx-pq"><b>' + o.pergunta + '</b><div class="fm-gx-regras">' + o.opcoes.map(function (t, j) {
        var cls = certa && j === o.c ? ' on' : e.t[j] && j !== o.c ? ' no' : '';
        return certa ? '<span class="fm-gx-regra' + cls + '">' + (j === o.c ? OK : '') + t + '</span>' : bt('gx-ar', k, j, null, t, 'fm-gx-regra' + cls);
      }).join('') + '</div>'
      + (certa ? '' : e.r >= 0 ? '<p class="fm-gx-nao">' + (o.nao || 'Not that one. Look at the lit words again.') + '</p>' : '<p class="fm-nota">' + (o.toque || 'Read the three sentences out loud first. Then choose.') + '</p>') + '</div>'
      + (certa ? '<div class="fm-gx-nota achou"><span>The rule you found</span><p>' + o.regra + '</p></div>' + uso(k, e, o.uso) : '');
    return folha('fm-gx-g10', o.titulo || 'Find the rule yourself.', certa ? 2 : e.r >= 0 ? 1 : 0, corpo, o);
  };

  /* ---------- G11 · SOUND: pares de som com ▶ (a voz do navegador; sem serviço pago) ---------- */
  var VOZ = null;
  function voz() {
    try {
      if (VOZ) return VOZ; var vs = window.speechSynthesis.getVoices() || [], en = vs.filter(function (v) { return /^en[-_]US/i.test(v.lang); });
      if (!en.length) en = vs.filter(function (v) { return /^en/i.test(v.lang); });
      VOZ = en.filter(function (v) { return /natural|online|google|aria|jenny|samantha/i.test(v.name); })[0] || en[0] || null; return VOZ;
    } catch (x) { return null; }
  }
  try { if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = function () { VOZ = null; }; } catch (x) { /* segue */ }
  var AUDS = {};
  function diz(t, au) {
    try {
      if (au && window.aud) { var a = AUDS[au] || (AUDS[au] = new Audio(aud(au))); a.currentTime = 0; a.playbackRate = S.lento ? .75 : 1; var p = a.play(); if (p && p.catch) p.catch(function () {}); return; }
      var s = window.speechSynthesis; if (!s || !window.SpeechSynthesisUtterance) return;
      s.cancel(); var u = new SpeechSynthesisUtterance(sem(t)); u.lang = 'en-US'; u.rate = S.lento ? .72 : .92; var v = voz(); if (v) u.voice = v; s.speak(u);
    } catch (x) { /* sem voz: o professor fala */ }
  }
  FM.gxDiz = diz;
  function toca(k, id, fala, au, rot, ouviu) { return '<button type="button" class="fm-gx-play' + (ouviu ? ' ouviu' : '') + '" data-a="gx-fala" data-c="' + k + '" data-n="' + id + '" data-v="' + hh(sem(fala)) + '"' + (au ? ' data-x="' + hh(au) + '"' : '') + ' aria-label="Listen: ' + hh(sem(rot || fala)) + '">' + PLAY + (rot ? '<span>' + rot + '</span>' : '') + '</button>'; }
  FM.som2 = function (k, o) {
    var e = E(k, { r: {}, n: 0, ouviu: {}, nota: 0, ex: 0 }), feitos = 0, semVoz = !(window.speechSynthesis && window.SpeechSynthesisUtterance);
    (o.itens || []).forEach(function (x, i) { if (e.r[i] === x.c) feitos++; });
    var pares = '<div class="fm-gx-sons">' + o.pares.map(function (p, i) {
      return '<div class="fm-gx-som">' + p.map(function (x, j) { return '<div class="fm-gx-som-l">' + toca(k, i * 2 + j, x.fala || x.t, x.au, x.t, e.ouviu[i * 2 + j]) + (x.fala ? '<small>' + x.fala + '</small>' : '') + '</div>'; }).join('<span class="fm-gx-vs" aria-hidden="true">or</span>') + '</div>';
    }).join('') + '</div>';
    var lis = (o.itens || []).map(function (x, i) {
      var r = e.r[i], ops = '<span class="f2-ops">' + x.o.map(function (t, j) { return bt('gx-so', k, i, j, t, 'f2-bt' + (r === j ? (j === x.c ? ' on' : ' no') : '')); }).join('') + '</span>';
      var pe = function (rr) { return '<span class="f2-veredito' + (rr === x.c ? '' : ' no') + '">' + (rr === x.c ? 'Right. ' : 'Listen again. ') + '<b>' + x.fala + '</b>' + (x.d ? ' · ' + x.d : '') + '</span>'; };
      return { ok: r === x.c, h: '<li><p>' + toca(k, 100 + i, x.fala, x.au, 'Listen', e.ouviu[100 + i]) + ' <span class="fm-gx-qual">Which one do you hear?</span></p>' + ops + (r != null ? pe(r) : '') + '</li>',
        g: '<li><p>' + toca(k, 100 + i, x.fala, x.au, 'Listen', 0) + ' <span class="fm-gx-qual">Which one do you hear?</span></p>' + ops + pe(x.c) + '</li>' };
    });
    var tudo = !o.itens || feitos === o.itens.length;
    var corpo = '<div class="fm-gx-som-topo"><p class="fm-nota">' + (o.toque || 'Tap ▶ and listen. Then say both out loud.') + '</p><button type="button" class="lento fm-gx-lento' + (S.lento ? ' on' : '') + '" data-a="lento" aria-label="Slower" title="Slower">0.75×</button></div>'
      + (semVoz ? '<p class="fm-nota">This browser has no voice. The teacher says them.</p>' : '') + pares
      + (o.itens ? '<div class="fm-gx-sub"><b>' + (o.pergunta || 'Now the ear test.') + '</b><span>' + feitos + ' of ' + o.itens.length + '</span></div>' + lista(k, e, o, o.itens, lis, 'Sound') : '')
      + nota(k, e, o, tudo && feitos > 0) + (tudo && (feitos > 0 || e.nota) || e.nota ? uso(k, e, o.uso) : '');
    return folha('fm-gx-g11', o.titulo || 'Listen. What changes?', tudo && (feitos || e.nota) ? 2 : Object.keys(e.ouviu).length ? 1 : 0, corpo, o);
  };

  /* ---------- G12 · PICTURE FIRST: a foto dá o sentido, a frase aparece dentro ---------- */
  FM.fotoPrimeiro = function (k, o) {
    var e = E(k, { v: {}, n: 0, nota: 0, ex: 0 }), vistas = Object.keys(e.v).length, tudo = vistas === o.cenas.length;
    var lis = o.cenas.map(function (c, i) {
      function fig(v) { return '<figure class="fm-gx-foto' + (v ? ' virou' : '') + '"><img src="' + img(c.img) + '" alt="' + hh(c.alt || '') + '" loading="lazy"><figcaption><span class="fm-gx-antes">' + c.antes + '</span>' + (v ? '<b class="fm-gx-foto-f">' + c.frase + '</b>' : bt('gx-ve', k, i, null, o.botao || 'What do they say?', 'fm-bt fm-gx-bt')) + '</figcaption></figure>'; }
      return { ok: !!e.v[i], h: '<li>' + fig(e.v[i]) + '</li>', g: '<li>' + fig(1) + '</li>' };
    });
    var corpo = (FM.emCartoes(o.cenas, o) ? lista(k, e, o, o.cenas, lis, 'Picture') : '<div class="fm-gx-fotos">' + lis.map(function (x) { return x.h.replace(/^<li>|<\/li>$/g, ''); }).join('') + '</div>')
      + nota(k, e, o, tudo) + (tudo || e.nota ? uso(k, e, o.uso) : '');
    return folha('fm-gx-g12', o.titulo || 'Look first. Then listen to the words.', tudo || e.nota ? 2 : vistas ? 1 : 0, corpo, o);
  };

  /* ---------- G13 · POCKET RULE: quatro linhas; guardada, fica no canto das cenas seguintes ---------- */
  FM.regraBolso = function (k, o) {
    var e = E(k, { n: 1, pin: 0, fe: 0, ex: 0 }), N = Math.min(4, o.linhas.length), n = Math.max(1, Math.min(N, e.n)), tudo = n >= N;
    var corpo = '<div class="fm-gx-bolso-c"><span class="fm-gx-bolso-t">' + (o.rotulo || 'Pocket rule') + '</span><ol>' + o.linhas.slice(0, N).map(function (l, i) { return '<li class="' + (i < n ? 'on' : '') + (i === n - 1 && n > 1 ? ' novo' : '') + '"' + (i < n ? '' : ' aria-hidden="true"') + '>' + (i < n ? l : '&nbsp;') + '</li>'; }).join('') + '</ol></div>'
      + '<div class="fm-acoes"><span class="fm-diga"><i class="fm-boca" aria-hidden="true"></i>' + (tudo ? 'Say the four lines without looking' : 'Read this line out loud') + '</span>'
      + (tudo ? (e.pin ? '<span class="fm-gx-preso">' + OK + ' It stays in the corner on the next pages. ' + bt('gx-pin', k, 0, null, 'Take it off', 'fm-gx-link') + '</span>' : bt('gx-pin', k, 0, null, '<i aria-hidden="true"></i>Keep it in the corner', 'fm-check mini')) : bt('gx-rb', k, 0, null, 'Next line', 'fm-bt fm-gx-bt')) + '</div>'
      + (tudo ? uso(k, e, o.uso) : '');
    return folha('fm-gx-g13', o.titulo || 'Four lines to keep in your pocket.', tudo ? 2 : n > 1 ? 1 : 0, corpo, o);
  };
  /* a regra guardada aparece no canto de toda cena DEPOIS da cena em que foi guardada (os dois lados: está no estado) */
  (window.WL_PECAS = window.WL_PECAS || []).push(function (palco) {
    var sec = palco.querySelector('section.cena'); if (!sec || !S.fq || (window.L && L[S.i] && L[S.i].k === 'capa')) return;
    Object.keys(S.fq).forEach(function (k) {
      var e = S.fq[k]; if (!e || !e.pin || !e.l || !(S.i > e.cena)) return;
      /* fe: 0 = aberta na tela larga e fechada no celular (CSS), 1 = fechada, 2 = aberta */
      sec.insertAdjacentHTML('beforeend', '<aside class="fm-gx-bolso' + (e.fe === 1 ? ' fechado' : e.fe === 2 ? ' aberto' : '') + '" aria-label="Pocket rule"><button type="button" class="fm-gx-bolso-cab" data-a="gx-fe" data-c="' + k + '"><span>' + (e.rot || 'Pocket rule') + '</span><i aria-hidden="true"></i></button><ol>' + e.l.map(function (l) { return '<li>' + l + '</li>'; }).join('') + '</ol></aside>');
    });
  });

  /* ---------- G14 · MISTAKE HUNTER: achar a palavra errada, falar o certo, conferir ---------- */
  FM.cacaErro = function (k, o) {
    var e = E(k, { a: {}, w: {}, v: {}, n: 0, nota: 0, ex: 0 }), feitos = Object.keys(e.v).length, tudo = feitos === o.itens.length;
    var lis = o.itens.map(function (x, i) {
      function frase(achou, ver) {
        var j = 0;
        return x.f.split(/(\[\[.*?\]\])/).map(function (p) {
          var m = p.match(/^\[\[(.*)\]\]$/);
          if (m) return achou ? '<s class="fm-gx-pego">' + m[1] + '</s>' : '<button type="button" class="fm-gx-pal" data-a="gx-caca" data-c="' + k + '" data-n="' + i + '" data-v="h">' + m[1] + '</button>';
          return p.replace(/[A-Za-z’'\-]+/g, function (w) { var jj = j++; return achou ? w : '<button type="button" class="fm-gx-pal' + (e.w[i] === jj ? ' fora' : '') + '" data-a="gx-caca" data-c="' + k + '" data-n="' + i + '" data-v="' + jj + '">' + w + '</button>'; });
        }).join('');
      }
      var achou = !!e.a[i], ver = !!e.v[i];
      var pe = ver ? '<p class="fm-gx-fix">' + OK + '<span>' + x.r + '</span></p>' + (x.d ? '<p class="fm-gx-por">' + x.d + '</p>' : '')
        : achou ? '<div class="fm-acoes"><span class="fm-diga"><i class="fm-boca" aria-hidden="true"></i>Got it. Say the right sentence</span>' + bt('gx-cv', k, i, null, '<i aria-hidden="true"></i>Check', 'fm-check mini') + '</div>'
          : '<p class="fm-nota">' + (e.w[i] != null ? 'Not that word. Read it again.' : 'Tap the wrong word.') + '</p>';
      return { ok: ver, h: '<li><p class="fm-gx-caca' + (achou ? ' achou' : '') + '">' + frase(achou, ver) + '</p>' + pe + '</li>',
        g: '<li><p class="fm-gx-caca achou">' + frase(1, 1) + '</p><p class="fm-gx-fix">' + OK + '<span>' + x.r + '</span></p>' + (x.d ? '<p class="fm-gx-por">' + x.d + '</p>' : '') + '</li>' };
    });
    var corpo = '<p class="fm-nota fm-gx-dica">' + (o.toque || 'People who speak Portuguese often say these. Find the mistake before you see the answer.') + '</p>' + lista(k, e, o, o.itens, lis, 'Mistake')
      + nota(k, e, o, tudo) + (tudo || e.nota ? uso(k, e, o.uso) : '');
    return folha('fm-gx-g14', o.titulo || 'Mistake hunter.', tudo || e.nota ? 2 : Object.keys(e.a).length ? 1 : 0, corpo, o);
  };

  /* ---------- os toques (todos mudam só S.fq[c]) ---------- */
  var T = {
    'gx-nota': function (b, n, v, c) { E(c, {}).nota = 1; },
    'gx-ex': function (b, n, v, c) { E(c, {}).ex = 1; },
    'gx-poe': function (b, n, v, c) { var e = E(c, { sel: [] }); if (e.ok === 1 || e.sel.indexOf(n) >= 0) return false; e.sel.push(n); e.ok = 0; },
    'gx-tira': function (b, n, v, c) { var e = E(c, { sel: [] }); if (e.ok === 1) return false; e.sel = e.sel.filter(function (i) { return i !== n; }); e.ok = 0; },
    'gx-limpa': function (b, n, v, c) { var e = E(c, { sel: [] }); e.sel = []; e.ok = 0; },
    'gx-conf': function (b, n, v, c) {
      var e = E(c, { sel: [] }), def = GX[c]; if (!def || !def.monta) return false; var M = def.monta;
      var ords = [M.ordem || M.pecas.map(function (_, i) { return i; })].concat(M.outras || []);
      e.ok = ords.some(function (o) { return o.join(',') === e.sel.join(','); }) ? 1 : -1;
    },
    'gx-tl-s': function (b, n, v, c) { var e = E(c, { sel: -1, pos: {} }); e.sel = e.sel === n ? -1 : n; },
    'gx-tl-p': function (b, n, v, c) { var e = E(c, { sel: -1, pos: {} }); if (e.sel < 0) return false; e.pos[e.sel] = n; e.sel = -1; },
    'gx-tl-tira': function (b, n, v, c) { var e = E(c, { sel: -1, pos: {} }); delete e.pos[n]; },
    'gx-ce': function (b, n, v, c) { var e = E(c, { r: {} }); if (e.r[n] != null) return false; e.r[n] = +v; },
    'gx-3': function (b, n, v, c) { E(c, { r: {} }).r[n] = +v; },
    'gx-ver': function (b, n, v, c) { E(c, {}).ver = 1; },
    'gx-ct': function (b, n, v, c) { E(c, { r: {} }).r[n] = +v; },
    'gx-sobe': function (b, n, v, c) { var e = E(c, { n: 1 }); e.n = (e.n || 1) + 1; },
    'gx-vira': function (b, n, v, c) { E(c, { v: {} }).v[n] = 1; },
    'gx-vq': function (b, n, v, c) { E(c, { q: {} }).q[n] = 1; },
    'gx-sn': function (b, n, v, c) { E(c, { r: {} }).r[n] = v; },
    'gx-luz': function (b, n, v, c) { var e = E(c, { a: {} }); if (e.a[n]) delete e.a[n]; else e.a[n] = 1; },
    'gx-ar': function (b, n, v, c) { var e = E(c, { r: -1, t: {} }); e.r = n; e.t[n] = 1; },
    'gx-fala': function (b, n, v, c) { diz(v, b.getAttribute('data-x')); var e = E(c, { ouviu: {} }); if (e.ouviu[n]) return false; e.ouviu[n] = 1; },
    'gx-so': function (b, n, v, c) { E(c, { r: {} }).r[n] = +v; },
    'gx-ve': function (b, n, v, c) { E(c, { v: {} }).v[n] = 1; },
    'gx-rb': function (b, n, v, c) { var e = E(c, { n: 1 }); e.n = (e.n || 1) + 1; },
    'gx-pin': function (b, n, v, c) { var e = E(c, {}), d = GX[c]; if (e.pin) { e.pin = 0; return; } if (!d) return false; e.pin = 1; e.cena = S.i; e.l = d.linhas.slice(0, 4); e.rot = d.rotulo || 'Pocket rule'; },
    'gx-fe': function (b, n, v, c) { var e = S.fq && S.fq[c]; if (!e) return false; var ol = b.parentNode && b.parentNode.querySelector('ol'), vis = !!ol && getComputedStyle(ol).display !== 'none'; e.fe = vis ? 1 : 2; },
    'gx-caca': function (b, n, v, c) { var e = E(c, { a: {}, w: {} }); if (e.a[n]) return false; if (v === 'h') { e.a[n] = 1; delete e.w[n]; } else e.w[n] = +v; },
    'gx-cv': function (b, n, v, c) { E(c, { v: {} }).v[n] = 1; }
  };
  /* as definições ficam guardadas pela chave (o Check do G1 e o G13 precisam delas no toque) */
  var GX = {};
  var antigo = FM.ex;
  var NOMES = { blocos: 1, linhaTempo: 1, certoErrado: 1, tresUsos: 1, contraste: 1, escada: 1, vira: 1, respostaCurta: 1, dialogoAceso: 1, achaRegra: 1, som2: 1, fotoPrimeiro: 1, regraBolso: 1, cacaErro: 1 };
  FM.ex = function (k, def) {
    if (def && NOMES[def.formato]) { GX[k] = def; try { return FM[def.formato](k, def); } catch (x) { try { console.error(x); } catch (y) { /* segue */ } return '<div class="fm-folha"><b>This page could not open.</b><p class="fm-nota">' + hh(x && x.message || x) + '</p></div>'; } }
    return antigo ? antigo(k, def) : '<p class="fm-nota">Unknown format: ' + hh(def && def.formato) + '</p>';
  };
  function liga() { for (var a in T) TOQUES[a] = T[a]; }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', liga); else liga();

  /* ---------- o desenho (prefixo fm-gx-) ---------- */
  var css = [
    /* as cores das funções: só tokens da aula, com reserva */
    '.fm-gx{--gx-quem:var(--l,#86c9f0);--gx-aux:var(--ac2,var(--ac));--gx-acao:var(--am,#f0b866);--gx-quando:var(--o,#ff9b7a);--gx-onde:var(--f,#c6f36b);--gx-o:var(--w,#b9a6e8);--gx-q:var(--ac);--gx-como:var(--f,#c6f36b);display:grid;gap:16px;width:min(1040px,100%);margin:0 auto}',
    '.fm-gx .fm-folha-t{margin-bottom:0}',
    '.fm-gx-k-quem{--gk:var(--gx-quem)}.fm-gx-k-aux{--gk:var(--gx-aux)}.fm-gx-k-acao{--gk:var(--gx-acao)}.fm-gx-k-quando{--gk:var(--gx-quando)}.fm-gx-k-onde{--gk:var(--gx-onde)}.fm-gx-k-o{--gk:var(--gx-o)}.fm-gx-k-q{--gk:var(--gx-q)}.fm-gx-k-como{--gk:var(--gx-como)}',
    /* see · notice · use */
    '.fm-gx-passos{display:flex;flex-wrap:wrap;gap:6px;list-style:none;margin:0;padding:0}',
    '.fm-gx-passos li{display:inline-flex;align-items:center;gap:8px;padding:5px 12px 5px 6px;border-radius:999px;border:1px solid var(--fio2);color:var(--t3);font:700 12.5px/1 var(--ui);letter-spacing:.08em;text-transform:uppercase}',
    '.fm-gx-passos b{width:20px;height:20px;border-radius:50%;display:grid;place-items:center;font:800 11px var(--ui);letter-spacing:0;border:1px solid currentColor}',
    '.fm-gx-passos li.agora{color:var(--t1);border-color:var(--ac2,var(--ac));box-shadow:0 0 0 1px var(--ac2,var(--ac)) inset}.fm-gx-passos li.agora b{background:var(--ac2,var(--ac));border-color:transparent;color:var(--pl-sobre-ac,#140f1c)}',
    '.fm-gx-passos li.feito{color:var(--t2)}.fm-gx-passos li.feito b{background:color-mix(in srgb,var(--ac2,var(--ac)) 30%,transparent);border-color:transparent;color:var(--t1)}',
    /* os blocos (o desenho do Global Payments, a função no lugar da tradução) */
    '.fm-gx-frases{display:grid;gap:10px}',
    '.fm-gx-frase{display:grid;gap:8px;padding:14px 16px;border-radius:16px;background:rgba(0,0,0,.32);border:1px solid var(--fio)}',
    '.fm-gx-blocos{display:flex;flex-wrap:wrap;gap:10px 10px;align-items:flex-start}',
    '.fm-gx-b{display:inline-grid;justify-items:center;gap:5px}',
    '.fm-gx-b b,.fm-gx-peca b{display:block;padding:6px 13px;border-radius:12px;background:color-mix(in srgb,var(--gk,var(--ac)) 10%,rgba(12,10,20,.82));border:1px solid color-mix(in srgb,var(--gk,var(--ac)) 30%,var(--fio));border-bottom:3px solid var(--gk,var(--ac));font:700 clamp(18px,1.6vw,23px)/1.25 var(--disp);color:var(--t1)}',
    '.fm-gx-b i,.fm-gx-peca i{font:800 11px/1 var(--ui);font-style:normal;letter-spacing:.12em;text-transform:uppercase;color:var(--gk,var(--ac))}',
    '.fm-gx-k-aux b,.fm-gx-peca.fm-gx-k-aux b{border-radius:999px}',
    '.fm-gx-dito{margin:0;color:var(--t2);font:500 15px/1.5 var(--ui)}',
    /* o notice e o your turn */
    '.fm-gx-nota{display:grid;gap:4px;padding:14px 18px;border-radius:16px;border:1px solid color-mix(in srgb,var(--am) 45%,transparent);background:linear-gradient(160deg,color-mix(in srgb,var(--am) 10%,rgba(10,8,14,.85)),rgba(10,8,14,.86));animation:fm-gx-entra .35s ease-out both}',
    '.fm-gx-nota span{font:800 11.5px var(--ui);letter-spacing:.16em;text-transform:uppercase;color:var(--am)}',
    '.fm-gx-nota p{margin:0;font:600 clamp(17px,1.35vw,21px)/1.5 var(--ui);color:var(--t1)}.fm-gx-nota b{color:var(--am)}',
    '.fm-gx-nota.achou{border-color:#60c887;background:linear-gradient(160deg,rgba(96,200,135,.12),rgba(10,8,14,.86))}.fm-gx-nota.achou span{color:#9dd9b4}',
    '.fm-gx-nota-bt{display:flex;justify-content:flex-start}',
    '.fm-gx-bt{display:inline-flex;align-items:center;gap:10px;border-color:color-mix(in srgb,var(--ac2,var(--ac)) 55%,var(--fio2))}',
    '.fm-gx-bt:hover{border-color:var(--ac2,var(--ac))}',
    '.fm-gx-nota-bt .fm-gx-bt i{width:9px;height:9px;border-radius:50%;background:var(--am);box-shadow:0 0 0 4px color-mix(in srgb,var(--am) 22%,transparent)}',
    '.fm-gx-uso,.fm-gx-monta{display:grid;gap:10px;padding:16px 18px;border-radius:18px;border:1px dashed color-mix(in srgb,var(--ac2,var(--ac)) 55%,var(--fio2));background:rgba(0,0,0,.28);animation:fm-gx-entra .35s ease-out both}',
    '.fm-gx-monta.certa{border-style:solid;border-color:#60c887}',
    '.fm-gx-uso-t{font:italic 700 20px/1.1 var(--disp);color:var(--ac2,var(--ac))}',
    '.fm-gx-uso-p{margin:0;font:600 clamp(17px,1.3vw,20px)/1.5 var(--ui);color:var(--t1)}',
    '.fm-gx-moldes{display:flex;flex-wrap:wrap;gap:8px}.fm-gx-moldes em{font-style:italic;border:1px solid color-mix(in srgb,var(--am) 40%,transparent);border-radius:999px;padding:5px 13px;font-size:15px;color:var(--t1)}',
    '.fm-gx-campo{width:100%;min-height:50px;padding:10px 16px;border-radius:14px;border:1px solid var(--fio2);background:rgba(0,0,0,.35);color:var(--t1);font:600 clamp(17px,1.3vw,20px) var(--ui)}',
    '.fm-gx-campo:focus{outline:2px solid var(--ac2,var(--ac));outline-offset:2px}.fm-gx-campo::placeholder{color:var(--t3)}',
    '.fm-gx-uso-pe{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 16px}',
    '.fm-gx-ex{margin:0;display:grid;gap:2px;font:700 clamp(17px,1.3vw,20px)/1.4 var(--disp);color:#e3f7e9;animation:fm-escreve .5s ease-out both}.fm-gx-ex small{font:800 11px var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--t3)}',
    '.fm-gx-bt-ex{min-height:42px}',
    '.fm-gx-sub{display:flex;justify-content:space-between;align-items:baseline;gap:10px;padding-top:6px;border-top:1px solid var(--fio)}.fm-gx-sub b{font:italic 700 clamp(18px,1.4vw,22px)/1.2 var(--disp);color:var(--t1)}.fm-gx-sub span{font:700 13px var(--ui);color:var(--t3);font-variant-numeric:tabular-nums}',
    '.fm-gx-cd .fm-cd{margin-top:0}',
    '.fm-gx-prof{margin:0}',
    '.fm-gx-nao{color:#ffc9c2;font:600 15px var(--ui)}',
    '.fm-gx-acoes-d{display:inline-flex;gap:10px;align-items:center;flex-wrap:wrap}',
    '.fm-gx-ico{width:18px;height:18px;flex:none}',
    /* G1 montar */
    '.fm-gx-trilho{min-height:72px;display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start;padding:10px;border-radius:14px;background:rgba(0,0,0,.3);box-shadow:inset 0 1px 4px rgba(0,0,0,.5)}',
    '.fm-gx-monta.nao .fm-gx-trilho{animation:fm-nao .32s}',
    '.fm-gx-vazio{align-self:center;color:var(--t3);font:600 14px var(--ui)}',
    '.fm-gx-bandeja{display:flex;flex-wrap:wrap;gap:8px}',
    '.fm-gx-peca{display:inline-grid;justify-items:center;gap:5px;border:0;background:transparent;padding:0;transition:transform .15s}.fm-gx-peca:hover{transform:translateY(-2px)}.fm-gx-peca[disabled]{cursor:default;transform:none}',
    /* G2 a linha */
    '.fm-gx-tl{position:relative;display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:10px;padding-top:8px}',
    '.fm-gx-tl-fio{position:absolute;left:0;right:0;top:27px;height:3px;border-radius:2px;background:linear-gradient(90deg,color-mix(in srgb,var(--gx-quem) 70%,transparent),var(--ac2,var(--ac)),color-mix(in srgb,var(--gx-quando) 70%,transparent))}',
    '.fm-gx-tl-fio::after{content:"";position:absolute;right:-2px;top:-5px;border-left:10px solid color-mix(in srgb,var(--gx-quando) 70%,transparent);border-top:6.5px solid transparent;border-bottom:6.5px solid transparent}',
    '.fm-gx-tl-col{display:grid;gap:8px;align-content:start;justify-items:center;min-width:0}',
    '.fm-gx-tl-bt{position:relative;display:grid;justify-items:center;gap:4px;border:0;background:transparent;padding:0 4px 4px;color:var(--t1);text-align:center;cursor:pointer}',
    '.fm-gx-tl-pt{width:26px;height:26px;border-radius:50%;background:var(--noite,#0d0b14);border:3px solid var(--ac2,var(--ac));box-shadow:0 0 0 5px rgba(0,0,0,.35);transition:transform .2s,box-shadow .2s}',
    '.fm-gx-tl-bt.pronto .fm-gx-tl-pt{box-shadow:0 0 0 5px color-mix(in srgb,var(--ac2,var(--ac)) 30%,transparent);transform:scale(1.12)}',
    '.fm-gx-tl-bt b{font:800 13px var(--ui);letter-spacing:.14em;color:var(--t1)}.fm-gx-tl-bt small{font:600 12.5px/1.3 var(--ui);color:var(--t3)}',
    '.fm-gx-tl-aqui{display:grid;gap:6px;width:100%}',
    '.fm-gx-soltas{display:flex;flex-wrap:wrap;gap:8px;padding-top:6px;border-top:1px dashed var(--fio2)}',
    '.fm-gx-chip{display:grid;gap:2px;border:1px solid var(--fio2);background:var(--vidro2);color:var(--t1);border-radius:12px;padding:8px 13px;font:600 clamp(15px,1.15vw,17px)/1.35 var(--ui);text-align:left}',
    '.fm-gx-chip.sel{border-color:var(--ac2,var(--ac));box-shadow:0 0 0 2px var(--ac2,var(--ac))}',
    '.fm-gx-chip.on{border-color:#60c887;background:rgba(96,200,135,.12);animation:fm-gx-entra .3s ease-out both}.fm-gx-chip.on small{font:600 12.5px var(--ui);color:#bfeccd}',
    '.fm-gx-chip.no{border-color:#ff6e6e;background:rgba(255,110,110,.12);color:#ffdcd6;animation:fm-nao .32s}',
    /* G3 os pares */
    '.fm-gx-pares{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(440px,100%),1fr));gap:12px}',
    '.fm-gx-par{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:10px;border-radius:16px;background:rgba(0,0,0,.28);border:1px solid var(--fio)}',
    '.fm-gx-par.errou{animation:fm-nao .32s}',
    '.fm-gx-op{display:flex;align-items:center;gap:8px;min-height:56px;padding:10px 14px;border-radius:12px;border:1px solid var(--fio2);background:var(--vidro2);color:var(--t1);font:600 clamp(16px,1.25vw,19px)/1.35 var(--ui);text-align:left}',
    'button.fm-gx-op:hover{border-color:var(--ac2,var(--ac))}',
    '.fm-gx-op.certo{border-color:#60c887;background:rgba(96,200,135,.12);color:#e3f7e9}.fm-gx-op.certo .fm-gx-ico{color:#9dd9b4}.fm-gx-op.certo b{color:var(--am)}',
    '.fm-gx-op.riscado{color:var(--t3);background:transparent;border-style:dashed}.fm-gx-op.riscado .fm-gx-ico{color:#ffb4a8}.fm-gx-op.riscado s{text-decoration-color:rgba(255,110,110,.75);text-decoration-thickness:2px}',
    '.fm-gx-por{grid-column:1/-1;margin:0;color:var(--t2);font:600 14.5px/1.45 var(--ui)}',
    /* G4 os três momentos */
    '.fm-gx-tres{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}',
    '.fm-gx-uso3{position:relative;display:grid;gap:6px;align-content:start;padding:14px 16px 16px;border-radius:18px;border:1px solid var(--fio2);background:linear-gradient(170deg,color-mix(in srgb,var(--ac) 12%,transparent),rgba(0,0,0,.3));overflow:hidden;animation:fm-gx-entra .4s ease-out both;animation-delay:calc(var(--i)*90ms)}',
    '.fm-gx-uso3-img{display:block;height:92px;margin:-14px -16px 6px;background:#1a1625 center/cover;filter:saturate(.9) brightness(.8);-webkit-mask-image:linear-gradient(180deg,#000 55%,transparent);mask-image:linear-gradient(180deg,#000 55%,transparent)}',
    '.fm-gx-uso3 small{font:800 11.5px var(--ui);letter-spacing:.16em;color:var(--am)}',
    '.fm-gx-uso3 b{font:700 clamp(19px,1.6vw,24px)/1.25 var(--disp);color:var(--t1)}.fm-gx-uso3 span{color:var(--t2);font:500 14.5px/1.45 var(--ui)}',
    /* G5 duas cenas */
    '.fm-gx-duas{display:grid;grid-template-columns:1fr 1fr;gap:14px}',
    '.fm-gx-cena{position:relative;display:grid;gap:8px;align-content:start;padding:22px 18px 16px;border-radius:18px;border:1px solid var(--fio2);background:rgba(0,0,0,.3)}',
    '.fm-gx-cena small{font:800 11.5px var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--t3)}',
    '.fm-gx-letra{position:absolute;top:-18px;right:14px;font:italic 900 54px/1 var(--disp);color:var(--ac);text-shadow:0 8px 24px rgba(0,0,0,.6)}',
    '.fm-gx-balao{position:relative;justify-self:start;max-width:92%;margin:0;padding:10px 15px;border-radius:16px 16px 16px 4px;background:var(--vidro2);border:1px solid var(--fio);font:600 clamp(16px,1.3vw,20px)/1.45 var(--ui);color:var(--t1)}',
    '.fm-gx-balao.d{justify-self:end;border-radius:16px 16px 4px 16px;background:color-mix(in srgb,var(--ac) 16%,rgba(0,0,0,.4));border-color:color-mix(in srgb,var(--ac) 35%,transparent)}',
    '.fm-gx-balao>b:first-child{display:block;font:800 11px var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--t3);margin-bottom:2px}',
    '.fm-gx mark{background:transparent;color:var(--am);font-weight:800;box-shadow:inset 0 -.38em 0 color-mix(in srgb,var(--am) 22%,transparent)}',
    '.fm-gx-pq{display:grid;gap:10px}.fm-gx-pq>b{font:italic 700 clamp(19px,1.5vw,23px)/1.25 var(--disp);color:var(--t1)}',
    '.fm-gx-dif{display:grid;grid-template-columns:1fr 1fr;gap:10px}.fm-gx-dif p{margin:0;display:flex;gap:10px;align-items:baseline;padding:10px 14px;border-radius:14px;background:rgba(96,200,135,.08);border:1px solid rgba(96,200,135,.35);font:600 16px/1.45 var(--ui);animation:fm-escreve .5s ease-out both}.fm-gx-dif span{font:italic 900 22px var(--disp);color:var(--ac)}',
    /* G6 a escada */
    '.fm-gx-escada{list-style:none;margin:0;padding:0;display:grid;gap:8px}',
    '.fm-gx-dg{display:grid;grid-template-columns:auto 1fr;gap:4px 14px;align-items:center;margin-left:calc(var(--i)*clamp(14px,4vw,56px));padding:10px 16px;border-radius:14px;border:1px solid var(--fio);background:rgba(0,0,0,.22);opacity:.35}',
    '.fm-gx-dg.on{opacity:1;border-color:var(--fio2);background:linear-gradient(90deg,color-mix(in srgb,var(--ac) 12%,transparent),rgba(0,0,0,.28))}',
    '.fm-gx-dg.novo{animation:fm-gx-sobe .4s cubic-bezier(.2,.7,.2,1) both;border-color:var(--ac2,var(--ac))}',
    '.fm-gx-dg-r{min-width:44px;height:30px;padding:0 10px;border-radius:999px;display:grid;place-items:center;font:800 13px var(--ui);color:var(--am);border:1px solid color-mix(in srgb,var(--am) 50%,transparent)}',
    '.fm-gx-dg p{margin:0;font:700 clamp(19px,1.6vw,25px)/1.3 var(--disp);color:var(--t1)}.fm-gx-dg p b{color:var(--am)}',
    '.fm-gx-dg small{grid-column:2;color:var(--t2);font:500 14px var(--ui)}',
    /* G7 a pergunta que vira */
    '.fm-gx-viras{display:grid;gap:12px}',
    '.fm-gx-vira{display:flex;flex-wrap:wrap;align-items:center;gap:12px 16px;padding:14px 16px;border-radius:16px;background:rgba(0,0,0,.28);border:1px solid var(--fio)}',
    '.fm-gx-vira.virou{display:grid;justify-items:start;gap:6px}.fm-gx-vira small{color:var(--t2);font:500 14.5px var(--ui)}',
    '.fm-gx-fila{display:flex;flex-wrap:wrap;gap:6px;align-items:baseline}',
    '.fm-gx-tk{font-style:normal;padding:4px 11px;border-radius:10px;background:var(--vidro2);border:1px solid var(--fio);font:700 clamp(19px,1.6vw,25px)/1.3 var(--disp);color:var(--t1)}',
    '.fm-gx-tk.pt{padding:4px 2px;background:transparent;border-color:transparent}',
    '.fm-gx-tk.mov{color:var(--am);border-color:color-mix(in srgb,var(--am) 55%,transparent);background:color-mix(in srgb,var(--am) 12%,rgba(0,0,0,.4))}',
    '.fm-gx-tk.novo{color:var(--ac2,var(--ac));border-style:dashed;border-color:var(--ac2,var(--ac))}',
    '.fm-gx-vira.virou .fm-gx-fila+.fm-gx-seta+.fm-gx-fila .fm-gx-tk.mov{animation:fm-gx-vem .55s cubic-bezier(.2,.7,.2,1) both}',
    '.fm-gx-vira.virou .fm-gx-fila+.fm-gx-seta+.fm-gx-fila .fm-gx-tk.novo{animation:fm-gx-pop .45s .25s ease-out both}',
    '.fm-gx-vira.virou .fm-gx-fila+.fm-gx-seta+.fm-gx-fila .fm-gx-tk:not(.mov):not(.novo){animation:fm-gx-entra .35s ease-out both;animation-delay:calc(var(--d)*40ms)}',
    '.fm-gx-seta{width:26px;height:26px;color:var(--ac2,var(--ac))}',
    /* G8 resposta curta */
    '.fm-gx-sn{display:inline-flex;gap:8px}',
    '.fm-gx-sim,.fm-gx-nao2{min-width:84px;min-height:46px;border-radius:999px;border:1px solid var(--fio2);background:var(--vidro2);color:var(--t1);font:800 16px var(--ui)}',
    '.fm-gx-sim.on{background:rgba(96,200,135,.2);border-color:#60c887;color:#dcf6e5}.fm-gx-nao2.on{background:rgba(255,150,120,.16);border-color:#ff9b7a;color:#ffe0d6}',
    '.fm-gx-curta{display:grid;gap:6px;width:100%}.fm-gx-ou{margin:0;justify-self:end;color:var(--t3);font:600 14px var(--ui)}',
    '.fm-gx-mais{margin:0;display:flex;gap:10px;align-items:baseline;font:600 15.5px/1.45 var(--ui);color:var(--t2)}.fm-gx-mais span{font:italic 700 16px var(--disp);color:var(--am)}',
    '.fm-gx-dica{margin:0}',
    /* G9 a conversa acesa */
    '.fm-gx-dialogo{display:grid;gap:10px}',
    '.fm-gx-fala{display:grid;gap:6px}.fm-gx-fala.d{justify-items:end}',
    '.fm-gx-luz{border:0;font:inherit;color:var(--am);font-weight:800;padding:0 4px;border-radius:6px;background:color-mix(in srgb,var(--am) 20%,transparent);box-shadow:0 0 0 1px color-mix(in srgb,var(--am) 40%,transparent);transition:background .2s}',
    '.fm-gx-luz:hover{background:color-mix(in srgb,var(--am) 32%,transparent)}.fm-gx-luz.on{background:var(--am);color:#1c140b}',
    '.fm-gx-porque{margin:0;max-width:80%;padding:8px 13px;border-radius:12px;border-left:3px solid var(--am);background:rgba(0,0,0,.35);font:600 14.5px/1.45 var(--ui);color:var(--t1);animation:fm-gx-entra .3s ease-out both}',
    /* G10 achar a regra */
    '.fm-gx-exemplos{margin:0;padding:0 0 0 4px;list-style:none;display:grid;gap:8px;counter-reset:x}',
    '.fm-gx-exemplos li{counter-increment:x;position:relative;padding:10px 16px 10px 46px;border-radius:14px;background:rgba(0,0,0,.26);border:1px solid var(--fio);font:600 clamp(18px,1.45vw,23px)/1.45 var(--ui);color:var(--t1)}',
    '.fm-gx-exemplos li::before{content:counter(x);position:absolute;left:14px;top:50%;transform:translateY(-50%);font:900 20px var(--disp);color:var(--ac2,var(--ac))}',
    '.fm-gx-exemplos b{color:var(--gx-quem);font-weight:800;border-bottom:2px solid color-mix(in srgb,var(--gx-quem) 60%,transparent)}.fm-gx-exemplos u{text-decoration:none;color:var(--am);font-weight:800;border-bottom:2px solid color-mix(in srgb,var(--am) 60%,transparent)}',
    '.fm-gx-regras{display:flex;flex-wrap:wrap;gap:8px}',
    '.fm-gx-regra{display:inline-flex;align-items:center;gap:8px;min-height:48px;padding:8px 18px;border-radius:999px;border:1px solid var(--fio2);background:var(--vidro2);color:var(--t1);font:700 16px/1.3 var(--ui)}',
    'button.fm-gx-regra:hover{border-color:var(--ac2,var(--ac))}.fm-gx-regra.no{opacity:.45;text-decoration:line-through;text-decoration-color:rgba(255,110,110,.7)}.fm-gx-regra.on{background:rgba(96,200,135,.18);border-color:#60c887;color:#dcf6e5}',
    'span.fm-gx-regra:not(.on){opacity:.4}',
    /* G11 o som */
    '.fm-gx-som-topo{display:flex;justify-content:space-between;align-items:center;gap:10px}.fm-gx-som-topo .fm-nota{margin:0}',
    '.fm-gx-lento{min-height:36px;padding:0 12px;border-radius:999px;border:1px solid var(--fio2);background:transparent;color:var(--t2);font:800 13px var(--ui)}.fm-gx-lento.on{border-color:var(--ac2,var(--ac));color:var(--t1);background:color-mix(in srgb,var(--ac) 18%,transparent)}',
    '.fm-gx-sons{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px}',
    '.fm-gx-som{display:grid;grid-template-columns:1fr auto 1fr;align-items:start;gap:10px;padding:12px;border-radius:16px;background:rgba(0,0,0,.28);border:1px solid var(--fio)}',
    '.fm-gx-som-l{display:grid;gap:6px;justify-items:start}.fm-gx-som-l small{color:var(--t2);font:500 14px/1.4 var(--ui)}',
    '.fm-gx-vs{align-self:center;font:italic 700 15px var(--disp);color:var(--t3)}',
    '.fm-gx-play{display:inline-flex;align-items:center;gap:9px;min-height:48px;padding:0 18px 0 12px;border-radius:999px;border:1px solid color-mix(in srgb,var(--l,var(--ac)) 55%,transparent);background:color-mix(in srgb,var(--l,var(--ac)) 12%,transparent);color:var(--t1);font:800 clamp(17px,1.4vw,21px) var(--disp)}',
    '.fm-gx-play .fm-gx-ico{color:var(--l,var(--ac))}.fm-gx-play:hover{background:color-mix(in srgb,var(--l,var(--ac)) 22%,transparent)}.fm-gx-play.ouviu{border-style:solid;box-shadow:0 0 0 1px var(--l,var(--ac)) inset}',
    '.fm-gx-qual{font:600 16px var(--ui);color:var(--t2);vertical-align:middle;margin-left:8px}',
    /* G12 a foto primeiro */
    '.fm-gx-fotos{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px}',
    '.fm-gx-foto{position:relative;margin:0;width:100%;border-radius:18px;overflow:hidden;border:1px solid var(--fio2);background:#141119;aspect-ratio:16/9;min-height:220px}',
    '.fm-gx-foto img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.92) brightness(.78)}',
    '.fm-gx-foto figcaption{position:absolute;left:0;right:0;bottom:0;display:grid;gap:10px;justify-items:start;padding:44px 20px 18px;background:linear-gradient(180deg,transparent,rgba(8,6,12,.82) 42%,rgba(8,6,12,.94))}',
    '.fm-gx-antes{font:600 clamp(15px,1.2vw,18px)/1.45 var(--ui);color:var(--t2)}',
    '.fm-gx-foto-f{font:700 clamp(21px,2vw,32px)/1.25 var(--disp);color:var(--t1);animation:fm-escreve .55s ease-out both}.fm-gx-foto-f b,.fm-gx-foto-f mark{color:var(--am)}',
    '.fm-cd .fm-gx-foto{min-width:0}',
    /* G13 a regra de bolso */
    '.fm-gx-bolso-c{position:relative;padding:16px 20px 16px 22px;border-radius:14px;background:linear-gradient(160deg,color-mix(in srgb,var(--am) 9%,rgba(10,8,14,.9)),rgba(10,8,14,.92));border:1px solid color-mix(in srgb,var(--am) 55%,transparent);border-left:4px solid var(--am);box-shadow:inset 0 0 0 4px rgba(0,0,0,.3)}',
    '.fm-gx-bolso-t{display:block;font:italic 700 20px/1.1 var(--disp);color:var(--am);margin-bottom:8px}',
    '.fm-gx-bolso-c ol{list-style:none;margin:0;padding:0;display:grid;gap:4px}',
    '.fm-gx-bolso-c li{font:600 clamp(18px,1.5vw,23px)/1.55 var(--ui);color:var(--t1);opacity:.25}.fm-gx-bolso-c li.on{opacity:1}.fm-gx-bolso-c li.novo{animation:fm-escreve .5s ease-out both}.fm-gx-bolso-c b{color:var(--am)}',
    '.fm-gx-preso{display:inline-flex;align-items:center;gap:8px;flex-wrap:wrap;color:#bdf0cd;font:700 15px var(--ui)}',
    '.fm-gx-link{border:0;background:transparent;color:var(--t3);text-decoration:underline;font:600 14px var(--ui);padding:4px}',
    '.fm-gx-bolso{position:fixed;left:16px;bottom:92px;z-index:6;width:min(300px,calc(100vw - 32px));border-radius:14px;background:rgba(12,10,18,.94);border:1px solid color-mix(in srgb,var(--am) 55%,transparent);border-left:4px solid var(--am);box-shadow:0 18px 40px rgba(0,0,0,.55);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);animation:fm-gx-entra .35s ease-out both}',
    '.fm-gx-bolso-cab{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;border:0;background:transparent;padding:10px 14px;color:var(--am);font:italic 700 16px var(--disp);text-align:left}',
    '.fm-gx-bolso-cab i{width:8px;height:8px;border:solid currentColor;border-width:0 2px 2px 0;transform:rotate(45deg);margin-top:-4px}.fm-gx-bolso.fechado .fm-gx-bolso-cab i{transform:rotate(-135deg);margin-top:4px}.fm-gx-bolso.fechado ol{display:none}',
    '@media (max-width:640px){.fm-gx-bolso:not(.aberto) ol{display:none}.fm-gx-bolso:not(.aberto) .fm-gx-bolso-cab i{transform:rotate(-135deg);margin-top:4px}.fm-gx-bolso:not(.aberto){width:auto}}',
    '.fm-gx-bolso ol{list-style:none;margin:0;padding:0 14px 12px;display:grid;gap:2px}.fm-gx-bolso li{font:600 14.5px/1.5 var(--ui);color:var(--t1)}.fm-gx-bolso b{color:var(--am)}',
    /* G14 o caçador de erros */
    '.fm-gx-caca{margin:0;font:600 clamp(19px,1.55vw,25px)/1.7 var(--ui);color:var(--t1)}',
    '.fm-gx-pal{border:0;background:transparent;font:inherit;color:inherit;padding:0 3px;margin:0 -1px;border-radius:6px;transition:background .15s}.fm-gx-pal:hover{background:rgba(255,255,255,.08)}',
    '.fm-gx-pal.fora{color:var(--t3);background:rgba(255,255,255,.04);animation:fm-nao .32s}',
    '.fm-gx-pego{color:#ffb4a8;text-decoration-color:rgba(255,110,110,.8);text-decoration-thickness:2px}',
    '.fm-gx-fix{margin:0;display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:14px;background:rgba(96,200,135,.10);border:1px solid rgba(96,200,135,.38);font:700 clamp(19px,1.6vw,25px)/1.3 var(--disp);color:#e3f7e9;animation:fm-escreve .5s ease-out both}.fm-gx-fix .fm-gx-ico{color:#9dd9b4}.fm-gx-fix b{color:var(--am)}',
    '.fm-gx-linhas>li{flex-direction:column;align-items:flex-start}',
    /* dentro do cartão (FM.cartoes) a regra do kit aumenta todo <p> filho do <li>: a linha do porquê e a bolha voltam ao tamanho delas */
    '.fm-cd ol.fm-linhas.fm-cd-um>li>p.fm-gx-por{font:600 15px/1.45 var(--ui);color:var(--t2)}',
    '.fm-cd ol.fm-linhas.fm-cd-um>li>p.fm-gx-balao{width:auto;font:600 clamp(17px,1.4vw,22px)/1.45 var(--ui)}',
    '.fm-cd ol.fm-linhas.fm-cd-um>li>p.fm-gx-fix{width:100%;font:700 clamp(19px,1.6vw,25px)/1.3 var(--disp);color:#e3f7e9}',
    '.fm-cd ol.fm-linhas.fm-cd-um>li>p.fm-gx-caca{font:600 clamp(19px,1.55vw,25px)/1.7 var(--ui)}',
    '@keyframes fm-gx-entra{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}',
    '@keyframes fm-gx-sobe{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}',
    '@keyframes fm-gx-vem{0%{opacity:.2;transform:translateY(-1.3em) scale(1.08)}60%{opacity:1}100%{opacity:1;transform:none}}',
    '@keyframes fm-gx-pop{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:none}}',
    /* o celular (390 px) */
    '@media (max-width:760px){.fm-gx-tres,.fm-gx-duas,.fm-gx-dif{grid-template-columns:minmax(0,1fr)}.fm-gx-pares,.fm-gx-sons,.fm-gx-fotos{grid-template-columns:minmax(0,1fr)}.fm-gx-uso3-img{height:70px}.fm-gx-letra{font-size:42px;top:-14px}}',
    '@media (max-width:520px){.fm-gx{gap:13px}.fm-gx-par{grid-template-columns:minmax(0,1fr)}.fm-gx-som{grid-template-columns:minmax(0,1fr)}.fm-gx-vs{justify-self:start}.fm-gx-tl{gap:4px}.fm-gx-tl-bt small{display:none}.fm-gx-chip{padding:7px 9px;font-size:14px}.fm-gx-foto{aspect-ratio:auto;min-height:300px}.fm-gx-bolso{bottom:84px;width:min(260px,calc(100vw - 32px))}.fm-gx-balao{max-width:100%}.fm-gx-porque{max-width:100%}.fm-gx-b b,.fm-gx-peca b{padding:5px 10px}.fm-gx-passos li{padding:4px 10px 4px 5px;font-size:11.5px}}',
    '@media (prefers-reduced-motion:reduce){.fm-gx *,.fm-gx-bolso{animation:none!important;transition:none!important}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'fm-gx-css'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
})();
