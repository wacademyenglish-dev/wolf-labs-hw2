/* As regras do corretor da revisão The Closing Ceremony. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:sorry|I apologi[sz]e) (?:for|about) my english)\b/gi, m, 1, "Never apologize in a speech: start with a hook."));
  out = out.concat(A(/\b(never (?:I|we|they|he|she) had)\b/gi, m, 1, "Inversion: Never HAD I felt…"));
  out = out.concat(A(/\b(in conclusion,? to conclude)\b/gi, m, 1, "One closing phrase."));
  return out;
};
