/* As regras do corretor da revisão My Weekend. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(last weekend,? I (?:go|visit|eat|meet|see))\b/gi, m, 1, "Past: went, visited, ate, met, saw."));
  out = out.concat(A(/\b(going to went|will to)\b/gi, m, 1, "going to + verb · will + verb"));
  return out;
};
