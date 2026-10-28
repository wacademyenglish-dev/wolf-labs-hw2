/* As regras do corretor · Selling Services 4 · Is There a Payroll Team?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/^((?:you|they) (?:use|have|work|need|do)\b[^?\n]*\?)/gim, m, 1, "Question with an action verb: Do you use…? Do they have…?"));
  out = out.concat(A(/\b(have (?:a|an|any) [^?\n]*\?)/gi, m, 1, "“Tem…?” = Is there…? / Are there…?"));
  out = out.concat(A(/\b(yes, i use|yes, we use)\b/gi, m, 1, "Short answer: Yes, I do. / Yes, we do."));
  return out;
};
