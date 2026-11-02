/* As regras do corretor desta aula (nível 3): future continuous. "will + -ing" sem BE; "will be + forma base" sem -ING; "will be not"; "Will be you"; "in this time next year"; idade com HAVE ("will have 55 years"); "I'll be probably"; "will to"; verbo de estado com -ing ("will be knowing"). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:will|won't|won’t|'ll|’ll) (?:probably |still |not )?(?!be\b|being\b|bring\b|sing\b|ring\b|swing\b|sting\b)\w+ing)\b/g, m, 1, 'A piece is missing: will BE + -ing.'));
  out = out.concat(A(/\b((?:will|won't|won’t|'ll|’ll) (?:probably |still )?be (?:work|live|study|ride|cook|learn|grow|check|run|carry|use|drive|play|travel|eat|sleep|watch|dance|help|wait|teach|move|stay|sit|wear|read|write|make|take|do|go)\b)(?! *(?:of|from|able)\b)/g, m, 1, 'A piece is missing: will be + verb-ING.'));
  out = out.concat(A(/\b(will be not)\b/g, m, 1, 'Negative: won’t be + -ing.'));
  out = out.concat(A(/\b(will be (?:you|he|she|they|we|it) \w+ing)\b/g, m, 1, 'Question: Will you be …-ing?'));
  out = out.concat(A(/\b(in this time (?:next|tomorrow)\w*(?: \w+)?)/g, m, 1, 'No IN: This time next year …'));
  out = out.concat(A(/\b((?:will|'ll|’ll) have \d+ years?(?: old)?)/g, m, 1, 'Age takes BE: I’ll be 55.'));
  out = out.concat(A(/\b((?:'ll|’ll|will) be probably)\b/g, m, 1, 'probably goes after will: I’ll probably be …'));
  out = out.concat(A(/\b((?:will|won't|won’t|'ll|’ll) to \w+)/g, m, 1, 'No TO after will.'));
  out = out.concat(A(/\b((?:will|'ll|’ll) (?:still )?be (?:knowing|having (?:\d|a car|a house|kids|children)|loving|understanding|believing|owning))\b/g, m, 1, 'State verbs stay simple: I’ll know.'));
  return out;
};
