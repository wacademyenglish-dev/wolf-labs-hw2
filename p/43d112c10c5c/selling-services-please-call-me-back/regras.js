/* As regras do corretor · Selling Services 18 · Please Call Me Back. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(return me)\b/gi, m, 1, "“Me retorne” = Please call me back."));
  out = out.concat(A(/\b(\d{1,2}h)\b/gi, m, 1, "In English: 1–12 + a.m. / p.m. (3 p.m.)."));
  out = out.concat(A(/\b(please to \w+)\b/gi, m, 1, "Please + verb, no “to”: Please call me."));
  return out;
};
