/* As regras do corretor da revisão Dear Host Family. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(I have \d+ years)\b/gi, m, 1, "Age: I am 22 (years old)."));
  out = out.concat(A(/\b(dear host family)(?!,)/gi, m, 1, "Dear Host Family, (with a comma)"));
  return out;
};
