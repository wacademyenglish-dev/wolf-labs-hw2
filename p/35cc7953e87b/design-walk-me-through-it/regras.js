/* As regras do corretor da revisão Walk Me Through It. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(choosed)\b/gi, m, 1, "Past of choose: chose."));
  out = out.concat(A(/\b(for (?:make|reach|save|show))\b/gi, m, 1, "Purpose: TO + verb (to make, to save)."));
  return out;
};
