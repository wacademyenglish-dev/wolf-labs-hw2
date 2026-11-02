/* As regras do corretor desta aula (nível 1): advérbios de frequência — antes do verbo normal, depois de BE; never/rarely sem don't. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var F = '(always|usually|often|sometimes|rarely|never)';
  out = out.concat(A(new RegExp("\\b(?:i|you|he|she|we|they|it|marco|bea|my \\w+)\\s+(?!am\\b|is\\b|are\\b|was\\b|were\\b|don't\\b|doesn't\\b|can\\b)\\w+\\s+" + F + '\\s+(?:the|a|an|my|your|his|her|our|their|at|on|in|to|coffee|lunch|dinner|tv|home)\\b', 'g'), m, 1, 'With a normal verb, the word goes BEFORE it: she always makes …'));
  out = out.concat(A(new RegExp('\\b' + F + '\\s+(am|is|are)\\b', 'g'), m, 2, 'With am / is / are, the word goes AFTER: he is never late.'));
  out = out.concat(A(/\b(don't|doesn't|do not|does not)\s+(?:never|rarely)\b/g, m, 1, 'never and rarely are already negative: I never eat …'));
  out = out.concat(A(/\b(?:never|rarely)\s+(don't|doesn't)\b/g, m, 1, 'never and rarely are already negative: I never eat …'));
  out = out.concat(A(/\b(sometime)\s+(?:i|you|he|she|we|they)\b/g, m, 1, 'One word, with s: sometimes.'));
  return out;
};
