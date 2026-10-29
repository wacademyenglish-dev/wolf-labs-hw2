/* As regras do corretor · Selling Services 24 · The Pipeline. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:will|won[’']t) to (?:send|call|talk|visit|check|do|go|write|meet|print|prepare))\b/gi, m, 1, "After will: the simple verb (I’ll send)."));
  out = out.concat(A(/((?:will|’ll|'ll) (?:calling|sending|talking|visiting|going|doing|writing|meeting|preparing))\b/gi, m, 1, "No -ing after will: I’ll call."));
  out = out.concat(A(/\b(don[’']?t will)\b/gi, m, 1, "Negative: won’t (I won’t go)."));
  return out;
};
