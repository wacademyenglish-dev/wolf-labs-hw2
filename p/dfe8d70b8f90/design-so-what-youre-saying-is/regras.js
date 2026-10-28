/* As regras do corretor da revisão So What You’re Saying Is…. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(what means)\b/gi, m, 1, "Natural: What do you mean by…?"));
  return out;
};
