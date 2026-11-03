/* O DIÁLOGO EM ÁUDIO · curso Selling Services (Business · Sob Medida) · 27/10/2026
   Carregado DEPOIS do revisao.js. Dados no aula.js:
   DIALOGO = { rot, audio, antes:{q,h}, ouvir, falas:[[quem, texto com {alvo}], …], perguntas:[{q,h}], fim }
   O áudio (edge-tts, vozes americanas) fica em audio/<audio>.mp3. A transcrição só abre depois de ouvir. */
S.dg = S.dg || { p: 0, q: 0 };
if (!R.dialogo) R.dialogo = function (c) {
  var D = window.DIALOGO, e = S.dg, P = D.perguntas, q = Math.min(e.q, P.length - 1);
  var roteiro = D.falas.map(function (f) { return f[0] + ': ' + f[1]; }).join('\n');
  var esq = '<div class="pv-tarefa vd dg-caixa"><small>' + D.rot + '</small>'
    + '<div class="pv-ouve">' + tocar(D.audio) + '<span>' + D.ouvir + '</span></div>'
    + transcricao(D.audio, comAlvo(roteiro, 1), 'dg') + '</div>';
  var lado;
  if (e.p === 0) lado = '<div class="mesa-card"><small>BEFORE YOU LISTEN</small><p class="pq">' + D.antes.q + '</p>' + mostra('dg-a', D.antes.h, 1)
    + '<div class="pratos-bt"><button type="button" class="btn cheio" data-a="dg-p">Now listen</button></div></div>';
  else lado = '<div class="mesa-card"><small>QUESTION ' + (q + 1) + ' OF ' + P.length + '</small><p class="pq">' + P[q].q + '</p>' + mostra('dg' + q, P[q].h, 0)
    + '<div class="pratos-bt">' + (q < P.length - 1 ? '<button type="button" class="btn" data-a="dg-q">Next question</button>' : '') + '</div>'
    + (q >= P.length - 1 && D.fim ? '<p class="aprova">' + D.fim + '</p>' : '')
    + '<p class="so-prof dica-aluno">Play it once without stopping. 0.75× is fine for A1. Open the transcript only after the questions.</p></div>';
  return cab(c) + trilha(P, q) + '<div class="mesa-c"><div class="lado-l">' + esq + '</div><div class="lado-l">' + lado + '</div></div>';
};
TOQUES['dg-p'] = function () { S.dg.p = 1; };
TOQUES['dg-q'] = function () { S.dg.q++; };
