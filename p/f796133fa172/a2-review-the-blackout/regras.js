/* As regras do corretor da revisão The Blackout. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:I|he|she|it) were)\b/g, m, 1, "I / he / she / it WAS."));
  out = out.concat(A(/\b((?:we|they|you) was)\b/gi, m, 1, "we / you / they WERE."));
  out = out.concat(A(/\b((?:was|were) (?:cook|watch|read|sleep|eat|play|go|do|look|work|study|walk|talk|drive))\b/gi, m, 1, "was / were + -ing: was cooking."));
  out = out.concat(A(/\b(did (?:you|he|she|they|we) used to)\b/gi, m, 1, "With did: use to (no d). Did you use to…?"));
  out = out.concat(A(/\b(what (?:you|he|she|they) (?:were|was) doing)\b/gi, m, 1, "The question: What were you doing?"));
  return out;
};
