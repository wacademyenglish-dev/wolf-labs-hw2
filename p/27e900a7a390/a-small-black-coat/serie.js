/* ============================================================
   THE CHALLENGE · o motor da série (10/10/2026)

   Contrato com o fio da sala ao vivo (CHASSI-FONTE/base/05-sala.js):
     · S.i é a cena e vai(n) troca;
     · NEXT/BACK em footer.foot (#prox/#ant); ferramentas em header.top .zm;
     · o que só o professor vê vai em .so-prof;
     · __wlModoAlunoProprio = true;
     · MESMO ESTADO → MESMO DOM: tudo sai de S, nada de Math.random. O fio
       repete o toque pelo caminho do elemento, e o outro lado redesenha igual.
   Cada episódio declara `const EP = {...}` antes deste arquivo.
   ============================================================ */
window.__wlModoAlunoProprio = true;
var S = { i: 0, c: {} };
function $(s, c) { return (c || document).querySelector(s); }
function esc(t) { return String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
function est(i) { return S.c[i] || (S.c[i] = {}); }
var CORES = { Fran: 'var(--fran)', Bob: 'var(--bob)', Paula: 'var(--paula)' };
var ROTULO = { w: 'Write', o: 'Out loud', l: 'Listen', f: 'Focus' };

/* ---------- peças ---------- */
function ptbr(t) { return t ? '<p class="pt-br">' + t + '</p>' : ''; }
function cab(c) {
  return '<div><span class="rot">' + (c.est ? ROTULO[c.est] + ' · ' : '') + esc(c.rot || '') + '</span>'
    + '<h2 class="tt">' + c.titulo + '</h2>' + ptbr(c.pt) + (c.tx ? '<p class="tx" style="margin-top:6px">' + c.tx + '</p>' : '') + '</div>';
}
function soProf(tap, k) {
  return '<div class="so-prof"><span class="quem">ONLY YOU SEE THIS</span><span class="tap">' + (tap ? 'STUDENT TAPPED: “' + esc(tap) + '”' : 'Waiting for the student…') + '</span>'
    + '<span class="bts"><button type="button" class="bt cheio" data-ac="aviso|GOT IT">GOT IT</button><button type="button" class="bt" data-ac="aviso|ONE MORE">ONE MORE</button></span></div>';
}
function postit(fw, e, chave) {
  if (!fw) return '';
  var tap = e['tap' + chave];
  return '<div class="postit"><p>' + fw.q + '</p><div class="starters">'
    + fw.st.map(function (s, k) { return '<button type="button" class="pc" aria-pressed="' + (tap === s) + '" data-ac="tap|' + chave + '|' + k + '">' + esc(s) + '</button>'; }).join('')
    + '<button type="button" class="help" data-ac="help|' + chave + '">Help</button></div>'
    + (e['help' + chave] ? '<span class="dica-help">' + fw.help + '</span>' : '') + soProf(tap) + '</div>';
}
var CADEADO = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';

/* ---------- as cenas ---------- */
var R = {
  capa: function (c) {
    return '<div class="capa" style="--img:url(' + c.img + ')"><span class="serie-nome">THE LONDON TO EDINBURGH CHALLENGE</span>'
      + '<span class="ep-num">EP ' + EP.n + '</span><h1>' + EP.titulo + '</h1><p class="tx">' + c.tx + '</p>'
      + '<div class="trio">' + ['Fran', 'Bob', 'Paula'].map(function (p) { return '<span style="--c:' + CORES[p] + '">' + p + ' · ' + situacao(p) + '</span>'; }).join('') + '</div>'
      + '<span class="faixa-live"><i></i>This lesson is made for Live Lesson · Open it with your student</span></div>';
  },
/*@@GRUPO*/
  cartas: function (c, e) {
    if (EP.cenas.indexOf(c) === 1) return grupo(c, e);   /* 11/10: a abertura vira o grupo de mensagens da série */
    return cartasViram(c, e);
  },
  cartasViram: null,
  cartasViramDef: function (c, e) {
    var vira = e.vira || [];
    var h = cab(c) + '<div class="cartas">' + c.cartas.map(function (k, j) {
      return '<button type="button" class="carta' + (vira.indexOf(j) > -1 ? ' vira' : '') + '" style="--c:' + (k.cor || 'var(--linha)') + '" data-ac="vira|' + j + '"><span class="in">'
        + '<span class="f"><b>' + k.frente + '</b><small>' + (k.sob || 'Tap to open') + '</small></span>'
        + '<span class="v"><p>' + k.verso + '</p><small>' + (k.dica || '') + '</small></span></span></button>';
    }).join('') + '</div>';
    var ult = e.ult;
    if (ult != null && c.cartas[ult].fw) h += postit(c.cartas[ult].fw, e, 'c' + ult);
    return h;
  },
  video: function (c, e) {
    var t = e.t || 0, resp = e.resp || {}, n = Object.keys(resp).length, solto = n >= c.antes.length;
    var h = cab(c) + '<div class="tempos" role="tablist" style="--x:' + t + '"><i aria-hidden="true"></i>'
      + ['Before', 'Watch', 'After'].map(function (r, k) { return '<button type="button" class="tempo" role="tab" aria-selected="' + (t === k) + '"' + (t === k ? ' aria-current="step"' : '') + '' + ' data-ac="tempo|' + k + '">' + r + '</button>'; }).join('') + '</div>';
    if (t === 0) {
      h += '<div class="dois"><div>' + c.antes.map(function (p, a) {
        return '<div class="perg"><h3>' + (a + 1) + ' · ' + p.q + '</h3><div class="ops">' + p.ops.map(function (o, b) {
          var esc_ = resp[a] === b;
          return '<button type="button" class="op" aria-pressed="' + esc_ + '" data-ac="voto|' + a + '|' + b + '">' + esc(o.t) + (esc_ ? '<span class="vt">✓</span>' : '') + '</button>';
        }).join('') + '</div></div>';
      }).join('') + '</div><div class="player">' + (solto ? '<div class="cadeado"><b>Unlocked!</b><span>Teacher, open the Watch tab.</span></div>'
        : '<div class="cadeado">' + CADEADO + '<b>Answer first, then watch</b><span>Answer the questions before the video · ' + n + ' of ' + c.antes.length + '</span></div>') + '</div></div>';
    } else if (t === 1) {
      h += '<p class="tx">' + c.durante + '</p><div class="player"><iframe src="https://www.youtube-nocookie.com/embed/' + EP.video + '?rel=0&modestbranding=1&playsinline=1" title="' + esc(EP.titulo) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>';
    } else {
      var vf = e.vf || {};
      h += '<h3 style="margin:0;font:800 20px var(--disp)">True or false?</h3><div class="ops">' + c.depois.map(function (d, k) {
        var r = vf[k]; var cl = r == null ? '' : (r === d.ok ? ' certa' : ' errada');
        return '<div class="op' + cl + '" style="cursor:default">' + esc(d.f) + '<span style="margin-left:auto;display:flex;gap:6px"><button type="button" class="bt" data-ac="vf|' + k + '|1">TRUE</button><button type="button" class="bt" data-ac="vf|' + k + '|0">FALSE</button></span></div>';
      }).join('') + '</div>';
    }
    return h;
  },
  regra: function (c) {
    return cab(c) + '<div class="regras">' + c.cartoes.map(function (k) {
      return '<div class="regra' + (k.nao ? ' nao' : '') + '"><span class="grande">' + k.g + '</span><p>' + k.p + '</p></div>';
    }).join('') + '</div>';
  },
  armadilhas: function (c, e) {
    var vira = e.vira || [];
    return cab(c) + '<div class="armas">' + c.itens.map(function (a, j) {
      return '<button type="button" class="carta arma' + (vira.indexOf(j) > -1 ? ' vira' : '') + '" style="--c:var(--ok)" data-ac="vira|' + j + '"><span class="in">'
        + '<span class="f"><small>TRAP ' + (j + 1) + ' · TAP TO FIX</small><p>' + a.erro + '</p></span>'
        + '<span class="v"><p>' + a.certo + '</p><small style="color:var(--apoio)">' + a.por + '</small></span></span></button>';
    }).join('') + '</div>';
  },
  pares: function (c, e) {
    var feitos = e.feitos || [], sel = e.sel;
    return cab(c) + '<div class="pares"><div class="col">' + c.esq.map(function (t, k) {
      return '<button type="button" class="pp' + (c.grande ? ' grande' : '') + (feitos.indexOf(k) > -1 ? ' feito' : sel === k ? ' sel' : '') + '" data-ac="esq|' + k + '">' + t + '</button>';
    }).join('') + '</div><div class="col">' + c.ordem.map(function (k) {
      var d = c.dir[k];
      return '<button type="button" class="pp' + (c.grande ? ' grande' : '') + (feitos.indexOf(k) > -1 ? ' feito' : '') + (e.nao === k ? ' nao' : '') + '" data-ac="dir|' + k + '">' + d + '</button>';
    }).join('') + '</div></div>' + (feitos.length === c.esq.length ? postit(c.fw, e, 'p') : '');
  },
  contar: function (c, e) {
    var n = e.n || 0;
    var ditos = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one hundred'];
    return cab(c) + '<div class="dois"><div class="mesa">' + ditos.map(function (d, k) {
      return '<button type="button" class="nota' + (k < n ? ' contada' : '') + '" data-ac="nota|' + k + '"' + (k !== n ? ' tabindex="-1"' : '') + '>£10</button>';
    }).join('') + '</div><div class="placar-conta">£' + (n * 10) + '<small>' + (n ? 'Say it: “' + ditos[n - 1] + '”' : 'Tap the first note and say “ten”') + '</small></div></div>'
      + (n === 10 ? postit(c.fw, e, 'n') : '');
  },
  pratica: function (c, e) {
    var esc_ = e.esc || {};
    return cab(c) + '<div class="itens">' + c.itens.map(function (it, k) {
      var r = esc_[k], ok = r === it.ok;
      var lac = r == null ? '____' : it.ops[r];
      return '<div class="it' + (ok ? ' ok' : '') + '"><span class="n">' + (k + 1) + '</span><span>' + it.f.replace('___', '<span class="lac' + (r != null && !ok ? ' errada' : '') + '">' + esc(lac) + '</span>') + '</span>'
        + '<span class="esc">' + it.ops.map(function (o, j) { return '<button type="button" data-ac="esc|' + k + '|' + j + '">' + esc(o) + '</button>'; }).join('') + '</span></div>';
    }).join('') + '</div>';
  },
  escrever: function (c, e) {
    return '<div class="dois">' + cab(c).replace('</div>', '<div class="starters" style="margin-top:14px">' + c.banco.map(function (b, k) {
      return '<button type="button" class="pc" data-ac="poe|' + k + '">' + esc(b) + '</button>';
    }).join('') + '</div></div>')
      + '<div class="escrita"><div class="papel" data-papel><div class="espelho" aria-hidden="true"></div>'
      + '<textarea id="txt" data-campo="txt" spellcheck="true" lang="en" autocapitalize="sentences" autocomplete="off" placeholder="' + esc(c.ph) + '" aria-label="Your text">' + esc(e.txt || '') + '</textarea>'
      + '<button type="button" class="bt cheio salva" data-ac="salva">SAVE TO MY NOTES</button></div>'
      + '<div class="corretor" aria-live="polite"></div>'
      + (e.salvo ? '<span class="salvo">Saved to My notes</span>' : '') + '</div></div>';
  },
  proximo: function (c) {
    return '<div class="prox" style="--img:url(' + c.img + ')"><span class="rot">' + (EP.n >= 10 ? 'SEASON COMPLETE · THE LONDON TO EDINBURGH CHALLENGE' : 'NEXT TIME ON THE CHALLENGE · EPISODE ' + (EP.n + 1)) + '</span><h2>' + c.titulo + '</h2><p class="tx" style="margin-top:8px;color:#e4dcf7">' + c.tx + '</p>'
      + '<div class="trio">' + c.ganchos.map(function (g) { return '<span style="--c:' + CORES[g[0]] + '">' + g[0] + ': ' + g[1] + '</span>'; }).join('') + '</div></div>';
  }
};

/* 11/10/2026 · o grupo de mensagens da série (a abertura sem cartas) */
function grupo(c, e) {
  if (!document.getElementById('css-grupo')) {
    var st = document.createElement('style'); st.id = 'css-grupo';
    st.textContent = '.grupo{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;align-items:start;margin-top:14px}'
      + '.fone-g{justify-self:center;width:min(400px,100%);border-radius:32px;padding:14px 12px 16px;background:linear-gradient(180deg,#17132a,#0f0c1c);border:2px solid rgba(255,255,255,.1);box-shadow:0 24px 60px rgba(0,0,0,.6);display:grid;gap:10px;align-content:start;min-height:320px}'
      + '.fone-g header{display:flex;align-items:center;gap:10px;padding:2px 4px 10px;border-bottom:1px solid rgba(255,255,255,.08);font:800 15px var(--disp,Manrope,sans-serif);color:#f5f1fb}'
      + '.fone-g header small{display:block;font:600 12px Manrope,sans-serif;color:#a99fc4}'
      + '.fone-g header i{display:flex}.fone-g header i b{width:26px;height:26px;margin-left:-8px;border-radius:50%;border:2px solid #17132a;background:var(--c)}'
      + '.msg-g{max-width:88%;display:grid;gap:3px;padding:9px 13px;border-radius:18px 18px 18px 5px;background:rgba(255,255,255,.07);border-left:4px solid var(--c);animation:entraG .35s ease-out}'
      + '.msg-g b{font:800 13px Manrope,sans-serif;color:var(--c)}.msg-g p{margin:0;font:600 17px/1.4 var(--disp,Manrope,sans-serif);color:#f5f1fb}'
      + '.diz-g{justify-self:end;max-width:80%;padding:7px 12px;border-radius:16px 16px 5px 16px;background:rgba(201,184,255,.16);font:italic 600 14px Manrope,sans-serif;color:#d8cff3}'
      + '.lado-g{display:grid;gap:12px;align-content:start}'
      + '@keyframes entraG{from{opacity:0;transform:translateY(10px)}}'
      + '@media (max-width:900px){.grupo{grid-template-columns:1fr}}@media (prefers-reduced-motion:reduce){.msg-g{animation:none}}';
    document.head.appendChild(st);
  }
  var vira = e.vira || [], n = vira.length, msgs = '';
  for (var j = 0; j < Math.min(n, c.cartas.length); j++) {
    var k = c.cartas[j];
    msgs += '<div class="msg-g" style="--c:' + (k.cor || 'var(--linha)') + '"><b>' + k.frente + '</b><p>' + k.verso + '</p></div>'
      + (k.dica ? '<div class="diz-g">' + k.dica + '</div>' : '');
  }
  var fone = '<div class="fone-g"><header><i aria-hidden="true">' + c.cartas.map(function (k) { return '<b style="--c:' + (k.cor || 'var(--linha)') + '"></b>'; }).join('') + '</i><span>The Challenge · group<small>' + c.cartas.map(function (k) { return k.frente; }).join(', ') + '</small></span></header>'
    + (n ? msgs : '<p style="margin:8px 4px;color:#a99fc4;font:700 22px Manrope,sans-serif">…</p>') + '</div>';
  var lado = '<div class="lado-g">' + (n < c.cartas.length
    ? (n ? '<p class="tx">Who is it?</p>' + ptbr('Quem é? Fale em voz alta: She’s… / He’s…') : '<p class="tx">A new message!</p>' + ptbr('Toque para ler a mensagem.')) + '<div><button type="button" class="bt cheio" data-ac="vira|' + n + '">' + (n ? 'Next' : 'Open') + '</button></div>'
    : '<p class="tx">Great!</p>' + ptbr('Agora, a pergunta.'))
    + (function () { if (n < c.cartas.length) return ''; for (var q = c.cartas.length - 1; q >= 0; q--) if (c.cartas[q].fw) return postit(c.cartas[q].fw, e, 'c' + q); return ''; })() + '</div>';
  return cab(c) + '<div class="grupo"><div>' + fone + '</div>' + lado + '</div>';
}

/* a função original das cartas, que agora serve às cenas do meio */
R.cartasViram = R.cartasViramDef;
function cartasViram(c, e) { return R.cartasViramDef(c, e); }
/* onde cada um está: o episódio diz (EP.onde); no primeiro, o dinheiro do começo */
function situacao(q) { return EP.onde ? EP.onde[q] : '£' + EP.dinheiro[q]; }
function corretor(c, t) {
  for (var k = 0; k < (c.regras || []).length; k++) if (new RegExp(c.regras[k][0], 'i').test(t)) return c.regras[k][1];
  return '';
}

/* ---------- as ações (o fio repete o toque; o estado decide o desenho) ---------- */
function age(ac) {
  var p = ac.split('|'), c = EP.cenas[S.i], e = est(S.i), k = +p[1];
  switch (p[0]) {
    case 'vira': e.vira = e.vira || []; var x = e.vira.indexOf(k); if (x > -1) e.vira.splice(x, 1); else { e.vira.push(k); e.ult = k; } break;
    case 'tap': e['tap' + p[1]] = (c.cartas ? c.cartas[+p[1].slice(1)].fw : c.fw).st[+p[2]]; break;
    case 'help': e['help' + p[1]] = 1; break;
    case 'tempo': e.t = k; break;
    case 'voto': e.resp = e.resp || {}; var antes = Object.keys(e.resp).length; e.resp[k] = +p[2];
      if (antes < c.antes.length && Object.keys(e.resp).length === c.antes.length) aviso('Video unlocked · teacher, open Watch'); break;
    case 'vf': e.vf = e.vf || {}; e.vf[k] = +p[2]; break;
    case 'esq': if ((e.feitos || []).indexOf(k) < 0) e.sel = k; break;
    case 'dir': if (e.sel == null) break; if (e.sel === k) { e.feitos = (e.feitos || []).concat(k); e.sel = null; e.nao = null; if (e.feitos.length === c.esq.length) aviso('GOT IT · all pairs'); } else { e.nao = k; } break;
    case 'nota': if (k === (e.n || 0)) { e.n = k + 1; if (e.n === 10) aviso('One hundred pounds!'); } break;
    case 'esc': e.esc = e.esc || {}; e.esc[k] = +p[2]; if (Object.keys(e.esc).filter(function (j) { return e.esc[j] === c.itens[j].ok; }).length === c.itens.length) aviso('GOT IT · now read them out loud'); break;
    case 'poe': var t = $('#txt'); e.txt = (t ? t.value : e.txt || ''); var b = c.banco[k]; e.txt = e.txt + (e.txt && !/\s$/.test(e.txt) ? (/[.?!]$/.test(e.txt) ? '\n' : ' ') : '') + b; break;
    case 'salva': var v = ($('#txt') || {}).value || e.txt || ''; e.txt = v; if (!v.trim()) return; try { if (window.__wlSalaNota) window.__wlSalaNota(v.trim()); } catch (er) { /* segue */ } e.salvo = 1; aviso('Saved to My notes'); break;
    case 'aviso': aviso(p[1] === 'GOT IT' ? 'GOT IT' : 'One more question'); return;
  }
  pinta();
}
document.addEventListener('click', function (ev) {
  var b = ev.target.closest('[data-ac]'); if (!b || b.disabled) return;
  if (b.closest('#palco')) age(b.getAttribute('data-ac'));
});
document.addEventListener('input', function (ev) {
  if (ev.target.id !== 'txt') return;
  var e = est(S.i); e.txt = ev.target.value; e.salvo = 0;
});

/* ---------- o aviso com mola ---------- */
function aviso(m) {
  var a = document.createElement('div');
  a.setAttribute('role', 'status');
  a.style.cssText = 'position:fixed;left:50%;bottom:86px;transform:translateX(-50%);z-index:60;padding:12px 18px;border-radius:14px;background:#1a1530;border:1px solid rgba(127,214,168,.5);color:#f5f1fb;font:800 14px Manrope,sans-serif;box-shadow:0 18px 40px -16px rgba(0,0,0,.8)';
  a.textContent = '✓ ' + m; document.body.appendChild(a); setTimeout(function () { a.remove(); }, 2600);
}

/* ---------- desenhar ---------- */
function mapa() {
  var p = (EP.n - 1) / 9 * 100, pts = '';
  for (var n = 1; n <= 10; n++) pts += '<i class="pt' + (n < EP.n ? ' passou' : n === EP.n ? ' hoje' : '') + '" style="left:' + ((n - 1) / 9 * 100) + '%"><span>' + (n === EP.n ? 'EP ' + n : n) + '</span></i>';
  return '<div class="mapa-in"><span class="ponta">LONDON</span><div class="linha-mapa"><span class="trilho"></span><span class="feito" style="--p:' + p + '%"></span>' + pts.replace(/<i /g, '<span ').replace(/<\/i>/g, '</span>') + '</div><span class="ponta">EDINBURGH</span>'
    + '<div class="contadores"><span class="cont" style="--c:var(--linha)"><i></i>Ep ' + EP.n + '/10</span>' + ['Fran', 'Bob', 'Paula'].map(function (q) { return '<span class="cont" style="--c:' + CORES[q] + '"><i></i>' + q + ' · ' + situacao(q) + '</span>'; }).join('') + '</div></div>';
}
function pinta() {
  var c = EP.cenas[S.i], e = est(S.i), palco = $('#palco');
  var foco = document.activeElement && document.activeElement.id === 'txt';
  var aba = document.activeElement && document.activeElement.classList && document.activeElement.classList.contains('tempo') ? [].indexOf.call(document.querySelectorAll('#palco .tempos .tempo'), document.activeElement) : -1;   /* 23/10: abas livres, o foco volta à aba tocada */
  palco.innerHTML = '<section class="cena c-' + c.k + '" data-cena="' + S.i + '">' + R[c.k](c, e) + '</section>';
  /* o corretor das Live Classes: as regras da cena viram o sublinhado ondulado e o "Help" */
  if (c.k === 'escrever' && window.WolfCorretor) {
    WolfCorretor.regras = function (frase, minusc) {
      var out = [];
      (c.regras || []).forEach(function (r) { out = out.concat(WolfCorretor.acha(new RegExp(r[0], 'gi'), minusc, 0, r[1])); });
      return out;
    };
    WolfCorretor.liga(palco);
  }
  if (foco) { var t = $('#txt'); if (t) { t.focus(); t.setSelectionRange(t.value.length, t.value.length); } }
  if (aba > -1) { var ab = document.querySelectorAll('#palco .tempos .tempo')[aba]; if (ab) ab.focus({ preventScroll: true }); }
  var vistas = {}; for (var j = 0; j < S.i; j++) if (EP.cenas[j].est) vistas[EP.cenas[j].est] = 1;
  document.querySelectorAll('.wolf span').forEach(function (s) { var k = s.dataset.k; s.classList.toggle('agora', k === c.est); s.classList.toggle('feita', !!vistas[k] && k !== c.est); });
  $('#trilho').innerHTML = EP.cenas.map(function (x, j) { return '<i class="' + (j === S.i ? 'agora' : j < S.i ? 'feita' : '') + '" style="--c:var(--' + (x.est || 'linha') + ')"></i>'; }).join('');
  $('#conta').textContent = (S.i + 1) + ' / ' + EP.cenas.length;
  $('#ant').disabled = S.i === 0; $('#prox').disabled = S.i === EP.cenas.length - 1;
  $('#guiaCena').textContent = c.nota || '';
  document.getElementById('fundo').style.setProperty('--foto', c.img ? 'url(' + c.img + ')' : 'none');
}
function vai(n) { if (n < 0 || n >= EP.cenas.length) return; S.i = n; pinta(); $('#palco').scrollTop = 0; window.scrollTo(0, 0); }

/* ---------- começar ---------- */
(function () {
  document.title = 'WOLF LABS · ' + EP.titulo + ' · Live Class';
  $('#mapa').innerHTML = mapa();
  /* as imagens das cenas carregam no começo: o NEXT na sala fica leve */
  EP.cenas.forEach(function (c) { if (c.img) { var im = new Image(); im.src = c.img; } });
  $('#prox').onclick = function () { vai(S.i + 1); };
  $('#ant').onclick = function () { vai(S.i - 1); };
  function guia(on) { $('#guia').hidden = !on; }
  $('#bguia').onclick = function () { guia(true); };
  $('#fguia').onclick = function () { guia(false); };
  $('#guia').onclick = function (ev) { if (ev.target === this) guia(false); };
  $('#bzoom').onclick = function () { document.documentElement.classList.toggle('zoom'); };
  $('#btela').onclick = function () { try { (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen()).catch(function () {}); } catch (er) { /* sem tela cheia */ } };
  document.addEventListener('keydown', function (ev) {
    if (ev.target.closest && ev.target.closest('textarea,input')) return;
    if (ev.key === 'ArrowRight') vai(S.i + 1); else if (ev.key === 'ArrowLeft') vai(S.i - 1);
    else if (ev.key === 'g' || ev.key === 'G') guia($('#guia').hidden); else if (ev.key === 'Escape') guia(false);
  });
  pinta();
})();
