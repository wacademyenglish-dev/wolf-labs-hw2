/* As regras do corretor da revisão The Family Call. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(how many years (?:has|have|does))\b/gi, m, 1, "Age: How old is / are…?"));
  out = out.concat(A(/\b(when I will|what I will|how many hours I will)\b/gi, m, 1, "Question: will I…?"));
  return out;
};
