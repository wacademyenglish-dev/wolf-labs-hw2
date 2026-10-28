/* As regras do corretor da revisão References and Records. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(allergy (?:of|to)|alergic)\b/gi, m, 1, "I’m allergic to… / I have an allergy to…"));
  out = out.concat(A(/\b(in day)\b/gi, m, 1, "up to date"));
  out = out.concat(A(/\b(remedy|remedies)\b/gi, m, 1, "medicine / medication"));
  return out;
};
