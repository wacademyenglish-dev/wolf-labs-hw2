/* As regras do corretor da revisão SBAR Handover. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(I am calling for)\b/gi, m, 1, "I’m calling about…"));
  return out;
};
