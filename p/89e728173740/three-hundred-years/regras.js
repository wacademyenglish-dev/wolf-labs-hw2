/* As regras do corretor desta aula (nível 3): concessão. "despite of"; "in spite + não-of"; "although/even though … , but" (dois conectores); "despite/in spite of + pronome sujeito + verbo" (despite it was, despite nobody could); "even though I won/had … I would" (imaginado: even if). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(despite of)\b/g, m, 1, 'DESPITE: no OF (or IN SPITE OF).'));
  out = out.concat(A(/\b(in spite (?!of\b)\w+)/g, m, 1, 'IN SPITE OF: all three words.'));
  out = out.concat(A(/\b((?:although|even though|though)\b[^.!?]*?, but)\b/g, m, 1, 'One connector per sentence: delete BUT.'));
  out = out.concat(A(/\b((?:despite|in spite of) (?:it|he|she|they|we|i|you|nobody|everybody|the \w+) (?:is|was|were|are|could|can|cost|costs|had|has|have|did|does|heard|hears))\b/g, m, 1, 'A sentence follows: use ALTHOUGH (or despite + a thing / -ing).'));
  out = out.concat(A(/\b(even though (?:i|you|we|they|he|she) (?:won|had|were|was)\b[^.!?]*\bwould)\b/g, m, 1, 'Imagined: EVEN IF.'));
  return out;
};
