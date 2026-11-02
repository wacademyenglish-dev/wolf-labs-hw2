/* As regras do corretor da revisão The Night Train. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(having (?:finish|check|take|see|miss|hide|open|find|know))\b/gi, m, 1, "Having + participle: having finished."));
  out = out.concat(A(/\b((?:never|rarely|seldom) (?:I|we|they|he|she) (?:have|has|had|did))\b/gi, m, 1, "Inversion: Never HAVE I…"));
  out = out.concat(A(/\b(not only (?:I|we|they|he|she) (?:saw|heard|found|did|was))\b/gi, m, 1, "Inversion: Not only DID he see…"));
  out = out.concat(A(/\b(what I (?:need|want|saw|heard|found|love) it (?:is|was))\b/gi, m, 1, "No it: What I need IS…"));
  out = out.concat(A(/\b((?:would|could|should|must|might) (?:locked|followed|closed|taken|seen|done)(?! by))\b/gi, m, 1, "Past modals: would HAVE locked."));
  return out;
};
