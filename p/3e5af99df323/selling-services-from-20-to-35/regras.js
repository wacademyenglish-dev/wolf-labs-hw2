/* As regras do corretor · Selling Services 22 · From 20% to 35%. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:increased|decreased|went up|went down|grew|fell) in \d+ ?%)/gi, m, 1, "The difference: by (increased by 15%)."));
  out = out.concat(A(/\b(from \d+%? for \d+)/gi, m, 1, "Start and end: from … to …"));
  out = out.concat(A(/\b(grew up)\b/gi, m, 1, "Numbers grow by…; “grow up” is for children."));
  return out;
};
