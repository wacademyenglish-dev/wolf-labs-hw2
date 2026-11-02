/* As regras do corretor da revisão The Press Office. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(according to (?:me|my opinion))\b/gi, m, 1, "For yourself: in my opinion."));
  out = out.concat(A(/\b(if yes|if no)\b(?=[,.])/gi, m, 1, "If so / If not."));
  out = out.concat(A(/\b((?:was|has been) suggested to)\b/gi, m, 1, "suggested THAT…"));
  out = out.concat(A(/\b(a bit like as)\b/gi, m, 1, "a bit like…"));
  return out;
};
