/* As regras do corretor da revisão Fill It In. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(marital status:? alone)\b/gi, m, 1, "Use: single."));
  return out;
};
