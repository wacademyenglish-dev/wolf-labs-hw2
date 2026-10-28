/* As regras do corretor · Selling Services 8 · How Much Is It?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:two|three|four|five|six|seven|eight|nine|ten|twenty|thirty|fifty|hundred|\d+) (?:thousands|millions))\b/gi, m, 1, "With a number: two thousand, five million (no s)."));
  out = out.concat(A(/\b(how much (?:employees|people|invoices|clients|factories|companies|paychecks))\b/gi, m, 1, "You count it: How many employees / invoices?"));
  out = out.concat(A(/\b(percents)\b/gi, m, 1, "percent: no s (twenty-five percent)."));
  return out;
};
