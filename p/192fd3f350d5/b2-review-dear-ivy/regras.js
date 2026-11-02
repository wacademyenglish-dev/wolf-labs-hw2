/* As regras do corretor da revisão Dear Ivy. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:I|you|we|they|he|she|it) will)\b/gi, m, 1, "After if: present. If you tell her, she’ll…"));
  out = out.concat(A(/\b(if (?:I|you|we|they|he|she) would)\b/gi, m, 1, "No would after if: If I were you… / If you had asked…"));
  out = out.concat(A(/\b(unless (?:you|I|we|they|he|she|it) (?:don’t|doesn’t|don't|doesn't))\b/gi, m, 1, "unless already means if not."));
  out = out.concat(A(/\b(I wish (?:I|you|we|they|he|she) (?:have|am|is|are|can|know|live|work))\b/gi, m, 1, "wish + past: I wish I HAD, I wish I COULD."));
  return out;
};
