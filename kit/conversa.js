/* ============================================================
   KIT LIVE CLASS · OS MOMENTOS DE CONVERSA                26/10/2026
   A regra 3×3 do Carlos (Conversa de Praxe, aprovada 26/10): toda aula
   com momentos em que o aluno PARA, PENSA e ESCOLHE o inglês que vai
   usar. Esta peça desenha esses momentos a partir de dados, para que o
   top 20 (e depois as 700) fiquem do mesmo nível, sem cada aula
   inventar um motor. Receita de todo momento: gatilho → pensar →
   escolher → falar com iniciadores → PUSH (só professor) → Show answer.
   Dados em window.WL_CONVERSA (conversa-dados.js da aula):
     { nivel: 'A2',
       cenas: [ { id: 'juri', troca: 'fim' | apos: 'video',      ← troca a cena com esse k, ou entra depois dela
                  est: 'o', min: 7, img: 'galeria', rot: 'The Verdict', t: '…', p: '…',
                  formato: 'escolha' | 'ranking' | 'escala' | 'arena' | 'papel',
                  … dados do formato (abaixo) } ] }
   FORMATOS
   · escolha  (dilema, júri, semáforo, aposta, conselho, would you rather)
       rodadas: [ { tag, sit, q, provas: ['…'], opc: ['…'] | [{t:'…', cor:'g'|'y'|'r'}],
                    st: [], ex, push, revela: '…' (aposta: "o que aconteceu", aparece no botão Check) } ]
       fim: { tag, q, opc, st, ex, push, segundos }  (opcional: a última palavra, com cronômetro)
   · ranking  itens: [], q, st, ex, push, prof: [índices na ordem do professor], dica
   · escala   frases: [ { f, st, ex, push } ], rotulos: ['Totally disagree', …5]
   · arena    q, lados: [ {nome, arg}, {nome, arg} ], st, ex, push, segundos: 60
   · papel    (cadeira quente, conselheiro, negociação, coletiva)
       aluno: { quem, quer, limite }, prof: { quem, quer, limite }  ← o limite do professor some na tela do aluno
       perguntas: [ { q, ex } ] (o professor pergunta; o aluno responde no papel), rot_perg
       acordo: { tag, q, opc, st, ex }  (opcional: fechar o acordo na tela), st, push
   Estado em S.__cv[id]; toques "cvk-…" (27/10: "cv-" colidia com o cv-prox do revisao.js de 190 aulas). O mesmo estado gera o mesmo DOM dos
   dois lados da sala. Os números romanos dos títulos são refeitos.
   Carregar DEPOIS do aula.js e das peças que procuram cenas pelo k
   (final.js, abertura.js…): em pagina.json → scripts, no fim da lista.
   ============================================================ */
(function () {
  var D = window.WL_CONVERSA;
  if (!D || !D.cenas || typeof L === 'undefined' || typeof R === 'undefined' || typeof TOQUES === 'undefined') return;
  var A1 = /^A1/i.test(D.nivel || '');

  /* ---- 1. as cenas entram no roteiro ---- */
  D.cenas.forEach(function (c) {
    var nova = { k: 'cv-' + c.id, est: c.est || 'o', min: c.min || 7, img: c.img, rot: c.rot, t: c.t, p: c.p, cv: c.id };
    if (c.extra) nova.extra = 1;
    var alvo = c.troca || c.apos, i = -1;   /* aceita o k de uma cena da aula ou o id de outro momento (cv-…) */
    L.forEach(function (x, j) { if (x.k === alvo || x.k === 'cv-' + alvo) i = j; });
    if (i < 0) { L.splice(L.length - 1, 0, nova); return; }
    if (c.troca) { if (!nova.img) nova.img = L[i].img; L.splice(i, 1, nova); }
    else { if (!nova.img) nova.img = L[i].img; L.splice(i + 1, 0, nova); }
  });
  var ROM = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV'];
  /* só numera quem já tinha número (e os momentos novos): cena sem romano de propósito (o Line by Line extra da WOLF.DEV) fica sem */
  var RE = /^[IVXLC]+\s*·\s*/, n = 0;
  L.forEach(function (x) { if (!x.est || !x.rot || !(RE.test(x.rot) || x.cv)) return; n++; x.rot = ROM[n] + ' · ' + String(x.rot).replace(RE, ''); });

  function m(id) { S.__cv = S.__cv || {}; if (!S.__cv[id]) S.__cv[id] = { r: 0, esc: {}, ord: [], nota: {}, lado: -1, troca: 0, t0: 0, rev: {}, vis: {}, q: 0 }; return S.__cv[id]; }
  function dado(id) { for (var i = 0; i < D.cenas.length; i++) if (D.cenas[i].id === id) return D.cenas[i]; return null; }
  function push(t) { return t ? '<div class="cv-push so-prof"><b>PUSH · for the teacher</b><span>' + t + '</span></div>' : ''; }
  function apoio(ch, st, ex) { return (st && st.length ? fala('cv' + ch, st) : '') + (ex ? mostra('cv' + ch, ex, 1) : ''); }
  function relogio(id, seg) {
    var e = m(id), on = !!e.t0, passou = on ? Math.min((Date.now() - e.t0) / 1000, seg) : 0;
    return '<div class="cv-relogio">' + (on ? '<span class="cv-anel" style="animation-duration:' + seg + 's;animation-delay:-' + passou.toFixed(1) + 's"></span>' : '<span class="cv-anel parado"></span>')
      + '<button type="button" class="pilula" data-a="cvk-tempo" data-c="' + id + '">' + (on ? 'Start again' : 'Start · ' + seg + ' seconds') + '</button></div>';
  }
  function pontos(id, lista, atual, ultimo) {
    return '<div class="cv-pontos" role="group">' + lista.map(function (x, i) { return '<button type="button" class="' + (i === atual ? 'on' : '') + '" data-a="cvk-ir" data-c="' + id + '" data-n="' + i + '"' + (i === atual ? ' aria-current="step"' : '') + '>' + (i + 1) + (x ? ' · ' + x : '') + '</button>'; }).join('')
      + (ultimo ? '<button type="button" class="' + (atual === lista.length ? 'on' : '') + '" data-a="cvk-ir" data-c="' + id + '" data-n="' + lista.length + '">' + ultimo + '</button>' : '') + '</div>';
  }
  function opcoes(id, chave, opc, esc) {
    return '<div class="cv-opc' + (opc.length === 2 ? ' dois' : '') + '" role="group" aria-label="Choose one">' + opc.map(function (o, i) {
      var t = typeof o === 'string' ? o : o.t, cor = (typeof o !== 'string' && o.cor) ? ' cor-' + o.cor : '';
      return '<button type="button" class="cv-o' + cor + (esc === i ? ' on' : '') + '" data-a="cvk-esc" data-c="' + id + '" data-v="' + chave + '" data-n="' + i + '" aria-pressed="' + (esc === i) + '">' + t + '</button>';
    }).join('') + '</div>';
  }

  /* ---- 2. os formatos ---- */
  var F = {};
  F.escolha = function (c, d, e) {
    var RR = d.rodadas, N = RR.length, temFim = !!d.fim, r = Math.min(e.r, temFim ? N : N - 1);
    var topo = (N > 1 || temFim) ? pontos(d.id, RR.map(function (x) { return x.tag || ''; }), r, temFim ? (d.fim.tag || 'The last word') : '') : '';
    if (r === N) {
      var f = d.fim;
      return topo + '<div class="cv"><div class="cv-carta vd"><small>' + (f.tag || 'The last word') + '</small><h2>' + f.q + '</h2>' + (f.opc ? opcoes(d.id, 'fim', f.opc, e.esc.fim) : '') + '<p class="cv-nota">' + (f.nota || 'Then swap: your teacher takes the other side.') + '</p></div>'
        + '<div class="cv-dir">' + relogio(d.id, f.segundos || 60) + apoio(d.id + 'f', f.st, f.ex) + push(f.push) + '</div></div>';
    }
    var x = RR[r], esc = e.esc[r];
    var prox = r < N - 1 ? '<button type="button" class="btn cheio" data-a="cvk-prox" data-c="' + d.id + '">Next' + (RR[r + 1].tag ? ' · ' + RR[r + 1].tag : '') + '</button>'
      : (temFim ? '<button type="button" class="btn cheio" data-a="cvk-prox" data-c="' + d.id + '">' + (d.fim.tag || 'The last word') + '</button>' : '');
    var rev = x.revela ? (e.rev[r] ? '<div class="resposta"><b>WHAT HAPPENED</b><span>' + x.revela + '</span></div>' : '<div class="resp-btn"><button type="button" class="pilula" data-a="cvk-rev" data-c="' + d.id + '">' + (x.rot_revela || 'Check after the video') + '</button></div>') : '';
    var tag = (x.tag || 'Your call') + (N > 1 ? ' · ' + (r + 1) + ' of ' + N : '');
    return topo + '<div class="cv"><div class="cv-carta vd"><small>' + tag + '</small>'
      + (x.sit ? '<p class="cv-sit">' + x.sit + '</p>' : '')
      + (x.provas ? '<ul class="cv-provas">' + x.provas.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' : '')
      + '<h2>' + x.q + '</h2>' + opcoes(d.id, r, x.opc, esc)
      + '<p class="cv-nota">' + (esc == null ? (A1 ? 'Choose one. Your teacher answers first.' : 'No right answer. Choose one, or say your own idea.') : (A1 ? 'Now say it with the sentence.' : 'Now say why. Your teacher will push back.')) + '</p></div>'
      + '<div class="cv-dir">' + apoio(d.id + r, x.st, x.ex) + rev + (prox ? '<div class="cv-pe">' + prox + '</div>' : '') + push(x.push) + '</div></div>';
  };
  F.ranking = function (c, d, e) {
    var ord = e.ord, falta = d.itens.length - ord.length;
    var prof = e.vis.prof && d.prof ? '<ol class="cv-ord">' + d.prof.map(function (i) { return '<li>' + d.itens[i] + '</li>'; }).join('') + '</ol>' : '';
    return '<div class="cv"><div class="cv-carta vd"><small>Put them in order · 1 is the top</small><h2>' + d.q + '</h2>'
      + '<div class="cv-itens">' + d.itens.map(function (t, i) { var p = ord.indexOf(i); return '<button type="button" class="cv-item' + (p >= 0 ? ' on' : '') + '" data-a="cvk-ord" data-c="' + d.id + '" data-n="' + i + '"><b>' + (p >= 0 ? p + 1 : '·') + '</b><span>' + t + '</span></button>'; }).join('') + '</div>'
      + '<p class="cv-nota">' + (falta ? (d.dica || 'Tap from the most to the least important. Tap again to take it out.') : 'Done. Explain your top one and your last one.') + '</p></div>'
      + '<div class="cv-dir">' + apoio(d.id, d.st, d.ex) + push(d.push)   /* PUSH antes da ordem do professor: aberta, ela empurrava o PUSH para baixo da dobra */
      + (d.prof ? (prof ? '<div class="cv-bloco"><small>Your teacher’s order</small>' + prof + '<p class="cv-nota">Now agree on one top 3 together.</p></div>' : '<div class="cv-pe"><button type="button" class="pilula" data-a="cvk-vis" data-c="' + d.id + '" data-v="prof">Show my teacher’s order</button></div>') : '')
      + '</div></div>';
  };
  F.escala = function (c, d, e) {
    var NF = d.frases.length, r = Math.min(e.r, NF - 1), x = d.frases[r], nota = e.nota[r], ROT = d.rotulos || ['Totally disagree', 'Disagree', 'Not sure', 'Agree', 'Totally agree'];
    return (NF > 1 ? pontos(d.id, d.frases.map(function () { return ''; }), r) : '')
      + '<div class="cv"><div class="cv-carta vd"><small>' + (d.tag || 'Agree or disagree?') + (NF > 1 ? ' · ' + (r + 1) + ' of ' + NF : '') + '</small><h2 class="cv-frase">“' + x.f + '”</h2>'
      + '<div class="cv-escala" role="group" aria-label="How much do you agree?">' + ROT.map(function (t, i) { return '<button type="button" class="' + (nota === i ? 'on' : '') + '" data-a="cvk-nota" data-c="' + d.id + '" data-n="' + i + '" aria-pressed="' + (nota === i) + '"><b>' + (i + 1) + '</b><span>' + t + '</span></button>'; }).join('') + '</div>'
      + '<p class="cv-nota">' + (nota == null ? 'Tap a number. Then defend it.' : 'Defend your number. Your teacher picks the opposite one.') + '</p></div>'
      + '<div class="cv-dir">' + apoio(d.id + r, x.st, x.ex)
      + (r < NF - 1 ? '<div class="cv-pe"><button type="button" class="btn cheio" data-a="cvk-prox" data-c="' + d.id + '">Next statement</button></div>' : '') + push(x.push) + '</div></div>';
  };
  F.arena = function (c, d, e) {
    var lado = e.lado, eu = lado < 0 ? null : (e.troca ? 1 - lado : lado), seg = d.segundos || 60;
    return '<div class="cv"><div class="cv-carta vd"><small>The arena · ' + seg + ' seconds each side</small><h2>' + d.q + '</h2>'
      + '<div class="cv-opc dois">' + d.lados.map(function (l, i) { return '<button type="button" class="cv-o cv-lado' + (eu === i ? ' on' : '') + '" data-a="cvk-lado" data-c="' + d.id + '" data-n="' + i + '"><b>' + l.nome + '</b><span>' + l.arg + '</span></button>'; }).join('') + '</div>'
      + '<p class="cv-nota">' + (lado < 0 ? 'Pick a side. Then defend it for ' + (seg === 60 ? 'one minute' : seg + ' seconds') + '.' : e.troca ? 'Round 2: now defend the OTHER side.' : 'Round 1: defend your side.') + '</p>'
      + (lado >= 0 && !e.troca ? '<div class="cv-pe"><button type="button" class="pilula" data-a="cvk-troca" data-c="' + d.id + '">Swap sides</button></div>' : '') + '</div>'
      + '<div class="cv-dir">' + relogio(d.id, seg) + apoio(d.id, d.st, d.ex) + push(d.push) + '</div></div>';
  };
  F.papel = function (c, d, e) {
    var P = d.perguntas || [], q = Math.min(e.q, Math.max(P.length - 1, 0)), x = P[q];
    var crach = function (p, cls, rot) { return p ? '<div class="cv-cracha ' + cls + '"><small>' + rot + '</small><b>' + p.quem + '</b>' + (p.quer ? '<span>' + p.quer + '</span>' : '') + (p.limite ? '<em>' + p.limite + '</em>' : '') + '</div>' : ''; };
    var acordo = d.acordo ? '<div class="cv-bloco"><small>' + (d.acordo.tag || 'The deal') + '</small><p class="cv-q">' + d.acordo.q + '</p>' + opcoes(d.id, 'acordo', d.acordo.opc, e.esc.acordo) + apoio(d.id + 'a', d.acordo.st, d.acordo.ex) + '</div>' : '';
    return '<div class="cv"><div class="cv-carta vd"><div class="cv-crachas">' + crach(d.aluno, 'aluno', 'You are') + crach(d.prof, 'prof-limite', 'Your teacher is') + '</div>'
      + (x ? '<div class="cv-bloco"><small>' + (d.rot_perg || 'Your teacher asks') + ' · ' + (q + 1) + ' of ' + P.length + '</small><p class="cv-q">' + x.q + '</p>' + (x.ex ? mostra('cv' + d.id + 'q' + q, x.ex, 1) : '')
        + (q < P.length - 1 ? '<div class="cv-pe"><button type="button" class="btn cheio" data-a="cvk-q" data-c="' + d.id + '">Next question</button></div>' : '') + '</div>' : '')
      + '</div><div class="cv-dir">' + (d.st ? fala('cv' + d.id + 'p', d.st) : '') + push(d.push) + acordo + '</div></div>';   /* o PUSH antes do acordo: em 2000×767 o acordo empurrava o PUSH para baixo da dobra */
  };

  /* ---- 3. o desenho e os toques ---- */
  L.forEach(function (x) { if (x.cv) R[x.k] = function (c) { var d = dado(c.cv); return cab(c) + '<div class="cvf-' + d.formato + (A1 ? ' cv-a1' : '') + '">' + F[d.formato](c, d, m(d.id)) + '</div>'
    + (d.hw ? '<p class="hw cv-hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p>' : ''); }; });   /* hw: 1 quando a cena trocada era a última (o link da lição de casa fica sempre no fim) */
  var T = TOQUES;
  T['cvk-esc'] = function (b, n, v, c) { m(c).esc[v] = n; };
  T['cvk-prox'] = function (b, n, v, c) { var e = m(c), d = dado(c), N = d.rodadas ? d.rodadas.length + (d.fim ? 1 : 0) : (d.frases ? d.frases.length : 1); e.r = Math.min(e.r + 1, N - 1); };
  T['cvk-ir'] = function (b, n, v, c) { m(c).r = n; };
  T['cvk-rev'] = function (b, n, v, c) { var e = m(c); e.rev[e.r] = 1; };
  T['cvk-ord'] = function (b, n, v, c) { var o = m(c).ord, p = o.indexOf(n); if (p >= 0) o.splice(p, 1); else o.push(n); };
  T['cvk-vis'] = function (b, n, v, c) { m(c).vis[v] = 1; };
  T['cvk-nota'] = function (b, n, v, c) { var e = m(c); e.nota[e.r] = n; };
  T['cvk-lado'] = function (b, n, v, c) { var e = m(c); e.lado = n; e.troca = 0; e.t0 = 0; };
  T['cvk-troca'] = function (b, n, v, c) { var e = m(c); e.troca = 1; e.t0 = 0; };
  T['cvk-tempo'] = function (b, n, v, c) { m(c).t0 = Date.now(); };
  T['cvk-q'] = function (b, n, v, c) { m(c).q++; };

  var css = ''
    + '.cv{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:22px;align-items:start;width:100%;max-width:1300px;margin:0 auto}'
    + '.cv-carta{display:grid;gap:12px;padding:20px 24px;border-radius:var(--r1,18px);border-left:4px solid var(--ac)}'
    + '.cv-carta>small,.cv-bloco>small{font:700 13px var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--ac2,var(--ac))}'
    + '.cv-sit{margin:0;font:400 clamp(18px,1.35vw,24px)/1.45 var(--ui);color:var(--t1)}'
    + '.cv-carta h2{margin:0;font:700 clamp(24px,2vw,36px)/1.15 var(--disp);color:var(--t1);text-wrap:balance}'
    + '.cv-provas{margin:0;padding-left:20px;display:grid;gap:4px;font:500 16px/1.45 var(--ui);color:var(--t2)}'
    + '.cv-opc{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px}'
    + '.cv-o{appearance:none;display:grid;gap:4px;min-height:54px;padding:12px 16px;border-radius:14px;border:1px solid var(--fio2);background:var(--vidro2);color:var(--t1);font:700 clamp(15px,1.1vw,19px)/1.25 var(--ui);text-align:left;cursor:pointer}'
    + '.cv-o span{font:500 14px/1.4 var(--ui);color:var(--t2)}'
    + '.cv-o.on{border-color:var(--ac);background:var(--vidro3);box-shadow:inset 0 0 0 1px var(--ac)}'
    + '.cv-o:focus-visible,.cv-item:focus-visible,.cv-escala button:focus-visible,.cv-pontos button:focus-visible{outline:2px solid var(--ac2,#fff);outline-offset:3px}'
    + '.cv-o.cor-g{border-left:5px solid #6fcf97}.cv-o.cor-y{border-left:5px solid #e8c25a}.cv-o.cor-r{border-left:5px solid #ef6f6f}'
    + '.cv-a1 .cv-o{min-height:72px;font-size:clamp(18px,1.4vw,24px);text-align:center;place-items:center}'
    + '.cv-nota{margin:0;font:500 15px/1.4 var(--ui);color:var(--t3)}'
    + '.cv-dir{display:grid;gap:12px;align-content:start;min-width:0}'
    + '.cv-dir .diz h5{display:none}.cv-dir .chip{min-height:38px;font-size:15px}.cv-dir .resp-btn{justify-content:flex-start}'
    + '.cv-pe{display:flex;flex-wrap:wrap;gap:10px;align-items:center}'
    + '.cv-push{display:grid;gap:3px;padding:9px 13px;border-radius:var(--r2,12px);border:1px dashed rgba(217,164,65,.55);background:rgba(217,164,65,.06)}'
    + '.cv-push b{font:700 12px var(--ui);letter-spacing:.12em;color:#d9a441}.cv-push span{font:500 15px/1.4 var(--ui);color:var(--t2)}'
    + '.cv-pontos{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:12px}'
    + '.cv-pontos button{appearance:none;min-height:34px;padding:0 13px;border-radius:999px;font:700 13px var(--ui);color:var(--t3);background:transparent;border:1px solid var(--fio);cursor:pointer}'
    + '.cv-pontos button.on{color:#fff;background:var(--ac);border-color:var(--ac)}'
    + '.cv-itens{display:grid;gap:8px}'
    + '.cv-item{appearance:none;display:flex;align-items:center;gap:14px;min-height:50px;padding:8px 14px;border-radius:12px;border:1px solid var(--fio2);background:var(--vidro2);color:var(--t1);font:600 17px/1.3 var(--ui);text-align:left;cursor:pointer}'
    + '.cv-item b{flex:none;width:32px;height:32px;display:grid;place-items:center;border-radius:50%;border:1px solid var(--fio2);font:800 15px var(--ui);color:var(--t3)}'
    + '.cv-item.on{border-color:var(--ac)}.cv-item.on b{background:rgba(0,0,0,.35);border:2px solid var(--ac);color:var(--ac2,var(--ac))}'   /* número na cor da aula sobre fundo escuro: o branco sumia no acento creme (Business A1) */
    + '.cv-bloco{display:grid;gap:10px;padding:14px 16px;border-radius:14px;border:1px solid var(--fio2);background:var(--vidro)}'
    + '.cv-ord{margin:0;padding-left:22px;display:grid;gap:4px;font:600 16px var(--ui);color:var(--t1)}'
    + '.cv-frase{font-style:italic}'
    + '.cv-escala{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}'
    + '.cv-escala button{appearance:none;display:grid;gap:4px;justify-items:center;padding:10px 6px;border-radius:12px;border:1px solid var(--fio2);background:var(--vidro2);color:var(--t2);font:600 13px/1.25 var(--ui);text-align:center;cursor:pointer}'
    + '.cv-escala button b{font:800 22px var(--disp);color:var(--t1)}'
    + '.cv-escala button.on{border-color:var(--ac);background:var(--vidro3);color:var(--t1)}'
    + '.cv-relogio{display:flex;align-items:center;gap:12px}'
    + '@property --cv-p{syntax:"<percentage>";inherits:false;initial-value:0%}'
    + '.cv-anel{width:48px;height:48px;flex:none;border-radius:50%;background:conic-gradient(var(--ac) var(--cv-p),rgba(255,255,255,.1) 0);-webkit-mask:radial-gradient(circle,transparent 16px,#000 17px);mask:radial-gradient(circle,transparent 16px,#000 17px);animation:cv-gira linear forwards}'
    + '.cv-anel.parado{animation:none}'
    + '@keyframes cv-gira{from{--cv-p:0%}to{--cv-p:100%}}'
    + '@media (prefers-reduced-motion:reduce){.cv-anel{animation:none}}'
    + '.cv-crachas{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}'
    + '.cv-cracha{display:grid;gap:4px;padding:12px 14px;border-radius:14px;border:1px solid var(--fio2);background:var(--vidro2)}'
    + '.cv-cracha small{font:700 12px var(--ui);letter-spacing:.1em;text-transform:uppercase;color:var(--t3)}'
    + '.cv-cracha b{font:700 20px/1.2 var(--disp);color:var(--t1)}.cv-cracha span{font:500 15px/1.4 var(--ui);color:var(--t2)}'
    + '.cv-cracha em{font:600 14px/1.4 var(--ui);font-style:normal;color:var(--ac2,var(--ac))}'
    + 'html.wl-sala-aluno .prof-limite em{display:none}'
    + '.cv-hw{display:flex;justify-content:center;margin:18px 0 0}'
    + '.cv-q{margin:0;font:600 clamp(18px,1.35vw,23px)/1.35 var(--ui);color:var(--t1)}'
    + '@media (max-width:860px){.cv{grid-template-columns:1fr}.cv-escala button span{display:none}}';
  try { var s = document.createElement('style'); s.id = 'wl-cv-css'; s.textContent = css; (document.head || document.documentElement).appendChild(s); } catch (x) { /* segue */ }
})();
