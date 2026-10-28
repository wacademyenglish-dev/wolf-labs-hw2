/* As regras do corretor da revisão Match!. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(will to \w+)\b/gi, m, 1, "will + verb (no “to”)."));
  out = out.concat(A(/\b(I go to arrive)\b/gi, m, 1, "I’m going to arrive."));
  return out;
};
