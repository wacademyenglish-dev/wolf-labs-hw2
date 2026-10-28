/* As regras do corretor da revisão Any Allergies?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(allergic of)\b/gi, m, 1, "allergic to"));
  out = out.concat(A(/\b(did you ever have)\b/gi, m, 1, "Have you ever had…?"));
  return out;
};
