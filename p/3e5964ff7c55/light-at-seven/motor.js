/* ============================================================
   KIT LIVE CLASS · O MOTOR COMUM                      05/10/2026
   O mesmo motor das aulas da semana (Stressed Out em diante), num
   arquivo só. Contrato com o fio da sala (05-sala.js): S.i é a cena,
   vai(n) troca, os botões do professor ficam em footer.foot, .zm e
   .so-prof, e o mesmo estado gera o mesmo DOM dos dois lados (nada de
   sorteio: ordem() é um rodízio fixo). Texto digitado passa ao outro
   lado sozinho (campo com data-campo).
   A aula (aula.js, carregado DEPOIS deste) define:
     L        o roteiro: [{ k, est, img, rot, t, p }]
     S        o estado (precisa ter i, fala, resp, faixa)
     R        uma função por cena: R[k](c) devolve o HTML
     TOQUES   { acao: function (botao, n, v) { … return false para não repintar } }
     CAMPOS   { campo: function (valor) { … } }  (texto digitado → estado)
   ============================================================ */
window.__wlModoAlunoProprio = true;
var ALUNO = /(^|[?&])papel=aluno/.test(location.search) || document.documentElement.classList.contains('wl-sala-aluno');
var NA_SALA = /(^|[?&])sala=/.test(location.search) && window.parent !== window;
var EST = { w: 'Write', o: 'Out loud', l: 'Listen', f: 'Focus' };
var TOQUES = {}, CAMPOS = {};

function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
function ordem(lista, semente) { var a = lista.slice(), n = a.length; var r = semente % n; return a.slice(r).concat(a.slice(0, r)); }   /* rodízio fixo, sem sorteio */
function img(n) { return (window.__WL_IMG && window.__WL_IMG[n]) || 'img/live-' + n + '.webp'; }   /* __WL_IMG: o HTML de teste, tudo num arquivo */
/* 21/10/2026 · nome sem extensão ('c1') pedia audio/c1 e o site devolvia o porteiro: aula sem som */
function aud(n) { if (!/\.\w+$/.test(n)) n += '.mp3'; return (window.__WL_AUD && window.__WL_AUD[n]) || 'audio/' + n; }
function cab(c) { return '<div class="cab st-' + c.est + '"><span class="rot"><b>' + c.est.toUpperCase() + '</b>' + EST[c.est] + ' · ' + c.rot + (c.extra ? '<em class="so-prof" style="margin-left:10px;padding:2px 10px;border-radius:999px;border:1px dashed currentColor;font-style:normal;opacity:.8">FAST FINISHERS · extra</em>' : '') + '</span><h1>' + c.t + '</h1><p>' + c.p + '</p></div>'; }   /* 09/10: o selo EXTRA (proposta da Susana), só para o professor */
function fala(chave, frases, palavras) {
  var on = S.fala[chave] || {};
  return '<div class="diz"><h5>SAY IT WITH</h5><div class="chips">' + frases.map(function (f, i) { return '<button type="button" class="chip frase' + (on['f' + i] ? ' on' : '') + '" data-a="fala" data-c="' + chave + '" data-x="f' + i + '">' + f + '</button>'; }).join('') + '</div>'
    + (palavras && palavras.length ? '<h5>WORDS YOU CAN USE</h5><div class="chips">' + palavras.map(function (w) { return '<span class="chip palavra">' + w + '</span>'; }).join('') + '</div>' : '') + '</div>';
}
/* o follow-up: o post-it que entra NO MEIO, logo abaixo da pergunta */
function follow(rot, q, frases, palavras, chave, extra) { return '<div class="follow"><small>' + rot + '</small><p class="q">' + q + '</p>' + fala(chave, frases, palavras) + (extra || '') + '</div>'; }
/* Show answer (pedido do Carlos, 05/10): ANSWER na resposta certa, EXAMPLE ANSWER na pergunta pessoal */
function mostra(chave, texto, modelo) {
  if (S.resp[chave]) return '<div class="resposta"><b>' + (modelo ? 'EXAMPLE ANSWER' : 'ANSWER') + '</b><span>' + texto + '</span></div>';
  return '<div class="resp-btn"><button type="button" class="pilula" data-a="resp" data-c="' + chave + '">Show answer</button></div>';
}
function trilha(lista, n) { return '<div class="tempos">' + lista.map(function (_, i) { return '<span class="' + (i === n ? 'on' : i < n ? 'foi' : '') + '">' + (i + 1) + '</span>'; }).join('') + '</div>'; }
function faixaLive() {
  return (!NA_SALA && S.faixa) ? '<div class="faixa"><span class="live">LIVE</span><div><b>This lesson is made for Live Lesson</b><small>Open it with your student from the platform: they tap, write and decide on their own screen. Sharing your screen also works: every button is on your side.</small></div><button type="button" class="x" data-a="faixa" aria-label="Close">×</button></div>' : '';
}
/* cartões que viram (antes / depois do vídeo), com Show answer embaixo de cada um já aberto */
function viras(lista, est, chave, resps, modelo, rotulo) {
  return '<div class="viras">' + lista.map(function (q, i) { var on = est[chave][i]; return '<div class="vira-col"><button type="button" class="vira' + (on ? ' on' : '') + '" data-a="vira" data-c="' + chave + '" data-n="' + i + '"><span class="face frente">' + (rotulo || 'QUESTION') + '<b>' + (i + 1) + '</b></span><span class="face verso">' + q + '</span></button>'
    + (resps && on ? mostra('vr' + chave + i, resps[i], modelo) : '') + '</div>'; }).join('') + '</div>';
}
/* os três tempos do vídeo: BEFORE → WATCH → AFTER */
/* abas dos passos (23/10/2026, a aluna caiu da chamada e voltou presa no BEFORE): cada aba é um BOTÃO que vai direto ao
   passo e NUNCA trava, para quem cai voltar para onde a aula está. acao = o toque que o botão "próximo" da aula já usa;
   ns = o n de cada aba (padrão 0,1,2); ch = o data-c, se o toque da aula usa; acao false = aba parada. A aba atual leva aria-current. */
function abasPrepara() {
  if (abasPrepara.ok) return; abasPrepara.ok = 1;
  try {
    var st = document.createElement('style'); st.id = 'wl-abas-css';
    st.textContent = '.tempos button{appearance:none;-webkit-appearance:none;display:inline-flex;align-items:center;min-height:34px;padding:0 13px;border-radius:999px;font:700 13px var(--ui);color:var(--t3);background:transparent;border:1px solid var(--fio);cursor:pointer;transition:color .15s,border-color .15s,background-color .15s}'
      + '.tempos button.on{color:#fff;background:var(--ac);border-color:var(--ac)}'
      + '.tempos.tres button.on{background:var(--l);border-color:var(--l);color:#0b1a24}'
      + '.tempos button.foi{color:var(--ok);border-color:rgba(134,217,166,.45)}'
      + '.tempos button:not(.on):hover{color:var(--t1,#fff);border-color:var(--fio2,currentColor)}'
      + '.tempos button:focus-visible{outline:2px solid var(--bt2,var(--l,#fff));outline-offset:3px}';
    var hd = document.head || document.documentElement; hd.insertBefore(st, hd.firstChild);   /* primeiro da fila: o CSS da aula, que vem depois, ainda manda */
  } catch (e) { /* sem o estilo extra, as abas seguem funcionando */ }
  /* a cena se repinta no clique: o foco volta para a aba que acabou de ser tocada (teclado) */
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('.tempos button[data-a]'); if (!b) return;
    var a = b.getAttribute('data-a'), n = b.getAttribute('data-n');
    setTimeout(function () {
      var nb = document.querySelector('.tempos button[data-a="' + a + '"][data-n="' + n + '"]');
      if (nb && nb !== document.activeElement) { try { nb.focus({ preventScroll: true }); } catch (e) { /* segue */ } }
    }, 0);
  }, true);
}
function abas3(rot, passo, acao, ns, ch) {
  abasPrepara();
  return '<div class="tempos tres" role="group" aria-label="Steps">' + rot.map(function (t, i) {
    var cl = i === passo ? 'on' : i < passo ? 'foi' : '';
    if (acao === false) return '<span class="' + cl + '">' + t + '</span>';
    return '<button type="button" class="' + cl + '" data-a="' + acao + '" data-n="' + (ns ? ns[i] : i) + '"' + (ch != null ? ' data-c="' + ch + '"' : '') + (i === passo ? ' aria-current="step"' : '') + '>' + t + '</button>';
  }).join('') + '</div>';
}
function tempos3(passo, acao, ns, ch) { return abas3(['1 · BEFORE', '2 · WATCH', '3 · AFTER'], passo, acao || 'vd-p', ns, ch); }
/* enablejsapi já no endereço (08/10): a legenda e o fio da sala ouvem o tempo do vídeo sem recarregar o quadro */
var YT_API = '&enablejsapi=1' + (/^https?:$/.test(location.protocol) ? '&origin=' + encodeURIComponent(location.origin) : '');
function iframe(yt, titulo, extra) { return '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + yt + '?rel=0&modestbranding=1&playsinline=1' + YT_API + (extra || '') + '" title="' + h(titulo) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>'; }
/* os áudios moram fora da tela: repintar a cena não interrompe o som */
/* o player (05/10, pedido do Carlos): o mesmo botão toca e PAUSA; 0.75× deixa mais devagar; a transcrição só abre
   DEPOIS de ouvir (primeiro o aluno ouve, depois vê) */
var SONS = {};
function marcaTocando(nome, on) { [].forEach.call(document.querySelectorAll('.play[data-x="' + nome + '"]'), function (b) { b.classList.toggle('on', on); b.setAttribute('aria-label', on ? 'Pause' : 'Play'); }); }
function som(nome) {
  if (!SONS[nome]) {
    var a = SONS[nome] = new Audio(aud(nome));
    a.addEventListener('play', function () { marcaTocando(nome, true); });
    a.addEventListener('pause', function () { marcaTocando(nome, false); });
    a.addEventListener('ended', function () { marcaTocando(nome, false); S.ouviu = S.ouviu || {}; if (!S.ouviu[nome]) { S.ouviu[nome] = 1; pinta(); } });
  }
  return SONS[nome];
}
function tocar(nome, semLento) {   /* semLento: a gravação já é a versão lenta */
  var on = SONS[nome] && !SONS[nome].paused;
  return '<span class="player"><button type="button" class="play' + (on ? ' on' : '') + '" data-a="toca" data-x="' + nome + '" aria-label="' + (on ? 'Pause' : 'Play') + '"><span></span></button>'
    + (semLento ? '' : '<button type="button" class="lento' + (S.lento ? ' on' : '') + '" data-a="lento" aria-label="Slower" title="Slower">0.75×</button>') + '</span>';
}
function transcricao(nome, texto, chave) {
  var k = chave || nome; S.ouviu = S.ouviu || {}; S.trans = S.trans || {};
  if (S.trans[k]) return '<p class="transcricao">' + texto + '</p>';
  if (!S.ouviu[nome]) return '<p class="transcricao vazia">Listen first. The transcript comes after.</p>';
  return '<div class="resp-btn esq"><button type="button" class="pilula" data-a="trans" data-c="' + k + '">Show transcript</button></div>';
}
/* as cartas de pergunta pessoal (aquecimento, conversa): toque abre, o professor libera o follow-up */
function cartasPessoais(c, lista, est, chave, frasesFup) {
  var grade = '<div class="cartas' + (est.sel >= 0 ? ' mini' : '') + '">' + lista.map(function (x, i) {
    return '<button type="button" class="carta' + (est.sel === i ? ' on' : '') + (est.foi[i] ? ' feita' : '') + '" data-a="carta" data-c="' + chave + '" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + x.k.charAt(0) + x.k.slice(1).toLowerCase() + '</b></button>';
  }).join('') + '</div>';
  if (est.sel < 0) return cab(c) + grade + '<p class="dica-aluno" style="text-align:center">Tap a card.</p>';
  var x = lista[est.sel];
  var corpo = '<div class="foco"><div class="pergunta vd' + (est.foi[est.sel] ? ' ja' : '') + '"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>';
  if (est.foi[est.sel]) corpo += follow('FOLLOW-UP', x.fup, x.fst || frasesFup || ['Yes, …', 'No, …', 'Because …'], [], chave + est.sel, x.fex ? mostra(chave + 'f' + est.sel, x.fex, 1) : '');
  else corpo += '<div class="acoes-fup" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center">' + mostra(chave + est.sel, x.ex, 1) + '<button type="button" class="btn so-prof" data-a="carta-foi" data-c="' + chave + '">Answered · show the follow-up</button></div>' + fala(chave + est.sel + 'a', x.st, x.pal || []) + '<p class="dica-aluno" style="text-align:center">Answer out loud.</p>';
  return cab(c) + grade + corpo + '</div>';
}
/* as perguntas em sequência (conversa): uma por vez, follow-up no meio */
function sequencia(c, lista, est, chave, rotulo) {
  var n = est.n, fim = n >= lista.length, x = lista[Math.min(n, lista.length - 1)];
  if (fim) return cab(c) + trilha(lista, n) + '<div class="foco"><div class="pergunta vd"><h2>' + rotulo + '</h2></div></div>';
  var corpo = '<div class="foco"><div class="pergunta vd' + (est.foi[n] ? ' ja' : '') + '"><small>QUESTION ' + (n + 1) + ' OF ' + lista.length + '</small><h2>' + x.q + '</h2></div>'
    + (est.foi[n] ? follow('FOLLOW-UP', x.fup, x.fst || ['Because …', 'I think …'], [], chave + n) + '<div class="acoes-fup" style="position:sticky;bottom:10px;z-index:3;text-align:center"><button type="button" class="btn" data-a="seq-prox" data-c="' + chave + '">Next question</button></div>'
      : '<div class="acoes-fup" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center">' + mostra(chave + n, x.ex, 1) + '<button type="button" class="btn so-prof" data-a="seq-foi" data-c="' + chave + '">Answered · show the follow-up</button></div>' + fala(chave + n + 'a', x.st, []) + '<p class="dica-aluno" style="text-align:center">Answer out loud.</p>') + '</div>';
  return cab(c) + trilha(lista, n) + corpo;
}
/* a regra em cartões + as armadilhas que se corrigem com um toque */
function armas(lista, titulo) {
  if (window.WolfFoco) return WolfFoco.armas(lista, titulo);   /* 08/10: os 7 jeitos do catálogo do Focus (kit/focus.js) */
  return '<div class="cab st-f"><span class="rot">' + (titulo || 'THE TRAPS · TAP TO FIX') + '</span></div><div class="armas"' + (lista.length === 4 ? ' style="grid-template-columns:repeat(4,minmax(0,1fr))"' : '') + '>' + lista.map(function (a, i) {
    return '<button type="button" class="arma' + (S.armas && S.armas[i] ? ' on' : '') + '" data-a="arma" data-n="' + i + '"><small>' + a[0] + '</small><s>' + a[1] + '</s><span class="certa">' + a[2] + '</span><span class="nota">' + a[3] + '</span><span class="toque">Tap to fix it</span></button>';
  }).join('') + '</div>';
}
function escritaFinal(campo, txt, salvo, ph, rotulo, chips, pergunta) {
  return '<div class="escrita">' + (pergunta ? '<div class="pergunta vd ja"><small>' + pergunta[0] + '</small><h2>' + pergunta[1] + '</h2></div>' : '')
    + WolfCorretor.papel(campo, txt, ph, rotulo)
    + '<div class="pe"><span class="dica-aluno">Your teacher sees what you write.</span><span class="so-prof" style="color:var(--t3);font-size:14px">You see what the student writes, and the same red lines.</span>'
    + (salvo ? '<span class="salvo">Saved to My notes</span>' : '<button type="button" class="btn cheio" style="--c:var(--w)" data-a="salva" data-c="' + campo + '">Save to My notes</button>') + '</div>'
    + '<div class="diz"><h5>TAP TO ADD</h5><div class="chips">' + chips.map(function (w) { return '<button type="button" class="chip frase" data-a="poe" data-x="' + h(w) + '">' + w.trim() + '</button>'; }).join('') + '</div></div></div>';
}

/* o vídeo não recomeça: se a cena repinta com o MESMO vídeo, troca tudo em volta e deixa o iframe velho no lugar
   (tirar um iframe do documento recarrega o YouTube do zero) */
function mantemVideo(palco, html) {
  var velho = palco.querySelector('section.cena'), ov = velho && velho.querySelector('.video iframe'); if (!ov) return false;
  var tmp = document.createElement('div'); tmp.innerHTML = html;
  var novo = tmp.firstElementChild, nv = novo.querySelector('.video iframe');
  if (!nv || nv.getAttribute('src') !== ov.getAttribute('src')) return false;
  /* 23/10: com as abas livres a cena pode voltar de AFTER para WATCH com o mesmo vídeo em outro lugar da árvore: se a troca no lugar falhar, repinta inteira */
  try { (function troca(a, b) {   /* a: o nó velho que contém o vídeo; b: o novo correspondente */
    if (a === ov) return;
    [].slice.call(a.attributes).forEach(function (t) { if (!b.hasAttribute(t.name)) a.removeAttribute(t.name); });
    [].slice.call(b.attributes).forEach(function (t) { a.setAttribute(t.name, t.value); });
    var ia = [].indexOf.call(a.childNodes, [].filter.call(a.childNodes, function (n) { return n === ov || (n.contains && n.contains(ov)); })[0]);
    var ib = [].indexOf.call(b.childNodes, [].filter.call(b.childNodes, function (n) { return n === nv || (n.contains && n.contains(nv)); })[0]);
    var ca = a.childNodes[ia], cb = b.childNodes[ib];
    while (a.firstChild !== ca) a.removeChild(a.firstChild);
    while (ca.nextSibling) a.removeChild(ca.nextSibling);
    while (b.firstChild !== cb) a.insertBefore(b.firstChild, ca);
    while (cb.nextSibling) a.appendChild(cb.nextSibling);
    troca(ca, cb);
  })(velho, novo); } catch (e) { return false; }
  return true;
}

/* ---------- desenhar ---------- */
function pinta() {
  var c = L[S.i], palco = document.getElementById('palco');
  var nova = pinta.ultima !== S.i; pinta.ultima = S.i;
  var rolou = palco.scrollTop, rolouJ = window.scrollY;
  var html = '<section class="cena c-' + c.k + (nova ? ' nova' : '') + '" data-cena="' + S.i + '">' + R[c.k](c) + '</section>';
  /* o jogo (Phaser) não recomeça: o nó #jogo-vivo sai antes de repintar e volta para o mesmo lugar (canvas pode mudar de pai) */
  var vivo = document.getElementById('jogo-vivo'); if (vivo) { vivo.parentNode.removeChild(vivo); window.__JOGO_NO = vivo; }
  if (nova || !mantemVideo(palco, html)) palco.innerHTML = html;
  var lugar = palco.querySelector('[data-jogo-vivo]');
  if (lugar && window.__JOGO_NO) lugar.parentNode.replaceChild(window.__JOGO_NO, lugar);
  if (!nova) { palco.scrollTop = rolou; window.scrollTo(0, rolouJ); }
  if (window.WolfCorretor) WolfCorretor.liga(palco);
  if (window.depoisDePintar) window.depoisDePintar(palco);
  if (window.WolfLegenda) WolfLegenda.pinta(palco);
  (window.WL_PECAS || []).forEach(function (f) { try { f(palco, c); } catch (e) { /* uma peça com erro não derruba a aula */ } });   /* 08/10: as peças do kit (capa.js…) se ligam aqui */
  voltaPasso(palco);   /* depois das peças: elas podem redesenhar a cena */
  fastFinishers(palco);   /* 09/11 · T3 */
  document.getElementById('fundo').style.backgroundImage = 'url(' + img(c.img) + ')';
  var vistas = {}; for (var i = 0; i < S.i; i++) if (L[i].est) vistas[L[i].est] = 1;
  [].forEach.call(document.querySelectorAll('.wolf span'), function (sp) { var k = sp.getAttribute('data-k'); sp.classList.toggle('agora', k === c.est); sp.classList.toggle('feita', !!vistas[k] && k !== c.est); });
  document.getElementById('trilho').innerHTML = L.map(function (x, i) { return '<i class="' + (i === S.i ? 'agora' : i < S.i ? 'feita' : '') + '" style="--c:var(--' + (x.est || 'o') + ')"></i>'; }).join('');
  document.getElementById('conta').textContent = S.i + ' / ' + (L.length - 1);
  document.getElementById('ant').disabled = S.i === 0; document.getElementById('prox').disabled = !(L[S.i] && L[S.i].extra) && S.i >= ultimoNucleo();
}
function vai(n) { if (n < 0 || n >= L.length) return; S.i = n; pinta(); document.getElementById('palco').scrollTop = 0; window.scrollTo(0, 0); }
window.vai = vai;

/* ---------- ‹ Previous (pedido do Carlos, 08/10): "se eu vou sem querer para frente, eu não consigo mais voltar" ----------
   Todo "Next" de dentro de um exercício (ação que termina em -prox: Next stone, Next question…) guarda antes
   uma foto do estado. O ‹ Previous aparece ao lado do Next (ou no alto da cena) e volta o passo como estava,
   com a resposta dada. É um botão comum: na sala, o toque viaja e os dois lados voltam juntos. */
var __WL_PASSOS = {};
function guardaPasso(a) { if (!/-prox$/.test(a)) return; (__WL_PASSOS[S.i] = __WL_PASSOS[S.i] || []).push(JSON.stringify(S)); }
function voltaPasso(palco) {
  var pilha = __WL_PASSOS[S.i]; if (!pilha || !pilha.length) return;
  var b = '<button type="button" class="btn volta-passo" data-a="passo-ant">‹ Previous</button>';
  var prox = palco.querySelector('[data-a$="-prox"]');
  if (prox) { prox.insertAdjacentHTML('beforebegin', b); return; }
  var onde = palco.querySelector('.tempos') || palco.querySelector('.cab');
  if (onde) onde.insertAdjacentHTML('afterend', '<div class="volta-linha">' + b + '</div>');
}

/* ---------- os toques comuns; os da aula vêm em TOQUES ---------- */
document.addEventListener('click', function (ev) {
  var b = ev.target.closest('[data-a]'); if (!b) return;
  var a = b.getAttribute('data-a'), n = +b.getAttribute('data-n'), v = b.getAttribute('data-v'), c = b.getAttribute('data-c'), refaz = true;
  guardaPasso(a);
  switch (a) {
    case 'ir': vai(n); return;
    case 'ff': S.ff = !S.ff; break;   /* 09/11 · T3: o Fast finishers liga e desliga */
    case 'passo-ant': var foto = (__WL_PASSOS[S.i] || []).pop(); if (!foto) return; var velho = JSON.parse(foto); Object.keys(S).forEach(function (k) { delete S[k]; }); for (var k in velho) S[k] = velho[k]; break;
    case 'faixa': S.faixa = 0; break;
    case 'resp': S.resp[c] = 1; break;
    case 'fala': var x = b.getAttribute('data-x'); S.fala[c] = S.fala[c] || {}; S.fala[c][x] = !S.fala[c][x]; break;
    case 'carta': S[c].sel = n; break;
    case 'carta-foi': S[c].foi[S[c].sel] = 1; break;
    case 'seq-foi': S[c].foi[S[c].n] = 1; break;
    case 'seq-prox': S[c].n++; break;
    case 'arma': S.armas = S.armas || {}; S.armas[n] = 1; break;
    case 'toca': var au = som(b.getAttribute('data-x'));
      if (!au.paused) { au.pause(); refaz = false; break; }
      try { Object.keys(SONS).forEach(function (k) { if (SONS[k] !== au && !SONS[k].paused) SONS[k].pause(); }); if (au.ended || au.currentTime >= (au.duration || 1e9) - .05) au.currentTime = 0; au.playbackRate = S.lento ? .75 : 1; var pr = au.play(); if (pr && pr.catch) pr.catch(function () {}); } catch (e) { /* segue */ }
      refaz = !!(TOQUES.toca && TOQUES.toca(b, n, v) !== false); break;
    case 'lento': S.lento = !S.lento; Object.keys(SONS).forEach(function (k) { SONS[k].playbackRate = S.lento ? .75 : 1; }); break;
    case 'trans': S.trans = S.trans || {}; S.trans[c] = 1; break;
    case 'poe': var ta = document.querySelector('[data-papel] textarea'); if (ta) { var t = b.getAttribute('data-x'), antes = ta.value; var sep = antes && !/\s$/.test(antes) ? (/[.?!]$/.test(antes) ? '\n' : ' ') : ''; ta.value = antes + sep + t; ta.dispatchEvent(new Event('input', { bubbles: true })); ta.focus(); } refaz = false; break;
    case 'salva': var txt = (S.txt && S.txt[c] || '').trim(); if (!txt) return; try { if (window.__wlSalaNota) window.__wlSalaNota(txt); } catch (e) { /* segue */ } S.salvo = S.salvo || {}; S.salvo[c] = 1; break;
    default: if (TOQUES[a]) refaz = TOQUES[a](b, n, v, c) !== false; else refaz = false;
  }
  if (refaz) pinta();
});
/* o texto digitado fica no estado (o fio leva o mesmo texto ao outro lado) */
document.addEventListener('input', function (ev) {
  var t = ev.target; if (!t.matches || !t.matches('[data-campo]')) return;
  var cp = t.getAttribute('data-campo'); S.txt = S.txt || {}; S.txt[cp] = t.value;
  if (CAMPOS[cp]) CAMPOS[cp](t.value, t);
});
document.addEventListener('keydown', function (ev) {
  if (window.teclaDaAula && window.teclaDaAula(ev)) return;
  if (ALUNO || /^(TEXTAREA|INPUT)$/.test((ev.target.tagName || ''))) return;
  if (ev.key === 'ArrowRight') passo(1); else if (ev.key === 'ArrowLeft') passo(-1);   /* 09/11 · T3: pula as extras */
  else if (ev.key === 'g' || ev.key === 'G') guia(true); else if (ev.key === 'Escape') guia(false);
});
function guia(abre) { document.getElementById('guia').hidden = !abre; }
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('prox').onclick = function () { passo(1); };
  document.getElementById('ant').onclick = function () { passo(-1); };
  document.getElementById('bguia').onclick = function () { guia(true); };
  document.getElementById('fguia').onclick = function () { guia(false); };
  document.getElementById('bzoom').onclick = function () { var z = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--zoom')) || 1); z = z >= 1.2 ? 1 : +(z + .1).toFixed(1); document.documentElement.style.setProperty('--zoom', z); };
  document.getElementById('btela').onclick = function () { if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(function () {}); else document.exitFullscreen(); };
  pinta();
});

/* ============================================================
   09/11/2026 · CATÁLOGO LUXO · T1 + T3 · A HORA E O FAST FINISHERS
   A aula corre pelo NÚCLEO: Next, ‹ › e as setas pulam as cenas extra:true.
   Na última página do núcleo, o Fast finishers: a chave só o professor vê;
   ligada, a lista das extras aparece para os dois (o toque viaja pelo fio).
   Dentro de uma extra, Next anda pelas extras e "Back to the end" volta.
   ============================================================ */
function ultimoNucleo() { for (var i = L.length - 1; i > 0; i--) if (L[i] && !L[i].extra && L[i].k !== 'capa') return i; return L.length - 1; }
function passo(dir) {
  var n = S.i + dir, emExtra = !!(L[S.i] && L[S.i].extra);
  if (emExtra) { while (n > 0 && n < L.length && !L[n].extra) n += dir; if (n <= 0 || n >= L.length) n = ultimoNucleo(); }
  else { while (n > 0 && n < L.length && L[n] && L[n].extra) n += dir; }
  vai(n);
}
function ffEstilo() {
  if (ffEstilo.ok) return; ffEstilo.ok = 1;
  try {
    var st = document.createElement('style'); st.id = 'wl-ff-css';
    st.textContent = '.ff{margin:28px auto 8px;max-width:760px;display:grid;gap:14px;padding:18px 20px;border-radius:20px;border:1px solid rgba(232,200,142,.35);background:rgba(232,200,142,.06)}'
      + '.ff-cab{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.ff-cab b{font:800 18px var(--ui,system-ui);color:#e8c88e;letter-spacing:.01em}.ff-cab small{flex:1;min-width:160px;font:500 13px var(--ui,system-ui);color:var(--t3,#a9a3bd)}'
      + '.ff-chave{display:inline-flex;align-items:center;gap:9px;min-height:36px;padding:0 14px 0 8px;border-radius:999px;border:1px solid rgba(232,200,142,.5);background:transparent;color:#e8c88e;font:700 13px var(--ui,system-ui);cursor:pointer}'
      + '.ff-chave i{position:relative;width:34px;height:20px;border-radius:999px;background:rgba(245,241,251,.12)}.ff-chave i::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#e6e0f3;transition:left .2s}'
      + '.ff-chave[aria-checked=true] i{background:linear-gradient(180deg,#f0d9a8,#e8c88e)}.ff-chave[aria-checked=true] i::after{left:16px;background:#2a1f08}'
      + '.ff-lista{display:flex;flex-wrap:wrap;gap:10px}.ff-item{display:inline-flex;align-items:baseline;gap:8px;min-height:44px;padding:0 18px;border-radius:999px;border:1px solid #e8c88e;background:transparent;color:#e8c88e;font:700 15px var(--ui,system-ui);cursor:pointer}.ff-item:hover{background:rgba(232,200,142,.1)}.ff-item small{font-weight:600;opacity:.75}'
      + '.ff-volta{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 14px;padding:10px 14px;border-radius:14px;border:1px dashed rgba(232,200,142,.45);color:#e8c88e;font:800 13px var(--ui,system-ui);letter-spacing:.06em;text-transform:uppercase}'
      + '.ff button:focus-visible,.ff-volta button:focus-visible{outline:2px solid #e8c88e;outline-offset:3px}';
    (document.head || document.documentElement).appendChild(st);
  } catch (e) { /* sem estilo, os botões seguem funcionando */ }
}
function fastFinishers(palco) {
  var sec = palco.querySelector('section.cena'); if (!sec) return;
  var extras = []; for (var i = 1; i < L.length; i++) if (L[i] && L[i].extra) extras.push(i);
  if (!extras.length) return;
  ffEstilo();
  var fim = ultimoNucleo();
  if (L[S.i] && L[S.i].extra) {
    sec.insertAdjacentHTML('afterbegin', '<div class="ff-volta"><span>Fast finishers</span><button type="button" class="btn" data-a="ir" data-n="' + fim + '">Back to the end</button></div>');
    return;
  }
  if (S.i !== fim) return;
  var lista = S.ff ? '<div class="ff-lista">' + extras.map(function (i) { var x = L[i]; return '<button type="button" class="ff-item" data-a="ir" data-n="' + i + '"><b>' + h(String(x.rot || 'Extra').replace(/^[IVXLC]+\s*·\s*/, '')) + '</b>' + (x.min ? '<small>' + x.min + ' min</small>' : '') + '</button>'; }).join('') + '</div>' : '';
  sec.insertAdjacentHTML('beforeend', '<div class="ff' + (S.ff ? ' on' : ' so-prof') + '"><div class="ff-cab"><b>Fast finishers</b><small class="so-prof">' + (S.ff ? 'Your student sees these now. Tap one to go there.' : 'Only you see this. Turn it on when there is time left.') + '</small>'
    + '<button type="button" class="ff-chave so-prof" role="switch" aria-checked="' + (S.ff ? 'true' : 'false') + '" data-a="ff"><i></i>' + (S.ff ? 'On' : 'Off') + '</button></div>' + lista + '</div>');
}
