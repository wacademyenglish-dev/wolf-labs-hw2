/* As regras do corretor da revisão At the Conference. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(this proves)\b/gi, m, 1, "More careful: This suggests that…"));
  return out;
};
