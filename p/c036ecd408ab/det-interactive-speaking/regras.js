/* As regras do corretor da revisão Interactive Speaking. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(I am agree)\b/gi, m, 1, "agree is a verb: I agree."));
  return out;
};
