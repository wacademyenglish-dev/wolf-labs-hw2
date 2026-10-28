/* As regras do corretor da revisão What Brings You In Today?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(how long do you have)\b/gi, m, 1, "How long have you had…?"));
  out = out.concat(A(/\b(since (?:two|three|four|five|a few|\d+) (?:days|weeks|months|years))\b/gi, m, 1, "A period: for (for two weeks)."));
  out = out.concat(A(/\b(when has it started)\b/gi, m, 1, "When did it start?"));
  return out;
};
