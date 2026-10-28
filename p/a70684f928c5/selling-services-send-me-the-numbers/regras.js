/* As regras do corretor · Selling Services 7 · Can You Send Me the Numbers?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:can|can[’']t|cannot|could) to \w+)\b/gi, m, 1, "can / can’t / could + verb, no “to”: we can send."));
  out = out.concat(A(/^((?:you|they|he|she) can \w+[^?\n]*\?)/gim, m, 1, "Question: Can you send…? (can comes first)."));
  return out;
};
