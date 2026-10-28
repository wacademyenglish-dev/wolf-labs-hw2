/* As regras do corretor da revisão The Real Interview. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(i see me)\b/gi, m, 1, "Reflexive: I see myself…"));
  return out;
};
