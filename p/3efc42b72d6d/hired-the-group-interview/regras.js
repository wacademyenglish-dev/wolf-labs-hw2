/* As regras do corretor da revisão The Group Interview. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(i don'?t agree with you)\b/gi, m, 1, "Softer: I see it slightly differently, because…"));
  return out;
};
