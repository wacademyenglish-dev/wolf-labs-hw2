/* As regras do corretor da revisão We Made a Mistake. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(mistakes were made)\b/gi, m, 1, "Active voice: We made a mistake."));
  out = out.concat(A(/\b(not a big deal)\b/gi, m, 1, "Don’t minimize: explain the effect honestly."));
  return out;
};
