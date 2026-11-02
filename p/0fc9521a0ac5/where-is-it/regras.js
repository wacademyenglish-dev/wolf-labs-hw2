/* As regras do corretor desta aula (nível 1): preposições de posição — on (não in) a mesa, next to, in front of, between … and …, sem of depois de between/above/behind/under. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(in)\s+the\s+(?:table|desk|shelf|wall|floor)\b(?!\s+(?:drawer|room))/g, m, 1, 'A surface: on the table, on the wall.'));
  out = out.concat(A(/\b(?:between|above|behind|under|below)\s+(of)\b/g, m, 1, 'No of here: between the …, above the …'));
  out = out.concat(A(/\bin\s+front\s+(?!of\b)(the|my|your|a|his|her)\b/g, m, 1, 'in front of: three words.'));
  out = out.concat(A(/\bnext\s+(of|the|my|your|a)\b/g, m, 1, 'next to: two words.'));
  out = out.concat(A(/\b(between\s+(?:the|my|your|a)\s+\w+(?:\s+(?!and\b)\w+)?)\s*(?:[.!?]|$)/g, m, 1, 'between needs both halves: between the table AND the sofa.'));
  out = out.concat(A(/\bwhere\s+(the\s+\w+\s+is)\b/g, m, 1, 'The question: Where is the …?'));
  return out;
};
