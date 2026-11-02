/* As regras do corretor da revisão On the Contrary. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(in the other hand)\b/gi, m, 1, "ON the other hand."));
  out = out.concat(A(/\b(at the contrary|in the contrary)\b/gi, m, 1, "ON the contrary."));
  out = out.concat(A(/\b(in contrast of)\b/gi, m, 1, "in contrast TO / WITH."));
  return out;
};
