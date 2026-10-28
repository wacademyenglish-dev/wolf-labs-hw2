/* As regras do corretor da revisão Know Your Rights. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(50|55|60) hours? (?:a|per) week\b/gi, m, 1, "The limit is 45 hours per week."));
  return out;
};
