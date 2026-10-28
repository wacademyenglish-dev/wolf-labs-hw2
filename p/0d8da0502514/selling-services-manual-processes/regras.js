/* As regras do corretor · Selling Services 2 · There Are a Lot of Manual Processes. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(there is (?:two|three|four|five|six|many|\d[\d,.]*))\b/gi, m, 1, "Two or more: there are."));
  out = out.concat(A(/\b(there (?:don[’']t|no) have)\b/gi, m, 1, "Negative: there isn’t / there aren’t."));
  return out;
};
