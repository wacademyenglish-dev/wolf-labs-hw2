/* As regras do corretor da revisão Walk Me Through Your CV. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(since (?:two|three|four|five|\d+) (?:years|months))\b/gi, m, 1, "Period: for two years. Point: since 2022. Past: two years ago."));
  out = out.concat(A(/\b(i promoted)\b/gi, m, 1, "Passive: I was promoted."));
  return out;
};
