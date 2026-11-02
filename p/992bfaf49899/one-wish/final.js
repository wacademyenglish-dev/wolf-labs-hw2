/* ============================================================
   FINAL · os fechamentos falados das aulas de música (07/10/2026)
   O Carlos: "nem todas precisam terminar com escrita; podem ser com
   perguntas, entrevistas, coisas do tipo". Cada aula que troca o final
   declara no aula.js um objeto FIM (entre /*@@FIM*\/ … /*FIM@@*\/);
   este arquivo (carregado depois do aula.js via "scripts" no
   pagina.json) troca o R.fim. A escrita da aula fica na lição de casa.
   Só fala: nenhum campo de escrever. O link da lição de casa fica no fim.
   Tipos:
   · minuto     — um minuto sem parar sobre um tema, com palavras para usar.
                  FIM.temas: [{t, ajuda}] · FIM.palavras: []
   · perguntas  — rodada: uma pergunta por vez, depois o aluno pergunta.
                  FIM.itens: [{q, ex}] · FIM.depois
   · debate     — uma frase polêmica; o aluno escolhe o lado, o professor
                  defende o outro. FIM.frase · FIM.a/FIM.b {rot, motivos[]}
                  · FIM.frases (para discordar com educação)
   · entrevista — o aluno entrevista o professor num papel; depois trocam.
                  FIM.papel · FIM.papel2 · FIM.itens: [{q, ex}]
   · cadeira    — cadeira quente: o aluno é alguém e responde rápido.
                  FIM.quem · FIM.itens: [{q, ex}]
   ============================================================ */
(function () {
  if (typeof FIM === 'undefined') return;
  var iF = -1; L.forEach(function (c, i) { if (c.k === 'fim') iF = i; });
  if (iF < 0) return;
  L[iF].est = 'o'; if (FIM.rot) L[iF].rot = FIM.rot; if (FIM.t) L[iF].t = FIM.t; if (FIM.p) L[iF].p = FIM.p;
  S.fm = { sel: -1, n: 0, lado: -1, troca: 0, go: 0, tema: -1 };

  var css = ''
    + '.fm{max-width:1200px;margin:0 auto;width:100%;display:grid;gap:12px}'
    + '.fm-dica{margin:0;text-align:center;font:500 15px/1.5 var(--ui);color:var(--t2)} .fm-dica i{font-family:var(--disp);font-size:1.15em;color:var(--ac2)}'
    + '.fm-pe{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;align-items:center;margin-top:4px}'
    + '.fm-lista{display:grid;gap:6px}'
    + '.fm-q{padding:9px 14px;border-radius:10px;border:1px solid var(--fio2);background:var(--vidro);font:400 clamp(16px,1.15vw,20px)/1.2 var(--disp);color:var(--t1);text-align:left;cursor:pointer}'
    + '.fm-q.on{border-color:var(--ac);box-shadow:inset 3px 0 0 var(--ac)}'
    + '.fm-duas{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(18px,3vw,44px);align-items:start}'
    + '.fm-cracha{display:grid;gap:8px;padding:18px;border-radius:16px;border:1px solid var(--fio2);background:var(--vidro);text-align:center}'
    + '.fm-cracha small{font:600 12px var(--ui);color:var(--t3);letter-spacing:.06em}'
    + '.fm-cracha b{font:400 clamp(24px,2vw,34px)/1.15 var(--disp);color:var(--ac2)}'
    + '.fm-cracha span{font:500 14px/1.4 var(--ui);color:var(--t2)}'
    /* minuto */
    + '.fm-relogio{position:relative;display:grid;place-items:center;align-content:center;width:clamp(170px,22vh,230px);aspect-ratio:1;margin:0 auto;border-radius:50%;background:var(--vidro);box-shadow:inset 0 0 0 2px var(--fio2)}'
    + '@property --fmp{syntax:"<number>";inherits:false;initial-value:1}'
    + '.fm-anel{position:absolute;inset:0;border-radius:50%;background:conic-gradient(var(--ac) calc(var(--fmp)*1turn),transparent 0);-webkit-mask:radial-gradient(circle,transparent 62%,#000 63%);mask:radial-gradient(circle,transparent 62%,#000 63%)}'
    + '.fm-relogio.go .fm-anel{animation:fmesvazia 60s linear both}'
    + '@keyframes fmesvazia{from{--fmp:1}to{--fmp:0}}'
    + '.fm-relogio b{position:relative;font:400 clamp(44px,6vh,66px)/1 var(--disp);color:var(--t1)} .fm-relogio small{position:relative;font:600 13px var(--ui);color:var(--t2)}'
    + '.fm-chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}'
    + '.fm-chips span{padding:6px 12px;border-radius:99px;border:1px dashed var(--fio2);font:italic 400 17px var(--disp);color:var(--ac2)}'
    /* debate */
    + '.fm-frase{padding:clamp(18px,3vh,28px);border-radius:16px;border:1px solid var(--fio2);background:var(--vidro);text-align:center;font:400 clamp(26px,2.4vw,42px)/1.15 var(--disp);color:var(--t1)}'
    + '.fm-lados{display:grid;grid-template-columns:1fr 1fr;gap:14px}'
    + '.fm-lado{display:grid;gap:8px;align-content:start;padding:16px;border-radius:14px;border:1px solid var(--fio2);background:var(--vidro);cursor:pointer;text-align:left}'
    + '.fm-lado b{font:600 15px var(--ui);color:var(--t1)} .fm-lado li{font:400 16px/1.4 var(--ui);color:var(--t2)} .fm-lado ul{margin:0;padding-left:18px}'
    + '.fm-lado.on{border-color:var(--ac);box-shadow:0 0 0 2px var(--ac) inset} .fm-lado.on b::after{content:"  · you";color:var(--ac)} .fm-lado.prof b::after{content:"  · the teacher";color:var(--t3)}'
    + '@media (max-width:760px){.fm-duas,.fm-lados{grid-template-columns:1fr}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var hw = '<a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a>';
  var lista = function (itens, chave) {
    return '<div class="fm-lista">' + itens.map(function (x, i) { return '<button type="button" class="fm-q' + (S.fm.sel === i ? ' on' : '') + '" data-a="fm-s" data-n="' + i + '">' + x.q + '</button>'; }).join('')
      + (S.fm.sel >= 0 ? mostra(chave + S.fm.sel + (S.fm.troca ? 't' : ''), itens[S.fm.sel].ex, 1) : '') + '</div>';
  };
  var T = {};
  T.minuto = function () {
    var e = S.fm, x = FIM.temas[e.tema];
    return '<div class="fm-duas"><div><div class="fm-relogio' + (e.go ? ' go' : '') + '"><span class="fm-anel"></span><b>' + (e.go ? '' : '60') + '</b><small>' + (e.go ? 'keep talking' : 'seconds') + '</small></div><div class="fm-pe"><button type="button" class="btn cheio so-prof" data-a="fm-go">' + (e.go ? 'Again (teacher’s turn)' : 'Start the minute') + '</button></div></div>'
      + '<div class="fm-lista">' + FIM.temas.map(function (t, i) { return '<button type="button" class="fm-q' + (e.tema === i ? ' on' : '') + '" data-a="fm-t" data-n="' + i + '">' + t.t + '</button>'; }).join('')
      + (x ? '<p class="fm-dica">Start like this: <i>' + x.ajuda + '</i></p>' : '<p class="fm-dica">Pick a topic. One minute, no stopping. Use the words below.</p>')
      + (FIM.palavras ? '<div class="fm-chips">' + FIM.palavras.map(function (w) { return '<span>' + w + '</span>'; }).join('') + '</div>' : '') + '</div></div>';
  };
  T.perguntas = function () {
    var e = S.fm, n = Math.min(e.n, FIM.itens.length - 1), fim = e.n >= FIM.itens.length, x = FIM.itens[n];
    if (fim) return '<div class="pergunta vd ja"><small>Your turn</small><h2>' + (FIM.depois || 'Now you ask the teacher two of these questions.') + '</h2></div>';
    return '<div class="pergunta vd ja"><small>Question ' + (n + 1) + ' of ' + FIM.itens.length + '</small><h2>' + x.q + '</h2></div>' + mostra('fmq' + n, x.ex, 1)
      + '<div class="fm-pe"><button type="button" class="btn cheio so-prof" data-a="fm-n">Next question</button></div>';
  };
  T.debate = function () {
    var e = S.fm, lado = function (k, o) {
      return '<button type="button" class="fm-lado' + (e.lado === k ? ' on' : e.lado >= 0 ? ' prof' : '') + '" data-a="fm-l" data-n="' + k + '"><b>' + o.rot + '</b><ul>' + o.motivos.map(function (m) { return '<li>' + m + '</li>'; }).join('') + '</ul></button>';
    };
    return '<div class="fm-frase">“' + FIM.frase + '”</div><div class="fm-lados">' + lado(0, FIM.a) + lado(1, FIM.b) + '</div>'
      + (e.lado >= 0 ? '<p class="fm-dica">You defend your side; the teacher defends the other. Then swap sides for one minute. Useful: ' + (FIM.frases || ['I see your point, but…', 'That’s true, however…', 'I’m not sure about that, because…']).map(function (f) { return '<i>' + f + '</i>'; }).join(' · ') + '</p>' : '<p class="fm-dica">Choose your side. The teacher takes the other one.</p>');
  };
  T.entrevista = function () {
    var e = S.fm;
    return '<div class="fm-duas"><div class="fm-cracha vd"><small>' + (e.troca ? 'Now the teacher interviews' : 'You interview') + '</small><b>' + (e.troca ? (FIM.papel2 || 'you') : FIM.papel) + '</b><span>' + (e.troca ? 'Answer as yourself.' : 'The teacher answers in the role.') + '</span></div>' + lista(FIM.itens, 'fme') + '</div>'
      + '<div class="fm-pe"><button type="button" class="btn so-prof" data-a="fm-x">' + (e.troca ? 'Back: the student asks' : 'Swap: the teacher asks') + '</button></div>';
  };
  T.cadeira = function () {
    var e = S.fm;
    return '<div class="fm-duas"><div class="fm-cracha vd"><small>The hot seat</small><b>' + (e.troca ? 'The teacher' : FIM.quem) + '</b><span>' + (e.troca ? 'Now the teacher sits in the hot seat. You ask, fast.' : 'Sit in the hot seat. Answer fast, in the role. No long pauses!') + '</span></div>' + lista(FIM.itens, 'fmc') + '</div>'
      + '<div class="fm-pe"><button type="button" class="btn so-prof" data-a="fm-x">' + (e.troca ? 'Back: the student in the seat' : 'Swap: the teacher in the seat') + '</button></div>';
  };
  R.fim = function (c) { return cab(c) + '<div class="fm fm-' + FIM.tipo + '">' + T[FIM.tipo]() + '<div class="fm-pe">' + hw + '</div></div>'; };
  TOQUES['fm-s'] = function (b, n) { S.fm.sel = n; };
  TOQUES['fm-t'] = function (b, n) { S.fm.tema = n; S.fm.go = 0; };
  TOQUES['fm-go'] = function () { S.fm.go = 1; };
  TOQUES['fm-n'] = function () { S.fm.n++; };
  TOQUES['fm-l'] = function (b, n) { S.fm.lado = n; };
  TOQUES['fm-x'] = function () { S.fm.troca = S.fm.troca ? 0 : 1; S.fm.sel = -1; };
})();
