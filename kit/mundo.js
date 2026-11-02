/* 23/10/2026: aula sem --ac (chassi antigo da WOLFLIX) deixava os botões cheios invisíveis; empresta o --am */
;(function(){try{var r=document.documentElement,c=getComputedStyle(r);if(!c.getPropertyValue('--ac').trim()){r.style.setProperty('--ac',c.getPropertyValue('--am').trim()||'#f0b866');}}catch(e){}})();
/* ============================================================
   KIT LIVE CLASS · O MUNDO (A ABERTURA SEM O MAPA)        19/10/2026
   Pedido do Carlos depois de dar a Daredevil: "muitas aulas de WOLFLIX
   começam com aquele mapa… ser mais dinâmico, apresentar o mundo de uma
   outra forma, com outros exercícios". Catálogo aprovado no mesmo dia
   (WOLFLIX/_catalogo-abertura). O mapa (kit/lore.js) fica só onde viajar
   é a história.
   Uma cena { k: 'mundo' } no L da aula. Os dados vêm de window.WL_MUNDO
   (mundo-dados.js da aula), e D.forma escolhe o formato:
     olhar   · A · First Look: o trailer sem som, 10 s de cada vez; o aluno aposta o gênero
     escuro  · B · In the Dark: só o som do trailer, tela coberta; depois a foto
     mala    · C · What’s in the Bag?: cinco objetos, um por vez; o aluno monta a história
     regras  · D · Could You Live Here?: quatro regras do mundo; sim / não / só se…
     mentira · E · Two Truths and a Lie: três frases, uma é mentira; no fim, a do aluno
     lado    · F · Pick a Side: dois lados; ele escolhe, defende, o professor rebate
     entrevista · G · The Interview: o professor é alguém do mundo (ficha só para ele)
     celular · H · Their Phone: as mensagens chegam uma a uma; ele lê, reage e responde
     ordem   · I · Put It in Order: quatro cartas embaralhadas; ele ordena e reconta
     jornal  · J · Front Page: três manchetes; ele escolhe, conta e reage
     conversa · Warm-up: uma pergunta da vida do aluno por vez; o filme numa linha embaixo da foto
   Todo formato fecha com D.vida (perguntas da vida do aluno, com resposta-exemplo).
   D.antes substitui o ANTES da aula (as perguntas antes do trailer), como o lore fazia.
   Estado em S.__mu; toques "wmu-…". Vídeo nunca divide a tela com botão que repinta:
   repintar recriaria o vídeo e o som recomeçaria.
   ============================================================ */
(function () {
  var D = window.WL_MUNDO;
  if (!D || typeof R === 'undefined') return;
  var T = (typeof TOQUES !== 'undefined') ? TOQUES : null;
  if (!T) {
    T = {};
    document.addEventListener('click', function (ev) {
      var b = ev.target.closest && ev.target.closest('[data-a^="wmu-"]'); if (!b) return;
      var f = T[b.getAttribute('data-a')]; if (!f) return;
      if (f(b, +b.getAttribute('data-n')) !== false && typeof pinta === 'function') pinta();
    });
  }
  if (D.antes && typeof ANTES !== 'undefined' && ANTES.splice) { ANTES.splice(0, ANTES.length); D.antes.forEach(function (x) { ANTES.push(x); }); }
  function st() { if (!S.__mu) S.__mu = { n: 0, p: 0, esc: {}, seq: [], usadas: {} }; return S.__mu; }
  function yt() { return D.yt || (typeof YT !== 'undefined' ? YT : ''); }
  function seg(txt, cheio) { return '<button type="button" class="btn' + (cheio ? ' cheio' : '') + ' wmu-seg" data-a="wmu-seg">' + txt + '</button>'; }
  function chips(lista, chave, sel) {
    return '<div class="wmu-chips">' + lista.map(function (o, i) { return '<button type="button" class="wmu-chip' + (sel === i ? ' on' : '') + '" data-a="wmu-esc" data-c="' + chave + '" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>';
  }
  function pergunta(rot, q, chave, ex, extra) {
    return '<div class="wmu-q vd"><small>' + rot + '</small><h3>' + q + '</h3>' + (extra || '') + (ex ? mostra(chave, ex, 1) : '') + '</div>';
  }
  function foto(k, legenda, cls) { return '<figure class="wmu-foto ' + (cls || '') + '"><img src="' + img(k) + '" alt="">' + (legenda ? '<figcaption>' + legenda + '</figcaption>' : '') + '</figure>'; }
  function vida(rot) {
    if (D.vida && D.vida.length) return D.vida.map(function (x, i) { return pergunta(rot || 'Your turn · ' + (i + 1), x.q, 'wmuv' + i, x.ex); }).join('');
    /* sem perguntas de fecho: a ponte para o trailer (a primeira pergunta do ANTES, com a frase de apoio) */
    var a = (D.antes || [])[0]; return a ? '<div class="wmu-q vd"><small>Now the trailer · guess first</small><h3>' + a.q + '</h3>' + (a.h ? '<div class="wmu-chips"><span class="wmu-chip">' + a.h + '</span></div>' : '') + '</div>' : '';
  }
  function mesa(esq, dir, cls) { return '<div class="wmu-mesa' + (cls ? ' ' + cls : '') + '"><div class="wmu-col">' + esq + '</div><div class="wmu-col">' + dir + '</div></div>'; }
  function passos(total, n) { return '<div class="wmu-passos">' + Array.apply(null, Array(total)).map(function (_, i) { return '<i class="' + (i < n ? 'foi' : i === n ? 'on' : '') + '"></i>'; }).join('') + '</div>'; }
  function video(ini, fim, extra, titulo) { return '<div class="wmu-video">' + iframe(yt(), titulo || 'Trailer', '&start=' + ini + '&end=' + fim + '&autoplay=1' + (extra || '')) + '</div>'; }

  var F = {};

  /* A · FIRST LOOK: cada rodada = ver (sem som) → falar. */
  F.olhar = function (m) {
    var Rr = D.rodadas, r = Math.floor(m.p / 2), ver = m.p % 2 === 0;
    if (r >= Rr.length) {
      var aposta = D.ops[m.esc.gen != null ? m.esc.gen : -1];
      return passos(Rr.length * 2 + 1, m.p) + mesa('<div class="wmu-aposta vd"><small>Your bet</small><b>' + (aposta || '—') + '</b><span>Check it after the whole trailer.</span></div>' + foto(D.foto || 'capa'), vida());
    }
    var x = Rr[r];
    if (ver) return passos(Rr.length * 2 + 1, m.p) + mesa(video(x.ini, x.fim, '&mute=1', 'First look · no sound'), '<div class="wmu-q vd"><small>Seconds ' + x.ini + ' to ' + x.fim + ' · no sound</small><h3>' + x.olha + '</h3></div>' + seg('Freeze: now talk', 1));
    return passos(Rr.length * 2 + 1, m.p) + mesa(foto(x.img || D.foto || 'capa', x.leg),
      (r === 0 ? '<div class="wmu-q vd"><small>Your bet</small><h3>' + D.q + '</h3>' + chips(D.ops, 'gen', m.esc.gen) + '</div>' : '')
      + pergunta(r === 0 ? 'Why?' : 'Look again', x.q, 'wmua' + r, x.ex) + seg(r < Rr.length - 1 ? 'Ten more seconds' : 'Close your bet'));
  };

  /* B · IN THE DARK: ouvir coberto → dizer → tirar a tampa. */
  F.escuro = function (m) {
    if (m.p === 0) return passos(3, 0) + mesa('<div class="wmu-breu vd"><i></i><b>In the dark</b><small>Close your eyes. Only listen.</small></div>', '<div class="wmu-q vd"><small>Before you listen</small><h3>' + D.q + '</h3></div>' + seg('Listen in the dark', 1));
    if (m.p === 1) return passos(3, 1) + mesa('<div class="wmu-coberto">' + video(D.ini || 0, D.fim || 20, '', 'Listen only') + '<div class="wmu-tampa" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><b>Listening…</b></div></div><button type="button" class="btn wmu-de-novo" data-a="wmu-denovo">Play it again</button>',
      D.ouvir.map(function (x, i) { return '<div class="wmu-q vd"><small>What can you hear? · ' + (i + 1) + '</small><h3>' + x.q + '</h3><div class="wmu-chips">' + x.ops.map(function (o) { return '<span class="wmu-chip">' + o + '</span>'; }).join('') + '</div></div>'; }).join('') + seg('Take off the cover', 1));
    return passos(3, 2) + mesa(foto(D.foto || 'capa', D.revela), '<div class="wmu-q vd"><small>What you could hear</small>' + D.ouvir.map(function (x) { return '<p>' + x.ex + '</p>'; }).join('') + '</div>' + vida());
  };

  /* C · WHAT’S IN THE BAG: um objeto por vez; o palpite cresce. */
  F.mala = function (m) {
    var I = D.itens, n = m.p;
    var grade = '<div class="wmu-mala">' + I.map(function (it, i) { return '<figure class="' + (i < n ? 'foi' : i === n ? 'on' : '') + '">' + (i <= n ? '<img src="' + img(it.img) + '" alt="' + h(it.nome) + '"><figcaption>' + (i + 1) + ' · ' + it.nome + '</figcaption>' : '<b>' + (i + 1) + '</b>') + '</figure>'; }).join('') + '</div>';
    if (n < I.length) { var it = I[n]; return passos(I.length + 1, n) + mesa(grade, pergunta('Object ' + (n + 1) + ' of ' + I.length + ' · ' + it.nome, it.q, 'wmum' + n, it.ex) + seg(n < I.length - 1 ? 'Open the next object' : 'Close the bag', 1)); }
    return passos(I.length + 1, n) + mesa(grade, '<div class="wmu-q vd"><small>' + (D.revelaRot || 'Whose bag is it?') + '</small><p>' + D.revela + '</p></div>' + pergunta('Now tell the story', D.conta, 'wmumc', D.contaEx) + vida());
  };

  /* D · COULD YOU LIVE HERE: uma regra por vez; sim / não / só se. */
  F.regras = function (m) {
    var Rg = D.regras, n = m.p, ops = ['Yes, I could', 'No way', 'Only if…'];
    var lista = '<ol class="wmu-regras">' + Rg.map(function (x, i) { return '<li class="' + (i < n ? 'foi' : i === n ? 'on' : '') + '">' + (i <= n ? x.t : '…') + (i < n && m.esc['r' + i] != null ? '<em>' + ops[m.esc['r' + i]] + '</em>' : '') + '</li>'; }).join('') + '</ol>';
    if (n < Rg.length) { var x = Rg[n]; return passos(Rg.length + 1, n) + mesa(foto(x.img || D.foto || 'capa', '', 'regra') + lista, '<div class="wmu-q vd"><small>Could you live with this rule?</small><h3>' + (x.q || 'Could you live with it? Why?') + '</h3>' + chips(ops, 'r' + n, m.esc['r' + n]) + mostra('wmur' + n, x.ex, 1) + '</div>' + seg(n < Rg.length - 1 ? 'The next rule' : 'The last rule is yours', 1)); }
    return passos(Rg.length + 1, n) + mesa(foto(D.foto || 'capa') + lista, pergunta('Rule ' + (Rg.length + 1) + ' · yours', D.sua || 'Invent one more rule for this world. Would people follow it?', 'wmurs', D.suaEx) + vida());
  };

  /* E · TWO TRUTHS AND A LIE: escolher → virar → no fim, a vez do aluno. */
  F.mentira = function (m) {
    var Rr = D.rodadas, r = m.p;
    if (r < Rr.length) {
      var x = Rr[r], esc = m.esc['m' + r];
      var fr = '<div class="wmu-tres">' + x.frases.map(function (f, i) { var cls = esc == null ? '' : (i === x.mentira ? ' mentira' : ' verdade'); return '<button type="button" class="wmu-frase' + cls + (esc === i ? ' on' : '') + '" data-a="wmu-esc" data-c="m' + r + '" data-n="' + i + '"' + (esc != null ? ' disabled' : '') + '><b>' + (i + 1) + '</b>' + f + (esc != null ? '<em>' + (i === x.mentira ? 'THE LIE' : 'TRUE') + '</em>' : '') + '</button>'; }).join('') + '</div>';
      return passos(Rr.length + 1, r) + mesa(foto(x.img || D.foto || 'capa', x.sobre), '<div class="wmu-q vd"><small>Round ' + (r + 1) + ' · one of these is not true</small><h3>Which one is the lie? Say why first, then tap.</h3></div>' + fr + (esc != null ? '<div class="wmu-q vd"><small>' + (esc === x.mentira ? 'You found it!' : 'Not that one.') + '</small><p>' + x.porque + '</p></div>' + seg(r < Rr.length - 1 ? 'Next round' : 'Your turn', 1) : ''));
    }
    return passos(Rr.length + 1, r) + mesa(foto(D.foto || 'capa'), pergunta('Your turn', 'Now you: say two true things and one lie about your life. Your teacher guesses.', 'wmumt', D.suaEx) + vida());
  };

  /* F · PICK A SIDE: ver os lados → escolher e defender → o professor rebate → a pergunta da vida. */
  F.lado = function (m) {
    var L2 = D.lados, esc = m.esc.lado;
    var lados = '<div class="wmu-lados">' + L2.map(function (x, i) { return '<button type="button" class="wmu-ladob' + (esc === i ? ' on' : '') + '" data-a="wmu-esc" data-c="lado" data-n="' + i + '"><img src="' + img(x.img) + '" alt=""><b>' + x.nome + '</b><span>' + x.t + '</span></button>'; }).join('') + '</div>';
    if (esc == null) return passos(3, 0) + '<div class="wmu-q vd wmu-larga"><small>Pick a side</small><h3>' + D.q + '</h3></div>' + lados;
    var c = m.p, C = D.contra[esc] || [];
    if (c <= C.length) {
      return passos(3, 1) + mesa(lados, '<div class="wmu-q vd"><small>You have 30 seconds</small><h3>Why ' + L2[esc].nome + '? Defend your choice.</h3>' + mostra('wmul' + esc, D.ex[esc], 1) + '</div>'
        + (c > 0 ? '<div class="wmu-contra vd"><small>The teacher pushes back · ' + c + '</small><p>“' + C[c - 1] + '”</p><span>Answer it. Do you change your mind?</span></div>' : '')
        + (c < C.length ? seg(c === 0 ? 'The teacher pushes back' : 'Push back again', 1) : seg('Close the debate', 1)));
    }
    return passos(3, 2) + mesa(lados, '<div class="wmu-q vd"><small>After the trailer</small><p>' + (D.depois || 'Are you still on the same side? Watch and see.') + '</p></div>' + vida());
  };

  /* G · THE INTERVIEW: a ficha é só do professor; o aluno pergunta, adivinha, a foto revela. */
  F.entrevista = function (m) {
    var Q = D.perguntas;
    var ficha = '<div class="wmu-ficha so-prof vd"><small>ONLY FOR YOU, TEACHER · you are</small><b>' + D.quem + '</b><ul>' + D.fatos.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul></div>';
    if (m.p === 0) return passos(3, 0) + mesa(foto(D.capa || 'capa', D.capaLeg) + seg('I know who it is', 1), ficha + '<div class="wmu-q vd"><small>The interview</small><h3>Your teacher is someone from this world. Ask questions. Find out who.</h3><div class="wmu-chips">' + Q.map(function (q, i) { return '<button type="button" class="wmu-chip' + (m.usadas[i] ? ' on' : '') + '" data-a="wmu-usa" data-n="' + i + '">' + q + '</button>'; }).join('') + '</div><span class="wmu-dica">Tap a question when you ask it. Invent your own, too.</span></div>', 'dir-larga');
    if (m.p === 1) return passos(3, 1) + mesa(foto(D.capa || 'capa', D.capaLeg) + seg('Show me', 1), ficha + pergunta('Your guess', 'Who is your teacher? What is their life like? Say three things.', 'wmueg', D.palpiteEx), 'dir-larga');
    return passos(3, 2) + mesa(foto(D.foto || 'capa', '<b>' + D.quem + '</b> · ' + D.revela), vida());
  };

  /* H · THEIR PHONE: as mensagens chegam uma a uma; ler alto, dizer o que acontece, responder. */
  F.celular = function (m) {
    var Ms = D.msgs, n = Math.min(m.p, Ms.length);
    var fone = '<div class="wmu-fone vd"><div class="wmu-fone-topo"><b>' + D.dono + '</b><small>' + (D.onde || '') + '</small></div>' + Ms.slice(Math.max(0, n - 2), n + 1).map(function (x, j) { var i = j + Math.max(0, n - 2); return '<p class="' + (x.eu ? 'eu' : '') + (i === n ? ' nova' : '') + '"><b>' + x.de + ' · ' + x.hora + '</b>' + x.t + '</p>'; }).join('') + '</div>';
    if (m.p < Ms.length) { var x = Ms[m.p]; return passos(Ms.length + 1, m.p) + mesa(fone, pergunta('Read it out loud', x.q, 'wmuc' + m.p, x.ex) + seg(m.p < Ms.length - 1 ? 'The next message' : 'Reply', 1)); }
    return passos(Ms.length + 1, m.p) + mesa(fone, pergunta('Reply out loud', D.responde, 'wmucr', D.respondeEx) + vida());
  };

  /* I · PUT IT IN ORDER: tocar na ordem → conferir → recontar. */
  F.ordem = function (m) {
    var C = D.cartas, mostraOrd = D.embaralha || [2, 0, 3, 1], seq = m.seq, cheia = seq.length === C.length;
    var cartas = '<div class="wmu-cartas">' + mostraOrd.map(function (k) { var x = C[k], pos = seq.indexOf(k), ok = cheia && seq[pos] === pos; return '<button type="button" class="wmu-carta' + (pos > -1 ? ' on' : '') + (cheia ? (pos === k ? ' certa' : ' errada') : '') + '" data-a="wmu-ord" data-n="' + k + '"' + (cheia ? ' disabled' : '') + '><img src="' + img(x.img) + '" alt=""><b>' + (pos > -1 ? pos + 1 : '?') + '</b><span>' + x.t + '</span>' + (cheia ? '<em>' + (k + 1) + '</em>' : '') + '</button>'; }).join('') + '</div>';
    if (!cheia) return passos(3, 0) + '<div class="wmu-q vd wmu-larga"><small>Four moments of the story</small><h3>What happened first? Tap the cards in order and say why: “First… then…”</h3>' + (seq.length ? '<button type="button" class="pilula" data-a="wmu-limpa">Start again</button>' : '') + '</div>' + cartas;
    var acertos = seq.filter(function (k, i) { return k === i; }).length;
    return passos(3, m.p ? 2 : 1) + cartas + '<div class="wmu-mesa"><div class="wmu-col"><div class="wmu-q vd"><small>' + acertos + ' of ' + C.length + ' in the right place</small><p>The small number on each card is the real order.</p></div></div><div class="wmu-col">' + pergunta('Now tell the whole story', 'Tell the story from the beginning, in your words. Use first, then, after that, in the end.', 'wmuor', D.contaEx) + vida() + '</div></div>';
  };

  /* J · FRONT PAGE: escolher a manchete → ler o começo → reagir. */
  F.jornal = function (m) {
    var Mn = D.manchetes, esc = m.esc.jn;
    var capa = '<div class="wmu-jornal vd"><small>' + D.jornal + '</small><span class="wmu-data">' + (D.data || '') + '</span>' + Mn.map(function (x, i) { return '<button type="button" class="wmu-manchete' + (esc === i ? ' on' : '') + (i === 0 ? ' grande' : '') + '" data-a="wmu-esc" data-c="jn" data-n="' + i + '"><b>' + x.t + '</b><span>' + x.sub + '</span></button>'; }).join('') + '</div>';
    if (esc == null) return passos(3, 0) + mesa(capa, '<div class="wmu-q vd"><small>Front page</small><h3>Which story would you read first? Tap it, then say what you think happened.</h3></div>');
    var x = Mn[esc];
    if (!m.p) return passos(3, 1) + mesa(capa, '<div class="wmu-q vd"><small>The story</small><p class="wmu-materia">' + x.txt + '</p></div>' + pergunta('React', x.q, 'wmuj' + esc, x.ex) + seg('Close the paper', 1));
    return passos(3, 2) + mesa(capa, vida());
  };

  /* CONVERSA · warm-up de verdade (19/10, o Carlos depois de dar a Brand New Day: "eu quero conversa de
     warm-up mesmo… achei o opening meio confuso"). Uma pergunta da vida do aluno por vez, grande; o filme
     entra só numa linha embaixo da foto. Nada para adivinhar, nada de vídeo. */
  F.conversa = function (m) {
    var Q = D.perguntas, n = Math.min(m.p, Q.length - 1), x = Q[n];
    return passos(Q.length, n) + mesa(foto(x.img || D.foto || 'capa', x.filme ? '<b>In the film</b>' + x.filme : ''),
      '<div class="wmu-q wmu-conversa vd"><small>Warm-up · question ' + (n + 1) + ' of ' + Q.length + '</small><h3>' + x.q + '</h3>'
      + (x.st ? '<div class="wmu-chips">' + x.st.map(function (s) { return '<span class="wmu-chip">' + s + '</span>'; }).join('') + '</div>' : '')
      + mostra('wmuw' + n, x.ex, 1) + '</div>'
      + (x.mais ? '<div class="wmu-q vd"><small>Ask more</small><p>' + x.mais + '</p></div>' : '')
      + (m.p < Q.length - 1 ? seg('Next question', 1) : ''));
  };

  /* 19/10 (decisão do Carlos): TODA abertura começa com o warm-up de conversa (D.aquece, 3–4 perguntas da
     vida do aluno, uma por vez) e só depois vem o momento do mundo, no formato da aula. Contador próprio
     (m.aq), para os formatos não mudarem. */
  function aquece(m) {
    var Q = D.aquece, n = m.aq, x = Q[n];
    return '<div class="wmu-fase"><b>1</b> Warm-up<span>·</span><i>2</i> ' + (D.mundoRot || 'The world') + '</div>' + passos(Q.length, n)
      + mesa(foto(x.img || D.foto || 'capa', x.filme ? '<b>In the film</b>' + x.filme : ''),
        '<div class="wmu-q wmu-conversa vd"><small>Warm-up · question ' + (n + 1) + ' of ' + Q.length + '</small><h3>' + x.q + '</h3>'
        + (x.st ? '<div class="wmu-chips">' + x.st.map(function (s) { return '<span class="wmu-chip">' + s + '</span>'; }).join('') + '</div>' : '')
        + mostra('wmuaq' + n, x.ex, 1) + '</div>'
        + (x.mais ? '<div class="wmu-q vd"><small>Ask more</small><p>' + x.mais + '</p></div>' : '')
        + '<button type="button" class="btn cheio wmu-seg" data-a="wmu-aq">' + (n < Q.length - 1 ? 'Next question' : 'Now: ' + (D.mundoRot || 'the world')) + '</button>');
  }
  R.mundo = function (c) {
    var m = st(), f = F[D.forma];
    if (m.aq == null) m.aq = 0;
    if (D.aquece && D.forma !== 'conversa' && m.aq < D.aquece.length) return cab(c) + aquece(m);
    return cab(c) + (D.aquece && D.forma !== 'conversa' ? '<div class="wmu-fase"><i>1</i> Warm-up<span>·</span><b>2</b> ' + (D.mundoRot || 'The world') + '</div>' : '') + (f ? f(m) : '<p>WL_MUNDO: forma desconhecida</p>');
  };
  T['wmu-aq'] = function () { st().aq++; };

  T['wmu-seg'] = function () { var m = st(); m.p++; };
  T['wmu-denovo'] = function () { var m = st(); m.p = 1; };   /* repinta: o vídeo recomeça */
  T['wmu-esc'] = function (b, n) { var m = st(), c = b.getAttribute('data-c'); if (c.charAt(0) === 'm' && m.esc[c] != null) return false; m.esc[c] = n; if (c === 'lado') m.p = 0; };
  T['wmu-usa'] = function (b, n) { var m = st(); m.usadas[n] = !m.usadas[n]; };
  T['wmu-ord'] = function (b, n) { var m = st(); if (m.seq.indexOf(n) < 0) m.seq.push(n); };
  T['wmu-limpa'] = function () { st().seq = []; };

  var A = 'var(--ac,var(--am,#f0b866))', N = 'var(--noite,#0b0b10)';
  var css = document.createElement('style');
  css.textContent = ''
    + '.wmu-mesa{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:24px;align-items:start;margin-top:8px}'
    + '.wmu-mesa.dir-larga{grid-template-columns:minmax(0,.8fr) minmax(0,1.25fr)}.wmu-mesa.dir-larga .wmu-ficha ul{grid-template-columns:1fr 1fr;column-gap:22px}'
    + '.wmu-col{display:grid;gap:12px;align-content:start;min-width:0}'
    + '.wmu-passos{display:flex;gap:6px;justify-content:center;margin:2px 0 10px}.wmu-passos i{width:26px;height:5px;border-radius:9px;background:var(--fio2)}.wmu-passos i.foi{background:color-mix(in srgb,' + A + ' 55%,transparent)}.wmu-passos i.on{background:' + A + '}'
    + '.wmu-q{display:grid;gap:8px;padding:16px 18px;border-radius:var(--r1,14px);border:1px solid var(--fio2);background:var(--vidro)}'
    + '.wmu-q small,.wmu-ficha small,.wmu-contra small,.wmu-aposta small,.wmu-jornal>small{font:800 12px var(--ui);letter-spacing:.12em;text-transform:uppercase;color:' + A + '}'
    + '.wmu-q h3{margin:0;font:700 clamp(20px,1.6vw,28px)/1.2 var(--ui);color:var(--t1);text-wrap:balance}'
    + '.wmu-q p{margin:0;font:500 clamp(16px,1.1vw,19px)/1.5 var(--ui);color:var(--t2)}'
    + '.wmu-q .resp-btn,.wmu-q .resposta{margin:2px 0 0}'
    + '.wmu-larga{margin:6px 0 14px}'
    + '.wmu-fase{display:flex;justify-content:center;align-items:center;gap:8px;margin:0 0 4px;font:700 13px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--t3)}.wmu-fase b,.wmu-fase i{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;font-style:normal;font-size:12px}.wmu-fase b{background:' + A + ';color:' + N + '}.wmu-fase i{border:1px solid var(--fio2)}.wmu-fase span{opacity:.5}'
    + '.wmu-conversa{padding:22px 24px;gap:12px}.wmu-conversa h3{font-size:clamp(24px,2.1vw,36px)}'
    + '.wmu-dica{font:500 14px var(--ui);color:var(--t3)}'
    + '.wmu-seg{justify-self:start}'
    + '.wmu-chips{display:flex;flex-wrap:wrap;gap:8px}'
    + '.wmu-chip{padding:8px 14px;border-radius:999px;border:1px solid var(--fio2);background:transparent;font:600 clamp(15px,1.05vw,17px) var(--ui);color:var(--t1);cursor:pointer}'
    + 'span.wmu-chip{cursor:default}'
    + '.wmu-chip.on{border-color:' + A + ';background:color-mix(in srgb,' + A + ' 22%,transparent)}'
    + '.wmu-foto{margin:0;display:grid;gap:10px}'
    + '.wmu-foto img{width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:var(--r1,14px);border:1px solid var(--fio2);box-shadow:0 24px 60px rgba(0,0,0,.5)}'
    + '.wmu-foto figcaption{font:500 clamp(15px,1.05vw,18px)/1.5 var(--ui);color:var(--t2)}.wmu-foto figcaption b{color:' + A + ';margin-right:6px}'
    + '.wmu-video .video{border-radius:var(--r1,14px);overflow:hidden}'
    + '.wmu-aposta{display:grid;gap:4px;padding:16px 18px;border-radius:var(--r1,14px);border:1.5px solid ' + A + ';background:color-mix(in srgb,' + A + ' 10%,transparent)}.wmu-aposta b{font:800 clamp(24px,2vw,34px) var(--disp);color:var(--t1)}.wmu-aposta span{font:500 15px var(--ui);color:var(--t2)}'
    + '.wmu-breu{display:grid;place-items:center;gap:8px;min-height:260px;border-radius:var(--r1,14px);background:radial-gradient(circle at 50% 42%,color-mix(in srgb,' + A + ' 26%,transparent),#000 62%);border:1px solid var(--fio2);text-align:center;padding:18px}'
    + '.wmu-breu i{width:64px;height:64px;border-radius:50%;border:2px solid ' + A + ';box-shadow:0 0 0 12px color-mix(in srgb,' + A + ' 12%,transparent)}.wmu-breu b{font:700 clamp(28px,2.2vw,40px) var(--disp);color:var(--t1)}.wmu-breu small{font:500 15px var(--ui);color:var(--t2)}'
    + '.wmu-coberto{position:relative;border-radius:var(--r1,14px);overflow:hidden}'
    + '.wmu-tampa{position:absolute;inset:0;background:radial-gradient(circle,#15100c,#000 70%);display:flex;align-items:center;justify-content:center;gap:6px;pointer-events:none}'
    + '.wmu-tampa span{width:6px;height:40px;border-radius:3px;background:' + A + ';animation:wmuBarra 1s ease-in-out infinite}.wmu-tampa span:nth-child(2){animation-delay:.15s;height:56px}.wmu-tampa span:nth-child(3){animation-delay:.3s;height:30px}.wmu-tampa span:nth-child(4){animation-delay:.45s;height:50px}.wmu-tampa span:nth-child(5){animation-delay:.6s;height:24px}.wmu-tampa b{margin-left:14px;font:600 16px var(--ui);color:var(--t2)}'
    + '@keyframes wmuBarra{50%{transform:scaleY(.35)}}'
    + '.wmu-de-novo{justify-self:start;margin-top:10px}'
    + '.wmu-mala{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}'
    + '.wmu-mala figure{margin:0;position:relative;aspect-ratio:4/3;border-radius:12px;overflow:hidden;border:1px solid var(--fio2);background:var(--vidro);display:grid;place-items:center}'
    + '.wmu-mala figure img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.wmu-mala figure>b{font:800 28px var(--disp);color:var(--t3)}'
    + '.wmu-mala figure.on{outline:2px solid ' + A + ';outline-offset:2px}.wmu-mala figure.foi img{filter:saturate(.7) brightness(.8)}'
    + '.wmu-mala figcaption{position:absolute;left:0;right:0;bottom:0;padding:18px 10px 8px;background:linear-gradient(transparent,rgba(0,0,0,.85));font:700 13.5px var(--ui);color:#fff}'
    + '.wmu-mala figure:first-child{grid-column:span 2;grid-row:span 2;aspect-ratio:auto}'
    + '.wmu-regras{margin:0;padding-left:24px;display:grid;gap:6px}.wmu-regras li{font:600 clamp(15px,1.05vw,17px)/1.4 var(--ui);color:var(--t3)}.wmu-regras li.on{color:var(--t1);font-size:clamp(18px,1.4vw,24px);font-weight:700}.wmu-regras li.foi{color:var(--t2)}.wmu-regras li::marker{color:' + A + ';font-weight:800}'
    + '.wmu-regras em{margin-left:8px;font-style:normal;font-size:13px;padding:2px 9px;border-radius:999px;border:1px solid ' + A + ';color:' + A + '}'
    + '.wmu-foto.regra figcaption{font:700 clamp(19px,1.5vw,26px)/1.3 var(--ui);color:var(--t1)}'
    + '.wmu-tres{display:grid;gap:10px}'
    + '.wmu-frase{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:14px 16px;border-radius:12px;border:1px solid var(--fio2);background:var(--vidro);font:600 clamp(16px,1.15vw,19px)/1.35 var(--ui);color:var(--t1);text-align:left;cursor:pointer}'
    + '.wmu-frase b{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--fio2);font:800 15px var(--ui)}'
    + '.wmu-frase em{font:800 11.5px var(--ui);font-style:normal;letter-spacing:.12em;padding:3px 9px;border-radius:999px}'
    + '.wmu-frase.verdade em{background:rgba(159,220,174,.16);color:var(--ok,#9fdcae)}.wmu-frase.mentira{border-color:var(--erro,#f2837a)}.wmu-frase.mentira em{background:rgba(242,131,122,.18);color:var(--erro,#f2837a)}'
    + '.wmu-frase.on{box-shadow:0 0 0 2px ' + A + '}.wmu-frase[disabled]{cursor:default}'
    + '.wmu-lados{display:grid;grid-template-columns:1fr 1fr;gap:16px}'
    + '.wmu-ladob{position:relative;display:grid;align-content:end;gap:6px;min-height:clamp(220px,34vh,340px);padding:18px;border-radius:18px;overflow:hidden;border:1px solid var(--fio2);background:#000;text-align:left;cursor:pointer;isolation:isolate}'
    + '.wmu-ladob img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2;opacity:.7}.wmu-ladob::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(transparent 30%,rgba(0,0,0,.88))}'
    + '.wmu-ladob b{font:800 clamp(22px,1.8vw,30px) var(--disp);color:#fff}.wmu-ladob span{font:500 clamp(14px,1vw,16px)/1.45 var(--ui);color:#ddd}'
    + '.wmu-ladob.on{box-shadow:0 0 0 3px ' + A + '}.wmu-ladob.on img{opacity:.95}'
    + '.wmu-mesa .wmu-lados{grid-template-columns:1fr 1fr}.wmu-mesa .wmu-ladob{min-height:200px}'
    + '.wmu-contra{display:grid;gap:6px;padding:16px 18px;border-radius:var(--r1,14px);border-left:4px solid ' + A + ';background:color-mix(in srgb,' + A + ' 9%,transparent)}.wmu-contra p{margin:0;font:700 clamp(18px,1.4vw,24px)/1.3 var(--ui);color:var(--t1)}.wmu-contra span{font:500 15px var(--ui);color:var(--t2)}'
    + '.wmu-ficha{display:grid;gap:6px;padding:14px 16px;border-radius:12px;border:1.5px dashed ' + A + ';background:color-mix(in srgb,' + A + ' 7%,transparent)}.wmu-ficha b{font:800 20px var(--disp);color:var(--t1)}.wmu-ficha ul{margin:0;padding-left:18px;display:grid;gap:3px;font:500 15px/1.4 var(--ui);color:var(--t2)}'
    + '.wmu-fone{justify-self:center;width:min(380px,100%);display:grid;gap:9px;padding:14px;border-radius:30px;border:1px solid var(--fio2);background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(0,0,0,.35));box-shadow:0 30px 70px rgba(0,0,0,.55)}'
    + '.wmu-fone-topo{display:grid;justify-items:center;padding:4px 0 8px;border-bottom:1px solid var(--fio2)}.wmu-fone-topo b{font:700 17px var(--ui);color:var(--t1)}.wmu-fone-topo small{font:500 12.5px var(--ui);color:var(--t3)}'
    + '.wmu-fone p{margin:0;max-width:86%;padding:9px 12px;border-radius:16px 16px 16px 4px;background:rgba(255,255,255,.08);font:500 clamp(15px,1.05vw,17px)/1.4 var(--ui);color:var(--t1)}'
    + '.wmu-fone p b{display:block;font:700 12px var(--ui);color:' + A + ';margin-bottom:2px}'
    + '.wmu-fone p.eu{justify-self:end;border-radius:16px 16px 4px 16px;background:color-mix(in srgb,' + A + ' 22%,transparent)}'
    + '.wmu-fone p.nova{animation:wmuChega .5s ease-out}@keyframes wmuChega{from{opacity:0;transform:translateY(10px)}}'
    + '.wmu-cartas{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:14px}'
    + '.wmu-carta{position:relative;display:grid;align-content:start;gap:8px;padding:0 0 12px;border-radius:14px;overflow:hidden;border:1px solid var(--fio2);background:var(--vidro);text-align:left;cursor:pointer}'
    + '.wmu-carta img{width:100%;aspect-ratio:4/3;object-fit:cover}.wmu-carta span{padding:0 12px;font:600 clamp(14px,1vw,16.5px)/1.4 var(--ui);color:var(--t1)}'
    + '.wmu-carta>b{position:absolute;top:8px;left:8px;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:rgba(0,0,0,.72);border:2px solid var(--fio2);font:800 16px var(--ui);color:var(--t2)}'
    + '.wmu-carta.on>b{background:' + A + ';border-color:' + A + ';color:' + N + '}.wmu-carta.on{box-shadow:0 0 0 2px ' + A + '}'
    + '.wmu-carta em{position:absolute;top:8px;right:8px;font:800 12px var(--ui);font-style:normal;padding:3px 9px;border-radius:999px;background:rgba(0,0,0,.72);color:var(--t2)}'
    + '.wmu-carta.certa{box-shadow:0 0 0 2px var(--ok,#9fdcae)}.wmu-carta.errada{box-shadow:0 0 0 2px var(--erro,#f2837a)}.wmu-carta[disabled]{cursor:default}'
    + '.wmu-jornal{display:grid;gap:10px;padding:18px 20px;border-radius:12px;background:#17130d;border:1px solid rgba(240,198,106,.3)}'
    + '.wmu-jornal>small{font-size:15px;letter-spacing:.2em;text-align:center;color:#e9d6ad;border-bottom:3px double rgba(240,198,106,.4);padding-bottom:8px}.wmu-data{font:500 12.5px var(--ui);color:#b7a785;text-align:center}'
    + '.wmu-manchete{display:grid;gap:4px;padding:10px 12px;border-radius:8px;border:1px solid transparent;background:transparent;text-align:left;cursor:pointer;border-top-color:rgba(240,198,106,.18)}'
    + '.wmu-manchete b{font:800 clamp(18px,1.4vw,24px)/1.15 var(--disp);color:#f3e6c8}.wmu-manchete.grande b{font-size:clamp(24px,2vw,34px)}.wmu-manchete span{font:500 14.5px/1.4 var(--ui);color:#cbbd9c}'
    + '.wmu-manchete.on{border-color:' + A + ';background:color-mix(in srgb,' + A + ' 10%,transparent)}'
    + '.wmu-materia{font-family:Georgia,serif!important;font-size:clamp(16px,1.15vw,19px)!important;color:var(--t1)!important}'
    + '@media (prefers-reduced-motion:reduce){.wmu-tampa span,.wmu-fone p.nova{animation:none}}'
    + '@media (max-width:1100px){.wmu-mesa,.wmu-mesa.dir-larga{grid-template-columns:1fr}.wmu-mesa.dir-larga .wmu-ficha ul{grid-template-columns:1fr}.wmu-cartas{grid-template-columns:repeat(2,minmax(0,1fr))}}'
    + '@media (max-width:620px){.wmu-lados,.wmu-mesa .wmu-lados{grid-template-columns:1fr}.wmu-mala{grid-template-columns:repeat(2,minmax(0,1fr))}.wmu-mala figure:first-child{grid-column:span 2;grid-row:auto;aspect-ratio:16/10}}';
  document.head.appendChild(css);
})();
