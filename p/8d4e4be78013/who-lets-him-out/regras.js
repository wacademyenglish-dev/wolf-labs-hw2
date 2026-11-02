/* As regras do corretor desta aula (nível 3): make / let / be made to / be allowed to. make / let + pessoa + to (made me to go), make / let + pessoa + passado / -ing / -s, passiva sem to (was made go), was let (let não tem passiva), leave + pessoa + verbo (deixar = let), allowed sem to. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var P = '(?:me|you|him|her|us|them|it|yuji|people|\\w+)';
  out = out.concat(A(new RegExp('\\b((?:make|makes|made|let|lets|making|letting) ' + P + ' to \\w+)', 'g'), m, 1, 'After make / let + person: the base verb, no to.', function (x) { return !/\b(?:made|make|makes) (?:it|up) to\b/.test(x[1]) && !/\blet (?:it )?to\b/.test(x[1]) ; }));
  out = out.concat(A(new RegExp('\\b((?:make|makes|made|let|lets) ' + P + ' (?:ate|went|lived|trained|studied|changed|felt|did|was|were|had|eating|going|living|training|studying|changing|feeling|using|doing|changes|feels|goes|lives|eats))\\b', 'g'), m, 1, 'After make / let + person: the base verb. made him eat.'));
  out = out.concat(A(/\b((?:was|were|is|are|am|be|been) made (?!to\b|of\b|from\b|in\b|by\b|for\b|with\b)(?:fight|train|go|eat|work|study|stay|leave|wait|clean|wear|sit|run))\b/g, m, 1, 'In the passive, to comes back: was made to fight.'));
  out = out.concat(A(/\b((?:was|were|is|are|am|be|been|wasn't|wasn’t|weren't|weren’t) let to \w+)/g, m, 1, 'Let has no passive: be allowed to.'));
  out = out.concat(A(/\b((?:leave|leaves|leaved|left) (?:me|him|her|us|them|you) (?:go|live|stay|try|play|sleep|speak|be))\b/g, m, 1, 'Deixar (permitir) = let. Let me go.'));
  out = out.concat(A(/\b(leaved)\b/g, m, 1, 'Deixar (permitir) = let.'));
  out = out.concat(A(/\b((?:was|were|is|are|am|wasn't|wasn’t|weren't|weren’t|isn't|isn’t|aren't|aren’t|not) allowed (?!to\b)(?:go|leave|use|stay|eat|play|drive|watch|talk|smoke|sleep))\b/g, m, 1, 'Be allowed + to: allowed to leave.'));
  return out;
};
