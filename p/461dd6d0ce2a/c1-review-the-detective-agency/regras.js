/* As regras do corretor da revisão The Detective Agency. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(needn’t have to|needn't have to)\b/gi, m, 1, "needn’t have + participle: needn’t have bought."));
  out = out.concat(A(/\b((?:will|’ll|'ll) (?:left|known|forced|come|gone|arrived|fallen))\b/gi, m, 1, "A guess about the past: will HAVE left."));
  out = out.concat(A(/\b(could (?:we|I|you) possible)\b/gi, m, 1, "could we possibly…"));
  return out;
};
