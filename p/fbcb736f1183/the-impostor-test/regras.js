/* As regras do corretor desta aula (nível 3): question tags. "isn't it?" depois de sujeito que não é IT ou de verbo que não é IS; "don't you/she" depois de BE; "amn't I"; "Nobody …, didn't they?"; "Let's …, isn't it?". A direção (subir/descer) é coisa do ouvido: é o professor quem confere. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:you|i|we|they|he|she) (?:like|love|live|work|did|went|have|had|can|will|were|are|am|play|know|want|finished|gave|chose)\b[^,?]*, isn't it\?|(?:you|i|we|they|he|she) (?:like|love|live|work|did|went|have|had|can|will|were|are|am|play|know|want|finished|gave|chose)\b[^,?]*, isn’t it\?)/g, m, 1, '“isn’t it?” only goes with IS and IT. Copy the auxiliary and the person.'));
  out = out.concat(A(/\b((?:you're|you’re|you are|she's|she’s|she is|he's|he’s|he is|they're|they’re|we're|we’re) [^,?]*, (?:don't|don’t|doesn't|doesn’t) (?:you|she|he|they|we)\?)/g, m, 1, 'BE in the sentence: BE in the tag. aren’t you? isn’t she?'));
  out = out.concat(A(/\b(amn't i|amn’t i|am not i)\?/g, m, 1, 'The special one: aren’t I?'));
  out = out.concat(A(/\b((?:nobody|no one|nothing) [^,?]*, (?:didn't|didn’t|isn't|isn’t|wasn't|wasn’t) (?:they|it|he)\?)/g, m, 1, 'NOBODY is already negative: did they?'));
  out = out.concat(A(/\b(let's [^,?]*, (?:isn't it|isn’t it|don't we|don’t we)\?|let’s [^,?]*, (?:isn't it|isn’t it|don't we|don’t we)\?)/g, m, 1, 'LET’S: shall we?'));
  return out;
};
