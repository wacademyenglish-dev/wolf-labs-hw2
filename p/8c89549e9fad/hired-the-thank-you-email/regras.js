/* As regras do corretor da revisão The Thank-You Email. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(look forward to hear)\b/gi, m, 1, "look forward to + -ING: to hearing."));
  out = out.concat(A(/\b(stay waiting)\b/gi, m, 1, "Natural: I look forward to hearing from you."));
  return out;
};
