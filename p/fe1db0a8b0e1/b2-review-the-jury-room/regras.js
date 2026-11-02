/* As regras do corretor da revisão The Jury Room. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:I|you|we|they|he|she|it|the \w+) would have)\b/gi, m, 1, "No would after if: If he HAD called…"));
  out = out.concat(A(/\b((?:should|could|would|might|must) had)\b/gi, m, 1, "should / could / would + HAVE + participle."));
  out = out.concat(A(/\b((?:should|could|would|might) (?:called|checked|asked|told|gone|done|said|written|arrived|cut))\b/gi, m, 1, "Missing have: could HAVE called."));
  return out;
};
