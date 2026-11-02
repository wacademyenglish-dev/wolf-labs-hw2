/* As regras do corretor desta aula (nível 2): -self × each other, verbos que não levam -self, by myself × alone. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:feel|feels|felt|relax|relaxed|focus|focused|complain|complained|concentrate|remember|remembered|got up|get up|gets up)\s+(myself|yourself|himself|herself|ourselves|themselves|itself)\b/g, m, 1, 'This verb takes nothing: I feel tired · He got up · We relaxed.'));
  out = out.concat(A(/\b(?:got|get|gets)\s+(myself|yourself|himself|herself|ourselves|themselves)\s+up\b/g, m, 1, 'Get up takes nothing: He got up at five.'));
  out = out.concat(A(/\b(each others|each another|one each other)\b/g, m, 1, 'each other: two words, no s.'));
  out = out.concat(A(/\b(?:i|we|they|he|she)\s+(?:was|were)\s+(by myself|by ourselves|by themselves|by himself|by herself)\b/g, m, 1, 'Nobody there: I was alone. (By myself = nobody helped.)'));
  out = out.concat(A(/\b(?:i|he|she)\s+(?:did|made|carried|finished|built|fixed|cooked|opened)\s+(?:it|them|the \w+|everything)\s+(alone)\b(?=[^.]*\b(?:but|while)\b[^.]*\b(?:there|room|with)\b)/g, m, 1, 'People were there, nobody helped: by myself.'));
  out = out.concat(A(/\b(hisself|theirselves|themself)\b/g, m, 1, 'himself · themselves'));
  return out;
};
