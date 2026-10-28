/* As regras do corretor da revisão The Tricky Question. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(can you repeat)\b/gi, m, 1, "More polite: Could you say that again, please?"));
  out = out.concat(A(/\b(i don'?t have idea)\b/gi, m, 1, "I have no idea / I don’t know exactly."));
  return out;
};
