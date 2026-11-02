/* As regras do corretor desta aula (nível 1): there is / there are, a frente nunca vazia, o número no fim, Is there…? A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?:^|[.,]\s*|\bin my (?:town|city|street|house|neighborhood)\s*,?\s*)(has|have)\s+(?:a|an|two|three|four|five|many|lots|some|\d+)\b/g, m, 1, 'For what exists in a place: there is / there are.'));
  out = out.concat(A(/(?:^|[.!?]\s*|\b(?:in|on|near) [a-z ]+,\s*)(is|are)\s+(?:a|an|two|three|four|many|lots of|some|\d+)\s+\w+\s+(?:in|on|near|at|behind)\b/g, m, 1, 'The front can’t be empty: There is …'));
  out = out.concat(A(/\bthere\s+(is|isn't)\s+(?:two|three|four|five|six|many|lots of|a lot of|some|\d+)\b/g, m, 1, 'More than one: there are / there aren’t.'));
  out = out.concat(A(/\bthere\s+(are|aren't)\s+(?:a|an|one)\s+(?!lot\b)/g, m, 1, 'One thing: there is / there isn’t.'));
  out = out.concat(A(/^\s*(there (?:is|are) [^.?]*\?)/g, m, 1, 'To ask, swap the two words: Is there…?'));
  out = out.concat(A(/\b(?:isn't|aren't)\s+(no)\b/g, m, 1, 'One no is enough: there aren’t any.'));
  return out;
};
