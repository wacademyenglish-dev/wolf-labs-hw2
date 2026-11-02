/* As regras do corretor da revisão With All Due Respect. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(you(?:’re|'re| are) (?:completely |totally )?wrong)\b/gi, m, 1, "Softer: I see it slightly differently."));
  out = out.concat(A(/\b(I (?:don’t|don't|do not) agree(?: with you)?)\b/gi, m, 1, "Softer: I’m not sure I agree / I take your point, but…"));
  out = out.concat(A(/\b(that(?:’s|'s| is) not true)\b/gi, m, 1, "Softer: I’m not sure I’d go that far."));
  return out;
};
