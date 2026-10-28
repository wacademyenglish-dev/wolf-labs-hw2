/* As regras do corretor da revisão Your Price Is Too High. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(sorry,? (?:i know )?it'?s expensive)\b/gi, m, 1, "Don’t apologize for your price: Here’s what’s included…"));
  return out;
};
