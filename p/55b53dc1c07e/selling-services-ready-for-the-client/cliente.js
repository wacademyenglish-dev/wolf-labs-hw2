/* O CLIENTE · Arena do Cliente (catálogo IA-xx) · curso Selling Services · 28/10/2026
   Carregado DEPOIS do revisao.js. Hoje funciona no MODO PROFESSOR: o professor é o cliente,
   lê a ficha (só ele vê as respostas) e marca cada fato que o aluno descobriu perguntando.
   Quando a IA cliente entrar (kit + ponte da plataforma), window.WL_CLIENTE_IA assume a conversa
   e esta mesma cena vira chat; os dados não mudam.
   CLIENTE = { rot, codigo:'IA-01', persona:{ nome, cargo, empresa, humor, ini }, missao, abre,
               fatos:[{ k, q, r }], chips:[…], modelo, fim } */
S.cl = S.cl || { ach: {} };
if (!R.cliente) R.cliente = function (c) {
  var C = window.CLIENTE, e = S.cl, P = C.persona, F = C.fatos, n = F.filter(function (f, i) { return e.ach[i]; }).length;
  var ficha = '<div class="pv-tarefa vd cl-ficha"><small>' + C.rot + (C.codigo ? ' · ' + C.codigo : '') + '</small>'
    + '<div class="cl-quem"><span class="cl-av" aria-hidden="true">' + (P.ini || P.nome.charAt(0)) + '</span><div><b>' + P.nome + '</b><span>' + P.cargo + ' · ' + P.empresa + '</span></div></div>'
    + '<p class="cl-humor">' + P.humor + '</p>'
    + '<div class="cl-fala"><small>' + P.nome.split(' ')[0].toUpperCase() + ' SAYS</small>“' + C.abre + '”</div>'
    + '<p class="so-prof dica-aluno">You are ' + P.nome.split(' ')[0] + '. Answer ONLY what the student asks, in short sentences. Your answers are on the right. Tap a fact when the student finds it.</p></div>';
  var fatos = F.map(function (f, i) {
    return '<button type="button" class="cl-fato' + (e.ach[i] ? ' on' : '') + '" data-a="cl-f" data-n="' + i + '"><i aria-hidden="true"></i><span><b>' + f.k + '</b>'
      + (e.ach[i] ? '<em>' + f.r + '</em>' : '<em class="so-prof">' + f.q + ' → ' + f.r + '</em>') + '</span></button>';
  }).join('');
  var lado = '<div class="mesa-card"><small>YOUR MISSION · ' + n + ' OF ' + F.length + '</small><p class="pq">' + C.missao + '</p>'
    + '<div class="cl-fatos">' + fatos + '</div>'
    + fala('cl', C.chips || [], [])
    + (n >= F.length ? '<p class="aprova">' + C.fim + '</p>' : '')
    + mostra('cl-m', C.modelo, 1) + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + ficha + '</div><div class="lado-l">' + lado + '</div></div>';
};
TOQUES['cl-f'] = function (b, n) { S.cl.ach[n] = S.cl.ach[n] ? 0 : 1; };
