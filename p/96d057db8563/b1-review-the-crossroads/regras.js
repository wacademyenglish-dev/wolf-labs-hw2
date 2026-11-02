/* As regras do corretor da revisão The Crossroads. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:I|you|we|they|he|she|it) will)\b/gi, m, 1, "After if: present. If it rains, I’ll…"));
  out = out.concat(A(/\b(if (?:I|you|we|they|he|she) would)\b/gi, m, 1, "No would after if: If I had… / If I had known…"));
  out = out.concat(A(/\b(unless (?:it|I|you|we|they|he|she) (?:doesn’t|don’t|doesn't|don't))\b/gi, m, 1, "unless already means if not: unless it rains."));
  out = out.concat(A(/\b(would (?:went|called|known|done|gone|seen|told|met|studied))\b/gi, m, 1, "The past: would HAVE + participle."));
  return out;
};
