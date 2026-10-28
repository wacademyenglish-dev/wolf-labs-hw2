/* As regras do corretor da revisão Classes and Credits. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(six credit)\b/gi, m, 1, "six credits (plural)."));
  return out;
};
