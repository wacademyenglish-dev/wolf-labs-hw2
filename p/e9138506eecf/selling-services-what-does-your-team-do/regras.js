/* As regras do corretor · Selling Services 6 · What Does Your Team Do?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:he|she|it|the team|the client|the company|the cfo|the manager|the erp) don[’']t)\b/gi, m, 1, "He / she / it / the team: doesn’t."));
  out = out.concat(A(/\b((?:does|doesn[’']t) (?:he|she|it|the team|the client) (?:works|uses|pays|sends|needs|wants|checks|knows|closes))\b/gi, m, 1, "After does: the verb has no s (Does she work…?)."));
  out = out.concat(A(/\b(doesn[’']t (?:works|uses|pays|sends|needs|wants|checks|knows|closes))\b/gi, m, 1, "After doesn’t: the verb has no s (he doesn’t send)."));
  return out;
};
