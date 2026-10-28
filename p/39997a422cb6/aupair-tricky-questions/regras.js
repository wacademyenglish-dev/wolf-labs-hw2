/* As regras do corretor da revisão Tricky Questions. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(would (?:called|checked|stayed|talked|gave|went))\b/gi, m, 1, "would + base verb: would call."));
  out = out.concat(A(/\b(if (?:he|she|it|they|I|you) would)\b/gi, m, 1, "No would after if: If she cried, I would…"));
  return out;
};
