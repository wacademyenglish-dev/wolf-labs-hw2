/* As regras do corretor da revisão The Flat Hunt. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:flat|house|thing|book|car|street|man|woman|person|neighbor|city) what)\b/gi, m, 1, "who (people), which / that (things). Never what."));
  out = out.concat(A(/\b(where (?:I|you|we|they|he|she) \w+ there)\b/gi, m, 1, "After where, no there at the end."));
  out = out.concat(A(/\b((?:make|makes|made|let|lets) (?:me|you|him|her|us|them) to \w+)\b/gi, m, 1, "make / let + person + verb (no to)."));
  out = out.concat(A(/\b((?:would|’d|'d) rather to \w+)\b/gi, m, 1, "would rather + verb (no to)."));
  return out;
};
