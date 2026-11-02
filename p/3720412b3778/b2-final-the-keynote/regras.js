/* As regras do corretor da revisão The Keynote. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:tend|tends|seem|seems|appear|appears) to (?:working|being|getting|doing|living|having))\b/gi, m, 1, "seem / tend / appear + to + base verb."));
  out = out.concat(A(/\b(so I (?:do|am|have|did|can|will))\b/gi, m, 1, "Agreeing: so DO I, so AM I."));
  out = out.concat(A(/\b(neither I (?:do|am|have|did|can|will))\b/gi, m, 1, "Agreeing with a negative: neither HAVE I."));
  out = out.concat(A(/\b(it could argue)\b/gi, m, 1, "Passive: it could BE ARGUED that…"));
  out = out.concat(A(/\b(I (?:don’t|don't) think it\.)/gi, m, 1, "Short answer: I don’t think so."));
  return out;
};
