/* As regras do corretor da revisão Read Before You Sign. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(could you explain me)\b/gi, m, 1, "Could you explain… (no “me”) / Could you explain it to me?"));
  return out;
};
