/* As regras do corretor da revisão Salary Talk. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if we could [^.]*?, i will)\b/gi, m, 1, "If we could…, I WOULD (I’d)…"));
  return out;
};
