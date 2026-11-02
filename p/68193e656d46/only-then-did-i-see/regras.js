/* As regras do corretor da revisão Only Then Did I See. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(only (?:then|later|now|once|recently|afterwards) (?:I|we|they|he|she|you) \w+)\b/gi, m, 1, "Only then / later + auxiliary + subject: Only then DID I see."));
  out = out.concat(A(/\b(only (?:when|after|if|by) (?:did|do|does|had|have|has|will|would|could|was|were) )/gi, m, 1, "With Only when / after / if + clause, invert the MAIN clause, not the first part."));
  out = out.concat(A(/\b(only by (?:practise|practice|read|work|study|listen|try|make|fail))\b/gi, m, 1, "Only by + -ing: Only by practising…"));
  return out;
};
