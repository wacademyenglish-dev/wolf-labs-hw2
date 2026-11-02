/* As regras do corretor da revisão The Factory Tour. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:is|are|was|were) (?:make|build|grow|write|steal|send|give|find|bring|sell|design|open))\b/gi, m, 1, "The passive: be + participle (made, built, grown…)."));
  out = out.concat(A(/\b(was build|were build)\b/gi, m, 1, "build, built, built: it was built."));
  out = out.concat(A(/\b((?:written|painted|designed|made|built|created) from)\b/gi, m, 1, "The person who did it: by."));
  out = out.concat(A(/\b((?:has|have) (?:found|created|closed|opened|stolen|elected) (?:in|by|today|yesterday))\b/gi, m, 1, "News in the passive: has BEEN found."));
  return out;
};
