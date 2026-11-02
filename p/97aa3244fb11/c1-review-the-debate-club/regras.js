/* As regras do corretor da revisão The Debate Club. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(be that as it is)\b/gi, m, 1, "Be that as it MAY."));
  out = out.concat(A(/\b(what if (?:we|you|they|people) would)\b/gi, m, 1, "What if + past: What if we worked…?"));
  out = out.concat(A(/\b(it might worth)\b/gi, m, 1, "it might BE worth…"));
  return out;
};
