/* As regras do corretor da revisão The Expedition. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:am|’m|'m|is|’s|are|’re|was|were|get|got|getting) used to (?:sleep|work|live|drive|wake|speak|have|eat|hear|commute|pay))\b/gi, m, 1, "be / get used to + -ing: used to sleeping."));
  out = out.concat(A(/\b(by (?:next \w+|20\d\d|then|the time \w+ \w+),? (?:I|we|she|he|they) will (?:publish|build|finish|open|write|run|pay|start|buy))\b/gi, m, 1, "Finished before then: will HAVE + participle."));
  out = out.concat(A(/\b(until (?:Friday|Monday|tomorrow|the deadline)[^.]* (?:send|finish|deliver|submit))/gi, m, 1, "A deadline: by Friday. until = all the time up to."));
  out = out.concat(A(/\b((?:was|were) going to (?:called|went|did|ate|made|studied))\b/gi, m, 1, "was going to + base verb: was going to call."));
  return out;
};
