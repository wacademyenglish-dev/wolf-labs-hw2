/* As regras do corretor da revisão On a Scale of One to Ten. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(pain of head|pain in the head)\b/gi, m, 1, "a headache"));
  out = out.concat(A(/\b(very strong pain)\b/gi, m, 1, "severe pain"));
  return out;
};
