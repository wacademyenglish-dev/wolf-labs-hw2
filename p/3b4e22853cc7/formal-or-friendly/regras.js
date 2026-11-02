/* As regras do corretor da revisão Formal or Friendly?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(writing (?:to )?you to inform that)\b/gi, m, 1, "I am writing to inform you that…"));
  out = out.concat(A(/\b(inform that)\b/gi, m, 1, "inform + person: inform you that."));
  out = out.concat(A(/\b(the inconvenient)\b/gi, m, 1, "any inconvenience (noun)."));
  return out;
};
