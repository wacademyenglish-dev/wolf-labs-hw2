/* As regras do corretor da revisão Bound to Happen. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(on the verge to \w+)\b/gi, m, 1, "on the verge of + -ing."));
  out = out.concat(A(/\b((?:is|are|it’s|it's) probable to)\b/gi, m, 1, "likely to + verb."));
  out = out.concat(A(/\b(about of \w+)\b/gi, m, 1, "about to + verb."));
  out = out.concat(A(/\b((?:prices|rent|it|traffic|the traffic|they) must (?:rise|go up|happen|increase|be busy))\b/gi, m, 1, "A prediction, not an obligation: is bound to / is likely to."));
  return out;
};
