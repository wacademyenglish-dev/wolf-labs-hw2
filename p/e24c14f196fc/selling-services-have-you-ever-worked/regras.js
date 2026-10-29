/* As regras do corretor · Selling Services 27 · Have You Ever Worked with SAP?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(you already (?:worked|used|had|visited|been|tried|closed))\b/gi, m, 1, "Experience: Have you ever worked…?"));
  out = out.concat(A(/\b(have you ever (?:work|use|visit|try|close|have|go|do|see|lose))\b/gi, m, 1, "have + -ed: Have you ever worked / used / had…?"));
  out = out.concat(A(/\b((?:have|has) (?:worked|used) with \w+ (?:in 20\d\d|last year))\b/gi, m, 1, "With a time, use the past: We worked with them in 2024."));
  return out;
};
