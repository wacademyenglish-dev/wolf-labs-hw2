/* As regras do corretor da revisão Find Out or Ascertain?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(put(?:s|ting)? up (?:the|this|that|it|him|her|them|noise))\b/gi, m, 1, "put up WITH…"));
  out = out.concat(A(/\b(c(?:a|o)me(?:s)? up (?:a|an|the) (?:idea|plan|solution|name))\b/gi, m, 1, "come up WITH an idea."));
  out = out.concat(A(/\b(look(?:ed|ing|s)? on (?:it|the problem|the matter))\b/gi, m, 1, "look INTO a problem."));
  return out;
};
