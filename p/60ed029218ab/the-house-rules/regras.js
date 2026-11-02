/* As regras do corretor da revisão The House Rules. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:must|mustn’t|mustn't|should|shouldn’t|shouldn't) to)\b/gi, m, 1, "must / should + verb, no to."));
  out = out.concat(A(/\b((?:don’t|don't|doesn’t|doesn't) must)\b/gi, m, 1, "No do with must: mustn’t (forbidden) or don’t have to (not necessary)."));
  out = out.concat(A(/\b((?:he|she|it|leo|ana) have to)\b/gi, m, 1, "He / she: has to."));
  out = out.concat(A(/\b(musts)\b/gi, m, 1, "must has no -s."));
  return out;
};
