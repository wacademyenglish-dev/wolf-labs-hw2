/* As regras do corretor da revisão The App Critique. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(trade-?off is that is)\b/gi, m, 1, "Add the subject: The trade-off is that it is…"));
  return out;
};
