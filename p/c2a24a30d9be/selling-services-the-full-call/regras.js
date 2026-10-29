/* As regras do corretor · Selling Services 25 · The Full Call. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(how many \w+ has (?:the|your|this) \w+)/gi, m, 1, "How many … does the company have?"));
  out = out.concat(A(/\b(where is located)\b/gi, m, 1, "Where is the office? (no “is located the”)"));
  out = out.concat(A(/\b((?:what|which) (?:system|erp|software) you (?:use|have))\b/gi, m, 1, "What system do you use? (helper do)"));
  return out;
};
