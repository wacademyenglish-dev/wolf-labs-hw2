/* ============================================================
   AQUECE · os aquecimentos das aulas de música (07/10/2026)
   O Carlos pediu warm-ups diferentes: a cena I deixa de ser sempre as
   cinco cartas pessoais. Cada aula declara no aula.js um objeto AQ com
   o tipo e o conteúdo dela; este arquivo (carregado depois do aula.js,
   via "scripts" no pagina.json) troca o R.voce e traz o próprio CSS,
   que usa as cores da aula (--ac, --ac2, --vidro, --fio2, --t1…).
   Só conversa: nenhum campo de escrever.
   Tipos:
   · dado     — rola um dado (sem sorteio: rodízio fixo com ordem());
                cada face é uma pergunta. AQ.itens: 6 {q, ex}
   · duelo    — isto ou aquilo: duas metades grandes; o aluno escolhe,
                depois diz por quê. AQ.itens: 5 {a, b, q, ex}
   · ranking  — põe 5 coisas em ordem tocando; depois explica o topo e
                o fim. AQ.itens: 5 textos · AQ.q · AQ.ex
   · mentira  — duas verdades e uma mentira do professor; o aluno caça
                a mentira e depois faz as dele. AQ.frases: 3 · AQ.mentira
                (índice) · AQ.depois · AQ.ex
   · escala   — afirmações com uma régua de 0 a 10; o aluno marca e
                explica. AQ.itens: 5 {q, ex} · AQ.rotulos [esq, dir]
   · pilha    — um baralho de começos de frase; vira uma carta por vez
                e completa em voz alta. AQ.itens: 6 {q, ex}
   · imagem   — uma imagem da aula e três perguntas, uma por vez.
                AQ.img · AQ.itens: 3 {q, ex}
   ============================================================ */
(function () {
  if (typeof AQ === 'undefined') return;
  var iVoce = -1; L.forEach(function (c, i) { if (c.k === 'voce') iVoce = i; });
  if (iVoce >= 0) { if (AQ.rot) L[iVoce].rot = AQ.rot; if (AQ.t) L[iVoce].t = AQ.t; if (AQ.p) L[iVoce].p = AQ.p; }
  S.aq = { sel: -1, n: 0, rola: 0, lado: {}, pos: [], marca: {}, achou: -1 };

  var css = ''
    + '.aq{max-width:1200px;margin:0 auto;width:100%;display:grid;gap:16px}'
    + '.aq-dupla{display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(18px,3vw,44px);align-items:center}'
    /* dado */
    + '.aq-dado{display:grid;place-items:center;width:clamp(150px,20vh,210px);aspect-ratio:1;border-radius:26px;background:linear-gradient(150deg,color-mix(in srgb,var(--ac) 22%,#151515),#0d0d0d);box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--ac) 55%,transparent),0 14px 30px #000a;cursor:pointer}'
    + '.aq-dado .pts{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);width:66%;height:66%}'
    + '.aq-dado .pts i{place-self:center;width:62%;aspect-ratio:1;border-radius:50%;background:var(--ac2);opacity:0}'
    + '.aq-dado .pts i.on{opacity:1}'
    + '.aq-dado.gira{animation:aqgira .5s cubic-bezier(.2,1.3,.4,1)}'
    + '@keyframes aqgira{from{transform:rotate(-200deg) scale(.6)}}'
    + '.aq-faces{display:flex;gap:6px;justify-content:center;flex-wrap:wrap}'
    + '.aq-faces span{width:30px;height:30px;display:grid;place-items:center;border-radius:8px;border:1px solid var(--fio2);font:600 13px var(--ui);color:var(--t3)}'
    + '.aq-faces span.on{border-color:var(--ac);color:var(--ac)} .aq-faces span.foi{color:var(--t2);background:var(--vidro)}'
    /* duelo */
    + '.aq-duelo{display:grid;grid-template-columns:1fr auto 1fr;align-items:stretch;gap:12px}'
    + '.aq-lado{padding:clamp(18px,3vh,30px) 18px;border-radius:16px;border:1px solid var(--fio2);background:var(--vidro);font:400 clamp(24px,2.3vw,40px)/1.15 var(--disp);color:var(--t1);cursor:pointer;text-align:center}'
    + '.aq-lado.on{border-color:var(--ac);box-shadow:0 0 0 2px var(--ac) inset;color:var(--ac2)}'
    + '.aq-lado.fora{opacity:.4}'
    + '.aq-ou{align-self:center;font:italic 400 22px var(--disp);color:var(--t3)}'
    + '.aq-pares{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}'
    + '.aq-pares button{padding:6px 12px;border-radius:99px;border:1px solid var(--fio2);background:transparent;font:600 13px var(--ui);color:var(--t2);cursor:pointer}'
    + '.aq-pares button.on{border-color:var(--ac);color:var(--ac)} .aq-pares button.foi{background:var(--vidro)}'
    /* ranking */
    + '.aq-rank{display:grid;gap:8px;max-width:760px;margin:0 auto;width:100%}'
    + '.aq-it{display:grid;grid-template-columns:44px 1fr;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;border:1px solid var(--fio2);background:var(--vidro);font:400 clamp(19px,1.5vw,25px)/1.2 var(--disp);color:var(--t1);cursor:pointer;text-align:left}'
    + '.aq-rankfim{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(16px,2.4vw,34px);align-items:start}'
    + '.aq-it b{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;border:1px dashed var(--fio2);font:600 15px var(--ui);color:var(--t3)}'
    + '.aq-it.on b{border:0;background:var(--ac);color:#111}'
    /* mentira */
    + '.aq-tres{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}'
    + '.aq-fr{padding:18px;border-radius:14px;border:1px solid var(--fio2);background:var(--vidro);font:400 clamp(19px,1.5vw,25px)/1.3 var(--disp);color:var(--t1);cursor:pointer;text-align:left}'
    + '.aq-fr small{display:block;margin-bottom:6px;font:600 12px var(--ui);color:var(--t3)}'
    + '.aq-fr.certa{border-color:var(--ac);box-shadow:0 0 0 2px var(--ac) inset}'
    + '.aq-fr.errada{opacity:.45;text-decoration:line-through}'
    /* escala */
    + '.aq-esc{display:grid;gap:10px}'
    + '.aq-afir{display:grid;gap:16px;padding:clamp(18px,3vh,30px) 24px;max-width:1000px;margin:0 auto;width:100%;border-radius:14px;border:1px solid var(--fio2);background:var(--vidro)}'
    + '.aq-afir p{margin:0;font:400 clamp(24px,2.2vw,38px)/1.25 var(--disp);color:var(--t1);text-align:center}'
    + '.aq-regua{display:grid;grid-template-columns:auto repeat(11,1fr) auto;gap:4px;align-items:center}'
    + '.aq-regua small{font:600 12px var(--ui);color:var(--t3)}'
    + '.aq-regua button{height:clamp(34px,4.5vh,46px);font-size:15px!important;border-radius:6px;border:1px solid var(--fio2);background:transparent;font:600 12px var(--ui);color:var(--t2);cursor:pointer}'
    + '.aq-regua button.on{background:var(--ac);border-color:var(--ac);color:#111}'
    /* pilha */
    + '.aq-pilha{position:relative;height:clamp(180px,26vh,260px);max-width:720px;margin:0 auto;width:100%}'
    + '.aq-carta{position:absolute;inset:0;display:grid;align-content:center;gap:8px;padding:24px 30px;border-radius:18px;border:1px solid var(--fio2);background:linear-gradient(160deg,color-mix(in srgb,var(--ac) 14%,#161616),#101010);box-shadow:0 12px 26px #000a}'
    + '.aq-carta.atras{transform:translate(10px,10px) rotate(2deg);opacity:.5} .aq-carta.atras2{transform:translate(20px,20px) rotate(4deg);opacity:.25}'
    + '.aq-carta small{font:600 12px var(--ui);color:var(--ac)} .aq-carta p{margin:0;font:400 clamp(26px,2.4vw,40px)/1.2 var(--disp);color:var(--t1)}'
    + '.aq-carta.topo{animation:aqvira .45s ease-out}'
    + '@keyframes aqvira{from{transform:rotateY(80deg);opacity:0}}'
    /* imagem */
    + '.aq-img{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:clamp(16px,2.4vw,34px);align-items:center}'
    + '.aq-img figure{margin:0;border-radius:16px;overflow:hidden;box-shadow:0 14px 30px #000a;aspect-ratio:16/10}'
    + '.aq-img img{width:100%;height:100%;object-fit:cover;filter:brightness(.85)}'
    + '.aq-ctl{display:flex;justify-content:center;gap:10px}'
    + '@media (max-width:820px){.aq-dupla,.aq-img,.aq-rankfim{grid-template-columns:1fr;justify-items:center}.aq-tres{grid-template-columns:1fr}.aq-duelo{grid-template-columns:1fr}.aq-ou{justify-self:center}.aq-regua{grid-template-columns:repeat(11,1fr)}.aq-regua small{display:none}}'
    + '@media (prefers-reduced-motion:reduce){.aq-dado.gira,.aq-carta.topo{animation:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var PTS = { 1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };
  function pergunta(rot, q) { return '<div class="pergunta vd ja"><small>' + rot + '</small><h2>' + q + '</h2></div>'; }

  var T = {};
  T.dado = function (e) {
    var it = AQ.itens, f = e.sel;
    var pts = ''; for (var i = 0; i < 9; i++) pts += '<i class="' + (f >= 0 && PTS[f + 1].indexOf(i) >= 0 ? 'on' : '') + '"></i>';
    var dado = '<button type="button" class="aq-dado' + (e.rola ? ' gira' : '') + '" data-a="aq-rola" aria-label="Roll the die"><span class="pts">' + pts + '</span></button>';
    var faces = '<div class="aq-faces">' + it.map(function (_, i) { return '<span class="' + (i === f ? 'on' : e.lado[i] ? 'foi' : '') + '">' + (i + 1) + '</span>'; }).join('') + '</div>';
    var dir = f >= 0 ? pergunta(AQ.rotulo || 'You rolled a ' + (f + 1), it[f].q) + mostra('aqd' + f, it[f].ex, 1) : '<p class="dica-aluno" style="text-align:left">Tap the die to roll it. Answer the question on that face.</p>';
    return '<div class="aq"><div class="aq-dupla"><div style="display:grid;gap:10px;justify-items:center">' + dado + faces + '</div><div class="lado-l">' + dir + '</div></div></div>';
  };
  T.duelo = function (e) {
    var it = AQ.itens, n = Math.min(e.n, it.length - 1), x = it[n], esc = e.lado[n];
    var lado = function (k, txt) { return '<button type="button" class="aq-lado' + (esc === k ? ' on' : esc !== undefined ? ' fora' : '') + '" data-a="aq-lado" data-n="' + (n * 10 + k) + '">' + txt + '</button>'; };
    return '<div class="aq"><div class="aq-pares">' + it.map(function (_, i) { return '<button type="button" class="' + (i === n ? 'on' : e.lado[i] !== undefined ? 'foi' : '') + '" data-a="aq-ir" data-n="' + i + '">' + (i + 1) + '</button>'; }).join('') + '</div>'
      + '<div class="aq-duelo">' + lado(0, x.a) + '<span class="aq-ou">or</span>' + lado(1, x.b) + '</div>'
      + (esc !== undefined ? '<div class="foco">' + pergunta('Why?', x.q) + mostra('aqu' + n, x.ex, 1) + (n < it.length - 1 ? '<div style="text-align:center"><button type="button" class="btn" data-a="aq-ir" data-n="' + (n + 1) + '">Next pair</button></div>' : '') + '</div>' : '<p class="dica-aluno" style="text-align:center">Pick one side. The teacher picks too.</p>') + '</div>';
  };
  T.ranking = function (e) {
    var it = AQ.itens, pos = e.pos;
    var lista = '<div class="aq-rank">' + it.map(function (t, i) { var k = pos.indexOf(i); return '<button type="button" class="aq-it' + (k >= 0 ? ' on' : '') + '" data-a="aq-pos" data-n="' + i + '"><b>' + (k >= 0 ? k + 1 : '') + '</b><span>' + t + '</span></button>'; }).join('') + '</div>';
    var fim = pos.length === it.length;
    if (fim) return '<div class="aq"><div class="aq-rankfim"><div class="lado-l">' + pergunta(AQ.rotulo || 'Your order', AQ.q) + lista + '</div><div class="lado-l">' + pergunta('Now explain', AQ.depois || 'Why is number 1 on top? And why is number 5 last?') + mostra('aqr', AQ.ex, 1) + '<div><button type="button" class="pilula so-prof" data-a="aq-zera">Start again (teacher’s order)</button></div></div></div></div>';
    return '<div class="aq">' + pergunta(AQ.rotulo || 'Put them in order', AQ.q) + lista + '<p class="dica-aluno" style="text-align:center">Tap them from 1 (the most) to ' + it.length + ' (the least).</p></div>';
  };
  T.mentira = function (e) {
    var a = e.achou;
    var tres = '<div class="aq-tres">' + AQ.frases.map(function (f, i) { var cl = a < 0 ? '' : i === AQ.mentira ? ' certa' : ' errada'; return '<button type="button" class="aq-fr' + cl + '" data-a="aq-acha" data-n="' + i + '"><small>' + (a >= 0 && i === AQ.mentira ? 'The lie!' : String.fromCharCode(65 + i)) + '</small>' + f + '</button>'; }).join('') + '</div>';
    return '<div class="aq">' + pergunta(AQ.rotulo || 'Two truths and a lie', AQ.q || 'The teacher says three things. One is a lie. Which one?') + tres
      + (a >= 0 ? '<div class="foco">' + pergunta('Your turn', AQ.depois) + mostra('aqm', AQ.ex, 1) + '</div>' : '<p class="dica-aluno" style="text-align:center">Ask the teacher one question about each. Then tap the lie.</p>') + '</div>';
  };
  T.escala = function (e) {
    var r = AQ.rotulos || ['Not at all', 'Totally'], it = AQ.itens, n = Math.min(e.n, it.length - 1), x = it[n], m = e.marca[n];
    var regua = '<div class="aq-regua"><small>' + r[0] + '</small>'; for (var k = 0; k <= 10; k++) regua += '<button type="button" class="' + (m === k ? 'on' : '') + '" data-a="aq-marca" data-n="' + (n * 100 + k) + '">' + k + '</button>'; regua += '<small>' + r[1] + '</small></div>';
    return '<div class="aq"><div class="aq-pares">' + it.map(function (_, i) { return '<button type="button" class="' + (i === n ? 'on' : e.marca[i] !== undefined ? 'foi' : '') + '" data-a="aq-ir" data-n="' + i + '">' + (i + 1) + '</button>'; }).join('') + '</div>'
      + '<div class="aq-afir"><p>' + x.q + '</p>' + regua + '</div>'
      + (m !== undefined ? '<div class="foco">' + pergunta('Why ' + m + '?', 'Explain your number. Then the teacher gives theirs.') + mostra('aqe' + n, x.ex, 1) + (n < it.length - 1 ? '<div style="text-align:center"><button type="button" class="btn" data-a="aq-ir" data-n="' + (n + 1) + '">Next sentence</button></div>' : '') + '</div>'
        : '<p class="dica-aluno" style="text-align:center">Mark your number from 0 to 10.</p>') + '</div>';
  };
  T.pilha = function (e) {
    var it = AQ.itens, n = e.n, fim = n >= it.length;
    if (fim) return '<div class="aq">' + pergunta('The deck is empty', AQ.depois || 'Which card was the easiest to finish? And the hardest?') + '<div class="aq-ctl"><button type="button" class="pilula so-prof" data-a="aq-zera">Shuffle again</button></div></div>';
    var x = it[n];
    var cartas = (n + 2 < it.length ? '<div class="aq-carta atras2"></div>' : '') + (n + 1 < it.length ? '<div class="aq-carta atras"></div>' : '') + '<div class="aq-carta topo"><small>' + (AQ.rotulo || 'Finish it out loud') + ' · ' + (n + 1) + ' of ' + it.length + '</small><p>' + x.q + '</p></div>';
    return '<div class="aq"><div class="aq-pilha">' + cartas + '</div>' + mostra('aqp' + n, x.ex, 1) + '<div class="aq-ctl"><button type="button" class="btn" data-a="aq-vira">Next card</button></div></div>';
  };
  T.imagem = function (e) {
    var it = AQ.itens, n = Math.min(e.n, it.length - 1), x = it[n];
    return '<div class="aq"><div class="aq-img"><figure><img src="' + img(AQ.img) + '" alt="' + (AQ.alt || '') + '"></figure><div class="lado-l">' + pergunta((AQ.rotulo || 'Look closely') + ' · ' + (n + 1) + ' of ' + it.length, x.q) + mostra('aqi' + n, x.ex, 1)
      + (n < it.length - 1 ? '<div><button type="button" class="btn" data-a="aq-ir" data-n="' + (n + 1) + '">Next question</button></div>' : '') + '</div></div></div>';
  };

  R.voce = function (c) { return cab(c) + T[AQ.tipo](S.aq); };

  TOQUES['aq-rola'] = function () { var e = S.aq; var feitas = Object.keys(e.lado).length; var faces = ordem([0, 1, 2, 3, 4, 5].filter(function (i) { return !e.lado[i]; }).concat(feitas >= 6 ? [0, 1, 2, 3, 4, 5] : []), (AQ.semente || 3) + e.rola * 5); var f = faces[0]; if (feitas >= 6) e.lado = {}; e.sel = f; e.lado[f] = 1; e.rola++; };
  TOQUES['aq-lado'] = function (b, n) { S.aq.lado[Math.floor(n / 10)] = n % 10; };
  TOQUES['aq-ir'] = function (b, n) { S.aq.n = n; };
  TOQUES['aq-pos'] = function (b, n) { var p = S.aq.pos, k = p.indexOf(n); if (k >= 0) p.splice(k); else p.push(n); };
  TOQUES['aq-zera'] = function () { S.aq.pos = []; S.aq.n = 0; };
  TOQUES['aq-acha'] = function (b, n) { S.aq.achou = n; };
  TOQUES['aq-marca'] = function (b, n) { S.aq.marca[Math.floor(n / 100)] = n % 100; };
  TOQUES['aq-vira'] = function () { S.aq.n++; };
})();
