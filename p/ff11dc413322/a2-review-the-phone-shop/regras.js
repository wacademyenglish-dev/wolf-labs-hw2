/* As regras do corretor da revisão The Phone Shop. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(more (?:fast|cheap|big|small|good|bad|old|new|easy|slow|long|short))\b/gi, m, 1, "Short word: -er. faster, cheaper; good → better."));
  out = out.concat(A(/\b(the most (?:fast|cheap|big|small|good|bad|easy|slow))\b/gi, m, 1, "Short word: the -est. the cheapest; good → the best."));
  out = out.concat(A(/\b(as \w+ than)\b/gi, m, 1, "as … as."));
  out = out.concat(A(/\b((?:works?|cook|cooks|drive|drives|sing|sings|speak|speaks|play|plays) (?:very |really )?good)\b/gi, m, 1, "How someone does it: well."));
  out = out.concat(A(/\b(good in \w+|bad in \w+|interested on \w+|afraid from \w+)\b/gi, m, 1, "good at, bad at, interested in, afraid of + -ing."));
  return out;
};
