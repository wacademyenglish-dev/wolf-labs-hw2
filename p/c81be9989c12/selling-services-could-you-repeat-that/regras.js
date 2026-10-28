/* As regras do corretor · Selling Services 14 · Sorry, Could You Repeat That?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(more slow)\b/gi, m, 1, "Speak how? more slowly."));
  out = out.concat(A(/\b(arroba)\b/gi, m, 1, "@ in English is “at”."));
  out = out.concat(A(/^(what\?)/gim, m, 1, "With a client: Sorry, could you repeat that?"));
  return out;
};
