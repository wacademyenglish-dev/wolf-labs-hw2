/* As regras do corretor da revisão My First Week. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(I am happy for be here)\b/gi, m, 1, "I’m happy to be here."));
  return out;
};
