/* As regras do corretor da revisão Who Do I Call?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(9-1-1|nine one one)\b/gi, m, 1, "Write it: 911."));
  return out;
};
