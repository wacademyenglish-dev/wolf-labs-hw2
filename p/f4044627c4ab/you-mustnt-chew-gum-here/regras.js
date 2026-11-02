/* As regras do corretor desta aula (nível 2): must + verbo puro; mustn't; don't have to; nada de don't must, must to, haven't to; must não tem passado. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:must|mustn't|must not)\s+to)\s+[a-z]+/g, m, 1, 'No TO after must: you must stand.'));
  out = out.concat(A(/\b((?:don't|doesn't|didn't|do not|does not)\s+must)\b/g, m, 1, 'The negative of must is mustn’t.'));
  out = out.concat(A(/\b(musts|musted)\b/g, m, 1, 'must never changes. In the past: had to.'));
  out = out.concat(A(/\b((?:haven't|hasn't|have not|has not)\s+to)\s+[a-z]+/g, m, 1, 'have to is a normal verb: don’t have to.'));
  out = out.concat(A(/\b((?:he|she|it)\s+don't\s+have\s+to)\b/g, m, 1, 'He / she: doesn’t have to.'));
  out = out.concat(A(/\b(?:yesterday|last \w+|\w+ ago)\b[^.!?]*\b((?:i|you|we|they|he|she)\s+must)\b/g, m, 1, 'must has no past: had to.'));
  out = out.concat(A(/\b(?:it's free|it is free|is free|are free)\b[^.!?]*\b(mustn't|must not)\b/g, m, 1, 'Free means NOT NECESSARY: you don’t have to pay.'));
  out = out.concat(A(/\b(mustn't|must not)\s+pay\b[^.!?]*\b(?:free)\b/g, m, 1, 'Free means NOT NECESSARY: you don’t have to pay.'));
  return out;
};
