/* As regras do corretor da revisão Neither Yes nor No. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(neither [^.]{1,40} or)\b/gi, m, 1, "neither… NOR."));
  out = out.concat(A(/\b(neither [^.]{1,40} nor [^.]{1,30} (?:isn’t|isn't|aren’t|aren't|wasn’t|wasn't))\b/gi, m, 1, "neither is already negative: Neither… nor… is acceptable."));
  out = out.concat(A(/\b(it has decided|it has agreed|it was decided by us)\b/gi, m, 1, "Passive: it has BEEN decided that…"));
  out = out.concat(A(/\b(not only [^.]{1,40} also)\b/gi, m, 1, "not only… BUT also…"));
  return out;
};
