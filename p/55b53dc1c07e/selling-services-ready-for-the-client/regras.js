/* As regras do corretor · Selling Services 29 · Review: Ready for the Client. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:love|like|enjoy|enjoyed|hate) (?:sail|cook|play|watch|travel|read|talk|run|swim))\b/gi, m, 1, "love / like / enjoy + -ing: I love sailing."));
  out = out.concat(A(/\b((?:it|the price|the proposal) don[’']t include)\b/gi, m, 1, "It doesn’t include."));
  out = out.concat(A(/\b(ha(?:ve|s) that (?:send|call|talk|check|go|do|meet|answer))\b/gi, m, 1, "Necessary: have to (I have to call)."));
  return out;
};
