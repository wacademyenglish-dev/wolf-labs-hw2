/* As regras do corretor da revisão Twice a Day With Food. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(two times (?:for|per) day)\b/gi, m, 1, "twice a day"));
  out = out.concat(A(/\b(remed(?:y|ies))\b/gi, m, 1, "medicine / medication"));
  out = out.concat(A(/\b(stomach empty)\b/gi, m, 1, "on an empty stomach"));
  return out;
};
