/* As regras do corretor da revisão I Understand You’re Worried. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(calm down)\b/gi, m, 1, "Try: I can see you’re upset, and that’s understandable."));
  return out;
};
