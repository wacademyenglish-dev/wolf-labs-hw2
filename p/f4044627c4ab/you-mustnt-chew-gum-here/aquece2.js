/* ============================================================
   AQUECE2 · os aquecimentos novos no lugar das cartas (11/10/2026)
   O Carlos: "todas as aulas já estão com esse cartão, eu queria mudar".
   Catálogo: _previa/catalogo-aquecimentos (opções C, F e B).
   Esta peça troca cartasPessoais() na cena I por outra forma, com as
   MESMAS perguntas da aula (k, q, fup, st, ex, fst, fex): nada de
   conteúdo novo. Usa os toques do motor (carta = escolher, carta-foi =
   respondeu), então o fio da sala leva o estado igual.
   Carregar DEPOIS do motor.js:
     <script src="aquece2.js" data-forma="chat|noar|foto"></script>
   · chat — tela de mensagens: a pergunta chega como mensagem do
            professor; respondeu, chega o follow-up; depois a próxima.
   · noar — entrevista ao vivo: luz ON AIR e a pergunta na tarja de TV,
            sobre a imagem da cena.
   · foto — foto-mistério: a imagem da cena começa de perto e borrada;
            cada pergunta respondida abre um pouco; no fim, o palpite.
   Só conversa: nenhum campo de escrever.
   ============================================================ */
(function () {
  var tag = document.currentScript, FORMA = (tag && tag.getAttribute('data-forma')) || 'chat';
  var orig = window.cartasPessoais;
  if (typeof orig !== 'function') return;

  var css = ''
    + '.aq2{max-width:1200px;margin:0 auto;width:100%;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(18px,3.5vw,48px);align-items:start}'
    + '.aq2-lado{display:grid;gap:12px;align-content:start;min-width:0}'
    + '.aq2-passo{font:800 12px var(--ui,system-ui);letter-spacing:.14em;color:var(--ac2,var(--ac))}'
    + '.aq2-fim{display:grid;gap:8px;padding:18px 22px;border-radius:var(--r1,22px);background:var(--vidro2,rgba(255,255,255,.07));border:1px solid var(--fio2,rgba(255,255,255,.2))}'
    + '.aq2-fim h2{margin:0;font:700 clamp(20px,1.9vw,26px)/1.3 var(--disp,system-ui)}'
    /* chat */
    + '.aq2-fone{justify-self:center;width:min(380px,100%);border-radius:34px;padding:16px 14px 18px;background:linear-gradient(180deg,#15131c,#0e0d13);border:2px solid rgba(255,255,255,.1);box-shadow:0 24px 60px rgba(0,0,0,.6);display:grid;gap:9px;align-content:start;min-height:360px}'
    + '.aq2-fone header{display:flex;align-items:center;gap:10px;padding:2px 4px 10px;border-bottom:1px solid rgba(255,255,255,.08);font:800 15px var(--ui,system-ui);color:var(--t1,#fff)}'
    + '.aq2-fone header i{width:30px;height:30px;border-radius:50%;background:var(--ac);box-shadow:0 0 0 3px rgba(255,255,255,.06)}'
    + '.aq2-fone header small{display:block;font:600 12px var(--ui,system-ui);color:var(--t3,#999)}'
    + '.aq2-b{max-width:86%;padding:9px 13px;border-radius:18px 18px 18px 5px;background:rgba(255,255,255,.08);font:500 clamp(15px,1.15vw,18px)/1.4 var(--disp,system-ui);color:var(--t1,#fff)}'
    + '.aq2-b.eu{justify-self:end;border-radius:18px 18px 5px 18px;background:color-mix(in srgb,var(--ac) 28%,#15131c);font-style:italic;color:var(--t2,#ddd)}'
    + '.aq2-b.nova{animation:aq2entra .35s ease-out}'
    + '@keyframes aq2entra{from{opacity:0;transform:translateY(10px)}}'
    /* no ar */
    + '.aq2-estudio{position:relative;border-radius:var(--r1,22px);min-height:clamp(260px,42vh,420px);background-size:cover;background-position:center;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.6)}'
    + '.aq2-estudio::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.15),rgba(0,0,0,.75))}'
    + '.aq2-luz{position:absolute;left:16px;top:16px;padding:5px 12px;border-radius:7px;font:800 13px var(--ui,system-ui);letter-spacing:.16em;color:#fff1ee;background:#e8463b;box-shadow:0 0 24px rgba(232,70,59,.7);animation:aq2pisca 2.6s ease-in-out infinite}'
    + '@keyframes aq2pisca{50%{box-shadow:0 0 8px rgba(232,70,59,.3)}}'
    + '.aq2-tarja{position:absolute;left:16px;right:16px;bottom:16px;display:grid;gap:4px;padding:12px 16px;border-left:5px solid var(--ac);border-radius:0 12px 12px 0;background:rgba(8,8,12,.82)}'
    + '.aq2-tarja small{font:800 11px var(--ui,system-ui);letter-spacing:.16em;color:var(--ac2,var(--ac))}'
    + '.aq2-tarja b{font:700 clamp(18px,1.6vw,24px)/1.3 var(--disp,system-ui);color:#fff}'
    /* foto-mistério */
    + '.aq2-moldura{position:relative;border-radius:var(--r1,22px);overflow:hidden;height:clamp(260px,42vh,420px);box-shadow:0 24px 60px rgba(0,0,0,.6)}'
    + '.aq2-foto{position:absolute;inset:0;background-size:cover;background-position:50% 45%;transition:transform .6s ease-out,filter .6s ease-out}'
    + '.aq2-pistas{position:absolute;left:14px;top:14px;display:flex;gap:6px}'
    + '.aq2-pistas i{width:12px;height:12px;border-radius:50%;background:rgba(255,255,255,.25)}'
    + '.aq2-pistas i.on{background:var(--ac);box-shadow:0 0 10px var(--ac)}'
    + '@media (max-width:900px){.aq2{grid-template-columns:1fr}}'
    + '@media (prefers-reduced-motion:reduce){.aq2-b.nova,.aq2-luz{animation:none}.aq2-foto{transition:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function primeira(t) { return t.charAt(0) + t.slice(1).toLowerCase(); }

  /* o lado das ações: a pergunta, o exemplo e "respondeu", ou o follow-up e a próxima */
  function acoes(lista, est, chave, n, frasesFup, rotuloFim) {
    var x = lista[n], ultimo = n >= lista.length - 1, h = '';
    if (!est.foi[n]) {
      h += '<div class="pergunta vd ja"><small>' + (n + 1) + ' OF ' + lista.length + ' · ' + x.k + '</small><h2>' + x.q + '</h2></div>'
        + '<div class="acoes-fup" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center">' + mostra(chave + n, x.ex, 1)
        + '<button type="button" class="btn so-prof" data-a="carta-foi" data-c="' + chave + '">Answered · next message</button></div>'
        + fala(chave + n + 'a', x.st, x.pal || []);
    } else {
      h += follow('FOLLOW-UP', x.fup, x.fst || frasesFup || ['Yes, …', 'No, …', 'Because …'], [], chave + n, x.fex ? mostra(chave + 'f' + n, x.fex, 1) : '');
      h += ultimo && rotuloFim ? '<div class="aq2-fim"><h2>' + rotuloFim + '</h2></div>'
        : '<div><button type="button" class="btn cheio" data-a="carta" data-c="' + chave + '" data-n="' + (n + 1) + '">' + (ultimo ? 'See the whole picture' : 'Next question') + '</button></div>';
    }
    return h;
  }

  var FORMAS = {
    chat: function (c, lista, est, chave, frasesFup) {
      var n = Math.max(est.sel, 0), msgs = [];
      for (var i = 0; i <= n; i++) {
        var x = lista[i];
        msgs.push('<div class="aq2-b' + (i === n && !est.foi[i] ? ' nova' : '') + '">' + x.q + '</div>');
        if (est.foi[i]) { msgs.push('<div class="aq2-b eu">(you answered out loud)</div>'); if (x.fup) msgs.push('<div class="aq2-b' + (i === n ? ' nova' : '') + '">' + x.fup + '</div>'); }
      }
      var fone = '<div class="aq2-fone"><header><i aria-hidden="true"></i><span>Your teacher<small>online</small></span></header>' + msgs.slice(-6).join('') + '</div>';
      return cab(c) + '<div class="aq2"><div class="aq2-lado">' + fone + '</div><div class="aq2-lado"><span class="aq2-passo">THE CHAT · ' + (n + 1) + ' OF ' + lista.length + '</span>'
        + acoes(lista, est, chave, n, frasesFup, 'Great chat. Now, the lesson.') + '</div></div>';
    },
    noar: function (c, lista, est, chave, frasesFup) {
      var n = Math.max(est.sel, 0), x = lista[n], fu = est.foi[n] && x.fup;
      var estudio = '<div class="aq2-estudio" style="background-image:url(' + img(c.img) + ')"><span class="aq2-luz">ON AIR</span>'
        + '<div class="aq2-tarja"><small>LIVE INTERVIEW · ' + (fu ? 'FOLLOW-UP' : 'QUESTION ' + (n + 1) + ' OF ' + lista.length) + '</small><b>' + (fu ? x.fup : x.q) + '</b></div></div>';
      return cab(c) + '<div class="aq2"><div class="aq2-lado">' + estudio + '<p class="dica-aluno">You are the guest. Your teacher is the host.</p></div><div class="aq2-lado">'
        + acoes(lista, est, chave, n, frasesFup, 'That’s the interview. Thank you for being on the show.') + '</div></div>';
    },
    foto: function (c, lista, est, chave, frasesFup) {
      var n = Math.min(Math.max(est.sel, 0), lista.length - 1), feitas = 0;
      lista.forEach(function (x, i) { if (est.foi[i]) feitas++; });
      var r = feitas / lista.length, zoom = 3.2 - 2.2 * r, blur = Math.round(14 * (1 - r));
      var mold = '<div class="aq2-moldura"><div class="aq2-foto" style="background-image:url(' + img(c.img) + ');transform:scale(' + zoom.toFixed(2) + ');filter:blur(' + blur + 'px)"></div>'
        + '<div class="aq2-pistas" aria-hidden="true">' + lista.map(function (x, i) { return '<i' + (est.foi[i] ? ' class="on"' : '') + '></i>'; }).join('') + '</div></div>';
      var fim = est.sel >= lista.length;
      return cab(c) + '<div class="aq2"><div class="aq2-lado">' + mold + '<p class="dica-aluno">' + (fim ? 'The whole picture.' : 'Every answer opens the picture a little more.') + '</p></div><div class="aq2-lado">'
        + (fim ? '<div class="aq2-fim"><span class="aq2-passo">THE PICTURE</span><h2>What do you think today’s lesson is about?</h2></div>' + follow('YOUR GUESS', 'Look at the picture. What is happening here?', ['I think it’s about …', 'Maybe …'], [], chave + 'g')
          : acoes(lista, est, chave, n, frasesFup, '')) + '</div></div>';
    }
  };

  /* o texto de instrução da cena troca UMA vez, ao carregar (não no desenho): quem recorta o cabeçalho pelo tamanho (again-wolf, nem-eu) continua certo */
  var INSTR = { chat: 'Your teacher sends you messages. Answer each one out loud.', noar: 'You are the guest on a live show. Answer out loud; your teacher is the host.', foto: 'Answer out loud. Every answer opens the picture a little more.' };
  try { if (typeof L !== 'undefined' && typeof R !== 'undefined') for (var i0 = 0; i0 < L.length; i0++) if (L[i0].k !== 'capa') { if (R[L[i0].k] && String(R[L[i0].k]).indexOf('cartasPessoais') >= 0 && INSTR[FORMA]) L[i0].p = INSTR[FORMA]; break; } } catch (e0) { /* segue */ }

  window.cartasPessoais = function (c, lista, est, chave, frasesFup) {
    var abre = -1; if (typeof L !== 'undefined') for (var i = 0; i < L.length; i++) if (L[i].k !== 'capa') { abre = i; break; }
    var eAbertura = c && (c.k === 'voce' || (typeof L !== 'undefined' && L.indexOf(c) === abre));
    if (!eAbertura || !FORMAS[FORMA] || !lista || !lista.length) return orig.apply(this, arguments);
    if (est.sel < 0) est.sel = 0;   /* a primeira pergunta já vem na tela: sem cartas para escolher */
    return FORMAS[FORMA](c, lista, est, chave, frasesFup);
  };
})();
